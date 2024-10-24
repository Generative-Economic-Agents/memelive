System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2021-01-01',
          endpointPrefix: 'es',
          protocol: 'rest-json',
          protocols: ['rest-json'],
          serviceFullName: 'Amazon OpenSearch Service',
          serviceId: 'OpenSearch',
          signatureVersion: 'v4',
          uid: 'opensearch-2021-01-01'
        },
        operations: {
          AcceptInboundConnection: {
            http: {
              method: 'PUT',
              requestUri: '/2021-01-01/opensearch/cc/inboundConnection/{ConnectionId}/accept'
            },
            input: {
              type: 'structure',
              required: ['ConnectionId'],
              members: {
                ConnectionId: {
                  location: 'uri',
                  locationName: 'ConnectionId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Connection: {
                  shape: 'S4'
                }
              }
            }
          },
          AddDataSource: {
            http: {
              requestUri: '/2021-01-01/opensearch/domain/{DomainName}/dataSource'
            },
            input: {
              type: 'structure',
              required: ['DomainName', 'Name', 'DataSourceType'],
              members: {
                DomainName: {
                  location: 'uri',
                  locationName: 'DomainName'
                },
                Name: {},
                DataSourceType: {
                  shape: 'Sg'
                },
                Description: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Message: {}
              }
            }
          },
          AddTags: {
            http: {
              requestUri: '/2021-01-01/tags'
            },
            input: {
              type: 'structure',
              required: ['ARN', 'TagList'],
              members: {
                ARN: {},
                TagList: {
                  shape: 'So'
                }
              }
            }
          },
          AssociatePackage: {
            http: {
              requestUri: '/2021-01-01/packages/associate/{PackageID}/{DomainName}'
            },
            input: {
              type: 'structure',
              required: ['PackageID', 'DomainName'],
              members: {
                PackageID: {
                  location: 'uri',
                  locationName: 'PackageID'
                },
                DomainName: {
                  location: 'uri',
                  locationName: 'DomainName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                DomainPackageDetails: {
                  shape: 'Sv'
                }
              }
            }
          },
          AuthorizeVpcEndpointAccess: {
            http: {
              requestUri: '/2021-01-01/opensearch/domain/{DomainName}/authorizeVpcEndpointAccess'
            },
            input: {
              type: 'structure',
              required: ['DomainName', 'Account'],
              members: {
                DomainName: {
                  location: 'uri',
                  locationName: 'DomainName'
                },
                Account: {}
              }
            },
            output: {
              type: 'structure',
              required: ['AuthorizedPrincipal'],
              members: {
                AuthorizedPrincipal: {
                  shape: 'S18'
                }
              }
            }
          },
          CancelDomainConfigChange: {
            http: {
              requestUri: '/2021-01-01/opensearch/domain/{DomainName}/config/cancel'
            },
            input: {
              type: 'structure',
              required: ['DomainName'],
              members: {
                DomainName: {
                  location: 'uri',
                  locationName: 'DomainName'
                },
                DryRun: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                CancelledChangeIds: {
                  type: 'list',
                  member: {}
                },
                CancelledChangeProperties: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      PropertyName: {},
                      CancelledValue: {},
                      ActiveValue: {}
                    }
                  }
                },
                DryRun: {
                  type: 'boolean'
                }
              }
            }
          },
          CancelServiceSoftwareUpdate: {
            http: {
              requestUri: '/2021-01-01/opensearch/serviceSoftwareUpdate/cancel'
            },
            input: {
              type: 'structure',
              required: ['DomainName'],
              members: {
                DomainName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ServiceSoftwareOptions: {
                  shape: 'S1j'
                }
              }
            }
          },
          CreateDomain: {
            http: {
              requestUri: '/2021-01-01/opensearch/domain'
            },
            input: {
              type: 'structure',
              required: ['DomainName'],
              members: {
                DomainName: {},
                EngineVersion: {},
                ClusterConfig: {
                  shape: 'S1p'
                },
                EBSOptions: {
                  shape: 'S1v'
                },
                AccessPolicies: {},
                IPAddressType: {},
                SnapshotOptions: {
                  shape: 'S1z'
                },
                VPCOptions: {
                  shape: 'S20'
                },
                CognitoOptions: {
                  shape: 'S22'
                },
                EncryptionAtRestOptions: {
                  shape: 'S25'
                },
                NodeToNodeEncryptionOptions: {
                  shape: 'S27'
                },
                AdvancedOptions: {
                  shape: 'S28'
                },
                LogPublishingOptions: {
                  shape: 'S29'
                },
                DomainEndpointOptions: {
                  shape: 'S2d'
                },
                AdvancedSecurityOptions: {
                  shape: 'S2g'
                },
                TagList: {
                  shape: 'So'
                },
                AutoTuneOptions: {
                  type: 'structure',
                  members: {
                    DesiredState: {},
                    MaintenanceSchedules: {
                      shape: 'S2r'
                    },
                    UseOffPeakWindow: {
                      type: 'boolean'
                    }
                  }
                },
                OffPeakWindowOptions: {
                  shape: 'S2x'
                },
                SoftwareUpdateOptions: {
                  shape: 'S32'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                DomainStatus: {
                  shape: 'S34'
                }
              }
            }
          },
          CreateOutboundConnection: {
            http: {
              requestUri: '/2021-01-01/opensearch/cc/outboundConnection'
            },
            input: {
              type: 'structure',
              required: ['LocalDomainInfo', 'RemoteDomainInfo', 'ConnectionAlias'],
              members: {
                LocalDomainInfo: {
                  shape: 'S5'
                },
                RemoteDomainInfo: {
                  shape: 'S5'
                },
                ConnectionAlias: {},
                ConnectionMode: {},
                ConnectionProperties: {
                  shape: 'S3q'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                LocalDomainInfo: {
                  shape: 'S5'
                },
                RemoteDomainInfo: {
                  shape: 'S5'
                },
                ConnectionAlias: {},
                ConnectionStatus: {
                  shape: 'S3v'
                },
                ConnectionId: {},
                ConnectionMode: {},
                ConnectionProperties: {
                  shape: 'S3q'
                }
              }
            }
          },
          CreatePackage: {
            http: {
              requestUri: '/2021-01-01/packages'
            },
            input: {
              type: 'structure',
              required: ['PackageName', 'PackageType', 'PackageSource'],
              members: {
                PackageName: {},
                PackageType: {},
                PackageDescription: {},
                PackageSource: {
                  shape: 'S3z'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                PackageDetails: {
                  shape: 'S43'
                }
              }
            }
          },
          CreateVpcEndpoint: {
            http: {
              requestUri: '/2021-01-01/opensearch/vpcEndpoints'
            },
            input: {
              type: 'structure',
              required: ['DomainArn', 'VpcOptions'],
              members: {
                DomainArn: {},
                VpcOptions: {
                  shape: 'S20'
                },
                ClientToken: {}
              }
            },
            output: {
              type: 'structure',
              required: ['VpcEndpoint'],
              members: {
                VpcEndpoint: {
                  shape: 'S4h'
                }
              }
            }
          },
          DeleteDataSource: {
            http: {
              method: 'DELETE',
              requestUri: '/2021-01-01/opensearch/domain/{DomainName}/dataSource/{DataSourceName}'
            },
            input: {
              type: 'structure',
              required: ['DomainName', 'Name'],
              members: {
                DomainName: {
                  location: 'uri',
                  locationName: 'DomainName'
                },
                Name: {
                  location: 'uri',
                  locationName: 'DataSourceName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Message: {}
              }
            }
          },
          DeleteDomain: {
            http: {
              method: 'DELETE',
              requestUri: '/2021-01-01/opensearch/domain/{DomainName}'
            },
            input: {
              type: 'structure',
              required: ['DomainName'],
              members: {
                DomainName: {
                  location: 'uri',
                  locationName: 'DomainName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                DomainStatus: {
                  shape: 'S34'
                }
              }
            }
          },
          DeleteInboundConnection: {
            http: {
              method: 'DELETE',
              requestUri: '/2021-01-01/opensearch/cc/inboundConnection/{ConnectionId}'
            },
            input: {
              type: 'structure',
              required: ['ConnectionId'],
              members: {
                ConnectionId: {
                  location: 'uri',
                  locationName: 'ConnectionId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Connection: {
                  shape: 'S4'
                }
              }
            }
          },
          DeleteOutboundConnection: {
            http: {
              method: 'DELETE',
              requestUri: '/2021-01-01/opensearch/cc/outboundConnection/{ConnectionId}'
            },
            input: {
              type: 'structure',
              required: ['ConnectionId'],
              members: {
                ConnectionId: {
                  location: 'uri',
                  locationName: 'ConnectionId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Connection: {
                  shape: 'S4s'
                }
              }
            }
          },
          DeletePackage: {
            http: {
              method: 'DELETE',
              requestUri: '/2021-01-01/packages/{PackageID}'
            },
            input: {
              type: 'structure',
              required: ['PackageID'],
              members: {
                PackageID: {
                  location: 'uri',
                  locationName: 'PackageID'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                PackageDetails: {
                  shape: 'S43'
                }
              }
            }
          },
          DeleteVpcEndpoint: {
            http: {
              method: 'DELETE',
              requestUri: '/2021-01-01/opensearch/vpcEndpoints/{VpcEndpointId}'
            },
            input: {
              type: 'structure',
              required: ['VpcEndpointId'],
              members: {
                VpcEndpointId: {
                  location: 'uri',
                  locationName: 'VpcEndpointId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['VpcEndpointSummary'],
              members: {
                VpcEndpointSummary: {
                  shape: 'S4x'
                }
              }
            }
          },
          DescribeDomain: {
            http: {
              method: 'GET',
              requestUri: '/2021-01-01/opensearch/domain/{DomainName}'
            },
            input: {
              type: 'structure',
              required: ['DomainName'],
              members: {
                DomainName: {
                  location: 'uri',
                  locationName: 'DomainName'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['DomainStatus'],
              members: {
                DomainStatus: {
                  shape: 'S34'
                }
              }
            }
          },
          DescribeDomainAutoTunes: {
            http: {
              method: 'GET',
              requestUri: '/2021-01-01/opensearch/domain/{DomainName}/autoTunes'
            },
            input: {
              type: 'structure',
              required: ['DomainName'],
              members: {
                DomainName: {
                  location: 'uri',
                  locationName: 'DomainName'
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
                AutoTunes: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      AutoTuneType: {},
                      AutoTuneDetails: {
                        type: 'structure',
                        members: {
                          ScheduledAutoTuneDetails: {
                            type: 'structure',
                            members: {
                              Date: {
                                type: 'timestamp'
                              },
                              ActionType: {},
                              Action: {},
                              Severity: {}
                            }
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
          DescribeDomainChangeProgress: {
            http: {
              method: 'GET',
              requestUri: '/2021-01-01/opensearch/domain/{DomainName}/progress'
            },
            input: {
              type: 'structure',
              required: ['DomainName'],
              members: {
                DomainName: {
                  location: 'uri',
                  locationName: 'DomainName'
                },
                ChangeId: {
                  location: 'querystring',
                  locationName: 'changeid'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ChangeProgressStatus: {
                  type: 'structure',
                  members: {
                    ChangeId: {},
                    StartTime: {
                      type: 'timestamp'
                    },
                    Status: {},
                    PendingProperties: {
                      shape: 'S21'
                    },
                    CompletedProperties: {
                      shape: 'S21'
                    },
                    TotalNumberOfStages: {
                      type: 'integer'
                    },
                    ChangeProgressStages: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          Name: {},
                          Status: {},
                          Description: {},
                          LastUpdated: {
                            type: 'timestamp'
                          }
                        }
                      }
                    },
                    LastUpdatedTime: {
                      type: 'timestamp'
                    },
                    ConfigChangeStatus: {},
                    InitiatedBy: {}
                  }
                }
              }
            }
          },
          DescribeDomainConfig: {
            http: {
              method: 'GET',
              requestUri: '/2021-01-01/opensearch/domain/{DomainName}/config'
            },
            input: {
              type: 'structure',
              required: ['DomainName'],
              members: {
                DomainName: {
                  location: 'uri',
                  locationName: 'DomainName'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['DomainConfig'],
              members: {
                DomainConfig: {
                  shape: 'S5p'
                }
              }
            }
          },
          DescribeDomainHealth: {
            http: {
              method: 'GET',
              requestUri: '/2021-01-01/opensearch/domain/{DomainName}/health'
            },
            input: {
              type: 'structure',
              required: ['DomainName'],
              members: {
                DomainName: {
                  location: 'uri',
                  locationName: 'DomainName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                DomainState: {},
                AvailabilityZoneCount: {},
                ActiveAvailabilityZoneCount: {},
                StandByAvailabilityZoneCount: {},
                DataNodeCount: {},
                DedicatedMaster: {
                  type: 'boolean'
                },
                MasterEligibleNodeCount: {},
                WarmNodeCount: {},
                MasterNode: {},
                ClusterHealth: {},
                TotalShards: {},
                TotalUnAssignedShards: {},
                EnvironmentInformation: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      AvailabilityZoneInformation: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            AvailabilityZoneName: {},
                            ZoneStatus: {},
                            ConfiguredDataNodeCount: {},
                            AvailableDataNodeCount: {},
                            TotalShards: {},
                            TotalUnAssignedShards: {}
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          DescribeDomainNodes: {
            http: {
              method: 'GET',
              requestUri: '/2021-01-01/opensearch/domain/{DomainName}/nodes'
            },
            input: {
              type: 'structure',
              required: ['DomainName'],
              members: {
                DomainName: {
                  location: 'uri',
                  locationName: 'DomainName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                DomainNodesStatusList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      NodeId: {},
                      NodeType: {},
                      AvailabilityZone: {},
                      InstanceType: {},
                      NodeStatus: {},
                      StorageType: {},
                      StorageVolumeType: {},
                      StorageSize: {}
                    }
                  }
                }
              }
            }
          },
          DescribeDomains: {
            http: {
              requestUri: '/2021-01-01/opensearch/domain-info'
            },
            input: {
              type: 'structure',
              required: ['DomainNames'],
              members: {
                DomainNames: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              required: ['DomainStatusList'],
              members: {
                DomainStatusList: {
                  type: 'list',
                  member: {
                    shape: 'S34'
                  }
                }
              }
            }
          },
          DescribeDryRunProgress: {
            http: {
              method: 'GET',
              requestUri: '/2021-01-01/opensearch/domain/{DomainName}/dryRun'
            },
            input: {
              type: 'structure',
              required: ['DomainName'],
              members: {
                DomainName: {
                  location: 'uri',
                  locationName: 'DomainName'
                },
                DryRunId: {
                  location: 'querystring',
                  locationName: 'dryRunId'
                },
                LoadDryRunConfig: {
                  location: 'querystring',
                  locationName: 'loadDryRunConfig',
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                DryRunProgressStatus: {
                  shape: 'S76'
                },
                DryRunConfig: {
                  shape: 'S34'
                },
                DryRunResults: {
                  shape: 'S79'
                }
              }
            }
          },
          DescribeInboundConnections: {
            http: {
              requestUri: '/2021-01-01/opensearch/cc/inboundConnection/search'
            },
            input: {
              type: 'structure',
              members: {
                Filters: {
                  shape: 'S7c'
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
                Connections: {
                  type: 'list',
                  member: {
                    shape: 'S4'
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeInstanceTypeLimits: {
            http: {
              method: 'GET',
              requestUri: '/2021-01-01/opensearch/instanceTypeLimits/{EngineVersion}/{InstanceType}'
            },
            input: {
              type: 'structure',
              required: ['InstanceType', 'EngineVersion'],
              members: {
                DomainName: {
                  location: 'querystring',
                  locationName: 'domainName'
                },
                InstanceType: {
                  location: 'uri',
                  locationName: 'InstanceType'
                },
                EngineVersion: {
                  location: 'uri',
                  locationName: 'EngineVersion'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                LimitsByRole: {
                  type: 'map',
                  key: {},
                  value: {
                    type: 'structure',
                    members: {
                      StorageTypes: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            StorageTypeName: {},
                            StorageSubTypeName: {},
                            StorageTypeLimits: {
                              type: 'list',
                              member: {
                                type: 'structure',
                                members: {
                                  LimitName: {},
                                  LimitValues: {
                                    shape: 'S7t'
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      InstanceLimits: {
                        type: 'structure',
                        members: {
                          InstanceCountLimits: {
                            type: 'structure',
                            members: {
                              MinimumInstanceCount: {
                                type: 'integer'
                              },
                              MaximumInstanceCount: {
                                type: 'integer'
                              }
                            }
                          }
                        }
                      },
                      AdditionalLimits: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            LimitName: {},
                            LimitValues: {
                              shape: 'S7t'
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
          DescribeOutboundConnections: {
            http: {
              requestUri: '/2021-01-01/opensearch/cc/outboundConnection/search'
            },
            input: {
              type: 'structure',
              members: {
                Filters: {
                  shape: 'S7c'
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
                Connections: {
                  type: 'list',
                  member: {
                    shape: 'S4s'
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribePackages: {
            http: {
              requestUri: '/2021-01-01/packages/describe'
            },
            input: {
              type: 'structure',
              members: {
                Filters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Name: {},
                      Value: {
                        type: 'list',
                        member: {}
                      }
                    }
                  }
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
                PackageDetailsList: {
                  type: 'list',
                  member: {
                    shape: 'S43'
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeReservedInstanceOfferings: {
            http: {
              method: 'GET',
              requestUri: '/2021-01-01/opensearch/reservedInstanceOfferings'
            },
            input: {
              type: 'structure',
              members: {
                ReservedInstanceOfferingId: {
                  location: 'querystring',
                  locationName: 'offeringId'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                ReservedInstanceOfferings: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ReservedInstanceOfferingId: {},
                      InstanceType: {},
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
                      PaymentOption: {},
                      RecurringCharges: {
                        shape: 'S8j'
                      }
                    }
                  }
                }
              }
            }
          },
          DescribeReservedInstances: {
            http: {
              method: 'GET',
              requestUri: '/2021-01-01/opensearch/reservedInstances'
            },
            input: {
              type: 'structure',
              members: {
                ReservedInstanceId: {
                  location: 'querystring',
                  locationName: 'reservationId'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                ReservedInstances: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ReservationName: {},
                      ReservedInstanceId: {},
                      BillingSubscriptionId: {
                        type: 'long'
                      },
                      ReservedInstanceOfferingId: {},
                      InstanceType: {},
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
                      InstanceCount: {
                        type: 'integer'
                      },
                      State: {},
                      PaymentOption: {},
                      RecurringCharges: {
                        shape: 'S8j'
                      }
                    }
                  }
                }
              }
            }
          },
          DescribeVpcEndpoints: {
            http: {
              requestUri: '/2021-01-01/opensearch/vpcEndpoints/describe'
            },
            input: {
              type: 'structure',
              required: ['VpcEndpointIds'],
              members: {
                VpcEndpointIds: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              required: ['VpcEndpoints', 'VpcEndpointErrors'],
              members: {
                VpcEndpoints: {
                  type: 'list',
                  member: {
                    shape: 'S4h'
                  }
                },
                VpcEndpointErrors: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      VpcEndpointId: {},
                      ErrorCode: {},
                      ErrorMessage: {}
                    }
                  }
                }
              }
            }
          },
          DissociatePackage: {
            http: {
              requestUri: '/2021-01-01/packages/dissociate/{PackageID}/{DomainName}'
            },
            input: {
              type: 'structure',
              required: ['PackageID', 'DomainName'],
              members: {
                PackageID: {
                  location: 'uri',
                  locationName: 'PackageID'
                },
                DomainName: {
                  location: 'uri',
                  locationName: 'DomainName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                DomainPackageDetails: {
                  shape: 'Sv'
                }
              }
            }
          },
          GetCompatibleVersions: {
            http: {
              method: 'GET',
              requestUri: '/2021-01-01/opensearch/compatibleVersions'
            },
            input: {
              type: 'structure',
              members: {
                DomainName: {
                  location: 'querystring',
                  locationName: 'domainName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                CompatibleVersions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      SourceVersion: {},
                      TargetVersions: {
                        shape: 'S94'
                      }
                    }
                  }
                }
              }
            }
          },
          GetDataSource: {
            http: {
              method: 'GET',
              requestUri: '/2021-01-01/opensearch/domain/{DomainName}/dataSource/{DataSourceName}'
            },
            input: {
              type: 'structure',
              required: ['DomainName', 'Name'],
              members: {
                DomainName: {
                  location: 'uri',
                  locationName: 'DomainName'
                },
                Name: {
                  location: 'uri',
                  locationName: 'DataSourceName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                DataSourceType: {
                  shape: 'Sg'
                },
                Name: {},
                Description: {},
                Status: {}
              }
            }
          },
          GetDomainMaintenanceStatus: {
            http: {
              method: 'GET',
              requestUri: '/2021-01-01/opensearch/domain/{DomainName}/domainMaintenance'
            },
            input: {
              type: 'structure',
              required: ['DomainName', 'MaintenanceId'],
              members: {
                DomainName: {
                  location: 'uri',
                  locationName: 'DomainName'
                },
                MaintenanceId: {
                  location: 'querystring',
                  locationName: 'maintenanceId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Status: {},
                StatusMessage: {},
                NodeId: {},
                Action: {},
                CreatedAt: {
                  type: 'timestamp'
                },
                UpdatedAt: {
                  type: 'timestamp'
                }
              }
            }
          },
          GetPackageVersionHistory: {
            http: {
              method: 'GET',
              requestUri: '/2021-01-01/packages/{PackageID}/history'
            },
            input: {
              type: 'structure',
              required: ['PackageID'],
              members: {
                PackageID: {
                  location: 'uri',
                  locationName: 'PackageID'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                PackageID: {},
                PackageVersionHistoryList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      PackageVersion: {},
                      CommitMessage: {},
                      CreatedAt: {
                        type: 'timestamp'
                      },
                      PluginProperties: {
                        shape: 'S47'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          GetUpgradeHistory: {
            http: {
              method: 'GET',
              requestUri: '/2021-01-01/opensearch/upgradeDomain/{DomainName}/history'
            },
            input: {
              type: 'structure',
              required: ['DomainName'],
              members: {
                DomainName: {
                  location: 'uri',
                  locationName: 'DomainName'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                UpgradeHistories: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      UpgradeName: {},
                      StartTimestamp: {
                        type: 'timestamp'
                      },
                      UpgradeStatus: {},
                      StepsList: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            UpgradeStep: {},
                            UpgradeStepStatus: {},
                            Issues: {
                              type: 'list',
                              member: {}
                            },
                            ProgressPercent: {
                              type: 'double'
                            }
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
          GetUpgradeStatus: {
            http: {
              method: 'GET',
              requestUri: '/2021-01-01/opensearch/upgradeDomain/{DomainName}/status'
            },
            input: {
              type: 'structure',
              required: ['DomainName'],
              members: {
                DomainName: {
                  location: 'uri',
                  locationName: 'DomainName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                UpgradeStep: {},
                StepStatus: {},
                UpgradeName: {}
              }
            }
          },
          ListDataSources: {
            http: {
              method: 'GET',
              requestUri: '/2021-01-01/opensearch/domain/{DomainName}/dataSource'
            },
            input: {
              type: 'structure',
              required: ['DomainName'],
              members: {
                DomainName: {
                  location: 'uri',
                  locationName: 'DomainName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                DataSources: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      DataSourceType: {
                        shape: 'Sg'
                      },
                      Name: {},
                      Description: {},
                      Status: {}
                    }
                  }
                }
              }
            }
          },
          ListDomainMaintenances: {
            http: {
              method: 'GET',
              requestUri: '/2021-01-01/opensearch/domain/{DomainName}/domainMaintenances'
            },
            input: {
              type: 'structure',
              required: ['DomainName'],
              members: {
                DomainName: {
                  location: 'uri',
                  locationName: 'DomainName'
                },
                Action: {
                  location: 'querystring',
                  locationName: 'action'
                },
                Status: {
                  location: 'querystring',
                  locationName: 'status'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                DomainMaintenances: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      MaintenanceId: {},
                      DomainName: {},
                      Action: {},
                      NodeId: {},
                      Status: {},
                      StatusMessage: {},
                      CreatedAt: {
                        type: 'timestamp'
                      },
                      UpdatedAt: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListDomainNames: {
            http: {
              method: 'GET',
              requestUri: '/2021-01-01/domain'
            },
            input: {
              type: 'structure',
              members: {
                EngineType: {
                  location: 'querystring',
                  locationName: 'engineType'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                DomainNames: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      DomainName: {},
                      EngineType: {}
                    }
                  }
                }
              }
            }
          },
          ListDomainsForPackage: {
            http: {
              method: 'GET',
              requestUri: '/2021-01-01/packages/{PackageID}/domains'
            },
            input: {
              type: 'structure',
              required: ['PackageID'],
              members: {
                PackageID: {
                  location: 'uri',
                  locationName: 'PackageID'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                DomainPackageDetailsList: {
                  shape: 'Sac'
                },
                NextToken: {}
              }
            }
          },
          ListInstanceTypeDetails: {
            http: {
              method: 'GET',
              requestUri: '/2021-01-01/opensearch/instanceTypeDetails/{EngineVersion}'
            },
            input: {
              type: 'structure',
              required: ['EngineVersion'],
              members: {
                EngineVersion: {
                  location: 'uri',
                  locationName: 'EngineVersion'
                },
                DomainName: {
                  location: 'querystring',
                  locationName: 'domainName'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                RetrieveAZs: {
                  location: 'querystring',
                  locationName: 'retrieveAZs',
                  type: 'boolean'
                },
                InstanceType: {
                  location: 'querystring',
                  locationName: 'instanceType'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                InstanceTypeDetails: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      InstanceType: {},
                      EncryptionEnabled: {
                        type: 'boolean'
                      },
                      CognitoEnabled: {
                        type: 'boolean'
                      },
                      AppLogsEnabled: {
                        type: 'boolean'
                      },
                      AdvancedSecurityEnabled: {
                        type: 'boolean'
                      },
                      WarmEnabled: {
                        type: 'boolean'
                      },
                      InstanceRole: {
                        type: 'list',
                        member: {}
                      },
                      AvailabilityZones: {
                        type: 'list',
                        member: {}
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListPackagesForDomain: {
            http: {
              method: 'GET',
              requestUri: '/2021-01-01/domain/{DomainName}/packages'
            },
            input: {
              type: 'structure',
              required: ['DomainName'],
              members: {
                DomainName: {
                  location: 'uri',
                  locationName: 'DomainName'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                DomainPackageDetailsList: {
                  shape: 'Sac'
                },
                NextToken: {}
              }
            }
          },
          ListScheduledActions: {
            http: {
              method: 'GET',
              requestUri: '/2021-01-01/opensearch/domain/{DomainName}/scheduledActions'
            },
            input: {
              type: 'structure',
              required: ['DomainName'],
              members: {
                DomainName: {
                  location: 'uri',
                  locationName: 'DomainName'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ScheduledActions: {
                  type: 'list',
                  member: {
                    shape: 'Sap'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListTags: {
            http: {
              method: 'GET',
              requestUri: '/2021-01-01/tags/'
            },
            input: {
              type: 'structure',
              required: ['ARN'],
              members: {
                ARN: {
                  location: 'querystring',
                  locationName: 'arn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                TagList: {
                  shape: 'So'
                }
              }
            }
          },
          ListVersions: {
            http: {
              method: 'GET',
              requestUri: '/2021-01-01/opensearch/versions'
            },
            input: {
              type: 'structure',
              members: {
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Versions: {
                  shape: 'S94'
                },
                NextToken: {}
              }
            }
          },
          ListVpcEndpointAccess: {
            http: {
              method: 'GET',
              requestUri: '/2021-01-01/opensearch/domain/{DomainName}/listVpcEndpointAccess'
            },
            input: {
              type: 'structure',
              required: ['DomainName'],
              members: {
                DomainName: {
                  location: 'uri',
                  locationName: 'DomainName'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['AuthorizedPrincipalList', 'NextToken'],
              members: {
                AuthorizedPrincipalList: {
                  type: 'list',
                  member: {
                    shape: 'S18'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListVpcEndpoints: {
            http: {
              method: 'GET',
              requestUri: '/2021-01-01/opensearch/vpcEndpoints'
            },
            input: {
              type: 'structure',
              members: {
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['VpcEndpointSummaryList', 'NextToken'],
              members: {
                VpcEndpointSummaryList: {
                  shape: 'Sb3'
                },
                NextToken: {}
              }
            }
          },
          ListVpcEndpointsForDomain: {
            http: {
              method: 'GET',
              requestUri: '/2021-01-01/opensearch/domain/{DomainName}/vpcEndpoints'
            },
            input: {
              type: 'structure',
              required: ['DomainName'],
              members: {
                DomainName: {
                  location: 'uri',
                  locationName: 'DomainName'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['VpcEndpointSummaryList', 'NextToken'],
              members: {
                VpcEndpointSummaryList: {
                  shape: 'Sb3'
                },
                NextToken: {}
              }
            }
          },
          PurchaseReservedInstanceOffering: {
            http: {
              requestUri: '/2021-01-01/opensearch/purchaseReservedInstanceOffering'
            },
            input: {
              type: 'structure',
              required: ['ReservedInstanceOfferingId', 'ReservationName'],
              members: {
                ReservedInstanceOfferingId: {},
                ReservationName: {},
                InstanceCount: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ReservedInstanceId: {},
                ReservationName: {}
              }
            }
          },
          RejectInboundConnection: {
            http: {
              method: 'PUT',
              requestUri: '/2021-01-01/opensearch/cc/inboundConnection/{ConnectionId}/reject'
            },
            input: {
              type: 'structure',
              required: ['ConnectionId'],
              members: {
                ConnectionId: {
                  location: 'uri',
                  locationName: 'ConnectionId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Connection: {
                  shape: 'S4'
                }
              }
            }
          },
          RemoveTags: {
            http: {
              requestUri: '/2021-01-01/tags-removal'
            },
            input: {
              type: 'structure',
              required: ['ARN', 'TagKeys'],
              members: {
                ARN: {},
                TagKeys: {
                  shape: 'S21'
                }
              }
            }
          },
          RevokeVpcEndpointAccess: {
            http: {
              requestUri: '/2021-01-01/opensearch/domain/{DomainName}/revokeVpcEndpointAccess'
            },
            input: {
              type: 'structure',
              required: ['DomainName', 'Account'],
              members: {
                DomainName: {
                  location: 'uri',
                  locationName: 'DomainName'
                },
                Account: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          StartDomainMaintenance: {
            http: {
              requestUri: '/2021-01-01/opensearch/domain/{DomainName}/domainMaintenance'
            },
            input: {
              type: 'structure',
              required: ['DomainName', 'Action'],
              members: {
                DomainName: {
                  location: 'uri',
                  locationName: 'DomainName'
                },
                Action: {},
                NodeId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                MaintenanceId: {}
              }
            }
          },
          StartServiceSoftwareUpdate: {
            http: {
              requestUri: '/2021-01-01/opensearch/serviceSoftwareUpdate/start'
            },
            input: {
              type: 'structure',
              required: ['DomainName'],
              members: {
                DomainName: {},
                ScheduleAt: {},
                DesiredStartTime: {
                  type: 'long'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ServiceSoftwareOptions: {
                  shape: 'S1j'
                }
              }
            }
          },
          UpdateDataSource: {
            http: {
              method: 'PUT',
              requestUri: '/2021-01-01/opensearch/domain/{DomainName}/dataSource/{DataSourceName}'
            },
            input: {
              type: 'structure',
              required: ['DomainName', 'Name', 'DataSourceType'],
              members: {
                DomainName: {
                  location: 'uri',
                  locationName: 'DomainName'
                },
                Name: {
                  location: 'uri',
                  locationName: 'DataSourceName'
                },
                DataSourceType: {
                  shape: 'Sg'
                },
                Description: {},
                Status: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Message: {}
              }
            }
          },
          UpdateDomainConfig: {
            http: {
              requestUri: '/2021-01-01/opensearch/domain/{DomainName}/config'
            },
            input: {
              type: 'structure',
              required: ['DomainName'],
              members: {
                DomainName: {
                  location: 'uri',
                  locationName: 'DomainName'
                },
                ClusterConfig: {
                  shape: 'S1p'
                },
                EBSOptions: {
                  shape: 'S1v'
                },
                SnapshotOptions: {
                  shape: 'S1z'
                },
                VPCOptions: {
                  shape: 'S20'
                },
                CognitoOptions: {
                  shape: 'S22'
                },
                AdvancedOptions: {
                  shape: 'S28'
                },
                AccessPolicies: {},
                IPAddressType: {},
                LogPublishingOptions: {
                  shape: 'S29'
                },
                EncryptionAtRestOptions: {
                  shape: 'S25'
                },
                DomainEndpointOptions: {
                  shape: 'S2d'
                },
                NodeToNodeEncryptionOptions: {
                  shape: 'S27'
                },
                AdvancedSecurityOptions: {
                  shape: 'S2g'
                },
                AutoTuneOptions: {
                  shape: 'S68'
                },
                DryRun: {
                  type: 'boolean'
                },
                DryRunMode: {},
                OffPeakWindowOptions: {
                  shape: 'S2x'
                },
                SoftwareUpdateOptions: {
                  shape: 'S32'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['DomainConfig'],
              members: {
                DomainConfig: {
                  shape: 'S5p'
                },
                DryRunResults: {
                  shape: 'S79'
                },
                DryRunProgressStatus: {
                  shape: 'S76'
                }
              }
            }
          },
          UpdatePackage: {
            http: {
              requestUri: '/2021-01-01/packages/update'
            },
            input: {
              type: 'structure',
              required: ['PackageID', 'PackageSource'],
              members: {
                PackageID: {},
                PackageSource: {
                  shape: 'S3z'
                },
                PackageDescription: {},
                CommitMessage: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                PackageDetails: {
                  shape: 'S43'
                }
              }
            }
          },
          UpdateScheduledAction: {
            http: {
              method: 'PUT',
              requestUri: '/2021-01-01/opensearch/domain/{DomainName}/scheduledAction/update'
            },
            input: {
              type: 'structure',
              required: ['DomainName', 'ActionID', 'ActionType', 'ScheduleAt'],
              members: {
                DomainName: {
                  location: 'uri',
                  locationName: 'DomainName'
                },
                ActionID: {},
                ActionType: {},
                ScheduleAt: {},
                DesiredStartTime: {
                  type: 'long'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ScheduledAction: {
                  shape: 'Sap'
                }
              }
            }
          },
          UpdateVpcEndpoint: {
            http: {
              requestUri: '/2021-01-01/opensearch/vpcEndpoints/update'
            },
            input: {
              type: 'structure',
              required: ['VpcEndpointId', 'VpcOptions'],
              members: {
                VpcEndpointId: {},
                VpcOptions: {
                  shape: 'S20'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['VpcEndpoint'],
              members: {
                VpcEndpoint: {
                  shape: 'S4h'
                }
              }
            }
          },
          UpgradeDomain: {
            http: {
              requestUri: '/2021-01-01/opensearch/upgradeDomain'
            },
            input: {
              type: 'structure',
              required: ['DomainName', 'TargetVersion'],
              members: {
                DomainName: {},
                TargetVersion: {},
                PerformCheckOnly: {
                  type: 'boolean'
                },
                AdvancedOptions: {
                  shape: 'S28'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                UpgradeId: {},
                DomainName: {},
                TargetVersion: {},
                PerformCheckOnly: {
                  type: 'boolean'
                },
                AdvancedOptions: {
                  shape: 'S28'
                },
                ChangeProgressDetails: {
                  shape: 'S3f'
                }
              }
            }
          }
        },
        shapes: {
          S4: {
            type: 'structure',
            members: {
              LocalDomainInfo: {
                shape: 'S5'
              },
              RemoteDomainInfo: {
                shape: 'S5'
              },
              ConnectionId: {},
              ConnectionStatus: {
                type: 'structure',
                members: {
                  StatusCode: {},
                  Message: {}
                }
              },
              ConnectionMode: {}
            }
          },
          S5: {
            type: 'structure',
            members: {
              AWSDomainInformation: {
                type: 'structure',
                required: ['DomainName'],
                members: {
                  OwnerId: {},
                  DomainName: {},
                  Region: {}
                }
              }
            }
          },
          Sg: {
            type: 'structure',
            members: {
              S3GlueDataCatalog: {
                type: 'structure',
                members: {
                  RoleArn: {}
                }
              }
            },
            union: true
          },
          So: {
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
          Sv: {
            type: 'structure',
            members: {
              PackageID: {},
              PackageName: {},
              PackageType: {},
              LastUpdated: {
                type: 'timestamp'
              },
              DomainName: {},
              DomainPackageStatus: {},
              PackageVersion: {},
              ReferencePath: {},
              ErrorDetails: {
                shape: 'S12'
              }
            }
          },
          S12: {
            type: 'structure',
            members: {
              ErrorType: {},
              ErrorMessage: {}
            }
          },
          S18: {
            type: 'structure',
            members: {
              PrincipalType: {},
              Principal: {}
            }
          },
          S1j: {
            type: 'structure',
            members: {
              CurrentVersion: {},
              NewVersion: {},
              UpdateAvailable: {
                type: 'boolean'
              },
              Cancellable: {
                type: 'boolean'
              },
              UpdateStatus: {},
              Description: {},
              AutomatedUpdateDate: {
                type: 'timestamp'
              },
              OptionalDeployment: {
                type: 'boolean'
              }
            }
          },
          S1p: {
            type: 'structure',
            members: {
              InstanceType: {},
              InstanceCount: {
                type: 'integer'
              },
              DedicatedMasterEnabled: {
                type: 'boolean'
              },
              ZoneAwarenessEnabled: {
                type: 'boolean'
              },
              ZoneAwarenessConfig: {
                type: 'structure',
                members: {
                  AvailabilityZoneCount: {
                    type: 'integer'
                  }
                }
              },
              DedicatedMasterType: {},
              DedicatedMasterCount: {
                type: 'integer'
              },
              WarmEnabled: {
                type: 'boolean'
              },
              WarmType: {},
              WarmCount: {
                type: 'integer'
              },
              ColdStorageOptions: {
                type: 'structure',
                required: ['Enabled'],
                members: {
                  Enabled: {
                    type: 'boolean'
                  }
                }
              },
              MultiAZWithStandbyEnabled: {
                type: 'boolean'
              }
            }
          },
          S1v: {
            type: 'structure',
            members: {
              EBSEnabled: {
                type: 'boolean'
              },
              VolumeType: {},
              VolumeSize: {
                type: 'integer'
              },
              Iops: {
                type: 'integer'
              },
              Throughput: {
                type: 'integer'
              }
            }
          },
          S1z: {
            type: 'structure',
            members: {
              AutomatedSnapshotStartHour: {
                type: 'integer'
              }
            }
          },
          S20: {
            type: 'structure',
            members: {
              SubnetIds: {
                shape: 'S21'
              },
              SecurityGroupIds: {
                shape: 'S21'
              }
            }
          },
          S21: {
            type: 'list',
            member: {}
          },
          S22: {
            type: 'structure',
            members: {
              Enabled: {
                type: 'boolean'
              },
              UserPoolId: {},
              IdentityPoolId: {},
              RoleArn: {}
            }
          },
          S25: {
            type: 'structure',
            members: {
              Enabled: {
                type: 'boolean'
              },
              KmsKeyId: {}
            }
          },
          S27: {
            type: 'structure',
            members: {
              Enabled: {
                type: 'boolean'
              }
            }
          },
          S28: {
            type: 'map',
            key: {},
            value: {}
          },
          S29: {
            type: 'map',
            key: {},
            value: {
              type: 'structure',
              members: {
                CloudWatchLogsLogGroupArn: {},
                Enabled: {
                  type: 'boolean'
                }
              }
            }
          },
          S2d: {
            type: 'structure',
            members: {
              EnforceHTTPS: {
                type: 'boolean'
              },
              TLSSecurityPolicy: {},
              CustomEndpointEnabled: {
                type: 'boolean'
              },
              CustomEndpoint: {},
              CustomEndpointCertificateArn: {}
            }
          },
          S2g: {
            type: 'structure',
            members: {
              Enabled: {
                type: 'boolean'
              },
              InternalUserDatabaseEnabled: {
                type: 'boolean'
              },
              MasterUserOptions: {
                type: 'structure',
                members: {
                  MasterUserARN: {},
                  MasterUserName: {
                    shape: 'S2i'
                  },
                  MasterUserPassword: {
                    type: 'string',
                    sensitive: true
                  }
                }
              },
              SAMLOptions: {
                type: 'structure',
                members: {
                  Enabled: {
                    type: 'boolean'
                  },
                  Idp: {
                    shape: 'S2l'
                  },
                  MasterUserName: {
                    shape: 'S2i'
                  },
                  MasterBackendRole: {},
                  SubjectKey: {},
                  RolesKey: {},
                  SessionTimeoutMinutes: {
                    type: 'integer'
                  }
                }
              },
              AnonymousAuthEnabled: {
                type: 'boolean'
              }
            }
          },
          S2i: {
            type: 'string',
            sensitive: true
          },
          S2l: {
            type: 'structure',
            required: ['MetadataContent', 'EntityId'],
            members: {
              MetadataContent: {},
              EntityId: {}
            }
          },
          S2r: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                StartAt: {
                  type: 'timestamp'
                },
                Duration: {
                  type: 'structure',
                  members: {
                    Value: {
                      type: 'long'
                    },
                    Unit: {}
                  }
                },
                CronExpressionForRecurrence: {}
              }
            }
          },
          S2x: {
            type: 'structure',
            members: {
              Enabled: {
                type: 'boolean'
              },
              OffPeakWindow: {
                type: 'structure',
                members: {
                  WindowStartTime: {
                    type: 'structure',
                    required: ['Hours', 'Minutes'],
                    members: {
                      Hours: {
                        type: 'long'
                      },
                      Minutes: {
                        type: 'long'
                      }
                    }
                  }
                }
              }
            }
          },
          S32: {
            type: 'structure',
            members: {
              AutoSoftwareUpdateEnabled: {
                type: 'boolean'
              }
            }
          },
          S34: {
            type: 'structure',
            required: ['DomainId', 'DomainName', 'ARN', 'ClusterConfig'],
            members: {
              DomainId: {},
              DomainName: {},
              ARN: {},
              Created: {
                type: 'boolean'
              },
              Deleted: {
                type: 'boolean'
              },
              Endpoint: {},
              EndpointV2: {},
              Endpoints: {
                type: 'map',
                key: {},
                value: {}
              },
              DomainEndpointV2HostedZoneId: {},
              Processing: {
                type: 'boolean'
              },
              UpgradeProcessing: {
                type: 'boolean'
              },
              EngineVersion: {},
              ClusterConfig: {
                shape: 'S1p'
              },
              EBSOptions: {
                shape: 'S1v'
              },
              AccessPolicies: {},
              IPAddressType: {},
              SnapshotOptions: {
                shape: 'S1z'
              },
              VPCOptions: {
                shape: 'S39'
              },
              CognitoOptions: {
                shape: 'S22'
              },
              EncryptionAtRestOptions: {
                shape: 'S25'
              },
              NodeToNodeEncryptionOptions: {
                shape: 'S27'
              },
              AdvancedOptions: {
                shape: 'S28'
              },
              LogPublishingOptions: {
                shape: 'S29'
              },
              ServiceSoftwareOptions: {
                shape: 'S1j'
              },
              DomainEndpointOptions: {
                shape: 'S2d'
              },
              AdvancedSecurityOptions: {
                shape: 'S3a'
              },
              AutoTuneOptions: {
                type: 'structure',
                members: {
                  State: {},
                  ErrorMessage: {},
                  UseOffPeakWindow: {
                    type: 'boolean'
                  }
                }
              },
              ChangeProgressDetails: {
                shape: 'S3f'
              },
              OffPeakWindowOptions: {
                shape: 'S2x'
              },
              SoftwareUpdateOptions: {
                shape: 'S32'
              },
              DomainProcessingStatus: {},
              ModifyingProperties: {
                shape: 'S3l'
              }
            }
          },
          S39: {
            type: 'structure',
            members: {
              VPCId: {},
              SubnetIds: {
                shape: 'S21'
              },
              AvailabilityZones: {
                shape: 'S21'
              },
              SecurityGroupIds: {
                shape: 'S21'
              }
            }
          },
          S3a: {
            type: 'structure',
            members: {
              Enabled: {
                type: 'boolean'
              },
              InternalUserDatabaseEnabled: {
                type: 'boolean'
              },
              SAMLOptions: {
                type: 'structure',
                members: {
                  Enabled: {
                    type: 'boolean'
                  },
                  Idp: {
                    shape: 'S2l'
                  },
                  SubjectKey: {},
                  RolesKey: {},
                  SessionTimeoutMinutes: {
                    type: 'integer'
                  }
                }
              },
              AnonymousAuthDisableDate: {
                type: 'timestamp'
              },
              AnonymousAuthEnabled: {
                type: 'boolean'
              }
            }
          },
          S3f: {
            type: 'structure',
            members: {
              ChangeId: {},
              Message: {},
              ConfigChangeStatus: {},
              InitiatedBy: {},
              StartTime: {
                type: 'timestamp'
              },
              LastUpdatedTime: {
                type: 'timestamp'
              }
            }
          },
          S3l: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Name: {},
                ActiveValue: {},
                PendingValue: {},
                ValueType: {}
              }
            }
          },
          S3q: {
            type: 'structure',
            members: {
              Endpoint: {},
              CrossClusterSearch: {
                type: 'structure',
                members: {
                  SkipUnavailable: {}
                }
              }
            }
          },
          S3v: {
            type: 'structure',
            members: {
              StatusCode: {},
              Message: {}
            }
          },
          S3z: {
            type: 'structure',
            members: {
              S3BucketName: {},
              S3Key: {}
            }
          },
          S43: {
            type: 'structure',
            members: {
              PackageID: {},
              PackageName: {},
              PackageType: {},
              PackageDescription: {},
              PackageStatus: {},
              CreatedAt: {
                type: 'timestamp'
              },
              LastUpdatedAt: {
                type: 'timestamp'
              },
              AvailablePackageVersion: {},
              ErrorDetails: {
                shape: 'S12'
              },
              EngineVersion: {},
              AvailablePluginProperties: {
                shape: 'S47'
              }
            }
          },
          S47: {
            type: 'structure',
            members: {
              Name: {},
              Description: {},
              Version: {},
              ClassName: {},
              UncompressedSizeInBytes: {
                type: 'long'
              }
            }
          },
          S4h: {
            type: 'structure',
            members: {
              VpcEndpointId: {},
              VpcEndpointOwner: {},
              DomainArn: {},
              VpcOptions: {
                shape: 'S39'
              },
              Status: {},
              Endpoint: {}
            }
          },
          S4s: {
            type: 'structure',
            members: {
              LocalDomainInfo: {
                shape: 'S5'
              },
              RemoteDomainInfo: {
                shape: 'S5'
              },
              ConnectionId: {},
              ConnectionAlias: {},
              ConnectionStatus: {
                shape: 'S3v'
              },
              ConnectionMode: {},
              ConnectionProperties: {
                shape: 'S3q'
              }
            }
          },
          S4x: {
            type: 'structure',
            members: {
              VpcEndpointId: {},
              VpcEndpointOwner: {},
              DomainArn: {},
              Status: {}
            }
          },
          S5p: {
            type: 'structure',
            members: {
              EngineVersion: {
                type: 'structure',
                required: ['Options', 'Status'],
                members: {
                  Options: {},
                  Status: {
                    shape: 'S5r'
                  }
                }
              },
              ClusterConfig: {
                type: 'structure',
                required: ['Options', 'Status'],
                members: {
                  Options: {
                    shape: 'S1p'
                  },
                  Status: {
                    shape: 'S5r'
                  }
                }
              },
              EBSOptions: {
                type: 'structure',
                required: ['Options', 'Status'],
                members: {
                  Options: {
                    shape: 'S1v'
                  },
                  Status: {
                    shape: 'S5r'
                  }
                }
              },
              AccessPolicies: {
                type: 'structure',
                required: ['Options', 'Status'],
                members: {
                  Options: {},
                  Status: {
                    shape: 'S5r'
                  }
                }
              },
              IPAddressType: {
                type: 'structure',
                required: ['Options', 'Status'],
                members: {
                  Options: {},
                  Status: {
                    shape: 'S5r'
                  }
                }
              },
              SnapshotOptions: {
                type: 'structure',
                required: ['Options', 'Status'],
                members: {
                  Options: {
                    shape: 'S1z'
                  },
                  Status: {
                    shape: 'S5r'
                  }
                }
              },
              VPCOptions: {
                type: 'structure',
                required: ['Options', 'Status'],
                members: {
                  Options: {
                    shape: 'S39'
                  },
                  Status: {
                    shape: 'S5r'
                  }
                }
              },
              CognitoOptions: {
                type: 'structure',
                required: ['Options', 'Status'],
                members: {
                  Options: {
                    shape: 'S22'
                  },
                  Status: {
                    shape: 'S5r'
                  }
                }
              },
              EncryptionAtRestOptions: {
                type: 'structure',
                required: ['Options', 'Status'],
                members: {
                  Options: {
                    shape: 'S25'
                  },
                  Status: {
                    shape: 'S5r'
                  }
                }
              },
              NodeToNodeEncryptionOptions: {
                type: 'structure',
                required: ['Options', 'Status'],
                members: {
                  Options: {
                    shape: 'S27'
                  },
                  Status: {
                    shape: 'S5r'
                  }
                }
              },
              AdvancedOptions: {
                type: 'structure',
                required: ['Options', 'Status'],
                members: {
                  Options: {
                    shape: 'S28'
                  },
                  Status: {
                    shape: 'S5r'
                  }
                }
              },
              LogPublishingOptions: {
                type: 'structure',
                members: {
                  Options: {
                    shape: 'S29'
                  },
                  Status: {
                    shape: 'S5r'
                  }
                }
              },
              DomainEndpointOptions: {
                type: 'structure',
                required: ['Options', 'Status'],
                members: {
                  Options: {
                    shape: 'S2d'
                  },
                  Status: {
                    shape: 'S5r'
                  }
                }
              },
              AdvancedSecurityOptions: {
                type: 'structure',
                required: ['Options', 'Status'],
                members: {
                  Options: {
                    shape: 'S3a'
                  },
                  Status: {
                    shape: 'S5r'
                  }
                }
              },
              AutoTuneOptions: {
                type: 'structure',
                members: {
                  Options: {
                    shape: 'S68'
                  },
                  Status: {
                    type: 'structure',
                    required: ['CreationDate', 'UpdateDate', 'State'],
                    members: {
                      CreationDate: {
                        type: 'timestamp'
                      },
                      UpdateDate: {
                        type: 'timestamp'
                      },
                      UpdateVersion: {
                        type: 'integer'
                      },
                      State: {},
                      ErrorMessage: {},
                      PendingDeletion: {
                        type: 'boolean'
                      }
                    }
                  }
                }
              },
              ChangeProgressDetails: {
                shape: 'S3f'
              },
              OffPeakWindowOptions: {
                type: 'structure',
                members: {
                  Options: {
                    shape: 'S2x'
                  },
                  Status: {
                    shape: 'S5r'
                  }
                }
              },
              SoftwareUpdateOptions: {
                type: 'structure',
                members: {
                  Options: {
                    shape: 'S32'
                  },
                  Status: {
                    shape: 'S5r'
                  }
                }
              },
              ModifyingProperties: {
                shape: 'S3l'
              }
            }
          },
          S5r: {
            type: 'structure',
            required: ['CreationDate', 'UpdateDate', 'State'],
            members: {
              CreationDate: {
                type: 'timestamp'
              },
              UpdateDate: {
                type: 'timestamp'
              },
              UpdateVersion: {
                type: 'integer'
              },
              State: {},
              PendingDeletion: {
                type: 'boolean'
              }
            }
          },
          S68: {
            type: 'structure',
            members: {
              DesiredState: {},
              RollbackOnDisable: {},
              MaintenanceSchedules: {
                shape: 'S2r'
              },
              UseOffPeakWindow: {
                type: 'boolean'
              }
            }
          },
          S76: {
            type: 'structure',
            required: ['DryRunId', 'DryRunStatus', 'CreationDate', 'UpdateDate'],
            members: {
              DryRunId: {},
              DryRunStatus: {},
              CreationDate: {},
              UpdateDate: {},
              ValidationFailures: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    Code: {},
                    Message: {}
                  }
                }
              }
            }
          },
          S79: {
            type: 'structure',
            members: {
              DeploymentType: {},
              Message: {}
            }
          },
          S7c: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Name: {},
                Values: {
                  type: 'list',
                  member: {}
                }
              }
            }
          },
          S7t: {
            type: 'list',
            member: {}
          },
          S8j: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                RecurringChargeAmount: {
                  type: 'double'
                },
                RecurringChargeFrequency: {}
              }
            }
          },
          S94: {
            type: 'list',
            member: {}
          },
          Sac: {
            type: 'list',
            member: {
              shape: 'Sv'
            }
          },
          Sap: {
            type: 'structure',
            required: ['Id', 'Type', 'Severity', 'ScheduledTime'],
            members: {
              Id: {},
              Type: {},
              Severity: {},
              ScheduledTime: {
                type: 'long'
              },
              Description: {},
              ScheduledBy: {},
              Status: {},
              Mandatory: {
                type: 'boolean'
              },
              Cancellable: {
                type: 'boolean'
              }
            }
          },
          Sb3: {
            type: 'list',
            member: {
              shape: 'S4x'
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=d93d58c25ab82df43c9d372e7726cb78e1f80a37.js.map