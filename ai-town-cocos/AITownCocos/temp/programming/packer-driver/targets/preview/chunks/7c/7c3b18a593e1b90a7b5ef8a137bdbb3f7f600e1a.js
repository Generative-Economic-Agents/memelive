System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2018-08-01',
          endpointPrefix: 'license-manager',
          jsonVersion: '1.1',
          protocol: 'json',
          serviceFullName: 'AWS License Manager',
          serviceId: 'License Manager',
          signatureVersion: 'v4',
          targetPrefix: 'AWSLicenseManager',
          uid: 'license-manager-2018-08-01'
        },
        operations: {
          AcceptGrant: {
            input: {
              type: 'structure',
              required: ['GrantArn'],
              members: {
                GrantArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                GrantArn: {},
                Status: {},
                Version: {}
              }
            }
          },
          CheckInLicense: {
            input: {
              type: 'structure',
              required: ['LicenseConsumptionToken'],
              members: {
                LicenseConsumptionToken: {},
                Beneficiary: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          CheckoutBorrowLicense: {
            input: {
              type: 'structure',
              required: ['LicenseArn', 'Entitlements', 'DigitalSignatureMethod', 'ClientToken'],
              members: {
                LicenseArn: {},
                Entitlements: {
                  shape: 'S9'
                },
                DigitalSignatureMethod: {},
                NodeId: {},
                CheckoutMetadata: {
                  shape: 'Sd'
                },
                ClientToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                LicenseArn: {},
                LicenseConsumptionToken: {},
                EntitlementsAllowed: {
                  shape: 'S9'
                },
                NodeId: {},
                SignedToken: {},
                IssuedAt: {},
                Expiration: {},
                CheckoutMetadata: {
                  shape: 'Sd'
                }
              }
            }
          },
          CheckoutLicense: {
            input: {
              type: 'structure',
              required: ['ProductSKU', 'CheckoutType', 'KeyFingerprint', 'Entitlements', 'ClientToken'],
              members: {
                ProductSKU: {},
                CheckoutType: {},
                KeyFingerprint: {},
                Entitlements: {
                  shape: 'S9'
                },
                ClientToken: {},
                Beneficiary: {},
                NodeId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                CheckoutType: {},
                LicenseConsumptionToken: {},
                EntitlementsAllowed: {
                  shape: 'S9'
                },
                SignedToken: {},
                NodeId: {},
                IssuedAt: {},
                Expiration: {},
                LicenseArn: {}
              }
            }
          },
          CreateGrant: {
            input: {
              type: 'structure',
              required: ['ClientToken', 'GrantName', 'LicenseArn', 'Principals', 'HomeRegion', 'AllowedOperations'],
              members: {
                ClientToken: {},
                GrantName: {},
                LicenseArn: {},
                Principals: {
                  type: 'list',
                  member: {}
                },
                HomeRegion: {},
                AllowedOperations: {
                  shape: 'So'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                GrantArn: {},
                Status: {},
                Version: {}
              }
            }
          },
          CreateGrantVersion: {
            input: {
              type: 'structure',
              required: ['ClientToken', 'GrantArn'],
              members: {
                ClientToken: {},
                GrantArn: {},
                GrantName: {},
                AllowedOperations: {
                  shape: 'So'
                },
                Status: {},
                StatusReason: {},
                SourceVersion: {},
                Options: {
                  shape: 'St'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                GrantArn: {},
                Status: {},
                Version: {}
              }
            }
          },
          CreateLicense: {
            input: {
              type: 'structure',
              required: ['LicenseName', 'ProductName', 'ProductSKU', 'Issuer', 'HomeRegion', 'Validity', 'Entitlements', 'Beneficiary', 'ConsumptionConfiguration', 'ClientToken'],
              members: {
                LicenseName: {},
                ProductName: {},
                ProductSKU: {},
                Issuer: {
                  shape: 'Sx'
                },
                HomeRegion: {},
                Validity: {
                  shape: 'Sy'
                },
                Entitlements: {
                  shape: 'Sz'
                },
                Beneficiary: {},
                ConsumptionConfiguration: {
                  shape: 'S14'
                },
                LicenseMetadata: {
                  shape: 'Sd'
                },
                ClientToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                LicenseArn: {},
                Status: {},
                Version: {}
              }
            }
          },
          CreateLicenseConfiguration: {
            input: {
              type: 'structure',
              required: ['Name', 'LicenseCountingType'],
              members: {
                Name: {},
                Description: {},
                LicenseCountingType: {},
                LicenseCount: {
                  type: 'long'
                },
                LicenseCountHardLimit: {
                  type: 'boolean'
                },
                LicenseRules: {
                  shape: 'S1e'
                },
                Tags: {
                  shape: 'S1f'
                },
                DisassociateWhenNotFound: {
                  type: 'boolean'
                },
                ProductInformationList: {
                  shape: 'S1h'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                LicenseConfigurationArn: {}
              }
            }
          },
          CreateLicenseConversionTaskForResource: {
            input: {
              type: 'structure',
              required: ['ResourceArn', 'SourceLicenseContext', 'DestinationLicenseContext'],
              members: {
                ResourceArn: {},
                SourceLicenseContext: {
                  shape: 'S1n'
                },
                DestinationLicenseContext: {
                  shape: 'S1n'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                LicenseConversionTaskId: {}
              }
            }
          },
          CreateLicenseManagerReportGenerator: {
            input: {
              type: 'structure',
              required: ['ReportGeneratorName', 'Type', 'ReportContext', 'ReportFrequency', 'ClientToken'],
              members: {
                ReportGeneratorName: {},
                Type: {
                  shape: 'S1t'
                },
                ReportContext: {
                  shape: 'S1v'
                },
                ReportFrequency: {
                  shape: 'S1x'
                },
                ClientToken: {},
                Description: {},
                Tags: {
                  shape: 'S1f'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                LicenseManagerReportGeneratorArn: {}
              }
            }
          },
          CreateLicenseVersion: {
            input: {
              type: 'structure',
              required: ['LicenseArn', 'LicenseName', 'ProductName', 'Issuer', 'HomeRegion', 'Validity', 'Entitlements', 'ConsumptionConfiguration', 'Status', 'ClientToken'],
              members: {
                LicenseArn: {},
                LicenseName: {},
                ProductName: {},
                Issuer: {
                  shape: 'Sx'
                },
                HomeRegion: {},
                Validity: {
                  shape: 'Sy'
                },
                LicenseMetadata: {
                  shape: 'Sd'
                },
                Entitlements: {
                  shape: 'Sz'
                },
                ConsumptionConfiguration: {
                  shape: 'S14'
                },
                Status: {},
                ClientToken: {},
                SourceVersion: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                LicenseArn: {},
                Version: {},
                Status: {}
              }
            }
          },
          CreateToken: {
            input: {
              type: 'structure',
              required: ['LicenseArn', 'ClientToken'],
              members: {
                LicenseArn: {},
                RoleArns: {
                  shape: 'S1w'
                },
                ExpirationInDays: {
                  type: 'integer'
                },
                TokenProperties: {
                  shape: 'S25'
                },
                ClientToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                TokenId: {},
                TokenType: {},
                Token: {}
              }
            }
          },
          DeleteGrant: {
            input: {
              type: 'structure',
              required: ['GrantArn', 'Version'],
              members: {
                GrantArn: {},
                StatusReason: {},
                Version: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                GrantArn: {},
                Status: {},
                Version: {}
              }
            }
          },
          DeleteLicense: {
            input: {
              type: 'structure',
              required: ['LicenseArn', 'SourceVersion'],
              members: {
                LicenseArn: {},
                SourceVersion: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Status: {},
                DeletionDate: {}
              }
            }
          },
          DeleteLicenseConfiguration: {
            input: {
              type: 'structure',
              required: ['LicenseConfigurationArn'],
              members: {
                LicenseConfigurationArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteLicenseManagerReportGenerator: {
            input: {
              type: 'structure',
              required: ['LicenseManagerReportGeneratorArn'],
              members: {
                LicenseManagerReportGeneratorArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteToken: {
            input: {
              type: 'structure',
              required: ['TokenId'],
              members: {
                TokenId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          ExtendLicenseConsumption: {
            input: {
              type: 'structure',
              required: ['LicenseConsumptionToken'],
              members: {
                LicenseConsumptionToken: {},
                DryRun: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                LicenseConsumptionToken: {},
                Expiration: {}
              }
            }
          },
          GetAccessToken: {
            input: {
              type: 'structure',
              required: ['Token'],
              members: {
                Token: {},
                TokenProperties: {
                  shape: 'S25'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AccessToken: {}
              }
            }
          },
          GetGrant: {
            input: {
              type: 'structure',
              required: ['GrantArn'],
              members: {
                GrantArn: {},
                Version: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Grant: {
                  shape: 'S2r'
                }
              }
            }
          },
          GetLicense: {
            input: {
              type: 'structure',
              required: ['LicenseArn'],
              members: {
                LicenseArn: {},
                Version: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                License: {
                  shape: 'S2u'
                }
              }
            }
          },
          GetLicenseConfiguration: {
            input: {
              type: 'structure',
              required: ['LicenseConfigurationArn'],
              members: {
                LicenseConfigurationArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                LicenseConfigurationId: {},
                LicenseConfigurationArn: {},
                Name: {},
                Description: {},
                LicenseCountingType: {},
                LicenseRules: {
                  shape: 'S1e'
                },
                LicenseCount: {
                  type: 'long'
                },
                LicenseCountHardLimit: {
                  type: 'boolean'
                },
                ConsumedLicenses: {
                  type: 'long'
                },
                Status: {},
                OwnerAccountId: {},
                ConsumedLicenseSummaryList: {
                  shape: 'S2y'
                },
                ManagedResourceSummaryList: {
                  shape: 'S31'
                },
                Tags: {
                  shape: 'S1f'
                },
                ProductInformationList: {
                  shape: 'S1h'
                },
                AutomatedDiscoveryInformation: {
                  shape: 'S33'
                },
                DisassociateWhenNotFound: {
                  type: 'boolean'
                }
              }
            }
          },
          GetLicenseConversionTask: {
            input: {
              type: 'structure',
              required: ['LicenseConversionTaskId'],
              members: {
                LicenseConversionTaskId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                LicenseConversionTaskId: {},
                ResourceArn: {},
                SourceLicenseContext: {
                  shape: 'S1n'
                },
                DestinationLicenseContext: {
                  shape: 'S1n'
                },
                StatusMessage: {},
                Status: {},
                StartTime: {
                  type: 'timestamp'
                },
                LicenseConversionTime: {
                  type: 'timestamp'
                },
                EndTime: {
                  type: 'timestamp'
                }
              }
            }
          },
          GetLicenseManagerReportGenerator: {
            input: {
              type: 'structure',
              required: ['LicenseManagerReportGeneratorArn'],
              members: {
                LicenseManagerReportGeneratorArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ReportGenerator: {
                  shape: 'S3a'
                }
              }
            }
          },
          GetLicenseUsage: {
            input: {
              type: 'structure',
              required: ['LicenseArn'],
              members: {
                LicenseArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                LicenseUsage: {
                  type: 'structure',
                  members: {
                    EntitlementUsages: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        required: ['Name', 'ConsumedValue', 'Unit'],
                        members: {
                          Name: {},
                          ConsumedValue: {},
                          MaxCount: {},
                          Unit: {}
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          GetServiceSettings: {
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {
                S3BucketArn: {},
                SnsTopicArn: {},
                OrganizationConfiguration: {
                  shape: 'S3j'
                },
                EnableCrossAccountsDiscovery: {
                  type: 'boolean'
                },
                LicenseManagerResourceShareArn: {}
              }
            }
          },
          ListAssociationsForLicenseConfiguration: {
            input: {
              type: 'structure',
              required: ['LicenseConfigurationArn'],
              members: {
                LicenseConfigurationArn: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                LicenseConfigurationAssociations: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ResourceArn: {},
                      ResourceType: {},
                      ResourceOwnerId: {},
                      AssociationTime: {
                        type: 'timestamp'
                      },
                      AmiAssociationScope: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListDistributedGrants: {
            input: {
              type: 'structure',
              members: {
                GrantArns: {
                  shape: 'S1w'
                },
                Filters: {
                  shape: 'S3p'
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
                Grants: {
                  shape: 'S3w'
                },
                NextToken: {}
              }
            }
          },
          ListFailuresForLicenseConfigurationOperations: {
            input: {
              type: 'structure',
              required: ['LicenseConfigurationArn'],
              members: {
                LicenseConfigurationArn: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                LicenseOperationFailureList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ResourceArn: {},
                      ResourceType: {},
                      ErrorMessage: {},
                      FailureTime: {
                        type: 'timestamp'
                      },
                      OperationName: {},
                      ResourceOwnerId: {},
                      OperationRequestedBy: {},
                      MetadataList: {
                        shape: 'Sd'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListLicenseConfigurations: {
            input: {
              type: 'structure',
              members: {
                LicenseConfigurationArns: {
                  shape: 'S1e'
                },
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {},
                Filters: {
                  shape: 'S42'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                LicenseConfigurations: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      LicenseConfigurationId: {},
                      LicenseConfigurationArn: {},
                      Name: {},
                      Description: {},
                      LicenseCountingType: {},
                      LicenseRules: {
                        shape: 'S1e'
                      },
                      LicenseCount: {
                        type: 'long'
                      },
                      LicenseCountHardLimit: {
                        type: 'boolean'
                      },
                      DisassociateWhenNotFound: {
                        type: 'boolean'
                      },
                      ConsumedLicenses: {
                        type: 'long'
                      },
                      Status: {},
                      OwnerAccountId: {},
                      ConsumedLicenseSummaryList: {
                        shape: 'S2y'
                      },
                      ManagedResourceSummaryList: {
                        shape: 'S31'
                      },
                      ProductInformationList: {
                        shape: 'S1h'
                      },
                      AutomatedDiscoveryInformation: {
                        shape: 'S33'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListLicenseConversionTasks: {
            input: {
              type: 'structure',
              members: {
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                Filters: {
                  shape: 'S42'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                LicenseConversionTasks: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      LicenseConversionTaskId: {},
                      ResourceArn: {},
                      SourceLicenseContext: {
                        shape: 'S1n'
                      },
                      DestinationLicenseContext: {
                        shape: 'S1n'
                      },
                      Status: {},
                      StatusMessage: {},
                      StartTime: {
                        type: 'timestamp'
                      },
                      LicenseConversionTime: {
                        type: 'timestamp'
                      },
                      EndTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListLicenseManagerReportGenerators: {
            input: {
              type: 'structure',
              members: {
                Filters: {
                  shape: 'S3p'
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
                ReportGenerators: {
                  type: 'list',
                  member: {
                    shape: 'S3a'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListLicenseSpecificationsForResource: {
            input: {
              type: 'structure',
              required: ['ResourceArn'],
              members: {
                ResourceArn: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                LicenseSpecifications: {
                  shape: 'S4f'
                },
                NextToken: {}
              }
            }
          },
          ListLicenseVersions: {
            input: {
              type: 'structure',
              required: ['LicenseArn'],
              members: {
                LicenseArn: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Licenses: {
                  shape: 'S4j'
                },
                NextToken: {}
              }
            }
          },
          ListLicenses: {
            input: {
              type: 'structure',
              members: {
                LicenseArns: {
                  shape: 'S1w'
                },
                Filters: {
                  shape: 'S3p'
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
                Licenses: {
                  shape: 'S4j'
                },
                NextToken: {}
              }
            }
          },
          ListReceivedGrants: {
            input: {
              type: 'structure',
              members: {
                GrantArns: {
                  shape: 'S1w'
                },
                Filters: {
                  shape: 'S3p'
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
                Grants: {
                  shape: 'S3w'
                },
                NextToken: {}
              }
            }
          },
          ListReceivedGrantsForOrganization: {
            input: {
              type: 'structure',
              required: ['LicenseArn'],
              members: {
                LicenseArn: {},
                Filters: {
                  shape: 'S3p'
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
                Grants: {
                  shape: 'S3w'
                },
                NextToken: {}
              }
            }
          },
          ListReceivedLicenses: {
            input: {
              type: 'structure',
              members: {
                LicenseArns: {
                  shape: 'S1w'
                },
                Filters: {
                  shape: 'S3p'
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
                Licenses: {
                  shape: 'S4s'
                },
                NextToken: {}
              }
            }
          },
          ListReceivedLicensesForOrganization: {
            input: {
              type: 'structure',
              members: {
                Filters: {
                  shape: 'S3p'
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
                Licenses: {
                  shape: 'S4s'
                },
                NextToken: {}
              }
            }
          },
          ListResourceInventory: {
            input: {
              type: 'structure',
              members: {
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {},
                Filters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Name', 'Condition'],
                    members: {
                      Name: {},
                      Condition: {},
                      Value: {}
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ResourceInventoryList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ResourceId: {},
                      ResourceType: {},
                      ResourceArn: {},
                      Platform: {},
                      PlatformVersion: {},
                      ResourceOwningAccountId: {}
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
              required: ['ResourceArn'],
              members: {
                ResourceArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Tags: {
                  shape: 'S1f'
                }
              }
            }
          },
          ListTokens: {
            input: {
              type: 'structure',
              members: {
                TokenIds: {
                  shape: 'S1e'
                },
                Filters: {
                  shape: 'S3p'
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
                Tokens: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      TokenId: {},
                      TokenType: {},
                      LicenseArn: {},
                      ExpirationTime: {},
                      TokenProperties: {
                        shape: 'S25'
                      },
                      RoleArns: {
                        shape: 'S1w'
                      },
                      Status: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListUsageForLicenseConfiguration: {
            input: {
              type: 'structure',
              required: ['LicenseConfigurationArn'],
              members: {
                LicenseConfigurationArn: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {},
                Filters: {
                  shape: 'S42'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                LicenseConfigurationUsageList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ResourceArn: {},
                      ResourceType: {},
                      ResourceStatus: {},
                      ResourceOwnerId: {},
                      AssociationTime: {
                        type: 'timestamp'
                      },
                      ConsumedLicenses: {
                        type: 'long'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          RejectGrant: {
            input: {
              type: 'structure',
              required: ['GrantArn'],
              members: {
                GrantArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                GrantArn: {},
                Status: {},
                Version: {}
              }
            }
          },
          TagResource: {
            input: {
              type: 'structure',
              required: ['ResourceArn', 'Tags'],
              members: {
                ResourceArn: {},
                Tags: {
                  shape: 'S1f'
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
              required: ['ResourceArn', 'TagKeys'],
              members: {
                ResourceArn: {},
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
          UpdateLicenseConfiguration: {
            input: {
              type: 'structure',
              required: ['LicenseConfigurationArn'],
              members: {
                LicenseConfigurationArn: {},
                LicenseConfigurationStatus: {},
                LicenseRules: {
                  shape: 'S1e'
                },
                LicenseCount: {
                  type: 'long'
                },
                LicenseCountHardLimit: {
                  type: 'boolean'
                },
                Name: {},
                Description: {},
                ProductInformationList: {
                  shape: 'S1h'
                },
                DisassociateWhenNotFound: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateLicenseManagerReportGenerator: {
            input: {
              type: 'structure',
              required: ['LicenseManagerReportGeneratorArn', 'ReportGeneratorName', 'Type', 'ReportContext', 'ReportFrequency', 'ClientToken'],
              members: {
                LicenseManagerReportGeneratorArn: {},
                ReportGeneratorName: {},
                Type: {
                  shape: 'S1t'
                },
                ReportContext: {
                  shape: 'S1v'
                },
                ReportFrequency: {
                  shape: 'S1x'
                },
                ClientToken: {},
                Description: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateLicenseSpecificationsForResource: {
            input: {
              type: 'structure',
              required: ['ResourceArn'],
              members: {
                ResourceArn: {},
                AddLicenseSpecifications: {
                  shape: 'S4f'
                },
                RemoveLicenseSpecifications: {
                  shape: 'S4f'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateServiceSettings: {
            input: {
              type: 'structure',
              members: {
                S3BucketArn: {},
                SnsTopicArn: {},
                OrganizationConfiguration: {
                  shape: 'S3j'
                },
                EnableCrossAccountsDiscovery: {
                  type: 'boolean'
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
          S9: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Name', 'Unit'],
              members: {
                Name: {},
                Value: {},
                Unit: {}
              }
            }
          },
          Sd: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Name: {},
                Value: {}
              }
            }
          },
          So: {
            type: 'list',
            member: {}
          },
          St: {
            type: 'structure',
            members: {
              ActivationOverrideBehavior: {}
            }
          },
          Sx: {
            type: 'structure',
            required: ['Name'],
            members: {
              Name: {},
              SignKey: {}
            }
          },
          Sy: {
            type: 'structure',
            required: ['Begin'],
            members: {
              Begin: {},
              End: {}
            }
          },
          Sz: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Name', 'Unit'],
              members: {
                Name: {},
                Value: {},
                MaxCount: {
                  type: 'long'
                },
                Overage: {
                  type: 'boolean'
                },
                Unit: {},
                AllowCheckIn: {
                  type: 'boolean'
                }
              }
            }
          },
          S14: {
            type: 'structure',
            members: {
              RenewType: {},
              ProvisionalConfiguration: {
                type: 'structure',
                required: ['MaxTimeToLiveInMinutes'],
                members: {
                  MaxTimeToLiveInMinutes: {
                    type: 'integer'
                  }
                }
              },
              BorrowConfiguration: {
                type: 'structure',
                required: ['AllowEarlyCheckIn', 'MaxTimeToLiveInMinutes'],
                members: {
                  AllowEarlyCheckIn: {
                    type: 'boolean'
                  },
                  MaxTimeToLiveInMinutes: {
                    type: 'integer'
                  }
                }
              }
            }
          },
          S1e: {
            type: 'list',
            member: {}
          },
          S1f: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Key: {},
                Value: {}
              }
            }
          },
          S1h: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['ResourceType', 'ProductInformationFilterList'],
              members: {
                ResourceType: {},
                ProductInformationFilterList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['ProductInformationFilterName', 'ProductInformationFilterComparator'],
                    members: {
                      ProductInformationFilterName: {},
                      ProductInformationFilterValue: {
                        shape: 'S1e'
                      },
                      ProductInformationFilterComparator: {}
                    }
                  }
                }
              }
            }
          },
          S1n: {
            type: 'structure',
            members: {
              UsageOperation: {}
            }
          },
          S1t: {
            type: 'list',
            member: {}
          },
          S1v: {
            type: 'structure',
            required: ['licenseConfigurationArns'],
            members: {
              licenseConfigurationArns: {
                shape: 'S1w'
              }
            }
          },
          S1w: {
            type: 'list',
            member: {}
          },
          S1x: {
            type: 'structure',
            members: {
              value: {
                type: 'integer'
              },
              period: {}
            }
          },
          S25: {
            type: 'list',
            member: {}
          },
          S2r: {
            type: 'structure',
            required: ['GrantArn', 'GrantName', 'ParentArn', 'LicenseArn', 'GranteePrincipalArn', 'HomeRegion', 'GrantStatus', 'Version', 'GrantedOperations'],
            members: {
              GrantArn: {},
              GrantName: {},
              ParentArn: {},
              LicenseArn: {},
              GranteePrincipalArn: {},
              HomeRegion: {},
              GrantStatus: {},
              StatusReason: {},
              Version: {},
              GrantedOperations: {
                shape: 'So'
              },
              Options: {
                shape: 'St'
              }
            }
          },
          S2u: {
            type: 'structure',
            members: {
              LicenseArn: {},
              LicenseName: {},
              ProductName: {},
              ProductSKU: {},
              Issuer: {
                shape: 'S2v'
              },
              HomeRegion: {},
              Status: {},
              Validity: {
                shape: 'Sy'
              },
              Beneficiary: {},
              Entitlements: {
                shape: 'Sz'
              },
              ConsumptionConfiguration: {
                shape: 'S14'
              },
              LicenseMetadata: {
                shape: 'Sd'
              },
              CreateTime: {},
              Version: {}
            }
          },
          S2v: {
            type: 'structure',
            members: {
              Name: {},
              SignKey: {},
              KeyFingerprint: {}
            }
          },
          S2y: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                ResourceType: {},
                ConsumedLicenses: {
                  type: 'long'
                }
              }
            }
          },
          S31: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                ResourceType: {},
                AssociationCount: {
                  type: 'long'
                }
              }
            }
          },
          S33: {
            type: 'structure',
            members: {
              LastRunTime: {
                type: 'timestamp'
              }
            }
          },
          S3a: {
            type: 'structure',
            members: {
              ReportGeneratorName: {},
              ReportType: {
                shape: 'S1t'
              },
              ReportContext: {
                shape: 'S1v'
              },
              ReportFrequency: {
                shape: 'S1x'
              },
              LicenseManagerReportGeneratorArn: {},
              LastRunStatus: {},
              LastRunFailureReason: {},
              LastReportGenerationTime: {},
              ReportCreatorAccount: {},
              Description: {},
              S3Location: {
                type: 'structure',
                members: {
                  bucket: {},
                  keyPrefix: {}
                }
              },
              CreateTime: {},
              Tags: {
                shape: 'S1f'
              }
            }
          },
          S3j: {
            type: 'structure',
            required: ['EnableIntegration'],
            members: {
              EnableIntegration: {
                type: 'boolean'
              }
            }
          },
          S3p: {
            type: 'list',
            member: {
              shape: 'S3q'
            }
          },
          S3q: {
            type: 'structure',
            members: {
              Name: {},
              Values: {
                type: 'list',
                member: {}
              }
            }
          },
          S3w: {
            type: 'list',
            member: {
              shape: 'S2r'
            }
          },
          S42: {
            type: 'list',
            member: {
              shape: 'S3q'
            }
          },
          S4f: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['LicenseConfigurationArn'],
              members: {
                LicenseConfigurationArn: {},
                AmiAssociationScope: {}
              }
            }
          },
          S4j: {
            type: 'list',
            member: {
              shape: 'S2u'
            }
          },
          S4s: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                LicenseArn: {},
                LicenseName: {},
                ProductName: {},
                ProductSKU: {},
                Issuer: {
                  shape: 'S2v'
                },
                HomeRegion: {},
                Status: {},
                Validity: {
                  shape: 'Sy'
                },
                Beneficiary: {},
                Entitlements: {
                  shape: 'Sz'
                },
                ConsumptionConfiguration: {
                  shape: 'S14'
                },
                LicenseMetadata: {
                  shape: 'Sd'
                },
                CreateTime: {},
                Version: {},
                ReceivedMetadata: {
                  type: 'structure',
                  members: {
                    ReceivedStatus: {},
                    ReceivedStatusReason: {},
                    AllowedOperations: {
                      shape: 'So'
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
//# sourceMappingURL=7c3b18a593e1b90a7b5ef8a137bdbb3f7f600e1a.js.map