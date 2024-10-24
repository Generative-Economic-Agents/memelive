System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2010-08-01',
          endpointPrefix: 'monitoring',
          protocol: 'query',
          serviceAbbreviation: 'CloudWatch',
          serviceFullName: 'Amazon CloudWatch',
          serviceId: 'CloudWatch',
          signatureVersion: 'v4',
          uid: 'monitoring-2010-08-01',
          xmlNamespace: 'http://monitoring.amazonaws.com/doc/2010-08-01/'
        },
        operations: {
          DeleteAlarms: {
            input: {
              type: 'structure',
              required: ['AlarmNames'],
              members: {
                AlarmNames: {
                  shape: 'S2'
                }
              }
            }
          },
          DeleteAnomalyDetector: {
            input: {
              type: 'structure',
              members: {
                Namespace: {
                  deprecated: true,
                  deprecatedMessage: 'Use SingleMetricAnomalyDetector.'
                },
                MetricName: {
                  deprecated: true,
                  deprecatedMessage: 'Use SingleMetricAnomalyDetector.'
                },
                Dimensions: {
                  shape: 'S7',
                  deprecated: true,
                  deprecatedMessage: 'Use SingleMetricAnomalyDetector.'
                },
                Stat: {
                  deprecated: true,
                  deprecatedMessage: 'Use SingleMetricAnomalyDetector.'
                },
                SingleMetricAnomalyDetector: {
                  shape: 'Sc'
                },
                MetricMathAnomalyDetector: {
                  shape: 'Se'
                }
              }
            },
            output: {
              resultWrapper: 'DeleteAnomalyDetectorResult',
              type: 'structure',
              members: {}
            }
          },
          DeleteDashboards: {
            input: {
              type: 'structure',
              required: ['DashboardNames'],
              members: {
                DashboardNames: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              resultWrapper: 'DeleteDashboardsResult',
              type: 'structure',
              members: {}
            }
          },
          DeleteInsightRules: {
            input: {
              type: 'structure',
              required: ['RuleNames'],
              members: {
                RuleNames: {
                  shape: 'Sw'
                }
              }
            },
            output: {
              resultWrapper: 'DeleteInsightRulesResult',
              type: 'structure',
              members: {
                Failures: {
                  shape: 'Sz'
                }
              }
            }
          },
          DeleteMetricStream: {
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {}
              }
            },
            output: {
              resultWrapper: 'DeleteMetricStreamResult',
              type: 'structure',
              members: {}
            }
          },
          DescribeAlarmHistory: {
            input: {
              type: 'structure',
              members: {
                AlarmName: {},
                AlarmTypes: {
                  shape: 'S19'
                },
                HistoryItemType: {},
                StartDate: {
                  type: 'timestamp'
                },
                EndDate: {
                  type: 'timestamp'
                },
                MaxRecords: {
                  type: 'integer'
                },
                NextToken: {},
                ScanBy: {}
              }
            },
            output: {
              resultWrapper: 'DescribeAlarmHistoryResult',
              type: 'structure',
              members: {
                AlarmHistoryItems: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      AlarmName: {},
                      AlarmType: {},
                      Timestamp: {
                        type: 'timestamp'
                      },
                      HistoryItemType: {},
                      HistorySummary: {},
                      HistoryData: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeAlarms: {
            input: {
              type: 'structure',
              members: {
                AlarmNames: {
                  shape: 'S2'
                },
                AlarmNamePrefix: {},
                AlarmTypes: {
                  shape: 'S19'
                },
                ChildrenOfAlarmName: {},
                ParentsOfAlarmName: {},
                StateValue: {},
                ActionPrefix: {},
                MaxRecords: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              resultWrapper: 'DescribeAlarmsResult',
              type: 'structure',
              members: {
                CompositeAlarms: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ActionsEnabled: {
                        type: 'boolean'
                      },
                      AlarmActions: {
                        shape: 'S1t'
                      },
                      AlarmArn: {},
                      AlarmConfigurationUpdatedTimestamp: {
                        type: 'timestamp'
                      },
                      AlarmDescription: {},
                      AlarmName: {},
                      AlarmRule: {},
                      InsufficientDataActions: {
                        shape: 'S1t'
                      },
                      OKActions: {
                        shape: 'S1t'
                      },
                      StateReason: {},
                      StateReasonData: {},
                      StateUpdatedTimestamp: {
                        type: 'timestamp'
                      },
                      StateValue: {},
                      StateTransitionedTimestamp: {
                        type: 'timestamp'
                      },
                      ActionsSuppressedBy: {},
                      ActionsSuppressedReason: {},
                      ActionsSuppressor: {},
                      ActionsSuppressorWaitPeriod: {
                        type: 'integer'
                      },
                      ActionsSuppressorExtensionPeriod: {
                        type: 'integer'
                      }
                    },
                    xmlOrder: ['ActionsEnabled', 'AlarmActions', 'AlarmArn', 'AlarmConfigurationUpdatedTimestamp', 'AlarmDescription', 'AlarmName', 'AlarmRule', 'InsufficientDataActions', 'OKActions', 'StateReason', 'StateReasonData', 'StateUpdatedTimestamp', 'StateValue', 'StateTransitionedTimestamp', 'ActionsSuppressedBy', 'ActionsSuppressedReason', 'ActionsSuppressor', 'ActionsSuppressorWaitPeriod', 'ActionsSuppressorExtensionPeriod']
                  }
                },
                MetricAlarms: {
                  shape: 'S23'
                },
                NextToken: {}
              }
            }
          },
          DescribeAlarmsForMetric: {
            input: {
              type: 'structure',
              required: ['MetricName', 'Namespace'],
              members: {
                MetricName: {},
                Namespace: {},
                Statistic: {},
                ExtendedStatistic: {},
                Dimensions: {
                  shape: 'S7'
                },
                Period: {
                  type: 'integer'
                },
                Unit: {}
              }
            },
            output: {
              resultWrapper: 'DescribeAlarmsForMetricResult',
              type: 'structure',
              members: {
                MetricAlarms: {
                  shape: 'S23'
                }
              }
            }
          },
          DescribeAnomalyDetectors: {
            input: {
              type: 'structure',
              members: {
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                Namespace: {},
                MetricName: {},
                Dimensions: {
                  shape: 'S7'
                },
                AnomalyDetectorTypes: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              resultWrapper: 'DescribeAnomalyDetectorsResult',
              type: 'structure',
              members: {
                AnomalyDetectors: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Namespace: {
                        deprecated: true,
                        deprecatedMessage: 'Use SingleMetricAnomalyDetector.Namespace property.'
                      },
                      MetricName: {
                        deprecated: true,
                        deprecatedMessage: 'Use SingleMetricAnomalyDetector.MetricName property.'
                      },
                      Dimensions: {
                        shape: 'S7',
                        deprecated: true,
                        deprecatedMessage: 'Use SingleMetricAnomalyDetector.Dimensions property.'
                      },
                      Stat: {
                        deprecated: true,
                        deprecatedMessage: 'Use SingleMetricAnomalyDetector.Stat property.'
                      },
                      Configuration: {
                        shape: 'S2n'
                      },
                      StateValue: {},
                      MetricCharacteristics: {
                        shape: 'S2s'
                      },
                      SingleMetricAnomalyDetector: {
                        shape: 'Sc'
                      },
                      MetricMathAnomalyDetector: {
                        shape: 'Se'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeInsightRules: {
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
              resultWrapper: 'DescribeInsightRulesResult',
              type: 'structure',
              members: {
                NextToken: {},
                InsightRules: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Name', 'State', 'Schema', 'Definition'],
                    members: {
                      Name: {},
                      State: {},
                      Schema: {},
                      Definition: {},
                      ManagedRule: {
                        type: 'boolean'
                      }
                    }
                  }
                }
              }
            }
          },
          DisableAlarmActions: {
            input: {
              type: 'structure',
              required: ['AlarmNames'],
              members: {
                AlarmNames: {
                  shape: 'S2'
                }
              }
            }
          },
          DisableInsightRules: {
            input: {
              type: 'structure',
              required: ['RuleNames'],
              members: {
                RuleNames: {
                  shape: 'Sw'
                }
              }
            },
            output: {
              resultWrapper: 'DisableInsightRulesResult',
              type: 'structure',
              members: {
                Failures: {
                  shape: 'Sz'
                }
              }
            }
          },
          EnableAlarmActions: {
            input: {
              type: 'structure',
              required: ['AlarmNames'],
              members: {
                AlarmNames: {
                  shape: 'S2'
                }
              }
            }
          },
          EnableInsightRules: {
            input: {
              type: 'structure',
              required: ['RuleNames'],
              members: {
                RuleNames: {
                  shape: 'Sw'
                }
              }
            },
            output: {
              resultWrapper: 'EnableInsightRulesResult',
              type: 'structure',
              members: {
                Failures: {
                  shape: 'Sz'
                }
              }
            }
          },
          GetDashboard: {
            input: {
              type: 'structure',
              required: ['DashboardName'],
              members: {
                DashboardName: {}
              }
            },
            output: {
              resultWrapper: 'GetDashboardResult',
              type: 'structure',
              members: {
                DashboardArn: {},
                DashboardBody: {},
                DashboardName: {}
              }
            }
          },
          GetInsightRuleReport: {
            input: {
              type: 'structure',
              required: ['RuleName', 'StartTime', 'EndTime', 'Period'],
              members: {
                RuleName: {},
                StartTime: {
                  type: 'timestamp'
                },
                EndTime: {
                  type: 'timestamp'
                },
                Period: {
                  type: 'integer'
                },
                MaxContributorCount: {
                  type: 'integer'
                },
                Metrics: {
                  type: 'list',
                  member: {}
                },
                OrderBy: {}
              }
            },
            output: {
              resultWrapper: 'GetInsightRuleReportResult',
              type: 'structure',
              members: {
                KeyLabels: {
                  type: 'list',
                  member: {}
                },
                AggregationStatistic: {},
                AggregateValue: {
                  type: 'double'
                },
                ApproximateUniqueCount: {
                  type: 'long'
                },
                Contributors: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Keys', 'ApproximateAggregateValue', 'Datapoints'],
                    members: {
                      Keys: {
                        type: 'list',
                        member: {}
                      },
                      ApproximateAggregateValue: {
                        type: 'double'
                      },
                      Datapoints: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          required: ['Timestamp', 'ApproximateValue'],
                          members: {
                            Timestamp: {
                              type: 'timestamp'
                            },
                            ApproximateValue: {
                              type: 'double'
                            }
                          }
                        }
                      }
                    }
                  }
                },
                MetricDatapoints: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Timestamp'],
                    members: {
                      Timestamp: {
                        type: 'timestamp'
                      },
                      UniqueContributors: {
                        type: 'double'
                      },
                      MaxContributorValue: {
                        type: 'double'
                      },
                      SampleCount: {
                        type: 'double'
                      },
                      Average: {
                        type: 'double'
                      },
                      Sum: {
                        type: 'double'
                      },
                      Minimum: {
                        type: 'double'
                      },
                      Maximum: {
                        type: 'double'
                      }
                    }
                  }
                }
              }
            }
          },
          GetMetricData: {
            input: {
              type: 'structure',
              required: ['MetricDataQueries', 'StartTime', 'EndTime'],
              members: {
                MetricDataQueries: {
                  shape: 'Sf'
                },
                StartTime: {
                  type: 'timestamp'
                },
                EndTime: {
                  type: 'timestamp'
                },
                NextToken: {},
                ScanBy: {},
                MaxDatapoints: {
                  type: 'integer'
                },
                LabelOptions: {
                  type: 'structure',
                  members: {
                    Timezone: {}
                  }
                }
              }
            },
            output: {
              resultWrapper: 'GetMetricDataResult',
              type: 'structure',
              members: {
                MetricDataResults: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Id: {},
                      Label: {},
                      Timestamps: {
                        type: 'list',
                        member: {
                          type: 'timestamp'
                        }
                      },
                      Values: {
                        type: 'list',
                        member: {
                          type: 'double'
                        }
                      },
                      StatusCode: {},
                      Messages: {
                        shape: 'S47'
                      }
                    }
                  }
                },
                NextToken: {},
                Messages: {
                  shape: 'S47'
                }
              }
            }
          },
          GetMetricStatistics: {
            input: {
              type: 'structure',
              required: ['Namespace', 'MetricName', 'StartTime', 'EndTime', 'Period'],
              members: {
                Namespace: {},
                MetricName: {},
                Dimensions: {
                  shape: 'S7'
                },
                StartTime: {
                  type: 'timestamp'
                },
                EndTime: {
                  type: 'timestamp'
                },
                Period: {
                  type: 'integer'
                },
                Statistics: {
                  type: 'list',
                  member: {}
                },
                ExtendedStatistics: {
                  type: 'list',
                  member: {}
                },
                Unit: {}
              }
            },
            output: {
              resultWrapper: 'GetMetricStatisticsResult',
              type: 'structure',
              members: {
                Label: {},
                Datapoints: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Timestamp: {
                        type: 'timestamp'
                      },
                      SampleCount: {
                        type: 'double'
                      },
                      Average: {
                        type: 'double'
                      },
                      Sum: {
                        type: 'double'
                      },
                      Minimum: {
                        type: 'double'
                      },
                      Maximum: {
                        type: 'double'
                      },
                      Unit: {},
                      ExtendedStatistics: {
                        type: 'map',
                        key: {},
                        value: {
                          type: 'double'
                        }
                      }
                    },
                    xmlOrder: ['Timestamp', 'SampleCount', 'Average', 'Sum', 'Minimum', 'Maximum', 'Unit', 'ExtendedStatistics']
                  }
                }
              }
            }
          },
          GetMetricStream: {
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {}
              }
            },
            output: {
              resultWrapper: 'GetMetricStreamResult',
              type: 'structure',
              members: {
                Arn: {},
                Name: {},
                IncludeFilters: {
                  shape: 'S4l'
                },
                ExcludeFilters: {
                  shape: 'S4l'
                },
                FirehoseArn: {},
                RoleArn: {},
                State: {},
                CreationDate: {
                  type: 'timestamp'
                },
                LastUpdateDate: {
                  type: 'timestamp'
                },
                OutputFormat: {},
                StatisticsConfigurations: {
                  shape: 'S4q'
                },
                IncludeLinkedAccountsMetrics: {
                  type: 'boolean'
                }
              }
            }
          },
          GetMetricWidgetImage: {
            input: {
              type: 'structure',
              required: ['MetricWidget'],
              members: {
                MetricWidget: {},
                OutputFormat: {}
              }
            },
            output: {
              resultWrapper: 'GetMetricWidgetImageResult',
              type: 'structure',
              members: {
                MetricWidgetImage: {
                  type: 'blob'
                }
              }
            }
          },
          ListDashboards: {
            input: {
              type: 'structure',
              members: {
                DashboardNamePrefix: {},
                NextToken: {}
              }
            },
            output: {
              resultWrapper: 'ListDashboardsResult',
              type: 'structure',
              members: {
                DashboardEntries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      DashboardName: {},
                      DashboardArn: {},
                      LastModified: {
                        type: 'timestamp'
                      },
                      Size: {
                        type: 'long'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListManagedInsightRules: {
            input: {
              type: 'structure',
              required: ['ResourceARN'],
              members: {
                ResourceARN: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              resultWrapper: 'ListManagedInsightRulesResult',
              type: 'structure',
              members: {
                ManagedRules: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      TemplateName: {},
                      ResourceARN: {},
                      RuleState: {
                        type: 'structure',
                        required: ['RuleName', 'State'],
                        members: {
                          RuleName: {},
                          State: {}
                        }
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListMetricStreams: {
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
              resultWrapper: 'ListMetricStreamsResult',
              type: 'structure',
              members: {
                NextToken: {},
                Entries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Arn: {},
                      CreationDate: {
                        type: 'timestamp'
                      },
                      LastUpdateDate: {
                        type: 'timestamp'
                      },
                      Name: {},
                      FirehoseArn: {},
                      State: {},
                      OutputFormat: {}
                    }
                  }
                }
              }
            }
          },
          ListMetrics: {
            input: {
              type: 'structure',
              members: {
                Namespace: {},
                MetricName: {},
                Dimensions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Name'],
                    members: {
                      Name: {},
                      Value: {}
                    }
                  }
                },
                NextToken: {},
                RecentlyActive: {},
                IncludeLinkedAccounts: {
                  type: 'boolean'
                },
                OwningAccount: {}
              }
            },
            output: {
              resultWrapper: 'ListMetricsResult',
              type: 'structure',
              members: {
                Metrics: {
                  type: 'list',
                  member: {
                    shape: 'Sj'
                  }
                },
                NextToken: {},
                OwningAccounts: {
                  type: 'list',
                  member: {}
                }
              },
              xmlOrder: ['Metrics', 'NextToken', 'OwningAccounts']
            }
          },
          ListTagsForResource: {
            input: {
              type: 'structure',
              required: ['ResourceARN'],
              members: {
                ResourceARN: {}
              }
            },
            output: {
              resultWrapper: 'ListTagsForResourceResult',
              type: 'structure',
              members: {
                Tags: {
                  shape: 'S5u'
                }
              }
            }
          },
          PutAnomalyDetector: {
            input: {
              type: 'structure',
              members: {
                Namespace: {
                  deprecated: true,
                  deprecatedMessage: 'Use SingleMetricAnomalyDetector.'
                },
                MetricName: {
                  deprecated: true,
                  deprecatedMessage: 'Use SingleMetricAnomalyDetector.'
                },
                Dimensions: {
                  shape: 'S7',
                  deprecated: true,
                  deprecatedMessage: 'Use SingleMetricAnomalyDetector.'
                },
                Stat: {
                  deprecated: true,
                  deprecatedMessage: 'Use SingleMetricAnomalyDetector.'
                },
                Configuration: {
                  shape: 'S2n'
                },
                MetricCharacteristics: {
                  shape: 'S2s'
                },
                SingleMetricAnomalyDetector: {
                  shape: 'Sc'
                },
                MetricMathAnomalyDetector: {
                  shape: 'Se'
                }
              }
            },
            output: {
              resultWrapper: 'PutAnomalyDetectorResult',
              type: 'structure',
              members: {}
            }
          },
          PutCompositeAlarm: {
            input: {
              type: 'structure',
              required: ['AlarmName', 'AlarmRule'],
              members: {
                ActionsEnabled: {
                  type: 'boolean'
                },
                AlarmActions: {
                  shape: 'S1t'
                },
                AlarmDescription: {},
                AlarmName: {},
                AlarmRule: {},
                InsufficientDataActions: {
                  shape: 'S1t'
                },
                OKActions: {
                  shape: 'S1t'
                },
                Tags: {
                  shape: 'S5u'
                },
                ActionsSuppressor: {},
                ActionsSuppressorWaitPeriod: {
                  type: 'integer'
                },
                ActionsSuppressorExtensionPeriod: {
                  type: 'integer'
                }
              }
            }
          },
          PutDashboard: {
            input: {
              type: 'structure',
              required: ['DashboardName', 'DashboardBody'],
              members: {
                DashboardName: {},
                DashboardBody: {}
              }
            },
            output: {
              resultWrapper: 'PutDashboardResult',
              type: 'structure',
              members: {
                DashboardValidationMessages: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      DataPath: {},
                      Message: {}
                    }
                  }
                }
              }
            }
          },
          PutInsightRule: {
            input: {
              type: 'structure',
              required: ['RuleName', 'RuleDefinition'],
              members: {
                RuleName: {},
                RuleState: {},
                RuleDefinition: {},
                Tags: {
                  shape: 'S5u'
                }
              }
            },
            output: {
              resultWrapper: 'PutInsightRuleResult',
              type: 'structure',
              members: {}
            }
          },
          PutManagedInsightRules: {
            input: {
              type: 'structure',
              required: ['ManagedRules'],
              members: {
                ManagedRules: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['TemplateName', 'ResourceARN'],
                    members: {
                      TemplateName: {},
                      ResourceARN: {},
                      Tags: {
                        shape: 'S5u'
                      }
                    }
                  }
                }
              }
            },
            output: {
              resultWrapper: 'PutManagedInsightRulesResult',
              type: 'structure',
              members: {
                Failures: {
                  shape: 'Sz'
                }
              }
            }
          },
          PutMetricAlarm: {
            input: {
              type: 'structure',
              required: ['AlarmName', 'EvaluationPeriods', 'ComparisonOperator'],
              members: {
                AlarmName: {},
                AlarmDescription: {},
                ActionsEnabled: {
                  type: 'boolean'
                },
                OKActions: {
                  shape: 'S1t'
                },
                AlarmActions: {
                  shape: 'S1t'
                },
                InsufficientDataActions: {
                  shape: 'S1t'
                },
                MetricName: {},
                Namespace: {},
                Statistic: {},
                ExtendedStatistic: {},
                Dimensions: {
                  shape: 'S7'
                },
                Period: {
                  type: 'integer'
                },
                Unit: {},
                EvaluationPeriods: {
                  type: 'integer'
                },
                DatapointsToAlarm: {
                  type: 'integer'
                },
                Threshold: {
                  type: 'double'
                },
                ComparisonOperator: {},
                TreatMissingData: {},
                EvaluateLowSampleCountPercentile: {},
                Metrics: {
                  shape: 'Sf'
                },
                Tags: {
                  shape: 'S5u'
                },
                ThresholdMetricId: {}
              }
            }
          },
          PutMetricData: {
            input: {
              type: 'structure',
              required: ['Namespace', 'MetricData'],
              members: {
                Namespace: {},
                MetricData: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['MetricName'],
                    members: {
                      MetricName: {},
                      Dimensions: {
                        shape: 'S7'
                      },
                      Timestamp: {
                        type: 'timestamp'
                      },
                      Value: {
                        type: 'double'
                      },
                      StatisticValues: {
                        type: 'structure',
                        required: ['SampleCount', 'Sum', 'Minimum', 'Maximum'],
                        members: {
                          SampleCount: {
                            type: 'double'
                          },
                          Sum: {
                            type: 'double'
                          },
                          Minimum: {
                            type: 'double'
                          },
                          Maximum: {
                            type: 'double'
                          }
                        }
                      },
                      Values: {
                        type: 'list',
                        member: {
                          type: 'double'
                        }
                      },
                      Counts: {
                        type: 'list',
                        member: {
                          type: 'double'
                        }
                      },
                      Unit: {},
                      StorageResolution: {
                        type: 'integer'
                      }
                    }
                  }
                }
              }
            },
            requestcompression: {
              encodings: ['gzip']
            }
          },
          PutMetricStream: {
            input: {
              type: 'structure',
              required: ['Name', 'FirehoseArn', 'RoleArn', 'OutputFormat'],
              members: {
                Name: {},
                IncludeFilters: {
                  shape: 'S4l'
                },
                ExcludeFilters: {
                  shape: 'S4l'
                },
                FirehoseArn: {},
                RoleArn: {},
                OutputFormat: {},
                Tags: {
                  shape: 'S5u'
                },
                StatisticsConfigurations: {
                  shape: 'S4q'
                },
                IncludeLinkedAccountsMetrics: {
                  type: 'boolean'
                }
              }
            },
            output: {
              resultWrapper: 'PutMetricStreamResult',
              type: 'structure',
              members: {
                Arn: {}
              }
            }
          },
          SetAlarmState: {
            input: {
              type: 'structure',
              required: ['AlarmName', 'StateValue', 'StateReason'],
              members: {
                AlarmName: {},
                StateValue: {},
                StateReason: {},
                StateReasonData: {}
              }
            }
          },
          StartMetricStreams: {
            input: {
              type: 'structure',
              required: ['Names'],
              members: {
                Names: {
                  shape: 'S6p'
                }
              }
            },
            output: {
              resultWrapper: 'StartMetricStreamsResult',
              type: 'structure',
              members: {}
            }
          },
          StopMetricStreams: {
            input: {
              type: 'structure',
              required: ['Names'],
              members: {
                Names: {
                  shape: 'S6p'
                }
              }
            },
            output: {
              resultWrapper: 'StopMetricStreamsResult',
              type: 'structure',
              members: {}
            }
          },
          TagResource: {
            input: {
              type: 'structure',
              required: ['ResourceARN', 'Tags'],
              members: {
                ResourceARN: {},
                Tags: {
                  shape: 'S5u'
                }
              }
            },
            output: {
              resultWrapper: 'TagResourceResult',
              type: 'structure',
              members: {}
            }
          },
          UntagResource: {
            input: {
              type: 'structure',
              required: ['ResourceARN', 'TagKeys'],
              members: {
                ResourceARN: {},
                TagKeys: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              resultWrapper: 'UntagResourceResult',
              type: 'structure',
              members: {}
            }
          }
        },
        shapes: {
          S2: {
            type: 'list',
            member: {}
          },
          S7: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Name', 'Value'],
              members: {
                Name: {},
                Value: {}
              },
              xmlOrder: ['Name', 'Value']
            }
          },
          Sc: {
            type: 'structure',
            members: {
              AccountId: {},
              Namespace: {},
              MetricName: {},
              Dimensions: {
                shape: 'S7'
              },
              Stat: {}
            }
          },
          Se: {
            type: 'structure',
            members: {
              MetricDataQueries: {
                shape: 'Sf'
              }
            }
          },
          Sf: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {},
                MetricStat: {
                  type: 'structure',
                  required: ['Metric', 'Period', 'Stat'],
                  members: {
                    Metric: {
                      shape: 'Sj'
                    },
                    Period: {
                      type: 'integer'
                    },
                    Stat: {},
                    Unit: {}
                  }
                },
                Expression: {},
                Label: {},
                ReturnData: {
                  type: 'boolean'
                },
                Period: {
                  type: 'integer'
                },
                AccountId: {}
              }
            }
          },
          Sj: {
            type: 'structure',
            members: {
              Namespace: {},
              MetricName: {},
              Dimensions: {
                shape: 'S7'
              }
            },
            xmlOrder: ['Namespace', 'MetricName', 'Dimensions']
          },
          Sw: {
            type: 'list',
            member: {}
          },
          Sz: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                FailureResource: {},
                ExceptionType: {},
                FailureCode: {},
                FailureDescription: {}
              }
            }
          },
          S19: {
            type: 'list',
            member: {}
          },
          S1t: {
            type: 'list',
            member: {}
          },
          S23: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                AlarmName: {},
                AlarmArn: {},
                AlarmDescription: {},
                AlarmConfigurationUpdatedTimestamp: {
                  type: 'timestamp'
                },
                ActionsEnabled: {
                  type: 'boolean'
                },
                OKActions: {
                  shape: 'S1t'
                },
                AlarmActions: {
                  shape: 'S1t'
                },
                InsufficientDataActions: {
                  shape: 'S1t'
                },
                StateValue: {},
                StateReason: {},
                StateReasonData: {},
                StateUpdatedTimestamp: {
                  type: 'timestamp'
                },
                MetricName: {},
                Namespace: {},
                Statistic: {},
                ExtendedStatistic: {},
                Dimensions: {
                  shape: 'S7'
                },
                Period: {
                  type: 'integer'
                },
                Unit: {},
                EvaluationPeriods: {
                  type: 'integer'
                },
                DatapointsToAlarm: {
                  type: 'integer'
                },
                Threshold: {
                  type: 'double'
                },
                ComparisonOperator: {},
                TreatMissingData: {},
                EvaluateLowSampleCountPercentile: {},
                Metrics: {
                  shape: 'Sf'
                },
                ThresholdMetricId: {},
                EvaluationState: {},
                StateTransitionedTimestamp: {
                  type: 'timestamp'
                }
              },
              xmlOrder: ['AlarmName', 'AlarmArn', 'AlarmDescription', 'AlarmConfigurationUpdatedTimestamp', 'ActionsEnabled', 'OKActions', 'AlarmActions', 'InsufficientDataActions', 'StateValue', 'StateReason', 'StateReasonData', 'StateUpdatedTimestamp', 'MetricName', 'Namespace', 'Statistic', 'Dimensions', 'Period', 'Unit', 'EvaluationPeriods', 'Threshold', 'ComparisonOperator', 'ExtendedStatistic', 'TreatMissingData', 'EvaluateLowSampleCountPercentile', 'DatapointsToAlarm', 'Metrics', 'ThresholdMetricId', 'EvaluationState', 'StateTransitionedTimestamp']
            }
          },
          S2n: {
            type: 'structure',
            members: {
              ExcludedTimeRanges: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['StartTime', 'EndTime'],
                  members: {
                    StartTime: {
                      type: 'timestamp'
                    },
                    EndTime: {
                      type: 'timestamp'
                    }
                  },
                  xmlOrder: ['StartTime', 'EndTime']
                }
              },
              MetricTimezone: {}
            }
          },
          S2s: {
            type: 'structure',
            members: {
              PeriodicSpikes: {
                type: 'boolean'
              }
            }
          },
          S47: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Code: {},
                Value: {}
              }
            }
          },
          S4l: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Namespace: {},
                MetricNames: {
                  type: 'list',
                  member: {}
                }
              }
            }
          },
          S4q: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['IncludeMetrics', 'AdditionalStatistics'],
              members: {
                IncludeMetrics: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Namespace', 'MetricName'],
                    members: {
                      Namespace: {},
                      MetricName: {}
                    }
                  }
                },
                AdditionalStatistics: {
                  type: 'list',
                  member: {}
                }
              }
            }
          },
          S5u: {
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
          S6p: {
            type: 'list',
            member: {}
          }
        }
      });
    }
  };
});
//# sourceMappingURL=87f23b21e314d0fd2be2f3205e7d4c77f3a2ca14.js.map