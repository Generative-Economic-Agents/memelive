System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2017-08-22',
          endpointPrefix: 'acm-pca',
          jsonVersion: '1.1',
          protocol: 'json',
          protocols: ['json'],
          serviceAbbreviation: 'ACM-PCA',
          serviceFullName: 'AWS Certificate Manager Private Certificate Authority',
          serviceId: 'ACM PCA',
          signatureVersion: 'v4',
          targetPrefix: 'ACMPrivateCA',
          uid: 'acm-pca-2017-08-22'
        },
        operations: {
          CreateCertificateAuthority: {
            input: {
              type: 'structure',
              required: ['CertificateAuthorityConfiguration', 'CertificateAuthorityType'],
              members: {
                CertificateAuthorityConfiguration: {
                  shape: 'S2'
                },
                RevocationConfiguration: {
                  shape: 'Sv'
                },
                CertificateAuthorityType: {},
                IdempotencyToken: {},
                KeyStorageSecurityStandard: {},
                Tags: {
                  shape: 'S16'
                },
                UsageMode: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                CertificateAuthorityArn: {}
              }
            },
            idempotent: true
          },
          CreateCertificateAuthorityAuditReport: {
            input: {
              type: 'structure',
              required: ['CertificateAuthorityArn', 'S3BucketName', 'AuditReportResponseFormat'],
              members: {
                CertificateAuthorityArn: {},
                S3BucketName: {},
                AuditReportResponseFormat: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                AuditReportId: {},
                S3Key: {}
              }
            },
            idempotent: true
          },
          CreatePermission: {
            input: {
              type: 'structure',
              required: ['CertificateAuthorityArn', 'Principal', 'Actions'],
              members: {
                CertificateAuthorityArn: {},
                Principal: {},
                SourceAccount: {},
                Actions: {
                  shape: 'S1m'
                }
              }
            }
          },
          DeleteCertificateAuthority: {
            input: {
              type: 'structure',
              required: ['CertificateAuthorityArn'],
              members: {
                CertificateAuthorityArn: {},
                PermanentDeletionTimeInDays: {
                  type: 'integer'
                }
              }
            }
          },
          DeletePermission: {
            input: {
              type: 'structure',
              required: ['CertificateAuthorityArn', 'Principal'],
              members: {
                CertificateAuthorityArn: {},
                Principal: {},
                SourceAccount: {}
              }
            }
          },
          DeletePolicy: {
            input: {
              type: 'structure',
              required: ['ResourceArn'],
              members: {
                ResourceArn: {}
              }
            }
          },
          DescribeCertificateAuthority: {
            input: {
              type: 'structure',
              required: ['CertificateAuthorityArn'],
              members: {
                CertificateAuthorityArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                CertificateAuthority: {
                  shape: 'S1u'
                }
              }
            }
          },
          DescribeCertificateAuthorityAuditReport: {
            input: {
              type: 'structure',
              required: ['CertificateAuthorityArn', 'AuditReportId'],
              members: {
                CertificateAuthorityArn: {},
                AuditReportId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                AuditReportStatus: {},
                S3BucketName: {},
                S3Key: {},
                CreatedAt: {
                  type: 'timestamp'
                }
              }
            }
          },
          GetCertificate: {
            input: {
              type: 'structure',
              required: ['CertificateAuthorityArn', 'CertificateArn'],
              members: {
                CertificateAuthorityArn: {},
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
          GetCertificateAuthorityCertificate: {
            input: {
              type: 'structure',
              required: ['CertificateAuthorityArn'],
              members: {
                CertificateAuthorityArn: {}
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
          GetCertificateAuthorityCsr: {
            input: {
              type: 'structure',
              required: ['CertificateAuthorityArn'],
              members: {
                CertificateAuthorityArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Csr: {}
              }
            }
          },
          GetPolicy: {
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
                Policy: {}
              }
            }
          },
          ImportCertificateAuthorityCertificate: {
            input: {
              type: 'structure',
              required: ['CertificateAuthorityArn', 'Certificate'],
              members: {
                CertificateAuthorityArn: {},
                Certificate: {
                  type: 'blob'
                },
                CertificateChain: {
                  type: 'blob'
                }
              }
            }
          },
          IssueCertificate: {
            input: {
              type: 'structure',
              required: ['CertificateAuthorityArn', 'Csr', 'SigningAlgorithm', 'Validity'],
              members: {
                ApiPassthrough: {
                  type: 'structure',
                  members: {
                    Extensions: {
                      type: 'structure',
                      members: {
                        CertificatePolicies: {
                          type: 'list',
                          member: {
                            type: 'structure',
                            required: ['CertPolicyId'],
                            members: {
                              CertPolicyId: {},
                              PolicyQualifiers: {
                                type: 'list',
                                member: {
                                  type: 'structure',
                                  required: ['PolicyQualifierId', 'Qualifier'],
                                  members: {
                                    PolicyQualifierId: {},
                                    Qualifier: {
                                      type: 'structure',
                                      required: ['CpsUri'],
                                      members: {
                                        CpsUri: {}
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        ExtendedKeyUsage: {
                          type: 'list',
                          member: {
                            type: 'structure',
                            members: {
                              ExtendedKeyUsageType: {},
                              ExtendedKeyUsageObjectIdentifier: {}
                            }
                          }
                        },
                        KeyUsage: {
                          shape: 'Sj'
                        },
                        SubjectAlternativeNames: {
                          type: 'list',
                          member: {
                            shape: 'Sp'
                          }
                        },
                        CustomExtensions: {
                          type: 'list',
                          member: {
                            type: 'structure',
                            required: ['ObjectIdentifier', 'Value'],
                            members: {
                              ObjectIdentifier: {},
                              Value: {},
                              Critical: {
                                type: 'boolean'
                              }
                            }
                          }
                        }
                      }
                    },
                    Subject: {
                      shape: 'S5'
                    }
                  }
                },
                CertificateAuthorityArn: {},
                Csr: {
                  type: 'blob'
                },
                SigningAlgorithm: {},
                TemplateArn: {},
                Validity: {
                  shape: 'S2y'
                },
                ValidityNotBefore: {
                  shape: 'S2y'
                },
                IdempotencyToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                CertificateArn: {}
              }
            },
            idempotent: true
          },
          ListCertificateAuthorities: {
            input: {
              type: 'structure',
              members: {
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                ResourceOwner: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                CertificateAuthorities: {
                  type: 'list',
                  member: {
                    shape: 'S1u'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListPermissions: {
            input: {
              type: 'structure',
              required: ['CertificateAuthorityArn'],
              members: {
                CertificateAuthorityArn: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Permissions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      CertificateAuthorityArn: {},
                      CreatedAt: {
                        type: 'timestamp'
                      },
                      Principal: {},
                      SourceAccount: {},
                      Actions: {
                        shape: 'S1m'
                      },
                      Policy: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListTags: {
            input: {
              type: 'structure',
              required: ['CertificateAuthorityArn'],
              members: {
                CertificateAuthorityArn: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Tags: {
                  shape: 'S16'
                },
                NextToken: {}
              }
            }
          },
          PutPolicy: {
            input: {
              type: 'structure',
              required: ['ResourceArn', 'Policy'],
              members: {
                ResourceArn: {},
                Policy: {}
              }
            }
          },
          RestoreCertificateAuthority: {
            input: {
              type: 'structure',
              required: ['CertificateAuthorityArn'],
              members: {
                CertificateAuthorityArn: {}
              }
            }
          },
          RevokeCertificate: {
            input: {
              type: 'structure',
              required: ['CertificateAuthorityArn', 'CertificateSerial', 'RevocationReason'],
              members: {
                CertificateAuthorityArn: {},
                CertificateSerial: {},
                RevocationReason: {}
              }
            }
          },
          TagCertificateAuthority: {
            input: {
              type: 'structure',
              required: ['CertificateAuthorityArn', 'Tags'],
              members: {
                CertificateAuthorityArn: {},
                Tags: {
                  shape: 'S16'
                }
              }
            }
          },
          UntagCertificateAuthority: {
            input: {
              type: 'structure',
              required: ['CertificateAuthorityArn', 'Tags'],
              members: {
                CertificateAuthorityArn: {},
                Tags: {
                  shape: 'S16'
                }
              }
            }
          },
          UpdateCertificateAuthority: {
            input: {
              type: 'structure',
              required: ['CertificateAuthorityArn'],
              members: {
                CertificateAuthorityArn: {},
                RevocationConfiguration: {
                  shape: 'Sv'
                },
                Status: {}
              }
            }
          }
        },
        shapes: {
          S2: {
            type: 'structure',
            required: ['KeyAlgorithm', 'SigningAlgorithm', 'Subject'],
            members: {
              KeyAlgorithm: {},
              SigningAlgorithm: {},
              Subject: {
                shape: 'S5'
              },
              CsrExtensions: {
                type: 'structure',
                members: {
                  KeyUsage: {
                    shape: 'Sj'
                  },
                  SubjectInformationAccess: {
                    type: 'list',
                    member: {
                      type: 'structure',
                      required: ['AccessMethod', 'AccessLocation'],
                      members: {
                        AccessMethod: {
                          type: 'structure',
                          members: {
                            CustomObjectIdentifier: {},
                            AccessMethodType: {}
                          }
                        },
                        AccessLocation: {
                          shape: 'Sp'
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          S5: {
            type: 'structure',
            members: {
              Country: {},
              Organization: {},
              OrganizationalUnit: {},
              DistinguishedNameQualifier: {},
              State: {},
              CommonName: {},
              SerialNumber: {},
              Locality: {},
              Title: {},
              Surname: {},
              GivenName: {},
              Initials: {},
              Pseudonym: {},
              GenerationQualifier: {},
              CustomAttributes: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['ObjectIdentifier', 'Value'],
                  members: {
                    ObjectIdentifier: {},
                    Value: {}
                  }
                }
              }
            }
          },
          Sj: {
            type: 'structure',
            members: {
              DigitalSignature: {
                type: 'boolean'
              },
              NonRepudiation: {
                type: 'boolean'
              },
              KeyEncipherment: {
                type: 'boolean'
              },
              DataEncipherment: {
                type: 'boolean'
              },
              KeyAgreement: {
                type: 'boolean'
              },
              KeyCertSign: {
                type: 'boolean'
              },
              CRLSign: {
                type: 'boolean'
              },
              EncipherOnly: {
                type: 'boolean'
              },
              DecipherOnly: {
                type: 'boolean'
              }
            }
          },
          Sp: {
            type: 'structure',
            members: {
              OtherName: {
                type: 'structure',
                required: ['TypeId', 'Value'],
                members: {
                  TypeId: {},
                  Value: {}
                }
              },
              Rfc822Name: {},
              DnsName: {},
              DirectoryName: {
                shape: 'S5'
              },
              EdiPartyName: {
                type: 'structure',
                required: ['PartyName'],
                members: {
                  PartyName: {},
                  NameAssigner: {}
                }
              },
              UniformResourceIdentifier: {},
              IpAddress: {},
              RegisteredId: {}
            }
          },
          Sv: {
            type: 'structure',
            members: {
              CrlConfiguration: {
                type: 'structure',
                required: ['Enabled'],
                members: {
                  Enabled: {
                    type: 'boolean'
                  },
                  ExpirationInDays: {
                    type: 'integer'
                  },
                  CustomCname: {},
                  S3BucketName: {},
                  S3ObjectAcl: {},
                  CrlDistributionPointExtensionConfiguration: {
                    type: 'structure',
                    required: ['OmitExtension'],
                    members: {
                      OmitExtension: {
                        type: 'boolean'
                      }
                    }
                  }
                }
              },
              OcspConfiguration: {
                type: 'structure',
                required: ['Enabled'],
                members: {
                  Enabled: {
                    type: 'boolean'
                  },
                  OcspCustomCname: {}
                }
              }
            }
          },
          S16: {
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
          S1m: {
            type: 'list',
            member: {}
          },
          S1u: {
            type: 'structure',
            members: {
              Arn: {},
              OwnerAccount: {},
              CreatedAt: {
                type: 'timestamp'
              },
              LastStateChangeAt: {
                type: 'timestamp'
              },
              Type: {},
              Serial: {},
              Status: {},
              NotBefore: {
                type: 'timestamp'
              },
              NotAfter: {
                type: 'timestamp'
              },
              FailureReason: {},
              CertificateAuthorityConfiguration: {
                shape: 'S2'
              },
              RevocationConfiguration: {
                shape: 'Sv'
              },
              RestorableUntil: {
                type: 'timestamp'
              },
              KeyStorageSecurityStandard: {},
              UsageMode: {}
            }
          },
          S2y: {
            type: 'structure',
            required: ['Value', 'Type'],
            members: {
              Value: {
                type: 'long'
              },
              Type: {}
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=d7d578456be49a63872cc74644f368a07660a268.js.map