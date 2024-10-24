System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2018-04-01',
          endpointPrefix: 'route53resolver',
          jsonVersion: '1.1',
          protocol: 'json',
          protocols: ['json'],
          serviceAbbreviation: 'Route53Resolver',
          serviceFullName: 'Amazon Route 53 Resolver',
          serviceId: 'Route53Resolver',
          signatureVersion: 'v4',
          targetPrefix: 'Route53Resolver',
          uid: 'route53resolver-2018-04-01'
        },
        operations: {
          AssociateFirewallRuleGroup: {
            input: {
              type: 'structure',
              required: ['CreatorRequestId', 'FirewallRuleGroupId', 'VpcId', 'Priority', 'Name'],
              members: {
                CreatorRequestId: {
                  idempotencyToken: true
                },
                FirewallRuleGroupId: {},
                VpcId: {},
                Priority: {
                  type: 'integer'
                },
                Name: {},
                MutationProtection: {},
                Tags: {
                  shape: 'S7'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                FirewallRuleGroupAssociation: {
                  shape: 'Sc'
                }
              }
            }
          },
          AssociateResolverEndpointIpAddress: {
            input: {
              type: 'structure',
              required: ['ResolverEndpointId', 'IpAddress'],
              members: {
                ResolverEndpointId: {},
                IpAddress: {
                  shape: 'Sj'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ResolverEndpoint: {
                  shape: 'So'
                }
              }
            }
          },
          AssociateResolverQueryLogConfig: {
            input: {
              type: 'structure',
              required: ['ResolverQueryLogConfigId', 'ResourceId'],
              members: {
                ResolverQueryLogConfigId: {},
                ResourceId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ResolverQueryLogConfigAssociation: {
                  shape: 'S10'
                }
              }
            }
          },
          AssociateResolverRule: {
            input: {
              type: 'structure',
              required: ['ResolverRuleId', 'VPCId'],
              members: {
                ResolverRuleId: {},
                Name: {},
                VPCId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ResolverRuleAssociation: {
                  shape: 'S16'
                }
              }
            }
          },
          CreateFirewallDomainList: {
            input: {
              type: 'structure',
              required: ['CreatorRequestId', 'Name'],
              members: {
                CreatorRequestId: {
                  idempotencyToken: true
                },
                Name: {},
                Tags: {
                  shape: 'S7'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                FirewallDomainList: {
                  shape: 'S1a'
                }
              }
            }
          },
          CreateFirewallRule: {
            input: {
              type: 'structure',
              required: ['CreatorRequestId', 'FirewallRuleGroupId', 'FirewallDomainListId', 'Priority', 'Action', 'Name'],
              members: {
                CreatorRequestId: {
                  idempotencyToken: true
                },
                FirewallRuleGroupId: {},
                FirewallDomainListId: {},
                Priority: {
                  type: 'integer'
                },
                Action: {},
                BlockResponse: {},
                BlockOverrideDomain: {},
                BlockOverrideDnsType: {},
                BlockOverrideTtl: {
                  type: 'integer'
                },
                Name: {},
                FirewallDomainRedirectionAction: {},
                Qtype: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                FirewallRule: {
                  shape: 'S1m'
                }
              }
            }
          },
          CreateFirewallRuleGroup: {
            input: {
              type: 'structure',
              required: ['CreatorRequestId', 'Name'],
              members: {
                CreatorRequestId: {
                  idempotencyToken: true
                },
                Name: {},
                Tags: {
                  shape: 'S7'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                FirewallRuleGroup: {
                  shape: 'S1p'
                }
              }
            }
          },
          CreateOutpostResolver: {
            input: {
              type: 'structure',
              required: ['CreatorRequestId', 'Name', 'PreferredInstanceType', 'OutpostArn'],
              members: {
                CreatorRequestId: {},
                Name: {},
                InstanceCount: {
                  type: 'integer'
                },
                PreferredInstanceType: {},
                OutpostArn: {},
                Tags: {
                  shape: 'S7'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                OutpostResolver: {
                  shape: 'S1x'
                }
              }
            }
          },
          CreateResolverEndpoint: {
            input: {
              type: 'structure',
              required: ['CreatorRequestId', 'SecurityGroupIds', 'Direction', 'IpAddresses'],
              members: {
                CreatorRequestId: {},
                Name: {},
                SecurityGroupIds: {
                  shape: 'Sp'
                },
                Direction: {},
                IpAddresses: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['SubnetId'],
                    members: {
                      SubnetId: {},
                      Ip: {},
                      Ipv6: {}
                    }
                  }
                },
                OutpostArn: {},
                PreferredInstanceType: {},
                Tags: {
                  shape: 'S7'
                },
                ResolverEndpointType: {},
                Protocols: {
                  shape: 'Sw'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ResolverEndpoint: {
                  shape: 'So'
                }
              }
            }
          },
          CreateResolverQueryLogConfig: {
            input: {
              type: 'structure',
              required: ['Name', 'DestinationArn', 'CreatorRequestId'],
              members: {
                Name: {},
                DestinationArn: {},
                CreatorRequestId: {
                  idempotencyToken: true
                },
                Tags: {
                  shape: 'S7'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ResolverQueryLogConfig: {
                  shape: 'S28'
                }
              }
            }
          },
          CreateResolverRule: {
            input: {
              type: 'structure',
              required: ['CreatorRequestId', 'RuleType'],
              members: {
                CreatorRequestId: {},
                Name: {},
                RuleType: {},
                DomainName: {},
                TargetIps: {
                  shape: 'S2e'
                },
                ResolverEndpointId: {},
                Tags: {
                  shape: 'S7'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ResolverRule: {
                  shape: 'S2i'
                }
              }
            }
          },
          DeleteFirewallDomainList: {
            input: {
              type: 'structure',
              required: ['FirewallDomainListId'],
              members: {
                FirewallDomainListId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                FirewallDomainList: {
                  shape: 'S1a'
                }
              }
            }
          },
          DeleteFirewallRule: {
            input: {
              type: 'structure',
              required: ['FirewallRuleGroupId', 'FirewallDomainListId'],
              members: {
                FirewallRuleGroupId: {},
                FirewallDomainListId: {},
                Qtype: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                FirewallRule: {
                  shape: 'S1m'
                }
              }
            }
          },
          DeleteFirewallRuleGroup: {
            input: {
              type: 'structure',
              required: ['FirewallRuleGroupId'],
              members: {
                FirewallRuleGroupId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                FirewallRuleGroup: {
                  shape: 'S1p'
                }
              }
            }
          },
          DeleteOutpostResolver: {
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                OutpostResolver: {
                  shape: 'S1x'
                }
              }
            }
          },
          DeleteResolverEndpoint: {
            input: {
              type: 'structure',
              required: ['ResolverEndpointId'],
              members: {
                ResolverEndpointId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ResolverEndpoint: {
                  shape: 'So'
                }
              }
            }
          },
          DeleteResolverQueryLogConfig: {
            input: {
              type: 'structure',
              required: ['ResolverQueryLogConfigId'],
              members: {
                ResolverQueryLogConfigId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ResolverQueryLogConfig: {
                  shape: 'S28'
                }
              }
            }
          },
          DeleteResolverRule: {
            input: {
              type: 'structure',
              required: ['ResolverRuleId'],
              members: {
                ResolverRuleId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ResolverRule: {
                  shape: 'S2i'
                }
              }
            }
          },
          DisassociateFirewallRuleGroup: {
            input: {
              type: 'structure',
              required: ['FirewallRuleGroupAssociationId'],
              members: {
                FirewallRuleGroupAssociationId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                FirewallRuleGroupAssociation: {
                  shape: 'Sc'
                }
              }
            }
          },
          DisassociateResolverEndpointIpAddress: {
            input: {
              type: 'structure',
              required: ['ResolverEndpointId', 'IpAddress'],
              members: {
                ResolverEndpointId: {},
                IpAddress: {
                  shape: 'Sj'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ResolverEndpoint: {
                  shape: 'So'
                }
              }
            }
          },
          DisassociateResolverQueryLogConfig: {
            input: {
              type: 'structure',
              required: ['ResolverQueryLogConfigId', 'ResourceId'],
              members: {
                ResolverQueryLogConfigId: {},
                ResourceId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ResolverQueryLogConfigAssociation: {
                  shape: 'S10'
                }
              }
            }
          },
          DisassociateResolverRule: {
            input: {
              type: 'structure',
              required: ['VPCId', 'ResolverRuleId'],
              members: {
                VPCId: {},
                ResolverRuleId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ResolverRuleAssociation: {
                  shape: 'S16'
                }
              }
            }
          },
          GetFirewallConfig: {
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
                FirewallConfig: {
                  shape: 'S38'
                }
              }
            }
          },
          GetFirewallDomainList: {
            input: {
              type: 'structure',
              required: ['FirewallDomainListId'],
              members: {
                FirewallDomainListId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                FirewallDomainList: {
                  shape: 'S1a'
                }
              }
            }
          },
          GetFirewallRuleGroup: {
            input: {
              type: 'structure',
              required: ['FirewallRuleGroupId'],
              members: {
                FirewallRuleGroupId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                FirewallRuleGroup: {
                  shape: 'S1p'
                }
              }
            }
          },
          GetFirewallRuleGroupAssociation: {
            input: {
              type: 'structure',
              required: ['FirewallRuleGroupAssociationId'],
              members: {
                FirewallRuleGroupAssociationId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                FirewallRuleGroupAssociation: {
                  shape: 'Sc'
                }
              }
            }
          },
          GetFirewallRuleGroupPolicy: {
            input: {
              type: 'structure',
              required: ['Arn'],
              members: {
                Arn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                FirewallRuleGroupPolicy: {}
              }
            }
          },
          GetOutpostResolver: {
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                OutpostResolver: {
                  shape: 'S1x'
                }
              }
            }
          },
          GetResolverConfig: {
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
                ResolverConfig: {
                  shape: 'S3n'
                }
              }
            }
          },
          GetResolverDnssecConfig: {
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
                ResolverDNSSECConfig: {
                  shape: 'S3r'
                }
              }
            }
          },
          GetResolverEndpoint: {
            input: {
              type: 'structure',
              required: ['ResolverEndpointId'],
              members: {
                ResolverEndpointId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ResolverEndpoint: {
                  shape: 'So'
                }
              }
            }
          },
          GetResolverQueryLogConfig: {
            input: {
              type: 'structure',
              required: ['ResolverQueryLogConfigId'],
              members: {
                ResolverQueryLogConfigId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ResolverQueryLogConfig: {
                  shape: 'S28'
                }
              }
            }
          },
          GetResolverQueryLogConfigAssociation: {
            input: {
              type: 'structure',
              required: ['ResolverQueryLogConfigAssociationId'],
              members: {
                ResolverQueryLogConfigAssociationId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ResolverQueryLogConfigAssociation: {
                  shape: 'S10'
                }
              }
            }
          },
          GetResolverQueryLogConfigPolicy: {
            input: {
              type: 'structure',
              required: ['Arn'],
              members: {
                Arn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ResolverQueryLogConfigPolicy: {}
              }
            }
          },
          GetResolverRule: {
            input: {
              type: 'structure',
              required: ['ResolverRuleId'],
              members: {
                ResolverRuleId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ResolverRule: {
                  shape: 'S2i'
                }
              }
            }
          },
          GetResolverRuleAssociation: {
            input: {
              type: 'structure',
              required: ['ResolverRuleAssociationId'],
              members: {
                ResolverRuleAssociationId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ResolverRuleAssociation: {
                  shape: 'S16'
                }
              }
            }
          },
          GetResolverRulePolicy: {
            input: {
              type: 'structure',
              required: ['Arn'],
              members: {
                Arn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ResolverRulePolicy: {}
              }
            }
          },
          ImportFirewallDomains: {
            input: {
              type: 'structure',
              required: ['FirewallDomainListId', 'Operation', 'DomainFileUrl'],
              members: {
                FirewallDomainListId: {},
                Operation: {},
                DomainFileUrl: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Id: {},
                Name: {},
                Status: {},
                StatusMessage: {}
              }
            }
          },
          ListFirewallConfigs: {
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
                NextToken: {},
                FirewallConfigs: {
                  type: 'list',
                  member: {
                    shape: 'S38'
                  }
                }
              }
            }
          },
          ListFirewallDomainLists: {
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
                NextToken: {},
                FirewallDomainLists: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Id: {},
                      Arn: {},
                      Name: {},
                      CreatorRequestId: {},
                      ManagedOwnerName: {}
                    }
                  }
                }
              }
            }
          },
          ListFirewallDomains: {
            input: {
              type: 'structure',
              required: ['FirewallDomainListId'],
              members: {
                FirewallDomainListId: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                Domains: {
                  shape: 'S4q'
                }
              }
            }
          },
          ListFirewallRuleGroupAssociations: {
            input: {
              type: 'structure',
              members: {
                FirewallRuleGroupId: {},
                VpcId: {},
                Priority: {
                  type: 'integer'
                },
                Status: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                FirewallRuleGroupAssociations: {
                  type: 'list',
                  member: {
                    shape: 'Sc'
                  }
                }
              }
            }
          },
          ListFirewallRuleGroups: {
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
                NextToken: {},
                FirewallRuleGroups: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Id: {},
                      Arn: {},
                      Name: {},
                      OwnerId: {},
                      CreatorRequestId: {},
                      ShareStatus: {}
                    }
                  }
                }
              }
            }
          },
          ListFirewallRules: {
            input: {
              type: 'structure',
              required: ['FirewallRuleGroupId'],
              members: {
                FirewallRuleGroupId: {},
                Priority: {
                  type: 'integer'
                },
                Action: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                FirewallRules: {
                  type: 'list',
                  member: {
                    shape: 'S1m'
                  }
                }
              }
            }
          },
          ListOutpostResolvers: {
            input: {
              type: 'structure',
              members: {
                OutpostArn: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                OutpostResolvers: {
                  type: 'list',
                  member: {
                    shape: 'S1x'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListResolverConfigs: {
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
                NextToken: {},
                ResolverConfigs: {
                  type: 'list',
                  member: {
                    shape: 'S3n'
                  }
                }
              }
            }
          },
          ListResolverDnssecConfigs: {
            input: {
              type: 'structure',
              members: {
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {},
                Filters: {
                  shape: 'S5a'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                ResolverDnssecConfigs: {
                  type: 'list',
                  member: {
                    shape: 'S3r'
                  }
                }
              }
            }
          },
          ListResolverEndpointIpAddresses: {
            input: {
              type: 'structure',
              required: ['ResolverEndpointId'],
              members: {
                ResolverEndpointId: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                IpAddresses: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      IpId: {},
                      SubnetId: {},
                      Ip: {},
                      Ipv6: {},
                      Status: {},
                      StatusMessage: {},
                      CreationTime: {},
                      ModificationTime: {}
                    }
                  }
                }
              }
            }
          },
          ListResolverEndpoints: {
            input: {
              type: 'structure',
              members: {
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {},
                Filters: {
                  shape: 'S5a'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                ResolverEndpoints: {
                  type: 'list',
                  member: {
                    shape: 'So'
                  }
                }
              }
            }
          },
          ListResolverQueryLogConfigAssociations: {
            input: {
              type: 'structure',
              members: {
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {},
                Filters: {
                  shape: 'S5a'
                },
                SortBy: {},
                SortOrder: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                TotalCount: {
                  type: 'integer'
                },
                TotalFilteredCount: {
                  type: 'integer'
                },
                ResolverQueryLogConfigAssociations: {
                  type: 'list',
                  member: {
                    shape: 'S10'
                  }
                }
              }
            }
          },
          ListResolverQueryLogConfigs: {
            input: {
              type: 'structure',
              members: {
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {},
                Filters: {
                  shape: 'S5a'
                },
                SortBy: {},
                SortOrder: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                TotalCount: {
                  type: 'integer'
                },
                TotalFilteredCount: {
                  type: 'integer'
                },
                ResolverQueryLogConfigs: {
                  type: 'list',
                  member: {
                    shape: 'S28'
                  }
                }
              }
            }
          },
          ListResolverRuleAssociations: {
            input: {
              type: 'structure',
              members: {
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {},
                Filters: {
                  shape: 'S5a'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                ResolverRuleAssociations: {
                  type: 'list',
                  member: {
                    shape: 'S16'
                  }
                }
              }
            }
          },
          ListResolverRules: {
            input: {
              type: 'structure',
              members: {
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {},
                Filters: {
                  shape: 'S5a'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                ResolverRules: {
                  type: 'list',
                  member: {
                    shape: 'S2i'
                  }
                }
              }
            }
          },
          ListTagsForResource: {
            input: {
              type: 'structure',
              required: ['ResourceArn'],
              members: {
                ResourceArn: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Tags: {
                  shape: 'S7'
                },
                NextToken: {}
              }
            }
          },
          PutFirewallRuleGroupPolicy: {
            input: {
              type: 'structure',
              required: ['Arn', 'FirewallRuleGroupPolicy'],
              members: {
                Arn: {},
                FirewallRuleGroupPolicy: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ReturnValue: {
                  type: 'boolean'
                }
              }
            }
          },
          PutResolverQueryLogConfigPolicy: {
            input: {
              type: 'structure',
              required: ['Arn', 'ResolverQueryLogConfigPolicy'],
              members: {
                Arn: {},
                ResolverQueryLogConfigPolicy: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ReturnValue: {
                  type: 'boolean'
                }
              }
            }
          },
          PutResolverRulePolicy: {
            input: {
              type: 'structure',
              required: ['Arn', 'ResolverRulePolicy'],
              members: {
                Arn: {},
                ResolverRulePolicy: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ReturnValue: {
                  type: 'boolean'
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
                  shape: 'S7'
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
          UpdateFirewallConfig: {
            input: {
              type: 'structure',
              required: ['ResourceId', 'FirewallFailOpen'],
              members: {
                ResourceId: {},
                FirewallFailOpen: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                FirewallConfig: {
                  shape: 'S38'
                }
              }
            }
          },
          UpdateFirewallDomains: {
            input: {
              type: 'structure',
              required: ['FirewallDomainListId', 'Operation', 'Domains'],
              members: {
                FirewallDomainListId: {},
                Operation: {},
                Domains: {
                  shape: 'S4q'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Id: {},
                Name: {},
                Status: {},
                StatusMessage: {}
              }
            }
          },
          UpdateFirewallRule: {
            input: {
              type: 'structure',
              required: ['FirewallRuleGroupId', 'FirewallDomainListId'],
              members: {
                FirewallRuleGroupId: {},
                FirewallDomainListId: {},
                Priority: {
                  type: 'integer'
                },
                Action: {},
                BlockResponse: {},
                BlockOverrideDomain: {},
                BlockOverrideDnsType: {},
                BlockOverrideTtl: {
                  type: 'integer'
                },
                Name: {},
                FirewallDomainRedirectionAction: {},
                Qtype: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                FirewallRule: {
                  shape: 'S1m'
                }
              }
            }
          },
          UpdateFirewallRuleGroupAssociation: {
            input: {
              type: 'structure',
              required: ['FirewallRuleGroupAssociationId'],
              members: {
                FirewallRuleGroupAssociationId: {},
                Priority: {
                  type: 'integer'
                },
                MutationProtection: {},
                Name: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                FirewallRuleGroupAssociation: {
                  shape: 'Sc'
                }
              }
            }
          },
          UpdateOutpostResolver: {
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {},
                Name: {},
                InstanceCount: {
                  type: 'integer'
                },
                PreferredInstanceType: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                OutpostResolver: {
                  shape: 'S1x'
                }
              }
            }
          },
          UpdateResolverConfig: {
            input: {
              type: 'structure',
              required: ['ResourceId', 'AutodefinedReverseFlag'],
              members: {
                ResourceId: {},
                AutodefinedReverseFlag: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ResolverConfig: {
                  shape: 'S3n'
                }
              }
            }
          },
          UpdateResolverDnssecConfig: {
            input: {
              type: 'structure',
              required: ['ResourceId', 'Validation'],
              members: {
                ResourceId: {},
                Validation: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ResolverDNSSECConfig: {
                  shape: 'S3r'
                }
              }
            }
          },
          UpdateResolverEndpoint: {
            input: {
              type: 'structure',
              required: ['ResolverEndpointId'],
              members: {
                ResolverEndpointId: {},
                Name: {},
                ResolverEndpointType: {},
                UpdateIpAddresses: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['IpId', 'Ipv6'],
                    members: {
                      IpId: {},
                      Ipv6: {}
                    }
                  }
                },
                Protocols: {
                  shape: 'Sw'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ResolverEndpoint: {
                  shape: 'So'
                }
              }
            }
          },
          UpdateResolverRule: {
            input: {
              type: 'structure',
              required: ['ResolverRuleId', 'Config'],
              members: {
                ResolverRuleId: {},
                Config: {
                  type: 'structure',
                  members: {
                    Name: {},
                    TargetIps: {
                      shape: 'S2e'
                    },
                    ResolverEndpointId: {}
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ResolverRule: {
                  shape: 'S2i'
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
              required: ['Key', 'Value'],
              members: {
                Key: {},
                Value: {}
              }
            }
          },
          Sc: {
            type: 'structure',
            members: {
              Id: {},
              Arn: {},
              FirewallRuleGroupId: {},
              VpcId: {},
              Name: {},
              Priority: {
                type: 'integer'
              },
              MutationProtection: {},
              ManagedOwnerName: {},
              Status: {},
              StatusMessage: {},
              CreatorRequestId: {},
              CreationTime: {},
              ModificationTime: {}
            }
          },
          Sj: {
            type: 'structure',
            members: {
              IpId: {},
              SubnetId: {},
              Ip: {},
              Ipv6: {}
            }
          },
          So: {
            type: 'structure',
            members: {
              Id: {},
              CreatorRequestId: {},
              Arn: {},
              Name: {},
              SecurityGroupIds: {
                shape: 'Sp'
              },
              Direction: {},
              IpAddressCount: {
                type: 'integer'
              },
              HostVPCId: {},
              Status: {},
              StatusMessage: {},
              CreationTime: {},
              ModificationTime: {},
              OutpostArn: {},
              PreferredInstanceType: {},
              ResolverEndpointType: {},
              Protocols: {
                shape: 'Sw'
              }
            }
          },
          Sp: {
            type: 'list',
            member: {}
          },
          Sw: {
            type: 'list',
            member: {}
          },
          S10: {
            type: 'structure',
            members: {
              Id: {},
              ResolverQueryLogConfigId: {},
              ResourceId: {},
              Status: {},
              Error: {},
              ErrorMessage: {},
              CreationTime: {}
            }
          },
          S16: {
            type: 'structure',
            members: {
              Id: {},
              ResolverRuleId: {},
              Name: {},
              VPCId: {},
              Status: {},
              StatusMessage: {}
            }
          },
          S1a: {
            type: 'structure',
            members: {
              Id: {},
              Arn: {},
              Name: {},
              DomainCount: {
                type: 'integer'
              },
              Status: {},
              StatusMessage: {},
              ManagedOwnerName: {},
              CreatorRequestId: {},
              CreationTime: {},
              ModificationTime: {}
            }
          },
          S1m: {
            type: 'structure',
            members: {
              FirewallRuleGroupId: {},
              FirewallDomainListId: {},
              Name: {},
              Priority: {
                type: 'integer'
              },
              Action: {},
              BlockResponse: {},
              BlockOverrideDomain: {},
              BlockOverrideDnsType: {},
              BlockOverrideTtl: {
                type: 'integer'
              },
              CreatorRequestId: {},
              CreationTime: {},
              ModificationTime: {},
              FirewallDomainRedirectionAction: {},
              Qtype: {}
            }
          },
          S1p: {
            type: 'structure',
            members: {
              Id: {},
              Arn: {},
              Name: {},
              RuleCount: {
                type: 'integer'
              },
              Status: {},
              StatusMessage: {},
              OwnerId: {},
              CreatorRequestId: {},
              ShareStatus: {},
              CreationTime: {},
              ModificationTime: {}
            }
          },
          S1x: {
            type: 'structure',
            members: {
              Arn: {},
              CreationTime: {},
              ModificationTime: {},
              CreatorRequestId: {},
              Id: {},
              InstanceCount: {
                type: 'integer'
              },
              PreferredInstanceType: {},
              Name: {},
              Status: {},
              StatusMessage: {},
              OutpostArn: {}
            }
          },
          S28: {
            type: 'structure',
            members: {
              Id: {},
              OwnerId: {},
              Status: {},
              ShareStatus: {},
              AssociationCount: {
                type: 'integer'
              },
              Arn: {},
              Name: {},
              DestinationArn: {},
              CreatorRequestId: {},
              CreationTime: {}
            }
          },
          S2e: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Ip: {},
                Port: {
                  type: 'integer'
                },
                Ipv6: {},
                Protocol: {}
              }
            }
          },
          S2i: {
            type: 'structure',
            members: {
              Id: {},
              CreatorRequestId: {},
              Arn: {},
              DomainName: {},
              Status: {},
              StatusMessage: {},
              RuleType: {},
              Name: {},
              TargetIps: {
                shape: 'S2e'
              },
              ResolverEndpointId: {},
              OwnerId: {},
              ShareStatus: {},
              CreationTime: {},
              ModificationTime: {}
            }
          },
          S38: {
            type: 'structure',
            members: {
              Id: {},
              ResourceId: {},
              OwnerId: {},
              FirewallFailOpen: {}
            }
          },
          S3n: {
            type: 'structure',
            members: {
              Id: {},
              ResourceId: {},
              OwnerId: {},
              AutodefinedReverse: {}
            }
          },
          S3r: {
            type: 'structure',
            members: {
              Id: {},
              OwnerId: {},
              ResourceId: {},
              ValidationStatus: {}
            }
          },
          S4q: {
            type: 'list',
            member: {}
          },
          S5a: {
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
          }
        }
      });
    }
  };
});
//# sourceMappingURL=b3ff0d73d74cf08e39d41ad3923a82d9b7490c99.js.map