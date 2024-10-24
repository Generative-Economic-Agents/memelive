System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2017-03-14',
          endpointPrefix: 'servicediscovery',
          jsonVersion: '1.1',
          protocol: 'json',
          serviceAbbreviation: 'ServiceDiscovery',
          serviceFullName: 'AWS Cloud Map',
          serviceId: 'ServiceDiscovery',
          signatureVersion: 'v4',
          targetPrefix: 'Route53AutoNaming_v20170314',
          uid: 'servicediscovery-2017-03-14'
        },
        operations: {
          CreateHttpNamespace: {
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {},
                CreatorRequestId: {
                  idempotencyToken: true
                },
                Description: {},
                Tags: {
                  shape: 'S5'
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
          CreatePrivateDnsNamespace: {
            input: {
              type: 'structure',
              required: ['Name', 'Vpc'],
              members: {
                Name: {},
                CreatorRequestId: {
                  idempotencyToken: true
                },
                Description: {},
                Vpc: {},
                Tags: {
                  shape: 'S5'
                },
                Properties: {
                  type: 'structure',
                  required: ['DnsProperties'],
                  members: {
                    DnsProperties: {
                      type: 'structure',
                      required: ['SOA'],
                      members: {
                        SOA: {
                          shape: 'Sf'
                        }
                      }
                    }
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
          CreatePublicDnsNamespace: {
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {},
                CreatorRequestId: {
                  idempotencyToken: true
                },
                Description: {},
                Tags: {
                  shape: 'S5'
                },
                Properties: {
                  type: 'structure',
                  required: ['DnsProperties'],
                  members: {
                    DnsProperties: {
                      type: 'structure',
                      required: ['SOA'],
                      members: {
                        SOA: {
                          shape: 'Sf'
                        }
                      }
                    }
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
          CreateService: {
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {},
                NamespaceId: {},
                CreatorRequestId: {
                  idempotencyToken: true
                },
                Description: {},
                DnsConfig: {
                  shape: 'Sp'
                },
                HealthCheckConfig: {
                  shape: 'Su'
                },
                HealthCheckCustomConfig: {
                  shape: 'Sy'
                },
                Tags: {
                  shape: 'S5'
                },
                Type: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Service: {
                  shape: 'S11'
                }
              }
            }
          },
          DeleteNamespace: {
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
                OperationId: {}
              }
            }
          },
          DeleteService: {
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
          DeregisterInstance: {
            input: {
              type: 'structure',
              required: ['ServiceId', 'InstanceId'],
              members: {
                ServiceId: {},
                InstanceId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                OperationId: {}
              }
            }
          },
          DiscoverInstances: {
            input: {
              type: 'structure',
              required: ['NamespaceName', 'ServiceName'],
              members: {
                NamespaceName: {},
                ServiceName: {},
                MaxResults: {
                  type: 'integer'
                },
                QueryParameters: {
                  shape: 'S1f'
                },
                OptionalParameters: {
                  shape: 'S1f'
                },
                HealthStatus: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Instances: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      InstanceId: {},
                      NamespaceName: {},
                      ServiceName: {},
                      HealthStatus: {},
                      Attributes: {
                        shape: 'S1f'
                      }
                    }
                  }
                },
                InstancesRevision: {
                  type: 'long'
                }
              }
            },
            endpoint: {
              hostPrefix: 'data-'
            }
          },
          DiscoverInstancesRevision: {
            input: {
              type: 'structure',
              required: ['NamespaceName', 'ServiceName'],
              members: {
                NamespaceName: {},
                ServiceName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                InstancesRevision: {
                  type: 'long'
                }
              }
            },
            endpoint: {
              hostPrefix: 'data-'
            }
          },
          GetInstance: {
            input: {
              type: 'structure',
              required: ['ServiceId', 'InstanceId'],
              members: {
                ServiceId: {},
                InstanceId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Instance: {
                  type: 'structure',
                  required: ['Id'],
                  members: {
                    Id: {},
                    CreatorRequestId: {},
                    Attributes: {
                      shape: 'S1f'
                    }
                  }
                }
              }
            }
          },
          GetInstancesHealthStatus: {
            input: {
              type: 'structure',
              required: ['ServiceId'],
              members: {
                ServiceId: {},
                Instances: {
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
                Status: {
                  type: 'map',
                  key: {},
                  value: {}
                },
                NextToken: {}
              }
            }
          },
          GetNamespace: {
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
                Namespace: {
                  type: 'structure',
                  members: {
                    Id: {},
                    Arn: {},
                    Name: {},
                    Type: {},
                    Description: {},
                    ServiceCount: {
                      type: 'integer'
                    },
                    Properties: {
                      shape: 'S23'
                    },
                    CreateDate: {
                      type: 'timestamp'
                    },
                    CreatorRequestId: {}
                  }
                }
              }
            }
          },
          GetOperation: {
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
                Operation: {
                  type: 'structure',
                  members: {
                    Id: {},
                    Type: {},
                    Status: {},
                    ErrorMessage: {},
                    ErrorCode: {},
                    CreateDate: {
                      type: 'timestamp'
                    },
                    UpdateDate: {
                      type: 'timestamp'
                    },
                    Targets: {
                      type: 'map',
                      key: {},
                      value: {}
                    }
                  }
                }
              }
            }
          },
          GetService: {
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
                Service: {
                  shape: 'S11'
                }
              }
            }
          },
          ListInstances: {
            input: {
              type: 'structure',
              required: ['ServiceId'],
              members: {
                ServiceId: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Instances: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Id: {},
                      Attributes: {
                        shape: 'S1f'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListNamespaces: {
            input: {
              type: 'structure',
              members: {
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                Filters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Name', 'Values'],
                    members: {
                      Name: {},
                      Values: {
                        shape: 'S2p'
                      },
                      Condition: {}
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Namespaces: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Id: {},
                      Arn: {},
                      Name: {},
                      Type: {},
                      Description: {},
                      ServiceCount: {
                        type: 'integer'
                      },
                      Properties: {
                        shape: 'S23'
                      },
                      CreateDate: {
                        type: 'timestamp'
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
              members: {
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                Filters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Name', 'Values'],
                    members: {
                      Name: {},
                      Values: {
                        shape: 'S2p'
                      },
                      Condition: {}
                    }
                  }
                }
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
                      Id: {},
                      Status: {}
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
                },
                Filters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Name', 'Values'],
                    members: {
                      Name: {},
                      Values: {
                        shape: 'S2p'
                      },
                      Condition: {}
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Services: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Id: {},
                      Arn: {},
                      Name: {},
                      Type: {},
                      Description: {},
                      InstanceCount: {
                        type: 'integer'
                      },
                      DnsConfig: {
                        shape: 'Sp'
                      },
                      HealthCheckConfig: {
                        shape: 'Su'
                      },
                      HealthCheckCustomConfig: {
                        shape: 'Sy'
                      },
                      CreateDate: {
                        type: 'timestamp'
                      }
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
              required: ['ResourceARN'],
              members: {
                ResourceARN: {}
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
          RegisterInstance: {
            input: {
              type: 'structure',
              required: ['ServiceId', 'InstanceId', 'Attributes'],
              members: {
                ServiceId: {},
                InstanceId: {},
                CreatorRequestId: {
                  idempotencyToken: true
                },
                Attributes: {
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
          TagResource: {
            input: {
              type: 'structure',
              required: ['ResourceARN', 'Tags'],
              members: {
                ResourceARN: {},
                Tags: {
                  shape: 'S5'
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
              required: ['ResourceARN', 'TagKeys'],
              members: {
                ResourceARN: {},
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
          UpdateHttpNamespace: {
            input: {
              type: 'structure',
              required: ['Id', 'Namespace'],
              members: {
                Id: {},
                UpdaterRequestId: {
                  idempotencyToken: true
                },
                Namespace: {
                  type: 'structure',
                  required: ['Description'],
                  members: {
                    Description: {}
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
          UpdateInstanceCustomHealthStatus: {
            input: {
              type: 'structure',
              required: ['ServiceId', 'InstanceId', 'Status'],
              members: {
                ServiceId: {},
                InstanceId: {},
                Status: {}
              }
            }
          },
          UpdatePrivateDnsNamespace: {
            input: {
              type: 'structure',
              required: ['Id', 'Namespace'],
              members: {
                Id: {},
                UpdaterRequestId: {
                  idempotencyToken: true
                },
                Namespace: {
                  type: 'structure',
                  members: {
                    Description: {},
                    Properties: {
                      type: 'structure',
                      required: ['DnsProperties'],
                      members: {
                        DnsProperties: {
                          type: 'structure',
                          required: ['SOA'],
                          members: {
                            SOA: {
                              shape: 'S3t'
                            }
                          }
                        }
                      }
                    }
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
          UpdatePublicDnsNamespace: {
            input: {
              type: 'structure',
              required: ['Id', 'Namespace'],
              members: {
                Id: {},
                UpdaterRequestId: {
                  idempotencyToken: true
                },
                Namespace: {
                  type: 'structure',
                  members: {
                    Description: {},
                    Properties: {
                      type: 'structure',
                      required: ['DnsProperties'],
                      members: {
                        DnsProperties: {
                          type: 'structure',
                          required: ['SOA'],
                          members: {
                            SOA: {
                              shape: 'S3t'
                            }
                          }
                        }
                      }
                    }
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
          UpdateService: {
            input: {
              type: 'structure',
              required: ['Id', 'Service'],
              members: {
                Id: {},
                Service: {
                  type: 'structure',
                  members: {
                    Description: {},
                    DnsConfig: {
                      type: 'structure',
                      required: ['DnsRecords'],
                      members: {
                        DnsRecords: {
                          shape: 'Sr'
                        }
                      }
                    },
                    HealthCheckConfig: {
                      shape: 'Su'
                    }
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
          }
        },
        shapes: {
          S5: {
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
          Sf: {
            type: 'structure',
            required: ['TTL'],
            members: {
              TTL: {
                type: 'long'
              }
            }
          },
          Sp: {
            type: 'structure',
            required: ['DnsRecords'],
            members: {
              NamespaceId: {
                deprecated: true,
                deprecatedMessage: 'Top level attribute in request should be used to reference namespace-id'
              },
              RoutingPolicy: {},
              DnsRecords: {
                shape: 'Sr'
              }
            }
          },
          Sr: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Type', 'TTL'],
              members: {
                Type: {},
                TTL: {
                  type: 'long'
                }
              }
            }
          },
          Su: {
            type: 'structure',
            required: ['Type'],
            members: {
              Type: {},
              ResourcePath: {},
              FailureThreshold: {
                type: 'integer'
              }
            }
          },
          Sy: {
            type: 'structure',
            members: {
              FailureThreshold: {
                deprecated: true,
                deprecatedMessage: 'Configurable FailureThreshold of HealthCheckCustomConfig is deprecated.  It will always have value 1.',
                type: 'integer'
              }
            }
          },
          S11: {
            type: 'structure',
            members: {
              Id: {},
              Arn: {},
              Name: {},
              NamespaceId: {},
              Description: {},
              InstanceCount: {
                type: 'integer'
              },
              DnsConfig: {
                shape: 'Sp'
              },
              Type: {},
              HealthCheckConfig: {
                shape: 'Su'
              },
              HealthCheckCustomConfig: {
                shape: 'Sy'
              },
              CreateDate: {
                type: 'timestamp'
              },
              CreatorRequestId: {}
            }
          },
          S1f: {
            type: 'map',
            key: {},
            value: {}
          },
          S23: {
            type: 'structure',
            members: {
              DnsProperties: {
                type: 'structure',
                members: {
                  HostedZoneId: {},
                  SOA: {
                    shape: 'Sf'
                  }
                }
              },
              HttpProperties: {
                type: 'structure',
                members: {
                  HttpName: {}
                }
              }
            }
          },
          S2p: {
            type: 'list',
            member: {}
          },
          S3t: {
            type: 'structure',
            required: ['TTL'],
            members: {
              TTL: {
                type: 'long'
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=dce105ed0cad4b694ffba33c54eccd572b6ac799.js.map