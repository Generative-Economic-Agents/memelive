System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2012-10-29',
          endpointPrefix: 'datapipeline',
          jsonVersion: '1.1',
          protocol: 'json',
          serviceFullName: 'AWS Data Pipeline',
          serviceId: 'Data Pipeline',
          signatureVersion: 'v4',
          targetPrefix: 'DataPipeline',
          uid: 'datapipeline-2012-10-29'
        },
        operations: {
          ActivatePipeline: {
            input: {
              type: 'structure',
              required: ['pipelineId'],
              members: {
                pipelineId: {},
                parameterValues: {
                  shape: 'S3'
                },
                startTimestamp: {
                  type: 'timestamp'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          AddTags: {
            input: {
              type: 'structure',
              required: ['pipelineId', 'tags'],
              members: {
                pipelineId: {},
                tags: {
                  shape: 'Sa'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          CreatePipeline: {
            input: {
              type: 'structure',
              required: ['name', 'uniqueId'],
              members: {
                name: {},
                uniqueId: {},
                description: {},
                tags: {
                  shape: 'Sa'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['pipelineId'],
              members: {
                pipelineId: {}
              }
            }
          },
          DeactivatePipeline: {
            input: {
              type: 'structure',
              required: ['pipelineId'],
              members: {
                pipelineId: {},
                cancelActive: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeletePipeline: {
            input: {
              type: 'structure',
              required: ['pipelineId'],
              members: {
                pipelineId: {}
              }
            }
          },
          DescribeObjects: {
            input: {
              type: 'structure',
              required: ['pipelineId', 'objectIds'],
              members: {
                pipelineId: {},
                objectIds: {
                  shape: 'Sn'
                },
                evaluateExpressions: {
                  type: 'boolean'
                },
                marker: {}
              }
            },
            output: {
              type: 'structure',
              required: ['pipelineObjects'],
              members: {
                pipelineObjects: {
                  shape: 'Sq'
                },
                marker: {},
                hasMoreResults: {
                  type: 'boolean'
                }
              }
            }
          },
          DescribePipelines: {
            input: {
              type: 'structure',
              required: ['pipelineIds'],
              members: {
                pipelineIds: {
                  shape: 'Sn'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['pipelineDescriptionList'],
              members: {
                pipelineDescriptionList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['pipelineId', 'name', 'fields'],
                    members: {
                      pipelineId: {},
                      name: {},
                      fields: {
                        shape: 'Ss'
                      },
                      description: {},
                      tags: {
                        shape: 'Sa'
                      }
                    }
                  }
                }
              }
            }
          },
          EvaluateExpression: {
            input: {
              type: 'structure',
              required: ['pipelineId', 'objectId', 'expression'],
              members: {
                pipelineId: {},
                objectId: {},
                expression: {}
              }
            },
            output: {
              type: 'structure',
              required: ['evaluatedExpression'],
              members: {
                evaluatedExpression: {}
              }
            }
          },
          GetPipelineDefinition: {
            input: {
              type: 'structure',
              required: ['pipelineId'],
              members: {
                pipelineId: {},
                version: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                pipelineObjects: {
                  shape: 'Sq'
                },
                parameterObjects: {
                  shape: 'S13'
                },
                parameterValues: {
                  shape: 'S3'
                }
              }
            }
          },
          ListPipelines: {
            input: {
              type: 'structure',
              members: {
                marker: {}
              }
            },
            output: {
              type: 'structure',
              required: ['pipelineIdList'],
              members: {
                pipelineIdList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      id: {},
                      name: {}
                    }
                  }
                },
                marker: {},
                hasMoreResults: {
                  type: 'boolean'
                }
              }
            }
          },
          PollForTask: {
            input: {
              type: 'structure',
              required: ['workerGroup'],
              members: {
                workerGroup: {},
                hostname: {},
                instanceIdentity: {
                  type: 'structure',
                  members: {
                    document: {},
                    signature: {}
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                taskObject: {
                  type: 'structure',
                  members: {
                    taskId: {},
                    pipelineId: {},
                    attemptId: {},
                    objects: {
                      type: 'map',
                      key: {},
                      value: {
                        shape: 'Sr'
                      }
                    }
                  }
                }
              }
            }
          },
          PutPipelineDefinition: {
            input: {
              type: 'structure',
              required: ['pipelineId', 'pipelineObjects'],
              members: {
                pipelineId: {},
                pipelineObjects: {
                  shape: 'Sq'
                },
                parameterObjects: {
                  shape: 'S13'
                },
                parameterValues: {
                  shape: 'S3'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['errored'],
              members: {
                validationErrors: {
                  shape: 'S1l'
                },
                validationWarnings: {
                  shape: 'S1p'
                },
                errored: {
                  type: 'boolean'
                }
              }
            }
          },
          QueryObjects: {
            input: {
              type: 'structure',
              required: ['pipelineId', 'sphere'],
              members: {
                pipelineId: {},
                query: {
                  type: 'structure',
                  members: {
                    selectors: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          fieldName: {},
                          operator: {
                            type: 'structure',
                            members: {
                              type: {},
                              values: {
                                shape: 'S1x'
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                sphere: {},
                marker: {},
                limit: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ids: {
                  shape: 'Sn'
                },
                marker: {},
                hasMoreResults: {
                  type: 'boolean'
                }
              }
            }
          },
          RemoveTags: {
            input: {
              type: 'structure',
              required: ['pipelineId', 'tagKeys'],
              members: {
                pipelineId: {},
                tagKeys: {
                  shape: 'S1x'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          ReportTaskProgress: {
            input: {
              type: 'structure',
              required: ['taskId'],
              members: {
                taskId: {},
                fields: {
                  shape: 'Ss'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['canceled'],
              members: {
                canceled: {
                  type: 'boolean'
                }
              }
            }
          },
          ReportTaskRunnerHeartbeat: {
            input: {
              type: 'structure',
              required: ['taskrunnerId'],
              members: {
                taskrunnerId: {},
                workerGroup: {},
                hostname: {}
              }
            },
            output: {
              type: 'structure',
              required: ['terminate'],
              members: {
                terminate: {
                  type: 'boolean'
                }
              }
            }
          },
          SetStatus: {
            input: {
              type: 'structure',
              required: ['pipelineId', 'objectIds', 'status'],
              members: {
                pipelineId: {},
                objectIds: {
                  shape: 'Sn'
                },
                status: {}
              }
            }
          },
          SetTaskStatus: {
            input: {
              type: 'structure',
              required: ['taskId', 'taskStatus'],
              members: {
                taskId: {},
                taskStatus: {},
                errorId: {},
                errorMessage: {},
                errorStackTrace: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          ValidatePipelineDefinition: {
            input: {
              type: 'structure',
              required: ['pipelineId', 'pipelineObjects'],
              members: {
                pipelineId: {},
                pipelineObjects: {
                  shape: 'Sq'
                },
                parameterObjects: {
                  shape: 'S13'
                },
                parameterValues: {
                  shape: 'S3'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['errored'],
              members: {
                validationErrors: {
                  shape: 'S1l'
                },
                validationWarnings: {
                  shape: 'S1p'
                },
                errored: {
                  type: 'boolean'
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
              required: ['id', 'stringValue'],
              members: {
                id: {},
                stringValue: {}
              }
            }
          },
          Sa: {
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
          Sn: {
            type: 'list',
            member: {}
          },
          Sq: {
            type: 'list',
            member: {
              shape: 'Sr'
            }
          },
          Sr: {
            type: 'structure',
            required: ['id', 'name', 'fields'],
            members: {
              id: {},
              name: {},
              fields: {
                shape: 'Ss'
              }
            }
          },
          Ss: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['key'],
              members: {
                key: {},
                stringValue: {},
                refValue: {}
              }
            }
          },
          S13: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['id', 'attributes'],
              members: {
                id: {},
                attributes: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['key', 'stringValue'],
                    members: {
                      key: {},
                      stringValue: {}
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
                id: {},
                errors: {
                  shape: 'S1n'
                }
              }
            }
          },
          S1n: {
            type: 'list',
            member: {}
          },
          S1p: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                id: {},
                warnings: {
                  shape: 'S1n'
                }
              }
            }
          },
          S1x: {
            type: 'list',
            member: {}
          }
        }
      });
    }
  };
});
//# sourceMappingURL=2758606d3bc3d9d4a69d4743ceae11e543efe6cf.js.map