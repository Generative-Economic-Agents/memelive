System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2016-11-28',
          endpointPrefix: 'organizations',
          jsonVersion: '1.1',
          protocol: 'json',
          serviceAbbreviation: 'Organizations',
          serviceFullName: 'AWS Organizations',
          serviceId: 'Organizations',
          signatureVersion: 'v4',
          targetPrefix: 'AWSOrganizationsV20161128',
          uid: 'organizations-2016-11-28'
        },
        operations: {
          AcceptHandshake: {
            input: {
              type: 'structure',
              required: ['HandshakeId'],
              members: {
                HandshakeId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Handshake: {
                  shape: 'S4'
                }
              }
            }
          },
          AttachPolicy: {
            input: {
              type: 'structure',
              required: ['PolicyId', 'TargetId'],
              members: {
                PolicyId: {},
                TargetId: {}
              }
            }
          },
          CancelHandshake: {
            input: {
              type: 'structure',
              required: ['HandshakeId'],
              members: {
                HandshakeId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Handshake: {
                  shape: 'S4'
                }
              }
            }
          },
          CloseAccount: {
            input: {
              type: 'structure',
              required: ['AccountId'],
              members: {
                AccountId: {}
              }
            }
          },
          CreateAccount: {
            input: {
              type: 'structure',
              required: ['Email', 'AccountName'],
              members: {
                Email: {
                  shape: 'Sp'
                },
                AccountName: {
                  shape: 'Sq'
                },
                RoleName: {},
                IamUserAccessToBilling: {},
                Tags: {
                  shape: 'St'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                CreateAccountStatus: {
                  shape: 'Sy'
                }
              }
            }
          },
          CreateGovCloudAccount: {
            input: {
              type: 'structure',
              required: ['Email', 'AccountName'],
              members: {
                Email: {
                  shape: 'Sp'
                },
                AccountName: {
                  shape: 'Sq'
                },
                RoleName: {},
                IamUserAccessToBilling: {},
                Tags: {
                  shape: 'St'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                CreateAccountStatus: {
                  shape: 'Sy'
                }
              }
            }
          },
          CreateOrganization: {
            input: {
              type: 'structure',
              members: {
                FeatureSet: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Organization: {
                  shape: 'S17'
                }
              }
            }
          },
          CreateOrganizationalUnit: {
            input: {
              type: 'structure',
              required: ['ParentId', 'Name'],
              members: {
                ParentId: {},
                Name: {},
                Tags: {
                  shape: 'St'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                OrganizationalUnit: {
                  shape: 'S1j'
                }
              }
            }
          },
          CreatePolicy: {
            input: {
              type: 'structure',
              required: ['Content', 'Description', 'Name', 'Type'],
              members: {
                Content: {},
                Description: {},
                Name: {},
                Type: {},
                Tags: {
                  shape: 'St'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Policy: {
                  shape: 'S1r'
                }
              }
            }
          },
          DeclineHandshake: {
            input: {
              type: 'structure',
              required: ['HandshakeId'],
              members: {
                HandshakeId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Handshake: {
                  shape: 'S4'
                }
              }
            }
          },
          DeleteOrganization: {},
          DeleteOrganizationalUnit: {
            input: {
              type: 'structure',
              required: ['OrganizationalUnitId'],
              members: {
                OrganizationalUnitId: {}
              }
            }
          },
          DeletePolicy: {
            input: {
              type: 'structure',
              required: ['PolicyId'],
              members: {
                PolicyId: {}
              }
            }
          },
          DeleteResourcePolicy: {},
          DeregisterDelegatedAdministrator: {
            input: {
              type: 'structure',
              required: ['AccountId', 'ServicePrincipal'],
              members: {
                AccountId: {},
                ServicePrincipal: {}
              }
            }
          },
          DescribeAccount: {
            input: {
              type: 'structure',
              required: ['AccountId'],
              members: {
                AccountId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Account: {
                  shape: 'S23'
                }
              }
            }
          },
          DescribeCreateAccountStatus: {
            input: {
              type: 'structure',
              required: ['CreateAccountRequestId'],
              members: {
                CreateAccountRequestId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                CreateAccountStatus: {
                  shape: 'Sy'
                }
              }
            }
          },
          DescribeEffectivePolicy: {
            input: {
              type: 'structure',
              required: ['PolicyType'],
              members: {
                PolicyType: {},
                TargetId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                EffectivePolicy: {
                  type: 'structure',
                  members: {
                    PolicyContent: {},
                    LastUpdatedTimestamp: {
                      type: 'timestamp'
                    },
                    TargetId: {},
                    PolicyType: {}
                  }
                }
              }
            }
          },
          DescribeHandshake: {
            input: {
              type: 'structure',
              required: ['HandshakeId'],
              members: {
                HandshakeId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Handshake: {
                  shape: 'S4'
                }
              }
            }
          },
          DescribeOrganization: {
            output: {
              type: 'structure',
              members: {
                Organization: {
                  shape: 'S17'
                }
              }
            }
          },
          DescribeOrganizationalUnit: {
            input: {
              type: 'structure',
              required: ['OrganizationalUnitId'],
              members: {
                OrganizationalUnitId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                OrganizationalUnit: {
                  shape: 'S1j'
                }
              }
            }
          },
          DescribePolicy: {
            input: {
              type: 'structure',
              required: ['PolicyId'],
              members: {
                PolicyId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Policy: {
                  shape: 'S1r'
                }
              }
            }
          },
          DescribeResourcePolicy: {
            output: {
              type: 'structure',
              members: {
                ResourcePolicy: {
                  shape: 'S2l'
                }
              }
            }
          },
          DetachPolicy: {
            input: {
              type: 'structure',
              required: ['PolicyId', 'TargetId'],
              members: {
                PolicyId: {},
                TargetId: {}
              }
            }
          },
          DisableAWSServiceAccess: {
            input: {
              type: 'structure',
              required: ['ServicePrincipal'],
              members: {
                ServicePrincipal: {}
              }
            }
          },
          DisablePolicyType: {
            input: {
              type: 'structure',
              required: ['RootId', 'PolicyType'],
              members: {
                RootId: {},
                PolicyType: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Root: {
                  shape: 'S2v'
                }
              }
            }
          },
          EnableAWSServiceAccess: {
            input: {
              type: 'structure',
              required: ['ServicePrincipal'],
              members: {
                ServicePrincipal: {}
              }
            }
          },
          EnableAllFeatures: {
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {
                Handshake: {
                  shape: 'S4'
                }
              }
            }
          },
          EnablePolicyType: {
            input: {
              type: 'structure',
              required: ['RootId', 'PolicyType'],
              members: {
                RootId: {},
                PolicyType: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Root: {
                  shape: 'S2v'
                }
              }
            }
          },
          InviteAccountToOrganization: {
            input: {
              type: 'structure',
              required: ['Target'],
              members: {
                Target: {
                  shape: 'S7'
                },
                Notes: {
                  type: 'string',
                  sensitive: true
                },
                Tags: {
                  shape: 'St'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Handshake: {
                  shape: 'S4'
                }
              }
            }
          },
          LeaveOrganization: {},
          ListAWSServiceAccessForOrganization: {
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
              type: 'structure',
              members: {
                EnabledServicePrincipals: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ServicePrincipal: {},
                      DateEnabled: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListAccounts: {
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
              type: 'structure',
              members: {
                Accounts: {
                  shape: 'S3e'
                },
                NextToken: {}
              }
            }
          },
          ListAccountsForParent: {
            input: {
              type: 'structure',
              required: ['ParentId'],
              members: {
                ParentId: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Accounts: {
                  shape: 'S3e'
                },
                NextToken: {}
              }
            }
          },
          ListChildren: {
            input: {
              type: 'structure',
              required: ['ParentId', 'ChildType'],
              members: {
                ParentId: {},
                ChildType: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Children: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Id: {},
                      Type: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListCreateAccountStatus: {
            input: {
              type: 'structure',
              members: {
                States: {
                  type: 'list',
                  member: {}
                },
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                CreateAccountStatuses: {
                  type: 'list',
                  member: {
                    shape: 'Sy'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListDelegatedAdministrators: {
            input: {
              type: 'structure',
              members: {
                ServicePrincipal: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                DelegatedAdministrators: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Id: {},
                      Arn: {},
                      Email: {
                        shape: 'Sp'
                      },
                      Name: {
                        shape: 'S24'
                      },
                      Status: {},
                      JoinedMethod: {},
                      JoinedTimestamp: {
                        type: 'timestamp'
                      },
                      DelegationEnabledDate: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListDelegatedServicesForAccount: {
            input: {
              type: 'structure',
              required: ['AccountId'],
              members: {
                AccountId: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                DelegatedServices: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ServicePrincipal: {},
                      DelegationEnabledDate: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListHandshakesForAccount: {
            input: {
              type: 'structure',
              members: {
                Filter: {
                  shape: 'S40'
                },
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Handshakes: {
                  shape: 'S42'
                },
                NextToken: {}
              }
            }
          },
          ListHandshakesForOrganization: {
            input: {
              type: 'structure',
              members: {
                Filter: {
                  shape: 'S40'
                },
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Handshakes: {
                  shape: 'S42'
                },
                NextToken: {}
              }
            }
          },
          ListOrganizationalUnitsForParent: {
            input: {
              type: 'structure',
              required: ['ParentId'],
              members: {
                ParentId: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                OrganizationalUnits: {
                  type: 'list',
                  member: {
                    shape: 'S1j'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListParents: {
            input: {
              type: 'structure',
              required: ['ChildId'],
              members: {
                ChildId: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Parents: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Id: {},
                      Type: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListPolicies: {
            input: {
              type: 'structure',
              required: ['Filter'],
              members: {
                Filter: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Policies: {
                  shape: 'S4f'
                },
                NextToken: {}
              }
            }
          },
          ListPoliciesForTarget: {
            input: {
              type: 'structure',
              required: ['TargetId', 'Filter'],
              members: {
                TargetId: {},
                Filter: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Policies: {
                  shape: 'S4f'
                },
                NextToken: {}
              }
            }
          },
          ListRoots: {
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
              type: 'structure',
              members: {
                Roots: {
                  type: 'list',
                  member: {
                    shape: 'S2v'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListTagsForResource: {
            input: {
              type: 'structure',
              required: ['ResourceId'],
              members: {
                ResourceId: {},
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Tags: {
                  shape: 'St'
                },
                NextToken: {}
              }
            }
          },
          ListTargetsForPolicy: {
            input: {
              type: 'structure',
              required: ['PolicyId'],
              members: {
                PolicyId: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Targets: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      TargetId: {},
                      Arn: {},
                      Name: {},
                      Type: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          MoveAccount: {
            input: {
              type: 'structure',
              required: ['AccountId', 'SourceParentId', 'DestinationParentId'],
              members: {
                AccountId: {},
                SourceParentId: {},
                DestinationParentId: {}
              }
            }
          },
          PutResourcePolicy: {
            input: {
              type: 'structure',
              required: ['Content'],
              members: {
                Content: {},
                Tags: {
                  shape: 'St'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ResourcePolicy: {
                  shape: 'S2l'
                }
              }
            }
          },
          RegisterDelegatedAdministrator: {
            input: {
              type: 'structure',
              required: ['AccountId', 'ServicePrincipal'],
              members: {
                AccountId: {},
                ServicePrincipal: {}
              }
            }
          },
          RemoveAccountFromOrganization: {
            input: {
              type: 'structure',
              required: ['AccountId'],
              members: {
                AccountId: {}
              }
            }
          },
          TagResource: {
            input: {
              type: 'structure',
              required: ['ResourceId', 'Tags'],
              members: {
                ResourceId: {},
                Tags: {
                  shape: 'St'
                }
              }
            }
          },
          UntagResource: {
            input: {
              type: 'structure',
              required: ['ResourceId', 'TagKeys'],
              members: {
                ResourceId: {},
                TagKeys: {
                  type: 'list',
                  member: {}
                }
              }
            }
          },
          UpdateOrganizationalUnit: {
            input: {
              type: 'structure',
              required: ['OrganizationalUnitId'],
              members: {
                OrganizationalUnitId: {},
                Name: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                OrganizationalUnit: {
                  shape: 'S1j'
                }
              }
            }
          },
          UpdatePolicy: {
            input: {
              type: 'structure',
              required: ['PolicyId'],
              members: {
                PolicyId: {},
                Name: {},
                Description: {},
                Content: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Policy: {
                  shape: 'S1r'
                }
              }
            }
          }
        },
        shapes: {
          S4: {
            type: 'structure',
            members: {
              Id: {},
              Arn: {},
              Parties: {
                type: 'list',
                member: {
                  shape: 'S7'
                }
              },
              State: {},
              RequestedTimestamp: {
                type: 'timestamp'
              },
              ExpirationTimestamp: {
                type: 'timestamp'
              },
              Action: {},
              Resources: {
                shape: 'Sd'
              }
            }
          },
          S7: {
            type: 'structure',
            required: ['Id', 'Type'],
            members: {
              Id: {
                type: 'string',
                sensitive: true
              },
              Type: {}
            }
          },
          Sd: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Value: {
                  type: 'string',
                  sensitive: true
                },
                Type: {},
                Resources: {
                  shape: 'Sd'
                }
              }
            }
          },
          Sp: {
            type: 'string',
            sensitive: true
          },
          Sq: {
            type: 'string',
            sensitive: true
          },
          St: {
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
          Sy: {
            type: 'structure',
            members: {
              Id: {},
              AccountName: {
                shape: 'Sq'
              },
              State: {},
              RequestedTimestamp: {
                type: 'timestamp'
              },
              CompletedTimestamp: {
                type: 'timestamp'
              },
              AccountId: {},
              GovCloudAccountId: {},
              FailureReason: {}
            }
          },
          S17: {
            type: 'structure',
            members: {
              Id: {},
              Arn: {},
              FeatureSet: {},
              MasterAccountArn: {},
              MasterAccountId: {},
              MasterAccountEmail: {
                shape: 'Sp'
              },
              AvailablePolicyTypes: {
                shape: 'S1b'
              }
            }
          },
          S1b: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Type: {},
                Status: {}
              }
            }
          },
          S1j: {
            type: 'structure',
            members: {
              Id: {},
              Arn: {},
              Name: {}
            }
          },
          S1r: {
            type: 'structure',
            members: {
              PolicySummary: {
                shape: 'S1s'
              },
              Content: {}
            }
          },
          S1s: {
            type: 'structure',
            members: {
              Id: {},
              Arn: {},
              Name: {},
              Description: {},
              Type: {},
              AwsManaged: {
                type: 'boolean'
              }
            }
          },
          S23: {
            type: 'structure',
            members: {
              Id: {},
              Arn: {},
              Email: {
                shape: 'Sp'
              },
              Name: {
                shape: 'S24'
              },
              Status: {},
              JoinedMethod: {},
              JoinedTimestamp: {
                type: 'timestamp'
              }
            }
          },
          S24: {
            type: 'string',
            sensitive: true
          },
          S2l: {
            type: 'structure',
            members: {
              ResourcePolicySummary: {
                type: 'structure',
                members: {
                  Id: {},
                  Arn: {}
                }
              },
              Content: {}
            }
          },
          S2v: {
            type: 'structure',
            members: {
              Id: {},
              Arn: {},
              Name: {},
              PolicyTypes: {
                shape: 'S1b'
              }
            }
          },
          S3e: {
            type: 'list',
            member: {
              shape: 'S23'
            }
          },
          S40: {
            type: 'structure',
            members: {
              ActionType: {},
              ParentHandshakeId: {}
            }
          },
          S42: {
            type: 'list',
            member: {
              shape: 'S4'
            }
          },
          S4f: {
            type: 'list',
            member: {
              shape: 'S1s'
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=339c15bec899723a4cefef20f2acb9764ed64032.js.map