System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          uid: 'importexport-2010-06-01',
          apiVersion: '2010-06-01',
          endpointPrefix: 'importexport',
          globalEndpoint: 'importexport.amazonaws.com',
          serviceFullName: 'AWS Import/Export',
          serviceId: 'ImportExport',
          signatureVersion: 'v2',
          xmlNamespace: 'http://importexport.amazonaws.com/doc/2010-06-01/',
          protocol: 'query'
        },
        operations: {
          CancelJob: {
            http: {
              requestUri: '/?Operation=CancelJob'
            },
            input: {
              type: 'structure',
              required: ['JobId'],
              members: {
                JobId: {},
                APIVersion: {}
              }
            },
            output: {
              resultWrapper: 'CancelJobResult',
              type: 'structure',
              members: {
                Success: {
                  type: 'boolean'
                }
              }
            }
          },
          CreateJob: {
            http: {
              requestUri: '/?Operation=CreateJob'
            },
            input: {
              type: 'structure',
              required: ['JobType', 'Manifest', 'ValidateOnly'],
              members: {
                JobType: {},
                Manifest: {},
                ManifestAddendum: {},
                ValidateOnly: {
                  type: 'boolean'
                },
                APIVersion: {}
              }
            },
            output: {
              resultWrapper: 'CreateJobResult',
              type: 'structure',
              members: {
                JobId: {},
                JobType: {},
                Signature: {},
                SignatureFileContents: {},
                WarningMessage: {},
                ArtifactList: {
                  shape: 'Sf'
                }
              }
            }
          },
          GetShippingLabel: {
            http: {
              requestUri: '/?Operation=GetShippingLabel'
            },
            input: {
              type: 'structure',
              required: ['jobIds'],
              members: {
                jobIds: {
                  type: 'list',
                  member: {}
                },
                name: {},
                company: {},
                phoneNumber: {},
                country: {},
                stateOrProvince: {},
                city: {},
                postalCode: {},
                street1: {},
                street2: {},
                street3: {},
                APIVersion: {}
              }
            },
            output: {
              resultWrapper: 'GetShippingLabelResult',
              type: 'structure',
              members: {
                ShippingLabelURL: {},
                Warning: {}
              }
            }
          },
          GetStatus: {
            http: {
              requestUri: '/?Operation=GetStatus'
            },
            input: {
              type: 'structure',
              required: ['JobId'],
              members: {
                JobId: {},
                APIVersion: {}
              }
            },
            output: {
              resultWrapper: 'GetStatusResult',
              type: 'structure',
              members: {
                JobId: {},
                JobType: {},
                LocationCode: {},
                LocationMessage: {},
                ProgressCode: {},
                ProgressMessage: {},
                Carrier: {},
                TrackingNumber: {},
                LogBucket: {},
                LogKey: {},
                ErrorCount: {
                  type: 'integer'
                },
                Signature: {},
                SignatureFileContents: {},
                CurrentManifest: {},
                CreationDate: {
                  type: 'timestamp'
                },
                ArtifactList: {
                  shape: 'Sf'
                }
              }
            }
          },
          ListJobs: {
            http: {
              requestUri: '/?Operation=ListJobs'
            },
            input: {
              type: 'structure',
              members: {
                MaxJobs: {
                  type: 'integer'
                },
                Marker: {},
                APIVersion: {}
              }
            },
            output: {
              resultWrapper: 'ListJobsResult',
              type: 'structure',
              members: {
                Jobs: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      JobId: {},
                      CreationDate: {
                        type: 'timestamp'
                      },
                      IsCanceled: {
                        type: 'boolean'
                      },
                      JobType: {}
                    }
                  }
                },
                IsTruncated: {
                  type: 'boolean'
                }
              }
            }
          },
          UpdateJob: {
            http: {
              requestUri: '/?Operation=UpdateJob'
            },
            input: {
              type: 'structure',
              required: ['JobId', 'Manifest', 'JobType', 'ValidateOnly'],
              members: {
                JobId: {},
                Manifest: {},
                JobType: {},
                ValidateOnly: {
                  type: 'boolean'
                },
                APIVersion: {}
              }
            },
            output: {
              resultWrapper: 'UpdateJobResult',
              type: 'structure',
              members: {
                Success: {
                  type: 'boolean'
                },
                WarningMessage: {},
                ArtifactList: {
                  shape: 'Sf'
                }
              }
            }
          }
        },
        shapes: {
          Sf: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Description: {},
                URL: {}
              }
            }
          }
        },
        examples: {}
      });
    }
  };
});
//# sourceMappingURL=29e3bceef921a6d9e69c514309ec45d99d867062.js.map