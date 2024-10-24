System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        metadata: {
          apiVersion: '2011-02-01',
          endpointPrefix: 'cloudsearch',
          serviceFullName: 'Amazon CloudSearch',
          serviceId: 'CloudSearch',
          signatureVersion: 'v4',
          xmlNamespace: 'http://cloudsearch.amazonaws.com/doc/2011-02-01/',
          protocol: 'query'
        },
        operations: {
          CreateDomain: {
            input: {
              type: 'structure',
              required: ['DomainName'],
              members: {
                DomainName: {}
              }
            },
            output: {
              resultWrapper: 'CreateDomainResult',
              type: 'structure',
              members: {
                DomainStatus: {
                  shape: 'S4'
                }
              }
            }
          },
          DefineIndexField: {
            input: {
              type: 'structure',
              required: ['DomainName', 'IndexField'],
              members: {
                DomainName: {},
                IndexField: {
                  shape: 'Sf'
                }
              }
            },
            output: {
              resultWrapper: 'DefineIndexFieldResult',
              type: 'structure',
              required: ['IndexField'],
              members: {
                IndexField: {
                  shape: 'Sx'
                }
              }
            }
          },
          DefineRankExpression: {
            input: {
              type: 'structure',
              required: ['DomainName', 'RankExpression'],
              members: {
                DomainName: {},
                RankExpression: {
                  shape: 'S12'
                }
              }
            },
            output: {
              resultWrapper: 'DefineRankExpressionResult',
              type: 'structure',
              required: ['RankExpression'],
              members: {
                RankExpression: {
                  shape: 'S15'
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
            },
            output: {
              resultWrapper: 'DeleteDomainResult',
              type: 'structure',
              members: {
                DomainStatus: {
                  shape: 'S4'
                }
              }
            }
          },
          DeleteIndexField: {
            input: {
              type: 'structure',
              required: ['DomainName', 'IndexFieldName'],
              members: {
                DomainName: {},
                IndexFieldName: {}
              }
            },
            output: {
              resultWrapper: 'DeleteIndexFieldResult',
              type: 'structure',
              required: ['IndexField'],
              members: {
                IndexField: {
                  shape: 'Sx'
                }
              }
            }
          },
          DeleteRankExpression: {
            input: {
              type: 'structure',
              required: ['DomainName', 'RankName'],
              members: {
                DomainName: {},
                RankName: {}
              }
            },
            output: {
              resultWrapper: 'DeleteRankExpressionResult',
              type: 'structure',
              required: ['RankExpression'],
              members: {
                RankExpression: {
                  shape: 'S15'
                }
              }
            }
          },
          DescribeAvailabilityOptions: {
            input: {
              type: 'structure',
              required: ['DomainName'],
              members: {
                DomainName: {}
              }
            },
            output: {
              resultWrapper: 'DescribeAvailabilityOptionsResult',
              type: 'structure',
              members: {
                AvailabilityOptions: {
                  shape: 'S1e'
                }
              }
            }
          },
          DescribeDefaultSearchField: {
            input: {
              type: 'structure',
              required: ['DomainName'],
              members: {
                DomainName: {}
              }
            },
            output: {
              resultWrapper: 'DescribeDefaultSearchFieldResult',
              type: 'structure',
              required: ['DefaultSearchField'],
              members: {
                DefaultSearchField: {
                  shape: 'S1i'
                }
              }
            }
          },
          DescribeDomains: {
            input: {
              type: 'structure',
              members: {
                DomainNames: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              resultWrapper: 'DescribeDomainsResult',
              type: 'structure',
              required: ['DomainStatusList'],
              members: {
                DomainStatusList: {
                  type: 'list',
                  member: {
                    shape: 'S4'
                  }
                }
              }
            }
          },
          DescribeIndexFields: {
            input: {
              type: 'structure',
              required: ['DomainName'],
              members: {
                DomainName: {},
                FieldNames: {
                  shape: 'S1o'
                }
              }
            },
            output: {
              resultWrapper: 'DescribeIndexFieldsResult',
              type: 'structure',
              required: ['IndexFields'],
              members: {
                IndexFields: {
                  type: 'list',
                  member: {
                    shape: 'Sx'
                  }
                }
              }
            }
          },
          DescribeRankExpressions: {
            input: {
              type: 'structure',
              required: ['DomainName'],
              members: {
                DomainName: {},
                RankNames: {
                  shape: 'S1o'
                }
              }
            },
            output: {
              resultWrapper: 'DescribeRankExpressionsResult',
              type: 'structure',
              required: ['RankExpressions'],
              members: {
                RankExpressions: {
                  type: 'list',
                  member: {
                    shape: 'S15'
                  }
                }
              }
            }
          },
          DescribeServiceAccessPolicies: {
            input: {
              type: 'structure',
              required: ['DomainName'],
              members: {
                DomainName: {}
              }
            },
            output: {
              resultWrapper: 'DescribeServiceAccessPoliciesResult',
              type: 'structure',
              required: ['AccessPolicies'],
              members: {
                AccessPolicies: {
                  shape: 'S1w'
                }
              }
            }
          },
          DescribeStemmingOptions: {
            input: {
              type: 'structure',
              required: ['DomainName'],
              members: {
                DomainName: {}
              }
            },
            output: {
              resultWrapper: 'DescribeStemmingOptionsResult',
              type: 'structure',
              required: ['Stems'],
              members: {
                Stems: {
                  shape: 'S20'
                }
              }
            }
          },
          DescribeStopwordOptions: {
            input: {
              type: 'structure',
              required: ['DomainName'],
              members: {
                DomainName: {}
              }
            },
            output: {
              resultWrapper: 'DescribeStopwordOptionsResult',
              type: 'structure',
              required: ['Stopwords'],
              members: {
                Stopwords: {
                  shape: 'S24'
                }
              }
            }
          },
          DescribeSynonymOptions: {
            input: {
              type: 'structure',
              required: ['DomainName'],
              members: {
                DomainName: {}
              }
            },
            output: {
              resultWrapper: 'DescribeSynonymOptionsResult',
              type: 'structure',
              required: ['Synonyms'],
              members: {
                Synonyms: {
                  shape: 'S28'
                }
              }
            }
          },
          IndexDocuments: {
            input: {
              type: 'structure',
              required: ['DomainName'],
              members: {
                DomainName: {}
              }
            },
            output: {
              resultWrapper: 'IndexDocumentsResult',
              type: 'structure',
              members: {
                FieldNames: {
                  shape: 'S1o'
                }
              }
            }
          },
          UpdateAvailabilityOptions: {
            input: {
              type: 'structure',
              required: ['DomainName', 'MultiAZ'],
              members: {
                DomainName: {},
                MultiAZ: {
                  type: 'boolean'
                }
              }
            },
            output: {
              resultWrapper: 'UpdateAvailabilityOptionsResult',
              type: 'structure',
              members: {
                AvailabilityOptions: {
                  shape: 'S1e'
                }
              }
            }
          },
          UpdateDefaultSearchField: {
            input: {
              type: 'structure',
              required: ['DomainName', 'DefaultSearchField'],
              members: {
                DomainName: {},
                DefaultSearchField: {}
              }
            },
            output: {
              resultWrapper: 'UpdateDefaultSearchFieldResult',
              type: 'structure',
              required: ['DefaultSearchField'],
              members: {
                DefaultSearchField: {
                  shape: 'S1i'
                }
              }
            }
          },
          UpdateServiceAccessPolicies: {
            input: {
              type: 'structure',
              required: ['DomainName', 'AccessPolicies'],
              members: {
                DomainName: {},
                AccessPolicies: {}
              }
            },
            output: {
              resultWrapper: 'UpdateServiceAccessPoliciesResult',
              type: 'structure',
              required: ['AccessPolicies'],
              members: {
                AccessPolicies: {
                  shape: 'S1w'
                }
              }
            }
          },
          UpdateStemmingOptions: {
            input: {
              type: 'structure',
              required: ['DomainName', 'Stems'],
              members: {
                DomainName: {},
                Stems: {}
              }
            },
            output: {
              resultWrapper: 'UpdateStemmingOptionsResult',
              type: 'structure',
              required: ['Stems'],
              members: {
                Stems: {
                  shape: 'S20'
                }
              }
            }
          },
          UpdateStopwordOptions: {
            input: {
              type: 'structure',
              required: ['DomainName', 'Stopwords'],
              members: {
                DomainName: {},
                Stopwords: {}
              }
            },
            output: {
              resultWrapper: 'UpdateStopwordOptionsResult',
              type: 'structure',
              required: ['Stopwords'],
              members: {
                Stopwords: {
                  shape: 'S24'
                }
              }
            }
          },
          UpdateSynonymOptions: {
            input: {
              type: 'structure',
              required: ['DomainName', 'Synonyms'],
              members: {
                DomainName: {},
                Synonyms: {}
              }
            },
            output: {
              resultWrapper: 'UpdateSynonymOptionsResult',
              type: 'structure',
              required: ['Synonyms'],
              members: {
                Synonyms: {
                  shape: 'S28'
                }
              }
            }
          }
        },
        shapes: {
          S4: {
            type: 'structure',
            required: ['DomainId', 'DomainName', 'RequiresIndexDocuments'],
            members: {
              DomainId: {},
              DomainName: {},
              Created: {
                type: 'boolean'
              },
              Deleted: {
                type: 'boolean'
              },
              NumSearchableDocs: {
                type: 'long'
              },
              DocService: {
                shape: 'S8'
              },
              SearchService: {
                shape: 'S8'
              },
              RequiresIndexDocuments: {
                type: 'boolean'
              },
              Processing: {
                type: 'boolean'
              },
              SearchInstanceType: {},
              SearchPartitionCount: {
                type: 'integer'
              },
              SearchInstanceCount: {
                type: 'integer'
              }
            }
          },
          S8: {
            type: 'structure',
            members: {
              Arn: {},
              Endpoint: {}
            }
          },
          Sf: {
            type: 'structure',
            required: ['IndexFieldName', 'IndexFieldType'],
            members: {
              IndexFieldName: {},
              IndexFieldType: {},
              UIntOptions: {
                type: 'structure',
                members: {
                  DefaultValue: {
                    type: 'integer'
                  }
                }
              },
              LiteralOptions: {
                type: 'structure',
                members: {
                  DefaultValue: {},
                  SearchEnabled: {
                    type: 'boolean'
                  },
                  FacetEnabled: {
                    type: 'boolean'
                  },
                  ResultEnabled: {
                    type: 'boolean'
                  }
                }
              },
              TextOptions: {
                type: 'structure',
                members: {
                  DefaultValue: {},
                  FacetEnabled: {
                    type: 'boolean'
                  },
                  ResultEnabled: {
                    type: 'boolean'
                  },
                  TextProcessor: {}
                }
              },
              SourceAttributes: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['SourceDataFunction'],
                  members: {
                    SourceDataFunction: {},
                    SourceDataCopy: {
                      type: 'structure',
                      required: ['SourceName'],
                      members: {
                        SourceName: {},
                        DefaultValue: {}
                      }
                    },
                    SourceDataTrimTitle: {
                      type: 'structure',
                      required: ['SourceName'],
                      members: {
                        SourceName: {},
                        DefaultValue: {},
                        Separator: {},
                        Language: {}
                      }
                    },
                    SourceDataMap: {
                      type: 'structure',
                      required: ['SourceName'],
                      members: {
                        SourceName: {},
                        DefaultValue: {},
                        Cases: {
                          type: 'map',
                          key: {},
                          value: {}
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          Sx: {
            type: 'structure',
            required: ['Options', 'Status'],
            members: {
              Options: {
                shape: 'Sf'
              },
              Status: {
                shape: 'Sy'
              }
            }
          },
          Sy: {
            type: 'structure',
            required: ['CreationDate', 'UpdateDate', 'State'],
            members: {
              CreationDate: {
                type: 'timestamp'
              },
              UpdateDate: {
                type: 'timestamp'
              },
              UpdateVersion: {
                type: 'integer'
              },
              State: {},
              PendingDeletion: {
                type: 'boolean'
              }
            }
          },
          S12: {
            type: 'structure',
            required: ['RankName', 'RankExpression'],
            members: {
              RankName: {},
              RankExpression: {}
            }
          },
          S15: {
            type: 'structure',
            required: ['Options', 'Status'],
            members: {
              Options: {
                shape: 'S12'
              },
              Status: {
                shape: 'Sy'
              }
            }
          },
          S1e: {
            type: 'structure',
            required: ['Options', 'Status'],
            members: {
              Options: {
                type: 'boolean'
              },
              Status: {
                shape: 'Sy'
              }
            }
          },
          S1i: {
            type: 'structure',
            required: ['Options', 'Status'],
            members: {
              Options: {},
              Status: {
                shape: 'Sy'
              }
            }
          },
          S1o: {
            type: 'list',
            member: {}
          },
          S1w: {
            type: 'structure',
            required: ['Options', 'Status'],
            members: {
              Options: {},
              Status: {
                shape: 'Sy'
              }
            }
          },
          S20: {
            type: 'structure',
            required: ['Options', 'Status'],
            members: {
              Options: {},
              Status: {
                shape: 'Sy'
              }
            }
          },
          S24: {
            type: 'structure',
            required: ['Options', 'Status'],
            members: {
              Options: {},
              Status: {
                shape: 'Sy'
              }
            }
          },
          S28: {
            type: 'structure',
            required: ['Options', 'Status'],
            members: {
              Options: {},
              Status: {
                shape: 'Sy'
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=fcf28f1f7ce4397461a08a00191ce8d6e0945a27.js.map