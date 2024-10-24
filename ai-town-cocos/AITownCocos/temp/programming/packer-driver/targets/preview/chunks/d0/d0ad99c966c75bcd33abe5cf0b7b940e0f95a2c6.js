System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2018-06-18',
          endpointPrefix: 'cloudfront',
          globalEndpoint: 'cloudfront.amazonaws.com',
          protocol: 'rest-xml',
          serviceAbbreviation: 'CloudFront',
          serviceFullName: 'Amazon CloudFront',
          serviceId: 'CloudFront',
          signatureVersion: 'v4',
          uid: 'cloudfront-2018-06-18'
        },
        operations: {
          CreateCloudFrontOriginAccessIdentity: {
            http: {
              requestUri: '/2018-06-18/origin-access-identity/cloudfront',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['CloudFrontOriginAccessIdentityConfig'],
              members: {
                CloudFrontOriginAccessIdentityConfig: {
                  shape: 'S2',
                  locationName: 'CloudFrontOriginAccessIdentityConfig',
                  xmlNamespace: {
                    uri: 'http://cloudfront.amazonaws.com/doc/2018-06-18/'
                  }
                }
              },
              payload: 'CloudFrontOriginAccessIdentityConfig'
            },
            output: {
              type: 'structure',
              members: {
                CloudFrontOriginAccessIdentity: {
                  shape: 'S5'
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
          CreateDistribution: {
            http: {
              requestUri: '/2018-06-18/distribution',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['DistributionConfig'],
              members: {
                DistributionConfig: {
                  shape: 'S7',
                  locationName: 'DistributionConfig',
                  xmlNamespace: {
                    uri: 'http://cloudfront.amazonaws.com/doc/2018-06-18/'
                  }
                }
              },
              payload: 'DistributionConfig'
            },
            output: {
              type: 'structure',
              members: {
                Distribution: {
                  shape: 'S1t'
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
              requestUri: '/2018-06-18/distribution?WithTags',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['DistributionConfigWithTags'],
              members: {
                DistributionConfigWithTags: {
                  locationName: 'DistributionConfigWithTags',
                  xmlNamespace: {
                    uri: 'http://cloudfront.amazonaws.com/doc/2018-06-18/'
                  },
                  type: 'structure',
                  required: ['DistributionConfig', 'Tags'],
                  members: {
                    DistributionConfig: {
                      shape: 'S7'
                    },
                    Tags: {
                      shape: 'S22'
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
                  shape: 'S1t'
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
              requestUri: '/2018-06-18/field-level-encryption',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['FieldLevelEncryptionConfig'],
              members: {
                FieldLevelEncryptionConfig: {
                  shape: 'S29',
                  locationName: 'FieldLevelEncryptionConfig',
                  xmlNamespace: {
                    uri: 'http://cloudfront.amazonaws.com/doc/2018-06-18/'
                  }
                }
              },
              payload: 'FieldLevelEncryptionConfig'
            },
            output: {
              type: 'structure',
              members: {
                FieldLevelEncryption: {
                  shape: 'S2k'
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
              requestUri: '/2018-06-18/field-level-encryption-profile',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['FieldLevelEncryptionProfileConfig'],
              members: {
                FieldLevelEncryptionProfileConfig: {
                  shape: 'S2m',
                  locationName: 'FieldLevelEncryptionProfileConfig',
                  xmlNamespace: {
                    uri: 'http://cloudfront.amazonaws.com/doc/2018-06-18/'
                  }
                }
              },
              payload: 'FieldLevelEncryptionProfileConfig'
            },
            output: {
              type: 'structure',
              members: {
                FieldLevelEncryptionProfile: {
                  shape: 'S2t'
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
          CreateInvalidation: {
            http: {
              requestUri: '/2018-06-18/distribution/{DistributionId}/invalidation',
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
                  shape: 'S2v',
                  locationName: 'InvalidationBatch',
                  xmlNamespace: {
                    uri: 'http://cloudfront.amazonaws.com/doc/2018-06-18/'
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
                  shape: 'S2z'
                }
              },
              payload: 'Invalidation'
            }
          },
          CreatePublicKey: {
            http: {
              requestUri: '/2018-06-18/public-key',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['PublicKeyConfig'],
              members: {
                PublicKeyConfig: {
                  shape: 'S31',
                  locationName: 'PublicKeyConfig',
                  xmlNamespace: {
                    uri: 'http://cloudfront.amazonaws.com/doc/2018-06-18/'
                  }
                }
              },
              payload: 'PublicKeyConfig'
            },
            output: {
              type: 'structure',
              members: {
                PublicKey: {
                  shape: 'S33'
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
          CreateStreamingDistribution: {
            http: {
              requestUri: '/2018-06-18/streaming-distribution',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['StreamingDistributionConfig'],
              members: {
                StreamingDistributionConfig: {
                  shape: 'S35',
                  locationName: 'StreamingDistributionConfig',
                  xmlNamespace: {
                    uri: 'http://cloudfront.amazonaws.com/doc/2018-06-18/'
                  }
                }
              },
              payload: 'StreamingDistributionConfig'
            },
            output: {
              type: 'structure',
              members: {
                StreamingDistribution: {
                  shape: 'S39'
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
              requestUri: '/2018-06-18/streaming-distribution?WithTags',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['StreamingDistributionConfigWithTags'],
              members: {
                StreamingDistributionConfigWithTags: {
                  locationName: 'StreamingDistributionConfigWithTags',
                  xmlNamespace: {
                    uri: 'http://cloudfront.amazonaws.com/doc/2018-06-18/'
                  },
                  type: 'structure',
                  required: ['StreamingDistributionConfig', 'Tags'],
                  members: {
                    StreamingDistributionConfig: {
                      shape: 'S35'
                    },
                    Tags: {
                      shape: 'S22'
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
                  shape: 'S39'
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
          DeleteCloudFrontOriginAccessIdentity: {
            http: {
              method: 'DELETE',
              requestUri: '/2018-06-18/origin-access-identity/cloudfront/{Id}',
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
              requestUri: '/2018-06-18/distribution/{Id}',
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
              requestUri: '/2018-06-18/field-level-encryption/{Id}',
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
              requestUri: '/2018-06-18/field-level-encryption-profile/{Id}',
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
              requestUri: '/2018-06-18/public-key/{Id}',
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
              requestUri: '/2018-06-18/streaming-distribution/{Id}',
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
          GetCloudFrontOriginAccessIdentity: {
            http: {
              method: 'GET',
              requestUri: '/2018-06-18/origin-access-identity/cloudfront/{Id}'
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
                  shape: 'S5'
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
              requestUri: '/2018-06-18/origin-access-identity/cloudfront/{Id}/config'
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
                  shape: 'S2'
                },
                ETag: {
                  location: 'header',
                  locationName: 'ETag'
                }
              },
              payload: 'CloudFrontOriginAccessIdentityConfig'
            }
          },
          GetDistribution: {
            http: {
              method: 'GET',
              requestUri: '/2018-06-18/distribution/{Id}'
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
                  shape: 'S1t'
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
              requestUri: '/2018-06-18/distribution/{Id}/config'
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
                  shape: 'S7'
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
              requestUri: '/2018-06-18/field-level-encryption/{Id}'
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
                  shape: 'S2k'
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
              requestUri: '/2018-06-18/field-level-encryption/{Id}/config'
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
                  shape: 'S29'
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
              requestUri: '/2018-06-18/field-level-encryption-profile/{Id}'
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
                  shape: 'S2t'
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
              requestUri: '/2018-06-18/field-level-encryption-profile/{Id}/config'
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
                  shape: 'S2m'
                },
                ETag: {
                  location: 'header',
                  locationName: 'ETag'
                }
              },
              payload: 'FieldLevelEncryptionProfileConfig'
            }
          },
          GetInvalidation: {
            http: {
              method: 'GET',
              requestUri: '/2018-06-18/distribution/{DistributionId}/invalidation/{Id}'
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
                  shape: 'S2z'
                }
              },
              payload: 'Invalidation'
            }
          },
          GetPublicKey: {
            http: {
              method: 'GET',
              requestUri: '/2018-06-18/public-key/{Id}'
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
                  shape: 'S33'
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
              requestUri: '/2018-06-18/public-key/{Id}/config'
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
                  shape: 'S31'
                },
                ETag: {
                  location: 'header',
                  locationName: 'ETag'
                }
              },
              payload: 'PublicKeyConfig'
            }
          },
          GetStreamingDistribution: {
            http: {
              method: 'GET',
              requestUri: '/2018-06-18/streaming-distribution/{Id}'
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
                  shape: 'S39'
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
              requestUri: '/2018-06-18/streaming-distribution/{Id}/config'
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
                  shape: 'S35'
                },
                ETag: {
                  location: 'header',
                  locationName: 'ETag'
                }
              },
              payload: 'StreamingDistributionConfig'
            }
          },
          ListCloudFrontOriginAccessIdentities: {
            http: {
              method: 'GET',
              requestUri: '/2018-06-18/origin-access-identity/cloudfront'
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
          ListDistributions: {
            http: {
              method: 'GET',
              requestUri: '/2018-06-18/distribution'
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
                  shape: 'S4g'
                }
              },
              payload: 'DistributionList'
            }
          },
          ListDistributionsByWebACLId: {
            http: {
              method: 'GET',
              requestUri: '/2018-06-18/distributionsByWebACLId/{WebACLId}'
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
                  shape: 'S4g'
                }
              },
              payload: 'DistributionList'
            }
          },
          ListFieldLevelEncryptionConfigs: {
            http: {
              method: 'GET',
              requestUri: '/2018-06-18/field-level-encryption'
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
                            shape: 'S2a'
                          },
                          ContentTypeProfileConfig: {
                            shape: 'S2e'
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
              requestUri: '/2018-06-18/field-level-encryption-profile'
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
                            shape: 'S2n'
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
          ListInvalidations: {
            http: {
              method: 'GET',
              requestUri: '/2018-06-18/distribution/{DistributionId}/invalidation'
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
          ListPublicKeys: {
            http: {
              method: 'GET',
              requestUri: '/2018-06-18/public-key'
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
          ListStreamingDistributions: {
            http: {
              method: 'GET',
              requestUri: '/2018-06-18/streaming-distribution'
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
                            shape: 'S36'
                          },
                          Aliases: {
                            shape: 'S8'
                          },
                          TrustedSigners: {
                            shape: 'Sy'
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
              requestUri: '/2018-06-18/tagging'
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
                  shape: 'S22'
                }
              },
              payload: 'Tags'
            }
          },
          TagResource: {
            http: {
              requestUri: '/2018-06-18/tagging?Operation=Tag',
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
                  shape: 'S22',
                  locationName: 'Tags',
                  xmlNamespace: {
                    uri: 'http://cloudfront.amazonaws.com/doc/2018-06-18/'
                  }
                }
              },
              payload: 'Tags'
            }
          },
          UntagResource: {
            http: {
              requestUri: '/2018-06-18/tagging?Operation=Untag',
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
                    uri: 'http://cloudfront.amazonaws.com/doc/2018-06-18/'
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
          UpdateCloudFrontOriginAccessIdentity: {
            http: {
              method: 'PUT',
              requestUri: '/2018-06-18/origin-access-identity/cloudfront/{Id}/config'
            },
            input: {
              type: 'structure',
              required: ['CloudFrontOriginAccessIdentityConfig', 'Id'],
              members: {
                CloudFrontOriginAccessIdentityConfig: {
                  shape: 'S2',
                  locationName: 'CloudFrontOriginAccessIdentityConfig',
                  xmlNamespace: {
                    uri: 'http://cloudfront.amazonaws.com/doc/2018-06-18/'
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
                  shape: 'S5'
                },
                ETag: {
                  location: 'header',
                  locationName: 'ETag'
                }
              },
              payload: 'CloudFrontOriginAccessIdentity'
            }
          },
          UpdateDistribution: {
            http: {
              method: 'PUT',
              requestUri: '/2018-06-18/distribution/{Id}/config'
            },
            input: {
              type: 'structure',
              required: ['DistributionConfig', 'Id'],
              members: {
                DistributionConfig: {
                  shape: 'S7',
                  locationName: 'DistributionConfig',
                  xmlNamespace: {
                    uri: 'http://cloudfront.amazonaws.com/doc/2018-06-18/'
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
                  shape: 'S1t'
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
              requestUri: '/2018-06-18/field-level-encryption/{Id}/config'
            },
            input: {
              type: 'structure',
              required: ['FieldLevelEncryptionConfig', 'Id'],
              members: {
                FieldLevelEncryptionConfig: {
                  shape: 'S29',
                  locationName: 'FieldLevelEncryptionConfig',
                  xmlNamespace: {
                    uri: 'http://cloudfront.amazonaws.com/doc/2018-06-18/'
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
                  shape: 'S2k'
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
              requestUri: '/2018-06-18/field-level-encryption-profile/{Id}/config'
            },
            input: {
              type: 'structure',
              required: ['FieldLevelEncryptionProfileConfig', 'Id'],
              members: {
                FieldLevelEncryptionProfileConfig: {
                  shape: 'S2m',
                  locationName: 'FieldLevelEncryptionProfileConfig',
                  xmlNamespace: {
                    uri: 'http://cloudfront.amazonaws.com/doc/2018-06-18/'
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
                  shape: 'S2t'
                },
                ETag: {
                  location: 'header',
                  locationName: 'ETag'
                }
              },
              payload: 'FieldLevelEncryptionProfile'
            }
          },
          UpdatePublicKey: {
            http: {
              method: 'PUT',
              requestUri: '/2018-06-18/public-key/{Id}/config'
            },
            input: {
              type: 'structure',
              required: ['PublicKeyConfig', 'Id'],
              members: {
                PublicKeyConfig: {
                  shape: 'S31',
                  locationName: 'PublicKeyConfig',
                  xmlNamespace: {
                    uri: 'http://cloudfront.amazonaws.com/doc/2018-06-18/'
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
                  shape: 'S33'
                },
                ETag: {
                  location: 'header',
                  locationName: 'ETag'
                }
              },
              payload: 'PublicKey'
            }
          },
          UpdateStreamingDistribution: {
            http: {
              method: 'PUT',
              requestUri: '/2018-06-18/streaming-distribution/{Id}/config'
            },
            input: {
              type: 'structure',
              required: ['StreamingDistributionConfig', 'Id'],
              members: {
                StreamingDistributionConfig: {
                  shape: 'S35',
                  locationName: 'StreamingDistributionConfig',
                  xmlNamespace: {
                    uri: 'http://cloudfront.amazonaws.com/doc/2018-06-18/'
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
                  shape: 'S39'
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
          S2: {
            type: 'structure',
            required: ['CallerReference', 'Comment'],
            members: {
              CallerReference: {},
              Comment: {}
            }
          },
          S5: {
            type: 'structure',
            required: ['Id', 'S3CanonicalUserId'],
            members: {
              Id: {},
              S3CanonicalUserId: {},
              CloudFrontOriginAccessIdentityConfig: {
                shape: 'S2'
              }
            }
          },
          S7: {
            type: 'structure',
            required: ['CallerReference', 'Origins', 'DefaultCacheBehavior', 'Comment', 'Enabled'],
            members: {
              CallerReference: {},
              Aliases: {
                shape: 'S8'
              },
              DefaultRootObject: {},
              Origins: {
                shape: 'Sb'
              },
              DefaultCacheBehavior: {
                shape: 'Sn'
              },
              CacheBehaviors: {
                shape: 'S1b'
              },
              CustomErrorResponses: {
                shape: 'S1e'
              },
              Comment: {},
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
                shape: 'S1j'
              },
              Restrictions: {
                shape: 'S1n'
              },
              WebACLId: {},
              HttpVersion: {},
              IsIPV6Enabled: {
                type: 'boolean'
              }
            }
          },
          S8: {
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
          Sb: {
            type: 'structure',
            required: ['Quantity'],
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
                              HeaderValue: {}
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
                    }
                  }
                }
              }
            }
          },
          Sn: {
            type: 'structure',
            required: ['TargetOriginId', 'ForwardedValues', 'TrustedSigners', 'ViewerProtocolPolicy', 'MinTTL'],
            members: {
              TargetOriginId: {},
              ForwardedValues: {
                shape: 'So'
              },
              TrustedSigners: {
                shape: 'Sy'
              },
              ViewerProtocolPolicy: {},
              MinTTL: {
                type: 'long'
              },
              AllowedMethods: {
                shape: 'S12'
              },
              SmoothStreaming: {
                type: 'boolean'
              },
              DefaultTTL: {
                type: 'long'
              },
              MaxTTL: {
                type: 'long'
              },
              Compress: {
                type: 'boolean'
              },
              LambdaFunctionAssociations: {
                shape: 'S16'
              },
              FieldLevelEncryptionId: {}
            }
          },
          So: {
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
              Headers: {
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
          Sy: {
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
          S12: {
            type: 'structure',
            required: ['Quantity', 'Items'],
            members: {
              Quantity: {
                type: 'integer'
              },
              Items: {
                shape: 'S13'
              },
              CachedMethods: {
                type: 'structure',
                required: ['Quantity', 'Items'],
                members: {
                  Quantity: {
                    type: 'integer'
                  },
                  Items: {
                    shape: 'S13'
                  }
                }
              }
            }
          },
          S13: {
            type: 'list',
            member: {
              locationName: 'Method'
            }
          },
          S16: {
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
          S1b: {
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
                  required: ['PathPattern', 'TargetOriginId', 'ForwardedValues', 'TrustedSigners', 'ViewerProtocolPolicy', 'MinTTL'],
                  members: {
                    PathPattern: {},
                    TargetOriginId: {},
                    ForwardedValues: {
                      shape: 'So'
                    },
                    TrustedSigners: {
                      shape: 'Sy'
                    },
                    ViewerProtocolPolicy: {},
                    MinTTL: {
                      type: 'long'
                    },
                    AllowedMethods: {
                      shape: 'S12'
                    },
                    SmoothStreaming: {
                      type: 'boolean'
                    },
                    DefaultTTL: {
                      type: 'long'
                    },
                    MaxTTL: {
                      type: 'long'
                    },
                    Compress: {
                      type: 'boolean'
                    },
                    LambdaFunctionAssociations: {
                      shape: 'S16'
                    },
                    FieldLevelEncryptionId: {}
                  }
                }
              }
            }
          },
          S1e: {
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
          S1j: {
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
          S1n: {
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
          S1t: {
            type: 'structure',
            required: ['Id', 'ARN', 'Status', 'LastModifiedTime', 'InProgressInvalidationBatches', 'DomainName', 'ActiveTrustedSigners', 'DistributionConfig'],
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
                shape: 'S1v'
              },
              DistributionConfig: {
                shape: 'S7'
              }
            }
          },
          S1v: {
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
                    }
                  }
                }
              }
            }
          },
          S22: {
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
          S29: {
            type: 'structure',
            required: ['CallerReference'],
            members: {
              CallerReference: {},
              Comment: {},
              QueryArgProfileConfig: {
                shape: 'S2a'
              },
              ContentTypeProfileConfig: {
                shape: 'S2e'
              }
            }
          },
          S2a: {
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
          S2e: {
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
          S2k: {
            type: 'structure',
            required: ['Id', 'LastModifiedTime', 'FieldLevelEncryptionConfig'],
            members: {
              Id: {},
              LastModifiedTime: {
                type: 'timestamp'
              },
              FieldLevelEncryptionConfig: {
                shape: 'S29'
              }
            }
          },
          S2m: {
            type: 'structure',
            required: ['Name', 'CallerReference', 'EncryptionEntities'],
            members: {
              Name: {},
              CallerReference: {},
              Comment: {},
              EncryptionEntities: {
                shape: 'S2n'
              }
            }
          },
          S2n: {
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
          S2t: {
            type: 'structure',
            required: ['Id', 'LastModifiedTime', 'FieldLevelEncryptionProfileConfig'],
            members: {
              Id: {},
              LastModifiedTime: {
                type: 'timestamp'
              },
              FieldLevelEncryptionProfileConfig: {
                shape: 'S2m'
              }
            }
          },
          S2v: {
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
          S2z: {
            type: 'structure',
            required: ['Id', 'Status', 'CreateTime', 'InvalidationBatch'],
            members: {
              Id: {},
              Status: {},
              CreateTime: {
                type: 'timestamp'
              },
              InvalidationBatch: {
                shape: 'S2v'
              }
            }
          },
          S31: {
            type: 'structure',
            required: ['CallerReference', 'Name', 'EncodedKey'],
            members: {
              CallerReference: {},
              Name: {},
              EncodedKey: {},
              Comment: {}
            }
          },
          S33: {
            type: 'structure',
            required: ['Id', 'CreatedTime', 'PublicKeyConfig'],
            members: {
              Id: {},
              CreatedTime: {
                type: 'timestamp'
              },
              PublicKeyConfig: {
                shape: 'S31'
              }
            }
          },
          S35: {
            type: 'structure',
            required: ['CallerReference', 'S3Origin', 'Comment', 'TrustedSigners', 'Enabled'],
            members: {
              CallerReference: {},
              S3Origin: {
                shape: 'S36'
              },
              Aliases: {
                shape: 'S8'
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
                shape: 'Sy'
              },
              PriceClass: {},
              Enabled: {
                type: 'boolean'
              }
            }
          },
          S36: {
            type: 'structure',
            required: ['DomainName', 'OriginAccessIdentity'],
            members: {
              DomainName: {},
              OriginAccessIdentity: {}
            }
          },
          S39: {
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
                shape: 'S1v'
              },
              StreamingDistributionConfig: {
                shape: 'S35'
              }
            }
          },
          S4g: {
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
                  required: ['Id', 'ARN', 'Status', 'LastModifiedTime', 'DomainName', 'Aliases', 'Origins', 'DefaultCacheBehavior', 'CacheBehaviors', 'CustomErrorResponses', 'Comment', 'PriceClass', 'Enabled', 'ViewerCertificate', 'Restrictions', 'WebACLId', 'HttpVersion', 'IsIPV6Enabled'],
                  members: {
                    Id: {},
                    ARN: {},
                    Status: {},
                    LastModifiedTime: {
                      type: 'timestamp'
                    },
                    DomainName: {},
                    Aliases: {
                      shape: 'S8'
                    },
                    Origins: {
                      shape: 'Sb'
                    },
                    DefaultCacheBehavior: {
                      shape: 'Sn'
                    },
                    CacheBehaviors: {
                      shape: 'S1b'
                    },
                    CustomErrorResponses: {
                      shape: 'S1e'
                    },
                    Comment: {},
                    PriceClass: {},
                    Enabled: {
                      type: 'boolean'
                    },
                    ViewerCertificate: {
                      shape: 'S1j'
                    },
                    Restrictions: {
                      shape: 'S1n'
                    },
                    WebACLId: {},
                    HttpVersion: {},
                    IsIPV6Enabled: {
                      type: 'boolean'
                    }
                  }
                }
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=d0ad99c966c75bcd33abe5cf0b7b940e0f95a2c6.js.map