System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2018-05-10',
          endpointPrefix: 'rum',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceFullName: 'CloudWatch RUM',
          serviceId: 'RUM',
          signatureVersion: 'v4',
          signingName: 'rum',
          uid: 'rum-2018-05-10'
        },
        operations: {
          BatchCreateRumMetricDefinitions: {
            http: {
              requestUri: '/rummetrics/{AppMonitorName}/metrics',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['AppMonitorName', 'Destination', 'MetricDefinitions'],
              members: {
                AppMonitorName: {
                  location: 'uri',
                  locationName: 'AppMonitorName'
                },
                Destination: {},
                DestinationArn: {},
                MetricDefinitions: {
                  type: 'list',
                  member: {
                    shape: 'S6'
                  }
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Errors'],
              members: {
                Errors: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['ErrorCode', 'ErrorMessage', 'MetricDefinition'],
                    members: {
                      ErrorCode: {},
                      ErrorMessage: {},
                      MetricDefinition: {
                        shape: 'S6'
                      }
                    }
                  }
                },
                MetricDefinitions: {
                  shape: 'Sj'
                }
              }
            },
            idempotent: true
          },
          BatchDeleteRumMetricDefinitions: {
            http: {
              method: 'DELETE',
              requestUri: '/rummetrics/{AppMonitorName}/metrics',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['AppMonitorName', 'Destination', 'MetricDefinitionIds'],
              members: {
                AppMonitorName: {
                  location: 'uri',
                  locationName: 'AppMonitorName'
                },
                Destination: {
                  location: 'querystring',
                  locationName: 'destination'
                },
                DestinationArn: {
                  location: 'querystring',
                  locationName: 'destinationArn'
                },
                MetricDefinitionIds: {
                  shape: 'Sn',
                  location: 'querystring',
                  locationName: 'metricDefinitionIds'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Errors'],
              members: {
                Errors: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['ErrorCode', 'ErrorMessage', 'MetricDefinitionId'],
                    members: {
                      ErrorCode: {},
                      ErrorMessage: {},
                      MetricDefinitionId: {}
                    }
                  }
                },
                MetricDefinitionIds: {
                  shape: 'Sn'
                }
              }
            },
            idempotent: true
          },
          BatchGetRumMetricDefinitions: {
            http: {
              method: 'GET',
              requestUri: '/rummetrics/{AppMonitorName}/metrics',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['AppMonitorName', 'Destination'],
              members: {
                AppMonitorName: {
                  location: 'uri',
                  locationName: 'AppMonitorName'
                },
                Destination: {
                  location: 'querystring',
                  locationName: 'destination'
                },
                DestinationArn: {
                  location: 'querystring',
                  locationName: 'destinationArn'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                MetricDefinitions: {
                  shape: 'Sj'
                },
                NextToken: {}
              }
            }
          },
          CreateAppMonitor: {
            http: {
              requestUri: '/appmonitor',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['Domain', 'Name'],
              members: {
                AppMonitorConfiguration: {
                  shape: 'Sv'
                },
                CustomEvents: {
                  shape: 'S15'
                },
                CwLogEnabled: {
                  type: 'boolean'
                },
                Domain: {},
                Name: {},
                Tags: {
                  shape: 'S18'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Id: {}
              }
            },
            idempotent: true
          },
          DeleteAppMonitor: {
            http: {
              method: 'DELETE',
              requestUri: '/appmonitor/{Name}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {
                  location: 'uri',
                  locationName: 'Name'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeleteRumMetricsDestination: {
            http: {
              method: 'DELETE',
              requestUri: '/rummetrics/{AppMonitorName}/metricsdestination',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['AppMonitorName', 'Destination'],
              members: {
                AppMonitorName: {
                  location: 'uri',
                  locationName: 'AppMonitorName'
                },
                Destination: {
                  location: 'querystring',
                  locationName: 'destination'
                },
                DestinationArn: {
                  location: 'querystring',
                  locationName: 'destinationArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          GetAppMonitor: {
            http: {
              method: 'GET',
              requestUri: '/appmonitor/{Name}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {
                  location: 'uri',
                  locationName: 'Name'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AppMonitor: {
                  type: 'structure',
                  members: {
                    AppMonitorConfiguration: {
                      shape: 'Sv'
                    },
                    Created: {},
                    CustomEvents: {
                      shape: 'S15'
                    },
                    DataStorage: {
                      type: 'structure',
                      members: {
                        CwLog: {
                          type: 'structure',
                          members: {
                            CwLogEnabled: {
                              type: 'boolean'
                            },
                            CwLogGroup: {}
                          }
                        }
                      }
                    },
                    Domain: {},
                    Id: {},
                    LastModified: {},
                    Name: {},
                    State: {},
                    Tags: {
                      shape: 'S18'
                    }
                  }
                }
              }
            }
          },
          GetAppMonitorData: {
            http: {
              requestUri: '/appmonitor/{Name}/data',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['Name', 'TimeRange'],
              members: {
                Filters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Name: {},
                      Values: {
                        type: 'list',
                        member: {}
                      }
                    }
                  }
                },
                MaxResults: {
                  type: 'integer'
                },
                Name: {
                  location: 'uri',
                  locationName: 'Name'
                },
                NextToken: {},
                TimeRange: {
                  type: 'structure',
                  required: ['After'],
                  members: {
                    After: {
                      type: 'long'
                    },
                    Before: {
                      type: 'long'
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Events: {
                  type: 'list',
                  member: {}
                },
                NextToken: {}
              }
            }
          },
          ListAppMonitors: {
            http: {
              requestUri: '/appmonitors',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AppMonitorSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Created: {},
                      Id: {},
                      LastModified: {},
                      Name: {},
                      State: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListRumMetricsDestinations: {
            http: {
              method: 'GET',
              requestUri: '/rummetrics/{AppMonitorName}/metricsdestination',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['AppMonitorName'],
              members: {
                AppMonitorName: {
                  location: 'uri',
                  locationName: 'AppMonitorName'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Destinations: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Destination: {},
                      DestinationArn: {},
                      IamRoleArn: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListTagsForResource: {
            http: {
              method: 'GET',
              requestUri: '/tags/{ResourceArn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ResourceArn'],
              members: {
                ResourceArn: {
                  location: 'uri',
                  locationName: 'ResourceArn'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['ResourceArn', 'Tags'],
              members: {
                ResourceArn: {},
                Tags: {
                  shape: 'S18'
                }
              }
            }
          },
          PutRumEvents: {
            http: {
              requestUri: '/appmonitors/{Id}/',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['AppMonitorDetails', 'BatchId', 'Id', 'RumEvents', 'UserDetails'],
              members: {
                AppMonitorDetails: {
                  type: 'structure',
                  members: {
                    id: {},
                    name: {},
                    version: {}
                  }
                },
                BatchId: {},
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                },
                RumEvents: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['details', 'id', 'timestamp', 'type'],
                    members: {
                      details: {
                        jsonvalue: true
                      },
                      id: {},
                      metadata: {
                        jsonvalue: true
                      },
                      timestamp: {
                        type: 'timestamp'
                      },
                      type: {}
                    }
                  }
                },
                UserDetails: {
                  type: 'structure',
                  members: {
                    sessionId: {},
                    userId: {}
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            endpoint: {
              hostPrefix: 'dataplane.'
            }
          },
          PutRumMetricsDestination: {
            http: {
              requestUri: '/rummetrics/{AppMonitorName}/metricsdestination',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['AppMonitorName', 'Destination'],
              members: {
                AppMonitorName: {
                  location: 'uri',
                  locationName: 'AppMonitorName'
                },
                Destination: {},
                DestinationArn: {},
                IamRoleArn: {}
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
              requestUri: '/tags/{ResourceArn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ResourceArn', 'Tags'],
              members: {
                ResourceArn: {
                  location: 'uri',
                  locationName: 'ResourceArn'
                },
                Tags: {
                  shape: 'S18'
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
              requestUri: '/tags/{ResourceArn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ResourceArn', 'TagKeys'],
              members: {
                ResourceArn: {
                  location: 'uri',
                  locationName: 'ResourceArn'
                },
                TagKeys: {
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
          UpdateAppMonitor: {
            http: {
              method: 'PATCH',
              requestUri: '/appmonitor/{Name}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                AppMonitorConfiguration: {
                  shape: 'Sv'
                },
                CustomEvents: {
                  shape: 'S15'
                },
                CwLogEnabled: {
                  type: 'boolean'
                },
                Domain: {},
                Name: {
                  location: 'uri',
                  locationName: 'Name'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateRumMetricDefinition: {
            http: {
              method: 'PATCH',
              requestUri: '/rummetrics/{AppMonitorName}/metrics',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['AppMonitorName', 'Destination', 'MetricDefinition', 'MetricDefinitionId'],
              members: {
                AppMonitorName: {
                  location: 'uri',
                  locationName: 'AppMonitorName'
                },
                Destination: {},
                DestinationArn: {},
                MetricDefinition: {
                  shape: 'S6'
                },
                MetricDefinitionId: {}
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
          S6: {
            type: 'structure',
            required: ['Name'],
            members: {
              DimensionKeys: {
                shape: 'S7'
              },
              EventPattern: {},
              Name: {},
              Namespace: {},
              UnitLabel: {},
              ValueKey: {}
            }
          },
          S7: {
            type: 'map',
            key: {},
            value: {}
          },
          Sj: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['MetricDefinitionId', 'Name'],
              members: {
                DimensionKeys: {
                  shape: 'S7'
                },
                EventPattern: {},
                MetricDefinitionId: {},
                Name: {},
                Namespace: {},
                UnitLabel: {},
                ValueKey: {}
              }
            }
          },
          Sn: {
            type: 'list',
            member: {}
          },
          Sv: {
            type: 'structure',
            members: {
              AllowCookies: {
                type: 'boolean'
              },
              EnableXRay: {
                type: 'boolean'
              },
              ExcludedPages: {
                shape: 'Sx'
              },
              FavoritePages: {
                type: 'list',
                member: {}
              },
              GuestRoleArn: {},
              IdentityPoolId: {},
              IncludedPages: {
                shape: 'Sx'
              },
              SessionSampleRate: {
                type: 'double'
              },
              Telemetries: {
                type: 'list',
                member: {}
              }
            }
          },
          Sx: {
            type: 'list',
            member: {}
          },
          S15: {
            type: 'structure',
            members: {
              Status: {}
            }
          },
          S18: {
            type: 'map',
            key: {},
            value: {}
          }
        }
      });
    }
  };
});
//# sourceMappingURL=d034698d6989ad9764515b8f9f89540efc1354eb.js.map