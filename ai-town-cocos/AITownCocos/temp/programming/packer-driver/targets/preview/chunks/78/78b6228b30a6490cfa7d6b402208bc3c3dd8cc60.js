System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2018-04-02',
          endpointPrefix: 'ec2-instance-connect',
          jsonVersion: '1.1',
          protocol: 'json',
          serviceAbbreviation: 'EC2 Instance Connect',
          serviceFullName: 'AWS EC2 Instance Connect',
          serviceId: 'EC2 Instance Connect',
          signatureVersion: 'v4',
          targetPrefix: 'AWSEC2InstanceConnectService',
          uid: 'ec2-instance-connect-2018-04-02'
        },
        operations: {
          SendSSHPublicKey: {
            input: {
              type: 'structure',
              required: ['InstanceId', 'InstanceOSUser', 'SSHPublicKey'],
              members: {
                InstanceId: {},
                InstanceOSUser: {},
                SSHPublicKey: {},
                AvailabilityZone: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                RequestId: {},
                Success: {
                  type: 'boolean'
                }
              }
            }
          },
          SendSerialConsoleSSHPublicKey: {
            input: {
              type: 'structure',
              required: ['InstanceId', 'SSHPublicKey'],
              members: {
                InstanceId: {},
                SerialPort: {
                  type: 'integer'
                },
                SSHPublicKey: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                RequestId: {},
                Success: {
                  type: 'boolean'
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
//# sourceMappingURL=78b6228b30a6490cfa7d6b402208bc3c3dd8cc60.js.map