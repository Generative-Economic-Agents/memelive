System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2017-10-25',
          endpointPrefix: 'ce',
          jsonVersion: '1.1',
          protocol: 'json',
          serviceAbbreviation: 'AWS Cost Explorer',
          serviceFullName: 'AWS Cost Explorer Service',
          serviceId: 'Cost Explorer',
          signatureVersion: 'v4',
          signingName: 'ce',
          targetPrefix: 'AWSInsightsIndexService',
          uid: 'ce-2017-10-25'
        },
        operations: {
          CreateAnomalyMonitor: {
            input: {
              type: 'structure',
              required: ['AnomalyMonitor'],
              members: {
                AnomalyMonitor: {
                  shape: 'S2'
                },
                ResourceTags: {
                  shape: 'Sk'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['MonitorArn'],
              members: {
                MonitorArn: {}
              }
            }
          },
          CreateAnomalySubscription: {
            input: {
              type: 'structure',
              required: ['AnomalySubscription'],
              members: {
                AnomalySubscription: {
                  shape: 'Sq'
                },
                ResourceTags: {
                  shape: 'Sk'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['SubscriptionArn'],
              members: {
                SubscriptionArn: {}
              }
            }
          },
          CreateCostCategoryDefinition: {
            input: {
              type: 'structure',
              required: ['Name', 'RuleVersion', 'Rules'],
              members: {
                Name: {},
                EffectiveStart: {},
                RuleVersion: {},
                Rules: {
                  shape: 'S14'
                },
                DefaultValue: {},
                SplitChargeRules: {
                  shape: 'S1a'
                },
                ResourceTags: {
                  shape: 'Sk'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                CostCategoryArn: {},
                EffectiveStart: {}
              }
            }
          },
          DeleteAnomalyMonitor: {
            input: {
              type: 'structure',
              required: ['MonitorArn'],
              members: {
                MonitorArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteAnomalySubscription: {
            input: {
              type: 'structure',
              required: ['SubscriptionArn'],
              members: {
                SubscriptionArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteCostCategoryDefinition: {
            input: {
              type: 'structure',
              required: ['CostCategoryArn'],
              members: {
                CostCategoryArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                CostCategoryArn: {},
                EffectiveEnd: {}
              }
            }
          },
          DescribeCostCategoryDefinition: {
            input: {
              type: 'structure',
              required: ['CostCategoryArn'],
              members: {
                CostCategoryArn: {},
                EffectiveOn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                CostCategory: {
                  type: 'structure',
                  required: ['CostCategoryArn', 'EffectiveStart', 'Name', 'RuleVersion', 'Rules'],
                  members: {
                    CostCategoryArn: {},
                    EffectiveStart: {},
                    EffectiveEnd: {},
                    Name: {},
                    RuleVersion: {},
                    Rules: {
                      shape: 'S14'
                    },
                    SplitChargeRules: {
                      shape: 'S1a'
                    },
                    ProcessingStatus: {
                      shape: 'S1s'
                    },
                    DefaultValue: {}
                  }
                }
              }
            }
          },
          GetAnomalies: {
            input: {
              type: 'structure',
              required: ['DateInterval'],
              members: {
                MonitorArn: {},
                DateInterval: {
                  type: 'structure',
                  required: ['StartDate'],
                  members: {
                    StartDate: {},
                    EndDate: {}
                  }
                },
                Feedback: {},
                TotalImpact: {
                  type: 'structure',
                  required: ['NumericOperator', 'StartValue'],
                  members: {
                    NumericOperator: {},
                    StartValue: {
                      type: 'double'
                    },
                    EndValue: {
                      type: 'double'
                    }
                  }
                },
                NextPageToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Anomalies'],
              members: {
                Anomalies: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['AnomalyId', 'AnomalyScore', 'Impact', 'MonitorArn'],
                    members: {
                      AnomalyId: {},
                      AnomalyStartDate: {},
                      AnomalyEndDate: {},
                      DimensionValue: {},
                      RootCauses: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            Service: {},
                            Region: {},
                            LinkedAccount: {},
                            UsageType: {},
                            LinkedAccountName: {}
                          }
                        }
                      },
                      AnomalyScore: {
                        type: 'structure',
                        required: ['MaxScore', 'CurrentScore'],
                        members: {
                          MaxScore: {
                            type: 'double'
                          },
                          CurrentScore: {
                            type: 'double'
                          }
                        }
                      },
                      Impact: {
                        type: 'structure',
                        required: ['MaxImpact'],
                        members: {
                          MaxImpact: {
                            type: 'double'
                          },
                          TotalImpact: {
                            type: 'double'
                          },
                          TotalActualSpend: {
                            type: 'double'
                          },
                          TotalExpectedSpend: {
                            type: 'double'
                          },
                          TotalImpactPercentage: {
                            type: 'double'
                          }
                        }
                      },
                      MonitorArn: {},
                      Feedback: {}
                    }
                  }
                },
                NextPageToken: {}
              }
            }
          },
          GetAnomalyMonitors: {
            input: {
              type: 'structure',
              members: {
                MonitorArnList: {
                  shape: 'Sb'
                },
                NextPageToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['AnomalyMonitors'],
              members: {
                AnomalyMonitors: {
                  type: 'list',
                  member: {
                    shape: 'S2'
                  }
                },
                NextPageToken: {}
              }
            }
          },
          GetAnomalySubscriptions: {
            input: {
              type: 'structure',
              members: {
                SubscriptionArnList: {
                  shape: 'Sb'
                },
                MonitorArn: {},
                NextPageToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['AnomalySubscriptions'],
              members: {
                AnomalySubscriptions: {
                  type: 'list',
                  member: {
                    shape: 'Sq'
                  }
                },
                NextPageToken: {}
              }
            }
          },
          GetApproximateUsageRecords: {
            input: {
              type: 'structure',
              required: ['Granularity', 'ApproximationDimension'],
              members: {
                Granularity: {},
                Services: {
                  type: 'list',
                  member: {}
                },
                ApproximationDimension: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Services: {
                  type: 'map',
                  key: {},
                  value: {
                    type: 'long'
                  }
                },
                TotalRecords: {
                  type: 'long'
                },
                LookbackPeriod: {
                  shape: 'S2o'
                }
              }
            }
          },
          GetCostAndUsage: {
            input: {
              type: 'structure',
              required: ['TimePeriod', 'Granularity', 'Metrics'],
              members: {
                TimePeriod: {
                  shape: 'S2o'
                },
                Granularity: {},
                Filter: {
                  shape: 'S7'
                },
                Metrics: {
                  shape: 'S2q'
                },
                GroupBy: {
                  shape: 'S2s'
                },
                NextPageToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                NextPageToken: {},
                GroupDefinitions: {
                  shape: 'S2s'
                },
                ResultsByTime: {
                  shape: 'S2x'
                },
                DimensionValueAttributes: {
                  shape: 'S38'
                }
              }
            }
          },
          GetCostAndUsageWithResources: {
            input: {
              type: 'structure',
              required: ['TimePeriod', 'Granularity', 'Filter'],
              members: {
                TimePeriod: {
                  shape: 'S2o'
                },
                Granularity: {},
                Filter: {
                  shape: 'S7'
                },
                Metrics: {
                  shape: 'S2q'
                },
                GroupBy: {
                  shape: 'S2s'
                },
                NextPageToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                NextPageToken: {},
                GroupDefinitions: {
                  shape: 'S2s'
                },
                ResultsByTime: {
                  shape: 'S2x'
                },
                DimensionValueAttributes: {
                  shape: 'S38'
                }
              }
            }
          },
          GetCostCategories: {
            input: {
              type: 'structure',
              required: ['TimePeriod'],
              members: {
                SearchString: {},
                TimePeriod: {
                  shape: 'S2o'
                },
                CostCategoryName: {},
                Filter: {
                  shape: 'S7'
                },
                SortBy: {
                  shape: 'S3h'
                },
                MaxResults: {
                  type: 'integer'
                },
                NextPageToken: {}
              }
            },
            output: {
              type: 'structure',
              required: ['ReturnSize', 'TotalSize'],
              members: {
                NextPageToken: {},
                CostCategoryNames: {
                  type: 'list',
                  member: {}
                },
                CostCategoryValues: {
                  shape: 'S3o'
                },
                ReturnSize: {
                  type: 'integer'
                },
                TotalSize: {
                  type: 'integer'
                }
              }
            }
          },
          GetCostForecast: {
            input: {
              type: 'structure',
              required: ['TimePeriod', 'Metric', 'Granularity'],
              members: {
                TimePeriod: {
                  shape: 'S2o'
                },
                Metric: {},
                Granularity: {},
                Filter: {
                  shape: 'S7'
                },
                PredictionIntervalLevel: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Total: {
                  shape: 'S30'
                },
                ForecastResultsByTime: {
                  shape: 'S3t'
                }
              }
            }
          },
          GetDimensionValues: {
            input: {
              type: 'structure',
              required: ['TimePeriod', 'Dimension'],
              members: {
                SearchString: {},
                TimePeriod: {
                  shape: 'S2o'
                },
                Dimension: {},
                Context: {},
                Filter: {
                  shape: 'S7'
                },
                SortBy: {
                  shape: 'S3h'
                },
                MaxResults: {
                  type: 'integer'
                },
                NextPageToken: {}
              }
            },
            output: {
              type: 'structure',
              required: ['DimensionValues', 'ReturnSize', 'TotalSize'],
              members: {
                DimensionValues: {
                  shape: 'S38'
                },
                ReturnSize: {
                  type: 'integer'
                },
                TotalSize: {
                  type: 'integer'
                },
                NextPageToken: {}
              }
            }
          },
          GetReservationCoverage: {
            input: {
              type: 'structure',
              required: ['TimePeriod'],
              members: {
                TimePeriod: {
                  shape: 'S2o'
                },
                GroupBy: {
                  shape: 'S2s'
                },
                Granularity: {},
                Filter: {
                  shape: 'S7'
                },
                Metrics: {
                  shape: 'S2q'
                },
                NextPageToken: {},
                SortBy: {
                  shape: 'S3i'
                },
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['CoveragesByTime'],
              members: {
                CoveragesByTime: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      TimePeriod: {
                        shape: 'S2o'
                      },
                      Groups: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            Attributes: {
                              shape: 'S3a'
                            },
                            Coverage: {
                              shape: 'S44'
                            }
                          }
                        }
                      },
                      Total: {
                        shape: 'S44'
                      }
                    }
                  }
                },
                Total: {
                  shape: 'S44'
                },
                NextPageToken: {}
              }
            }
          },
          GetReservationPurchaseRecommendation: {
            input: {
              type: 'structure',
              required: ['Service'],
              members: {
                AccountId: {},
                Service: {},
                Filter: {
                  shape: 'S7'
                },
                AccountScope: {},
                LookbackPeriodInDays: {},
                TermInYears: {},
                PaymentOption: {},
                ServiceSpecification: {
                  shape: 'S4m'
                },
                PageSize: {
                  type: 'integer'
                },
                NextPageToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Metadata: {
                  type: 'structure',
                  members: {
                    RecommendationId: {},
                    GenerationTimestamp: {},
                    AdditionalMetadata: {}
                  }
                },
                Recommendations: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      AccountScope: {},
                      LookbackPeriodInDays: {},
                      TermInYears: {},
                      PaymentOption: {},
                      ServiceSpecification: {
                        shape: 'S4m'
                      },
                      RecommendationDetails: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            AccountId: {},
                            InstanceDetails: {
                              type: 'structure',
                              members: {
                                EC2InstanceDetails: {
                                  type: 'structure',
                                  members: {
                                    Family: {},
                                    InstanceType: {},
                                    Region: {},
                                    AvailabilityZone: {},
                                    Platform: {},
                                    Tenancy: {},
                                    CurrentGeneration: {
                                      type: 'boolean'
                                    },
                                    SizeFlexEligible: {
                                      type: 'boolean'
                                    }
                                  }
                                },
                                RDSInstanceDetails: {
                                  type: 'structure',
                                  members: {
                                    Family: {},
                                    InstanceType: {},
                                    Region: {},
                                    DatabaseEngine: {},
                                    DatabaseEdition: {},
                                    DeploymentOption: {},
                                    LicenseModel: {},
                                    CurrentGeneration: {
                                      type: 'boolean'
                                    },
                                    SizeFlexEligible: {
                                      type: 'boolean'
                                    }
                                  }
                                },
                                RedshiftInstanceDetails: {
                                  type: 'structure',
                                  members: {
                                    Family: {},
                                    NodeType: {},
                                    Region: {},
                                    CurrentGeneration: {
                                      type: 'boolean'
                                    },
                                    SizeFlexEligible: {
                                      type: 'boolean'
                                    }
                                  }
                                },
                                ElastiCacheInstanceDetails: {
                                  type: 'structure',
                                  members: {
                                    Family: {},
                                    NodeType: {},
                                    Region: {},
                                    ProductDescription: {},
                                    CurrentGeneration: {
                                      type: 'boolean'
                                    },
                                    SizeFlexEligible: {
                                      type: 'boolean'
                                    }
                                  }
                                },
                                ESInstanceDetails: {
                                  type: 'structure',
                                  members: {
                                    InstanceClass: {},
                                    InstanceSize: {},
                                    Region: {},
                                    CurrentGeneration: {
                                      type: 'boolean'
                                    },
                                    SizeFlexEligible: {
                                      type: 'boolean'
                                    }
                                  }
                                },
                                MemoryDBInstanceDetails: {
                                  type: 'structure',
                                  members: {
                                    Family: {},
                                    NodeType: {},
                                    Region: {},
                                    CurrentGeneration: {
                                      type: 'boolean'
                                    },
                                    SizeFlexEligible: {
                                      type: 'boolean'
                                    }
                                  }
                                }
                              }
                            },
                            RecommendedNumberOfInstancesToPurchase: {},
                            RecommendedNormalizedUnitsToPurchase: {},
                            MinimumNumberOfInstancesUsedPerHour: {},
                            MinimumNormalizedUnitsUsedPerHour: {},
                            MaximumNumberOfInstancesUsedPerHour: {},
                            MaximumNormalizedUnitsUsedPerHour: {},
                            AverageNumberOfInstancesUsedPerHour: {},
                            AverageNormalizedUnitsUsedPerHour: {},
                            AverageUtilization: {},
                            EstimatedBreakEvenInMonths: {},
                            CurrencyCode: {},
                            EstimatedMonthlySavingsAmount: {},
                            EstimatedMonthlySavingsPercentage: {},
                            EstimatedMonthlyOnDemandCost: {},
                            EstimatedReservationCostForLookbackPeriod: {},
                            UpfrontCost: {},
                            RecurringStandardMonthlyCost: {}
                          }
                        }
                      },
                      RecommendationSummary: {
                        type: 'structure',
                        members: {
                          TotalEstimatedMonthlySavingsAmount: {},
                          TotalEstimatedMonthlySavingsPercentage: {},
                          CurrencyCode: {}
                        }
                      }
                    }
                  }
                },
                NextPageToken: {}
              }
            }
          },
          GetReservationUtilization: {
            input: {
              type: 'structure',
              required: ['TimePeriod'],
              members: {
                TimePeriod: {
                  shape: 'S2o'
                },
                GroupBy: {
                  shape: 'S2s'
                },
                Granularity: {},
                Filter: {
                  shape: 'S7'
                },
                SortBy: {
                  shape: 'S3i'
                },
                NextPageToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['UtilizationsByTime'],
              members: {
                UtilizationsByTime: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      TimePeriod: {
                        shape: 'S2o'
                      },
                      Groups: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            Key: {},
                            Value: {},
                            Attributes: {
                              shape: 'S3a'
                            },
                            Utilization: {
                              shape: 'S5c'
                            }
                          }
                        }
                      },
                      Total: {
                        shape: 'S5c'
                      }
                    }
                  }
                },
                Total: {
                  shape: 'S5c'
                },
                NextPageToken: {}
              }
            }
          },
          GetRightsizingRecommendation: {
            input: {
              type: 'structure',
              required: ['Service'],
              members: {
                Filter: {
                  shape: 'S7'
                },
                Configuration: {
                  shape: 'S5v'
                },
                Service: {},
                PageSize: {
                  type: 'integer'
                },
                NextPageToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Metadata: {
                  type: 'structure',
                  members: {
                    RecommendationId: {},
                    GenerationTimestamp: {},
                    LookbackPeriodInDays: {},
                    AdditionalMetadata: {}
                  }
                },
                Summary: {
                  type: 'structure',
                  members: {
                    TotalRecommendationCount: {},
                    EstimatedTotalMonthlySavingsAmount: {},
                    SavingsCurrencyCode: {},
                    SavingsPercentage: {}
                  }
                },
                RightsizingRecommendations: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      AccountId: {},
                      CurrentInstance: {
                        type: 'structure',
                        members: {
                          ResourceId: {},
                          InstanceName: {},
                          Tags: {
                            type: 'list',
                            member: {
                              shape: 'Sf'
                            }
                          },
                          ResourceDetails: {
                            shape: 'S64'
                          },
                          ResourceUtilization: {
                            shape: 'S66'
                          },
                          ReservationCoveredHoursInLookbackPeriod: {},
                          SavingsPlansCoveredHoursInLookbackPeriod: {},
                          OnDemandHoursInLookbackPeriod: {},
                          TotalRunningHoursInLookbackPeriod: {},
                          MonthlyCost: {},
                          CurrencyCode: {}
                        }
                      },
                      RightsizingType: {},
                      ModifyRecommendationDetail: {
                        type: 'structure',
                        members: {
                          TargetInstances: {
                            type: 'list',
                            member: {
                              type: 'structure',
                              members: {
                                EstimatedMonthlyCost: {},
                                EstimatedMonthlySavings: {},
                                CurrencyCode: {},
                                DefaultTargetInstance: {
                                  type: 'boolean'
                                },
                                ResourceDetails: {
                                  shape: 'S64'
                                },
                                ExpectedResourceUtilization: {
                                  shape: 'S66'
                                },
                                PlatformDifferences: {
                                  type: 'list',
                                  member: {}
                                }
                              }
                            }
                          }
                        }
                      },
                      TerminateRecommendationDetail: {
                        type: 'structure',
                        members: {
                          EstimatedMonthlySavings: {},
                          CurrencyCode: {}
                        }
                      },
                      FindingReasonCodes: {
                        type: 'list',
                        member: {}
                      }
                    }
                  }
                },
                NextPageToken: {},
                Configuration: {
                  shape: 'S5v'
                }
              }
            }
          },
          GetSavingsPlanPurchaseRecommendationDetails: {
            input: {
              type: 'structure',
              required: ['RecommendationDetailId'],
              members: {
                RecommendationDetailId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                RecommendationDetailId: {},
                RecommendationDetailData: {
                  type: 'structure',
                  members: {
                    AccountScope: {},
                    LookbackPeriodInDays: {},
                    SavingsPlansType: {},
                    TermInYears: {},
                    PaymentOption: {},
                    AccountId: {},
                    CurrencyCode: {},
                    InstanceFamily: {},
                    Region: {},
                    OfferingId: {},
                    GenerationTimestamp: {},
                    LatestUsageTimestamp: {},
                    CurrentAverageHourlyOnDemandSpend: {},
                    CurrentMaximumHourlyOnDemandSpend: {},
                    CurrentMinimumHourlyOnDemandSpend: {},
                    EstimatedAverageUtilization: {},
                    EstimatedMonthlySavingsAmount: {},
                    EstimatedOnDemandCost: {},
                    EstimatedOnDemandCostWithCurrentCommitment: {},
                    EstimatedROI: {},
                    EstimatedSPCost: {},
                    EstimatedSavingsAmount: {},
                    EstimatedSavingsPercentage: {},
                    ExistingHourlyCommitment: {},
                    HourlyCommitmentToPurchase: {},
                    UpfrontCost: {},
                    CurrentAverageCoverage: {},
                    EstimatedAverageCoverage: {},
                    MetricsOverLookbackPeriod: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          StartTime: {},
                          EstimatedOnDemandCost: {},
                          CurrentCoverage: {},
                          EstimatedCoverage: {},
                          EstimatedNewCommitmentUtilization: {}
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          GetSavingsPlansCoverage: {
            input: {
              type: 'structure',
              required: ['TimePeriod'],
              members: {
                TimePeriod: {
                  shape: 'S2o'
                },
                GroupBy: {
                  shape: 'S2s'
                },
                Granularity: {},
                Filter: {
                  shape: 'S7'
                },
                Metrics: {
                  shape: 'S2q'
                },
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                SortBy: {
                  shape: 'S3i'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['SavingsPlansCoverages'],
              members: {
                SavingsPlansCoverages: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Attributes: {
                        shape: 'S3a'
                      },
                      Coverage: {
                        type: 'structure',
                        members: {
                          SpendCoveredBySavingsPlans: {},
                          OnDemandCost: {},
                          TotalCost: {},
                          CoveragePercentage: {}
                        }
                      },
                      TimePeriod: {
                        shape: 'S2o'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          GetSavingsPlansPurchaseRecommendation: {
            input: {
              type: 'structure',
              required: ['SavingsPlansType', 'TermInYears', 'PaymentOption', 'LookbackPeriodInDays'],
              members: {
                SavingsPlansType: {},
                TermInYears: {},
                PaymentOption: {},
                AccountScope: {},
                NextPageToken: {},
                PageSize: {
                  type: 'integer'
                },
                LookbackPeriodInDays: {},
                Filter: {
                  shape: 'S7'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Metadata: {
                  type: 'structure',
                  members: {
                    RecommendationId: {},
                    GenerationTimestamp: {},
                    AdditionalMetadata: {}
                  }
                },
                SavingsPlansPurchaseRecommendation: {
                  type: 'structure',
                  members: {
                    AccountScope: {},
                    SavingsPlansType: {},
                    TermInYears: {},
                    PaymentOption: {},
                    LookbackPeriodInDays: {},
                    SavingsPlansPurchaseRecommendationDetails: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          SavingsPlansDetails: {
                            type: 'structure',
                            members: {
                              Region: {},
                              InstanceFamily: {},
                              OfferingId: {}
                            }
                          },
                          AccountId: {},
                          UpfrontCost: {},
                          EstimatedROI: {},
                          CurrencyCode: {},
                          EstimatedSPCost: {},
                          EstimatedOnDemandCost: {},
                          EstimatedOnDemandCostWithCurrentCommitment: {},
                          EstimatedSavingsAmount: {},
                          EstimatedSavingsPercentage: {},
                          HourlyCommitmentToPurchase: {},
                          EstimatedAverageUtilization: {},
                          EstimatedMonthlySavingsAmount: {},
                          CurrentMinimumHourlyOnDemandSpend: {},
                          CurrentMaximumHourlyOnDemandSpend: {},
                          CurrentAverageHourlyOnDemandSpend: {},
                          RecommendationDetailId: {}
                        }
                      }
                    },
                    SavingsPlansPurchaseRecommendationSummary: {
                      type: 'structure',
                      members: {
                        EstimatedROI: {},
                        CurrencyCode: {},
                        EstimatedTotalCost: {},
                        CurrentOnDemandSpend: {},
                        EstimatedSavingsAmount: {},
                        TotalRecommendationCount: {},
                        DailyCommitmentToPurchase: {},
                        HourlyCommitmentToPurchase: {},
                        EstimatedSavingsPercentage: {},
                        EstimatedMonthlySavingsAmount: {},
                        EstimatedOnDemandCostWithCurrentCommitment: {}
                      }
                    }
                  }
                },
                NextPageToken: {}
              }
            }
          },
          GetSavingsPlansUtilization: {
            input: {
              type: 'structure',
              required: ['TimePeriod'],
              members: {
                TimePeriod: {
                  shape: 'S2o'
                },
                Granularity: {},
                Filter: {
                  shape: 'S7'
                },
                SortBy: {
                  shape: 'S3i'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Total'],
              members: {
                SavingsPlansUtilizationsByTime: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['TimePeriod', 'Utilization'],
                    members: {
                      TimePeriod: {
                        shape: 'S2o'
                      },
                      Utilization: {
                        shape: 'S78'
                      },
                      Savings: {
                        shape: 'S79'
                      },
                      AmortizedCommitment: {
                        shape: 'S7a'
                      }
                    }
                  }
                },
                Total: {
                  shape: 'S7b'
                }
              }
            }
          },
          GetSavingsPlansUtilizationDetails: {
            input: {
              type: 'structure',
              required: ['TimePeriod'],
              members: {
                TimePeriod: {
                  shape: 'S2o'
                },
                Filter: {
                  shape: 'S7'
                },
                DataType: {
                  type: 'list',
                  member: {}
                },
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                SortBy: {
                  shape: 'S3i'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['SavingsPlansUtilizationDetails', 'TimePeriod'],
              members: {
                SavingsPlansUtilizationDetails: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      SavingsPlanArn: {},
                      Attributes: {
                        shape: 'S3a'
                      },
                      Utilization: {
                        shape: 'S78'
                      },
                      Savings: {
                        shape: 'S79'
                      },
                      AmortizedCommitment: {
                        shape: 'S7a'
                      }
                    }
                  }
                },
                Total: {
                  shape: 'S7b'
                },
                TimePeriod: {
                  shape: 'S2o'
                },
                NextToken: {}
              }
            }
          },
          GetTags: {
            input: {
              type: 'structure',
              required: ['TimePeriod'],
              members: {
                SearchString: {},
                TimePeriod: {
                  shape: 'S2o'
                },
                TagKey: {},
                Filter: {
                  shape: 'S7'
                },
                SortBy: {
                  shape: 'S3h'
                },
                MaxResults: {
                  type: 'integer'
                },
                NextPageToken: {}
              }
            },
            output: {
              type: 'structure',
              required: ['Tags', 'ReturnSize', 'TotalSize'],
              members: {
                NextPageToken: {},
                Tags: {
                  type: 'list',
                  member: {}
                },
                ReturnSize: {
                  type: 'integer'
                },
                TotalSize: {
                  type: 'integer'
                }
              }
            }
          },
          GetUsageForecast: {
            input: {
              type: 'structure',
              required: ['TimePeriod', 'Metric', 'Granularity'],
              members: {
                TimePeriod: {
                  shape: 'S2o'
                },
                Metric: {},
                Granularity: {},
                Filter: {
                  shape: 'S7'
                },
                PredictionIntervalLevel: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Total: {
                  shape: 'S30'
                },
                ForecastResultsByTime: {
                  shape: 'S3t'
                }
              }
            }
          },
          ListCostAllocationTagBackfillHistory: {
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
                BackfillRequests: {
                  type: 'list',
                  member: {
                    shape: 'S7t'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListCostAllocationTags: {
            input: {
              type: 'structure',
              members: {
                Status: {},
                TagKeys: {
                  type: 'list',
                  member: {}
                },
                Type: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                CostAllocationTags: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['TagKey', 'Type', 'Status'],
                    members: {
                      TagKey: {},
                      Type: {},
                      Status: {},
                      LastUpdatedDate: {},
                      LastUsedDate: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListCostCategoryDefinitions: {
            input: {
              type: 'structure',
              members: {
                EffectiveOn: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                CostCategoryReferences: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      CostCategoryArn: {},
                      Name: {},
                      EffectiveStart: {},
                      EffectiveEnd: {},
                      NumberOfRules: {
                        type: 'integer'
                      },
                      ProcessingStatus: {
                        shape: 'S1s'
                      },
                      Values: {
                        shape: 'S3o'
                      },
                      DefaultValue: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListSavingsPlansPurchaseRecommendationGeneration: {
            input: {
              type: 'structure',
              members: {
                GenerationStatus: {},
                RecommendationIds: {
                  type: 'list',
                  member: {}
                },
                PageSize: {
                  type: 'integer'
                },
                NextPageToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                GenerationSummaryList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      RecommendationId: {},
                      GenerationStatus: {},
                      GenerationStartedTime: {},
                      GenerationCompletionTime: {},
                      EstimatedCompletionTime: {}
                    }
                  }
                },
                NextPageToken: {}
              }
            }
          },
          ListTagsForResource: {
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
                ResourceTags: {
                  shape: 'Sk'
                }
              }
            }
          },
          ProvideAnomalyFeedback: {
            input: {
              type: 'structure',
              required: ['AnomalyId', 'Feedback'],
              members: {
                AnomalyId: {},
                Feedback: {}
              }
            },
            output: {
              type: 'structure',
              required: ['AnomalyId'],
              members: {
                AnomalyId: {}
              }
            }
          },
          StartCostAllocationTagBackfill: {
            input: {
              type: 'structure',
              required: ['BackfillFrom'],
              members: {
                BackfillFrom: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                BackfillRequest: {
                  shape: 'S7t'
                }
              }
            }
          },
          StartSavingsPlansPurchaseRecommendationGeneration: {
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {
                RecommendationId: {},
                GenerationStartedTime: {},
                EstimatedCompletionTime: {}
              }
            }
          },
          TagResource: {
            input: {
              type: 'structure',
              required: ['ResourceArn', 'ResourceTags'],
              members: {
                ResourceArn: {},
                ResourceTags: {
                  shape: 'Sk'
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
              required: ['ResourceArn', 'ResourceTagKeys'],
              members: {
                ResourceArn: {},
                ResourceTagKeys: {
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
          UpdateAnomalyMonitor: {
            input: {
              type: 'structure',
              required: ['MonitorArn'],
              members: {
                MonitorArn: {},
                MonitorName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['MonitorArn'],
              members: {
                MonitorArn: {}
              }
            }
          },
          UpdateAnomalySubscription: {
            input: {
              type: 'structure',
              required: ['SubscriptionArn'],
              members: {
                SubscriptionArn: {},
                Threshold: {
                  deprecated: true,
                  deprecatedMessage: 'Threshold has been deprecated in favor of ThresholdExpression',
                  type: 'double'
                },
                Frequency: {},
                MonitorArnList: {
                  shape: 'Sr'
                },
                Subscribers: {
                  shape: 'St'
                },
                SubscriptionName: {},
                ThresholdExpression: {
                  shape: 'S7'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['SubscriptionArn'],
              members: {
                SubscriptionArn: {}
              }
            }
          },
          UpdateCostAllocationTagsStatus: {
            input: {
              type: 'structure',
              required: ['CostAllocationTagsStatus'],
              members: {
                CostAllocationTagsStatus: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['TagKey', 'Status'],
                    members: {
                      TagKey: {},
                      Status: {}
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Errors: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      TagKey: {},
                      Code: {},
                      Message: {}
                    }
                  }
                }
              }
            }
          },
          UpdateCostCategoryDefinition: {
            input: {
              type: 'structure',
              required: ['CostCategoryArn', 'RuleVersion', 'Rules'],
              members: {
                CostCategoryArn: {},
                EffectiveStart: {},
                RuleVersion: {},
                Rules: {
                  shape: 'S14'
                },
                DefaultValue: {},
                SplitChargeRules: {
                  shape: 'S1a'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                CostCategoryArn: {},
                EffectiveStart: {}
              }
            }
          }
        },
        shapes: {
          S2: {
            type: 'structure',
            required: ['MonitorName', 'MonitorType'],
            members: {
              MonitorArn: {},
              MonitorName: {},
              CreationDate: {},
              LastUpdatedDate: {},
              LastEvaluatedDate: {},
              MonitorType: {},
              MonitorDimension: {},
              MonitorSpecification: {
                shape: 'S7'
              },
              DimensionalValueCount: {
                type: 'integer'
              }
            }
          },
          S7: {
            type: 'structure',
            members: {
              Or: {
                shape: 'S8'
              },
              And: {
                shape: 'S8'
              },
              Not: {
                shape: 'S7'
              },
              Dimensions: {
                type: 'structure',
                members: {
                  Key: {},
                  Values: {
                    shape: 'Sb'
                  },
                  MatchOptions: {
                    shape: 'Sd'
                  }
                }
              },
              Tags: {
                shape: 'Sf'
              },
              CostCategories: {
                type: 'structure',
                members: {
                  Key: {},
                  Values: {
                    shape: 'Sb'
                  },
                  MatchOptions: {
                    shape: 'Sd'
                  }
                }
              }
            }
          },
          S8: {
            type: 'list',
            member: {
              shape: 'S7'
            }
          },
          Sb: {
            type: 'list',
            member: {}
          },
          Sd: {
            type: 'list',
            member: {}
          },
          Sf: {
            type: 'structure',
            members: {
              Key: {},
              Values: {
                shape: 'Sb'
              },
              MatchOptions: {
                shape: 'Sd'
              }
            }
          },
          Sk: {
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
          Sq: {
            type: 'structure',
            required: ['MonitorArnList', 'Subscribers', 'Frequency', 'SubscriptionName'],
            members: {
              SubscriptionArn: {},
              AccountId: {},
              MonitorArnList: {
                shape: 'Sr'
              },
              Subscribers: {
                shape: 'St'
              },
              Threshold: {
                deprecated: true,
                deprecatedMessage: 'Threshold has been deprecated in favor of ThresholdExpression',
                type: 'double'
              },
              Frequency: {},
              SubscriptionName: {},
              ThresholdExpression: {
                shape: 'S7'
              }
            }
          },
          Sr: {
            type: 'list',
            member: {}
          },
          St: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Address: {},
                Type: {},
                Status: {}
              }
            }
          },
          S14: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Value: {},
                Rule: {
                  shape: 'S7'
                },
                InheritedValue: {
                  type: 'structure',
                  members: {
                    DimensionName: {},
                    DimensionKey: {}
                  }
                },
                Type: {}
              }
            }
          },
          S1a: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Source', 'Targets', 'Method'],
              members: {
                Source: {},
                Targets: {
                  type: 'list',
                  member: {}
                },
                Method: {},
                Parameters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Type', 'Values'],
                    members: {
                      Type: {},
                      Values: {
                        type: 'list',
                        member: {}
                      }
                    }
                  }
                }
              }
            }
          },
          S1s: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Component: {},
                Status: {}
              }
            }
          },
          S2o: {
            type: 'structure',
            required: ['Start', 'End'],
            members: {
              Start: {},
              End: {}
            }
          },
          S2q: {
            type: 'list',
            member: {}
          },
          S2s: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Type: {},
                Key: {}
              }
            }
          },
          S2x: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                TimePeriod: {
                  shape: 'S2o'
                },
                Total: {
                  shape: 'S2z'
                },
                Groups: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Keys: {
                        type: 'list',
                        member: {}
                      },
                      Metrics: {
                        shape: 'S2z'
                      }
                    }
                  }
                },
                Estimated: {
                  type: 'boolean'
                }
              }
            }
          },
          S2z: {
            type: 'map',
            key: {},
            value: {
              shape: 'S30'
            }
          },
          S30: {
            type: 'structure',
            members: {
              Amount: {},
              Unit: {}
            }
          },
          S38: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Value: {},
                Attributes: {
                  shape: 'S3a'
                }
              }
            }
          },
          S3a: {
            type: 'map',
            key: {},
            value: {}
          },
          S3h: {
            type: 'list',
            member: {
              shape: 'S3i'
            }
          },
          S3i: {
            type: 'structure',
            required: ['Key'],
            members: {
              Key: {},
              SortOrder: {}
            }
          },
          S3o: {
            type: 'list',
            member: {}
          },
          S3t: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                TimePeriod: {
                  shape: 'S2o'
                },
                MeanValue: {},
                PredictionIntervalLowerBound: {},
                PredictionIntervalUpperBound: {}
              }
            }
          },
          S44: {
            type: 'structure',
            members: {
              CoverageHours: {
                type: 'structure',
                members: {
                  OnDemandHours: {},
                  ReservedHours: {},
                  TotalRunningHours: {},
                  CoverageHoursPercentage: {}
                }
              },
              CoverageNormalizedUnits: {
                type: 'structure',
                members: {
                  OnDemandNormalizedUnits: {},
                  ReservedNormalizedUnits: {},
                  TotalRunningNormalizedUnits: {},
                  CoverageNormalizedUnitsPercentage: {}
                }
              },
              CoverageCost: {
                type: 'structure',
                members: {
                  OnDemandCost: {}
                }
              }
            }
          },
          S4m: {
            type: 'structure',
            members: {
              EC2Specification: {
                type: 'structure',
                members: {
                  OfferingClass: {}
                }
              }
            }
          },
          S5c: {
            type: 'structure',
            members: {
              UtilizationPercentage: {},
              UtilizationPercentageInUnits: {},
              PurchasedHours: {},
              PurchasedUnits: {},
              TotalActualHours: {},
              TotalActualUnits: {},
              UnusedHours: {},
              UnusedUnits: {},
              OnDemandCostOfRIHoursUsed: {},
              NetRISavings: {},
              TotalPotentialRISavings: {},
              AmortizedUpfrontFee: {},
              AmortizedRecurringFee: {},
              TotalAmortizedFee: {},
              RICostForUnusedHours: {},
              RealizedSavings: {},
              UnrealizedSavings: {}
            }
          },
          S5v: {
            type: 'structure',
            required: ['RecommendationTarget', 'BenefitsConsidered'],
            members: {
              RecommendationTarget: {},
              BenefitsConsidered: {
                type: 'boolean'
              }
            }
          },
          S64: {
            type: 'structure',
            members: {
              EC2ResourceDetails: {
                type: 'structure',
                members: {
                  HourlyOnDemandRate: {},
                  InstanceType: {},
                  Platform: {},
                  Region: {},
                  Sku: {},
                  Memory: {},
                  NetworkPerformance: {},
                  Storage: {},
                  Vcpu: {}
                }
              }
            }
          },
          S66: {
            type: 'structure',
            members: {
              EC2ResourceUtilization: {
                type: 'structure',
                members: {
                  MaxCpuUtilizationPercentage: {},
                  MaxMemoryUtilizationPercentage: {},
                  MaxStorageUtilizationPercentage: {},
                  EBSResourceUtilization: {
                    type: 'structure',
                    members: {
                      EbsReadOpsPerSecond: {},
                      EbsWriteOpsPerSecond: {},
                      EbsReadBytesPerSecond: {},
                      EbsWriteBytesPerSecond: {}
                    }
                  },
                  DiskResourceUtilization: {
                    type: 'structure',
                    members: {
                      DiskReadOpsPerSecond: {},
                      DiskWriteOpsPerSecond: {},
                      DiskReadBytesPerSecond: {},
                      DiskWriteBytesPerSecond: {}
                    }
                  },
                  NetworkResourceUtilization: {
                    type: 'structure',
                    members: {
                      NetworkInBytesPerSecond: {},
                      NetworkOutBytesPerSecond: {},
                      NetworkPacketsInPerSecond: {},
                      NetworkPacketsOutPerSecond: {}
                    }
                  }
                }
              }
            }
          },
          S78: {
            type: 'structure',
            members: {
              TotalCommitment: {},
              UsedCommitment: {},
              UnusedCommitment: {},
              UtilizationPercentage: {}
            }
          },
          S79: {
            type: 'structure',
            members: {
              NetSavings: {},
              OnDemandCostEquivalent: {}
            }
          },
          S7a: {
            type: 'structure',
            members: {
              AmortizedRecurringCommitment: {},
              AmortizedUpfrontCommitment: {},
              TotalAmortizedCommitment: {}
            }
          },
          S7b: {
            type: 'structure',
            required: ['Utilization'],
            members: {
              Utilization: {
                shape: 'S78'
              },
              Savings: {
                shape: 'S79'
              },
              AmortizedCommitment: {
                shape: 'S7a'
              }
            }
          },
          S7t: {
            type: 'structure',
            members: {
              BackfillFrom: {},
              RequestedAt: {},
              CompletedAt: {},
              BackfillStatus: {},
              LastUpdatedAt: {}
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=ed4b1ce0bfb1bfdd89dfad5620ad96880414062d.js.map