System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2014-06-05',
          endpointPrefix: 'mobileanalytics',
          serviceFullName: 'Amazon Mobile Analytics',
          serviceId: 'Mobile Analytics',
          signatureVersion: 'v4',
          protocol: 'rest-json'
        },
        operations: {
          PutEvents: {
            http: {
              requestUri: '/2014-06-05/events',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['events', 'clientContext'],
              members: {
                events: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['eventType', 'timestamp'],
                    members: {
                      eventType: {},
                      timestamp: {},
                      session: {
                        type: 'structure',
                        members: {
                          id: {},
                          duration: {
                            type: 'long'
                          },
                          startTimestamp: {},
                          stopTimestamp: {}
                        }
                      },
                      version: {},
                      attributes: {
                        type: 'map',
                        key: {},
                        value: {}
                      },
                      metrics: {
                        type: 'map',
                        key: {},
                        value: {
                          type: 'double'
                        }
                      }
                    }
                  }
                },
                clientContext: {
                  location: 'header',
                  locationName: 'x-amz-Client-Context'
                },
                clientContextEncoding: {
                  location: 'header',
                  locationName: 'x-amz-Client-Context-Encoding'
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
//# sourceMappingURL=e78bf91f639422fd62df625cb8c53fb97e23deaa.js.map