System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2017-01-06',
          endpointPrefix: 'cur',
          jsonVersion: '1.1',
          protocol: 'json',
          serviceFullName: 'AWS Cost and Usage Report Service',
          serviceId: 'Cost and Usage Report Service',
          signatureVersion: 'v4',
          signingName: 'cur',
          targetPrefix: 'AWSOrigamiServiceGatewayService',
          uid: 'cur-2017-01-06'
        },
        operations: {
          DeleteReportDefinition: {
            input: {
              type: 'structure',
              required: ['ReportName'],
              members: {
                ReportName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ResponseMessage: {}
              }
            }
          },
          DescribeReportDefinitions: {
            input: {
              type: 'structure',
              members: {
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ReportDefinitions: {
                  type: 'list',
                  member: {
                    shape: 'Sa'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListTagsForResource: {
            input: {
              type: 'structure',
              required: ['ReportName'],
              members: {
                ReportName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Tags: {
                  shape: 'St'
                }
              }
            }
          },
          ModifyReportDefinition: {
            input: {
              type: 'structure',
              required: ['ReportName', 'ReportDefinition'],
              members: {
                ReportName: {},
                ReportDefinition: {
                  shape: 'Sa'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          PutReportDefinition: {
            input: {
              type: 'structure',
              required: ['ReportDefinition'],
              members: {
                ReportDefinition: {
                  shape: 'Sa'
                },
                Tags: {
                  shape: 'St'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          TagResource: {
            input: {
              type: 'structure',
              required: ['ReportName', 'Tags'],
              members: {
                ReportName: {},
                Tags: {
                  shape: 'St'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UntagResource: {
            input: {
              type: 'structure',
              required: ['ReportName', 'TagKeys'],
              members: {
                ReportName: {},
                TagKeys: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          }
        },
        shapes: {
          Sa: {
            type: 'structure',
            required: ['ReportName', 'TimeUnit', 'Format', 'Compression', 'AdditionalSchemaElements', 'S3Bucket', 'S3Prefix', 'S3Region'],
            members: {
              ReportName: {},
              TimeUnit: {},
              Format: {},
              Compression: {},
              AdditionalSchemaElements: {
                type: 'list',
                member: {}
              },
              S3Bucket: {},
              S3Prefix: {},
              S3Region: {},
              AdditionalArtifacts: {
                type: 'list',
                member: {}
              },
              RefreshClosedReports: {
                type: 'boolean'
              },
              ReportVersioning: {},
              BillingViewArn: {},
              ReportStatus: {
                type: 'structure',
                members: {
                  lastDelivery: {},
                  lastStatus: {}
                }
              }
            }
          },
          St: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Key', 'Value'],
              members: {
                Key: {},
                Value: {}
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=1ffd641f4fca460f7649600beaca37bed7cd1de8.js.map