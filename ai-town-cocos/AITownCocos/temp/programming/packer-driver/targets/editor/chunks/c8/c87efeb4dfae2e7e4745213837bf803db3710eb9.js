System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2014-11-01',
          endpointPrefix: 'kms',
          jsonVersion: '1.1',
          protocol: 'json',
          protocols: ['json'],
          serviceAbbreviation: 'KMS',
          serviceFullName: 'AWS Key Management Service',
          serviceId: 'KMS',
          signatureVersion: 'v4',
          targetPrefix: 'TrentService',
          uid: 'kms-2014-11-01'
        },
        operations: {
          CancelKeyDeletion: {
            input: {
              type: 'structure',
              required: ['KeyId'],
              members: {
                KeyId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                KeyId: {}
              }
            }
          },
          ConnectCustomKeyStore: {
            input: {
              type: 'structure',
              required: ['CustomKeyStoreId'],
              members: {
                CustomKeyStoreId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          CreateAlias: {
            input: {
              type: 'structure',
              required: ['AliasName', 'TargetKeyId'],
              members: {
                AliasName: {},
                TargetKeyId: {}
              }
            }
          },
          CreateCustomKeyStore: {
            input: {
              type: 'structure',
              required: ['CustomKeyStoreName'],
              members: {
                CustomKeyStoreName: {},
                CloudHsmClusterId: {},
                TrustAnchorCertificate: {},
                KeyStorePassword: {
                  shape: 'Sd'
                },
                CustomKeyStoreType: {},
                XksProxyUriEndpoint: {},
                XksProxyUriPath: {},
                XksProxyVpcEndpointServiceName: {},
                XksProxyAuthenticationCredential: {
                  shape: 'Si'
                },
                XksProxyConnectivity: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                CustomKeyStoreId: {}
              }
            }
          },
          CreateGrant: {
            input: {
              type: 'structure',
              required: ['KeyId', 'GranteePrincipal', 'Operations'],
              members: {
                KeyId: {},
                GranteePrincipal: {},
                RetiringPrincipal: {},
                Operations: {
                  shape: 'Sp'
                },
                Constraints: {
                  shape: 'Sr'
                },
                GrantTokens: {
                  shape: 'Sv'
                },
                Name: {},
                DryRun: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                GrantToken: {},
                GrantId: {}
              }
            }
          },
          CreateKey: {
            input: {
              type: 'structure',
              members: {
                Policy: {},
                Description: {},
                KeyUsage: {},
                CustomerMasterKeySpec: {
                  shape: 'S15',
                  deprecated: true,
                  deprecatedMessage: 'This parameter has been deprecated. Instead, use the KeySpec parameter.'
                },
                KeySpec: {},
                Origin: {},
                CustomKeyStoreId: {},
                BypassPolicyLockoutSafetyCheck: {
                  type: 'boolean'
                },
                Tags: {
                  shape: 'S19'
                },
                MultiRegion: {
                  type: 'boolean'
                },
                XksKeyId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                KeyMetadata: {
                  shape: 'S1f'
                }
              }
            }
          },
          Decrypt: {
            input: {
              type: 'structure',
              required: ['CiphertextBlob'],
              members: {
                CiphertextBlob: {
                  type: 'blob'
                },
                EncryptionContext: {
                  shape: 'Ss'
                },
                GrantTokens: {
                  shape: 'Sv'
                },
                KeyId: {},
                EncryptionAlgorithm: {},
                Recipient: {
                  shape: 'S21'
                },
                DryRun: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                KeyId: {},
                Plaintext: {
                  shape: 'S25'
                },
                EncryptionAlgorithm: {},
                CiphertextForRecipient: {
                  type: 'blob'
                }
              }
            }
          },
          DeleteAlias: {
            input: {
              type: 'structure',
              required: ['AliasName'],
              members: {
                AliasName: {}
              }
            }
          },
          DeleteCustomKeyStore: {
            input: {
              type: 'structure',
              required: ['CustomKeyStoreId'],
              members: {
                CustomKeyStoreId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteImportedKeyMaterial: {
            input: {
              type: 'structure',
              required: ['KeyId'],
              members: {
                KeyId: {}
              }
            }
          },
          DescribeCustomKeyStores: {
            input: {
              type: 'structure',
              members: {
                CustomKeyStoreId: {},
                CustomKeyStoreName: {},
                Limit: {
                  type: 'integer'
                },
                Marker: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                CustomKeyStores: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      CustomKeyStoreId: {},
                      CustomKeyStoreName: {},
                      CloudHsmClusterId: {},
                      TrustAnchorCertificate: {},
                      ConnectionState: {},
                      ConnectionErrorCode: {},
                      CreationDate: {
                        type: 'timestamp'
                      },
                      CustomKeyStoreType: {},
                      XksProxyConfiguration: {
                        type: 'structure',
                        members: {
                          Connectivity: {},
                          AccessKeyId: {
                            shape: 'Sj'
                          },
                          UriEndpoint: {},
                          UriPath: {},
                          VpcEndpointServiceName: {}
                        }
                      }
                    }
                  }
                },
                NextMarker: {},
                Truncated: {
                  type: 'boolean'
                }
              }
            }
          },
          DescribeKey: {
            input: {
              type: 'structure',
              required: ['KeyId'],
              members: {
                KeyId: {},
                GrantTokens: {
                  shape: 'Sv'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                KeyMetadata: {
                  shape: 'S1f'
                }
              }
            }
          },
          DisableKey: {
            input: {
              type: 'structure',
              required: ['KeyId'],
              members: {
                KeyId: {}
              }
            }
          },
          DisableKeyRotation: {
            input: {
              type: 'structure',
              required: ['KeyId'],
              members: {
                KeyId: {}
              }
            }
          },
          DisconnectCustomKeyStore: {
            input: {
              type: 'structure',
              required: ['CustomKeyStoreId'],
              members: {
                CustomKeyStoreId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          EnableKey: {
            input: {
              type: 'structure',
              required: ['KeyId'],
              members: {
                KeyId: {}
              }
            }
          },
          EnableKeyRotation: {
            input: {
              type: 'structure',
              required: ['KeyId'],
              members: {
                KeyId: {},
                RotationPeriodInDays: {
                  type: 'integer'
                }
              }
            }
          },
          Encrypt: {
            input: {
              type: 'structure',
              required: ['KeyId', 'Plaintext'],
              members: {
                KeyId: {},
                Plaintext: {
                  shape: 'S25'
                },
                EncryptionContext: {
                  shape: 'Ss'
                },
                GrantTokens: {
                  shape: 'Sv'
                },
                EncryptionAlgorithm: {},
                DryRun: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                CiphertextBlob: {
                  type: 'blob'
                },
                KeyId: {},
                EncryptionAlgorithm: {}
              }
            }
          },
          GenerateDataKey: {
            input: {
              type: 'structure',
              required: ['KeyId'],
              members: {
                KeyId: {},
                EncryptionContext: {
                  shape: 'Ss'
                },
                NumberOfBytes: {
                  type: 'integer'
                },
                KeySpec: {},
                GrantTokens: {
                  shape: 'Sv'
                },
                Recipient: {
                  shape: 'S21'
                },
                DryRun: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                CiphertextBlob: {
                  type: 'blob'
                },
                Plaintext: {
                  shape: 'S25'
                },
                KeyId: {},
                CiphertextForRecipient: {
                  type: 'blob'
                }
              }
            }
          },
          GenerateDataKeyPair: {
            input: {
              type: 'structure',
              required: ['KeyId', 'KeyPairSpec'],
              members: {
                EncryptionContext: {
                  shape: 'Ss'
                },
                KeyId: {},
                KeyPairSpec: {},
                GrantTokens: {
                  shape: 'Sv'
                },
                Recipient: {
                  shape: 'S21'
                },
                DryRun: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                PrivateKeyCiphertextBlob: {
                  type: 'blob'
                },
                PrivateKeyPlaintext: {
                  shape: 'S25'
                },
                PublicKey: {
                  type: 'blob'
                },
                KeyId: {},
                KeyPairSpec: {},
                CiphertextForRecipient: {
                  type: 'blob'
                }
              }
            }
          },
          GenerateDataKeyPairWithoutPlaintext: {
            input: {
              type: 'structure',
              required: ['KeyId', 'KeyPairSpec'],
              members: {
                EncryptionContext: {
                  shape: 'Ss'
                },
                KeyId: {},
                KeyPairSpec: {},
                GrantTokens: {
                  shape: 'Sv'
                },
                DryRun: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                PrivateKeyCiphertextBlob: {
                  type: 'blob'
                },
                PublicKey: {
                  type: 'blob'
                },
                KeyId: {},
                KeyPairSpec: {}
              }
            }
          },
          GenerateDataKeyWithoutPlaintext: {
            input: {
              type: 'structure',
              required: ['KeyId'],
              members: {
                KeyId: {},
                EncryptionContext: {
                  shape: 'Ss'
                },
                KeySpec: {},
                NumberOfBytes: {
                  type: 'integer'
                },
                GrantTokens: {
                  shape: 'Sv'
                },
                DryRun: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                CiphertextBlob: {
                  type: 'blob'
                },
                KeyId: {}
              }
            }
          },
          GenerateMac: {
            input: {
              type: 'structure',
              required: ['Message', 'KeyId', 'MacAlgorithm'],
              members: {
                Message: {
                  shape: 'S25'
                },
                KeyId: {},
                MacAlgorithm: {},
                GrantTokens: {
                  shape: 'Sv'
                },
                DryRun: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Mac: {
                  type: 'blob'
                },
                MacAlgorithm: {},
                KeyId: {}
              }
            }
          },
          GenerateRandom: {
            input: {
              type: 'structure',
              members: {
                NumberOfBytes: {
                  type: 'integer'
                },
                CustomKeyStoreId: {},
                Recipient: {
                  shape: 'S21'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Plaintext: {
                  shape: 'S25'
                },
                CiphertextForRecipient: {
                  type: 'blob'
                }
              }
            }
          },
          GetKeyPolicy: {
            input: {
              type: 'structure',
              required: ['KeyId'],
              members: {
                KeyId: {},
                PolicyName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Policy: {},
                PolicyName: {}
              }
            }
          },
          GetKeyRotationStatus: {
            input: {
              type: 'structure',
              required: ['KeyId'],
              members: {
                KeyId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                KeyRotationEnabled: {
                  type: 'boolean'
                },
                KeyId: {},
                RotationPeriodInDays: {
                  type: 'integer'
                },
                NextRotationDate: {
                  type: 'timestamp'
                },
                OnDemandRotationStartDate: {
                  type: 'timestamp'
                }
              }
            }
          },
          GetParametersForImport: {
            input: {
              type: 'structure',
              required: ['KeyId', 'WrappingAlgorithm', 'WrappingKeySpec'],
              members: {
                KeyId: {},
                WrappingAlgorithm: {},
                WrappingKeySpec: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                KeyId: {},
                ImportToken: {
                  type: 'blob'
                },
                PublicKey: {
                  shape: 'S25'
                },
                ParametersValidTo: {
                  type: 'timestamp'
                }
              }
            }
          },
          GetPublicKey: {
            input: {
              type: 'structure',
              required: ['KeyId'],
              members: {
                KeyId: {},
                GrantTokens: {
                  shape: 'Sv'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                KeyId: {},
                PublicKey: {
                  type: 'blob'
                },
                CustomerMasterKeySpec: {
                  shape: 'S15',
                  deprecated: true,
                  deprecatedMessage: 'This field has been deprecated. Instead, use the KeySpec field.'
                },
                KeySpec: {},
                KeyUsage: {},
                EncryptionAlgorithms: {
                  shape: 'S1m'
                },
                SigningAlgorithms: {
                  shape: 'S1o'
                }
              }
            }
          },
          ImportKeyMaterial: {
            input: {
              type: 'structure',
              required: ['KeyId', 'ImportToken', 'EncryptedKeyMaterial'],
              members: {
                KeyId: {},
                ImportToken: {
                  type: 'blob'
                },
                EncryptedKeyMaterial: {
                  type: 'blob'
                },
                ValidTo: {
                  type: 'timestamp'
                },
                ExpirationModel: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          ListAliases: {
            input: {
              type: 'structure',
              members: {
                KeyId: {},
                Limit: {
                  type: 'integer'
                },
                Marker: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Aliases: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      AliasName: {},
                      AliasArn: {},
                      TargetKeyId: {},
                      CreationDate: {
                        type: 'timestamp'
                      },
                      LastUpdatedDate: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextMarker: {},
                Truncated: {
                  type: 'boolean'
                }
              }
            }
          },
          ListGrants: {
            input: {
              type: 'structure',
              required: ['KeyId'],
              members: {
                Limit: {
                  type: 'integer'
                },
                Marker: {},
                KeyId: {},
                GrantId: {},
                GranteePrincipal: {}
              }
            },
            output: {
              shape: 'S3s'
            }
          },
          ListKeyPolicies: {
            input: {
              type: 'structure',
              required: ['KeyId'],
              members: {
                KeyId: {},
                Limit: {
                  type: 'integer'
                },
                Marker: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                PolicyNames: {
                  type: 'list',
                  member: {}
                },
                NextMarker: {},
                Truncated: {
                  type: 'boolean'
                }
              }
            }
          },
          ListKeyRotations: {
            input: {
              type: 'structure',
              required: ['KeyId'],
              members: {
                KeyId: {},
                Limit: {
                  type: 'integer'
                },
                Marker: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Rotations: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      KeyId: {},
                      RotationDate: {
                        type: 'timestamp'
                      },
                      RotationType: {}
                    }
                  }
                },
                NextMarker: {},
                Truncated: {
                  type: 'boolean'
                }
              }
            }
          },
          ListKeys: {
            input: {
              type: 'structure',
              members: {
                Limit: {
                  type: 'integer'
                },
                Marker: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Keys: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      KeyId: {},
                      KeyArn: {}
                    }
                  }
                },
                NextMarker: {},
                Truncated: {
                  type: 'boolean'
                }
              }
            }
          },
          ListResourceTags: {
            input: {
              type: 'structure',
              required: ['KeyId'],
              members: {
                KeyId: {},
                Limit: {
                  type: 'integer'
                },
                Marker: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Tags: {
                  shape: 'S19'
                },
                NextMarker: {},
                Truncated: {
                  type: 'boolean'
                }
              }
            }
          },
          ListRetirableGrants: {
            input: {
              type: 'structure',
              required: ['RetiringPrincipal'],
              members: {
                Limit: {
                  type: 'integer'
                },
                Marker: {},
                RetiringPrincipal: {}
              }
            },
            output: {
              shape: 'S3s'
            }
          },
          PutKeyPolicy: {
            input: {
              type: 'structure',
              required: ['KeyId', 'Policy'],
              members: {
                KeyId: {},
                PolicyName: {},
                Policy: {},
                BypassPolicyLockoutSafetyCheck: {
                  type: 'boolean'
                }
              }
            }
          },
          ReEncrypt: {
            input: {
              type: 'structure',
              required: ['CiphertextBlob', 'DestinationKeyId'],
              members: {
                CiphertextBlob: {
                  type: 'blob'
                },
                SourceEncryptionContext: {
                  shape: 'Ss'
                },
                SourceKeyId: {},
                DestinationKeyId: {},
                DestinationEncryptionContext: {
                  shape: 'Ss'
                },
                SourceEncryptionAlgorithm: {},
                DestinationEncryptionAlgorithm: {},
                GrantTokens: {
                  shape: 'Sv'
                },
                DryRun: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                CiphertextBlob: {
                  type: 'blob'
                },
                SourceKeyId: {},
                KeyId: {},
                SourceEncryptionAlgorithm: {},
                DestinationEncryptionAlgorithm: {}
              }
            }
          },
          ReplicateKey: {
            input: {
              type: 'structure',
              required: ['KeyId', 'ReplicaRegion'],
              members: {
                KeyId: {},
                ReplicaRegion: {},
                Policy: {},
                BypassPolicyLockoutSafetyCheck: {
                  type: 'boolean'
                },
                Description: {},
                Tags: {
                  shape: 'S19'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ReplicaKeyMetadata: {
                  shape: 'S1f'
                },
                ReplicaPolicy: {},
                ReplicaTags: {
                  shape: 'S19'
                }
              }
            }
          },
          RetireGrant: {
            input: {
              type: 'structure',
              members: {
                GrantToken: {},
                KeyId: {},
                GrantId: {},
                DryRun: {
                  type: 'boolean'
                }
              }
            }
          },
          RevokeGrant: {
            input: {
              type: 'structure',
              required: ['KeyId', 'GrantId'],
              members: {
                KeyId: {},
                GrantId: {},
                DryRun: {
                  type: 'boolean'
                }
              }
            }
          },
          RotateKeyOnDemand: {
            input: {
              type: 'structure',
              required: ['KeyId'],
              members: {
                KeyId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                KeyId: {}
              }
            }
          },
          ScheduleKeyDeletion: {
            input: {
              type: 'structure',
              required: ['KeyId'],
              members: {
                KeyId: {},
                PendingWindowInDays: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                KeyId: {},
                DeletionDate: {
                  type: 'timestamp'
                },
                KeyState: {},
                PendingWindowInDays: {
                  type: 'integer'
                }
              }
            }
          },
          Sign: {
            input: {
              type: 'structure',
              required: ['KeyId', 'Message', 'SigningAlgorithm'],
              members: {
                KeyId: {},
                Message: {
                  shape: 'S25'
                },
                MessageType: {},
                GrantTokens: {
                  shape: 'Sv'
                },
                SigningAlgorithm: {},
                DryRun: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                KeyId: {},
                Signature: {
                  type: 'blob'
                },
                SigningAlgorithm: {}
              }
            }
          },
          TagResource: {
            input: {
              type: 'structure',
              required: ['KeyId', 'Tags'],
              members: {
                KeyId: {},
                Tags: {
                  shape: 'S19'
                }
              }
            }
          },
          UntagResource: {
            input: {
              type: 'structure',
              required: ['KeyId', 'TagKeys'],
              members: {
                KeyId: {},
                TagKeys: {
                  type: 'list',
                  member: {}
                }
              }
            }
          },
          UpdateAlias: {
            input: {
              type: 'structure',
              required: ['AliasName', 'TargetKeyId'],
              members: {
                AliasName: {},
                TargetKeyId: {}
              }
            }
          },
          UpdateCustomKeyStore: {
            input: {
              type: 'structure',
              required: ['CustomKeyStoreId'],
              members: {
                CustomKeyStoreId: {},
                NewCustomKeyStoreName: {},
                KeyStorePassword: {
                  shape: 'Sd'
                },
                CloudHsmClusterId: {},
                XksProxyUriEndpoint: {},
                XksProxyUriPath: {},
                XksProxyVpcEndpointServiceName: {},
                XksProxyAuthenticationCredential: {
                  shape: 'Si'
                },
                XksProxyConnectivity: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateKeyDescription: {
            input: {
              type: 'structure',
              required: ['KeyId', 'Description'],
              members: {
                KeyId: {},
                Description: {}
              }
            }
          },
          UpdatePrimaryRegion: {
            input: {
              type: 'structure',
              required: ['KeyId', 'PrimaryRegion'],
              members: {
                KeyId: {},
                PrimaryRegion: {}
              }
            }
          },
          Verify: {
            input: {
              type: 'structure',
              required: ['KeyId', 'Message', 'Signature', 'SigningAlgorithm'],
              members: {
                KeyId: {},
                Message: {
                  shape: 'S25'
                },
                MessageType: {},
                Signature: {
                  type: 'blob'
                },
                SigningAlgorithm: {},
                GrantTokens: {
                  shape: 'Sv'
                },
                DryRun: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                KeyId: {},
                SignatureValid: {
                  type: 'boolean'
                },
                SigningAlgorithm: {}
              }
            }
          },
          VerifyMac: {
            input: {
              type: 'structure',
              required: ['Message', 'KeyId', 'MacAlgorithm', 'Mac'],
              members: {
                Message: {
                  shape: 'S25'
                },
                KeyId: {},
                MacAlgorithm: {},
                Mac: {
                  type: 'blob'
                },
                GrantTokens: {
                  shape: 'Sv'
                },
                DryRun: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                KeyId: {},
                MacValid: {
                  type: 'boolean'
                },
                MacAlgorithm: {}
              }
            }
          }
        },
        shapes: {
          Sd: {
            type: 'string',
            sensitive: true
          },
          Si: {
            type: 'structure',
            required: ['AccessKeyId', 'RawSecretAccessKey'],
            members: {
              AccessKeyId: {
                shape: 'Sj'
              },
              RawSecretAccessKey: {
                type: 'string',
                sensitive: true
              }
            }
          },
          Sj: {
            type: 'string',
            sensitive: true
          },
          Sp: {
            type: 'list',
            member: {}
          },
          Sr: {
            type: 'structure',
            members: {
              EncryptionContextSubset: {
                shape: 'Ss'
              },
              EncryptionContextEquals: {
                shape: 'Ss'
              }
            }
          },
          Ss: {
            type: 'map',
            key: {},
            value: {}
          },
          Sv: {
            type: 'list',
            member: {}
          },
          S15: {
            type: 'string',
            deprecated: true,
            deprecatedMessage: 'This enum has been deprecated. Instead, use the KeySpec enum.'
          },
          S19: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['TagKey', 'TagValue'],
              members: {
                TagKey: {},
                TagValue: {}
              }
            }
          },
          S1f: {
            type: 'structure',
            required: ['KeyId'],
            members: {
              AWSAccountId: {},
              KeyId: {},
              Arn: {},
              CreationDate: {
                type: 'timestamp'
              },
              Enabled: {
                type: 'boolean'
              },
              Description: {},
              KeyUsage: {},
              KeyState: {},
              DeletionDate: {
                type: 'timestamp'
              },
              ValidTo: {
                type: 'timestamp'
              },
              Origin: {},
              CustomKeyStoreId: {},
              CloudHsmClusterId: {},
              ExpirationModel: {},
              KeyManager: {},
              CustomerMasterKeySpec: {
                shape: 'S15',
                deprecated: true,
                deprecatedMessage: 'This field has been deprecated. Instead, use the KeySpec field.'
              },
              KeySpec: {},
              EncryptionAlgorithms: {
                shape: 'S1m'
              },
              SigningAlgorithms: {
                shape: 'S1o'
              },
              MultiRegion: {
                type: 'boolean'
              },
              MultiRegionConfiguration: {
                type: 'structure',
                members: {
                  MultiRegionKeyType: {},
                  PrimaryKey: {
                    shape: 'S1s'
                  },
                  ReplicaKeys: {
                    type: 'list',
                    member: {
                      shape: 'S1s'
                    }
                  }
                }
              },
              PendingDeletionWindowInDays: {
                type: 'integer'
              },
              MacAlgorithms: {
                type: 'list',
                member: {}
              },
              XksKeyConfiguration: {
                type: 'structure',
                members: {
                  Id: {}
                }
              }
            }
          },
          S1m: {
            type: 'list',
            member: {}
          },
          S1o: {
            type: 'list',
            member: {}
          },
          S1s: {
            type: 'structure',
            members: {
              Arn: {},
              Region: {}
            }
          },
          S21: {
            type: 'structure',
            members: {
              KeyEncryptionAlgorithm: {},
              AttestationDocument: {
                type: 'blob'
              }
            }
          },
          S25: {
            type: 'blob',
            sensitive: true
          },
          S3s: {
            type: 'structure',
            members: {
              Grants: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    KeyId: {},
                    GrantId: {},
                    Name: {},
                    CreationDate: {
                      type: 'timestamp'
                    },
                    GranteePrincipal: {},
                    RetiringPrincipal: {},
                    IssuingAccount: {},
                    Operations: {
                      shape: 'Sp'
                    },
                    Constraints: {
                      shape: 'Sr'
                    }
                  }
                }
              },
              NextMarker: {},
              Truncated: {
                type: 'boolean'
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=c87efeb4dfae2e7e4745213837bf803db3710eb9.js.map