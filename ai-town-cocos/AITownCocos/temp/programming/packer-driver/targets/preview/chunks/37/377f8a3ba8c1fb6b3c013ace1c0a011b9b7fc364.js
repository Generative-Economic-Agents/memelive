System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2019-01-02',
          endpointPrefix: 'qldb',
          jsonVersion: '1.0',
          protocol: 'rest-json',
          serviceAbbreviation: 'QLDB',
          serviceFullName: 'Amazon QLDB',
          serviceId: 'QLDB',
          signatureVersion: 'v4',
          signingName: 'qldb',
          uid: 'qldb-2019-01-02'
        },
        operations: {
          CancelJournalKinesisStream: {
            http: {
              method: 'DELETE',
              requestUri: '/ledgers/{name}/journal-kinesis-streams/{streamId}'
            },
            input: {
              type: 'structure',
              required: ['LedgerName', 'StreamId'],
              members: {
                LedgerName: {
                  location: 'uri',
                  locationName: 'name'
                },
                StreamId: {
                  location: 'uri',
                  locationName: 'streamId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                StreamId: {}
              }
            }
          },
          CreateLedger: {
            http: {
              requestUri: '/ledgers'
            },
            input: {
              type: 'structure',
              required: ['Name', 'PermissionsMode'],
              members: {
                Name: {},
                Tags: {
                  shape: 'S6'
                },
                PermissionsMode: {},
                DeletionProtection: {
                  type: 'boolean'
                },
                KmsKey: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Name: {},
                Arn: {},
                State: {},
                CreationDateTime: {
                  type: 'timestamp'
                },
                PermissionsMode: {},
                DeletionProtection: {
                  type: 'boolean'
                },
                KmsKeyArn: {}
              }
            }
          },
          DeleteLedger: {
            http: {
              method: 'DELETE',
              requestUri: '/ledgers/{name}'
            },
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {
                  location: 'uri',
                  locationName: 'name'
                }
              }
            }
          },
          DescribeJournalKinesisStream: {
            http: {
              method: 'GET',
              requestUri: '/ledgers/{name}/journal-kinesis-streams/{streamId}'
            },
            input: {
              type: 'structure',
              required: ['LedgerName', 'StreamId'],
              members: {
                LedgerName: {
                  location: 'uri',
                  locationName: 'name'
                },
                StreamId: {
                  location: 'uri',
                  locationName: 'streamId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Stream: {
                  shape: 'Sj'
                }
              }
            }
          },
          DescribeJournalS3Export: {
            http: {
              method: 'GET',
              requestUri: '/ledgers/{name}/journal-s3-exports/{exportId}'
            },
            input: {
              type: 'structure',
              required: ['Name', 'ExportId'],
              members: {
                Name: {
                  location: 'uri',
                  locationName: 'name'
                },
                ExportId: {
                  location: 'uri',
                  locationName: 'exportId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['ExportDescription'],
              members: {
                ExportDescription: {
                  shape: 'Sr'
                }
              }
            }
          },
          DescribeLedger: {
            http: {
              method: 'GET',
              requestUri: '/ledgers/{name}'
            },
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {
                  location: 'uri',
                  locationName: 'name'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Name: {},
                Arn: {},
                State: {},
                CreationDateTime: {
                  type: 'timestamp'
                },
                PermissionsMode: {},
                DeletionProtection: {
                  type: 'boolean'
                },
                EncryptionDescription: {
                  shape: 'S11'
                }
              }
            }
          },
          ExportJournalToS3: {
            http: {
              requestUri: '/ledgers/{name}/journal-s3-exports'
            },
            input: {
              type: 'structure',
              required: ['Name', 'InclusiveStartTime', 'ExclusiveEndTime', 'S3ExportConfiguration', 'RoleArn'],
              members: {
                Name: {
                  location: 'uri',
                  locationName: 'name'
                },
                InclusiveStartTime: {
                  type: 'timestamp'
                },
                ExclusiveEndTime: {
                  type: 'timestamp'
                },
                S3ExportConfiguration: {
                  shape: 'St'
                },
                RoleArn: {},
                OutputFormat: {}
              }
            },
            output: {
              type: 'structure',
              required: ['ExportId'],
              members: {
                ExportId: {}
              }
            }
          },
          GetBlock: {
            http: {
              requestUri: '/ledgers/{name}/block'
            },
            input: {
              type: 'structure',
              required: ['Name', 'BlockAddress'],
              members: {
                Name: {
                  location: 'uri',
                  locationName: 'name'
                },
                BlockAddress: {
                  shape: 'S16'
                },
                DigestTipAddress: {
                  shape: 'S16'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Block'],
              members: {
                Block: {
                  shape: 'S16'
                },
                Proof: {
                  shape: 'S16'
                }
              }
            }
          },
          GetDigest: {
            http: {
              requestUri: '/ledgers/{name}/digest'
            },
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {
                  location: 'uri',
                  locationName: 'name'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Digest', 'DigestTipAddress'],
              members: {
                Digest: {
                  type: 'blob'
                },
                DigestTipAddress: {
                  shape: 'S16'
                }
              }
            }
          },
          GetRevision: {
            http: {
              requestUri: '/ledgers/{name}/revision'
            },
            input: {
              type: 'structure',
              required: ['Name', 'BlockAddress', 'DocumentId'],
              members: {
                Name: {
                  location: 'uri',
                  locationName: 'name'
                },
                BlockAddress: {
                  shape: 'S16'
                },
                DocumentId: {},
                DigestTipAddress: {
                  shape: 'S16'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Revision'],
              members: {
                Proof: {
                  shape: 'S16'
                },
                Revision: {
                  shape: 'S16'
                }
              }
            }
          },
          ListJournalKinesisStreamsForLedger: {
            http: {
              method: 'GET',
              requestUri: '/ledgers/{name}/journal-kinesis-streams'
            },
            input: {
              type: 'structure',
              required: ['LedgerName'],
              members: {
                LedgerName: {
                  location: 'uri',
                  locationName: 'name'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'max_results',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'next_token'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Streams: {
                  type: 'list',
                  member: {
                    shape: 'Sj'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListJournalS3Exports: {
            http: {
              method: 'GET',
              requestUri: '/journal-s3-exports'
            },
            input: {
              type: 'structure',
              members: {
                MaxResults: {
                  location: 'querystring',
                  locationName: 'max_results',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'next_token'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                JournalS3Exports: {
                  shape: 'S1l'
                },
                NextToken: {}
              }
            }
          },
          ListJournalS3ExportsForLedger: {
            http: {
              method: 'GET',
              requestUri: '/ledgers/{name}/journal-s3-exports'
            },
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {
                  location: 'uri',
                  locationName: 'name'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'max_results',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'next_token'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                JournalS3Exports: {
                  shape: 'S1l'
                },
                NextToken: {}
              }
            }
          },
          ListLedgers: {
            http: {
              method: 'GET',
              requestUri: '/ledgers'
            },
            input: {
              type: 'structure',
              members: {
                MaxResults: {
                  location: 'querystring',
                  locationName: 'max_results',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'next_token'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Ledgers: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Name: {},
                      State: {},
                      CreationDateTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListTagsForResource: {
            http: {
              method: 'GET',
              requestUri: '/tags/{resourceArn}'
            },
            input: {
              type: 'structure',
              required: ['ResourceArn'],
              members: {
                ResourceArn: {
                  location: 'uri',
                  locationName: 'resourceArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Tags: {
                  shape: 'S6'
                }
              }
            }
          },
          StreamJournalToKinesis: {
            http: {
              requestUri: '/ledgers/{name}/journal-kinesis-streams'
            },
            input: {
              type: 'structure',
              required: ['LedgerName', 'RoleArn', 'InclusiveStartTime', 'KinesisConfiguration', 'StreamName'],
              members: {
                LedgerName: {
                  location: 'uri',
                  locationName: 'name'
                },
                RoleArn: {},
                Tags: {
                  shape: 'S6'
                },
                InclusiveStartTime: {
                  type: 'timestamp'
                },
                ExclusiveEndTime: {
                  type: 'timestamp'
                },
                KinesisConfiguration: {
                  shape: 'Sl'
                },
                StreamName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                StreamId: {}
              }
            }
          },
          TagResource: {
            http: {
              requestUri: '/tags/{resourceArn}'
            },
            input: {
              type: 'structure',
              required: ['ResourceArn', 'Tags'],
              members: {
                ResourceArn: {
                  location: 'uri',
                  locationName: 'resourceArn'
                },
                Tags: {
                  shape: 'S6'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UntagResource: {
            http: {
              method: 'DELETE',
              requestUri: '/tags/{resourceArn}'
            },
            input: {
              type: 'structure',
              required: ['ResourceArn', 'TagKeys'],
              members: {
                ResourceArn: {
                  location: 'uri',
                  locationName: 'resourceArn'
                },
                TagKeys: {
                  location: 'querystring',
                  locationName: 'tagKeys',
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateLedger: {
            http: {
              method: 'PATCH',
              requestUri: '/ledgers/{name}'
            },
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {
                  location: 'uri',
                  locationName: 'name'
                },
                DeletionProtection: {
                  type: 'boolean'
                },
                KmsKey: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Name: {},
                Arn: {},
                State: {},
                CreationDateTime: {
                  type: 'timestamp'
                },
                DeletionProtection: {
                  type: 'boolean'
                },
                EncryptionDescription: {
                  shape: 'S11'
                }
              }
            }
          },
          UpdateLedgerPermissionsMode: {
            http: {
              method: 'PATCH',
              requestUri: '/ledgers/{name}/permissions-mode'
            },
            input: {
              type: 'structure',
              required: ['Name', 'PermissionsMode'],
              members: {
                Name: {
                  location: 'uri',
                  locationName: 'name'
                },
                PermissionsMode: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Name: {},
                Arn: {},
                PermissionsMode: {}
              }
            }
          }
        },
        shapes: {
          S6: {
            type: 'map',
            key: {},
            value: {}
          },
          Sj: {
            type: 'structure',
            required: ['LedgerName', 'RoleArn', 'StreamId', 'Status', 'KinesisConfiguration', 'StreamName'],
            members: {
              LedgerName: {},
              CreationTime: {
                type: 'timestamp'
              },
              InclusiveStartTime: {
                type: 'timestamp'
              },
              ExclusiveEndTime: {
                type: 'timestamp'
              },
              RoleArn: {},
              StreamId: {},
              Arn: {},
              Status: {},
              KinesisConfiguration: {
                shape: 'Sl'
              },
              ErrorCause: {},
              StreamName: {}
            }
          },
          Sl: {
            type: 'structure',
            required: ['StreamArn'],
            members: {
              StreamArn: {},
              AggregationEnabled: {
                type: 'boolean'
              }
            }
          },
          Sr: {
            type: 'structure',
            required: ['LedgerName', 'ExportId', 'ExportCreationTime', 'Status', 'InclusiveStartTime', 'ExclusiveEndTime', 'S3ExportConfiguration', 'RoleArn'],
            members: {
              LedgerName: {},
              ExportId: {},
              ExportCreationTime: {
                type: 'timestamp'
              },
              Status: {},
              InclusiveStartTime: {
                type: 'timestamp'
              },
              ExclusiveEndTime: {
                type: 'timestamp'
              },
              S3ExportConfiguration: {
                shape: 'St'
              },
              RoleArn: {},
              OutputFormat: {}
            }
          },
          St: {
            type: 'structure',
            required: ['Bucket', 'Prefix', 'EncryptionConfiguration'],
            members: {
              Bucket: {},
              Prefix: {},
              EncryptionConfiguration: {
                type: 'structure',
                required: ['ObjectEncryptionType'],
                members: {
                  ObjectEncryptionType: {},
                  KmsKeyArn: {}
                }
              }
            }
          },
          S11: {
            type: 'structure',
            required: ['KmsKeyArn', 'EncryptionStatus'],
            members: {
              KmsKeyArn: {},
              EncryptionStatus: {},
              InaccessibleKmsKeyDateTime: {
                type: 'timestamp'
              }
            }
          },
          S16: {
            type: 'structure',
            members: {
              IonText: {
                type: 'string',
                sensitive: true
              }
            },
            sensitive: true
          },
          S1l: {
            type: 'list',
            member: {
              shape: 'Sr'
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=377f8a3ba8c1fb6b3c013ace1c0a011b9b7fc364.js.map