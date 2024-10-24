System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2017-03-25',
          endpointPrefix: 'cloudfront',
          globalEndpoint: 'cloudfront.amazonaws.com',
          protocol: 'rest-xml',
          serviceAbbreviation: 'CloudFront',
          serviceFullName: 'Amazon CloudFront',
          serviceId: 'CloudFront',
          signatureVersion: 'v4',
          uid: 'cloudfront-2017-03-25'
        },
        operations: {
          CreateCloudFrontOriginAccessIdentity: {
            http: {
              requestUri: '/2017-03-25/origin-access-identity/cloudfront',
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
                    uri: 'http://cloudfront.amazonaws.com/doc/2017-03-25/'
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
              requestUri: '/2017-03-25/distribution',
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
                    uri: 'http://cloudfront.amazonaws.com/doc/2017-03-25/'
                  }
                }
              },
              payload: 'DistributionConfig'
            },
            output: {
              type: 'structure',
              members: {
                Distribution: {
                  shape: 'S1s'
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
              requestUri: '/2017-03-25/distribution?WithTags',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['DistributionConfigWithTags'],
              members: {
                DistributionConfigWithTags: {
                  locationName: 'DistributionConfigWithTags',
                  xmlNamespace: {
                    uri: 'http://cloudfront.amazonaws.com/doc/2017-03-25/'
                  },
                  type: 'structure',
                  required: ['DistributionConfig', 'Tags'],
                  members: {
                    DistributionConfig: {
                      shape: 'S7'
                    },
                    Tags: {
                      shape: 'S21'
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
                  shape: 'S1s'
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
          CreateInvalidation: {
            http: {
              requestUri: '/2017-03-25/distribution/{DistributionId}/invalidation',
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
                  shape: 'S28',
                  locationName: 'InvalidationBatch',
                  xmlNamespace: {
                    uri: 'http://cloudfront.amazonaws.com/doc/2017-03-25/'
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
                  shape: 'S2c'
                }
              },
              payload: 'Invalidation'
            }
          },
          CreateStreamingDistribution: {
            http: {
              requestUri: '/2017-03-25/streaming-distribution',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['StreamingDistributionConfig'],
              members: {
                StreamingDistributionConfig: {
                  shape: 'S2e',
                  locationName: 'StreamingDistributionConfig',
                  xmlNamespace: {
                    uri: 'http://cloudfront.amazonaws.com/doc/2017-03-25/'
                  }
                }
              },
              payload: 'StreamingDistributionConfig'
            },
            output: {
              type: 'structure',
              members: {
                StreamingDistribution: {
                  shape: 'S2i'
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
              requestUri: '/2017-03-25/streaming-distribution?WithTags',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['StreamingDistributionConfigWithTags'],
              members: {
                StreamingDistributionConfigWithTags: {
                  locationName: 'StreamingDistributionConfigWithTags',
                  xmlNamespace: {
                    uri: 'http://cloudfront.amazonaws.com/doc/2017-03-25/'
                  },
                  type: 'structure',
                  required: ['StreamingDistributionConfig', 'Tags'],
                  members: {
                    StreamingDistributionConfig: {
                      shape: 'S2e'
                    },
                    Tags: {
                      shape: 'S21'
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
                  shape: 'S2i'
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
              requestUri: '/2017-03-25/origin-access-identity/cloudfront/{Id}',
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
              requestUri: '/2017-03-25/distribution/{Id}',
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
          DeleteServiceLinkedRole: {
            http: {
              method: 'DELETE',
              requestUri: '/2017-03-25/service-linked-role/{RoleName}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['RoleName'],
              members: {
                RoleName: {
                  location: 'uri',
                  locationName: 'RoleName'
                }
              }
            }
          },
          DeleteStreamingDistribution: {
            http: {
              method: 'DELETE',
              requestUri: '/2017-03-25/streaming-distribution/{Id}',
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
              requestUri: '/2017-03-25/origin-access-identity/cloudfront/{Id}'
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
              requestUri: '/2017-03-25/origin-access-identity/cloudfront/{Id}/config'
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
              requestUri: '/2017-03-25/distribution/{Id}'
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
                  shape: 'S1s'
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
              requestUri: '/2017-03-25/distribution/{Id}/config'
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
          GetInvalidation: {
            http: {
              method: 'GET',
              requestUri: '/2017-03-25/distribution/{DistributionId}/invalidation/{Id}'
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
                  shape: 'S2c'
                }
              },
              payload: 'Invalidation'
            }
          },
          GetStreamingDistribution: {
            http: {
              method: 'GET',
              requestUri: '/2017-03-25/streaming-distribution/{Id}'
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
                  shape: 'S2i'
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
              requestUri: '/2017-03-25/streaming-distribution/{Id}/config'
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
                  shape: 'S2e'
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
              requestUri: '/2017-03-25/origin-access-identity/cloudfront'
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
              requestUri: '/2017-03-25/distribution'
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
                  shape: 'S3b'
                }
              },
              payload: 'DistributionList'
            }
          },
          ListDistributionsByWebACLId: {
            http: {
              method: 'GET',
              requestUri: '/2017-03-25/distributionsByWebACLId/{WebACLId}'
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
                  shape: 'S3b'
                }
              },
              payload: 'DistributionList'
            }
          },
          ListInvalidations: {
            http: {
              method: 'GET',
              requestUri: '/2017-03-25/distribution/{DistributionId}/invalidation'
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
          ListStreamingDistributions: {
            http: {
              method: 'GET',
              requestUri: '/2017-03-25/streaming-distribution'
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
                            shape: 'S2f'
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
              requestUri: '/2017-03-25/tagging'
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
                  shape: 'S21'
                }
              },
              payload: 'Tags'
            }
          },
          TagResource: {
            http: {
              requestUri: '/2017-03-25/tagging?Operation=Tag',
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
                  shape: 'S21',
                  locationName: 'Tags',
                  xmlNamespace: {
                    uri: 'http://cloudfront.amazonaws.com/doc/2017-03-25/'
                  }
                }
              },
              payload: 'Tags'
            }
          },
          UntagResource: {
            http: {
              requestUri: '/2017-03-25/tagging?Operation=Untag',
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
                    uri: 'http://cloudfront.amazonaws.com/doc/2017-03-25/'
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
              requestUri: '/2017-03-25/origin-access-identity/cloudfront/{Id}/config'
            },
            input: {
              type: 'structure',
              required: ['CloudFrontOriginAccessIdentityConfig', 'Id'],
              members: {
                CloudFrontOriginAccessIdentityConfig: {
                  shape: 'S2',
                  locationName: 'CloudFrontOriginAccessIdentityConfig',
                  xmlNamespace: {
                    uri: 'http://cloudfront.amazonaws.com/doc/2017-03-25/'
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
              requestUri: '/2017-03-25/distribution/{Id}/config'
            },
            input: {
              type: 'structure',
              required: ['DistributionConfig', 'Id'],
              members: {
                DistributionConfig: {
                  shape: 'S7',
                  locationName: 'DistributionConfig',
                  xmlNamespace: {
                    uri: 'http://cloudfront.amazonaws.com/doc/2017-03-25/'
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
                  shape: 'S1s'
                },
                ETag: {
                  location: 'header',
                  locationName: 'ETag'
                }
              },
              payload: 'Distribution'
            }
          },
          UpdateStreamingDistribution: {
            http: {
              method: 'PUT',
              requestUri: '/2017-03-25/streaming-distribution/{Id}/config'
            },
            input: {
              type: 'structure',
              required: ['StreamingDistributionConfig', 'Id'],
              members: {
                StreamingDistributionConfig: {
                  shape: 'S2e',
                  locationName: 'StreamingDistributionConfig',
                  xmlNamespace: {
                    uri: 'http://cloudfront.amazonaws.com/doc/2017-03-25/'
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
                  shape: 'S2i'
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
                shape: 'S1a'
              },
              CustomErrorResponses: {
                shape: 'S1d'
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
                shape: 'S1i'
              },
              Restrictions: {
                shape: 'S1m'
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
              }
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
                  members: {
                    LambdaFunctionARN: {},
                    EventType: {}
                  }
                }
              }
            }
          },
          S1a: {
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
                    }
                  }
                }
              }
            }
          },
          S1d: {
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
          S1i: {
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
          S1m: {
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
          S1s: {
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
                shape: 'S1u'
              },
              DistributionConfig: {
                shape: 'S7'
              }
            }
          },
          S1u: {
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
          S21: {
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
          S28: {
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
          S2c: {
            type: 'structure',
            required: ['Id', 'Status', 'CreateTime', 'InvalidationBatch'],
            members: {
              Id: {},
              Status: {},
              CreateTime: {
                type: 'timestamp'
              },
              InvalidationBatch: {
                shape: 'S28'
              }
            }
          },
          S2e: {
            type: 'structure',
            required: ['CallerReference', 'S3Origin', 'Comment', 'TrustedSigners', 'Enabled'],
            members: {
              CallerReference: {},
              S3Origin: {
                shape: 'S2f'
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
          S2f: {
            type: 'structure',
            required: ['DomainName', 'OriginAccessIdentity'],
            members: {
              DomainName: {},
              OriginAccessIdentity: {}
            }
          },
          S2i: {
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
                shape: 'S1u'
              },
              StreamingDistributionConfig: {
                shape: 'S2e'
              }
            }
          },
          S3b: {
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
                      shape: 'S1a'
                    },
                    CustomErrorResponses: {
                      shape: 'S1d'
                    },
                    Comment: {},
                    PriceClass: {},
                    Enabled: {
                      type: 'boolean'
                    },
                    ViewerCertificate: {
                      shape: 'S1i'
                    },
                    Restrictions: {
                      shape: 'S1m'
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
//# sourceMappingURL=398f97f1d24638fe32299907a738edcf3cdab943.js.map