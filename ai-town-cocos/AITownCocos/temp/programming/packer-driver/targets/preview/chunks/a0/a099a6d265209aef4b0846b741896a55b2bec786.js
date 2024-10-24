System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2017-11-27',
          endpointPrefix: 'iotanalytics',
          protocol: 'rest-json',
          serviceFullName: 'AWS IoT Analytics',
          serviceId: 'IoTAnalytics',
          signatureVersion: 'v4',
          signingName: 'iotanalytics',
          uid: 'iotanalytics-2017-11-27'
        },
        operations: {
          BatchPutMessage: {
            http: {
              requestUri: '/messages/batch',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['channelName', 'messages'],
              members: {
                channelName: {},
                messages: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['messageId', 'payload'],
                    members: {
                      messageId: {},
                      payload: {
                        type: 'blob'
                      }
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                batchPutMessageErrorEntries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      messageId: {},
                      errorCode: {},
                      errorMessage: {}
                    }
                  }
                }
              }
            }
          },
          CancelPipelineReprocessing: {
            http: {
              method: 'DELETE',
              requestUri: '/pipelines/{pipelineName}/reprocessing/{reprocessingId}'
            },
            input: {
              type: 'structure',
              required: ['pipelineName', 'reprocessingId'],
              members: {
                pipelineName: {
                  location: 'uri',
                  locationName: 'pipelineName'
                },
                reprocessingId: {
                  location: 'uri',
                  locationName: 'reprocessingId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          CreateChannel: {
            http: {
              requestUri: '/channels',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['channelName'],
              members: {
                channelName: {},
                channelStorage: {
                  shape: 'Sh'
                },
                retentionPeriod: {
                  shape: 'Sn'
                },
                tags: {
                  shape: 'Sq'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                channelName: {},
                channelArn: {},
                retentionPeriod: {
                  shape: 'Sn'
                }
              }
            }
          },
          CreateDataset: {
            http: {
              requestUri: '/datasets',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['datasetName', 'actions'],
              members: {
                datasetName: {},
                actions: {
                  shape: 'Sy'
                },
                triggers: {
                  shape: 'S1l'
                },
                contentDeliveryRules: {
                  shape: 'S1q'
                },
                retentionPeriod: {
                  shape: 'Sn'
                },
                versioningConfiguration: {
                  shape: 'S21'
                },
                tags: {
                  shape: 'Sq'
                },
                lateDataRules: {
                  shape: 'S24'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                datasetName: {},
                datasetArn: {},
                retentionPeriod: {
                  shape: 'Sn'
                }
              }
            }
          },
          CreateDatasetContent: {
            http: {
              requestUri: '/datasets/{datasetName}/content'
            },
            input: {
              type: 'structure',
              required: ['datasetName'],
              members: {
                datasetName: {
                  location: 'uri',
                  locationName: 'datasetName'
                },
                versionId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                versionId: {}
              }
            }
          },
          CreateDatastore: {
            http: {
              requestUri: '/datastores',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['datastoreName'],
              members: {
                datastoreName: {},
                datastoreStorage: {
                  shape: 'S2h'
                },
                retentionPeriod: {
                  shape: 'Sn'
                },
                tags: {
                  shape: 'Sq'
                },
                fileFormatConfiguration: {
                  shape: 'S2m'
                },
                datastorePartitions: {
                  shape: 'S2u'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                datastoreName: {},
                datastoreArn: {},
                retentionPeriod: {
                  shape: 'Sn'
                }
              }
            }
          },
          CreatePipeline: {
            http: {
              requestUri: '/pipelines',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['pipelineName', 'pipelineActivities'],
              members: {
                pipelineName: {},
                pipelineActivities: {
                  shape: 'S34'
                },
                tags: {
                  shape: 'Sq'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                pipelineName: {},
                pipelineArn: {}
              }
            }
          },
          DeleteChannel: {
            http: {
              method: 'DELETE',
              requestUri: '/channels/{channelName}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['channelName'],
              members: {
                channelName: {
                  location: 'uri',
                  locationName: 'channelName'
                }
              }
            }
          },
          DeleteDataset: {
            http: {
              method: 'DELETE',
              requestUri: '/datasets/{datasetName}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['datasetName'],
              members: {
                datasetName: {
                  location: 'uri',
                  locationName: 'datasetName'
                }
              }
            }
          },
          DeleteDatasetContent: {
            http: {
              method: 'DELETE',
              requestUri: '/datasets/{datasetName}/content',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['datasetName'],
              members: {
                datasetName: {
                  location: 'uri',
                  locationName: 'datasetName'
                },
                versionId: {
                  location: 'querystring',
                  locationName: 'versionId'
                }
              }
            }
          },
          DeleteDatastore: {
            http: {
              method: 'DELETE',
              requestUri: '/datastores/{datastoreName}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['datastoreName'],
              members: {
                datastoreName: {
                  location: 'uri',
                  locationName: 'datastoreName'
                }
              }
            }
          },
          DeletePipeline: {
            http: {
              method: 'DELETE',
              requestUri: '/pipelines/{pipelineName}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['pipelineName'],
              members: {
                pipelineName: {
                  location: 'uri',
                  locationName: 'pipelineName'
                }
              }
            }
          },
          DescribeChannel: {
            http: {
              method: 'GET',
              requestUri: '/channels/{channelName}'
            },
            input: {
              type: 'structure',
              required: ['channelName'],
              members: {
                channelName: {
                  location: 'uri',
                  locationName: 'channelName'
                },
                includeStatistics: {
                  location: 'querystring',
                  locationName: 'includeStatistics',
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                channel: {
                  type: 'structure',
                  members: {
                    name: {},
                    storage: {
                      shape: 'Sh'
                    },
                    arn: {},
                    status: {},
                    retentionPeriod: {
                      shape: 'Sn'
                    },
                    creationTime: {
                      type: 'timestamp'
                    },
                    lastUpdateTime: {
                      type: 'timestamp'
                    },
                    lastMessageArrivalTime: {
                      type: 'timestamp'
                    }
                  }
                },
                statistics: {
                  type: 'structure',
                  members: {
                    size: {
                      shape: 'S42'
                    }
                  }
                }
              }
            }
          },
          DescribeDataset: {
            http: {
              method: 'GET',
              requestUri: '/datasets/{datasetName}'
            },
            input: {
              type: 'structure',
              required: ['datasetName'],
              members: {
                datasetName: {
                  location: 'uri',
                  locationName: 'datasetName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                dataset: {
                  type: 'structure',
                  members: {
                    name: {},
                    arn: {},
                    actions: {
                      shape: 'Sy'
                    },
                    triggers: {
                      shape: 'S1l'
                    },
                    contentDeliveryRules: {
                      shape: 'S1q'
                    },
                    status: {},
                    creationTime: {
                      type: 'timestamp'
                    },
                    lastUpdateTime: {
                      type: 'timestamp'
                    },
                    retentionPeriod: {
                      shape: 'Sn'
                    },
                    versioningConfiguration: {
                      shape: 'S21'
                    },
                    lateDataRules: {
                      shape: 'S24'
                    }
                  }
                }
              }
            }
          },
          DescribeDatastore: {
            http: {
              method: 'GET',
              requestUri: '/datastores/{datastoreName}'
            },
            input: {
              type: 'structure',
              required: ['datastoreName'],
              members: {
                datastoreName: {
                  location: 'uri',
                  locationName: 'datastoreName'
                },
                includeStatistics: {
                  location: 'querystring',
                  locationName: 'includeStatistics',
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                datastore: {
                  type: 'structure',
                  members: {
                    name: {},
                    storage: {
                      shape: 'S2h'
                    },
                    arn: {},
                    status: {},
                    retentionPeriod: {
                      shape: 'Sn'
                    },
                    creationTime: {
                      type: 'timestamp'
                    },
                    lastUpdateTime: {
                      type: 'timestamp'
                    },
                    lastMessageArrivalTime: {
                      type: 'timestamp'
                    },
                    fileFormatConfiguration: {
                      shape: 'S2m'
                    },
                    datastorePartitions: {
                      shape: 'S2u'
                    }
                  }
                },
                statistics: {
                  type: 'structure',
                  members: {
                    size: {
                      shape: 'S42'
                    }
                  }
                }
              }
            }
          },
          DescribeLoggingOptions: {
            http: {
              method: 'GET',
              requestUri: '/logging'
            },
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {
                loggingOptions: {
                  shape: 'S4f'
                }
              }
            }
          },
          DescribePipeline: {
            http: {
              method: 'GET',
              requestUri: '/pipelines/{pipelineName}'
            },
            input: {
              type: 'structure',
              required: ['pipelineName'],
              members: {
                pipelineName: {
                  location: 'uri',
                  locationName: 'pipelineName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                pipeline: {
                  type: 'structure',
                  members: {
                    name: {},
                    arn: {},
                    activities: {
                      shape: 'S34'
                    },
                    reprocessingSummaries: {
                      shape: 'S4l'
                    },
                    creationTime: {
                      type: 'timestamp'
                    },
                    lastUpdateTime: {
                      type: 'timestamp'
                    }
                  }
                }
              }
            }
          },
          GetDatasetContent: {
            http: {
              method: 'GET',
              requestUri: '/datasets/{datasetName}/content'
            },
            input: {
              type: 'structure',
              required: ['datasetName'],
              members: {
                datasetName: {
                  location: 'uri',
                  locationName: 'datasetName'
                },
                versionId: {
                  location: 'querystring',
                  locationName: 'versionId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                entries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      entryName: {},
                      dataURI: {}
                    }
                  }
                },
                timestamp: {
                  type: 'timestamp'
                },
                status: {
                  shape: 'S4t'
                }
              }
            }
          },
          ListChannels: {
            http: {
              method: 'GET',
              requestUri: '/channels'
            },
            input: {
              type: 'structure',
              members: {
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                maxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                channelSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      channelName: {},
                      channelStorage: {
                        type: 'structure',
                        members: {
                          serviceManagedS3: {
                            type: 'structure',
                            members: {}
                          },
                          customerManagedS3: {
                            type: 'structure',
                            members: {
                              bucket: {},
                              keyPrefix: {},
                              roleArn: {}
                            }
                          }
                        }
                      },
                      status: {},
                      creationTime: {
                        type: 'timestamp'
                      },
                      lastUpdateTime: {
                        type: 'timestamp'
                      },
                      lastMessageArrivalTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListDatasetContents: {
            http: {
              method: 'GET',
              requestUri: '/datasets/{datasetName}/contents'
            },
            input: {
              type: 'structure',
              required: ['datasetName'],
              members: {
                datasetName: {
                  location: 'uri',
                  locationName: 'datasetName'
                },
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                maxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                scheduledOnOrAfter: {
                  location: 'querystring',
                  locationName: 'scheduledOnOrAfter',
                  type: 'timestamp'
                },
                scheduledBefore: {
                  location: 'querystring',
                  locationName: 'scheduledBefore',
                  type: 'timestamp'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                datasetContentSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      version: {},
                      status: {
                        shape: 'S4t'
                      },
                      creationTime: {
                        type: 'timestamp'
                      },
                      scheduleTime: {
                        type: 'timestamp'
                      },
                      completionTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListDatasets: {
            http: {
              method: 'GET',
              requestUri: '/datasets'
            },
            input: {
              type: 'structure',
              members: {
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                maxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                datasetSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      datasetName: {},
                      status: {},
                      creationTime: {
                        type: 'timestamp'
                      },
                      lastUpdateTime: {
                        type: 'timestamp'
                      },
                      triggers: {
                        shape: 'S1l'
                      },
                      actions: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            actionName: {},
                            actionType: {}
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
          ListDatastores: {
            http: {
              method: 'GET',
              requestUri: '/datastores'
            },
            input: {
              type: 'structure',
              members: {
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                maxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                datastoreSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      datastoreName: {},
                      datastoreStorage: {
                        type: 'structure',
                        members: {
                          serviceManagedS3: {
                            type: 'structure',
                            members: {}
                          },
                          customerManagedS3: {
                            type: 'structure',
                            members: {
                              bucket: {},
                              keyPrefix: {},
                              roleArn: {}
                            }
                          },
                          iotSiteWiseMultiLayerStorage: {
                            type: 'structure',
                            members: {
                              customerManagedS3Storage: {
                                type: 'structure',
                                members: {
                                  bucket: {},
                                  keyPrefix: {}
                                }
                              }
                            }
                          }
                        }
                      },
                      status: {},
                      creationTime: {
                        type: 'timestamp'
                      },
                      lastUpdateTime: {
                        type: 'timestamp'
                      },
                      lastMessageArrivalTime: {
                        type: 'timestamp'
                      },
                      fileFormatType: {},
                      datastorePartitions: {
                        shape: 'S2u'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListPipelines: {
            http: {
              method: 'GET',
              requestUri: '/pipelines'
            },
            input: {
              type: 'structure',
              members: {
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                maxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                pipelineSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      pipelineName: {},
                      reprocessingSummaries: {
                        shape: 'S4l'
                      },
                      creationTime: {
                        type: 'timestamp'
                      },
                      lastUpdateTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListTagsForResource: {
            http: {
              method: 'GET',
              requestUri: '/tags'
            },
            input: {
              type: 'structure',
              required: ['resourceArn'],
              members: {
                resourceArn: {
                  location: 'querystring',
                  locationName: 'resourceArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                tags: {
                  shape: 'Sq'
                }
              }
            }
          },
          PutLoggingOptions: {
            http: {
              method: 'PUT',
              requestUri: '/logging'
            },
            input: {
              type: 'structure',
              required: ['loggingOptions'],
              members: {
                loggingOptions: {
                  shape: 'S4f'
                }
              }
            }
          },
          RunPipelineActivity: {
            http: {
              requestUri: '/pipelineactivities/run'
            },
            input: {
              type: 'structure',
              required: ['pipelineActivity', 'payloads'],
              members: {
                pipelineActivity: {
                  shape: 'S35'
                },
                payloads: {
                  shape: 'S5z'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                payloads: {
                  shape: 'S5z'
                },
                logResult: {}
              }
            }
          },
          SampleChannelData: {
            http: {
              method: 'GET',
              requestUri: '/channels/{channelName}/sample'
            },
            input: {
              type: 'structure',
              required: ['channelName'],
              members: {
                channelName: {
                  location: 'uri',
                  locationName: 'channelName'
                },
                maxMessages: {
                  location: 'querystring',
                  locationName: 'maxMessages',
                  type: 'integer'
                },
                startTime: {
                  location: 'querystring',
                  locationName: 'startTime',
                  type: 'timestamp'
                },
                endTime: {
                  location: 'querystring',
                  locationName: 'endTime',
                  type: 'timestamp'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                payloads: {
                  shape: 'S5z'
                }
              }
            }
          },
          StartPipelineReprocessing: {
            http: {
              requestUri: '/pipelines/{pipelineName}/reprocessing'
            },
            input: {
              type: 'structure',
              required: ['pipelineName'],
              members: {
                pipelineName: {
                  location: 'uri',
                  locationName: 'pipelineName'
                },
                startTime: {
                  type: 'timestamp'
                },
                endTime: {
                  type: 'timestamp'
                },
                channelMessages: {
                  type: 'structure',
                  members: {
                    s3Paths: {
                      type: 'list',
                      member: {}
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                reprocessingId: {}
              }
            }
          },
          TagResource: {
            http: {
              requestUri: '/tags',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['resourceArn', 'tags'],
              members: {
                resourceArn: {
                  location: 'querystring',
                  locationName: 'resourceArn'
                },
                tags: {
                  shape: 'Sq'
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
              requestUri: '/tags',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['resourceArn', 'tagKeys'],
              members: {
                resourceArn: {
                  location: 'querystring',
                  locationName: 'resourceArn'
                },
                tagKeys: {
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
          UpdateChannel: {
            http: {
              method: 'PUT',
              requestUri: '/channels/{channelName}'
            },
            input: {
              type: 'structure',
              required: ['channelName'],
              members: {
                channelName: {
                  location: 'uri',
                  locationName: 'channelName'
                },
                channelStorage: {
                  shape: 'Sh'
                },
                retentionPeriod: {
                  shape: 'Sn'
                }
              }
            }
          },
          UpdateDataset: {
            http: {
              method: 'PUT',
              requestUri: '/datasets/{datasetName}'
            },
            input: {
              type: 'structure',
              required: ['datasetName', 'actions'],
              members: {
                datasetName: {
                  location: 'uri',
                  locationName: 'datasetName'
                },
                actions: {
                  shape: 'Sy'
                },
                triggers: {
                  shape: 'S1l'
                },
                contentDeliveryRules: {
                  shape: 'S1q'
                },
                retentionPeriod: {
                  shape: 'Sn'
                },
                versioningConfiguration: {
                  shape: 'S21'
                },
                lateDataRules: {
                  shape: 'S24'
                }
              }
            }
          },
          UpdateDatastore: {
            http: {
              method: 'PUT',
              requestUri: '/datastores/{datastoreName}'
            },
            input: {
              type: 'structure',
              required: ['datastoreName'],
              members: {
                datastoreName: {
                  location: 'uri',
                  locationName: 'datastoreName'
                },
                retentionPeriod: {
                  shape: 'Sn'
                },
                datastoreStorage: {
                  shape: 'S2h'
                },
                fileFormatConfiguration: {
                  shape: 'S2m'
                }
              }
            }
          },
          UpdatePipeline: {
            http: {
              method: 'PUT',
              requestUri: '/pipelines/{pipelineName}'
            },
            input: {
              type: 'structure',
              required: ['pipelineName', 'pipelineActivities'],
              members: {
                pipelineName: {
                  location: 'uri',
                  locationName: 'pipelineName'
                },
                pipelineActivities: {
                  shape: 'S34'
                }
              }
            }
          }
        },
        shapes: {
          Sh: {
            type: 'structure',
            members: {
              serviceManagedS3: {
                type: 'structure',
                members: {}
              },
              customerManagedS3: {
                type: 'structure',
                required: ['bucket', 'roleArn'],
                members: {
                  bucket: {},
                  keyPrefix: {},
                  roleArn: {}
                }
              }
            }
          },
          Sn: {
            type: 'structure',
            members: {
              unlimited: {
                type: 'boolean'
              },
              numberOfDays: {
                type: 'integer'
              }
            }
          },
          Sq: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['key', 'value'],
              members: {
                key: {},
                value: {}
              }
            }
          },
          Sy: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                actionName: {},
                queryAction: {
                  type: 'structure',
                  required: ['sqlQuery'],
                  members: {
                    sqlQuery: {},
                    filters: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          deltaTime: {
                            type: 'structure',
                            required: ['offsetSeconds', 'timeExpression'],
                            members: {
                              offsetSeconds: {
                                type: 'integer'
                              },
                              timeExpression: {}
                            }
                          }
                        }
                      }
                    }
                  }
                },
                containerAction: {
                  type: 'structure',
                  required: ['image', 'executionRoleArn', 'resourceConfiguration'],
                  members: {
                    image: {},
                    executionRoleArn: {},
                    resourceConfiguration: {
                      type: 'structure',
                      required: ['computeType', 'volumeSizeInGB'],
                      members: {
                        computeType: {},
                        volumeSizeInGB: {
                          type: 'integer'
                        }
                      }
                    },
                    variables: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        required: ['name'],
                        members: {
                          name: {},
                          stringValue: {},
                          doubleValue: {
                            type: 'double'
                          },
                          datasetContentVersionValue: {
                            type: 'structure',
                            required: ['datasetName'],
                            members: {
                              datasetName: {}
                            }
                          },
                          outputFileUriValue: {
                            type: 'structure',
                            required: ['fileName'],
                            members: {
                              fileName: {}
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
          S1l: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                schedule: {
                  type: 'structure',
                  members: {
                    expression: {}
                  }
                },
                dataset: {
                  type: 'structure',
                  required: ['name'],
                  members: {
                    name: {}
                  }
                }
              }
            }
          },
          S1q: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['destination'],
              members: {
                entryName: {},
                destination: {
                  type: 'structure',
                  members: {
                    iotEventsDestinationConfiguration: {
                      type: 'structure',
                      required: ['inputName', 'roleArn'],
                      members: {
                        inputName: {},
                        roleArn: {}
                      }
                    },
                    s3DestinationConfiguration: {
                      type: 'structure',
                      required: ['bucket', 'key', 'roleArn'],
                      members: {
                        bucket: {},
                        key: {},
                        glueConfiguration: {
                          type: 'structure',
                          required: ['tableName', 'databaseName'],
                          members: {
                            tableName: {},
                            databaseName: {}
                          }
                        },
                        roleArn: {}
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
              unlimited: {
                type: 'boolean'
              },
              maxVersions: {
                type: 'integer'
              }
            }
          },
          S24: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['ruleConfiguration'],
              members: {
                ruleName: {},
                ruleConfiguration: {
                  type: 'structure',
                  members: {
                    deltaTimeSessionWindowConfiguration: {
                      type: 'structure',
                      required: ['timeoutInMinutes'],
                      members: {
                        timeoutInMinutes: {
                          type: 'integer'
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          S2h: {
            type: 'structure',
            members: {
              serviceManagedS3: {
                type: 'structure',
                members: {}
              },
              customerManagedS3: {
                type: 'structure',
                required: ['bucket', 'roleArn'],
                members: {
                  bucket: {},
                  keyPrefix: {},
                  roleArn: {}
                }
              },
              iotSiteWiseMultiLayerStorage: {
                type: 'structure',
                required: ['customerManagedS3Storage'],
                members: {
                  customerManagedS3Storage: {
                    type: 'structure',
                    required: ['bucket'],
                    members: {
                      bucket: {},
                      keyPrefix: {}
                    }
                  }
                }
              }
            }
          },
          S2m: {
            type: 'structure',
            members: {
              jsonConfiguration: {
                type: 'structure',
                members: {}
              },
              parquetConfiguration: {
                type: 'structure',
                members: {
                  schemaDefinition: {
                    type: 'structure',
                    members: {
                      columns: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          required: ['name', 'type'],
                          members: {
                            name: {},
                            type: {}
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          S2u: {
            type: 'structure',
            members: {
              partitions: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    attributePartition: {
                      type: 'structure',
                      required: ['attributeName'],
                      members: {
                        attributeName: {}
                      }
                    },
                    timestampPartition: {
                      type: 'structure',
                      required: ['attributeName'],
                      members: {
                        attributeName: {},
                        timestampFormat: {}
                      }
                    }
                  }
                }
              }
            }
          },
          S34: {
            type: 'list',
            member: {
              shape: 'S35'
            }
          },
          S35: {
            type: 'structure',
            members: {
              channel: {
                type: 'structure',
                required: ['name', 'channelName'],
                members: {
                  name: {},
                  channelName: {},
                  next: {}
                }
              },
              lambda: {
                type: 'structure',
                required: ['name', 'lambdaName', 'batchSize'],
                members: {
                  name: {},
                  lambdaName: {},
                  batchSize: {
                    type: 'integer'
                  },
                  next: {}
                }
              },
              datastore: {
                type: 'structure',
                required: ['name', 'datastoreName'],
                members: {
                  name: {},
                  datastoreName: {}
                }
              },
              addAttributes: {
                type: 'structure',
                required: ['name', 'attributes'],
                members: {
                  name: {},
                  attributes: {
                    type: 'map',
                    key: {},
                    value: {}
                  },
                  next: {}
                }
              },
              removeAttributes: {
                type: 'structure',
                required: ['name', 'attributes'],
                members: {
                  name: {},
                  attributes: {
                    shape: 'S3g'
                  },
                  next: {}
                }
              },
              selectAttributes: {
                type: 'structure',
                required: ['name', 'attributes'],
                members: {
                  name: {},
                  attributes: {
                    shape: 'S3g'
                  },
                  next: {}
                }
              },
              filter: {
                type: 'structure',
                required: ['name', 'filter'],
                members: {
                  name: {},
                  filter: {},
                  next: {}
                }
              },
              math: {
                type: 'structure',
                required: ['name', 'attribute', 'math'],
                members: {
                  name: {},
                  attribute: {},
                  math: {},
                  next: {}
                }
              },
              deviceRegistryEnrich: {
                type: 'structure',
                required: ['name', 'attribute', 'thingName', 'roleArn'],
                members: {
                  name: {},
                  attribute: {},
                  thingName: {},
                  roleArn: {},
                  next: {}
                }
              },
              deviceShadowEnrich: {
                type: 'structure',
                required: ['name', 'attribute', 'thingName', 'roleArn'],
                members: {
                  name: {},
                  attribute: {},
                  thingName: {},
                  roleArn: {},
                  next: {}
                }
              }
            }
          },
          S3g: {
            type: 'list',
            member: {}
          },
          S42: {
            type: 'structure',
            members: {
              estimatedSizeInBytes: {
                type: 'double'
              },
              estimatedOn: {
                type: 'timestamp'
              }
            }
          },
          S4f: {
            type: 'structure',
            required: ['roleArn', 'level', 'enabled'],
            members: {
              roleArn: {},
              level: {},
              enabled: {
                type: 'boolean'
              }
            }
          },
          S4l: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                id: {},
                status: {},
                creationTime: {
                  type: 'timestamp'
                }
              }
            }
          },
          S4t: {
            type: 'structure',
            members: {
              state: {},
              reason: {}
            }
          },
          S5z: {
            type: 'list',
            member: {
              type: 'blob'
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=a099a6d265209aef4b0846b741896a55b2bec786.js.map