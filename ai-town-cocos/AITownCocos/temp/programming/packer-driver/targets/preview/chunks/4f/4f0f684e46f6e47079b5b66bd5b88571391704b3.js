System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2021-09-14',
          endpointPrefix: 'controlplane.payment-cryptography',
          jsonVersion: '1.0',
          protocol: 'json',
          serviceFullName: 'Payment Cryptography Control Plane',
          serviceId: 'Payment Cryptography',
          signatureVersion: 'v4',
          signingName: 'payment-cryptography',
          targetPrefix: 'PaymentCryptographyControlPlane',
          uid: 'payment-cryptography-2021-09-14'
        },
        operations: {
          CreateAlias: {
            input: {
              type: 'structure',
              required: ['AliasName'],
              members: {
                AliasName: {},
                KeyArn: {}
              }
            },
            output: {
              type: 'structure',
              required: ['Alias'],
              members: {
                Alias: {
                  shape: 'S5'
                }
              }
            },
            idempotent: true
          },
          CreateKey: {
            input: {
              type: 'structure',
              required: ['KeyAttributes', 'Exportable'],
              members: {
                KeyAttributes: {
                  shape: 'S7'
                },
                KeyCheckValueAlgorithm: {},
                Exportable: {
                  type: 'boolean'
                },
                Enabled: {
                  type: 'boolean'
                },
                Tags: {
                  shape: 'Sf'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Key'],
              members: {
                Key: {
                  shape: 'Sk'
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
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeleteKey: {
            input: {
              type: 'structure',
              required: ['KeyIdentifier'],
              members: {
                KeyIdentifier: {},
                DeleteKeyInDays: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Key'],
              members: {
                Key: {
                  shape: 'Sk'
                }
              }
            },
            idempotent: true
          },
          ExportKey: {
            input: {
              type: 'structure',
              required: ['KeyMaterial', 'ExportKeyIdentifier'],
              members: {
                KeyMaterial: {
                  type: 'structure',
                  members: {
                    Tr31KeyBlock: {
                      type: 'structure',
                      required: ['WrappingKeyIdentifier'],
                      members: {
                        WrappingKeyIdentifier: {},
                        KeyBlockHeaders: {
                          shape: 'Sy'
                        }
                      }
                    },
                    Tr34KeyBlock: {
                      type: 'structure',
                      required: ['CertificateAuthorityPublicKeyIdentifier', 'WrappingKeyCertificate', 'ExportToken', 'KeyBlockFormat'],
                      members: {
                        CertificateAuthorityPublicKeyIdentifier: {},
                        WrappingKeyCertificate: {
                          shape: 'S15'
                        },
                        ExportToken: {},
                        KeyBlockFormat: {},
                        RandomNonce: {},
                        KeyBlockHeaders: {
                          shape: 'Sy'
                        }
                      }
                    },
                    KeyCryptogram: {
                      type: 'structure',
                      required: ['CertificateAuthorityPublicKeyIdentifier', 'WrappingKeyCertificate'],
                      members: {
                        CertificateAuthorityPublicKeyIdentifier: {},
                        WrappingKeyCertificate: {
                          shape: 'S15'
                        },
                        WrappingSpec: {}
                      }
                    }
                  },
                  union: true
                },
                ExportKeyIdentifier: {},
                ExportAttributes: {
                  type: 'structure',
                  members: {
                    ExportDukptInitialKey: {
                      type: 'structure',
                      required: ['KeySerialNumber'],
                      members: {
                        KeySerialNumber: {}
                      }
                    },
                    KeyCheckValueAlgorithm: {}
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                WrappedKey: {
                  type: 'structure',
                  required: ['WrappingKeyArn', 'WrappedKeyMaterialFormat', 'KeyMaterial'],
                  members: {
                    WrappingKeyArn: {},
                    WrappedKeyMaterialFormat: {},
                    KeyMaterial: {
                      type: 'string',
                      sensitive: true
                    },
                    KeyCheckValue: {},
                    KeyCheckValueAlgorithm: {}
                  }
                }
              }
            }
          },
          GetAlias: {
            input: {
              type: 'structure',
              required: ['AliasName'],
              members: {
                AliasName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['Alias'],
              members: {
                Alias: {
                  shape: 'S5'
                }
              }
            }
          },
          GetKey: {
            input: {
              type: 'structure',
              required: ['KeyIdentifier'],
              members: {
                KeyIdentifier: {}
              }
            },
            output: {
              type: 'structure',
              required: ['Key'],
              members: {
                Key: {
                  shape: 'Sk'
                }
              }
            }
          },
          GetParametersForExport: {
            input: {
              type: 'structure',
              required: ['KeyMaterialType', 'SigningKeyAlgorithm'],
              members: {
                KeyMaterialType: {},
                SigningKeyAlgorithm: {}
              }
            },
            output: {
              type: 'structure',
              required: ['SigningKeyCertificate', 'SigningKeyCertificateChain', 'SigningKeyAlgorithm', 'ExportToken', 'ParametersValidUntilTimestamp'],
              members: {
                SigningKeyCertificate: {
                  shape: 'S15'
                },
                SigningKeyCertificateChain: {
                  shape: 'S15'
                },
                SigningKeyAlgorithm: {},
                ExportToken: {},
                ParametersValidUntilTimestamp: {
                  type: 'timestamp'
                }
              }
            }
          },
          GetParametersForImport: {
            input: {
              type: 'structure',
              required: ['KeyMaterialType', 'WrappingKeyAlgorithm'],
              members: {
                KeyMaterialType: {},
                WrappingKeyAlgorithm: {}
              }
            },
            output: {
              type: 'structure',
              required: ['WrappingKeyCertificate', 'WrappingKeyCertificateChain', 'WrappingKeyAlgorithm', 'ImportToken', 'ParametersValidUntilTimestamp'],
              members: {
                WrappingKeyCertificate: {
                  shape: 'S15'
                },
                WrappingKeyCertificateChain: {
                  shape: 'S15'
                },
                WrappingKeyAlgorithm: {},
                ImportToken: {},
                ParametersValidUntilTimestamp: {
                  type: 'timestamp'
                }
              }
            }
          },
          GetPublicKeyCertificate: {
            input: {
              type: 'structure',
              required: ['KeyIdentifier'],
              members: {
                KeyIdentifier: {}
              }
            },
            output: {
              type: 'structure',
              required: ['KeyCertificate', 'KeyCertificateChain'],
              members: {
                KeyCertificate: {
                  shape: 'S15'
                },
                KeyCertificateChain: {
                  shape: 'S15'
                }
              }
            }
          },
          ImportKey: {
            input: {
              type: 'structure',
              required: ['KeyMaterial'],
              members: {
                KeyMaterial: {
                  type: 'structure',
                  members: {
                    RootCertificatePublicKey: {
                      type: 'structure',
                      required: ['KeyAttributes', 'PublicKeyCertificate'],
                      members: {
                        KeyAttributes: {
                          shape: 'S7'
                        },
                        PublicKeyCertificate: {
                          shape: 'S15'
                        }
                      }
                    },
                    TrustedCertificatePublicKey: {
                      type: 'structure',
                      required: ['KeyAttributes', 'PublicKeyCertificate', 'CertificateAuthorityPublicKeyIdentifier'],
                      members: {
                        KeyAttributes: {
                          shape: 'S7'
                        },
                        PublicKeyCertificate: {
                          shape: 'S15'
                        },
                        CertificateAuthorityPublicKeyIdentifier: {}
                      }
                    },
                    Tr31KeyBlock: {
                      type: 'structure',
                      required: ['WrappingKeyIdentifier', 'WrappedKeyBlock'],
                      members: {
                        WrappingKeyIdentifier: {},
                        WrappedKeyBlock: {}
                      }
                    },
                    Tr34KeyBlock: {
                      type: 'structure',
                      required: ['CertificateAuthorityPublicKeyIdentifier', 'SigningKeyCertificate', 'ImportToken', 'WrappedKeyBlock', 'KeyBlockFormat'],
                      members: {
                        CertificateAuthorityPublicKeyIdentifier: {},
                        SigningKeyCertificate: {
                          shape: 'S15'
                        },
                        ImportToken: {},
                        WrappedKeyBlock: {},
                        KeyBlockFormat: {},
                        RandomNonce: {}
                      }
                    },
                    KeyCryptogram: {
                      type: 'structure',
                      required: ['KeyAttributes', 'Exportable', 'WrappedKeyCryptogram', 'ImportToken'],
                      members: {
                        KeyAttributes: {
                          shape: 'S7'
                        },
                        Exportable: {
                          type: 'boolean'
                        },
                        WrappedKeyCryptogram: {},
                        ImportToken: {},
                        WrappingSpec: {}
                      }
                    }
                  },
                  union: true
                },
                KeyCheckValueAlgorithm: {},
                Enabled: {
                  type: 'boolean'
                },
                Tags: {
                  shape: 'Sf'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Key'],
              members: {
                Key: {
                  shape: 'Sk'
                }
              }
            }
          },
          ListAliases: {
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
              required: ['Aliases'],
              members: {
                Aliases: {
                  type: 'list',
                  member: {
                    shape: 'S5'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListKeys: {
            input: {
              type: 'structure',
              members: {
                KeyState: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Keys'],
              members: {
                Keys: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['KeyArn', 'KeyState', 'KeyAttributes', 'KeyCheckValue', 'Exportable', 'Enabled'],
                    members: {
                      KeyArn: {},
                      KeyState: {},
                      KeyAttributes: {
                        shape: 'S7'
                      },
                      KeyCheckValue: {},
                      Exportable: {
                        type: 'boolean'
                      },
                      Enabled: {
                        type: 'boolean'
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
              required: ['ResourceArn'],
              members: {
                ResourceArn: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Tags'],
              members: {
                Tags: {
                  shape: 'Sf'
                },
                NextToken: {}
              }
            }
          },
          RestoreKey: {
            input: {
              type: 'structure',
              required: ['KeyIdentifier'],
              members: {
                KeyIdentifier: {}
              }
            },
            output: {
              type: 'structure',
              required: ['Key'],
              members: {
                Key: {
                  shape: 'Sk'
                }
              }
            }
          },
          StartKeyUsage: {
            input: {
              type: 'structure',
              required: ['KeyIdentifier'],
              members: {
                KeyIdentifier: {}
              }
            },
            output: {
              type: 'structure',
              required: ['Key'],
              members: {
                Key: {
                  shape: 'Sk'
                }
              }
            }
          },
          StopKeyUsage: {
            input: {
              type: 'structure',
              required: ['KeyIdentifier'],
              members: {
                KeyIdentifier: {}
              }
            },
            output: {
              type: 'structure',
              required: ['Key'],
              members: {
                Key: {
                  shape: 'Sk'
                }
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
                  shape: 'Sf'
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
          UpdateAlias: {
            input: {
              type: 'structure',
              required: ['AliasName'],
              members: {
                AliasName: {},
                KeyArn: {}
              }
            },
            output: {
              type: 'structure',
              required: ['Alias'],
              members: {
                Alias: {
                  shape: 'S5'
                }
              }
            }
          }
        },
        shapes: {
          S5: {
            type: 'structure',
            required: ['AliasName'],
            members: {
              AliasName: {},
              KeyArn: {}
            }
          },
          S7: {
            type: 'structure',
            required: ['KeyUsage', 'KeyClass', 'KeyAlgorithm', 'KeyModesOfUse'],
            members: {
              KeyUsage: {},
              KeyClass: {},
              KeyAlgorithm: {},
              KeyModesOfUse: {
                shape: 'Sb'
              }
            }
          },
          Sb: {
            type: 'structure',
            members: {
              Encrypt: {
                type: 'boolean'
              },
              Decrypt: {
                type: 'boolean'
              },
              Wrap: {
                type: 'boolean'
              },
              Unwrap: {
                type: 'boolean'
              },
              Generate: {
                type: 'boolean'
              },
              Sign: {
                type: 'boolean'
              },
              Verify: {
                type: 'boolean'
              },
              DeriveKey: {
                type: 'boolean'
              },
              NoRestrictions: {
                type: 'boolean'
              }
            }
          },
          Sf: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Key'],
              members: {
                Key: {},
                Value: {}
              }
            }
          },
          Sk: {
            type: 'structure',
            required: ['KeyArn', 'KeyAttributes', 'KeyCheckValue', 'KeyCheckValueAlgorithm', 'Enabled', 'Exportable', 'KeyState', 'KeyOrigin', 'CreateTimestamp'],
            members: {
              KeyArn: {},
              KeyAttributes: {
                shape: 'S7'
              },
              KeyCheckValue: {},
              KeyCheckValueAlgorithm: {},
              Enabled: {
                type: 'boolean'
              },
              Exportable: {
                type: 'boolean'
              },
              KeyState: {},
              KeyOrigin: {},
              CreateTimestamp: {
                type: 'timestamp'
              },
              UsageStartTimestamp: {
                type: 'timestamp'
              },
              UsageStopTimestamp: {
                type: 'timestamp'
              },
              DeletePendingTimestamp: {
                type: 'timestamp'
              },
              DeleteTimestamp: {
                type: 'timestamp'
              }
            }
          },
          Sy: {
            type: 'structure',
            members: {
              KeyModesOfUse: {
                shape: 'Sb'
              },
              KeyExportability: {},
              KeyVersion: {},
              OptionalBlocks: {
                type: 'map',
                key: {
                  type: 'string',
                  sensitive: true
                },
                value: {
                  type: 'string',
                  sensitive: true
                }
              }
            }
          },
          S15: {
            type: 'string',
            sensitive: true
          }
        }
      });
    }
  };
});
//# sourceMappingURL=4f0f684e46f6e47079b5b66bd5b88571391704b3.js.map