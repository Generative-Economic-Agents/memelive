System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2018-04-01',
          endpointPrefix: 'quicksight',
          jsonVersion: '1.0',
          protocol: 'rest-json',
          protocols: ['rest-json'],
          serviceFullName: 'Amazon QuickSight',
          serviceId: 'QuickSight',
          signatureVersion: 'v4',
          uid: 'quicksight-2018-04-01'
        },
        operations: {
          CancelIngestion: {
            http: {
              method: 'DELETE',
              requestUri: '/accounts/{AwsAccountId}/data-sets/{DataSetId}/ingestions/{IngestionId}'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'DataSetId', 'IngestionId'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                DataSetId: {
                  location: 'uri',
                  locationName: 'DataSetId'
                },
                IngestionId: {
                  location: 'uri',
                  locationName: 'IngestionId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                IngestionId: {},
                RequestId: {},
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                }
              }
            }
          },
          CreateAccountCustomization: {
            http: {
              requestUri: '/accounts/{AwsAccountId}/customizations'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'AccountCustomization'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                Namespace: {
                  location: 'querystring',
                  locationName: 'namespace'
                },
                AccountCustomization: {
                  shape: 'Sa'
                },
                Tags: {
                  shape: 'Sb'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                AwsAccountId: {},
                Namespace: {},
                AccountCustomization: {
                  shape: 'Sa'
                },
                RequestId: {},
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                }
              }
            }
          },
          CreateAccountSubscription: {
            http: {
              requestUri: '/account/{AwsAccountId}'
            },
            input: {
              type: 'structure',
              required: ['AuthenticationMethod', 'AwsAccountId', 'AccountName', 'NotificationEmail'],
              members: {
                Edition: {},
                AuthenticationMethod: {},
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                AccountName: {},
                NotificationEmail: {},
                ActiveDirectoryName: {},
                Realm: {},
                DirectoryId: {},
                AdminGroup: {
                  shape: 'Sk'
                },
                AuthorGroup: {
                  shape: 'Sk'
                },
                ReaderGroup: {
                  shape: 'Sk'
                },
                AdminProGroup: {
                  shape: 'Sk'
                },
                AuthorProGroup: {
                  shape: 'Sk'
                },
                ReaderProGroup: {
                  shape: 'Sk'
                },
                FirstName: {},
                LastName: {},
                EmailAddress: {},
                ContactNumber: {},
                IAMIdentityCenterInstanceArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                SignupResponse: {
                  type: 'structure',
                  members: {
                    IAMUser: {
                      type: 'boolean'
                    },
                    userLoginName: {},
                    accountName: {},
                    directoryType: {}
                  }
                },
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                },
                RequestId: {}
              }
            }
          },
          CreateAnalysis: {
            http: {
              requestUri: '/accounts/{AwsAccountId}/analyses/{AnalysisId}'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'AnalysisId', 'Name'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                AnalysisId: {
                  location: 'uri',
                  locationName: 'AnalysisId'
                },
                Name: {},
                Parameters: {
                  shape: 'Sr'
                },
                Permissions: {
                  shape: 'S19'
                },
                SourceEntity: {
                  shape: 'S1d'
                },
                ThemeArn: {},
                Tags: {
                  shape: 'Sb'
                },
                Definition: {
                  shape: 'S1h'
                },
                ValidationStrategy: {
                  shape: 'Smn'
                },
                FolderArns: {
                  shape: 'Smp'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                AnalysisId: {},
                CreationStatus: {},
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                },
                RequestId: {}
              }
            }
          },
          CreateDashboard: {
            http: {
              requestUri: '/accounts/{AwsAccountId}/dashboards/{DashboardId}'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'DashboardId', 'Name'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                DashboardId: {
                  location: 'uri',
                  locationName: 'DashboardId'
                },
                Name: {},
                Parameters: {
                  shape: 'Sr'
                },
                Permissions: {
                  shape: 'S19'
                },
                SourceEntity: {
                  shape: 'Smu'
                },
                Tags: {
                  shape: 'Sb'
                },
                VersionDescription: {},
                DashboardPublishOptions: {
                  shape: 'Smx'
                },
                ThemeArn: {},
                Definition: {
                  shape: 'Sna'
                },
                ValidationStrategy: {
                  shape: 'Smn'
                },
                FolderArns: {
                  shape: 'Smp'
                },
                LinkSharingConfiguration: {
                  shape: 'Snb'
                },
                LinkEntities: {
                  shape: 'Snc'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                VersionArn: {},
                DashboardId: {},
                CreationStatus: {},
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                },
                RequestId: {}
              }
            }
          },
          CreateDataSet: {
            http: {
              requestUri: '/accounts/{AwsAccountId}/data-sets'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'DataSetId', 'Name', 'PhysicalTableMap', 'ImportMode'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                DataSetId: {},
                Name: {},
                PhysicalTableMap: {
                  shape: 'Sni'
                },
                LogicalTableMap: {
                  shape: 'So2'
                },
                ImportMode: {},
                ColumnGroups: {
                  shape: 'Sp9'
                },
                FieldFolders: {
                  shape: 'Spf'
                },
                Permissions: {
                  shape: 'S19'
                },
                RowLevelPermissionDataSet: {
                  shape: 'Spk'
                },
                RowLevelPermissionTagConfiguration: {
                  shape: 'Spo'
                },
                ColumnLevelPermissionRules: {
                  shape: 'Spw'
                },
                Tags: {
                  shape: 'Sb'
                },
                DataSetUsageConfiguration: {
                  shape: 'Sq0'
                },
                DatasetParameters: {
                  shape: 'Sq1'
                },
                FolderArns: {
                  shape: 'Smp'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                DataSetId: {},
                IngestionArn: {},
                IngestionId: {},
                RequestId: {},
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                }
              }
            }
          },
          CreateDataSource: {
            http: {
              requestUri: '/accounts/{AwsAccountId}/data-sources'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'DataSourceId', 'Name', 'Type'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                DataSourceId: {},
                Name: {},
                Type: {},
                DataSourceParameters: {
                  shape: 'Sqg'
                },
                Credentials: {
                  shape: 'Srx'
                },
                Permissions: {
                  shape: 'S19'
                },
                VpcConnectionProperties: {
                  shape: 'Ss4'
                },
                SslProperties: {
                  shape: 'Ss5'
                },
                Tags: {
                  shape: 'Sb'
                },
                FolderArns: {
                  shape: 'Smp'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                DataSourceId: {},
                CreationStatus: {},
                RequestId: {},
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                }
              }
            }
          },
          CreateFolder: {
            http: {
              requestUri: '/accounts/{AwsAccountId}/folders/{FolderId}'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'FolderId'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                FolderId: {
                  location: 'uri',
                  locationName: 'FolderId'
                },
                Name: {},
                FolderType: {},
                ParentFolderArn: {},
                Permissions: {
                  shape: 'S19'
                },
                Tags: {
                  shape: 'Sb'
                },
                SharingModel: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                },
                Arn: {},
                FolderId: {},
                RequestId: {}
              }
            }
          },
          CreateFolderMembership: {
            http: {
              method: 'PUT',
              requestUri: '/accounts/{AwsAccountId}/folders/{FolderId}/members/{MemberType}/{MemberId}'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'FolderId', 'MemberId', 'MemberType'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                FolderId: {
                  location: 'uri',
                  locationName: 'FolderId'
                },
                MemberId: {
                  location: 'uri',
                  locationName: 'MemberId'
                },
                MemberType: {
                  location: 'uri',
                  locationName: 'MemberType'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Status: {
                  type: 'integer'
                },
                FolderMember: {
                  type: 'structure',
                  members: {
                    MemberId: {},
                    MemberType: {}
                  }
                },
                RequestId: {}
              }
            }
          },
          CreateGroup: {
            http: {
              requestUri: '/accounts/{AwsAccountId}/namespaces/{Namespace}/groups'
            },
            input: {
              type: 'structure',
              required: ['GroupName', 'AwsAccountId', 'Namespace'],
              members: {
                GroupName: {},
                Description: {},
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                Namespace: {
                  location: 'uri',
                  locationName: 'Namespace'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Group: {
                  shape: 'Ssl'
                },
                RequestId: {},
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                }
              }
            }
          },
          CreateGroupMembership: {
            http: {
              method: 'PUT',
              requestUri: '/accounts/{AwsAccountId}/namespaces/{Namespace}/groups/{GroupName}/members/{MemberName}'
            },
            input: {
              type: 'structure',
              required: ['MemberName', 'GroupName', 'AwsAccountId', 'Namespace'],
              members: {
                MemberName: {
                  location: 'uri',
                  locationName: 'MemberName'
                },
                GroupName: {
                  location: 'uri',
                  locationName: 'GroupName'
                },
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                Namespace: {
                  location: 'uri',
                  locationName: 'Namespace'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                GroupMember: {
                  shape: 'Ssp'
                },
                RequestId: {},
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                }
              }
            }
          },
          CreateIAMPolicyAssignment: {
            http: {
              requestUri: '/accounts/{AwsAccountId}/namespaces/{Namespace}/iam-policy-assignments/'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'AssignmentName', 'AssignmentStatus', 'Namespace'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                AssignmentName: {},
                AssignmentStatus: {},
                PolicyArn: {},
                Identities: {
                  shape: 'Sst'
                },
                Namespace: {
                  location: 'uri',
                  locationName: 'Namespace'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AssignmentName: {},
                AssignmentId: {},
                AssignmentStatus: {},
                PolicyArn: {},
                Identities: {
                  shape: 'Sst'
                },
                RequestId: {},
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                }
              }
            }
          },
          CreateIngestion: {
            http: {
              method: 'PUT',
              requestUri: '/accounts/{AwsAccountId}/data-sets/{DataSetId}/ingestions/{IngestionId}'
            },
            input: {
              type: 'structure',
              required: ['DataSetId', 'IngestionId', 'AwsAccountId'],
              members: {
                DataSetId: {
                  location: 'uri',
                  locationName: 'DataSetId'
                },
                IngestionId: {
                  location: 'uri',
                  locationName: 'IngestionId'
                },
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                IngestionType: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                IngestionId: {},
                IngestionStatus: {},
                RequestId: {},
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                }
              }
            }
          },
          CreateNamespace: {
            http: {
              requestUri: '/accounts/{AwsAccountId}'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'Namespace', 'IdentityStore'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                Namespace: {},
                IdentityStore: {},
                Tags: {
                  shape: 'Sb'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                Name: {},
                CapacityRegion: {},
                CreationStatus: {},
                IdentityStore: {},
                RequestId: {},
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                }
              }
            }
          },
          CreateRefreshSchedule: {
            http: {
              requestUri: '/accounts/{AwsAccountId}/data-sets/{DataSetId}/refresh-schedules'
            },
            input: {
              type: 'structure',
              required: ['DataSetId', 'AwsAccountId', 'Schedule'],
              members: {
                DataSetId: {
                  location: 'uri',
                  locationName: 'DataSetId'
                },
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                Schedule: {
                  shape: 'St6'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                },
                RequestId: {},
                ScheduleId: {},
                Arn: {}
              }
            }
          },
          CreateRoleMembership: {
            http: {
              requestUri: '/accounts/{AwsAccountId}/namespaces/{Namespace}/roles/{Role}/members/{MemberName}'
            },
            input: {
              type: 'structure',
              required: ['MemberName', 'AwsAccountId', 'Namespace', 'Role'],
              members: {
                MemberName: {
                  location: 'uri',
                  locationName: 'MemberName'
                },
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                Namespace: {
                  location: 'uri',
                  locationName: 'Namespace'
                },
                Role: {
                  location: 'uri',
                  locationName: 'Role'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                RequestId: {},
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                }
              }
            }
          },
          CreateTemplate: {
            http: {
              requestUri: '/accounts/{AwsAccountId}/templates/{TemplateId}'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'TemplateId'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                TemplateId: {
                  location: 'uri',
                  locationName: 'TemplateId'
                },
                Name: {},
                Permissions: {
                  shape: 'S19'
                },
                SourceEntity: {
                  shape: 'Sti'
                },
                Tags: {
                  shape: 'Sb'
                },
                VersionDescription: {},
                Definition: {
                  shape: 'Stl'
                },
                ValidationStrategy: {
                  shape: 'Smn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                VersionArn: {},
                TemplateId: {},
                CreationStatus: {},
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                },
                RequestId: {}
              }
            }
          },
          CreateTemplateAlias: {
            http: {
              requestUri: '/accounts/{AwsAccountId}/templates/{TemplateId}/aliases/{AliasName}'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'TemplateId', 'AliasName', 'TemplateVersionNumber'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                TemplateId: {
                  location: 'uri',
                  locationName: 'TemplateId'
                },
                AliasName: {
                  location: 'uri',
                  locationName: 'AliasName'
                },
                TemplateVersionNumber: {
                  type: 'long'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                TemplateAlias: {
                  shape: 'Su0'
                },
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                },
                RequestId: {}
              }
            }
          },
          CreateTheme: {
            http: {
              requestUri: '/accounts/{AwsAccountId}/themes/{ThemeId}'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'ThemeId', 'Name', 'BaseThemeId', 'Configuration'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                ThemeId: {
                  location: 'uri',
                  locationName: 'ThemeId'
                },
                Name: {},
                BaseThemeId: {},
                VersionDescription: {},
                Configuration: {
                  shape: 'Su3'
                },
                Permissions: {
                  shape: 'S19'
                },
                Tags: {
                  shape: 'Sb'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                VersionArn: {},
                ThemeId: {},
                CreationStatus: {},
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                },
                RequestId: {}
              }
            }
          },
          CreateThemeAlias: {
            http: {
              requestUri: '/accounts/{AwsAccountId}/themes/{ThemeId}/aliases/{AliasName}'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'ThemeId', 'AliasName', 'ThemeVersionNumber'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                ThemeId: {
                  location: 'uri',
                  locationName: 'ThemeId'
                },
                AliasName: {
                  location: 'uri',
                  locationName: 'AliasName'
                },
                ThemeVersionNumber: {
                  type: 'long'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ThemeAlias: {
                  shape: 'Suj'
                },
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                },
                RequestId: {}
              }
            }
          },
          CreateTopic: {
            http: {
              requestUri: '/accounts/{AwsAccountId}/topics'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'TopicId', 'Topic'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                TopicId: {},
                Topic: {
                  shape: 'Sum'
                },
                Tags: {
                  shape: 'Sb'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                TopicId: {},
                RefreshArn: {},
                RequestId: {},
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                }
              }
            }
          },
          CreateTopicRefreshSchedule: {
            http: {
              requestUri: '/accounts/{AwsAccountId}/topics/{TopicId}/schedules'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'TopicId', 'DatasetArn', 'RefreshSchedule'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                TopicId: {
                  location: 'uri',
                  locationName: 'TopicId'
                },
                DatasetArn: {},
                DatasetName: {},
                RefreshSchedule: {
                  shape: 'Swb'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                TopicId: {},
                TopicArn: {},
                DatasetArn: {},
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                },
                RequestId: {}
              }
            }
          },
          CreateVPCConnection: {
            http: {
              requestUri: '/accounts/{AwsAccountId}/vpc-connections'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'VPCConnectionId', 'Name', 'SubnetIds', 'SecurityGroupIds', 'RoleArn'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                VPCConnectionId: {},
                Name: {},
                SubnetIds: {
                  shape: 'Swg'
                },
                SecurityGroupIds: {
                  shape: 'Swi'
                },
                DnsResolvers: {
                  shape: 'Swk'
                },
                RoleArn: {},
                Tags: {
                  shape: 'Sb'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                VPCConnectionId: {},
                CreationStatus: {},
                AvailabilityStatus: {},
                RequestId: {},
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                }
              }
            }
          },
          DeleteAccountCustomization: {
            http: {
              method: 'DELETE',
              requestUri: '/accounts/{AwsAccountId}/customizations'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                Namespace: {
                  location: 'querystring',
                  locationName: 'namespace'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                RequestId: {},
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                }
              }
            }
          },
          DeleteAccountSubscription: {
            http: {
              method: 'DELETE',
              requestUri: '/account/{AwsAccountId}'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                RequestId: {},
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                }
              }
            }
          },
          DeleteAnalysis: {
            http: {
              method: 'DELETE',
              requestUri: '/accounts/{AwsAccountId}/analyses/{AnalysisId}'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'AnalysisId'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                AnalysisId: {
                  location: 'uri',
                  locationName: 'AnalysisId'
                },
                RecoveryWindowInDays: {
                  location: 'querystring',
                  locationName: 'recovery-window-in-days',
                  type: 'long'
                },
                ForceDeleteWithoutRecovery: {
                  location: 'querystring',
                  locationName: 'force-delete-without-recovery',
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                },
                Arn: {},
                AnalysisId: {},
                DeletionTime: {
                  type: 'timestamp'
                },
                RequestId: {}
              }
            }
          },
          DeleteDashboard: {
            http: {
              method: 'DELETE',
              requestUri: '/accounts/{AwsAccountId}/dashboards/{DashboardId}'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'DashboardId'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                DashboardId: {
                  location: 'uri',
                  locationName: 'DashboardId'
                },
                VersionNumber: {
                  location: 'querystring',
                  locationName: 'version-number',
                  type: 'long'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                },
                Arn: {},
                DashboardId: {},
                RequestId: {}
              }
            }
          },
          DeleteDataSet: {
            http: {
              method: 'DELETE',
              requestUri: '/accounts/{AwsAccountId}/data-sets/{DataSetId}'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'DataSetId'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                DataSetId: {
                  location: 'uri',
                  locationName: 'DataSetId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                DataSetId: {},
                RequestId: {},
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                }
              }
            }
          },
          DeleteDataSetRefreshProperties: {
            http: {
              method: 'DELETE',
              requestUri: '/accounts/{AwsAccountId}/data-sets/{DataSetId}/refresh-properties'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'DataSetId'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                DataSetId: {
                  location: 'uri',
                  locationName: 'DataSetId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                RequestId: {},
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                }
              }
            }
          },
          DeleteDataSource: {
            http: {
              method: 'DELETE',
              requestUri: '/accounts/{AwsAccountId}/data-sources/{DataSourceId}'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'DataSourceId'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                DataSourceId: {
                  location: 'uri',
                  locationName: 'DataSourceId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                DataSourceId: {},
                RequestId: {},
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                }
              }
            }
          },
          DeleteFolder: {
            http: {
              method: 'DELETE',
              requestUri: '/accounts/{AwsAccountId}/folders/{FolderId}'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'FolderId'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                FolderId: {
                  location: 'uri',
                  locationName: 'FolderId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                },
                Arn: {},
                FolderId: {},
                RequestId: {}
              }
            }
          },
          DeleteFolderMembership: {
            http: {
              method: 'DELETE',
              requestUri: '/accounts/{AwsAccountId}/folders/{FolderId}/members/{MemberType}/{MemberId}'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'FolderId', 'MemberId', 'MemberType'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                FolderId: {
                  location: 'uri',
                  locationName: 'FolderId'
                },
                MemberId: {
                  location: 'uri',
                  locationName: 'MemberId'
                },
                MemberType: {
                  location: 'uri',
                  locationName: 'MemberType'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Status: {
                  type: 'integer'
                },
                RequestId: {}
              }
            }
          },
          DeleteGroup: {
            http: {
              method: 'DELETE',
              requestUri: '/accounts/{AwsAccountId}/namespaces/{Namespace}/groups/{GroupName}'
            },
            input: {
              type: 'structure',
              required: ['GroupName', 'AwsAccountId', 'Namespace'],
              members: {
                GroupName: {
                  location: 'uri',
                  locationName: 'GroupName'
                },
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                Namespace: {
                  location: 'uri',
                  locationName: 'Namespace'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                RequestId: {},
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                }
              }
            }
          },
          DeleteGroupMembership: {
            http: {
              method: 'DELETE',
              requestUri: '/accounts/{AwsAccountId}/namespaces/{Namespace}/groups/{GroupName}/members/{MemberName}'
            },
            input: {
              type: 'structure',
              required: ['MemberName', 'GroupName', 'AwsAccountId', 'Namespace'],
              members: {
                MemberName: {
                  location: 'uri',
                  locationName: 'MemberName'
                },
                GroupName: {
                  location: 'uri',
                  locationName: 'GroupName'
                },
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                Namespace: {
                  location: 'uri',
                  locationName: 'Namespace'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                RequestId: {},
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                }
              }
            }
          },
          DeleteIAMPolicyAssignment: {
            http: {
              method: 'DELETE',
              requestUri: '/accounts/{AwsAccountId}/namespace/{Namespace}/iam-policy-assignments/{AssignmentName}'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'AssignmentName', 'Namespace'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                AssignmentName: {
                  location: 'uri',
                  locationName: 'AssignmentName'
                },
                Namespace: {
                  location: 'uri',
                  locationName: 'Namespace'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AssignmentName: {},
                RequestId: {},
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                }
              }
            }
          },
          DeleteIdentityPropagationConfig: {
            http: {
              method: 'DELETE',
              requestUri: '/accounts/{AwsAccountId}/identity-propagation-config/{Service}'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'Service'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                Service: {
                  location: 'uri',
                  locationName: 'Service'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                RequestId: {},
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                }
              }
            }
          },
          DeleteNamespace: {
            http: {
              method: 'DELETE',
              requestUri: '/accounts/{AwsAccountId}/namespaces/{Namespace}'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'Namespace'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                Namespace: {
                  location: 'uri',
                  locationName: 'Namespace'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                RequestId: {},
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                }
              }
            }
          },
          DeleteRefreshSchedule: {
            http: {
              method: 'DELETE',
              requestUri: '/accounts/{AwsAccountId}/data-sets/{DataSetId}/refresh-schedules/{ScheduleId}'
            },
            input: {
              type: 'structure',
              required: ['DataSetId', 'AwsAccountId', 'ScheduleId'],
              members: {
                DataSetId: {
                  location: 'uri',
                  locationName: 'DataSetId'
                },
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                ScheduleId: {
                  location: 'uri',
                  locationName: 'ScheduleId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                },
                RequestId: {},
                ScheduleId: {},
                Arn: {}
              }
            }
          },
          DeleteRoleCustomPermission: {
            http: {
              method: 'DELETE',
              requestUri: '/accounts/{AwsAccountId}/namespaces/{Namespace}/roles/{Role}/custom-permission'
            },
            input: {
              type: 'structure',
              required: ['Role', 'AwsAccountId', 'Namespace'],
              members: {
                Role: {
                  location: 'uri',
                  locationName: 'Role'
                },
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                Namespace: {
                  location: 'uri',
                  locationName: 'Namespace'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                RequestId: {},
                Status: {
                  type: 'integer'
                }
              }
            }
          },
          DeleteRoleMembership: {
            http: {
              method: 'DELETE',
              requestUri: '/accounts/{AwsAccountId}/namespaces/{Namespace}/roles/{Role}/members/{MemberName}'
            },
            input: {
              type: 'structure',
              required: ['MemberName', 'Role', 'AwsAccountId', 'Namespace'],
              members: {
                MemberName: {
                  location: 'uri',
                  locationName: 'MemberName'
                },
                Role: {
                  location: 'uri',
                  locationName: 'Role'
                },
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                Namespace: {
                  location: 'uri',
                  locationName: 'Namespace'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                RequestId: {},
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                }
              }
            }
          },
          DeleteTemplate: {
            http: {
              method: 'DELETE',
              requestUri: '/accounts/{AwsAccountId}/templates/{TemplateId}'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'TemplateId'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                TemplateId: {
                  location: 'uri',
                  locationName: 'TemplateId'
                },
                VersionNumber: {
                  location: 'querystring',
                  locationName: 'version-number',
                  type: 'long'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                RequestId: {},
                Arn: {},
                TemplateId: {},
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                }
              }
            }
          },
          DeleteTemplateAlias: {
            http: {
              method: 'DELETE',
              requestUri: '/accounts/{AwsAccountId}/templates/{TemplateId}/aliases/{AliasName}'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'TemplateId', 'AliasName'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                TemplateId: {
                  location: 'uri',
                  locationName: 'TemplateId'
                },
                AliasName: {
                  location: 'uri',
                  locationName: 'AliasName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                },
                TemplateId: {},
                AliasName: {},
                Arn: {},
                RequestId: {}
              }
            }
          },
          DeleteTheme: {
            http: {
              method: 'DELETE',
              requestUri: '/accounts/{AwsAccountId}/themes/{ThemeId}'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'ThemeId'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                ThemeId: {
                  location: 'uri',
                  locationName: 'ThemeId'
                },
                VersionNumber: {
                  location: 'querystring',
                  locationName: 'version-number',
                  type: 'long'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                RequestId: {},
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                },
                ThemeId: {}
              }
            }
          },
          DeleteThemeAlias: {
            http: {
              method: 'DELETE',
              requestUri: '/accounts/{AwsAccountId}/themes/{ThemeId}/aliases/{AliasName}'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'ThemeId', 'AliasName'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                ThemeId: {
                  location: 'uri',
                  locationName: 'ThemeId'
                },
                AliasName: {
                  location: 'uri',
                  locationName: 'AliasName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AliasName: {},
                Arn: {},
                RequestId: {},
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                },
                ThemeId: {}
              }
            }
          },
          DeleteTopic: {
            http: {
              method: 'DELETE',
              requestUri: '/accounts/{AwsAccountId}/topics/{TopicId}'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'TopicId'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                TopicId: {
                  location: 'uri',
                  locationName: 'TopicId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                TopicId: {},
                RequestId: {},
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                }
              }
            }
          },
          DeleteTopicRefreshSchedule: {
            http: {
              method: 'DELETE',
              requestUri: '/accounts/{AwsAccountId}/topics/{TopicId}/schedules/{DatasetId}'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'TopicId', 'DatasetId'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                TopicId: {
                  location: 'uri',
                  locationName: 'TopicId'
                },
                DatasetId: {
                  location: 'uri',
                  locationName: 'DatasetId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                TopicId: {},
                TopicArn: {},
                DatasetArn: {},
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                },
                RequestId: {}
              }
            }
          },
          DeleteUser: {
            http: {
              method: 'DELETE',
              requestUri: '/accounts/{AwsAccountId}/namespaces/{Namespace}/users/{UserName}'
            },
            input: {
              type: 'structure',
              required: ['UserName', 'AwsAccountId', 'Namespace'],
              members: {
                UserName: {
                  location: 'uri',
                  locationName: 'UserName'
                },
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                Namespace: {
                  location: 'uri',
                  locationName: 'Namespace'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                RequestId: {},
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                }
              }
            }
          },
          DeleteUserByPrincipalId: {
            http: {
              method: 'DELETE',
              requestUri: '/accounts/{AwsAccountId}/namespaces/{Namespace}/user-principals/{PrincipalId}'
            },
            input: {
              type: 'structure',
              required: ['PrincipalId', 'AwsAccountId', 'Namespace'],
              members: {
                PrincipalId: {
                  location: 'uri',
                  locationName: 'PrincipalId'
                },
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                Namespace: {
                  location: 'uri',
                  locationName: 'Namespace'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                RequestId: {},
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                }
              }
            }
          },
          DeleteVPCConnection: {
            http: {
              method: 'DELETE',
              requestUri: '/accounts/{AwsAccountId}/vpc-connections/{VPCConnectionId}'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'VPCConnectionId'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                VPCConnectionId: {
                  location: 'uri',
                  locationName: 'VPCConnectionId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                VPCConnectionId: {},
                DeletionStatus: {},
                AvailabilityStatus: {},
                RequestId: {},
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                }
              }
            }
          },
          DescribeAccountCustomization: {
            http: {
              method: 'GET',
              requestUri: '/accounts/{AwsAccountId}/customizations'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                Namespace: {
                  location: 'querystring',
                  locationName: 'namespace'
                },
                Resolved: {
                  location: 'querystring',
                  locationName: 'resolved',
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                AwsAccountId: {},
                Namespace: {},
                AccountCustomization: {
                  shape: 'Sa'
                },
                RequestId: {},
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                }
              }
            }
          },
          DescribeAccountSettings: {
            http: {
              method: 'GET',
              requestUri: '/accounts/{AwsAccountId}/settings'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AccountSettings: {
                  type: 'structure',
                  members: {
                    AccountName: {},
                    Edition: {},
                    DefaultNamespace: {},
                    NotificationEmail: {},
                    PublicSharingEnabled: {
                      type: 'boolean'
                    },
                    TerminationProtectionEnabled: {
                      type: 'boolean'
                    }
                  }
                },
                RequestId: {},
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                }
              }
            }
          },
          DescribeAccountSubscription: {
            http: {
              method: 'GET',
              requestUri: '/account/{AwsAccountId}'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AccountInfo: {
                  type: 'structure',
                  members: {
                    AccountName: {},
                    Edition: {},
                    NotificationEmail: {},
                    AuthenticationType: {},
                    AccountSubscriptionStatus: {},
                    IAMIdentityCenterInstanceArn: {}
                  }
                },
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                },
                RequestId: {}
              }
            }
          },
          DescribeAnalysis: {
            http: {
              method: 'GET',
              requestUri: '/accounts/{AwsAccountId}/analyses/{AnalysisId}'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'AnalysisId'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                AnalysisId: {
                  location: 'uri',
                  locationName: 'AnalysisId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Analysis: {
                  type: 'structure',
                  members: {
                    AnalysisId: {},
                    Arn: {},
                    Name: {},
                    Status: {},
                    Errors: {
                      shape: 'Syl'
                    },
                    DataSetArns: {
                      shape: 'Syq'
                    },
                    ThemeArn: {},
                    CreatedTime: {
                      type: 'timestamp'
                    },
                    LastUpdatedTime: {
                      type: 'timestamp'
                    },
                    Sheets: {
                      shape: 'Syr'
                    }
                  }
                },
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                },
                RequestId: {}
              }
            }
          },
          DescribeAnalysisDefinition: {
            http: {
              method: 'GET',
              requestUri: '/accounts/{AwsAccountId}/analyses/{AnalysisId}/definition'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'AnalysisId'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                AnalysisId: {
                  location: 'uri',
                  locationName: 'AnalysisId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AnalysisId: {},
                Name: {},
                Errors: {
                  shape: 'Syl'
                },
                ResourceStatus: {},
                ThemeArn: {},
                Definition: {
                  shape: 'S1h'
                },
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                },
                RequestId: {}
              }
            }
          },
          DescribeAnalysisPermissions: {
            http: {
              method: 'GET',
              requestUri: '/accounts/{AwsAccountId}/analyses/{AnalysisId}/permissions'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'AnalysisId'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                AnalysisId: {
                  location: 'uri',
                  locationName: 'AnalysisId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AnalysisId: {},
                AnalysisArn: {},
                Permissions: {
                  shape: 'S19'
                },
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                },
                RequestId: {}
              }
            }
          },
          DescribeAssetBundleExportJob: {
            http: {
              method: 'GET',
              requestUri: '/accounts/{AwsAccountId}/asset-bundle-export-jobs/{AssetBundleExportJobId}'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'AssetBundleExportJobId'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                AssetBundleExportJobId: {
                  location: 'uri',
                  locationName: 'AssetBundleExportJobId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                JobStatus: {},
                DownloadUrl: {
                  shape: 'Sz0'
                },
                Errors: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Arn: {},
                      Type: {},
                      Message: {}
                    }
                  }
                },
                Arn: {},
                CreatedTime: {
                  type: 'timestamp'
                },
                AssetBundleExportJobId: {},
                AwsAccountId: {},
                ResourceArns: {
                  shape: 'Sz3'
                },
                IncludeAllDependencies: {
                  type: 'boolean'
                },
                ExportFormat: {},
                CloudFormationOverridePropertyConfiguration: {
                  shape: 'Sz5'
                },
                RequestId: {},
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                },
                IncludePermissions: {
                  type: 'boolean'
                },
                IncludeTags: {
                  type: 'boolean'
                },
                ValidationStrategy: {
                  shape: 'Szz'
                },
                Warnings: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Arn: {},
                      Message: {}
                    }
                  }
                }
              }
            }
          },
          DescribeAssetBundleImportJob: {
            http: {
              method: 'GET',
              requestUri: '/accounts/{AwsAccountId}/asset-bundle-import-jobs/{AssetBundleImportJobId}'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'AssetBundleImportJobId'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                AssetBundleImportJobId: {
                  location: 'uri',
                  locationName: 'AssetBundleImportJobId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                JobStatus: {},
                Errors: {
                  shape: 'S105'
                },
                RollbackErrors: {
                  shape: 'S105'
                },
                Arn: {},
                CreatedTime: {
                  type: 'timestamp'
                },
                AssetBundleImportJobId: {},
                AwsAccountId: {},
                AssetBundleImportSource: {
                  type: 'structure',
                  members: {
                    Body: {
                      shape: 'Sz0'
                    },
                    S3Uri: {}
                  }
                },
                OverrideParameters: {
                  shape: 'S109'
                },
                FailureAction: {},
                RequestId: {},
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                },
                OverridePermissions: {
                  shape: 'S10s'
                },
                OverrideTags: {
                  shape: 'S118'
                },
                OverrideValidationStrategy: {
                  shape: 'S11l'
                },
                Warnings: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Arn: {},
                      Message: {}
                    }
                  }
                }
              }
            }
          },
          DescribeDashboard: {
            http: {
              method: 'GET',
              requestUri: '/accounts/{AwsAccountId}/dashboards/{DashboardId}'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'DashboardId'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                DashboardId: {
                  location: 'uri',
                  locationName: 'DashboardId'
                },
                VersionNumber: {
                  location: 'querystring',
                  locationName: 'version-number',
                  type: 'long'
                },
                AliasName: {
                  location: 'querystring',
                  locationName: 'alias-name'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Dashboard: {
                  type: 'structure',
                  members: {
                    DashboardId: {},
                    Arn: {},
                    Name: {},
                    Version: {
                      type: 'structure',
                      members: {
                        CreatedTime: {
                          type: 'timestamp'
                        },
                        Errors: {
                          shape: 'S11s'
                        },
                        VersionNumber: {
                          type: 'long'
                        },
                        Status: {},
                        Arn: {},
                        SourceEntityArn: {},
                        DataSetArns: {
                          shape: 'Syq'
                        },
                        Description: {},
                        ThemeArn: {},
                        Sheets: {
                          shape: 'Syr'
                        }
                      }
                    },
                    CreatedTime: {
                      type: 'timestamp'
                    },
                    LastPublishedTime: {
                      type: 'timestamp'
                    },
                    LastUpdatedTime: {
                      type: 'timestamp'
                    },
                    LinkEntities: {
                      shape: 'Snc'
                    }
                  }
                },
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                },
                RequestId: {}
              }
            }
          },
          DescribeDashboardDefinition: {
            http: {
              method: 'GET',
              requestUri: '/accounts/{AwsAccountId}/dashboards/{DashboardId}/definition'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'DashboardId'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                DashboardId: {
                  location: 'uri',
                  locationName: 'DashboardId'
                },
                VersionNumber: {
                  location: 'querystring',
                  locationName: 'version-number',
                  type: 'long'
                },
                AliasName: {
                  location: 'querystring',
                  locationName: 'alias-name'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                DashboardId: {},
                Errors: {
                  shape: 'S11s'
                },
                Name: {},
                ResourceStatus: {},
                ThemeArn: {},
                Definition: {
                  shape: 'Sna'
                },
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                },
                RequestId: {},
                DashboardPublishOptions: {
                  shape: 'Smx'
                }
              }
            }
          },
          DescribeDashboardPermissions: {
            http: {
              method: 'GET',
              requestUri: '/accounts/{AwsAccountId}/dashboards/{DashboardId}/permissions'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'DashboardId'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                DashboardId: {
                  location: 'uri',
                  locationName: 'DashboardId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                DashboardId: {},
                DashboardArn: {},
                Permissions: {
                  shape: 'S19'
                },
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                },
                RequestId: {},
                LinkSharingConfiguration: {
                  shape: 'Snb'
                }
              }
            }
          },
          DescribeDashboardSnapshotJob: {
            http: {
              method: 'GET',
              requestUri: '/accounts/{AwsAccountId}/dashboards/{DashboardId}/snapshot-jobs/{SnapshotJobId}'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'DashboardId', 'SnapshotJobId'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                DashboardId: {
                  location: 'uri',
                  locationName: 'DashboardId'
                },
                SnapshotJobId: {
                  location: 'uri',
                  locationName: 'SnapshotJobId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AwsAccountId: {},
                DashboardId: {},
                SnapshotJobId: {},
                UserConfiguration: {
                  type: 'structure',
                  members: {
                    AnonymousUsers: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          RowLevelPermissionTagKeys: {
                            type: 'list',
                            member: {}
                          }
                        }
                      }
                    }
                  }
                },
                SnapshotConfiguration: {
                  shape: 'S125'
                },
                Arn: {},
                JobStatus: {},
                CreatedTime: {
                  type: 'timestamp'
                },
                LastUpdatedTime: {
                  type: 'timestamp'
                },
                RequestId: {},
                Status: {
                  type: 'integer'
                }
              }
            }
          },
          DescribeDashboardSnapshotJobResult: {
            http: {
              method: 'GET',
              requestUri: '/accounts/{AwsAccountId}/dashboards/{DashboardId}/snapshot-jobs/{SnapshotJobId}/result'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'DashboardId', 'SnapshotJobId'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                DashboardId: {
                  location: 'uri',
                  locationName: 'DashboardId'
                },
                SnapshotJobId: {
                  location: 'uri',
                  locationName: 'SnapshotJobId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                JobStatus: {},
                CreatedTime: {
                  type: 'timestamp'
                },
                LastUpdatedTime: {
                  type: 'timestamp'
                },
                Result: {
                  type: 'structure',
                  members: {
                    AnonymousUsers: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          FileGroups: {
                            type: 'list',
                            member: {
                              type: 'structure',
                              members: {
                                Files: {
                                  shape: 'S128'
                                },
                                S3Results: {
                                  type: 'list',
                                  member: {
                                    type: 'structure',
                                    members: {
                                      S3DestinationConfiguration: {
                                        shape: 'S12h'
                                      },
                                      S3Uri: {
                                        shape: 'Sz0'
                                      },
                                      ErrorInfo: {
                                        type: 'list',
                                        member: {
                                          type: 'structure',
                                          members: {
                                            ErrorMessage: {},
                                            ErrorType: {}
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                ErrorInfo: {
                  type: 'structure',
                  members: {
                    ErrorMessage: {},
                    ErrorType: {}
                  }
                },
                RequestId: {},
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                }
              }
            }
          },
          DescribeDataSet: {
            http: {
              method: 'GET',
              requestUri: '/accounts/{AwsAccountId}/data-sets/{DataSetId}'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'DataSetId'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                DataSetId: {
                  location: 'uri',
                  locationName: 'DataSetId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                DataSet: {
                  type: 'structure',
                  members: {
                    Arn: {},
                    DataSetId: {},
                    Name: {},
                    CreatedTime: {
                      type: 'timestamp'
                    },
                    LastUpdatedTime: {
                      type: 'timestamp'
                    },
                    PhysicalTableMap: {
                      shape: 'Sni'
                    },
                    LogicalTableMap: {
                      shape: 'So2'
                    },
                    OutputColumns: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          Name: {},
                          Description: {},
                          Type: {},
                          SubType: {}
                        }
                      }
                    },
                    ImportMode: {},
                    ConsumedSpiceCapacityInBytes: {
                      type: 'long'
                    },
                    ColumnGroups: {
                      shape: 'Sp9'
                    },
                    FieldFolders: {
                      shape: 'Spf'
                    },
                    RowLevelPermissionDataSet: {
                      shape: 'Spk'
                    },
                    RowLevelPermissionTagConfiguration: {
                      shape: 'Spo'
                    },
                    ColumnLevelPermissionRules: {
                      shape: 'Spw'
                    },
                    DataSetUsageConfiguration: {
                      shape: 'Sq0'
                    },
                    DatasetParameters: {
                      shape: 'Sq1'
                    }
                  }
                },
                RequestId: {},
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                }
              }
            }
          },
          DescribeDataSetPermissions: {
            http: {
              method: 'GET',
              requestUri: '/accounts/{AwsAccountId}/data-sets/{DataSetId}/permissions'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'DataSetId'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                DataSetId: {
                  location: 'uri',
                  locationName: 'DataSetId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                DataSetArn: {},
                DataSetId: {},
                Permissions: {
                  shape: 'S19'
                },
                RequestId: {},
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                }
              }
            }
          },
          DescribeDataSetRefreshProperties: {
            http: {
              method: 'GET',
              requestUri: '/accounts/{AwsAccountId}/data-sets/{DataSetId}/refresh-properties'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'DataSetId'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                DataSetId: {
                  location: 'uri',
                  locationName: 'DataSetId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                RequestId: {},
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                },
                DataSetRefreshProperties: {
                  shape: 'S135'
                }
              }
            }
          },
          DescribeDataSource: {
            http: {
              method: 'GET',
              requestUri: '/accounts/{AwsAccountId}/data-sources/{DataSourceId}'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'DataSourceId'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                DataSourceId: {
                  location: 'uri',
                  locationName: 'DataSourceId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                DataSource: {
                  shape: 'S13d'
                },
                RequestId: {},
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                }
              }
            }
          },
          DescribeDataSourcePermissions: {
            http: {
              method: 'GET',
              requestUri: '/accounts/{AwsAccountId}/data-sources/{DataSourceId}/permissions'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'DataSourceId'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                DataSourceId: {
                  location: 'uri',
                  locationName: 'DataSourceId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                DataSourceArn: {},
                DataSourceId: {},
                Permissions: {
                  shape: 'S19'
                },
                RequestId: {},
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                }
              }
            }
          },
          DescribeFolder: {
            http: {
              method: 'GET',
              requestUri: '/accounts/{AwsAccountId}/folders/{FolderId}'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'FolderId'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                FolderId: {
                  location: 'uri',
                  locationName: 'FolderId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                },
                Folder: {
                  type: 'structure',
                  members: {
                    FolderId: {},
                    Arn: {},
                    Name: {},
                    FolderType: {},
                    FolderPath: {
                      type: 'list',
                      member: {}
                    },
                    CreatedTime: {
                      type: 'timestamp'
                    },
                    LastUpdatedTime: {
                      type: 'timestamp'
                    },
                    SharingModel: {}
                  }
                },
                RequestId: {}
              }
            }
          },
          DescribeFolderPermissions: {
            http: {
              method: 'GET',
              requestUri: '/accounts/{AwsAccountId}/folders/{FolderId}/permissions'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'FolderId'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                FolderId: {
                  location: 'uri',
                  locationName: 'FolderId'
                },
                Namespace: {
                  location: 'querystring',
                  locationName: 'namespace'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'max-results',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'next-token'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                },
                FolderId: {},
                Arn: {},
                Permissions: {
                  shape: 'S19'
                },
                RequestId: {},
                NextToken: {}
              }
            }
          },
          DescribeFolderResolvedPermissions: {
            http: {
              method: 'GET',
              requestUri: '/accounts/{AwsAccountId}/folders/{FolderId}/resolved-permissions'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'FolderId'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                FolderId: {
                  location: 'uri',
                  locationName: 'FolderId'
                },
                Namespace: {
                  location: 'querystring',
                  locationName: 'namespace'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'max-results',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'next-token'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                },
                FolderId: {},
                Arn: {},
                Permissions: {
                  shape: 'S19'
                },
                RequestId: {},
                NextToken: {}
              }
            }
          },
          DescribeGroup: {
            http: {
              method: 'GET',
              requestUri: '/accounts/{AwsAccountId}/namespaces/{Namespace}/groups/{GroupName}'
            },
            input: {
              type: 'structure',
              required: ['GroupName', 'AwsAccountId', 'Namespace'],
              members: {
                GroupName: {
                  location: 'uri',
                  locationName: 'GroupName'
                },
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                Namespace: {
                  location: 'uri',
                  locationName: 'Namespace'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Group: {
                  shape: 'Ssl'
                },
                RequestId: {},
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                }
              }
            }
          },
          DescribeGroupMembership: {
            http: {
              method: 'GET',
              requestUri: '/accounts/{AwsAccountId}/namespaces/{Namespace}/groups/{GroupName}/members/{MemberName}'
            },
            input: {
              type: 'structure',
              required: ['MemberName', 'GroupName', 'AwsAccountId', 'Namespace'],
              members: {
                MemberName: {
                  location: 'uri',
                  locationName: 'MemberName'
                },
                GroupName: {
                  location: 'uri',
                  locationName: 'GroupName'
                },
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                Namespace: {
                  location: 'uri',
                  locationName: 'Namespace'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                GroupMember: {
                  shape: 'Ssp'
                },
                RequestId: {},
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                }
              }
            }
          },
          DescribeIAMPolicyAssignment: {
            http: {
              method: 'GET',
              requestUri: '/accounts/{AwsAccountId}/namespaces/{Namespace}/iam-policy-assignments/{AssignmentName}'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'AssignmentName', 'Namespace'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                AssignmentName: {
                  location: 'uri',
                  locationName: 'AssignmentName'
                },
                Namespace: {
                  location: 'uri',
                  locationName: 'Namespace'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                IAMPolicyAssignment: {
                  type: 'structure',
                  members: {
                    AwsAccountId: {},
                    AssignmentId: {},
                    AssignmentName: {},
                    PolicyArn: {},
                    Identities: {
                      shape: 'Sst'
                    },
                    AssignmentStatus: {}
                  }
                },
                RequestId: {},
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                }
              }
            }
          },
          DescribeIngestion: {
            http: {
              method: 'GET',
              requestUri: '/accounts/{AwsAccountId}/data-sets/{DataSetId}/ingestions/{IngestionId}'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'DataSetId', 'IngestionId'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                DataSetId: {
                  location: 'uri',
                  locationName: 'DataSetId'
                },
                IngestionId: {
                  location: 'uri',
                  locationName: 'IngestionId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Ingestion: {
                  shape: 'S140'
                },
                RequestId: {},
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                }
              }
            }
          },
          DescribeIpRestriction: {
            http: {
              method: 'GET',
              requestUri: '/accounts/{AwsAccountId}/ip-restriction'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AwsAccountId: {},
                IpRestrictionRuleMap: {
                  shape: 'S149'
                },
                VpcIdRestrictionRuleMap: {
                  shape: 'S14c'
                },
                VpcEndpointIdRestrictionRuleMap: {
                  shape: 'S14f'
                },
                Enabled: {
                  type: 'boolean'
                },
                RequestId: {},
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                }
              }
            }
          },
          DescribeKeyRegistration: {
            http: {
              method: 'GET',
              requestUri: '/accounts/{AwsAccountId}/key-registration'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                DefaultKeyOnly: {
                  location: 'querystring',
                  locationName: 'default-key-only',
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AwsAccountId: {},
                KeyRegistration: {
                  shape: 'S14k'
                },
                RequestId: {},
                Status: {
                  type: 'integer'
                }
              }
            }
          },
          DescribeNamespace: {
            http: {
              method: 'GET',
              requestUri: '/accounts/{AwsAccountId}/namespaces/{Namespace}'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'Namespace'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                Namespace: {
                  location: 'uri',
                  locationName: 'Namespace'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Namespace: {
                  shape: 'S14o'
                },
                RequestId: {},
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                }
              }
            }
          },
          DescribeRefreshSchedule: {
            http: {
              method: 'GET',
              requestUri: '/accounts/{AwsAccountId}/data-sets/{DataSetId}/refresh-schedules/{ScheduleId}'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'DataSetId', 'ScheduleId'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                DataSetId: {
                  location: 'uri',
                  locationName: 'DataSetId'
                },
                ScheduleId: {
                  location: 'uri',
                  locationName: 'ScheduleId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                RefreshSchedule: {
                  shape: 'St6'
                },
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                },
                RequestId: {},
                Arn: {}
              }
            }
          },
          DescribeRoleCustomPermission: {
            http: {
              method: 'GET',
              requestUri: '/accounts/{AwsAccountId}/namespaces/{Namespace}/roles/{Role}/custom-permission'
            },
            input: {
              type: 'structure',
              required: ['Role', 'AwsAccountId', 'Namespace'],
              members: {
                Role: {
                  location: 'uri',
                  locationName: 'Role'
                },
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                Namespace: {
                  location: 'uri',
                  locationName: 'Namespace'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                CustomPermissionsName: {},
                RequestId: {},
                Status: {
                  type: 'integer'
                }
              }
            }
          },
          DescribeTemplate: {
            http: {
              method: 'GET',
              requestUri: '/accounts/{AwsAccountId}/templates/{TemplateId}'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'TemplateId'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                TemplateId: {
                  location: 'uri',
                  locationName: 'TemplateId'
                },
                VersionNumber: {
                  location: 'querystring',
                  locationName: 'version-number',
                  type: 'long'
                },
                AliasName: {
                  location: 'querystring',
                  locationName: 'alias-name'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Template: {
                  type: 'structure',
                  members: {
                    Arn: {},
                    Name: {},
                    Version: {
                      type: 'structure',
                      members: {
                        CreatedTime: {
                          type: 'timestamp'
                        },
                        Errors: {
                          shape: 'S150'
                        },
                        VersionNumber: {
                          type: 'long'
                        },
                        Status: {},
                        DataSetConfigurations: {
                          shape: 'Stm'
                        },
                        Description: {},
                        SourceEntityArn: {},
                        ThemeArn: {},
                        Sheets: {
                          shape: 'Syr'
                        }
                      }
                    },
                    TemplateId: {},
                    LastUpdatedTime: {
                      type: 'timestamp'
                    },
                    CreatedTime: {
                      type: 'timestamp'
                    }
                  }
                },
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                },
                RequestId: {}
              }
            }
          },
          DescribeTemplateAlias: {
            http: {
              method: 'GET',
              requestUri: '/accounts/{AwsAccountId}/templates/{TemplateId}/aliases/{AliasName}'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'TemplateId', 'AliasName'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                TemplateId: {
                  location: 'uri',
                  locationName: 'TemplateId'
                },
                AliasName: {
                  location: 'uri',
                  locationName: 'AliasName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                TemplateAlias: {
                  shape: 'Su0'
                },
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                },
                RequestId: {}
              }
            }
          },
          DescribeTemplateDefinition: {
            http: {
              method: 'GET',
              requestUri: '/accounts/{AwsAccountId}/templates/{TemplateId}/definition'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'TemplateId'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                TemplateId: {
                  location: 'uri',
                  locationName: 'TemplateId'
                },
                VersionNumber: {
                  location: 'querystring',
                  locationName: 'version-number',
                  type: 'long'
                },
                AliasName: {
                  location: 'querystring',
                  locationName: 'alias-name'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Name: {},
                TemplateId: {},
                Errors: {
                  shape: 'S150'
                },
                ResourceStatus: {},
                ThemeArn: {},
                Definition: {
                  shape: 'Stl'
                },
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                },
                RequestId: {}
              }
            }
          },
          DescribeTemplatePermissions: {
            http: {
              method: 'GET',
              requestUri: '/accounts/{AwsAccountId}/templates/{TemplateId}/permissions'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'TemplateId'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                TemplateId: {
                  location: 'uri',
                  locationName: 'TemplateId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                TemplateId: {},
                TemplateArn: {},
                Permissions: {
                  shape: 'S19'
                },
                RequestId: {},
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                }
              }
            }
          },
          DescribeTheme: {
            http: {
              method: 'GET',
              requestUri: '/accounts/{AwsAccountId}/themes/{ThemeId}'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'ThemeId'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                ThemeId: {
                  location: 'uri',
                  locationName: 'ThemeId'
                },
                VersionNumber: {
                  location: 'querystring',
                  locationName: 'version-number',
                  type: 'long'
                },
                AliasName: {
                  location: 'querystring',
                  locationName: 'alias-name'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Theme: {
                  type: 'structure',
                  members: {
                    Arn: {},
                    Name: {},
                    ThemeId: {},
                    Version: {
                      type: 'structure',
                      members: {
                        VersionNumber: {
                          type: 'long'
                        },
                        Arn: {},
                        Description: {},
                        BaseThemeId: {},
                        CreatedTime: {
                          type: 'timestamp'
                        },
                        Configuration: {
                          shape: 'Su3'
                        },
                        Errors: {
                          type: 'list',
                          member: {
                            type: 'structure',
                            members: {
                              Type: {},
                              Message: {}
                            }
                          }
                        },
                        Status: {}
                      }
                    },
                    CreatedTime: {
                      type: 'timestamp'
                    },
                    LastUpdatedTime: {
                      type: 'timestamp'
                    },
                    Type: {}
                  }
                },
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                },
                RequestId: {}
              }
            }
          },
          DescribeThemeAlias: {
            http: {
              method: 'GET',
              requestUri: '/accounts/{AwsAccountId}/themes/{ThemeId}/aliases/{AliasName}'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'ThemeId', 'AliasName'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                ThemeId: {
                  location: 'uri',
                  locationName: 'ThemeId'
                },
                AliasName: {
                  location: 'uri',
                  locationName: 'AliasName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ThemeAlias: {
                  shape: 'Suj'
                },
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                },
                RequestId: {}
              }
            }
          },
          DescribeThemePermissions: {
            http: {
              method: 'GET',
              requestUri: '/accounts/{AwsAccountId}/themes/{ThemeId}/permissions'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'ThemeId'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                ThemeId: {
                  location: 'uri',
                  locationName: 'ThemeId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ThemeId: {},
                ThemeArn: {},
                Permissions: {
                  shape: 'S19'
                },
                RequestId: {},
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                }
              }
            }
          },
          DescribeTopic: {
            http: {
              method: 'GET',
              requestUri: '/accounts/{AwsAccountId}/topics/{TopicId}'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'TopicId'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                TopicId: {
                  location: 'uri',
                  locationName: 'TopicId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                TopicId: {},
                Topic: {
                  shape: 'Sum'
                },
                RequestId: {},
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                }
              }
            }
          },
          DescribeTopicPermissions: {
            http: {
              method: 'GET',
              requestUri: '/accounts/{AwsAccountId}/topics/{TopicId}/permissions'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'TopicId'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                TopicId: {
                  location: 'uri',
                  locationName: 'TopicId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                TopicId: {},
                TopicArn: {},
                Permissions: {
                  shape: 'S19'
                },
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                },
                RequestId: {}
              }
            }
          },
          DescribeTopicRefresh: {
            http: {
              method: 'GET',
              requestUri: '/accounts/{AwsAccountId}/topics/{TopicId}/refresh/{RefreshId}'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'TopicId', 'RefreshId'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                TopicId: {
                  location: 'uri',
                  locationName: 'TopicId'
                },
                RefreshId: {
                  location: 'uri',
                  locationName: 'RefreshId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                RefreshDetails: {
                  type: 'structure',
                  members: {
                    RefreshArn: {},
                    RefreshId: {},
                    RefreshStatus: {}
                  }
                },
                RequestId: {},
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                }
              }
            }
          },
          DescribeTopicRefreshSchedule: {
            http: {
              method: 'GET',
              requestUri: '/accounts/{AwsAccountId}/topics/{TopicId}/schedules/{DatasetId}'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'TopicId', 'DatasetId'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                TopicId: {
                  location: 'uri',
                  locationName: 'TopicId'
                },
                DatasetId: {
                  location: 'uri',
                  locationName: 'DatasetId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                TopicId: {},
                TopicArn: {},
                DatasetArn: {},
                RefreshSchedule: {
                  shape: 'Swb'
                },
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                },
                RequestId: {}
              }
            }
          },
          DescribeUser: {
            http: {
              method: 'GET',
              requestUri: '/accounts/{AwsAccountId}/namespaces/{Namespace}/users/{UserName}'
            },
            input: {
              type: 'structure',
              required: ['UserName', 'AwsAccountId', 'Namespace'],
              members: {
                UserName: {
                  location: 'uri',
                  locationName: 'UserName'
                },
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                Namespace: {
                  location: 'uri',
                  locationName: 'Namespace'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                User: {
                  shape: 'S15y'
                },
                RequestId: {},
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                }
              }
            }
          },
          DescribeVPCConnection: {
            http: {
              method: 'GET',
              requestUri: '/accounts/{AwsAccountId}/vpc-connections/{VPCConnectionId}'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'VPCConnectionId'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                VPCConnectionId: {
                  location: 'uri',
                  locationName: 'VPCConnectionId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                VPCConnection: {
                  type: 'structure',
                  members: {
                    VPCConnectionId: {},
                    Arn: {},
                    Name: {},
                    VPCId: {},
                    SecurityGroupIds: {
                      shape: 'Swi'
                    },
                    DnsResolvers: {
                      shape: 'Sv4'
                    },
                    Status: {},
                    AvailabilityStatus: {},
                    NetworkInterfaces: {
                      shape: 'S164'
                    },
                    RoleArn: {},
                    CreatedTime: {
                      type: 'timestamp'
                    },
                    LastUpdatedTime: {
                      type: 'timestamp'
                    }
                  }
                },
                RequestId: {},
                Status: {
                  type: 'integer'
                }
              }
            }
          },
          GenerateEmbedUrlForAnonymousUser: {
            http: {
              requestUri: '/accounts/{AwsAccountId}/embed-url/anonymous-user'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'Namespace', 'AuthorizedResourceArns', 'ExperienceConfiguration'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                SessionLifetimeInMinutes: {
                  type: 'long'
                },
                Namespace: {},
                SessionTags: {
                  shape: 'S16a'
                },
                AuthorizedResourceArns: {
                  type: 'list',
                  member: {}
                },
                ExperienceConfiguration: {
                  type: 'structure',
                  members: {
                    Dashboard: {
                      type: 'structure',
                      required: ['InitialDashboardId'],
                      members: {
                        InitialDashboardId: {}
                      }
                    },
                    DashboardVisual: {
                      type: 'structure',
                      required: ['InitialDashboardVisualId'],
                      members: {
                        InitialDashboardVisualId: {
                          shape: 'S16g'
                        }
                      }
                    },
                    QSearchBar: {
                      type: 'structure',
                      required: ['InitialTopicId'],
                      members: {
                        InitialTopicId: {}
                      }
                    },
                    GenerativeQnA: {
                      type: 'structure',
                      required: ['InitialTopicId'],
                      members: {
                        InitialTopicId: {}
                      }
                    }
                  }
                },
                AllowedDomains: {
                  shape: 'Sv4'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['EmbedUrl', 'Status', 'RequestId', 'AnonymousUserArn'],
              members: {
                EmbedUrl: {
                  shape: 'S16k'
                },
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                },
                RequestId: {},
                AnonymousUserArn: {}
              }
            }
          },
          GenerateEmbedUrlForRegisteredUser: {
            http: {
              requestUri: '/accounts/{AwsAccountId}/embed-url/registered-user'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'UserArn', 'ExperienceConfiguration'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                SessionLifetimeInMinutes: {
                  type: 'long'
                },
                UserArn: {},
                ExperienceConfiguration: {
                  type: 'structure',
                  members: {
                    Dashboard: {
                      type: 'structure',
                      required: ['InitialDashboardId'],
                      members: {
                        InitialDashboardId: {},
                        FeatureConfigurations: {
                          type: 'structure',
                          members: {
                            StatePersistence: {
                              shape: 'S16p'
                            },
                            Bookmarks: {
                              type: 'structure',
                              required: ['Enabled'],
                              members: {
                                Enabled: {
                                  type: 'boolean'
                                }
                              }
                            }
                          }
                        }
                      }
                    },
                    QuickSightConsole: {
                      type: 'structure',
                      members: {
                        InitialPath: {},
                        FeatureConfigurations: {
                          type: 'structure',
                          members: {
                            StatePersistence: {
                              shape: 'S16p'
                            }
                          }
                        }
                      }
                    },
                    QSearchBar: {
                      type: 'structure',
                      members: {
                        InitialTopicId: {}
                      }
                    },
                    DashboardVisual: {
                      type: 'structure',
                      required: ['InitialDashboardVisualId'],
                      members: {
                        InitialDashboardVisualId: {
                          shape: 'S16g'
                        }
                      }
                    },
                    GenerativeQnA: {
                      type: 'structure',
                      members: {
                        InitialTopicId: {}
                      }
                    }
                  }
                },
                AllowedDomains: {
                  shape: 'Sv4'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['EmbedUrl', 'Status', 'RequestId'],
              members: {
                EmbedUrl: {
                  shape: 'S16k'
                },
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                },
                RequestId: {}
              }
            }
          },
          GetDashboardEmbedUrl: {
            http: {
              method: 'GET',
              requestUri: '/accounts/{AwsAccountId}/dashboards/{DashboardId}/embed-url'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'DashboardId', 'IdentityType'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                DashboardId: {
                  location: 'uri',
                  locationName: 'DashboardId'
                },
                IdentityType: {
                  location: 'querystring',
                  locationName: 'creds-type'
                },
                SessionLifetimeInMinutes: {
                  location: 'querystring',
                  locationName: 'session-lifetime',
                  type: 'long'
                },
                UndoRedoDisabled: {
                  location: 'querystring',
                  locationName: 'undo-redo-disabled',
                  type: 'boolean'
                },
                ResetDisabled: {
                  location: 'querystring',
                  locationName: 'reset-disabled',
                  type: 'boolean'
                },
                StatePersistenceEnabled: {
                  location: 'querystring',
                  locationName: 'state-persistence-enabled',
                  type: 'boolean'
                },
                UserArn: {
                  location: 'querystring',
                  locationName: 'user-arn'
                },
                Namespace: {
                  location: 'querystring',
                  locationName: 'namespace'
                },
                AdditionalDashboardIds: {
                  location: 'querystring',
                  locationName: 'additional-dashboard-ids',
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                EmbedUrl: {
                  shape: 'S16k'
                },
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                },
                RequestId: {}
              }
            }
          },
          GetSessionEmbedUrl: {
            http: {
              method: 'GET',
              requestUri: '/accounts/{AwsAccountId}/session-embed-url'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                EntryPoint: {
                  location: 'querystring',
                  locationName: 'entry-point'
                },
                SessionLifetimeInMinutes: {
                  location: 'querystring',
                  locationName: 'session-lifetime',
                  type: 'long'
                },
                UserArn: {
                  location: 'querystring',
                  locationName: 'user-arn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                EmbedUrl: {
                  shape: 'S16k'
                },
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                },
                RequestId: {}
              }
            }
          },
          ListAnalyses: {
            http: {
              method: 'GET',
              requestUri: '/accounts/{AwsAccountId}/analyses'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'next-token'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'max-results',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AnalysisSummaryList: {
                  shape: 'S177'
                },
                NextToken: {},
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                },
                RequestId: {}
              }
            }
          },
          ListAssetBundleExportJobs: {
            http: {
              method: 'GET',
              requestUri: '/accounts/{AwsAccountId}/asset-bundle-export-jobs'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'next-token'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'max-results',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AssetBundleExportJobSummaryList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      JobStatus: {},
                      Arn: {},
                      CreatedTime: {
                        type: 'timestamp'
                      },
                      AssetBundleExportJobId: {},
                      IncludeAllDependencies: {
                        type: 'boolean'
                      },
                      ExportFormat: {},
                      IncludePermissions: {
                        type: 'boolean'
                      },
                      IncludeTags: {
                        type: 'boolean'
                      }
                    }
                  }
                },
                NextToken: {},
                RequestId: {},
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                }
              }
            }
          },
          ListAssetBundleImportJobs: {
            http: {
              method: 'GET',
              requestUri: '/accounts/{AwsAccountId}/asset-bundle-import-jobs'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'next-token'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'max-results',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AssetBundleImportJobSummaryList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      JobStatus: {},
                      Arn: {},
                      CreatedTime: {
                        type: 'timestamp'
                      },
                      AssetBundleImportJobId: {},
                      FailureAction: {}
                    }
                  }
                },
                NextToken: {},
                RequestId: {},
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                }
              }
            }
          },
          ListDashboardVersions: {
            http: {
              method: 'GET',
              requestUri: '/accounts/{AwsAccountId}/dashboards/{DashboardId}/versions'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'DashboardId'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                DashboardId: {
                  location: 'uri',
                  locationName: 'DashboardId'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'next-token'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'max-results',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                DashboardVersionSummaryList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Arn: {},
                      CreatedTime: {
                        type: 'timestamp'
                      },
                      VersionNumber: {
                        type: 'long'
                      },
                      Status: {},
                      SourceEntityArn: {},
                      Description: {}
                    }
                  }
                },
                NextToken: {},
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                },
                RequestId: {}
              }
            }
          },
          ListDashboards: {
            http: {
              method: 'GET',
              requestUri: '/accounts/{AwsAccountId}/dashboards'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'next-token'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'max-results',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                DashboardSummaryList: {
                  shape: 'S17n'
                },
                NextToken: {},
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                },
                RequestId: {}
              }
            }
          },
          ListDataSets: {
            http: {
              method: 'GET',
              requestUri: '/accounts/{AwsAccountId}/data-sets'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'next-token'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'max-results',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                DataSetSummaries: {
                  shape: 'S17r'
                },
                NextToken: {},
                RequestId: {},
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                }
              }
            }
          },
          ListDataSources: {
            http: {
              method: 'GET',
              requestUri: '/accounts/{AwsAccountId}/data-sources'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'next-token'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'max-results',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                DataSources: {
                  type: 'list',
                  member: {
                    shape: 'S13d'
                  }
                },
                NextToken: {},
                RequestId: {},
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                }
              }
            }
          },
          ListFolderMembers: {
            http: {
              method: 'GET',
              requestUri: '/accounts/{AwsAccountId}/folders/{FolderId}/members'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'FolderId'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                FolderId: {
                  location: 'uri',
                  locationName: 'FolderId'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'next-token'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'max-results',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                },
                FolderMemberList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      MemberId: {},
                      MemberArn: {}
                    }
                  }
                },
                NextToken: {},
                RequestId: {}
              }
            }
          },
          ListFolders: {
            http: {
              method: 'GET',
              requestUri: '/accounts/{AwsAccountId}/folders'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'next-token'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'max-results',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                },
                FolderSummaryList: {
                  shape: 'S182'
                },
                NextToken: {},
                RequestId: {}
              }
            }
          },
          ListGroupMemberships: {
            http: {
              method: 'GET',
              requestUri: '/accounts/{AwsAccountId}/namespaces/{Namespace}/groups/{GroupName}/members'
            },
            input: {
              type: 'structure',
              required: ['GroupName', 'AwsAccountId', 'Namespace'],
              members: {
                GroupName: {
                  location: 'uri',
                  locationName: 'GroupName'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'next-token'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'max-results',
                  type: 'integer'
                },
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                Namespace: {
                  location: 'uri',
                  locationName: 'Namespace'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                GroupMemberList: {
                  type: 'list',
                  member: {
                    shape: 'Ssp'
                  }
                },
                NextToken: {},
                RequestId: {},
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                }
              }
            }
          },
          ListGroups: {
            http: {
              method: 'GET',
              requestUri: '/accounts/{AwsAccountId}/namespaces/{Namespace}/groups'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'Namespace'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'next-token'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'max-results',
                  type: 'integer'
                },
                Namespace: {
                  location: 'uri',
                  locationName: 'Namespace'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                GroupList: {
                  shape: 'S189'
                },
                NextToken: {},
                RequestId: {},
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                }
              }
            }
          },
          ListIAMPolicyAssignments: {
            http: {
              method: 'GET',
              requestUri: '/accounts/{AwsAccountId}/namespaces/{Namespace}/v2/iam-policy-assignments'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'Namespace'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                AssignmentStatus: {
                  location: 'querystring',
                  locationName: 'assignment-status'
                },
                Namespace: {
                  location: 'uri',
                  locationName: 'Namespace'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'next-token'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'max-results',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                IAMPolicyAssignments: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      AssignmentName: {},
                      AssignmentStatus: {}
                    }
                  }
                },
                NextToken: {},
                RequestId: {},
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                }
              }
            }
          },
          ListIAMPolicyAssignmentsForUser: {
            http: {
              method: 'GET',
              requestUri: '/accounts/{AwsAccountId}/namespaces/{Namespace}/users/{UserName}/iam-policy-assignments'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'UserName', 'Namespace'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                UserName: {
                  location: 'uri',
                  locationName: 'UserName'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'next-token'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'max-results',
                  type: 'integer'
                },
                Namespace: {
                  location: 'uri',
                  locationName: 'Namespace'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ActiveAssignments: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      AssignmentName: {},
                      PolicyArn: {}
                    }
                  }
                },
                RequestId: {},
                NextToken: {},
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                }
              }
            }
          },
          ListIdentityPropagationConfigs: {
            http: {
              method: 'GET',
              requestUri: '/accounts/{AwsAccountId}/identity-propagation-config'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'max-results',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'next-token'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Services: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Service: {},
                      AuthorizedTargets: {
                        shape: 'S18n'
                      }
                    }
                  }
                },
                NextToken: {},
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                },
                RequestId: {}
              }
            }
          },
          ListIngestions: {
            http: {
              method: 'GET',
              requestUri: '/accounts/{AwsAccountId}/data-sets/{DataSetId}/ingestions'
            },
            input: {
              type: 'structure',
              required: ['DataSetId', 'AwsAccountId'],
              members: {
                DataSetId: {
                  location: 'uri',
                  locationName: 'DataSetId'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'next-token'
                },
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'max-results',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Ingestions: {
                  type: 'list',
                  member: {
                    shape: 'S140'
                  }
                },
                NextToken: {},
                RequestId: {},
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                }
              }
            }
          },
          ListNamespaces: {
            http: {
              method: 'GET',
              requestUri: '/accounts/{AwsAccountId}/namespaces'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'next-token'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'max-results',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Namespaces: {
                  type: 'list',
                  member: {
                    shape: 'S14o'
                  }
                },
                NextToken: {},
                RequestId: {},
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                }
              }
            }
          },
          ListRefreshSchedules: {
            http: {
              method: 'GET',
              requestUri: '/accounts/{AwsAccountId}/data-sets/{DataSetId}/refresh-schedules'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'DataSetId'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                DataSetId: {
                  location: 'uri',
                  locationName: 'DataSetId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                RefreshSchedules: {
                  type: 'list',
                  member: {
                    shape: 'St6'
                  }
                },
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                },
                RequestId: {}
              }
            }
          },
          ListRoleMemberships: {
            http: {
              method: 'GET',
              requestUri: '/accounts/{AwsAccountId}/namespaces/{Namespace}/roles/{Role}/members'
            },
            input: {
              type: 'structure',
              required: ['Role', 'AwsAccountId', 'Namespace'],
              members: {
                Role: {
                  location: 'uri',
                  locationName: 'Role'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'next-token'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'max-results',
                  type: 'integer'
                },
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                Namespace: {
                  location: 'uri',
                  locationName: 'Namespace'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                MembersList: {
                  shape: 'Sk'
                },
                NextToken: {},
                RequestId: {},
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                }
              }
            }
          },
          ListTagsForResource: {
            http: {
              method: 'GET',
              requestUri: '/resources/{ResourceArn}/tags'
            },
            input: {
              type: 'structure',
              required: ['ResourceArn'],
              members: {
                ResourceArn: {
                  location: 'uri',
                  locationName: 'ResourceArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Tags: {
                  shape: 'Sb'
                },
                RequestId: {},
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                }
              }
            }
          },
          ListTemplateAliases: {
            http: {
              method: 'GET',
              requestUri: '/accounts/{AwsAccountId}/templates/{TemplateId}/aliases'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'TemplateId'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                TemplateId: {
                  location: 'uri',
                  locationName: 'TemplateId'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'next-token'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'max-result',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                TemplateAliasList: {
                  type: 'list',
                  member: {
                    shape: 'Su0'
                  }
                },
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                },
                RequestId: {},
                NextToken: {}
              }
            }
          },
          ListTemplateVersions: {
            http: {
              method: 'GET',
              requestUri: '/accounts/{AwsAccountId}/templates/{TemplateId}/versions'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'TemplateId'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                TemplateId: {
                  location: 'uri',
                  locationName: 'TemplateId'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'next-token'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'max-results',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                TemplateVersionSummaryList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Arn: {},
                      VersionNumber: {
                        type: 'long'
                      },
                      CreatedTime: {
                        type: 'timestamp'
                      },
                      Status: {},
                      Description: {}
                    }
                  }
                },
                NextToken: {},
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                },
                RequestId: {}
              }
            }
          },
          ListTemplates: {
            http: {
              method: 'GET',
              requestUri: '/accounts/{AwsAccountId}/templates'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'next-token'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'max-result',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                TemplateSummaryList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Arn: {},
                      TemplateId: {},
                      Name: {},
                      LatestVersionNumber: {
                        type: 'long'
                      },
                      CreatedTime: {
                        type: 'timestamp'
                      },
                      LastUpdatedTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {},
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                },
                RequestId: {}
              }
            }
          },
          ListThemeAliases: {
            http: {
              method: 'GET',
              requestUri: '/accounts/{AwsAccountId}/themes/{ThemeId}/aliases'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'ThemeId'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                ThemeId: {
                  location: 'uri',
                  locationName: 'ThemeId'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'next-token'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'max-result',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ThemeAliasList: {
                  type: 'list',
                  member: {
                    shape: 'Suj'
                  }
                },
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                },
                RequestId: {},
                NextToken: {}
              }
            }
          },
          ListThemeVersions: {
            http: {
              method: 'GET',
              requestUri: '/accounts/{AwsAccountId}/themes/{ThemeId}/versions'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'ThemeId'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                ThemeId: {
                  location: 'uri',
                  locationName: 'ThemeId'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'next-token'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'max-results',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ThemeVersionSummaryList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      VersionNumber: {
                        type: 'long'
                      },
                      Arn: {},
                      Description: {},
                      CreatedTime: {
                        type: 'timestamp'
                      },
                      Status: {}
                    }
                  }
                },
                NextToken: {},
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                },
                RequestId: {}
              }
            }
          },
          ListThemes: {
            http: {
              method: 'GET',
              requestUri: '/accounts/{AwsAccountId}/themes'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'next-token'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'max-results',
                  type: 'integer'
                },
                Type: {
                  location: 'querystring',
                  locationName: 'type'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ThemeSummaryList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Arn: {},
                      Name: {},
                      ThemeId: {},
                      LatestVersionNumber: {
                        type: 'long'
                      },
                      CreatedTime: {
                        type: 'timestamp'
                      },
                      LastUpdatedTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {},
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                },
                RequestId: {}
              }
            }
          },
          ListTopicRefreshSchedules: {
            http: {
              method: 'GET',
              requestUri: '/accounts/{AwsAccountId}/topics/{TopicId}/schedules'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'TopicId'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                TopicId: {
                  location: 'uri',
                  locationName: 'TopicId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                TopicId: {},
                TopicArn: {},
                RefreshSchedules: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      DatasetId: {},
                      DatasetArn: {},
                      DatasetName: {},
                      RefreshSchedule: {
                        shape: 'Swb'
                      }
                    }
                  }
                },
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                },
                RequestId: {}
              }
            }
          },
          ListTopics: {
            http: {
              method: 'GET',
              requestUri: '/accounts/{AwsAccountId}/topics'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'next-token'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'max-results',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                TopicsSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Arn: {},
                      TopicId: {},
                      Name: {},
                      UserExperienceVersion: {}
                    }
                  }
                },
                NextToken: {},
                RequestId: {},
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                }
              }
            }
          },
          ListUserGroups: {
            http: {
              method: 'GET',
              requestUri: '/accounts/{AwsAccountId}/namespaces/{Namespace}/users/{UserName}/groups'
            },
            input: {
              type: 'structure',
              required: ['UserName', 'AwsAccountId', 'Namespace'],
              members: {
                UserName: {
                  location: 'uri',
                  locationName: 'UserName'
                },
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                Namespace: {
                  location: 'uri',
                  locationName: 'Namespace'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'next-token'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'max-results',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                GroupList: {
                  shape: 'S189'
                },
                NextToken: {},
                RequestId: {},
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                }
              }
            }
          },
          ListUsers: {
            http: {
              method: 'GET',
              requestUri: '/accounts/{AwsAccountId}/namespaces/{Namespace}/users'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'Namespace'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'next-token'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'max-results',
                  type: 'integer'
                },
                Namespace: {
                  location: 'uri',
                  locationName: 'Namespace'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                UserList: {
                  type: 'list',
                  member: {
                    shape: 'S15y'
                  }
                },
                NextToken: {},
                RequestId: {},
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                }
              }
            }
          },
          ListVPCConnections: {
            http: {
              method: 'GET',
              requestUri: '/accounts/{AwsAccountId}/vpc-connections'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'next-token'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'max-results',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                VPCConnectionSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      VPCConnectionId: {},
                      Arn: {},
                      Name: {},
                      VPCId: {},
                      SecurityGroupIds: {
                        shape: 'Swi'
                      },
                      DnsResolvers: {
                        shape: 'Sv4'
                      },
                      Status: {},
                      AvailabilityStatus: {},
                      NetworkInterfaces: {
                        shape: 'S164'
                      },
                      RoleArn: {},
                      CreatedTime: {
                        type: 'timestamp'
                      },
                      LastUpdatedTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {},
                RequestId: {},
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                }
              }
            }
          },
          PutDataSetRefreshProperties: {
            http: {
              method: 'PUT',
              requestUri: '/accounts/{AwsAccountId}/data-sets/{DataSetId}/refresh-properties'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'DataSetId', 'DataSetRefreshProperties'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                DataSetId: {
                  location: 'uri',
                  locationName: 'DataSetId'
                },
                DataSetRefreshProperties: {
                  shape: 'S135'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                RequestId: {},
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                }
              }
            }
          },
          RegisterUser: {
            http: {
              requestUri: '/accounts/{AwsAccountId}/namespaces/{Namespace}/users'
            },
            input: {
              type: 'structure',
              required: ['IdentityType', 'Email', 'UserRole', 'AwsAccountId', 'Namespace'],
              members: {
                IdentityType: {},
                Email: {},
                UserRole: {},
                IamArn: {},
                SessionName: {},
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                Namespace: {
                  location: 'uri',
                  locationName: 'Namespace'
                },
                UserName: {},
                CustomPermissionsName: {},
                ExternalLoginFederationProviderType: {},
                CustomFederationProviderUrl: {},
                ExternalLoginId: {},
                Tags: {
                  shape: 'Sb'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                User: {
                  shape: 'S15y'
                },
                UserInvitationUrl: {},
                RequestId: {},
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                }
              }
            }
          },
          RestoreAnalysis: {
            http: {
              requestUri: '/accounts/{AwsAccountId}/restore/analyses/{AnalysisId}'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'AnalysisId'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                AnalysisId: {
                  location: 'uri',
                  locationName: 'AnalysisId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                },
                Arn: {},
                AnalysisId: {},
                RequestId: {}
              }
            }
          },
          SearchAnalyses: {
            http: {
              requestUri: '/accounts/{AwsAccountId}/search/analyses'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'Filters'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                Filters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Operator: {},
                      Name: {},
                      Value: {}
                    }
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
                AnalysisSummaryList: {
                  shape: 'S177'
                },
                NextToken: {},
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                },
                RequestId: {}
              }
            }
          },
          SearchDashboards: {
            http: {
              requestUri: '/accounts/{AwsAccountId}/search/dashboards'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'Filters'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                Filters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Operator'],
                    members: {
                      Operator: {},
                      Name: {},
                      Value: {}
                    }
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
                DashboardSummaryList: {
                  shape: 'S17n'
                },
                NextToken: {},
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                },
                RequestId: {}
              }
            }
          },
          SearchDataSets: {
            http: {
              requestUri: '/accounts/{AwsAccountId}/search/data-sets'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'Filters'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                Filters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Operator', 'Name', 'Value'],
                    members: {
                      Operator: {},
                      Name: {},
                      Value: {}
                    }
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
                DataSetSummaries: {
                  shape: 'S17r'
                },
                NextToken: {},
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                },
                RequestId: {}
              }
            }
          },
          SearchDataSources: {
            http: {
              requestUri: '/accounts/{AwsAccountId}/search/data-sources'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'Filters'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                Filters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Operator', 'Name', 'Value'],
                    members: {
                      Operator: {},
                      Name: {},
                      Value: {}
                    }
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
                DataSourceSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Arn: {},
                      DataSourceId: {},
                      Name: {},
                      Type: {},
                      CreatedTime: {
                        type: 'timestamp'
                      },
                      LastUpdatedTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {},
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                },
                RequestId: {}
              }
            }
          },
          SearchFolders: {
            http: {
              requestUri: '/accounts/{AwsAccountId}/search/folders'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'Filters'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                Filters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Operator: {},
                      Name: {},
                      Value: {}
                    }
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
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                },
                FolderSummaryList: {
                  shape: 'S182'
                },
                NextToken: {},
                RequestId: {}
              }
            }
          },
          SearchGroups: {
            http: {
              requestUri: '/accounts/{AwsAccountId}/namespaces/{Namespace}/groups-search'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'Namespace', 'Filters'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'next-token'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'max-results',
                  type: 'integer'
                },
                Namespace: {
                  location: 'uri',
                  locationName: 'Namespace'
                },
                Filters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Operator', 'Name', 'Value'],
                    members: {
                      Operator: {},
                      Name: {},
                      Value: {}
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                GroupList: {
                  shape: 'S189'
                },
                NextToken: {},
                RequestId: {},
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                }
              }
            }
          },
          StartAssetBundleExportJob: {
            http: {
              requestUri: '/accounts/{AwsAccountId}/asset-bundle-export-jobs/export'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'AssetBundleExportJobId', 'ResourceArns', 'ExportFormat'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                AssetBundleExportJobId: {},
                ResourceArns: {
                  shape: 'Sz3'
                },
                IncludeAllDependencies: {
                  type: 'boolean'
                },
                ExportFormat: {},
                CloudFormationOverridePropertyConfiguration: {
                  shape: 'Sz5'
                },
                IncludePermissions: {
                  type: 'boolean'
                },
                IncludeTags: {
                  type: 'boolean'
                },
                ValidationStrategy: {
                  shape: 'Szz'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                AssetBundleExportJobId: {},
                RequestId: {},
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                }
              }
            }
          },
          StartAssetBundleImportJob: {
            http: {
              requestUri: '/accounts/{AwsAccountId}/asset-bundle-import-jobs/import'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'AssetBundleImportJobId', 'AssetBundleImportSource'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                AssetBundleImportJobId: {},
                AssetBundleImportSource: {
                  type: 'structure',
                  members: {
                    Body: {
                      type: 'blob',
                      sensitive: true
                    },
                    S3Uri: {}
                  }
                },
                OverrideParameters: {
                  shape: 'S109'
                },
                FailureAction: {},
                OverridePermissions: {
                  shape: 'S10s'
                },
                OverrideTags: {
                  shape: 'S118'
                },
                OverrideValidationStrategy: {
                  shape: 'S11l'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                AssetBundleImportJobId: {},
                RequestId: {},
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                }
              }
            }
          },
          StartDashboardSnapshotJob: {
            http: {
              requestUri: '/accounts/{AwsAccountId}/dashboards/{DashboardId}/snapshot-jobs'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'DashboardId', 'SnapshotJobId', 'UserConfiguration', 'SnapshotConfiguration'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                DashboardId: {
                  location: 'uri',
                  locationName: 'DashboardId'
                },
                SnapshotJobId: {},
                UserConfiguration: {
                  type: 'structure',
                  members: {
                    AnonymousUsers: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          RowLevelPermissionTags: {
                            shape: 'S16a'
                          }
                        }
                      }
                    }
                  }
                },
                SnapshotConfiguration: {
                  shape: 'S125'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                SnapshotJobId: {},
                RequestId: {},
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                }
              }
            }
          },
          TagResource: {
            http: {
              requestUri: '/resources/{ResourceArn}/tags'
            },
            input: {
              type: 'structure',
              required: ['ResourceArn', 'Tags'],
              members: {
                ResourceArn: {
                  location: 'uri',
                  locationName: 'ResourceArn'
                },
                Tags: {
                  shape: 'Sb'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                RequestId: {},
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                }
              }
            }
          },
          UntagResource: {
            http: {
              method: 'DELETE',
              requestUri: '/resources/{ResourceArn}/tags'
            },
            input: {
              type: 'structure',
              required: ['ResourceArn', 'TagKeys'],
              members: {
                ResourceArn: {
                  location: 'uri',
                  locationName: 'ResourceArn'
                },
                TagKeys: {
                  location: 'querystring',
                  locationName: 'keys',
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                RequestId: {},
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                }
              }
            }
          },
          UpdateAccountCustomization: {
            http: {
              method: 'PUT',
              requestUri: '/accounts/{AwsAccountId}/customizations'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'AccountCustomization'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                Namespace: {
                  location: 'querystring',
                  locationName: 'namespace'
                },
                AccountCustomization: {
                  shape: 'Sa'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                AwsAccountId: {},
                Namespace: {},
                AccountCustomization: {
                  shape: 'Sa'
                },
                RequestId: {},
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                }
              }
            }
          },
          UpdateAccountSettings: {
            http: {
              method: 'PUT',
              requestUri: '/accounts/{AwsAccountId}/settings'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'DefaultNamespace'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                DefaultNamespace: {},
                NotificationEmail: {},
                TerminationProtectionEnabled: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                RequestId: {},
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                }
              }
            }
          },
          UpdateAnalysis: {
            http: {
              method: 'PUT',
              requestUri: '/accounts/{AwsAccountId}/analyses/{AnalysisId}'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'AnalysisId', 'Name'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                AnalysisId: {
                  location: 'uri',
                  locationName: 'AnalysisId'
                },
                Name: {},
                Parameters: {
                  shape: 'Sr'
                },
                SourceEntity: {
                  shape: 'S1d'
                },
                ThemeArn: {},
                Definition: {
                  shape: 'S1h'
                },
                ValidationStrategy: {
                  shape: 'Smn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                AnalysisId: {},
                UpdateStatus: {},
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                },
                RequestId: {}
              }
            }
          },
          UpdateAnalysisPermissions: {
            http: {
              method: 'PUT',
              requestUri: '/accounts/{AwsAccountId}/analyses/{AnalysisId}/permissions'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'AnalysisId'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                AnalysisId: {
                  location: 'uri',
                  locationName: 'AnalysisId'
                },
                GrantPermissions: {
                  shape: 'S1bx'
                },
                RevokePermissions: {
                  shape: 'S1bx'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AnalysisArn: {},
                AnalysisId: {},
                Permissions: {
                  shape: 'S19'
                },
                RequestId: {},
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                }
              }
            }
          },
          UpdateDashboard: {
            http: {
              method: 'PUT',
              requestUri: '/accounts/{AwsAccountId}/dashboards/{DashboardId}'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'DashboardId', 'Name'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                DashboardId: {
                  location: 'uri',
                  locationName: 'DashboardId'
                },
                Name: {},
                SourceEntity: {
                  shape: 'Smu'
                },
                Parameters: {
                  shape: 'Sr'
                },
                VersionDescription: {},
                DashboardPublishOptions: {
                  shape: 'Smx'
                },
                ThemeArn: {},
                Definition: {
                  shape: 'Sna'
                },
                ValidationStrategy: {
                  shape: 'Smn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                VersionArn: {},
                DashboardId: {},
                CreationStatus: {},
                Status: {
                  type: 'integer'
                },
                RequestId: {}
              }
            }
          },
          UpdateDashboardLinks: {
            http: {
              method: 'PUT',
              requestUri: '/accounts/{AwsAccountId}/dashboards/{DashboardId}/linked-entities'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'DashboardId', 'LinkEntities'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                DashboardId: {
                  location: 'uri',
                  locationName: 'DashboardId'
                },
                LinkEntities: {
                  shape: 'Snc'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                RequestId: {},
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                },
                DashboardArn: {},
                LinkEntities: {
                  shape: 'Snc'
                }
              }
            }
          },
          UpdateDashboardPermissions: {
            http: {
              method: 'PUT',
              requestUri: '/accounts/{AwsAccountId}/dashboards/{DashboardId}/permissions'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'DashboardId'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                DashboardId: {
                  location: 'uri',
                  locationName: 'DashboardId'
                },
                GrantPermissions: {
                  shape: 'S1bx'
                },
                RevokePermissions: {
                  shape: 'S1bx'
                },
                GrantLinkPermissions: {
                  shape: 'S1c4'
                },
                RevokeLinkPermissions: {
                  shape: 'S1c4'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                DashboardArn: {},
                DashboardId: {},
                Permissions: {
                  shape: 'S19'
                },
                RequestId: {},
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                },
                LinkSharingConfiguration: {
                  shape: 'Snb'
                }
              }
            }
          },
          UpdateDashboardPublishedVersion: {
            http: {
              method: 'PUT',
              requestUri: '/accounts/{AwsAccountId}/dashboards/{DashboardId}/versions/{VersionNumber}'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'DashboardId', 'VersionNumber'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                DashboardId: {
                  location: 'uri',
                  locationName: 'DashboardId'
                },
                VersionNumber: {
                  location: 'uri',
                  locationName: 'VersionNumber',
                  type: 'long'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                DashboardId: {},
                DashboardArn: {},
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                },
                RequestId: {}
              }
            }
          },
          UpdateDataSet: {
            http: {
              method: 'PUT',
              requestUri: '/accounts/{AwsAccountId}/data-sets/{DataSetId}'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'DataSetId', 'Name', 'PhysicalTableMap', 'ImportMode'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                DataSetId: {
                  location: 'uri',
                  locationName: 'DataSetId'
                },
                Name: {},
                PhysicalTableMap: {
                  shape: 'Sni'
                },
                LogicalTableMap: {
                  shape: 'So2'
                },
                ImportMode: {},
                ColumnGroups: {
                  shape: 'Sp9'
                },
                FieldFolders: {
                  shape: 'Spf'
                },
                RowLevelPermissionDataSet: {
                  shape: 'Spk'
                },
                RowLevelPermissionTagConfiguration: {
                  shape: 'Spo'
                },
                ColumnLevelPermissionRules: {
                  shape: 'Spw'
                },
                DataSetUsageConfiguration: {
                  shape: 'Sq0'
                },
                DatasetParameters: {
                  shape: 'Sq1'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                DataSetId: {},
                IngestionArn: {},
                IngestionId: {},
                RequestId: {},
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                }
              }
            }
          },
          UpdateDataSetPermissions: {
            http: {
              requestUri: '/accounts/{AwsAccountId}/data-sets/{DataSetId}/permissions'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'DataSetId'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                DataSetId: {
                  location: 'uri',
                  locationName: 'DataSetId'
                },
                GrantPermissions: {
                  shape: 'S19'
                },
                RevokePermissions: {
                  shape: 'S19'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                DataSetArn: {},
                DataSetId: {},
                RequestId: {},
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                }
              }
            }
          },
          UpdateDataSource: {
            http: {
              method: 'PUT',
              requestUri: '/accounts/{AwsAccountId}/data-sources/{DataSourceId}'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'DataSourceId', 'Name'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                DataSourceId: {
                  location: 'uri',
                  locationName: 'DataSourceId'
                },
                Name: {},
                DataSourceParameters: {
                  shape: 'Sqg'
                },
                Credentials: {
                  shape: 'Srx'
                },
                VpcConnectionProperties: {
                  shape: 'Ss4'
                },
                SslProperties: {
                  shape: 'Ss5'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                DataSourceId: {},
                UpdateStatus: {},
                RequestId: {},
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                }
              }
            }
          },
          UpdateDataSourcePermissions: {
            http: {
              requestUri: '/accounts/{AwsAccountId}/data-sources/{DataSourceId}/permissions'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'DataSourceId'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                DataSourceId: {
                  location: 'uri',
                  locationName: 'DataSourceId'
                },
                GrantPermissions: {
                  shape: 'S19'
                },
                RevokePermissions: {
                  shape: 'S19'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                DataSourceArn: {},
                DataSourceId: {},
                RequestId: {},
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                }
              }
            }
          },
          UpdateFolder: {
            http: {
              method: 'PUT',
              requestUri: '/accounts/{AwsAccountId}/folders/{FolderId}'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'FolderId', 'Name'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                FolderId: {
                  location: 'uri',
                  locationName: 'FolderId'
                },
                Name: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                },
                Arn: {},
                FolderId: {},
                RequestId: {}
              }
            }
          },
          UpdateFolderPermissions: {
            http: {
              method: 'PUT',
              requestUri: '/accounts/{AwsAccountId}/folders/{FolderId}/permissions'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'FolderId'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                FolderId: {
                  location: 'uri',
                  locationName: 'FolderId'
                },
                GrantPermissions: {
                  shape: 'S19'
                },
                RevokePermissions: {
                  shape: 'S19'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Status: {
                  type: 'integer'
                },
                Arn: {},
                FolderId: {},
                Permissions: {
                  shape: 'S19'
                },
                RequestId: {}
              }
            }
          },
          UpdateGroup: {
            http: {
              method: 'PUT',
              requestUri: '/accounts/{AwsAccountId}/namespaces/{Namespace}/groups/{GroupName}'
            },
            input: {
              type: 'structure',
              required: ['GroupName', 'AwsAccountId', 'Namespace'],
              members: {
                GroupName: {
                  location: 'uri',
                  locationName: 'GroupName'
                },
                Description: {},
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                Namespace: {
                  location: 'uri',
                  locationName: 'Namespace'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Group: {
                  shape: 'Ssl'
                },
                RequestId: {},
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                }
              }
            }
          },
          UpdateIAMPolicyAssignment: {
            http: {
              method: 'PUT',
              requestUri: '/accounts/{AwsAccountId}/namespaces/{Namespace}/iam-policy-assignments/{AssignmentName}'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'AssignmentName', 'Namespace'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                AssignmentName: {
                  location: 'uri',
                  locationName: 'AssignmentName'
                },
                Namespace: {
                  location: 'uri',
                  locationName: 'Namespace'
                },
                AssignmentStatus: {},
                PolicyArn: {},
                Identities: {
                  shape: 'Sst'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AssignmentName: {},
                AssignmentId: {},
                PolicyArn: {},
                Identities: {
                  shape: 'Sst'
                },
                AssignmentStatus: {},
                RequestId: {},
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                }
              }
            }
          },
          UpdateIdentityPropagationConfig: {
            http: {
              requestUri: '/accounts/{AwsAccountId}/identity-propagation-config/{Service}'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'Service'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                Service: {
                  location: 'uri',
                  locationName: 'Service'
                },
                AuthorizedTargets: {
                  shape: 'S18n'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                RequestId: {},
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                }
              }
            }
          },
          UpdateIpRestriction: {
            http: {
              requestUri: '/accounts/{AwsAccountId}/ip-restriction'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                IpRestrictionRuleMap: {
                  shape: 'S149'
                },
                VpcIdRestrictionRuleMap: {
                  shape: 'S14c'
                },
                VpcEndpointIdRestrictionRuleMap: {
                  shape: 'S14f'
                },
                Enabled: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AwsAccountId: {},
                RequestId: {},
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                }
              }
            }
          },
          UpdateKeyRegistration: {
            http: {
              requestUri: '/accounts/{AwsAccountId}/key-registration'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'KeyRegistration'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                KeyRegistration: {
                  shape: 'S14k'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                FailedKeyRegistration: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Message', 'StatusCode', 'SenderFault'],
                    members: {
                      KeyArn: {},
                      Message: {},
                      StatusCode: {
                        type: 'integer'
                      },
                      SenderFault: {
                        type: 'boolean'
                      }
                    }
                  }
                },
                SuccessfulKeyRegistration: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['KeyArn', 'StatusCode'],
                    members: {
                      KeyArn: {},
                      StatusCode: {
                        type: 'integer'
                      }
                    }
                  }
                },
                RequestId: {}
              }
            }
          },
          UpdatePublicSharingSettings: {
            http: {
              method: 'PUT',
              requestUri: '/accounts/{AwsAccountId}/public-sharing-settings'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                PublicSharingEnabled: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                RequestId: {},
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                }
              }
            }
          },
          UpdateRefreshSchedule: {
            http: {
              method: 'PUT',
              requestUri: '/accounts/{AwsAccountId}/data-sets/{DataSetId}/refresh-schedules'
            },
            input: {
              type: 'structure',
              required: ['DataSetId', 'AwsAccountId', 'Schedule'],
              members: {
                DataSetId: {
                  location: 'uri',
                  locationName: 'DataSetId'
                },
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                Schedule: {
                  shape: 'St6'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                },
                RequestId: {},
                ScheduleId: {},
                Arn: {}
              }
            }
          },
          UpdateRoleCustomPermission: {
            http: {
              method: 'PUT',
              requestUri: '/accounts/{AwsAccountId}/namespaces/{Namespace}/roles/{Role}/custom-permission'
            },
            input: {
              type: 'structure',
              required: ['CustomPermissionsName', 'Role', 'AwsAccountId', 'Namespace'],
              members: {
                CustomPermissionsName: {},
                Role: {
                  location: 'uri',
                  locationName: 'Role'
                },
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                Namespace: {
                  location: 'uri',
                  locationName: 'Namespace'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                RequestId: {},
                Status: {
                  type: 'integer'
                }
              }
            }
          },
          UpdateSPICECapacityConfiguration: {
            http: {
              requestUri: '/accounts/{AwsAccountId}/spice-capacity-configuration'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'PurchaseMode'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                PurchaseMode: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                RequestId: {},
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                }
              }
            }
          },
          UpdateTemplate: {
            http: {
              method: 'PUT',
              requestUri: '/accounts/{AwsAccountId}/templates/{TemplateId}'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'TemplateId'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                TemplateId: {
                  location: 'uri',
                  locationName: 'TemplateId'
                },
                SourceEntity: {
                  shape: 'Sti'
                },
                VersionDescription: {},
                Name: {},
                Definition: {
                  shape: 'Stl'
                },
                ValidationStrategy: {
                  shape: 'Smn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                TemplateId: {},
                Arn: {},
                VersionArn: {},
                CreationStatus: {},
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                },
                RequestId: {}
              }
            }
          },
          UpdateTemplateAlias: {
            http: {
              method: 'PUT',
              requestUri: '/accounts/{AwsAccountId}/templates/{TemplateId}/aliases/{AliasName}'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'TemplateId', 'AliasName', 'TemplateVersionNumber'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                TemplateId: {
                  location: 'uri',
                  locationName: 'TemplateId'
                },
                AliasName: {
                  location: 'uri',
                  locationName: 'AliasName'
                },
                TemplateVersionNumber: {
                  type: 'long'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                TemplateAlias: {
                  shape: 'Su0'
                },
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                },
                RequestId: {}
              }
            }
          },
          UpdateTemplatePermissions: {
            http: {
              method: 'PUT',
              requestUri: '/accounts/{AwsAccountId}/templates/{TemplateId}/permissions'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'TemplateId'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                TemplateId: {
                  location: 'uri',
                  locationName: 'TemplateId'
                },
                GrantPermissions: {
                  shape: 'S1bx'
                },
                RevokePermissions: {
                  shape: 'S1bx'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                TemplateId: {},
                TemplateArn: {},
                Permissions: {
                  shape: 'S19'
                },
                RequestId: {},
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                }
              }
            }
          },
          UpdateTheme: {
            http: {
              method: 'PUT',
              requestUri: '/accounts/{AwsAccountId}/themes/{ThemeId}'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'ThemeId', 'BaseThemeId'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                ThemeId: {
                  location: 'uri',
                  locationName: 'ThemeId'
                },
                Name: {},
                BaseThemeId: {},
                VersionDescription: {},
                Configuration: {
                  shape: 'Su3'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ThemeId: {},
                Arn: {},
                VersionArn: {},
                CreationStatus: {},
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                },
                RequestId: {}
              }
            }
          },
          UpdateThemeAlias: {
            http: {
              method: 'PUT',
              requestUri: '/accounts/{AwsAccountId}/themes/{ThemeId}/aliases/{AliasName}'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'ThemeId', 'AliasName', 'ThemeVersionNumber'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                ThemeId: {
                  location: 'uri',
                  locationName: 'ThemeId'
                },
                AliasName: {
                  location: 'uri',
                  locationName: 'AliasName'
                },
                ThemeVersionNumber: {
                  type: 'long'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ThemeAlias: {
                  shape: 'Suj'
                },
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                },
                RequestId: {}
              }
            }
          },
          UpdateThemePermissions: {
            http: {
              method: 'PUT',
              requestUri: '/accounts/{AwsAccountId}/themes/{ThemeId}/permissions'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'ThemeId'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                ThemeId: {
                  location: 'uri',
                  locationName: 'ThemeId'
                },
                GrantPermissions: {
                  shape: 'S1bx'
                },
                RevokePermissions: {
                  shape: 'S1bx'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ThemeId: {},
                ThemeArn: {},
                Permissions: {
                  shape: 'S19'
                },
                RequestId: {},
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                }
              }
            }
          },
          UpdateTopic: {
            http: {
              method: 'PUT',
              requestUri: '/accounts/{AwsAccountId}/topics/{TopicId}'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'TopicId', 'Topic'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                TopicId: {
                  location: 'uri',
                  locationName: 'TopicId'
                },
                Topic: {
                  shape: 'Sum'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                TopicId: {},
                Arn: {},
                RefreshArn: {},
                RequestId: {},
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                }
              }
            }
          },
          UpdateTopicPermissions: {
            http: {
              method: 'PUT',
              requestUri: '/accounts/{AwsAccountId}/topics/{TopicId}/permissions'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'TopicId'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                TopicId: {
                  location: 'uri',
                  locationName: 'TopicId'
                },
                GrantPermissions: {
                  shape: 'S1bx'
                },
                RevokePermissions: {
                  shape: 'S1bx'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                TopicId: {},
                TopicArn: {},
                Permissions: {
                  shape: 'S19'
                },
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                },
                RequestId: {}
              }
            }
          },
          UpdateTopicRefreshSchedule: {
            http: {
              method: 'PUT',
              requestUri: '/accounts/{AwsAccountId}/topics/{TopicId}/schedules/{DatasetId}'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'TopicId', 'DatasetId', 'RefreshSchedule'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                TopicId: {
                  location: 'uri',
                  locationName: 'TopicId'
                },
                DatasetId: {
                  location: 'uri',
                  locationName: 'DatasetId'
                },
                RefreshSchedule: {
                  shape: 'Swb'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                TopicId: {},
                TopicArn: {},
                DatasetArn: {},
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                },
                RequestId: {}
              }
            }
          },
          UpdateUser: {
            http: {
              method: 'PUT',
              requestUri: '/accounts/{AwsAccountId}/namespaces/{Namespace}/users/{UserName}'
            },
            input: {
              type: 'structure',
              required: ['UserName', 'AwsAccountId', 'Namespace', 'Email', 'Role'],
              members: {
                UserName: {
                  location: 'uri',
                  locationName: 'UserName'
                },
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                Namespace: {
                  location: 'uri',
                  locationName: 'Namespace'
                },
                Email: {},
                Role: {},
                CustomPermissionsName: {},
                UnapplyCustomPermissions: {
                  type: 'boolean'
                },
                ExternalLoginFederationProviderType: {},
                CustomFederationProviderUrl: {},
                ExternalLoginId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                User: {
                  shape: 'S15y'
                },
                RequestId: {},
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                }
              }
            }
          },
          UpdateVPCConnection: {
            http: {
              method: 'PUT',
              requestUri: '/accounts/{AwsAccountId}/vpc-connections/{VPCConnectionId}'
            },
            input: {
              type: 'structure',
              required: ['AwsAccountId', 'VPCConnectionId', 'Name', 'SubnetIds', 'SecurityGroupIds', 'RoleArn'],
              members: {
                AwsAccountId: {
                  location: 'uri',
                  locationName: 'AwsAccountId'
                },
                VPCConnectionId: {
                  location: 'uri',
                  locationName: 'VPCConnectionId'
                },
                Name: {},
                SubnetIds: {
                  shape: 'Swg'
                },
                SecurityGroupIds: {
                  shape: 'Swi'
                },
                DnsResolvers: {
                  shape: 'Swk'
                },
                RoleArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                VPCConnectionId: {},
                UpdateStatus: {},
                AvailabilityStatus: {},
                RequestId: {},
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                }
              }
            }
          }
        },
        shapes: {
          Sa: {
            type: 'structure',
            members: {
              DefaultTheme: {},
              DefaultEmailCustomizationTemplate: {}
            }
          },
          Sb: {
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
          Sk: {
            type: 'list',
            member: {}
          },
          Sr: {
            type: 'structure',
            members: {
              StringParameters: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['Name', 'Values'],
                  members: {
                    Name: {},
                    Values: {
                      shape: 'Sv'
                    }
                  }
                }
              },
              IntegerParameters: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['Name', 'Values'],
                  members: {
                    Name: {},
                    Values: {
                      type: 'list',
                      member: {
                        shape: 'S10'
                      }
                    }
                  }
                }
              },
              DecimalParameters: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['Name', 'Values'],
                  members: {
                    Name: {},
                    Values: {
                      type: 'list',
                      member: {
                        shape: 'S14'
                      }
                    }
                  }
                }
              },
              DateTimeParameters: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['Name', 'Values'],
                  members: {
                    Name: {},
                    Values: {
                      type: 'list',
                      member: {
                        shape: 'S18'
                      }
                    }
                  }
                }
              }
            }
          },
          Sv: {
            type: 'list',
            member: {
              shape: 'Sw'
            }
          },
          Sw: {
            type: 'string',
            sensitive: true
          },
          S10: {
            type: 'long',
            sensitive: true
          },
          S14: {
            type: 'double',
            sensitive: true
          },
          S18: {
            type: 'timestamp',
            sensitive: true
          },
          S19: {
            type: 'list',
            member: {
              shape: 'S1a'
            }
          },
          S1a: {
            type: 'structure',
            required: ['Principal', 'Actions'],
            members: {
              Principal: {},
              Actions: {
                shape: 'S1c'
              }
            }
          },
          S1c: {
            type: 'list',
            member: {}
          },
          S1d: {
            type: 'structure',
            members: {
              SourceTemplate: {
                type: 'structure',
                required: ['DataSetReferences', 'Arn'],
                members: {
                  DataSetReferences: {
                    shape: 'S1f'
                  },
                  Arn: {}
                }
              }
            }
          },
          S1f: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['DataSetPlaceholder', 'DataSetArn'],
              members: {
                DataSetPlaceholder: {},
                DataSetArn: {}
              }
            }
          },
          S1h: {
            type: 'structure',
            required: ['DataSetIdentifierDeclarations'],
            members: {
              DataSetIdentifierDeclarations: {
                shape: 'S1i'
              },
              Sheets: {
                shape: 'S1l'
              },
              CalculatedFields: {
                shape: 'Skb'
              },
              ParameterDeclarations: {
                shape: 'Ske'
              },
              FilterGroups: {
                shape: 'Sky'
              },
              ColumnConfigurations: {
                shape: 'Sm7'
              },
              AnalysisDefaults: {
                shape: 'Sme'
              },
              Options: {
                shape: 'Sml'
              }
            }
          },
          S1i: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Identifier', 'DataSetArn'],
              members: {
                Identifier: {},
                DataSetArn: {}
              }
            }
          },
          S1l: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['SheetId'],
              members: {
                SheetId: {},
                Title: {},
                Description: {},
                Name: {},
                ParameterControls: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      DateTimePicker: {
                        type: 'structure',
                        required: ['ParameterControlId', 'Title', 'SourceParameterName'],
                        members: {
                          ParameterControlId: {},
                          Title: {},
                          SourceParameterName: {},
                          DisplayOptions: {
                            shape: 'S1v'
                          }
                        }
                      },
                      List: {
                        type: 'structure',
                        required: ['ParameterControlId', 'Title', 'SourceParameterName'],
                        members: {
                          ParameterControlId: {},
                          Title: {},
                          SourceParameterName: {},
                          DisplayOptions: {
                            shape: 'S2a'
                          },
                          Type: {},
                          SelectableValues: {
                            shape: 'S2e'
                          },
                          CascadingControlConfiguration: {
                            shape: 'S2i'
                          }
                        }
                      },
                      Dropdown: {
                        type: 'structure',
                        required: ['ParameterControlId', 'Title', 'SourceParameterName'],
                        members: {
                          ParameterControlId: {},
                          Title: {},
                          SourceParameterName: {},
                          DisplayOptions: {
                            shape: 'S2m'
                          },
                          Type: {},
                          SelectableValues: {
                            shape: 'S2e'
                          },
                          CascadingControlConfiguration: {
                            shape: 'S2i'
                          }
                        }
                      },
                      TextField: {
                        type: 'structure',
                        required: ['ParameterControlId', 'Title', 'SourceParameterName'],
                        members: {
                          ParameterControlId: {},
                          Title: {},
                          SourceParameterName: {},
                          DisplayOptions: {
                            shape: 'S2o'
                          }
                        }
                      },
                      TextArea: {
                        type: 'structure',
                        required: ['ParameterControlId', 'Title', 'SourceParameterName'],
                        members: {
                          ParameterControlId: {},
                          Title: {},
                          SourceParameterName: {},
                          Delimiter: {},
                          DisplayOptions: {
                            shape: 'S2s'
                          }
                        }
                      },
                      Slider: {
                        type: 'structure',
                        required: ['ParameterControlId', 'Title', 'SourceParameterName', 'MaximumValue', 'MinimumValue', 'StepSize'],
                        members: {
                          ParameterControlId: {},
                          Title: {},
                          SourceParameterName: {},
                          DisplayOptions: {
                            shape: 'S2u'
                          },
                          MaximumValue: {
                            type: 'double'
                          },
                          MinimumValue: {
                            type: 'double'
                          },
                          StepSize: {
                            type: 'double'
                          }
                        }
                      }
                    }
                  }
                },
                FilterControls: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      DateTimePicker: {
                        type: 'structure',
                        required: ['FilterControlId', 'Title', 'SourceFilterId'],
                        members: {
                          FilterControlId: {},
                          Title: {},
                          SourceFilterId: {},
                          DisplayOptions: {
                            shape: 'S1v'
                          },
                          Type: {}
                        }
                      },
                      List: {
                        type: 'structure',
                        required: ['FilterControlId', 'Title', 'SourceFilterId'],
                        members: {
                          FilterControlId: {},
                          Title: {},
                          SourceFilterId: {},
                          DisplayOptions: {
                            shape: 'S2a'
                          },
                          Type: {},
                          SelectableValues: {
                            shape: 'S31'
                          },
                          CascadingControlConfiguration: {
                            shape: 'S2i'
                          }
                        }
                      },
                      Dropdown: {
                        type: 'structure',
                        required: ['FilterControlId', 'Title', 'SourceFilterId'],
                        members: {
                          FilterControlId: {},
                          Title: {},
                          SourceFilterId: {},
                          DisplayOptions: {
                            shape: 'S2m'
                          },
                          Type: {},
                          SelectableValues: {
                            shape: 'S31'
                          },
                          CascadingControlConfiguration: {
                            shape: 'S2i'
                          }
                        }
                      },
                      TextField: {
                        type: 'structure',
                        required: ['FilterControlId', 'Title', 'SourceFilterId'],
                        members: {
                          FilterControlId: {},
                          Title: {},
                          SourceFilterId: {},
                          DisplayOptions: {
                            shape: 'S2o'
                          }
                        }
                      },
                      TextArea: {
                        type: 'structure',
                        required: ['FilterControlId', 'Title', 'SourceFilterId'],
                        members: {
                          FilterControlId: {},
                          Title: {},
                          SourceFilterId: {},
                          Delimiter: {},
                          DisplayOptions: {
                            shape: 'S2s'
                          }
                        }
                      },
                      Slider: {
                        type: 'structure',
                        required: ['FilterControlId', 'Title', 'SourceFilterId', 'MaximumValue', 'MinimumValue', 'StepSize'],
                        members: {
                          FilterControlId: {},
                          Title: {},
                          SourceFilterId: {},
                          DisplayOptions: {
                            shape: 'S2u'
                          },
                          Type: {},
                          MaximumValue: {
                            type: 'double'
                          },
                          MinimumValue: {
                            type: 'double'
                          },
                          StepSize: {
                            type: 'double'
                          }
                        }
                      },
                      RelativeDateTime: {
                        type: 'structure',
                        required: ['FilterControlId', 'Title', 'SourceFilterId'],
                        members: {
                          FilterControlId: {},
                          Title: {},
                          SourceFilterId: {},
                          DisplayOptions: {
                            shape: 'S38'
                          }
                        }
                      },
                      CrossSheet: {
                        type: 'structure',
                        required: ['FilterControlId', 'SourceFilterId'],
                        members: {
                          FilterControlId: {},
                          SourceFilterId: {},
                          CascadingControlConfiguration: {
                            shape: 'S2i'
                          }
                        }
                      }
                    }
                  }
                },
                Visuals: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      TableVisual: {
                        type: 'structure',
                        required: ['VisualId'],
                        members: {
                          VisualId: {},
                          Title: {
                            shape: 'S3d'
                          },
                          Subtitle: {
                            shape: 'S3h'
                          },
                          ChartConfiguration: {
                            type: 'structure',
                            members: {
                              FieldWells: {
                                type: 'structure',
                                members: {
                                  TableAggregatedFieldWells: {
                                    type: 'structure',
                                    members: {
                                      GroupBy: {
                                        shape: 'S3o'
                                      },
                                      Values: {
                                        shape: 'S4g'
                                      }
                                    }
                                  },
                                  TableUnaggregatedFieldWells: {
                                    type: 'structure',
                                    members: {
                                      Values: {
                                        type: 'list',
                                        member: {
                                          type: 'structure',
                                          required: ['FieldId', 'Column'],
                                          members: {
                                            FieldId: {},
                                            Column: {
                                              shape: 'S2g'
                                            },
                                            FormatConfiguration: {
                                              shape: 'S4w'
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              SortConfiguration: {
                                type: 'structure',
                                members: {
                                  RowSort: {
                                    type: 'list',
                                    member: {
                                      shape: 'S4z'
                                    }
                                  },
                                  PaginationConfiguration: {
                                    shape: 'S56'
                                  }
                                }
                              },
                              TableOptions: {
                                type: 'structure',
                                members: {
                                  Orientation: {},
                                  HeaderStyle: {
                                    shape: 'S5b'
                                  },
                                  CellStyle: {
                                    shape: 'S5b'
                                  },
                                  RowAlternateColorOptions: {
                                    shape: 'S5l'
                                  }
                                }
                              },
                              TotalOptions: {
                                type: 'structure',
                                members: {
                                  TotalsVisibility: {},
                                  Placement: {},
                                  ScrollStatus: {},
                                  CustomLabel: {},
                                  TotalCellStyle: {
                                    shape: 'S5b'
                                  },
                                  TotalAggregationOptions: {
                                    shape: 'S5r'
                                  }
                                }
                              },
                              FieldOptions: {
                                type: 'structure',
                                members: {
                                  SelectedFieldOptions: {
                                    type: 'list',
                                    member: {
                                      type: 'structure',
                                      required: ['FieldId'],
                                      members: {
                                        FieldId: {},
                                        Width: {},
                                        CustomLabel: {},
                                        Visibility: {},
                                        URLStyling: {
                                          type: 'structure',
                                          members: {
                                            LinkConfiguration: {
                                              type: 'structure',
                                              required: ['Target', 'Content'],
                                              members: {
                                                Target: {},
                                                Content: {
                                                  type: 'structure',
                                                  members: {
                                                    CustomTextContent: {
                                                      type: 'structure',
                                                      required: ['FontConfiguration'],
                                                      members: {
                                                        Value: {},
                                                        FontConfiguration: {
                                                          shape: 'S1y'
                                                        }
                                                      }
                                                    },
                                                    CustomIconContent: {
                                                      type: 'structure',
                                                      members: {
                                                        Icon: {}
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            },
                                            ImageConfiguration: {
                                              type: 'structure',
                                              members: {
                                                SizingOptions: {
                                                  type: 'structure',
                                                  members: {
                                                    TableCellImageScalingConfiguration: {}
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  },
                                  Order: {
                                    type: 'list',
                                    member: {}
                                  },
                                  PinnedFieldOptions: {
                                    type: 'structure',
                                    members: {
                                      PinnedLeftFields: {
                                        type: 'list',
                                        member: {}
                                      }
                                    }
                                  }
                                }
                              },
                              PaginatedReportOptions: {
                                type: 'structure',
                                members: {
                                  VerticalOverflowVisibility: {},
                                  OverflowColumnHeaderVisibility: {}
                                }
                              },
                              TableInlineVisualizations: {
                                type: 'list',
                                member: {
                                  type: 'structure',
                                  members: {
                                    DataBars: {
                                      type: 'structure',
                                      required: ['FieldId'],
                                      members: {
                                        FieldId: {},
                                        PositiveColor: {},
                                        NegativeColor: {}
                                      }
                                    }
                                  }
                                }
                              },
                              Interactions: {
                                shape: 'S6h'
                              }
                            }
                          },
                          ConditionalFormatting: {
                            type: 'structure',
                            members: {
                              ConditionalFormattingOptions: {
                                type: 'list',
                                member: {
                                  type: 'structure',
                                  members: {
                                    Cell: {
                                      type: 'structure',
                                      required: ['FieldId'],
                                      members: {
                                        FieldId: {},
                                        TextFormat: {
                                          shape: 'S6p'
                                        }
                                      }
                                    },
                                    Row: {
                                      type: 'structure',
                                      members: {
                                        BackgroundColor: {
                                          shape: 'S6q'
                                        },
                                        TextColor: {
                                          shape: 'S6q'
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          },
                          Actions: {
                            shape: 'S76'
                          }
                        }
                      },
                      PivotTableVisual: {
                        type: 'structure',
                        required: ['VisualId'],
                        members: {
                          VisualId: {},
                          Title: {
                            shape: 'S3d'
                          },
                          Subtitle: {
                            shape: 'S3h'
                          },
                          ChartConfiguration: {
                            type: 'structure',
                            members: {
                              FieldWells: {
                                type: 'structure',
                                members: {
                                  PivotTableAggregatedFieldWells: {
                                    type: 'structure',
                                    members: {
                                      Rows: {
                                        shape: 'S88'
                                      },
                                      Columns: {
                                        shape: 'S88'
                                      },
                                      Values: {
                                        type: 'list',
                                        member: {
                                          shape: 'S4h'
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              SortConfiguration: {
                                type: 'structure',
                                members: {
                                  FieldSortOptions: {
                                    type: 'list',
                                    member: {
                                      type: 'structure',
                                      required: ['FieldId', 'SortBy'],
                                      members: {
                                        FieldId: {},
                                        SortBy: {
                                          type: 'structure',
                                          members: {
                                            Field: {
                                              shape: 'S50'
                                            },
                                            Column: {
                                              shape: 'S52'
                                            },
                                            DataPath: {
                                              type: 'structure',
                                              required: ['Direction', 'SortPaths'],
                                              members: {
                                                Direction: {},
                                                SortPaths: {
                                                  shape: 'S8f'
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              TableOptions: {
                                type: 'structure',
                                members: {
                                  MetricPlacement: {},
                                  SingleMetricVisibility: {},
                                  ColumnNamesVisibility: {},
                                  ToggleButtonsVisibility: {},
                                  ColumnHeaderStyle: {
                                    shape: 'S5b'
                                  },
                                  RowHeaderStyle: {
                                    shape: 'S5b'
                                  },
                                  CellStyle: {
                                    shape: 'S5b'
                                  },
                                  RowFieldNamesStyle: {
                                    shape: 'S5b'
                                  },
                                  RowAlternateColorOptions: {
                                    shape: 'S5l'
                                  },
                                  CollapsedRowDimensionsVisibility: {},
                                  RowsLayout: {},
                                  RowsLabelOptions: {
                                    type: 'structure',
                                    members: {
                                      Visibility: {},
                                      CustomLabel: {}
                                    }
                                  },
                                  DefaultCellWidth: {}
                                }
                              },
                              TotalOptions: {
                                type: 'structure',
                                members: {
                                  RowSubtotalOptions: {
                                    shape: 'S8q'
                                  },
                                  ColumnSubtotalOptions: {
                                    shape: 'S8q'
                                  },
                                  RowTotalOptions: {
                                    shape: 'S8x'
                                  },
                                  ColumnTotalOptions: {
                                    shape: 'S8x'
                                  }
                                }
                              },
                              FieldOptions: {
                                type: 'structure',
                                members: {
                                  SelectedFieldOptions: {
                                    type: 'list',
                                    member: {
                                      type: 'structure',
                                      required: ['FieldId'],
                                      members: {
                                        FieldId: {},
                                        CustomLabel: {},
                                        Visibility: {}
                                      }
                                    }
                                  },
                                  DataPathOptions: {
                                    type: 'list',
                                    member: {
                                      type: 'structure',
                                      required: ['DataPathList'],
                                      members: {
                                        DataPathList: {
                                          shape: 'S8f'
                                        },
                                        Width: {}
                                      }
                                    }
                                  },
                                  CollapseStateOptions: {
                                    type: 'list',
                                    member: {
                                      type: 'structure',
                                      required: ['Target'],
                                      members: {
                                        Target: {
                                          type: 'structure',
                                          members: {
                                            FieldId: {},
                                            FieldDataPathValues: {
                                              shape: 'S8f'
                                            }
                                          }
                                        },
                                        State: {}
                                      }
                                    }
                                  }
                                }
                              },
                              PaginatedReportOptions: {
                                type: 'structure',
                                members: {
                                  VerticalOverflowVisibility: {},
                                  OverflowColumnHeaderVisibility: {}
                                }
                              },
                              Interactions: {
                                shape: 'S6h'
                              }
                            }
                          },
                          ConditionalFormatting: {
                            type: 'structure',
                            members: {
                              ConditionalFormattingOptions: {
                                type: 'list',
                                member: {
                                  type: 'structure',
                                  members: {
                                    Cell: {
                                      type: 'structure',
                                      required: ['FieldId'],
                                      members: {
                                        FieldId: {},
                                        TextFormat: {
                                          shape: 'S6p'
                                        },
                                        Scope: {
                                          shape: 'S9c'
                                        },
                                        Scopes: {
                                          type: 'list',
                                          member: {
                                            shape: 'S9c'
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          },
                          Actions: {
                            shape: 'S76'
                          }
                        }
                      },
                      BarChartVisual: {
                        type: 'structure',
                        required: ['VisualId'],
                        members: {
                          VisualId: {},
                          Title: {
                            shape: 'S3d'
                          },
                          Subtitle: {
                            shape: 'S3h'
                          },
                          ChartConfiguration: {
                            type: 'structure',
                            members: {
                              FieldWells: {
                                type: 'structure',
                                members: {
                                  BarChartAggregatedFieldWells: {
                                    type: 'structure',
                                    members: {
                                      Category: {
                                        shape: 'S3o'
                                      },
                                      Values: {
                                        shape: 'S4g'
                                      },
                                      Colors: {
                                        shape: 'S3o'
                                      },
                                      SmallMultiples: {
                                        shape: 'S9j'
                                      }
                                    }
                                  }
                                }
                              },
                              SortConfiguration: {
                                type: 'structure',
                                members: {
                                  CategorySort: {
                                    shape: 'S9l'
                                  },
                                  CategoryItemsLimit: {
                                    shape: 'S9m'
                                  },
                                  ColorSort: {
                                    shape: 'S9l'
                                  },
                                  ColorItemsLimit: {
                                    shape: 'S9m'
                                  },
                                  SmallMultiplesSort: {
                                    shape: 'S9l'
                                  },
                                  SmallMultiplesLimitConfiguration: {
                                    shape: 'S9m'
                                  }
                                }
                              },
                              Orientation: {},
                              BarsArrangement: {},
                              VisualPalette: {
                                shape: 'S9q'
                              },
                              SmallMultiplesOptions: {
                                shape: 'S9t'
                              },
                              CategoryAxis: {
                                shape: 'Sa3'
                              },
                              CategoryLabelOptions: {
                                shape: 'Saj'
                              },
                              ValueAxis: {
                                shape: 'Sa3'
                              },
                              ValueLabelOptions: {
                                shape: 'Saj'
                              },
                              ColorLabelOptions: {
                                shape: 'Saj'
                              },
                              Legend: {
                                shape: 'San'
                              },
                              DataLabels: {
                                shape: 'Sap'
                              },
                              Tooltip: {
                                shape: 'Sb0'
                              },
                              ReferenceLines: {
                                shape: 'Sb9'
                              },
                              ContributionAnalysisDefaults: {
                                shape: 'Sbo'
                              },
                              Interactions: {
                                shape: 'S6h'
                              }
                            }
                          },
                          Actions: {
                            shape: 'S76'
                          },
                          ColumnHierarchies: {
                            shape: 'Sbr'
                          }
                        }
                      },
                      KPIVisual: {
                        type: 'structure',
                        required: ['VisualId'],
                        members: {
                          VisualId: {},
                          Title: {
                            shape: 'S3d'
                          },
                          Subtitle: {
                            shape: 'S3h'
                          },
                          ChartConfiguration: {
                            type: 'structure',
                            members: {
                              FieldWells: {
                                type: 'structure',
                                members: {
                                  Values: {
                                    shape: 'S4g'
                                  },
                                  TargetValues: {
                                    shape: 'S4g'
                                  },
                                  TrendGroups: {
                                    shape: 'S3o'
                                  }
                                }
                              },
                              SortConfiguration: {
                                type: 'structure',
                                members: {
                                  TrendGroupSort: {
                                    shape: 'S9l'
                                  }
                                }
                              },
                              KPIOptions: {
                                type: 'structure',
                                members: {
                                  ProgressBar: {
                                    type: 'structure',
                                    members: {
                                      Visibility: {}
                                    }
                                  },
                                  TrendArrows: {
                                    type: 'structure',
                                    members: {
                                      Visibility: {}
                                    }
                                  },
                                  SecondaryValue: {
                                    type: 'structure',
                                    members: {
                                      Visibility: {}
                                    }
                                  },
                                  Comparison: {
                                    shape: 'Sce'
                                  },
                                  PrimaryValueDisplayType: {},
                                  PrimaryValueFontConfiguration: {
                                    shape: 'S1y'
                                  },
                                  SecondaryValueFontConfiguration: {
                                    shape: 'S1y'
                                  },
                                  Sparkline: {
                                    type: 'structure',
                                    required: ['Type'],
                                    members: {
                                      Visibility: {},
                                      Type: {},
                                      Color: {},
                                      TooltipVisibility: {}
                                    }
                                  },
                                  VisualLayoutOptions: {
                                    type: 'structure',
                                    members: {
                                      StandardLayout: {
                                        type: 'structure',
                                        required: ['Type'],
                                        members: {
                                          Type: {}
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              Interactions: {
                                shape: 'S6h'
                              }
                            }
                          },
                          ConditionalFormatting: {
                            type: 'structure',
                            members: {
                              ConditionalFormattingOptions: {
                                type: 'list',
                                member: {
                                  type: 'structure',
                                  members: {
                                    PrimaryValue: {
                                      type: 'structure',
                                      members: {
                                        TextColor: {
                                          shape: 'S6q'
                                        },
                                        Icon: {
                                          shape: 'S6w'
                                        }
                                      }
                                    },
                                    ProgressBar: {
                                      type: 'structure',
                                      members: {
                                        ForegroundColor: {
                                          shape: 'S6q'
                                        }
                                      }
                                    },
                                    ActualValue: {
                                      type: 'structure',
                                      members: {
                                        TextColor: {
                                          shape: 'S6q'
                                        },
                                        Icon: {
                                          shape: 'S6w'
                                        }
                                      }
                                    },
                                    ComparisonValue: {
                                      type: 'structure',
                                      members: {
                                        TextColor: {
                                          shape: 'S6q'
                                        },
                                        Icon: {
                                          shape: 'S6w'
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          },
                          Actions: {
                            shape: 'S76'
                          },
                          ColumnHierarchies: {
                            shape: 'Sbr'
                          }
                        }
                      },
                      PieChartVisual: {
                        type: 'structure',
                        required: ['VisualId'],
                        members: {
                          VisualId: {},
                          Title: {
                            shape: 'S3d'
                          },
                          Subtitle: {
                            shape: 'S3h'
                          },
                          ChartConfiguration: {
                            type: 'structure',
                            members: {
                              FieldWells: {
                                type: 'structure',
                                members: {
                                  PieChartAggregatedFieldWells: {
                                    type: 'structure',
                                    members: {
                                      Category: {
                                        shape: 'S3o'
                                      },
                                      Values: {
                                        shape: 'S4g'
                                      },
                                      SmallMultiples: {
                                        shape: 'S9j'
                                      }
                                    }
                                  }
                                }
                              },
                              SortConfiguration: {
                                type: 'structure',
                                members: {
                                  CategorySort: {
                                    shape: 'S9l'
                                  },
                                  CategoryItemsLimit: {
                                    shape: 'S9m'
                                  },
                                  SmallMultiplesSort: {
                                    shape: 'S9l'
                                  },
                                  SmallMultiplesLimitConfiguration: {
                                    shape: 'S9m'
                                  }
                                }
                              },
                              DonutOptions: {
                                type: 'structure',
                                members: {
                                  ArcOptions: {
                                    type: 'structure',
                                    members: {
                                      ArcThickness: {}
                                    }
                                  },
                                  DonutCenterOptions: {
                                    type: 'structure',
                                    members: {
                                      LabelVisibility: {}
                                    }
                                  }
                                }
                              },
                              SmallMultiplesOptions: {
                                shape: 'S9t'
                              },
                              CategoryLabelOptions: {
                                shape: 'Saj'
                              },
                              ValueLabelOptions: {
                                shape: 'Saj'
                              },
                              Legend: {
                                shape: 'San'
                              },
                              DataLabels: {
                                shape: 'Sap'
                              },
                              Tooltip: {
                                shape: 'Sb0'
                              },
                              VisualPalette: {
                                shape: 'S9q'
                              },
                              ContributionAnalysisDefaults: {
                                shape: 'Sbo'
                              },
                              Interactions: {
                                shape: 'S6h'
                              }
                            }
                          },
                          Actions: {
                            shape: 'S76'
                          },
                          ColumnHierarchies: {
                            shape: 'Sbr'
                          }
                        }
                      },
                      GaugeChartVisual: {
                        type: 'structure',
                        required: ['VisualId'],
                        members: {
                          VisualId: {},
                          Title: {
                            shape: 'S3d'
                          },
                          Subtitle: {
                            shape: 'S3h'
                          },
                          ChartConfiguration: {
                            type: 'structure',
                            members: {
                              FieldWells: {
                                type: 'structure',
                                members: {
                                  Values: {
                                    shape: 'S4g'
                                  },
                                  TargetValues: {
                                    shape: 'S4g'
                                  }
                                }
                              },
                              GaugeChartOptions: {
                                type: 'structure',
                                members: {
                                  PrimaryValueDisplayType: {},
                                  Comparison: {
                                    shape: 'Sce'
                                  },
                                  ArcAxis: {
                                    type: 'structure',
                                    members: {
                                      Range: {
                                        type: 'structure',
                                        members: {
                                          Min: {
                                            type: 'double'
                                          },
                                          Max: {
                                            type: 'double'
                                          }
                                        }
                                      },
                                      ReserveRange: {
                                        type: 'integer'
                                      }
                                    }
                                  },
                                  Arc: {
                                    type: 'structure',
                                    members: {
                                      ArcAngle: {
                                        type: 'double'
                                      },
                                      ArcThickness: {}
                                    }
                                  },
                                  PrimaryValueFontConfiguration: {
                                    shape: 'S1y'
                                  }
                                }
                              },
                              DataLabels: {
                                shape: 'Sap'
                              },
                              TooltipOptions: {
                                shape: 'Sb0'
                              },
                              VisualPalette: {
                                shape: 'S9q'
                              },
                              ColorConfiguration: {
                                type: 'structure',
                                members: {
                                  ForegroundColor: {},
                                  BackgroundColor: {}
                                }
                              },
                              Interactions: {
                                shape: 'S6h'
                              }
                            }
                          },
                          ConditionalFormatting: {
                            type: 'structure',
                            members: {
                              ConditionalFormattingOptions: {
                                type: 'list',
                                member: {
                                  type: 'structure',
                                  members: {
                                    PrimaryValue: {
                                      type: 'structure',
                                      members: {
                                        TextColor: {
                                          shape: 'S6q'
                                        },
                                        Icon: {
                                          shape: 'S6w'
                                        }
                                      }
                                    },
                                    Arc: {
                                      type: 'structure',
                                      members: {
                                        ForegroundColor: {
                                          shape: 'S6q'
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          },
                          Actions: {
                            shape: 'S76'
                          }
                        }
                      },
                      LineChartVisual: {
                        type: 'structure',
                        required: ['VisualId'],
                        members: {
                          VisualId: {},
                          Title: {
                            shape: 'S3d'
                          },
                          Subtitle: {
                            shape: 'S3h'
                          },
                          ChartConfiguration: {
                            type: 'structure',
                            members: {
                              FieldWells: {
                                type: 'structure',
                                members: {
                                  LineChartAggregatedFieldWells: {
                                    type: 'structure',
                                    members: {
                                      Category: {
                                        shape: 'S3o'
                                      },
                                      Values: {
                                        shape: 'S4g'
                                      },
                                      Colors: {
                                        shape: 'S3o'
                                      },
                                      SmallMultiples: {
                                        shape: 'S9j'
                                      }
                                    }
                                  }
                                }
                              },
                              SortConfiguration: {
                                type: 'structure',
                                members: {
                                  CategorySort: {
                                    shape: 'S9l'
                                  },
                                  CategoryItemsLimitConfiguration: {
                                    shape: 'S9m'
                                  },
                                  ColorItemsLimitConfiguration: {
                                    shape: 'S9m'
                                  },
                                  SmallMultiplesSort: {
                                    shape: 'S9l'
                                  },
                                  SmallMultiplesLimitConfiguration: {
                                    shape: 'S9m'
                                  }
                                }
                              },
                              ForecastConfigurations: {
                                type: 'list',
                                member: {
                                  type: 'structure',
                                  members: {
                                    ForecastProperties: {
                                      type: 'structure',
                                      members: {
                                        PeriodsForward: {
                                          type: 'integer'
                                        },
                                        PeriodsBackward: {
                                          type: 'integer'
                                        },
                                        UpperBoundary: {
                                          type: 'double'
                                        },
                                        LowerBoundary: {
                                          type: 'double'
                                        },
                                        PredictionInterval: {
                                          type: 'integer'
                                        },
                                        Seasonality: {
                                          type: 'integer'
                                        }
                                      }
                                    },
                                    Scenario: {
                                      type: 'structure',
                                      members: {
                                        WhatIfPointScenario: {
                                          type: 'structure',
                                          required: ['Date', 'Value'],
                                          members: {
                                            Date: {
                                              type: 'timestamp'
                                            },
                                            Value: {
                                              type: 'double'
                                            }
                                          }
                                        },
                                        WhatIfRangeScenario: {
                                          type: 'structure',
                                          required: ['StartDate', 'EndDate', 'Value'],
                                          members: {
                                            StartDate: {
                                              type: 'timestamp'
                                            },
                                            EndDate: {
                                              type: 'timestamp'
                                            },
                                            Value: {
                                              type: 'double'
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              Type: {},
                              SmallMultiplesOptions: {
                                shape: 'S9t'
                              },
                              XAxisDisplayOptions: {
                                shape: 'Sa3'
                              },
                              XAxisLabelOptions: {
                                shape: 'Saj'
                              },
                              PrimaryYAxisDisplayOptions: {
                                shape: 'Sdx'
                              },
                              PrimaryYAxisLabelOptions: {
                                shape: 'Saj'
                              },
                              SecondaryYAxisDisplayOptions: {
                                shape: 'Sdx'
                              },
                              SecondaryYAxisLabelOptions: {
                                shape: 'Saj'
                              },
                              SingleAxisOptions: {
                                shape: 'Se1'
                              },
                              DefaultSeriesSettings: {
                                type: 'structure',
                                members: {
                                  AxisBinding: {},
                                  LineStyleSettings: {
                                    shape: 'Se5'
                                  },
                                  MarkerStyleSettings: {
                                    shape: 'Se8'
                                  }
                                }
                              },
                              Series: {
                                type: 'list',
                                member: {
                                  type: 'structure',
                                  members: {
                                    FieldSeriesItem: {
                                      type: 'structure',
                                      required: ['FieldId', 'AxisBinding'],
                                      members: {
                                        FieldId: {},
                                        AxisBinding: {},
                                        Settings: {
                                          shape: 'Sed'
                                        }
                                      }
                                    },
                                    DataFieldSeriesItem: {
                                      type: 'structure',
                                      required: ['FieldId', 'AxisBinding'],
                                      members: {
                                        FieldId: {},
                                        FieldValue: {
                                          shape: 'Sw'
                                        },
                                        AxisBinding: {},
                                        Settings: {
                                          shape: 'Sed'
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              Legend: {
                                shape: 'San'
                              },
                              DataLabels: {
                                shape: 'Sap'
                              },
                              ReferenceLines: {
                                shape: 'Sb9'
                              },
                              Tooltip: {
                                shape: 'Sb0'
                              },
                              ContributionAnalysisDefaults: {
                                shape: 'Sbo'
                              },
                              VisualPalette: {
                                shape: 'S9q'
                              },
                              Interactions: {
                                shape: 'S6h'
                              }
                            }
                          },
                          Actions: {
                            shape: 'S76'
                          },
                          ColumnHierarchies: {
                            shape: 'Sbr'
                          }
                        }
                      },
                      HeatMapVisual: {
                        type: 'structure',
                        required: ['VisualId'],
                        members: {
                          VisualId: {},
                          Title: {
                            shape: 'S3d'
                          },
                          Subtitle: {
                            shape: 'S3h'
                          },
                          ChartConfiguration: {
                            type: 'structure',
                            members: {
                              FieldWells: {
                                type: 'structure',
                                members: {
                                  HeatMapAggregatedFieldWells: {
                                    type: 'structure',
                                    members: {
                                      Rows: {
                                        shape: 'Sej'
                                      },
                                      Columns: {
                                        shape: 'Sej'
                                      },
                                      Values: {
                                        type: 'list',
                                        member: {
                                          shape: 'S4h'
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              SortConfiguration: {
                                type: 'structure',
                                members: {
                                  HeatMapRowSort: {
                                    shape: 'S9l'
                                  },
                                  HeatMapColumnSort: {
                                    shape: 'S9l'
                                  },
                                  HeatMapRowItemsLimitConfiguration: {
                                    shape: 'S9m'
                                  },
                                  HeatMapColumnItemsLimitConfiguration: {
                                    shape: 'S9m'
                                  }
                                }
                              },
                              RowLabelOptions: {
                                shape: 'Saj'
                              },
                              ColumnLabelOptions: {
                                shape: 'Saj'
                              },
                              ColorScale: {
                                shape: 'Sem'
                              },
                              Legend: {
                                shape: 'San'
                              },
                              DataLabels: {
                                shape: 'Sap'
                              },
                              Tooltip: {
                                shape: 'Sb0'
                              },
                              Interactions: {
                                shape: 'S6h'
                              }
                            }
                          },
                          ColumnHierarchies: {
                            shape: 'Sbr'
                          },
                          Actions: {
                            shape: 'S76'
                          }
                        }
                      },
                      TreeMapVisual: {
                        type: 'structure',
                        required: ['VisualId'],
                        members: {
                          VisualId: {},
                          Title: {
                            shape: 'S3d'
                          },
                          Subtitle: {
                            shape: 'S3h'
                          },
                          ChartConfiguration: {
                            type: 'structure',
                            members: {
                              FieldWells: {
                                type: 'structure',
                                members: {
                                  TreeMapAggregatedFieldWells: {
                                    type: 'structure',
                                    members: {
                                      Groups: {
                                        type: 'list',
                                        member: {
                                          shape: 'S3p'
                                        }
                                      },
                                      Sizes: {
                                        shape: 'Sev'
                                      },
                                      Colors: {
                                        shape: 'Sev'
                                      }
                                    }
                                  }
                                }
                              },
                              SortConfiguration: {
                                type: 'structure',
                                members: {
                                  TreeMapSort: {
                                    shape: 'S9l'
                                  },
                                  TreeMapGroupItemsLimitConfiguration: {
                                    shape: 'S9m'
                                  }
                                }
                              },
                              GroupLabelOptions: {
                                shape: 'Saj'
                              },
                              SizeLabelOptions: {
                                shape: 'Saj'
                              },
                              ColorLabelOptions: {
                                shape: 'Saj'
                              },
                              ColorScale: {
                                shape: 'Sem'
                              },
                              Legend: {
                                shape: 'San'
                              },
                              DataLabels: {
                                shape: 'Sap'
                              },
                              Tooltip: {
                                shape: 'Sb0'
                              },
                              Interactions: {
                                shape: 'S6h'
                              }
                            }
                          },
                          Actions: {
                            shape: 'S76'
                          },
                          ColumnHierarchies: {
                            shape: 'Sbr'
                          }
                        }
                      },
                      GeospatialMapVisual: {
                        type: 'structure',
                        required: ['VisualId'],
                        members: {
                          VisualId: {},
                          Title: {
                            shape: 'S3d'
                          },
                          Subtitle: {
                            shape: 'S3h'
                          },
                          ChartConfiguration: {
                            type: 'structure',
                            members: {
                              FieldWells: {
                                type: 'structure',
                                members: {
                                  GeospatialMapAggregatedFieldWells: {
                                    type: 'structure',
                                    members: {
                                      Geospatial: {
                                        shape: 'S3o'
                                      },
                                      Values: {
                                        shape: 'S4g'
                                      },
                                      Colors: {
                                        shape: 'S3o'
                                      }
                                    }
                                  }
                                }
                              },
                              Legend: {
                                shape: 'San'
                              },
                              Tooltip: {
                                shape: 'Sb0'
                              },
                              WindowOptions: {
                                shape: 'Sf1'
                              },
                              MapStyleOptions: {
                                shape: 'Sf6'
                              },
                              PointStyleOptions: {
                                type: 'structure',
                                members: {
                                  SelectedPointStyle: {},
                                  ClusterMarkerConfiguration: {
                                    type: 'structure',
                                    members: {
                                      ClusterMarker: {
                                        type: 'structure',
                                        members: {
                                          SimpleClusterMarker: {
                                            type: 'structure',
                                            members: {
                                              Color: {}
                                            }
                                          }
                                        }
                                      }
                                    }
                                  },
                                  HeatmapConfiguration: {
                                    type: 'structure',
                                    members: {
                                      HeatmapColor: {
                                        type: 'structure',
                                        members: {
                                          Colors: {
                                            type: 'list',
                                            member: {
                                              type: 'structure',
                                              required: ['Color'],
                                              members: {
                                                Color: {}
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              VisualPalette: {
                                shape: 'S9q'
                              },
                              Interactions: {
                                shape: 'S6h'
                              }
                            }
                          },
                          ColumnHierarchies: {
                            shape: 'Sbr'
                          },
                          Actions: {
                            shape: 'S76'
                          }
                        }
                      },
                      FilledMapVisual: {
                        type: 'structure',
                        required: ['VisualId'],
                        members: {
                          VisualId: {},
                          Title: {
                            shape: 'S3d'
                          },
                          Subtitle: {
                            shape: 'S3h'
                          },
                          ChartConfiguration: {
                            type: 'structure',
                            members: {
                              FieldWells: {
                                type: 'structure',
                                members: {
                                  FilledMapAggregatedFieldWells: {
                                    type: 'structure',
                                    members: {
                                      Geospatial: {
                                        type: 'list',
                                        member: {
                                          shape: 'S3p'
                                        }
                                      },
                                      Values: {
                                        type: 'list',
                                        member: {
                                          shape: 'S4h'
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              SortConfiguration: {
                                type: 'structure',
                                members: {
                                  CategorySort: {
                                    shape: 'S9l'
                                  }
                                }
                              },
                              Legend: {
                                shape: 'San'
                              },
                              Tooltip: {
                                shape: 'Sb0'
                              },
                              WindowOptions: {
                                shape: 'Sf1'
                              },
                              MapStyleOptions: {
                                shape: 'Sf6'
                              },
                              Interactions: {
                                shape: 'S6h'
                              }
                            }
                          },
                          ConditionalFormatting: {
                            type: 'structure',
                            required: ['ConditionalFormattingOptions'],
                            members: {
                              ConditionalFormattingOptions: {
                                type: 'list',
                                member: {
                                  type: 'structure',
                                  required: ['Shape'],
                                  members: {
                                    Shape: {
                                      type: 'structure',
                                      required: ['FieldId'],
                                      members: {
                                        FieldId: {},
                                        Format: {
                                          type: 'structure',
                                          required: ['BackgroundColor'],
                                          members: {
                                            BackgroundColor: {
                                              shape: 'S6q'
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          },
                          ColumnHierarchies: {
                            shape: 'Sbr'
                          },
                          Actions: {
                            shape: 'S76'
                          }
                        }
                      },
                      FunnelChartVisual: {
                        type: 'structure',
                        required: ['VisualId'],
                        members: {
                          VisualId: {},
                          Title: {
                            shape: 'S3d'
                          },
                          Subtitle: {
                            shape: 'S3h'
                          },
                          ChartConfiguration: {
                            type: 'structure',
                            members: {
                              FieldWells: {
                                type: 'structure',
                                members: {
                                  FunnelChartAggregatedFieldWells: {
                                    type: 'structure',
                                    members: {
                                      Category: {
                                        type: 'list',
                                        member: {
                                          shape: 'S3p'
                                        }
                                      },
                                      Values: {
                                        type: 'list',
                                        member: {
                                          shape: 'S4h'
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              SortConfiguration: {
                                type: 'structure',
                                members: {
                                  CategorySort: {
                                    shape: 'S9l'
                                  },
                                  CategoryItemsLimit: {
                                    shape: 'S9m'
                                  }
                                }
                              },
                              CategoryLabelOptions: {
                                shape: 'Saj'
                              },
                              ValueLabelOptions: {
                                shape: 'Saj'
                              },
                              Tooltip: {
                                shape: 'Sb0'
                              },
                              DataLabelOptions: {
                                type: 'structure',
                                members: {
                                  Visibility: {},
                                  CategoryLabelVisibility: {},
                                  MeasureLabelVisibility: {},
                                  Position: {},
                                  LabelFontConfiguration: {
                                    shape: 'S1y'
                                  },
                                  LabelColor: {},
                                  MeasureDataLabelStyle: {}
                                }
                              },
                              VisualPalette: {
                                shape: 'S9q'
                              },
                              Interactions: {
                                shape: 'S6h'
                              }
                            }
                          },
                          Actions: {
                            shape: 'S76'
                          },
                          ColumnHierarchies: {
                            shape: 'Sbr'
                          }
                        }
                      },
                      ScatterPlotVisual: {
                        type: 'structure',
                        required: ['VisualId'],
                        members: {
                          VisualId: {},
                          Title: {
                            shape: 'S3d'
                          },
                          Subtitle: {
                            shape: 'S3h'
                          },
                          ChartConfiguration: {
                            type: 'structure',
                            members: {
                              FieldWells: {
                                type: 'structure',
                                members: {
                                  ScatterPlotCategoricallyAggregatedFieldWells: {
                                    type: 'structure',
                                    members: {
                                      XAxis: {
                                        shape: 'S4g'
                                      },
                                      YAxis: {
                                        shape: 'S4g'
                                      },
                                      Category: {
                                        shape: 'S3o'
                                      },
                                      Size: {
                                        shape: 'S4g'
                                      },
                                      Label: {
                                        shape: 'S3o'
                                      }
                                    }
                                  },
                                  ScatterPlotUnaggregatedFieldWells: {
                                    type: 'structure',
                                    members: {
                                      XAxis: {
                                        shape: 'S3o'
                                      },
                                      YAxis: {
                                        shape: 'S3o'
                                      },
                                      Size: {
                                        shape: 'S4g'
                                      },
                                      Category: {
                                        shape: 'S3o'
                                      },
                                      Label: {
                                        shape: 'S3o'
                                      }
                                    }
                                  }
                                }
                              },
                              SortConfiguration: {
                                type: 'structure',
                                members: {
                                  ScatterPlotLimitConfiguration: {
                                    shape: 'S9m'
                                  }
                                }
                              },
                              XAxisLabelOptions: {
                                shape: 'Saj'
                              },
                              XAxisDisplayOptions: {
                                shape: 'Sa3'
                              },
                              YAxisLabelOptions: {
                                shape: 'Saj'
                              },
                              YAxisDisplayOptions: {
                                shape: 'Sa3'
                              },
                              Legend: {
                                shape: 'San'
                              },
                              DataLabels: {
                                shape: 'Sap'
                              },
                              Tooltip: {
                                shape: 'Sb0'
                              },
                              VisualPalette: {
                                shape: 'S9q'
                              },
                              Interactions: {
                                shape: 'S6h'
                              }
                            }
                          },
                          Actions: {
                            shape: 'S76'
                          },
                          ColumnHierarchies: {
                            shape: 'Sbr'
                          }
                        }
                      },
                      ComboChartVisual: {
                        type: 'structure',
                        required: ['VisualId'],
                        members: {
                          VisualId: {},
                          Title: {
                            shape: 'S3d'
                          },
                          Subtitle: {
                            shape: 'S3h'
                          },
                          ChartConfiguration: {
                            type: 'structure',
                            members: {
                              FieldWells: {
                                type: 'structure',
                                members: {
                                  ComboChartAggregatedFieldWells: {
                                    type: 'structure',
                                    members: {
                                      Category: {
                                        shape: 'S3o'
                                      },
                                      BarValues: {
                                        shape: 'S4g'
                                      },
                                      Colors: {
                                        shape: 'S3o'
                                      },
                                      LineValues: {
                                        shape: 'S4g'
                                      }
                                    }
                                  }
                                }
                              },
                              SortConfiguration: {
                                type: 'structure',
                                members: {
                                  CategorySort: {
                                    shape: 'S9l'
                                  },
                                  CategoryItemsLimit: {
                                    shape: 'S9m'
                                  },
                                  ColorSort: {
                                    shape: 'S9l'
                                  },
                                  ColorItemsLimit: {
                                    shape: 'S9m'
                                  }
                                }
                              },
                              BarsArrangement: {},
                              CategoryAxis: {
                                shape: 'Sa3'
                              },
                              CategoryLabelOptions: {
                                shape: 'Saj'
                              },
                              PrimaryYAxisDisplayOptions: {
                                shape: 'Sa3'
                              },
                              PrimaryYAxisLabelOptions: {
                                shape: 'Saj'
                              },
                              SecondaryYAxisDisplayOptions: {
                                shape: 'Sa3'
                              },
                              SecondaryYAxisLabelOptions: {
                                shape: 'Saj'
                              },
                              SingleAxisOptions: {
                                shape: 'Se1'
                              },
                              ColorLabelOptions: {
                                shape: 'Saj'
                              },
                              Legend: {
                                shape: 'San'
                              },
                              BarDataLabels: {
                                shape: 'Sap'
                              },
                              LineDataLabels: {
                                shape: 'Sap'
                              },
                              Tooltip: {
                                shape: 'Sb0'
                              },
                              ReferenceLines: {
                                shape: 'Sb9'
                              },
                              VisualPalette: {
                                shape: 'S9q'
                              },
                              Interactions: {
                                shape: 'S6h'
                              }
                            }
                          },
                          Actions: {
                            shape: 'S76'
                          },
                          ColumnHierarchies: {
                            shape: 'Sbr'
                          }
                        }
                      },
                      BoxPlotVisual: {
                        type: 'structure',
                        required: ['VisualId'],
                        members: {
                          VisualId: {},
                          Title: {
                            shape: 'S3d'
                          },
                          Subtitle: {
                            shape: 'S3h'
                          },
                          ChartConfiguration: {
                            type: 'structure',
                            members: {
                              FieldWells: {
                                type: 'structure',
                                members: {
                                  BoxPlotAggregatedFieldWells: {
                                    type: 'structure',
                                    members: {
                                      GroupBy: {
                                        type: 'list',
                                        member: {
                                          shape: 'S3p'
                                        }
                                      },
                                      Values: {
                                        type: 'list',
                                        member: {
                                          shape: 'S4h'
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              SortConfiguration: {
                                type: 'structure',
                                members: {
                                  CategorySort: {
                                    shape: 'S9l'
                                  },
                                  PaginationConfiguration: {
                                    shape: 'S56'
                                  }
                                }
                              },
                              BoxPlotOptions: {
                                type: 'structure',
                                members: {
                                  StyleOptions: {
                                    type: 'structure',
                                    members: {
                                      FillStyle: {}
                                    }
                                  },
                                  OutlierVisibility: {},
                                  AllDataPointsVisibility: {}
                                }
                              },
                              CategoryAxis: {
                                shape: 'Sa3'
                              },
                              CategoryLabelOptions: {
                                shape: 'Saj'
                              },
                              PrimaryYAxisDisplayOptions: {
                                shape: 'Sa3'
                              },
                              PrimaryYAxisLabelOptions: {
                                shape: 'Saj'
                              },
                              Legend: {
                                shape: 'San'
                              },
                              Tooltip: {
                                shape: 'Sb0'
                              },
                              ReferenceLines: {
                                shape: 'Sb9'
                              },
                              VisualPalette: {
                                shape: 'S9q'
                              },
                              Interactions: {
                                shape: 'S6h'
                              }
                            }
                          },
                          Actions: {
                            shape: 'S76'
                          },
                          ColumnHierarchies: {
                            shape: 'Sbr'
                          }
                        }
                      },
                      WaterfallVisual: {
                        type: 'structure',
                        required: ['VisualId'],
                        members: {
                          VisualId: {},
                          Title: {
                            shape: 'S3d'
                          },
                          Subtitle: {
                            shape: 'S3h'
                          },
                          ChartConfiguration: {
                            type: 'structure',
                            members: {
                              FieldWells: {
                                type: 'structure',
                                members: {
                                  WaterfallChartAggregatedFieldWells: {
                                    type: 'structure',
                                    members: {
                                      Categories: {
                                        shape: 'S3o'
                                      },
                                      Values: {
                                        shape: 'S4g'
                                      },
                                      Breakdowns: {
                                        shape: 'S3o'
                                      }
                                    }
                                  }
                                }
                              },
                              SortConfiguration: {
                                type: 'structure',
                                members: {
                                  CategorySort: {
                                    shape: 'S9l'
                                  },
                                  BreakdownItemsLimit: {
                                    shape: 'S9m'
                                  }
                                }
                              },
                              WaterfallChartOptions: {
                                type: 'structure',
                                members: {
                                  TotalBarLabel: {}
                                }
                              },
                              CategoryAxisLabelOptions: {
                                shape: 'Saj'
                              },
                              CategoryAxisDisplayOptions: {
                                shape: 'Sa3'
                              },
                              PrimaryYAxisLabelOptions: {
                                shape: 'Saj'
                              },
                              PrimaryYAxisDisplayOptions: {
                                shape: 'Sa3'
                              },
                              Legend: {
                                shape: 'San'
                              },
                              DataLabels: {
                                shape: 'Sap'
                              },
                              VisualPalette: {
                                shape: 'S9q'
                              },
                              ColorConfiguration: {
                                type: 'structure',
                                members: {
                                  GroupColorConfiguration: {
                                    type: 'structure',
                                    members: {
                                      PositiveBarColor: {},
                                      NegativeBarColor: {},
                                      TotalBarColor: {}
                                    }
                                  }
                                }
                              },
                              Interactions: {
                                shape: 'S6h'
                              }
                            }
                          },
                          Actions: {
                            shape: 'S76'
                          },
                          ColumnHierarchies: {
                            shape: 'Sbr'
                          }
                        }
                      },
                      HistogramVisual: {
                        type: 'structure',
                        required: ['VisualId'],
                        members: {
                          VisualId: {},
                          Title: {
                            shape: 'S3d'
                          },
                          Subtitle: {
                            shape: 'S3h'
                          },
                          ChartConfiguration: {
                            type: 'structure',
                            members: {
                              FieldWells: {
                                type: 'structure',
                                members: {
                                  HistogramAggregatedFieldWells: {
                                    type: 'structure',
                                    members: {
                                      Values: {
                                        type: 'list',
                                        member: {
                                          shape: 'S4h'
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              XAxisDisplayOptions: {
                                shape: 'Sa3'
                              },
                              XAxisLabelOptions: {
                                shape: 'Saj'
                              },
                              YAxisDisplayOptions: {
                                shape: 'Sa3'
                              },
                              BinOptions: {
                                type: 'structure',
                                members: {
                                  SelectedBinType: {},
                                  BinCount: {
                                    type: 'structure',
                                    members: {
                                      Value: {
                                        type: 'integer'
                                      }
                                    }
                                  },
                                  BinWidth: {
                                    type: 'structure',
                                    members: {
                                      Value: {
                                        type: 'double'
                                      },
                                      BinCountLimit: {
                                        type: 'long'
                                      }
                                    }
                                  },
                                  StartValue: {
                                    type: 'double'
                                  }
                                }
                              },
                              DataLabels: {
                                shape: 'Sap'
                              },
                              Tooltip: {
                                shape: 'Sb0'
                              },
                              VisualPalette: {
                                shape: 'S9q'
                              },
                              Interactions: {
                                shape: 'S6h'
                              }
                            }
                          },
                          Actions: {
                            shape: 'S76'
                          }
                        }
                      },
                      WordCloudVisual: {
                        type: 'structure',
                        required: ['VisualId'],
                        members: {
                          VisualId: {},
                          Title: {
                            shape: 'S3d'
                          },
                          Subtitle: {
                            shape: 'S3h'
                          },
                          ChartConfiguration: {
                            type: 'structure',
                            members: {
                              FieldWells: {
                                type: 'structure',
                                members: {
                                  WordCloudAggregatedFieldWells: {
                                    type: 'structure',
                                    members: {
                                      GroupBy: {
                                        type: 'list',
                                        member: {
                                          shape: 'S3p'
                                        }
                                      },
                                      Size: {
                                        type: 'list',
                                        member: {
                                          shape: 'S4h'
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              SortConfiguration: {
                                type: 'structure',
                                members: {
                                  CategoryItemsLimit: {
                                    shape: 'S9m'
                                  },
                                  CategorySort: {
                                    shape: 'S9l'
                                  }
                                }
                              },
                              CategoryLabelOptions: {
                                shape: 'Saj'
                              },
                              WordCloudOptions: {
                                type: 'structure',
                                members: {
                                  WordOrientation: {},
                                  WordScaling: {},
                                  CloudLayout: {},
                                  WordCasing: {},
                                  WordPadding: {},
                                  MaximumStringLength: {
                                    type: 'integer'
                                  }
                                }
                              },
                              Interactions: {
                                shape: 'S6h'
                              }
                            }
                          },
                          Actions: {
                            shape: 'S76'
                          },
                          ColumnHierarchies: {
                            shape: 'Sbr'
                          }
                        }
                      },
                      InsightVisual: {
                        type: 'structure',
                        required: ['VisualId', 'DataSetIdentifier'],
                        members: {
                          VisualId: {},
                          Title: {
                            shape: 'S3d'
                          },
                          Subtitle: {
                            shape: 'S3h'
                          },
                          InsightConfiguration: {
                            type: 'structure',
                            members: {
                              Computations: {
                                type: 'list',
                                member: {
                                  type: 'structure',
                                  members: {
                                    TopBottomRanked: {
                                      type: 'structure',
                                      required: ['ComputationId', 'Type'],
                                      members: {
                                        ComputationId: {},
                                        Name: {},
                                        Category: {
                                          shape: 'S3p'
                                        },
                                        Value: {
                                          shape: 'S4h'
                                        },
                                        ResultSize: {
                                          type: 'integer'
                                        },
                                        Type: {}
                                      }
                                    },
                                    TopBottomMovers: {
                                      type: 'structure',
                                      required: ['ComputationId', 'Type'],
                                      members: {
                                        ComputationId: {},
                                        Name: {},
                                        Time: {
                                          shape: 'S3p'
                                        },
                                        Category: {
                                          shape: 'S3p'
                                        },
                                        Value: {
                                          shape: 'S4h'
                                        },
                                        MoverSize: {
                                          type: 'integer'
                                        },
                                        SortOrder: {},
                                        Type: {}
                                      }
                                    },
                                    TotalAggregation: {
                                      type: 'structure',
                                      required: ['ComputationId'],
                                      members: {
                                        ComputationId: {},
                                        Name: {},
                                        Value: {
                                          shape: 'S4h'
                                        }
                                      }
                                    },
                                    MaximumMinimum: {
                                      type: 'structure',
                                      required: ['ComputationId', 'Type'],
                                      members: {
                                        ComputationId: {},
                                        Name: {},
                                        Time: {
                                          shape: 'S3p'
                                        },
                                        Value: {
                                          shape: 'S4h'
                                        },
                                        Type: {}
                                      }
                                    },
                                    MetricComparison: {
                                      type: 'structure',
                                      required: ['ComputationId'],
                                      members: {
                                        ComputationId: {},
                                        Name: {},
                                        Time: {
                                          shape: 'S3p'
                                        },
                                        FromValue: {
                                          shape: 'S4h'
                                        },
                                        TargetValue: {
                                          shape: 'S4h'
                                        }
                                      }
                                    },
                                    PeriodOverPeriod: {
                                      type: 'structure',
                                      required: ['ComputationId'],
                                      members: {
                                        ComputationId: {},
                                        Name: {},
                                        Time: {
                                          shape: 'S3p'
                                        },
                                        Value: {
                                          shape: 'S4h'
                                        }
                                      }
                                    },
                                    PeriodToDate: {
                                      type: 'structure',
                                      required: ['ComputationId'],
                                      members: {
                                        ComputationId: {},
                                        Name: {},
                                        Time: {
                                          shape: 'S3p'
                                        },
                                        Value: {
                                          shape: 'S4h'
                                        },
                                        PeriodTimeGranularity: {}
                                      }
                                    },
                                    GrowthRate: {
                                      type: 'structure',
                                      required: ['ComputationId'],
                                      members: {
                                        ComputationId: {},
                                        Name: {},
                                        Time: {
                                          shape: 'S3p'
                                        },
                                        Value: {
                                          shape: 'S4h'
                                        },
                                        PeriodSize: {
                                          type: 'integer'
                                        }
                                      }
                                    },
                                    UniqueValues: {
                                      type: 'structure',
                                      required: ['ComputationId'],
                                      members: {
                                        ComputationId: {},
                                        Name: {},
                                        Category: {
                                          shape: 'S3p'
                                        }
                                      }
                                    },
                                    Forecast: {
                                      type: 'structure',
                                      required: ['ComputationId'],
                                      members: {
                                        ComputationId: {},
                                        Name: {},
                                        Time: {
                                          shape: 'S3p'
                                        },
                                        Value: {
                                          shape: 'S4h'
                                        },
                                        PeriodsForward: {
                                          type: 'integer'
                                        },
                                        PeriodsBackward: {
                                          type: 'integer'
                                        },
                                        UpperBoundary: {
                                          type: 'double'
                                        },
                                        LowerBoundary: {
                                          type: 'double'
                                        },
                                        PredictionInterval: {
                                          type: 'integer'
                                        },
                                        Seasonality: {},
                                        CustomSeasonalityValue: {
                                          type: 'integer'
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              CustomNarrative: {
                                type: 'structure',
                                required: ['Narrative'],
                                members: {
                                  Narrative: {}
                                }
                              },
                              Interactions: {
                                shape: 'S6h'
                              }
                            }
                          },
                          Actions: {
                            shape: 'S76'
                          },
                          DataSetIdentifier: {}
                        }
                      },
                      SankeyDiagramVisual: {
                        type: 'structure',
                        required: ['VisualId'],
                        members: {
                          VisualId: {},
                          Title: {
                            shape: 'S3d'
                          },
                          Subtitle: {
                            shape: 'S3h'
                          },
                          ChartConfiguration: {
                            type: 'structure',
                            members: {
                              FieldWells: {
                                type: 'structure',
                                members: {
                                  SankeyDiagramAggregatedFieldWells: {
                                    type: 'structure',
                                    members: {
                                      Source: {
                                        shape: 'S3o'
                                      },
                                      Destination: {
                                        shape: 'S3o'
                                      },
                                      Weight: {
                                        shape: 'S4g'
                                      }
                                    }
                                  }
                                }
                              },
                              SortConfiguration: {
                                type: 'structure',
                                members: {
                                  WeightSort: {
                                    shape: 'S9l'
                                  },
                                  SourceItemsLimit: {
                                    shape: 'S9m'
                                  },
                                  DestinationItemsLimit: {
                                    shape: 'S9m'
                                  }
                                }
                              },
                              DataLabels: {
                                shape: 'Sap'
                              },
                              Interactions: {
                                shape: 'S6h'
                              }
                            }
                          },
                          Actions: {
                            shape: 'S76'
                          }
                        }
                      },
                      CustomContentVisual: {
                        type: 'structure',
                        required: ['VisualId', 'DataSetIdentifier'],
                        members: {
                          VisualId: {},
                          Title: {
                            shape: 'S3d'
                          },
                          Subtitle: {
                            shape: 'S3h'
                          },
                          ChartConfiguration: {
                            type: 'structure',
                            members: {
                              ContentUrl: {},
                              ContentType: {},
                              ImageScaling: {},
                              Interactions: {
                                shape: 'S6h'
                              }
                            }
                          },
                          Actions: {
                            shape: 'S76'
                          },
                          DataSetIdentifier: {}
                        }
                      },
                      EmptyVisual: {
                        type: 'structure',
                        required: ['VisualId', 'DataSetIdentifier'],
                        members: {
                          VisualId: {},
                          DataSetIdentifier: {},
                          Actions: {
                            shape: 'S76'
                          }
                        }
                      },
                      RadarChartVisual: {
                        type: 'structure',
                        required: ['VisualId'],
                        members: {
                          VisualId: {},
                          Title: {
                            shape: 'S3d'
                          },
                          Subtitle: {
                            shape: 'S3h'
                          },
                          ChartConfiguration: {
                            type: 'structure',
                            members: {
                              FieldWells: {
                                type: 'structure',
                                members: {
                                  RadarChartAggregatedFieldWells: {
                                    type: 'structure',
                                    members: {
                                      Category: {
                                        type: 'list',
                                        member: {
                                          shape: 'S3p'
                                        }
                                      },
                                      Color: {
                                        type: 'list',
                                        member: {
                                          shape: 'S3p'
                                        }
                                      },
                                      Values: {
                                        type: 'list',
                                        member: {
                                          shape: 'S4h'
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              SortConfiguration: {
                                type: 'structure',
                                members: {
                                  CategorySort: {
                                    shape: 'S9l'
                                  },
                                  CategoryItemsLimit: {
                                    shape: 'S9m'
                                  },
                                  ColorSort: {
                                    shape: 'S9l'
                                  },
                                  ColorItemsLimit: {
                                    shape: 'S9m'
                                  }
                                }
                              },
                              Shape: {},
                              BaseSeriesSettings: {
                                type: 'structure',
                                members: {
                                  AreaStyleSettings: {
                                    type: 'structure',
                                    members: {
                                      Visibility: {}
                                    }
                                  }
                                }
                              },
                              StartAngle: {
                                type: 'double'
                              },
                              VisualPalette: {
                                shape: 'S9q'
                              },
                              AlternateBandColorsVisibility: {},
                              AlternateBandEvenColor: {},
                              AlternateBandOddColor: {},
                              CategoryAxis: {
                                shape: 'Sa3'
                              },
                              CategoryLabelOptions: {
                                shape: 'Saj'
                              },
                              ColorAxis: {
                                shape: 'Sa3'
                              },
                              ColorLabelOptions: {
                                shape: 'Saj'
                              },
                              Legend: {
                                shape: 'San'
                              },
                              AxesRangeScale: {},
                              Interactions: {
                                shape: 'S6h'
                              }
                            }
                          },
                          Actions: {
                            shape: 'S76'
                          },
                          ColumnHierarchies: {
                            shape: 'Sbr'
                          }
                        }
                      }
                    }
                  }
                },
                TextBoxes: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['SheetTextBoxId'],
                    members: {
                      SheetTextBoxId: {},
                      Content: {}
                    }
                  }
                },
                Layouts: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Configuration'],
                    members: {
                      Configuration: {
                        type: 'structure',
                        members: {
                          GridLayout: {
                            shape: 'Sj2'
                          },
                          FreeFormLayout: {
                            type: 'structure',
                            required: ['Elements'],
                            members: {
                              Elements: {
                                shape: 'Sje'
                              },
                              CanvasSizeOptions: {
                                shape: 'Sjn'
                              }
                            }
                          },
                          SectionBasedLayout: {
                            type: 'structure',
                            required: ['HeaderSections', 'BodySections', 'FooterSections', 'CanvasSizeOptions'],
                            members: {
                              HeaderSections: {
                                shape: 'Sjq'
                              },
                              BodySections: {
                                type: 'list',
                                member: {
                                  type: 'structure',
                                  required: ['SectionId', 'Content'],
                                  members: {
                                    SectionId: {},
                                    Content: {
                                      type: 'structure',
                                      members: {
                                        Layout: {
                                          shape: 'Sjs'
                                        }
                                      }
                                    },
                                    Style: {
                                      shape: 'Sju'
                                    },
                                    PageBreakConfiguration: {
                                      type: 'structure',
                                      members: {
                                        After: {
                                          type: 'structure',
                                          members: {
                                            Status: {}
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              FooterSections: {
                                shape: 'Sjq'
                              },
                              CanvasSizeOptions: {
                                shape: 'Sk3'
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                SheetControlLayouts: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Configuration'],
                    members: {
                      Configuration: {
                        type: 'structure',
                        members: {
                          GridLayout: {
                            shape: 'Sj2'
                          }
                        }
                      }
                    }
                  }
                },
                ContentType: {}
              }
            }
          },
          S1v: {
            type: 'structure',
            members: {
              TitleOptions: {
                shape: 'S1w'
              },
              DateTimeFormat: {},
              InfoIconLabelOptions: {
                shape: 'S27'
              }
            }
          },
          S1w: {
            type: 'structure',
            members: {
              Visibility: {},
              FontConfiguration: {
                shape: 'S1y'
              },
              CustomLabel: {}
            }
          },
          S1y: {
            type: 'structure',
            members: {
              FontSize: {
                type: 'structure',
                members: {
                  Relative: {}
                }
              },
              FontDecoration: {},
              FontColor: {},
              FontWeight: {
                type: 'structure',
                members: {
                  Name: {}
                }
              },
              FontStyle: {}
            }
          },
          S27: {
            type: 'structure',
            members: {
              Visibility: {},
              InfoIconText: {}
            }
          },
          S2a: {
            type: 'structure',
            members: {
              SearchOptions: {
                type: 'structure',
                members: {
                  Visibility: {}
                }
              },
              SelectAllOptions: {
                shape: 'S2c'
              },
              TitleOptions: {
                shape: 'S1w'
              },
              InfoIconLabelOptions: {
                shape: 'S27'
              }
            }
          },
          S2c: {
            type: 'structure',
            members: {
              Visibility: {}
            }
          },
          S2e: {
            type: 'structure',
            members: {
              Values: {
                shape: 'S2f'
              },
              LinkToDataSetColumn: {
                shape: 'S2g'
              }
            }
          },
          S2f: {
            type: 'list',
            member: {}
          },
          S2g: {
            type: 'structure',
            required: ['DataSetIdentifier', 'ColumnName'],
            members: {
              DataSetIdentifier: {},
              ColumnName: {}
            }
          },
          S2i: {
            type: 'structure',
            members: {
              SourceControls: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    SourceSheetControlId: {},
                    ColumnToMatch: {
                      shape: 'S2g'
                    }
                  }
                }
              }
            }
          },
          S2m: {
            type: 'structure',
            members: {
              SelectAllOptions: {
                shape: 'S2c'
              },
              TitleOptions: {
                shape: 'S1w'
              },
              InfoIconLabelOptions: {
                shape: 'S27'
              }
            }
          },
          S2o: {
            type: 'structure',
            members: {
              TitleOptions: {
                shape: 'S1w'
              },
              PlaceholderOptions: {
                shape: 'S2p'
              },
              InfoIconLabelOptions: {
                shape: 'S27'
              }
            }
          },
          S2p: {
            type: 'structure',
            members: {
              Visibility: {}
            }
          },
          S2s: {
            type: 'structure',
            members: {
              TitleOptions: {
                shape: 'S1w'
              },
              PlaceholderOptions: {
                shape: 'S2p'
              },
              InfoIconLabelOptions: {
                shape: 'S27'
              }
            }
          },
          S2u: {
            type: 'structure',
            members: {
              TitleOptions: {
                shape: 'S1w'
              },
              InfoIconLabelOptions: {
                shape: 'S27'
              }
            }
          },
          S31: {
            type: 'structure',
            members: {
              Values: {
                shape: 'S2f'
              }
            }
          },
          S38: {
            type: 'structure',
            members: {
              TitleOptions: {
                shape: 'S1w'
              },
              DateTimeFormat: {},
              InfoIconLabelOptions: {
                shape: 'S27'
              }
            }
          },
          S3d: {
            type: 'structure',
            members: {
              Visibility: {},
              FormatText: {
                type: 'structure',
                members: {
                  PlainText: {},
                  RichText: {}
                }
              }
            }
          },
          S3h: {
            type: 'structure',
            members: {
              Visibility: {},
              FormatText: {
                type: 'structure',
                members: {
                  PlainText: {},
                  RichText: {}
                }
              }
            }
          },
          S3o: {
            type: 'list',
            member: {
              shape: 'S3p'
            }
          },
          S3p: {
            type: 'structure',
            members: {
              NumericalDimensionField: {
                type: 'structure',
                required: ['FieldId', 'Column'],
                members: {
                  FieldId: {},
                  Column: {
                    shape: 'S2g'
                  },
                  HierarchyId: {},
                  FormatConfiguration: {
                    shape: 'S3t'
                  }
                }
              },
              CategoricalDimensionField: {
                type: 'structure',
                required: ['FieldId', 'Column'],
                members: {
                  FieldId: {},
                  Column: {
                    shape: 'S2g'
                  },
                  HierarchyId: {},
                  FormatConfiguration: {
                    shape: 'S4c'
                  }
                }
              },
              DateDimensionField: {
                type: 'structure',
                required: ['FieldId', 'Column'],
                members: {
                  FieldId: {},
                  Column: {
                    shape: 'S2g'
                  },
                  DateGranularity: {},
                  HierarchyId: {},
                  FormatConfiguration: {
                    shape: 'S4f'
                  }
                }
              }
            }
          },
          S3t: {
            type: 'structure',
            members: {
              FormatConfiguration: {
                shape: 'S3u'
              }
            }
          },
          S3u: {
            type: 'structure',
            members: {
              NumberDisplayFormatConfiguration: {
                shape: 'S3v'
              },
              CurrencyDisplayFormatConfiguration: {
                type: 'structure',
                members: {
                  Prefix: {
                    shape: 'S3w'
                  },
                  Suffix: {
                    shape: 'S3x'
                  },
                  SeparatorConfiguration: {
                    shape: 'S3y'
                  },
                  Symbol: {},
                  DecimalPlacesConfiguration: {
                    shape: 'S41'
                  },
                  NumberScale: {},
                  NegativeValueConfiguration: {
                    shape: 'S44'
                  },
                  NullValueFormatConfiguration: {
                    shape: 'S46'
                  }
                }
              },
              PercentageDisplayFormatConfiguration: {
                shape: 'S4a'
              }
            }
          },
          S3v: {
            type: 'structure',
            members: {
              Prefix: {
                shape: 'S3w'
              },
              Suffix: {
                shape: 'S3x'
              },
              SeparatorConfiguration: {
                shape: 'S3y'
              },
              DecimalPlacesConfiguration: {
                shape: 'S41'
              },
              NumberScale: {},
              NegativeValueConfiguration: {
                shape: 'S44'
              },
              NullValueFormatConfiguration: {
                shape: 'S46'
              }
            }
          },
          S3w: {
            type: 'string',
            sensitive: true
          },
          S3x: {
            type: 'string',
            sensitive: true
          },
          S3y: {
            type: 'structure',
            members: {
              DecimalSeparator: {},
              ThousandsSeparator: {
                type: 'structure',
                members: {
                  Symbol: {},
                  Visibility: {}
                }
              }
            }
          },
          S41: {
            type: 'structure',
            required: ['DecimalPlaces'],
            members: {
              DecimalPlaces: {
                type: 'long'
              }
            }
          },
          S44: {
            type: 'structure',
            required: ['DisplayMode'],
            members: {
              DisplayMode: {}
            }
          },
          S46: {
            type: 'structure',
            required: ['NullString'],
            members: {
              NullString: {
                type: 'string',
                sensitive: true
              }
            }
          },
          S4a: {
            type: 'structure',
            members: {
              Prefix: {
                shape: 'S3w'
              },
              Suffix: {
                shape: 'S3x'
              },
              SeparatorConfiguration: {
                shape: 'S3y'
              },
              DecimalPlacesConfiguration: {
                shape: 'S41'
              },
              NegativeValueConfiguration: {
                shape: 'S44'
              },
              NullValueFormatConfiguration: {
                shape: 'S46'
              }
            }
          },
          S4c: {
            type: 'structure',
            members: {
              NullValueFormatConfiguration: {
                shape: 'S46'
              },
              NumericFormatConfiguration: {
                shape: 'S3u'
              }
            }
          },
          S4f: {
            type: 'structure',
            members: {
              DateTimeFormat: {},
              NullValueFormatConfiguration: {
                shape: 'S46'
              },
              NumericFormatConfiguration: {
                shape: 'S3u'
              }
            }
          },
          S4g: {
            type: 'list',
            member: {
              shape: 'S4h'
            }
          },
          S4h: {
            type: 'structure',
            members: {
              NumericalMeasureField: {
                type: 'structure',
                required: ['FieldId', 'Column'],
                members: {
                  FieldId: {},
                  Column: {
                    shape: 'S2g'
                  },
                  AggregationFunction: {
                    shape: 'S4j'
                  },
                  FormatConfiguration: {
                    shape: 'S3t'
                  }
                }
              },
              CategoricalMeasureField: {
                type: 'structure',
                required: ['FieldId', 'Column'],
                members: {
                  FieldId: {},
                  Column: {
                    shape: 'S2g'
                  },
                  AggregationFunction: {},
                  FormatConfiguration: {
                    shape: 'S4c'
                  }
                }
              },
              DateMeasureField: {
                type: 'structure',
                required: ['FieldId', 'Column'],
                members: {
                  FieldId: {},
                  Column: {
                    shape: 'S2g'
                  },
                  AggregationFunction: {},
                  FormatConfiguration: {
                    shape: 'S4f'
                  }
                }
              },
              CalculatedMeasureField: {
                type: 'structure',
                required: ['FieldId', 'Expression'],
                members: {
                  FieldId: {},
                  Expression: {
                    shape: 'S4s'
                  }
                }
              }
            }
          },
          S4j: {
            type: 'structure',
            members: {
              SimpleNumericalAggregation: {},
              PercentileAggregation: {
                type: 'structure',
                members: {
                  PercentileValue: {
                    type: 'double'
                  }
                }
              }
            }
          },
          S4s: {
            type: 'string',
            sensitive: true
          },
          S4w: {
            type: 'structure',
            members: {
              StringFormatConfiguration: {
                shape: 'S4c'
              },
              NumberFormatConfiguration: {
                shape: 'S3t'
              },
              DateTimeFormatConfiguration: {
                shape: 'S4f'
              }
            }
          },
          S4z: {
            type: 'structure',
            members: {
              FieldSort: {
                shape: 'S50'
              },
              ColumnSort: {
                shape: 'S52'
              }
            }
          },
          S50: {
            type: 'structure',
            required: ['FieldId', 'Direction'],
            members: {
              FieldId: {},
              Direction: {}
            }
          },
          S52: {
            type: 'structure',
            required: ['SortBy', 'Direction'],
            members: {
              SortBy: {
                shape: 'S2g'
              },
              Direction: {},
              AggregationFunction: {
                shape: 'S53'
              }
            }
          },
          S53: {
            type: 'structure',
            members: {
              NumericalAggregationFunction: {
                shape: 'S4j'
              },
              CategoricalAggregationFunction: {},
              DateAggregationFunction: {},
              AttributeAggregationFunction: {
                type: 'structure',
                members: {
                  SimpleAttributeAggregation: {},
                  ValueForMultipleValues: {}
                }
              }
            }
          },
          S56: {
            type: 'structure',
            required: ['PageSize', 'PageNumber'],
            members: {
              PageSize: {
                type: 'long'
              },
              PageNumber: {
                type: 'long'
              }
            }
          },
          S5b: {
            type: 'structure',
            members: {
              Visibility: {},
              FontConfiguration: {
                shape: 'S1y'
              },
              TextWrap: {},
              HorizontalTextAlignment: {},
              VerticalTextAlignment: {},
              BackgroundColor: {},
              Height: {
                type: 'integer'
              },
              Border: {
                type: 'structure',
                members: {
                  UniformBorder: {
                    shape: 'S5h'
                  },
                  SideSpecificBorder: {
                    type: 'structure',
                    members: {
                      InnerVertical: {
                        shape: 'S5h'
                      },
                      InnerHorizontal: {
                        shape: 'S5h'
                      },
                      Left: {
                        shape: 'S5h'
                      },
                      Right: {
                        shape: 'S5h'
                      },
                      Top: {
                        shape: 'S5h'
                      },
                      Bottom: {
                        shape: 'S5h'
                      }
                    }
                  }
                }
              }
            }
          },
          S5h: {
            type: 'structure',
            members: {
              Color: {},
              Thickness: {
                type: 'integer'
              },
              Style: {}
            }
          },
          S5l: {
            type: 'structure',
            members: {
              Status: {},
              RowAlternateColors: {
                type: 'list',
                member: {}
              },
              UsePrimaryBackgroundColor: {}
            }
          },
          S5r: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['FieldId', 'TotalAggregationFunction'],
              members: {
                FieldId: {},
                TotalAggregationFunction: {
                  type: 'structure',
                  members: {
                    SimpleTotalAggregationFunction: {}
                  }
                }
              }
            }
          },
          S6h: {
            type: 'structure',
            members: {
              VisualMenuOption: {
                shape: 'S6i'
              },
              ContextMenuOption: {
                type: 'structure',
                members: {
                  AvailabilityStatus: {}
                }
              }
            }
          },
          S6i: {
            type: 'structure',
            members: {
              AvailabilityStatus: {}
            }
          },
          S6p: {
            type: 'structure',
            members: {
              BackgroundColor: {
                shape: 'S6q'
              },
              TextColor: {
                shape: 'S6q'
              },
              Icon: {
                shape: 'S6w'
              }
            }
          },
          S6q: {
            type: 'structure',
            members: {
              Solid: {
                type: 'structure',
                required: ['Expression'],
                members: {
                  Expression: {
                    shape: 'S4s'
                  },
                  Color: {}
                }
              },
              Gradient: {
                type: 'structure',
                required: ['Expression', 'Color'],
                members: {
                  Expression: {
                    shape: 'S4s'
                  },
                  Color: {
                    type: 'structure',
                    members: {
                      Stops: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          required: ['GradientOffset'],
                          members: {
                            GradientOffset: {
                              type: 'double'
                            },
                            DataValue: {
                              type: 'double'
                            },
                            Color: {}
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          S6w: {
            type: 'structure',
            members: {
              IconSet: {
                type: 'structure',
                required: ['Expression'],
                members: {
                  Expression: {
                    shape: 'S4s'
                  },
                  IconSetType: {}
                }
              },
              CustomCondition: {
                type: 'structure',
                required: ['Expression', 'IconOptions'],
                members: {
                  Expression: {
                    shape: 'S4s'
                  },
                  IconOptions: {
                    type: 'structure',
                    members: {
                      Icon: {},
                      UnicodeIcon: {}
                    }
                  },
                  Color: {},
                  DisplayConfiguration: {
                    type: 'structure',
                    members: {
                      IconDisplayOption: {}
                    }
                  }
                }
              }
            }
          },
          S76: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['CustomActionId', 'Name', 'Trigger', 'ActionOperations'],
              members: {
                CustomActionId: {},
                Name: {},
                Status: {},
                Trigger: {},
                ActionOperations: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      FilterOperation: {
                        type: 'structure',
                        required: ['SelectedFieldsConfiguration', 'TargetVisualsConfiguration'],
                        members: {
                          SelectedFieldsConfiguration: {
                            type: 'structure',
                            members: {
                              SelectedFields: {
                                type: 'list',
                                member: {}
                              },
                              SelectedFieldOptions: {},
                              SelectedColumns: {
                                type: 'list',
                                member: {
                                  shape: 'S2g'
                                }
                              }
                            }
                          },
                          TargetVisualsConfiguration: {
                            type: 'structure',
                            members: {
                              SameSheetTargetVisualConfiguration: {
                                type: 'structure',
                                members: {
                                  TargetVisuals: {
                                    type: 'list',
                                    member: {}
                                  },
                                  TargetVisualOptions: {}
                                }
                              }
                            }
                          }
                        }
                      },
                      NavigationOperation: {
                        type: 'structure',
                        members: {
                          LocalNavigationConfiguration: {
                            type: 'structure',
                            required: ['TargetSheetId'],
                            members: {
                              TargetSheetId: {}
                            }
                          }
                        }
                      },
                      URLOperation: {
                        type: 'structure',
                        required: ['URLTemplate', 'URLTarget'],
                        members: {
                          URLTemplate: {},
                          URLTarget: {}
                        }
                      },
                      SetParametersOperation: {
                        type: 'structure',
                        required: ['ParameterValueConfigurations'],
                        members: {
                          ParameterValueConfigurations: {
                            type: 'list',
                            member: {
                              type: 'structure',
                              required: ['DestinationParameterName', 'Value'],
                              members: {
                                DestinationParameterName: {},
                                Value: {
                                  type: 'structure',
                                  members: {
                                    CustomValuesConfiguration: {
                                      type: 'structure',
                                      required: ['CustomValues'],
                                      members: {
                                        IncludeNullValue: {
                                          type: 'boolean'
                                        },
                                        CustomValues: {
                                          type: 'structure',
                                          members: {
                                            StringValues: {
                                              shape: 'S7w'
                                            },
                                            IntegerValues: {
                                              shape: 'S7y'
                                            },
                                            DecimalValues: {
                                              shape: 'S80'
                                            },
                                            DateTimeValues: {
                                              shape: 'S82'
                                            }
                                          }
                                        }
                                      }
                                    },
                                    SelectAllValueOptions: {},
                                    SourceParameterName: {},
                                    SourceField: {},
                                    SourceColumn: {
                                      shape: 'S2g'
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          S7w: {
            type: 'list',
            member: {
              type: 'string',
              sensitive: true
            }
          },
          S7y: {
            type: 'list',
            member: {
              type: 'long',
              sensitive: true
            }
          },
          S80: {
            type: 'list',
            member: {
              type: 'double',
              sensitive: true
            }
          },
          S82: {
            type: 'list',
            member: {
              shape: 'S18'
            }
          },
          S88: {
            type: 'list',
            member: {
              shape: 'S3p'
            }
          },
          S8f: {
            type: 'list',
            member: {
              shape: 'S8g'
            }
          },
          S8g: {
            type: 'structure',
            members: {
              FieldId: {},
              FieldValue: {
                shape: 'S8h'
              },
              DataPathType: {
                type: 'structure',
                members: {
                  PivotTableDataPathType: {}
                }
              }
            }
          },
          S8h: {
            type: 'string',
            sensitive: true
          },
          S8q: {
            type: 'structure',
            members: {
              TotalsVisibility: {},
              CustomLabel: {},
              FieldLevel: {},
              FieldLevelOptions: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    FieldId: {}
                  }
                }
              },
              TotalCellStyle: {
                shape: 'S5b'
              },
              ValueCellStyle: {
                shape: 'S5b'
              },
              MetricHeaderCellStyle: {
                shape: 'S5b'
              },
              StyleTargets: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['CellType'],
                  members: {
                    CellType: {}
                  }
                }
              }
            }
          },
          S8x: {
            type: 'structure',
            members: {
              TotalsVisibility: {},
              Placement: {},
              ScrollStatus: {},
              CustomLabel: {},
              TotalCellStyle: {
                shape: 'S5b'
              },
              ValueCellStyle: {
                shape: 'S5b'
              },
              MetricHeaderCellStyle: {
                shape: 'S5b'
              },
              TotalAggregationOptions: {
                shape: 'S5r'
              }
            }
          },
          S9c: {
            type: 'structure',
            members: {
              Role: {}
            }
          },
          S9j: {
            type: 'list',
            member: {
              shape: 'S3p'
            }
          },
          S9l: {
            type: 'list',
            member: {
              shape: 'S4z'
            }
          },
          S9m: {
            type: 'structure',
            members: {
              ItemsLimit: {
                type: 'long'
              },
              OtherCategories: {}
            }
          },
          S9q: {
            type: 'structure',
            members: {
              ChartColor: {},
              ColorMap: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['Element', 'Color'],
                  members: {
                    Element: {
                      shape: 'S8g'
                    },
                    Color: {},
                    TimeGranularity: {}
                  }
                }
              }
            }
          },
          S9t: {
            type: 'structure',
            members: {
              MaxVisibleRows: {
                type: 'long'
              },
              MaxVisibleColumns: {
                type: 'long'
              },
              PanelConfiguration: {
                type: 'structure',
                members: {
                  Title: {
                    type: 'structure',
                    members: {
                      Visibility: {},
                      FontConfiguration: {
                        shape: 'S1y'
                      },
                      HorizontalTextAlignment: {}
                    }
                  },
                  BorderVisibility: {},
                  BorderThickness: {},
                  BorderStyle: {},
                  BorderColor: {},
                  GutterVisibility: {},
                  GutterSpacing: {},
                  BackgroundVisibility: {},
                  BackgroundColor: {}
                }
              },
              XAxis: {
                shape: 'Sa0'
              },
              YAxis: {
                shape: 'Sa0'
              }
            }
          },
          Sa0: {
            type: 'structure',
            members: {
              Scale: {},
              Placement: {}
            }
          },
          Sa3: {
            type: 'structure',
            members: {
              TickLabelOptions: {
                type: 'structure',
                members: {
                  LabelOptions: {
                    shape: 'S1w'
                  },
                  RotationAngle: {
                    type: 'double'
                  }
                }
              },
              AxisLineVisibility: {},
              GridLineVisibility: {},
              DataOptions: {
                type: 'structure',
                members: {
                  NumericAxisOptions: {
                    type: 'structure',
                    members: {
                      Scale: {
                        type: 'structure',
                        members: {
                          Linear: {
                            type: 'structure',
                            members: {
                              StepCount: {
                                type: 'integer'
                              },
                              StepSize: {
                                type: 'double'
                              }
                            }
                          },
                          Logarithmic: {
                            type: 'structure',
                            members: {
                              Base: {
                                type: 'double'
                              }
                            }
                          }
                        }
                      },
                      Range: {
                        type: 'structure',
                        members: {
                          MinMax: {
                            type: 'structure',
                            members: {
                              Minimum: {
                                type: 'double'
                              },
                              Maximum: {
                                type: 'double'
                              }
                            }
                          },
                          DataDriven: {
                            type: 'structure',
                            members: {}
                          }
                        }
                      }
                    }
                  },
                  DateAxisOptions: {
                    type: 'structure',
                    members: {
                      MissingDateVisibility: {}
                    }
                  }
                }
              },
              ScrollbarOptions: {
                type: 'structure',
                members: {
                  Visibility: {},
                  VisibleRange: {
                    type: 'structure',
                    members: {
                      PercentRange: {
                        type: 'structure',
                        members: {
                          From: {
                            type: 'double'
                          },
                          To: {
                            type: 'double'
                          }
                        }
                      }
                    }
                  }
                }
              },
              AxisOffset: {}
            }
          },
          Saj: {
            type: 'structure',
            members: {
              Visibility: {},
              SortIconVisibility: {},
              AxisLabelOptions: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    FontConfiguration: {
                      shape: 'S1y'
                    },
                    CustomLabel: {},
                    ApplyTo: {
                      type: 'structure',
                      required: ['FieldId', 'Column'],
                      members: {
                        FieldId: {},
                        Column: {
                          shape: 'S2g'
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          San: {
            type: 'structure',
            members: {
              Visibility: {},
              Title: {
                shape: 'S1w'
              },
              Position: {},
              Width: {},
              Height: {}
            }
          },
          Sap: {
            type: 'structure',
            members: {
              Visibility: {},
              CategoryLabelVisibility: {},
              MeasureLabelVisibility: {},
              DataLabelTypes: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    FieldLabelType: {
                      type: 'structure',
                      members: {
                        FieldId: {},
                        Visibility: {}
                      }
                    },
                    DataPathLabelType: {
                      type: 'structure',
                      members: {
                        FieldId: {},
                        FieldValue: {
                          shape: 'S8h'
                        },
                        Visibility: {}
                      }
                    },
                    RangeEndsLabelType: {
                      type: 'structure',
                      members: {
                        Visibility: {}
                      }
                    },
                    MinimumLabelType: {
                      type: 'structure',
                      members: {
                        Visibility: {}
                      }
                    },
                    MaximumLabelType: {
                      type: 'structure',
                      members: {
                        Visibility: {}
                      }
                    }
                  }
                }
              },
              Position: {},
              LabelContent: {},
              LabelFontConfiguration: {
                shape: 'S1y'
              },
              LabelColor: {},
              Overlap: {},
              TotalsVisibility: {}
            }
          },
          Sb0: {
            type: 'structure',
            members: {
              TooltipVisibility: {},
              SelectedTooltipType: {},
              FieldBasedTooltip: {
                type: 'structure',
                members: {
                  AggregationVisibility: {},
                  TooltipTitleType: {},
                  TooltipFields: {
                    type: 'list',
                    member: {
                      type: 'structure',
                      members: {
                        FieldTooltipItem: {
                          type: 'structure',
                          required: ['FieldId'],
                          members: {
                            FieldId: {},
                            Label: {},
                            Visibility: {},
                            TooltipTarget: {}
                          }
                        },
                        ColumnTooltipItem: {
                          type: 'structure',
                          required: ['Column'],
                          members: {
                            Column: {
                              shape: 'S2g'
                            },
                            Label: {},
                            Visibility: {},
                            Aggregation: {
                              shape: 'S53'
                            },
                            TooltipTarget: {}
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          Sb9: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['DataConfiguration'],
              members: {
                Status: {},
                DataConfiguration: {
                  type: 'structure',
                  members: {
                    StaticConfiguration: {
                      type: 'structure',
                      required: ['Value'],
                      members: {
                        Value: {
                          shape: 'S14'
                        }
                      }
                    },
                    DynamicConfiguration: {
                      type: 'structure',
                      required: ['Column', 'Calculation'],
                      members: {
                        Column: {
                          shape: 'S2g'
                        },
                        MeasureAggregationFunction: {
                          shape: 'S53'
                        },
                        Calculation: {
                          shape: 'S4j'
                        }
                      }
                    },
                    AxisBinding: {},
                    SeriesType: {}
                  }
                },
                StyleConfiguration: {
                  type: 'structure',
                  members: {
                    Pattern: {},
                    Color: {}
                  }
                },
                LabelConfiguration: {
                  type: 'structure',
                  members: {
                    ValueLabelConfiguration: {
                      type: 'structure',
                      members: {
                        RelativePosition: {},
                        FormatConfiguration: {
                          shape: 'S3u'
                        }
                      }
                    },
                    CustomLabelConfiguration: {
                      type: 'structure',
                      required: ['CustomLabel'],
                      members: {
                        CustomLabel: {}
                      }
                    },
                    FontConfiguration: {
                      shape: 'S1y'
                    },
                    FontColor: {},
                    HorizontalPosition: {},
                    VerticalPosition: {}
                  }
                }
              }
            }
          },
          Sbo: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['MeasureFieldId', 'ContributorDimensions'],
              members: {
                MeasureFieldId: {},
                ContributorDimensions: {
                  type: 'list',
                  member: {
                    shape: 'S2g'
                  }
                }
              }
            }
          },
          Sbr: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                ExplicitHierarchy: {
                  type: 'structure',
                  required: ['HierarchyId', 'Columns'],
                  members: {
                    HierarchyId: {},
                    Columns: {
                      type: 'list',
                      member: {
                        shape: 'S2g'
                      }
                    },
                    DrillDownFilters: {
                      shape: 'Sbv'
                    }
                  }
                },
                DateTimeHierarchy: {
                  type: 'structure',
                  required: ['HierarchyId'],
                  members: {
                    HierarchyId: {},
                    DrillDownFilters: {
                      shape: 'Sbv'
                    }
                  }
                },
                PredefinedHierarchy: {
                  type: 'structure',
                  required: ['HierarchyId', 'Columns'],
                  members: {
                    HierarchyId: {},
                    Columns: {
                      type: 'list',
                      member: {
                        shape: 'S2g'
                      }
                    },
                    DrillDownFilters: {
                      shape: 'Sbv'
                    }
                  }
                }
              }
            }
          },
          Sbv: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                NumericEqualityFilter: {
                  type: 'structure',
                  required: ['Column', 'Value'],
                  members: {
                    Column: {
                      shape: 'S2g'
                    },
                    Value: {
                      type: 'double'
                    }
                  }
                },
                CategoryFilter: {
                  type: 'structure',
                  required: ['Column', 'CategoryValues'],
                  members: {
                    Column: {
                      shape: 'S2g'
                    },
                    CategoryValues: {
                      shape: 'Sbz'
                    }
                  }
                },
                TimeRangeFilter: {
                  type: 'structure',
                  required: ['Column', 'RangeMinimum', 'RangeMaximum', 'TimeGranularity'],
                  members: {
                    Column: {
                      shape: 'S2g'
                    },
                    RangeMinimum: {
                      type: 'timestamp'
                    },
                    RangeMaximum: {
                      type: 'timestamp'
                    },
                    TimeGranularity: {}
                  }
                }
              }
            }
          },
          Sbz: {
            type: 'list',
            member: {}
          },
          Sce: {
            type: 'structure',
            members: {
              ComparisonMethod: {},
              ComparisonFormat: {
                type: 'structure',
                members: {
                  NumberDisplayFormatConfiguration: {
                    shape: 'S3v'
                  },
                  PercentageDisplayFormatConfiguration: {
                    shape: 'S4a'
                  }
                }
              }
            }
          },
          Sdx: {
            type: 'structure',
            members: {
              AxisOptions: {
                shape: 'Sa3'
              },
              MissingDataConfigurations: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    TreatmentOption: {}
                  }
                }
              }
            }
          },
          Se1: {
            type: 'structure',
            members: {
              YAxisOptions: {
                type: 'structure',
                required: ['YAxis'],
                members: {
                  YAxis: {}
                }
              }
            }
          },
          Se5: {
            type: 'structure',
            members: {
              LineVisibility: {},
              LineInterpolation: {},
              LineStyle: {},
              LineWidth: {}
            }
          },
          Se8: {
            type: 'structure',
            members: {
              MarkerVisibility: {},
              MarkerShape: {},
              MarkerSize: {},
              MarkerColor: {}
            }
          },
          Sed: {
            type: 'structure',
            members: {
              LineStyleSettings: {
                shape: 'Se5'
              },
              MarkerStyleSettings: {
                shape: 'Se8'
              }
            }
          },
          Sej: {
            type: 'list',
            member: {
              shape: 'S3p'
            }
          },
          Sem: {
            type: 'structure',
            required: ['Colors', 'ColorFillType'],
            members: {
              Colors: {
                type: 'list',
                member: {
                  shape: 'Seo'
                }
              },
              ColorFillType: {},
              NullValueColor: {
                shape: 'Seo'
              }
            }
          },
          Seo: {
            type: 'structure',
            members: {
              Color: {},
              DataValue: {
                type: 'double'
              }
            }
          },
          Sev: {
            type: 'list',
            member: {
              shape: 'S4h'
            }
          },
          Sf1: {
            type: 'structure',
            members: {
              Bounds: {
                type: 'structure',
                required: ['North', 'South', 'West', 'East'],
                members: {
                  North: {
                    type: 'double'
                  },
                  South: {
                    type: 'double'
                  },
                  West: {
                    type: 'double'
                  },
                  East: {
                    type: 'double'
                  }
                }
              },
              MapZoomMode: {}
            }
          },
          Sf6: {
            type: 'structure',
            members: {
              BaseMapStyle: {}
            }
          },
          Sj2: {
            type: 'structure',
            required: ['Elements'],
            members: {
              Elements: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['ElementId', 'ElementType', 'ColumnSpan', 'RowSpan'],
                  members: {
                    ElementId: {},
                    ElementType: {},
                    ColumnIndex: {
                      type: 'integer'
                    },
                    ColumnSpan: {
                      type: 'integer'
                    },
                    RowIndex: {
                      type: 'integer'
                    },
                    RowSpan: {
                      type: 'integer'
                    }
                  }
                }
              },
              CanvasSizeOptions: {
                shape: 'Sja'
              }
            }
          },
          Sja: {
            type: 'structure',
            members: {
              ScreenCanvasSizeOptions: {
                type: 'structure',
                required: ['ResizeOption'],
                members: {
                  ResizeOption: {},
                  OptimizedViewPortWidth: {}
                }
              }
            }
          },
          Sje: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['ElementId', 'ElementType', 'XAxisLocation', 'YAxisLocation', 'Width', 'Height'],
              members: {
                ElementId: {},
                ElementType: {},
                XAxisLocation: {},
                YAxisLocation: {},
                Width: {},
                Height: {},
                Visibility: {},
                RenderingRules: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Expression', 'ConfigurationOverrides'],
                    members: {
                      Expression: {
                        shape: 'S4s'
                      },
                      ConfigurationOverrides: {
                        type: 'structure',
                        members: {
                          Visibility: {}
                        }
                      }
                    }
                  }
                },
                BorderStyle: {
                  shape: 'Sjk'
                },
                SelectedBorderStyle: {
                  shape: 'Sjk'
                },
                BackgroundStyle: {
                  type: 'structure',
                  members: {
                    Visibility: {},
                    Color: {}
                  }
                },
                LoadingAnimation: {
                  type: 'structure',
                  members: {
                    Visibility: {}
                  }
                }
              }
            }
          },
          Sjk: {
            type: 'structure',
            members: {
              Visibility: {},
              Color: {}
            }
          },
          Sjn: {
            type: 'structure',
            members: {
              ScreenCanvasSizeOptions: {
                type: 'structure',
                required: ['OptimizedViewPortWidth'],
                members: {
                  OptimizedViewPortWidth: {}
                }
              }
            }
          },
          Sjq: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['SectionId', 'Layout'],
              members: {
                SectionId: {},
                Layout: {
                  shape: 'Sjs'
                },
                Style: {
                  shape: 'Sju'
                }
              }
            }
          },
          Sjs: {
            type: 'structure',
            required: ['FreeFormLayout'],
            members: {
              FreeFormLayout: {
                type: 'structure',
                required: ['Elements'],
                members: {
                  Elements: {
                    shape: 'Sje'
                  }
                }
              }
            }
          },
          Sju: {
            type: 'structure',
            members: {
              Height: {},
              Padding: {
                shape: 'Sjv'
              }
            }
          },
          Sjv: {
            type: 'structure',
            members: {
              Top: {},
              Bottom: {},
              Left: {},
              Right: {}
            }
          },
          Sk3: {
            type: 'structure',
            members: {
              PaperCanvasSizeOptions: {
                type: 'structure',
                members: {
                  PaperSize: {},
                  PaperOrientation: {},
                  PaperMargin: {
                    shape: 'Sjv'
                  }
                }
              }
            }
          },
          Skb: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['DataSetIdentifier', 'Name', 'Expression'],
              members: {
                DataSetIdentifier: {},
                Name: {},
                Expression: {
                  type: 'string',
                  sensitive: true
                }
              }
            }
          },
          Ske: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                StringParameterDeclaration: {
                  type: 'structure',
                  required: ['ParameterValueType', 'Name'],
                  members: {
                    ParameterValueType: {},
                    Name: {},
                    DefaultValues: {
                      type: 'structure',
                      members: {
                        DynamicValue: {
                          shape: 'Skj'
                        },
                        StaticValues: {
                          shape: 'S7w'
                        }
                      }
                    },
                    ValueWhenUnset: {
                      type: 'structure',
                      members: {
                        ValueWhenUnsetOption: {},
                        CustomValue: {
                          shape: 'Sw'
                        }
                      }
                    },
                    MappedDataSetParameters: {
                      shape: 'Skm'
                    }
                  }
                },
                DecimalParameterDeclaration: {
                  type: 'structure',
                  required: ['ParameterValueType', 'Name'],
                  members: {
                    ParameterValueType: {},
                    Name: {},
                    DefaultValues: {
                      type: 'structure',
                      members: {
                        DynamicValue: {
                          shape: 'Skj'
                        },
                        StaticValues: {
                          shape: 'S80'
                        }
                      }
                    },
                    ValueWhenUnset: {
                      type: 'structure',
                      members: {
                        ValueWhenUnsetOption: {},
                        CustomValue: {
                          shape: 'S14'
                        }
                      }
                    },
                    MappedDataSetParameters: {
                      shape: 'Skm'
                    }
                  }
                },
                IntegerParameterDeclaration: {
                  type: 'structure',
                  required: ['ParameterValueType', 'Name'],
                  members: {
                    ParameterValueType: {},
                    Name: {},
                    DefaultValues: {
                      type: 'structure',
                      members: {
                        DynamicValue: {
                          shape: 'Skj'
                        },
                        StaticValues: {
                          shape: 'S7y'
                        }
                      }
                    },
                    ValueWhenUnset: {
                      type: 'structure',
                      members: {
                        ValueWhenUnsetOption: {},
                        CustomValue: {
                          shape: 'S10'
                        }
                      }
                    },
                    MappedDataSetParameters: {
                      shape: 'Skm'
                    }
                  }
                },
                DateTimeParameterDeclaration: {
                  type: 'structure',
                  required: ['Name'],
                  members: {
                    Name: {},
                    DefaultValues: {
                      type: 'structure',
                      members: {
                        DynamicValue: {
                          shape: 'Skj'
                        },
                        StaticValues: {
                          shape: 'S82'
                        },
                        RollingDate: {
                          shape: 'Skw'
                        }
                      }
                    },
                    TimeGranularity: {},
                    ValueWhenUnset: {
                      type: 'structure',
                      members: {
                        ValueWhenUnsetOption: {},
                        CustomValue: {
                          shape: 'S18'
                        }
                      }
                    },
                    MappedDataSetParameters: {
                      shape: 'Skm'
                    }
                  }
                }
              }
            }
          },
          Skj: {
            type: 'structure',
            required: ['DefaultValueColumn'],
            members: {
              UserNameColumn: {
                shape: 'S2g'
              },
              GroupNameColumn: {
                shape: 'S2g'
              },
              DefaultValueColumn: {
                shape: 'S2g'
              }
            }
          },
          Skm: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['DataSetIdentifier', 'DataSetParameterName'],
              members: {
                DataSetIdentifier: {},
                DataSetParameterName: {}
              }
            }
          },
          Skw: {
            type: 'structure',
            required: ['Expression'],
            members: {
              DataSetIdentifier: {},
              Expression: {
                shape: 'S4s'
              }
            }
          },
          Sky: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['FilterGroupId', 'Filters', 'ScopeConfiguration', 'CrossDataset'],
              members: {
                FilterGroupId: {},
                Filters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      CategoryFilter: {
                        type: 'structure',
                        required: ['FilterId', 'Column', 'Configuration'],
                        members: {
                          FilterId: {},
                          Column: {
                            shape: 'S2g'
                          },
                          Configuration: {
                            type: 'structure',
                            members: {
                              FilterListConfiguration: {
                                type: 'structure',
                                required: ['MatchOperator'],
                                members: {
                                  MatchOperator: {},
                                  CategoryValues: {
                                    shape: 'Sbz'
                                  },
                                  SelectAllOptions: {},
                                  NullOption: {}
                                }
                              },
                              CustomFilterListConfiguration: {
                                type: 'structure',
                                required: ['MatchOperator', 'NullOption'],
                                members: {
                                  MatchOperator: {},
                                  CategoryValues: {
                                    shape: 'Sbz'
                                  },
                                  SelectAllOptions: {},
                                  NullOption: {}
                                }
                              },
                              CustomFilterConfiguration: {
                                type: 'structure',
                                required: ['MatchOperator', 'NullOption'],
                                members: {
                                  MatchOperator: {},
                                  CategoryValue: {},
                                  SelectAllOptions: {},
                                  ParameterName: {},
                                  NullOption: {}
                                }
                              }
                            }
                          },
                          DefaultFilterControlConfiguration: {
                            shape: 'Sla'
                          }
                        }
                      },
                      NumericRangeFilter: {
                        type: 'structure',
                        required: ['FilterId', 'Column', 'NullOption'],
                        members: {
                          FilterId: {},
                          Column: {
                            shape: 'S2g'
                          },
                          IncludeMinimum: {
                            type: 'boolean'
                          },
                          IncludeMaximum: {
                            type: 'boolean'
                          },
                          RangeMinimum: {
                            shape: 'Slk'
                          },
                          RangeMaximum: {
                            shape: 'Slk'
                          },
                          SelectAllOptions: {},
                          AggregationFunction: {
                            shape: 'S53'
                          },
                          NullOption: {},
                          DefaultFilterControlConfiguration: {
                            shape: 'Sla'
                          }
                        }
                      },
                      NumericEqualityFilter: {
                        type: 'structure',
                        required: ['FilterId', 'Column', 'MatchOperator', 'NullOption'],
                        members: {
                          FilterId: {},
                          Column: {
                            shape: 'S2g'
                          },
                          Value: {
                            type: 'double'
                          },
                          SelectAllOptions: {},
                          MatchOperator: {},
                          AggregationFunction: {
                            shape: 'S53'
                          },
                          ParameterName: {},
                          NullOption: {},
                          DefaultFilterControlConfiguration: {
                            shape: 'Sla'
                          }
                        }
                      },
                      TimeEqualityFilter: {
                        type: 'structure',
                        required: ['FilterId', 'Column'],
                        members: {
                          FilterId: {},
                          Column: {
                            shape: 'S2g'
                          },
                          Value: {
                            type: 'timestamp'
                          },
                          ParameterName: {},
                          TimeGranularity: {},
                          RollingDate: {
                            shape: 'Skw'
                          },
                          DefaultFilterControlConfiguration: {
                            shape: 'Sla'
                          }
                        }
                      },
                      TimeRangeFilter: {
                        type: 'structure',
                        required: ['FilterId', 'Column', 'NullOption'],
                        members: {
                          FilterId: {},
                          Column: {
                            shape: 'S2g'
                          },
                          IncludeMinimum: {
                            type: 'boolean'
                          },
                          IncludeMaximum: {
                            type: 'boolean'
                          },
                          RangeMinimumValue: {
                            shape: 'Slq'
                          },
                          RangeMaximumValue: {
                            shape: 'Slq'
                          },
                          NullOption: {},
                          ExcludePeriodConfiguration: {
                            shape: 'Slr'
                          },
                          TimeGranularity: {},
                          DefaultFilterControlConfiguration: {
                            shape: 'Sla'
                          }
                        }
                      },
                      RelativeDatesFilter: {
                        type: 'structure',
                        required: ['FilterId', 'Column', 'AnchorDateConfiguration', 'TimeGranularity', 'RelativeDateType', 'NullOption'],
                        members: {
                          FilterId: {},
                          Column: {
                            shape: 'S2g'
                          },
                          AnchorDateConfiguration: {
                            type: 'structure',
                            members: {
                              AnchorOption: {},
                              ParameterName: {}
                            }
                          },
                          MinimumGranularity: {},
                          TimeGranularity: {},
                          RelativeDateType: {},
                          RelativeDateValue: {
                            type: 'integer'
                          },
                          ParameterName: {},
                          NullOption: {},
                          ExcludePeriodConfiguration: {
                            shape: 'Slr'
                          },
                          DefaultFilterControlConfiguration: {
                            shape: 'Sla'
                          }
                        }
                      },
                      TopBottomFilter: {
                        type: 'structure',
                        required: ['FilterId', 'Column', 'AggregationSortConfigurations'],
                        members: {
                          FilterId: {},
                          Column: {
                            shape: 'S2g'
                          },
                          Limit: {
                            type: 'integer'
                          },
                          AggregationSortConfigurations: {
                            type: 'list',
                            member: {
                              type: 'structure',
                              required: ['Column', 'SortDirection'],
                              members: {
                                Column: {
                                  shape: 'S2g'
                                },
                                SortDirection: {},
                                AggregationFunction: {
                                  shape: 'S53'
                                }
                              }
                            }
                          },
                          TimeGranularity: {},
                          ParameterName: {},
                          DefaultFilterControlConfiguration: {
                            shape: 'Sla'
                          }
                        }
                      }
                    }
                  }
                },
                ScopeConfiguration: {
                  type: 'structure',
                  members: {
                    SelectedSheets: {
                      type: 'structure',
                      members: {
                        SheetVisualScopingConfigurations: {
                          type: 'list',
                          member: {
                            type: 'structure',
                            required: ['SheetId', 'Scope'],
                            members: {
                              SheetId: {},
                              Scope: {},
                              VisualIds: {
                                type: 'list',
                                member: {}
                              }
                            }
                          }
                        }
                      }
                    },
                    AllSheets: {
                      type: 'structure',
                      members: {}
                    }
                  }
                },
                Status: {},
                CrossDataset: {}
              }
            }
          },
          Sla: {
            type: 'structure',
            required: ['Title', 'ControlOptions'],
            members: {
              Title: {},
              ControlOptions: {
                type: 'structure',
                members: {
                  DefaultDateTimePickerOptions: {
                    type: 'structure',
                    members: {
                      Type: {},
                      DisplayOptions: {
                        shape: 'S1v'
                      }
                    }
                  },
                  DefaultListOptions: {
                    type: 'structure',
                    members: {
                      DisplayOptions: {
                        shape: 'S2a'
                      },
                      Type: {},
                      SelectableValues: {
                        shape: 'S31'
                      }
                    }
                  },
                  DefaultDropdownOptions: {
                    type: 'structure',
                    members: {
                      DisplayOptions: {
                        shape: 'S2m'
                      },
                      Type: {},
                      SelectableValues: {
                        shape: 'S31'
                      }
                    }
                  },
                  DefaultTextFieldOptions: {
                    type: 'structure',
                    members: {
                      DisplayOptions: {
                        shape: 'S2o'
                      }
                    }
                  },
                  DefaultTextAreaOptions: {
                    type: 'structure',
                    members: {
                      Delimiter: {},
                      DisplayOptions: {
                        shape: 'S2s'
                      }
                    }
                  },
                  DefaultSliderOptions: {
                    type: 'structure',
                    required: ['MaximumValue', 'MinimumValue', 'StepSize'],
                    members: {
                      DisplayOptions: {
                        shape: 'S2u'
                      },
                      Type: {},
                      MaximumValue: {
                        type: 'double'
                      },
                      MinimumValue: {
                        type: 'double'
                      },
                      StepSize: {
                        type: 'double'
                      }
                    }
                  },
                  DefaultRelativeDateTimeOptions: {
                    type: 'structure',
                    members: {
                      DisplayOptions: {
                        shape: 'S38'
                      }
                    }
                  }
                }
              }
            }
          },
          Slk: {
            type: 'structure',
            members: {
              StaticValue: {
                type: 'double'
              },
              Parameter: {}
            }
          },
          Slq: {
            type: 'structure',
            members: {
              StaticValue: {
                type: 'timestamp'
              },
              RollingDate: {
                shape: 'Skw'
              },
              Parameter: {}
            }
          },
          Slr: {
            type: 'structure',
            required: ['Amount', 'Granularity'],
            members: {
              Amount: {
                type: 'integer'
              },
              Granularity: {},
              Status: {}
            }
          },
          Sm7: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Column'],
              members: {
                Column: {
                  shape: 'S2g'
                },
                FormatConfiguration: {
                  shape: 'S4w'
                },
                Role: {},
                ColorsConfiguration: {
                  type: 'structure',
                  members: {
                    CustomColors: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        required: ['Color'],
                        members: {
                          FieldValue: {
                            shape: 'S8h'
                          },
                          Color: {},
                          SpecialValue: {}
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          Sme: {
            type: 'structure',
            required: ['DefaultNewSheetConfiguration'],
            members: {
              DefaultNewSheetConfiguration: {
                type: 'structure',
                members: {
                  InteractiveLayoutConfiguration: {
                    type: 'structure',
                    members: {
                      Grid: {
                        type: 'structure',
                        required: ['CanvasSizeOptions'],
                        members: {
                          CanvasSizeOptions: {
                            shape: 'Sja'
                          }
                        }
                      },
                      FreeForm: {
                        type: 'structure',
                        required: ['CanvasSizeOptions'],
                        members: {
                          CanvasSizeOptions: {
                            shape: 'Sjn'
                          }
                        }
                      }
                    }
                  },
                  PaginatedLayoutConfiguration: {
                    type: 'structure',
                    members: {
                      SectionBased: {
                        type: 'structure',
                        required: ['CanvasSizeOptions'],
                        members: {
                          CanvasSizeOptions: {
                            shape: 'Sk3'
                          }
                        }
                      }
                    }
                  },
                  SheetContentType: {}
                }
              }
            }
          },
          Sml: {
            type: 'structure',
            members: {
              Timezone: {},
              WeekStart: {}
            }
          },
          Smn: {
            type: 'structure',
            required: ['Mode'],
            members: {
              Mode: {}
            }
          },
          Smp: {
            type: 'list',
            member: {}
          },
          Smu: {
            type: 'structure',
            members: {
              SourceTemplate: {
                type: 'structure',
                required: ['DataSetReferences', 'Arn'],
                members: {
                  DataSetReferences: {
                    shape: 'S1f'
                  },
                  Arn: {}
                }
              }
            }
          },
          Smx: {
            type: 'structure',
            members: {
              AdHocFilteringOption: {
                type: 'structure',
                members: {
                  AvailabilityStatus: {}
                }
              },
              ExportToCSVOption: {
                type: 'structure',
                members: {
                  AvailabilityStatus: {}
                }
              },
              SheetControlsOption: {
                type: 'structure',
                members: {
                  VisibilityState: {}
                }
              },
              VisualPublishOptions: {
                deprecated: true,
                deprecatedMessage: 'VisualPublishOptions property will reach its end of standard support in a future release. To perform this action, use ExportWithHiddenFields.',
                type: 'structure',
                members: {
                  ExportHiddenFieldsOption: {
                    type: 'structure',
                    members: {
                      AvailabilityStatus: {}
                    }
                  }
                }
              },
              SheetLayoutElementMaximizationOption: {
                type: 'structure',
                members: {
                  AvailabilityStatus: {}
                }
              },
              VisualMenuOption: {
                shape: 'S6i'
              },
              VisualAxisSortOption: {
                type: 'structure',
                members: {
                  AvailabilityStatus: {}
                }
              },
              ExportWithHiddenFieldsOption: {
                type: 'structure',
                members: {
                  AvailabilityStatus: {}
                }
              },
              DataPointDrillUpDownOption: {
                type: 'structure',
                members: {
                  AvailabilityStatus: {}
                }
              },
              DataPointMenuLabelOption: {
                type: 'structure',
                members: {
                  AvailabilityStatus: {}
                }
              },
              DataPointTooltipOption: {
                type: 'structure',
                members: {
                  AvailabilityStatus: {}
                }
              }
            }
          },
          Sna: {
            type: 'structure',
            required: ['DataSetIdentifierDeclarations'],
            members: {
              DataSetIdentifierDeclarations: {
                shape: 'S1i'
              },
              Sheets: {
                shape: 'S1l'
              },
              CalculatedFields: {
                shape: 'Skb'
              },
              ParameterDeclarations: {
                shape: 'Ske'
              },
              FilterGroups: {
                shape: 'Sky'
              },
              ColumnConfigurations: {
                shape: 'Sm7'
              },
              AnalysisDefaults: {
                shape: 'Sme'
              },
              Options: {
                shape: 'Sml'
              }
            }
          },
          Snb: {
            type: 'structure',
            members: {
              Permissions: {
                shape: 'S19'
              }
            }
          },
          Snc: {
            type: 'list',
            member: {}
          },
          Sni: {
            type: 'map',
            key: {},
            value: {
              type: 'structure',
              members: {
                RelationalTable: {
                  type: 'structure',
                  required: ['DataSourceArn', 'Name', 'InputColumns'],
                  members: {
                    DataSourceArn: {},
                    Catalog: {},
                    Schema: {},
                    Name: {},
                    InputColumns: {
                      shape: 'Snp'
                    }
                  }
                },
                CustomSql: {
                  type: 'structure',
                  required: ['DataSourceArn', 'Name', 'SqlQuery'],
                  members: {
                    DataSourceArn: {},
                    Name: {},
                    SqlQuery: {},
                    Columns: {
                      shape: 'Snp'
                    }
                  }
                },
                S3Source: {
                  type: 'structure',
                  required: ['DataSourceArn', 'InputColumns'],
                  members: {
                    DataSourceArn: {},
                    UploadSettings: {
                      type: 'structure',
                      members: {
                        Format: {},
                        StartFromRow: {
                          type: 'integer'
                        },
                        ContainsHeader: {
                          type: 'boolean'
                        },
                        TextQualifier: {},
                        Delimiter: {}
                      }
                    },
                    InputColumns: {
                      shape: 'Snp'
                    }
                  }
                }
              }
            }
          },
          Snp: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Name', 'Type'],
              members: {
                Name: {},
                Type: {},
                SubType: {}
              }
            }
          },
          So2: {
            type: 'map',
            key: {},
            value: {
              type: 'structure',
              required: ['Alias', 'Source'],
              members: {
                Alias: {},
                DataTransforms: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ProjectOperation: {
                        type: 'structure',
                        required: ['ProjectedColumns'],
                        members: {
                          ProjectedColumns: {
                            type: 'list',
                            member: {}
                          }
                        }
                      },
                      FilterOperation: {
                        type: 'structure',
                        required: ['ConditionExpression'],
                        members: {
                          ConditionExpression: {
                            shape: 'S4s'
                          }
                        }
                      },
                      CreateColumnsOperation: {
                        type: 'structure',
                        required: ['Columns'],
                        members: {
                          Columns: {
                            type: 'list',
                            member: {
                              type: 'structure',
                              required: ['ColumnName', 'ColumnId', 'Expression'],
                              members: {
                                ColumnName: {},
                                ColumnId: {},
                                Expression: {
                                  shape: 'S4s'
                                }
                              }
                            }
                          }
                        }
                      },
                      RenameColumnOperation: {
                        type: 'structure',
                        required: ['ColumnName', 'NewColumnName'],
                        members: {
                          ColumnName: {},
                          NewColumnName: {}
                        }
                      },
                      CastColumnTypeOperation: {
                        type: 'structure',
                        required: ['ColumnName', 'NewColumnType'],
                        members: {
                          ColumnName: {},
                          NewColumnType: {},
                          SubType: {},
                          Format: {}
                        }
                      },
                      TagColumnOperation: {
                        type: 'structure',
                        required: ['ColumnName', 'Tags'],
                        members: {
                          ColumnName: {},
                          Tags: {
                            type: 'list',
                            member: {
                              type: 'structure',
                              members: {
                                ColumnGeographicRole: {},
                                ColumnDescription: {
                                  type: 'structure',
                                  members: {
                                    Text: {}
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      UntagColumnOperation: {
                        type: 'structure',
                        required: ['ColumnName', 'TagNames'],
                        members: {
                          ColumnName: {},
                          TagNames: {
                            type: 'list',
                            member: {}
                          }
                        }
                      },
                      OverrideDatasetParameterOperation: {
                        type: 'structure',
                        required: ['ParameterName'],
                        members: {
                          ParameterName: {},
                          NewParameterName: {},
                          NewDefaultValues: {
                            type: 'structure',
                            members: {
                              StringStaticValues: {
                                shape: 'Sov'
                              },
                              DecimalStaticValues: {
                                shape: 'Sox'
                              },
                              DateTimeStaticValues: {
                                shape: 'Soz'
                              },
                              IntegerStaticValues: {
                                shape: 'Sp1'
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                Source: {
                  type: 'structure',
                  members: {
                    JoinInstruction: {
                      type: 'structure',
                      required: ['LeftOperand', 'RightOperand', 'Type', 'OnClause'],
                      members: {
                        LeftOperand: {},
                        RightOperand: {},
                        LeftJoinKeyProperties: {
                          shape: 'Sp5'
                        },
                        RightJoinKeyProperties: {
                          shape: 'Sp5'
                        },
                        Type: {},
                        OnClause: {}
                      }
                    },
                    PhysicalTableId: {},
                    DataSetArn: {}
                  }
                }
              }
            }
          },
          Sov: {
            type: 'list',
            member: {}
          },
          Sox: {
            type: 'list',
            member: {
              type: 'double'
            }
          },
          Soz: {
            type: 'list',
            member: {
              type: 'timestamp'
            }
          },
          Sp1: {
            type: 'list',
            member: {
              type: 'long'
            }
          },
          Sp5: {
            type: 'structure',
            members: {
              UniqueKey: {
                type: 'boolean'
              }
            }
          },
          Sp9: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                GeoSpatialColumnGroup: {
                  type: 'structure',
                  required: ['Name', 'Columns'],
                  members: {
                    Name: {},
                    CountryCode: {},
                    Columns: {
                      type: 'list',
                      member: {}
                    }
                  }
                }
              }
            }
          },
          Spf: {
            type: 'map',
            key: {},
            value: {
              type: 'structure',
              members: {
                description: {},
                columns: {
                  type: 'list',
                  member: {}
                }
              }
            }
          },
          Spk: {
            type: 'structure',
            required: ['Arn', 'PermissionPolicy'],
            members: {
              Namespace: {},
              Arn: {},
              PermissionPolicy: {},
              FormatVersion: {},
              Status: {}
            }
          },
          Spo: {
            type: 'structure',
            required: ['TagRules'],
            members: {
              Status: {},
              TagRules: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['TagKey', 'ColumnName'],
                  members: {
                    TagKey: {},
                    ColumnName: {},
                    TagMultiValueDelimiter: {},
                    MatchAllValue: {
                      shape: 'Spt'
                    }
                  }
                }
              },
              TagRuleConfigurations: {
                type: 'list',
                member: {
                  type: 'list',
                  member: {}
                }
              }
            }
          },
          Spt: {
            type: 'string',
            sensitive: true
          },
          Spw: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Principals: {
                  type: 'list',
                  member: {}
                },
                ColumnNames: {
                  type: 'list',
                  member: {}
                }
              }
            }
          },
          Sq0: {
            type: 'structure',
            members: {
              DisableUseAsDirectQuerySource: {
                type: 'boolean'
              },
              DisableUseAsImportedSource: {
                type: 'boolean'
              }
            }
          },
          Sq1: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                StringDatasetParameter: {
                  type: 'structure',
                  required: ['Id', 'Name', 'ValueType'],
                  members: {
                    Id: {},
                    Name: {},
                    ValueType: {},
                    DefaultValues: {
                      type: 'structure',
                      members: {
                        StaticValues: {
                          shape: 'Sov'
                        }
                      }
                    }
                  }
                },
                DecimalDatasetParameter: {
                  type: 'structure',
                  required: ['Id', 'Name', 'ValueType'],
                  members: {
                    Id: {},
                    Name: {},
                    ValueType: {},
                    DefaultValues: {
                      type: 'structure',
                      members: {
                        StaticValues: {
                          shape: 'Sox'
                        }
                      }
                    }
                  }
                },
                IntegerDatasetParameter: {
                  type: 'structure',
                  required: ['Id', 'Name', 'ValueType'],
                  members: {
                    Id: {},
                    Name: {},
                    ValueType: {},
                    DefaultValues: {
                      type: 'structure',
                      members: {
                        StaticValues: {
                          shape: 'Sp1'
                        }
                      }
                    }
                  }
                },
                DateTimeDatasetParameter: {
                  type: 'structure',
                  required: ['Id', 'Name', 'ValueType'],
                  members: {
                    Id: {},
                    Name: {},
                    ValueType: {},
                    TimeGranularity: {},
                    DefaultValues: {
                      type: 'structure',
                      members: {
                        StaticValues: {
                          shape: 'Soz'
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          Sqg: {
            type: 'structure',
            members: {
              AmazonElasticsearchParameters: {
                type: 'structure',
                required: ['Domain'],
                members: {
                  Domain: {}
                }
              },
              AthenaParameters: {
                type: 'structure',
                members: {
                  WorkGroup: {},
                  RoleArn: {}
                }
              },
              AuroraParameters: {
                type: 'structure',
                required: ['Host', 'Port', 'Database'],
                members: {
                  Host: {},
                  Port: {
                    type: 'integer'
                  },
                  Database: {}
                }
              },
              AuroraPostgreSqlParameters: {
                type: 'structure',
                required: ['Host', 'Port', 'Database'],
                members: {
                  Host: {},
                  Port: {
                    type: 'integer'
                  },
                  Database: {}
                }
              },
              AwsIotAnalyticsParameters: {
                type: 'structure',
                required: ['DataSetName'],
                members: {
                  DataSetName: {}
                }
              },
              JiraParameters: {
                type: 'structure',
                required: ['SiteBaseUrl'],
                members: {
                  SiteBaseUrl: {}
                }
              },
              MariaDbParameters: {
                type: 'structure',
                required: ['Host', 'Port', 'Database'],
                members: {
                  Host: {},
                  Port: {
                    type: 'integer'
                  },
                  Database: {}
                }
              },
              MySqlParameters: {
                type: 'structure',
                required: ['Host', 'Port', 'Database'],
                members: {
                  Host: {},
                  Port: {
                    type: 'integer'
                  },
                  Database: {}
                }
              },
              OracleParameters: {
                type: 'structure',
                required: ['Host', 'Port', 'Database'],
                members: {
                  Host: {},
                  Port: {
                    type: 'integer'
                  },
                  Database: {}
                }
              },
              PostgreSqlParameters: {
                type: 'structure',
                required: ['Host', 'Port', 'Database'],
                members: {
                  Host: {},
                  Port: {
                    type: 'integer'
                  },
                  Database: {}
                }
              },
              PrestoParameters: {
                type: 'structure',
                required: ['Host', 'Port', 'Catalog'],
                members: {
                  Host: {},
                  Port: {
                    type: 'integer'
                  },
                  Catalog: {}
                }
              },
              RdsParameters: {
                type: 'structure',
                required: ['InstanceId', 'Database'],
                members: {
                  InstanceId: {},
                  Database: {}
                }
              },
              RedshiftParameters: {
                type: 'structure',
                required: ['Database'],
                members: {
                  Host: {},
                  Port: {
                    type: 'integer'
                  },
                  Database: {},
                  ClusterId: {},
                  IAMParameters: {
                    type: 'structure',
                    required: ['RoleArn'],
                    members: {
                      RoleArn: {},
                      DatabaseUser: {},
                      DatabaseGroups: {
                        type: 'list',
                        member: {}
                      },
                      AutoCreateDatabaseUser: {
                        type: 'boolean'
                      }
                    }
                  },
                  IdentityCenterConfiguration: {
                    type: 'structure',
                    members: {
                      EnableIdentityPropagation: {
                        type: 'boolean'
                      }
                    }
                  }
                }
              },
              S3Parameters: {
                type: 'structure',
                required: ['ManifestFileLocation'],
                members: {
                  ManifestFileLocation: {
                    type: 'structure',
                    required: ['Bucket', 'Key'],
                    members: {
                      Bucket: {},
                      Key: {}
                    }
                  },
                  RoleArn: {}
                }
              },
              ServiceNowParameters: {
                type: 'structure',
                required: ['SiteBaseUrl'],
                members: {
                  SiteBaseUrl: {}
                }
              },
              SnowflakeParameters: {
                type: 'structure',
                required: ['Host', 'Database', 'Warehouse'],
                members: {
                  Host: {},
                  Database: {},
                  Warehouse: {}
                }
              },
              SparkParameters: {
                type: 'structure',
                required: ['Host', 'Port'],
                members: {
                  Host: {},
                  Port: {
                    type: 'integer'
                  }
                }
              },
              SqlServerParameters: {
                type: 'structure',
                required: ['Host', 'Port', 'Database'],
                members: {
                  Host: {},
                  Port: {
                    type: 'integer'
                  },
                  Database: {}
                }
              },
              TeradataParameters: {
                type: 'structure',
                required: ['Host', 'Port', 'Database'],
                members: {
                  Host: {},
                  Port: {
                    type: 'integer'
                  },
                  Database: {}
                }
              },
              TwitterParameters: {
                type: 'structure',
                required: ['Query', 'MaxRows'],
                members: {
                  Query: {},
                  MaxRows: {
                    type: 'integer'
                  }
                }
              },
              AmazonOpenSearchParameters: {
                type: 'structure',
                required: ['Domain'],
                members: {
                  Domain: {}
                }
              },
              ExasolParameters: {
                type: 'structure',
                required: ['Host', 'Port'],
                members: {
                  Host: {},
                  Port: {
                    type: 'integer'
                  }
                }
              },
              DatabricksParameters: {
                type: 'structure',
                required: ['Host', 'Port', 'SqlEndpointPath'],
                members: {
                  Host: {},
                  Port: {
                    type: 'integer'
                  },
                  SqlEndpointPath: {}
                }
              },
              StarburstParameters: {
                type: 'structure',
                required: ['Host', 'Port', 'Catalog'],
                members: {
                  Host: {},
                  Port: {
                    type: 'integer'
                  },
                  Catalog: {},
                  ProductType: {}
                }
              },
              TrinoParameters: {
                type: 'structure',
                required: ['Host', 'Port', 'Catalog'],
                members: {
                  Host: {},
                  Port: {
                    type: 'integer'
                  },
                  Catalog: {}
                }
              },
              BigQueryParameters: {
                type: 'structure',
                required: ['ProjectId'],
                members: {
                  ProjectId: {},
                  DataSetRegion: {}
                }
              }
            }
          },
          Srx: {
            type: 'structure',
            members: {
              CredentialPair: {
                type: 'structure',
                required: ['Username', 'Password'],
                members: {
                  Username: {},
                  Password: {},
                  AlternateDataSourceParameters: {
                    shape: 'Ss1'
                  }
                }
              },
              CopySourceArn: {},
              SecretArn: {}
            },
            sensitive: true
          },
          Ss1: {
            type: 'list',
            member: {
              shape: 'Sqg'
            }
          },
          Ss4: {
            type: 'structure',
            required: ['VpcConnectionArn'],
            members: {
              VpcConnectionArn: {}
            }
          },
          Ss5: {
            type: 'structure',
            members: {
              DisableSsl: {
                type: 'boolean'
              }
            }
          },
          Ssl: {
            type: 'structure',
            members: {
              Arn: {},
              GroupName: {},
              Description: {},
              PrincipalId: {}
            }
          },
          Ssp: {
            type: 'structure',
            members: {
              Arn: {},
              MemberName: {}
            }
          },
          Sst: {
            type: 'map',
            key: {},
            value: {
              type: 'list',
              member: {}
            }
          },
          St6: {
            type: 'structure',
            required: ['ScheduleId', 'ScheduleFrequency', 'RefreshType'],
            members: {
              ScheduleId: {},
              ScheduleFrequency: {
                type: 'structure',
                required: ['Interval'],
                members: {
                  Interval: {},
                  RefreshOnDay: {
                    type: 'structure',
                    members: {
                      DayOfWeek: {},
                      DayOfMonth: {}
                    }
                  },
                  Timezone: {},
                  TimeOfTheDay: {}
                }
              },
              StartAfterDateTime: {
                type: 'timestamp'
              },
              RefreshType: {},
              Arn: {}
            }
          },
          Sti: {
            type: 'structure',
            members: {
              SourceAnalysis: {
                type: 'structure',
                required: ['Arn', 'DataSetReferences'],
                members: {
                  Arn: {},
                  DataSetReferences: {
                    shape: 'S1f'
                  }
                }
              },
              SourceTemplate: {
                type: 'structure',
                required: ['Arn'],
                members: {
                  Arn: {}
                }
              }
            }
          },
          Stl: {
            type: 'structure',
            required: ['DataSetConfigurations'],
            members: {
              DataSetConfigurations: {
                shape: 'Stm'
              },
              Sheets: {
                shape: 'S1l'
              },
              CalculatedFields: {
                shape: 'Skb'
              },
              ParameterDeclarations: {
                shape: 'Ske'
              },
              FilterGroups: {
                shape: 'Sky'
              },
              ColumnConfigurations: {
                shape: 'Sm7'
              },
              AnalysisDefaults: {
                shape: 'Sme'
              },
              Options: {
                shape: 'Sml'
              }
            }
          },
          Stm: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Placeholder: {},
                DataSetSchema: {
                  type: 'structure',
                  members: {
                    ColumnSchemaList: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          Name: {},
                          DataType: {},
                          GeographicRole: {}
                        }
                      }
                    }
                  }
                },
                ColumnGroupSchemaList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Name: {},
                      ColumnGroupColumnSchemaList: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            Name: {}
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          Su0: {
            type: 'structure',
            members: {
              AliasName: {},
              Arn: {},
              TemplateVersionNumber: {
                type: 'long'
              }
            }
          },
          Su3: {
            type: 'structure',
            members: {
              DataColorPalette: {
                type: 'structure',
                members: {
                  Colors: {
                    shape: 'Su5'
                  },
                  MinMaxGradient: {
                    shape: 'Su5'
                  },
                  EmptyFillColor: {}
                }
              },
              UIColorPalette: {
                type: 'structure',
                members: {
                  PrimaryForeground: {},
                  PrimaryBackground: {},
                  SecondaryForeground: {},
                  SecondaryBackground: {},
                  Accent: {},
                  AccentForeground: {},
                  Danger: {},
                  DangerForeground: {},
                  Warning: {},
                  WarningForeground: {},
                  Success: {},
                  SuccessForeground: {},
                  Dimension: {},
                  DimensionForeground: {},
                  Measure: {},
                  MeasureForeground: {}
                }
              },
              Sheet: {
                type: 'structure',
                members: {
                  Tile: {
                    type: 'structure',
                    members: {
                      Border: {
                        type: 'structure',
                        members: {
                          Show: {
                            type: 'boolean'
                          }
                        }
                      }
                    }
                  },
                  TileLayout: {
                    type: 'structure',
                    members: {
                      Gutter: {
                        type: 'structure',
                        members: {
                          Show: {
                            type: 'boolean'
                          }
                        }
                      },
                      Margin: {
                        type: 'structure',
                        members: {
                          Show: {
                            type: 'boolean'
                          }
                        }
                      }
                    }
                  }
                }
              },
              Typography: {
                type: 'structure',
                members: {
                  FontFamilies: {
                    type: 'list',
                    member: {
                      type: 'structure',
                      members: {
                        FontFamily: {}
                      }
                    }
                  }
                }
              }
            }
          },
          Su5: {
            type: 'list',
            member: {}
          },
          Suj: {
            type: 'structure',
            members: {
              Arn: {},
              AliasName: {},
              ThemeVersionNumber: {
                type: 'long'
              }
            }
          },
          Sum: {
            type: 'structure',
            members: {
              Name: {},
              Description: {},
              UserExperienceVersion: {},
              DataSets: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['DatasetArn'],
                  members: {
                    DatasetArn: {},
                    DatasetName: {},
                    DatasetDescription: {},
                    DataAggregation: {
                      type: 'structure',
                      members: {
                        DatasetRowDateGranularity: {},
                        DefaultDateColumnName: {}
                      }
                    },
                    Filters: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        required: ['FilterName', 'OperandFieldName'],
                        members: {
                          FilterDescription: {},
                          FilterClass: {},
                          FilterName: {},
                          FilterSynonyms: {
                            shape: 'Suw'
                          },
                          OperandFieldName: {},
                          FilterType: {},
                          CategoryFilter: {
                            type: 'structure',
                            members: {
                              CategoryFilterFunction: {},
                              CategoryFilterType: {},
                              Constant: {
                                type: 'structure',
                                members: {
                                  ConstantType: {},
                                  SingularConstant: {},
                                  CollectiveConstant: {
                                    type: 'structure',
                                    members: {
                                      ValueList: {
                                        shape: 'Sv4'
                                      }
                                    }
                                  }
                                },
                                sensitive: true
                              },
                              Inverse: {
                                type: 'boolean'
                              }
                            }
                          },
                          NumericEqualityFilter: {
                            type: 'structure',
                            members: {
                              Constant: {
                                shape: 'Sv6'
                              },
                              Aggregation: {}
                            }
                          },
                          NumericRangeFilter: {
                            type: 'structure',
                            members: {
                              Inclusive: {
                                type: 'boolean'
                              },
                              Constant: {
                                shape: 'Sv9'
                              },
                              Aggregation: {}
                            }
                          },
                          DateRangeFilter: {
                            type: 'structure',
                            members: {
                              Inclusive: {
                                type: 'boolean'
                              },
                              Constant: {
                                shape: 'Sv9'
                              }
                            }
                          },
                          RelativeDateFilter: {
                            type: 'structure',
                            members: {
                              TimeGranularity: {},
                              RelativeDateFilterFunction: {},
                              Constant: {
                                shape: 'Sv6'
                              }
                            }
                          }
                        }
                      }
                    },
                    Columns: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        required: ['ColumnName'],
                        members: {
                          ColumnName: {},
                          ColumnFriendlyName: {},
                          ColumnDescription: {},
                          ColumnSynonyms: {
                            shape: 'Suw'
                          },
                          ColumnDataRole: {},
                          Aggregation: {},
                          IsIncludedInTopic: {
                            type: 'boolean'
                          },
                          DisableIndexing: {
                            type: 'boolean'
                          },
                          ComparativeOrder: {
                            shape: 'Svj'
                          },
                          SemanticType: {
                            shape: 'Svm'
                          },
                          TimeGranularity: {},
                          AllowedAggregations: {
                            shape: 'Svo'
                          },
                          NotAllowedAggregations: {
                            shape: 'Svo'
                          },
                          DefaultFormatting: {
                            shape: 'Svq'
                          },
                          NeverAggregateInFilter: {
                            type: 'boolean'
                          },
                          CellValueSynonyms: {
                            shape: 'Svv'
                          },
                          NonAdditive: {
                            type: 'boolean'
                          }
                        }
                      }
                    },
                    CalculatedFields: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        required: ['CalculatedFieldName', 'Expression'],
                        members: {
                          CalculatedFieldName: {},
                          CalculatedFieldDescription: {},
                          Expression: {
                            shape: 'S4s'
                          },
                          CalculatedFieldSynonyms: {
                            shape: 'Suw'
                          },
                          IsIncludedInTopic: {
                            type: 'boolean'
                          },
                          DisableIndexing: {
                            type: 'boolean'
                          },
                          ColumnDataRole: {},
                          TimeGranularity: {},
                          DefaultFormatting: {
                            shape: 'Svq'
                          },
                          Aggregation: {},
                          ComparativeOrder: {
                            shape: 'Svj'
                          },
                          SemanticType: {
                            shape: 'Svm'
                          },
                          AllowedAggregations: {
                            shape: 'Svo'
                          },
                          NotAllowedAggregations: {
                            shape: 'Svo'
                          },
                          NeverAggregateInFilter: {
                            type: 'boolean'
                          },
                          CellValueSynonyms: {
                            shape: 'Svv'
                          },
                          NonAdditive: {
                            type: 'boolean'
                          }
                        }
                      }
                    },
                    NamedEntities: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        required: ['EntityName'],
                        members: {
                          EntityName: {},
                          EntityDescription: {},
                          EntitySynonyms: {
                            shape: 'Suw'
                          },
                          SemanticEntityType: {
                            type: 'structure',
                            members: {
                              TypeName: {},
                              SubTypeName: {},
                              TypeParameters: {
                                shape: 'Svn'
                              }
                            }
                          },
                          Definition: {
                            type: 'list',
                            member: {
                              type: 'structure',
                              members: {
                                FieldName: {},
                                PropertyName: {},
                                PropertyRole: {},
                                PropertyUsage: {},
                                Metric: {
                                  type: 'structure',
                                  members: {
                                    Aggregation: {},
                                    AggregationFunctionParameters: {
                                      type: 'map',
                                      key: {},
                                      value: {}
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          Suw: {
            type: 'list',
            member: {}
          },
          Sv4: {
            type: 'list',
            member: {}
          },
          Sv6: {
            type: 'structure',
            members: {
              ConstantType: {},
              SingularConstant: {}
            },
            sensitive: true
          },
          Sv9: {
            type: 'structure',
            members: {
              ConstantType: {},
              RangeConstant: {
                type: 'structure',
                members: {
                  Minimum: {},
                  Maximum: {}
                }
              }
            },
            sensitive: true
          },
          Svj: {
            type: 'structure',
            members: {
              UseOrdering: {},
              SpecifedOrder: {
                shape: 'Sv4'
              },
              TreatUndefinedSpecifiedValues: {}
            }
          },
          Svm: {
            type: 'structure',
            members: {
              TypeName: {},
              SubTypeName: {},
              TypeParameters: {
                shape: 'Svn'
              },
              TruthyCellValue: {
                shape: 'Sw'
              },
              TruthyCellValueSynonyms: {
                shape: 'Sv'
              },
              FalseyCellValue: {
                shape: 'Sw'
              },
              FalseyCellValueSynonyms: {
                shape: 'Sv'
              }
            }
          },
          Svn: {
            type: 'map',
            key: {},
            value: {}
          },
          Svo: {
            type: 'list',
            member: {}
          },
          Svq: {
            type: 'structure',
            members: {
              DisplayFormat: {},
              DisplayFormatOptions: {
                type: 'structure',
                members: {
                  UseBlankCellFormat: {
                    type: 'boolean'
                  },
                  BlankCellFormat: {},
                  DateFormat: {},
                  DecimalSeparator: {},
                  GroupingSeparator: {},
                  UseGrouping: {
                    type: 'boolean'
                  },
                  FractionDigits: {
                    type: 'integer'
                  },
                  Prefix: {},
                  Suffix: {},
                  UnitScaler: {},
                  NegativeFormat: {
                    type: 'structure',
                    members: {
                      Prefix: {},
                      Suffix: {}
                    }
                  },
                  CurrencySymbol: {}
                }
              }
            }
          },
          Svv: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                CellValue: {},
                Synonyms: {
                  shape: 'Sv4'
                }
              }
            }
          },
          Swb: {
            type: 'structure',
            required: ['IsEnabled', 'BasedOnSpiceSchedule'],
            members: {
              IsEnabled: {
                type: 'boolean'
              },
              BasedOnSpiceSchedule: {
                type: 'boolean'
              },
              StartingAt: {
                type: 'timestamp'
              },
              Timezone: {},
              RepeatAt: {},
              TopicScheduleType: {}
            }
          },
          Swg: {
            type: 'list',
            member: {}
          },
          Swi: {
            type: 'list',
            member: {}
          },
          Swk: {
            type: 'list',
            member: {}
          },
          Syl: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Type: {},
                Message: {},
                ViolatedEntities: {
                  shape: 'Syo'
                }
              }
            }
          },
          Syo: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Path: {}
              }
            }
          },
          Syq: {
            type: 'list',
            member: {}
          },
          Syr: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                SheetId: {},
                Name: {}
              }
            }
          },
          Sz0: {
            type: 'string',
            sensitive: true
          },
          Sz3: {
            type: 'list',
            member: {}
          },
          Sz5: {
            type: 'structure',
            members: {
              ResourceIdOverrideConfiguration: {
                type: 'structure',
                members: {
                  PrefixForAllResources: {
                    type: 'boolean'
                  }
                }
              },
              VPCConnections: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['Arn', 'Properties'],
                  members: {
                    Arn: {},
                    Properties: {
                      type: 'list',
                      member: {}
                    }
                  }
                }
              },
              RefreshSchedules: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['Arn', 'Properties'],
                  members: {
                    Arn: {},
                    Properties: {
                      type: 'list',
                      member: {}
                    }
                  }
                }
              },
              DataSources: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['Arn', 'Properties'],
                  members: {
                    Arn: {},
                    Properties: {
                      type: 'list',
                      member: {}
                    }
                  }
                }
              },
              DataSets: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['Arn', 'Properties'],
                  members: {
                    Arn: {},
                    Properties: {
                      type: 'list',
                      member: {}
                    }
                  }
                }
              },
              Themes: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['Arn', 'Properties'],
                  members: {
                    Arn: {},
                    Properties: {
                      type: 'list',
                      member: {}
                    }
                  }
                }
              },
              Analyses: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['Arn', 'Properties'],
                  members: {
                    Arn: {},
                    Properties: {
                      type: 'list',
                      member: {}
                    }
                  }
                }
              },
              Dashboards: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['Arn', 'Properties'],
                  members: {
                    Arn: {},
                    Properties: {
                      type: 'list',
                      member: {}
                    }
                  }
                }
              }
            }
          },
          Szz: {
            type: 'structure',
            members: {
              StrictModeForAllResources: {
                type: 'boolean'
              }
            }
          },
          S105: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Arn: {},
                Type: {},
                Message: {}
              }
            }
          },
          S109: {
            type: 'structure',
            members: {
              ResourceIdOverrideConfiguration: {
                type: 'structure',
                members: {
                  PrefixForAllResources: {}
                }
              },
              VPCConnections: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['VPCConnectionId'],
                  members: {
                    VPCConnectionId: {},
                    Name: {},
                    SubnetIds: {
                      shape: 'Swg'
                    },
                    SecurityGroupIds: {
                      shape: 'Swi'
                    },
                    DnsResolvers: {
                      shape: 'Swk'
                    },
                    RoleArn: {}
                  }
                }
              },
              RefreshSchedules: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['DataSetId', 'ScheduleId'],
                  members: {
                    DataSetId: {},
                    ScheduleId: {},
                    StartAfterDateTime: {
                      type: 'timestamp'
                    }
                  }
                }
              },
              DataSources: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['DataSourceId'],
                  members: {
                    DataSourceId: {},
                    Name: {},
                    DataSourceParameters: {
                      shape: 'Sqg'
                    },
                    VpcConnectionProperties: {
                      shape: 'Ss4'
                    },
                    SslProperties: {
                      shape: 'Ss5'
                    },
                    Credentials: {
                      type: 'structure',
                      members: {
                        CredentialPair: {
                          type: 'structure',
                          required: ['Username', 'Password'],
                          members: {
                            Username: {},
                            Password: {}
                          },
                          sensitive: true
                        },
                        SecretArn: {}
                      }
                    }
                  }
                }
              },
              DataSets: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['DataSetId'],
                  members: {
                    DataSetId: {},
                    Name: {}
                  }
                }
              },
              Themes: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['ThemeId'],
                  members: {
                    ThemeId: {},
                    Name: {}
                  }
                }
              },
              Analyses: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['AnalysisId'],
                  members: {
                    AnalysisId: {},
                    Name: {}
                  }
                }
              },
              Dashboards: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['DashboardId'],
                  members: {
                    DashboardId: {},
                    Name: {}
                  }
                }
              }
            }
          },
          S10s: {
            type: 'structure',
            members: {
              DataSources: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['DataSourceIds', 'Permissions'],
                  members: {
                    DataSourceIds: {
                      shape: 'S10v'
                    },
                    Permissions: {
                      shape: 'S10x'
                    }
                  }
                }
              },
              DataSets: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['DataSetIds', 'Permissions'],
                  members: {
                    DataSetIds: {
                      shape: 'S10v'
                    },
                    Permissions: {
                      shape: 'S10x'
                    }
                  }
                }
              },
              Themes: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['ThemeIds', 'Permissions'],
                  members: {
                    ThemeIds: {
                      shape: 'S10v'
                    },
                    Permissions: {
                      shape: 'S10x'
                    }
                  }
                }
              },
              Analyses: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['AnalysisIds', 'Permissions'],
                  members: {
                    AnalysisIds: {
                      shape: 'S10v'
                    },
                    Permissions: {
                      shape: 'S10x'
                    }
                  }
                }
              },
              Dashboards: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['DashboardIds'],
                  members: {
                    DashboardIds: {
                      shape: 'S10v'
                    },
                    Permissions: {
                      shape: 'S10x'
                    },
                    LinkSharingConfiguration: {
                      type: 'structure',
                      members: {
                        Permissions: {
                          shape: 'S10x'
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          S10v: {
            type: 'list',
            member: {}
          },
          S10x: {
            type: 'structure',
            required: ['Principals', 'Actions'],
            members: {
              Principals: {
                type: 'list',
                member: {}
              },
              Actions: {
                shape: 'S1c'
              }
            }
          },
          S118: {
            type: 'structure',
            members: {
              VPCConnections: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['VPCConnectionIds', 'Tags'],
                  members: {
                    VPCConnectionIds: {
                      shape: 'S10v'
                    },
                    Tags: {
                      shape: 'Sb'
                    }
                  }
                }
              },
              DataSources: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['DataSourceIds', 'Tags'],
                  members: {
                    DataSourceIds: {
                      shape: 'S10v'
                    },
                    Tags: {
                      shape: 'Sb'
                    }
                  }
                }
              },
              DataSets: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['DataSetIds', 'Tags'],
                  members: {
                    DataSetIds: {
                      shape: 'S10v'
                    },
                    Tags: {
                      shape: 'Sb'
                    }
                  }
                }
              },
              Themes: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['ThemeIds', 'Tags'],
                  members: {
                    ThemeIds: {
                      shape: 'S10v'
                    },
                    Tags: {
                      shape: 'Sb'
                    }
                  }
                }
              },
              Analyses: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['AnalysisIds', 'Tags'],
                  members: {
                    AnalysisIds: {
                      shape: 'S10v'
                    },
                    Tags: {
                      shape: 'Sb'
                    }
                  }
                }
              },
              Dashboards: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['DashboardIds', 'Tags'],
                  members: {
                    DashboardIds: {
                      shape: 'S10v'
                    },
                    Tags: {
                      shape: 'Sb'
                    }
                  }
                }
              }
            }
          },
          S11l: {
            type: 'structure',
            members: {
              StrictModeForAllResources: {
                type: 'boolean'
              }
            }
          },
          S11s: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Type: {},
                Message: {},
                ViolatedEntities: {
                  shape: 'Syo'
                }
              }
            }
          },
          S125: {
            type: 'structure',
            required: ['FileGroups'],
            members: {
              FileGroups: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    Files: {
                      shape: 'S128'
                    }
                  }
                }
              },
              DestinationConfiguration: {
                type: 'structure',
                members: {
                  S3Destinations: {
                    type: 'list',
                    member: {
                      shape: 'S12h'
                    }
                  }
                }
              },
              Parameters: {
                shape: 'Sr'
              }
            }
          },
          S128: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['SheetSelections', 'FormatType'],
              members: {
                SheetSelections: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['SheetId', 'SelectionScope'],
                    members: {
                      SheetId: {},
                      SelectionScope: {},
                      VisualIds: {
                        type: 'list',
                        member: {}
                      }
                    }
                  }
                },
                FormatType: {}
              }
            }
          },
          S12h: {
            type: 'structure',
            required: ['BucketConfiguration'],
            members: {
              BucketConfiguration: {
                type: 'structure',
                required: ['BucketName', 'BucketPrefix', 'BucketRegion'],
                members: {
                  BucketName: {},
                  BucketPrefix: {},
                  BucketRegion: {}
                }
              }
            }
          },
          S135: {
            type: 'structure',
            required: ['RefreshConfiguration'],
            members: {
              RefreshConfiguration: {
                type: 'structure',
                required: ['IncrementalRefresh'],
                members: {
                  IncrementalRefresh: {
                    type: 'structure',
                    required: ['LookbackWindow'],
                    members: {
                      LookbackWindow: {
                        type: 'structure',
                        required: ['ColumnName', 'Size', 'SizeUnit'],
                        members: {
                          ColumnName: {},
                          Size: {
                            type: 'long'
                          },
                          SizeUnit: {}
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          S13d: {
            type: 'structure',
            members: {
              Arn: {},
              DataSourceId: {},
              Name: {},
              Type: {},
              Status: {},
              CreatedTime: {
                type: 'timestamp'
              },
              LastUpdatedTime: {
                type: 'timestamp'
              },
              DataSourceParameters: {
                shape: 'Sqg'
              },
              AlternateDataSourceParameters: {
                shape: 'Ss1'
              },
              VpcConnectionProperties: {
                shape: 'Ss4'
              },
              SslProperties: {
                shape: 'Ss5'
              },
              ErrorInfo: {
                type: 'structure',
                members: {
                  Type: {},
                  Message: {}
                }
              },
              SecretArn: {}
            }
          },
          S140: {
            type: 'structure',
            required: ['Arn', 'IngestionStatus', 'CreatedTime'],
            members: {
              Arn: {},
              IngestionId: {},
              IngestionStatus: {},
              ErrorInfo: {
                type: 'structure',
                members: {
                  Type: {},
                  Message: {}
                }
              },
              RowInfo: {
                type: 'structure',
                members: {
                  RowsIngested: {
                    type: 'long'
                  },
                  RowsDropped: {
                    type: 'long'
                  },
                  TotalRowsInDataset: {
                    type: 'long'
                  }
                }
              },
              QueueInfo: {
                type: 'structure',
                required: ['WaitingOnIngestion', 'QueuedIngestion'],
                members: {
                  WaitingOnIngestion: {},
                  QueuedIngestion: {}
                }
              },
              CreatedTime: {
                type: 'timestamp'
              },
              IngestionTimeInSeconds: {
                type: 'long'
              },
              IngestionSizeInBytes: {
                type: 'long'
              },
              RequestSource: {},
              RequestType: {}
            }
          },
          S149: {
            type: 'map',
            key: {},
            value: {}
          },
          S14c: {
            type: 'map',
            key: {},
            value: {}
          },
          S14f: {
            type: 'map',
            key: {},
            value: {}
          },
          S14k: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                KeyArn: {},
                DefaultKey: {
                  type: 'boolean'
                }
              }
            }
          },
          S14o: {
            type: 'structure',
            members: {
              Name: {},
              Arn: {},
              CapacityRegion: {},
              CreationStatus: {},
              IdentityStore: {},
              NamespaceError: {
                type: 'structure',
                members: {
                  Type: {},
                  Message: {}
                }
              }
            }
          },
          S150: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Type: {},
                Message: {},
                ViolatedEntities: {
                  shape: 'Syo'
                }
              }
            }
          },
          S15y: {
            type: 'structure',
            members: {
              Arn: {},
              UserName: {},
              Email: {},
              Role: {},
              IdentityType: {},
              Active: {
                type: 'boolean'
              },
              PrincipalId: {},
              CustomPermissionsName: {},
              ExternalLoginFederationProviderType: {},
              ExternalLoginFederationProviderUrl: {},
              ExternalLoginId: {}
            }
          },
          S164: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                SubnetId: {},
                AvailabilityZone: {},
                ErrorMessage: {},
                Status: {},
                NetworkInterfaceId: {}
              }
            }
          },
          S16a: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Key', 'Value'],
              members: {
                Key: {},
                Value: {
                  shape: 'Spt'
                }
              }
            }
          },
          S16g: {
            type: 'structure',
            required: ['DashboardId', 'SheetId', 'VisualId'],
            members: {
              DashboardId: {},
              SheetId: {},
              VisualId: {}
            }
          },
          S16k: {
            type: 'string',
            sensitive: true
          },
          S16p: {
            type: 'structure',
            required: ['Enabled'],
            members: {
              Enabled: {
                type: 'boolean'
              }
            }
          },
          S177: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Arn: {},
                AnalysisId: {},
                Name: {},
                Status: {},
                CreatedTime: {
                  type: 'timestamp'
                },
                LastUpdatedTime: {
                  type: 'timestamp'
                }
              }
            }
          },
          S17n: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Arn: {},
                DashboardId: {},
                Name: {},
                CreatedTime: {
                  type: 'timestamp'
                },
                LastUpdatedTime: {
                  type: 'timestamp'
                },
                PublishedVersionNumber: {
                  type: 'long'
                },
                LastPublishedTime: {
                  type: 'timestamp'
                }
              }
            }
          },
          S17r: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Arn: {},
                DataSetId: {},
                Name: {},
                CreatedTime: {
                  type: 'timestamp'
                },
                LastUpdatedTime: {
                  type: 'timestamp'
                },
                ImportMode: {},
                RowLevelPermissionDataSet: {
                  shape: 'Spk'
                },
                RowLevelPermissionTagConfigurationApplied: {
                  type: 'boolean'
                },
                ColumnLevelPermissionRulesApplied: {
                  type: 'boolean'
                }
              }
            }
          },
          S182: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Arn: {},
                FolderId: {},
                Name: {},
                FolderType: {},
                CreatedTime: {
                  type: 'timestamp'
                },
                LastUpdatedTime: {
                  type: 'timestamp'
                },
                SharingModel: {}
              }
            }
          },
          S189: {
            type: 'list',
            member: {
              shape: 'Ssl'
            }
          },
          S18n: {
            type: 'list',
            member: {}
          },
          S1bx: {
            type: 'list',
            member: {
              shape: 'S1a'
            }
          },
          S1c4: {
            type: 'list',
            member: {
              shape: 'S1a'
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=975e279841c8f4be05c10e33b3b4f44bbf72acdc.js.map