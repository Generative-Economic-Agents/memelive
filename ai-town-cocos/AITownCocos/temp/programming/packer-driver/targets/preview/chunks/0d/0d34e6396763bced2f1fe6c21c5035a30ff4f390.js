System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2024-01-01',
          endpointPrefix: 'scn',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceFullName: 'AWS Supply Chain',
          serviceId: 'SupplyChain',
          signatureVersion: 'v4',
          signingName: 'scn',
          uid: 'supplychain-2024-01-01'
        },
        operations: {
          CreateBillOfMaterialsImportJob: {
            http: {
              requestUri: '/api/configuration/instances/{instanceId}/bill-of-materials-import-jobs',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['instanceId', 's3uri'],
              members: {
                instanceId: {
                  location: 'uri',
                  locationName: 'instanceId'
                },
                s3uri: {},
                clientToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              required: ['jobId'],
              members: {
                jobId: {}
              }
            },
            idempotent: true
          },
          GetBillOfMaterialsImportJob: {
            http: {
              method: 'GET',
              requestUri: '/api/configuration/instances/{instanceId}/bill-of-materials-import-jobs/{jobId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['instanceId', 'jobId'],
              members: {
                instanceId: {
                  location: 'uri',
                  locationName: 'instanceId'
                },
                jobId: {
                  location: 'uri',
                  locationName: 'jobId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['job'],
              members: {
                job: {
                  type: 'structure',
                  required: ['instanceId', 'jobId', 'status', 's3uri'],
                  members: {
                    instanceId: {},
                    jobId: {},
                    status: {},
                    s3uri: {},
                    message: {}
                  }
                }
              }
            }
          },
          SendDataIntegrationEvent: {
            http: {
              requestUri: '/api-data/data-integration/instance/{instanceId}/data-integration-events',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['instanceId', 'eventType', 'data', 'eventGroupId'],
              members: {
                instanceId: {
                  location: 'uri',
                  locationName: 'instanceId'
                },
                eventType: {},
                data: {
                  type: 'string',
                  sensitive: true
                },
                eventGroupId: {},
                eventTimestamp: {
                  type: 'timestamp',
                  timestampFormat: 'unixTimestamp'
                },
                clientToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              required: ['eventId'],
              members: {
                eventId: {}
              }
            },
            idempotent: true
          }
        },
        shapes: {}
      });
    }
  };
});
//# sourceMappingURL=0d34e6396763bced2f1fe6c21c5035a30ff4f390.js.map