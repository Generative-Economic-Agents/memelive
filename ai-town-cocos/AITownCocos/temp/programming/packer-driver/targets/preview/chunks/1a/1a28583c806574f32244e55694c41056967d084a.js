System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        metadata: {
          apiVersion: '2009-04-15',
          endpointPrefix: 'sdb',
          serviceFullName: 'Amazon SimpleDB',
          serviceId: 'SimpleDB',
          signatureVersion: 'v2',
          xmlNamespace: 'http://sdb.amazonaws.com/doc/2009-04-15/',
          protocol: 'query'
        },
        operations: {
          BatchDeleteAttributes: {
            input: {
              type: 'structure',
              required: ['DomainName', 'Items'],
              members: {
                DomainName: {},
                Items: {
                  type: 'list',
                  member: {
                    locationName: 'Item',
                    type: 'structure',
                    required: ['Name'],
                    members: {
                      Name: {
                        locationName: 'ItemName'
                      },
                      Attributes: {
                        shape: 'S5'
                      }
                    }
                  },
                  flattened: true
                }
              }
            }
          },
          BatchPutAttributes: {
            input: {
              type: 'structure',
              required: ['DomainName', 'Items'],
              members: {
                DomainName: {},
                Items: {
                  type: 'list',
                  member: {
                    locationName: 'Item',
                    type: 'structure',
                    required: ['Name', 'Attributes'],
                    members: {
                      Name: {
                        locationName: 'ItemName'
                      },
                      Attributes: {
                        shape: 'Sa'
                      }
                    }
                  },
                  flattened: true
                }
              }
            }
          },
          CreateDomain: {
            input: {
              type: 'structure',
              required: ['DomainName'],
              members: {
                DomainName: {}
              }
            }
          },
          DeleteAttributes: {
            input: {
              type: 'structure',
              required: ['DomainName', 'ItemName'],
              members: {
                DomainName: {},
                ItemName: {},
                Attributes: {
                  shape: 'S5'
                },
                Expected: {
                  shape: 'Sf'
                }
              }
            }
          },
          DeleteDomain: {
            input: {
              type: 'structure',
              required: ['DomainName'],
              members: {
                DomainName: {}
              }
            }
          },
          DomainMetadata: {
            input: {
              type: 'structure',
              required: ['DomainName'],
              members: {
                DomainName: {}
              }
            },
            output: {
              resultWrapper: 'DomainMetadataResult',
              type: 'structure',
              members: {
                ItemCount: {
                  type: 'integer'
                },
                ItemNamesSizeBytes: {
                  type: 'long'
                },
                AttributeNameCount: {
                  type: 'integer'
                },
                AttributeNamesSizeBytes: {
                  type: 'long'
                },
                AttributeValueCount: {
                  type: 'integer'
                },
                AttributeValuesSizeBytes: {
                  type: 'long'
                },
                Timestamp: {
                  type: 'integer'
                }
              }
            }
          },
          GetAttributes: {
            input: {
              type: 'structure',
              required: ['DomainName', 'ItemName'],
              members: {
                DomainName: {},
                ItemName: {},
                AttributeNames: {
                  type: 'list',
                  member: {
                    locationName: 'AttributeName'
                  },
                  flattened: true
                },
                ConsistentRead: {
                  type: 'boolean'
                }
              }
            },
            output: {
              resultWrapper: 'GetAttributesResult',
              type: 'structure',
              members: {
                Attributes: {
                  shape: 'So'
                }
              }
            }
          },
          ListDomains: {
            input: {
              type: 'structure',
              members: {
                MaxNumberOfDomains: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              resultWrapper: 'ListDomainsResult',
              type: 'structure',
              members: {
                DomainNames: {
                  type: 'list',
                  member: {
                    locationName: 'DomainName'
                  },
                  flattened: true
                },
                NextToken: {}
              }
            }
          },
          PutAttributes: {
            input: {
              type: 'structure',
              required: ['DomainName', 'ItemName', 'Attributes'],
              members: {
                DomainName: {},
                ItemName: {},
                Attributes: {
                  shape: 'Sa'
                },
                Expected: {
                  shape: 'Sf'
                }
              }
            }
          },
          Select: {
            input: {
              type: 'structure',
              required: ['SelectExpression'],
              members: {
                SelectExpression: {},
                NextToken: {},
                ConsistentRead: {
                  type: 'boolean'
                }
              }
            },
            output: {
              resultWrapper: 'SelectResult',
              type: 'structure',
              members: {
                Items: {
                  type: 'list',
                  member: {
                    locationName: 'Item',
                    type: 'structure',
                    required: ['Name', 'Attributes'],
                    members: {
                      Name: {},
                      AlternateNameEncoding: {},
                      Attributes: {
                        shape: 'So'
                      }
                    }
                  },
                  flattened: true
                },
                NextToken: {}
              }
            }
          }
        },
        shapes: {
          S5: {
            type: 'list',
            member: {
              locationName: 'Attribute',
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {},
                Value: {}
              }
            },
            flattened: true
          },
          Sa: {
            type: 'list',
            member: {
              locationName: 'Attribute',
              type: 'structure',
              required: ['Name', 'Value'],
              members: {
                Name: {},
                Value: {},
                Replace: {
                  type: 'boolean'
                }
              }
            },
            flattened: true
          },
          Sf: {
            type: 'structure',
            members: {
              Name: {},
              Value: {},
              Exists: {
                type: 'boolean'
              }
            }
          },
          So: {
            type: 'list',
            member: {
              locationName: 'Attribute',
              type: 'structure',
              required: ['Name', 'Value'],
              members: {
                Name: {},
                AlternateNameEncoding: {},
                Value: {},
                AlternateValueEncoding: {}
              }
            },
            flattened: true
          }
        }
      });
    }
  };
});
//# sourceMappingURL=1a28583c806574f32244e55694c41056967d084a.js.map