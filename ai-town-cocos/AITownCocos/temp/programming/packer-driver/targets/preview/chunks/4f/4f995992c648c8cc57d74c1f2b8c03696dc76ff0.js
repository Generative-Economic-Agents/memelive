System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2018-11-25',
          endpointPrefix: 'applicationinsights',
          jsonVersion: '1.1',
          protocol: 'json',
          serviceAbbreviation: 'Application Insights',
          serviceFullName: 'Amazon CloudWatch Application Insights',
          serviceId: 'Application Insights',
          signatureVersion: 'v4',
          signingName: 'applicationinsights',
          targetPrefix: 'EC2WindowsBarleyService',
          uid: 'application-insights-2018-11-25'
        },
        operations: {
          AddWorkload: {
            input: {
              type: 'structure',
              required: ['ResourceGroupName', 'ComponentName', 'WorkloadConfiguration'],
              members: {
                ResourceGroupName: {},
                ComponentName: {},
                WorkloadConfiguration: {
                  shape: 'S4'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                WorkloadId: {},
                WorkloadConfiguration: {
                  shape: 'S4'
                }
              }
            }
          },
          CreateApplication: {
            input: {
              type: 'structure',
              members: {
                ResourceGroupName: {},
                OpsCenterEnabled: {
                  type: 'boolean'
                },
                CWEMonitorEnabled: {
                  type: 'boolean'
                },
                OpsItemSNSTopicArn: {},
                Tags: {
                  shape: 'Se'
                },
                AutoConfigEnabled: {
                  type: 'boolean'
                },
                AutoCreate: {
                  type: 'boolean'
                },
                GroupingType: {},
                AttachMissingPermission: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ApplicationInfo: {
                  shape: 'Sn'
                }
              }
            }
          },
          CreateComponent: {
            input: {
              type: 'structure',
              required: ['ResourceGroupName', 'ComponentName', 'ResourceList'],
              members: {
                ResourceGroupName: {},
                ComponentName: {},
                ResourceList: {
                  shape: 'Su'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          CreateLogPattern: {
            input: {
              type: 'structure',
              required: ['ResourceGroupName', 'PatternSetName', 'PatternName', 'Pattern', 'Rank'],
              members: {
                ResourceGroupName: {},
                PatternSetName: {},
                PatternName: {},
                Pattern: {},
                Rank: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                LogPattern: {
                  shape: 'S13'
                },
                ResourceGroupName: {}
              }
            }
          },
          DeleteApplication: {
            input: {
              type: 'structure',
              required: ['ResourceGroupName'],
              members: {
                ResourceGroupName: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteComponent: {
            input: {
              type: 'structure',
              required: ['ResourceGroupName', 'ComponentName'],
              members: {
                ResourceGroupName: {},
                ComponentName: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteLogPattern: {
            input: {
              type: 'structure',
              required: ['ResourceGroupName', 'PatternSetName', 'PatternName'],
              members: {
                ResourceGroupName: {},
                PatternSetName: {},
                PatternName: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DescribeApplication: {
            input: {
              type: 'structure',
              required: ['ResourceGroupName'],
              members: {
                ResourceGroupName: {},
                AccountId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ApplicationInfo: {
                  shape: 'Sn'
                }
              }
            }
          },
          DescribeComponent: {
            input: {
              type: 'structure',
              required: ['ResourceGroupName', 'ComponentName'],
              members: {
                ResourceGroupName: {},
                ComponentName: {},
                AccountId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ApplicationComponent: {
                  shape: 'S1e'
                },
                ResourceList: {
                  shape: 'Su'
                }
              }
            }
          },
          DescribeComponentConfiguration: {
            input: {
              type: 'structure',
              required: ['ResourceGroupName', 'ComponentName'],
              members: {
                ResourceGroupName: {},
                ComponentName: {},
                AccountId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Monitor: {
                  type: 'boolean'
                },
                Tier: {},
                ComponentConfiguration: {}
              }
            }
          },
          DescribeComponentConfigurationRecommendation: {
            input: {
              type: 'structure',
              required: ['ResourceGroupName', 'ComponentName', 'Tier'],
              members: {
                ResourceGroupName: {},
                ComponentName: {},
                Tier: {},
                WorkloadName: {},
                RecommendationType: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ComponentConfiguration: {}
              }
            }
          },
          DescribeLogPattern: {
            input: {
              type: 'structure',
              required: ['ResourceGroupName', 'PatternSetName', 'PatternName'],
              members: {
                ResourceGroupName: {},
                PatternSetName: {},
                PatternName: {},
                AccountId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ResourceGroupName: {},
                AccountId: {},
                LogPattern: {
                  shape: 'S13'
                }
              }
            }
          },
          DescribeObservation: {
            input: {
              type: 'structure',
              required: ['ObservationId'],
              members: {
                ObservationId: {},
                AccountId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Observation: {
                  shape: 'S1w'
                }
              }
            }
          },
          DescribeProblem: {
            input: {
              type: 'structure',
              required: ['ProblemId'],
              members: {
                ProblemId: {},
                AccountId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Problem: {
                  shape: 'S38'
                }
              }
            }
          },
          DescribeProblemObservations: {
            input: {
              type: 'structure',
              required: ['ProblemId'],
              members: {
                ProblemId: {},
                AccountId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                RelatedObservations: {
                  type: 'structure',
                  members: {
                    ObservationList: {
                      type: 'list',
                      member: {
                        shape: 'S1w'
                      }
                    }
                  }
                }
              }
            }
          },
          DescribeWorkload: {
            input: {
              type: 'structure',
              required: ['ResourceGroupName', 'ComponentName', 'WorkloadId'],
              members: {
                ResourceGroupName: {},
                ComponentName: {},
                WorkloadId: {},
                AccountId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                WorkloadId: {},
                WorkloadRemarks: {},
                WorkloadConfiguration: {
                  shape: 'S4'
                }
              }
            }
          },
          ListApplications: {
            input: {
              type: 'structure',
              members: {
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {},
                AccountId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ApplicationInfoList: {
                  type: 'list',
                  member: {
                    shape: 'Sn'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListComponents: {
            input: {
              type: 'structure',
              required: ['ResourceGroupName'],
              members: {
                ResourceGroupName: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {},
                AccountId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ApplicationComponentList: {
                  type: 'list',
                  member: {
                    shape: 'S1e'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListConfigurationHistory: {
            input: {
              type: 'structure',
              members: {
                ResourceGroupName: {},
                StartTime: {
                  type: 'timestamp'
                },
                EndTime: {
                  type: 'timestamp'
                },
                EventStatus: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {},
                AccountId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                EventList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ResourceGroupName: {},
                      AccountId: {},
                      MonitoredResourceARN: {},
                      EventStatus: {},
                      EventResourceType: {},
                      EventTime: {
                        type: 'timestamp'
                      },
                      EventDetail: {},
                      EventResourceName: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListLogPatternSets: {
            input: {
              type: 'structure',
              required: ['ResourceGroupName'],
              members: {
                ResourceGroupName: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {},
                AccountId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ResourceGroupName: {},
                AccountId: {},
                LogPatternSets: {
                  type: 'list',
                  member: {}
                },
                NextToken: {}
              }
            }
          },
          ListLogPatterns: {
            input: {
              type: 'structure',
              required: ['ResourceGroupName'],
              members: {
                ResourceGroupName: {},
                PatternSetName: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {},
                AccountId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ResourceGroupName: {},
                AccountId: {},
                LogPatterns: {
                  type: 'list',
                  member: {
                    shape: 'S13'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListProblems: {
            input: {
              type: 'structure',
              members: {
                AccountId: {},
                ResourceGroupName: {},
                StartTime: {
                  type: 'timestamp'
                },
                EndTime: {
                  type: 'timestamp'
                },
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {},
                ComponentName: {},
                Visibility: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ProblemList: {
                  type: 'list',
                  member: {
                    shape: 'S38'
                  }
                },
                NextToken: {},
                ResourceGroupName: {},
                AccountId: {}
              }
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
              type: 'structure',
              members: {
                Tags: {
                  shape: 'Se'
                }
              }
            }
          },
          ListWorkloads: {
            input: {
              type: 'structure',
              required: ['ResourceGroupName', 'ComponentName'],
              members: {
                ResourceGroupName: {},
                ComponentName: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {},
                AccountId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                WorkloadList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      WorkloadId: {},
                      ComponentName: {},
                      WorkloadName: {},
                      Tier: {},
                      WorkloadRemarks: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          RemoveWorkload: {
            input: {
              type: 'structure',
              required: ['ResourceGroupName', 'ComponentName', 'WorkloadId'],
              members: {
                ResourceGroupName: {},
                ComponentName: {},
                WorkloadId: {}
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
              required: ['ResourceARN', 'Tags'],
              members: {
                ResourceARN: {},
                Tags: {
                  shape: 'Se'
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
              type: 'structure',
              members: {}
            }
          },
          UpdateApplication: {
            input: {
              type: 'structure',
              required: ['ResourceGroupName'],
              members: {
                ResourceGroupName: {},
                OpsCenterEnabled: {
                  type: 'boolean'
                },
                CWEMonitorEnabled: {
                  type: 'boolean'
                },
                OpsItemSNSTopicArn: {},
                RemoveSNSTopic: {
                  type: 'boolean'
                },
                AutoConfigEnabled: {
                  type: 'boolean'
                },
                AttachMissingPermission: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ApplicationInfo: {
                  shape: 'Sn'
                }
              }
            }
          },
          UpdateComponent: {
            input: {
              type: 'structure',
              required: ['ResourceGroupName', 'ComponentName'],
              members: {
                ResourceGroupName: {},
                ComponentName: {},
                NewComponentName: {},
                ResourceList: {
                  shape: 'Su'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateComponentConfiguration: {
            input: {
              type: 'structure',
              required: ['ResourceGroupName', 'ComponentName'],
              members: {
                ResourceGroupName: {},
                ComponentName: {},
                Monitor: {
                  type: 'boolean'
                },
                Tier: {},
                ComponentConfiguration: {},
                AutoConfigEnabled: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateLogPattern: {
            input: {
              type: 'structure',
              required: ['ResourceGroupName', 'PatternSetName', 'PatternName'],
              members: {
                ResourceGroupName: {},
                PatternSetName: {},
                PatternName: {},
                Pattern: {},
                Rank: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ResourceGroupName: {},
                LogPattern: {
                  shape: 'S13'
                }
              }
            }
          },
          UpdateProblem: {
            input: {
              type: 'structure',
              required: ['ProblemId'],
              members: {
                ProblemId: {},
                UpdateStatus: {},
                Visibility: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateWorkload: {
            input: {
              type: 'structure',
              required: ['ResourceGroupName', 'ComponentName', 'WorkloadConfiguration'],
              members: {
                ResourceGroupName: {},
                ComponentName: {},
                WorkloadId: {},
                WorkloadConfiguration: {
                  shape: 'S4'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                WorkloadId: {},
                WorkloadConfiguration: {
                  shape: 'S4'
                }
              }
            }
          }
        },
        shapes: {
          S4: {
            type: 'structure',
            members: {
              WorkloadName: {},
              Tier: {},
              Configuration: {}
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
          Sn: {
            type: 'structure',
            members: {
              AccountId: {},
              ResourceGroupName: {},
              LifeCycle: {},
              OpsItemSNSTopicArn: {},
              OpsCenterEnabled: {
                type: 'boolean'
              },
              CWEMonitorEnabled: {
                type: 'boolean'
              },
              Remarks: {},
              AutoConfigEnabled: {
                type: 'boolean'
              },
              DiscoveryType: {},
              AttachMissingPermission: {
                type: 'boolean'
              }
            }
          },
          Su: {
            type: 'list',
            member: {}
          },
          S13: {
            type: 'structure',
            members: {
              PatternSetName: {},
              PatternName: {},
              Pattern: {},
              Rank: {
                type: 'integer'
              }
            }
          },
          S1e: {
            type: 'structure',
            members: {
              ComponentName: {},
              ComponentRemarks: {},
              ResourceType: {},
              OsType: {},
              Tier: {},
              Monitor: {
                type: 'boolean'
              },
              DetectedWorkload: {
                type: 'map',
                key: {},
                value: {
                  type: 'map',
                  key: {},
                  value: {}
                }
              }
            }
          },
          S1w: {
            type: 'structure',
            members: {
              Id: {},
              StartTime: {
                type: 'timestamp'
              },
              EndTime: {
                type: 'timestamp'
              },
              SourceType: {},
              SourceARN: {},
              LogGroup: {},
              LineTime: {
                type: 'timestamp'
              },
              LogText: {},
              LogFilter: {},
              MetricNamespace: {},
              MetricName: {},
              Unit: {},
              Value: {
                type: 'double'
              },
              CloudWatchEventId: {},
              CloudWatchEventSource: {},
              CloudWatchEventDetailType: {},
              HealthEventArn: {},
              HealthService: {},
              HealthEventTypeCode: {},
              HealthEventTypeCategory: {},
              HealthEventDescription: {},
              CodeDeployDeploymentId: {},
              CodeDeployDeploymentGroup: {},
              CodeDeployState: {},
              CodeDeployApplication: {},
              CodeDeployInstanceGroupId: {},
              Ec2State: {},
              RdsEventCategories: {},
              RdsEventMessage: {},
              S3EventName: {},
              StatesExecutionArn: {},
              StatesArn: {},
              StatesStatus: {},
              StatesInput: {},
              EbsEvent: {},
              EbsResult: {},
              EbsCause: {},
              EbsRequestId: {},
              XRayFaultPercent: {
                type: 'integer'
              },
              XRayThrottlePercent: {
                type: 'integer'
              },
              XRayErrorPercent: {
                type: 'integer'
              },
              XRayRequestCount: {
                type: 'integer'
              },
              XRayRequestAverageLatency: {
                type: 'long'
              },
              XRayNodeName: {},
              XRayNodeType: {}
            }
          },
          S38: {
            type: 'structure',
            members: {
              Id: {},
              Title: {},
              Insights: {},
              Status: {},
              AffectedResource: {},
              StartTime: {
                type: 'timestamp'
              },
              EndTime: {
                type: 'timestamp'
              },
              SeverityLevel: {},
              AccountId: {},
              ResourceGroupName: {},
              Feedback: {
                type: 'map',
                key: {},
                value: {}
              },
              RecurringCount: {
                type: 'long'
              },
              LastRecurrenceTime: {
                type: 'timestamp'
              },
              Visibility: {},
              ResolutionMethod: {}
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=4f995992c648c8cc57d74c1f2b8c03696dc76ff0.js.map