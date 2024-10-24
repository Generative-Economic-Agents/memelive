System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2019-11-02',
          endpointPrefix: 'ebs',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceAbbreviation: 'Amazon EBS',
          serviceFullName: 'Amazon Elastic Block Store',
          serviceId: 'EBS',
          signatureVersion: 'v4',
          uid: 'ebs-2019-11-02'
        },
        operations: {
          CompleteSnapshot: {
            http: {
              requestUri: '/snapshots/completion/{snapshotId}',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['SnapshotId', 'ChangedBlocksCount'],
              members: {
                SnapshotId: {
                  location: 'uri',
                  locationName: 'snapshotId'
                },
                ChangedBlocksCount: {
                  location: 'header',
                  locationName: 'x-amz-ChangedBlocksCount',
                  type: 'integer'
                },
                Checksum: {
                  location: 'header',
                  locationName: 'x-amz-Checksum'
                },
                ChecksumAlgorithm: {
                  location: 'header',
                  locationName: 'x-amz-Checksum-Algorithm'
                },
                ChecksumAggregationMethod: {
                  location: 'header',
                  locationName: 'x-amz-Checksum-Aggregation-Method'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Status: {}
              }
            }
          },
          GetSnapshotBlock: {
            http: {
              method: 'GET',
              requestUri: '/snapshots/{snapshotId}/blocks/{blockIndex}'
            },
            input: {
              type: 'structure',
              required: ['SnapshotId', 'BlockIndex', 'BlockToken'],
              members: {
                SnapshotId: {
                  location: 'uri',
                  locationName: 'snapshotId'
                },
                BlockIndex: {
                  location: 'uri',
                  locationName: 'blockIndex',
                  type: 'integer'
                },
                BlockToken: {
                  location: 'querystring',
                  locationName: 'blockToken'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                DataLength: {
                  location: 'header',
                  locationName: 'x-amz-Data-Length',
                  type: 'integer'
                },
                BlockData: {
                  shape: 'Se'
                },
                Checksum: {
                  location: 'header',
                  locationName: 'x-amz-Checksum'
                },
                ChecksumAlgorithm: {
                  location: 'header',
                  locationName: 'x-amz-Checksum-Algorithm'
                }
              },
              payload: 'BlockData'
            }
          },
          ListChangedBlocks: {
            http: {
              method: 'GET',
              requestUri: '/snapshots/{secondSnapshotId}/changedblocks'
            },
            input: {
              type: 'structure',
              required: ['SecondSnapshotId'],
              members: {
                FirstSnapshotId: {
                  location: 'querystring',
                  locationName: 'firstSnapshotId'
                },
                SecondSnapshotId: {
                  location: 'uri',
                  locationName: 'secondSnapshotId'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'pageToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                StartingBlockIndex: {
                  location: 'querystring',
                  locationName: 'startingBlockIndex',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ChangedBlocks: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      BlockIndex: {
                        type: 'integer'
                      },
                      FirstBlockToken: {},
                      SecondBlockToken: {}
                    },
                    sensitive: true
                  }
                },
                ExpiryTime: {
                  type: 'timestamp'
                },
                VolumeSize: {
                  type: 'long'
                },
                BlockSize: {
                  type: 'integer'
                },
                NextToken: {}
              }
            }
          },
          ListSnapshotBlocks: {
            http: {
              method: 'GET',
              requestUri: '/snapshots/{snapshotId}/blocks'
            },
            input: {
              type: 'structure',
              required: ['SnapshotId'],
              members: {
                SnapshotId: {
                  location: 'uri',
                  locationName: 'snapshotId'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'pageToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                StartingBlockIndex: {
                  location: 'querystring',
                  locationName: 'startingBlockIndex',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Blocks: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      BlockIndex: {
                        type: 'integer'
                      },
                      BlockToken: {}
                    }
                  },
                  sensitive: true
                },
                ExpiryTime: {
                  type: 'timestamp'
                },
                VolumeSize: {
                  type: 'long'
                },
                BlockSize: {
                  type: 'integer'
                },
                NextToken: {}
              }
            }
          },
          PutSnapshotBlock: {
            http: {
              method: 'PUT',
              requestUri: '/snapshots/{snapshotId}/blocks/{blockIndex}',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['SnapshotId', 'BlockIndex', 'BlockData', 'DataLength', 'Checksum', 'ChecksumAlgorithm'],
              members: {
                SnapshotId: {
                  location: 'uri',
                  locationName: 'snapshotId'
                },
                BlockIndex: {
                  location: 'uri',
                  locationName: 'blockIndex',
                  type: 'integer'
                },
                BlockData: {
                  shape: 'Se'
                },
                DataLength: {
                  location: 'header',
                  locationName: 'x-amz-Data-Length',
                  type: 'integer'
                },
                Progress: {
                  location: 'header',
                  locationName: 'x-amz-Progress',
                  type: 'integer'
                },
                Checksum: {
                  location: 'header',
                  locationName: 'x-amz-Checksum'
                },
                ChecksumAlgorithm: {
                  location: 'header',
                  locationName: 'x-amz-Checksum-Algorithm'
                }
              },
              payload: 'BlockData'
            },
            output: {
              type: 'structure',
              members: {
                Checksum: {
                  location: 'header',
                  locationName: 'x-amz-Checksum'
                },
                ChecksumAlgorithm: {
                  location: 'header',
                  locationName: 'x-amz-Checksum-Algorithm'
                }
              }
            },
            authtype: 'v4-unsigned-body'
          },
          StartSnapshot: {
            http: {
              requestUri: '/snapshots',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['VolumeSize'],
              members: {
                VolumeSize: {
                  type: 'long'
                },
                ParentSnapshotId: {},
                Tags: {
                  shape: 'Sw'
                },
                Description: {},
                ClientToken: {
                  idempotencyToken: true
                },
                Encrypted: {
                  type: 'boolean'
                },
                KmsKeyArn: {
                  shape: 'S13'
                },
                Timeout: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Description: {},
                SnapshotId: {},
                OwnerId: {},
                Status: {},
                StartTime: {
                  type: 'timestamp'
                },
                VolumeSize: {
                  type: 'long'
                },
                BlockSize: {
                  type: 'integer'
                },
                Tags: {
                  shape: 'Sw'
                },
                ParentSnapshotId: {},
                KmsKeyArn: {
                  shape: 'S13'
                },
                SseType: {}
              }
            }
          }
        },
        shapes: {
          Se: {
            type: 'blob',
            sensitive: true,
            streaming: true
          },
          Sw: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Key: {},
                Value: {}
              }
            }
          },
          S13: {
            type: 'string',
            sensitive: true
          }
        }
      });
    }
  };
});
//# sourceMappingURL=e1ac3d36b94e51b4699648033e86eca332bb6034.js.map