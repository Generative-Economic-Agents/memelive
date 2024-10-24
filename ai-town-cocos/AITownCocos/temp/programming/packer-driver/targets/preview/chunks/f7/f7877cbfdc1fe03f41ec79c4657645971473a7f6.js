System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2021-02-01',
          endpointPrefix: 'account',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceFullName: 'AWS Account',
          serviceId: 'Account',
          signatureVersion: 'v4',
          signingName: 'account',
          uid: 'account-2021-02-01'
        },
        operations: {
          AcceptPrimaryEmailUpdate: {
            http: {
              requestUri: '/acceptPrimaryEmailUpdate',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['AccountId', 'Otp', 'PrimaryEmail'],
              members: {
                AccountId: {},
                Otp: {
                  type: 'string',
                  sensitive: true
                },
                PrimaryEmail: {
                  shape: 'S4'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Status: {}
              }
            }
          },
          DeleteAlternateContact: {
            http: {
              requestUri: '/deleteAlternateContact',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['AlternateContactType'],
              members: {
                AccountId: {},
                AlternateContactType: {}
              }
            },
            idempotent: true
          },
          DisableRegion: {
            http: {
              requestUri: '/disableRegion',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['RegionName'],
              members: {
                AccountId: {},
                RegionName: {}
              }
            }
          },
          EnableRegion: {
            http: {
              requestUri: '/enableRegion',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['RegionName'],
              members: {
                AccountId: {},
                RegionName: {}
              }
            }
          },
          GetAlternateContact: {
            http: {
              requestUri: '/getAlternateContact',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['AlternateContactType'],
              members: {
                AccountId: {},
                AlternateContactType: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                AlternateContact: {
                  type: 'structure',
                  members: {
                    AlternateContactType: {},
                    EmailAddress: {
                      shape: 'Sf'
                    },
                    Name: {
                      shape: 'Sg'
                    },
                    PhoneNumber: {
                      shape: 'Sh'
                    },
                    Title: {
                      shape: 'Si'
                    }
                  }
                }
              }
            }
          },
          GetContactInformation: {
            http: {
              requestUri: '/getContactInformation',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                AccountId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ContactInformation: {
                  shape: 'Sl'
                }
              }
            }
          },
          GetPrimaryEmail: {
            http: {
              requestUri: '/getPrimaryEmail',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['AccountId'],
              members: {
                AccountId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                PrimaryEmail: {
                  shape: 'S4'
                }
              }
            }
          },
          GetRegionOptStatus: {
            http: {
              requestUri: '/getRegionOptStatus',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['RegionName'],
              members: {
                AccountId: {},
                RegionName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                RegionName: {},
                RegionOptStatus: {}
              }
            }
          },
          ListRegions: {
            http: {
              requestUri: '/listRegions',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                AccountId: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {},
                RegionOptStatusContains: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                Regions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      RegionName: {},
                      RegionOptStatus: {}
                    }
                  }
                }
              }
            }
          },
          PutAlternateContact: {
            http: {
              requestUri: '/putAlternateContact',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['AlternateContactType', 'EmailAddress', 'Name', 'PhoneNumber', 'Title'],
              members: {
                AccountId: {},
                AlternateContactType: {},
                EmailAddress: {
                  shape: 'Sf'
                },
                Name: {
                  shape: 'Sg'
                },
                PhoneNumber: {
                  shape: 'Sh'
                },
                Title: {
                  shape: 'Si'
                }
              }
            },
            idempotent: true
          },
          PutContactInformation: {
            http: {
              requestUri: '/putContactInformation',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ContactInformation'],
              members: {
                AccountId: {},
                ContactInformation: {
                  shape: 'Sl'
                }
              }
            },
            idempotent: true
          },
          StartPrimaryEmailUpdate: {
            http: {
              requestUri: '/startPrimaryEmailUpdate',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['AccountId', 'PrimaryEmail'],
              members: {
                AccountId: {},
                PrimaryEmail: {
                  shape: 'S4'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Status: {}
              }
            }
          }
        },
        shapes: {
          S4: {
            type: 'string',
            sensitive: true
          },
          Sf: {
            type: 'string',
            sensitive: true
          },
          Sg: {
            type: 'string',
            sensitive: true
          },
          Sh: {
            type: 'string',
            sensitive: true
          },
          Si: {
            type: 'string',
            sensitive: true
          },
          Sl: {
            type: 'structure',
            required: ['AddressLine1', 'City', 'CountryCode', 'FullName', 'PhoneNumber', 'PostalCode'],
            members: {
              AddressLine1: {
                shape: 'Sm'
              },
              AddressLine2: {
                shape: 'Sm'
              },
              AddressLine3: {
                shape: 'Sm'
              },
              City: {
                type: 'string',
                sensitive: true
              },
              CompanyName: {
                type: 'string',
                sensitive: true
              },
              CountryCode: {
                type: 'string',
                sensitive: true
              },
              DistrictOrCounty: {
                type: 'string',
                sensitive: true
              },
              FullName: {
                type: 'string',
                sensitive: true
              },
              PhoneNumber: {
                type: 'string',
                sensitive: true
              },
              PostalCode: {
                type: 'string',
                sensitive: true
              },
              StateOrRegion: {
                type: 'string',
                sensitive: true
              },
              WebsiteUrl: {
                type: 'string',
                sensitive: true
              }
            }
          },
          Sm: {
            type: 'string',
            sensitive: true
          }
        }
      });
    }
  };
});
//# sourceMappingURL=f7877cbfdc1fe03f41ec79c4657645971473a7f6.js.map