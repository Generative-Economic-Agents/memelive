System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2016-08-10',
          endpointPrefix: 'batch',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          protocols: ['rest-json'],
          serviceAbbreviation: 'AWS Batch',
          serviceFullName: 'AWS Batch',
          serviceId: 'Batch',
          signatureVersion: 'v4',
          uid: 'batch-2016-08-10'
        },
        operations: {
          CancelJob: {
            http: {
              requestUri: '/v1/canceljob'
            },
            input: {
              type: 'structure',
              required: ['jobId', 'reason'],
              members: {
                jobId: {},
                reason: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          CreateComputeEnvironment: {
            http: {
              requestUri: '/v1/createcomputeenvironment'
            },
            input: {
              type: 'structure',
              required: ['computeEnvironmentName', 'type'],
              members: {
                computeEnvironmentName: {},
                type: {},
                state: {},
                unmanagedvCpus: {
                  type: 'integer'
                },
                computeResources: {
                  shape: 'S8'
                },
                serviceRole: {},
                tags: {
                  shape: 'Sj'
                },
                eksConfiguration: {
                  shape: 'Sm'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                computeEnvironmentName: {},
                computeEnvironmentArn: {}
              }
            }
          },
          CreateJobQueue: {
            http: {
              requestUri: '/v1/createjobqueue'
            },
            input: {
              type: 'structure',
              required: ['jobQueueName', 'priority', 'computeEnvironmentOrder'],
              members: {
                jobQueueName: {},
                state: {},
                schedulingPolicyArn: {},
                priority: {
                  type: 'integer'
                },
                computeEnvironmentOrder: {
                  shape: 'Sq'
                },
                tags: {
                  shape: 'Sj'
                },
                jobStateTimeLimitActions: {
                  shape: 'Ss'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['jobQueueName', 'jobQueueArn'],
              members: {
                jobQueueName: {},
                jobQueueArn: {}
              }
            }
          },
          CreateSchedulingPolicy: {
            http: {
              requestUri: '/v1/createschedulingpolicy'
            },
            input: {
              type: 'structure',
              required: ['name'],
              members: {
                name: {},
                fairsharePolicy: {
                  shape: 'Sy'
                },
                tags: {
                  shape: 'Sj'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['name', 'arn'],
              members: {
                name: {},
                arn: {}
              }
            }
          },
          DeleteComputeEnvironment: {
            http: {
              requestUri: '/v1/deletecomputeenvironment'
            },
            input: {
              type: 'structure',
              required: ['computeEnvironment'],
              members: {
                computeEnvironment: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteJobQueue: {
            http: {
              requestUri: '/v1/deletejobqueue'
            },
            input: {
              type: 'structure',
              required: ['jobQueue'],
              members: {
                jobQueue: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteSchedulingPolicy: {
            http: {
              requestUri: '/v1/deleteschedulingpolicy'
            },
            input: {
              type: 'structure',
              required: ['arn'],
              members: {
                arn: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeregisterJobDefinition: {
            http: {
              requestUri: '/v1/deregisterjobdefinition'
            },
            input: {
              type: 'structure',
              required: ['jobDefinition'],
              members: {
                jobDefinition: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DescribeComputeEnvironments: {
            http: {
              requestUri: '/v1/describecomputeenvironments'
            },
            input: {
              type: 'structure',
              members: {
                computeEnvironments: {
                  shape: 'Sb'
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
                computeEnvironments: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['computeEnvironmentName', 'computeEnvironmentArn'],
                    members: {
                      computeEnvironmentName: {},
                      computeEnvironmentArn: {},
                      unmanagedvCpus: {
                        type: 'integer'
                      },
                      ecsClusterArn: {},
                      tags: {
                        shape: 'Sj'
                      },
                      type: {},
                      state: {},
                      status: {},
                      statusReason: {},
                      computeResources: {
                        shape: 'S8'
                      },
                      serviceRole: {},
                      updatePolicy: {
                        shape: 'S1g'
                      },
                      eksConfiguration: {
                        shape: 'Sm'
                      },
                      containerOrchestrationType: {},
                      uuid: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          DescribeJobDefinitions: {
            http: {
              requestUri: '/v1/describejobdefinitions'
            },
            input: {
              type: 'structure',
              members: {
                jobDefinitions: {
                  shape: 'Sb'
                },
                maxResults: {
                  type: 'integer'
                },
                jobDefinitionName: {},
                status: {},
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                jobDefinitions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['jobDefinitionName', 'jobDefinitionArn', 'revision', 'type'],
                    members: {
                      jobDefinitionName: {},
                      jobDefinitionArn: {},
                      revision: {
                        type: 'integer'
                      },
                      status: {},
                      type: {},
                      schedulingPriority: {
                        type: 'integer'
                      },
                      parameters: {
                        shape: 'S1o'
                      },
                      retryStrategy: {
                        shape: 'S1p'
                      },
                      containerProperties: {
                        shape: 'S1t'
                      },
                      timeout: {
                        shape: 'S2s'
                      },
                      nodeProperties: {
                        shape: 'S2t'
                      },
                      tags: {
                        shape: 'Sj'
                      },
                      propagateTags: {
                        type: 'boolean'
                      },
                      platformCapabilities: {
                        shape: 'S33'
                      },
                      ecsProperties: {
                        shape: 'S2w'
                      },
                      eksProperties: {
                        shape: 'S35'
                      },
                      containerOrchestrationType: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          DescribeJobQueues: {
            http: {
              requestUri: '/v1/describejobqueues'
            },
            input: {
              type: 'structure',
              members: {
                jobQueues: {
                  shape: 'Sb'
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
                jobQueues: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['jobQueueName', 'jobQueueArn', 'state', 'priority', 'computeEnvironmentOrder'],
                    members: {
                      jobQueueName: {},
                      jobQueueArn: {},
                      state: {},
                      schedulingPolicyArn: {},
                      status: {},
                      statusReason: {},
                      priority: {
                        type: 'integer'
                      },
                      computeEnvironmentOrder: {
                        shape: 'Sq'
                      },
                      tags: {
                        shape: 'Sj'
                      },
                      jobStateTimeLimitActions: {
                        shape: 'Ss'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          DescribeJobs: {
            http: {
              requestUri: '/v1/describejobs'
            },
            input: {
              type: 'structure',
              required: ['jobs'],
              members: {
                jobs: {
                  shape: 'Sb'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                jobs: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['jobName', 'jobId', 'jobQueue', 'status', 'startedAt', 'jobDefinition'],
                    members: {
                      jobArn: {},
                      jobName: {},
                      jobId: {},
                      jobQueue: {},
                      status: {},
                      shareIdentifier: {},
                      schedulingPriority: {
                        type: 'integer'
                      },
                      attempts: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            container: {
                              type: 'structure',
                              members: {
                                containerInstanceArn: {},
                                taskArn: {},
                                exitCode: {
                                  type: 'integer'
                                },
                                reason: {},
                                logStreamName: {},
                                networkInterfaces: {
                                  shape: 'S45'
                                }
                              }
                            },
                            startedAt: {
                              type: 'long'
                            },
                            stoppedAt: {
                              type: 'long'
                            },
                            statusReason: {},
                            taskProperties: {
                              type: 'list',
                              member: {
                                type: 'structure',
                                members: {
                                  containerInstanceArn: {},
                                  taskArn: {},
                                  containers: {
                                    type: 'list',
                                    member: {
                                      type: 'structure',
                                      members: {
                                        exitCode: {
                                          type: 'integer'
                                        },
                                        name: {},
                                        reason: {},
                                        logStreamName: {},
                                        networkInterfaces: {
                                          shape: 'S45'
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
                      statusReason: {},
                      createdAt: {
                        type: 'long'
                      },
                      retryStrategy: {
                        shape: 'S1p'
                      },
                      startedAt: {
                        type: 'long'
                      },
                      stoppedAt: {
                        type: 'long'
                      },
                      dependsOn: {
                        shape: 'S4b'
                      },
                      jobDefinition: {},
                      parameters: {
                        shape: 'S1o'
                      },
                      container: {
                        type: 'structure',
                        members: {
                          image: {},
                          vcpus: {
                            type: 'integer'
                          },
                          memory: {
                            type: 'integer'
                          },
                          command: {
                            shape: 'Sb'
                          },
                          jobRoleArn: {},
                          executionRoleArn: {},
                          volumes: {
                            shape: 'S1u'
                          },
                          environment: {
                            shape: 'S21'
                          },
                          mountPoints: {
                            shape: 'S23'
                          },
                          readonlyRootFilesystem: {
                            type: 'boolean'
                          },
                          ulimits: {
                            shape: 'S25'
                          },
                          privileged: {
                            type: 'boolean'
                          },
                          user: {},
                          exitCode: {
                            type: 'integer'
                          },
                          reason: {},
                          containerInstanceArn: {},
                          taskArn: {},
                          logStreamName: {},
                          instanceType: {},
                          networkInterfaces: {
                            shape: 'S45'
                          },
                          resourceRequirements: {
                            shape: 'S27'
                          },
                          linuxParameters: {
                            shape: 'S2a'
                          },
                          logConfiguration: {
                            shape: 'S2h'
                          },
                          secrets: {
                            shape: 'S2k'
                          },
                          networkConfiguration: {
                            shape: 'S2m'
                          },
                          fargatePlatformConfiguration: {
                            shape: 'S2o'
                          },
                          ephemeralStorage: {
                            shape: 'S2p'
                          },
                          runtimePlatform: {
                            shape: 'S2q'
                          },
                          repositoryCredentials: {
                            shape: 'S2r'
                          }
                        }
                      },
                      nodeDetails: {
                        type: 'structure',
                        members: {
                          nodeIndex: {
                            type: 'integer'
                          },
                          isMainNode: {
                            type: 'boolean'
                          }
                        }
                      },
                      nodeProperties: {
                        shape: 'S2t'
                      },
                      arrayProperties: {
                        type: 'structure',
                        members: {
                          statusSummary: {
                            type: 'map',
                            key: {},
                            value: {
                              type: 'integer'
                            }
                          },
                          size: {
                            type: 'integer'
                          },
                          index: {
                            type: 'integer'
                          }
                        }
                      },
                      timeout: {
                        shape: 'S2s'
                      },
                      tags: {
                        shape: 'Sj'
                      },
                      propagateTags: {
                        type: 'boolean'
                      },
                      platformCapabilities: {
                        shape: 'S33'
                      },
                      eksProperties: {
                        type: 'structure',
                        members: {
                          podProperties: {
                            type: 'structure',
                            members: {
                              serviceAccountName: {},
                              hostNetwork: {
                                type: 'boolean'
                              },
                              dnsPolicy: {},
                              imagePullSecrets: {
                                shape: 'S37'
                              },
                              containers: {
                                shape: 'S4k'
                              },
                              initContainers: {
                                shape: 'S4k'
                              },
                              volumes: {
                                shape: 'S3l'
                              },
                              podName: {},
                              nodeName: {},
                              metadata: {
                                shape: 'S3q'
                              },
                              shareProcessNamespace: {
                                type: 'boolean'
                              }
                            }
                          }
                        }
                      },
                      eksAttempts: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            containers: {
                              shape: 'S4o'
                            },
                            initContainers: {
                              shape: 'S4o'
                            },
                            podName: {},
                            nodeName: {},
                            startedAt: {
                              type: 'long'
                            },
                            stoppedAt: {
                              type: 'long'
                            },
                            statusReason: {}
                          }
                        }
                      },
                      ecsProperties: {
                        type: 'structure',
                        members: {
                          taskProperties: {
                            type: 'list',
                            member: {
                              type: 'structure',
                              members: {
                                containers: {
                                  type: 'list',
                                  member: {
                                    type: 'structure',
                                    members: {
                                      command: {
                                        shape: 'Sb'
                                      },
                                      dependsOn: {
                                        shape: 'S31'
                                      },
                                      environment: {
                                        shape: 'S21'
                                      },
                                      essential: {
                                        type: 'boolean'
                                      },
                                      image: {},
                                      linuxParameters: {
                                        shape: 'S2a'
                                      },
                                      logConfiguration: {
                                        shape: 'S2h'
                                      },
                                      mountPoints: {
                                        shape: 'S23'
                                      },
                                      name: {},
                                      privileged: {
                                        type: 'boolean'
                                      },
                                      readonlyRootFilesystem: {
                                        type: 'boolean'
                                      },
                                      repositoryCredentials: {
                                        shape: 'S2r'
                                      },
                                      resourceRequirements: {
                                        shape: 'S27'
                                      },
                                      secrets: {
                                        shape: 'S2k'
                                      },
                                      ulimits: {
                                        shape: 'S25'
                                      },
                                      user: {},
                                      exitCode: {
                                        type: 'integer'
                                      },
                                      reason: {},
                                      logStreamName: {},
                                      networkInterfaces: {
                                        shape: 'S45'
                                      }
                                    }
                                  }
                                },
                                containerInstanceArn: {},
                                taskArn: {},
                                ephemeralStorage: {
                                  shape: 'S2p'
                                },
                                executionRoleArn: {},
                                platformVersion: {},
                                ipcMode: {},
                                taskRoleArn: {},
                                pidMode: {},
                                networkConfiguration: {
                                  shape: 'S2m'
                                },
                                runtimePlatform: {
                                  shape: 'S2q'
                                },
                                volumes: {
                                  shape: 'S1u'
                                }
                              }
                            }
                          }
                        }
                      },
                      isCancelled: {
                        type: 'boolean'
                      },
                      isTerminated: {
                        type: 'boolean'
                      }
                    }
                  }
                }
              }
            }
          },
          DescribeSchedulingPolicies: {
            http: {
              requestUri: '/v1/describeschedulingpolicies'
            },
            input: {
              type: 'structure',
              required: ['arns'],
              members: {
                arns: {
                  shape: 'Sb'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                schedulingPolicies: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['name', 'arn'],
                    members: {
                      name: {},
                      arn: {},
                      fairsharePolicy: {
                        shape: 'Sy'
                      },
                      tags: {
                        shape: 'Sj'
                      }
                    }
                  }
                }
              }
            }
          },
          GetJobQueueSnapshot: {
            http: {
              requestUri: '/v1/getjobqueuesnapshot'
            },
            input: {
              type: 'structure',
              required: ['jobQueue'],
              members: {
                jobQueue: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                frontOfQueue: {
                  type: 'structure',
                  members: {
                    jobs: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          jobArn: {},
                          earliestTimeAtPosition: {
                            type: 'long'
                          }
                        }
                      }
                    },
                    lastUpdatedAt: {
                      type: 'long'
                    }
                  }
                }
              }
            }
          },
          ListJobs: {
            http: {
              requestUri: '/v1/listjobs'
            },
            input: {
              type: 'structure',
              members: {
                jobQueue: {},
                arrayJobId: {},
                multiNodeJobId: {},
                jobStatus: {},
                maxResults: {
                  type: 'integer'
                },
                nextToken: {},
                filters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      name: {},
                      values: {
                        shape: 'Sb'
                      }
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              required: ['jobSummaryList'],
              members: {
                jobSummaryList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['jobId', 'jobName'],
                    members: {
                      jobArn: {},
                      jobId: {},
                      jobName: {},
                      createdAt: {
                        type: 'long'
                      },
                      status: {},
                      statusReason: {},
                      startedAt: {
                        type: 'long'
                      },
                      stoppedAt: {
                        type: 'long'
                      },
                      container: {
                        type: 'structure',
                        members: {
                          exitCode: {
                            type: 'integer'
                          },
                          reason: {}
                        }
                      },
                      arrayProperties: {
                        type: 'structure',
                        members: {
                          size: {
                            type: 'integer'
                          },
                          index: {
                            type: 'integer'
                          }
                        }
                      },
                      nodeProperties: {
                        type: 'structure',
                        members: {
                          isMainNode: {
                            type: 'boolean'
                          },
                          numNodes: {
                            type: 'integer'
                          },
                          nodeIndex: {
                            type: 'integer'
                          }
                        }
                      },
                      jobDefinition: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListSchedulingPolicies: {
            http: {
              requestUri: '/v1/listschedulingpolicies'
            },
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
              members: {
                schedulingPolicies: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['arn'],
                    members: {
                      arn: {}
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
              requestUri: '/v1/tags/{resourceArn}'
            },
            input: {
              type: 'structure',
              required: ['resourceArn'],
              members: {
                resourceArn: {
                  location: 'uri',
                  locationName: 'resourceArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                tags: {
                  shape: 'Sj'
                }
              }
            }
          },
          RegisterJobDefinition: {
            http: {
              requestUri: '/v1/registerjobdefinition'
            },
            input: {
              type: 'structure',
              required: ['jobDefinitionName', 'type'],
              members: {
                jobDefinitionName: {},
                type: {},
                parameters: {
                  shape: 'S1o'
                },
                schedulingPriority: {
                  type: 'integer'
                },
                containerProperties: {
                  shape: 'S1t'
                },
                nodeProperties: {
                  shape: 'S2t'
                },
                retryStrategy: {
                  shape: 'S1p'
                },
                propagateTags: {
                  type: 'boolean'
                },
                timeout: {
                  shape: 'S2s'
                },
                tags: {
                  shape: 'Sj'
                },
                platformCapabilities: {
                  shape: 'S33'
                },
                eksProperties: {
                  shape: 'S35'
                },
                ecsProperties: {
                  shape: 'S2w'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['jobDefinitionName', 'jobDefinitionArn', 'revision'],
              members: {
                jobDefinitionName: {},
                jobDefinitionArn: {},
                revision: {
                  type: 'integer'
                }
              }
            }
          },
          SubmitJob: {
            http: {
              requestUri: '/v1/submitjob'
            },
            input: {
              type: 'structure',
              required: ['jobName', 'jobQueue', 'jobDefinition'],
              members: {
                jobName: {},
                jobQueue: {},
                shareIdentifier: {},
                schedulingPriorityOverride: {
                  type: 'integer'
                },
                arrayProperties: {
                  type: 'structure',
                  members: {
                    size: {
                      type: 'integer'
                    }
                  }
                },
                dependsOn: {
                  shape: 'S4b'
                },
                jobDefinition: {},
                parameters: {
                  shape: 'S1o'
                },
                containerOverrides: {
                  shape: 'S5o'
                },
                nodeOverrides: {
                  type: 'structure',
                  members: {
                    numNodes: {
                      type: 'integer'
                    },
                    nodePropertyOverrides: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        required: ['targetNodes'],
                        members: {
                          targetNodes: {},
                          containerOverrides: {
                            shape: 'S5o'
                          },
                          ecsPropertiesOverride: {
                            shape: 'S5s'
                          },
                          instanceTypes: {
                            shape: 'Sb'
                          }
                        }
                      }
                    }
                  }
                },
                retryStrategy: {
                  shape: 'S1p'
                },
                propagateTags: {
                  type: 'boolean'
                },
                timeout: {
                  shape: 'S2s'
                },
                tags: {
                  shape: 'Sj'
                },
                eksPropertiesOverride: {
                  type: 'structure',
                  members: {
                    podProperties: {
                      type: 'structure',
                      members: {
                        containers: {
                          shape: 'S5z'
                        },
                        initContainers: {
                          shape: 'S5z'
                        },
                        metadata: {
                          shape: 'S3q'
                        }
                      }
                    }
                  }
                },
                ecsPropertiesOverride: {
                  shape: 'S5s'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['jobName', 'jobId'],
              members: {
                jobArn: {},
                jobName: {},
                jobId: {}
              }
            }
          },
          TagResource: {
            http: {
              requestUri: '/v1/tags/{resourceArn}'
            },
            input: {
              type: 'structure',
              required: ['resourceArn', 'tags'],
              members: {
                resourceArn: {
                  location: 'uri',
                  locationName: 'resourceArn'
                },
                tags: {
                  shape: 'Sj'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          TerminateJob: {
            http: {
              requestUri: '/v1/terminatejob'
            },
            input: {
              type: 'structure',
              required: ['jobId', 'reason'],
              members: {
                jobId: {},
                reason: {}
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
              requestUri: '/v1/tags/{resourceArn}'
            },
            input: {
              type: 'structure',
              required: ['resourceArn', 'tagKeys'],
              members: {
                resourceArn: {
                  location: 'uri',
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
          UpdateComputeEnvironment: {
            http: {
              requestUri: '/v1/updatecomputeenvironment'
            },
            input: {
              type: 'structure',
              required: ['computeEnvironment'],
              members: {
                computeEnvironment: {},
                state: {},
                unmanagedvCpus: {
                  type: 'integer'
                },
                computeResources: {
                  type: 'structure',
                  members: {
                    minvCpus: {
                      type: 'integer'
                    },
                    maxvCpus: {
                      type: 'integer'
                    },
                    desiredvCpus: {
                      type: 'integer'
                    },
                    subnets: {
                      shape: 'Sb'
                    },
                    securityGroupIds: {
                      shape: 'Sb'
                    },
                    allocationStrategy: {},
                    instanceTypes: {
                      shape: 'Sb'
                    },
                    ec2KeyPair: {},
                    instanceRole: {},
                    tags: {
                      shape: 'Sc'
                    },
                    placementGroup: {},
                    bidPercentage: {
                      type: 'integer'
                    },
                    launchTemplate: {
                      shape: 'Sd'
                    },
                    ec2Configuration: {
                      shape: 'Se'
                    },
                    updateToLatestImageVersion: {
                      type: 'boolean'
                    },
                    type: {},
                    imageId: {}
                  }
                },
                serviceRole: {},
                updatePolicy: {
                  shape: 'S1g'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                computeEnvironmentName: {},
                computeEnvironmentArn: {}
              }
            }
          },
          UpdateJobQueue: {
            http: {
              requestUri: '/v1/updatejobqueue'
            },
            input: {
              type: 'structure',
              required: ['jobQueue'],
              members: {
                jobQueue: {},
                state: {},
                schedulingPolicyArn: {},
                priority: {
                  type: 'integer'
                },
                computeEnvironmentOrder: {
                  shape: 'Sq'
                },
                jobStateTimeLimitActions: {
                  shape: 'Ss'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                jobQueueName: {},
                jobQueueArn: {}
              }
            }
          },
          UpdateSchedulingPolicy: {
            http: {
              requestUri: '/v1/updateschedulingpolicy'
            },
            input: {
              type: 'structure',
              required: ['arn'],
              members: {
                arn: {},
                fairsharePolicy: {
                  shape: 'Sy'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          }
        },
        shapes: {
          S8: {
            type: 'structure',
            required: ['type', 'maxvCpus', 'subnets'],
            members: {
              type: {},
              allocationStrategy: {},
              minvCpus: {
                type: 'integer'
              },
              maxvCpus: {
                type: 'integer'
              },
              desiredvCpus: {
                type: 'integer'
              },
              instanceTypes: {
                shape: 'Sb'
              },
              imageId: {
                deprecated: true,
                deprecatedMessage: 'This field is deprecated, use ec2Configuration[].imageIdOverride instead.'
              },
              subnets: {
                shape: 'Sb'
              },
              securityGroupIds: {
                shape: 'Sb'
              },
              ec2KeyPair: {},
              instanceRole: {},
              tags: {
                shape: 'Sc'
              },
              placementGroup: {},
              bidPercentage: {
                type: 'integer'
              },
              spotIamFleetRole: {},
              launchTemplate: {
                shape: 'Sd'
              },
              ec2Configuration: {
                shape: 'Se'
              }
            }
          },
          Sb: {
            type: 'list',
            member: {}
          },
          Sc: {
            type: 'map',
            key: {},
            value: {}
          },
          Sd: {
            type: 'structure',
            members: {
              launchTemplateId: {},
              launchTemplateName: {},
              version: {}
            }
          },
          Se: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['imageType'],
              members: {
                imageType: {},
                imageIdOverride: {},
                imageKubernetesVersion: {}
              }
            }
          },
          Sj: {
            type: 'map',
            key: {},
            value: {}
          },
          Sm: {
            type: 'structure',
            required: ['eksClusterArn', 'kubernetesNamespace'],
            members: {
              eksClusterArn: {},
              kubernetesNamespace: {}
            }
          },
          Sq: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['order', 'computeEnvironment'],
              members: {
                order: {
                  type: 'integer'
                },
                computeEnvironment: {}
              }
            }
          },
          Ss: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['reason', 'state', 'maxTimeSeconds', 'action'],
              members: {
                reason: {},
                state: {},
                maxTimeSeconds: {
                  type: 'integer'
                },
                action: {}
              }
            }
          },
          Sy: {
            type: 'structure',
            members: {
              shareDecaySeconds: {
                type: 'integer'
              },
              computeReservation: {
                type: 'integer'
              },
              shareDistribution: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['shareIdentifier'],
                  members: {
                    shareIdentifier: {},
                    weightFactor: {
                      type: 'float'
                    }
                  }
                }
              }
            }
          },
          S1g: {
            type: 'structure',
            members: {
              terminateJobsOnUpdate: {
                type: 'boolean'
              },
              jobExecutionTimeoutMinutes: {
                type: 'long'
              }
            }
          },
          S1o: {
            type: 'map',
            key: {},
            value: {}
          },
          S1p: {
            type: 'structure',
            members: {
              attempts: {
                type: 'integer'
              },
              evaluateOnExit: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['action'],
                  members: {
                    onStatusReason: {},
                    onReason: {},
                    onExitCode: {},
                    action: {}
                  }
                }
              }
            }
          },
          S1t: {
            type: 'structure',
            members: {
              image: {},
              vcpus: {
                deprecated: true,
                deprecatedMessage: 'This field is deprecated, use resourceRequirements instead.',
                type: 'integer'
              },
              memory: {
                deprecated: true,
                deprecatedMessage: 'This field is deprecated, use resourceRequirements instead.',
                type: 'integer'
              },
              command: {
                shape: 'Sb'
              },
              jobRoleArn: {},
              executionRoleArn: {},
              volumes: {
                shape: 'S1u'
              },
              environment: {
                shape: 'S21'
              },
              mountPoints: {
                shape: 'S23'
              },
              readonlyRootFilesystem: {
                type: 'boolean'
              },
              privileged: {
                type: 'boolean'
              },
              ulimits: {
                shape: 'S25'
              },
              user: {},
              instanceType: {},
              resourceRequirements: {
                shape: 'S27'
              },
              linuxParameters: {
                shape: 'S2a'
              },
              logConfiguration: {
                shape: 'S2h'
              },
              secrets: {
                shape: 'S2k'
              },
              networkConfiguration: {
                shape: 'S2m'
              },
              fargatePlatformConfiguration: {
                shape: 'S2o'
              },
              ephemeralStorage: {
                shape: 'S2p'
              },
              runtimePlatform: {
                shape: 'S2q'
              },
              repositoryCredentials: {
                shape: 'S2r'
              }
            }
          },
          S1u: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                host: {
                  type: 'structure',
                  members: {
                    sourcePath: {}
                  }
                },
                name: {},
                efsVolumeConfiguration: {
                  type: 'structure',
                  required: ['fileSystemId'],
                  members: {
                    fileSystemId: {},
                    rootDirectory: {},
                    transitEncryption: {},
                    transitEncryptionPort: {
                      type: 'integer'
                    },
                    authorizationConfig: {
                      type: 'structure',
                      members: {
                        accessPointId: {},
                        iam: {}
                      }
                    }
                  }
                }
              }
            }
          },
          S21: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                name: {},
                value: {}
              }
            }
          },
          S23: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                containerPath: {},
                readOnly: {
                  type: 'boolean'
                },
                sourceVolume: {}
              }
            }
          },
          S25: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['hardLimit', 'name', 'softLimit'],
              members: {
                hardLimit: {
                  type: 'integer'
                },
                name: {},
                softLimit: {
                  type: 'integer'
                }
              }
            }
          },
          S27: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['value', 'type'],
              members: {
                value: {},
                type: {}
              }
            }
          },
          S2a: {
            type: 'structure',
            members: {
              devices: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['hostPath'],
                  members: {
                    hostPath: {},
                    containerPath: {},
                    permissions: {
                      type: 'list',
                      member: {}
                    }
                  }
                }
              },
              initProcessEnabled: {
                type: 'boolean'
              },
              sharedMemorySize: {
                type: 'integer'
              },
              tmpfs: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['containerPath', 'size'],
                  members: {
                    containerPath: {},
                    size: {
                      type: 'integer'
                    },
                    mountOptions: {
                      shape: 'Sb'
                    }
                  }
                }
              },
              maxSwap: {
                type: 'integer'
              },
              swappiness: {
                type: 'integer'
              }
            }
          },
          S2h: {
            type: 'structure',
            required: ['logDriver'],
            members: {
              logDriver: {},
              options: {
                type: 'map',
                key: {},
                value: {}
              },
              secretOptions: {
                shape: 'S2k'
              }
            }
          },
          S2k: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['name', 'valueFrom'],
              members: {
                name: {},
                valueFrom: {}
              }
            }
          },
          S2m: {
            type: 'structure',
            members: {
              assignPublicIp: {}
            }
          },
          S2o: {
            type: 'structure',
            members: {
              platformVersion: {}
            }
          },
          S2p: {
            type: 'structure',
            required: ['sizeInGiB'],
            members: {
              sizeInGiB: {
                type: 'integer'
              }
            }
          },
          S2q: {
            type: 'structure',
            members: {
              operatingSystemFamily: {},
              cpuArchitecture: {}
            }
          },
          S2r: {
            type: 'structure',
            required: ['credentialsParameter'],
            members: {
              credentialsParameter: {}
            }
          },
          S2s: {
            type: 'structure',
            members: {
              attemptDurationSeconds: {
                type: 'integer'
              }
            }
          },
          S2t: {
            type: 'structure',
            required: ['numNodes', 'mainNode', 'nodeRangeProperties'],
            members: {
              numNodes: {
                type: 'integer'
              },
              mainNode: {
                type: 'integer'
              },
              nodeRangeProperties: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['targetNodes'],
                  members: {
                    targetNodes: {},
                    container: {
                      shape: 'S1t'
                    },
                    instanceTypes: {
                      shape: 'Sb'
                    },
                    ecsProperties: {
                      shape: 'S2w'
                    }
                  }
                }
              }
            }
          },
          S2w: {
            type: 'structure',
            required: ['taskProperties'],
            members: {
              taskProperties: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['containers'],
                  members: {
                    containers: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        required: ['image'],
                        members: {
                          command: {
                            shape: 'Sb'
                          },
                          dependsOn: {
                            shape: 'S31'
                          },
                          environment: {
                            shape: 'S21'
                          },
                          essential: {
                            type: 'boolean'
                          },
                          image: {},
                          linuxParameters: {
                            shape: 'S2a'
                          },
                          logConfiguration: {
                            shape: 'S2h'
                          },
                          mountPoints: {
                            shape: 'S23'
                          },
                          name: {},
                          privileged: {
                            type: 'boolean'
                          },
                          readonlyRootFilesystem: {
                            type: 'boolean'
                          },
                          repositoryCredentials: {
                            shape: 'S2r'
                          },
                          resourceRequirements: {
                            shape: 'S27'
                          },
                          secrets: {
                            shape: 'S2k'
                          },
                          ulimits: {
                            shape: 'S25'
                          },
                          user: {}
                        }
                      }
                    },
                    ephemeralStorage: {
                      shape: 'S2p'
                    },
                    executionRoleArn: {},
                    platformVersion: {},
                    ipcMode: {},
                    taskRoleArn: {},
                    pidMode: {},
                    networkConfiguration: {
                      shape: 'S2m'
                    },
                    runtimePlatform: {
                      shape: 'S2q'
                    },
                    volumes: {
                      shape: 'S1u'
                    }
                  }
                }
              }
            }
          },
          S31: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                containerName: {},
                condition: {}
              }
            }
          },
          S33: {
            type: 'list',
            member: {}
          },
          S35: {
            type: 'structure',
            members: {
              podProperties: {
                type: 'structure',
                members: {
                  serviceAccountName: {},
                  hostNetwork: {
                    type: 'boolean'
                  },
                  dnsPolicy: {},
                  imagePullSecrets: {
                    shape: 'S37'
                  },
                  containers: {
                    shape: 'S39'
                  },
                  initContainers: {
                    shape: 'S39'
                  },
                  volumes: {
                    shape: 'S3l'
                  },
                  metadata: {
                    shape: 'S3q'
                  },
                  shareProcessNamespace: {
                    type: 'boolean'
                  }
                }
              }
            }
          },
          S37: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['name'],
              members: {
                name: {}
              }
            }
          },
          S39: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['image'],
              members: {
                name: {},
                image: {},
                imagePullPolicy: {},
                command: {
                  shape: 'Sb'
                },
                args: {
                  shape: 'Sb'
                },
                env: {
                  shape: 'S3b'
                },
                resources: {
                  shape: 'S3d'
                },
                volumeMounts: {
                  shape: 'S3h'
                },
                securityContext: {
                  shape: 'S3j'
                }
              }
            }
          },
          S3b: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['name'],
              members: {
                name: {},
                value: {}
              }
            }
          },
          S3d: {
            type: 'structure',
            members: {
              limits: {
                type: 'map',
                key: {},
                value: {}
              },
              requests: {
                type: 'map',
                key: {},
                value: {}
              }
            }
          },
          S3h: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                name: {},
                mountPath: {},
                readOnly: {
                  type: 'boolean'
                }
              }
            }
          },
          S3j: {
            type: 'structure',
            members: {
              runAsUser: {
                type: 'long'
              },
              runAsGroup: {
                type: 'long'
              },
              privileged: {
                type: 'boolean'
              },
              allowPrivilegeEscalation: {
                type: 'boolean'
              },
              readOnlyRootFilesystem: {
                type: 'boolean'
              },
              runAsNonRoot: {
                type: 'boolean'
              }
            }
          },
          S3l: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['name'],
              members: {
                name: {},
                hostPath: {
                  type: 'structure',
                  members: {
                    path: {}
                  }
                },
                emptyDir: {
                  type: 'structure',
                  members: {
                    medium: {},
                    sizeLimit: {}
                  }
                },
                secret: {
                  type: 'structure',
                  required: ['secretName'],
                  members: {
                    secretName: {},
                    optional: {
                      type: 'boolean'
                    }
                  }
                }
              }
            }
          },
          S3q: {
            type: 'structure',
            members: {
              labels: {
                type: 'map',
                key: {},
                value: {}
              }
            }
          },
          S45: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                attachmentId: {},
                ipv6Address: {},
                privateIpv4Address: {}
              }
            }
          },
          S4b: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                jobId: {},
                type: {}
              }
            }
          },
          S4k: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                name: {},
                image: {},
                imagePullPolicy: {},
                command: {
                  shape: 'Sb'
                },
                args: {
                  shape: 'Sb'
                },
                env: {
                  shape: 'S3b'
                },
                resources: {
                  shape: 'S3d'
                },
                exitCode: {
                  type: 'integer'
                },
                reason: {},
                volumeMounts: {
                  shape: 'S3h'
                },
                securityContext: {
                  shape: 'S3j'
                }
              }
            }
          },
          S4o: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                name: {},
                exitCode: {
                  type: 'integer'
                },
                reason: {}
              }
            }
          },
          S5o: {
            type: 'structure',
            members: {
              vcpus: {
                deprecated: true,
                deprecatedMessage: 'This field is deprecated, use resourceRequirements instead.',
                type: 'integer'
              },
              memory: {
                deprecated: true,
                deprecatedMessage: 'This field is deprecated, use resourceRequirements instead.',
                type: 'integer'
              },
              command: {
                shape: 'Sb'
              },
              instanceType: {},
              environment: {
                shape: 'S21'
              },
              resourceRequirements: {
                shape: 'S27'
              }
            }
          },
          S5s: {
            type: 'structure',
            members: {
              taskProperties: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    containers: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          command: {
                            shape: 'Sb'
                          },
                          environment: {
                            shape: 'S21'
                          },
                          name: {},
                          resourceRequirements: {
                            shape: 'S27'
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          S5z: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                name: {},
                image: {},
                command: {
                  shape: 'Sb'
                },
                args: {
                  shape: 'Sb'
                },
                env: {
                  shape: 'S3b'
                },
                resources: {
                  shape: 'S3d'
                }
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=7b6cc19837a6914dcb62d2d6121497940d267da7.js.map