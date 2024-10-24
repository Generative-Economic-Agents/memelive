System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2020-07-20',
          endpointPrefix: 'sso',
          jsonVersion: '1.1',
          protocol: 'json',
          serviceAbbreviation: 'SSO Admin',
          serviceFullName: 'AWS Single Sign-On Admin',
          serviceId: 'SSO Admin',
          signatureVersion: 'v4',
          signingName: 'sso',
          targetPrefix: 'SWBExternalService',
          uid: 'sso-admin-2020-07-20'
        },
        operations: {
          AttachCustomerManagedPolicyReferenceToPermissionSet: {
            input: {
              type: 'structure',
              required: ['CustomerManagedPolicyReference', 'InstanceArn', 'PermissionSetArn'],
              members: {
                CustomerManagedPolicyReference: {
                  shape: 'S2'
                },
                InstanceArn: {},
                PermissionSetArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          AttachManagedPolicyToPermissionSet: {
            input: {
              type: 'structure',
              required: ['InstanceArn', 'ManagedPolicyArn', 'PermissionSetArn'],
              members: {
                InstanceArn: {},
                ManagedPolicyArn: {},
                PermissionSetArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          CreateAccountAssignment: {
            input: {
              type: 'structure',
              required: ['InstanceArn', 'PermissionSetArn', 'PrincipalId', 'PrincipalType', 'TargetId', 'TargetType'],
              members: {
                InstanceArn: {},
                PermissionSetArn: {},
                PrincipalId: {},
                PrincipalType: {},
                TargetId: {},
                TargetType: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                AccountAssignmentCreationStatus: {
                  shape: 'Sh'
                }
              }
            }
          },
          CreateApplication: {
            input: {
              type: 'structure',
              required: ['ApplicationProviderArn', 'InstanceArn', 'Name'],
              members: {
                ApplicationProviderArn: {},
                ClientToken: {
                  idempotencyToken: true
                },
                Description: {},
                InstanceArn: {},
                Name: {},
                PortalOptions: {
                  shape: 'Sr'
                },
                Status: {},
                Tags: {
                  shape: 'Sx'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ApplicationArn: {}
              }
            }
          },
          CreateApplicationAssignment: {
            input: {
              type: 'structure',
              required: ['ApplicationArn', 'PrincipalId', 'PrincipalType'],
              members: {
                ApplicationArn: {},
                PrincipalId: {},
                PrincipalType: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          CreateInstance: {
            input: {
              type: 'structure',
              members: {
                ClientToken: {
                  idempotencyToken: true
                },
                Name: {},
                Tags: {
                  shape: 'Sx'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                InstanceArn: {}
              }
            }
          },
          CreateInstanceAccessControlAttributeConfiguration: {
            input: {
              type: 'structure',
              required: ['InstanceAccessControlAttributeConfiguration', 'InstanceArn'],
              members: {
                InstanceAccessControlAttributeConfiguration: {
                  shape: 'S18'
                },
                InstanceArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          CreatePermissionSet: {
            input: {
              type: 'structure',
              required: ['InstanceArn', 'Name'],
              members: {
                Description: {},
                InstanceArn: {},
                Name: {},
                RelayState: {},
                SessionDuration: {},
                Tags: {
                  shape: 'Sx'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                PermissionSet: {
                  shape: 'S1m'
                }
              }
            }
          },
          CreateTrustedTokenIssuer: {
            input: {
              type: 'structure',
              required: ['InstanceArn', 'Name', 'TrustedTokenIssuerConfiguration', 'TrustedTokenIssuerType'],
              members: {
                ClientToken: {
                  idempotencyToken: true
                },
                InstanceArn: {},
                Name: {},
                Tags: {
                  shape: 'Sx'
                },
                TrustedTokenIssuerConfiguration: {
                  shape: 'S1p'
                },
                TrustedTokenIssuerType: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                TrustedTokenIssuerArn: {}
              }
            }
          },
          DeleteAccountAssignment: {
            input: {
              type: 'structure',
              required: ['InstanceArn', 'PermissionSetArn', 'PrincipalId', 'PrincipalType', 'TargetId', 'TargetType'],
              members: {
                InstanceArn: {},
                PermissionSetArn: {},
                PrincipalId: {},
                PrincipalType: {},
                TargetId: {},
                TargetType: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                AccountAssignmentDeletionStatus: {
                  shape: 'Sh'
                }
              }
            }
          },
          DeleteApplication: {
            input: {
              type: 'structure',
              required: ['ApplicationArn'],
              members: {
                ApplicationArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteApplicationAccessScope: {
            input: {
              type: 'structure',
              required: ['ApplicationArn', 'Scope'],
              members: {
                ApplicationArn: {},
                Scope: {}
              }
            },
            idempotent: true
          },
          DeleteApplicationAssignment: {
            input: {
              type: 'structure',
              required: ['ApplicationArn', 'PrincipalId', 'PrincipalType'],
              members: {
                ApplicationArn: {},
                PrincipalId: {},
                PrincipalType: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeleteApplicationAuthenticationMethod: {
            input: {
              type: 'structure',
              required: ['ApplicationArn', 'AuthenticationMethodType'],
              members: {
                ApplicationArn: {},
                AuthenticationMethodType: {}
              }
            },
            idempotent: true
          },
          DeleteApplicationGrant: {
            input: {
              type: 'structure',
              required: ['ApplicationArn', 'GrantType'],
              members: {
                ApplicationArn: {},
                GrantType: {}
              }
            },
            idempotent: true
          },
          DeleteInlinePolicyFromPermissionSet: {
            input: {
              type: 'structure',
              required: ['InstanceArn', 'PermissionSetArn'],
              members: {
                InstanceArn: {},
                PermissionSetArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteInstance: {
            input: {
              type: 'structure',
              required: ['InstanceArn'],
              members: {
                InstanceArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteInstanceAccessControlAttributeConfiguration: {
            input: {
              type: 'structure',
              required: ['InstanceArn'],
              members: {
                InstanceArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeletePermissionSet: {
            input: {
              type: 'structure',
              required: ['InstanceArn', 'PermissionSetArn'],
              members: {
                InstanceArn: {},
                PermissionSetArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeletePermissionsBoundaryFromPermissionSet: {
            input: {
              type: 'structure',
              required: ['InstanceArn', 'PermissionSetArn'],
              members: {
                InstanceArn: {},
                PermissionSetArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteTrustedTokenIssuer: {
            input: {
              type: 'structure',
              required: ['TrustedTokenIssuerArn'],
              members: {
                TrustedTokenIssuerArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DescribeAccountAssignmentCreationStatus: {
            input: {
              type: 'structure',
              required: ['AccountAssignmentCreationRequestId', 'InstanceArn'],
              members: {
                AccountAssignmentCreationRequestId: {},
                InstanceArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                AccountAssignmentCreationStatus: {
                  shape: 'Sh'
                }
              }
            }
          },
          DescribeAccountAssignmentDeletionStatus: {
            input: {
              type: 'structure',
              required: ['AccountAssignmentDeletionRequestId', 'InstanceArn'],
              members: {
                AccountAssignmentDeletionRequestId: {},
                InstanceArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                AccountAssignmentDeletionStatus: {
                  shape: 'Sh'
                }
              }
            }
          },
          DescribeApplication: {
            input: {
              type: 'structure',
              required: ['ApplicationArn'],
              members: {
                ApplicationArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ApplicationAccount: {},
                ApplicationArn: {},
                ApplicationProviderArn: {},
                CreatedDate: {
                  type: 'timestamp'
                },
                Description: {},
                InstanceArn: {},
                Name: {},
                PortalOptions: {
                  shape: 'Sr'
                },
                Status: {}
              }
            }
          },
          DescribeApplicationAssignment: {
            input: {
              type: 'structure',
              required: ['ApplicationArn', 'PrincipalId', 'PrincipalType'],
              members: {
                ApplicationArn: {},
                PrincipalId: {},
                PrincipalType: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ApplicationArn: {},
                PrincipalId: {},
                PrincipalType: {}
              }
            }
          },
          DescribeApplicationProvider: {
            input: {
              type: 'structure',
              required: ['ApplicationProviderArn'],
              members: {
                ApplicationProviderArn: {}
              }
            },
            output: {
              type: 'structure',
              required: ['ApplicationProviderArn'],
              members: {
                ApplicationProviderArn: {},
                DisplayData: {
                  shape: 'S2x'
                },
                FederationProtocol: {},
                ResourceServerConfig: {
                  shape: 'S31'
                }
              }
            }
          },
          DescribeInstance: {
            input: {
              type: 'structure',
              required: ['InstanceArn'],
              members: {
                InstanceArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                CreatedDate: {
                  type: 'timestamp'
                },
                IdentityStoreId: {},
                InstanceArn: {},
                Name: {},
                OwnerAccountId: {},
                Status: {}
              }
            }
          },
          DescribeInstanceAccessControlAttributeConfiguration: {
            input: {
              type: 'structure',
              required: ['InstanceArn'],
              members: {
                InstanceArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                InstanceAccessControlAttributeConfiguration: {
                  shape: 'S18'
                },
                Status: {},
                StatusReason: {}
              }
            }
          },
          DescribePermissionSet: {
            input: {
              type: 'structure',
              required: ['InstanceArn', 'PermissionSetArn'],
              members: {
                InstanceArn: {},
                PermissionSetArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                PermissionSet: {
                  shape: 'S1m'
                }
              }
            }
          },
          DescribePermissionSetProvisioningStatus: {
            input: {
              type: 'structure',
              required: ['InstanceArn', 'ProvisionPermissionSetRequestId'],
              members: {
                InstanceArn: {},
                ProvisionPermissionSetRequestId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                PermissionSetProvisioningStatus: {
                  shape: 'S3h'
                }
              }
            }
          },
          DescribeTrustedTokenIssuer: {
            input: {
              type: 'structure',
              required: ['TrustedTokenIssuerArn'],
              members: {
                TrustedTokenIssuerArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Name: {},
                TrustedTokenIssuerArn: {},
                TrustedTokenIssuerConfiguration: {
                  shape: 'S1p'
                },
                TrustedTokenIssuerType: {}
              }
            }
          },
          DetachCustomerManagedPolicyReferenceFromPermissionSet: {
            input: {
              type: 'structure',
              required: ['CustomerManagedPolicyReference', 'InstanceArn', 'PermissionSetArn'],
              members: {
                CustomerManagedPolicyReference: {
                  shape: 'S2'
                },
                InstanceArn: {},
                PermissionSetArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DetachManagedPolicyFromPermissionSet: {
            input: {
              type: 'structure',
              required: ['InstanceArn', 'ManagedPolicyArn', 'PermissionSetArn'],
              members: {
                InstanceArn: {},
                ManagedPolicyArn: {},
                PermissionSetArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          GetApplicationAccessScope: {
            input: {
              type: 'structure',
              required: ['ApplicationArn', 'Scope'],
              members: {
                ApplicationArn: {},
                Scope: {}
              }
            },
            output: {
              type: 'structure',
              required: ['Scope'],
              members: {
                AuthorizedTargets: {
                  shape: 'S3q'
                },
                Scope: {}
              }
            }
          },
          GetApplicationAssignmentConfiguration: {
            input: {
              type: 'structure',
              required: ['ApplicationArn'],
              members: {
                ApplicationArn: {}
              }
            },
            output: {
              type: 'structure',
              required: ['AssignmentRequired'],
              members: {
                AssignmentRequired: {
                  type: 'boolean'
                }
              }
            }
          },
          GetApplicationAuthenticationMethod: {
            input: {
              type: 'structure',
              required: ['ApplicationArn', 'AuthenticationMethodType'],
              members: {
                ApplicationArn: {},
                AuthenticationMethodType: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                AuthenticationMethod: {
                  shape: 'S3x'
                }
              }
            }
          },
          GetApplicationGrant: {
            input: {
              type: 'structure',
              required: ['ApplicationArn', 'GrantType'],
              members: {
                ApplicationArn: {},
                GrantType: {}
              }
            },
            output: {
              type: 'structure',
              required: ['Grant'],
              members: {
                Grant: {
                  shape: 'S42'
                }
              }
            }
          },
          GetInlinePolicyForPermissionSet: {
            input: {
              type: 'structure',
              required: ['InstanceArn', 'PermissionSetArn'],
              members: {
                InstanceArn: {},
                PermissionSetArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                InlinePolicy: {}
              }
            }
          },
          GetPermissionsBoundaryForPermissionSet: {
            input: {
              type: 'structure',
              required: ['InstanceArn', 'PermissionSetArn'],
              members: {
                InstanceArn: {},
                PermissionSetArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                PermissionsBoundary: {
                  shape: 'S4i'
                }
              }
            }
          },
          ListAccountAssignmentCreationStatus: {
            input: {
              type: 'structure',
              required: ['InstanceArn'],
              members: {
                Filter: {
                  shape: 'S4k'
                },
                InstanceArn: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                AccountAssignmentsCreationStatus: {
                  shape: 'S4o'
                },
                NextToken: {}
              }
            }
          },
          ListAccountAssignmentDeletionStatus: {
            input: {
              type: 'structure',
              required: ['InstanceArn'],
              members: {
                Filter: {
                  shape: 'S4k'
                },
                InstanceArn: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                AccountAssignmentsDeletionStatus: {
                  shape: 'S4o'
                },
                NextToken: {}
              }
            }
          },
          ListAccountAssignments: {
            input: {
              type: 'structure',
              required: ['AccountId', 'InstanceArn', 'PermissionSetArn'],
              members: {
                AccountId: {},
                InstanceArn: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {},
                PermissionSetArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                AccountAssignments: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      AccountId: {},
                      PermissionSetArn: {},
                      PrincipalId: {},
                      PrincipalType: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListAccountAssignmentsForPrincipal: {
            input: {
              type: 'structure',
              required: ['InstanceArn', 'PrincipalId', 'PrincipalType'],
              members: {
                Filter: {
                  type: 'structure',
                  members: {
                    AccountId: {}
                  }
                },
                InstanceArn: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {},
                PrincipalId: {},
                PrincipalType: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                AccountAssignments: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      AccountId: {},
                      PermissionSetArn: {},
                      PrincipalId: {},
                      PrincipalType: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListAccountsForProvisionedPermissionSet: {
            input: {
              type: 'structure',
              required: ['InstanceArn', 'PermissionSetArn'],
              members: {
                InstanceArn: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {},
                PermissionSetArn: {},
                ProvisioningStatus: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                AccountIds: {
                  type: 'list',
                  member: {}
                },
                NextToken: {}
              }
            }
          },
          ListApplicationAccessScopes: {
            input: {
              type: 'structure',
              required: ['ApplicationArn'],
              members: {
                ApplicationArn: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              required: ['Scopes'],
              members: {
                NextToken: {},
                Scopes: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Scope'],
                    members: {
                      AuthorizedTargets: {
                        shape: 'S3q'
                      },
                      Scope: {}
                    }
                  }
                }
              }
            }
          },
          ListApplicationAssignments: {
            input: {
              type: 'structure',
              required: ['ApplicationArn'],
              members: {
                ApplicationArn: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ApplicationAssignments: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['ApplicationArn', 'PrincipalId', 'PrincipalType'],
                    members: {
                      ApplicationArn: {},
                      PrincipalId: {},
                      PrincipalType: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListApplicationAssignmentsForPrincipal: {
            input: {
              type: 'structure',
              required: ['InstanceArn', 'PrincipalId', 'PrincipalType'],
              members: {
                Filter: {
                  type: 'structure',
                  members: {
                    ApplicationArn: {}
                  }
                },
                InstanceArn: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {},
                PrincipalId: {},
                PrincipalType: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ApplicationAssignments: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ApplicationArn: {},
                      PrincipalId: {},
                      PrincipalType: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListApplicationAuthenticationMethods: {
            input: {
              type: 'structure',
              required: ['ApplicationArn'],
              members: {
                ApplicationArn: {},
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                AuthenticationMethods: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      AuthenticationMethod: {
                        shape: 'S3x'
                      },
                      AuthenticationMethodType: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListApplicationGrants: {
            input: {
              type: 'structure',
              required: ['ApplicationArn'],
              members: {
                ApplicationArn: {},
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              required: ['Grants'],
              members: {
                Grants: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Grant', 'GrantType'],
                    members: {
                      Grant: {
                        shape: 'S42'
                      },
                      GrantType: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListApplicationProviders: {
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
                ApplicationProviders: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['ApplicationProviderArn'],
                    members: {
                      ApplicationProviderArn: {},
                      DisplayData: {
                        shape: 'S2x'
                      },
                      FederationProtocol: {},
                      ResourceServerConfig: {
                        shape: 'S31'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListApplications: {
            input: {
              type: 'structure',
              required: ['InstanceArn'],
              members: {
                Filter: {
                  type: 'structure',
                  members: {
                    ApplicationAccount: {},
                    ApplicationProvider: {}
                  }
                },
                InstanceArn: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Applications: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ApplicationAccount: {},
                      ApplicationArn: {},
                      ApplicationProviderArn: {},
                      CreatedDate: {
                        type: 'timestamp'
                      },
                      Description: {},
                      InstanceArn: {},
                      Name: {},
                      PortalOptions: {
                        shape: 'Sr'
                      },
                      Status: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListCustomerManagedPolicyReferencesInPermissionSet: {
            input: {
              type: 'structure',
              required: ['InstanceArn', 'PermissionSetArn'],
              members: {
                InstanceArn: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {},
                PermissionSetArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                CustomerManagedPolicyReferences: {
                  type: 'list',
                  member: {
                    shape: 'S2'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListInstances: {
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
                Instances: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      CreatedDate: {
                        type: 'timestamp'
                      },
                      IdentityStoreId: {},
                      InstanceArn: {},
                      Name: {},
                      OwnerAccountId: {},
                      Status: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListManagedPoliciesInPermissionSet: {
            input: {
              type: 'structure',
              required: ['InstanceArn', 'PermissionSetArn'],
              members: {
                InstanceArn: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {},
                PermissionSetArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                AttachedManagedPolicies: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Arn: {},
                      Name: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListPermissionSetProvisioningStatus: {
            input: {
              type: 'structure',
              required: ['InstanceArn'],
              members: {
                Filter: {
                  shape: 'S4k'
                },
                InstanceArn: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                PermissionSetsProvisioningStatus: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      CreatedDate: {
                        type: 'timestamp'
                      },
                      RequestId: {},
                      Status: {}
                    }
                  }
                }
              }
            }
          },
          ListPermissionSets: {
            input: {
              type: 'structure',
              required: ['InstanceArn'],
              members: {
                InstanceArn: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                PermissionSets: {
                  shape: 'S6h'
                }
              }
            }
          },
          ListPermissionSetsProvisionedToAccount: {
            input: {
              type: 'structure',
              required: ['AccountId', 'InstanceArn'],
              members: {
                AccountId: {},
                InstanceArn: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {},
                ProvisioningStatus: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                PermissionSets: {
                  shape: 'S6h'
                }
              }
            }
          },
          ListTagsForResource: {
            input: {
              type: 'structure',
              required: ['ResourceArn'],
              members: {
                InstanceArn: {},
                NextToken: {},
                ResourceArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                Tags: {
                  shape: 'Sx'
                }
              }
            }
          },
          ListTrustedTokenIssuers: {
            input: {
              type: 'structure',
              required: ['InstanceArn'],
              members: {
                InstanceArn: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                TrustedTokenIssuers: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Name: {},
                      TrustedTokenIssuerArn: {},
                      TrustedTokenIssuerType: {}
                    }
                  }
                }
              }
            }
          },
          ProvisionPermissionSet: {
            input: {
              type: 'structure',
              required: ['InstanceArn', 'PermissionSetArn', 'TargetType'],
              members: {
                InstanceArn: {},
                PermissionSetArn: {},
                TargetId: {},
                TargetType: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                PermissionSetProvisioningStatus: {
                  shape: 'S3h'
                }
              }
            }
          },
          PutApplicationAccessScope: {
            input: {
              type: 'structure',
              required: ['ApplicationArn', 'Scope'],
              members: {
                ApplicationArn: {},
                AuthorizedTargets: {
                  shape: 'S3q'
                },
                Scope: {}
              }
            },
            idempotent: true
          },
          PutApplicationAssignmentConfiguration: {
            input: {
              type: 'structure',
              required: ['ApplicationArn', 'AssignmentRequired'],
              members: {
                ApplicationArn: {},
                AssignmentRequired: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          PutApplicationAuthenticationMethod: {
            input: {
              type: 'structure',
              required: ['ApplicationArn', 'AuthenticationMethod', 'AuthenticationMethodType'],
              members: {
                ApplicationArn: {},
                AuthenticationMethod: {
                  shape: 'S3x'
                },
                AuthenticationMethodType: {}
              }
            },
            idempotent: true
          },
          PutApplicationGrant: {
            input: {
              type: 'structure',
              required: ['ApplicationArn', 'Grant', 'GrantType'],
              members: {
                ApplicationArn: {},
                Grant: {
                  shape: 'S42'
                },
                GrantType: {}
              }
            },
            idempotent: true
          },
          PutInlinePolicyToPermissionSet: {
            input: {
              type: 'structure',
              required: ['InlinePolicy', 'InstanceArn', 'PermissionSetArn'],
              members: {
                InlinePolicy: {},
                InstanceArn: {},
                PermissionSetArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          PutPermissionsBoundaryToPermissionSet: {
            input: {
              type: 'structure',
              required: ['InstanceArn', 'PermissionSetArn', 'PermissionsBoundary'],
              members: {
                InstanceArn: {},
                PermissionSetArn: {},
                PermissionsBoundary: {
                  shape: 'S4i'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          TagResource: {
            input: {
              type: 'structure',
              required: ['ResourceArn', 'Tags'],
              members: {
                InstanceArn: {},
                ResourceArn: {},
                Tags: {
                  shape: 'Sx'
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
                InstanceArn: {},
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
          UpdateApplication: {
            input: {
              type: 'structure',
              required: ['ApplicationArn'],
              members: {
                ApplicationArn: {},
                Description: {},
                Name: {},
                PortalOptions: {
                  type: 'structure',
                  members: {
                    SignInOptions: {
                      shape: 'Ss'
                    }
                  }
                },
                Status: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateInstance: {
            input: {
              type: 'structure',
              required: ['InstanceArn', 'Name'],
              members: {
                InstanceArn: {},
                Name: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateInstanceAccessControlAttributeConfiguration: {
            input: {
              type: 'structure',
              required: ['InstanceAccessControlAttributeConfiguration', 'InstanceArn'],
              members: {
                InstanceAccessControlAttributeConfiguration: {
                  shape: 'S18'
                },
                InstanceArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdatePermissionSet: {
            input: {
              type: 'structure',
              required: ['InstanceArn', 'PermissionSetArn'],
              members: {
                Description: {},
                InstanceArn: {},
                PermissionSetArn: {},
                RelayState: {},
                SessionDuration: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateTrustedTokenIssuer: {
            input: {
              type: 'structure',
              required: ['TrustedTokenIssuerArn'],
              members: {
                Name: {},
                TrustedTokenIssuerArn: {},
                TrustedTokenIssuerConfiguration: {
                  type: 'structure',
                  members: {
                    OidcJwtConfiguration: {
                      type: 'structure',
                      members: {
                        ClaimAttributePath: {},
                        IdentityStoreAttributePath: {},
                        JwksRetrievalOption: {}
                      }
                    }
                  },
                  union: true
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
          S2: {
            type: 'structure',
            required: ['Name'],
            members: {
              Name: {},
              Path: {}
            }
          },
          Sh: {
            type: 'structure',
            members: {
              CreatedDate: {
                type: 'timestamp'
              },
              FailureReason: {},
              PermissionSetArn: {},
              PrincipalId: {},
              PrincipalType: {},
              RequestId: {},
              Status: {},
              TargetId: {},
              TargetType: {}
            }
          },
          Sr: {
            type: 'structure',
            members: {
              SignInOptions: {
                shape: 'Ss'
              },
              Visibility: {}
            }
          },
          Ss: {
            type: 'structure',
            required: ['Origin'],
            members: {
              ApplicationUrl: {},
              Origin: {}
            }
          },
          Sx: {
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
          S18: {
            type: 'structure',
            required: ['AccessControlAttributes'],
            members: {
              AccessControlAttributes: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['Key', 'Value'],
                  members: {
                    Key: {},
                    Value: {
                      type: 'structure',
                      required: ['Source'],
                      members: {
                        Source: {
                          type: 'list',
                          member: {}
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          S1m: {
            type: 'structure',
            members: {
              CreatedDate: {
                type: 'timestamp'
              },
              Description: {},
              Name: {},
              PermissionSetArn: {},
              RelayState: {},
              SessionDuration: {}
            }
          },
          S1p: {
            type: 'structure',
            members: {
              OidcJwtConfiguration: {
                type: 'structure',
                required: ['ClaimAttributePath', 'IdentityStoreAttributePath', 'IssuerUrl', 'JwksRetrievalOption'],
                members: {
                  ClaimAttributePath: {},
                  IdentityStoreAttributePath: {},
                  IssuerUrl: {},
                  JwksRetrievalOption: {}
                }
              }
            },
            union: true
          },
          S2x: {
            type: 'structure',
            members: {
              Description: {},
              DisplayName: {},
              IconUrl: {}
            }
          },
          S31: {
            type: 'structure',
            members: {
              Scopes: {
                type: 'map',
                key: {},
                value: {
                  type: 'structure',
                  members: {
                    DetailedTitle: {},
                    LongDescription: {}
                  }
                }
              }
            }
          },
          S3h: {
            type: 'structure',
            members: {
              AccountId: {},
              CreatedDate: {
                type: 'timestamp'
              },
              FailureReason: {},
              PermissionSetArn: {},
              RequestId: {},
              Status: {}
            }
          },
          S3q: {
            type: 'list',
            member: {}
          },
          S3x: {
            type: 'structure',
            members: {
              Iam: {
                type: 'structure',
                required: ['ActorPolicy'],
                members: {
                  ActorPolicy: {
                    type: 'structure',
                    members: {},
                    document: true
                  }
                }
              }
            },
            union: true
          },
          S42: {
            type: 'structure',
            members: {
              AuthorizationCode: {
                type: 'structure',
                members: {
                  RedirectUris: {
                    type: 'list',
                    member: {}
                  }
                }
              },
              JwtBearer: {
                type: 'structure',
                members: {
                  AuthorizedTokenIssuers: {
                    type: 'list',
                    member: {
                      type: 'structure',
                      members: {
                        AuthorizedAudiences: {
                          type: 'list',
                          member: {}
                        },
                        TrustedTokenIssuerArn: {}
                      }
                    }
                  }
                }
              },
              RefreshToken: {
                type: 'structure',
                members: {}
              },
              TokenExchange: {
                type: 'structure',
                members: {}
              }
            },
            union: true
          },
          S4i: {
            type: 'structure',
            members: {
              CustomerManagedPolicyReference: {
                shape: 'S2'
              },
              ManagedPolicyArn: {}
            }
          },
          S4k: {
            type: 'structure',
            members: {
              Status: {}
            }
          },
          S4o: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                CreatedDate: {
                  type: 'timestamp'
                },
                RequestId: {},
                Status: {}
              }
            }
          },
          S6h: {
            type: 'list',
            member: {}
          }
        }
      });
    }
  };
});
//# sourceMappingURL=449154b521b3bf7ad2dbcae52f9876c59a0a4f7b.js.map