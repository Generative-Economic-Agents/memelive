System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2017-10-15',
          endpointPrefix: 'api.pricing',
          jsonVersion: '1.1',
          protocol: 'json',
          serviceAbbreviation: 'AWS Pricing',
          serviceFullName: 'AWS Price List Service',
          serviceId: 'Pricing',
          signatureVersion: 'v4',
          signingName: 'pricing',
          targetPrefix: 'AWSPriceListService',
          uid: 'pricing-2017-10-15'
        },
        operations: {
          DescribeServices: {
            input: {
              type: 'structure',
              members: {
                ServiceCode: {},
                FormatVersion: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Services: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['ServiceCode'],
                    members: {
                      ServiceCode: {},
                      AttributeNames: {
                        type: 'list',
                        member: {}
                      }
                    }
                  }
                },
                FormatVersion: {},
                NextToken: {}
              }
            }
          },
          GetAttributeValues: {
            input: {
              type: 'structure',
              required: ['ServiceCode', 'AttributeName'],
              members: {
                ServiceCode: {},
                AttributeName: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AttributeValues: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Value: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          GetPriceListFileUrl: {
            input: {
              type: 'structure',
              required: ['PriceListArn', 'FileFormat'],
              members: {
                PriceListArn: {},
                FileFormat: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Url: {}
              }
            }
          },
          GetProducts: {
            input: {
              type: 'structure',
              required: ['ServiceCode'],
              members: {
                ServiceCode: {},
                Filters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Type', 'Field', 'Value'],
                    members: {
                      Type: {},
                      Field: {},
                      Value: {}
                    }
                  }
                },
                FormatVersion: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                FormatVersion: {},
                PriceList: {
                  type: 'list',
                  member: {
                    jsonvalue: true
                  }
                },
                NextToken: {}
              }
            }
          },
          ListPriceLists: {
            input: {
              type: 'structure',
              required: ['ServiceCode', 'EffectiveDate', 'CurrencyCode'],
              members: {
                ServiceCode: {},
                EffectiveDate: {
                  type: 'timestamp'
                },
                RegionCode: {},
                CurrencyCode: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                PriceLists: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      PriceListArn: {},
                      RegionCode: {},
                      CurrencyCode: {},
                      FileFormats: {
                        type: 'list',
                        member: {}
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          }
        },
        shapes: {}
      });
    }
  };
});
//# sourceMappingURL=5d50816f9125177a1a4bf3d86b4285f94d108fe3.js.map