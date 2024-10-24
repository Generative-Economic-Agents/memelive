System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2013-01-01',
          endpointPrefix: 'cloudsearchdomain',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceFullName: 'Amazon CloudSearch Domain',
          serviceId: 'CloudSearch Domain',
          signatureVersion: 'v4',
          signingName: 'cloudsearch',
          uid: 'cloudsearchdomain-2013-01-01'
        },
        operations: {
          Search: {
            http: {
              method: 'GET',
              requestUri: '/2013-01-01/search?format=sdk&pretty=true'
            },
            input: {
              type: 'structure',
              required: ['query'],
              members: {
                cursor: {
                  location: 'querystring',
                  locationName: 'cursor'
                },
                expr: {
                  location: 'querystring',
                  locationName: 'expr'
                },
                facet: {
                  location: 'querystring',
                  locationName: 'facet'
                },
                filterQuery: {
                  location: 'querystring',
                  locationName: 'fq'
                },
                highlight: {
                  location: 'querystring',
                  locationName: 'highlight'
                },
                partial: {
                  location: 'querystring',
                  locationName: 'partial',
                  type: 'boolean'
                },
                query: {
                  location: 'querystring',
                  locationName: 'q'
                },
                queryOptions: {
                  location: 'querystring',
                  locationName: 'q.options'
                },
                queryParser: {
                  location: 'querystring',
                  locationName: 'q.parser'
                },
                'return': {
                  location: 'querystring',
                  locationName: 'return'
                },
                size: {
                  location: 'querystring',
                  locationName: 'size',
                  type: 'long'
                },
                sort: {
                  location: 'querystring',
                  locationName: 'sort'
                },
                start: {
                  location: 'querystring',
                  locationName: 'start',
                  type: 'long'
                },
                stats: {
                  location: 'querystring',
                  locationName: 'stats'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                status: {
                  type: 'structure',
                  members: {
                    timems: {
                      type: 'long'
                    },
                    rid: {}
                  }
                },
                hits: {
                  type: 'structure',
                  members: {
                    found: {
                      type: 'long'
                    },
                    start: {
                      type: 'long'
                    },
                    cursor: {},
                    hit: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          id: {},
                          fields: {
                            type: 'map',
                            key: {},
                            value: {
                              type: 'list',
                              member: {}
                            }
                          },
                          exprs: {
                            type: 'map',
                            key: {},
                            value: {}
                          },
                          highlights: {
                            type: 'map',
                            key: {},
                            value: {}
                          }
                        }
                      }
                    }
                  }
                },
                facets: {
                  type: 'map',
                  key: {},
                  value: {
                    type: 'structure',
                    members: {
                      buckets: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            value: {},
                            count: {
                              type: 'long'
                            }
                          }
                        }
                      }
                    }
                  }
                },
                stats: {
                  type: 'map',
                  key: {},
                  value: {
                    type: 'structure',
                    members: {
                      min: {},
                      max: {},
                      count: {
                        type: 'long'
                      },
                      missing: {
                        type: 'long'
                      },
                      sum: {
                        type: 'double'
                      },
                      sumOfSquares: {
                        type: 'double'
                      },
                      mean: {},
                      stddev: {
                        type: 'double'
                      }
                    }
                  }
                }
              }
            }
          },
          Suggest: {
            http: {
              method: 'GET',
              requestUri: '/2013-01-01/suggest?format=sdk&pretty=true'
            },
            input: {
              type: 'structure',
              required: ['query', 'suggester'],
              members: {
                query: {
                  location: 'querystring',
                  locationName: 'q'
                },
                suggester: {
                  location: 'querystring',
                  locationName: 'suggester'
                },
                size: {
                  location: 'querystring',
                  locationName: 'size',
                  type: 'long'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                status: {
                  type: 'structure',
                  members: {
                    timems: {
                      type: 'long'
                    },
                    rid: {}
                  }
                },
                suggest: {
                  type: 'structure',
                  members: {
                    query: {},
                    found: {
                      type: 'long'
                    },
                    suggestions: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          suggestion: {},
                          score: {
                            type: 'long'
                          },
                          id: {}
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          UploadDocuments: {
            http: {
              requestUri: '/2013-01-01/documents/batch?format=sdk'
            },
            input: {
              type: 'structure',
              required: ['documents', 'contentType'],
              members: {
                documents: {
                  type: 'blob',
                  streaming: true
                },
                contentType: {
                  location: 'header',
                  locationName: 'Content-Type'
                }
              },
              payload: 'documents'
            },
            output: {
              type: 'structure',
              members: {
                status: {},
                adds: {
                  type: 'long'
                },
                deletes: {
                  type: 'long'
                },
                warnings: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      message: {}
                    }
                  }
                }
              }
            }
          }
        },
        shapes: {}
      });
    }
  };
});
//# sourceMappingURL=bf022a9af2ab34b6734f6e14e66928f3d45b0ec1.js.map