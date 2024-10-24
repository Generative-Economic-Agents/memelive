System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2018-10-26',
          endpointPrefix: 'securityhub',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          protocols: ['rest-json'],
          serviceFullName: 'AWS SecurityHub',
          serviceId: 'SecurityHub',
          signatureVersion: 'v4',
          signingName: 'securityhub',
          uid: 'securityhub-2018-10-26'
        },
        operations: {
          AcceptAdministratorInvitation: {
            http: {
              requestUri: '/administrator'
            },
            input: {
              type: 'structure',
              required: ['AdministratorId', 'InvitationId'],
              members: {
                AdministratorId: {},
                InvitationId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          AcceptInvitation: {
            http: {
              requestUri: '/master'
            },
            input: {
              type: 'structure',
              required: ['MasterId', 'InvitationId'],
              members: {
                MasterId: {},
                InvitationId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            deprecated: true,
            deprecatedMessage: 'This API has been deprecated, use AcceptAdministratorInvitation API instead.'
          },
          BatchDeleteAutomationRules: {
            http: {
              requestUri: '/automationrules/delete'
            },
            input: {
              type: 'structure',
              required: ['AutomationRulesArns'],
              members: {
                AutomationRulesArns: {
                  shape: 'S7'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ProcessedAutomationRules: {
                  shape: 'S7'
                },
                UnprocessedAutomationRules: {
                  shape: 'S9'
                }
              }
            }
          },
          BatchDisableStandards: {
            http: {
              requestUri: '/standards/deregister'
            },
            input: {
              type: 'structure',
              required: ['StandardsSubscriptionArns'],
              members: {
                StandardsSubscriptionArns: {
                  shape: 'Sd'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                StandardsSubscriptions: {
                  shape: 'Sf'
                }
              }
            }
          },
          BatchEnableStandards: {
            http: {
              requestUri: '/standards/register'
            },
            input: {
              type: 'structure',
              required: ['StandardsSubscriptionRequests'],
              members: {
                StandardsSubscriptionRequests: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['StandardsArn'],
                    members: {
                      StandardsArn: {},
                      StandardsInput: {
                        shape: 'Sh'
                      }
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                StandardsSubscriptions: {
                  shape: 'Sf'
                }
              }
            }
          },
          BatchGetAutomationRules: {
            http: {
              requestUri: '/automationrules/get'
            },
            input: {
              type: 'structure',
              required: ['AutomationRulesArns'],
              members: {
                AutomationRulesArns: {
                  shape: 'S7'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Rules: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      RuleArn: {},
                      RuleStatus: {},
                      RuleOrder: {
                        type: 'integer'
                      },
                      RuleName: {},
                      Description: {},
                      IsTerminal: {
                        type: 'boolean'
                      },
                      Criteria: {
                        shape: 'Sw'
                      },
                      Actions: {
                        shape: 'S1a'
                      },
                      CreatedAt: {
                        shape: 'S1p'
                      },
                      UpdatedAt: {
                        shape: 'S1p'
                      },
                      CreatedBy: {}
                    }
                  }
                },
                UnprocessedAutomationRules: {
                  shape: 'S9'
                }
              }
            }
          },
          BatchGetConfigurationPolicyAssociations: {
            http: {
              requestUri: '/configurationPolicyAssociation/batchget'
            },
            input: {
              type: 'structure',
              required: ['ConfigurationPolicyAssociationIdentifiers'],
              members: {
                ConfigurationPolicyAssociationIdentifiers: {
                  type: 'list',
                  member: {
                    shape: 'S1s'
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ConfigurationPolicyAssociations: {
                  type: 'list',
                  member: {
                    shape: 'S1w'
                  }
                },
                UnprocessedConfigurationPolicyAssociations: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ConfigurationPolicyAssociationIdentifiers: {
                        shape: 'S1s'
                      },
                      ErrorCode: {},
                      ErrorReason: {}
                    }
                  }
                }
              }
            }
          },
          BatchGetSecurityControls: {
            http: {
              requestUri: '/securityControls/batchGet'
            },
            input: {
              type: 'structure',
              required: ['SecurityControlIds'],
              members: {
                SecurityControlIds: {
                  shape: 'S23'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['SecurityControls'],
              members: {
                SecurityControls: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['SecurityControlId', 'SecurityControlArn', 'Title', 'Description', 'RemediationUrl', 'SeverityRating', 'SecurityControlStatus'],
                    members: {
                      SecurityControlId: {},
                      SecurityControlArn: {},
                      Title: {},
                      Description: {},
                      RemediationUrl: {},
                      SeverityRating: {},
                      SecurityControlStatus: {},
                      UpdateStatus: {},
                      Parameters: {
                        shape: 'S2a'
                      },
                      LastUpdateReason: {}
                    }
                  }
                },
                UnprocessedIds: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['SecurityControlId', 'ErrorCode'],
                    members: {
                      SecurityControlId: {},
                      ErrorCode: {},
                      ErrorReason: {}
                    }
                  }
                }
              }
            }
          },
          BatchGetStandardsControlAssociations: {
            http: {
              requestUri: '/associations/batchGet'
            },
            input: {
              type: 'structure',
              required: ['StandardsControlAssociationIds'],
              members: {
                StandardsControlAssociationIds: {
                  type: 'list',
                  member: {
                    shape: 'S2l'
                  }
                }
              }
            },
            output: {
              type: 'structure',
              required: ['StandardsControlAssociationDetails'],
              members: {
                StandardsControlAssociationDetails: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['StandardsArn', 'SecurityControlId', 'SecurityControlArn', 'AssociationStatus'],
                    members: {
                      StandardsArn: {},
                      SecurityControlId: {},
                      SecurityControlArn: {},
                      AssociationStatus: {},
                      RelatedRequirements: {
                        shape: 'S2q'
                      },
                      UpdatedAt: {
                        shape: 'S1p'
                      },
                      UpdatedReason: {},
                      StandardsControlTitle: {},
                      StandardsControlDescription: {},
                      StandardsControlArns: {
                        type: 'list',
                        member: {}
                      }
                    }
                  }
                },
                UnprocessedAssociations: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['StandardsControlAssociationId', 'ErrorCode'],
                    members: {
                      StandardsControlAssociationId: {
                        shape: 'S2l'
                      },
                      ErrorCode: {},
                      ErrorReason: {}
                    }
                  }
                }
              }
            }
          },
          BatchImportFindings: {
            http: {
              requestUri: '/findings/import'
            },
            input: {
              type: 'structure',
              required: ['Findings'],
              members: {
                Findings: {
                  type: 'list',
                  member: {
                    shape: 'S2w'
                  }
                }
              }
            },
            output: {
              type: 'structure',
              required: ['FailedCount', 'SuccessCount'],
              members: {
                FailedCount: {
                  type: 'integer'
                },
                SuccessCount: {
                  type: 'integer'
                },
                FailedFindings: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Id', 'ErrorCode', 'ErrorMessage'],
                    members: {
                      Id: {},
                      ErrorCode: {},
                      ErrorMessage: {}
                    }
                  }
                }
              }
            }
          },
          BatchUpdateAutomationRules: {
            http: {
              method: 'PATCH',
              requestUri: '/automationrules/update'
            },
            input: {
              type: 'structure',
              required: ['UpdateAutomationRulesRequestItems'],
              members: {
                UpdateAutomationRulesRequestItems: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['RuleArn'],
                    members: {
                      RuleArn: {},
                      RuleStatus: {},
                      RuleOrder: {
                        type: 'integer'
                      },
                      Description: {},
                      RuleName: {},
                      IsTerminal: {
                        type: 'boolean'
                      },
                      Criteria: {
                        shape: 'Sw'
                      },
                      Actions: {
                        shape: 'S1a'
                      }
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ProcessedAutomationRules: {
                  shape: 'S7'
                },
                UnprocessedAutomationRules: {
                  shape: 'S9'
                }
              }
            }
          },
          BatchUpdateFindings: {
            http: {
              method: 'PATCH',
              requestUri: '/findings/batchupdate'
            },
            input: {
              type: 'structure',
              required: ['FindingIdentifiers'],
              members: {
                FindingIdentifiers: {
                  shape: 'Spm'
                },
                Note: {
                  shape: 'S1e'
                },
                Severity: {
                  shape: 'S1f'
                },
                VerificationState: {},
                Confidence: {
                  type: 'integer'
                },
                Criticality: {
                  type: 'integer'
                },
                Types: {
                  shape: 'S1j'
                },
                UserDefinedFields: {
                  shape: 'S1k'
                },
                Workflow: {
                  shape: 'S1l'
                },
                RelatedFindings: {
                  shape: 'S1n'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['ProcessedFindings', 'UnprocessedFindings'],
              members: {
                ProcessedFindings: {
                  shape: 'Spm'
                },
                UnprocessedFindings: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['FindingIdentifier', 'ErrorCode', 'ErrorMessage'],
                    members: {
                      FindingIdentifier: {
                        shape: 'Spn'
                      },
                      ErrorCode: {},
                      ErrorMessage: {}
                    }
                  }
                }
              }
            }
          },
          BatchUpdateStandardsControlAssociations: {
            http: {
              method: 'PATCH',
              requestUri: '/associations'
            },
            input: {
              type: 'structure',
              required: ['StandardsControlAssociationUpdates'],
              members: {
                StandardsControlAssociationUpdates: {
                  type: 'list',
                  member: {
                    shape: 'Spt'
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                UnprocessedAssociationUpdates: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['StandardsControlAssociationUpdate', 'ErrorCode'],
                    members: {
                      StandardsControlAssociationUpdate: {
                        shape: 'Spt'
                      },
                      ErrorCode: {},
                      ErrorReason: {}
                    }
                  }
                }
              }
            }
          },
          CreateActionTarget: {
            http: {
              requestUri: '/actionTargets'
            },
            input: {
              type: 'structure',
              required: ['Name', 'Description', 'Id'],
              members: {
                Name: {},
                Description: {},
                Id: {}
              }
            },
            output: {
              type: 'structure',
              required: ['ActionTargetArn'],
              members: {
                ActionTargetArn: {}
              }
            }
          },
          CreateAutomationRule: {
            http: {
              requestUri: '/automationrules/create'
            },
            input: {
              type: 'structure',
              required: ['RuleOrder', 'RuleName', 'Description', 'Criteria', 'Actions'],
              members: {
                Tags: {
                  shape: 'Sq0'
                },
                RuleStatus: {},
                RuleOrder: {
                  type: 'integer'
                },
                RuleName: {},
                Description: {},
                IsTerminal: {
                  type: 'boolean'
                },
                Criteria: {
                  shape: 'Sw'
                },
                Actions: {
                  shape: 'S1a'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                RuleArn: {}
              }
            }
          },
          CreateConfigurationPolicy: {
            http: {
              requestUri: '/configurationPolicy/create'
            },
            input: {
              type: 'structure',
              required: ['Name', 'ConfigurationPolicy'],
              members: {
                Name: {},
                Description: {},
                ConfigurationPolicy: {
                  shape: 'Sq5'
                },
                Tags: {
                  shape: 'Sq0'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                Id: {},
                Name: {},
                Description: {},
                UpdatedAt: {
                  shape: 'S1p'
                },
                CreatedAt: {
                  shape: 'S1p'
                },
                ConfigurationPolicy: {
                  shape: 'Sq5'
                }
              }
            }
          },
          CreateFindingAggregator: {
            http: {
              requestUri: '/findingAggregator/create'
            },
            input: {
              type: 'structure',
              required: ['RegionLinkingMode'],
              members: {
                RegionLinkingMode: {},
                Regions: {
                  shape: 'S23'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                FindingAggregatorArn: {},
                FindingAggregationRegion: {},
                RegionLinkingMode: {},
                Regions: {
                  shape: 'S23'
                }
              }
            }
          },
          CreateInsight: {
            http: {
              requestUri: '/insights'
            },
            input: {
              type: 'structure',
              required: ['Name', 'Filters', 'GroupByAttribute'],
              members: {
                Name: {},
                Filters: {
                  shape: 'Sqh'
                },
                GroupByAttribute: {}
              }
            },
            output: {
              type: 'structure',
              required: ['InsightArn'],
              members: {
                InsightArn: {}
              }
            }
          },
          CreateMembers: {
            http: {
              requestUri: '/members'
            },
            input: {
              type: 'structure',
              required: ['AccountDetails'],
              members: {
                AccountDetails: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['AccountId'],
                    members: {
                      AccountId: {},
                      Email: {}
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                UnprocessedAccounts: {
                  shape: 'Squ'
                }
              }
            }
          },
          DeclineInvitations: {
            http: {
              requestUri: '/invitations/decline'
            },
            input: {
              type: 'structure',
              required: ['AccountIds'],
              members: {
                AccountIds: {
                  shape: 'Sqx'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                UnprocessedAccounts: {
                  shape: 'Squ'
                }
              }
            }
          },
          DeleteActionTarget: {
            http: {
              method: 'DELETE',
              requestUri: '/actionTargets/{ActionTargetArn+}'
            },
            input: {
              type: 'structure',
              required: ['ActionTargetArn'],
              members: {
                ActionTargetArn: {
                  location: 'uri',
                  locationName: 'ActionTargetArn'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['ActionTargetArn'],
              members: {
                ActionTargetArn: {}
              }
            }
          },
          DeleteConfigurationPolicy: {
            http: {
              method: 'DELETE',
              requestUri: '/configurationPolicy/{Identifier}'
            },
            input: {
              type: 'structure',
              required: ['Identifier'],
              members: {
                Identifier: {
                  location: 'uri',
                  locationName: 'Identifier'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteFindingAggregator: {
            http: {
              method: 'DELETE',
              requestUri: '/findingAggregator/delete/{FindingAggregatorArn+}'
            },
            input: {
              type: 'structure',
              required: ['FindingAggregatorArn'],
              members: {
                FindingAggregatorArn: {
                  location: 'uri',
                  locationName: 'FindingAggregatorArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteInsight: {
            http: {
              method: 'DELETE',
              requestUri: '/insights/{InsightArn+}'
            },
            input: {
              type: 'structure',
              required: ['InsightArn'],
              members: {
                InsightArn: {
                  location: 'uri',
                  locationName: 'InsightArn'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['InsightArn'],
              members: {
                InsightArn: {}
              }
            }
          },
          DeleteInvitations: {
            http: {
              requestUri: '/invitations/delete'
            },
            input: {
              type: 'structure',
              required: ['AccountIds'],
              members: {
                AccountIds: {
                  shape: 'Sqx'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                UnprocessedAccounts: {
                  shape: 'Squ'
                }
              }
            }
          },
          DeleteMembers: {
            http: {
              requestUri: '/members/delete'
            },
            input: {
              type: 'structure',
              required: ['AccountIds'],
              members: {
                AccountIds: {
                  shape: 'Sqx'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                UnprocessedAccounts: {
                  shape: 'Squ'
                }
              }
            }
          },
          DescribeActionTargets: {
            http: {
              requestUri: '/actionTargets/get'
            },
            input: {
              type: 'structure',
              members: {
                ActionTargetArns: {
                  shape: 'Src'
                },
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['ActionTargets'],
              members: {
                ActionTargets: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['ActionTargetArn', 'Name', 'Description'],
                    members: {
                      ActionTargetArn: {},
                      Name: {},
                      Description: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeHub: {
            http: {
              method: 'GET',
              requestUri: '/accounts'
            },
            input: {
              type: 'structure',
              members: {
                HubArn: {
                  location: 'querystring',
                  locationName: 'HubArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                HubArn: {},
                SubscribedAt: {},
                AutoEnableControls: {
                  type: 'boolean'
                },
                ControlFindingGenerator: {}
              }
            }
          },
          DescribeOrganizationConfiguration: {
            http: {
              method: 'GET',
              requestUri: '/organization/configuration'
            },
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {
                AutoEnable: {
                  type: 'boolean'
                },
                MemberAccountLimitReached: {
                  type: 'boolean'
                },
                AutoEnableStandards: {},
                OrganizationConfiguration: {
                  shape: 'Sro'
                }
              }
            }
          },
          DescribeProducts: {
            http: {
              method: 'GET',
              requestUri: '/products'
            },
            input: {
              type: 'structure',
              members: {
                NextToken: {
                  location: 'querystring',
                  locationName: 'NextToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'MaxResults',
                  type: 'integer'
                },
                ProductArn: {
                  location: 'querystring',
                  locationName: 'ProductArn'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Products'],
              members: {
                Products: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['ProductArn'],
                    members: {
                      ProductArn: {},
                      ProductName: {},
                      CompanyName: {},
                      Description: {},
                      Categories: {
                        type: 'list',
                        member: {}
                      },
                      IntegrationTypes: {
                        type: 'list',
                        member: {}
                      },
                      MarketplaceUrl: {},
                      ActivationUrl: {},
                      ProductSubscriptionResourcePolicy: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeStandards: {
            http: {
              method: 'GET',
              requestUri: '/standards'
            },
            input: {
              type: 'structure',
              members: {
                NextToken: {
                  location: 'querystring',
                  locationName: 'NextToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'MaxResults',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Standards: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      StandardsArn: {},
                      Name: {},
                      Description: {},
                      EnabledByDefault: {
                        type: 'boolean'
                      },
                      StandardsManagedBy: {
                        type: 'structure',
                        members: {
                          Company: {},
                          Product: {}
                        }
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeStandardsControls: {
            http: {
              method: 'GET',
              requestUri: '/standards/controls/{StandardsSubscriptionArn+}'
            },
            input: {
              type: 'structure',
              required: ['StandardsSubscriptionArn'],
              members: {
                StandardsSubscriptionArn: {
                  location: 'uri',
                  locationName: 'StandardsSubscriptionArn'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'NextToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'MaxResults',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Controls: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      StandardsControlArn: {},
                      ControlStatus: {},
                      DisabledReason: {},
                      ControlStatusUpdatedAt: {
                        shape: 'S1p'
                      },
                      ControlId: {},
                      Title: {},
                      Description: {},
                      RemediationUrl: {},
                      SeverityRating: {},
                      RelatedRequirements: {
                        shape: 'S2q'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DisableImportFindingsForProduct: {
            http: {
              method: 'DELETE',
              requestUri: '/productSubscriptions/{ProductSubscriptionArn+}'
            },
            input: {
              type: 'structure',
              required: ['ProductSubscriptionArn'],
              members: {
                ProductSubscriptionArn: {
                  location: 'uri',
                  locationName: 'ProductSubscriptionArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DisableOrganizationAdminAccount: {
            http: {
              requestUri: '/organization/admin/disable'
            },
            input: {
              type: 'structure',
              required: ['AdminAccountId'],
              members: {
                AdminAccountId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DisableSecurityHub: {
            http: {
              method: 'DELETE',
              requestUri: '/accounts'
            },
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DisassociateFromAdministratorAccount: {
            http: {
              requestUri: '/administrator/disassociate'
            },
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DisassociateFromMasterAccount: {
            http: {
              requestUri: '/master/disassociate'
            },
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {}
            },
            deprecated: true,
            deprecatedMessage: 'This API has been deprecated, use DisassociateFromAdministratorAccount API instead.'
          },
          DisassociateMembers: {
            http: {
              requestUri: '/members/disassociate'
            },
            input: {
              type: 'structure',
              required: ['AccountIds'],
              members: {
                AccountIds: {
                  shape: 'Sqx'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          EnableImportFindingsForProduct: {
            http: {
              requestUri: '/productSubscriptions'
            },
            input: {
              type: 'structure',
              required: ['ProductArn'],
              members: {
                ProductArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ProductSubscriptionArn: {}
              }
            }
          },
          EnableOrganizationAdminAccount: {
            http: {
              requestUri: '/organization/admin/enable'
            },
            input: {
              type: 'structure',
              required: ['AdminAccountId'],
              members: {
                AdminAccountId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          EnableSecurityHub: {
            http: {
              requestUri: '/accounts'
            },
            input: {
              type: 'structure',
              members: {
                Tags: {
                  shape: 'Sq0'
                },
                EnableDefaultStandards: {
                  type: 'boolean'
                },
                ControlFindingGenerator: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          GetAdministratorAccount: {
            http: {
              method: 'GET',
              requestUri: '/administrator'
            },
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {
                Administrator: {
                  shape: 'Ssr'
                }
              }
            }
          },
          GetConfigurationPolicy: {
            http: {
              method: 'GET',
              requestUri: '/configurationPolicy/get/{Identifier}'
            },
            input: {
              type: 'structure',
              required: ['Identifier'],
              members: {
                Identifier: {
                  location: 'uri',
                  locationName: 'Identifier'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                Id: {},
                Name: {},
                Description: {},
                UpdatedAt: {
                  shape: 'S1p'
                },
                CreatedAt: {
                  shape: 'S1p'
                },
                ConfigurationPolicy: {
                  shape: 'Sq5'
                }
              }
            }
          },
          GetConfigurationPolicyAssociation: {
            http: {
              requestUri: '/configurationPolicyAssociation/get'
            },
            input: {
              type: 'structure',
              required: ['Target'],
              members: {
                Target: {
                  shape: 'S1t'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ConfigurationPolicyId: {},
                TargetId: {},
                TargetType: {},
                AssociationType: {},
                UpdatedAt: {
                  shape: 'S1p'
                },
                AssociationStatus: {},
                AssociationStatusMessage: {}
              }
            }
          },
          GetEnabledStandards: {
            http: {
              requestUri: '/standards/get'
            },
            input: {
              type: 'structure',
              members: {
                StandardsSubscriptionArns: {
                  shape: 'Sd'
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
                StandardsSubscriptions: {
                  shape: 'Sf'
                },
                NextToken: {}
              }
            }
          },
          GetFindingAggregator: {
            http: {
              method: 'GET',
              requestUri: '/findingAggregator/get/{FindingAggregatorArn+}'
            },
            input: {
              type: 'structure',
              required: ['FindingAggregatorArn'],
              members: {
                FindingAggregatorArn: {
                  location: 'uri',
                  locationName: 'FindingAggregatorArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                FindingAggregatorArn: {},
                FindingAggregationRegion: {},
                RegionLinkingMode: {},
                Regions: {
                  shape: 'S23'
                }
              }
            }
          },
          GetFindingHistory: {
            http: {
              requestUri: '/findingHistory/get'
            },
            input: {
              type: 'structure',
              required: ['FindingIdentifier'],
              members: {
                FindingIdentifier: {
                  shape: 'Spn'
                },
                StartTime: {
                  shape: 'S1p'
                },
                EndTime: {
                  shape: 'S1p'
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
                Records: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      FindingIdentifier: {
                        shape: 'Spn'
                      },
                      UpdateTime: {
                        shape: 'S1p'
                      },
                      FindingCreated: {
                        type: 'boolean'
                      },
                      UpdateSource: {
                        type: 'structure',
                        members: {
                          Type: {},
                          Identity: {}
                        }
                      },
                      Updates: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            UpdatedField: {},
                            OldValue: {},
                            NewValue: {}
                          }
                        }
                      },
                      NextToken: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          GetFindings: {
            http: {
              requestUri: '/findings'
            },
            input: {
              type: 'structure',
              members: {
                Filters: {
                  shape: 'Sqh'
                },
                SortCriteria: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Field: {},
                      SortOrder: {}
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
              required: ['Findings'],
              members: {
                Findings: {
                  type: 'list',
                  member: {
                    shape: 'S2w'
                  }
                },
                NextToken: {}
              }
            }
          },
          GetInsightResults: {
            http: {
              method: 'GET',
              requestUri: '/insights/results/{InsightArn+}'
            },
            input: {
              type: 'structure',
              required: ['InsightArn'],
              members: {
                InsightArn: {
                  location: 'uri',
                  locationName: 'InsightArn'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['InsightResults'],
              members: {
                InsightResults: {
                  type: 'structure',
                  required: ['InsightArn', 'GroupByAttribute', 'ResultValues'],
                  members: {
                    InsightArn: {},
                    GroupByAttribute: {},
                    ResultValues: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        required: ['GroupByAttributeValue', 'Count'],
                        members: {
                          GroupByAttributeValue: {},
                          Count: {
                            type: 'integer'
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          GetInsights: {
            http: {
              requestUri: '/insights/get'
            },
            input: {
              type: 'structure',
              members: {
                InsightArns: {
                  shape: 'Src'
                },
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Insights'],
              members: {
                Insights: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['InsightArn', 'Name', 'Filters', 'GroupByAttribute'],
                    members: {
                      InsightArn: {},
                      Name: {},
                      Filters: {
                        shape: 'Sqh'
                      },
                      GroupByAttribute: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          GetInvitationsCount: {
            http: {
              method: 'GET',
              requestUri: '/invitations/count'
            },
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {
                InvitationsCount: {
                  type: 'integer'
                }
              }
            }
          },
          GetMasterAccount: {
            http: {
              method: 'GET',
              requestUri: '/master'
            },
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {
                Master: {
                  shape: 'Ssr'
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'This API has been deprecated, use GetAdministratorAccount API instead.'
          },
          GetMembers: {
            http: {
              requestUri: '/members/get'
            },
            input: {
              type: 'structure',
              required: ['AccountIds'],
              members: {
                AccountIds: {
                  shape: 'Sqx'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Members: {
                  shape: 'Stt'
                },
                UnprocessedAccounts: {
                  shape: 'Squ'
                }
              }
            }
          },
          GetSecurityControlDefinition: {
            http: {
              method: 'GET',
              requestUri: '/securityControl/definition'
            },
            input: {
              type: 'structure',
              required: ['SecurityControlId'],
              members: {
                SecurityControlId: {
                  location: 'querystring',
                  locationName: 'SecurityControlId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['SecurityControlDefinition'],
              members: {
                SecurityControlDefinition: {
                  shape: 'Stx'
                }
              }
            }
          },
          InviteMembers: {
            http: {
              requestUri: '/members/invite'
            },
            input: {
              type: 'structure',
              required: ['AccountIds'],
              members: {
                AccountIds: {
                  shape: 'Sqx'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                UnprocessedAccounts: {
                  shape: 'Squ'
                }
              }
            }
          },
          ListAutomationRules: {
            http: {
              method: 'GET',
              requestUri: '/automationrules/list'
            },
            input: {
              type: 'structure',
              members: {
                NextToken: {
                  location: 'querystring',
                  locationName: 'NextToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'MaxResults',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AutomationRulesMetadata: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      RuleArn: {},
                      RuleStatus: {},
                      RuleOrder: {
                        type: 'integer'
                      },
                      RuleName: {},
                      Description: {},
                      IsTerminal: {
                        type: 'boolean'
                      },
                      CreatedAt: {
                        shape: 'S1p'
                      },
                      UpdatedAt: {
                        shape: 'S1p'
                      },
                      CreatedBy: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListConfigurationPolicies: {
            http: {
              method: 'GET',
              requestUri: '/configurationPolicy/list'
            },
            input: {
              type: 'structure',
              members: {
                NextToken: {
                  location: 'querystring',
                  locationName: 'NextToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'MaxResults',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ConfigurationPolicySummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Arn: {},
                      Id: {},
                      Name: {},
                      Description: {},
                      UpdatedAt: {
                        shape: 'S1p'
                      },
                      ServiceEnabled: {
                        type: 'boolean'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListConfigurationPolicyAssociations: {
            http: {
              requestUri: '/configurationPolicyAssociation/list'
            },
            input: {
              type: 'structure',
              members: {
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                Filters: {
                  type: 'structure',
                  members: {
                    ConfigurationPolicyId: {},
                    AssociationType: {},
                    AssociationStatus: {}
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ConfigurationPolicyAssociationSummaries: {
                  type: 'list',
                  member: {
                    shape: 'S1w'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListEnabledProductsForImport: {
            http: {
              method: 'GET',
              requestUri: '/productSubscriptions'
            },
            input: {
              type: 'structure',
              members: {
                NextToken: {
                  location: 'querystring',
                  locationName: 'NextToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'MaxResults',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ProductSubscriptions: {
                  type: 'list',
                  member: {}
                },
                NextToken: {}
              }
            }
          },
          ListFindingAggregators: {
            http: {
              method: 'GET',
              requestUri: '/findingAggregator/list'
            },
            input: {
              type: 'structure',
              members: {
                NextToken: {
                  location: 'querystring',
                  locationName: 'NextToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'MaxResults',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                FindingAggregators: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      FindingAggregatorArn: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListInvitations: {
            http: {
              method: 'GET',
              requestUri: '/invitations'
            },
            input: {
              type: 'structure',
              members: {
                MaxResults: {
                  location: 'querystring',
                  locationName: 'MaxResults',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'NextToken'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Invitations: {
                  type: 'list',
                  member: {
                    shape: 'Ssr'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListMembers: {
            http: {
              method: 'GET',
              requestUri: '/members'
            },
            input: {
              type: 'structure',
              members: {
                OnlyAssociated: {
                  location: 'querystring',
                  locationName: 'OnlyAssociated',
                  type: 'boolean'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'MaxResults',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'NextToken'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Members: {
                  shape: 'Stt'
                },
                NextToken: {}
              }
            }
          },
          ListOrganizationAdminAccounts: {
            http: {
              method: 'GET',
              requestUri: '/organization/admin'
            },
            input: {
              type: 'structure',
              members: {
                MaxResults: {
                  location: 'querystring',
                  locationName: 'MaxResults',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'NextToken'
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
                      AccountId: {},
                      Status: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListSecurityControlDefinitions: {
            http: {
              method: 'GET',
              requestUri: '/securityControls/definitions'
            },
            input: {
              type: 'structure',
              members: {
                StandardsArn: {
                  location: 'querystring',
                  locationName: 'StandardsArn'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'NextToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'MaxResults',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['SecurityControlDefinitions'],
              members: {
                SecurityControlDefinitions: {
                  type: 'list',
                  member: {
                    shape: 'Stx'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListStandardsControlAssociations: {
            http: {
              method: 'GET',
              requestUri: '/associations'
            },
            input: {
              type: 'structure',
              required: ['SecurityControlId'],
              members: {
                SecurityControlId: {
                  location: 'querystring',
                  locationName: 'SecurityControlId'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'NextToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'MaxResults',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['StandardsControlAssociationSummaries'],
              members: {
                StandardsControlAssociationSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['StandardsArn', 'SecurityControlId', 'SecurityControlArn', 'AssociationStatus'],
                    members: {
                      StandardsArn: {},
                      SecurityControlId: {},
                      SecurityControlArn: {},
                      AssociationStatus: {},
                      RelatedRequirements: {
                        shape: 'S2q'
                      },
                      UpdatedAt: {
                        shape: 'S1p'
                      },
                      UpdatedReason: {},
                      StandardsControlTitle: {},
                      StandardsControlDescription: {}
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
              requestUri: '/tags/{ResourceArn}'
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
                  shape: 'Sq0'
                }
              }
            }
          },
          StartConfigurationPolicyAssociation: {
            http: {
              requestUri: '/configurationPolicyAssociation/associate'
            },
            input: {
              type: 'structure',
              required: ['ConfigurationPolicyIdentifier', 'Target'],
              members: {
                ConfigurationPolicyIdentifier: {},
                Target: {
                  shape: 'S1t'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ConfigurationPolicyId: {},
                TargetId: {},
                TargetType: {},
                AssociationType: {},
                UpdatedAt: {
                  shape: 'S1p'
                },
                AssociationStatus: {},
                AssociationStatusMessage: {}
              }
            }
          },
          StartConfigurationPolicyDisassociation: {
            http: {
              requestUri: '/configurationPolicyAssociation/disassociate'
            },
            input: {
              type: 'structure',
              required: ['ConfigurationPolicyIdentifier'],
              members: {
                Target: {
                  shape: 'S1t'
                },
                ConfigurationPolicyIdentifier: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          TagResource: {
            http: {
              requestUri: '/tags/{ResourceArn}'
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
                  shape: 'Sq0'
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
              requestUri: '/tags/{ResourceArn}'
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
          UpdateActionTarget: {
            http: {
              method: 'PATCH',
              requestUri: '/actionTargets/{ActionTargetArn+}'
            },
            input: {
              type: 'structure',
              required: ['ActionTargetArn'],
              members: {
                ActionTargetArn: {
                  location: 'uri',
                  locationName: 'ActionTargetArn'
                },
                Name: {},
                Description: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateConfigurationPolicy: {
            http: {
              method: 'PATCH',
              requestUri: '/configurationPolicy/{Identifier}'
            },
            input: {
              type: 'structure',
              required: ['Identifier'],
              members: {
                Identifier: {
                  location: 'uri',
                  locationName: 'Identifier'
                },
                Name: {},
                Description: {},
                UpdatedReason: {},
                ConfigurationPolicy: {
                  shape: 'Sq5'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                Id: {},
                Name: {},
                Description: {},
                UpdatedAt: {
                  shape: 'S1p'
                },
                CreatedAt: {
                  shape: 'S1p'
                },
                ConfigurationPolicy: {
                  shape: 'Sq5'
                }
              }
            }
          },
          UpdateFindingAggregator: {
            http: {
              method: 'PATCH',
              requestUri: '/findingAggregator/update'
            },
            input: {
              type: 'structure',
              required: ['FindingAggregatorArn', 'RegionLinkingMode'],
              members: {
                FindingAggregatorArn: {},
                RegionLinkingMode: {},
                Regions: {
                  shape: 'S23'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                FindingAggregatorArn: {},
                FindingAggregationRegion: {},
                RegionLinkingMode: {},
                Regions: {
                  shape: 'S23'
                }
              }
            }
          },
          UpdateFindings: {
            http: {
              method: 'PATCH',
              requestUri: '/findings'
            },
            input: {
              type: 'structure',
              required: ['Filters'],
              members: {
                Filters: {
                  shape: 'Sqh'
                },
                Note: {
                  shape: 'S1e'
                },
                RecordState: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateInsight: {
            http: {
              method: 'PATCH',
              requestUri: '/insights/{InsightArn+}'
            },
            input: {
              type: 'structure',
              required: ['InsightArn'],
              members: {
                InsightArn: {
                  location: 'uri',
                  locationName: 'InsightArn'
                },
                Name: {},
                Filters: {
                  shape: 'Sqh'
                },
                GroupByAttribute: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateOrganizationConfiguration: {
            http: {
              requestUri: '/organization/configuration'
            },
            input: {
              type: 'structure',
              required: ['AutoEnable'],
              members: {
                AutoEnable: {
                  type: 'boolean'
                },
                AutoEnableStandards: {},
                OrganizationConfiguration: {
                  shape: 'Sro'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateSecurityControl: {
            http: {
              method: 'PATCH',
              requestUri: '/securityControl/update'
            },
            input: {
              type: 'structure',
              required: ['SecurityControlId', 'Parameters'],
              members: {
                SecurityControlId: {},
                Parameters: {
                  shape: 'S2a'
                },
                LastUpdateReason: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateSecurityHubConfiguration: {
            http: {
              method: 'PATCH',
              requestUri: '/accounts'
            },
            input: {
              type: 'structure',
              members: {
                AutoEnableControls: {
                  type: 'boolean'
                },
                ControlFindingGenerator: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateStandardsControl: {
            http: {
              method: 'PATCH',
              requestUri: '/standards/control/{StandardsControlArn+}'
            },
            input: {
              type: 'structure',
              required: ['StandardsControlArn'],
              members: {
                StandardsControlArn: {
                  location: 'uri',
                  locationName: 'StandardsControlArn'
                },
                ControlStatus: {},
                DisabledReason: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          }
        },
        shapes: {
          S7: {
            type: 'list',
            member: {}
          },
          S9: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                RuleArn: {},
                ErrorCode: {
                  type: 'integer'
                },
                ErrorMessage: {}
              }
            }
          },
          Sd: {
            type: 'list',
            member: {}
          },
          Sf: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['StandardsSubscriptionArn', 'StandardsArn', 'StandardsInput', 'StandardsStatus'],
              members: {
                StandardsSubscriptionArn: {},
                StandardsArn: {},
                StandardsInput: {
                  shape: 'Sh'
                },
                StandardsStatus: {},
                StandardsStatusReason: {
                  type: 'structure',
                  required: ['StatusReasonCode'],
                  members: {
                    StatusReasonCode: {}
                  }
                }
              }
            }
          },
          Sh: {
            type: 'map',
            key: {},
            value: {}
          },
          Sw: {
            type: 'structure',
            members: {
              ProductArn: {
                shape: 'Sx'
              },
              AwsAccountId: {
                shape: 'Sx'
              },
              Id: {
                shape: 'Sx'
              },
              GeneratorId: {
                shape: 'Sx'
              },
              Type: {
                shape: 'Sx'
              },
              FirstObservedAt: {
                shape: 'S10'
              },
              LastObservedAt: {
                shape: 'S10'
              },
              CreatedAt: {
                shape: 'S10'
              },
              UpdatedAt: {
                shape: 'S10'
              },
              Confidence: {
                shape: 'S14'
              },
              Criticality: {
                shape: 'S14'
              },
              Title: {
                shape: 'Sx'
              },
              Description: {
                shape: 'Sx'
              },
              SourceUrl: {
                shape: 'Sx'
              },
              ProductName: {
                shape: 'Sx'
              },
              CompanyName: {
                shape: 'Sx'
              },
              SeverityLabel: {
                shape: 'Sx'
              },
              ResourceType: {
                shape: 'Sx'
              },
              ResourceId: {
                shape: 'Sx'
              },
              ResourcePartition: {
                shape: 'Sx'
              },
              ResourceRegion: {
                shape: 'Sx'
              },
              ResourceTags: {
                shape: 'S17'
              },
              ResourceDetailsOther: {
                shape: 'S17'
              },
              ComplianceStatus: {
                shape: 'Sx'
              },
              ComplianceSecurityControlId: {
                shape: 'Sx'
              },
              ComplianceAssociatedStandardsId: {
                shape: 'Sx'
              },
              VerificationState: {
                shape: 'Sx'
              },
              WorkflowStatus: {
                shape: 'Sx'
              },
              RecordState: {
                shape: 'Sx'
              },
              RelatedFindingsProductArn: {
                shape: 'Sx'
              },
              RelatedFindingsId: {
                shape: 'Sx'
              },
              NoteText: {
                shape: 'Sx'
              },
              NoteUpdatedAt: {
                shape: 'S10'
              },
              NoteUpdatedBy: {
                shape: 'Sx'
              },
              UserDefinedFields: {
                shape: 'S17'
              },
              ResourceApplicationArn: {
                shape: 'Sx'
              },
              ResourceApplicationName: {
                shape: 'Sx'
              },
              AwsAccountName: {
                shape: 'Sx'
              }
            }
          },
          Sx: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Value: {},
                Comparison: {}
              }
            }
          },
          S10: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Start: {},
                End: {},
                DateRange: {
                  type: 'structure',
                  members: {
                    Value: {
                      type: 'integer'
                    },
                    Unit: {}
                  }
                }
              }
            }
          },
          S14: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Gte: {
                  type: 'double'
                },
                Lte: {
                  type: 'double'
                },
                Gt: {
                  type: 'double'
                },
                Lt: {
                  type: 'double'
                },
                Eq: {
                  type: 'double'
                }
              }
            }
          },
          S17: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Key: {},
                Value: {},
                Comparison: {}
              }
            }
          },
          S1a: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Type: {},
                FindingFieldsUpdate: {
                  type: 'structure',
                  members: {
                    Note: {
                      shape: 'S1e'
                    },
                    Severity: {
                      shape: 'S1f'
                    },
                    VerificationState: {},
                    Confidence: {
                      type: 'integer'
                    },
                    Criticality: {
                      type: 'integer'
                    },
                    Types: {
                      shape: 'S1j'
                    },
                    UserDefinedFields: {
                      shape: 'S1k'
                    },
                    Workflow: {
                      shape: 'S1l'
                    },
                    RelatedFindings: {
                      shape: 'S1n'
                    }
                  }
                }
              }
            }
          },
          S1e: {
            type: 'structure',
            required: ['Text', 'UpdatedBy'],
            members: {
              Text: {},
              UpdatedBy: {}
            }
          },
          S1f: {
            type: 'structure',
            members: {
              Normalized: {
                type: 'integer'
              },
              Product: {
                type: 'double'
              },
              Label: {}
            }
          },
          S1j: {
            type: 'list',
            member: {}
          },
          S1k: {
            type: 'map',
            key: {},
            value: {}
          },
          S1l: {
            type: 'structure',
            members: {
              Status: {}
            }
          },
          S1n: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['ProductArn', 'Id'],
              members: {
                ProductArn: {},
                Id: {}
              }
            }
          },
          S1p: {
            type: 'timestamp',
            timestampFormat: 'iso8601'
          },
          S1s: {
            type: 'structure',
            members: {
              Target: {
                shape: 'S1t'
              }
            }
          },
          S1t: {
            type: 'structure',
            members: {
              AccountId: {},
              OrganizationalUnitId: {},
              RootId: {}
            },
            union: true
          },
          S1w: {
            type: 'structure',
            members: {
              ConfigurationPolicyId: {},
              TargetId: {},
              TargetType: {},
              AssociationType: {},
              UpdatedAt: {
                shape: 'S1p'
              },
              AssociationStatus: {},
              AssociationStatusMessage: {}
            }
          },
          S23: {
            type: 'list',
            member: {}
          },
          S2a: {
            type: 'map',
            key: {},
            value: {
              type: 'structure',
              required: ['ValueType'],
              members: {
                ValueType: {},
                Value: {
                  type: 'structure',
                  members: {
                    Integer: {
                      type: 'integer'
                    },
                    IntegerList: {
                      shape: 'S2e'
                    },
                    Double: {
                      type: 'double'
                    },
                    String: {},
                    StringList: {
                      shape: 'S23'
                    },
                    Boolean: {
                      type: 'boolean'
                    },
                    Enum: {},
                    EnumList: {
                      shape: 'S23'
                    }
                  },
                  union: true
                }
              }
            }
          },
          S2e: {
            type: 'list',
            member: {
              type: 'integer'
            }
          },
          S2l: {
            type: 'structure',
            required: ['SecurityControlId', 'StandardsArn'],
            members: {
              SecurityControlId: {},
              StandardsArn: {}
            }
          },
          S2q: {
            type: 'list',
            member: {}
          },
          S2w: {
            type: 'structure',
            required: ['SchemaVersion', 'Id', 'ProductArn', 'GeneratorId', 'AwsAccountId', 'CreatedAt', 'UpdatedAt', 'Title', 'Description', 'Resources'],
            members: {
              SchemaVersion: {},
              Id: {},
              ProductArn: {},
              ProductName: {},
              CompanyName: {},
              Region: {},
              GeneratorId: {},
              AwsAccountId: {},
              Types: {
                shape: 'S1j'
              },
              FirstObservedAt: {},
              LastObservedAt: {},
              CreatedAt: {},
              UpdatedAt: {},
              Severity: {
                type: 'structure',
                members: {
                  Product: {
                    type: 'double'
                  },
                  Label: {},
                  Normalized: {
                    type: 'integer'
                  },
                  Original: {}
                }
              },
              Confidence: {
                type: 'integer'
              },
              Criticality: {
                type: 'integer'
              },
              Title: {},
              Description: {},
              Remediation: {
                type: 'structure',
                members: {
                  Recommendation: {
                    type: 'structure',
                    members: {
                      Text: {},
                      Url: {}
                    }
                  }
                }
              },
              SourceUrl: {},
              ProductFields: {
                shape: 'S1k'
              },
              UserDefinedFields: {
                shape: 'S1k'
              },
              Malware: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['Name'],
                  members: {
                    Name: {},
                    Type: {},
                    Path: {},
                    State: {}
                  }
                }
              },
              Network: {
                type: 'structure',
                members: {
                  Direction: {},
                  Protocol: {},
                  OpenPortRange: {
                    shape: 'S36'
                  },
                  SourceIpV4: {},
                  SourceIpV6: {},
                  SourcePort: {
                    type: 'integer'
                  },
                  SourceDomain: {},
                  SourceMac: {},
                  DestinationIpV4: {},
                  DestinationIpV6: {},
                  DestinationPort: {
                    type: 'integer'
                  },
                  DestinationDomain: {}
                }
              },
              NetworkPath: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    ComponentId: {},
                    ComponentType: {},
                    Egress: {
                      shape: 'S39'
                    },
                    Ingress: {
                      shape: 'S39'
                    }
                  }
                }
              },
              Process: {
                type: 'structure',
                members: {
                  Name: {},
                  Path: {},
                  Pid: {
                    type: 'integer'
                  },
                  ParentPid: {
                    type: 'integer'
                  },
                  LaunchedAt: {},
                  TerminatedAt: {}
                }
              },
              Threats: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    Name: {},
                    Severity: {},
                    ItemCount: {
                      type: 'integer'
                    },
                    FilePaths: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          FilePath: {},
                          FileName: {},
                          ResourceId: {},
                          Hash: {}
                        }
                      }
                    }
                  }
                }
              },
              ThreatIntelIndicators: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    Type: {},
                    Value: {},
                    Category: {},
                    LastObservedAt: {},
                    Source: {},
                    SourceUrl: {}
                  }
                }
              },
              Resources: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['Type', 'Id'],
                  members: {
                    Type: {},
                    Id: {},
                    Partition: {},
                    Region: {},
                    ResourceRole: {},
                    Tags: {
                      shape: 'S1k'
                    },
                    DataClassification: {
                      type: 'structure',
                      members: {
                        DetailedResultsLocation: {},
                        Result: {
                          type: 'structure',
                          members: {
                            MimeType: {},
                            SizeClassified: {
                              type: 'long'
                            },
                            AdditionalOccurrences: {
                              type: 'boolean'
                            },
                            Status: {
                              type: 'structure',
                              members: {
                                Code: {},
                                Reason: {}
                              }
                            },
                            SensitiveData: {
                              type: 'list',
                              member: {
                                type: 'structure',
                                members: {
                                  Category: {},
                                  Detections: {
                                    type: 'list',
                                    member: {
                                      type: 'structure',
                                      members: {
                                        Count: {
                                          type: 'long'
                                        },
                                        Type: {},
                                        Occurrences: {
                                          shape: 'S3w'
                                        }
                                      }
                                    }
                                  },
                                  TotalCount: {
                                    type: 'long'
                                  }
                                }
                              }
                            },
                            CustomDataIdentifiers: {
                              type: 'structure',
                              members: {
                                Detections: {
                                  type: 'list',
                                  member: {
                                    type: 'structure',
                                    members: {
                                      Count: {
                                        type: 'long'
                                      },
                                      Arn: {},
                                      Name: {},
                                      Occurrences: {
                                        shape: 'S3w'
                                      }
                                    }
                                  }
                                },
                                TotalCount: {
                                  type: 'long'
                                }
                              }
                            }
                          }
                        }
                      }
                    },
                    Details: {
                      type: 'structure',
                      members: {
                        AwsAutoScalingAutoScalingGroup: {
                          type: 'structure',
                          members: {
                            LaunchConfigurationName: {},
                            LoadBalancerNames: {
                              shape: 'S23'
                            },
                            HealthCheckType: {},
                            HealthCheckGracePeriod: {
                              type: 'integer'
                            },
                            CreatedTime: {},
                            MixedInstancesPolicy: {
                              type: 'structure',
                              members: {
                                InstancesDistribution: {
                                  type: 'structure',
                                  members: {
                                    OnDemandAllocationStrategy: {},
                                    OnDemandBaseCapacity: {
                                      type: 'integer'
                                    },
                                    OnDemandPercentageAboveBaseCapacity: {
                                      type: 'integer'
                                    },
                                    SpotAllocationStrategy: {},
                                    SpotInstancePools: {
                                      type: 'integer'
                                    },
                                    SpotMaxPrice: {}
                                  }
                                },
                                LaunchTemplate: {
                                  type: 'structure',
                                  members: {
                                    LaunchTemplateSpecification: {
                                      type: 'structure',
                                      members: {
                                        LaunchTemplateId: {},
                                        LaunchTemplateName: {},
                                        Version: {}
                                      }
                                    },
                                    Overrides: {
                                      type: 'list',
                                      member: {
                                        type: 'structure',
                                        members: {
                                          InstanceType: {},
                                          WeightedCapacity: {}
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            },
                            AvailabilityZones: {
                              type: 'list',
                              member: {
                                type: 'structure',
                                members: {
                                  Value: {}
                                }
                              }
                            },
                            LaunchTemplate: {
                              type: 'structure',
                              members: {
                                LaunchTemplateId: {},
                                LaunchTemplateName: {},
                                Version: {}
                              }
                            },
                            CapacityRebalance: {
                              type: 'boolean'
                            }
                          }
                        },
                        AwsCodeBuildProject: {
                          type: 'structure',
                          members: {
                            EncryptionKey: {},
                            Artifacts: {
                              shape: 'S4k'
                            },
                            Environment: {
                              type: 'structure',
                              members: {
                                Certificate: {},
                                EnvironmentVariables: {
                                  type: 'list',
                                  member: {
                                    type: 'structure',
                                    members: {
                                      Name: {},
                                      Type: {},
                                      Value: {}
                                    }
                                  }
                                },
                                PrivilegedMode: {
                                  type: 'boolean'
                                },
                                ImagePullCredentialsType: {},
                                RegistryCredential: {
                                  type: 'structure',
                                  members: {
                                    Credential: {},
                                    CredentialProvider: {}
                                  }
                                },
                                Type: {}
                              }
                            },
                            Name: {},
                            Source: {
                              type: 'structure',
                              members: {
                                Type: {},
                                Location: {},
                                GitCloneDepth: {
                                  type: 'integer'
                                },
                                InsecureSsl: {
                                  type: 'boolean'
                                }
                              }
                            },
                            ServiceRole: {},
                            LogsConfig: {
                              type: 'structure',
                              members: {
                                CloudWatchLogs: {
                                  type: 'structure',
                                  members: {
                                    GroupName: {},
                                    Status: {},
                                    StreamName: {}
                                  }
                                },
                                S3Logs: {
                                  type: 'structure',
                                  members: {
                                    EncryptionDisabled: {
                                      type: 'boolean'
                                    },
                                    Location: {},
                                    Status: {}
                                  }
                                }
                              }
                            },
                            VpcConfig: {
                              type: 'structure',
                              members: {
                                VpcId: {},
                                Subnets: {
                                  shape: 'S4v'
                                },
                                SecurityGroupIds: {
                                  shape: 'S4v'
                                }
                              }
                            },
                            SecondaryArtifacts: {
                              shape: 'S4k'
                            }
                          }
                        },
                        AwsCloudFrontDistribution: {
                          type: 'structure',
                          members: {
                            CacheBehaviors: {
                              type: 'structure',
                              members: {
                                Items: {
                                  type: 'list',
                                  member: {
                                    type: 'structure',
                                    members: {
                                      ViewerProtocolPolicy: {}
                                    }
                                  }
                                }
                              }
                            },
                            DefaultCacheBehavior: {
                              type: 'structure',
                              members: {
                                ViewerProtocolPolicy: {}
                              }
                            },
                            DefaultRootObject: {},
                            DomainName: {},
                            ETag: {},
                            LastModifiedTime: {},
                            Logging: {
                              type: 'structure',
                              members: {
                                Bucket: {},
                                Enabled: {
                                  type: 'boolean'
                                },
                                IncludeCookies: {
                                  type: 'boolean'
                                },
                                Prefix: {}
                              }
                            },
                            Origins: {
                              type: 'structure',
                              members: {
                                Items: {
                                  type: 'list',
                                  member: {
                                    type: 'structure',
                                    members: {
                                      DomainName: {},
                                      Id: {},
                                      OriginPath: {},
                                      S3OriginConfig: {
                                        type: 'structure',
                                        members: {
                                          OriginAccessIdentity: {}
                                        }
                                      },
                                      CustomOriginConfig: {
                                        type: 'structure',
                                        members: {
                                          HttpPort: {
                                            type: 'integer'
                                          },
                                          HttpsPort: {
                                            type: 'integer'
                                          },
                                          OriginKeepaliveTimeout: {
                                            type: 'integer'
                                          },
                                          OriginProtocolPolicy: {},
                                          OriginReadTimeout: {
                                            type: 'integer'
                                          },
                                          OriginSslProtocols: {
                                            type: 'structure',
                                            members: {
                                              Items: {
                                                shape: 'S4v'
                                              },
                                              Quantity: {
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
                            OriginGroups: {
                              type: 'structure',
                              members: {
                                Items: {
                                  type: 'list',
                                  member: {
                                    type: 'structure',
                                    members: {
                                      FailoverCriteria: {
                                        type: 'structure',
                                        members: {
                                          StatusCodes: {
                                            type: 'structure',
                                            members: {
                                              Items: {
                                                type: 'list',
                                                member: {
                                                  type: 'integer'
                                                }
                                              },
                                              Quantity: {
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
                            ViewerCertificate: {
                              type: 'structure',
                              members: {
                                AcmCertificateArn: {},
                                Certificate: {},
                                CertificateSource: {},
                                CloudFrontDefaultCertificate: {
                                  type: 'boolean'
                                },
                                IamCertificateId: {},
                                MinimumProtocolVersion: {},
                                SslSupportMethod: {}
                              }
                            },
                            Status: {},
                            WebAclId: {}
                          }
                        },
                        AwsEc2Instance: {
                          type: 'structure',
                          members: {
                            Type: {},
                            ImageId: {},
                            IpV4Addresses: {
                              shape: 'S23'
                            },
                            IpV6Addresses: {
                              shape: 'S23'
                            },
                            KeyName: {},
                            IamInstanceProfileArn: {},
                            VpcId: {},
                            SubnetId: {},
                            LaunchedAt: {},
                            NetworkInterfaces: {
                              type: 'list',
                              member: {
                                type: 'structure',
                                members: {
                                  NetworkInterfaceId: {}
                                }
                              }
                            },
                            VirtualizationType: {},
                            MetadataOptions: {
                              type: 'structure',
                              members: {
                                HttpEndpoint: {},
                                HttpProtocolIpv6: {},
                                HttpPutResponseHopLimit: {
                                  type: 'integer'
                                },
                                HttpTokens: {},
                                InstanceMetadataTags: {}
                              }
                            },
                            Monitoring: {
                              type: 'structure',
                              members: {
                                State: {}
                              }
                            }
                          }
                        },
                        AwsEc2NetworkInterface: {
                          type: 'structure',
                          members: {
                            Attachment: {
                              type: 'structure',
                              members: {
                                AttachTime: {},
                                AttachmentId: {},
                                DeleteOnTermination: {
                                  type: 'boolean'
                                },
                                DeviceIndex: {
                                  type: 'integer'
                                },
                                InstanceId: {},
                                InstanceOwnerId: {},
                                Status: {}
                              }
                            },
                            NetworkInterfaceId: {},
                            SecurityGroups: {
                              type: 'list',
                              member: {
                                type: 'structure',
                                members: {
                                  GroupName: {},
                                  GroupId: {}
                                }
                              }
                            },
                            SourceDestCheck: {
                              type: 'boolean'
                            },
                            IpV6Addresses: {
                              type: 'list',
                              member: {
                                type: 'structure',
                                members: {
                                  IpV6Address: {}
                                }
                              }
                            },
                            PrivateIpAddresses: {
                              type: 'list',
                              member: {
                                type: 'structure',
                                members: {
                                  PrivateIpAddress: {},
                                  PrivateDnsName: {}
                                }
                              }
                            },
                            PublicDnsName: {},
                            PublicIp: {}
                          }
                        },
                        AwsEc2SecurityGroup: {
                          type: 'structure',
                          members: {
                            GroupName: {},
                            GroupId: {},
                            OwnerId: {},
                            VpcId: {},
                            IpPermissions: {
                              shape: 'S5t'
                            },
                            IpPermissionsEgress: {
                              shape: 'S5t'
                            }
                          }
                        },
                        AwsEc2Volume: {
                          type: 'structure',
                          members: {
                            CreateTime: {},
                            DeviceName: {},
                            Encrypted: {
                              type: 'boolean'
                            },
                            Size: {
                              type: 'integer'
                            },
                            SnapshotId: {},
                            Status: {},
                            KmsKeyId: {},
                            Attachments: {
                              type: 'list',
                              member: {
                                type: 'structure',
                                members: {
                                  AttachTime: {},
                                  DeleteOnTermination: {
                                    type: 'boolean'
                                  },
                                  InstanceId: {},
                                  Status: {}
                                }
                              }
                            },
                            VolumeId: {},
                            VolumeType: {},
                            VolumeScanStatus: {}
                          }
                        },
                        AwsEc2Vpc: {
                          type: 'structure',
                          members: {
                            CidrBlockAssociationSet: {
                              type: 'list',
                              member: {
                                type: 'structure',
                                members: {
                                  AssociationId: {},
                                  CidrBlock: {},
                                  CidrBlockState: {}
                                }
                              }
                            },
                            Ipv6CidrBlockAssociationSet: {
                              shape: 'S69'
                            },
                            DhcpOptionsId: {},
                            State: {}
                          }
                        },
                        AwsEc2Eip: {
                          type: 'structure',
                          members: {
                            InstanceId: {},
                            PublicIp: {},
                            AllocationId: {},
                            AssociationId: {},
                            Domain: {},
                            PublicIpv4Pool: {},
                            NetworkBorderGroup: {},
                            NetworkInterfaceId: {},
                            NetworkInterfaceOwnerId: {},
                            PrivateIpAddress: {}
                          }
                        },
                        AwsEc2Subnet: {
                          type: 'structure',
                          members: {
                            AssignIpv6AddressOnCreation: {
                              type: 'boolean'
                            },
                            AvailabilityZone: {},
                            AvailabilityZoneId: {},
                            AvailableIpAddressCount: {
                              type: 'integer'
                            },
                            CidrBlock: {},
                            DefaultForAz: {
                              type: 'boolean'
                            },
                            MapPublicIpOnLaunch: {
                              type: 'boolean'
                            },
                            OwnerId: {},
                            State: {},
                            SubnetArn: {},
                            SubnetId: {},
                            VpcId: {},
                            Ipv6CidrBlockAssociationSet: {
                              shape: 'S69'
                            }
                          }
                        },
                        AwsEc2NetworkAcl: {
                          type: 'structure',
                          members: {
                            IsDefault: {
                              type: 'boolean'
                            },
                            NetworkAclId: {},
                            OwnerId: {},
                            VpcId: {},
                            Associations: {
                              type: 'list',
                              member: {
                                type: 'structure',
                                members: {
                                  NetworkAclAssociationId: {},
                                  NetworkAclId: {},
                                  SubnetId: {}
                                }
                              }
                            },
                            Entries: {
                              type: 'list',
                              member: {
                                type: 'structure',
                                members: {
                                  CidrBlock: {},
                                  Egress: {
                                    type: 'boolean'
                                  },
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
                                  Ipv6CidrBlock: {},
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
                                  Protocol: {},
                                  RuleAction: {},
                                  RuleNumber: {
                                    type: 'integer'
                                  }
                                }
                              }
                            }
                          }
                        },
                        AwsElbv2LoadBalancer: {
                          type: 'structure',
                          members: {
                            AvailabilityZones: {
                              type: 'list',
                              member: {
                                type: 'structure',
                                members: {
                                  ZoneName: {},
                                  SubnetId: {}
                                }
                              }
                            },
                            CanonicalHostedZoneId: {},
                            CreatedTime: {},
                            DNSName: {},
                            IpAddressType: {},
                            Scheme: {},
                            SecurityGroups: {
                              type: 'list',
                              member: {}
                            },
                            State: {
                              type: 'structure',
                              members: {
                                Code: {},
                                Reason: {}
                              }
                            },
                            Type: {},
                            VpcId: {},
                            LoadBalancerAttributes: {
                              type: 'list',
                              member: {
                                type: 'structure',
                                members: {
                                  Key: {},
                                  Value: {}
                                }
                              }
                            }
                          }
                        },
                        AwsElasticBeanstalkEnvironment: {
                          type: 'structure',
                          members: {
                            ApplicationName: {},
                            Cname: {},
                            DateCreated: {},
                            DateUpdated: {},
                            Description: {},
                            EndpointUrl: {},
                            EnvironmentArn: {},
                            EnvironmentId: {},
                            EnvironmentLinks: {
                              type: 'list',
                              member: {
                                type: 'structure',
                                members: {
                                  EnvironmentName: {},
                                  LinkName: {}
                                }
                              }
                            },
                            EnvironmentName: {},
                            OptionSettings: {
                              type: 'list',
                              member: {
                                type: 'structure',
                                members: {
                                  Namespace: {},
                                  OptionName: {},
                                  ResourceName: {},
                                  Value: {}
                                }
                              }
                            },
                            PlatformArn: {},
                            SolutionStackName: {},
                            Status: {},
                            Tier: {
                              type: 'structure',
                              members: {
                                Name: {},
                                Type: {},
                                Version: {}
                              }
                            },
                            VersionLabel: {}
                          }
                        },
                        AwsElasticsearchDomain: {
                          type: 'structure',
                          members: {
                            AccessPolicies: {},
                            DomainEndpointOptions: {
                              type: 'structure',
                              members: {
                                EnforceHTTPS: {
                                  type: 'boolean'
                                },
                                TLSSecurityPolicy: {}
                              }
                            },
                            DomainId: {},
                            DomainName: {},
                            Endpoint: {},
                            Endpoints: {
                              shape: 'S1k'
                            },
                            ElasticsearchVersion: {},
                            ElasticsearchClusterConfig: {
                              type: 'structure',
                              members: {
                                DedicatedMasterCount: {
                                  type: 'integer'
                                },
                                DedicatedMasterEnabled: {
                                  type: 'boolean'
                                },
                                DedicatedMasterType: {},
                                InstanceCount: {
                                  type: 'integer'
                                },
                                InstanceType: {},
                                ZoneAwarenessConfig: {
                                  type: 'structure',
                                  members: {
                                    AvailabilityZoneCount: {
                                      type: 'integer'
                                    }
                                  }
                                },
                                ZoneAwarenessEnabled: {
                                  type: 'boolean'
                                }
                              }
                            },
                            EncryptionAtRestOptions: {
                              type: 'structure',
                              members: {
                                Enabled: {
                                  type: 'boolean'
                                },
                                KmsKeyId: {}
                              }
                            },
                            LogPublishingOptions: {
                              type: 'structure',
                              members: {
                                IndexSlowLogs: {
                                  shape: 'S73'
                                },
                                SearchSlowLogs: {
                                  shape: 'S73'
                                },
                                AuditLogs: {
                                  shape: 'S73'
                                }
                              }
                            },
                            NodeToNodeEncryptionOptions: {
                              type: 'structure',
                              members: {
                                Enabled: {
                                  type: 'boolean'
                                }
                              }
                            },
                            ServiceSoftwareOptions: {
                              type: 'structure',
                              members: {
                                AutomatedUpdateDate: {},
                                Cancellable: {
                                  type: 'boolean'
                                },
                                CurrentVersion: {},
                                Description: {},
                                NewVersion: {},
                                UpdateAvailable: {
                                  type: 'boolean'
                                },
                                UpdateStatus: {}
                              }
                            },
                            VPCOptions: {
                              type: 'structure',
                              members: {
                                AvailabilityZones: {
                                  shape: 'S4v'
                                },
                                SecurityGroupIds: {
                                  shape: 'S4v'
                                },
                                SubnetIds: {
                                  shape: 'S4v'
                                },
                                VPCId: {}
                              }
                            }
                          }
                        },
                        AwsS3Bucket: {
                          type: 'structure',
                          members: {
                            OwnerId: {},
                            OwnerName: {},
                            OwnerAccountId: {},
                            CreatedAt: {},
                            ServerSideEncryptionConfiguration: {
                              type: 'structure',
                              members: {
                                Rules: {
                                  type: 'list',
                                  member: {
                                    type: 'structure',
                                    members: {
                                      ApplyServerSideEncryptionByDefault: {
                                        type: 'structure',
                                        members: {
                                          SSEAlgorithm: {},
                                          KMSMasterKeyID: {}
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            },
                            BucketLifecycleConfiguration: {
                              type: 'structure',
                              members: {
                                Rules: {
                                  type: 'list',
                                  member: {
                                    type: 'structure',
                                    members: {
                                      AbortIncompleteMultipartUpload: {
                                        type: 'structure',
                                        members: {
                                          DaysAfterInitiation: {
                                            type: 'integer'
                                          }
                                        }
                                      },
                                      ExpirationDate: {},
                                      ExpirationInDays: {
                                        type: 'integer'
                                      },
                                      ExpiredObjectDeleteMarker: {
                                        type: 'boolean'
                                      },
                                      Filter: {
                                        type: 'structure',
                                        members: {
                                          Predicate: {
                                            type: 'structure',
                                            members: {
                                              Operands: {
                                                type: 'list',
                                                member: {
                                                  type: 'structure',
                                                  members: {
                                                    Prefix: {},
                                                    Tag: {
                                                      type: 'structure',
                                                      members: {
                                                        Key: {},
                                                        Value: {}
                                                      }
                                                    },
                                                    Type: {}
                                                  }
                                                }
                                              },
                                              Prefix: {},
                                              Tag: {
                                                type: 'structure',
                                                members: {
                                                  Key: {},
                                                  Value: {}
                                                }
                                              },
                                              Type: {}
                                            }
                                          }
                                        }
                                      },
                                      ID: {},
                                      NoncurrentVersionExpirationInDays: {
                                        type: 'integer'
                                      },
                                      NoncurrentVersionTransitions: {
                                        type: 'list',
                                        member: {
                                          type: 'structure',
                                          members: {
                                            Days: {
                                              type: 'integer'
                                            },
                                            StorageClass: {}
                                          }
                                        }
                                      },
                                      Prefix: {},
                                      Status: {},
                                      Transitions: {
                                        type: 'list',
                                        member: {
                                          type: 'structure',
                                          members: {
                                            Date: {},
                                            Days: {
                                              type: 'integer'
                                            },
                                            StorageClass: {}
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            },
                            PublicAccessBlockConfiguration: {
                              shape: 'S7q'
                            },
                            AccessControlList: {},
                            BucketLoggingConfiguration: {
                              type: 'structure',
                              members: {
                                DestinationBucketName: {},
                                LogFilePrefix: {}
                              }
                            },
                            BucketWebsiteConfiguration: {
                              type: 'structure',
                              members: {
                                ErrorDocument: {},
                                IndexDocumentSuffix: {},
                                RedirectAllRequestsTo: {
                                  type: 'structure',
                                  members: {
                                    Hostname: {},
                                    Protocol: {}
                                  }
                                },
                                RoutingRules: {
                                  type: 'list',
                                  member: {
                                    type: 'structure',
                                    members: {
                                      Condition: {
                                        type: 'structure',
                                        members: {
                                          HttpErrorCodeReturnedEquals: {},
                                          KeyPrefixEquals: {}
                                        }
                                      },
                                      Redirect: {
                                        type: 'structure',
                                        members: {
                                          Hostname: {},
                                          HttpRedirectCode: {},
                                          Protocol: {},
                                          ReplaceKeyPrefixWith: {},
                                          ReplaceKeyWith: {}
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            },
                            BucketNotificationConfiguration: {
                              type: 'structure',
                              members: {
                                Configurations: {
                                  type: 'list',
                                  member: {
                                    type: 'structure',
                                    members: {
                                      Events: {
                                        type: 'list',
                                        member: {}
                                      },
                                      Filter: {
                                        type: 'structure',
                                        members: {
                                          S3KeyFilter: {
                                            type: 'structure',
                                            members: {
                                              FilterRules: {
                                                type: 'list',
                                                member: {
                                                  type: 'structure',
                                                  members: {
                                                    Name: {},
                                                    Value: {}
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      },
                                      Destination: {},
                                      Type: {}
                                    }
                                  }
                                }
                              }
                            },
                            BucketVersioningConfiguration: {
                              type: 'structure',
                              members: {
                                IsMfaDeleteEnabled: {
                                  type: 'boolean'
                                },
                                Status: {}
                              }
                            },
                            ObjectLockConfiguration: {
                              type: 'structure',
                              members: {
                                ObjectLockEnabled: {},
                                Rule: {
                                  type: 'structure',
                                  members: {
                                    DefaultRetention: {
                                      type: 'structure',
                                      members: {
                                        Days: {
                                          type: 'integer'
                                        },
                                        Mode: {},
                                        Years: {
                                          type: 'integer'
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            },
                            Name: {}
                          }
                        },
                        AwsS3AccountPublicAccessBlock: {
                          shape: 'S7q'
                        },
                        AwsS3Object: {
                          type: 'structure',
                          members: {
                            LastModified: {},
                            ETag: {},
                            VersionId: {},
                            ContentType: {},
                            ServerSideEncryption: {},
                            SSEKMSKeyId: {}
                          }
                        },
                        AwsSecretsManagerSecret: {
                          type: 'structure',
                          members: {
                            RotationRules: {
                              type: 'structure',
                              members: {
                                AutomaticallyAfterDays: {
                                  type: 'integer'
                                }
                              }
                            },
                            RotationOccurredWithinFrequency: {
                              type: 'boolean'
                            },
                            KmsKeyId: {},
                            RotationEnabled: {
                              type: 'boolean'
                            },
                            RotationLambdaArn: {},
                            Deleted: {
                              type: 'boolean'
                            },
                            Name: {},
                            Description: {}
                          }
                        },
                        AwsIamAccessKey: {
                          type: 'structure',
                          members: {
                            UserName: {
                              deprecated: true,
                              deprecatedMessage: 'This filter is deprecated. Instead, use PrincipalName.'
                            },
                            Status: {},
                            CreatedAt: {},
                            PrincipalId: {},
                            PrincipalType: {},
                            PrincipalName: {},
                            AccountId: {},
                            AccessKeyId: {},
                            SessionContext: {
                              type: 'structure',
                              members: {
                                Attributes: {
                                  type: 'structure',
                                  members: {
                                    MfaAuthenticated: {
                                      type: 'boolean'
                                    },
                                    CreationDate: {}
                                  }
                                },
                                SessionIssuer: {
                                  type: 'structure',
                                  members: {
                                    Type: {},
                                    PrincipalId: {},
                                    Arn: {},
                                    AccountId: {},
                                    UserName: {}
                                  }
                                }
                              }
                            }
                          }
                        },
                        AwsIamUser: {
                          type: 'structure',
                          members: {
                            AttachedManagedPolicies: {
                              shape: 'S8k'
                            },
                            CreateDate: {},
                            GroupList: {
                              shape: 'S23'
                            },
                            Path: {},
                            PermissionsBoundary: {
                              shape: 'S8m'
                            },
                            UserId: {},
                            UserName: {},
                            UserPolicyList: {
                              type: 'list',
                              member: {
                                type: 'structure',
                                members: {
                                  PolicyName: {}
                                }
                              }
                            }
                          }
                        },
                        AwsIamPolicy: {
                          type: 'structure',
                          members: {
                            AttachmentCount: {
                              type: 'integer'
                            },
                            CreateDate: {},
                            DefaultVersionId: {},
                            Description: {},
                            IsAttachable: {
                              type: 'boolean'
                            },
                            Path: {},
                            PermissionsBoundaryUsageCount: {
                              type: 'integer'
                            },
                            PolicyId: {},
                            PolicyName: {},
                            PolicyVersionList: {
                              type: 'list',
                              member: {
                                type: 'structure',
                                members: {
                                  VersionId: {},
                                  IsDefaultVersion: {
                                    type: 'boolean'
                                  },
                                  CreateDate: {}
                                }
                              }
                            },
                            UpdateDate: {}
                          }
                        },
                        AwsApiGatewayV2Stage: {
                          type: 'structure',
                          members: {
                            ClientCertificateId: {},
                            CreatedDate: {},
                            Description: {},
                            DefaultRouteSettings: {
                              shape: 'S8t'
                            },
                            DeploymentId: {},
                            LastUpdatedDate: {},
                            RouteSettings: {
                              shape: 'S8t'
                            },
                            StageName: {},
                            StageVariables: {
                              shape: 'S1k'
                            },
                            AccessLogSettings: {
                              shape: 'S8u'
                            },
                            AutoDeploy: {
                              type: 'boolean'
                            },
                            LastDeploymentStatusMessage: {},
                            ApiGatewayManaged: {
                              type: 'boolean'
                            }
                          }
                        },
                        AwsApiGatewayV2Api: {
                          type: 'structure',
                          members: {
                            ApiEndpoint: {},
                            ApiId: {},
                            ApiKeySelectionExpression: {},
                            CreatedDate: {},
                            Description: {},
                            Version: {},
                            Name: {},
                            ProtocolType: {},
                            RouteSelectionExpression: {},
                            CorsConfiguration: {
                              type: 'structure',
                              members: {
                                AllowOrigins: {
                                  shape: 'S4v'
                                },
                                AllowCredentials: {
                                  type: 'boolean'
                                },
                                ExposeHeaders: {
                                  shape: 'S4v'
                                },
                                MaxAge: {
                                  type: 'integer'
                                },
                                AllowMethods: {
                                  shape: 'S4v'
                                },
                                AllowHeaders: {
                                  shape: 'S4v'
                                }
                              }
                            }
                          }
                        },
                        AwsDynamoDbTable: {
                          type: 'structure',
                          members: {
                            AttributeDefinitions: {
                              type: 'list',
                              member: {
                                type: 'structure',
                                members: {
                                  AttributeName: {},
                                  AttributeType: {}
                                }
                              }
                            },
                            BillingModeSummary: {
                              type: 'structure',
                              members: {
                                BillingMode: {},
                                LastUpdateToPayPerRequestDateTime: {}
                              }
                            },
                            CreationDateTime: {},
                            GlobalSecondaryIndexes: {
                              type: 'list',
                              member: {
                                type: 'structure',
                                members: {
                                  Backfilling: {
                                    type: 'boolean'
                                  },
                                  IndexArn: {},
                                  IndexName: {},
                                  IndexSizeBytes: {
                                    type: 'long'
                                  },
                                  IndexStatus: {},
                                  ItemCount: {
                                    type: 'integer'
                                  },
                                  KeySchema: {
                                    shape: 'S94'
                                  },
                                  Projection: {
                                    shape: 'S96'
                                  },
                                  ProvisionedThroughput: {
                                    shape: 'S97'
                                  }
                                }
                              }
                            },
                            GlobalTableVersion: {},
                            ItemCount: {
                              type: 'integer'
                            },
                            KeySchema: {
                              shape: 'S94'
                            },
                            LatestStreamArn: {},
                            LatestStreamLabel: {},
                            LocalSecondaryIndexes: {
                              type: 'list',
                              member: {
                                type: 'structure',
                                members: {
                                  IndexArn: {},
                                  IndexName: {},
                                  KeySchema: {
                                    shape: 'S94'
                                  },
                                  Projection: {
                                    shape: 'S96'
                                  }
                                }
                              }
                            },
                            ProvisionedThroughput: {
                              shape: 'S97'
                            },
                            Replicas: {
                              type: 'list',
                              member: {
                                type: 'structure',
                                members: {
                                  GlobalSecondaryIndexes: {
                                    type: 'list',
                                    member: {
                                      type: 'structure',
                                      members: {
                                        IndexName: {},
                                        ProvisionedThroughputOverride: {
                                          shape: 'S9e'
                                        }
                                      }
                                    }
                                  },
                                  KmsMasterKeyId: {},
                                  ProvisionedThroughputOverride: {
                                    shape: 'S9e'
                                  },
                                  RegionName: {},
                                  ReplicaStatus: {},
                                  ReplicaStatusDescription: {}
                                }
                              }
                            },
                            RestoreSummary: {
                              type: 'structure',
                              members: {
                                SourceBackupArn: {},
                                SourceTableArn: {},
                                RestoreDateTime: {},
                                RestoreInProgress: {
                                  type: 'boolean'
                                }
                              }
                            },
                            SseDescription: {
                              type: 'structure',
                              members: {
                                InaccessibleEncryptionDateTime: {},
                                Status: {},
                                SseType: {},
                                KmsMasterKeyArn: {}
                              }
                            },
                            StreamSpecification: {
                              type: 'structure',
                              members: {
                                StreamEnabled: {
                                  type: 'boolean'
                                },
                                StreamViewType: {}
                              }
                            },
                            TableId: {},
                            TableName: {},
                            TableSizeBytes: {
                              type: 'long'
                            },
                            TableStatus: {},
                            DeletionProtectionEnabled: {
                              type: 'boolean'
                            }
                          }
                        },
                        AwsApiGatewayStage: {
                          type: 'structure',
                          members: {
                            DeploymentId: {},
                            ClientCertificateId: {},
                            StageName: {},
                            Description: {},
                            CacheClusterEnabled: {
                              type: 'boolean'
                            },
                            CacheClusterSize: {},
                            CacheClusterStatus: {},
                            MethodSettings: {
                              type: 'list',
                              member: {
                                type: 'structure',
                                members: {
                                  MetricsEnabled: {
                                    type: 'boolean'
                                  },
                                  LoggingLevel: {},
                                  DataTraceEnabled: {
                                    type: 'boolean'
                                  },
                                  ThrottlingBurstLimit: {
                                    type: 'integer'
                                  },
                                  ThrottlingRateLimit: {
                                    type: 'double'
                                  },
                                  CachingEnabled: {
                                    type: 'boolean'
                                  },
                                  CacheTtlInSeconds: {
                                    type: 'integer'
                                  },
                                  CacheDataEncrypted: {
                                    type: 'boolean'
                                  },
                                  RequireAuthorizationForCacheControl: {
                                    type: 'boolean'
                                  },
                                  UnauthorizedCacheControlHeaderStrategy: {},
                                  HttpMethod: {},
                                  ResourcePath: {}
                                }
                              }
                            },
                            Variables: {
                              shape: 'S1k'
                            },
                            DocumentationVersion: {},
                            AccessLogSettings: {
                              shape: 'S8u'
                            },
                            CanarySettings: {
                              type: 'structure',
                              members: {
                                PercentTraffic: {
                                  type: 'double'
                                },
                                DeploymentId: {},
                                StageVariableOverrides: {
                                  shape: 'S1k'
                                },
                                UseStageCache: {
                                  type: 'boolean'
                                }
                              }
                            },
                            TracingEnabled: {
                              type: 'boolean'
                            },
                            CreatedDate: {},
                            LastUpdatedDate: {},
                            WebAclArn: {}
                          }
                        },
                        AwsApiGatewayRestApi: {
                          type: 'structure',
                          members: {
                            Id: {},
                            Name: {},
                            Description: {},
                            CreatedDate: {},
                            Version: {},
                            BinaryMediaTypes: {
                              shape: 'S4v'
                            },
                            MinimumCompressionSize: {
                              type: 'integer'
                            },
                            ApiKeySource: {},
                            EndpointConfiguration: {
                              type: 'structure',
                              members: {
                                Types: {
                                  shape: 'S4v'
                                }
                              }
                            }
                          }
                        },
                        AwsCloudTrailTrail: {
                          type: 'structure',
                          members: {
                            CloudWatchLogsLogGroupArn: {},
                            CloudWatchLogsRoleArn: {},
                            HasCustomEventSelectors: {
                              type: 'boolean'
                            },
                            HomeRegion: {},
                            IncludeGlobalServiceEvents: {
                              type: 'boolean'
                            },
                            IsMultiRegionTrail: {
                              type: 'boolean'
                            },
                            IsOrganizationTrail: {
                              type: 'boolean'
                            },
                            KmsKeyId: {},
                            LogFileValidationEnabled: {
                              type: 'boolean'
                            },
                            Name: {},
                            S3BucketName: {},
                            S3KeyPrefix: {},
                            SnsTopicArn: {},
                            SnsTopicName: {},
                            TrailArn: {}
                          }
                        },
                        AwsSsmPatchCompliance: {
                          type: 'structure',
                          members: {
                            Patch: {
                              type: 'structure',
                              members: {
                                ComplianceSummary: {
                                  type: 'structure',
                                  members: {
                                    Status: {},
                                    CompliantCriticalCount: {
                                      type: 'integer'
                                    },
                                    CompliantHighCount: {
                                      type: 'integer'
                                    },
                                    CompliantMediumCount: {
                                      type: 'integer'
                                    },
                                    ExecutionType: {},
                                    NonCompliantCriticalCount: {
                                      type: 'integer'
                                    },
                                    CompliantInformationalCount: {
                                      type: 'integer'
                                    },
                                    NonCompliantInformationalCount: {
                                      type: 'integer'
                                    },
                                    CompliantUnspecifiedCount: {
                                      type: 'integer'
                                    },
                                    NonCompliantLowCount: {
                                      type: 'integer'
                                    },
                                    NonCompliantHighCount: {
                                      type: 'integer'
                                    },
                                    CompliantLowCount: {
                                      type: 'integer'
                                    },
                                    ComplianceType: {},
                                    PatchBaselineId: {},
                                    OverallSeverity: {},
                                    NonCompliantMediumCount: {
                                      type: 'integer'
                                    },
                                    NonCompliantUnspecifiedCount: {
                                      type: 'integer'
                                    },
                                    PatchGroup: {}
                                  }
                                }
                              }
                            }
                          }
                        },
                        AwsCertificateManagerCertificate: {
                          type: 'structure',
                          members: {
                            CertificateAuthorityArn: {},
                            CreatedAt: {},
                            DomainName: {},
                            DomainValidationOptions: {
                              shape: 'S9t'
                            },
                            ExtendedKeyUsages: {
                              type: 'list',
                              member: {
                                type: 'structure',
                                members: {
                                  Name: {},
                                  OId: {}
                                }
                              }
                            },
                            FailureReason: {},
                            ImportedAt: {},
                            InUseBy: {
                              shape: 'S23'
                            },
                            IssuedAt: {},
                            Issuer: {},
                            KeyAlgorithm: {},
                            KeyUsages: {
                              type: 'list',
                              member: {
                                type: 'structure',
                                members: {
                                  Name: {}
                                }
                              }
                            },
                            NotAfter: {},
                            NotBefore: {},
                            Options: {
                              type: 'structure',
                              members: {
                                CertificateTransparencyLoggingPreference: {}
                              }
                            },
                            RenewalEligibility: {},
                            RenewalSummary: {
                              type: 'structure',
                              members: {
                                DomainValidationOptions: {
                                  shape: 'S9t'
                                },
                                RenewalStatus: {},
                                RenewalStatusReason: {},
                                UpdatedAt: {}
                              }
                            },
                            Serial: {},
                            SignatureAlgorithm: {},
                            Status: {},
                            Subject: {},
                            SubjectAlternativeNames: {
                              shape: 'S23'
                            },
                            Type: {}
                          }
                        },
                        AwsRedshiftCluster: {
                          type: 'structure',
                          members: {
                            AllowVersionUpgrade: {
                              type: 'boolean'
                            },
                            AutomatedSnapshotRetentionPeriod: {
                              type: 'integer'
                            },
                            AvailabilityZone: {},
                            ClusterAvailabilityStatus: {},
                            ClusterCreateTime: {},
                            ClusterIdentifier: {},
                            ClusterNodes: {
                              type: 'list',
                              member: {
                                type: 'structure',
                                members: {
                                  NodeRole: {},
                                  PrivateIpAddress: {},
                                  PublicIpAddress: {}
                                }
                              }
                            },
                            ClusterParameterGroups: {
                              type: 'list',
                              member: {
                                type: 'structure',
                                members: {
                                  ClusterParameterStatusList: {
                                    type: 'list',
                                    member: {
                                      type: 'structure',
                                      members: {
                                        ParameterName: {},
                                        ParameterApplyStatus: {},
                                        ParameterApplyErrorDescription: {}
                                      }
                                    }
                                  },
                                  ParameterApplyStatus: {},
                                  ParameterGroupName: {}
                                }
                              }
                            },
                            ClusterPublicKey: {},
                            ClusterRevisionNumber: {},
                            ClusterSecurityGroups: {
                              type: 'list',
                              member: {
                                type: 'structure',
                                members: {
                                  ClusterSecurityGroupName: {},
                                  Status: {}
                                }
                              }
                            },
                            ClusterSnapshotCopyStatus: {
                              type: 'structure',
                              members: {
                                DestinationRegion: {},
                                ManualSnapshotRetentionPeriod: {
                                  type: 'integer'
                                },
                                RetentionPeriod: {
                                  type: 'integer'
                                },
                                SnapshotCopyGrantName: {}
                              }
                            },
                            ClusterStatus: {},
                            ClusterSubnetGroupName: {},
                            ClusterVersion: {},
                            DBName: {},
                            DeferredMaintenanceWindows: {
                              type: 'list',
                              member: {
                                type: 'structure',
                                members: {
                                  DeferMaintenanceEndTime: {},
                                  DeferMaintenanceIdentifier: {},
                                  DeferMaintenanceStartTime: {}
                                }
                              }
                            },
                            ElasticIpStatus: {
                              type: 'structure',
                              members: {
                                ElasticIp: {},
                                Status: {}
                              }
                            },
                            ElasticResizeNumberOfNodeOptions: {},
                            Encrypted: {
                              type: 'boolean'
                            },
                            Endpoint: {
                              type: 'structure',
                              members: {
                                Address: {},
                                Port: {
                                  type: 'integer'
                                }
                              }
                            },
                            EnhancedVpcRouting: {
                              type: 'boolean'
                            },
                            ExpectedNextSnapshotScheduleTime: {},
                            ExpectedNextSnapshotScheduleTimeStatus: {},
                            HsmStatus: {
                              type: 'structure',
                              members: {
                                HsmClientCertificateIdentifier: {},
                                HsmConfigurationIdentifier: {},
                                Status: {}
                              }
                            },
                            IamRoles: {
                              type: 'list',
                              member: {
                                type: 'structure',
                                members: {
                                  ApplyStatus: {},
                                  IamRoleArn: {}
                                }
                              }
                            },
                            KmsKeyId: {},
                            MaintenanceTrackName: {},
                            ManualSnapshotRetentionPeriod: {
                              type: 'integer'
                            },
                            MasterUsername: {},
                            NextMaintenanceWindowStartTime: {},
                            NodeType: {},
                            NumberOfNodes: {
                              type: 'integer'
                            },
                            PendingActions: {
                              shape: 'S23'
                            },
                            PendingModifiedValues: {
                              type: 'structure',
                              members: {
                                AutomatedSnapshotRetentionPeriod: {
                                  type: 'integer'
                                },
                                ClusterIdentifier: {},
                                ClusterType: {},
                                ClusterVersion: {},
                                EncryptionType: {},
                                EnhancedVpcRouting: {
                                  type: 'boolean'
                                },
                                MaintenanceTrackName: {},
                                MasterUserPassword: {},
                                NodeType: {},
                                NumberOfNodes: {
                                  type: 'integer'
                                },
                                PubliclyAccessible: {
                                  type: 'boolean'
                                }
                              }
                            },
                            PreferredMaintenanceWindow: {},
                            PubliclyAccessible: {
                              type: 'boolean'
                            },
                            ResizeInfo: {
                              type: 'structure',
                              members: {
                                AllowCancelResize: {
                                  type: 'boolean'
                                },
                                ResizeType: {}
                              }
                            },
                            RestoreStatus: {
                              type: 'structure',
                              members: {
                                CurrentRestoreRateInMegaBytesPerSecond: {
                                  type: 'double'
                                },
                                ElapsedTimeInSeconds: {
                                  type: 'long'
                                },
                                EstimatedTimeToCompletionInSeconds: {
                                  type: 'long'
                                },
                                ProgressInMegaBytes: {
                                  type: 'long'
                                },
                                SnapshotSizeInMegaBytes: {
                                  type: 'long'
                                },
                                Status: {}
                              }
                            },
                            SnapshotScheduleIdentifier: {},
                            SnapshotScheduleState: {},
                            VpcId: {},
                            VpcSecurityGroups: {
                              type: 'list',
                              member: {
                                type: 'structure',
                                members: {
                                  Status: {},
                                  VpcSecurityGroupId: {}
                                }
                              }
                            },
                            LoggingStatus: {
                              type: 'structure',
                              members: {
                                BucketName: {},
                                LastFailureMessage: {},
                                LastFailureTime: {},
                                LastSuccessfulDeliveryTime: {},
                                LoggingEnabled: {
                                  type: 'boolean'
                                },
                                S3KeyPrefix: {}
                              }
                            }
                          }
                        },
                        AwsElbLoadBalancer: {
                          type: 'structure',
                          members: {
                            AvailabilityZones: {
                              shape: 'S23'
                            },
                            BackendServerDescriptions: {
                              type: 'list',
                              member: {
                                type: 'structure',
                                members: {
                                  InstancePort: {
                                    type: 'integer'
                                  },
                                  PolicyNames: {
                                    shape: 'S23'
                                  }
                                }
                              }
                            },
                            CanonicalHostedZoneName: {},
                            CanonicalHostedZoneNameID: {},
                            CreatedTime: {},
                            DnsName: {},
                            HealthCheck: {
                              type: 'structure',
                              members: {
                                HealthyThreshold: {
                                  type: 'integer'
                                },
                                Interval: {
                                  type: 'integer'
                                },
                                Target: {},
                                Timeout: {
                                  type: 'integer'
                                },
                                UnhealthyThreshold: {
                                  type: 'integer'
                                }
                              }
                            },
                            Instances: {
                              type: 'list',
                              member: {
                                type: 'structure',
                                members: {
                                  InstanceId: {}
                                }
                              }
                            },
                            ListenerDescriptions: {
                              type: 'list',
                              member: {
                                type: 'structure',
                                members: {
                                  Listener: {
                                    type: 'structure',
                                    members: {
                                      InstancePort: {
                                        type: 'integer'
                                      },
                                      InstanceProtocol: {},
                                      LoadBalancerPort: {
                                        type: 'integer'
                                      },
                                      Protocol: {},
                                      SslCertificateId: {}
                                    }
                                  },
                                  PolicyNames: {
                                    shape: 'S23'
                                  }
                                }
                              }
                            },
                            LoadBalancerAttributes: {
                              type: 'structure',
                              members: {
                                AccessLog: {
                                  type: 'structure',
                                  members: {
                                    EmitInterval: {
                                      type: 'integer'
                                    },
                                    Enabled: {
                                      type: 'boolean'
                                    },
                                    S3BucketName: {},
                                    S3BucketPrefix: {}
                                  }
                                },
                                ConnectionDraining: {
                                  type: 'structure',
                                  members: {
                                    Enabled: {
                                      type: 'boolean'
                                    },
                                    Timeout: {
                                      type: 'integer'
                                    }
                                  }
                                },
                                ConnectionSettings: {
                                  type: 'structure',
                                  members: {
                                    IdleTimeout: {
                                      type: 'integer'
                                    }
                                  }
                                },
                                CrossZoneLoadBalancing: {
                                  type: 'structure',
                                  members: {
                                    Enabled: {
                                      type: 'boolean'
                                    }
                                  }
                                },
                                AdditionalAttributes: {
                                  type: 'list',
                                  member: {
                                    type: 'structure',
                                    members: {
                                      Key: {},
                                      Value: {}
                                    }
                                  }
                                }
                              }
                            },
                            LoadBalancerName: {},
                            Policies: {
                              type: 'structure',
                              members: {
                                AppCookieStickinessPolicies: {
                                  type: 'list',
                                  member: {
                                    type: 'structure',
                                    members: {
                                      CookieName: {},
                                      PolicyName: {}
                                    }
                                  }
                                },
                                LbCookieStickinessPolicies: {
                                  type: 'list',
                                  member: {
                                    type: 'structure',
                                    members: {
                                      CookieExpirationPeriod: {
                                        type: 'long'
                                      },
                                      PolicyName: {}
                                    }
                                  }
                                },
                                OtherPolicies: {
                                  shape: 'S23'
                                }
                              }
                            },
                            Scheme: {},
                            SecurityGroups: {
                              shape: 'S23'
                            },
                            SourceSecurityGroup: {
                              type: 'structure',
                              members: {
                                GroupName: {},
                                OwnerAlias: {}
                              }
                            },
                            Subnets: {
                              shape: 'S23'
                            },
                            VpcId: {}
                          }
                        },
                        AwsIamGroup: {
                          type: 'structure',
                          members: {
                            AttachedManagedPolicies: {
                              shape: 'S8k'
                            },
                            CreateDate: {},
                            GroupId: {},
                            GroupName: {},
                            GroupPolicyList: {
                              type: 'list',
                              member: {
                                type: 'structure',
                                members: {
                                  PolicyName: {}
                                }
                              }
                            },
                            Path: {}
                          }
                        },
                        AwsIamRole: {
                          type: 'structure',
                          members: {
                            AssumeRolePolicyDocument: {},
                            AttachedManagedPolicies: {
                              shape: 'S8k'
                            },
                            CreateDate: {},
                            InstanceProfileList: {
                              type: 'list',
                              member: {
                                type: 'structure',
                                members: {
                                  Arn: {},
                                  CreateDate: {},
                                  InstanceProfileId: {},
                                  InstanceProfileName: {},
                                  Path: {},
                                  Roles: {
                                    type: 'list',
                                    member: {
                                      type: 'structure',
                                      members: {
                                        Arn: {},
                                        AssumeRolePolicyDocument: {},
                                        CreateDate: {},
                                        Path: {},
                                        RoleId: {},
                                        RoleName: {}
                                      }
                                    }
                                  }
                                }
                              }
                            },
                            PermissionsBoundary: {
                              shape: 'S8m'
                            },
                            RoleId: {},
                            RoleName: {},
                            RolePolicyList: {
                              type: 'list',
                              member: {
                                type: 'structure',
                                members: {
                                  PolicyName: {}
                                }
                              }
                            },
                            MaxSessionDuration: {
                              type: 'integer'
                            },
                            Path: {}
                          }
                        },
                        AwsKmsKey: {
                          type: 'structure',
                          members: {
                            AWSAccountId: {},
                            CreationDate: {
                              type: 'double'
                            },
                            KeyId: {},
                            KeyManager: {},
                            KeyState: {},
                            Origin: {},
                            Description: {},
                            KeyRotationStatus: {
                              type: 'boolean'
                            }
                          }
                        },
                        AwsLambdaFunction: {
                          type: 'structure',
                          members: {
                            Code: {
                              type: 'structure',
                              members: {
                                S3Bucket: {},
                                S3Key: {},
                                S3ObjectVersion: {},
                                ZipFile: {}
                              }
                            },
                            CodeSha256: {},
                            DeadLetterConfig: {
                              type: 'structure',
                              members: {
                                TargetArn: {}
                              }
                            },
                            Environment: {
                              type: 'structure',
                              members: {
                                Variables: {
                                  shape: 'S1k'
                                },
                                Error: {
                                  type: 'structure',
                                  members: {
                                    ErrorCode: {},
                                    Message: {}
                                  }
                                }
                              }
                            },
                            FunctionName: {},
                            Handler: {},
                            KmsKeyArn: {},
                            LastModified: {},
                            Layers: {
                              type: 'list',
                              member: {
                                type: 'structure',
                                members: {
                                  Arn: {},
                                  CodeSize: {
                                    type: 'integer'
                                  }
                                }
                              }
                            },
                            MasterArn: {},
                            MemorySize: {
                              type: 'integer'
                            },
                            RevisionId: {},
                            Role: {},
                            Runtime: {},
                            Timeout: {
                              type: 'integer'
                            },
                            TracingConfig: {
                              type: 'structure',
                              members: {
                                Mode: {}
                              }
                            },
                            VpcConfig: {
                              type: 'structure',
                              members: {
                                SecurityGroupIds: {
                                  shape: 'S4v'
                                },
                                SubnetIds: {
                                  shape: 'S4v'
                                },
                                VpcId: {}
                              }
                            },
                            Version: {},
                            Architectures: {
                              shape: 'S4v'
                            },
                            PackageType: {}
                          }
                        },
                        AwsLambdaLayerVersion: {
                          type: 'structure',
                          members: {
                            Version: {
                              type: 'long'
                            },
                            CompatibleRuntimes: {
                              shape: 'S4v'
                            },
                            CreatedDate: {}
                          }
                        },
                        AwsRdsDbInstance: {
                          type: 'structure',
                          members: {
                            AssociatedRoles: {
                              type: 'list',
                              member: {
                                type: 'structure',
                                members: {
                                  RoleArn: {},
                                  FeatureName: {},
                                  Status: {}
                                }
                              }
                            },
                            CACertificateIdentifier: {},
                            DBClusterIdentifier: {},
                            DBInstanceIdentifier: {},
                            DBInstanceClass: {},
                            DbInstancePort: {
                              type: 'integer'
                            },
                            DbiResourceId: {},
                            DBName: {},
                            DeletionProtection: {
                              type: 'boolean'
                            },
                            Endpoint: {
                              shape: 'Sc1'
                            },
                            Engine: {},
                            EngineVersion: {},
                            IAMDatabaseAuthenticationEnabled: {
                              type: 'boolean'
                            },
                            InstanceCreateTime: {},
                            KmsKeyId: {},
                            PubliclyAccessible: {
                              type: 'boolean'
                            },
                            StorageEncrypted: {
                              type: 'boolean'
                            },
                            TdeCredentialArn: {},
                            VpcSecurityGroups: {
                              shape: 'Sc2'
                            },
                            MultiAz: {
                              type: 'boolean'
                            },
                            EnhancedMonitoringResourceArn: {},
                            DbInstanceStatus: {},
                            MasterUsername: {},
                            AllocatedStorage: {
                              type: 'integer'
                            },
                            PreferredBackupWindow: {},
                            BackupRetentionPeriod: {
                              type: 'integer'
                            },
                            DbSecurityGroups: {
                              shape: 'S23'
                            },
                            DbParameterGroups: {
                              type: 'list',
                              member: {
                                type: 'structure',
                                members: {
                                  DbParameterGroupName: {},
                                  ParameterApplyStatus: {}
                                }
                              }
                            },
                            AvailabilityZone: {},
                            DbSubnetGroup: {
                              type: 'structure',
                              members: {
                                DbSubnetGroupName: {},
                                DbSubnetGroupDescription: {},
                                VpcId: {},
                                SubnetGroupStatus: {},
                                Subnets: {
                                  type: 'list',
                                  member: {
                                    type: 'structure',
                                    members: {
                                      SubnetIdentifier: {},
                                      SubnetAvailabilityZone: {
                                        type: 'structure',
                                        members: {
                                          Name: {}
                                        }
                                      },
                                      SubnetStatus: {}
                                    }
                                  }
                                },
                                DbSubnetGroupArn: {}
                              }
                            },
                            PreferredMaintenanceWindow: {},
                            PendingModifiedValues: {
                              type: 'structure',
                              members: {
                                DbInstanceClass: {},
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
                                LicenseModel: {},
                                Iops: {
                                  type: 'integer'
                                },
                                DbInstanceIdentifier: {},
                                StorageType: {},
                                CaCertificateIdentifier: {},
                                DbSubnetGroupName: {},
                                PendingCloudWatchLogsExports: {
                                  type: 'structure',
                                  members: {
                                    LogTypesToEnable: {
                                      shape: 'S23'
                                    },
                                    LogTypesToDisable: {
                                      shape: 'S23'
                                    }
                                  }
                                },
                                ProcessorFeatures: {
                                  shape: 'Scc'
                                }
                              }
                            },
                            LatestRestorableTime: {},
                            AutoMinorVersionUpgrade: {
                              type: 'boolean'
                            },
                            ReadReplicaSourceDBInstanceIdentifier: {},
                            ReadReplicaDBInstanceIdentifiers: {
                              shape: 'S23'
                            },
                            ReadReplicaDBClusterIdentifiers: {
                              shape: 'S23'
                            },
                            LicenseModel: {},
                            Iops: {
                              type: 'integer'
                            },
                            OptionGroupMemberships: {
                              type: 'list',
                              member: {
                                type: 'structure',
                                members: {
                                  OptionGroupName: {},
                                  Status: {}
                                }
                              }
                            },
                            CharacterSetName: {},
                            SecondaryAvailabilityZone: {},
                            StatusInfos: {
                              type: 'list',
                              member: {
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
                            },
                            StorageType: {},
                            DomainMemberships: {
                              shape: 'Sci'
                            },
                            CopyTagsToSnapshot: {
                              type: 'boolean'
                            },
                            MonitoringInterval: {
                              type: 'integer'
                            },
                            MonitoringRoleArn: {},
                            PromotionTier: {
                              type: 'integer'
                            },
                            Timezone: {},
                            PerformanceInsightsEnabled: {
                              type: 'boolean'
                            },
                            PerformanceInsightsKmsKeyId: {},
                            PerformanceInsightsRetentionPeriod: {
                              type: 'integer'
                            },
                            EnabledCloudWatchLogsExports: {
                              shape: 'S23'
                            },
                            ProcessorFeatures: {
                              shape: 'Scc'
                            },
                            ListenerEndpoint: {
                              shape: 'Sc1'
                            },
                            MaxAllocatedStorage: {
                              type: 'integer'
                            }
                          }
                        },
                        AwsSnsTopic: {
                          type: 'structure',
                          members: {
                            KmsMasterKeyId: {},
                            Subscription: {
                              type: 'list',
                              member: {
                                type: 'structure',
                                members: {
                                  Endpoint: {},
                                  Protocol: {}
                                }
                              }
                            },
                            TopicName: {},
                            Owner: {},
                            SqsSuccessFeedbackRoleArn: {},
                            SqsFailureFeedbackRoleArn: {},
                            ApplicationSuccessFeedbackRoleArn: {},
                            FirehoseSuccessFeedbackRoleArn: {},
                            FirehoseFailureFeedbackRoleArn: {},
                            HttpSuccessFeedbackRoleArn: {},
                            HttpFailureFeedbackRoleArn: {}
                          }
                        },
                        AwsSqsQueue: {
                          type: 'structure',
                          members: {
                            KmsDataKeyReusePeriodSeconds: {
                              type: 'integer'
                            },
                            KmsMasterKeyId: {},
                            QueueName: {},
                            DeadLetterTargetArn: {}
                          }
                        },
                        AwsWafWebAcl: {
                          type: 'structure',
                          members: {
                            Name: {},
                            DefaultAction: {},
                            Rules: {
                              type: 'list',
                              member: {
                                type: 'structure',
                                members: {
                                  Action: {
                                    type: 'structure',
                                    members: {
                                      Type: {}
                                    }
                                  },
                                  ExcludedRules: {
                                    type: 'list',
                                    member: {
                                      type: 'structure',
                                      members: {
                                        RuleId: {}
                                      }
                                    }
                                  },
                                  OverrideAction: {
                                    type: 'structure',
                                    members: {
                                      Type: {}
                                    }
                                  },
                                  Priority: {
                                    type: 'integer'
                                  },
                                  RuleId: {},
                                  Type: {}
                                }
                              }
                            },
                            WebAclId: {}
                          }
                        },
                        AwsRdsDbSnapshot: {
                          type: 'structure',
                          members: {
                            DbSnapshotIdentifier: {},
                            DbInstanceIdentifier: {},
                            SnapshotCreateTime: {},
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
                            InstanceCreateTime: {},
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
                            SourceRegion: {},
                            SourceDbSnapshotIdentifier: {},
                            StorageType: {},
                            TdeCredentialArn: {},
                            Encrypted: {
                              type: 'boolean'
                            },
                            KmsKeyId: {},
                            Timezone: {},
                            IamDatabaseAuthenticationEnabled: {
                              type: 'boolean'
                            },
                            ProcessorFeatures: {
                              shape: 'Scc'
                            },
                            DbiResourceId: {}
                          }
                        },
                        AwsRdsDbClusterSnapshot: {
                          type: 'structure',
                          members: {
                            AvailabilityZones: {
                              shape: 'S23'
                            },
                            SnapshotCreateTime: {},
                            Engine: {},
                            AllocatedStorage: {
                              type: 'integer'
                            },
                            Status: {},
                            Port: {
                              type: 'integer'
                            },
                            VpcId: {},
                            ClusterCreateTime: {},
                            MasterUsername: {},
                            EngineVersion: {},
                            LicenseModel: {},
                            SnapshotType: {},
                            PercentProgress: {
                              type: 'integer'
                            },
                            StorageEncrypted: {
                              type: 'boolean'
                            },
                            KmsKeyId: {},
                            DbClusterIdentifier: {},
                            DbClusterSnapshotIdentifier: {},
                            IamDatabaseAuthenticationEnabled: {
                              type: 'boolean'
                            },
                            DbClusterSnapshotAttributes: {
                              type: 'list',
                              member: {
                                type: 'structure',
                                members: {
                                  AttributeName: {},
                                  AttributeValues: {
                                    shape: 'S4v'
                                  }
                                }
                              }
                            }
                          }
                        },
                        AwsRdsDbCluster: {
                          type: 'structure',
                          members: {
                            AllocatedStorage: {
                              type: 'integer'
                            },
                            AvailabilityZones: {
                              shape: 'S23'
                            },
                            BackupRetentionPeriod: {
                              type: 'integer'
                            },
                            DatabaseName: {},
                            Status: {},
                            Endpoint: {},
                            ReaderEndpoint: {},
                            CustomEndpoints: {
                              shape: 'S23'
                            },
                            MultiAz: {
                              type: 'boolean'
                            },
                            Engine: {},
                            EngineVersion: {},
                            Port: {
                              type: 'integer'
                            },
                            MasterUsername: {},
                            PreferredBackupWindow: {},
                            PreferredMaintenanceWindow: {},
                            ReadReplicaIdentifiers: {
                              shape: 'S23'
                            },
                            VpcSecurityGroups: {
                              shape: 'Sc2'
                            },
                            HostedZoneId: {},
                            StorageEncrypted: {
                              type: 'boolean'
                            },
                            KmsKeyId: {},
                            DbClusterResourceId: {},
                            AssociatedRoles: {
                              type: 'list',
                              member: {
                                type: 'structure',
                                members: {
                                  RoleArn: {},
                                  Status: {}
                                }
                              }
                            },
                            ClusterCreateTime: {},
                            EnabledCloudWatchLogsExports: {
                              shape: 'S23'
                            },
                            EngineMode: {},
                            DeletionProtection: {
                              type: 'boolean'
                            },
                            HttpEndpointEnabled: {
                              type: 'boolean'
                            },
                            ActivityStreamStatus: {},
                            CopyTagsToSnapshot: {
                              type: 'boolean'
                            },
                            CrossAccountClone: {
                              type: 'boolean'
                            },
                            DomainMemberships: {
                              shape: 'Sci'
                            },
                            DbClusterParameterGroup: {},
                            DbSubnetGroup: {},
                            DbClusterOptionGroupMemberships: {
                              type: 'list',
                              member: {
                                type: 'structure',
                                members: {
                                  DbClusterOptionGroupName: {},
                                  Status: {}
                                }
                              }
                            },
                            DbClusterIdentifier: {},
                            DbClusterMembers: {
                              type: 'list',
                              member: {
                                type: 'structure',
                                members: {
                                  IsClusterWriter: {
                                    type: 'boolean'
                                  },
                                  PromotionTier: {
                                    type: 'integer'
                                  },
                                  DbInstanceIdentifier: {},
                                  DbClusterParameterGroupStatus: {}
                                }
                              }
                            },
                            IamDatabaseAuthenticationEnabled: {
                              type: 'boolean'
                            },
                            AutoMinorVersionUpgrade: {
                              type: 'boolean'
                            }
                          }
                        },
                        AwsEcsCluster: {
                          type: 'structure',
                          members: {
                            ClusterArn: {},
                            ActiveServicesCount: {
                              type: 'integer'
                            },
                            CapacityProviders: {
                              shape: 'S4v'
                            },
                            ClusterSettings: {
                              type: 'list',
                              member: {
                                type: 'structure',
                                members: {
                                  Name: {},
                                  Value: {}
                                }
                              }
                            },
                            Configuration: {
                              type: 'structure',
                              members: {
                                ExecuteCommandConfiguration: {
                                  type: 'structure',
                                  members: {
                                    KmsKeyId: {},
                                    LogConfiguration: {
                                      type: 'structure',
                                      members: {
                                        CloudWatchEncryptionEnabled: {
                                          type: 'boolean'
                                        },
                                        CloudWatchLogGroupName: {},
                                        S3BucketName: {},
                                        S3EncryptionEnabled: {
                                          type: 'boolean'
                                        },
                                        S3KeyPrefix: {}
                                      }
                                    },
                                    Logging: {}
                                  }
                                }
                              }
                            },
                            DefaultCapacityProviderStrategy: {
                              type: 'list',
                              member: {
                                type: 'structure',
                                members: {
                                  Base: {
                                    type: 'integer'
                                  },
                                  CapacityProvider: {},
                                  Weight: {
                                    type: 'integer'
                                  }
                                }
                              }
                            },
                            ClusterName: {},
                            RegisteredContainerInstancesCount: {
                              type: 'integer'
                            },
                            RunningTasksCount: {
                              type: 'integer'
                            },
                            Status: {}
                          }
                        },
                        AwsEcsContainer: {
                          shape: 'Sde'
                        },
                        AwsEcsTaskDefinition: {
                          type: 'structure',
                          members: {
                            ContainerDefinitions: {
                              type: 'list',
                              member: {
                                type: 'structure',
                                members: {
                                  Command: {
                                    shape: 'S4v'
                                  },
                                  Cpu: {
                                    type: 'integer'
                                  },
                                  DependsOn: {
                                    type: 'list',
                                    member: {
                                      type: 'structure',
                                      members: {
                                        Condition: {},
                                        ContainerName: {}
                                      }
                                    }
                                  },
                                  DisableNetworking: {
                                    type: 'boolean'
                                  },
                                  DnsSearchDomains: {
                                    shape: 'S4v'
                                  },
                                  DnsServers: {
                                    shape: 'S4v'
                                  },
                                  DockerLabels: {
                                    shape: 'S1k'
                                  },
                                  DockerSecurityOptions: {
                                    shape: 'S4v'
                                  },
                                  EntryPoint: {
                                    shape: 'S4v'
                                  },
                                  Environment: {
                                    type: 'list',
                                    member: {
                                      type: 'structure',
                                      members: {
                                        Name: {},
                                        Value: {}
                                      }
                                    }
                                  },
                                  EnvironmentFiles: {
                                    type: 'list',
                                    member: {
                                      type: 'structure',
                                      members: {
                                        Type: {},
                                        Value: {}
                                      }
                                    }
                                  },
                                  Essential: {
                                    type: 'boolean'
                                  },
                                  ExtraHosts: {
                                    type: 'list',
                                    member: {
                                      type: 'structure',
                                      members: {
                                        Hostname: {},
                                        IpAddress: {}
                                      }
                                    }
                                  },
                                  FirelensConfiguration: {
                                    type: 'structure',
                                    members: {
                                      Options: {
                                        shape: 'S1k'
                                      },
                                      Type: {}
                                    }
                                  },
                                  HealthCheck: {
                                    type: 'structure',
                                    members: {
                                      Command: {
                                        shape: 'S4v'
                                      },
                                      Interval: {
                                        type: 'integer'
                                      },
                                      Retries: {
                                        type: 'integer'
                                      },
                                      StartPeriod: {
                                        type: 'integer'
                                      },
                                      Timeout: {
                                        type: 'integer'
                                      }
                                    }
                                  },
                                  Hostname: {},
                                  Image: {},
                                  Interactive: {
                                    type: 'boolean'
                                  },
                                  Links: {
                                    shape: 'S4v'
                                  },
                                  LinuxParameters: {
                                    type: 'structure',
                                    members: {
                                      Capabilities: {
                                        type: 'structure',
                                        members: {
                                          Add: {
                                            shape: 'S4v'
                                          },
                                          Drop: {
                                            shape: 'S4v'
                                          }
                                        }
                                      },
                                      Devices: {
                                        type: 'list',
                                        member: {
                                          type: 'structure',
                                          members: {
                                            ContainerPath: {},
                                            HostPath: {},
                                            Permissions: {
                                              shape: 'S4v'
                                            }
                                          }
                                        }
                                      },
                                      InitProcessEnabled: {
                                        type: 'boolean'
                                      },
                                      MaxSwap: {
                                        type: 'integer'
                                      },
                                      SharedMemorySize: {
                                        type: 'integer'
                                      },
                                      Swappiness: {
                                        type: 'integer'
                                      },
                                      Tmpfs: {
                                        type: 'list',
                                        member: {
                                          type: 'structure',
                                          members: {
                                            ContainerPath: {},
                                            MountOptions: {
                                              shape: 'S4v'
                                            },
                                            Size: {
                                              type: 'integer'
                                            }
                                          }
                                        }
                                      }
                                    }
                                  },
                                  LogConfiguration: {
                                    type: 'structure',
                                    members: {
                                      LogDriver: {},
                                      Options: {
                                        shape: 'S1k'
                                      },
                                      SecretOptions: {
                                        type: 'list',
                                        member: {
                                          type: 'structure',
                                          members: {
                                            Name: {},
                                            ValueFrom: {}
                                          }
                                        }
                                      }
                                    }
                                  },
                                  Memory: {
                                    type: 'integer'
                                  },
                                  MemoryReservation: {
                                    type: 'integer'
                                  },
                                  MountPoints: {
                                    type: 'list',
                                    member: {
                                      type: 'structure',
                                      members: {
                                        ContainerPath: {},
                                        ReadOnly: {
                                          type: 'boolean'
                                        },
                                        SourceVolume: {}
                                      }
                                    }
                                  },
                                  Name: {},
                                  PortMappings: {
                                    type: 'list',
                                    member: {
                                      type: 'structure',
                                      members: {
                                        ContainerPort: {
                                          type: 'integer'
                                        },
                                        HostPort: {
                                          type: 'integer'
                                        },
                                        Protocol: {}
                                      }
                                    }
                                  },
                                  Privileged: {
                                    type: 'boolean'
                                  },
                                  PseudoTerminal: {
                                    type: 'boolean'
                                  },
                                  ReadonlyRootFilesystem: {
                                    type: 'boolean'
                                  },
                                  RepositoryCredentials: {
                                    type: 'structure',
                                    members: {
                                      CredentialsParameter: {}
                                    }
                                  },
                                  ResourceRequirements: {
                                    type: 'list',
                                    member: {
                                      type: 'structure',
                                      members: {
                                        Type: {},
                                        Value: {}
                                      }
                                    }
                                  },
                                  Secrets: {
                                    type: 'list',
                                    member: {
                                      type: 'structure',
                                      members: {
                                        Name: {},
                                        ValueFrom: {}
                                      }
                                    }
                                  },
                                  StartTimeout: {
                                    type: 'integer'
                                  },
                                  StopTimeout: {
                                    type: 'integer'
                                  },
                                  SystemControls: {
                                    type: 'list',
                                    member: {
                                      type: 'structure',
                                      members: {
                                        Namespace: {},
                                        Value: {}
                                      }
                                    }
                                  },
                                  Ulimits: {
                                    type: 'list',
                                    member: {
                                      type: 'structure',
                                      members: {
                                        HardLimit: {
                                          type: 'integer'
                                        },
                                        Name: {},
                                        SoftLimit: {
                                          type: 'integer'
                                        }
                                      }
                                    }
                                  },
                                  User: {},
                                  VolumesFrom: {
                                    type: 'list',
                                    member: {
                                      type: 'structure',
                                      members: {
                                        ReadOnly: {
                                          type: 'boolean'
                                        },
                                        SourceContainer: {}
                                      }
                                    }
                                  },
                                  WorkingDirectory: {}
                                }
                              }
                            },
                            Cpu: {},
                            ExecutionRoleArn: {},
                            Family: {},
                            InferenceAccelerators: {
                              type: 'list',
                              member: {
                                type: 'structure',
                                members: {
                                  DeviceName: {},
                                  DeviceType: {}
                                }
                              }
                            },
                            IpcMode: {},
                            Memory: {},
                            NetworkMode: {},
                            PidMode: {},
                            PlacementConstraints: {
                              type: 'list',
                              member: {
                                type: 'structure',
                                members: {
                                  Expression: {},
                                  Type: {}
                                }
                              }
                            },
                            ProxyConfiguration: {
                              type: 'structure',
                              members: {
                                ContainerName: {},
                                ProxyConfigurationProperties: {
                                  type: 'list',
                                  member: {
                                    type: 'structure',
                                    members: {
                                      Name: {},
                                      Value: {}
                                    }
                                  }
                                },
                                Type: {}
                              }
                            },
                            RequiresCompatibilities: {
                              shape: 'S4v'
                            },
                            TaskRoleArn: {},
                            Volumes: {
                              type: 'list',
                              member: {
                                type: 'structure',
                                members: {
                                  DockerVolumeConfiguration: {
                                    type: 'structure',
                                    members: {
                                      Autoprovision: {
                                        type: 'boolean'
                                      },
                                      Driver: {},
                                      DriverOpts: {
                                        shape: 'S1k'
                                      },
                                      Labels: {
                                        shape: 'S1k'
                                      },
                                      Scope: {}
                                    }
                                  },
                                  EfsVolumeConfiguration: {
                                    type: 'structure',
                                    members: {
                                      AuthorizationConfig: {
                                        type: 'structure',
                                        members: {
                                          AccessPointId: {},
                                          Iam: {}
                                        }
                                      },
                                      FilesystemId: {},
                                      RootDirectory: {},
                                      TransitEncryption: {},
                                      TransitEncryptionPort: {
                                        type: 'integer'
                                      }
                                    }
                                  },
                                  Host: {
                                    type: 'structure',
                                    members: {
                                      SourcePath: {}
                                    }
                                  },
                                  Name: {}
                                }
                              }
                            },
                            Status: {}
                          }
                        },
                        Container: {
                          type: 'structure',
                          members: {
                            ContainerRuntime: {},
                            Name: {},
                            ImageId: {},
                            ImageName: {},
                            LaunchedAt: {},
                            VolumeMounts: {
                              type: 'list',
                              member: {
                                type: 'structure',
                                members: {
                                  Name: {},
                                  MountPath: {}
                                }
                              }
                            },
                            Privileged: {
                              type: 'boolean'
                            }
                          }
                        },
                        Other: {
                          shape: 'S1k'
                        },
                        AwsRdsEventSubscription: {
                          type: 'structure',
                          members: {
                            CustSubscriptionId: {},
                            CustomerAwsId: {},
                            Enabled: {
                              type: 'boolean'
                            },
                            EventCategoriesList: {
                              shape: 'S4v'
                            },
                            EventSubscriptionArn: {},
                            SnsTopicArn: {},
                            SourceIdsList: {
                              shape: 'S4v'
                            },
                            SourceType: {},
                            Status: {},
                            SubscriptionCreationTime: {}
                          }
                        },
                        AwsEcsService: {
                          type: 'structure',
                          members: {
                            CapacityProviderStrategy: {
                              type: 'list',
                              member: {
                                type: 'structure',
                                members: {
                                  Base: {
                                    type: 'integer'
                                  },
                                  CapacityProvider: {},
                                  Weight: {
                                    type: 'integer'
                                  }
                                }
                              }
                            },
                            Cluster: {},
                            DeploymentConfiguration: {
                              type: 'structure',
                              members: {
                                DeploymentCircuitBreaker: {
                                  type: 'structure',
                                  members: {
                                    Enable: {
                                      type: 'boolean'
                                    },
                                    Rollback: {
                                      type: 'boolean'
                                    }
                                  }
                                },
                                MaximumPercent: {
                                  type: 'integer'
                                },
                                MinimumHealthyPercent: {
                                  type: 'integer'
                                }
                              }
                            },
                            DeploymentController: {
                              type: 'structure',
                              members: {
                                Type: {}
                              }
                            },
                            DesiredCount: {
                              type: 'integer'
                            },
                            EnableEcsManagedTags: {
                              type: 'boolean'
                            },
                            EnableExecuteCommand: {
                              type: 'boolean'
                            },
                            HealthCheckGracePeriodSeconds: {
                              type: 'integer'
                            },
                            LaunchType: {},
                            LoadBalancers: {
                              type: 'list',
                              member: {
                                type: 'structure',
                                members: {
                                  ContainerName: {},
                                  ContainerPort: {
                                    type: 'integer'
                                  },
                                  LoadBalancerName: {},
                                  TargetGroupArn: {}
                                }
                              }
                            },
                            Name: {},
                            NetworkConfiguration: {
                              type: 'structure',
                              members: {
                                AwsVpcConfiguration: {
                                  type: 'structure',
                                  members: {
                                    AssignPublicIp: {},
                                    SecurityGroups: {
                                      shape: 'S4v'
                                    },
                                    Subnets: {
                                      shape: 'S4v'
                                    }
                                  }
                                }
                              }
                            },
                            PlacementConstraints: {
                              type: 'list',
                              member: {
                                type: 'structure',
                                members: {
                                  Expression: {},
                                  Type: {}
                                }
                              }
                            },
                            PlacementStrategies: {
                              type: 'list',
                              member: {
                                type: 'structure',
                                members: {
                                  Field: {},
                                  Type: {}
                                }
                              }
                            },
                            PlatformVersion: {},
                            PropagateTags: {},
                            Role: {},
                            SchedulingStrategy: {},
                            ServiceArn: {},
                            ServiceName: {},
                            ServiceRegistries: {
                              type: 'list',
                              member: {
                                type: 'structure',
                                members: {
                                  ContainerName: {},
                                  ContainerPort: {
                                    type: 'integer'
                                  },
                                  Port: {
                                    type: 'integer'
                                  },
                                  RegistryArn: {}
                                }
                              }
                            },
                            TaskDefinition: {}
                          }
                        },
                        AwsAutoScalingLaunchConfiguration: {
                          type: 'structure',
                          members: {
                            AssociatePublicIpAddress: {
                              type: 'boolean'
                            },
                            BlockDeviceMappings: {
                              type: 'list',
                              member: {
                                type: 'structure',
                                members: {
                                  DeviceName: {},
                                  Ebs: {
                                    type: 'structure',
                                    members: {
                                      DeleteOnTermination: {
                                        type: 'boolean'
                                      },
                                      Encrypted: {
                                        type: 'boolean'
                                      },
                                      Iops: {
                                        type: 'integer'
                                      },
                                      SnapshotId: {},
                                      VolumeSize: {
                                        type: 'integer'
                                      },
                                      VolumeType: {}
                                    }
                                  },
                                  NoDevice: {
                                    type: 'boolean'
                                  },
                                  VirtualName: {}
                                }
                              }
                            },
                            ClassicLinkVpcId: {},
                            ClassicLinkVpcSecurityGroups: {
                              shape: 'S4v'
                            },
                            CreatedTime: {},
                            EbsOptimized: {
                              type: 'boolean'
                            },
                            IamInstanceProfile: {},
                            ImageId: {},
                            InstanceMonitoring: {
                              type: 'structure',
                              members: {
                                Enabled: {
                                  type: 'boolean'
                                }
                              }
                            },
                            InstanceType: {},
                            KernelId: {},
                            KeyName: {},
                            LaunchConfigurationName: {},
                            PlacementTenancy: {},
                            RamdiskId: {},
                            SecurityGroups: {
                              shape: 'S4v'
                            },
                            SpotPrice: {},
                            UserData: {},
                            MetadataOptions: {
                              type: 'structure',
                              members: {
                                HttpEndpoint: {},
                                HttpPutResponseHopLimit: {
                                  type: 'integer'
                                },
                                HttpTokens: {}
                              }
                            }
                          }
                        },
                        AwsEc2VpnConnection: {
                          type: 'structure',
                          members: {
                            VpnConnectionId: {},
                            State: {},
                            CustomerGatewayId: {},
                            CustomerGatewayConfiguration: {},
                            Type: {},
                            VpnGatewayId: {},
                            Category: {},
                            VgwTelemetry: {
                              type: 'list',
                              member: {
                                type: 'structure',
                                members: {
                                  AcceptedRouteCount: {
                                    type: 'integer'
                                  },
                                  CertificateArn: {},
                                  LastStatusChange: {},
                                  OutsideIpAddress: {},
                                  Status: {},
                                  StatusMessage: {}
                                }
                              }
                            },
                            Options: {
                              type: 'structure',
                              members: {
                                StaticRoutesOnly: {
                                  type: 'boolean'
                                },
                                TunnelOptions: {
                                  type: 'list',
                                  member: {
                                    type: 'structure',
                                    members: {
                                      DpdTimeoutSeconds: {
                                        type: 'integer'
                                      },
                                      IkeVersions: {
                                        shape: 'S4v'
                                      },
                                      OutsideIpAddress: {},
                                      Phase1DhGroupNumbers: {
                                        shape: 'S2e'
                                      },
                                      Phase1EncryptionAlgorithms: {
                                        shape: 'S4v'
                                      },
                                      Phase1IntegrityAlgorithms: {
                                        shape: 'S4v'
                                      },
                                      Phase1LifetimeSeconds: {
                                        type: 'integer'
                                      },
                                      Phase2DhGroupNumbers: {
                                        shape: 'S2e'
                                      },
                                      Phase2EncryptionAlgorithms: {
                                        shape: 'S4v'
                                      },
                                      Phase2IntegrityAlgorithms: {
                                        shape: 'S4v'
                                      },
                                      Phase2LifetimeSeconds: {
                                        type: 'integer'
                                      },
                                      PreSharedKey: {},
                                      RekeyFuzzPercentage: {
                                        type: 'integer'
                                      },
                                      RekeyMarginTimeSeconds: {
                                        type: 'integer'
                                      },
                                      ReplayWindowSize: {
                                        type: 'integer'
                                      },
                                      TunnelInsideCidr: {}
                                    }
                                  }
                                }
                              }
                            },
                            Routes: {
                              type: 'list',
                              member: {
                                type: 'structure',
                                members: {
                                  DestinationCidrBlock: {},
                                  State: {}
                                }
                              }
                            },
                            TransitGatewayId: {}
                          }
                        },
                        AwsEcrContainerImage: {
                          type: 'structure',
                          members: {
                            RegistryId: {},
                            RepositoryName: {},
                            Architecture: {},
                            ImageDigest: {},
                            ImageTags: {
                              shape: 'S4v'
                            },
                            ImagePublishedAt: {}
                          }
                        },
                        AwsOpenSearchServiceDomain: {
                          type: 'structure',
                          members: {
                            Arn: {},
                            AccessPolicies: {},
                            DomainName: {},
                            Id: {},
                            DomainEndpoint: {},
                            EngineVersion: {},
                            EncryptionAtRestOptions: {
                              type: 'structure',
                              members: {
                                Enabled: {
                                  type: 'boolean'
                                },
                                KmsKeyId: {}
                              }
                            },
                            NodeToNodeEncryptionOptions: {
                              type: 'structure',
                              members: {
                                Enabled: {
                                  type: 'boolean'
                                }
                              }
                            },
                            ServiceSoftwareOptions: {
                              type: 'structure',
                              members: {
                                AutomatedUpdateDate: {},
                                Cancellable: {
                                  type: 'boolean'
                                },
                                CurrentVersion: {},
                                Description: {},
                                NewVersion: {},
                                UpdateAvailable: {
                                  type: 'boolean'
                                },
                                UpdateStatus: {},
                                OptionalDeployment: {
                                  type: 'boolean'
                                }
                              }
                            },
                            ClusterConfig: {
                              type: 'structure',
                              members: {
                                InstanceCount: {
                                  type: 'integer'
                                },
                                WarmEnabled: {
                                  type: 'boolean'
                                },
                                WarmCount: {
                                  type: 'integer'
                                },
                                DedicatedMasterEnabled: {
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
                                DedicatedMasterCount: {
                                  type: 'integer'
                                },
                                InstanceType: {},
                                WarmType: {},
                                ZoneAwarenessEnabled: {
                                  type: 'boolean'
                                },
                                DedicatedMasterType: {}
                              }
                            },
                            DomainEndpointOptions: {
                              type: 'structure',
                              members: {
                                CustomEndpointCertificateArn: {},
                                CustomEndpointEnabled: {
                                  type: 'boolean'
                                },
                                EnforceHTTPS: {
                                  type: 'boolean'
                                },
                                CustomEndpoint: {},
                                TLSSecurityPolicy: {}
                              }
                            },
                            VpcOptions: {
                              type: 'structure',
                              members: {
                                SecurityGroupIds: {
                                  shape: 'S4v'
                                },
                                SubnetIds: {
                                  shape: 'S4v'
                                }
                              }
                            },
                            LogPublishingOptions: {
                              type: 'structure',
                              members: {
                                IndexSlowLogs: {
                                  shape: 'Sg3'
                                },
                                SearchSlowLogs: {
                                  shape: 'Sg3'
                                },
                                AuditLogs: {
                                  shape: 'Sg3'
                                }
                              }
                            },
                            DomainEndpoints: {
                              shape: 'S1k'
                            },
                            AdvancedSecurityOptions: {
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
                                    MasterUserArn: {},
                                    MasterUserName: {},
                                    MasterUserPassword: {}
                                  }
                                }
                              }
                            }
                          }
                        },
                        AwsEc2VpcEndpointService: {
                          type: 'structure',
                          members: {
                            AcceptanceRequired: {
                              type: 'boolean'
                            },
                            AvailabilityZones: {
                              shape: 'S4v'
                            },
                            BaseEndpointDnsNames: {
                              shape: 'S4v'
                            },
                            ManagesVpcEndpoints: {
                              type: 'boolean'
                            },
                            GatewayLoadBalancerArns: {
                              shape: 'S4v'
                            },
                            NetworkLoadBalancerArns: {
                              shape: 'S4v'
                            },
                            PrivateDnsName: {},
                            ServiceId: {},
                            ServiceName: {},
                            ServiceState: {},
                            ServiceType: {
                              type: 'list',
                              member: {
                                type: 'structure',
                                members: {
                                  ServiceType: {}
                                }
                              }
                            }
                          }
                        },
                        AwsXrayEncryptionConfig: {
                          type: 'structure',
                          members: {
                            KeyId: {},
                            Status: {},
                            Type: {}
                          }
                        },
                        AwsWafRateBasedRule: {
                          type: 'structure',
                          members: {
                            MetricName: {},
                            Name: {},
                            RateKey: {},
                            RateLimit: {
                              type: 'long'
                            },
                            RuleId: {},
                            MatchPredicates: {
                              type: 'list',
                              member: {
                                type: 'structure',
                                members: {
                                  DataId: {},
                                  Negated: {
                                    type: 'boolean'
                                  },
                                  Type: {}
                                }
                              }
                            }
                          }
                        },
                        AwsWafRegionalRateBasedRule: {
                          type: 'structure',
                          members: {
                            MetricName: {},
                            Name: {},
                            RateKey: {},
                            RateLimit: {
                              type: 'long'
                            },
                            RuleId: {},
                            MatchPredicates: {
                              type: 'list',
                              member: {
                                type: 'structure',
                                members: {
                                  DataId: {},
                                  Negated: {
                                    type: 'boolean'
                                  },
                                  Type: {}
                                }
                              }
                            }
                          }
                        },
                        AwsEcrRepository: {
                          type: 'structure',
                          members: {
                            Arn: {},
                            ImageScanningConfiguration: {
                              type: 'structure',
                              members: {
                                ScanOnPush: {
                                  type: 'boolean'
                                }
                              }
                            },
                            ImageTagMutability: {},
                            LifecyclePolicy: {
                              type: 'structure',
                              members: {
                                LifecyclePolicyText: {},
                                RegistryId: {}
                              }
                            },
                            RepositoryName: {},
                            RepositoryPolicyText: {}
                          }
                        },
                        AwsEksCluster: {
                          type: 'structure',
                          members: {
                            Arn: {},
                            CertificateAuthorityData: {},
                            ClusterStatus: {},
                            Endpoint: {},
                            Name: {},
                            ResourcesVpcConfig: {
                              type: 'structure',
                              members: {
                                SecurityGroupIds: {
                                  shape: 'S4v'
                                },
                                SubnetIds: {
                                  shape: 'S4v'
                                },
                                EndpointPublicAccess: {
                                  type: 'boolean'
                                }
                              }
                            },
                            RoleArn: {},
                            Version: {},
                            Logging: {
                              type: 'structure',
                              members: {
                                ClusterLogging: {
                                  type: 'list',
                                  member: {
                                    type: 'structure',
                                    members: {
                                      Enabled: {
                                        type: 'boolean'
                                      },
                                      Types: {
                                        shape: 'S4v'
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        AwsNetworkFirewallFirewallPolicy: {
                          type: 'structure',
                          members: {
                            FirewallPolicy: {
                              type: 'structure',
                              members: {
                                StatefulRuleGroupReferences: {
                                  type: 'list',
                                  member: {
                                    type: 'structure',
                                    members: {
                                      ResourceArn: {}
                                    }
                                  }
                                },
                                StatelessCustomActions: {
                                  type: 'list',
                                  member: {
                                    type: 'structure',
                                    members: {
                                      ActionDefinition: {
                                        shape: 'Sgu'
                                      },
                                      ActionName: {}
                                    }
                                  }
                                },
                                StatelessDefaultActions: {
                                  shape: 'S4v'
                                },
                                StatelessFragmentDefaultActions: {
                                  shape: 'S4v'
                                },
                                StatelessRuleGroupReferences: {
                                  type: 'list',
                                  member: {
                                    type: 'structure',
                                    members: {
                                      Priority: {
                                        type: 'integer'
                                      },
                                      ResourceArn: {}
                                    }
                                  }
                                }
                              }
                            },
                            FirewallPolicyArn: {},
                            FirewallPolicyId: {},
                            FirewallPolicyName: {},
                            Description: {}
                          }
                        },
                        AwsNetworkFirewallFirewall: {
                          type: 'structure',
                          members: {
                            DeleteProtection: {
                              type: 'boolean'
                            },
                            Description: {},
                            FirewallArn: {},
                            FirewallId: {},
                            FirewallName: {},
                            FirewallPolicyArn: {},
                            FirewallPolicyChangeProtection: {
                              type: 'boolean'
                            },
                            SubnetChangeProtection: {
                              type: 'boolean'
                            },
                            SubnetMappings: {
                              type: 'list',
                              member: {
                                type: 'structure',
                                members: {
                                  SubnetId: {}
                                }
                              }
                            },
                            VpcId: {}
                          }
                        },
                        AwsNetworkFirewallRuleGroup: {
                          type: 'structure',
                          members: {
                            Capacity: {
                              type: 'integer'
                            },
                            Description: {},
                            RuleGroup: {
                              type: 'structure',
                              members: {
                                RuleVariables: {
                                  type: 'structure',
                                  members: {
                                    IpSets: {
                                      type: 'structure',
                                      members: {
                                        Definition: {
                                          shape: 'S4v'
                                        }
                                      }
                                    },
                                    PortSets: {
                                      type: 'structure',
                                      members: {
                                        Definition: {
                                          shape: 'S4v'
                                        }
                                      }
                                    }
                                  }
                                },
                                RulesSource: {
                                  type: 'structure',
                                  members: {
                                    RulesSourceList: {
                                      type: 'structure',
                                      members: {
                                        GeneratedRulesType: {},
                                        TargetTypes: {
                                          shape: 'S4v'
                                        },
                                        Targets: {
                                          shape: 'S4v'
                                        }
                                      }
                                    },
                                    RulesString: {},
                                    StatefulRules: {
                                      type: 'list',
                                      member: {
                                        type: 'structure',
                                        members: {
                                          Action: {},
                                          Header: {
                                            type: 'structure',
                                            members: {
                                              Destination: {},
                                              DestinationPort: {},
                                              Direction: {},
                                              Protocol: {},
                                              Source: {},
                                              SourcePort: {}
                                            }
                                          },
                                          RuleOptions: {
                                            type: 'list',
                                            member: {
                                              type: 'structure',
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
                                      members: {
                                        CustomActions: {
                                          type: 'list',
                                          member: {
                                            type: 'structure',
                                            members: {
                                              ActionDefinition: {
                                                shape: 'Sgu'
                                              },
                                              ActionName: {}
                                            }
                                          }
                                        },
                                        StatelessRules: {
                                          type: 'list',
                                          member: {
                                            type: 'structure',
                                            members: {
                                              Priority: {
                                                type: 'integer'
                                              },
                                              RuleDefinition: {
                                                type: 'structure',
                                                members: {
                                                  Actions: {
                                                    shape: 'S4v'
                                                  },
                                                  MatchAttributes: {
                                                    type: 'structure',
                                                    members: {
                                                      DestinationPorts: {
                                                        type: 'list',
                                                        member: {
                                                          type: 'structure',
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
                                                      Destinations: {
                                                        type: 'list',
                                                        member: {
                                                          type: 'structure',
                                                          members: {
                                                            AddressDefinition: {}
                                                          }
                                                        }
                                                      },
                                                      Protocols: {
                                                        type: 'list',
                                                        member: {
                                                          type: 'integer'
                                                        }
                                                      },
                                                      SourcePorts: {
                                                        type: 'list',
                                                        member: {
                                                          type: 'structure',
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
                                                      Sources: {
                                                        type: 'list',
                                                        member: {
                                                          type: 'structure',
                                                          members: {
                                                            AddressDefinition: {}
                                                          }
                                                        }
                                                      },
                                                      TcpFlags: {
                                                        type: 'list',
                                                        member: {
                                                          type: 'structure',
                                                          members: {
                                                            Flags: {
                                                              shape: 'S4v'
                                                            },
                                                            Masks: {
                                                              shape: 'S4v'
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
                                  }
                                }
                              }
                            },
                            RuleGroupArn: {},
                            RuleGroupId: {},
                            RuleGroupName: {},
                            Type: {}
                          }
                        },
                        AwsRdsDbSecurityGroup: {
                          type: 'structure',
                          members: {
                            DbSecurityGroupArn: {},
                            DbSecurityGroupDescription: {},
                            DbSecurityGroupName: {},
                            Ec2SecurityGroups: {
                              type: 'list',
                              member: {
                                type: 'structure',
                                members: {
                                  Ec2SecurityGroupId: {},
                                  Ec2SecurityGroupName: {},
                                  Ec2SecurityGroupOwnerId: {},
                                  Status: {}
                                }
                              }
                            },
                            IpRanges: {
                              type: 'list',
                              member: {
                                type: 'structure',
                                members: {
                                  CidrIp: {},
                                  Status: {}
                                }
                              }
                            },
                            OwnerId: {},
                            VpcId: {}
                          }
                        },
                        AwsKinesisStream: {
                          type: 'structure',
                          members: {
                            Name: {},
                            Arn: {},
                            StreamEncryption: {
                              type: 'structure',
                              members: {
                                EncryptionType: {},
                                KeyId: {}
                              }
                            },
                            ShardCount: {
                              type: 'integer'
                            },
                            RetentionPeriodHours: {
                              type: 'integer'
                            }
                          }
                        },
                        AwsEc2TransitGateway: {
                          type: 'structure',
                          members: {
                            Id: {},
                            Description: {},
                            DefaultRouteTablePropagation: {},
                            AutoAcceptSharedAttachments: {},
                            DefaultRouteTableAssociation: {},
                            TransitGatewayCidrBlocks: {
                              shape: 'S4v'
                            },
                            AssociationDefaultRouteTableId: {},
                            PropagationDefaultRouteTableId: {},
                            VpnEcmpSupport: {},
                            DnsSupport: {},
                            MulticastSupport: {},
                            AmazonSideAsn: {
                              type: 'integer'
                            }
                          }
                        },
                        AwsEfsAccessPoint: {
                          type: 'structure',
                          members: {
                            AccessPointId: {},
                            Arn: {},
                            ClientToken: {},
                            FileSystemId: {},
                            PosixUser: {
                              type: 'structure',
                              members: {
                                Gid: {},
                                SecondaryGids: {
                                  shape: 'S4v'
                                },
                                Uid: {}
                              }
                            },
                            RootDirectory: {
                              type: 'structure',
                              members: {
                                CreationInfo: {
                                  type: 'structure',
                                  members: {
                                    OwnerGid: {},
                                    OwnerUid: {},
                                    Permissions: {}
                                  }
                                },
                                Path: {}
                              }
                            }
                          }
                        },
                        AwsCloudFormationStack: {
                          type: 'structure',
                          members: {
                            Capabilities: {
                              shape: 'S4v'
                            },
                            CreationTime: {},
                            Description: {},
                            DisableRollback: {
                              type: 'boolean'
                            },
                            DriftInformation: {
                              type: 'structure',
                              members: {
                                StackDriftStatus: {}
                              }
                            },
                            EnableTerminationProtection: {
                              type: 'boolean'
                            },
                            LastUpdatedTime: {},
                            NotificationArns: {
                              shape: 'S4v'
                            },
                            Outputs: {
                              type: 'list',
                              member: {
                                type: 'structure',
                                members: {
                                  Description: {},
                                  OutputKey: {},
                                  OutputValue: {}
                                }
                              }
                            },
                            RoleArn: {},
                            StackId: {},
                            StackName: {},
                            StackStatus: {},
                            StackStatusReason: {},
                            TimeoutInMinutes: {
                              type: 'integer'
                            }
                          }
                        },
                        AwsCloudWatchAlarm: {
                          type: 'structure',
                          members: {
                            ActionsEnabled: {
                              type: 'boolean'
                            },
                            AlarmActions: {
                              shape: 'S4v'
                            },
                            AlarmArn: {},
                            AlarmConfigurationUpdatedTimestamp: {},
                            AlarmDescription: {},
                            AlarmName: {},
                            ComparisonOperator: {},
                            DatapointsToAlarm: {
                              type: 'integer'
                            },
                            Dimensions: {
                              type: 'list',
                              member: {
                                type: 'structure',
                                members: {
                                  Name: {},
                                  Value: {}
                                }
                              }
                            },
                            EvaluateLowSampleCountPercentile: {},
                            EvaluationPeriods: {
                              type: 'integer'
                            },
                            ExtendedStatistic: {},
                            InsufficientDataActions: {
                              shape: 'S4v'
                            },
                            MetricName: {},
                            Namespace: {},
                            OkActions: {
                              shape: 'S4v'
                            },
                            Period: {
                              type: 'integer'
                            },
                            Statistic: {},
                            Threshold: {
                              type: 'double'
                            },
                            ThresholdMetricId: {},
                            TreatMissingData: {},
                            Unit: {}
                          }
                        },
                        AwsEc2VpcPeeringConnection: {
                          type: 'structure',
                          members: {
                            AccepterVpcInfo: {
                              shape: 'Sii'
                            },
                            ExpirationTime: {},
                            RequesterVpcInfo: {
                              shape: 'Sii'
                            },
                            Status: {
                              type: 'structure',
                              members: {
                                Code: {},
                                Message: {}
                              }
                            },
                            VpcPeeringConnectionId: {}
                          }
                        },
                        AwsWafRegionalRuleGroup: {
                          type: 'structure',
                          members: {
                            MetricName: {},
                            Name: {},
                            RuleGroupId: {},
                            Rules: {
                              type: 'list',
                              member: {
                                type: 'structure',
                                members: {
                                  Action: {
                                    type: 'structure',
                                    members: {
                                      Type: {}
                                    }
                                  },
                                  Priority: {
                                    type: 'integer'
                                  },
                                  RuleId: {},
                                  Type: {}
                                }
                              }
                            }
                          }
                        },
                        AwsWafRegionalRule: {
                          type: 'structure',
                          members: {
                            MetricName: {},
                            Name: {},
                            PredicateList: {
                              type: 'list',
                              member: {
                                type: 'structure',
                                members: {
                                  DataId: {},
                                  Negated: {
                                    type: 'boolean'
                                  },
                                  Type: {}
                                }
                              }
                            },
                            RuleId: {}
                          }
                        },
                        AwsWafRegionalWebAcl: {
                          type: 'structure',
                          members: {
                            DefaultAction: {},
                            MetricName: {},
                            Name: {},
                            RulesList: {
                              type: 'list',
                              member: {
                                type: 'structure',
                                members: {
                                  Action: {
                                    type: 'structure',
                                    members: {
                                      Type: {}
                                    }
                                  },
                                  OverrideAction: {
                                    type: 'structure',
                                    members: {
                                      Type: {}
                                    }
                                  },
                                  Priority: {
                                    type: 'integer'
                                  },
                                  RuleId: {},
                                  Type: {}
                                }
                              }
                            },
                            WebAclId: {}
                          }
                        },
                        AwsWafRule: {
                          type: 'structure',
                          members: {
                            MetricName: {},
                            Name: {},
                            PredicateList: {
                              type: 'list',
                              member: {
                                type: 'structure',
                                members: {
                                  DataId: {},
                                  Negated: {
                                    type: 'boolean'
                                  },
                                  Type: {}
                                }
                              }
                            },
                            RuleId: {}
                          }
                        },
                        AwsWafRuleGroup: {
                          type: 'structure',
                          members: {
                            MetricName: {},
                            Name: {},
                            RuleGroupId: {},
                            Rules: {
                              type: 'list',
                              member: {
                                type: 'structure',
                                members: {
                                  Action: {
                                    type: 'structure',
                                    members: {
                                      Type: {}
                                    }
                                  },
                                  Priority: {
                                    type: 'integer'
                                  },
                                  RuleId: {},
                                  Type: {}
                                }
                              }
                            }
                          }
                        },
                        AwsEcsTask: {
                          type: 'structure',
                          members: {
                            ClusterArn: {},
                            TaskDefinitionArn: {},
                            Version: {},
                            CreatedAt: {},
                            StartedAt: {},
                            StartedBy: {},
                            Group: {},
                            Volumes: {
                              type: 'list',
                              member: {
                                type: 'structure',
                                members: {
                                  Name: {},
                                  Host: {
                                    type: 'structure',
                                    members: {
                                      SourcePath: {}
                                    }
                                  }
                                }
                              }
                            },
                            Containers: {
                              type: 'list',
                              member: {
                                shape: 'Sde'
                              }
                            }
                          }
                        },
                        AwsBackupBackupVault: {
                          type: 'structure',
                          members: {
                            BackupVaultArn: {},
                            BackupVaultName: {},
                            EncryptionKeyArn: {},
                            Notifications: {
                              type: 'structure',
                              members: {
                                BackupVaultEvents: {
                                  shape: 'S4v'
                                },
                                SnsTopicArn: {}
                              }
                            },
                            AccessPolicy: {}
                          }
                        },
                        AwsBackupBackupPlan: {
                          type: 'structure',
                          members: {
                            BackupPlan: {
                              type: 'structure',
                              members: {
                                BackupPlanName: {},
                                AdvancedBackupSettings: {
                                  type: 'list',
                                  member: {
                                    type: 'structure',
                                    members: {
                                      BackupOptions: {
                                        shape: 'S1k'
                                      },
                                      ResourceType: {}
                                    }
                                  }
                                },
                                BackupPlanRule: {
                                  type: 'list',
                                  member: {
                                    type: 'structure',
                                    members: {
                                      TargetBackupVault: {},
                                      StartWindowMinutes: {
                                        type: 'long'
                                      },
                                      ScheduleExpression: {},
                                      RuleName: {},
                                      RuleId: {},
                                      EnableContinuousBackup: {
                                        type: 'boolean'
                                      },
                                      CompletionWindowMinutes: {
                                        type: 'long'
                                      },
                                      CopyActions: {
                                        type: 'list',
                                        member: {
                                          type: 'structure',
                                          members: {
                                            DestinationBackupVaultArn: {},
                                            Lifecycle: {
                                              shape: 'Sjn'
                                            }
                                          }
                                        }
                                      },
                                      Lifecycle: {
                                        shape: 'Sjn'
                                      }
                                    }
                                  }
                                }
                              }
                            },
                            BackupPlanArn: {},
                            BackupPlanId: {},
                            VersionId: {}
                          }
                        },
                        AwsBackupRecoveryPoint: {
                          type: 'structure',
                          members: {
                            BackupSizeInBytes: {
                              type: 'long'
                            },
                            BackupVaultArn: {},
                            BackupVaultName: {},
                            CalculatedLifecycle: {
                              type: 'structure',
                              members: {
                                DeleteAt: {},
                                MoveToColdStorageAt: {}
                              }
                            },
                            CompletionDate: {},
                            CreatedBy: {
                              type: 'structure',
                              members: {
                                BackupPlanArn: {},
                                BackupPlanId: {},
                                BackupPlanVersion: {},
                                BackupRuleId: {}
                              }
                            },
                            CreationDate: {},
                            EncryptionKeyArn: {},
                            IamRoleArn: {},
                            IsEncrypted: {
                              type: 'boolean'
                            },
                            LastRestoreTime: {},
                            Lifecycle: {
                              type: 'structure',
                              members: {
                                DeleteAfterDays: {
                                  type: 'long'
                                },
                                MoveToColdStorageAfterDays: {
                                  type: 'long'
                                }
                              }
                            },
                            RecoveryPointArn: {},
                            ResourceArn: {},
                            ResourceType: {},
                            SourceBackupVaultArn: {},
                            Status: {},
                            StatusMessage: {},
                            StorageClass: {}
                          }
                        },
                        AwsEc2LaunchTemplate: {
                          type: 'structure',
                          members: {
                            LaunchTemplateName: {},
                            Id: {},
                            LaunchTemplateData: {
                              type: 'structure',
                              members: {
                                BlockDeviceMappingSet: {
                                  type: 'list',
                                  member: {
                                    type: 'structure',
                                    members: {
                                      DeviceName: {},
                                      Ebs: {
                                        type: 'structure',
                                        members: {
                                          DeleteOnTermination: {
                                            type: 'boolean'
                                          },
                                          Encrypted: {
                                            type: 'boolean'
                                          },
                                          Iops: {
                                            type: 'integer'
                                          },
                                          KmsKeyId: {},
                                          SnapshotId: {},
                                          Throughput: {
                                            type: 'integer'
                                          },
                                          VolumeSize: {
                                            type: 'integer'
                                          },
                                          VolumeType: {}
                                        }
                                      },
                                      NoDevice: {},
                                      VirtualName: {}
                                    }
                                  }
                                },
                                CapacityReservationSpecification: {
                                  type: 'structure',
                                  members: {
                                    CapacityReservationPreference: {},
                                    CapacityReservationTarget: {
                                      type: 'structure',
                                      members: {
                                        CapacityReservationId: {},
                                        CapacityReservationResourceGroupArn: {}
                                      }
                                    }
                                  }
                                },
                                CpuOptions: {
                                  type: 'structure',
                                  members: {
                                    CoreCount: {
                                      type: 'integer'
                                    },
                                    ThreadsPerCore: {
                                      type: 'integer'
                                    }
                                  }
                                },
                                CreditSpecification: {
                                  type: 'structure',
                                  members: {
                                    CpuCredits: {}
                                  }
                                },
                                DisableApiStop: {
                                  type: 'boolean'
                                },
                                DisableApiTermination: {
                                  type: 'boolean'
                                },
                                EbsOptimized: {
                                  type: 'boolean'
                                },
                                ElasticGpuSpecificationSet: {
                                  type: 'list',
                                  member: {
                                    type: 'structure',
                                    members: {
                                      Type: {}
                                    }
                                  }
                                },
                                ElasticInferenceAcceleratorSet: {
                                  type: 'list',
                                  member: {
                                    type: 'structure',
                                    members: {
                                      Count: {
                                        type: 'integer'
                                      },
                                      Type: {}
                                    }
                                  }
                                },
                                EnclaveOptions: {
                                  type: 'structure',
                                  members: {
                                    Enabled: {
                                      type: 'boolean'
                                    }
                                  }
                                },
                                HibernationOptions: {
                                  type: 'structure',
                                  members: {
                                    Configured: {
                                      type: 'boolean'
                                    }
                                  }
                                },
                                IamInstanceProfile: {
                                  type: 'structure',
                                  members: {
                                    Arn: {},
                                    Name: {}
                                  }
                                },
                                ImageId: {},
                                InstanceInitiatedShutdownBehavior: {},
                                InstanceMarketOptions: {
                                  type: 'structure',
                                  members: {
                                    MarketType: {},
                                    SpotOptions: {
                                      type: 'structure',
                                      members: {
                                        BlockDurationMinutes: {
                                          type: 'integer'
                                        },
                                        InstanceInterruptionBehavior: {},
                                        MaxPrice: {},
                                        SpotInstanceType: {},
                                        ValidUntil: {}
                                      }
                                    }
                                  }
                                },
                                InstanceRequirements: {
                                  type: 'structure',
                                  members: {
                                    AcceleratorCount: {
                                      type: 'structure',
                                      members: {
                                        Max: {
                                          type: 'integer'
                                        },
                                        Min: {
                                          type: 'integer'
                                        }
                                      }
                                    },
                                    AcceleratorManufacturers: {
                                      shape: 'S4v'
                                    },
                                    AcceleratorNames: {
                                      shape: 'S4v'
                                    },
                                    AcceleratorTotalMemoryMiB: {
                                      type: 'structure',
                                      members: {
                                        Max: {
                                          type: 'integer'
                                        },
                                        Min: {
                                          type: 'integer'
                                        }
                                      }
                                    },
                                    AcceleratorTypes: {
                                      shape: 'S4v'
                                    },
                                    BareMetal: {},
                                    BaselineEbsBandwidthMbps: {
                                      type: 'structure',
                                      members: {
                                        Max: {
                                          type: 'integer'
                                        },
                                        Min: {
                                          type: 'integer'
                                        }
                                      }
                                    },
                                    BurstablePerformance: {},
                                    CpuManufacturers: {
                                      shape: 'S4v'
                                    },
                                    ExcludedInstanceTypes: {
                                      shape: 'S4v'
                                    },
                                    InstanceGenerations: {
                                      shape: 'S4v'
                                    },
                                    LocalStorage: {},
                                    LocalStorageTypes: {
                                      shape: 'S4v'
                                    },
                                    MemoryGiBPerVCpu: {
                                      type: 'structure',
                                      members: {
                                        Max: {
                                          type: 'double'
                                        },
                                        Min: {
                                          type: 'double'
                                        }
                                      }
                                    },
                                    MemoryMiB: {
                                      type: 'structure',
                                      members: {
                                        Max: {
                                          type: 'integer'
                                        },
                                        Min: {
                                          type: 'integer'
                                        }
                                      }
                                    },
                                    NetworkInterfaceCount: {
                                      type: 'structure',
                                      members: {
                                        Max: {
                                          type: 'integer'
                                        },
                                        Min: {
                                          type: 'integer'
                                        }
                                      }
                                    },
                                    OnDemandMaxPricePercentageOverLowestPrice: {
                                      type: 'integer'
                                    },
                                    RequireHibernateSupport: {
                                      type: 'boolean'
                                    },
                                    SpotMaxPricePercentageOverLowestPrice: {
                                      type: 'integer'
                                    },
                                    TotalLocalStorageGB: {
                                      type: 'structure',
                                      members: {
                                        Max: {
                                          type: 'double'
                                        },
                                        Min: {
                                          type: 'double'
                                        }
                                      }
                                    },
                                    VCpuCount: {
                                      type: 'structure',
                                      members: {
                                        Max: {
                                          type: 'integer'
                                        },
                                        Min: {
                                          type: 'integer'
                                        }
                                      }
                                    }
                                  }
                                },
                                InstanceType: {},
                                KernelId: {},
                                KeyName: {},
                                LicenseSet: {
                                  type: 'list',
                                  member: {
                                    type: 'structure',
                                    members: {
                                      LicenseConfigurationArn: {}
                                    }
                                  }
                                },
                                MaintenanceOptions: {
                                  type: 'structure',
                                  members: {
                                    AutoRecovery: {}
                                  }
                                },
                                MetadataOptions: {
                                  type: 'structure',
                                  members: {
                                    HttpEndpoint: {},
                                    HttpProtocolIpv6: {},
                                    HttpTokens: {},
                                    HttpPutResponseHopLimit: {
                                      type: 'integer'
                                    },
                                    InstanceMetadataTags: {}
                                  }
                                },
                                Monitoring: {
                                  type: 'structure',
                                  members: {
                                    Enabled: {
                                      type: 'boolean'
                                    }
                                  }
                                },
                                NetworkInterfaceSet: {
                                  type: 'list',
                                  member: {
                                    type: 'structure',
                                    members: {
                                      AssociateCarrierIpAddress: {
                                        type: 'boolean'
                                      },
                                      AssociatePublicIpAddress: {
                                        type: 'boolean'
                                      },
                                      DeleteOnTermination: {
                                        type: 'boolean'
                                      },
                                      Description: {},
                                      DeviceIndex: {
                                        type: 'integer'
                                      },
                                      Groups: {
                                        shape: 'S4v'
                                      },
                                      InterfaceType: {},
                                      Ipv4PrefixCount: {
                                        type: 'integer'
                                      },
                                      Ipv4Prefixes: {
                                        type: 'list',
                                        member: {
                                          type: 'structure',
                                          members: {
                                            Ipv4Prefix: {}
                                          }
                                        }
                                      },
                                      Ipv6AddressCount: {
                                        type: 'integer'
                                      },
                                      Ipv6Addresses: {
                                        type: 'list',
                                        member: {
                                          type: 'structure',
                                          members: {
                                            Ipv6Address: {}
                                          }
                                        }
                                      },
                                      Ipv6PrefixCount: {
                                        type: 'integer'
                                      },
                                      Ipv6Prefixes: {
                                        type: 'list',
                                        member: {
                                          type: 'structure',
                                          members: {
                                            Ipv6Prefix: {}
                                          }
                                        }
                                      },
                                      NetworkCardIndex: {
                                        type: 'integer'
                                      },
                                      NetworkInterfaceId: {},
                                      PrivateIpAddress: {},
                                      PrivateIpAddresses: {
                                        type: 'list',
                                        member: {
                                          type: 'structure',
                                          members: {
                                            Primary: {
                                              type: 'boolean'
                                            },
                                            PrivateIpAddress: {}
                                          }
                                        }
                                      },
                                      SecondaryPrivateIpAddressCount: {
                                        type: 'integer'
                                      },
                                      SubnetId: {}
                                    }
                                  }
                                },
                                Placement: {
                                  type: 'structure',
                                  members: {
                                    Affinity: {},
                                    AvailabilityZone: {},
                                    GroupName: {},
                                    HostId: {},
                                    HostResourceGroupArn: {},
                                    PartitionNumber: {
                                      type: 'integer'
                                    },
                                    SpreadDomain: {},
                                    Tenancy: {}
                                  }
                                },
                                PrivateDnsNameOptions: {
                                  type: 'structure',
                                  members: {
                                    EnableResourceNameDnsAAAARecord: {
                                      type: 'boolean'
                                    },
                                    EnableResourceNameDnsARecord: {
                                      type: 'boolean'
                                    },
                                    HostnameType: {}
                                  }
                                },
                                RamDiskId: {},
                                SecurityGroupIdSet: {
                                  shape: 'S4v'
                                },
                                SecurityGroupSet: {
                                  shape: 'S4v'
                                },
                                UserData: {}
                              }
                            },
                            DefaultVersionNumber: {
                              type: 'long'
                            },
                            LatestVersionNumber: {
                              type: 'long'
                            }
                          }
                        },
                        AwsSageMakerNotebookInstance: {
                          type: 'structure',
                          members: {
                            AcceleratorTypes: {
                              shape: 'S4v'
                            },
                            AdditionalCodeRepositories: {
                              shape: 'S4v'
                            },
                            DefaultCodeRepository: {},
                            DirectInternetAccess: {},
                            FailureReason: {},
                            InstanceMetadataServiceConfiguration: {
                              type: 'structure',
                              members: {
                                MinimumInstanceMetadataServiceVersion: {}
                              }
                            },
                            InstanceType: {},
                            KmsKeyId: {},
                            NetworkInterfaceId: {},
                            NotebookInstanceArn: {},
                            NotebookInstanceLifecycleConfigName: {},
                            NotebookInstanceName: {},
                            NotebookInstanceStatus: {},
                            PlatformIdentifier: {},
                            RoleArn: {},
                            RootAccess: {},
                            SecurityGroups: {
                              shape: 'S4v'
                            },
                            SubnetId: {},
                            Url: {},
                            VolumeSizeInGB: {
                              type: 'integer'
                            }
                          }
                        },
                        AwsWafv2WebAcl: {
                          type: 'structure',
                          members: {
                            Name: {},
                            Arn: {},
                            ManagedbyFirewallManager: {
                              type: 'boolean'
                            },
                            Id: {},
                            Capacity: {
                              type: 'long'
                            },
                            CaptchaConfig: {
                              type: 'structure',
                              members: {
                                ImmunityTimeProperty: {
                                  type: 'structure',
                                  members: {
                                    ImmunityTime: {
                                      type: 'long'
                                    }
                                  }
                                }
                              }
                            },
                            DefaultAction: {
                              type: 'structure',
                              members: {
                                Allow: {
                                  shape: 'Sl6'
                                },
                                Block: {
                                  shape: 'Sla'
                                }
                              }
                            },
                            Description: {},
                            Rules: {
                              shape: 'Slc'
                            },
                            VisibilityConfig: {
                              shape: 'Slh'
                            }
                          }
                        },
                        AwsWafv2RuleGroup: {
                          type: 'structure',
                          members: {
                            Capacity: {
                              type: 'long'
                            },
                            Description: {},
                            Id: {},
                            Name: {},
                            Arn: {},
                            Rules: {
                              shape: 'Slc'
                            },
                            Scope: {},
                            VisibilityConfig: {
                              shape: 'Slh'
                            }
                          }
                        },
                        AwsEc2RouteTable: {
                          type: 'structure',
                          members: {
                            AssociationSet: {
                              type: 'list',
                              member: {
                                type: 'structure',
                                members: {
                                  AssociationState: {
                                    type: 'structure',
                                    members: {
                                      State: {},
                                      StatusMessage: {}
                                    }
                                  },
                                  GatewayId: {},
                                  Main: {
                                    type: 'boolean'
                                  },
                                  RouteTableAssociationId: {},
                                  RouteTableId: {},
                                  SubnetId: {}
                                }
                              }
                            },
                            OwnerId: {},
                            PropagatingVgwSet: {
                              type: 'list',
                              member: {
                                type: 'structure',
                                members: {
                                  GatewayId: {}
                                }
                              }
                            },
                            RouteTableId: {},
                            RouteSet: {
                              type: 'list',
                              member: {
                                type: 'structure',
                                members: {
                                  CarrierGatewayId: {},
                                  CoreNetworkArn: {},
                                  DestinationCidrBlock: {},
                                  DestinationIpv6CidrBlock: {},
                                  DestinationPrefixListId: {},
                                  EgressOnlyInternetGatewayId: {},
                                  GatewayId: {},
                                  InstanceId: {},
                                  InstanceOwnerId: {},
                                  LocalGatewayId: {},
                                  NatGatewayId: {},
                                  NetworkInterfaceId: {},
                                  Origin: {},
                                  State: {},
                                  TransitGatewayId: {},
                                  VpcPeeringConnectionId: {}
                                }
                              }
                            },
                            VpcId: {}
                          }
                        },
                        AwsAmazonMqBroker: {
                          type: 'structure',
                          members: {
                            AuthenticationStrategy: {},
                            AutoMinorVersionUpgrade: {
                              type: 'boolean'
                            },
                            BrokerArn: {},
                            BrokerName: {},
                            DeploymentMode: {},
                            EncryptionOptions: {
                              type: 'structure',
                              members: {
                                KmsKeyId: {},
                                UseAwsOwnedKey: {
                                  type: 'boolean'
                                }
                              }
                            },
                            EngineType: {},
                            EngineVersion: {},
                            HostInstanceType: {},
                            BrokerId: {},
                            LdapServerMetadata: {
                              type: 'structure',
                              members: {
                                Hosts: {
                                  shape: 'S23'
                                },
                                RoleBase: {},
                                RoleName: {},
                                RoleSearchMatching: {},
                                RoleSearchSubtree: {
                                  type: 'boolean'
                                },
                                ServiceAccountUsername: {},
                                UserBase: {},
                                UserRoleName: {},
                                UserSearchMatching: {},
                                UserSearchSubtree: {
                                  type: 'boolean'
                                }
                              }
                            },
                            Logs: {
                              type: 'structure',
                              members: {
                                Audit: {
                                  type: 'boolean'
                                },
                                General: {
                                  type: 'boolean'
                                },
                                AuditLogGroup: {},
                                GeneralLogGroup: {},
                                Pending: {
                                  type: 'structure',
                                  members: {
                                    Audit: {
                                      type: 'boolean'
                                    },
                                    General: {
                                      type: 'boolean'
                                    }
                                  }
                                }
                              }
                            },
                            MaintenanceWindowStartTime: {
                              type: 'structure',
                              members: {
                                DayOfWeek: {},
                                TimeOfDay: {},
                                TimeZone: {}
                              }
                            },
                            PubliclyAccessible: {
                              type: 'boolean'
                            },
                            SecurityGroups: {
                              shape: 'S23'
                            },
                            StorageType: {},
                            SubnetIds: {
                              shape: 'S23'
                            },
                            Users: {
                              type: 'list',
                              member: {
                                type: 'structure',
                                members: {
                                  PendingChange: {},
                                  Username: {}
                                }
                              }
                            }
                          }
                        },
                        AwsAppSyncGraphQlApi: {
                          type: 'structure',
                          members: {
                            ApiId: {},
                            Id: {},
                            OpenIdConnectConfig: {
                              shape: 'Sm0'
                            },
                            Name: {},
                            LambdaAuthorizerConfig: {
                              shape: 'Sm1'
                            },
                            XrayEnabled: {
                              type: 'boolean'
                            },
                            Arn: {},
                            UserPoolConfig: {
                              shape: 'Sm2'
                            },
                            AuthenticationType: {},
                            LogConfig: {
                              type: 'structure',
                              members: {
                                CloudWatchLogsRoleArn: {},
                                ExcludeVerboseContent: {
                                  type: 'boolean'
                                },
                                FieldLogLevel: {}
                              }
                            },
                            AdditionalAuthenticationProviders: {
                              type: 'list',
                              member: {
                                type: 'structure',
                                members: {
                                  AuthenticationType: {},
                                  LambdaAuthorizerConfig: {
                                    shape: 'Sm1'
                                  },
                                  OpenIdConnectConfig: {
                                    shape: 'Sm0'
                                  },
                                  UserPoolConfig: {
                                    shape: 'Sm2'
                                  }
                                }
                              }
                            },
                            WafWebAclArn: {}
                          }
                        },
                        AwsEventSchemasRegistry: {
                          type: 'structure',
                          members: {
                            Description: {},
                            RegistryArn: {},
                            RegistryName: {}
                          }
                        },
                        AwsGuardDutyDetector: {
                          type: 'structure',
                          members: {
                            DataSources: {
                              type: 'structure',
                              members: {
                                CloudTrail: {
                                  type: 'structure',
                                  members: {
                                    Status: {}
                                  }
                                },
                                DnsLogs: {
                                  type: 'structure',
                                  members: {
                                    Status: {}
                                  }
                                },
                                FlowLogs: {
                                  type: 'structure',
                                  members: {
                                    Status: {}
                                  }
                                },
                                Kubernetes: {
                                  type: 'structure',
                                  members: {
                                    AuditLogs: {
                                      type: 'structure',
                                      members: {
                                        Status: {}
                                      }
                                    }
                                  }
                                },
                                MalwareProtection: {
                                  type: 'structure',
                                  members: {
                                    ScanEc2InstanceWithFindings: {
                                      type: 'structure',
                                      members: {
                                        EbsVolumes: {
                                          type: 'structure',
                                          members: {
                                            Reason: {},
                                            Status: {}
                                          }
                                        }
                                      }
                                    },
                                    ServiceRole: {}
                                  }
                                },
                                S3Logs: {
                                  type: 'structure',
                                  members: {
                                    Status: {}
                                  }
                                }
                              }
                            },
                            Features: {
                              type: 'list',
                              member: {
                                type: 'structure',
                                members: {
                                  Name: {},
                                  Status: {}
                                }
                              }
                            },
                            FindingPublishingFrequency: {},
                            ServiceRole: {},
                            Status: {}
                          }
                        },
                        AwsStepFunctionStateMachine: {
                          type: 'structure',
                          members: {
                            Label: {},
                            LoggingConfiguration: {
                              type: 'structure',
                              members: {
                                Destinations: {
                                  type: 'list',
                                  member: {
                                    type: 'structure',
                                    members: {
                                      CloudWatchLogsLogGroup: {
                                        type: 'structure',
                                        members: {
                                          LogGroupArn: {}
                                        }
                                      }
                                    }
                                  }
                                },
                                IncludeExecutionData: {
                                  type: 'boolean'
                                },
                                Level: {}
                              }
                            },
                            Name: {},
                            RoleArn: {},
                            StateMachineArn: {},
                            Status: {},
                            TracingConfiguration: {
                              type: 'structure',
                              members: {
                                Enabled: {
                                  type: 'boolean'
                                }
                              }
                            },
                            Type: {}
                          }
                        },
                        AwsAthenaWorkGroup: {
                          type: 'structure',
                          members: {
                            Name: {},
                            Description: {},
                            State: {},
                            Configuration: {
                              type: 'structure',
                              members: {
                                ResultConfiguration: {
                                  type: 'structure',
                                  members: {
                                    EncryptionConfiguration: {
                                      type: 'structure',
                                      members: {
                                        EncryptionOption: {},
                                        KmsKey: {}
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        AwsEventsEventbus: {
                          type: 'structure',
                          members: {
                            Arn: {},
                            Name: {},
                            Policy: {}
                          }
                        },
                        AwsDmsEndpoint: {
                          type: 'structure',
                          members: {
                            CertificateArn: {},
                            DatabaseName: {},
                            EndpointArn: {},
                            EndpointIdentifier: {},
                            EndpointType: {},
                            EngineName: {},
                            ExternalId: {},
                            ExtraConnectionAttributes: {},
                            KmsKeyId: {},
                            Port: {
                              type: 'integer'
                            },
                            ServerName: {},
                            SslMode: {},
                            Username: {}
                          }
                        },
                        AwsEventsEndpoint: {
                          type: 'structure',
                          members: {
                            Arn: {},
                            Description: {},
                            EndpointId: {},
                            EndpointUrl: {},
                            EventBuses: {
                              type: 'list',
                              member: {
                                type: 'structure',
                                members: {
                                  EventBusArn: {}
                                }
                              }
                            },
                            Name: {},
                            ReplicationConfig: {
                              type: 'structure',
                              members: {
                                State: {}
                              }
                            },
                            RoleArn: {},
                            RoutingConfig: {
                              type: 'structure',
                              members: {
                                FailoverConfig: {
                                  type: 'structure',
                                  members: {
                                    Primary: {
                                      type: 'structure',
                                      members: {
                                        HealthCheck: {}
                                      }
                                    },
                                    Secondary: {
                                      type: 'structure',
                                      members: {
                                        Route: {}
                                      }
                                    }
                                  }
                                }
                              }
                            },
                            State: {},
                            StateReason: {}
                          }
                        },
                        AwsDmsReplicationTask: {
                          type: 'structure',
                          members: {
                            CdcStartPosition: {},
                            CdcStartTime: {},
                            CdcStopPosition: {},
                            MigrationType: {},
                            Id: {},
                            ResourceIdentifier: {},
                            ReplicationInstanceArn: {},
                            ReplicationTaskIdentifier: {},
                            ReplicationTaskSettings: {},
                            SourceEndpointArn: {},
                            TableMappings: {},
                            TargetEndpointArn: {},
                            TaskData: {}
                          }
                        },
                        AwsDmsReplicationInstance: {
                          type: 'structure',
                          members: {
                            AllocatedStorage: {
                              type: 'integer'
                            },
                            AutoMinorVersionUpgrade: {
                              type: 'boolean'
                            },
                            AvailabilityZone: {},
                            EngineVersion: {},
                            KmsKeyId: {},
                            MultiAZ: {
                              type: 'boolean'
                            },
                            PreferredMaintenanceWindow: {},
                            PubliclyAccessible: {
                              type: 'boolean'
                            },
                            ReplicationInstanceClass: {},
                            ReplicationInstanceIdentifier: {},
                            ReplicationSubnetGroup: {
                              type: 'structure',
                              members: {
                                ReplicationSubnetGroupIdentifier: {}
                              }
                            },
                            VpcSecurityGroups: {
                              type: 'list',
                              member: {
                                type: 'structure',
                                members: {
                                  VpcSecurityGroupId: {}
                                }
                              }
                            }
                          }
                        },
                        AwsRoute53HostedZone: {
                          type: 'structure',
                          members: {
                            HostedZone: {
                              type: 'structure',
                              members: {
                                Id: {},
                                Name: {},
                                Config: {
                                  type: 'structure',
                                  members: {
                                    Comment: {}
                                  }
                                }
                              }
                            },
                            Vpcs: {
                              type: 'list',
                              member: {
                                type: 'structure',
                                members: {
                                  Id: {},
                                  Region: {}
                                }
                              }
                            },
                            NameServers: {
                              type: 'list',
                              member: {}
                            },
                            QueryLoggingConfig: {
                              type: 'structure',
                              members: {
                                CloudWatchLogsLogGroupArn: {
                                  type: 'structure',
                                  members: {
                                    CloudWatchLogsLogGroupArn: {},
                                    HostedZoneId: {},
                                    Id: {}
                                  }
                                }
                              }
                            }
                          }
                        },
                        AwsMskCluster: {
                          type: 'structure',
                          members: {
                            ClusterInfo: {
                              type: 'structure',
                              members: {
                                EncryptionInfo: {
                                  type: 'structure',
                                  members: {
                                    EncryptionInTransit: {
                                      type: 'structure',
                                      members: {
                                        InCluster: {
                                          type: 'boolean'
                                        },
                                        ClientBroker: {}
                                      }
                                    },
                                    EncryptionAtRest: {
                                      type: 'structure',
                                      members: {
                                        DataVolumeKMSKeyId: {}
                                      }
                                    }
                                  }
                                },
                                CurrentVersion: {},
                                NumberOfBrokerNodes: {
                                  type: 'integer'
                                },
                                ClusterName: {},
                                ClientAuthentication: {
                                  type: 'structure',
                                  members: {
                                    Sasl: {
                                      type: 'structure',
                                      members: {
                                        Iam: {
                                          type: 'structure',
                                          members: {
                                            Enabled: {
                                              type: 'boolean'
                                            }
                                          }
                                        },
                                        Scram: {
                                          type: 'structure',
                                          members: {
                                            Enabled: {
                                              type: 'boolean'
                                            }
                                          }
                                        }
                                      }
                                    },
                                    Unauthenticated: {
                                      type: 'structure',
                                      members: {
                                        Enabled: {
                                          type: 'boolean'
                                        }
                                      }
                                    },
                                    Tls: {
                                      type: 'structure',
                                      members: {
                                        CertificateAuthorityArnList: {
                                          shape: 'S23'
                                        },
                                        Enabled: {
                                          type: 'boolean'
                                        }
                                      }
                                    }
                                  }
                                },
                                EnhancedMonitoring: {}
                              }
                            }
                          }
                        },
                        AwsS3AccessPoint: {
                          type: 'structure',
                          members: {
                            AccessPointArn: {},
                            Alias: {},
                            Bucket: {},
                            BucketAccountId: {},
                            Name: {},
                            NetworkOrigin: {},
                            PublicAccessBlockConfiguration: {
                              shape: 'S7q'
                            },
                            VpcConfiguration: {
                              type: 'structure',
                              members: {
                                VpcId: {}
                              }
                            }
                          }
                        },
                        AwsEc2ClientVpnEndpoint: {
                          type: 'structure',
                          members: {
                            ClientVpnEndpointId: {},
                            Description: {},
                            ClientCidrBlock: {},
                            DnsServer: {
                              shape: 'S23'
                            },
                            SplitTunnel: {
                              type: 'boolean'
                            },
                            TransportProtocol: {},
                            VpnPort: {
                              type: 'integer'
                            },
                            ServerCertificateArn: {},
                            AuthenticationOptions: {
                              type: 'list',
                              member: {
                                type: 'structure',
                                members: {
                                  Type: {},
                                  ActiveDirectory: {
                                    type: 'structure',
                                    members: {
                                      DirectoryId: {}
                                    }
                                  },
                                  MutualAuthentication: {
                                    type: 'structure',
                                    members: {
                                      ClientRootCertificateChain: {}
                                    }
                                  },
                                  FederatedAuthentication: {
                                    type: 'structure',
                                    members: {
                                      SamlProviderArn: {},
                                      SelfServiceSamlProviderArn: {}
                                    }
                                  }
                                }
                              }
                            },
                            ConnectionLogOptions: {
                              type: 'structure',
                              members: {
                                Enabled: {
                                  type: 'boolean'
                                },
                                CloudwatchLogGroup: {},
                                CloudwatchLogStream: {}
                              }
                            },
                            SecurityGroupIdSet: {
                              shape: 'S23'
                            },
                            VpcId: {},
                            SelfServicePortalUrl: {},
                            ClientConnectOptions: {
                              type: 'structure',
                              members: {
                                Enabled: {
                                  type: 'boolean'
                                },
                                LambdaFunctionArn: {},
                                Status: {
                                  type: 'structure',
                                  members: {
                                    Code: {},
                                    Message: {}
                                  }
                                }
                              }
                            },
                            SessionTimeoutHours: {
                              type: 'integer'
                            },
                            ClientLoginBannerOptions: {
                              type: 'structure',
                              members: {
                                Enabled: {
                                  type: 'boolean'
                                },
                                BannerText: {}
                              }
                            }
                          }
                        }
                      }
                    },
                    ApplicationName: {},
                    ApplicationArn: {}
                  }
                }
              },
              Compliance: {
                type: 'structure',
                members: {
                  Status: {},
                  RelatedRequirements: {
                    shape: 'S2q'
                  },
                  StatusReasons: {
                    type: 'list',
                    member: {
                      type: 'structure',
                      required: ['ReasonCode'],
                      members: {
                        ReasonCode: {},
                        Description: {}
                      }
                    }
                  },
                  SecurityControlId: {},
                  AssociatedStandards: {
                    type: 'list',
                    member: {
                      type: 'structure',
                      members: {
                        StandardsId: {}
                      }
                    }
                  },
                  SecurityControlParameters: {
                    type: 'list',
                    member: {
                      type: 'structure',
                      members: {
                        Name: {},
                        Value: {
                          shape: 'S1j'
                        }
                      }
                    }
                  }
                }
              },
              VerificationState: {},
              WorkflowState: {
                type: 'string',
                deprecated: true,
                deprecatedMessage: 'This filter is deprecated. Instead, use SeverityLabel or FindingProviderFieldsSeverityLabel.'
              },
              Workflow: {
                type: 'structure',
                members: {
                  Status: {}
                }
              },
              RecordState: {},
              RelatedFindings: {
                shape: 'S1n'
              },
              Note: {
                type: 'structure',
                required: ['Text', 'UpdatedBy', 'UpdatedAt'],
                members: {
                  Text: {},
                  UpdatedBy: {},
                  UpdatedAt: {}
                }
              },
              Vulnerabilities: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['Id'],
                  members: {
                    Id: {},
                    VulnerablePackages: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          Name: {},
                          Version: {},
                          Epoch: {},
                          Release: {},
                          Architecture: {},
                          PackageManager: {},
                          FilePath: {},
                          FixedInVersion: {},
                          Remediation: {},
                          SourceLayerHash: {},
                          SourceLayerArn: {}
                        }
                      }
                    },
                    Cvss: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          Version: {},
                          BaseScore: {
                            type: 'double'
                          },
                          BaseVector: {},
                          Source: {},
                          Adjustments: {
                            type: 'list',
                            member: {
                              type: 'structure',
                              members: {
                                Metric: {},
                                Reason: {}
                              }
                            }
                          }
                        }
                      }
                    },
                    RelatedVulnerabilities: {
                      shape: 'S23'
                    },
                    Vendor: {
                      type: 'structure',
                      required: ['Name'],
                      members: {
                        Name: {},
                        Url: {},
                        VendorSeverity: {},
                        VendorCreatedAt: {},
                        VendorUpdatedAt: {}
                      }
                    },
                    ReferenceUrls: {
                      shape: 'S23'
                    },
                    FixAvailable: {},
                    EpssScore: {
                      type: 'double'
                    },
                    ExploitAvailable: {},
                    LastKnownExploitAt: {},
                    CodeVulnerabilities: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          Cwes: {
                            shape: 'S1j'
                          },
                          FilePath: {
                            type: 'structure',
                            members: {
                              EndLine: {
                                type: 'integer'
                              },
                              FileName: {},
                              FilePath: {},
                              StartLine: {
                                type: 'integer'
                              }
                            }
                          },
                          SourceArn: {}
                        }
                      }
                    }
                  }
                }
              },
              PatchSummary: {
                type: 'structure',
                required: ['Id'],
                members: {
                  Id: {},
                  InstalledCount: {
                    type: 'integer'
                  },
                  MissingCount: {
                    type: 'integer'
                  },
                  FailedCount: {
                    type: 'integer'
                  },
                  InstalledOtherCount: {
                    type: 'integer'
                  },
                  InstalledRejectedCount: {
                    type: 'integer'
                  },
                  InstalledPendingReboot: {
                    type: 'integer'
                  },
                  OperationStartTime: {},
                  OperationEndTime: {},
                  RebootOption: {},
                  Operation: {}
                }
              },
              Action: {
                type: 'structure',
                members: {
                  ActionType: {},
                  NetworkConnectionAction: {
                    type: 'structure',
                    members: {
                      ConnectionDirection: {},
                      RemoteIpDetails: {
                        shape: 'Sox'
                      },
                      RemotePortDetails: {
                        type: 'structure',
                        members: {
                          Port: {
                            type: 'integer'
                          },
                          PortName: {}
                        }
                      },
                      LocalPortDetails: {
                        shape: 'Sp3'
                      },
                      Protocol: {},
                      Blocked: {
                        type: 'boolean'
                      }
                    }
                  },
                  AwsApiCallAction: {
                    type: 'structure',
                    members: {
                      Api: {},
                      ServiceName: {},
                      CallerType: {},
                      RemoteIpDetails: {
                        shape: 'Sox'
                      },
                      DomainDetails: {
                        type: 'structure',
                        members: {
                          Domain: {}
                        }
                      },
                      AffectedResources: {
                        shape: 'S1k'
                      },
                      FirstSeen: {},
                      LastSeen: {}
                    }
                  },
                  DnsRequestAction: {
                    type: 'structure',
                    members: {
                      Domain: {},
                      Protocol: {},
                      Blocked: {
                        type: 'boolean'
                      }
                    }
                  },
                  PortProbeAction: {
                    type: 'structure',
                    members: {
                      PortProbeDetails: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            LocalPortDetails: {
                              shape: 'Sp3'
                            },
                            LocalIpDetails: {
                              type: 'structure',
                              members: {
                                IpAddressV4: {}
                              }
                            },
                            RemoteIpDetails: {
                              shape: 'Sox'
                            }
                          }
                        }
                      },
                      Blocked: {
                        type: 'boolean'
                      }
                    }
                  }
                }
              },
              FindingProviderFields: {
                type: 'structure',
                members: {
                  Confidence: {
                    type: 'integer'
                  },
                  Criticality: {
                    type: 'integer'
                  },
                  RelatedFindings: {
                    shape: 'S1n'
                  },
                  Severity: {
                    type: 'structure',
                    members: {
                      Label: {},
                      Original: {}
                    }
                  },
                  Types: {
                    shape: 'S1j'
                  }
                }
              },
              Sample: {
                type: 'boolean'
              },
              GeneratorDetails: {
                type: 'structure',
                members: {
                  Name: {},
                  Description: {},
                  Labels: {
                    shape: 'S1j'
                  }
                }
              },
              ProcessedAt: {},
              AwsAccountName: {}
            }
          },
          S36: {
            type: 'structure',
            members: {
              Begin: {
                type: 'integer'
              },
              End: {
                type: 'integer'
              }
            }
          },
          S39: {
            type: 'structure',
            members: {
              Protocol: {},
              Destination: {
                shape: 'S3a'
              },
              Source: {
                shape: 'S3a'
              }
            }
          },
          S3a: {
            type: 'structure',
            members: {
              Address: {
                shape: 'S23'
              },
              PortRanges: {
                type: 'list',
                member: {
                  shape: 'S36'
                }
              }
            }
          },
          S3w: {
            type: 'structure',
            members: {
              LineRanges: {
                shape: 'S3x'
              },
              OffsetRanges: {
                shape: 'S3x'
              },
              Pages: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    PageNumber: {
                      type: 'long'
                    },
                    LineRange: {
                      shape: 'S3y'
                    },
                    OffsetRange: {
                      shape: 'S3y'
                    }
                  }
                }
              },
              Records: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    JsonPath: {},
                    RecordIndex: {
                      type: 'long'
                    }
                  }
                }
              },
              Cells: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    Column: {
                      type: 'long'
                    },
                    Row: {
                      type: 'long'
                    },
                    ColumnName: {},
                    CellReference: {}
                  }
                }
              }
            }
          },
          S3x: {
            type: 'list',
            member: {
              shape: 'S3y'
            }
          },
          S3y: {
            type: 'structure',
            members: {
              Start: {
                type: 'long'
              },
              End: {
                type: 'long'
              },
              StartColumn: {
                type: 'long'
              }
            }
          },
          S4k: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                ArtifactIdentifier: {},
                EncryptionDisabled: {
                  type: 'boolean'
                },
                Location: {},
                Name: {},
                NamespaceType: {},
                OverrideArtifactName: {
                  type: 'boolean'
                },
                Packaging: {},
                Path: {},
                Type: {}
              }
            }
          },
          S4v: {
            type: 'list',
            member: {}
          },
          S5t: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                IpProtocol: {},
                FromPort: {
                  type: 'integer'
                },
                ToPort: {
                  type: 'integer'
                },
                UserIdGroupPairs: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      GroupId: {},
                      GroupName: {},
                      PeeringStatus: {},
                      UserId: {},
                      VpcId: {},
                      VpcPeeringConnectionId: {}
                    }
                  }
                },
                IpRanges: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      CidrIp: {}
                    }
                  }
                },
                Ipv6Ranges: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      CidrIpv6: {}
                    }
                  }
                },
                PrefixListIds: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      PrefixListId: {}
                    }
                  }
                }
              }
            }
          },
          S69: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                AssociationId: {},
                Ipv6CidrBlock: {},
                CidrBlockState: {}
              }
            }
          },
          S73: {
            type: 'structure',
            members: {
              CloudWatchLogsLogGroupArn: {},
              Enabled: {
                type: 'boolean'
              }
            }
          },
          S7q: {
            type: 'structure',
            members: {
              BlockPublicAcls: {
                type: 'boolean'
              },
              BlockPublicPolicy: {
                type: 'boolean'
              },
              IgnorePublicAcls: {
                type: 'boolean'
              },
              RestrictPublicBuckets: {
                type: 'boolean'
              }
            }
          },
          S8k: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                PolicyName: {},
                PolicyArn: {}
              }
            }
          },
          S8m: {
            type: 'structure',
            members: {
              PermissionsBoundaryArn: {},
              PermissionsBoundaryType: {}
            }
          },
          S8t: {
            type: 'structure',
            members: {
              DetailedMetricsEnabled: {
                type: 'boolean'
              },
              LoggingLevel: {},
              DataTraceEnabled: {
                type: 'boolean'
              },
              ThrottlingBurstLimit: {
                type: 'integer'
              },
              ThrottlingRateLimit: {
                type: 'double'
              }
            }
          },
          S8u: {
            type: 'structure',
            members: {
              Format: {},
              DestinationArn: {}
            }
          },
          S94: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                AttributeName: {},
                KeyType: {}
              }
            }
          },
          S96: {
            type: 'structure',
            members: {
              NonKeyAttributes: {
                shape: 'S23'
              },
              ProjectionType: {}
            }
          },
          S97: {
            type: 'structure',
            members: {
              LastDecreaseDateTime: {},
              LastIncreaseDateTime: {},
              NumberOfDecreasesToday: {
                type: 'integer'
              },
              ReadCapacityUnits: {
                type: 'integer'
              },
              WriteCapacityUnits: {
                type: 'integer'
              }
            }
          },
          S9e: {
            type: 'structure',
            members: {
              ReadCapacityUnits: {
                type: 'integer'
              }
            }
          },
          S9t: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                DomainName: {},
                ResourceRecord: {
                  type: 'structure',
                  members: {
                    Name: {},
                    Type: {},
                    Value: {}
                  }
                },
                ValidationDomain: {},
                ValidationEmails: {
                  shape: 'S23'
                },
                ValidationMethod: {},
                ValidationStatus: {}
              }
            }
          },
          Sc1: {
            type: 'structure',
            members: {
              Address: {},
              Port: {
                type: 'integer'
              },
              HostedZoneId: {}
            }
          },
          Sc2: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                VpcSecurityGroupId: {},
                Status: {}
              }
            }
          },
          Scc: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Name: {},
                Value: {}
              }
            }
          },
          Sci: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Domain: {},
                Status: {},
                Fqdn: {},
                IamRoleName: {}
              }
            }
          },
          Sde: {
            type: 'structure',
            members: {
              Name: {},
              Image: {},
              MountPoints: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    SourceVolume: {},
                    ContainerPath: {}
                  }
                }
              },
              Privileged: {
                type: 'boolean'
              }
            }
          },
          Sg3: {
            type: 'structure',
            members: {
              CloudWatchLogsLogGroupArn: {},
              Enabled: {
                type: 'boolean'
              }
            }
          },
          Sgu: {
            type: 'structure',
            members: {
              PublishMetricAction: {
                type: 'structure',
                members: {
                  Dimensions: {
                    type: 'list',
                    member: {
                      type: 'structure',
                      members: {
                        Value: {}
                      }
                    }
                  }
                }
              }
            }
          },
          Sii: {
            type: 'structure',
            members: {
              CidrBlock: {},
              CidrBlockSet: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    CidrBlock: {}
                  }
                }
              },
              Ipv6CidrBlockSet: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    Ipv6CidrBlock: {}
                  }
                }
              },
              OwnerId: {},
              PeeringOptions: {
                type: 'structure',
                members: {
                  AllowDnsResolutionFromRemoteVpc: {
                    type: 'boolean'
                  },
                  AllowEgressFromLocalClassicLinkToRemoteVpc: {
                    type: 'boolean'
                  },
                  AllowEgressFromLocalVpcToRemoteClassicLink: {
                    type: 'boolean'
                  }
                }
              },
              Region: {},
              VpcId: {}
            }
          },
          Sjn: {
            type: 'structure',
            members: {
              DeleteAfterDays: {
                type: 'long'
              },
              MoveToColdStorageAfterDays: {
                type: 'long'
              }
            }
          },
          Sl6: {
            type: 'structure',
            members: {
              CustomRequestHandling: {
                shape: 'Sl7'
              }
            }
          },
          Sl7: {
            type: 'structure',
            members: {
              InsertHeaders: {
                shape: 'Sl8'
              }
            }
          },
          Sl8: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Name: {},
                Value: {}
              }
            }
          },
          Sla: {
            type: 'structure',
            members: {
              CustomResponse: {
                type: 'structure',
                members: {
                  CustomResponseBodyKey: {},
                  ResponseCode: {
                    type: 'integer'
                  },
                  ResponseHeaders: {
                    shape: 'Sl8'
                  }
                }
              }
            }
          },
          Slc: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Action: {
                  type: 'structure',
                  members: {
                    Allow: {
                      shape: 'Sl6'
                    },
                    Block: {
                      shape: 'Sla'
                    },
                    Captcha: {
                      type: 'structure',
                      members: {
                        CustomRequestHandling: {
                          shape: 'Sl7'
                        }
                      }
                    },
                    Count: {
                      type: 'structure',
                      members: {
                        CustomRequestHandling: {
                          shape: 'Sl7'
                        }
                      }
                    }
                  }
                },
                Name: {},
                OverrideAction: {},
                Priority: {
                  type: 'integer'
                },
                VisibilityConfig: {
                  shape: 'Slh'
                }
              }
            }
          },
          Slh: {
            type: 'structure',
            members: {
              CloudWatchMetricsEnabled: {
                type: 'boolean'
              },
              MetricName: {},
              SampledRequestsEnabled: {
                type: 'boolean'
              }
            }
          },
          Sm0: {
            type: 'structure',
            members: {
              AuthTtL: {
                type: 'long'
              },
              ClientId: {},
              IatTtL: {
                type: 'long'
              },
              Issuer: {}
            }
          },
          Sm1: {
            type: 'structure',
            members: {
              AuthorizerResultTtlInSeconds: {
                type: 'integer'
              },
              AuthorizerUri: {},
              IdentityValidationExpression: {}
            }
          },
          Sm2: {
            type: 'structure',
            members: {
              AppIdClientRegex: {},
              AwsRegion: {},
              DefaultAction: {},
              UserPoolId: {}
            }
          },
          Sox: {
            type: 'structure',
            members: {
              IpAddressV4: {},
              Organization: {
                type: 'structure',
                members: {
                  Asn: {
                    type: 'integer'
                  },
                  AsnOrg: {},
                  Isp: {},
                  Org: {}
                }
              },
              Country: {
                type: 'structure',
                members: {
                  CountryCode: {},
                  CountryName: {}
                }
              },
              City: {
                type: 'structure',
                members: {
                  CityName: {}
                }
              },
              GeoLocation: {
                type: 'structure',
                members: {
                  Lon: {
                    type: 'double'
                  },
                  Lat: {
                    type: 'double'
                  }
                }
              }
            }
          },
          Sp3: {
            type: 'structure',
            members: {
              Port: {
                type: 'integer'
              },
              PortName: {}
            }
          },
          Spm: {
            type: 'list',
            member: {
              shape: 'Spn'
            }
          },
          Spn: {
            type: 'structure',
            required: ['Id', 'ProductArn'],
            members: {
              Id: {},
              ProductArn: {}
            }
          },
          Spt: {
            type: 'structure',
            required: ['StandardsArn', 'SecurityControlId', 'AssociationStatus'],
            members: {
              StandardsArn: {},
              SecurityControlId: {},
              AssociationStatus: {},
              UpdatedReason: {}
            }
          },
          Sq0: {
            type: 'map',
            key: {},
            value: {}
          },
          Sq5: {
            type: 'structure',
            members: {
              SecurityHub: {
                type: 'structure',
                members: {
                  ServiceEnabled: {
                    type: 'boolean'
                  },
                  EnabledStandardIdentifiers: {
                    type: 'list',
                    member: {}
                  },
                  SecurityControlsConfiguration: {
                    type: 'structure',
                    members: {
                      EnabledSecurityControlIdentifiers: {
                        type: 'list',
                        member: {}
                      },
                      DisabledSecurityControlIdentifiers: {
                        type: 'list',
                        member: {}
                      },
                      SecurityControlCustomParameters: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            SecurityControlId: {},
                            Parameters: {
                              shape: 'S2a'
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            union: true
          },
          Sqh: {
            type: 'structure',
            members: {
              ProductArn: {
                shape: 'Sx'
              },
              AwsAccountId: {
                shape: 'Sx'
              },
              Id: {
                shape: 'Sx'
              },
              GeneratorId: {
                shape: 'Sx'
              },
              Region: {
                shape: 'Sx'
              },
              Type: {
                shape: 'Sx'
              },
              FirstObservedAt: {
                shape: 'S10'
              },
              LastObservedAt: {
                shape: 'S10'
              },
              CreatedAt: {
                shape: 'S10'
              },
              UpdatedAt: {
                shape: 'S10'
              },
              SeverityProduct: {
                shape: 'S14',
                deprecated: true,
                deprecatedMessage: 'This filter is deprecated. Instead, use FindingProviderSeverityOriginal.'
              },
              SeverityNormalized: {
                shape: 'S14',
                deprecated: true,
                deprecatedMessage: 'This filter is deprecated. Instead, use SeverityLabel or FindingProviderFieldsSeverityLabel.'
              },
              SeverityLabel: {
                shape: 'Sx'
              },
              Confidence: {
                shape: 'S14'
              },
              Criticality: {
                shape: 'S14'
              },
              Title: {
                shape: 'Sx'
              },
              Description: {
                shape: 'Sx'
              },
              RecommendationText: {
                shape: 'Sx'
              },
              SourceUrl: {
                shape: 'Sx'
              },
              ProductFields: {
                shape: 'S17'
              },
              ProductName: {
                shape: 'Sx'
              },
              CompanyName: {
                shape: 'Sx'
              },
              UserDefinedFields: {
                shape: 'S17'
              },
              MalwareName: {
                shape: 'Sx'
              },
              MalwareType: {
                shape: 'Sx'
              },
              MalwarePath: {
                shape: 'Sx'
              },
              MalwareState: {
                shape: 'Sx'
              },
              NetworkDirection: {
                shape: 'Sx'
              },
              NetworkProtocol: {
                shape: 'Sx'
              },
              NetworkSourceIpV4: {
                shape: 'Sqi'
              },
              NetworkSourceIpV6: {
                shape: 'Sqi'
              },
              NetworkSourcePort: {
                shape: 'S14'
              },
              NetworkSourceDomain: {
                shape: 'Sx'
              },
              NetworkSourceMac: {
                shape: 'Sx'
              },
              NetworkDestinationIpV4: {
                shape: 'Sqi'
              },
              NetworkDestinationIpV6: {
                shape: 'Sqi'
              },
              NetworkDestinationPort: {
                shape: 'S14'
              },
              NetworkDestinationDomain: {
                shape: 'Sx'
              },
              ProcessName: {
                shape: 'Sx'
              },
              ProcessPath: {
                shape: 'Sx'
              },
              ProcessPid: {
                shape: 'S14'
              },
              ProcessParentPid: {
                shape: 'S14'
              },
              ProcessLaunchedAt: {
                shape: 'S10'
              },
              ProcessTerminatedAt: {
                shape: 'S10'
              },
              ThreatIntelIndicatorType: {
                shape: 'Sx'
              },
              ThreatIntelIndicatorValue: {
                shape: 'Sx'
              },
              ThreatIntelIndicatorCategory: {
                shape: 'Sx'
              },
              ThreatIntelIndicatorLastObservedAt: {
                shape: 'S10'
              },
              ThreatIntelIndicatorSource: {
                shape: 'Sx'
              },
              ThreatIntelIndicatorSourceUrl: {
                shape: 'Sx'
              },
              ResourceType: {
                shape: 'Sx'
              },
              ResourceId: {
                shape: 'Sx'
              },
              ResourcePartition: {
                shape: 'Sx'
              },
              ResourceRegion: {
                shape: 'Sx'
              },
              ResourceTags: {
                shape: 'S17'
              },
              ResourceAwsEc2InstanceType: {
                shape: 'Sx'
              },
              ResourceAwsEc2InstanceImageId: {
                shape: 'Sx'
              },
              ResourceAwsEc2InstanceIpV4Addresses: {
                shape: 'Sqi'
              },
              ResourceAwsEc2InstanceIpV6Addresses: {
                shape: 'Sqi'
              },
              ResourceAwsEc2InstanceKeyName: {
                shape: 'Sx'
              },
              ResourceAwsEc2InstanceIamInstanceProfileArn: {
                shape: 'Sx'
              },
              ResourceAwsEc2InstanceVpcId: {
                shape: 'Sx'
              },
              ResourceAwsEc2InstanceSubnetId: {
                shape: 'Sx'
              },
              ResourceAwsEc2InstanceLaunchedAt: {
                shape: 'S10'
              },
              ResourceAwsS3BucketOwnerId: {
                shape: 'Sx'
              },
              ResourceAwsS3BucketOwnerName: {
                shape: 'Sx'
              },
              ResourceAwsIamAccessKeyUserName: {
                shape: 'Sx',
                deprecated: true,
                deprecatedMessage: 'This filter is deprecated. Instead, use ResourceAwsIamAccessKeyPrincipalName.'
              },
              ResourceAwsIamAccessKeyPrincipalName: {
                shape: 'Sx'
              },
              ResourceAwsIamAccessKeyStatus: {
                shape: 'Sx'
              },
              ResourceAwsIamAccessKeyCreatedAt: {
                shape: 'S10'
              },
              ResourceAwsIamUserUserName: {
                shape: 'Sx'
              },
              ResourceContainerName: {
                shape: 'Sx'
              },
              ResourceContainerImageId: {
                shape: 'Sx'
              },
              ResourceContainerImageName: {
                shape: 'Sx'
              },
              ResourceContainerLaunchedAt: {
                shape: 'S10'
              },
              ResourceDetailsOther: {
                shape: 'S17'
              },
              ComplianceStatus: {
                shape: 'Sx'
              },
              VerificationState: {
                shape: 'Sx'
              },
              WorkflowState: {
                shape: 'Sx'
              },
              WorkflowStatus: {
                shape: 'Sx'
              },
              RecordState: {
                shape: 'Sx'
              },
              RelatedFindingsProductArn: {
                shape: 'Sx'
              },
              RelatedFindingsId: {
                shape: 'Sx'
              },
              NoteText: {
                shape: 'Sx'
              },
              NoteUpdatedAt: {
                shape: 'S10'
              },
              NoteUpdatedBy: {
                shape: 'Sx'
              },
              Keyword: {
                deprecated: true,
                deprecatedMessage: 'The Keyword property is deprecated.',
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    Value: {}
                  }
                }
              },
              FindingProviderFieldsConfidence: {
                shape: 'S14'
              },
              FindingProviderFieldsCriticality: {
                shape: 'S14'
              },
              FindingProviderFieldsRelatedFindingsId: {
                shape: 'Sx'
              },
              FindingProviderFieldsRelatedFindingsProductArn: {
                shape: 'Sx'
              },
              FindingProviderFieldsSeverityLabel: {
                shape: 'Sx'
              },
              FindingProviderFieldsSeverityOriginal: {
                shape: 'Sx'
              },
              FindingProviderFieldsTypes: {
                shape: 'Sx'
              },
              Sample: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    Value: {
                      type: 'boolean'
                    }
                  }
                }
              },
              ComplianceSecurityControlId: {
                shape: 'Sx'
              },
              ComplianceAssociatedStandardsId: {
                shape: 'Sx'
              },
              VulnerabilitiesExploitAvailable: {
                shape: 'Sx'
              },
              VulnerabilitiesFixAvailable: {
                shape: 'Sx'
              },
              ComplianceSecurityControlParametersName: {
                shape: 'Sx'
              },
              ComplianceSecurityControlParametersValue: {
                shape: 'Sx'
              },
              AwsAccountName: {
                shape: 'Sx'
              },
              ResourceApplicationName: {
                shape: 'Sx'
              },
              ResourceApplicationArn: {
                shape: 'Sx'
              }
            }
          },
          Sqi: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Cidr: {}
              }
            }
          },
          Squ: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                AccountId: {},
                ProcessingResult: {}
              }
            }
          },
          Sqx: {
            type: 'list',
            member: {}
          },
          Src: {
            type: 'list',
            member: {}
          },
          Sro: {
            type: 'structure',
            members: {
              ConfigurationType: {},
              Status: {},
              StatusMessage: {}
            }
          },
          Ssr: {
            type: 'structure',
            members: {
              AccountId: {},
              InvitationId: {},
              InvitedAt: {
                shape: 'S1p'
              },
              MemberStatus: {}
            }
          },
          Stt: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                AccountId: {},
                Email: {},
                MasterId: {
                  deprecated: true,
                  deprecatedMessage: 'This field is deprecated, use AdministratorId instead.'
                },
                AdministratorId: {},
                MemberStatus: {},
                InvitedAt: {
                  shape: 'S1p'
                },
                UpdatedAt: {
                  shape: 'S1p'
                }
              }
            }
          },
          Stx: {
            type: 'structure',
            required: ['SecurityControlId', 'Title', 'Description', 'RemediationUrl', 'SeverityRating', 'CurrentRegionAvailability'],
            members: {
              SecurityControlId: {},
              Title: {},
              Description: {},
              RemediationUrl: {},
              SeverityRating: {},
              CurrentRegionAvailability: {},
              CustomizableProperties: {
                type: 'list',
                member: {}
              },
              ParameterDefinitions: {
                type: 'map',
                key: {},
                value: {
                  type: 'structure',
                  required: ['Description', 'ConfigurationOptions'],
                  members: {
                    Description: {},
                    ConfigurationOptions: {
                      type: 'structure',
                      members: {
                        Integer: {
                          type: 'structure',
                          members: {
                            DefaultValue: {
                              type: 'integer'
                            },
                            Min: {
                              type: 'integer'
                            },
                            Max: {
                              type: 'integer'
                            }
                          }
                        },
                        IntegerList: {
                          type: 'structure',
                          members: {
                            DefaultValue: {
                              shape: 'S2e'
                            },
                            Min: {
                              type: 'integer'
                            },
                            Max: {
                              type: 'integer'
                            },
                            MaxItems: {
                              type: 'integer'
                            }
                          }
                        },
                        Double: {
                          type: 'structure',
                          members: {
                            DefaultValue: {
                              type: 'double'
                            },
                            Min: {
                              type: 'double'
                            },
                            Max: {
                              type: 'double'
                            }
                          }
                        },
                        String: {
                          type: 'structure',
                          members: {
                            DefaultValue: {},
                            Re2Expression: {},
                            ExpressionDescription: {}
                          }
                        },
                        StringList: {
                          type: 'structure',
                          members: {
                            DefaultValue: {
                              shape: 'S23'
                            },
                            Re2Expression: {},
                            MaxItems: {
                              type: 'integer'
                            },
                            ExpressionDescription: {}
                          }
                        },
                        Boolean: {
                          type: 'structure',
                          members: {
                            DefaultValue: {
                              type: 'boolean'
                            }
                          }
                        },
                        Enum: {
                          type: 'structure',
                          members: {
                            DefaultValue: {},
                            AllowedValues: {
                              shape: 'S23'
                            }
                          }
                        },
                        EnumList: {
                          type: 'structure',
                          members: {
                            DefaultValue: {
                              shape: 'S23'
                            },
                            MaxItems: {
                              type: 'integer'
                            },
                            AllowedValues: {
                              shape: 'S23'
                            }
                          }
                        }
                      },
                      union: true
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
//# sourceMappingURL=343f8fde5ae65d37f7253955b0771ca3e7718dba.js.map