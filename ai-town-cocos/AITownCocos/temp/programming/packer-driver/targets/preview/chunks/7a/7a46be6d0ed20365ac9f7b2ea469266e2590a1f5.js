System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2018-04-10',
          endpointPrefix: 'backupstorage',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceFullName: 'AWS Backup Storage',
          serviceId: 'BackupStorage',
          signatureVersion: 'v4',
          signingName: 'backup-storage',
          uid: 'backupstorage-2018-04-10'
        },
        operations: {
          DeleteObject: {
            http: {
              method: 'DELETE',
              requestUri: '/backup-jobs/{jobId}/object/{objectName}'
            },
            input: {
              type: 'structure',
              required: ['BackupJobId', 'ObjectName'],
              members: {
                BackupJobId: {
                  location: 'uri',
                  locationName: 'jobId'
                },
                ObjectName: {
                  location: 'uri',
                  locationName: 'objectName'
                }
              }
            }
          },
          GetChunk: {
            http: {
              method: 'GET',
              requestUri: '/restore-jobs/{jobId}/chunk/{chunkToken}'
            },
            input: {
              type: 'structure',
              required: ['StorageJobId', 'ChunkToken'],
              members: {
                StorageJobId: {
                  location: 'uri',
                  locationName: 'jobId'
                },
                ChunkToken: {
                  location: 'uri',
                  locationName: 'chunkToken'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Data', 'Length', 'Checksum', 'ChecksumAlgorithm'],
              members: {
                Data: {
                  shape: 'S5'
                },
                Length: {
                  location: 'header',
                  locationName: 'x-amz-data-length',
                  type: 'long'
                },
                Checksum: {
                  location: 'header',
                  locationName: 'x-amz-checksum'
                },
                ChecksumAlgorithm: {
                  location: 'header',
                  locationName: 'x-amz-checksum-algorithm'
                }
              },
              payload: 'Data'
            }
          },
          GetObjectMetadata: {
            http: {
              method: 'GET',
              requestUri: '/restore-jobs/{jobId}/object/{objectToken}/metadata'
            },
            input: {
              type: 'structure',
              required: ['StorageJobId', 'ObjectToken'],
              members: {
                StorageJobId: {
                  location: 'uri',
                  locationName: 'jobId'
                },
                ObjectToken: {
                  location: 'uri',
                  locationName: 'objectToken'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                MetadataString: {
                  location: 'header',
                  locationName: 'x-amz-metadata-string'
                },
                MetadataBlob: {
                  shape: 'S5'
                },
                MetadataBlobLength: {
                  location: 'header',
                  locationName: 'x-amz-data-length',
                  type: 'long'
                },
                MetadataBlobChecksum: {
                  location: 'header',
                  locationName: 'x-amz-checksum'
                },
                MetadataBlobChecksumAlgorithm: {
                  location: 'header',
                  locationName: 'x-amz-checksum-algorithm'
                }
              },
              payload: 'MetadataBlob'
            }
          },
          ListChunks: {
            http: {
              method: 'GET',
              requestUri: '/restore-jobs/{jobId}/chunks/{objectToken}/list'
            },
            input: {
              type: 'structure',
              required: ['StorageJobId', 'ObjectToken'],
              members: {
                StorageJobId: {
                  location: 'uri',
                  locationName: 'jobId'
                },
                ObjectToken: {
                  location: 'uri',
                  locationName: 'objectToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'max-results',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'next-token'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['ChunkList'],
              members: {
                ChunkList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Index', 'Length', 'Checksum', 'ChecksumAlgorithm', 'ChunkToken'],
                    members: {
                      Index: {
                        type: 'long'
                      },
                      Length: {
                        type: 'long'
                      },
                      Checksum: {},
                      ChecksumAlgorithm: {},
                      ChunkToken: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListObjects: {
            http: {
              method: 'GET',
              requestUri: '/restore-jobs/{jobId}/objects/list'
            },
            input: {
              type: 'structure',
              required: ['StorageJobId'],
              members: {
                StorageJobId: {
                  location: 'uri',
                  locationName: 'jobId'
                },
                StartingObjectName: {
                  location: 'querystring',
                  locationName: 'starting-object-name'
                },
                StartingObjectPrefix: {
                  location: 'querystring',
                  locationName: 'starting-object-prefix'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'max-results',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'next-token'
                },
                CreatedBefore: {
                  location: 'querystring',
                  locationName: 'created-before',
                  type: 'timestamp'
                },
                CreatedAfter: {
                  location: 'querystring',
                  locationName: 'created-after',
                  type: 'timestamp'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['ObjectList'],
              members: {
                ObjectList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Name', 'ObjectChecksum', 'ObjectChecksumAlgorithm', 'ObjectToken'],
                    members: {
                      Name: {},
                      ChunksCount: {
                        type: 'long'
                      },
                      MetadataString: {},
                      ObjectChecksum: {},
                      ObjectChecksumAlgorithm: {},
                      ObjectToken: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          NotifyObjectComplete: {
            http: {
              method: 'PUT',
              requestUri: '/backup-jobs/{jobId}/object/{uploadId}/complete'
            },
            input: {
              type: 'structure',
              required: ['BackupJobId', 'UploadId', 'ObjectChecksum', 'ObjectChecksumAlgorithm'],
              members: {
                BackupJobId: {
                  location: 'uri',
                  locationName: 'jobId'
                },
                UploadId: {
                  location: 'uri',
                  locationName: 'uploadId'
                },
                ObjectChecksum: {
                  location: 'querystring',
                  locationName: 'checksum'
                },
                ObjectChecksumAlgorithm: {
                  location: 'querystring',
                  locationName: 'checksum-algorithm'
                },
                MetadataString: {
                  location: 'querystring',
                  locationName: 'metadata-string'
                },
                MetadataBlob: {
                  shape: 'S5'
                },
                MetadataBlobLength: {
                  location: 'querystring',
                  locationName: 'metadata-blob-length',
                  type: 'long'
                },
                MetadataBlobChecksum: {
                  location: 'querystring',
                  locationName: 'metadata-checksum'
                },
                MetadataBlobChecksumAlgorithm: {
                  location: 'querystring',
                  locationName: 'metadata-checksum-algorithm'
                }
              },
              payload: 'MetadataBlob'
            },
            output: {
              type: 'structure',
              required: ['ObjectChecksum', 'ObjectChecksumAlgorithm'],
              members: {
                ObjectChecksum: {},
                ObjectChecksumAlgorithm: {}
              }
            },
            authtype: 'v4-unsigned-body'
          },
          PutChunk: {
            http: {
              method: 'PUT',
              requestUri: '/backup-jobs/{jobId}/chunk/{uploadId}/{chunkIndex}'
            },
            input: {
              type: 'structure',
              required: ['BackupJobId', 'UploadId', 'ChunkIndex', 'Data', 'Length', 'Checksum', 'ChecksumAlgorithm'],
              members: {
                BackupJobId: {
                  location: 'uri',
                  locationName: 'jobId'
                },
                UploadId: {
                  location: 'uri',
                  locationName: 'uploadId'
                },
                ChunkIndex: {
                  location: 'uri',
                  locationName: 'chunkIndex',
                  type: 'long'
                },
                Data: {
                  shape: 'S5'
                },
                Length: {
                  location: 'querystring',
                  locationName: 'length',
                  type: 'long'
                },
                Checksum: {
                  location: 'querystring',
                  locationName: 'checksum'
                },
                ChecksumAlgorithm: {
                  location: 'querystring',
                  locationName: 'checksum-algorithm'
                }
              },
              payload: 'Data'
            },
            output: {
              type: 'structure',
              required: ['ChunkChecksum', 'ChunkChecksumAlgorithm'],
              members: {
                ChunkChecksum: {},
                ChunkChecksumAlgorithm: {}
              }
            },
            authtype: 'v4-unsigned-body'
          },
          PutObject: {
            http: {
              method: 'PUT',
              requestUri: '/backup-jobs/{jobId}/object/{objectName}/put-object'
            },
            input: {
              type: 'structure',
              required: ['BackupJobId', 'ObjectName'],
              members: {
                BackupJobId: {
                  location: 'uri',
                  locationName: 'jobId'
                },
                ObjectName: {
                  location: 'uri',
                  locationName: 'objectName'
                },
                MetadataString: {
                  location: 'querystring',
                  locationName: 'metadata-string'
                },
                InlineChunk: {
                  shape: 'S5'
                },
                InlineChunkLength: {
                  location: 'querystring',
                  locationName: 'length',
                  type: 'long'
                },
                InlineChunkChecksum: {
                  location: 'querystring',
                  locationName: 'checksum'
                },
                InlineChunkChecksumAlgorithm: {
                  location: 'querystring',
                  locationName: 'checksum-algorithm'
                },
                ObjectChecksum: {
                  location: 'querystring',
                  locationName: 'object-checksum'
                },
                ObjectChecksumAlgorithm: {
                  location: 'querystring',
                  locationName: 'object-checksum-algorithm'
                },
                ThrowOnDuplicate: {
                  location: 'querystring',
                  locationName: 'throwOnDuplicate',
                  type: 'boolean'
                }
              },
              payload: 'InlineChunk'
            },
            output: {
              type: 'structure',
              required: ['InlineChunkChecksum', 'InlineChunkChecksumAlgorithm', 'ObjectChecksum', 'ObjectChecksumAlgorithm'],
              members: {
                InlineChunkChecksum: {},
                InlineChunkChecksumAlgorithm: {},
                ObjectChecksum: {},
                ObjectChecksumAlgorithm: {}
              }
            },
            authtype: 'v4-unsigned-body'
          },
          StartObject: {
            http: {
              method: 'PUT',
              requestUri: '/backup-jobs/{jobId}/object/{objectName}'
            },
            input: {
              type: 'structure',
              required: ['BackupJobId', 'ObjectName'],
              members: {
                BackupJobId: {
                  location: 'uri',
                  locationName: 'jobId'
                },
                ObjectName: {
                  location: 'uri',
                  locationName: 'objectName'
                },
                ThrowOnDuplicate: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['UploadId'],
              members: {
                UploadId: {}
              }
            }
          }
        },
        shapes: {
          S5: {
            type: 'blob',
            streaming: true
          }
        }
      });
    }
  };
});
//# sourceMappingURL=7a46be6d0ed20365ac9f7b2ea469266e2590a1f5.js.map