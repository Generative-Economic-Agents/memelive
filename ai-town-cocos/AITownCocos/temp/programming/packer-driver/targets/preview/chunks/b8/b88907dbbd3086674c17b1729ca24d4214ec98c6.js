System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2016-11-23',
          endpointPrefix: 'states',
          jsonVersion: '1.0',
          protocol: 'json',
          protocols: ['json'],
          serviceAbbreviation: 'AWS SFN',
          serviceFullName: 'AWS Step Functions',
          serviceId: 'SFN',
          signatureVersion: 'v4',
          targetPrefix: 'AWSStepFunctions',
          uid: 'states-2016-11-23'
        },
        operations: {
          CreateActivity: {
            input: {
              type: 'structure',
              required: ['name'],
              members: {
                name: {},
                tags: {
                  shape: 'S3'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['activityArn', 'creationDate'],
              members: {
                activityArn: {},
                creationDate: {
                  type: 'timestamp'
                }
              }
            },
            idempotent: true
          },
          CreateStateMachine: {
            input: {
              type: 'structure',
              required: ['name', 'definition', 'roleArn'],
              members: {
                name: {},
                definition: {
                  shape: 'Sb'
                },
                roleArn: {},
                type: {},
                loggingConfiguration: {
                  shape: 'Sd'
                },
                tags: {
                  shape: 'S3'
                },
                tracingConfiguration: {
                  shape: 'Sj'
                },
                publish: {
                  type: 'boolean'
                },
                versionDescription: {
                  shape: 'Sm'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['stateMachineArn', 'creationDate'],
              members: {
                stateMachineArn: {},
                creationDate: {
                  type: 'timestamp'
                },
                stateMachineVersionArn: {}
              }
            },
            idempotent: true
          },
          CreateStateMachineAlias: {
            input: {
              type: 'structure',
              required: ['name', 'routingConfiguration'],
              members: {
                description: {
                  shape: 'Sp'
                },
                name: {},
                routingConfiguration: {
                  shape: 'Sr'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['stateMachineAliasArn', 'creationDate'],
              members: {
                stateMachineAliasArn: {},
                creationDate: {
                  type: 'timestamp'
                }
              }
            }
          },
          DeleteActivity: {
            input: {
              type: 'structure',
              required: ['activityArn'],
              members: {
                activityArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteStateMachine: {
            input: {
              type: 'structure',
              required: ['stateMachineArn'],
              members: {
                stateMachineArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteStateMachineAlias: {
            input: {
              type: 'structure',
              required: ['stateMachineAliasArn'],
              members: {
                stateMachineAliasArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteStateMachineVersion: {
            input: {
              type: 'structure',
              required: ['stateMachineVersionArn'],
              members: {
                stateMachineVersionArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DescribeActivity: {
            input: {
              type: 'structure',
              required: ['activityArn'],
              members: {
                activityArn: {}
              }
            },
            output: {
              type: 'structure',
              required: ['activityArn', 'name', 'creationDate'],
              members: {
                activityArn: {},
                name: {},
                creationDate: {
                  type: 'timestamp'
                }
              }
            }
          },
          DescribeExecution: {
            input: {
              type: 'structure',
              required: ['executionArn'],
              members: {
                executionArn: {}
              }
            },
            output: {
              type: 'structure',
              required: ['executionArn', 'stateMachineArn', 'status', 'startDate'],
              members: {
                executionArn: {},
                stateMachineArn: {},
                name: {},
                status: {},
                startDate: {
                  type: 'timestamp'
                },
                stopDate: {
                  type: 'timestamp'
                },
                input: {
                  shape: 'S19'
                },
                inputDetails: {
                  shape: 'S1a'
                },
                output: {
                  shape: 'S19'
                },
                outputDetails: {
                  shape: 'S1a'
                },
                traceHeader: {},
                mapRunArn: {},
                error: {
                  shape: 'S1d'
                },
                cause: {
                  shape: 'S1e'
                },
                stateMachineVersionArn: {},
                stateMachineAliasArn: {},
                redriveCount: {
                  type: 'integer'
                },
                redriveDate: {
                  type: 'timestamp'
                },
                redriveStatus: {},
                redriveStatusReason: {
                  shape: 'S19'
                }
              }
            }
          },
          DescribeMapRun: {
            input: {
              type: 'structure',
              required: ['mapRunArn'],
              members: {
                mapRunArn: {}
              }
            },
            output: {
              type: 'structure',
              required: ['mapRunArn', 'executionArn', 'status', 'startDate', 'maxConcurrency', 'toleratedFailurePercentage', 'toleratedFailureCount', 'itemCounts', 'executionCounts'],
              members: {
                mapRunArn: {},
                executionArn: {},
                status: {},
                startDate: {
                  type: 'timestamp'
                },
                stopDate: {
                  type: 'timestamp'
                },
                maxConcurrency: {
                  type: 'integer'
                },
                toleratedFailurePercentage: {
                  type: 'float'
                },
                toleratedFailureCount: {
                  type: 'long'
                },
                itemCounts: {
                  type: 'structure',
                  required: ['pending', 'running', 'succeeded', 'failed', 'timedOut', 'aborted', 'total', 'resultsWritten'],
                  members: {
                    pending: {
                      type: 'long'
                    },
                    running: {
                      type: 'long'
                    },
                    succeeded: {
                      type: 'long'
                    },
                    failed: {
                      type: 'long'
                    },
                    timedOut: {
                      type: 'long'
                    },
                    aborted: {
                      type: 'long'
                    },
                    total: {
                      type: 'long'
                    },
                    resultsWritten: {
                      type: 'long'
                    },
                    failuresNotRedrivable: {
                      type: 'long'
                    },
                    pendingRedrive: {
                      type: 'long'
                    }
                  }
                },
                executionCounts: {
                  type: 'structure',
                  required: ['pending', 'running', 'succeeded', 'failed', 'timedOut', 'aborted', 'total', 'resultsWritten'],
                  members: {
                    pending: {
                      type: 'long'
                    },
                    running: {
                      type: 'long'
                    },
                    succeeded: {
                      type: 'long'
                    },
                    failed: {
                      type: 'long'
                    },
                    timedOut: {
                      type: 'long'
                    },
                    aborted: {
                      type: 'long'
                    },
                    total: {
                      type: 'long'
                    },
                    resultsWritten: {
                      type: 'long'
                    },
                    failuresNotRedrivable: {
                      type: 'long'
                    },
                    pendingRedrive: {
                      type: 'long'
                    }
                  }
                },
                redriveCount: {
                  type: 'integer'
                },
                redriveDate: {
                  type: 'timestamp'
                }
              }
            }
          },
          DescribeStateMachine: {
            input: {
              type: 'structure',
              required: ['stateMachineArn'],
              members: {
                stateMachineArn: {}
              }
            },
            output: {
              type: 'structure',
              required: ['stateMachineArn', 'name', 'definition', 'roleArn', 'type', 'creationDate'],
              members: {
                stateMachineArn: {},
                name: {},
                status: {},
                definition: {
                  shape: 'Sb'
                },
                roleArn: {},
                type: {},
                creationDate: {
                  type: 'timestamp'
                },
                loggingConfiguration: {
                  shape: 'Sd'
                },
                tracingConfiguration: {
                  shape: 'Sj'
                },
                label: {},
                revisionId: {},
                description: {
                  shape: 'Sm'
                }
              }
            }
          },
          DescribeStateMachineAlias: {
            input: {
              type: 'structure',
              required: ['stateMachineAliasArn'],
              members: {
                stateMachineAliasArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                stateMachineAliasArn: {},
                name: {},
                description: {
                  shape: 'Sp'
                },
                routingConfiguration: {
                  shape: 'Sr'
                },
                creationDate: {
                  type: 'timestamp'
                },
                updateDate: {
                  type: 'timestamp'
                }
              }
            }
          },
          DescribeStateMachineForExecution: {
            input: {
              type: 'structure',
              required: ['executionArn'],
              members: {
                executionArn: {}
              }
            },
            output: {
              type: 'structure',
              required: ['stateMachineArn', 'name', 'definition', 'roleArn', 'updateDate'],
              members: {
                stateMachineArn: {},
                name: {},
                definition: {
                  shape: 'Sb'
                },
                roleArn: {},
                updateDate: {
                  type: 'timestamp'
                },
                loggingConfiguration: {
                  shape: 'Sd'
                },
                tracingConfiguration: {
                  shape: 'Sj'
                },
                mapRunArn: {},
                label: {},
                revisionId: {}
              }
            }
          },
          GetActivityTask: {
            input: {
              type: 'structure',
              required: ['activityArn'],
              members: {
                activityArn: {},
                workerName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                taskToken: {},
                input: {
                  type: 'string',
                  sensitive: true
                }
              }
            }
          },
          GetExecutionHistory: {
            input: {
              type: 'structure',
              required: ['executionArn'],
              members: {
                executionArn: {},
                maxResults: {
                  type: 'integer'
                },
                reverseOrder: {
                  type: 'boolean'
                },
                nextToken: {},
                includeExecutionData: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['events'],
              members: {
                events: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['timestamp', 'type', 'id'],
                    members: {
                      timestamp: {
                        type: 'timestamp'
                      },
                      type: {},
                      id: {
                        type: 'long'
                      },
                      previousEventId: {
                        type: 'long'
                      },
                      activityFailedEventDetails: {
                        type: 'structure',
                        members: {
                          error: {
                            shape: 'S1d'
                          },
                          cause: {
                            shape: 'S1e'
                          }
                        }
                      },
                      activityScheduleFailedEventDetails: {
                        type: 'structure',
                        members: {
                          error: {
                            shape: 'S1d'
                          },
                          cause: {
                            shape: 'S1e'
                          }
                        }
                      },
                      activityScheduledEventDetails: {
                        type: 'structure',
                        required: ['resource'],
                        members: {
                          resource: {},
                          input: {
                            shape: 'S19'
                          },
                          inputDetails: {
                            shape: 'S2h'
                          },
                          timeoutInSeconds: {
                            type: 'long'
                          },
                          heartbeatInSeconds: {
                            type: 'long'
                          }
                        }
                      },
                      activityStartedEventDetails: {
                        type: 'structure',
                        members: {
                          workerName: {}
                        }
                      },
                      activitySucceededEventDetails: {
                        type: 'structure',
                        members: {
                          output: {
                            shape: 'S19'
                          },
                          outputDetails: {
                            shape: 'S2h'
                          }
                        }
                      },
                      activityTimedOutEventDetails: {
                        type: 'structure',
                        members: {
                          error: {
                            shape: 'S1d'
                          },
                          cause: {
                            shape: 'S1e'
                          }
                        }
                      },
                      taskFailedEventDetails: {
                        type: 'structure',
                        required: ['resourceType', 'resource'],
                        members: {
                          resourceType: {},
                          resource: {},
                          error: {
                            shape: 'S1d'
                          },
                          cause: {
                            shape: 'S1e'
                          }
                        }
                      },
                      taskScheduledEventDetails: {
                        type: 'structure',
                        required: ['resourceType', 'resource', 'region', 'parameters'],
                        members: {
                          resourceType: {},
                          resource: {},
                          region: {},
                          parameters: {
                            type: 'string',
                            sensitive: true
                          },
                          timeoutInSeconds: {
                            type: 'long'
                          },
                          heartbeatInSeconds: {
                            type: 'long'
                          },
                          taskCredentials: {
                            shape: 'S2r'
                          }
                        }
                      },
                      taskStartFailedEventDetails: {
                        type: 'structure',
                        required: ['resourceType', 'resource'],
                        members: {
                          resourceType: {},
                          resource: {},
                          error: {
                            shape: 'S1d'
                          },
                          cause: {
                            shape: 'S1e'
                          }
                        }
                      },
                      taskStartedEventDetails: {
                        type: 'structure',
                        required: ['resourceType', 'resource'],
                        members: {
                          resourceType: {},
                          resource: {}
                        }
                      },
                      taskSubmitFailedEventDetails: {
                        type: 'structure',
                        required: ['resourceType', 'resource'],
                        members: {
                          resourceType: {},
                          resource: {},
                          error: {
                            shape: 'S1d'
                          },
                          cause: {
                            shape: 'S1e'
                          }
                        }
                      },
                      taskSubmittedEventDetails: {
                        type: 'structure',
                        required: ['resourceType', 'resource'],
                        members: {
                          resourceType: {},
                          resource: {},
                          output: {
                            shape: 'S19'
                          },
                          outputDetails: {
                            shape: 'S2h'
                          }
                        }
                      },
                      taskSucceededEventDetails: {
                        type: 'structure',
                        required: ['resourceType', 'resource'],
                        members: {
                          resourceType: {},
                          resource: {},
                          output: {
                            shape: 'S19'
                          },
                          outputDetails: {
                            shape: 'S2h'
                          }
                        }
                      },
                      taskTimedOutEventDetails: {
                        type: 'structure',
                        required: ['resourceType', 'resource'],
                        members: {
                          resourceType: {},
                          resource: {},
                          error: {
                            shape: 'S1d'
                          },
                          cause: {
                            shape: 'S1e'
                          }
                        }
                      },
                      executionFailedEventDetails: {
                        type: 'structure',
                        members: {
                          error: {
                            shape: 'S1d'
                          },
                          cause: {
                            shape: 'S1e'
                          }
                        }
                      },
                      executionStartedEventDetails: {
                        type: 'structure',
                        members: {
                          input: {
                            shape: 'S19'
                          },
                          inputDetails: {
                            shape: 'S2h'
                          },
                          roleArn: {},
                          stateMachineAliasArn: {},
                          stateMachineVersionArn: {}
                        }
                      },
                      executionSucceededEventDetails: {
                        type: 'structure',
                        members: {
                          output: {
                            shape: 'S19'
                          },
                          outputDetails: {
                            shape: 'S2h'
                          }
                        }
                      },
                      executionAbortedEventDetails: {
                        type: 'structure',
                        members: {
                          error: {
                            shape: 'S1d'
                          },
                          cause: {
                            shape: 'S1e'
                          }
                        }
                      },
                      executionTimedOutEventDetails: {
                        type: 'structure',
                        members: {
                          error: {
                            shape: 'S1d'
                          },
                          cause: {
                            shape: 'S1e'
                          }
                        }
                      },
                      executionRedrivenEventDetails: {
                        type: 'structure',
                        members: {
                          redriveCount: {
                            type: 'integer'
                          }
                        }
                      },
                      mapStateStartedEventDetails: {
                        type: 'structure',
                        members: {
                          length: {
                            type: 'integer'
                          }
                        }
                      },
                      mapIterationStartedEventDetails: {
                        shape: 'S36'
                      },
                      mapIterationSucceededEventDetails: {
                        shape: 'S36'
                      },
                      mapIterationFailedEventDetails: {
                        shape: 'S36'
                      },
                      mapIterationAbortedEventDetails: {
                        shape: 'S36'
                      },
                      lambdaFunctionFailedEventDetails: {
                        type: 'structure',
                        members: {
                          error: {
                            shape: 'S1d'
                          },
                          cause: {
                            shape: 'S1e'
                          }
                        }
                      },
                      lambdaFunctionScheduleFailedEventDetails: {
                        type: 'structure',
                        members: {
                          error: {
                            shape: 'S1d'
                          },
                          cause: {
                            shape: 'S1e'
                          }
                        }
                      },
                      lambdaFunctionScheduledEventDetails: {
                        type: 'structure',
                        required: ['resource'],
                        members: {
                          resource: {},
                          input: {
                            shape: 'S19'
                          },
                          inputDetails: {
                            shape: 'S2h'
                          },
                          timeoutInSeconds: {
                            type: 'long'
                          },
                          taskCredentials: {
                            shape: 'S2r'
                          }
                        }
                      },
                      lambdaFunctionStartFailedEventDetails: {
                        type: 'structure',
                        members: {
                          error: {
                            shape: 'S1d'
                          },
                          cause: {
                            shape: 'S1e'
                          }
                        }
                      },
                      lambdaFunctionSucceededEventDetails: {
                        type: 'structure',
                        members: {
                          output: {
                            shape: 'S19'
                          },
                          outputDetails: {
                            shape: 'S2h'
                          }
                        }
                      },
                      lambdaFunctionTimedOutEventDetails: {
                        type: 'structure',
                        members: {
                          error: {
                            shape: 'S1d'
                          },
                          cause: {
                            shape: 'S1e'
                          }
                        }
                      },
                      stateEnteredEventDetails: {
                        type: 'structure',
                        required: ['name'],
                        members: {
                          name: {},
                          input: {
                            shape: 'S19'
                          },
                          inputDetails: {
                            shape: 'S2h'
                          }
                        }
                      },
                      stateExitedEventDetails: {
                        type: 'structure',
                        required: ['name'],
                        members: {
                          name: {},
                          output: {
                            shape: 'S19'
                          },
                          outputDetails: {
                            shape: 'S2h'
                          }
                        }
                      },
                      mapRunStartedEventDetails: {
                        type: 'structure',
                        members: {
                          mapRunArn: {}
                        }
                      },
                      mapRunFailedEventDetails: {
                        type: 'structure',
                        members: {
                          error: {
                            shape: 'S1d'
                          },
                          cause: {
                            shape: 'S1e'
                          }
                        }
                      },
                      mapRunRedrivenEventDetails: {
                        type: 'structure',
                        members: {
                          mapRunArn: {},
                          redriveCount: {
                            type: 'integer'
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
          ListActivities: {
            input: {
              type: 'structure',
              members: {
                maxResults: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              required: ['activities'],
              members: {
                activities: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['activityArn', 'name', 'creationDate'],
                    members: {
                      activityArn: {},
                      name: {},
                      creationDate: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListExecutions: {
            input: {
              type: 'structure',
              members: {
                stateMachineArn: {},
                statusFilter: {},
                maxResults: {
                  type: 'integer'
                },
                nextToken: {},
                mapRunArn: {},
                redriveFilter: {}
              }
            },
            output: {
              type: 'structure',
              required: ['executions'],
              members: {
                executions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['executionArn', 'stateMachineArn', 'name', 'status', 'startDate'],
                    members: {
                      executionArn: {},
                      stateMachineArn: {},
                      name: {},
                      status: {},
                      startDate: {
                        type: 'timestamp'
                      },
                      stopDate: {
                        type: 'timestamp'
                      },
                      mapRunArn: {},
                      itemCount: {
                        type: 'integer'
                      },
                      stateMachineVersionArn: {},
                      stateMachineAliasArn: {},
                      redriveCount: {
                        type: 'integer'
                      },
                      redriveDate: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListMapRuns: {
            input: {
              type: 'structure',
              required: ['executionArn'],
              members: {
                executionArn: {},
                maxResults: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              required: ['mapRuns'],
              members: {
                mapRuns: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['executionArn', 'mapRunArn', 'stateMachineArn', 'startDate'],
                    members: {
                      executionArn: {},
                      mapRunArn: {},
                      stateMachineArn: {},
                      startDate: {
                        type: 'timestamp'
                      },
                      stopDate: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListStateMachineAliases: {
            input: {
              type: 'structure',
              required: ['stateMachineArn'],
              members: {
                stateMachineArn: {},
                nextToken: {},
                maxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['stateMachineAliases'],
              members: {
                stateMachineAliases: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['stateMachineAliasArn', 'creationDate'],
                    members: {
                      stateMachineAliasArn: {},
                      creationDate: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListStateMachineVersions: {
            input: {
              type: 'structure',
              required: ['stateMachineArn'],
              members: {
                stateMachineArn: {},
                nextToken: {},
                maxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['stateMachineVersions'],
              members: {
                stateMachineVersions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['stateMachineVersionArn', 'creationDate'],
                    members: {
                      stateMachineVersionArn: {},
                      creationDate: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListStateMachines: {
            input: {
              type: 'structure',
              members: {
                maxResults: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              required: ['stateMachines'],
              members: {
                stateMachines: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['stateMachineArn', 'name', 'type', 'creationDate'],
                    members: {
                      stateMachineArn: {},
                      name: {},
                      type: {},
                      creationDate: {
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
                  shape: 'S3'
                }
              }
            }
          },
          PublishStateMachineVersion: {
            input: {
              type: 'structure',
              required: ['stateMachineArn'],
              members: {
                stateMachineArn: {},
                revisionId: {},
                description: {
                  shape: 'Sm'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['creationDate', 'stateMachineVersionArn'],
              members: {
                creationDate: {
                  type: 'timestamp'
                },
                stateMachineVersionArn: {}
              }
            },
            idempotent: true
          },
          RedriveExecution: {
            input: {
              type: 'structure',
              required: ['executionArn'],
              members: {
                executionArn: {},
                clientToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              required: ['redriveDate'],
              members: {
                redriveDate: {
                  type: 'timestamp'
                }
              }
            },
            idempotent: true
          },
          SendTaskFailure: {
            input: {
              type: 'structure',
              required: ['taskToken'],
              members: {
                taskToken: {},
                error: {
                  shape: 'S1d'
                },
                cause: {
                  shape: 'S1e'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          SendTaskHeartbeat: {
            input: {
              type: 'structure',
              required: ['taskToken'],
              members: {
                taskToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          SendTaskSuccess: {
            input: {
              type: 'structure',
              required: ['taskToken', 'output'],
              members: {
                taskToken: {},
                output: {
                  shape: 'S19'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          StartExecution: {
            input: {
              type: 'structure',
              required: ['stateMachineArn'],
              members: {
                stateMachineArn: {},
                name: {},
                input: {
                  shape: 'S19'
                },
                traceHeader: {}
              }
            },
            output: {
              type: 'structure',
              required: ['executionArn', 'startDate'],
              members: {
                executionArn: {},
                startDate: {
                  type: 'timestamp'
                }
              }
            },
            idempotent: true
          },
          StartSyncExecution: {
            input: {
              type: 'structure',
              required: ['stateMachineArn'],
              members: {
                stateMachineArn: {},
                name: {},
                input: {
                  shape: 'S19'
                },
                traceHeader: {}
              }
            },
            output: {
              type: 'structure',
              required: ['executionArn', 'startDate', 'stopDate', 'status'],
              members: {
                executionArn: {},
                stateMachineArn: {},
                name: {},
                startDate: {
                  type: 'timestamp'
                },
                stopDate: {
                  type: 'timestamp'
                },
                status: {},
                error: {
                  shape: 'S1d'
                },
                cause: {
                  shape: 'S1e'
                },
                input: {
                  shape: 'S19'
                },
                inputDetails: {
                  shape: 'S1a'
                },
                output: {
                  shape: 'S19'
                },
                outputDetails: {
                  shape: 'S1a'
                },
                traceHeader: {},
                billingDetails: {
                  type: 'structure',
                  members: {
                    billedMemoryUsedInMB: {
                      type: 'long'
                    },
                    billedDurationInMilliseconds: {
                      type: 'long'
                    }
                  }
                }
              }
            },
            endpoint: {
              hostPrefix: 'sync-'
            }
          },
          StopExecution: {
            input: {
              type: 'structure',
              required: ['executionArn'],
              members: {
                executionArn: {},
                error: {
                  shape: 'S1d'
                },
                cause: {
                  shape: 'S1e'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['stopDate'],
              members: {
                stopDate: {
                  type: 'timestamp'
                }
              }
            }
          },
          TagResource: {
            input: {
              type: 'structure',
              required: ['resourceArn', 'tags'],
              members: {
                resourceArn: {},
                tags: {
                  shape: 'S3'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          TestState: {
            input: {
              type: 'structure',
              required: ['definition', 'roleArn'],
              members: {
                definition: {
                  shape: 'Sb'
                },
                roleArn: {},
                input: {
                  shape: 'S19'
                },
                inspectionLevel: {},
                revealSecrets: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                output: {
                  shape: 'S19'
                },
                error: {
                  shape: 'S1d'
                },
                cause: {
                  shape: 'S1e'
                },
                inspectionData: {
                  type: 'structure',
                  members: {
                    input: {
                      shape: 'S19'
                    },
                    afterInputPath: {
                      shape: 'S19'
                    },
                    afterParameters: {
                      shape: 'S19'
                    },
                    result: {
                      shape: 'S19'
                    },
                    afterResultSelector: {
                      shape: 'S19'
                    },
                    afterResultPath: {
                      shape: 'S19'
                    },
                    request: {
                      type: 'structure',
                      members: {
                        protocol: {},
                        method: {},
                        url: {},
                        headers: {},
                        body: {}
                      }
                    },
                    response: {
                      type: 'structure',
                      members: {
                        protocol: {},
                        statusCode: {},
                        statusMessage: {},
                        headers: {},
                        body: {}
                      }
                    }
                  },
                  sensitive: true
                },
                nextState: {},
                status: {}
              }
            },
            endpoint: {
              hostPrefix: 'sync-'
            }
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
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateMapRun: {
            input: {
              type: 'structure',
              required: ['mapRunArn'],
              members: {
                mapRunArn: {},
                maxConcurrency: {
                  type: 'integer'
                },
                toleratedFailurePercentage: {
                  type: 'float'
                },
                toleratedFailureCount: {
                  type: 'long'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateStateMachine: {
            input: {
              type: 'structure',
              required: ['stateMachineArn'],
              members: {
                stateMachineArn: {},
                definition: {
                  shape: 'Sb'
                },
                roleArn: {},
                loggingConfiguration: {
                  shape: 'Sd'
                },
                tracingConfiguration: {
                  shape: 'Sj'
                },
                publish: {
                  type: 'boolean'
                },
                versionDescription: {
                  shape: 'Sm'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['updateDate'],
              members: {
                updateDate: {
                  type: 'timestamp'
                },
                revisionId: {},
                stateMachineVersionArn: {}
              }
            },
            idempotent: true
          },
          UpdateStateMachineAlias: {
            input: {
              type: 'structure',
              required: ['stateMachineAliasArn'],
              members: {
                stateMachineAliasArn: {},
                description: {
                  shape: 'Sp'
                },
                routingConfiguration: {
                  shape: 'Sr'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['updateDate'],
              members: {
                updateDate: {
                  type: 'timestamp'
                }
              }
            }
          },
          ValidateStateMachineDefinition: {
            input: {
              type: 'structure',
              required: ['definition'],
              members: {
                definition: {
                  shape: 'Sb'
                },
                type: {}
              }
            },
            output: {
              type: 'structure',
              required: ['result', 'diagnostics'],
              members: {
                result: {},
                diagnostics: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['severity', 'code', 'message'],
                    members: {
                      severity: {},
                      code: {},
                      message: {},
                      location: {}
                    }
                  }
                }
              }
            }
          }
        },
        shapes: {
          S3: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                key: {},
                value: {}
              }
            }
          },
          Sb: {
            type: 'string',
            sensitive: true
          },
          Sd: {
            type: 'structure',
            members: {
              level: {},
              includeExecutionData: {
                type: 'boolean'
              },
              destinations: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    cloudWatchLogsLogGroup: {
                      type: 'structure',
                      members: {
                        logGroupArn: {}
                      }
                    }
                  }
                }
              }
            }
          },
          Sj: {
            type: 'structure',
            members: {
              enabled: {
                type: 'boolean'
              }
            }
          },
          Sm: {
            type: 'string',
            sensitive: true
          },
          Sp: {
            type: 'string',
            sensitive: true
          },
          Sr: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['stateMachineVersionArn', 'weight'],
              members: {
                stateMachineVersionArn: {},
                weight: {
                  type: 'integer'
                }
              }
            }
          },
          S19: {
            type: 'string',
            sensitive: true
          },
          S1a: {
            type: 'structure',
            members: {
              included: {
                type: 'boolean'
              }
            }
          },
          S1d: {
            type: 'string',
            sensitive: true
          },
          S1e: {
            type: 'string',
            sensitive: true
          },
          S2h: {
            type: 'structure',
            members: {
              truncated: {
                type: 'boolean'
              }
            }
          },
          S2r: {
            type: 'structure',
            members: {
              roleArn: {}
            }
          },
          S36: {
            type: 'structure',
            members: {
              name: {},
              index: {
                type: 'integer'
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=b88907dbbd3086674c17b1729ca24d4214ec98c6.js.map