System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2020-09-10',
          endpointPrefix: 'application-cost-profiler',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceFullName: 'AWS Application Cost Profiler',
          serviceId: 'ApplicationCostProfiler',
          signatureVersion: 'v4',
          signingName: 'application-cost-profiler',
          uid: 'AWSApplicationCostProfiler-2020-09-10'
        },
        operations: {
          DeleteReportDefinition: {
            http: {
              method: 'DELETE',
              requestUri: '/reportDefinition/{reportId}'
            },
            input: {
              type: 'structure',
              required: ['reportId'],
              members: {
                reportId: {
                  location: 'uri',
                  locationName: 'reportId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                reportId: {}
              }
            }
          },
          GetReportDefinition: {
            http: {
              method: 'GET',
              requestUri: '/reportDefinition/{reportId}'
            },
            input: {
              type: 'structure',
              required: ['reportId'],
              members: {
                reportId: {
                  location: 'uri',
                  locationName: 'reportId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['reportId', 'reportDescription', 'reportFrequency', 'format', 'destinationS3Location', 'createdAt', 'lastUpdated'],
              members: {
                reportId: {},
                reportDescription: {},
                reportFrequency: {},
                format: {},
                destinationS3Location: {
                  shape: 'S9'
                },
                createdAt: {
                  type: 'timestamp'
                },
                lastUpdated: {
                  type: 'timestamp'
                }
              }
            }
          },
          ImportApplicationUsage: {
            http: {
              requestUri: '/importApplicationUsage'
            },
            input: {
              type: 'structure',
              required: ['sourceS3Location'],
              members: {
                sourceS3Location: {
                  type: 'structure',
                  required: ['bucket', 'key'],
                  members: {
                    bucket: {},
                    key: {},
                    region: {}
                  }
                }
              }
            },
            output: {
              type: 'structure',
              required: ['importId'],
              members: {
                importId: {}
              }
            }
          },
          ListReportDefinitions: {
            http: {
              method: 'GET',
              requestUri: '/reportDefinition'
            },
            input: {
              type: 'structure',
              members: {
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                maxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                reportDefinitions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      reportId: {},
                      reportDescription: {},
                      reportFrequency: {},
                      format: {},
                      destinationS3Location: {
                        shape: 'S9'
                      },
                      createdAt: {
                        type: 'timestamp'
                      },
                      lastUpdatedAt: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          PutReportDefinition: {
            http: {
              requestUri: '/reportDefinition'
            },
            input: {
              type: 'structure',
              required: ['reportId', 'reportDescription', 'reportFrequency', 'format', 'destinationS3Location'],
              members: {
                reportId: {},
                reportDescription: {},
                reportFrequency: {},
                format: {},
                destinationS3Location: {
                  shape: 'S9'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                reportId: {}
              }
            }
          },
          UpdateReportDefinition: {
            http: {
              method: 'PUT',
              requestUri: '/reportDefinition/{reportId}'
            },
            input: {
              type: 'structure',
              required: ['reportId', 'reportDescription', 'reportFrequency', 'format', 'destinationS3Location'],
              members: {
                reportId: {
                  location: 'uri',
                  locationName: 'reportId'
                },
                reportDescription: {},
                reportFrequency: {},
                format: {},
                destinationS3Location: {
                  shape: 'S9'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                reportId: {}
              }
            }
          }
        },
        shapes: {
          S9: {
            type: 'structure',
            required: ['bucket', 'prefix'],
            members: {
              bucket: {},
              prefix: {}
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=a2d405db286b7a08938f8477fbc685088e1a6396.js.map