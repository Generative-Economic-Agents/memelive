System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2017-07-25',
          endpointPrefix: 'lookoutmetrics',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceAbbreviation: 'LookoutMetrics',
          serviceFullName: 'Amazon Lookout for Metrics',
          serviceId: 'LookoutMetrics',
          signatureVersion: 'v4',
          signingName: 'lookoutmetrics',
          uid: 'lookoutmetrics-2017-07-25'
        },
        operations: {
          ActivateAnomalyDetector: {
            http: {
              requestUri: '/ActivateAnomalyDetector'
            },
            input: {
              type: 'structure',
              required: ['AnomalyDetectorArn'],
              members: {
                AnomalyDetectorArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          BackTestAnomalyDetector: {
            http: {
              requestUri: '/BackTestAnomalyDetector'
            },
            input: {
              type: 'structure',
              required: ['AnomalyDetectorArn'],
              members: {
                AnomalyDetectorArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          CreateAlert: {
            http: {
              requestUri: '/CreateAlert'
            },
            input: {
              type: 'structure',
              required: ['AlertName', 'AnomalyDetectorArn', 'Action'],
              members: {
                AlertName: {},
                AlertSensitivityThreshold: {
                  type: 'integer'
                },
                AlertDescription: {},
                AnomalyDetectorArn: {},
                Action: {
                  shape: 'Sa'
                },
                Tags: {
                  shape: 'Se'
                },
                AlertFilters: {
                  shape: 'Sh'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AlertArn: {}
              }
            }
          },
          CreateAnomalyDetector: {
            http: {
              requestUri: '/CreateAnomalyDetector'
            },
            input: {
              type: 'structure',
              required: ['AnomalyDetectorName', 'AnomalyDetectorConfig'],
              members: {
                AnomalyDetectorName: {},
                AnomalyDetectorDescription: {},
                AnomalyDetectorConfig: {
                  shape: 'St'
                },
                KmsKeyArn: {},
                Tags: {
                  shape: 'Se'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AnomalyDetectorArn: {}
              }
            }
          },
          CreateMetricSet: {
            http: {
              requestUri: '/CreateMetricSet'
            },
            input: {
              type: 'structure',
              required: ['AnomalyDetectorArn', 'MetricSetName', 'MetricList', 'MetricSource'],
              members: {
                AnomalyDetectorArn: {},
                MetricSetName: {},
                MetricSetDescription: {},
                MetricList: {
                  shape: 'S10'
                },
                Offset: {
                  type: 'integer'
                },
                TimestampColumn: {
                  shape: 'S15'
                },
                DimensionList: {
                  shape: 'S17'
                },
                MetricSetFrequency: {},
                MetricSource: {
                  shape: 'S18'
                },
                Timezone: {},
                Tags: {
                  shape: 'Se'
                },
                DimensionFilterList: {
                  shape: 'S2e'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                MetricSetArn: {}
              }
            }
          },
          DeactivateAnomalyDetector: {
            http: {
              requestUri: '/DeactivateAnomalyDetector'
            },
            input: {
              type: 'structure',
              required: ['AnomalyDetectorArn'],
              members: {
                AnomalyDetectorArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteAlert: {
            http: {
              requestUri: '/DeleteAlert'
            },
            input: {
              type: 'structure',
              required: ['AlertArn'],
              members: {
                AlertArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteAnomalyDetector: {
            http: {
              requestUri: '/DeleteAnomalyDetector'
            },
            input: {
              type: 'structure',
              required: ['AnomalyDetectorArn'],
              members: {
                AnomalyDetectorArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DescribeAlert: {
            http: {
              requestUri: '/DescribeAlert'
            },
            input: {
              type: 'structure',
              required: ['AlertArn'],
              members: {
                AlertArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Alert: {
                  type: 'structure',
                  members: {
                    Action: {
                      shape: 'Sa'
                    },
                    AlertDescription: {},
                    AlertArn: {},
                    AnomalyDetectorArn: {},
                    AlertName: {},
                    AlertSensitivityThreshold: {
                      type: 'integer'
                    },
                    AlertType: {},
                    AlertStatus: {},
                    LastModificationTime: {
                      type: 'timestamp'
                    },
                    CreationTime: {
                      type: 'timestamp'
                    },
                    AlertFilters: {
                      shape: 'Sh'
                    }
                  }
                }
              }
            }
          },
          DescribeAnomalyDetectionExecutions: {
            http: {
              requestUri: '/DescribeAnomalyDetectionExecutions'
            },
            input: {
              type: 'structure',
              required: ['AnomalyDetectorArn'],
              members: {
                AnomalyDetectorArn: {},
                Timestamp: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ExecutionList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Timestamp: {},
                      Status: {},
                      FailureReason: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeAnomalyDetector: {
            http: {
              requestUri: '/DescribeAnomalyDetector'
            },
            input: {
              type: 'structure',
              required: ['AnomalyDetectorArn'],
              members: {
                AnomalyDetectorArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                AnomalyDetectorArn: {},
                AnomalyDetectorName: {},
                AnomalyDetectorDescription: {},
                AnomalyDetectorConfig: {
                  type: 'structure',
                  members: {
                    AnomalyDetectorFrequency: {}
                  }
                },
                CreationTime: {
                  type: 'timestamp'
                },
                LastModificationTime: {
                  type: 'timestamp'
                },
                Status: {},
                FailureReason: {},
                KmsKeyArn: {},
                FailureType: {}
              }
            }
          },
          DescribeMetricSet: {
            http: {
              requestUri: '/DescribeMetricSet'
            },
            input: {
              type: 'structure',
              required: ['MetricSetArn'],
              members: {
                MetricSetArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                MetricSetArn: {},
                AnomalyDetectorArn: {},
                MetricSetName: {},
                MetricSetDescription: {},
                CreationTime: {
                  type: 'timestamp'
                },
                LastModificationTime: {
                  type: 'timestamp'
                },
                Offset: {
                  type: 'integer'
                },
                MetricList: {
                  shape: 'S10'
                },
                TimestampColumn: {
                  shape: 'S15'
                },
                DimensionList: {
                  shape: 'S17'
                },
                MetricSetFrequency: {},
                Timezone: {},
                MetricSource: {
                  shape: 'S18'
                },
                DimensionFilterList: {
                  shape: 'S2e'
                }
              }
            }
          },
          DetectMetricSetConfig: {
            http: {
              requestUri: '/DetectMetricSetConfig'
            },
            input: {
              type: 'structure',
              required: ['AnomalyDetectorArn', 'AutoDetectionMetricSource'],
              members: {
                AnomalyDetectorArn: {},
                AutoDetectionMetricSource: {
                  type: 'structure',
                  members: {
                    S3SourceConfig: {
                      type: 'structure',
                      members: {
                        TemplatedPathList: {
                          shape: 'S1a'
                        },
                        HistoricalDataPathList: {
                          shape: 'S1c'
                        }
                      }
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                DetectedMetricSetConfig: {
                  type: 'structure',
                  members: {
                    Offset: {
                      shape: 'S3i'
                    },
                    MetricSetFrequency: {
                      shape: 'S3i'
                    },
                    MetricSource: {
                      type: 'structure',
                      members: {
                        S3SourceConfig: {
                          type: 'structure',
                          members: {
                            FileFormatDescriptor: {
                              type: 'structure',
                              members: {
                                CsvFormatDescriptor: {
                                  type: 'structure',
                                  members: {
                                    FileCompression: {
                                      shape: 'S3i'
                                    },
                                    Charset: {
                                      shape: 'S3i'
                                    },
                                    ContainsHeader: {
                                      shape: 'S3i'
                                    },
                                    Delimiter: {
                                      shape: 'S3i'
                                    },
                                    HeaderList: {
                                      shape: 'S3i'
                                    },
                                    QuoteSymbol: {
                                      shape: 'S3i'
                                    }
                                  }
                                },
                                JsonFormatDescriptor: {
                                  type: 'structure',
                                  members: {
                                    FileCompression: {
                                      shape: 'S3i'
                                    },
                                    Charset: {
                                      shape: 'S3i'
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
          GetAnomalyGroup: {
            http: {
              requestUri: '/GetAnomalyGroup'
            },
            input: {
              type: 'structure',
              required: ['AnomalyGroupId', 'AnomalyDetectorArn'],
              members: {
                AnomalyGroupId: {},
                AnomalyDetectorArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                AnomalyGroup: {
                  type: 'structure',
                  members: {
                    StartTime: {},
                    EndTime: {},
                    AnomalyGroupId: {},
                    AnomalyGroupScore: {
                      type: 'double'
                    },
                    PrimaryMetricName: {},
                    MetricLevelImpactList: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          MetricName: {},
                          NumTimeSeries: {
                            type: 'integer'
                          },
                          ContributionMatrix: {
                            type: 'structure',
                            members: {
                              DimensionContributionList: {
                                type: 'list',
                                member: {
                                  type: 'structure',
                                  members: {
                                    DimensionName: {},
                                    DimensionValueContributionList: {
                                      type: 'list',
                                      member: {
                                        type: 'structure',
                                        members: {
                                          DimensionValue: {},
                                          ContributionScore: {
                                            type: 'double'
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
          GetDataQualityMetrics: {
            http: {
              requestUri: '/GetDataQualityMetrics'
            },
            input: {
              type: 'structure',
              required: ['AnomalyDetectorArn'],
              members: {
                AnomalyDetectorArn: {},
                MetricSetArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                AnomalyDetectorDataQualityMetricList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      StartTimestamp: {
                        type: 'timestamp'
                      },
                      MetricSetDataQualityMetricList: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            MetricSetArn: {},
                            DataQualityMetricList: {
                              type: 'list',
                              member: {
                                type: 'structure',
                                members: {
                                  MetricType: {},
                                  MetricDescription: {},
                                  RelatedColumnName: {},
                                  MetricValue: {
                                    type: 'double'
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
          GetFeedback: {
            http: {
              requestUri: '/GetFeedback'
            },
            input: {
              type: 'structure',
              required: ['AnomalyDetectorArn', 'AnomalyGroupTimeSeriesFeedback'],
              members: {
                AnomalyDetectorArn: {},
                AnomalyGroupTimeSeriesFeedback: {
                  type: 'structure',
                  required: ['AnomalyGroupId'],
                  members: {
                    AnomalyGroupId: {},
                    TimeSeriesId: {}
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
              members: {
                AnomalyGroupTimeSeriesFeedback: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      TimeSeriesId: {},
                      IsAnomaly: {
                        type: 'boolean'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          GetSampleData: {
            http: {
              requestUri: '/GetSampleData'
            },
            input: {
              type: 'structure',
              members: {
                S3SourceConfig: {
                  type: 'structure',
                  required: ['RoleArn', 'FileFormatDescriptor'],
                  members: {
                    RoleArn: {},
                    TemplatedPathList: {
                      shape: 'S1a'
                    },
                    HistoricalDataPathList: {
                      shape: 'S1c'
                    },
                    FileFormatDescriptor: {
                      shape: 'S1e'
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                HeaderValues: {
                  type: 'list',
                  member: {}
                },
                SampleRows: {
                  type: 'list',
                  member: {
                    type: 'list',
                    member: {}
                  }
                }
              }
            }
          },
          ListAlerts: {
            http: {
              requestUri: '/ListAlerts'
            },
            input: {
              type: 'structure',
              members: {
                AnomalyDetectorArn: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AlertSummaryList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      AlertArn: {},
                      AnomalyDetectorArn: {},
                      AlertName: {},
                      AlertSensitivityThreshold: {
                        type: 'integer'
                      },
                      AlertType: {},
                      AlertStatus: {},
                      LastModificationTime: {
                        type: 'timestamp'
                      },
                      CreationTime: {
                        type: 'timestamp'
                      },
                      Tags: {
                        shape: 'Se'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListAnomalyDetectors: {
            http: {
              requestUri: '/ListAnomalyDetectors'
            },
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
                AnomalyDetectorSummaryList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      AnomalyDetectorArn: {},
                      AnomalyDetectorName: {},
                      AnomalyDetectorDescription: {},
                      CreationTime: {
                        type: 'timestamp'
                      },
                      LastModificationTime: {
                        type: 'timestamp'
                      },
                      Status: {},
                      Tags: {
                        shape: 'Se'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListAnomalyGroupRelatedMetrics: {
            http: {
              requestUri: '/ListAnomalyGroupRelatedMetrics'
            },
            input: {
              type: 'structure',
              required: ['AnomalyDetectorArn', 'AnomalyGroupId'],
              members: {
                AnomalyDetectorArn: {},
                AnomalyGroupId: {},
                RelationshipTypeFilter: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                InterMetricImpactList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      MetricName: {},
                      AnomalyGroupId: {},
                      RelationshipType: {},
                      ContributionPercentage: {
                        type: 'double'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListAnomalyGroupSummaries: {
            http: {
              requestUri: '/ListAnomalyGroupSummaries'
            },
            input: {
              type: 'structure',
              required: ['AnomalyDetectorArn', 'SensitivityThreshold'],
              members: {
                AnomalyDetectorArn: {},
                SensitivityThreshold: {
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
                AnomalyGroupSummaryList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      StartTime: {},
                      EndTime: {},
                      AnomalyGroupId: {},
                      AnomalyGroupScore: {
                        type: 'double'
                      },
                      PrimaryMetricName: {}
                    }
                  }
                },
                AnomalyGroupStatistics: {
                  type: 'structure',
                  members: {
                    EvaluationStartDate: {},
                    TotalCount: {
                      type: 'integer'
                    },
                    ItemizedMetricStatsList: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          MetricName: {},
                          OccurrenceCount: {
                            type: 'integer'
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
          ListAnomalyGroupTimeSeries: {
            http: {
              requestUri: '/ListAnomalyGroupTimeSeries'
            },
            input: {
              type: 'structure',
              required: ['AnomalyDetectorArn', 'AnomalyGroupId', 'MetricName'],
              members: {
                AnomalyDetectorArn: {},
                AnomalyGroupId: {},
                MetricName: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                AnomalyGroupId: {},
                MetricName: {},
                TimestampList: {
                  type: 'list',
                  member: {}
                },
                NextToken: {},
                TimeSeriesList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['TimeSeriesId', 'DimensionList', 'MetricValueList'],
                    members: {
                      TimeSeriesId: {},
                      DimensionList: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          required: ['DimensionName', 'DimensionValue'],
                          members: {
                            DimensionName: {},
                            DimensionValue: {}
                          }
                        }
                      },
                      MetricValueList: {
                        type: 'list',
                        member: {
                          type: 'double'
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          ListMetricSets: {
            http: {
              requestUri: '/ListMetricSets'
            },
            input: {
              type: 'structure',
              members: {
                AnomalyDetectorArn: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                MetricSetSummaryList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      MetricSetArn: {},
                      AnomalyDetectorArn: {},
                      MetricSetDescription: {},
                      MetricSetName: {},
                      CreationTime: {
                        type: 'timestamp'
                      },
                      LastModificationTime: {
                        type: 'timestamp'
                      },
                      Tags: {
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
              requestUri: '/tags/{resourceArn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ResourceArn'],
              members: {
                ResourceArn: {
                  location: 'uri',
                  locationName: 'resourceArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Tags: {
                  shape: 'Se',
                  locationName: 'Tags'
                }
              }
            }
          },
          PutFeedback: {
            http: {
              requestUri: '/PutFeedback'
            },
            input: {
              type: 'structure',
              required: ['AnomalyDetectorArn', 'AnomalyGroupTimeSeriesFeedback'],
              members: {
                AnomalyDetectorArn: {},
                AnomalyGroupTimeSeriesFeedback: {
                  type: 'structure',
                  required: ['AnomalyGroupId', 'TimeSeriesId', 'IsAnomaly'],
                  members: {
                    AnomalyGroupId: {},
                    TimeSeriesId: {},
                    IsAnomaly: {
                      type: 'boolean'
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
          TagResource: {
            http: {
              requestUri: '/tags/{resourceArn}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['ResourceArn', 'Tags'],
              members: {
                ResourceArn: {
                  location: 'uri',
                  locationName: 'resourceArn'
                },
                Tags: {
                  shape: 'Se',
                  locationName: 'tags'
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
              requestUri: '/tags/{resourceArn}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['ResourceArn', 'TagKeys'],
              members: {
                ResourceArn: {
                  location: 'uri',
                  locationName: 'resourceArn'
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
          UpdateAlert: {
            http: {
              requestUri: '/UpdateAlert'
            },
            input: {
              type: 'structure',
              required: ['AlertArn'],
              members: {
                AlertArn: {},
                AlertDescription: {},
                AlertSensitivityThreshold: {
                  type: 'integer'
                },
                Action: {
                  shape: 'Sa'
                },
                AlertFilters: {
                  shape: 'Sh'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AlertArn: {}
              }
            }
          },
          UpdateAnomalyDetector: {
            http: {
              requestUri: '/UpdateAnomalyDetector'
            },
            input: {
              type: 'structure',
              required: ['AnomalyDetectorArn'],
              members: {
                AnomalyDetectorArn: {},
                KmsKeyArn: {},
                AnomalyDetectorDescription: {},
                AnomalyDetectorConfig: {
                  shape: 'St'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AnomalyDetectorArn: {}
              }
            }
          },
          UpdateMetricSet: {
            http: {
              requestUri: '/UpdateMetricSet'
            },
            input: {
              type: 'structure',
              required: ['MetricSetArn'],
              members: {
                MetricSetArn: {},
                MetricSetDescription: {},
                MetricList: {
                  shape: 'S10'
                },
                Offset: {
                  type: 'integer'
                },
                TimestampColumn: {
                  shape: 'S15'
                },
                DimensionList: {
                  shape: 'S17'
                },
                MetricSetFrequency: {},
                MetricSource: {
                  shape: 'S18'
                },
                DimensionFilterList: {
                  shape: 'S2e'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                MetricSetArn: {}
              }
            }
          }
        },
        shapes: {
          Sa: {
            type: 'structure',
            members: {
              SNSConfiguration: {
                type: 'structure',
                required: ['RoleArn', 'SnsTopicArn'],
                members: {
                  RoleArn: {},
                  SnsTopicArn: {},
                  SnsFormat: {}
                }
              },
              LambdaConfiguration: {
                type: 'structure',
                required: ['RoleArn', 'LambdaArn'],
                members: {
                  RoleArn: {},
                  LambdaArn: {}
                }
              }
            }
          },
          Se: {
            type: 'map',
            key: {},
            value: {}
          },
          Sh: {
            type: 'structure',
            members: {
              MetricList: {
                type: 'list',
                member: {}
              },
              DimensionFilterList: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    DimensionName: {},
                    DimensionValueList: {
                      type: 'list',
                      member: {}
                    }
                  }
                }
              }
            }
          },
          St: {
            type: 'structure',
            members: {
              AnomalyDetectorFrequency: {}
            }
          },
          S10: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['MetricName', 'AggregationFunction'],
              members: {
                MetricName: {},
                AggregationFunction: {},
                Namespace: {}
              }
            }
          },
          S15: {
            type: 'structure',
            members: {
              ColumnName: {},
              ColumnFormat: {}
            }
          },
          S17: {
            type: 'list',
            member: {}
          },
          S18: {
            type: 'structure',
            members: {
              S3SourceConfig: {
                type: 'structure',
                members: {
                  RoleArn: {},
                  TemplatedPathList: {
                    shape: 'S1a'
                  },
                  HistoricalDataPathList: {
                    shape: 'S1c'
                  },
                  FileFormatDescriptor: {
                    shape: 'S1e'
                  }
                }
              },
              AppFlowConfig: {
                type: 'structure',
                members: {
                  RoleArn: {},
                  FlowName: {}
                }
              },
              CloudWatchConfig: {
                type: 'structure',
                members: {
                  RoleArn: {},
                  BackTestConfiguration: {
                    shape: 'S1r'
                  }
                }
              },
              RDSSourceConfig: {
                type: 'structure',
                members: {
                  DBInstanceIdentifier: {},
                  DatabaseHost: {},
                  DatabasePort: {
                    type: 'integer'
                  },
                  SecretManagerArn: {},
                  DatabaseName: {},
                  TableName: {},
                  RoleArn: {},
                  VpcConfiguration: {
                    shape: 'S1z'
                  }
                }
              },
              RedshiftSourceConfig: {
                type: 'structure',
                members: {
                  ClusterIdentifier: {},
                  DatabaseHost: {},
                  DatabasePort: {
                    type: 'integer'
                  },
                  SecretManagerArn: {},
                  DatabaseName: {},
                  TableName: {},
                  RoleArn: {},
                  VpcConfiguration: {
                    shape: 'S1z'
                  }
                }
              },
              AthenaSourceConfig: {
                type: 'structure',
                members: {
                  RoleArn: {},
                  DatabaseName: {},
                  DataCatalog: {},
                  TableName: {},
                  WorkGroupName: {},
                  S3ResultsPath: {},
                  BackTestConfiguration: {
                    shape: 'S1r'
                  }
                }
              }
            }
          },
          S1a: {
            type: 'list',
            member: {}
          },
          S1c: {
            type: 'list',
            member: {}
          },
          S1e: {
            type: 'structure',
            members: {
              CsvFormatDescriptor: {
                type: 'structure',
                members: {
                  FileCompression: {},
                  Charset: {},
                  ContainsHeader: {
                    type: 'boolean'
                  },
                  Delimiter: {},
                  HeaderList: {
                    type: 'list',
                    member: {}
                  },
                  QuoteSymbol: {}
                }
              },
              JsonFormatDescriptor: {
                type: 'structure',
                members: {
                  FileCompression: {},
                  Charset: {}
                }
              }
            }
          },
          S1r: {
            type: 'structure',
            required: ['RunBackTestMode'],
            members: {
              RunBackTestMode: {
                type: 'boolean'
              }
            }
          },
          S1z: {
            type: 'structure',
            required: ['SubnetIdList', 'SecurityGroupIdList'],
            members: {
              SubnetIdList: {
                type: 'list',
                member: {}
              },
              SecurityGroupIdList: {
                type: 'list',
                member: {}
              }
            }
          },
          S2e: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Name: {},
                FilterList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      DimensionValue: {},
                      FilterOperation: {}
                    }
                  }
                }
              }
            }
          },
          S3i: {
            type: 'structure',
            members: {
              Value: {
                type: 'structure',
                members: {
                  S: {},
                  N: {},
                  B: {},
                  SS: {
                    type: 'list',
                    member: {}
                  },
                  NS: {
                    type: 'list',
                    member: {}
                  },
                  BS: {
                    type: 'list',
                    member: {}
                  }
                }
              },
              Confidence: {},
              Message: {}
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=325956d2862cce689746e8b1f4ff1b6352945c4a.js.map