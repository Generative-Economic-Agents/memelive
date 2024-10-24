System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2019-12-04',
          endpointPrefix: 'kinesisvideo',
          protocol: 'rest-json',
          serviceAbbreviation: 'Amazon Kinesis Video Signaling Channels',
          serviceFullName: 'Amazon Kinesis Video Signaling Channels',
          serviceId: 'Kinesis Video Signaling',
          signatureVersion: 'v4',
          uid: 'kinesis-video-signaling-2019-12-04'
        },
        operations: {
          GetIceServerConfig: {
            http: {
              requestUri: '/v1/get-ice-server-config'
            },
            input: {
              type: 'structure',
              required: ['ChannelARN'],
              members: {
                ChannelARN: {},
                ClientId: {},
                Service: {},
                Username: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                IceServerList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Uris: {
                        type: 'list',
                        member: {}
                      },
                      Username: {},
                      Password: {},
                      Ttl: {
                        type: 'integer'
                      }
                    }
                  }
                }
              }
            }
          },
          SendAlexaOfferToMaster: {
            http: {
              requestUri: '/v1/send-alexa-offer-to-master'
            },
            input: {
              type: 'structure',
              required: ['ChannelARN', 'SenderClientId', 'MessagePayload'],
              members: {
                ChannelARN: {},
                SenderClientId: {},
                MessagePayload: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Answer: {}
              }
            }
          }
        },
        shapes: {}
      });
    }
  };
});
//# sourceMappingURL=8d2634b04ccaba7cb8710b7cf06d878a3ad1a208.js.map