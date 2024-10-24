System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2018-10-26',
          endpointPrefix: 'api.detective',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceFullName: 'Amazon Detective',
          serviceId: 'Detective',
          signatureVersion: 'v4',
          signingName: 'detective',
          uid: 'detective-2018-10-26'
        },
        operations: {
          AcceptInvitation: {
            http: {
              method: 'PUT',
              requestUri: '/invitation'
            },
            input: {
              type: 'structure',
              required: ['GraphArn'],
              members: {
                GraphArn: {}
              }
            }
          },
          BatchGetGraphMemberDatasources: {
            http: {
              requestUri: '/graph/datasources/get'
            },
            input: {
              type: 'structure',
              required: ['GraphArn', 'AccountIds'],
              members: {
                GraphArn: {},
                AccountIds: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                MemberDatasources: {
                  shape: 'S7'
                },
                UnprocessedAccounts: {
                  shape: 'Sf'
                }
              }
            }
          },
          BatchGetMembershipDatasources: {
            http: {
              requestUri: '/membership/datasources/get'
            },
            input: {
              type: 'structure',
              required: ['GraphArns'],
              members: {
                GraphArns: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                MembershipDatasources: {
                  shape: 'S7'
                },
                UnprocessedGraphs: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      GraphArn: {},
                      Reason: {}
                    }
                  }
                }
              }
            }
          },
          CreateGraph: {
            http: {
              requestUri: '/graph'
            },
            input: {
              type: 'structure',
              members: {
                Tags: {
                  shape: 'So'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                GraphArn: {}
              }
            }
          },
          CreateMembers: {
            http: {
              requestUri: '/graph/members'
            },
            input: {
              type: 'structure',
              required: ['GraphArn', 'Accounts'],
              members: {
                GraphArn: {},
                Message: {
                  type: 'string',
                  sensitive: true
                },
                DisableEmailNotification: {
                  type: 'boolean'
                },
                Accounts: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['AccountId', 'EmailAddress'],
                    members: {
                      AccountId: {},
                      EmailAddress: {
                        shape: 'Sx'
                      }
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Members: {
                  shape: 'Sz'
                },
                UnprocessedAccounts: {
                  shape: 'Sf'
                }
              }
            }
          },
          DeleteGraph: {
            http: {
              requestUri: '/graph/removal'
            },
            input: {
              type: 'structure',
              required: ['GraphArn'],
              members: {
                GraphArn: {}
              }
            }
          },
          DeleteMembers: {
            http: {
              requestUri: '/graph/members/removal'
            },
            input: {
              type: 'structure',
              required: ['GraphArn', 'AccountIds'],
              members: {
                GraphArn: {},
                AccountIds: {
                  shape: 'S1b'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AccountIds: {
                  shape: 'S1b'
                },
                UnprocessedAccounts: {
                  shape: 'Sf'
                }
              }
            }
          },
          DescribeOrganizationConfiguration: {
            http: {
              requestUri: '/orgs/describeOrganizationConfiguration'
            },
            input: {
              type: 'structure',
              required: ['GraphArn'],
              members: {
                GraphArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                AutoEnable: {
                  type: 'boolean'
                }
              }
            }
          },
          DisableOrganizationAdminAccount: {
            http: {
              requestUri: '/orgs/disableAdminAccount'
            }
          },
          DisassociateMembership: {
            http: {
              requestUri: '/membership/removal'
            },
            input: {
              type: 'structure',
              required: ['GraphArn'],
              members: {
                GraphArn: {}
              }
            }
          },
          EnableOrganizationAdminAccount: {
            http: {
              requestUri: '/orgs/enableAdminAccount'
            },
            input: {
              type: 'structure',
              required: ['AccountId'],
              members: {
                AccountId: {}
              }
            }
          },
          GetInvestigation: {
            http: {
              requestUri: '/investigations/getInvestigation'
            },
            input: {
              type: 'structure',
              required: ['GraphArn', 'InvestigationId'],
              members: {
                GraphArn: {},
                InvestigationId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                GraphArn: {},
                InvestigationId: {},
                EntityArn: {},
                EntityType: {},
                CreatedTime: {
                  shape: 'Se'
                },
                ScopeStartTime: {
                  shape: 'Se'
                },
                ScopeEndTime: {
                  shape: 'Se'
                },
                Status: {},
                Severity: {},
                State: {}
              }
            }
          },
          GetMembers: {
            http: {
              requestUri: '/graph/members/get'
            },
            input: {
              type: 'structure',
              required: ['GraphArn', 'AccountIds'],
              members: {
                GraphArn: {},
                AccountIds: {
                  shape: 'S1b'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                MemberDetails: {
                  shape: 'Sz'
                },
                UnprocessedAccounts: {
                  shape: 'Sf'
                }
              }
            }
          },
          ListDatasourcePackages: {
            http: {
              requestUri: '/graph/datasources/list'
            },
            input: {
              type: 'structure',
              required: ['GraphArn'],
              members: {
                GraphArn: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                DatasourcePackages: {
                  type: 'map',
                  key: {},
                  value: {
                    type: 'structure',
                    members: {
                      DatasourcePackageIngestState: {},
                      LastIngestStateChange: {
                        shape: 'Sb'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListGraphs: {
            http: {
              requestUri: '/graphs/list'
            },
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
                GraphList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Arn: {},
                      CreatedTime: {
                        shape: 'Se'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListIndicators: {
            http: {
              requestUri: '/investigations/listIndicators'
            },
            input: {
              type: 'structure',
              required: ['GraphArn', 'InvestigationId'],
              members: {
                GraphArn: {},
                InvestigationId: {},
                IndicatorType: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                GraphArn: {},
                InvestigationId: {},
                NextToken: {},
                Indicators: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      IndicatorType: {},
                      IndicatorDetail: {
                        type: 'structure',
                        members: {
                          TTPsObservedDetail: {
                            type: 'structure',
                            members: {
                              Tactic: {},
                              Technique: {},
                              Procedure: {},
                              IpAddress: {},
                              APIName: {},
                              APISuccessCount: {
                                type: 'long'
                              },
                              APIFailureCount: {
                                type: 'long'
                              }
                            }
                          },
                          ImpossibleTravelDetail: {
                            type: 'structure',
                            members: {
                              StartingIpAddress: {},
                              EndingIpAddress: {},
                              StartingLocation: {},
                              EndingLocation: {},
                              HourlyTimeDelta: {
                                type: 'integer'
                              }
                            }
                          },
                          FlaggedIpAddressDetail: {
                            type: 'structure',
                            members: {
                              IpAddress: {},
                              Reason: {}
                            }
                          },
                          NewGeolocationDetail: {
                            type: 'structure',
                            members: {
                              Location: {},
                              IpAddress: {},
                              IsNewForEntireAccount: {
                                type: 'boolean'
                              }
                            }
                          },
                          NewAsoDetail: {
                            type: 'structure',
                            members: {
                              Aso: {},
                              IsNewForEntireAccount: {
                                type: 'boolean'
                              }
                            }
                          },
                          NewUserAgentDetail: {
                            type: 'structure',
                            members: {
                              UserAgent: {},
                              IsNewForEntireAccount: {
                                type: 'boolean'
                              }
                            }
                          },
                          RelatedFindingDetail: {
                            type: 'structure',
                            members: {
                              Arn: {},
                              Type: {},
                              IpAddress: {}
                            }
                          },
                          RelatedFindingGroupDetail: {
                            type: 'structure',
                            members: {
                              Id: {}
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
          ListInvestigations: {
            http: {
              requestUri: '/investigations/listInvestigations'
            },
            input: {
              type: 'structure',
              required: ['GraphArn'],
              members: {
                GraphArn: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                FilterCriteria: {
                  type: 'structure',
                  members: {
                    Severity: {
                      shape: 'S2y'
                    },
                    Status: {
                      shape: 'S2y'
                    },
                    State: {
                      shape: 'S2y'
                    },
                    EntityArn: {
                      shape: 'S2y'
                    },
                    CreatedTime: {
                      type: 'structure',
                      required: ['StartInclusive', 'EndInclusive'],
                      members: {
                        StartInclusive: {
                          shape: 'Se'
                        },
                        EndInclusive: {
                          shape: 'Se'
                        }
                      }
                    }
                  }
                },
                SortCriteria: {
                  type: 'structure',
                  members: {
                    Field: {},
                    SortOrder: {}
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                InvestigationDetails: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      InvestigationId: {},
                      Severity: {},
                      Status: {},
                      State: {},
                      CreatedTime: {
                        shape: 'Se'
                      },
                      EntityArn: {},
                      EntityType: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListInvitations: {
            http: {
              requestUri: '/invitations/list'
            },
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
                Invitations: {
                  shape: 'Sz'
                },
                NextToken: {}
              }
            }
          },
          ListMembers: {
            http: {
              requestUri: '/graph/members/list'
            },
            input: {
              type: 'structure',
              required: ['GraphArn'],
              members: {
                GraphArn: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                MemberDetails: {
                  shape: 'Sz'
                },
                NextToken: {}
              }
            }
          },
          ListOrganizationAdminAccounts: {
            http: {
              requestUri: '/orgs/adminAccountslist'
            },
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
                Administrators: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      AccountId: {},
                      GraphArn: {},
                      DelegationTime: {
                        shape: 'Se'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListTagsForResource: {
            http: {
              method: 'GET',
              requestUri: '/tags/{ResourceArn}',
              responseCode: 200
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
                  shape: 'So'
                }
              }
            }
          },
          RejectInvitation: {
            http: {
              requestUri: '/invitation/removal'
            },
            input: {
              type: 'structure',
              required: ['GraphArn'],
              members: {
                GraphArn: {}
              }
            }
          },
          StartInvestigation: {
            http: {
              requestUri: '/investigations/startInvestigation'
            },
            input: {
              type: 'structure',
              required: ['GraphArn', 'EntityArn', 'ScopeStartTime', 'ScopeEndTime'],
              members: {
                GraphArn: {},
                EntityArn: {},
                ScopeStartTime: {
                  shape: 'Se'
                },
                ScopeEndTime: {
                  shape: 'Se'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                InvestigationId: {}
              }
            }
          },
          StartMonitoringMember: {
            http: {
              requestUri: '/graph/member/monitoringstate'
            },
            input: {
              type: 'structure',
              required: ['GraphArn', 'AccountId'],
              members: {
                GraphArn: {},
                AccountId: {}
              }
            }
          },
          TagResource: {
            http: {
              requestUri: '/tags/{ResourceArn}',
              responseCode: 204
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
                  shape: 'So'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UntagResource: {
            http: {
              method: 'DELETE',
              requestUri: '/tags/{ResourceArn}',
              responseCode: 204
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
                  locationName: 'tagKeys',
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
          UpdateDatasourcePackages: {
            http: {
              requestUri: '/graph/datasources/update'
            },
            input: {
              type: 'structure',
              required: ['GraphArn', 'DatasourcePackages'],
              members: {
                GraphArn: {},
                DatasourcePackages: {
                  type: 'list',
                  member: {}
                }
              }
            }
          },
          UpdateInvestigationState: {
            http: {
              requestUri: '/investigations/updateInvestigationState'
            },
            input: {
              type: 'structure',
              required: ['GraphArn', 'InvestigationId', 'State'],
              members: {
                GraphArn: {},
                InvestigationId: {},
                State: {}
              }
            }
          },
          UpdateOrganizationConfiguration: {
            http: {
              requestUri: '/orgs/updateOrganizationConfiguration'
            },
            input: {
              type: 'structure',
              required: ['GraphArn'],
              members: {
                GraphArn: {},
                AutoEnable: {
                  type: 'boolean'
                }
              }
            }
          }
        },
        shapes: {
          S7: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                AccountId: {},
                GraphArn: {},
                DatasourcePackageIngestHistory: {
                  type: 'map',
                  key: {},
                  value: {
                    shape: 'Sb'
                  }
                }
              }
            }
          },
          Sb: {
            type: 'map',
            key: {},
            value: {
              type: 'structure',
              members: {
                Timestamp: {
                  shape: 'Se'
                }
              }
            }
          },
          Se: {
            type: 'timestamp',
            timestampFormat: 'iso8601'
          },
          Sf: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                AccountId: {},
                Reason: {}
              }
            }
          },
          So: {
            type: 'map',
            key: {},
            value: {}
          },
          Sx: {
            type: 'string',
            sensitive: true
          },
          Sz: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                AccountId: {},
                EmailAddress: {
                  shape: 'Sx'
                },
                GraphArn: {},
                MasterId: {
                  deprecated: true,
                  deprecatedMessage: 'This property is deprecated. Use AdministratorId instead.'
                },
                AdministratorId: {},
                Status: {},
                DisabledReason: {},
                InvitedTime: {
                  shape: 'Se'
                },
                UpdatedTime: {
                  shape: 'Se'
                },
                VolumeUsageInBytes: {
                  deprecated: true,
                  deprecatedMessage: 'This property is deprecated. Use VolumeUsageByDatasourcePackage instead.',
                  type: 'long'
                },
                VolumeUsageUpdatedTime: {
                  shape: 'Se',
                  deprecated: true,
                  deprecatedMessage: 'This property is deprecated. Use VolumeUsageByDatasourcePackage instead.'
                },
                PercentOfGraphUtilization: {
                  deprecated: true,
                  deprecatedMessage: 'This property is deprecated. Use VolumeUsageByDatasourcePackage instead.',
                  type: 'double'
                },
                PercentOfGraphUtilizationUpdatedTime: {
                  shape: 'Se',
                  deprecated: true,
                  deprecatedMessage: 'This property is deprecated. Use VolumeUsageByDatasourcePackage instead.'
                },
                InvitationType: {},
                VolumeUsageByDatasourcePackage: {
                  type: 'map',
                  key: {},
                  value: {
                    type: 'structure',
                    members: {
                      VolumeUsageInBytes: {
                        type: 'long'
                      },
                      VolumeUsageUpdateTime: {
                        shape: 'Se'
                      }
                    }
                  }
                },
                DatasourcePackageIngestStates: {
                  type: 'map',
                  key: {},
                  value: {}
                }
              }
            }
          },
          S1b: {
            type: 'list',
            member: {}
          },
          S2y: {
            type: 'structure',
            required: ['Value'],
            members: {
              Value: {}
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=11b5b08f489d1e3fb28bd97d85650bcfd05228b5.js.map