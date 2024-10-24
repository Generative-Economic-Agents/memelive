System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2018-02-27',
          endpointPrefix: 'pi',
          jsonVersion: '1.1',
          protocol: 'json',
          protocols: ['json'],
          serviceAbbreviation: 'AWS PI',
          serviceFullName: 'AWS Performance Insights',
          serviceId: 'PI',
          signatureVersion: 'v4',
          signingName: 'pi',
          targetPrefix: 'PerformanceInsightsv20180227',
          uid: 'pi-2018-02-27'
        },
        operations: {
          CreatePerformanceAnalysisReport: {
            input: {
              type: 'structure',
              required: ['ServiceType', 'Identifier', 'StartTime', 'EndTime'],
              members: {
                ServiceType: {},
                Identifier: {},
                StartTime: {
                  type: 'timestamp'
                },
                EndTime: {
                  type: 'timestamp'
                },
                Tags: {
                  shape: 'S5'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AnalysisReportId: {}
              }
            }
          },
          DeletePerformanceAnalysisReport: {
            input: {
              type: 'structure',
              required: ['ServiceType', 'Identifier', 'AnalysisReportId'],
              members: {
                ServiceType: {},
                Identifier: {},
                AnalysisReportId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DescribeDimensionKeys: {
            input: {
              type: 'structure',
              required: ['ServiceType', 'Identifier', 'StartTime', 'EndTime', 'Metric', 'GroupBy'],
              members: {
                ServiceType: {},
                Identifier: {},
                StartTime: {
                  type: 'timestamp'
                },
                EndTime: {
                  type: 'timestamp'
                },
                Metric: {},
                PeriodInSeconds: {
                  type: 'integer'
                },
                GroupBy: {
                  shape: 'Sg'
                },
                AdditionalMetrics: {
                  type: 'list',
                  member: {}
                },
                PartitionBy: {
                  shape: 'Sg'
                },
                Filter: {
                  shape: 'Sl'
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
                AlignedStartTime: {
                  type: 'timestamp'
                },
                AlignedEndTime: {
                  type: 'timestamp'
                },
                PartitionKeys: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Dimensions'],
                    members: {
                      Dimensions: {
                        shape: 'Sr'
                      }
                    }
                  }
                },
                Keys: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Dimensions: {
                        shape: 'Sr'
                      },
                      Total: {
                        type: 'double'
                      },
                      AdditionalMetrics: {
                        type: 'map',
                        key: {},
                        value: {
                          type: 'double'
                        }
                      },
                      Partitions: {
                        type: 'list',
                        member: {
                          type: 'double'
                        }
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          GetDimensionKeyDetails: {
            input: {
              type: 'structure',
              required: ['ServiceType', 'Identifier', 'Group', 'GroupIdentifier'],
              members: {
                ServiceType: {},
                Identifier: {},
                Group: {},
                GroupIdentifier: {},
                RequestedDimensions: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Dimensions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Value: {},
                      Dimension: {},
                      Status: {}
                    }
                  }
                }
              }
            }
          },
          GetPerformanceAnalysisReport: {
            input: {
              type: 'structure',
              required: ['ServiceType', 'Identifier', 'AnalysisReportId'],
              members: {
                ServiceType: {},
                Identifier: {},
                AnalysisReportId: {},
                TextFormat: {},
                AcceptLanguage: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                AnalysisReport: {
                  type: 'structure',
                  required: ['AnalysisReportId'],
                  members: {
                    AnalysisReportId: {},
                    Identifier: {},
                    ServiceType: {},
                    CreateTime: {
                      type: 'timestamp'
                    },
                    StartTime: {
                      type: 'timestamp'
                    },
                    EndTime: {
                      type: 'timestamp'
                    },
                    Status: {},
                    Insights: {
                      shape: 'S1a'
                    }
                  }
                }
              }
            }
          },
          GetResourceMetadata: {
            input: {
              type: 'structure',
              required: ['ServiceType', 'Identifier'],
              members: {
                ServiceType: {},
                Identifier: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Identifier: {},
                Features: {
                  type: 'map',
                  key: {},
                  value: {
                    type: 'structure',
                    members: {
                      Status: {}
                    }
                  }
                }
              }
            }
          },
          GetResourceMetrics: {
            input: {
              type: 'structure',
              required: ['ServiceType', 'Identifier', 'MetricQueries', 'StartTime', 'EndTime'],
              members: {
                ServiceType: {},
                Identifier: {},
                MetricQueries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Metric'],
                    members: {
                      Metric: {},
                      GroupBy: {
                        shape: 'Sg'
                      },
                      Filter: {
                        shape: 'Sl'
                      }
                    }
                  }
                },
                StartTime: {
                  type: 'timestamp'
                },
                EndTime: {
                  type: 'timestamp'
                },
                PeriodInSeconds: {
                  type: 'integer'
                },
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {},
                PeriodAlignment: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                AlignedStartTime: {
                  type: 'timestamp'
                },
                AlignedEndTime: {
                  type: 'timestamp'
                },
                Identifier: {},
                MetricList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Key: {
                        type: 'structure',
                        required: ['Metric'],
                        members: {
                          Metric: {},
                          Dimensions: {
                            shape: 'Sr'
                          }
                        }
                      },
                      DataPoints: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          required: ['Timestamp', 'Value'],
                          members: {
                            Timestamp: {
                              type: 'timestamp'
                            },
                            Value: {
                              type: 'double'
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
          ListAvailableResourceDimensions: {
            input: {
              type: 'structure',
              required: ['ServiceType', 'Identifier', 'Metrics'],
              members: {
                ServiceType: {},
                Identifier: {},
                Metrics: {
                  type: 'list',
                  member: {}
                },
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {},
                AuthorizedActions: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                MetricDimensions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Metric: {},
                      Groups: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            Group: {},
                            Dimensions: {
                              type: 'list',
                              member: {
                                type: 'structure',
                                members: {
                                  Identifier: {}
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
          ListAvailableResourceMetrics: {
            input: {
              type: 'structure',
              required: ['ServiceType', 'Identifier', 'MetricTypes'],
              members: {
                ServiceType: {},
                Identifier: {},
                MetricTypes: {
                  type: 'list',
                  member: {}
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
                Metrics: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Metric: {},
                      Description: {},
                      Unit: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListPerformanceAnalysisReports: {
            input: {
              type: 'structure',
              required: ['ServiceType', 'Identifier'],
              members: {
                ServiceType: {},
                Identifier: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                ListTags: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AnalysisReports: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      AnalysisReportId: {},
                      CreateTime: {
                        type: 'timestamp'
                      },
                      StartTime: {
                        type: 'timestamp'
                      },
                      EndTime: {
                        type: 'timestamp'
                      },
                      Status: {},
                      Tags: {
                        shape: 'S5'
                      }
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
              required: ['ServiceType', 'ResourceARN'],
              members: {
                ServiceType: {},
                ResourceARN: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Tags: {
                  shape: 'S5'
                }
              }
            }
          },
          TagResource: {
            input: {
              type: 'structure',
              required: ['ServiceType', 'ResourceARN', 'Tags'],
              members: {
                ServiceType: {},
                ResourceARN: {},
                Tags: {
                  shape: 'S5'
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
              required: ['ServiceType', 'ResourceARN', 'TagKeys'],
              members: {
                ServiceType: {},
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
          }
        },
        shapes: {
          S5: {
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
          Sg: {
            type: 'structure',
            required: ['Group'],
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
          Sl: {
            type: 'map',
            key: {},
            value: {}
          },
          Sr: {
            type: 'map',
            key: {},
            value: {}
          },
          S1a: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['InsightId'],
              members: {
                InsightId: {},
                InsightType: {},
                Context: {},
                StartTime: {
                  type: 'timestamp'
                },
                EndTime: {
                  type: 'timestamp'
                },
                Severity: {},
                SupportingInsights: {
                  shape: 'S1a'
                },
                Description: {
                  shape: 'S1e'
                },
                Recommendations: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      RecommendationId: {},
                      RecommendationDescription: {
                        shape: 'S1e'
                      }
                    }
                  }
                },
                InsightData: {
                  shape: 'S1h'
                },
                BaselineData: {
                  shape: 'S1h'
                }
              }
            }
          },
          S1e: {
            type: 'string',
            sensitive: true
          },
          S1h: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                PerformanceInsightsMetric: {
                  type: 'structure',
                  members: {
                    Metric: {},
                    DisplayName: {},
                    Dimensions: {
                      type: 'map',
                      key: {},
                      value: {}
                    },
                    Value: {
                      type: 'double'
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
//# sourceMappingURL=967f02a2823df66695f07ada99962de78a976e76.js.map