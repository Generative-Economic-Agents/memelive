System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2015-04-08',
          endpointPrefix: 'workspaces',
          jsonVersion: '1.1',
          protocol: 'json',
          serviceFullName: 'Amazon WorkSpaces',
          serviceId: 'WorkSpaces',
          signatureVersion: 'v4',
          targetPrefix: 'WorkspacesService',
          uid: 'workspaces-2015-04-08'
        },
        operations: {
          AcceptAccountLinkInvitation: {
            input: {
              type: 'structure',
              required: ['LinkId'],
              members: {
                LinkId: {},
                ClientToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                AccountLink: {
                  shape: 'S5'
                }
              }
            }
          },
          AssociateConnectionAlias: {
            input: {
              type: 'structure',
              required: ['AliasId', 'ResourceId'],
              members: {
                AliasId: {},
                ResourceId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ConnectionIdentifier: {}
              }
            }
          },
          AssociateIpGroups: {
            input: {
              type: 'structure',
              required: ['DirectoryId', 'GroupIds'],
              members: {
                DirectoryId: {},
                GroupIds: {
                  shape: 'Sf'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          AssociateWorkspaceApplication: {
            input: {
              type: 'structure',
              required: ['WorkspaceId', 'ApplicationId'],
              members: {
                WorkspaceId: {},
                ApplicationId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Association: {
                  shape: 'Sm'
                }
              }
            }
          },
          AuthorizeIpRules: {
            input: {
              type: 'structure',
              required: ['GroupId', 'UserRules'],
              members: {
                GroupId: {},
                UserRules: {
                  shape: 'Su'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          CopyWorkspaceImage: {
            input: {
              type: 'structure',
              required: ['Name', 'SourceImageId', 'SourceRegion'],
              members: {
                Name: {},
                Description: {},
                SourceImageId: {},
                SourceRegion: {},
                Tags: {
                  shape: 'S14'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ImageId: {}
              }
            }
          },
          CreateAccountLinkInvitation: {
            input: {
              type: 'structure',
              required: ['TargetAccountId'],
              members: {
                TargetAccountId: {},
                ClientToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                AccountLink: {
                  shape: 'S5'
                }
              }
            }
          },
          CreateConnectClientAddIn: {
            input: {
              type: 'structure',
              required: ['ResourceId', 'Name', 'URL'],
              members: {
                ResourceId: {},
                Name: {},
                URL: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                AddInId: {}
              }
            }
          },
          CreateConnectionAlias: {
            input: {
              type: 'structure',
              required: ['ConnectionString'],
              members: {
                ConnectionString: {},
                Tags: {
                  shape: 'S14'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AliasId: {}
              }
            }
          },
          CreateIpGroup: {
            input: {
              type: 'structure',
              required: ['GroupName'],
              members: {
                GroupName: {},
                GroupDesc: {},
                UserRules: {
                  shape: 'Su'
                },
                Tags: {
                  shape: 'S14'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                GroupId: {}
              }
            }
          },
          CreateStandbyWorkspaces: {
            input: {
              type: 'structure',
              required: ['PrimaryRegion', 'StandbyWorkspaces'],
              members: {
                PrimaryRegion: {},
                StandbyWorkspaces: {
                  type: 'list',
                  member: {
                    shape: 'S1p'
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                FailedStandbyRequests: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      StandbyWorkspaceRequest: {
                        shape: 'S1p'
                      },
                      ErrorCode: {},
                      ErrorMessage: {}
                    }
                  }
                },
                PendingStandbyRequests: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      UserName: {},
                      DirectoryId: {},
                      State: {},
                      WorkspaceId: {}
                    }
                  }
                }
              }
            }
          },
          CreateTags: {
            input: {
              type: 'structure',
              required: ['ResourceId', 'Tags'],
              members: {
                ResourceId: {},
                Tags: {
                  shape: 'S14'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          CreateUpdatedWorkspaceImage: {
            input: {
              type: 'structure',
              required: ['Name', 'Description', 'SourceImageId'],
              members: {
                Name: {},
                Description: {},
                SourceImageId: {},
                Tags: {
                  shape: 'S14'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ImageId: {}
              }
            }
          },
          CreateWorkspaceBundle: {
            input: {
              type: 'structure',
              required: ['BundleName', 'BundleDescription', 'ImageId', 'ComputeType', 'UserStorage'],
              members: {
                BundleName: {},
                BundleDescription: {},
                ImageId: {},
                ComputeType: {
                  shape: 'S28'
                },
                UserStorage: {
                  shape: 'S2a'
                },
                RootStorage: {
                  shape: 'S2b'
                },
                Tags: {
                  shape: 'S14'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                WorkspaceBundle: {
                  shape: 'S2d'
                }
              }
            }
          },
          CreateWorkspaceImage: {
            input: {
              type: 'structure',
              required: ['Name', 'Description', 'WorkspaceId'],
              members: {
                Name: {},
                Description: {},
                WorkspaceId: {},
                Tags: {
                  shape: 'S14'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ImageId: {},
                Name: {},
                Description: {},
                OperatingSystem: {
                  shape: 'S2k'
                },
                State: {},
                RequiredTenancy: {},
                Created: {
                  type: 'timestamp'
                },
                OwnerAccountId: {}
              }
            }
          },
          CreateWorkspaces: {
            input: {
              type: 'structure',
              required: ['Workspaces'],
              members: {
                Workspaces: {
                  type: 'list',
                  member: {
                    shape: 'S2q'
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                FailedRequests: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      WorkspaceRequest: {
                        shape: 'S2q'
                      },
                      ErrorCode: {},
                      ErrorMessage: {}
                    }
                  }
                },
                PendingRequests: {
                  shape: 'S35'
                }
              }
            }
          },
          DeleteAccountLinkInvitation: {
            input: {
              type: 'structure',
              required: ['LinkId'],
              members: {
                LinkId: {},
                ClientToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                AccountLink: {
                  shape: 'S5'
                }
              }
            }
          },
          DeleteClientBranding: {
            input: {
              type: 'structure',
              required: ['ResourceId', 'Platforms'],
              members: {
                ResourceId: {},
                Platforms: {
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
          DeleteConnectClientAddIn: {
            input: {
              type: 'structure',
              required: ['AddInId', 'ResourceId'],
              members: {
                AddInId: {},
                ResourceId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteConnectionAlias: {
            input: {
              type: 'structure',
              required: ['AliasId'],
              members: {
                AliasId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteIpGroup: {
            input: {
              type: 'structure',
              required: ['GroupId'],
              members: {
                GroupId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteTags: {
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
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteWorkspaceBundle: {
            input: {
              type: 'structure',
              members: {
                BundleId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteWorkspaceImage: {
            input: {
              type: 'structure',
              required: ['ImageId'],
              members: {
                ImageId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeployWorkspaceApplications: {
            input: {
              type: 'structure',
              required: ['WorkspaceId'],
              members: {
                WorkspaceId: {},
                Force: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Deployment: {
                  type: 'structure',
                  members: {
                    Associations: {
                      shape: 'S46'
                    }
                  }
                }
              }
            }
          },
          DeregisterWorkspaceDirectory: {
            input: {
              type: 'structure',
              required: ['DirectoryId'],
              members: {
                DirectoryId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DescribeAccount: {
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {
                DedicatedTenancySupport: {},
                DedicatedTenancyManagementCidrRange: {},
                DedicatedTenancyAccountType: {}
              }
            }
          },
          DescribeAccountModifications: {
            input: {
              type: 'structure',
              members: {
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                AccountModifications: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ModificationState: {},
                      DedicatedTenancySupport: {},
                      DedicatedTenancyManagementCidrRange: {},
                      StartTime: {
                        type: 'timestamp'
                      },
                      ErrorCode: {},
                      ErrorMessage: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeApplicationAssociations: {
            input: {
              type: 'structure',
              required: ['ApplicationId', 'AssociatedResourceTypes'],
              members: {
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {},
                ApplicationId: {},
                AssociatedResourceTypes: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Associations: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ApplicationId: {},
                      AssociatedResourceId: {},
                      AssociatedResourceType: {},
                      Created: {
                        type: 'timestamp'
                      },
                      LastUpdatedTime: {
                        type: 'timestamp'
                      },
                      State: {},
                      StateReason: {
                        shape: 'Sq'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeApplications: {
            input: {
              type: 'structure',
              members: {
                ApplicationIds: {
                  type: 'list',
                  member: {}
                },
                ComputeTypeNames: {
                  shape: 'S4t'
                },
                LicenseType: {},
                OperatingSystemNames: {
                  shape: 'S4v'
                },
                Owner: {},
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
                      ApplicationId: {},
                      Created: {
                        type: 'timestamp'
                      },
                      Description: {},
                      LicenseType: {},
                      Name: {},
                      Owner: {},
                      State: {},
                      SupportedComputeTypeNames: {
                        shape: 'S4t'
                      },
                      SupportedOperatingSystemNames: {
                        shape: 'S4v'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeBundleAssociations: {
            input: {
              type: 'structure',
              required: ['BundleId', 'AssociatedResourceTypes'],
              members: {
                BundleId: {},
                AssociatedResourceTypes: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Associations: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      AssociatedResourceId: {},
                      AssociatedResourceType: {},
                      BundleId: {},
                      Created: {
                        type: 'timestamp'
                      },
                      LastUpdatedTime: {
                        type: 'timestamp'
                      },
                      State: {},
                      StateReason: {
                        shape: 'Sq'
                      }
                    }
                  }
                }
              }
            }
          },
          DescribeClientBranding: {
            input: {
              type: 'structure',
              required: ['ResourceId'],
              members: {
                ResourceId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                DeviceTypeWindows: {
                  shape: 'S59'
                },
                DeviceTypeOsx: {
                  shape: 'S59'
                },
                DeviceTypeAndroid: {
                  shape: 'S59'
                },
                DeviceTypeIos: {
                  shape: 'S5f'
                },
                DeviceTypeLinux: {
                  shape: 'S59'
                },
                DeviceTypeWeb: {
                  shape: 'S59'
                }
              }
            }
          },
          DescribeClientProperties: {
            input: {
              type: 'structure',
              required: ['ResourceIds'],
              members: {
                ResourceIds: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ClientPropertiesList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ResourceId: {},
                      ClientProperties: {
                        shape: 'S5l'
                      }
                    }
                  }
                }
              }
            }
          },
          DescribeConnectClientAddIns: {
            input: {
              type: 'structure',
              required: ['ResourceId'],
              members: {
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
                AddIns: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      AddInId: {},
                      ResourceId: {},
                      Name: {},
                      URL: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeConnectionAliasPermissions: {
            input: {
              type: 'structure',
              required: ['AliasId'],
              members: {
                AliasId: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AliasId: {},
                ConnectionAliasPermissions: {
                  type: 'list',
                  member: {
                    shape: 'S5v'
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeConnectionAliases: {
            input: {
              type: 'structure',
              members: {
                AliasIds: {
                  type: 'list',
                  member: {}
                },
                ResourceId: {},
                Limit: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ConnectionAliases: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ConnectionString: {},
                      AliasId: {},
                      State: {},
                      OwnerAccountId: {},
                      Associations: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            AssociationStatus: {},
                            AssociatedAccountId: {},
                            ResourceId: {},
                            ConnectionIdentifier: {}
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
          DescribeImageAssociations: {
            input: {
              type: 'structure',
              required: ['ImageId', 'AssociatedResourceTypes'],
              members: {
                ImageId: {},
                AssociatedResourceTypes: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Associations: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      AssociatedResourceId: {},
                      AssociatedResourceType: {},
                      Created: {
                        type: 'timestamp'
                      },
                      LastUpdatedTime: {
                        type: 'timestamp'
                      },
                      ImageId: {},
                      State: {},
                      StateReason: {
                        shape: 'Sq'
                      }
                    }
                  }
                }
              }
            }
          },
          DescribeIpGroups: {
            input: {
              type: 'structure',
              members: {
                GroupIds: {
                  shape: 'Sf'
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
                Result: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      groupId: {},
                      groupName: {},
                      groupDesc: {},
                      userRules: {
                        shape: 'Su'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeTags: {
            input: {
              type: 'structure',
              required: ['ResourceId'],
              members: {
                ResourceId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                TagList: {
                  shape: 'S14'
                }
              }
            }
          },
          DescribeWorkspaceAssociations: {
            input: {
              type: 'structure',
              required: ['WorkspaceId', 'AssociatedResourceTypes'],
              members: {
                WorkspaceId: {},
                AssociatedResourceTypes: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Associations: {
                  shape: 'S46'
                }
              }
            }
          },
          DescribeWorkspaceBundles: {
            input: {
              type: 'structure',
              members: {
                BundleIds: {
                  type: 'list',
                  member: {}
                },
                Owner: {},
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Bundles: {
                  type: 'list',
                  member: {
                    shape: 'S2d'
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeWorkspaceDirectories: {
            input: {
              type: 'structure',
              members: {
                DirectoryIds: {
                  type: 'list',
                  member: {}
                },
                Limit: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Directories: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      DirectoryId: {},
                      Alias: {},
                      DirectoryName: {},
                      RegistrationCode: {},
                      SubnetIds: {
                        shape: 'S6w'
                      },
                      DnsIpAddresses: {
                        type: 'list',
                        member: {}
                      },
                      CustomerUserName: {},
                      IamRoleId: {},
                      DirectoryType: {},
                      WorkspaceSecurityGroupId: {},
                      State: {},
                      WorkspaceCreationProperties: {
                        type: 'structure',
                        members: {
                          EnableWorkDocs: {
                            type: 'boolean'
                          },
                          EnableInternetAccess: {
                            type: 'boolean'
                          },
                          DefaultOu: {},
                          CustomSecurityGroupId: {},
                          UserEnabledAsLocalAdministrator: {
                            type: 'boolean'
                          },
                          EnableMaintenanceMode: {
                            type: 'boolean'
                          }
                        }
                      },
                      ipGroupIds: {
                        shape: 'Sf'
                      },
                      WorkspaceAccessProperties: {
                        shape: 'S74'
                      },
                      Tenancy: {},
                      SelfservicePermissions: {
                        shape: 'S77'
                      },
                      SamlProperties: {
                        shape: 'S78'
                      },
                      CertificateBasedAuthProperties: {
                        shape: 'S7b'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeWorkspaceImagePermissions: {
            input: {
              type: 'structure',
              required: ['ImageId'],
              members: {
                ImageId: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ImageId: {},
                ImagePermissions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      SharedAccountId: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeWorkspaceImages: {
            input: {
              type: 'structure',
              members: {
                ImageIds: {
                  type: 'list',
                  member: {}
                },
                ImageType: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Images: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ImageId: {},
                      Name: {},
                      Description: {},
                      OperatingSystem: {
                        shape: 'S2k'
                      },
                      State: {},
                      RequiredTenancy: {},
                      ErrorCode: {},
                      ErrorMessage: {},
                      Created: {
                        type: 'timestamp'
                      },
                      OwnerAccountId: {},
                      Updates: {
                        type: 'structure',
                        members: {
                          UpdateAvailable: {
                            type: 'boolean'
                          },
                          Description: {}
                        }
                      },
                      ErrorDetails: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            ErrorCode: {},
                            ErrorMessage: {}
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
          DescribeWorkspaceSnapshots: {
            input: {
              type: 'structure',
              required: ['WorkspaceId'],
              members: {
                WorkspaceId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                RebuildSnapshots: {
                  shape: 'S7w'
                },
                RestoreSnapshots: {
                  shape: 'S7w'
                }
              }
            }
          },
          DescribeWorkspaces: {
            input: {
              type: 'structure',
              members: {
                WorkspaceIds: {
                  shape: 'S7z'
                },
                DirectoryId: {},
                UserName: {},
                BundleId: {},
                Limit: {
                  type: 'integer'
                },
                NextToken: {},
                WorkspaceName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Workspaces: {
                  shape: 'S35'
                },
                NextToken: {}
              }
            }
          },
          DescribeWorkspacesConnectionStatus: {
            input: {
              type: 'structure',
              members: {
                WorkspaceIds: {
                  shape: 'S7z'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                WorkspacesConnectionStatus: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      WorkspaceId: {},
                      ConnectionState: {},
                      ConnectionStateCheckTimestamp: {
                        type: 'timestamp'
                      },
                      LastKnownUserConnectionTimestamp: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DisassociateConnectionAlias: {
            input: {
              type: 'structure',
              required: ['AliasId'],
              members: {
                AliasId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DisassociateIpGroups: {
            input: {
              type: 'structure',
              required: ['DirectoryId', 'GroupIds'],
              members: {
                DirectoryId: {},
                GroupIds: {
                  shape: 'Sf'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DisassociateWorkspaceApplication: {
            input: {
              type: 'structure',
              required: ['WorkspaceId', 'ApplicationId'],
              members: {
                WorkspaceId: {},
                ApplicationId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Association: {
                  shape: 'Sm'
                }
              }
            }
          },
          GetAccountLink: {
            input: {
              type: 'structure',
              members: {
                LinkId: {},
                LinkedAccountId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                AccountLink: {
                  shape: 'S5'
                }
              }
            }
          },
          ImportClientBranding: {
            input: {
              type: 'structure',
              required: ['ResourceId'],
              members: {
                ResourceId: {},
                DeviceTypeWindows: {
                  shape: 'S8f'
                },
                DeviceTypeOsx: {
                  shape: 'S8f'
                },
                DeviceTypeAndroid: {
                  shape: 'S8f'
                },
                DeviceTypeIos: {
                  type: 'structure',
                  members: {
                    Logo: {
                      type: 'blob'
                    },
                    Logo2x: {
                      type: 'blob'
                    },
                    Logo3x: {
                      type: 'blob'
                    },
                    SupportEmail: {},
                    SupportLink: {},
                    ForgotPasswordLink: {},
                    LoginMessage: {
                      shape: 'S5c'
                    }
                  }
                },
                DeviceTypeLinux: {
                  shape: 'S8f'
                },
                DeviceTypeWeb: {
                  shape: 'S8f'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                DeviceTypeWindows: {
                  shape: 'S59'
                },
                DeviceTypeOsx: {
                  shape: 'S59'
                },
                DeviceTypeAndroid: {
                  shape: 'S59'
                },
                DeviceTypeIos: {
                  shape: 'S5f'
                },
                DeviceTypeLinux: {
                  shape: 'S59'
                },
                DeviceTypeWeb: {
                  shape: 'S59'
                }
              }
            }
          },
          ImportWorkspaceImage: {
            input: {
              type: 'structure',
              required: ['Ec2ImageId', 'IngestionProcess', 'ImageName', 'ImageDescription'],
              members: {
                Ec2ImageId: {},
                IngestionProcess: {},
                ImageName: {},
                ImageDescription: {},
                Tags: {
                  shape: 'S14'
                },
                Applications: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ImageId: {}
              }
            }
          },
          ListAccountLinks: {
            input: {
              type: 'structure',
              members: {
                LinkStatusFilter: {
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
                AccountLinks: {
                  type: 'list',
                  member: {
                    shape: 'S5'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListAvailableManagementCidrRanges: {
            input: {
              type: 'structure',
              required: ['ManagementCidrRangeConstraint'],
              members: {
                ManagementCidrRangeConstraint: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ManagementCidrRanges: {
                  type: 'list',
                  member: {}
                },
                NextToken: {}
              }
            }
          },
          MigrateWorkspace: {
            input: {
              type: 'structure',
              required: ['SourceWorkspaceId', 'BundleId'],
              members: {
                SourceWorkspaceId: {},
                BundleId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                SourceWorkspaceId: {},
                TargetWorkspaceId: {}
              }
            }
          },
          ModifyAccount: {
            input: {
              type: 'structure',
              members: {
                DedicatedTenancySupport: {},
                DedicatedTenancyManagementCidrRange: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          ModifyCertificateBasedAuthProperties: {
            input: {
              type: 'structure',
              required: ['ResourceId'],
              members: {
                ResourceId: {},
                CertificateBasedAuthProperties: {
                  shape: 'S7b'
                },
                PropertiesToDelete: {
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
          ModifyClientProperties: {
            input: {
              type: 'structure',
              required: ['ResourceId', 'ClientProperties'],
              members: {
                ResourceId: {},
                ClientProperties: {
                  shape: 'S5l'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          ModifySamlProperties: {
            input: {
              type: 'structure',
              required: ['ResourceId'],
              members: {
                ResourceId: {},
                SamlProperties: {
                  shape: 'S78'
                },
                PropertiesToDelete: {
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
          ModifySelfservicePermissions: {
            input: {
              type: 'structure',
              required: ['ResourceId', 'SelfservicePermissions'],
              members: {
                ResourceId: {},
                SelfservicePermissions: {
                  shape: 'S77'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          ModifyWorkspaceAccessProperties: {
            input: {
              type: 'structure',
              required: ['ResourceId', 'WorkspaceAccessProperties'],
              members: {
                ResourceId: {},
                WorkspaceAccessProperties: {
                  shape: 'S74'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          ModifyWorkspaceCreationProperties: {
            input: {
              type: 'structure',
              required: ['ResourceId', 'WorkspaceCreationProperties'],
              members: {
                ResourceId: {},
                WorkspaceCreationProperties: {
                  type: 'structure',
                  members: {
                    EnableWorkDocs: {
                      type: 'boolean'
                    },
                    EnableInternetAccess: {
                      type: 'boolean'
                    },
                    DefaultOu: {},
                    CustomSecurityGroupId: {},
                    UserEnabledAsLocalAdministrator: {
                      type: 'boolean'
                    },
                    EnableMaintenanceMode: {
                      type: 'boolean'
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          ModifyWorkspaceProperties: {
            input: {
              type: 'structure',
              required: ['WorkspaceId'],
              members: {
                WorkspaceId: {},
                WorkspaceProperties: {
                  shape: 'S2s'
                },
                DataReplication: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          ModifyWorkspaceState: {
            input: {
              type: 'structure',
              required: ['WorkspaceId', 'WorkspaceState'],
              members: {
                WorkspaceId: {},
                WorkspaceState: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          RebootWorkspaces: {
            input: {
              type: 'structure',
              required: ['RebootWorkspaceRequests'],
              members: {
                RebootWorkspaceRequests: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['WorkspaceId'],
                    members: {
                      WorkspaceId: {}
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                FailedRequests: {
                  type: 'list',
                  member: {
                    shape: 'S9x'
                  }
                }
              }
            }
          },
          RebuildWorkspaces: {
            input: {
              type: 'structure',
              required: ['RebuildWorkspaceRequests'],
              members: {
                RebuildWorkspaceRequests: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['WorkspaceId'],
                    members: {
                      WorkspaceId: {}
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                FailedRequests: {
                  type: 'list',
                  member: {
                    shape: 'S9x'
                  }
                }
              }
            }
          },
          RegisterWorkspaceDirectory: {
            input: {
              type: 'structure',
              required: ['DirectoryId', 'EnableWorkDocs'],
              members: {
                DirectoryId: {},
                SubnetIds: {
                  shape: 'S6w'
                },
                EnableWorkDocs: {
                  type: 'boolean'
                },
                EnableSelfService: {
                  type: 'boolean'
                },
                Tenancy: {},
                Tags: {
                  shape: 'S14'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          RejectAccountLinkInvitation: {
            input: {
              type: 'structure',
              required: ['LinkId'],
              members: {
                LinkId: {},
                ClientToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                AccountLink: {
                  shape: 'S5'
                }
              }
            }
          },
          RestoreWorkspace: {
            input: {
              type: 'structure',
              required: ['WorkspaceId'],
              members: {
                WorkspaceId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          RevokeIpRules: {
            input: {
              type: 'structure',
              required: ['GroupId', 'UserRules'],
              members: {
                GroupId: {},
                UserRules: {
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
          StartWorkspaces: {
            input: {
              type: 'structure',
              required: ['StartWorkspaceRequests'],
              members: {
                StartWorkspaceRequests: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      WorkspaceId: {}
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                FailedRequests: {
                  type: 'list',
                  member: {
                    shape: 'S9x'
                  }
                }
              }
            }
          },
          StopWorkspaces: {
            input: {
              type: 'structure',
              required: ['StopWorkspaceRequests'],
              members: {
                StopWorkspaceRequests: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      WorkspaceId: {}
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                FailedRequests: {
                  type: 'list',
                  member: {
                    shape: 'S9x'
                  }
                }
              }
            }
          },
          TerminateWorkspaces: {
            input: {
              type: 'structure',
              required: ['TerminateWorkspaceRequests'],
              members: {
                TerminateWorkspaceRequests: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['WorkspaceId'],
                    members: {
                      WorkspaceId: {}
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                FailedRequests: {
                  type: 'list',
                  member: {
                    shape: 'S9x'
                  }
                }
              }
            }
          },
          UpdateConnectClientAddIn: {
            input: {
              type: 'structure',
              required: ['AddInId', 'ResourceId'],
              members: {
                AddInId: {},
                ResourceId: {},
                Name: {},
                URL: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateConnectionAliasPermission: {
            input: {
              type: 'structure',
              required: ['AliasId', 'ConnectionAliasPermission'],
              members: {
                AliasId: {},
                ConnectionAliasPermission: {
                  shape: 'S5v'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateRulesOfIpGroup: {
            input: {
              type: 'structure',
              required: ['GroupId', 'UserRules'],
              members: {
                GroupId: {},
                UserRules: {
                  shape: 'Su'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateWorkspaceBundle: {
            input: {
              type: 'structure',
              members: {
                BundleId: {},
                ImageId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateWorkspaceImagePermission: {
            input: {
              type: 'structure',
              required: ['ImageId', 'AllowCopyImage', 'SharedAccountId'],
              members: {
                ImageId: {},
                AllowCopyImage: {
                  type: 'boolean'
                },
                SharedAccountId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          }
        },
        shapes: {
          S5: {
            type: 'structure',
            members: {
              AccountLinkId: {},
              AccountLinkStatus: {},
              SourceAccountId: {},
              TargetAccountId: {}
            }
          },
          Sf: {
            type: 'list',
            member: {}
          },
          Sm: {
            type: 'structure',
            members: {
              AssociatedResourceId: {},
              AssociatedResourceType: {},
              Created: {
                type: 'timestamp'
              },
              LastUpdatedTime: {
                type: 'timestamp'
              },
              State: {},
              StateReason: {
                shape: 'Sq'
              },
              WorkspaceId: {}
            }
          },
          Sq: {
            type: 'structure',
            members: {
              ErrorCode: {},
              ErrorMessage: {}
            }
          },
          Su: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                ipRule: {},
                ruleDesc: {}
              }
            }
          },
          S14: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Key'],
              members: {
                Key: {},
                Value: {}
              }
            }
          },
          S1p: {
            type: 'structure',
            required: ['PrimaryWorkspaceId', 'DirectoryId'],
            members: {
              PrimaryWorkspaceId: {},
              VolumeEncryptionKey: {},
              DirectoryId: {},
              Tags: {
                shape: 'S14'
              },
              DataReplication: {}
            }
          },
          S28: {
            type: 'structure',
            members: {
              Name: {}
            }
          },
          S2a: {
            type: 'structure',
            members: {
              Capacity: {}
            }
          },
          S2b: {
            type: 'structure',
            members: {
              Capacity: {}
            }
          },
          S2d: {
            type: 'structure',
            members: {
              BundleId: {},
              Name: {},
              Owner: {},
              Description: {},
              ImageId: {},
              RootStorage: {
                shape: 'S2b'
              },
              UserStorage: {
                shape: 'S2a'
              },
              ComputeType: {
                shape: 'S28'
              },
              LastUpdatedTime: {
                type: 'timestamp'
              },
              CreationTime: {
                type: 'timestamp'
              },
              State: {},
              BundleType: {}
            }
          },
          S2k: {
            type: 'structure',
            members: {
              Type: {}
            }
          },
          S2q: {
            type: 'structure',
            required: ['DirectoryId', 'UserName', 'BundleId'],
            members: {
              DirectoryId: {},
              UserName: {},
              BundleId: {},
              VolumeEncryptionKey: {},
              UserVolumeEncryptionEnabled: {
                type: 'boolean'
              },
              RootVolumeEncryptionEnabled: {
                type: 'boolean'
              },
              WorkspaceProperties: {
                shape: 'S2s'
              },
              Tags: {
                shape: 'S14'
              },
              WorkspaceName: {}
            }
          },
          S2s: {
            type: 'structure',
            members: {
              RunningMode: {},
              RunningModeAutoStopTimeoutInMinutes: {
                type: 'integer'
              },
              RootVolumeSizeGib: {
                type: 'integer'
              },
              UserVolumeSizeGib: {
                type: 'integer'
              },
              ComputeTypeName: {},
              Protocols: {
                type: 'list',
                member: {}
              },
              OperatingSystemName: {}
            }
          },
          S35: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                WorkspaceId: {},
                DirectoryId: {},
                UserName: {},
                IpAddress: {},
                State: {},
                BundleId: {},
                SubnetId: {},
                ErrorMessage: {},
                ErrorCode: {},
                ComputerName: {},
                VolumeEncryptionKey: {},
                UserVolumeEncryptionEnabled: {
                  type: 'boolean'
                },
                RootVolumeEncryptionEnabled: {
                  type: 'boolean'
                },
                WorkspaceName: {},
                WorkspaceProperties: {
                  shape: 'S2s'
                },
                ModificationStates: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Resource: {},
                      State: {}
                    }
                  }
                },
                RelatedWorkspaces: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      WorkspaceId: {},
                      Region: {},
                      State: {},
                      Type: {}
                    }
                  }
                },
                DataReplicationSettings: {
                  type: 'structure',
                  members: {
                    DataReplication: {},
                    RecoverySnapshotTime: {
                      type: 'timestamp'
                    }
                  }
                },
                StandbyWorkspacesProperties: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      StandbyWorkspaceId: {},
                      DataReplication: {},
                      RecoverySnapshotTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                }
              }
            }
          },
          S46: {
            type: 'list',
            member: {
              shape: 'Sm'
            }
          },
          S4t: {
            type: 'list',
            member: {}
          },
          S4v: {
            type: 'list',
            member: {}
          },
          S59: {
            type: 'structure',
            members: {
              LogoUrl: {},
              SupportEmail: {},
              SupportLink: {},
              ForgotPasswordLink: {},
              LoginMessage: {
                shape: 'S5c'
              }
            }
          },
          S5c: {
            type: 'map',
            key: {},
            value: {}
          },
          S5f: {
            type: 'structure',
            members: {
              LogoUrl: {},
              Logo2xUrl: {},
              Logo3xUrl: {},
              SupportEmail: {},
              SupportLink: {},
              ForgotPasswordLink: {},
              LoginMessage: {
                shape: 'S5c'
              }
            }
          },
          S5l: {
            type: 'structure',
            members: {
              ReconnectEnabled: {},
              LogUploadEnabled: {}
            }
          },
          S5v: {
            type: 'structure',
            required: ['SharedAccountId', 'AllowAssociation'],
            members: {
              SharedAccountId: {},
              AllowAssociation: {
                type: 'boolean'
              }
            }
          },
          S6w: {
            type: 'list',
            member: {}
          },
          S74: {
            type: 'structure',
            members: {
              DeviceTypeWindows: {},
              DeviceTypeOsx: {},
              DeviceTypeWeb: {},
              DeviceTypeIos: {},
              DeviceTypeAndroid: {},
              DeviceTypeChromeOs: {},
              DeviceTypeZeroClient: {},
              DeviceTypeLinux: {}
            }
          },
          S77: {
            type: 'structure',
            members: {
              RestartWorkspace: {},
              IncreaseVolumeSize: {},
              ChangeComputeType: {},
              SwitchRunningMode: {},
              RebuildWorkspace: {}
            }
          },
          S78: {
            type: 'structure',
            members: {
              Status: {},
              UserAccessUrl: {},
              RelayStateParameterName: {}
            }
          },
          S7b: {
            type: 'structure',
            members: {
              Status: {},
              CertificateAuthorityArn: {}
            }
          },
          S7w: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                SnapshotTime: {
                  type: 'timestamp'
                }
              }
            }
          },
          S7z: {
            type: 'list',
            member: {}
          },
          S8f: {
            type: 'structure',
            members: {
              Logo: {
                type: 'blob'
              },
              SupportEmail: {},
              SupportLink: {},
              ForgotPasswordLink: {},
              LoginMessage: {
                shape: 'S5c'
              }
            }
          },
          S9x: {
            type: 'structure',
            members: {
              WorkspaceId: {},
              ErrorCode: {},
              ErrorMessage: {}
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=6f46f348259fceb4e4f516ab56b06f36ed64f4a1.js.map