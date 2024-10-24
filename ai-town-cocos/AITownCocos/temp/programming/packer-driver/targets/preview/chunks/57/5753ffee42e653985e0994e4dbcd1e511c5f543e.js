System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2015-04-16',
          endpointPrefix: 'ds',
          jsonVersion: '1.1',
          protocol: 'json',
          serviceAbbreviation: 'Directory Service',
          serviceFullName: 'AWS Directory Service',
          serviceId: 'Directory Service',
          signatureVersion: 'v4',
          targetPrefix: 'DirectoryService_20150416',
          uid: 'ds-2015-04-16'
        },
        operations: {
          AcceptSharedDirectory: {
            input: {
              type: 'structure',
              required: ['SharedDirectoryId'],
              members: {
                SharedDirectoryId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                SharedDirectory: {
                  shape: 'S4'
                }
              }
            }
          },
          AddIpRoutes: {
            input: {
              type: 'structure',
              required: ['DirectoryId', 'IpRoutes'],
              members: {
                DirectoryId: {},
                IpRoutes: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      CidrIp: {},
                      Description: {}
                    }
                  }
                },
                UpdateSecurityGroupForDirectoryControllers: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          AddRegion: {
            input: {
              type: 'structure',
              required: ['DirectoryId', 'RegionName', 'VPCSettings'],
              members: {
                DirectoryId: {},
                RegionName: {},
                VPCSettings: {
                  shape: 'Sk'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          AddTagsToResource: {
            input: {
              type: 'structure',
              required: ['ResourceId', 'Tags'],
              members: {
                ResourceId: {},
                Tags: {
                  shape: 'Sr'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          CancelSchemaExtension: {
            input: {
              type: 'structure',
              required: ['DirectoryId', 'SchemaExtensionId'],
              members: {
                DirectoryId: {},
                SchemaExtensionId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          ConnectDirectory: {
            input: {
              type: 'structure',
              required: ['Name', 'Password', 'Size', 'ConnectSettings'],
              members: {
                Name: {},
                ShortName: {},
                Password: {
                  shape: 'S12'
                },
                Description: {},
                Size: {},
                ConnectSettings: {
                  type: 'structure',
                  required: ['VpcId', 'SubnetIds', 'CustomerDnsIps', 'CustomerUserName'],
                  members: {
                    VpcId: {},
                    SubnetIds: {
                      shape: 'Sm'
                    },
                    CustomerDnsIps: {
                      shape: 'S15'
                    },
                    CustomerUserName: {}
                  }
                },
                Tags: {
                  shape: 'Sr'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                DirectoryId: {}
              }
            }
          },
          CreateAlias: {
            input: {
              type: 'structure',
              required: ['DirectoryId', 'Alias'],
              members: {
                DirectoryId: {},
                Alias: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                DirectoryId: {},
                Alias: {}
              }
            }
          },
          CreateComputer: {
            input: {
              type: 'structure',
              required: ['DirectoryId', 'ComputerName', 'Password'],
              members: {
                DirectoryId: {},
                ComputerName: {},
                Password: {
                  type: 'string',
                  sensitive: true
                },
                OrganizationalUnitDistinguishedName: {},
                ComputerAttributes: {
                  shape: 'S1g'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Computer: {
                  type: 'structure',
                  members: {
                    ComputerId: {},
                    ComputerName: {},
                    ComputerAttributes: {
                      shape: 'S1g'
                    }
                  }
                }
              }
            }
          },
          CreateConditionalForwarder: {
            input: {
              type: 'structure',
              required: ['DirectoryId', 'RemoteDomainName', 'DnsIpAddrs'],
              members: {
                DirectoryId: {},
                RemoteDomainName: {},
                DnsIpAddrs: {
                  shape: 'S15'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          CreateDirectory: {
            input: {
              type: 'structure',
              required: ['Name', 'Password', 'Size'],
              members: {
                Name: {},
                ShortName: {},
                Password: {
                  shape: 'S1r'
                },
                Description: {},
                Size: {},
                VpcSettings: {
                  shape: 'Sk'
                },
                Tags: {
                  shape: 'Sr'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                DirectoryId: {}
              }
            }
          },
          CreateLogSubscription: {
            input: {
              type: 'structure',
              required: ['DirectoryId', 'LogGroupName'],
              members: {
                DirectoryId: {},
                LogGroupName: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          CreateMicrosoftAD: {
            input: {
              type: 'structure',
              required: ['Name', 'Password', 'VpcSettings'],
              members: {
                Name: {},
                ShortName: {},
                Password: {
                  shape: 'S1r'
                },
                Description: {},
                VpcSettings: {
                  shape: 'Sk'
                },
                Edition: {},
                Tags: {
                  shape: 'Sr'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                DirectoryId: {}
              }
            }
          },
          CreateSnapshot: {
            input: {
              type: 'structure',
              required: ['DirectoryId'],
              members: {
                DirectoryId: {},
                Name: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                SnapshotId: {}
              }
            }
          },
          CreateTrust: {
            input: {
              type: 'structure',
              required: ['DirectoryId', 'RemoteDomainName', 'TrustPassword', 'TrustDirection'],
              members: {
                DirectoryId: {},
                RemoteDomainName: {},
                TrustPassword: {
                  type: 'string',
                  sensitive: true
                },
                TrustDirection: {},
                TrustType: {},
                ConditionalForwarderIpAddrs: {
                  shape: 'S15'
                },
                SelectiveAuth: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                TrustId: {}
              }
            }
          },
          DeleteConditionalForwarder: {
            input: {
              type: 'structure',
              required: ['DirectoryId', 'RemoteDomainName'],
              members: {
                DirectoryId: {},
                RemoteDomainName: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteDirectory: {
            input: {
              type: 'structure',
              required: ['DirectoryId'],
              members: {
                DirectoryId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                DirectoryId: {}
              }
            }
          },
          DeleteLogSubscription: {
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
          DeleteSnapshot: {
            input: {
              type: 'structure',
              required: ['SnapshotId'],
              members: {
                SnapshotId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                SnapshotId: {}
              }
            }
          },
          DeleteTrust: {
            input: {
              type: 'structure',
              required: ['TrustId'],
              members: {
                TrustId: {},
                DeleteAssociatedConditionalForwarder: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                TrustId: {}
              }
            }
          },
          DeregisterCertificate: {
            input: {
              type: 'structure',
              required: ['DirectoryId', 'CertificateId'],
              members: {
                DirectoryId: {},
                CertificateId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeregisterEventTopic: {
            input: {
              type: 'structure',
              required: ['DirectoryId', 'TopicName'],
              members: {
                DirectoryId: {},
                TopicName: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DescribeCertificate: {
            input: {
              type: 'structure',
              required: ['DirectoryId', 'CertificateId'],
              members: {
                DirectoryId: {},
                CertificateId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Certificate: {
                  type: 'structure',
                  members: {
                    CertificateId: {},
                    State: {},
                    StateReason: {},
                    CommonName: {},
                    RegisteredDateTime: {
                      type: 'timestamp'
                    },
                    ExpiryDateTime: {
                      type: 'timestamp'
                    },
                    Type: {},
                    ClientCertAuthSettings: {
                      shape: 'S30'
                    }
                  }
                }
              }
            }
          },
          DescribeClientAuthenticationSettings: {
            input: {
              type: 'structure',
              required: ['DirectoryId'],
              members: {
                DirectoryId: {},
                Type: {},
                NextToken: {},
                Limit: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ClientAuthenticationSettingsInfo: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Type: {},
                      Status: {},
                      LastUpdatedDateTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeConditionalForwarders: {
            input: {
              type: 'structure',
              required: ['DirectoryId'],
              members: {
                DirectoryId: {},
                RemoteDomainNames: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ConditionalForwarders: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      RemoteDomainName: {},
                      DnsIpAddrs: {
                        shape: 'S15'
                      },
                      ReplicationScope: {}
                    }
                  }
                }
              }
            }
          },
          DescribeDirectories: {
            input: {
              type: 'structure',
              members: {
                DirectoryIds: {
                  shape: 'S3h'
                },
                NextToken: {},
                Limit: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                DirectoryDescriptions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      DirectoryId: {},
                      Name: {},
                      ShortName: {},
                      Size: {},
                      Edition: {},
                      Alias: {},
                      AccessUrl: {},
                      Description: {},
                      DnsIpAddrs: {
                        shape: 'S15'
                      },
                      Stage: {},
                      ShareStatus: {},
                      ShareMethod: {},
                      ShareNotes: {
                        shape: 'S8'
                      },
                      LaunchTime: {
                        type: 'timestamp'
                      },
                      StageLastUpdatedDateTime: {
                        type: 'timestamp'
                      },
                      Type: {},
                      VpcSettings: {
                        shape: 'S3q'
                      },
                      ConnectSettings: {
                        type: 'structure',
                        members: {
                          VpcId: {},
                          SubnetIds: {
                            shape: 'Sm'
                          },
                          CustomerUserName: {},
                          SecurityGroupId: {},
                          AvailabilityZones: {
                            shape: 'S3s'
                          },
                          ConnectIps: {
                            type: 'list',
                            member: {}
                          }
                        }
                      },
                      RadiusSettings: {
                        shape: 'S3w'
                      },
                      RadiusStatus: {},
                      StageReason: {},
                      SsoEnabled: {
                        type: 'boolean'
                      },
                      DesiredNumberOfDomainControllers: {
                        type: 'integer'
                      },
                      OwnerDirectoryDescription: {
                        type: 'structure',
                        members: {
                          DirectoryId: {},
                          AccountId: {},
                          DnsIpAddrs: {
                            shape: 'S15'
                          },
                          VpcSettings: {
                            shape: 'S3q'
                          },
                          RadiusSettings: {
                            shape: 'S3w'
                          },
                          RadiusStatus: {}
                        }
                      },
                      RegionsInfo: {
                        type: 'structure',
                        members: {
                          PrimaryRegion: {},
                          AdditionalRegions: {
                            type: 'list',
                            member: {}
                          }
                        }
                      },
                      OsVersion: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeDomainControllers: {
            input: {
              type: 'structure',
              required: ['DirectoryId'],
              members: {
                DirectoryId: {},
                DomainControllerIds: {
                  type: 'list',
                  member: {}
                },
                NextToken: {},
                Limit: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                DomainControllers: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      DirectoryId: {},
                      DomainControllerId: {},
                      DnsIpAddr: {},
                      VpcId: {},
                      SubnetId: {},
                      AvailabilityZone: {},
                      Status: {},
                      StatusReason: {},
                      LaunchTime: {
                        type: 'timestamp'
                      },
                      StatusLastUpdatedDateTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeEventTopics: {
            input: {
              type: 'structure',
              members: {
                DirectoryId: {},
                TopicNames: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                EventTopics: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      DirectoryId: {},
                      TopicName: {},
                      TopicArn: {},
                      CreatedDateTime: {
                        type: 'timestamp'
                      },
                      Status: {}
                    }
                  }
                }
              }
            }
          },
          DescribeLDAPSSettings: {
            input: {
              type: 'structure',
              required: ['DirectoryId'],
              members: {
                DirectoryId: {},
                Type: {},
                NextToken: {},
                Limit: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                LDAPSSettingsInfo: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      LDAPSStatus: {},
                      LDAPSStatusReason: {},
                      LastUpdatedDateTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeRegions: {
            input: {
              type: 'structure',
              required: ['DirectoryId'],
              members: {
                DirectoryId: {},
                RegionName: {},
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                RegionsDescription: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      DirectoryId: {},
                      RegionName: {},
                      RegionType: {},
                      Status: {},
                      VpcSettings: {
                        shape: 'Sk'
                      },
                      DesiredNumberOfDomainControllers: {
                        type: 'integer'
                      },
                      LaunchTime: {
                        type: 'timestamp'
                      },
                      StatusLastUpdatedDateTime: {
                        type: 'timestamp'
                      },
                      LastUpdatedDateTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeSettings: {
            input: {
              type: 'structure',
              required: ['DirectoryId'],
              members: {
                DirectoryId: {},
                Status: {},
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                DirectoryId: {},
                SettingEntries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Type: {},
                      Name: {},
                      AllowedValues: {},
                      AppliedValue: {},
                      RequestedValue: {},
                      RequestStatus: {},
                      RequestDetailedStatus: {
                        type: 'map',
                        key: {},
                        value: {}
                      },
                      RequestStatusMessage: {},
                      LastUpdatedDateTime: {
                        type: 'timestamp'
                      },
                      LastRequestedDateTime: {
                        type: 'timestamp'
                      },
                      DataType: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeSharedDirectories: {
            input: {
              type: 'structure',
              required: ['OwnerDirectoryId'],
              members: {
                OwnerDirectoryId: {},
                SharedDirectoryIds: {
                  shape: 'S3h'
                },
                NextToken: {},
                Limit: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                SharedDirectories: {
                  type: 'list',
                  member: {
                    shape: 'S4'
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeSnapshots: {
            input: {
              type: 'structure',
              members: {
                DirectoryId: {},
                SnapshotIds: {
                  type: 'list',
                  member: {}
                },
                NextToken: {},
                Limit: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Snapshots: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      DirectoryId: {},
                      SnapshotId: {},
                      Type: {},
                      Name: {},
                      Status: {},
                      StartTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeTrusts: {
            input: {
              type: 'structure',
              members: {
                DirectoryId: {},
                TrustIds: {
                  type: 'list',
                  member: {}
                },
                NextToken: {},
                Limit: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Trusts: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      DirectoryId: {},
                      TrustId: {},
                      RemoteDomainName: {},
                      TrustType: {},
                      TrustDirection: {},
                      TrustState: {},
                      CreatedDateTime: {
                        type: 'timestamp'
                      },
                      LastUpdatedDateTime: {
                        type: 'timestamp'
                      },
                      StateLastUpdatedDateTime: {
                        type: 'timestamp'
                      },
                      TrustStateReason: {},
                      SelectiveAuth: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeUpdateDirectory: {
            input: {
              type: 'structure',
              required: ['DirectoryId', 'UpdateType'],
              members: {
                DirectoryId: {},
                UpdateType: {},
                RegionName: {},
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                UpdateActivities: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Region: {},
                      Status: {},
                      StatusReason: {},
                      InitiatedBy: {},
                      NewValue: {
                        shape: 'S6a'
                      },
                      PreviousValue: {
                        shape: 'S6a'
                      },
                      StartTime: {
                        type: 'timestamp'
                      },
                      LastUpdatedDateTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DisableClientAuthentication: {
            input: {
              type: 'structure',
              required: ['DirectoryId', 'Type'],
              members: {
                DirectoryId: {},
                Type: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DisableLDAPS: {
            input: {
              type: 'structure',
              required: ['DirectoryId', 'Type'],
              members: {
                DirectoryId: {},
                Type: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DisableRadius: {
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
          DisableSso: {
            input: {
              type: 'structure',
              required: ['DirectoryId'],
              members: {
                DirectoryId: {},
                UserName: {},
                Password: {
                  shape: 'S12'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          EnableClientAuthentication: {
            input: {
              type: 'structure',
              required: ['DirectoryId', 'Type'],
              members: {
                DirectoryId: {},
                Type: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          EnableLDAPS: {
            input: {
              type: 'structure',
              required: ['DirectoryId', 'Type'],
              members: {
                DirectoryId: {},
                Type: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          EnableRadius: {
            input: {
              type: 'structure',
              required: ['DirectoryId', 'RadiusSettings'],
              members: {
                DirectoryId: {},
                RadiusSettings: {
                  shape: 'S3w'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          EnableSso: {
            input: {
              type: 'structure',
              required: ['DirectoryId'],
              members: {
                DirectoryId: {},
                UserName: {},
                Password: {
                  shape: 'S12'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          GetDirectoryLimits: {
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {
                DirectoryLimits: {
                  type: 'structure',
                  members: {
                    CloudOnlyDirectoriesLimit: {
                      type: 'integer'
                    },
                    CloudOnlyDirectoriesCurrentCount: {
                      type: 'integer'
                    },
                    CloudOnlyDirectoriesLimitReached: {
                      type: 'boolean'
                    },
                    CloudOnlyMicrosoftADLimit: {
                      type: 'integer'
                    },
                    CloudOnlyMicrosoftADCurrentCount: {
                      type: 'integer'
                    },
                    CloudOnlyMicrosoftADLimitReached: {
                      type: 'boolean'
                    },
                    ConnectedDirectoriesLimit: {
                      type: 'integer'
                    },
                    ConnectedDirectoriesCurrentCount: {
                      type: 'integer'
                    },
                    ConnectedDirectoriesLimitReached: {
                      type: 'boolean'
                    }
                  }
                }
              }
            }
          },
          GetSnapshotLimits: {
            input: {
              type: 'structure',
              required: ['DirectoryId'],
              members: {
                DirectoryId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                SnapshotLimits: {
                  type: 'structure',
                  members: {
                    ManualSnapshotsLimit: {
                      type: 'integer'
                    },
                    ManualSnapshotsCurrentCount: {
                      type: 'integer'
                    },
                    ManualSnapshotsLimitReached: {
                      type: 'boolean'
                    }
                  }
                }
              }
            }
          },
          ListCertificates: {
            input: {
              type: 'structure',
              required: ['DirectoryId'],
              members: {
                DirectoryId: {},
                NextToken: {},
                Limit: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                CertificatesInfo: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      CertificateId: {},
                      CommonName: {},
                      State: {},
                      ExpiryDateTime: {
                        type: 'timestamp'
                      },
                      Type: {}
                    }
                  }
                }
              }
            }
          },
          ListIpRoutes: {
            input: {
              type: 'structure',
              required: ['DirectoryId'],
              members: {
                DirectoryId: {},
                NextToken: {},
                Limit: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                IpRoutesInfo: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      DirectoryId: {},
                      CidrIp: {},
                      IpRouteStatusMsg: {},
                      AddedDateTime: {
                        type: 'timestamp'
                      },
                      IpRouteStatusReason: {},
                      Description: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListLogSubscriptions: {
            input: {
              type: 'structure',
              members: {
                DirectoryId: {},
                NextToken: {},
                Limit: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                LogSubscriptions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      DirectoryId: {},
                      LogGroupName: {},
                      SubscriptionCreatedDateTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListSchemaExtensions: {
            input: {
              type: 'structure',
              required: ['DirectoryId'],
              members: {
                DirectoryId: {},
                NextToken: {},
                Limit: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                SchemaExtensionsInfo: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      DirectoryId: {},
                      SchemaExtensionId: {},
                      Description: {},
                      SchemaExtensionStatus: {},
                      SchemaExtensionStatusReason: {},
                      StartDateTime: {
                        type: 'timestamp'
                      },
                      EndDateTime: {
                        type: 'timestamp'
                      }
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
              required: ['ResourceId'],
              members: {
                ResourceId: {},
                NextToken: {},
                Limit: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Tags: {
                  shape: 'Sr'
                },
                NextToken: {}
              }
            }
          },
          RegisterCertificate: {
            input: {
              type: 'structure',
              required: ['DirectoryId', 'CertificateData'],
              members: {
                DirectoryId: {},
                CertificateData: {},
                Type: {},
                ClientCertAuthSettings: {
                  shape: 'S30'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                CertificateId: {}
              }
            }
          },
          RegisterEventTopic: {
            input: {
              type: 'structure',
              required: ['DirectoryId', 'TopicName'],
              members: {
                DirectoryId: {},
                TopicName: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          RejectSharedDirectory: {
            input: {
              type: 'structure',
              required: ['SharedDirectoryId'],
              members: {
                SharedDirectoryId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                SharedDirectoryId: {}
              }
            }
          },
          RemoveIpRoutes: {
            input: {
              type: 'structure',
              required: ['DirectoryId', 'CidrIps'],
              members: {
                DirectoryId: {},
                CidrIps: {
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
          RemoveRegion: {
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
          RemoveTagsFromResource: {
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
          ResetUserPassword: {
            input: {
              type: 'structure',
              required: ['DirectoryId', 'UserName', 'NewPassword'],
              members: {
                DirectoryId: {},
                UserName: {},
                NewPassword: {
                  type: 'string',
                  sensitive: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          RestoreFromSnapshot: {
            input: {
              type: 'structure',
              required: ['SnapshotId'],
              members: {
                SnapshotId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          ShareDirectory: {
            input: {
              type: 'structure',
              required: ['DirectoryId', 'ShareTarget', 'ShareMethod'],
              members: {
                DirectoryId: {},
                ShareNotes: {
                  shape: 'S8'
                },
                ShareTarget: {
                  type: 'structure',
                  required: ['Id', 'Type'],
                  members: {
                    Id: {},
                    Type: {}
                  }
                },
                ShareMethod: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                SharedDirectoryId: {}
              }
            }
          },
          StartSchemaExtension: {
            input: {
              type: 'structure',
              required: ['DirectoryId', 'CreateSnapshotBeforeSchemaExtension', 'LdifContent', 'Description'],
              members: {
                DirectoryId: {},
                CreateSnapshotBeforeSchemaExtension: {
                  type: 'boolean'
                },
                LdifContent: {},
                Description: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                SchemaExtensionId: {}
              }
            }
          },
          UnshareDirectory: {
            input: {
              type: 'structure',
              required: ['DirectoryId', 'UnshareTarget'],
              members: {
                DirectoryId: {},
                UnshareTarget: {
                  type: 'structure',
                  required: ['Id', 'Type'],
                  members: {
                    Id: {},
                    Type: {}
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                SharedDirectoryId: {}
              }
            }
          },
          UpdateConditionalForwarder: {
            input: {
              type: 'structure',
              required: ['DirectoryId', 'RemoteDomainName', 'DnsIpAddrs'],
              members: {
                DirectoryId: {},
                RemoteDomainName: {},
                DnsIpAddrs: {
                  shape: 'S15'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateDirectorySetup: {
            input: {
              type: 'structure',
              required: ['DirectoryId', 'UpdateType'],
              members: {
                DirectoryId: {},
                UpdateType: {},
                OSUpdateSettings: {
                  shape: 'S6b'
                },
                CreateSnapshotBeforeUpdate: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateNumberOfDomainControllers: {
            input: {
              type: 'structure',
              required: ['DirectoryId', 'DesiredNumber'],
              members: {
                DirectoryId: {},
                DesiredNumber: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateRadius: {
            input: {
              type: 'structure',
              required: ['DirectoryId', 'RadiusSettings'],
              members: {
                DirectoryId: {},
                RadiusSettings: {
                  shape: 'S3w'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateSettings: {
            input: {
              type: 'structure',
              required: ['DirectoryId', 'Settings'],
              members: {
                DirectoryId: {},
                Settings: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Name', 'Value'],
                    members: {
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
                DirectoryId: {}
              }
            }
          },
          UpdateTrust: {
            input: {
              type: 'structure',
              required: ['TrustId'],
              members: {
                TrustId: {},
                SelectiveAuth: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                RequestId: {},
                TrustId: {}
              }
            }
          },
          VerifyTrust: {
            input: {
              type: 'structure',
              required: ['TrustId'],
              members: {
                TrustId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                TrustId: {}
              }
            }
          }
        },
        shapes: {
          S4: {
            type: 'structure',
            members: {
              OwnerAccountId: {},
              OwnerDirectoryId: {},
              ShareMethod: {},
              SharedAccountId: {},
              SharedDirectoryId: {},
              ShareStatus: {},
              ShareNotes: {
                shape: 'S8'
              },
              CreatedDateTime: {
                type: 'timestamp'
              },
              LastUpdatedDateTime: {
                type: 'timestamp'
              }
            }
          },
          S8: {
            type: 'string',
            sensitive: true
          },
          Sk: {
            type: 'structure',
            required: ['VpcId', 'SubnetIds'],
            members: {
              VpcId: {},
              SubnetIds: {
                shape: 'Sm'
              }
            }
          },
          Sm: {
            type: 'list',
            member: {}
          },
          Sr: {
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
          S12: {
            type: 'string',
            sensitive: true
          },
          S15: {
            type: 'list',
            member: {}
          },
          S1g: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Name: {},
                Value: {}
              }
            }
          },
          S1r: {
            type: 'string',
            sensitive: true
          },
          S30: {
            type: 'structure',
            members: {
              OCSPUrl: {}
            }
          },
          S3h: {
            type: 'list',
            member: {}
          },
          S3q: {
            type: 'structure',
            members: {
              VpcId: {},
              SubnetIds: {
                shape: 'Sm'
              },
              SecurityGroupId: {},
              AvailabilityZones: {
                shape: 'S3s'
              }
            }
          },
          S3s: {
            type: 'list',
            member: {}
          },
          S3w: {
            type: 'structure',
            members: {
              RadiusServers: {
                type: 'list',
                member: {}
              },
              RadiusPort: {
                type: 'integer'
              },
              RadiusTimeout: {
                type: 'integer'
              },
              RadiusRetries: {
                type: 'integer'
              },
              SharedSecret: {
                type: 'string',
                sensitive: true
              },
              AuthenticationProtocol: {},
              DisplayLabel: {},
              UseSameUsername: {
                type: 'boolean'
              }
            }
          },
          S6a: {
            type: 'structure',
            members: {
              OSUpdateSettings: {
                shape: 'S6b'
              }
            }
          },
          S6b: {
            type: 'structure',
            members: {
              OSVersion: {}
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=5753ffee42e653985e0994e4dbcd1e511c5f543e.js.map