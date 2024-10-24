System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2018-05-10',
          endpointPrefix: 'tax',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          protocols: ['rest-json'],
          serviceFullName: 'Tax Settings',
          serviceId: 'TaxSettings',
          signatureVersion: 'v4',
          signingName: 'tax',
          uid: 'taxsettings-2018-05-10'
        },
        operations: {
          BatchDeleteTaxRegistration: {
            http: {
              requestUri: '/BatchDeleteTaxRegistration',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['accountIds'],
              members: {
                accountIds: {
                  shape: 'S2'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['errors'],
              members: {
                errors: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['accountId', 'message'],
                    members: {
                      accountId: {},
                      code: {},
                      message: {
                        shape: 'S8'
                      }
                    }
                  }
                }
              }
            }
          },
          BatchPutTaxRegistration: {
            http: {
              requestUri: '/BatchPutTaxRegistration',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['accountIds', 'taxRegistrationEntry'],
              members: {
                accountIds: {
                  shape: 'S2'
                },
                taxRegistrationEntry: {
                  shape: 'Sa'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['errors'],
              members: {
                errors: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['accountId', 'message'],
                    members: {
                      accountId: {},
                      code: {},
                      message: {
                        shape: 'S8'
                      }
                    }
                  }
                },
                status: {}
              }
            }
          },
          DeleteTaxRegistration: {
            http: {
              requestUri: '/DeleteTaxRegistration',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                accountId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          GetTaxRegistration: {
            http: {
              requestUri: '/GetTaxRegistration',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                accountId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                taxRegistration: {
                  type: 'structure',
                  required: ['legalAddress', 'legalName', 'registrationId', 'registrationType', 'status'],
                  members: {
                    additionalTaxInformation: {
                      shape: 'S2a'
                    },
                    certifiedEmailId: {},
                    legalAddress: {
                      shape: 'S1h'
                    },
                    legalName: {},
                    registrationId: {},
                    registrationType: {},
                    sector: {},
                    status: {},
                    taxDocumentMetadatas: {
                      shape: 'S2g'
                    }
                  },
                  sensitive: true
                }
              }
            }
          },
          GetTaxRegistrationDocument: {
            http: {
              requestUri: '/GetTaxRegistrationDocument',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['destinationS3Location', 'taxDocumentMetadata'],
              members: {
                destinationS3Location: {
                  type: 'structure',
                  required: ['bucket'],
                  members: {
                    bucket: {},
                    prefix: {}
                  }
                },
                taxDocumentMetadata: {
                  shape: 'S2h'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                destinationFilePath: {}
              }
            }
          },
          ListTaxRegistrations: {
            http: {
              requestUri: '/ListTaxRegistrations',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                maxResults: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              required: ['accountDetails'],
              members: {
                accountDetails: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      accountId: {},
                      accountMetaData: {
                        type: 'structure',
                        members: {
                          accountName: {},
                          address: {
                            shape: 'S1h'
                          },
                          addressRoleMap: {
                            type: 'map',
                            key: {},
                            value: {
                              shape: 'S2z'
                            }
                          },
                          addressType: {},
                          seller: {}
                        },
                        sensitive: true
                      },
                      taxInheritanceDetails: {
                        type: 'structure',
                        members: {
                          inheritanceObtainedReason: {},
                          parentEntityId: {}
                        }
                      },
                      taxRegistration: {
                        type: 'structure',
                        required: ['jurisdiction', 'legalName', 'registrationId', 'registrationType', 'status'],
                        members: {
                          additionalTaxInformation: {
                            shape: 'S2a'
                          },
                          certifiedEmailId: {},
                          jurisdiction: {
                            shape: 'S2z'
                          },
                          legalName: {},
                          registrationId: {},
                          registrationType: {},
                          sector: {},
                          status: {},
                          taxDocumentMetadatas: {
                            shape: 'S2g'
                          }
                        },
                        sensitive: true
                      }
                    },
                    sensitive: true
                  }
                },
                nextToken: {}
              }
            }
          },
          PutTaxRegistration: {
            http: {
              requestUri: '/PutTaxRegistration',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['taxRegistrationEntry'],
              members: {
                accountId: {},
                taxRegistrationEntry: {
                  shape: 'Sa'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                status: {}
              }
            }
          }
        },
        shapes: {
          S2: {
            type: 'list',
            member: {}
          },
          S8: {
            type: 'string',
            sensitive: true
          },
          Sa: {
            type: 'structure',
            required: ['registrationId', 'registrationType'],
            members: {
              additionalTaxInformation: {
                type: 'structure',
                members: {
                  canadaAdditionalInfo: {
                    shape: 'Sc'
                  },
                  estoniaAdditionalInfo: {
                    shape: 'Sh'
                  },
                  georgiaAdditionalInfo: {
                    shape: 'Sj'
                  },
                  israelAdditionalInfo: {
                    shape: 'Sl'
                  },
                  italyAdditionalInfo: {
                    shape: 'So'
                  },
                  kenyaAdditionalInfo: {
                    shape: 'St'
                  },
                  malaysiaAdditionalInfo: {
                    shape: 'Su'
                  },
                  polandAdditionalInfo: {
                    shape: 'Sx'
                  },
                  romaniaAdditionalInfo: {
                    shape: 'Sz'
                  },
                  saudiArabiaAdditionalInfo: {
                    shape: 'S11'
                  },
                  southKoreaAdditionalInfo: {
                    shape: 'S13'
                  },
                  spainAdditionalInfo: {
                    shape: 'S17'
                  },
                  turkeyAdditionalInfo: {
                    shape: 'S19'
                  },
                  ukraineAdditionalInfo: {
                    shape: 'S1e'
                  }
                }
              },
              certifiedEmailId: {},
              legalAddress: {
                shape: 'S1h'
              },
              legalName: {},
              registrationId: {},
              registrationType: {},
              sector: {},
              verificationDetails: {
                type: 'structure',
                members: {
                  dateOfBirth: {},
                  taxRegistrationDocuments: {
                    type: 'list',
                    member: {
                      type: 'structure',
                      required: ['s3Location'],
                      members: {
                        s3Location: {
                          type: 'structure',
                          required: ['bucket', 'key'],
                          members: {
                            bucket: {},
                            key: {}
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            sensitive: true
          },
          Sc: {
            type: 'structure',
            members: {
              canadaQuebecSalesTaxNumber: {},
              canadaRetailSalesTaxNumber: {},
              isResellerAccount: {
                type: 'boolean'
              },
              provincialSalesTaxId: {}
            }
          },
          Sh: {
            type: 'structure',
            required: ['registryCommercialCode'],
            members: {
              registryCommercialCode: {}
            }
          },
          Sj: {
            type: 'structure',
            required: ['personType'],
            members: {
              personType: {}
            }
          },
          Sl: {
            type: 'structure',
            required: ['customerType', 'dealerType'],
            members: {
              customerType: {},
              dealerType: {}
            }
          },
          So: {
            type: 'structure',
            members: {
              cigNumber: {},
              cupNumber: {},
              sdiAccountId: {},
              taxCode: {}
            }
          },
          St: {
            type: 'structure',
            required: ['personType'],
            members: {
              personType: {}
            }
          },
          Su: {
            type: 'structure',
            required: ['serviceTaxCodes'],
            members: {
              serviceTaxCodes: {
                type: 'list',
                member: {}
              }
            }
          },
          Sx: {
            type: 'structure',
            members: {
              individualRegistrationNumber: {},
              isGroupVatEnabled: {
                type: 'boolean'
              }
            }
          },
          Sz: {
            type: 'structure',
            required: ['taxRegistrationNumberType'],
            members: {
              taxRegistrationNumberType: {}
            }
          },
          S11: {
            type: 'structure',
            members: {
              taxRegistrationNumberType: {}
            }
          },
          S13: {
            type: 'structure',
            required: ['businessRepresentativeName', 'itemOfBusiness', 'lineOfBusiness'],
            members: {
              businessRepresentativeName: {},
              itemOfBusiness: {},
              lineOfBusiness: {}
            }
          },
          S17: {
            type: 'structure',
            required: ['registrationType'],
            members: {
              registrationType: {}
            }
          },
          S19: {
            type: 'structure',
            members: {
              industries: {},
              kepEmailId: {},
              secondaryTaxId: {},
              taxOffice: {}
            }
          },
          S1e: {
            type: 'structure',
            required: ['ukraineTrnType'],
            members: {
              ukraineTrnType: {}
            }
          },
          S1h: {
            type: 'structure',
            required: ['addressLine1', 'city', 'countryCode', 'postalCode'],
            members: {
              addressLine1: {},
              addressLine2: {},
              addressLine3: {},
              city: {},
              countryCode: {},
              districtOrCounty: {},
              postalCode: {},
              stateOrRegion: {}
            }
          },
          S2a: {
            type: 'structure',
            members: {
              brazilAdditionalInfo: {
                type: 'structure',
                members: {
                  ccmCode: {},
                  legalNatureCode: {}
                }
              },
              canadaAdditionalInfo: {
                shape: 'Sc'
              },
              estoniaAdditionalInfo: {
                shape: 'Sh'
              },
              georgiaAdditionalInfo: {
                shape: 'Sj'
              },
              indiaAdditionalInfo: {
                type: 'structure',
                members: {
                  pan: {}
                }
              },
              israelAdditionalInfo: {
                shape: 'Sl'
              },
              italyAdditionalInfo: {
                shape: 'So'
              },
              kenyaAdditionalInfo: {
                shape: 'St'
              },
              malaysiaAdditionalInfo: {
                shape: 'Su'
              },
              polandAdditionalInfo: {
                shape: 'Sx'
              },
              romaniaAdditionalInfo: {
                shape: 'Sz'
              },
              saudiArabiaAdditionalInfo: {
                shape: 'S11'
              },
              southKoreaAdditionalInfo: {
                shape: 'S13'
              },
              spainAdditionalInfo: {
                shape: 'S17'
              },
              turkeyAdditionalInfo: {
                shape: 'S19'
              },
              ukraineAdditionalInfo: {
                shape: 'S1e'
              }
            }
          },
          S2g: {
            type: 'list',
            member: {
              shape: 'S2h'
            }
          },
          S2h: {
            type: 'structure',
            required: ['taxDocumentAccessToken', 'taxDocumentName'],
            members: {
              taxDocumentAccessToken: {},
              taxDocumentName: {}
            }
          },
          S2z: {
            type: 'structure',
            required: ['countryCode'],
            members: {
              countryCode: {},
              stateOrRegion: {}
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=7f4d36e8db31152acbe3ea4299b608363391ea0d.js.map