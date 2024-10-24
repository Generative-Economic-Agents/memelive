System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2018-08-20',
          endpointPrefix: 's3-control',
          protocol: 'rest-xml',
          serviceFullName: 'AWS S3 Control',
          serviceId: 'S3 Control',
          signatureVersion: 's3v4',
          signingName: 's3',
          uid: 's3control-2018-08-20'
        },
        operations: {
          AssociateAccessGrantsIdentityCenter: {
            http: {
              requestUri: '/v20180820/accessgrantsinstance/identitycenter'
            },
            input: {
              locationName: 'AssociateAccessGrantsIdentityCenterRequest',
              xmlNamespace: {
                uri: 'http://awss3control.amazonaws.com/doc/2018-08-20/'
              },
              type: 'structure',
              required: ['AccountId', 'IdentityCenterArn'],
              members: {
                AccountId: {
                  contextParam: {
                    name: 'AccountId'
                  },
                  hostLabel: true,
                  location: 'header',
                  locationName: 'x-amz-account-id'
                },
                IdentityCenterArn: {}
              }
            },
            endpoint: {
              hostPrefix: '{AccountId}.'
            },
            httpChecksumRequired: true,
            staticContextParams: {
              RequiresAccountId: {
                value: true
              }
            }
          },
          CreateAccessGrant: {
            http: {
              requestUri: '/v20180820/accessgrantsinstance/grant'
            },
            input: {
              locationName: 'CreateAccessGrantRequest',
              xmlNamespace: {
                uri: 'http://awss3control.amazonaws.com/doc/2018-08-20/'
              },
              type: 'structure',
              required: ['AccountId', 'AccessGrantsLocationId', 'Grantee', 'Permission'],
              members: {
                AccountId: {
                  contextParam: {
                    name: 'AccountId'
                  },
                  hostLabel: true,
                  location: 'header',
                  locationName: 'x-amz-account-id'
                },
                AccessGrantsLocationId: {},
                AccessGrantsLocationConfiguration: {
                  shape: 'S6'
                },
                Grantee: {
                  shape: 'S8'
                },
                Permission: {},
                ApplicationArn: {},
                S3PrefixType: {},
                Tags: {
                  shape: 'Se'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                CreatedAt: {
                  type: 'timestamp'
                },
                AccessGrantId: {},
                AccessGrantArn: {},
                Grantee: {
                  shape: 'S8'
                },
                AccessGrantsLocationId: {},
                AccessGrantsLocationConfiguration: {
                  shape: 'S6'
                },
                Permission: {},
                ApplicationArn: {},
                GrantScope: {}
              }
            },
            endpoint: {
              hostPrefix: '{AccountId}.'
            },
            httpChecksumRequired: true,
            staticContextParams: {
              RequiresAccountId: {
                value: true
              }
            }
          },
          CreateAccessGrantsInstance: {
            http: {
              requestUri: '/v20180820/accessgrantsinstance'
            },
            input: {
              locationName: 'CreateAccessGrantsInstanceRequest',
              xmlNamespace: {
                uri: 'http://awss3control.amazonaws.com/doc/2018-08-20/'
              },
              type: 'structure',
              required: ['AccountId'],
              members: {
                AccountId: {
                  contextParam: {
                    name: 'AccountId'
                  },
                  hostLabel: true,
                  location: 'header',
                  locationName: 'x-amz-account-id'
                },
                IdentityCenterArn: {},
                Tags: {
                  shape: 'Se'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                CreatedAt: {
                  type: 'timestamp'
                },
                AccessGrantsInstanceId: {},
                AccessGrantsInstanceArn: {},
                IdentityCenterArn: {}
              }
            },
            endpoint: {
              hostPrefix: '{AccountId}.'
            },
            httpChecksumRequired: true,
            staticContextParams: {
              RequiresAccountId: {
                value: true
              }
            }
          },
          CreateAccessGrantsLocation: {
            http: {
              requestUri: '/v20180820/accessgrantsinstance/location'
            },
            input: {
              locationName: 'CreateAccessGrantsLocationRequest',
              xmlNamespace: {
                uri: 'http://awss3control.amazonaws.com/doc/2018-08-20/'
              },
              type: 'structure',
              required: ['AccountId', 'LocationScope', 'IAMRoleArn'],
              members: {
                AccountId: {
                  contextParam: {
                    name: 'AccountId'
                  },
                  hostLabel: true,
                  location: 'header',
                  locationName: 'x-amz-account-id'
                },
                LocationScope: {},
                IAMRoleArn: {},
                Tags: {
                  shape: 'Se'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                CreatedAt: {
                  type: 'timestamp'
                },
                AccessGrantsLocationId: {},
                AccessGrantsLocationArn: {},
                LocationScope: {},
                IAMRoleArn: {}
              }
            },
            endpoint: {
              hostPrefix: '{AccountId}.'
            },
            httpChecksumRequired: true,
            staticContextParams: {
              RequiresAccountId: {
                value: true
              }
            }
          },
          CreateAccessPoint: {
            http: {
              method: 'PUT',
              requestUri: '/v20180820/accesspoint/{name}'
            },
            input: {
              locationName: 'CreateAccessPointRequest',
              xmlNamespace: {
                uri: 'http://awss3control.amazonaws.com/doc/2018-08-20/'
              },
              type: 'structure',
              required: ['AccountId', 'Name', 'Bucket'],
              members: {
                AccountId: {
                  contextParam: {
                    name: 'AccountId'
                  },
                  hostLabel: true,
                  location: 'header',
                  locationName: 'x-amz-account-id'
                },
                Name: {
                  location: 'uri',
                  locationName: 'name'
                },
                Bucket: {
                  contextParam: {
                    name: 'Bucket'
                  }
                },
                VpcConfiguration: {
                  shape: 'Sx'
                },
                PublicAccessBlockConfiguration: {
                  shape: 'Sz'
                },
                BucketAccountId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                AccessPointArn: {},
                Alias: {}
              }
            },
            endpoint: {
              hostPrefix: '{AccountId}.'
            },
            staticContextParams: {
              RequiresAccountId: {
                value: true
              }
            }
          },
          CreateAccessPointForObjectLambda: {
            http: {
              method: 'PUT',
              requestUri: '/v20180820/accesspointforobjectlambda/{name}'
            },
            input: {
              locationName: 'CreateAccessPointForObjectLambdaRequest',
              xmlNamespace: {
                uri: 'http://awss3control.amazonaws.com/doc/2018-08-20/'
              },
              type: 'structure',
              required: ['AccountId', 'Name', 'Configuration'],
              members: {
                AccountId: {
                  contextParam: {
                    name: 'AccountId'
                  },
                  hostLabel: true,
                  location: 'header',
                  locationName: 'x-amz-account-id'
                },
                Name: {
                  location: 'uri',
                  locationName: 'name'
                },
                Configuration: {
                  shape: 'S16'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ObjectLambdaAccessPointArn: {},
                Alias: {
                  shape: 'S1l'
                }
              }
            },
            endpoint: {
              hostPrefix: '{AccountId}.'
            },
            staticContextParams: {
              RequiresAccountId: {
                value: true
              }
            }
          },
          CreateBucket: {
            http: {
              method: 'PUT',
              requestUri: '/v20180820/bucket/{name}'
            },
            input: {
              type: 'structure',
              required: ['Bucket'],
              members: {
                ACL: {
                  location: 'header',
                  locationName: 'x-amz-acl'
                },
                Bucket: {
                  contextParam: {
                    name: 'Bucket'
                  },
                  location: 'uri',
                  locationName: 'name'
                },
                CreateBucketConfiguration: {
                  locationName: 'CreateBucketConfiguration',
                  xmlNamespace: {
                    uri: 'http://awss3control.amazonaws.com/doc/2018-08-20/'
                  },
                  type: 'structure',
                  members: {
                    LocationConstraint: {}
                  }
                },
                GrantFullControl: {
                  location: 'header',
                  locationName: 'x-amz-grant-full-control'
                },
                GrantRead: {
                  location: 'header',
                  locationName: 'x-amz-grant-read'
                },
                GrantReadACP: {
                  location: 'header',
                  locationName: 'x-amz-grant-read-acp'
                },
                GrantWrite: {
                  location: 'header',
                  locationName: 'x-amz-grant-write'
                },
                GrantWriteACP: {
                  location: 'header',
                  locationName: 'x-amz-grant-write-acp'
                },
                ObjectLockEnabledForBucket: {
                  location: 'header',
                  locationName: 'x-amz-bucket-object-lock-enabled',
                  type: 'boolean'
                },
                OutpostId: {
                  contextParam: {
                    name: 'OutpostId'
                  },
                  location: 'header',
                  locationName: 'x-amz-outpost-id'
                }
              },
              payload: 'CreateBucketConfiguration'
            },
            output: {
              type: 'structure',
              members: {
                Location: {
                  location: 'header',
                  locationName: 'Location'
                },
                BucketArn: {}
              }
            },
            httpChecksumRequired: true
          },
          CreateJob: {
            http: {
              requestUri: '/v20180820/jobs'
            },
            input: {
              locationName: 'CreateJobRequest',
              xmlNamespace: {
                uri: 'http://awss3control.amazonaws.com/doc/2018-08-20/'
              },
              type: 'structure',
              required: ['AccountId', 'Operation', 'Report', 'ClientRequestToken', 'Priority', 'RoleArn'],
              members: {
                AccountId: {
                  contextParam: {
                    name: 'AccountId'
                  },
                  hostLabel: true,
                  location: 'header',
                  locationName: 'x-amz-account-id'
                },
                ConfirmationRequired: {
                  type: 'boolean'
                },
                Operation: {
                  shape: 'S24'
                },
                Report: {
                  shape: 'S3a'
                },
                ClientRequestToken: {
                  idempotencyToken: true
                },
                Manifest: {
                  shape: 'S3f'
                },
                Description: {},
                Priority: {
                  type: 'integer'
                },
                RoleArn: {},
                Tags: {
                  shape: 'S2n'
                },
                ManifestGenerator: {
                  shape: 'S3p'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                JobId: {}
              }
            },
            endpoint: {
              hostPrefix: '{AccountId}.'
            },
            staticContextParams: {
              RequiresAccountId: {
                value: true
              }
            }
          },
          CreateMultiRegionAccessPoint: {
            http: {
              requestUri: '/v20180820/async-requests/mrap/create'
            },
            input: {
              locationName: 'CreateMultiRegionAccessPointRequest',
              xmlNamespace: {
                uri: 'http://awss3control.amazonaws.com/doc/2018-08-20/'
              },
              type: 'structure',
              required: ['AccountId', 'ClientToken', 'Details'],
              members: {
                AccountId: {
                  contextParam: {
                    name: 'AccountId'
                  },
                  hostLabel: true,
                  location: 'header',
                  locationName: 'x-amz-account-id'
                },
                ClientToken: {
                  idempotencyToken: true
                },
                Details: {
                  shape: 'S4a'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                RequestTokenARN: {}
              }
            },
            endpoint: {
              hostPrefix: '{AccountId}.'
            },
            httpChecksumRequired: true,
            staticContextParams: {
              RequiresAccountId: {
                value: true
              }
            }
          },
          CreateStorageLensGroup: {
            http: {
              requestUri: '/v20180820/storagelensgroup',
              responseCode: 204
            },
            input: {
              locationName: 'CreateStorageLensGroupRequest',
              xmlNamespace: {
                uri: 'http://awss3control.amazonaws.com/doc/2018-08-20/'
              },
              type: 'structure',
              required: ['AccountId', 'StorageLensGroup'],
              members: {
                AccountId: {
                  contextParam: {
                    name: 'AccountId'
                  },
                  hostLabel: true,
                  location: 'header',
                  locationName: 'x-amz-account-id'
                },
                StorageLensGroup: {
                  shape: 'S4h'
                },
                Tags: {
                  shape: 'Se'
                }
              }
            },
            endpoint: {
              hostPrefix: '{AccountId}.'
            },
            staticContextParams: {
              RequiresAccountId: {
                value: true
              }
            }
          },
          DeleteAccessGrant: {
            http: {
              method: 'DELETE',
              requestUri: '/v20180820/accessgrantsinstance/grant/{id}'
            },
            input: {
              type: 'structure',
              required: ['AccountId', 'AccessGrantId'],
              members: {
                AccountId: {
                  contextParam: {
                    name: 'AccountId'
                  },
                  hostLabel: true,
                  location: 'header',
                  locationName: 'x-amz-account-id'
                },
                AccessGrantId: {
                  location: 'uri',
                  locationName: 'id'
                }
              }
            },
            endpoint: {
              hostPrefix: '{AccountId}.'
            },
            httpChecksumRequired: true,
            staticContextParams: {
              RequiresAccountId: {
                value: true
              }
            }
          },
          DeleteAccessGrantsInstance: {
            http: {
              method: 'DELETE',
              requestUri: '/v20180820/accessgrantsinstance'
            },
            input: {
              type: 'structure',
              required: ['AccountId'],
              members: {
                AccountId: {
                  contextParam: {
                    name: 'AccountId'
                  },
                  hostLabel: true,
                  location: 'header',
                  locationName: 'x-amz-account-id'
                }
              }
            },
            endpoint: {
              hostPrefix: '{AccountId}.'
            },
            httpChecksumRequired: true,
            staticContextParams: {
              RequiresAccountId: {
                value: true
              }
            }
          },
          DeleteAccessGrantsInstanceResourcePolicy: {
            http: {
              method: 'DELETE',
              requestUri: '/v20180820/accessgrantsinstance/resourcepolicy'
            },
            input: {
              type: 'structure',
              required: ['AccountId'],
              members: {
                AccountId: {
                  contextParam: {
                    name: 'AccountId'
                  },
                  hostLabel: true,
                  location: 'header',
                  locationName: 'x-amz-account-id'
                }
              }
            },
            endpoint: {
              hostPrefix: '{AccountId}.'
            },
            httpChecksumRequired: true,
            staticContextParams: {
              RequiresAccountId: {
                value: true
              }
            }
          },
          DeleteAccessGrantsLocation: {
            http: {
              method: 'DELETE',
              requestUri: '/v20180820/accessgrantsinstance/location/{id}'
            },
            input: {
              type: 'structure',
              required: ['AccountId', 'AccessGrantsLocationId'],
              members: {
                AccountId: {
                  contextParam: {
                    name: 'AccountId'
                  },
                  hostLabel: true,
                  location: 'header',
                  locationName: 'x-amz-account-id'
                },
                AccessGrantsLocationId: {
                  location: 'uri',
                  locationName: 'id'
                }
              }
            },
            endpoint: {
              hostPrefix: '{AccountId}.'
            },
            httpChecksumRequired: true,
            staticContextParams: {
              RequiresAccountId: {
                value: true
              }
            }
          },
          DeleteAccessPoint: {
            http: {
              method: 'DELETE',
              requestUri: '/v20180820/accesspoint/{name}'
            },
            input: {
              type: 'structure',
              required: ['AccountId', 'Name'],
              members: {
                AccountId: {
                  contextParam: {
                    name: 'AccountId'
                  },
                  hostLabel: true,
                  location: 'header',
                  locationName: 'x-amz-account-id'
                },
                Name: {
                  contextParam: {
                    name: 'AccessPointName'
                  },
                  location: 'uri',
                  locationName: 'name'
                }
              }
            },
            endpoint: {
              hostPrefix: '{AccountId}.'
            },
            staticContextParams: {
              RequiresAccountId: {
                value: true
              }
            }
          },
          DeleteAccessPointForObjectLambda: {
            http: {
              method: 'DELETE',
              requestUri: '/v20180820/accesspointforobjectlambda/{name}'
            },
            input: {
              type: 'structure',
              required: ['AccountId', 'Name'],
              members: {
                AccountId: {
                  contextParam: {
                    name: 'AccountId'
                  },
                  hostLabel: true,
                  location: 'header',
                  locationName: 'x-amz-account-id'
                },
                Name: {
                  location: 'uri',
                  locationName: 'name'
                }
              }
            },
            endpoint: {
              hostPrefix: '{AccountId}.'
            },
            staticContextParams: {
              RequiresAccountId: {
                value: true
              }
            }
          },
          DeleteAccessPointPolicy: {
            http: {
              method: 'DELETE',
              requestUri: '/v20180820/accesspoint/{name}/policy'
            },
            input: {
              type: 'structure',
              required: ['AccountId', 'Name'],
              members: {
                AccountId: {
                  contextParam: {
                    name: 'AccountId'
                  },
                  hostLabel: true,
                  location: 'header',
                  locationName: 'x-amz-account-id'
                },
                Name: {
                  contextParam: {
                    name: 'AccessPointName'
                  },
                  location: 'uri',
                  locationName: 'name'
                }
              }
            },
            endpoint: {
              hostPrefix: '{AccountId}.'
            },
            staticContextParams: {
              RequiresAccountId: {
                value: true
              }
            }
          },
          DeleteAccessPointPolicyForObjectLambda: {
            http: {
              method: 'DELETE',
              requestUri: '/v20180820/accesspointforobjectlambda/{name}/policy'
            },
            input: {
              type: 'structure',
              required: ['AccountId', 'Name'],
              members: {
                AccountId: {
                  contextParam: {
                    name: 'AccountId'
                  },
                  hostLabel: true,
                  location: 'header',
                  locationName: 'x-amz-account-id'
                },
                Name: {
                  location: 'uri',
                  locationName: 'name'
                }
              }
            },
            endpoint: {
              hostPrefix: '{AccountId}.'
            },
            staticContextParams: {
              RequiresAccountId: {
                value: true
              }
            }
          },
          DeleteBucket: {
            http: {
              method: 'DELETE',
              requestUri: '/v20180820/bucket/{name}'
            },
            input: {
              type: 'structure',
              required: ['AccountId', 'Bucket'],
              members: {
                AccountId: {
                  contextParam: {
                    name: 'AccountId'
                  },
                  hostLabel: true,
                  location: 'header',
                  locationName: 'x-amz-account-id'
                },
                Bucket: {
                  contextParam: {
                    name: 'Bucket'
                  },
                  location: 'uri',
                  locationName: 'name'
                }
              }
            },
            endpoint: {
              hostPrefix: '{AccountId}.'
            },
            staticContextParams: {
              RequiresAccountId: {
                value: true
              }
            }
          },
          DeleteBucketLifecycleConfiguration: {
            http: {
              method: 'DELETE',
              requestUri: '/v20180820/bucket/{name}/lifecycleconfiguration'
            },
            input: {
              type: 'structure',
              required: ['AccountId', 'Bucket'],
              members: {
                AccountId: {
                  contextParam: {
                    name: 'AccountId'
                  },
                  hostLabel: true,
                  location: 'header',
                  locationName: 'x-amz-account-id'
                },
                Bucket: {
                  contextParam: {
                    name: 'Bucket'
                  },
                  location: 'uri',
                  locationName: 'name'
                }
              }
            },
            endpoint: {
              hostPrefix: '{AccountId}.'
            },
            staticContextParams: {
              RequiresAccountId: {
                value: true
              }
            }
          },
          DeleteBucketPolicy: {
            http: {
              method: 'DELETE',
              requestUri: '/v20180820/bucket/{name}/policy'
            },
            input: {
              type: 'structure',
              required: ['AccountId', 'Bucket'],
              members: {
                AccountId: {
                  contextParam: {
                    name: 'AccountId'
                  },
                  hostLabel: true,
                  location: 'header',
                  locationName: 'x-amz-account-id'
                },
                Bucket: {
                  contextParam: {
                    name: 'Bucket'
                  },
                  location: 'uri',
                  locationName: 'name'
                }
              }
            },
            endpoint: {
              hostPrefix: '{AccountId}.'
            },
            staticContextParams: {
              RequiresAccountId: {
                value: true
              }
            }
          },
          DeleteBucketReplication: {
            http: {
              method: 'DELETE',
              requestUri: '/v20180820/bucket/{name}/replication'
            },
            input: {
              type: 'structure',
              required: ['AccountId', 'Bucket'],
              members: {
                AccountId: {
                  contextParam: {
                    name: 'AccountId'
                  },
                  hostLabel: true,
                  location: 'header',
                  locationName: 'x-amz-account-id'
                },
                Bucket: {
                  contextParam: {
                    name: 'Bucket'
                  },
                  location: 'uri',
                  locationName: 'name'
                }
              }
            },
            endpoint: {
              hostPrefix: '{AccountId}.'
            },
            staticContextParams: {
              RequiresAccountId: {
                value: true
              }
            }
          },
          DeleteBucketTagging: {
            http: {
              method: 'DELETE',
              requestUri: '/v20180820/bucket/{name}/tagging',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['AccountId', 'Bucket'],
              members: {
                AccountId: {
                  contextParam: {
                    name: 'AccountId'
                  },
                  hostLabel: true,
                  location: 'header',
                  locationName: 'x-amz-account-id'
                },
                Bucket: {
                  contextParam: {
                    name: 'Bucket'
                  },
                  location: 'uri',
                  locationName: 'name'
                }
              }
            },
            endpoint: {
              hostPrefix: '{AccountId}.'
            },
            staticContextParams: {
              RequiresAccountId: {
                value: true
              }
            }
          },
          DeleteJobTagging: {
            http: {
              method: 'DELETE',
              requestUri: '/v20180820/jobs/{id}/tagging'
            },
            input: {
              type: 'structure',
              required: ['AccountId', 'JobId'],
              members: {
                AccountId: {
                  contextParam: {
                    name: 'AccountId'
                  },
                  hostLabel: true,
                  location: 'header',
                  locationName: 'x-amz-account-id'
                },
                JobId: {
                  location: 'uri',
                  locationName: 'id'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            endpoint: {
              hostPrefix: '{AccountId}.'
            },
            staticContextParams: {
              RequiresAccountId: {
                value: true
              }
            }
          },
          DeleteMultiRegionAccessPoint: {
            http: {
              requestUri: '/v20180820/async-requests/mrap/delete'
            },
            input: {
              locationName: 'DeleteMultiRegionAccessPointRequest',
              xmlNamespace: {
                uri: 'http://awss3control.amazonaws.com/doc/2018-08-20/'
              },
              type: 'structure',
              required: ['AccountId', 'ClientToken', 'Details'],
              members: {
                AccountId: {
                  contextParam: {
                    name: 'AccountId'
                  },
                  hostLabel: true,
                  location: 'header',
                  locationName: 'x-amz-account-id'
                },
                ClientToken: {
                  idempotencyToken: true
                },
                Details: {
                  shape: 'S5c'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                RequestTokenARN: {}
              }
            },
            endpoint: {
              hostPrefix: '{AccountId}.'
            },
            httpChecksumRequired: true,
            staticContextParams: {
              RequiresAccountId: {
                value: true
              }
            }
          },
          DeletePublicAccessBlock: {
            http: {
              method: 'DELETE',
              requestUri: '/v20180820/configuration/publicAccessBlock'
            },
            input: {
              type: 'structure',
              required: ['AccountId'],
              members: {
                AccountId: {
                  contextParam: {
                    name: 'AccountId'
                  },
                  hostLabel: true,
                  location: 'header',
                  locationName: 'x-amz-account-id'
                }
              }
            },
            endpoint: {
              hostPrefix: '{AccountId}.'
            },
            staticContextParams: {
              RequiresAccountId: {
                value: true
              }
            }
          },
          DeleteStorageLensConfiguration: {
            http: {
              method: 'DELETE',
              requestUri: '/v20180820/storagelens/{storagelensid}'
            },
            input: {
              type: 'structure',
              required: ['ConfigId', 'AccountId'],
              members: {
                ConfigId: {
                  location: 'uri',
                  locationName: 'storagelensid'
                },
                AccountId: {
                  contextParam: {
                    name: 'AccountId'
                  },
                  hostLabel: true,
                  location: 'header',
                  locationName: 'x-amz-account-id'
                }
              }
            },
            endpoint: {
              hostPrefix: '{AccountId}.'
            },
            staticContextParams: {
              RequiresAccountId: {
                value: true
              }
            }
          },
          DeleteStorageLensConfigurationTagging: {
            http: {
              method: 'DELETE',
              requestUri: '/v20180820/storagelens/{storagelensid}/tagging'
            },
            input: {
              type: 'structure',
              required: ['ConfigId', 'AccountId'],
              members: {
                ConfigId: {
                  location: 'uri',
                  locationName: 'storagelensid'
                },
                AccountId: {
                  contextParam: {
                    name: 'AccountId'
                  },
                  hostLabel: true,
                  location: 'header',
                  locationName: 'x-amz-account-id'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            endpoint: {
              hostPrefix: '{AccountId}.'
            },
            staticContextParams: {
              RequiresAccountId: {
                value: true
              }
            }
          },
          DeleteStorageLensGroup: {
            http: {
              method: 'DELETE',
              requestUri: '/v20180820/storagelensgroup/{name}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['Name', 'AccountId'],
              members: {
                Name: {
                  location: 'uri',
                  locationName: 'name'
                },
                AccountId: {
                  contextParam: {
                    name: 'AccountId'
                  },
                  hostLabel: true,
                  location: 'header',
                  locationName: 'x-amz-account-id'
                }
              }
            },
            endpoint: {
              hostPrefix: '{AccountId}.'
            },
            staticContextParams: {
              RequiresAccountId: {
                value: true
              }
            }
          },
          DescribeJob: {
            http: {
              method: 'GET',
              requestUri: '/v20180820/jobs/{id}'
            },
            input: {
              type: 'structure',
              required: ['AccountId', 'JobId'],
              members: {
                AccountId: {
                  contextParam: {
                    name: 'AccountId'
                  },
                  hostLabel: true,
                  location: 'header',
                  locationName: 'x-amz-account-id'
                },
                JobId: {
                  location: 'uri',
                  locationName: 'id'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Job: {
                  type: 'structure',
                  members: {
                    JobId: {},
                    ConfirmationRequired: {
                      type: 'boolean'
                    },
                    Description: {},
                    JobArn: {},
                    Status: {},
                    Manifest: {
                      shape: 'S3f'
                    },
                    Operation: {
                      shape: 'S24'
                    },
                    Priority: {
                      type: 'integer'
                    },
                    ProgressSummary: {
                      shape: 'S5p'
                    },
                    StatusUpdateReason: {},
                    FailureReasons: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          FailureCode: {},
                          FailureReason: {}
                        }
                      }
                    },
                    Report: {
                      shape: 'S3a'
                    },
                    CreationTime: {
                      type: 'timestamp'
                    },
                    TerminationDate: {
                      type: 'timestamp'
                    },
                    RoleArn: {},
                    SuspendedDate: {
                      type: 'timestamp'
                    },
                    SuspendedCause: {},
                    ManifestGenerator: {
                      shape: 'S3p'
                    },
                    GeneratedManifestDescriptor: {
                      type: 'structure',
                      members: {
                        Format: {},
                        Location: {
                          shape: 'S3k'
                        }
                      }
                    }
                  }
                }
              }
            },
            endpoint: {
              hostPrefix: '{AccountId}.'
            },
            staticContextParams: {
              RequiresAccountId: {
                value: true
              }
            }
          },
          DescribeMultiRegionAccessPointOperation: {
            http: {
              method: 'GET',
              requestUri: '/v20180820/async-requests/mrap/{request_token+}'
            },
            input: {
              type: 'structure',
              required: ['AccountId', 'RequestTokenARN'],
              members: {
                AccountId: {
                  contextParam: {
                    name: 'AccountId'
                  },
                  hostLabel: true,
                  location: 'header',
                  locationName: 'x-amz-account-id'
                },
                RequestTokenARN: {
                  location: 'uri',
                  locationName: 'request_token'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AsyncOperation: {
                  type: 'structure',
                  members: {
                    CreationTime: {
                      type: 'timestamp'
                    },
                    Operation: {},
                    RequestTokenARN: {},
                    RequestParameters: {
                      type: 'structure',
                      members: {
                        CreateMultiRegionAccessPointRequest: {
                          shape: 'S4a'
                        },
                        DeleteMultiRegionAccessPointRequest: {
                          shape: 'S5c'
                        },
                        PutMultiRegionAccessPointPolicyRequest: {
                          shape: 'S6b'
                        }
                      }
                    },
                    RequestStatus: {},
                    ResponseDetails: {
                      type: 'structure',
                      members: {
                        MultiRegionAccessPointDetails: {
                          type: 'structure',
                          members: {
                            Regions: {
                              type: 'list',
                              member: {
                                locationName: 'Region',
                                type: 'structure',
                                members: {
                                  Name: {},
                                  RequestStatus: {}
                                }
                              }
                            }
                          }
                        },
                        ErrorDetails: {
                          type: 'structure',
                          members: {
                            Code: {},
                            Message: {},
                            Resource: {},
                            RequestId: {}
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            endpoint: {
              hostPrefix: '{AccountId}.'
            },
            httpChecksumRequired: true,
            staticContextParams: {
              RequiresAccountId: {
                value: true
              }
            }
          },
          DissociateAccessGrantsIdentityCenter: {
            http: {
              method: 'DELETE',
              requestUri: '/v20180820/accessgrantsinstance/identitycenter'
            },
            input: {
              type: 'structure',
              required: ['AccountId'],
              members: {
                AccountId: {
                  contextParam: {
                    name: 'AccountId'
                  },
                  hostLabel: true,
                  location: 'header',
                  locationName: 'x-amz-account-id'
                }
              }
            },
            endpoint: {
              hostPrefix: '{AccountId}.'
            },
            httpChecksumRequired: true,
            staticContextParams: {
              RequiresAccountId: {
                value: true
              }
            }
          },
          GetAccessGrant: {
            http: {
              method: 'GET',
              requestUri: '/v20180820/accessgrantsinstance/grant/{id}'
            },
            input: {
              type: 'structure',
              required: ['AccountId', 'AccessGrantId'],
              members: {
                AccountId: {
                  contextParam: {
                    name: 'AccountId'
                  },
                  hostLabel: true,
                  location: 'header',
                  locationName: 'x-amz-account-id'
                },
                AccessGrantId: {
                  location: 'uri',
                  locationName: 'id'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                CreatedAt: {
                  type: 'timestamp'
                },
                AccessGrantId: {},
                AccessGrantArn: {},
                Grantee: {
                  shape: 'S8'
                },
                Permission: {},
                AccessGrantsLocationId: {},
                AccessGrantsLocationConfiguration: {
                  shape: 'S6'
                },
                GrantScope: {},
                ApplicationArn: {}
              }
            },
            endpoint: {
              hostPrefix: '{AccountId}.'
            },
            httpChecksumRequired: true,
            staticContextParams: {
              RequiresAccountId: {
                value: true
              }
            }
          },
          GetAccessGrantsInstance: {
            http: {
              method: 'GET',
              requestUri: '/v20180820/accessgrantsinstance'
            },
            input: {
              type: 'structure',
              required: ['AccountId'],
              members: {
                AccountId: {
                  contextParam: {
                    name: 'AccountId'
                  },
                  hostLabel: true,
                  location: 'header',
                  locationName: 'x-amz-account-id'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AccessGrantsInstanceArn: {},
                AccessGrantsInstanceId: {},
                IdentityCenterArn: {},
                CreatedAt: {
                  type: 'timestamp'
                }
              }
            },
            endpoint: {
              hostPrefix: '{AccountId}.'
            },
            httpChecksumRequired: true,
            staticContextParams: {
              RequiresAccountId: {
                value: true
              }
            }
          },
          GetAccessGrantsInstanceForPrefix: {
            http: {
              method: 'GET',
              requestUri: '/v20180820/accessgrantsinstance/prefix'
            },
            input: {
              type: 'structure',
              required: ['AccountId', 'S3Prefix'],
              members: {
                AccountId: {
                  contextParam: {
                    name: 'AccountId'
                  },
                  hostLabel: true,
                  location: 'header',
                  locationName: 'x-amz-account-id'
                },
                S3Prefix: {
                  location: 'querystring',
                  locationName: 's3prefix'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AccessGrantsInstanceArn: {},
                AccessGrantsInstanceId: {}
              }
            },
            endpoint: {
              hostPrefix: '{AccountId}.'
            },
            httpChecksumRequired: true,
            staticContextParams: {
              RequiresAccountId: {
                value: true
              }
            }
          },
          GetAccessGrantsInstanceResourcePolicy: {
            http: {
              method: 'GET',
              requestUri: '/v20180820/accessgrantsinstance/resourcepolicy'
            },
            input: {
              type: 'structure',
              required: ['AccountId'],
              members: {
                AccountId: {
                  contextParam: {
                    name: 'AccountId'
                  },
                  hostLabel: true,
                  location: 'header',
                  locationName: 'x-amz-account-id'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Policy: {},
                Organization: {},
                CreatedAt: {
                  type: 'timestamp'
                }
              }
            },
            endpoint: {
              hostPrefix: '{AccountId}.'
            },
            httpChecksumRequired: true,
            staticContextParams: {
              RequiresAccountId: {
                value: true
              }
            }
          },
          GetAccessGrantsLocation: {
            http: {
              method: 'GET',
              requestUri: '/v20180820/accessgrantsinstance/location/{id}'
            },
            input: {
              type: 'structure',
              required: ['AccountId', 'AccessGrantsLocationId'],
              members: {
                AccountId: {
                  contextParam: {
                    name: 'AccountId'
                  },
                  hostLabel: true,
                  location: 'header',
                  locationName: 'x-amz-account-id'
                },
                AccessGrantsLocationId: {
                  location: 'uri',
                  locationName: 'id'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                CreatedAt: {
                  type: 'timestamp'
                },
                AccessGrantsLocationId: {},
                AccessGrantsLocationArn: {},
                LocationScope: {},
                IAMRoleArn: {}
              }
            },
            endpoint: {
              hostPrefix: '{AccountId}.'
            },
            httpChecksumRequired: true,
            staticContextParams: {
              RequiresAccountId: {
                value: true
              }
            }
          },
          GetAccessPoint: {
            http: {
              method: 'GET',
              requestUri: '/v20180820/accesspoint/{name}'
            },
            input: {
              type: 'structure',
              required: ['AccountId', 'Name'],
              members: {
                AccountId: {
                  contextParam: {
                    name: 'AccountId'
                  },
                  hostLabel: true,
                  location: 'header',
                  locationName: 'x-amz-account-id'
                },
                Name: {
                  contextParam: {
                    name: 'AccessPointName'
                  },
                  location: 'uri',
                  locationName: 'name'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Name: {},
                Bucket: {},
                NetworkOrigin: {},
                VpcConfiguration: {
                  shape: 'Sx'
                },
                PublicAccessBlockConfiguration: {
                  shape: 'Sz'
                },
                CreationDate: {
                  type: 'timestamp'
                },
                Alias: {},
                AccessPointArn: {},
                Endpoints: {
                  type: 'map',
                  key: {},
                  value: {}
                },
                BucketAccountId: {}
              }
            },
            endpoint: {
              hostPrefix: '{AccountId}.'
            },
            staticContextParams: {
              RequiresAccountId: {
                value: true
              }
            }
          },
          GetAccessPointConfigurationForObjectLambda: {
            http: {
              method: 'GET',
              requestUri: '/v20180820/accesspointforobjectlambda/{name}/configuration'
            },
            input: {
              type: 'structure',
              required: ['AccountId', 'Name'],
              members: {
                AccountId: {
                  contextParam: {
                    name: 'AccountId'
                  },
                  hostLabel: true,
                  location: 'header',
                  locationName: 'x-amz-account-id'
                },
                Name: {
                  location: 'uri',
                  locationName: 'name'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Configuration: {
                  shape: 'S16'
                }
              }
            },
            endpoint: {
              hostPrefix: '{AccountId}.'
            },
            staticContextParams: {
              RequiresAccountId: {
                value: true
              }
            }
          },
          GetAccessPointForObjectLambda: {
            http: {
              method: 'GET',
              requestUri: '/v20180820/accesspointforobjectlambda/{name}'
            },
            input: {
              type: 'structure',
              required: ['AccountId', 'Name'],
              members: {
                AccountId: {
                  contextParam: {
                    name: 'AccountId'
                  },
                  hostLabel: true,
                  location: 'header',
                  locationName: 'x-amz-account-id'
                },
                Name: {
                  location: 'uri',
                  locationName: 'name'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Name: {},
                PublicAccessBlockConfiguration: {
                  shape: 'Sz'
                },
                CreationDate: {
                  type: 'timestamp'
                },
                Alias: {
                  shape: 'S1l'
                }
              }
            },
            endpoint: {
              hostPrefix: '{AccountId}.'
            },
            staticContextParams: {
              RequiresAccountId: {
                value: true
              }
            }
          },
          GetAccessPointPolicy: {
            http: {
              method: 'GET',
              requestUri: '/v20180820/accesspoint/{name}/policy'
            },
            input: {
              type: 'structure',
              required: ['AccountId', 'Name'],
              members: {
                AccountId: {
                  contextParam: {
                    name: 'AccountId'
                  },
                  hostLabel: true,
                  location: 'header',
                  locationName: 'x-amz-account-id'
                },
                Name: {
                  contextParam: {
                    name: 'AccessPointName'
                  },
                  location: 'uri',
                  locationName: 'name'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Policy: {}
              }
            },
            endpoint: {
              hostPrefix: '{AccountId}.'
            },
            staticContextParams: {
              RequiresAccountId: {
                value: true
              }
            }
          },
          GetAccessPointPolicyForObjectLambda: {
            http: {
              method: 'GET',
              requestUri: '/v20180820/accesspointforobjectlambda/{name}/policy'
            },
            input: {
              type: 'structure',
              required: ['AccountId', 'Name'],
              members: {
                AccountId: {
                  contextParam: {
                    name: 'AccountId'
                  },
                  hostLabel: true,
                  location: 'header',
                  locationName: 'x-amz-account-id'
                },
                Name: {
                  location: 'uri',
                  locationName: 'name'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Policy: {}
              }
            },
            endpoint: {
              hostPrefix: '{AccountId}.'
            },
            staticContextParams: {
              RequiresAccountId: {
                value: true
              }
            }
          },
          GetAccessPointPolicyStatus: {
            http: {
              method: 'GET',
              requestUri: '/v20180820/accesspoint/{name}/policyStatus'
            },
            input: {
              type: 'structure',
              required: ['AccountId', 'Name'],
              members: {
                AccountId: {
                  contextParam: {
                    name: 'AccountId'
                  },
                  hostLabel: true,
                  location: 'header',
                  locationName: 'x-amz-account-id'
                },
                Name: {
                  contextParam: {
                    name: 'AccessPointName'
                  },
                  location: 'uri',
                  locationName: 'name'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                PolicyStatus: {
                  shape: 'S7d'
                }
              }
            },
            endpoint: {
              hostPrefix: '{AccountId}.'
            },
            staticContextParams: {
              RequiresAccountId: {
                value: true
              }
            }
          },
          GetAccessPointPolicyStatusForObjectLambda: {
            http: {
              method: 'GET',
              requestUri: '/v20180820/accesspointforobjectlambda/{name}/policyStatus'
            },
            input: {
              type: 'structure',
              required: ['AccountId', 'Name'],
              members: {
                AccountId: {
                  contextParam: {
                    name: 'AccountId'
                  },
                  hostLabel: true,
                  location: 'header',
                  locationName: 'x-amz-account-id'
                },
                Name: {
                  location: 'uri',
                  locationName: 'name'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                PolicyStatus: {
                  shape: 'S7d'
                }
              }
            },
            endpoint: {
              hostPrefix: '{AccountId}.'
            },
            staticContextParams: {
              RequiresAccountId: {
                value: true
              }
            }
          },
          GetBucket: {
            http: {
              method: 'GET',
              requestUri: '/v20180820/bucket/{name}'
            },
            input: {
              type: 'structure',
              required: ['AccountId', 'Bucket'],
              members: {
                AccountId: {
                  contextParam: {
                    name: 'AccountId'
                  },
                  hostLabel: true,
                  location: 'header',
                  locationName: 'x-amz-account-id'
                },
                Bucket: {
                  contextParam: {
                    name: 'Bucket'
                  },
                  location: 'uri',
                  locationName: 'name'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Bucket: {},
                PublicAccessBlockEnabled: {
                  type: 'boolean'
                },
                CreationDate: {
                  type: 'timestamp'
                }
              }
            },
            endpoint: {
              hostPrefix: '{AccountId}.'
            },
            staticContextParams: {
              RequiresAccountId: {
                value: true
              }
            }
          },
          GetBucketLifecycleConfiguration: {
            http: {
              method: 'GET',
              requestUri: '/v20180820/bucket/{name}/lifecycleconfiguration'
            },
            input: {
              type: 'structure',
              required: ['AccountId', 'Bucket'],
              members: {
                AccountId: {
                  contextParam: {
                    name: 'AccountId'
                  },
                  hostLabel: true,
                  location: 'header',
                  locationName: 'x-amz-account-id'
                },
                Bucket: {
                  contextParam: {
                    name: 'Bucket'
                  },
                  location: 'uri',
                  locationName: 'name'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Rules: {
                  shape: 'S7m'
                }
              }
            },
            endpoint: {
              hostPrefix: '{AccountId}.'
            },
            staticContextParams: {
              RequiresAccountId: {
                value: true
              }
            }
          },
          GetBucketPolicy: {
            http: {
              method: 'GET',
              requestUri: '/v20180820/bucket/{name}/policy'
            },
            input: {
              type: 'structure',
              required: ['AccountId', 'Bucket'],
              members: {
                AccountId: {
                  contextParam: {
                    name: 'AccountId'
                  },
                  hostLabel: true,
                  location: 'header',
                  locationName: 'x-amz-account-id'
                },
                Bucket: {
                  contextParam: {
                    name: 'Bucket'
                  },
                  location: 'uri',
                  locationName: 'name'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Policy: {}
              }
            },
            endpoint: {
              hostPrefix: '{AccountId}.'
            },
            staticContextParams: {
              RequiresAccountId: {
                value: true
              }
            }
          },
          GetBucketReplication: {
            http: {
              method: 'GET',
              requestUri: '/v20180820/bucket/{name}/replication'
            },
            input: {
              type: 'structure',
              required: ['AccountId', 'Bucket'],
              members: {
                AccountId: {
                  contextParam: {
                    name: 'AccountId'
                  },
                  hostLabel: true,
                  location: 'header',
                  locationName: 'x-amz-account-id'
                },
                Bucket: {
                  contextParam: {
                    name: 'Bucket'
                  },
                  location: 'uri',
                  locationName: 'name'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ReplicationConfiguration: {
                  shape: 'S89'
                }
              }
            },
            endpoint: {
              hostPrefix: '{AccountId}.'
            },
            staticContextParams: {
              RequiresAccountId: {
                value: true
              }
            }
          },
          GetBucketTagging: {
            http: {
              method: 'GET',
              requestUri: '/v20180820/bucket/{name}/tagging'
            },
            input: {
              type: 'structure',
              required: ['AccountId', 'Bucket'],
              members: {
                AccountId: {
                  contextParam: {
                    name: 'AccountId'
                  },
                  hostLabel: true,
                  location: 'header',
                  locationName: 'x-amz-account-id'
                },
                Bucket: {
                  contextParam: {
                    name: 'Bucket'
                  },
                  location: 'uri',
                  locationName: 'name'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['TagSet'],
              members: {
                TagSet: {
                  shape: 'S2n'
                }
              }
            },
            endpoint: {
              hostPrefix: '{AccountId}.'
            },
            staticContextParams: {
              RequiresAccountId: {
                value: true
              }
            }
          },
          GetBucketVersioning: {
            http: {
              method: 'GET',
              requestUri: '/v20180820/bucket/{name}/versioning'
            },
            input: {
              type: 'structure',
              required: ['AccountId', 'Bucket'],
              members: {
                AccountId: {
                  contextParam: {
                    name: 'AccountId'
                  },
                  hostLabel: true,
                  location: 'header',
                  locationName: 'x-amz-account-id'
                },
                Bucket: {
                  contextParam: {
                    name: 'Bucket'
                  },
                  location: 'uri',
                  locationName: 'name'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Status: {},
                MFADelete: {
                  locationName: 'MfaDelete'
                }
              }
            },
            endpoint: {
              hostPrefix: '{AccountId}.'
            },
            staticContextParams: {
              RequiresAccountId: {
                value: true
              }
            }
          },
          GetDataAccess: {
            http: {
              method: 'GET',
              requestUri: '/v20180820/accessgrantsinstance/dataaccess'
            },
            input: {
              type: 'structure',
              required: ['AccountId', 'Target', 'Permission'],
              members: {
                AccountId: {
                  contextParam: {
                    name: 'AccountId'
                  },
                  hostLabel: true,
                  location: 'header',
                  locationName: 'x-amz-account-id'
                },
                Target: {
                  location: 'querystring',
                  locationName: 'target'
                },
                Permission: {
                  location: 'querystring',
                  locationName: 'permission'
                },
                DurationSeconds: {
                  location: 'querystring',
                  locationName: 'durationSeconds',
                  type: 'integer'
                },
                Privilege: {
                  location: 'querystring',
                  locationName: 'privilege'
                },
                TargetType: {
                  location: 'querystring',
                  locationName: 'targetType'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Credentials: {
                  type: 'structure',
                  members: {
                    AccessKeyId: {
                      type: 'string',
                      sensitive: true
                    },
                    SecretAccessKey: {
                      type: 'string',
                      sensitive: true
                    },
                    SessionToken: {
                      type: 'string',
                      sensitive: true
                    },
                    Expiration: {
                      type: 'timestamp'
                    }
                  },
                  sensitive: true
                },
                MatchedGrantTarget: {}
              }
            },
            endpoint: {
              hostPrefix: '{AccountId}.'
            },
            httpChecksumRequired: true,
            staticContextParams: {
              RequiresAccountId: {
                value: true
              }
            }
          },
          GetJobTagging: {
            http: {
              method: 'GET',
              requestUri: '/v20180820/jobs/{id}/tagging'
            },
            input: {
              type: 'structure',
              required: ['AccountId', 'JobId'],
              members: {
                AccountId: {
                  contextParam: {
                    name: 'AccountId'
                  },
                  hostLabel: true,
                  location: 'header',
                  locationName: 'x-amz-account-id'
                },
                JobId: {
                  location: 'uri',
                  locationName: 'id'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Tags: {
                  shape: 'S2n'
                }
              }
            },
            endpoint: {
              hostPrefix: '{AccountId}.'
            },
            staticContextParams: {
              RequiresAccountId: {
                value: true
              }
            }
          },
          GetMultiRegionAccessPoint: {
            http: {
              method: 'GET',
              requestUri: '/v20180820/mrap/instances/{name+}'
            },
            input: {
              type: 'structure',
              required: ['AccountId', 'Name'],
              members: {
                AccountId: {
                  contextParam: {
                    name: 'AccountId'
                  },
                  hostLabel: true,
                  location: 'header',
                  locationName: 'x-amz-account-id'
                },
                Name: {
                  location: 'uri',
                  locationName: 'name'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AccessPoint: {
                  shape: 'S9m'
                }
              }
            },
            endpoint: {
              hostPrefix: '{AccountId}.'
            },
            httpChecksumRequired: true,
            staticContextParams: {
              RequiresAccountId: {
                value: true
              }
            }
          },
          GetMultiRegionAccessPointPolicy: {
            http: {
              method: 'GET',
              requestUri: '/v20180820/mrap/instances/{name+}/policy'
            },
            input: {
              type: 'structure',
              required: ['AccountId', 'Name'],
              members: {
                AccountId: {
                  contextParam: {
                    name: 'AccountId'
                  },
                  hostLabel: true,
                  location: 'header',
                  locationName: 'x-amz-account-id'
                },
                Name: {
                  location: 'uri',
                  locationName: 'name'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Policy: {
                  type: 'structure',
                  members: {
                    Established: {
                      type: 'structure',
                      members: {
                        Policy: {}
                      }
                    },
                    Proposed: {
                      type: 'structure',
                      members: {
                        Policy: {}
                      }
                    }
                  }
                }
              }
            },
            endpoint: {
              hostPrefix: '{AccountId}.'
            },
            httpChecksumRequired: true,
            staticContextParams: {
              RequiresAccountId: {
                value: true
              }
            }
          },
          GetMultiRegionAccessPointPolicyStatus: {
            http: {
              method: 'GET',
              requestUri: '/v20180820/mrap/instances/{name+}/policystatus'
            },
            input: {
              type: 'structure',
              required: ['AccountId', 'Name'],
              members: {
                AccountId: {
                  contextParam: {
                    name: 'AccountId'
                  },
                  hostLabel: true,
                  location: 'header',
                  locationName: 'x-amz-account-id'
                },
                Name: {
                  location: 'uri',
                  locationName: 'name'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Established: {
                  shape: 'S7d'
                }
              }
            },
            endpoint: {
              hostPrefix: '{AccountId}.'
            },
            httpChecksumRequired: true,
            staticContextParams: {
              RequiresAccountId: {
                value: true
              }
            }
          },
          GetMultiRegionAccessPointRoutes: {
            http: {
              method: 'GET',
              requestUri: '/v20180820/mrap/instances/{mrap+}/routes'
            },
            input: {
              type: 'structure',
              required: ['AccountId', 'Mrap'],
              members: {
                AccountId: {
                  contextParam: {
                    name: 'AccountId'
                  },
                  hostLabel: true,
                  location: 'header',
                  locationName: 'x-amz-account-id'
                },
                Mrap: {
                  location: 'uri',
                  locationName: 'mrap'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Mrap: {},
                Routes: {
                  shape: 'Sa1'
                }
              }
            },
            endpoint: {
              hostPrefix: '{AccountId}.'
            },
            httpChecksumRequired: true,
            staticContextParams: {
              RequiresAccountId: {
                value: true
              }
            }
          },
          GetPublicAccessBlock: {
            http: {
              method: 'GET',
              requestUri: '/v20180820/configuration/publicAccessBlock'
            },
            input: {
              type: 'structure',
              required: ['AccountId'],
              members: {
                AccountId: {
                  contextParam: {
                    name: 'AccountId'
                  },
                  hostLabel: true,
                  location: 'header',
                  locationName: 'x-amz-account-id'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                PublicAccessBlockConfiguration: {
                  shape: 'Sz'
                }
              },
              payload: 'PublicAccessBlockConfiguration'
            },
            endpoint: {
              hostPrefix: '{AccountId}.'
            },
            staticContextParams: {
              RequiresAccountId: {
                value: true
              }
            }
          },
          GetStorageLensConfiguration: {
            http: {
              method: 'GET',
              requestUri: '/v20180820/storagelens/{storagelensid}'
            },
            input: {
              type: 'structure',
              required: ['ConfigId', 'AccountId'],
              members: {
                ConfigId: {
                  location: 'uri',
                  locationName: 'storagelensid'
                },
                AccountId: {
                  contextParam: {
                    name: 'AccountId'
                  },
                  hostLabel: true,
                  location: 'header',
                  locationName: 'x-amz-account-id'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                StorageLensConfiguration: {
                  shape: 'Sa8'
                }
              },
              payload: 'StorageLensConfiguration'
            },
            endpoint: {
              hostPrefix: '{AccountId}.'
            },
            staticContextParams: {
              RequiresAccountId: {
                value: true
              }
            }
          },
          GetStorageLensConfigurationTagging: {
            http: {
              method: 'GET',
              requestUri: '/v20180820/storagelens/{storagelensid}/tagging'
            },
            input: {
              type: 'structure',
              required: ['ConfigId', 'AccountId'],
              members: {
                ConfigId: {
                  location: 'uri',
                  locationName: 'storagelensid'
                },
                AccountId: {
                  contextParam: {
                    name: 'AccountId'
                  },
                  hostLabel: true,
                  location: 'header',
                  locationName: 'x-amz-account-id'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Tags: {
                  shape: 'Sb9'
                }
              }
            },
            endpoint: {
              hostPrefix: '{AccountId}.'
            },
            staticContextParams: {
              RequiresAccountId: {
                value: true
              }
            }
          },
          GetStorageLensGroup: {
            http: {
              method: 'GET',
              requestUri: '/v20180820/storagelensgroup/{name}'
            },
            input: {
              type: 'structure',
              required: ['Name', 'AccountId'],
              members: {
                Name: {
                  location: 'uri',
                  locationName: 'name'
                },
                AccountId: {
                  contextParam: {
                    name: 'AccountId'
                  },
                  hostLabel: true,
                  location: 'header',
                  locationName: 'x-amz-account-id'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                StorageLensGroup: {
                  shape: 'S4h'
                }
              },
              payload: 'StorageLensGroup'
            },
            endpoint: {
              hostPrefix: '{AccountId}.'
            },
            staticContextParams: {
              RequiresAccountId: {
                value: true
              }
            }
          },
          ListAccessGrants: {
            http: {
              method: 'GET',
              requestUri: '/v20180820/accessgrantsinstance/grants'
            },
            input: {
              type: 'structure',
              required: ['AccountId'],
              members: {
                AccountId: {
                  contextParam: {
                    name: 'AccountId'
                  },
                  hostLabel: true,
                  location: 'header',
                  locationName: 'x-amz-account-id'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                GranteeType: {
                  location: 'querystring',
                  locationName: 'granteetype'
                },
                GranteeIdentifier: {
                  location: 'querystring',
                  locationName: 'granteeidentifier'
                },
                Permission: {
                  location: 'querystring',
                  locationName: 'permission'
                },
                GrantScope: {
                  location: 'querystring',
                  locationName: 'grantscope'
                },
                ApplicationArn: {
                  location: 'querystring',
                  locationName: 'application_arn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                AccessGrantsList: {
                  type: 'list',
                  member: {
                    locationName: 'AccessGrant',
                    type: 'structure',
                    members: {
                      CreatedAt: {
                        type: 'timestamp'
                      },
                      AccessGrantId: {},
                      AccessGrantArn: {},
                      Grantee: {
                        shape: 'S8'
                      },
                      Permission: {},
                      AccessGrantsLocationId: {},
                      AccessGrantsLocationConfiguration: {
                        shape: 'S6'
                      },
                      GrantScope: {},
                      ApplicationArn: {}
                    }
                  }
                }
              }
            },
            endpoint: {
              hostPrefix: '{AccountId}.'
            },
            httpChecksumRequired: true,
            staticContextParams: {
              RequiresAccountId: {
                value: true
              }
            }
          },
          ListAccessGrantsInstances: {
            http: {
              method: 'GET',
              requestUri: '/v20180820/accessgrantsinstances'
            },
            input: {
              type: 'structure',
              required: ['AccountId'],
              members: {
                AccountId: {
                  contextParam: {
                    name: 'AccountId'
                  },
                  hostLabel: true,
                  location: 'header',
                  locationName: 'x-amz-account-id'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                AccessGrantsInstancesList: {
                  type: 'list',
                  member: {
                    locationName: 'AccessGrantsInstance',
                    type: 'structure',
                    members: {
                      AccessGrantsInstanceId: {},
                      AccessGrantsInstanceArn: {},
                      CreatedAt: {
                        type: 'timestamp'
                      },
                      IdentityCenterArn: {}
                    }
                  }
                }
              }
            },
            endpoint: {
              hostPrefix: '{AccountId}.'
            },
            httpChecksumRequired: true,
            staticContextParams: {
              RequiresAccountId: {
                value: true
              }
            }
          },
          ListAccessGrantsLocations: {
            http: {
              method: 'GET',
              requestUri: '/v20180820/accessgrantsinstance/locations'
            },
            input: {
              type: 'structure',
              required: ['AccountId'],
              members: {
                AccountId: {
                  contextParam: {
                    name: 'AccountId'
                  },
                  hostLabel: true,
                  location: 'header',
                  locationName: 'x-amz-account-id'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                LocationScope: {
                  location: 'querystring',
                  locationName: 'locationscope'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                AccessGrantsLocationsList: {
                  type: 'list',
                  member: {
                    locationName: 'AccessGrantsLocation',
                    type: 'structure',
                    members: {
                      CreatedAt: {
                        type: 'timestamp'
                      },
                      AccessGrantsLocationId: {},
                      AccessGrantsLocationArn: {},
                      LocationScope: {},
                      IAMRoleArn: {}
                    }
                  }
                }
              }
            },
            endpoint: {
              hostPrefix: '{AccountId}.'
            },
            httpChecksumRequired: true,
            staticContextParams: {
              RequiresAccountId: {
                value: true
              }
            }
          },
          ListAccessPoints: {
            http: {
              method: 'GET',
              requestUri: '/v20180820/accesspoint'
            },
            input: {
              type: 'structure',
              required: ['AccountId'],
              members: {
                AccountId: {
                  contextParam: {
                    name: 'AccountId'
                  },
                  hostLabel: true,
                  location: 'header',
                  locationName: 'x-amz-account-id'
                },
                Bucket: {
                  contextParam: {
                    name: 'Bucket'
                  },
                  location: 'querystring',
                  locationName: 'bucket'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AccessPointList: {
                  type: 'list',
                  member: {
                    locationName: 'AccessPoint',
                    type: 'structure',
                    required: ['Name', 'NetworkOrigin', 'Bucket'],
                    members: {
                      Name: {},
                      NetworkOrigin: {},
                      VpcConfiguration: {
                        shape: 'Sx'
                      },
                      Bucket: {},
                      AccessPointArn: {},
                      Alias: {},
                      BucketAccountId: {}
                    }
                  }
                },
                NextToken: {}
              }
            },
            endpoint: {
              hostPrefix: '{AccountId}.'
            },
            staticContextParams: {
              RequiresAccountId: {
                value: true
              }
            }
          },
          ListAccessPointsForObjectLambda: {
            http: {
              method: 'GET',
              requestUri: '/v20180820/accesspointforobjectlambda'
            },
            input: {
              type: 'structure',
              required: ['AccountId'],
              members: {
                AccountId: {
                  contextParam: {
                    name: 'AccountId'
                  },
                  hostLabel: true,
                  location: 'header',
                  locationName: 'x-amz-account-id'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ObjectLambdaAccessPointList: {
                  type: 'list',
                  member: {
                    locationName: 'ObjectLambdaAccessPoint',
                    type: 'structure',
                    required: ['Name'],
                    members: {
                      Name: {},
                      ObjectLambdaAccessPointArn: {},
                      Alias: {
                        shape: 'S1l'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            },
            endpoint: {
              hostPrefix: '{AccountId}.'
            },
            staticContextParams: {
              RequiresAccountId: {
                value: true
              }
            }
          },
          ListJobs: {
            http: {
              method: 'GET',
              requestUri: '/v20180820/jobs'
            },
            input: {
              type: 'structure',
              required: ['AccountId'],
              members: {
                AccountId: {
                  contextParam: {
                    name: 'AccountId'
                  },
                  hostLabel: true,
                  location: 'header',
                  locationName: 'x-amz-account-id'
                },
                JobStatuses: {
                  location: 'querystring',
                  locationName: 'jobStatuses',
                  type: 'list',
                  member: {}
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                Jobs: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      JobId: {},
                      Description: {},
                      Operation: {},
                      Priority: {
                        type: 'integer'
                      },
                      Status: {},
                      CreationTime: {
                        type: 'timestamp'
                      },
                      TerminationDate: {
                        type: 'timestamp'
                      },
                      ProgressSummary: {
                        shape: 'S5p'
                      }
                    }
                  }
                }
              }
            },
            endpoint: {
              hostPrefix: '{AccountId}.'
            },
            staticContextParams: {
              RequiresAccountId: {
                value: true
              }
            }
          },
          ListMultiRegionAccessPoints: {
            http: {
              method: 'GET',
              requestUri: '/v20180820/mrap/instances'
            },
            input: {
              type: 'structure',
              required: ['AccountId'],
              members: {
                AccountId: {
                  contextParam: {
                    name: 'AccountId'
                  },
                  hostLabel: true,
                  location: 'header',
                  locationName: 'x-amz-account-id'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AccessPoints: {
                  type: 'list',
                  member: {
                    shape: 'S9m',
                    locationName: 'AccessPoint'
                  }
                },
                NextToken: {}
              }
            },
            endpoint: {
              hostPrefix: '{AccountId}.'
            },
            httpChecksumRequired: true,
            staticContextParams: {
              RequiresAccountId: {
                value: true
              }
            }
          },
          ListRegionalBuckets: {
            http: {
              method: 'GET',
              requestUri: '/v20180820/bucket'
            },
            input: {
              type: 'structure',
              required: ['AccountId'],
              members: {
                AccountId: {
                  contextParam: {
                    name: 'AccountId'
                  },
                  hostLabel: true,
                  location: 'header',
                  locationName: 'x-amz-account-id'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                OutpostId: {
                  contextParam: {
                    name: 'OutpostId'
                  },
                  location: 'header',
                  locationName: 'x-amz-outpost-id'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                RegionalBucketList: {
                  type: 'list',
                  member: {
                    locationName: 'RegionalBucket',
                    type: 'structure',
                    required: ['Bucket', 'PublicAccessBlockEnabled', 'CreationDate'],
                    members: {
                      Bucket: {},
                      BucketArn: {},
                      PublicAccessBlockEnabled: {
                        type: 'boolean'
                      },
                      CreationDate: {
                        type: 'timestamp'
                      },
                      OutpostId: {}
                    }
                  }
                },
                NextToken: {}
              }
            },
            endpoint: {
              hostPrefix: '{AccountId}.'
            },
            staticContextParams: {
              RequiresAccountId: {
                value: true
              }
            }
          },
          ListStorageLensConfigurations: {
            http: {
              method: 'GET',
              requestUri: '/v20180820/storagelens'
            },
            input: {
              type: 'structure',
              required: ['AccountId'],
              members: {
                AccountId: {
                  contextParam: {
                    name: 'AccountId'
                  },
                  hostLabel: true,
                  location: 'header',
                  locationName: 'x-amz-account-id'
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
                StorageLensConfigurationList: {
                  type: 'list',
                  member: {
                    locationName: 'StorageLensConfiguration',
                    type: 'structure',
                    required: ['Id', 'StorageLensArn', 'HomeRegion'],
                    members: {
                      Id: {},
                      StorageLensArn: {},
                      HomeRegion: {},
                      IsEnabled: {
                        type: 'boolean'
                      }
                    }
                  },
                  flattened: true
                }
              }
            },
            endpoint: {
              hostPrefix: '{AccountId}.'
            },
            staticContextParams: {
              RequiresAccountId: {
                value: true
              }
            }
          },
          ListStorageLensGroups: {
            http: {
              method: 'GET',
              requestUri: '/v20180820/storagelensgroup'
            },
            input: {
              type: 'structure',
              required: ['AccountId'],
              members: {
                AccountId: {
                  contextParam: {
                    name: 'AccountId'
                  },
                  hostLabel: true,
                  location: 'header',
                  locationName: 'x-amz-account-id'
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
                StorageLensGroupList: {
                  type: 'list',
                  member: {
                    locationName: 'StorageLensGroup',
                    type: 'structure',
                    required: ['Name', 'StorageLensGroupArn', 'HomeRegion'],
                    members: {
                      Name: {},
                      StorageLensGroupArn: {},
                      HomeRegion: {}
                    }
                  },
                  flattened: true
                }
              }
            },
            endpoint: {
              hostPrefix: '{AccountId}.'
            },
            staticContextParams: {
              RequiresAccountId: {
                value: true
              }
            }
          },
          ListTagsForResource: {
            http: {
              method: 'GET',
              requestUri: '/v20180820/tags/{resourceArn+}'
            },
            input: {
              type: 'structure',
              required: ['AccountId', 'ResourceArn'],
              members: {
                AccountId: {
                  contextParam: {
                    name: 'AccountId'
                  },
                  hostLabel: true,
                  location: 'header',
                  locationName: 'x-amz-account-id'
                },
                ResourceArn: {
                  location: 'uri',
                  locationName: 'resourceArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Tags: {
                  shape: 'Se'
                }
              }
            },
            endpoint: {
              hostPrefix: '{AccountId}.'
            },
            staticContextParams: {
              RequiresAccountId: {
                value: true
              }
            }
          },
          PutAccessGrantsInstanceResourcePolicy: {
            http: {
              method: 'PUT',
              requestUri: '/v20180820/accessgrantsinstance/resourcepolicy'
            },
            input: {
              locationName: 'PutAccessGrantsInstanceResourcePolicyRequest',
              xmlNamespace: {
                uri: 'http://awss3control.amazonaws.com/doc/2018-08-20/'
              },
              type: 'structure',
              required: ['AccountId', 'Policy'],
              members: {
                AccountId: {
                  contextParam: {
                    name: 'AccountId'
                  },
                  hostLabel: true,
                  location: 'header',
                  locationName: 'x-amz-account-id'
                },
                Policy: {},
                Organization: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Policy: {},
                Organization: {},
                CreatedAt: {
                  type: 'timestamp'
                }
              }
            },
            endpoint: {
              hostPrefix: '{AccountId}.'
            },
            httpChecksumRequired: true,
            staticContextParams: {
              RequiresAccountId: {
                value: true
              }
            }
          },
          PutAccessPointConfigurationForObjectLambda: {
            http: {
              method: 'PUT',
              requestUri: '/v20180820/accesspointforobjectlambda/{name}/configuration'
            },
            input: {
              locationName: 'PutAccessPointConfigurationForObjectLambdaRequest',
              xmlNamespace: {
                uri: 'http://awss3control.amazonaws.com/doc/2018-08-20/'
              },
              type: 'structure',
              required: ['AccountId', 'Name', 'Configuration'],
              members: {
                AccountId: {
                  contextParam: {
                    name: 'AccountId'
                  },
                  hostLabel: true,
                  location: 'header',
                  locationName: 'x-amz-account-id'
                },
                Name: {
                  location: 'uri',
                  locationName: 'name'
                },
                Configuration: {
                  shape: 'S16'
                }
              }
            },
            endpoint: {
              hostPrefix: '{AccountId}.'
            },
            staticContextParams: {
              RequiresAccountId: {
                value: true
              }
            }
          },
          PutAccessPointPolicy: {
            http: {
              method: 'PUT',
              requestUri: '/v20180820/accesspoint/{name}/policy'
            },
            input: {
              locationName: 'PutAccessPointPolicyRequest',
              xmlNamespace: {
                uri: 'http://awss3control.amazonaws.com/doc/2018-08-20/'
              },
              type: 'structure',
              required: ['AccountId', 'Name', 'Policy'],
              members: {
                AccountId: {
                  contextParam: {
                    name: 'AccountId'
                  },
                  hostLabel: true,
                  location: 'header',
                  locationName: 'x-amz-account-id'
                },
                Name: {
                  contextParam: {
                    name: 'AccessPointName'
                  },
                  location: 'uri',
                  locationName: 'name'
                },
                Policy: {}
              }
            },
            endpoint: {
              hostPrefix: '{AccountId}.'
            },
            staticContextParams: {
              RequiresAccountId: {
                value: true
              }
            }
          },
          PutAccessPointPolicyForObjectLambda: {
            http: {
              method: 'PUT',
              requestUri: '/v20180820/accesspointforobjectlambda/{name}/policy'
            },
            input: {
              locationName: 'PutAccessPointPolicyForObjectLambdaRequest',
              xmlNamespace: {
                uri: 'http://awss3control.amazonaws.com/doc/2018-08-20/'
              },
              type: 'structure',
              required: ['AccountId', 'Name', 'Policy'],
              members: {
                AccountId: {
                  contextParam: {
                    name: 'AccountId'
                  },
                  hostLabel: true,
                  location: 'header',
                  locationName: 'x-amz-account-id'
                },
                Name: {
                  location: 'uri',
                  locationName: 'name'
                },
                Policy: {}
              }
            },
            endpoint: {
              hostPrefix: '{AccountId}.'
            },
            staticContextParams: {
              RequiresAccountId: {
                value: true
              }
            }
          },
          PutBucketLifecycleConfiguration: {
            http: {
              method: 'PUT',
              requestUri: '/v20180820/bucket/{name}/lifecycleconfiguration'
            },
            input: {
              type: 'structure',
              required: ['AccountId', 'Bucket'],
              members: {
                AccountId: {
                  contextParam: {
                    name: 'AccountId'
                  },
                  hostLabel: true,
                  location: 'header',
                  locationName: 'x-amz-account-id'
                },
                Bucket: {
                  contextParam: {
                    name: 'Bucket'
                  },
                  location: 'uri',
                  locationName: 'name'
                },
                LifecycleConfiguration: {
                  locationName: 'LifecycleConfiguration',
                  xmlNamespace: {
                    uri: 'http://awss3control.amazonaws.com/doc/2018-08-20/'
                  },
                  type: 'structure',
                  members: {
                    Rules: {
                      shape: 'S7m'
                    }
                  }
                }
              },
              payload: 'LifecycleConfiguration'
            },
            endpoint: {
              hostPrefix: '{AccountId}.'
            },
            httpChecksumRequired: true,
            staticContextParams: {
              RequiresAccountId: {
                value: true
              }
            }
          },
          PutBucketPolicy: {
            http: {
              method: 'PUT',
              requestUri: '/v20180820/bucket/{name}/policy'
            },
            input: {
              locationName: 'PutBucketPolicyRequest',
              xmlNamespace: {
                uri: 'http://awss3control.amazonaws.com/doc/2018-08-20/'
              },
              type: 'structure',
              required: ['AccountId', 'Bucket', 'Policy'],
              members: {
                AccountId: {
                  contextParam: {
                    name: 'AccountId'
                  },
                  hostLabel: true,
                  location: 'header',
                  locationName: 'x-amz-account-id'
                },
                Bucket: {
                  contextParam: {
                    name: 'Bucket'
                  },
                  location: 'uri',
                  locationName: 'name'
                },
                ConfirmRemoveSelfBucketAccess: {
                  location: 'header',
                  locationName: 'x-amz-confirm-remove-self-bucket-access',
                  type: 'boolean'
                },
                Policy: {}
              }
            },
            endpoint: {
              hostPrefix: '{AccountId}.'
            },
            httpChecksumRequired: true,
            staticContextParams: {
              RequiresAccountId: {
                value: true
              }
            }
          },
          PutBucketReplication: {
            http: {
              method: 'PUT',
              requestUri: '/v20180820/bucket/{name}/replication'
            },
            input: {
              type: 'structure',
              required: ['AccountId', 'Bucket', 'ReplicationConfiguration'],
              members: {
                AccountId: {
                  contextParam: {
                    name: 'AccountId'
                  },
                  hostLabel: true,
                  location: 'header',
                  locationName: 'x-amz-account-id'
                },
                Bucket: {
                  contextParam: {
                    name: 'Bucket'
                  },
                  location: 'uri',
                  locationName: 'name'
                },
                ReplicationConfiguration: {
                  shape: 'S89',
                  locationName: 'ReplicationConfiguration',
                  xmlNamespace: {
                    uri: 'http://awss3control.amazonaws.com/doc/2018-08-20/'
                  }
                }
              },
              payload: 'ReplicationConfiguration'
            },
            endpoint: {
              hostPrefix: '{AccountId}.'
            },
            httpChecksumRequired: true,
            staticContextParams: {
              RequiresAccountId: {
                value: true
              }
            }
          },
          PutBucketTagging: {
            http: {
              method: 'PUT',
              requestUri: '/v20180820/bucket/{name}/tagging'
            },
            input: {
              type: 'structure',
              required: ['AccountId', 'Bucket', 'Tagging'],
              members: {
                AccountId: {
                  contextParam: {
                    name: 'AccountId'
                  },
                  hostLabel: true,
                  location: 'header',
                  locationName: 'x-amz-account-id'
                },
                Bucket: {
                  contextParam: {
                    name: 'Bucket'
                  },
                  location: 'uri',
                  locationName: 'name'
                },
                Tagging: {
                  locationName: 'Tagging',
                  xmlNamespace: {
                    uri: 'http://awss3control.amazonaws.com/doc/2018-08-20/'
                  },
                  type: 'structure',
                  required: ['TagSet'],
                  members: {
                    TagSet: {
                      shape: 'S2n'
                    }
                  }
                }
              },
              payload: 'Tagging'
            },
            endpoint: {
              hostPrefix: '{AccountId}.'
            },
            httpChecksumRequired: true,
            staticContextParams: {
              RequiresAccountId: {
                value: true
              }
            }
          },
          PutBucketVersioning: {
            http: {
              method: 'PUT',
              requestUri: '/v20180820/bucket/{name}/versioning'
            },
            input: {
              type: 'structure',
              required: ['AccountId', 'Bucket', 'VersioningConfiguration'],
              members: {
                AccountId: {
                  contextParam: {
                    name: 'AccountId'
                  },
                  hostLabel: true,
                  location: 'header',
                  locationName: 'x-amz-account-id'
                },
                Bucket: {
                  contextParam: {
                    name: 'Bucket'
                  },
                  location: 'uri',
                  locationName: 'name'
                },
                MFA: {
                  location: 'header',
                  locationName: 'x-amz-mfa'
                },
                VersioningConfiguration: {
                  locationName: 'VersioningConfiguration',
                  xmlNamespace: {
                    uri: 'http://awss3control.amazonaws.com/doc/2018-08-20/'
                  },
                  type: 'structure',
                  members: {
                    MFADelete: {
                      locationName: 'MfaDelete'
                    },
                    Status: {}
                  }
                }
              },
              payload: 'VersioningConfiguration'
            },
            endpoint: {
              hostPrefix: '{AccountId}.'
            },
            httpChecksumRequired: true,
            staticContextParams: {
              RequiresAccountId: {
                value: true
              }
            }
          },
          PutJobTagging: {
            http: {
              method: 'PUT',
              requestUri: '/v20180820/jobs/{id}/tagging'
            },
            input: {
              locationName: 'PutJobTaggingRequest',
              xmlNamespace: {
                uri: 'http://awss3control.amazonaws.com/doc/2018-08-20/'
              },
              type: 'structure',
              required: ['AccountId', 'JobId', 'Tags'],
              members: {
                AccountId: {
                  contextParam: {
                    name: 'AccountId'
                  },
                  hostLabel: true,
                  location: 'header',
                  locationName: 'x-amz-account-id'
                },
                JobId: {
                  location: 'uri',
                  locationName: 'id'
                },
                Tags: {
                  shape: 'S2n'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            endpoint: {
              hostPrefix: '{AccountId}.'
            },
            staticContextParams: {
              RequiresAccountId: {
                value: true
              }
            }
          },
          PutMultiRegionAccessPointPolicy: {
            http: {
              requestUri: '/v20180820/async-requests/mrap/put-policy'
            },
            input: {
              locationName: 'PutMultiRegionAccessPointPolicyRequest',
              xmlNamespace: {
                uri: 'http://awss3control.amazonaws.com/doc/2018-08-20/'
              },
              type: 'structure',
              required: ['AccountId', 'ClientToken', 'Details'],
              members: {
                AccountId: {
                  contextParam: {
                    name: 'AccountId'
                  },
                  hostLabel: true,
                  location: 'header',
                  locationName: 'x-amz-account-id'
                },
                ClientToken: {
                  idempotencyToken: true
                },
                Details: {
                  shape: 'S6b'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                RequestTokenARN: {}
              }
            },
            endpoint: {
              hostPrefix: '{AccountId}.'
            },
            httpChecksumRequired: true,
            staticContextParams: {
              RequiresAccountId: {
                value: true
              }
            }
          },
          PutPublicAccessBlock: {
            http: {
              method: 'PUT',
              requestUri: '/v20180820/configuration/publicAccessBlock'
            },
            input: {
              type: 'structure',
              required: ['PublicAccessBlockConfiguration', 'AccountId'],
              members: {
                PublicAccessBlockConfiguration: {
                  shape: 'Sz',
                  locationName: 'PublicAccessBlockConfiguration',
                  xmlNamespace: {
                    uri: 'http://awss3control.amazonaws.com/doc/2018-08-20/'
                  }
                },
                AccountId: {
                  contextParam: {
                    name: 'AccountId'
                  },
                  hostLabel: true,
                  location: 'header',
                  locationName: 'x-amz-account-id'
                }
              },
              payload: 'PublicAccessBlockConfiguration'
            },
            endpoint: {
              hostPrefix: '{AccountId}.'
            },
            staticContextParams: {
              RequiresAccountId: {
                value: true
              }
            }
          },
          PutStorageLensConfiguration: {
            http: {
              method: 'PUT',
              requestUri: '/v20180820/storagelens/{storagelensid}'
            },
            input: {
              locationName: 'PutStorageLensConfigurationRequest',
              xmlNamespace: {
                uri: 'http://awss3control.amazonaws.com/doc/2018-08-20/'
              },
              type: 'structure',
              required: ['ConfigId', 'AccountId', 'StorageLensConfiguration'],
              members: {
                ConfigId: {
                  location: 'uri',
                  locationName: 'storagelensid'
                },
                AccountId: {
                  contextParam: {
                    name: 'AccountId'
                  },
                  hostLabel: true,
                  location: 'header',
                  locationName: 'x-amz-account-id'
                },
                StorageLensConfiguration: {
                  shape: 'Sa8'
                },
                Tags: {
                  shape: 'Sb9'
                }
              }
            },
            endpoint: {
              hostPrefix: '{AccountId}.'
            },
            staticContextParams: {
              RequiresAccountId: {
                value: true
              }
            }
          },
          PutStorageLensConfigurationTagging: {
            http: {
              method: 'PUT',
              requestUri: '/v20180820/storagelens/{storagelensid}/tagging'
            },
            input: {
              locationName: 'PutStorageLensConfigurationTaggingRequest',
              xmlNamespace: {
                uri: 'http://awss3control.amazonaws.com/doc/2018-08-20/'
              },
              type: 'structure',
              required: ['ConfigId', 'AccountId', 'Tags'],
              members: {
                ConfigId: {
                  location: 'uri',
                  locationName: 'storagelensid'
                },
                AccountId: {
                  contextParam: {
                    name: 'AccountId'
                  },
                  hostLabel: true,
                  location: 'header',
                  locationName: 'x-amz-account-id'
                },
                Tags: {
                  shape: 'Sb9'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            endpoint: {
              hostPrefix: '{AccountId}.'
            },
            staticContextParams: {
              RequiresAccountId: {
                value: true
              }
            }
          },
          SubmitMultiRegionAccessPointRoutes: {
            http: {
              method: 'PATCH',
              requestUri: '/v20180820/mrap/instances/{mrap+}/routes'
            },
            input: {
              locationName: 'SubmitMultiRegionAccessPointRoutesRequest',
              xmlNamespace: {
                uri: 'http://awss3control.amazonaws.com/doc/2018-08-20/'
              },
              type: 'structure',
              required: ['AccountId', 'Mrap', 'RouteUpdates'],
              members: {
                AccountId: {
                  contextParam: {
                    name: 'AccountId'
                  },
                  hostLabel: true,
                  location: 'header',
                  locationName: 'x-amz-account-id'
                },
                Mrap: {
                  location: 'uri',
                  locationName: 'mrap'
                },
                RouteUpdates: {
                  shape: 'Sa1'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            endpoint: {
              hostPrefix: '{AccountId}.'
            },
            httpChecksumRequired: true,
            staticContextParams: {
              RequiresAccountId: {
                value: true
              }
            }
          },
          TagResource: {
            http: {
              requestUri: '/v20180820/tags/{resourceArn+}',
              responseCode: 204
            },
            input: {
              locationName: 'TagResourceRequest',
              xmlNamespace: {
                uri: 'http://awss3control.amazonaws.com/doc/2018-08-20/'
              },
              type: 'structure',
              required: ['AccountId', 'ResourceArn', 'Tags'],
              members: {
                AccountId: {
                  contextParam: {
                    name: 'AccountId'
                  },
                  hostLabel: true,
                  location: 'header',
                  locationName: 'x-amz-account-id'
                },
                ResourceArn: {
                  location: 'uri',
                  locationName: 'resourceArn'
                },
                Tags: {
                  shape: 'Se'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            endpoint: {
              hostPrefix: '{AccountId}.'
            },
            staticContextParams: {
              RequiresAccountId: {
                value: true
              }
            }
          },
          UntagResource: {
            http: {
              method: 'DELETE',
              requestUri: '/v20180820/tags/{resourceArn+}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['AccountId', 'ResourceArn', 'TagKeys'],
              members: {
                AccountId: {
                  contextParam: {
                    name: 'AccountId'
                  },
                  hostLabel: true,
                  location: 'header',
                  locationName: 'x-amz-account-id'
                },
                ResourceArn: {
                  location: 'uri',
                  locationName: 'resourceArn'
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
            },
            endpoint: {
              hostPrefix: '{AccountId}.'
            },
            staticContextParams: {
              RequiresAccountId: {
                value: true
              }
            }
          },
          UpdateAccessGrantsLocation: {
            http: {
              method: 'PUT',
              requestUri: '/v20180820/accessgrantsinstance/location/{id}'
            },
            input: {
              locationName: 'UpdateAccessGrantsLocationRequest',
              xmlNamespace: {
                uri: 'http://awss3control.amazonaws.com/doc/2018-08-20/'
              },
              type: 'structure',
              required: ['AccountId', 'AccessGrantsLocationId', 'IAMRoleArn'],
              members: {
                AccountId: {
                  contextParam: {
                    name: 'AccountId'
                  },
                  hostLabel: true,
                  location: 'header',
                  locationName: 'x-amz-account-id'
                },
                AccessGrantsLocationId: {
                  location: 'uri',
                  locationName: 'id'
                },
                IAMRoleArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                CreatedAt: {
                  type: 'timestamp'
                },
                AccessGrantsLocationId: {},
                AccessGrantsLocationArn: {},
                LocationScope: {},
                IAMRoleArn: {}
              }
            },
            endpoint: {
              hostPrefix: '{AccountId}.'
            },
            httpChecksumRequired: true,
            staticContextParams: {
              RequiresAccountId: {
                value: true
              }
            }
          },
          UpdateJobPriority: {
            http: {
              requestUri: '/v20180820/jobs/{id}/priority'
            },
            input: {
              type: 'structure',
              required: ['AccountId', 'JobId', 'Priority'],
              members: {
                AccountId: {
                  contextParam: {
                    name: 'AccountId'
                  },
                  hostLabel: true,
                  location: 'header',
                  locationName: 'x-amz-account-id'
                },
                JobId: {
                  location: 'uri',
                  locationName: 'id'
                },
                Priority: {
                  location: 'querystring',
                  locationName: 'priority',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['JobId', 'Priority'],
              members: {
                JobId: {},
                Priority: {
                  type: 'integer'
                }
              }
            },
            endpoint: {
              hostPrefix: '{AccountId}.'
            },
            staticContextParams: {
              RequiresAccountId: {
                value: true
              }
            }
          },
          UpdateJobStatus: {
            http: {
              requestUri: '/v20180820/jobs/{id}/status'
            },
            input: {
              type: 'structure',
              required: ['AccountId', 'JobId', 'RequestedJobStatus'],
              members: {
                AccountId: {
                  contextParam: {
                    name: 'AccountId'
                  },
                  hostLabel: true,
                  location: 'header',
                  locationName: 'x-amz-account-id'
                },
                JobId: {
                  location: 'uri',
                  locationName: 'id'
                },
                RequestedJobStatus: {
                  location: 'querystring',
                  locationName: 'requestedJobStatus'
                },
                StatusUpdateReason: {
                  location: 'querystring',
                  locationName: 'statusUpdateReason'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                JobId: {},
                Status: {},
                StatusUpdateReason: {}
              }
            },
            endpoint: {
              hostPrefix: '{AccountId}.'
            },
            staticContextParams: {
              RequiresAccountId: {
                value: true
              }
            }
          },
          UpdateStorageLensGroup: {
            http: {
              method: 'PUT',
              requestUri: '/v20180820/storagelensgroup/{name}',
              responseCode: 204
            },
            input: {
              locationName: 'UpdateStorageLensGroupRequest',
              xmlNamespace: {
                uri: 'http://awss3control.amazonaws.com/doc/2018-08-20/'
              },
              type: 'structure',
              required: ['Name', 'AccountId', 'StorageLensGroup'],
              members: {
                Name: {
                  location: 'uri',
                  locationName: 'name'
                },
                AccountId: {
                  contextParam: {
                    name: 'AccountId'
                  },
                  hostLabel: true,
                  location: 'header',
                  locationName: 'x-amz-account-id'
                },
                StorageLensGroup: {
                  shape: 'S4h'
                }
              }
            },
            endpoint: {
              hostPrefix: '{AccountId}.'
            },
            staticContextParams: {
              RequiresAccountId: {
                value: true
              }
            }
          }
        },
        shapes: {
          S6: {
            type: 'structure',
            members: {
              S3SubPrefix: {}
            }
          },
          S8: {
            type: 'structure',
            members: {
              GranteeType: {},
              GranteeIdentifier: {}
            }
          },
          Se: {
            type: 'list',
            member: {
              locationName: 'Tag',
              type: 'structure',
              required: ['Key', 'Value'],
              members: {
                Key: {},
                Value: {}
              }
            }
          },
          Sx: {
            type: 'structure',
            required: ['VpcId'],
            members: {
              VpcId: {}
            }
          },
          Sz: {
            type: 'structure',
            members: {
              BlockPublicAcls: {
                locationName: 'BlockPublicAcls',
                type: 'boolean'
              },
              IgnorePublicAcls: {
                locationName: 'IgnorePublicAcls',
                type: 'boolean'
              },
              BlockPublicPolicy: {
                locationName: 'BlockPublicPolicy',
                type: 'boolean'
              },
              RestrictPublicBuckets: {
                locationName: 'RestrictPublicBuckets',
                type: 'boolean'
              }
            }
          },
          S16: {
            type: 'structure',
            required: ['SupportingAccessPoint', 'TransformationConfigurations'],
            members: {
              SupportingAccessPoint: {},
              CloudWatchMetricsEnabled: {
                type: 'boolean'
              },
              AllowedFeatures: {
                type: 'list',
                member: {
                  locationName: 'AllowedFeature'
                }
              },
              TransformationConfigurations: {
                type: 'list',
                member: {
                  locationName: 'TransformationConfiguration',
                  type: 'structure',
                  required: ['Actions', 'ContentTransformation'],
                  members: {
                    Actions: {
                      type: 'list',
                      member: {
                        locationName: 'Action'
                      }
                    },
                    ContentTransformation: {
                      type: 'structure',
                      members: {
                        AwsLambda: {
                          type: 'structure',
                          required: ['FunctionArn'],
                          members: {
                            FunctionArn: {},
                            FunctionPayload: {}
                          }
                        }
                      },
                      union: true
                    }
                  }
                }
              }
            }
          },
          S1l: {
            type: 'structure',
            members: {
              Value: {},
              Status: {}
            }
          },
          S24: {
            type: 'structure',
            members: {
              LambdaInvoke: {
                type: 'structure',
                members: {
                  FunctionArn: {},
                  InvocationSchemaVersion: {},
                  UserArguments: {
                    type: 'map',
                    key: {},
                    value: {}
                  }
                }
              },
              S3PutObjectCopy: {
                type: 'structure',
                members: {
                  TargetResource: {},
                  CannedAccessControlList: {},
                  AccessControlGrants: {
                    shape: 'S2b'
                  },
                  MetadataDirective: {},
                  ModifiedSinceConstraint: {
                    type: 'timestamp'
                  },
                  NewObjectMetadata: {
                    type: 'structure',
                    members: {
                      CacheControl: {},
                      ContentDisposition: {},
                      ContentEncoding: {},
                      ContentLanguage: {},
                      UserMetadata: {
                        type: 'map',
                        key: {},
                        value: {}
                      },
                      ContentLength: {
                        type: 'long'
                      },
                      ContentMD5: {},
                      ContentType: {},
                      HttpExpiresDate: {
                        type: 'timestamp'
                      },
                      RequesterCharged: {
                        type: 'boolean'
                      },
                      SSEAlgorithm: {}
                    }
                  },
                  NewObjectTagging: {
                    shape: 'S2n'
                  },
                  RedirectLocation: {},
                  RequesterPays: {
                    type: 'boolean'
                  },
                  StorageClass: {},
                  UnModifiedSinceConstraint: {
                    type: 'timestamp'
                  },
                  SSEAwsKmsKeyId: {},
                  TargetKeyPrefix: {},
                  ObjectLockLegalHoldStatus: {},
                  ObjectLockMode: {},
                  ObjectLockRetainUntilDate: {
                    type: 'timestamp'
                  },
                  BucketKeyEnabled: {
                    type: 'boolean'
                  },
                  ChecksumAlgorithm: {}
                }
              },
              S3PutObjectAcl: {
                type: 'structure',
                members: {
                  AccessControlPolicy: {
                    type: 'structure',
                    members: {
                      AccessControlList: {
                        type: 'structure',
                        required: ['Owner'],
                        members: {
                          Owner: {
                            type: 'structure',
                            members: {
                              ID: {},
                              DisplayName: {}
                            }
                          },
                          Grants: {
                            shape: 'S2b'
                          }
                        }
                      },
                      CannedAccessControlList: {}
                    }
                  }
                }
              },
              S3PutObjectTagging: {
                type: 'structure',
                members: {
                  TagSet: {
                    shape: 'S2n'
                  }
                }
              },
              S3DeleteObjectTagging: {
                type: 'structure',
                members: {}
              },
              S3InitiateRestoreObject: {
                type: 'structure',
                members: {
                  ExpirationInDays: {
                    type: 'integer'
                  },
                  GlacierJobTier: {}
                }
              },
              S3PutObjectLegalHold: {
                type: 'structure',
                required: ['LegalHold'],
                members: {
                  LegalHold: {
                    type: 'structure',
                    required: ['Status'],
                    members: {
                      Status: {}
                    }
                  }
                }
              },
              S3PutObjectRetention: {
                type: 'structure',
                required: ['Retention'],
                members: {
                  BypassGovernanceRetention: {
                    type: 'boolean'
                  },
                  Retention: {
                    type: 'structure',
                    members: {
                      RetainUntilDate: {
                        type: 'timestamp'
                      },
                      Mode: {}
                    }
                  }
                }
              },
              S3ReplicateObject: {
                type: 'structure',
                members: {}
              }
            }
          },
          S2b: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Grantee: {
                  type: 'structure',
                  members: {
                    TypeIdentifier: {},
                    Identifier: {},
                    DisplayName: {}
                  }
                },
                Permission: {}
              }
            }
          },
          S2n: {
            type: 'list',
            member: {
              shape: 'S2o'
            }
          },
          S2o: {
            type: 'structure',
            required: ['Key', 'Value'],
            members: {
              Key: {},
              Value: {}
            }
          },
          S3a: {
            type: 'structure',
            required: ['Enabled'],
            members: {
              Bucket: {},
              Format: {},
              Enabled: {
                type: 'boolean'
              },
              Prefix: {},
              ReportScope: {}
            }
          },
          S3f: {
            type: 'structure',
            required: ['Spec', 'Location'],
            members: {
              Spec: {
                type: 'structure',
                required: ['Format'],
                members: {
                  Format: {},
                  Fields: {
                    type: 'list',
                    member: {}
                  }
                }
              },
              Location: {
                shape: 'S3k'
              }
            }
          },
          S3k: {
            type: 'structure',
            required: ['ObjectArn', 'ETag'],
            members: {
              ObjectArn: {},
              ObjectVersionId: {},
              ETag: {}
            }
          },
          S3p: {
            type: 'structure',
            members: {
              S3JobManifestGenerator: {
                type: 'structure',
                required: ['SourceBucket', 'EnableManifestOutput'],
                members: {
                  ExpectedBucketOwner: {},
                  SourceBucket: {},
                  ManifestOutputLocation: {
                    type: 'structure',
                    required: ['Bucket', 'ManifestFormat'],
                    members: {
                      ExpectedManifestBucketOwner: {},
                      Bucket: {},
                      ManifestPrefix: {},
                      ManifestEncryption: {
                        type: 'structure',
                        members: {
                          SSES3: {
                            locationName: 'SSE-S3',
                            type: 'structure',
                            members: {}
                          },
                          SSEKMS: {
                            locationName: 'SSE-KMS',
                            type: 'structure',
                            required: ['KeyId'],
                            members: {
                              KeyId: {}
                            }
                          }
                        }
                      },
                      ManifestFormat: {}
                    }
                  },
                  Filter: {
                    type: 'structure',
                    members: {
                      EligibleForReplication: {
                        type: 'boolean'
                      },
                      CreatedAfter: {
                        type: 'timestamp'
                      },
                      CreatedBefore: {
                        type: 'timestamp'
                      },
                      ObjectReplicationStatuses: {
                        type: 'list',
                        member: {}
                      },
                      KeyNameConstraint: {
                        type: 'structure',
                        members: {
                          MatchAnyPrefix: {
                            shape: 'S42'
                          },
                          MatchAnySuffix: {
                            shape: 'S42'
                          },
                          MatchAnySubstring: {
                            shape: 'S42'
                          }
                        }
                      },
                      ObjectSizeGreaterThanBytes: {
                        type: 'long'
                      },
                      ObjectSizeLessThanBytes: {
                        type: 'long'
                      },
                      MatchAnyStorageClass: {
                        type: 'list',
                        member: {}
                      }
                    }
                  },
                  EnableManifestOutput: {
                    type: 'boolean'
                  }
                }
              }
            },
            union: true
          },
          S42: {
            type: 'list',
            member: {}
          },
          S4a: {
            type: 'structure',
            required: ['Name', 'Regions'],
            members: {
              Name: {},
              PublicAccessBlock: {
                shape: 'Sz'
              },
              Regions: {
                type: 'list',
                member: {
                  locationName: 'Region',
                  type: 'structure',
                  required: ['Bucket'],
                  members: {
                    Bucket: {},
                    BucketAccountId: {}
                  }
                }
              }
            }
          },
          S4h: {
            type: 'structure',
            required: ['Name', 'Filter'],
            members: {
              Name: {},
              Filter: {
                type: 'structure',
                members: {
                  MatchAnyPrefix: {
                    shape: 'S4k'
                  },
                  MatchAnySuffix: {
                    shape: 'S4m'
                  },
                  MatchAnyTag: {
                    shape: 'S4o'
                  },
                  MatchObjectAge: {
                    shape: 'S4p'
                  },
                  MatchObjectSize: {
                    shape: 'S4r'
                  },
                  And: {
                    type: 'structure',
                    members: {
                      MatchAnyPrefix: {
                        shape: 'S4k'
                      },
                      MatchAnySuffix: {
                        shape: 'S4m'
                      },
                      MatchAnyTag: {
                        shape: 'S4o'
                      },
                      MatchObjectAge: {
                        shape: 'S4p'
                      },
                      MatchObjectSize: {
                        shape: 'S4r'
                      }
                    }
                  },
                  Or: {
                    type: 'structure',
                    members: {
                      MatchAnyPrefix: {
                        shape: 'S4k'
                      },
                      MatchAnySuffix: {
                        shape: 'S4m'
                      },
                      MatchAnyTag: {
                        shape: 'S4o'
                      },
                      MatchObjectAge: {
                        shape: 'S4p'
                      },
                      MatchObjectSize: {
                        shape: 'S4r'
                      }
                    }
                  }
                }
              },
              StorageLensGroupArn: {}
            }
          },
          S4k: {
            type: 'list',
            member: {
              locationName: 'Prefix'
            }
          },
          S4m: {
            type: 'list',
            member: {
              locationName: 'Suffix'
            }
          },
          S4o: {
            type: 'list',
            member: {
              shape: 'S2o',
              locationName: 'Tag'
            }
          },
          S4p: {
            type: 'structure',
            members: {
              DaysGreaterThan: {
                type: 'integer'
              },
              DaysLessThan: {
                type: 'integer'
              }
            }
          },
          S4r: {
            type: 'structure',
            members: {
              BytesGreaterThan: {
                type: 'long'
              },
              BytesLessThan: {
                type: 'long'
              }
            }
          },
          S5c: {
            type: 'structure',
            required: ['Name'],
            members: {
              Name: {}
            }
          },
          S5p: {
            type: 'structure',
            members: {
              TotalNumberOfTasks: {
                type: 'long'
              },
              NumberOfTasksSucceeded: {
                type: 'long'
              },
              NumberOfTasksFailed: {
                type: 'long'
              },
              Timers: {
                type: 'structure',
                members: {
                  ElapsedTimeInActiveSeconds: {
                    type: 'long'
                  }
                }
              }
            }
          },
          S6b: {
            type: 'structure',
            required: ['Name', 'Policy'],
            members: {
              Name: {},
              Policy: {}
            }
          },
          S7d: {
            type: 'structure',
            members: {
              IsPublic: {
                locationName: 'IsPublic',
                type: 'boolean'
              }
            }
          },
          S7m: {
            type: 'list',
            member: {
              locationName: 'Rule',
              type: 'structure',
              required: ['Status'],
              members: {
                Expiration: {
                  type: 'structure',
                  members: {
                    Date: {
                      type: 'timestamp'
                    },
                    Days: {
                      type: 'integer'
                    },
                    ExpiredObjectDeleteMarker: {
                      type: 'boolean'
                    }
                  }
                },
                ID: {},
                Filter: {
                  type: 'structure',
                  members: {
                    Prefix: {},
                    Tag: {
                      shape: 'S2o'
                    },
                    And: {
                      type: 'structure',
                      members: {
                        Prefix: {},
                        Tags: {
                          shape: 'S2n'
                        },
                        ObjectSizeGreaterThan: {
                          type: 'long'
                        },
                        ObjectSizeLessThan: {
                          type: 'long'
                        }
                      }
                    },
                    ObjectSizeGreaterThan: {
                      type: 'long'
                    },
                    ObjectSizeLessThan: {
                      type: 'long'
                    }
                  }
                },
                Status: {},
                Transitions: {
                  type: 'list',
                  member: {
                    locationName: 'Transition',
                    type: 'structure',
                    members: {
                      Date: {
                        type: 'timestamp'
                      },
                      Days: {
                        type: 'integer'
                      },
                      StorageClass: {}
                    }
                  }
                },
                NoncurrentVersionTransitions: {
                  type: 'list',
                  member: {
                    locationName: 'NoncurrentVersionTransition',
                    type: 'structure',
                    members: {
                      NoncurrentDays: {
                        type: 'integer'
                      },
                      StorageClass: {}
                    }
                  }
                },
                NoncurrentVersionExpiration: {
                  type: 'structure',
                  members: {
                    NoncurrentDays: {
                      type: 'integer'
                    },
                    NewerNoncurrentVersions: {
                      type: 'integer'
                    }
                  }
                },
                AbortIncompleteMultipartUpload: {
                  type: 'structure',
                  members: {
                    DaysAfterInitiation: {
                      type: 'integer'
                    }
                  }
                }
              }
            }
          },
          S89: {
            type: 'structure',
            required: ['Role', 'Rules'],
            members: {
              Role: {},
              Rules: {
                type: 'list',
                member: {
                  locationName: 'Rule',
                  type: 'structure',
                  required: ['Status', 'Destination', 'Bucket'],
                  members: {
                    ID: {},
                    Priority: {
                      type: 'integer'
                    },
                    Prefix: {
                      deprecated: true,
                      deprecatedMessage: 'Prefix has been deprecated'
                    },
                    Filter: {
                      type: 'structure',
                      members: {
                        Prefix: {},
                        Tag: {
                          shape: 'S2o'
                        },
                        And: {
                          type: 'structure',
                          members: {
                            Prefix: {},
                            Tags: {
                              shape: 'S2n'
                            }
                          }
                        }
                      }
                    },
                    Status: {},
                    SourceSelectionCriteria: {
                      type: 'structure',
                      members: {
                        SseKmsEncryptedObjects: {
                          type: 'structure',
                          required: ['Status'],
                          members: {
                            Status: {}
                          }
                        },
                        ReplicaModifications: {
                          type: 'structure',
                          required: ['Status'],
                          members: {
                            Status: {}
                          }
                        }
                      }
                    },
                    ExistingObjectReplication: {
                      type: 'structure',
                      required: ['Status'],
                      members: {
                        Status: {}
                      }
                    },
                    Destination: {
                      type: 'structure',
                      required: ['Bucket'],
                      members: {
                        Account: {},
                        Bucket: {},
                        ReplicationTime: {
                          type: 'structure',
                          required: ['Status', 'Time'],
                          members: {
                            Status: {},
                            Time: {
                              shape: 'S8s'
                            }
                          }
                        },
                        AccessControlTranslation: {
                          type: 'structure',
                          required: ['Owner'],
                          members: {
                            Owner: {}
                          }
                        },
                        EncryptionConfiguration: {
                          type: 'structure',
                          members: {
                            ReplicaKmsKeyID: {}
                          }
                        },
                        Metrics: {
                          type: 'structure',
                          required: ['Status'],
                          members: {
                            Status: {},
                            EventThreshold: {
                              shape: 'S8s'
                            }
                          }
                        },
                        StorageClass: {}
                      }
                    },
                    DeleteMarkerReplication: {
                      type: 'structure',
                      required: ['Status'],
                      members: {
                        Status: {}
                      }
                    },
                    Bucket: {}
                  }
                }
              }
            }
          },
          S8s: {
            type: 'structure',
            members: {
              Minutes: {
                type: 'integer'
              }
            }
          },
          S9m: {
            type: 'structure',
            members: {
              Name: {},
              Alias: {},
              CreatedAt: {
                type: 'timestamp'
              },
              PublicAccessBlock: {
                shape: 'Sz'
              },
              Status: {},
              Regions: {
                type: 'list',
                member: {
                  locationName: 'Region',
                  type: 'structure',
                  members: {
                    Bucket: {},
                    Region: {},
                    BucketAccountId: {}
                  }
                }
              }
            }
          },
          Sa1: {
            type: 'list',
            member: {
              locationName: 'Route',
              type: 'structure',
              required: ['TrafficDialPercentage'],
              members: {
                Bucket: {},
                Region: {},
                TrafficDialPercentage: {
                  type: 'integer'
                }
              }
            }
          },
          Sa8: {
            type: 'structure',
            required: ['Id', 'AccountLevel', 'IsEnabled'],
            members: {
              Id: {},
              AccountLevel: {
                type: 'structure',
                required: ['BucketLevel'],
                members: {
                  ActivityMetrics: {
                    shape: 'Saa'
                  },
                  BucketLevel: {
                    type: 'structure',
                    members: {
                      ActivityMetrics: {
                        shape: 'Saa'
                      },
                      PrefixLevel: {
                        type: 'structure',
                        required: ['StorageMetrics'],
                        members: {
                          StorageMetrics: {
                            type: 'structure',
                            members: {
                              IsEnabled: {
                                type: 'boolean'
                              },
                              SelectionCriteria: {
                                type: 'structure',
                                members: {
                                  Delimiter: {},
                                  MaxDepth: {
                                    type: 'integer'
                                  },
                                  MinStorageBytesPercentage: {
                                    type: 'double'
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      AdvancedCostOptimizationMetrics: {
                        shape: 'Saj'
                      },
                      AdvancedDataProtectionMetrics: {
                        shape: 'Sak'
                      },
                      DetailedStatusCodesMetrics: {
                        shape: 'Sal'
                      }
                    }
                  },
                  AdvancedCostOptimizationMetrics: {
                    shape: 'Saj'
                  },
                  AdvancedDataProtectionMetrics: {
                    shape: 'Sak'
                  },
                  DetailedStatusCodesMetrics: {
                    shape: 'Sal'
                  },
                  StorageLensGroupLevel: {
                    type: 'structure',
                    members: {
                      SelectionCriteria: {
                        type: 'structure',
                        members: {
                          Include: {
                            type: 'list',
                            member: {
                              locationName: 'Arn'
                            }
                          },
                          Exclude: {
                            type: 'list',
                            member: {
                              locationName: 'Arn'
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              Include: {
                type: 'structure',
                members: {
                  Buckets: {
                    shape: 'Sar'
                  },
                  Regions: {
                    shape: 'Sas'
                  }
                }
              },
              Exclude: {
                type: 'structure',
                members: {
                  Buckets: {
                    shape: 'Sar'
                  },
                  Regions: {
                    shape: 'Sas'
                  }
                }
              },
              DataExport: {
                type: 'structure',
                members: {
                  S3BucketDestination: {
                    type: 'structure',
                    required: ['Format', 'OutputSchemaVersion', 'AccountId', 'Arn'],
                    members: {
                      Format: {},
                      OutputSchemaVersion: {},
                      AccountId: {},
                      Arn: {},
                      Prefix: {},
                      Encryption: {
                        type: 'structure',
                        members: {
                          SSES3: {
                            locationName: 'SSE-S3',
                            type: 'structure',
                            members: {}
                          },
                          SSEKMS: {
                            locationName: 'SSE-KMS',
                            type: 'structure',
                            required: ['KeyId'],
                            members: {
                              KeyId: {}
                            }
                          }
                        }
                      }
                    }
                  },
                  CloudWatchMetrics: {
                    type: 'structure',
                    required: ['IsEnabled'],
                    members: {
                      IsEnabled: {
                        type: 'boolean'
                      }
                    }
                  }
                }
              },
              IsEnabled: {
                type: 'boolean'
              },
              AwsOrg: {
                type: 'structure',
                required: ['Arn'],
                members: {
                  Arn: {}
                }
              },
              StorageLensArn: {}
            }
          },
          Saa: {
            type: 'structure',
            members: {
              IsEnabled: {
                type: 'boolean'
              }
            }
          },
          Saj: {
            type: 'structure',
            members: {
              IsEnabled: {
                type: 'boolean'
              }
            }
          },
          Sak: {
            type: 'structure',
            members: {
              IsEnabled: {
                type: 'boolean'
              }
            }
          },
          Sal: {
            type: 'structure',
            members: {
              IsEnabled: {
                type: 'boolean'
              }
            }
          },
          Sar: {
            type: 'list',
            member: {
              locationName: 'Arn'
            }
          },
          Sas: {
            type: 'list',
            member: {
              locationName: 'Region'
            }
          },
          Sb9: {
            type: 'list',
            member: {
              locationName: 'Tag',
              type: 'structure',
              required: ['Key', 'Value'],
              members: {
                Key: {},
                Value: {}
              }
            }
          }
        },
        clientContextParams: {
          UseArnRegion: {
            documentation: 'Enables this client to use an ARN\'s region when constructing an endpoint instead of the client\'s configured region.',
            type: 'boolean'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=f99bd795581f7bcca236e0d1fd214a7a9ff1c83e.js.map