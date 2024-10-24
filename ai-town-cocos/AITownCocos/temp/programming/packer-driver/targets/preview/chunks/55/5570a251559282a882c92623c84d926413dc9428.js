System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2017-07-25',
          endpointPrefix: 'dataexchange',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceFullName: 'AWS Data Exchange',
          serviceId: 'DataExchange',
          signatureVersion: 'v4',
          signingName: 'dataexchange',
          uid: 'dataexchange-2017-07-25'
        },
        operations: {
          CancelJob: {
            http: {
              method: 'DELETE',
              requestUri: '/v1/jobs/{JobId}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['JobId'],
              members: {
                JobId: {
                  location: 'uri',
                  locationName: 'JobId'
                }
              }
            }
          },
          CreateDataSet: {
            http: {
              requestUri: '/v1/data-sets',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['AssetType', 'Description', 'Name'],
              members: {
                AssetType: {},
                Description: {},
                Name: {},
                Tags: {
                  shape: 'S7'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                AssetType: {},
                CreatedAt: {
                  shape: 'Sa'
                },
                Description: {},
                Id: {},
                Name: {},
                Origin: {},
                OriginDetails: {
                  shape: 'Sd'
                },
                SourceId: {},
                Tags: {
                  shape: 'S7'
                },
                UpdatedAt: {
                  shape: 'Sa'
                }
              }
            }
          },
          CreateEventAction: {
            http: {
              requestUri: '/v1/event-actions',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['Action', 'Event'],
              members: {
                Action: {
                  shape: 'Sf'
                },
                Event: {
                  shape: 'Sk'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Action: {
                  shape: 'Sf'
                },
                Arn: {},
                CreatedAt: {
                  shape: 'Sa'
                },
                Event: {
                  shape: 'Sk'
                },
                Id: {},
                UpdatedAt: {
                  shape: 'Sa'
                }
              }
            }
          },
          CreateJob: {
            http: {
              requestUri: '/v1/jobs',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['Details', 'Type'],
              members: {
                Details: {
                  type: 'structure',
                  members: {
                    ExportAssetToSignedUrl: {
                      type: 'structure',
                      required: ['AssetId', 'DataSetId', 'RevisionId'],
                      members: {
                        AssetId: {},
                        DataSetId: {},
                        RevisionId: {}
                      }
                    },
                    ExportAssetsToS3: {
                      type: 'structure',
                      required: ['AssetDestinations', 'DataSetId', 'RevisionId'],
                      members: {
                        AssetDestinations: {
                          shape: 'Sr'
                        },
                        DataSetId: {},
                        Encryption: {
                          shape: 'Sh'
                        },
                        RevisionId: {}
                      }
                    },
                    ExportRevisionsToS3: {
                      type: 'structure',
                      required: ['DataSetId', 'RevisionDestinations'],
                      members: {
                        DataSetId: {},
                        Encryption: {
                          shape: 'Sh'
                        },
                        RevisionDestinations: {
                          shape: 'Su'
                        }
                      }
                    },
                    ImportAssetFromSignedUrl: {
                      type: 'structure',
                      required: ['AssetName', 'DataSetId', 'Md5Hash', 'RevisionId'],
                      members: {
                        AssetName: {},
                        DataSetId: {},
                        Md5Hash: {},
                        RevisionId: {}
                      }
                    },
                    ImportAssetsFromS3: {
                      type: 'structure',
                      required: ['AssetSources', 'DataSetId', 'RevisionId'],
                      members: {
                        AssetSources: {
                          shape: 'S10'
                        },
                        DataSetId: {},
                        RevisionId: {}
                      }
                    },
                    ImportAssetsFromRedshiftDataShares: {
                      type: 'structure',
                      required: ['AssetSources', 'DataSetId', 'RevisionId'],
                      members: {
                        AssetSources: {
                          shape: 'S13'
                        },
                        DataSetId: {},
                        RevisionId: {}
                      }
                    },
                    ImportAssetFromApiGatewayApi: {
                      type: 'structure',
                      required: ['ApiId', 'ApiName', 'ApiSpecificationMd5Hash', 'DataSetId', 'ProtocolType', 'RevisionId', 'Stage'],
                      members: {
                        ApiDescription: {},
                        ApiId: {},
                        ApiKey: {},
                        ApiName: {},
                        ApiSpecificationMd5Hash: {},
                        DataSetId: {},
                        ProtocolType: {},
                        RevisionId: {},
                        Stage: {}
                      }
                    },
                    CreateS3DataAccessFromS3Bucket: {
                      type: 'structure',
                      required: ['AssetSource', 'DataSetId', 'RevisionId'],
                      members: {
                        AssetSource: {
                          shape: 'S19'
                        },
                        DataSetId: {},
                        RevisionId: {}
                      }
                    },
                    ImportAssetsFromLakeFormationTagPolicy: {
                      type: 'structure',
                      required: ['CatalogId', 'RoleArn', 'DataSetId', 'RevisionId'],
                      members: {
                        CatalogId: {},
                        Database: {
                          shape: 'S1g'
                        },
                        Table: {
                          shape: 'S1n'
                        },
                        RoleArn: {},
                        DataSetId: {},
                        RevisionId: {}
                      }
                    }
                  }
                },
                Type: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                CreatedAt: {
                  shape: 'Sa'
                },
                Details: {
                  shape: 'S1t'
                },
                Errors: {
                  shape: 'S23'
                },
                Id: {},
                State: {},
                Type: {},
                UpdatedAt: {
                  shape: 'Sa'
                }
              }
            }
          },
          CreateRevision: {
            http: {
              requestUri: '/v1/data-sets/{DataSetId}/revisions',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['DataSetId'],
              members: {
                Comment: {},
                DataSetId: {
                  location: 'uri',
                  locationName: 'DataSetId'
                },
                Tags: {
                  shape: 'S7'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                Comment: {},
                CreatedAt: {
                  shape: 'Sa'
                },
                DataSetId: {},
                Finalized: {
                  type: 'boolean'
                },
                Id: {},
                SourceId: {},
                Tags: {
                  shape: 'S7'
                },
                UpdatedAt: {
                  shape: 'Sa'
                },
                RevocationComment: {},
                Revoked: {
                  type: 'boolean'
                },
                RevokedAt: {
                  shape: 'Sa'
                }
              }
            }
          },
          DeleteAsset: {
            http: {
              method: 'DELETE',
              requestUri: '/v1/data-sets/{DataSetId}/revisions/{RevisionId}/assets/{AssetId}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['AssetId', 'DataSetId', 'RevisionId'],
              members: {
                AssetId: {
                  location: 'uri',
                  locationName: 'AssetId'
                },
                DataSetId: {
                  location: 'uri',
                  locationName: 'DataSetId'
                },
                RevisionId: {
                  location: 'uri',
                  locationName: 'RevisionId'
                }
              }
            }
          },
          DeleteDataSet: {
            http: {
              method: 'DELETE',
              requestUri: '/v1/data-sets/{DataSetId}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['DataSetId'],
              members: {
                DataSetId: {
                  location: 'uri',
                  locationName: 'DataSetId'
                }
              }
            }
          },
          DeleteEventAction: {
            http: {
              method: 'DELETE',
              requestUri: '/v1/event-actions/{EventActionId}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['EventActionId'],
              members: {
                EventActionId: {
                  location: 'uri',
                  locationName: 'EventActionId'
                }
              }
            }
          },
          DeleteRevision: {
            http: {
              method: 'DELETE',
              requestUri: '/v1/data-sets/{DataSetId}/revisions/{RevisionId}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['DataSetId', 'RevisionId'],
              members: {
                DataSetId: {
                  location: 'uri',
                  locationName: 'DataSetId'
                },
                RevisionId: {
                  location: 'uri',
                  locationName: 'RevisionId'
                }
              }
            }
          },
          GetAsset: {
            http: {
              method: 'GET',
              requestUri: '/v1/data-sets/{DataSetId}/revisions/{RevisionId}/assets/{AssetId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['AssetId', 'DataSetId', 'RevisionId'],
              members: {
                AssetId: {
                  location: 'uri',
                  locationName: 'AssetId'
                },
                DataSetId: {
                  location: 'uri',
                  locationName: 'DataSetId'
                },
                RevisionId: {
                  location: 'uri',
                  locationName: 'RevisionId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                AssetDetails: {
                  shape: 'S2n'
                },
                AssetType: {},
                CreatedAt: {
                  shape: 'Sa'
                },
                DataSetId: {},
                Id: {},
                Name: {},
                RevisionId: {},
                SourceId: {},
                UpdatedAt: {
                  shape: 'Sa'
                }
              }
            }
          },
          GetDataSet: {
            http: {
              method: 'GET',
              requestUri: '/v1/data-sets/{DataSetId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['DataSetId'],
              members: {
                DataSetId: {
                  location: 'uri',
                  locationName: 'DataSetId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                AssetType: {},
                CreatedAt: {
                  shape: 'Sa'
                },
                Description: {},
                Id: {},
                Name: {},
                Origin: {},
                OriginDetails: {
                  shape: 'Sd'
                },
                SourceId: {},
                Tags: {
                  shape: 'S7'
                },
                UpdatedAt: {
                  shape: 'Sa'
                }
              }
            }
          },
          GetEventAction: {
            http: {
              method: 'GET',
              requestUri: '/v1/event-actions/{EventActionId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['EventActionId'],
              members: {
                EventActionId: {
                  location: 'uri',
                  locationName: 'EventActionId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Action: {
                  shape: 'Sf'
                },
                Arn: {},
                CreatedAt: {
                  shape: 'Sa'
                },
                Event: {
                  shape: 'Sk'
                },
                Id: {},
                UpdatedAt: {
                  shape: 'Sa'
                }
              }
            }
          },
          GetJob: {
            http: {
              method: 'GET',
              requestUri: '/v1/jobs/{JobId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['JobId'],
              members: {
                JobId: {
                  location: 'uri',
                  locationName: 'JobId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                CreatedAt: {
                  shape: 'Sa'
                },
                Details: {
                  shape: 'S1t'
                },
                Errors: {
                  shape: 'S23'
                },
                Id: {},
                State: {},
                Type: {},
                UpdatedAt: {
                  shape: 'Sa'
                }
              }
            }
          },
          GetRevision: {
            http: {
              method: 'GET',
              requestUri: '/v1/data-sets/{DataSetId}/revisions/{RevisionId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['DataSetId', 'RevisionId'],
              members: {
                DataSetId: {
                  location: 'uri',
                  locationName: 'DataSetId'
                },
                RevisionId: {
                  location: 'uri',
                  locationName: 'RevisionId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                Comment: {},
                CreatedAt: {
                  shape: 'Sa'
                },
                DataSetId: {},
                Finalized: {
                  type: 'boolean'
                },
                Id: {},
                SourceId: {},
                Tags: {
                  shape: 'S7'
                },
                UpdatedAt: {
                  shape: 'Sa'
                },
                RevocationComment: {},
                Revoked: {
                  type: 'boolean'
                },
                RevokedAt: {
                  shape: 'Sa'
                }
              }
            }
          },
          ListDataSetRevisions: {
            http: {
              method: 'GET',
              requestUri: '/v1/data-sets/{DataSetId}/revisions',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['DataSetId'],
              members: {
                DataSetId: {
                  location: 'uri',
                  locationName: 'DataSetId'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                Revisions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Arn', 'CreatedAt', 'DataSetId', 'Id', 'UpdatedAt'],
                    members: {
                      Arn: {},
                      Comment: {},
                      CreatedAt: {
                        shape: 'Sa'
                      },
                      DataSetId: {},
                      Finalized: {
                        type: 'boolean'
                      },
                      Id: {},
                      SourceId: {},
                      UpdatedAt: {
                        shape: 'Sa'
                      },
                      RevocationComment: {},
                      Revoked: {
                        type: 'boolean'
                      },
                      RevokedAt: {
                        shape: 'Sa'
                      }
                    }
                  }
                }
              }
            }
          },
          ListDataSets: {
            http: {
              method: 'GET',
              requestUri: '/v1/data-sets',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                Origin: {
                  location: 'querystring',
                  locationName: 'origin'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                DataSets: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Arn', 'AssetType', 'CreatedAt', 'Description', 'Id', 'Name', 'Origin', 'UpdatedAt'],
                    members: {
                      Arn: {},
                      AssetType: {},
                      CreatedAt: {
                        shape: 'Sa'
                      },
                      Description: {},
                      Id: {},
                      Name: {},
                      Origin: {},
                      OriginDetails: {
                        shape: 'Sd'
                      },
                      SourceId: {},
                      UpdatedAt: {
                        shape: 'Sa'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListEventActions: {
            http: {
              method: 'GET',
              requestUri: '/v1/event-actions',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                EventSourceId: {
                  location: 'querystring',
                  locationName: 'eventSourceId'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                EventActions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Action', 'Arn', 'CreatedAt', 'Event', 'Id', 'UpdatedAt'],
                    members: {
                      Action: {
                        shape: 'Sf'
                      },
                      Arn: {},
                      CreatedAt: {
                        shape: 'Sa'
                      },
                      Event: {
                        shape: 'Sk'
                      },
                      Id: {},
                      UpdatedAt: {
                        shape: 'Sa'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListJobs: {
            http: {
              method: 'GET',
              requestUri: '/v1/jobs',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                DataSetId: {
                  location: 'querystring',
                  locationName: 'dataSetId'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                RevisionId: {
                  location: 'querystring',
                  locationName: 'revisionId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Jobs: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Arn', 'CreatedAt', 'Details', 'Id', 'State', 'Type', 'UpdatedAt'],
                    members: {
                      Arn: {},
                      CreatedAt: {
                        shape: 'Sa'
                      },
                      Details: {
                        shape: 'S1t'
                      },
                      Errors: {
                        shape: 'S23'
                      },
                      Id: {},
                      State: {},
                      Type: {},
                      UpdatedAt: {
                        shape: 'Sa'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListRevisionAssets: {
            http: {
              method: 'GET',
              requestUri: '/v1/data-sets/{DataSetId}/revisions/{RevisionId}/assets',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['DataSetId', 'RevisionId'],
              members: {
                DataSetId: {
                  location: 'uri',
                  locationName: 'DataSetId'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                RevisionId: {
                  location: 'uri',
                  locationName: 'RevisionId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Assets: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Arn', 'AssetDetails', 'AssetType', 'CreatedAt', 'DataSetId', 'Id', 'Name', 'RevisionId', 'UpdatedAt'],
                    members: {
                      Arn: {},
                      AssetDetails: {
                        shape: 'S2n'
                      },
                      AssetType: {},
                      CreatedAt: {
                        shape: 'Sa'
                      },
                      DataSetId: {},
                      Id: {},
                      Name: {},
                      RevisionId: {},
                      SourceId: {},
                      UpdatedAt: {
                        shape: 'Sa'
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
              requestUri: '/tags/{ResourceArn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ResourceArn'],
              members: {
                ResourceArn: {
                  location: 'uri',
                  locationName: 'ResourceArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Tags: {
                  shape: 'S7',
                  locationName: 'tags'
                }
              }
            }
          },
          RevokeRevision: {
            http: {
              requestUri: '/v1/data-sets/{DataSetId}/revisions/{RevisionId}/revoke',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['DataSetId', 'RevisionId', 'RevocationComment'],
              members: {
                DataSetId: {
                  location: 'uri',
                  locationName: 'DataSetId'
                },
                RevisionId: {
                  location: 'uri',
                  locationName: 'RevisionId'
                },
                RevocationComment: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                Comment: {},
                CreatedAt: {
                  shape: 'Sa'
                },
                DataSetId: {},
                Finalized: {
                  type: 'boolean'
                },
                Id: {},
                SourceId: {},
                UpdatedAt: {
                  shape: 'Sa'
                },
                RevocationComment: {},
                Revoked: {
                  type: 'boolean'
                },
                RevokedAt: {
                  shape: 'Sa'
                }
              }
            }
          },
          SendApiAsset: {
            http: {
              requestUri: '/v1',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['AssetId', 'DataSetId', 'RevisionId'],
              members: {
                Body: {},
                QueryStringParameters: {
                  shape: 'S7',
                  location: 'querystring'
                },
                AssetId: {
                  location: 'header',
                  locationName: 'x-amzn-dataexchange-asset-id'
                },
                DataSetId: {
                  location: 'header',
                  locationName: 'x-amzn-dataexchange-data-set-id'
                },
                RequestHeaders: {
                  shape: 'S7',
                  location: 'headers',
                  locationName: 'x-amzn-dataexchange-header-'
                },
                Method: {
                  location: 'header',
                  locationName: 'x-amzn-dataexchange-http-method'
                },
                Path: {
                  location: 'header',
                  locationName: 'x-amzn-dataexchange-path'
                },
                RevisionId: {
                  location: 'header',
                  locationName: 'x-amzn-dataexchange-revision-id'
                }
              },
              payload: 'Body'
            },
            output: {
              type: 'structure',
              members: {
                Body: {},
                ResponseHeaders: {
                  shape: 'S7',
                  location: 'headers',
                  locationName: ''
                }
              },
              payload: 'Body'
            },
            endpoint: {
              hostPrefix: 'api-fulfill.'
            }
          },
          SendDataSetNotification: {
            http: {
              requestUri: '/v1/data-sets/{DataSetId}/notification',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['DataSetId', 'Type'],
              members: {
                Scope: {
                  type: 'structure',
                  members: {
                    LakeFormationTagPolicies: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          Database: {},
                          Table: {}
                        }
                      }
                    },
                    RedshiftDataShares: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        required: ['Arn', 'Database'],
                        members: {
                          Arn: {},
                          Database: {},
                          Function: {},
                          Table: {},
                          Schema: {},
                          View: {}
                        }
                      }
                    },
                    S3DataAccesses: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          KeyPrefixes: {
                            shape: 'S1a'
                          },
                          Keys: {
                            shape: 'S1a'
                          }
                        }
                      }
                    }
                  }
                },
                ClientToken: {
                  idempotencyToken: true
                },
                Comment: {},
                DataSetId: {
                  location: 'uri',
                  locationName: 'DataSetId'
                },
                Details: {
                  type: 'structure',
                  members: {
                    DataUpdate: {
                      type: 'structure',
                      members: {
                        DataUpdatedAt: {
                          shape: 'Sa'
                        }
                      }
                    },
                    Deprecation: {
                      type: 'structure',
                      required: ['DeprecationAt'],
                      members: {
                        DeprecationAt: {
                          shape: 'Sa'
                        }
                      }
                    },
                    SchemaChange: {
                      type: 'structure',
                      required: ['SchemaChangeAt'],
                      members: {
                        Changes: {
                          type: 'list',
                          member: {
                            type: 'structure',
                            required: ['Name', 'Type'],
                            members: {
                              Name: {},
                              Type: {},
                              Description: {}
                            }
                          }
                        },
                        SchemaChangeAt: {
                          shape: 'Sa'
                        }
                      }
                    }
                  }
                },
                Type: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          StartJob: {
            http: {
              method: 'PATCH',
              requestUri: '/v1/jobs/{JobId}',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['JobId'],
              members: {
                JobId: {
                  location: 'uri',
                  locationName: 'JobId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          TagResource: {
            http: {
              requestUri: '/tags/{ResourceArn}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['ResourceArn', 'Tags'],
              members: {
                ResourceArn: {
                  location: 'uri',
                  locationName: 'ResourceArn'
                },
                Tags: {
                  shape: 'S7',
                  locationName: 'tags'
                }
              }
            }
          },
          UntagResource: {
            http: {
              method: 'DELETE',
              requestUri: '/tags/{ResourceArn}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['ResourceArn', 'TagKeys'],
              members: {
                ResourceArn: {
                  location: 'uri',
                  locationName: 'ResourceArn'
                },
                TagKeys: {
                  shape: 'S1a',
                  location: 'querystring',
                  locationName: 'tagKeys'
                }
              }
            },
            idempotent: true
          },
          UpdateAsset: {
            http: {
              method: 'PATCH',
              requestUri: '/v1/data-sets/{DataSetId}/revisions/{RevisionId}/assets/{AssetId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['AssetId', 'DataSetId', 'Name', 'RevisionId'],
              members: {
                AssetId: {
                  location: 'uri',
                  locationName: 'AssetId'
                },
                DataSetId: {
                  location: 'uri',
                  locationName: 'DataSetId'
                },
                Name: {},
                RevisionId: {
                  location: 'uri',
                  locationName: 'RevisionId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                AssetDetails: {
                  shape: 'S2n'
                },
                AssetType: {},
                CreatedAt: {
                  shape: 'Sa'
                },
                DataSetId: {},
                Id: {},
                Name: {},
                RevisionId: {},
                SourceId: {},
                UpdatedAt: {
                  shape: 'Sa'
                }
              }
            }
          },
          UpdateDataSet: {
            http: {
              method: 'PATCH',
              requestUri: '/v1/data-sets/{DataSetId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['DataSetId'],
              members: {
                DataSetId: {
                  location: 'uri',
                  locationName: 'DataSetId'
                },
                Description: {},
                Name: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                AssetType: {},
                CreatedAt: {
                  shape: 'Sa'
                },
                Description: {},
                Id: {},
                Name: {},
                Origin: {},
                OriginDetails: {
                  shape: 'Sd'
                },
                SourceId: {},
                UpdatedAt: {
                  shape: 'Sa'
                }
              }
            }
          },
          UpdateEventAction: {
            http: {
              method: 'PATCH',
              requestUri: '/v1/event-actions/{EventActionId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['EventActionId'],
              members: {
                Action: {
                  shape: 'Sf'
                },
                EventActionId: {
                  location: 'uri',
                  locationName: 'EventActionId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Action: {
                  shape: 'Sf'
                },
                Arn: {},
                CreatedAt: {
                  shape: 'Sa'
                },
                Event: {
                  shape: 'Sk'
                },
                Id: {},
                UpdatedAt: {
                  shape: 'Sa'
                }
              }
            }
          },
          UpdateRevision: {
            http: {
              method: 'PATCH',
              requestUri: '/v1/data-sets/{DataSetId}/revisions/{RevisionId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['DataSetId', 'RevisionId'],
              members: {
                Comment: {},
                DataSetId: {
                  location: 'uri',
                  locationName: 'DataSetId'
                },
                Finalized: {
                  type: 'boolean'
                },
                RevisionId: {
                  location: 'uri',
                  locationName: 'RevisionId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                Comment: {},
                CreatedAt: {
                  shape: 'Sa'
                },
                DataSetId: {},
                Finalized: {
                  type: 'boolean'
                },
                Id: {},
                SourceId: {},
                UpdatedAt: {
                  shape: 'Sa'
                },
                RevocationComment: {},
                Revoked: {
                  type: 'boolean'
                },
                RevokedAt: {
                  shape: 'Sa'
                }
              }
            }
          }
        },
        shapes: {
          S7: {
            type: 'map',
            key: {},
            value: {}
          },
          Sa: {
            type: 'timestamp',
            timestampFormat: 'iso8601'
          },
          Sd: {
            type: 'structure',
            members: {
              ProductId: {}
            }
          },
          Sf: {
            type: 'structure',
            members: {
              ExportRevisionToS3: {
                type: 'structure',
                required: ['RevisionDestination'],
                members: {
                  Encryption: {
                    shape: 'Sh'
                  },
                  RevisionDestination: {
                    type: 'structure',
                    required: ['Bucket'],
                    members: {
                      Bucket: {},
                      KeyPattern: {}
                    }
                  }
                }
              }
            }
          },
          Sh: {
            type: 'structure',
            required: ['Type'],
            members: {
              KmsKeyArn: {},
              Type: {}
            }
          },
          Sk: {
            type: 'structure',
            members: {
              RevisionPublished: {
                type: 'structure',
                required: ['DataSetId'],
                members: {
                  DataSetId: {}
                }
              }
            }
          },
          Sr: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['AssetId', 'Bucket'],
              members: {
                AssetId: {},
                Bucket: {},
                Key: {}
              }
            }
          },
          Su: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Bucket', 'RevisionId'],
              members: {
                Bucket: {},
                KeyPattern: {},
                RevisionId: {}
              }
            }
          },
          S10: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Bucket', 'Key'],
              members: {
                Bucket: {},
                Key: {}
              }
            }
          },
          S13: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['DataShareArn'],
              members: {
                DataShareArn: {}
              }
            }
          },
          S19: {
            type: 'structure',
            required: ['Bucket'],
            members: {
              Bucket: {},
              KeyPrefixes: {
                shape: 'S1a'
              },
              Keys: {
                shape: 'S1a'
              },
              KmsKeysToGrant: {
                shape: 'S1b'
              }
            }
          },
          S1a: {
            type: 'list',
            member: {}
          },
          S1b: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['KmsKeyArn'],
              members: {
                KmsKeyArn: {}
              }
            }
          },
          S1g: {
            type: 'structure',
            required: ['Expression', 'Permissions'],
            members: {
              Expression: {
                shape: 'S1h'
              },
              Permissions: {
                type: 'list',
                member: {}
              }
            }
          },
          S1h: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['TagKey', 'TagValues'],
              members: {
                TagKey: {},
                TagValues: {
                  type: 'list',
                  member: {}
                }
              }
            }
          },
          S1n: {
            type: 'structure',
            required: ['Expression', 'Permissions'],
            members: {
              Expression: {
                shape: 'S1h'
              },
              Permissions: {
                type: 'list',
                member: {}
              }
            }
          },
          S1t: {
            type: 'structure',
            members: {
              ExportAssetToSignedUrl: {
                type: 'structure',
                required: ['AssetId', 'DataSetId', 'RevisionId'],
                members: {
                  AssetId: {},
                  DataSetId: {},
                  RevisionId: {},
                  SignedUrl: {},
                  SignedUrlExpiresAt: {
                    shape: 'Sa'
                  }
                }
              },
              ExportAssetsToS3: {
                type: 'structure',
                required: ['AssetDestinations', 'DataSetId', 'RevisionId'],
                members: {
                  AssetDestinations: {
                    shape: 'Sr'
                  },
                  DataSetId: {},
                  Encryption: {
                    shape: 'Sh'
                  },
                  RevisionId: {}
                }
              },
              ExportRevisionsToS3: {
                type: 'structure',
                required: ['DataSetId', 'RevisionDestinations'],
                members: {
                  DataSetId: {},
                  Encryption: {
                    shape: 'Sh'
                  },
                  RevisionDestinations: {
                    shape: 'Su'
                  },
                  EventActionArn: {}
                }
              },
              ImportAssetFromSignedUrl: {
                type: 'structure',
                required: ['AssetName', 'DataSetId', 'RevisionId'],
                members: {
                  AssetName: {},
                  DataSetId: {},
                  Md5Hash: {},
                  RevisionId: {},
                  SignedUrl: {},
                  SignedUrlExpiresAt: {
                    shape: 'Sa'
                  }
                }
              },
              ImportAssetsFromS3: {
                type: 'structure',
                required: ['AssetSources', 'DataSetId', 'RevisionId'],
                members: {
                  AssetSources: {
                    shape: 'S10'
                  },
                  DataSetId: {},
                  RevisionId: {}
                }
              },
              ImportAssetsFromRedshiftDataShares: {
                type: 'structure',
                required: ['AssetSources', 'DataSetId', 'RevisionId'],
                members: {
                  AssetSources: {
                    shape: 'S13'
                  },
                  DataSetId: {},
                  RevisionId: {}
                }
              },
              ImportAssetFromApiGatewayApi: {
                type: 'structure',
                required: ['ApiId', 'ApiName', 'ApiSpecificationMd5Hash', 'ApiSpecificationUploadUrl', 'ApiSpecificationUploadUrlExpiresAt', 'DataSetId', 'ProtocolType', 'RevisionId', 'Stage'],
                members: {
                  ApiDescription: {},
                  ApiId: {},
                  ApiKey: {},
                  ApiName: {},
                  ApiSpecificationMd5Hash: {},
                  ApiSpecificationUploadUrl: {},
                  ApiSpecificationUploadUrlExpiresAt: {
                    shape: 'Sa'
                  },
                  DataSetId: {},
                  ProtocolType: {},
                  RevisionId: {},
                  Stage: {}
                }
              },
              CreateS3DataAccessFromS3Bucket: {
                type: 'structure',
                required: ['AssetSource', 'DataSetId', 'RevisionId'],
                members: {
                  AssetSource: {
                    shape: 'S19'
                  },
                  DataSetId: {},
                  RevisionId: {}
                }
              },
              ImportAssetsFromLakeFormationTagPolicy: {
                type: 'structure',
                required: ['CatalogId', 'RoleArn', 'DataSetId', 'RevisionId'],
                members: {
                  CatalogId: {},
                  Database: {
                    shape: 'S1g'
                  },
                  Table: {
                    shape: 'S1n'
                  },
                  RoleArn: {},
                  DataSetId: {},
                  RevisionId: {}
                }
              }
            }
          },
          S23: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Code', 'Message'],
              members: {
                Code: {},
                Details: {
                  type: 'structure',
                  members: {
                    ImportAssetFromSignedUrlJobErrorDetails: {
                      type: 'structure',
                      required: ['AssetName'],
                      members: {
                        AssetName: {}
                      }
                    },
                    ImportAssetsFromS3JobErrorDetails: {
                      shape: 'S10'
                    }
                  }
                },
                LimitName: {},
                LimitValue: {
                  type: 'double'
                },
                Message: {},
                ResourceId: {},
                ResourceType: {}
              }
            }
          },
          S2n: {
            type: 'structure',
            members: {
              S3SnapshotAsset: {
                type: 'structure',
                required: ['Size'],
                members: {
                  Size: {
                    type: 'double'
                  }
                }
              },
              RedshiftDataShareAsset: {
                type: 'structure',
                required: ['Arn'],
                members: {
                  Arn: {}
                }
              },
              ApiGatewayApiAsset: {
                type: 'structure',
                members: {
                  ApiDescription: {},
                  ApiEndpoint: {},
                  ApiId: {},
                  ApiKey: {},
                  ApiName: {},
                  ApiSpecificationDownloadUrl: {},
                  ApiSpecificationDownloadUrlExpiresAt: {
                    shape: 'Sa'
                  },
                  ProtocolType: {},
                  Stage: {}
                }
              },
              S3DataAccessAsset: {
                type: 'structure',
                required: ['Bucket'],
                members: {
                  Bucket: {},
                  KeyPrefixes: {
                    shape: 'S1a'
                  },
                  Keys: {
                    shape: 'S1a'
                  },
                  S3AccessPointAlias: {},
                  S3AccessPointArn: {},
                  KmsKeysToGrant: {
                    shape: 'S1b'
                  }
                }
              },
              LakeFormationDataPermissionAsset: {
                type: 'structure',
                required: ['LakeFormationDataPermissionDetails', 'LakeFormationDataPermissionType', 'Permissions'],
                members: {
                  LakeFormationDataPermissionDetails: {
                    type: 'structure',
                    members: {
                      LFTagPolicy: {
                        type: 'structure',
                        required: ['CatalogId', 'ResourceType', 'ResourceDetails'],
                        members: {
                          CatalogId: {},
                          ResourceType: {},
                          ResourceDetails: {
                            type: 'structure',
                            members: {
                              Database: {
                                type: 'structure',
                                required: ['Expression'],
                                members: {
                                  Expression: {
                                    shape: 'S1h'
                                  }
                                }
                              },
                              Table: {
                                type: 'structure',
                                required: ['Expression'],
                                members: {
                                  Expression: {
                                    shape: 'S1h'
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  LakeFormationDataPermissionType: {},
                  Permissions: {
                    type: 'list',
                    member: {}
                  },
                  RoleArn: {}
                }
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=5570a251559282a882c92623c84d926413dc9428.js.map