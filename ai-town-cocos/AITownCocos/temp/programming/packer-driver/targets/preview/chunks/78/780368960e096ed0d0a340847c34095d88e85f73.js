System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2019-07-24',
          endpointPrefix: 'panorama',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceAbbreviation: 'Panorama',
          serviceFullName: 'AWS Panorama',
          serviceId: 'Panorama',
          signatureVersion: 'v4',
          signingName: 'panorama',
          uid: 'panorama-2019-07-24'
        },
        operations: {
          CreateApplicationInstance: {
            http: {
              requestUri: '/application-instances',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['DefaultRuntimeContextDevice', 'ManifestPayload'],
              members: {
                ApplicationInstanceIdToReplace: {},
                DefaultRuntimeContextDevice: {},
                Description: {},
                ManifestOverridesPayload: {
                  shape: 'S5'
                },
                ManifestPayload: {
                  shape: 'S7'
                },
                Name: {},
                RuntimeRoleArn: {},
                Tags: {
                  shape: 'Sb'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['ApplicationInstanceId'],
              members: {
                ApplicationInstanceId: {}
              }
            }
          },
          CreateJobForDevices: {
            http: {
              requestUri: '/jobs',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['DeviceIds', 'JobType'],
              members: {
                DeviceIds: {
                  type: 'list',
                  member: {}
                },
                DeviceJobConfig: {
                  type: 'structure',
                  members: {
                    OTAJobConfig: {
                      type: 'structure',
                      required: ['ImageVersion'],
                      members: {
                        AllowMajorVersionUpdate: {
                          type: 'boolean'
                        },
                        ImageVersion: {}
                      }
                    }
                  }
                },
                JobType: {}
              }
            },
            output: {
              type: 'structure',
              required: ['Jobs'],
              members: {
                Jobs: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      DeviceId: {},
                      JobId: {}
                    }
                  }
                }
              }
            }
          },
          CreateNodeFromTemplateJob: {
            http: {
              requestUri: '/packages/template-job',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['NodeName', 'OutputPackageName', 'OutputPackageVersion', 'TemplateParameters', 'TemplateType'],
              members: {
                JobTags: {
                  shape: 'Ss'
                },
                NodeDescription: {},
                NodeName: {},
                OutputPackageName: {},
                OutputPackageVersion: {},
                TemplateParameters: {
                  shape: 'Sy'
                },
                TemplateType: {}
              }
            },
            output: {
              type: 'structure',
              required: ['JobId'],
              members: {
                JobId: {}
              }
            }
          },
          CreatePackage: {
            http: {
              requestUri: '/packages',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['PackageName'],
              members: {
                PackageName: {},
                Tags: {
                  shape: 'Sb'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['StorageLocation'],
              members: {
                Arn: {},
                PackageId: {},
                StorageLocation: {
                  shape: 'S17'
                }
              }
            }
          },
          CreatePackageImportJob: {
            http: {
              requestUri: '/packages/import-jobs',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ClientToken', 'InputConfig', 'JobType', 'OutputConfig'],
              members: {
                ClientToken: {},
                InputConfig: {
                  shape: 'S1c'
                },
                JobTags: {
                  shape: 'Ss'
                },
                JobType: {},
                OutputConfig: {
                  shape: 'S1j'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['JobId'],
              members: {
                JobId: {}
              }
            }
          },
          DeleteDevice: {
            http: {
              method: 'DELETE',
              requestUri: '/devices/{DeviceId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['DeviceId'],
              members: {
                DeviceId: {
                  location: 'uri',
                  locationName: 'DeviceId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                DeviceId: {}
              }
            }
          },
          DeletePackage: {
            http: {
              method: 'DELETE',
              requestUri: '/packages/{PackageId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['PackageId'],
              members: {
                ForceDelete: {
                  location: 'querystring',
                  locationName: 'ForceDelete',
                  type: 'boolean'
                },
                PackageId: {
                  location: 'uri',
                  locationName: 'PackageId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeregisterPackageVersion: {
            http: {
              method: 'DELETE',
              requestUri: '/packages/{PackageId}/versions/{PackageVersion}/patch/{PatchVersion}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['PackageId', 'PackageVersion', 'PatchVersion'],
              members: {
                OwnerAccount: {
                  location: 'querystring',
                  locationName: 'OwnerAccount'
                },
                PackageId: {
                  location: 'uri',
                  locationName: 'PackageId'
                },
                PackageVersion: {
                  location: 'uri',
                  locationName: 'PackageVersion'
                },
                PatchVersion: {
                  location: 'uri',
                  locationName: 'PatchVersion'
                },
                UpdatedLatestPatchVersion: {
                  location: 'querystring',
                  locationName: 'UpdatedLatestPatchVersion'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DescribeApplicationInstance: {
            http: {
              method: 'GET',
              requestUri: '/application-instances/{ApplicationInstanceId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ApplicationInstanceId'],
              members: {
                ApplicationInstanceId: {
                  location: 'uri',
                  locationName: 'ApplicationInstanceId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ApplicationInstanceId: {},
                ApplicationInstanceIdToReplace: {},
                Arn: {},
                CreatedTime: {
                  type: 'timestamp'
                },
                DefaultRuntimeContextDevice: {},
                DefaultRuntimeContextDeviceName: {},
                Description: {},
                HealthStatus: {},
                LastUpdatedTime: {
                  type: 'timestamp'
                },
                Name: {},
                RuntimeContextStates: {
                  shape: 'S21'
                },
                RuntimeRoleArn: {},
                Status: {},
                StatusDescription: {},
                Tags: {
                  shape: 'Sb'
                }
              }
            }
          },
          DescribeApplicationInstanceDetails: {
            http: {
              method: 'GET',
              requestUri: '/application-instances/{ApplicationInstanceId}/details',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ApplicationInstanceId'],
              members: {
                ApplicationInstanceId: {
                  location: 'uri',
                  locationName: 'ApplicationInstanceId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ApplicationInstanceId: {},
                ApplicationInstanceIdToReplace: {},
                CreatedTime: {
                  type: 'timestamp'
                },
                DefaultRuntimeContextDevice: {},
                Description: {},
                ManifestOverridesPayload: {
                  shape: 'S5'
                },
                ManifestPayload: {
                  shape: 'S7'
                },
                Name: {}
              }
            }
          },
          DescribeDevice: {
            http: {
              method: 'GET',
              requestUri: '/devices/{DeviceId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['DeviceId'],
              members: {
                DeviceId: {
                  location: 'uri',
                  locationName: 'DeviceId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AlternateSoftwares: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Version: {}
                    }
                  }
                },
                Arn: {},
                Brand: {},
                CreatedTime: {
                  type: 'timestamp'
                },
                CurrentNetworkingStatus: {
                  type: 'structure',
                  members: {
                    Ethernet0Status: {
                      shape: 'S2j'
                    },
                    Ethernet1Status: {
                      shape: 'S2j'
                    },
                    LastUpdatedTime: {
                      type: 'timestamp'
                    },
                    NtpStatus: {
                      type: 'structure',
                      members: {
                        ConnectionStatus: {},
                        IpAddress: {},
                        NtpServerName: {}
                      }
                    }
                  }
                },
                CurrentSoftware: {},
                Description: {},
                DeviceAggregatedStatus: {},
                DeviceConnectionStatus: {},
                DeviceId: {},
                LatestAlternateSoftware: {},
                LatestDeviceJob: {
                  shape: 'S2u'
                },
                LatestSoftware: {},
                LeaseExpirationTime: {
                  type: 'timestamp'
                },
                Name: {},
                NetworkingConfiguration: {
                  shape: 'S2y'
                },
                ProvisioningStatus: {},
                SerialNumber: {},
                Tags: {
                  shape: 'Sb'
                },
                Type: {}
              }
            }
          },
          DescribeDeviceJob: {
            http: {
              method: 'GET',
              requestUri: '/jobs/{JobId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['JobId'],
              members: {
                JobId: {
                  location: 'uri',
                  locationName: 'JobId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                CreatedTime: {
                  type: 'timestamp'
                },
                DeviceArn: {},
                DeviceId: {},
                DeviceName: {},
                DeviceType: {},
                ImageVersion: {},
                JobId: {},
                JobType: {},
                Status: {}
              }
            }
          },
          DescribeNode: {
            http: {
              method: 'GET',
              requestUri: '/nodes/{NodeId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['NodeId'],
              members: {
                NodeId: {
                  location: 'uri',
                  locationName: 'NodeId'
                },
                OwnerAccount: {
                  location: 'querystring',
                  locationName: 'OwnerAccount'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Category', 'CreatedTime', 'Description', 'LastUpdatedTime', 'Name', 'NodeId', 'NodeInterface', 'OwnerAccount', 'PackageId', 'PackageName', 'PackageVersion', 'PatchVersion'],
              members: {
                AssetName: {},
                Category: {},
                CreatedTime: {
                  type: 'timestamp'
                },
                Description: {},
                LastUpdatedTime: {
                  type: 'timestamp'
                },
                Name: {},
                NodeId: {},
                NodeInterface: {
                  type: 'structure',
                  required: ['Inputs', 'Outputs'],
                  members: {
                    Inputs: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          DefaultValue: {},
                          Description: {},
                          MaxConnections: {
                            type: 'integer'
                          },
                          Name: {},
                          Type: {}
                        }
                      }
                    },
                    Outputs: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          Description: {},
                          Name: {},
                          Type: {}
                        }
                      }
                    }
                  }
                },
                OwnerAccount: {},
                PackageArn: {},
                PackageId: {},
                PackageName: {},
                PackageVersion: {},
                PatchVersion: {}
              }
            }
          },
          DescribeNodeFromTemplateJob: {
            http: {
              method: 'GET',
              requestUri: '/packages/template-job/{JobId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['JobId'],
              members: {
                JobId: {
                  location: 'uri',
                  locationName: 'JobId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['CreatedTime', 'JobId', 'LastUpdatedTime', 'NodeName', 'OutputPackageName', 'OutputPackageVersion', 'Status', 'StatusMessage', 'TemplateParameters', 'TemplateType'],
              members: {
                CreatedTime: {
                  type: 'timestamp'
                },
                JobId: {},
                JobTags: {
                  shape: 'Ss'
                },
                LastUpdatedTime: {
                  type: 'timestamp'
                },
                NodeDescription: {},
                NodeName: {},
                OutputPackageName: {},
                OutputPackageVersion: {},
                Status: {},
                StatusMessage: {},
                TemplateParameters: {
                  shape: 'Sy'
                },
                TemplateType: {}
              }
            }
          },
          DescribePackage: {
            http: {
              method: 'GET',
              requestUri: '/packages/metadata/{PackageId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['PackageId'],
              members: {
                PackageId: {
                  location: 'uri',
                  locationName: 'PackageId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Arn', 'CreatedTime', 'PackageId', 'PackageName', 'StorageLocation', 'Tags'],
              members: {
                Arn: {},
                CreatedTime: {
                  type: 'timestamp'
                },
                PackageId: {},
                PackageName: {},
                ReadAccessPrincipalArns: {
                  shape: 'S3z'
                },
                StorageLocation: {
                  shape: 'S17'
                },
                Tags: {
                  shape: 'Sb'
                },
                WriteAccessPrincipalArns: {
                  shape: 'S3z'
                }
              }
            }
          },
          DescribePackageImportJob: {
            http: {
              method: 'GET',
              requestUri: '/packages/import-jobs/{JobId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['JobId'],
              members: {
                JobId: {
                  location: 'uri',
                  locationName: 'JobId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['CreatedTime', 'InputConfig', 'JobId', 'JobType', 'LastUpdatedTime', 'Output', 'OutputConfig', 'Status', 'StatusMessage'],
              members: {
                ClientToken: {},
                CreatedTime: {
                  type: 'timestamp'
                },
                InputConfig: {
                  shape: 'S1c'
                },
                JobId: {},
                JobTags: {
                  shape: 'Ss'
                },
                JobType: {},
                LastUpdatedTime: {
                  type: 'timestamp'
                },
                Output: {
                  type: 'structure',
                  required: ['OutputS3Location', 'PackageId', 'PackageVersion', 'PatchVersion'],
                  members: {
                    OutputS3Location: {
                      type: 'structure',
                      required: ['BucketName', 'ObjectKey'],
                      members: {
                        BucketName: {},
                        ObjectKey: {}
                      }
                    },
                    PackageId: {},
                    PackageVersion: {},
                    PatchVersion: {}
                  }
                },
                OutputConfig: {
                  shape: 'S1j'
                },
                Status: {},
                StatusMessage: {}
              }
            }
          },
          DescribePackageVersion: {
            http: {
              method: 'GET',
              requestUri: '/packages/metadata/{PackageId}/versions/{PackageVersion}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['PackageId', 'PackageVersion'],
              members: {
                OwnerAccount: {
                  location: 'querystring',
                  locationName: 'OwnerAccount'
                },
                PackageId: {
                  location: 'uri',
                  locationName: 'PackageId'
                },
                PackageVersion: {
                  location: 'uri',
                  locationName: 'PackageVersion'
                },
                PatchVersion: {
                  location: 'querystring',
                  locationName: 'PatchVersion'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['IsLatestPatch', 'PackageId', 'PackageName', 'PackageVersion', 'PatchVersion', 'Status'],
              members: {
                IsLatestPatch: {
                  type: 'boolean'
                },
                OwnerAccount: {},
                PackageArn: {},
                PackageId: {},
                PackageName: {},
                PackageVersion: {},
                PatchVersion: {},
                RegisteredTime: {
                  type: 'timestamp'
                },
                Status: {},
                StatusDescription: {}
              }
            }
          },
          ListApplicationInstanceDependencies: {
            http: {
              method: 'GET',
              requestUri: '/application-instances/{ApplicationInstanceId}/package-dependencies',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ApplicationInstanceId'],
              members: {
                ApplicationInstanceId: {
                  location: 'uri',
                  locationName: 'ApplicationInstanceId'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                PackageObjects: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Name', 'PackageVersion', 'PatchVersion'],
                    members: {
                      Name: {},
                      PackageVersion: {},
                      PatchVersion: {}
                    }
                  }
                }
              }
            }
          },
          ListApplicationInstanceNodeInstances: {
            http: {
              method: 'GET',
              requestUri: '/application-instances/{ApplicationInstanceId}/node-instances',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ApplicationInstanceId'],
              members: {
                ApplicationInstanceId: {
                  location: 'uri',
                  locationName: 'ApplicationInstanceId'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                NodeInstances: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['CurrentStatus', 'NodeInstanceId'],
                    members: {
                      CurrentStatus: {},
                      NodeId: {},
                      NodeInstanceId: {},
                      NodeName: {},
                      PackageName: {},
                      PackagePatchVersion: {},
                      PackageVersion: {}
                    }
                  }
                }
              }
            }
          },
          ListApplicationInstances: {
            http: {
              method: 'GET',
              requestUri: '/application-instances',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                DeviceId: {
                  location: 'querystring',
                  locationName: 'deviceId'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                StatusFilter: {
                  location: 'querystring',
                  locationName: 'statusFilter'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ApplicationInstances: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ApplicationInstanceId: {},
                      Arn: {},
                      CreatedTime: {
                        type: 'timestamp'
                      },
                      DefaultRuntimeContextDevice: {},
                      DefaultRuntimeContextDeviceName: {},
                      Description: {},
                      HealthStatus: {},
                      Name: {},
                      RuntimeContextStates: {
                        shape: 'S21'
                      },
                      Status: {},
                      StatusDescription: {},
                      Tags: {
                        shape: 'Sb'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListDevices: {
            http: {
              method: 'GET',
              requestUri: '/devices',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                DeviceAggregatedStatusFilter: {
                  location: 'querystring',
                  locationName: 'DeviceAggregatedStatusFilter'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'MaxResults',
                  type: 'integer'
                },
                NameFilter: {
                  location: 'querystring',
                  locationName: 'NameFilter'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'NextToken'
                },
                SortBy: {
                  location: 'querystring',
                  locationName: 'SortBy'
                },
                SortOrder: {
                  location: 'querystring',
                  locationName: 'SortOrder'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Devices'],
              members: {
                Devices: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Brand: {},
                      CreatedTime: {
                        type: 'timestamp'
                      },
                      CurrentSoftware: {},
                      Description: {},
                      DeviceAggregatedStatus: {},
                      DeviceId: {},
                      LastUpdatedTime: {
                        type: 'timestamp'
                      },
                      LatestDeviceJob: {
                        shape: 'S2u'
                      },
                      LeaseExpirationTime: {
                        type: 'timestamp'
                      },
                      Name: {},
                      ProvisioningStatus: {},
                      Tags: {
                        shape: 'Sb'
                      },
                      Type: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListDevicesJobs: {
            http: {
              method: 'GET',
              requestUri: '/jobs',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                DeviceId: {
                  location: 'querystring',
                  locationName: 'DeviceId'
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
                DeviceJobs: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      CreatedTime: {
                        type: 'timestamp'
                      },
                      DeviceId: {},
                      DeviceName: {},
                      JobId: {},
                      JobType: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListNodeFromTemplateJobs: {
            http: {
              method: 'GET',
              requestUri: '/packages/template-job',
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
              required: ['NodeFromTemplateJobs'],
              members: {
                NextToken: {},
                NodeFromTemplateJobs: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      CreatedTime: {
                        type: 'timestamp'
                      },
                      JobId: {},
                      NodeName: {},
                      Status: {},
                      StatusMessage: {},
                      TemplateType: {}
                    }
                  }
                }
              }
            }
          },
          ListNodes: {
            http: {
              method: 'GET',
              requestUri: '/nodes',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                Category: {
                  location: 'querystring',
                  locationName: 'category'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                OwnerAccount: {
                  location: 'querystring',
                  locationName: 'ownerAccount'
                },
                PackageName: {
                  location: 'querystring',
                  locationName: 'packageName'
                },
                PackageVersion: {
                  location: 'querystring',
                  locationName: 'packageVersion'
                },
                PatchVersion: {
                  location: 'querystring',
                  locationName: 'patchVersion'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                Nodes: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Category', 'CreatedTime', 'Name', 'NodeId', 'PackageId', 'PackageName', 'PackageVersion', 'PatchVersion'],
                    members: {
                      Category: {},
                      CreatedTime: {
                        type: 'timestamp'
                      },
                      Description: {},
                      Name: {},
                      NodeId: {},
                      OwnerAccount: {},
                      PackageArn: {},
                      PackageId: {},
                      PackageName: {},
                      PackageVersion: {},
                      PatchVersion: {}
                    }
                  }
                }
              }
            }
          },
          ListPackageImportJobs: {
            http: {
              method: 'GET',
              requestUri: '/packages/import-jobs',
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
              required: ['PackageImportJobs'],
              members: {
                NextToken: {},
                PackageImportJobs: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      CreatedTime: {
                        type: 'timestamp'
                      },
                      JobId: {},
                      JobType: {},
                      LastUpdatedTime: {
                        type: 'timestamp'
                      },
                      Status: {},
                      StatusMessage: {}
                    }
                  }
                }
              }
            }
          },
          ListPackages: {
            http: {
              method: 'GET',
              requestUri: '/packages',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                Packages: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Arn: {},
                      CreatedTime: {
                        type: 'timestamp'
                      },
                      PackageId: {},
                      PackageName: {},
                      Tags: {
                        shape: 'Sb'
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
                  shape: 'Sb'
                }
              }
            }
          },
          ProvisionDevice: {
            http: {
              requestUri: '/devices',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Description: {},
                Name: {},
                NetworkingConfiguration: {
                  shape: 'S2y'
                },
                Tags: {
                  shape: 'Sb'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Arn', 'Status'],
              members: {
                Arn: {},
                Certificates: {
                  type: 'blob'
                },
                DeviceId: {},
                IotThingName: {},
                Status: {}
              }
            }
          },
          RegisterPackageVersion: {
            http: {
              method: 'PUT',
              requestUri: '/packages/{PackageId}/versions/{PackageVersion}/patch/{PatchVersion}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['PackageId', 'PackageVersion', 'PatchVersion'],
              members: {
                MarkLatest: {
                  type: 'boolean'
                },
                OwnerAccount: {},
                PackageId: {
                  location: 'uri',
                  locationName: 'PackageId'
                },
                PackageVersion: {
                  location: 'uri',
                  locationName: 'PackageVersion'
                },
                PatchVersion: {
                  location: 'uri',
                  locationName: 'PatchVersion'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          RemoveApplicationInstance: {
            http: {
              method: 'DELETE',
              requestUri: '/application-instances/{ApplicationInstanceId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ApplicationInstanceId'],
              members: {
                ApplicationInstanceId: {
                  location: 'uri',
                  locationName: 'ApplicationInstanceId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          SignalApplicationInstanceNodeInstances: {
            http: {
              method: 'PUT',
              requestUri: '/application-instances/{ApplicationInstanceId}/node-signals',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ApplicationInstanceId', 'NodeSignals'],
              members: {
                ApplicationInstanceId: {
                  location: 'uri',
                  locationName: 'ApplicationInstanceId'
                },
                NodeSignals: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['NodeInstanceId', 'Signal'],
                    members: {
                      NodeInstanceId: {},
                      Signal: {}
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              required: ['ApplicationInstanceId'],
              members: {
                ApplicationInstanceId: {}
              }
            }
          },
          TagResource: {
            http: {
              requestUri: '/tags/{ResourceArn}',
              responseCode: 200
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
                  shape: 'Sb'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UntagResource: {
            http: {
              method: 'DELETE',
              requestUri: '/tags/{ResourceArn}',
              responseCode: 200
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
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateDeviceMetadata: {
            http: {
              method: 'PUT',
              requestUri: '/devices/{DeviceId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['DeviceId'],
              members: {
                Description: {},
                DeviceId: {
                  location: 'uri',
                  locationName: 'DeviceId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                DeviceId: {}
              }
            }
          }
        },
        shapes: {
          S5: {
            type: 'structure',
            members: {
              PayloadData: {}
            },
            union: true
          },
          S7: {
            type: 'structure',
            members: {
              PayloadData: {}
            },
            union: true
          },
          Sb: {
            type: 'map',
            key: {},
            value: {}
          },
          Ss: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['ResourceType', 'Tags'],
              members: {
                ResourceType: {},
                Tags: {
                  shape: 'Sb'
                }
              }
            }
          },
          Sy: {
            type: 'map',
            key: {},
            value: {
              type: 'string',
              sensitive: true
            }
          },
          S17: {
            type: 'structure',
            required: ['BinaryPrefixLocation', 'Bucket', 'GeneratedPrefixLocation', 'ManifestPrefixLocation', 'RepoPrefixLocation'],
            members: {
              BinaryPrefixLocation: {},
              Bucket: {},
              GeneratedPrefixLocation: {},
              ManifestPrefixLocation: {},
              RepoPrefixLocation: {}
            }
          },
          S1c: {
            type: 'structure',
            members: {
              PackageVersionInputConfig: {
                type: 'structure',
                required: ['S3Location'],
                members: {
                  S3Location: {
                    type: 'structure',
                    required: ['BucketName', 'ObjectKey'],
                    members: {
                      BucketName: {},
                      ObjectKey: {},
                      Region: {}
                    }
                  }
                }
              }
            }
          },
          S1j: {
            type: 'structure',
            members: {
              PackageVersionOutputConfig: {
                type: 'structure',
                required: ['PackageName', 'PackageVersion'],
                members: {
                  MarkLatest: {
                    type: 'boolean'
                  },
                  PackageName: {},
                  PackageVersion: {}
                }
              }
            }
          },
          S21: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['DesiredState', 'DeviceReportedStatus', 'DeviceReportedTime', 'RuntimeContextName'],
              members: {
                DesiredState: {},
                DeviceReportedStatus: {},
                DeviceReportedTime: {
                  type: 'timestamp'
                },
                RuntimeContextName: {}
              }
            }
          },
          S2j: {
            type: 'structure',
            members: {
              ConnectionStatus: {},
              HwAddress: {},
              IpAddress: {}
            }
          },
          S2u: {
            type: 'structure',
            members: {
              ImageVersion: {},
              JobType: {},
              Status: {}
            }
          },
          S2y: {
            type: 'structure',
            members: {
              Ethernet0: {
                shape: 'S2z'
              },
              Ethernet1: {
                shape: 'S2z'
              },
              Ntp: {
                type: 'structure',
                required: ['NtpServers'],
                members: {
                  NtpServers: {
                    type: 'list',
                    member: {}
                  }
                }
              }
            }
          },
          S2z: {
            type: 'structure',
            required: ['ConnectionType'],
            members: {
              ConnectionType: {},
              StaticIpConnectionInfo: {
                type: 'structure',
                required: ['DefaultGateway', 'Dns', 'IpAddress', 'Mask'],
                members: {
                  DefaultGateway: {},
                  Dns: {
                    type: 'list',
                    member: {}
                  },
                  IpAddress: {},
                  Mask: {}
                }
              }
            }
          },
          S3z: {
            type: 'list',
            member: {}
          }
        }
      });
    }
  };
});
//# sourceMappingURL=780368960e096ed0d0a340847c34095d88e85f73.js.map