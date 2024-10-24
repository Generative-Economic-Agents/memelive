System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2013-09-09',
          endpointPrefix: 'rds',
          protocol: 'query',
          protocols: ['query'],
          serviceAbbreviation: 'Amazon RDS',
          serviceFullName: 'Amazon Relational Database Service',
          serviceId: 'RDS',
          signatureVersion: 'v4',
          uid: 'rds-2013-09-09',
          xmlNamespace: 'http://rds.amazonaws.com/doc/2013-09-09/'
        },
        operations: {
          AddSourceIdentifierToSubscription: {
            input: {
              type: 'structure',
              required: ['SubscriptionName', 'SourceIdentifier'],
              members: {
                SubscriptionName: {},
                SourceIdentifier: {}
              }
            },
            output: {
              resultWrapper: 'AddSourceIdentifierToSubscriptionResult',
              type: 'structure',
              members: {
                EventSubscription: {
                  shape: 'S4'
                }
              }
            }
          },
          AddTagsToResource: {
            input: {
              type: 'structure',
              required: ['ResourceName', 'Tags'],
              members: {
                ResourceName: {},
                Tags: {
                  shape: 'S9'
                }
              }
            }
          },
          AuthorizeDBSecurityGroupIngress: {
            input: {
              type: 'structure',
              required: ['DBSecurityGroupName'],
              members: {
                DBSecurityGroupName: {},
                CIDRIP: {},
                EC2SecurityGroupName: {},
                EC2SecurityGroupId: {},
                EC2SecurityGroupOwnerId: {}
              }
            },
            output: {
              resultWrapper: 'AuthorizeDBSecurityGroupIngressResult',
              type: 'structure',
              members: {
                DBSecurityGroup: {
                  shape: 'Sd'
                }
              }
            }
          },
          CopyDBSnapshot: {
            input: {
              type: 'structure',
              required: ['SourceDBSnapshotIdentifier', 'TargetDBSnapshotIdentifier'],
              members: {
                SourceDBSnapshotIdentifier: {},
                TargetDBSnapshotIdentifier: {},
                Tags: {
                  shape: 'S9'
                }
              }
            },
            output: {
              resultWrapper: 'CopyDBSnapshotResult',
              type: 'structure',
              members: {
                DBSnapshot: {
                  shape: 'Sk'
                }
              }
            }
          },
          CreateDBInstance: {
            input: {
              type: 'structure',
              required: ['DBInstanceIdentifier', 'AllocatedStorage', 'DBInstanceClass', 'Engine', 'MasterUsername', 'MasterUserPassword'],
              members: {
                DBName: {},
                DBInstanceIdentifier: {},
                AllocatedStorage: {
                  type: 'integer'
                },
                DBInstanceClass: {},
                Engine: {},
                MasterUsername: {},
                MasterUserPassword: {},
                DBSecurityGroups: {
                  shape: 'Sp'
                },
                VpcSecurityGroupIds: {
                  shape: 'Sq'
                },
                AvailabilityZone: {},
                DBSubnetGroupName: {},
                PreferredMaintenanceWindow: {},
                DBParameterGroupName: {},
                BackupRetentionPeriod: {
                  type: 'integer'
                },
                PreferredBackupWindow: {},
                Port: {
                  type: 'integer'
                },
                MultiAZ: {
                  type: 'boolean'
                },
                EngineVersion: {},
                AutoMinorVersionUpgrade: {
                  type: 'boolean'
                },
                LicenseModel: {},
                Iops: {
                  type: 'integer'
                },
                OptionGroupName: {},
                CharacterSetName: {},
                PubliclyAccessible: {
                  type: 'boolean'
                },
                Tags: {
                  shape: 'S9'
                }
              }
            },
            output: {
              resultWrapper: 'CreateDBInstanceResult',
              type: 'structure',
              members: {
                DBInstance: {
                  shape: 'St'
                }
              }
            }
          },
          CreateDBInstanceReadReplica: {
            input: {
              type: 'structure',
              required: ['DBInstanceIdentifier', 'SourceDBInstanceIdentifier'],
              members: {
                DBInstanceIdentifier: {},
                SourceDBInstanceIdentifier: {},
                DBInstanceClass: {},
                AvailabilityZone: {},
                Port: {
                  type: 'integer'
                },
                AutoMinorVersionUpgrade: {
                  type: 'boolean'
                },
                Iops: {
                  type: 'integer'
                },
                OptionGroupName: {},
                PubliclyAccessible: {
                  type: 'boolean'
                },
                Tags: {
                  shape: 'S9'
                },
                DBSubnetGroupName: {}
              }
            },
            output: {
              resultWrapper: 'CreateDBInstanceReadReplicaResult',
              type: 'structure',
              members: {
                DBInstance: {
                  shape: 'St'
                }
              }
            }
          },
          CreateDBParameterGroup: {
            input: {
              type: 'structure',
              required: ['DBParameterGroupName', 'DBParameterGroupFamily', 'Description'],
              members: {
                DBParameterGroupName: {},
                DBParameterGroupFamily: {},
                Description: {},
                Tags: {
                  shape: 'S9'
                }
              }
            },
            output: {
              resultWrapper: 'CreateDBParameterGroupResult',
              type: 'structure',
              members: {
                DBParameterGroup: {
                  shape: 'S1f'
                }
              }
            }
          },
          CreateDBSecurityGroup: {
            input: {
              type: 'structure',
              required: ['DBSecurityGroupName', 'DBSecurityGroupDescription'],
              members: {
                DBSecurityGroupName: {},
                DBSecurityGroupDescription: {},
                Tags: {
                  shape: 'S9'
                }
              }
            },
            output: {
              resultWrapper: 'CreateDBSecurityGroupResult',
              type: 'structure',
              members: {
                DBSecurityGroup: {
                  shape: 'Sd'
                }
              }
            }
          },
          CreateDBSnapshot: {
            input: {
              type: 'structure',
              required: ['DBSnapshotIdentifier', 'DBInstanceIdentifier'],
              members: {
                DBSnapshotIdentifier: {},
                DBInstanceIdentifier: {},
                Tags: {
                  shape: 'S9'
                }
              }
            },
            output: {
              resultWrapper: 'CreateDBSnapshotResult',
              type: 'structure',
              members: {
                DBSnapshot: {
                  shape: 'Sk'
                }
              }
            }
          },
          CreateDBSubnetGroup: {
            input: {
              type: 'structure',
              required: ['DBSubnetGroupName', 'DBSubnetGroupDescription', 'SubnetIds'],
              members: {
                DBSubnetGroupName: {},
                DBSubnetGroupDescription: {},
                SubnetIds: {
                  shape: 'S1l'
                },
                Tags: {
                  shape: 'S9'
                }
              }
            },
            output: {
              resultWrapper: 'CreateDBSubnetGroupResult',
              type: 'structure',
              members: {
                DBSubnetGroup: {
                  shape: 'S11'
                }
              }
            }
          },
          CreateEventSubscription: {
            input: {
              type: 'structure',
              required: ['SubscriptionName', 'SnsTopicArn'],
              members: {
                SubscriptionName: {},
                SnsTopicArn: {},
                SourceType: {},
                EventCategories: {
                  shape: 'S6'
                },
                SourceIds: {
                  shape: 'S5'
                },
                Enabled: {
                  type: 'boolean'
                },
                Tags: {
                  shape: 'S9'
                }
              }
            },
            output: {
              resultWrapper: 'CreateEventSubscriptionResult',
              type: 'structure',
              members: {
                EventSubscription: {
                  shape: 'S4'
                }
              }
            }
          },
          CreateOptionGroup: {
            input: {
              type: 'structure',
              required: ['OptionGroupName', 'EngineName', 'MajorEngineVersion', 'OptionGroupDescription'],
              members: {
                OptionGroupName: {},
                EngineName: {},
                MajorEngineVersion: {},
                OptionGroupDescription: {},
                Tags: {
                  shape: 'S9'
                }
              }
            },
            output: {
              resultWrapper: 'CreateOptionGroupResult',
              type: 'structure',
              members: {
                OptionGroup: {
                  shape: 'S1r'
                }
              }
            }
          },
          DeleteDBInstance: {
            input: {
              type: 'structure',
              required: ['DBInstanceIdentifier'],
              members: {
                DBInstanceIdentifier: {},
                SkipFinalSnapshot: {
                  type: 'boolean'
                },
                FinalDBSnapshotIdentifier: {}
              }
            },
            output: {
              resultWrapper: 'DeleteDBInstanceResult',
              type: 'structure',
              members: {
                DBInstance: {
                  shape: 'St'
                }
              }
            }
          },
          DeleteDBParameterGroup: {
            input: {
              type: 'structure',
              required: ['DBParameterGroupName'],
              members: {
                DBParameterGroupName: {}
              }
            }
          },
          DeleteDBSecurityGroup: {
            input: {
              type: 'structure',
              required: ['DBSecurityGroupName'],
              members: {
                DBSecurityGroupName: {}
              }
            }
          },
          DeleteDBSnapshot: {
            input: {
              type: 'structure',
              required: ['DBSnapshotIdentifier'],
              members: {
                DBSnapshotIdentifier: {}
              }
            },
            output: {
              resultWrapper: 'DeleteDBSnapshotResult',
              type: 'structure',
              members: {
                DBSnapshot: {
                  shape: 'Sk'
                }
              }
            }
          },
          DeleteDBSubnetGroup: {
            input: {
              type: 'structure',
              required: ['DBSubnetGroupName'],
              members: {
                DBSubnetGroupName: {}
              }
            }
          },
          DeleteEventSubscription: {
            input: {
              type: 'structure',
              required: ['SubscriptionName'],
              members: {
                SubscriptionName: {}
              }
            },
            output: {
              resultWrapper: 'DeleteEventSubscriptionResult',
              type: 'structure',
              members: {
                EventSubscription: {
                  shape: 'S4'
                }
              }
            }
          },
          DeleteOptionGroup: {
            input: {
              type: 'structure',
              required: ['OptionGroupName'],
              members: {
                OptionGroupName: {}
              }
            }
          },
          DescribeDBEngineVersions: {
            input: {
              type: 'structure',
              members: {
                Engine: {},
                EngineVersion: {},
                DBParameterGroupFamily: {},
                Filters: {
                  shape: 'S27'
                },
                MaxRecords: {
                  type: 'integer'
                },
                Marker: {},
                DefaultOnly: {
                  type: 'boolean'
                },
                ListSupportedCharacterSets: {
                  type: 'boolean'
                }
              }
            },
            output: {
              resultWrapper: 'DescribeDBEngineVersionsResult',
              type: 'structure',
              members: {
                Marker: {},
                DBEngineVersions: {
                  type: 'list',
                  member: {
                    locationName: 'DBEngineVersion',
                    type: 'structure',
                    members: {
                      Engine: {},
                      EngineVersion: {},
                      DBParameterGroupFamily: {},
                      DBEngineDescription: {},
                      DBEngineVersionDescription: {},
                      DefaultCharacterSet: {
                        shape: 'S2d'
                      },
                      SupportedCharacterSets: {
                        type: 'list',
                        member: {
                          shape: 'S2d',
                          locationName: 'CharacterSet'
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          DescribeDBInstances: {
            input: {
              type: 'structure',
              members: {
                DBInstanceIdentifier: {},
                Filters: {
                  shape: 'S27'
                },
                MaxRecords: {
                  type: 'integer'
                },
                Marker: {}
              }
            },
            output: {
              resultWrapper: 'DescribeDBInstancesResult',
              type: 'structure',
              members: {
                Marker: {},
                DBInstances: {
                  type: 'list',
                  member: {
                    shape: 'St',
                    locationName: 'DBInstance'
                  }
                }
              }
            }
          },
          DescribeDBLogFiles: {
            input: {
              type: 'structure',
              required: ['DBInstanceIdentifier'],
              members: {
                DBInstanceIdentifier: {},
                FilenameContains: {},
                FileLastWritten: {
                  type: 'long'
                },
                FileSize: {
                  type: 'long'
                },
                Filters: {
                  shape: 'S27'
                },
                MaxRecords: {
                  type: 'integer'
                },
                Marker: {}
              }
            },
            output: {
              resultWrapper: 'DescribeDBLogFilesResult',
              type: 'structure',
              members: {
                DescribeDBLogFiles: {
                  type: 'list',
                  member: {
                    locationName: 'DescribeDBLogFilesDetails',
                    type: 'structure',
                    members: {
                      LogFileName: {},
                      LastWritten: {
                        type: 'long'
                      },
                      Size: {
                        type: 'long'
                      }
                    }
                  }
                },
                Marker: {}
              }
            }
          },
          DescribeDBParameterGroups: {
            input: {
              type: 'structure',
              members: {
                DBParameterGroupName: {},
                Filters: {
                  shape: 'S27'
                },
                MaxRecords: {
                  type: 'integer'
                },
                Marker: {}
              }
            },
            output: {
              resultWrapper: 'DescribeDBParameterGroupsResult',
              type: 'structure',
              members: {
                Marker: {},
                DBParameterGroups: {
                  type: 'list',
                  member: {
                    shape: 'S1f',
                    locationName: 'DBParameterGroup'
                  }
                }
              }
            }
          },
          DescribeDBParameters: {
            input: {
              type: 'structure',
              required: ['DBParameterGroupName'],
              members: {
                DBParameterGroupName: {},
                Source: {},
                Filters: {
                  shape: 'S27'
                },
                MaxRecords: {
                  type: 'integer'
                },
                Marker: {}
              }
            },
            output: {
              resultWrapper: 'DescribeDBParametersResult',
              type: 'structure',
              members: {
                Parameters: {
                  shape: 'S2s'
                },
                Marker: {}
              }
            }
          },
          DescribeDBSecurityGroups: {
            input: {
              type: 'structure',
              members: {
                DBSecurityGroupName: {},
                Filters: {
                  shape: 'S27'
                },
                MaxRecords: {
                  type: 'integer'
                },
                Marker: {}
              }
            },
            output: {
              resultWrapper: 'DescribeDBSecurityGroupsResult',
              type: 'structure',
              members: {
                Marker: {},
                DBSecurityGroups: {
                  type: 'list',
                  member: {
                    shape: 'Sd',
                    locationName: 'DBSecurityGroup'
                  }
                }
              }
            }
          },
          DescribeDBSnapshots: {
            input: {
              type: 'structure',
              members: {
                DBInstanceIdentifier: {},
                DBSnapshotIdentifier: {},
                SnapshotType: {},
                Filters: {
                  shape: 'S27'
                },
                MaxRecords: {
                  type: 'integer'
                },
                Marker: {}
              }
            },
            output: {
              resultWrapper: 'DescribeDBSnapshotsResult',
              type: 'structure',
              members: {
                Marker: {},
                DBSnapshots: {
                  type: 'list',
                  member: {
                    shape: 'Sk',
                    locationName: 'DBSnapshot'
                  }
                }
              }
            }
          },
          DescribeDBSubnetGroups: {
            input: {
              type: 'structure',
              members: {
                DBSubnetGroupName: {},
                Filters: {
                  shape: 'S27'
                },
                MaxRecords: {
                  type: 'integer'
                },
                Marker: {}
              }
            },
            output: {
              resultWrapper: 'DescribeDBSubnetGroupsResult',
              type: 'structure',
              members: {
                Marker: {},
                DBSubnetGroups: {
                  type: 'list',
                  member: {
                    shape: 'S11',
                    locationName: 'DBSubnetGroup'
                  }
                }
              }
            }
          },
          DescribeEngineDefaultParameters: {
            input: {
              type: 'structure',
              required: ['DBParameterGroupFamily'],
              members: {
                DBParameterGroupFamily: {},
                Filters: {
                  shape: 'S27'
                },
                MaxRecords: {
                  type: 'integer'
                },
                Marker: {}
              }
            },
            output: {
              resultWrapper: 'DescribeEngineDefaultParametersResult',
              type: 'structure',
              members: {
                EngineDefaults: {
                  type: 'structure',
                  members: {
                    DBParameterGroupFamily: {},
                    Marker: {},
                    Parameters: {
                      shape: 'S2s'
                    }
                  },
                  wrapper: true
                }
              }
            }
          },
          DescribeEventCategories: {
            input: {
              type: 'structure',
              members: {
                SourceType: {},
                Filters: {
                  shape: 'S27'
                }
              }
            },
            output: {
              resultWrapper: 'DescribeEventCategoriesResult',
              type: 'structure',
              members: {
                EventCategoriesMapList: {
                  type: 'list',
                  member: {
                    locationName: 'EventCategoriesMap',
                    type: 'structure',
                    members: {
                      SourceType: {},
                      EventCategories: {
                        shape: 'S6'
                      }
                    },
                    wrapper: true
                  }
                }
              }
            }
          },
          DescribeEventSubscriptions: {
            input: {
              type: 'structure',
              members: {
                SubscriptionName: {},
                Filters: {
                  shape: 'S27'
                },
                MaxRecords: {
                  type: 'integer'
                },
                Marker: {}
              }
            },
            output: {
              resultWrapper: 'DescribeEventSubscriptionsResult',
              type: 'structure',
              members: {
                Marker: {},
                EventSubscriptionsList: {
                  type: 'list',
                  member: {
                    shape: 'S4',
                    locationName: 'EventSubscription'
                  }
                }
              }
            }
          },
          DescribeEvents: {
            input: {
              type: 'structure',
              members: {
                SourceIdentifier: {},
                SourceType: {},
                StartTime: {
                  type: 'timestamp'
                },
                EndTime: {
                  type: 'timestamp'
                },
                Duration: {
                  type: 'integer'
                },
                EventCategories: {
                  shape: 'S6'
                },
                Filters: {
                  shape: 'S27'
                },
                MaxRecords: {
                  type: 'integer'
                },
                Marker: {}
              }
            },
            output: {
              resultWrapper: 'DescribeEventsResult',
              type: 'structure',
              members: {
                Marker: {},
                Events: {
                  type: 'list',
                  member: {
                    locationName: 'Event',
                    type: 'structure',
                    members: {
                      SourceIdentifier: {},
                      SourceType: {},
                      Message: {},
                      EventCategories: {
                        shape: 'S6'
                      },
                      Date: {
                        type: 'timestamp'
                      }
                    }
                  }
                }
              }
            }
          },
          DescribeOptionGroupOptions: {
            input: {
              type: 'structure',
              required: ['EngineName'],
              members: {
                EngineName: {},
                MajorEngineVersion: {},
                Filters: {
                  shape: 'S27'
                },
                MaxRecords: {
                  type: 'integer'
                },
                Marker: {}
              }
            },
            output: {
              resultWrapper: 'DescribeOptionGroupOptionsResult',
              type: 'structure',
              members: {
                OptionGroupOptions: {
                  type: 'list',
                  member: {
                    locationName: 'OptionGroupOption',
                    type: 'structure',
                    members: {
                      Name: {},
                      Description: {},
                      EngineName: {},
                      MajorEngineVersion: {},
                      MinimumRequiredMinorEngineVersion: {},
                      PortRequired: {
                        type: 'boolean'
                      },
                      DefaultPort: {
                        type: 'integer'
                      },
                      OptionsDependedOn: {
                        type: 'list',
                        member: {
                          locationName: 'OptionName'
                        }
                      },
                      Persistent: {
                        type: 'boolean'
                      },
                      Permanent: {
                        type: 'boolean'
                      },
                      OptionGroupOptionSettings: {
                        type: 'list',
                        member: {
                          locationName: 'OptionGroupOptionSetting',
                          type: 'structure',
                          members: {
                            SettingName: {},
                            SettingDescription: {},
                            DefaultValue: {},
                            ApplyType: {},
                            AllowedValues: {},
                            IsModifiable: {
                              type: 'boolean'
                            }
                          }
                        }
                      }
                    }
                  }
                },
                Marker: {}
              }
            }
          },
          DescribeOptionGroups: {
            input: {
              type: 'structure',
              members: {
                OptionGroupName: {},
                Filters: {
                  shape: 'S27'
                },
                Marker: {},
                MaxRecords: {
                  type: 'integer'
                },
                EngineName: {},
                MajorEngineVersion: {}
              }
            },
            output: {
              resultWrapper: 'DescribeOptionGroupsResult',
              type: 'structure',
              members: {
                OptionGroupsList: {
                  type: 'list',
                  member: {
                    shape: 'S1r',
                    locationName: 'OptionGroup'
                  }
                },
                Marker: {}
              }
            }
          },
          DescribeOrderableDBInstanceOptions: {
            input: {
              type: 'structure',
              required: ['Engine'],
              members: {
                Engine: {},
                EngineVersion: {},
                DBInstanceClass: {},
                LicenseModel: {},
                Vpc: {
                  type: 'boolean'
                },
                Filters: {
                  shape: 'S27'
                },
                MaxRecords: {
                  type: 'integer'
                },
                Marker: {}
              }
            },
            output: {
              resultWrapper: 'DescribeOrderableDBInstanceOptionsResult',
              type: 'structure',
              members: {
                OrderableDBInstanceOptions: {
                  type: 'list',
                  member: {
                    locationName: 'OrderableDBInstanceOption',
                    type: 'structure',
                    members: {
                      Engine: {},
                      EngineVersion: {},
                      DBInstanceClass: {},
                      LicenseModel: {},
                      AvailabilityZones: {
                        type: 'list',
                        member: {
                          shape: 'S14',
                          locationName: 'AvailabilityZone'
                        }
                      },
                      MultiAZCapable: {
                        type: 'boolean'
                      },
                      ReadReplicaCapable: {
                        type: 'boolean'
                      },
                      Vpc: {
                        type: 'boolean'
                      }
                    },
                    wrapper: true
                  }
                },
                Marker: {}
              }
            }
          },
          DescribeReservedDBInstances: {
            input: {
              type: 'structure',
              members: {
                ReservedDBInstanceId: {},
                ReservedDBInstancesOfferingId: {},
                DBInstanceClass: {},
                Duration: {},
                ProductDescription: {},
                OfferingType: {},
                MultiAZ: {
                  type: 'boolean'
                },
                Filters: {
                  shape: 'S27'
                },
                MaxRecords: {
                  type: 'integer'
                },
                Marker: {}
              }
            },
            output: {
              resultWrapper: 'DescribeReservedDBInstancesResult',
              type: 'structure',
              members: {
                Marker: {},
                ReservedDBInstances: {
                  type: 'list',
                  member: {
                    shape: 'S41',
                    locationName: 'ReservedDBInstance'
                  }
                }
              }
            }
          },
          DescribeReservedDBInstancesOfferings: {
            input: {
              type: 'structure',
              members: {
                ReservedDBInstancesOfferingId: {},
                DBInstanceClass: {},
                Duration: {},
                ProductDescription: {},
                OfferingType: {},
                MultiAZ: {
                  type: 'boolean'
                },
                Filters: {
                  shape: 'S27'
                },
                MaxRecords: {
                  type: 'integer'
                },
                Marker: {}
              }
            },
            output: {
              resultWrapper: 'DescribeReservedDBInstancesOfferingsResult',
              type: 'structure',
              members: {
                Marker: {},
                ReservedDBInstancesOfferings: {
                  type: 'list',
                  member: {
                    locationName: 'ReservedDBInstancesOffering',
                    type: 'structure',
                    members: {
                      ReservedDBInstancesOfferingId: {},
                      DBInstanceClass: {},
                      Duration: {
                        type: 'integer'
                      },
                      FixedPrice: {
                        type: 'double'
                      },
                      UsagePrice: {
                        type: 'double'
                      },
                      CurrencyCode: {},
                      ProductDescription: {},
                      OfferingType: {},
                      MultiAZ: {
                        type: 'boolean'
                      },
                      RecurringCharges: {
                        shape: 'S43'
                      }
                    },
                    wrapper: true
                  }
                }
              }
            }
          },
          DownloadDBLogFilePortion: {
            input: {
              type: 'structure',
              required: ['DBInstanceIdentifier', 'LogFileName'],
              members: {
                DBInstanceIdentifier: {},
                LogFileName: {},
                Marker: {},
                NumberOfLines: {
                  type: 'integer'
                }
              }
            },
            output: {
              resultWrapper: 'DownloadDBLogFilePortionResult',
              type: 'structure',
              members: {
                LogFileData: {},
                Marker: {},
                AdditionalDataPending: {
                  type: 'boolean'
                }
              }
            }
          },
          ListTagsForResource: {
            input: {
              type: 'structure',
              required: ['ResourceName'],
              members: {
                ResourceName: {},
                Filters: {
                  shape: 'S27'
                }
              }
            },
            output: {
              resultWrapper: 'ListTagsForResourceResult',
              type: 'structure',
              members: {
                TagList: {
                  shape: 'S9'
                }
              }
            }
          },
          ModifyDBInstance: {
            input: {
              type: 'structure',
              required: ['DBInstanceIdentifier'],
              members: {
                DBInstanceIdentifier: {},
                AllocatedStorage: {
                  type: 'integer'
                },
                DBInstanceClass: {},
                DBSecurityGroups: {
                  shape: 'Sp'
                },
                VpcSecurityGroupIds: {
                  shape: 'Sq'
                },
                ApplyImmediately: {
                  type: 'boolean'
                },
                MasterUserPassword: {},
                DBParameterGroupName: {},
                BackupRetentionPeriod: {
                  type: 'integer'
                },
                PreferredBackupWindow: {},
                PreferredMaintenanceWindow: {},
                MultiAZ: {
                  type: 'boolean'
                },
                EngineVersion: {},
                AllowMajorVersionUpgrade: {
                  type: 'boolean'
                },
                AutoMinorVersionUpgrade: {
                  type: 'boolean'
                },
                Iops: {
                  type: 'integer'
                },
                OptionGroupName: {},
                NewDBInstanceIdentifier: {}
              }
            },
            output: {
              resultWrapper: 'ModifyDBInstanceResult',
              type: 'structure',
              members: {
                DBInstance: {
                  shape: 'St'
                }
              }
            }
          },
          ModifyDBParameterGroup: {
            input: {
              type: 'structure',
              required: ['DBParameterGroupName', 'Parameters'],
              members: {
                DBParameterGroupName: {},
                Parameters: {
                  shape: 'S2s'
                }
              }
            },
            output: {
              shape: 'S4g',
              resultWrapper: 'ModifyDBParameterGroupResult'
            }
          },
          ModifyDBSubnetGroup: {
            input: {
              type: 'structure',
              required: ['DBSubnetGroupName', 'SubnetIds'],
              members: {
                DBSubnetGroupName: {},
                DBSubnetGroupDescription: {},
                SubnetIds: {
                  shape: 'S1l'
                }
              }
            },
            output: {
              resultWrapper: 'ModifyDBSubnetGroupResult',
              type: 'structure',
              members: {
                DBSubnetGroup: {
                  shape: 'S11'
                }
              }
            }
          },
          ModifyEventSubscription: {
            input: {
              type: 'structure',
              required: ['SubscriptionName'],
              members: {
                SubscriptionName: {},
                SnsTopicArn: {},
                SourceType: {},
                EventCategories: {
                  shape: 'S6'
                },
                Enabled: {
                  type: 'boolean'
                }
              }
            },
            output: {
              resultWrapper: 'ModifyEventSubscriptionResult',
              type: 'structure',
              members: {
                EventSubscription: {
                  shape: 'S4'
                }
              }
            }
          },
          ModifyOptionGroup: {
            input: {
              type: 'structure',
              required: ['OptionGroupName'],
              members: {
                OptionGroupName: {},
                OptionsToInclude: {
                  type: 'list',
                  member: {
                    locationName: 'OptionConfiguration',
                    type: 'structure',
                    required: ['OptionName'],
                    members: {
                      OptionName: {},
                      Port: {
                        type: 'integer'
                      },
                      DBSecurityGroupMemberships: {
                        shape: 'Sp'
                      },
                      VpcSecurityGroupMemberships: {
                        shape: 'Sq'
                      },
                      OptionSettings: {
                        type: 'list',
                        member: {
                          shape: 'S1v',
                          locationName: 'OptionSetting'
                        }
                      }
                    }
                  }
                },
                OptionsToRemove: {
                  type: 'list',
                  member: {}
                },
                ApplyImmediately: {
                  type: 'boolean'
                }
              }
            },
            output: {
              resultWrapper: 'ModifyOptionGroupResult',
              type: 'structure',
              members: {
                OptionGroup: {
                  shape: 'S1r'
                }
              }
            }
          },
          PromoteReadReplica: {
            input: {
              type: 'structure',
              required: ['DBInstanceIdentifier'],
              members: {
                DBInstanceIdentifier: {},
                BackupRetentionPeriod: {
                  type: 'integer'
                },
                PreferredBackupWindow: {}
              }
            },
            output: {
              resultWrapper: 'PromoteReadReplicaResult',
              type: 'structure',
              members: {
                DBInstance: {
                  shape: 'St'
                }
              }
            }
          },
          PurchaseReservedDBInstancesOffering: {
            input: {
              type: 'structure',
              required: ['ReservedDBInstancesOfferingId'],
              members: {
                ReservedDBInstancesOfferingId: {},
                ReservedDBInstanceId: {},
                DBInstanceCount: {
                  type: 'integer'
                },
                Tags: {
                  shape: 'S9'
                }
              }
            },
            output: {
              resultWrapper: 'PurchaseReservedDBInstancesOfferingResult',
              type: 'structure',
              members: {
                ReservedDBInstance: {
                  shape: 'S41'
                }
              }
            }
          },
          RebootDBInstance: {
            input: {
              type: 'structure',
              required: ['DBInstanceIdentifier'],
              members: {
                DBInstanceIdentifier: {},
                ForceFailover: {
                  type: 'boolean'
                }
              }
            },
            output: {
              resultWrapper: 'RebootDBInstanceResult',
              type: 'structure',
              members: {
                DBInstance: {
                  shape: 'St'
                }
              }
            }
          },
          RemoveSourceIdentifierFromSubscription: {
            input: {
              type: 'structure',
              required: ['SubscriptionName', 'SourceIdentifier'],
              members: {
                SubscriptionName: {},
                SourceIdentifier: {}
              }
            },
            output: {
              resultWrapper: 'RemoveSourceIdentifierFromSubscriptionResult',
              type: 'structure',
              members: {
                EventSubscription: {
                  shape: 'S4'
                }
              }
            }
          },
          RemoveTagsFromResource: {
            input: {
              type: 'structure',
              required: ['ResourceName', 'TagKeys'],
              members: {
                ResourceName: {},
                TagKeys: {
                  type: 'list',
                  member: {}
                }
              }
            }
          },
          ResetDBParameterGroup: {
            input: {
              type: 'structure',
              required: ['DBParameterGroupName'],
              members: {
                DBParameterGroupName: {},
                ResetAllParameters: {
                  type: 'boolean'
                },
                Parameters: {
                  shape: 'S2s'
                }
              }
            },
            output: {
              shape: 'S4g',
              resultWrapper: 'ResetDBParameterGroupResult'
            }
          },
          RestoreDBInstanceFromDBSnapshot: {
            input: {
              type: 'structure',
              required: ['DBInstanceIdentifier', 'DBSnapshotIdentifier'],
              members: {
                DBInstanceIdentifier: {},
                DBSnapshotIdentifier: {},
                DBInstanceClass: {},
                Port: {
                  type: 'integer'
                },
                AvailabilityZone: {},
                DBSubnetGroupName: {},
                MultiAZ: {
                  type: 'boolean'
                },
                PubliclyAccessible: {
                  type: 'boolean'
                },
                AutoMinorVersionUpgrade: {
                  type: 'boolean'
                },
                LicenseModel: {},
                DBName: {},
                Engine: {},
                Iops: {
                  type: 'integer'
                },
                OptionGroupName: {},
                Tags: {
                  shape: 'S9'
                }
              }
            },
            output: {
              resultWrapper: 'RestoreDBInstanceFromDBSnapshotResult',
              type: 'structure',
              members: {
                DBInstance: {
                  shape: 'St'
                }
              }
            }
          },
          RestoreDBInstanceToPointInTime: {
            input: {
              type: 'structure',
              required: ['SourceDBInstanceIdentifier', 'TargetDBInstanceIdentifier'],
              members: {
                SourceDBInstanceIdentifier: {},
                TargetDBInstanceIdentifier: {},
                RestoreTime: {
                  type: 'timestamp'
                },
                UseLatestRestorableTime: {
                  type: 'boolean'
                },
                DBInstanceClass: {},
                Port: {
                  type: 'integer'
                },
                AvailabilityZone: {},
                DBSubnetGroupName: {},
                MultiAZ: {
                  type: 'boolean'
                },
                PubliclyAccessible: {
                  type: 'boolean'
                },
                AutoMinorVersionUpgrade: {
                  type: 'boolean'
                },
                LicenseModel: {},
                DBName: {},
                Engine: {},
                Iops: {
                  type: 'integer'
                },
                OptionGroupName: {},
                Tags: {
                  shape: 'S9'
                }
              }
            },
            output: {
              resultWrapper: 'RestoreDBInstanceToPointInTimeResult',
              type: 'structure',
              members: {
                DBInstance: {
                  shape: 'St'
                }
              }
            }
          },
          RevokeDBSecurityGroupIngress: {
            input: {
              type: 'structure',
              required: ['DBSecurityGroupName'],
              members: {
                DBSecurityGroupName: {},
                CIDRIP: {},
                EC2SecurityGroupName: {},
                EC2SecurityGroupId: {},
                EC2SecurityGroupOwnerId: {}
              }
            },
            output: {
              resultWrapper: 'RevokeDBSecurityGroupIngressResult',
              type: 'structure',
              members: {
                DBSecurityGroup: {
                  shape: 'Sd'
                }
              }
            }
          }
        },
        shapes: {
          S4: {
            type: 'structure',
            members: {
              CustomerAwsId: {},
              CustSubscriptionId: {},
              SnsTopicArn: {},
              Status: {},
              SubscriptionCreationTime: {},
              SourceType: {},
              SourceIdsList: {
                shape: 'S5'
              },
              EventCategoriesList: {
                shape: 'S6'
              },
              Enabled: {
                type: 'boolean'
              }
            },
            wrapper: true
          },
          S5: {
            type: 'list',
            member: {
              locationName: 'SourceId'
            }
          },
          S6: {
            type: 'list',
            member: {
              locationName: 'EventCategory'
            }
          },
          S9: {
            type: 'list',
            member: {
              locationName: 'Tag',
              type: 'structure',
              members: {
                Key: {},
                Value: {}
              }
            }
          },
          Sd: {
            type: 'structure',
            members: {
              OwnerId: {},
              DBSecurityGroupName: {},
              DBSecurityGroupDescription: {},
              VpcId: {},
              EC2SecurityGroups: {
                type: 'list',
                member: {
                  locationName: 'EC2SecurityGroup',
                  type: 'structure',
                  members: {
                    Status: {},
                    EC2SecurityGroupName: {},
                    EC2SecurityGroupId: {},
                    EC2SecurityGroupOwnerId: {}
                  }
                }
              },
              IPRanges: {
                type: 'list',
                member: {
                  locationName: 'IPRange',
                  type: 'structure',
                  members: {
                    Status: {},
                    CIDRIP: {}
                  }
                }
              }
            },
            wrapper: true
          },
          Sk: {
            type: 'structure',
            members: {
              DBSnapshotIdentifier: {},
              DBInstanceIdentifier: {},
              SnapshotCreateTime: {
                type: 'timestamp'
              },
              Engine: {},
              AllocatedStorage: {
                type: 'integer'
              },
              Status: {},
              Port: {
                type: 'integer'
              },
              AvailabilityZone: {},
              VpcId: {},
              InstanceCreateTime: {
                type: 'timestamp'
              },
              MasterUsername: {},
              EngineVersion: {},
              LicenseModel: {},
              SnapshotType: {},
              Iops: {
                type: 'integer'
              },
              OptionGroupName: {},
              PercentProgress: {
                type: 'integer'
              },
              SourceRegion: {}
            },
            wrapper: true
          },
          Sp: {
            type: 'list',
            member: {
              locationName: 'DBSecurityGroupName'
            }
          },
          Sq: {
            type: 'list',
            member: {
              locationName: 'VpcSecurityGroupId'
            }
          },
          St: {
            type: 'structure',
            members: {
              DBInstanceIdentifier: {},
              DBInstanceClass: {},
              Engine: {},
              DBInstanceStatus: {},
              MasterUsername: {},
              DBName: {},
              Endpoint: {
                type: 'structure',
                members: {
                  Address: {},
                  Port: {
                    type: 'integer'
                  }
                }
              },
              AllocatedStorage: {
                type: 'integer'
              },
              InstanceCreateTime: {
                type: 'timestamp'
              },
              PreferredBackupWindow: {},
              BackupRetentionPeriod: {
                type: 'integer'
              },
              DBSecurityGroups: {
                shape: 'Sv'
              },
              VpcSecurityGroups: {
                shape: 'Sx'
              },
              DBParameterGroups: {
                type: 'list',
                member: {
                  locationName: 'DBParameterGroup',
                  type: 'structure',
                  members: {
                    DBParameterGroupName: {},
                    ParameterApplyStatus: {}
                  }
                }
              },
              AvailabilityZone: {},
              DBSubnetGroup: {
                shape: 'S11'
              },
              PreferredMaintenanceWindow: {},
              PendingModifiedValues: {
                type: 'structure',
                members: {
                  DBInstanceClass: {},
                  AllocatedStorage: {
                    type: 'integer'
                  },
                  MasterUserPassword: {},
                  Port: {
                    type: 'integer'
                  },
                  BackupRetentionPeriod: {
                    type: 'integer'
                  },
                  MultiAZ: {
                    type: 'boolean'
                  },
                  EngineVersion: {},
                  Iops: {
                    type: 'integer'
                  },
                  DBInstanceIdentifier: {}
                }
              },
              LatestRestorableTime: {
                type: 'timestamp'
              },
              MultiAZ: {
                type: 'boolean'
              },
              EngineVersion: {},
              AutoMinorVersionUpgrade: {
                type: 'boolean'
              },
              ReadReplicaSourceDBInstanceIdentifier: {},
              ReadReplicaDBInstanceIdentifiers: {
                type: 'list',
                member: {
                  locationName: 'ReadReplicaDBInstanceIdentifier'
                }
              },
              LicenseModel: {},
              Iops: {
                type: 'integer'
              },
              OptionGroupMemberships: {
                type: 'list',
                member: {
                  locationName: 'OptionGroupMembership',
                  type: 'structure',
                  members: {
                    OptionGroupName: {},
                    Status: {}
                  }
                }
              },
              CharacterSetName: {},
              SecondaryAvailabilityZone: {},
              PubliclyAccessible: {
                type: 'boolean'
              },
              StatusInfos: {
                type: 'list',
                member: {
                  locationName: 'DBInstanceStatusInfo',
                  type: 'structure',
                  members: {
                    StatusType: {},
                    Normal: {
                      type: 'boolean'
                    },
                    Status: {},
                    Message: {}
                  }
                }
              }
            },
            wrapper: true
          },
          Sv: {
            type: 'list',
            member: {
              locationName: 'DBSecurityGroup',
              type: 'structure',
              members: {
                DBSecurityGroupName: {},
                Status: {}
              }
            }
          },
          Sx: {
            type: 'list',
            member: {
              locationName: 'VpcSecurityGroupMembership',
              type: 'structure',
              members: {
                VpcSecurityGroupId: {},
                Status: {}
              }
            }
          },
          S11: {
            type: 'structure',
            members: {
              DBSubnetGroupName: {},
              DBSubnetGroupDescription: {},
              VpcId: {},
              SubnetGroupStatus: {},
              Subnets: {
                type: 'list',
                member: {
                  locationName: 'Subnet',
                  type: 'structure',
                  members: {
                    SubnetIdentifier: {},
                    SubnetAvailabilityZone: {
                      shape: 'S14'
                    },
                    SubnetStatus: {}
                  }
                }
              }
            },
            wrapper: true
          },
          S14: {
            type: 'structure',
            members: {
              Name: {},
              ProvisionedIopsCapable: {
                type: 'boolean'
              }
            },
            wrapper: true
          },
          S1f: {
            type: 'structure',
            members: {
              DBParameterGroupName: {},
              DBParameterGroupFamily: {},
              Description: {}
            },
            wrapper: true
          },
          S1l: {
            type: 'list',
            member: {
              locationName: 'SubnetIdentifier'
            }
          },
          S1r: {
            type: 'structure',
            members: {
              OptionGroupName: {},
              OptionGroupDescription: {},
              EngineName: {},
              MajorEngineVersion: {},
              Options: {
                type: 'list',
                member: {
                  locationName: 'Option',
                  type: 'structure',
                  members: {
                    OptionName: {},
                    OptionDescription: {},
                    Persistent: {
                      type: 'boolean'
                    },
                    Permanent: {
                      type: 'boolean'
                    },
                    Port: {
                      type: 'integer'
                    },
                    OptionSettings: {
                      type: 'list',
                      member: {
                        shape: 'S1v',
                        locationName: 'OptionSetting'
                      }
                    },
                    DBSecurityGroupMemberships: {
                      shape: 'Sv'
                    },
                    VpcSecurityGroupMemberships: {
                      shape: 'Sx'
                    }
                  }
                }
              },
              AllowsVpcAndNonVpcInstanceMemberships: {
                type: 'boolean'
              },
              VpcId: {}
            },
            wrapper: true
          },
          S1v: {
            type: 'structure',
            members: {
              Name: {},
              Value: {},
              DefaultValue: {},
              Description: {},
              ApplyType: {},
              DataType: {},
              AllowedValues: {},
              IsModifiable: {
                type: 'boolean'
              },
              IsCollection: {
                type: 'boolean'
              }
            }
          },
          S27: {
            type: 'list',
            member: {
              locationName: 'Filter',
              type: 'structure',
              required: ['Name', 'Values'],
              members: {
                Name: {},
                Values: {
                  type: 'list',
                  member: {
                    locationName: 'Value'
                  }
                }
              }
            }
          },
          S2d: {
            type: 'structure',
            members: {
              CharacterSetName: {},
              CharacterSetDescription: {}
            }
          },
          S2s: {
            type: 'list',
            member: {
              locationName: 'Parameter',
              type: 'structure',
              members: {
                ParameterName: {},
                ParameterValue: {},
                Description: {},
                Source: {},
                ApplyType: {},
                DataType: {},
                AllowedValues: {},
                IsModifiable: {
                  type: 'boolean'
                },
                MinimumEngineVersion: {},
                ApplyMethod: {}
              }
            }
          },
          S41: {
            type: 'structure',
            members: {
              ReservedDBInstanceId: {},
              ReservedDBInstancesOfferingId: {},
              DBInstanceClass: {},
              StartTime: {
                type: 'timestamp'
              },
              Duration: {
                type: 'integer'
              },
              FixedPrice: {
                type: 'double'
              },
              UsagePrice: {
                type: 'double'
              },
              CurrencyCode: {},
              DBInstanceCount: {
                type: 'integer'
              },
              ProductDescription: {},
              OfferingType: {},
              MultiAZ: {
                type: 'boolean'
              },
              State: {},
              RecurringCharges: {
                shape: 'S43'
              }
            },
            wrapper: true
          },
          S43: {
            type: 'list',
            member: {
              locationName: 'RecurringCharge',
              type: 'structure',
              members: {
                RecurringChargeAmount: {
                  type: 'double'
                },
                RecurringChargeFrequency: {}
              },
              wrapper: true
            }
          },
          S4g: {
            type: 'structure',
            members: {
              DBParameterGroupName: {}
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=045c5721a386d89fd80323cc68cd6c3b4ea0d239.js.map