System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2016-12-01',
          endpointPrefix: 'appstream2',
          jsonVersion: '1.1',
          protocol: 'json',
          serviceFullName: 'Amazon AppStream',
          serviceId: 'AppStream',
          signatureVersion: 'v4',
          signingName: 'appstream',
          targetPrefix: 'PhotonAdminProxyService',
          uid: 'appstream-2016-12-01'
        },
        operations: {
          AssociateAppBlockBuilderAppBlock: {
            input: {
              type: 'structure',
              required: ['AppBlockArn', 'AppBlockBuilderName'],
              members: {
                AppBlockArn: {},
                AppBlockBuilderName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                AppBlockBuilderAppBlockAssociation: {
                  shape: 'S5'
                }
              }
            }
          },
          AssociateApplicationFleet: {
            input: {
              type: 'structure',
              required: ['FleetName', 'ApplicationArn'],
              members: {
                FleetName: {},
                ApplicationArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ApplicationFleetAssociation: {
                  shape: 'S8'
                }
              }
            }
          },
          AssociateApplicationToEntitlement: {
            input: {
              type: 'structure',
              required: ['StackName', 'EntitlementName', 'ApplicationIdentifier'],
              members: {
                StackName: {},
                EntitlementName: {},
                ApplicationIdentifier: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          AssociateFleet: {
            input: {
              type: 'structure',
              required: ['FleetName', 'StackName'],
              members: {
                FleetName: {},
                StackName: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          BatchAssociateUserStack: {
            input: {
              type: 'structure',
              required: ['UserStackAssociations'],
              members: {
                UserStackAssociations: {
                  shape: 'Sf'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                errors: {
                  shape: 'Sl'
                }
              }
            }
          },
          BatchDisassociateUserStack: {
            input: {
              type: 'structure',
              required: ['UserStackAssociations'],
              members: {
                UserStackAssociations: {
                  shape: 'Sf'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                errors: {
                  shape: 'Sl'
                }
              }
            }
          },
          CopyImage: {
            input: {
              type: 'structure',
              required: ['SourceImageName', 'DestinationImageName', 'DestinationRegion'],
              members: {
                SourceImageName: {},
                DestinationImageName: {},
                DestinationRegion: {},
                DestinationImageDescription: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                DestinationImageName: {}
              }
            }
          },
          CreateAppBlock: {
            input: {
              type: 'structure',
              required: ['Name', 'SourceS3Location'],
              members: {
                Name: {},
                Description: {},
                DisplayName: {},
                SourceS3Location: {
                  shape: 'Sw'
                },
                SetupScriptDetails: {
                  shape: 'Sz'
                },
                Tags: {
                  shape: 'S11'
                },
                PostSetupScriptDetails: {
                  shape: 'Sz'
                },
                PackagingType: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                AppBlock: {
                  shape: 'S16'
                }
              }
            }
          },
          CreateAppBlockBuilder: {
            input: {
              type: 'structure',
              required: ['Name', 'Platform', 'InstanceType', 'VpcConfig'],
              members: {
                Name: {},
                Description: {},
                DisplayName: {},
                Tags: {
                  shape: 'S11'
                },
                Platform: {},
                InstanceType: {},
                VpcConfig: {
                  shape: 'S1d'
                },
                EnableDefaultInternetAccess: {
                  type: 'boolean'
                },
                IamRoleArn: {},
                AccessEndpoints: {
                  shape: 'S1h'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AppBlockBuilder: {
                  shape: 'S1l'
                }
              }
            }
          },
          CreateAppBlockBuilderStreamingURL: {
            input: {
              type: 'structure',
              required: ['AppBlockBuilderName'],
              members: {
                AppBlockBuilderName: {},
                Validity: {
                  type: 'long'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                StreamingURL: {},
                Expires: {
                  type: 'timestamp'
                }
              }
            }
          },
          CreateApplication: {
            input: {
              type: 'structure',
              required: ['Name', 'IconS3Location', 'LaunchPath', 'Platforms', 'InstanceFamilies', 'AppBlockArn'],
              members: {
                Name: {},
                DisplayName: {},
                Description: {},
                IconS3Location: {
                  shape: 'Sw'
                },
                LaunchPath: {},
                WorkingDirectory: {},
                LaunchParameters: {},
                Platforms: {
                  shape: 'S1w'
                },
                InstanceFamilies: {
                  shape: 'S1y'
                },
                AppBlockArn: {},
                Tags: {
                  shape: 'S11'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Application: {
                  shape: 'S20'
                }
              }
            }
          },
          CreateDirectoryConfig: {
            input: {
              type: 'structure',
              required: ['DirectoryName', 'OrganizationalUnitDistinguishedNames'],
              members: {
                DirectoryName: {},
                OrganizationalUnitDistinguishedNames: {
                  shape: 'S24'
                },
                ServiceAccountCredentials: {
                  shape: 'S26'
                },
                CertificateBasedAuthProperties: {
                  shape: 'S29'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                DirectoryConfig: {
                  shape: 'S2c'
                }
              }
            }
          },
          CreateEntitlement: {
            input: {
              type: 'structure',
              required: ['Name', 'StackName', 'AppVisibility', 'Attributes'],
              members: {
                Name: {},
                StackName: {},
                Description: {},
                AppVisibility: {},
                Attributes: {
                  shape: 'S2f'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Entitlement: {
                  shape: 'S2i'
                }
              }
            }
          },
          CreateFleet: {
            input: {
              type: 'structure',
              required: ['Name', 'InstanceType'],
              members: {
                Name: {},
                ImageName: {},
                ImageArn: {},
                InstanceType: {},
                FleetType: {},
                ComputeCapacity: {
                  shape: 'S2l'
                },
                VpcConfig: {
                  shape: 'S1d'
                },
                MaxUserDurationInSeconds: {
                  type: 'integer'
                },
                DisconnectTimeoutInSeconds: {
                  type: 'integer'
                },
                Description: {},
                DisplayName: {},
                EnableDefaultInternetAccess: {
                  type: 'boolean'
                },
                DomainJoinInfo: {
                  shape: 'S2m'
                },
                Tags: {
                  shape: 'S11'
                },
                IdleDisconnectTimeoutInSeconds: {
                  type: 'integer'
                },
                IamRoleArn: {},
                StreamView: {},
                Platform: {},
                MaxConcurrentSessions: {
                  type: 'integer'
                },
                UsbDeviceFilterStrings: {
                  shape: 'S2o'
                },
                SessionScriptS3Location: {
                  shape: 'Sw'
                },
                MaxSessionsPerInstance: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Fleet: {
                  shape: 'S2r'
                }
              }
            }
          },
          CreateImageBuilder: {
            input: {
              type: 'structure',
              required: ['Name', 'InstanceType'],
              members: {
                Name: {},
                ImageName: {},
                ImageArn: {},
                InstanceType: {},
                Description: {},
                DisplayName: {},
                VpcConfig: {
                  shape: 'S1d'
                },
                IamRoleArn: {},
                EnableDefaultInternetAccess: {
                  type: 'boolean'
                },
                DomainJoinInfo: {
                  shape: 'S2m'
                },
                AppstreamAgentVersion: {},
                Tags: {
                  shape: 'S11'
                },
                AccessEndpoints: {
                  shape: 'S1h'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ImageBuilder: {
                  shape: 'S2z'
                }
              }
            }
          },
          CreateImageBuilderStreamingURL: {
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {},
                Validity: {
                  type: 'long'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                StreamingURL: {},
                Expires: {
                  type: 'timestamp'
                }
              }
            }
          },
          CreateStack: {
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {},
                Description: {},
                DisplayName: {},
                StorageConnectors: {
                  shape: 'S37'
                },
                RedirectURL: {},
                FeedbackURL: {},
                UserSettings: {
                  shape: 'S3f'
                },
                ApplicationSettings: {
                  shape: 'S3j'
                },
                Tags: {
                  shape: 'S11'
                },
                AccessEndpoints: {
                  shape: 'S1h'
                },
                EmbedHostDomains: {
                  shape: 'S3l'
                },
                StreamingExperienceSettings: {
                  shape: 'S3n'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Stack: {
                  shape: 'S3q'
                }
              }
            }
          },
          CreateStreamingURL: {
            input: {
              type: 'structure',
              required: ['StackName', 'FleetName', 'UserId'],
              members: {
                StackName: {},
                FleetName: {},
                UserId: {},
                ApplicationId: {},
                Validity: {
                  type: 'long'
                },
                SessionContext: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                StreamingURL: {},
                Expires: {
                  type: 'timestamp'
                }
              }
            }
          },
          CreateUpdatedImage: {
            input: {
              type: 'structure',
              required: ['existingImageName', 'newImageName'],
              members: {
                existingImageName: {},
                newImageName: {},
                newImageDescription: {},
                newImageDisplayName: {},
                newImageTags: {
                  shape: 'S11'
                },
                dryRun: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                image: {
                  shape: 'S40'
                },
                canUpdateImage: {
                  type: 'boolean'
                }
              }
            }
          },
          CreateUsageReportSubscription: {
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {
                S3BucketName: {},
                Schedule: {}
              }
            }
          },
          CreateUser: {
            input: {
              type: 'structure',
              required: ['UserName', 'AuthenticationType'],
              members: {
                UserName: {
                  shape: 'Sh'
                },
                MessageAction: {},
                FirstName: {
                  shape: 'S4c'
                },
                LastName: {
                  shape: 'S4c'
                },
                AuthenticationType: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteAppBlock: {
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteAppBlockBuilder: {
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteApplication: {
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteDirectoryConfig: {
            input: {
              type: 'structure',
              required: ['DirectoryName'],
              members: {
                DirectoryName: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteEntitlement: {
            input: {
              type: 'structure',
              required: ['Name', 'StackName'],
              members: {
                Name: {},
                StackName: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteFleet: {
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteImage: {
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
                Image: {
                  shape: 'S40'
                }
              }
            }
          },
          DeleteImageBuilder: {
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
                ImageBuilder: {
                  shape: 'S2z'
                }
              }
            }
          },
          DeleteImagePermissions: {
            input: {
              type: 'structure',
              required: ['Name', 'SharedAccountId'],
              members: {
                Name: {},
                SharedAccountId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteStack: {
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteUsageReportSubscription: {
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteUser: {
            input: {
              type: 'structure',
              required: ['UserName', 'AuthenticationType'],
              members: {
                UserName: {
                  shape: 'Sh'
                },
                AuthenticationType: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DescribeAppBlockBuilderAppBlockAssociations: {
            input: {
              type: 'structure',
              members: {
                AppBlockArn: {},
                AppBlockBuilderName: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                AppBlockBuilderAppBlockAssociations: {
                  type: 'list',
                  member: {
                    shape: 'S5'
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeAppBlockBuilders: {
            input: {
              type: 'structure',
              members: {
                Names: {
                  shape: 'S1y'
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
                AppBlockBuilders: {
                  type: 'list',
                  member: {
                    shape: 'S1l'
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeAppBlocks: {
            input: {
              type: 'structure',
              members: {
                Arns: {
                  shape: 'S5a'
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
                AppBlocks: {
                  type: 'list',
                  member: {
                    shape: 'S16'
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeApplicationFleetAssociations: {
            input: {
              type: 'structure',
              members: {
                FleetName: {},
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
                ApplicationFleetAssociations: {
                  type: 'list',
                  member: {
                    shape: 'S8'
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
                Arns: {
                  shape: 'S5a'
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
                Applications: {
                  shape: 'S45'
                },
                NextToken: {}
              }
            }
          },
          DescribeDirectoryConfigs: {
            input: {
              type: 'structure',
              members: {
                DirectoryNames: {
                  type: 'list',
                  member: {}
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
                DirectoryConfigs: {
                  type: 'list',
                  member: {
                    shape: 'S2c'
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeEntitlements: {
            input: {
              type: 'structure',
              required: ['StackName'],
              members: {
                Name: {},
                StackName: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Entitlements: {
                  type: 'list',
                  member: {
                    shape: 'S2i'
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeFleets: {
            input: {
              type: 'structure',
              members: {
                Names: {
                  shape: 'S1y'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Fleets: {
                  type: 'list',
                  member: {
                    shape: 'S2r'
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeImageBuilders: {
            input: {
              type: 'structure',
              members: {
                Names: {
                  shape: 'S1y'
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
                ImageBuilders: {
                  type: 'list',
                  member: {
                    shape: 'S2z'
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeImagePermissions: {
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {},
                MaxResults: {
                  type: 'integer'
                },
                SharedAwsAccountIds: {
                  type: 'list',
                  member: {}
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Name: {},
                SharedImagePermissionsList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['sharedAccountId', 'imagePermissions'],
                    members: {
                      sharedAccountId: {},
                      imagePermissions: {
                        shape: 'S46'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeImages: {
            input: {
              type: 'structure',
              members: {
                Names: {
                  shape: 'S1y'
                },
                Arns: {
                  shape: 'S5a'
                },
                Type: {},
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
                    shape: 'S40'
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeSessions: {
            input: {
              type: 'structure',
              required: ['StackName', 'FleetName'],
              members: {
                StackName: {},
                FleetName: {},
                UserId: {},
                NextToken: {},
                Limit: {
                  type: 'integer'
                },
                AuthenticationType: {},
                InstanceId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Sessions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Id', 'UserId', 'StackName', 'FleetName', 'State'],
                    members: {
                      Id: {},
                      UserId: {},
                      StackName: {},
                      FleetName: {},
                      State: {},
                      ConnectionState: {},
                      StartTime: {
                        type: 'timestamp'
                      },
                      MaxExpirationTime: {
                        type: 'timestamp'
                      },
                      AuthenticationType: {},
                      NetworkAccessConfiguration: {
                        shape: 'S33'
                      },
                      InstanceId: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeStacks: {
            input: {
              type: 'structure',
              members: {
                Names: {
                  shape: 'S1y'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Stacks: {
                  type: 'list',
                  member: {
                    shape: 'S3q'
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeUsageReportSubscriptions: {
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
                UsageReportSubscriptions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      S3BucketName: {},
                      Schedule: {},
                      LastGeneratedReportDate: {
                        type: 'timestamp'
                      },
                      SubscriptionErrors: {
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
          DescribeUserStackAssociations: {
            input: {
              type: 'structure',
              members: {
                StackName: {},
                UserName: {
                  shape: 'Sh'
                },
                AuthenticationType: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                UserStackAssociations: {
                  shape: 'Sf'
                },
                NextToken: {}
              }
            }
          },
          DescribeUsers: {
            input: {
              type: 'structure',
              required: ['AuthenticationType'],
              members: {
                AuthenticationType: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Users: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['AuthenticationType'],
                    members: {
                      Arn: {},
                      UserName: {
                        shape: 'Sh'
                      },
                      Enabled: {
                        type: 'boolean'
                      },
                      Status: {},
                      FirstName: {
                        shape: 'S4c'
                      },
                      LastName: {
                        shape: 'S4c'
                      },
                      CreatedTime: {
                        type: 'timestamp'
                      },
                      AuthenticationType: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DisableUser: {
            input: {
              type: 'structure',
              required: ['UserName', 'AuthenticationType'],
              members: {
                UserName: {
                  shape: 'Sh'
                },
                AuthenticationType: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DisassociateAppBlockBuilderAppBlock: {
            input: {
              type: 'structure',
              required: ['AppBlockArn', 'AppBlockBuilderName'],
              members: {
                AppBlockArn: {},
                AppBlockBuilderName: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DisassociateApplicationFleet: {
            input: {
              type: 'structure',
              required: ['FleetName', 'ApplicationArn'],
              members: {
                FleetName: {},
                ApplicationArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DisassociateApplicationFromEntitlement: {
            input: {
              type: 'structure',
              required: ['StackName', 'EntitlementName', 'ApplicationIdentifier'],
              members: {
                StackName: {},
                EntitlementName: {},
                ApplicationIdentifier: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DisassociateFleet: {
            input: {
              type: 'structure',
              required: ['FleetName', 'StackName'],
              members: {
                FleetName: {},
                StackName: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          EnableUser: {
            input: {
              type: 'structure',
              required: ['UserName', 'AuthenticationType'],
              members: {
                UserName: {
                  shape: 'Sh'
                },
                AuthenticationType: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          ExpireSession: {
            input: {
              type: 'structure',
              required: ['SessionId'],
              members: {
                SessionId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          ListAssociatedFleets: {
            input: {
              type: 'structure',
              required: ['StackName'],
              members: {
                StackName: {},
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Names: {
                  shape: 'S1y'
                },
                NextToken: {}
              }
            }
          },
          ListAssociatedStacks: {
            input: {
              type: 'structure',
              required: ['FleetName'],
              members: {
                FleetName: {},
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Names: {
                  shape: 'S1y'
                },
                NextToken: {}
              }
            }
          },
          ListEntitledApplications: {
            input: {
              type: 'structure',
              required: ['StackName', 'EntitlementName'],
              members: {
                StackName: {},
                EntitlementName: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                EntitledApplications: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['ApplicationIdentifier'],
                    members: {
                      ApplicationIdentifier: {}
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
                  shape: 'S11'
                }
              }
            }
          },
          StartAppBlockBuilder: {
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
                AppBlockBuilder: {
                  shape: 'S1l'
                }
              }
            }
          },
          StartFleet: {
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          StartImageBuilder: {
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {},
                AppstreamAgentVersion: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ImageBuilder: {
                  shape: 'S2z'
                }
              }
            }
          },
          StopAppBlockBuilder: {
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
                AppBlockBuilder: {
                  shape: 'S1l'
                }
              }
            }
          },
          StopFleet: {
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          StopImageBuilder: {
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
                ImageBuilder: {
                  shape: 'S2z'
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
                  shape: 'S11'
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
          UpdateAppBlockBuilder: {
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {},
                Description: {},
                DisplayName: {},
                Platform: {},
                InstanceType: {},
                VpcConfig: {
                  shape: 'S1d'
                },
                EnableDefaultInternetAccess: {
                  type: 'boolean'
                },
                IamRoleArn: {},
                AccessEndpoints: {
                  shape: 'S1h'
                },
                AttributesToDelete: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AppBlockBuilder: {
                  shape: 'S1l'
                }
              }
            }
          },
          UpdateApplication: {
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {},
                DisplayName: {},
                Description: {},
                IconS3Location: {
                  shape: 'Sw'
                },
                LaunchPath: {},
                WorkingDirectory: {},
                LaunchParameters: {},
                AppBlockArn: {},
                AttributesToDelete: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Application: {
                  shape: 'S20'
                }
              }
            }
          },
          UpdateDirectoryConfig: {
            input: {
              type: 'structure',
              required: ['DirectoryName'],
              members: {
                DirectoryName: {},
                OrganizationalUnitDistinguishedNames: {
                  shape: 'S24'
                },
                ServiceAccountCredentials: {
                  shape: 'S26'
                },
                CertificateBasedAuthProperties: {
                  shape: 'S29'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                DirectoryConfig: {
                  shape: 'S2c'
                }
              }
            }
          },
          UpdateEntitlement: {
            input: {
              type: 'structure',
              required: ['Name', 'StackName'],
              members: {
                Name: {},
                StackName: {},
                Description: {},
                AppVisibility: {},
                Attributes: {
                  shape: 'S2f'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Entitlement: {
                  shape: 'S2i'
                }
              }
            }
          },
          UpdateFleet: {
            input: {
              type: 'structure',
              members: {
                ImageName: {},
                ImageArn: {},
                Name: {},
                InstanceType: {},
                ComputeCapacity: {
                  shape: 'S2l'
                },
                VpcConfig: {
                  shape: 'S1d'
                },
                MaxUserDurationInSeconds: {
                  type: 'integer'
                },
                DisconnectTimeoutInSeconds: {
                  type: 'integer'
                },
                DeleteVpcConfig: {
                  deprecated: true,
                  type: 'boolean'
                },
                Description: {},
                DisplayName: {},
                EnableDefaultInternetAccess: {
                  type: 'boolean'
                },
                DomainJoinInfo: {
                  shape: 'S2m'
                },
                IdleDisconnectTimeoutInSeconds: {
                  type: 'integer'
                },
                AttributesToDelete: {
                  type: 'list',
                  member: {}
                },
                IamRoleArn: {},
                StreamView: {},
                Platform: {},
                MaxConcurrentSessions: {
                  type: 'integer'
                },
                UsbDeviceFilterStrings: {
                  shape: 'S2o'
                },
                SessionScriptS3Location: {
                  shape: 'Sw'
                },
                MaxSessionsPerInstance: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Fleet: {
                  shape: 'S2r'
                }
              }
            }
          },
          UpdateImagePermissions: {
            input: {
              type: 'structure',
              required: ['Name', 'SharedAccountId', 'ImagePermissions'],
              members: {
                Name: {},
                SharedAccountId: {},
                ImagePermissions: {
                  shape: 'S46'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateStack: {
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                DisplayName: {},
                Description: {},
                Name: {},
                StorageConnectors: {
                  shape: 'S37'
                },
                DeleteStorageConnectors: {
                  deprecated: true,
                  type: 'boolean'
                },
                RedirectURL: {},
                FeedbackURL: {},
                AttributesToDelete: {
                  type: 'list',
                  member: {}
                },
                UserSettings: {
                  shape: 'S3f'
                },
                ApplicationSettings: {
                  shape: 'S3j'
                },
                AccessEndpoints: {
                  shape: 'S1h'
                },
                EmbedHostDomains: {
                  shape: 'S3l'
                },
                StreamingExperienceSettings: {
                  shape: 'S3n'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Stack: {
                  shape: 'S3q'
                }
              }
            }
          }
        },
        shapes: {
          S5: {
            type: 'structure',
            required: ['AppBlockArn', 'AppBlockBuilderName'],
            members: {
              AppBlockArn: {},
              AppBlockBuilderName: {}
            }
          },
          S8: {
            type: 'structure',
            required: ['FleetName', 'ApplicationArn'],
            members: {
              FleetName: {},
              ApplicationArn: {}
            }
          },
          Sf: {
            type: 'list',
            member: {
              shape: 'Sg'
            }
          },
          Sg: {
            type: 'structure',
            required: ['StackName', 'UserName', 'AuthenticationType'],
            members: {
              StackName: {},
              UserName: {
                shape: 'Sh'
              },
              AuthenticationType: {},
              SendEmailNotification: {
                type: 'boolean'
              }
            }
          },
          Sh: {
            type: 'string',
            sensitive: true
          },
          Sl: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                UserStackAssociation: {
                  shape: 'Sg'
                },
                ErrorCode: {},
                ErrorMessage: {}
              }
            }
          },
          Sw: {
            type: 'structure',
            required: ['S3Bucket'],
            members: {
              S3Bucket: {},
              S3Key: {}
            }
          },
          Sz: {
            type: 'structure',
            required: ['ScriptS3Location', 'ExecutablePath', 'TimeoutInSeconds'],
            members: {
              ScriptS3Location: {
                shape: 'Sw'
              },
              ExecutablePath: {},
              ExecutableParameters: {},
              TimeoutInSeconds: {
                type: 'integer'
              }
            }
          },
          S11: {
            type: 'map',
            key: {},
            value: {}
          },
          S16: {
            type: 'structure',
            required: ['Name', 'Arn'],
            members: {
              Name: {},
              Arn: {},
              Description: {},
              DisplayName: {},
              SourceS3Location: {
                shape: 'Sw'
              },
              SetupScriptDetails: {
                shape: 'Sz'
              },
              CreatedTime: {
                type: 'timestamp'
              },
              PostSetupScriptDetails: {
                shape: 'Sz'
              },
              PackagingType: {},
              State: {},
              AppBlockErrors: {
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
          },
          S1d: {
            type: 'structure',
            members: {
              SubnetIds: {
                type: 'list',
                member: {}
              },
              SecurityGroupIds: {
                type: 'list',
                member: {}
              }
            }
          },
          S1h: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['EndpointType'],
              members: {
                EndpointType: {},
                VpceId: {}
              }
            }
          },
          S1l: {
            type: 'structure',
            required: ['Arn', 'Name', 'Platform', 'InstanceType', 'VpcConfig', 'State'],
            members: {
              Arn: {},
              Name: {},
              DisplayName: {},
              Description: {},
              Platform: {},
              InstanceType: {},
              EnableDefaultInternetAccess: {
                type: 'boolean'
              },
              IamRoleArn: {},
              VpcConfig: {
                shape: 'S1d'
              },
              State: {},
              CreatedTime: {
                type: 'timestamp'
              },
              AppBlockBuilderErrors: {
                shape: 'S1n'
              },
              StateChangeReason: {
                type: 'structure',
                members: {
                  Code: {},
                  Message: {}
                }
              },
              AccessEndpoints: {
                shape: 'S1h'
              }
            }
          },
          S1n: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                ErrorCode: {},
                ErrorMessage: {},
                ErrorTimestamp: {
                  type: 'timestamp'
                }
              }
            }
          },
          S1w: {
            type: 'list',
            member: {}
          },
          S1y: {
            type: 'list',
            member: {}
          },
          S20: {
            type: 'structure',
            members: {
              Name: {},
              DisplayName: {},
              IconURL: {},
              LaunchPath: {},
              LaunchParameters: {},
              Enabled: {
                type: 'boolean'
              },
              Metadata: {
                type: 'map',
                key: {},
                value: {}
              },
              WorkingDirectory: {},
              Description: {},
              Arn: {},
              AppBlockArn: {},
              IconS3Location: {
                shape: 'Sw'
              },
              Platforms: {
                shape: 'S1w'
              },
              InstanceFamilies: {
                shape: 'S1y'
              },
              CreatedTime: {
                type: 'timestamp'
              }
            }
          },
          S24: {
            type: 'list',
            member: {}
          },
          S26: {
            type: 'structure',
            required: ['AccountName', 'AccountPassword'],
            members: {
              AccountName: {
                type: 'string',
                sensitive: true
              },
              AccountPassword: {
                type: 'string',
                sensitive: true
              }
            }
          },
          S29: {
            type: 'structure',
            members: {
              Status: {},
              CertificateAuthorityArn: {}
            }
          },
          S2c: {
            type: 'structure',
            required: ['DirectoryName'],
            members: {
              DirectoryName: {},
              OrganizationalUnitDistinguishedNames: {
                shape: 'S24'
              },
              ServiceAccountCredentials: {
                shape: 'S26'
              },
              CreatedTime: {
                type: 'timestamp'
              },
              CertificateBasedAuthProperties: {
                shape: 'S29'
              }
            }
          },
          S2f: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Name', 'Value'],
              members: {
                Name: {},
                Value: {}
              }
            }
          },
          S2i: {
            type: 'structure',
            required: ['Name', 'StackName', 'AppVisibility', 'Attributes'],
            members: {
              Name: {},
              StackName: {},
              Description: {},
              AppVisibility: {},
              Attributes: {
                shape: 'S2f'
              },
              CreatedTime: {
                type: 'timestamp'
              },
              LastModifiedTime: {
                type: 'timestamp'
              }
            }
          },
          S2l: {
            type: 'structure',
            members: {
              DesiredInstances: {
                type: 'integer'
              },
              DesiredSessions: {
                type: 'integer'
              }
            }
          },
          S2m: {
            type: 'structure',
            members: {
              DirectoryName: {},
              OrganizationalUnitDistinguishedName: {}
            }
          },
          S2o: {
            type: 'list',
            member: {}
          },
          S2r: {
            type: 'structure',
            required: ['Arn', 'Name', 'InstanceType', 'ComputeCapacityStatus', 'State'],
            members: {
              Arn: {},
              Name: {},
              DisplayName: {},
              Description: {},
              ImageName: {},
              ImageArn: {},
              InstanceType: {},
              FleetType: {},
              ComputeCapacityStatus: {
                type: 'structure',
                required: ['Desired'],
                members: {
                  Desired: {
                    type: 'integer'
                  },
                  Running: {
                    type: 'integer'
                  },
                  InUse: {
                    type: 'integer'
                  },
                  Available: {
                    type: 'integer'
                  },
                  DesiredUserSessions: {
                    type: 'integer'
                  },
                  AvailableUserSessions: {
                    type: 'integer'
                  },
                  ActiveUserSessions: {
                    type: 'integer'
                  },
                  ActualUserSessions: {
                    type: 'integer'
                  }
                }
              },
              MaxUserDurationInSeconds: {
                type: 'integer'
              },
              DisconnectTimeoutInSeconds: {
                type: 'integer'
              },
              State: {},
              VpcConfig: {
                shape: 'S1d'
              },
              CreatedTime: {
                type: 'timestamp'
              },
              FleetErrors: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    ErrorCode: {},
                    ErrorMessage: {}
                  }
                }
              },
              EnableDefaultInternetAccess: {
                type: 'boolean'
              },
              DomainJoinInfo: {
                shape: 'S2m'
              },
              IdleDisconnectTimeoutInSeconds: {
                type: 'integer'
              },
              IamRoleArn: {},
              StreamView: {},
              Platform: {},
              MaxConcurrentSessions: {
                type: 'integer'
              },
              UsbDeviceFilterStrings: {
                shape: 'S2o'
              },
              SessionScriptS3Location: {
                shape: 'Sw'
              },
              MaxSessionsPerInstance: {
                type: 'integer'
              }
            }
          },
          S2z: {
            type: 'structure',
            required: ['Name'],
            members: {
              Name: {},
              Arn: {},
              ImageArn: {},
              Description: {},
              DisplayName: {},
              VpcConfig: {
                shape: 'S1d'
              },
              InstanceType: {},
              Platform: {},
              IamRoleArn: {},
              State: {},
              StateChangeReason: {
                type: 'structure',
                members: {
                  Code: {},
                  Message: {}
                }
              },
              CreatedTime: {
                type: 'timestamp'
              },
              EnableDefaultInternetAccess: {
                type: 'boolean'
              },
              DomainJoinInfo: {
                shape: 'S2m'
              },
              NetworkAccessConfiguration: {
                shape: 'S33'
              },
              ImageBuilderErrors: {
                shape: 'S1n'
              },
              AppstreamAgentVersion: {},
              AccessEndpoints: {
                shape: 'S1h'
              }
            }
          },
          S33: {
            type: 'structure',
            members: {
              EniPrivateIpAddress: {},
              EniId: {}
            }
          },
          S37: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['ConnectorType'],
              members: {
                ConnectorType: {},
                ResourceIdentifier: {},
                Domains: {
                  type: 'list',
                  member: {}
                }
              }
            }
          },
          S3f: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Action', 'Permission'],
              members: {
                Action: {},
                Permission: {},
                MaximumLength: {
                  type: 'integer'
                }
              }
            }
          },
          S3j: {
            type: 'structure',
            required: ['Enabled'],
            members: {
              Enabled: {
                type: 'boolean'
              },
              SettingsGroup: {}
            }
          },
          S3l: {
            type: 'list',
            member: {}
          },
          S3n: {
            type: 'structure',
            members: {
              PreferredProtocol: {}
            }
          },
          S3q: {
            type: 'structure',
            required: ['Name'],
            members: {
              Arn: {},
              Name: {},
              Description: {},
              DisplayName: {},
              CreatedTime: {
                type: 'timestamp'
              },
              StorageConnectors: {
                shape: 'S37'
              },
              RedirectURL: {},
              FeedbackURL: {},
              StackErrors: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    ErrorCode: {},
                    ErrorMessage: {}
                  }
                }
              },
              UserSettings: {
                shape: 'S3f'
              },
              ApplicationSettings: {
                type: 'structure',
                members: {
                  Enabled: {
                    type: 'boolean'
                  },
                  SettingsGroup: {},
                  S3BucketName: {}
                }
              },
              AccessEndpoints: {
                shape: 'S1h'
              },
              EmbedHostDomains: {
                shape: 'S3l'
              },
              StreamingExperienceSettings: {
                shape: 'S3n'
              }
            }
          },
          S40: {
            type: 'structure',
            required: ['Name'],
            members: {
              Name: {},
              Arn: {},
              BaseImageArn: {},
              DisplayName: {},
              State: {},
              Visibility: {},
              ImageBuilderSupported: {
                type: 'boolean'
              },
              ImageBuilderName: {},
              Platform: {},
              Description: {},
              StateChangeReason: {
                type: 'structure',
                members: {
                  Code: {},
                  Message: {}
                }
              },
              Applications: {
                shape: 'S45'
              },
              CreatedTime: {
                type: 'timestamp'
              },
              PublicBaseImageReleasedDate: {
                type: 'timestamp'
              },
              AppstreamAgentVersion: {},
              ImagePermissions: {
                shape: 'S46'
              },
              ImageErrors: {
                shape: 'S1n'
              }
            }
          },
          S45: {
            type: 'list',
            member: {
              shape: 'S20'
            }
          },
          S46: {
            type: 'structure',
            members: {
              allowFleet: {
                type: 'boolean'
              },
              allowImageBuilder: {
                type: 'boolean'
              }
            }
          },
          S4c: {
            type: 'string',
            sensitive: true
          },
          S5a: {
            type: 'list',
            member: {}
          }
        }
      });
    }
  };
});
//# sourceMappingURL=daf8e997330d050fb997a2fb55f20304f9ae29d6.js.map