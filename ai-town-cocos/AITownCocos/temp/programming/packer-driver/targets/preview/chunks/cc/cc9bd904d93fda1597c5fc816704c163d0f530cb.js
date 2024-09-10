System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2023-08-08',
          endpointPrefix: 'inspector-scan',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceAbbreviation: 'inspector-scan',
          serviceFullName: 'Inspector Scan',
          serviceId: 'Inspector Scan',
          signatureVersion: 'v4',
          signingName: 'inspector-scan',
          uid: 'inspector-scan-2023-08-08'
        },
        operations: {
          ScanSbom: {
            http: {
              requestUri: '/scan/sbom',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['sbom'],
              members: {
                sbom: {
                  shape: 'S2'
                },
                outputFormat: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                sbom: {
                  shape: 'S2'
                }
              }
            },
            idempotent: true
          }
        },
        shapes: {
          S2: {
            type: 'structure',
            members: {},
            document: true
          }
        }
      });
    }
  };
});
//# sourceMappingURL=cc9bd904d93fda1597c5fc816704c163d0f530cb.js.map