System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2017-09-30',
          endpointPrefix: 'kinesisvideo',
          protocol: 'rest-json',
          serviceAbbreviation: 'Kinesis Video Media',
          serviceFullName: 'Amazon Kinesis Video Streams Media',
          serviceId: 'Kinesis Video Media',
          signatureVersion: 'v4',
          uid: 'kinesis-video-media-2017-09-30'
        },
        operations: {
          GetMedia: {
            http: {
              requestUri: '/getMedia'
            },
            input: {
              type: 'structure',
              required: ['StartSelector'],
              members: {
                StreamName: {},
                StreamARN: {},
                StartSelector: {
                  type: 'structure',
                  required: ['StartSelectorType'],
                  members: {
                    StartSelectorType: {},
                    AfterFragmentNumber: {},
                    StartTimestamp: {
                      type: 'timestamp'
                    },
                    ContinuationToken: {}
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ContentType: {
                  location: 'header',
                  locationName: 'Content-Type'
                },
                Payload: {
                  type: 'blob',
                  streaming: true
                }
              },
              payload: 'Payload'
            }
          }
        },
        shapes: {}
      });
    }
  };
});
//# sourceMappingURL=cf1c35bda9e5cf0942d92075efd33ce1181dfcb2.js.map