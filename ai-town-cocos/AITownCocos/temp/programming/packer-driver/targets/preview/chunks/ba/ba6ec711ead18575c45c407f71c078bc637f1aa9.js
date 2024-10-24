System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2015-07-01',
          endpointPrefix: 'marketplacecommerceanalytics',
          jsonVersion: '1.1',
          protocol: 'json',
          serviceFullName: 'AWS Marketplace Commerce Analytics',
          serviceId: 'Marketplace Commerce Analytics',
          signatureVersion: 'v4',
          signingName: 'marketplacecommerceanalytics',
          targetPrefix: 'MarketplaceCommerceAnalytics20150701',
          uid: 'marketplacecommerceanalytics-2015-07-01'
        },
        operations: {
          GenerateDataSet: {
            input: {
              type: 'structure',
              required: ['dataSetType', 'dataSetPublicationDate', 'roleNameArn', 'destinationS3BucketName', 'snsTopicArn'],
              members: {
                dataSetType: {},
                dataSetPublicationDate: {
                  type: 'timestamp'
                },
                roleNameArn: {},
                destinationS3BucketName: {},
                destinationS3Prefix: {},
                snsTopicArn: {},
                customerDefinedValues: {
                  shape: 'S8'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                dataSetRequestId: {}
              }
            }
          },
          StartSupportDataExport: {
            input: {
              type: 'structure',
              required: ['dataSetType', 'fromDate', 'roleNameArn', 'destinationS3BucketName', 'snsTopicArn'],
              members: {
                dataSetType: {},
                fromDate: {
                  type: 'timestamp'
                },
                roleNameArn: {},
                destinationS3BucketName: {},
                destinationS3Prefix: {},
                snsTopicArn: {},
                customerDefinedValues: {
                  shape: 'S8'
                }
              },
              deprecated: true,
              deprecatedMessage: 'This target has been deprecated. As of December 2022 Product Support Connection is no longer supported.'
            },
            output: {
              type: 'structure',
              members: {
                dataSetRequestId: {}
              },
              deprecated: true,
              deprecatedMessage: 'This target has been deprecated. As of December 2022 Product Support Connection is no longer supported.'
            },
            deprecated: true,
            deprecatedMessage: 'This target has been deprecated. As of December 2022 Product Support Connection is no longer supported.'
          }
        },
        shapes: {
          S8: {
            type: 'map',
            key: {},
            value: {}
          }
        }
      });
    }
  };
});
//# sourceMappingURL=ba6ec711ead18575c45c407f71c078bc637f1aa9.js.map