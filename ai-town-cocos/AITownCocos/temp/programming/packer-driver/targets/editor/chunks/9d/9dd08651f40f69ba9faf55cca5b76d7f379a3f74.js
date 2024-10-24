System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2017-09-29',
          endpointPrefix: 'data.jobs.iot',
          protocol: 'rest-json',
          serviceFullName: 'AWS IoT Jobs Data Plane',
          serviceId: 'IoT Jobs Data Plane',
          signatureVersion: 'v4',
          signingName: 'iot-jobs-data',
          uid: 'iot-jobs-data-2017-09-29'
        },
        operations: {
          DescribeJobExecution: {
            http: {
              method: 'GET',
              requestUri: '/things/{thingName}/jobs/{jobId}'
            },
            input: {
              type: 'structure',
              required: ['jobId', 'thingName'],
              members: {
                jobId: {
                  location: 'uri',
                  locationName: 'jobId'
                },
                thingName: {
                  location: 'uri',
                  locationName: 'thingName'
                },
                includeJobDocument: {
                  location: 'querystring',
                  locationName: 'includeJobDocument',
                  type: 'boolean'
                },
                executionNumber: {
                  location: 'querystring',
                  locationName: 'executionNumber',
                  type: 'long'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                execution: {
                  shape: 'S7'
                }
              }
            }
          },
          GetPendingJobExecutions: {
            http: {
              method: 'GET',
              requestUri: '/things/{thingName}/jobs'
            },
            input: {
              type: 'structure',
              required: ['thingName'],
              members: {
                thingName: {
                  location: 'uri',
                  locationName: 'thingName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                inProgressJobs: {
                  shape: 'Sl'
                },
                queuedJobs: {
                  shape: 'Sl'
                }
              }
            }
          },
          StartNextPendingJobExecution: {
            http: {
              method: 'PUT',
              requestUri: '/things/{thingName}/jobs/$next'
            },
            input: {
              type: 'structure',
              required: ['thingName'],
              members: {
                thingName: {
                  location: 'uri',
                  locationName: 'thingName'
                },
                statusDetails: {
                  shape: 'Sa'
                },
                stepTimeoutInMinutes: {
                  type: 'long'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                execution: {
                  shape: 'S7'
                }
              }
            }
          },
          UpdateJobExecution: {
            http: {
              requestUri: '/things/{thingName}/jobs/{jobId}'
            },
            input: {
              type: 'structure',
              required: ['jobId', 'thingName', 'status'],
              members: {
                jobId: {
                  location: 'uri',
                  locationName: 'jobId'
                },
                thingName: {
                  location: 'uri',
                  locationName: 'thingName'
                },
                status: {},
                statusDetails: {
                  shape: 'Sa'
                },
                stepTimeoutInMinutes: {
                  type: 'long'
                },
                expectedVersion: {
                  type: 'long'
                },
                includeJobExecutionState: {
                  type: 'boolean'
                },
                includeJobDocument: {
                  type: 'boolean'
                },
                executionNumber: {
                  type: 'long'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                executionState: {
                  type: 'structure',
                  members: {
                    status: {},
                    statusDetails: {
                      shape: 'Sa'
                    },
                    versionNumber: {
                      type: 'long'
                    }
                  }
                },
                jobDocument: {}
              }
            }
          }
        },
        shapes: {
          S7: {
            type: 'structure',
            members: {
              jobId: {},
              thingName: {},
              status: {},
              statusDetails: {
                shape: 'Sa'
              },
              queuedAt: {
                type: 'long'
              },
              startedAt: {
                type: 'long'
              },
              lastUpdatedAt: {
                type: 'long'
              },
              approximateSecondsBeforeTimedOut: {
                type: 'long'
              },
              versionNumber: {
                type: 'long'
              },
              executionNumber: {
                type: 'long'
              },
              jobDocument: {}
            }
          },
          Sa: {
            type: 'map',
            key: {},
            value: {}
          },
          Sl: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                jobId: {},
                queuedAt: {
                  type: 'long'
                },
                startedAt: {
                  type: 'long'
                },
                lastUpdatedAt: {
                  type: 'long'
                },
                versionNumber: {
                  type: 'long'
                },
                executionNumber: {
                  type: 'long'
                }
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=9dd08651f40f69ba9faf55cca5b76d7f379a3f74.js.map