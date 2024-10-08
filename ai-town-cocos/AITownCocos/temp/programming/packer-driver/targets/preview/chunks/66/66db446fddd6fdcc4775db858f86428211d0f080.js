System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2020-05-31',
          endpointPrefix: 'cloudfront',
          globalEndpoint: 'cloudfront.amazonaws.com',
          protocol: 'rest-xml',
          protocols: ['rest-xml'],
          serviceAbbreviation: 'CloudFront',
          serviceFullName: 'Amazon CloudFront',
          serviceId: 'CloudFront',
          signatureVersion: 'v4',
          uid: 'cloudfront-2020-05-31'
        },
        operations: {
          AssociateAlias: {
            http: {
              method: 'PUT',
              requestUri: '/2020-05-31/distribution/{TargetDistributionId}/associate-alias',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['TargetDistributionId', 'Alias'],
              members: {
                TargetDistributionId: {
                  location: 'uri',
                  locationName: 'TargetDistributionId'
                },
                Alias: {
                  location: 'querystring',
                  locationName: 'Alias'
                }
              }
            }
          },
          CopyDistribution: {
            http: {
              requestUri: '/2020-05-31/distribution/{PrimaryDistributionId}/copy',
              responseCode: 201
            },
            input: {
              locationName: 'CopyDistributionRequest',
              xmlNamespace: {
                uri: 'http://cloudfront.amazonaws.com/doc/2020-05-31/'
              },
              type: 'structure',
              required: ['PrimaryDistributionId', 'CallerReference'],
              members: {
                PrimaryDistributionId: {
                  location: 'uri',
                  locationName: 'PrimaryDistributionId'
                },
                Staging: {
                  location: 'header',
                  locationName: 'Staging',
                  type: 'boolean'
                },
                IfMatch: {
                  location: 'header',
                  locationName: 'If-Match'
                },
                CallerReference: {},
                Enabled: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Distribution: {
                  shape: 'S6'
                },
                Location: {
                  location: 'header',
                  locationName: 'Location'
                },
                ETag: {
                  location: 'header',
                  locationName: 'ETag'
                }
              },
              payload: 'Distribution'
            }
          },
          CreateCachePolicy: {
            http: {
              requestUri: '/2020-05-31/cache-policy',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['CachePolicyConfig'],
              members: {
                CachePolicyConfig: {
                  shape: 'S2n',
                  locationName: 'CachePolicyConfig',
                  xmlNamespace: {
                    uri: 'http://cloudfront.amazonaws.com/doc/2020-05-31/'
                  }
                }
              },
              payload: 'CachePolicyConfig'
            },
            output: {
              type: 'structure',
              members: {
                CachePolicy: {
                  shape: 'S2y'
                },
                Location: {
                  location: 'header',
                  locationName: 'Location'
                },
                ETag: {
                  location: 'header',
                  locationName: 'ETag'
                }
              },
              payload: 'CachePolicy'
            }
          },
          CreateCloudFrontOriginAccessIdentity: {
            http: {
              requestUri: '/2020-05-31/origin-access-identity/cloudfront',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['CloudFrontOriginAccessIdentityConfig'],
              members: {
                CloudFrontOriginAccessIdentityConfig: {
                  shape: 'S30',
                  locationName: 'CloudFrontOriginAccessIdentityConfig',
                  xmlNamespace: {
                    uri: 'http://cloudfront.amazonaws.com/doc/2020-05-31/'
                  }
                }
              },
              payload: 'CloudFrontOriginAccessIdentityConfig'
            },
            output: {
              type: 'structure',
              members: {
                CloudFrontOriginAccessIdentity: {
                  shape: 'S32'
                },
                Location: {
                  location: 'header',
                  locationName: 'Location'
                },
                ETag: {
                  location: 'header',
                  locationName: 'ETag'
                }
              },
              payload: 'CloudFrontOriginAccessIdentity'
            }
          },
          CreateContinuousDeploymentPolicy: {
            http: {
              requestUri: '/2020-05-31/continuous-deployment-policy',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['ContinuousDeploymentPolicyConfig'],
              members: {
                ContinuousDeploymentPolicyConfig: {
                  shape: 'S34',
                  locationName: 'ContinuousDeploymentPolicyConfig',
                  xmlNamespace: {
                    uri: 'http://cloudfront.amazonaws.com/doc/2020-05-31/'
                  }
                }
              },
              payload: 'ContinuousDeploymentPolicyConfig'
            },
            output: {
              type: 'structure',
              members: {
                ContinuousDeploymentPolicy: {
                  shape: 'S3e'
                },
                Location: {
                  location: 'header',
                  locationName: 'Location'
                },
                ETag: {
                  location: 'header',
                  locationName: 'ETag'
                }
              },
              payload: 'ContinuousDeploymentPolicy'
            }
          },
          CreateDistribution: {
            http: {
              requestUri: '/2020-05-31/distribution',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['DistributionConfig'],
              members: {
                DistributionConfig: {
                  shape: 'Sh',
                  locationName: 'DistributionConfig',
                  xmlNamespace: {
                    uri: 'http://cloudfront.amazonaws.com/doc/2020-05-31/'
                  }
                }
              },
              payload: 'DistributionConfig'
            },
            output: {
              type: 'structure',
              members: {
                Distribution: {
                  shape: 'S6'
                },
                Location: {
                  location: 'header',
                  locationName: 'Location'
                },
                ETag: {
                  location: 'header',
                  locationName: 'ETag'
                }
              },
              payload: 'Distribution'
            }
          },
          CreateDistributionWithTags: {
            http: {
              requestUri: '/2020-05-31/distribution?WithTags',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['DistributionConfigWithTags'],
              members: {
                DistributionConfigWithTags: {
                  locationName: 'DistributionConfigWithTags',
                  xmlNamespace: {
                    uri: 'http://cloudfront.amazonaws.com/doc/2020-05-31/'
                  },
                  type: 'structure',
                  required: ['DistributionConfig', 'Tags'],
                  members: {
                    DistributionConfig: {
                      shape: 'Sh'
                    },
                    Tags: {
                      shape: 'S3j'
                    }
                  }
                }
              },
              payload: 'DistributionConfigWithTags'
            },
            output: {
              type: 'structure',
              members: {
                Distribution: {
                  shape: 'S6'
                },
                Location: {
                  location: 'header',
                  locationName: 'Location'
                },
                ETag: {
                  location: 'header',
                  locationName: 'ETag'
                }
              },
              payload: 'Distribution'
            }
          },
          CreateFieldLevelEncryptionConfig: {
            http: {
              requestUri: '/2020-05-31/field-level-encryption',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['FieldLevelEncryptionConfig'],
              members: {
                FieldLevelEncryptionConfig: {
                  shape: 'S3q',
                  locationName: 'FieldLevelEncryptionConfig',
                  xmlNamespace: {
                    uri: 'http://cloudfront.amazonaws.com/doc/2020-05-31/'
                  }
                }
              },
              payload: 'FieldLevelEncryptionConfig'
            },
            output: {
              type: 'structure',
              members: {
                FieldLevelEncryption: {
                  shape: 'S41'
                },
                Location: {
                  location: 'header',
                  locationName: 'Location'
                },
                ETag: {
                  location: 'header',
                  locationName: 'ETag'
                }
              },
              payload: 'FieldLevelEncryption'
            }
          },
          CreateFieldLevelEncryptionProfile: {
            http: {
              requestUri: '/2020-05-31/field-level-encryption-profile',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['FieldLevelEncryptionProfileConfig'],
              members: {
                FieldLevelEncryptionProfileConfig: {
                  shape: 'S43',
                  locationName: 'FieldLevelEncryptionProfileConfig',
                  xmlNamespace: {
                    uri: 'http://cloudfront.amazonaws.com/doc/2020-05-31/'
                  }
                }
              },
              payload: 'FieldLevelEncryptionProfileConfig'
            },
            output: {
              type: 'structure',
              members: {
                FieldLevelEncryptionProfile: {
                  shape: 'S4a'
                },
                Location: {
                  location: 'header',
                  locationName: 'Location'
                },
                ETag: {
                  location: 'header',
                  locationName: 'ETag'
                }
              },
              payload: 'FieldLevelEncryptionProfile'
            }
          },
          CreateFunction: {
            http: {
              requestUri: '/2020-05-31/function',
              responseCode: 201
            },
            input: {
              locationName: 'CreateFunctionRequest',
              xmlNamespace: {
                uri: 'http://cloudfront.amazonaws.com/doc/2020-05-31/'
              },
              type: 'structure',
              required: ['Name', 'FunctionConfig', 'FunctionCode'],
              members: {
                Name: {},
                FunctionConfig: {
                  shape: 'S4d'
                },
                FunctionCode: {
                  shape: 'S4j'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                FunctionSummary: {
                  shape: 'S4l'
                },
                Location: {
                  location: 'header',
                  locationName: 'Location'
                },
                ETag: {
                  location: 'header',
                  locationName: 'ETag'
                }
              },
              payload: 'FunctionSummary'
            }
          },
          CreateInvalidation: {
            http: {
              requestUri: '/2020-05-31/distribution/{DistributionId}/invalidation',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['DistributionId', 'InvalidationBatch'],
              members: {
                DistributionId: {
                  location: 'uri',
                  locationName: 'DistributionId'
                },
                InvalidationBatch: {
                  shape: 'S4p',
                  locationName: 'InvalidationBatch',
                  xmlNamespace: {
                    uri: 'http://cloudfront.amazonaws.com/doc/2020-05-31/'
                  }
                }
              },
              payload: 'InvalidationBatch'
            },
            output: {
              type: 'structure',
              members: {
                Location: {
                  location: 'header',
                  locationName: 'Location'
                },
                Invalidation: {
                  shape: 'S4t'
                }
              },
              payload: 'Invalidation'
            }
          },
          CreateKeyGroup: {
            http: {
              requestUri: '/2020-05-31/key-group',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['KeyGroupConfig'],
              members: {
                KeyGroupConfig: {
                  shape: 'S4v',
                  locationName: 'KeyGroupConfig',
                  xmlNamespace: {
                    uri: 'http://cloudfront.amazonaws.com/doc/2020-05-31/'
                  }
                }
              },
              payload: 'KeyGroupConfig'
            },
            output: {
              type: 'structure',
              members: {
                KeyGroup: {
                  shape: 'S4y'
                },
                Location: {
                  location: 'header',
                  locationName: 'Location'
                },
                ETag: {
                  location: 'header',
                  locationName: 'ETag'
                }
              },
              payload: 'KeyGroup'
            }
          },
          CreateKeyValueStore: {
            http: {
              requestUri: '/2020-05-31/key-value-store/',
              responseCode: 201
            },
            input: {
              locationName: 'CreateKeyValueStoreRequest',
              xmlNamespace: {
                uri: 'http://cloudfront.amazonaws.com/doc/2020-05-31/'
              },
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {},
                Comment: {},
                ImportSource: {
                  type: 'structure',
                  required: ['SourceType', 'SourceARN'],
                  members: {
                    SourceType: {},
                    SourceARN: {}
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                KeyValueStore: {
                  shape: 'S55'
                },
                ETag: {
                  location: 'header',
                  locationName: 'ETag'
                },
                Location: {
                  location: 'header',
                  locationName: 'Location'
                }
              },
              payload: 'KeyValueStore'
            }
          },
          CreateMonitoringSubscription: {
            http: {
              requestUri: '/2020-05-31/distributions/{DistributionId}/monitoring-subscription/'
            },
            input: {
              type: 'structure',
              required: ['MonitoringSubscription', 'DistributionId'],
              members: {
                DistributionId: {
                  location: 'uri',
                  locationName: 'DistributionId'
                },
                MonitoringSubscription: {
                  shape: 'S57',
                  locationName: 'MonitoringSubscription',
                  xmlNamespace: {
                    uri: 'http://cloudfront.amazonaws.com/doc/2020-05-31/'
                  }
                }
              },
              payload: 'MonitoringSubscription'
            },
            output: {
              type: 'structure',
              members: {
                MonitoringSubscription: {
                  shape: 'S57'
                }
              },
              payload: 'MonitoringSubscription'
            }
          },
          CreateOriginAccessControl: {
            http: {
              requestUri: '/2020-05-31/origin-access-control',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['OriginAccessControlConfig'],
              members: {
                OriginAccessControlConfig: {
                  shape: 'S5c',
                  locationName: 'OriginAccessControlConfig',
                  xmlNamespace: {
                    uri: 'http://cloudfront.amazonaws.com/doc/2020-05-31/'
                  }
                }
              },
              payload: 'OriginAccessControlConfig'
            },
            output: {
              type: 'structure',
              members: {
                OriginAccessControl: {
                  shape: 'S5h'
                },
                Location: {
                  location: 'header',
                  locationName: 'Location'
                },
                ETag: {
                  location: 'header',
                  locationName: 'ETag'
                }
              },
              payload: 'OriginAccessControl'
            }
          },
          CreateOriginRequestPolicy: {
            http: {
              requestUri: '/2020-05-31/origin-request-policy',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['OriginRequestPolicyConfig'],
              members: {
                OriginRequestPolicyConfig: {
                  shape: 'S5j',
                  locationName: 'OriginRequestPolicyConfig',
                  xmlNamespace: {
                    uri: 'http://cloudfront.amazonaws.com/doc/2020-05-31/'
                  }
                }
              },
              payload: 'OriginRequestPolicyConfig'
            },
            output: {
              type: 'structure',
              members: {
                OriginRequestPolicy: {
                  shape: 'S5r'
                },
                Location: {
                  location: 'header',
                  locationName: 'Location'
                },
                ETag: {
                  location: 'header',
                  locationName: 'ETag'
                }
              },
              payload: 'OriginRequestPolicy'
            }
          },
          CreatePublicKey: {
            http: {
              requestUri: '/2020-05-31/public-key',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['PublicKeyConfig'],
              members: {
                PublicKeyConfig: {
                  shape: 'S5t',
                  locationName: 'PublicKeyConfig',
                  xmlNamespace: {
                    uri: 'http://cloudfront.amazonaws.com/doc/2020-05-31/'
                  }
                }
              },
              payload: 'PublicKeyConfig'
            },
            output: {
              type: 'structure',
              members: {
                PublicKey: {
                  shape: 'S5v'
                },
                Location: {
                  location: 'header',
                  locationName: 'Location'
                },
                ETag: {
                  location: 'header',
                  locationName: 'ETag'
                }
              },
              payload: 'PublicKey'
            }
          },
          CreateRealtimeLogConfig: {
            http: {
              requestUri: '/2020-05-31/realtime-log-config',
              responseCode: 201
            },
            input: {
              locationName: 'CreateRealtimeLogConfigRequest',
              xmlNamespace: {
                uri: 'http://cloudfront.amazonaws.com/doc/2020-05-31/'
              },
              type: 'structure',
              required: ['EndPoints', 'Fields', 'Name', 'SamplingRate'],
              members: {
                EndPoints: {
                  shape: 'S5x'
                },
                Fields: {
                  shape: 'S60'
                },
                Name: {},
                SamplingRate: {
                  type: 'long'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                RealtimeLogConfig: {
                  shape: 'S62'
                }
              }
            }
          },
          CreateResponseHeadersPolicy: {
            http: {
              requestUri: '/2020-05-31/response-headers-policy',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['ResponseHeadersPolicyConfig'],
              members: {
                ResponseHeadersPolicyConfig: {
                  shape: 'S64',
                  locationName: 'ResponseHeadersPolicyConfig',
                  xmlNamespace: {
                    uri: 'http://cloudfront.amazonaws.com/doc/2020-05-31/'
                  }
                }
              },
              payload: 'ResponseHeadersPolicyConfig'
            },
            output: {
              type: 'structure',
              members: {
                ResponseHeadersPolicy: {
                  shape: 'S6x'
                },
                Location: {
                  location: 'header',
                  locationName: 'Location'
                },
                ETag: {
                  location: 'header',
                  locationName: 'ETag'
                }
              },
              payload: 'ResponseHeadersPolicy'
            }
          },
          CreateStreamingDistribution: {
            http: {
              requestUri: '/2020-05-31/streaming-distribution',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['StreamingDistributionConfig'],
              members: {
                StreamingDistributionConfig: {
                  shape: 'S6z',
                  locationName: 'StreamingDistributionConfig',
                  xmlNamespace: {
                    uri: 'http://cloudfront.amazonaws.com/doc/2020-05-31/'
                  }
                }
              },
              payload: 'StreamingDistributionConfig'
            },
            output: {
              type: 'structure',
              members: {
                StreamingDistribution: {
                  shape: 'S73'
                },
                Location: {
                  location: 'header',
                  locationName: 'Location'
                },
                ETag: {
                  location: 'header',
                  locationName: 'ETag'
                }
              },
              payload: 'StreamingDistribution'
            }
          },
          CreateStreamingDistributionWithTags: {
            http: {
              requestUri: '/2020-05-31/streaming-distribution?WithTags',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['StreamingDistributionConfigWithTags'],
              members: {
                StreamingDistributionConfigWithTags: {
                  locationName: 'StreamingDistributionConfigWithTags',
                  xmlNamespace: {
                    uri: 'http://cloudfront.amazonaws.com/doc/2020-05-31/'
                  },
                  type: 'structure',
                  required: ['StreamingDistributionConfig', 'Tags'],
                  members: {
                    StreamingDistributionConfig: {
                      shape: 'S6z'
                    },
                    Tags: {
                      shape: 'S3j'
                    }
                  }
                }
              },
              payload: 'StreamingDistributionConfigWithTags'
            },
            output: {
              type: 'structure',
              members: {
                StreamingDistribution: {
                  shape: 'S73'
                },
                Location: {
                  location: 'header',
                  locationName: 'Location'
                },
                ETag: {
                  location: 'header',
                  locationName: 'ETag'
                }
              },
              payload: 'StreamingDistribution'
            }
          },
          DeleteCachePolicy: {
            http: {
              method: 'DELETE',
              requestUri: '/2020-05-31/cache-policy/{Id}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                },
                IfMatch: {
                  location: 'header',
                  locationName: 'If-Match'
                }
              }
            }
          },
          DeleteCloudFrontOriginAccessIdentity: {
            http: {
              method: 'DELETE',
              requestUri: '/2020-05-31/origin-access-identity/cloudfront/{Id}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                },
                IfMatch: {
                  location: 'header',
                  locationName: 'If-Match'
                }
              }
            }
          },
          DeleteContinuousDeploymentPolicy: {
            http: {
              method: 'DELETE',
              requestUri: '/2020-05-31/continuous-deployment-policy/{Id}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                },
                IfMatch: {
                  location: 'header',
                  locationName: 'If-Match'
                }
              }
            }
          },
          DeleteDistribution: {
            http: {
              method: 'DELETE',
              requestUri: '/2020-05-31/distribution/{Id}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                },
                IfMatch: {
                  location: 'header',
                  locationName: 'If-Match'
                }
              }
            }
          },
          DeleteFieldLevelEncryptionConfig: {
            http: {
              method: 'DELETE',
              requestUri: '/2020-05-31/field-level-encryption/{Id}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                },
                IfMatch: {
                  location: 'header',
                  locationName: 'If-Match'
                }
              }
            }
          },
          DeleteFieldLevelEncryptionProfile: {
            http: {
              method: 'DELETE',
              requestUri: '/2020-05-31/field-level-encryption-profile/{Id}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                },
                IfMatch: {
                  location: 'header',
                  locationName: 'If-Match'
                }
              }
            }
          },
          DeleteFunction: {
            http: {
              method: 'DELETE',
              requestUri: '/2020-05-31/function/{Name}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['IfMatch', 'Name'],
              members: {
                Name: {
                  location: 'uri',
                  locationName: 'Name'
                },
                IfMatch: {
                  location: 'header',
                  locationName: 'If-Match'
                }
              }
            }
          },
          DeleteKeyGroup: {
            http: {
              method: 'DELETE',
              requestUri: '/2020-05-31/key-group/{Id}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                },
                IfMatch: {
                  location: 'header',
                  locationName: 'If-Match'
                }
              }
            }
          },
          DeleteKeyValueStore: {
            http: {
              method: 'DELETE',
              requestUri: '/2020-05-31/key-value-store/{Name}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['IfMatch', 'Name'],
              members: {
                Name: {
                  location: 'uri',
                  locationName: 'Name'
                },
                IfMatch: {
                  location: 'header',
                  locationName: 'If-Match'
                }
              }
            },
            idempotent: true
          },
          DeleteMonitoringSubscription: {
            http: {
              method: 'DELETE',
              requestUri: '/2020-05-31/distributions/{DistributionId}/monitoring-subscription/'
            },
            input: {
              type: 'structure',
              required: ['DistributionId'],
              members: {
                DistributionId: {
                  location: 'uri',
                  locationName: 'DistributionId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteOriginAccessControl: {
            http: {
              method: 'DELETE',
              requestUri: '/2020-05-31/origin-access-control/{Id}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                },
                IfMatch: {
                  location: 'header',
                  locationName: 'If-Match'
                }
              }
            }
          },
          DeleteOriginRequestPolicy: {
            http: {
              method: 'DELETE',
              requestUri: '/2020-05-31/origin-request-policy/{Id}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                },
                IfMatch: {
                  location: 'header',
                  locationName: 'If-Match'
                }
              }
            }
          },
          DeletePublicKey: {
            http: {
              method: 'DELETE',
              requestUri: '/2020-05-31/public-key/{Id}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                },
                IfMatch: {
                  location: 'header',
                  locationName: 'If-Match'
                }
              }
            }
          },
          DeleteRealtimeLogConfig: {
            http: {
              requestUri: '/2020-05-31/delete-realtime-log-config/',
              responseCode: 204
            },
            input: {
              locationName: 'DeleteRealtimeLogConfigRequest',
              xmlNamespace: {
                uri: 'http://cloudfront.amazonaws.com/doc/2020-05-31/'
              },
              type: 'structure',
              members: {
                Name: {},
                ARN: {}
              }
            }
          },
          DeleteResponseHeadersPolicy: {
            http: {
              method: 'DELETE',
              requestUri: '/2020-05-31/response-headers-policy/{Id}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                },
                IfMatch: {
                  location: 'header',
                  locationName: 'If-Match'
                }
              }
            }
          },
          DeleteStreamingDistribution: {
            http: {
              method: 'DELETE',
              requestUri: '/2020-05-31/streaming-distribution/{Id}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                },
                IfMatch: {
                  location: 'header',
                  locationName: 'If-Match'
                }
              }
            }
          },
          DescribeFunction: {
            http: {
              method: 'GET',
              requestUri: '/2020-05-31/function/{Name}/describe'
            },
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {
                  location: 'uri',
                  locationName: 'Name'
                },
                Stage: {
                  location: 'querystring',
                  locationName: 'Stage'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                FunctionSummary: {
                  shape: 'S4l'
                },
                ETag: {
                  location: 'header',
                  locationName: 'ETag'
                }
              },
              payload: 'FunctionSummary'
            }
          },
          DescribeKeyValueStore: {
            http: {
              method: 'GET',
              requestUri: '/2020-05-31/key-value-store/{Name}'
            },
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {
                  location: 'uri',
                  locationName: 'Name'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                KeyValueStore: {
                  shape: 'S55'
                },
                ETag: {
                  location: 'header',
                  locationName: 'ETag'
                }
              },
              payload: 'KeyValueStore'
            }
          },
          GetCachePolicy: {
            http: {
              method: 'GET',
              requestUri: '/2020-05-31/cache-policy/{Id}'
            },
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                CachePolicy: {
                  shape: 'S2y'
                },
                ETag: {
                  location: 'header',
                  locationName: 'ETag'
                }
              },
              payload: 'CachePolicy'
            }
          },
          GetCachePolicyConfig: {
            http: {
              method: 'GET',
              requestUri: '/2020-05-31/cache-policy/{Id}/config'
            },
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                CachePolicyConfig: {
                  shape: 'S2n'
                },
                ETag: {
                  location: 'header',
                  locationName: 'ETag'
                }
              },
              payload: 'CachePolicyConfig'
            }
          },
          GetCloudFrontOriginAccessIdentity: {
            http: {
              method: 'GET',
              requestUri: '/2020-05-31/origin-access-identity/cloudfront/{Id}'
            },
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                CloudFrontOriginAccessIdentity: {
                  shape: 'S32'
                },
                ETag: {
                  location: 'header',
                  locationName: 'ETag'
                }
              },
              payload: 'CloudFrontOriginAccessIdentity'
            }
          },
          GetCloudFrontOriginAccessIdentityConfig: {
            http: {
              method: 'GET',
              requestUri: '/2020-05-31/origin-access-identity/cloudfront/{Id}/config'
            },
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                CloudFrontOriginAccessIdentityConfig: {
                  shape: 'S30'
                },
                ETag: {
                  location: 'header',
                  locationName: 'ETag'
                }
              },
              payload: 'CloudFrontOriginAccessIdentityConfig'
            }
          },
          GetContinuousDeploymentPolicy: {
            http: {
              method: 'GET',
              requestUri: '/2020-05-31/continuous-deployment-policy/{Id}'
            },
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ContinuousDeploymentPolicy: {
                  shape: 'S3e'
                },
                ETag: {
                  location: 'header',
                  locationName: 'ETag'
                }
              },
              payload: 'ContinuousDeploymentPolicy'
            }
          },
          GetContinuousDeploymentPolicyConfig: {
            http: {
              method: 'GET',
              requestUri: '/2020-05-31/continuous-deployment-policy/{Id}/config'
            },
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ContinuousDeploymentPolicyConfig: {
                  shape: 'S34'
                },
                ETag: {
                  location: 'header',
                  locationName: 'ETag'
                }
              },
              payload: 'ContinuousDeploymentPolicyConfig'
            }
          },
          GetDistribution: {
            http: {
              method: 'GET',
              requestUri: '/2020-05-31/distribution/{Id}'
            },
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Distribution: {
                  shape: 'S6'
                },
                ETag: {
                  location: 'header',
                  locationName: 'ETag'
                }
              },
              payload: 'Distribution'
            }
          },
          GetDistributionConfig: {
            http: {
              method: 'GET',
              requestUri: '/2020-05-31/distribution/{Id}/config'
            },
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                DistributionConfig: {
                  shape: 'Sh'
                },
                ETag: {
                  location: 'header',
                  locationName: 'ETag'
                }
              },
              payload: 'DistributionConfig'
            }
          },
          GetFieldLevelEncryption: {
            http: {
              method: 'GET',
              requestUri: '/2020-05-31/field-level-encryption/{Id}'
            },
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                FieldLevelEncryption: {
                  shape: 'S41'
                },
                ETag: {
                  location: 'header',
                  locationName: 'ETag'
                }
              },
              payload: 'FieldLevelEncryption'
            }
          },
          GetFieldLevelEncryptionConfig: {
            http: {
              method: 'GET',
              requestUri: '/2020-05-31/field-level-encryption/{Id}/config'
            },
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                FieldLevelEncryptionConfig: {
                  shape: 'S3q'
                },
                ETag: {
                  location: 'header',
                  locationName: 'ETag'
                }
              },
              payload: 'FieldLevelEncryptionConfig'
            }
          },
          GetFieldLevelEncryptionProfile: {
            http: {
              method: 'GET',
              requestUri: '/2020-05-31/field-level-encryption-profile/{Id}'
            },
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                FieldLevelEncryptionProfile: {
                  shape: 'S4a'
                },
                ETag: {
                  location: 'header',
                  locationName: 'ETag'
                }
              },
              payload: 'FieldLevelEncryptionProfile'
            }
          },
          GetFieldLevelEncryptionProfileConfig: {
            http: {
              method: 'GET',
              requestUri: '/2020-05-31/field-level-encryption-profile/{Id}/config'
            },
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                FieldLevelEncryptionProfileConfig: {
                  shape: 'S43'
                },
                ETag: {
                  location: 'header',
                  locationName: 'ETag'
                }
              },
              payload: 'FieldLevelEncryptionProfileConfig'
            }
          },
          GetFunction: {
            http: {
              method: 'GET',
              requestUri: '/2020-05-31/function/{Name}'
            },
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {
                  location: 'uri',
                  locationName: 'Name'
                },
                Stage: {
                  location: 'querystring',
                  locationName: 'Stage'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                FunctionCode: {
                  shape: 'S4j'
                },
                ETag: {
                  location: 'header',
                  locationName: 'ETag'
                },
                ContentType: {
                  location: 'header',
                  locationName: 'Content-Type'
                }
              },
              payload: 'FunctionCode'
            }
          },
          GetInvalidation: {
            http: {
              method: 'GET',
              requestUri: '/2020-05-31/distribution/{DistributionId}/invalidation/{Id}'
            },
            input: {
              type: 'structure',
              required: ['DistributionId', 'Id'],
              members: {
                DistributionId: {
                  location: 'uri',
                  locationName: 'DistributionId'
                },
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Invalidation: {
                  shape: 'S4t'
                }
              },
              payload: 'Invalidation'
            }
          },
          GetKeyGroup: {
            http: {
              method: 'GET',
              requestUri: '/2020-05-31/key-group/{Id}'
            },
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                KeyGroup: {
                  shape: 'S4y'
                },
                ETag: {
                  location: 'header',
                  locationName: 'ETag'
                }
              },
              payload: 'KeyGroup'
            }
          },
          GetKeyGroupConfig: {
            http: {
              method: 'GET',
              requestUri: '/2020-05-31/key-group/{Id}/config'
            },
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                KeyGroupConfig: {
                  shape: 'S4v'
                },
                ETag: {
                  location: 'header',
                  locationName: 'ETag'
                }
              },
              payload: 'KeyGroupConfig'
            }
          },
          GetMonitoringSubscription: {
            http: {
              method: 'GET',
              requestUri: '/2020-05-31/distributions/{DistributionId}/monitoring-subscription/'
            },
            input: {
              type: 'structure',
              required: ['DistributionId'],
              members: {
                DistributionId: {
                  location: 'uri',
                  locationName: 'DistributionId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                MonitoringSubscription: {
                  shape: 'S57'
                }
              },
              payload: 'MonitoringSubscription'
            }
          },
          GetOriginAccessControl: {
            http: {
              method: 'GET',
              requestUri: '/2020-05-31/origin-access-control/{Id}'
            },
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                OriginAccessControl: {
                  shape: 'S5h'
                },
                ETag: {
                  location: 'header',
                  locationName: 'ETag'
                }
              },
              payload: 'OriginAccessControl'
            }
          },
          GetOriginAccessControlConfig: {
            http: {
              method: 'GET',
              requestUri: '/2020-05-31/origin-access-control/{Id}/config'
            },
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                OriginAccessControlConfig: {
                  shape: 'S5c'
                },
                ETag: {
                  location: 'header',
                  locationName: 'ETag'
                }
              },
              payload: 'OriginAccessControlConfig'
            }
          },
          GetOriginRequestPolicy: {
            http: {
              method: 'GET',
              requestUri: '/2020-05-31/origin-request-policy/{Id}'
            },
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                OriginRequestPolicy: {
                  shape: 'S5r'
                },
                ETag: {
                  location: 'header',
                  locationName: 'ETag'
                }
              },
              payload: 'OriginRequestPolicy'
            }
          },
          GetOriginRequestPolicyConfig: {
            http: {
              method: 'GET',
              requestUri: '/2020-05-31/origin-request-policy/{Id}/config'
            },
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                OriginRequestPolicyConfig: {
                  shape: 'S5j'
                },
                ETag: {
                  location: 'header',
                  locationName: 'ETag'
                }
              },
              payload: 'OriginRequestPolicyConfig'
            }
          },
          GetPublicKey: {
            http: {
              method: 'GET',
              requestUri: '/2020-05-31/public-key/{Id}'
            },
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                PublicKey: {
                  shape: 'S5v'
                },
                ETag: {
                  location: 'header',
                  locationName: 'ETag'
                }
              },
              payload: 'PublicKey'
            }
          },
          GetPublicKeyConfig: {
            http: {
              method: 'GET',
              requestUri: '/2020-05-31/public-key/{Id}/config'
            },
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                PublicKeyConfig: {
                  shape: 'S5t'
                },
                ETag: {
                  location: 'header',
                  locationName: 'ETag'
                }
              },
              payload: 'PublicKeyConfig'
            }
          },
          GetRealtimeLogConfig: {
            http: {
              requestUri: '/2020-05-31/get-realtime-log-config/'
            },
            input: {
              locationName: 'GetRealtimeLogConfigRequest',
              xmlNamespace: {
                uri: 'http://cloudfront.amazonaws.com/doc/2020-05-31/'
              },
              type: 'structure',
              members: {
                Name: {},
                ARN: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                RealtimeLogConfig: {
                  shape: 'S62'
                }
              }
            }
          },
          GetResponseHeadersPolicy: {
            http: {
              method: 'GET',
              requestUri: '/2020-05-31/response-headers-policy/{Id}'
            },
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ResponseHeadersPolicy: {
                  shape: 'S6x'
                },
                ETag: {
                  location: 'header',
                  locationName: 'ETag'
                }
              },
              payload: 'ResponseHeadersPolicy'
            }
          },
          GetResponseHeadersPolicyConfig: {
            http: {
              method: 'GET',
              requestUri: '/2020-05-31/response-headers-policy/{Id}/config'
            },
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ResponseHeadersPolicyConfig: {
                  shape: 'S64'
                },
                ETag: {
                  location: 'header',
                  locationName: 'ETag'
                }
              },
              payload: 'ResponseHeadersPolicyConfig'
            }
          },
          GetStreamingDistribution: {
            http: {
              method: 'GET',
              requestUri: '/2020-05-31/streaming-distribution/{Id}'
            },
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                StreamingDistribution: {
                  shape: 'S73'
                },
                ETag: {
                  location: 'header',
                  locationName: 'ETag'
                }
              },
              payload: 'StreamingDistribution'
            }
          },
          GetStreamingDistributionConfig: {
            http: {
              method: 'GET',
              requestUri: '/2020-05-31/streaming-distribution/{Id}/config'
            },
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                StreamingDistributionConfig: {
                  shape: 'S6z'
                },
                ETag: {
                  location: 'header',
                  locationName: 'ETag'
                }
              },
              payload: 'StreamingDistributionConfig'
            }
          },
          ListCachePolicies: {
            http: {
              method: 'GET',
              requestUri: '/2020-05-31/cache-policy'
            },
            input: {
              type: 'structure',
              members: {
                Type: {
                  location: 'querystring',
                  locationName: 'Type'
                },
                Marker: {
                  location: 'querystring',
                  locationName: 'Marker'
                },
                MaxItems: {
                  location: 'querystring',
                  locationName: 'MaxItems'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                CachePolicyList: {
                  type: 'structure',
                  required: ['MaxItems', 'Quantity'],
                  members: {
                    NextMarker: {},
                    MaxItems: {
                      type: 'integer'
                    },
                    Quantity: {
                      type: 'integer'
                    },
                    Items: {
                      type: 'list',
                      member: {
                        locationName: 'CachePolicySummary',
                        type: 'structure',
                        required: ['Type', 'CachePolicy'],
                        members: {
                          Type: {},
                          CachePolicy: {
                            shape: 'S2y'
                          }
                        }
                      }
                    }
                  }
                }
              },
              payload: 'CachePolicyList'
            }
          },
          ListCloudFrontOriginAccessIdentities: {
            http: {
              method: 'GET',
              requestUri: '/2020-05-31/origin-access-identity/cloudfront'
            },
            input: {
              type: 'structure',
              members: {
                Marker: {
                  location: 'querystring',
                  locationName: 'Marker'
                },
                MaxItems: {
                  location: 'querystring',
                  locationName: 'MaxItems'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                CloudFrontOriginAccessIdentityList: {
                  type: 'structure',
                  required: ['Marker', 'MaxItems', 'IsTruncated', 'Quantity'],
                  members: {
                    Marker: {},
                    NextMarker: {},
                    MaxItems: {
                      type: 'integer'
                    },
                    IsTruncated: {
                      type: 'boolean'
                    },
                    Quantity: {
                      type: 'integer'
                    },
                    Items: {
                      type: 'list',
                      member: {
                        locationName: 'CloudFrontOriginAccessIdentitySummary',
                        type: 'structure',
                        required: ['Id', 'S3CanonicalUserId', 'Comment'],
                        members: {
                          Id: {},
                          S3CanonicalUserId: {},
                          Comment: {}
                        }
                      }
                    }
                  }
                }
              },
              payload: 'CloudFrontOriginAccessIdentityList'
            }
          },
          ListConflictingAliases: {
            http: {
              method: 'GET',
              requestUri: '/2020-05-31/conflicting-alias',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['DistributionId', 'Alias'],
              members: {
                DistributionId: {
                  location: 'querystring',
                  locationName: 'DistributionId'
                },
                Alias: {
                  location: 'querystring',
                  locationName: 'Alias'
                },
                Marker: {
                  location: 'querystring',
                  locationName: 'Marker'
                },
                MaxItems: {
                  location: 'querystring',
                  locationName: 'MaxItems',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ConflictingAliasesList: {
                  type: 'structure',
                  members: {
                    NextMarker: {},
                    MaxItems: {
                      type: 'integer'
                    },
                    Quantity: {
                      type: 'integer'
                    },
                    Items: {
                      type: 'list',
                      member: {
                        locationName: 'ConflictingAlias',
                        type: 'structure',
                        members: {
                          Alias: {},
                          DistributionId: {},
                          AccountId: {}
                        }
                      }
                    }
                  }
                }
              },
              payload: 'ConflictingAliasesList'
            }
          },
          ListContinuousDeploymentPolicies: {
            http: {
              method: 'GET',
              requestUri: '/2020-05-31/continuous-deployment-policy'
            },
            input: {
              type: 'structure',
              members: {
                Marker: {
                  location: 'querystring',
                  locationName: 'Marker'
                },
                MaxItems: {
                  location: 'querystring',
                  locationName: 'MaxItems'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ContinuousDeploymentPolicyList: {
                  type: 'structure',
                  required: ['MaxItems', 'Quantity'],
                  members: {
                    NextMarker: {},
                    MaxItems: {
                      type: 'integer'
                    },
                    Quantity: {
                      type: 'integer'
                    },
                    Items: {
                      type: 'list',
                      member: {
                        locationName: 'ContinuousDeploymentPolicySummary',
                        type: 'structure',
                        required: ['ContinuousDeploymentPolicy'],
                        members: {
                          ContinuousDeploymentPolicy: {
                            shape: 'S3e'
                          }
                        }
                      }
                    }
                  }
                }
              },
              payload: 'ContinuousDeploymentPolicyList'
            }
          },
          ListDistributions: {
            http: {
              method: 'GET',
              requestUri: '/2020-05-31/distribution'
            },
            input: {
              type: 'structure',
              members: {
                Marker: {
                  location: 'querystring',
                  locationName: 'Marker'
                },
                MaxItems: {
                  location: 'querystring',
                  locationName: 'MaxItems'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                DistributionList: {
                  shape: 'Sa2'
                }
              },
              payload: 'DistributionList'
            }
          },
          ListDistributionsByCachePolicyId: {
            http: {
              method: 'GET',
              requestUri: '/2020-05-31/distributionsByCachePolicyId/{CachePolicyId}'
            },
            input: {
              type: 'structure',
              required: ['CachePolicyId'],
              members: {
                Marker: {
                  location: 'querystring',
                  locationName: 'Marker'
                },
                MaxItems: {
                  location: 'querystring',
                  locationName: 'MaxItems'
                },
                CachePolicyId: {
                  location: 'uri',
                  locationName: 'CachePolicyId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                DistributionIdList: {
                  shape: 'Sa7'
                }
              },
              payload: 'DistributionIdList'
            }
          },
          ListDistributionsByKeyGroup: {
            http: {
              method: 'GET',
              requestUri: '/2020-05-31/distributionsByKeyGroupId/{KeyGroupId}'
            },
            input: {
              type: 'structure',
              required: ['KeyGroupId'],
              members: {
                Marker: {
                  location: 'querystring',
                  locationName: 'Marker'
                },
                MaxItems: {
                  location: 'querystring',
                  locationName: 'MaxItems'
                },
                KeyGroupId: {
                  location: 'uri',
                  locationName: 'KeyGroupId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                DistributionIdList: {
                  shape: 'Sa7'
                }
              },
              payload: 'DistributionIdList'
            }
          },
          ListDistributionsByOriginRequestPolicyId: {
            http: {
              method: 'GET',
              requestUri: '/2020-05-31/distributionsByOriginRequestPolicyId/{OriginRequestPolicyId}'
            },
            input: {
              type: 'structure',
              required: ['OriginRequestPolicyId'],
              members: {
                Marker: {
                  location: 'querystring',
                  locationName: 'Marker'
                },
                MaxItems: {
                  location: 'querystring',
                  locationName: 'MaxItems'
                },
                OriginRequestPolicyId: {
                  location: 'uri',
                  locationName: 'OriginRequestPolicyId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                DistributionIdList: {
                  shape: 'Sa7'
                }
              },
              payload: 'DistributionIdList'
            }
          },
          ListDistributionsByRealtimeLogConfig: {
            http: {
              requestUri: '/2020-05-31/distributionsByRealtimeLogConfig/'
            },
            input: {
              locationName: 'ListDistributionsByRealtimeLogConfigRequest',
              xmlNamespace: {
                uri: 'http://cloudfront.amazonaws.com/doc/2020-05-31/'
              },
              type: 'structure',
              members: {
                Marker: {},
                MaxItems: {},
                RealtimeLogConfigName: {},
                RealtimeLogConfigArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                DistributionList: {
                  shape: 'Sa2'
                }
              },
              payload: 'DistributionList'
            }
          },
          ListDistributionsByResponseHeadersPolicyId: {
            http: {
              method: 'GET',
              requestUri: '/2020-05-31/distributionsByResponseHeadersPolicyId/{ResponseHeadersPolicyId}'
            },
            input: {
              type: 'structure',
              required: ['ResponseHeadersPolicyId'],
              members: {
                Marker: {
                  location: 'querystring',
                  locationName: 'Marker'
                },
                MaxItems: {
                  location: 'querystring',
                  locationName: 'MaxItems'
                },
                ResponseHeadersPolicyId: {
                  location: 'uri',
                  locationName: 'ResponseHeadersPolicyId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                DistributionIdList: {
                  shape: 'Sa7'
                }
              },
              payload: 'DistributionIdList'
            }
          },
          ListDistributionsByWebACLId: {
            http: {
              method: 'GET',
              requestUri: '/2020-05-31/distributionsByWebACLId/{WebACLId}'
            },
            input: {
              type: 'structure',
              required: ['WebACLId'],
              members: {
                Marker: {
                  location: 'querystring',
                  locationName: 'Marker'
                },
                MaxItems: {
                  location: 'querystring',
                  locationName: 'MaxItems'
                },
                WebACLId: {
                  location: 'uri',
                  locationName: 'WebACLId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                DistributionList: {
                  shape: 'Sa2'
                }
              },
              payload: 'DistributionList'
            }
          },
          ListFieldLevelEncryptionConfigs: {
            http: {
              method: 'GET',
              requestUri: '/2020-05-31/field-level-encryption'
            },
            input: {
              type: 'structure',
              members: {
                Marker: {
                  location: 'querystring',
                  locationName: 'Marker'
                },
                MaxItems: {
                  location: 'querystring',
                  locationName: 'MaxItems'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                FieldLevelEncryptionList: {
                  type: 'structure',
                  required: ['MaxItems', 'Quantity'],
                  members: {
                    NextMarker: {},
                    MaxItems: {
                      type: 'integer'
                    },
                    Quantity: {
                      type: 'integer'
                    },
                    Items: {
                      type: 'list',
                      member: {
                        locationName: 'FieldLevelEncryptionSummary',
                        type: 'structure',
                        required: ['Id', 'LastModifiedTime'],
                        members: {
                          Id: {},
                          LastModifiedTime: {
                            type: 'timestamp'
                          },
                          Comment: {},
                          QueryArgProfileConfig: {
                            shape: 'S3r'
                          },
                          ContentTypeProfileConfig: {
                            shape: 'S3v'
                          }
                        }
                      }
                    }
                  }
                }
              },
              payload: 'FieldLevelEncryptionList'
            }
          },
          ListFieldLevelEncryptionProfiles: {
            http: {
              method: 'GET',
              requestUri: '/2020-05-31/field-level-encryption-profile'
            },
            input: {
              type: 'structure',
              members: {
                Marker: {
                  location: 'querystring',
                  locationName: 'Marker'
                },
                MaxItems: {
                  location: 'querystring',
                  locationName: 'MaxItems'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                FieldLevelEncryptionProfileList: {
                  type: 'structure',
                  required: ['MaxItems', 'Quantity'],
                  members: {
                    NextMarker: {},
                    MaxItems: {
                      type: 'integer'
                    },
                    Quantity: {
                      type: 'integer'
                    },
                    Items: {
                      type: 'list',
                      member: {
                        locationName: 'FieldLevelEncryptionProfileSummary',
                        type: 'structure',
                        required: ['Id', 'LastModifiedTime', 'Name', 'EncryptionEntities'],
                        members: {
                          Id: {},
                          LastModifiedTime: {
                            type: 'timestamp'
                          },
                          Name: {},
                          EncryptionEntities: {
                            shape: 'S44'
                          },
                          Comment: {}
                        }
                      }
                    }
                  }
                }
              },
              payload: 'FieldLevelEncryptionProfileList'
            }
          },
          ListFunctions: {
            http: {
              method: 'GET',
              requestUri: '/2020-05-31/function'
            },
            input: {
              type: 'structure',
              members: {
                Marker: {
                  location: 'querystring',
                  locationName: 'Marker'
                },
                MaxItems: {
                  location: 'querystring',
                  locationName: 'MaxItems'
                },
                Stage: {
                  location: 'querystring',
                  locationName: 'Stage'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                FunctionList: {
                  type: 'structure',
                  required: ['MaxItems', 'Quantity'],
                  members: {
                    NextMarker: {},
                    MaxItems: {
                      type: 'integer'
                    },
                    Quantity: {
                      type: 'integer'
                    },
                    Items: {
                      type: 'list',
                      member: {
                        shape: 'S4l',
                        locationName: 'FunctionSummary'
                      }
                    }
                  }
                }
              },
              payload: 'FunctionList'
            }
          },
          ListInvalidations: {
            http: {
              method: 'GET',
              requestUri: '/2020-05-31/distribution/{DistributionId}/invalidation'
            },
            input: {
              type: 'structure',
              required: ['DistributionId'],
              members: {
                DistributionId: {
                  location: 'uri',
                  locationName: 'DistributionId'
                },
                Marker: {
                  location: 'querystring',
                  locationName: 'Marker'
                },
                MaxItems: {
                  location: 'querystring',
                  locationName: 'MaxItems'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                InvalidationList: {
                  type: 'structure',
                  required: ['Marker', 'MaxItems', 'IsTruncated', 'Quantity'],
                  members: {
                    Marker: {},
                    NextMarker: {},
                    MaxItems: {
                      type: 'integer'
                    },
                    IsTruncated: {
                      type: 'boolean'
                    },
                    Quantity: {
                      type: 'integer'
                    },
                    Items: {
                      type: 'list',
                      member: {
                        locationName: 'InvalidationSummary',
                        type: 'structure',
                        required: ['Id', 'CreateTime', 'Status'],
                        members: {
                          Id: {},
                          CreateTime: {
                            type: 'timestamp'
                          },
                          Status: {}
                        }
                      }
                    }
                  }
                }
              },
              payload: 'InvalidationList'
            }
          },
          ListKeyGroups: {
            http: {
              method: 'GET',
              requestUri: '/2020-05-31/key-group'
            },
            input: {
              type: 'structure',
              members: {
                Marker: {
                  location: 'querystring',
                  locationName: 'Marker'
                },
                MaxItems: {
                  location: 'querystring',
                  locationName: 'MaxItems'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                KeyGroupList: {
                  type: 'structure',
                  required: ['MaxItems', 'Quantity'],
                  members: {
                    NextMarker: {},
                    MaxItems: {
                      type: 'integer'
                    },
                    Quantity: {
                      type: 'integer'
                    },
                    Items: {
                      type: 'list',
                      member: {
                        locationName: 'KeyGroupSummary',
                        type: 'structure',
                        required: ['KeyGroup'],
                        members: {
                          KeyGroup: {
                            shape: 'S4y'
                          }
                        }
                      }
                    }
                  }
                }
              },
              payload: 'KeyGroupList'
            }
          },
          ListKeyValueStores: {
            http: {
              method: 'GET',
              requestUri: '/2020-05-31/key-value-store'
            },
            input: {
              type: 'structure',
              members: {
                Marker: {
                  location: 'querystring',
                  locationName: 'Marker'
                },
                MaxItems: {
                  location: 'querystring',
                  locationName: 'MaxItems'
                },
                Status: {
                  location: 'querystring',
                  locationName: 'Status'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                KeyValueStoreList: {
                  type: 'structure',
                  required: ['MaxItems', 'Quantity'],
                  members: {
                    NextMarker: {},
                    MaxItems: {
                      type: 'integer'
                    },
                    Quantity: {
                      type: 'integer'
                    },
                    Items: {
                      type: 'list',
                      member: {
                        shape: 'S55',
                        locationName: 'KeyValueStore'
                      }
                    }
                  }
                }
              },
              payload: 'KeyValueStoreList'
            }
          },
          ListOriginAccessControls: {
            http: {
              method: 'GET',
              requestUri: '/2020-05-31/origin-access-control'
            },
            input: {
              type: 'structure',
              members: {
                Marker: {
                  location: 'querystring',
                  locationName: 'Marker'
                },
                MaxItems: {
                  location: 'querystring',
                  locationName: 'MaxItems'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                OriginAccessControlList: {
                  type: 'structure',
                  required: ['Marker', 'MaxItems', 'IsTruncated', 'Quantity'],
                  members: {
                    Marker: {},
                    NextMarker: {},
                    MaxItems: {
                      type: 'integer'
                    },
                    IsTruncated: {
                      type: 'boolean'
                    },
                    Quantity: {
                      type: 'integer'
                    },
                    Items: {
                      type: 'list',
                      member: {
                        locationName: 'OriginAccessControlSummary',
                        type: 'structure',
                        required: ['Id', 'Description', 'Name', 'SigningProtocol', 'SigningBehavior', 'OriginAccessControlOriginType'],
                        members: {
                          Id: {},
                          Description: {},
                          Name: {},
                          SigningProtocol: {},
                          SigningBehavior: {},
                          OriginAccessControlOriginType: {}
                        }
                      }
                    }
                  }
                }
              },
              payload: 'OriginAccessControlList'
            }
          },
          ListOriginRequestPolicies: {
            http: {
              method: 'GET',
              requestUri: '/2020-05-31/origin-request-policy'
            },
            input: {
              type: 'structure',
              members: {
                Type: {
                  location: 'querystring',
                  locationName: 'Type'
                },
                Marker: {
                  location: 'querystring',
                  locationName: 'Marker'
                },
                MaxItems: {
                  location: 'querystring',
                  locationName: 'MaxItems'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                OriginRequestPolicyList: {
                  type: 'structure',
                  required: ['MaxItems', 'Quantity'],
                  members: {
                    NextMarker: {},
                    MaxItems: {
                      type: 'integer'
                    },
                    Quantity: {
                      type: 'integer'
                    },
                    Items: {
                      type: 'list',
                      member: {
                        locationName: 'OriginRequestPolicySummary',
                        type: 'structure',
                        required: ['Type', 'OriginRequestPolicy'],
                        members: {
                          Type: {},
                          OriginRequestPolicy: {
                            shape: 'S5r'
                          }
                        }
                      }
                    }
                  }
                }
              },
              payload: 'OriginRequestPolicyList'
            }
          },
          ListPublicKeys: {
            http: {
              method: 'GET',
              requestUri: '/2020-05-31/public-key'
            },
            input: {
              type: 'structure',
              members: {
                Marker: {
                  location: 'querystring',
                  locationName: 'Marker'
                },
                MaxItems: {
                  location: 'querystring',
                  locationName: 'MaxItems'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                PublicKeyList: {
                  type: 'structure',
                  required: ['MaxItems', 'Quantity'],
                  members: {
                    NextMarker: {},
                    MaxItems: {
                      type: 'integer'
                    },
                    Quantity: {
                      type: 'integer'
                    },
                    Items: {
                      type: 'list',
                      member: {
                        locationName: 'PublicKeySummary',
                        type: 'structure',
                        required: ['Id', 'Name', 'CreatedTime', 'EncodedKey'],
                        members: {
                          Id: {},
                          Name: {},
                          CreatedTime: {
                            type: 'timestamp'
                          },
                          EncodedKey: {},
                          Comment: {}
                        }
                      }
                    }
                  }
                }
              },
              payload: 'PublicKeyList'
            }
          },
          ListRealtimeLogConfigs: {
            http: {
              method: 'GET',
              requestUri: '/2020-05-31/realtime-log-config'
            },
            input: {
              type: 'structure',
              members: {
                MaxItems: {
                  location: 'querystring',
                  locationName: 'MaxItems'
                },
                Marker: {
                  location: 'querystring',
                  locationName: 'Marker'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                RealtimeLogConfigs: {
                  type: 'structure',
                  required: ['MaxItems', 'IsTruncated', 'Marker'],
                  members: {
                    MaxItems: {
                      type: 'integer'
                    },
                    Items: {
                      type: 'list',
                      member: {
                        shape: 'S62'
                      }
                    },
                    IsTruncated: {
                      type: 'boolean'
                    },
                    Marker: {},
                    NextMarker: {}
                  }
                }
              },
              payload: 'RealtimeLogConfigs'
            }
          },
          ListResponseHeadersPolicies: {
            http: {
              method: 'GET',
              requestUri: '/2020-05-31/response-headers-policy'
            },
            input: {
              type: 'structure',
              members: {
                Type: {
                  location: 'querystring',
                  locationName: 'Type'
                },
                Marker: {
                  location: 'querystring',
                  locationName: 'Marker'
                },
                MaxItems: {
                  location: 'querystring',
                  locationName: 'MaxItems'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ResponseHeadersPolicyList: {
                  type: 'structure',
                  required: ['MaxItems', 'Quantity'],
                  members: {
                    NextMarker: {},
                    MaxItems: {
                      type: 'integer'
                    },
                    Quantity: {
                      type: 'integer'
                    },
                    Items: {
                      type: 'list',
                      member: {
                        locationName: 'ResponseHeadersPolicySummary',
                        type: 'structure',
                        required: ['Type', 'ResponseHeadersPolicy'],
                        members: {
                          Type: {},
                          ResponseHeadersPolicy: {
                            shape: 'S6x'
                          }
                        }
                      }
                    }
                  }
                }
              },
              payload: 'ResponseHeadersPolicyList'
            }
          },
          ListStreamingDistributions: {
            http: {
              method: 'GET',
              requestUri: '/2020-05-31/streaming-distribution'
            },
            input: {
              type: 'structure',
              members: {
                Marker: {
                  location: 'querystring',
                  locationName: 'Marker'
                },
                MaxItems: {
                  location: 'querystring',
                  locationName: 'MaxItems'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                StreamingDistributionList: {
                  type: 'structure',
                  required: ['Marker', 'MaxItems', 'IsTruncated', 'Quantity'],
                  members: {
                    Marker: {},
                    NextMarker: {},
                    MaxItems: {
                      type: 'integer'
                    },
                    IsTruncated: {
                      type: 'boolean'
                    },
                    Quantity: {
                      type: 'integer'
                    },
                    Items: {
                      type: 'list',
                      member: {
                        locationName: 'StreamingDistributionSummary',
                        type: 'structure',
                        required: ['Id', 'ARN', 'Status', 'LastModifiedTime', 'DomainName', 'S3Origin', 'Aliases', 'TrustedSigners', 'Comment', 'PriceClass', 'Enabled'],
                        members: {
                          Id: {},
                          ARN: {},
                          Status: {},
                          LastModifiedTime: {
                            type: 'timestamp'
                          },
                          DomainName: {},
                          S3Origin: {
                            shape: 'S70'
                          },
                          Aliases: {
                            shape: 'Si'
                          },
                          TrustedSigners: {
                            shape: 'S19'
                          },
                          Comment: {},
                          PriceClass: {},
                          Enabled: {
                            type: 'boolean'
                          }
                        }
                      }
                    }
                  }
                }
              },
              payload: 'StreamingDistributionList'
            }
          },
          ListTagsForResource: {
            http: {
              method: 'GET',
              requestUri: '/2020-05-31/tagging'
            },
            input: {
              type: 'structure',
              required: ['Resource'],
              members: {
                Resource: {
                  location: 'querystring',
                  locationName: 'Resource'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Tags'],
              members: {
                Tags: {
                  shape: 'S3j'
                }
              },
              payload: 'Tags'
            }
          },
          PublishFunction: {
            http: {
              requestUri: '/2020-05-31/function/{Name}/publish'
            },
            input: {
              type: 'structure',
              required: ['Name', 'IfMatch'],
              members: {
                Name: {
                  location: 'uri',
                  locationName: 'Name'
                },
                IfMatch: {
                  location: 'header',
                  locationName: 'If-Match'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                FunctionSummary: {
                  shape: 'S4l'
                }
              },
              payload: 'FunctionSummary'
            }
          },
          TagResource: {
            http: {
              requestUri: '/2020-05-31/tagging?Operation=Tag',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['Resource', 'Tags'],
              members: {
                Resource: {
                  location: 'querystring',
                  locationName: 'Resource'
                },
                Tags: {
                  shape: 'S3j',
                  locationName: 'Tags',
                  xmlNamespace: {
                    uri: 'http://cloudfront.amazonaws.com/doc/2020-05-31/'
                  }
                }
              },
              payload: 'Tags'
            }
          },
          TestFunction: {
            http: {
              requestUri: '/2020-05-31/function/{Name}/test'
            },
            input: {
              locationName: 'TestFunctionRequest',
              xmlNamespace: {
                uri: 'http://cloudfront.amazonaws.com/doc/2020-05-31/'
              },
              type: 'structure',
              required: ['Name', 'IfMatch', 'EventObject'],
              members: {
                Name: {
                  location: 'uri',
                  locationName: 'Name'
                },
                IfMatch: {
                  location: 'header',
                  locationName: 'If-Match'
                },
                Stage: {},
                EventObject: {
                  type: 'blob',
                  sensitive: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                TestResult: {
                  type: 'structure',
                  members: {
                    FunctionSummary: {
                      shape: 'S4l'
                    },
                    ComputeUtilization: {},
                    FunctionExecutionLogs: {
                      type: 'list',
                      member: {},
                      sensitive: true
                    },
                    FunctionErrorMessage: {
                      shape: 'Sq'
                    },
                    FunctionOutput: {
                      shape: 'Sq'
                    }
                  }
                }
              },
              payload: 'TestResult'
            }
          },
          UntagResource: {
            http: {
              requestUri: '/2020-05-31/tagging?Operation=Untag',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['Resource', 'TagKeys'],
              members: {
                Resource: {
                  location: 'querystring',
                  locationName: 'Resource'
                },
                TagKeys: {
                  locationName: 'TagKeys',
                  xmlNamespace: {
                    uri: 'http://cloudfront.amazonaws.com/doc/2020-05-31/'
                  },
                  type: 'structure',
                  members: {
                    Items: {
                      type: 'list',
                      member: {
                        locationName: 'Key'
                      }
                    }
                  }
                }
              },
              payload: 'TagKeys'
            }
          },
          UpdateCachePolicy: {
            http: {
              method: 'PUT',
              requestUri: '/2020-05-31/cache-policy/{Id}'
            },
            input: {
              type: 'structure',
              required: ['CachePolicyConfig', 'Id'],
              members: {
                CachePolicyConfig: {
                  shape: 'S2n',
                  locationName: 'CachePolicyConfig',
                  xmlNamespace: {
                    uri: 'http://cloudfront.amazonaws.com/doc/2020-05-31/'
                  }
                },
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                },
                IfMatch: {
                  location: 'header',
                  locationName: 'If-Match'
                }
              },
              payload: 'CachePolicyConfig'
            },
            output: {
              type: 'structure',
              members: {
                CachePolicy: {
                  shape: 'S2y'
                },
                ETag: {
                  location: 'header',
                  locationName: 'ETag'
                }
              },
              payload: 'CachePolicy'
            }
          },
          UpdateCloudFrontOriginAccessIdentity: {
            http: {
              method: 'PUT',
              requestUri: '/2020-05-31/origin-access-identity/cloudfront/{Id}/config'
            },
            input: {
              type: 'structure',
              required: ['CloudFrontOriginAccessIdentityConfig', 'Id'],
              members: {
                CloudFrontOriginAccessIdentityConfig: {
                  shape: 'S30',
                  locationName: 'CloudFrontOriginAccessIdentityConfig',
                  xmlNamespace: {
                    uri: 'http://cloudfront.amazonaws.com/doc/2020-05-31/'
                  }
                },
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                },
                IfMatch: {
                  location: 'header',
                  locationName: 'If-Match'
                }
              },
              payload: 'CloudFrontOriginAccessIdentityConfig'
            },
            output: {
              type: 'structure',
              members: {
                CloudFrontOriginAccessIdentity: {
                  shape: 'S32'
                },
                ETag: {
                  location: 'header',
                  locationName: 'ETag'
                }
              },
              payload: 'CloudFrontOriginAccessIdentity'
            }
          },
          UpdateContinuousDeploymentPolicy: {
            http: {
              method: 'PUT',
              requestUri: '/2020-05-31/continuous-deployment-policy/{Id}'
            },
            input: {
              type: 'structure',
              required: ['ContinuousDeploymentPolicyConfig', 'Id'],
              members: {
                ContinuousDeploymentPolicyConfig: {
                  shape: 'S34',
                  locationName: 'ContinuousDeploymentPolicyConfig',
                  xmlNamespace: {
                    uri: 'http://cloudfront.amazonaws.com/doc/2020-05-31/'
                  }
                },
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                },
                IfMatch: {
                  location: 'header',
                  locationName: 'If-Match'
                }
              },
              payload: 'ContinuousDeploymentPolicyConfig'
            },
            output: {
              type: 'structure',
              members: {
                ContinuousDeploymentPolicy: {
                  shape: 'S3e'
                },
                ETag: {
                  location: 'header',
                  locationName: 'ETag'
                }
              },
              payload: 'ContinuousDeploymentPolicy'
            }
          },
          UpdateDistribution: {
            http: {
              method: 'PUT',
              requestUri: '/2020-05-31/distribution/{Id}/config'
            },
            input: {
              type: 'structure',
              required: ['DistributionConfig', 'Id'],
              members: {
                DistributionConfig: {
                  shape: 'Sh',
                  locationName: 'DistributionConfig',
                  xmlNamespace: {
                    uri: 'http://cloudfront.amazonaws.com/doc/2020-05-31/'
                  }
                },
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                },
                IfMatch: {
                  location: 'header',
                  locationName: 'If-Match'
                }
              },
              payload: 'DistributionConfig'
            },
            output: {
              type: 'structure',
              members: {
                Distribution: {
                  shape: 'S6'
                },
                ETag: {
                  location: 'header',
                  locationName: 'ETag'
                }
              },
              payload: 'Distribution'
            }
          },
          UpdateDistributionWithStagingConfig: {
            http: {
              method: 'PUT',
              requestUri: '/2020-05-31/distribution/{Id}/promote-staging-config'
            },
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                },
                StagingDistributionId: {
                  location: 'querystring',
                  locationName: 'StagingDistributionId'
                },
                IfMatch: {
                  location: 'header',
                  locationName: 'If-Match'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Distribution: {
                  shape: 'S6'
                },
                ETag: {
                  location: 'header',
                  locationName: 'ETag'
                }
              },
              payload: 'Distribution'
            }
          },
          UpdateFieldLevelEncryptionConfig: {
            http: {
              method: 'PUT',
              requestUri: '/2020-05-31/field-level-encryption/{Id}/config'
            },
            input: {
              type: 'structure',
              required: ['FieldLevelEncryptionConfig', 'Id'],
              members: {
                FieldLevelEncryptionConfig: {
                  shape: 'S3q',
                  locationName: 'FieldLevelEncryptionConfig',
                  xmlNamespace: {
                    uri: 'http://cloudfront.amazonaws.com/doc/2020-05-31/'
                  }
                },
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                },
                IfMatch: {
                  location: 'header',
                  locationName: 'If-Match'
                }
              },
              payload: 'FieldLevelEncryptionConfig'
            },
            output: {
              type: 'structure',
              members: {
                FieldLevelEncryption: {
                  shape: 'S41'
                },
                ETag: {
                  location: 'header',
                  locationName: 'ETag'
                }
              },
              payload: 'FieldLevelEncryption'
            }
          },
          UpdateFieldLevelEncryptionProfile: {
            http: {
              method: 'PUT',
              requestUri: '/2020-05-31/field-level-encryption-profile/{Id}/config'
            },
            input: {
              type: 'structure',
              required: ['FieldLevelEncryptionProfileConfig', 'Id'],
              members: {
                FieldLevelEncryptionProfileConfig: {
                  shape: 'S43',
                  locationName: 'FieldLevelEncryptionProfileConfig',
                  xmlNamespace: {
                    uri: 'http://cloudfront.amazonaws.com/doc/2020-05-31/'
                  }
                },
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                },
                IfMatch: {
                  location: 'header',
                  locationName: 'If-Match'
                }
              },
              payload: 'FieldLevelEncryptionProfileConfig'
            },
            output: {
              type: 'structure',
              members: {
                FieldLevelEncryptionProfile: {
                  shape: 'S4a'
                },
                ETag: {
                  location: 'header',
                  locationName: 'ETag'
                }
              },
              payload: 'FieldLevelEncryptionProfile'
            }
          },
          UpdateFunction: {
            http: {
              method: 'PUT',
              requestUri: '/2020-05-31/function/{Name}'
            },
            input: {
              locationName: 'UpdateFunctionRequest',
              xmlNamespace: {
                uri: 'http://cloudfront.amazonaws.com/doc/2020-05-31/'
              },
              type: 'structure',
              required: ['IfMatch', 'FunctionConfig', 'FunctionCode', 'Name'],
              members: {
                Name: {
                  location: 'uri',
                  locationName: 'Name'
                },
                IfMatch: {
                  location: 'header',
                  locationName: 'If-Match'
                },
                FunctionConfig: {
                  shape: 'S4d'
                },
                FunctionCode: {
                  shape: 'S4j'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                FunctionSummary: {
                  shape: 'S4l'
                },
                ETag: {
                  location: 'header',
                  locationName: 'ETtag'
                }
              },
              payload: 'FunctionSummary'
            }
          },
          UpdateKeyGroup: {
            http: {
              method: 'PUT',
              requestUri: '/2020-05-31/key-group/{Id}'
            },
            input: {
              type: 'structure',
              required: ['KeyGroupConfig', 'Id'],
              members: {
                KeyGroupConfig: {
                  shape: 'S4v',
                  locationName: 'KeyGroupConfig',
                  xmlNamespace: {
                    uri: 'http://cloudfront.amazonaws.com/doc/2020-05-31/'
                  }
                },
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                },
                IfMatch: {
                  location: 'header',
                  locationName: 'If-Match'
                }
              },
              payload: 'KeyGroupConfig'
            },
            output: {
              type: 'structure',
              members: {
                KeyGroup: {
                  shape: 'S4y'
                },
                ETag: {
                  location: 'header',
                  locationName: 'ETag'
                }
              },
              payload: 'KeyGroup'
            }
          },
          UpdateKeyValueStore: {
            http: {
              method: 'PUT',
              requestUri: '/2020-05-31/key-value-store/{Name}'
            },
            input: {
              locationName: 'UpdateKeyValueStoreRequest',
              xmlNamespace: {
                uri: 'http://cloudfront.amazonaws.com/doc/2020-05-31/'
              },
              type: 'structure',
              required: ['Name', 'Comment', 'IfMatch'],
              members: {
                Name: {
                  location: 'uri',
                  locationName: 'Name'
                },
                Comment: {},
                IfMatch: {
                  location: 'header',
                  locationName: 'If-Match'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                KeyValueStore: {
                  shape: 'S55'
                },
                ETag: {
                  location: 'header',
                  locationName: 'ETag'
                }
              },
              payload: 'KeyValueStore'
            },
            idempotent: true
          },
          UpdateOriginAccessControl: {
            http: {
              method: 'PUT',
              requestUri: '/2020-05-31/origin-access-control/{Id}/config'
            },
            input: {
              type: 'structure',
              required: ['OriginAccessControlConfig', 'Id'],
              members: {
                OriginAccessControlConfig: {
                  shape: 'S5c',
                  locationName: 'OriginAccessControlConfig',
                  xmlNamespace: {
                    uri: 'http://cloudfront.amazonaws.com/doc/2020-05-31/'
                  }
                },
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                },
                IfMatch: {
                  location: 'header',
                  locationName: 'If-Match'
                }
              },
              payload: 'OriginAccessControlConfig'
            },
            output: {
              type: 'structure',
              members: {
                OriginAccessControl: {
                  shape: 'S5h'
                },
                ETag: {
                  location: 'header',
                  locationName: 'ETag'
                }
              },
              payload: 'OriginAccessControl'
            }
          },
          UpdateOriginRequestPolicy: {
            http: {
              method: 'PUT',
              requestUri: '/2020-05-31/origin-request-policy/{Id}'
            },
            input: {
              type: 'structure',
              required: ['OriginRequestPolicyConfig', 'Id'],
              members: {
                OriginRequestPolicyConfig: {
                  shape: 'S5j',
                  locationName: 'OriginRequestPolicyConfig',
                  xmlNamespace: {
                    uri: 'http://cloudfront.amazonaws.com/doc/2020-05-31/'
                  }
                },
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                },
                IfMatch: {
                  location: 'header',
                  locationName: 'If-Match'
                }
              },
              payload: 'OriginRequestPolicyConfig'
            },
            output: {
              type: 'structure',
              members: {
                OriginRequestPolicy: {
                  shape: 'S5r'
                },
                ETag: {
                  location: 'header',
                  locationName: 'ETag'
                }
              },
              payload: 'OriginRequestPolicy'
            }
          },
          UpdatePublicKey: {
            http: {
              method: 'PUT',
              requestUri: '/2020-05-31/public-key/{Id}/config'
            },
            input: {
              type: 'structure',
              required: ['PublicKeyConfig', 'Id'],
              members: {
                PublicKeyConfig: {
                  shape: 'S5t',
                  locationName: 'PublicKeyConfig',
                  xmlNamespace: {
                    uri: 'http://cloudfront.amazonaws.com/doc/2020-05-31/'
                  }
                },
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                },
                IfMatch: {
                  location: 'header',
                  locationName: 'If-Match'
                }
              },
              payload: 'PublicKeyConfig'
            },
            output: {
              type: 'structure',
              members: {
                PublicKey: {
                  shape: 'S5v'
                },
                ETag: {
                  location: 'header',
                  locationName: 'ETag'
                }
              },
              payload: 'PublicKey'
            }
          },
          UpdateRealtimeLogConfig: {
            http: {
              method: 'PUT',
              requestUri: '/2020-05-31/realtime-log-config/'
            },
            input: {
              locationName: 'UpdateRealtimeLogConfigRequest',
              xmlNamespace: {
                uri: 'http://cloudfront.amazonaws.com/doc/2020-05-31/'
              },
              type: 'structure',
              members: {
                EndPoints: {
                  shape: 'S5x'
                },
                Fields: {
                  shape: 'S60'
                },
                Name: {},
                ARN: {},
                SamplingRate: {
                  type: 'long'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                RealtimeLogConfig: {
                  shape: 'S62'
                }
              }
            }
          },
          UpdateResponseHeadersPolicy: {
            http: {
              method: 'PUT',
              requestUri: '/2020-05-31/response-headers-policy/{Id}'
            },
            input: {
              type: 'structure',
              required: ['ResponseHeadersPolicyConfig', 'Id'],
              members: {
                ResponseHeadersPolicyConfig: {
                  shape: 'S64',
                  locationName: 'ResponseHeadersPolicyConfig',
                  xmlNamespace: {
                    uri: 'http://cloudfront.amazonaws.com/doc/2020-05-31/'
                  }
                },
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                },
                IfMatch: {
                  location: 'header',
                  locationName: 'If-Match'
                }
              },
              payload: 'ResponseHeadersPolicyConfig'
            },
            output: {
              type: 'structure',
              members: {
                ResponseHeadersPolicy: {
                  shape: 'S6x'
                },
                ETag: {
                  location: 'header',
                  locationName: 'ETag'
                }
              },
              payload: 'ResponseHeadersPolicy'
            }
          },
          UpdateStreamingDistribution: {
            http: {
              method: 'PUT',
              requestUri: '/2020-05-31/streaming-distribution/{Id}/config'
            },
            input: {
              type: 'structure',
              required: ['StreamingDistributionConfig', 'Id'],
              members: {
                StreamingDistributionConfig: {
                  shape: 'S6z',
                  locationName: 'StreamingDistributionConfig',
                  xmlNamespace: {
                    uri: 'http://cloudfront.amazonaws.com/doc/2020-05-31/'
                  }
                },
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                },
                IfMatch: {
                  location: 'header',
                  locationName: 'If-Match'
                }
              },
              payload: 'StreamingDistributionConfig'
            },
            output: {
              type: 'structure',
              members: {
                StreamingDistribution: {
                  shape: 'S73'
                },
                ETag: {
                  location: 'header',
                  locationName: 'ETag'
                }
              },
              payload: 'StreamingDistribution'
            }
          }
        },
        shapes: {
          S6: {
            type: 'structure',
            required: ['Id', 'ARN', 'Status', 'LastModifiedTime', 'InProgressInvalidationBatches', 'DomainName', 'DistributionConfig'],
            members: {
              Id: {},
              ARN: {},
              Status: {},
              LastModifiedTime: {
                type: 'timestamp'
              },
              InProgressInvalidationBatches: {
                type: 'integer'
              },
              DomainName: {},
              ActiveTrustedSigners: {
                shape: 'S9'
              },
              ActiveTrustedKeyGroups: {
                type: 'structure',
                required: ['Enabled', 'Quantity'],
                members: {
                  Enabled: {
                    type: 'boolean'
                  },
                  Quantity: {
                    type: 'integer'
                  },
                  Items: {
                    type: 'list',
                    member: {
                      locationName: 'KeyGroup',
                      type: 'structure',
                      members: {
                        KeyGroupId: {},
                        KeyPairIds: {
                          shape: 'Sc'
                        }
                      }
                    }
                  }
                }
              },
              DistributionConfig: {
                shape: 'Sh'
              },
              AliasICPRecordals: {
                shape: 'S2j'
              }
            }
          },
          S9: {
            type: 'structure',
            required: ['Enabled', 'Quantity'],
            members: {
              Enabled: {
                type: 'boolean'
              },
              Quantity: {
                type: 'integer'
              },
              Items: {
                type: 'list',
                member: {
                  locationName: 'Signer',
                  type: 'structure',
                  members: {
                    AwsAccountNumber: {},
                    KeyPairIds: {
                      shape: 'Sc'
                    }
                  }
                }
              }
            }
          },
          Sc: {
            type: 'structure',
            required: ['Quantity'],
            members: {
              Quantity: {
                type: 'integer'
              },
              Items: {
                type: 'list',
                member: {
                  locationName: 'KeyPairId'
                }
              }
            }
          },
          Sh: {
            type: 'structure',
            required: ['CallerReference', 'Origins', 'DefaultCacheBehavior', 'Comment', 'Enabled'],
            members: {
              CallerReference: {},
              Aliases: {
                shape: 'Si'
              },
              DefaultRootObject: {},
              Origins: {
                shape: 'Sk'
              },
              OriginGroups: {
                shape: 'Sz'
              },
              DefaultCacheBehavior: {
                shape: 'S18'
              },
              CacheBehaviors: {
                shape: 'S21'
              },
              CustomErrorResponses: {
                shape: 'S24'
              },
              Comment: {
                type: 'string',
                sensitive: true
              },
              Logging: {
                type: 'structure',
                required: ['Enabled', 'IncludeCookies', 'Bucket', 'Prefix'],
                members: {
                  Enabled: {
                    type: 'boolean'
                  },
                  IncludeCookies: {
                    type: 'boolean'
                  },
                  Bucket: {},
                  Prefix: {}
                }
              },
              PriceClass: {},
              Enabled: {
                type: 'boolean'
              },
              ViewerCertificate: {
                shape: 'S2a'
              },
              Restrictions: {
                shape: 'S2e'
              },
              WebACLId: {},
              HttpVersion: {},
              IsIPV6Enabled: {
                type: 'boolean'
              },
              ContinuousDeploymentPolicyId: {},
              Staging: {
                type: 'boolean'
              }
            }
          },
          Si: {
            type: 'structure',
            required: ['Quantity'],
            members: {
              Quantity: {
                type: 'integer'
              },
              Items: {
                type: 'list',
                member: {
                  locationName: 'CNAME'
                }
              }
            }
          },
          Sk: {
            type: 'structure',
            required: ['Quantity', 'Items'],
            members: {
              Quantity: {
                type: 'integer'
              },
              Items: {
                type: 'list',
                member: {
                  locationName: 'Origin',
                  type: 'structure',
                  required: ['Id', 'DomainName'],
                  members: {
                    Id: {},
                    DomainName: {},
                    OriginPath: {},
                    CustomHeaders: {
                      type: 'structure',
                      required: ['Quantity'],
                      members: {
                        Quantity: {
                          type: 'integer'
                        },
                        Items: {
                          type: 'list',
                          member: {
                            locationName: 'OriginCustomHeader',
                            type: 'structure',
                            required: ['HeaderName', 'HeaderValue'],
                            members: {
                              HeaderName: {},
                              HeaderValue: {
                                shape: 'Sq'
                              }
                            }
                          }
                        }
                      }
                    },
                    S3OriginConfig: {
                      type: 'structure',
                      required: ['OriginAccessIdentity'],
                      members: {
                        OriginAccessIdentity: {}
                      }
                    },
                    CustomOriginConfig: {
                      type: 'structure',
                      required: ['HTTPPort', 'HTTPSPort', 'OriginProtocolPolicy'],
                      members: {
                        HTTPPort: {
                          type: 'integer'
                        },
                        HTTPSPort: {
                          type: 'integer'
                        },
                        OriginProtocolPolicy: {},
                        OriginSslProtocols: {
                          type: 'structure',
                          required: ['Quantity', 'Items'],
                          members: {
                            Quantity: {
                              type: 'integer'
                            },
                            Items: {
                              type: 'list',
                              member: {
                                locationName: 'SslProtocol'
                              }
                            }
                          }
                        },
                        OriginReadTimeout: {
                          type: 'integer'
                        },
                        OriginKeepaliveTimeout: {
                          type: 'integer'
                        }
                      }
                    },
                    ConnectionAttempts: {
                      type: 'integer'
                    },
                    ConnectionTimeout: {
                      type: 'integer'
                    },
                    OriginShield: {
                      type: 'structure',
                      required: ['Enabled'],
                      members: {
                        Enabled: {
                          type: 'boolean'
                        },
                        OriginShieldRegion: {}
                      }
                    },
                    OriginAccessControlId: {}
                  }
                }
              }
            }
          },
          Sq: {
            type: 'string',
            sensitive: true
          },
          Sz: {
            type: 'structure',
            required: ['Quantity'],
            members: {
              Quantity: {
                type: 'integer'
              },
              Items: {
                type: 'list',
                member: {
                  locationName: 'OriginGroup',
                  type: 'structure',
                  required: ['Id', 'FailoverCriteria', 'Members'],
                  members: {
                    Id: {},
                    FailoverCriteria: {
                      type: 'structure',
                      required: ['StatusCodes'],
                      members: {
                        StatusCodes: {
                          type: 'structure',
                          required: ['Quantity', 'Items'],
                          members: {
                            Quantity: {
                              type: 'integer'
                            },
                            Items: {
                              type: 'list',
                              member: {
                                locationName: 'StatusCode',
                                type: 'integer'
                              }
                            }
                          }
                        }
                      }
                    },
                    Members: {
                      type: 'structure',
                      required: ['Quantity', 'Items'],
                      members: {
                        Quantity: {
                          type: 'integer'
                        },
                        Items: {
                          type: 'list',
                          member: {
                            locationName: 'OriginGroupMember',
                            type: 'structure',
                            required: ['OriginId'],
                            members: {
                              OriginId: {}
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          S18: {
            type: 'structure',
            required: ['TargetOriginId', 'ViewerProtocolPolicy'],
            members: {
              TargetOriginId: {},
              TrustedSigners: {
                shape: 'S19'
              },
              TrustedKeyGroups: {
                shape: 'S1b'
              },
              ViewerProtocolPolicy: {},
              AllowedMethods: {
                shape: 'S1e'
              },
              SmoothStreaming: {
                type: 'boolean'
              },
              Compress: {
                type: 'boolean'
              },
              LambdaFunctionAssociations: {
                shape: 'S1i'
              },
              FunctionAssociations: {
                shape: 'S1n'
              },
              FieldLevelEncryptionId: {},
              RealtimeLogConfigArn: {},
              CachePolicyId: {},
              OriginRequestPolicyId: {},
              ResponseHeadersPolicyId: {},
              ForwardedValues: {
                shape: 'S1r',
                deprecated: true
              },
              MinTTL: {
                deprecated: true,
                type: 'long'
              },
              DefaultTTL: {
                deprecated: true,
                type: 'long'
              },
              MaxTTL: {
                deprecated: true,
                type: 'long'
              }
            }
          },
          S19: {
            type: 'structure',
            required: ['Enabled', 'Quantity'],
            members: {
              Enabled: {
                type: 'boolean'
              },
              Quantity: {
                type: 'integer'
              },
              Items: {
                type: 'list',
                member: {
                  locationName: 'AwsAccountNumber'
                }
              }
            }
          },
          S1b: {
            type: 'structure',
            required: ['Enabled', 'Quantity'],
            members: {
              Enabled: {
                type: 'boolean'
              },
              Quantity: {
                type: 'integer'
              },
              Items: {
                type: 'list',
                member: {
                  locationName: 'KeyGroup'
                }
              }
            }
          },
          S1e: {
            type: 'structure',
            required: ['Quantity', 'Items'],
            members: {
              Quantity: {
                type: 'integer'
              },
              Items: {
                shape: 'S1f'
              },
              CachedMethods: {
                type: 'structure',
                required: ['Quantity', 'Items'],
                members: {
                  Quantity: {
                    type: 'integer'
                  },
                  Items: {
                    shape: 'S1f'
                  }
                }
              }
            }
          },
          S1f: {
            type: 'list',
            member: {
              locationName: 'Method'
            }
          },
          S1i: {
            type: 'structure',
            required: ['Quantity'],
            members: {
              Quantity: {
                type: 'integer'
              },
              Items: {
                type: 'list',
                member: {
                  locationName: 'LambdaFunctionAssociation',
                  type: 'structure',
                  required: ['LambdaFunctionARN', 'EventType'],
                  members: {
                    LambdaFunctionARN: {},
                    EventType: {},
                    IncludeBody: {
                      type: 'boolean'
                    }
                  }
                }
              }
            }
          },
          S1n: {
            type: 'structure',
            required: ['Quantity'],
            members: {
              Quantity: {
                type: 'integer'
              },
              Items: {
                type: 'list',
                member: {
                  locationName: 'FunctionAssociation',
                  type: 'structure',
                  required: ['FunctionARN', 'EventType'],
                  members: {
                    FunctionARN: {},
                    EventType: {}
                  }
                }
              }
            }
          },
          S1r: {
            type: 'structure',
            required: ['QueryString', 'Cookies'],
            members: {
              QueryString: {
                type: 'boolean'
              },
              Cookies: {
                type: 'structure',
                required: ['Forward'],
                members: {
                  Forward: {},
                  WhitelistedNames: {
                    shape: 'S1u'
                  }
                }
              },
              Headers: {
                shape: 'S1w'
              },
              QueryStringCacheKeys: {
                type: 'structure',
                required: ['Quantity'],
                members: {
                  Quantity: {
                    type: 'integer'
                  },
                  Items: {
                    type: 'list',
                    member: {
                      locationName: 'Name'
                    }
                  }
                }
              }
            }
          },
          S1u: {
            type: 'structure',
            required: ['Quantity'],
            members: {
              Quantity: {
                type: 'integer'
              },
              Items: {
                type: 'list',
                member: {
                  locationName: 'Name'
                }
              }
            }
          },
          S1w: {
            type: 'structure',
            required: ['Quantity'],
            members: {
              Quantity: {
                type: 'integer'
              },
              Items: {
                type: 'list',
                member: {
                  locationName: 'Name'
                }
              }
            }
          },
          S21: {
            type: 'structure',
            required: ['Quantity'],
            members: {
              Quantity: {
                type: 'integer'
              },
              Items: {
                type: 'list',
                member: {
                  locationName: 'CacheBehavior',
                  type: 'structure',
                  required: ['PathPattern', 'TargetOriginId', 'ViewerProtocolPolicy'],
                  members: {
                    PathPattern: {},
                    TargetOriginId: {},
                    TrustedSigners: {
                      shape: 'S19'
                    },
                    TrustedKeyGroups: {
                      shape: 'S1b'
                    },
                    ViewerProtocolPolicy: {},
                    AllowedMethods: {
                      shape: 'S1e'
                    },
                    SmoothStreaming: {
                      type: 'boolean'
                    },
                    Compress: {
                      type: 'boolean'
                    },
                    LambdaFunctionAssociations: {
                      shape: 'S1i'
                    },
                    FunctionAssociations: {
                      shape: 'S1n'
                    },
                    FieldLevelEncryptionId: {},
                    RealtimeLogConfigArn: {},
                    CachePolicyId: {},
                    OriginRequestPolicyId: {},
                    ResponseHeadersPolicyId: {},
                    ForwardedValues: {
                      shape: 'S1r',
                      deprecated: true
                    },
                    MinTTL: {
                      deprecated: true,
                      type: 'long'
                    },
                    DefaultTTL: {
                      deprecated: true,
                      type: 'long'
                    },
                    MaxTTL: {
                      deprecated: true,
                      type: 'long'
                    }
                  }
                }
              }
            }
          },
          S24: {
            type: 'structure',
            required: ['Quantity'],
            members: {
              Quantity: {
                type: 'integer'
              },
              Items: {
                type: 'list',
                member: {
                  locationName: 'CustomErrorResponse',
                  type: 'structure',
                  required: ['ErrorCode'],
                  members: {
                    ErrorCode: {
                      type: 'integer'
                    },
                    ResponsePagePath: {},
                    ResponseCode: {},
                    ErrorCachingMinTTL: {
                      type: 'long'
                    }
                  }
                }
              }
            }
          },
          S2a: {
            type: 'structure',
            members: {
              CloudFrontDefaultCertificate: {
                type: 'boolean'
              },
              IAMCertificateId: {},
              ACMCertificateArn: {},
              SSLSupportMethod: {},
              MinimumProtocolVersion: {},
              Certificate: {
                deprecated: true
              },
              CertificateSource: {
                deprecated: true
              }
            }
          },
          S2e: {
            type: 'structure',
            required: ['GeoRestriction'],
            members: {
              GeoRestriction: {
                type: 'structure',
                required: ['RestrictionType', 'Quantity'],
                members: {
                  RestrictionType: {},
                  Quantity: {
                    type: 'integer'
                  },
                  Items: {
                    type: 'list',
                    member: {
                      locationName: 'Location'
                    }
                  }
                }
              }
            }
          },
          S2j: {
            type: 'list',
            member: {
              locationName: 'AliasICPRecordal',
              type: 'structure',
              members: {
                CNAME: {},
                ICPRecordalStatus: {}
              }
            }
          },
          S2n: {
            type: 'structure',
            required: ['Name', 'MinTTL'],
            members: {
              Comment: {},
              Name: {},
              DefaultTTL: {
                type: 'long'
              },
              MaxTTL: {
                type: 'long'
              },
              MinTTL: {
                type: 'long'
              },
              ParametersInCacheKeyAndForwardedToOrigin: {
                type: 'structure',
                required: ['EnableAcceptEncodingGzip', 'HeadersConfig', 'CookiesConfig', 'QueryStringsConfig'],
                members: {
                  EnableAcceptEncodingGzip: {
                    type: 'boolean'
                  },
                  EnableAcceptEncodingBrotli: {
                    type: 'boolean'
                  },
                  HeadersConfig: {
                    type: 'structure',
                    required: ['HeaderBehavior'],
                    members: {
                      HeaderBehavior: {},
                      Headers: {
                        shape: 'S1w'
                      }
                    }
                  },
                  CookiesConfig: {
                    type: 'structure',
                    required: ['CookieBehavior'],
                    members: {
                      CookieBehavior: {},
                      Cookies: {
                        shape: 'S1u'
                      }
                    }
                  },
                  QueryStringsConfig: {
                    type: 'structure',
                    required: ['QueryStringBehavior'],
                    members: {
                      QueryStringBehavior: {},
                      QueryStrings: {
                        shape: 'S2v'
                      }
                    }
                  }
                }
              }
            }
          },
          S2v: {
            type: 'structure',
            required: ['Quantity'],
            members: {
              Quantity: {
                type: 'integer'
              },
              Items: {
                type: 'list',
                member: {
                  locationName: 'Name'
                }
              }
            }
          },
          S2y: {
            type: 'structure',
            required: ['Id', 'LastModifiedTime', 'CachePolicyConfig'],
            members: {
              Id: {},
              LastModifiedTime: {
                type: 'timestamp'
              },
              CachePolicyConfig: {
                shape: 'S2n'
              }
            }
          },
          S30: {
            type: 'structure',
            required: ['CallerReference', 'Comment'],
            members: {
              CallerReference: {},
              Comment: {}
            }
          },
          S32: {
            type: 'structure',
            required: ['Id', 'S3CanonicalUserId'],
            members: {
              Id: {},
              S3CanonicalUserId: {},
              CloudFrontOriginAccessIdentityConfig: {
                shape: 'S30'
              }
            }
          },
          S34: {
            type: 'structure',
            required: ['StagingDistributionDnsNames', 'Enabled'],
            members: {
              StagingDistributionDnsNames: {
                type: 'structure',
                required: ['Quantity'],
                members: {
                  Quantity: {
                    type: 'integer'
                  },
                  Items: {
                    type: 'list',
                    member: {
                      locationName: 'DnsName'
                    }
                  }
                }
              },
              Enabled: {
                type: 'boolean'
              },
              TrafficConfig: {
                type: 'structure',
                required: ['Type'],
                members: {
                  SingleWeightConfig: {
                    type: 'structure',
                    required: ['Weight'],
                    members: {
                      Weight: {
                        type: 'float'
                      },
                      SessionStickinessConfig: {
                        type: 'structure',
                        required: ['IdleTTL', 'MaximumTTL'],
                        members: {
                          IdleTTL: {
                            type: 'integer'
                          },
                          MaximumTTL: {
                            type: 'integer'
                          }
                        }
                      }
                    }
                  },
                  SingleHeaderConfig: {
                    type: 'structure',
                    required: ['Header', 'Value'],
                    members: {
                      Header: {},
                      Value: {}
                    }
                  },
                  Type: {}
                }
              }
            }
          },
          S3e: {
            type: 'structure',
            required: ['Id', 'LastModifiedTime', 'ContinuousDeploymentPolicyConfig'],
            members: {
              Id: {},
              LastModifiedTime: {
                type: 'timestamp'
              },
              ContinuousDeploymentPolicyConfig: {
                shape: 'S34'
              }
            }
          },
          S3j: {
            type: 'structure',
            members: {
              Items: {
                type: 'list',
                member: {
                  locationName: 'Tag',
                  type: 'structure',
                  required: ['Key'],
                  members: {
                    Key: {},
                    Value: {}
                  }
                }
              }
            }
          },
          S3q: {
            type: 'structure',
            required: ['CallerReference'],
            members: {
              CallerReference: {},
              Comment: {},
              QueryArgProfileConfig: {
                shape: 'S3r'
              },
              ContentTypeProfileConfig: {
                shape: 'S3v'
              }
            }
          },
          S3r: {
            type: 'structure',
            required: ['ForwardWhenQueryArgProfileIsUnknown'],
            members: {
              ForwardWhenQueryArgProfileIsUnknown: {
                type: 'boolean'
              },
              QueryArgProfiles: {
                type: 'structure',
                required: ['Quantity'],
                members: {
                  Quantity: {
                    type: 'integer'
                  },
                  Items: {
                    type: 'list',
                    member: {
                      locationName: 'QueryArgProfile',
                      type: 'structure',
                      required: ['QueryArg', 'ProfileId'],
                      members: {
                        QueryArg: {},
                        ProfileId: {}
                      }
                    }
                  }
                }
              }
            }
          },
          S3v: {
            type: 'structure',
            required: ['ForwardWhenContentTypeIsUnknown'],
            members: {
              ForwardWhenContentTypeIsUnknown: {
                type: 'boolean'
              },
              ContentTypeProfiles: {
                type: 'structure',
                required: ['Quantity'],
                members: {
                  Quantity: {
                    type: 'integer'
                  },
                  Items: {
                    type: 'list',
                    member: {
                      locationName: 'ContentTypeProfile',
                      type: 'structure',
                      required: ['Format', 'ContentType'],
                      members: {
                        Format: {},
                        ProfileId: {},
                        ContentType: {}
                      }
                    }
                  }
                }
              }
            }
          },
          S41: {
            type: 'structure',
            required: ['Id', 'LastModifiedTime', 'FieldLevelEncryptionConfig'],
            members: {
              Id: {},
              LastModifiedTime: {
                type: 'timestamp'
              },
              FieldLevelEncryptionConfig: {
                shape: 'S3q'
              }
            }
          },
          S43: {
            type: 'structure',
            required: ['Name', 'CallerReference', 'EncryptionEntities'],
            members: {
              Name: {},
              CallerReference: {},
              Comment: {},
              EncryptionEntities: {
                shape: 'S44'
              }
            }
          },
          S44: {
            type: 'structure',
            required: ['Quantity'],
            members: {
              Quantity: {
                type: 'integer'
              },
              Items: {
                type: 'list',
                member: {
                  locationName: 'EncryptionEntity',
                  type: 'structure',
                  required: ['PublicKeyId', 'ProviderId', 'FieldPatterns'],
                  members: {
                    PublicKeyId: {},
                    ProviderId: {},
                    FieldPatterns: {
                      type: 'structure',
                      required: ['Quantity'],
                      members: {
                        Quantity: {
                          type: 'integer'
                        },
                        Items: {
                          type: 'list',
                          member: {
                            locationName: 'FieldPattern'
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          S4a: {
            type: 'structure',
            required: ['Id', 'LastModifiedTime', 'FieldLevelEncryptionProfileConfig'],
            members: {
              Id: {},
              LastModifiedTime: {
                type: 'timestamp'
              },
              FieldLevelEncryptionProfileConfig: {
                shape: 'S43'
              }
            }
          },
          S4d: {
            type: 'structure',
            required: ['Comment', 'Runtime'],
            members: {
              Comment: {},
              Runtime: {},
              KeyValueStoreAssociations: {
                type: 'structure',
                required: ['Quantity'],
                members: {
                  Quantity: {
                    type: 'integer'
                  },
                  Items: {
                    type: 'list',
                    member: {
                      locationName: 'KeyValueStoreAssociation',
                      type: 'structure',
                      required: ['KeyValueStoreARN'],
                      members: {
                        KeyValueStoreARN: {}
                      }
                    }
                  }
                }
              }
            }
          },
          S4j: {
            type: 'blob',
            sensitive: true
          },
          S4l: {
            type: 'structure',
            required: ['Name', 'FunctionConfig', 'FunctionMetadata'],
            members: {
              Name: {},
              Status: {},
              FunctionConfig: {
                shape: 'S4d'
              },
              FunctionMetadata: {
                type: 'structure',
                required: ['FunctionARN', 'LastModifiedTime'],
                members: {
                  FunctionARN: {},
                  Stage: {},
                  CreatedTime: {
                    type: 'timestamp'
                  },
                  LastModifiedTime: {
                    type: 'timestamp'
                  }
                }
              }
            }
          },
          S4p: {
            type: 'structure',
            required: ['Paths', 'CallerReference'],
            members: {
              Paths: {
                type: 'structure',
                required: ['Quantity'],
                members: {
                  Quantity: {
                    type: 'integer'
                  },
                  Items: {
                    type: 'list',
                    member: {
                      locationName: 'Path'
                    }
                  }
                }
              },
              CallerReference: {}
            }
          },
          S4t: {
            type: 'structure',
            required: ['Id', 'Status', 'CreateTime', 'InvalidationBatch'],
            members: {
              Id: {},
              Status: {},
              CreateTime: {
                type: 'timestamp'
              },
              InvalidationBatch: {
                shape: 'S4p'
              }
            }
          },
          S4v: {
            type: 'structure',
            required: ['Name', 'Items'],
            members: {
              Name: {},
              Items: {
                type: 'list',
                member: {
                  locationName: 'PublicKey'
                }
              },
              Comment: {}
            }
          },
          S4y: {
            type: 'structure',
            required: ['Id', 'LastModifiedTime', 'KeyGroupConfig'],
            members: {
              Id: {},
              LastModifiedTime: {
                type: 'timestamp'
              },
              KeyGroupConfig: {
                shape: 'S4v'
              }
            }
          },
          S55: {
            type: 'structure',
            required: ['Name', 'Id', 'Comment', 'ARN', 'LastModifiedTime'],
            members: {
              Name: {},
              Id: {},
              Comment: {},
              ARN: {},
              Status: {},
              LastModifiedTime: {
                type: 'timestamp'
              }
            }
          },
          S57: {
            type: 'structure',
            members: {
              RealtimeMetricsSubscriptionConfig: {
                type: 'structure',
                required: ['RealtimeMetricsSubscriptionStatus'],
                members: {
                  RealtimeMetricsSubscriptionStatus: {}
                }
              }
            }
          },
          S5c: {
            type: 'structure',
            required: ['Name', 'SigningProtocol', 'SigningBehavior', 'OriginAccessControlOriginType'],
            members: {
              Name: {},
              Description: {},
              SigningProtocol: {},
              SigningBehavior: {},
              OriginAccessControlOriginType: {}
            }
          },
          S5h: {
            type: 'structure',
            required: ['Id'],
            members: {
              Id: {},
              OriginAccessControlConfig: {
                shape: 'S5c'
              }
            }
          },
          S5j: {
            type: 'structure',
            required: ['Name', 'HeadersConfig', 'CookiesConfig', 'QueryStringsConfig'],
            members: {
              Comment: {},
              Name: {},
              HeadersConfig: {
                type: 'structure',
                required: ['HeaderBehavior'],
                members: {
                  HeaderBehavior: {},
                  Headers: {
                    shape: 'S1w'
                  }
                }
              },
              CookiesConfig: {
                type: 'structure',
                required: ['CookieBehavior'],
                members: {
                  CookieBehavior: {},
                  Cookies: {
                    shape: 'S1u'
                  }
                }
              },
              QueryStringsConfig: {
                type: 'structure',
                required: ['QueryStringBehavior'],
                members: {
                  QueryStringBehavior: {},
                  QueryStrings: {
                    shape: 'S2v'
                  }
                }
              }
            }
          },
          S5r: {
            type: 'structure',
            required: ['Id', 'LastModifiedTime', 'OriginRequestPolicyConfig'],
            members: {
              Id: {},
              LastModifiedTime: {
                type: 'timestamp'
              },
              OriginRequestPolicyConfig: {
                shape: 'S5j'
              }
            }
          },
          S5t: {
            type: 'structure',
            required: ['CallerReference', 'Name', 'EncodedKey'],
            members: {
              CallerReference: {},
              Name: {},
              EncodedKey: {},
              Comment: {}
            }
          },
          S5v: {
            type: 'structure',
            required: ['Id', 'CreatedTime', 'PublicKeyConfig'],
            members: {
              Id: {},
              CreatedTime: {
                type: 'timestamp'
              },
              PublicKeyConfig: {
                shape: 'S5t'
              }
            }
          },
          S5x: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['StreamType'],
              members: {
                StreamType: {},
                KinesisStreamConfig: {
                  type: 'structure',
                  required: ['RoleARN', 'StreamARN'],
                  members: {
                    RoleARN: {},
                    StreamARN: {}
                  }
                }
              }
            }
          },
          S60: {
            type: 'list',
            member: {
              locationName: 'Field'
            }
          },
          S62: {
            type: 'structure',
            required: ['ARN', 'Name', 'SamplingRate', 'EndPoints', 'Fields'],
            members: {
              ARN: {},
              Name: {},
              SamplingRate: {
                type: 'long'
              },
              EndPoints: {
                shape: 'S5x'
              },
              Fields: {
                shape: 'S60'
              }
            }
          },
          S64: {
            type: 'structure',
            required: ['Name'],
            members: {
              Comment: {},
              Name: {},
              CorsConfig: {
                type: 'structure',
                required: ['AccessControlAllowOrigins', 'AccessControlAllowHeaders', 'AccessControlAllowMethods', 'AccessControlAllowCredentials', 'OriginOverride'],
                members: {
                  AccessControlAllowOrigins: {
                    type: 'structure',
                    required: ['Quantity', 'Items'],
                    members: {
                      Quantity: {
                        type: 'integer'
                      },
                      Items: {
                        type: 'list',
                        member: {
                          locationName: 'Origin'
                        }
                      }
                    }
                  },
                  AccessControlAllowHeaders: {
                    type: 'structure',
                    required: ['Quantity', 'Items'],
                    members: {
                      Quantity: {
                        type: 'integer'
                      },
                      Items: {
                        type: 'list',
                        member: {
                          locationName: 'Header'
                        }
                      }
                    }
                  },
                  AccessControlAllowMethods: {
                    type: 'structure',
                    required: ['Quantity', 'Items'],
                    members: {
                      Quantity: {
                        type: 'integer'
                      },
                      Items: {
                        type: 'list',
                        member: {
                          locationName: 'Method'
                        }
                      }
                    }
                  },
                  AccessControlAllowCredentials: {
                    type: 'boolean'
                  },
                  AccessControlExposeHeaders: {
                    type: 'structure',
                    required: ['Quantity'],
                    members: {
                      Quantity: {
                        type: 'integer'
                      },
                      Items: {
                        type: 'list',
                        member: {
                          locationName: 'Header'
                        }
                      }
                    }
                  },
                  AccessControlMaxAgeSec: {
                    type: 'integer'
                  },
                  OriginOverride: {
                    type: 'boolean'
                  }
                }
              },
              SecurityHeadersConfig: {
                type: 'structure',
                members: {
                  XSSProtection: {
                    type: 'structure',
                    required: ['Override', 'Protection'],
                    members: {
                      Override: {
                        type: 'boolean'
                      },
                      Protection: {
                        type: 'boolean'
                      },
                      ModeBlock: {
                        type: 'boolean'
                      },
                      ReportUri: {}
                    }
                  },
                  FrameOptions: {
                    type: 'structure',
                    required: ['Override', 'FrameOption'],
                    members: {
                      Override: {
                        type: 'boolean'
                      },
                      FrameOption: {}
                    }
                  },
                  ReferrerPolicy: {
                    type: 'structure',
                    required: ['Override', 'ReferrerPolicy'],
                    members: {
                      Override: {
                        type: 'boolean'
                      },
                      ReferrerPolicy: {}
                    }
                  },
                  ContentSecurityPolicy: {
                    type: 'structure',
                    required: ['Override', 'ContentSecurityPolicy'],
                    members: {
                      Override: {
                        type: 'boolean'
                      },
                      ContentSecurityPolicy: {}
                    }
                  },
                  ContentTypeOptions: {
                    type: 'structure',
                    required: ['Override'],
                    members: {
                      Override: {
                        type: 'boolean'
                      }
                    }
                  },
                  StrictTransportSecurity: {
                    type: 'structure',
                    required: ['Override', 'AccessControlMaxAgeSec'],
                    members: {
                      Override: {
                        type: 'boolean'
                      },
                      IncludeSubdomains: {
                        type: 'boolean'
                      },
                      Preload: {
                        type: 'boolean'
                      },
                      AccessControlMaxAgeSec: {
                        type: 'integer'
                      }
                    }
                  }
                }
              },
              ServerTimingHeadersConfig: {
                type: 'structure',
                required: ['Enabled'],
                members: {
                  Enabled: {
                    type: 'boolean'
                  },
                  SamplingRate: {
                    type: 'double'
                  }
                }
              },
              CustomHeadersConfig: {
                type: 'structure',
                required: ['Quantity'],
                members: {
                  Quantity: {
                    type: 'integer'
                  },
                  Items: {
                    type: 'list',
                    member: {
                      locationName: 'ResponseHeadersPolicyCustomHeader',
                      type: 'structure',
                      required: ['Header', 'Value', 'Override'],
                      members: {
                        Header: {},
                        Value: {},
                        Override: {
                          type: 'boolean'
                        }
                      }
                    }
                  }
                }
              },
              RemoveHeadersConfig: {
                type: 'structure',
                required: ['Quantity'],
                members: {
                  Quantity: {
                    type: 'integer'
                  },
                  Items: {
                    type: 'list',
                    member: {
                      locationName: 'ResponseHeadersPolicyRemoveHeader',
                      type: 'structure',
                      required: ['Header'],
                      members: {
                        Header: {}
                      }
                    }
                  }
                }
              }
            }
          },
          S6x: {
            type: 'structure',
            required: ['Id', 'LastModifiedTime', 'ResponseHeadersPolicyConfig'],
            members: {
              Id: {},
              LastModifiedTime: {
                type: 'timestamp'
              },
              ResponseHeadersPolicyConfig: {
                shape: 'S64'
              }
            }
          },
          S6z: {
            type: 'structure',
            required: ['CallerReference', 'S3Origin', 'Comment', 'TrustedSigners', 'Enabled'],
            members: {
              CallerReference: {},
              S3Origin: {
                shape: 'S70'
              },
              Aliases: {
                shape: 'Si'
              },
              Comment: {},
              Logging: {
                type: 'structure',
                required: ['Enabled', 'Bucket', 'Prefix'],
                members: {
                  Enabled: {
                    type: 'boolean'
                  },
                  Bucket: {},
                  Prefix: {}
                }
              },
              TrustedSigners: {
                shape: 'S19'
              },
              PriceClass: {},
              Enabled: {
                type: 'boolean'
              }
            }
          },
          S70: {
            type: 'structure',
            required: ['DomainName', 'OriginAccessIdentity'],
            members: {
              DomainName: {},
              OriginAccessIdentity: {}
            }
          },
          S73: {
            type: 'structure',
            required: ['Id', 'ARN', 'Status', 'DomainName', 'ActiveTrustedSigners', 'StreamingDistributionConfig'],
            members: {
              Id: {},
              ARN: {},
              Status: {},
              LastModifiedTime: {
                type: 'timestamp'
              },
              DomainName: {},
              ActiveTrustedSigners: {
                shape: 'S9'
              },
              StreamingDistributionConfig: {
                shape: 'S6z'
              }
            }
          },
          Sa2: {
            type: 'structure',
            required: ['Marker', 'MaxItems', 'IsTruncated', 'Quantity'],
            members: {
              Marker: {},
              NextMarker: {},
              MaxItems: {
                type: 'integer'
              },
              IsTruncated: {
                type: 'boolean'
              },
              Quantity: {
                type: 'integer'
              },
              Items: {
                type: 'list',
                member: {
                  locationName: 'DistributionSummary',
                  type: 'structure',
                  required: ['Id', 'ARN', 'Status', 'LastModifiedTime', 'DomainName', 'Aliases', 'Origins', 'DefaultCacheBehavior', 'CacheBehaviors', 'CustomErrorResponses', 'Comment', 'PriceClass', 'Enabled', 'ViewerCertificate', 'Restrictions', 'WebACLId', 'HttpVersion', 'IsIPV6Enabled', 'Staging'],
                  members: {
                    Id: {},
                    ARN: {},
                    Status: {},
                    LastModifiedTime: {
                      type: 'timestamp'
                    },
                    DomainName: {},
                    Aliases: {
                      shape: 'Si'
                    },
                    Origins: {
                      shape: 'Sk'
                    },
                    OriginGroups: {
                      shape: 'Sz'
                    },
                    DefaultCacheBehavior: {
                      shape: 'S18'
                    },
                    CacheBehaviors: {
                      shape: 'S21'
                    },
                    CustomErrorResponses: {
                      shape: 'S24'
                    },
                    Comment: {},
                    PriceClass: {},
                    Enabled: {
                      type: 'boolean'
                    },
                    ViewerCertificate: {
                      shape: 'S2a'
                    },
                    Restrictions: {
                      shape: 'S2e'
                    },
                    WebACLId: {},
                    HttpVersion: {},
                    IsIPV6Enabled: {
                      type: 'boolean'
                    },
                    AliasICPRecordals: {
                      shape: 'S2j'
                    },
                    Staging: {
                      type: 'boolean'
                    }
                  }
                }
              }
            }
          },
          Sa7: {
            type: 'structure',
            required: ['Marker', 'MaxItems', 'IsTruncated', 'Quantity'],
            members: {
              Marker: {},
              NextMarker: {},
              MaxItems: {
                type: 'integer'
              },
              IsTruncated: {
                type: 'boolean'
              },
              Quantity: {
                type: 'integer'
              },
              Items: {
                type: 'list',
                member: {
                  locationName: 'DistributionId'
                }
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=66db446fddd6fdcc4775db858f86428211d0f080.js.map