System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2018-11-05',
          endpointPrefix: 'transfer',
          jsonVersion: '1.1',
          protocol: 'json',
          protocols: ['json'],
          serviceAbbreviation: 'AWS Transfer',
          serviceFullName: 'AWS Transfer Family',
          serviceId: 'Transfer',
          signatureVersion: 'v4',
          signingName: 'transfer',
          targetPrefix: 'TransferService',
          uid: 'transfer-2018-11-05'
        },
        operations: {
          CreateAccess: {
            input: {
              type: 'structure',
              required: ['Role', 'ServerId', 'ExternalId'],
              members: {
                HomeDirectory: {},
                HomeDirectoryType: {},
                HomeDirectoryMappings: {
                  shape: 'S4'
                },
                Policy: {},
                PosixProfile: {
                  shape: 'Sa'
                },
                Role: {},
                ServerId: {},
                ExternalId: {}
              }
            },
            output: {
              type: 'structure',
              required: ['ServerId', 'ExternalId'],
              members: {
                ServerId: {},
                ExternalId: {}
              }
            }
          },
          CreateAgreement: {
            input: {
              type: 'structure',
              required: ['ServerId', 'LocalProfileId', 'PartnerProfileId', 'BaseDirectory', 'AccessRole'],
              members: {
                Description: {},
                ServerId: {},
                LocalProfileId: {},
                PartnerProfileId: {},
                BaseDirectory: {},
                AccessRole: {},
                Status: {},
                Tags: {
                  shape: 'Sl'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['AgreementId'],
              members: {
                AgreementId: {}
              }
            }
          },
          CreateConnector: {
            input: {
              type: 'structure',
              required: ['Url', 'AccessRole'],
              members: {
                Url: {},
                As2Config: {
                  shape: 'St'
                },
                AccessRole: {},
                LoggingRole: {},
                Tags: {
                  shape: 'Sl'
                },
                SftpConfig: {
                  shape: 'S11'
                },
                SecurityPolicyName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['ConnectorId'],
              members: {
                ConnectorId: {}
              }
            }
          },
          CreateProfile: {
            input: {
              type: 'structure',
              required: ['As2Id', 'ProfileType'],
              members: {
                As2Id: {},
                ProfileType: {},
                CertificateIds: {
                  shape: 'S1b'
                },
                Tags: {
                  shape: 'Sl'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['ProfileId'],
              members: {
                ProfileId: {}
              }
            }
          },
          CreateServer: {
            input: {
              type: 'structure',
              members: {
                Certificate: {},
                Domain: {},
                EndpointDetails: {
                  shape: 'S1h'
                },
                EndpointType: {},
                HostKey: {
                  shape: 'S1r'
                },
                IdentityProviderDetails: {
                  shape: 'S1s'
                },
                IdentityProviderType: {},
                LoggingRole: {},
                PostAuthenticationLoginBanner: {},
                PreAuthenticationLoginBanner: {},
                Protocols: {
                  shape: 'S20'
                },
                ProtocolDetails: {
                  shape: 'S22'
                },
                SecurityPolicyName: {},
                Tags: {
                  shape: 'Sl'
                },
                WorkflowDetails: {
                  shape: 'S29'
                },
                StructuredLogDestinations: {
                  shape: 'S2e'
                },
                S3StorageOptions: {
                  shape: 'S2g'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['ServerId'],
              members: {
                ServerId: {}
              }
            }
          },
          CreateUser: {
            input: {
              type: 'structure',
              required: ['Role', 'ServerId', 'UserName'],
              members: {
                HomeDirectory: {},
                HomeDirectoryType: {},
                HomeDirectoryMappings: {
                  shape: 'S4'
                },
                Policy: {},
                PosixProfile: {
                  shape: 'Sa'
                },
                Role: {},
                ServerId: {},
                SshPublicKeyBody: {},
                Tags: {
                  shape: 'Sl'
                },
                UserName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['ServerId', 'UserName'],
              members: {
                ServerId: {},
                UserName: {}
              }
            },
            idempotent: true
          },
          CreateWorkflow: {
            input: {
              type: 'structure',
              required: ['Steps'],
              members: {
                Description: {},
                Steps: {
                  shape: 'S2p'
                },
                OnExceptionSteps: {
                  shape: 'S2p'
                },
                Tags: {
                  shape: 'Sl'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['WorkflowId'],
              members: {
                WorkflowId: {}
              }
            }
          },
          DeleteAccess: {
            input: {
              type: 'structure',
              required: ['ServerId', 'ExternalId'],
              members: {
                ServerId: {},
                ExternalId: {}
              }
            }
          },
          DeleteAgreement: {
            input: {
              type: 'structure',
              required: ['AgreementId', 'ServerId'],
              members: {
                AgreementId: {},
                ServerId: {}
              }
            },
            idempotent: true
          },
          DeleteCertificate: {
            input: {
              type: 'structure',
              required: ['CertificateId'],
              members: {
                CertificateId: {}
              }
            },
            idempotent: true
          },
          DeleteConnector: {
            input: {
              type: 'structure',
              required: ['ConnectorId'],
              members: {
                ConnectorId: {}
              }
            },
            idempotent: true
          },
          DeleteHostKey: {
            input: {
              type: 'structure',
              required: ['ServerId', 'HostKeyId'],
              members: {
                ServerId: {},
                HostKeyId: {}
              }
            }
          },
          DeleteProfile: {
            input: {
              type: 'structure',
              required: ['ProfileId'],
              members: {
                ProfileId: {}
              }
            },
            idempotent: true
          },
          DeleteServer: {
            input: {
              type: 'structure',
              required: ['ServerId'],
              members: {
                ServerId: {}
              }
            },
            idempotent: true
          },
          DeleteSshPublicKey: {
            input: {
              type: 'structure',
              required: ['ServerId', 'SshPublicKeyId', 'UserName'],
              members: {
                ServerId: {},
                SshPublicKeyId: {},
                UserName: {}
              }
            }
          },
          DeleteUser: {
            input: {
              type: 'structure',
              required: ['ServerId', 'UserName'],
              members: {
                ServerId: {},
                UserName: {}
              }
            },
            idempotent: true
          },
          DeleteWorkflow: {
            input: {
              type: 'structure',
              required: ['WorkflowId'],
              members: {
                WorkflowId: {}
              }
            },
            idempotent: true
          },
          DescribeAccess: {
            input: {
              type: 'structure',
              required: ['ServerId', 'ExternalId'],
              members: {
                ServerId: {},
                ExternalId: {}
              }
            },
            output: {
              type: 'structure',
              required: ['ServerId', 'Access'],
              members: {
                ServerId: {},
                Access: {
                  type: 'structure',
                  members: {
                    HomeDirectory: {},
                    HomeDirectoryMappings: {
                      shape: 'S4'
                    },
                    HomeDirectoryType: {},
                    Policy: {},
                    PosixProfile: {
                      shape: 'Sa'
                    },
                    Role: {},
                    ExternalId: {}
                  }
                }
              }
            }
          },
          DescribeAgreement: {
            input: {
              type: 'structure',
              required: ['AgreementId', 'ServerId'],
              members: {
                AgreementId: {},
                ServerId: {}
              }
            },
            output: {
              type: 'structure',
              required: ['Agreement'],
              members: {
                Agreement: {
                  type: 'structure',
                  required: ['Arn'],
                  members: {
                    Arn: {},
                    AgreementId: {},
                    Description: {},
                    Status: {},
                    ServerId: {},
                    LocalProfileId: {},
                    PartnerProfileId: {},
                    BaseDirectory: {},
                    AccessRole: {},
                    Tags: {
                      shape: 'Sl'
                    }
                  }
                }
              }
            }
          },
          DescribeCertificate: {
            input: {
              type: 'structure',
              required: ['CertificateId'],
              members: {
                CertificateId: {}
              }
            },
            output: {
              type: 'structure',
              required: ['Certificate'],
              members: {
                Certificate: {
                  type: 'structure',
                  required: ['Arn'],
                  members: {
                    Arn: {},
                    CertificateId: {},
                    Usage: {},
                    Status: {},
                    Certificate: {
                      shape: 'S42'
                    },
                    CertificateChain: {
                      shape: 'S43'
                    },
                    ActiveDate: {
                      type: 'timestamp'
                    },
                    InactiveDate: {
                      type: 'timestamp'
                    },
                    Serial: {},
                    NotBeforeDate: {
                      type: 'timestamp'
                    },
                    NotAfterDate: {
                      type: 'timestamp'
                    },
                    Type: {},
                    Description: {},
                    Tags: {
                      shape: 'Sl'
                    }
                  }
                }
              }
            }
          },
          DescribeConnector: {
            input: {
              type: 'structure',
              required: ['ConnectorId'],
              members: {
                ConnectorId: {}
              }
            },
            output: {
              type: 'structure',
              required: ['Connector'],
              members: {
                Connector: {
                  type: 'structure',
                  required: ['Arn'],
                  members: {
                    Arn: {},
                    ConnectorId: {},
                    Url: {},
                    As2Config: {
                      shape: 'St'
                    },
                    AccessRole: {},
                    LoggingRole: {},
                    Tags: {
                      shape: 'Sl'
                    },
                    SftpConfig: {
                      shape: 'S11'
                    },
                    ServiceManagedEgressIpAddresses: {
                      shape: 'S4a'
                    },
                    SecurityPolicyName: {}
                  }
                }
              }
            }
          },
          DescribeExecution: {
            input: {
              type: 'structure',
              required: ['ExecutionId', 'WorkflowId'],
              members: {
                ExecutionId: {},
                WorkflowId: {}
              }
            },
            output: {
              type: 'structure',
              required: ['WorkflowId', 'Execution'],
              members: {
                WorkflowId: {},
                Execution: {
                  type: 'structure',
                  members: {
                    ExecutionId: {},
                    InitialFileLocation: {
                      shape: 'S4g'
                    },
                    ServiceMetadata: {
                      shape: 'S4k'
                    },
                    ExecutionRole: {},
                    LoggingConfiguration: {
                      type: 'structure',
                      members: {
                        LoggingRole: {},
                        LogGroupName: {}
                      }
                    },
                    PosixProfile: {
                      shape: 'Sa'
                    },
                    Status: {},
                    Results: {
                      type: 'structure',
                      members: {
                        Steps: {
                          shape: 'S4r'
                        },
                        OnExceptionSteps: {
                          shape: 'S4r'
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          DescribeHostKey: {
            input: {
              type: 'structure',
              required: ['ServerId', 'HostKeyId'],
              members: {
                ServerId: {},
                HostKeyId: {}
              }
            },
            output: {
              type: 'structure',
              required: ['HostKey'],
              members: {
                HostKey: {
                  type: 'structure',
                  required: ['Arn'],
                  members: {
                    Arn: {},
                    HostKeyId: {},
                    HostKeyFingerprint: {},
                    Description: {},
                    Type: {},
                    DateImported: {
                      type: 'timestamp'
                    },
                    Tags: {
                      shape: 'Sl'
                    }
                  }
                }
              }
            }
          },
          DescribeProfile: {
            input: {
              type: 'structure',
              required: ['ProfileId'],
              members: {
                ProfileId: {}
              }
            },
            output: {
              type: 'structure',
              required: ['Profile'],
              members: {
                Profile: {
                  type: 'structure',
                  required: ['Arn'],
                  members: {
                    Arn: {},
                    ProfileId: {},
                    ProfileType: {},
                    As2Id: {},
                    CertificateIds: {
                      shape: 'S1b'
                    },
                    Tags: {
                      shape: 'Sl'
                    }
                  }
                }
              }
            }
          },
          DescribeSecurityPolicy: {
            input: {
              type: 'structure',
              required: ['SecurityPolicyName'],
              members: {
                SecurityPolicyName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['SecurityPolicy'],
              members: {
                SecurityPolicy: {
                  type: 'structure',
                  required: ['SecurityPolicyName'],
                  members: {
                    Fips: {
                      type: 'boolean'
                    },
                    SecurityPolicyName: {},
                    SshCiphers: {
                      shape: 'S5b'
                    },
                    SshKexs: {
                      shape: 'S5b'
                    },
                    SshMacs: {
                      shape: 'S5b'
                    },
                    TlsCiphers: {
                      shape: 'S5b'
                    },
                    SshHostKeyAlgorithms: {
                      shape: 'S5b'
                    },
                    Type: {},
                    Protocols: {
                      type: 'list',
                      member: {}
                    }
                  }
                }
              }
            }
          },
          DescribeServer: {
            input: {
              type: 'structure',
              required: ['ServerId'],
              members: {
                ServerId: {}
              }
            },
            output: {
              type: 'structure',
              required: ['Server'],
              members: {
                Server: {
                  type: 'structure',
                  required: ['Arn'],
                  members: {
                    Arn: {},
                    Certificate: {},
                    ProtocolDetails: {
                      shape: 'S22'
                    },
                    Domain: {},
                    EndpointDetails: {
                      shape: 'S1h'
                    },
                    EndpointType: {},
                    HostKeyFingerprint: {},
                    IdentityProviderDetails: {
                      shape: 'S1s'
                    },
                    IdentityProviderType: {},
                    LoggingRole: {},
                    PostAuthenticationLoginBanner: {},
                    PreAuthenticationLoginBanner: {},
                    Protocols: {
                      shape: 'S20'
                    },
                    SecurityPolicyName: {},
                    ServerId: {},
                    State: {},
                    Tags: {
                      shape: 'Sl'
                    },
                    UserCount: {
                      type: 'integer'
                    },
                    WorkflowDetails: {
                      shape: 'S29'
                    },
                    StructuredLogDestinations: {
                      shape: 'S2e'
                    },
                    S3StorageOptions: {
                      shape: 'S2g'
                    },
                    As2ServiceManagedEgressIpAddresses: {
                      shape: 'S4a'
                    }
                  }
                }
              }
            }
          },
          DescribeUser: {
            input: {
              type: 'structure',
              required: ['ServerId', 'UserName'],
              members: {
                ServerId: {},
                UserName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['ServerId', 'User'],
              members: {
                ServerId: {},
                User: {
                  type: 'structure',
                  required: ['Arn'],
                  members: {
                    Arn: {},
                    HomeDirectory: {},
                    HomeDirectoryMappings: {
                      shape: 'S4'
                    },
                    HomeDirectoryType: {},
                    Policy: {},
                    PosixProfile: {
                      shape: 'Sa'
                    },
                    Role: {},
                    SshPublicKeys: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        required: ['DateImported', 'SshPublicKeyBody', 'SshPublicKeyId'],
                        members: {
                          DateImported: {
                            type: 'timestamp'
                          },
                          SshPublicKeyBody: {},
                          SshPublicKeyId: {}
                        }
                      }
                    },
                    Tags: {
                      shape: 'Sl'
                    },
                    UserName: {}
                  }
                }
              }
            }
          },
          DescribeWorkflow: {
            input: {
              type: 'structure',
              required: ['WorkflowId'],
              members: {
                WorkflowId: {}
              }
            },
            output: {
              type: 'structure',
              required: ['Workflow'],
              members: {
                Workflow: {
                  type: 'structure',
                  required: ['Arn'],
                  members: {
                    Arn: {},
                    Description: {},
                    Steps: {
                      shape: 'S2p'
                    },
                    OnExceptionSteps: {
                      shape: 'S2p'
                    },
                    WorkflowId: {},
                    Tags: {
                      shape: 'Sl'
                    }
                  }
                }
              }
            }
          },
          ImportCertificate: {
            input: {
              type: 'structure',
              required: ['Usage', 'Certificate'],
              members: {
                Usage: {},
                Certificate: {
                  shape: 'S42'
                },
                CertificateChain: {
                  shape: 'S43'
                },
                PrivateKey: {
                  type: 'string',
                  sensitive: true
                },
                ActiveDate: {
                  type: 'timestamp'
                },
                InactiveDate: {
                  type: 'timestamp'
                },
                Description: {},
                Tags: {
                  shape: 'Sl'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['CertificateId'],
              members: {
                CertificateId: {}
              }
            }
          },
          ImportHostKey: {
            input: {
              type: 'structure',
              required: ['ServerId', 'HostKeyBody'],
              members: {
                ServerId: {},
                HostKeyBody: {
                  shape: 'S1r'
                },
                Description: {},
                Tags: {
                  shape: 'Sl'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['ServerId', 'HostKeyId'],
              members: {
                ServerId: {},
                HostKeyId: {}
              }
            }
          },
          ImportSshPublicKey: {
            input: {
              type: 'structure',
              required: ['ServerId', 'SshPublicKeyBody', 'UserName'],
              members: {
                ServerId: {},
                SshPublicKeyBody: {},
                UserName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['ServerId', 'SshPublicKeyId', 'UserName'],
              members: {
                ServerId: {},
                SshPublicKeyId: {},
                UserName: {}
              }
            }
          },
          ListAccesses: {
            input: {
              type: 'structure',
              required: ['ServerId'],
              members: {
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {},
                ServerId: {}
              }
            },
            output: {
              type: 'structure',
              required: ['ServerId', 'Accesses'],
              members: {
                NextToken: {},
                ServerId: {},
                Accesses: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      HomeDirectory: {},
                      HomeDirectoryType: {},
                      Role: {},
                      ExternalId: {}
                    }
                  }
                }
              }
            }
          },
          ListAgreements: {
            input: {
              type: 'structure',
              required: ['ServerId'],
              members: {
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {},
                ServerId: {}
              }
            },
            output: {
              type: 'structure',
              required: ['Agreements'],
              members: {
                NextToken: {},
                Agreements: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Arn: {},
                      AgreementId: {},
                      Description: {},
                      Status: {},
                      ServerId: {},
                      LocalProfileId: {},
                      PartnerProfileId: {}
                    }
                  }
                }
              }
            }
          },
          ListCertificates: {
            input: {
              type: 'structure',
              members: {
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              required: ['Certificates'],
              members: {
                NextToken: {},
                Certificates: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Arn: {},
                      CertificateId: {},
                      Usage: {},
                      Status: {},
                      ActiveDate: {
                        type: 'timestamp'
                      },
                      InactiveDate: {
                        type: 'timestamp'
                      },
                      Type: {},
                      Description: {}
                    }
                  }
                }
              }
            }
          },
          ListConnectors: {
            input: {
              type: 'structure',
              members: {
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              required: ['Connectors'],
              members: {
                NextToken: {},
                Connectors: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Arn: {},
                      ConnectorId: {},
                      Url: {}
                    }
                  }
                }
              }
            }
          },
          ListExecutions: {
            input: {
              type: 'structure',
              required: ['WorkflowId'],
              members: {
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {},
                WorkflowId: {}
              }
            },
            output: {
              type: 'structure',
              required: ['WorkflowId', 'Executions'],
              members: {
                NextToken: {},
                WorkflowId: {},
                Executions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ExecutionId: {},
                      InitialFileLocation: {
                        shape: 'S4g'
                      },
                      ServiceMetadata: {
                        shape: 'S4k'
                      },
                      Status: {}
                    }
                  }
                }
              }
            }
          },
          ListHostKeys: {
            input: {
              type: 'structure',
              required: ['ServerId'],
              members: {
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {},
                ServerId: {}
              }
            },
            output: {
              type: 'structure',
              required: ['ServerId', 'HostKeys'],
              members: {
                NextToken: {},
                ServerId: {},
                HostKeys: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Arn'],
                    members: {
                      Arn: {},
                      HostKeyId: {},
                      Fingerprint: {},
                      Description: {},
                      Type: {},
                      DateImported: {
                        type: 'timestamp'
                      }
                    }
                  }
                }
              }
            }
          },
          ListProfiles: {
            input: {
              type: 'structure',
              members: {
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {},
                ProfileType: {}
              }
            },
            output: {
              type: 'structure',
              required: ['Profiles'],
              members: {
                NextToken: {},
                Profiles: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Arn: {},
                      ProfileId: {},
                      As2Id: {},
                      ProfileType: {}
                    }
                  }
                }
              }
            }
          },
          ListSecurityPolicies: {
            input: {
              type: 'structure',
              members: {
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              required: ['SecurityPolicyNames'],
              members: {
                NextToken: {},
                SecurityPolicyNames: {
                  type: 'list',
                  member: {}
                }
              }
            }
          },
          ListServers: {
            input: {
              type: 'structure',
              members: {
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              required: ['Servers'],
              members: {
                NextToken: {},
                Servers: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Arn'],
                    members: {
                      Arn: {},
                      Domain: {},
                      IdentityProviderType: {},
                      EndpointType: {},
                      LoggingRole: {},
                      ServerId: {},
                      State: {},
                      UserCount: {
                        type: 'integer'
                      }
                    }
                  }
                }
              }
            }
          },
          ListTagsForResource: {
            input: {
              type: 'structure',
              required: ['Arn'],
              members: {
                Arn: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                NextToken: {},
                Tags: {
                  shape: 'Sl'
                }
              }
            }
          },
          ListUsers: {
            input: {
              type: 'structure',
              required: ['ServerId'],
              members: {
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {},
                ServerId: {}
              }
            },
            output: {
              type: 'structure',
              required: ['ServerId', 'Users'],
              members: {
                NextToken: {},
                ServerId: {},
                Users: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Arn'],
                    members: {
                      Arn: {},
                      HomeDirectory: {},
                      HomeDirectoryType: {},
                      Role: {},
                      SshPublicKeyCount: {
                        type: 'integer'
                      },
                      UserName: {}
                    }
                  }
                }
              }
            }
          },
          ListWorkflows: {
            input: {
              type: 'structure',
              members: {
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              required: ['Workflows'],
              members: {
                NextToken: {},
                Workflows: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      WorkflowId: {},
                      Description: {},
                      Arn: {}
                    }
                  }
                }
              }
            }
          },
          SendWorkflowStepState: {
            input: {
              type: 'structure',
              required: ['WorkflowId', 'ExecutionId', 'Token', 'Status'],
              members: {
                WorkflowId: {},
                ExecutionId: {},
                Token: {},
                Status: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          StartDirectoryListing: {
            input: {
              type: 'structure',
              required: ['ConnectorId', 'RemoteDirectoryPath', 'OutputDirectoryPath'],
              members: {
                ConnectorId: {},
                RemoteDirectoryPath: {},
                MaxItems: {
                  type: 'integer'
                },
                OutputDirectoryPath: {}
              }
            },
            output: {
              type: 'structure',
              required: ['ListingId', 'OutputFileName'],
              members: {
                ListingId: {},
                OutputFileName: {}
              }
            }
          },
          StartFileTransfer: {
            input: {
              type: 'structure',
              required: ['ConnectorId'],
              members: {
                ConnectorId: {},
                SendFilePaths: {
                  shape: 'S7n'
                },
                RetrieveFilePaths: {
                  shape: 'S7n'
                },
                LocalDirectoryPath: {},
                RemoteDirectoryPath: {}
              }
            },
            output: {
              type: 'structure',
              required: ['TransferId'],
              members: {
                TransferId: {}
              }
            }
          },
          StartServer: {
            input: {
              type: 'structure',
              required: ['ServerId'],
              members: {
                ServerId: {}
              }
            }
          },
          StopServer: {
            input: {
              type: 'structure',
              required: ['ServerId'],
              members: {
                ServerId: {}
              }
            }
          },
          TagResource: {
            input: {
              type: 'structure',
              required: ['Arn', 'Tags'],
              members: {
                Arn: {},
                Tags: {
                  shape: 'Sl'
                }
              }
            }
          },
          TestConnection: {
            input: {
              type: 'structure',
              required: ['ConnectorId'],
              members: {
                ConnectorId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ConnectorId: {},
                Status: {},
                StatusMessage: {}
              }
            }
          },
          TestIdentityProvider: {
            input: {
              type: 'structure',
              required: ['ServerId', 'UserName'],
              members: {
                ServerId: {},
                ServerProtocol: {},
                SourceIp: {},
                UserName: {},
                UserPassword: {
                  type: 'string',
                  sensitive: true
                }
              }
            },
            output: {
              type: 'structure',
              required: ['StatusCode', 'Url'],
              members: {
                Response: {},
                StatusCode: {
                  type: 'integer'
                },
                Message: {},
                Url: {}
              }
            }
          },
          UntagResource: {
            input: {
              type: 'structure',
              required: ['Arn', 'TagKeys'],
              members: {
                Arn: {},
                TagKeys: {
                  type: 'list',
                  member: {}
                }
              }
            }
          },
          UpdateAccess: {
            input: {
              type: 'structure',
              required: ['ServerId', 'ExternalId'],
              members: {
                HomeDirectory: {},
                HomeDirectoryType: {},
                HomeDirectoryMappings: {
                  shape: 'S4'
                },
                Policy: {},
                PosixProfile: {
                  shape: 'Sa'
                },
                Role: {},
                ServerId: {},
                ExternalId: {}
              }
            },
            output: {
              type: 'structure',
              required: ['ServerId', 'ExternalId'],
              members: {
                ServerId: {},
                ExternalId: {}
              }
            }
          },
          UpdateAgreement: {
            input: {
              type: 'structure',
              required: ['AgreementId', 'ServerId'],
              members: {
                AgreementId: {},
                ServerId: {},
                Description: {},
                Status: {},
                LocalProfileId: {},
                PartnerProfileId: {},
                BaseDirectory: {},
                AccessRole: {}
              }
            },
            output: {
              type: 'structure',
              required: ['AgreementId'],
              members: {
                AgreementId: {}
              }
            }
          },
          UpdateCertificate: {
            input: {
              type: 'structure',
              required: ['CertificateId'],
              members: {
                CertificateId: {},
                ActiveDate: {
                  type: 'timestamp'
                },
                InactiveDate: {
                  type: 'timestamp'
                },
                Description: {}
              }
            },
            output: {
              type: 'structure',
              required: ['CertificateId'],
              members: {
                CertificateId: {}
              }
            }
          },
          UpdateConnector: {
            input: {
              type: 'structure',
              required: ['ConnectorId'],
              members: {
                ConnectorId: {},
                Url: {},
                As2Config: {
                  shape: 'St'
                },
                AccessRole: {},
                LoggingRole: {},
                SftpConfig: {
                  shape: 'S11'
                },
                SecurityPolicyName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['ConnectorId'],
              members: {
                ConnectorId: {}
              }
            }
          },
          UpdateHostKey: {
            input: {
              type: 'structure',
              required: ['ServerId', 'HostKeyId', 'Description'],
              members: {
                ServerId: {},
                HostKeyId: {},
                Description: {}
              }
            },
            output: {
              type: 'structure',
              required: ['ServerId', 'HostKeyId'],
              members: {
                ServerId: {},
                HostKeyId: {}
              }
            }
          },
          UpdateProfile: {
            input: {
              type: 'structure',
              required: ['ProfileId'],
              members: {
                ProfileId: {},
                CertificateIds: {
                  shape: 'S1b'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['ProfileId'],
              members: {
                ProfileId: {}
              }
            }
          },
          UpdateServer: {
            input: {
              type: 'structure',
              required: ['ServerId'],
              members: {
                Certificate: {},
                ProtocolDetails: {
                  shape: 'S22'
                },
                EndpointDetails: {
                  shape: 'S1h'
                },
                EndpointType: {},
                HostKey: {
                  shape: 'S1r'
                },
                IdentityProviderDetails: {
                  shape: 'S1s'
                },
                LoggingRole: {},
                PostAuthenticationLoginBanner: {},
                PreAuthenticationLoginBanner: {},
                Protocols: {
                  shape: 'S20'
                },
                SecurityPolicyName: {},
                ServerId: {},
                WorkflowDetails: {
                  shape: 'S29'
                },
                StructuredLogDestinations: {
                  shape: 'S2e'
                },
                S3StorageOptions: {
                  shape: 'S2g'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['ServerId'],
              members: {
                ServerId: {}
              }
            }
          },
          UpdateUser: {
            input: {
              type: 'structure',
              required: ['ServerId', 'UserName'],
              members: {
                HomeDirectory: {},
                HomeDirectoryType: {},
                HomeDirectoryMappings: {
                  shape: 'S4'
                },
                Policy: {},
                PosixProfile: {
                  shape: 'Sa'
                },
                Role: {},
                ServerId: {},
                UserName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['ServerId', 'UserName'],
              members: {
                ServerId: {},
                UserName: {}
              }
            }
          }
        },
        shapes: {
          S4: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Entry', 'Target'],
              members: {
                Entry: {},
                Target: {},
                Type: {}
              }
            }
          },
          Sa: {
            type: 'structure',
            required: ['Uid', 'Gid'],
            members: {
              Uid: {
                type: 'long'
              },
              Gid: {
                type: 'long'
              },
              SecondaryGids: {
                type: 'list',
                member: {
                  type: 'long'
                }
              }
            }
          },
          Sl: {
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
          St: {
            type: 'structure',
            members: {
              LocalProfileId: {},
              PartnerProfileId: {},
              MessageSubject: {},
              Compression: {},
              EncryptionAlgorithm: {},
              SigningAlgorithm: {},
              MdnSigningAlgorithm: {},
              MdnResponse: {},
              BasicAuthSecretId: {}
            }
          },
          S11: {
            type: 'structure',
            members: {
              UserSecretId: {},
              TrustedHostKeys: {
                type: 'list',
                member: {}
              }
            }
          },
          S1b: {
            type: 'list',
            member: {}
          },
          S1h: {
            type: 'structure',
            members: {
              AddressAllocationIds: {
                type: 'list',
                member: {}
              },
              SubnetIds: {
                type: 'list',
                member: {}
              },
              VpcEndpointId: {},
              VpcId: {},
              SecurityGroupIds: {
                type: 'list',
                member: {}
              }
            }
          },
          S1r: {
            type: 'string',
            sensitive: true
          },
          S1s: {
            type: 'structure',
            members: {
              Url: {},
              InvocationRole: {},
              DirectoryId: {},
              Function: {},
              SftpAuthenticationMethods: {}
            }
          },
          S20: {
            type: 'list',
            member: {}
          },
          S22: {
            type: 'structure',
            members: {
              PassiveIp: {},
              TlsSessionResumptionMode: {},
              SetStatOption: {},
              As2Transports: {
                type: 'list',
                member: {}
              }
            }
          },
          S29: {
            type: 'structure',
            members: {
              OnUpload: {
                type: 'list',
                member: {
                  shape: 'S2b'
                }
              },
              OnPartialUpload: {
                type: 'list',
                member: {
                  shape: 'S2b'
                }
              }
            }
          },
          S2b: {
            type: 'structure',
            required: ['WorkflowId', 'ExecutionRole'],
            members: {
              WorkflowId: {},
              ExecutionRole: {}
            }
          },
          S2e: {
            type: 'list',
            member: {}
          },
          S2g: {
            type: 'structure',
            members: {
              DirectoryListingOptimization: {}
            }
          },
          S2p: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Type: {},
                CopyStepDetails: {
                  type: 'structure',
                  members: {
                    Name: {},
                    DestinationFileLocation: {
                      shape: 'S2u'
                    },
                    OverwriteExisting: {},
                    SourceFileLocation: {}
                  }
                },
                CustomStepDetails: {
                  type: 'structure',
                  members: {
                    Name: {},
                    Target: {},
                    TimeoutSeconds: {
                      type: 'integer'
                    },
                    SourceFileLocation: {}
                  }
                },
                DeleteStepDetails: {
                  type: 'structure',
                  members: {
                    Name: {},
                    SourceFileLocation: {}
                  }
                },
                TagStepDetails: {
                  type: 'structure',
                  members: {
                    Name: {},
                    Tags: {
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
                    SourceFileLocation: {}
                  }
                },
                DecryptStepDetails: {
                  type: 'structure',
                  required: ['Type', 'DestinationFileLocation'],
                  members: {
                    Name: {},
                    Type: {},
                    SourceFileLocation: {},
                    OverwriteExisting: {},
                    DestinationFileLocation: {
                      shape: 'S2u'
                    }
                  }
                }
              }
            }
          },
          S2u: {
            type: 'structure',
            members: {
              S3FileLocation: {
                type: 'structure',
                members: {
                  Bucket: {},
                  Key: {}
                }
              },
              EfsFileLocation: {
                shape: 'S2y'
              }
            }
          },
          S2y: {
            type: 'structure',
            members: {
              FileSystemId: {},
              Path: {}
            }
          },
          S42: {
            type: 'string',
            sensitive: true
          },
          S43: {
            type: 'string',
            sensitive: true
          },
          S4a: {
            type: 'list',
            member: {}
          },
          S4g: {
            type: 'structure',
            members: {
              S3FileLocation: {
                type: 'structure',
                members: {
                  Bucket: {},
                  Key: {},
                  VersionId: {},
                  Etag: {}
                }
              },
              EfsFileLocation: {
                shape: 'S2y'
              }
            }
          },
          S4k: {
            type: 'structure',
            required: ['UserDetails'],
            members: {
              UserDetails: {
                type: 'structure',
                required: ['UserName', 'ServerId'],
                members: {
                  UserName: {},
                  ServerId: {},
                  SessionId: {}
                }
              }
            }
          },
          S4r: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                StepType: {},
                Outputs: {},
                Error: {
                  type: 'structure',
                  required: ['Type', 'Message'],
                  members: {
                    Type: {},
                    Message: {}
                  }
                }
              }
            }
          },
          S5b: {
            type: 'list',
            member: {}
          },
          S7n: {
            type: 'list',
            member: {}
          }
        }
      });
    }
  };
});
//# sourceMappingURL=2215b59e6694c1585575ece28691d5c58a086ace.js.map