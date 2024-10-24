System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2020-05-15',
          endpointPrefix: 'apprunner',
          jsonVersion: '1.0',
          protocol: 'json',
          serviceFullName: 'AWS App Runner',
          serviceId: 'AppRunner',
          signatureVersion: 'v4',
          signingName: 'apprunner',
          targetPrefix: 'AppRunner',
          uid: 'apprunner-2020-05-15'
        },
        operations: {
          AssociateCustomDomain: {
            input: {
              type: 'structure',
              required: ['ServiceArn', 'DomainName'],
              members: {
                ServiceArn: {},
                DomainName: {},
                EnableWWWSubdomain: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['DNSTarget', 'ServiceArn', 'CustomDomain', 'VpcDNSTargets'],
              members: {
                DNSTarget: {},
                ServiceArn: {},
                CustomDomain: {
                  shape: 'S7'
                },
                VpcDNSTargets: {
                  shape: 'Sc'
                }
              }
            }
          },
          CreateAutoScalingConfiguration: {
            input: {
              type: 'structure',
              required: ['AutoScalingConfigurationName'],
              members: {
                AutoScalingConfigurationName: {},
                MaxConcurrency: {
                  type: 'integer'
                },
                MinSize: {
                  type: 'integer'
                },
                MaxSize: {
                  type: 'integer'
                },
                Tags: {
                  shape: 'Sj'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['AutoScalingConfiguration'],
              members: {
                AutoScalingConfiguration: {
                  shape: 'So'
                }
              }
            }
          },
          CreateConnection: {
            input: {
              type: 'structure',
              required: ['ConnectionName', 'ProviderType'],
              members: {
                ConnectionName: {},
                ProviderType: {},
                Tags: {
                  shape: 'Sj'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Connection'],
              members: {
                Connection: {
                  shape: 'S12'
                }
              }
            }
          },
          CreateObservabilityConfiguration: {
            input: {
              type: 'structure',
              required: ['ObservabilityConfigurationName'],
              members: {
                ObservabilityConfigurationName: {},
                TraceConfiguration: {
                  shape: 'S16'
                },
                Tags: {
                  shape: 'Sj'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['ObservabilityConfiguration'],
              members: {
                ObservabilityConfiguration: {
                  shape: 'S19'
                }
              }
            }
          },
          CreateService: {
            input: {
              type: 'structure',
              required: ['ServiceName', 'SourceConfiguration'],
              members: {
                ServiceName: {},
                SourceConfiguration: {
                  shape: 'S1f'
                },
                InstanceConfiguration: {
                  shape: 'S22'
                },
                Tags: {
                  shape: 'Sj'
                },
                EncryptionConfiguration: {
                  shape: 'S25'
                },
                HealthCheckConfiguration: {
                  shape: 'S27'
                },
                AutoScalingConfigurationArn: {},
                NetworkConfiguration: {
                  shape: 'S2e'
                },
                ObservabilityConfiguration: {
                  shape: 'S2j'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Service', 'OperationId'],
              members: {
                Service: {
                  shape: 'S2l'
                },
                OperationId: {}
              }
            }
          },
          CreateVpcConnector: {
            input: {
              type: 'structure',
              required: ['VpcConnectorName', 'Subnets'],
              members: {
                VpcConnectorName: {},
                Subnets: {
                  shape: 'S2s'
                },
                SecurityGroups: {
                  shape: 'S2s'
                },
                Tags: {
                  shape: 'Sj'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['VpcConnector'],
              members: {
                VpcConnector: {
                  shape: 'S2u'
                }
              }
            }
          },
          CreateVpcIngressConnection: {
            input: {
              type: 'structure',
              required: ['ServiceArn', 'VpcIngressConnectionName', 'IngressVpcConfiguration'],
              members: {
                ServiceArn: {},
                VpcIngressConnectionName: {},
                IngressVpcConfiguration: {
                  shape: 'S2y'
                },
                Tags: {
                  shape: 'Sj'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['VpcIngressConnection'],
              members: {
                VpcIngressConnection: {
                  shape: 'S30'
                }
              }
            }
          },
          DeleteAutoScalingConfiguration: {
            input: {
              type: 'structure',
              required: ['AutoScalingConfigurationArn'],
              members: {
                AutoScalingConfigurationArn: {},
                DeleteAllRevisions: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['AutoScalingConfiguration'],
              members: {
                AutoScalingConfiguration: {
                  shape: 'So'
                }
              }
            }
          },
          DeleteConnection: {
            input: {
              type: 'structure',
              required: ['ConnectionArn'],
              members: {
                ConnectionArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Connection: {
                  shape: 'S12'
                }
              }
            }
          },
          DeleteObservabilityConfiguration: {
            input: {
              type: 'structure',
              required: ['ObservabilityConfigurationArn'],
              members: {
                ObservabilityConfigurationArn: {}
              }
            },
            output: {
              type: 'structure',
              required: ['ObservabilityConfiguration'],
              members: {
                ObservabilityConfiguration: {
                  shape: 'S19'
                }
              }
            }
          },
          DeleteService: {
            input: {
              type: 'structure',
              required: ['ServiceArn'],
              members: {
                ServiceArn: {}
              }
            },
            output: {
              type: 'structure',
              required: ['Service', 'OperationId'],
              members: {
                Service: {
                  shape: 'S2l'
                },
                OperationId: {}
              }
            }
          },
          DeleteVpcConnector: {
            input: {
              type: 'structure',
              required: ['VpcConnectorArn'],
              members: {
                VpcConnectorArn: {}
              }
            },
            output: {
              type: 'structure',
              required: ['VpcConnector'],
              members: {
                VpcConnector: {
                  shape: 'S2u'
                }
              }
            }
          },
          DeleteVpcIngressConnection: {
            input: {
              type: 'structure',
              required: ['VpcIngressConnectionArn'],
              members: {
                VpcIngressConnectionArn: {}
              }
            },
            output: {
              type: 'structure',
              required: ['VpcIngressConnection'],
              members: {
                VpcIngressConnection: {
                  shape: 'S30'
                }
              }
            }
          },
          DescribeAutoScalingConfiguration: {
            input: {
              type: 'structure',
              required: ['AutoScalingConfigurationArn'],
              members: {
                AutoScalingConfigurationArn: {}
              }
            },
            output: {
              type: 'structure',
              required: ['AutoScalingConfiguration'],
              members: {
                AutoScalingConfiguration: {
                  shape: 'So'
                }
              }
            }
          },
          DescribeCustomDomains: {
            input: {
              type: 'structure',
              required: ['ServiceArn'],
              members: {
                ServiceArn: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['DNSTarget', 'ServiceArn', 'CustomDomains', 'VpcDNSTargets'],
              members: {
                DNSTarget: {},
                ServiceArn: {},
                CustomDomains: {
                  type: 'list',
                  member: {
                    shape: 'S7'
                  }
                },
                VpcDNSTargets: {
                  shape: 'Sc'
                },
                NextToken: {}
              }
            }
          },
          DescribeObservabilityConfiguration: {
            input: {
              type: 'structure',
              required: ['ObservabilityConfigurationArn'],
              members: {
                ObservabilityConfigurationArn: {}
              }
            },
            output: {
              type: 'structure',
              required: ['ObservabilityConfiguration'],
              members: {
                ObservabilityConfiguration: {
                  shape: 'S19'
                }
              }
            }
          },
          DescribeService: {
            input: {
              type: 'structure',
              required: ['ServiceArn'],
              members: {
                ServiceArn: {}
              }
            },
            output: {
              type: 'structure',
              required: ['Service'],
              members: {
                Service: {
                  shape: 'S2l'
                }
              }
            }
          },
          DescribeVpcConnector: {
            input: {
              type: 'structure',
              required: ['VpcConnectorArn'],
              members: {
                VpcConnectorArn: {}
              }
            },
            output: {
              type: 'structure',
              required: ['VpcConnector'],
              members: {
                VpcConnector: {
                  shape: 'S2u'
                }
              }
            }
          },
          DescribeVpcIngressConnection: {
            input: {
              type: 'structure',
              required: ['VpcIngressConnectionArn'],
              members: {
                VpcIngressConnectionArn: {}
              }
            },
            output: {
              type: 'structure',
              required: ['VpcIngressConnection'],
              members: {
                VpcIngressConnection: {
                  shape: 'S30'
                }
              }
            }
          },
          DisassociateCustomDomain: {
            input: {
              type: 'structure',
              required: ['ServiceArn', 'DomainName'],
              members: {
                ServiceArn: {},
                DomainName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['DNSTarget', 'ServiceArn', 'CustomDomain', 'VpcDNSTargets'],
              members: {
                DNSTarget: {},
                ServiceArn: {},
                CustomDomain: {
                  shape: 'S7'
                },
                VpcDNSTargets: {
                  shape: 'Sc'
                }
              }
            }
          },
          ListAutoScalingConfigurations: {
            input: {
              type: 'structure',
              members: {
                AutoScalingConfigurationName: {},
                LatestOnly: {
                  type: 'boolean'
                },
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              required: ['AutoScalingConfigurationSummaryList'],
              members: {
                AutoScalingConfigurationSummaryList: {
                  type: 'list',
                  member: {
                    shape: 'S2o'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListConnections: {
            input: {
              type: 'structure',
              members: {
                ConnectionName: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              required: ['ConnectionSummaryList'],
              members: {
                ConnectionSummaryList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ConnectionName: {},
                      ConnectionArn: {},
                      ProviderType: {},
                      Status: {},
                      CreatedAt: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListObservabilityConfigurations: {
            input: {
              type: 'structure',
              members: {
                ObservabilityConfigurationName: {},
                LatestOnly: {
                  type: 'boolean'
                },
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              required: ['ObservabilityConfigurationSummaryList'],
              members: {
                ObservabilityConfigurationSummaryList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ObservabilityConfigurationArn: {},
                      ObservabilityConfigurationName: {},
                      ObservabilityConfigurationRevision: {
                        type: 'integer'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListOperations: {
            input: {
              type: 'structure',
              required: ['ServiceArn'],
              members: {
                ServiceArn: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                OperationSummaryList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Id: {},
                      Type: {},
                      Status: {},
                      TargetArn: {},
                      StartedAt: {
                        type: 'timestamp'
                      },
                      EndedAt: {
                        type: 'timestamp'
                      },
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
          ListServices: {
            input: {
              type: 'structure',
              members: {
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['ServiceSummaryList'],
              members: {
                ServiceSummaryList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ServiceName: {},
                      ServiceId: {},
                      ServiceArn: {},
                      ServiceUrl: {},
                      CreatedAt: {
                        type: 'timestamp'
                      },
                      UpdatedAt: {
                        type: 'timestamp'
                      },
                      Status: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListServicesForAutoScalingConfiguration: {
            input: {
              type: 'structure',
              required: ['AutoScalingConfigurationArn'],
              members: {
                AutoScalingConfigurationArn: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              required: ['ServiceArnList'],
              members: {
                ServiceArnList: {
                  type: 'list',
                  member: {}
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
                  shape: 'Sj'
                }
              }
            }
          },
          ListVpcConnectors: {
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
              required: ['VpcConnectors'],
              members: {
                VpcConnectors: {
                  type: 'list',
                  member: {
                    shape: 'S2u'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListVpcIngressConnections: {
            input: {
              type: 'structure',
              members: {
                Filter: {
                  type: 'structure',
                  members: {
                    ServiceArn: {},
                    VpcEndpointId: {}
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
              required: ['VpcIngressConnectionSummaryList'],
              members: {
                VpcIngressConnectionSummaryList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      VpcIngressConnectionArn: {},
                      ServiceArn: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          PauseService: {
            input: {
              type: 'structure',
              required: ['ServiceArn'],
              members: {
                ServiceArn: {}
              }
            },
            output: {
              type: 'structure',
              required: ['Service'],
              members: {
                Service: {
                  shape: 'S2l'
                },
                OperationId: {}
              }
            }
          },
          ResumeService: {
            input: {
              type: 'structure',
              required: ['ServiceArn'],
              members: {
                ServiceArn: {}
              }
            },
            output: {
              type: 'structure',
              required: ['Service'],
              members: {
                Service: {
                  shape: 'S2l'
                },
                OperationId: {}
              }
            }
          },
          StartDeployment: {
            input: {
              type: 'structure',
              required: ['ServiceArn'],
              members: {
                ServiceArn: {}
              }
            },
            output: {
              type: 'structure',
              required: ['OperationId'],
              members: {
                OperationId: {}
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
                  shape: 'Sj'
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
          UpdateDefaultAutoScalingConfiguration: {
            input: {
              type: 'structure',
              required: ['AutoScalingConfigurationArn'],
              members: {
                AutoScalingConfigurationArn: {}
              }
            },
            output: {
              type: 'structure',
              required: ['AutoScalingConfiguration'],
              members: {
                AutoScalingConfiguration: {
                  shape: 'So'
                }
              }
            }
          },
          UpdateService: {
            input: {
              type: 'structure',
              required: ['ServiceArn'],
              members: {
                ServiceArn: {},
                SourceConfiguration: {
                  shape: 'S1f'
                },
                InstanceConfiguration: {
                  shape: 'S22'
                },
                AutoScalingConfigurationArn: {},
                HealthCheckConfiguration: {
                  shape: 'S27'
                },
                NetworkConfiguration: {
                  shape: 'S2e'
                },
                ObservabilityConfiguration: {
                  shape: 'S2j'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Service', 'OperationId'],
              members: {
                Service: {
                  shape: 'S2l'
                },
                OperationId: {}
              }
            }
          },
          UpdateVpcIngressConnection: {
            input: {
              type: 'structure',
              required: ['VpcIngressConnectionArn', 'IngressVpcConfiguration'],
              members: {
                VpcIngressConnectionArn: {},
                IngressVpcConfiguration: {
                  shape: 'S2y'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['VpcIngressConnection'],
              members: {
                VpcIngressConnection: {
                  shape: 'S30'
                }
              }
            }
          }
        },
        shapes: {
          S7: {
            type: 'structure',
            required: ['DomainName', 'EnableWWWSubdomain', 'Status'],
            members: {
              DomainName: {},
              EnableWWWSubdomain: {
                type: 'boolean'
              },
              CertificateValidationRecords: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    Name: {},
                    Type: {},
                    Value: {},
                    Status: {}
                  }
                }
              },
              Status: {}
            }
          },
          Sc: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                VpcIngressConnectionArn: {},
                VpcId: {},
                DomainName: {}
              }
            }
          },
          Sj: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Key: {},
                Value: {}
              }
            }
          },
          So: {
            type: 'structure',
            members: {
              AutoScalingConfigurationArn: {},
              AutoScalingConfigurationName: {},
              AutoScalingConfigurationRevision: {
                type: 'integer'
              },
              Latest: {
                type: 'boolean'
              },
              Status: {},
              MaxConcurrency: {
                type: 'integer'
              },
              MinSize: {
                type: 'integer'
              },
              MaxSize: {
                type: 'integer'
              },
              CreatedAt: {
                type: 'timestamp'
              },
              DeletedAt: {
                type: 'timestamp'
              },
              HasAssociatedService: {
                type: 'boolean'
              },
              IsDefault: {
                type: 'boolean'
              }
            }
          },
          S12: {
            type: 'structure',
            members: {
              ConnectionName: {},
              ConnectionArn: {},
              ProviderType: {},
              Status: {},
              CreatedAt: {
                type: 'timestamp'
              }
            }
          },
          S16: {
            type: 'structure',
            required: ['Vendor'],
            members: {
              Vendor: {}
            }
          },
          S19: {
            type: 'structure',
            members: {
              ObservabilityConfigurationArn: {},
              ObservabilityConfigurationName: {},
              TraceConfiguration: {
                shape: 'S16'
              },
              ObservabilityConfigurationRevision: {
                type: 'integer'
              },
              Latest: {
                type: 'boolean'
              },
              Status: {},
              CreatedAt: {
                type: 'timestamp'
              },
              DeletedAt: {
                type: 'timestamp'
              }
            }
          },
          S1f: {
            type: 'structure',
            members: {
              CodeRepository: {
                type: 'structure',
                required: ['RepositoryUrl', 'SourceCodeVersion'],
                members: {
                  RepositoryUrl: {},
                  SourceCodeVersion: {
                    type: 'structure',
                    required: ['Type', 'Value'],
                    members: {
                      Type: {},
                      Value: {}
                    }
                  },
                  CodeConfiguration: {
                    type: 'structure',
                    required: ['ConfigurationSource'],
                    members: {
                      ConfigurationSource: {},
                      CodeConfigurationValues: {
                        type: 'structure',
                        required: ['Runtime'],
                        members: {
                          Runtime: {},
                          BuildCommand: {
                            type: 'string',
                            sensitive: true
                          },
                          StartCommand: {
                            shape: 'S1o'
                          },
                          Port: {},
                          RuntimeEnvironmentVariables: {
                            shape: 'S1p'
                          },
                          RuntimeEnvironmentSecrets: {
                            shape: 'S1s'
                          }
                        }
                      }
                    }
                  },
                  SourceDirectory: {}
                }
              },
              ImageRepository: {
                type: 'structure',
                required: ['ImageIdentifier', 'ImageRepositoryType'],
                members: {
                  ImageIdentifier: {},
                  ImageConfiguration: {
                    type: 'structure',
                    members: {
                      RuntimeEnvironmentVariables: {
                        shape: 'S1p'
                      },
                      StartCommand: {
                        shape: 'S1o'
                      },
                      Port: {},
                      RuntimeEnvironmentSecrets: {
                        shape: 'S1s'
                      }
                    }
                  },
                  ImageRepositoryType: {}
                }
              },
              AutoDeploymentsEnabled: {
                type: 'boolean'
              },
              AuthenticationConfiguration: {
                type: 'structure',
                members: {
                  ConnectionArn: {},
                  AccessRoleArn: {}
                }
              }
            }
          },
          S1o: {
            type: 'string',
            sensitive: true
          },
          S1p: {
            type: 'map',
            key: {
              type: 'string',
              sensitive: true
            },
            value: {
              type: 'string',
              sensitive: true
            }
          },
          S1s: {
            type: 'map',
            key: {
              type: 'string',
              sensitive: true
            },
            value: {
              type: 'string',
              sensitive: true
            }
          },
          S22: {
            type: 'structure',
            members: {
              Cpu: {},
              Memory: {},
              InstanceRoleArn: {}
            }
          },
          S25: {
            type: 'structure',
            required: ['KmsKey'],
            members: {
              KmsKey: {}
            }
          },
          S27: {
            type: 'structure',
            members: {
              Protocol: {},
              Path: {},
              Interval: {
                type: 'integer'
              },
              Timeout: {
                type: 'integer'
              },
              HealthyThreshold: {
                type: 'integer'
              },
              UnhealthyThreshold: {
                type: 'integer'
              }
            }
          },
          S2e: {
            type: 'structure',
            members: {
              EgressConfiguration: {
                type: 'structure',
                members: {
                  EgressType: {},
                  VpcConnectorArn: {}
                }
              },
              IngressConfiguration: {
                type: 'structure',
                members: {
                  IsPubliclyAccessible: {
                    type: 'boolean'
                  }
                }
              },
              IpAddressType: {}
            }
          },
          S2j: {
            type: 'structure',
            required: ['ObservabilityEnabled'],
            members: {
              ObservabilityEnabled: {
                type: 'boolean'
              },
              ObservabilityConfigurationArn: {}
            }
          },
          S2l: {
            type: 'structure',
            required: ['ServiceName', 'ServiceId', 'ServiceArn', 'CreatedAt', 'UpdatedAt', 'Status', 'SourceConfiguration', 'InstanceConfiguration', 'AutoScalingConfigurationSummary', 'NetworkConfiguration'],
            members: {
              ServiceName: {},
              ServiceId: {},
              ServiceArn: {},
              ServiceUrl: {},
              CreatedAt: {
                type: 'timestamp'
              },
              UpdatedAt: {
                type: 'timestamp'
              },
              DeletedAt: {
                type: 'timestamp'
              },
              Status: {},
              SourceConfiguration: {
                shape: 'S1f'
              },
              InstanceConfiguration: {
                shape: 'S22'
              },
              EncryptionConfiguration: {
                shape: 'S25'
              },
              HealthCheckConfiguration: {
                shape: 'S27'
              },
              AutoScalingConfigurationSummary: {
                shape: 'S2o'
              },
              NetworkConfiguration: {
                shape: 'S2e'
              },
              ObservabilityConfiguration: {
                shape: 'S2j'
              }
            }
          },
          S2o: {
            type: 'structure',
            members: {
              AutoScalingConfigurationArn: {},
              AutoScalingConfigurationName: {},
              AutoScalingConfigurationRevision: {
                type: 'integer'
              },
              Status: {},
              CreatedAt: {
                type: 'timestamp'
              },
              HasAssociatedService: {
                type: 'boolean'
              },
              IsDefault: {
                type: 'boolean'
              }
            }
          },
          S2s: {
            type: 'list',
            member: {}
          },
          S2u: {
            type: 'structure',
            members: {
              VpcConnectorName: {},
              VpcConnectorArn: {},
              VpcConnectorRevision: {
                type: 'integer'
              },
              Subnets: {
                shape: 'S2s'
              },
              SecurityGroups: {
                shape: 'S2s'
              },
              Status: {},
              CreatedAt: {
                type: 'timestamp'
              },
              DeletedAt: {
                type: 'timestamp'
              }
            }
          },
          S2y: {
            type: 'structure',
            members: {
              VpcId: {},
              VpcEndpointId: {}
            }
          },
          S30: {
            type: 'structure',
            members: {
              VpcIngressConnectionArn: {},
              VpcIngressConnectionName: {},
              ServiceArn: {},
              Status: {},
              AccountId: {},
              DomainName: {},
              IngressVpcConfiguration: {
                shape: 'S2y'
              },
              CreatedAt: {
                type: 'timestamp'
              },
              DeletedAt: {
                type: 'timestamp'
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=99cc05ec175e76eb887a87af693f618688ca7b43.js.map