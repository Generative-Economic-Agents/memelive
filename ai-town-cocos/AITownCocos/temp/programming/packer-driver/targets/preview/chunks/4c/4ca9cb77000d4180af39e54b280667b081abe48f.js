System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2017-10-01',
          endpointPrefix: 'workmail',
          jsonVersion: '1.1',
          protocol: 'json',
          serviceFullName: 'Amazon WorkMail',
          serviceId: 'WorkMail',
          signatureVersion: 'v4',
          targetPrefix: 'WorkMailService',
          uid: 'workmail-2017-10-01'
        },
        operations: {
          AssociateDelegateToResource: {
            input: {
              type: 'structure',
              required: ['OrganizationId', 'ResourceId', 'EntityId'],
              members: {
                OrganizationId: {},
                ResourceId: {},
                EntityId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          AssociateMemberToGroup: {
            input: {
              type: 'structure',
              required: ['OrganizationId', 'GroupId', 'MemberId'],
              members: {
                OrganizationId: {},
                GroupId: {},
                MemberId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          AssumeImpersonationRole: {
            input: {
              type: 'structure',
              required: ['OrganizationId', 'ImpersonationRoleId'],
              members: {
                OrganizationId: {},
                ImpersonationRoleId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Token: {},
                ExpiresIn: {
                  type: 'long'
                }
              }
            }
          },
          CancelMailboxExportJob: {
            input: {
              type: 'structure',
              required: ['ClientToken', 'JobId', 'OrganizationId'],
              members: {
                ClientToken: {
                  idempotencyToken: true
                },
                JobId: {},
                OrganizationId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          CreateAlias: {
            input: {
              type: 'structure',
              required: ['OrganizationId', 'EntityId', 'Alias'],
              members: {
                OrganizationId: {},
                EntityId: {},
                Alias: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          CreateAvailabilityConfiguration: {
            input: {
              type: 'structure',
              required: ['OrganizationId', 'DomainName'],
              members: {
                ClientToken: {
                  idempotencyToken: true
                },
                OrganizationId: {},
                DomainName: {},
                EwsProvider: {
                  shape: 'Sm'
                },
                LambdaProvider: {
                  shape: 'Sq'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          CreateGroup: {
            input: {
              type: 'structure',
              required: ['OrganizationId', 'Name'],
              members: {
                OrganizationId: {},
                Name: {},
                HiddenFromGlobalAddressList: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                GroupId: {}
              }
            },
            idempotent: true
          },
          CreateImpersonationRole: {
            input: {
              type: 'structure',
              required: ['OrganizationId', 'Name', 'Type', 'Rules'],
              members: {
                ClientToken: {
                  idempotencyToken: true
                },
                OrganizationId: {},
                Name: {},
                Type: {},
                Description: {},
                Rules: {
                  shape: 'S11'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ImpersonationRoleId: {}
              }
            }
          },
          CreateMobileDeviceAccessRule: {
            input: {
              type: 'structure',
              required: ['OrganizationId', 'Name', 'Effect'],
              members: {
                OrganizationId: {},
                ClientToken: {
                  idempotencyToken: true
                },
                Name: {},
                Description: {},
                Effect: {},
                DeviceTypes: {
                  shape: 'S1d'
                },
                NotDeviceTypes: {
                  shape: 'S1d'
                },
                DeviceModels: {
                  shape: 'S1f'
                },
                NotDeviceModels: {
                  shape: 'S1f'
                },
                DeviceOperatingSystems: {
                  shape: 'S1h'
                },
                NotDeviceOperatingSystems: {
                  shape: 'S1h'
                },
                DeviceUserAgents: {
                  shape: 'S1j'
                },
                NotDeviceUserAgents: {
                  shape: 'S1j'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                MobileDeviceAccessRuleId: {}
              }
            }
          },
          CreateOrganization: {
            input: {
              type: 'structure',
              required: ['Alias'],
              members: {
                DirectoryId: {},
                Alias: {},
                ClientToken: {
                  idempotencyToken: true
                },
                Domains: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['DomainName'],
                    members: {
                      DomainName: {},
                      HostedZoneId: {}
                    }
                  }
                },
                KmsKeyArn: {},
                EnableInteroperability: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                OrganizationId: {}
              }
            },
            idempotent: true
          },
          CreateResource: {
            input: {
              type: 'structure',
              required: ['OrganizationId', 'Name', 'Type'],
              members: {
                OrganizationId: {},
                Name: {},
                Type: {},
                Description: {},
                HiddenFromGlobalAddressList: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ResourceId: {}
              }
            },
            idempotent: true
          },
          CreateUser: {
            input: {
              type: 'structure',
              required: ['OrganizationId', 'Name', 'DisplayName'],
              members: {
                OrganizationId: {},
                Name: {},
                DisplayName: {
                  shape: 'S23'
                },
                Password: {
                  shape: 'Sp'
                },
                Role: {},
                FirstName: {
                  shape: 'S23'
                },
                LastName: {
                  shape: 'S23'
                },
                HiddenFromGlobalAddressList: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                UserId: {}
              }
            },
            idempotent: true
          },
          DeleteAccessControlRule: {
            input: {
              type: 'structure',
              required: ['OrganizationId', 'Name'],
              members: {
                OrganizationId: {},
                Name: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteAlias: {
            input: {
              type: 'structure',
              required: ['OrganizationId', 'EntityId', 'Alias'],
              members: {
                OrganizationId: {},
                EntityId: {},
                Alias: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeleteAvailabilityConfiguration: {
            input: {
              type: 'structure',
              required: ['OrganizationId', 'DomainName'],
              members: {
                OrganizationId: {},
                DomainName: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeleteEmailMonitoringConfiguration: {
            input: {
              type: 'structure',
              required: ['OrganizationId'],
              members: {
                OrganizationId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeleteGroup: {
            input: {
              type: 'structure',
              required: ['OrganizationId', 'GroupId'],
              members: {
                OrganizationId: {},
                GroupId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeleteImpersonationRole: {
            input: {
              type: 'structure',
              required: ['OrganizationId', 'ImpersonationRoleId'],
              members: {
                OrganizationId: {},
                ImpersonationRoleId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteMailboxPermissions: {
            input: {
              type: 'structure',
              required: ['OrganizationId', 'EntityId', 'GranteeId'],
              members: {
                OrganizationId: {},
                EntityId: {},
                GranteeId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeleteMobileDeviceAccessOverride: {
            input: {
              type: 'structure',
              required: ['OrganizationId', 'UserId', 'DeviceId'],
              members: {
                OrganizationId: {},
                UserId: {},
                DeviceId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteMobileDeviceAccessRule: {
            input: {
              type: 'structure',
              required: ['OrganizationId', 'MobileDeviceAccessRuleId'],
              members: {
                OrganizationId: {},
                MobileDeviceAccessRuleId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteOrganization: {
            input: {
              type: 'structure',
              required: ['OrganizationId', 'DeleteDirectory'],
              members: {
                ClientToken: {
                  idempotencyToken: true
                },
                OrganizationId: {},
                DeleteDirectory: {
                  type: 'boolean'
                },
                ForceDelete: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                OrganizationId: {},
                State: {}
              }
            },
            idempotent: true
          },
          DeleteResource: {
            input: {
              type: 'structure',
              required: ['OrganizationId', 'ResourceId'],
              members: {
                OrganizationId: {},
                ResourceId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeleteRetentionPolicy: {
            input: {
              type: 'structure',
              required: ['OrganizationId', 'Id'],
              members: {
                OrganizationId: {},
                Id: {}
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
              required: ['OrganizationId', 'UserId'],
              members: {
                OrganizationId: {},
                UserId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeregisterFromWorkMail: {
            input: {
              type: 'structure',
              required: ['OrganizationId', 'EntityId'],
              members: {
                OrganizationId: {},
                EntityId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeregisterMailDomain: {
            input: {
              type: 'structure',
              required: ['OrganizationId', 'DomainName'],
              members: {
                OrganizationId: {},
                DomainName: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DescribeEmailMonitoringConfiguration: {
            input: {
              type: 'structure',
              required: ['OrganizationId'],
              members: {
                OrganizationId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                RoleArn: {},
                LogGroupArn: {}
              }
            },
            idempotent: true
          },
          DescribeEntity: {
            input: {
              type: 'structure',
              required: ['OrganizationId', 'Email'],
              members: {
                OrganizationId: {},
                Email: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                EntityId: {},
                Name: {},
                Type: {}
              }
            },
            idempotent: true
          },
          DescribeGroup: {
            input: {
              type: 'structure',
              required: ['OrganizationId', 'GroupId'],
              members: {
                OrganizationId: {},
                GroupId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                GroupId: {},
                Name: {},
                Email: {},
                State: {},
                EnabledDate: {
                  type: 'timestamp'
                },
                DisabledDate: {
                  type: 'timestamp'
                },
                HiddenFromGlobalAddressList: {
                  type: 'boolean'
                }
              }
            },
            idempotent: true
          },
          DescribeInboundDmarcSettings: {
            input: {
              type: 'structure',
              required: ['OrganizationId'],
              members: {
                OrganizationId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Enforced: {
                  type: 'boolean'
                }
              }
            },
            idempotent: true
          },
          DescribeMailboxExportJob: {
            input: {
              type: 'structure',
              required: ['JobId', 'OrganizationId'],
              members: {
                JobId: {},
                OrganizationId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                EntityId: {},
                Description: {},
                RoleArn: {},
                KmsKeyArn: {},
                S3BucketName: {},
                S3Prefix: {},
                S3Path: {},
                EstimatedProgress: {
                  type: 'integer'
                },
                State: {},
                ErrorInfo: {},
                StartTime: {
                  type: 'timestamp'
                },
                EndTime: {
                  type: 'timestamp'
                }
              }
            },
            idempotent: true
          },
          DescribeOrganization: {
            input: {
              type: 'structure',
              required: ['OrganizationId'],
              members: {
                OrganizationId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                OrganizationId: {},
                Alias: {},
                State: {},
                DirectoryId: {},
                DirectoryType: {},
                DefaultMailDomain: {},
                CompletedDate: {
                  type: 'timestamp'
                },
                ErrorMessage: {},
                ARN: {},
                MigrationAdmin: {},
                InteroperabilityEnabled: {
                  type: 'boolean'
                }
              }
            },
            idempotent: true
          },
          DescribeResource: {
            input: {
              type: 'structure',
              required: ['OrganizationId', 'ResourceId'],
              members: {
                OrganizationId: {},
                ResourceId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ResourceId: {},
                Email: {},
                Name: {},
                Type: {},
                BookingOptions: {
                  shape: 'S3v'
                },
                State: {},
                EnabledDate: {
                  type: 'timestamp'
                },
                DisabledDate: {
                  type: 'timestamp'
                },
                Description: {},
                HiddenFromGlobalAddressList: {
                  type: 'boolean'
                }
              }
            },
            idempotent: true
          },
          DescribeUser: {
            input: {
              type: 'structure',
              required: ['OrganizationId', 'UserId'],
              members: {
                OrganizationId: {},
                UserId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                UserId: {},
                Name: {},
                Email: {},
                DisplayName: {
                  shape: 'S23'
                },
                State: {},
                UserRole: {},
                EnabledDate: {
                  type: 'timestamp'
                },
                DisabledDate: {
                  type: 'timestamp'
                },
                MailboxProvisionedDate: {
                  type: 'timestamp'
                },
                MailboxDeprovisionedDate: {
                  type: 'timestamp'
                },
                FirstName: {
                  shape: 'S23'
                },
                LastName: {
                  shape: 'S23'
                },
                HiddenFromGlobalAddressList: {
                  type: 'boolean'
                },
                Initials: {
                  shape: 'S23'
                },
                Telephone: {
                  shape: 'S23'
                },
                Street: {
                  shape: 'S23'
                },
                JobTitle: {
                  shape: 'S23'
                },
                City: {
                  shape: 'S23'
                },
                Company: {
                  shape: 'S23'
                },
                ZipCode: {
                  shape: 'S23'
                },
                Department: {
                  shape: 'S23'
                },
                Country: {
                  shape: 'S23'
                },
                Office: {
                  shape: 'S23'
                }
              }
            },
            idempotent: true
          },
          DisassociateDelegateFromResource: {
            input: {
              type: 'structure',
              required: ['OrganizationId', 'ResourceId', 'EntityId'],
              members: {
                OrganizationId: {},
                ResourceId: {},
                EntityId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DisassociateMemberFromGroup: {
            input: {
              type: 'structure',
              required: ['OrganizationId', 'GroupId', 'MemberId'],
              members: {
                OrganizationId: {},
                GroupId: {},
                MemberId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          GetAccessControlEffect: {
            input: {
              type: 'structure',
              required: ['OrganizationId', 'IpAddress', 'Action'],
              members: {
                OrganizationId: {},
                IpAddress: {},
                Action: {},
                UserId: {},
                ImpersonationRoleId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Effect: {},
                MatchedRules: {
                  type: 'list',
                  member: {}
                }
              }
            }
          },
          GetDefaultRetentionPolicy: {
            input: {
              type: 'structure',
              required: ['OrganizationId'],
              members: {
                OrganizationId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Id: {},
                Name: {},
                Description: {},
                FolderConfigurations: {
                  shape: 'S4a'
                }
              }
            },
            idempotent: true
          },
          GetImpersonationRole: {
            input: {
              type: 'structure',
              required: ['OrganizationId', 'ImpersonationRoleId'],
              members: {
                OrganizationId: {},
                ImpersonationRoleId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ImpersonationRoleId: {},
                Name: {},
                Type: {},
                Description: {},
                Rules: {
                  shape: 'S11'
                },
                DateCreated: {
                  type: 'timestamp'
                },
                DateModified: {
                  type: 'timestamp'
                }
              }
            }
          },
          GetImpersonationRoleEffect: {
            input: {
              type: 'structure',
              required: ['OrganizationId', 'ImpersonationRoleId', 'TargetUser'],
              members: {
                OrganizationId: {},
                ImpersonationRoleId: {},
                TargetUser: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Type: {},
                Effect: {},
                MatchedRules: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ImpersonationRuleId: {},
                      Name: {}
                    }
                  }
                }
              }
            }
          },
          GetMailDomain: {
            input: {
              type: 'structure',
              required: ['OrganizationId', 'DomainName'],
              members: {
                OrganizationId: {},
                DomainName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Records: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Type: {},
                      Hostname: {},
                      Value: {}
                    }
                  }
                },
                IsTestDomain: {
                  type: 'boolean'
                },
                IsDefault: {
                  type: 'boolean'
                },
                OwnershipVerificationStatus: {},
                DkimVerificationStatus: {}
              }
            },
            idempotent: true
          },
          GetMailboxDetails: {
            input: {
              type: 'structure',
              required: ['OrganizationId', 'UserId'],
              members: {
                OrganizationId: {},
                UserId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                MailboxQuota: {
                  type: 'integer'
                },
                MailboxSize: {
                  type: 'double'
                }
              }
            },
            idempotent: true
          },
          GetMobileDeviceAccessEffect: {
            input: {
              type: 'structure',
              required: ['OrganizationId'],
              members: {
                OrganizationId: {},
                DeviceType: {},
                DeviceModel: {},
                DeviceOperatingSystem: {},
                DeviceUserAgent: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Effect: {},
                MatchedRules: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      MobileDeviceAccessRuleId: {},
                      Name: {}
                    }
                  }
                }
              }
            }
          },
          GetMobileDeviceAccessOverride: {
            input: {
              type: 'structure',
              required: ['OrganizationId', 'UserId', 'DeviceId'],
              members: {
                OrganizationId: {},
                UserId: {},
                DeviceId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                UserId: {},
                DeviceId: {},
                Effect: {},
                Description: {},
                DateCreated: {
                  type: 'timestamp'
                },
                DateModified: {
                  type: 'timestamp'
                }
              }
            }
          },
          ListAccessControlRules: {
            input: {
              type: 'structure',
              required: ['OrganizationId'],
              members: {
                OrganizationId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Rules: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Name: {},
                      Effect: {},
                      Description: {},
                      IpRanges: {
                        shape: 'S55'
                      },
                      NotIpRanges: {
                        shape: 'S55'
                      },
                      Actions: {
                        shape: 'S57'
                      },
                      NotActions: {
                        shape: 'S57'
                      },
                      UserIds: {
                        shape: 'S58'
                      },
                      NotUserIds: {
                        shape: 'S58'
                      },
                      DateCreated: {
                        type: 'timestamp'
                      },
                      DateModified: {
                        type: 'timestamp'
                      },
                      ImpersonationRoleIds: {
                        shape: 'S59'
                      },
                      NotImpersonationRoleIds: {
                        shape: 'S59'
                      }
                    }
                  }
                }
              }
            }
          },
          ListAliases: {
            input: {
              type: 'structure',
              required: ['OrganizationId', 'EntityId'],
              members: {
                OrganizationId: {},
                EntityId: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Aliases: {
                  type: 'list',
                  member: {}
                },
                NextToken: {}
              }
            },
            idempotent: true
          },
          ListAvailabilityConfigurations: {
            input: {
              type: 'structure',
              required: ['OrganizationId'],
              members: {
                OrganizationId: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                AvailabilityConfigurations: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      DomainName: {},
                      ProviderType: {},
                      EwsProvider: {
                        type: 'structure',
                        members: {
                          EwsEndpoint: {},
                          EwsUsername: {}
                        }
                      },
                      LambdaProvider: {
                        shape: 'Sq'
                      },
                      DateCreated: {
                        type: 'timestamp'
                      },
                      DateModified: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListGroupMembers: {
            input: {
              type: 'structure',
              required: ['OrganizationId', 'GroupId'],
              members: {
                OrganizationId: {},
                GroupId: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Members: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Id: {},
                      Name: {},
                      Type: {},
                      State: {},
                      EnabledDate: {
                        type: 'timestamp'
                      },
                      DisabledDate: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            },
            idempotent: true
          },
          ListGroups: {
            input: {
              type: 'structure',
              required: ['OrganizationId'],
              members: {
                OrganizationId: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                Filters: {
                  type: 'structure',
                  members: {
                    NamePrefix: {},
                    PrimaryEmailPrefix: {},
                    State: {}
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Groups: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Id: {},
                      Email: {},
                      Name: {},
                      State: {},
                      EnabledDate: {
                        type: 'timestamp'
                      },
                      DisabledDate: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            },
            idempotent: true
          },
          ListGroupsForEntity: {
            input: {
              type: 'structure',
              required: ['OrganizationId', 'EntityId'],
              members: {
                OrganizationId: {},
                EntityId: {},
                Filters: {
                  type: 'structure',
                  members: {
                    GroupNamePrefix: {}
                  }
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
                Groups: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      GroupId: {},
                      GroupName: {}
                    }
                  }
                },
                NextToken: {}
              }
            },
            idempotent: true
          },
          ListImpersonationRoles: {
            input: {
              type: 'structure',
              required: ['OrganizationId'],
              members: {
                OrganizationId: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Roles: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ImpersonationRoleId: {},
                      Name: {},
                      Type: {},
                      DateCreated: {
                        type: 'timestamp'
                      },
                      DateModified: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListMailDomains: {
            input: {
              type: 'structure',
              required: ['OrganizationId'],
              members: {
                OrganizationId: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                MailDomains: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      DomainName: {},
                      DefaultDomain: {
                        type: 'boolean'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            },
            idempotent: true
          },
          ListMailboxExportJobs: {
            input: {
              type: 'structure',
              required: ['OrganizationId'],
              members: {
                OrganizationId: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Jobs: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      JobId: {},
                      EntityId: {},
                      Description: {},
                      S3BucketName: {},
                      S3Path: {},
                      EstimatedProgress: {
                        type: 'integer'
                      },
                      State: {},
                      StartTime: {
                        type: 'timestamp'
                      },
                      EndTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            },
            idempotent: true
          },
          ListMailboxPermissions: {
            input: {
              type: 'structure',
              required: ['OrganizationId', 'EntityId'],
              members: {
                OrganizationId: {},
                EntityId: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Permissions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['GranteeId', 'GranteeType', 'PermissionValues'],
                    members: {
                      GranteeId: {},
                      GranteeType: {},
                      PermissionValues: {
                        shape: 'S6g'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            },
            idempotent: true
          },
          ListMobileDeviceAccessOverrides: {
            input: {
              type: 'structure',
              required: ['OrganizationId'],
              members: {
                OrganizationId: {},
                UserId: {},
                DeviceId: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Overrides: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      UserId: {},
                      DeviceId: {},
                      Effect: {},
                      Description: {},
                      DateCreated: {
                        type: 'timestamp'
                      },
                      DateModified: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListMobileDeviceAccessRules: {
            input: {
              type: 'structure',
              required: ['OrganizationId'],
              members: {
                OrganizationId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Rules: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      MobileDeviceAccessRuleId: {},
                      Name: {},
                      Description: {},
                      Effect: {},
                      DeviceTypes: {
                        shape: 'S1d'
                      },
                      NotDeviceTypes: {
                        shape: 'S1d'
                      },
                      DeviceModels: {
                        shape: 'S1f'
                      },
                      NotDeviceModels: {
                        shape: 'S1f'
                      },
                      DeviceOperatingSystems: {
                        shape: 'S1h'
                      },
                      NotDeviceOperatingSystems: {
                        shape: 'S1h'
                      },
                      DeviceUserAgents: {
                        shape: 'S1j'
                      },
                      NotDeviceUserAgents: {
                        shape: 'S1j'
                      },
                      DateCreated: {
                        type: 'timestamp'
                      },
                      DateModified: {
                        type: 'timestamp'
                      }
                    }
                  }
                }
              }
            }
          },
          ListOrganizations: {
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
                OrganizationSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      OrganizationId: {},
                      Alias: {},
                      DefaultMailDomain: {},
                      ErrorMessage: {},
                      State: {}
                    }
                  }
                },
                NextToken: {}
              }
            },
            idempotent: true
          },
          ListResourceDelegates: {
            input: {
              type: 'structure',
              required: ['OrganizationId', 'ResourceId'],
              members: {
                OrganizationId: {},
                ResourceId: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Delegates: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Id', 'Type'],
                    members: {
                      Id: {},
                      Type: {}
                    }
                  }
                },
                NextToken: {}
              }
            },
            idempotent: true
          },
          ListResources: {
            input: {
              type: 'structure',
              required: ['OrganizationId'],
              members: {
                OrganizationId: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                Filters: {
                  type: 'structure',
                  members: {
                    NamePrefix: {},
                    PrimaryEmailPrefix: {},
                    State: {}
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Resources: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Id: {},
                      Email: {},
                      Name: {},
                      Type: {},
                      State: {},
                      EnabledDate: {
                        type: 'timestamp'
                      },
                      DisabledDate: {
                        type: 'timestamp'
                      },
                      Description: {}
                    }
                  }
                },
                NextToken: {}
              }
            },
            idempotent: true
          },
          ListTagsForResource: {
            input: {
              type: 'structure',
              required: ['ResourceARN'],
              members: {
                ResourceARN: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Tags: {
                  shape: 'S75'
                }
              }
            }
          },
          ListUsers: {
            input: {
              type: 'structure',
              required: ['OrganizationId'],
              members: {
                OrganizationId: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                Filters: {
                  type: 'structure',
                  members: {
                    UsernamePrefix: {},
                    DisplayNamePrefix: {
                      shape: 'S23'
                    },
                    PrimaryEmailPrefix: {},
                    State: {}
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Users: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Id: {},
                      Email: {},
                      Name: {},
                      DisplayName: {},
                      State: {},
                      UserRole: {},
                      EnabledDate: {
                        type: 'timestamp'
                      },
                      DisabledDate: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            },
            idempotent: true
          },
          PutAccessControlRule: {
            input: {
              type: 'structure',
              required: ['Name', 'Effect', 'Description', 'OrganizationId'],
              members: {
                Name: {},
                Effect: {},
                Description: {},
                IpRanges: {
                  shape: 'S55'
                },
                NotIpRanges: {
                  shape: 'S55'
                },
                Actions: {
                  shape: 'S57'
                },
                NotActions: {
                  shape: 'S57'
                },
                UserIds: {
                  shape: 'S58'
                },
                NotUserIds: {
                  shape: 'S58'
                },
                OrganizationId: {},
                ImpersonationRoleIds: {
                  shape: 'S59'
                },
                NotImpersonationRoleIds: {
                  shape: 'S59'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          PutEmailMonitoringConfiguration: {
            input: {
              type: 'structure',
              required: ['OrganizationId', 'RoleArn', 'LogGroupArn'],
              members: {
                OrganizationId: {},
                RoleArn: {},
                LogGroupArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          PutInboundDmarcSettings: {
            input: {
              type: 'structure',
              required: ['OrganizationId', 'Enforced'],
              members: {
                OrganizationId: {},
                Enforced: {
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
          PutMailboxPermissions: {
            input: {
              type: 'structure',
              required: ['OrganizationId', 'EntityId', 'GranteeId', 'PermissionValues'],
              members: {
                OrganizationId: {},
                EntityId: {},
                GranteeId: {},
                PermissionValues: {
                  shape: 'S6g'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          PutMobileDeviceAccessOverride: {
            input: {
              type: 'structure',
              required: ['OrganizationId', 'UserId', 'DeviceId', 'Effect'],
              members: {
                OrganizationId: {},
                UserId: {},
                DeviceId: {},
                Effect: {},
                Description: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          PutRetentionPolicy: {
            input: {
              type: 'structure',
              required: ['OrganizationId', 'Name', 'FolderConfigurations'],
              members: {
                OrganizationId: {},
                Id: {},
                Name: {},
                Description: {
                  type: 'string',
                  sensitive: true
                },
                FolderConfigurations: {
                  shape: 'S4a'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          RegisterMailDomain: {
            input: {
              type: 'structure',
              required: ['OrganizationId', 'DomainName'],
              members: {
                ClientToken: {
                  idempotencyToken: true
                },
                OrganizationId: {},
                DomainName: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          RegisterToWorkMail: {
            input: {
              type: 'structure',
              required: ['OrganizationId', 'EntityId', 'Email'],
              members: {
                OrganizationId: {},
                EntityId: {},
                Email: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          ResetPassword: {
            input: {
              type: 'structure',
              required: ['OrganizationId', 'UserId', 'Password'],
              members: {
                OrganizationId: {},
                UserId: {},
                Password: {
                  shape: 'Sp'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          StartMailboxExportJob: {
            input: {
              type: 'structure',
              required: ['ClientToken', 'OrganizationId', 'EntityId', 'RoleArn', 'KmsKeyArn', 'S3BucketName', 'S3Prefix'],
              members: {
                ClientToken: {
                  idempotencyToken: true
                },
                OrganizationId: {},
                EntityId: {},
                Description: {},
                RoleArn: {},
                KmsKeyArn: {},
                S3BucketName: {},
                S3Prefix: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                JobId: {}
              }
            },
            idempotent: true
          },
          TagResource: {
            input: {
              type: 'structure',
              required: ['ResourceARN', 'Tags'],
              members: {
                ResourceARN: {},
                Tags: {
                  shape: 'S75'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          TestAvailabilityConfiguration: {
            input: {
              type: 'structure',
              required: ['OrganizationId'],
              members: {
                OrganizationId: {},
                DomainName: {},
                EwsProvider: {
                  shape: 'Sm'
                },
                LambdaProvider: {
                  shape: 'Sq'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                TestPassed: {
                  type: 'boolean'
                },
                FailureReason: {}
              }
            }
          },
          UntagResource: {
            input: {
              type: 'structure',
              required: ['ResourceARN', 'TagKeys'],
              members: {
                ResourceARN: {},
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
          UpdateAvailabilityConfiguration: {
            input: {
              type: 'structure',
              required: ['OrganizationId', 'DomainName'],
              members: {
                OrganizationId: {},
                DomainName: {},
                EwsProvider: {
                  shape: 'Sm'
                },
                LambdaProvider: {
                  shape: 'Sq'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          UpdateDefaultMailDomain: {
            input: {
              type: 'structure',
              required: ['OrganizationId', 'DomainName'],
              members: {
                OrganizationId: {},
                DomainName: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          UpdateGroup: {
            input: {
              type: 'structure',
              required: ['OrganizationId', 'GroupId'],
              members: {
                OrganizationId: {},
                GroupId: {},
                HiddenFromGlobalAddressList: {
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
          UpdateImpersonationRole: {
            input: {
              type: 'structure',
              required: ['OrganizationId', 'ImpersonationRoleId', 'Name', 'Type', 'Rules'],
              members: {
                OrganizationId: {},
                ImpersonationRoleId: {},
                Name: {},
                Type: {},
                Description: {},
                Rules: {
                  shape: 'S11'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateMailboxQuota: {
            input: {
              type: 'structure',
              required: ['OrganizationId', 'UserId', 'MailboxQuota'],
              members: {
                OrganizationId: {},
                UserId: {},
                MailboxQuota: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          UpdateMobileDeviceAccessRule: {
            input: {
              type: 'structure',
              required: ['OrganizationId', 'MobileDeviceAccessRuleId', 'Name', 'Effect'],
              members: {
                OrganizationId: {},
                MobileDeviceAccessRuleId: {},
                Name: {},
                Description: {},
                Effect: {},
                DeviceTypes: {
                  shape: 'S1d'
                },
                NotDeviceTypes: {
                  shape: 'S1d'
                },
                DeviceModels: {
                  shape: 'S1f'
                },
                NotDeviceModels: {
                  shape: 'S1f'
                },
                DeviceOperatingSystems: {
                  shape: 'S1h'
                },
                NotDeviceOperatingSystems: {
                  shape: 'S1h'
                },
                DeviceUserAgents: {
                  shape: 'S1j'
                },
                NotDeviceUserAgents: {
                  shape: 'S1j'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdatePrimaryEmailAddress: {
            input: {
              type: 'structure',
              required: ['OrganizationId', 'EntityId', 'Email'],
              members: {
                OrganizationId: {},
                EntityId: {},
                Email: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          UpdateResource: {
            input: {
              type: 'structure',
              required: ['OrganizationId', 'ResourceId'],
              members: {
                OrganizationId: {},
                ResourceId: {},
                Name: {},
                BookingOptions: {
                  shape: 'S3v'
                },
                Description: {},
                Type: {},
                HiddenFromGlobalAddressList: {
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
          UpdateUser: {
            input: {
              type: 'structure',
              required: ['OrganizationId', 'UserId'],
              members: {
                OrganizationId: {},
                UserId: {},
                Role: {},
                DisplayName: {
                  shape: 'S23'
                },
                FirstName: {
                  shape: 'S23'
                },
                LastName: {
                  shape: 'S23'
                },
                HiddenFromGlobalAddressList: {
                  type: 'boolean'
                },
                Initials: {
                  shape: 'S23'
                },
                Telephone: {
                  shape: 'S23'
                },
                Street: {
                  shape: 'S23'
                },
                JobTitle: {
                  shape: 'S23'
                },
                City: {
                  shape: 'S23'
                },
                Company: {
                  shape: 'S23'
                },
                ZipCode: {
                  shape: 'S23'
                },
                Department: {
                  shape: 'S23'
                },
                Country: {
                  shape: 'S23'
                },
                Office: {
                  shape: 'S23'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          }
        },
        shapes: {
          Sm: {
            type: 'structure',
            required: ['EwsEndpoint', 'EwsUsername', 'EwsPassword'],
            members: {
              EwsEndpoint: {},
              EwsUsername: {},
              EwsPassword: {
                shape: 'Sp'
              }
            }
          },
          Sp: {
            type: 'string',
            sensitive: true
          },
          Sq: {
            type: 'structure',
            required: ['LambdaArn'],
            members: {
              LambdaArn: {}
            }
          },
          S11: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['ImpersonationRuleId', 'Effect'],
              members: {
                ImpersonationRuleId: {},
                Name: {},
                Description: {},
                Effect: {},
                TargetUsers: {
                  shape: 'S17'
                },
                NotTargetUsers: {
                  shape: 'S17'
                }
              }
            }
          },
          S17: {
            type: 'list',
            member: {}
          },
          S1d: {
            type: 'list',
            member: {}
          },
          S1f: {
            type: 'list',
            member: {}
          },
          S1h: {
            type: 'list',
            member: {}
          },
          S1j: {
            type: 'list',
            member: {}
          },
          S23: {
            type: 'string',
            sensitive: true
          },
          S3v: {
            type: 'structure',
            members: {
              AutoAcceptRequests: {
                type: 'boolean'
              },
              AutoDeclineRecurringRequests: {
                type: 'boolean'
              },
              AutoDeclineConflictingRequests: {
                type: 'boolean'
              }
            }
          },
          S4a: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Name', 'Action'],
              members: {
                Name: {},
                Action: {},
                Period: {
                  type: 'integer'
                }
              }
            }
          },
          S55: {
            type: 'list',
            member: {}
          },
          S57: {
            type: 'list',
            member: {}
          },
          S58: {
            type: 'list',
            member: {}
          },
          S59: {
            type: 'list',
            member: {}
          },
          S6g: {
            type: 'list',
            member: {}
          },
          S75: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Key', 'Value'],
              members: {
                Key: {},
                Value: {}
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=4ca9cb77000d4180af39e54b280667b081abe48f.js.map