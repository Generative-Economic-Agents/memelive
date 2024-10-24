System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2021-02-01',
          endpointPrefix: 'evidently',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceFullName: 'Amazon CloudWatch Evidently',
          serviceId: 'Evidently',
          signatureVersion: 'v4',
          signingName: 'evidently',
          uid: 'evidently-2021-02-01'
        },
        operations: {
          BatchEvaluateFeature: {
            http: {
              requestUri: '/projects/{project}/evaluations',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['project', 'requests'],
              members: {
                project: {
                  location: 'uri',
                  locationName: 'project'
                },
                requests: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['entityId', 'feature'],
                    members: {
                      entityId: {},
                      evaluationContext: {
                        jsonvalue: true
                      },
                      feature: {}
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                results: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['entityId', 'feature'],
                    members: {
                      details: {
                        jsonvalue: true
                      },
                      entityId: {},
                      feature: {},
                      project: {},
                      reason: {},
                      value: {
                        shape: 'Sd'
                      },
                      variation: {}
                    }
                  }
                }
              }
            },
            endpoint: {
              hostPrefix: 'dataplane.'
            }
          },
          CreateExperiment: {
            http: {
              requestUri: '/projects/{project}/experiments',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['metricGoals', 'name', 'project', 'treatments'],
              members: {
                description: {},
                metricGoals: {
                  shape: 'Sk'
                },
                name: {},
                onlineAbConfig: {
                  shape: 'St'
                },
                project: {
                  location: 'uri',
                  locationName: 'project'
                },
                randomizationSalt: {},
                samplingRate: {
                  type: 'long'
                },
                segment: {},
                tags: {
                  shape: 'Sz'
                },
                treatments: {
                  shape: 'S12'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['experiment'],
              members: {
                experiment: {
                  shape: 'S16'
                }
              }
            },
            idempotent: true
          },
          CreateFeature: {
            http: {
              requestUri: '/projects/{project}/features',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['name', 'project', 'variations'],
              members: {
                defaultVariation: {},
                description: {},
                entityOverrides: {
                  shape: 'S1n'
                },
                evaluationStrategy: {},
                name: {},
                project: {
                  location: 'uri',
                  locationName: 'project'
                },
                tags: {
                  shape: 'Sz'
                },
                variations: {
                  shape: 'S1p'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                feature: {
                  shape: 'S1s'
                }
              }
            }
          },
          CreateLaunch: {
            http: {
              requestUri: '/projects/{project}/launches',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['groups', 'name', 'project'],
              members: {
                description: {},
                groups: {
                  shape: 'S23'
                },
                metricMonitors: {
                  shape: 'S26'
                },
                name: {},
                project: {
                  location: 'uri',
                  locationName: 'project'
                },
                randomizationSalt: {},
                scheduledSplitsConfig: {
                  shape: 'S29'
                },
                tags: {
                  shape: 'Sz'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['launch'],
              members: {
                launch: {
                  shape: 'S2h'
                }
              }
            }
          },
          CreateProject: {
            http: {
              requestUri: '/projects',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['name'],
              members: {
                appConfigResource: {
                  shape: 'S2u'
                },
                dataDelivery: {
                  type: 'structure',
                  members: {
                    cloudWatchLogs: {
                      shape: 'S2x'
                    },
                    s3Destination: {
                      shape: 'S2z'
                    }
                  }
                },
                description: {},
                name: {},
                tags: {
                  shape: 'Sz'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['project'],
              members: {
                project: {
                  shape: 'S34'
                }
              }
            }
          },
          CreateSegment: {
            http: {
              requestUri: '/segments',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['name', 'pattern'],
              members: {
                description: {},
                name: {},
                pattern: {
                  jsonvalue: true
                },
                tags: {
                  shape: 'Sz'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['segment'],
              members: {
                segment: {
                  shape: 'S3e'
                }
              }
            }
          },
          DeleteExperiment: {
            http: {
              method: 'DELETE',
              requestUri: '/projects/{project}/experiments/{experiment}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['experiment', 'project'],
              members: {
                experiment: {
                  location: 'uri',
                  locationName: 'experiment'
                },
                project: {
                  location: 'uri',
                  locationName: 'project'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeleteFeature: {
            http: {
              method: 'DELETE',
              requestUri: '/projects/{project}/features/{feature}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['feature', 'project'],
              members: {
                feature: {
                  location: 'uri',
                  locationName: 'feature'
                },
                project: {
                  location: 'uri',
                  locationName: 'project'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeleteLaunch: {
            http: {
              method: 'DELETE',
              requestUri: '/projects/{project}/launches/{launch}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['launch', 'project'],
              members: {
                launch: {
                  location: 'uri',
                  locationName: 'launch'
                },
                project: {
                  location: 'uri',
                  locationName: 'project'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeleteProject: {
            http: {
              method: 'DELETE',
              requestUri: '/projects/{project}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['project'],
              members: {
                project: {
                  location: 'uri',
                  locationName: 'project'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeleteSegment: {
            http: {
              method: 'DELETE',
              requestUri: '/segments/{segment}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['segment'],
              members: {
                segment: {
                  location: 'uri',
                  locationName: 'segment'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          EvaluateFeature: {
            http: {
              requestUri: '/projects/{project}/evaluations/{feature}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['entityId', 'feature', 'project'],
              members: {
                entityId: {},
                evaluationContext: {
                  jsonvalue: true
                },
                feature: {
                  location: 'uri',
                  locationName: 'feature'
                },
                project: {
                  location: 'uri',
                  locationName: 'project'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                details: {
                  jsonvalue: true
                },
                reason: {},
                value: {
                  shape: 'Sd'
                },
                variation: {}
              }
            },
            endpoint: {
              hostPrefix: 'dataplane.'
            }
          },
          GetExperiment: {
            http: {
              method: 'GET',
              requestUri: '/projects/{project}/experiments/{experiment}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['experiment', 'project'],
              members: {
                experiment: {
                  location: 'uri',
                  locationName: 'experiment'
                },
                project: {
                  location: 'uri',
                  locationName: 'project'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                experiment: {
                  shape: 'S16'
                }
              }
            }
          },
          GetExperimentResults: {
            http: {
              requestUri: '/projects/{project}/experiments/{experiment}/results',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['experiment', 'metricNames', 'project', 'treatmentNames'],
              members: {
                baseStat: {},
                endTime: {
                  type: 'timestamp'
                },
                experiment: {
                  location: 'uri',
                  locationName: 'experiment'
                },
                metricNames: {
                  type: 'list',
                  member: {}
                },
                period: {
                  type: 'long'
                },
                project: {
                  location: 'uri',
                  locationName: 'project'
                },
                reportNames: {
                  type: 'list',
                  member: {}
                },
                resultStats: {
                  type: 'list',
                  member: {}
                },
                startTime: {
                  type: 'timestamp'
                },
                treatmentNames: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                details: {},
                reports: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      content: {
                        jsonvalue: true
                      },
                      metricName: {},
                      reportName: {},
                      treatmentName: {}
                    }
                  }
                },
                resultsData: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      metricName: {},
                      resultStat: {},
                      treatmentName: {},
                      values: {
                        type: 'list',
                        member: {
                          type: 'double'
                        }
                      }
                    }
                  }
                },
                timestamps: {
                  type: 'list',
                  member: {
                    type: 'timestamp'
                  }
                }
              }
            }
          },
          GetFeature: {
            http: {
              method: 'GET',
              requestUri: '/projects/{project}/features/{feature}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['feature', 'project'],
              members: {
                feature: {
                  location: 'uri',
                  locationName: 'feature'
                },
                project: {
                  location: 'uri',
                  locationName: 'project'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['feature'],
              members: {
                feature: {
                  shape: 'S1s'
                }
              }
            }
          },
          GetLaunch: {
            http: {
              method: 'GET',
              requestUri: '/projects/{project}/launches/{launch}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['launch', 'project'],
              members: {
                launch: {
                  location: 'uri',
                  locationName: 'launch'
                },
                project: {
                  location: 'uri',
                  locationName: 'project'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                launch: {
                  shape: 'S2h'
                }
              }
            }
          },
          GetProject: {
            http: {
              method: 'GET',
              requestUri: '/projects/{project}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['project'],
              members: {
                project: {
                  location: 'uri',
                  locationName: 'project'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['project'],
              members: {
                project: {
                  shape: 'S34'
                }
              }
            }
          },
          GetSegment: {
            http: {
              method: 'GET',
              requestUri: '/segments/{segment}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['segment'],
              members: {
                segment: {
                  location: 'uri',
                  locationName: 'segment'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['segment'],
              members: {
                segment: {
                  shape: 'S3e'
                }
              }
            }
          },
          ListExperiments: {
            http: {
              method: 'GET',
              requestUri: '/projects/{project}/experiments',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['project'],
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
                project: {
                  location: 'uri',
                  locationName: 'project'
                },
                status: {
                  location: 'querystring',
                  locationName: 'status'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                experiments: {
                  type: 'list',
                  member: {
                    shape: 'S16'
                  }
                },
                nextToken: {}
              }
            }
          },
          ListFeatures: {
            http: {
              method: 'GET',
              requestUri: '/projects/{project}/features',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['project'],
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
                project: {
                  location: 'uri',
                  locationName: 'project'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                features: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['arn', 'createdTime', 'evaluationStrategy', 'lastUpdatedTime', 'name', 'status'],
                    members: {
                      arn: {},
                      createdTime: {
                        type: 'timestamp'
                      },
                      defaultVariation: {},
                      evaluationRules: {
                        shape: 'S1u'
                      },
                      evaluationStrategy: {},
                      lastUpdatedTime: {
                        type: 'timestamp'
                      },
                      name: {},
                      project: {},
                      status: {},
                      tags: {
                        shape: 'Sz'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListLaunches: {
            http: {
              method: 'GET',
              requestUri: '/projects/{project}/launches',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['project'],
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
                project: {
                  location: 'uri',
                  locationName: 'project'
                },
                status: {
                  location: 'querystring',
                  locationName: 'status'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                launches: {
                  type: 'list',
                  member: {
                    shape: 'S2h'
                  }
                },
                nextToken: {}
              }
            }
          },
          ListProjects: {
            http: {
              method: 'GET',
              requestUri: '/projects',
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
                projects: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['arn', 'createdTime', 'lastUpdatedTime', 'name', 'status'],
                    members: {
                      activeExperimentCount: {
                        type: 'long'
                      },
                      activeLaunchCount: {
                        type: 'long'
                      },
                      arn: {},
                      createdTime: {
                        type: 'timestamp'
                      },
                      description: {},
                      experimentCount: {
                        type: 'long'
                      },
                      featureCount: {
                        type: 'long'
                      },
                      lastUpdatedTime: {
                        type: 'timestamp'
                      },
                      launchCount: {
                        type: 'long'
                      },
                      name: {},
                      status: {},
                      tags: {
                        shape: 'Sz'
                      }
                    }
                  }
                }
              }
            }
          },
          ListSegmentReferences: {
            http: {
              method: 'GET',
              requestUri: '/segments/{segment}/references',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['segment', 'type'],
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
                segment: {
                  location: 'uri',
                  locationName: 'segment'
                },
                type: {
                  location: 'querystring',
                  locationName: 'type'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                nextToken: {},
                referencedBy: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['name', 'type'],
                    members: {
                      arn: {},
                      endTime: {},
                      lastUpdatedOn: {},
                      name: {},
                      startTime: {},
                      status: {},
                      type: {}
                    }
                  }
                }
              }
            }
          },
          ListSegments: {
            http: {
              method: 'GET',
              requestUri: '/segments',
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
                segments: {
                  type: 'list',
                  member: {
                    shape: 'S3e'
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
                  shape: 'Sz'
                }
              }
            }
          },
          PutProjectEvents: {
            http: {
              requestUri: '/events/projects/{project}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['events', 'project'],
              members: {
                events: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['data', 'timestamp', 'type'],
                    members: {
                      data: {
                        jsonvalue: true
                      },
                      timestamp: {
                        type: 'timestamp'
                      },
                      type: {}
                    }
                  }
                },
                project: {
                  location: 'uri',
                  locationName: 'project'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                eventResults: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      errorCode: {},
                      errorMessage: {},
                      eventId: {}
                    }
                  }
                },
                failedEventCount: {
                  type: 'integer'
                }
              }
            },
            endpoint: {
              hostPrefix: 'dataplane.'
            }
          },
          StartExperiment: {
            http: {
              requestUri: '/projects/{project}/experiments/{experiment}/start',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['analysisCompleteTime', 'experiment', 'project'],
              members: {
                analysisCompleteTime: {
                  type: 'timestamp'
                },
                experiment: {
                  location: 'uri',
                  locationName: 'experiment'
                },
                project: {
                  location: 'uri',
                  locationName: 'project'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                startedTime: {
                  type: 'timestamp'
                }
              }
            }
          },
          StartLaunch: {
            http: {
              requestUri: '/projects/{project}/launches/{launch}/start',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['launch', 'project'],
              members: {
                launch: {
                  location: 'uri',
                  locationName: 'launch'
                },
                project: {
                  location: 'uri',
                  locationName: 'project'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['launch'],
              members: {
                launch: {
                  shape: 'S2h'
                }
              }
            }
          },
          StopExperiment: {
            http: {
              requestUri: '/projects/{project}/experiments/{experiment}/cancel',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['experiment', 'project'],
              members: {
                desiredState: {},
                experiment: {
                  location: 'uri',
                  locationName: 'experiment'
                },
                project: {
                  location: 'uri',
                  locationName: 'project'
                },
                reason: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                endedTime: {
                  type: 'timestamp'
                }
              }
            }
          },
          StopLaunch: {
            http: {
              requestUri: '/projects/{project}/launches/{launch}/cancel',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['launch', 'project'],
              members: {
                desiredState: {},
                launch: {
                  location: 'uri',
                  locationName: 'launch'
                },
                project: {
                  location: 'uri',
                  locationName: 'project'
                },
                reason: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                endedTime: {
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
                  shape: 'Sz'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          TestSegmentPattern: {
            http: {
              requestUri: '/test-segment-pattern',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['pattern', 'payload'],
              members: {
                pattern: {
                  jsonvalue: true
                },
                payload: {
                  jsonvalue: true
                }
              }
            },
            output: {
              type: 'structure',
              required: ['match'],
              members: {
                match: {
                  type: 'boolean'
                }
              }
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
          UpdateExperiment: {
            http: {
              method: 'PATCH',
              requestUri: '/projects/{project}/experiments/{experiment}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['experiment', 'project'],
              members: {
                description: {},
                experiment: {
                  location: 'uri',
                  locationName: 'experiment'
                },
                metricGoals: {
                  shape: 'Sk'
                },
                onlineAbConfig: {
                  shape: 'St'
                },
                project: {
                  location: 'uri',
                  locationName: 'project'
                },
                randomizationSalt: {},
                removeSegment: {
                  type: 'boolean'
                },
                samplingRate: {
                  type: 'long'
                },
                segment: {},
                treatments: {
                  shape: 'S12'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['experiment'],
              members: {
                experiment: {
                  shape: 'S16'
                }
              }
            }
          },
          UpdateFeature: {
            http: {
              method: 'PATCH',
              requestUri: '/projects/{project}/features/{feature}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['feature', 'project'],
              members: {
                addOrUpdateVariations: {
                  shape: 'S1p'
                },
                defaultVariation: {},
                description: {},
                entityOverrides: {
                  shape: 'S1n'
                },
                evaluationStrategy: {},
                feature: {
                  location: 'uri',
                  locationName: 'feature'
                },
                project: {
                  location: 'uri',
                  locationName: 'project'
                },
                removeVariations: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              required: ['feature'],
              members: {
                feature: {
                  shape: 'S1s'
                }
              }
            }
          },
          UpdateLaunch: {
            http: {
              method: 'PATCH',
              requestUri: '/projects/{project}/launches/{launch}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['launch', 'project'],
              members: {
                description: {},
                groups: {
                  shape: 'S23'
                },
                launch: {
                  location: 'uri',
                  locationName: 'launch'
                },
                metricMonitors: {
                  shape: 'S26'
                },
                project: {
                  location: 'uri',
                  locationName: 'project'
                },
                randomizationSalt: {},
                scheduledSplitsConfig: {
                  shape: 'S29'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['launch'],
              members: {
                launch: {
                  shape: 'S2h'
                }
              }
            }
          },
          UpdateProject: {
            http: {
              method: 'PATCH',
              requestUri: '/projects/{project}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['project'],
              members: {
                appConfigResource: {
                  shape: 'S2u'
                },
                description: {},
                project: {
                  location: 'uri',
                  locationName: 'project'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['project'],
              members: {
                project: {
                  shape: 'S34'
                }
              }
            }
          },
          UpdateProjectDataDelivery: {
            http: {
              method: 'PATCH',
              requestUri: '/projects/{project}/data-delivery',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['project'],
              members: {
                cloudWatchLogs: {
                  shape: 'S2x'
                },
                project: {
                  location: 'uri',
                  locationName: 'project'
                },
                s3Destination: {
                  shape: 'S2z'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['project'],
              members: {
                project: {
                  shape: 'S34'
                }
              }
            }
          }
        },
        shapes: {
          Sd: {
            type: 'structure',
            members: {
              boolValue: {
                type: 'boolean'
              },
              doubleValue: {
                type: 'double'
              },
              longValue: {
                type: 'long'
              },
              stringValue: {}
            },
            union: true
          },
          Sk: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['metricDefinition'],
              members: {
                desiredChange: {},
                metricDefinition: {
                  shape: 'Sn'
                }
              }
            }
          },
          Sn: {
            type: 'structure',
            required: ['entityIdKey', 'name', 'valueKey'],
            members: {
              entityIdKey: {},
              eventPattern: {
                jsonvalue: true
              },
              name: {},
              unitLabel: {},
              valueKey: {}
            }
          },
          St: {
            type: 'structure',
            members: {
              controlTreatmentName: {},
              treatmentWeights: {
                shape: 'Sv'
              }
            }
          },
          Sv: {
            type: 'map',
            key: {},
            value: {
              type: 'long'
            }
          },
          Sz: {
            type: 'map',
            key: {},
            value: {}
          },
          S12: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['feature', 'name', 'variation'],
              members: {
                description: {},
                feature: {},
                name: {},
                variation: {}
              }
            }
          },
          S16: {
            type: 'structure',
            required: ['arn', 'createdTime', 'lastUpdatedTime', 'name', 'status', 'type'],
            members: {
              arn: {},
              createdTime: {
                type: 'timestamp'
              },
              description: {},
              execution: {
                type: 'structure',
                members: {
                  endedTime: {
                    type: 'timestamp'
                  },
                  startedTime: {
                    type: 'timestamp'
                  }
                }
              },
              lastUpdatedTime: {
                type: 'timestamp'
              },
              metricGoals: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['metricDefinition'],
                  members: {
                    desiredChange: {},
                    metricDefinition: {
                      shape: 'S1c'
                    }
                  }
                }
              },
              name: {},
              onlineAbDefinition: {
                type: 'structure',
                members: {
                  controlTreatmentName: {},
                  treatmentWeights: {
                    shape: 'Sv'
                  }
                }
              },
              project: {},
              randomizationSalt: {},
              samplingRate: {
                type: 'long'
              },
              schedule: {
                type: 'structure',
                members: {
                  analysisCompleteTime: {
                    type: 'timestamp'
                  }
                }
              },
              segment: {},
              status: {},
              statusReason: {},
              tags: {
                shape: 'Sz'
              },
              treatments: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['name'],
                  members: {
                    description: {},
                    featureVariations: {
                      shape: 'S1k'
                    },
                    name: {}
                  }
                }
              },
              type: {}
            }
          },
          S1c: {
            type: 'structure',
            members: {
              entityIdKey: {},
              eventPattern: {
                jsonvalue: true
              },
              name: {},
              unitLabel: {},
              valueKey: {}
            }
          },
          S1k: {
            type: 'map',
            key: {},
            value: {}
          },
          S1n: {
            type: 'map',
            key: {},
            value: {}
          },
          S1p: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['name', 'value'],
              members: {
                name: {},
                value: {
                  shape: 'Sd'
                }
              }
            }
          },
          S1s: {
            type: 'structure',
            required: ['arn', 'createdTime', 'evaluationStrategy', 'lastUpdatedTime', 'name', 'status', 'valueType', 'variations'],
            members: {
              arn: {},
              createdTime: {
                type: 'timestamp'
              },
              defaultVariation: {},
              description: {},
              entityOverrides: {
                shape: 'S1n'
              },
              evaluationRules: {
                shape: 'S1u'
              },
              evaluationStrategy: {},
              lastUpdatedTime: {
                type: 'timestamp'
              },
              name: {},
              project: {},
              status: {},
              tags: {
                shape: 'Sz'
              },
              valueType: {},
              variations: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    name: {},
                    value: {
                      shape: 'Sd'
                    }
                  }
                }
              }
            }
          },
          S1u: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['type'],
              members: {
                name: {},
                type: {}
              }
            }
          },
          S23: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['feature', 'name', 'variation'],
              members: {
                description: {},
                feature: {},
                name: {},
                variation: {}
              }
            }
          },
          S26: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['metricDefinition'],
              members: {
                metricDefinition: {
                  shape: 'Sn'
                }
              }
            }
          },
          S29: {
            type: 'structure',
            required: ['steps'],
            members: {
              steps: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['groupWeights', 'startTime'],
                  members: {
                    groupWeights: {
                      shape: 'S2c'
                    },
                    segmentOverrides: {
                      shape: 'S2d'
                    },
                    startTime: {
                      type: 'timestamp'
                    }
                  }
                }
              }
            }
          },
          S2c: {
            type: 'map',
            key: {},
            value: {
              type: 'long'
            }
          },
          S2d: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['evaluationOrder', 'segment', 'weights'],
              members: {
                evaluationOrder: {
                  type: 'long'
                },
                segment: {},
                weights: {
                  shape: 'S2c'
                }
              }
            }
          },
          S2h: {
            type: 'structure',
            required: ['arn', 'createdTime', 'lastUpdatedTime', 'name', 'status', 'type'],
            members: {
              arn: {},
              createdTime: {
                type: 'timestamp'
              },
              description: {},
              execution: {
                type: 'structure',
                members: {
                  endedTime: {
                    type: 'timestamp'
                  },
                  startedTime: {
                    type: 'timestamp'
                  }
                }
              },
              groups: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['featureVariations', 'name'],
                  members: {
                    description: {},
                    featureVariations: {
                      shape: 'S1k'
                    },
                    name: {}
                  }
                }
              },
              lastUpdatedTime: {
                type: 'timestamp'
              },
              metricMonitors: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['metricDefinition'],
                  members: {
                    metricDefinition: {
                      shape: 'S1c'
                    }
                  }
                }
              },
              name: {},
              project: {},
              randomizationSalt: {},
              scheduledSplitsDefinition: {
                type: 'structure',
                members: {
                  steps: {
                    type: 'list',
                    member: {
                      type: 'structure',
                      required: ['startTime'],
                      members: {
                        groupWeights: {
                          shape: 'S2c'
                        },
                        segmentOverrides: {
                          shape: 'S2d'
                        },
                        startTime: {
                          type: 'timestamp'
                        }
                      }
                    }
                  }
                }
              },
              status: {},
              statusReason: {},
              tags: {
                shape: 'Sz'
              },
              type: {}
            }
          },
          S2u: {
            type: 'structure',
            members: {
              applicationId: {},
              environmentId: {}
            }
          },
          S2x: {
            type: 'structure',
            members: {
              logGroup: {}
            }
          },
          S2z: {
            type: 'structure',
            members: {
              bucket: {},
              prefix: {}
            }
          },
          S34: {
            type: 'structure',
            required: ['arn', 'createdTime', 'lastUpdatedTime', 'name', 'status'],
            members: {
              activeExperimentCount: {
                type: 'long'
              },
              activeLaunchCount: {
                type: 'long'
              },
              appConfigResource: {
                type: 'structure',
                required: ['applicationId', 'configurationProfileId', 'environmentId'],
                members: {
                  applicationId: {},
                  configurationProfileId: {},
                  environmentId: {}
                }
              },
              arn: {},
              createdTime: {
                type: 'timestamp'
              },
              dataDelivery: {
                type: 'structure',
                members: {
                  cloudWatchLogs: {
                    type: 'structure',
                    members: {
                      logGroup: {}
                    }
                  },
                  s3Destination: {
                    type: 'structure',
                    members: {
                      bucket: {},
                      prefix: {}
                    }
                  }
                }
              },
              description: {},
              experimentCount: {
                type: 'long'
              },
              featureCount: {
                type: 'long'
              },
              lastUpdatedTime: {
                type: 'timestamp'
              },
              launchCount: {
                type: 'long'
              },
              name: {},
              status: {},
              tags: {
                shape: 'Sz'
              }
            }
          },
          S3e: {
            type: 'structure',
            required: ['arn', 'createdTime', 'lastUpdatedTime', 'name', 'pattern'],
            members: {
              arn: {},
              createdTime: {
                type: 'timestamp'
              },
              description: {},
              experimentCount: {
                type: 'long'
              },
              lastUpdatedTime: {
                type: 'timestamp'
              },
              launchCount: {
                type: 'long'
              },
              name: {},
              pattern: {
                jsonvalue: true
              },
              tags: {
                shape: 'Sz'
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=1e0dd2173ba6967cc5b1cf8ac0fd2b9d95921ae2.js.map