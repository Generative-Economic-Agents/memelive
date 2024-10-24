System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2016-10-20',
          endpointPrefix: 'budgets',
          jsonVersion: '1.1',
          protocol: 'json',
          protocols: ['json'],
          serviceAbbreviation: 'AWSBudgets',
          serviceFullName: 'AWS Budgets',
          serviceId: 'Budgets',
          signatureVersion: 'v4',
          targetPrefix: 'AWSBudgetServiceGateway',
          uid: 'budgets-2016-10-20'
        },
        operations: {
          CreateBudget: {
            input: {
              type: 'structure',
              required: ['AccountId', 'Budget'],
              members: {
                AccountId: {},
                Budget: {
                  shape: 'S3'
                },
                NotificationsWithSubscribers: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Notification', 'Subscribers'],
                    members: {
                      Notification: {
                        shape: 'Sq'
                      },
                      Subscribers: {
                        shape: 'Sw'
                      }
                    }
                  }
                },
                ResourceTags: {
                  shape: 'S10'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          CreateBudgetAction: {
            input: {
              type: 'structure',
              required: ['AccountId', 'BudgetName', 'NotificationType', 'ActionType', 'ActionThreshold', 'Definition', 'ExecutionRoleArn', 'ApprovalModel', 'Subscribers'],
              members: {
                AccountId: {},
                BudgetName: {},
                NotificationType: {},
                ActionType: {},
                ActionThreshold: {
                  shape: 'S17'
                },
                Definition: {
                  shape: 'S18'
                },
                ExecutionRoleArn: {},
                ApprovalModel: {},
                Subscribers: {
                  shape: 'Sw'
                },
                ResourceTags: {
                  shape: 'S10'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['AccountId', 'BudgetName', 'ActionId'],
              members: {
                AccountId: {},
                BudgetName: {},
                ActionId: {}
              }
            }
          },
          CreateNotification: {
            input: {
              type: 'structure',
              required: ['AccountId', 'BudgetName', 'Notification', 'Subscribers'],
              members: {
                AccountId: {},
                BudgetName: {},
                Notification: {
                  shape: 'Sq'
                },
                Subscribers: {
                  shape: 'Sw'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          CreateSubscriber: {
            input: {
              type: 'structure',
              required: ['AccountId', 'BudgetName', 'Notification', 'Subscriber'],
              members: {
                AccountId: {},
                BudgetName: {},
                Notification: {
                  shape: 'Sq'
                },
                Subscriber: {
                  shape: 'Sx'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteBudget: {
            input: {
              type: 'structure',
              required: ['AccountId', 'BudgetName'],
              members: {
                AccountId: {},
                BudgetName: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteBudgetAction: {
            input: {
              type: 'structure',
              required: ['AccountId', 'BudgetName', 'ActionId'],
              members: {
                AccountId: {},
                BudgetName: {},
                ActionId: {}
              }
            },
            output: {
              type: 'structure',
              required: ['AccountId', 'BudgetName', 'Action'],
              members: {
                AccountId: {},
                BudgetName: {},
                Action: {
                  shape: 'S22'
                }
              }
            }
          },
          DeleteNotification: {
            input: {
              type: 'structure',
              required: ['AccountId', 'BudgetName', 'Notification'],
              members: {
                AccountId: {},
                BudgetName: {},
                Notification: {
                  shape: 'Sq'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteSubscriber: {
            input: {
              type: 'structure',
              required: ['AccountId', 'BudgetName', 'Notification', 'Subscriber'],
              members: {
                AccountId: {},
                BudgetName: {},
                Notification: {
                  shape: 'Sq'
                },
                Subscriber: {
                  shape: 'Sx'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DescribeBudget: {
            input: {
              type: 'structure',
              required: ['AccountId', 'BudgetName'],
              members: {
                AccountId: {},
                BudgetName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Budget: {
                  shape: 'S3'
                }
              }
            }
          },
          DescribeBudgetAction: {
            input: {
              type: 'structure',
              required: ['AccountId', 'BudgetName', 'ActionId'],
              members: {
                AccountId: {},
                BudgetName: {},
                ActionId: {}
              }
            },
            output: {
              type: 'structure',
              required: ['AccountId', 'BudgetName', 'Action'],
              members: {
                AccountId: {},
                BudgetName: {},
                Action: {
                  shape: 'S22'
                }
              }
            }
          },
          DescribeBudgetActionHistories: {
            input: {
              type: 'structure',
              required: ['AccountId', 'BudgetName', 'ActionId'],
              members: {
                AccountId: {},
                BudgetName: {},
                ActionId: {},
                TimePeriod: {
                  shape: 'Sg'
                },
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              required: ['ActionHistories'],
              members: {
                ActionHistories: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Timestamp', 'Status', 'EventType', 'ActionHistoryDetails'],
                    members: {
                      Timestamp: {
                        type: 'timestamp'
                      },
                      Status: {},
                      EventType: {},
                      ActionHistoryDetails: {
                        type: 'structure',
                        required: ['Message', 'Action'],
                        members: {
                          Message: {},
                          Action: {
                            shape: 'S22'
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
          DescribeBudgetActionsForAccount: {
            input: {
              type: 'structure',
              required: ['AccountId'],
              members: {
                AccountId: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              required: ['Actions'],
              members: {
                Actions: {
                  shape: 'S2l'
                },
                NextToken: {}
              }
            }
          },
          DescribeBudgetActionsForBudget: {
            input: {
              type: 'structure',
              required: ['AccountId', 'BudgetName'],
              members: {
                AccountId: {},
                BudgetName: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              required: ['Actions'],
              members: {
                Actions: {
                  shape: 'S2l'
                },
                NextToken: {}
              }
            }
          },
          DescribeBudgetNotificationsForAccount: {
            input: {
              type: 'structure',
              required: ['AccountId'],
              members: {
                AccountId: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                BudgetNotificationsForAccount: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Notifications: {
                        shape: 'S2t'
                      },
                      BudgetName: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeBudgetPerformanceHistory: {
            input: {
              type: 'structure',
              required: ['AccountId', 'BudgetName'],
              members: {
                AccountId: {},
                BudgetName: {},
                TimePeriod: {
                  shape: 'Sg'
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
                BudgetPerformanceHistory: {
                  type: 'structure',
                  members: {
                    BudgetName: {},
                    BudgetType: {},
                    CostFilters: {
                      shape: 'Sa'
                    },
                    CostTypes: {
                      shape: 'Sd'
                    },
                    TimeUnit: {},
                    BudgetedAndActualAmountsList: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          BudgetedAmount: {
                            shape: 'S5'
                          },
                          ActualAmount: {
                            shape: 'S5'
                          },
                          TimePeriod: {
                            shape: 'Sg'
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
          DescribeBudgets: {
            input: {
              type: 'structure',
              required: ['AccountId'],
              members: {
                AccountId: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Budgets: {
                  type: 'list',
                  member: {
                    shape: 'S3'
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeNotificationsForBudget: {
            input: {
              type: 'structure',
              required: ['AccountId', 'BudgetName'],
              members: {
                AccountId: {},
                BudgetName: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Notifications: {
                  shape: 'S2t'
                },
                NextToken: {}
              }
            }
          },
          DescribeSubscribersForNotification: {
            input: {
              type: 'structure',
              required: ['AccountId', 'BudgetName', 'Notification'],
              members: {
                AccountId: {},
                BudgetName: {},
                Notification: {
                  shape: 'Sq'
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
                Subscribers: {
                  shape: 'Sw'
                },
                NextToken: {}
              }
            }
          },
          ExecuteBudgetAction: {
            input: {
              type: 'structure',
              required: ['AccountId', 'BudgetName', 'ActionId', 'ExecutionType'],
              members: {
                AccountId: {},
                BudgetName: {},
                ActionId: {},
                ExecutionType: {}
              }
            },
            output: {
              type: 'structure',
              required: ['AccountId', 'BudgetName', 'ActionId', 'ExecutionType'],
              members: {
                AccountId: {},
                BudgetName: {},
                ActionId: {},
                ExecutionType: {}
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
                ResourceTags: {
                  shape: 'S10'
                }
              }
            }
          },
          TagResource: {
            input: {
              type: 'structure',
              required: ['ResourceARN', 'ResourceTags'],
              members: {
                ResourceARN: {},
                ResourceTags: {
                  shape: 'S10'
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
              required: ['ResourceARN', 'ResourceTagKeys'],
              members: {
                ResourceARN: {},
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
          UpdateBudget: {
            input: {
              type: 'structure',
              required: ['AccountId', 'NewBudget'],
              members: {
                AccountId: {},
                NewBudget: {
                  shape: 'S3'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateBudgetAction: {
            input: {
              type: 'structure',
              required: ['AccountId', 'BudgetName', 'ActionId'],
              members: {
                AccountId: {},
                BudgetName: {},
                ActionId: {},
                NotificationType: {},
                ActionThreshold: {
                  shape: 'S17'
                },
                Definition: {
                  shape: 'S18'
                },
                ExecutionRoleArn: {},
                ApprovalModel: {},
                Subscribers: {
                  shape: 'Sw'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['AccountId', 'BudgetName', 'OldAction', 'NewAction'],
              members: {
                AccountId: {},
                BudgetName: {},
                OldAction: {
                  shape: 'S22'
                },
                NewAction: {
                  shape: 'S22'
                }
              }
            }
          },
          UpdateNotification: {
            input: {
              type: 'structure',
              required: ['AccountId', 'BudgetName', 'OldNotification', 'NewNotification'],
              members: {
                AccountId: {},
                BudgetName: {},
                OldNotification: {
                  shape: 'Sq'
                },
                NewNotification: {
                  shape: 'Sq'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateSubscriber: {
            input: {
              type: 'structure',
              required: ['AccountId', 'BudgetName', 'Notification', 'OldSubscriber', 'NewSubscriber'],
              members: {
                AccountId: {},
                BudgetName: {},
                Notification: {
                  shape: 'Sq'
                },
                OldSubscriber: {
                  shape: 'Sx'
                },
                NewSubscriber: {
                  shape: 'Sx'
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
          S3: {
            type: 'structure',
            required: ['BudgetName', 'TimeUnit', 'BudgetType'],
            members: {
              BudgetName: {},
              BudgetLimit: {
                shape: 'S5'
              },
              PlannedBudgetLimits: {
                type: 'map',
                key: {},
                value: {
                  shape: 'S5'
                }
              },
              CostFilters: {
                shape: 'Sa'
              },
              CostTypes: {
                shape: 'Sd'
              },
              TimeUnit: {},
              TimePeriod: {
                shape: 'Sg'
              },
              CalculatedSpend: {
                type: 'structure',
                required: ['ActualSpend'],
                members: {
                  ActualSpend: {
                    shape: 'S5'
                  },
                  ForecastedSpend: {
                    shape: 'S5'
                  }
                }
              },
              BudgetType: {},
              LastUpdatedTime: {
                type: 'timestamp'
              },
              AutoAdjustData: {
                type: 'structure',
                required: ['AutoAdjustType'],
                members: {
                  AutoAdjustType: {},
                  HistoricalOptions: {
                    type: 'structure',
                    required: ['BudgetAdjustmentPeriod'],
                    members: {
                      BudgetAdjustmentPeriod: {
                        type: 'integer'
                      },
                      LookBackAvailablePeriods: {
                        type: 'integer'
                      }
                    }
                  },
                  LastAutoAdjustTime: {
                    type: 'timestamp'
                  }
                }
              }
            }
          },
          S5: {
            type: 'structure',
            required: ['Amount', 'Unit'],
            members: {
              Amount: {},
              Unit: {}
            }
          },
          Sa: {
            type: 'map',
            key: {},
            value: {
              type: 'list',
              member: {}
            }
          },
          Sd: {
            type: 'structure',
            members: {
              IncludeTax: {
                type: 'boolean'
              },
              IncludeSubscription: {
                type: 'boolean'
              },
              UseBlended: {
                type: 'boolean'
              },
              IncludeRefund: {
                type: 'boolean'
              },
              IncludeCredit: {
                type: 'boolean'
              },
              IncludeUpfront: {
                type: 'boolean'
              },
              IncludeRecurring: {
                type: 'boolean'
              },
              IncludeOtherSubscription: {
                type: 'boolean'
              },
              IncludeSupport: {
                type: 'boolean'
              },
              IncludeDiscount: {
                type: 'boolean'
              },
              UseAmortized: {
                type: 'boolean'
              }
            }
          },
          Sg: {
            type: 'structure',
            members: {
              Start: {
                type: 'timestamp'
              },
              End: {
                type: 'timestamp'
              }
            }
          },
          Sq: {
            type: 'structure',
            required: ['NotificationType', 'ComparisonOperator', 'Threshold'],
            members: {
              NotificationType: {},
              ComparisonOperator: {},
              Threshold: {
                type: 'double'
              },
              ThresholdType: {},
              NotificationState: {}
            }
          },
          Sw: {
            type: 'list',
            member: {
              shape: 'Sx'
            }
          },
          Sx: {
            type: 'structure',
            required: ['SubscriptionType', 'Address'],
            members: {
              SubscriptionType: {},
              Address: {
                type: 'string',
                sensitive: true
              }
            }
          },
          S10: {
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
          S17: {
            type: 'structure',
            required: ['ActionThresholdValue', 'ActionThresholdType'],
            members: {
              ActionThresholdValue: {
                type: 'double'
              },
              ActionThresholdType: {}
            }
          },
          S18: {
            type: 'structure',
            members: {
              IamActionDefinition: {
                type: 'structure',
                required: ['PolicyArn'],
                members: {
                  PolicyArn: {},
                  Roles: {
                    type: 'list',
                    member: {}
                  },
                  Groups: {
                    type: 'list',
                    member: {}
                  },
                  Users: {
                    type: 'list',
                    member: {}
                  }
                }
              },
              ScpActionDefinition: {
                type: 'structure',
                required: ['PolicyId', 'TargetIds'],
                members: {
                  PolicyId: {},
                  TargetIds: {
                    type: 'list',
                    member: {}
                  }
                }
              },
              SsmActionDefinition: {
                type: 'structure',
                required: ['ActionSubType', 'Region', 'InstanceIds'],
                members: {
                  ActionSubType: {},
                  Region: {},
                  InstanceIds: {
                    type: 'list',
                    member: {}
                  }
                }
              }
            }
          },
          S22: {
            type: 'structure',
            required: ['ActionId', 'BudgetName', 'NotificationType', 'ActionType', 'ActionThreshold', 'Definition', 'ExecutionRoleArn', 'ApprovalModel', 'Status', 'Subscribers'],
            members: {
              ActionId: {},
              BudgetName: {},
              NotificationType: {},
              ActionType: {},
              ActionThreshold: {
                shape: 'S17'
              },
              Definition: {
                shape: 'S18'
              },
              ExecutionRoleArn: {},
              ApprovalModel: {},
              Status: {},
              Subscribers: {
                shape: 'Sw'
              }
            }
          },
          S2l: {
            type: 'list',
            member: {
              shape: 'S22'
            }
          },
          S2t: {
            type: 'list',
            member: {
              shape: 'Sq'
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=b50cd0fc281e492474e65a476539c5ababef5167.js.map