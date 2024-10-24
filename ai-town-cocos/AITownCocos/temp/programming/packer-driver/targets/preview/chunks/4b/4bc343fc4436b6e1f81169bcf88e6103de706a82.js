System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2022-07-26',
          endpointPrefix: 'cost-optimization-hub',
          jsonVersion: '1.0',
          protocol: 'json',
          serviceFullName: 'Cost Optimization Hub',
          serviceId: 'Cost Optimization Hub',
          signatureVersion: 'v4',
          signingName: 'cost-optimization-hub',
          targetPrefix: 'CostOptimizationHubService',
          uid: 'cost-optimization-hub-2022-07-26'
        },
        operations: {
          GetPreferences: {
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {
                memberAccountDiscountVisibility: {},
                savingsEstimationMode: {}
              }
            }
          },
          GetRecommendation: {
            input: {
              type: 'structure',
              required: ['recommendationId'],
              members: {
                recommendationId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                accountId: {},
                actionType: {},
                costCalculationLookbackPeriodInDays: {
                  type: 'integer'
                },
                currencyCode: {},
                currentResourceDetails: {
                  shape: 'Sa'
                },
                currentResourceType: {},
                estimatedMonthlyCost: {
                  type: 'double'
                },
                estimatedMonthlySavings: {
                  type: 'double'
                },
                estimatedSavingsOverCostCalculationLookbackPeriod: {
                  type: 'double'
                },
                estimatedSavingsPercentage: {
                  type: 'double'
                },
                implementationEffort: {},
                lastRefreshTimestamp: {
                  type: 'timestamp'
                },
                recommendationId: {},
                recommendationLookbackPeriodInDays: {
                  type: 'integer'
                },
                recommendedResourceDetails: {
                  shape: 'Sa'
                },
                recommendedResourceType: {},
                region: {},
                resourceArn: {},
                resourceId: {},
                restartNeeded: {
                  type: 'boolean'
                },
                rollbackPossible: {
                  type: 'boolean'
                },
                source: {},
                tags: {
                  shape: 'S1k'
                }
              }
            }
          },
          ListEnrollmentStatuses: {
            input: {
              type: 'structure',
              members: {
                accountId: {},
                includeOrganizationInfo: {
                  type: 'boolean'
                },
                maxResults: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                includeMemberAccounts: {
                  type: 'boolean'
                },
                items: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      accountId: {},
                      createdTimestamp: {
                        type: 'timestamp'
                      },
                      lastUpdatedTimestamp: {
                        type: 'timestamp'
                      },
                      status: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListRecommendationSummaries: {
            input: {
              type: 'structure',
              required: ['groupBy'],
              members: {
                filter: {
                  shape: 'S1w'
                },
                groupBy: {},
                maxResults: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                currencyCode: {},
                estimatedTotalDedupedSavings: {
                  type: 'double'
                },
                groupBy: {},
                items: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      estimatedMonthlySavings: {
                        type: 'double'
                      },
                      group: {},
                      recommendationCount: {
                        type: 'integer'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListRecommendations: {
            input: {
              type: 'structure',
              members: {
                filter: {
                  shape: 'S1w'
                },
                includeAllRecommendations: {
                  type: 'boolean'
                },
                maxResults: {
                  type: 'integer'
                },
                nextToken: {},
                orderBy: {
                  type: 'structure',
                  members: {
                    dimension: {},
                    order: {}
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                items: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      accountId: {},
                      actionType: {},
                      currencyCode: {},
                      currentResourceSummary: {},
                      currentResourceType: {},
                      estimatedMonthlyCost: {
                        type: 'double'
                      },
                      estimatedMonthlySavings: {
                        type: 'double'
                      },
                      estimatedSavingsPercentage: {
                        type: 'double'
                      },
                      implementationEffort: {},
                      lastRefreshTimestamp: {
                        type: 'timestamp'
                      },
                      recommendationId: {},
                      recommendationLookbackPeriodInDays: {
                        type: 'integer'
                      },
                      recommendedResourceSummary: {},
                      recommendedResourceType: {},
                      region: {},
                      resourceArn: {},
                      resourceId: {},
                      restartNeeded: {
                        type: 'boolean'
                      },
                      rollbackPossible: {
                        type: 'boolean'
                      },
                      source: {},
                      tags: {
                        shape: 'S1k'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          UpdateEnrollmentStatus: {
            input: {
              type: 'structure',
              required: ['status'],
              members: {
                includeMemberAccounts: {
                  type: 'boolean'
                },
                status: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                status: {}
              }
            }
          },
          UpdatePreferences: {
            input: {
              type: 'structure',
              members: {
                memberAccountDiscountVisibility: {},
                savingsEstimationMode: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                memberAccountDiscountVisibility: {},
                savingsEstimationMode: {}
              }
            }
          }
        },
        shapes: {
          Sa: {
            type: 'structure',
            members: {
              computeSavingsPlans: {
                type: 'structure',
                members: {
                  configuration: {
                    type: 'structure',
                    members: {
                      accountScope: {},
                      hourlyCommitment: {},
                      paymentOption: {},
                      term: {}
                    }
                  },
                  costCalculation: {
                    shape: 'Sd'
                  }
                }
              },
              ebsVolume: {
                type: 'structure',
                members: {
                  configuration: {
                    type: 'structure',
                    members: {
                      attachmentState: {},
                      performance: {
                        type: 'structure',
                        members: {
                          iops: {
                            type: 'double'
                          },
                          throughput: {
                            type: 'double'
                          }
                        }
                      },
                      storage: {
                        type: 'structure',
                        members: {
                          sizeInGb: {
                            type: 'double'
                          },
                          type: {}
                        }
                      }
                    }
                  },
                  costCalculation: {
                    shape: 'Sk'
                  }
                }
              },
              ec2AutoScalingGroup: {
                type: 'structure',
                members: {
                  configuration: {
                    type: 'structure',
                    members: {
                      instance: {
                        shape: 'Sr'
                      }
                    }
                  },
                  costCalculation: {
                    shape: 'Sk'
                  }
                }
              },
              ec2Instance: {
                type: 'structure',
                members: {
                  configuration: {
                    type: 'structure',
                    members: {
                      instance: {
                        shape: 'Sr'
                      }
                    }
                  },
                  costCalculation: {
                    shape: 'Sk'
                  }
                }
              },
              ec2InstanceSavingsPlans: {
                type: 'structure',
                members: {
                  configuration: {
                    type: 'structure',
                    members: {
                      accountScope: {},
                      hourlyCommitment: {},
                      instanceFamily: {},
                      paymentOption: {},
                      savingsPlansRegion: {},
                      term: {}
                    }
                  },
                  costCalculation: {
                    shape: 'Sd'
                  }
                }
              },
              ec2ReservedInstances: {
                type: 'structure',
                members: {
                  configuration: {
                    type: 'structure',
                    members: {
                      accountScope: {},
                      currentGeneration: {},
                      instanceFamily: {},
                      instanceType: {},
                      monthlyRecurringCost: {},
                      normalizedUnitsToPurchase: {},
                      numberOfInstancesToPurchase: {},
                      offeringClass: {},
                      paymentOption: {},
                      platform: {},
                      reservedInstancesRegion: {},
                      service: {},
                      sizeFlexEligible: {
                        type: 'boolean'
                      },
                      tenancy: {},
                      term: {},
                      upfrontCost: {}
                    }
                  },
                  costCalculation: {
                    shape: 'Sz'
                  }
                }
              },
              ecsService: {
                type: 'structure',
                members: {
                  configuration: {
                    type: 'structure',
                    members: {
                      compute: {
                        shape: 'S13'
                      }
                    }
                  },
                  costCalculation: {
                    shape: 'Sk'
                  }
                }
              },
              elastiCacheReservedInstances: {
                type: 'structure',
                members: {
                  configuration: {
                    type: 'structure',
                    members: {
                      accountScope: {},
                      currentGeneration: {},
                      instanceFamily: {},
                      instanceType: {},
                      monthlyRecurringCost: {},
                      normalizedUnitsToPurchase: {},
                      numberOfInstancesToPurchase: {},
                      paymentOption: {},
                      reservedInstancesRegion: {},
                      service: {},
                      sizeFlexEligible: {
                        type: 'boolean'
                      },
                      term: {},
                      upfrontCost: {}
                    }
                  },
                  costCalculation: {
                    shape: 'Sz'
                  }
                }
              },
              lambdaFunction: {
                type: 'structure',
                members: {
                  configuration: {
                    type: 'structure',
                    members: {
                      compute: {
                        shape: 'S13'
                      }
                    }
                  },
                  costCalculation: {
                    shape: 'Sk'
                  }
                }
              },
              openSearchReservedInstances: {
                type: 'structure',
                members: {
                  configuration: {
                    type: 'structure',
                    members: {
                      accountScope: {},
                      currentGeneration: {},
                      instanceType: {},
                      monthlyRecurringCost: {},
                      normalizedUnitsToPurchase: {},
                      numberOfInstancesToPurchase: {},
                      paymentOption: {},
                      reservedInstancesRegion: {},
                      service: {},
                      sizeFlexEligible: {
                        type: 'boolean'
                      },
                      term: {},
                      upfrontCost: {}
                    }
                  },
                  costCalculation: {
                    shape: 'Sz'
                  }
                }
              },
              rdsReservedInstances: {
                type: 'structure',
                members: {
                  configuration: {
                    type: 'structure',
                    members: {
                      accountScope: {},
                      currentGeneration: {},
                      databaseEdition: {},
                      databaseEngine: {},
                      deploymentOption: {},
                      instanceFamily: {},
                      instanceType: {},
                      licenseModel: {},
                      monthlyRecurringCost: {},
                      normalizedUnitsToPurchase: {},
                      numberOfInstancesToPurchase: {},
                      paymentOption: {},
                      reservedInstancesRegion: {},
                      service: {},
                      sizeFlexEligible: {
                        type: 'boolean'
                      },
                      term: {},
                      upfrontCost: {}
                    }
                  },
                  costCalculation: {
                    shape: 'Sz'
                  }
                }
              },
              redshiftReservedInstances: {
                type: 'structure',
                members: {
                  configuration: {
                    type: 'structure',
                    members: {
                      accountScope: {},
                      currentGeneration: {},
                      instanceFamily: {},
                      instanceType: {},
                      monthlyRecurringCost: {},
                      normalizedUnitsToPurchase: {},
                      numberOfInstancesToPurchase: {},
                      paymentOption: {},
                      reservedInstancesRegion: {},
                      service: {},
                      sizeFlexEligible: {
                        type: 'boolean'
                      },
                      term: {},
                      upfrontCost: {}
                    }
                  },
                  costCalculation: {
                    shape: 'Sz'
                  }
                }
              },
              sageMakerSavingsPlans: {
                type: 'structure',
                members: {
                  configuration: {
                    type: 'structure',
                    members: {
                      accountScope: {},
                      hourlyCommitment: {},
                      paymentOption: {},
                      term: {}
                    }
                  },
                  costCalculation: {
                    shape: 'Sd'
                  }
                }
              }
            },
            union: true
          },
          Sd: {
            type: 'structure',
            members: {
              pricing: {
                type: 'structure',
                members: {
                  estimatedMonthlyCommitment: {
                    type: 'double'
                  },
                  estimatedOnDemandCost: {
                    type: 'double'
                  },
                  monthlySavingsPlansEligibleCost: {
                    type: 'double'
                  },
                  savingsPercentage: {
                    type: 'double'
                  }
                }
              }
            }
          },
          Sk: {
            type: 'structure',
            members: {
              pricing: {
                type: 'structure',
                members: {
                  estimatedCostAfterDiscounts: {
                    type: 'double'
                  },
                  estimatedCostBeforeDiscounts: {
                    type: 'double'
                  },
                  estimatedDiscounts: {
                    type: 'structure',
                    members: {
                      otherDiscount: {
                        type: 'double'
                      },
                      reservedInstancesDiscount: {
                        type: 'double'
                      },
                      savingsPlansDiscount: {
                        type: 'double'
                      }
                    }
                  },
                  estimatedNetUnusedAmortizedCommitments: {
                    type: 'double'
                  }
                }
              },
              usages: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    operation: {},
                    productCode: {},
                    unit: {},
                    usageAmount: {
                      type: 'double'
                    },
                    usageType: {}
                  }
                }
              }
            }
          },
          Sr: {
            type: 'structure',
            members: {
              type: {}
            }
          },
          Sz: {
            type: 'structure',
            members: {
              pricing: {
                type: 'structure',
                members: {
                  estimatedMonthlyAmortizedReservationCost: {
                    type: 'double'
                  },
                  estimatedOnDemandCost: {
                    type: 'double'
                  },
                  monthlyReservationEligibleCost: {
                    type: 'double'
                  },
                  savingsPercentage: {
                    type: 'double'
                  }
                }
              }
            }
          },
          S13: {
            type: 'structure',
            members: {
              architecture: {},
              memorySizeInMB: {
                type: 'integer'
              },
              platform: {},
              vCpu: {
                type: 'double'
              }
            }
          },
          S1k: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                key: {},
                value: {}
              }
            }
          },
          S1w: {
            type: 'structure',
            members: {
              accountIds: {
                type: 'list',
                member: {}
              },
              actionTypes: {
                type: 'list',
                member: {}
              },
              implementationEfforts: {
                type: 'list',
                member: {}
              },
              recommendationIds: {
                type: 'list',
                member: {}
              },
              regions: {
                type: 'list',
                member: {}
              },
              resourceArns: {
                type: 'list',
                member: {}
              },
              resourceIds: {
                type: 'list',
                member: {}
              },
              resourceTypes: {
                type: 'list',
                member: {}
              },
              restartNeeded: {
                type: 'boolean'
              },
              rollbackPossible: {
                type: 'boolean'
              },
              tags: {
                shape: 'S1k'
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=4bc343fc4436b6e1f81169bcf88e6103de706a82.js.map