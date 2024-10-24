System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2018-05-10',
          endpointPrefix: 'controlcatalog',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceFullName: 'AWS Control Catalog',
          serviceId: 'ControlCatalog',
          signatureVersion: 'v4',
          signingName: 'controlcatalog',
          uid: 'controlcatalog-2018-05-10'
        },
        operations: {
          ListCommonControls: {
            http: {
              requestUri: '/common-controls',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                CommonControlFilter: {
                  type: 'structure',
                  members: {
                    Objectives: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          Arn: {}
                        }
                      }
                    }
                  }
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['CommonControls'],
              members: {
                CommonControls: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Arn', 'CreateTime', 'Description', 'Domain', 'LastUpdateTime', 'Name', 'Objective'],
                    members: {
                      Arn: {},
                      CreateTime: {
                        type: 'timestamp'
                      },
                      Description: {},
                      Domain: {
                        shape: 'Se'
                      },
                      LastUpdateTime: {
                        type: 'timestamp'
                      },
                      Name: {},
                      Objective: {
                        type: 'structure',
                        members: {
                          Arn: {},
                          Name: {}
                        }
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListDomains: {
            http: {
              requestUri: '/domains',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Domains'],
              members: {
                Domains: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Arn', 'CreateTime', 'Description', 'LastUpdateTime', 'Name'],
                    members: {
                      Arn: {},
                      CreateTime: {
                        type: 'timestamp'
                      },
                      Description: {},
                      LastUpdateTime: {
                        type: 'timestamp'
                      },
                      Name: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListObjectives: {
            http: {
              requestUri: '/objectives',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                ObjectiveFilter: {
                  type: 'structure',
                  members: {
                    Domains: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          Arn: {}
                        }
                      }
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Objectives'],
              members: {
                NextToken: {},
                Objectives: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Arn', 'CreateTime', 'Description', 'Domain', 'LastUpdateTime', 'Name'],
                    members: {
                      Arn: {},
                      CreateTime: {
                        type: 'timestamp'
                      },
                      Description: {},
                      Domain: {
                        shape: 'Se'
                      },
                      LastUpdateTime: {
                        type: 'timestamp'
                      },
                      Name: {}
                    }
                  }
                }
              }
            }
          }
        },
        shapes: {
          Se: {
            type: 'structure',
            members: {
              Arn: {},
              Name: {}
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=f05bde6bcab7a8f3991aad6f7896d102f7f9ca30.js.map