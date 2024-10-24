System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2013-11-01',
          endpointPrefix: 'cloudtrail',
          jsonVersion: '1.1',
          protocol: 'json',
          protocols: ['json'],
          serviceAbbreviation: 'CloudTrail',
          serviceFullName: 'AWS CloudTrail',
          serviceId: 'CloudTrail',
          signatureVersion: 'v4',
          targetPrefix: 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101',
          uid: 'cloudtrail-2013-11-01'
        },
        operations: {
          AddTags: {
            input: {
              type: 'structure',
              required: ['ResourceId', 'TagsList'],
              members: {
                ResourceId: {},
                TagsList: {
                  shape: 'S3'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          CancelQuery: {
            input: {
              type: 'structure',
              required: ['QueryId'],
              members: {
                EventDataStore: {
                  deprecated: true,
                  deprecatedMessage: 'EventDataStore is no longer required by CancelQueryRequest'
                },
                QueryId: {}
              }
            },
            output: {
              type: 'structure',
              required: ['QueryId', 'QueryStatus'],
              members: {
                QueryId: {},
                QueryStatus: {}
              }
            },
            idempotent: true
          },
          CreateChannel: {
            input: {
              type: 'structure',
              required: ['Name', 'Source', 'Destinations'],
              members: {
                Name: {},
                Source: {},
                Destinations: {
                  shape: 'Sg'
                },
                Tags: {
                  shape: 'S3'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ChannelArn: {},
                Name: {},
                Source: {},
                Destinations: {
                  shape: 'Sg'
                },
                Tags: {
                  shape: 'S3'
                }
              }
            }
          },
          CreateEventDataStore: {
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {},
                AdvancedEventSelectors: {
                  shape: 'So'
                },
                MultiRegionEnabled: {
                  type: 'boolean'
                },
                OrganizationEnabled: {
                  type: 'boolean'
                },
                RetentionPeriod: {
                  type: 'integer'
                },
                TerminationProtectionEnabled: {
                  type: 'boolean'
                },
                TagsList: {
                  shape: 'S3'
                },
                KmsKeyId: {},
                StartIngestion: {
                  type: 'boolean'
                },
                BillingMode: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                EventDataStoreArn: {},
                Name: {},
                Status: {},
                AdvancedEventSelectors: {
                  shape: 'So'
                },
                MultiRegionEnabled: {
                  type: 'boolean'
                },
                OrganizationEnabled: {
                  type: 'boolean'
                },
                RetentionPeriod: {
                  type: 'integer'
                },
                TerminationProtectionEnabled: {
                  type: 'boolean'
                },
                TagsList: {
                  shape: 'S3'
                },
                CreatedTimestamp: {
                  type: 'timestamp'
                },
                UpdatedTimestamp: {
                  type: 'timestamp'
                },
                KmsKeyId: {},
                BillingMode: {}
              }
            }
          },
          CreateTrail: {
            input: {
              type: 'structure',
              required: ['Name', 'S3BucketName'],
              members: {
                Name: {},
                S3BucketName: {},
                S3KeyPrefix: {},
                SnsTopicName: {},
                IncludeGlobalServiceEvents: {
                  type: 'boolean'
                },
                IsMultiRegionTrail: {
                  type: 'boolean'
                },
                EnableLogFileValidation: {
                  type: 'boolean'
                },
                CloudWatchLogsLogGroupArn: {},
                CloudWatchLogsRoleArn: {},
                KmsKeyId: {},
                IsOrganizationTrail: {
                  type: 'boolean'
                },
                TagsList: {
                  shape: 'S3'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Name: {},
                S3BucketName: {},
                S3KeyPrefix: {},
                SnsTopicName: {
                  deprecated: true
                },
                SnsTopicARN: {},
                IncludeGlobalServiceEvents: {
                  type: 'boolean'
                },
                IsMultiRegionTrail: {
                  type: 'boolean'
                },
                TrailARN: {},
                LogFileValidationEnabled: {
                  type: 'boolean'
                },
                CloudWatchLogsLogGroupArn: {},
                CloudWatchLogsRoleArn: {},
                KmsKeyId: {},
                IsOrganizationTrail: {
                  type: 'boolean'
                }
              }
            },
            idempotent: true
          },
          DeleteChannel: {
            input: {
              type: 'structure',
              required: ['Channel'],
              members: {
                Channel: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteEventDataStore: {
            input: {
              type: 'structure',
              required: ['EventDataStore'],
              members: {
                EventDataStore: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteResourcePolicy: {
            input: {
              type: 'structure',
              required: ['ResourceArn'],
              members: {
                ResourceArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeleteTrail: {
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeregisterOrganizationDelegatedAdmin: {
            input: {
              type: 'structure',
              required: ['DelegatedAdminAccountId'],
              members: {
                DelegatedAdminAccountId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DescribeQuery: {
            input: {
              type: 'structure',
              members: {
                EventDataStore: {
                  deprecated: true,
                  deprecatedMessage: 'EventDataStore is no longer required by DescribeQueryRequest'
                },
                QueryId: {},
                QueryAlias: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                QueryId: {},
                QueryString: {},
                QueryStatus: {},
                QueryStatistics: {
                  type: 'structure',
                  members: {
                    EventsMatched: {
                      type: 'long'
                    },
                    EventsScanned: {
                      type: 'long'
                    },
                    BytesScanned: {
                      type: 'long'
                    },
                    ExecutionTimeInMillis: {
                      type: 'integer'
                    },
                    CreationTime: {
                      type: 'timestamp'
                    }
                  }
                },
                ErrorMessage: {},
                DeliveryS3Uri: {},
                DeliveryStatus: {}
              }
            },
            idempotent: true
          },
          DescribeTrails: {
            input: {
              type: 'structure',
              members: {
                trailNameList: {
                  type: 'list',
                  member: {}
                },
                includeShadowTrails: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                trailList: {
                  type: 'list',
                  member: {
                    shape: 'S1w'
                  }
                }
              }
            },
            idempotent: true
          },
          DisableFederation: {
            input: {
              type: 'structure',
              required: ['EventDataStore'],
              members: {
                EventDataStore: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                EventDataStoreArn: {},
                FederationStatus: {}
              }
            }
          },
          EnableFederation: {
            input: {
              type: 'structure',
              required: ['EventDataStore', 'FederationRoleArn'],
              members: {
                EventDataStore: {},
                FederationRoleArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                EventDataStoreArn: {},
                FederationStatus: {},
                FederationRoleArn: {}
              }
            }
          },
          GetChannel: {
            input: {
              type: 'structure',
              required: ['Channel'],
              members: {
                Channel: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ChannelArn: {},
                Name: {},
                Source: {},
                SourceConfig: {
                  type: 'structure',
                  members: {
                    ApplyToAllRegions: {
                      type: 'boolean'
                    },
                    AdvancedEventSelectors: {
                      shape: 'So'
                    }
                  }
                },
                Destinations: {
                  shape: 'Sg'
                },
                IngestionStatus: {
                  type: 'structure',
                  members: {
                    LatestIngestionSuccessTime: {
                      type: 'timestamp'
                    },
                    LatestIngestionSuccessEventID: {},
                    LatestIngestionErrorCode: {},
                    LatestIngestionAttemptTime: {
                      type: 'timestamp'
                    },
                    LatestIngestionAttemptEventID: {}
                  }
                }
              }
            },
            idempotent: true
          },
          GetEventDataStore: {
            input: {
              type: 'structure',
              required: ['EventDataStore'],
              members: {
                EventDataStore: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                EventDataStoreArn: {},
                Name: {},
                Status: {},
                AdvancedEventSelectors: {
                  shape: 'So'
                },
                MultiRegionEnabled: {
                  type: 'boolean'
                },
                OrganizationEnabled: {
                  type: 'boolean'
                },
                RetentionPeriod: {
                  type: 'integer'
                },
                TerminationProtectionEnabled: {
                  type: 'boolean'
                },
                CreatedTimestamp: {
                  type: 'timestamp'
                },
                UpdatedTimestamp: {
                  type: 'timestamp'
                },
                KmsKeyId: {},
                BillingMode: {},
                FederationStatus: {},
                FederationRoleArn: {},
                PartitionKeys: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Name', 'Type'],
                    members: {
                      Name: {},
                      Type: {}
                    }
                  }
                }
              }
            },
            idempotent: true
          },
          GetEventSelectors: {
            input: {
              type: 'structure',
              required: ['TrailName'],
              members: {
                TrailName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                TrailARN: {},
                EventSelectors: {
                  shape: 'S2f'
                },
                AdvancedEventSelectors: {
                  shape: 'So'
                }
              }
            },
            idempotent: true
          },
          GetImport: {
            input: {
              type: 'structure',
              required: ['ImportId'],
              members: {
                ImportId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ImportId: {},
                Destinations: {
                  shape: 'S2o'
                },
                ImportSource: {
                  shape: 'S2p'
                },
                StartEventTime: {
                  type: 'timestamp'
                },
                EndEventTime: {
                  type: 'timestamp'
                },
                ImportStatus: {},
                CreatedTimestamp: {
                  type: 'timestamp'
                },
                UpdatedTimestamp: {
                  type: 'timestamp'
                },
                ImportStatistics: {
                  shape: 'S2s'
                }
              }
            }
          },
          GetInsightSelectors: {
            input: {
              type: 'structure',
              members: {
                TrailName: {},
                EventDataStore: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                TrailARN: {},
                InsightSelectors: {
                  shape: 'S2v'
                },
                EventDataStoreArn: {},
                InsightsDestination: {}
              }
            },
            idempotent: true
          },
          GetQueryResults: {
            input: {
              type: 'structure',
              required: ['QueryId'],
              members: {
                EventDataStore: {
                  deprecated: true,
                  deprecatedMessage: 'EventDataStore is no longer required by GetQueryResultsRequest'
                },
                QueryId: {},
                NextToken: {},
                MaxQueryResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                QueryStatus: {},
                QueryStatistics: {
                  type: 'structure',
                  members: {
                    ResultsCount: {
                      type: 'integer'
                    },
                    TotalResultsCount: {
                      type: 'integer'
                    },
                    BytesScanned: {
                      type: 'long'
                    }
                  }
                },
                QueryResultRows: {
                  type: 'list',
                  member: {
                    type: 'list',
                    member: {
                      type: 'map',
                      key: {},
                      value: {}
                    }
                  }
                },
                NextToken: {},
                ErrorMessage: {}
              }
            }
          },
          GetResourcePolicy: {
            input: {
              type: 'structure',
              required: ['ResourceArn'],
              members: {
                ResourceArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ResourceArn: {},
                ResourcePolicy: {}
              }
            },
            idempotent: true
          },
          GetTrail: {
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Trail: {
                  shape: 'S1w'
                }
              }
            },
            idempotent: true
          },
          GetTrailStatus: {
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                IsLogging: {
                  type: 'boolean'
                },
                LatestDeliveryError: {},
                LatestNotificationError: {},
                LatestDeliveryTime: {
                  type: 'timestamp'
                },
                LatestNotificationTime: {
                  type: 'timestamp'
                },
                StartLoggingTime: {
                  type: 'timestamp'
                },
                StopLoggingTime: {
                  type: 'timestamp'
                },
                LatestCloudWatchLogsDeliveryError: {},
                LatestCloudWatchLogsDeliveryTime: {
                  type: 'timestamp'
                },
                LatestDigestDeliveryTime: {
                  type: 'timestamp'
                },
                LatestDigestDeliveryError: {},
                LatestDeliveryAttemptTime: {},
                LatestNotificationAttemptTime: {},
                LatestNotificationAttemptSucceeded: {},
                LatestDeliveryAttemptSucceeded: {},
                TimeLoggingStarted: {},
                TimeLoggingStopped: {}
              }
            },
            idempotent: true
          },
          ListChannels: {
            input: {
              type: 'structure',
              members: {
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Channels: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ChannelArn: {},
                      Name: {}
                    }
                  }
                },
                NextToken: {}
              }
            },
            idempotent: true
          },
          ListEventDataStores: {
            input: {
              type: 'structure',
              members: {
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                EventDataStores: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      EventDataStoreArn: {},
                      Name: {},
                      TerminationProtectionEnabled: {
                        deprecated: true,
                        deprecatedMessage: 'TerminationProtectionEnabled is no longer returned by ListEventDataStores',
                        type: 'boolean'
                      },
                      Status: {
                        deprecated: true,
                        deprecatedMessage: 'Status is no longer returned by ListEventDataStores'
                      },
                      AdvancedEventSelectors: {
                        shape: 'So',
                        deprecated: true,
                        deprecatedMessage: 'AdvancedEventSelectors is no longer returned by ListEventDataStores'
                      },
                      MultiRegionEnabled: {
                        deprecated: true,
                        deprecatedMessage: 'MultiRegionEnabled is no longer returned by ListEventDataStores',
                        type: 'boolean'
                      },
                      OrganizationEnabled: {
                        deprecated: true,
                        deprecatedMessage: 'OrganizationEnabled is no longer returned by ListEventDataStores',
                        type: 'boolean'
                      },
                      RetentionPeriod: {
                        deprecated: true,
                        deprecatedMessage: 'RetentionPeriod is no longer returned by ListEventDataStores',
                        type: 'integer'
                      },
                      CreatedTimestamp: {
                        deprecated: true,
                        deprecatedMessage: 'CreatedTimestamp is no longer returned by ListEventDataStores',
                        type: 'timestamp'
                      },
                      UpdatedTimestamp: {
                        deprecated: true,
                        deprecatedMessage: 'UpdatedTimestamp is no longer returned by ListEventDataStores',
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            },
            idempotent: true
          },
          ListImportFailures: {
            input: {
              type: 'structure',
              required: ['ImportId'],
              members: {
                ImportId: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Failures: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Location: {},
                      Status: {},
                      ErrorType: {},
                      ErrorMessage: {},
                      LastUpdatedTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            },
            idempotent: true
          },
          ListImports: {
            input: {
              type: 'structure',
              members: {
                MaxResults: {
                  type: 'integer'
                },
                Destination: {},
                ImportStatus: {},
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Imports: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ImportId: {},
                      ImportStatus: {},
                      Destinations: {
                        shape: 'S2o'
                      },
                      CreatedTimestamp: {
                        type: 'timestamp'
                      },
                      UpdatedTimestamp: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            },
            idempotent: true
          },
          ListInsightsMetricData: {
            input: {
              type: 'structure',
              required: ['EventSource', 'EventName', 'InsightType'],
              members: {
                EventSource: {},
                EventName: {},
                InsightType: {},
                ErrorCode: {},
                StartTime: {
                  type: 'timestamp'
                },
                EndTime: {
                  type: 'timestamp'
                },
                Period: {
                  type: 'integer'
                },
                DataType: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                EventSource: {},
                EventName: {},
                InsightType: {},
                ErrorCode: {},
                Timestamps: {
                  type: 'list',
                  member: {
                    type: 'timestamp'
                  }
                },
                Values: {
                  type: 'list',
                  member: {
                    type: 'double'
                  }
                },
                NextToken: {}
              }
            },
            idempotent: true
          },
          ListPublicKeys: {
            input: {
              type: 'structure',
              members: {
                StartTime: {
                  type: 'timestamp'
                },
                EndTime: {
                  type: 'timestamp'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                PublicKeyList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Value: {
                        type: 'blob'
                      },
                      ValidityStartTime: {
                        type: 'timestamp'
                      },
                      ValidityEndTime: {
                        type: 'timestamp'
                      },
                      Fingerprint: {}
                    }
                  }
                },
                NextToken: {}
              }
            },
            idempotent: true
          },
          ListQueries: {
            input: {
              type: 'structure',
              required: ['EventDataStore'],
              members: {
                EventDataStore: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                StartTime: {
                  type: 'timestamp'
                },
                EndTime: {
                  type: 'timestamp'
                },
                QueryStatus: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Queries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      QueryId: {},
                      QueryStatus: {},
                      CreationTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            },
            idempotent: true
          },
          ListTags: {
            input: {
              type: 'structure',
              required: ['ResourceIdList'],
              members: {
                ResourceIdList: {
                  type: 'list',
                  member: {}
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ResourceTagList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ResourceId: {},
                      TagsList: {
                        shape: 'S3'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            },
            idempotent: true
          },
          ListTrails: {
            input: {
              type: 'structure',
              members: {
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Trails: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      TrailARN: {},
                      Name: {},
                      HomeRegion: {}
                    }
                  }
                },
                NextToken: {}
              }
            },
            idempotent: true
          },
          LookupEvents: {
            input: {
              type: 'structure',
              members: {
                LookupAttributes: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['AttributeKey', 'AttributeValue'],
                    members: {
                      AttributeKey: {},
                      AttributeValue: {}
                    }
                  }
                },
                StartTime: {
                  type: 'timestamp'
                },
                EndTime: {
                  type: 'timestamp'
                },
                EventCategory: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Events: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      EventId: {},
                      EventName: {},
                      ReadOnly: {},
                      AccessKeyId: {},
                      EventTime: {
                        type: 'timestamp'
                      },
                      EventSource: {},
                      Username: {},
                      Resources: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            ResourceType: {},
                            ResourceName: {}
                          }
                        }
                      },
                      CloudTrailEvent: {}
                    }
                  }
                },
                NextToken: {}
              }
            },
            idempotent: true
          },
          PutEventSelectors: {
            input: {
              type: 'structure',
              required: ['TrailName'],
              members: {
                TrailName: {},
                EventSelectors: {
                  shape: 'S2f'
                },
                AdvancedEventSelectors: {
                  shape: 'So'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                TrailARN: {},
                EventSelectors: {
                  shape: 'S2f'
                },
                AdvancedEventSelectors: {
                  shape: 'So'
                }
              }
            },
            idempotent: true
          },
          PutInsightSelectors: {
            input: {
              type: 'structure',
              required: ['InsightSelectors'],
              members: {
                TrailName: {},
                InsightSelectors: {
                  shape: 'S2v'
                },
                EventDataStore: {},
                InsightsDestination: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                TrailARN: {},
                InsightSelectors: {
                  shape: 'S2v'
                },
                EventDataStoreArn: {},
                InsightsDestination: {}
              }
            },
            idempotent: true
          },
          PutResourcePolicy: {
            input: {
              type: 'structure',
              required: ['ResourceArn', 'ResourcePolicy'],
              members: {
                ResourceArn: {},
                ResourcePolicy: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ResourceArn: {},
                ResourcePolicy: {}
              }
            },
            idempotent: true
          },
          RegisterOrganizationDelegatedAdmin: {
            input: {
              type: 'structure',
              required: ['MemberAccountId'],
              members: {
                MemberAccountId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          RemoveTags: {
            input: {
              type: 'structure',
              required: ['ResourceId', 'TagsList'],
              members: {
                ResourceId: {},
                TagsList: {
                  shape: 'S3'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          RestoreEventDataStore: {
            input: {
              type: 'structure',
              required: ['EventDataStore'],
              members: {
                EventDataStore: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                EventDataStoreArn: {},
                Name: {},
                Status: {},
                AdvancedEventSelectors: {
                  shape: 'So'
                },
                MultiRegionEnabled: {
                  type: 'boolean'
                },
                OrganizationEnabled: {
                  type: 'boolean'
                },
                RetentionPeriod: {
                  type: 'integer'
                },
                TerminationProtectionEnabled: {
                  type: 'boolean'
                },
                CreatedTimestamp: {
                  type: 'timestamp'
                },
                UpdatedTimestamp: {
                  type: 'timestamp'
                },
                KmsKeyId: {},
                BillingMode: {}
              }
            }
          },
          StartEventDataStoreIngestion: {
            input: {
              type: 'structure',
              required: ['EventDataStore'],
              members: {
                EventDataStore: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          StartImport: {
            input: {
              type: 'structure',
              members: {
                Destinations: {
                  shape: 'S2o'
                },
                ImportSource: {
                  shape: 'S2p'
                },
                StartEventTime: {
                  type: 'timestamp'
                },
                EndEventTime: {
                  type: 'timestamp'
                },
                ImportId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ImportId: {},
                Destinations: {
                  shape: 'S2o'
                },
                ImportSource: {
                  shape: 'S2p'
                },
                StartEventTime: {
                  type: 'timestamp'
                },
                EndEventTime: {
                  type: 'timestamp'
                },
                ImportStatus: {},
                CreatedTimestamp: {
                  type: 'timestamp'
                },
                UpdatedTimestamp: {
                  type: 'timestamp'
                }
              }
            }
          },
          StartLogging: {
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          StartQuery: {
            input: {
              type: 'structure',
              members: {
                QueryStatement: {},
                DeliveryS3Uri: {},
                QueryAlias: {},
                QueryParameters: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                QueryId: {}
              }
            },
            idempotent: true
          },
          StopEventDataStoreIngestion: {
            input: {
              type: 'structure',
              required: ['EventDataStore'],
              members: {
                EventDataStore: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          StopImport: {
            input: {
              type: 'structure',
              required: ['ImportId'],
              members: {
                ImportId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ImportId: {},
                ImportSource: {
                  shape: 'S2p'
                },
                Destinations: {
                  shape: 'S2o'
                },
                ImportStatus: {},
                CreatedTimestamp: {
                  type: 'timestamp'
                },
                UpdatedTimestamp: {
                  type: 'timestamp'
                },
                StartEventTime: {
                  type: 'timestamp'
                },
                EndEventTime: {
                  type: 'timestamp'
                },
                ImportStatistics: {
                  shape: 'S2s'
                }
              }
            }
          },
          StopLogging: {
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          UpdateChannel: {
            input: {
              type: 'structure',
              required: ['Channel'],
              members: {
                Channel: {},
                Destinations: {
                  shape: 'Sg'
                },
                Name: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ChannelArn: {},
                Name: {},
                Source: {},
                Destinations: {
                  shape: 'Sg'
                }
              }
            },
            idempotent: true
          },
          UpdateEventDataStore: {
            input: {
              type: 'structure',
              required: ['EventDataStore'],
              members: {
                EventDataStore: {},
                Name: {},
                AdvancedEventSelectors: {
                  shape: 'So'
                },
                MultiRegionEnabled: {
                  type: 'boolean'
                },
                OrganizationEnabled: {
                  type: 'boolean'
                },
                RetentionPeriod: {
                  type: 'integer'
                },
                TerminationProtectionEnabled: {
                  type: 'boolean'
                },
                KmsKeyId: {},
                BillingMode: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                EventDataStoreArn: {},
                Name: {},
                Status: {},
                AdvancedEventSelectors: {
                  shape: 'So'
                },
                MultiRegionEnabled: {
                  type: 'boolean'
                },
                OrganizationEnabled: {
                  type: 'boolean'
                },
                RetentionPeriod: {
                  type: 'integer'
                },
                TerminationProtectionEnabled: {
                  type: 'boolean'
                },
                CreatedTimestamp: {
                  type: 'timestamp'
                },
                UpdatedTimestamp: {
                  type: 'timestamp'
                },
                KmsKeyId: {},
                BillingMode: {},
                FederationStatus: {},
                FederationRoleArn: {}
              }
            },
            idempotent: true
          },
          UpdateTrail: {
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {},
                S3BucketName: {},
                S3KeyPrefix: {},
                SnsTopicName: {},
                IncludeGlobalServiceEvents: {
                  type: 'boolean'
                },
                IsMultiRegionTrail: {
                  type: 'boolean'
                },
                EnableLogFileValidation: {
                  type: 'boolean'
                },
                CloudWatchLogsLogGroupArn: {},
                CloudWatchLogsRoleArn: {},
                KmsKeyId: {},
                IsOrganizationTrail: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Name: {},
                S3BucketName: {},
                S3KeyPrefix: {},
                SnsTopicName: {
                  deprecated: true
                },
                SnsTopicARN: {},
                IncludeGlobalServiceEvents: {
                  type: 'boolean'
                },
                IsMultiRegionTrail: {
                  type: 'boolean'
                },
                TrailARN: {},
                LogFileValidationEnabled: {
                  type: 'boolean'
                },
                CloudWatchLogsLogGroupArn: {},
                CloudWatchLogsRoleArn: {},
                KmsKeyId: {},
                IsOrganizationTrail: {
                  type: 'boolean'
                }
              }
            },
            idempotent: true
          }
        },
        shapes: {
          S3: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Key'],
              members: {
                Key: {},
                Value: {}
              }
            }
          },
          Sg: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Type', 'Location'],
              members: {
                Type: {},
                Location: {}
              }
            }
          },
          So: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['FieldSelectors'],
              members: {
                Name: {},
                FieldSelectors: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Field'],
                    members: {
                      Field: {},
                      Equals: {
                        shape: 'Su'
                      },
                      StartsWith: {
                        shape: 'Su'
                      },
                      EndsWith: {
                        shape: 'Su'
                      },
                      NotEquals: {
                        shape: 'Su'
                      },
                      NotStartsWith: {
                        shape: 'Su'
                      },
                      NotEndsWith: {
                        shape: 'Su'
                      }
                    }
                  }
                }
              }
            }
          },
          Su: {
            type: 'list',
            member: {}
          },
          S1w: {
            type: 'structure',
            members: {
              Name: {},
              S3BucketName: {},
              S3KeyPrefix: {},
              SnsTopicName: {
                deprecated: true
              },
              SnsTopicARN: {},
              IncludeGlobalServiceEvents: {
                type: 'boolean'
              },
              IsMultiRegionTrail: {
                type: 'boolean'
              },
              HomeRegion: {},
              TrailARN: {},
              LogFileValidationEnabled: {
                type: 'boolean'
              },
              CloudWatchLogsLogGroupArn: {},
              CloudWatchLogsRoleArn: {},
              KmsKeyId: {},
              HasCustomEventSelectors: {
                type: 'boolean'
              },
              HasInsightSelectors: {
                type: 'boolean'
              },
              IsOrganizationTrail: {
                type: 'boolean'
              }
            }
          },
          S2f: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                ReadWriteType: {},
                IncludeManagementEvents: {
                  type: 'boolean'
                },
                DataResources: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Type: {},
                      Values: {
                        type: 'list',
                        member: {}
                      }
                    }
                  }
                },
                ExcludeManagementEventSources: {
                  type: 'list',
                  member: {}
                }
              }
            }
          },
          S2o: {
            type: 'list',
            member: {}
          },
          S2p: {
            type: 'structure',
            required: ['S3'],
            members: {
              S3: {
                type: 'structure',
                required: ['S3LocationUri', 'S3BucketRegion', 'S3BucketAccessRoleArn'],
                members: {
                  S3LocationUri: {},
                  S3BucketRegion: {},
                  S3BucketAccessRoleArn: {}
                }
              }
            }
          },
          S2s: {
            type: 'structure',
            members: {
              PrefixesFound: {
                type: 'long'
              },
              PrefixesCompleted: {
                type: 'long'
              },
              FilesCompleted: {
                type: 'long'
              },
              EventsCompleted: {
                type: 'long'
              },
              FailedEntries: {
                type: 'long'
              }
            }
          },
          S2v: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                InsightType: {}
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=00a2d151a22924694fb077e176eb6ee116fe6178.js.map