System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2020-11-12',
          endpointPrefix: 'network-firewall',
          jsonVersion: '1.0',
          protocol: 'json',
          serviceAbbreviation: 'Network Firewall',
          serviceFullName: 'AWS Network Firewall',
          serviceId: 'Network Firewall',
          signatureVersion: 'v4',
          signingName: 'network-firewall',
          targetPrefix: 'NetworkFirewall_20201112',
          uid: 'network-firewall-2020-11-12'
        },
        operations: {
          AssociateFirewallPolicy: {
            input: {
              type: 'structure',
              required: ['FirewallPolicyArn'],
              members: {
                UpdateToken: {},
                FirewallArn: {},
                FirewallName: {},
                FirewallPolicyArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                FirewallArn: {},
                FirewallName: {},
                FirewallPolicyArn: {},
                UpdateToken: {}
              }
            }
          },
          AssociateSubnets: {
            input: {
              type: 'structure',
              required: ['SubnetMappings'],
              members: {
                UpdateToken: {},
                FirewallArn: {},
                FirewallName: {},
                SubnetMappings: {
                  shape: 'S7'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                FirewallArn: {},
                FirewallName: {},
                SubnetMappings: {
                  shape: 'S7'
                },
                UpdateToken: {}
              }
            }
          },
          CreateFirewall: {
            input: {
              type: 'structure',
              required: ['FirewallName', 'FirewallPolicyArn', 'VpcId', 'SubnetMappings'],
              members: {
                FirewallName: {},
                FirewallPolicyArn: {},
                VpcId: {},
                SubnetMappings: {
                  shape: 'S7'
                },
                DeleteProtection: {
                  type: 'boolean'
                },
                SubnetChangeProtection: {
                  type: 'boolean'
                },
                FirewallPolicyChangeProtection: {
                  type: 'boolean'
                },
                Description: {},
                Tags: {
                  shape: 'Sg'
                },
                EncryptionConfiguration: {
                  shape: 'Sk'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Firewall: {
                  shape: 'So'
                },
                FirewallStatus: {
                  shape: 'Sq'
                }
              }
            }
          },
          CreateFirewallPolicy: {
            input: {
              type: 'structure',
              required: ['FirewallPolicyName', 'FirewallPolicy'],
              members: {
                FirewallPolicyName: {},
                FirewallPolicy: {
                  shape: 'S1b'
                },
                Description: {},
                Tags: {
                  shape: 'Sg'
                },
                DryRun: {
                  type: 'boolean'
                },
                EncryptionConfiguration: {
                  shape: 'Sk'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['UpdateToken', 'FirewallPolicyResponse'],
              members: {
                UpdateToken: {},
                FirewallPolicyResponse: {
                  shape: 'S23'
                }
              }
            }
          },
          CreateRuleGroup: {
            input: {
              type: 'structure',
              required: ['RuleGroupName', 'Type', 'Capacity'],
              members: {
                RuleGroupName: {},
                RuleGroup: {
                  shape: 'S29'
                },
                Rules: {},
                Type: {},
                Description: {},
                Capacity: {
                  type: 'integer'
                },
                Tags: {
                  shape: 'Sg'
                },
                DryRun: {
                  type: 'boolean'
                },
                EncryptionConfiguration: {
                  shape: 'Sk'
                },
                SourceMetadata: {
                  shape: 'S3l'
                },
                AnalyzeRuleGroup: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['UpdateToken', 'RuleGroupResponse'],
              members: {
                UpdateToken: {},
                RuleGroupResponse: {
                  shape: 'S3n'
                }
              }
            }
          },
          CreateTLSInspectionConfiguration: {
            input: {
              type: 'structure',
              required: ['TLSInspectionConfigurationName', 'TLSInspectionConfiguration'],
              members: {
                TLSInspectionConfigurationName: {},
                TLSInspectionConfiguration: {
                  shape: 'S3t'
                },
                Description: {},
                Tags: {
                  shape: 'Sg'
                },
                EncryptionConfiguration: {
                  shape: 'Sk'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['UpdateToken', 'TLSInspectionConfigurationResponse'],
              members: {
                UpdateToken: {},
                TLSInspectionConfigurationResponse: {
                  shape: 'S43'
                }
              }
            }
          },
          DeleteFirewall: {
            input: {
              type: 'structure',
              members: {
                FirewallName: {},
                FirewallArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Firewall: {
                  shape: 'So'
                },
                FirewallStatus: {
                  shape: 'Sq'
                }
              }
            }
          },
          DeleteFirewallPolicy: {
            input: {
              type: 'structure',
              members: {
                FirewallPolicyName: {},
                FirewallPolicyArn: {}
              }
            },
            output: {
              type: 'structure',
              required: ['FirewallPolicyResponse'],
              members: {
                FirewallPolicyResponse: {
                  shape: 'S23'
                }
              }
            }
          },
          DeleteResourcePolicy: {
            input: {
              type: 'structure',
              required: ['ResourceArn'],
              members: {
                ResourceArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteRuleGroup: {
            input: {
              type: 'structure',
              members: {
                RuleGroupName: {},
                RuleGroupArn: {},
                Type: {}
              }
            },
            output: {
              type: 'structure',
              required: ['RuleGroupResponse'],
              members: {
                RuleGroupResponse: {
                  shape: 'S3n'
                }
              }
            }
          },
          DeleteTLSInspectionConfiguration: {
            input: {
              type: 'structure',
              members: {
                TLSInspectionConfigurationArn: {},
                TLSInspectionConfigurationName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['TLSInspectionConfigurationResponse'],
              members: {
                TLSInspectionConfigurationResponse: {
                  shape: 'S43'
                }
              }
            }
          },
          DescribeFirewall: {
            input: {
              type: 'structure',
              members: {
                FirewallName: {},
                FirewallArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                UpdateToken: {},
                Firewall: {
                  shape: 'So'
                },
                FirewallStatus: {
                  shape: 'Sq'
                }
              }
            }
          },
          DescribeFirewallPolicy: {
            input: {
              type: 'structure',
              members: {
                FirewallPolicyName: {},
                FirewallPolicyArn: {}
              }
            },
            output: {
              type: 'structure',
              required: ['UpdateToken', 'FirewallPolicyResponse'],
              members: {
                UpdateToken: {},
                FirewallPolicyResponse: {
                  shape: 'S23'
                },
                FirewallPolicy: {
                  shape: 'S1b'
                }
              }
            }
          },
          DescribeLoggingConfiguration: {
            input: {
              type: 'structure',
              members: {
                FirewallArn: {},
                FirewallName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                FirewallArn: {},
                LoggingConfiguration: {
                  shape: 'S4n'
                }
              }
            }
          },
          DescribeResourcePolicy: {
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
                Policy: {}
              }
            }
          },
          DescribeRuleGroup: {
            input: {
              type: 'structure',
              members: {
                RuleGroupName: {},
                RuleGroupArn: {},
                Type: {},
                AnalyzeRuleGroup: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['UpdateToken', 'RuleGroupResponse'],
              members: {
                UpdateToken: {},
                RuleGroup: {
                  shape: 'S29'
                },
                RuleGroupResponse: {
                  shape: 'S3n'
                }
              }
            }
          },
          DescribeRuleGroupMetadata: {
            input: {
              type: 'structure',
              members: {
                RuleGroupName: {},
                RuleGroupArn: {},
                Type: {}
              }
            },
            output: {
              type: 'structure',
              required: ['RuleGroupArn', 'RuleGroupName'],
              members: {
                RuleGroupArn: {},
                RuleGroupName: {},
                Description: {},
                Type: {},
                Capacity: {
                  type: 'integer'
                },
                StatefulRuleOptions: {
                  shape: 'S3j'
                },
                LastModifiedTime: {
                  type: 'timestamp'
                }
              }
            }
          },
          DescribeTLSInspectionConfiguration: {
            input: {
              type: 'structure',
              members: {
                TLSInspectionConfigurationArn: {},
                TLSInspectionConfigurationName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['UpdateToken', 'TLSInspectionConfigurationResponse'],
              members: {
                UpdateToken: {},
                TLSInspectionConfiguration: {
                  shape: 'S3t'
                },
                TLSInspectionConfigurationResponse: {
                  shape: 'S43'
                }
              }
            }
          },
          DisassociateSubnets: {
            input: {
              type: 'structure',
              required: ['SubnetIds'],
              members: {
                UpdateToken: {},
                FirewallArn: {},
                FirewallName: {},
                SubnetIds: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                FirewallArn: {},
                FirewallName: {},
                SubnetMappings: {
                  shape: 'S7'
                },
                UpdateToken: {}
              }
            }
          },
          ListFirewallPolicies: {
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
                NextToken: {},
                FirewallPolicies: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Name: {},
                      Arn: {}
                    }
                  }
                }
              }
            }
          },
          ListFirewalls: {
            input: {
              type: 'structure',
              members: {
                NextToken: {},
                VpcIds: {
                  type: 'list',
                  member: {}
                },
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                Firewalls: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      FirewallName: {},
                      FirewallArn: {}
                    }
                  }
                }
              }
            }
          },
          ListRuleGroups: {
            input: {
              type: 'structure',
              members: {
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                Scope: {},
                ManagedType: {},
                Type: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                RuleGroups: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Name: {},
                      Arn: {}
                    }
                  }
                }
              }
            }
          },
          ListTLSInspectionConfigurations: {
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
                NextToken: {},
                TLSInspectionConfigurations: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Name: {},
                      Arn: {}
                    }
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
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                ResourceArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                Tags: {
                  shape: 'Sg'
                }
              }
            }
          },
          PutResourcePolicy: {
            input: {
              type: 'structure',
              required: ['ResourceArn', 'Policy'],
              members: {
                ResourceArn: {},
                Policy: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          TagResource: {
            input: {
              type: 'structure',
              required: ['ResourceArn', 'Tags'],
              members: {
                ResourceArn: {},
                Tags: {
                  shape: 'Sg'
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
          UpdateFirewallDeleteProtection: {
            input: {
              type: 'structure',
              required: ['DeleteProtection'],
              members: {
                UpdateToken: {},
                FirewallArn: {},
                FirewallName: {},
                DeleteProtection: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                FirewallArn: {},
                FirewallName: {},
                DeleteProtection: {
                  type: 'boolean'
                },
                UpdateToken: {}
              }
            }
          },
          UpdateFirewallDescription: {
            input: {
              type: 'structure',
              members: {
                UpdateToken: {},
                FirewallArn: {},
                FirewallName: {},
                Description: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                FirewallArn: {},
                FirewallName: {},
                Description: {},
                UpdateToken: {}
              }
            }
          },
          UpdateFirewallEncryptionConfiguration: {
            input: {
              type: 'structure',
              members: {
                UpdateToken: {},
                FirewallArn: {},
                FirewallName: {},
                EncryptionConfiguration: {
                  shape: 'Sk'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                FirewallArn: {},
                FirewallName: {},
                UpdateToken: {},
                EncryptionConfiguration: {
                  shape: 'Sk'
                }
              }
            }
          },
          UpdateFirewallPolicy: {
            input: {
              type: 'structure',
              required: ['UpdateToken', 'FirewallPolicy'],
              members: {
                UpdateToken: {},
                FirewallPolicyArn: {},
                FirewallPolicyName: {},
                FirewallPolicy: {
                  shape: 'S1b'
                },
                Description: {},
                DryRun: {
                  type: 'boolean'
                },
                EncryptionConfiguration: {
                  shape: 'Sk'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['UpdateToken', 'FirewallPolicyResponse'],
              members: {
                UpdateToken: {},
                FirewallPolicyResponse: {
                  shape: 'S23'
                }
              }
            }
          },
          UpdateFirewallPolicyChangeProtection: {
            input: {
              type: 'structure',
              required: ['FirewallPolicyChangeProtection'],
              members: {
                UpdateToken: {},
                FirewallArn: {},
                FirewallName: {},
                FirewallPolicyChangeProtection: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                UpdateToken: {},
                FirewallArn: {},
                FirewallName: {},
                FirewallPolicyChangeProtection: {
                  type: 'boolean'
                }
              }
            }
          },
          UpdateLoggingConfiguration: {
            input: {
              type: 'structure',
              members: {
                FirewallArn: {},
                FirewallName: {},
                LoggingConfiguration: {
                  shape: 'S4n'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                FirewallArn: {},
                FirewallName: {},
                LoggingConfiguration: {
                  shape: 'S4n'
                }
              }
            }
          },
          UpdateRuleGroup: {
            input: {
              type: 'structure',
              required: ['UpdateToken'],
              members: {
                UpdateToken: {},
                RuleGroupArn: {},
                RuleGroupName: {},
                RuleGroup: {
                  shape: 'S29'
                },
                Rules: {},
                Type: {},
                Description: {},
                DryRun: {
                  type: 'boolean'
                },
                EncryptionConfiguration: {
                  shape: 'Sk'
                },
                SourceMetadata: {
                  shape: 'S3l'
                },
                AnalyzeRuleGroup: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['UpdateToken', 'RuleGroupResponse'],
              members: {
                UpdateToken: {},
                RuleGroupResponse: {
                  shape: 'S3n'
                }
              }
            }
          },
          UpdateSubnetChangeProtection: {
            input: {
              type: 'structure',
              required: ['SubnetChangeProtection'],
              members: {
                UpdateToken: {},
                FirewallArn: {},
                FirewallName: {},
                SubnetChangeProtection: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                UpdateToken: {},
                FirewallArn: {},
                FirewallName: {},
                SubnetChangeProtection: {
                  type: 'boolean'
                }
              }
            }
          },
          UpdateTLSInspectionConfiguration: {
            input: {
              type: 'structure',
              required: ['TLSInspectionConfiguration', 'UpdateToken'],
              members: {
                TLSInspectionConfigurationArn: {},
                TLSInspectionConfigurationName: {},
                TLSInspectionConfiguration: {
                  shape: 'S3t'
                },
                Description: {},
                EncryptionConfiguration: {
                  shape: 'Sk'
                },
                UpdateToken: {}
              }
            },
            output: {
              type: 'structure',
              required: ['UpdateToken', 'TLSInspectionConfigurationResponse'],
              members: {
                UpdateToken: {},
                TLSInspectionConfigurationResponse: {
                  shape: 'S43'
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
              required: ['SubnetId'],
              members: {
                SubnetId: {},
                IPAddressType: {}
              }
            }
          },
          Sg: {
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
            type: 'structure',
            required: ['Type'],
            members: {
              KeyId: {},
              Type: {}
            }
          },
          So: {
            type: 'structure',
            required: ['FirewallPolicyArn', 'VpcId', 'SubnetMappings', 'FirewallId'],
            members: {
              FirewallName: {},
              FirewallArn: {},
              FirewallPolicyArn: {},
              VpcId: {},
              SubnetMappings: {
                shape: 'S7'
              },
              DeleteProtection: {
                type: 'boolean'
              },
              SubnetChangeProtection: {
                type: 'boolean'
              },
              FirewallPolicyChangeProtection: {
                type: 'boolean'
              },
              Description: {},
              FirewallId: {},
              Tags: {
                shape: 'Sg'
              },
              EncryptionConfiguration: {
                shape: 'Sk'
              }
            }
          },
          Sq: {
            type: 'structure',
            required: ['Status', 'ConfigurationSyncStateSummary'],
            members: {
              Status: {},
              ConfigurationSyncStateSummary: {},
              SyncStates: {
                type: 'map',
                key: {},
                value: {
                  type: 'structure',
                  members: {
                    Attachment: {
                      type: 'structure',
                      members: {
                        SubnetId: {},
                        EndpointId: {},
                        Status: {},
                        StatusMessage: {}
                      }
                    },
                    Config: {
                      type: 'map',
                      key: {},
                      value: {
                        type: 'structure',
                        members: {
                          SyncStatus: {},
                          UpdateToken: {}
                        }
                      }
                    }
                  }
                }
              },
              CapacityUsageSummary: {
                type: 'structure',
                members: {
                  CIDRs: {
                    type: 'structure',
                    members: {
                      AvailableCIDRCount: {
                        type: 'integer'
                      },
                      UtilizedCIDRCount: {
                        type: 'integer'
                      },
                      IPSetReferences: {
                        type: 'map',
                        key: {},
                        value: {
                          type: 'structure',
                          members: {
                            ResolvedCIDRCount: {
                              type: 'integer'
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
          S1b: {
            type: 'structure',
            required: ['StatelessDefaultActions', 'StatelessFragmentDefaultActions'],
            members: {
              StatelessRuleGroupReferences: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['ResourceArn', 'Priority'],
                  members: {
                    ResourceArn: {},
                    Priority: {
                      type: 'integer'
                    }
                  }
                }
              },
              StatelessDefaultActions: {
                shape: 'S1f'
              },
              StatelessFragmentDefaultActions: {
                shape: 'S1f'
              },
              StatelessCustomActions: {
                shape: 'S1g'
              },
              StatefulRuleGroupReferences: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['ResourceArn'],
                  members: {
                    ResourceArn: {},
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
                type: 'list',
                member: {}
              },
              StatefulEngineOptions: {
                type: 'structure',
                members: {
                  RuleOrder: {},
                  StreamExceptionPolicy: {}
                }
              },
              TLSInspectionConfigurationArn: {},
              PolicyVariables: {
                type: 'structure',
                members: {
                  RuleVariables: {
                    shape: 'S1x'
                  }
                }
              }
            }
          },
          S1f: {
            type: 'list',
            member: {}
          },
          S1g: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['ActionName', 'ActionDefinition'],
              members: {
                ActionName: {},
                ActionDefinition: {
                  type: 'structure',
                  members: {
                    PublishMetricAction: {
                      type: 'structure',
                      required: ['Dimensions'],
                      members: {
                        Dimensions: {
                          type: 'list',
                          member: {
                            type: 'structure',
                            required: ['Value'],
                            members: {
                              Value: {}
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
          S1x: {
            type: 'map',
            key: {},
            value: {
              type: 'structure',
              required: ['Definition'],
              members: {
                Definition: {
                  shape: 'S20'
                }
              }
            }
          },
          S20: {
            type: 'list',
            member: {}
          },
          S23: {
            type: 'structure',
            required: ['FirewallPolicyName', 'FirewallPolicyArn', 'FirewallPolicyId'],
            members: {
              FirewallPolicyName: {},
              FirewallPolicyArn: {},
              FirewallPolicyId: {},
              Description: {},
              FirewallPolicyStatus: {},
              Tags: {
                shape: 'Sg'
              },
              ConsumedStatelessRuleCapacity: {
                type: 'integer'
              },
              ConsumedStatefulRuleCapacity: {
                type: 'integer'
              },
              NumberOfAssociations: {
                type: 'integer'
              },
              EncryptionConfiguration: {
                shape: 'Sk'
              },
              LastModifiedTime: {
                type: 'timestamp'
              }
            }
          },
          S29: {
            type: 'structure',
            required: ['RulesSource'],
            members: {
              RuleVariables: {
                type: 'structure',
                members: {
                  IPSets: {
                    shape: 'S1x'
                  },
                  PortSets: {
                    type: 'map',
                    key: {},
                    value: {
                      type: 'structure',
                      members: {
                        Definition: {
                          shape: 'S20'
                        }
                      }
                    }
                  }
                }
              },
              ReferenceSets: {
                type: 'structure',
                members: {
                  IPSetReferences: {
                    type: 'map',
                    key: {},
                    value: {
                      type: 'structure',
                      members: {
                        ReferenceArn: {}
                      }
                    }
                  }
                }
              },
              RulesSource: {
                type: 'structure',
                members: {
                  RulesString: {},
                  RulesSourceList: {
                    type: 'structure',
                    required: ['Targets', 'TargetTypes', 'GeneratedRulesType'],
                    members: {
                      Targets: {
                        type: 'list',
                        member: {}
                      },
                      TargetTypes: {
                        type: 'list',
                        member: {}
                      },
                      GeneratedRulesType: {}
                    }
                  },
                  StatefulRules: {
                    type: 'list',
                    member: {
                      type: 'structure',
                      required: ['Action', 'Header', 'RuleOptions'],
                      members: {
                        Action: {},
                        Header: {
                          type: 'structure',
                          required: ['Protocol', 'Source', 'SourcePort', 'Direction', 'Destination', 'DestinationPort'],
                          members: {
                            Protocol: {},
                            Source: {},
                            SourcePort: {},
                            Direction: {},
                            Destination: {},
                            DestinationPort: {}
                          }
                        },
                        RuleOptions: {
                          type: 'list',
                          member: {
                            type: 'structure',
                            required: ['Keyword'],
                            members: {
                              Keyword: {},
                              Settings: {
                                type: 'list',
                                member: {}
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  StatelessRulesAndCustomActions: {
                    type: 'structure',
                    required: ['StatelessRules'],
                    members: {
                      StatelessRules: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          required: ['RuleDefinition', 'Priority'],
                          members: {
                            RuleDefinition: {
                              type: 'structure',
                              required: ['MatchAttributes', 'Actions'],
                              members: {
                                MatchAttributes: {
                                  type: 'structure',
                                  members: {
                                    Sources: {
                                      shape: 'S37'
                                    },
                                    Destinations: {
                                      shape: 'S37'
                                    },
                                    SourcePorts: {
                                      shape: 'S3a'
                                    },
                                    DestinationPorts: {
                                      shape: 'S3a'
                                    },
                                    Protocols: {
                                      shape: 'S3d'
                                    },
                                    TCPFlags: {
                                      type: 'list',
                                      member: {
                                        type: 'structure',
                                        required: ['Flags'],
                                        members: {
                                          Flags: {
                                            shape: 'S3h'
                                          },
                                          Masks: {
                                            shape: 'S3h'
                                          }
                                        }
                                      }
                                    }
                                  }
                                },
                                Actions: {
                                  shape: 'S1f'
                                }
                              }
                            },
                            Priority: {
                              type: 'integer'
                            }
                          }
                        }
                      },
                      CustomActions: {
                        shape: 'S1g'
                      }
                    }
                  }
                }
              },
              StatefulRuleOptions: {
                shape: 'S3j'
              }
            }
          },
          S37: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['AddressDefinition'],
              members: {
                AddressDefinition: {}
              }
            }
          },
          S3a: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['FromPort', 'ToPort'],
              members: {
                FromPort: {
                  type: 'integer'
                },
                ToPort: {
                  type: 'integer'
                }
              }
            }
          },
          S3d: {
            type: 'list',
            member: {
              type: 'integer'
            }
          },
          S3h: {
            type: 'list',
            member: {}
          },
          S3j: {
            type: 'structure',
            members: {
              RuleOrder: {}
            }
          },
          S3l: {
            type: 'structure',
            members: {
              SourceArn: {},
              SourceUpdateToken: {}
            }
          },
          S3n: {
            type: 'structure',
            required: ['RuleGroupArn', 'RuleGroupName', 'RuleGroupId'],
            members: {
              RuleGroupArn: {},
              RuleGroupName: {},
              RuleGroupId: {},
              Description: {},
              Type: {},
              Capacity: {
                type: 'integer'
              },
              RuleGroupStatus: {},
              Tags: {
                shape: 'Sg'
              },
              ConsumedCapacity: {
                type: 'integer'
              },
              NumberOfAssociations: {
                type: 'integer'
              },
              EncryptionConfiguration: {
                shape: 'Sk'
              },
              SourceMetadata: {
                shape: 'S3l'
              },
              SnsTopic: {},
              LastModifiedTime: {
                type: 'timestamp'
              },
              AnalysisResults: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    IdentifiedRuleIds: {
                      type: 'list',
                      member: {}
                    },
                    IdentifiedType: {},
                    AnalysisDetail: {}
                  }
                }
              }
            }
          },
          S3t: {
            type: 'structure',
            members: {
              ServerCertificateConfigurations: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    ServerCertificates: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          ResourceArn: {}
                        }
                      }
                    },
                    Scopes: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          Sources: {
                            shape: 'S37'
                          },
                          Destinations: {
                            shape: 'S37'
                          },
                          SourcePorts: {
                            shape: 'S3a'
                          },
                          DestinationPorts: {
                            shape: 'S3a'
                          },
                          Protocols: {
                            shape: 'S3d'
                          }
                        }
                      }
                    },
                    CertificateAuthorityArn: {},
                    CheckCertificateRevocationStatus: {
                      type: 'structure',
                      members: {
                        RevokedStatusAction: {},
                        UnknownStatusAction: {}
                      }
                    }
                  }
                }
              }
            }
          },
          S43: {
            type: 'structure',
            required: ['TLSInspectionConfigurationArn', 'TLSInspectionConfigurationName', 'TLSInspectionConfigurationId'],
            members: {
              TLSInspectionConfigurationArn: {},
              TLSInspectionConfigurationName: {},
              TLSInspectionConfigurationId: {},
              TLSInspectionConfigurationStatus: {},
              Description: {},
              Tags: {
                shape: 'Sg'
              },
              LastModifiedTime: {
                type: 'timestamp'
              },
              NumberOfAssociations: {
                type: 'integer'
              },
              EncryptionConfiguration: {
                shape: 'Sk'
              },
              Certificates: {
                type: 'list',
                member: {
                  shape: 'S45'
                }
              },
              CertificateAuthority: {
                shape: 'S45'
              }
            }
          },
          S45: {
            type: 'structure',
            members: {
              CertificateArn: {},
              CertificateSerial: {},
              Status: {},
              StatusMessage: {}
            }
          },
          S4n: {
            type: 'structure',
            required: ['LogDestinationConfigs'],
            members: {
              LogDestinationConfigs: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['LogType', 'LogDestinationType', 'LogDestination'],
                  members: {
                    LogType: {},
                    LogDestinationType: {},
                    LogDestination: {
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
      });
    }
  };
});
//# sourceMappingURL=73f09decf7f45e0b5d9fb899a399ce44e709bfd5.js.map