System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2018-05-10',
          endpointPrefix: 'kinesisvideo',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceFullName: 'Amazon Kinesis Video WebRTC Storage',
          serviceId: 'Kinesis Video WebRTC Storage',
          signatureVersion: 'v4',
          signingName: 'kinesisvideo',
          uid: 'kinesis-video-webrtc-storage-2018-05-10'
        },
        operations: {
          JoinStorageSession: {
            http: {
              requestUri: '/joinStorageSession',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['channelArn'],
              members: {
                channelArn: {}
              }
            }
          }
        },
        shapes: {}
      });
    }
  };
});
//# sourceMappingURL=e432e008a971817321eb462eb189d81de94446ab.js.map