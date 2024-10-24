System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2015-07-09',
          endpointPrefix: 'codepipeline',
          jsonVersion: '1.1',
          protocol: 'json',
          protocols: ['json'],
          serviceAbbreviation: 'CodePipeline',
          serviceFullName: 'AWS CodePipeline',
          serviceId: 'CodePipeline',
          signatureVersion: 'v4',
          targetPrefix: 'CodePipeline_20150709',
          uid: 'codepipeline-2015-07-09',
          auth: ['aws.auth#sigv4']
        },
        operations: {
          AcknowledgeJob: {
            input: {
              type: 'structure',
              required: ['jobId', 'nonce'],
              members: {
                jobId: {},
                nonce: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                status: {}
              }
            }
          },
          AcknowledgeThirdPartyJob: {
            input: {
              type: 'structure',
              required: ['jobId', 'nonce', 'clientToken'],
              members: {
                jobId: {},
                nonce: {},
                clientToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                status: {}
              }
            }
          },
          CreateCustomActionType: {
            input: {
              type: 'structure',
              required: ['category', 'provider', 'version', 'inputArtifactDetails', 'outputArtifactDetails'],
              members: {
                category: {},
                provider: {},
                version: {},
                settings: {
                  shape: 'Se'
                },
                configurationProperties: {
                  shape: 'Sh'
                },
                inputArtifactDetails: {
                  shape: 'Sn'
                },
                outputArtifactDetails: {
                  shape: 'Sn'
                },
                tags: {
                  shape: 'Sq'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['actionType'],
              members: {
                actionType: {
                  shape: 'Sv'
                },
                tags: {
                  shape: 'Sq'
                }
              }
            }
          },
          CreatePipeline: {
            input: {
              type: 'structure',
              required: ['pipeline'],
              members: {
                pipeline: {
                  shape: 'Sz'
                },
                tags: {
                  shape: 'Sq'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                pipeline: {
                  shape: 'Sz'
                },
                tags: {
                  shape: 'Sq'
                }
              }
            }
          },
          DeleteCustomActionType: {
            input: {
              type: 'structure',
              required: ['category', 'provider', 'version'],
              members: {
                category: {},
                provider: {},
                version: {}
              }
            }
          },
          DeletePipeline: {
            input: {
              type: 'structure',
              required: ['name'],
              members: {
                name: {}
              }
            }
          },
          DeleteWebhook: {
            input: {
              type: 'structure',
              required: ['name'],
              members: {
                name: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeregisterWebhookWithThirdParty: {
            input: {
              type: 'structure',
              members: {
                webhookName: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DisableStageTransition: {
            input: {
              type: 'structure',
              required: ['pipelineName', 'stageName', 'transitionType', 'reason'],
              members: {
                pipelineName: {},
                stageName: {},
                transitionType: {},
                reason: {}
              }
            }
          },
          EnableStageTransition: {
            input: {
              type: 'structure',
              required: ['pipelineName', 'stageName', 'transitionType'],
              members: {
                pipelineName: {},
                stageName: {},
                transitionType: {}
              }
            }
          },
          GetActionType: {
            input: {
              type: 'structure',
              required: ['category', 'owner', 'provider', 'version'],
              members: {
                category: {},
                owner: {},
                provider: {},
                version: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                actionType: {
                  shape: 'S32'
                }
              }
            }
          },
          GetJobDetails: {
            input: {
              type: 'structure',
              required: ['jobId'],
              members: {
                jobId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                jobDetails: {
                  type: 'structure',
                  members: {
                    id: {},
                    data: {
                      shape: 'S3u'
                    },
                    accountId: {}
                  }
                }
              }
            }
          },
          GetPipeline: {
            input: {
              type: 'structure',
              required: ['name'],
              members: {
                name: {},
                version: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                pipeline: {
                  shape: 'Sz'
                },
                metadata: {
                  type: 'structure',
                  members: {
                    pipelineArn: {},
                    created: {
                      type: 'timestamp'
                    },
                    updated: {
                      type: 'timestamp'
                    },
                    pollingDisabledAt: {
                      type: 'timestamp'
                    }
                  }
                }
              }
            }
          },
          GetPipelineExecution: {
            input: {
              type: 'structure',
              required: ['pipelineName', 'pipelineExecutionId'],
              members: {
                pipelineName: {},
                pipelineExecutionId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                pipelineExecution: {
                  type: 'structure',
                  members: {
                    pipelineName: {},
                    pipelineVersion: {
                      type: 'integer'
                    },
                    pipelineExecutionId: {},
                    status: {},
                    statusSummary: {},
                    artifactRevisions: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          name: {},
                          revisionId: {},
                          revisionChangeIdentifier: {},
                          revisionSummary: {},
                          created: {
                            type: 'timestamp'
                          },
                          revisionUrl: {}
                        }
                      }
                    },
                    variables: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          name: {},
                          resolvedValue: {}
                        }
                      }
                    },
                    trigger: {
                      shape: 'S4v'
                    },
                    executionMode: {},
                    executionType: {},
                    rollbackMetadata: {
                      shape: 'S4z'
                    }
                  }
                }
              }
            }
          },
          GetPipelineState: {
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
                pipelineName: {},
                pipelineVersion: {
                  type: 'integer'
                },
                stageStates: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      stageName: {},
                      inboundExecution: {
                        shape: 'S54'
                      },
                      inboundExecutions: {
                        type: 'list',
                        member: {
                          shape: 'S54'
                        }
                      },
                      inboundTransitionState: {
                        type: 'structure',
                        members: {
                          enabled: {
                            type: 'boolean'
                          },
                          lastChangedBy: {},
                          lastChangedAt: {
                            type: 'timestamp'
                          },
                          disabledReason: {}
                        }
                      },
                      actionStates: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            actionName: {},
                            currentRevision: {
                              shape: 'S5d'
                            },
                            latestExecution: {
                              type: 'structure',
                              members: {
                                actionExecutionId: {},
                                status: {},
                                summary: {},
                                lastStatusChange: {
                                  type: 'timestamp'
                                },
                                token: {},
                                lastUpdatedBy: {},
                                externalExecutionId: {},
                                externalExecutionUrl: {},
                                percentComplete: {
                                  type: 'integer'
                                },
                                errorDetails: {
                                  shape: 'S5l'
                                }
                              }
                            },
                            entityUrl: {},
                            revisionUrl: {}
                          }
                        }
                      },
                      latestExecution: {
                        shape: 'S54'
                      }
                    }
                  }
                },
                created: {
                  type: 'timestamp'
                },
                updated: {
                  type: 'timestamp'
                }
              }
            }
          },
          GetThirdPartyJobDetails: {
            input: {
              type: 'structure',
              required: ['jobId', 'clientToken'],
              members: {
                jobId: {},
                clientToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                jobDetails: {
                  type: 'structure',
                  members: {
                    id: {},
                    data: {
                      type: 'structure',
                      members: {
                        actionTypeId: {
                          shape: 'Sw'
                        },
                        actionConfiguration: {
                          shape: 'S3v'
                        },
                        pipelineContext: {
                          shape: 'S3w'
                        },
                        inputArtifacts: {
                          shape: 'S42'
                        },
                        outputArtifacts: {
                          shape: 'S42'
                        },
                        artifactCredentials: {
                          shape: 'S4a'
                        },
                        continuationToken: {},
                        encryptionKey: {
                          shape: 'S15'
                        }
                      }
                    },
                    nonce: {}
                  }
                }
              }
            }
          },
          ListActionExecutions: {
            input: {
              type: 'structure',
              required: ['pipelineName'],
              members: {
                pipelineName: {},
                filter: {
                  type: 'structure',
                  members: {
                    pipelineExecutionId: {},
                    latestInPipelineExecution: {
                      type: 'structure',
                      required: ['pipelineExecutionId', 'startTimeRange'],
                      members: {
                        pipelineExecutionId: {},
                        startTimeRange: {}
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
                actionExecutionDetails: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      pipelineExecutionId: {},
                      actionExecutionId: {},
                      pipelineVersion: {
                        type: 'integer'
                      },
                      stageName: {},
                      actionName: {},
                      startTime: {
                        type: 'timestamp'
                      },
                      lastUpdateTime: {
                        type: 'timestamp'
                      },
                      updatedBy: {},
                      status: {},
                      input: {
                        type: 'structure',
                        members: {
                          actionTypeId: {
                            shape: 'Sw'
                          },
                          configuration: {
                            shape: 'S1l'
                          },
                          resolvedConfiguration: {
                            type: 'map',
                            key: {},
                            value: {}
                          },
                          roleArn: {},
                          region: {},
                          inputArtifacts: {
                            shape: 'S63'
                          },
                          namespace: {}
                        }
                      },
                      output: {
                        type: 'structure',
                        members: {
                          outputArtifacts: {
                            shape: 'S63'
                          },
                          executionResult: {
                            type: 'structure',
                            members: {
                              externalExecutionId: {},
                              externalExecutionSummary: {},
                              externalExecutionUrl: {},
                              errorDetails: {
                                shape: 'S5l'
                              }
                            }
                          },
                          outputVariables: {
                            shape: 'S6c'
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
          ListActionTypes: {
            input: {
              type: 'structure',
              members: {
                actionOwnerFilter: {},
                nextToken: {},
                regionFilter: {}
              }
            },
            output: {
              type: 'structure',
              required: ['actionTypes'],
              members: {
                actionTypes: {
                  type: 'list',
                  member: {
                    shape: 'Sv'
                  }
                },
                nextToken: {}
              }
            }
          },
          ListPipelineExecutions: {
            input: {
              type: 'structure',
              required: ['pipelineName'],
              members: {
                pipelineName: {},
                maxResults: {
                  type: 'integer'
                },
                filter: {
                  type: 'structure',
                  members: {
                    succeededInStage: {
                      type: 'structure',
                      members: {
                        stageName: {}
                      }
                    }
                  }
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                pipelineExecutionSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      pipelineExecutionId: {},
                      status: {},
                      statusSummary: {},
                      startTime: {
                        type: 'timestamp'
                      },
                      lastUpdateTime: {
                        type: 'timestamp'
                      },
                      sourceRevisions: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          required: ['actionName'],
                          members: {
                            actionName: {},
                            revisionId: {},
                            revisionSummary: {},
                            revisionUrl: {}
                          }
                        }
                      },
                      trigger: {
                        shape: 'S4v'
                      },
                      stopTrigger: {
                        type: 'structure',
                        members: {
                          reason: {}
                        }
                      },
                      executionMode: {},
                      executionType: {},
                      rollbackMetadata: {
                        shape: 'S4z'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListPipelines: {
            input: {
              type: 'structure',
              members: {
                nextToken: {},
                maxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                pipelines: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      name: {},
                      version: {
                        type: 'integer'
                      },
                      pipelineType: {},
                      executionMode: {},
                      created: {
                        type: 'timestamp'
                      },
                      updated: {
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
                resourceArn: {},
                nextToken: {},
                maxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                tags: {
                  shape: 'Sq'
                },
                nextToken: {}
              }
            }
          },
          ListWebhooks: {
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
                webhooks: {
                  type: 'list',
                  member: {
                    shape: 'S73'
                  }
                },
                NextToken: {}
              }
            }
          },
          PollForJobs: {
            input: {
              type: 'structure',
              required: ['actionTypeId'],
              members: {
                actionTypeId: {
                  shape: 'Sw'
                },
                maxBatchSize: {
                  type: 'integer'
                },
                queryParam: {
                  type: 'map',
                  key: {},
                  value: {}
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
                    members: {
                      id: {},
                      data: {
                        shape: 'S3u'
                      },
                      nonce: {},
                      accountId: {}
                    }
                  }
                }
              }
            }
          },
          PollForThirdPartyJobs: {
            input: {
              type: 'structure',
              required: ['actionTypeId'],
              members: {
                actionTypeId: {
                  shape: 'Sw'
                },
                maxBatchSize: {
                  type: 'integer'
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
                    members: {
                      clientId: {},
                      jobId: {}
                    }
                  }
                }
              }
            }
          },
          PutActionRevision: {
            input: {
              type: 'structure',
              required: ['pipelineName', 'stageName', 'actionName', 'actionRevision'],
              members: {
                pipelineName: {},
                stageName: {},
                actionName: {},
                actionRevision: {
                  shape: 'S5d'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                newRevision: {
                  type: 'boolean'
                },
                pipelineExecutionId: {}
              }
            }
          },
          PutApprovalResult: {
            input: {
              type: 'structure',
              required: ['pipelineName', 'stageName', 'actionName', 'result', 'token'],
              members: {
                pipelineName: {},
                stageName: {},
                actionName: {},
                result: {
                  type: 'structure',
                  required: ['summary', 'status'],
                  members: {
                    summary: {},
                    status: {}
                  }
                },
                token: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                approvedAt: {
                  type: 'timestamp'
                }
              }
            }
          },
          PutJobFailureResult: {
            input: {
              type: 'structure',
              required: ['jobId', 'failureDetails'],
              members: {
                jobId: {},
                failureDetails: {
                  shape: 'S83'
                }
              }
            }
          },
          PutJobSuccessResult: {
            input: {
              type: 'structure',
              required: ['jobId'],
              members: {
                jobId: {},
                currentRevision: {
                  shape: 'S86'
                },
                continuationToken: {},
                executionDetails: {
                  shape: 'S88'
                },
                outputVariables: {
                  shape: 'S6c'
                }
              }
            }
          },
          PutThirdPartyJobFailureResult: {
            input: {
              type: 'structure',
              required: ['jobId', 'clientToken', 'failureDetails'],
              members: {
                jobId: {},
                clientToken: {},
                failureDetails: {
                  shape: 'S83'
                }
              }
            }
          },
          PutThirdPartyJobSuccessResult: {
            input: {
              type: 'structure',
              required: ['jobId', 'clientToken'],
              members: {
                jobId: {},
                clientToken: {},
                currentRevision: {
                  shape: 'S86'
                },
                continuationToken: {},
                executionDetails: {
                  shape: 'S88'
                }
              }
            }
          },
          PutWebhook: {
            input: {
              type: 'structure',
              required: ['webhook'],
              members: {
                webhook: {
                  shape: 'S74'
                },
                tags: {
                  shape: 'Sq'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                webhook: {
                  shape: 'S73'
                }
              }
            }
          },
          RegisterWebhookWithThirdParty: {
            input: {
              type: 'structure',
              members: {
                webhookName: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          RetryStageExecution: {
            input: {
              type: 'structure',
              required: ['pipelineName', 'stageName', 'pipelineExecutionId', 'retryMode'],
              members: {
                pipelineName: {},
                stageName: {},
                pipelineExecutionId: {},
                retryMode: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                pipelineExecutionId: {}
              }
            }
          },
          RollbackStage: {
            input: {
              type: 'structure',
              required: ['pipelineName', 'stageName', 'targetPipelineExecutionId'],
              members: {
                pipelineName: {},
                stageName: {},
                targetPipelineExecutionId: {}
              }
            },
            output: {
              type: 'structure',
              required: ['pipelineExecutionId'],
              members: {
                pipelineExecutionId: {}
              }
            }
          },
          StartPipelineExecution: {
            input: {
              type: 'structure',
              required: ['name'],
              members: {
                name: {},
                variables: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['name', 'value'],
                    members: {
                      name: {},
                      value: {}
                    }
                  }
                },
                clientRequestToken: {
                  idempotencyToken: true
                },
                sourceRevisions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['actionName', 'revisionType', 'revisionValue'],
                    members: {
                      actionName: {},
                      revisionType: {},
                      revisionValue: {}
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                pipelineExecutionId: {}
              }
            }
          },
          StopPipelineExecution: {
            input: {
              type: 'structure',
              required: ['pipelineName', 'pipelineExecutionId'],
              members: {
                pipelineName: {},
                pipelineExecutionId: {},
                abandon: {
                  type: 'boolean'
                },
                reason: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                pipelineExecutionId: {}
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
          UpdateActionType: {
            input: {
              type: 'structure',
              required: ['actionType'],
              members: {
                actionType: {
                  shape: 'S32'
                }
              }
            }
          },
          UpdatePipeline: {
            input: {
              type: 'structure',
              required: ['pipeline'],
              members: {
                pipeline: {
                  shape: 'Sz'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                pipeline: {
                  shape: 'Sz'
                }
              }
            }
          }
        },
        shapes: {
          Se: {
            type: 'structure',
            members: {
              thirdPartyConfigurationUrl: {},
              entityUrlTemplate: {},
              executionUrlTemplate: {},
              revisionUrlTemplate: {}
            }
          },
          Sh: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['name', 'required', 'key', 'secret'],
              members: {
                name: {},
                required: {
                  type: 'boolean'
                },
                key: {
                  type: 'boolean'
                },
                secret: {
                  type: 'boolean'
                },
                queryable: {
                  type: 'boolean'
                },
                description: {},
                type: {}
              }
            }
          },
          Sn: {
            type: 'structure',
            required: ['minimumCount', 'maximumCount'],
            members: {
              minimumCount: {
                type: 'integer'
              },
              maximumCount: {
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
          Sv: {
            type: 'structure',
            required: ['id', 'inputArtifactDetails', 'outputArtifactDetails'],
            members: {
              id: {
                shape: 'Sw'
              },
              settings: {
                shape: 'Se'
              },
              actionConfigurationProperties: {
                shape: 'Sh'
              },
              inputArtifactDetails: {
                shape: 'Sn'
              },
              outputArtifactDetails: {
                shape: 'Sn'
              }
            }
          },
          Sw: {
            type: 'structure',
            required: ['category', 'owner', 'provider', 'version'],
            members: {
              category: {},
              owner: {},
              provider: {},
              version: {}
            }
          },
          Sz: {
            type: 'structure',
            required: ['name', 'roleArn', 'stages'],
            members: {
              name: {},
              roleArn: {},
              artifactStore: {
                shape: 'S12'
              },
              artifactStores: {
                type: 'map',
                key: {},
                value: {
                  shape: 'S12'
                }
              },
              stages: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['name', 'actions'],
                  members: {
                    name: {},
                    blockers: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        required: ['name', 'type'],
                        members: {
                          name: {},
                          type: {}
                        }
                      }
                    },
                    actions: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        required: ['name', 'actionTypeId'],
                        members: {
                          name: {},
                          actionTypeId: {
                            shape: 'Sw'
                          },
                          runOrder: {
                            type: 'integer'
                          },
                          configuration: {
                            shape: 'S1l'
                          },
                          outputArtifacts: {
                            type: 'list',
                            member: {
                              type: 'structure',
                              required: ['name'],
                              members: {
                                name: {}
                              }
                            }
                          },
                          inputArtifacts: {
                            type: 'list',
                            member: {
                              type: 'structure',
                              required: ['name'],
                              members: {
                                name: {}
                              }
                            }
                          },
                          roleArn: {},
                          region: {},
                          namespace: {},
                          timeoutInMinutes: {
                            type: 'integer'
                          }
                        }
                      }
                    },
                    onFailure: {
                      type: 'structure',
                      members: {
                        result: {}
                      }
                    }
                  }
                }
              },
              version: {
                type: 'integer'
              },
              executionMode: {},
              pipelineType: {},
              variables: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['name'],
                  members: {
                    name: {},
                    defaultValue: {},
                    description: {}
                  }
                }
              },
              triggers: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['providerType', 'gitConfiguration'],
                  members: {
                    providerType: {},
                    gitConfiguration: {
                      type: 'structure',
                      required: ['sourceActionName'],
                      members: {
                        sourceActionName: {},
                        push: {
                          type: 'list',
                          member: {
                            type: 'structure',
                            members: {
                              tags: {
                                type: 'structure',
                                members: {
                                  includes: {
                                    shape: 'S2b'
                                  },
                                  excludes: {
                                    shape: 'S2b'
                                  }
                                }
                              },
                              branches: {
                                shape: 'S2d'
                              },
                              filePaths: {
                                shape: 'S2g'
                              }
                            }
                          }
                        },
                        pullRequest: {
                          type: 'list',
                          member: {
                            type: 'structure',
                            members: {
                              events: {
                                type: 'list',
                                member: {}
                              },
                              branches: {
                                shape: 'S2d'
                              },
                              filePaths: {
                                shape: 'S2g'
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
          S12: {
            type: 'structure',
            required: ['type', 'location'],
            members: {
              type: {},
              location: {},
              encryptionKey: {
                shape: 'S15'
              }
            }
          },
          S15: {
            type: 'structure',
            required: ['id', 'type'],
            members: {
              id: {},
              type: {}
            }
          },
          S1l: {
            type: 'map',
            key: {},
            value: {}
          },
          S2b: {
            type: 'list',
            member: {}
          },
          S2d: {
            type: 'structure',
            members: {
              includes: {
                shape: 'S2e'
              },
              excludes: {
                shape: 'S2e'
              }
            }
          },
          S2e: {
            type: 'list',
            member: {}
          },
          S2g: {
            type: 'structure',
            members: {
              includes: {
                shape: 'S2h'
              },
              excludes: {
                shape: 'S2h'
              }
            }
          },
          S2h: {
            type: 'list',
            member: {}
          },
          S32: {
            type: 'structure',
            required: ['executor', 'id', 'inputArtifactDetails', 'outputArtifactDetails'],
            members: {
              description: {},
              executor: {
                type: 'structure',
                required: ['configuration', 'type'],
                members: {
                  configuration: {
                    type: 'structure',
                    members: {
                      lambdaExecutorConfiguration: {
                        type: 'structure',
                        required: ['lambdaFunctionArn'],
                        members: {
                          lambdaFunctionArn: {}
                        }
                      },
                      jobWorkerExecutorConfiguration: {
                        type: 'structure',
                        members: {
                          pollingAccounts: {
                            type: 'list',
                            member: {}
                          },
                          pollingServicePrincipals: {
                            type: 'list',
                            member: {}
                          }
                        }
                      }
                    }
                  },
                  type: {},
                  policyStatementsTemplate: {},
                  jobTimeout: {
                    type: 'integer'
                  }
                }
              },
              id: {
                type: 'structure',
                required: ['category', 'owner', 'provider', 'version'],
                members: {
                  category: {},
                  owner: {},
                  provider: {},
                  version: {}
                }
              },
              inputArtifactDetails: {
                shape: 'S3h'
              },
              outputArtifactDetails: {
                shape: 'S3h'
              },
              permissions: {
                type: 'structure',
                required: ['allowedAccounts'],
                members: {
                  allowedAccounts: {
                    type: 'list',
                    member: {}
                  }
                }
              },
              properties: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['name', 'optional', 'key', 'noEcho'],
                  members: {
                    name: {},
                    optional: {
                      type: 'boolean'
                    },
                    key: {
                      type: 'boolean'
                    },
                    noEcho: {
                      type: 'boolean'
                    },
                    queryable: {
                      type: 'boolean'
                    },
                    description: {}
                  }
                }
              },
              urls: {
                type: 'structure',
                members: {
                  configurationUrl: {},
                  entityUrlTemplate: {},
                  executionUrlTemplate: {},
                  revisionUrlTemplate: {}
                }
              }
            }
          },
          S3h: {
            type: 'structure',
            required: ['minimumCount', 'maximumCount'],
            members: {
              minimumCount: {
                type: 'integer'
              },
              maximumCount: {
                type: 'integer'
              }
            }
          },
          S3u: {
            type: 'structure',
            members: {
              actionTypeId: {
                shape: 'Sw'
              },
              actionConfiguration: {
                shape: 'S3v'
              },
              pipelineContext: {
                shape: 'S3w'
              },
              inputArtifacts: {
                shape: 'S42'
              },
              outputArtifacts: {
                shape: 'S42'
              },
              artifactCredentials: {
                shape: 'S4a'
              },
              continuationToken: {},
              encryptionKey: {
                shape: 'S15'
              }
            }
          },
          S3v: {
            type: 'structure',
            members: {
              configuration: {
                shape: 'S1l'
              }
            }
          },
          S3w: {
            type: 'structure',
            members: {
              pipelineName: {},
              stage: {
                type: 'structure',
                members: {
                  name: {}
                }
              },
              action: {
                type: 'structure',
                members: {
                  name: {},
                  actionExecutionId: {}
                }
              },
              pipelineArn: {},
              pipelineExecutionId: {}
            }
          },
          S42: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                name: {},
                revision: {},
                location: {
                  type: 'structure',
                  members: {
                    type: {},
                    s3Location: {
                      type: 'structure',
                      required: ['bucketName', 'objectKey'],
                      members: {
                        bucketName: {},
                        objectKey: {}
                      }
                    }
                  }
                }
              }
            }
          },
          S4a: {
            type: 'structure',
            required: ['accessKeyId', 'secretAccessKey', 'sessionToken'],
            members: {
              accessKeyId: {
                type: 'string',
                sensitive: true
              },
              secretAccessKey: {
                type: 'string',
                sensitive: true
              },
              sessionToken: {
                type: 'string',
                sensitive: true
              }
            },
            sensitive: true
          },
          S4v: {
            type: 'structure',
            members: {
              triggerType: {},
              triggerDetail: {}
            }
          },
          S4z: {
            type: 'structure',
            members: {
              rollbackTargetPipelineExecutionId: {}
            }
          },
          S54: {
            type: 'structure',
            required: ['pipelineExecutionId', 'status'],
            members: {
              pipelineExecutionId: {},
              status: {},
              type: {}
            }
          },
          S5d: {
            type: 'structure',
            required: ['revisionId', 'revisionChangeId', 'created'],
            members: {
              revisionId: {},
              revisionChangeId: {},
              created: {
                type: 'timestamp'
              }
            }
          },
          S5l: {
            type: 'structure',
            members: {
              code: {},
              message: {}
            }
          },
          S63: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                name: {},
                s3location: {
                  type: 'structure',
                  members: {
                    bucket: {},
                    key: {}
                  }
                }
              }
            }
          },
          S6c: {
            type: 'map',
            key: {},
            value: {}
          },
          S73: {
            type: 'structure',
            required: ['definition', 'url'],
            members: {
              definition: {
                shape: 'S74'
              },
              url: {},
              errorMessage: {},
              errorCode: {},
              lastTriggered: {
                type: 'timestamp'
              },
              arn: {},
              tags: {
                shape: 'Sq'
              }
            }
          },
          S74: {
            type: 'structure',
            required: ['name', 'targetPipeline', 'targetAction', 'filters', 'authentication', 'authenticationConfiguration'],
            members: {
              name: {},
              targetPipeline: {},
              targetAction: {},
              filters: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['jsonPath'],
                  members: {
                    jsonPath: {},
                    matchEquals: {}
                  }
                }
              },
              authentication: {},
              authenticationConfiguration: {
                type: 'structure',
                members: {
                  AllowedIPRange: {},
                  SecretToken: {}
                }
              }
            }
          },
          S83: {
            type: 'structure',
            required: ['type', 'message'],
            members: {
              type: {},
              message: {},
              externalExecutionId: {}
            }
          },
          S86: {
            type: 'structure',
            required: ['revision', 'changeIdentifier'],
            members: {
              revision: {},
              changeIdentifier: {},
              created: {
                type: 'timestamp'
              },
              revisionSummary: {}
            }
          },
          S88: {
            type: 'structure',
            members: {
              summary: {},
              externalExecutionId: {},
              percentComplete: {
                type: 'integer'
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=fe99cfad6777a9a28df5d532f6fa287b94351b04.js.map