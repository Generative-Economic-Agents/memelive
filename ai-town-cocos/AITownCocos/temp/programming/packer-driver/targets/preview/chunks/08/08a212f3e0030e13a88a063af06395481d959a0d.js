System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2021-07-30',
          endpointPrefix: 'billingconductor',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceFullName: 'AWSBillingConductor',
          serviceId: 'billingconductor',
          signatureVersion: 'v4',
          signingName: 'billingconductor',
          uid: 'billingconductor-2021-07-30'
        },
        operations: {
          AssociateAccounts: {
            http: {
              requestUri: '/associate-accounts',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['Arn', 'AccountIds'],
              members: {
                Arn: {},
                AccountIds: {
                  shape: 'S3'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {}
              }
            },
            idempotent: true
          },
          AssociatePricingRules: {
            http: {
              method: 'PUT',
              requestUri: '/associate-pricing-rules',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['Arn', 'PricingRuleArns'],
              members: {
                Arn: {},
                PricingRuleArns: {
                  shape: 'S8'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {}
              }
            },
            idempotent: true
          },
          BatchAssociateResourcesToCustomLineItem: {
            http: {
              method: 'PUT',
              requestUri: '/batch-associate-resources-to-custom-line-item',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['TargetArn', 'ResourceArns'],
              members: {
                TargetArn: {},
                ResourceArns: {
                  type: 'list',
                  member: {}
                },
                BillingPeriodRange: {
                  shape: 'Sf'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                SuccessfullyAssociatedResources: {
                  shape: 'Si'
                },
                FailedAssociatedResources: {
                  shape: 'Si'
                }
              }
            },
            idempotent: true
          },
          BatchDisassociateResourcesFromCustomLineItem: {
            http: {
              method: 'PUT',
              requestUri: '/batch-disassociate-resources-from-custom-line-item',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['TargetArn', 'ResourceArns'],
              members: {
                TargetArn: {},
                ResourceArns: {
                  type: 'list',
                  member: {}
                },
                BillingPeriodRange: {
                  shape: 'Sf'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                SuccessfullyDisassociatedResources: {
                  shape: 'Sq'
                },
                FailedDisassociatedResources: {
                  shape: 'Sq'
                }
              }
            },
            idempotent: true
          },
          CreateBillingGroup: {
            http: {
              requestUri: '/create-billing-group',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['Name', 'AccountGrouping', 'ComputationPreference'],
              members: {
                ClientToken: {
                  idempotencyToken: true,
                  location: 'header',
                  locationName: 'X-Amzn-Client-Token'
                },
                Name: {
                  shape: 'Su'
                },
                AccountGrouping: {
                  type: 'structure',
                  required: ['LinkedAccountIds'],
                  members: {
                    LinkedAccountIds: {
                      shape: 'S3'
                    },
                    AutoAssociate: {
                      type: 'boolean'
                    }
                  }
                },
                ComputationPreference: {
                  shape: 'Sx'
                },
                PrimaryAccountId: {},
                Description: {
                  shape: 'Sz'
                },
                Tags: {
                  shape: 'S10'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {}
              }
            },
            idempotent: true
          },
          CreateCustomLineItem: {
            http: {
              requestUri: '/create-custom-line-item',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['Name', 'Description', 'BillingGroupArn', 'ChargeDetails'],
              members: {
                ClientToken: {
                  idempotencyToken: true,
                  location: 'header',
                  locationName: 'X-Amzn-Client-Token'
                },
                Name: {
                  shape: 'S15'
                },
                Description: {
                  shape: 'S16'
                },
                BillingGroupArn: {},
                BillingPeriodRange: {
                  shape: 'Sf'
                },
                Tags: {
                  shape: 'S10'
                },
                ChargeDetails: {
                  type: 'structure',
                  required: ['Type'],
                  members: {
                    Flat: {
                      type: 'structure',
                      required: ['ChargeValue'],
                      members: {
                        ChargeValue: {
                          type: 'double'
                        }
                      }
                    },
                    Percentage: {
                      type: 'structure',
                      required: ['PercentageValue'],
                      members: {
                        PercentageValue: {
                          type: 'double'
                        },
                        AssociatedValues: {
                          type: 'list',
                          member: {}
                        }
                      }
                    },
                    Type: {},
                    LineItemFilters: {
                      shape: 'S1e'
                    }
                  }
                },
                AccountId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {}
              }
            }
          },
          CreatePricingPlan: {
            http: {
              requestUri: '/create-pricing-plan',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                ClientToken: {
                  idempotencyToken: true,
                  location: 'header',
                  locationName: 'X-Amzn-Client-Token'
                },
                Name: {
                  shape: 'S1m'
                },
                Description: {
                  shape: 'S1n'
                },
                PricingRuleArns: {
                  type: 'list',
                  member: {}
                },
                Tags: {
                  shape: 'S10'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {}
              }
            },
            idempotent: true
          },
          CreatePricingRule: {
            http: {
              requestUri: '/create-pricing-rule',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['Name', 'Scope', 'Type'],
              members: {
                ClientToken: {
                  idempotencyToken: true,
                  location: 'header',
                  locationName: 'X-Amzn-Client-Token'
                },
                Name: {
                  shape: 'S1r'
                },
                Description: {
                  shape: 'S1s'
                },
                Scope: {},
                Type: {},
                ModifierPercentage: {
                  type: 'double'
                },
                Service: {},
                Tags: {
                  shape: 'S10'
                },
                BillingEntity: {},
                Tiering: {
                  type: 'structure',
                  required: ['FreeTier'],
                  members: {
                    FreeTier: {
                      type: 'structure',
                      required: ['Activated'],
                      members: {
                        Activated: {
                          type: 'boolean'
                        }
                      }
                    }
                  }
                },
                UsageType: {},
                Operation: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {}
              }
            },
            idempotent: true
          },
          DeleteBillingGroup: {
            http: {
              requestUri: '/delete-billing-group',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['Arn'],
              members: {
                Arn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {}
              }
            },
            idempotent: true
          },
          DeleteCustomLineItem: {
            http: {
              requestUri: '/delete-custom-line-item',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['Arn'],
              members: {
                Arn: {},
                BillingPeriodRange: {
                  shape: 'Sf'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {}
              }
            },
            idempotent: true
          },
          DeletePricingPlan: {
            http: {
              requestUri: '/delete-pricing-plan',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['Arn'],
              members: {
                Arn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {}
              }
            },
            idempotent: true
          },
          DeletePricingRule: {
            http: {
              requestUri: '/delete-pricing-rule',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['Arn'],
              members: {
                Arn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {}
              }
            },
            idempotent: true
          },
          DisassociateAccounts: {
            http: {
              requestUri: '/disassociate-accounts',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['Arn', 'AccountIds'],
              members: {
                Arn: {},
                AccountIds: {
                  shape: 'S3'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {}
              }
            },
            idempotent: true
          },
          DisassociatePricingRules: {
            http: {
              method: 'PUT',
              requestUri: '/disassociate-pricing-rules',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['Arn', 'PricingRuleArns'],
              members: {
                Arn: {},
                PricingRuleArns: {
                  shape: 'S8'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {}
              }
            },
            idempotent: true
          },
          GetBillingGroupCostReport: {
            http: {
              requestUri: '/get-billing-group-cost-report',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['Arn'],
              members: {
                Arn: {},
                BillingPeriodRange: {
                  type: 'structure',
                  required: ['InclusiveStartBillingPeriod', 'ExclusiveEndBillingPeriod'],
                  members: {
                    InclusiveStartBillingPeriod: {},
                    ExclusiveEndBillingPeriod: {}
                  }
                },
                GroupBy: {
                  type: 'list',
                  member: {}
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
                BillingGroupCostReportResults: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Arn: {},
                      AWSCost: {},
                      ProformaCost: {},
                      Margin: {},
                      MarginPercentage: {},
                      Currency: {},
                      Attributes: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            Key: {},
                            Value: {}
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
          ListAccountAssociations: {
            http: {
              requestUri: '/list-account-associations',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                BillingPeriod: {},
                Filters: {
                  type: 'structure',
                  members: {
                    Association: {},
                    AccountId: {},
                    AccountIds: {
                      type: 'list',
                      member: {}
                    }
                  }
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                LinkedAccounts: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      AccountId: {},
                      BillingGroupArn: {},
                      AccountName: {
                        type: 'string',
                        sensitive: true
                      },
                      AccountEmail: {
                        type: 'string',
                        sensitive: true
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListBillingGroupCostReports: {
            http: {
              requestUri: '/list-billing-group-cost-reports',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                BillingPeriod: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {},
                Filters: {
                  type: 'structure',
                  members: {
                    BillingGroupArns: {
                      shape: 'S38'
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                BillingGroupCostReports: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Arn: {},
                      AWSCost: {},
                      ProformaCost: {},
                      Margin: {},
                      MarginPercentage: {},
                      Currency: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListBillingGroups: {
            http: {
              requestUri: '/list-billing-groups',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                BillingPeriod: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {},
                Filters: {
                  type: 'structure',
                  members: {
                    Arns: {
                      shape: 'S38'
                    },
                    PricingPlan: {},
                    Statuses: {
                      type: 'list',
                      member: {}
                    },
                    AutoAssociate: {
                      type: 'boolean'
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                BillingGroups: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Name: {
                        shape: 'Su'
                      },
                      Arn: {},
                      Description: {
                        shape: 'Sz'
                      },
                      PrimaryAccountId: {},
                      ComputationPreference: {
                        shape: 'Sx'
                      },
                      Size: {
                        type: 'long'
                      },
                      CreationTime: {
                        type: 'long'
                      },
                      LastModifiedTime: {
                        type: 'long'
                      },
                      Status: {},
                      StatusReason: {},
                      AccountGrouping: {
                        type: 'structure',
                        members: {
                          AutoAssociate: {
                            type: 'boolean'
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
          ListCustomLineItemVersions: {
            http: {
              requestUri: '/list-custom-line-item-versions',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['Arn'],
              members: {
                Arn: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {},
                Filters: {
                  type: 'structure',
                  members: {
                    BillingPeriodRange: {
                      type: 'structure',
                      members: {
                        StartBillingPeriod: {},
                        EndBillingPeriod: {}
                      }
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                CustomLineItemVersions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Name: {
                        shape: 'S15'
                      },
                      ChargeDetails: {
                        shape: 'S3u'
                      },
                      CurrencyCode: {},
                      Description: {
                        shape: 'S16'
                      },
                      ProductCode: {},
                      BillingGroupArn: {},
                      CreationTime: {
                        type: 'long'
                      },
                      LastModifiedTime: {
                        type: 'long'
                      },
                      AssociationSize: {
                        type: 'long'
                      },
                      StartBillingPeriod: {},
                      EndBillingPeriod: {},
                      Arn: {},
                      StartTime: {
                        type: 'long'
                      },
                      AccountId: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListCustomLineItems: {
            http: {
              requestUri: '/list-custom-line-items',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                BillingPeriod: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {},
                Filters: {
                  type: 'structure',
                  members: {
                    Names: {
                      type: 'list',
                      member: {
                        shape: 'S15'
                      }
                    },
                    BillingGroups: {
                      shape: 'S38'
                    },
                    Arns: {
                      type: 'list',
                      member: {}
                    },
                    AccountIds: {
                      shape: 'S3'
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                CustomLineItems: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Arn: {},
                      Name: {
                        shape: 'S15'
                      },
                      ChargeDetails: {
                        shape: 'S3u'
                      },
                      CurrencyCode: {},
                      Description: {
                        shape: 'S16'
                      },
                      ProductCode: {},
                      BillingGroupArn: {},
                      CreationTime: {
                        type: 'long'
                      },
                      LastModifiedTime: {
                        type: 'long'
                      },
                      AssociationSize: {
                        type: 'long'
                      },
                      AccountId: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListPricingPlans: {
            http: {
              requestUri: '/list-pricing-plans',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                BillingPeriod: {},
                Filters: {
                  type: 'structure',
                  members: {
                    Arns: {
                      shape: 'S49'
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
              members: {
                BillingPeriod: {},
                PricingPlans: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Name: {
                        shape: 'S1m'
                      },
                      Arn: {},
                      Description: {
                        shape: 'S1n'
                      },
                      Size: {
                        type: 'long'
                      },
                      CreationTime: {
                        type: 'long'
                      },
                      LastModifiedTime: {
                        type: 'long'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListPricingPlansAssociatedWithPricingRule: {
            http: {
              requestUri: '/list-pricing-plans-associated-with-pricing-rule',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['PricingRuleArn'],
              members: {
                BillingPeriod: {},
                PricingRuleArn: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                BillingPeriod: {},
                PricingRuleArn: {},
                PricingPlanArns: {
                  shape: 'S49'
                },
                NextToken: {}
              }
            }
          },
          ListPricingRules: {
            http: {
              requestUri: '/list-pricing-rules',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                BillingPeriod: {},
                Filters: {
                  type: 'structure',
                  members: {
                    Arns: {
                      shape: 'S4k'
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
              members: {
                BillingPeriod: {},
                PricingRules: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Name: {
                        shape: 'S1r'
                      },
                      Arn: {},
                      Description: {
                        shape: 'S1s'
                      },
                      Scope: {},
                      Type: {},
                      ModifierPercentage: {
                        type: 'double'
                      },
                      Service: {},
                      AssociatedPricingPlanCount: {
                        type: 'long'
                      },
                      CreationTime: {
                        type: 'long'
                      },
                      LastModifiedTime: {
                        type: 'long'
                      },
                      BillingEntity: {},
                      Tiering: {
                        type: 'structure',
                        required: ['FreeTier'],
                        members: {
                          FreeTier: {
                            type: 'structure',
                            required: ['Activated'],
                            members: {
                              Activated: {
                                type: 'boolean'
                              }
                            }
                          }
                        }
                      },
                      UsageType: {},
                      Operation: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListPricingRulesAssociatedToPricingPlan: {
            http: {
              requestUri: '/list-pricing-rules-associated-to-pricing-plan',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['PricingPlanArn'],
              members: {
                BillingPeriod: {},
                PricingPlanArn: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                BillingPeriod: {},
                PricingPlanArn: {},
                PricingRuleArns: {
                  shape: 'S4k'
                },
                NextToken: {}
              }
            }
          },
          ListResourcesAssociatedToCustomLineItem: {
            http: {
              requestUri: '/list-resources-associated-to-custom-line-item',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['Arn'],
              members: {
                BillingPeriod: {},
                Arn: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {},
                Filters: {
                  type: 'structure',
                  members: {
                    Relationship: {}
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                AssociatedResources: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Arn: {},
                      Relationship: {},
                      EndBillingPeriod: {}
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
              requestUri: '/tags/{ResourceArn}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['ResourceArn'],
              members: {
                ResourceArn: {
                  location: 'uri',
                  locationName: 'ResourceArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Tags: {
                  shape: 'S10'
                }
              }
            }
          },
          TagResource: {
            http: {
              requestUri: '/tags/{ResourceArn}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['ResourceArn', 'Tags'],
              members: {
                ResourceArn: {
                  location: 'uri',
                  locationName: 'ResourceArn'
                },
                Tags: {
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
            http: {
              method: 'DELETE',
              requestUri: '/tags/{ResourceArn}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['ResourceArn', 'TagKeys'],
              members: {
                ResourceArn: {
                  location: 'uri',
                  locationName: 'ResourceArn'
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
          UpdateBillingGroup: {
            http: {
              requestUri: '/update-billing-group',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['Arn'],
              members: {
                Arn: {},
                Name: {
                  shape: 'Su'
                },
                Status: {},
                ComputationPreference: {
                  shape: 'Sx'
                },
                Description: {
                  shape: 'Sz'
                },
                AccountGrouping: {
                  shape: 'S58'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                Name: {
                  shape: 'Su'
                },
                Description: {
                  shape: 'Sz'
                },
                PrimaryAccountId: {},
                PricingPlanArn: {},
                Size: {
                  type: 'long'
                },
                LastModifiedTime: {
                  type: 'long'
                },
                Status: {},
                StatusReason: {},
                AccountGrouping: {
                  shape: 'S58'
                }
              }
            },
            idempotent: true
          },
          UpdateCustomLineItem: {
            http: {
              requestUri: '/update-custom-line-item',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['Arn'],
              members: {
                Arn: {},
                Name: {
                  shape: 'S15'
                },
                Description: {
                  shape: 'S16'
                },
                ChargeDetails: {
                  type: 'structure',
                  members: {
                    Flat: {
                      type: 'structure',
                      required: ['ChargeValue'],
                      members: {
                        ChargeValue: {
                          type: 'double'
                        }
                      }
                    },
                    Percentage: {
                      type: 'structure',
                      required: ['PercentageValue'],
                      members: {
                        PercentageValue: {
                          type: 'double'
                        }
                      }
                    },
                    LineItemFilters: {
                      shape: 'S1e'
                    }
                  }
                },
                BillingPeriodRange: {
                  shape: 'Sf'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                BillingGroupArn: {},
                Name: {
                  shape: 'S15'
                },
                Description: {
                  shape: 'S16'
                },
                ChargeDetails: {
                  shape: 'S3u'
                },
                LastModifiedTime: {
                  type: 'long'
                },
                AssociationSize: {
                  type: 'long'
                }
              }
            },
            idempotent: true
          },
          UpdatePricingPlan: {
            http: {
              method: 'PUT',
              requestUri: '/update-pricing-plan',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['Arn'],
              members: {
                Arn: {},
                Name: {
                  shape: 'S1m'
                },
                Description: {
                  shape: 'S1n'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                Name: {
                  shape: 'S1m'
                },
                Description: {
                  shape: 'S1n'
                },
                Size: {
                  type: 'long'
                },
                LastModifiedTime: {
                  type: 'long'
                }
              }
            },
            idempotent: true
          },
          UpdatePricingRule: {
            http: {
              method: 'PUT',
              requestUri: '/update-pricing-rule',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['Arn'],
              members: {
                Arn: {},
                Name: {
                  shape: 'S1r'
                },
                Description: {
                  shape: 'S1s'
                },
                Type: {},
                ModifierPercentage: {
                  type: 'double'
                },
                Tiering: {
                  shape: 'S5j'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                Name: {
                  shape: 'S1r'
                },
                Description: {
                  shape: 'S1s'
                },
                Scope: {},
                Type: {},
                ModifierPercentage: {
                  type: 'double'
                },
                Service: {},
                AssociatedPricingPlanCount: {
                  type: 'long'
                },
                LastModifiedTime: {
                  type: 'long'
                },
                BillingEntity: {},
                Tiering: {
                  shape: 'S5j'
                },
                UsageType: {},
                Operation: {}
              }
            },
            idempotent: true
          }
        },
        shapes: {
          S3: {
            type: 'list',
            member: {}
          },
          S8: {
            type: 'list',
            member: {}
          },
          Sf: {
            type: 'structure',
            required: ['InclusiveStartBillingPeriod'],
            members: {
              InclusiveStartBillingPeriod: {},
              ExclusiveEndBillingPeriod: {}
            }
          },
          Si: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Arn: {},
                Error: {
                  shape: 'Sk'
                }
              }
            }
          },
          Sk: {
            type: 'structure',
            members: {
              Message: {},
              Reason: {}
            }
          },
          Sq: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Arn: {},
                Error: {
                  shape: 'Sk'
                }
              }
            }
          },
          Su: {
            type: 'string',
            sensitive: true
          },
          Sx: {
            type: 'structure',
            required: ['PricingPlanArn'],
            members: {
              PricingPlanArn: {}
            }
          },
          Sz: {
            type: 'string',
            sensitive: true
          },
          S10: {
            type: 'map',
            key: {},
            value: {}
          },
          S15: {
            type: 'string',
            sensitive: true
          },
          S16: {
            type: 'string',
            sensitive: true
          },
          S1e: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Attribute', 'MatchOption', 'Values'],
              members: {
                Attribute: {},
                MatchOption: {},
                Values: {
                  type: 'list',
                  member: {}
                }
              }
            }
          },
          S1m: {
            type: 'string',
            sensitive: true
          },
          S1n: {
            type: 'string',
            sensitive: true
          },
          S1r: {
            type: 'string',
            sensitive: true
          },
          S1s: {
            type: 'string',
            sensitive: true
          },
          S38: {
            type: 'list',
            member: {}
          },
          S3u: {
            type: 'structure',
            required: ['Type'],
            members: {
              Flat: {
                type: 'structure',
                required: ['ChargeValue'],
                members: {
                  ChargeValue: {
                    type: 'double'
                  }
                }
              },
              Percentage: {
                type: 'structure',
                required: ['PercentageValue'],
                members: {
                  PercentageValue: {
                    type: 'double'
                  }
                }
              },
              Type: {},
              LineItemFilters: {
                shape: 'S1e'
              }
            }
          },
          S49: {
            type: 'list',
            member: {}
          },
          S4k: {
            type: 'list',
            member: {}
          },
          S58: {
            type: 'structure',
            members: {
              AutoAssociate: {
                type: 'boolean'
              }
            }
          },
          S5j: {
            type: 'structure',
            required: ['FreeTier'],
            members: {
              FreeTier: {
                type: 'structure',
                required: ['Activated'],
                members: {
                  Activated: {
                    type: 'boolean'
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
//# sourceMappingURL=08a212f3e0030e13a88a063af06395481d959a0d.js.map