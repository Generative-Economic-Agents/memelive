System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2017-04-28',
          endpointPrefix: 'cloudhsmv2',
          jsonVersion: '1.1',
          protocol: 'json',
          serviceAbbreviation: 'CloudHSM V2',
          serviceFullName: 'AWS CloudHSM V2',
          serviceId: 'CloudHSM V2',
          signatureVersion: 'v4',
          signingName: 'cloudhsm',
          targetPrefix: 'BaldrApiService',
          uid: 'cloudhsmv2-2017-04-28'
        },
        operations: {
          CopyBackupToRegion: {
            input: {
              type: 'structure',
              required: ['DestinationRegion', 'BackupId'],
              members: {
                DestinationRegion: {},
                BackupId: {},
                TagList: {
                  shape: 'S4'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                DestinationBackup: {
                  type: 'structure',
                  members: {
                    CreateTimestamp: {
                      type: 'timestamp'
                    },
                    SourceRegion: {},
                    SourceBackup: {},
                    SourceCluster: {}
                  }
                }
              }
            }
          },
          CreateCluster: {
            input: {
              type: 'structure',
              required: ['HsmType', 'SubnetIds'],
              members: {
                BackupRetentionPolicy: {
                  shape: 'Sd'
                },
                HsmType: {},
                SourceBackupId: {},
                SubnetIds: {
                  type: 'list',
                  member: {}
                },
                TagList: {
                  shape: 'S4'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Cluster: {
                  shape: 'Sk'
                }
              }
            }
          },
          CreateHsm: {
            input: {
              type: 'structure',
              required: ['ClusterId', 'AvailabilityZone'],
              members: {
                ClusterId: {},
                AvailabilityZone: {},
                IpAddress: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Hsm: {
                  shape: 'Sn'
                }
              }
            }
          },
          DeleteBackup: {
            input: {
              type: 'structure',
              required: ['BackupId'],
              members: {
                BackupId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Backup: {
                  shape: 'S16'
                }
              }
            }
          },
          DeleteCluster: {
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
                Cluster: {
                  shape: 'Sk'
                }
              }
            }
          },
          DeleteHsm: {
            input: {
              type: 'structure',
              required: ['ClusterId'],
              members: {
                ClusterId: {},
                HsmId: {},
                EniId: {},
                EniIp: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                HsmId: {}
              }
            }
          },
          DescribeBackups: {
            input: {
              type: 'structure',
              members: {
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                Filters: {
                  shape: 'S1g'
                },
                SortAscending: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Backups: {
                  type: 'list',
                  member: {
                    shape: 'S16'
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeClusters: {
            input: {
              type: 'structure',
              members: {
                Filters: {
                  shape: 'S1g'
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
                Clusters: {
                  type: 'list',
                  member: {
                    shape: 'Sk'
                  }
                },
                NextToken: {}
              }
            }
          },
          InitializeCluster: {
            input: {
              type: 'structure',
              required: ['ClusterId', 'SignedCert', 'TrustAnchor'],
              members: {
                ClusterId: {},
                SignedCert: {},
                TrustAnchor: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                State: {},
                StateMessage: {}
              }
            }
          },
          ListTags: {
            input: {
              type: 'structure',
              required: ['ResourceId'],
              members: {
                ResourceId: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['TagList'],
              members: {
                TagList: {
                  shape: 'S4'
                },
                NextToken: {}
              }
            }
          },
          ModifyBackupAttributes: {
            input: {
              type: 'structure',
              required: ['BackupId', 'NeverExpires'],
              members: {
                BackupId: {},
                NeverExpires: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Backup: {
                  shape: 'S16'
                }
              }
            }
          },
          ModifyCluster: {
            input: {
              type: 'structure',
              required: ['BackupRetentionPolicy', 'ClusterId'],
              members: {
                BackupRetentionPolicy: {
                  shape: 'Sd'
                },
                ClusterId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Cluster: {
                  shape: 'Sk'
                }
              }
            }
          },
          RestoreBackup: {
            input: {
              type: 'structure',
              required: ['BackupId'],
              members: {
                BackupId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Backup: {
                  shape: 'S16'
                }
              }
            }
          },
          TagResource: {
            input: {
              type: 'structure',
              required: ['ResourceId', 'TagList'],
              members: {
                ResourceId: {},
                TagList: {
                  shape: 'S4'
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
              required: ['ResourceId', 'TagKeyList'],
              members: {
                ResourceId: {},
                TagKeyList: {
                  type: 'list',
                  member: {}
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
          S4: {
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
          Sd: {
            type: 'structure',
            members: {
              Type: {},
              Value: {}
            }
          },
          Sk: {
            type: 'structure',
            members: {
              BackupPolicy: {},
              BackupRetentionPolicy: {
                shape: 'Sd'
              },
              ClusterId: {},
              CreateTimestamp: {
                type: 'timestamp'
              },
              Hsms: {
                type: 'list',
                member: {
                  shape: 'Sn'
                }
              },
              HsmType: {},
              PreCoPassword: {},
              SecurityGroup: {},
              SourceBackupId: {},
              State: {},
              StateMessage: {},
              SubnetMapping: {
                type: 'map',
                key: {},
                value: {}
              },
              VpcId: {},
              Certificates: {
                type: 'structure',
                members: {
                  ClusterCsr: {},
                  HsmCertificate: {},
                  AwsHardwareCertificate: {},
                  ManufacturerHardwareCertificate: {},
                  ClusterCertificate: {}
                }
              },
              TagList: {
                shape: 'S4'
              }
            }
          },
          Sn: {
            type: 'structure',
            required: ['HsmId'],
            members: {
              AvailabilityZone: {},
              ClusterId: {},
              SubnetId: {},
              EniId: {},
              EniIp: {},
              HsmId: {},
              State: {},
              StateMessage: {}
            }
          },
          S16: {
            type: 'structure',
            required: ['BackupId'],
            members: {
              BackupId: {},
              BackupState: {},
              ClusterId: {},
              CreateTimestamp: {
                type: 'timestamp'
              },
              CopyTimestamp: {
                type: 'timestamp'
              },
              NeverExpires: {
                type: 'boolean'
              },
              SourceRegion: {},
              SourceBackup: {},
              SourceCluster: {},
              DeleteTimestamp: {
                type: 'timestamp'
              },
              TagList: {
                shape: 'S4'
              }
            }
          },
          S1g: {
            type: 'map',
            key: {},
            value: {
              type: 'list',
              member: {}
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=65c6064f8419b85604b59bd1790002c9e892f12f.js.map