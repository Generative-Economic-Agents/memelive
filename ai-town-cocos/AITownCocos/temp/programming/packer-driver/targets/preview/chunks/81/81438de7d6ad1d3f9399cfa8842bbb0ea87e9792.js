System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2015-12-08',
          endpointPrefix: 'acm',
          jsonVersion: '1.1',
          protocol: 'json',
          protocols: ['json'],
          serviceAbbreviation: 'ACM',
          serviceFullName: 'AWS Certificate Manager',
          serviceId: 'ACM',
          signatureVersion: 'v4',
          targetPrefix: 'CertificateManager',
          uid: 'acm-2015-12-08'
        },
        operations: {
          AddTagsToCertificate: {
            input: {
              type: 'structure',
              required: ['CertificateArn', 'Tags'],
              members: {
                CertificateArn: {},
                Tags: {
                  shape: 'S3'
                }
              }
            }
          },
          DeleteCertificate: {
            input: {
              type: 'structure',
              required: ['CertificateArn'],
              members: {
                CertificateArn: {}
              }
            }
          },
          DescribeCertificate: {
            input: {
              type: 'structure',
              required: ['CertificateArn'],
              members: {
                CertificateArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Certificate: {
                  type: 'structure',
                  members: {
                    CertificateArn: {},
                    DomainName: {},
                    SubjectAlternativeNames: {
                      shape: 'Sc'
                    },
                    DomainValidationOptions: {
                      shape: 'Sd'
                    },
                    Serial: {},
                    Subject: {},
                    Issuer: {},
                    CreatedAt: {
                      type: 'timestamp'
                    },
                    IssuedAt: {
                      type: 'timestamp'
                    },
                    ImportedAt: {
                      type: 'timestamp'
                    },
                    Status: {},
                    RevokedAt: {
                      type: 'timestamp'
                    },
                    RevocationReason: {},
                    NotBefore: {
                      type: 'timestamp'
                    },
                    NotAfter: {
                      type: 'timestamp'
                    },
                    KeyAlgorithm: {},
                    SignatureAlgorithm: {},
                    InUseBy: {
                      type: 'list',
                      member: {}
                    },
                    FailureReason: {},
                    Type: {},
                    RenewalSummary: {
                      type: 'structure',
                      required: ['RenewalStatus', 'DomainValidationOptions', 'UpdatedAt'],
                      members: {
                        RenewalStatus: {},
                        DomainValidationOptions: {
                          shape: 'Sd'
                        },
                        RenewalStatusReason: {},
                        UpdatedAt: {
                          type: 'timestamp'
                        }
                      }
                    },
                    KeyUsages: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          Name: {}
                        }
                      }
                    },
                    ExtendedKeyUsages: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          Name: {},
                          OID: {}
                        }
                      }
                    },
                    CertificateAuthorityArn: {},
                    RenewalEligibility: {},
                    Options: {
                      shape: 'S11'
                    }
                  }
                }
              }
            }
          },
          ExportCertificate: {
            input: {
              type: 'structure',
              required: ['CertificateArn', 'Passphrase'],
              members: {
                CertificateArn: {},
                Passphrase: {
                  type: 'blob',
                  sensitive: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Certificate: {},
                CertificateChain: {},
                PrivateKey: {
                  type: 'string',
                  sensitive: true
                }
              }
            }
          },
          GetAccountConfiguration: {
            output: {
              type: 'structure',
              members: {
                ExpiryEvents: {
                  shape: 'S1a'
                }
              }
            }
          },
          GetCertificate: {
            input: {
              type: 'structure',
              required: ['CertificateArn'],
              members: {
                CertificateArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Certificate: {},
                CertificateChain: {}
              }
            }
          },
          ImportCertificate: {
            input: {
              type: 'structure',
              required: ['Certificate', 'PrivateKey'],
              members: {
                CertificateArn: {},
                Certificate: {
                  type: 'blob'
                },
                PrivateKey: {
                  type: 'blob',
                  sensitive: true
                },
                CertificateChain: {
                  type: 'blob'
                },
                Tags: {
                  shape: 'S3'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                CertificateArn: {}
              }
            }
          },
          ListCertificates: {
            input: {
              type: 'structure',
              members: {
                CertificateStatuses: {
                  type: 'list',
                  member: {}
                },
                Includes: {
                  type: 'structure',
                  members: {
                    extendedKeyUsage: {
                      type: 'list',
                      member: {}
                    },
                    keyUsage: {
                      type: 'list',
                      member: {}
                    },
                    keyTypes: {
                      type: 'list',
                      member: {}
                    }
                  }
                },
                NextToken: {},
                MaxItems: {
                  type: 'integer'
                },
                SortBy: {},
                SortOrder: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                CertificateSummaryList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      CertificateArn: {},
                      DomainName: {},
                      SubjectAlternativeNameSummaries: {
                        shape: 'Sc'
                      },
                      HasAdditionalSubjectAlternativeNames: {
                        type: 'boolean'
                      },
                      Status: {},
                      Type: {},
                      KeyAlgorithm: {},
                      KeyUsages: {
                        type: 'list',
                        member: {}
                      },
                      ExtendedKeyUsages: {
                        type: 'list',
                        member: {}
                      },
                      InUse: {
                        type: 'boolean'
                      },
                      Exported: {
                        type: 'boolean'
                      },
                      RenewalEligibility: {},
                      NotBefore: {
                        type: 'timestamp'
                      },
                      NotAfter: {
                        type: 'timestamp'
                      },
                      CreatedAt: {
                        type: 'timestamp'
                      },
                      IssuedAt: {
                        type: 'timestamp'
                      },
                      ImportedAt: {
                        type: 'timestamp'
                      },
                      RevokedAt: {
                        type: 'timestamp'
                      }
                    }
                  }
                }
              }
            }
          },
          ListTagsForCertificate: {
            input: {
              type: 'structure',
              required: ['CertificateArn'],
              members: {
                CertificateArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Tags: {
                  shape: 'S3'
                }
              }
            }
          },
          PutAccountConfiguration: {
            input: {
              type: 'structure',
              required: ['IdempotencyToken'],
              members: {
                ExpiryEvents: {
                  shape: 'S1a'
                },
                IdempotencyToken: {}
              }
            }
          },
          RemoveTagsFromCertificate: {
            input: {
              type: 'structure',
              required: ['CertificateArn', 'Tags'],
              members: {
                CertificateArn: {},
                Tags: {
                  shape: 'S3'
                }
              }
            }
          },
          RenewCertificate: {
            input: {
              type: 'structure',
              required: ['CertificateArn'],
              members: {
                CertificateArn: {}
              }
            }
          },
          RequestCertificate: {
            input: {
              type: 'structure',
              required: ['DomainName'],
              members: {
                DomainName: {},
                ValidationMethod: {},
                SubjectAlternativeNames: {
                  shape: 'Sc'
                },
                IdempotencyToken: {},
                DomainValidationOptions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['DomainName', 'ValidationDomain'],
                    members: {
                      DomainName: {},
                      ValidationDomain: {}
                    }
                  }
                },
                Options: {
                  shape: 'S11'
                },
                CertificateAuthorityArn: {},
                Tags: {
                  shape: 'S3'
                },
                KeyAlgorithm: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                CertificateArn: {}
              }
            }
          },
          ResendValidationEmail: {
            input: {
              type: 'structure',
              required: ['CertificateArn', 'Domain', 'ValidationDomain'],
              members: {
                CertificateArn: {},
                Domain: {},
                ValidationDomain: {}
              }
            }
          },
          UpdateCertificateOptions: {
            input: {
              type: 'structure',
              required: ['CertificateArn', 'Options'],
              members: {
                CertificateArn: {},
                Options: {
                  shape: 'S11'
                }
              }
            }
          }
        },
        shapes: {
          S3: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Key'],
              members: {
                Key: {},
                Value: {}
              }
            }
          },
          Sc: {
            type: 'list',
            member: {}
          },
          Sd: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['DomainName'],
              members: {
                DomainName: {},
                ValidationEmails: {
                  type: 'list',
                  member: {}
                },
                ValidationDomain: {},
                ValidationStatus: {},
                ResourceRecord: {
                  type: 'structure',
                  required: ['Name', 'Type', 'Value'],
                  members: {
                    Name: {},
                    Type: {},
                    Value: {}
                  }
                },
                ValidationMethod: {}
              }
            }
          },
          S11: {
            type: 'structure',
            members: {
              CertificateTransparencyLoggingPreference: {}
            }
          },
          S1a: {
            type: 'structure',
            members: {
              DaysBeforeExpiry: {
                type: 'integer'
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=81438de7d6ad1d3f9399cfa8842bbb0ea87e9792.js.map