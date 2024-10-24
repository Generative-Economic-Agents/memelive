System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2014-05-30',
          endpointPrefix: 'cloudhsm',
          jsonVersion: '1.1',
          protocol: 'json',
          serviceAbbreviation: 'CloudHSM',
          serviceFullName: 'Amazon CloudHSM',
          serviceId: 'CloudHSM',
          signatureVersion: 'v4',
          targetPrefix: 'CloudHsmFrontendService',
          uid: 'cloudhsm-2014-05-30'
        },
        operations: {
          AddTagsToResource: {
            input: {
              type: 'structure',
              required: ['ResourceArn', 'TagList'],
              members: {
                ResourceArn: {},
                TagList: {
                  shape: 'S3'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Status'],
              members: {
                Status: {}
              }
            },
            deprecated: true,
            deprecatedMessage: 'This API is deprecated.'
          },
          CreateHapg: {
            input: {
              type: 'structure',
              required: ['Label'],
              members: {
                Label: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                HapgArn: {}
              }
            },
            deprecated: true,
            deprecatedMessage: 'This API is deprecated.'
          },
          CreateHsm: {
            input: {
              type: 'structure',
              required: ['SubnetId', 'SshKey', 'IamRoleArn', 'SubscriptionType'],
              members: {
                SubnetId: {},
                SshKey: {},
                EniIp: {},
                IamRoleArn: {},
                ExternalId: {},
                SubscriptionType: {},
                ClientToken: {},
                SyslogIp: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                HsmArn: {}
              }
            },
            deprecated: true,
            deprecatedMessage: 'This API is deprecated.'
          },
          CreateLunaClient: {
            input: {
              type: 'structure',
              required: ['Certificate'],
              members: {
                Label: {},
                Certificate: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ClientArn: {}
              }
            },
            deprecated: true,
            deprecatedMessage: 'This API is deprecated.'
          },
          DeleteHapg: {
            input: {
              type: 'structure',
              required: ['HapgArn'],
              members: {
                HapgArn: {}
              }
            },
            output: {
              type: 'structure',
              required: ['Status'],
              members: {
                Status: {}
              }
            },
            deprecated: true,
            deprecatedMessage: 'This API is deprecated.'
          },
          DeleteHsm: {
            input: {
              type: 'structure',
              required: ['HsmArn'],
              members: {
                HsmArn: {}
              }
            },
            output: {
              type: 'structure',
              required: ['Status'],
              members: {
                Status: {}
              }
            },
            deprecated: true,
            deprecatedMessage: 'This API is deprecated.'
          },
          DeleteLunaClient: {
            input: {
              type: 'structure',
              required: ['ClientArn'],
              members: {
                ClientArn: {}
              }
            },
            output: {
              type: 'structure',
              required: ['Status'],
              members: {
                Status: {}
              }
            },
            deprecated: true,
            deprecatedMessage: 'This API is deprecated.'
          },
          DescribeHapg: {
            input: {
              type: 'structure',
              required: ['HapgArn'],
              members: {
                HapgArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                HapgArn: {},
                HapgSerial: {},
                HsmsLastActionFailed: {
                  shape: 'Sz'
                },
                HsmsPendingDeletion: {
                  shape: 'Sz'
                },
                HsmsPendingRegistration: {
                  shape: 'Sz'
                },
                Label: {},
                LastModifiedTimestamp: {},
                PartitionSerialList: {
                  shape: 'S11'
                },
                State: {}
              }
            },
            deprecated: true,
            deprecatedMessage: 'This API is deprecated.'
          },
          DescribeHsm: {
            input: {
              type: 'structure',
              members: {
                HsmArn: {},
                HsmSerialNumber: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                HsmArn: {},
                Status: {},
                StatusDetails: {},
                AvailabilityZone: {},
                EniId: {},
                EniIp: {},
                SubscriptionType: {},
                SubscriptionStartDate: {},
                SubscriptionEndDate: {},
                VpcId: {},
                SubnetId: {},
                IamRoleArn: {},
                SerialNumber: {},
                VendorName: {},
                HsmType: {},
                SoftwareVersion: {},
                SshPublicKey: {},
                SshKeyLastUpdated: {},
                ServerCertUri: {},
                ServerCertLastUpdated: {},
                Partitions: {
                  type: 'list',
                  member: {}
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'This API is deprecated.'
          },
          DescribeLunaClient: {
            input: {
              type: 'structure',
              members: {
                ClientArn: {},
                CertificateFingerprint: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ClientArn: {},
                Certificate: {},
                CertificateFingerprint: {},
                LastModifiedTimestamp: {},
                Label: {}
              }
            },
            deprecated: true,
            deprecatedMessage: 'This API is deprecated.'
          },
          GetConfig: {
            input: {
              type: 'structure',
              required: ['ClientArn', 'ClientVersion', 'HapgList'],
              members: {
                ClientArn: {},
                ClientVersion: {},
                HapgList: {
                  shape: 'S1i'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ConfigType: {},
                ConfigFile: {},
                ConfigCred: {}
              }
            },
            deprecated: true,
            deprecatedMessage: 'This API is deprecated.'
          },
          ListAvailableZones: {
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {
                AZList: {
                  type: 'list',
                  member: {}
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'This API is deprecated.'
          },
          ListHapgs: {
            input: {
              type: 'structure',
              members: {
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              required: ['HapgList'],
              members: {
                HapgList: {
                  shape: 'S1i'
                },
                NextToken: {}
              }
            },
            deprecated: true,
            deprecatedMessage: 'This API is deprecated.'
          },
          ListHsms: {
            input: {
              type: 'structure',
              members: {
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                HsmList: {
                  shape: 'Sz'
                },
                NextToken: {}
              }
            },
            deprecated: true,
            deprecatedMessage: 'This API is deprecated.'
          },
          ListLunaClients: {
            input: {
              type: 'structure',
              members: {
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              required: ['ClientList'],
              members: {
                ClientList: {
                  type: 'list',
                  member: {}
                },
                NextToken: {}
              }
            },
            deprecated: true,
            deprecatedMessage: 'This API is deprecated.'
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
              required: ['TagList'],
              members: {
                TagList: {
                  shape: 'S3'
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'This API is deprecated.'
          },
          ModifyHapg: {
            input: {
              type: 'structure',
              required: ['HapgArn'],
              members: {
                HapgArn: {},
                Label: {},
                PartitionSerialList: {
                  shape: 'S11'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                HapgArn: {}
              }
            },
            deprecated: true,
            deprecatedMessage: 'This API is deprecated.'
          },
          ModifyHsm: {
            input: {
              type: 'structure',
              required: ['HsmArn'],
              members: {
                HsmArn: {},
                SubnetId: {},
                EniIp: {},
                IamRoleArn: {},
                ExternalId: {},
                SyslogIp: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                HsmArn: {}
              }
            },
            deprecated: true,
            deprecatedMessage: 'This API is deprecated.'
          },
          ModifyLunaClient: {
            input: {
              type: 'structure',
              required: ['ClientArn', 'Certificate'],
              members: {
                ClientArn: {},
                Certificate: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ClientArn: {}
              }
            },
            deprecated: true,
            deprecatedMessage: 'This API is deprecated.'
          },
          RemoveTagsFromResource: {
            input: {
              type: 'structure',
              required: ['ResourceArn', 'TagKeyList'],
              members: {
                ResourceArn: {},
                TagKeyList: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Status'],
              members: {
                Status: {}
              }
            },
            deprecated: true,
            deprecatedMessage: 'This API is deprecated.'
          }
        },
        shapes: {
          S3: {
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
          Sz: {
            type: 'list',
            member: {}
          },
          S11: {
            type: 'list',
            member: {}
          },
          S1i: {
            type: 'list',
            member: {}
          }
        }
      });
    }
  };
});
//# sourceMappingURL=d1e23971533747d64b2e362cdb5b87800979de2f.js.map