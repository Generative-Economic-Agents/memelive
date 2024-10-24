System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2006-03-01',
          checksumFormat: 'md5',
          endpointPrefix: 's3',
          globalEndpoint: 's3.amazonaws.com',
          protocol: 'rest-xml',
          protocols: ['rest-xml'],
          serviceAbbreviation: 'Amazon S3',
          serviceFullName: 'Amazon Simple Storage Service',
          serviceId: 'S3',
          signatureVersion: 's3',
          uid: 's3-2006-03-01'
        },
        operations: {
          AbortMultipartUpload: {
            http: {
              method: 'DELETE',
              requestUri: '/{Bucket}/{Key+}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['Bucket', 'Key', 'UploadId'],
              members: {
                Bucket: {
                  contextParam: {
                    name: 'Bucket'
                  },
                  location: 'uri',
                  locationName: 'Bucket'
                },
                Key: {
                  contextParam: {
                    name: 'Key'
                  },
                  location: 'uri',
                  locationName: 'Key'
                },
                UploadId: {
                  location: 'querystring',
                  locationName: 'uploadId'
                },
                RequestPayer: {
                  location: 'header',
                  locationName: 'x-amz-request-payer'
                },
                ExpectedBucketOwner: {
                  location: 'header',
                  locationName: 'x-amz-expected-bucket-owner'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                RequestCharged: {
                  location: 'header',
                  locationName: 'x-amz-request-charged'
                }
              }
            }
          },
          CompleteMultipartUpload: {
            http: {
              requestUri: '/{Bucket}/{Key+}'
            },
            input: {
              type: 'structure',
              required: ['Bucket', 'Key', 'UploadId'],
              members: {
                Bucket: {
                  contextParam: {
                    name: 'Bucket'
                  },
                  location: 'uri',
                  locationName: 'Bucket'
                },
                Key: {
                  contextParam: {
                    name: 'Key'
                  },
                  location: 'uri',
                  locationName: 'Key'
                },
                MultipartUpload: {
                  locationName: 'CompleteMultipartUpload',
                  xmlNamespace: {
                    uri: 'http://s3.amazonaws.com/doc/2006-03-01/'
                  },
                  type: 'structure',
                  members: {
                    Parts: {
                      locationName: 'Part',
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          ETag: {},
                          ChecksumCRC32: {},
                          ChecksumCRC32C: {},
                          ChecksumSHA1: {},
                          ChecksumSHA256: {},
                          PartNumber: {
                            type: 'integer'
                          }
                        }
                      },
                      flattened: true
                    }
                  }
                },
                UploadId: {
                  location: 'querystring',
                  locationName: 'uploadId'
                },
                ChecksumCRC32: {
                  location: 'header',
                  locationName: 'x-amz-checksum-crc32'
                },
                ChecksumCRC32C: {
                  location: 'header',
                  locationName: 'x-amz-checksum-crc32c'
                },
                ChecksumSHA1: {
                  location: 'header',
                  locationName: 'x-amz-checksum-sha1'
                },
                ChecksumSHA256: {
                  location: 'header',
                  locationName: 'x-amz-checksum-sha256'
                },
                RequestPayer: {
                  location: 'header',
                  locationName: 'x-amz-request-payer'
                },
                ExpectedBucketOwner: {
                  location: 'header',
                  locationName: 'x-amz-expected-bucket-owner'
                },
                SSECustomerAlgorithm: {
                  location: 'header',
                  locationName: 'x-amz-server-side-encryption-customer-algorithm'
                },
                SSECustomerKey: {
                  shape: 'Sk',
                  location: 'header',
                  locationName: 'x-amz-server-side-encryption-customer-key'
                },
                SSECustomerKeyMD5: {
                  location: 'header',
                  locationName: 'x-amz-server-side-encryption-customer-key-MD5'
                }
              },
              payload: 'MultipartUpload'
            },
            output: {
              type: 'structure',
              members: {
                Location: {},
                Bucket: {},
                Key: {},
                Expiration: {
                  location: 'header',
                  locationName: 'x-amz-expiration'
                },
                ETag: {},
                ChecksumCRC32: {},
                ChecksumCRC32C: {},
                ChecksumSHA1: {},
                ChecksumSHA256: {},
                ServerSideEncryption: {
                  location: 'header',
                  locationName: 'x-amz-server-side-encryption'
                },
                VersionId: {
                  location: 'header',
                  locationName: 'x-amz-version-id'
                },
                SSEKMSKeyId: {
                  shape: 'Sr',
                  location: 'header',
                  locationName: 'x-amz-server-side-encryption-aws-kms-key-id'
                },
                BucketKeyEnabled: {
                  location: 'header',
                  locationName: 'x-amz-server-side-encryption-bucket-key-enabled',
                  type: 'boolean'
                },
                RequestCharged: {
                  location: 'header',
                  locationName: 'x-amz-request-charged'
                }
              }
            }
          },
          CopyObject: {
            http: {
              method: 'PUT',
              requestUri: '/{Bucket}/{Key+}'
            },
            input: {
              type: 'structure',
              required: ['Bucket', 'CopySource', 'Key'],
              members: {
                ACL: {
                  location: 'header',
                  locationName: 'x-amz-acl'
                },
                Bucket: {
                  contextParam: {
                    name: 'Bucket'
                  },
                  location: 'uri',
                  locationName: 'Bucket'
                },
                CacheControl: {
                  location: 'header',
                  locationName: 'Cache-Control'
                },
                ChecksumAlgorithm: {
                  location: 'header',
                  locationName: 'x-amz-checksum-algorithm'
                },
                ContentDisposition: {
                  location: 'header',
                  locationName: 'Content-Disposition'
                },
                ContentEncoding: {
                  location: 'header',
                  locationName: 'Content-Encoding'
                },
                ContentLanguage: {
                  location: 'header',
                  locationName: 'Content-Language'
                },
                ContentType: {
                  location: 'header',
                  locationName: 'Content-Type'
                },
                CopySource: {
                  contextParam: {
                    name: 'CopySource'
                  },
                  location: 'header',
                  locationName: 'x-amz-copy-source'
                },
                CopySourceIfMatch: {
                  location: 'header',
                  locationName: 'x-amz-copy-source-if-match'
                },
                CopySourceIfModifiedSince: {
                  location: 'header',
                  locationName: 'x-amz-copy-source-if-modified-since',
                  type: 'timestamp'
                },
                CopySourceIfNoneMatch: {
                  location: 'header',
                  locationName: 'x-amz-copy-source-if-none-match'
                },
                CopySourceIfUnmodifiedSince: {
                  location: 'header',
                  locationName: 'x-amz-copy-source-if-unmodified-since',
                  type: 'timestamp'
                },
                Expires: {
                  location: 'header',
                  locationName: 'Expires',
                  type: 'timestamp'
                },
                GrantFullControl: {
                  location: 'header',
                  locationName: 'x-amz-grant-full-control'
                },
                GrantRead: {
                  location: 'header',
                  locationName: 'x-amz-grant-read'
                },
                GrantReadACP: {
                  location: 'header',
                  locationName: 'x-amz-grant-read-acp'
                },
                GrantWriteACP: {
                  location: 'header',
                  locationName: 'x-amz-grant-write-acp'
                },
                Key: {
                  contextParam: {
                    name: 'Key'
                  },
                  location: 'uri',
                  locationName: 'Key'
                },
                Metadata: {
                  shape: 'S1b',
                  location: 'headers',
                  locationName: 'x-amz-meta-'
                },
                MetadataDirective: {
                  location: 'header',
                  locationName: 'x-amz-metadata-directive'
                },
                TaggingDirective: {
                  location: 'header',
                  locationName: 'x-amz-tagging-directive'
                },
                ServerSideEncryption: {
                  location: 'header',
                  locationName: 'x-amz-server-side-encryption'
                },
                StorageClass: {
                  location: 'header',
                  locationName: 'x-amz-storage-class'
                },
                WebsiteRedirectLocation: {
                  location: 'header',
                  locationName: 'x-amz-website-redirect-location'
                },
                SSECustomerAlgorithm: {
                  location: 'header',
                  locationName: 'x-amz-server-side-encryption-customer-algorithm'
                },
                SSECustomerKey: {
                  shape: 'Sk',
                  location: 'header',
                  locationName: 'x-amz-server-side-encryption-customer-key'
                },
                SSECustomerKeyMD5: {
                  location: 'header',
                  locationName: 'x-amz-server-side-encryption-customer-key-MD5'
                },
                SSEKMSKeyId: {
                  shape: 'Sr',
                  location: 'header',
                  locationName: 'x-amz-server-side-encryption-aws-kms-key-id'
                },
                SSEKMSEncryptionContext: {
                  shape: 'S1i',
                  location: 'header',
                  locationName: 'x-amz-server-side-encryption-context'
                },
                BucketKeyEnabled: {
                  location: 'header',
                  locationName: 'x-amz-server-side-encryption-bucket-key-enabled',
                  type: 'boolean'
                },
                CopySourceSSECustomerAlgorithm: {
                  location: 'header',
                  locationName: 'x-amz-copy-source-server-side-encryption-customer-algorithm'
                },
                CopySourceSSECustomerKey: {
                  shape: 'S1k',
                  location: 'header',
                  locationName: 'x-amz-copy-source-server-side-encryption-customer-key'
                },
                CopySourceSSECustomerKeyMD5: {
                  location: 'header',
                  locationName: 'x-amz-copy-source-server-side-encryption-customer-key-MD5'
                },
                RequestPayer: {
                  location: 'header',
                  locationName: 'x-amz-request-payer'
                },
                Tagging: {
                  location: 'header',
                  locationName: 'x-amz-tagging'
                },
                ObjectLockMode: {
                  location: 'header',
                  locationName: 'x-amz-object-lock-mode'
                },
                ObjectLockRetainUntilDate: {
                  shape: 'S1o',
                  location: 'header',
                  locationName: 'x-amz-object-lock-retain-until-date'
                },
                ObjectLockLegalHoldStatus: {
                  location: 'header',
                  locationName: 'x-amz-object-lock-legal-hold'
                },
                ExpectedBucketOwner: {
                  location: 'header',
                  locationName: 'x-amz-expected-bucket-owner'
                },
                ExpectedSourceBucketOwner: {
                  location: 'header',
                  locationName: 'x-amz-source-expected-bucket-owner'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                CopyObjectResult: {
                  type: 'structure',
                  members: {
                    ETag: {},
                    LastModified: {
                      type: 'timestamp'
                    },
                    ChecksumCRC32: {},
                    ChecksumCRC32C: {},
                    ChecksumSHA1: {},
                    ChecksumSHA256: {}
                  }
                },
                Expiration: {
                  location: 'header',
                  locationName: 'x-amz-expiration'
                },
                CopySourceVersionId: {
                  location: 'header',
                  locationName: 'x-amz-copy-source-version-id'
                },
                VersionId: {
                  location: 'header',
                  locationName: 'x-amz-version-id'
                },
                ServerSideEncryption: {
                  location: 'header',
                  locationName: 'x-amz-server-side-encryption'
                },
                SSECustomerAlgorithm: {
                  location: 'header',
                  locationName: 'x-amz-server-side-encryption-customer-algorithm'
                },
                SSECustomerKeyMD5: {
                  location: 'header',
                  locationName: 'x-amz-server-side-encryption-customer-key-MD5'
                },
                SSEKMSKeyId: {
                  shape: 'Sr',
                  location: 'header',
                  locationName: 'x-amz-server-side-encryption-aws-kms-key-id'
                },
                SSEKMSEncryptionContext: {
                  shape: 'S1i',
                  location: 'header',
                  locationName: 'x-amz-server-side-encryption-context'
                },
                BucketKeyEnabled: {
                  location: 'header',
                  locationName: 'x-amz-server-side-encryption-bucket-key-enabled',
                  type: 'boolean'
                },
                RequestCharged: {
                  location: 'header',
                  locationName: 'x-amz-request-charged'
                }
              },
              payload: 'CopyObjectResult'
            },
            alias: 'PutObjectCopy',
            staticContextParams: {
              DisableS3ExpressSessionAuth: {
                value: true
              }
            }
          },
          CreateBucket: {
            http: {
              method: 'PUT',
              requestUri: '/{Bucket}'
            },
            input: {
              type: 'structure',
              required: ['Bucket'],
              members: {
                ACL: {
                  location: 'header',
                  locationName: 'x-amz-acl'
                },
                Bucket: {
                  contextParam: {
                    name: 'Bucket'
                  },
                  location: 'uri',
                  locationName: 'Bucket'
                },
                CreateBucketConfiguration: {
                  locationName: 'CreateBucketConfiguration',
                  xmlNamespace: {
                    uri: 'http://s3.amazonaws.com/doc/2006-03-01/'
                  },
                  type: 'structure',
                  members: {
                    LocationConstraint: {},
                    Location: {
                      type: 'structure',
                      members: {
                        Type: {},
                        Name: {}
                      }
                    },
                    Bucket: {
                      type: 'structure',
                      members: {
                        DataRedundancy: {},
                        Type: {}
                      }
                    }
                  }
                },
                GrantFullControl: {
                  location: 'header',
                  locationName: 'x-amz-grant-full-control'
                },
                GrantRead: {
                  location: 'header',
                  locationName: 'x-amz-grant-read'
                },
                GrantReadACP: {
                  location: 'header',
                  locationName: 'x-amz-grant-read-acp'
                },
                GrantWrite: {
                  location: 'header',
                  locationName: 'x-amz-grant-write'
                },
                GrantWriteACP: {
                  location: 'header',
                  locationName: 'x-amz-grant-write-acp'
                },
                ObjectLockEnabledForBucket: {
                  location: 'header',
                  locationName: 'x-amz-bucket-object-lock-enabled',
                  type: 'boolean'
                },
                ObjectOwnership: {
                  location: 'header',
                  locationName: 'x-amz-object-ownership'
                }
              },
              payload: 'CreateBucketConfiguration'
            },
            output: {
              type: 'structure',
              members: {
                Location: {
                  location: 'header',
                  locationName: 'Location'
                }
              }
            },
            alias: 'PutBucket',
            staticContextParams: {
              DisableAccessPoints: {
                value: true
              },
              UseS3ExpressControlEndpoint: {
                value: true
              }
            }
          },
          CreateMultipartUpload: {
            http: {
              requestUri: '/{Bucket}/{Key+}?uploads'
            },
            input: {
              type: 'structure',
              required: ['Bucket', 'Key'],
              members: {
                ACL: {
                  location: 'header',
                  locationName: 'x-amz-acl'
                },
                Bucket: {
                  contextParam: {
                    name: 'Bucket'
                  },
                  location: 'uri',
                  locationName: 'Bucket'
                },
                CacheControl: {
                  location: 'header',
                  locationName: 'Cache-Control'
                },
                ContentDisposition: {
                  location: 'header',
                  locationName: 'Content-Disposition'
                },
                ContentEncoding: {
                  location: 'header',
                  locationName: 'Content-Encoding'
                },
                ContentLanguage: {
                  location: 'header',
                  locationName: 'Content-Language'
                },
                ContentType: {
                  location: 'header',
                  locationName: 'Content-Type'
                },
                Expires: {
                  location: 'header',
                  locationName: 'Expires',
                  type: 'timestamp'
                },
                GrantFullControl: {
                  location: 'header',
                  locationName: 'x-amz-grant-full-control'
                },
                GrantRead: {
                  location: 'header',
                  locationName: 'x-amz-grant-read'
                },
                GrantReadACP: {
                  location: 'header',
                  locationName: 'x-amz-grant-read-acp'
                },
                GrantWriteACP: {
                  location: 'header',
                  locationName: 'x-amz-grant-write-acp'
                },
                Key: {
                  contextParam: {
                    name: 'Key'
                  },
                  location: 'uri',
                  locationName: 'Key'
                },
                Metadata: {
                  shape: 'S1b',
                  location: 'headers',
                  locationName: 'x-amz-meta-'
                },
                ServerSideEncryption: {
                  location: 'header',
                  locationName: 'x-amz-server-side-encryption'
                },
                StorageClass: {
                  location: 'header',
                  locationName: 'x-amz-storage-class'
                },
                WebsiteRedirectLocation: {
                  location: 'header',
                  locationName: 'x-amz-website-redirect-location'
                },
                SSECustomerAlgorithm: {
                  location: 'header',
                  locationName: 'x-amz-server-side-encryption-customer-algorithm'
                },
                SSECustomerKey: {
                  shape: 'Sk',
                  location: 'header',
                  locationName: 'x-amz-server-side-encryption-customer-key'
                },
                SSECustomerKeyMD5: {
                  location: 'header',
                  locationName: 'x-amz-server-side-encryption-customer-key-MD5'
                },
                SSEKMSKeyId: {
                  shape: 'Sr',
                  location: 'header',
                  locationName: 'x-amz-server-side-encryption-aws-kms-key-id'
                },
                SSEKMSEncryptionContext: {
                  shape: 'S1i',
                  location: 'header',
                  locationName: 'x-amz-server-side-encryption-context'
                },
                BucketKeyEnabled: {
                  location: 'header',
                  locationName: 'x-amz-server-side-encryption-bucket-key-enabled',
                  type: 'boolean'
                },
                RequestPayer: {
                  location: 'header',
                  locationName: 'x-amz-request-payer'
                },
                Tagging: {
                  location: 'header',
                  locationName: 'x-amz-tagging'
                },
                ObjectLockMode: {
                  location: 'header',
                  locationName: 'x-amz-object-lock-mode'
                },
                ObjectLockRetainUntilDate: {
                  shape: 'S1o',
                  location: 'header',
                  locationName: 'x-amz-object-lock-retain-until-date'
                },
                ObjectLockLegalHoldStatus: {
                  location: 'header',
                  locationName: 'x-amz-object-lock-legal-hold'
                },
                ExpectedBucketOwner: {
                  location: 'header',
                  locationName: 'x-amz-expected-bucket-owner'
                },
                ChecksumAlgorithm: {
                  location: 'header',
                  locationName: 'x-amz-checksum-algorithm'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AbortDate: {
                  location: 'header',
                  locationName: 'x-amz-abort-date',
                  type: 'timestamp'
                },
                AbortRuleId: {
                  location: 'header',
                  locationName: 'x-amz-abort-rule-id'
                },
                Bucket: {
                  locationName: 'Bucket'
                },
                Key: {},
                UploadId: {},
                ServerSideEncryption: {
                  location: 'header',
                  locationName: 'x-amz-server-side-encryption'
                },
                SSECustomerAlgorithm: {
                  location: 'header',
                  locationName: 'x-amz-server-side-encryption-customer-algorithm'
                },
                SSECustomerKeyMD5: {
                  location: 'header',
                  locationName: 'x-amz-server-side-encryption-customer-key-MD5'
                },
                SSEKMSKeyId: {
                  shape: 'Sr',
                  location: 'header',
                  locationName: 'x-amz-server-side-encryption-aws-kms-key-id'
                },
                SSEKMSEncryptionContext: {
                  shape: 'S1i',
                  location: 'header',
                  locationName: 'x-amz-server-side-encryption-context'
                },
                BucketKeyEnabled: {
                  location: 'header',
                  locationName: 'x-amz-server-side-encryption-bucket-key-enabled',
                  type: 'boolean'
                },
                RequestCharged: {
                  location: 'header',
                  locationName: 'x-amz-request-charged'
                },
                ChecksumAlgorithm: {
                  location: 'header',
                  locationName: 'x-amz-checksum-algorithm'
                }
              }
            },
            alias: 'InitiateMultipartUpload'
          },
          CreateSession: {
            http: {
              method: 'GET',
              requestUri: '/{Bucket}?session'
            },
            input: {
              type: 'structure',
              required: ['Bucket'],
              members: {
                SessionMode: {
                  location: 'header',
                  locationName: 'x-amz-create-session-mode'
                },
                Bucket: {
                  contextParam: {
                    name: 'Bucket'
                  },
                  location: 'uri',
                  locationName: 'Bucket'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Credentials'],
              members: {
                Credentials: {
                  locationName: 'Credentials',
                  type: 'structure',
                  required: ['AccessKeyId', 'SecretAccessKey', 'SessionToken', 'Expiration'],
                  members: {
                    AccessKeyId: {
                      locationName: 'AccessKeyId'
                    },
                    SecretAccessKey: {
                      shape: 'S2h',
                      locationName: 'SecretAccessKey'
                    },
                    SessionToken: {
                      shape: 'S2h',
                      locationName: 'SessionToken'
                    },
                    Expiration: {
                      locationName: 'Expiration',
                      type: 'timestamp'
                    }
                  }
                }
              }
            },
            staticContextParams: {
              DisableS3ExpressSessionAuth: {
                value: true
              }
            }
          },
          DeleteBucket: {
            http: {
              method: 'DELETE',
              requestUri: '/{Bucket}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['Bucket'],
              members: {
                Bucket: {
                  contextParam: {
                    name: 'Bucket'
                  },
                  location: 'uri',
                  locationName: 'Bucket'
                },
                ExpectedBucketOwner: {
                  location: 'header',
                  locationName: 'x-amz-expected-bucket-owner'
                }
              }
            },
            staticContextParams: {
              UseS3ExpressControlEndpoint: {
                value: true
              }
            }
          },
          DeleteBucketAnalyticsConfiguration: {
            http: {
              method: 'DELETE',
              requestUri: '/{Bucket}?analytics',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['Bucket', 'Id'],
              members: {
                Bucket: {
                  contextParam: {
                    name: 'Bucket'
                  },
                  location: 'uri',
                  locationName: 'Bucket'
                },
                Id: {
                  location: 'querystring',
                  locationName: 'id'
                },
                ExpectedBucketOwner: {
                  location: 'header',
                  locationName: 'x-amz-expected-bucket-owner'
                }
              }
            },
            staticContextParams: {
              UseS3ExpressControlEndpoint: {
                value: true
              }
            }
          },
          DeleteBucketCors: {
            http: {
              method: 'DELETE',
              requestUri: '/{Bucket}?cors',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['Bucket'],
              members: {
                Bucket: {
                  contextParam: {
                    name: 'Bucket'
                  },
                  location: 'uri',
                  locationName: 'Bucket'
                },
                ExpectedBucketOwner: {
                  location: 'header',
                  locationName: 'x-amz-expected-bucket-owner'
                }
              }
            },
            staticContextParams: {
              UseS3ExpressControlEndpoint: {
                value: true
              }
            }
          },
          DeleteBucketEncryption: {
            http: {
              method: 'DELETE',
              requestUri: '/{Bucket}?encryption',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['Bucket'],
              members: {
                Bucket: {
                  contextParam: {
                    name: 'Bucket'
                  },
                  location: 'uri',
                  locationName: 'Bucket'
                },
                ExpectedBucketOwner: {
                  location: 'header',
                  locationName: 'x-amz-expected-bucket-owner'
                }
              }
            },
            staticContextParams: {
              UseS3ExpressControlEndpoint: {
                value: true
              }
            }
          },
          DeleteBucketIntelligentTieringConfiguration: {
            http: {
              method: 'DELETE',
              requestUri: '/{Bucket}?intelligent-tiering',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['Bucket', 'Id'],
              members: {
                Bucket: {
                  contextParam: {
                    name: 'Bucket'
                  },
                  location: 'uri',
                  locationName: 'Bucket'
                },
                Id: {
                  location: 'querystring',
                  locationName: 'id'
                }
              }
            },
            staticContextParams: {
              UseS3ExpressControlEndpoint: {
                value: true
              }
            }
          },
          DeleteBucketInventoryConfiguration: {
            http: {
              method: 'DELETE',
              requestUri: '/{Bucket}?inventory',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['Bucket', 'Id'],
              members: {
                Bucket: {
                  contextParam: {
                    name: 'Bucket'
                  },
                  location: 'uri',
                  locationName: 'Bucket'
                },
                Id: {
                  location: 'querystring',
                  locationName: 'id'
                },
                ExpectedBucketOwner: {
                  location: 'header',
                  locationName: 'x-amz-expected-bucket-owner'
                }
              }
            },
            staticContextParams: {
              UseS3ExpressControlEndpoint: {
                value: true
              }
            }
          },
          DeleteBucketLifecycle: {
            http: {
              method: 'DELETE',
              requestUri: '/{Bucket}?lifecycle',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['Bucket'],
              members: {
                Bucket: {
                  contextParam: {
                    name: 'Bucket'
                  },
                  location: 'uri',
                  locationName: 'Bucket'
                },
                ExpectedBucketOwner: {
                  location: 'header',
                  locationName: 'x-amz-expected-bucket-owner'
                }
              }
            },
            staticContextParams: {
              UseS3ExpressControlEndpoint: {
                value: true
              }
            }
          },
          DeleteBucketMetricsConfiguration: {
            http: {
              method: 'DELETE',
              requestUri: '/{Bucket}?metrics',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['Bucket', 'Id'],
              members: {
                Bucket: {
                  contextParam: {
                    name: 'Bucket'
                  },
                  location: 'uri',
                  locationName: 'Bucket'
                },
                Id: {
                  location: 'querystring',
                  locationName: 'id'
                },
                ExpectedBucketOwner: {
                  location: 'header',
                  locationName: 'x-amz-expected-bucket-owner'
                }
              }
            },
            staticContextParams: {
              UseS3ExpressControlEndpoint: {
                value: true
              }
            }
          },
          DeleteBucketOwnershipControls: {
            http: {
              method: 'DELETE',
              requestUri: '/{Bucket}?ownershipControls',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['Bucket'],
              members: {
                Bucket: {
                  contextParam: {
                    name: 'Bucket'
                  },
                  location: 'uri',
                  locationName: 'Bucket'
                },
                ExpectedBucketOwner: {
                  location: 'header',
                  locationName: 'x-amz-expected-bucket-owner'
                }
              }
            },
            staticContextParams: {
              UseS3ExpressControlEndpoint: {
                value: true
              }
            }
          },
          DeleteBucketPolicy: {
            http: {
              method: 'DELETE',
              requestUri: '/{Bucket}?policy',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['Bucket'],
              members: {
                Bucket: {
                  contextParam: {
                    name: 'Bucket'
                  },
                  location: 'uri',
                  locationName: 'Bucket'
                },
                ExpectedBucketOwner: {
                  location: 'header',
                  locationName: 'x-amz-expected-bucket-owner'
                }
              }
            },
            staticContextParams: {
              UseS3ExpressControlEndpoint: {
                value: true
              }
            }
          },
          DeleteBucketReplication: {
            http: {
              method: 'DELETE',
              requestUri: '/{Bucket}?replication',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['Bucket'],
              members: {
                Bucket: {
                  contextParam: {
                    name: 'Bucket'
                  },
                  location: 'uri',
                  locationName: 'Bucket'
                },
                ExpectedBucketOwner: {
                  location: 'header',
                  locationName: 'x-amz-expected-bucket-owner'
                }
              }
            },
            staticContextParams: {
              UseS3ExpressControlEndpoint: {
                value: true
              }
            }
          },
          DeleteBucketTagging: {
            http: {
              method: 'DELETE',
              requestUri: '/{Bucket}?tagging',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['Bucket'],
              members: {
                Bucket: {
                  contextParam: {
                    name: 'Bucket'
                  },
                  location: 'uri',
                  locationName: 'Bucket'
                },
                ExpectedBucketOwner: {
                  location: 'header',
                  locationName: 'x-amz-expected-bucket-owner'
                }
              }
            },
            staticContextParams: {
              UseS3ExpressControlEndpoint: {
                value: true
              }
            }
          },
          DeleteBucketWebsite: {
            http: {
              method: 'DELETE',
              requestUri: '/{Bucket}?website',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['Bucket'],
              members: {
                Bucket: {
                  contextParam: {
                    name: 'Bucket'
                  },
                  location: 'uri',
                  locationName: 'Bucket'
                },
                ExpectedBucketOwner: {
                  location: 'header',
                  locationName: 'x-amz-expected-bucket-owner'
                }
              }
            },
            staticContextParams: {
              UseS3ExpressControlEndpoint: {
                value: true
              }
            }
          },
          DeleteObject: {
            http: {
              method: 'DELETE',
              requestUri: '/{Bucket}/{Key+}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['Bucket', 'Key'],
              members: {
                Bucket: {
                  contextParam: {
                    name: 'Bucket'
                  },
                  location: 'uri',
                  locationName: 'Bucket'
                },
                Key: {
                  contextParam: {
                    name: 'Key'
                  },
                  location: 'uri',
                  locationName: 'Key'
                },
                MFA: {
                  location: 'header',
                  locationName: 'x-amz-mfa'
                },
                VersionId: {
                  location: 'querystring',
                  locationName: 'versionId'
                },
                RequestPayer: {
                  location: 'header',
                  locationName: 'x-amz-request-payer'
                },
                BypassGovernanceRetention: {
                  location: 'header',
                  locationName: 'x-amz-bypass-governance-retention',
                  type: 'boolean'
                },
                ExpectedBucketOwner: {
                  location: 'header',
                  locationName: 'x-amz-expected-bucket-owner'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                DeleteMarker: {
                  location: 'header',
                  locationName: 'x-amz-delete-marker',
                  type: 'boolean'
                },
                VersionId: {
                  location: 'header',
                  locationName: 'x-amz-version-id'
                },
                RequestCharged: {
                  location: 'header',
                  locationName: 'x-amz-request-charged'
                }
              }
            }
          },
          DeleteObjectTagging: {
            http: {
              method: 'DELETE',
              requestUri: '/{Bucket}/{Key+}?tagging',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['Bucket', 'Key'],
              members: {
                Bucket: {
                  contextParam: {
                    name: 'Bucket'
                  },
                  location: 'uri',
                  locationName: 'Bucket'
                },
                Key: {
                  location: 'uri',
                  locationName: 'Key'
                },
                VersionId: {
                  location: 'querystring',
                  locationName: 'versionId'
                },
                ExpectedBucketOwner: {
                  location: 'header',
                  locationName: 'x-amz-expected-bucket-owner'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                VersionId: {
                  location: 'header',
                  locationName: 'x-amz-version-id'
                }
              }
            }
          },
          DeleteObjects: {
            http: {
              requestUri: '/{Bucket}?delete'
            },
            input: {
              type: 'structure',
              required: ['Bucket', 'Delete'],
              members: {
                Bucket: {
                  contextParam: {
                    name: 'Bucket'
                  },
                  location: 'uri',
                  locationName: 'Bucket'
                },
                Delete: {
                  locationName: 'Delete',
                  xmlNamespace: {
                    uri: 'http://s3.amazonaws.com/doc/2006-03-01/'
                  },
                  type: 'structure',
                  required: ['Objects'],
                  members: {
                    Objects: {
                      locationName: 'Object',
                      type: 'list',
                      member: {
                        type: 'structure',
                        required: ['Key'],
                        members: {
                          Key: {},
                          VersionId: {}
                        }
                      },
                      flattened: true
                    },
                    Quiet: {
                      type: 'boolean'
                    }
                  }
                },
                MFA: {
                  location: 'header',
                  locationName: 'x-amz-mfa'
                },
                RequestPayer: {
                  location: 'header',
                  locationName: 'x-amz-request-payer'
                },
                BypassGovernanceRetention: {
                  location: 'header',
                  locationName: 'x-amz-bypass-governance-retention',
                  type: 'boolean'
                },
                ExpectedBucketOwner: {
                  location: 'header',
                  locationName: 'x-amz-expected-bucket-owner'
                },
                ChecksumAlgorithm: {
                  location: 'header',
                  locationName: 'x-amz-sdk-checksum-algorithm'
                }
              },
              payload: 'Delete'
            },
            output: {
              type: 'structure',
              members: {
                Deleted: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Key: {},
                      VersionId: {},
                      DeleteMarker: {
                        type: 'boolean'
                      },
                      DeleteMarkerVersionId: {}
                    }
                  },
                  flattened: true
                },
                RequestCharged: {
                  location: 'header',
                  locationName: 'x-amz-request-charged'
                },
                Errors: {
                  locationName: 'Error',
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Key: {},
                      VersionId: {},
                      Code: {},
                      Message: {}
                    }
                  },
                  flattened: true
                }
              }
            },
            alias: 'DeleteMultipleObjects',
            httpChecksum: {
              requestAlgorithmMember: 'ChecksumAlgorithm',
              requestChecksumRequired: true
            }
          },
          DeletePublicAccessBlock: {
            http: {
              method: 'DELETE',
              requestUri: '/{Bucket}?publicAccessBlock',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['Bucket'],
              members: {
                Bucket: {
                  contextParam: {
                    name: 'Bucket'
                  },
                  location: 'uri',
                  locationName: 'Bucket'
                },
                ExpectedBucketOwner: {
                  location: 'header',
                  locationName: 'x-amz-expected-bucket-owner'
                }
              }
            },
            staticContextParams: {
              UseS3ExpressControlEndpoint: {
                value: true
              }
            }
          },
          GetBucketAccelerateConfiguration: {
            http: {
              method: 'GET',
              requestUri: '/{Bucket}?accelerate'
            },
            input: {
              type: 'structure',
              required: ['Bucket'],
              members: {
                Bucket: {
                  contextParam: {
                    name: 'Bucket'
                  },
                  location: 'uri',
                  locationName: 'Bucket'
                },
                ExpectedBucketOwner: {
                  location: 'header',
                  locationName: 'x-amz-expected-bucket-owner'
                },
                RequestPayer: {
                  location: 'header',
                  locationName: 'x-amz-request-payer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Status: {},
                RequestCharged: {
                  location: 'header',
                  locationName: 'x-amz-request-charged'
                }
              }
            },
            staticContextParams: {
              UseS3ExpressControlEndpoint: {
                value: true
              }
            }
          },
          GetBucketAcl: {
            http: {
              method: 'GET',
              requestUri: '/{Bucket}?acl'
            },
            input: {
              type: 'structure',
              required: ['Bucket'],
              members: {
                Bucket: {
                  contextParam: {
                    name: 'Bucket'
                  },
                  location: 'uri',
                  locationName: 'Bucket'
                },
                ExpectedBucketOwner: {
                  location: 'header',
                  locationName: 'x-amz-expected-bucket-owner'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Owner: {
                  shape: 'S3q'
                },
                Grants: {
                  shape: 'S3t',
                  locationName: 'AccessControlList'
                }
              }
            },
            staticContextParams: {
              UseS3ExpressControlEndpoint: {
                value: true
              }
            }
          },
          GetBucketAnalyticsConfiguration: {
            http: {
              method: 'GET',
              requestUri: '/{Bucket}?analytics'
            },
            input: {
              type: 'structure',
              required: ['Bucket', 'Id'],
              members: {
                Bucket: {
                  contextParam: {
                    name: 'Bucket'
                  },
                  location: 'uri',
                  locationName: 'Bucket'
                },
                Id: {
                  location: 'querystring',
                  locationName: 'id'
                },
                ExpectedBucketOwner: {
                  location: 'header',
                  locationName: 'x-amz-expected-bucket-owner'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AnalyticsConfiguration: {
                  shape: 'S42'
                }
              },
              payload: 'AnalyticsConfiguration'
            },
            staticContextParams: {
              UseS3ExpressControlEndpoint: {
                value: true
              }
            }
          },
          GetBucketCors: {
            http: {
              method: 'GET',
              requestUri: '/{Bucket}?cors'
            },
            input: {
              type: 'structure',
              required: ['Bucket'],
              members: {
                Bucket: {
                  contextParam: {
                    name: 'Bucket'
                  },
                  location: 'uri',
                  locationName: 'Bucket'
                },
                ExpectedBucketOwner: {
                  location: 'header',
                  locationName: 'x-amz-expected-bucket-owner'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                CORSRules: {
                  shape: 'S4h',
                  locationName: 'CORSRule'
                }
              }
            },
            staticContextParams: {
              UseS3ExpressControlEndpoint: {
                value: true
              }
            }
          },
          GetBucketEncryption: {
            http: {
              method: 'GET',
              requestUri: '/{Bucket}?encryption'
            },
            input: {
              type: 'structure',
              required: ['Bucket'],
              members: {
                Bucket: {
                  contextParam: {
                    name: 'Bucket'
                  },
                  location: 'uri',
                  locationName: 'Bucket'
                },
                ExpectedBucketOwner: {
                  location: 'header',
                  locationName: 'x-amz-expected-bucket-owner'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ServerSideEncryptionConfiguration: {
                  shape: 'S4u'
                }
              },
              payload: 'ServerSideEncryptionConfiguration'
            },
            staticContextParams: {
              UseS3ExpressControlEndpoint: {
                value: true
              }
            }
          },
          GetBucketIntelligentTieringConfiguration: {
            http: {
              method: 'GET',
              requestUri: '/{Bucket}?intelligent-tiering'
            },
            input: {
              type: 'structure',
              required: ['Bucket', 'Id'],
              members: {
                Bucket: {
                  contextParam: {
                    name: 'Bucket'
                  },
                  location: 'uri',
                  locationName: 'Bucket'
                },
                Id: {
                  location: 'querystring',
                  locationName: 'id'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                IntelligentTieringConfiguration: {
                  shape: 'S50'
                }
              },
              payload: 'IntelligentTieringConfiguration'
            },
            staticContextParams: {
              UseS3ExpressControlEndpoint: {
                value: true
              }
            }
          },
          GetBucketInventoryConfiguration: {
            http: {
              method: 'GET',
              requestUri: '/{Bucket}?inventory'
            },
            input: {
              type: 'structure',
              required: ['Bucket', 'Id'],
              members: {
                Bucket: {
                  contextParam: {
                    name: 'Bucket'
                  },
                  location: 'uri',
                  locationName: 'Bucket'
                },
                Id: {
                  location: 'querystring',
                  locationName: 'id'
                },
                ExpectedBucketOwner: {
                  location: 'header',
                  locationName: 'x-amz-expected-bucket-owner'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                InventoryConfiguration: {
                  shape: 'S5a'
                }
              },
              payload: 'InventoryConfiguration'
            },
            staticContextParams: {
              UseS3ExpressControlEndpoint: {
                value: true
              }
            }
          },
          GetBucketLifecycle: {
            http: {
              method: 'GET',
              requestUri: '/{Bucket}?lifecycle'
            },
            input: {
              type: 'structure',
              required: ['Bucket'],
              members: {
                Bucket: {
                  contextParam: {
                    name: 'Bucket'
                  },
                  location: 'uri',
                  locationName: 'Bucket'
                },
                ExpectedBucketOwner: {
                  location: 'header',
                  locationName: 'x-amz-expected-bucket-owner'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Rules: {
                  shape: 'S5q',
                  locationName: 'Rule'
                }
              }
            },
            deprecated: true,
            staticContextParams: {
              UseS3ExpressControlEndpoint: {
                value: true
              }
            }
          },
          GetBucketLifecycleConfiguration: {
            http: {
              method: 'GET',
              requestUri: '/{Bucket}?lifecycle'
            },
            input: {
              type: 'structure',
              required: ['Bucket'],
              members: {
                Bucket: {
                  contextParam: {
                    name: 'Bucket'
                  },
                  location: 'uri',
                  locationName: 'Bucket'
                },
                ExpectedBucketOwner: {
                  location: 'header',
                  locationName: 'x-amz-expected-bucket-owner'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Rules: {
                  shape: 'S66',
                  locationName: 'Rule'
                }
              }
            },
            staticContextParams: {
              UseS3ExpressControlEndpoint: {
                value: true
              }
            }
          },
          GetBucketLocation: {
            http: {
              method: 'GET',
              requestUri: '/{Bucket}?location'
            },
            input: {
              type: 'structure',
              required: ['Bucket'],
              members: {
                Bucket: {
                  contextParam: {
                    name: 'Bucket'
                  },
                  location: 'uri',
                  locationName: 'Bucket'
                },
                ExpectedBucketOwner: {
                  location: 'header',
                  locationName: 'x-amz-expected-bucket-owner'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                LocationConstraint: {}
              }
            },
            staticContextParams: {
              UseS3ExpressControlEndpoint: {
                value: true
              }
            }
          },
          GetBucketLogging: {
            http: {
              method: 'GET',
              requestUri: '/{Bucket}?logging'
            },
            input: {
              type: 'structure',
              required: ['Bucket'],
              members: {
                Bucket: {
                  contextParam: {
                    name: 'Bucket'
                  },
                  location: 'uri',
                  locationName: 'Bucket'
                },
                ExpectedBucketOwner: {
                  location: 'header',
                  locationName: 'x-amz-expected-bucket-owner'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                LoggingEnabled: {
                  shape: 'S6i'
                }
              }
            },
            staticContextParams: {
              UseS3ExpressControlEndpoint: {
                value: true
              }
            }
          },
          GetBucketMetricsConfiguration: {
            http: {
              method: 'GET',
              requestUri: '/{Bucket}?metrics'
            },
            input: {
              type: 'structure',
              required: ['Bucket', 'Id'],
              members: {
                Bucket: {
                  contextParam: {
                    name: 'Bucket'
                  },
                  location: 'uri',
                  locationName: 'Bucket'
                },
                Id: {
                  location: 'querystring',
                  locationName: 'id'
                },
                ExpectedBucketOwner: {
                  location: 'header',
                  locationName: 'x-amz-expected-bucket-owner'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                MetricsConfiguration: {
                  shape: 'S6u'
                }
              },
              payload: 'MetricsConfiguration'
            },
            staticContextParams: {
              UseS3ExpressControlEndpoint: {
                value: true
              }
            }
          },
          GetBucketNotification: {
            http: {
              method: 'GET',
              requestUri: '/{Bucket}?notification'
            },
            input: {
              shape: 'S6y'
            },
            output: {
              shape: 'S6z'
            },
            deprecated: true,
            staticContextParams: {
              UseS3ExpressControlEndpoint: {
                value: true
              }
            }
          },
          GetBucketNotificationConfiguration: {
            http: {
              method: 'GET',
              requestUri: '/{Bucket}?notification'
            },
            input: {
              shape: 'S6y'
            },
            output: {
              shape: 'S7a'
            },
            staticContextParams: {
              UseS3ExpressControlEndpoint: {
                value: true
              }
            }
          },
          GetBucketOwnershipControls: {
            http: {
              method: 'GET',
              requestUri: '/{Bucket}?ownershipControls'
            },
            input: {
              type: 'structure',
              required: ['Bucket'],
              members: {
                Bucket: {
                  contextParam: {
                    name: 'Bucket'
                  },
                  location: 'uri',
                  locationName: 'Bucket'
                },
                ExpectedBucketOwner: {
                  location: 'header',
                  locationName: 'x-amz-expected-bucket-owner'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                OwnershipControls: {
                  shape: 'S7r'
                }
              },
              payload: 'OwnershipControls'
            },
            staticContextParams: {
              UseS3ExpressControlEndpoint: {
                value: true
              }
            }
          },
          GetBucketPolicy: {
            http: {
              method: 'GET',
              requestUri: '/{Bucket}?policy'
            },
            input: {
              type: 'structure',
              required: ['Bucket'],
              members: {
                Bucket: {
                  contextParam: {
                    name: 'Bucket'
                  },
                  location: 'uri',
                  locationName: 'Bucket'
                },
                ExpectedBucketOwner: {
                  location: 'header',
                  locationName: 'x-amz-expected-bucket-owner'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Policy: {}
              },
              payload: 'Policy'
            },
            staticContextParams: {
              UseS3ExpressControlEndpoint: {
                value: true
              }
            }
          },
          GetBucketPolicyStatus: {
            http: {
              method: 'GET',
              requestUri: '/{Bucket}?policyStatus'
            },
            input: {
              type: 'structure',
              required: ['Bucket'],
              members: {
                Bucket: {
                  contextParam: {
                    name: 'Bucket'
                  },
                  location: 'uri',
                  locationName: 'Bucket'
                },
                ExpectedBucketOwner: {
                  location: 'header',
                  locationName: 'x-amz-expected-bucket-owner'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                PolicyStatus: {
                  type: 'structure',
                  members: {
                    IsPublic: {
                      locationName: 'IsPublic',
                      type: 'boolean'
                    }
                  }
                }
              },
              payload: 'PolicyStatus'
            },
            staticContextParams: {
              UseS3ExpressControlEndpoint: {
                value: true
              }
            }
          },
          GetBucketReplication: {
            http: {
              method: 'GET',
              requestUri: '/{Bucket}?replication'
            },
            input: {
              type: 'structure',
              required: ['Bucket'],
              members: {
                Bucket: {
                  contextParam: {
                    name: 'Bucket'
                  },
                  location: 'uri',
                  locationName: 'Bucket'
                },
                ExpectedBucketOwner: {
                  location: 'header',
                  locationName: 'x-amz-expected-bucket-owner'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ReplicationConfiguration: {
                  shape: 'S83'
                }
              },
              payload: 'ReplicationConfiguration'
            },
            staticContextParams: {
              UseS3ExpressControlEndpoint: {
                value: true
              }
            }
          },
          GetBucketRequestPayment: {
            http: {
              method: 'GET',
              requestUri: '/{Bucket}?requestPayment'
            },
            input: {
              type: 'structure',
              required: ['Bucket'],
              members: {
                Bucket: {
                  contextParam: {
                    name: 'Bucket'
                  },
                  location: 'uri',
                  locationName: 'Bucket'
                },
                ExpectedBucketOwner: {
                  location: 'header',
                  locationName: 'x-amz-expected-bucket-owner'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Payer: {}
              }
            },
            staticContextParams: {
              UseS3ExpressControlEndpoint: {
                value: true
              }
            }
          },
          GetBucketTagging: {
            http: {
              method: 'GET',
              requestUri: '/{Bucket}?tagging'
            },
            input: {
              type: 'structure',
              required: ['Bucket'],
              members: {
                Bucket: {
                  contextParam: {
                    name: 'Bucket'
                  },
                  location: 'uri',
                  locationName: 'Bucket'
                },
                ExpectedBucketOwner: {
                  location: 'header',
                  locationName: 'x-amz-expected-bucket-owner'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['TagSet'],
              members: {
                TagSet: {
                  shape: 'S48'
                }
              }
            },
            staticContextParams: {
              UseS3ExpressControlEndpoint: {
                value: true
              }
            }
          },
          GetBucketVersioning: {
            http: {
              method: 'GET',
              requestUri: '/{Bucket}?versioning'
            },
            input: {
              type: 'structure',
              required: ['Bucket'],
              members: {
                Bucket: {
                  contextParam: {
                    name: 'Bucket'
                  },
                  location: 'uri',
                  locationName: 'Bucket'
                },
                ExpectedBucketOwner: {
                  location: 'header',
                  locationName: 'x-amz-expected-bucket-owner'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Status: {},
                MFADelete: {
                  locationName: 'MfaDelete'
                }
              }
            },
            staticContextParams: {
              UseS3ExpressControlEndpoint: {
                value: true
              }
            }
          },
          GetBucketWebsite: {
            http: {
              method: 'GET',
              requestUri: '/{Bucket}?website'
            },
            input: {
              type: 'structure',
              required: ['Bucket'],
              members: {
                Bucket: {
                  contextParam: {
                    name: 'Bucket'
                  },
                  location: 'uri',
                  locationName: 'Bucket'
                },
                ExpectedBucketOwner: {
                  location: 'header',
                  locationName: 'x-amz-expected-bucket-owner'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                RedirectAllRequestsTo: {
                  shape: 'S96'
                },
                IndexDocument: {
                  shape: 'S99'
                },
                ErrorDocument: {
                  shape: 'S9b'
                },
                RoutingRules: {
                  shape: 'S9c'
                }
              }
            },
            staticContextParams: {
              UseS3ExpressControlEndpoint: {
                value: true
              }
            }
          },
          GetObject: {
            http: {
              method: 'GET',
              requestUri: '/{Bucket}/{Key+}'
            },
            input: {
              type: 'structure',
              required: ['Bucket', 'Key'],
              members: {
                Bucket: {
                  contextParam: {
                    name: 'Bucket'
                  },
                  location: 'uri',
                  locationName: 'Bucket'
                },
                IfMatch: {
                  location: 'header',
                  locationName: 'If-Match'
                },
                IfModifiedSince: {
                  location: 'header',
                  locationName: 'If-Modified-Since',
                  type: 'timestamp'
                },
                IfNoneMatch: {
                  location: 'header',
                  locationName: 'If-None-Match'
                },
                IfUnmodifiedSince: {
                  location: 'header',
                  locationName: 'If-Unmodified-Since',
                  type: 'timestamp'
                },
                Key: {
                  contextParam: {
                    name: 'Key'
                  },
                  location: 'uri',
                  locationName: 'Key'
                },
                Range: {
                  location: 'header',
                  locationName: 'Range'
                },
                ResponseCacheControl: {
                  location: 'querystring',
                  locationName: 'response-cache-control'
                },
                ResponseContentDisposition: {
                  location: 'querystring',
                  locationName: 'response-content-disposition'
                },
                ResponseContentEncoding: {
                  location: 'querystring',
                  locationName: 'response-content-encoding'
                },
                ResponseContentLanguage: {
                  location: 'querystring',
                  locationName: 'response-content-language'
                },
                ResponseContentType: {
                  location: 'querystring',
                  locationName: 'response-content-type'
                },
                ResponseExpires: {
                  location: 'querystring',
                  locationName: 'response-expires',
                  type: 'timestamp',
                  timestampFormat: 'rfc822'
                },
                VersionId: {
                  location: 'querystring',
                  locationName: 'versionId'
                },
                SSECustomerAlgorithm: {
                  location: 'header',
                  locationName: 'x-amz-server-side-encryption-customer-algorithm'
                },
                SSECustomerKey: {
                  shape: 'Sk',
                  location: 'header',
                  locationName: 'x-amz-server-side-encryption-customer-key'
                },
                SSECustomerKeyMD5: {
                  location: 'header',
                  locationName: 'x-amz-server-side-encryption-customer-key-MD5'
                },
                RequestPayer: {
                  location: 'header',
                  locationName: 'x-amz-request-payer'
                },
                PartNumber: {
                  location: 'querystring',
                  locationName: 'partNumber',
                  type: 'integer'
                },
                ExpectedBucketOwner: {
                  location: 'header',
                  locationName: 'x-amz-expected-bucket-owner'
                },
                ChecksumMode: {
                  location: 'header',
                  locationName: 'x-amz-checksum-mode'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Body: {
                  streaming: true,
                  type: 'blob'
                },
                DeleteMarker: {
                  location: 'header',
                  locationName: 'x-amz-delete-marker',
                  type: 'boolean'
                },
                AcceptRanges: {
                  location: 'header',
                  locationName: 'accept-ranges'
                },
                Expiration: {
                  location: 'header',
                  locationName: 'x-amz-expiration'
                },
                Restore: {
                  location: 'header',
                  locationName: 'x-amz-restore'
                },
                LastModified: {
                  location: 'header',
                  locationName: 'Last-Modified',
                  type: 'timestamp'
                },
                ContentLength: {
                  location: 'header',
                  locationName: 'Content-Length',
                  type: 'long'
                },
                ETag: {
                  location: 'header',
                  locationName: 'ETag'
                },
                ChecksumCRC32: {
                  location: 'header',
                  locationName: 'x-amz-checksum-crc32'
                },
                ChecksumCRC32C: {
                  location: 'header',
                  locationName: 'x-amz-checksum-crc32c'
                },
                ChecksumSHA1: {
                  location: 'header',
                  locationName: 'x-amz-checksum-sha1'
                },
                ChecksumSHA256: {
                  location: 'header',
                  locationName: 'x-amz-checksum-sha256'
                },
                MissingMeta: {
                  location: 'header',
                  locationName: 'x-amz-missing-meta',
                  type: 'integer'
                },
                VersionId: {
                  location: 'header',
                  locationName: 'x-amz-version-id'
                },
                CacheControl: {
                  location: 'header',
                  locationName: 'Cache-Control'
                },
                ContentDisposition: {
                  location: 'header',
                  locationName: 'Content-Disposition'
                },
                ContentEncoding: {
                  location: 'header',
                  locationName: 'Content-Encoding'
                },
                ContentLanguage: {
                  location: 'header',
                  locationName: 'Content-Language'
                },
                ContentRange: {
                  location: 'header',
                  locationName: 'Content-Range'
                },
                ContentType: {
                  location: 'header',
                  locationName: 'Content-Type'
                },
                Expires: {
                  location: 'header',
                  locationName: 'Expires',
                  deprecated: true,
                  type: 'timestamp'
                },
                ExpiresString: {
                  location: 'header',
                  locationName: 'ExpiresString'
                },
                WebsiteRedirectLocation: {
                  location: 'header',
                  locationName: 'x-amz-website-redirect-location'
                },
                ServerSideEncryption: {
                  location: 'header',
                  locationName: 'x-amz-server-side-encryption'
                },
                Metadata: {
                  shape: 'S1b',
                  location: 'headers',
                  locationName: 'x-amz-meta-'
                },
                SSECustomerAlgorithm: {
                  location: 'header',
                  locationName: 'x-amz-server-side-encryption-customer-algorithm'
                },
                SSECustomerKeyMD5: {
                  location: 'header',
                  locationName: 'x-amz-server-side-encryption-customer-key-MD5'
                },
                SSEKMSKeyId: {
                  shape: 'Sr',
                  location: 'header',
                  locationName: 'x-amz-server-side-encryption-aws-kms-key-id'
                },
                BucketKeyEnabled: {
                  location: 'header',
                  locationName: 'x-amz-server-side-encryption-bucket-key-enabled',
                  type: 'boolean'
                },
                StorageClass: {
                  location: 'header',
                  locationName: 'x-amz-storage-class'
                },
                RequestCharged: {
                  location: 'header',
                  locationName: 'x-amz-request-charged'
                },
                ReplicationStatus: {
                  location: 'header',
                  locationName: 'x-amz-replication-status'
                },
                PartsCount: {
                  location: 'header',
                  locationName: 'x-amz-mp-parts-count',
                  type: 'integer'
                },
                TagCount: {
                  location: 'header',
                  locationName: 'x-amz-tagging-count',
                  type: 'integer'
                },
                ObjectLockMode: {
                  location: 'header',
                  locationName: 'x-amz-object-lock-mode'
                },
                ObjectLockRetainUntilDate: {
                  shape: 'S1o',
                  location: 'header',
                  locationName: 'x-amz-object-lock-retain-until-date'
                },
                ObjectLockLegalHoldStatus: {
                  location: 'header',
                  locationName: 'x-amz-object-lock-legal-hold'
                }
              },
              payload: 'Body'
            },
            httpChecksum: {
              requestValidationModeMember: 'ChecksumMode',
              responseAlgorithms: ['CRC32', 'CRC32C', 'SHA256', 'SHA1']
            }
          },
          GetObjectAcl: {
            http: {
              method: 'GET',
              requestUri: '/{Bucket}/{Key+}?acl'
            },
            input: {
              type: 'structure',
              required: ['Bucket', 'Key'],
              members: {
                Bucket: {
                  contextParam: {
                    name: 'Bucket'
                  },
                  location: 'uri',
                  locationName: 'Bucket'
                },
                Key: {
                  contextParam: {
                    name: 'Key'
                  },
                  location: 'uri',
                  locationName: 'Key'
                },
                VersionId: {
                  location: 'querystring',
                  locationName: 'versionId'
                },
                RequestPayer: {
                  location: 'header',
                  locationName: 'x-amz-request-payer'
                },
                ExpectedBucketOwner: {
                  location: 'header',
                  locationName: 'x-amz-expected-bucket-owner'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Owner: {
                  shape: 'S3q'
                },
                Grants: {
                  shape: 'S3t',
                  locationName: 'AccessControlList'
                },
                RequestCharged: {
                  location: 'header',
                  locationName: 'x-amz-request-charged'
                }
              }
            }
          },
          GetObjectAttributes: {
            http: {
              method: 'GET',
              requestUri: '/{Bucket}/{Key+}?attributes'
            },
            input: {
              type: 'structure',
              required: ['Bucket', 'Key', 'ObjectAttributes'],
              members: {
                Bucket: {
                  contextParam: {
                    name: 'Bucket'
                  },
                  location: 'uri',
                  locationName: 'Bucket'
                },
                Key: {
                  location: 'uri',
                  locationName: 'Key'
                },
                VersionId: {
                  location: 'querystring',
                  locationName: 'versionId'
                },
                MaxParts: {
                  location: 'header',
                  locationName: 'x-amz-max-parts',
                  type: 'integer'
                },
                PartNumberMarker: {
                  location: 'header',
                  locationName: 'x-amz-part-number-marker',
                  type: 'integer'
                },
                SSECustomerAlgorithm: {
                  location: 'header',
                  locationName: 'x-amz-server-side-encryption-customer-algorithm'
                },
                SSECustomerKey: {
                  shape: 'Sk',
                  location: 'header',
                  locationName: 'x-amz-server-side-encryption-customer-key'
                },
                SSECustomerKeyMD5: {
                  location: 'header',
                  locationName: 'x-amz-server-side-encryption-customer-key-MD5'
                },
                RequestPayer: {
                  location: 'header',
                  locationName: 'x-amz-request-payer'
                },
                ExpectedBucketOwner: {
                  location: 'header',
                  locationName: 'x-amz-expected-bucket-owner'
                },
                ObjectAttributes: {
                  location: 'header',
                  locationName: 'x-amz-object-attributes',
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                DeleteMarker: {
                  location: 'header',
                  locationName: 'x-amz-delete-marker',
                  type: 'boolean'
                },
                LastModified: {
                  location: 'header',
                  locationName: 'Last-Modified',
                  type: 'timestamp'
                },
                VersionId: {
                  location: 'header',
                  locationName: 'x-amz-version-id'
                },
                RequestCharged: {
                  location: 'header',
                  locationName: 'x-amz-request-charged'
                },
                ETag: {},
                Checksum: {
                  type: 'structure',
                  members: {
                    ChecksumCRC32: {},
                    ChecksumCRC32C: {},
                    ChecksumSHA1: {},
                    ChecksumSHA256: {}
                  }
                },
                ObjectParts: {
                  type: 'structure',
                  members: {
                    TotalPartsCount: {
                      locationName: 'PartsCount',
                      type: 'integer'
                    },
                    PartNumberMarker: {
                      type: 'integer'
                    },
                    NextPartNumberMarker: {
                      type: 'integer'
                    },
                    MaxParts: {
                      type: 'integer'
                    },
                    IsTruncated: {
                      type: 'boolean'
                    },
                    Parts: {
                      locationName: 'Part',
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          PartNumber: {
                            type: 'integer'
                          },
                          Size: {
                            type: 'long'
                          },
                          ChecksumCRC32: {},
                          ChecksumCRC32C: {},
                          ChecksumSHA1: {},
                          ChecksumSHA256: {}
                        }
                      },
                      flattened: true
                    }
                  }
                },
                StorageClass: {},
                ObjectSize: {
                  type: 'long'
                }
              }
            }
          },
          GetObjectLegalHold: {
            http: {
              method: 'GET',
              requestUri: '/{Bucket}/{Key+}?legal-hold'
            },
            input: {
              type: 'structure',
              required: ['Bucket', 'Key'],
              members: {
                Bucket: {
                  contextParam: {
                    name: 'Bucket'
                  },
                  location: 'uri',
                  locationName: 'Bucket'
                },
                Key: {
                  location: 'uri',
                  locationName: 'Key'
                },
                VersionId: {
                  location: 'querystring',
                  locationName: 'versionId'
                },
                RequestPayer: {
                  location: 'header',
                  locationName: 'x-amz-request-payer'
                },
                ExpectedBucketOwner: {
                  location: 'header',
                  locationName: 'x-amz-expected-bucket-owner'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                LegalHold: {
                  shape: 'Sar',
                  locationName: 'LegalHold'
                }
              },
              payload: 'LegalHold'
            }
          },
          GetObjectLockConfiguration: {
            http: {
              method: 'GET',
              requestUri: '/{Bucket}?object-lock'
            },
            input: {
              type: 'structure',
              required: ['Bucket'],
              members: {
                Bucket: {
                  contextParam: {
                    name: 'Bucket'
                  },
                  location: 'uri',
                  locationName: 'Bucket'
                },
                ExpectedBucketOwner: {
                  location: 'header',
                  locationName: 'x-amz-expected-bucket-owner'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ObjectLockConfiguration: {
                  shape: 'Sau'
                }
              },
              payload: 'ObjectLockConfiguration'
            }
          },
          GetObjectRetention: {
            http: {
              method: 'GET',
              requestUri: '/{Bucket}/{Key+}?retention'
            },
            input: {
              type: 'structure',
              required: ['Bucket', 'Key'],
              members: {
                Bucket: {
                  contextParam: {
                    name: 'Bucket'
                  },
                  location: 'uri',
                  locationName: 'Bucket'
                },
                Key: {
                  location: 'uri',
                  locationName: 'Key'
                },
                VersionId: {
                  location: 'querystring',
                  locationName: 'versionId'
                },
                RequestPayer: {
                  location: 'header',
                  locationName: 'x-amz-request-payer'
                },
                ExpectedBucketOwner: {
                  location: 'header',
                  locationName: 'x-amz-expected-bucket-owner'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Retention: {
                  shape: 'Sb2',
                  locationName: 'Retention'
                }
              },
              payload: 'Retention'
            }
          },
          GetObjectTagging: {
            http: {
              method: 'GET',
              requestUri: '/{Bucket}/{Key+}?tagging'
            },
            input: {
              type: 'structure',
              required: ['Bucket', 'Key'],
              members: {
                Bucket: {
                  contextParam: {
                    name: 'Bucket'
                  },
                  location: 'uri',
                  locationName: 'Bucket'
                },
                Key: {
                  location: 'uri',
                  locationName: 'Key'
                },
                VersionId: {
                  location: 'querystring',
                  locationName: 'versionId'
                },
                ExpectedBucketOwner: {
                  location: 'header',
                  locationName: 'x-amz-expected-bucket-owner'
                },
                RequestPayer: {
                  location: 'header',
                  locationName: 'x-amz-request-payer'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['TagSet'],
              members: {
                VersionId: {
                  location: 'header',
                  locationName: 'x-amz-version-id'
                },
                TagSet: {
                  shape: 'S48'
                }
              }
            }
          },
          GetObjectTorrent: {
            http: {
              method: 'GET',
              requestUri: '/{Bucket}/{Key+}?torrent'
            },
            input: {
              type: 'structure',
              required: ['Bucket', 'Key'],
              members: {
                Bucket: {
                  contextParam: {
                    name: 'Bucket'
                  },
                  location: 'uri',
                  locationName: 'Bucket'
                },
                Key: {
                  location: 'uri',
                  locationName: 'Key'
                },
                RequestPayer: {
                  location: 'header',
                  locationName: 'x-amz-request-payer'
                },
                ExpectedBucketOwner: {
                  location: 'header',
                  locationName: 'x-amz-expected-bucket-owner'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Body: {
                  streaming: true,
                  type: 'blob'
                },
                RequestCharged: {
                  location: 'header',
                  locationName: 'x-amz-request-charged'
                }
              },
              payload: 'Body'
            }
          },
          GetPublicAccessBlock: {
            http: {
              method: 'GET',
              requestUri: '/{Bucket}?publicAccessBlock'
            },
            input: {
              type: 'structure',
              required: ['Bucket'],
              members: {
                Bucket: {
                  contextParam: {
                    name: 'Bucket'
                  },
                  location: 'uri',
                  locationName: 'Bucket'
                },
                ExpectedBucketOwner: {
                  location: 'header',
                  locationName: 'x-amz-expected-bucket-owner'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                PublicAccessBlockConfiguration: {
                  shape: 'Sb9'
                }
              },
              payload: 'PublicAccessBlockConfiguration'
            },
            staticContextParams: {
              UseS3ExpressControlEndpoint: {
                value: true
              }
            }
          },
          HeadBucket: {
            http: {
              method: 'HEAD',
              requestUri: '/{Bucket}'
            },
            input: {
              type: 'structure',
              required: ['Bucket'],
              members: {
                Bucket: {
                  contextParam: {
                    name: 'Bucket'
                  },
                  location: 'uri',
                  locationName: 'Bucket'
                },
                ExpectedBucketOwner: {
                  location: 'header',
                  locationName: 'x-amz-expected-bucket-owner'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                BucketLocationType: {
                  location: 'header',
                  locationName: 'x-amz-bucket-location-type'
                },
                BucketLocationName: {
                  location: 'header',
                  locationName: 'x-amz-bucket-location-name'
                },
                BucketRegion: {
                  location: 'header',
                  locationName: 'x-amz-bucket-region'
                },
                AccessPointAlias: {
                  location: 'header',
                  locationName: 'x-amz-access-point-alias',
                  type: 'boolean'
                }
              }
            }
          },
          HeadObject: {
            http: {
              method: 'HEAD',
              requestUri: '/{Bucket}/{Key+}'
            },
            input: {
              type: 'structure',
              required: ['Bucket', 'Key'],
              members: {
                Bucket: {
                  contextParam: {
                    name: 'Bucket'
                  },
                  location: 'uri',
                  locationName: 'Bucket'
                },
                IfMatch: {
                  location: 'header',
                  locationName: 'If-Match'
                },
                IfModifiedSince: {
                  location: 'header',
                  locationName: 'If-Modified-Since',
                  type: 'timestamp'
                },
                IfNoneMatch: {
                  location: 'header',
                  locationName: 'If-None-Match'
                },
                IfUnmodifiedSince: {
                  location: 'header',
                  locationName: 'If-Unmodified-Since',
                  type: 'timestamp'
                },
                Key: {
                  contextParam: {
                    name: 'Key'
                  },
                  location: 'uri',
                  locationName: 'Key'
                },
                Range: {
                  location: 'header',
                  locationName: 'Range'
                },
                VersionId: {
                  location: 'querystring',
                  locationName: 'versionId'
                },
                SSECustomerAlgorithm: {
                  location: 'header',
                  locationName: 'x-amz-server-side-encryption-customer-algorithm'
                },
                SSECustomerKey: {
                  shape: 'Sk',
                  location: 'header',
                  locationName: 'x-amz-server-side-encryption-customer-key'
                },
                SSECustomerKeyMD5: {
                  location: 'header',
                  locationName: 'x-amz-server-side-encryption-customer-key-MD5'
                },
                RequestPayer: {
                  location: 'header',
                  locationName: 'x-amz-request-payer'
                },
                PartNumber: {
                  location: 'querystring',
                  locationName: 'partNumber',
                  type: 'integer'
                },
                ExpectedBucketOwner: {
                  location: 'header',
                  locationName: 'x-amz-expected-bucket-owner'
                },
                ChecksumMode: {
                  location: 'header',
                  locationName: 'x-amz-checksum-mode'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                DeleteMarker: {
                  location: 'header',
                  locationName: 'x-amz-delete-marker',
                  type: 'boolean'
                },
                AcceptRanges: {
                  location: 'header',
                  locationName: 'accept-ranges'
                },
                Expiration: {
                  location: 'header',
                  locationName: 'x-amz-expiration'
                },
                Restore: {
                  location: 'header',
                  locationName: 'x-amz-restore'
                },
                ArchiveStatus: {
                  location: 'header',
                  locationName: 'x-amz-archive-status'
                },
                LastModified: {
                  location: 'header',
                  locationName: 'Last-Modified',
                  type: 'timestamp'
                },
                ContentLength: {
                  location: 'header',
                  locationName: 'Content-Length',
                  type: 'long'
                },
                ChecksumCRC32: {
                  location: 'header',
                  locationName: 'x-amz-checksum-crc32'
                },
                ChecksumCRC32C: {
                  location: 'header',
                  locationName: 'x-amz-checksum-crc32c'
                },
                ChecksumSHA1: {
                  location: 'header',
                  locationName: 'x-amz-checksum-sha1'
                },
                ChecksumSHA256: {
                  location: 'header',
                  locationName: 'x-amz-checksum-sha256'
                },
                ETag: {
                  location: 'header',
                  locationName: 'ETag'
                },
                MissingMeta: {
                  location: 'header',
                  locationName: 'x-amz-missing-meta',
                  type: 'integer'
                },
                VersionId: {
                  location: 'header',
                  locationName: 'x-amz-version-id'
                },
                CacheControl: {
                  location: 'header',
                  locationName: 'Cache-Control'
                },
                ContentDisposition: {
                  location: 'header',
                  locationName: 'Content-Disposition'
                },
                ContentEncoding: {
                  location: 'header',
                  locationName: 'Content-Encoding'
                },
                ContentLanguage: {
                  location: 'header',
                  locationName: 'Content-Language'
                },
                ContentType: {
                  location: 'header',
                  locationName: 'Content-Type'
                },
                Expires: {
                  location: 'header',
                  locationName: 'Expires',
                  deprecated: true,
                  type: 'timestamp'
                },
                ExpiresString: {
                  location: 'header',
                  locationName: 'ExpiresString'
                },
                WebsiteRedirectLocation: {
                  location: 'header',
                  locationName: 'x-amz-website-redirect-location'
                },
                ServerSideEncryption: {
                  location: 'header',
                  locationName: 'x-amz-server-side-encryption'
                },
                Metadata: {
                  shape: 'S1b',
                  location: 'headers',
                  locationName: 'x-amz-meta-'
                },
                SSECustomerAlgorithm: {
                  location: 'header',
                  locationName: 'x-amz-server-side-encryption-customer-algorithm'
                },
                SSECustomerKeyMD5: {
                  location: 'header',
                  locationName: 'x-amz-server-side-encryption-customer-key-MD5'
                },
                SSEKMSKeyId: {
                  shape: 'Sr',
                  location: 'header',
                  locationName: 'x-amz-server-side-encryption-aws-kms-key-id'
                },
                BucketKeyEnabled: {
                  location: 'header',
                  locationName: 'x-amz-server-side-encryption-bucket-key-enabled',
                  type: 'boolean'
                },
                StorageClass: {
                  location: 'header',
                  locationName: 'x-amz-storage-class'
                },
                RequestCharged: {
                  location: 'header',
                  locationName: 'x-amz-request-charged'
                },
                ReplicationStatus: {
                  location: 'header',
                  locationName: 'x-amz-replication-status'
                },
                PartsCount: {
                  location: 'header',
                  locationName: 'x-amz-mp-parts-count',
                  type: 'integer'
                },
                ObjectLockMode: {
                  location: 'header',
                  locationName: 'x-amz-object-lock-mode'
                },
                ObjectLockRetainUntilDate: {
                  shape: 'S1o',
                  location: 'header',
                  locationName: 'x-amz-object-lock-retain-until-date'
                },
                ObjectLockLegalHoldStatus: {
                  location: 'header',
                  locationName: 'x-amz-object-lock-legal-hold'
                }
              }
            }
          },
          ListBucketAnalyticsConfigurations: {
            http: {
              method: 'GET',
              requestUri: '/{Bucket}?analytics'
            },
            input: {
              type: 'structure',
              required: ['Bucket'],
              members: {
                Bucket: {
                  contextParam: {
                    name: 'Bucket'
                  },
                  location: 'uri',
                  locationName: 'Bucket'
                },
                ContinuationToken: {
                  location: 'querystring',
                  locationName: 'continuation-token'
                },
                ExpectedBucketOwner: {
                  location: 'header',
                  locationName: 'x-amz-expected-bucket-owner'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                IsTruncated: {
                  type: 'boolean'
                },
                ContinuationToken: {},
                NextContinuationToken: {},
                AnalyticsConfigurationList: {
                  locationName: 'AnalyticsConfiguration',
                  type: 'list',
                  member: {
                    shape: 'S42'
                  },
                  flattened: true
                }
              }
            },
            staticContextParams: {
              UseS3ExpressControlEndpoint: {
                value: true
              }
            }
          },
          ListBucketIntelligentTieringConfigurations: {
            http: {
              method: 'GET',
              requestUri: '/{Bucket}?intelligent-tiering'
            },
            input: {
              type: 'structure',
              required: ['Bucket'],
              members: {
                Bucket: {
                  contextParam: {
                    name: 'Bucket'
                  },
                  location: 'uri',
                  locationName: 'Bucket'
                },
                ContinuationToken: {
                  location: 'querystring',
                  locationName: 'continuation-token'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                IsTruncated: {
                  type: 'boolean'
                },
                ContinuationToken: {},
                NextContinuationToken: {},
                IntelligentTieringConfigurationList: {
                  locationName: 'IntelligentTieringConfiguration',
                  type: 'list',
                  member: {
                    shape: 'S50'
                  },
                  flattened: true
                }
              }
            },
            staticContextParams: {
              UseS3ExpressControlEndpoint: {
                value: true
              }
            }
          },
          ListBucketInventoryConfigurations: {
            http: {
              method: 'GET',
              requestUri: '/{Bucket}?inventory'
            },
            input: {
              type: 'structure',
              required: ['Bucket'],
              members: {
                Bucket: {
                  contextParam: {
                    name: 'Bucket'
                  },
                  location: 'uri',
                  locationName: 'Bucket'
                },
                ContinuationToken: {
                  location: 'querystring',
                  locationName: 'continuation-token'
                },
                ExpectedBucketOwner: {
                  location: 'header',
                  locationName: 'x-amz-expected-bucket-owner'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ContinuationToken: {},
                InventoryConfigurationList: {
                  locationName: 'InventoryConfiguration',
                  type: 'list',
                  member: {
                    shape: 'S5a'
                  },
                  flattened: true
                },
                IsTruncated: {
                  type: 'boolean'
                },
                NextContinuationToken: {}
              }
            },
            staticContextParams: {
              UseS3ExpressControlEndpoint: {
                value: true
              }
            }
          },
          ListBucketMetricsConfigurations: {
            http: {
              method: 'GET',
              requestUri: '/{Bucket}?metrics'
            },
            input: {
              type: 'structure',
              required: ['Bucket'],
              members: {
                Bucket: {
                  contextParam: {
                    name: 'Bucket'
                  },
                  location: 'uri',
                  locationName: 'Bucket'
                },
                ContinuationToken: {
                  location: 'querystring',
                  locationName: 'continuation-token'
                },
                ExpectedBucketOwner: {
                  location: 'header',
                  locationName: 'x-amz-expected-bucket-owner'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                IsTruncated: {
                  type: 'boolean'
                },
                ContinuationToken: {},
                NextContinuationToken: {},
                MetricsConfigurationList: {
                  locationName: 'MetricsConfiguration',
                  type: 'list',
                  member: {
                    shape: 'S6u'
                  },
                  flattened: true
                }
              }
            }
          },
          ListBuckets: {
            http: {
              method: 'GET'
            },
            output: {
              type: 'structure',
              members: {
                Buckets: {
                  shape: 'Sby'
                },
                Owner: {
                  shape: 'S3q'
                }
              }
            },
            alias: 'GetService'
          },
          ListDirectoryBuckets: {
            http: {
              method: 'GET'
            },
            input: {
              type: 'structure',
              members: {
                ContinuationToken: {
                  location: 'querystring',
                  locationName: 'continuation-token'
                },
                MaxDirectoryBuckets: {
                  location: 'querystring',
                  locationName: 'max-directory-buckets',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Buckets: {
                  shape: 'Sby'
                },
                ContinuationToken: {}
              }
            },
            staticContextParams: {
              UseS3ExpressControlEndpoint: {
                value: true
              }
            }
          },
          ListMultipartUploads: {
            http: {
              method: 'GET',
              requestUri: '/{Bucket}?uploads'
            },
            input: {
              type: 'structure',
              required: ['Bucket'],
              members: {
                Bucket: {
                  contextParam: {
                    name: 'Bucket'
                  },
                  location: 'uri',
                  locationName: 'Bucket'
                },
                Delimiter: {
                  location: 'querystring',
                  locationName: 'delimiter'
                },
                EncodingType: {
                  location: 'querystring',
                  locationName: 'encoding-type'
                },
                KeyMarker: {
                  location: 'querystring',
                  locationName: 'key-marker'
                },
                MaxUploads: {
                  location: 'querystring',
                  locationName: 'max-uploads',
                  type: 'integer'
                },
                Prefix: {
                  contextParam: {
                    name: 'Prefix'
                  },
                  location: 'querystring',
                  locationName: 'prefix'
                },
                UploadIdMarker: {
                  location: 'querystring',
                  locationName: 'upload-id-marker'
                },
                ExpectedBucketOwner: {
                  location: 'header',
                  locationName: 'x-amz-expected-bucket-owner'
                },
                RequestPayer: {
                  location: 'header',
                  locationName: 'x-amz-request-payer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Bucket: {},
                KeyMarker: {},
                UploadIdMarker: {},
                NextKeyMarker: {},
                Prefix: {},
                Delimiter: {},
                NextUploadIdMarker: {},
                MaxUploads: {
                  type: 'integer'
                },
                IsTruncated: {
                  type: 'boolean'
                },
                Uploads: {
                  locationName: 'Upload',
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      UploadId: {},
                      Key: {},
                      Initiated: {
                        type: 'timestamp'
                      },
                      StorageClass: {},
                      Owner: {
                        shape: 'S3q'
                      },
                      Initiator: {
                        shape: 'Sch'
                      },
                      ChecksumAlgorithm: {}
                    }
                  },
                  flattened: true
                },
                CommonPrefixes: {
                  shape: 'Sci'
                },
                EncodingType: {},
                RequestCharged: {
                  location: 'header',
                  locationName: 'x-amz-request-charged'
                }
              }
            }
          },
          ListObjectVersions: {
            http: {
              method: 'GET',
              requestUri: '/{Bucket}?versions'
            },
            input: {
              type: 'structure',
              required: ['Bucket'],
              members: {
                Bucket: {
                  contextParam: {
                    name: 'Bucket'
                  },
                  location: 'uri',
                  locationName: 'Bucket'
                },
                Delimiter: {
                  location: 'querystring',
                  locationName: 'delimiter'
                },
                EncodingType: {
                  location: 'querystring',
                  locationName: 'encoding-type'
                },
                KeyMarker: {
                  location: 'querystring',
                  locationName: 'key-marker'
                },
                MaxKeys: {
                  location: 'querystring',
                  locationName: 'max-keys',
                  type: 'integer'
                },
                Prefix: {
                  contextParam: {
                    name: 'Prefix'
                  },
                  location: 'querystring',
                  locationName: 'prefix'
                },
                VersionIdMarker: {
                  location: 'querystring',
                  locationName: 'version-id-marker'
                },
                ExpectedBucketOwner: {
                  location: 'header',
                  locationName: 'x-amz-expected-bucket-owner'
                },
                RequestPayer: {
                  location: 'header',
                  locationName: 'x-amz-request-payer'
                },
                OptionalObjectAttributes: {
                  shape: 'Scn',
                  location: 'header',
                  locationName: 'x-amz-optional-object-attributes'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                IsTruncated: {
                  type: 'boolean'
                },
                KeyMarker: {},
                VersionIdMarker: {},
                NextKeyMarker: {},
                NextVersionIdMarker: {},
                Versions: {
                  locationName: 'Version',
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ETag: {},
                      ChecksumAlgorithm: {
                        shape: 'Sct'
                      },
                      Size: {
                        type: 'long'
                      },
                      StorageClass: {},
                      Key: {},
                      VersionId: {},
                      IsLatest: {
                        type: 'boolean'
                      },
                      LastModified: {
                        type: 'timestamp'
                      },
                      Owner: {
                        shape: 'S3q'
                      },
                      RestoreStatus: {
                        shape: 'Scw'
                      }
                    }
                  },
                  flattened: true
                },
                DeleteMarkers: {
                  locationName: 'DeleteMarker',
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Owner: {
                        shape: 'S3q'
                      },
                      Key: {},
                      VersionId: {},
                      IsLatest: {
                        type: 'boolean'
                      },
                      LastModified: {
                        type: 'timestamp'
                      }
                    }
                  },
                  flattened: true
                },
                Name: {},
                Prefix: {},
                Delimiter: {},
                MaxKeys: {
                  type: 'integer'
                },
                CommonPrefixes: {
                  shape: 'Sci'
                },
                EncodingType: {},
                RequestCharged: {
                  location: 'header',
                  locationName: 'x-amz-request-charged'
                }
              }
            },
            alias: 'GetBucketObjectVersions'
          },
          ListObjects: {
            http: {
              method: 'GET',
              requestUri: '/{Bucket}'
            },
            input: {
              type: 'structure',
              required: ['Bucket'],
              members: {
                Bucket: {
                  contextParam: {
                    name: 'Bucket'
                  },
                  location: 'uri',
                  locationName: 'Bucket'
                },
                Delimiter: {
                  location: 'querystring',
                  locationName: 'delimiter'
                },
                EncodingType: {
                  location: 'querystring',
                  locationName: 'encoding-type'
                },
                Marker: {
                  location: 'querystring',
                  locationName: 'marker'
                },
                MaxKeys: {
                  location: 'querystring',
                  locationName: 'max-keys',
                  type: 'integer'
                },
                Prefix: {
                  contextParam: {
                    name: 'Prefix'
                  },
                  location: 'querystring',
                  locationName: 'prefix'
                },
                RequestPayer: {
                  location: 'header',
                  locationName: 'x-amz-request-payer'
                },
                ExpectedBucketOwner: {
                  location: 'header',
                  locationName: 'x-amz-expected-bucket-owner'
                },
                OptionalObjectAttributes: {
                  shape: 'Scn',
                  location: 'header',
                  locationName: 'x-amz-optional-object-attributes'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                IsTruncated: {
                  type: 'boolean'
                },
                Marker: {},
                NextMarker: {},
                Contents: {
                  shape: 'Sd5'
                },
                Name: {},
                Prefix: {},
                Delimiter: {},
                MaxKeys: {
                  type: 'integer'
                },
                CommonPrefixes: {
                  shape: 'Sci'
                },
                EncodingType: {},
                RequestCharged: {
                  location: 'header',
                  locationName: 'x-amz-request-charged'
                }
              }
            },
            alias: 'GetBucket'
          },
          ListObjectsV2: {
            http: {
              method: 'GET',
              requestUri: '/{Bucket}?list-type=2'
            },
            input: {
              type: 'structure',
              required: ['Bucket'],
              members: {
                Bucket: {
                  contextParam: {
                    name: 'Bucket'
                  },
                  location: 'uri',
                  locationName: 'Bucket'
                },
                Delimiter: {
                  location: 'querystring',
                  locationName: 'delimiter'
                },
                EncodingType: {
                  location: 'querystring',
                  locationName: 'encoding-type'
                },
                MaxKeys: {
                  location: 'querystring',
                  locationName: 'max-keys',
                  type: 'integer'
                },
                Prefix: {
                  contextParam: {
                    name: 'Prefix'
                  },
                  location: 'querystring',
                  locationName: 'prefix'
                },
                ContinuationToken: {
                  location: 'querystring',
                  locationName: 'continuation-token'
                },
                FetchOwner: {
                  location: 'querystring',
                  locationName: 'fetch-owner',
                  type: 'boolean'
                },
                StartAfter: {
                  location: 'querystring',
                  locationName: 'start-after'
                },
                RequestPayer: {
                  location: 'header',
                  locationName: 'x-amz-request-payer'
                },
                ExpectedBucketOwner: {
                  location: 'header',
                  locationName: 'x-amz-expected-bucket-owner'
                },
                OptionalObjectAttributes: {
                  shape: 'Scn',
                  location: 'header',
                  locationName: 'x-amz-optional-object-attributes'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                IsTruncated: {
                  type: 'boolean'
                },
                Contents: {
                  shape: 'Sd5'
                },
                Name: {},
                Prefix: {},
                Delimiter: {},
                MaxKeys: {
                  type: 'integer'
                },
                CommonPrefixes: {
                  shape: 'Sci'
                },
                EncodingType: {},
                KeyCount: {
                  type: 'integer'
                },
                ContinuationToken: {},
                NextContinuationToken: {},
                StartAfter: {},
                RequestCharged: {
                  location: 'header',
                  locationName: 'x-amz-request-charged'
                }
              }
            }
          },
          ListParts: {
            http: {
              method: 'GET',
              requestUri: '/{Bucket}/{Key+}'
            },
            input: {
              type: 'structure',
              required: ['Bucket', 'Key', 'UploadId'],
              members: {
                Bucket: {
                  contextParam: {
                    name: 'Bucket'
                  },
                  location: 'uri',
                  locationName: 'Bucket'
                },
                Key: {
                  contextParam: {
                    name: 'Key'
                  },
                  location: 'uri',
                  locationName: 'Key'
                },
                MaxParts: {
                  location: 'querystring',
                  locationName: 'max-parts',
                  type: 'integer'
                },
                PartNumberMarker: {
                  location: 'querystring',
                  locationName: 'part-number-marker',
                  type: 'integer'
                },
                UploadId: {
                  location: 'querystring',
                  locationName: 'uploadId'
                },
                RequestPayer: {
                  location: 'header',
                  locationName: 'x-amz-request-payer'
                },
                ExpectedBucketOwner: {
                  location: 'header',
                  locationName: 'x-amz-expected-bucket-owner'
                },
                SSECustomerAlgorithm: {
                  location: 'header',
                  locationName: 'x-amz-server-side-encryption-customer-algorithm'
                },
                SSECustomerKey: {
                  shape: 'Sk',
                  location: 'header',
                  locationName: 'x-amz-server-side-encryption-customer-key'
                },
                SSECustomerKeyMD5: {
                  location: 'header',
                  locationName: 'x-amz-server-side-encryption-customer-key-MD5'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AbortDate: {
                  location: 'header',
                  locationName: 'x-amz-abort-date',
                  type: 'timestamp'
                },
                AbortRuleId: {
                  location: 'header',
                  locationName: 'x-amz-abort-rule-id'
                },
                Bucket: {},
                Key: {},
                UploadId: {},
                PartNumberMarker: {
                  type: 'integer'
                },
                NextPartNumberMarker: {
                  type: 'integer'
                },
                MaxParts: {
                  type: 'integer'
                },
                IsTruncated: {
                  type: 'boolean'
                },
                Parts: {
                  locationName: 'Part',
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      PartNumber: {
                        type: 'integer'
                      },
                      LastModified: {
                        type: 'timestamp'
                      },
                      ETag: {},
                      Size: {
                        type: 'long'
                      },
                      ChecksumCRC32: {},
                      ChecksumCRC32C: {},
                      ChecksumSHA1: {},
                      ChecksumSHA256: {}
                    }
                  },
                  flattened: true
                },
                Initiator: {
                  shape: 'Sch'
                },
                Owner: {
                  shape: 'S3q'
                },
                StorageClass: {},
                RequestCharged: {
                  location: 'header',
                  locationName: 'x-amz-request-charged'
                },
                ChecksumAlgorithm: {}
              }
            }
          },
          PutBucketAccelerateConfiguration: {
            http: {
              method: 'PUT',
              requestUri: '/{Bucket}?accelerate'
            },
            input: {
              type: 'structure',
              required: ['Bucket', 'AccelerateConfiguration'],
              members: {
                Bucket: {
                  contextParam: {
                    name: 'Bucket'
                  },
                  location: 'uri',
                  locationName: 'Bucket'
                },
                AccelerateConfiguration: {
                  locationName: 'AccelerateConfiguration',
                  xmlNamespace: {
                    uri: 'http://s3.amazonaws.com/doc/2006-03-01/'
                  },
                  type: 'structure',
                  members: {
                    Status: {}
                  }
                },
                ExpectedBucketOwner: {
                  location: 'header',
                  locationName: 'x-amz-expected-bucket-owner'
                },
                ChecksumAlgorithm: {
                  location: 'header',
                  locationName: 'x-amz-sdk-checksum-algorithm'
                }
              },
              payload: 'AccelerateConfiguration'
            },
            httpChecksum: {
              requestAlgorithmMember: 'ChecksumAlgorithm',
              requestChecksumRequired: false
            },
            staticContextParams: {
              UseS3ExpressControlEndpoint: {
                value: true
              }
            }
          },
          PutBucketAcl: {
            http: {
              method: 'PUT',
              requestUri: '/{Bucket}?acl'
            },
            input: {
              type: 'structure',
              required: ['Bucket'],
              members: {
                ACL: {
                  location: 'header',
                  locationName: 'x-amz-acl'
                },
                AccessControlPolicy: {
                  shape: 'Sdk',
                  locationName: 'AccessControlPolicy',
                  xmlNamespace: {
                    uri: 'http://s3.amazonaws.com/doc/2006-03-01/'
                  }
                },
                Bucket: {
                  contextParam: {
                    name: 'Bucket'
                  },
                  location: 'uri',
                  locationName: 'Bucket'
                },
                ContentMD5: {
                  location: 'header',
                  locationName: 'Content-MD5'
                },
                ChecksumAlgorithm: {
                  location: 'header',
                  locationName: 'x-amz-sdk-checksum-algorithm'
                },
                GrantFullControl: {
                  location: 'header',
                  locationName: 'x-amz-grant-full-control'
                },
                GrantRead: {
                  location: 'header',
                  locationName: 'x-amz-grant-read'
                },
                GrantReadACP: {
                  location: 'header',
                  locationName: 'x-amz-grant-read-acp'
                },
                GrantWrite: {
                  location: 'header',
                  locationName: 'x-amz-grant-write'
                },
                GrantWriteACP: {
                  location: 'header',
                  locationName: 'x-amz-grant-write-acp'
                },
                ExpectedBucketOwner: {
                  location: 'header',
                  locationName: 'x-amz-expected-bucket-owner'
                }
              },
              payload: 'AccessControlPolicy'
            },
            httpChecksum: {
              requestAlgorithmMember: 'ChecksumAlgorithm',
              requestChecksumRequired: true
            },
            staticContextParams: {
              UseS3ExpressControlEndpoint: {
                value: true
              }
            }
          },
          PutBucketAnalyticsConfiguration: {
            http: {
              method: 'PUT',
              requestUri: '/{Bucket}?analytics'
            },
            input: {
              type: 'structure',
              required: ['Bucket', 'Id', 'AnalyticsConfiguration'],
              members: {
                Bucket: {
                  contextParam: {
                    name: 'Bucket'
                  },
                  location: 'uri',
                  locationName: 'Bucket'
                },
                Id: {
                  location: 'querystring',
                  locationName: 'id'
                },
                AnalyticsConfiguration: {
                  shape: 'S42',
                  locationName: 'AnalyticsConfiguration',
                  xmlNamespace: {
                    uri: 'http://s3.amazonaws.com/doc/2006-03-01/'
                  }
                },
                ExpectedBucketOwner: {
                  location: 'header',
                  locationName: 'x-amz-expected-bucket-owner'
                }
              },
              payload: 'AnalyticsConfiguration'
            },
            staticContextParams: {
              UseS3ExpressControlEndpoint: {
                value: true
              }
            }
          },
          PutBucketCors: {
            http: {
              method: 'PUT',
              requestUri: '/{Bucket}?cors'
            },
            input: {
              type: 'structure',
              required: ['Bucket', 'CORSConfiguration'],
              members: {
                Bucket: {
                  contextParam: {
                    name: 'Bucket'
                  },
                  location: 'uri',
                  locationName: 'Bucket'
                },
                CORSConfiguration: {
                  locationName: 'CORSConfiguration',
                  xmlNamespace: {
                    uri: 'http://s3.amazonaws.com/doc/2006-03-01/'
                  },
                  type: 'structure',
                  required: ['CORSRules'],
                  members: {
                    CORSRules: {
                      shape: 'S4h',
                      locationName: 'CORSRule'
                    }
                  }
                },
                ContentMD5: {
                  location: 'header',
                  locationName: 'Content-MD5'
                },
                ChecksumAlgorithm: {
                  location: 'header',
                  locationName: 'x-amz-sdk-checksum-algorithm'
                },
                ExpectedBucketOwner: {
                  location: 'header',
                  locationName: 'x-amz-expected-bucket-owner'
                }
              },
              payload: 'CORSConfiguration'
            },
            httpChecksum: {
              requestAlgorithmMember: 'ChecksumAlgorithm',
              requestChecksumRequired: true
            },
            staticContextParams: {
              UseS3ExpressControlEndpoint: {
                value: true
              }
            }
          },
          PutBucketEncryption: {
            http: {
              method: 'PUT',
              requestUri: '/{Bucket}?encryption'
            },
            input: {
              type: 'structure',
              required: ['Bucket', 'ServerSideEncryptionConfiguration'],
              members: {
                Bucket: {
                  contextParam: {
                    name: 'Bucket'
                  },
                  location: 'uri',
                  locationName: 'Bucket'
                },
                ContentMD5: {
                  location: 'header',
                  locationName: 'Content-MD5'
                },
                ChecksumAlgorithm: {
                  location: 'header',
                  locationName: 'x-amz-sdk-checksum-algorithm'
                },
                ServerSideEncryptionConfiguration: {
                  shape: 'S4u',
                  locationName: 'ServerSideEncryptionConfiguration',
                  xmlNamespace: {
                    uri: 'http://s3.amazonaws.com/doc/2006-03-01/'
                  }
                },
                ExpectedBucketOwner: {
                  location: 'header',
                  locationName: 'x-amz-expected-bucket-owner'
                }
              },
              payload: 'ServerSideEncryptionConfiguration'
            },
            httpChecksum: {
              requestAlgorithmMember: 'ChecksumAlgorithm',
              requestChecksumRequired: true
            },
            staticContextParams: {
              UseS3ExpressControlEndpoint: {
                value: true
              }
            }
          },
          PutBucketIntelligentTieringConfiguration: {
            http: {
              method: 'PUT',
              requestUri: '/{Bucket}?intelligent-tiering'
            },
            input: {
              type: 'structure',
              required: ['Bucket', 'Id', 'IntelligentTieringConfiguration'],
              members: {
                Bucket: {
                  contextParam: {
                    name: 'Bucket'
                  },
                  location: 'uri',
                  locationName: 'Bucket'
                },
                Id: {
                  location: 'querystring',
                  locationName: 'id'
                },
                IntelligentTieringConfiguration: {
                  shape: 'S50',
                  locationName: 'IntelligentTieringConfiguration',
                  xmlNamespace: {
                    uri: 'http://s3.amazonaws.com/doc/2006-03-01/'
                  }
                }
              },
              payload: 'IntelligentTieringConfiguration'
            },
            staticContextParams: {
              UseS3ExpressControlEndpoint: {
                value: true
              }
            }
          },
          PutBucketInventoryConfiguration: {
            http: {
              method: 'PUT',
              requestUri: '/{Bucket}?inventory'
            },
            input: {
              type: 'structure',
              required: ['Bucket', 'Id', 'InventoryConfiguration'],
              members: {
                Bucket: {
                  contextParam: {
                    name: 'Bucket'
                  },
                  location: 'uri',
                  locationName: 'Bucket'
                },
                Id: {
                  location: 'querystring',
                  locationName: 'id'
                },
                InventoryConfiguration: {
                  shape: 'S5a',
                  locationName: 'InventoryConfiguration',
                  xmlNamespace: {
                    uri: 'http://s3.amazonaws.com/doc/2006-03-01/'
                  }
                },
                ExpectedBucketOwner: {
                  location: 'header',
                  locationName: 'x-amz-expected-bucket-owner'
                }
              },
              payload: 'InventoryConfiguration'
            },
            staticContextParams: {
              UseS3ExpressControlEndpoint: {
                value: true
              }
            }
          },
          PutBucketLifecycle: {
            http: {
              method: 'PUT',
              requestUri: '/{Bucket}?lifecycle'
            },
            input: {
              type: 'structure',
              required: ['Bucket'],
              members: {
                Bucket: {
                  contextParam: {
                    name: 'Bucket'
                  },
                  location: 'uri',
                  locationName: 'Bucket'
                },
                ContentMD5: {
                  location: 'header',
                  locationName: 'Content-MD5'
                },
                ChecksumAlgorithm: {
                  location: 'header',
                  locationName: 'x-amz-sdk-checksum-algorithm'
                },
                LifecycleConfiguration: {
                  locationName: 'LifecycleConfiguration',
                  xmlNamespace: {
                    uri: 'http://s3.amazonaws.com/doc/2006-03-01/'
                  },
                  type: 'structure',
                  required: ['Rules'],
                  members: {
                    Rules: {
                      shape: 'S5q',
                      locationName: 'Rule'
                    }
                  }
                },
                ExpectedBucketOwner: {
                  location: 'header',
                  locationName: 'x-amz-expected-bucket-owner'
                }
              },
              payload: 'LifecycleConfiguration'
            },
            deprecated: true,
            httpChecksum: {
              requestAlgorithmMember: 'ChecksumAlgorithm',
              requestChecksumRequired: true
            },
            staticContextParams: {
              UseS3ExpressControlEndpoint: {
                value: true
              }
            }
          },
          PutBucketLifecycleConfiguration: {
            http: {
              method: 'PUT',
              requestUri: '/{Bucket}?lifecycle'
            },
            input: {
              type: 'structure',
              required: ['Bucket'],
              members: {
                Bucket: {
                  contextParam: {
                    name: 'Bucket'
                  },
                  location: 'uri',
                  locationName: 'Bucket'
                },
                ChecksumAlgorithm: {
                  location: 'header',
                  locationName: 'x-amz-sdk-checksum-algorithm'
                },
                LifecycleConfiguration: {
                  locationName: 'LifecycleConfiguration',
                  xmlNamespace: {
                    uri: 'http://s3.amazonaws.com/doc/2006-03-01/'
                  },
                  type: 'structure',
                  required: ['Rules'],
                  members: {
                    Rules: {
                      shape: 'S66',
                      locationName: 'Rule'
                    }
                  }
                },
                ExpectedBucketOwner: {
                  location: 'header',
                  locationName: 'x-amz-expected-bucket-owner'
                }
              },
              payload: 'LifecycleConfiguration'
            },
            httpChecksum: {
              requestAlgorithmMember: 'ChecksumAlgorithm',
              requestChecksumRequired: true
            },
            staticContextParams: {
              UseS3ExpressControlEndpoint: {
                value: true
              }
            }
          },
          PutBucketLogging: {
            http: {
              method: 'PUT',
              requestUri: '/{Bucket}?logging'
            },
            input: {
              type: 'structure',
              required: ['Bucket', 'BucketLoggingStatus'],
              members: {
                Bucket: {
                  contextParam: {
                    name: 'Bucket'
                  },
                  location: 'uri',
                  locationName: 'Bucket'
                },
                BucketLoggingStatus: {
                  locationName: 'BucketLoggingStatus',
                  xmlNamespace: {
                    uri: 'http://s3.amazonaws.com/doc/2006-03-01/'
                  },
                  type: 'structure',
                  members: {
                    LoggingEnabled: {
                      shape: 'S6i'
                    }
                  }
                },
                ContentMD5: {
                  location: 'header',
                  locationName: 'Content-MD5'
                },
                ChecksumAlgorithm: {
                  location: 'header',
                  locationName: 'x-amz-sdk-checksum-algorithm'
                },
                ExpectedBucketOwner: {
                  location: 'header',
                  locationName: 'x-amz-expected-bucket-owner'
                }
              },
              payload: 'BucketLoggingStatus'
            },
            httpChecksum: {
              requestAlgorithmMember: 'ChecksumAlgorithm',
              requestChecksumRequired: true
            },
            staticContextParams: {
              UseS3ExpressControlEndpoint: {
                value: true
              }
            }
          },
          PutBucketMetricsConfiguration: {
            http: {
              method: 'PUT',
              requestUri: '/{Bucket}?metrics'
            },
            input: {
              type: 'structure',
              required: ['Bucket', 'Id', 'MetricsConfiguration'],
              members: {
                Bucket: {
                  contextParam: {
                    name: 'Bucket'
                  },
                  location: 'uri',
                  locationName: 'Bucket'
                },
                Id: {
                  location: 'querystring',
                  locationName: 'id'
                },
                MetricsConfiguration: {
                  shape: 'S6u',
                  locationName: 'MetricsConfiguration',
                  xmlNamespace: {
                    uri: 'http://s3.amazonaws.com/doc/2006-03-01/'
                  }
                },
                ExpectedBucketOwner: {
                  location: 'header',
                  locationName: 'x-amz-expected-bucket-owner'
                }
              },
              payload: 'MetricsConfiguration'
            },
            staticContextParams: {
              UseS3ExpressControlEndpoint: {
                value: true
              }
            }
          },
          PutBucketNotification: {
            http: {
              method: 'PUT',
              requestUri: '/{Bucket}?notification'
            },
            input: {
              type: 'structure',
              required: ['Bucket', 'NotificationConfiguration'],
              members: {
                Bucket: {
                  contextParam: {
                    name: 'Bucket'
                  },
                  location: 'uri',
                  locationName: 'Bucket'
                },
                ContentMD5: {
                  location: 'header',
                  locationName: 'Content-MD5'
                },
                ChecksumAlgorithm: {
                  location: 'header',
                  locationName: 'x-amz-sdk-checksum-algorithm'
                },
                NotificationConfiguration: {
                  shape: 'S6z',
                  locationName: 'NotificationConfiguration',
                  xmlNamespace: {
                    uri: 'http://s3.amazonaws.com/doc/2006-03-01/'
                  }
                },
                ExpectedBucketOwner: {
                  location: 'header',
                  locationName: 'x-amz-expected-bucket-owner'
                }
              },
              payload: 'NotificationConfiguration'
            },
            deprecated: true,
            httpChecksum: {
              requestAlgorithmMember: 'ChecksumAlgorithm',
              requestChecksumRequired: true
            },
            staticContextParams: {
              UseS3ExpressControlEndpoint: {
                value: true
              }
            }
          },
          PutBucketNotificationConfiguration: {
            http: {
              method: 'PUT',
              requestUri: '/{Bucket}?notification'
            },
            input: {
              type: 'structure',
              required: ['Bucket', 'NotificationConfiguration'],
              members: {
                Bucket: {
                  contextParam: {
                    name: 'Bucket'
                  },
                  location: 'uri',
                  locationName: 'Bucket'
                },
                NotificationConfiguration: {
                  shape: 'S7a',
                  locationName: 'NotificationConfiguration',
                  xmlNamespace: {
                    uri: 'http://s3.amazonaws.com/doc/2006-03-01/'
                  }
                },
                ExpectedBucketOwner: {
                  location: 'header',
                  locationName: 'x-amz-expected-bucket-owner'
                },
                SkipDestinationValidation: {
                  location: 'header',
                  locationName: 'x-amz-skip-destination-validation',
                  type: 'boolean'
                }
              },
              payload: 'NotificationConfiguration'
            },
            staticContextParams: {
              UseS3ExpressControlEndpoint: {
                value: true
              }
            }
          },
          PutBucketOwnershipControls: {
            http: {
              method: 'PUT',
              requestUri: '/{Bucket}?ownershipControls'
            },
            input: {
              type: 'structure',
              required: ['Bucket', 'OwnershipControls'],
              members: {
                Bucket: {
                  contextParam: {
                    name: 'Bucket'
                  },
                  location: 'uri',
                  locationName: 'Bucket'
                },
                ContentMD5: {
                  location: 'header',
                  locationName: 'Content-MD5'
                },
                ExpectedBucketOwner: {
                  location: 'header',
                  locationName: 'x-amz-expected-bucket-owner'
                },
                OwnershipControls: {
                  shape: 'S7r',
                  locationName: 'OwnershipControls',
                  xmlNamespace: {
                    uri: 'http://s3.amazonaws.com/doc/2006-03-01/'
                  }
                }
              },
              payload: 'OwnershipControls'
            },
            httpChecksum: {
              requestChecksumRequired: true
            },
            staticContextParams: {
              UseS3ExpressControlEndpoint: {
                value: true
              }
            }
          },
          PutBucketPolicy: {
            http: {
              method: 'PUT',
              requestUri: '/{Bucket}?policy'
            },
            input: {
              type: 'structure',
              required: ['Bucket', 'Policy'],
              members: {
                Bucket: {
                  contextParam: {
                    name: 'Bucket'
                  },
                  location: 'uri',
                  locationName: 'Bucket'
                },
                ContentMD5: {
                  location: 'header',
                  locationName: 'Content-MD5'
                },
                ChecksumAlgorithm: {
                  location: 'header',
                  locationName: 'x-amz-sdk-checksum-algorithm'
                },
                ConfirmRemoveSelfBucketAccess: {
                  location: 'header',
                  locationName: 'x-amz-confirm-remove-self-bucket-access',
                  type: 'boolean'
                },
                Policy: {},
                ExpectedBucketOwner: {
                  location: 'header',
                  locationName: 'x-amz-expected-bucket-owner'
                }
              },
              payload: 'Policy'
            },
            httpChecksum: {
              requestAlgorithmMember: 'ChecksumAlgorithm',
              requestChecksumRequired: true
            },
            staticContextParams: {
              UseS3ExpressControlEndpoint: {
                value: true
              }
            }
          },
          PutBucketReplication: {
            http: {
              method: 'PUT',
              requestUri: '/{Bucket}?replication'
            },
            input: {
              type: 'structure',
              required: ['Bucket', 'ReplicationConfiguration'],
              members: {
                Bucket: {
                  contextParam: {
                    name: 'Bucket'
                  },
                  location: 'uri',
                  locationName: 'Bucket'
                },
                ContentMD5: {
                  location: 'header',
                  locationName: 'Content-MD5'
                },
                ChecksumAlgorithm: {
                  location: 'header',
                  locationName: 'x-amz-sdk-checksum-algorithm'
                },
                ReplicationConfiguration: {
                  shape: 'S83',
                  locationName: 'ReplicationConfiguration',
                  xmlNamespace: {
                    uri: 'http://s3.amazonaws.com/doc/2006-03-01/'
                  }
                },
                Token: {
                  location: 'header',
                  locationName: 'x-amz-bucket-object-lock-token'
                },
                ExpectedBucketOwner: {
                  location: 'header',
                  locationName: 'x-amz-expected-bucket-owner'
                }
              },
              payload: 'ReplicationConfiguration'
            },
            httpChecksum: {
              requestAlgorithmMember: 'ChecksumAlgorithm',
              requestChecksumRequired: true
            },
            staticContextParams: {
              UseS3ExpressControlEndpoint: {
                value: true
              }
            }
          },
          PutBucketRequestPayment: {
            http: {
              method: 'PUT',
              requestUri: '/{Bucket}?requestPayment'
            },
            input: {
              type: 'structure',
              required: ['Bucket', 'RequestPaymentConfiguration'],
              members: {
                Bucket: {
                  contextParam: {
                    name: 'Bucket'
                  },
                  location: 'uri',
                  locationName: 'Bucket'
                },
                ContentMD5: {
                  location: 'header',
                  locationName: 'Content-MD5'
                },
                ChecksumAlgorithm: {
                  location: 'header',
                  locationName: 'x-amz-sdk-checksum-algorithm'
                },
                RequestPaymentConfiguration: {
                  locationName: 'RequestPaymentConfiguration',
                  xmlNamespace: {
                    uri: 'http://s3.amazonaws.com/doc/2006-03-01/'
                  },
                  type: 'structure',
                  required: ['Payer'],
                  members: {
                    Payer: {}
                  }
                },
                ExpectedBucketOwner: {
                  location: 'header',
                  locationName: 'x-amz-expected-bucket-owner'
                }
              },
              payload: 'RequestPaymentConfiguration'
            },
            httpChecksum: {
              requestAlgorithmMember: 'ChecksumAlgorithm',
              requestChecksumRequired: true
            },
            staticContextParams: {
              UseS3ExpressControlEndpoint: {
                value: true
              }
            }
          },
          PutBucketTagging: {
            http: {
              method: 'PUT',
              requestUri: '/{Bucket}?tagging'
            },
            input: {
              type: 'structure',
              required: ['Bucket', 'Tagging'],
              members: {
                Bucket: {
                  contextParam: {
                    name: 'Bucket'
                  },
                  location: 'uri',
                  locationName: 'Bucket'
                },
                ContentMD5: {
                  location: 'header',
                  locationName: 'Content-MD5'
                },
                ChecksumAlgorithm: {
                  location: 'header',
                  locationName: 'x-amz-sdk-checksum-algorithm'
                },
                Tagging: {
                  shape: 'Sea',
                  locationName: 'Tagging',
                  xmlNamespace: {
                    uri: 'http://s3.amazonaws.com/doc/2006-03-01/'
                  }
                },
                ExpectedBucketOwner: {
                  location: 'header',
                  locationName: 'x-amz-expected-bucket-owner'
                }
              },
              payload: 'Tagging'
            },
            httpChecksum: {
              requestAlgorithmMember: 'ChecksumAlgorithm',
              requestChecksumRequired: true
            },
            staticContextParams: {
              UseS3ExpressControlEndpoint: {
                value: true
              }
            }
          },
          PutBucketVersioning: {
            http: {
              method: 'PUT',
              requestUri: '/{Bucket}?versioning'
            },
            input: {
              type: 'structure',
              required: ['Bucket', 'VersioningConfiguration'],
              members: {
                Bucket: {
                  contextParam: {
                    name: 'Bucket'
                  },
                  location: 'uri',
                  locationName: 'Bucket'
                },
                ContentMD5: {
                  location: 'header',
                  locationName: 'Content-MD5'
                },
                ChecksumAlgorithm: {
                  location: 'header',
                  locationName: 'x-amz-sdk-checksum-algorithm'
                },
                MFA: {
                  location: 'header',
                  locationName: 'x-amz-mfa'
                },
                VersioningConfiguration: {
                  locationName: 'VersioningConfiguration',
                  xmlNamespace: {
                    uri: 'http://s3.amazonaws.com/doc/2006-03-01/'
                  },
                  type: 'structure',
                  members: {
                    MFADelete: {
                      locationName: 'MfaDelete'
                    },
                    Status: {}
                  }
                },
                ExpectedBucketOwner: {
                  location: 'header',
                  locationName: 'x-amz-expected-bucket-owner'
                }
              },
              payload: 'VersioningConfiguration'
            },
            httpChecksum: {
              requestAlgorithmMember: 'ChecksumAlgorithm',
              requestChecksumRequired: true
            },
            staticContextParams: {
              UseS3ExpressControlEndpoint: {
                value: true
              }
            }
          },
          PutBucketWebsite: {
            http: {
              method: 'PUT',
              requestUri: '/{Bucket}?website'
            },
            input: {
              type: 'structure',
              required: ['Bucket', 'WebsiteConfiguration'],
              members: {
                Bucket: {
                  contextParam: {
                    name: 'Bucket'
                  },
                  location: 'uri',
                  locationName: 'Bucket'
                },
                ContentMD5: {
                  location: 'header',
                  locationName: 'Content-MD5'
                },
                ChecksumAlgorithm: {
                  location: 'header',
                  locationName: 'x-amz-sdk-checksum-algorithm'
                },
                WebsiteConfiguration: {
                  locationName: 'WebsiteConfiguration',
                  xmlNamespace: {
                    uri: 'http://s3.amazonaws.com/doc/2006-03-01/'
                  },
                  type: 'structure',
                  members: {
                    ErrorDocument: {
                      shape: 'S9b'
                    },
                    IndexDocument: {
                      shape: 'S99'
                    },
                    RedirectAllRequestsTo: {
                      shape: 'S96'
                    },
                    RoutingRules: {
                      shape: 'S9c'
                    }
                  }
                },
                ExpectedBucketOwner: {
                  location: 'header',
                  locationName: 'x-amz-expected-bucket-owner'
                }
              },
              payload: 'WebsiteConfiguration'
            },
            httpChecksum: {
              requestAlgorithmMember: 'ChecksumAlgorithm',
              requestChecksumRequired: true
            },
            staticContextParams: {
              UseS3ExpressControlEndpoint: {
                value: true
              }
            }
          },
          PutObject: {
            http: {
              method: 'PUT',
              requestUri: '/{Bucket}/{Key+}'
            },
            input: {
              type: 'structure',
              required: ['Bucket', 'Key'],
              members: {
                ACL: {
                  location: 'header',
                  locationName: 'x-amz-acl'
                },
                Body: {
                  streaming: true,
                  type: 'blob'
                },
                Bucket: {
                  contextParam: {
                    name: 'Bucket'
                  },
                  location: 'uri',
                  locationName: 'Bucket'
                },
                CacheControl: {
                  location: 'header',
                  locationName: 'Cache-Control'
                },
                ContentDisposition: {
                  location: 'header',
                  locationName: 'Content-Disposition'
                },
                ContentEncoding: {
                  location: 'header',
                  locationName: 'Content-Encoding'
                },
                ContentLanguage: {
                  location: 'header',
                  locationName: 'Content-Language'
                },
                ContentLength: {
                  location: 'header',
                  locationName: 'Content-Length',
                  type: 'long'
                },
                ContentMD5: {
                  location: 'header',
                  locationName: 'Content-MD5'
                },
                ContentType: {
                  location: 'header',
                  locationName: 'Content-Type'
                },
                ChecksumAlgorithm: {
                  location: 'header',
                  locationName: 'x-amz-sdk-checksum-algorithm'
                },
                ChecksumCRC32: {
                  location: 'header',
                  locationName: 'x-amz-checksum-crc32'
                },
                ChecksumCRC32C: {
                  location: 'header',
                  locationName: 'x-amz-checksum-crc32c'
                },
                ChecksumSHA1: {
                  location: 'header',
                  locationName: 'x-amz-checksum-sha1'
                },
                ChecksumSHA256: {
                  location: 'header',
                  locationName: 'x-amz-checksum-sha256'
                },
                Expires: {
                  location: 'header',
                  locationName: 'Expires',
                  type: 'timestamp'
                },
                GrantFullControl: {
                  location: 'header',
                  locationName: 'x-amz-grant-full-control'
                },
                GrantRead: {
                  location: 'header',
                  locationName: 'x-amz-grant-read'
                },
                GrantReadACP: {
                  location: 'header',
                  locationName: 'x-amz-grant-read-acp'
                },
                GrantWriteACP: {
                  location: 'header',
                  locationName: 'x-amz-grant-write-acp'
                },
                Key: {
                  contextParam: {
                    name: 'Key'
                  },
                  location: 'uri',
                  locationName: 'Key'
                },
                Metadata: {
                  shape: 'S1b',
                  location: 'headers',
                  locationName: 'x-amz-meta-'
                },
                ServerSideEncryption: {
                  location: 'header',
                  locationName: 'x-amz-server-side-encryption'
                },
                StorageClass: {
                  location: 'header',
                  locationName: 'x-amz-storage-class'
                },
                WebsiteRedirectLocation: {
                  location: 'header',
                  locationName: 'x-amz-website-redirect-location'
                },
                SSECustomerAlgorithm: {
                  location: 'header',
                  locationName: 'x-amz-server-side-encryption-customer-algorithm'
                },
                SSECustomerKey: {
                  shape: 'Sk',
                  location: 'header',
                  locationName: 'x-amz-server-side-encryption-customer-key'
                },
                SSECustomerKeyMD5: {
                  location: 'header',
                  locationName: 'x-amz-server-side-encryption-customer-key-MD5'
                },
                SSEKMSKeyId: {
                  shape: 'Sr',
                  location: 'header',
                  locationName: 'x-amz-server-side-encryption-aws-kms-key-id'
                },
                SSEKMSEncryptionContext: {
                  shape: 'S1i',
                  location: 'header',
                  locationName: 'x-amz-server-side-encryption-context'
                },
                BucketKeyEnabled: {
                  location: 'header',
                  locationName: 'x-amz-server-side-encryption-bucket-key-enabled',
                  type: 'boolean'
                },
                RequestPayer: {
                  location: 'header',
                  locationName: 'x-amz-request-payer'
                },
                Tagging: {
                  location: 'header',
                  locationName: 'x-amz-tagging'
                },
                ObjectLockMode: {
                  location: 'header',
                  locationName: 'x-amz-object-lock-mode'
                },
                ObjectLockRetainUntilDate: {
                  shape: 'S1o',
                  location: 'header',
                  locationName: 'x-amz-object-lock-retain-until-date'
                },
                ObjectLockLegalHoldStatus: {
                  location: 'header',
                  locationName: 'x-amz-object-lock-legal-hold'
                },
                ExpectedBucketOwner: {
                  location: 'header',
                  locationName: 'x-amz-expected-bucket-owner'
                }
              },
              payload: 'Body'
            },
            output: {
              type: 'structure',
              members: {
                Expiration: {
                  location: 'header',
                  locationName: 'x-amz-expiration'
                },
                ETag: {
                  location: 'header',
                  locationName: 'ETag'
                },
                ChecksumCRC32: {
                  location: 'header',
                  locationName: 'x-amz-checksum-crc32'
                },
                ChecksumCRC32C: {
                  location: 'header',
                  locationName: 'x-amz-checksum-crc32c'
                },
                ChecksumSHA1: {
                  location: 'header',
                  locationName: 'x-amz-checksum-sha1'
                },
                ChecksumSHA256: {
                  location: 'header',
                  locationName: 'x-amz-checksum-sha256'
                },
                ServerSideEncryption: {
                  location: 'header',
                  locationName: 'x-amz-server-side-encryption'
                },
                VersionId: {
                  location: 'header',
                  locationName: 'x-amz-version-id'
                },
                SSECustomerAlgorithm: {
                  location: 'header',
                  locationName: 'x-amz-server-side-encryption-customer-algorithm'
                },
                SSECustomerKeyMD5: {
                  location: 'header',
                  locationName: 'x-amz-server-side-encryption-customer-key-MD5'
                },
                SSEKMSKeyId: {
                  shape: 'Sr',
                  location: 'header',
                  locationName: 'x-amz-server-side-encryption-aws-kms-key-id'
                },
                SSEKMSEncryptionContext: {
                  shape: 'S1i',
                  location: 'header',
                  locationName: 'x-amz-server-side-encryption-context'
                },
                BucketKeyEnabled: {
                  location: 'header',
                  locationName: 'x-amz-server-side-encryption-bucket-key-enabled',
                  type: 'boolean'
                },
                RequestCharged: {
                  location: 'header',
                  locationName: 'x-amz-request-charged'
                }
              }
            },
            httpChecksum: {
              requestAlgorithmMember: 'ChecksumAlgorithm',
              requestChecksumRequired: false
            }
          },
          PutObjectAcl: {
            http: {
              method: 'PUT',
              requestUri: '/{Bucket}/{Key+}?acl'
            },
            input: {
              type: 'structure',
              required: ['Bucket', 'Key'],
              members: {
                ACL: {
                  location: 'header',
                  locationName: 'x-amz-acl'
                },
                AccessControlPolicy: {
                  shape: 'Sdk',
                  locationName: 'AccessControlPolicy',
                  xmlNamespace: {
                    uri: 'http://s3.amazonaws.com/doc/2006-03-01/'
                  }
                },
                Bucket: {
                  contextParam: {
                    name: 'Bucket'
                  },
                  location: 'uri',
                  locationName: 'Bucket'
                },
                ContentMD5: {
                  location: 'header',
                  locationName: 'Content-MD5'
                },
                ChecksumAlgorithm: {
                  location: 'header',
                  locationName: 'x-amz-sdk-checksum-algorithm'
                },
                GrantFullControl: {
                  location: 'header',
                  locationName: 'x-amz-grant-full-control'
                },
                GrantRead: {
                  location: 'header',
                  locationName: 'x-amz-grant-read'
                },
                GrantReadACP: {
                  location: 'header',
                  locationName: 'x-amz-grant-read-acp'
                },
                GrantWrite: {
                  location: 'header',
                  locationName: 'x-amz-grant-write'
                },
                GrantWriteACP: {
                  location: 'header',
                  locationName: 'x-amz-grant-write-acp'
                },
                Key: {
                  contextParam: {
                    name: 'Key'
                  },
                  location: 'uri',
                  locationName: 'Key'
                },
                RequestPayer: {
                  location: 'header',
                  locationName: 'x-amz-request-payer'
                },
                VersionId: {
                  location: 'querystring',
                  locationName: 'versionId'
                },
                ExpectedBucketOwner: {
                  location: 'header',
                  locationName: 'x-amz-expected-bucket-owner'
                }
              },
              payload: 'AccessControlPolicy'
            },
            output: {
              type: 'structure',
              members: {
                RequestCharged: {
                  location: 'header',
                  locationName: 'x-amz-request-charged'
                }
              }
            },
            httpChecksum: {
              requestAlgorithmMember: 'ChecksumAlgorithm',
              requestChecksumRequired: true
            }
          },
          PutObjectLegalHold: {
            http: {
              method: 'PUT',
              requestUri: '/{Bucket}/{Key+}?legal-hold'
            },
            input: {
              type: 'structure',
              required: ['Bucket', 'Key'],
              members: {
                Bucket: {
                  contextParam: {
                    name: 'Bucket'
                  },
                  location: 'uri',
                  locationName: 'Bucket'
                },
                Key: {
                  location: 'uri',
                  locationName: 'Key'
                },
                LegalHold: {
                  shape: 'Sar',
                  locationName: 'LegalHold',
                  xmlNamespace: {
                    uri: 'http://s3.amazonaws.com/doc/2006-03-01/'
                  }
                },
                RequestPayer: {
                  location: 'header',
                  locationName: 'x-amz-request-payer'
                },
                VersionId: {
                  location: 'querystring',
                  locationName: 'versionId'
                },
                ContentMD5: {
                  location: 'header',
                  locationName: 'Content-MD5'
                },
                ChecksumAlgorithm: {
                  location: 'header',
                  locationName: 'x-amz-sdk-checksum-algorithm'
                },
                ExpectedBucketOwner: {
                  location: 'header',
                  locationName: 'x-amz-expected-bucket-owner'
                }
              },
              payload: 'LegalHold'
            },
            output: {
              type: 'structure',
              members: {
                RequestCharged: {
                  location: 'header',
                  locationName: 'x-amz-request-charged'
                }
              }
            },
            httpChecksum: {
              requestAlgorithmMember: 'ChecksumAlgorithm',
              requestChecksumRequired: true
            }
          },
          PutObjectLockConfiguration: {
            http: {
              method: 'PUT',
              requestUri: '/{Bucket}?object-lock'
            },
            input: {
              type: 'structure',
              required: ['Bucket'],
              members: {
                Bucket: {
                  contextParam: {
                    name: 'Bucket'
                  },
                  location: 'uri',
                  locationName: 'Bucket'
                },
                ObjectLockConfiguration: {
                  shape: 'Sau',
                  locationName: 'ObjectLockConfiguration',
                  xmlNamespace: {
                    uri: 'http://s3.amazonaws.com/doc/2006-03-01/'
                  }
                },
                RequestPayer: {
                  location: 'header',
                  locationName: 'x-amz-request-payer'
                },
                Token: {
                  location: 'header',
                  locationName: 'x-amz-bucket-object-lock-token'
                },
                ContentMD5: {
                  location: 'header',
                  locationName: 'Content-MD5'
                },
                ChecksumAlgorithm: {
                  location: 'header',
                  locationName: 'x-amz-sdk-checksum-algorithm'
                },
                ExpectedBucketOwner: {
                  location: 'header',
                  locationName: 'x-amz-expected-bucket-owner'
                }
              },
              payload: 'ObjectLockConfiguration'
            },
            output: {
              type: 'structure',
              members: {
                RequestCharged: {
                  location: 'header',
                  locationName: 'x-amz-request-charged'
                }
              }
            },
            httpChecksum: {
              requestAlgorithmMember: 'ChecksumAlgorithm',
              requestChecksumRequired: true
            }
          },
          PutObjectRetention: {
            http: {
              method: 'PUT',
              requestUri: '/{Bucket}/{Key+}?retention'
            },
            input: {
              type: 'structure',
              required: ['Bucket', 'Key'],
              members: {
                Bucket: {
                  contextParam: {
                    name: 'Bucket'
                  },
                  location: 'uri',
                  locationName: 'Bucket'
                },
                Key: {
                  location: 'uri',
                  locationName: 'Key'
                },
                Retention: {
                  shape: 'Sb2',
                  locationName: 'Retention',
                  xmlNamespace: {
                    uri: 'http://s3.amazonaws.com/doc/2006-03-01/'
                  }
                },
                RequestPayer: {
                  location: 'header',
                  locationName: 'x-amz-request-payer'
                },
                VersionId: {
                  location: 'querystring',
                  locationName: 'versionId'
                },
                BypassGovernanceRetention: {
                  location: 'header',
                  locationName: 'x-amz-bypass-governance-retention',
                  type: 'boolean'
                },
                ContentMD5: {
                  location: 'header',
                  locationName: 'Content-MD5'
                },
                ChecksumAlgorithm: {
                  location: 'header',
                  locationName: 'x-amz-sdk-checksum-algorithm'
                },
                ExpectedBucketOwner: {
                  location: 'header',
                  locationName: 'x-amz-expected-bucket-owner'
                }
              },
              payload: 'Retention'
            },
            output: {
              type: 'structure',
              members: {
                RequestCharged: {
                  location: 'header',
                  locationName: 'x-amz-request-charged'
                }
              }
            },
            httpChecksum: {
              requestAlgorithmMember: 'ChecksumAlgorithm',
              requestChecksumRequired: true
            }
          },
          PutObjectTagging: {
            http: {
              method: 'PUT',
              requestUri: '/{Bucket}/{Key+}?tagging'
            },
            input: {
              type: 'structure',
              required: ['Bucket', 'Key', 'Tagging'],
              members: {
                Bucket: {
                  contextParam: {
                    name: 'Bucket'
                  },
                  location: 'uri',
                  locationName: 'Bucket'
                },
                Key: {
                  location: 'uri',
                  locationName: 'Key'
                },
                VersionId: {
                  location: 'querystring',
                  locationName: 'versionId'
                },
                ContentMD5: {
                  location: 'header',
                  locationName: 'Content-MD5'
                },
                ChecksumAlgorithm: {
                  location: 'header',
                  locationName: 'x-amz-sdk-checksum-algorithm'
                },
                Tagging: {
                  shape: 'Sea',
                  locationName: 'Tagging',
                  xmlNamespace: {
                    uri: 'http://s3.amazonaws.com/doc/2006-03-01/'
                  }
                },
                ExpectedBucketOwner: {
                  location: 'header',
                  locationName: 'x-amz-expected-bucket-owner'
                },
                RequestPayer: {
                  location: 'header',
                  locationName: 'x-amz-request-payer'
                }
              },
              payload: 'Tagging'
            },
            output: {
              type: 'structure',
              members: {
                VersionId: {
                  location: 'header',
                  locationName: 'x-amz-version-id'
                }
              }
            },
            httpChecksum: {
              requestAlgorithmMember: 'ChecksumAlgorithm',
              requestChecksumRequired: true
            }
          },
          PutPublicAccessBlock: {
            http: {
              method: 'PUT',
              requestUri: '/{Bucket}?publicAccessBlock'
            },
            input: {
              type: 'structure',
              required: ['Bucket', 'PublicAccessBlockConfiguration'],
              members: {
                Bucket: {
                  contextParam: {
                    name: 'Bucket'
                  },
                  location: 'uri',
                  locationName: 'Bucket'
                },
                ContentMD5: {
                  location: 'header',
                  locationName: 'Content-MD5'
                },
                ChecksumAlgorithm: {
                  location: 'header',
                  locationName: 'x-amz-sdk-checksum-algorithm'
                },
                PublicAccessBlockConfiguration: {
                  shape: 'Sb9',
                  locationName: 'PublicAccessBlockConfiguration',
                  xmlNamespace: {
                    uri: 'http://s3.amazonaws.com/doc/2006-03-01/'
                  }
                },
                ExpectedBucketOwner: {
                  location: 'header',
                  locationName: 'x-amz-expected-bucket-owner'
                }
              },
              payload: 'PublicAccessBlockConfiguration'
            },
            httpChecksum: {
              requestAlgorithmMember: 'ChecksumAlgorithm',
              requestChecksumRequired: true
            },
            staticContextParams: {
              UseS3ExpressControlEndpoint: {
                value: true
              }
            }
          },
          RestoreObject: {
            http: {
              requestUri: '/{Bucket}/{Key+}?restore'
            },
            input: {
              type: 'structure',
              required: ['Bucket', 'Key'],
              members: {
                Bucket: {
                  contextParam: {
                    name: 'Bucket'
                  },
                  location: 'uri',
                  locationName: 'Bucket'
                },
                Key: {
                  location: 'uri',
                  locationName: 'Key'
                },
                VersionId: {
                  location: 'querystring',
                  locationName: 'versionId'
                },
                RestoreRequest: {
                  locationName: 'RestoreRequest',
                  xmlNamespace: {
                    uri: 'http://s3.amazonaws.com/doc/2006-03-01/'
                  },
                  type: 'structure',
                  members: {
                    Days: {
                      type: 'integer'
                    },
                    GlacierJobParameters: {
                      type: 'structure',
                      required: ['Tier'],
                      members: {
                        Tier: {}
                      }
                    },
                    Type: {},
                    Tier: {},
                    Description: {},
                    SelectParameters: {
                      type: 'structure',
                      required: ['InputSerialization', 'ExpressionType', 'Expression', 'OutputSerialization'],
                      members: {
                        InputSerialization: {
                          shape: 'Sf0'
                        },
                        ExpressionType: {},
                        Expression: {},
                        OutputSerialization: {
                          shape: 'Sff'
                        }
                      }
                    },
                    OutputLocation: {
                      type: 'structure',
                      members: {
                        S3: {
                          type: 'structure',
                          required: ['BucketName', 'Prefix'],
                          members: {
                            BucketName: {},
                            Prefix: {},
                            Encryption: {
                              type: 'structure',
                              required: ['EncryptionType'],
                              members: {
                                EncryptionType: {},
                                KMSKeyId: {
                                  shape: 'Sr'
                                },
                                KMSContext: {}
                              }
                            },
                            CannedACL: {},
                            AccessControlList: {
                              shape: 'S3t'
                            },
                            Tagging: {
                              shape: 'Sea'
                            },
                            UserMetadata: {
                              type: 'list',
                              member: {
                                locationName: 'MetadataEntry',
                                type: 'structure',
                                members: {
                                  Name: {},
                                  Value: {}
                                }
                              }
                            },
                            StorageClass: {}
                          }
                        }
                      }
                    }
                  }
                },
                RequestPayer: {
                  location: 'header',
                  locationName: 'x-amz-request-payer'
                },
                ChecksumAlgorithm: {
                  location: 'header',
                  locationName: 'x-amz-sdk-checksum-algorithm'
                },
                ExpectedBucketOwner: {
                  location: 'header',
                  locationName: 'x-amz-expected-bucket-owner'
                }
              },
              payload: 'RestoreRequest'
            },
            output: {
              type: 'structure',
              members: {
                RequestCharged: {
                  location: 'header',
                  locationName: 'x-amz-request-charged'
                },
                RestoreOutputPath: {
                  location: 'header',
                  locationName: 'x-amz-restore-output-path'
                }
              }
            },
            alias: 'PostObjectRestore',
            httpChecksum: {
              requestAlgorithmMember: 'ChecksumAlgorithm',
              requestChecksumRequired: false
            }
          },
          SelectObjectContent: {
            http: {
              requestUri: '/{Bucket}/{Key+}?select&select-type=2'
            },
            input: {
              locationName: 'SelectObjectContentRequest',
              xmlNamespace: {
                uri: 'http://s3.amazonaws.com/doc/2006-03-01/'
              },
              type: 'structure',
              required: ['Bucket', 'Key', 'Expression', 'ExpressionType', 'InputSerialization', 'OutputSerialization'],
              members: {
                Bucket: {
                  contextParam: {
                    name: 'Bucket'
                  },
                  location: 'uri',
                  locationName: 'Bucket'
                },
                Key: {
                  location: 'uri',
                  locationName: 'Key'
                },
                SSECustomerAlgorithm: {
                  location: 'header',
                  locationName: 'x-amz-server-side-encryption-customer-algorithm'
                },
                SSECustomerKey: {
                  shape: 'Sk',
                  location: 'header',
                  locationName: 'x-amz-server-side-encryption-customer-key'
                },
                SSECustomerKeyMD5: {
                  location: 'header',
                  locationName: 'x-amz-server-side-encryption-customer-key-MD5'
                },
                Expression: {},
                ExpressionType: {},
                RequestProgress: {
                  type: 'structure',
                  members: {
                    Enabled: {
                      type: 'boolean'
                    }
                  }
                },
                InputSerialization: {
                  shape: 'Sf0'
                },
                OutputSerialization: {
                  shape: 'Sff'
                },
                ScanRange: {
                  type: 'structure',
                  members: {
                    Start: {
                      type: 'long'
                    },
                    End: {
                      type: 'long'
                    }
                  }
                },
                ExpectedBucketOwner: {
                  location: 'header',
                  locationName: 'x-amz-expected-bucket-owner'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Payload: {
                  type: 'structure',
                  members: {
                    Records: {
                      type: 'structure',
                      members: {
                        Payload: {
                          eventpayload: true,
                          type: 'blob'
                        }
                      },
                      event: true
                    },
                    Stats: {
                      type: 'structure',
                      members: {
                        Details: {
                          eventpayload: true,
                          type: 'structure',
                          members: {
                            BytesScanned: {
                              type: 'long'
                            },
                            BytesProcessed: {
                              type: 'long'
                            },
                            BytesReturned: {
                              type: 'long'
                            }
                          }
                        }
                      },
                      event: true
                    },
                    Progress: {
                      type: 'structure',
                      members: {
                        Details: {
                          eventpayload: true,
                          type: 'structure',
                          members: {
                            BytesScanned: {
                              type: 'long'
                            },
                            BytesProcessed: {
                              type: 'long'
                            },
                            BytesReturned: {
                              type: 'long'
                            }
                          }
                        }
                      },
                      event: true
                    },
                    Cont: {
                      type: 'structure',
                      members: {},
                      event: true
                    },
                    End: {
                      type: 'structure',
                      members: {},
                      event: true
                    }
                  },
                  eventstream: true
                }
              },
              payload: 'Payload'
            }
          },
          UploadPart: {
            http: {
              method: 'PUT',
              requestUri: '/{Bucket}/{Key+}'
            },
            input: {
              type: 'structure',
              required: ['Bucket', 'Key', 'PartNumber', 'UploadId'],
              members: {
                Body: {
                  streaming: true,
                  type: 'blob'
                },
                Bucket: {
                  contextParam: {
                    name: 'Bucket'
                  },
                  location: 'uri',
                  locationName: 'Bucket'
                },
                ContentLength: {
                  location: 'header',
                  locationName: 'Content-Length',
                  type: 'long'
                },
                ContentMD5: {
                  location: 'header',
                  locationName: 'Content-MD5'
                },
                ChecksumAlgorithm: {
                  location: 'header',
                  locationName: 'x-amz-sdk-checksum-algorithm'
                },
                ChecksumCRC32: {
                  location: 'header',
                  locationName: 'x-amz-checksum-crc32'
                },
                ChecksumCRC32C: {
                  location: 'header',
                  locationName: 'x-amz-checksum-crc32c'
                },
                ChecksumSHA1: {
                  location: 'header',
                  locationName: 'x-amz-checksum-sha1'
                },
                ChecksumSHA256: {
                  location: 'header',
                  locationName: 'x-amz-checksum-sha256'
                },
                Key: {
                  contextParam: {
                    name: 'Key'
                  },
                  location: 'uri',
                  locationName: 'Key'
                },
                PartNumber: {
                  location: 'querystring',
                  locationName: 'partNumber',
                  type: 'integer'
                },
                UploadId: {
                  location: 'querystring',
                  locationName: 'uploadId'
                },
                SSECustomerAlgorithm: {
                  location: 'header',
                  locationName: 'x-amz-server-side-encryption-customer-algorithm'
                },
                SSECustomerKey: {
                  shape: 'Sk',
                  location: 'header',
                  locationName: 'x-amz-server-side-encryption-customer-key'
                },
                SSECustomerKeyMD5: {
                  location: 'header',
                  locationName: 'x-amz-server-side-encryption-customer-key-MD5'
                },
                RequestPayer: {
                  location: 'header',
                  locationName: 'x-amz-request-payer'
                },
                ExpectedBucketOwner: {
                  location: 'header',
                  locationName: 'x-amz-expected-bucket-owner'
                }
              },
              payload: 'Body'
            },
            output: {
              type: 'structure',
              members: {
                ServerSideEncryption: {
                  location: 'header',
                  locationName: 'x-amz-server-side-encryption'
                },
                ETag: {
                  location: 'header',
                  locationName: 'ETag'
                },
                ChecksumCRC32: {
                  location: 'header',
                  locationName: 'x-amz-checksum-crc32'
                },
                ChecksumCRC32C: {
                  location: 'header',
                  locationName: 'x-amz-checksum-crc32c'
                },
                ChecksumSHA1: {
                  location: 'header',
                  locationName: 'x-amz-checksum-sha1'
                },
                ChecksumSHA256: {
                  location: 'header',
                  locationName: 'x-amz-checksum-sha256'
                },
                SSECustomerAlgorithm: {
                  location: 'header',
                  locationName: 'x-amz-server-side-encryption-customer-algorithm'
                },
                SSECustomerKeyMD5: {
                  location: 'header',
                  locationName: 'x-amz-server-side-encryption-customer-key-MD5'
                },
                SSEKMSKeyId: {
                  shape: 'Sr',
                  location: 'header',
                  locationName: 'x-amz-server-side-encryption-aws-kms-key-id'
                },
                BucketKeyEnabled: {
                  location: 'header',
                  locationName: 'x-amz-server-side-encryption-bucket-key-enabled',
                  type: 'boolean'
                },
                RequestCharged: {
                  location: 'header',
                  locationName: 'x-amz-request-charged'
                }
              }
            },
            httpChecksum: {
              requestAlgorithmMember: 'ChecksumAlgorithm',
              requestChecksumRequired: false
            }
          },
          UploadPartCopy: {
            http: {
              method: 'PUT',
              requestUri: '/{Bucket}/{Key+}'
            },
            input: {
              type: 'structure',
              required: ['Bucket', 'CopySource', 'Key', 'PartNumber', 'UploadId'],
              members: {
                Bucket: {
                  contextParam: {
                    name: 'Bucket'
                  },
                  location: 'uri',
                  locationName: 'Bucket'
                },
                CopySource: {
                  location: 'header',
                  locationName: 'x-amz-copy-source'
                },
                CopySourceIfMatch: {
                  location: 'header',
                  locationName: 'x-amz-copy-source-if-match'
                },
                CopySourceIfModifiedSince: {
                  location: 'header',
                  locationName: 'x-amz-copy-source-if-modified-since',
                  type: 'timestamp'
                },
                CopySourceIfNoneMatch: {
                  location: 'header',
                  locationName: 'x-amz-copy-source-if-none-match'
                },
                CopySourceIfUnmodifiedSince: {
                  location: 'header',
                  locationName: 'x-amz-copy-source-if-unmodified-since',
                  type: 'timestamp'
                },
                CopySourceRange: {
                  location: 'header',
                  locationName: 'x-amz-copy-source-range'
                },
                Key: {
                  location: 'uri',
                  locationName: 'Key'
                },
                PartNumber: {
                  location: 'querystring',
                  locationName: 'partNumber',
                  type: 'integer'
                },
                UploadId: {
                  location: 'querystring',
                  locationName: 'uploadId'
                },
                SSECustomerAlgorithm: {
                  location: 'header',
                  locationName: 'x-amz-server-side-encryption-customer-algorithm'
                },
                SSECustomerKey: {
                  shape: 'Sk',
                  location: 'header',
                  locationName: 'x-amz-server-side-encryption-customer-key'
                },
                SSECustomerKeyMD5: {
                  location: 'header',
                  locationName: 'x-amz-server-side-encryption-customer-key-MD5'
                },
                CopySourceSSECustomerAlgorithm: {
                  location: 'header',
                  locationName: 'x-amz-copy-source-server-side-encryption-customer-algorithm'
                },
                CopySourceSSECustomerKey: {
                  shape: 'S1k',
                  location: 'header',
                  locationName: 'x-amz-copy-source-server-side-encryption-customer-key'
                },
                CopySourceSSECustomerKeyMD5: {
                  location: 'header',
                  locationName: 'x-amz-copy-source-server-side-encryption-customer-key-MD5'
                },
                RequestPayer: {
                  location: 'header',
                  locationName: 'x-amz-request-payer'
                },
                ExpectedBucketOwner: {
                  location: 'header',
                  locationName: 'x-amz-expected-bucket-owner'
                },
                ExpectedSourceBucketOwner: {
                  location: 'header',
                  locationName: 'x-amz-source-expected-bucket-owner'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                CopySourceVersionId: {
                  location: 'header',
                  locationName: 'x-amz-copy-source-version-id'
                },
                CopyPartResult: {
                  type: 'structure',
                  members: {
                    ETag: {},
                    LastModified: {
                      type: 'timestamp'
                    },
                    ChecksumCRC32: {},
                    ChecksumCRC32C: {},
                    ChecksumSHA1: {},
                    ChecksumSHA256: {}
                  }
                },
                ServerSideEncryption: {
                  location: 'header',
                  locationName: 'x-amz-server-side-encryption'
                },
                SSECustomerAlgorithm: {
                  location: 'header',
                  locationName: 'x-amz-server-side-encryption-customer-algorithm'
                },
                SSECustomerKeyMD5: {
                  location: 'header',
                  locationName: 'x-amz-server-side-encryption-customer-key-MD5'
                },
                SSEKMSKeyId: {
                  shape: 'Sr',
                  location: 'header',
                  locationName: 'x-amz-server-side-encryption-aws-kms-key-id'
                },
                BucketKeyEnabled: {
                  location: 'header',
                  locationName: 'x-amz-server-side-encryption-bucket-key-enabled',
                  type: 'boolean'
                },
                RequestCharged: {
                  location: 'header',
                  locationName: 'x-amz-request-charged'
                }
              },
              payload: 'CopyPartResult'
            },
            staticContextParams: {
              DisableS3ExpressSessionAuth: {
                value: true
              }
            }
          },
          WriteGetObjectResponse: {
            http: {
              requestUri: '/WriteGetObjectResponse'
            },
            input: {
              type: 'structure',
              required: ['RequestRoute', 'RequestToken'],
              members: {
                RequestRoute: {
                  hostLabel: true,
                  location: 'header',
                  locationName: 'x-amz-request-route'
                },
                RequestToken: {
                  location: 'header',
                  locationName: 'x-amz-request-token'
                },
                Body: {
                  streaming: true,
                  type: 'blob'
                },
                StatusCode: {
                  location: 'header',
                  locationName: 'x-amz-fwd-status',
                  type: 'integer'
                },
                ErrorCode: {
                  location: 'header',
                  locationName: 'x-amz-fwd-error-code'
                },
                ErrorMessage: {
                  location: 'header',
                  locationName: 'x-amz-fwd-error-message'
                },
                AcceptRanges: {
                  location: 'header',
                  locationName: 'x-amz-fwd-header-accept-ranges'
                },
                CacheControl: {
                  location: 'header',
                  locationName: 'x-amz-fwd-header-Cache-Control'
                },
                ContentDisposition: {
                  location: 'header',
                  locationName: 'x-amz-fwd-header-Content-Disposition'
                },
                ContentEncoding: {
                  location: 'header',
                  locationName: 'x-amz-fwd-header-Content-Encoding'
                },
                ContentLanguage: {
                  location: 'header',
                  locationName: 'x-amz-fwd-header-Content-Language'
                },
                ContentLength: {
                  location: 'header',
                  locationName: 'Content-Length',
                  type: 'long'
                },
                ContentRange: {
                  location: 'header',
                  locationName: 'x-amz-fwd-header-Content-Range'
                },
                ContentType: {
                  location: 'header',
                  locationName: 'x-amz-fwd-header-Content-Type'
                },
                ChecksumCRC32: {
                  location: 'header',
                  locationName: 'x-amz-fwd-header-x-amz-checksum-crc32'
                },
                ChecksumCRC32C: {
                  location: 'header',
                  locationName: 'x-amz-fwd-header-x-amz-checksum-crc32c'
                },
                ChecksumSHA1: {
                  location: 'header',
                  locationName: 'x-amz-fwd-header-x-amz-checksum-sha1'
                },
                ChecksumSHA256: {
                  location: 'header',
                  locationName: 'x-amz-fwd-header-x-amz-checksum-sha256'
                },
                DeleteMarker: {
                  location: 'header',
                  locationName: 'x-amz-fwd-header-x-amz-delete-marker',
                  type: 'boolean'
                },
                ETag: {
                  location: 'header',
                  locationName: 'x-amz-fwd-header-ETag'
                },
                Expires: {
                  location: 'header',
                  locationName: 'x-amz-fwd-header-Expires',
                  type: 'timestamp'
                },
                Expiration: {
                  location: 'header',
                  locationName: 'x-amz-fwd-header-x-amz-expiration'
                },
                LastModified: {
                  location: 'header',
                  locationName: 'x-amz-fwd-header-Last-Modified',
                  type: 'timestamp'
                },
                MissingMeta: {
                  location: 'header',
                  locationName: 'x-amz-fwd-header-x-amz-missing-meta',
                  type: 'integer'
                },
                Metadata: {
                  shape: 'S1b',
                  location: 'headers',
                  locationName: 'x-amz-meta-'
                },
                ObjectLockMode: {
                  location: 'header',
                  locationName: 'x-amz-fwd-header-x-amz-object-lock-mode'
                },
                ObjectLockLegalHoldStatus: {
                  location: 'header',
                  locationName: 'x-amz-fwd-header-x-amz-object-lock-legal-hold'
                },
                ObjectLockRetainUntilDate: {
                  shape: 'S1o',
                  location: 'header',
                  locationName: 'x-amz-fwd-header-x-amz-object-lock-retain-until-date'
                },
                PartsCount: {
                  location: 'header',
                  locationName: 'x-amz-fwd-header-x-amz-mp-parts-count',
                  type: 'integer'
                },
                ReplicationStatus: {
                  location: 'header',
                  locationName: 'x-amz-fwd-header-x-amz-replication-status'
                },
                RequestCharged: {
                  location: 'header',
                  locationName: 'x-amz-fwd-header-x-amz-request-charged'
                },
                Restore: {
                  location: 'header',
                  locationName: 'x-amz-fwd-header-x-amz-restore'
                },
                ServerSideEncryption: {
                  location: 'header',
                  locationName: 'x-amz-fwd-header-x-amz-server-side-encryption'
                },
                SSECustomerAlgorithm: {
                  location: 'header',
                  locationName: 'x-amz-fwd-header-x-amz-server-side-encryption-customer-algorithm'
                },
                SSEKMSKeyId: {
                  shape: 'Sr',
                  location: 'header',
                  locationName: 'x-amz-fwd-header-x-amz-server-side-encryption-aws-kms-key-id'
                },
                SSECustomerKeyMD5: {
                  location: 'header',
                  locationName: 'x-amz-fwd-header-x-amz-server-side-encryption-customer-key-MD5'
                },
                StorageClass: {
                  location: 'header',
                  locationName: 'x-amz-fwd-header-x-amz-storage-class'
                },
                TagCount: {
                  location: 'header',
                  locationName: 'x-amz-fwd-header-x-amz-tagging-count',
                  type: 'integer'
                },
                VersionId: {
                  location: 'header',
                  locationName: 'x-amz-fwd-header-x-amz-version-id'
                },
                BucketKeyEnabled: {
                  location: 'header',
                  locationName: 'x-amz-fwd-header-x-amz-server-side-encryption-bucket-key-enabled',
                  type: 'boolean'
                }
              },
              payload: 'Body'
            },
            authtype: 'v4-unsigned-body',
            endpoint: {
              hostPrefix: '{RequestRoute}.'
            },
            staticContextParams: {
              UseObjectLambdaEndpoint: {
                value: true
              }
            }
          }
        },
        shapes: {
          Sk: {
            type: 'blob',
            sensitive: true
          },
          Sr: {
            type: 'string',
            sensitive: true
          },
          S1b: {
            type: 'map',
            key: {},
            value: {}
          },
          S1i: {
            type: 'string',
            sensitive: true
          },
          S1k: {
            type: 'blob',
            sensitive: true
          },
          S1o: {
            type: 'timestamp',
            timestampFormat: 'iso8601'
          },
          S2h: {
            type: 'string',
            sensitive: true
          },
          S3q: {
            type: 'structure',
            members: {
              DisplayName: {},
              ID: {}
            }
          },
          S3t: {
            type: 'list',
            member: {
              locationName: 'Grant',
              type: 'structure',
              members: {
                Grantee: {
                  shape: 'S3v'
                },
                Permission: {}
              }
            }
          },
          S3v: {
            type: 'structure',
            required: ['Type'],
            members: {
              DisplayName: {},
              EmailAddress: {},
              ID: {},
              Type: {
                locationName: 'xsi:type',
                xmlAttribute: true
              },
              URI: {}
            },
            xmlNamespace: {
              prefix: 'xsi',
              uri: 'http://www.w3.org/2001/XMLSchema-instance'
            }
          },
          S42: {
            type: 'structure',
            required: ['Id', 'StorageClassAnalysis'],
            members: {
              Id: {},
              Filter: {
                type: 'structure',
                members: {
                  Prefix: {},
                  Tag: {
                    shape: 'S45'
                  },
                  And: {
                    type: 'structure',
                    members: {
                      Prefix: {},
                      Tags: {
                        shape: 'S48',
                        flattened: true,
                        locationName: 'Tag'
                      }
                    }
                  }
                }
              },
              StorageClassAnalysis: {
                type: 'structure',
                members: {
                  DataExport: {
                    type: 'structure',
                    required: ['OutputSchemaVersion', 'Destination'],
                    members: {
                      OutputSchemaVersion: {},
                      Destination: {
                        type: 'structure',
                        required: ['S3BucketDestination'],
                        members: {
                          S3BucketDestination: {
                            type: 'structure',
                            required: ['Format', 'Bucket'],
                            members: {
                              Format: {},
                              BucketAccountId: {},
                              Bucket: {},
                              Prefix: {}
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
          S45: {
            type: 'structure',
            required: ['Key', 'Value'],
            members: {
              Key: {},
              Value: {}
            }
          },
          S48: {
            type: 'list',
            member: {
              shape: 'S45',
              locationName: 'Tag'
            }
          },
          S4h: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['AllowedMethods', 'AllowedOrigins'],
              members: {
                ID: {},
                AllowedHeaders: {
                  locationName: 'AllowedHeader',
                  type: 'list',
                  member: {},
                  flattened: true
                },
                AllowedMethods: {
                  locationName: 'AllowedMethod',
                  type: 'list',
                  member: {},
                  flattened: true
                },
                AllowedOrigins: {
                  locationName: 'AllowedOrigin',
                  type: 'list',
                  member: {},
                  flattened: true
                },
                ExposeHeaders: {
                  locationName: 'ExposeHeader',
                  type: 'list',
                  member: {},
                  flattened: true
                },
                MaxAgeSeconds: {
                  type: 'integer'
                }
              }
            },
            flattened: true
          },
          S4u: {
            type: 'structure',
            required: ['Rules'],
            members: {
              Rules: {
                locationName: 'Rule',
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    ApplyServerSideEncryptionByDefault: {
                      type: 'structure',
                      required: ['SSEAlgorithm'],
                      members: {
                        SSEAlgorithm: {},
                        KMSMasterKeyID: {
                          shape: 'Sr'
                        }
                      }
                    },
                    BucketKeyEnabled: {
                      type: 'boolean'
                    }
                  }
                },
                flattened: true
              }
            }
          },
          S50: {
            type: 'structure',
            required: ['Id', 'Status', 'Tierings'],
            members: {
              Id: {},
              Filter: {
                type: 'structure',
                members: {
                  Prefix: {},
                  Tag: {
                    shape: 'S45'
                  },
                  And: {
                    type: 'structure',
                    members: {
                      Prefix: {},
                      Tags: {
                        shape: 'S48',
                        flattened: true,
                        locationName: 'Tag'
                      }
                    }
                  }
                }
              },
              Status: {},
              Tierings: {
                locationName: 'Tiering',
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['Days', 'AccessTier'],
                  members: {
                    Days: {
                      type: 'integer'
                    },
                    AccessTier: {}
                  }
                },
                flattened: true
              }
            }
          },
          S5a: {
            type: 'structure',
            required: ['Destination', 'IsEnabled', 'Id', 'IncludedObjectVersions', 'Schedule'],
            members: {
              Destination: {
                type: 'structure',
                required: ['S3BucketDestination'],
                members: {
                  S3BucketDestination: {
                    type: 'structure',
                    required: ['Bucket', 'Format'],
                    members: {
                      AccountId: {},
                      Bucket: {},
                      Format: {},
                      Prefix: {},
                      Encryption: {
                        type: 'structure',
                        members: {
                          SSES3: {
                            locationName: 'SSE-S3',
                            type: 'structure',
                            members: {}
                          },
                          SSEKMS: {
                            locationName: 'SSE-KMS',
                            type: 'structure',
                            required: ['KeyId'],
                            members: {
                              KeyId: {
                                shape: 'Sr'
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              IsEnabled: {
                type: 'boolean'
              },
              Filter: {
                type: 'structure',
                required: ['Prefix'],
                members: {
                  Prefix: {}
                }
              },
              Id: {},
              IncludedObjectVersions: {},
              OptionalFields: {
                type: 'list',
                member: {
                  locationName: 'Field'
                }
              },
              Schedule: {
                type: 'structure',
                required: ['Frequency'],
                members: {
                  Frequency: {}
                }
              }
            }
          },
          S5q: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Prefix', 'Status'],
              members: {
                Expiration: {
                  shape: 'S5s'
                },
                ID: {},
                Prefix: {},
                Status: {},
                Transition: {
                  shape: 'S5x'
                },
                NoncurrentVersionTransition: {
                  shape: 'S5z'
                },
                NoncurrentVersionExpiration: {
                  shape: 'S61'
                },
                AbortIncompleteMultipartUpload: {
                  shape: 'S62'
                }
              }
            },
            flattened: true
          },
          S5s: {
            type: 'structure',
            members: {
              Date: {
                shape: 'S5t'
              },
              Days: {
                type: 'integer'
              },
              ExpiredObjectDeleteMarker: {
                type: 'boolean'
              }
            }
          },
          S5t: {
            type: 'timestamp',
            timestampFormat: 'iso8601'
          },
          S5x: {
            type: 'structure',
            members: {
              Date: {
                shape: 'S5t'
              },
              Days: {
                type: 'integer'
              },
              StorageClass: {}
            }
          },
          S5z: {
            type: 'structure',
            members: {
              NoncurrentDays: {
                type: 'integer'
              },
              StorageClass: {},
              NewerNoncurrentVersions: {
                type: 'integer'
              }
            }
          },
          S61: {
            type: 'structure',
            members: {
              NoncurrentDays: {
                type: 'integer'
              },
              NewerNoncurrentVersions: {
                type: 'integer'
              }
            }
          },
          S62: {
            type: 'structure',
            members: {
              DaysAfterInitiation: {
                type: 'integer'
              }
            }
          },
          S66: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Status'],
              members: {
                Expiration: {
                  shape: 'S5s'
                },
                ID: {},
                Prefix: {
                  deprecated: true
                },
                Filter: {
                  type: 'structure',
                  members: {
                    Prefix: {},
                    Tag: {
                      shape: 'S45'
                    },
                    ObjectSizeGreaterThan: {
                      type: 'long'
                    },
                    ObjectSizeLessThan: {
                      type: 'long'
                    },
                    And: {
                      type: 'structure',
                      members: {
                        Prefix: {},
                        Tags: {
                          shape: 'S48',
                          flattened: true,
                          locationName: 'Tag'
                        },
                        ObjectSizeGreaterThan: {
                          type: 'long'
                        },
                        ObjectSizeLessThan: {
                          type: 'long'
                        }
                      }
                    }
                  }
                },
                Status: {},
                Transitions: {
                  locationName: 'Transition',
                  type: 'list',
                  member: {
                    shape: 'S5x'
                  },
                  flattened: true
                },
                NoncurrentVersionTransitions: {
                  locationName: 'NoncurrentVersionTransition',
                  type: 'list',
                  member: {
                    shape: 'S5z'
                  },
                  flattened: true
                },
                NoncurrentVersionExpiration: {
                  shape: 'S61'
                },
                AbortIncompleteMultipartUpload: {
                  shape: 'S62'
                }
              }
            },
            flattened: true
          },
          S6i: {
            type: 'structure',
            required: ['TargetBucket', 'TargetPrefix'],
            members: {
              TargetBucket: {},
              TargetGrants: {
                type: 'list',
                member: {
                  locationName: 'Grant',
                  type: 'structure',
                  members: {
                    Grantee: {
                      shape: 'S3v'
                    },
                    Permission: {}
                  }
                }
              },
              TargetPrefix: {},
              TargetObjectKeyFormat: {
                type: 'structure',
                members: {
                  SimplePrefix: {
                    locationName: 'SimplePrefix',
                    type: 'structure',
                    members: {}
                  },
                  PartitionedPrefix: {
                    locationName: 'PartitionedPrefix',
                    type: 'structure',
                    members: {
                      PartitionDateSource: {}
                    }
                  }
                }
              }
            }
          },
          S6u: {
            type: 'structure',
            required: ['Id'],
            members: {
              Id: {},
              Filter: {
                type: 'structure',
                members: {
                  Prefix: {},
                  Tag: {
                    shape: 'S45'
                  },
                  AccessPointArn: {},
                  And: {
                    type: 'structure',
                    members: {
                      Prefix: {},
                      Tags: {
                        shape: 'S48',
                        flattened: true,
                        locationName: 'Tag'
                      },
                      AccessPointArn: {}
                    }
                  }
                }
              }
            }
          },
          S6y: {
            type: 'structure',
            required: ['Bucket'],
            members: {
              Bucket: {
                contextParam: {
                  name: 'Bucket'
                },
                location: 'uri',
                locationName: 'Bucket'
              },
              ExpectedBucketOwner: {
                location: 'header',
                locationName: 'x-amz-expected-bucket-owner'
              }
            }
          },
          S6z: {
            type: 'structure',
            members: {
              TopicConfiguration: {
                type: 'structure',
                members: {
                  Id: {},
                  Events: {
                    shape: 'S72',
                    locationName: 'Event'
                  },
                  Event: {
                    deprecated: true
                  },
                  Topic: {}
                }
              },
              QueueConfiguration: {
                type: 'structure',
                members: {
                  Id: {},
                  Event: {
                    deprecated: true
                  },
                  Events: {
                    shape: 'S72',
                    locationName: 'Event'
                  },
                  Queue: {}
                }
              },
              CloudFunctionConfiguration: {
                type: 'structure',
                members: {
                  Id: {},
                  Event: {
                    deprecated: true
                  },
                  Events: {
                    shape: 'S72',
                    locationName: 'Event'
                  },
                  CloudFunction: {},
                  InvocationRole: {}
                }
              }
            }
          },
          S72: {
            type: 'list',
            member: {},
            flattened: true
          },
          S7a: {
            type: 'structure',
            members: {
              TopicConfigurations: {
                locationName: 'TopicConfiguration',
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['TopicArn', 'Events'],
                  members: {
                    Id: {},
                    TopicArn: {
                      locationName: 'Topic'
                    },
                    Events: {
                      shape: 'S72',
                      locationName: 'Event'
                    },
                    Filter: {
                      shape: 'S7d'
                    }
                  }
                },
                flattened: true
              },
              QueueConfigurations: {
                locationName: 'QueueConfiguration',
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['QueueArn', 'Events'],
                  members: {
                    Id: {},
                    QueueArn: {
                      locationName: 'Queue'
                    },
                    Events: {
                      shape: 'S72',
                      locationName: 'Event'
                    },
                    Filter: {
                      shape: 'S7d'
                    }
                  }
                },
                flattened: true
              },
              LambdaFunctionConfigurations: {
                locationName: 'CloudFunctionConfiguration',
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['LambdaFunctionArn', 'Events'],
                  members: {
                    Id: {},
                    LambdaFunctionArn: {
                      locationName: 'CloudFunction'
                    },
                    Events: {
                      shape: 'S72',
                      locationName: 'Event'
                    },
                    Filter: {
                      shape: 'S7d'
                    }
                  }
                },
                flattened: true
              },
              EventBridgeConfiguration: {
                type: 'structure',
                members: {}
              }
            }
          },
          S7d: {
            type: 'structure',
            members: {
              Key: {
                locationName: 'S3Key',
                type: 'structure',
                members: {
                  FilterRules: {
                    locationName: 'FilterRule',
                    type: 'list',
                    member: {
                      type: 'structure',
                      members: {
                        Name: {},
                        Value: {}
                      }
                    },
                    flattened: true
                  }
                }
              }
            }
          },
          S7r: {
            type: 'structure',
            required: ['Rules'],
            members: {
              Rules: {
                locationName: 'Rule',
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['ObjectOwnership'],
                  members: {
                    ObjectOwnership: {}
                  }
                },
                flattened: true
              }
            }
          },
          S83: {
            type: 'structure',
            required: ['Role', 'Rules'],
            members: {
              Role: {},
              Rules: {
                locationName: 'Rule',
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['Status', 'Destination'],
                  members: {
                    ID: {},
                    Priority: {
                      type: 'integer'
                    },
                    Prefix: {
                      deprecated: true
                    },
                    Filter: {
                      type: 'structure',
                      members: {
                        Prefix: {},
                        Tag: {
                          shape: 'S45'
                        },
                        And: {
                          type: 'structure',
                          members: {
                            Prefix: {},
                            Tags: {
                              shape: 'S48',
                              flattened: true,
                              locationName: 'Tag'
                            }
                          }
                        }
                      }
                    },
                    Status: {},
                    SourceSelectionCriteria: {
                      type: 'structure',
                      members: {
                        SseKmsEncryptedObjects: {
                          type: 'structure',
                          required: ['Status'],
                          members: {
                            Status: {}
                          }
                        },
                        ReplicaModifications: {
                          type: 'structure',
                          required: ['Status'],
                          members: {
                            Status: {}
                          }
                        }
                      }
                    },
                    ExistingObjectReplication: {
                      type: 'structure',
                      required: ['Status'],
                      members: {
                        Status: {}
                      }
                    },
                    Destination: {
                      type: 'structure',
                      required: ['Bucket'],
                      members: {
                        Bucket: {},
                        Account: {},
                        StorageClass: {},
                        AccessControlTranslation: {
                          type: 'structure',
                          required: ['Owner'],
                          members: {
                            Owner: {}
                          }
                        },
                        EncryptionConfiguration: {
                          type: 'structure',
                          members: {
                            ReplicaKmsKeyID: {}
                          }
                        },
                        ReplicationTime: {
                          type: 'structure',
                          required: ['Status', 'Time'],
                          members: {
                            Status: {},
                            Time: {
                              shape: 'S8p'
                            }
                          }
                        },
                        Metrics: {
                          type: 'structure',
                          required: ['Status'],
                          members: {
                            Status: {},
                            EventThreshold: {
                              shape: 'S8p'
                            }
                          }
                        }
                      }
                    },
                    DeleteMarkerReplication: {
                      type: 'structure',
                      members: {
                        Status: {}
                      }
                    }
                  }
                },
                flattened: true
              }
            }
          },
          S8p: {
            type: 'structure',
            members: {
              Minutes: {
                type: 'integer'
              }
            }
          },
          S96: {
            type: 'structure',
            required: ['HostName'],
            members: {
              HostName: {},
              Protocol: {}
            }
          },
          S99: {
            type: 'structure',
            required: ['Suffix'],
            members: {
              Suffix: {}
            }
          },
          S9b: {
            type: 'structure',
            required: ['Key'],
            members: {
              Key: {}
            }
          },
          S9c: {
            type: 'list',
            member: {
              locationName: 'RoutingRule',
              type: 'structure',
              required: ['Redirect'],
              members: {
                Condition: {
                  type: 'structure',
                  members: {
                    HttpErrorCodeReturnedEquals: {},
                    KeyPrefixEquals: {}
                  }
                },
                Redirect: {
                  type: 'structure',
                  members: {
                    HostName: {},
                    HttpRedirectCode: {},
                    Protocol: {},
                    ReplaceKeyPrefixWith: {},
                    ReplaceKeyWith: {}
                  }
                }
              }
            }
          },
          Sar: {
            type: 'structure',
            members: {
              Status: {}
            }
          },
          Sau: {
            type: 'structure',
            members: {
              ObjectLockEnabled: {},
              Rule: {
                type: 'structure',
                members: {
                  DefaultRetention: {
                    type: 'structure',
                    members: {
                      Mode: {},
                      Days: {
                        type: 'integer'
                      },
                      Years: {
                        type: 'integer'
                      }
                    }
                  }
                }
              }
            }
          },
          Sb2: {
            type: 'structure',
            members: {
              Mode: {},
              RetainUntilDate: {
                shape: 'S5t'
              }
            }
          },
          Sb9: {
            type: 'structure',
            members: {
              BlockPublicAcls: {
                locationName: 'BlockPublicAcls',
                type: 'boolean'
              },
              IgnorePublicAcls: {
                locationName: 'IgnorePublicAcls',
                type: 'boolean'
              },
              BlockPublicPolicy: {
                locationName: 'BlockPublicPolicy',
                type: 'boolean'
              },
              RestrictPublicBuckets: {
                locationName: 'RestrictPublicBuckets',
                type: 'boolean'
              }
            }
          },
          Sby: {
            type: 'list',
            member: {
              locationName: 'Bucket',
              type: 'structure',
              members: {
                Name: {},
                CreationDate: {
                  type: 'timestamp'
                }
              }
            }
          },
          Sch: {
            type: 'structure',
            members: {
              ID: {},
              DisplayName: {}
            }
          },
          Sci: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Prefix: {}
              }
            },
            flattened: true
          },
          Scn: {
            type: 'list',
            member: {}
          },
          Sct: {
            type: 'list',
            member: {},
            flattened: true
          },
          Scw: {
            type: 'structure',
            members: {
              IsRestoreInProgress: {
                type: 'boolean'
              },
              RestoreExpiryDate: {
                type: 'timestamp'
              }
            }
          },
          Sd5: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Key: {},
                LastModified: {
                  type: 'timestamp'
                },
                ETag: {},
                ChecksumAlgorithm: {
                  shape: 'Sct'
                },
                Size: {
                  type: 'long'
                },
                StorageClass: {},
                Owner: {
                  shape: 'S3q'
                },
                RestoreStatus: {
                  shape: 'Scw'
                }
              }
            },
            flattened: true
          },
          Sdk: {
            type: 'structure',
            members: {
              Grants: {
                shape: 'S3t',
                locationName: 'AccessControlList'
              },
              Owner: {
                shape: 'S3q'
              }
            }
          },
          Sea: {
            type: 'structure',
            required: ['TagSet'],
            members: {
              TagSet: {
                shape: 'S48'
              }
            }
          },
          Sf0: {
            type: 'structure',
            members: {
              CSV: {
                type: 'structure',
                members: {
                  FileHeaderInfo: {},
                  Comments: {},
                  QuoteEscapeCharacter: {},
                  RecordDelimiter: {},
                  FieldDelimiter: {},
                  QuoteCharacter: {},
                  AllowQuotedRecordDelimiter: {
                    type: 'boolean'
                  }
                }
              },
              CompressionType: {},
              JSON: {
                type: 'structure',
                members: {
                  Type: {}
                }
              },
              Parquet: {
                type: 'structure',
                members: {}
              }
            }
          },
          Sff: {
            type: 'structure',
            members: {
              CSV: {
                type: 'structure',
                members: {
                  QuoteFields: {},
                  QuoteEscapeCharacter: {},
                  RecordDelimiter: {},
                  FieldDelimiter: {},
                  QuoteCharacter: {}
                }
              },
              JSON: {
                type: 'structure',
                members: {
                  RecordDelimiter: {}
                }
              }
            }
          }
        },
        clientContextParams: {
          Accelerate: {
            documentation: 'Enables this client to use S3 Transfer Acceleration endpoints.',
            type: 'boolean'
          },
          DisableMultiRegionAccessPoints: {
            documentation: 'Disables this client\'s usage of Multi-Region Access Points.',
            type: 'boolean'
          },
          DisableS3ExpressSessionAuth: {
            documentation: 'Disables this client\'s usage of Session Auth for S3Express\n      buckets and reverts to using conventional SigV4 for those.',
            type: 'boolean'
          },
          ForcePathStyle: {
            documentation: 'Forces this client to use path-style addressing for buckets.',
            type: 'boolean'
          },
          UseArnRegion: {
            documentation: 'Enables this client to use an ARN\'s region when constructing an endpoint instead of the client\'s configured region.',
            type: 'boolean'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=4a18b877c94984cf7127545404fdbbf50d7137db.js.map