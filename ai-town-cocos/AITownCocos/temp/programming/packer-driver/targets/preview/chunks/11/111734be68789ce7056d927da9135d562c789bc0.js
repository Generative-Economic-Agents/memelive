System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2019-05-01',
          endpointPrefix: 'workmailmessageflow',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceFullName: 'Amazon WorkMail Message Flow',
          serviceId: 'WorkMailMessageFlow',
          signatureVersion: 'v4',
          uid: 'workmailmessageflow-2019-05-01'
        },
        operations: {
          GetRawMessageContent: {
            http: {
              method: 'GET',
              requestUri: '/messages/{messageId}'
            },
            input: {
              type: 'structure',
              required: ['messageId'],
              members: {
                messageId: {
                  location: 'uri',
                  locationName: 'messageId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['messageContent'],
              members: {
                messageContent: {
                  type: 'blob',
                  streaming: true
                }
              },
              payload: 'messageContent'
            }
          },
          PutRawMessageContent: {
            http: {
              requestUri: '/messages/{messageId}'
            },
            input: {
              type: 'structure',
              required: ['messageId', 'content'],
              members: {
                messageId: {
                  location: 'uri',
                  locationName: 'messageId'
                },
                content: {
                  type: 'structure',
                  required: ['s3Reference'],
                  members: {
                    s3Reference: {
                      type: 'structure',
                      required: ['bucket', 'key'],
                      members: {
                        bucket: {},
                        key: {},
                        objectVersion: {}
                      }
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          }
        },
        shapes: {}
      });
    }
  };
});
//# sourceMappingURL=111734be68789ce7056d927da9135d562c789bc0.js.map