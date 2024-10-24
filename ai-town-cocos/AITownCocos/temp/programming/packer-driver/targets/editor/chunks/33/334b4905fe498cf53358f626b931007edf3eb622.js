System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2022-02-03',
          endpointPrefix: 'dataplane.payment-cryptography',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceFullName: 'Payment Cryptography Data Plane',
          serviceId: 'Payment Cryptography Data',
          signatureVersion: 'v4',
          signingName: 'payment-cryptography',
          uid: 'payment-cryptography-data-2022-02-03'
        },
        operations: {
          DecryptData: {
            http: {
              requestUri: '/keys/{KeyIdentifier}/decrypt',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['CipherText', 'DecryptionAttributes', 'KeyIdentifier'],
              members: {
                CipherText: {
                  shape: 'S2'
                },
                DecryptionAttributes: {
                  shape: 'S3'
                },
                KeyIdentifier: {
                  location: 'uri',
                  locationName: 'KeyIdentifier'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['KeyArn', 'KeyCheckValue', 'PlainText'],
              members: {
                KeyArn: {},
                KeyCheckValue: {},
                PlainText: {
                  shape: 'S2'
                }
              }
            }
          },
          EncryptData: {
            http: {
              requestUri: '/keys/{KeyIdentifier}/encrypt',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['EncryptionAttributes', 'KeyIdentifier', 'PlainText'],
              members: {
                EncryptionAttributes: {
                  shape: 'S3'
                },
                KeyIdentifier: {
                  location: 'uri',
                  locationName: 'KeyIdentifier'
                },
                PlainText: {
                  type: 'string',
                  sensitive: true
                }
              }
            },
            output: {
              type: 'structure',
              required: ['CipherText', 'KeyArn'],
              members: {
                CipherText: {
                  shape: 'S2'
                },
                KeyArn: {},
                KeyCheckValue: {}
              }
            }
          },
          GenerateCardValidationData: {
            http: {
              requestUri: '/cardvalidationdata/generate',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['GenerationAttributes', 'KeyIdentifier', 'PrimaryAccountNumber'],
              members: {
                GenerationAttributes: {
                  type: 'structure',
                  members: {
                    AmexCardSecurityCodeVersion1: {
                      shape: 'St'
                    },
                    AmexCardSecurityCodeVersion2: {
                      shape: 'Sv'
                    },
                    CardHolderVerificationValue: {
                      shape: 'Sx'
                    },
                    CardVerificationValue1: {
                      shape: 'S10'
                    },
                    CardVerificationValue2: {
                      shape: 'S11'
                    },
                    DynamicCardVerificationCode: {
                      shape: 'S12'
                    },
                    DynamicCardVerificationValue: {
                      shape: 'S14'
                    }
                  },
                  union: true
                },
                KeyIdentifier: {},
                PrimaryAccountNumber: {
                  shape: 'Sg'
                },
                ValidationDataLength: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['KeyArn', 'KeyCheckValue', 'ValidationData'],
              members: {
                KeyArn: {},
                KeyCheckValue: {},
                ValidationData: {}
              }
            }
          },
          GenerateMac: {
            http: {
              requestUri: '/mac/generate',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['GenerationAttributes', 'KeyIdentifier', 'MessageData'],
              members: {
                GenerationAttributes: {
                  shape: 'S19'
                },
                KeyIdentifier: {},
                MacLength: {
                  type: 'integer'
                },
                MessageData: {
                  shape: 'S1h'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['KeyArn', 'KeyCheckValue', 'Mac'],
              members: {
                KeyArn: {},
                KeyCheckValue: {},
                Mac: {}
              }
            }
          },
          GeneratePinData: {
            http: {
              requestUri: '/pindata/generate',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['EncryptionKeyIdentifier', 'GenerationAttributes', 'GenerationKeyIdentifier', 'PinBlockFormat', 'PrimaryAccountNumber'],
              members: {
                EncryptionKeyIdentifier: {},
                GenerationAttributes: {
                  type: 'structure',
                  members: {
                    Ibm3624NaturalPin: {
                      type: 'structure',
                      required: ['DecimalizationTable', 'PinValidationData', 'PinValidationDataPadCharacter'],
                      members: {
                        DecimalizationTable: {},
                        PinValidationData: {},
                        PinValidationDataPadCharacter: {}
                      }
                    },
                    Ibm3624PinFromOffset: {
                      type: 'structure',
                      required: ['DecimalizationTable', 'PinOffset', 'PinValidationData', 'PinValidationDataPadCharacter'],
                      members: {
                        DecimalizationTable: {},
                        PinOffset: {},
                        PinValidationData: {},
                        PinValidationDataPadCharacter: {}
                      }
                    },
                    Ibm3624PinOffset: {
                      type: 'structure',
                      required: ['DecimalizationTable', 'EncryptedPinBlock', 'PinValidationData', 'PinValidationDataPadCharacter'],
                      members: {
                        DecimalizationTable: {},
                        EncryptedPinBlock: {},
                        PinValidationData: {},
                        PinValidationDataPadCharacter: {}
                      }
                    },
                    Ibm3624RandomPin: {
                      type: 'structure',
                      required: ['DecimalizationTable', 'PinValidationData', 'PinValidationDataPadCharacter'],
                      members: {
                        DecimalizationTable: {},
                        PinValidationData: {},
                        PinValidationDataPadCharacter: {}
                      }
                    },
                    VisaPin: {
                      type: 'structure',
                      required: ['PinVerificationKeyIndex'],
                      members: {
                        PinVerificationKeyIndex: {
                          type: 'integer'
                        }
                      }
                    },
                    VisaPinVerificationValue: {
                      type: 'structure',
                      required: ['EncryptedPinBlock', 'PinVerificationKeyIndex'],
                      members: {
                        EncryptedPinBlock: {},
                        PinVerificationKeyIndex: {
                          type: 'integer'
                        }
                      }
                    }
                  },
                  union: true
                },
                GenerationKeyIdentifier: {},
                PinBlockFormat: {},
                PinDataLength: {
                  type: 'integer'
                },
                PrimaryAccountNumber: {
                  shape: 'Sg'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['EncryptedPinBlock', 'EncryptionKeyArn', 'EncryptionKeyCheckValue', 'GenerationKeyArn', 'GenerationKeyCheckValue', 'PinData'],
              members: {
                EncryptedPinBlock: {},
                EncryptionKeyArn: {},
                EncryptionKeyCheckValue: {},
                GenerationKeyArn: {},
                GenerationKeyCheckValue: {},
                PinData: {
                  type: 'structure',
                  members: {
                    PinOffset: {},
                    VerificationValue: {}
                  },
                  union: true
                }
              }
            }
          },
          ReEncryptData: {
            http: {
              requestUri: '/keys/{IncomingKeyIdentifier}/reencrypt',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['CipherText', 'IncomingEncryptionAttributes', 'IncomingKeyIdentifier', 'OutgoingEncryptionAttributes', 'OutgoingKeyIdentifier'],
              members: {
                CipherText: {
                  shape: 'S2'
                },
                IncomingEncryptionAttributes: {
                  shape: 'S23'
                },
                IncomingKeyIdentifier: {
                  location: 'uri',
                  locationName: 'IncomingKeyIdentifier'
                },
                OutgoingEncryptionAttributes: {
                  shape: 'S23'
                },
                OutgoingKeyIdentifier: {}
              }
            },
            output: {
              type: 'structure',
              required: ['CipherText', 'KeyArn', 'KeyCheckValue'],
              members: {
                CipherText: {
                  shape: 'S2'
                },
                KeyArn: {},
                KeyCheckValue: {}
              }
            }
          },
          TranslatePinData: {
            http: {
              requestUri: '/pindata/translate',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['EncryptedPinBlock', 'IncomingKeyIdentifier', 'IncomingTranslationAttributes', 'OutgoingKeyIdentifier', 'OutgoingTranslationAttributes'],
              members: {
                EncryptedPinBlock: {
                  type: 'string',
                  sensitive: true
                },
                IncomingDukptAttributes: {
                  shape: 'S27'
                },
                IncomingKeyIdentifier: {},
                IncomingTranslationAttributes: {
                  shape: 'S28'
                },
                OutgoingDukptAttributes: {
                  shape: 'S27'
                },
                OutgoingKeyIdentifier: {},
                OutgoingTranslationAttributes: {
                  shape: 'S28'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['KeyArn', 'KeyCheckValue', 'PinBlock'],
              members: {
                KeyArn: {},
                KeyCheckValue: {},
                PinBlock: {}
              }
            }
          },
          VerifyAuthRequestCryptogram: {
            http: {
              requestUri: '/cryptogram/verify',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['AuthRequestCryptogram', 'KeyIdentifier', 'MajorKeyDerivationMode', 'SessionKeyDerivationAttributes', 'TransactionData'],
              members: {
                AuthRequestCryptogram: {},
                AuthResponseAttributes: {
                  type: 'structure',
                  members: {
                    ArpcMethod1: {
                      type: 'structure',
                      required: ['AuthResponseCode'],
                      members: {
                        AuthResponseCode: {}
                      }
                    },
                    ArpcMethod2: {
                      type: 'structure',
                      required: ['CardStatusUpdate'],
                      members: {
                        CardStatusUpdate: {},
                        ProprietaryAuthenticationData: {}
                      }
                    }
                  },
                  union: true
                },
                KeyIdentifier: {},
                MajorKeyDerivationMode: {},
                SessionKeyDerivationAttributes: {
                  type: 'structure',
                  members: {
                    Amex: {
                      type: 'structure',
                      required: ['PanSequenceNumber', 'PrimaryAccountNumber'],
                      members: {
                        PanSequenceNumber: {},
                        PrimaryAccountNumber: {
                          shape: 'Sg'
                        }
                      }
                    },
                    Emv2000: {
                      type: 'structure',
                      required: ['ApplicationTransactionCounter', 'PanSequenceNumber', 'PrimaryAccountNumber'],
                      members: {
                        ApplicationTransactionCounter: {},
                        PanSequenceNumber: {},
                        PrimaryAccountNumber: {
                          shape: 'Sg'
                        }
                      }
                    },
                    EmvCommon: {
                      type: 'structure',
                      required: ['ApplicationTransactionCounter', 'PanSequenceNumber', 'PrimaryAccountNumber'],
                      members: {
                        ApplicationTransactionCounter: {},
                        PanSequenceNumber: {},
                        PrimaryAccountNumber: {
                          shape: 'Sg'
                        }
                      }
                    },
                    Mastercard: {
                      type: 'structure',
                      required: ['ApplicationTransactionCounter', 'PanSequenceNumber', 'PrimaryAccountNumber', 'UnpredictableNumber'],
                      members: {
                        ApplicationTransactionCounter: {},
                        PanSequenceNumber: {},
                        PrimaryAccountNumber: {
                          shape: 'Sg'
                        },
                        UnpredictableNumber: {}
                      }
                    },
                    Visa: {
                      type: 'structure',
                      required: ['PanSequenceNumber', 'PrimaryAccountNumber'],
                      members: {
                        PanSequenceNumber: {},
                        PrimaryAccountNumber: {
                          shape: 'Sg'
                        }
                      }
                    }
                  },
                  union: true
                },
                TransactionData: {}
              }
            },
            output: {
              type: 'structure',
              required: ['KeyArn', 'KeyCheckValue'],
              members: {
                AuthResponseValue: {},
                KeyArn: {},
                KeyCheckValue: {}
              }
            }
          },
          VerifyCardValidationData: {
            http: {
              requestUri: '/cardvalidationdata/verify',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['KeyIdentifier', 'PrimaryAccountNumber', 'ValidationData', 'VerificationAttributes'],
              members: {
                KeyIdentifier: {},
                PrimaryAccountNumber: {
                  shape: 'Sg'
                },
                ValidationData: {},
                VerificationAttributes: {
                  type: 'structure',
                  members: {
                    AmexCardSecurityCodeVersion1: {
                      shape: 'St'
                    },
                    AmexCardSecurityCodeVersion2: {
                      shape: 'Sv'
                    },
                    CardHolderVerificationValue: {
                      shape: 'Sx'
                    },
                    CardVerificationValue1: {
                      shape: 'S10'
                    },
                    CardVerificationValue2: {
                      shape: 'S11'
                    },
                    DiscoverDynamicCardVerificationCode: {
                      type: 'structure',
                      required: ['ApplicationTransactionCounter', 'CardExpiryDate', 'UnpredictableNumber'],
                      members: {
                        ApplicationTransactionCounter: {},
                        CardExpiryDate: {},
                        UnpredictableNumber: {}
                      }
                    },
                    DynamicCardVerificationCode: {
                      shape: 'S12'
                    },
                    DynamicCardVerificationValue: {
                      shape: 'S14'
                    }
                  },
                  union: true
                }
              }
            },
            output: {
              type: 'structure',
              required: ['KeyArn', 'KeyCheckValue'],
              members: {
                KeyArn: {},
                KeyCheckValue: {}
              }
            }
          },
          VerifyMac: {
            http: {
              requestUri: '/mac/verify',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['KeyIdentifier', 'Mac', 'MessageData', 'VerificationAttributes'],
              members: {
                KeyIdentifier: {},
                Mac: {
                  type: 'string',
                  sensitive: true
                },
                MacLength: {
                  type: 'integer'
                },
                MessageData: {
                  shape: 'S1h'
                },
                VerificationAttributes: {
                  shape: 'S19'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['KeyArn', 'KeyCheckValue'],
              members: {
                KeyArn: {},
                KeyCheckValue: {}
              }
            }
          },
          VerifyPinData: {
            http: {
              requestUri: '/pindata/verify',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['EncryptedPinBlock', 'EncryptionKeyIdentifier', 'PinBlockFormat', 'PrimaryAccountNumber', 'VerificationAttributes', 'VerificationKeyIdentifier'],
              members: {
                DukptAttributes: {
                  type: 'structure',
                  required: ['DukptDerivationType', 'KeySerialNumber'],
                  members: {
                    DukptDerivationType: {},
                    KeySerialNumber: {}
                  }
                },
                EncryptedPinBlock: {},
                EncryptionKeyIdentifier: {},
                PinBlockFormat: {},
                PinDataLength: {
                  type: 'integer'
                },
                PrimaryAccountNumber: {
                  shape: 'Sg'
                },
                VerificationAttributes: {
                  type: 'structure',
                  members: {
                    Ibm3624Pin: {
                      type: 'structure',
                      required: ['DecimalizationTable', 'PinOffset', 'PinValidationData', 'PinValidationDataPadCharacter'],
                      members: {
                        DecimalizationTable: {},
                        PinOffset: {},
                        PinValidationData: {},
                        PinValidationDataPadCharacter: {}
                      }
                    },
                    VisaPin: {
                      type: 'structure',
                      required: ['PinVerificationKeyIndex', 'VerificationValue'],
                      members: {
                        PinVerificationKeyIndex: {
                          type: 'integer'
                        },
                        VerificationValue: {}
                      }
                    }
                  },
                  union: true
                },
                VerificationKeyIdentifier: {}
              }
            },
            output: {
              type: 'structure',
              required: ['EncryptionKeyArn', 'EncryptionKeyCheckValue', 'VerificationKeyArn', 'VerificationKeyCheckValue'],
              members: {
                EncryptionKeyArn: {},
                EncryptionKeyCheckValue: {},
                VerificationKeyArn: {},
                VerificationKeyCheckValue: {}
              }
            }
          }
        },
        shapes: {
          S2: {
            type: 'string',
            sensitive: true
          },
          S3: {
            type: 'structure',
            members: {
              Asymmetric: {
                type: 'structure',
                members: {
                  PaddingType: {}
                }
              },
              Dukpt: {
                shape: 'S6'
              },
              Emv: {
                type: 'structure',
                required: ['MajorKeyDerivationMode', 'PanSequenceNumber', 'PrimaryAccountNumber', 'SessionDerivationData'],
                members: {
                  InitializationVector: {
                    shape: 'S9'
                  },
                  MajorKeyDerivationMode: {},
                  Mode: {},
                  PanSequenceNumber: {},
                  PrimaryAccountNumber: {
                    shape: 'Sg'
                  },
                  SessionDerivationData: {}
                }
              },
              Symmetric: {
                shape: 'Si'
              }
            },
            union: true
          },
          S6: {
            type: 'structure',
            required: ['KeySerialNumber'],
            members: {
              DukptKeyDerivationType: {},
              DukptKeyVariant: {},
              InitializationVector: {
                shape: 'S9'
              },
              KeySerialNumber: {},
              Mode: {}
            }
          },
          S9: {
            type: 'string',
            sensitive: true
          },
          Sg: {
            type: 'string',
            sensitive: true
          },
          Si: {
            type: 'structure',
            required: ['Mode'],
            members: {
              InitializationVector: {
                shape: 'S9'
              },
              Mode: {},
              PaddingType: {}
            }
          },
          St: {
            type: 'structure',
            required: ['CardExpiryDate'],
            members: {
              CardExpiryDate: {}
            }
          },
          Sv: {
            type: 'structure',
            required: ['CardExpiryDate', 'ServiceCode'],
            members: {
              CardExpiryDate: {},
              ServiceCode: {}
            }
          },
          Sx: {
            type: 'structure',
            required: ['ApplicationTransactionCounter', 'PanSequenceNumber', 'UnpredictableNumber'],
            members: {
              ApplicationTransactionCounter: {},
              PanSequenceNumber: {},
              UnpredictableNumber: {}
            }
          },
          S10: {
            type: 'structure',
            required: ['CardExpiryDate', 'ServiceCode'],
            members: {
              CardExpiryDate: {},
              ServiceCode: {}
            }
          },
          S11: {
            type: 'structure',
            required: ['CardExpiryDate'],
            members: {
              CardExpiryDate: {}
            }
          },
          S12: {
            type: 'structure',
            required: ['ApplicationTransactionCounter', 'PanSequenceNumber', 'TrackData', 'UnpredictableNumber'],
            members: {
              ApplicationTransactionCounter: {},
              PanSequenceNumber: {},
              TrackData: {},
              UnpredictableNumber: {}
            }
          },
          S14: {
            type: 'structure',
            required: ['ApplicationTransactionCounter', 'CardExpiryDate', 'PanSequenceNumber', 'ServiceCode'],
            members: {
              ApplicationTransactionCounter: {},
              CardExpiryDate: {},
              PanSequenceNumber: {},
              ServiceCode: {}
            }
          },
          S19: {
            type: 'structure',
            members: {
              Algorithm: {},
              DukptCmac: {
                shape: 'S1b'
              },
              DukptIso9797Algorithm1: {
                shape: 'S1b'
              },
              DukptIso9797Algorithm3: {
                shape: 'S1b'
              },
              EmvMac: {
                type: 'structure',
                required: ['MajorKeyDerivationMode', 'PanSequenceNumber', 'PrimaryAccountNumber', 'SessionKeyDerivationMode', 'SessionKeyDerivationValue'],
                members: {
                  MajorKeyDerivationMode: {},
                  PanSequenceNumber: {},
                  PrimaryAccountNumber: {
                    shape: 'Sg'
                  },
                  SessionKeyDerivationMode: {},
                  SessionKeyDerivationValue: {
                    type: 'structure',
                    members: {
                      ApplicationCryptogram: {},
                      ApplicationTransactionCounter: {}
                    },
                    union: true
                  }
                }
              }
            },
            union: true
          },
          S1b: {
            type: 'structure',
            required: ['DukptKeyVariant', 'KeySerialNumber'],
            members: {
              DukptDerivationType: {},
              DukptKeyVariant: {},
              KeySerialNumber: {}
            }
          },
          S1h: {
            type: 'string',
            sensitive: true
          },
          S23: {
            type: 'structure',
            members: {
              Dukpt: {
                shape: 'S6'
              },
              Symmetric: {
                shape: 'Si'
              }
            },
            union: true
          },
          S27: {
            type: 'structure',
            required: ['KeySerialNumber'],
            members: {
              DukptKeyDerivationType: {},
              DukptKeyVariant: {},
              KeySerialNumber: {}
            }
          },
          S28: {
            type: 'structure',
            members: {
              IsoFormat0: {
                shape: 'S29'
              },
              IsoFormat1: {
                type: 'structure',
                members: {}
              },
              IsoFormat3: {
                shape: 'S29'
              },
              IsoFormat4: {
                shape: 'S29'
              }
            },
            union: true
          },
          S29: {
            type: 'structure',
            required: ['PrimaryAccountNumber'],
            members: {
              PrimaryAccountNumber: {
                shape: 'Sg'
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=334b4905fe498cf53358f626b931007edf3eb622.js.map