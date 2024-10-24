System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2019-06-24',
          endpointPrefix: 'servicequotas',
          jsonVersion: '1.1',
          protocol: 'json',
          serviceFullName: 'Service Quotas',
          serviceId: 'Service Quotas',
          signatureVersion: 'v4',
          targetPrefix: 'ServiceQuotasV20190624',
          uid: 'service-quotas-2019-06-24'
        },
        operations: {
          AssociateServiceQuotaTemplate: {
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteServiceQuotaIncreaseRequestFromTemplate: {
            input: {
              type: 'structure',
              required: ['ServiceCode', 'QuotaCode', 'AwsRegion'],
              members: {
                ServiceCode: {},
                QuotaCode: {},
                AwsRegion: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DisassociateServiceQuotaTemplate: {
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          GetAWSDefaultServiceQuota: {
            input: {
              type: 'structure',
              required: ['ServiceCode', 'QuotaCode'],
              members: {
                ServiceCode: {},
                QuotaCode: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Quota: {
                  shape: 'Sc'
                }
              }
            }
          },
          GetAssociationForServiceQuotaTemplate: {
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {
                ServiceQuotaTemplateAssociationStatus: {}
              }
            }
          },
          GetRequestedServiceQuotaChange: {
            input: {
              type: 'structure',
              required: ['RequestId'],
              members: {
                RequestId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                RequestedQuota: {
                  shape: 'S18'
                }
              }
            }
          },
          GetServiceQuota: {
            input: {
              type: 'structure',
              required: ['ServiceCode', 'QuotaCode'],
              members: {
                ServiceCode: {},
                QuotaCode: {},
                ContextId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Quota: {
                  shape: 'Sc'
                }
              }
            }
          },
          GetServiceQuotaIncreaseRequestFromTemplate: {
            input: {
              type: 'structure',
              required: ['ServiceCode', 'QuotaCode', 'AwsRegion'],
              members: {
                ServiceCode: {},
                QuotaCode: {},
                AwsRegion: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ServiceQuotaIncreaseRequestInTemplate: {
                  shape: 'S1h'
                }
              }
            }
          },
          ListAWSDefaultServiceQuotas: {
            input: {
              type: 'structure',
              required: ['ServiceCode'],
              members: {
                ServiceCode: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                Quotas: {
                  shape: 'S1m'
                }
              }
            }
          },
          ListRequestedServiceQuotaChangeHistory: {
            input: {
              type: 'structure',
              members: {
                ServiceCode: {},
                Status: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                QuotaRequestedAtLevel: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                RequestedQuotas: {
                  shape: 'S1p'
                }
              }
            }
          },
          ListRequestedServiceQuotaChangeHistoryByQuota: {
            input: {
              type: 'structure',
              required: ['ServiceCode', 'QuotaCode'],
              members: {
                ServiceCode: {},
                QuotaCode: {},
                Status: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                QuotaRequestedAtLevel: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                RequestedQuotas: {
                  shape: 'S1p'
                }
              }
            }
          },
          ListServiceQuotaIncreaseRequestsInTemplate: {
            input: {
              type: 'structure',
              members: {
                ServiceCode: {},
                AwsRegion: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ServiceQuotaIncreaseRequestInTemplateList: {
                  type: 'list',
                  member: {
                    shape: 'S1h'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListServiceQuotas: {
            input: {
              type: 'structure',
              required: ['ServiceCode'],
              members: {
                ServiceCode: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                QuotaCode: {},
                QuotaAppliedAtLevel: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                Quotas: {
                  shape: 'S1m'
                }
              }
            }
          },
          ListServices: {
            input: {
              type: 'structure',
              members: {
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                Services: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ServiceCode: {},
                      ServiceName: {}
                    }
                  }
                }
              }
            }
          },
          ListTagsForResource: {
            input: {
              type: 'structure',
              required: ['ResourceARN'],
              members: {
                ResourceARN: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Tags: {
                  type: 'list',
                  member: {
                    shape: 'S25'
                  }
                }
              }
            }
          },
          PutServiceQuotaIncreaseRequestIntoTemplate: {
            input: {
              type: 'structure',
              required: ['QuotaCode', 'ServiceCode', 'AwsRegion', 'DesiredValue'],
              members: {
                QuotaCode: {},
                ServiceCode: {},
                AwsRegion: {},
                DesiredValue: {
                  type: 'double'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ServiceQuotaIncreaseRequestInTemplate: {
                  shape: 'S1h'
                }
              }
            }
          },
          RequestServiceQuotaIncrease: {
            input: {
              type: 'structure',
              required: ['ServiceCode', 'QuotaCode', 'DesiredValue'],
              members: {
                ServiceCode: {},
                QuotaCode: {},
                DesiredValue: {
                  type: 'double'
                },
                ContextId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                RequestedQuota: {
                  shape: 'S18'
                }
              }
            }
          },
          TagResource: {
            input: {
              type: 'structure',
              required: ['ResourceARN', 'Tags'],
              members: {
                ResourceARN: {},
                Tags: {
                  type: 'list',
                  member: {
                    shape: 'S25'
                  }
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
              required: ['ResourceARN', 'TagKeys'],
              members: {
                ResourceARN: {},
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
          Sc: {
            type: 'structure',
            members: {
              ServiceCode: {},
              ServiceName: {},
              QuotaArn: {},
              QuotaCode: {},
              QuotaName: {},
              Value: {
                type: 'double'
              },
              Unit: {},
              Adjustable: {
                type: 'boolean'
              },
              GlobalQuota: {
                type: 'boolean'
              },
              UsageMetric: {
                type: 'structure',
                members: {
                  MetricNamespace: {},
                  MetricName: {},
                  MetricDimensions: {
                    type: 'map',
                    key: {},
                    value: {}
                  },
                  MetricStatisticRecommendation: {}
                }
              },
              Period: {
                type: 'structure',
                members: {
                  PeriodValue: {
                    type: 'integer'
                  },
                  PeriodUnit: {}
                }
              },
              ErrorReason: {
                type: 'structure',
                members: {
                  ErrorCode: {},
                  ErrorMessage: {}
                }
              },
              QuotaAppliedAtLevel: {},
              QuotaContext: {
                shape: 'Sy'
              }
            }
          },
          Sy: {
            type: 'structure',
            members: {
              ContextScope: {},
              ContextScopeType: {},
              ContextId: {}
            }
          },
          S18: {
            type: 'structure',
            members: {
              Id: {},
              CaseId: {},
              ServiceCode: {},
              ServiceName: {},
              QuotaCode: {},
              QuotaName: {},
              DesiredValue: {
                type: 'double'
              },
              Status: {},
              Created: {
                type: 'timestamp'
              },
              LastUpdated: {
                type: 'timestamp'
              },
              Requester: {},
              QuotaArn: {},
              GlobalQuota: {
                type: 'boolean'
              },
              Unit: {},
              QuotaRequestedAtLevel: {},
              QuotaContext: {
                shape: 'Sy'
              }
            }
          },
          S1h: {
            type: 'structure',
            members: {
              ServiceCode: {},
              ServiceName: {},
              QuotaCode: {},
              QuotaName: {},
              DesiredValue: {
                type: 'double'
              },
              AwsRegion: {},
              Unit: {},
              GlobalQuota: {
                type: 'boolean'
              }
            }
          },
          S1m: {
            type: 'list',
            member: {
              shape: 'Sc'
            }
          },
          S1p: {
            type: 'list',
            member: {
              shape: 'S18'
            }
          },
          S25: {
            type: 'structure',
            required: ['Key', 'Value'],
            members: {
              Key: {},
              Value: {}
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=da5db3dd007b5c565644ee3d415e505e8c84c55c.js.map