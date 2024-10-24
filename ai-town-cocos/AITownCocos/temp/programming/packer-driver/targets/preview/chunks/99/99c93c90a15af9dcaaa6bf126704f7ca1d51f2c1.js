System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2015-01-01',
          endpointPrefix: 'es',
          protocol: 'rest-json',
          serviceFullName: 'Amazon Elasticsearch Service',
          serviceId: 'Elasticsearch Service',
          signatureVersion: 'v4',
          uid: 'es-2015-01-01'
        },
        operations: {
          AcceptInboundCrossClusterSearchConnection: {
            http: {
              method: 'PUT',
              requestUri: '/2015-01-01/es/ccs/inboundConnection/{ConnectionId}/accept'
            },
            input: {
              type: 'structure',
              required: ['CrossClusterSearchConnectionId'],
              members: {
                CrossClusterSearchConnectionId: {
                  location: 'uri',
                  locationName: 'ConnectionId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                CrossClusterSearchConnection: {
                  shape: 'S4'
                }
              }
            }
          },
          AddTags: {
            http: {
              requestUri: '/2015-01-01/tags'
            },
            input: {
              type: 'structure',
              required: ['ARN', 'TagList'],
              members: {
                ARN: {},
                TagList: {
                  shape: 'Se'
                }
              }
            }
          },
          AssociatePackage: {
            http: {
              requestUri: '/2015-01-01/packages/associate/{PackageID}/{DomainName}'
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
                  shape: 'Sl'
                }
              }
            }
          },
          AuthorizeVpcEndpointAccess: {
            http: {
              requestUri: '/2015-01-01/es/domain/{DomainName}/authorizeVpcEndpointAccess'
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
                  shape: 'Sy'
                }
              }
            }
          },
          CancelDomainConfigChange: {
            http: {
              requestUri: '/2015-01-01/es/domain/{DomainName}/config/cancel'
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
                DryRun: {
                  type: 'boolean'
                },
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
                }
              }
            }
          },
          CancelElasticsearchServiceSoftwareUpdate: {
            http: {
              requestUri: '/2015-01-01/es/serviceSoftwareUpdate/cancel'
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
                  shape: 'S1a'
                }
              }
            }
          },
          CreateElasticsearchDomain: {
            http: {
              requestUri: '/2015-01-01/es/domain'
            },
            input: {
              type: 'structure',
              required: ['DomainName'],
              members: {
                DomainName: {},
                ElasticsearchVersion: {},
                ElasticsearchClusterConfig: {
                  shape: 'S1g'
                },
                EBSOptions: {
                  shape: 'S1m'
                },
                AccessPolicies: {},
                SnapshotOptions: {
                  shape: 'S1p'
                },
                VPCOptions: {
                  shape: 'S1q'
                },
                CognitoOptions: {
                  shape: 'S1s'
                },
                EncryptionAtRestOptions: {
                  shape: 'S1w'
                },
                NodeToNodeEncryptionOptions: {
                  shape: 'S1y'
                },
                AdvancedOptions: {
                  shape: 'S1z'
                },
                LogPublishingOptions: {
                  shape: 'S20'
                },
                DomainEndpointOptions: {
                  shape: 'S24'
                },
                AdvancedSecurityOptions: {
                  shape: 'S27'
                },
                AutoTuneOptions: {
                  type: 'structure',
                  members: {
                    DesiredState: {},
                    MaintenanceSchedules: {
                      shape: 'S2i'
                    }
                  }
                },
                TagList: {
                  shape: 'Se'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                DomainStatus: {
                  shape: 'S2p'
                }
              }
            }
          },
          CreateOutboundCrossClusterSearchConnection: {
            http: {
              requestUri: '/2015-01-01/es/ccs/outboundConnection'
            },
            input: {
              type: 'structure',
              required: ['SourceDomainInfo', 'DestinationDomainInfo', 'ConnectionAlias'],
              members: {
                SourceDomainInfo: {
                  shape: 'S5'
                },
                DestinationDomainInfo: {
                  shape: 'S5'
                },
                ConnectionAlias: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                SourceDomainInfo: {
                  shape: 'S5'
                },
                DestinationDomainInfo: {
                  shape: 'S5'
                },
                ConnectionAlias: {},
                ConnectionStatus: {
                  shape: 'S3b'
                },
                CrossClusterSearchConnectionId: {}
              }
            }
          },
          CreatePackage: {
            http: {
              requestUri: '/2015-01-01/packages'
            },
            input: {
              type: 'structure',
              required: ['PackageName', 'PackageType', 'PackageSource'],
              members: {
                PackageName: {},
                PackageType: {},
                PackageDescription: {},
                PackageSource: {
                  shape: 'S3f'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                PackageDetails: {
                  shape: 'S3j'
                }
              }
            }
          },
          CreateVpcEndpoint: {
            http: {
              requestUri: '/2015-01-01/es/vpcEndpoints'
            },
            input: {
              type: 'structure',
              required: ['DomainArn', 'VpcOptions'],
              members: {
                DomainArn: {},
                VpcOptions: {
                  shape: 'S1q'
                },
                ClientToken: {}
              }
            },
            output: {
              type: 'structure',
              required: ['VpcEndpoint'],
              members: {
                VpcEndpoint: {
                  shape: 'S3q'
                }
              }
            }
          },
          DeleteElasticsearchDomain: {
            http: {
              method: 'DELETE',
              requestUri: '/2015-01-01/es/domain/{DomainName}'
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
                  shape: 'S2p'
                }
              }
            }
          },
          DeleteElasticsearchServiceRole: {
            http: {
              method: 'DELETE',
              requestUri: '/2015-01-01/es/role'
            }
          },
          DeleteInboundCrossClusterSearchConnection: {
            http: {
              method: 'DELETE',
              requestUri: '/2015-01-01/es/ccs/inboundConnection/{ConnectionId}'
            },
            input: {
              type: 'structure',
              required: ['CrossClusterSearchConnectionId'],
              members: {
                CrossClusterSearchConnectionId: {
                  location: 'uri',
                  locationName: 'ConnectionId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                CrossClusterSearchConnection: {
                  shape: 'S4'
                }
              }
            }
          },
          DeleteOutboundCrossClusterSearchConnection: {
            http: {
              method: 'DELETE',
              requestUri: '/2015-01-01/es/ccs/outboundConnection/{ConnectionId}'
            },
            input: {
              type: 'structure',
              required: ['CrossClusterSearchConnectionId'],
              members: {
                CrossClusterSearchConnectionId: {
                  location: 'uri',
                  locationName: 'ConnectionId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                CrossClusterSearchConnection: {
                  shape: 'S40'
                }
              }
            }
          },
          DeletePackage: {
            http: {
              method: 'DELETE',
              requestUri: '/2015-01-01/packages/{PackageID}'
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
                  shape: 'S3j'
                }
              }
            }
          },
          DeleteVpcEndpoint: {
            http: {
              method: 'DELETE',
              requestUri: '/2015-01-01/es/vpcEndpoints/{VpcEndpointId}'
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
                  shape: 'S45'
                }
              }
            }
          },
          DescribeDomainAutoTunes: {
            http: {
              method: 'GET',
              requestUri: '/2015-01-01/es/domain/{DomainName}/autoTunes'
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
              requestUri: '/2015-01-01/es/domain/{DomainName}/progress'
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
                      shape: 'S1r'
                    },
                    CompletedProperties: {
                      shape: 'S1r'
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
                    ConfigChangeStatus: {},
                    LastUpdatedTime: {
                      type: 'timestamp'
                    },
                    InitiatedBy: {}
                  }
                }
              }
            }
          },
          DescribeElasticsearchDomain: {
            http: {
              method: 'GET',
              requestUri: '/2015-01-01/es/domain/{DomainName}'
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
                  shape: 'S2p'
                }
              }
            }
          },
          DescribeElasticsearchDomainConfig: {
            http: {
              method: 'GET',
              requestUri: '/2015-01-01/es/domain/{DomainName}/config'
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
                  shape: 'S4x'
                }
              }
            }
          },
          DescribeElasticsearchDomains: {
            http: {
              requestUri: '/2015-01-01/es/domain-info'
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
                    shape: 'S2p'
                  }
                }
              }
            }
          },
          DescribeElasticsearchInstanceTypeLimits: {
            http: {
              method: 'GET',
              requestUri: '/2015-01-01/es/instanceTypeLimits/{ElasticsearchVersion}/{InstanceType}'
            },
            input: {
              type: 'structure',
              required: ['InstanceType', 'ElasticsearchVersion'],
              members: {
                DomainName: {
                  location: 'querystring',
                  locationName: 'domainName'
                },
                InstanceType: {
                  location: 'uri',
                  locationName: 'InstanceType'
                },
                ElasticsearchVersion: {
                  location: 'uri',
                  locationName: 'ElasticsearchVersion'
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
                                    shape: 'S5y'
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
                              shape: 'S5y'
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
          DescribeInboundCrossClusterSearchConnections: {
            http: {
              requestUri: '/2015-01-01/es/ccs/inboundConnection/search'
            },
            input: {
              type: 'structure',
              members: {
                Filters: {
                  shape: 'S67'
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
                CrossClusterSearchConnections: {
                  type: 'list',
                  member: {
                    shape: 'S4'
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeOutboundCrossClusterSearchConnections: {
            http: {
              requestUri: '/2015-01-01/es/ccs/outboundConnection/search'
            },
            input: {
              type: 'structure',
              members: {
                Filters: {
                  shape: 'S67'
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
                CrossClusterSearchConnections: {
                  type: 'list',
                  member: {
                    shape: 'S40'
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribePackages: {
            http: {
              requestUri: '/2015-01-01/packages/describe'
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
                    shape: 'S3j'
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeReservedElasticsearchInstanceOfferings: {
            http: {
              method: 'GET',
              requestUri: '/2015-01-01/es/reservedInstanceOfferings'
            },
            input: {
              type: 'structure',
              members: {
                ReservedElasticsearchInstanceOfferingId: {
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
                ReservedElasticsearchInstanceOfferings: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ReservedElasticsearchInstanceOfferingId: {},
                      ElasticsearchInstanceType: {},
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
                        shape: 'S6v'
                      }
                    }
                  }
                }
              }
            }
          },
          DescribeReservedElasticsearchInstances: {
            http: {
              method: 'GET',
              requestUri: '/2015-01-01/es/reservedInstances'
            },
            input: {
              type: 'structure',
              members: {
                ReservedElasticsearchInstanceId: {
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
                ReservedElasticsearchInstances: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ReservationName: {},
                      ReservedElasticsearchInstanceId: {},
                      ReservedElasticsearchInstanceOfferingId: {},
                      ElasticsearchInstanceType: {},
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
                      ElasticsearchInstanceCount: {
                        type: 'integer'
                      },
                      State: {},
                      PaymentOption: {},
                      RecurringCharges: {
                        shape: 'S6v'
                      }
                    }
                  }
                }
              }
            }
          },
          DescribeVpcEndpoints: {
            http: {
              requestUri: '/2015-01-01/es/vpcEndpoints/describe'
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
                    shape: 'S3q'
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
              requestUri: '/2015-01-01/packages/dissociate/{PackageID}/{DomainName}'
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
                  shape: 'Sl'
                }
              }
            }
          },
          GetCompatibleElasticsearchVersions: {
            http: {
              method: 'GET',
              requestUri: '/2015-01-01/es/compatibleVersions'
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
                CompatibleElasticsearchVersions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      SourceVersion: {},
                      TargetVersions: {
                        shape: 'S7f'
                      }
                    }
                  }
                }
              }
            }
          },
          GetPackageVersionHistory: {
            http: {
              method: 'GET',
              requestUri: '/2015-01-01/packages/{PackageID}/history'
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
              requestUri: '/2015-01-01/es/upgradeDomain/{DomainName}/history'
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
              requestUri: '/2015-01-01/es/upgradeDomain/{DomainName}/status'
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
          ListDomainNames: {
            http: {
              method: 'GET',
              requestUri: '/2015-01-01/domain'
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
              requestUri: '/2015-01-01/packages/{PackageID}/domains'
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
                  shape: 'S86'
                },
                NextToken: {}
              }
            }
          },
          ListElasticsearchInstanceTypes: {
            http: {
              method: 'GET',
              requestUri: '/2015-01-01/es/instanceTypes/{ElasticsearchVersion}'
            },
            input: {
              type: 'structure',
              required: ['ElasticsearchVersion'],
              members: {
                ElasticsearchVersion: {
                  location: 'uri',
                  locationName: 'ElasticsearchVersion'
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
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ElasticsearchInstanceTypes: {
                  type: 'list',
                  member: {}
                },
                NextToken: {}
              }
            }
          },
          ListElasticsearchVersions: {
            http: {
              method: 'GET',
              requestUri: '/2015-01-01/es/versions'
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
                ElasticsearchVersions: {
                  shape: 'S7f'
                },
                NextToken: {}
              }
            }
          },
          ListPackagesForDomain: {
            http: {
              method: 'GET',
              requestUri: '/2015-01-01/domain/{DomainName}/packages'
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
                  shape: 'S86'
                },
                NextToken: {}
              }
            }
          },
          ListTags: {
            http: {
              method: 'GET',
              requestUri: '/2015-01-01/tags/'
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
                  shape: 'Se'
                }
              }
            }
          },
          ListVpcEndpointAccess: {
            http: {
              method: 'GET',
              requestUri: '/2015-01-01/es/domain/{DomainName}/listVpcEndpointAccess'
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
                    shape: 'Sy'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListVpcEndpoints: {
            http: {
              method: 'GET',
              requestUri: '/2015-01-01/es/vpcEndpoints'
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
                  shape: 'S8l'
                },
                NextToken: {}
              }
            }
          },
          ListVpcEndpointsForDomain: {
            http: {
              method: 'GET',
              requestUri: '/2015-01-01/es/domain/{DomainName}/vpcEndpoints'
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
                  shape: 'S8l'
                },
                NextToken: {}
              }
            }
          },
          PurchaseReservedElasticsearchInstanceOffering: {
            http: {
              requestUri: '/2015-01-01/es/purchaseReservedInstanceOffering'
            },
            input: {
              type: 'structure',
              required: ['ReservedElasticsearchInstanceOfferingId', 'ReservationName'],
              members: {
                ReservedElasticsearchInstanceOfferingId: {},
                ReservationName: {},
                InstanceCount: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ReservedElasticsearchInstanceId: {},
                ReservationName: {}
              }
            }
          },
          RejectInboundCrossClusterSearchConnection: {
            http: {
              method: 'PUT',
              requestUri: '/2015-01-01/es/ccs/inboundConnection/{ConnectionId}/reject'
            },
            input: {
              type: 'structure',
              required: ['CrossClusterSearchConnectionId'],
              members: {
                CrossClusterSearchConnectionId: {
                  location: 'uri',
                  locationName: 'ConnectionId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                CrossClusterSearchConnection: {
                  shape: 'S4'
                }
              }
            }
          },
          RemoveTags: {
            http: {
              requestUri: '/2015-01-01/tags-removal'
            },
            input: {
              type: 'structure',
              required: ['ARN', 'TagKeys'],
              members: {
                ARN: {},
                TagKeys: {
                  shape: 'S1r'
                }
              }
            }
          },
          RevokeVpcEndpointAccess: {
            http: {
              requestUri: '/2015-01-01/es/domain/{DomainName}/revokeVpcEndpointAccess'
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
          StartElasticsearchServiceSoftwareUpdate: {
            http: {
              requestUri: '/2015-01-01/es/serviceSoftwareUpdate/start'
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
                  shape: 'S1a'
                }
              }
            }
          },
          UpdateElasticsearchDomainConfig: {
            http: {
              requestUri: '/2015-01-01/es/domain/{DomainName}/config'
            },
            input: {
              type: 'structure',
              required: ['DomainName'],
              members: {
                DomainName: {
                  location: 'uri',
                  locationName: 'DomainName'
                },
                ElasticsearchClusterConfig: {
                  shape: 'S1g'
                },
                EBSOptions: {
                  shape: 'S1m'
                },
                SnapshotOptions: {
                  shape: 'S1p'
                },
                VPCOptions: {
                  shape: 'S1q'
                },
                CognitoOptions: {
                  shape: 'S1s'
                },
                AdvancedOptions: {
                  shape: 'S1z'
                },
                AccessPolicies: {},
                LogPublishingOptions: {
                  shape: 'S20'
                },
                DomainEndpointOptions: {
                  shape: 'S24'
                },
                AdvancedSecurityOptions: {
                  shape: 'S27'
                },
                NodeToNodeEncryptionOptions: {
                  shape: 'S1y'
                },
                EncryptionAtRestOptions: {
                  shape: 'S1w'
                },
                AutoTuneOptions: {
                  shape: 'S5f'
                },
                DryRun: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['DomainConfig'],
              members: {
                DomainConfig: {
                  shape: 'S4x'
                },
                DryRunResults: {
                  type: 'structure',
                  members: {
                    DeploymentType: {},
                    Message: {}
                  }
                }
              }
            }
          },
          UpdatePackage: {
            http: {
              requestUri: '/2015-01-01/packages/update'
            },
            input: {
              type: 'structure',
              required: ['PackageID', 'PackageSource'],
              members: {
                PackageID: {},
                PackageSource: {
                  shape: 'S3f'
                },
                PackageDescription: {},
                CommitMessage: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                PackageDetails: {
                  shape: 'S3j'
                }
              }
            }
          },
          UpdateVpcEndpoint: {
            http: {
              requestUri: '/2015-01-01/es/vpcEndpoints/update'
            },
            input: {
              type: 'structure',
              required: ['VpcEndpointId', 'VpcOptions'],
              members: {
                VpcEndpointId: {},
                VpcOptions: {
                  shape: 'S1q'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['VpcEndpoint'],
              members: {
                VpcEndpoint: {
                  shape: 'S3q'
                }
              }
            }
          },
          UpgradeElasticsearchDomain: {
            http: {
              requestUri: '/2015-01-01/es/upgradeDomain'
            },
            input: {
              type: 'structure',
              required: ['DomainName', 'TargetVersion'],
              members: {
                DomainName: {},
                TargetVersion: {},
                PerformCheckOnly: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                DomainName: {},
                TargetVersion: {},
                PerformCheckOnly: {
                  type: 'boolean'
                },
                ChangeProgressDetails: {
                  shape: 'S2z'
                }
              }
            }
          }
        },
        shapes: {
          S4: {
            type: 'structure',
            members: {
              SourceDomainInfo: {
                shape: 'S5'
              },
              DestinationDomainInfo: {
                shape: 'S5'
              },
              CrossClusterSearchConnectionId: {},
              ConnectionStatus: {
                type: 'structure',
                members: {
                  StatusCode: {},
                  Message: {}
                }
              }
            }
          },
          S5: {
            type: 'structure',
            required: ['DomainName'],
            members: {
              OwnerId: {},
              DomainName: {},
              Region: {}
            }
          },
          Se: {
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
          Sl: {
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
                shape: 'Ss'
              }
            }
          },
          Ss: {
            type: 'structure',
            members: {
              ErrorType: {},
              ErrorMessage: {}
            }
          },
          Sy: {
            type: 'structure',
            members: {
              PrincipalType: {},
              Principal: {}
            }
          },
          S1a: {
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
          S1g: {
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
              }
            }
          },
          S1m: {
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
          S1p: {
            type: 'structure',
            members: {
              AutomatedSnapshotStartHour: {
                type: 'integer'
              }
            }
          },
          S1q: {
            type: 'structure',
            members: {
              SubnetIds: {
                shape: 'S1r'
              },
              SecurityGroupIds: {
                shape: 'S1r'
              }
            }
          },
          S1r: {
            type: 'list',
            member: {}
          },
          S1s: {
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
          S1w: {
            type: 'structure',
            members: {
              Enabled: {
                type: 'boolean'
              },
              KmsKeyId: {}
            }
          },
          S1y: {
            type: 'structure',
            members: {
              Enabled: {
                type: 'boolean'
              }
            }
          },
          S1z: {
            type: 'map',
            key: {},
            value: {}
          },
          S20: {
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
          S24: {
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
          S27: {
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
                    shape: 'S29'
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
                    shape: 'S2c'
                  },
                  MasterUserName: {
                    shape: 'S29'
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
          S29: {
            type: 'string',
            sensitive: true
          },
          S2c: {
            type: 'structure',
            required: ['MetadataContent', 'EntityId'],
            members: {
              MetadataContent: {},
              EntityId: {}
            }
          },
          S2i: {
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
          S2p: {
            type: 'structure',
            required: ['DomainId', 'DomainName', 'ARN', 'ElasticsearchClusterConfig'],
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
              Endpoints: {
                type: 'map',
                key: {},
                value: {}
              },
              Processing: {
                type: 'boolean'
              },
              UpgradeProcessing: {
                type: 'boolean'
              },
              ElasticsearchVersion: {},
              ElasticsearchClusterConfig: {
                shape: 'S1g'
              },
              EBSOptions: {
                shape: 'S1m'
              },
              AccessPolicies: {},
              SnapshotOptions: {
                shape: 'S1p'
              },
              VPCOptions: {
                shape: 'S2t'
              },
              CognitoOptions: {
                shape: 'S1s'
              },
              EncryptionAtRestOptions: {
                shape: 'S1w'
              },
              NodeToNodeEncryptionOptions: {
                shape: 'S1y'
              },
              AdvancedOptions: {
                shape: 'S1z'
              },
              LogPublishingOptions: {
                shape: 'S20'
              },
              ServiceSoftwareOptions: {
                shape: 'S1a'
              },
              DomainEndpointOptions: {
                shape: 'S24'
              },
              AdvancedSecurityOptions: {
                shape: 'S2u'
              },
              AutoTuneOptions: {
                type: 'structure',
                members: {
                  State: {},
                  ErrorMessage: {}
                }
              },
              ChangeProgressDetails: {
                shape: 'S2z'
              },
              DomainProcessingStatus: {},
              ModifyingProperties: {
                shape: 'S35'
              }
            }
          },
          S2t: {
            type: 'structure',
            members: {
              VPCId: {},
              SubnetIds: {
                shape: 'S1r'
              },
              AvailabilityZones: {
                shape: 'S1r'
              },
              SecurityGroupIds: {
                shape: 'S1r'
              }
            }
          },
          S2u: {
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
                    shape: 'S2c'
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
          S2z: {
            type: 'structure',
            members: {
              ChangeId: {},
              Message: {},
              ConfigChangeStatus: {},
              StartTime: {
                type: 'timestamp'
              },
              LastUpdatedTime: {
                type: 'timestamp'
              },
              InitiatedBy: {}
            }
          },
          S35: {
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
          S3b: {
            type: 'structure',
            members: {
              StatusCode: {},
              Message: {}
            }
          },
          S3f: {
            type: 'structure',
            members: {
              S3BucketName: {},
              S3Key: {}
            }
          },
          S3j: {
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
                shape: 'Ss'
              }
            }
          },
          S3q: {
            type: 'structure',
            members: {
              VpcEndpointId: {},
              VpcEndpointOwner: {},
              DomainArn: {},
              VpcOptions: {
                shape: 'S2t'
              },
              Status: {},
              Endpoint: {}
            }
          },
          S40: {
            type: 'structure',
            members: {
              SourceDomainInfo: {
                shape: 'S5'
              },
              DestinationDomainInfo: {
                shape: 'S5'
              },
              CrossClusterSearchConnectionId: {},
              ConnectionAlias: {},
              ConnectionStatus: {
                shape: 'S3b'
              }
            }
          },
          S45: {
            type: 'structure',
            members: {
              VpcEndpointId: {},
              VpcEndpointOwner: {},
              DomainArn: {},
              Status: {}
            }
          },
          S4x: {
            type: 'structure',
            members: {
              ElasticsearchVersion: {
                type: 'structure',
                required: ['Options', 'Status'],
                members: {
                  Options: {},
                  Status: {
                    shape: 'S4z'
                  }
                }
              },
              ElasticsearchClusterConfig: {
                type: 'structure',
                required: ['Options', 'Status'],
                members: {
                  Options: {
                    shape: 'S1g'
                  },
                  Status: {
                    shape: 'S4z'
                  }
                }
              },
              EBSOptions: {
                type: 'structure',
                required: ['Options', 'Status'],
                members: {
                  Options: {
                    shape: 'S1m'
                  },
                  Status: {
                    shape: 'S4z'
                  }
                }
              },
              AccessPolicies: {
                type: 'structure',
                required: ['Options', 'Status'],
                members: {
                  Options: {},
                  Status: {
                    shape: 'S4z'
                  }
                }
              },
              SnapshotOptions: {
                type: 'structure',
                required: ['Options', 'Status'],
                members: {
                  Options: {
                    shape: 'S1p'
                  },
                  Status: {
                    shape: 'S4z'
                  }
                }
              },
              VPCOptions: {
                type: 'structure',
                required: ['Options', 'Status'],
                members: {
                  Options: {
                    shape: 'S2t'
                  },
                  Status: {
                    shape: 'S4z'
                  }
                }
              },
              CognitoOptions: {
                type: 'structure',
                required: ['Options', 'Status'],
                members: {
                  Options: {
                    shape: 'S1s'
                  },
                  Status: {
                    shape: 'S4z'
                  }
                }
              },
              EncryptionAtRestOptions: {
                type: 'structure',
                required: ['Options', 'Status'],
                members: {
                  Options: {
                    shape: 'S1w'
                  },
                  Status: {
                    shape: 'S4z'
                  }
                }
              },
              NodeToNodeEncryptionOptions: {
                type: 'structure',
                required: ['Options', 'Status'],
                members: {
                  Options: {
                    shape: 'S1y'
                  },
                  Status: {
                    shape: 'S4z'
                  }
                }
              },
              AdvancedOptions: {
                type: 'structure',
                required: ['Options', 'Status'],
                members: {
                  Options: {
                    shape: 'S1z'
                  },
                  Status: {
                    shape: 'S4z'
                  }
                }
              },
              LogPublishingOptions: {
                type: 'structure',
                members: {
                  Options: {
                    shape: 'S20'
                  },
                  Status: {
                    shape: 'S4z'
                  }
                }
              },
              DomainEndpointOptions: {
                type: 'structure',
                required: ['Options', 'Status'],
                members: {
                  Options: {
                    shape: 'S24'
                  },
                  Status: {
                    shape: 'S4z'
                  }
                }
              },
              AdvancedSecurityOptions: {
                type: 'structure',
                required: ['Options', 'Status'],
                members: {
                  Options: {
                    shape: 'S2u'
                  },
                  Status: {
                    shape: 'S4z'
                  }
                }
              },
              AutoTuneOptions: {
                type: 'structure',
                members: {
                  Options: {
                    shape: 'S5f'
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
                shape: 'S2z'
              },
              ModifyingProperties: {
                shape: 'S35'
              }
            }
          },
          S4z: {
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
          S5f: {
            type: 'structure',
            members: {
              DesiredState: {},
              RollbackOnDisable: {},
              MaintenanceSchedules: {
                shape: 'S2i'
              }
            }
          },
          S5y: {
            type: 'list',
            member: {}
          },
          S67: {
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
          S6v: {
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
          S7f: {
            type: 'list',
            member: {}
          },
          S86: {
            type: 'list',
            member: {
              shape: 'Sl'
            }
          },
          S8l: {
            type: 'list',
            member: {
              shape: 'S45'
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=99c93c90a15af9dcaaa6bf126704f7ca1d51f2c1.js.map