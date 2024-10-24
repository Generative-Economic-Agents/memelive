System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2021-08-11',
          endpointPrefix: 'cloudtrail-data',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceFullName: 'AWS CloudTrail Data Service',
          serviceId: 'CloudTrail Data',
          signatureVersion: 'v4',
          signingName: 'cloudtrail-data',
          uid: 'cloudtrail-data-2021-08-11'
        },
        operations: {
          PutAuditEvents: {
            http: {
              requestUri: '/PutAuditEvents',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['auditEvents', 'channelArn'],
              members: {
                auditEvents: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['eventData', 'id'],
                    members: {
                      eventData: {},
                      eventDataChecksum: {},
                      id: {}
                    }
                  }
                },
                channelArn: {
                  location: 'querystring',
                  locationName: 'channelArn'
                },
                externalId: {
                  location: 'querystring',
                  locationName: 'externalId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['failed', 'successful'],
              members: {
                failed: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['errorCode', 'errorMessage', 'id'],
                    members: {
                      errorCode: {},
                      errorMessage: {},
                      id: {}
                    }
                  }
                },
                successful: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['eventID', 'id'],
                    members: {
                      eventID: {},
                      id: {}
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
//# sourceMappingURL=76d67f7854e06e683ab7bae9144124cde2305eb4.js.map