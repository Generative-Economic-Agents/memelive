System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2020-12-01',
          endpointPrefix: 'devops-guru',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceFullName: 'Amazon DevOps Guru',
          serviceId: 'DevOps Guru',
          signatureVersion: 'v4',
          signingName: 'devops-guru',
          uid: 'devops-guru-2020-12-01'
        },
        operations: {
          AddNotificationChannel: {
            http: {
              method: 'PUT',
              requestUri: '/channels',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['Config'],
              members: {
                Config: {
                  shape: 'S2'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {}
              }
            }
          },
          DeleteInsight: {
            http: {
              method: 'DELETE',
              requestUri: '/insights/{Id}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DescribeAccountHealth: {
            http: {
              method: 'GET',
              requestUri: '/accounts/health',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              required: ['OpenReactiveInsights', 'OpenProactiveInsights', 'MetricsAnalyzed', 'ResourceHours'],
              members: {
                OpenReactiveInsights: {
                  type: 'integer'
                },
                OpenProactiveInsights: {
                  type: 'integer'
                },
                MetricsAnalyzed: {
                  type: 'integer'
                },
                ResourceHours: {
                  type: 'long'
                },
                AnalyzedResourceCount: {
                  type: 'long'
                }
              }
            }
          },
          DescribeAccountOverview: {
            http: {
              requestUri: '/accounts/overview',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['FromTime'],
              members: {
                FromTime: {
                  type: 'timestamp'
                },
                ToTime: {
                  type: 'timestamp'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['ReactiveInsights', 'ProactiveInsights', 'MeanTimeToRecoverInMilliseconds'],
              members: {
                ReactiveInsights: {
                  type: 'integer'
                },
                ProactiveInsights: {
                  type: 'integer'
                },
                MeanTimeToRecoverInMilliseconds: {
                  type: 'long'
                }
              }
            }
          },
          DescribeAnomaly: {
            http: {
              method: 'GET',
              requestUri: '/anomalies/{Id}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                },
                AccountId: {
                  location: 'querystring',
                  locationName: 'AccountId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ProactiveAnomaly: {
                  type: 'structure',
                  members: {
                    Id: {},
                    Severity: {},
                    Status: {},
                    UpdateTime: {
                      type: 'timestamp'
                    },
                    AnomalyTimeRange: {
                      shape: 'Sz'
                    },
                    AnomalyReportedTimeRange: {
                      shape: 'S10'
                    },
                    PredictionTimeRange: {
                      shape: 'S11'
                    },
                    SourceDetails: {
                      shape: 'S12'
                    },
                    AssociatedInsightId: {},
                    ResourceCollection: {
                      shape: 'S27'
                    },
                    Limit: {
                      type: 'double'
                    },
                    SourceMetadata: {
                      shape: 'S2h'
                    },
                    AnomalyResources: {
                      shape: 'S2l'
                    },
                    Description: {}
                  }
                },
                ReactiveAnomaly: {
                  type: 'structure',
                  members: {
                    Id: {},
                    Severity: {},
                    Status: {},
                    AnomalyTimeRange: {
                      shape: 'Sz'
                    },
                    AnomalyReportedTimeRange: {
                      shape: 'S10'
                    },
                    SourceDetails: {
                      shape: 'S12'
                    },
                    AssociatedInsightId: {},
                    ResourceCollection: {
                      shape: 'S27'
                    },
                    Type: {},
                    Name: {},
                    Description: {},
                    CausalAnomalyId: {},
                    AnomalyResources: {
                      shape: 'S2l'
                    }
                  }
                }
              }
            }
          },
          DescribeEventSourcesConfig: {
            http: {
              requestUri: '/event-sources',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {
                EventSources: {
                  shape: 'S2t'
                }
              }
            }
          },
          DescribeFeedback: {
            http: {
              requestUri: '/feedback',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                InsightId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                InsightFeedback: {
                  shape: 'S2y'
                }
              }
            }
          },
          DescribeInsight: {
            http: {
              method: 'GET',
              requestUri: '/insights/{Id}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                },
                AccountId: {
                  location: 'querystring',
                  locationName: 'AccountId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ProactiveInsight: {
                  type: 'structure',
                  members: {
                    Id: {},
                    Name: {},
                    Severity: {},
                    Status: {},
                    InsightTimeRange: {
                      shape: 'S35'
                    },
                    PredictionTimeRange: {
                      shape: 'S11'
                    },
                    ResourceCollection: {
                      shape: 'S27'
                    },
                    SsmOpsItemId: {},
                    Description: {}
                  }
                },
                ReactiveInsight: {
                  type: 'structure',
                  members: {
                    Id: {},
                    Name: {},
                    Severity: {},
                    Status: {},
                    InsightTimeRange: {
                      shape: 'S35'
                    },
                    ResourceCollection: {
                      shape: 'S27'
                    },
                    SsmOpsItemId: {},
                    Description: {}
                  }
                }
              }
            }
          },
          DescribeOrganizationHealth: {
            http: {
              requestUri: '/organization/health',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                AccountIds: {
                  shape: 'S3a'
                },
                OrganizationalUnitIds: {
                  shape: 'S3b'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['OpenReactiveInsights', 'OpenProactiveInsights', 'MetricsAnalyzed', 'ResourceHours'],
              members: {
                OpenReactiveInsights: {
                  type: 'integer'
                },
                OpenProactiveInsights: {
                  type: 'integer'
                },
                MetricsAnalyzed: {
                  type: 'integer'
                },
                ResourceHours: {
                  type: 'long'
                }
              }
            }
          },
          DescribeOrganizationOverview: {
            http: {
              requestUri: '/organization/overview',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['FromTime'],
              members: {
                FromTime: {
                  type: 'timestamp'
                },
                ToTime: {
                  type: 'timestamp'
                },
                AccountIds: {
                  shape: 'S3a'
                },
                OrganizationalUnitIds: {
                  shape: 'S3b'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['ReactiveInsights', 'ProactiveInsights'],
              members: {
                ReactiveInsights: {
                  type: 'integer'
                },
                ProactiveInsights: {
                  type: 'integer'
                }
              }
            }
          },
          DescribeOrganizationResourceCollectionHealth: {
            http: {
              requestUri: '/organization/health/resource-collection',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['OrganizationResourceCollectionType'],
              members: {
                OrganizationResourceCollectionType: {},
                AccountIds: {
                  shape: 'S3a'
                },
                OrganizationalUnitIds: {
                  shape: 'S3b'
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
                CloudFormation: {
                  shape: 'S3l'
                },
                Service: {
                  shape: 'S3o'
                },
                Account: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      AccountId: {},
                      Insight: {
                        type: 'structure',
                        members: {
                          OpenProactiveInsights: {
                            type: 'integer'
                          },
                          OpenReactiveInsights: {
                            type: 'integer'
                          }
                        }
                      }
                    }
                  }
                },
                NextToken: {},
                Tags: {
                  shape: 'S3v'
                }
              }
            }
          },
          DescribeResourceCollectionHealth: {
            http: {
              method: 'GET',
              requestUri: '/accounts/health/resource-collection/{ResourceCollectionType}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ResourceCollectionType'],
              members: {
                ResourceCollectionType: {
                  location: 'uri',
                  locationName: 'ResourceCollectionType'
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
                CloudFormation: {
                  shape: 'S3l'
                },
                Service: {
                  shape: 'S3o'
                },
                NextToken: {},
                Tags: {
                  shape: 'S3v'
                }
              }
            }
          },
          DescribeServiceIntegration: {
            http: {
              method: 'GET',
              requestUri: '/service-integrations',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {
                ServiceIntegration: {
                  type: 'structure',
                  members: {
                    OpsCenter: {
                      type: 'structure',
                      members: {
                        OptInStatus: {}
                      }
                    },
                    LogsAnomalyDetection: {
                      type: 'structure',
                      members: {
                        OptInStatus: {}
                      }
                    },
                    KMSServerSideEncryption: {
                      type: 'structure',
                      members: {
                        KMSKeyId: {},
                        OptInStatus: {},
                        Type: {}
                      }
                    }
                  }
                }
              }
            }
          },
          GetCostEstimation: {
            http: {
              method: 'GET',
              requestUri: '/cost-estimation',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                NextToken: {
                  location: 'querystring',
                  locationName: 'NextToken'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ResourceCollection: {
                  shape: 'S4b'
                },
                Status: {},
                Costs: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Type: {},
                      State: {},
                      Count: {
                        type: 'integer'
                      },
                      UnitCost: {
                        type: 'double'
                      },
                      Cost: {
                        type: 'double'
                      }
                    }
                  }
                },
                TimeRange: {
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
                TotalCost: {
                  type: 'double'
                },
                NextToken: {}
              }
            }
          },
          GetResourceCollection: {
            http: {
              method: 'GET',
              requestUri: '/resource-collections/{ResourceCollectionType}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ResourceCollectionType'],
              members: {
                ResourceCollectionType: {
                  location: 'uri',
                  locationName: 'ResourceCollectionType'
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
                ResourceCollection: {
                  type: 'structure',
                  members: {
                    CloudFormation: {
                      type: 'structure',
                      members: {
                        StackNames: {
                          shape: 'S29'
                        }
                      }
                    },
                    Tags: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        required: ['AppBoundaryKey', 'TagValues'],
                        members: {
                          AppBoundaryKey: {},
                          TagValues: {
                            shape: 'S2e'
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
          ListAnomaliesForInsight: {
            http: {
              requestUri: '/anomalies/insight/{InsightId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['InsightId'],
              members: {
                InsightId: {
                  location: 'uri',
                  locationName: 'InsightId'
                },
                StartTimeRange: {
                  shape: 'S4v'
                },
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {},
                AccountId: {},
                Filters: {
                  type: 'structure',
                  members: {
                    ServiceCollection: {
                      shape: 'S4y'
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ProactiveAnomalies: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Id: {},
                      Severity: {},
                      Status: {},
                      UpdateTime: {
                        type: 'timestamp'
                      },
                      AnomalyTimeRange: {
                        shape: 'Sz'
                      },
                      AnomalyReportedTimeRange: {
                        shape: 'S10'
                      },
                      PredictionTimeRange: {
                        shape: 'S11'
                      },
                      SourceDetails: {
                        shape: 'S12'
                      },
                      AssociatedInsightId: {},
                      ResourceCollection: {
                        shape: 'S27'
                      },
                      Limit: {
                        type: 'double'
                      },
                      SourceMetadata: {
                        shape: 'S2h'
                      },
                      AnomalyResources: {
                        shape: 'S2l'
                      },
                      Description: {}
                    }
                  }
                },
                ReactiveAnomalies: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Id: {},
                      Severity: {},
                      Status: {},
                      AnomalyTimeRange: {
                        shape: 'Sz'
                      },
                      AnomalyReportedTimeRange: {
                        shape: 'S10'
                      },
                      SourceDetails: {
                        shape: 'S12'
                      },
                      AssociatedInsightId: {},
                      ResourceCollection: {
                        shape: 'S27'
                      },
                      Type: {},
                      Name: {},
                      Description: {},
                      CausalAnomalyId: {},
                      AnomalyResources: {
                        shape: 'S2l'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListAnomalousLogGroups: {
            http: {
              requestUri: '/list-log-anomalies',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['InsightId'],
              members: {
                InsightId: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              required: ['InsightId', 'AnomalousLogGroups'],
              members: {
                InsightId: {},
                AnomalousLogGroups: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      LogGroupName: {},
                      ImpactStartTime: {
                        type: 'timestamp'
                      },
                      ImpactEndTime: {
                        type: 'timestamp'
                      },
                      NumberOfLogLinesScanned: {
                        type: 'integer'
                      },
                      LogAnomalyShowcases: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            LogAnomalyClasses: {
                              type: 'list',
                              member: {
                                type: 'structure',
                                members: {
                                  LogStreamName: {},
                                  LogAnomalyType: {},
                                  LogAnomalyToken: {},
                                  LogEventId: {},
                                  Explanation: {},
                                  NumberOfLogLinesOccurrences: {
                                    type: 'integer'
                                  },
                                  LogEventTimestamp: {
                                    type: 'timestamp'
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
                NextToken: {}
              }
            }
          },
          ListEvents: {
            http: {
              requestUri: '/events',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['Filters'],
              members: {
                Filters: {
                  type: 'structure',
                  members: {
                    InsightId: {},
                    EventTimeRange: {
                      type: 'structure',
                      required: ['FromTime', 'ToTime'],
                      members: {
                        FromTime: {
                          type: 'timestamp'
                        },
                        ToTime: {
                          type: 'timestamp'
                        }
                      }
                    },
                    EventClass: {},
                    EventSource: {},
                    DataSource: {},
                    ResourceCollection: {
                      shape: 'S27'
                    }
                  }
                },
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {},
                AccountId: {}
              }
            },
            output: {
              type: 'structure',
              required: ['Events'],
              members: {
                Events: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ResourceCollection: {
                        shape: 'S27'
                      },
                      Id: {},
                      Time: {
                        type: 'timestamp'
                      },
                      EventSource: {},
                      Name: {},
                      DataSource: {},
                      EventClass: {},
                      Resources: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            Type: {},
                            Name: {},
                            Arn: {}
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
          ListInsights: {
            http: {
              requestUri: '/insights',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['StatusFilter'],
              members: {
                StatusFilter: {
                  shape: 'S64'
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
                ProactiveInsights: {
                  shape: 'S6c'
                },
                ReactiveInsights: {
                  shape: 'S6g'
                },
                NextToken: {}
              }
            }
          },
          ListMonitoredResources: {
            http: {
              requestUri: '/monitoredResources',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                Filters: {
                  type: 'structure',
                  required: ['ResourcePermission', 'ResourceTypeFilters'],
                  members: {
                    ResourcePermission: {},
                    ResourceTypeFilters: {
                      type: 'list',
                      member: {}
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
              required: ['MonitoredResourceIdentifiers'],
              members: {
                MonitoredResourceIdentifiers: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      MonitoredResourceName: {},
                      Type: {},
                      ResourcePermission: {},
                      LastUpdated: {
                        type: 'timestamp'
                      },
                      ResourceCollection: {
                        shape: 'S27'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListNotificationChannels: {
            http: {
              requestUri: '/channels',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Channels: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Id: {},
                      Config: {
                        shape: 'S2'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListOrganizationInsights: {
            http: {
              requestUri: '/organization/insights',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['StatusFilter'],
              members: {
                StatusFilter: {
                  shape: 'S64'
                },
                MaxResults: {
                  type: 'integer'
                },
                AccountIds: {
                  type: 'list',
                  member: {}
                },
                OrganizationalUnitIds: {
                  type: 'list',
                  member: {}
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ProactiveInsights: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Id: {},
                      AccountId: {},
                      OrganizationalUnitId: {},
                      Name: {},
                      Severity: {},
                      Status: {},
                      InsightTimeRange: {
                        shape: 'S35'
                      },
                      PredictionTimeRange: {
                        shape: 'S11'
                      },
                      ResourceCollection: {
                        shape: 'S27'
                      },
                      ServiceCollection: {
                        shape: 'S4y'
                      }
                    }
                  }
                },
                ReactiveInsights: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Id: {},
                      AccountId: {},
                      OrganizationalUnitId: {},
                      Name: {},
                      Severity: {},
                      Status: {},
                      InsightTimeRange: {
                        shape: 'S35'
                      },
                      ResourceCollection: {
                        shape: 'S27'
                      },
                      ServiceCollection: {
                        shape: 'S4y'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListRecommendations: {
            http: {
              requestUri: '/recommendations',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['InsightId'],
              members: {
                InsightId: {},
                NextToken: {},
                Locale: {},
                AccountId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Recommendations: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Description: {},
                      Link: {},
                      Name: {},
                      Reason: {},
                      RelatedEvents: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            Name: {},
                            Resources: {
                              type: 'list',
                              member: {
                                type: 'structure',
                                members: {
                                  Name: {},
                                  Type: {}
                                }
                              }
                            }
                          }
                        }
                      },
                      RelatedAnomalies: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            Resources: {
                              type: 'list',
                              member: {
                                type: 'structure',
                                members: {
                                  Name: {},
                                  Type: {}
                                }
                              }
                            },
                            SourceDetails: {
                              type: 'list',
                              member: {
                                type: 'structure',
                                members: {
                                  CloudWatchMetrics: {
                                    type: 'list',
                                    member: {
                                      type: 'structure',
                                      members: {
                                        MetricName: {},
                                        Namespace: {}
                                      }
                                    }
                                  }
                                }
                              }
                            },
                            AnomalyId: {}
                          }
                        }
                      },
                      Category: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          PutFeedback: {
            http: {
              method: 'PUT',
              requestUri: '/feedback',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                InsightFeedback: {
                  shape: 'S2y'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          RemoveNotificationChannel: {
            http: {
              method: 'DELETE',
              requestUri: '/channels/{Id}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          SearchInsights: {
            http: {
              requestUri: '/insights/search',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['StartTimeRange', 'Type'],
              members: {
                StartTimeRange: {
                  shape: 'S4v'
                },
                Filters: {
                  type: 'structure',
                  members: {
                    Severities: {
                      shape: 'S6'
                    },
                    Statuses: {
                      shape: 'S83'
                    },
                    ResourceCollection: {
                      shape: 'S27'
                    },
                    ServiceCollection: {
                      shape: 'S4y'
                    }
                  }
                },
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {},
                Type: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ProactiveInsights: {
                  shape: 'S6c'
                },
                ReactiveInsights: {
                  shape: 'S6g'
                },
                NextToken: {}
              }
            }
          },
          SearchOrganizationInsights: {
            http: {
              requestUri: '/organization/insights/search',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['AccountIds', 'StartTimeRange', 'Type'],
              members: {
                AccountIds: {
                  type: 'list',
                  member: {}
                },
                StartTimeRange: {
                  shape: 'S4v'
                },
                Filters: {
                  type: 'structure',
                  members: {
                    Severities: {
                      shape: 'S6'
                    },
                    Statuses: {
                      shape: 'S83'
                    },
                    ResourceCollection: {
                      shape: 'S27'
                    },
                    ServiceCollection: {
                      shape: 'S4y'
                    }
                  }
                },
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {},
                Type: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ProactiveInsights: {
                  shape: 'S6c'
                },
                ReactiveInsights: {
                  shape: 'S6g'
                },
                NextToken: {}
              }
            }
          },
          StartCostEstimation: {
            http: {
              method: 'PUT',
              requestUri: '/cost-estimation',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ResourceCollection'],
              members: {
                ResourceCollection: {
                  shape: 'S4b'
                },
                ClientToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateEventSourcesConfig: {
            http: {
              method: 'PUT',
              requestUri: '/event-sources',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                EventSources: {
                  shape: 'S2t'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateResourceCollection: {
            http: {
              method: 'PUT',
              requestUri: '/resource-collections',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['Action', 'ResourceCollection'],
              members: {
                Action: {},
                ResourceCollection: {
                  type: 'structure',
                  members: {
                    CloudFormation: {
                      type: 'structure',
                      members: {
                        StackNames: {
                          type: 'list',
                          member: {}
                        }
                      }
                    },
                    Tags: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        required: ['AppBoundaryKey', 'TagValues'],
                        members: {
                          AppBoundaryKey: {},
                          TagValues: {
                            type: 'list',
                            member: {}
                          }
                        }
                      }
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
          UpdateServiceIntegration: {
            http: {
              method: 'PUT',
              requestUri: '/service-integrations',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ServiceIntegration'],
              members: {
                ServiceIntegration: {
                  type: 'structure',
                  members: {
                    OpsCenter: {
                      type: 'structure',
                      members: {
                        OptInStatus: {}
                      }
                    },
                    LogsAnomalyDetection: {
                      type: 'structure',
                      members: {
                        OptInStatus: {}
                      }
                    },
                    KMSServerSideEncryption: {
                      type: 'structure',
                      members: {
                        KMSKeyId: {},
                        OptInStatus: {},
                        Type: {}
                      }
                    }
                  }
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
          S2: {
            type: 'structure',
            required: ['Sns'],
            members: {
              Sns: {
                type: 'structure',
                members: {
                  TopicArn: {}
                }
              },
              Filters: {
                type: 'structure',
                members: {
                  Severities: {
                    shape: 'S6'
                  },
                  MessageTypes: {
                    type: 'list',
                    member: {}
                  }
                }
              }
            }
          },
          S6: {
            type: 'list',
            member: {}
          },
          Sz: {
            type: 'structure',
            required: ['StartTime'],
            members: {
              StartTime: {
                type: 'timestamp'
              },
              EndTime: {
                type: 'timestamp'
              }
            }
          },
          S10: {
            type: 'structure',
            required: ['OpenTime'],
            members: {
              OpenTime: {
                type: 'timestamp'
              },
              CloseTime: {
                type: 'timestamp'
              }
            }
          },
          S11: {
            type: 'structure',
            required: ['StartTime'],
            members: {
              StartTime: {
                type: 'timestamp'
              },
              EndTime: {
                type: 'timestamp'
              }
            }
          },
          S12: {
            type: 'structure',
            members: {
              CloudWatchMetrics: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    MetricName: {},
                    Namespace: {},
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
                    Stat: {},
                    Unit: {},
                    Period: {
                      type: 'integer'
                    },
                    MetricDataSummary: {
                      type: 'structure',
                      members: {
                        TimestampMetricValuePairList: {
                          type: 'list',
                          member: {
                            type: 'structure',
                            members: {
                              Timestamp: {
                                type: 'timestamp'
                              },
                              MetricValue: {
                                type: 'double'
                              }
                            }
                          }
                        },
                        StatusCode: {}
                      }
                    }
                  }
                }
              },
              PerformanceInsightsMetrics: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    MetricDisplayName: {},
                    Unit: {},
                    MetricQuery: {
                      shape: 'S1n'
                    },
                    ReferenceData: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          Name: {},
                          ComparisonValues: {
                            type: 'structure',
                            members: {
                              ReferenceScalar: {
                                type: 'structure',
                                members: {
                                  Value: {
                                    type: 'double'
                                  }
                                }
                              },
                              ReferenceMetric: {
                                type: 'structure',
                                members: {
                                  MetricQuery: {
                                    shape: 'S1n'
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    },
                    StatsAtAnomaly: {
                      shape: 'S24'
                    },
                    StatsAtBaseline: {
                      shape: 'S24'
                    }
                  }
                }
              }
            }
          },
          S1n: {
            type: 'structure',
            members: {
              Metric: {},
              GroupBy: {
                type: 'structure',
                members: {
                  Group: {},
                  Dimensions: {
                    type: 'list',
                    member: {}
                  },
                  Limit: {
                    type: 'integer'
                  }
                }
              },
              Filter: {
                type: 'map',
                key: {},
                value: {}
              }
            }
          },
          S24: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Type: {},
                Value: {
                  type: 'double'
                }
              }
            }
          },
          S27: {
            type: 'structure',
            members: {
              CloudFormation: {
                type: 'structure',
                members: {
                  StackNames: {
                    shape: 'S29'
                  }
                }
              },
              Tags: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['AppBoundaryKey', 'TagValues'],
                  members: {
                    AppBoundaryKey: {},
                    TagValues: {
                      shape: 'S2e'
                    }
                  }
                }
              }
            }
          },
          S29: {
            type: 'list',
            member: {}
          },
          S2e: {
            type: 'list',
            member: {}
          },
          S2h: {
            type: 'structure',
            members: {
              Source: {},
              SourceResourceName: {},
              SourceResourceType: {}
            }
          },
          S2l: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Name: {},
                Type: {}
              }
            }
          },
          S2t: {
            type: 'structure',
            members: {
              AmazonCodeGuruProfiler: {
                type: 'structure',
                members: {
                  Status: {}
                }
              }
            }
          },
          S2y: {
            type: 'structure',
            members: {
              Id: {},
              Feedback: {}
            }
          },
          S35: {
            type: 'structure',
            required: ['StartTime'],
            members: {
              StartTime: {
                type: 'timestamp'
              },
              EndTime: {
                type: 'timestamp'
              }
            }
          },
          S3a: {
            type: 'list',
            member: {}
          },
          S3b: {
            type: 'list',
            member: {}
          },
          S3l: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                StackName: {},
                Insight: {
                  shape: 'S3n'
                },
                AnalyzedResourceCount: {
                  type: 'long'
                }
              }
            }
          },
          S3n: {
            type: 'structure',
            members: {
              OpenProactiveInsights: {
                type: 'integer'
              },
              OpenReactiveInsights: {
                type: 'integer'
              },
              MeanTimeToRecoverInMilliseconds: {
                type: 'long'
              }
            }
          },
          S3o: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                ServiceName: {},
                Insight: {
                  type: 'structure',
                  members: {
                    OpenProactiveInsights: {
                      type: 'integer'
                    },
                    OpenReactiveInsights: {
                      type: 'integer'
                    }
                  }
                },
                AnalyzedResourceCount: {
                  type: 'long'
                }
              }
            }
          },
          S3v: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                AppBoundaryKey: {},
                TagValue: {},
                Insight: {
                  shape: 'S3n'
                },
                AnalyzedResourceCount: {
                  type: 'long'
                }
              }
            }
          },
          S4b: {
            type: 'structure',
            members: {
              CloudFormation: {
                type: 'structure',
                members: {
                  StackNames: {
                    type: 'list',
                    member: {}
                  }
                }
              },
              Tags: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['AppBoundaryKey', 'TagValues'],
                  members: {
                    AppBoundaryKey: {},
                    TagValues: {
                      type: 'list',
                      member: {}
                    }
                  }
                }
              }
            }
          },
          S4v: {
            type: 'structure',
            members: {
              FromTime: {
                type: 'timestamp'
              },
              ToTime: {
                type: 'timestamp'
              }
            }
          },
          S4y: {
            type: 'structure',
            members: {
              ServiceNames: {
                type: 'list',
                member: {}
              }
            }
          },
          S64: {
            type: 'structure',
            members: {
              Ongoing: {
                type: 'structure',
                required: ['Type'],
                members: {
                  Type: {}
                }
              },
              Closed: {
                type: 'structure',
                required: ['Type', 'EndTimeRange'],
                members: {
                  Type: {},
                  EndTimeRange: {
                    type: 'structure',
                    members: {
                      FromTime: {
                        type: 'timestamp'
                      },
                      ToTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                }
              },
              Any: {
                type: 'structure',
                required: ['Type', 'StartTimeRange'],
                members: {
                  Type: {},
                  StartTimeRange: {
                    shape: 'S4v'
                  }
                }
              }
            }
          },
          S6c: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Id: {},
                Name: {},
                Severity: {},
                Status: {},
                InsightTimeRange: {
                  shape: 'S35'
                },
                PredictionTimeRange: {
                  shape: 'S11'
                },
                ResourceCollection: {
                  shape: 'S27'
                },
                ServiceCollection: {
                  shape: 'S4y'
                },
                AssociatedResourceArns: {
                  shape: 'S6e'
                }
              }
            }
          },
          S6e: {
            type: 'list',
            member: {}
          },
          S6g: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Id: {},
                Name: {},
                Severity: {},
                Status: {},
                InsightTimeRange: {
                  shape: 'S35'
                },
                ResourceCollection: {
                  shape: 'S27'
                },
                ServiceCollection: {
                  shape: 'S4y'
                },
                AssociatedResourceArns: {
                  shape: 'S6e'
                }
              }
            }
          },
          S83: {
            type: 'list',
            member: {}
          }
        }
      });
    }
  };
});
//# sourceMappingURL=0be3f6b98bb6c4f65810ed62a9b8902f8e7a8840.js.map