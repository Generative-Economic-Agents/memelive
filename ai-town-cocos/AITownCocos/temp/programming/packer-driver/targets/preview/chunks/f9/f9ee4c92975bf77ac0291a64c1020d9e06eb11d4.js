System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2018-01-01',
          endpointPrefix: 'fms',
          jsonVersion: '1.1',
          protocol: 'json',
          protocols: ['json'],
          serviceAbbreviation: 'FMS',
          serviceFullName: 'Firewall Management Service',
          serviceId: 'FMS',
          signatureVersion: 'v4',
          targetPrefix: 'AWSFMS_20180101',
          uid: 'fms-2018-01-01'
        },
        operations: {
          AssociateAdminAccount: {
            input: {
              type: 'structure',
              required: ['AdminAccount'],
              members: {
                AdminAccount: {}
              }
            }
          },
          AssociateThirdPartyFirewall: {
            input: {
              type: 'structure',
              required: ['ThirdPartyFirewall'],
              members: {
                ThirdPartyFirewall: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ThirdPartyFirewallStatus: {}
              }
            }
          },
          BatchAssociateResource: {
            input: {
              type: 'structure',
              required: ['ResourceSetIdentifier', 'Items'],
              members: {
                ResourceSetIdentifier: {},
                Items: {
                  shape: 'S9'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['ResourceSetIdentifier', 'FailedItems'],
              members: {
                ResourceSetIdentifier: {},
                FailedItems: {
                  shape: 'Sb'
                }
              }
            }
          },
          BatchDisassociateResource: {
            input: {
              type: 'structure',
              required: ['ResourceSetIdentifier', 'Items'],
              members: {
                ResourceSetIdentifier: {},
                Items: {
                  shape: 'S9'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['ResourceSetIdentifier', 'FailedItems'],
              members: {
                ResourceSetIdentifier: {},
                FailedItems: {
                  shape: 'Sb'
                }
              }
            }
          },
          DeleteAppsList: {
            input: {
              type: 'structure',
              required: ['ListId'],
              members: {
                ListId: {}
              }
            }
          },
          DeleteNotificationChannel: {
            input: {
              type: 'structure',
              members: {}
            }
          },
          DeletePolicy: {
            input: {
              type: 'structure',
              required: ['PolicyId'],
              members: {
                PolicyId: {},
                DeleteAllPolicyResources: {
                  type: 'boolean'
                }
              }
            }
          },
          DeleteProtocolsList: {
            input: {
              type: 'structure',
              required: ['ListId'],
              members: {
                ListId: {}
              }
            }
          },
          DeleteResourceSet: {
            input: {
              type: 'structure',
              required: ['Identifier'],
              members: {
                Identifier: {}
              }
            }
          },
          DisassociateAdminAccount: {
            input: {
              type: 'structure',
              members: {}
            }
          },
          DisassociateThirdPartyFirewall: {
            input: {
              type: 'structure',
              required: ['ThirdPartyFirewall'],
              members: {
                ThirdPartyFirewall: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ThirdPartyFirewallStatus: {}
              }
            }
          },
          GetAdminAccount: {
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {
                AdminAccount: {},
                RoleStatus: {}
              }
            }
          },
          GetAdminScope: {
            input: {
              type: 'structure',
              required: ['AdminAccount'],
              members: {
                AdminAccount: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                AdminScope: {
                  shape: 'Sx'
                },
                Status: {}
              }
            }
          },
          GetAppsList: {
            input: {
              type: 'structure',
              required: ['ListId'],
              members: {
                ListId: {},
                DefaultList: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AppsList: {
                  shape: 'S1c'
                },
                AppsListArn: {}
              }
            }
          },
          GetComplianceDetail: {
            input: {
              type: 'structure',
              required: ['PolicyId', 'MemberAccount'],
              members: {
                PolicyId: {},
                MemberAccount: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                PolicyComplianceDetail: {
                  type: 'structure',
                  members: {
                    PolicyOwner: {},
                    PolicyId: {},
                    MemberAccount: {},
                    Violators: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          ResourceId: {},
                          ViolationReason: {},
                          ResourceType: {},
                          Metadata: {
                            type: 'map',
                            key: {},
                            value: {}
                          }
                        }
                      }
                    },
                    EvaluationLimitExceeded: {
                      type: 'boolean'
                    },
                    ExpiredAt: {
                      type: 'timestamp'
                    },
                    IssueInfoMap: {
                      shape: 'S1x'
                    }
                  }
                }
              }
            }
          },
          GetNotificationChannel: {
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {
                SnsTopicArn: {},
                SnsRoleName: {}
              }
            }
          },
          GetPolicy: {
            input: {
              type: 'structure',
              required: ['PolicyId'],
              members: {
                PolicyId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Policy: {
                  shape: 'S24'
                },
                PolicyArn: {}
              }
            }
          },
          GetProtectionStatus: {
            input: {
              type: 'structure',
              required: ['PolicyId'],
              members: {
                PolicyId: {},
                MemberAccountId: {},
                StartTime: {
                  type: 'timestamp'
                },
                EndTime: {
                  type: 'timestamp'
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
                AdminAccountId: {},
                ServiceType: {},
                Data: {},
                NextToken: {}
              }
            }
          },
          GetProtocolsList: {
            input: {
              type: 'structure',
              required: ['ListId'],
              members: {
                ListId: {},
                DefaultList: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ProtocolsList: {
                  shape: 'S36'
                },
                ProtocolsListArn: {}
              }
            }
          },
          GetResourceSet: {
            input: {
              type: 'structure',
              required: ['Identifier'],
              members: {
                Identifier: {}
              }
            },
            output: {
              type: 'structure',
              required: ['ResourceSet', 'ResourceSetArn'],
              members: {
                ResourceSet: {
                  shape: 'S3b'
                },
                ResourceSetArn: {}
              }
            }
          },
          GetThirdPartyFirewallAssociationStatus: {
            input: {
              type: 'structure',
              required: ['ThirdPartyFirewall'],
              members: {
                ThirdPartyFirewall: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ThirdPartyFirewallStatus: {},
                MarketplaceOnboardingStatus: {}
              }
            }
          },
          GetViolationDetails: {
            input: {
              type: 'structure',
              required: ['PolicyId', 'MemberAccount', 'ResourceId', 'ResourceType'],
              members: {
                PolicyId: {},
                MemberAccount: {},
                ResourceId: {},
                ResourceType: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ViolationDetail: {
                  type: 'structure',
                  required: ['PolicyId', 'MemberAccount', 'ResourceId', 'ResourceType', 'ResourceViolations'],
                  members: {
                    PolicyId: {},
                    MemberAccount: {},
                    ResourceId: {},
                    ResourceType: {},
                    ResourceViolations: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          AwsVPCSecurityGroupViolation: {
                            type: 'structure',
                            members: {
                              ViolationTarget: {},
                              ViolationTargetDescription: {},
                              PartialMatches: {
                                type: 'list',
                                member: {
                                  type: 'structure',
                                  members: {
                                    Reference: {},
                                    TargetViolationReasons: {
                                      type: 'list',
                                      member: {}
                                    }
                                  }
                                }
                              },
                              PossibleSecurityGroupRemediationActions: {
                                type: 'list',
                                member: {
                                  type: 'structure',
                                  members: {
                                    RemediationActionType: {},
                                    Description: {},
                                    RemediationResult: {
                                      type: 'structure',
                                      members: {
                                        IPV4Range: {},
                                        IPV6Range: {},
                                        PrefixListId: {},
                                        Protocol: {},
                                        FromPort: {
                                          type: 'long'
                                        },
                                        ToPort: {
                                          type: 'long'
                                        }
                                      }
                                    },
                                    IsDefaultAction: {
                                      type: 'boolean'
                                    }
                                  }
                                }
                              }
                            }
                          },
                          AwsEc2NetworkInterfaceViolation: {
                            shape: 'S40'
                          },
                          AwsEc2InstanceViolation: {
                            type: 'structure',
                            members: {
                              ViolationTarget: {},
                              AwsEc2NetworkInterfaceViolations: {
                                type: 'list',
                                member: {
                                  shape: 'S40'
                                }
                              }
                            }
                          },
                          NetworkFirewallMissingFirewallViolation: {
                            type: 'structure',
                            members: {
                              ViolationTarget: {},
                              VPC: {},
                              AvailabilityZone: {},
                              TargetViolationReason: {}
                            }
                          },
                          NetworkFirewallMissingSubnetViolation: {
                            type: 'structure',
                            members: {
                              ViolationTarget: {},
                              VPC: {},
                              AvailabilityZone: {},
                              TargetViolationReason: {}
                            }
                          },
                          NetworkFirewallMissingExpectedRTViolation: {
                            type: 'structure',
                            members: {
                              ViolationTarget: {},
                              VPC: {},
                              AvailabilityZone: {},
                              CurrentRouteTable: {},
                              ExpectedRouteTable: {}
                            }
                          },
                          NetworkFirewallPolicyModifiedViolation: {
                            type: 'structure',
                            members: {
                              ViolationTarget: {},
                              CurrentPolicyDescription: {
                                shape: 'S48'
                              },
                              ExpectedPolicyDescription: {
                                shape: 'S48'
                              }
                            }
                          },
                          NetworkFirewallInternetTrafficNotInspectedViolation: {
                            type: 'structure',
                            members: {
                              SubnetId: {},
                              SubnetAvailabilityZone: {},
                              RouteTableId: {},
                              ViolatingRoutes: {
                                shape: 'S4o'
                              },
                              IsRouteTableUsedInDifferentAZ: {
                                type: 'boolean'
                              },
                              CurrentFirewallSubnetRouteTable: {},
                              ExpectedFirewallEndpoint: {},
                              FirewallSubnetId: {},
                              ExpectedFirewallSubnetRoutes: {
                                shape: 'S4s'
                              },
                              ActualFirewallSubnetRoutes: {
                                shape: 'S4o'
                              },
                              InternetGatewayId: {},
                              CurrentInternetGatewayRouteTable: {},
                              ExpectedInternetGatewayRoutes: {
                                shape: 'S4s'
                              },
                              ActualInternetGatewayRoutes: {
                                shape: 'S4o'
                              },
                              VpcId: {}
                            }
                          },
                          NetworkFirewallInvalidRouteConfigurationViolation: {
                            type: 'structure',
                            members: {
                              AffectedSubnets: {
                                shape: 'S41'
                              },
                              RouteTableId: {},
                              IsRouteTableUsedInDifferentAZ: {
                                type: 'boolean'
                              },
                              ViolatingRoute: {
                                shape: 'S4p'
                              },
                              CurrentFirewallSubnetRouteTable: {},
                              ExpectedFirewallEndpoint: {},
                              ActualFirewallEndpoint: {},
                              ExpectedFirewallSubnetId: {},
                              ActualFirewallSubnetId: {},
                              ExpectedFirewallSubnetRoutes: {
                                shape: 'S4s'
                              },
                              ActualFirewallSubnetRoutes: {
                                shape: 'S4o'
                              },
                              InternetGatewayId: {},
                              CurrentInternetGatewayRouteTable: {},
                              ExpectedInternetGatewayRoutes: {
                                shape: 'S4s'
                              },
                              ActualInternetGatewayRoutes: {
                                shape: 'S4o'
                              },
                              VpcId: {}
                            }
                          },
                          NetworkFirewallBlackHoleRouteDetectedViolation: {
                            type: 'structure',
                            members: {
                              ViolationTarget: {},
                              RouteTableId: {},
                              VpcId: {},
                              ViolatingRoutes: {
                                shape: 'S4o'
                              }
                            }
                          },
                          NetworkFirewallUnexpectedFirewallRoutesViolation: {
                            type: 'structure',
                            members: {
                              FirewallSubnetId: {},
                              ViolatingRoutes: {
                                shape: 'S4o'
                              },
                              RouteTableId: {},
                              FirewallEndpoint: {},
                              VpcId: {}
                            }
                          },
                          NetworkFirewallUnexpectedGatewayRoutesViolation: {
                            type: 'structure',
                            members: {
                              GatewayId: {},
                              ViolatingRoutes: {
                                shape: 'S4o'
                              },
                              RouteTableId: {},
                              VpcId: {}
                            }
                          },
                          NetworkFirewallMissingExpectedRoutesViolation: {
                            type: 'structure',
                            members: {
                              ViolationTarget: {},
                              ExpectedRoutes: {
                                shape: 'S4s'
                              },
                              VpcId: {}
                            }
                          },
                          DnsRuleGroupPriorityConflictViolation: {
                            type: 'structure',
                            members: {
                              ViolationTarget: {},
                              ViolationTargetDescription: {},
                              ConflictingPriority: {
                                type: 'integer'
                              },
                              ConflictingPolicyId: {},
                              UnavailablePriorities: {
                                type: 'list',
                                member: {
                                  type: 'integer'
                                }
                              }
                            }
                          },
                          DnsDuplicateRuleGroupViolation: {
                            type: 'structure',
                            members: {
                              ViolationTarget: {},
                              ViolationTargetDescription: {}
                            }
                          },
                          DnsRuleGroupLimitExceededViolation: {
                            type: 'structure',
                            members: {
                              ViolationTarget: {},
                              ViolationTargetDescription: {},
                              NumberOfRuleGroupsAlreadyAssociated: {
                                type: 'integer'
                              }
                            }
                          },
                          FirewallSubnetIsOutOfScopeViolation: {
                            type: 'structure',
                            members: {
                              FirewallSubnetId: {},
                              VpcId: {},
                              SubnetAvailabilityZone: {},
                              SubnetAvailabilityZoneId: {},
                              VpcEndpointId: {}
                            }
                          },
                          RouteHasOutOfScopeEndpointViolation: {
                            type: 'structure',
                            members: {
                              SubnetId: {},
                              VpcId: {},
                              RouteTableId: {},
                              ViolatingRoutes: {
                                shape: 'S4o'
                              },
                              SubnetAvailabilityZone: {},
                              SubnetAvailabilityZoneId: {},
                              CurrentFirewallSubnetRouteTable: {},
                              FirewallSubnetId: {},
                              FirewallSubnetRoutes: {
                                shape: 'S4o'
                              },
                              InternetGatewayId: {},
                              CurrentInternetGatewayRouteTable: {},
                              InternetGatewayRoutes: {
                                shape: 'S4o'
                              }
                            }
                          },
                          ThirdPartyFirewallMissingFirewallViolation: {
                            type: 'structure',
                            members: {
                              ViolationTarget: {},
                              VPC: {},
                              AvailabilityZone: {},
                              TargetViolationReason: {}
                            }
                          },
                          ThirdPartyFirewallMissingSubnetViolation: {
                            type: 'structure',
                            members: {
                              ViolationTarget: {},
                              VPC: {},
                              AvailabilityZone: {},
                              TargetViolationReason: {}
                            }
                          },
                          ThirdPartyFirewallMissingExpectedRouteTableViolation: {
                            type: 'structure',
                            members: {
                              ViolationTarget: {},
                              VPC: {},
                              AvailabilityZone: {},
                              CurrentRouteTable: {},
                              ExpectedRouteTable: {}
                            }
                          },
                          FirewallSubnetMissingVPCEndpointViolation: {
                            type: 'structure',
                            members: {
                              FirewallSubnetId: {},
                              VpcId: {},
                              SubnetAvailabilityZone: {},
                              SubnetAvailabilityZoneId: {}
                            }
                          },
                          InvalidNetworkAclEntriesViolation: {
                            type: 'structure',
                            members: {
                              Vpc: {},
                              Subnet: {},
                              SubnetAvailabilityZone: {},
                              CurrentAssociatedNetworkAcl: {},
                              EntryViolations: {
                                type: 'list',
                                member: {
                                  type: 'structure',
                                  members: {
                                    ExpectedEntry: {
                                      shape: 'S5f'
                                    },
                                    ExpectedEvaluationOrder: {},
                                    ActualEvaluationOrder: {},
                                    EntryAtExpectedEvaluationOrder: {
                                      shape: 'S5f'
                                    },
                                    EntriesWithConflicts: {
                                      type: 'list',
                                      member: {
                                        shape: 'S5f'
                                      }
                                    },
                                    EntryViolationReasons: {
                                      type: 'list',
                                      member: {}
                                    }
                                  }
                                }
                              }
                            }
                          },
                          PossibleRemediationActions: {
                            type: 'structure',
                            members: {
                              Description: {},
                              Actions: {
                                type: 'list',
                                member: {
                                  type: 'structure',
                                  required: ['OrderedRemediationActions'],
                                  members: {
                                    Description: {},
                                    OrderedRemediationActions: {
                                      type: 'list',
                                      member: {
                                        type: 'structure',
                                        members: {
                                          RemediationAction: {
                                            type: 'structure',
                                            members: {
                                              Description: {},
                                              EC2CreateRouteAction: {
                                                type: 'structure',
                                                required: ['RouteTableId'],
                                                members: {
                                                  Description: {},
                                                  DestinationCidrBlock: {},
                                                  DestinationPrefixListId: {},
                                                  DestinationIpv6CidrBlock: {},
                                                  VpcEndpointId: {
                                                    shape: 'S5s'
                                                  },
                                                  GatewayId: {
                                                    shape: 'S5s'
                                                  },
                                                  RouteTableId: {
                                                    shape: 'S5s'
                                                  }
                                                }
                                              },
                                              EC2ReplaceRouteAction: {
                                                type: 'structure',
                                                required: ['RouteTableId'],
                                                members: {
                                                  Description: {},
                                                  DestinationCidrBlock: {},
                                                  DestinationPrefixListId: {},
                                                  DestinationIpv6CidrBlock: {},
                                                  GatewayId: {
                                                    shape: 'S5s'
                                                  },
                                                  RouteTableId: {
                                                    shape: 'S5s'
                                                  }
                                                }
                                              },
                                              EC2DeleteRouteAction: {
                                                type: 'structure',
                                                required: ['RouteTableId'],
                                                members: {
                                                  Description: {},
                                                  DestinationCidrBlock: {},
                                                  DestinationPrefixListId: {},
                                                  DestinationIpv6CidrBlock: {},
                                                  RouteTableId: {
                                                    shape: 'S5s'
                                                  }
                                                }
                                              },
                                              EC2CopyRouteTableAction: {
                                                type: 'structure',
                                                required: ['VpcId', 'RouteTableId'],
                                                members: {
                                                  Description: {},
                                                  VpcId: {
                                                    shape: 'S5s'
                                                  },
                                                  RouteTableId: {
                                                    shape: 'S5s'
                                                  }
                                                }
                                              },
                                              EC2ReplaceRouteTableAssociationAction: {
                                                type: 'structure',
                                                required: ['AssociationId', 'RouteTableId'],
                                                members: {
                                                  Description: {},
                                                  AssociationId: {
                                                    shape: 'S5s'
                                                  },
                                                  RouteTableId: {
                                                    shape: 'S5s'
                                                  }
                                                }
                                              },
                                              EC2AssociateRouteTableAction: {
                                                type: 'structure',
                                                required: ['RouteTableId'],
                                                members: {
                                                  Description: {},
                                                  RouteTableId: {
                                                    shape: 'S5s'
                                                  },
                                                  SubnetId: {
                                                    shape: 'S5s'
                                                  },
                                                  GatewayId: {
                                                    shape: 'S5s'
                                                  }
                                                }
                                              },
                                              EC2CreateRouteTableAction: {
                                                type: 'structure',
                                                required: ['VpcId'],
                                                members: {
                                                  Description: {},
                                                  VpcId: {
                                                    shape: 'S5s'
                                                  }
                                                }
                                              },
                                              FMSPolicyUpdateFirewallCreationConfigAction: {
                                                type: 'structure',
                                                members: {
                                                  Description: {},
                                                  FirewallCreationConfig: {}
                                                }
                                              },
                                              CreateNetworkAclAction: {
                                                type: 'structure',
                                                members: {
                                                  Description: {},
                                                  Vpc: {
                                                    shape: 'S5s'
                                                  },
                                                  FMSCanRemediate: {
                                                    type: 'boolean'
                                                  }
                                                }
                                              },
                                              ReplaceNetworkAclAssociationAction: {
                                                type: 'structure',
                                                members: {
                                                  Description: {},
                                                  AssociationId: {
                                                    shape: 'S5s'
                                                  },
                                                  NetworkAclId: {
                                                    shape: 'S5s'
                                                  },
                                                  FMSCanRemediate: {
                                                    type: 'boolean'
                                                  }
                                                }
                                              },
                                              CreateNetworkAclEntriesAction: {
                                                type: 'structure',
                                                members: {
                                                  Description: {},
                                                  NetworkAclId: {
                                                    shape: 'S5s'
                                                  },
                                                  NetworkAclEntriesToBeCreated: {
                                                    shape: 'S63'
                                                  },
                                                  FMSCanRemediate: {
                                                    type: 'boolean'
                                                  }
                                                }
                                              },
                                              DeleteNetworkAclEntriesAction: {
                                                type: 'structure',
                                                members: {
                                                  Description: {},
                                                  NetworkAclId: {
                                                    shape: 'S5s'
                                                  },
                                                  NetworkAclEntriesToBeDeleted: {
                                                    shape: 'S63'
                                                  },
                                                  FMSCanRemediate: {
                                                    type: 'boolean'
                                                  }
                                                }
                                              }
                                            }
                                          },
                                          Order: {
                                            type: 'integer'
                                          }
                                        }
                                      }
                                    },
                                    IsDefaultAction: {
                                      type: 'boolean'
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    },
                    ResourceTags: {
                      shape: 'S65'
                    },
                    ResourceDescription: {}
                  }
                }
              }
            }
          },
          ListAdminAccountsForOrganization: {
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
                AdminAccounts: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      AdminAccount: {},
                      DefaultAdmin: {
                        type: 'boolean'
                      },
                      Status: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListAdminsManagingAccount: {
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
                AdminAccounts: {
                  shape: 'Sz'
                },
                NextToken: {}
              }
            }
          },
          ListAppsLists: {
            input: {
              type: 'structure',
              required: ['MaxResults'],
              members: {
                DefaultLists: {
                  type: 'boolean'
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
                AppsLists: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ListArn: {},
                      ListId: {},
                      ListName: {},
                      AppsList: {
                        shape: 'S1g'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListComplianceStatus: {
            input: {
              type: 'structure',
              required: ['PolicyId'],
              members: {
                PolicyId: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                PolicyComplianceStatusList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      PolicyOwner: {},
                      PolicyId: {},
                      PolicyName: {},
                      MemberAccount: {},
                      EvaluationResults: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            ComplianceStatus: {},
                            ViolatorCount: {
                              type: 'long'
                            },
                            EvaluationLimitExceeded: {
                              type: 'boolean'
                            }
                          }
                        }
                      },
                      LastUpdated: {
                        type: 'timestamp'
                      },
                      IssueInfoMap: {
                        shape: 'S1x'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListDiscoveredResources: {
            input: {
              type: 'structure',
              required: ['MemberAccountIds', 'ResourceType'],
              members: {
                MemberAccountIds: {
                  type: 'list',
                  member: {}
                },
                ResourceType: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Items: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      URI: {},
                      AccountId: {},
                      Type: {},
                      Name: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListMemberAccounts: {
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
                MemberAccounts: {
                  type: 'list',
                  member: {}
                },
                NextToken: {}
              }
            }
          },
          ListPolicies: {
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
                PolicyList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      PolicyArn: {},
                      PolicyId: {},
                      PolicyName: {},
                      ResourceType: {},
                      SecurityServiceType: {},
                      RemediationEnabled: {
                        type: 'boolean'
                      },
                      DeleteUnusedFMManagedResources: {
                        type: 'boolean'
                      },
                      PolicyStatus: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListProtocolsLists: {
            input: {
              type: 'structure',
              required: ['MaxResults'],
              members: {
                DefaultLists: {
                  type: 'boolean'
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
                ProtocolsLists: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ListArn: {},
                      ListId: {},
                      ListName: {},
                      ProtocolsList: {
                        shape: 'S37'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListResourceSetResources: {
            input: {
              type: 'structure',
              required: ['Identifier'],
              members: {
                Identifier: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              required: ['Items'],
              members: {
                Items: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['URI'],
                    members: {
                      URI: {},
                      AccountId: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListResourceSets: {
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
                ResourceSets: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Id: {},
                      Name: {},
                      Description: {},
                      LastUpdateTime: {
                        type: 'timestamp'
                      },
                      ResourceSetStatus: {}
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
                TagList: {
                  shape: 'S65'
                }
              }
            }
          },
          ListThirdPartyFirewallFirewallPolicies: {
            input: {
              type: 'structure',
              required: ['ThirdPartyFirewall', 'MaxResults'],
              members: {
                ThirdPartyFirewall: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ThirdPartyFirewallFirewallPolicies: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      FirewallPolicyId: {},
                      FirewallPolicyName: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          PutAdminAccount: {
            input: {
              type: 'structure',
              required: ['AdminAccount'],
              members: {
                AdminAccount: {},
                AdminScope: {
                  shape: 'Sx'
                }
              }
            }
          },
          PutAppsList: {
            input: {
              type: 'structure',
              required: ['AppsList'],
              members: {
                AppsList: {
                  shape: 'S1c'
                },
                TagList: {
                  shape: 'S65'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AppsList: {
                  shape: 'S1c'
                },
                AppsListArn: {}
              }
            }
          },
          PutNotificationChannel: {
            input: {
              type: 'structure',
              required: ['SnsTopicArn', 'SnsRoleName'],
              members: {
                SnsTopicArn: {},
                SnsRoleName: {}
              }
            }
          },
          PutPolicy: {
            input: {
              type: 'structure',
              required: ['Policy'],
              members: {
                Policy: {
                  shape: 'S24'
                },
                TagList: {
                  shape: 'S65'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Policy: {
                  shape: 'S24'
                },
                PolicyArn: {}
              }
            }
          },
          PutProtocolsList: {
            input: {
              type: 'structure',
              required: ['ProtocolsList'],
              members: {
                ProtocolsList: {
                  shape: 'S36'
                },
                TagList: {
                  shape: 'S65'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ProtocolsList: {
                  shape: 'S36'
                },
                ProtocolsListArn: {}
              }
            }
          },
          PutResourceSet: {
            input: {
              type: 'structure',
              required: ['ResourceSet'],
              members: {
                ResourceSet: {
                  shape: 'S3b'
                },
                TagList: {
                  shape: 'S65'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['ResourceSet', 'ResourceSetArn'],
              members: {
                ResourceSet: {
                  shape: 'S3b'
                },
                ResourceSetArn: {}
              }
            }
          },
          TagResource: {
            input: {
              type: 'structure',
              required: ['ResourceArn', 'TagList'],
              members: {
                ResourceArn: {},
                TagList: {
                  shape: 'S65'
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
          }
        },
        shapes: {
          S9: {
            type: 'list',
            member: {}
          },
          Sb: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                URI: {},
                Reason: {}
              }
            }
          },
          Sx: {
            type: 'structure',
            members: {
              AccountScope: {
                type: 'structure',
                members: {
                  Accounts: {
                    shape: 'Sz'
                  },
                  AllAccountsEnabled: {
                    type: 'boolean'
                  },
                  ExcludeSpecifiedAccounts: {
                    type: 'boolean'
                  }
                }
              },
              OrganizationalUnitScope: {
                type: 'structure',
                members: {
                  OrganizationalUnits: {
                    type: 'list',
                    member: {}
                  },
                  AllOrganizationalUnitsEnabled: {
                    type: 'boolean'
                  },
                  ExcludeSpecifiedOrganizationalUnits: {
                    type: 'boolean'
                  }
                }
              },
              RegionScope: {
                type: 'structure',
                members: {
                  Regions: {
                    type: 'list',
                    member: {}
                  },
                  AllRegionsEnabled: {
                    type: 'boolean'
                  }
                }
              },
              PolicyTypeScope: {
                type: 'structure',
                members: {
                  PolicyTypes: {
                    type: 'list',
                    member: {}
                  },
                  AllPolicyTypesEnabled: {
                    type: 'boolean'
                  }
                }
              }
            }
          },
          Sz: {
            type: 'list',
            member: {}
          },
          S1c: {
            type: 'structure',
            required: ['ListName', 'AppsList'],
            members: {
              ListId: {},
              ListName: {},
              ListUpdateToken: {},
              CreateTime: {
                type: 'timestamp'
              },
              LastUpdateTime: {
                type: 'timestamp'
              },
              AppsList: {
                shape: 'S1g'
              },
              PreviousAppsList: {
                type: 'map',
                key: {},
                value: {
                  shape: 'S1g'
                }
              }
            }
          },
          S1g: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['AppName', 'Protocol', 'Port'],
              members: {
                AppName: {},
                Protocol: {},
                Port: {
                  type: 'long'
                }
              }
            }
          },
          S1x: {
            type: 'map',
            key: {},
            value: {}
          },
          S24: {
            type: 'structure',
            required: ['PolicyName', 'SecurityServicePolicyData', 'ResourceType', 'ExcludeResourceTags', 'RemediationEnabled'],
            members: {
              PolicyId: {},
              PolicyName: {},
              PolicyUpdateToken: {},
              SecurityServicePolicyData: {
                type: 'structure',
                required: ['Type'],
                members: {
                  Type: {},
                  ManagedServiceData: {},
                  PolicyOption: {
                    type: 'structure',
                    members: {
                      NetworkFirewallPolicy: {
                        type: 'structure',
                        members: {
                          FirewallDeploymentModel: {}
                        }
                      },
                      ThirdPartyFirewallPolicy: {
                        type: 'structure',
                        members: {
                          FirewallDeploymentModel: {}
                        }
                      },
                      NetworkAclCommonPolicy: {
                        type: 'structure',
                        required: ['NetworkAclEntrySet'],
                        members: {
                          NetworkAclEntrySet: {
                            type: 'structure',
                            required: ['ForceRemediateForFirstEntries', 'ForceRemediateForLastEntries'],
                            members: {
                              FirstEntries: {
                                shape: 'S2e'
                              },
                              ForceRemediateForFirstEntries: {
                                type: 'boolean'
                              },
                              LastEntries: {
                                shape: 'S2e'
                              },
                              ForceRemediateForLastEntries: {
                                type: 'boolean'
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              ResourceType: {},
              ResourceTypeList: {
                shape: 'S2n'
              },
              ResourceTags: {
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
              ExcludeResourceTags: {
                type: 'boolean'
              },
              RemediationEnabled: {
                type: 'boolean'
              },
              DeleteUnusedFMManagedResources: {
                type: 'boolean'
              },
              IncludeMap: {
                shape: 'S2s'
              },
              ExcludeMap: {
                shape: 'S2s'
              },
              ResourceSetIds: {
                type: 'list',
                member: {}
              },
              PolicyDescription: {},
              PolicyStatus: {}
            }
          },
          S2e: {
            type: 'list',
            member: {
              shape: 'S2f'
            }
          },
          S2f: {
            type: 'structure',
            required: ['Protocol', 'RuleAction', 'Egress'],
            members: {
              IcmpTypeCode: {
                type: 'structure',
                members: {
                  Code: {
                    type: 'integer'
                  },
                  Type: {
                    type: 'integer'
                  }
                }
              },
              Protocol: {},
              PortRange: {
                type: 'structure',
                members: {
                  From: {
                    type: 'integer'
                  },
                  To: {
                    type: 'integer'
                  }
                }
              },
              CidrBlock: {},
              Ipv6CidrBlock: {},
              RuleAction: {},
              Egress: {
                type: 'boolean'
              }
            }
          },
          S2n: {
            type: 'list',
            member: {}
          },
          S2s: {
            type: 'map',
            key: {},
            value: {
              type: 'list',
              member: {}
            }
          },
          S36: {
            type: 'structure',
            required: ['ListName', 'ProtocolsList'],
            members: {
              ListId: {},
              ListName: {},
              ListUpdateToken: {},
              CreateTime: {
                type: 'timestamp'
              },
              LastUpdateTime: {
                type: 'timestamp'
              },
              ProtocolsList: {
                shape: 'S37'
              },
              PreviousProtocolsList: {
                type: 'map',
                key: {},
                value: {
                  shape: 'S37'
                }
              }
            }
          },
          S37: {
            type: 'list',
            member: {}
          },
          S3b: {
            type: 'structure',
            required: ['Name', 'ResourceTypeList'],
            members: {
              Id: {},
              Name: {},
              Description: {},
              UpdateToken: {},
              ResourceTypeList: {
                shape: 'S2n'
              },
              LastUpdateTime: {
                type: 'timestamp'
              },
              ResourceSetStatus: {}
            }
          },
          S40: {
            type: 'structure',
            members: {
              ViolationTarget: {},
              ViolatingSecurityGroups: {
                shape: 'S41'
              }
            }
          },
          S41: {
            type: 'list',
            member: {}
          },
          S48: {
            type: 'structure',
            members: {
              StatelessRuleGroups: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    RuleGroupName: {},
                    ResourceId: {},
                    Priority: {
                      type: 'integer'
                    }
                  }
                }
              },
              StatelessDefaultActions: {
                shape: 'S4d'
              },
              StatelessFragmentDefaultActions: {
                shape: 'S4d'
              },
              StatelessCustomActions: {
                shape: 'S4d'
              },
              StatefulRuleGroups: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    RuleGroupName: {},
                    ResourceId: {},
                    Priority: {
                      type: 'integer'
                    },
                    Override: {
                      type: 'structure',
                      members: {
                        Action: {}
                      }
                    }
                  }
                }
              },
              StatefulDefaultActions: {
                shape: 'S4d'
              },
              StatefulEngineOptions: {
                type: 'structure',
                members: {
                  RuleOrder: {},
                  StreamExceptionPolicy: {}
                }
              }
            }
          },
          S4d: {
            type: 'list',
            member: {}
          },
          S4o: {
            type: 'list',
            member: {
              shape: 'S4p'
            }
          },
          S4p: {
            type: 'structure',
            members: {
              DestinationType: {},
              TargetType: {},
              Destination: {},
              Target: {}
            }
          },
          S4s: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                IpV4Cidr: {},
                PrefixListId: {},
                IpV6Cidr: {},
                ContributingSubnets: {
                  shape: 'S41'
                },
                AllowedTargets: {
                  type: 'list',
                  member: {}
                },
                RouteTableId: {}
              }
            }
          },
          S5f: {
            type: 'structure',
            members: {
              EntryDetail: {
                shape: 'S2f'
              },
              EntryRuleNumber: {
                type: 'integer'
              },
              EntryType: {}
            }
          },
          S5s: {
            type: 'structure',
            members: {
              ResourceId: {},
              Description: {}
            }
          },
          S63: {
            type: 'list',
            member: {
              shape: 'S5f'
            }
          },
          S65: {
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
//# sourceMappingURL=f9ee4c92975bf77ac0291a64c1020d9e06eb11d4.js.map