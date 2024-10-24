System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2023-11-26',
          endpointPrefix: 'eks-auth',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceFullName: 'Amazon EKS Auth',
          serviceId: 'EKS Auth',
          signatureVersion: 'v4',
          signingName: 'eks-auth',
          uid: 'eks-auth-2023-11-26'
        },
        operations: {
          AssumeRoleForPodIdentity: {
            http: {
              requestUri: '/clusters/{clusterName}/assume-role-for-pod-identity',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['clusterName', 'token'],
              members: {
                clusterName: {
                  location: 'uri',
                  locationName: 'clusterName'
                },
                token: {
                  type: 'string',
                  sensitive: true
                }
              }
            },
            output: {
              type: 'structure',
              required: ['subject', 'audience', 'podIdentityAssociation', 'assumedRoleUser', 'credentials'],
              members: {
                subject: {
                  type: 'structure',
                  required: ['namespace', 'serviceAccount'],
                  members: {
                    namespace: {},
                    serviceAccount: {}
                  }
                },
                audience: {},
                podIdentityAssociation: {
                  type: 'structure',
                  required: ['associationArn', 'associationId'],
                  members: {
                    associationArn: {},
                    associationId: {}
                  }
                },
                assumedRoleUser: {
                  type: 'structure',
                  required: ['arn', 'assumeRoleId'],
                  members: {
                    arn: {},
                    assumeRoleId: {}
                  }
                },
                credentials: {
                  type: 'structure',
                  required: ['sessionToken', 'secretAccessKey', 'accessKeyId', 'expiration'],
                  members: {
                    sessionToken: {},
                    secretAccessKey: {},
                    accessKeyId: {},
                    expiration: {
                      type: 'timestamp'
                    }
                  },
                  sensitive: true
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
//# sourceMappingURL=a274ce694edd08254f7c52d883c0743c6732bae9.js.map