System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2015-12-10',
          endpointPrefix: 'servicecatalog',
          jsonVersion: '1.1',
          protocol: 'json',
          serviceFullName: 'AWS Service Catalog',
          serviceId: 'Service Catalog',
          signatureVersion: 'v4',
          targetPrefix: 'AWS242ServiceCatalogService',
          uid: 'servicecatalog-2015-12-10'
        },
        operations: {
          AcceptPortfolioShare: {
            input: {
              type: 'structure',
              required: ['PortfolioId'],
              members: {
                AcceptLanguage: {},
                PortfolioId: {},
                PortfolioShareType: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          AssociateBudgetWithResource: {
            input: {
              type: 'structure',
              required: ['BudgetName', 'ResourceId'],
              members: {
                BudgetName: {},
                ResourceId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          AssociatePrincipalWithPortfolio: {
            input: {
              type: 'structure',
              required: ['PortfolioId', 'PrincipalARN', 'PrincipalType'],
              members: {
                AcceptLanguage: {},
                PortfolioId: {},
                PrincipalARN: {},
                PrincipalType: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          AssociateProductWithPortfolio: {
            input: {
              type: 'structure',
              required: ['ProductId', 'PortfolioId'],
              members: {
                AcceptLanguage: {},
                ProductId: {},
                PortfolioId: {},
                SourcePortfolioId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          AssociateServiceActionWithProvisioningArtifact: {
            input: {
              type: 'structure',
              required: ['ProductId', 'ProvisioningArtifactId', 'ServiceActionId'],
              members: {
                ProductId: {},
                ProvisioningArtifactId: {},
                ServiceActionId: {},
                AcceptLanguage: {},
                IdempotencyToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          AssociateTagOptionWithResource: {
            input: {
              type: 'structure',
              required: ['ResourceId', 'TagOptionId'],
              members: {
                ResourceId: {},
                TagOptionId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          BatchAssociateServiceActionWithProvisioningArtifact: {
            input: {
              type: 'structure',
              required: ['ServiceActionAssociations'],
              members: {
                ServiceActionAssociations: {
                  shape: 'Sn'
                },
                AcceptLanguage: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                FailedServiceActionAssociations: {
                  shape: 'Sq'
                }
              }
            }
          },
          BatchDisassociateServiceActionFromProvisioningArtifact: {
            input: {
              type: 'structure',
              required: ['ServiceActionAssociations'],
              members: {
                ServiceActionAssociations: {
                  shape: 'Sn'
                },
                AcceptLanguage: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                FailedServiceActionAssociations: {
                  shape: 'Sq'
                }
              }
            }
          },
          CopyProduct: {
            input: {
              type: 'structure',
              required: ['SourceProductArn', 'IdempotencyToken'],
              members: {
                AcceptLanguage: {},
                SourceProductArn: {},
                TargetProductId: {},
                TargetProductName: {},
                SourceProvisioningArtifactIdentifiers: {
                  type: 'list',
                  member: {
                    type: 'map',
                    key: {},
                    value: {}
                  }
                },
                CopyOptions: {
                  type: 'list',
                  member: {}
                },
                IdempotencyToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                CopyProductToken: {}
              }
            }
          },
          CreateConstraint: {
            input: {
              type: 'structure',
              required: ['PortfolioId', 'ProductId', 'Parameters', 'Type', 'IdempotencyToken'],
              members: {
                AcceptLanguage: {},
                PortfolioId: {},
                ProductId: {},
                Parameters: {},
                Type: {},
                Description: {},
                IdempotencyToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ConstraintDetail: {
                  shape: 'S1b'
                },
                ConstraintParameters: {},
                Status: {}
              }
            }
          },
          CreatePortfolio: {
            input: {
              type: 'structure',
              required: ['DisplayName', 'ProviderName', 'IdempotencyToken'],
              members: {
                AcceptLanguage: {},
                DisplayName: {},
                Description: {},
                ProviderName: {},
                Tags: {
                  shape: 'S1i'
                },
                IdempotencyToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                PortfolioDetail: {
                  shape: 'S1n'
                },
                Tags: {
                  shape: 'S1q'
                }
              }
            }
          },
          CreatePortfolioShare: {
            input: {
              type: 'structure',
              required: ['PortfolioId'],
              members: {
                AcceptLanguage: {},
                PortfolioId: {},
                AccountId: {},
                OrganizationNode: {
                  shape: 'S1s'
                },
                ShareTagOptions: {
                  type: 'boolean'
                },
                SharePrincipals: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                PortfolioShareToken: {}
              }
            }
          },
          CreateProduct: {
            input: {
              type: 'structure',
              required: ['Name', 'Owner', 'ProductType', 'IdempotencyToken'],
              members: {
                AcceptLanguage: {},
                Name: {},
                Owner: {},
                Description: {},
                Distributor: {},
                SupportDescription: {},
                SupportEmail: {},
                SupportUrl: {},
                ProductType: {},
                Tags: {
                  shape: 'S1i'
                },
                ProvisioningArtifactParameters: {
                  shape: 'S24'
                },
                IdempotencyToken: {
                  idempotencyToken: true
                },
                SourceConnection: {
                  shape: 'S2c'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ProductViewDetail: {
                  shape: 'S2l'
                },
                ProvisioningArtifactDetail: {
                  shape: 'S2w'
                },
                Tags: {
                  shape: 'S1q'
                }
              }
            }
          },
          CreateProvisionedProductPlan: {
            input: {
              type: 'structure',
              required: ['PlanName', 'PlanType', 'ProductId', 'ProvisionedProductName', 'ProvisioningArtifactId', 'IdempotencyToken'],
              members: {
                AcceptLanguage: {},
                PlanName: {},
                PlanType: {},
                NotificationArns: {
                  shape: 'S33'
                },
                PathId: {},
                ProductId: {},
                ProvisionedProductName: {},
                ProvisioningArtifactId: {},
                ProvisioningParameters: {
                  shape: 'S36'
                },
                IdempotencyToken: {
                  idempotencyToken: true
                },
                Tags: {
                  shape: 'S1q'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                PlanName: {},
                PlanId: {},
                ProvisionProductId: {},
                ProvisionedProductName: {},
                ProvisioningArtifactId: {}
              }
            }
          },
          CreateProvisioningArtifact: {
            input: {
              type: 'structure',
              required: ['ProductId', 'Parameters', 'IdempotencyToken'],
              members: {
                AcceptLanguage: {},
                ProductId: {},
                Parameters: {
                  shape: 'S24'
                },
                IdempotencyToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ProvisioningArtifactDetail: {
                  shape: 'S2w'
                },
                Info: {
                  shape: 'S27'
                },
                Status: {}
              }
            }
          },
          CreateServiceAction: {
            input: {
              type: 'structure',
              required: ['Name', 'DefinitionType', 'Definition', 'IdempotencyToken'],
              members: {
                Name: {},
                DefinitionType: {},
                Definition: {
                  shape: 'S3h'
                },
                Description: {},
                AcceptLanguage: {},
                IdempotencyToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ServiceActionDetail: {
                  shape: 'S3m'
                }
              }
            }
          },
          CreateTagOption: {
            input: {
              type: 'structure',
              required: ['Key', 'Value'],
              members: {
                Key: {},
                Value: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                TagOptionDetail: {
                  shape: 'S3s'
                }
              }
            }
          },
          DeleteConstraint: {
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                AcceptLanguage: {},
                Id: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeletePortfolio: {
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                AcceptLanguage: {},
                Id: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeletePortfolioShare: {
            input: {
              type: 'structure',
              required: ['PortfolioId'],
              members: {
                AcceptLanguage: {},
                PortfolioId: {},
                AccountId: {},
                OrganizationNode: {
                  shape: 'S1s'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                PortfolioShareToken: {}
              }
            }
          },
          DeleteProduct: {
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                AcceptLanguage: {},
                Id: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteProvisionedProductPlan: {
            input: {
              type: 'structure',
              required: ['PlanId'],
              members: {
                AcceptLanguage: {},
                PlanId: {},
                IgnoreErrors: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteProvisioningArtifact: {
            input: {
              type: 'structure',
              required: ['ProductId', 'ProvisioningArtifactId'],
              members: {
                AcceptLanguage: {},
                ProductId: {},
                ProvisioningArtifactId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteServiceAction: {
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {},
                AcceptLanguage: {},
                IdempotencyToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteTagOption: {
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DescribeConstraint: {
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                AcceptLanguage: {},
                Id: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ConstraintDetail: {
                  shape: 'S1b'
                },
                ConstraintParameters: {},
                Status: {}
              }
            }
          },
          DescribeCopyProductStatus: {
            input: {
              type: 'structure',
              required: ['CopyProductToken'],
              members: {
                AcceptLanguage: {},
                CopyProductToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                CopyProductStatus: {},
                TargetProductId: {},
                StatusDetail: {}
              }
            }
          },
          DescribePortfolio: {
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                AcceptLanguage: {},
                Id: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                PortfolioDetail: {
                  shape: 'S1n'
                },
                Tags: {
                  shape: 'S1q'
                },
                TagOptions: {
                  shape: 'S4k'
                },
                Budgets: {
                  shape: 'S4l'
                }
              }
            }
          },
          DescribePortfolioShareStatus: {
            input: {
              type: 'structure',
              required: ['PortfolioShareToken'],
              members: {
                PortfolioShareToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                PortfolioShareToken: {},
                PortfolioId: {},
                OrganizationNodeValue: {},
                Status: {},
                ShareDetails: {
                  type: 'structure',
                  members: {
                    SuccessfulShares: {
                      type: 'list',
                      member: {}
                    },
                    ShareErrors: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          Accounts: {
                            type: 'list',
                            member: {}
                          },
                          Message: {},
                          Error: {}
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          DescribePortfolioShares: {
            input: {
              type: 'structure',
              required: ['PortfolioId', 'Type'],
              members: {
                PortfolioId: {},
                Type: {},
                PageToken: {},
                PageSize: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NextPageToken: {},
                PortfolioShareDetails: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      PrincipalId: {},
                      Type: {},
                      Accepted: {
                        type: 'boolean'
                      },
                      ShareTagOptions: {
                        type: 'boolean'
                      },
                      SharePrincipals: {
                        type: 'boolean'
                      }
                    }
                  }
                }
              }
            }
          },
          DescribeProduct: {
            input: {
              type: 'structure',
              members: {
                AcceptLanguage: {},
                Id: {},
                Name: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ProductViewSummary: {
                  shape: 'S2m'
                },
                ProvisioningArtifacts: {
                  shape: 'S56'
                },
                Budgets: {
                  shape: 'S4l'
                },
                LaunchPaths: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Id: {},
                      Name: {}
                    }
                  }
                }
              }
            }
          },
          DescribeProductAsAdmin: {
            input: {
              type: 'structure',
              members: {
                AcceptLanguage: {},
                Id: {},
                Name: {},
                SourcePortfolioId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ProductViewDetail: {
                  shape: 'S2l'
                },
                ProvisioningArtifactSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Id: {},
                      Name: {},
                      Description: {},
                      CreatedTime: {
                        type: 'timestamp'
                      },
                      ProvisioningArtifactMetadata: {
                        shape: 'S27'
                      }
                    }
                  }
                },
                Tags: {
                  shape: 'S1q'
                },
                TagOptions: {
                  shape: 'S4k'
                },
                Budgets: {
                  shape: 'S4l'
                }
              }
            }
          },
          DescribeProductView: {
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                AcceptLanguage: {},
                Id: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ProductViewSummary: {
                  shape: 'S2m'
                },
                ProvisioningArtifacts: {
                  shape: 'S56'
                }
              }
            }
          },
          DescribeProvisionedProduct: {
            input: {
              type: 'structure',
              members: {
                AcceptLanguage: {},
                Id: {},
                Name: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ProvisionedProductDetail: {
                  shape: 'S5k'
                },
                CloudWatchDashboards: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Name: {}
                    }
                  }
                }
              }
            }
          },
          DescribeProvisionedProductPlan: {
            input: {
              type: 'structure',
              required: ['PlanId'],
              members: {
                AcceptLanguage: {},
                PlanId: {},
                PageSize: {
                  type: 'integer'
                },
                PageToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ProvisionedProductPlanDetails: {
                  type: 'structure',
                  members: {
                    CreatedTime: {
                      type: 'timestamp'
                    },
                    PathId: {},
                    ProductId: {},
                    PlanName: {},
                    PlanId: {},
                    ProvisionProductId: {},
                    ProvisionProductName: {},
                    PlanType: {},
                    ProvisioningArtifactId: {},
                    Status: {},
                    UpdatedTime: {
                      type: 'timestamp'
                    },
                    NotificationArns: {
                      shape: 'S33'
                    },
                    ProvisioningParameters: {
                      shape: 'S36'
                    },
                    Tags: {
                      shape: 'S1q'
                    },
                    StatusMessage: {}
                  }
                },
                ResourceChanges: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Action: {},
                      LogicalResourceId: {},
                      PhysicalResourceId: {},
                      ResourceType: {},
                      Replacement: {},
                      Scope: {
                        type: 'list',
                        member: {}
                      },
                      Details: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            Target: {
                              type: 'structure',
                              members: {
                                Attribute: {},
                                Name: {},
                                RequiresRecreation: {}
                              }
                            },
                            Evaluation: {},
                            CausingEntity: {}
                          }
                        }
                      }
                    }
                  }
                },
                NextPageToken: {}
              }
            }
          },
          DescribeProvisioningArtifact: {
            input: {
              type: 'structure',
              members: {
                AcceptLanguage: {},
                ProvisioningArtifactId: {},
                ProductId: {},
                ProvisioningArtifactName: {},
                ProductName: {},
                Verbose: {
                  type: 'boolean'
                },
                IncludeProvisioningArtifactParameters: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ProvisioningArtifactDetail: {
                  shape: 'S2w'
                },
                Info: {
                  shape: 'S27'
                },
                Status: {},
                ProvisioningArtifactParameters: {
                  shape: 'S6l'
                }
              }
            }
          },
          DescribeProvisioningParameters: {
            input: {
              type: 'structure',
              members: {
                AcceptLanguage: {},
                ProductId: {},
                ProductName: {},
                ProvisioningArtifactId: {},
                ProvisioningArtifactName: {},
                PathId: {},
                PathName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ProvisioningArtifactParameters: {
                  shape: 'S6l'
                },
                ConstraintSummaries: {
                  shape: 'S6w'
                },
                UsageInstructions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Type: {},
                      Value: {}
                    }
                  }
                },
                TagOptions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Key: {},
                      Values: {
                        type: 'list',
                        member: {}
                      }
                    }
                  }
                },
                ProvisioningArtifactPreferences: {
                  type: 'structure',
                  members: {
                    StackSetAccounts: {
                      shape: 'S76'
                    },
                    StackSetRegions: {
                      shape: 'S77'
                    }
                  }
                },
                ProvisioningArtifactOutputs: {
                  shape: 'S79',
                  deprecated: true,
                  deprecatedMessage: 'This property is deprecated and returns the Id and Description of the Provisioning Artifact. Use ProvisioningArtifactOutputKeys instead to get the Keys and Descriptions of the outputs.'
                },
                ProvisioningArtifactOutputKeys: {
                  shape: 'S79'
                }
              }
            }
          },
          DescribeRecord: {
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                AcceptLanguage: {},
                Id: {},
                PageToken: {},
                PageSize: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                RecordDetail: {
                  shape: 'S7f'
                },
                RecordOutputs: {
                  shape: 'S7q'
                },
                NextPageToken: {}
              }
            }
          },
          DescribeServiceAction: {
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {},
                AcceptLanguage: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ServiceActionDetail: {
                  shape: 'S3m'
                }
              }
            }
          },
          DescribeServiceActionExecutionParameters: {
            input: {
              type: 'structure',
              required: ['ProvisionedProductId', 'ServiceActionId'],
              members: {
                ProvisionedProductId: {},
                ServiceActionId: {},
                AcceptLanguage: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ServiceActionParameters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Name: {},
                      Type: {},
                      DefaultValues: {
                        shape: 'S82'
                      }
                    }
                  }
                }
              }
            }
          },
          DescribeTagOption: {
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                TagOptionDetail: {
                  shape: 'S3s'
                }
              }
            }
          },
          DisableAWSOrganizationsAccess: {
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DisassociateBudgetFromResource: {
            input: {
              type: 'structure',
              required: ['BudgetName', 'ResourceId'],
              members: {
                BudgetName: {},
                ResourceId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DisassociatePrincipalFromPortfolio: {
            input: {
              type: 'structure',
              required: ['PortfolioId', 'PrincipalARN'],
              members: {
                AcceptLanguage: {},
                PortfolioId: {},
                PrincipalARN: {},
                PrincipalType: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DisassociateProductFromPortfolio: {
            input: {
              type: 'structure',
              required: ['ProductId', 'PortfolioId'],
              members: {
                AcceptLanguage: {},
                ProductId: {},
                PortfolioId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DisassociateServiceActionFromProvisioningArtifact: {
            input: {
              type: 'structure',
              required: ['ProductId', 'ProvisioningArtifactId', 'ServiceActionId'],
              members: {
                ProductId: {},
                ProvisioningArtifactId: {},
                ServiceActionId: {},
                AcceptLanguage: {},
                IdempotencyToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DisassociateTagOptionFromResource: {
            input: {
              type: 'structure',
              required: ['ResourceId', 'TagOptionId'],
              members: {
                ResourceId: {},
                TagOptionId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          EnableAWSOrganizationsAccess: {
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          ExecuteProvisionedProductPlan: {
            input: {
              type: 'structure',
              required: ['PlanId', 'IdempotencyToken'],
              members: {
                AcceptLanguage: {},
                PlanId: {},
                IdempotencyToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                RecordDetail: {
                  shape: 'S7f'
                }
              }
            }
          },
          ExecuteProvisionedProductServiceAction: {
            input: {
              type: 'structure',
              required: ['ProvisionedProductId', 'ServiceActionId', 'ExecuteToken'],
              members: {
                ProvisionedProductId: {},
                ServiceActionId: {},
                ExecuteToken: {
                  idempotencyToken: true
                },
                AcceptLanguage: {},
                Parameters: {
                  type: 'map',
                  key: {},
                  value: {
                    shape: 'S82'
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                RecordDetail: {
                  shape: 'S7f'
                }
              }
            }
          },
          GetAWSOrganizationsAccessStatus: {
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {
                AccessStatus: {}
              }
            }
          },
          GetProvisionedProductOutputs: {
            input: {
              type: 'structure',
              members: {
                AcceptLanguage: {},
                ProvisionedProductId: {},
                ProvisionedProductName: {},
                OutputKeys: {
                  type: 'list',
                  member: {}
                },
                PageSize: {
                  type: 'integer'
                },
                PageToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Outputs: {
                  shape: 'S7q'
                },
                NextPageToken: {}
              }
            }
          },
          ImportAsProvisionedProduct: {
            input: {
              type: 'structure',
              required: ['ProductId', 'ProvisioningArtifactId', 'ProvisionedProductName', 'PhysicalId', 'IdempotencyToken'],
              members: {
                AcceptLanguage: {},
                ProductId: {},
                ProvisioningArtifactId: {},
                ProvisionedProductName: {},
                PhysicalId: {},
                IdempotencyToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                RecordDetail: {
                  shape: 'S7f'
                }
              }
            }
          },
          ListAcceptedPortfolioShares: {
            input: {
              type: 'structure',
              members: {
                AcceptLanguage: {},
                PageToken: {},
                PageSize: {
                  type: 'integer'
                },
                PortfolioShareType: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                PortfolioDetails: {
                  shape: 'S90'
                },
                NextPageToken: {}
              }
            }
          },
          ListBudgetsForResource: {
            input: {
              type: 'structure',
              required: ['ResourceId'],
              members: {
                AcceptLanguage: {},
                ResourceId: {},
                PageSize: {
                  type: 'integer'
                },
                PageToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Budgets: {
                  shape: 'S4l'
                },
                NextPageToken: {}
              }
            }
          },
          ListConstraintsForPortfolio: {
            input: {
              type: 'structure',
              required: ['PortfolioId'],
              members: {
                AcceptLanguage: {},
                PortfolioId: {},
                ProductId: {},
                PageSize: {
                  type: 'integer'
                },
                PageToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ConstraintDetails: {
                  type: 'list',
                  member: {
                    shape: 'S1b'
                  }
                },
                NextPageToken: {}
              }
            }
          },
          ListLaunchPaths: {
            input: {
              type: 'structure',
              required: ['ProductId'],
              members: {
                AcceptLanguage: {},
                ProductId: {},
                PageSize: {
                  type: 'integer'
                },
                PageToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                LaunchPathSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Id: {},
                      ConstraintSummaries: {
                        shape: 'S6w'
                      },
                      Tags: {
                        shape: 'S1q'
                      },
                      Name: {}
                    }
                  }
                },
                NextPageToken: {}
              }
            }
          },
          ListOrganizationPortfolioAccess: {
            input: {
              type: 'structure',
              required: ['PortfolioId', 'OrganizationNodeType'],
              members: {
                AcceptLanguage: {},
                PortfolioId: {},
                OrganizationNodeType: {},
                PageToken: {},
                PageSize: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                OrganizationNodes: {
                  type: 'list',
                  member: {
                    shape: 'S1s'
                  }
                },
                NextPageToken: {}
              }
            }
          },
          ListPortfolioAccess: {
            input: {
              type: 'structure',
              required: ['PortfolioId'],
              members: {
                AcceptLanguage: {},
                PortfolioId: {},
                OrganizationParentId: {},
                PageToken: {},
                PageSize: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AccountIds: {
                  type: 'list',
                  member: {}
                },
                NextPageToken: {}
              }
            }
          },
          ListPortfolios: {
            input: {
              type: 'structure',
              members: {
                AcceptLanguage: {},
                PageToken: {},
                PageSize: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                PortfolioDetails: {
                  shape: 'S90'
                },
                NextPageToken: {}
              }
            }
          },
          ListPortfoliosForProduct: {
            input: {
              type: 'structure',
              required: ['ProductId'],
              members: {
                AcceptLanguage: {},
                ProductId: {},
                PageToken: {},
                PageSize: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                PortfolioDetails: {
                  shape: 'S90'
                },
                NextPageToken: {}
              }
            }
          },
          ListPrincipalsForPortfolio: {
            input: {
              type: 'structure',
              required: ['PortfolioId'],
              members: {
                AcceptLanguage: {},
                PortfolioId: {},
                PageSize: {
                  type: 'integer'
                },
                PageToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Principals: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      PrincipalARN: {},
                      PrincipalType: {}
                    }
                  }
                },
                NextPageToken: {}
              }
            }
          },
          ListProvisionedProductPlans: {
            input: {
              type: 'structure',
              members: {
                AcceptLanguage: {},
                ProvisionProductId: {},
                PageSize: {
                  type: 'integer'
                },
                PageToken: {},
                AccessLevelFilter: {
                  shape: 'S9p'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ProvisionedProductPlans: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      PlanName: {},
                      PlanId: {},
                      ProvisionProductId: {},
                      ProvisionProductName: {},
                      PlanType: {},
                      ProvisioningArtifactId: {}
                    }
                  }
                },
                NextPageToken: {}
              }
            }
          },
          ListProvisioningArtifacts: {
            input: {
              type: 'structure',
              required: ['ProductId'],
              members: {
                AcceptLanguage: {},
                ProductId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ProvisioningArtifactDetails: {
                  type: 'list',
                  member: {
                    shape: 'S2w'
                  }
                },
                NextPageToken: {}
              }
            }
          },
          ListProvisioningArtifactsForServiceAction: {
            input: {
              type: 'structure',
              required: ['ServiceActionId'],
              members: {
                ServiceActionId: {},
                PageSize: {
                  type: 'integer'
                },
                PageToken: {},
                AcceptLanguage: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ProvisioningArtifactViews: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ProductViewSummary: {
                        shape: 'S2m'
                      },
                      ProvisioningArtifact: {
                        shape: 'S57'
                      }
                    }
                  }
                },
                NextPageToken: {}
              }
            }
          },
          ListRecordHistory: {
            input: {
              type: 'structure',
              members: {
                AcceptLanguage: {},
                AccessLevelFilter: {
                  shape: 'S9p'
                },
                SearchFilter: {
                  type: 'structure',
                  members: {
                    Key: {},
                    Value: {}
                  }
                },
                PageSize: {
                  type: 'integer'
                },
                PageToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                RecordDetails: {
                  type: 'list',
                  member: {
                    shape: 'S7f'
                  }
                },
                NextPageToken: {}
              }
            }
          },
          ListResourcesForTagOption: {
            input: {
              type: 'structure',
              required: ['TagOptionId'],
              members: {
                TagOptionId: {},
                ResourceType: {},
                PageSize: {
                  type: 'integer'
                },
                PageToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ResourceDetails: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Id: {},
                      ARN: {},
                      Name: {},
                      Description: {},
                      CreatedTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                PageToken: {}
              }
            }
          },
          ListServiceActions: {
            input: {
              type: 'structure',
              members: {
                AcceptLanguage: {},
                PageSize: {
                  type: 'integer'
                },
                PageToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ServiceActionSummaries: {
                  shape: 'Sak'
                },
                NextPageToken: {}
              }
            }
          },
          ListServiceActionsForProvisioningArtifact: {
            input: {
              type: 'structure',
              required: ['ProductId', 'ProvisioningArtifactId'],
              members: {
                ProductId: {},
                ProvisioningArtifactId: {},
                PageSize: {
                  type: 'integer'
                },
                PageToken: {},
                AcceptLanguage: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ServiceActionSummaries: {
                  shape: 'Sak'
                },
                NextPageToken: {}
              }
            }
          },
          ListStackInstancesForProvisionedProduct: {
            input: {
              type: 'structure',
              required: ['ProvisionedProductId'],
              members: {
                AcceptLanguage: {},
                ProvisionedProductId: {},
                PageToken: {},
                PageSize: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                StackInstances: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Account: {},
                      Region: {},
                      StackInstanceStatus: {}
                    }
                  }
                },
                NextPageToken: {}
              }
            }
          },
          ListTagOptions: {
            input: {
              type: 'structure',
              members: {
                Filters: {
                  type: 'structure',
                  members: {
                    Key: {},
                    Value: {},
                    Active: {
                      type: 'boolean'
                    }
                  }
                },
                PageSize: {
                  type: 'integer'
                },
                PageToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                TagOptionDetails: {
                  shape: 'S4k'
                },
                PageToken: {}
              }
            }
          },
          NotifyProvisionProductEngineWorkflowResult: {
            input: {
              type: 'structure',
              required: ['WorkflowToken', 'RecordId', 'Status', 'IdempotencyToken'],
              members: {
                WorkflowToken: {},
                RecordId: {},
                Status: {},
                FailureReason: {},
                ResourceIdentifier: {
                  type: 'structure',
                  members: {
                    UniqueTag: {
                      type: 'structure',
                      members: {
                        Key: {},
                        Value: {}
                      }
                    }
                  }
                },
                Outputs: {
                  shape: 'S7q'
                },
                IdempotencyToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          NotifyTerminateProvisionedProductEngineWorkflowResult: {
            input: {
              type: 'structure',
              required: ['WorkflowToken', 'RecordId', 'Status', 'IdempotencyToken'],
              members: {
                WorkflowToken: {},
                RecordId: {},
                Status: {},
                FailureReason: {},
                IdempotencyToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          NotifyUpdateProvisionedProductEngineWorkflowResult: {
            input: {
              type: 'structure',
              required: ['WorkflowToken', 'RecordId', 'Status', 'IdempotencyToken'],
              members: {
                WorkflowToken: {},
                RecordId: {},
                Status: {},
                FailureReason: {},
                Outputs: {
                  shape: 'S7q'
                },
                IdempotencyToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          ProvisionProduct: {
            input: {
              type: 'structure',
              required: ['ProvisionedProductName', 'ProvisionToken'],
              members: {
                AcceptLanguage: {},
                ProductId: {},
                ProductName: {},
                ProvisioningArtifactId: {},
                ProvisioningArtifactName: {},
                PathId: {},
                PathName: {},
                ProvisionedProductName: {},
                ProvisioningParameters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Key: {},
                      Value: {}
                    }
                  }
                },
                ProvisioningPreferences: {
                  type: 'structure',
                  members: {
                    StackSetAccounts: {
                      shape: 'S76'
                    },
                    StackSetRegions: {
                      shape: 'S77'
                    },
                    StackSetFailureToleranceCount: {
                      type: 'integer'
                    },
                    StackSetFailureTolerancePercentage: {
                      type: 'integer'
                    },
                    StackSetMaxConcurrencyCount: {
                      type: 'integer'
                    },
                    StackSetMaxConcurrencyPercentage: {
                      type: 'integer'
                    }
                  }
                },
                Tags: {
                  shape: 'S1q'
                },
                NotificationArns: {
                  shape: 'S33'
                },
                ProvisionToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                RecordDetail: {
                  shape: 'S7f'
                }
              }
            }
          },
          RejectPortfolioShare: {
            input: {
              type: 'structure',
              required: ['PortfolioId'],
              members: {
                AcceptLanguage: {},
                PortfolioId: {},
                PortfolioShareType: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          ScanProvisionedProducts: {
            input: {
              type: 'structure',
              members: {
                AcceptLanguage: {},
                AccessLevelFilter: {
                  shape: 'S9p'
                },
                PageSize: {
                  type: 'integer'
                },
                PageToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ProvisionedProducts: {
                  type: 'list',
                  member: {
                    shape: 'S5k'
                  }
                },
                NextPageToken: {}
              }
            }
          },
          SearchProducts: {
            input: {
              type: 'structure',
              members: {
                AcceptLanguage: {},
                Filters: {
                  shape: 'Sbn'
                },
                PageSize: {
                  type: 'integer'
                },
                SortBy: {},
                SortOrder: {},
                PageToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ProductViewSummaries: {
                  type: 'list',
                  member: {
                    shape: 'S2m'
                  }
                },
                ProductViewAggregations: {
                  type: 'map',
                  key: {},
                  value: {
                    type: 'list',
                    member: {
                      type: 'structure',
                      members: {
                        Value: {},
                        ApproximateCount: {
                          type: 'integer'
                        }
                      }
                    }
                  }
                },
                NextPageToken: {}
              }
            }
          },
          SearchProductsAsAdmin: {
            input: {
              type: 'structure',
              members: {
                AcceptLanguage: {},
                PortfolioId: {},
                Filters: {
                  shape: 'Sbn'
                },
                SortBy: {},
                SortOrder: {},
                PageToken: {},
                PageSize: {
                  type: 'integer'
                },
                ProductSource: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ProductViewDetails: {
                  type: 'list',
                  member: {
                    shape: 'S2l'
                  }
                },
                NextPageToken: {}
              }
            }
          },
          SearchProvisionedProducts: {
            input: {
              type: 'structure',
              members: {
                AcceptLanguage: {},
                AccessLevelFilter: {
                  shape: 'S9p'
                },
                Filters: {
                  type: 'map',
                  key: {},
                  value: {
                    type: 'list',
                    member: {}
                  }
                },
                SortBy: {},
                SortOrder: {},
                PageSize: {
                  type: 'integer'
                },
                PageToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ProvisionedProducts: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Name: {},
                      Arn: {},
                      Type: {},
                      Id: {},
                      Status: {},
                      StatusMessage: {},
                      CreatedTime: {
                        type: 'timestamp'
                      },
                      IdempotencyToken: {},
                      LastRecordId: {},
                      LastProvisioningRecordId: {},
                      LastSuccessfulProvisioningRecordId: {},
                      Tags: {
                        shape: 'S1q'
                      },
                      PhysicalId: {},
                      ProductId: {},
                      ProductName: {},
                      ProvisioningArtifactId: {},
                      ProvisioningArtifactName: {},
                      UserArn: {},
                      UserArnSession: {}
                    }
                  }
                },
                TotalResultsCount: {
                  type: 'integer'
                },
                NextPageToken: {}
              }
            }
          },
          TerminateProvisionedProduct: {
            input: {
              type: 'structure',
              required: ['TerminateToken'],
              members: {
                ProvisionedProductName: {},
                ProvisionedProductId: {},
                TerminateToken: {
                  idempotencyToken: true
                },
                IgnoreErrors: {
                  type: 'boolean'
                },
                AcceptLanguage: {},
                RetainPhysicalResources: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                RecordDetail: {
                  shape: 'S7f'
                }
              }
            }
          },
          UpdateConstraint: {
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                AcceptLanguage: {},
                Id: {},
                Description: {},
                Parameters: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ConstraintDetail: {
                  shape: 'S1b'
                },
                ConstraintParameters: {},
                Status: {}
              }
            }
          },
          UpdatePortfolio: {
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                AcceptLanguage: {},
                Id: {},
                DisplayName: {},
                Description: {},
                ProviderName: {},
                AddTags: {
                  shape: 'S1i'
                },
                RemoveTags: {
                  shape: 'Sco'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                PortfolioDetail: {
                  shape: 'S1n'
                },
                Tags: {
                  shape: 'S1q'
                }
              }
            }
          },
          UpdatePortfolioShare: {
            input: {
              type: 'structure',
              required: ['PortfolioId'],
              members: {
                AcceptLanguage: {},
                PortfolioId: {},
                AccountId: {},
                OrganizationNode: {
                  shape: 'S1s'
                },
                ShareTagOptions: {
                  type: 'boolean'
                },
                SharePrincipals: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                PortfolioShareToken: {},
                Status: {}
              }
            }
          },
          UpdateProduct: {
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                AcceptLanguage: {},
                Id: {},
                Name: {},
                Owner: {},
                Description: {},
                Distributor: {},
                SupportDescription: {},
                SupportEmail: {},
                SupportUrl: {},
                AddTags: {
                  shape: 'S1i'
                },
                RemoveTags: {
                  shape: 'Sco'
                },
                SourceConnection: {
                  shape: 'S2c'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ProductViewDetail: {
                  shape: 'S2l'
                },
                Tags: {
                  shape: 'S1q'
                }
              }
            }
          },
          UpdateProvisionedProduct: {
            input: {
              type: 'structure',
              required: ['UpdateToken'],
              members: {
                AcceptLanguage: {},
                ProvisionedProductName: {},
                ProvisionedProductId: {},
                ProductId: {},
                ProductName: {},
                ProvisioningArtifactId: {},
                ProvisioningArtifactName: {},
                PathId: {},
                PathName: {},
                ProvisioningParameters: {
                  shape: 'S36'
                },
                ProvisioningPreferences: {
                  type: 'structure',
                  members: {
                    StackSetAccounts: {
                      shape: 'S76'
                    },
                    StackSetRegions: {
                      shape: 'S77'
                    },
                    StackSetFailureToleranceCount: {
                      type: 'integer'
                    },
                    StackSetFailureTolerancePercentage: {
                      type: 'integer'
                    },
                    StackSetMaxConcurrencyCount: {
                      type: 'integer'
                    },
                    StackSetMaxConcurrencyPercentage: {
                      type: 'integer'
                    },
                    StackSetOperationType: {}
                  }
                },
                Tags: {
                  shape: 'S1q'
                },
                UpdateToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                RecordDetail: {
                  shape: 'S7f'
                }
              }
            }
          },
          UpdateProvisionedProductProperties: {
            input: {
              type: 'structure',
              required: ['ProvisionedProductId', 'ProvisionedProductProperties', 'IdempotencyToken'],
              members: {
                AcceptLanguage: {},
                ProvisionedProductId: {},
                ProvisionedProductProperties: {
                  shape: 'Sd0'
                },
                IdempotencyToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ProvisionedProductId: {},
                ProvisionedProductProperties: {
                  shape: 'Sd0'
                },
                RecordId: {},
                Status: {}
              }
            }
          },
          UpdateProvisioningArtifact: {
            input: {
              type: 'structure',
              required: ['ProductId', 'ProvisioningArtifactId'],
              members: {
                AcceptLanguage: {},
                ProductId: {},
                ProvisioningArtifactId: {},
                Name: {},
                Description: {},
                Active: {
                  type: 'boolean'
                },
                Guidance: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ProvisioningArtifactDetail: {
                  shape: 'S2w'
                },
                Info: {
                  shape: 'S27'
                },
                Status: {}
              }
            }
          },
          UpdateServiceAction: {
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {},
                Name: {},
                Definition: {
                  shape: 'S3h'
                },
                Description: {},
                AcceptLanguage: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ServiceActionDetail: {
                  shape: 'S3m'
                }
              }
            }
          },
          UpdateTagOption: {
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {},
                Value: {},
                Active: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                TagOptionDetail: {
                  shape: 'S3s'
                }
              }
            }
          }
        },
        shapes: {
          Sn: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['ServiceActionId', 'ProductId', 'ProvisioningArtifactId'],
              members: {
                ServiceActionId: {},
                ProductId: {},
                ProvisioningArtifactId: {}
              }
            }
          },
          Sq: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                ServiceActionId: {},
                ProductId: {},
                ProvisioningArtifactId: {},
                ErrorCode: {},
                ErrorMessage: {}
              }
            }
          },
          S1b: {
            type: 'structure',
            members: {
              ConstraintId: {},
              Type: {},
              Description: {},
              Owner: {},
              ProductId: {},
              PortfolioId: {}
            }
          },
          S1i: {
            type: 'list',
            member: {
              shape: 'S1j'
            }
          },
          S1j: {
            type: 'structure',
            required: ['Key', 'Value'],
            members: {
              Key: {},
              Value: {}
            }
          },
          S1n: {
            type: 'structure',
            members: {
              Id: {},
              ARN: {},
              DisplayName: {},
              Description: {},
              CreatedTime: {
                type: 'timestamp'
              },
              ProviderName: {}
            }
          },
          S1q: {
            type: 'list',
            member: {
              shape: 'S1j'
            }
          },
          S1s: {
            type: 'structure',
            members: {
              Type: {},
              Value: {}
            }
          },
          S24: {
            type: 'structure',
            members: {
              Name: {},
              Description: {},
              Info: {
                shape: 'S27'
              },
              Type: {},
              DisableTemplateValidation: {
                type: 'boolean'
              }
            }
          },
          S27: {
            type: 'map',
            key: {},
            value: {}
          },
          S2c: {
            type: 'structure',
            required: ['ConnectionParameters'],
            members: {
              Type: {},
              ConnectionParameters: {
                shape: 'S2e'
              }
            }
          },
          S2e: {
            type: 'structure',
            members: {
              CodeStar: {
                type: 'structure',
                required: ['ConnectionArn', 'Repository', 'Branch', 'ArtifactPath'],
                members: {
                  ConnectionArn: {},
                  Repository: {},
                  Branch: {},
                  ArtifactPath: {}
                }
              }
            }
          },
          S2l: {
            type: 'structure',
            members: {
              ProductViewSummary: {
                shape: 'S2m'
              },
              Status: {},
              ProductARN: {},
              CreatedTime: {
                type: 'timestamp'
              },
              SourceConnection: {
                type: 'structure',
                members: {
                  Type: {},
                  ConnectionParameters: {
                    shape: 'S2e'
                  },
                  LastSync: {
                    type: 'structure',
                    members: {
                      LastSyncTime: {
                        type: 'timestamp'
                      },
                      LastSyncStatus: {},
                      LastSyncStatusMessage: {},
                      LastSuccessfulSyncTime: {
                        type: 'timestamp'
                      },
                      LastSuccessfulSyncProvisioningArtifactId: {}
                    }
                  }
                }
              }
            }
          },
          S2m: {
            type: 'structure',
            members: {
              Id: {},
              ProductId: {},
              Name: {},
              Owner: {},
              ShortDescription: {},
              Type: {},
              Distributor: {},
              HasDefaultPath: {
                type: 'boolean'
              },
              SupportEmail: {},
              SupportDescription: {},
              SupportUrl: {}
            }
          },
          S2w: {
            type: 'structure',
            members: {
              Id: {},
              Name: {},
              Description: {},
              Type: {},
              CreatedTime: {
                type: 'timestamp'
              },
              Active: {
                type: 'boolean'
              },
              Guidance: {},
              SourceRevision: {}
            }
          },
          S33: {
            type: 'list',
            member: {}
          },
          S36: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Key: {},
                Value: {},
                UsePreviousValue: {
                  type: 'boolean'
                }
              }
            }
          },
          S3h: {
            type: 'map',
            key: {},
            value: {}
          },
          S3m: {
            type: 'structure',
            members: {
              ServiceActionSummary: {
                shape: 'S3n'
              },
              Definition: {
                shape: 'S3h'
              }
            }
          },
          S3n: {
            type: 'structure',
            members: {
              Id: {},
              Name: {},
              Description: {},
              DefinitionType: {}
            }
          },
          S3s: {
            type: 'structure',
            members: {
              Key: {},
              Value: {},
              Active: {
                type: 'boolean'
              },
              Id: {},
              Owner: {}
            }
          },
          S4k: {
            type: 'list',
            member: {
              shape: 'S3s'
            }
          },
          S4l: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                BudgetName: {}
              }
            }
          },
          S56: {
            type: 'list',
            member: {
              shape: 'S57'
            }
          },
          S57: {
            type: 'structure',
            members: {
              Id: {},
              Name: {},
              Description: {},
              CreatedTime: {
                type: 'timestamp'
              },
              Guidance: {}
            }
          },
          S5k: {
            type: 'structure',
            members: {
              Name: {},
              Arn: {},
              Type: {},
              Id: {},
              Status: {},
              StatusMessage: {},
              CreatedTime: {
                type: 'timestamp'
              },
              IdempotencyToken: {},
              LastRecordId: {},
              LastProvisioningRecordId: {},
              LastSuccessfulProvisioningRecordId: {},
              ProductId: {},
              ProvisioningArtifactId: {},
              LaunchRoleArn: {}
            }
          },
          S6l: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                ParameterKey: {},
                DefaultValue: {},
                ParameterType: {},
                IsNoEcho: {
                  type: 'boolean'
                },
                Description: {},
                ParameterConstraints: {
                  type: 'structure',
                  members: {
                    AllowedValues: {
                      type: 'list',
                      member: {}
                    },
                    AllowedPattern: {},
                    ConstraintDescription: {},
                    MaxLength: {},
                    MinLength: {},
                    MaxValue: {},
                    MinValue: {}
                  }
                }
              }
            }
          },
          S6w: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Type: {},
                Description: {}
              }
            }
          },
          S76: {
            type: 'list',
            member: {}
          },
          S77: {
            type: 'list',
            member: {}
          },
          S79: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Key: {},
                Description: {}
              }
            }
          },
          S7f: {
            type: 'structure',
            members: {
              RecordId: {},
              ProvisionedProductName: {},
              Status: {},
              CreatedTime: {
                type: 'timestamp'
              },
              UpdatedTime: {
                type: 'timestamp'
              },
              ProvisionedProductType: {},
              RecordType: {},
              ProvisionedProductId: {},
              ProductId: {},
              ProvisioningArtifactId: {},
              PathId: {},
              RecordErrors: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    Code: {},
                    Description: {}
                  }
                }
              },
              RecordTags: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    Key: {},
                    Value: {}
                  }
                }
              },
              LaunchRoleArn: {}
            }
          },
          S7q: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                OutputKey: {},
                OutputValue: {},
                Description: {}
              }
            }
          },
          S82: {
            type: 'list',
            member: {}
          },
          S90: {
            type: 'list',
            member: {
              shape: 'S1n'
            }
          },
          S9p: {
            type: 'structure',
            members: {
              Key: {},
              Value: {}
            }
          },
          Sak: {
            type: 'list',
            member: {
              shape: 'S3n'
            }
          },
          Sbn: {
            type: 'map',
            key: {},
            value: {
              type: 'list',
              member: {}
            }
          },
          Sco: {
            type: 'list',
            member: {}
          },
          Sd0: {
            type: 'map',
            key: {},
            value: {}
          }
        }
      });
    }
  };
});
//# sourceMappingURL=0561179e6f601b52311382878f7c8df2c8b981a6.js.map