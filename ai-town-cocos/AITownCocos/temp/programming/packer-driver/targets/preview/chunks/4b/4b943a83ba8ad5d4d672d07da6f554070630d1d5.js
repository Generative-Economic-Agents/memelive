System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2012-01-25',
          endpointPrefix: 'swf',
          jsonVersion: '1.0',
          protocol: 'json',
          protocols: ['json'],
          serviceAbbreviation: 'Amazon SWF',
          serviceFullName: 'Amazon Simple Workflow Service',
          serviceId: 'SWF',
          signatureVersion: 'v4',
          targetPrefix: 'SimpleWorkflowService',
          uid: 'swf-2012-01-25'
        },
        operations: {
          CountClosedWorkflowExecutions: {
            input: {
              type: 'structure',
              required: ['domain'],
              members: {
                domain: {},
                startTimeFilter: {
                  shape: 'S3'
                },
                closeTimeFilter: {
                  shape: 'S3'
                },
                executionFilter: {
                  shape: 'S5'
                },
                typeFilter: {
                  shape: 'S7'
                },
                tagFilter: {
                  shape: 'Sa'
                },
                closeStatusFilter: {
                  shape: 'Sc'
                }
              }
            },
            output: {
              shape: 'Se'
            }
          },
          CountOpenWorkflowExecutions: {
            input: {
              type: 'structure',
              required: ['domain', 'startTimeFilter'],
              members: {
                domain: {},
                startTimeFilter: {
                  shape: 'S3'
                },
                typeFilter: {
                  shape: 'S7'
                },
                tagFilter: {
                  shape: 'Sa'
                },
                executionFilter: {
                  shape: 'S5'
                }
              }
            },
            output: {
              shape: 'Se'
            }
          },
          CountPendingActivityTasks: {
            input: {
              type: 'structure',
              required: ['domain', 'taskList'],
              members: {
                domain: {},
                taskList: {
                  shape: 'Sj'
                }
              }
            },
            output: {
              shape: 'Sk'
            }
          },
          CountPendingDecisionTasks: {
            input: {
              type: 'structure',
              required: ['domain', 'taskList'],
              members: {
                domain: {},
                taskList: {
                  shape: 'Sj'
                }
              }
            },
            output: {
              shape: 'Sk'
            }
          },
          DeleteActivityType: {
            input: {
              type: 'structure',
              required: ['domain', 'activityType'],
              members: {
                domain: {},
                activityType: {
                  shape: 'Sn'
                }
              }
            }
          },
          DeleteWorkflowType: {
            input: {
              type: 'structure',
              required: ['domain', 'workflowType'],
              members: {
                domain: {},
                workflowType: {
                  shape: 'Sq'
                }
              }
            }
          },
          DeprecateActivityType: {
            input: {
              type: 'structure',
              required: ['domain', 'activityType'],
              members: {
                domain: {},
                activityType: {
                  shape: 'Sn'
                }
              }
            }
          },
          DeprecateDomain: {
            input: {
              type: 'structure',
              required: ['name'],
              members: {
                name: {}
              }
            }
          },
          DeprecateWorkflowType: {
            input: {
              type: 'structure',
              required: ['domain', 'workflowType'],
              members: {
                domain: {},
                workflowType: {
                  shape: 'Sq'
                }
              }
            }
          },
          DescribeActivityType: {
            input: {
              type: 'structure',
              required: ['domain', 'activityType'],
              members: {
                domain: {},
                activityType: {
                  shape: 'Sn'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['typeInfo', 'configuration'],
              members: {
                typeInfo: {
                  shape: 'Sw'
                },
                configuration: {
                  type: 'structure',
                  members: {
                    defaultTaskStartToCloseTimeout: {},
                    defaultTaskHeartbeatTimeout: {},
                    defaultTaskList: {
                      shape: 'Sj'
                    },
                    defaultTaskPriority: {},
                    defaultTaskScheduleToStartTimeout: {},
                    defaultTaskScheduleToCloseTimeout: {}
                  }
                }
              }
            }
          },
          DescribeDomain: {
            input: {
              type: 'structure',
              required: ['name'],
              members: {
                name: {}
              }
            },
            output: {
              type: 'structure',
              required: ['domainInfo', 'configuration'],
              members: {
                domainInfo: {
                  shape: 'S14'
                },
                configuration: {
                  type: 'structure',
                  required: ['workflowExecutionRetentionPeriodInDays'],
                  members: {
                    workflowExecutionRetentionPeriodInDays: {}
                  }
                }
              }
            }
          },
          DescribeWorkflowExecution: {
            input: {
              type: 'structure',
              required: ['domain', 'execution'],
              members: {
                domain: {},
                execution: {
                  shape: 'S19'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['executionInfo', 'executionConfiguration', 'openCounts'],
              members: {
                executionInfo: {
                  shape: 'S1c'
                },
                executionConfiguration: {
                  type: 'structure',
                  required: ['taskStartToCloseTimeout', 'executionStartToCloseTimeout', 'taskList', 'childPolicy'],
                  members: {
                    taskStartToCloseTimeout: {},
                    executionStartToCloseTimeout: {},
                    taskList: {
                      shape: 'Sj'
                    },
                    taskPriority: {},
                    childPolicy: {},
                    lambdaRole: {}
                  }
                },
                openCounts: {
                  type: 'structure',
                  required: ['openActivityTasks', 'openDecisionTasks', 'openTimers', 'openChildWorkflowExecutions'],
                  members: {
                    openActivityTasks: {
                      type: 'integer'
                    },
                    openDecisionTasks: {
                      type: 'integer'
                    },
                    openTimers: {
                      type: 'integer'
                    },
                    openChildWorkflowExecutions: {
                      type: 'integer'
                    },
                    openLambdaFunctions: {
                      type: 'integer'
                    }
                  }
                },
                latestActivityTaskTimestamp: {
                  type: 'timestamp'
                },
                latestExecutionContext: {}
              }
            }
          },
          DescribeWorkflowType: {
            input: {
              type: 'structure',
              required: ['domain', 'workflowType'],
              members: {
                domain: {},
                workflowType: {
                  shape: 'Sq'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['typeInfo', 'configuration'],
              members: {
                typeInfo: {
                  shape: 'S1o'
                },
                configuration: {
                  type: 'structure',
                  members: {
                    defaultTaskStartToCloseTimeout: {},
                    defaultExecutionStartToCloseTimeout: {},
                    defaultTaskList: {
                      shape: 'Sj'
                    },
                    defaultTaskPriority: {},
                    defaultChildPolicy: {},
                    defaultLambdaRole: {}
                  }
                }
              }
            }
          },
          GetWorkflowExecutionHistory: {
            input: {
              type: 'structure',
              required: ['domain', 'execution'],
              members: {
                domain: {},
                execution: {
                  shape: 'S19'
                },
                nextPageToken: {},
                maximumPageSize: {
                  type: 'integer'
                },
                reverseOrder: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['events'],
              members: {
                events: {
                  shape: 'S1v'
                },
                nextPageToken: {}
              }
            }
          },
          ListActivityTypes: {
            input: {
              type: 'structure',
              required: ['domain', 'registrationStatus'],
              members: {
                domain: {},
                name: {},
                registrationStatus: {},
                nextPageToken: {},
                maximumPageSize: {
                  type: 'integer'
                },
                reverseOrder: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['typeInfos'],
              members: {
                typeInfos: {
                  type: 'list',
                  member: {
                    shape: 'Sw'
                  }
                },
                nextPageToken: {}
              }
            }
          },
          ListClosedWorkflowExecutions: {
            input: {
              type: 'structure',
              required: ['domain'],
              members: {
                domain: {},
                startTimeFilter: {
                  shape: 'S3'
                },
                closeTimeFilter: {
                  shape: 'S3'
                },
                executionFilter: {
                  shape: 'S5'
                },
                closeStatusFilter: {
                  shape: 'Sc'
                },
                typeFilter: {
                  shape: 'S7'
                },
                tagFilter: {
                  shape: 'Sa'
                },
                nextPageToken: {},
                maximumPageSize: {
                  type: 'integer'
                },
                reverseOrder: {
                  type: 'boolean'
                }
              }
            },
            output: {
              shape: 'S4i'
            }
          },
          ListDomains: {
            input: {
              type: 'structure',
              required: ['registrationStatus'],
              members: {
                nextPageToken: {},
                registrationStatus: {},
                maximumPageSize: {
                  type: 'integer'
                },
                reverseOrder: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['domainInfos'],
              members: {
                domainInfos: {
                  type: 'list',
                  member: {
                    shape: 'S14'
                  }
                },
                nextPageToken: {}
              }
            }
          },
          ListOpenWorkflowExecutions: {
            input: {
              type: 'structure',
              required: ['domain', 'startTimeFilter'],
              members: {
                domain: {},
                startTimeFilter: {
                  shape: 'S3'
                },
                typeFilter: {
                  shape: 'S7'
                },
                tagFilter: {
                  shape: 'Sa'
                },
                nextPageToken: {},
                maximumPageSize: {
                  type: 'integer'
                },
                reverseOrder: {
                  type: 'boolean'
                },
                executionFilter: {
                  shape: 'S5'
                }
              }
            },
            output: {
              shape: 'S4i'
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
                  shape: 'S4q'
                }
              }
            }
          },
          ListWorkflowTypes: {
            input: {
              type: 'structure',
              required: ['domain', 'registrationStatus'],
              members: {
                domain: {},
                name: {},
                registrationStatus: {},
                nextPageToken: {},
                maximumPageSize: {
                  type: 'integer'
                },
                reverseOrder: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['typeInfos'],
              members: {
                typeInfos: {
                  type: 'list',
                  member: {
                    shape: 'S1o'
                  }
                },
                nextPageToken: {}
              }
            }
          },
          PollForActivityTask: {
            input: {
              type: 'structure',
              required: ['domain', 'taskList'],
              members: {
                domain: {},
                taskList: {
                  shape: 'Sj'
                },
                identity: {}
              }
            },
            output: {
              type: 'structure',
              required: ['taskToken', 'activityId', 'startedEventId', 'workflowExecution', 'activityType'],
              members: {
                taskToken: {},
                activityId: {},
                startedEventId: {
                  type: 'long'
                },
                workflowExecution: {
                  shape: 'S19'
                },
                activityType: {
                  shape: 'Sn'
                },
                input: {}
              }
            }
          },
          PollForDecisionTask: {
            input: {
              type: 'structure',
              required: ['domain', 'taskList'],
              members: {
                domain: {},
                taskList: {
                  shape: 'Sj'
                },
                identity: {},
                nextPageToken: {},
                maximumPageSize: {
                  type: 'integer'
                },
                reverseOrder: {
                  type: 'boolean'
                },
                startAtPreviousStartedEvent: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['taskToken', 'startedEventId', 'workflowExecution', 'workflowType', 'events'],
              members: {
                taskToken: {},
                startedEventId: {
                  type: 'long'
                },
                workflowExecution: {
                  shape: 'S19'
                },
                workflowType: {
                  shape: 'Sq'
                },
                events: {
                  shape: 'S1v'
                },
                nextPageToken: {},
                previousStartedEventId: {
                  type: 'long'
                }
              }
            }
          },
          RecordActivityTaskHeartbeat: {
            input: {
              type: 'structure',
              required: ['taskToken'],
              members: {
                taskToken: {},
                details: {}
              }
            },
            output: {
              type: 'structure',
              required: ['cancelRequested'],
              members: {
                cancelRequested: {
                  type: 'boolean'
                }
              }
            }
          },
          RegisterActivityType: {
            input: {
              type: 'structure',
              required: ['domain', 'name', 'version'],
              members: {
                domain: {},
                name: {},
                version: {},
                description: {},
                defaultTaskStartToCloseTimeout: {},
                defaultTaskHeartbeatTimeout: {},
                defaultTaskList: {
                  shape: 'Sj'
                },
                defaultTaskPriority: {},
                defaultTaskScheduleToStartTimeout: {},
                defaultTaskScheduleToCloseTimeout: {}
              }
            }
          },
          RegisterDomain: {
            input: {
              type: 'structure',
              required: ['name', 'workflowExecutionRetentionPeriodInDays'],
              members: {
                name: {},
                description: {},
                workflowExecutionRetentionPeriodInDays: {},
                tags: {
                  shape: 'S4q'
                }
              }
            }
          },
          RegisterWorkflowType: {
            input: {
              type: 'structure',
              required: ['domain', 'name', 'version'],
              members: {
                domain: {},
                name: {},
                version: {},
                description: {},
                defaultTaskStartToCloseTimeout: {},
                defaultExecutionStartToCloseTimeout: {},
                defaultTaskList: {
                  shape: 'Sj'
                },
                defaultTaskPriority: {},
                defaultChildPolicy: {},
                defaultLambdaRole: {}
              }
            }
          },
          RequestCancelWorkflowExecution: {
            input: {
              type: 'structure',
              required: ['domain', 'workflowId'],
              members: {
                domain: {},
                workflowId: {},
                runId: {}
              }
            }
          },
          RespondActivityTaskCanceled: {
            input: {
              type: 'structure',
              required: ['taskToken'],
              members: {
                taskToken: {},
                details: {}
              }
            }
          },
          RespondActivityTaskCompleted: {
            input: {
              type: 'structure',
              required: ['taskToken'],
              members: {
                taskToken: {},
                result: {}
              }
            }
          },
          RespondActivityTaskFailed: {
            input: {
              type: 'structure',
              required: ['taskToken'],
              members: {
                taskToken: {},
                reason: {},
                details: {}
              }
            }
          },
          RespondDecisionTaskCompleted: {
            input: {
              type: 'structure',
              required: ['taskToken'],
              members: {
                taskToken: {},
                decisions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['decisionType'],
                    members: {
                      decisionType: {},
                      scheduleActivityTaskDecisionAttributes: {
                        type: 'structure',
                        required: ['activityType', 'activityId'],
                        members: {
                          activityType: {
                            shape: 'Sn'
                          },
                          activityId: {},
                          control: {},
                          input: {},
                          scheduleToCloseTimeout: {},
                          taskList: {
                            shape: 'Sj'
                          },
                          taskPriority: {},
                          scheduleToStartTimeout: {},
                          startToCloseTimeout: {},
                          heartbeatTimeout: {}
                        }
                      },
                      requestCancelActivityTaskDecisionAttributes: {
                        type: 'structure',
                        required: ['activityId'],
                        members: {
                          activityId: {}
                        }
                      },
                      completeWorkflowExecutionDecisionAttributes: {
                        type: 'structure',
                        members: {
                          result: {}
                        }
                      },
                      failWorkflowExecutionDecisionAttributes: {
                        type: 'structure',
                        members: {
                          reason: {},
                          details: {}
                        }
                      },
                      cancelWorkflowExecutionDecisionAttributes: {
                        type: 'structure',
                        members: {
                          details: {}
                        }
                      },
                      continueAsNewWorkflowExecutionDecisionAttributes: {
                        type: 'structure',
                        members: {
                          input: {},
                          executionStartToCloseTimeout: {},
                          taskList: {
                            shape: 'Sj'
                          },
                          taskPriority: {},
                          taskStartToCloseTimeout: {},
                          childPolicy: {},
                          tagList: {
                            shape: 'S1e'
                          },
                          workflowTypeVersion: {},
                          lambdaRole: {}
                        }
                      },
                      recordMarkerDecisionAttributes: {
                        type: 'structure',
                        required: ['markerName'],
                        members: {
                          markerName: {},
                          details: {}
                        }
                      },
                      startTimerDecisionAttributes: {
                        type: 'structure',
                        required: ['timerId', 'startToFireTimeout'],
                        members: {
                          timerId: {},
                          control: {},
                          startToFireTimeout: {}
                        }
                      },
                      cancelTimerDecisionAttributes: {
                        type: 'structure',
                        required: ['timerId'],
                        members: {
                          timerId: {}
                        }
                      },
                      signalExternalWorkflowExecutionDecisionAttributes: {
                        type: 'structure',
                        required: ['workflowId', 'signalName'],
                        members: {
                          workflowId: {},
                          runId: {},
                          signalName: {},
                          input: {},
                          control: {}
                        }
                      },
                      requestCancelExternalWorkflowExecutionDecisionAttributes: {
                        type: 'structure',
                        required: ['workflowId'],
                        members: {
                          workflowId: {},
                          runId: {},
                          control: {}
                        }
                      },
                      startChildWorkflowExecutionDecisionAttributes: {
                        type: 'structure',
                        required: ['workflowType', 'workflowId'],
                        members: {
                          workflowType: {
                            shape: 'Sq'
                          },
                          workflowId: {},
                          control: {},
                          input: {},
                          executionStartToCloseTimeout: {},
                          taskList: {
                            shape: 'Sj'
                          },
                          taskPriority: {},
                          taskStartToCloseTimeout: {},
                          childPolicy: {},
                          tagList: {
                            shape: 'S1e'
                          },
                          lambdaRole: {}
                        }
                      },
                      scheduleLambdaFunctionDecisionAttributes: {
                        type: 'structure',
                        required: ['id', 'name'],
                        members: {
                          id: {},
                          name: {},
                          control: {},
                          input: {},
                          startToCloseTimeout: {}
                        }
                      }
                    }
                  }
                },
                executionContext: {},
                taskList: {
                  shape: 'Sj'
                },
                taskListScheduleToStartTimeout: {}
              }
            }
          },
          SignalWorkflowExecution: {
            input: {
              type: 'structure',
              required: ['domain', 'workflowId', 'signalName'],
              members: {
                domain: {},
                workflowId: {},
                runId: {},
                signalName: {},
                input: {}
              }
            }
          },
          StartWorkflowExecution: {
            input: {
              type: 'structure',
              required: ['domain', 'workflowId', 'workflowType'],
              members: {
                domain: {},
                workflowId: {},
                workflowType: {
                  shape: 'Sq'
                },
                taskList: {
                  shape: 'Sj'
                },
                taskPriority: {},
                input: {},
                executionStartToCloseTimeout: {},
                tagList: {
                  shape: 'S1e'
                },
                taskStartToCloseTimeout: {},
                childPolicy: {},
                lambdaRole: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                runId: {}
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
                  shape: 'S4q'
                }
              }
            }
          },
          TerminateWorkflowExecution: {
            input: {
              type: 'structure',
              required: ['domain', 'workflowId'],
              members: {
                domain: {},
                workflowId: {},
                runId: {},
                reason: {},
                details: {},
                childPolicy: {}
              }
            }
          },
          UndeprecateActivityType: {
            input: {
              type: 'structure',
              required: ['domain', 'activityType'],
              members: {
                domain: {},
                activityType: {
                  shape: 'Sn'
                }
              }
            }
          },
          UndeprecateDomain: {
            input: {
              type: 'structure',
              required: ['name'],
              members: {
                name: {}
              }
            }
          },
          UndeprecateWorkflowType: {
            input: {
              type: 'structure',
              required: ['domain', 'workflowType'],
              members: {
                domain: {},
                workflowType: {
                  shape: 'Sq'
                }
              }
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
            }
          }
        },
        shapes: {
          S3: {
            type: 'structure',
            required: ['oldestDate'],
            members: {
              oldestDate: {
                type: 'timestamp'
              },
              latestDate: {
                type: 'timestamp'
              }
            }
          },
          S5: {
            type: 'structure',
            required: ['workflowId'],
            members: {
              workflowId: {}
            }
          },
          S7: {
            type: 'structure',
            required: ['name'],
            members: {
              name: {},
              version: {}
            }
          },
          Sa: {
            type: 'structure',
            required: ['tag'],
            members: {
              tag: {}
            }
          },
          Sc: {
            type: 'structure',
            required: ['status'],
            members: {
              status: {}
            }
          },
          Se: {
            type: 'structure',
            required: ['count'],
            members: {
              count: {
                type: 'integer'
              },
              truncated: {
                type: 'boolean'
              }
            }
          },
          Sj: {
            type: 'structure',
            required: ['name'],
            members: {
              name: {}
            }
          },
          Sk: {
            type: 'structure',
            required: ['count'],
            members: {
              count: {
                type: 'integer'
              },
              truncated: {
                type: 'boolean'
              }
            }
          },
          Sn: {
            type: 'structure',
            required: ['name', 'version'],
            members: {
              name: {},
              version: {}
            }
          },
          Sq: {
            type: 'structure',
            required: ['name', 'version'],
            members: {
              name: {},
              version: {}
            }
          },
          Sw: {
            type: 'structure',
            required: ['activityType', 'status', 'creationDate'],
            members: {
              activityType: {
                shape: 'Sn'
              },
              status: {},
              description: {},
              creationDate: {
                type: 'timestamp'
              },
              deprecationDate: {
                type: 'timestamp'
              }
            }
          },
          S14: {
            type: 'structure',
            required: ['name', 'status'],
            members: {
              name: {},
              status: {},
              description: {},
              arn: {}
            }
          },
          S19: {
            type: 'structure',
            required: ['workflowId', 'runId'],
            members: {
              workflowId: {},
              runId: {}
            }
          },
          S1c: {
            type: 'structure',
            required: ['execution', 'workflowType', 'startTimestamp', 'executionStatus'],
            members: {
              execution: {
                shape: 'S19'
              },
              workflowType: {
                shape: 'Sq'
              },
              startTimestamp: {
                type: 'timestamp'
              },
              closeTimestamp: {
                type: 'timestamp'
              },
              executionStatus: {},
              closeStatus: {},
              parent: {
                shape: 'S19'
              },
              tagList: {
                shape: 'S1e'
              },
              cancelRequested: {
                type: 'boolean'
              }
            }
          },
          S1e: {
            type: 'list',
            member: {}
          },
          S1o: {
            type: 'structure',
            required: ['workflowType', 'status', 'creationDate'],
            members: {
              workflowType: {
                shape: 'Sq'
              },
              status: {},
              description: {},
              creationDate: {
                type: 'timestamp'
              },
              deprecationDate: {
                type: 'timestamp'
              }
            }
          },
          S1v: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['eventTimestamp', 'eventType', 'eventId'],
              members: {
                eventTimestamp: {
                  type: 'timestamp'
                },
                eventType: {},
                eventId: {
                  type: 'long'
                },
                workflowExecutionStartedEventAttributes: {
                  type: 'structure',
                  required: ['childPolicy', 'taskList', 'workflowType'],
                  members: {
                    input: {},
                    executionStartToCloseTimeout: {},
                    taskStartToCloseTimeout: {},
                    childPolicy: {},
                    taskList: {
                      shape: 'Sj'
                    },
                    taskPriority: {},
                    workflowType: {
                      shape: 'Sq'
                    },
                    tagList: {
                      shape: 'S1e'
                    },
                    continuedExecutionRunId: {},
                    parentWorkflowExecution: {
                      shape: 'S19'
                    },
                    parentInitiatedEventId: {
                      type: 'long'
                    },
                    lambdaRole: {}
                  }
                },
                workflowExecutionCompletedEventAttributes: {
                  type: 'structure',
                  required: ['decisionTaskCompletedEventId'],
                  members: {
                    result: {},
                    decisionTaskCompletedEventId: {
                      type: 'long'
                    }
                  }
                },
                completeWorkflowExecutionFailedEventAttributes: {
                  type: 'structure',
                  required: ['cause', 'decisionTaskCompletedEventId'],
                  members: {
                    cause: {},
                    decisionTaskCompletedEventId: {
                      type: 'long'
                    }
                  }
                },
                workflowExecutionFailedEventAttributes: {
                  type: 'structure',
                  required: ['decisionTaskCompletedEventId'],
                  members: {
                    reason: {},
                    details: {},
                    decisionTaskCompletedEventId: {
                      type: 'long'
                    }
                  }
                },
                failWorkflowExecutionFailedEventAttributes: {
                  type: 'structure',
                  required: ['cause', 'decisionTaskCompletedEventId'],
                  members: {
                    cause: {},
                    decisionTaskCompletedEventId: {
                      type: 'long'
                    }
                  }
                },
                workflowExecutionTimedOutEventAttributes: {
                  type: 'structure',
                  required: ['timeoutType', 'childPolicy'],
                  members: {
                    timeoutType: {},
                    childPolicy: {}
                  }
                },
                workflowExecutionCanceledEventAttributes: {
                  type: 'structure',
                  required: ['decisionTaskCompletedEventId'],
                  members: {
                    details: {},
                    decisionTaskCompletedEventId: {
                      type: 'long'
                    }
                  }
                },
                cancelWorkflowExecutionFailedEventAttributes: {
                  type: 'structure',
                  required: ['cause', 'decisionTaskCompletedEventId'],
                  members: {
                    cause: {},
                    decisionTaskCompletedEventId: {
                      type: 'long'
                    }
                  }
                },
                workflowExecutionContinuedAsNewEventAttributes: {
                  type: 'structure',
                  required: ['decisionTaskCompletedEventId', 'newExecutionRunId', 'taskList', 'childPolicy', 'workflowType'],
                  members: {
                    input: {},
                    decisionTaskCompletedEventId: {
                      type: 'long'
                    },
                    newExecutionRunId: {},
                    executionStartToCloseTimeout: {},
                    taskList: {
                      shape: 'Sj'
                    },
                    taskPriority: {},
                    taskStartToCloseTimeout: {},
                    childPolicy: {},
                    tagList: {
                      shape: 'S1e'
                    },
                    workflowType: {
                      shape: 'Sq'
                    },
                    lambdaRole: {}
                  }
                },
                continueAsNewWorkflowExecutionFailedEventAttributes: {
                  type: 'structure',
                  required: ['cause', 'decisionTaskCompletedEventId'],
                  members: {
                    cause: {},
                    decisionTaskCompletedEventId: {
                      type: 'long'
                    }
                  }
                },
                workflowExecutionTerminatedEventAttributes: {
                  type: 'structure',
                  required: ['childPolicy'],
                  members: {
                    reason: {},
                    details: {},
                    childPolicy: {},
                    cause: {}
                  }
                },
                workflowExecutionCancelRequestedEventAttributes: {
                  type: 'structure',
                  members: {
                    externalWorkflowExecution: {
                      shape: 'S19'
                    },
                    externalInitiatedEventId: {
                      type: 'long'
                    },
                    cause: {}
                  }
                },
                decisionTaskScheduledEventAttributes: {
                  type: 'structure',
                  required: ['taskList'],
                  members: {
                    taskList: {
                      shape: 'Sj'
                    },
                    taskPriority: {},
                    startToCloseTimeout: {},
                    scheduleToStartTimeout: {}
                  }
                },
                decisionTaskStartedEventAttributes: {
                  type: 'structure',
                  required: ['scheduledEventId'],
                  members: {
                    identity: {},
                    scheduledEventId: {
                      type: 'long'
                    }
                  }
                },
                decisionTaskCompletedEventAttributes: {
                  type: 'structure',
                  required: ['scheduledEventId', 'startedEventId'],
                  members: {
                    executionContext: {},
                    scheduledEventId: {
                      type: 'long'
                    },
                    startedEventId: {
                      type: 'long'
                    },
                    taskList: {
                      shape: 'Sj'
                    },
                    taskListScheduleToStartTimeout: {}
                  }
                },
                decisionTaskTimedOutEventAttributes: {
                  type: 'structure',
                  required: ['timeoutType', 'scheduledEventId', 'startedEventId'],
                  members: {
                    timeoutType: {},
                    scheduledEventId: {
                      type: 'long'
                    },
                    startedEventId: {
                      type: 'long'
                    }
                  }
                },
                activityTaskScheduledEventAttributes: {
                  type: 'structure',
                  required: ['activityType', 'activityId', 'taskList', 'decisionTaskCompletedEventId'],
                  members: {
                    activityType: {
                      shape: 'Sn'
                    },
                    activityId: {},
                    input: {},
                    control: {},
                    scheduleToStartTimeout: {},
                    scheduleToCloseTimeout: {},
                    startToCloseTimeout: {},
                    taskList: {
                      shape: 'Sj'
                    },
                    taskPriority: {},
                    decisionTaskCompletedEventId: {
                      type: 'long'
                    },
                    heartbeatTimeout: {}
                  }
                },
                activityTaskStartedEventAttributes: {
                  type: 'structure',
                  required: ['scheduledEventId'],
                  members: {
                    identity: {},
                    scheduledEventId: {
                      type: 'long'
                    }
                  }
                },
                activityTaskCompletedEventAttributes: {
                  type: 'structure',
                  required: ['scheduledEventId', 'startedEventId'],
                  members: {
                    result: {},
                    scheduledEventId: {
                      type: 'long'
                    },
                    startedEventId: {
                      type: 'long'
                    }
                  }
                },
                activityTaskFailedEventAttributes: {
                  type: 'structure',
                  required: ['scheduledEventId', 'startedEventId'],
                  members: {
                    reason: {},
                    details: {},
                    scheduledEventId: {
                      type: 'long'
                    },
                    startedEventId: {
                      type: 'long'
                    }
                  }
                },
                activityTaskTimedOutEventAttributes: {
                  type: 'structure',
                  required: ['timeoutType', 'scheduledEventId', 'startedEventId'],
                  members: {
                    timeoutType: {},
                    scheduledEventId: {
                      type: 'long'
                    },
                    startedEventId: {
                      type: 'long'
                    },
                    details: {}
                  }
                },
                activityTaskCanceledEventAttributes: {
                  type: 'structure',
                  required: ['scheduledEventId', 'startedEventId'],
                  members: {
                    details: {},
                    scheduledEventId: {
                      type: 'long'
                    },
                    startedEventId: {
                      type: 'long'
                    },
                    latestCancelRequestedEventId: {
                      type: 'long'
                    }
                  }
                },
                activityTaskCancelRequestedEventAttributes: {
                  type: 'structure',
                  required: ['decisionTaskCompletedEventId', 'activityId'],
                  members: {
                    decisionTaskCompletedEventId: {
                      type: 'long'
                    },
                    activityId: {}
                  }
                },
                workflowExecutionSignaledEventAttributes: {
                  type: 'structure',
                  required: ['signalName'],
                  members: {
                    signalName: {},
                    input: {},
                    externalWorkflowExecution: {
                      shape: 'S19'
                    },
                    externalInitiatedEventId: {
                      type: 'long'
                    }
                  }
                },
                markerRecordedEventAttributes: {
                  type: 'structure',
                  required: ['markerName', 'decisionTaskCompletedEventId'],
                  members: {
                    markerName: {},
                    details: {},
                    decisionTaskCompletedEventId: {
                      type: 'long'
                    }
                  }
                },
                recordMarkerFailedEventAttributes: {
                  type: 'structure',
                  required: ['markerName', 'cause', 'decisionTaskCompletedEventId'],
                  members: {
                    markerName: {},
                    cause: {},
                    decisionTaskCompletedEventId: {
                      type: 'long'
                    }
                  }
                },
                timerStartedEventAttributes: {
                  type: 'structure',
                  required: ['timerId', 'startToFireTimeout', 'decisionTaskCompletedEventId'],
                  members: {
                    timerId: {},
                    control: {},
                    startToFireTimeout: {},
                    decisionTaskCompletedEventId: {
                      type: 'long'
                    }
                  }
                },
                timerFiredEventAttributes: {
                  type: 'structure',
                  required: ['timerId', 'startedEventId'],
                  members: {
                    timerId: {},
                    startedEventId: {
                      type: 'long'
                    }
                  }
                },
                timerCanceledEventAttributes: {
                  type: 'structure',
                  required: ['timerId', 'startedEventId', 'decisionTaskCompletedEventId'],
                  members: {
                    timerId: {},
                    startedEventId: {
                      type: 'long'
                    },
                    decisionTaskCompletedEventId: {
                      type: 'long'
                    }
                  }
                },
                startChildWorkflowExecutionInitiatedEventAttributes: {
                  type: 'structure',
                  required: ['workflowId', 'workflowType', 'taskList', 'decisionTaskCompletedEventId', 'childPolicy'],
                  members: {
                    workflowId: {},
                    workflowType: {
                      shape: 'Sq'
                    },
                    control: {},
                    input: {},
                    executionStartToCloseTimeout: {},
                    taskList: {
                      shape: 'Sj'
                    },
                    taskPriority: {},
                    decisionTaskCompletedEventId: {
                      type: 'long'
                    },
                    childPolicy: {},
                    taskStartToCloseTimeout: {},
                    tagList: {
                      shape: 'S1e'
                    },
                    lambdaRole: {}
                  }
                },
                childWorkflowExecutionStartedEventAttributes: {
                  type: 'structure',
                  required: ['workflowExecution', 'workflowType', 'initiatedEventId'],
                  members: {
                    workflowExecution: {
                      shape: 'S19'
                    },
                    workflowType: {
                      shape: 'Sq'
                    },
                    initiatedEventId: {
                      type: 'long'
                    }
                  }
                },
                childWorkflowExecutionCompletedEventAttributes: {
                  type: 'structure',
                  required: ['workflowExecution', 'workflowType', 'initiatedEventId', 'startedEventId'],
                  members: {
                    workflowExecution: {
                      shape: 'S19'
                    },
                    workflowType: {
                      shape: 'Sq'
                    },
                    result: {},
                    initiatedEventId: {
                      type: 'long'
                    },
                    startedEventId: {
                      type: 'long'
                    }
                  }
                },
                childWorkflowExecutionFailedEventAttributes: {
                  type: 'structure',
                  required: ['workflowExecution', 'workflowType', 'initiatedEventId', 'startedEventId'],
                  members: {
                    workflowExecution: {
                      shape: 'S19'
                    },
                    workflowType: {
                      shape: 'Sq'
                    },
                    reason: {},
                    details: {},
                    initiatedEventId: {
                      type: 'long'
                    },
                    startedEventId: {
                      type: 'long'
                    }
                  }
                },
                childWorkflowExecutionTimedOutEventAttributes: {
                  type: 'structure',
                  required: ['workflowExecution', 'workflowType', 'timeoutType', 'initiatedEventId', 'startedEventId'],
                  members: {
                    workflowExecution: {
                      shape: 'S19'
                    },
                    workflowType: {
                      shape: 'Sq'
                    },
                    timeoutType: {},
                    initiatedEventId: {
                      type: 'long'
                    },
                    startedEventId: {
                      type: 'long'
                    }
                  }
                },
                childWorkflowExecutionCanceledEventAttributes: {
                  type: 'structure',
                  required: ['workflowExecution', 'workflowType', 'initiatedEventId', 'startedEventId'],
                  members: {
                    workflowExecution: {
                      shape: 'S19'
                    },
                    workflowType: {
                      shape: 'Sq'
                    },
                    details: {},
                    initiatedEventId: {
                      type: 'long'
                    },
                    startedEventId: {
                      type: 'long'
                    }
                  }
                },
                childWorkflowExecutionTerminatedEventAttributes: {
                  type: 'structure',
                  required: ['workflowExecution', 'workflowType', 'initiatedEventId', 'startedEventId'],
                  members: {
                    workflowExecution: {
                      shape: 'S19'
                    },
                    workflowType: {
                      shape: 'Sq'
                    },
                    initiatedEventId: {
                      type: 'long'
                    },
                    startedEventId: {
                      type: 'long'
                    }
                  }
                },
                signalExternalWorkflowExecutionInitiatedEventAttributes: {
                  type: 'structure',
                  required: ['workflowId', 'signalName', 'decisionTaskCompletedEventId'],
                  members: {
                    workflowId: {},
                    runId: {},
                    signalName: {},
                    input: {},
                    decisionTaskCompletedEventId: {
                      type: 'long'
                    },
                    control: {}
                  }
                },
                externalWorkflowExecutionSignaledEventAttributes: {
                  type: 'structure',
                  required: ['workflowExecution', 'initiatedEventId'],
                  members: {
                    workflowExecution: {
                      shape: 'S19'
                    },
                    initiatedEventId: {
                      type: 'long'
                    }
                  }
                },
                signalExternalWorkflowExecutionFailedEventAttributes: {
                  type: 'structure',
                  required: ['workflowId', 'cause', 'initiatedEventId', 'decisionTaskCompletedEventId'],
                  members: {
                    workflowId: {},
                    runId: {},
                    cause: {},
                    initiatedEventId: {
                      type: 'long'
                    },
                    decisionTaskCompletedEventId: {
                      type: 'long'
                    },
                    control: {}
                  }
                },
                externalWorkflowExecutionCancelRequestedEventAttributes: {
                  type: 'structure',
                  required: ['workflowExecution', 'initiatedEventId'],
                  members: {
                    workflowExecution: {
                      shape: 'S19'
                    },
                    initiatedEventId: {
                      type: 'long'
                    }
                  }
                },
                requestCancelExternalWorkflowExecutionInitiatedEventAttributes: {
                  type: 'structure',
                  required: ['workflowId', 'decisionTaskCompletedEventId'],
                  members: {
                    workflowId: {},
                    runId: {},
                    decisionTaskCompletedEventId: {
                      type: 'long'
                    },
                    control: {}
                  }
                },
                requestCancelExternalWorkflowExecutionFailedEventAttributes: {
                  type: 'structure',
                  required: ['workflowId', 'cause', 'initiatedEventId', 'decisionTaskCompletedEventId'],
                  members: {
                    workflowId: {},
                    runId: {},
                    cause: {},
                    initiatedEventId: {
                      type: 'long'
                    },
                    decisionTaskCompletedEventId: {
                      type: 'long'
                    },
                    control: {}
                  }
                },
                scheduleActivityTaskFailedEventAttributes: {
                  type: 'structure',
                  required: ['activityType', 'activityId', 'cause', 'decisionTaskCompletedEventId'],
                  members: {
                    activityType: {
                      shape: 'Sn'
                    },
                    activityId: {},
                    cause: {},
                    decisionTaskCompletedEventId: {
                      type: 'long'
                    }
                  }
                },
                requestCancelActivityTaskFailedEventAttributes: {
                  type: 'structure',
                  required: ['activityId', 'cause', 'decisionTaskCompletedEventId'],
                  members: {
                    activityId: {},
                    cause: {},
                    decisionTaskCompletedEventId: {
                      type: 'long'
                    }
                  }
                },
                startTimerFailedEventAttributes: {
                  type: 'structure',
                  required: ['timerId', 'cause', 'decisionTaskCompletedEventId'],
                  members: {
                    timerId: {},
                    cause: {},
                    decisionTaskCompletedEventId: {
                      type: 'long'
                    }
                  }
                },
                cancelTimerFailedEventAttributes: {
                  type: 'structure',
                  required: ['timerId', 'cause', 'decisionTaskCompletedEventId'],
                  members: {
                    timerId: {},
                    cause: {},
                    decisionTaskCompletedEventId: {
                      type: 'long'
                    }
                  }
                },
                startChildWorkflowExecutionFailedEventAttributes: {
                  type: 'structure',
                  required: ['workflowType', 'cause', 'workflowId', 'initiatedEventId', 'decisionTaskCompletedEventId'],
                  members: {
                    workflowType: {
                      shape: 'Sq'
                    },
                    cause: {},
                    workflowId: {},
                    initiatedEventId: {
                      type: 'long'
                    },
                    decisionTaskCompletedEventId: {
                      type: 'long'
                    },
                    control: {}
                  }
                },
                lambdaFunctionScheduledEventAttributes: {
                  type: 'structure',
                  required: ['id', 'name', 'decisionTaskCompletedEventId'],
                  members: {
                    id: {},
                    name: {},
                    control: {},
                    input: {},
                    startToCloseTimeout: {},
                    decisionTaskCompletedEventId: {
                      type: 'long'
                    }
                  }
                },
                lambdaFunctionStartedEventAttributes: {
                  type: 'structure',
                  required: ['scheduledEventId'],
                  members: {
                    scheduledEventId: {
                      type: 'long'
                    }
                  }
                },
                lambdaFunctionCompletedEventAttributes: {
                  type: 'structure',
                  required: ['scheduledEventId', 'startedEventId'],
                  members: {
                    scheduledEventId: {
                      type: 'long'
                    },
                    startedEventId: {
                      type: 'long'
                    },
                    result: {}
                  }
                },
                lambdaFunctionFailedEventAttributes: {
                  type: 'structure',
                  required: ['scheduledEventId', 'startedEventId'],
                  members: {
                    scheduledEventId: {
                      type: 'long'
                    },
                    startedEventId: {
                      type: 'long'
                    },
                    reason: {},
                    details: {}
                  }
                },
                lambdaFunctionTimedOutEventAttributes: {
                  type: 'structure',
                  required: ['scheduledEventId', 'startedEventId'],
                  members: {
                    scheduledEventId: {
                      type: 'long'
                    },
                    startedEventId: {
                      type: 'long'
                    },
                    timeoutType: {}
                  }
                },
                scheduleLambdaFunctionFailedEventAttributes: {
                  type: 'structure',
                  required: ['id', 'name', 'cause', 'decisionTaskCompletedEventId'],
                  members: {
                    id: {},
                    name: {},
                    cause: {},
                    decisionTaskCompletedEventId: {
                      type: 'long'
                    }
                  }
                },
                startLambdaFunctionFailedEventAttributes: {
                  type: 'structure',
                  members: {
                    scheduledEventId: {
                      type: 'long'
                    },
                    cause: {},
                    message: {}
                  }
                }
              }
            }
          },
          S4i: {
            type: 'structure',
            required: ['executionInfos'],
            members: {
              executionInfos: {
                type: 'list',
                member: {
                  shape: 'S1c'
                }
              },
              nextPageToken: {}
            }
          },
          S4q: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['key'],
              members: {
                key: {},
                value: {}
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=4b943a83ba8ad5d4d672d07da6f554070630d1d5.js.map