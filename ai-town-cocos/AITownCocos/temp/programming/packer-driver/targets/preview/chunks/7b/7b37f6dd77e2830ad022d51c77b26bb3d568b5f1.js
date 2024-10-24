System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2020-09-18',
          endpointPrefix: 'api.iotdeviceadvisor',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceAbbreviation: 'AWSIoTDeviceAdvisor',
          serviceFullName: 'AWS IoT Core Device Advisor',
          serviceId: 'IotDeviceAdvisor',
          signatureVersion: 'v4',
          signingName: 'iotdeviceadvisor',
          uid: 'iotdeviceadvisor-2020-09-18'
        },
        operations: {
          CreateSuiteDefinition: {
            http: {
              requestUri: '/suiteDefinitions'
            },
            input: {
              type: 'structure',
              required: ['suiteDefinitionConfiguration'],
              members: {
                suiteDefinitionConfiguration: {
                  shape: 'S2'
                },
                tags: {
                  shape: 'Sb'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                suiteDefinitionId: {},
                suiteDefinitionArn: {},
                suiteDefinitionName: {},
                createdAt: {
                  type: 'timestamp'
                }
              }
            }
          },
          DeleteSuiteDefinition: {
            http: {
              method: 'DELETE',
              requestUri: '/suiteDefinitions/{suiteDefinitionId}'
            },
            input: {
              type: 'structure',
              required: ['suiteDefinitionId'],
              members: {
                suiteDefinitionId: {
                  location: 'uri',
                  locationName: 'suiteDefinitionId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          GetEndpoint: {
            http: {
              method: 'GET',
              requestUri: '/endpoint'
            },
            input: {
              type: 'structure',
              members: {
                thingArn: {
                  location: 'querystring',
                  locationName: 'thingArn'
                },
                certificateArn: {
                  location: 'querystring',
                  locationName: 'certificateArn'
                },
                deviceRoleArn: {
                  location: 'querystring',
                  locationName: 'deviceRoleArn'
                },
                authenticationMethod: {
                  location: 'querystring',
                  locationName: 'authenticationMethod'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                endpoint: {}
              }
            }
          },
          GetSuiteDefinition: {
            http: {
              method: 'GET',
              requestUri: '/suiteDefinitions/{suiteDefinitionId}'
            },
            input: {
              type: 'structure',
              required: ['suiteDefinitionId'],
              members: {
                suiteDefinitionId: {
                  location: 'uri',
                  locationName: 'suiteDefinitionId'
                },
                suiteDefinitionVersion: {
                  location: 'querystring',
                  locationName: 'suiteDefinitionVersion'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                suiteDefinitionId: {},
                suiteDefinitionArn: {},
                suiteDefinitionVersion: {},
                latestVersion: {},
                suiteDefinitionConfiguration: {
                  shape: 'S2'
                },
                createdAt: {
                  type: 'timestamp'
                },
                lastModifiedAt: {
                  type: 'timestamp'
                },
                tags: {
                  shape: 'Sb'
                }
              }
            }
          },
          GetSuiteRun: {
            http: {
              method: 'GET',
              requestUri: '/suiteDefinitions/{suiteDefinitionId}/suiteRuns/{suiteRunId}'
            },
            input: {
              type: 'structure',
              required: ['suiteDefinitionId', 'suiteRunId'],
              members: {
                suiteDefinitionId: {
                  location: 'uri',
                  locationName: 'suiteDefinitionId'
                },
                suiteRunId: {
                  location: 'uri',
                  locationName: 'suiteRunId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                suiteDefinitionId: {},
                suiteDefinitionVersion: {},
                suiteRunId: {},
                suiteRunArn: {},
                suiteRunConfiguration: {
                  shape: 'Ss'
                },
                testResult: {
                  type: 'structure',
                  members: {
                    groups: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          groupId: {},
                          groupName: {},
                          tests: {
                            type: 'list',
                            member: {
                              type: 'structure',
                              members: {
                                testCaseRunId: {},
                                testCaseDefinitionId: {},
                                testCaseDefinitionName: {},
                                status: {},
                                startTime: {
                                  type: 'timestamp'
                                },
                                endTime: {
                                  type: 'timestamp'
                                },
                                logUrl: {},
                                warnings: {},
                                failure: {},
                                testScenarios: {
                                  type: 'list',
                                  member: {
                                    type: 'structure',
                                    members: {
                                      testCaseScenarioId: {},
                                      testCaseScenarioType: {},
                                      status: {},
                                      failure: {},
                                      systemMessage: {}
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
                startTime: {
                  type: 'timestamp'
                },
                endTime: {
                  type: 'timestamp'
                },
                status: {},
                errorReason: {},
                tags: {
                  shape: 'Sb'
                }
              }
            }
          },
          GetSuiteRunReport: {
            http: {
              method: 'GET',
              requestUri: '/suiteDefinitions/{suiteDefinitionId}/suiteRuns/{suiteRunId}/report'
            },
            input: {
              type: 'structure',
              required: ['suiteDefinitionId', 'suiteRunId'],
              members: {
                suiteDefinitionId: {
                  location: 'uri',
                  locationName: 'suiteDefinitionId'
                },
                suiteRunId: {
                  location: 'uri',
                  locationName: 'suiteRunId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                qualificationReportDownloadUrl: {}
              }
            }
          },
          ListSuiteDefinitions: {
            http: {
              method: 'GET',
              requestUri: '/suiteDefinitions'
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
                suiteDefinitionInformationList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      suiteDefinitionId: {},
                      suiteDefinitionName: {},
                      defaultDevices: {
                        shape: 'S4'
                      },
                      intendedForQualification: {
                        type: 'boolean'
                      },
                      isLongDurationTest: {
                        type: 'boolean'
                      },
                      protocol: {},
                      createdAt: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListSuiteRuns: {
            http: {
              method: 'GET',
              requestUri: '/suiteRuns'
            },
            input: {
              type: 'structure',
              members: {
                suiteDefinitionId: {
                  location: 'querystring',
                  locationName: 'suiteDefinitionId'
                },
                suiteDefinitionVersion: {
                  location: 'querystring',
                  locationName: 'suiteDefinitionVersion'
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
              members: {
                suiteRunsList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      suiteDefinitionId: {},
                      suiteDefinitionVersion: {},
                      suiteDefinitionName: {},
                      suiteRunId: {},
                      createdAt: {
                        type: 'timestamp'
                      },
                      startedAt: {
                        type: 'timestamp'
                      },
                      endAt: {
                        type: 'timestamp'
                      },
                      status: {},
                      passed: {
                        type: 'integer'
                      },
                      failed: {
                        type: 'integer'
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
              requestUri: '/tags/{resourceArn}'
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
                  shape: 'Sb'
                }
              }
            }
          },
          StartSuiteRun: {
            http: {
              requestUri: '/suiteDefinitions/{suiteDefinitionId}/suiteRuns'
            },
            input: {
              type: 'structure',
              required: ['suiteDefinitionId', 'suiteRunConfiguration'],
              members: {
                suiteDefinitionId: {
                  location: 'uri',
                  locationName: 'suiteDefinitionId'
                },
                suiteDefinitionVersion: {},
                suiteRunConfiguration: {
                  shape: 'Ss'
                },
                tags: {
                  shape: 'Sb'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                suiteRunId: {},
                suiteRunArn: {},
                createdAt: {
                  type: 'timestamp'
                },
                endpoint: {}
              }
            }
          },
          StopSuiteRun: {
            http: {
              requestUri: '/suiteDefinitions/{suiteDefinitionId}/suiteRuns/{suiteRunId}/stop'
            },
            input: {
              type: 'structure',
              required: ['suiteDefinitionId', 'suiteRunId'],
              members: {
                suiteDefinitionId: {
                  location: 'uri',
                  locationName: 'suiteDefinitionId'
                },
                suiteRunId: {
                  location: 'uri',
                  locationName: 'suiteRunId'
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
              requestUri: '/tags/{resourceArn}'
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
                  shape: 'Sb'
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
              requestUri: '/tags/{resourceArn}'
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
          UpdateSuiteDefinition: {
            http: {
              method: 'PATCH',
              requestUri: '/suiteDefinitions/{suiteDefinitionId}'
            },
            input: {
              type: 'structure',
              required: ['suiteDefinitionId', 'suiteDefinitionConfiguration'],
              members: {
                suiteDefinitionId: {
                  location: 'uri',
                  locationName: 'suiteDefinitionId'
                },
                suiteDefinitionConfiguration: {
                  shape: 'S2'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                suiteDefinitionId: {},
                suiteDefinitionArn: {},
                suiteDefinitionName: {},
                suiteDefinitionVersion: {},
                createdAt: {
                  type: 'timestamp'
                },
                lastUpdatedAt: {
                  type: 'timestamp'
                }
              }
            }
          }
        },
        shapes: {
          S2: {
            type: 'structure',
            required: ['suiteDefinitionName', 'rootGroup', 'devicePermissionRoleArn'],
            members: {
              suiteDefinitionName: {},
              devices: {
                shape: 'S4'
              },
              intendedForQualification: {
                type: 'boolean'
              },
              isLongDurationTest: {
                type: 'boolean'
              },
              rootGroup: {},
              devicePermissionRoleArn: {},
              protocol: {}
            }
          },
          S4: {
            type: 'list',
            member: {
              shape: 'S5'
            }
          },
          S5: {
            type: 'structure',
            members: {
              thingArn: {},
              certificateArn: {},
              deviceRoleArn: {}
            }
          },
          Sb: {
            type: 'map',
            key: {},
            value: {}
          },
          Ss: {
            type: 'structure',
            required: ['primaryDevice'],
            members: {
              primaryDevice: {
                shape: 'S5'
              },
              selectedTestList: {
                type: 'list',
                member: {}
              },
              parallelRun: {
                type: 'boolean'
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=7b37f6dd77e2830ad022d51c77b26bb3d568b5f1.js.map