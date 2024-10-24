System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2019-07-18',
          endpointPrefix: 'codeguru-profiler',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceFullName: 'Amazon CodeGuru Profiler',
          serviceId: 'CodeGuruProfiler',
          signatureVersion: 'v4',
          signingName: 'codeguru-profiler',
          uid: 'codeguruprofiler-2019-07-18'
        },
        operations: {
          AddNotificationChannels: {
            http: {
              requestUri: '/profilingGroups/{profilingGroupName}/notificationConfiguration',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['channels', 'profilingGroupName'],
              members: {
                channels: {
                  shape: 'S2'
                },
                profilingGroupName: {
                  location: 'uri',
                  locationName: 'profilingGroupName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                notificationConfiguration: {
                  shape: 'Sa'
                }
              }
            }
          },
          BatchGetFrameMetricData: {
            http: {
              requestUri: '/profilingGroups/{profilingGroupName}/frames/-/metrics',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['profilingGroupName'],
              members: {
                endTime: {
                  shape: 'Sc',
                  location: 'querystring',
                  locationName: 'endTime'
                },
                frameMetrics: {
                  type: 'list',
                  member: {
                    shape: 'Se'
                  }
                },
                period: {
                  location: 'querystring',
                  locationName: 'period'
                },
                profilingGroupName: {
                  location: 'uri',
                  locationName: 'profilingGroupName'
                },
                startTime: {
                  shape: 'Sc',
                  location: 'querystring',
                  locationName: 'startTime'
                },
                targetResolution: {
                  location: 'querystring',
                  locationName: 'targetResolution'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['endTime', 'endTimes', 'frameMetricData', 'resolution', 'startTime', 'unprocessedEndTimes'],
              members: {
                endTime: {
                  shape: 'Sc'
                },
                endTimes: {
                  shape: 'Sl'
                },
                frameMetricData: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['frameMetric', 'values'],
                    members: {
                      frameMetric: {
                        shape: 'Se'
                      },
                      values: {
                        type: 'list',
                        member: {
                          type: 'double'
                        }
                      }
                    }
                  }
                },
                resolution: {},
                startTime: {
                  shape: 'Sc'
                },
                unprocessedEndTimes: {
                  type: 'map',
                  key: {},
                  value: {
                    shape: 'Sl'
                  }
                }
              }
            }
          },
          ConfigureAgent: {
            http: {
              requestUri: '/profilingGroups/{profilingGroupName}/configureAgent',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['profilingGroupName'],
              members: {
                fleetInstanceId: {},
                metadata: {
                  type: 'map',
                  key: {},
                  value: {}
                },
                profilingGroupName: {
                  location: 'uri',
                  locationName: 'profilingGroupName'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['configuration'],
              members: {
                configuration: {
                  type: 'structure',
                  required: ['periodInSeconds', 'shouldProfile'],
                  members: {
                    agentParameters: {
                      type: 'map',
                      key: {},
                      value: {}
                    },
                    periodInSeconds: {
                      type: 'integer'
                    },
                    shouldProfile: {
                      type: 'boolean'
                    }
                  }
                }
              },
              payload: 'configuration'
            }
          },
          CreateProfilingGroup: {
            http: {
              requestUri: '/profilingGroups',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['clientToken', 'profilingGroupName'],
              members: {
                agentOrchestrationConfig: {
                  shape: 'S13'
                },
                clientToken: {
                  idempotencyToken: true,
                  location: 'querystring',
                  locationName: 'clientToken'
                },
                computePlatform: {},
                profilingGroupName: {},
                tags: {
                  shape: 'S16'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['profilingGroup'],
              members: {
                profilingGroup: {
                  shape: 'S18'
                }
              },
              payload: 'profilingGroup'
            },
            idempotent: true
          },
          DeleteProfilingGroup: {
            http: {
              method: 'DELETE',
              requestUri: '/profilingGroups/{profilingGroupName}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['profilingGroupName'],
              members: {
                profilingGroupName: {
                  location: 'uri',
                  locationName: 'profilingGroupName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DescribeProfilingGroup: {
            http: {
              method: 'GET',
              requestUri: '/profilingGroups/{profilingGroupName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['profilingGroupName'],
              members: {
                profilingGroupName: {
                  location: 'uri',
                  locationName: 'profilingGroupName'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['profilingGroup'],
              members: {
                profilingGroup: {
                  shape: 'S18'
                }
              },
              payload: 'profilingGroup'
            }
          },
          GetFindingsReportAccountSummary: {
            http: {
              method: 'GET',
              requestUri: '/internal/findingsReports',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                dailyReportsOnly: {
                  location: 'querystring',
                  locationName: 'dailyReportsOnly',
                  type: 'boolean'
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
              required: ['reportSummaries'],
              members: {
                nextToken: {},
                reportSummaries: {
                  shape: 'S1k'
                }
              }
            }
          },
          GetNotificationConfiguration: {
            http: {
              method: 'GET',
              requestUri: '/profilingGroups/{profilingGroupName}/notificationConfiguration',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['profilingGroupName'],
              members: {
                profilingGroupName: {
                  location: 'uri',
                  locationName: 'profilingGroupName'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['notificationConfiguration'],
              members: {
                notificationConfiguration: {
                  shape: 'Sa'
                }
              }
            }
          },
          GetPolicy: {
            http: {
              method: 'GET',
              requestUri: '/profilingGroups/{profilingGroupName}/policy',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['profilingGroupName'],
              members: {
                profilingGroupName: {
                  location: 'uri',
                  locationName: 'profilingGroupName'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['policy', 'revisionId'],
              members: {
                policy: {},
                revisionId: {}
              }
            }
          },
          GetProfile: {
            http: {
              method: 'GET',
              requestUri: '/profilingGroups/{profilingGroupName}/profile',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['profilingGroupName'],
              members: {
                accept: {
                  location: 'header',
                  locationName: 'Accept'
                },
                endTime: {
                  shape: 'Sc',
                  location: 'querystring',
                  locationName: 'endTime'
                },
                maxDepth: {
                  location: 'querystring',
                  locationName: 'maxDepth',
                  type: 'integer'
                },
                period: {
                  location: 'querystring',
                  locationName: 'period'
                },
                profilingGroupName: {
                  location: 'uri',
                  locationName: 'profilingGroupName'
                },
                startTime: {
                  shape: 'Sc',
                  location: 'querystring',
                  locationName: 'startTime'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['contentType', 'profile'],
              members: {
                contentEncoding: {
                  location: 'header',
                  locationName: 'Content-Encoding'
                },
                contentType: {
                  location: 'header',
                  locationName: 'Content-Type'
                },
                profile: {
                  type: 'blob'
                }
              },
              payload: 'profile'
            }
          },
          GetRecommendations: {
            http: {
              method: 'GET',
              requestUri: '/internal/profilingGroups/{profilingGroupName}/recommendations',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['endTime', 'profilingGroupName', 'startTime'],
              members: {
                endTime: {
                  shape: 'Sc',
                  location: 'querystring',
                  locationName: 'endTime'
                },
                locale: {
                  location: 'querystring',
                  locationName: 'locale'
                },
                profilingGroupName: {
                  location: 'uri',
                  locationName: 'profilingGroupName'
                },
                startTime: {
                  shape: 'Sc',
                  location: 'querystring',
                  locationName: 'startTime'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['anomalies', 'profileEndTime', 'profileStartTime', 'profilingGroupName', 'recommendations'],
              members: {
                anomalies: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['instances', 'metric', 'reason'],
                    members: {
                      instances: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          required: ['id', 'startTime'],
                          members: {
                            endTime: {
                              shape: 'Sc'
                            },
                            id: {},
                            startTime: {
                              shape: 'Sc'
                            },
                            userFeedback: {
                              type: 'structure',
                              required: ['type'],
                              members: {
                                type: {}
                              }
                            }
                          }
                        }
                      },
                      metric: {
                        type: 'structure',
                        required: ['frameName', 'threadStates', 'type'],
                        members: {
                          frameName: {},
                          threadStates: {
                            shape: 'S26'
                          },
                          type: {}
                        }
                      },
                      reason: {}
                    }
                  }
                },
                profileEndTime: {
                  shape: 'Sc'
                },
                profileStartTime: {
                  shape: 'Sc'
                },
                profilingGroupName: {},
                recommendations: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['allMatchesCount', 'allMatchesSum', 'endTime', 'pattern', 'startTime', 'topMatches'],
                    members: {
                      allMatchesCount: {
                        type: 'integer'
                      },
                      allMatchesSum: {
                        type: 'double'
                      },
                      endTime: {
                        shape: 'Sc'
                      },
                      pattern: {
                        type: 'structure',
                        members: {
                          countersToAggregate: {
                            shape: 'S26'
                          },
                          description: {},
                          id: {},
                          name: {},
                          resolutionSteps: {},
                          targetFrames: {
                            type: 'list',
                            member: {
                              type: 'list',
                              member: {}
                            }
                          },
                          thresholdPercent: {
                            type: 'double'
                          }
                        }
                      },
                      startTime: {
                        shape: 'Sc'
                      },
                      topMatches: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            frameAddress: {},
                            targetFramesIndex: {
                              type: 'integer'
                            },
                            thresholdBreachValue: {
                              type: 'double'
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
          ListFindingsReports: {
            http: {
              method: 'GET',
              requestUri: '/internal/profilingGroups/{profilingGroupName}/findingsReports',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['endTime', 'profilingGroupName', 'startTime'],
              members: {
                dailyReportsOnly: {
                  location: 'querystring',
                  locationName: 'dailyReportsOnly',
                  type: 'boolean'
                },
                endTime: {
                  shape: 'Sc',
                  location: 'querystring',
                  locationName: 'endTime'
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
                profilingGroupName: {
                  location: 'uri',
                  locationName: 'profilingGroupName'
                },
                startTime: {
                  shape: 'Sc',
                  location: 'querystring',
                  locationName: 'startTime'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['findingsReportSummaries'],
              members: {
                findingsReportSummaries: {
                  shape: 'S1k'
                },
                nextToken: {}
              }
            }
          },
          ListProfileTimes: {
            http: {
              method: 'GET',
              requestUri: '/profilingGroups/{profilingGroupName}/profileTimes',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['endTime', 'period', 'profilingGroupName', 'startTime'],
              members: {
                endTime: {
                  shape: 'Sc',
                  location: 'querystring',
                  locationName: 'endTime'
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
                orderBy: {
                  location: 'querystring',
                  locationName: 'orderBy'
                },
                period: {
                  location: 'querystring',
                  locationName: 'period'
                },
                profilingGroupName: {
                  location: 'uri',
                  locationName: 'profilingGroupName'
                },
                startTime: {
                  shape: 'Sc',
                  location: 'querystring',
                  locationName: 'startTime'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['profileTimes'],
              members: {
                nextToken: {},
                profileTimes: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      start: {
                        shape: 'Sc'
                      }
                    }
                  }
                }
              }
            }
          },
          ListProfilingGroups: {
            http: {
              method: 'GET',
              requestUri: '/profilingGroups',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                includeDescription: {
                  location: 'querystring',
                  locationName: 'includeDescription',
                  type: 'boolean'
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
              required: ['profilingGroupNames'],
              members: {
                nextToken: {},
                profilingGroupNames: {
                  type: 'list',
                  member: {}
                },
                profilingGroups: {
                  type: 'list',
                  member: {
                    shape: 'S18'
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
                  shape: 'S16'
                }
              }
            }
          },
          PostAgentProfile: {
            http: {
              requestUri: '/profilingGroups/{profilingGroupName}/agentProfile',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['agentProfile', 'contentType', 'profilingGroupName'],
              members: {
                agentProfile: {
                  type: 'blob'
                },
                contentType: {
                  location: 'header',
                  locationName: 'Content-Type'
                },
                profileToken: {
                  idempotencyToken: true,
                  location: 'querystring',
                  locationName: 'profileToken'
                },
                profilingGroupName: {
                  location: 'uri',
                  locationName: 'profilingGroupName'
                }
              },
              payload: 'agentProfile'
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          PutPermission: {
            http: {
              method: 'PUT',
              requestUri: '/profilingGroups/{profilingGroupName}/policy/{actionGroup}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['actionGroup', 'principals', 'profilingGroupName'],
              members: {
                actionGroup: {
                  location: 'uri',
                  locationName: 'actionGroup'
                },
                principals: {
                  type: 'list',
                  member: {}
                },
                profilingGroupName: {
                  location: 'uri',
                  locationName: 'profilingGroupName'
                },
                revisionId: {}
              }
            },
            output: {
              type: 'structure',
              required: ['policy', 'revisionId'],
              members: {
                policy: {},
                revisionId: {}
              }
            },
            idempotent: true
          },
          RemoveNotificationChannel: {
            http: {
              method: 'DELETE',
              requestUri: '/profilingGroups/{profilingGroupName}/notificationConfiguration/{channelId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['channelId', 'profilingGroupName'],
              members: {
                channelId: {
                  location: 'uri',
                  locationName: 'channelId'
                },
                profilingGroupName: {
                  location: 'uri',
                  locationName: 'profilingGroupName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                notificationConfiguration: {
                  shape: 'Sa'
                }
              }
            },
            idempotent: true
          },
          RemovePermission: {
            http: {
              method: 'DELETE',
              requestUri: '/profilingGroups/{profilingGroupName}/policy/{actionGroup}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['actionGroup', 'profilingGroupName', 'revisionId'],
              members: {
                actionGroup: {
                  location: 'uri',
                  locationName: 'actionGroup'
                },
                profilingGroupName: {
                  location: 'uri',
                  locationName: 'profilingGroupName'
                },
                revisionId: {
                  location: 'querystring',
                  locationName: 'revisionId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['policy', 'revisionId'],
              members: {
                policy: {},
                revisionId: {}
              }
            }
          },
          SubmitFeedback: {
            http: {
              requestUri: '/internal/profilingGroups/{profilingGroupName}/anomalies/{anomalyInstanceId}/feedback',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['anomalyInstanceId', 'profilingGroupName', 'type'],
              members: {
                anomalyInstanceId: {
                  location: 'uri',
                  locationName: 'anomalyInstanceId'
                },
                comment: {},
                profilingGroupName: {
                  location: 'uri',
                  locationName: 'profilingGroupName'
                },
                type: {}
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
              responseCode: 204
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
              responseCode: 204
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
          UpdateProfilingGroup: {
            http: {
              method: 'PUT',
              requestUri: '/profilingGroups/{profilingGroupName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['agentOrchestrationConfig', 'profilingGroupName'],
              members: {
                agentOrchestrationConfig: {
                  shape: 'S13'
                },
                profilingGroupName: {
                  location: 'uri',
                  locationName: 'profilingGroupName'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['profilingGroup'],
              members: {
                profilingGroup: {
                  shape: 'S18'
                }
              },
              payload: 'profilingGroup'
            },
            idempotent: true
          }
        },
        shapes: {
          S2: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['eventPublishers', 'uri'],
              members: {
                eventPublishers: {
                  type: 'list',
                  member: {}
                },
                id: {},
                uri: {}
              }
            }
          },
          Sa: {
            type: 'structure',
            members: {
              channels: {
                shape: 'S2'
              }
            }
          },
          Sc: {
            type: 'timestamp',
            timestampFormat: 'iso8601'
          },
          Se: {
            type: 'structure',
            required: ['frameName', 'threadStates', 'type'],
            members: {
              frameName: {},
              threadStates: {
                type: 'list',
                member: {}
              },
              type: {}
            }
          },
          Sl: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['value'],
              members: {
                value: {
                  shape: 'Sc'
                }
              }
            }
          },
          S13: {
            type: 'structure',
            required: ['profilingEnabled'],
            members: {
              profilingEnabled: {
                type: 'boolean'
              }
            }
          },
          S16: {
            type: 'map',
            key: {},
            value: {}
          },
          S18: {
            type: 'structure',
            members: {
              agentOrchestrationConfig: {
                shape: 'S13'
              },
              arn: {},
              computePlatform: {},
              createdAt: {
                shape: 'Sc'
              },
              name: {},
              profilingStatus: {
                type: 'structure',
                members: {
                  latestAgentOrchestratedAt: {
                    shape: 'Sc'
                  },
                  latestAgentProfileReportedAt: {
                    shape: 'Sc'
                  },
                  latestAggregatedProfile: {
                    type: 'structure',
                    members: {
                      period: {},
                      start: {
                        shape: 'Sc'
                      }
                    }
                  }
                }
              },
              tags: {
                shape: 'S16'
              },
              updatedAt: {
                shape: 'Sc'
              }
            }
          },
          S1k: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                id: {},
                profileEndTime: {
                  shape: 'Sc'
                },
                profileStartTime: {
                  shape: 'Sc'
                },
                profilingGroupName: {},
                totalNumberOfFindings: {
                  type: 'integer'
                }
              }
            }
          },
          S26: {
            type: 'list',
            member: {}
          }
        }
      });
    }
  };
});
//# sourceMappingURL=de3ce9bdbb26e437fef165f6fcacacbecc1cdc9e.js.map