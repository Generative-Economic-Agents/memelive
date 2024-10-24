System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2014-03-28',
          endpointPrefix: 'logs',
          jsonVersion: '1.1',
          protocol: 'json',
          serviceFullName: 'Amazon CloudWatch Logs',
          serviceId: 'CloudWatch Logs',
          signatureVersion: 'v4',
          targetPrefix: 'Logs_20140328',
          uid: 'logs-2014-03-28'
        },
        operations: {
          AssociateKmsKey: {
            input: {
              type: 'structure',
              required: ['kmsKeyId'],
              members: {
                logGroupName: {},
                kmsKeyId: {},
                resourceIdentifier: {}
              }
            }
          },
          CancelExportTask: {
            input: {
              type: 'structure',
              required: ['taskId'],
              members: {
                taskId: {}
              }
            }
          },
          CreateDelivery: {
            input: {
              type: 'structure',
              required: ['deliverySourceName', 'deliveryDestinationArn'],
              members: {
                deliverySourceName: {},
                deliveryDestinationArn: {},
                tags: {
                  shape: 'Sa'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                delivery: {
                  shape: 'Se'
                }
              }
            }
          },
          CreateExportTask: {
            input: {
              type: 'structure',
              required: ['logGroupName', 'from', 'to', 'destination'],
              members: {
                taskName: {},
                logGroupName: {},
                logStreamNamePrefix: {},
                from: {
                  type: 'long'
                },
                to: {
                  type: 'long'
                },
                destination: {},
                destinationPrefix: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                taskId: {}
              }
            }
          },
          CreateLogAnomalyDetector: {
            input: {
              type: 'structure',
              required: ['logGroupArnList'],
              members: {
                logGroupArnList: {
                  shape: 'Sp'
                },
                detectorName: {},
                evaluationFrequency: {},
                filterPattern: {},
                kmsKeyId: {},
                anomalyVisibilityTime: {
                  type: 'long'
                },
                tags: {
                  shape: 'Sa'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                anomalyDetectorArn: {}
              }
            }
          },
          CreateLogGroup: {
            input: {
              type: 'structure',
              required: ['logGroupName'],
              members: {
                logGroupName: {},
                kmsKeyId: {},
                tags: {
                  shape: 'Sa'
                },
                logGroupClass: {}
              }
            }
          },
          CreateLogStream: {
            input: {
              type: 'structure',
              required: ['logGroupName', 'logStreamName'],
              members: {
                logGroupName: {},
                logStreamName: {}
              }
            }
          },
          DeleteAccountPolicy: {
            input: {
              type: 'structure',
              required: ['policyName', 'policyType'],
              members: {
                policyName: {},
                policyType: {}
              }
            }
          },
          DeleteDataProtectionPolicy: {
            input: {
              type: 'structure',
              required: ['logGroupIdentifier'],
              members: {
                logGroupIdentifier: {}
              }
            }
          },
          DeleteDelivery: {
            input: {
              type: 'structure',
              required: ['id'],
              members: {
                id: {}
              }
            }
          },
          DeleteDeliveryDestination: {
            input: {
              type: 'structure',
              required: ['name'],
              members: {
                name: {}
              }
            }
          },
          DeleteDeliveryDestinationPolicy: {
            input: {
              type: 'structure',
              required: ['deliveryDestinationName'],
              members: {
                deliveryDestinationName: {}
              }
            }
          },
          DeleteDeliverySource: {
            input: {
              type: 'structure',
              required: ['name'],
              members: {
                name: {}
              }
            }
          },
          DeleteDestination: {
            input: {
              type: 'structure',
              required: ['destinationName'],
              members: {
                destinationName: {}
              }
            }
          },
          DeleteLogAnomalyDetector: {
            input: {
              type: 'structure',
              required: ['anomalyDetectorArn'],
              members: {
                anomalyDetectorArn: {}
              }
            }
          },
          DeleteLogGroup: {
            input: {
              type: 'structure',
              required: ['logGroupName'],
              members: {
                logGroupName: {}
              }
            }
          },
          DeleteLogStream: {
            input: {
              type: 'structure',
              required: ['logGroupName', 'logStreamName'],
              members: {
                logGroupName: {},
                logStreamName: {}
              }
            }
          },
          DeleteMetricFilter: {
            input: {
              type: 'structure',
              required: ['logGroupName', 'filterName'],
              members: {
                logGroupName: {},
                filterName: {}
              }
            }
          },
          DeleteQueryDefinition: {
            input: {
              type: 'structure',
              required: ['queryDefinitionId'],
              members: {
                queryDefinitionId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                success: {
                  type: 'boolean'
                }
              }
            }
          },
          DeleteResourcePolicy: {
            input: {
              type: 'structure',
              members: {
                policyName: {}
              }
            }
          },
          DeleteRetentionPolicy: {
            input: {
              type: 'structure',
              required: ['logGroupName'],
              members: {
                logGroupName: {}
              }
            }
          },
          DeleteSubscriptionFilter: {
            input: {
              type: 'structure',
              required: ['logGroupName', 'filterName'],
              members: {
                logGroupName: {},
                filterName: {}
              }
            }
          },
          DescribeAccountPolicies: {
            input: {
              type: 'structure',
              required: ['policyType'],
              members: {
                policyType: {},
                policyName: {},
                accountIdentifiers: {
                  shape: 'S1p'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                accountPolicies: {
                  type: 'list',
                  member: {
                    shape: 'S1t'
                  }
                }
              }
            }
          },
          DescribeDeliveries: {
            input: {
              type: 'structure',
              members: {
                nextToken: {},
                limit: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                deliveries: {
                  type: 'list',
                  member: {
                    shape: 'Se'
                  }
                },
                nextToken: {}
              }
            }
          },
          DescribeDeliveryDestinations: {
            input: {
              type: 'structure',
              members: {
                nextToken: {},
                limit: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                deliveryDestinations: {
                  type: 'list',
                  member: {
                    shape: 'S25'
                  }
                },
                nextToken: {}
              }
            }
          },
          DescribeDeliverySources: {
            input: {
              type: 'structure',
              members: {
                nextToken: {},
                limit: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                deliverySources: {
                  type: 'list',
                  member: {
                    shape: 'S2b'
                  }
                },
                nextToken: {}
              }
            }
          },
          DescribeDestinations: {
            input: {
              type: 'structure',
              members: {
                DestinationNamePrefix: {},
                nextToken: {},
                limit: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                destinations: {
                  type: 'list',
                  member: {
                    shape: 'S2i'
                  }
                },
                nextToken: {}
              }
            }
          },
          DescribeExportTasks: {
            input: {
              type: 'structure',
              members: {
                taskId: {},
                statusCode: {},
                nextToken: {},
                limit: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                exportTasks: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      taskId: {},
                      taskName: {},
                      logGroupName: {},
                      from: {
                        type: 'long'
                      },
                      to: {
                        type: 'long'
                      },
                      destination: {},
                      destinationPrefix: {},
                      status: {
                        type: 'structure',
                        members: {
                          code: {},
                          message: {}
                        }
                      },
                      executionInfo: {
                        type: 'structure',
                        members: {
                          creationTime: {
                            type: 'long'
                          },
                          completionTime: {
                            type: 'long'
                          }
                        }
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          DescribeLogGroups: {
            input: {
              type: 'structure',
              members: {
                accountIdentifiers: {
                  shape: 'S1p'
                },
                logGroupNamePrefix: {},
                logGroupNamePattern: {},
                nextToken: {},
                limit: {
                  type: 'integer'
                },
                includeLinkedAccounts: {
                  type: 'boolean'
                },
                logGroupClass: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                logGroups: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      logGroupName: {},
                      creationTime: {
                        type: 'long'
                      },
                      retentionInDays: {
                        type: 'integer'
                      },
                      metricFilterCount: {
                        type: 'integer'
                      },
                      arn: {},
                      storedBytes: {
                        type: 'long'
                      },
                      kmsKeyId: {},
                      dataProtectionStatus: {},
                      inheritedProperties: {
                        type: 'list',
                        member: {}
                      },
                      logGroupClass: {},
                      logGroupArn: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          DescribeLogStreams: {
            input: {
              type: 'structure',
              members: {
                logGroupName: {},
                logGroupIdentifier: {},
                logStreamNamePrefix: {},
                orderBy: {},
                descending: {
                  type: 'boolean'
                },
                nextToken: {},
                limit: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                logStreams: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      logStreamName: {},
                      creationTime: {
                        type: 'long'
                      },
                      firstEventTimestamp: {
                        type: 'long'
                      },
                      lastEventTimestamp: {
                        type: 'long'
                      },
                      lastIngestionTime: {
                        type: 'long'
                      },
                      uploadSequenceToken: {},
                      arn: {},
                      storedBytes: {
                        deprecated: true,
                        deprecatedMessage: 'Starting on June 17, 2019, this parameter will be deprecated for log streams, and will be reported as zero. This change applies only to log streams. The storedBytes parameter for log groups is not affected.',
                        type: 'long'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          DescribeMetricFilters: {
            input: {
              type: 'structure',
              members: {
                logGroupName: {},
                filterNamePrefix: {},
                nextToken: {},
                limit: {
                  type: 'integer'
                },
                metricName: {},
                metricNamespace: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                metricFilters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      filterName: {},
                      filterPattern: {},
                      metricTransformations: {
                        shape: 'S3j'
                      },
                      creationTime: {
                        type: 'long'
                      },
                      logGroupName: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          DescribeQueries: {
            input: {
              type: 'structure',
              members: {
                logGroupName: {},
                status: {},
                maxResults: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                queries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      queryId: {},
                      queryString: {},
                      status: {},
                      createTime: {
                        type: 'long'
                      },
                      logGroupName: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          DescribeQueryDefinitions: {
            input: {
              type: 'structure',
              members: {
                queryDefinitionNamePrefix: {},
                maxResults: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                queryDefinitions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      queryDefinitionId: {},
                      name: {},
                      queryString: {},
                      lastModified: {
                        type: 'long'
                      },
                      logGroupNames: {
                        shape: 'S45'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          DescribeResourcePolicies: {
            input: {
              type: 'structure',
              members: {
                nextToken: {},
                limit: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                resourcePolicies: {
                  type: 'list',
                  member: {
                    shape: 'S49'
                  }
                },
                nextToken: {}
              }
            }
          },
          DescribeSubscriptionFilters: {
            input: {
              type: 'structure',
              required: ['logGroupName'],
              members: {
                logGroupName: {},
                filterNamePrefix: {},
                nextToken: {},
                limit: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                subscriptionFilters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      filterName: {},
                      logGroupName: {},
                      filterPattern: {},
                      destinationArn: {},
                      roleArn: {},
                      distribution: {},
                      creationTime: {
                        type: 'long'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          DisassociateKmsKey: {
            input: {
              type: 'structure',
              members: {
                logGroupName: {},
                resourceIdentifier: {}
              }
            }
          },
          FilterLogEvents: {
            input: {
              type: 'structure',
              members: {
                logGroupName: {},
                logGroupIdentifier: {},
                logStreamNames: {
                  shape: 'S4j'
                },
                logStreamNamePrefix: {},
                startTime: {
                  type: 'long'
                },
                endTime: {
                  type: 'long'
                },
                filterPattern: {},
                nextToken: {},
                limit: {
                  type: 'integer'
                },
                interleaved: {
                  deprecated: true,
                  deprecatedMessage: 'Starting on June 17, 2019, this parameter will be ignored and the value will be assumed to be true. The response from this operation will always interleave events from multiple log streams within a log group.',
                  type: 'boolean'
                },
                unmask: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                events: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      logStreamName: {},
                      timestamp: {
                        type: 'long'
                      },
                      message: {},
                      ingestionTime: {
                        type: 'long'
                      },
                      eventId: {}
                    }
                  }
                },
                searchedLogStreams: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      logStreamName: {},
                      searchedCompletely: {
                        type: 'boolean'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          GetDataProtectionPolicy: {
            input: {
              type: 'structure',
              required: ['logGroupIdentifier'],
              members: {
                logGroupIdentifier: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                logGroupIdentifier: {},
                policyDocument: {},
                lastUpdatedTime: {
                  type: 'long'
                }
              }
            }
          },
          GetDelivery: {
            input: {
              type: 'structure',
              required: ['id'],
              members: {
                id: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                delivery: {
                  shape: 'Se'
                }
              }
            }
          },
          GetDeliveryDestination: {
            input: {
              type: 'structure',
              required: ['name'],
              members: {
                name: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                deliveryDestination: {
                  shape: 'S25'
                }
              }
            }
          },
          GetDeliveryDestinationPolicy: {
            input: {
              type: 'structure',
              required: ['deliveryDestinationName'],
              members: {
                deliveryDestinationName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                policy: {
                  shape: 'S54'
                }
              }
            }
          },
          GetDeliverySource: {
            input: {
              type: 'structure',
              required: ['name'],
              members: {
                name: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                deliverySource: {
                  shape: 'S2b'
                }
              }
            }
          },
          GetLogAnomalyDetector: {
            input: {
              type: 'structure',
              required: ['anomalyDetectorArn'],
              members: {
                anomalyDetectorArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                detectorName: {},
                logGroupArnList: {
                  shape: 'Sp'
                },
                evaluationFrequency: {},
                filterPattern: {},
                anomalyDetectorStatus: {},
                kmsKeyId: {},
                creationTimeStamp: {
                  type: 'long'
                },
                lastModifiedTimeStamp: {
                  type: 'long'
                },
                anomalyVisibilityTime: {
                  type: 'long'
                }
              }
            }
          },
          GetLogEvents: {
            input: {
              type: 'structure',
              required: ['logStreamName'],
              members: {
                logGroupName: {},
                logGroupIdentifier: {},
                logStreamName: {},
                startTime: {
                  type: 'long'
                },
                endTime: {
                  type: 'long'
                },
                nextToken: {},
                limit: {
                  type: 'integer'
                },
                startFromHead: {
                  type: 'boolean'
                },
                unmask: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                events: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      timestamp: {
                        type: 'long'
                      },
                      message: {},
                      ingestionTime: {
                        type: 'long'
                      }
                    }
                  }
                },
                nextForwardToken: {},
                nextBackwardToken: {}
              }
            }
          },
          GetLogGroupFields: {
            input: {
              type: 'structure',
              members: {
                logGroupName: {},
                time: {
                  type: 'long'
                },
                logGroupIdentifier: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                logGroupFields: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      name: {},
                      percent: {
                        type: 'integer'
                      }
                    }
                  }
                }
              }
            }
          },
          GetLogRecord: {
            input: {
              type: 'structure',
              required: ['logRecordPointer'],
              members: {
                logRecordPointer: {},
                unmask: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                logRecord: {
                  type: 'map',
                  key: {},
                  value: {}
                }
              }
            }
          },
          GetQueryResults: {
            input: {
              type: 'structure',
              required: ['queryId'],
              members: {
                queryId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                results: {
                  type: 'list',
                  member: {
                    type: 'list',
                    member: {
                      type: 'structure',
                      members: {
                        field: {},
                        value: {}
                      }
                    }
                  }
                },
                statistics: {
                  type: 'structure',
                  members: {
                    recordsMatched: {
                      type: 'double'
                    },
                    recordsScanned: {
                      type: 'double'
                    },
                    bytesScanned: {
                      type: 'double'
                    }
                  }
                },
                status: {},
                encryptionKey: {}
              }
            }
          },
          ListAnomalies: {
            input: {
              type: 'structure',
              members: {
                anomalyDetectorArn: {},
                suppressionState: {},
                limit: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                anomalies: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['anomalyId', 'patternId', 'anomalyDetectorArn', 'patternString', 'firstSeen', 'lastSeen', 'description', 'active', 'state', 'histogram', 'logSamples', 'patternTokens', 'logGroupArnList'],
                    members: {
                      anomalyId: {},
                      patternId: {},
                      anomalyDetectorArn: {},
                      patternString: {},
                      patternRegex: {},
                      priority: {},
                      firstSeen: {
                        type: 'long'
                      },
                      lastSeen: {
                        type: 'long'
                      },
                      description: {},
                      active: {
                        type: 'boolean'
                      },
                      state: {},
                      histogram: {
                        type: 'map',
                        key: {},
                        value: {
                          type: 'long'
                        }
                      },
                      logSamples: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            timestamp: {
                              type: 'long'
                            },
                            message: {}
                          }
                        }
                      },
                      patternTokens: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            dynamicTokenPosition: {
                              type: 'integer'
                            },
                            isDynamic: {
                              type: 'boolean'
                            },
                            tokenString: {},
                            enumerations: {
                              type: 'map',
                              key: {},
                              value: {
                                type: 'long'
                              }
                            }
                          }
                        }
                      },
                      logGroupArnList: {
                        shape: 'Sp'
                      },
                      suppressed: {
                        type: 'boolean'
                      },
                      suppressedDate: {
                        type: 'long'
                      },
                      suppressedUntil: {
                        type: 'long'
                      },
                      isPatternLevelSuppression: {
                        type: 'boolean'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListLogAnomalyDetectors: {
            input: {
              type: 'structure',
              members: {
                filterLogGroupArn: {},
                limit: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                anomalyDetectors: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      anomalyDetectorArn: {},
                      detectorName: {},
                      logGroupArnList: {
                        shape: 'Sp'
                      },
                      evaluationFrequency: {},
                      filterPattern: {},
                      anomalyDetectorStatus: {},
                      kmsKeyId: {},
                      creationTimeStamp: {
                        type: 'long'
                      },
                      lastModifiedTimeStamp: {
                        type: 'long'
                      },
                      anomalyVisibilityTime: {
                        type: 'long'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListTagsForResource: {
            input: {
              type: 'structure',
              required: ['resourceArn'],
              members: {
                resourceArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                tags: {
                  shape: 'Sa'
                }
              }
            }
          },
          ListTagsLogGroup: {
            input: {
              type: 'structure',
              required: ['logGroupName'],
              members: {
                logGroupName: {}
              },
              deprecated: true,
              deprecatedMessage: 'Please use the generic tagging API model ListTagsForResourceRequest and ListTagsForResourceResponse'
            },
            output: {
              type: 'structure',
              members: {
                tags: {
                  shape: 'Sa'
                }
              },
              deprecated: true,
              deprecatedMessage: 'Please use the generic tagging API model ListTagsForResourceRequest and ListTagsForResourceResponse'
            },
            deprecated: true,
            deprecatedMessage: 'Please use the generic tagging API ListTagsForResource'
          },
          PutAccountPolicy: {
            input: {
              type: 'structure',
              required: ['policyName', 'policyDocument', 'policyType'],
              members: {
                policyName: {},
                policyDocument: {},
                policyType: {},
                scope: {},
                selectionCriteria: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                accountPolicy: {
                  shape: 'S1t'
                }
              }
            }
          },
          PutDataProtectionPolicy: {
            input: {
              type: 'structure',
              required: ['logGroupIdentifier', 'policyDocument'],
              members: {
                logGroupIdentifier: {},
                policyDocument: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                logGroupIdentifier: {},
                policyDocument: {},
                lastUpdatedTime: {
                  type: 'long'
                }
              }
            }
          },
          PutDeliveryDestination: {
            input: {
              type: 'structure',
              required: ['name', 'deliveryDestinationConfiguration'],
              members: {
                name: {},
                outputFormat: {},
                deliveryDestinationConfiguration: {
                  shape: 'S27'
                },
                tags: {
                  shape: 'Sa'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                deliveryDestination: {
                  shape: 'S25'
                }
              }
            }
          },
          PutDeliveryDestinationPolicy: {
            input: {
              type: 'structure',
              required: ['deliveryDestinationName', 'deliveryDestinationPolicy'],
              members: {
                deliveryDestinationName: {},
                deliveryDestinationPolicy: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                policy: {
                  shape: 'S54'
                }
              }
            }
          },
          PutDeliverySource: {
            input: {
              type: 'structure',
              required: ['name', 'resourceArn', 'logType'],
              members: {
                name: {},
                resourceArn: {},
                logType: {},
                tags: {
                  shape: 'Sa'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                deliverySource: {
                  shape: 'S2b'
                }
              }
            }
          },
          PutDestination: {
            input: {
              type: 'structure',
              required: ['destinationName', 'targetArn', 'roleArn'],
              members: {
                destinationName: {},
                targetArn: {},
                roleArn: {},
                tags: {
                  shape: 'Sa'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                destination: {
                  shape: 'S2i'
                }
              }
            }
          },
          PutDestinationPolicy: {
            input: {
              type: 'structure',
              required: ['destinationName', 'accessPolicy'],
              members: {
                destinationName: {},
                accessPolicy: {},
                forceUpdate: {
                  type: 'boolean'
                }
              }
            }
          },
          PutLogEvents: {
            input: {
              type: 'structure',
              required: ['logGroupName', 'logStreamName', 'logEvents'],
              members: {
                logGroupName: {},
                logStreamName: {},
                logEvents: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['timestamp', 'message'],
                    members: {
                      timestamp: {
                        type: 'long'
                      },
                      message: {}
                    }
                  }
                },
                sequenceToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                nextSequenceToken: {},
                rejectedLogEventsInfo: {
                  type: 'structure',
                  members: {
                    tooNewLogEventStartIndex: {
                      type: 'integer'
                    },
                    tooOldLogEventEndIndex: {
                      type: 'integer'
                    },
                    expiredLogEventEndIndex: {
                      type: 'integer'
                    }
                  }
                }
              }
            }
          },
          PutMetricFilter: {
            input: {
              type: 'structure',
              required: ['logGroupName', 'filterName', 'filterPattern', 'metricTransformations'],
              members: {
                logGroupName: {},
                filterName: {},
                filterPattern: {},
                metricTransformations: {
                  shape: 'S3j'
                }
              }
            }
          },
          PutQueryDefinition: {
            input: {
              type: 'structure',
              required: ['name', 'queryString'],
              members: {
                name: {},
                queryDefinitionId: {},
                logGroupNames: {
                  shape: 'S45'
                },
                queryString: {},
                clientToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                queryDefinitionId: {}
              }
            }
          },
          PutResourcePolicy: {
            input: {
              type: 'structure',
              members: {
                policyName: {},
                policyDocument: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                resourcePolicy: {
                  shape: 'S49'
                }
              }
            }
          },
          PutRetentionPolicy: {
            input: {
              type: 'structure',
              required: ['logGroupName', 'retentionInDays'],
              members: {
                logGroupName: {},
                retentionInDays: {
                  type: 'integer'
                }
              }
            }
          },
          PutSubscriptionFilter: {
            input: {
              type: 'structure',
              required: ['logGroupName', 'filterName', 'filterPattern', 'destinationArn'],
              members: {
                logGroupName: {},
                filterName: {},
                filterPattern: {},
                destinationArn: {},
                roleArn: {},
                distribution: {}
              }
            }
          },
          StartLiveTail: {
            input: {
              type: 'structure',
              required: ['logGroupIdentifiers'],
              members: {
                logGroupIdentifiers: {
                  shape: 'S7s'
                },
                logStreamNames: {
                  shape: 'S4j'
                },
                logStreamNamePrefixes: {
                  shape: 'S4j'
                },
                logEventFilterPattern: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                responseStream: {
                  type: 'structure',
                  members: {
                    sessionStart: {
                      type: 'structure',
                      members: {
                        requestId: {},
                        sessionId: {},
                        logGroupIdentifiers: {
                          shape: 'S7s'
                        },
                        logStreamNames: {
                          shape: 'S4j'
                        },
                        logStreamNamePrefixes: {
                          shape: 'S4j'
                        },
                        logEventFilterPattern: {}
                      },
                      event: true
                    },
                    sessionUpdate: {
                      type: 'structure',
                      members: {
                        sessionMetadata: {
                          type: 'structure',
                          members: {
                            sampled: {
                              type: 'boolean'
                            }
                          }
                        },
                        sessionResults: {
                          type: 'list',
                          member: {
                            type: 'structure',
                            members: {
                              logStreamName: {},
                              logGroupIdentifier: {},
                              message: {},
                              timestamp: {
                                type: 'long'
                              },
                              ingestionTime: {
                                type: 'long'
                              }
                            }
                          }
                        }
                      },
                      event: true
                    },
                    SessionTimeoutException: {
                      type: 'structure',
                      members: {
                        message: {}
                      },
                      exception: true
                    },
                    SessionStreamingException: {
                      type: 'structure',
                      members: {
                        message: {}
                      },
                      exception: true
                    }
                  },
                  eventstream: true
                }
              }
            },
            endpoint: {
              hostPrefix: 'streaming-'
            }
          },
          StartQuery: {
            input: {
              type: 'structure',
              required: ['startTime', 'endTime', 'queryString'],
              members: {
                logGroupName: {},
                logGroupNames: {
                  shape: 'S45'
                },
                logGroupIdentifiers: {
                  type: 'list',
                  member: {}
                },
                startTime: {
                  type: 'long'
                },
                endTime: {
                  type: 'long'
                },
                queryString: {},
                limit: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                queryId: {}
              }
            }
          },
          StopQuery: {
            input: {
              type: 'structure',
              required: ['queryId'],
              members: {
                queryId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                success: {
                  type: 'boolean'
                }
              }
            }
          },
          TagLogGroup: {
            input: {
              type: 'structure',
              required: ['logGroupName', 'tags'],
              members: {
                logGroupName: {},
                tags: {
                  shape: 'Sa'
                }
              },
              deprecated: true,
              deprecatedMessage: 'Please use the generic tagging API model TagResourceRequest'
            },
            deprecated: true,
            deprecatedMessage: 'Please use the generic tagging API TagResource'
          },
          TagResource: {
            input: {
              type: 'structure',
              required: ['resourceArn', 'tags'],
              members: {
                resourceArn: {},
                tags: {
                  shape: 'Sa'
                }
              }
            }
          },
          TestMetricFilter: {
            input: {
              type: 'structure',
              required: ['filterPattern', 'logEventMessages'],
              members: {
                filterPattern: {},
                logEventMessages: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                matches: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      eventNumber: {
                        type: 'long'
                      },
                      eventMessage: {},
                      extractedValues: {
                        type: 'map',
                        key: {},
                        value: {}
                      }
                    }
                  }
                }
              }
            }
          },
          UntagLogGroup: {
            input: {
              type: 'structure',
              required: ['logGroupName', 'tags'],
              members: {
                logGroupName: {},
                tags: {
                  type: 'list',
                  member: {}
                }
              },
              deprecated: true,
              deprecatedMessage: 'Please use the generic tagging API model UntagResourceRequest'
            },
            deprecated: true,
            deprecatedMessage: 'Please use the generic tagging API UntagResource'
          },
          UntagResource: {
            input: {
              type: 'structure',
              required: ['resourceArn', 'tagKeys'],
              members: {
                resourceArn: {},
                tagKeys: {
                  type: 'list',
                  member: {}
                }
              }
            }
          },
          UpdateAnomaly: {
            input: {
              type: 'structure',
              required: ['anomalyDetectorArn'],
              members: {
                anomalyId: {},
                patternId: {},
                anomalyDetectorArn: {},
                suppressionType: {},
                suppressionPeriod: {
                  type: 'structure',
                  members: {
                    value: {
                      type: 'integer'
                    },
                    suppressionUnit: {}
                  }
                }
              }
            }
          },
          UpdateLogAnomalyDetector: {
            input: {
              type: 'structure',
              required: ['anomalyDetectorArn', 'enabled'],
              members: {
                anomalyDetectorArn: {},
                evaluationFrequency: {},
                filterPattern: {},
                anomalyVisibilityTime: {
                  type: 'long'
                },
                enabled: {
                  type: 'boolean'
                }
              }
            }
          }
        },
        shapes: {
          Sa: {
            type: 'map',
            key: {},
            value: {}
          },
          Se: {
            type: 'structure',
            members: {
              id: {},
              arn: {},
              deliverySourceName: {},
              deliveryDestinationArn: {},
              deliveryDestinationType: {},
              tags: {
                shape: 'Sa'
              }
            }
          },
          Sp: {
            type: 'list',
            member: {}
          },
          S1p: {
            type: 'list',
            member: {}
          },
          S1t: {
            type: 'structure',
            members: {
              policyName: {},
              policyDocument: {},
              lastUpdatedTime: {
                type: 'long'
              },
              policyType: {},
              scope: {},
              selectionCriteria: {},
              accountId: {}
            }
          },
          S25: {
            type: 'structure',
            members: {
              name: {},
              arn: {},
              deliveryDestinationType: {},
              outputFormat: {},
              deliveryDestinationConfiguration: {
                shape: 'S27'
              },
              tags: {
                shape: 'Sa'
              }
            }
          },
          S27: {
            type: 'structure',
            required: ['destinationResourceArn'],
            members: {
              destinationResourceArn: {}
            }
          },
          S2b: {
            type: 'structure',
            members: {
              name: {},
              arn: {},
              resourceArns: {
                type: 'list',
                member: {}
              },
              service: {},
              logType: {},
              tags: {
                shape: 'Sa'
              }
            }
          },
          S2i: {
            type: 'structure',
            members: {
              destinationName: {},
              targetArn: {},
              roleArn: {},
              accessPolicy: {},
              arn: {},
              creationTime: {
                type: 'long'
              }
            }
          },
          S3j: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['metricName', 'metricNamespace', 'metricValue'],
              members: {
                metricName: {},
                metricNamespace: {},
                metricValue: {},
                defaultValue: {
                  type: 'double'
                },
                dimensions: {
                  type: 'map',
                  key: {},
                  value: {}
                },
                unit: {}
              }
            }
          },
          S45: {
            type: 'list',
            member: {}
          },
          S49: {
            type: 'structure',
            members: {
              policyName: {},
              policyDocument: {},
              lastUpdatedTime: {
                type: 'long'
              }
            }
          },
          S4j: {
            type: 'list',
            member: {}
          },
          S54: {
            type: 'structure',
            members: {
              deliveryDestinationPolicy: {}
            }
          },
          S7s: {
            type: 'list',
            member: {}
          }
        }
      });
    }
  };
});
//# sourceMappingURL=fc55aa9878c8b1300cc6e82ef0b9edfdb4d7431f.js.map