System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2019-03-26',
          endpointPrefix: 'cloudfront',
          globalEndpoint: 'cloudfront.amazonaws.com',
          protocol: 'rest-xml',
          serviceAbbreviation: 'CloudFront',
          serviceFullName: 'Amazon CloudFront',
          serviceId: 'CloudFront',
          signatureVersion: 'v4',
          uid: 'cloudfront-2019-03-26'
        },
        operations: {
          CreateCloudFrontOriginAccessIdentity: {
            http: {
              requestUri: '/2019-03-26/origin-access-identity/cloudfront',
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
                    uri: 'http://cloudfront.amazonaws.com/doc/2019-03-26/'
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
              requestUri: '/2019-03-26/distribution',
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
                    uri: 'http://cloudfront.amazonaws.com/doc/2019-03-26/'
                  }
                }
              },
              payload: 'DistributionConfig'
            },
            output: {
              type: 'structure',
              members: {
                Distribution: {
                  shape: 'S23'
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
              requestUri: '/2019-03-26/distribution?WithTags',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['DistributionConfigWithTags'],
              members: {
                DistributionConfigWithTags: {
                  locationName: 'DistributionConfigWithTags',
                  xmlNamespace: {
                    uri: 'http://cloudfront.amazonaws.com/doc/2019-03-26/'
                  },
                  type: 'structure',
                  required: ['DistributionConfig', 'Tags'],
                  members: {
                    DistributionConfig: {
                      shape: 'S7'
                    },
                    Tags: {
                      shape: 'S2f'
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
                  shape: 'S23'
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
              requestUri: '/2019-03-26/field-level-encryption',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['FieldLevelEncryptionConfig'],
              members: {
                FieldLevelEncryptionConfig: {
                  shape: 'S2m',
                  locationName: 'FieldLevelEncryptionConfig',
                  xmlNamespace: {
                    uri: 'http://cloudfront.amazonaws.com/doc/2019-03-26/'
                  }
                }
              },
              payload: 'FieldLevelEncryptionConfig'
            },
            output: {
              type: 'structure',
              members: {
                FieldLevelEncryption: {
                  shape: 'S2x'
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
              requestUri: '/2019-03-26/field-level-encryption-profile',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['FieldLevelEncryptionProfileConfig'],
              members: {
                FieldLevelEncryptionProfileConfig: {
                  shape: 'S2z',
                  locationName: 'FieldLevelEncryptionProfileConfig',
                  xmlNamespace: {
                    uri: 'http://cloudfront.amazonaws.com/doc/2019-03-26/'
                  }
                }
              },
              payload: 'FieldLevelEncryptionProfileConfig'
            },
            output: {
              type: 'structure',
              members: {
                FieldLevelEncryptionProfile: {
                  shape: 'S36'
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
              requestUri: '/2019-03-26/distribution/{DistributionId}/invalidation',
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
                  shape: 'S38',
                  locationName: 'InvalidationBatch',
                  xmlNamespace: {
                    uri: 'http://cloudfront.amazonaws.com/doc/2019-03-26/'
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
                  shape: 'S3c'
                }
              },
              payload: 'Invalidation'
            }
          },
          CreatePublicKey: {
            http: {
              requestUri: '/2019-03-26/public-key',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['PublicKeyConfig'],
              members: {
                PublicKeyConfig: {
                  shape: 'S3e',
                  locationName: 'PublicKeyConfig',
                  xmlNamespace: {
                    uri: 'http://cloudfront.amazonaws.com/doc/2019-03-26/'
                  }
                }
              },
              payload: 'PublicKeyConfig'
            },
            output: {
              type: 'structure',
              members: {
                PublicKey: {
                  shape: 'S3g'
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
              requestUri: '/2019-03-26/streaming-distribution',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['StreamingDistributionConfig'],
              members: {
                StreamingDistributionConfig: {
                  shape: 'S3i',
                  locationName: 'StreamingDistributionConfig',
                  xmlNamespace: {
                    uri: 'http://cloudfront.amazonaws.com/doc/2019-03-26/'
                  }
                }
              },
              payload: 'StreamingDistributionConfig'
            },
            output: {
              type: 'structure',
              members: {
                StreamingDistribution: {
                  shape: 'S3m'
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
              requestUri: '/2019-03-26/streaming-distribution?WithTags',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['StreamingDistributionConfigWithTags'],
              members: {
                StreamingDistributionConfigWithTags: {
                  locationName: 'StreamingDistributionConfigWithTags',
                  xmlNamespace: {
                    uri: 'http://cloudfront.amazonaws.com/doc/2019-03-26/'
                  },
                  type: 'structure',
                  required: ['StreamingDistributionConfig', 'Tags'],
                  members: {
                    StreamingDistributionConfig: {
                      shape: 'S3i'
                    },
                    Tags: {
                      shape: 'S2f'
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
                  shape: 'S3m'
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
              requestUri: '/2019-03-26/origin-access-identity/cloudfront/{Id}',
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
              requestUri: '/2019-03-26/distribution/{Id}',
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
              requestUri: '/2019-03-26/field-level-encryption/{Id}',
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
              requestUri: '/2019-03-26/field-level-encryption-profile/{Id}',
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
              requestUri: '/2019-03-26/public-key/{Id}',
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
              requestUri: '/2019-03-26/streaming-distribution/{Id}',
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
              requestUri: '/2019-03-26/origin-access-identity/cloudfront/{Id}'
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
              requestUri: '/2019-03-26/origin-access-identity/cloudfront/{Id}/config'
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
              requestUri: '/2019-03-26/distribution/{Id}'
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
                  shape: 'S23'
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
              requestUri: '/2019-03-26/distribution/{Id}/config'
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
              requestUri: '/2019-03-26/field-level-encryption/{Id}'
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
                  shape: 'S2x'
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
              requestUri: '/2019-03-26/field-level-encryption/{Id}/config'
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
                  shape: 'S2m'
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
              requestUri: '/2019-03-26/field-level-encryption-profile/{Id}'
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
                  shape: 'S36'
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
              requestUri: '/2019-03-26/field-level-encryption-profile/{Id}/config'
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
                  shape: 'S2z'
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
              requestUri: '/2019-03-26/distribution/{DistributionId}/invalidation/{Id}'
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
                  shape: 'S3c'
                }
              },
              payload: 'Invalidation'
            }
          },
          GetPublicKey: {
            http: {
              method: 'GET',
              requestUri: '/2019-03-26/public-key/{Id}'
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
                  shape: 'S3g'
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
              requestUri: '/2019-03-26/public-key/{Id}/config'
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
                  shape: 'S3e'
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
              requestUri: '/2019-03-26/streaming-distribution/{Id}'
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
                  shape: 'S3m'
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
              requestUri: '/2019-03-26/streaming-distribution/{Id}/config'
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
                  shape: 'S3i'
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
              requestUri: '/2019-03-26/origin-access-identity/cloudfront'
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
              requestUri: '/2019-03-26/distribution'
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
                  shape: 'S4t'
                }
              },
              payload: 'DistributionList'
            }
          },
          ListDistributionsByWebACLId: {
            http: {
              method: 'GET',
              requestUri: '/2019-03-26/distributionsByWebACLId/{WebACLId}'
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
                  shape: 'S4t'
                }
              },
              payload: 'DistributionList'
            }
          },
          ListFieldLevelEncryptionConfigs: {
            http: {
              method: 'GET',
              requestUri: '/2019-03-26/field-level-encryption'
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
                            shape: 'S2n'
                          },
                          ContentTypeProfileConfig: {
                            shape: 'S2r'
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
              requestUri: '/2019-03-26/field-level-encryption-profile'
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
                            shape: 'S30'
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
              requestUri: '/2019-03-26/distribution/{DistributionId}/invalidation'
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
              requestUri: '/2019-03-26/public-key'
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
              requestUri: '/2019-03-26/streaming-distribution'
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
                            shape: 'S3j'
                          },
                          Aliases: {
                            shape: 'S8'
                          },
                          TrustedSigners: {
                            shape: 'S17'
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
              requestUri: '/2019-03-26/tagging'
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
                  shape: 'S2f'
                }
              },
              payload: 'Tags'
            }
          },
          TagResource: {
            http: {
              requestUri: '/2019-03-26/tagging?Operation=Tag',
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
                  shape: 'S2f',
                  locationName: 'Tags',
                  xmlNamespace: {
                    uri: 'http://cloudfront.amazonaws.com/doc/2019-03-26/'
                  }
                }
              },
              payload: 'Tags'
            }
          },
          UntagResource: {
            http: {
              requestUri: '/2019-03-26/tagging?Operation=Untag',
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
                    uri: 'http://cloudfront.amazonaws.com/doc/2019-03-26/'
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
              requestUri: '/2019-03-26/origin-access-identity/cloudfront/{Id}/config'
            },
            input: {
              type: 'structure',
              required: ['CloudFrontOriginAccessIdentityConfig', 'Id'],
              members: {
                CloudFrontOriginAccessIdentityConfig: {
                  shape: 'S2',
                  locationName: 'CloudFrontOriginAccessIdentityConfig',
                  xmlNamespace: {
                    uri: 'http://cloudfront.amazonaws.com/doc/2019-03-26/'
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
              requestUri: '/2019-03-26/distribution/{Id}/config'
            },
            input: {
              type: 'structure',
              required: ['DistributionConfig', 'Id'],
              members: {
                DistributionConfig: {
                  shape: 'S7',
                  locationName: 'DistributionConfig',
                  xmlNamespace: {
                    uri: 'http://cloudfront.amazonaws.com/doc/2019-03-26/'
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
                  shape: 'S23'
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
              requestUri: '/2019-03-26/field-level-encryption/{Id}/config'
            },
            input: {
              type: 'structure',
              required: ['FieldLevelEncryptionConfig', 'Id'],
              members: {
                FieldLevelEncryptionConfig: {
                  shape: 'S2m',
                  locationName: 'FieldLevelEncryptionConfig',
                  xmlNamespace: {
                    uri: 'http://cloudfront.amazonaws.com/doc/2019-03-26/'
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
                  shape: 'S2x'
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
              requestUri: '/2019-03-26/field-level-encryption-profile/{Id}/config'
            },
            input: {
              type: 'structure',
              required: ['FieldLevelEncryptionProfileConfig', 'Id'],
              members: {
                FieldLevelEncryptionProfileConfig: {
                  shape: 'S2z',
                  locationName: 'FieldLevelEncryptionProfileConfig',
                  xmlNamespace: {
                    uri: 'http://cloudfront.amazonaws.com/doc/2019-03-26/'
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
                  shape: 'S36'
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
              requestUri: '/2019-03-26/public-key/{Id}/config'
            },
            input: {
              type: 'structure',
              required: ['PublicKeyConfig', 'Id'],
              members: {
                PublicKeyConfig: {
                  shape: 'S3e',
                  locationName: 'PublicKeyConfig',
                  xmlNamespace: {
                    uri: 'http://cloudfront.amazonaws.com/doc/2019-03-26/'
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
                  shape: 'S3g'
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
              requestUri: '/2019-03-26/streaming-distribution/{Id}/config'
            },
            input: {
              type: 'structure',
              required: ['StreamingDistributionConfig', 'Id'],
              members: {
                StreamingDistributionConfig: {
                  shape: 'S3i',
                  locationName: 'StreamingDistributionConfig',
                  xmlNamespace: {
                    uri: 'http://cloudfront.amazonaws.com/doc/2019-03-26/'
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
                  shape: 'S3m'
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
              OriginGroups: {
                shape: 'Sn'
              },
              DefaultCacheBehavior: {
                shape: 'Sw'
              },
              CacheBehaviors: {
                shape: 'S1k'
              },
              CustomErrorResponses: {
                shape: 'S1n'
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
                shape: 'S1t'
              },
              Restrictions: {
                shape: 'S1x'
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
                    },
                    ConnectionAttempts: {
                      type: 'integer'
                    },
                    ConnectionTimeout: {
                      type: 'integer'
                    }
                  }
                }
              }
            }
          },
          Sn: {
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
          Sw: {
            type: 'structure',
            required: ['TargetOriginId', 'ForwardedValues', 'TrustedSigners', 'ViewerProtocolPolicy', 'MinTTL'],
            members: {
              TargetOriginId: {},
              ForwardedValues: {
                shape: 'Sx'
              },
              TrustedSigners: {
                shape: 'S17'
              },
              ViewerProtocolPolicy: {},
              MinTTL: {
                type: 'long'
              },
              AllowedMethods: {
                shape: 'S1b'
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
                shape: 'S1f'
              },
              FieldLevelEncryptionId: {}
            }
          },
          Sx: {
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
          S17: {
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
            required: ['Quantity', 'Items'],
            members: {
              Quantity: {
                type: 'integer'
              },
              Items: {
                shape: 'S1c'
              },
              CachedMethods: {
                type: 'structure',
                required: ['Quantity', 'Items'],
                members: {
                  Quantity: {
                    type: 'integer'
                  },
                  Items: {
                    shape: 'S1c'
                  }
                }
              }
            }
          },
          S1c: {
            type: 'list',
            member: {
              locationName: 'Method'
            }
          },
          S1f: {
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
          S1k: {
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
                      shape: 'Sx'
                    },
                    TrustedSigners: {
                      shape: 'S17'
                    },
                    ViewerProtocolPolicy: {},
                    MinTTL: {
                      type: 'long'
                    },
                    AllowedMethods: {
                      shape: 'S1b'
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
                      shape: 'S1f'
                    },
                    FieldLevelEncryptionId: {}
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
          S1t: {
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
          S1x: {
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
          S23: {
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
                shape: 'S25'
              },
              DistributionConfig: {
                shape: 'S7'
              },
              AliasICPRecordals: {
                shape: 'S2a'
              }
            }
          },
          S25: {
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
          S2a: {
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
          S2f: {
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
          S2m: {
            type: 'structure',
            required: ['CallerReference'],
            members: {
              CallerReference: {},
              Comment: {},
              QueryArgProfileConfig: {
                shape: 'S2n'
              },
              ContentTypeProfileConfig: {
                shape: 'S2r'
              }
            }
          },
          S2n: {
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
          S2r: {
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
          S2x: {
            type: 'structure',
            required: ['Id', 'LastModifiedTime', 'FieldLevelEncryptionConfig'],
            members: {
              Id: {},
              LastModifiedTime: {
                type: 'timestamp'
              },
              FieldLevelEncryptionConfig: {
                shape: 'S2m'
              }
            }
          },
          S2z: {
            type: 'structure',
            required: ['Name', 'CallerReference', 'EncryptionEntities'],
            members: {
              Name: {},
              CallerReference: {},
              Comment: {},
              EncryptionEntities: {
                shape: 'S30'
              }
            }
          },
          S30: {
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
          S36: {
            type: 'structure',
            required: ['Id', 'LastModifiedTime', 'FieldLevelEncryptionProfileConfig'],
            members: {
              Id: {},
              LastModifiedTime: {
                type: 'timestamp'
              },
              FieldLevelEncryptionProfileConfig: {
                shape: 'S2z'
              }
            }
          },
          S38: {
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
          S3c: {
            type: 'structure',
            required: ['Id', 'Status', 'CreateTime', 'InvalidationBatch'],
            members: {
              Id: {},
              Status: {},
              CreateTime: {
                type: 'timestamp'
              },
              InvalidationBatch: {
                shape: 'S38'
              }
            }
          },
          S3e: {
            type: 'structure',
            required: ['CallerReference', 'Name', 'EncodedKey'],
            members: {
              CallerReference: {},
              Name: {},
              EncodedKey: {},
              Comment: {}
            }
          },
          S3g: {
            type: 'structure',
            required: ['Id', 'CreatedTime', 'PublicKeyConfig'],
            members: {
              Id: {},
              CreatedTime: {
                type: 'timestamp'
              },
              PublicKeyConfig: {
                shape: 'S3e'
              }
            }
          },
          S3i: {
            type: 'structure',
            required: ['CallerReference', 'S3Origin', 'Comment', 'TrustedSigners', 'Enabled'],
            members: {
              CallerReference: {},
              S3Origin: {
                shape: 'S3j'
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
                shape: 'S17'
              },
              PriceClass: {},
              Enabled: {
                type: 'boolean'
              }
            }
          },
          S3j: {
            type: 'structure',
            required: ['DomainName', 'OriginAccessIdentity'],
            members: {
              DomainName: {},
              OriginAccessIdentity: {}
            }
          },
          S3m: {
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
                shape: 'S25'
              },
              StreamingDistributionConfig: {
                shape: 'S3i'
              }
            }
          },
          S4t: {
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
                    OriginGroups: {
                      shape: 'Sn'
                    },
                    DefaultCacheBehavior: {
                      shape: 'Sw'
                    },
                    CacheBehaviors: {
                      shape: 'S1k'
                    },
                    CustomErrorResponses: {
                      shape: 'S1n'
                    },
                    Comment: {},
                    PriceClass: {},
                    Enabled: {
                      type: 'boolean'
                    },
                    ViewerCertificate: {
                      shape: 'S1t'
                    },
                    Restrictions: {
                      shape: 'S1x'
                    },
                    WebACLId: {},
                    HttpVersion: {},
                    IsIPV6Enabled: {
                      type: 'boolean'
                    },
                    AliasICPRecordals: {
                      shape: 'S2a'
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
//# sourceMappingURL=31e83dd56f4f630b68c2c1017c155b2e947dc338.js.map