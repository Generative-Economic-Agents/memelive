System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2014-11-12',
          endpointPrefix: 'config',
          jsonVersion: '1.1',
          protocol: 'json',
          serviceAbbreviation: 'Config Service',
          serviceFullName: 'AWS Config',
          serviceId: 'Config Service',
          signatureVersion: 'v4',
          targetPrefix: 'StarlingDoveService',
          uid: 'config-2014-11-12'
        },
        operations: {
          BatchGetAggregateResourceConfig: {
            input: {
              type: 'structure',
              required: ['ConfigurationAggregatorName', 'ResourceIdentifiers'],
              members: {
                ConfigurationAggregatorName: {},
                ResourceIdentifiers: {
                  type: 'list',
                  member: {
                    shape: 'S4'
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                BaseConfigurationItems: {
                  shape: 'Sb'
                },
                UnprocessedResourceIdentifiers: {
                  type: 'list',
                  member: {
                    shape: 'S4'
                  }
                }
              }
            }
          },
          BatchGetResourceConfig: {
            input: {
              type: 'structure',
              required: ['resourceKeys'],
              members: {
                resourceKeys: {
                  shape: 'Ss'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                baseConfigurationItems: {
                  shape: 'Sb'
                },
                unprocessedResourceKeys: {
                  shape: 'Ss'
                }
              }
            }
          },
          DeleteAggregationAuthorization: {
            input: {
              type: 'structure',
              required: ['AuthorizedAccountId', 'AuthorizedAwsRegion'],
              members: {
                AuthorizedAccountId: {},
                AuthorizedAwsRegion: {}
              }
            }
          },
          DeleteConfigRule: {
            input: {
              type: 'structure',
              required: ['ConfigRuleName'],
              members: {
                ConfigRuleName: {}
              }
            }
          },
          DeleteConfigurationAggregator: {
            input: {
              type: 'structure',
              required: ['ConfigurationAggregatorName'],
              members: {
                ConfigurationAggregatorName: {}
              }
            }
          },
          DeleteConfigurationRecorder: {
            input: {
              type: 'structure',
              required: ['ConfigurationRecorderName'],
              members: {
                ConfigurationRecorderName: {}
              }
            }
          },
          DeleteConformancePack: {
            input: {
              type: 'structure',
              required: ['ConformancePackName'],
              members: {
                ConformancePackName: {}
              }
            }
          },
          DeleteDeliveryChannel: {
            input: {
              type: 'structure',
              required: ['DeliveryChannelName'],
              members: {
                DeliveryChannelName: {}
              }
            }
          },
          DeleteEvaluationResults: {
            input: {
              type: 'structure',
              required: ['ConfigRuleName'],
              members: {
                ConfigRuleName: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteOrganizationConfigRule: {
            input: {
              type: 'structure',
              required: ['OrganizationConfigRuleName'],
              members: {
                OrganizationConfigRuleName: {}
              }
            }
          },
          DeleteOrganizationConformancePack: {
            input: {
              type: 'structure',
              required: ['OrganizationConformancePackName'],
              members: {
                OrganizationConformancePackName: {}
              }
            }
          },
          DeletePendingAggregationRequest: {
            input: {
              type: 'structure',
              required: ['RequesterAccountId', 'RequesterAwsRegion'],
              members: {
                RequesterAccountId: {},
                RequesterAwsRegion: {}
              }
            }
          },
          DeleteRemediationConfiguration: {
            input: {
              type: 'structure',
              required: ['ConfigRuleName'],
              members: {
                ConfigRuleName: {},
                ResourceType: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteRemediationExceptions: {
            input: {
              type: 'structure',
              required: ['ConfigRuleName', 'ResourceKeys'],
              members: {
                ConfigRuleName: {},
                ResourceKeys: {
                  shape: 'S1h'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                FailedBatches: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      FailureMessage: {},
                      FailedItems: {
                        shape: 'S1h'
                      }
                    }
                  }
                }
              }
            }
          },
          DeleteResourceConfig: {
            input: {
              type: 'structure',
              required: ['ResourceType', 'ResourceId'],
              members: {
                ResourceType: {},
                ResourceId: {}
              }
            }
          },
          DeleteRetentionConfiguration: {
            input: {
              type: 'structure',
              required: ['RetentionConfigurationName'],
              members: {
                RetentionConfigurationName: {}
              }
            }
          },
          DeleteStoredQuery: {
            input: {
              type: 'structure',
              required: ['QueryName'],
              members: {
                QueryName: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeliverConfigSnapshot: {
            input: {
              type: 'structure',
              required: ['deliveryChannelName'],
              members: {
                deliveryChannelName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                configSnapshotId: {}
              }
            }
          },
          DescribeAggregateComplianceByConfigRules: {
            input: {
              type: 'structure',
              required: ['ConfigurationAggregatorName'],
              members: {
                ConfigurationAggregatorName: {},
                Filters: {
                  type: 'structure',
                  members: {
                    ConfigRuleName: {},
                    ComplianceType: {},
                    AccountId: {},
                    AwsRegion: {}
                  }
                },
                Limit: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                AggregateComplianceByConfigRules: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ConfigRuleName: {},
                      Compliance: {
                        shape: 'S25'
                      },
                      AccountId: {},
                      AwsRegion: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeAggregateComplianceByConformancePacks: {
            input: {
              type: 'structure',
              required: ['ConfigurationAggregatorName'],
              members: {
                ConfigurationAggregatorName: {},
                Filters: {
                  type: 'structure',
                  members: {
                    ConformancePackName: {},
                    ComplianceType: {},
                    AccountId: {},
                    AwsRegion: {}
                  }
                },
                Limit: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                AggregateComplianceByConformancePacks: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ConformancePackName: {},
                      Compliance: {
                        type: 'structure',
                        members: {
                          ComplianceType: {},
                          CompliantRuleCount: {
                            type: 'integer'
                          },
                          NonCompliantRuleCount: {
                            type: 'integer'
                          },
                          TotalRuleCount: {
                            type: 'integer'
                          }
                        }
                      },
                      AccountId: {},
                      AwsRegion: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeAggregationAuthorizations: {
            input: {
              type: 'structure',
              members: {
                Limit: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                AggregationAuthorizations: {
                  type: 'list',
                  member: {
                    shape: 'S2k'
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeComplianceByConfigRule: {
            input: {
              type: 'structure',
              members: {
                ConfigRuleNames: {
                  shape: 'S2n'
                },
                ComplianceTypes: {
                  shape: 'S2o'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ComplianceByConfigRules: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ConfigRuleName: {},
                      Compliance: {
                        shape: 'S25'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeComplianceByResource: {
            input: {
              type: 'structure',
              members: {
                ResourceType: {},
                ResourceId: {},
                ComplianceTypes: {
                  shape: 'S2o'
                },
                Limit: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ComplianceByResources: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ResourceType: {},
                      ResourceId: {},
                      Compliance: {
                        shape: 'S25'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeConfigRuleEvaluationStatus: {
            input: {
              type: 'structure',
              members: {
                ConfigRuleNames: {
                  shape: 'S2n'
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
                ConfigRulesEvaluationStatus: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ConfigRuleName: {},
                      ConfigRuleArn: {},
                      ConfigRuleId: {},
                      LastSuccessfulInvocationTime: {
                        type: 'timestamp'
                      },
                      LastFailedInvocationTime: {
                        type: 'timestamp'
                      },
                      LastSuccessfulEvaluationTime: {
                        type: 'timestamp'
                      },
                      LastFailedEvaluationTime: {
                        type: 'timestamp'
                      },
                      FirstActivatedTime: {
                        type: 'timestamp'
                      },
                      LastDeactivatedTime: {
                        type: 'timestamp'
                      },
                      LastErrorCode: {},
                      LastErrorMessage: {},
                      FirstEvaluationStarted: {
                        type: 'boolean'
                      },
                      LastDebugLogDeliveryStatus: {},
                      LastDebugLogDeliveryStatusReason: {},
                      LastDebugLogDeliveryTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeConfigRules: {
            input: {
              type: 'structure',
              members: {
                ConfigRuleNames: {
                  shape: 'S2n'
                },
                NextToken: {},
                Filters: {
                  type: 'structure',
                  members: {
                    EvaluationMode: {}
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ConfigRules: {
                  type: 'list',
                  member: {
                    shape: 'S37'
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeConfigurationAggregatorSourcesStatus: {
            input: {
              type: 'structure',
              required: ['ConfigurationAggregatorName'],
              members: {
                ConfigurationAggregatorName: {},
                UpdateStatus: {
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
                AggregatedSourceStatusList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      SourceId: {},
                      SourceType: {},
                      AwsRegion: {},
                      LastUpdateStatus: {},
                      LastUpdateTime: {
                        type: 'timestamp'
                      },
                      LastErrorCode: {},
                      LastErrorMessage: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeConfigurationAggregators: {
            input: {
              type: 'structure',
              members: {
                ConfigurationAggregatorNames: {
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
                ConfigurationAggregators: {
                  type: 'list',
                  member: {
                    shape: 'S40'
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeConfigurationRecorderStatus: {
            input: {
              type: 'structure',
              members: {
                ConfigurationRecorderNames: {
                  shape: 'S48'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ConfigurationRecordersStatus: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      name: {},
                      lastStartTime: {
                        type: 'timestamp'
                      },
                      lastStopTime: {
                        type: 'timestamp'
                      },
                      recording: {
                        type: 'boolean'
                      },
                      lastStatus: {},
                      lastErrorCode: {},
                      lastErrorMessage: {},
                      lastStatusChangeTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                }
              }
            }
          },
          DescribeConfigurationRecorders: {
            input: {
              type: 'structure',
              members: {
                ConfigurationRecorderNames: {
                  shape: 'S48'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ConfigurationRecorders: {
                  type: 'list',
                  member: {
                    shape: 'S4g'
                  }
                }
              }
            }
          },
          DescribeConformancePackCompliance: {
            input: {
              type: 'structure',
              required: ['ConformancePackName'],
              members: {
                ConformancePackName: {},
                Filters: {
                  type: 'structure',
                  members: {
                    ConfigRuleNames: {
                      shape: 'S4v'
                    },
                    ComplianceType: {}
                  }
                },
                Limit: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              required: ['ConformancePackName', 'ConformancePackRuleComplianceList'],
              members: {
                ConformancePackName: {},
                ConformancePackRuleComplianceList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ConfigRuleName: {},
                      ComplianceType: {},
                      Controls: {
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
          DescribeConformancePackStatus: {
            input: {
              type: 'structure',
              members: {
                ConformancePackNames: {
                  shape: 'S52'
                },
                Limit: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ConformancePackStatusDetails: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['ConformancePackName', 'ConformancePackId', 'ConformancePackArn', 'ConformancePackState', 'StackArn', 'LastUpdateRequestedTime'],
                    members: {
                      ConformancePackName: {},
                      ConformancePackId: {},
                      ConformancePackArn: {},
                      ConformancePackState: {},
                      StackArn: {},
                      ConformancePackStatusReason: {},
                      LastUpdateRequestedTime: {
                        type: 'timestamp'
                      },
                      LastUpdateCompletedTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeConformancePacks: {
            input: {
              type: 'structure',
              members: {
                ConformancePackNames: {
                  shape: 'S52'
                },
                Limit: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ConformancePackDetails: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['ConformancePackName', 'ConformancePackArn', 'ConformancePackId'],
                    members: {
                      ConformancePackName: {},
                      ConformancePackArn: {},
                      ConformancePackId: {},
                      DeliveryS3Bucket: {},
                      DeliveryS3KeyPrefix: {},
                      ConformancePackInputParameters: {
                        shape: 'S5i'
                      },
                      LastUpdateRequestedTime: {
                        type: 'timestamp'
                      },
                      CreatedBy: {},
                      TemplateSSMDocumentDetails: {
                        shape: 'S5m'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeDeliveryChannelStatus: {
            input: {
              type: 'structure',
              members: {
                DeliveryChannelNames: {
                  shape: 'S5q'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                DeliveryChannelsStatus: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      name: {},
                      configSnapshotDeliveryInfo: {
                        shape: 'S5u'
                      },
                      configHistoryDeliveryInfo: {
                        shape: 'S5u'
                      },
                      configStreamDeliveryInfo: {
                        type: 'structure',
                        members: {
                          lastStatus: {},
                          lastErrorCode: {},
                          lastErrorMessage: {},
                          lastStatusChangeTime: {
                            type: 'timestamp'
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          DescribeDeliveryChannels: {
            input: {
              type: 'structure',
              members: {
                DeliveryChannelNames: {
                  shape: 'S5q'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                DeliveryChannels: {
                  type: 'list',
                  member: {
                    shape: 'S60'
                  }
                }
              }
            }
          },
          DescribeOrganizationConfigRuleStatuses: {
            input: {
              type: 'structure',
              members: {
                OrganizationConfigRuleNames: {
                  shape: 'S63'
                },
                Limit: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                OrganizationConfigRuleStatuses: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['OrganizationConfigRuleName', 'OrganizationRuleStatus'],
                    members: {
                      OrganizationConfigRuleName: {},
                      OrganizationRuleStatus: {},
                      ErrorCode: {},
                      ErrorMessage: {},
                      LastUpdateTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeOrganizationConfigRules: {
            input: {
              type: 'structure',
              members: {
                OrganizationConfigRuleNames: {
                  shape: 'S63'
                },
                Limit: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                OrganizationConfigRules: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['OrganizationConfigRuleName', 'OrganizationConfigRuleArn'],
                    members: {
                      OrganizationConfigRuleName: {},
                      OrganizationConfigRuleArn: {},
                      OrganizationManagedRuleMetadata: {
                        shape: 'S6d'
                      },
                      OrganizationCustomRuleMetadata: {
                        shape: 'S6i'
                      },
                      ExcludedAccounts: {
                        shape: 'S6l'
                      },
                      LastUpdateTime: {
                        type: 'timestamp'
                      },
                      OrganizationCustomPolicyRuleMetadata: {
                        type: 'structure',
                        members: {
                          Description: {},
                          OrganizationConfigRuleTriggerTypes: {
                            shape: 'S6n'
                          },
                          InputParameters: {},
                          MaximumExecutionFrequency: {},
                          ResourceTypesScope: {
                            shape: 'S6g'
                          },
                          ResourceIdScope: {},
                          TagKeyScope: {},
                          TagValueScope: {},
                          PolicyRuntime: {},
                          DebugLogDeliveryAccounts: {
                            shape: 'S6p'
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
          DescribeOrganizationConformancePackStatuses: {
            input: {
              type: 'structure',
              members: {
                OrganizationConformancePackNames: {
                  shape: 'S6r'
                },
                Limit: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                OrganizationConformancePackStatuses: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['OrganizationConformancePackName', 'Status'],
                    members: {
                      OrganizationConformancePackName: {},
                      Status: {},
                      ErrorCode: {},
                      ErrorMessage: {},
                      LastUpdateTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeOrganizationConformancePacks: {
            input: {
              type: 'structure',
              members: {
                OrganizationConformancePackNames: {
                  shape: 'S6r'
                },
                Limit: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                OrganizationConformancePacks: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['OrganizationConformancePackName', 'OrganizationConformancePackArn', 'LastUpdateTime'],
                    members: {
                      OrganizationConformancePackName: {},
                      OrganizationConformancePackArn: {},
                      DeliveryS3Bucket: {},
                      DeliveryS3KeyPrefix: {},
                      ConformancePackInputParameters: {
                        shape: 'S5i'
                      },
                      ExcludedAccounts: {
                        shape: 'S6l'
                      },
                      LastUpdateTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribePendingAggregationRequests: {
            input: {
              type: 'structure',
              members: {
                Limit: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                PendingAggregationRequests: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      RequesterAccountId: {},
                      RequesterAwsRegion: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeRemediationConfigurations: {
            input: {
              type: 'structure',
              required: ['ConfigRuleNames'],
              members: {
                ConfigRuleNames: {
                  shape: 'S2n'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                RemediationConfigurations: {
                  shape: 'S77'
                }
              }
            }
          },
          DescribeRemediationExceptions: {
            input: {
              type: 'structure',
              required: ['ConfigRuleName'],
              members: {
                ConfigRuleName: {},
                ResourceKeys: {
                  shape: 'S1h'
                },
                Limit: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                RemediationExceptions: {
                  shape: 'S7n'
                },
                NextToken: {}
              }
            }
          },
          DescribeRemediationExecutionStatus: {
            input: {
              type: 'structure',
              required: ['ConfigRuleName'],
              members: {
                ConfigRuleName: {},
                ResourceKeys: {
                  shape: 'Ss'
                },
                Limit: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                RemediationExecutionStatuses: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ResourceKey: {
                        shape: 'St'
                      },
                      State: {},
                      StepDetails: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            Name: {},
                            State: {},
                            ErrorMessage: {},
                            StartTime: {
                              type: 'timestamp'
                            },
                            StopTime: {
                              type: 'timestamp'
                            }
                          }
                        }
                      },
                      InvocationTime: {
                        type: 'timestamp'
                      },
                      LastUpdatedTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeRetentionConfigurations: {
            input: {
              type: 'structure',
              members: {
                RetentionConfigurationNames: {
                  type: 'list',
                  member: {}
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                RetentionConfigurations: {
                  type: 'list',
                  member: {
                    shape: 'S81'
                  }
                },
                NextToken: {}
              }
            }
          },
          GetAggregateComplianceDetailsByConfigRule: {
            input: {
              type: 'structure',
              required: ['ConfigurationAggregatorName', 'ConfigRuleName', 'AccountId', 'AwsRegion'],
              members: {
                ConfigurationAggregatorName: {},
                ConfigRuleName: {},
                AccountId: {},
                AwsRegion: {},
                ComplianceType: {},
                Limit: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                AggregateEvaluationResults: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      EvaluationResultIdentifier: {
                        shape: 'S87'
                      },
                      ComplianceType: {},
                      ResultRecordedTime: {
                        type: 'timestamp'
                      },
                      ConfigRuleInvokedTime: {
                        type: 'timestamp'
                      },
                      Annotation: {},
                      AccountId: {},
                      AwsRegion: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          GetAggregateConfigRuleComplianceSummary: {
            input: {
              type: 'structure',
              required: ['ConfigurationAggregatorName'],
              members: {
                ConfigurationAggregatorName: {},
                Filters: {
                  type: 'structure',
                  members: {
                    AccountId: {},
                    AwsRegion: {}
                  }
                },
                GroupByKey: {},
                Limit: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                GroupByKey: {},
                AggregateComplianceCounts: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      GroupName: {},
                      ComplianceSummary: {
                        shape: 'S8g'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          GetAggregateConformancePackComplianceSummary: {
            input: {
              type: 'structure',
              required: ['ConfigurationAggregatorName'],
              members: {
                ConfigurationAggregatorName: {},
                Filters: {
                  type: 'structure',
                  members: {
                    AccountId: {},
                    AwsRegion: {}
                  }
                },
                GroupByKey: {},
                Limit: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                AggregateConformancePackComplianceSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ComplianceSummary: {
                        type: 'structure',
                        members: {
                          CompliantConformancePackCount: {
                            type: 'integer'
                          },
                          NonCompliantConformancePackCount: {
                            type: 'integer'
                          }
                        }
                      },
                      GroupName: {}
                    }
                  }
                },
                GroupByKey: {},
                NextToken: {}
              }
            }
          },
          GetAggregateDiscoveredResourceCounts: {
            input: {
              type: 'structure',
              required: ['ConfigurationAggregatorName'],
              members: {
                ConfigurationAggregatorName: {},
                Filters: {
                  type: 'structure',
                  members: {
                    ResourceType: {},
                    AccountId: {},
                    Region: {}
                  }
                },
                GroupByKey: {},
                Limit: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              required: ['TotalDiscoveredResources'],
              members: {
                TotalDiscoveredResources: {
                  type: 'long'
                },
                GroupByKey: {},
                GroupedResourceCounts: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['GroupName', 'ResourceCount'],
                    members: {
                      GroupName: {},
                      ResourceCount: {
                        type: 'long'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          GetAggregateResourceConfig: {
            input: {
              type: 'structure',
              required: ['ConfigurationAggregatorName', 'ResourceIdentifier'],
              members: {
                ConfigurationAggregatorName: {},
                ResourceIdentifier: {
                  shape: 'S4'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ConfigurationItem: {
                  shape: 'S8x'
                }
              }
            }
          },
          GetComplianceDetailsByConfigRule: {
            input: {
              type: 'structure',
              required: ['ConfigRuleName'],
              members: {
                ConfigRuleName: {},
                ComplianceTypes: {
                  shape: 'S2o'
                },
                Limit: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                EvaluationResults: {
                  shape: 'S99'
                },
                NextToken: {}
              }
            }
          },
          GetComplianceDetailsByResource: {
            input: {
              type: 'structure',
              members: {
                ResourceType: {},
                ResourceId: {},
                ComplianceTypes: {
                  shape: 'S2o'
                },
                NextToken: {},
                ResourceEvaluationId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                EvaluationResults: {
                  shape: 'S99'
                },
                NextToken: {}
              }
            }
          },
          GetComplianceSummaryByConfigRule: {
            output: {
              type: 'structure',
              members: {
                ComplianceSummary: {
                  shape: 'S8g'
                }
              }
            }
          },
          GetComplianceSummaryByResourceType: {
            input: {
              type: 'structure',
              members: {
                ResourceTypes: {
                  shape: 'S9f'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ComplianceSummariesByResourceType: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ResourceType: {},
                      ComplianceSummary: {
                        shape: 'S8g'
                      }
                    }
                  }
                }
              }
            }
          },
          GetConformancePackComplianceDetails: {
            input: {
              type: 'structure',
              required: ['ConformancePackName'],
              members: {
                ConformancePackName: {},
                Filters: {
                  type: 'structure',
                  members: {
                    ConfigRuleNames: {
                      shape: 'S4v'
                    },
                    ComplianceType: {},
                    ResourceType: {},
                    ResourceIds: {
                      type: 'list',
                      member: {}
                    }
                  }
                },
                Limit: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              required: ['ConformancePackName'],
              members: {
                ConformancePackName: {},
                ConformancePackRuleEvaluationResults: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['ComplianceType', 'EvaluationResultIdentifier', 'ConfigRuleInvokedTime', 'ResultRecordedTime'],
                    members: {
                      ComplianceType: {},
                      EvaluationResultIdentifier: {
                        shape: 'S87'
                      },
                      ConfigRuleInvokedTime: {
                        type: 'timestamp'
                      },
                      ResultRecordedTime: {
                        type: 'timestamp'
                      },
                      Annotation: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          GetConformancePackComplianceSummary: {
            input: {
              type: 'structure',
              required: ['ConformancePackNames'],
              members: {
                ConformancePackNames: {
                  type: 'list',
                  member: {}
                },
                Limit: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ConformancePackComplianceSummaryList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['ConformancePackName', 'ConformancePackComplianceStatus'],
                    members: {
                      ConformancePackName: {},
                      ConformancePackComplianceStatus: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          GetCustomRulePolicy: {
            input: {
              type: 'structure',
              members: {
                ConfigRuleName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                PolicyText: {}
              }
            }
          },
          GetDiscoveredResourceCounts: {
            input: {
              type: 'structure',
              members: {
                resourceTypes: {
                  shape: 'S9f'
                },
                limit: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                totalDiscoveredResources: {
                  type: 'long'
                },
                resourceCounts: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      resourceType: {},
                      count: {
                        type: 'long'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          GetOrganizationConfigRuleDetailedStatus: {
            input: {
              type: 'structure',
              required: ['OrganizationConfigRuleName'],
              members: {
                OrganizationConfigRuleName: {},
                Filters: {
                  type: 'structure',
                  members: {
                    AccountId: {},
                    MemberAccountRuleStatus: {}
                  }
                },
                Limit: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                OrganizationConfigRuleDetailedStatus: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['AccountId', 'ConfigRuleName', 'MemberAccountRuleStatus'],
                    members: {
                      AccountId: {},
                      ConfigRuleName: {},
                      MemberAccountRuleStatus: {},
                      ErrorCode: {},
                      ErrorMessage: {},
                      LastUpdateTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          GetOrganizationConformancePackDetailedStatus: {
            input: {
              type: 'structure',
              required: ['OrganizationConformancePackName'],
              members: {
                OrganizationConformancePackName: {},
                Filters: {
                  type: 'structure',
                  members: {
                    AccountId: {},
                    Status: {}
                  }
                },
                Limit: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                OrganizationConformancePackDetailedStatuses: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['AccountId', 'ConformancePackName', 'Status'],
                    members: {
                      AccountId: {},
                      ConformancePackName: {},
                      Status: {},
                      ErrorCode: {},
                      ErrorMessage: {},
                      LastUpdateTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          GetOrganizationCustomRulePolicy: {
            input: {
              type: 'structure',
              required: ['OrganizationConfigRuleName'],
              members: {
                OrganizationConfigRuleName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                PolicyText: {}
              }
            }
          },
          GetResourceConfigHistory: {
            input: {
              type: 'structure',
              required: ['resourceType', 'resourceId'],
              members: {
                resourceType: {},
                resourceId: {},
                laterTime: {
                  type: 'timestamp'
                },
                earlierTime: {
                  type: 'timestamp'
                },
                chronologicalOrder: {},
                limit: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                configurationItems: {
                  type: 'list',
                  member: {
                    shape: 'S8x'
                  }
                },
                nextToken: {}
              }
            }
          },
          GetResourceEvaluationSummary: {
            input: {
              type: 'structure',
              required: ['ResourceEvaluationId'],
              members: {
                ResourceEvaluationId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ResourceEvaluationId: {},
                EvaluationMode: {},
                EvaluationStatus: {
                  type: 'structure',
                  required: ['Status'],
                  members: {
                    Status: {},
                    FailureReason: {}
                  }
                },
                EvaluationStartTimestamp: {
                  type: 'timestamp'
                },
                Compliance: {},
                EvaluationContext: {
                  shape: 'Saq'
                },
                ResourceDetails: {
                  shape: 'Sas'
                }
              }
            }
          },
          GetStoredQuery: {
            input: {
              type: 'structure',
              required: ['QueryName'],
              members: {
                QueryName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                StoredQuery: {
                  shape: 'Sax'
                }
              }
            }
          },
          ListAggregateDiscoveredResources: {
            input: {
              type: 'structure',
              required: ['ConfigurationAggregatorName', 'ResourceType'],
              members: {
                ConfigurationAggregatorName: {},
                ResourceType: {},
                Filters: {
                  type: 'structure',
                  members: {
                    AccountId: {},
                    ResourceId: {},
                    ResourceName: {},
                    Region: {}
                  }
                },
                Limit: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ResourceIdentifiers: {
                  type: 'list',
                  member: {
                    shape: 'S4'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListConformancePackComplianceScores: {
            input: {
              type: 'structure',
              members: {
                Filters: {
                  type: 'structure',
                  required: ['ConformancePackNames'],
                  members: {
                    ConformancePackNames: {
                      type: 'list',
                      member: {}
                    }
                  }
                },
                SortOrder: {},
                SortBy: {},
                Limit: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              required: ['ConformancePackComplianceScores'],
              members: {
                NextToken: {},
                ConformancePackComplianceScores: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Score: {},
                      ConformancePackName: {},
                      LastUpdatedTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                }
              }
            }
          },
          ListDiscoveredResources: {
            input: {
              type: 'structure',
              required: ['resourceType'],
              members: {
                resourceType: {},
                resourceIds: {
                  type: 'list',
                  member: {}
                },
                resourceName: {},
                limit: {
                  type: 'integer'
                },
                includeDeletedResources: {
                  type: 'boolean'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                resourceIdentifiers: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      resourceType: {},
                      resourceId: {},
                      resourceName: {},
                      resourceDeletionTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListResourceEvaluations: {
            input: {
              type: 'structure',
              members: {
                Filters: {
                  type: 'structure',
                  members: {
                    EvaluationMode: {},
                    TimeWindow: {
                      type: 'structure',
                      members: {
                        StartTime: {
                          type: 'timestamp'
                        },
                        EndTime: {
                          type: 'timestamp'
                        }
                      }
                    },
                    EvaluationContextIdentifier: {}
                  }
                },
                Limit: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ResourceEvaluations: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ResourceEvaluationId: {},
                      EvaluationMode: {},
                      EvaluationStartTimestamp: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListStoredQueries: {
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
                StoredQueryMetadata: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['QueryId', 'QueryArn', 'QueryName'],
                    members: {
                      QueryId: {},
                      QueryArn: {},
                      QueryName: {},
                      Description: {}
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
                ResourceArn: {},
                Limit: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Tags: {
                  shape: 'Sc0'
                },
                NextToken: {}
              }
            }
          },
          PutAggregationAuthorization: {
            input: {
              type: 'structure',
              required: ['AuthorizedAccountId', 'AuthorizedAwsRegion'],
              members: {
                AuthorizedAccountId: {},
                AuthorizedAwsRegion: {},
                Tags: {
                  shape: 'Sc5'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AggregationAuthorization: {
                  shape: 'S2k'
                }
              }
            }
          },
          PutConfigRule: {
            input: {
              type: 'structure',
              required: ['ConfigRule'],
              members: {
                ConfigRule: {
                  shape: 'S37'
                },
                Tags: {
                  shape: 'Sc5'
                }
              }
            }
          },
          PutConfigurationAggregator: {
            input: {
              type: 'structure',
              required: ['ConfigurationAggregatorName'],
              members: {
                ConfigurationAggregatorName: {},
                AccountAggregationSources: {
                  shape: 'S42'
                },
                OrganizationAggregationSource: {
                  shape: 'S46'
                },
                Tags: {
                  shape: 'Sc5'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ConfigurationAggregator: {
                  shape: 'S40'
                }
              }
            }
          },
          PutConfigurationRecorder: {
            input: {
              type: 'structure',
              required: ['ConfigurationRecorder'],
              members: {
                ConfigurationRecorder: {
                  shape: 'S4g'
                }
              }
            }
          },
          PutConformancePack: {
            input: {
              type: 'structure',
              required: ['ConformancePackName'],
              members: {
                ConformancePackName: {},
                TemplateS3Uri: {},
                TemplateBody: {},
                DeliveryS3Bucket: {},
                DeliveryS3KeyPrefix: {},
                ConformancePackInputParameters: {
                  shape: 'S5i'
                },
                TemplateSSMDocumentDetails: {
                  shape: 'S5m'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ConformancePackArn: {}
              }
            }
          },
          PutDeliveryChannel: {
            input: {
              type: 'structure',
              required: ['DeliveryChannel'],
              members: {
                DeliveryChannel: {
                  shape: 'S60'
                }
              }
            }
          },
          PutEvaluations: {
            input: {
              type: 'structure',
              required: ['ResultToken'],
              members: {
                Evaluations: {
                  shape: 'Sch'
                },
                ResultToken: {},
                TestMode: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                FailedEvaluations: {
                  shape: 'Sch'
                }
              }
            }
          },
          PutExternalEvaluation: {
            input: {
              type: 'structure',
              required: ['ConfigRuleName', 'ExternalEvaluation'],
              members: {
                ConfigRuleName: {},
                ExternalEvaluation: {
                  type: 'structure',
                  required: ['ComplianceResourceType', 'ComplianceResourceId', 'ComplianceType', 'OrderingTimestamp'],
                  members: {
                    ComplianceResourceType: {},
                    ComplianceResourceId: {},
                    ComplianceType: {},
                    Annotation: {},
                    OrderingTimestamp: {
                      type: 'timestamp'
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          PutOrganizationConfigRule: {
            input: {
              type: 'structure',
              required: ['OrganizationConfigRuleName'],
              members: {
                OrganizationConfigRuleName: {},
                OrganizationManagedRuleMetadata: {
                  shape: 'S6d'
                },
                OrganizationCustomRuleMetadata: {
                  shape: 'S6i'
                },
                ExcludedAccounts: {
                  shape: 'S6l'
                },
                OrganizationCustomPolicyRuleMetadata: {
                  type: 'structure',
                  required: ['PolicyRuntime', 'PolicyText'],
                  members: {
                    Description: {},
                    OrganizationConfigRuleTriggerTypes: {
                      shape: 'S6n'
                    },
                    InputParameters: {},
                    MaximumExecutionFrequency: {},
                    ResourceTypesScope: {
                      shape: 'S6g'
                    },
                    ResourceIdScope: {},
                    TagKeyScope: {},
                    TagValueScope: {},
                    PolicyRuntime: {},
                    PolicyText: {},
                    DebugLogDeliveryAccounts: {
                      shape: 'S6p'
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                OrganizationConfigRuleArn: {}
              }
            }
          },
          PutOrganizationConformancePack: {
            input: {
              type: 'structure',
              required: ['OrganizationConformancePackName'],
              members: {
                OrganizationConformancePackName: {},
                TemplateS3Uri: {},
                TemplateBody: {},
                DeliveryS3Bucket: {},
                DeliveryS3KeyPrefix: {},
                ConformancePackInputParameters: {
                  shape: 'S5i'
                },
                ExcludedAccounts: {
                  shape: 'S6l'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                OrganizationConformancePackArn: {}
              }
            }
          },
          PutRemediationConfigurations: {
            input: {
              type: 'structure',
              required: ['RemediationConfigurations'],
              members: {
                RemediationConfigurations: {
                  shape: 'S77'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                FailedBatches: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      FailureMessage: {},
                      FailedItems: {
                        shape: 'S77'
                      }
                    }
                  }
                }
              }
            }
          },
          PutRemediationExceptions: {
            input: {
              type: 'structure',
              required: ['ConfigRuleName', 'ResourceKeys'],
              members: {
                ConfigRuleName: {},
                ResourceKeys: {
                  shape: 'S1h'
                },
                Message: {},
                ExpirationTime: {
                  type: 'timestamp'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                FailedBatches: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      FailureMessage: {},
                      FailedItems: {
                        shape: 'S7n'
                      }
                    }
                  }
                }
              }
            }
          },
          PutResourceConfig: {
            input: {
              type: 'structure',
              required: ['ResourceType', 'SchemaVersionId', 'ResourceId', 'Configuration'],
              members: {
                ResourceType: {},
                SchemaVersionId: {},
                ResourceId: {},
                ResourceName: {},
                Configuration: {},
                Tags: {
                  shape: 'S8z'
                }
              }
            }
          },
          PutRetentionConfiguration: {
            input: {
              type: 'structure',
              required: ['RetentionPeriodInDays'],
              members: {
                RetentionPeriodInDays: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                RetentionConfiguration: {
                  shape: 'S81'
                }
              }
            }
          },
          PutStoredQuery: {
            input: {
              type: 'structure',
              required: ['StoredQuery'],
              members: {
                StoredQuery: {
                  shape: 'Sax'
                },
                Tags: {
                  shape: 'Sc5'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                QueryArn: {}
              }
            }
          },
          SelectAggregateResourceConfig: {
            input: {
              type: 'structure',
              required: ['Expression', 'ConfigurationAggregatorName'],
              members: {
                Expression: {},
                ConfigurationAggregatorName: {},
                Limit: {
                  type: 'integer'
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
                Results: {
                  shape: 'Sda'
                },
                QueryInfo: {
                  shape: 'Sdb'
                },
                NextToken: {}
              }
            }
          },
          SelectResourceConfig: {
            input: {
              type: 'structure',
              required: ['Expression'],
              members: {
                Expression: {},
                Limit: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Results: {
                  shape: 'Sda'
                },
                QueryInfo: {
                  shape: 'Sdb'
                },
                NextToken: {}
              }
            }
          },
          StartConfigRulesEvaluation: {
            input: {
              type: 'structure',
              members: {
                ConfigRuleNames: {
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
          StartConfigurationRecorder: {
            input: {
              type: 'structure',
              required: ['ConfigurationRecorderName'],
              members: {
                ConfigurationRecorderName: {}
              }
            }
          },
          StartRemediationExecution: {
            input: {
              type: 'structure',
              required: ['ConfigRuleName', 'ResourceKeys'],
              members: {
                ConfigRuleName: {},
                ResourceKeys: {
                  shape: 'Ss'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                FailureMessage: {},
                FailedItems: {
                  shape: 'Ss'
                }
              }
            }
          },
          StartResourceEvaluation: {
            input: {
              type: 'structure',
              required: ['ResourceDetails', 'EvaluationMode'],
              members: {
                ResourceDetails: {
                  shape: 'Sas'
                },
                EvaluationContext: {
                  shape: 'Saq'
                },
                EvaluationMode: {},
                EvaluationTimeout: {
                  type: 'integer'
                },
                ClientToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ResourceEvaluationId: {}
              }
            }
          },
          StopConfigurationRecorder: {
            input: {
              type: 'structure',
              required: ['ConfigurationRecorderName'],
              members: {
                ConfigurationRecorderName: {}
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
                  shape: 'Sc0'
                }
              }
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
            }
          }
        },
        shapes: {
          S4: {
            type: 'structure',
            required: ['SourceAccountId', 'SourceRegion', 'ResourceId', 'ResourceType'],
            members: {
              SourceAccountId: {},
              SourceRegion: {},
              ResourceId: {},
              ResourceType: {},
              ResourceName: {}
            }
          },
          Sb: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                version: {},
                accountId: {},
                configurationItemCaptureTime: {
                  type: 'timestamp'
                },
                configurationItemStatus: {},
                configurationStateId: {},
                arn: {},
                resourceType: {},
                resourceId: {},
                resourceName: {},
                awsRegion: {},
                availabilityZone: {},
                resourceCreationTime: {
                  type: 'timestamp'
                },
                configuration: {},
                supplementaryConfiguration: {
                  shape: 'Sl'
                },
                recordingFrequency: {},
                configurationItemDeliveryTime: {
                  type: 'timestamp'
                }
              }
            }
          },
          Sl: {
            type: 'map',
            key: {},
            value: {}
          },
          Ss: {
            type: 'list',
            member: {
              shape: 'St'
            }
          },
          St: {
            type: 'structure',
            required: ['resourceType', 'resourceId'],
            members: {
              resourceType: {},
              resourceId: {}
            }
          },
          S1h: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                ResourceType: {},
                ResourceId: {}
              }
            }
          },
          S25: {
            type: 'structure',
            members: {
              ComplianceType: {},
              ComplianceContributorCount: {
                shape: 'S26'
              }
            }
          },
          S26: {
            type: 'structure',
            members: {
              CappedCount: {
                type: 'integer'
              },
              CapExceeded: {
                type: 'boolean'
              }
            }
          },
          S2k: {
            type: 'structure',
            members: {
              AggregationAuthorizationArn: {},
              AuthorizedAccountId: {},
              AuthorizedAwsRegion: {},
              CreationTime: {
                type: 'timestamp'
              }
            }
          },
          S2n: {
            type: 'list',
            member: {}
          },
          S2o: {
            type: 'list',
            member: {}
          },
          S37: {
            type: 'structure',
            required: ['Source'],
            members: {
              ConfigRuleName: {},
              ConfigRuleArn: {},
              ConfigRuleId: {},
              Description: {},
              Scope: {
                type: 'structure',
                members: {
                  ComplianceResourceTypes: {
                    type: 'list',
                    member: {}
                  },
                  TagKey: {},
                  TagValue: {},
                  ComplianceResourceId: {}
                }
              },
              Source: {
                type: 'structure',
                required: ['Owner'],
                members: {
                  Owner: {},
                  SourceIdentifier: {},
                  SourceDetails: {
                    type: 'list',
                    member: {
                      type: 'structure',
                      members: {
                        EventSource: {},
                        MessageType: {},
                        MaximumExecutionFrequency: {}
                      }
                    }
                  },
                  CustomPolicyDetails: {
                    type: 'structure',
                    required: ['PolicyRuntime', 'PolicyText'],
                    members: {
                      PolicyRuntime: {},
                      PolicyText: {},
                      EnableDebugLogDelivery: {
                        type: 'boolean'
                      }
                    }
                  }
                }
              },
              InputParameters: {},
              MaximumExecutionFrequency: {},
              ConfigRuleState: {},
              CreatedBy: {},
              EvaluationModes: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    Mode: {}
                  }
                }
              }
            }
          },
          S40: {
            type: 'structure',
            members: {
              ConfigurationAggregatorName: {},
              ConfigurationAggregatorArn: {},
              AccountAggregationSources: {
                shape: 'S42'
              },
              OrganizationAggregationSource: {
                shape: 'S46'
              },
              CreationTime: {
                type: 'timestamp'
              },
              LastUpdatedTime: {
                type: 'timestamp'
              },
              CreatedBy: {}
            }
          },
          S42: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['AccountIds'],
              members: {
                AccountIds: {
                  type: 'list',
                  member: {}
                },
                AllAwsRegions: {
                  type: 'boolean'
                },
                AwsRegions: {
                  shape: 'S45'
                }
              }
            }
          },
          S45: {
            type: 'list',
            member: {}
          },
          S46: {
            type: 'structure',
            required: ['RoleArn'],
            members: {
              RoleArn: {},
              AwsRegions: {
                shape: 'S45'
              },
              AllAwsRegions: {
                type: 'boolean'
              }
            }
          },
          S48: {
            type: 'list',
            member: {}
          },
          S4g: {
            type: 'structure',
            members: {
              name: {},
              roleARN: {},
              recordingGroup: {
                type: 'structure',
                members: {
                  allSupported: {
                    type: 'boolean'
                  },
                  includeGlobalResourceTypes: {
                    type: 'boolean'
                  },
                  resourceTypes: {
                    shape: 'S4k'
                  },
                  exclusionByResourceTypes: {
                    type: 'structure',
                    members: {
                      resourceTypes: {
                        shape: 'S4k'
                      }
                    }
                  },
                  recordingStrategy: {
                    type: 'structure',
                    members: {
                      useOnly: {}
                    }
                  }
                }
              },
              recordingMode: {
                type: 'structure',
                required: ['recordingFrequency'],
                members: {
                  recordingFrequency: {},
                  recordingModeOverrides: {
                    type: 'list',
                    member: {
                      type: 'structure',
                      required: ['resourceTypes', 'recordingFrequency'],
                      members: {
                        description: {},
                        resourceTypes: {
                          type: 'list',
                          member: {}
                        },
                        recordingFrequency: {}
                      }
                    }
                  }
                }
              }
            }
          },
          S4k: {
            type: 'list',
            member: {}
          },
          S4v: {
            type: 'list',
            member: {}
          },
          S52: {
            type: 'list',
            member: {}
          },
          S5i: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['ParameterName', 'ParameterValue'],
              members: {
                ParameterName: {},
                ParameterValue: {}
              }
            }
          },
          S5m: {
            type: 'structure',
            required: ['DocumentName'],
            members: {
              DocumentName: {},
              DocumentVersion: {}
            }
          },
          S5q: {
            type: 'list',
            member: {}
          },
          S5u: {
            type: 'structure',
            members: {
              lastStatus: {},
              lastErrorCode: {},
              lastErrorMessage: {},
              lastAttemptTime: {
                type: 'timestamp'
              },
              lastSuccessfulTime: {
                type: 'timestamp'
              },
              nextDeliveryTime: {
                type: 'timestamp'
              }
            }
          },
          S60: {
            type: 'structure',
            members: {
              name: {},
              s3BucketName: {},
              s3KeyPrefix: {},
              s3KmsKeyArn: {},
              snsTopicARN: {},
              configSnapshotDeliveryProperties: {
                type: 'structure',
                members: {
                  deliveryFrequency: {}
                }
              }
            }
          },
          S63: {
            type: 'list',
            member: {}
          },
          S6d: {
            type: 'structure',
            required: ['RuleIdentifier'],
            members: {
              Description: {},
              RuleIdentifier: {},
              InputParameters: {},
              MaximumExecutionFrequency: {},
              ResourceTypesScope: {
                shape: 'S6g'
              },
              ResourceIdScope: {},
              TagKeyScope: {},
              TagValueScope: {}
            }
          },
          S6g: {
            type: 'list',
            member: {}
          },
          S6i: {
            type: 'structure',
            required: ['LambdaFunctionArn', 'OrganizationConfigRuleTriggerTypes'],
            members: {
              Description: {},
              LambdaFunctionArn: {},
              OrganizationConfigRuleTriggerTypes: {
                type: 'list',
                member: {}
              },
              InputParameters: {},
              MaximumExecutionFrequency: {},
              ResourceTypesScope: {
                shape: 'S6g'
              },
              ResourceIdScope: {},
              TagKeyScope: {},
              TagValueScope: {}
            }
          },
          S6l: {
            type: 'list',
            member: {}
          },
          S6n: {
            type: 'list',
            member: {}
          },
          S6p: {
            type: 'list',
            member: {}
          },
          S6r: {
            type: 'list',
            member: {}
          },
          S77: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['ConfigRuleName', 'TargetType', 'TargetId'],
              members: {
                ConfigRuleName: {},
                TargetType: {},
                TargetId: {},
                TargetVersion: {},
                Parameters: {
                  type: 'map',
                  key: {},
                  value: {
                    type: 'structure',
                    members: {
                      ResourceValue: {
                        type: 'structure',
                        required: ['Value'],
                        members: {
                          Value: {}
                        }
                      },
                      StaticValue: {
                        type: 'structure',
                        required: ['Values'],
                        members: {
                          Values: {
                            type: 'list',
                            member: {}
                          }
                        }
                      }
                    }
                  }
                },
                ResourceType: {},
                Automatic: {
                  type: 'boolean'
                },
                ExecutionControls: {
                  type: 'structure',
                  members: {
                    SsmControls: {
                      type: 'structure',
                      members: {
                        ConcurrentExecutionRatePercentage: {
                          type: 'integer'
                        },
                        ErrorPercentage: {
                          type: 'integer'
                        }
                      }
                    }
                  }
                },
                MaximumAutomaticAttempts: {
                  type: 'integer'
                },
                RetryAttemptSeconds: {
                  type: 'long'
                },
                Arn: {},
                CreatedByService: {}
              }
            }
          },
          S7n: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['ConfigRuleName', 'ResourceType', 'ResourceId'],
              members: {
                ConfigRuleName: {},
                ResourceType: {},
                ResourceId: {},
                Message: {},
                ExpirationTime: {
                  type: 'timestamp'
                }
              }
            }
          },
          S81: {
            type: 'structure',
            required: ['Name', 'RetentionPeriodInDays'],
            members: {
              Name: {},
              RetentionPeriodInDays: {
                type: 'integer'
              }
            }
          },
          S87: {
            type: 'structure',
            members: {
              EvaluationResultQualifier: {
                type: 'structure',
                members: {
                  ConfigRuleName: {},
                  ResourceType: {},
                  ResourceId: {},
                  EvaluationMode: {}
                }
              },
              OrderingTimestamp: {
                type: 'timestamp'
              },
              ResourceEvaluationId: {}
            }
          },
          S8g: {
            type: 'structure',
            members: {
              CompliantResourceCount: {
                shape: 'S26'
              },
              NonCompliantResourceCount: {
                shape: 'S26'
              },
              ComplianceSummaryTimestamp: {
                type: 'timestamp'
              }
            }
          },
          S8x: {
            type: 'structure',
            members: {
              version: {},
              accountId: {},
              configurationItemCaptureTime: {
                type: 'timestamp'
              },
              configurationItemStatus: {},
              configurationStateId: {},
              configurationItemMD5Hash: {},
              arn: {},
              resourceType: {},
              resourceId: {},
              resourceName: {},
              awsRegion: {},
              availabilityZone: {},
              resourceCreationTime: {
                type: 'timestamp'
              },
              tags: {
                shape: 'S8z'
              },
              relatedEvents: {
                type: 'list',
                member: {}
              },
              relationships: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    resourceType: {},
                    resourceId: {},
                    resourceName: {},
                    relationshipName: {}
                  }
                }
              },
              configuration: {},
              supplementaryConfiguration: {
                shape: 'Sl'
              },
              recordingFrequency: {},
              configurationItemDeliveryTime: {
                type: 'timestamp'
              }
            }
          },
          S8z: {
            type: 'map',
            key: {},
            value: {}
          },
          S99: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                EvaluationResultIdentifier: {
                  shape: 'S87'
                },
                ComplianceType: {},
                ResultRecordedTime: {
                  type: 'timestamp'
                },
                ConfigRuleInvokedTime: {
                  type: 'timestamp'
                },
                Annotation: {},
                ResultToken: {}
              }
            }
          },
          S9f: {
            type: 'list',
            member: {}
          },
          Saq: {
            type: 'structure',
            members: {
              EvaluationContextIdentifier: {}
            }
          },
          Sas: {
            type: 'structure',
            required: ['ResourceId', 'ResourceType', 'ResourceConfiguration'],
            members: {
              ResourceId: {},
              ResourceType: {},
              ResourceConfiguration: {},
              ResourceConfigurationSchemaType: {}
            }
          },
          Sax: {
            type: 'structure',
            required: ['QueryName'],
            members: {
              QueryId: {},
              QueryArn: {},
              QueryName: {},
              Description: {},
              Expression: {}
            }
          },
          Sc0: {
            type: 'list',
            member: {
              shape: 'Sc1'
            }
          },
          Sc1: {
            type: 'structure',
            members: {
              Key: {},
              Value: {}
            }
          },
          Sc5: {
            type: 'list',
            member: {
              shape: 'Sc1'
            }
          },
          Sch: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['ComplianceResourceType', 'ComplianceResourceId', 'ComplianceType', 'OrderingTimestamp'],
              members: {
                ComplianceResourceType: {},
                ComplianceResourceId: {},
                ComplianceType: {},
                Annotation: {},
                OrderingTimestamp: {
                  type: 'timestamp'
                }
              }
            }
          },
          Sda: {
            type: 'list',
            member: {}
          },
          Sdb: {
            type: 'structure',
            members: {
              SelectFields: {
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
      });
    }
  };
});
//# sourceMappingURL=001537fd4f7a4abf8f3e2c50d74c2fe7d29d0427.js.map