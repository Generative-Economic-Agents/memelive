System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2014-05-15',
          endpointPrefix: 'route53domains',
          jsonVersion: '1.1',
          protocol: 'json',
          serviceFullName: 'Amazon Route 53 Domains',
          serviceId: 'Route 53 Domains',
          signatureVersion: 'v4',
          targetPrefix: 'Route53Domains_v20140515',
          uid: 'route53domains-2014-05-15'
        },
        operations: {
          AcceptDomainTransferFromAnotherAwsAccount: {
            input: {
              type: 'structure',
              required: ['DomainName', 'Password'],
              members: {
                DomainName: {},
                Password: {
                  shape: 'S3'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                OperationId: {}
              }
            }
          },
          AssociateDelegationSignerToDomain: {
            input: {
              type: 'structure',
              required: ['DomainName', 'SigningAttributes'],
              members: {
                DomainName: {},
                SigningAttributes: {
                  type: 'structure',
                  members: {
                    Algorithm: {
                      type: 'integer'
                    },
                    Flags: {
                      type: 'integer'
                    },
                    PublicKey: {}
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                OperationId: {}
              }
            }
          },
          CancelDomainTransferToAnotherAwsAccount: {
            input: {
              type: 'structure',
              required: ['DomainName'],
              members: {
                DomainName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                OperationId: {}
              }
            }
          },
          CheckDomainAvailability: {
            input: {
              type: 'structure',
              required: ['DomainName'],
              members: {
                DomainName: {},
                IdnLangCode: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Availability: {}
              }
            }
          },
          CheckDomainTransferability: {
            input: {
              type: 'structure',
              required: ['DomainName'],
              members: {
                DomainName: {},
                AuthCode: {
                  shape: 'Si'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Transferability: {
                  type: 'structure',
                  members: {
                    Transferable: {}
                  }
                },
                Message: {}
              }
            }
          },
          DeleteDomain: {
            input: {
              type: 'structure',
              required: ['DomainName'],
              members: {
                DomainName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                OperationId: {}
              }
            }
          },
          DeleteTagsForDomain: {
            input: {
              type: 'structure',
              required: ['DomainName', 'TagsToDelete'],
              members: {
                DomainName: {},
                TagsToDelete: {
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
          DisableDomainAutoRenew: {
            input: {
              type: 'structure',
              required: ['DomainName'],
              members: {
                DomainName: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DisableDomainTransferLock: {
            input: {
              type: 'structure',
              required: ['DomainName'],
              members: {
                DomainName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                OperationId: {}
              }
            }
          },
          DisassociateDelegationSignerFromDomain: {
            input: {
              type: 'structure',
              required: ['DomainName', 'Id'],
              members: {
                DomainName: {},
                Id: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                OperationId: {}
              }
            }
          },
          EnableDomainAutoRenew: {
            input: {
              type: 'structure',
              required: ['DomainName'],
              members: {
                DomainName: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          EnableDomainTransferLock: {
            input: {
              type: 'structure',
              required: ['DomainName'],
              members: {
                DomainName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                OperationId: {}
              }
            }
          },
          GetContactReachabilityStatus: {
            input: {
              type: 'structure',
              members: {
                domainName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                domainName: {},
                status: {}
              }
            }
          },
          GetDomainDetail: {
            input: {
              type: 'structure',
              required: ['DomainName'],
              members: {
                DomainName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                DomainName: {},
                Nameservers: {
                  shape: 'S19'
                },
                AutoRenew: {
                  type: 'boolean'
                },
                AdminContact: {
                  shape: 'S1f'
                },
                RegistrantContact: {
                  shape: 'S1f'
                },
                TechContact: {
                  shape: 'S1f'
                },
                AdminPrivacy: {
                  type: 'boolean'
                },
                RegistrantPrivacy: {
                  type: 'boolean'
                },
                TechPrivacy: {
                  type: 'boolean'
                },
                RegistrarName: {},
                WhoIsServer: {},
                RegistrarUrl: {},
                AbuseContactEmail: {
                  shape: 'S1o'
                },
                AbuseContactPhone: {
                  shape: 'S1n'
                },
                RegistryDomainId: {},
                CreationDate: {
                  type: 'timestamp'
                },
                UpdatedDate: {
                  type: 'timestamp'
                },
                ExpirationDate: {
                  type: 'timestamp'
                },
                Reseller: {},
                DnsSec: {},
                StatusList: {
                  type: 'list',
                  member: {}
                },
                DnssecKeys: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Algorithm: {
                        type: 'integer'
                      },
                      Flags: {
                        type: 'integer'
                      },
                      PublicKey: {},
                      DigestType: {
                        type: 'integer'
                      },
                      Digest: {},
                      KeyTag: {
                        type: 'integer'
                      },
                      Id: {}
                    }
                  }
                },
                BillingContact: {
                  shape: 'S1f'
                },
                BillingPrivacy: {
                  type: 'boolean'
                }
              }
            }
          },
          GetDomainSuggestions: {
            input: {
              type: 'structure',
              required: ['DomainName', 'SuggestionCount', 'OnlyAvailable'],
              members: {
                DomainName: {},
                SuggestionCount: {
                  type: 'integer'
                },
                OnlyAvailable: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                SuggestionsList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      DomainName: {},
                      Availability: {}
                    }
                  }
                }
              }
            }
          },
          GetOperationDetail: {
            input: {
              type: 'structure',
              required: ['OperationId'],
              members: {
                OperationId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                OperationId: {},
                Status: {},
                Message: {},
                DomainName: {},
                Type: {},
                SubmittedDate: {
                  type: 'timestamp'
                },
                LastUpdatedDate: {
                  type: 'timestamp'
                },
                StatusFlag: {}
              }
            }
          },
          ListDomains: {
            input: {
              type: 'structure',
              members: {
                FilterConditions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Name', 'Operator', 'Values'],
                    members: {
                      Name: {},
                      Operator: {},
                      Values: {
                        type: 'list',
                        member: {}
                      }
                    }
                  }
                },
                SortCondition: {
                  type: 'structure',
                  required: ['Name', 'SortOrder'],
                  members: {
                    Name: {},
                    SortOrder: {}
                  }
                },
                Marker: {},
                MaxItems: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Domains: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      DomainName: {},
                      AutoRenew: {
                        type: 'boolean'
                      },
                      TransferLock: {
                        type: 'boolean'
                      },
                      Expiry: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextPageMarker: {}
              }
            }
          },
          ListOperations: {
            input: {
              type: 'structure',
              members: {
                SubmittedSince: {
                  type: 'timestamp'
                },
                Marker: {},
                MaxItems: {
                  type: 'integer'
                },
                Status: {
                  type: 'list',
                  member: {}
                },
                Type: {
                  type: 'list',
                  member: {}
                },
                SortBy: {},
                SortOrder: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Operations: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      OperationId: {},
                      Status: {},
                      Type: {},
                      SubmittedDate: {
                        type: 'timestamp'
                      },
                      DomainName: {},
                      Message: {},
                      StatusFlag: {},
                      LastUpdatedDate: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextPageMarker: {}
              }
            }
          },
          ListPrices: {
            input: {
              type: 'structure',
              members: {
                Tld: {},
                Marker: {},
                MaxItems: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Prices: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Name: {},
                      RegistrationPrice: {
                        shape: 'S37'
                      },
                      TransferPrice: {
                        shape: 'S37'
                      },
                      RenewalPrice: {
                        shape: 'S37'
                      },
                      ChangeOwnershipPrice: {
                        shape: 'S37'
                      },
                      RestorationPrice: {
                        shape: 'S37'
                      }
                    }
                  }
                },
                NextPageMarker: {}
              }
            }
          },
          ListTagsForDomain: {
            input: {
              type: 'structure',
              required: ['DomainName'],
              members: {
                DomainName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                TagList: {
                  shape: 'S3c'
                }
              }
            }
          },
          PushDomain: {
            input: {
              type: 'structure',
              required: ['DomainName', 'Target'],
              members: {
                DomainName: {},
                Target: {}
              }
            }
          },
          RegisterDomain: {
            input: {
              type: 'structure',
              required: ['DomainName', 'DurationInYears', 'AdminContact', 'RegistrantContact', 'TechContact'],
              members: {
                DomainName: {},
                IdnLangCode: {},
                DurationInYears: {
                  type: 'integer'
                },
                AutoRenew: {
                  type: 'boolean'
                },
                AdminContact: {
                  shape: 'S1f'
                },
                RegistrantContact: {
                  shape: 'S1f'
                },
                TechContact: {
                  shape: 'S1f'
                },
                PrivacyProtectAdminContact: {
                  type: 'boolean'
                },
                PrivacyProtectRegistrantContact: {
                  type: 'boolean'
                },
                PrivacyProtectTechContact: {
                  type: 'boolean'
                },
                BillingContact: {
                  shape: 'S1f'
                },
                PrivacyProtectBillingContact: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                OperationId: {}
              }
            }
          },
          RejectDomainTransferFromAnotherAwsAccount: {
            input: {
              type: 'structure',
              required: ['DomainName'],
              members: {
                DomainName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                OperationId: {}
              }
            }
          },
          RenewDomain: {
            input: {
              type: 'structure',
              required: ['DomainName', 'CurrentExpiryYear'],
              members: {
                DomainName: {},
                DurationInYears: {
                  type: 'integer'
                },
                CurrentExpiryYear: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                OperationId: {}
              }
            }
          },
          ResendContactReachabilityEmail: {
            input: {
              type: 'structure',
              members: {
                domainName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                domainName: {},
                emailAddress: {
                  shape: 'S1o'
                },
                isAlreadyVerified: {
                  type: 'boolean'
                }
              }
            }
          },
          ResendOperationAuthorization: {
            input: {
              type: 'structure',
              required: ['OperationId'],
              members: {
                OperationId: {}
              }
            }
          },
          RetrieveDomainAuthCode: {
            input: {
              type: 'structure',
              required: ['DomainName'],
              members: {
                DomainName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                AuthCode: {
                  shape: 'Si'
                }
              }
            }
          },
          TransferDomain: {
            input: {
              type: 'structure',
              required: ['DomainName', 'DurationInYears', 'AdminContact', 'RegistrantContact', 'TechContact'],
              members: {
                DomainName: {},
                IdnLangCode: {},
                DurationInYears: {
                  type: 'integer'
                },
                Nameservers: {
                  shape: 'S19'
                },
                AuthCode: {
                  shape: 'Si'
                },
                AutoRenew: {
                  type: 'boolean'
                },
                AdminContact: {
                  shape: 'S1f'
                },
                RegistrantContact: {
                  shape: 'S1f'
                },
                TechContact: {
                  shape: 'S1f'
                },
                PrivacyProtectAdminContact: {
                  type: 'boolean'
                },
                PrivacyProtectRegistrantContact: {
                  type: 'boolean'
                },
                PrivacyProtectTechContact: {
                  type: 'boolean'
                },
                BillingContact: {
                  shape: 'S1f'
                },
                PrivacyProtectBillingContact: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                OperationId: {}
              }
            }
          },
          TransferDomainToAnotherAwsAccount: {
            input: {
              type: 'structure',
              required: ['DomainName', 'AccountId'],
              members: {
                DomainName: {},
                AccountId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                OperationId: {},
                Password: {
                  shape: 'S3'
                }
              }
            }
          },
          UpdateDomainContact: {
            input: {
              type: 'structure',
              required: ['DomainName'],
              members: {
                DomainName: {},
                AdminContact: {
                  shape: 'S1f'
                },
                RegistrantContact: {
                  shape: 'S1f'
                },
                TechContact: {
                  shape: 'S1f'
                },
                Consent: {
                  type: 'structure',
                  required: ['MaxPrice', 'Currency'],
                  members: {
                    MaxPrice: {
                      type: 'double'
                    },
                    Currency: {}
                  }
                },
                BillingContact: {
                  shape: 'S1f'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                OperationId: {}
              }
            }
          },
          UpdateDomainContactPrivacy: {
            input: {
              type: 'structure',
              required: ['DomainName'],
              members: {
                DomainName: {},
                AdminPrivacy: {
                  type: 'boolean'
                },
                RegistrantPrivacy: {
                  type: 'boolean'
                },
                TechPrivacy: {
                  type: 'boolean'
                },
                BillingPrivacy: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                OperationId: {}
              }
            }
          },
          UpdateDomainNameservers: {
            input: {
              type: 'structure',
              required: ['DomainName', 'Nameservers'],
              members: {
                DomainName: {},
                FIAuthKey: {
                  deprecated: true,
                  type: 'string',
                  sensitive: true
                },
                Nameservers: {
                  shape: 'S19'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                OperationId: {}
              }
            }
          },
          UpdateTagsForDomain: {
            input: {
              type: 'structure',
              required: ['DomainName'],
              members: {
                DomainName: {},
                TagsToUpdate: {
                  shape: 'S3c'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          ViewBilling: {
            input: {
              type: 'structure',
              members: {
                Start: {
                  type: 'timestamp'
                },
                End: {
                  type: 'timestamp'
                },
                Marker: {},
                MaxItems: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NextPageMarker: {},
                BillingRecords: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      DomainName: {},
                      Operation: {},
                      InvoiceId: {},
                      BillDate: {
                        type: 'timestamp'
                      },
                      Price: {
                        type: 'double'
                      }
                    }
                  }
                }
              }
            }
          }
        },
        shapes: {
          S3: {
            type: 'string',
            sensitive: true
          },
          Si: {
            type: 'string',
            sensitive: true
          },
          S19: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {},
                GlueIps: {
                  type: 'list',
                  member: {}
                }
              }
            }
          },
          S1f: {
            type: 'structure',
            members: {
              FirstName: {
                shape: 'S1g'
              },
              LastName: {
                shape: 'S1g'
              },
              ContactType: {},
              OrganizationName: {
                shape: 'S1g'
              },
              AddressLine1: {
                shape: 'S1i'
              },
              AddressLine2: {
                shape: 'S1i'
              },
              City: {
                type: 'string',
                sensitive: true
              },
              State: {
                type: 'string',
                sensitive: true
              },
              CountryCode: {
                type: 'string',
                sensitive: true
              },
              ZipCode: {
                type: 'string',
                sensitive: true
              },
              PhoneNumber: {
                shape: 'S1n'
              },
              Email: {
                shape: 'S1o'
              },
              Fax: {
                shape: 'S1n'
              },
              ExtraParams: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['Name', 'Value'],
                  members: {
                    Name: {},
                    Value: {
                      type: 'string',
                      sensitive: true
                    }
                  }
                }
              }
            },
            sensitive: true
          },
          S1g: {
            type: 'string',
            sensitive: true
          },
          S1i: {
            type: 'string',
            sensitive: true
          },
          S1n: {
            type: 'string',
            sensitive: true
          },
          S1o: {
            type: 'string',
            sensitive: true
          },
          S37: {
            type: 'structure',
            required: ['Price', 'Currency'],
            members: {
              Price: {
                type: 'double'
              },
              Currency: {}
            }
          },
          S3c: {
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
      });
    }
  };
});
//# sourceMappingURL=4ce8940ad48feb6aa127b188ec996961ba690b30.js.map