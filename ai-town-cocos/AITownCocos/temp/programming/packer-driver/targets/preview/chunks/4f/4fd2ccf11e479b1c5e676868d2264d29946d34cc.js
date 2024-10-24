System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2021-07-13',
          endpointPrefix: 'emr-serverless',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceFullName: 'EMR Serverless',
          serviceId: 'EMR Serverless',
          signatureVersion: 'v4',
          signingName: 'emr-serverless',
          uid: 'emr-serverless-2021-07-13'
        },
        operations: {
          CancelJobRun: {
            http: {
              method: 'DELETE',
              requestUri: '/applications/{applicationId}/jobruns/{jobRunId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['applicationId', 'jobRunId'],
              members: {
                applicationId: {
                  location: 'uri',
                  locationName: 'applicationId'
                },
                jobRunId: {
                  location: 'uri',
                  locationName: 'jobRunId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['applicationId', 'jobRunId'],
              members: {
                applicationId: {},
                jobRunId: {}
              }
            },
            idempotent: true
          },
          CreateApplication: {
            http: {
              requestUri: '/applications',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['releaseLabel', 'type', 'clientToken'],
              members: {
                name: {},
                releaseLabel: {},
                type: {},
                clientToken: {
                  idempotencyToken: true
                },
                initialCapacity: {
                  shape: 'Sa'
                },
                maximumCapacity: {
                  shape: 'Sj'
                },
                tags: {
                  shape: 'Sk'
                },
                autoStartConfiguration: {
                  shape: 'Sn'
                },
                autoStopConfiguration: {
                  shape: 'Sp'
                },
                networkConfiguration: {
                  shape: 'Sr'
                },
                architecture: {},
                imageConfiguration: {
                  shape: 'Sx'
                },
                workerTypeSpecifications: {
                  shape: 'Sz'
                },
                runtimeConfiguration: {
                  shape: 'S11'
                },
                monitoringConfiguration: {
                  shape: 'S17'
                },
                interactiveConfiguration: {
                  shape: 'S1k'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['applicationId', 'arn'],
              members: {
                applicationId: {},
                name: {},
                arn: {}
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
              required: ['application'],
              members: {
                application: {
                  shape: 'S1r'
                }
              }
            }
          },
          GetDashboardForJobRun: {
            http: {
              method: 'GET',
              requestUri: '/applications/{applicationId}/jobruns/{jobRunId}/dashboard',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['applicationId', 'jobRunId'],
              members: {
                applicationId: {
                  location: 'uri',
                  locationName: 'applicationId'
                },
                jobRunId: {
                  location: 'uri',
                  locationName: 'jobRunId'
                },
                attempt: {
                  location: 'querystring',
                  locationName: 'attempt',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                url: {}
              }
            }
          },
          GetJobRun: {
            http: {
              method: 'GET',
              requestUri: '/applications/{applicationId}/jobruns/{jobRunId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['applicationId', 'jobRunId'],
              members: {
                applicationId: {
                  location: 'uri',
                  locationName: 'applicationId'
                },
                jobRunId: {
                  location: 'uri',
                  locationName: 'jobRunId'
                },
                attempt: {
                  location: 'querystring',
                  locationName: 'attempt',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['jobRun'],
              members: {
                jobRun: {
                  type: 'structure',
                  required: ['applicationId', 'jobRunId', 'arn', 'createdBy', 'createdAt', 'updatedAt', 'executionRole', 'state', 'stateDetails', 'releaseLabel', 'jobDriver'],
                  members: {
                    applicationId: {},
                    jobRunId: {},
                    name: {},
                    arn: {},
                    createdBy: {},
                    createdAt: {
                      type: 'timestamp'
                    },
                    updatedAt: {
                      type: 'timestamp'
                    },
                    executionRole: {},
                    state: {},
                    stateDetails: {},
                    releaseLabel: {},
                    configurationOverrides: {
                      shape: 'S2a'
                    },
                    jobDriver: {
                      shape: 'S2b'
                    },
                    tags: {
                      shape: 'Sk'
                    },
                    totalResourceUtilization: {
                      type: 'structure',
                      members: {
                        vCPUHour: {
                          type: 'double'
                        },
                        memoryGBHour: {
                          type: 'double'
                        },
                        storageGBHour: {
                          type: 'double'
                        }
                      }
                    },
                    networkConfiguration: {
                      shape: 'Sr'
                    },
                    totalExecutionDurationSeconds: {
                      type: 'integer'
                    },
                    executionTimeoutMinutes: {
                      type: 'long'
                    },
                    billedResourceUtilization: {
                      type: 'structure',
                      members: {
                        vCPUHour: {
                          type: 'double'
                        },
                        memoryGBHour: {
                          type: 'double'
                        },
                        storageGBHour: {
                          type: 'double'
                        }
                      }
                    },
                    mode: {},
                    retryPolicy: {
                      shape: 'S2r'
                    },
                    attempt: {
                      type: 'integer'
                    },
                    attemptCreatedAt: {
                      type: 'timestamp'
                    },
                    attemptUpdatedAt: {
                      type: 'timestamp'
                    }
                  }
                }
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
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                maxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                states: {
                  location: 'querystring',
                  locationName: 'states',
                  type: 'list',
                  member: {}
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
                    required: ['id', 'arn', 'releaseLabel', 'type', 'state', 'createdAt', 'updatedAt'],
                    members: {
                      id: {},
                      name: {},
                      arn: {},
                      releaseLabel: {},
                      type: {},
                      state: {},
                      stateDetails: {},
                      createdAt: {
                        type: 'timestamp'
                      },
                      updatedAt: {
                        type: 'timestamp'
                      },
                      architecture: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListJobRunAttempts: {
            http: {
              method: 'GET',
              requestUri: '/applications/{applicationId}/jobruns/{jobRunId}/attempts',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['applicationId', 'jobRunId'],
              members: {
                applicationId: {
                  location: 'uri',
                  locationName: 'applicationId'
                },
                jobRunId: {
                  location: 'uri',
                  locationName: 'jobRunId'
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
              required: ['jobRunAttempts'],
              members: {
                jobRunAttempts: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['applicationId', 'id', 'arn', 'createdBy', 'jobCreatedAt', 'createdAt', 'updatedAt', 'executionRole', 'state', 'stateDetails', 'releaseLabel'],
                    members: {
                      applicationId: {},
                      id: {},
                      name: {},
                      mode: {},
                      arn: {},
                      createdBy: {},
                      jobCreatedAt: {
                        type: 'timestamp'
                      },
                      createdAt: {
                        type: 'timestamp'
                      },
                      updatedAt: {
                        type: 'timestamp'
                      },
                      executionRole: {},
                      state: {},
                      stateDetails: {},
                      releaseLabel: {},
                      type: {},
                      attempt: {
                        type: 'integer'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListJobRuns: {
            http: {
              method: 'GET',
              requestUri: '/applications/{applicationId}/jobruns',
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
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                maxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                createdAtAfter: {
                  location: 'querystring',
                  locationName: 'createdAtAfter',
                  type: 'timestamp'
                },
                createdAtBefore: {
                  location: 'querystring',
                  locationName: 'createdAtBefore',
                  type: 'timestamp'
                },
                states: {
                  location: 'querystring',
                  locationName: 'states',
                  type: 'list',
                  member: {}
                },
                mode: {
                  location: 'querystring',
                  locationName: 'mode'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['jobRuns'],
              members: {
                jobRuns: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['applicationId', 'id', 'arn', 'createdBy', 'createdAt', 'updatedAt', 'executionRole', 'state', 'stateDetails', 'releaseLabel'],
                    members: {
                      applicationId: {},
                      id: {},
                      name: {},
                      mode: {},
                      arn: {},
                      createdBy: {},
                      createdAt: {
                        type: 'timestamp'
                      },
                      updatedAt: {
                        type: 'timestamp'
                      },
                      executionRole: {},
                      state: {},
                      stateDetails: {},
                      releaseLabel: {},
                      type: {},
                      attempt: {
                        type: 'integer'
                      },
                      attemptCreatedAt: {
                        type: 'timestamp'
                      },
                      attemptUpdatedAt: {
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
                  shape: 'Sk'
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
            },
            idempotent: true
          },
          StartJobRun: {
            http: {
              requestUri: '/applications/{applicationId}/jobruns',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['applicationId', 'clientToken', 'executionRoleArn'],
              members: {
                applicationId: {
                  location: 'uri',
                  locationName: 'applicationId'
                },
                clientToken: {
                  idempotencyToken: true
                },
                executionRoleArn: {},
                jobDriver: {
                  shape: 'S2b'
                },
                configurationOverrides: {
                  shape: 'S2a'
                },
                tags: {
                  shape: 'Sk'
                },
                executionTimeoutMinutes: {
                  type: 'long'
                },
                name: {},
                mode: {},
                retryPolicy: {
                  shape: 'S2r'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['applicationId', 'jobRunId', 'arn'],
              members: {
                applicationId: {},
                jobRunId: {},
                arn: {}
              }
            },
            idempotent: true
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
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
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
                  shape: 'Sk'
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
            },
            idempotent: true
          },
          UpdateApplication: {
            http: {
              method: 'PATCH',
              requestUri: '/applications/{applicationId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['applicationId', 'clientToken'],
              members: {
                applicationId: {
                  location: 'uri',
                  locationName: 'applicationId'
                },
                clientToken: {
                  idempotencyToken: true
                },
                initialCapacity: {
                  shape: 'Sa'
                },
                maximumCapacity: {
                  shape: 'Sj'
                },
                autoStartConfiguration: {
                  shape: 'Sn'
                },
                autoStopConfiguration: {
                  shape: 'Sp'
                },
                networkConfiguration: {
                  shape: 'Sr'
                },
                architecture: {},
                imageConfiguration: {
                  shape: 'Sx'
                },
                workerTypeSpecifications: {
                  shape: 'Sz'
                },
                interactiveConfiguration: {
                  shape: 'S1k'
                },
                releaseLabel: {},
                runtimeConfiguration: {
                  shape: 'S11'
                },
                monitoringConfiguration: {
                  shape: 'S17'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['application'],
              members: {
                application: {
                  shape: 'S1r'
                }
              }
            }
          }
        },
        shapes: {
          Sa: {
            type: 'map',
            key: {},
            value: {
              type: 'structure',
              required: ['workerCount'],
              members: {
                workerCount: {
                  type: 'long'
                },
                workerConfiguration: {
                  type: 'structure',
                  required: ['cpu', 'memory'],
                  members: {
                    cpu: {},
                    memory: {},
                    disk: {},
                    diskType: {}
                  }
                }
              }
            }
          },
          Sj: {
            type: 'structure',
            required: ['cpu', 'memory'],
            members: {
              cpu: {},
              memory: {},
              disk: {}
            }
          },
          Sk: {
            type: 'map',
            key: {},
            value: {}
          },
          Sn: {
            type: 'structure',
            members: {
              enabled: {
                type: 'boolean'
              }
            }
          },
          Sp: {
            type: 'structure',
            members: {
              enabled: {
                type: 'boolean'
              },
              idleTimeoutMinutes: {
                type: 'integer'
              }
            }
          },
          Sr: {
            type: 'structure',
            members: {
              subnetIds: {
                type: 'list',
                member: {}
              },
              securityGroupIds: {
                type: 'list',
                member: {}
              }
            }
          },
          Sx: {
            type: 'structure',
            members: {
              imageUri: {}
            }
          },
          Sz: {
            type: 'map',
            key: {},
            value: {
              type: 'structure',
              members: {
                imageConfiguration: {
                  shape: 'Sx'
                }
              }
            }
          },
          S11: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['classification'],
              members: {
                classification: {},
                properties: {
                  type: 'map',
                  key: {},
                  value: {},
                  sensitive: true
                },
                configurations: {
                  shape: 'S11'
                }
              }
            }
          },
          S17: {
            type: 'structure',
            members: {
              s3MonitoringConfiguration: {
                type: 'structure',
                members: {
                  logUri: {},
                  encryptionKeyArn: {}
                }
              },
              managedPersistenceMonitoringConfiguration: {
                type: 'structure',
                members: {
                  enabled: {
                    type: 'boolean'
                  },
                  encryptionKeyArn: {}
                }
              },
              cloudWatchLoggingConfiguration: {
                type: 'structure',
                required: ['enabled'],
                members: {
                  enabled: {
                    type: 'boolean'
                  },
                  logGroupName: {},
                  logStreamNamePrefix: {},
                  encryptionKeyArn: {},
                  logTypes: {
                    type: 'map',
                    key: {},
                    value: {
                      type: 'list',
                      member: {}
                    }
                  }
                }
              },
              prometheusMonitoringConfiguration: {
                type: 'structure',
                members: {
                  remoteWriteUrl: {}
                }
              }
            }
          },
          S1k: {
            type: 'structure',
            members: {
              studioEnabled: {
                type: 'boolean'
              },
              livyEndpointEnabled: {
                type: 'boolean'
              }
            }
          },
          S1r: {
            type: 'structure',
            required: ['applicationId', 'arn', 'releaseLabel', 'type', 'state', 'createdAt', 'updatedAt'],
            members: {
              applicationId: {},
              name: {},
              arn: {},
              releaseLabel: {},
              type: {},
              state: {},
              stateDetails: {},
              initialCapacity: {
                shape: 'Sa'
              },
              maximumCapacity: {
                shape: 'Sj'
              },
              createdAt: {
                type: 'timestamp'
              },
              updatedAt: {
                type: 'timestamp'
              },
              tags: {
                shape: 'Sk'
              },
              autoStartConfiguration: {
                shape: 'Sn'
              },
              autoStopConfiguration: {
                shape: 'Sp'
              },
              networkConfiguration: {
                shape: 'Sr'
              },
              architecture: {},
              imageConfiguration: {
                shape: 'S1v'
              },
              workerTypeSpecifications: {
                type: 'map',
                key: {},
                value: {
                  type: 'structure',
                  members: {
                    imageConfiguration: {
                      shape: 'S1v'
                    }
                  }
                }
              },
              runtimeConfiguration: {
                shape: 'S11'
              },
              monitoringConfiguration: {
                shape: 'S17'
              },
              interactiveConfiguration: {
                shape: 'S1k'
              }
            }
          },
          S1v: {
            type: 'structure',
            required: ['imageUri'],
            members: {
              imageUri: {},
              resolvedImageDigest: {}
            }
          },
          S2a: {
            type: 'structure',
            members: {
              applicationConfiguration: {
                shape: 'S11'
              },
              monitoringConfiguration: {
                shape: 'S17'
              }
            }
          },
          S2b: {
            type: 'structure',
            members: {
              sparkSubmit: {
                type: 'structure',
                required: ['entryPoint'],
                members: {
                  entryPoint: {
                    type: 'string',
                    sensitive: true
                  },
                  entryPointArguments: {
                    type: 'list',
                    member: {
                      type: 'string',
                      sensitive: true
                    }
                  },
                  sparkSubmitParameters: {
                    type: 'string',
                    sensitive: true
                  }
                }
              },
              hive: {
                type: 'structure',
                required: ['query'],
                members: {
                  query: {
                    type: 'string',
                    sensitive: true
                  },
                  initQueryFile: {
                    type: 'string',
                    sensitive: true
                  },
                  parameters: {
                    type: 'string',
                    sensitive: true
                  }
                }
              }
            },
            union: true
          },
          S2r: {
            type: 'structure',
            members: {
              maxAttempts: {
                type: 'integer'
              },
              maxFailedAttemptsPerHour: {
                type: 'integer'
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=4fd2ccf11e479b1c5e676868d2264d29946d34cc.js.map