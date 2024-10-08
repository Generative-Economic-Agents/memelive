System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2016-04-12',
          endpointPrefix: 'xray',
          protocol: 'rest-json',
          serviceFullName: 'AWS X-Ray',
          serviceId: 'XRay',
          signatureVersion: 'v4',
          uid: 'xray-2016-04-12'
        },
        operations: {
          BatchGetTraces: {
            http: {
              requestUri: '/Traces'
            },
            input: {
              type: 'structure',
              required: ['TraceIds'],
              members: {
                TraceIds: {
                  shape: 'S2'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Traces: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Id: {},
                      Duration: {
                        type: 'double'
                      },
                      LimitExceeded: {
                        type: 'boolean'
                      },
                      Segments: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            Id: {},
                            Document: {}
                          }
                        }
                      }
                    }
                  }
                },
                UnprocessedTraceIds: {
                  type: 'list',
                  member: {}
                },
                NextToken: {}
              }
            }
          },
          CreateGroup: {
            http: {
              requestUri: '/CreateGroup'
            },
            input: {
              type: 'structure',
              required: ['GroupName'],
              members: {
                GroupName: {},
                FilterExpression: {},
                InsightsConfiguration: {
                  shape: 'Si'
                },
                Tags: {
                  shape: 'Sj'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Group: {
                  shape: 'So'
                }
              }
            }
          },
          CreateSamplingRule: {
            http: {
              requestUri: '/CreateSamplingRule'
            },
            input: {
              type: 'structure',
              required: ['SamplingRule'],
              members: {
                SamplingRule: {
                  shape: 'Sq'
                },
                Tags: {
                  shape: 'Sj'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                SamplingRuleRecord: {
                  shape: 'S16'
                }
              }
            }
          },
          DeleteGroup: {
            http: {
              requestUri: '/DeleteGroup'
            },
            input: {
              type: 'structure',
              members: {
                GroupName: {},
                GroupARN: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteResourcePolicy: {
            http: {
              requestUri: '/DeleteResourcePolicy'
            },
            input: {
              type: 'structure',
              required: ['PolicyName'],
              members: {
                PolicyName: {},
                PolicyRevisionId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteSamplingRule: {
            http: {
              requestUri: '/DeleteSamplingRule'
            },
            input: {
              type: 'structure',
              members: {
                RuleName: {},
                RuleARN: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                SamplingRuleRecord: {
                  shape: 'S16'
                }
              }
            }
          },
          GetEncryptionConfig: {
            http: {
              requestUri: '/EncryptionConfig'
            },
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {
                EncryptionConfig: {
                  shape: 'S1j'
                }
              }
            }
          },
          GetGroup: {
            http: {
              requestUri: '/GetGroup'
            },
            input: {
              type: 'structure',
              members: {
                GroupName: {},
                GroupARN: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Group: {
                  shape: 'So'
                }
              }
            }
          },
          GetGroups: {
            http: {
              requestUri: '/Groups'
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
                Groups: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      GroupName: {},
                      GroupARN: {},
                      FilterExpression: {},
                      InsightsConfiguration: {
                        shape: 'Si'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          GetInsight: {
            http: {
              requestUri: '/Insight'
            },
            input: {
              type: 'structure',
              required: ['InsightId'],
              members: {
                InsightId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Insight: {
                  type: 'structure',
                  members: {
                    InsightId: {},
                    GroupARN: {},
                    GroupName: {},
                    RootCauseServiceId: {
                      shape: 'S1x'
                    },
                    Categories: {
                      shape: 'S1z'
                    },
                    State: {},
                    StartTime: {
                      type: 'timestamp'
                    },
                    EndTime: {
                      type: 'timestamp'
                    },
                    Summary: {},
                    ClientRequestImpactStatistics: {
                      shape: 'S23'
                    },
                    RootCauseServiceRequestImpactStatistics: {
                      shape: 'S23'
                    },
                    TopAnomalousServices: {
                      shape: 'S25'
                    }
                  }
                }
              }
            }
          },
          GetInsightEvents: {
            http: {
              requestUri: '/InsightEvents'
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
              members: {
                InsightEvents: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Summary: {},
                      EventTime: {
                        type: 'timestamp'
                      },
                      ClientRequestImpactStatistics: {
                        shape: 'S23'
                      },
                      RootCauseServiceRequestImpactStatistics: {
                        shape: 'S23'
                      },
                      TopAnomalousServices: {
                        shape: 'S25'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          GetInsightImpactGraph: {
            http: {
              requestUri: '/InsightImpactGraph'
            },
            input: {
              type: 'structure',
              required: ['InsightId', 'StartTime', 'EndTime'],
              members: {
                InsightId: {},
                StartTime: {
                  type: 'timestamp'
                },
                EndTime: {
                  type: 'timestamp'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                InsightId: {},
                StartTime: {
                  type: 'timestamp'
                },
                EndTime: {
                  type: 'timestamp'
                },
                ServiceGraphStartTime: {
                  type: 'timestamp'
                },
                ServiceGraphEndTime: {
                  type: 'timestamp'
                },
                Services: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ReferenceId: {
                        type: 'integer'
                      },
                      Type: {},
                      Name: {},
                      Names: {
                        shape: 'S1y'
                      },
                      AccountId: {},
                      Edges: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            ReferenceId: {
                              type: 'integer'
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
          GetInsightSummaries: {
            http: {
              requestUri: '/InsightSummaries'
            },
            input: {
              type: 'structure',
              required: ['StartTime', 'EndTime'],
              members: {
                States: {
                  type: 'list',
                  member: {}
                },
                GroupARN: {},
                GroupName: {},
                StartTime: {
                  type: 'timestamp'
                },
                EndTime: {
                  type: 'timestamp'
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
                InsightSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      InsightId: {},
                      GroupARN: {},
                      GroupName: {},
                      RootCauseServiceId: {
                        shape: 'S1x'
                      },
                      Categories: {
                        shape: 'S1z'
                      },
                      State: {},
                      StartTime: {
                        type: 'timestamp'
                      },
                      EndTime: {
                        type: 'timestamp'
                      },
                      Summary: {},
                      ClientRequestImpactStatistics: {
                        shape: 'S23'
                      },
                      RootCauseServiceRequestImpactStatistics: {
                        shape: 'S23'
                      },
                      TopAnomalousServices: {
                        shape: 'S25'
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
          GetSamplingRules: {
            http: {
              requestUri: '/GetSamplingRules'
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
                SamplingRuleRecords: {
                  type: 'list',
                  member: {
                    shape: 'S16'
                  }
                },
                NextToken: {}
              }
            }
          },
          GetSamplingStatisticSummaries: {
            http: {
              requestUri: '/SamplingStatisticSummaries'
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
                SamplingStatisticSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      RuleName: {},
                      Timestamp: {
                        type: 'timestamp'
                      },
                      RequestCount: {
                        type: 'integer'
                      },
                      BorrowCount: {
                        type: 'integer'
                      },
                      SampledCount: {
                        type: 'integer'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          GetSamplingTargets: {
            http: {
              requestUri: '/SamplingTargets'
            },
            input: {
              type: 'structure',
              required: ['SamplingStatisticsDocuments'],
              members: {
                SamplingStatisticsDocuments: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['RuleName', 'ClientID', 'Timestamp', 'RequestCount', 'SampledCount'],
                    members: {
                      RuleName: {},
                      ClientID: {},
                      Timestamp: {
                        type: 'timestamp'
                      },
                      RequestCount: {
                        type: 'integer'
                      },
                      SampledCount: {
                        type: 'integer'
                      },
                      BorrowCount: {
                        type: 'integer'
                      }
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                SamplingTargetDocuments: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      RuleName: {},
                      FixedRate: {
                        type: 'double'
                      },
                      ReservoirQuota: {
                        type: 'integer'
                      },
                      ReservoirQuotaTTL: {
                        type: 'timestamp'
                      },
                      Interval: {
                        type: 'integer'
                      }
                    }
                  }
                },
                LastRuleModification: {
                  type: 'timestamp'
                },
                UnprocessedStatistics: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      RuleName: {},
                      ErrorCode: {},
                      Message: {}
                    }
                  }
                }
              }
            }
          },
          GetServiceGraph: {
            http: {
              requestUri: '/ServiceGraph'
            },
            input: {
              type: 'structure',
              required: ['StartTime', 'EndTime'],
              members: {
                StartTime: {
                  type: 'timestamp'
                },
                EndTime: {
                  type: 'timestamp'
                },
                GroupName: {},
                GroupARN: {},
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                StartTime: {
                  type: 'timestamp'
                },
                EndTime: {
                  type: 'timestamp'
                },
                Services: {
                  shape: 'S3e'
                },
                ContainsOldGroupVersions: {
                  type: 'boolean'
                },
                NextToken: {}
              }
            }
          },
          GetTimeSeriesServiceStatistics: {
            http: {
              requestUri: '/TimeSeriesServiceStatistics'
            },
            input: {
              type: 'structure',
              required: ['StartTime', 'EndTime'],
              members: {
                StartTime: {
                  type: 'timestamp'
                },
                EndTime: {
                  type: 'timestamp'
                },
                GroupName: {},
                GroupARN: {},
                EntitySelectorExpression: {},
                Period: {
                  type: 'integer'
                },
                ForecastStatistics: {
                  type: 'boolean'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                TimeSeriesServiceStatistics: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Timestamp: {
                        type: 'timestamp'
                      },
                      EdgeSummaryStatistics: {
                        shape: 'S3i'
                      },
                      ServiceSummaryStatistics: {
                        shape: 'S3q'
                      },
                      ServiceForecastStatistics: {
                        type: 'structure',
                        members: {
                          FaultCountHigh: {
                            type: 'long'
                          },
                          FaultCountLow: {
                            type: 'long'
                          }
                        }
                      },
                      ResponseTimeHistogram: {
                        shape: 'S3l'
                      }
                    }
                  }
                },
                ContainsOldGroupVersions: {
                  type: 'boolean'
                },
                NextToken: {}
              }
            }
          },
          GetTraceGraph: {
            http: {
              requestUri: '/TraceGraph'
            },
            input: {
              type: 'structure',
              required: ['TraceIds'],
              members: {
                TraceIds: {
                  shape: 'S2'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Services: {
                  shape: 'S3e'
                },
                NextToken: {}
              }
            }
          },
          GetTraceSummaries: {
            http: {
              requestUri: '/TraceSummaries'
            },
            input: {
              type: 'structure',
              required: ['StartTime', 'EndTime'],
              members: {
                StartTime: {
                  type: 'timestamp'
                },
                EndTime: {
                  type: 'timestamp'
                },
                TimeRangeType: {},
                Sampling: {
                  type: 'boolean'
                },
                SamplingStrategy: {
                  type: 'structure',
                  members: {
                    Name: {},
                    Value: {
                      type: 'double'
                    }
                  }
                },
                FilterExpression: {},
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                TraceSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Id: {},
                      StartTime: {
                        type: 'timestamp'
                      },
                      Duration: {
                        type: 'double'
                      },
                      ResponseTime: {
                        type: 'double'
                      },
                      HasFault: {
                        type: 'boolean'
                      },
                      HasError: {
                        type: 'boolean'
                      },
                      HasThrottle: {
                        type: 'boolean'
                      },
                      IsPartial: {
                        type: 'boolean'
                      },
                      Http: {
                        type: 'structure',
                        members: {
                          HttpURL: {},
                          HttpStatus: {
                            type: 'integer'
                          },
                          HttpMethod: {},
                          UserAgent: {},
                          ClientIp: {}
                        }
                      },
                      Annotations: {
                        type: 'map',
                        key: {},
                        value: {
                          type: 'list',
                          member: {
                            type: 'structure',
                            members: {
                              AnnotationValue: {
                                type: 'structure',
                                members: {
                                  NumberValue: {
                                    type: 'double'
                                  },
                                  BooleanValue: {
                                    type: 'boolean'
                                  },
                                  StringValue: {}
                                }
                              },
                              ServiceIds: {
                                shape: 'S4d'
                              }
                            }
                          }
                        }
                      },
                      Users: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            UserName: {},
                            ServiceIds: {
                              shape: 'S4d'
                            }
                          }
                        }
                      },
                      ServiceIds: {
                        shape: 'S4d'
                      },
                      ResourceARNs: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            ARN: {}
                          }
                        }
                      },
                      InstanceIds: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            Id: {}
                          }
                        }
                      },
                      AvailabilityZones: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            Name: {}
                          }
                        }
                      },
                      EntryPoint: {
                        shape: 'S1x'
                      },
                      FaultRootCauses: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            Services: {
                              type: 'list',
                              member: {
                                type: 'structure',
                                members: {
                                  Name: {},
                                  Names: {
                                    shape: 'S1y'
                                  },
                                  Type: {},
                                  AccountId: {},
                                  EntityPath: {
                                    type: 'list',
                                    member: {
                                      type: 'structure',
                                      members: {
                                        Name: {},
                                        Exceptions: {
                                          shape: 'S4s'
                                        },
                                        Remote: {
                                          type: 'boolean'
                                        }
                                      }
                                    }
                                  },
                                  Inferred: {
                                    type: 'boolean'
                                  }
                                }
                              }
                            },
                            ClientImpacting: {
                              type: 'boolean'
                            }
                          }
                        }
                      },
                      ErrorRootCauses: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            Services: {
                              type: 'list',
                              member: {
                                type: 'structure',
                                members: {
                                  Name: {},
                                  Names: {
                                    shape: 'S1y'
                                  },
                                  Type: {},
                                  AccountId: {},
                                  EntityPath: {
                                    type: 'list',
                                    member: {
                                      type: 'structure',
                                      members: {
                                        Name: {},
                                        Exceptions: {
                                          shape: 'S4s'
                                        },
                                        Remote: {
                                          type: 'boolean'
                                        }
                                      }
                                    }
                                  },
                                  Inferred: {
                                    type: 'boolean'
                                  }
                                }
                              }
                            },
                            ClientImpacting: {
                              type: 'boolean'
                            }
                          }
                        }
                      },
                      ResponseTimeRootCauses: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            Services: {
                              type: 'list',
                              member: {
                                type: 'structure',
                                members: {
                                  Name: {},
                                  Names: {
                                    shape: 'S1y'
                                  },
                                  Type: {},
                                  AccountId: {},
                                  EntityPath: {
                                    type: 'list',
                                    member: {
                                      type: 'structure',
                                      members: {
                                        Name: {},
                                        Coverage: {
                                          type: 'double'
                                        },
                                        Remote: {
                                          type: 'boolean'
                                        }
                                      }
                                    }
                                  },
                                  Inferred: {
                                    type: 'boolean'
                                  }
                                }
                              }
                            },
                            ClientImpacting: {
                              type: 'boolean'
                            }
                          }
                        }
                      },
                      Revision: {
                        type: 'integer'
                      },
                      MatchedEventTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                ApproximateTime: {
                  type: 'timestamp'
                },
                TracesProcessedCount: {
                  type: 'long'
                },
                NextToken: {}
              }
            }
          },
          ListResourcePolicies: {
            http: {
              requestUri: '/ListResourcePolicies'
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
                ResourcePolicies: {
                  type: 'list',
                  member: {
                    shape: 'S5a'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListTagsForResource: {
            http: {
              requestUri: '/ListTagsForResource'
            },
            input: {
              type: 'structure',
              required: ['ResourceARN'],
              members: {
                ResourceARN: {},
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Tags: {
                  shape: 'Sj'
                },
                NextToken: {}
              }
            }
          },
          PutEncryptionConfig: {
            http: {
              requestUri: '/PutEncryptionConfig'
            },
            input: {
              type: 'structure',
              required: ['Type'],
              members: {
                KeyId: {},
                Type: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                EncryptionConfig: {
                  shape: 'S1j'
                }
              }
            }
          },
          PutResourcePolicy: {
            http: {
              requestUri: '/PutResourcePolicy'
            },
            input: {
              type: 'structure',
              required: ['PolicyName', 'PolicyDocument'],
              members: {
                PolicyName: {},
                PolicyDocument: {},
                PolicyRevisionId: {},
                BypassPolicyLockoutCheck: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ResourcePolicy: {
                  shape: 'S5a'
                }
              }
            }
          },
          PutTelemetryRecords: {
            http: {
              requestUri: '/TelemetryRecords'
            },
            input: {
              type: 'structure',
              required: ['TelemetryRecords'],
              members: {
                TelemetryRecords: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Timestamp'],
                    members: {
                      Timestamp: {
                        type: 'timestamp'
                      },
                      SegmentsReceivedCount: {
                        type: 'integer'
                      },
                      SegmentsSentCount: {
                        type: 'integer'
                      },
                      SegmentsSpilloverCount: {
                        type: 'integer'
                      },
                      SegmentsRejectedCount: {
                        type: 'integer'
                      },
                      BackendConnectionErrors: {
                        type: 'structure',
                        members: {
                          TimeoutCount: {
                            type: 'integer'
                          },
                          ConnectionRefusedCount: {
                            type: 'integer'
                          },
                          HTTPCode4XXCount: {
                            type: 'integer'
                          },
                          HTTPCode5XXCount: {
                            type: 'integer'
                          },
                          UnknownHostCount: {
                            type: 'integer'
                          },
                          OtherCount: {
                            type: 'integer'
                          }
                        }
                      }
                    }
                  }
                },
                EC2InstanceId: {},
                Hostname: {},
                ResourceARN: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          PutTraceSegments: {
            http: {
              requestUri: '/TraceSegments'
            },
            input: {
              type: 'structure',
              required: ['TraceSegmentDocuments'],
              members: {
                TraceSegmentDocuments: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                UnprocessedTraceSegments: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Id: {},
                      ErrorCode: {},
                      Message: {}
                    }
                  }
                }
              }
            }
          },
          TagResource: {
            http: {
              requestUri: '/TagResource'
            },
            input: {
              type: 'structure',
              required: ['ResourceARN', 'Tags'],
              members: {
                ResourceARN: {},
                Tags: {
                  shape: 'Sj'
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
              requestUri: '/UntagResource'
            },
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
          UpdateGroup: {
            http: {
              requestUri: '/UpdateGroup'
            },
            input: {
              type: 'structure',
              members: {
                GroupName: {},
                GroupARN: {},
                FilterExpression: {},
                InsightsConfiguration: {
                  shape: 'Si'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Group: {
                  shape: 'So'
                }
              }
            }
          },
          UpdateSamplingRule: {
            http: {
              requestUri: '/UpdateSamplingRule'
            },
            input: {
              type: 'structure',
              required: ['SamplingRuleUpdate'],
              members: {
                SamplingRuleUpdate: {
                  type: 'structure',
                  members: {
                    RuleName: {},
                    RuleARN: {},
                    ResourceARN: {},
                    Priority: {
                      type: 'integer'
                    },
                    FixedRate: {
                      type: 'double'
                    },
                    ReservoirSize: {
                      type: 'integer'
                    },
                    Host: {},
                    ServiceName: {},
                    ServiceType: {},
                    HTTPMethod: {},
                    URLPath: {},
                    Attributes: {
                      shape: 'S12'
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                SamplingRuleRecord: {
                  shape: 'S16'
                }
              }
            }
          }
        },
        shapes: {
          S2: {
            type: 'list',
            member: {}
          },
          Si: {
            type: 'structure',
            members: {
              InsightsEnabled: {
                type: 'boolean'
              },
              NotificationsEnabled: {
                type: 'boolean'
              }
            }
          },
          Sj: {
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
          So: {
            type: 'structure',
            members: {
              GroupName: {},
              GroupARN: {},
              FilterExpression: {},
              InsightsConfiguration: {
                shape: 'Si'
              }
            }
          },
          Sq: {
            type: 'structure',
            required: ['ResourceARN', 'Priority', 'FixedRate', 'ReservoirSize', 'ServiceName', 'ServiceType', 'Host', 'HTTPMethod', 'URLPath', 'Version'],
            members: {
              RuleName: {},
              RuleARN: {},
              ResourceARN: {},
              Priority: {
                type: 'integer'
              },
              FixedRate: {
                type: 'double'
              },
              ReservoirSize: {
                type: 'integer'
              },
              ServiceName: {},
              ServiceType: {},
              Host: {},
              HTTPMethod: {},
              URLPath: {},
              Version: {
                type: 'integer'
              },
              Attributes: {
                shape: 'S12'
              }
            }
          },
          S12: {
            type: 'map',
            key: {},
            value: {}
          },
          S16: {
            type: 'structure',
            members: {
              SamplingRule: {
                shape: 'Sq'
              },
              CreatedAt: {
                type: 'timestamp'
              },
              ModifiedAt: {
                type: 'timestamp'
              }
            }
          },
          S1j: {
            type: 'structure',
            members: {
              KeyId: {},
              Status: {},
              Type: {}
            }
          },
          S1x: {
            type: 'structure',
            members: {
              Name: {},
              Names: {
                shape: 'S1y'
              },
              AccountId: {},
              Type: {}
            }
          },
          S1y: {
            type: 'list',
            member: {}
          },
          S1z: {
            type: 'list',
            member: {}
          },
          S23: {
            type: 'structure',
            members: {
              FaultCount: {
                type: 'long'
              },
              OkCount: {
                type: 'long'
              },
              TotalCount: {
                type: 'long'
              }
            }
          },
          S25: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                ServiceId: {
                  shape: 'S1x'
                }
              }
            }
          },
          S3e: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                ReferenceId: {
                  type: 'integer'
                },
                Name: {},
                Names: {
                  shape: 'S1y'
                },
                Root: {
                  type: 'boolean'
                },
                AccountId: {},
                Type: {},
                State: {},
                StartTime: {
                  type: 'timestamp'
                },
                EndTime: {
                  type: 'timestamp'
                },
                Edges: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ReferenceId: {
                        type: 'integer'
                      },
                      StartTime: {
                        type: 'timestamp'
                      },
                      EndTime: {
                        type: 'timestamp'
                      },
                      SummaryStatistics: {
                        shape: 'S3i'
                      },
                      ResponseTimeHistogram: {
                        shape: 'S3l'
                      },
                      Aliases: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            Name: {},
                            Names: {
                              type: 'list',
                              member: {}
                            },
                            Type: {}
                          }
                        }
                      },
                      EdgeType: {},
                      ReceivedEventAgeHistogram: {
                        shape: 'S3l'
                      }
                    }
                  }
                },
                SummaryStatistics: {
                  shape: 'S3q'
                },
                DurationHistogram: {
                  shape: 'S3l'
                },
                ResponseTimeHistogram: {
                  shape: 'S3l'
                }
              }
            }
          },
          S3i: {
            type: 'structure',
            members: {
              OkCount: {
                type: 'long'
              },
              ErrorStatistics: {
                shape: 'S3j'
              },
              FaultStatistics: {
                shape: 'S3k'
              },
              TotalCount: {
                type: 'long'
              },
              TotalResponseTime: {
                type: 'double'
              }
            }
          },
          S3j: {
            type: 'structure',
            members: {
              ThrottleCount: {
                type: 'long'
              },
              OtherCount: {
                type: 'long'
              },
              TotalCount: {
                type: 'long'
              }
            }
          },
          S3k: {
            type: 'structure',
            members: {
              OtherCount: {
                type: 'long'
              },
              TotalCount: {
                type: 'long'
              }
            }
          },
          S3l: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Value: {
                  type: 'double'
                },
                Count: {
                  type: 'integer'
                }
              }
            }
          },
          S3q: {
            type: 'structure',
            members: {
              OkCount: {
                type: 'long'
              },
              ErrorStatistics: {
                shape: 'S3j'
              },
              FaultStatistics: {
                shape: 'S3k'
              },
              TotalCount: {
                type: 'long'
              },
              TotalResponseTime: {
                type: 'double'
              }
            }
          },
          S4d: {
            type: 'list',
            member: {
              shape: 'S1x'
            }
          },
          S4s: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Name: {},
                Message: {}
              }
            }
          },
          S5a: {
            type: 'structure',
            members: {
              PolicyName: {},
              PolicyDocument: {},
              PolicyRevisionId: {},
              LastUpdatedTime: {
                type: 'timestamp'
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=e54d3b737a61acfb85028f1fb4b3cd15988d28ad.js.map