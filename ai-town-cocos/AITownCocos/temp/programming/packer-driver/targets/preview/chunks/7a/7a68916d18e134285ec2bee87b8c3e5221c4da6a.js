System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2014-06-30',
          endpointPrefix: 'cognito-sync',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceFullName: 'Amazon Cognito Sync',
          serviceId: 'Cognito Sync',
          signatureVersion: 'v4',
          uid: 'cognito-sync-2014-06-30'
        },
        operations: {
          BulkPublish: {
            http: {
              requestUri: '/identitypools/{IdentityPoolId}/bulkpublish',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['IdentityPoolId'],
              members: {
                IdentityPoolId: {
                  location: 'uri',
                  locationName: 'IdentityPoolId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                IdentityPoolId: {}
              }
            }
          },
          DeleteDataset: {
            http: {
              method: 'DELETE',
              requestUri: '/identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['IdentityPoolId', 'IdentityId', 'DatasetName'],
              members: {
                IdentityPoolId: {
                  location: 'uri',
                  locationName: 'IdentityPoolId'
                },
                IdentityId: {
                  location: 'uri',
                  locationName: 'IdentityId'
                },
                DatasetName: {
                  location: 'uri',
                  locationName: 'DatasetName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Dataset: {
                  shape: 'S8'
                }
              }
            }
          },
          DescribeDataset: {
            http: {
              method: 'GET',
              requestUri: '/identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['IdentityPoolId', 'IdentityId', 'DatasetName'],
              members: {
                IdentityPoolId: {
                  location: 'uri',
                  locationName: 'IdentityPoolId'
                },
                IdentityId: {
                  location: 'uri',
                  locationName: 'IdentityId'
                },
                DatasetName: {
                  location: 'uri',
                  locationName: 'DatasetName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Dataset: {
                  shape: 'S8'
                }
              }
            }
          },
          DescribeIdentityPoolUsage: {
            http: {
              method: 'GET',
              requestUri: '/identitypools/{IdentityPoolId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['IdentityPoolId'],
              members: {
                IdentityPoolId: {
                  location: 'uri',
                  locationName: 'IdentityPoolId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                IdentityPoolUsage: {
                  shape: 'Sg'
                }
              }
            }
          },
          DescribeIdentityUsage: {
            http: {
              method: 'GET',
              requestUri: '/identitypools/{IdentityPoolId}/identities/{IdentityId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['IdentityPoolId', 'IdentityId'],
              members: {
                IdentityPoolId: {
                  location: 'uri',
                  locationName: 'IdentityPoolId'
                },
                IdentityId: {
                  location: 'uri',
                  locationName: 'IdentityId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                IdentityUsage: {
                  type: 'structure',
                  members: {
                    IdentityId: {},
                    IdentityPoolId: {},
                    LastModifiedDate: {
                      type: 'timestamp'
                    },
                    DatasetCount: {
                      type: 'integer'
                    },
                    DataStorage: {
                      type: 'long'
                    }
                  }
                }
              }
            }
          },
          GetBulkPublishDetails: {
            http: {
              requestUri: '/identitypools/{IdentityPoolId}/getBulkPublishDetails',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['IdentityPoolId'],
              members: {
                IdentityPoolId: {
                  location: 'uri',
                  locationName: 'IdentityPoolId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                IdentityPoolId: {},
                BulkPublishStartTime: {
                  type: 'timestamp'
                },
                BulkPublishCompleteTime: {
                  type: 'timestamp'
                },
                BulkPublishStatus: {},
                FailureMessage: {}
              }
            }
          },
          GetCognitoEvents: {
            http: {
              method: 'GET',
              requestUri: '/identitypools/{IdentityPoolId}/events',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['IdentityPoolId'],
              members: {
                IdentityPoolId: {
                  location: 'uri',
                  locationName: 'IdentityPoolId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Events: {
                  shape: 'Sq'
                }
              }
            }
          },
          GetIdentityPoolConfiguration: {
            http: {
              method: 'GET',
              requestUri: '/identitypools/{IdentityPoolId}/configuration',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['IdentityPoolId'],
              members: {
                IdentityPoolId: {
                  location: 'uri',
                  locationName: 'IdentityPoolId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                IdentityPoolId: {},
                PushSync: {
                  shape: 'Sv'
                },
                CognitoStreams: {
                  shape: 'Sz'
                }
              }
            }
          },
          ListDatasets: {
            http: {
              method: 'GET',
              requestUri: '/identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['IdentityId', 'IdentityPoolId'],
              members: {
                IdentityPoolId: {
                  location: 'uri',
                  locationName: 'IdentityPoolId'
                },
                IdentityId: {
                  location: 'uri',
                  locationName: 'IdentityId'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Datasets: {
                  type: 'list',
                  member: {
                    shape: 'S8'
                  }
                },
                Count: {
                  type: 'integer'
                },
                NextToken: {}
              }
            }
          },
          ListIdentityPoolUsage: {
            http: {
              method: 'GET',
              requestUri: '/identitypools',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                IdentityPoolUsages: {
                  type: 'list',
                  member: {
                    shape: 'Sg'
                  }
                },
                MaxResults: {
                  type: 'integer'
                },
                Count: {
                  type: 'integer'
                },
                NextToken: {}
              }
            }
          },
          ListRecords: {
            http: {
              method: 'GET',
              requestUri: '/identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}/records',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['IdentityPoolId', 'IdentityId', 'DatasetName'],
              members: {
                IdentityPoolId: {
                  location: 'uri',
                  locationName: 'IdentityPoolId'
                },
                IdentityId: {
                  location: 'uri',
                  locationName: 'IdentityId'
                },
                DatasetName: {
                  location: 'uri',
                  locationName: 'DatasetName'
                },
                LastSyncCount: {
                  location: 'querystring',
                  locationName: 'lastSyncCount',
                  type: 'long'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                SyncSessionToken: {
                  location: 'querystring',
                  locationName: 'syncSessionToken'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Records: {
                  shape: 'S1c'
                },
                NextToken: {},
                Count: {
                  type: 'integer'
                },
                DatasetSyncCount: {
                  type: 'long'
                },
                LastModifiedBy: {},
                MergedDatasetNames: {
                  type: 'list',
                  member: {}
                },
                DatasetExists: {
                  type: 'boolean'
                },
                DatasetDeletedAfterRequestedSyncCount: {
                  type: 'boolean'
                },
                SyncSessionToken: {}
              }
            }
          },
          RegisterDevice: {
            http: {
              requestUri: '/identitypools/{IdentityPoolId}/identity/{IdentityId}/device',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['IdentityPoolId', 'IdentityId', 'Platform', 'Token'],
              members: {
                IdentityPoolId: {
                  location: 'uri',
                  locationName: 'IdentityPoolId'
                },
                IdentityId: {
                  location: 'uri',
                  locationName: 'IdentityId'
                },
                Platform: {},
                Token: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                DeviceId: {}
              }
            }
          },
          SetCognitoEvents: {
            http: {
              requestUri: '/identitypools/{IdentityPoolId}/events',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['IdentityPoolId', 'Events'],
              members: {
                IdentityPoolId: {
                  location: 'uri',
                  locationName: 'IdentityPoolId'
                },
                Events: {
                  shape: 'Sq'
                }
              }
            }
          },
          SetIdentityPoolConfiguration: {
            http: {
              requestUri: '/identitypools/{IdentityPoolId}/configuration',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['IdentityPoolId'],
              members: {
                IdentityPoolId: {
                  location: 'uri',
                  locationName: 'IdentityPoolId'
                },
                PushSync: {
                  shape: 'Sv'
                },
                CognitoStreams: {
                  shape: 'Sz'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                IdentityPoolId: {},
                PushSync: {
                  shape: 'Sv'
                },
                CognitoStreams: {
                  shape: 'Sz'
                }
              }
            }
          },
          SubscribeToDataset: {
            http: {
              requestUri: '/identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}/subscriptions/{DeviceId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['IdentityPoolId', 'IdentityId', 'DatasetName', 'DeviceId'],
              members: {
                IdentityPoolId: {
                  location: 'uri',
                  locationName: 'IdentityPoolId'
                },
                IdentityId: {
                  location: 'uri',
                  locationName: 'IdentityId'
                },
                DatasetName: {
                  location: 'uri',
                  locationName: 'DatasetName'
                },
                DeviceId: {
                  location: 'uri',
                  locationName: 'DeviceId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UnsubscribeFromDataset: {
            http: {
              method: 'DELETE',
              requestUri: '/identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}/subscriptions/{DeviceId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['IdentityPoolId', 'IdentityId', 'DatasetName', 'DeviceId'],
              members: {
                IdentityPoolId: {
                  location: 'uri',
                  locationName: 'IdentityPoolId'
                },
                IdentityId: {
                  location: 'uri',
                  locationName: 'IdentityId'
                },
                DatasetName: {
                  location: 'uri',
                  locationName: 'DatasetName'
                },
                DeviceId: {
                  location: 'uri',
                  locationName: 'DeviceId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateRecords: {
            http: {
              requestUri: '/identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['IdentityPoolId', 'IdentityId', 'DatasetName', 'SyncSessionToken'],
              members: {
                IdentityPoolId: {
                  location: 'uri',
                  locationName: 'IdentityPoolId'
                },
                IdentityId: {
                  location: 'uri',
                  locationName: 'IdentityId'
                },
                DatasetName: {
                  location: 'uri',
                  locationName: 'DatasetName'
                },
                DeviceId: {},
                RecordPatches: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Op', 'Key', 'SyncCount'],
                    members: {
                      Op: {},
                      Key: {},
                      Value: {},
                      SyncCount: {
                        type: 'long'
                      },
                      DeviceLastModifiedDate: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                SyncSessionToken: {},
                ClientContext: {
                  location: 'header',
                  locationName: 'x-amz-Client-Context'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Records: {
                  shape: 'S1c'
                }
              }
            }
          }
        },
        shapes: {
          S8: {
            type: 'structure',
            members: {
              IdentityId: {},
              DatasetName: {},
              CreationDate: {
                type: 'timestamp'
              },
              LastModifiedDate: {
                type: 'timestamp'
              },
              LastModifiedBy: {},
              DataStorage: {
                type: 'long'
              },
              NumRecords: {
                type: 'long'
              }
            }
          },
          Sg: {
            type: 'structure',
            members: {
              IdentityPoolId: {},
              SyncSessionsCount: {
                type: 'long'
              },
              DataStorage: {
                type: 'long'
              },
              LastModifiedDate: {
                type: 'timestamp'
              }
            }
          },
          Sq: {
            type: 'map',
            key: {},
            value: {}
          },
          Sv: {
            type: 'structure',
            members: {
              ApplicationArns: {
                type: 'list',
                member: {}
              },
              RoleArn: {}
            }
          },
          Sz: {
            type: 'structure',
            members: {
              StreamName: {},
              RoleArn: {},
              StreamingStatus: {}
            }
          },
          S1c: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Key: {},
                Value: {},
                SyncCount: {
                  type: 'long'
                },
                LastModifiedDate: {
                  type: 'timestamp'
                },
                LastModifiedBy: {},
                DeviceLastModifiedDate: {
                  type: 'timestamp'
                }
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=7a68916d18e134285ec2bee87b8c3e5221c4da6a.js.map