System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2013-01-01',
          endpointPrefix: 'cloudsearch',
          protocol: 'query',
          serviceFullName: 'Amazon CloudSearch',
          serviceId: 'CloudSearch',
          signatureVersion: 'v4',
          uid: 'cloudsearch-2013-01-01',
          xmlNamespace: 'http://cloudsearch.amazonaws.com/doc/2013-01-01/'
        },
        operations: {
          BuildSuggesters: {
            input: {
              type: 'structure',
              required: ['DomainName'],
              members: {
                DomainName: {}
              }
            },
            output: {
              resultWrapper: 'BuildSuggestersResult',
              type: 'structure',
              members: {
                FieldNames: {
                  shape: 'S4'
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
            },
            output: {
              resultWrapper: 'CreateDomainResult',
              type: 'structure',
              members: {
                DomainStatus: {
                  shape: 'S8'
                }
              }
            }
          },
          DefineAnalysisScheme: {
            input: {
              type: 'structure',
              required: ['DomainName', 'AnalysisScheme'],
              members: {
                DomainName: {},
                AnalysisScheme: {
                  shape: 'Sl'
                }
              }
            },
            output: {
              resultWrapper: 'DefineAnalysisSchemeResult',
              type: 'structure',
              required: ['AnalysisScheme'],
              members: {
                AnalysisScheme: {
                  shape: 'Ss'
                }
              }
            }
          },
          DefineExpression: {
            input: {
              type: 'structure',
              required: ['DomainName', 'Expression'],
              members: {
                DomainName: {},
                Expression: {
                  shape: 'Sy'
                }
              }
            },
            output: {
              resultWrapper: 'DefineExpressionResult',
              type: 'structure',
              required: ['Expression'],
              members: {
                Expression: {
                  shape: 'S11'
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
                  shape: 'S13'
                }
              }
            },
            output: {
              resultWrapper: 'DefineIndexFieldResult',
              type: 'structure',
              required: ['IndexField'],
              members: {
                IndexField: {
                  shape: 'S1n'
                }
              }
            }
          },
          DefineSuggester: {
            input: {
              type: 'structure',
              required: ['DomainName', 'Suggester'],
              members: {
                DomainName: {},
                Suggester: {
                  shape: 'S1p'
                }
              }
            },
            output: {
              resultWrapper: 'DefineSuggesterResult',
              type: 'structure',
              required: ['Suggester'],
              members: {
                Suggester: {
                  shape: 'S1t'
                }
              }
            }
          },
          DeleteAnalysisScheme: {
            input: {
              type: 'structure',
              required: ['DomainName', 'AnalysisSchemeName'],
              members: {
                DomainName: {},
                AnalysisSchemeName: {}
              }
            },
            output: {
              resultWrapper: 'DeleteAnalysisSchemeResult',
              type: 'structure',
              required: ['AnalysisScheme'],
              members: {
                AnalysisScheme: {
                  shape: 'Ss'
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
                  shape: 'S8'
                }
              }
            }
          },
          DeleteExpression: {
            input: {
              type: 'structure',
              required: ['DomainName', 'ExpressionName'],
              members: {
                DomainName: {},
                ExpressionName: {}
              }
            },
            output: {
              resultWrapper: 'DeleteExpressionResult',
              type: 'structure',
              required: ['Expression'],
              members: {
                Expression: {
                  shape: 'S11'
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
                  shape: 'S1n'
                }
              }
            }
          },
          DeleteSuggester: {
            input: {
              type: 'structure',
              required: ['DomainName', 'SuggesterName'],
              members: {
                DomainName: {},
                SuggesterName: {}
              }
            },
            output: {
              resultWrapper: 'DeleteSuggesterResult',
              type: 'structure',
              required: ['Suggester'],
              members: {
                Suggester: {
                  shape: 'S1t'
                }
              }
            }
          },
          DescribeAnalysisSchemes: {
            input: {
              type: 'structure',
              required: ['DomainName'],
              members: {
                DomainName: {},
                AnalysisSchemeNames: {
                  shape: 'S25'
                },
                Deployed: {
                  type: 'boolean'
                }
              }
            },
            output: {
              resultWrapper: 'DescribeAnalysisSchemesResult',
              type: 'structure',
              required: ['AnalysisSchemes'],
              members: {
                AnalysisSchemes: {
                  type: 'list',
                  member: {
                    shape: 'Ss'
                  }
                }
              }
            }
          },
          DescribeAvailabilityOptions: {
            input: {
              type: 'structure',
              required: ['DomainName'],
              members: {
                DomainName: {},
                Deployed: {
                  type: 'boolean'
                }
              }
            },
            output: {
              resultWrapper: 'DescribeAvailabilityOptionsResult',
              type: 'structure',
              members: {
                AvailabilityOptions: {
                  shape: 'S2a'
                }
              }
            }
          },
          DescribeDomainEndpointOptions: {
            input: {
              type: 'structure',
              required: ['DomainName'],
              members: {
                DomainName: {},
                Deployed: {
                  type: 'boolean'
                }
              }
            },
            output: {
              resultWrapper: 'DescribeDomainEndpointOptionsResult',
              type: 'structure',
              members: {
                DomainEndpointOptions: {
                  shape: 'S2e'
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
                    shape: 'S8'
                  }
                }
              }
            }
          },
          DescribeExpressions: {
            input: {
              type: 'structure',
              required: ['DomainName'],
              members: {
                DomainName: {},
                ExpressionNames: {
                  shape: 'S25'
                },
                Deployed: {
                  type: 'boolean'
                }
              }
            },
            output: {
              resultWrapper: 'DescribeExpressionsResult',
              type: 'structure',
              required: ['Expressions'],
              members: {
                Expressions: {
                  type: 'list',
                  member: {
                    shape: 'S11'
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
                  type: 'list',
                  member: {}
                },
                Deployed: {
                  type: 'boolean'
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
                    shape: 'S1n'
                  }
                }
              }
            }
          },
          DescribeScalingParameters: {
            input: {
              type: 'structure',
              required: ['DomainName'],
              members: {
                DomainName: {}
              }
            },
            output: {
              resultWrapper: 'DescribeScalingParametersResult',
              type: 'structure',
              required: ['ScalingParameters'],
              members: {
                ScalingParameters: {
                  shape: 'S2u'
                }
              }
            }
          },
          DescribeServiceAccessPolicies: {
            input: {
              type: 'structure',
              required: ['DomainName'],
              members: {
                DomainName: {},
                Deployed: {
                  type: 'boolean'
                }
              }
            },
            output: {
              resultWrapper: 'DescribeServiceAccessPoliciesResult',
              type: 'structure',
              required: ['AccessPolicies'],
              members: {
                AccessPolicies: {
                  shape: 'S2z'
                }
              }
            }
          },
          DescribeSuggesters: {
            input: {
              type: 'structure',
              required: ['DomainName'],
              members: {
                DomainName: {},
                SuggesterNames: {
                  shape: 'S25'
                },
                Deployed: {
                  type: 'boolean'
                }
              }
            },
            output: {
              resultWrapper: 'DescribeSuggestersResult',
              type: 'structure',
              required: ['Suggesters'],
              members: {
                Suggesters: {
                  type: 'list',
                  member: {
                    shape: 'S1t'
                  }
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
                  shape: 'S4'
                }
              }
            }
          },
          ListDomainNames: {
            output: {
              resultWrapper: 'ListDomainNamesResult',
              type: 'structure',
              members: {
                DomainNames: {
                  type: 'map',
                  key: {},
                  value: {}
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
                  shape: 'S2a'
                }
              }
            }
          },
          UpdateDomainEndpointOptions: {
            input: {
              type: 'structure',
              required: ['DomainName', 'DomainEndpointOptions'],
              members: {
                DomainName: {},
                DomainEndpointOptions: {
                  shape: 'S2f'
                }
              }
            },
            output: {
              resultWrapper: 'UpdateDomainEndpointOptionsResult',
              type: 'structure',
              members: {
                DomainEndpointOptions: {
                  shape: 'S2e'
                }
              }
            }
          },
          UpdateScalingParameters: {
            input: {
              type: 'structure',
              required: ['DomainName', 'ScalingParameters'],
              members: {
                DomainName: {},
                ScalingParameters: {
                  shape: 'S2v'
                }
              }
            },
            output: {
              resultWrapper: 'UpdateScalingParametersResult',
              type: 'structure',
              required: ['ScalingParameters'],
              members: {
                ScalingParameters: {
                  shape: 'S2u'
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
                  shape: 'S2z'
                }
              }
            }
          }
        },
        shapes: {
          S4: {
            type: 'list',
            member: {}
          },
          S8: {
            type: 'structure',
            required: ['DomainId', 'DomainName', 'RequiresIndexDocuments'],
            members: {
              DomainId: {},
              DomainName: {},
              ARN: {},
              Created: {
                type: 'boolean'
              },
              Deleted: {
                type: 'boolean'
              },
              DocService: {
                shape: 'Sc'
              },
              SearchService: {
                shape: 'Sc'
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
              },
              Limits: {
                type: 'structure',
                required: ['MaximumReplicationCount', 'MaximumPartitionCount'],
                members: {
                  MaximumReplicationCount: {
                    type: 'integer'
                  },
                  MaximumPartitionCount: {
                    type: 'integer'
                  }
                }
              }
            }
          },
          Sc: {
            type: 'structure',
            members: {
              Endpoint: {}
            }
          },
          Sl: {
            type: 'structure',
            required: ['AnalysisSchemeName', 'AnalysisSchemeLanguage'],
            members: {
              AnalysisSchemeName: {},
              AnalysisSchemeLanguage: {},
              AnalysisOptions: {
                type: 'structure',
                members: {
                  Synonyms: {},
                  Stopwords: {},
                  StemmingDictionary: {},
                  JapaneseTokenizationDictionary: {},
                  AlgorithmicStemming: {}
                }
              }
            }
          },
          Ss: {
            type: 'structure',
            required: ['Options', 'Status'],
            members: {
              Options: {
                shape: 'Sl'
              },
              Status: {
                shape: 'St'
              }
            }
          },
          St: {
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
          Sy: {
            type: 'structure',
            required: ['ExpressionName', 'ExpressionValue'],
            members: {
              ExpressionName: {},
              ExpressionValue: {}
            }
          },
          S11: {
            type: 'structure',
            required: ['Options', 'Status'],
            members: {
              Options: {
                shape: 'Sy'
              },
              Status: {
                shape: 'St'
              }
            }
          },
          S13: {
            type: 'structure',
            required: ['IndexFieldName', 'IndexFieldType'],
            members: {
              IndexFieldName: {},
              IndexFieldType: {},
              IntOptions: {
                type: 'structure',
                members: {
                  DefaultValue: {
                    type: 'long'
                  },
                  SourceField: {},
                  FacetEnabled: {
                    type: 'boolean'
                  },
                  SearchEnabled: {
                    type: 'boolean'
                  },
                  ReturnEnabled: {
                    type: 'boolean'
                  },
                  SortEnabled: {
                    type: 'boolean'
                  }
                }
              },
              DoubleOptions: {
                type: 'structure',
                members: {
                  DefaultValue: {
                    type: 'double'
                  },
                  SourceField: {},
                  FacetEnabled: {
                    type: 'boolean'
                  },
                  SearchEnabled: {
                    type: 'boolean'
                  },
                  ReturnEnabled: {
                    type: 'boolean'
                  },
                  SortEnabled: {
                    type: 'boolean'
                  }
                }
              },
              LiteralOptions: {
                type: 'structure',
                members: {
                  DefaultValue: {},
                  SourceField: {},
                  FacetEnabled: {
                    type: 'boolean'
                  },
                  SearchEnabled: {
                    type: 'boolean'
                  },
                  ReturnEnabled: {
                    type: 'boolean'
                  },
                  SortEnabled: {
                    type: 'boolean'
                  }
                }
              },
              TextOptions: {
                type: 'structure',
                members: {
                  DefaultValue: {},
                  SourceField: {},
                  ReturnEnabled: {
                    type: 'boolean'
                  },
                  SortEnabled: {
                    type: 'boolean'
                  },
                  HighlightEnabled: {
                    type: 'boolean'
                  },
                  AnalysisScheme: {}
                }
              },
              DateOptions: {
                type: 'structure',
                members: {
                  DefaultValue: {},
                  SourceField: {},
                  FacetEnabled: {
                    type: 'boolean'
                  },
                  SearchEnabled: {
                    type: 'boolean'
                  },
                  ReturnEnabled: {
                    type: 'boolean'
                  },
                  SortEnabled: {
                    type: 'boolean'
                  }
                }
              },
              LatLonOptions: {
                type: 'structure',
                members: {
                  DefaultValue: {},
                  SourceField: {},
                  FacetEnabled: {
                    type: 'boolean'
                  },
                  SearchEnabled: {
                    type: 'boolean'
                  },
                  ReturnEnabled: {
                    type: 'boolean'
                  },
                  SortEnabled: {
                    type: 'boolean'
                  }
                }
              },
              IntArrayOptions: {
                type: 'structure',
                members: {
                  DefaultValue: {
                    type: 'long'
                  },
                  SourceFields: {},
                  FacetEnabled: {
                    type: 'boolean'
                  },
                  SearchEnabled: {
                    type: 'boolean'
                  },
                  ReturnEnabled: {
                    type: 'boolean'
                  }
                }
              },
              DoubleArrayOptions: {
                type: 'structure',
                members: {
                  DefaultValue: {
                    type: 'double'
                  },
                  SourceFields: {},
                  FacetEnabled: {
                    type: 'boolean'
                  },
                  SearchEnabled: {
                    type: 'boolean'
                  },
                  ReturnEnabled: {
                    type: 'boolean'
                  }
                }
              },
              LiteralArrayOptions: {
                type: 'structure',
                members: {
                  DefaultValue: {},
                  SourceFields: {},
                  FacetEnabled: {
                    type: 'boolean'
                  },
                  SearchEnabled: {
                    type: 'boolean'
                  },
                  ReturnEnabled: {
                    type: 'boolean'
                  }
                }
              },
              TextArrayOptions: {
                type: 'structure',
                members: {
                  DefaultValue: {},
                  SourceFields: {},
                  ReturnEnabled: {
                    type: 'boolean'
                  },
                  HighlightEnabled: {
                    type: 'boolean'
                  },
                  AnalysisScheme: {}
                }
              },
              DateArrayOptions: {
                type: 'structure',
                members: {
                  DefaultValue: {},
                  SourceFields: {},
                  FacetEnabled: {
                    type: 'boolean'
                  },
                  SearchEnabled: {
                    type: 'boolean'
                  },
                  ReturnEnabled: {
                    type: 'boolean'
                  }
                }
              }
            }
          },
          S1n: {
            type: 'structure',
            required: ['Options', 'Status'],
            members: {
              Options: {
                shape: 'S13'
              },
              Status: {
                shape: 'St'
              }
            }
          },
          S1p: {
            type: 'structure',
            required: ['SuggesterName', 'DocumentSuggesterOptions'],
            members: {
              SuggesterName: {},
              DocumentSuggesterOptions: {
                type: 'structure',
                required: ['SourceField'],
                members: {
                  SourceField: {},
                  FuzzyMatching: {},
                  SortExpression: {}
                }
              }
            }
          },
          S1t: {
            type: 'structure',
            required: ['Options', 'Status'],
            members: {
              Options: {
                shape: 'S1p'
              },
              Status: {
                shape: 'St'
              }
            }
          },
          S25: {
            type: 'list',
            member: {}
          },
          S2a: {
            type: 'structure',
            required: ['Options', 'Status'],
            members: {
              Options: {
                type: 'boolean'
              },
              Status: {
                shape: 'St'
              }
            }
          },
          S2e: {
            type: 'structure',
            required: ['Options', 'Status'],
            members: {
              Options: {
                shape: 'S2f'
              },
              Status: {
                shape: 'St'
              }
            }
          },
          S2f: {
            type: 'structure',
            members: {
              EnforceHTTPS: {
                type: 'boolean'
              },
              TLSSecurityPolicy: {}
            }
          },
          S2u: {
            type: 'structure',
            required: ['Options', 'Status'],
            members: {
              Options: {
                shape: 'S2v'
              },
              Status: {
                shape: 'St'
              }
            }
          },
          S2v: {
            type: 'structure',
            members: {
              DesiredInstanceType: {},
              DesiredReplicationCount: {
                type: 'integer'
              },
              DesiredPartitionCount: {
                type: 'integer'
              }
            }
          },
          S2z: {
            type: 'structure',
            required: ['Options', 'Status'],
            members: {
              Options: {},
              Status: {
                shape: 'St'
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=241456ab5b1ca90a888e92a4b08965e00f6a992f.js.map