System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2018-05-10',
          endpointPrefix: 'pca-connector-ad',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceFullName: 'PcaConnectorAd',
          serviceId: 'Pca Connector Ad',
          signatureVersion: 'v4',
          signingName: 'pca-connector-ad',
          uid: 'pca-connector-ad-2018-05-10'
        },
        operations: {
          CreateConnector: {
            http: {
              requestUri: '/connectors',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['CertificateAuthorityArn', 'DirectoryId', 'VpcInformation'],
              members: {
                CertificateAuthorityArn: {},
                ClientToken: {
                  idempotencyToken: true
                },
                DirectoryId: {},
                Tags: {
                  shape: 'S5'
                },
                VpcInformation: {
                  shape: 'S7'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ConnectorArn: {}
              }
            }
          },
          CreateDirectoryRegistration: {
            http: {
              requestUri: '/directoryRegistrations',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['DirectoryId'],
              members: {
                ClientToken: {
                  idempotencyToken: true
                },
                DirectoryId: {},
                Tags: {
                  shape: 'S5'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                DirectoryRegistrationArn: {}
              }
            }
          },
          CreateServicePrincipalName: {
            http: {
              requestUri: '/directoryRegistrations/{DirectoryRegistrationArn}/servicePrincipalNames/{ConnectorArn}',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['ConnectorArn', 'DirectoryRegistrationArn'],
              members: {
                ClientToken: {
                  idempotencyToken: true
                },
                ConnectorArn: {
                  location: 'uri',
                  locationName: 'ConnectorArn'
                },
                DirectoryRegistrationArn: {
                  location: 'uri',
                  locationName: 'DirectoryRegistrationArn'
                }
              }
            },
            idempotent: true
          },
          CreateTemplate: {
            http: {
              requestUri: '/templates',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ConnectorArn', 'Definition', 'Name'],
              members: {
                ClientToken: {
                  idempotencyToken: true
                },
                ConnectorArn: {},
                Definition: {
                  shape: 'Sh'
                },
                Name: {},
                Tags: {
                  shape: 'S5'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                TemplateArn: {}
              }
            }
          },
          CreateTemplateGroupAccessControlEntry: {
            http: {
              requestUri: '/templates/{TemplateArn}/accessControlEntries',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['AccessRights', 'GroupDisplayName', 'GroupSecurityIdentifier', 'TemplateArn'],
              members: {
                AccessRights: {
                  shape: 'S1y'
                },
                ClientToken: {
                  idempotencyToken: true
                },
                GroupDisplayName: {},
                GroupSecurityIdentifier: {},
                TemplateArn: {
                  location: 'uri',
                  locationName: 'TemplateArn'
                }
              }
            },
            idempotent: true
          },
          DeleteConnector: {
            http: {
              method: 'DELETE',
              requestUri: '/connectors/{ConnectorArn}',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['ConnectorArn'],
              members: {
                ConnectorArn: {
                  location: 'uri',
                  locationName: 'ConnectorArn'
                }
              }
            },
            idempotent: true
          },
          DeleteDirectoryRegistration: {
            http: {
              method: 'DELETE',
              requestUri: '/directoryRegistrations/{DirectoryRegistrationArn}',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['DirectoryRegistrationArn'],
              members: {
                DirectoryRegistrationArn: {
                  location: 'uri',
                  locationName: 'DirectoryRegistrationArn'
                }
              }
            },
            idempotent: true
          },
          DeleteServicePrincipalName: {
            http: {
              method: 'DELETE',
              requestUri: '/directoryRegistrations/{DirectoryRegistrationArn}/servicePrincipalNames/{ConnectorArn}',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['ConnectorArn', 'DirectoryRegistrationArn'],
              members: {
                ConnectorArn: {
                  location: 'uri',
                  locationName: 'ConnectorArn'
                },
                DirectoryRegistrationArn: {
                  location: 'uri',
                  locationName: 'DirectoryRegistrationArn'
                }
              }
            },
            idempotent: true
          },
          DeleteTemplate: {
            http: {
              method: 'DELETE',
              requestUri: '/templates/{TemplateArn}',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['TemplateArn'],
              members: {
                TemplateArn: {
                  location: 'uri',
                  locationName: 'TemplateArn'
                }
              }
            },
            idempotent: true
          },
          DeleteTemplateGroupAccessControlEntry: {
            http: {
              method: 'DELETE',
              requestUri: '/templates/{TemplateArn}/accessControlEntries/{GroupSecurityIdentifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['GroupSecurityIdentifier', 'TemplateArn'],
              members: {
                GroupSecurityIdentifier: {
                  location: 'uri',
                  locationName: 'GroupSecurityIdentifier'
                },
                TemplateArn: {
                  location: 'uri',
                  locationName: 'TemplateArn'
                }
              }
            },
            idempotent: true
          },
          GetConnector: {
            http: {
              method: 'GET',
              requestUri: '/connectors/{ConnectorArn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ConnectorArn'],
              members: {
                ConnectorArn: {
                  location: 'uri',
                  locationName: 'ConnectorArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Connector: {
                  type: 'structure',
                  members: {
                    Arn: {},
                    CertificateAuthorityArn: {},
                    CertificateEnrollmentPolicyServerEndpoint: {},
                    CreatedAt: {
                      type: 'timestamp'
                    },
                    DirectoryId: {},
                    Status: {},
                    StatusReason: {},
                    UpdatedAt: {
                      type: 'timestamp'
                    },
                    VpcInformation: {
                      shape: 'S7'
                    }
                  }
                }
              }
            }
          },
          GetDirectoryRegistration: {
            http: {
              method: 'GET',
              requestUri: '/directoryRegistrations/{DirectoryRegistrationArn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['DirectoryRegistrationArn'],
              members: {
                DirectoryRegistrationArn: {
                  location: 'uri',
                  locationName: 'DirectoryRegistrationArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                DirectoryRegistration: {
                  type: 'structure',
                  members: {
                    Arn: {},
                    CreatedAt: {
                      type: 'timestamp'
                    },
                    DirectoryId: {},
                    Status: {},
                    StatusReason: {},
                    UpdatedAt: {
                      type: 'timestamp'
                    }
                  }
                }
              }
            }
          },
          GetServicePrincipalName: {
            http: {
              method: 'GET',
              requestUri: '/directoryRegistrations/{DirectoryRegistrationArn}/servicePrincipalNames/{ConnectorArn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ConnectorArn', 'DirectoryRegistrationArn'],
              members: {
                ConnectorArn: {
                  location: 'uri',
                  locationName: 'ConnectorArn'
                },
                DirectoryRegistrationArn: {
                  location: 'uri',
                  locationName: 'DirectoryRegistrationArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ServicePrincipalName: {
                  type: 'structure',
                  members: {
                    ConnectorArn: {},
                    CreatedAt: {
                      type: 'timestamp'
                    },
                    DirectoryRegistrationArn: {},
                    Status: {},
                    StatusReason: {},
                    UpdatedAt: {
                      type: 'timestamp'
                    }
                  }
                }
              }
            }
          },
          GetTemplate: {
            http: {
              method: 'GET',
              requestUri: '/templates/{TemplateArn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['TemplateArn'],
              members: {
                TemplateArn: {
                  location: 'uri',
                  locationName: 'TemplateArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Template: {
                  type: 'structure',
                  members: {
                    Arn: {},
                    ConnectorArn: {},
                    CreatedAt: {
                      type: 'timestamp'
                    },
                    Definition: {
                      shape: 'Sh'
                    },
                    Name: {},
                    ObjectIdentifier: {},
                    PolicySchema: {
                      type: 'integer'
                    },
                    Revision: {
                      shape: 'S2r'
                    },
                    Status: {},
                    UpdatedAt: {
                      type: 'timestamp'
                    }
                  }
                }
              }
            }
          },
          GetTemplateGroupAccessControlEntry: {
            http: {
              method: 'GET',
              requestUri: '/templates/{TemplateArn}/accessControlEntries/{GroupSecurityIdentifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['GroupSecurityIdentifier', 'TemplateArn'],
              members: {
                GroupSecurityIdentifier: {
                  location: 'uri',
                  locationName: 'GroupSecurityIdentifier'
                },
                TemplateArn: {
                  location: 'uri',
                  locationName: 'TemplateArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AccessControlEntry: {
                  type: 'structure',
                  members: {
                    AccessRights: {
                      shape: 'S1y'
                    },
                    CreatedAt: {
                      type: 'timestamp'
                    },
                    GroupDisplayName: {},
                    GroupSecurityIdentifier: {},
                    TemplateArn: {},
                    UpdatedAt: {
                      type: 'timestamp'
                    }
                  }
                }
              }
            }
          },
          ListConnectors: {
            http: {
              method: 'GET',
              requestUri: '/connectors',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                MaxResults: {
                  location: 'querystring',
                  locationName: 'MaxResults',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'NextToken'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Connectors: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Arn: {},
                      CertificateAuthorityArn: {},
                      CertificateEnrollmentPolicyServerEndpoint: {},
                      CreatedAt: {
                        type: 'timestamp'
                      },
                      DirectoryId: {},
                      Status: {},
                      StatusReason: {},
                      UpdatedAt: {
                        type: 'timestamp'
                      },
                      VpcInformation: {
                        shape: 'S7'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListDirectoryRegistrations: {
            http: {
              method: 'GET',
              requestUri: '/directoryRegistrations',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                MaxResults: {
                  location: 'querystring',
                  locationName: 'MaxResults',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'NextToken'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                DirectoryRegistrations: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Arn: {},
                      CreatedAt: {
                        type: 'timestamp'
                      },
                      DirectoryId: {},
                      Status: {},
                      StatusReason: {},
                      UpdatedAt: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListServicePrincipalNames: {
            http: {
              method: 'GET',
              requestUri: '/directoryRegistrations/{DirectoryRegistrationArn}/servicePrincipalNames',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['DirectoryRegistrationArn'],
              members: {
                DirectoryRegistrationArn: {
                  location: 'uri',
                  locationName: 'DirectoryRegistrationArn'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'MaxResults',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'NextToken'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                ServicePrincipalNames: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ConnectorArn: {},
                      CreatedAt: {
                        type: 'timestamp'
                      },
                      DirectoryRegistrationArn: {},
                      Status: {},
                      StatusReason: {},
                      UpdatedAt: {
                        type: 'timestamp'
                      }
                    }
                  }
                }
              }
            }
          },
          ListTagsForResource: {
            http: {
              method: 'GET',
              requestUri: '/tags/{ResourceArn}',
              responseCode: 200
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
                  shape: 'S5'
                }
              }
            }
          },
          ListTemplateGroupAccessControlEntries: {
            http: {
              method: 'GET',
              requestUri: '/templates/{TemplateArn}/accessControlEntries',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['TemplateArn'],
              members: {
                MaxResults: {
                  location: 'querystring',
                  locationName: 'MaxResults',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'NextToken'
                },
                TemplateArn: {
                  location: 'uri',
                  locationName: 'TemplateArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AccessControlEntries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      AccessRights: {
                        shape: 'S1y'
                      },
                      CreatedAt: {
                        type: 'timestamp'
                      },
                      GroupDisplayName: {},
                      GroupSecurityIdentifier: {},
                      TemplateArn: {},
                      UpdatedAt: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListTemplates: {
            http: {
              method: 'GET',
              requestUri: '/templates',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ConnectorArn'],
              members: {
                ConnectorArn: {
                  location: 'querystring',
                  locationName: 'ConnectorArn'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'MaxResults',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'NextToken'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                Templates: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Arn: {},
                      ConnectorArn: {},
                      CreatedAt: {
                        type: 'timestamp'
                      },
                      Definition: {
                        shape: 'Sh'
                      },
                      Name: {},
                      ObjectIdentifier: {},
                      PolicySchema: {
                        type: 'integer'
                      },
                      Revision: {
                        shape: 'S2r'
                      },
                      Status: {},
                      UpdatedAt: {
                        type: 'timestamp'
                      }
                    }
                  }
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
                  shape: 'S5'
                }
              }
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
            idempotent: true
          },
          UpdateTemplate: {
            http: {
              method: 'PATCH',
              requestUri: '/templates/{TemplateArn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['TemplateArn'],
              members: {
                Definition: {
                  shape: 'Sh'
                },
                ReenrollAllCertificateHolders: {
                  type: 'boolean'
                },
                TemplateArn: {
                  location: 'uri',
                  locationName: 'TemplateArn'
                }
              }
            }
          },
          UpdateTemplateGroupAccessControlEntry: {
            http: {
              method: 'PATCH',
              requestUri: '/templates/{TemplateArn}/accessControlEntries/{GroupSecurityIdentifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['GroupSecurityIdentifier', 'TemplateArn'],
              members: {
                AccessRights: {
                  shape: 'S1y'
                },
                GroupDisplayName: {},
                GroupSecurityIdentifier: {
                  location: 'uri',
                  locationName: 'GroupSecurityIdentifier'
                },
                TemplateArn: {
                  location: 'uri',
                  locationName: 'TemplateArn'
                }
              }
            }
          }
        },
        shapes: {
          S5: {
            type: 'map',
            key: {},
            value: {}
          },
          S7: {
            type: 'structure',
            required: ['SecurityGroupIds'],
            members: {
              SecurityGroupIds: {
                type: 'list',
                member: {}
              }
            }
          },
          Sh: {
            type: 'structure',
            members: {
              TemplateV2: {
                type: 'structure',
                required: ['CertificateValidity', 'EnrollmentFlags', 'Extensions', 'GeneralFlags', 'PrivateKeyAttributes', 'PrivateKeyFlags', 'SubjectNameFlags'],
                members: {
                  CertificateValidity: {
                    shape: 'Sj'
                  },
                  EnrollmentFlags: {
                    type: 'structure',
                    members: {
                      EnableKeyReuseOnNtTokenKeysetStorageFull: {
                        type: 'boolean'
                      },
                      IncludeSymmetricAlgorithms: {
                        type: 'boolean'
                      },
                      NoSecurityExtension: {
                        type: 'boolean'
                      },
                      RemoveInvalidCertificateFromPersonalStore: {
                        type: 'boolean'
                      },
                      UserInteractionRequired: {
                        type: 'boolean'
                      }
                    }
                  },
                  Extensions: {
                    type: 'structure',
                    required: ['KeyUsage'],
                    members: {
                      ApplicationPolicies: {
                        shape: 'Sq'
                      },
                      KeyUsage: {
                        shape: 'Sv'
                      }
                    }
                  },
                  GeneralFlags: {
                    type: 'structure',
                    members: {
                      AutoEnrollment: {
                        type: 'boolean'
                      },
                      MachineType: {
                        type: 'boolean'
                      }
                    }
                  },
                  PrivateKeyAttributes: {
                    type: 'structure',
                    required: ['KeySpec', 'MinimalKeyLength'],
                    members: {
                      CryptoProviders: {
                        shape: 'Sz'
                      },
                      KeySpec: {},
                      MinimalKeyLength: {
                        type: 'integer'
                      }
                    }
                  },
                  PrivateKeyFlags: {
                    type: 'structure',
                    required: ['ClientVersion'],
                    members: {
                      ClientVersion: {},
                      ExportableKey: {
                        type: 'boolean'
                      },
                      StrongKeyProtectionRequired: {
                        type: 'boolean'
                      }
                    }
                  },
                  SubjectNameFlags: {
                    type: 'structure',
                    members: {
                      RequireCommonName: {
                        type: 'boolean'
                      },
                      RequireDirectoryPath: {
                        type: 'boolean'
                      },
                      RequireDnsAsCn: {
                        type: 'boolean'
                      },
                      RequireEmail: {
                        type: 'boolean'
                      },
                      SanRequireDirectoryGuid: {
                        type: 'boolean'
                      },
                      SanRequireDns: {
                        type: 'boolean'
                      },
                      SanRequireDomainDns: {
                        type: 'boolean'
                      },
                      SanRequireEmail: {
                        type: 'boolean'
                      },
                      SanRequireSpn: {
                        type: 'boolean'
                      },
                      SanRequireUpn: {
                        type: 'boolean'
                      }
                    }
                  },
                  SupersededTemplates: {
                    shape: 'S16'
                  }
                }
              },
              TemplateV3: {
                type: 'structure',
                required: ['CertificateValidity', 'EnrollmentFlags', 'Extensions', 'GeneralFlags', 'HashAlgorithm', 'PrivateKeyAttributes', 'PrivateKeyFlags', 'SubjectNameFlags'],
                members: {
                  CertificateValidity: {
                    shape: 'Sj'
                  },
                  EnrollmentFlags: {
                    type: 'structure',
                    members: {
                      EnableKeyReuseOnNtTokenKeysetStorageFull: {
                        type: 'boolean'
                      },
                      IncludeSymmetricAlgorithms: {
                        type: 'boolean'
                      },
                      NoSecurityExtension: {
                        type: 'boolean'
                      },
                      RemoveInvalidCertificateFromPersonalStore: {
                        type: 'boolean'
                      },
                      UserInteractionRequired: {
                        type: 'boolean'
                      }
                    }
                  },
                  Extensions: {
                    type: 'structure',
                    required: ['KeyUsage'],
                    members: {
                      ApplicationPolicies: {
                        shape: 'Sq'
                      },
                      KeyUsage: {
                        shape: 'Sv'
                      }
                    }
                  },
                  GeneralFlags: {
                    type: 'structure',
                    members: {
                      AutoEnrollment: {
                        type: 'boolean'
                      },
                      MachineType: {
                        type: 'boolean'
                      }
                    }
                  },
                  HashAlgorithm: {},
                  PrivateKeyAttributes: {
                    type: 'structure',
                    required: ['Algorithm', 'KeySpec', 'KeyUsageProperty', 'MinimalKeyLength'],
                    members: {
                      Algorithm: {},
                      CryptoProviders: {
                        shape: 'Sz'
                      },
                      KeySpec: {},
                      KeyUsageProperty: {
                        shape: 'S1f'
                      },
                      MinimalKeyLength: {
                        type: 'integer'
                      }
                    }
                  },
                  PrivateKeyFlags: {
                    type: 'structure',
                    required: ['ClientVersion'],
                    members: {
                      ClientVersion: {},
                      ExportableKey: {
                        type: 'boolean'
                      },
                      RequireAlternateSignatureAlgorithm: {
                        type: 'boolean'
                      },
                      StrongKeyProtectionRequired: {
                        type: 'boolean'
                      }
                    }
                  },
                  SubjectNameFlags: {
                    type: 'structure',
                    members: {
                      RequireCommonName: {
                        type: 'boolean'
                      },
                      RequireDirectoryPath: {
                        type: 'boolean'
                      },
                      RequireDnsAsCn: {
                        type: 'boolean'
                      },
                      RequireEmail: {
                        type: 'boolean'
                      },
                      SanRequireDirectoryGuid: {
                        type: 'boolean'
                      },
                      SanRequireDns: {
                        type: 'boolean'
                      },
                      SanRequireDomainDns: {
                        type: 'boolean'
                      },
                      SanRequireEmail: {
                        type: 'boolean'
                      },
                      SanRequireSpn: {
                        type: 'boolean'
                      },
                      SanRequireUpn: {
                        type: 'boolean'
                      }
                    }
                  },
                  SupersededTemplates: {
                    shape: 'S16'
                  }
                }
              },
              TemplateV4: {
                type: 'structure',
                required: ['CertificateValidity', 'EnrollmentFlags', 'Extensions', 'GeneralFlags', 'PrivateKeyAttributes', 'PrivateKeyFlags', 'SubjectNameFlags'],
                members: {
                  CertificateValidity: {
                    shape: 'Sj'
                  },
                  EnrollmentFlags: {
                    type: 'structure',
                    members: {
                      EnableKeyReuseOnNtTokenKeysetStorageFull: {
                        type: 'boolean'
                      },
                      IncludeSymmetricAlgorithms: {
                        type: 'boolean'
                      },
                      NoSecurityExtension: {
                        type: 'boolean'
                      },
                      RemoveInvalidCertificateFromPersonalStore: {
                        type: 'boolean'
                      },
                      UserInteractionRequired: {
                        type: 'boolean'
                      }
                    }
                  },
                  Extensions: {
                    type: 'structure',
                    required: ['KeyUsage'],
                    members: {
                      ApplicationPolicies: {
                        shape: 'Sq'
                      },
                      KeyUsage: {
                        shape: 'Sv'
                      }
                    }
                  },
                  GeneralFlags: {
                    type: 'structure',
                    members: {
                      AutoEnrollment: {
                        type: 'boolean'
                      },
                      MachineType: {
                        type: 'boolean'
                      }
                    }
                  },
                  HashAlgorithm: {},
                  PrivateKeyAttributes: {
                    type: 'structure',
                    required: ['KeySpec', 'MinimalKeyLength'],
                    members: {
                      Algorithm: {},
                      CryptoProviders: {
                        shape: 'Sz'
                      },
                      KeySpec: {},
                      KeyUsageProperty: {
                        shape: 'S1f'
                      },
                      MinimalKeyLength: {
                        type: 'integer'
                      }
                    }
                  },
                  PrivateKeyFlags: {
                    type: 'structure',
                    required: ['ClientVersion'],
                    members: {
                      ClientVersion: {},
                      ExportableKey: {
                        type: 'boolean'
                      },
                      RequireAlternateSignatureAlgorithm: {
                        type: 'boolean'
                      },
                      RequireSameKeyRenewal: {
                        type: 'boolean'
                      },
                      StrongKeyProtectionRequired: {
                        type: 'boolean'
                      },
                      UseLegacyProvider: {
                        type: 'boolean'
                      }
                    }
                  },
                  SubjectNameFlags: {
                    type: 'structure',
                    members: {
                      RequireCommonName: {
                        type: 'boolean'
                      },
                      RequireDirectoryPath: {
                        type: 'boolean'
                      },
                      RequireDnsAsCn: {
                        type: 'boolean'
                      },
                      RequireEmail: {
                        type: 'boolean'
                      },
                      SanRequireDirectoryGuid: {
                        type: 'boolean'
                      },
                      SanRequireDns: {
                        type: 'boolean'
                      },
                      SanRequireDomainDns: {
                        type: 'boolean'
                      },
                      SanRequireEmail: {
                        type: 'boolean'
                      },
                      SanRequireSpn: {
                        type: 'boolean'
                      },
                      SanRequireUpn: {
                        type: 'boolean'
                      }
                    }
                  },
                  SupersededTemplates: {
                    shape: 'S16'
                  }
                }
              }
            },
            union: true
          },
          Sj: {
            type: 'structure',
            required: ['RenewalPeriod', 'ValidityPeriod'],
            members: {
              RenewalPeriod: {
                shape: 'Sk'
              },
              ValidityPeriod: {
                shape: 'Sk'
              }
            }
          },
          Sk: {
            type: 'structure',
            required: ['Period', 'PeriodType'],
            members: {
              Period: {
                type: 'long'
              },
              PeriodType: {}
            }
          },
          Sq: {
            type: 'structure',
            required: ['Policies'],
            members: {
              Critical: {
                type: 'boolean'
              },
              Policies: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    PolicyObjectIdentifier: {},
                    PolicyType: {}
                  },
                  union: true
                }
              }
            }
          },
          Sv: {
            type: 'structure',
            required: ['UsageFlags'],
            members: {
              Critical: {
                type: 'boolean'
              },
              UsageFlags: {
                type: 'structure',
                members: {
                  DataEncipherment: {
                    type: 'boolean'
                  },
                  DigitalSignature: {
                    type: 'boolean'
                  },
                  KeyAgreement: {
                    type: 'boolean'
                  },
                  KeyEncipherment: {
                    type: 'boolean'
                  },
                  NonRepudiation: {
                    type: 'boolean'
                  }
                }
              }
            }
          },
          Sz: {
            type: 'list',
            member: {}
          },
          S16: {
            type: 'list',
            member: {}
          },
          S1f: {
            type: 'structure',
            members: {
              PropertyFlags: {
                type: 'structure',
                members: {
                  Decrypt: {
                    type: 'boolean'
                  },
                  KeyAgreement: {
                    type: 'boolean'
                  },
                  Sign: {
                    type: 'boolean'
                  }
                }
              },
              PropertyType: {}
            },
            union: true
          },
          S1y: {
            type: 'structure',
            members: {
              AutoEnroll: {},
              Enroll: {}
            }
          },
          S2r: {
            type: 'structure',
            required: ['MajorRevision', 'MinorRevision'],
            members: {
              MajorRevision: {
                type: 'integer'
              },
              MinorRevision: {
                type: 'integer'
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=8f42d88ce62d84bfc274cc73992158d4a3448580.js.map