System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2019-11-01',
          endpointPrefix: 'compute-optimizer',
          jsonVersion: '1.0',
          protocol: 'json',
          serviceFullName: 'AWS Compute Optimizer',
          serviceId: 'Compute Optimizer',
          signatureVersion: 'v4',
          signingName: 'compute-optimizer',
          targetPrefix: 'ComputeOptimizerService',
          uid: 'compute-optimizer-2019-11-01'
        },
        operations: {
          DeleteRecommendationPreferences: {
            input: {
              type: 'structure',
              required: ['resourceType', 'recommendationPreferenceNames'],
              members: {
                resourceType: {},
                scope: {
                  shape: 'S3'
                },
                recommendationPreferenceNames: {
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
          DescribeRecommendationExportJobs: {
            input: {
              type: 'structure',
              members: {
                jobIds: {
                  type: 'list',
                  member: {}
                },
                filters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      name: {},
                      values: {
                        shape: 'Sf'
                      }
                    }
                  }
                },
                nextToken: {},
                maxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                recommendationExportJobs: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      jobId: {},
                      destination: {
                        type: 'structure',
                        members: {
                          s3: {
                            shape: 'Sn'
                          }
                        }
                      },
                      resourceType: {},
                      status: {},
                      creationTimestamp: {
                        type: 'timestamp'
                      },
                      lastUpdatedTimestamp: {
                        type: 'timestamp'
                      },
                      failureReason: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ExportAutoScalingGroupRecommendations: {
            input: {
              type: 'structure',
              required: ['s3DestinationConfig'],
              members: {
                accountIds: {
                  shape: 'Sw'
                },
                filters: {
                  shape: 'Sy'
                },
                fieldsToExport: {
                  type: 'list',
                  member: {}
                },
                s3DestinationConfig: {
                  shape: 'S13'
                },
                fileFormat: {},
                includeMemberAccounts: {
                  type: 'boolean'
                },
                recommendationPreferences: {
                  shape: 'S17'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                jobId: {},
                s3Destination: {
                  shape: 'Sn'
                }
              }
            }
          },
          ExportEBSVolumeRecommendations: {
            input: {
              type: 'structure',
              required: ['s3DestinationConfig'],
              members: {
                accountIds: {
                  shape: 'Sw'
                },
                filters: {
                  shape: 'S1c'
                },
                fieldsToExport: {
                  type: 'list',
                  member: {}
                },
                s3DestinationConfig: {
                  shape: 'S13'
                },
                fileFormat: {},
                includeMemberAccounts: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                jobId: {},
                s3Destination: {
                  shape: 'Sn'
                }
              }
            }
          },
          ExportEC2InstanceRecommendations: {
            input: {
              type: 'structure',
              required: ['s3DestinationConfig'],
              members: {
                accountIds: {
                  shape: 'Sw'
                },
                filters: {
                  shape: 'Sy'
                },
                fieldsToExport: {
                  type: 'list',
                  member: {}
                },
                s3DestinationConfig: {
                  shape: 'S13'
                },
                fileFormat: {},
                includeMemberAccounts: {
                  type: 'boolean'
                },
                recommendationPreferences: {
                  shape: 'S17'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                jobId: {},
                s3Destination: {
                  shape: 'Sn'
                }
              }
            }
          },
          ExportECSServiceRecommendations: {
            input: {
              type: 'structure',
              required: ['s3DestinationConfig'],
              members: {
                accountIds: {
                  shape: 'Sw'
                },
                filters: {
                  shape: 'S1n'
                },
                fieldsToExport: {
                  type: 'list',
                  member: {}
                },
                s3DestinationConfig: {
                  shape: 'S13'
                },
                fileFormat: {},
                includeMemberAccounts: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                jobId: {},
                s3Destination: {
                  shape: 'Sn'
                }
              }
            }
          },
          ExportLambdaFunctionRecommendations: {
            input: {
              type: 'structure',
              required: ['s3DestinationConfig'],
              members: {
                accountIds: {
                  shape: 'Sw'
                },
                filters: {
                  shape: 'S1u'
                },
                fieldsToExport: {
                  type: 'list',
                  member: {}
                },
                s3DestinationConfig: {
                  shape: 'S13'
                },
                fileFormat: {},
                includeMemberAccounts: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                jobId: {},
                s3Destination: {
                  shape: 'Sn'
                }
              }
            }
          },
          ExportLicenseRecommendations: {
            input: {
              type: 'structure',
              required: ['s3DestinationConfig'],
              members: {
                accountIds: {
                  shape: 'Sw'
                },
                filters: {
                  shape: 'S21'
                },
                fieldsToExport: {
                  type: 'list',
                  member: {}
                },
                s3DestinationConfig: {
                  shape: 'S13'
                },
                fileFormat: {},
                includeMemberAccounts: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                jobId: {},
                s3Destination: {
                  shape: 'Sn'
                }
              }
            }
          },
          GetAutoScalingGroupRecommendations: {
            input: {
              type: 'structure',
              members: {
                accountIds: {
                  shape: 'Sw'
                },
                autoScalingGroupArns: {
                  type: 'list',
                  member: {}
                },
                nextToken: {},
                maxResults: {
                  type: 'integer'
                },
                filters: {
                  shape: 'Sy'
                },
                recommendationPreferences: {
                  shape: 'S17'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                nextToken: {},
                autoScalingGroupRecommendations: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      accountId: {},
                      autoScalingGroupArn: {},
                      autoScalingGroupName: {},
                      finding: {},
                      utilizationMetrics: {
                        shape: 'S2f'
                      },
                      lookBackPeriodInDays: {
                        type: 'double'
                      },
                      currentConfiguration: {
                        shape: 'S2l'
                      },
                      recommendationOptions: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            configuration: {
                              shape: 'S2l'
                            },
                            projectedUtilizationMetrics: {
                              shape: 'S2s'
                            },
                            performanceRisk: {
                              type: 'double'
                            },
                            rank: {
                              type: 'integer'
                            },
                            savingsOpportunity: {
                              shape: 'S2v'
                            },
                            migrationEffort: {},
                            instanceGpuInfo: {
                              shape: 'S31'
                            },
                            savingsOpportunityAfterDiscounts: {
                              type: 'structure',
                              members: {
                                savingsOpportunityPercentage: {
                                  type: 'double'
                                },
                                estimatedMonthlySavings: {
                                  type: 'structure',
                                  members: {
                                    currency: {},
                                    value: {
                                      type: 'double'
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      lastRefreshTimestamp: {
                        type: 'timestamp'
                      },
                      currentPerformanceRisk: {},
                      effectiveRecommendationPreferences: {
                        shape: 'S3a'
                      },
                      inferredWorkloadTypes: {
                        shape: 'S3t'
                      },
                      currentInstanceGpuInfo: {
                        shape: 'S31'
                      }
                    }
                  }
                },
                errors: {
                  shape: 'S3v'
                }
              }
            }
          },
          GetEBSVolumeRecommendations: {
            input: {
              type: 'structure',
              members: {
                volumeArns: {
                  type: 'list',
                  member: {}
                },
                nextToken: {},
                maxResults: {
                  type: 'integer'
                },
                filters: {
                  shape: 'S1c'
                },
                accountIds: {
                  shape: 'Sw'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                nextToken: {},
                volumeRecommendations: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      volumeArn: {},
                      accountId: {},
                      currentConfiguration: {
                        shape: 'S46'
                      },
                      finding: {},
                      utilizationMetrics: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            name: {},
                            statistic: {},
                            value: {
                              type: 'double'
                            }
                          }
                        }
                      },
                      lookBackPeriodInDays: {
                        type: 'double'
                      },
                      volumeRecommendationOptions: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            configuration: {
                              shape: 'S46'
                            },
                            performanceRisk: {
                              type: 'double'
                            },
                            rank: {
                              type: 'integer'
                            },
                            savingsOpportunity: {
                              shape: 'S2v'
                            },
                            savingsOpportunityAfterDiscounts: {
                              type: 'structure',
                              members: {
                                savingsOpportunityPercentage: {
                                  type: 'double'
                                },
                                estimatedMonthlySavings: {
                                  type: 'structure',
                                  members: {
                                    currency: {},
                                    value: {
                                      type: 'double'
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      lastRefreshTimestamp: {
                        type: 'timestamp'
                      },
                      currentPerformanceRisk: {},
                      tags: {
                        shape: 'S4m'
                      },
                      effectiveRecommendationPreferences: {
                        type: 'structure',
                        members: {
                          savingsEstimationMode: {
                            type: 'structure',
                            members: {
                              source: {}
                            }
                          }
                        }
                      }
                    }
                  }
                },
                errors: {
                  shape: 'S3v'
                }
              }
            }
          },
          GetEC2InstanceRecommendations: {
            input: {
              type: 'structure',
              members: {
                instanceArns: {
                  type: 'list',
                  member: {}
                },
                nextToken: {},
                maxResults: {
                  type: 'integer'
                },
                filters: {
                  shape: 'Sy'
                },
                accountIds: {
                  shape: 'Sw'
                },
                recommendationPreferences: {
                  shape: 'S17'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                nextToken: {},
                instanceRecommendations: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      instanceArn: {},
                      accountId: {},
                      instanceName: {},
                      currentInstanceType: {},
                      finding: {},
                      findingReasonCodes: {
                        type: 'list',
                        member: {}
                      },
                      utilizationMetrics: {
                        shape: 'S2f'
                      },
                      lookBackPeriodInDays: {
                        type: 'double'
                      },
                      recommendationOptions: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            instanceType: {},
                            projectedUtilizationMetrics: {
                              shape: 'S2s'
                            },
                            platformDifferences: {
                              type: 'list',
                              member: {}
                            },
                            performanceRisk: {
                              type: 'double'
                            },
                            rank: {
                              type: 'integer'
                            },
                            savingsOpportunity: {
                              shape: 'S2v'
                            },
                            migrationEffort: {},
                            instanceGpuInfo: {
                              shape: 'S31'
                            },
                            savingsOpportunityAfterDiscounts: {
                              type: 'structure',
                              members: {
                                savingsOpportunityPercentage: {
                                  type: 'double'
                                },
                                estimatedMonthlySavings: {
                                  type: 'structure',
                                  members: {
                                    currency: {},
                                    value: {
                                      type: 'double'
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      recommendationSources: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            recommendationSourceArn: {},
                            recommendationSourceType: {}
                          }
                        }
                      },
                      lastRefreshTimestamp: {
                        type: 'timestamp'
                      },
                      currentPerformanceRisk: {},
                      effectiveRecommendationPreferences: {
                        shape: 'S3a'
                      },
                      inferredWorkloadTypes: {
                        shape: 'S3t'
                      },
                      instanceState: {},
                      tags: {
                        shape: 'S4m'
                      },
                      externalMetricStatus: {
                        type: 'structure',
                        members: {
                          statusCode: {},
                          statusReason: {}
                        }
                      },
                      currentInstanceGpuInfo: {
                        shape: 'S31'
                      },
                      idle: {}
                    }
                  }
                },
                errors: {
                  shape: 'S3v'
                }
              }
            }
          },
          GetEC2RecommendationProjectedMetrics: {
            input: {
              type: 'structure',
              required: ['instanceArn', 'stat', 'period', 'startTime', 'endTime'],
              members: {
                instanceArn: {},
                stat: {},
                period: {
                  type: 'integer'
                },
                startTime: {
                  type: 'timestamp'
                },
                endTime: {
                  type: 'timestamp'
                },
                recommendationPreferences: {
                  shape: 'S17'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                recommendedOptionProjectedMetrics: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      recommendedInstanceType: {},
                      rank: {
                        type: 'integer'
                      },
                      projectedMetrics: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            name: {},
                            timestamps: {
                              shape: 'S5r'
                            },
                            values: {
                              shape: 'S5s'
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
          GetECSServiceRecommendationProjectedMetrics: {
            input: {
              type: 'structure',
              required: ['serviceArn', 'stat', 'period', 'startTime', 'endTime'],
              members: {
                serviceArn: {},
                stat: {},
                period: {
                  type: 'integer'
                },
                startTime: {
                  type: 'timestamp'
                },
                endTime: {
                  type: 'timestamp'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                recommendedOptionProjectedMetrics: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      recommendedCpuUnits: {
                        type: 'integer'
                      },
                      recommendedMemorySize: {
                        type: 'integer'
                      },
                      projectedMetrics: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            name: {},
                            timestamps: {
                              shape: 'S5r'
                            },
                            upperBoundValues: {
                              shape: 'S5s'
                            },
                            lowerBoundValues: {
                              shape: 'S5s'
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
          GetECSServiceRecommendations: {
            input: {
              type: 'structure',
              members: {
                serviceArns: {
                  type: 'list',
                  member: {}
                },
                nextToken: {},
                maxResults: {
                  type: 'integer'
                },
                filters: {
                  shape: 'S1n'
                },
                accountIds: {
                  shape: 'Sw'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                nextToken: {},
                ecsServiceRecommendations: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      serviceArn: {},
                      accountId: {},
                      currentServiceConfiguration: {
                        type: 'structure',
                        members: {
                          memory: {
                            type: 'integer'
                          },
                          cpu: {
                            type: 'integer'
                          },
                          containerConfigurations: {
                            type: 'list',
                            member: {
                              type: 'structure',
                              members: {
                                containerName: {},
                                memorySizeConfiguration: {
                                  shape: 'S6e'
                                },
                                cpu: {
                                  type: 'integer'
                                }
                              }
                            }
                          },
                          autoScalingConfiguration: {},
                          taskDefinitionArn: {}
                        }
                      },
                      utilizationMetrics: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            name: {},
                            statistic: {},
                            value: {
                              type: 'double'
                            }
                          }
                        }
                      },
                      lookbackPeriodInDays: {
                        type: 'double'
                      },
                      launchType: {},
                      lastRefreshTimestamp: {
                        type: 'timestamp'
                      },
                      finding: {},
                      findingReasonCodes: {
                        type: 'list',
                        member: {}
                      },
                      serviceRecommendationOptions: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            memory: {
                              type: 'integer'
                            },
                            cpu: {
                              type: 'integer'
                            },
                            savingsOpportunity: {
                              shape: 'S2v'
                            },
                            projectedUtilizationMetrics: {
                              type: 'list',
                              member: {
                                type: 'structure',
                                members: {
                                  name: {},
                                  statistic: {},
                                  lowerBoundValue: {
                                    type: 'double'
                                  },
                                  upperBoundValue: {
                                    type: 'double'
                                  }
                                }
                              }
                            },
                            containerRecommendations: {
                              type: 'list',
                              member: {
                                type: 'structure',
                                members: {
                                  containerName: {},
                                  memorySizeConfiguration: {
                                    shape: 'S6e'
                                  },
                                  cpu: {
                                    type: 'integer'
                                  }
                                }
                              }
                            },
                            savingsOpportunityAfterDiscounts: {
                              type: 'structure',
                              members: {
                                savingsOpportunityPercentage: {
                                  type: 'double'
                                },
                                estimatedMonthlySavings: {
                                  type: 'structure',
                                  members: {
                                    currency: {},
                                    value: {
                                      type: 'double'
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      currentPerformanceRisk: {},
                      tags: {
                        shape: 'S4m'
                      },
                      effectiveRecommendationPreferences: {
                        type: 'structure',
                        members: {
                          savingsEstimationMode: {
                            type: 'structure',
                            members: {
                              source: {}
                            }
                          }
                        }
                      }
                    }
                  }
                },
                errors: {
                  shape: 'S3v'
                }
              }
            }
          },
          GetEffectiveRecommendationPreferences: {
            input: {
              type: 'structure',
              required: ['resourceArn'],
              members: {
                resourceArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                enhancedInfrastructureMetrics: {},
                externalMetricsPreference: {
                  shape: 'S3d'
                },
                lookBackPeriod: {},
                utilizationPreferences: {
                  shape: 'S3g'
                },
                preferredResources: {
                  shape: 'S3m'
                }
              }
            }
          },
          GetEnrollmentStatus: {
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {
                status: {},
                statusReason: {},
                memberAccountsEnrolled: {
                  type: 'boolean'
                },
                lastUpdatedTimestamp: {
                  type: 'timestamp'
                },
                numberOfMemberAccountsOptedIn: {
                  type: 'integer'
                }
              }
            }
          },
          GetEnrollmentStatusesForOrganization: {
            input: {
              type: 'structure',
              members: {
                filters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      name: {},
                      values: {
                        shape: 'Sf'
                      }
                    }
                  }
                },
                nextToken: {},
                maxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                accountEnrollmentStatuses: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      accountId: {},
                      status: {},
                      statusReason: {},
                      lastUpdatedTimestamp: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          GetLambdaFunctionRecommendations: {
            input: {
              type: 'structure',
              members: {
                functionArns: {
                  type: 'list',
                  member: {}
                },
                accountIds: {
                  shape: 'Sw'
                },
                filters: {
                  shape: 'S1u'
                },
                nextToken: {},
                maxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                nextToken: {},
                lambdaFunctionRecommendations: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      functionArn: {},
                      functionVersion: {},
                      accountId: {},
                      currentMemorySize: {
                        type: 'integer'
                      },
                      numberOfInvocations: {
                        type: 'long'
                      },
                      utilizationMetrics: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            name: {},
                            statistic: {},
                            value: {
                              type: 'double'
                            }
                          }
                        }
                      },
                      lookbackPeriodInDays: {
                        type: 'double'
                      },
                      lastRefreshTimestamp: {
                        type: 'timestamp'
                      },
                      finding: {},
                      findingReasonCodes: {
                        type: 'list',
                        member: {}
                      },
                      memorySizeRecommendationOptions: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            rank: {
                              type: 'integer'
                            },
                            memorySize: {
                              type: 'integer'
                            },
                            projectedUtilizationMetrics: {
                              type: 'list',
                              member: {
                                type: 'structure',
                                members: {
                                  name: {},
                                  statistic: {},
                                  value: {
                                    type: 'double'
                                  }
                                }
                              }
                            },
                            savingsOpportunity: {
                              shape: 'S2v'
                            },
                            savingsOpportunityAfterDiscounts: {
                              type: 'structure',
                              members: {
                                savingsOpportunityPercentage: {
                                  type: 'double'
                                },
                                estimatedMonthlySavings: {
                                  type: 'structure',
                                  members: {
                                    currency: {},
                                    value: {
                                      type: 'double'
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      currentPerformanceRisk: {},
                      tags: {
                        shape: 'S4m'
                      },
                      effectiveRecommendationPreferences: {
                        type: 'structure',
                        members: {
                          savingsEstimationMode: {
                            type: 'structure',
                            members: {
                              source: {}
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
          GetLicenseRecommendations: {
            input: {
              type: 'structure',
              members: {
                resourceArns: {
                  type: 'list',
                  member: {}
                },
                nextToken: {},
                maxResults: {
                  type: 'integer'
                },
                filters: {
                  shape: 'S21'
                },
                accountIds: {
                  shape: 'Sw'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                nextToken: {},
                licenseRecommendations: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      resourceArn: {},
                      accountId: {},
                      currentLicenseConfiguration: {
                        type: 'structure',
                        members: {
                          numberOfCores: {
                            type: 'integer'
                          },
                          instanceType: {},
                          operatingSystem: {},
                          licenseEdition: {},
                          licenseName: {},
                          licenseModel: {},
                          licenseVersion: {},
                          metricsSource: {
                            type: 'list',
                            member: {
                              type: 'structure',
                              members: {
                                provider: {},
                                providerArn: {}
                              }
                            }
                          }
                        }
                      },
                      lookbackPeriodInDays: {
                        type: 'double'
                      },
                      lastRefreshTimestamp: {
                        type: 'timestamp'
                      },
                      finding: {},
                      findingReasonCodes: {
                        type: 'list',
                        member: {}
                      },
                      licenseRecommendationOptions: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            rank: {
                              type: 'integer'
                            },
                            operatingSystem: {},
                            licenseEdition: {},
                            licenseModel: {},
                            savingsOpportunity: {
                              shape: 'S2v'
                            }
                          }
                        }
                      },
                      tags: {
                        shape: 'S4m'
                      }
                    }
                  }
                },
                errors: {
                  shape: 'S3v'
                }
              }
            }
          },
          GetRecommendationPreferences: {
            input: {
              type: 'structure',
              required: ['resourceType'],
              members: {
                resourceType: {},
                scope: {
                  shape: 'S3'
                },
                nextToken: {},
                maxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                nextToken: {},
                recommendationPreferencesDetails: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      scope: {
                        shape: 'S3'
                      },
                      resourceType: {},
                      enhancedInfrastructureMetrics: {},
                      inferredWorkloadTypes: {},
                      externalMetricsPreference: {
                        shape: 'S3d'
                      },
                      lookBackPeriod: {},
                      utilizationPreferences: {
                        shape: 'S3g'
                      },
                      preferredResources: {
                        shape: 'S3m'
                      },
                      savingsEstimationMode: {}
                    }
                  }
                }
              }
            }
          },
          GetRecommendationSummaries: {
            input: {
              type: 'structure',
              members: {
                accountIds: {
                  shape: 'Sw'
                },
                nextToken: {},
                maxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                nextToken: {},
                recommendationSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      summaries: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            name: {},
                            value: {
                              type: 'double'
                            },
                            reasonCodeSummaries: {
                              type: 'list',
                              member: {
                                type: 'structure',
                                members: {
                                  name: {},
                                  value: {
                                    type: 'double'
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      recommendationResourceType: {},
                      accountId: {},
                      savingsOpportunity: {
                        shape: 'S2v'
                      },
                      currentPerformanceRiskRatings: {
                        type: 'structure',
                        members: {
                          high: {
                            type: 'long'
                          },
                          medium: {
                            type: 'long'
                          },
                          low: {
                            type: 'long'
                          },
                          veryLow: {
                            type: 'long'
                          }
                        }
                      },
                      inferredWorkloadSavings: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            inferredWorkloadTypes: {
                              shape: 'S3t'
                            },
                            estimatedMonthlySavings: {
                              shape: 'S2x'
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
          PutRecommendationPreferences: {
            input: {
              type: 'structure',
              required: ['resourceType'],
              members: {
                resourceType: {},
                scope: {
                  shape: 'S3'
                },
                enhancedInfrastructureMetrics: {},
                inferredWorkloadTypes: {},
                externalMetricsPreference: {
                  shape: 'S3d'
                },
                lookBackPeriod: {},
                utilizationPreferences: {
                  shape: 'S3g'
                },
                preferredResources: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      name: {},
                      includeList: {
                        shape: 'S3p'
                      },
                      excludeList: {
                        shape: 'S3p'
                      }
                    }
                  }
                },
                savingsEstimationMode: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateEnrollmentStatus: {
            input: {
              type: 'structure',
              required: ['status'],
              members: {
                status: {},
                includeMemberAccounts: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                status: {},
                statusReason: {}
              }
            }
          }
        },
        shapes: {
          S3: {
            type: 'structure',
            members: {
              name: {},
              value: {}
            }
          },
          Sf: {
            type: 'list',
            member: {}
          },
          Sn: {
            type: 'structure',
            members: {
              bucket: {},
              key: {},
              metadataKey: {}
            }
          },
          Sw: {
            type: 'list',
            member: {}
          },
          Sy: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                name: {},
                values: {
                  shape: 'Sf'
                }
              }
            }
          },
          S13: {
            type: 'structure',
            members: {
              bucket: {},
              keyPrefix: {}
            }
          },
          S17: {
            type: 'structure',
            members: {
              cpuVendorArchitectures: {
                shape: 'S18'
              }
            }
          },
          S18: {
            type: 'list',
            member: {}
          },
          S1c: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                name: {},
                values: {
                  shape: 'Sf'
                }
              }
            }
          },
          S1n: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                name: {},
                values: {
                  shape: 'Sf'
                }
              }
            }
          },
          S1u: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                name: {},
                values: {
                  shape: 'Sf'
                }
              }
            }
          },
          S21: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                name: {},
                values: {
                  shape: 'Sf'
                }
              }
            }
          },
          S2f: {
            type: 'list',
            member: {
              shape: 'S2g'
            }
          },
          S2g: {
            type: 'structure',
            members: {
              name: {},
              statistic: {},
              value: {
                type: 'double'
              }
            }
          },
          S2l: {
            type: 'structure',
            members: {
              desiredCapacity: {
                type: 'integer'
              },
              minSize: {
                type: 'integer'
              },
              maxSize: {
                type: 'integer'
              },
              instanceType: {}
            }
          },
          S2s: {
            type: 'list',
            member: {
              shape: 'S2g'
            }
          },
          S2v: {
            type: 'structure',
            members: {
              savingsOpportunityPercentage: {
                type: 'double'
              },
              estimatedMonthlySavings: {
                shape: 'S2x'
              }
            }
          },
          S2x: {
            type: 'structure',
            members: {
              currency: {},
              value: {
                type: 'double'
              }
            }
          },
          S31: {
            type: 'structure',
            members: {
              gpus: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    gpuCount: {
                      type: 'integer'
                    },
                    gpuMemorySizeInMiB: {
                      type: 'integer'
                    }
                  }
                }
              }
            }
          },
          S3a: {
            type: 'structure',
            members: {
              cpuVendorArchitectures: {
                shape: 'S18'
              },
              enhancedInfrastructureMetrics: {},
              inferredWorkloadTypes: {},
              externalMetricsPreference: {
                shape: 'S3d'
              },
              lookBackPeriod: {},
              utilizationPreferences: {
                shape: 'S3g'
              },
              preferredResources: {
                shape: 'S3m'
              },
              savingsEstimationMode: {
                type: 'structure',
                members: {
                  source: {}
                }
              }
            }
          },
          S3d: {
            type: 'structure',
            members: {
              source: {}
            }
          },
          S3g: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                metricName: {},
                metricParameters: {
                  type: 'structure',
                  members: {
                    threshold: {},
                    headroom: {}
                  }
                }
              }
            }
          },
          S3m: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                name: {},
                includeList: {
                  shape: 'S3p'
                },
                effectiveIncludeList: {
                  shape: 'S3p'
                },
                excludeList: {
                  shape: 'S3p'
                }
              }
            }
          },
          S3p: {
            type: 'list',
            member: {}
          },
          S3t: {
            type: 'list',
            member: {}
          },
          S3v: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                identifier: {},
                code: {},
                message: {}
              }
            }
          },
          S46: {
            type: 'structure',
            members: {
              volumeType: {},
              volumeSize: {
                type: 'integer'
              },
              volumeBaselineIOPS: {
                type: 'integer'
              },
              volumeBurstIOPS: {
                type: 'integer'
              },
              volumeBaselineThroughput: {
                type: 'integer'
              },
              volumeBurstThroughput: {
                type: 'integer'
              },
              rootVolume: {
                type: 'boolean'
              }
            }
          },
          S4m: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                key: {},
                value: {}
              }
            }
          },
          S5r: {
            type: 'list',
            member: {
              type: 'timestamp'
            }
          },
          S5s: {
            type: 'list',
            member: {
              type: 'double'
            }
          },
          S6e: {
            type: 'structure',
            members: {
              memory: {
                type: 'integer'
              },
              memoryReservation: {
                type: 'integer'
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=4c1e7aa87cd072e23d82e243c217d08691448c5f.js.map