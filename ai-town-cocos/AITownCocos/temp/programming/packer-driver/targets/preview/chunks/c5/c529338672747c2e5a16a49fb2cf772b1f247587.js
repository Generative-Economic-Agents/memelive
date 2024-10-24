System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2019-09-01',
          endpointPrefix: 'braket',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceFullName: 'Braket',
          serviceId: 'Braket',
          signatureVersion: 'v4',
          signingName: 'braket',
          uid: 'braket-2019-09-01'
        },
        operations: {
          CancelJob: {
            http: {
              method: 'PUT',
              requestUri: '/job/{jobArn}/cancel',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['jobArn'],
              members: {
                jobArn: {
                  location: 'uri',
                  locationName: 'jobArn'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['cancellationStatus', 'jobArn'],
              members: {
                cancellationStatus: {},
                jobArn: {}
              }
            },
            idempotent: true
          },
          CancelQuantumTask: {
            http: {
              method: 'PUT',
              requestUri: '/quantum-task/{quantumTaskArn}/cancel',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['clientToken', 'quantumTaskArn'],
              members: {
                clientToken: {
                  idempotencyToken: true
                },
                quantumTaskArn: {
                  location: 'uri',
                  locationName: 'quantumTaskArn'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['cancellationStatus', 'quantumTaskArn'],
              members: {
                cancellationStatus: {},
                quantumTaskArn: {}
              }
            },
            idempotent: true
          },
          CreateJob: {
            http: {
              requestUri: '/job',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['algorithmSpecification', 'clientToken', 'deviceConfig', 'instanceConfig', 'jobName', 'outputDataConfig', 'roleArn'],
              members: {
                algorithmSpecification: {
                  shape: 'Sa'
                },
                associations: {
                  type: 'list',
                  member: {
                    shape: 'Si'
                  }
                },
                checkpointConfig: {
                  shape: 'Sl'
                },
                clientToken: {
                  idempotencyToken: true
                },
                deviceConfig: {
                  shape: 'Sn'
                },
                hyperParameters: {
                  shape: 'Sp'
                },
                inputDataConfig: {
                  type: 'list',
                  member: {
                    shape: 'Ss'
                  }
                },
                instanceConfig: {
                  shape: 'Sw'
                },
                jobName: {},
                outputDataConfig: {
                  shape: 'S11'
                },
                roleArn: {},
                stoppingCondition: {
                  shape: 'S14'
                },
                tags: {
                  shape: 'S16'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['jobArn'],
              members: {
                jobArn: {}
              }
            }
          },
          CreateQuantumTask: {
            http: {
              requestUri: '/quantum-task',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['action', 'clientToken', 'deviceArn', 'outputS3Bucket', 'outputS3KeyPrefix', 'shots'],
              members: {
                action: {
                  jsonvalue: true
                },
                associations: {
                  type: 'list',
                  member: {
                    shape: 'Si'
                  }
                },
                clientToken: {
                  idempotencyToken: true
                },
                deviceArn: {},
                deviceParameters: {
                  jsonvalue: true
                },
                jobToken: {},
                outputS3Bucket: {},
                outputS3KeyPrefix: {},
                shots: {
                  type: 'long'
                },
                tags: {
                  shape: 'S16'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['quantumTaskArn'],
              members: {
                quantumTaskArn: {}
              }
            }
          },
          GetDevice: {
            http: {
              method: 'GET',
              requestUri: '/device/{deviceArn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['deviceArn'],
              members: {
                deviceArn: {
                  location: 'uri',
                  locationName: 'deviceArn'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['deviceArn', 'deviceCapabilities', 'deviceName', 'deviceStatus', 'deviceType', 'providerName'],
              members: {
                deviceArn: {},
                deviceCapabilities: {
                  jsonvalue: true
                },
                deviceName: {},
                deviceQueueInfo: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['queue', 'queueSize'],
                    members: {
                      queue: {},
                      queuePriority: {},
                      queueSize: {}
                    }
                  }
                },
                deviceStatus: {},
                deviceType: {},
                providerName: {}
              }
            }
          },
          GetJob: {
            http: {
              method: 'GET',
              requestUri: '/job/{jobArn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['jobArn'],
              members: {
                additionalAttributeNames: {
                  location: 'querystring',
                  locationName: 'additionalAttributeNames',
                  type: 'list',
                  member: {}
                },
                jobArn: {
                  location: 'uri',
                  locationName: 'jobArn'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['algorithmSpecification', 'createdAt', 'instanceConfig', 'jobArn', 'jobName', 'outputDataConfig', 'roleArn', 'status'],
              members: {
                algorithmSpecification: {
                  shape: 'Sa'
                },
                associations: {
                  shape: 'S1u'
                },
                billableDuration: {
                  type: 'integer'
                },
                checkpointConfig: {
                  shape: 'Sl'
                },
                createdAt: {
                  shape: 'S1w'
                },
                deviceConfig: {
                  shape: 'Sn'
                },
                endedAt: {
                  shape: 'S1w'
                },
                events: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      eventType: {},
                      message: {},
                      timeOfEvent: {
                        shape: 'S1w'
                      }
                    }
                  }
                },
                failureReason: {},
                hyperParameters: {
                  shape: 'Sp'
                },
                inputDataConfig: {
                  type: 'list',
                  member: {
                    shape: 'Ss'
                  }
                },
                instanceConfig: {
                  shape: 'Sw'
                },
                jobArn: {},
                jobName: {},
                outputDataConfig: {
                  shape: 'S11'
                },
                queueInfo: {
                  type: 'structure',
                  required: ['position', 'queue'],
                  members: {
                    message: {},
                    position: {},
                    queue: {}
                  }
                },
                roleArn: {},
                startedAt: {
                  shape: 'S1w'
                },
                status: {},
                stoppingCondition: {
                  shape: 'S14'
                },
                tags: {
                  shape: 'S16'
                }
              }
            }
          },
          GetQuantumTask: {
            http: {
              method: 'GET',
              requestUri: '/quantum-task/{quantumTaskArn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['quantumTaskArn'],
              members: {
                additionalAttributeNames: {
                  location: 'querystring',
                  locationName: 'additionalAttributeNames',
                  type: 'list',
                  member: {}
                },
                quantumTaskArn: {
                  location: 'uri',
                  locationName: 'quantumTaskArn'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['createdAt', 'deviceArn', 'deviceParameters', 'outputS3Bucket', 'outputS3Directory', 'quantumTaskArn', 'shots', 'status'],
              members: {
                associations: {
                  shape: 'S1u'
                },
                createdAt: {
                  shape: 'S1w'
                },
                deviceArn: {},
                deviceParameters: {
                  jsonvalue: true
                },
                endedAt: {
                  shape: 'S1w'
                },
                failureReason: {},
                jobArn: {},
                outputS3Bucket: {},
                outputS3Directory: {},
                quantumTaskArn: {},
                queueInfo: {
                  type: 'structure',
                  required: ['position', 'queue'],
                  members: {
                    message: {},
                    position: {},
                    queue: {},
                    queuePriority: {}
                  }
                },
                shots: {
                  type: 'long'
                },
                status: {},
                tags: {
                  shape: 'S16'
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
                  shape: 'S16'
                }
              }
            }
          },
          SearchDevices: {
            http: {
              requestUri: '/devices',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['filters'],
              members: {
                filters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['name', 'values'],
                    members: {
                      name: {},
                      values: {
                        type: 'list',
                        member: {}
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
              required: ['devices'],
              members: {
                devices: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['deviceArn', 'deviceName', 'deviceStatus', 'deviceType', 'providerName'],
                    members: {
                      deviceArn: {},
                      deviceName: {},
                      deviceStatus: {},
                      deviceType: {},
                      providerName: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          SearchJobs: {
            http: {
              requestUri: '/jobs',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['filters'],
              members: {
                filters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['name', 'operator', 'values'],
                    members: {
                      name: {},
                      operator: {},
                      values: {
                        type: 'list',
                        member: {}
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
              required: ['jobs'],
              members: {
                jobs: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['createdAt', 'device', 'jobArn', 'jobName', 'status'],
                    members: {
                      createdAt: {
                        shape: 'S1w'
                      },
                      device: {},
                      endedAt: {
                        shape: 'S1w'
                      },
                      jobArn: {},
                      jobName: {},
                      startedAt: {
                        shape: 'S1w'
                      },
                      status: {},
                      tags: {
                        shape: 'S16'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          SearchQuantumTasks: {
            http: {
              requestUri: '/quantum-tasks',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['filters'],
              members: {
                filters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['name', 'operator', 'values'],
                    members: {
                      name: {},
                      operator: {},
                      values: {
                        type: 'list',
                        member: {}
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
              required: ['quantumTasks'],
              members: {
                nextToken: {},
                quantumTasks: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['createdAt', 'deviceArn', 'outputS3Bucket', 'outputS3Directory', 'quantumTaskArn', 'shots', 'status'],
                    members: {
                      createdAt: {
                        shape: 'S1w'
                      },
                      deviceArn: {},
                      endedAt: {
                        shape: 'S1w'
                      },
                      outputS3Bucket: {},
                      outputS3Directory: {},
                      quantumTaskArn: {},
                      shots: {
                        type: 'long'
                      },
                      status: {},
                      tags: {
                        shape: 'S16'
                      }
                    }
                  }
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
                  shape: 'S16'
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
          }
        },
        shapes: {
          Sa: {
            type: 'structure',
            members: {
              containerImage: {
                type: 'structure',
                required: ['uri'],
                members: {
                  uri: {}
                }
              },
              scriptModeConfig: {
                type: 'structure',
                required: ['entryPoint', 's3Uri'],
                members: {
                  compressionType: {},
                  entryPoint: {},
                  s3Uri: {}
                }
              }
            }
          },
          Si: {
            type: 'structure',
            required: ['arn', 'type'],
            members: {
              arn: {},
              type: {}
            }
          },
          Sl: {
            type: 'structure',
            required: ['s3Uri'],
            members: {
              localPath: {},
              s3Uri: {}
            }
          },
          Sn: {
            type: 'structure',
            required: ['device'],
            members: {
              device: {}
            }
          },
          Sp: {
            type: 'map',
            key: {},
            value: {}
          },
          Ss: {
            type: 'structure',
            required: ['channelName', 'dataSource'],
            members: {
              channelName: {},
              contentType: {},
              dataSource: {
                type: 'structure',
                required: ['s3DataSource'],
                members: {
                  s3DataSource: {
                    type: 'structure',
                    required: ['s3Uri'],
                    members: {
                      s3Uri: {}
                    }
                  }
                }
              }
            }
          },
          Sw: {
            type: 'structure',
            required: ['instanceType', 'volumeSizeInGb'],
            members: {
              instanceCount: {
                type: 'integer'
              },
              instanceType: {},
              volumeSizeInGb: {
                type: 'integer'
              }
            }
          },
          S11: {
            type: 'structure',
            required: ['s3Path'],
            members: {
              kmsKeyId: {},
              s3Path: {}
            }
          },
          S14: {
            type: 'structure',
            members: {
              maxRuntimeInSeconds: {
                type: 'integer'
              }
            }
          },
          S16: {
            type: 'map',
            key: {},
            value: {}
          },
          S1u: {
            type: 'list',
            member: {
              shape: 'Si'
            }
          },
          S1w: {
            type: 'timestamp',
            timestampFormat: 'iso8601'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=c529338672747c2e5a16a49fb2cf772b1f247587.js.map