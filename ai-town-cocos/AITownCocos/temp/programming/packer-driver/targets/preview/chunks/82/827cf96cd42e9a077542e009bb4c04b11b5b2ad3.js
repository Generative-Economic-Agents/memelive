System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2021-04-28',
          endpointPrefix: 'm2',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceFullName: 'AWSMainframeModernization',
          serviceId: 'm2',
          signatureVersion: 'v4',
          signingName: 'm2',
          uid: 'm2-2021-04-28'
        },
        operations: {
          CancelBatchJobExecution: {
            http: {
              requestUri: '/applications/{applicationId}/batch-job-executions/{executionId}/cancel',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['applicationId', 'executionId'],
              members: {
                applicationId: {
                  location: 'uri',
                  locationName: 'applicationId'
                },
                executionId: {
                  location: 'uri',
                  locationName: 'executionId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          CreateApplication: {
            http: {
              requestUri: '/applications',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['definition', 'engineType', 'name'],
              members: {
                clientToken: {
                  idempotencyToken: true
                },
                definition: {
                  shape: 'S6'
                },
                description: {},
                engineType: {},
                kmsKeyId: {},
                name: {},
                roleArn: {},
                tags: {
                  shape: 'Sd'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['applicationArn', 'applicationId', 'applicationVersion'],
              members: {
                applicationArn: {},
                applicationId: {},
                applicationVersion: {
                  type: 'integer'
                }
              }
            },
            idempotent: true
          },
          CreateDataSetImportTask: {
            http: {
              requestUri: '/applications/{applicationId}/dataset-import-task',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['applicationId', 'importConfig'],
              members: {
                applicationId: {
                  location: 'uri',
                  locationName: 'applicationId'
                },
                clientToken: {
                  idempotencyToken: true
                },
                importConfig: {
                  type: 'structure',
                  members: {
                    dataSets: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        required: ['dataSet', 'externalLocation'],
                        members: {
                          dataSet: {
                            type: 'structure',
                            required: ['datasetName', 'datasetOrg', 'recordLength'],
                            members: {
                              datasetName: {},
                              datasetOrg: {
                                type: 'structure',
                                members: {
                                  gdg: {
                                    type: 'structure',
                                    members: {
                                      limit: {
                                        type: 'integer'
                                      },
                                      rollDisposition: {}
                                    }
                                  },
                                  po: {
                                    type: 'structure',
                                    required: ['format', 'memberFileExtensions'],
                                    members: {
                                      encoding: {},
                                      format: {},
                                      memberFileExtensions: {
                                        type: 'list',
                                        member: {}
                                      }
                                    }
                                  },
                                  ps: {
                                    type: 'structure',
                                    required: ['format'],
                                    members: {
                                      encoding: {},
                                      format: {}
                                    }
                                  },
                                  vsam: {
                                    type: 'structure',
                                    required: ['format'],
                                    members: {
                                      alternateKeys: {
                                        shape: 'Sv'
                                      },
                                      compressed: {
                                        type: 'boolean'
                                      },
                                      encoding: {},
                                      format: {},
                                      primaryKey: {
                                        shape: 'Sy'
                                      }
                                    }
                                  }
                                },
                                union: true
                              },
                              recordLength: {
                                type: 'structure',
                                required: ['max', 'min'],
                                members: {
                                  max: {
                                    type: 'integer'
                                  },
                                  min: {
                                    type: 'integer'
                                  }
                                }
                              },
                              relativePath: {},
                              storageType: {}
                            }
                          },
                          externalLocation: {
                            type: 'structure',
                            members: {
                              s3Location: {}
                            },
                            union: true
                          }
                        }
                      }
                    },
                    s3Location: {}
                  },
                  union: true
                }
              }
            },
            output: {
              type: 'structure',
              required: ['taskId'],
              members: {
                taskId: {}
              }
            },
            idempotent: true
          },
          CreateDeployment: {
            http: {
              requestUri: '/applications/{applicationId}/deployments',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['applicationId', 'applicationVersion', 'environmentId'],
              members: {
                applicationId: {
                  location: 'uri',
                  locationName: 'applicationId'
                },
                applicationVersion: {
                  type: 'integer'
                },
                clientToken: {
                  idempotencyToken: true
                },
                environmentId: {}
              }
            },
            output: {
              type: 'structure',
              required: ['deploymentId'],
              members: {
                deploymentId: {}
              }
            },
            idempotent: true
          },
          CreateEnvironment: {
            http: {
              requestUri: '/environments',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['engineType', 'instanceType', 'name'],
              members: {
                clientToken: {
                  idempotencyToken: true
                },
                description: {},
                engineType: {},
                engineVersion: {},
                highAvailabilityConfig: {
                  shape: 'S16'
                },
                instanceType: {},
                kmsKeyId: {},
                name: {},
                preferredMaintenanceWindow: {},
                publiclyAccessible: {
                  type: 'boolean'
                },
                securityGroupIds: {
                  shape: 'S19'
                },
                storageConfigurations: {
                  shape: 'S1a'
                },
                subnetIds: {
                  shape: 'S19'
                },
                tags: {
                  shape: 'Sd'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['environmentId'],
              members: {
                environmentId: {}
              }
            },
            idempotent: true
          },
          DeleteApplication: {
            http: {
              method: 'DELETE',
              requestUri: '/applications/{applicationId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['applicationId'],
              members: {
                applicationId: {
                  location: 'uri',
                  locationName: 'applicationId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeleteApplicationFromEnvironment: {
            http: {
              method: 'DELETE',
              requestUri: '/applications/{applicationId}/environment/{environmentId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['applicationId', 'environmentId'],
              members: {
                applicationId: {
                  location: 'uri',
                  locationName: 'applicationId'
                },
                environmentId: {
                  location: 'uri',
                  locationName: 'environmentId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteEnvironment: {
            http: {
              method: 'DELETE',
              requestUri: '/environments/{environmentId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['environmentId'],
              members: {
                environmentId: {
                  location: 'uri',
                  locationName: 'environmentId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          GetApplication: {
            http: {
              method: 'GET',
              requestUri: '/applications/{applicationId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['applicationId'],
              members: {
                applicationId: {
                  location: 'uri',
                  locationName: 'applicationId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['applicationArn', 'applicationId', 'creationTime', 'engineType', 'latestVersion', 'name', 'status'],
              members: {
                applicationArn: {},
                applicationId: {},
                creationTime: {
                  type: 'timestamp'
                },
                deployedVersion: {
                  type: 'structure',
                  required: ['applicationVersion', 'status'],
                  members: {
                    applicationVersion: {
                      type: 'integer'
                    },
                    status: {},
                    statusReason: {}
                  }
                },
                description: {},
                engineType: {},
                environmentId: {},
                kmsKeyId: {},
                lastStartTime: {
                  type: 'timestamp'
                },
                latestVersion: {
                  shape: 'S1r'
                },
                listenerArns: {
                  shape: 'S1t'
                },
                listenerPorts: {
                  type: 'list',
                  member: {
                    type: 'integer'
                  }
                },
                loadBalancerDnsName: {},
                logGroups: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['logGroupName', 'logType'],
                    members: {
                      logGroupName: {},
                      logType: {}
                    }
                  }
                },
                name: {},
                roleArn: {},
                status: {},
                statusReason: {},
                tags: {
                  shape: 'Sd'
                },
                targetGroupArns: {
                  shape: 'S1t'
                }
              }
            }
          },
          GetApplicationVersion: {
            http: {
              method: 'GET',
              requestUri: '/applications/{applicationId}/versions/{applicationVersion}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['applicationId', 'applicationVersion'],
              members: {
                applicationId: {
                  location: 'uri',
                  locationName: 'applicationId'
                },
                applicationVersion: {
                  location: 'uri',
                  locationName: 'applicationVersion',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['applicationVersion', 'creationTime', 'definitionContent', 'name', 'status'],
              members: {
                applicationVersion: {
                  type: 'integer'
                },
                creationTime: {
                  type: 'timestamp'
                },
                definitionContent: {},
                description: {},
                name: {},
                status: {},
                statusReason: {}
              }
            }
          },
          GetBatchJobExecution: {
            http: {
              method: 'GET',
              requestUri: '/applications/{applicationId}/batch-job-executions/{executionId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['applicationId', 'executionId'],
              members: {
                applicationId: {
                  location: 'uri',
                  locationName: 'applicationId'
                },
                executionId: {
                  location: 'uri',
                  locationName: 'executionId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['applicationId', 'executionId', 'startTime', 'status'],
              members: {
                applicationId: {},
                batchJobIdentifier: {
                  shape: 'S24'
                },
                endTime: {
                  type: 'timestamp'
                },
                executionId: {},
                jobId: {},
                jobName: {},
                jobStepRestartMarker: {
                  shape: 'S27'
                },
                jobType: {},
                jobUser: {},
                returnCode: {},
                startTime: {
                  type: 'timestamp'
                },
                status: {},
                statusReason: {}
              }
            }
          },
          GetDataSetDetails: {
            http: {
              method: 'GET',
              requestUri: '/applications/{applicationId}/datasets/{dataSetName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['applicationId', 'dataSetName'],
              members: {
                applicationId: {
                  location: 'uri',
                  locationName: 'applicationId'
                },
                dataSetName: {
                  location: 'uri',
                  locationName: 'dataSetName'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['dataSetName'],
              members: {
                blocksize: {
                  type: 'integer'
                },
                creationTime: {
                  type: 'timestamp'
                },
                dataSetName: {},
                dataSetOrg: {
                  type: 'structure',
                  members: {
                    gdg: {
                      type: 'structure',
                      members: {
                        limit: {
                          type: 'integer'
                        },
                        rollDisposition: {}
                      }
                    },
                    po: {
                      type: 'structure',
                      required: ['encoding', 'format'],
                      members: {
                        encoding: {},
                        format: {}
                      }
                    },
                    ps: {
                      type: 'structure',
                      required: ['encoding', 'format'],
                      members: {
                        encoding: {},
                        format: {}
                      }
                    },
                    vsam: {
                      type: 'structure',
                      members: {
                        alternateKeys: {
                          shape: 'Sv'
                        },
                        cacheAtStartup: {
                          type: 'boolean'
                        },
                        compressed: {
                          type: 'boolean'
                        },
                        encoding: {},
                        primaryKey: {
                          shape: 'Sy'
                        },
                        recordFormat: {}
                      }
                    }
                  },
                  union: true
                },
                fileSize: {
                  type: 'long'
                },
                lastReferencedTime: {
                  type: 'timestamp'
                },
                lastUpdatedTime: {
                  type: 'timestamp'
                },
                location: {},
                recordLength: {
                  type: 'integer'
                }
              }
            }
          },
          GetDataSetImportTask: {
            http: {
              method: 'GET',
              requestUri: '/applications/{applicationId}/dataset-import-tasks/{taskId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['applicationId', 'taskId'],
              members: {
                applicationId: {
                  location: 'uri',
                  locationName: 'applicationId'
                },
                taskId: {
                  location: 'uri',
                  locationName: 'taskId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['status', 'taskId'],
              members: {
                status: {},
                summary: {
                  shape: 'S2o'
                },
                taskId: {}
              }
            }
          },
          GetDeployment: {
            http: {
              method: 'GET',
              requestUri: '/applications/{applicationId}/deployments/{deploymentId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['applicationId', 'deploymentId'],
              members: {
                applicationId: {
                  location: 'uri',
                  locationName: 'applicationId'
                },
                deploymentId: {
                  location: 'uri',
                  locationName: 'deploymentId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['applicationId', 'applicationVersion', 'creationTime', 'deploymentId', 'environmentId', 'status'],
              members: {
                applicationId: {},
                applicationVersion: {
                  type: 'integer'
                },
                creationTime: {
                  type: 'timestamp'
                },
                deploymentId: {},
                environmentId: {},
                status: {},
                statusReason: {}
              }
            }
          },
          GetEnvironment: {
            http: {
              method: 'GET',
              requestUri: '/environments/{environmentId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['environmentId'],
              members: {
                environmentId: {
                  location: 'uri',
                  locationName: 'environmentId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['creationTime', 'engineType', 'engineVersion', 'environmentArn', 'environmentId', 'instanceType', 'name', 'securityGroupIds', 'status', 'subnetIds', 'vpcId'],
              members: {
                actualCapacity: {
                  type: 'integer'
                },
                creationTime: {
                  type: 'timestamp'
                },
                description: {},
                engineType: {},
                engineVersion: {},
                environmentArn: {},
                environmentId: {},
                highAvailabilityConfig: {
                  shape: 'S16'
                },
                instanceType: {},
                kmsKeyId: {},
                loadBalancerArn: {},
                name: {},
                pendingMaintenance: {
                  type: 'structure',
                  members: {
                    engineVersion: {},
                    schedule: {
                      type: 'structure',
                      members: {
                        endTime: {
                          type: 'timestamp'
                        },
                        startTime: {
                          type: 'timestamp'
                        }
                      }
                    }
                  }
                },
                preferredMaintenanceWindow: {},
                publiclyAccessible: {
                  type: 'boolean'
                },
                securityGroupIds: {
                  shape: 'S19'
                },
                status: {},
                statusReason: {},
                storageConfigurations: {
                  shape: 'S1a'
                },
                subnetIds: {
                  shape: 'S19'
                },
                tags: {
                  shape: 'Sd'
                },
                vpcId: {}
              }
            }
          },
          GetSignedBluinsightsUrl: {
            http: {
              method: 'GET',
              requestUri: '/signed-bi-url',
              responseCode: 200
            },
            output: {
              type: 'structure',
              required: ['signedBiUrl'],
              members: {
                signedBiUrl: {}
              }
            }
          },
          ListApplicationVersions: {
            http: {
              method: 'GET',
              requestUri: '/applications/{applicationId}/versions',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['applicationId'],
              members: {
                applicationId: {
                  location: 'uri',
                  locationName: 'applicationId'
                },
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
              required: ['applicationVersions'],
              members: {
                applicationVersions: {
                  type: 'list',
                  member: {
                    shape: 'S1r'
                  }
                },
                nextToken: {}
              }
            }
          },
          ListApplications: {
            http: {
              method: 'GET',
              requestUri: '/applications',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                environmentId: {
                  location: 'querystring',
                  locationName: 'environmentId'
                },
                maxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                names: {
                  shape: 'S33',
                  location: 'querystring',
                  locationName: 'names'
                },
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['applications'],
              members: {
                applications: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['applicationArn', 'applicationId', 'applicationVersion', 'creationTime', 'engineType', 'name', 'status'],
                    members: {
                      applicationArn: {},
                      applicationId: {},
                      applicationVersion: {
                        type: 'integer'
                      },
                      creationTime: {
                        type: 'timestamp'
                      },
                      deploymentStatus: {},
                      description: {},
                      engineType: {},
                      environmentId: {},
                      lastStartTime: {
                        type: 'timestamp'
                      },
                      name: {},
                      roleArn: {},
                      status: {},
                      versionStatus: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListBatchJobDefinitions: {
            http: {
              method: 'GET',
              requestUri: '/applications/{applicationId}/batch-job-definitions',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['applicationId'],
              members: {
                applicationId: {
                  location: 'uri',
                  locationName: 'applicationId'
                },
                maxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                prefix: {
                  location: 'querystring',
                  locationName: 'prefix'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['batchJobDefinitions'],
              members: {
                batchJobDefinitions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      fileBatchJobDefinition: {
                        type: 'structure',
                        required: ['fileName'],
                        members: {
                          fileName: {},
                          folderPath: {}
                        }
                      },
                      scriptBatchJobDefinition: {
                        type: 'structure',
                        required: ['scriptName'],
                        members: {
                          scriptName: {}
                        }
                      }
                    },
                    union: true
                  }
                },
                nextToken: {}
              }
            }
          },
          ListBatchJobExecutions: {
            http: {
              method: 'GET',
              requestUri: '/applications/{applicationId}/batch-job-executions',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['applicationId'],
              members: {
                applicationId: {
                  location: 'uri',
                  locationName: 'applicationId'
                },
                executionIds: {
                  location: 'querystring',
                  locationName: 'executionIds',
                  type: 'list',
                  member: {}
                },
                jobName: {
                  location: 'querystring',
                  locationName: 'jobName'
                },
                maxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                startedAfter: {
                  location: 'querystring',
                  locationName: 'startedAfter',
                  type: 'timestamp'
                },
                startedBefore: {
                  location: 'querystring',
                  locationName: 'startedBefore',
                  type: 'timestamp'
                },
                status: {
                  location: 'querystring',
                  locationName: 'status'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['batchJobExecutions'],
              members: {
                batchJobExecutions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['applicationId', 'executionId', 'startTime', 'status'],
                    members: {
                      applicationId: {},
                      batchJobIdentifier: {
                        shape: 'S24'
                      },
                      endTime: {
                        type: 'timestamp'
                      },
                      executionId: {},
                      jobId: {},
                      jobName: {},
                      jobType: {},
                      returnCode: {},
                      startTime: {
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
          ListBatchJobRestartPoints: {
            http: {
              method: 'GET',
              requestUri: '/applications/{applicationId}/batch-job-executions/{executionId}/steps',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['applicationId', 'executionId'],
              members: {
                applicationId: {
                  location: 'uri',
                  locationName: 'applicationId'
                },
                executionId: {
                  location: 'uri',
                  locationName: 'executionId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                batchJobSteps: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      procStepName: {},
                      procStepNumber: {
                        type: 'integer'
                      },
                      stepCondCode: {},
                      stepName: {},
                      stepNumber: {
                        type: 'integer'
                      },
                      stepRestartable: {
                        type: 'boolean'
                      }
                    }
                  }
                }
              }
            }
          },
          ListDataSetImportHistory: {
            http: {
              method: 'GET',
              requestUri: '/applications/{applicationId}/dataset-import-tasks',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['applicationId'],
              members: {
                applicationId: {
                  location: 'uri',
                  locationName: 'applicationId'
                },
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
              required: ['dataSetImportTasks'],
              members: {
                dataSetImportTasks: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['status', 'summary', 'taskId'],
                    members: {
                      status: {},
                      statusReason: {},
                      summary: {
                        shape: 'S2o'
                      },
                      taskId: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListDataSets: {
            http: {
              method: 'GET',
              requestUri: '/applications/{applicationId}/datasets',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['applicationId'],
              members: {
                applicationId: {
                  location: 'uri',
                  locationName: 'applicationId'
                },
                maxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                nameFilter: {
                  location: 'querystring',
                  locationName: 'nameFilter'
                },
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                prefix: {
                  location: 'querystring',
                  locationName: 'prefix'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['dataSets'],
              members: {
                dataSets: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['dataSetName'],
                    members: {
                      creationTime: {
                        type: 'timestamp'
                      },
                      dataSetName: {},
                      dataSetOrg: {},
                      format: {},
                      lastReferencedTime: {
                        type: 'timestamp'
                      },
                      lastUpdatedTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListDeployments: {
            http: {
              method: 'GET',
              requestUri: '/applications/{applicationId}/deployments',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['applicationId'],
              members: {
                applicationId: {
                  location: 'uri',
                  locationName: 'applicationId'
                },
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
              required: ['deployments'],
              members: {
                deployments: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['applicationId', 'applicationVersion', 'creationTime', 'deploymentId', 'environmentId', 'status'],
                    members: {
                      applicationId: {},
                      applicationVersion: {
                        type: 'integer'
                      },
                      creationTime: {
                        type: 'timestamp'
                      },
                      deploymentId: {},
                      environmentId: {},
                      status: {},
                      statusReason: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListEngineVersions: {
            http: {
              method: 'GET',
              requestUri: '/engine-versions',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                engineType: {
                  location: 'querystring',
                  locationName: 'engineType'
                },
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
              required: ['engineVersions'],
              members: {
                engineVersions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['engineType', 'engineVersion'],
                    members: {
                      engineType: {},
                      engineVersion: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListEnvironments: {
            http: {
              method: 'GET',
              requestUri: '/environments',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                engineType: {
                  location: 'querystring',
                  locationName: 'engineType'
                },
                maxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                names: {
                  shape: 'S33',
                  location: 'querystring',
                  locationName: 'names'
                },
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['environments'],
              members: {
                environments: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['creationTime', 'engineType', 'engineVersion', 'environmentArn', 'environmentId', 'instanceType', 'name', 'status'],
                    members: {
                      creationTime: {
                        type: 'timestamp'
                      },
                      engineType: {},
                      engineVersion: {},
                      environmentArn: {},
                      environmentId: {},
                      instanceType: {},
                      name: {},
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
              required: ['tags'],
              members: {
                tags: {
                  shape: 'Sd'
                }
              }
            }
          },
          StartApplication: {
            http: {
              requestUri: '/applications/{applicationId}/start',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['applicationId'],
              members: {
                applicationId: {
                  location: 'uri',
                  locationName: 'applicationId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          StartBatchJob: {
            http: {
              requestUri: '/applications/{applicationId}/batch-job',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['applicationId', 'batchJobIdentifier'],
              members: {
                applicationId: {
                  location: 'uri',
                  locationName: 'applicationId'
                },
                batchJobIdentifier: {
                  shape: 'S24'
                },
                jobParams: {
                  type: 'map',
                  key: {},
                  value: {}
                }
              }
            },
            output: {
              type: 'structure',
              required: ['executionId'],
              members: {
                executionId: {}
              }
            }
          },
          StopApplication: {
            http: {
              requestUri: '/applications/{applicationId}/stop',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['applicationId'],
              members: {
                applicationId: {
                  location: 'uri',
                  locationName: 'applicationId'
                },
                forceStop: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
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
                  shape: 'Sd'
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
            }
          },
          UpdateApplication: {
            http: {
              method: 'PATCH',
              requestUri: '/applications/{applicationId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['applicationId', 'currentApplicationVersion'],
              members: {
                applicationId: {
                  location: 'uri',
                  locationName: 'applicationId'
                },
                currentApplicationVersion: {
                  type: 'integer'
                },
                definition: {
                  shape: 'S6'
                },
                description: {}
              }
            },
            output: {
              type: 'structure',
              required: ['applicationVersion'],
              members: {
                applicationVersion: {
                  type: 'integer'
                }
              }
            }
          },
          UpdateEnvironment: {
            http: {
              method: 'PATCH',
              requestUri: '/environments/{environmentId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['environmentId'],
              members: {
                applyDuringMaintenanceWindow: {
                  type: 'boolean'
                },
                desiredCapacity: {
                  type: 'integer'
                },
                engineVersion: {},
                environmentId: {
                  location: 'uri',
                  locationName: 'environmentId'
                },
                forceUpdate: {
                  type: 'boolean'
                },
                instanceType: {},
                preferredMaintenanceWindow: {}
              }
            },
            output: {
              type: 'structure',
              required: ['environmentId'],
              members: {
                environmentId: {}
              }
            }
          }
        },
        shapes: {
          S6: {
            type: 'structure',
            members: {
              content: {},
              s3Location: {}
            },
            union: true
          },
          Sd: {
            type: 'map',
            key: {},
            value: {}
          },
          Sv: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['length', 'offset'],
              members: {
                allowDuplicates: {
                  type: 'boolean'
                },
                length: {
                  type: 'integer'
                },
                name: {},
                offset: {
                  type: 'integer'
                }
              }
            }
          },
          Sy: {
            type: 'structure',
            required: ['length', 'offset'],
            members: {
              length: {
                type: 'integer'
              },
              name: {},
              offset: {
                type: 'integer'
              }
            }
          },
          S16: {
            type: 'structure',
            required: ['desiredCapacity'],
            members: {
              desiredCapacity: {
                type: 'integer'
              }
            }
          },
          S19: {
            type: 'list',
            member: {}
          },
          S1a: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                efs: {
                  type: 'structure',
                  required: ['fileSystemId', 'mountPoint'],
                  members: {
                    fileSystemId: {
                      locationName: 'file-system-id'
                    },
                    mountPoint: {
                      locationName: 'mount-point'
                    }
                  }
                },
                fsx: {
                  type: 'structure',
                  required: ['fileSystemId', 'mountPoint'],
                  members: {
                    fileSystemId: {
                      locationName: 'file-system-id'
                    },
                    mountPoint: {
                      locationName: 'mount-point'
                    }
                  }
                }
              },
              union: true
            }
          },
          S1r: {
            type: 'structure',
            required: ['applicationVersion', 'creationTime', 'status'],
            members: {
              applicationVersion: {
                type: 'integer'
              },
              creationTime: {
                type: 'timestamp'
              },
              status: {},
              statusReason: {}
            }
          },
          S1t: {
            type: 'list',
            member: {}
          },
          S24: {
            type: 'structure',
            members: {
              fileBatchJobIdentifier: {
                type: 'structure',
                required: ['fileName'],
                members: {
                  fileName: {},
                  folderPath: {}
                }
              },
              restartBatchJobIdentifier: {
                type: 'structure',
                required: ['executionId', 'jobStepRestartMarker'],
                members: {
                  executionId: {},
                  jobStepRestartMarker: {
                    shape: 'S27'
                  }
                }
              },
              s3BatchJobIdentifier: {
                type: 'structure',
                required: ['bucket', 'identifier'],
                members: {
                  bucket: {},
                  identifier: {
                    type: 'structure',
                    members: {
                      fileName: {},
                      scriptName: {}
                    },
                    union: true
                  },
                  keyPrefix: {}
                }
              },
              scriptBatchJobIdentifier: {
                type: 'structure',
                required: ['scriptName'],
                members: {
                  scriptName: {}
                }
              }
            },
            union: true
          },
          S27: {
            type: 'structure',
            required: ['fromStep'],
            members: {
              fromProcStep: {},
              fromStep: {},
              toProcStep: {},
              toStep: {}
            }
          },
          S2o: {
            type: 'structure',
            required: ['failed', 'inProgress', 'pending', 'succeeded', 'total'],
            members: {
              failed: {
                type: 'integer'
              },
              inProgress: {
                type: 'integer'
              },
              pending: {
                type: 'integer'
              },
              succeeded: {
                type: 'integer'
              },
              total: {
                type: 'integer'
              }
            }
          },
          S33: {
            type: 'list',
            member: {}
          }
        }
      });
    }
  };
});
//# sourceMappingURL=827cf96cd42e9a077542e009bb4c04b11b5b2ad3.js.map