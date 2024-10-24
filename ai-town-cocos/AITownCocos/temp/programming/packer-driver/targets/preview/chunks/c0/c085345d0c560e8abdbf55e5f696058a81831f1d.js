System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2010-05-08',
          endpointPrefix: 'iam',
          globalEndpoint: 'iam.amazonaws.com',
          protocol: 'query',
          serviceAbbreviation: 'IAM',
          serviceFullName: 'AWS Identity and Access Management',
          serviceId: 'IAM',
          signatureVersion: 'v4',
          uid: 'iam-2010-05-08',
          xmlNamespace: 'https://iam.amazonaws.com/doc/2010-05-08/'
        },
        operations: {
          AddClientIDToOpenIDConnectProvider: {
            input: {
              type: 'structure',
              required: ['OpenIDConnectProviderArn', 'ClientID'],
              members: {
                OpenIDConnectProviderArn: {},
                ClientID: {}
              }
            }
          },
          AddRoleToInstanceProfile: {
            input: {
              type: 'structure',
              required: ['InstanceProfileName', 'RoleName'],
              members: {
                InstanceProfileName: {},
                RoleName: {}
              }
            }
          },
          AddUserToGroup: {
            input: {
              type: 'structure',
              required: ['GroupName', 'UserName'],
              members: {
                GroupName: {},
                UserName: {}
              }
            }
          },
          AttachGroupPolicy: {
            input: {
              type: 'structure',
              required: ['GroupName', 'PolicyArn'],
              members: {
                GroupName: {},
                PolicyArn: {}
              }
            }
          },
          AttachRolePolicy: {
            input: {
              type: 'structure',
              required: ['RoleName', 'PolicyArn'],
              members: {
                RoleName: {},
                PolicyArn: {}
              }
            }
          },
          AttachUserPolicy: {
            input: {
              type: 'structure',
              required: ['UserName', 'PolicyArn'],
              members: {
                UserName: {},
                PolicyArn: {}
              }
            }
          },
          ChangePassword: {
            input: {
              type: 'structure',
              required: ['OldPassword', 'NewPassword'],
              members: {
                OldPassword: {
                  shape: 'Sf'
                },
                NewPassword: {
                  shape: 'Sf'
                }
              }
            }
          },
          CreateAccessKey: {
            input: {
              type: 'structure',
              members: {
                UserName: {}
              }
            },
            output: {
              resultWrapper: 'CreateAccessKeyResult',
              type: 'structure',
              required: ['AccessKey'],
              members: {
                AccessKey: {
                  type: 'structure',
                  required: ['UserName', 'AccessKeyId', 'Status', 'SecretAccessKey'],
                  members: {
                    UserName: {},
                    AccessKeyId: {},
                    Status: {},
                    SecretAccessKey: {
                      type: 'string',
                      sensitive: true
                    },
                    CreateDate: {
                      type: 'timestamp'
                    }
                  }
                }
              }
            }
          },
          CreateAccountAlias: {
            input: {
              type: 'structure',
              required: ['AccountAlias'],
              members: {
                AccountAlias: {}
              }
            }
          },
          CreateGroup: {
            input: {
              type: 'structure',
              required: ['GroupName'],
              members: {
                Path: {},
                GroupName: {}
              }
            },
            output: {
              resultWrapper: 'CreateGroupResult',
              type: 'structure',
              required: ['Group'],
              members: {
                Group: {
                  shape: 'Ss'
                }
              }
            }
          },
          CreateInstanceProfile: {
            input: {
              type: 'structure',
              required: ['InstanceProfileName'],
              members: {
                InstanceProfileName: {},
                Path: {},
                Tags: {
                  shape: 'Sv'
                }
              }
            },
            output: {
              resultWrapper: 'CreateInstanceProfileResult',
              type: 'structure',
              required: ['InstanceProfile'],
              members: {
                InstanceProfile: {
                  shape: 'S10'
                }
              }
            }
          },
          CreateLoginProfile: {
            input: {
              type: 'structure',
              required: ['UserName', 'Password'],
              members: {
                UserName: {},
                Password: {
                  shape: 'Sf'
                },
                PasswordResetRequired: {
                  type: 'boolean'
                }
              }
            },
            output: {
              resultWrapper: 'CreateLoginProfileResult',
              type: 'structure',
              required: ['LoginProfile'],
              members: {
                LoginProfile: {
                  shape: 'S1d'
                }
              }
            }
          },
          CreateOpenIDConnectProvider: {
            input: {
              type: 'structure',
              required: ['Url'],
              members: {
                Url: {},
                ClientIDList: {
                  shape: 'S1g'
                },
                ThumbprintList: {
                  shape: 'S1h'
                },
                Tags: {
                  shape: 'Sv'
                }
              }
            },
            output: {
              resultWrapper: 'CreateOpenIDConnectProviderResult',
              type: 'structure',
              members: {
                OpenIDConnectProviderArn: {},
                Tags: {
                  shape: 'Sv'
                }
              }
            }
          },
          CreatePolicy: {
            input: {
              type: 'structure',
              required: ['PolicyName', 'PolicyDocument'],
              members: {
                PolicyName: {},
                Path: {},
                PolicyDocument: {},
                Description: {},
                Tags: {
                  shape: 'Sv'
                }
              }
            },
            output: {
              resultWrapper: 'CreatePolicyResult',
              type: 'structure',
              members: {
                Policy: {
                  shape: 'S1p'
                }
              }
            }
          },
          CreatePolicyVersion: {
            input: {
              type: 'structure',
              required: ['PolicyArn', 'PolicyDocument'],
              members: {
                PolicyArn: {},
                PolicyDocument: {},
                SetAsDefault: {
                  type: 'boolean'
                }
              }
            },
            output: {
              resultWrapper: 'CreatePolicyVersionResult',
              type: 'structure',
              members: {
                PolicyVersion: {
                  shape: 'S1u'
                }
              }
            }
          },
          CreateRole: {
            input: {
              type: 'structure',
              required: ['RoleName', 'AssumeRolePolicyDocument'],
              members: {
                Path: {},
                RoleName: {},
                AssumeRolePolicyDocument: {},
                Description: {},
                MaxSessionDuration: {
                  type: 'integer'
                },
                PermissionsBoundary: {},
                Tags: {
                  shape: 'Sv'
                }
              }
            },
            output: {
              resultWrapper: 'CreateRoleResult',
              type: 'structure',
              required: ['Role'],
              members: {
                Role: {
                  shape: 'S12'
                }
              }
            }
          },
          CreateSAMLProvider: {
            input: {
              type: 'structure',
              required: ['SAMLMetadataDocument', 'Name'],
              members: {
                SAMLMetadataDocument: {},
                Name: {},
                Tags: {
                  shape: 'Sv'
                }
              }
            },
            output: {
              resultWrapper: 'CreateSAMLProviderResult',
              type: 'structure',
              members: {
                SAMLProviderArn: {},
                Tags: {
                  shape: 'Sv'
                }
              }
            }
          },
          CreateServiceLinkedRole: {
            input: {
              type: 'structure',
              required: ['AWSServiceName'],
              members: {
                AWSServiceName: {},
                Description: {},
                CustomSuffix: {}
              }
            },
            output: {
              resultWrapper: 'CreateServiceLinkedRoleResult',
              type: 'structure',
              members: {
                Role: {
                  shape: 'S12'
                }
              }
            }
          },
          CreateServiceSpecificCredential: {
            input: {
              type: 'structure',
              required: ['UserName', 'ServiceName'],
              members: {
                UserName: {},
                ServiceName: {}
              }
            },
            output: {
              resultWrapper: 'CreateServiceSpecificCredentialResult',
              type: 'structure',
              members: {
                ServiceSpecificCredential: {
                  shape: 'S27'
                }
              }
            }
          },
          CreateUser: {
            input: {
              type: 'structure',
              required: ['UserName'],
              members: {
                Path: {},
                UserName: {},
                PermissionsBoundary: {},
                Tags: {
                  shape: 'Sv'
                }
              }
            },
            output: {
              resultWrapper: 'CreateUserResult',
              type: 'structure',
              members: {
                User: {
                  shape: 'S2d'
                }
              }
            }
          },
          CreateVirtualMFADevice: {
            input: {
              type: 'structure',
              required: ['VirtualMFADeviceName'],
              members: {
                Path: {},
                VirtualMFADeviceName: {},
                Tags: {
                  shape: 'Sv'
                }
              }
            },
            output: {
              resultWrapper: 'CreateVirtualMFADeviceResult',
              type: 'structure',
              required: ['VirtualMFADevice'],
              members: {
                VirtualMFADevice: {
                  shape: 'S2h'
                }
              }
            }
          },
          DeactivateMFADevice: {
            input: {
              type: 'structure',
              required: ['UserName', 'SerialNumber'],
              members: {
                UserName: {},
                SerialNumber: {}
              }
            }
          },
          DeleteAccessKey: {
            input: {
              type: 'structure',
              required: ['AccessKeyId'],
              members: {
                UserName: {},
                AccessKeyId: {}
              }
            }
          },
          DeleteAccountAlias: {
            input: {
              type: 'structure',
              required: ['AccountAlias'],
              members: {
                AccountAlias: {}
              }
            }
          },
          DeleteAccountPasswordPolicy: {},
          DeleteGroup: {
            input: {
              type: 'structure',
              required: ['GroupName'],
              members: {
                GroupName: {}
              }
            }
          },
          DeleteGroupPolicy: {
            input: {
              type: 'structure',
              required: ['GroupName', 'PolicyName'],
              members: {
                GroupName: {},
                PolicyName: {}
              }
            }
          },
          DeleteInstanceProfile: {
            input: {
              type: 'structure',
              required: ['InstanceProfileName'],
              members: {
                InstanceProfileName: {}
              }
            }
          },
          DeleteLoginProfile: {
            input: {
              type: 'structure',
              required: ['UserName'],
              members: {
                UserName: {}
              }
            }
          },
          DeleteOpenIDConnectProvider: {
            input: {
              type: 'structure',
              required: ['OpenIDConnectProviderArn'],
              members: {
                OpenIDConnectProviderArn: {}
              }
            }
          },
          DeletePolicy: {
            input: {
              type: 'structure',
              required: ['PolicyArn'],
              members: {
                PolicyArn: {}
              }
            }
          },
          DeletePolicyVersion: {
            input: {
              type: 'structure',
              required: ['PolicyArn', 'VersionId'],
              members: {
                PolicyArn: {},
                VersionId: {}
              }
            }
          },
          DeleteRole: {
            input: {
              type: 'structure',
              required: ['RoleName'],
              members: {
                RoleName: {}
              }
            }
          },
          DeleteRolePermissionsBoundary: {
            input: {
              type: 'structure',
              required: ['RoleName'],
              members: {
                RoleName: {}
              }
            }
          },
          DeleteRolePolicy: {
            input: {
              type: 'structure',
              required: ['RoleName', 'PolicyName'],
              members: {
                RoleName: {},
                PolicyName: {}
              }
            }
          },
          DeleteSAMLProvider: {
            input: {
              type: 'structure',
              required: ['SAMLProviderArn'],
              members: {
                SAMLProviderArn: {}
              }
            }
          },
          DeleteSSHPublicKey: {
            input: {
              type: 'structure',
              required: ['UserName', 'SSHPublicKeyId'],
              members: {
                UserName: {},
                SSHPublicKeyId: {}
              }
            }
          },
          DeleteServerCertificate: {
            input: {
              type: 'structure',
              required: ['ServerCertificateName'],
              members: {
                ServerCertificateName: {}
              }
            }
          },
          DeleteServiceLinkedRole: {
            input: {
              type: 'structure',
              required: ['RoleName'],
              members: {
                RoleName: {}
              }
            },
            output: {
              resultWrapper: 'DeleteServiceLinkedRoleResult',
              type: 'structure',
              required: ['DeletionTaskId'],
              members: {
                DeletionTaskId: {}
              }
            }
          },
          DeleteServiceSpecificCredential: {
            input: {
              type: 'structure',
              required: ['ServiceSpecificCredentialId'],
              members: {
                UserName: {},
                ServiceSpecificCredentialId: {}
              }
            }
          },
          DeleteSigningCertificate: {
            input: {
              type: 'structure',
              required: ['CertificateId'],
              members: {
                UserName: {},
                CertificateId: {}
              }
            }
          },
          DeleteUser: {
            input: {
              type: 'structure',
              required: ['UserName'],
              members: {
                UserName: {}
              }
            }
          },
          DeleteUserPermissionsBoundary: {
            input: {
              type: 'structure',
              required: ['UserName'],
              members: {
                UserName: {}
              }
            }
          },
          DeleteUserPolicy: {
            input: {
              type: 'structure',
              required: ['UserName', 'PolicyName'],
              members: {
                UserName: {},
                PolicyName: {}
              }
            }
          },
          DeleteVirtualMFADevice: {
            input: {
              type: 'structure',
              required: ['SerialNumber'],
              members: {
                SerialNumber: {}
              }
            }
          },
          DetachGroupPolicy: {
            input: {
              type: 'structure',
              required: ['GroupName', 'PolicyArn'],
              members: {
                GroupName: {},
                PolicyArn: {}
              }
            }
          },
          DetachRolePolicy: {
            input: {
              type: 'structure',
              required: ['RoleName', 'PolicyArn'],
              members: {
                RoleName: {},
                PolicyArn: {}
              }
            }
          },
          DetachUserPolicy: {
            input: {
              type: 'structure',
              required: ['UserName', 'PolicyArn'],
              members: {
                UserName: {},
                PolicyArn: {}
              }
            }
          },
          EnableMFADevice: {
            input: {
              type: 'structure',
              required: ['UserName', 'SerialNumber', 'AuthenticationCode1', 'AuthenticationCode2'],
              members: {
                UserName: {},
                SerialNumber: {},
                AuthenticationCode1: {},
                AuthenticationCode2: {}
              }
            }
          },
          GenerateCredentialReport: {
            output: {
              resultWrapper: 'GenerateCredentialReportResult',
              type: 'structure',
              members: {
                State: {},
                Description: {}
              }
            }
          },
          GenerateOrganizationsAccessReport: {
            input: {
              type: 'structure',
              required: ['EntityPath'],
              members: {
                EntityPath: {},
                OrganizationsPolicyId: {}
              }
            },
            output: {
              resultWrapper: 'GenerateOrganizationsAccessReportResult',
              type: 'structure',
              members: {
                JobId: {}
              }
            }
          },
          GenerateServiceLastAccessedDetails: {
            input: {
              type: 'structure',
              required: ['Arn'],
              members: {
                Arn: {},
                Granularity: {}
              }
            },
            output: {
              resultWrapper: 'GenerateServiceLastAccessedDetailsResult',
              type: 'structure',
              members: {
                JobId: {}
              }
            }
          },
          GetAccessKeyLastUsed: {
            input: {
              type: 'structure',
              required: ['AccessKeyId'],
              members: {
                AccessKeyId: {}
              }
            },
            output: {
              resultWrapper: 'GetAccessKeyLastUsedResult',
              type: 'structure',
              members: {
                UserName: {},
                AccessKeyLastUsed: {
                  type: 'structure',
                  required: ['LastUsedDate', 'ServiceName', 'Region'],
                  members: {
                    LastUsedDate: {
                      type: 'timestamp'
                    },
                    ServiceName: {},
                    Region: {}
                  }
                }
              }
            }
          },
          GetAccountAuthorizationDetails: {
            input: {
              type: 'structure',
              members: {
                Filter: {
                  type: 'list',
                  member: {}
                },
                MaxItems: {
                  type: 'integer'
                },
                Marker: {}
              }
            },
            output: {
              resultWrapper: 'GetAccountAuthorizationDetailsResult',
              type: 'structure',
              members: {
                UserDetailList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Path: {},
                      UserName: {},
                      UserId: {},
                      Arn: {},
                      CreateDate: {
                        type: 'timestamp'
                      },
                      UserPolicyList: {
                        shape: 'S43'
                      },
                      GroupList: {
                        type: 'list',
                        member: {}
                      },
                      AttachedManagedPolicies: {
                        shape: 'S46'
                      },
                      PermissionsBoundary: {
                        shape: 'S16'
                      },
                      Tags: {
                        shape: 'Sv'
                      }
                    }
                  }
                },
                GroupDetailList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Path: {},
                      GroupName: {},
                      GroupId: {},
                      Arn: {},
                      CreateDate: {
                        type: 'timestamp'
                      },
                      GroupPolicyList: {
                        shape: 'S43'
                      },
                      AttachedManagedPolicies: {
                        shape: 'S46'
                      }
                    }
                  }
                },
                RoleDetailList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Path: {},
                      RoleName: {},
                      RoleId: {},
                      Arn: {},
                      CreateDate: {
                        type: 'timestamp'
                      },
                      AssumeRolePolicyDocument: {},
                      InstanceProfileList: {
                        shape: 'S4c'
                      },
                      RolePolicyList: {
                        shape: 'S43'
                      },
                      AttachedManagedPolicies: {
                        shape: 'S46'
                      },
                      PermissionsBoundary: {
                        shape: 'S16'
                      },
                      Tags: {
                        shape: 'Sv'
                      },
                      RoleLastUsed: {
                        shape: 'S18'
                      }
                    }
                  }
                },
                Policies: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      PolicyName: {},
                      PolicyId: {},
                      Arn: {},
                      Path: {},
                      DefaultVersionId: {},
                      AttachmentCount: {
                        type: 'integer'
                      },
                      PermissionsBoundaryUsageCount: {
                        type: 'integer'
                      },
                      IsAttachable: {
                        type: 'boolean'
                      },
                      Description: {},
                      CreateDate: {
                        type: 'timestamp'
                      },
                      UpdateDate: {
                        type: 'timestamp'
                      },
                      PolicyVersionList: {
                        shape: 'S4f'
                      }
                    }
                  }
                },
                IsTruncated: {
                  type: 'boolean'
                },
                Marker: {}
              }
            }
          },
          GetAccountPasswordPolicy: {
            output: {
              resultWrapper: 'GetAccountPasswordPolicyResult',
              type: 'structure',
              required: ['PasswordPolicy'],
              members: {
                PasswordPolicy: {
                  type: 'structure',
                  members: {
                    MinimumPasswordLength: {
                      type: 'integer'
                    },
                    RequireSymbols: {
                      type: 'boolean'
                    },
                    RequireNumbers: {
                      type: 'boolean'
                    },
                    RequireUppercaseCharacters: {
                      type: 'boolean'
                    },
                    RequireLowercaseCharacters: {
                      type: 'boolean'
                    },
                    AllowUsersToChangePassword: {
                      type: 'boolean'
                    },
                    ExpirePasswords: {
                      type: 'boolean'
                    },
                    MaxPasswordAge: {
                      type: 'integer'
                    },
                    PasswordReusePrevention: {
                      type: 'integer'
                    },
                    HardExpiry: {
                      type: 'boolean'
                    }
                  }
                }
              }
            }
          },
          GetAccountSummary: {
            output: {
              resultWrapper: 'GetAccountSummaryResult',
              type: 'structure',
              members: {
                SummaryMap: {
                  type: 'map',
                  key: {},
                  value: {
                    type: 'integer'
                  }
                }
              }
            }
          },
          GetContextKeysForCustomPolicy: {
            input: {
              type: 'structure',
              required: ['PolicyInputList'],
              members: {
                PolicyInputList: {
                  shape: 'S4s'
                }
              }
            },
            output: {
              shape: 'S4t',
              resultWrapper: 'GetContextKeysForCustomPolicyResult'
            }
          },
          GetContextKeysForPrincipalPolicy: {
            input: {
              type: 'structure',
              required: ['PolicySourceArn'],
              members: {
                PolicySourceArn: {},
                PolicyInputList: {
                  shape: 'S4s'
                }
              }
            },
            output: {
              shape: 'S4t',
              resultWrapper: 'GetContextKeysForPrincipalPolicyResult'
            }
          },
          GetCredentialReport: {
            output: {
              resultWrapper: 'GetCredentialReportResult',
              type: 'structure',
              members: {
                Content: {
                  type: 'blob'
                },
                ReportFormat: {},
                GeneratedTime: {
                  type: 'timestamp'
                }
              }
            }
          },
          GetGroup: {
            input: {
              type: 'structure',
              required: ['GroupName'],
              members: {
                GroupName: {},
                Marker: {},
                MaxItems: {
                  type: 'integer'
                }
              }
            },
            output: {
              resultWrapper: 'GetGroupResult',
              type: 'structure',
              required: ['Group', 'Users'],
              members: {
                Group: {
                  shape: 'Ss'
                },
                Users: {
                  shape: 'S52'
                },
                IsTruncated: {
                  type: 'boolean'
                },
                Marker: {}
              }
            }
          },
          GetGroupPolicy: {
            input: {
              type: 'structure',
              required: ['GroupName', 'PolicyName'],
              members: {
                GroupName: {},
                PolicyName: {}
              }
            },
            output: {
              resultWrapper: 'GetGroupPolicyResult',
              type: 'structure',
              required: ['GroupName', 'PolicyName', 'PolicyDocument'],
              members: {
                GroupName: {},
                PolicyName: {},
                PolicyDocument: {}
              }
            }
          },
          GetInstanceProfile: {
            input: {
              type: 'structure',
              required: ['InstanceProfileName'],
              members: {
                InstanceProfileName: {}
              }
            },
            output: {
              resultWrapper: 'GetInstanceProfileResult',
              type: 'structure',
              required: ['InstanceProfile'],
              members: {
                InstanceProfile: {
                  shape: 'S10'
                }
              }
            }
          },
          GetLoginProfile: {
            input: {
              type: 'structure',
              required: ['UserName'],
              members: {
                UserName: {}
              }
            },
            output: {
              resultWrapper: 'GetLoginProfileResult',
              type: 'structure',
              required: ['LoginProfile'],
              members: {
                LoginProfile: {
                  shape: 'S1d'
                }
              }
            }
          },
          GetMFADevice: {
            input: {
              type: 'structure',
              required: ['SerialNumber'],
              members: {
                SerialNumber: {},
                UserName: {}
              }
            },
            output: {
              resultWrapper: 'GetMFADeviceResult',
              type: 'structure',
              required: ['SerialNumber'],
              members: {
                UserName: {},
                SerialNumber: {},
                EnableDate: {
                  type: 'timestamp'
                },
                Certifications: {
                  type: 'map',
                  key: {},
                  value: {}
                }
              }
            }
          },
          GetOpenIDConnectProvider: {
            input: {
              type: 'structure',
              required: ['OpenIDConnectProviderArn'],
              members: {
                OpenIDConnectProviderArn: {}
              }
            },
            output: {
              resultWrapper: 'GetOpenIDConnectProviderResult',
              type: 'structure',
              members: {
                Url: {},
                ClientIDList: {
                  shape: 'S1g'
                },
                ThumbprintList: {
                  shape: 'S1h'
                },
                CreateDate: {
                  type: 'timestamp'
                },
                Tags: {
                  shape: 'Sv'
                }
              }
            }
          },
          GetOrganizationsAccessReport: {
            input: {
              type: 'structure',
              required: ['JobId'],
              members: {
                JobId: {},
                MaxItems: {
                  type: 'integer'
                },
                Marker: {},
                SortKey: {}
              }
            },
            output: {
              resultWrapper: 'GetOrganizationsAccessReportResult',
              type: 'structure',
              required: ['JobStatus', 'JobCreationDate'],
              members: {
                JobStatus: {},
                JobCreationDate: {
                  type: 'timestamp'
                },
                JobCompletionDate: {
                  type: 'timestamp'
                },
                NumberOfServicesAccessible: {
                  type: 'integer'
                },
                NumberOfServicesNotAccessed: {
                  type: 'integer'
                },
                AccessDetails: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['ServiceName', 'ServiceNamespace'],
                    members: {
                      ServiceName: {},
                      ServiceNamespace: {},
                      Region: {},
                      EntityPath: {},
                      LastAuthenticatedTime: {
                        type: 'timestamp'
                      },
                      TotalAuthenticatedEntities: {
                        type: 'integer'
                      }
                    }
                  }
                },
                IsTruncated: {
                  type: 'boolean'
                },
                Marker: {},
                ErrorDetails: {
                  shape: 'S5p'
                }
              }
            }
          },
          GetPolicy: {
            input: {
              type: 'structure',
              required: ['PolicyArn'],
              members: {
                PolicyArn: {}
              }
            },
            output: {
              resultWrapper: 'GetPolicyResult',
              type: 'structure',
              members: {
                Policy: {
                  shape: 'S1p'
                }
              }
            }
          },
          GetPolicyVersion: {
            input: {
              type: 'structure',
              required: ['PolicyArn', 'VersionId'],
              members: {
                PolicyArn: {},
                VersionId: {}
              }
            },
            output: {
              resultWrapper: 'GetPolicyVersionResult',
              type: 'structure',
              members: {
                PolicyVersion: {
                  shape: 'S1u'
                }
              }
            }
          },
          GetRole: {
            input: {
              type: 'structure',
              required: ['RoleName'],
              members: {
                RoleName: {}
              }
            },
            output: {
              resultWrapper: 'GetRoleResult',
              type: 'structure',
              required: ['Role'],
              members: {
                Role: {
                  shape: 'S12'
                }
              }
            }
          },
          GetRolePolicy: {
            input: {
              type: 'structure',
              required: ['RoleName', 'PolicyName'],
              members: {
                RoleName: {},
                PolicyName: {}
              }
            },
            output: {
              resultWrapper: 'GetRolePolicyResult',
              type: 'structure',
              required: ['RoleName', 'PolicyName', 'PolicyDocument'],
              members: {
                RoleName: {},
                PolicyName: {},
                PolicyDocument: {}
              }
            }
          },
          GetSAMLProvider: {
            input: {
              type: 'structure',
              required: ['SAMLProviderArn'],
              members: {
                SAMLProviderArn: {}
              }
            },
            output: {
              resultWrapper: 'GetSAMLProviderResult',
              type: 'structure',
              members: {
                SAMLMetadataDocument: {},
                CreateDate: {
                  type: 'timestamp'
                },
                ValidUntil: {
                  type: 'timestamp'
                },
                Tags: {
                  shape: 'Sv'
                }
              }
            }
          },
          GetSSHPublicKey: {
            input: {
              type: 'structure',
              required: ['UserName', 'SSHPublicKeyId', 'Encoding'],
              members: {
                UserName: {},
                SSHPublicKeyId: {},
                Encoding: {}
              }
            },
            output: {
              resultWrapper: 'GetSSHPublicKeyResult',
              type: 'structure',
              members: {
                SSHPublicKey: {
                  shape: 'S63'
                }
              }
            }
          },
          GetServerCertificate: {
            input: {
              type: 'structure',
              required: ['ServerCertificateName'],
              members: {
                ServerCertificateName: {}
              }
            },
            output: {
              resultWrapper: 'GetServerCertificateResult',
              type: 'structure',
              required: ['ServerCertificate'],
              members: {
                ServerCertificate: {
                  type: 'structure',
                  required: ['ServerCertificateMetadata', 'CertificateBody'],
                  members: {
                    ServerCertificateMetadata: {
                      shape: 'S69'
                    },
                    CertificateBody: {},
                    CertificateChain: {},
                    Tags: {
                      shape: 'Sv'
                    }
                  }
                }
              }
            }
          },
          GetServiceLastAccessedDetails: {
            input: {
              type: 'structure',
              required: ['JobId'],
              members: {
                JobId: {},
                MaxItems: {
                  type: 'integer'
                },
                Marker: {}
              }
            },
            output: {
              resultWrapper: 'GetServiceLastAccessedDetailsResult',
              type: 'structure',
              required: ['JobStatus', 'JobCreationDate', 'ServicesLastAccessed', 'JobCompletionDate'],
              members: {
                JobStatus: {},
                JobType: {},
                JobCreationDate: {
                  type: 'timestamp'
                },
                ServicesLastAccessed: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['ServiceName', 'ServiceNamespace'],
                    members: {
                      ServiceName: {},
                      LastAuthenticated: {
                        type: 'timestamp'
                      },
                      ServiceNamespace: {},
                      LastAuthenticatedEntity: {},
                      LastAuthenticatedRegion: {},
                      TotalAuthenticatedEntities: {
                        type: 'integer'
                      },
                      TrackedActionsLastAccessed: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            ActionName: {},
                            LastAccessedEntity: {},
                            LastAccessedTime: {
                              type: 'timestamp'
                            },
                            LastAccessedRegion: {}
                          }
                        }
                      }
                    }
                  }
                },
                JobCompletionDate: {
                  type: 'timestamp'
                },
                IsTruncated: {
                  type: 'boolean'
                },
                Marker: {},
                Error: {
                  shape: 'S5p'
                }
              }
            }
          },
          GetServiceLastAccessedDetailsWithEntities: {
            input: {
              type: 'structure',
              required: ['JobId', 'ServiceNamespace'],
              members: {
                JobId: {},
                ServiceNamespace: {},
                MaxItems: {
                  type: 'integer'
                },
                Marker: {}
              }
            },
            output: {
              resultWrapper: 'GetServiceLastAccessedDetailsWithEntitiesResult',
              type: 'structure',
              required: ['JobStatus', 'JobCreationDate', 'JobCompletionDate', 'EntityDetailsList'],
              members: {
                JobStatus: {},
                JobCreationDate: {
                  type: 'timestamp'
                },
                JobCompletionDate: {
                  type: 'timestamp'
                },
                EntityDetailsList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['EntityInfo'],
                    members: {
                      EntityInfo: {
                        type: 'structure',
                        required: ['Arn', 'Name', 'Type', 'Id'],
                        members: {
                          Arn: {},
                          Name: {},
                          Type: {},
                          Id: {},
                          Path: {}
                        }
                      },
                      LastAuthenticated: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                IsTruncated: {
                  type: 'boolean'
                },
                Marker: {},
                Error: {
                  shape: 'S5p'
                }
              }
            }
          },
          GetServiceLinkedRoleDeletionStatus: {
            input: {
              type: 'structure',
              required: ['DeletionTaskId'],
              members: {
                DeletionTaskId: {}
              }
            },
            output: {
              resultWrapper: 'GetServiceLinkedRoleDeletionStatusResult',
              type: 'structure',
              required: ['Status'],
              members: {
                Status: {},
                Reason: {
                  type: 'structure',
                  members: {
                    Reason: {},
                    RoleUsageList: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          Region: {},
                          Resources: {
                            type: 'list',
                            member: {}
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          GetUser: {
            input: {
              type: 'structure',
              members: {
                UserName: {}
              }
            },
            output: {
              resultWrapper: 'GetUserResult',
              type: 'structure',
              required: ['User'],
              members: {
                User: {
                  shape: 'S2d'
                }
              }
            }
          },
          GetUserPolicy: {
            input: {
              type: 'structure',
              required: ['UserName', 'PolicyName'],
              members: {
                UserName: {},
                PolicyName: {}
              }
            },
            output: {
              resultWrapper: 'GetUserPolicyResult',
              type: 'structure',
              required: ['UserName', 'PolicyName', 'PolicyDocument'],
              members: {
                UserName: {},
                PolicyName: {},
                PolicyDocument: {}
              }
            }
          },
          ListAccessKeys: {
            input: {
              type: 'structure',
              members: {
                UserName: {},
                Marker: {},
                MaxItems: {
                  type: 'integer'
                }
              }
            },
            output: {
              resultWrapper: 'ListAccessKeysResult',
              type: 'structure',
              required: ['AccessKeyMetadata'],
              members: {
                AccessKeyMetadata: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      UserName: {},
                      AccessKeyId: {},
                      Status: {},
                      CreateDate: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                IsTruncated: {
                  type: 'boolean'
                },
                Marker: {}
              }
            }
          },
          ListAccountAliases: {
            input: {
              type: 'structure',
              members: {
                Marker: {},
                MaxItems: {
                  type: 'integer'
                }
              }
            },
            output: {
              resultWrapper: 'ListAccountAliasesResult',
              type: 'structure',
              required: ['AccountAliases'],
              members: {
                AccountAliases: {
                  type: 'list',
                  member: {}
                },
                IsTruncated: {
                  type: 'boolean'
                },
                Marker: {}
              }
            }
          },
          ListAttachedGroupPolicies: {
            input: {
              type: 'structure',
              required: ['GroupName'],
              members: {
                GroupName: {},
                PathPrefix: {},
                Marker: {},
                MaxItems: {
                  type: 'integer'
                }
              }
            },
            output: {
              resultWrapper: 'ListAttachedGroupPoliciesResult',
              type: 'structure',
              members: {
                AttachedPolicies: {
                  shape: 'S46'
                },
                IsTruncated: {
                  type: 'boolean'
                },
                Marker: {}
              }
            }
          },
          ListAttachedRolePolicies: {
            input: {
              type: 'structure',
              required: ['RoleName'],
              members: {
                RoleName: {},
                PathPrefix: {},
                Marker: {},
                MaxItems: {
                  type: 'integer'
                }
              }
            },
            output: {
              resultWrapper: 'ListAttachedRolePoliciesResult',
              type: 'structure',
              members: {
                AttachedPolicies: {
                  shape: 'S46'
                },
                IsTruncated: {
                  type: 'boolean'
                },
                Marker: {}
              }
            }
          },
          ListAttachedUserPolicies: {
            input: {
              type: 'structure',
              required: ['UserName'],
              members: {
                UserName: {},
                PathPrefix: {},
                Marker: {},
                MaxItems: {
                  type: 'integer'
                }
              }
            },
            output: {
              resultWrapper: 'ListAttachedUserPoliciesResult',
              type: 'structure',
              members: {
                AttachedPolicies: {
                  shape: 'S46'
                },
                IsTruncated: {
                  type: 'boolean'
                },
                Marker: {}
              }
            }
          },
          ListEntitiesForPolicy: {
            input: {
              type: 'structure',
              required: ['PolicyArn'],
              members: {
                PolicyArn: {},
                EntityFilter: {},
                PathPrefix: {},
                PolicyUsageFilter: {},
                Marker: {},
                MaxItems: {
                  type: 'integer'
                }
              }
            },
            output: {
              resultWrapper: 'ListEntitiesForPolicyResult',
              type: 'structure',
              members: {
                PolicyGroups: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      GroupName: {},
                      GroupId: {}
                    }
                  }
                },
                PolicyUsers: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      UserName: {},
                      UserId: {}
                    }
                  }
                },
                PolicyRoles: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      RoleName: {},
                      RoleId: {}
                    }
                  }
                },
                IsTruncated: {
                  type: 'boolean'
                },
                Marker: {}
              }
            }
          },
          ListGroupPolicies: {
            input: {
              type: 'structure',
              required: ['GroupName'],
              members: {
                GroupName: {},
                Marker: {},
                MaxItems: {
                  type: 'integer'
                }
              }
            },
            output: {
              resultWrapper: 'ListGroupPoliciesResult',
              type: 'structure',
              required: ['PolicyNames'],
              members: {
                PolicyNames: {
                  shape: 'S7p'
                },
                IsTruncated: {
                  type: 'boolean'
                },
                Marker: {}
              }
            }
          },
          ListGroups: {
            input: {
              type: 'structure',
              members: {
                PathPrefix: {},
                Marker: {},
                MaxItems: {
                  type: 'integer'
                }
              }
            },
            output: {
              resultWrapper: 'ListGroupsResult',
              type: 'structure',
              required: ['Groups'],
              members: {
                Groups: {
                  shape: 'S7t'
                },
                IsTruncated: {
                  type: 'boolean'
                },
                Marker: {}
              }
            }
          },
          ListGroupsForUser: {
            input: {
              type: 'structure',
              required: ['UserName'],
              members: {
                UserName: {},
                Marker: {},
                MaxItems: {
                  type: 'integer'
                }
              }
            },
            output: {
              resultWrapper: 'ListGroupsForUserResult',
              type: 'structure',
              required: ['Groups'],
              members: {
                Groups: {
                  shape: 'S7t'
                },
                IsTruncated: {
                  type: 'boolean'
                },
                Marker: {}
              }
            }
          },
          ListInstanceProfileTags: {
            input: {
              type: 'structure',
              required: ['InstanceProfileName'],
              members: {
                InstanceProfileName: {},
                Marker: {},
                MaxItems: {
                  type: 'integer'
                }
              }
            },
            output: {
              resultWrapper: 'ListInstanceProfileTagsResult',
              type: 'structure',
              required: ['Tags'],
              members: {
                Tags: {
                  shape: 'Sv'
                },
                IsTruncated: {
                  type: 'boolean'
                },
                Marker: {}
              }
            }
          },
          ListInstanceProfiles: {
            input: {
              type: 'structure',
              members: {
                PathPrefix: {},
                Marker: {},
                MaxItems: {
                  type: 'integer'
                }
              }
            },
            output: {
              resultWrapper: 'ListInstanceProfilesResult',
              type: 'structure',
              required: ['InstanceProfiles'],
              members: {
                InstanceProfiles: {
                  shape: 'S4c'
                },
                IsTruncated: {
                  type: 'boolean'
                },
                Marker: {}
              }
            }
          },
          ListInstanceProfilesForRole: {
            input: {
              type: 'structure',
              required: ['RoleName'],
              members: {
                RoleName: {},
                Marker: {},
                MaxItems: {
                  type: 'integer'
                }
              }
            },
            output: {
              resultWrapper: 'ListInstanceProfilesForRoleResult',
              type: 'structure',
              required: ['InstanceProfiles'],
              members: {
                InstanceProfiles: {
                  shape: 'S4c'
                },
                IsTruncated: {
                  type: 'boolean'
                },
                Marker: {}
              }
            }
          },
          ListMFADeviceTags: {
            input: {
              type: 'structure',
              required: ['SerialNumber'],
              members: {
                SerialNumber: {},
                Marker: {},
                MaxItems: {
                  type: 'integer'
                }
              }
            },
            output: {
              resultWrapper: 'ListMFADeviceTagsResult',
              type: 'structure',
              required: ['Tags'],
              members: {
                Tags: {
                  shape: 'Sv'
                },
                IsTruncated: {
                  type: 'boolean'
                },
                Marker: {}
              }
            }
          },
          ListMFADevices: {
            input: {
              type: 'structure',
              members: {
                UserName: {},
                Marker: {},
                MaxItems: {
                  type: 'integer'
                }
              }
            },
            output: {
              resultWrapper: 'ListMFADevicesResult',
              type: 'structure',
              required: ['MFADevices'],
              members: {
                MFADevices: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['UserName', 'SerialNumber', 'EnableDate'],
                    members: {
                      UserName: {},
                      SerialNumber: {},
                      EnableDate: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                IsTruncated: {
                  type: 'boolean'
                },
                Marker: {}
              }
            }
          },
          ListOpenIDConnectProviderTags: {
            input: {
              type: 'structure',
              required: ['OpenIDConnectProviderArn'],
              members: {
                OpenIDConnectProviderArn: {},
                Marker: {},
                MaxItems: {
                  type: 'integer'
                }
              }
            },
            output: {
              resultWrapper: 'ListOpenIDConnectProviderTagsResult',
              type: 'structure',
              required: ['Tags'],
              members: {
                Tags: {
                  shape: 'Sv'
                },
                IsTruncated: {
                  type: 'boolean'
                },
                Marker: {}
              }
            }
          },
          ListOpenIDConnectProviders: {
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              resultWrapper: 'ListOpenIDConnectProvidersResult',
              type: 'structure',
              members: {
                OpenIDConnectProviderList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Arn: {}
                    }
                  }
                }
              }
            }
          },
          ListPolicies: {
            input: {
              type: 'structure',
              members: {
                Scope: {},
                OnlyAttached: {
                  type: 'boolean'
                },
                PathPrefix: {},
                PolicyUsageFilter: {},
                Marker: {},
                MaxItems: {
                  type: 'integer'
                }
              }
            },
            output: {
              resultWrapper: 'ListPoliciesResult',
              type: 'structure',
              members: {
                Policies: {
                  type: 'list',
                  member: {
                    shape: 'S1p'
                  }
                },
                IsTruncated: {
                  type: 'boolean'
                },
                Marker: {}
              }
            }
          },
          ListPoliciesGrantingServiceAccess: {
            input: {
              type: 'structure',
              required: ['Arn', 'ServiceNamespaces'],
              members: {
                Marker: {},
                Arn: {},
                ServiceNamespaces: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              resultWrapper: 'ListPoliciesGrantingServiceAccessResult',
              type: 'structure',
              required: ['PoliciesGrantingServiceAccess'],
              members: {
                PoliciesGrantingServiceAccess: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ServiceNamespace: {},
                      Policies: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          required: ['PolicyName', 'PolicyType'],
                          members: {
                            PolicyName: {},
                            PolicyType: {},
                            PolicyArn: {},
                            EntityType: {},
                            EntityName: {}
                          }
                        }
                      }
                    }
                  }
                },
                IsTruncated: {
                  type: 'boolean'
                },
                Marker: {}
              }
            }
          },
          ListPolicyTags: {
            input: {
              type: 'structure',
              required: ['PolicyArn'],
              members: {
                PolicyArn: {},
                Marker: {},
                MaxItems: {
                  type: 'integer'
                }
              }
            },
            output: {
              resultWrapper: 'ListPolicyTagsResult',
              type: 'structure',
              required: ['Tags'],
              members: {
                Tags: {
                  shape: 'Sv'
                },
                IsTruncated: {
                  type: 'boolean'
                },
                Marker: {}
              }
            }
          },
          ListPolicyVersions: {
            input: {
              type: 'structure',
              required: ['PolicyArn'],
              members: {
                PolicyArn: {},
                Marker: {},
                MaxItems: {
                  type: 'integer'
                }
              }
            },
            output: {
              resultWrapper: 'ListPolicyVersionsResult',
              type: 'structure',
              members: {
                Versions: {
                  shape: 'S4f'
                },
                IsTruncated: {
                  type: 'boolean'
                },
                Marker: {}
              }
            }
          },
          ListRolePolicies: {
            input: {
              type: 'structure',
              required: ['RoleName'],
              members: {
                RoleName: {},
                Marker: {},
                MaxItems: {
                  type: 'integer'
                }
              }
            },
            output: {
              resultWrapper: 'ListRolePoliciesResult',
              type: 'structure',
              required: ['PolicyNames'],
              members: {
                PolicyNames: {
                  shape: 'S7p'
                },
                IsTruncated: {
                  type: 'boolean'
                },
                Marker: {}
              }
            }
          },
          ListRoleTags: {
            input: {
              type: 'structure',
              required: ['RoleName'],
              members: {
                RoleName: {},
                Marker: {},
                MaxItems: {
                  type: 'integer'
                }
              }
            },
            output: {
              resultWrapper: 'ListRoleTagsResult',
              type: 'structure',
              required: ['Tags'],
              members: {
                Tags: {
                  shape: 'Sv'
                },
                IsTruncated: {
                  type: 'boolean'
                },
                Marker: {}
              }
            }
          },
          ListRoles: {
            input: {
              type: 'structure',
              members: {
                PathPrefix: {},
                Marker: {},
                MaxItems: {
                  type: 'integer'
                }
              }
            },
            output: {
              resultWrapper: 'ListRolesResult',
              type: 'structure',
              required: ['Roles'],
              members: {
                Roles: {
                  shape: 'S11'
                },
                IsTruncated: {
                  type: 'boolean'
                },
                Marker: {}
              }
            }
          },
          ListSAMLProviderTags: {
            input: {
              type: 'structure',
              required: ['SAMLProviderArn'],
              members: {
                SAMLProviderArn: {},
                Marker: {},
                MaxItems: {
                  type: 'integer'
                }
              }
            },
            output: {
              resultWrapper: 'ListSAMLProviderTagsResult',
              type: 'structure',
              required: ['Tags'],
              members: {
                Tags: {
                  shape: 'Sv'
                },
                IsTruncated: {
                  type: 'boolean'
                },
                Marker: {}
              }
            }
          },
          ListSAMLProviders: {
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              resultWrapper: 'ListSAMLProvidersResult',
              type: 'structure',
              members: {
                SAMLProviderList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Arn: {},
                      ValidUntil: {
                        type: 'timestamp'
                      },
                      CreateDate: {
                        type: 'timestamp'
                      }
                    }
                  }
                }
              }
            }
          },
          ListSSHPublicKeys: {
            input: {
              type: 'structure',
              members: {
                UserName: {},
                Marker: {},
                MaxItems: {
                  type: 'integer'
                }
              }
            },
            output: {
              resultWrapper: 'ListSSHPublicKeysResult',
              type: 'structure',
              members: {
                SSHPublicKeys: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['UserName', 'SSHPublicKeyId', 'Status', 'UploadDate'],
                    members: {
                      UserName: {},
                      SSHPublicKeyId: {},
                      Status: {},
                      UploadDate: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                IsTruncated: {
                  type: 'boolean'
                },
                Marker: {}
              }
            }
          },
          ListServerCertificateTags: {
            input: {
              type: 'structure',
              required: ['ServerCertificateName'],
              members: {
                ServerCertificateName: {},
                Marker: {},
                MaxItems: {
                  type: 'integer'
                }
              }
            },
            output: {
              resultWrapper: 'ListServerCertificateTagsResult',
              type: 'structure',
              required: ['Tags'],
              members: {
                Tags: {
                  shape: 'Sv'
                },
                IsTruncated: {
                  type: 'boolean'
                },
                Marker: {}
              }
            }
          },
          ListServerCertificates: {
            input: {
              type: 'structure',
              members: {
                PathPrefix: {},
                Marker: {},
                MaxItems: {
                  type: 'integer'
                }
              }
            },
            output: {
              resultWrapper: 'ListServerCertificatesResult',
              type: 'structure',
              required: ['ServerCertificateMetadataList'],
              members: {
                ServerCertificateMetadataList: {
                  type: 'list',
                  member: {
                    shape: 'S69'
                  }
                },
                IsTruncated: {
                  type: 'boolean'
                },
                Marker: {}
              }
            }
          },
          ListServiceSpecificCredentials: {
            input: {
              type: 'structure',
              members: {
                UserName: {},
                ServiceName: {}
              }
            },
            output: {
              resultWrapper: 'ListServiceSpecificCredentialsResult',
              type: 'structure',
              members: {
                ServiceSpecificCredentials: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['UserName', 'Status', 'ServiceUserName', 'CreateDate', 'ServiceSpecificCredentialId', 'ServiceName'],
                    members: {
                      UserName: {},
                      Status: {},
                      ServiceUserName: {},
                      CreateDate: {
                        type: 'timestamp'
                      },
                      ServiceSpecificCredentialId: {},
                      ServiceName: {}
                    }
                  }
                }
              }
            }
          },
          ListSigningCertificates: {
            input: {
              type: 'structure',
              members: {
                UserName: {},
                Marker: {},
                MaxItems: {
                  type: 'integer'
                }
              }
            },
            output: {
              resultWrapper: 'ListSigningCertificatesResult',
              type: 'structure',
              required: ['Certificates'],
              members: {
                Certificates: {
                  type: 'list',
                  member: {
                    shape: 'S9n'
                  }
                },
                IsTruncated: {
                  type: 'boolean'
                },
                Marker: {}
              }
            }
          },
          ListUserPolicies: {
            input: {
              type: 'structure',
              required: ['UserName'],
              members: {
                UserName: {},
                Marker: {},
                MaxItems: {
                  type: 'integer'
                }
              }
            },
            output: {
              resultWrapper: 'ListUserPoliciesResult',
              type: 'structure',
              required: ['PolicyNames'],
              members: {
                PolicyNames: {
                  shape: 'S7p'
                },
                IsTruncated: {
                  type: 'boolean'
                },
                Marker: {}
              }
            }
          },
          ListUserTags: {
            input: {
              type: 'structure',
              required: ['UserName'],
              members: {
                UserName: {},
                Marker: {},
                MaxItems: {
                  type: 'integer'
                }
              }
            },
            output: {
              resultWrapper: 'ListUserTagsResult',
              type: 'structure',
              required: ['Tags'],
              members: {
                Tags: {
                  shape: 'Sv'
                },
                IsTruncated: {
                  type: 'boolean'
                },
                Marker: {}
              }
            }
          },
          ListUsers: {
            input: {
              type: 'structure',
              members: {
                PathPrefix: {},
                Marker: {},
                MaxItems: {
                  type: 'integer'
                }
              }
            },
            output: {
              resultWrapper: 'ListUsersResult',
              type: 'structure',
              required: ['Users'],
              members: {
                Users: {
                  shape: 'S52'
                },
                IsTruncated: {
                  type: 'boolean'
                },
                Marker: {}
              }
            }
          },
          ListVirtualMFADevices: {
            input: {
              type: 'structure',
              members: {
                AssignmentStatus: {},
                Marker: {},
                MaxItems: {
                  type: 'integer'
                }
              }
            },
            output: {
              resultWrapper: 'ListVirtualMFADevicesResult',
              type: 'structure',
              required: ['VirtualMFADevices'],
              members: {
                VirtualMFADevices: {
                  type: 'list',
                  member: {
                    shape: 'S2h'
                  }
                },
                IsTruncated: {
                  type: 'boolean'
                },
                Marker: {}
              }
            }
          },
          PutGroupPolicy: {
            input: {
              type: 'structure',
              required: ['GroupName', 'PolicyName', 'PolicyDocument'],
              members: {
                GroupName: {},
                PolicyName: {},
                PolicyDocument: {}
              }
            }
          },
          PutRolePermissionsBoundary: {
            input: {
              type: 'structure',
              required: ['RoleName', 'PermissionsBoundary'],
              members: {
                RoleName: {},
                PermissionsBoundary: {}
              }
            }
          },
          PutRolePolicy: {
            input: {
              type: 'structure',
              required: ['RoleName', 'PolicyName', 'PolicyDocument'],
              members: {
                RoleName: {},
                PolicyName: {},
                PolicyDocument: {}
              }
            }
          },
          PutUserPermissionsBoundary: {
            input: {
              type: 'structure',
              required: ['UserName', 'PermissionsBoundary'],
              members: {
                UserName: {},
                PermissionsBoundary: {}
              }
            }
          },
          PutUserPolicy: {
            input: {
              type: 'structure',
              required: ['UserName', 'PolicyName', 'PolicyDocument'],
              members: {
                UserName: {},
                PolicyName: {},
                PolicyDocument: {}
              }
            }
          },
          RemoveClientIDFromOpenIDConnectProvider: {
            input: {
              type: 'structure',
              required: ['OpenIDConnectProviderArn', 'ClientID'],
              members: {
                OpenIDConnectProviderArn: {},
                ClientID: {}
              }
            }
          },
          RemoveRoleFromInstanceProfile: {
            input: {
              type: 'structure',
              required: ['InstanceProfileName', 'RoleName'],
              members: {
                InstanceProfileName: {},
                RoleName: {}
              }
            }
          },
          RemoveUserFromGroup: {
            input: {
              type: 'structure',
              required: ['GroupName', 'UserName'],
              members: {
                GroupName: {},
                UserName: {}
              }
            }
          },
          ResetServiceSpecificCredential: {
            input: {
              type: 'structure',
              required: ['ServiceSpecificCredentialId'],
              members: {
                UserName: {},
                ServiceSpecificCredentialId: {}
              }
            },
            output: {
              resultWrapper: 'ResetServiceSpecificCredentialResult',
              type: 'structure',
              members: {
                ServiceSpecificCredential: {
                  shape: 'S27'
                }
              }
            }
          },
          ResyncMFADevice: {
            input: {
              type: 'structure',
              required: ['UserName', 'SerialNumber', 'AuthenticationCode1', 'AuthenticationCode2'],
              members: {
                UserName: {},
                SerialNumber: {},
                AuthenticationCode1: {},
                AuthenticationCode2: {}
              }
            }
          },
          SetDefaultPolicyVersion: {
            input: {
              type: 'structure',
              required: ['PolicyArn', 'VersionId'],
              members: {
                PolicyArn: {},
                VersionId: {}
              }
            }
          },
          SetSecurityTokenServicePreferences: {
            input: {
              type: 'structure',
              required: ['GlobalEndpointTokenVersion'],
              members: {
                GlobalEndpointTokenVersion: {}
              }
            }
          },
          SimulateCustomPolicy: {
            input: {
              type: 'structure',
              required: ['PolicyInputList', 'ActionNames'],
              members: {
                PolicyInputList: {
                  shape: 'S4s'
                },
                PermissionsBoundaryPolicyInputList: {
                  shape: 'S4s'
                },
                ActionNames: {
                  shape: 'Sad'
                },
                ResourceArns: {
                  shape: 'Saf'
                },
                ResourcePolicy: {},
                ResourceOwner: {},
                CallerArn: {},
                ContextEntries: {
                  shape: 'Sah'
                },
                ResourceHandlingOption: {},
                MaxItems: {
                  type: 'integer'
                },
                Marker: {}
              }
            },
            output: {
              shape: 'San',
              resultWrapper: 'SimulateCustomPolicyResult'
            }
          },
          SimulatePrincipalPolicy: {
            input: {
              type: 'structure',
              required: ['PolicySourceArn', 'ActionNames'],
              members: {
                PolicySourceArn: {},
                PolicyInputList: {
                  shape: 'S4s'
                },
                PermissionsBoundaryPolicyInputList: {
                  shape: 'S4s'
                },
                ActionNames: {
                  shape: 'Sad'
                },
                ResourceArns: {
                  shape: 'Saf'
                },
                ResourcePolicy: {},
                ResourceOwner: {},
                CallerArn: {},
                ContextEntries: {
                  shape: 'Sah'
                },
                ResourceHandlingOption: {},
                MaxItems: {
                  type: 'integer'
                },
                Marker: {}
              }
            },
            output: {
              shape: 'San',
              resultWrapper: 'SimulatePrincipalPolicyResult'
            }
          },
          TagInstanceProfile: {
            input: {
              type: 'structure',
              required: ['InstanceProfileName', 'Tags'],
              members: {
                InstanceProfileName: {},
                Tags: {
                  shape: 'Sv'
                }
              }
            }
          },
          TagMFADevice: {
            input: {
              type: 'structure',
              required: ['SerialNumber', 'Tags'],
              members: {
                SerialNumber: {},
                Tags: {
                  shape: 'Sv'
                }
              }
            }
          },
          TagOpenIDConnectProvider: {
            input: {
              type: 'structure',
              required: ['OpenIDConnectProviderArn', 'Tags'],
              members: {
                OpenIDConnectProviderArn: {},
                Tags: {
                  shape: 'Sv'
                }
              }
            }
          },
          TagPolicy: {
            input: {
              type: 'structure',
              required: ['PolicyArn', 'Tags'],
              members: {
                PolicyArn: {},
                Tags: {
                  shape: 'Sv'
                }
              }
            }
          },
          TagRole: {
            input: {
              type: 'structure',
              required: ['RoleName', 'Tags'],
              members: {
                RoleName: {},
                Tags: {
                  shape: 'Sv'
                }
              }
            }
          },
          TagSAMLProvider: {
            input: {
              type: 'structure',
              required: ['SAMLProviderArn', 'Tags'],
              members: {
                SAMLProviderArn: {},
                Tags: {
                  shape: 'Sv'
                }
              }
            }
          },
          TagServerCertificate: {
            input: {
              type: 'structure',
              required: ['ServerCertificateName', 'Tags'],
              members: {
                ServerCertificateName: {},
                Tags: {
                  shape: 'Sv'
                }
              }
            }
          },
          TagUser: {
            input: {
              type: 'structure',
              required: ['UserName', 'Tags'],
              members: {
                UserName: {},
                Tags: {
                  shape: 'Sv'
                }
              }
            }
          },
          UntagInstanceProfile: {
            input: {
              type: 'structure',
              required: ['InstanceProfileName', 'TagKeys'],
              members: {
                InstanceProfileName: {},
                TagKeys: {
                  shape: 'Sbe'
                }
              }
            }
          },
          UntagMFADevice: {
            input: {
              type: 'structure',
              required: ['SerialNumber', 'TagKeys'],
              members: {
                SerialNumber: {},
                TagKeys: {
                  shape: 'Sbe'
                }
              }
            }
          },
          UntagOpenIDConnectProvider: {
            input: {
              type: 'structure',
              required: ['OpenIDConnectProviderArn', 'TagKeys'],
              members: {
                OpenIDConnectProviderArn: {},
                TagKeys: {
                  shape: 'Sbe'
                }
              }
            }
          },
          UntagPolicy: {
            input: {
              type: 'structure',
              required: ['PolicyArn', 'TagKeys'],
              members: {
                PolicyArn: {},
                TagKeys: {
                  shape: 'Sbe'
                }
              }
            }
          },
          UntagRole: {
            input: {
              type: 'structure',
              required: ['RoleName', 'TagKeys'],
              members: {
                RoleName: {},
                TagKeys: {
                  shape: 'Sbe'
                }
              }
            }
          },
          UntagSAMLProvider: {
            input: {
              type: 'structure',
              required: ['SAMLProviderArn', 'TagKeys'],
              members: {
                SAMLProviderArn: {},
                TagKeys: {
                  shape: 'Sbe'
                }
              }
            }
          },
          UntagServerCertificate: {
            input: {
              type: 'structure',
              required: ['ServerCertificateName', 'TagKeys'],
              members: {
                ServerCertificateName: {},
                TagKeys: {
                  shape: 'Sbe'
                }
              }
            }
          },
          UntagUser: {
            input: {
              type: 'structure',
              required: ['UserName', 'TagKeys'],
              members: {
                UserName: {},
                TagKeys: {
                  shape: 'Sbe'
                }
              }
            }
          },
          UpdateAccessKey: {
            input: {
              type: 'structure',
              required: ['AccessKeyId', 'Status'],
              members: {
                UserName: {},
                AccessKeyId: {},
                Status: {}
              }
            }
          },
          UpdateAccountPasswordPolicy: {
            input: {
              type: 'structure',
              members: {
                MinimumPasswordLength: {
                  type: 'integer'
                },
                RequireSymbols: {
                  type: 'boolean'
                },
                RequireNumbers: {
                  type: 'boolean'
                },
                RequireUppercaseCharacters: {
                  type: 'boolean'
                },
                RequireLowercaseCharacters: {
                  type: 'boolean'
                },
                AllowUsersToChangePassword: {
                  type: 'boolean'
                },
                MaxPasswordAge: {
                  type: 'integer'
                },
                PasswordReusePrevention: {
                  type: 'integer'
                },
                HardExpiry: {
                  type: 'boolean'
                }
              }
            }
          },
          UpdateAssumeRolePolicy: {
            input: {
              type: 'structure',
              required: ['RoleName', 'PolicyDocument'],
              members: {
                RoleName: {},
                PolicyDocument: {}
              }
            }
          },
          UpdateGroup: {
            input: {
              type: 'structure',
              required: ['GroupName'],
              members: {
                GroupName: {},
                NewPath: {},
                NewGroupName: {}
              }
            }
          },
          UpdateLoginProfile: {
            input: {
              type: 'structure',
              required: ['UserName'],
              members: {
                UserName: {},
                Password: {
                  shape: 'Sf'
                },
                PasswordResetRequired: {
                  type: 'boolean'
                }
              }
            }
          },
          UpdateOpenIDConnectProviderThumbprint: {
            input: {
              type: 'structure',
              required: ['OpenIDConnectProviderArn', 'ThumbprintList'],
              members: {
                OpenIDConnectProviderArn: {},
                ThumbprintList: {
                  shape: 'S1h'
                }
              }
            }
          },
          UpdateRole: {
            input: {
              type: 'structure',
              required: ['RoleName'],
              members: {
                RoleName: {},
                Description: {},
                MaxSessionDuration: {
                  type: 'integer'
                }
              }
            },
            output: {
              resultWrapper: 'UpdateRoleResult',
              type: 'structure',
              members: {}
            }
          },
          UpdateRoleDescription: {
            input: {
              type: 'structure',
              required: ['RoleName', 'Description'],
              members: {
                RoleName: {},
                Description: {}
              }
            },
            output: {
              resultWrapper: 'UpdateRoleDescriptionResult',
              type: 'structure',
              members: {
                Role: {
                  shape: 'S12'
                }
              }
            }
          },
          UpdateSAMLProvider: {
            input: {
              type: 'structure',
              required: ['SAMLMetadataDocument', 'SAMLProviderArn'],
              members: {
                SAMLMetadataDocument: {},
                SAMLProviderArn: {}
              }
            },
            output: {
              resultWrapper: 'UpdateSAMLProviderResult',
              type: 'structure',
              members: {
                SAMLProviderArn: {}
              }
            }
          },
          UpdateSSHPublicKey: {
            input: {
              type: 'structure',
              required: ['UserName', 'SSHPublicKeyId', 'Status'],
              members: {
                UserName: {},
                SSHPublicKeyId: {},
                Status: {}
              }
            }
          },
          UpdateServerCertificate: {
            input: {
              type: 'structure',
              required: ['ServerCertificateName'],
              members: {
                ServerCertificateName: {},
                NewPath: {},
                NewServerCertificateName: {}
              }
            }
          },
          UpdateServiceSpecificCredential: {
            input: {
              type: 'structure',
              required: ['ServiceSpecificCredentialId', 'Status'],
              members: {
                UserName: {},
                ServiceSpecificCredentialId: {},
                Status: {}
              }
            }
          },
          UpdateSigningCertificate: {
            input: {
              type: 'structure',
              required: ['CertificateId', 'Status'],
              members: {
                UserName: {},
                CertificateId: {},
                Status: {}
              }
            }
          },
          UpdateUser: {
            input: {
              type: 'structure',
              required: ['UserName'],
              members: {
                UserName: {},
                NewPath: {},
                NewUserName: {}
              }
            }
          },
          UploadSSHPublicKey: {
            input: {
              type: 'structure',
              required: ['UserName', 'SSHPublicKeyBody'],
              members: {
                UserName: {},
                SSHPublicKeyBody: {}
              }
            },
            output: {
              resultWrapper: 'UploadSSHPublicKeyResult',
              type: 'structure',
              members: {
                SSHPublicKey: {
                  shape: 'S63'
                }
              }
            }
          },
          UploadServerCertificate: {
            input: {
              type: 'structure',
              required: ['ServerCertificateName', 'CertificateBody', 'PrivateKey'],
              members: {
                Path: {},
                ServerCertificateName: {},
                CertificateBody: {},
                PrivateKey: {
                  type: 'string',
                  sensitive: true
                },
                CertificateChain: {},
                Tags: {
                  shape: 'Sv'
                }
              }
            },
            output: {
              resultWrapper: 'UploadServerCertificateResult',
              type: 'structure',
              members: {
                ServerCertificateMetadata: {
                  shape: 'S69'
                },
                Tags: {
                  shape: 'Sv'
                }
              }
            }
          },
          UploadSigningCertificate: {
            input: {
              type: 'structure',
              required: ['CertificateBody'],
              members: {
                UserName: {},
                CertificateBody: {}
              }
            },
            output: {
              resultWrapper: 'UploadSigningCertificateResult',
              type: 'structure',
              required: ['Certificate'],
              members: {
                Certificate: {
                  shape: 'S9n'
                }
              }
            }
          }
        },
        shapes: {
          Sf: {
            type: 'string',
            sensitive: true
          },
          Ss: {
            type: 'structure',
            required: ['Path', 'GroupName', 'GroupId', 'Arn', 'CreateDate'],
            members: {
              Path: {},
              GroupName: {},
              GroupId: {},
              Arn: {},
              CreateDate: {
                type: 'timestamp'
              }
            }
          },
          Sv: {
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
          S10: {
            type: 'structure',
            required: ['Path', 'InstanceProfileName', 'InstanceProfileId', 'Arn', 'CreateDate', 'Roles'],
            members: {
              Path: {},
              InstanceProfileName: {},
              InstanceProfileId: {},
              Arn: {},
              CreateDate: {
                type: 'timestamp'
              },
              Roles: {
                shape: 'S11'
              },
              Tags: {
                shape: 'Sv'
              }
            }
          },
          S11: {
            type: 'list',
            member: {
              shape: 'S12'
            }
          },
          S12: {
            type: 'structure',
            required: ['Path', 'RoleName', 'RoleId', 'Arn', 'CreateDate'],
            members: {
              Path: {},
              RoleName: {},
              RoleId: {},
              Arn: {},
              CreateDate: {
                type: 'timestamp'
              },
              AssumeRolePolicyDocument: {},
              Description: {},
              MaxSessionDuration: {
                type: 'integer'
              },
              PermissionsBoundary: {
                shape: 'S16'
              },
              Tags: {
                shape: 'Sv'
              },
              RoleLastUsed: {
                shape: 'S18'
              }
            }
          },
          S16: {
            type: 'structure',
            members: {
              PermissionsBoundaryType: {},
              PermissionsBoundaryArn: {}
            }
          },
          S18: {
            type: 'structure',
            members: {
              LastUsedDate: {
                type: 'timestamp'
              },
              Region: {}
            }
          },
          S1d: {
            type: 'structure',
            required: ['UserName', 'CreateDate'],
            members: {
              UserName: {},
              CreateDate: {
                type: 'timestamp'
              },
              PasswordResetRequired: {
                type: 'boolean'
              }
            }
          },
          S1g: {
            type: 'list',
            member: {}
          },
          S1h: {
            type: 'list',
            member: {}
          },
          S1p: {
            type: 'structure',
            members: {
              PolicyName: {},
              PolicyId: {},
              Arn: {},
              Path: {},
              DefaultVersionId: {},
              AttachmentCount: {
                type: 'integer'
              },
              PermissionsBoundaryUsageCount: {
                type: 'integer'
              },
              IsAttachable: {
                type: 'boolean'
              },
              Description: {},
              CreateDate: {
                type: 'timestamp'
              },
              UpdateDate: {
                type: 'timestamp'
              },
              Tags: {
                shape: 'Sv'
              }
            }
          },
          S1u: {
            type: 'structure',
            members: {
              Document: {},
              VersionId: {},
              IsDefaultVersion: {
                type: 'boolean'
              },
              CreateDate: {
                type: 'timestamp'
              }
            }
          },
          S27: {
            type: 'structure',
            required: ['CreateDate', 'ServiceName', 'ServiceUserName', 'ServicePassword', 'ServiceSpecificCredentialId', 'UserName', 'Status'],
            members: {
              CreateDate: {
                type: 'timestamp'
              },
              ServiceName: {},
              ServiceUserName: {},
              ServicePassword: {
                type: 'string',
                sensitive: true
              },
              ServiceSpecificCredentialId: {},
              UserName: {},
              Status: {}
            }
          },
          S2d: {
            type: 'structure',
            required: ['Path', 'UserName', 'UserId', 'Arn', 'CreateDate'],
            members: {
              Path: {},
              UserName: {},
              UserId: {},
              Arn: {},
              CreateDate: {
                type: 'timestamp'
              },
              PasswordLastUsed: {
                type: 'timestamp'
              },
              PermissionsBoundary: {
                shape: 'S16'
              },
              Tags: {
                shape: 'Sv'
              }
            }
          },
          S2h: {
            type: 'structure',
            required: ['SerialNumber'],
            members: {
              SerialNumber: {},
              Base32StringSeed: {
                shape: 'S2j'
              },
              QRCodePNG: {
                shape: 'S2j'
              },
              User: {
                shape: 'S2d'
              },
              EnableDate: {
                type: 'timestamp'
              },
              Tags: {
                shape: 'Sv'
              }
            }
          },
          S2j: {
            type: 'blob',
            sensitive: true
          },
          S43: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                PolicyName: {},
                PolicyDocument: {}
              }
            }
          },
          S46: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                PolicyName: {},
                PolicyArn: {}
              }
            }
          },
          S4c: {
            type: 'list',
            member: {
              shape: 'S10'
            }
          },
          S4f: {
            type: 'list',
            member: {
              shape: 'S1u'
            }
          },
          S4s: {
            type: 'list',
            member: {}
          },
          S4t: {
            type: 'structure',
            members: {
              ContextKeyNames: {
                shape: 'S4u'
              }
            }
          },
          S4u: {
            type: 'list',
            member: {}
          },
          S52: {
            type: 'list',
            member: {
              shape: 'S2d'
            }
          },
          S5p: {
            type: 'structure',
            required: ['Message', 'Code'],
            members: {
              Message: {},
              Code: {}
            }
          },
          S63: {
            type: 'structure',
            required: ['UserName', 'SSHPublicKeyId', 'Fingerprint', 'SSHPublicKeyBody', 'Status'],
            members: {
              UserName: {},
              SSHPublicKeyId: {},
              Fingerprint: {},
              SSHPublicKeyBody: {},
              Status: {},
              UploadDate: {
                type: 'timestamp'
              }
            }
          },
          S69: {
            type: 'structure',
            required: ['Path', 'ServerCertificateName', 'ServerCertificateId', 'Arn'],
            members: {
              Path: {},
              ServerCertificateName: {},
              ServerCertificateId: {},
              Arn: {},
              UploadDate: {
                type: 'timestamp'
              },
              Expiration: {
                type: 'timestamp'
              }
            }
          },
          S7p: {
            type: 'list',
            member: {}
          },
          S7t: {
            type: 'list',
            member: {
              shape: 'Ss'
            }
          },
          S9n: {
            type: 'structure',
            required: ['UserName', 'CertificateId', 'CertificateBody', 'Status'],
            members: {
              UserName: {},
              CertificateId: {},
              CertificateBody: {},
              Status: {},
              UploadDate: {
                type: 'timestamp'
              }
            }
          },
          Sad: {
            type: 'list',
            member: {}
          },
          Saf: {
            type: 'list',
            member: {}
          },
          Sah: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                ContextKeyName: {},
                ContextKeyValues: {
                  type: 'list',
                  member: {}
                },
                ContextKeyType: {}
              }
            }
          },
          San: {
            type: 'structure',
            members: {
              EvaluationResults: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['EvalActionName', 'EvalDecision'],
                  members: {
                    EvalActionName: {},
                    EvalResourceName: {},
                    EvalDecision: {},
                    MatchedStatements: {
                      shape: 'Sar'
                    },
                    MissingContextValues: {
                      shape: 'S4u'
                    },
                    OrganizationsDecisionDetail: {
                      type: 'structure',
                      members: {
                        AllowedByOrganizations: {
                          type: 'boolean'
                        }
                      }
                    },
                    PermissionsBoundaryDecisionDetail: {
                      shape: 'Saz'
                    },
                    EvalDecisionDetails: {
                      shape: 'Sb0'
                    },
                    ResourceSpecificResults: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        required: ['EvalResourceName', 'EvalResourceDecision'],
                        members: {
                          EvalResourceName: {},
                          EvalResourceDecision: {},
                          MatchedStatements: {
                            shape: 'Sar'
                          },
                          MissingContextValues: {
                            shape: 'S4u'
                          },
                          EvalDecisionDetails: {
                            shape: 'Sb0'
                          },
                          PermissionsBoundaryDecisionDetail: {
                            shape: 'Saz'
                          }
                        }
                      }
                    }
                  }
                }
              },
              IsTruncated: {
                type: 'boolean'
              },
              Marker: {}
            }
          },
          Sar: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                SourcePolicyId: {},
                SourcePolicyType: {},
                StartPosition: {
                  shape: 'Sav'
                },
                EndPosition: {
                  shape: 'Sav'
                }
              }
            }
          },
          Sav: {
            type: 'structure',
            members: {
              Line: {
                type: 'integer'
              },
              Column: {
                type: 'integer'
              }
            }
          },
          Saz: {
            type: 'structure',
            members: {
              AllowedByPermissionsBoundary: {
                type: 'boolean'
              }
            }
          },
          Sb0: {
            type: 'map',
            key: {},
            value: {}
          },
          Sbe: {
            type: 'list',
            member: {}
          }
        }
      });
    }
  };
});
//# sourceMappingURL=c085345d0c560e8abdbf55e5f696058a81831f1d.js.map