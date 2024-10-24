System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2016-06-30',
          endpointPrefix: 'snowball',
          jsonVersion: '1.1',
          protocol: 'json',
          serviceAbbreviation: 'Amazon Snowball',
          serviceFullName: 'Amazon Import/Export Snowball',
          serviceId: 'Snowball',
          signatureVersion: 'v4',
          targetPrefix: 'AWSIESnowballJobManagementService',
          uid: 'snowball-2016-06-30'
        },
        operations: {
          CancelCluster: {
            input: {
              type: 'structure',
              required: ['ClusterId'],
              members: {
                ClusterId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          CancelJob: {
            input: {
              type: 'structure',
              required: ['JobId'],
              members: {
                JobId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          CreateAddress: {
            input: {
              type: 'structure',
              required: ['Address'],
              members: {
                Address: {
                  shape: 'S8'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AddressId: {}
              }
            }
          },
          CreateCluster: {
            input: {
              type: 'structure',
              required: ['JobType', 'AddressId', 'SnowballType', 'ShippingOption'],
              members: {
                JobType: {},
                Resources: {
                  shape: 'Sg'
                },
                OnDeviceServiceConfiguration: {
                  shape: 'Sw'
                },
                Description: {},
                AddressId: {},
                KmsKeyARN: {},
                RoleARN: {},
                SnowballType: {},
                ShippingOption: {},
                Notification: {
                  shape: 'S1a'
                },
                ForwardingAddressId: {},
                TaxDocuments: {
                  shape: 'S1e'
                },
                RemoteManagement: {},
                InitialClusterSize: {
                  type: 'integer'
                },
                ForceCreateJobs: {
                  type: 'boolean'
                },
                LongTermPricingIds: {
                  type: 'list',
                  member: {}
                },
                SnowballCapacityPreference: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ClusterId: {},
                JobListEntries: {
                  shape: 'S1n'
                }
              }
            }
          },
          CreateJob: {
            input: {
              type: 'structure',
              members: {
                JobType: {},
                Resources: {
                  shape: 'Sg'
                },
                OnDeviceServiceConfiguration: {
                  shape: 'Sw'
                },
                Description: {},
                AddressId: {},
                KmsKeyARN: {},
                RoleARN: {},
                SnowballCapacityPreference: {},
                ShippingOption: {},
                Notification: {
                  shape: 'S1a'
                },
                ClusterId: {},
                SnowballType: {},
                ForwardingAddressId: {},
                TaxDocuments: {
                  shape: 'S1e'
                },
                DeviceConfiguration: {
                  shape: 'S1r'
                },
                RemoteManagement: {},
                LongTermPricingId: {},
                ImpactLevel: {},
                PickupDetails: {
                  shape: 'S1v'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                JobId: {}
              }
            }
          },
          CreateLongTermPricing: {
            input: {
              type: 'structure',
              required: ['LongTermPricingType', 'SnowballType'],
              members: {
                LongTermPricingType: {},
                IsLongTermPricingAutoRenew: {
                  type: 'boolean'
                },
                SnowballType: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                LongTermPricingId: {}
              }
            }
          },
          CreateReturnShippingLabel: {
            input: {
              type: 'structure',
              required: ['JobId'],
              members: {
                JobId: {},
                ShippingOption: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Status: {}
              }
            }
          },
          DescribeAddress: {
            input: {
              type: 'structure',
              required: ['AddressId'],
              members: {
                AddressId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Address: {
                  shape: 'S8'
                }
              }
            }
          },
          DescribeAddresses: {
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
              members: {
                Addresses: {
                  shape: 'S2c'
                },
                NextToken: {}
              }
            }
          },
          DescribeCluster: {
            input: {
              type: 'structure',
              required: ['ClusterId'],
              members: {
                ClusterId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ClusterMetadata: {
                  type: 'structure',
                  members: {
                    ClusterId: {},
                    Description: {},
                    KmsKeyARN: {},
                    RoleARN: {},
                    ClusterState: {},
                    JobType: {},
                    SnowballType: {},
                    CreationDate: {
                      type: 'timestamp'
                    },
                    Resources: {
                      shape: 'Sg'
                    },
                    AddressId: {},
                    ShippingOption: {},
                    Notification: {
                      shape: 'S1a'
                    },
                    ForwardingAddressId: {},
                    TaxDocuments: {
                      shape: 'S1e'
                    },
                    OnDeviceServiceConfiguration: {
                      shape: 'Sw'
                    }
                  }
                }
              }
            }
          },
          DescribeJob: {
            input: {
              type: 'structure',
              required: ['JobId'],
              members: {
                JobId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                JobMetadata: {
                  shape: 'S2j'
                },
                SubJobMetadata: {
                  type: 'list',
                  member: {
                    shape: 'S2j'
                  }
                }
              }
            }
          },
          DescribeReturnShippingLabel: {
            input: {
              type: 'structure',
              required: ['JobId'],
              members: {
                JobId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Status: {},
                ExpirationDate: {
                  type: 'timestamp'
                },
                ReturnShippingLabelURI: {}
              }
            }
          },
          GetJobManifest: {
            input: {
              type: 'structure',
              required: ['JobId'],
              members: {
                JobId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ManifestURI: {}
              }
            }
          },
          GetJobUnlockCode: {
            input: {
              type: 'structure',
              required: ['JobId'],
              members: {
                JobId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                UnlockCode: {}
              }
            }
          },
          GetSnowballUsage: {
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {
                SnowballLimit: {
                  type: 'integer'
                },
                SnowballsInUse: {
                  type: 'integer'
                }
              }
            }
          },
          GetSoftwareUpdates: {
            input: {
              type: 'structure',
              required: ['JobId'],
              members: {
                JobId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                UpdatesURI: {}
              }
            }
          },
          ListClusterJobs: {
            input: {
              type: 'structure',
              required: ['ClusterId'],
              members: {
                ClusterId: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                JobListEntries: {
                  shape: 'S1n'
                },
                NextToken: {}
              }
            }
          },
          ListClusters: {
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
              members: {
                ClusterListEntries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ClusterId: {},
                      ClusterState: {},
                      CreationDate: {
                        type: 'timestamp'
                      },
                      Description: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListCompatibleImages: {
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
              members: {
                CompatibleImages: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      AmiId: {},
                      Name: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListJobs: {
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
              members: {
                JobListEntries: {
                  shape: 'S1n'
                },
                NextToken: {}
              }
            }
          },
          ListLongTermPricing: {
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
              members: {
                LongTermPricingEntries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      LongTermPricingId: {},
                      LongTermPricingEndDate: {
                        type: 'timestamp'
                      },
                      LongTermPricingStartDate: {
                        type: 'timestamp'
                      },
                      LongTermPricingType: {},
                      CurrentActiveJob: {},
                      ReplacementJob: {},
                      IsLongTermPricingAutoRenew: {
                        type: 'boolean'
                      },
                      LongTermPricingStatus: {},
                      SnowballType: {},
                      JobIds: {
                        type: 'list',
                        member: {}
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListPickupLocations: {
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
              members: {
                Addresses: {
                  shape: 'S2c'
                },
                NextToken: {}
              }
            }
          },
          ListServiceVersions: {
            input: {
              type: 'structure',
              required: ['ServiceName'],
              members: {
                ServiceName: {},
                DependentServices: {
                  shape: 'S3m'
                },
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              required: ['ServiceVersions', 'ServiceName'],
              members: {
                ServiceVersions: {
                  type: 'list',
                  member: {
                    shape: 'S3o'
                  }
                },
                ServiceName: {},
                DependentServices: {
                  shape: 'S3m'
                },
                NextToken: {}
              }
            }
          },
          UpdateCluster: {
            input: {
              type: 'structure',
              required: ['ClusterId'],
              members: {
                ClusterId: {},
                RoleARN: {},
                Description: {},
                Resources: {
                  shape: 'Sg'
                },
                OnDeviceServiceConfiguration: {
                  shape: 'Sw'
                },
                AddressId: {},
                ShippingOption: {},
                Notification: {
                  shape: 'S1a'
                },
                ForwardingAddressId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateJob: {
            input: {
              type: 'structure',
              required: ['JobId'],
              members: {
                JobId: {},
                RoleARN: {},
                Notification: {
                  shape: 'S1a'
                },
                Resources: {
                  shape: 'Sg'
                },
                OnDeviceServiceConfiguration: {
                  shape: 'Sw'
                },
                AddressId: {},
                ShippingOption: {},
                Description: {},
                SnowballCapacityPreference: {},
                ForwardingAddressId: {},
                PickupDetails: {
                  shape: 'S1v'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateJobShipmentState: {
            input: {
              type: 'structure',
              required: ['JobId', 'ShipmentState'],
              members: {
                JobId: {},
                ShipmentState: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateLongTermPricing: {
            input: {
              type: 'structure',
              required: ['LongTermPricingId'],
              members: {
                LongTermPricingId: {},
                ReplacementJob: {},
                IsLongTermPricingAutoRenew: {
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
          S8: {
            type: 'structure',
            members: {
              AddressId: {},
              Name: {},
              Company: {},
              Street1: {},
              Street2: {},
              Street3: {},
              City: {},
              StateOrProvince: {},
              PrefectureOrDistrict: {},
              Landmark: {},
              Country: {},
              PostalCode: {},
              PhoneNumber: {},
              IsRestricted: {
                type: 'boolean'
              },
              Type: {}
            }
          },
          Sg: {
            type: 'structure',
            members: {
              S3Resources: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    BucketArn: {},
                    KeyRange: {
                      type: 'structure',
                      members: {
                        BeginMarker: {},
                        EndMarker: {}
                      }
                    },
                    TargetOnDeviceServices: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          ServiceName: {},
                          TransferOption: {}
                        }
                      }
                    }
                  }
                }
              },
              LambdaResources: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    LambdaArn: {},
                    EventTriggers: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          EventResourceARN: {}
                        }
                      }
                    }
                  }
                }
              },
              Ec2AmiResources: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['AmiId'],
                  members: {
                    AmiId: {},
                    SnowballAmiId: {}
                  }
                }
              }
            }
          },
          Sw: {
            type: 'structure',
            members: {
              NFSOnDeviceService: {
                type: 'structure',
                members: {
                  StorageLimit: {
                    type: 'integer'
                  },
                  StorageUnit: {}
                }
              },
              TGWOnDeviceService: {
                type: 'structure',
                members: {
                  StorageLimit: {
                    type: 'integer'
                  },
                  StorageUnit: {}
                }
              },
              EKSOnDeviceService: {
                type: 'structure',
                members: {
                  KubernetesVersion: {},
                  EKSAnywhereVersion: {}
                }
              },
              S3OnDeviceService: {
                type: 'structure',
                members: {
                  StorageLimit: {
                    type: 'double'
                  },
                  StorageUnit: {},
                  ServiceSize: {
                    type: 'integer'
                  },
                  FaultTolerance: {
                    type: 'integer'
                  }
                }
              }
            }
          },
          S1a: {
            type: 'structure',
            members: {
              SnsTopicARN: {},
              JobStatesToNotify: {
                type: 'list',
                member: {}
              },
              NotifyAll: {
                type: 'boolean'
              },
              DevicePickupSnsTopicARN: {}
            }
          },
          S1e: {
            type: 'structure',
            members: {
              IND: {
                type: 'structure',
                members: {
                  GSTIN: {}
                }
              }
            }
          },
          S1n: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                JobId: {},
                JobState: {},
                IsMaster: {
                  type: 'boolean'
                },
                JobType: {},
                SnowballType: {},
                CreationDate: {
                  type: 'timestamp'
                },
                Description: {}
              }
            }
          },
          S1r: {
            type: 'structure',
            members: {
              SnowconeDeviceConfiguration: {
                type: 'structure',
                members: {
                  WirelessConnection: {
                    type: 'structure',
                    members: {
                      IsWifiEnabled: {
                        type: 'boolean'
                      }
                    }
                  }
                }
              }
            }
          },
          S1v: {
            type: 'structure',
            members: {
              Name: {},
              PhoneNumber: {
                type: 'string',
                sensitive: true
              },
              Email: {
                type: 'string',
                sensitive: true
              },
              IdentificationNumber: {},
              IdentificationExpirationDate: {
                type: 'timestamp'
              },
              IdentificationIssuingOrg: {},
              DevicePickupId: {}
            }
          },
          S2c: {
            type: 'list',
            member: {
              shape: 'S8'
            }
          },
          S2j: {
            type: 'structure',
            members: {
              JobId: {},
              JobState: {},
              JobType: {},
              SnowballType: {},
              CreationDate: {
                type: 'timestamp'
              },
              Resources: {
                shape: 'Sg'
              },
              Description: {},
              KmsKeyARN: {},
              RoleARN: {},
              AddressId: {},
              ShippingDetails: {
                type: 'structure',
                members: {
                  ShippingOption: {},
                  InboundShipment: {
                    shape: 'S2l'
                  },
                  OutboundShipment: {
                    shape: 'S2l'
                  }
                }
              },
              SnowballCapacityPreference: {},
              Notification: {
                shape: 'S1a'
              },
              DataTransferProgress: {
                type: 'structure',
                members: {
                  BytesTransferred: {
                    type: 'long'
                  },
                  ObjectsTransferred: {
                    type: 'long'
                  },
                  TotalBytes: {
                    type: 'long'
                  },
                  TotalObjects: {
                    type: 'long'
                  }
                }
              },
              JobLogInfo: {
                type: 'structure',
                members: {
                  JobCompletionReportURI: {},
                  JobSuccessLogURI: {},
                  JobFailureLogURI: {}
                }
              },
              ClusterId: {},
              ForwardingAddressId: {},
              TaxDocuments: {
                shape: 'S1e'
              },
              DeviceConfiguration: {
                shape: 'S1r'
              },
              RemoteManagement: {},
              LongTermPricingId: {},
              OnDeviceServiceConfiguration: {
                shape: 'Sw'
              },
              ImpactLevel: {},
              PickupDetails: {
                shape: 'S1v'
              },
              SnowballId: {}
            }
          },
          S2l: {
            type: 'structure',
            members: {
              Status: {},
              TrackingNumber: {}
            }
          },
          S3m: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                ServiceName: {},
                ServiceVersion: {
                  shape: 'S3o'
                }
              }
            }
          },
          S3o: {
            type: 'structure',
            members: {
              Version: {}
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=302d487194078f09b36601dd1b92b83dac8d170b.js.map