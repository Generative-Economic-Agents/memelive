System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2018-05-10',
          endpointPrefix: 'artifact',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceFullName: 'AWS Artifact',
          serviceId: 'Artifact',
          signatureVersion: 'v4',
          signingName: 'artifact',
          uid: 'artifact-2018-05-10'
        },
        operations: {
          GetAccountSettings: {
            http: {
              method: 'GET',
              requestUri: '/v1/account-settings/get',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {
                accountSettings: {
                  shape: 'S3'
                }
              }
            }
          },
          GetReport: {
            http: {
              method: 'GET',
              requestUri: '/v1/report/get',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['reportId', 'termToken'],
              members: {
                reportId: {
                  location: 'querystring',
                  locationName: 'reportId'
                },
                reportVersion: {
                  location: 'querystring',
                  locationName: 'reportVersion',
                  type: 'long'
                },
                termToken: {
                  location: 'querystring',
                  locationName: 'termToken'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                documentPresignedUrl: {}
              }
            }
          },
          GetReportMetadata: {
            http: {
              method: 'GET',
              requestUri: '/v1/report/getMetadata',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['reportId'],
              members: {
                reportId: {
                  location: 'querystring',
                  locationName: 'reportId'
                },
                reportVersion: {
                  location: 'querystring',
                  locationName: 'reportVersion',
                  type: 'long'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                reportDetails: {
                  type: 'structure',
                  members: {
                    acceptanceType: {},
                    arn: {},
                    category: {},
                    companyName: {},
                    createdAt: {
                      shape: 'Sg'
                    },
                    deletedAt: {
                      shape: 'Sg'
                    },
                    description: {},
                    id: {},
                    lastModifiedAt: {
                      shape: 'Sg'
                    },
                    name: {},
                    periodEnd: {
                      shape: 'Sg'
                    },
                    periodStart: {
                      shape: 'Sg'
                    },
                    productName: {},
                    sequenceNumber: {
                      type: 'long'
                    },
                    series: {},
                    state: {},
                    statusMessage: {},
                    termArn: {},
                    uploadState: {},
                    version: {
                      type: 'long'
                    }
                  }
                }
              }
            }
          },
          GetTermForReport: {
            http: {
              method: 'GET',
              requestUri: '/v1/report/getTermForReport',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['reportId'],
              members: {
                reportId: {
                  location: 'querystring',
                  locationName: 'reportId'
                },
                reportVersion: {
                  location: 'querystring',
                  locationName: 'reportVersion',
                  type: 'long'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                documentPresignedUrl: {},
                termToken: {}
              }
            }
          },
          ListReports: {
            http: {
              method: 'GET',
              requestUri: '/v1/report/list',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                maxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                nextToken: {},
                reports: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      arn: {},
                      category: {},
                      companyName: {},
                      description: {},
                      id: {},
                      name: {},
                      periodEnd: {
                        shape: 'Sg'
                      },
                      periodStart: {
                        shape: 'Sg'
                      },
                      productName: {},
                      series: {},
                      state: {},
                      statusMessage: {},
                      uploadState: {},
                      version: {
                        type: 'long'
                      }
                    }
                  }
                }
              }
            }
          },
          PutAccountSettings: {
            http: {
              method: 'PUT',
              requestUri: '/v1/account-settings/put',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                notificationSubscriptionStatus: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                accountSettings: {
                  shape: 'S3'
                }
              }
            },
            idempotent: true
          }
        },
        shapes: {
          S3: {
            type: 'structure',
            members: {
              notificationSubscriptionStatus: {}
            }
          },
          Sg: {
            type: 'timestamp',
            timestampFormat: 'iso8601'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=2eec1c82b85a959f3af9b4bec06e1df4377e812f.js.map