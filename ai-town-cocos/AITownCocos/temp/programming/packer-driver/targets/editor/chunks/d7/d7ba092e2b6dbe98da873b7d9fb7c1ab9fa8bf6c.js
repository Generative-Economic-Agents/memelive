System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2021-08-28',
          endpointPrefix: 'migrationhub-orchestrator',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceFullName: 'AWS Migration Hub Orchestrator',
          serviceId: 'MigrationHubOrchestrator',
          signatureVersion: 'v4',
          signingName: 'migrationhub-orchestrator',
          uid: 'migrationhuborchestrator-2021-08-28'
        },
        operations: {
          CreateTemplate: {
            http: {
              requestUri: '/template',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['templateName', 'templateSource'],
              members: {
                templateName: {},
                templateDescription: {},
                templateSource: {
                  type: 'structure',
                  members: {
                    workflowId: {}
                  },
                  union: true
                },
                clientToken: {
                  idempotencyToken: true
                },
                tags: {
                  shape: 'S7'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                templateId: {},
                templateArn: {},
                tags: {
                  shape: 'Sc'
                }
              }
            }
          },
          CreateWorkflow: {
            http: {
              requestUri: '/migrationworkflow/',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['name', 'templateId', 'inputParameters'],
              members: {
                name: {},
                description: {},
                templateId: {},
                applicationConfigurationId: {},
                inputParameters: {
                  shape: 'Sk'
                },
                stepTargets: {
                  shape: 'Sp'
                },
                tags: {
                  shape: 'Sc'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                id: {},
                arn: {},
                name: {},
                description: {},
                templateId: {},
                adsApplicationConfigurationId: {},
                workflowInputs: {
                  shape: 'Sk'
                },
                stepTargets: {
                  shape: 'Sp'
                },
                status: {},
                creationTime: {
                  type: 'timestamp'
                },
                tags: {
                  shape: 'Sc'
                }
              }
            }
          },
          CreateWorkflowStep: {
            http: {
              requestUri: '/workflowstep',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['name', 'stepGroupId', 'workflowId', 'stepActionType'],
              members: {
                name: {},
                stepGroupId: {},
                workflowId: {},
                stepActionType: {},
                description: {},
                workflowStepAutomationConfiguration: {
                  shape: 'Sz'
                },
                stepTarget: {
                  shape: 'Sp'
                },
                outputs: {
                  shape: 'S16'
                },
                previous: {
                  shape: 'Sp'
                },
                next: {
                  shape: 'Sp'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                id: {},
                stepGroupId: {},
                workflowId: {},
                name: {}
              }
            }
          },
          CreateWorkflowStepGroup: {
            http: {
              requestUri: '/workflowstepgroups',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['workflowId', 'name'],
              members: {
                workflowId: {},
                name: {},
                description: {},
                next: {
                  shape: 'Sp'
                },
                previous: {
                  shape: 'Sp'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                workflowId: {},
                name: {},
                id: {},
                description: {},
                tools: {
                  shape: 'S1j'
                },
                next: {
                  shape: 'Sp'
                },
                previous: {
                  shape: 'Sp'
                },
                creationTime: {
                  type: 'timestamp'
                }
              }
            }
          },
          DeleteTemplate: {
            http: {
              method: 'DELETE',
              requestUri: '/template/{id}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['id'],
              members: {
                id: {
                  location: 'uri',
                  locationName: 'id'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeleteWorkflow: {
            http: {
              method: 'DELETE',
              requestUri: '/migrationworkflow/{id}',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['id'],
              members: {
                id: {
                  location: 'uri',
                  locationName: 'id'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                id: {},
                arn: {},
                status: {}
              }
            },
            idempotent: true
          },
          DeleteWorkflowStep: {
            http: {
              method: 'DELETE',
              requestUri: '/workflowstep/{id}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['id', 'stepGroupId', 'workflowId'],
              members: {
                id: {
                  location: 'uri',
                  locationName: 'id'
                },
                stepGroupId: {
                  location: 'querystring',
                  locationName: 'stepGroupId'
                },
                workflowId: {
                  location: 'querystring',
                  locationName: 'workflowId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeleteWorkflowStepGroup: {
            http: {
              method: 'DELETE',
              requestUri: '/workflowstepgroup/{id}',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['workflowId', 'id'],
              members: {
                workflowId: {
                  location: 'querystring',
                  locationName: 'workflowId'
                },
                id: {
                  location: 'uri',
                  locationName: 'id'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          GetTemplate: {
            http: {
              method: 'GET',
              requestUri: '/migrationworkflowtemplate/{id}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['id'],
              members: {
                id: {
                  location: 'uri',
                  locationName: 'id'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                id: {},
                templateArn: {},
                name: {},
                description: {},
                inputs: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      inputName: {},
                      dataType: {},
                      required: {
                        type: 'boolean'
                      }
                    }
                  }
                },
                tools: {
                  shape: 'S1j'
                },
                creationTime: {
                  type: 'timestamp'
                },
                owner: {},
                status: {},
                statusMessage: {},
                templateClass: {},
                tags: {
                  shape: 'Sc'
                }
              }
            }
          },
          GetTemplateStep: {
            http: {
              method: 'GET',
              requestUri: '/templatestep/{id}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['id', 'templateId', 'stepGroupId'],
              members: {
                id: {
                  location: 'uri',
                  locationName: 'id'
                },
                templateId: {
                  location: 'querystring',
                  locationName: 'templateId'
                },
                stepGroupId: {
                  location: 'querystring',
                  locationName: 'stepGroupId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                id: {},
                stepGroupId: {},
                templateId: {},
                name: {},
                description: {},
                stepActionType: {},
                creationTime: {},
                previous: {
                  shape: 'Sp'
                },
                next: {
                  shape: 'Sp'
                },
                outputs: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      name: {},
                      dataType: {},
                      required: {
                        type: 'boolean'
                      }
                    }
                  }
                },
                stepAutomationConfiguration: {
                  type: 'structure',
                  members: {
                    scriptLocationS3Bucket: {},
                    scriptLocationS3Key: {
                      shape: 'S11'
                    },
                    command: {
                      shape: 'S13'
                    },
                    runEnvironment: {},
                    targetType: {}
                  }
                }
              }
            }
          },
          GetTemplateStepGroup: {
            http: {
              method: 'GET',
              requestUri: '/templates/{templateId}/stepgroups/{id}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['templateId', 'id'],
              members: {
                templateId: {
                  location: 'uri',
                  locationName: 'templateId'
                },
                id: {
                  location: 'uri',
                  locationName: 'id'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                templateId: {},
                id: {},
                name: {},
                description: {},
                status: {},
                creationTime: {
                  type: 'timestamp'
                },
                lastModifiedTime: {
                  type: 'timestamp'
                },
                tools: {
                  shape: 'S1j'
                },
                previous: {
                  shape: 'Sp'
                },
                next: {
                  shape: 'Sp'
                }
              }
            }
          },
          GetWorkflow: {
            http: {
              method: 'GET',
              requestUri: '/migrationworkflow/{id}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['id'],
              members: {
                id: {
                  location: 'uri',
                  locationName: 'id'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                id: {},
                arn: {},
                name: {},
                description: {},
                templateId: {},
                adsApplicationConfigurationId: {},
                adsApplicationName: {},
                status: {},
                statusMessage: {},
                creationTime: {
                  type: 'timestamp'
                },
                lastStartTime: {
                  type: 'timestamp'
                },
                lastStopTime: {
                  type: 'timestamp'
                },
                lastModifiedTime: {
                  type: 'timestamp'
                },
                endTime: {
                  type: 'timestamp'
                },
                tools: {
                  shape: 'S1j'
                },
                totalSteps: {
                  type: 'integer'
                },
                completedSteps: {
                  type: 'integer'
                },
                workflowInputs: {
                  shape: 'Sk'
                },
                tags: {
                  shape: 'Sc'
                },
                workflowBucket: {}
              }
            }
          },
          GetWorkflowStep: {
            http: {
              method: 'GET',
              requestUri: '/workflowstep/{id}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['workflowId', 'stepGroupId', 'id'],
              members: {
                workflowId: {
                  location: 'querystring',
                  locationName: 'workflowId'
                },
                stepGroupId: {
                  location: 'querystring',
                  locationName: 'stepGroupId'
                },
                id: {
                  location: 'uri',
                  locationName: 'id'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                name: {},
                stepGroupId: {},
                workflowId: {},
                stepId: {},
                description: {},
                stepActionType: {},
                owner: {},
                workflowStepAutomationConfiguration: {
                  shape: 'Sz'
                },
                stepTarget: {
                  shape: 'Sp'
                },
                outputs: {
                  type: 'list',
                  member: {
                    shape: 'S17'
                  }
                },
                previous: {
                  shape: 'Sp'
                },
                next: {
                  shape: 'Sp'
                },
                status: {},
                statusMessage: {},
                scriptOutputLocation: {},
                creationTime: {
                  type: 'timestamp'
                },
                lastStartTime: {
                  type: 'timestamp'
                },
                endTime: {
                  type: 'timestamp'
                },
                noOfSrvCompleted: {
                  type: 'integer'
                },
                noOfSrvFailed: {
                  type: 'integer'
                },
                totalNoOfSrv: {
                  type: 'integer'
                }
              }
            }
          },
          GetWorkflowStepGroup: {
            http: {
              method: 'GET',
              requestUri: '/workflowstepgroup/{id}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['id', 'workflowId'],
              members: {
                id: {
                  location: 'uri',
                  locationName: 'id'
                },
                workflowId: {
                  location: 'querystring',
                  locationName: 'workflowId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                id: {},
                workflowId: {},
                name: {},
                description: {},
                status: {},
                owner: {},
                creationTime: {
                  type: 'timestamp'
                },
                lastModifiedTime: {
                  type: 'timestamp'
                },
                endTime: {
                  type: 'timestamp'
                },
                tools: {
                  shape: 'S1j'
                },
                previous: {
                  shape: 'Sp'
                },
                next: {
                  shape: 'Sp'
                }
              }
            }
          },
          ListPlugins: {
            http: {
              method: 'GET',
              requestUri: '/plugins',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                maxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                nextToken: {},
                plugins: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      pluginId: {},
                      hostname: {},
                      status: {},
                      ipAddress: {},
                      version: {},
                      registeredTime: {}
                    }
                  }
                }
              }
            }
          },
          ListTagsForResource: {
            http: {
              method: 'GET',
              requestUri: '/tags/{resourceArn}',
              responseCode: 200
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
                  shape: 'S7'
                }
              }
            }
          },
          ListTemplateStepGroups: {
            http: {
              method: 'GET',
              requestUri: '/templatestepgroups/{templateId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['templateId'],
              members: {
                maxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                templateId: {
                  location: 'uri',
                  locationName: 'templateId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['templateStepGroupSummary'],
              members: {
                nextToken: {},
                templateStepGroupSummary: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      id: {},
                      name: {},
                      previous: {
                        shape: 'Sp'
                      },
                      next: {
                        shape: 'Sp'
                      }
                    }
                  }
                }
              }
            }
          },
          ListTemplateSteps: {
            http: {
              method: 'GET',
              requestUri: '/templatesteps',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['templateId', 'stepGroupId'],
              members: {
                maxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                templateId: {
                  location: 'querystring',
                  locationName: 'templateId'
                },
                stepGroupId: {
                  location: 'querystring',
                  locationName: 'stepGroupId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                nextToken: {},
                templateStepSummaryList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      id: {},
                      stepGroupId: {},
                      templateId: {},
                      name: {},
                      stepActionType: {},
                      targetType: {},
                      owner: {},
                      previous: {
                        shape: 'Sp'
                      },
                      next: {
                        shape: 'Sp'
                      }
                    }
                  }
                }
              }
            }
          },
          ListTemplates: {
            http: {
              method: 'GET',
              requestUri: '/migrationworkflowtemplates',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                maxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                name: {
                  location: 'querystring',
                  locationName: 'name'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['templateSummary'],
              members: {
                nextToken: {},
                templateSummary: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      id: {},
                      name: {},
                      arn: {},
                      description: {}
                    }
                  }
                }
              }
            }
          },
          ListWorkflowStepGroups: {
            http: {
              method: 'GET',
              requestUri: '/workflowstepgroups',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['workflowId'],
              members: {
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                maxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                workflowId: {
                  location: 'querystring',
                  locationName: 'workflowId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['workflowStepGroupsSummary'],
              members: {
                nextToken: {},
                workflowStepGroupsSummary: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      id: {},
                      name: {},
                      owner: {},
                      status: {},
                      previous: {
                        shape: 'Sp'
                      },
                      next: {
                        shape: 'Sp'
                      }
                    }
                  }
                }
              }
            }
          },
          ListWorkflowSteps: {
            http: {
              method: 'GET',
              requestUri: '/workflow/{workflowId}/workflowstepgroups/{stepGroupId}/workflowsteps',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['workflowId', 'stepGroupId'],
              members: {
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                maxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                workflowId: {
                  location: 'uri',
                  locationName: 'workflowId'
                },
                stepGroupId: {
                  location: 'uri',
                  locationName: 'stepGroupId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['workflowStepsSummary'],
              members: {
                nextToken: {},
                workflowStepsSummary: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      stepId: {},
                      name: {},
                      stepActionType: {},
                      owner: {},
                      previous: {
                        shape: 'Sp'
                      },
                      next: {
                        shape: 'Sp'
                      },
                      status: {},
                      statusMessage: {},
                      noOfSrvCompleted: {
                        type: 'integer'
                      },
                      noOfSrvFailed: {
                        type: 'integer'
                      },
                      totalNoOfSrv: {
                        type: 'integer'
                      },
                      description: {},
                      scriptLocation: {}
                    }
                  }
                }
              }
            }
          },
          ListWorkflows: {
            http: {
              method: 'GET',
              requestUri: '/migrationworkflows',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                maxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                templateId: {
                  location: 'querystring',
                  locationName: 'templateId'
                },
                adsApplicationConfigurationName: {
                  location: 'querystring',
                  locationName: 'adsApplicationConfigurationName'
                },
                status: {
                  location: 'querystring',
                  locationName: 'status'
                },
                name: {
                  location: 'querystring',
                  locationName: 'name'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['migrationWorkflowSummary'],
              members: {
                nextToken: {},
                migrationWorkflowSummary: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      id: {},
                      name: {},
                      templateId: {},
                      adsApplicationConfigurationName: {},
                      status: {},
                      creationTime: {
                        type: 'timestamp'
                      },
                      endTime: {
                        type: 'timestamp'
                      },
                      statusMessage: {},
                      completedSteps: {
                        type: 'integer'
                      },
                      totalSteps: {
                        type: 'integer'
                      }
                    }
                  }
                }
              }
            }
          },
          RetryWorkflowStep: {
            http: {
              requestUri: '/retryworkflowstep/{id}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['workflowId', 'stepGroupId', 'id'],
              members: {
                workflowId: {
                  location: 'querystring',
                  locationName: 'workflowId'
                },
                stepGroupId: {
                  location: 'querystring',
                  locationName: 'stepGroupId'
                },
                id: {
                  location: 'uri',
                  locationName: 'id'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                stepGroupId: {},
                workflowId: {},
                id: {},
                status: {}
              }
            }
          },
          StartWorkflow: {
            http: {
              requestUri: '/migrationworkflow/{id}/start',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['id'],
              members: {
                id: {
                  location: 'uri',
                  locationName: 'id'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                id: {},
                arn: {},
                status: {},
                statusMessage: {},
                lastStartTime: {
                  type: 'timestamp'
                }
              }
            }
          },
          StopWorkflow: {
            http: {
              requestUri: '/migrationworkflow/{id}/stop',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['id'],
              members: {
                id: {
                  location: 'uri',
                  locationName: 'id'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                id: {},
                arn: {},
                status: {},
                statusMessage: {},
                lastStopTime: {
                  type: 'timestamp'
                }
              }
            }
          },
          TagResource: {
            http: {
              requestUri: '/tags/{resourceArn}',
              responseCode: 200
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
                  shape: 'S7'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          UntagResource: {
            http: {
              method: 'DELETE',
              requestUri: '/tags/{resourceArn}',
              responseCode: 200
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
            },
            idempotent: true
          },
          UpdateTemplate: {
            http: {
              requestUri: '/template/{id}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['id'],
              members: {
                id: {
                  location: 'uri',
                  locationName: 'id'
                },
                templateName: {},
                templateDescription: {},
                clientToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                templateId: {},
                templateArn: {},
                tags: {
                  shape: 'Sc'
                }
              }
            }
          },
          UpdateWorkflow: {
            http: {
              requestUri: '/migrationworkflow/{id}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['id'],
              members: {
                id: {
                  location: 'uri',
                  locationName: 'id'
                },
                name: {},
                description: {},
                inputParameters: {
                  shape: 'Sk'
                },
                stepTargets: {
                  shape: 'Sp'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                id: {},
                arn: {},
                name: {},
                description: {},
                templateId: {},
                adsApplicationConfigurationId: {},
                workflowInputs: {
                  shape: 'Sk'
                },
                stepTargets: {
                  shape: 'Sp'
                },
                status: {},
                creationTime: {
                  type: 'timestamp'
                },
                lastModifiedTime: {
                  type: 'timestamp'
                },
                tags: {
                  shape: 'Sc'
                }
              }
            }
          },
          UpdateWorkflowStep: {
            http: {
              requestUri: '/workflowstep/{id}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['id', 'stepGroupId', 'workflowId'],
              members: {
                id: {
                  location: 'uri',
                  locationName: 'id'
                },
                stepGroupId: {},
                workflowId: {},
                name: {},
                description: {},
                stepActionType: {},
                workflowStepAutomationConfiguration: {
                  shape: 'Sz'
                },
                stepTarget: {
                  shape: 'Sp'
                },
                outputs: {
                  shape: 'S16'
                },
                previous: {
                  shape: 'Sp'
                },
                next: {
                  shape: 'Sp'
                },
                status: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                id: {},
                stepGroupId: {},
                workflowId: {},
                name: {}
              }
            }
          },
          UpdateWorkflowStepGroup: {
            http: {
              requestUri: '/workflowstepgroup/{id}',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['workflowId', 'id'],
              members: {
                workflowId: {
                  location: 'querystring',
                  locationName: 'workflowId'
                },
                id: {
                  location: 'uri',
                  locationName: 'id'
                },
                name: {},
                description: {},
                next: {
                  shape: 'Sp'
                },
                previous: {
                  shape: 'Sp'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                workflowId: {},
                name: {},
                id: {},
                description: {},
                tools: {
                  shape: 'S1j'
                },
                next: {
                  shape: 'Sp'
                },
                previous: {
                  shape: 'Sp'
                },
                lastModifiedTime: {
                  type: 'timestamp'
                }
              }
            },
            idempotent: true
          }
        },
        shapes: {
          S7: {
            type: 'map',
            key: {},
            value: {}
          },
          Sc: {
            type: 'map',
            key: {},
            value: {}
          },
          Sk: {
            type: 'map',
            key: {},
            value: {
              type: 'structure',
              members: {
                integerValue: {
                  type: 'integer'
                },
                stringValue: {},
                listOfStringsValue: {
                  shape: 'Sp'
                },
                mapOfStringValue: {
                  shape: 'Sc'
                }
              },
              union: true
            },
            sensitive: true
          },
          Sp: {
            type: 'list',
            member: {}
          },
          Sz: {
            type: 'structure',
            members: {
              scriptLocationS3Bucket: {},
              scriptLocationS3Key: {
                shape: 'S11'
              },
              command: {
                shape: 'S13'
              },
              runEnvironment: {},
              targetType: {}
            }
          },
          S11: {
            type: 'structure',
            members: {
              linux: {},
              windows: {}
            }
          },
          S13: {
            type: 'structure',
            members: {
              linux: {},
              windows: {}
            }
          },
          S16: {
            type: 'list',
            member: {
              shape: 'S17'
            }
          },
          S17: {
            type: 'structure',
            members: {
              name: {},
              dataType: {},
              required: {
                type: 'boolean'
              },
              value: {
                type: 'structure',
                members: {
                  integerValue: {
                    type: 'integer'
                  },
                  stringValue: {},
                  listOfStringValue: {
                    type: 'list',
                    member: {}
                  }
                },
                union: true
              }
            }
          },
          S1j: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                name: {},
                url: {}
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=d7ba092e2b6dbe98da873b7d9fb7c1ab9fa8bf6c.js.map