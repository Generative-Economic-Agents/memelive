System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2018-07-27',
          endpointPrefix: 'iotevents',
          protocol: 'rest-json',
          serviceFullName: 'AWS IoT Events',
          serviceId: 'IoT Events',
          signatureVersion: 'v4',
          signingName: 'iotevents',
          uid: 'iotevents-2018-07-27'
        },
        operations: {
          CreateAlarmModel: {
            http: {
              requestUri: '/alarm-models'
            },
            input: {
              type: 'structure',
              required: ['alarmModelName', 'roleArn', 'alarmRule'],
              members: {
                alarmModelName: {},
                alarmModelDescription: {},
                roleArn: {},
                tags: {
                  shape: 'S5'
                },
                key: {},
                severity: {
                  type: 'integer'
                },
                alarmRule: {
                  shape: 'Sb'
                },
                alarmNotification: {
                  shape: 'Sg'
                },
                alarmEventActions: {
                  shape: 'S13'
                },
                alarmCapabilities: {
                  shape: 'S23'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                creationTime: {
                  type: 'timestamp'
                },
                alarmModelArn: {},
                alarmModelVersion: {},
                lastUpdateTime: {
                  type: 'timestamp'
                },
                status: {}
              }
            }
          },
          CreateDetectorModel: {
            http: {
              requestUri: '/detector-models'
            },
            input: {
              type: 'structure',
              required: ['detectorModelName', 'detectorModelDefinition', 'roleArn'],
              members: {
                detectorModelName: {},
                detectorModelDefinition: {
                  shape: 'S2f'
                },
                detectorModelDescription: {},
                key: {},
                roleArn: {},
                tags: {
                  shape: 'S5'
                },
                evaluationMethod: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                detectorModelConfiguration: {
                  shape: 'S35'
                }
              }
            }
          },
          CreateInput: {
            http: {
              requestUri: '/inputs',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['inputName', 'inputDefinition'],
              members: {
                inputName: {},
                inputDescription: {},
                inputDefinition: {
                  shape: 'S3b'
                },
                tags: {
                  shape: 'S5'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                inputConfiguration: {
                  shape: 'S3f'
                }
              }
            }
          },
          DeleteAlarmModel: {
            http: {
              method: 'DELETE',
              requestUri: '/alarm-models/{alarmModelName}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['alarmModelName'],
              members: {
                alarmModelName: {
                  location: 'uri',
                  locationName: 'alarmModelName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteDetectorModel: {
            http: {
              method: 'DELETE',
              requestUri: '/detector-models/{detectorModelName}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['detectorModelName'],
              members: {
                detectorModelName: {
                  location: 'uri',
                  locationName: 'detectorModelName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteInput: {
            http: {
              method: 'DELETE',
              requestUri: '/inputs/{inputName}'
            },
            input: {
              type: 'structure',
              required: ['inputName'],
              members: {
                inputName: {
                  location: 'uri',
                  locationName: 'inputName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DescribeAlarmModel: {
            http: {
              method: 'GET',
              requestUri: '/alarm-models/{alarmModelName}'
            },
            input: {
              type: 'structure',
              required: ['alarmModelName'],
              members: {
                alarmModelName: {
                  location: 'uri',
                  locationName: 'alarmModelName'
                },
                alarmModelVersion: {
                  location: 'querystring',
                  locationName: 'version'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                creationTime: {
                  type: 'timestamp'
                },
                alarmModelArn: {},
                alarmModelVersion: {},
                lastUpdateTime: {
                  type: 'timestamp'
                },
                status: {},
                statusMessage: {},
                alarmModelName: {},
                alarmModelDescription: {},
                roleArn: {},
                key: {},
                severity: {
                  type: 'integer'
                },
                alarmRule: {
                  shape: 'Sb'
                },
                alarmNotification: {
                  shape: 'Sg'
                },
                alarmEventActions: {
                  shape: 'S13'
                },
                alarmCapabilities: {
                  shape: 'S23'
                }
              }
            }
          },
          DescribeDetectorModel: {
            http: {
              method: 'GET',
              requestUri: '/detector-models/{detectorModelName}'
            },
            input: {
              type: 'structure',
              required: ['detectorModelName'],
              members: {
                detectorModelName: {
                  location: 'uri',
                  locationName: 'detectorModelName'
                },
                detectorModelVersion: {
                  location: 'querystring',
                  locationName: 'version'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                detectorModel: {
                  type: 'structure',
                  members: {
                    detectorModelDefinition: {
                      shape: 'S2f'
                    },
                    detectorModelConfiguration: {
                      shape: 'S35'
                    }
                  }
                }
              }
            }
          },
          DescribeDetectorModelAnalysis: {
            http: {
              method: 'GET',
              requestUri: '/analysis/detector-models/{analysisId}'
            },
            input: {
              type: 'structure',
              required: ['analysisId'],
              members: {
                analysisId: {
                  location: 'uri',
                  locationName: 'analysisId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                status: {}
              }
            }
          },
          DescribeInput: {
            http: {
              method: 'GET',
              requestUri: '/inputs/{inputName}'
            },
            input: {
              type: 'structure',
              required: ['inputName'],
              members: {
                inputName: {
                  location: 'uri',
                  locationName: 'inputName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                input: {
                  type: 'structure',
                  members: {
                    inputConfiguration: {
                      shape: 'S3f'
                    },
                    inputDefinition: {
                      shape: 'S3b'
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
                  shape: 'S43'
                }
              }
            }
          },
          GetDetectorModelAnalysisResults: {
            http: {
              method: 'GET',
              requestUri: '/analysis/detector-models/{analysisId}/results'
            },
            input: {
              type: 'structure',
              required: ['analysisId'],
              members: {
                analysisId: {
                  location: 'uri',
                  locationName: 'analysisId'
                },
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
                analysisResults: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      type: {},
                      level: {},
                      message: {},
                      locations: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            path: {}
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
          ListAlarmModelVersions: {
            http: {
              method: 'GET',
              requestUri: '/alarm-models/{alarmModelName}/versions'
            },
            input: {
              type: 'structure',
              required: ['alarmModelName'],
              members: {
                alarmModelName: {
                  location: 'uri',
                  locationName: 'alarmModelName'
                },
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
                alarmModelVersionSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      alarmModelName: {},
                      alarmModelArn: {},
                      alarmModelVersion: {},
                      roleArn: {},
                      creationTime: {
                        type: 'timestamp'
                      },
                      lastUpdateTime: {
                        type: 'timestamp'
                      },
                      status: {},
                      statusMessage: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListAlarmModels: {
            http: {
              method: 'GET',
              requestUri: '/alarm-models'
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
                alarmModelSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      creationTime: {
                        type: 'timestamp'
                      },
                      alarmModelDescription: {},
                      alarmModelName: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListDetectorModelVersions: {
            http: {
              method: 'GET',
              requestUri: '/detector-models/{detectorModelName}/versions'
            },
            input: {
              type: 'structure',
              required: ['detectorModelName'],
              members: {
                detectorModelName: {
                  location: 'uri',
                  locationName: 'detectorModelName'
                },
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
                detectorModelVersionSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      detectorModelName: {},
                      detectorModelVersion: {},
                      detectorModelArn: {},
                      roleArn: {},
                      creationTime: {
                        type: 'timestamp'
                      },
                      lastUpdateTime: {
                        type: 'timestamp'
                      },
                      status: {},
                      evaluationMethod: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListDetectorModels: {
            http: {
              method: 'GET',
              requestUri: '/detector-models'
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
                detectorModelSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      detectorModelName: {},
                      detectorModelDescription: {},
                      creationTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListInputRoutings: {
            http: {
              requestUri: '/input-routings'
            },
            input: {
              type: 'structure',
              required: ['inputIdentifier'],
              members: {
                inputIdentifier: {
                  type: 'structure',
                  members: {
                    iotEventsInputIdentifier: {
                      type: 'structure',
                      required: ['inputName'],
                      members: {
                        inputName: {}
                      }
                    },
                    iotSiteWiseInputIdentifier: {
                      type: 'structure',
                      members: {
                        iotSiteWiseAssetModelPropertyIdentifier: {
                          type: 'structure',
                          required: ['assetModelId', 'propertyId'],
                          members: {
                            assetModelId: {},
                            propertyId: {}
                          }
                        }
                      }
                    }
                  }
                },
                maxResults: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                routedResources: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      name: {},
                      arn: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListInputs: {
            http: {
              method: 'GET',
              requestUri: '/inputs'
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
                inputSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      inputName: {},
                      inputDescription: {},
                      inputArn: {},
                      creationTime: {
                        type: 'timestamp'
                      },
                      lastUpdateTime: {
                        type: 'timestamp'
                      },
                      status: {}
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
                  shape: 'S5'
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
                  shape: 'S43'
                }
              }
            }
          },
          StartDetectorModelAnalysis: {
            http: {
              requestUri: '/analysis/detector-models/'
            },
            input: {
              type: 'structure',
              required: ['detectorModelDefinition'],
              members: {
                detectorModelDefinition: {
                  shape: 'S2f'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                analysisId: {}
              }
            }
          },
          TagResource: {
            http: {
              requestUri: '/tags'
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
                  shape: 'S5'
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
              requestUri: '/tags'
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
          UpdateAlarmModel: {
            http: {
              requestUri: '/alarm-models/{alarmModelName}'
            },
            input: {
              type: 'structure',
              required: ['alarmModelName', 'roleArn', 'alarmRule'],
              members: {
                alarmModelName: {
                  location: 'uri',
                  locationName: 'alarmModelName'
                },
                alarmModelDescription: {},
                roleArn: {},
                severity: {
                  type: 'integer'
                },
                alarmRule: {
                  shape: 'Sb'
                },
                alarmNotification: {
                  shape: 'Sg'
                },
                alarmEventActions: {
                  shape: 'S13'
                },
                alarmCapabilities: {
                  shape: 'S23'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                creationTime: {
                  type: 'timestamp'
                },
                alarmModelArn: {},
                alarmModelVersion: {},
                lastUpdateTime: {
                  type: 'timestamp'
                },
                status: {}
              }
            }
          },
          UpdateDetectorModel: {
            http: {
              requestUri: '/detector-models/{detectorModelName}'
            },
            input: {
              type: 'structure',
              required: ['detectorModelName', 'detectorModelDefinition', 'roleArn'],
              members: {
                detectorModelName: {
                  location: 'uri',
                  locationName: 'detectorModelName'
                },
                detectorModelDefinition: {
                  shape: 'S2f'
                },
                detectorModelDescription: {},
                roleArn: {},
                evaluationMethod: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                detectorModelConfiguration: {
                  shape: 'S35'
                }
              }
            }
          },
          UpdateInput: {
            http: {
              method: 'PUT',
              requestUri: '/inputs/{inputName}'
            },
            input: {
              type: 'structure',
              required: ['inputName', 'inputDefinition'],
              members: {
                inputName: {
                  location: 'uri',
                  locationName: 'inputName'
                },
                inputDescription: {},
                inputDefinition: {
                  shape: 'S3b'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                inputConfiguration: {
                  shape: 'S3f'
                }
              }
            }
          }
        },
        shapes: {
          S5: {
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
          Sb: {
            type: 'structure',
            members: {
              simpleRule: {
                type: 'structure',
                required: ['inputProperty', 'comparisonOperator', 'threshold'],
                members: {
                  inputProperty: {},
                  comparisonOperator: {},
                  threshold: {}
                }
              }
            }
          },
          Sg: {
            type: 'structure',
            members: {
              notificationActions: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['action'],
                  members: {
                    action: {
                      type: 'structure',
                      members: {
                        lambdaAction: {
                          shape: 'Sk'
                        }
                      }
                    },
                    smsConfigurations: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        required: ['recipients'],
                        members: {
                          senderId: {},
                          additionalMessage: {},
                          recipients: {
                            shape: 'Ss'
                          }
                        }
                      }
                    },
                    emailConfigurations: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        required: ['from', 'recipients'],
                        members: {
                          from: {},
                          content: {
                            type: 'structure',
                            members: {
                              subject: {},
                              additionalMessage: {}
                            }
                          },
                          recipients: {
                            type: 'structure',
                            members: {
                              to: {
                                shape: 'Ss'
                              }
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
          Sk: {
            type: 'structure',
            required: ['functionArn'],
            members: {
              functionArn: {},
              payload: {
                shape: 'Sl'
              }
            }
          },
          Sl: {
            type: 'structure',
            required: ['contentExpression', 'type'],
            members: {
              contentExpression: {},
              type: {}
            }
          },
          Ss: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                ssoIdentity: {
                  type: 'structure',
                  required: ['identityStoreId'],
                  members: {
                    identityStoreId: {},
                    userId: {}
                  }
                }
              }
            }
          },
          S13: {
            type: 'structure',
            members: {
              alarmActions: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    sns: {
                      shape: 'S16'
                    },
                    iotTopicPublish: {
                      shape: 'S17'
                    },
                    lambda: {
                      shape: 'Sk'
                    },
                    iotEvents: {
                      shape: 'S19'
                    },
                    sqs: {
                      shape: 'S1b'
                    },
                    firehose: {
                      shape: 'S1e'
                    },
                    dynamoDB: {
                      shape: 'S1h'
                    },
                    dynamoDBv2: {
                      shape: 'S1n'
                    },
                    iotSiteWise: {
                      shape: 'S1o'
                    }
                  }
                }
              }
            }
          },
          S16: {
            type: 'structure',
            required: ['targetArn'],
            members: {
              targetArn: {},
              payload: {
                shape: 'Sl'
              }
            }
          },
          S17: {
            type: 'structure',
            required: ['mqttTopic'],
            members: {
              mqttTopic: {},
              payload: {
                shape: 'Sl'
              }
            }
          },
          S19: {
            type: 'structure',
            required: ['inputName'],
            members: {
              inputName: {},
              payload: {
                shape: 'Sl'
              }
            }
          },
          S1b: {
            type: 'structure',
            required: ['queueUrl'],
            members: {
              queueUrl: {},
              useBase64: {
                type: 'boolean'
              },
              payload: {
                shape: 'Sl'
              }
            }
          },
          S1e: {
            type: 'structure',
            required: ['deliveryStreamName'],
            members: {
              deliveryStreamName: {},
              separator: {},
              payload: {
                shape: 'Sl'
              }
            }
          },
          S1h: {
            type: 'structure',
            required: ['hashKeyField', 'hashKeyValue', 'tableName'],
            members: {
              hashKeyType: {},
              hashKeyField: {},
              hashKeyValue: {},
              rangeKeyType: {},
              rangeKeyField: {},
              rangeKeyValue: {},
              operation: {},
              payloadField: {},
              tableName: {},
              payload: {
                shape: 'Sl'
              }
            }
          },
          S1n: {
            type: 'structure',
            required: ['tableName'],
            members: {
              tableName: {},
              payload: {
                shape: 'Sl'
              }
            }
          },
          S1o: {
            type: 'structure',
            members: {
              entryId: {},
              assetId: {},
              propertyId: {},
              propertyAlias: {},
              propertyValue: {
                type: 'structure',
                members: {
                  value: {
                    type: 'structure',
                    members: {
                      stringValue: {},
                      integerValue: {},
                      doubleValue: {},
                      booleanValue: {}
                    }
                  },
                  timestamp: {
                    type: 'structure',
                    required: ['timeInSeconds'],
                    members: {
                      timeInSeconds: {},
                      offsetInNanos: {}
                    }
                  },
                  quality: {}
                }
              }
            }
          },
          S23: {
            type: 'structure',
            members: {
              initializationConfiguration: {
                type: 'structure',
                required: ['disabledOnInitialization'],
                members: {
                  disabledOnInitialization: {
                    type: 'boolean'
                  }
                }
              },
              acknowledgeFlow: {
                type: 'structure',
                required: ['enabled'],
                members: {
                  enabled: {
                    type: 'boolean'
                  }
                }
              }
            }
          },
          S2f: {
            type: 'structure',
            required: ['states', 'initialStateName'],
            members: {
              states: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['stateName'],
                  members: {
                    stateName: {},
                    onInput: {
                      type: 'structure',
                      members: {
                        events: {
                          shape: 'S2k'
                        },
                        transitionEvents: {
                          type: 'list',
                          member: {
                            type: 'structure',
                            required: ['eventName', 'condition', 'nextState'],
                            members: {
                              eventName: {},
                              condition: {},
                              actions: {
                                shape: 'S2o'
                              },
                              nextState: {}
                            }
                          }
                        }
                      }
                    },
                    onEnter: {
                      type: 'structure',
                      members: {
                        events: {
                          shape: 'S2k'
                        }
                      }
                    },
                    onExit: {
                      type: 'structure',
                      members: {
                        events: {
                          shape: 'S2k'
                        }
                      }
                    }
                  }
                }
              },
              initialStateName: {}
            }
          },
          S2k: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['eventName'],
              members: {
                eventName: {},
                condition: {},
                actions: {
                  shape: 'S2o'
                }
              }
            }
          },
          S2o: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                setVariable: {
                  type: 'structure',
                  required: ['variableName', 'value'],
                  members: {
                    variableName: {},
                    value: {}
                  }
                },
                sns: {
                  shape: 'S16'
                },
                iotTopicPublish: {
                  shape: 'S17'
                },
                setTimer: {
                  type: 'structure',
                  required: ['timerName'],
                  members: {
                    timerName: {},
                    seconds: {
                      deprecated: true,
                      deprecatedMessage: 'seconds is deprecated. You can use durationExpression for SetTimerAction. The value of seconds can be used as a string expression for durationExpression.',
                      type: 'integer'
                    },
                    durationExpression: {}
                  }
                },
                clearTimer: {
                  type: 'structure',
                  required: ['timerName'],
                  members: {
                    timerName: {}
                  }
                },
                resetTimer: {
                  type: 'structure',
                  required: ['timerName'],
                  members: {
                    timerName: {}
                  }
                },
                lambda: {
                  shape: 'Sk'
                },
                iotEvents: {
                  shape: 'S19'
                },
                sqs: {
                  shape: 'S1b'
                },
                firehose: {
                  shape: 'S1e'
                },
                dynamoDB: {
                  shape: 'S1h'
                },
                dynamoDBv2: {
                  shape: 'S1n'
                },
                iotSiteWise: {
                  shape: 'S1o'
                }
              }
            }
          },
          S35: {
            type: 'structure',
            members: {
              detectorModelName: {},
              detectorModelVersion: {},
              detectorModelDescription: {},
              detectorModelArn: {},
              roleArn: {},
              creationTime: {
                type: 'timestamp'
              },
              lastUpdateTime: {
                type: 'timestamp'
              },
              status: {},
              key: {},
              evaluationMethod: {}
            }
          },
          S3b: {
            type: 'structure',
            required: ['attributes'],
            members: {
              attributes: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['jsonPath'],
                  members: {
                    jsonPath: {}
                  }
                }
              }
            }
          },
          S3f: {
            type: 'structure',
            required: ['inputName', 'inputArn', 'creationTime', 'lastUpdateTime', 'status'],
            members: {
              inputName: {},
              inputDescription: {},
              inputArn: {},
              creationTime: {
                type: 'timestamp'
              },
              lastUpdateTime: {
                type: 'timestamp'
              },
              status: {}
            }
          },
          S43: {
            type: 'structure',
            required: ['roleArn', 'level', 'enabled'],
            members: {
              roleArn: {},
              level: {},
              enabled: {
                type: 'boolean'
              },
              detectorDebugOptions: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['detectorModelName'],
                  members: {
                    detectorModelName: {},
                    keyValue: {}
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
//# sourceMappingURL=c502eca7c51870e7d37b7e45df9cf4ca63637242.js.map