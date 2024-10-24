System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2021-06-03',
          endpointPrefix: 'internetmonitor',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceFullName: 'Amazon CloudWatch Internet Monitor',
          serviceId: 'InternetMonitor',
          signatureVersion: 'v4',
          signingName: 'internetmonitor',
          uid: 'internetmonitor-2021-06-03'
        },
        operations: {
          CreateMonitor: {
            http: {
              requestUri: '/v20210603/Monitors',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['MonitorName'],
              members: {
                MonitorName: {},
                Resources: {
                  shape: 'S3'
                },
                ClientToken: {
                  idempotencyToken: true
                },
                Tags: {
                  shape: 'S6'
                },
                MaxCityNetworksToMonitor: {
                  type: 'integer'
                },
                InternetMeasurementsLogDelivery: {
                  shape: 'Sa'
                },
                TrafficPercentageToMonitor: {
                  type: 'integer'
                },
                HealthEventsConfig: {
                  shape: 'Sf'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Arn', 'Status'],
              members: {
                Arn: {},
                Status: {}
              }
            },
            idempotent: true
          },
          DeleteMonitor: {
            http: {
              method: 'DELETE',
              requestUri: '/v20210603/Monitors/{MonitorName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['MonitorName'],
              members: {
                MonitorName: {
                  location: 'uri',
                  locationName: 'MonitorName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          GetHealthEvent: {
            http: {
              method: 'GET',
              requestUri: '/v20210603/Monitors/{MonitorName}/HealthEvents/{EventId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['MonitorName', 'EventId'],
              members: {
                MonitorName: {
                  location: 'uri',
                  locationName: 'MonitorName'
                },
                EventId: {
                  location: 'uri',
                  locationName: 'EventId'
                },
                LinkedAccountId: {
                  location: 'querystring',
                  locationName: 'LinkedAccountId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['EventArn', 'EventId', 'StartedAt', 'LastUpdatedAt', 'ImpactedLocations', 'Status', 'ImpactType'],
              members: {
                EventArn: {},
                EventId: {},
                StartedAt: {
                  shape: 'Ss'
                },
                EndedAt: {
                  shape: 'Ss'
                },
                CreatedAt: {
                  shape: 'Ss'
                },
                LastUpdatedAt: {
                  shape: 'Ss'
                },
                ImpactedLocations: {
                  shape: 'St'
                },
                Status: {},
                PercentOfTotalTrafficImpacted: {
                  type: 'double'
                },
                ImpactType: {},
                HealthScoreThreshold: {
                  type: 'double'
                }
              }
            }
          },
          GetInternetEvent: {
            http: {
              method: 'GET',
              requestUri: '/v20210603/InternetEvents/{EventId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['EventId'],
              members: {
                EventId: {
                  location: 'uri',
                  locationName: 'EventId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['EventId', 'EventArn', 'StartedAt', 'ClientLocation', 'EventType', 'EventStatus'],
              members: {
                EventId: {},
                EventArn: {},
                StartedAt: {
                  shape: 'Ss'
                },
                EndedAt: {
                  shape: 'Ss'
                },
                ClientLocation: {
                  shape: 'S1b'
                },
                EventType: {},
                EventStatus: {}
              }
            }
          },
          GetMonitor: {
            http: {
              method: 'GET',
              requestUri: '/v20210603/Monitors/{MonitorName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['MonitorName'],
              members: {
                MonitorName: {
                  location: 'uri',
                  locationName: 'MonitorName'
                },
                LinkedAccountId: {
                  location: 'querystring',
                  locationName: 'LinkedAccountId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['MonitorName', 'MonitorArn', 'Resources', 'Status', 'CreatedAt', 'ModifiedAt'],
              members: {
                MonitorName: {},
                MonitorArn: {},
                Resources: {
                  shape: 'S3'
                },
                Status: {},
                CreatedAt: {
                  shape: 'Ss'
                },
                ModifiedAt: {
                  shape: 'Ss'
                },
                ProcessingStatus: {},
                ProcessingStatusInfo: {},
                Tags: {
                  shape: 'S6'
                },
                MaxCityNetworksToMonitor: {
                  type: 'integer'
                },
                InternetMeasurementsLogDelivery: {
                  shape: 'Sa'
                },
                TrafficPercentageToMonitor: {
                  type: 'integer'
                },
                HealthEventsConfig: {
                  shape: 'Sf'
                }
              }
            }
          },
          GetQueryResults: {
            http: {
              method: 'GET',
              requestUri: '/v20210603/Monitors/{MonitorName}/Queries/{QueryId}/Results',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['MonitorName', 'QueryId'],
              members: {
                MonitorName: {
                  location: 'uri',
                  locationName: 'MonitorName'
                },
                QueryId: {
                  location: 'uri',
                  locationName: 'QueryId'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'NextToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'MaxResults',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Fields', 'Data'],
              members: {
                Fields: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Name: {},
                      Type: {}
                    }
                  }
                },
                Data: {
                  type: 'list',
                  member: {
                    type: 'list',
                    member: {}
                  }
                },
                NextToken: {}
              }
            }
          },
          GetQueryStatus: {
            http: {
              method: 'GET',
              requestUri: '/v20210603/Monitors/{MonitorName}/Queries/{QueryId}/Status',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['MonitorName', 'QueryId'],
              members: {
                MonitorName: {
                  location: 'uri',
                  locationName: 'MonitorName'
                },
                QueryId: {
                  location: 'uri',
                  locationName: 'QueryId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Status'],
              members: {
                Status: {}
              }
            }
          },
          ListHealthEvents: {
            http: {
              method: 'GET',
              requestUri: '/v20210603/Monitors/{MonitorName}/HealthEvents',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['MonitorName'],
              members: {
                MonitorName: {
                  location: 'uri',
                  locationName: 'MonitorName'
                },
                StartTime: {
                  shape: 'Ss',
                  location: 'querystring',
                  locationName: 'StartTime'
                },
                EndTime: {
                  shape: 'Ss',
                  location: 'querystring',
                  locationName: 'EndTime'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'NextToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'MaxResults',
                  type: 'integer'
                },
                EventStatus: {
                  location: 'querystring',
                  locationName: 'EventStatus'
                },
                LinkedAccountId: {
                  location: 'querystring',
                  locationName: 'LinkedAccountId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['HealthEvents'],
              members: {
                HealthEvents: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['EventArn', 'EventId', 'StartedAt', 'LastUpdatedAt', 'ImpactedLocations', 'Status', 'ImpactType'],
                    members: {
                      EventArn: {},
                      EventId: {},
                      StartedAt: {
                        shape: 'Ss'
                      },
                      EndedAt: {
                        shape: 'Ss'
                      },
                      CreatedAt: {
                        shape: 'Ss'
                      },
                      LastUpdatedAt: {
                        shape: 'Ss'
                      },
                      ImpactedLocations: {
                        shape: 'St'
                      },
                      Status: {},
                      PercentOfTotalTrafficImpacted: {
                        type: 'double'
                      },
                      ImpactType: {},
                      HealthScoreThreshold: {
                        type: 'double'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListInternetEvents: {
            http: {
              method: 'GET',
              requestUri: '/v20210603/InternetEvents',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                NextToken: {
                  location: 'querystring',
                  locationName: 'NextToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'InternetEventMaxResults',
                  type: 'integer'
                },
                StartTime: {
                  shape: 'Ss',
                  location: 'querystring',
                  locationName: 'StartTime'
                },
                EndTime: {
                  shape: 'Ss',
                  location: 'querystring',
                  locationName: 'EndTime'
                },
                EventStatus: {
                  location: 'querystring',
                  locationName: 'EventStatus'
                },
                EventType: {
                  location: 'querystring',
                  locationName: 'EventType'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['InternetEvents'],
              members: {
                InternetEvents: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['EventId', 'EventArn', 'StartedAt', 'ClientLocation', 'EventType', 'EventStatus'],
                    members: {
                      EventId: {},
                      EventArn: {},
                      StartedAt: {
                        shape: 'Ss'
                      },
                      EndedAt: {
                        shape: 'Ss'
                      },
                      ClientLocation: {
                        shape: 'S1b'
                      },
                      EventType: {},
                      EventStatus: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListMonitors: {
            http: {
              method: 'GET',
              requestUri: '/v20210603/Monitors',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                NextToken: {
                  location: 'querystring',
                  locationName: 'NextToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'MaxResults',
                  type: 'integer'
                },
                MonitorStatus: {
                  location: 'querystring',
                  locationName: 'MonitorStatus'
                },
                IncludeLinkedAccounts: {
                  location: 'querystring',
                  locationName: 'IncludeLinkedAccounts',
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Monitors'],
              members: {
                Monitors: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['MonitorName', 'MonitorArn', 'Status'],
                    members: {
                      MonitorName: {},
                      MonitorArn: {},
                      Status: {},
                      ProcessingStatus: {}
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
              members: {
                Tags: {
                  shape: 'S6'
                }
              }
            }
          },
          StartQuery: {
            http: {
              requestUri: '/v20210603/Monitors/{MonitorName}/Queries',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['MonitorName', 'StartTime', 'EndTime', 'QueryType'],
              members: {
                MonitorName: {
                  location: 'uri',
                  locationName: 'MonitorName'
                },
                StartTime: {
                  shape: 'Ss'
                },
                EndTime: {
                  shape: 'Ss'
                },
                QueryType: {},
                FilterParameters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Field: {},
                      Operator: {},
                      Values: {
                        type: 'list',
                        member: {}
                      }
                    }
                  }
                },
                LinkedAccountId: {}
              }
            },
            output: {
              type: 'structure',
              required: ['QueryId'],
              members: {
                QueryId: {}
              }
            }
          },
          StopQuery: {
            http: {
              method: 'DELETE',
              requestUri: '/v20210603/Monitors/{MonitorName}/Queries/{QueryId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['MonitorName', 'QueryId'],
              members: {
                MonitorName: {
                  location: 'uri',
                  locationName: 'MonitorName'
                },
                QueryId: {
                  location: 'uri',
                  locationName: 'QueryId'
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
              requestUri: '/tags/{ResourceArn}',
              responseCode: 204
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
                  shape: 'S6'
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
              responseCode: 204
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
          UpdateMonitor: {
            http: {
              method: 'PATCH',
              requestUri: '/v20210603/Monitors/{MonitorName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['MonitorName'],
              members: {
                MonitorName: {
                  location: 'uri',
                  locationName: 'MonitorName'
                },
                ResourcesToAdd: {
                  shape: 'S3'
                },
                ResourcesToRemove: {
                  shape: 'S3'
                },
                Status: {},
                ClientToken: {
                  idempotencyToken: true
                },
                MaxCityNetworksToMonitor: {
                  type: 'integer'
                },
                InternetMeasurementsLogDelivery: {
                  shape: 'Sa'
                },
                TrafficPercentageToMonitor: {
                  type: 'integer'
                },
                HealthEventsConfig: {
                  shape: 'Sf'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['MonitorArn', 'Status'],
              members: {
                MonitorArn: {},
                Status: {}
              }
            },
            idempotent: true
          }
        },
        shapes: {
          S3: {
            type: 'list',
            member: {}
          },
          S6: {
            type: 'map',
            key: {},
            value: {}
          },
          Sa: {
            type: 'structure',
            members: {
              S3Config: {
                type: 'structure',
                members: {
                  BucketName: {},
                  BucketPrefix: {},
                  LogDeliveryStatus: {}
                }
              }
            }
          },
          Sf: {
            type: 'structure',
            members: {
              AvailabilityScoreThreshold: {
                type: 'double'
              },
              PerformanceScoreThreshold: {
                type: 'double'
              },
              AvailabilityLocalHealthEventsConfig: {
                shape: 'Sh'
              },
              PerformanceLocalHealthEventsConfig: {
                shape: 'Sh'
              }
            }
          },
          Sh: {
            type: 'structure',
            members: {
              Status: {},
              HealthScoreThreshold: {
                type: 'double'
              },
              MinTrafficImpact: {
                type: 'double'
              }
            }
          },
          Ss: {
            type: 'timestamp',
            timestampFormat: 'iso8601'
          },
          St: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['ASName', 'ASNumber', 'Country', 'Status'],
              members: {
                ASName: {},
                ASNumber: {
                  type: 'long'
                },
                Country: {},
                Subdivision: {},
                Metro: {},
                City: {},
                Latitude: {
                  type: 'double'
                },
                Longitude: {
                  type: 'double'
                },
                CountryCode: {},
                SubdivisionCode: {},
                ServiceLocation: {},
                Status: {},
                CausedBy: {
                  type: 'structure',
                  required: ['Networks', 'AsPath', 'NetworkEventType'],
                  members: {
                    Networks: {
                      shape: 'Sz'
                    },
                    AsPath: {
                      shape: 'Sz'
                    },
                    NetworkEventType: {}
                  }
                },
                InternetHealth: {
                  type: 'structure',
                  members: {
                    Availability: {
                      type: 'structure',
                      members: {
                        ExperienceScore: {
                          type: 'double'
                        },
                        PercentOfTotalTrafficImpacted: {
                          type: 'double'
                        },
                        PercentOfClientLocationImpacted: {
                          type: 'double'
                        }
                      }
                    },
                    Performance: {
                      type: 'structure',
                      members: {
                        ExperienceScore: {
                          type: 'double'
                        },
                        PercentOfTotalTrafficImpacted: {
                          type: 'double'
                        },
                        PercentOfClientLocationImpacted: {
                          type: 'double'
                        },
                        RoundTripTime: {
                          type: 'structure',
                          members: {
                            P50: {
                              type: 'double'
                            },
                            P90: {
                              type: 'double'
                            },
                            P95: {
                              type: 'double'
                            }
                          }
                        }
                      }
                    }
                  }
                },
                Ipv4Prefixes: {
                  type: 'list',
                  member: {}
                }
              }
            }
          },
          Sz: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['ASName', 'ASNumber'],
              members: {
                ASName: {},
                ASNumber: {
                  type: 'long'
                }
              }
            }
          },
          S1b: {
            type: 'structure',
            required: ['ASName', 'ASNumber', 'Country', 'City', 'Latitude', 'Longitude'],
            members: {
              ASName: {},
              ASNumber: {
                type: 'long'
              },
              Country: {},
              Subdivision: {},
              Metro: {},
              City: {},
              Latitude: {
                type: 'double'
              },
              Longitude: {
                type: 'double'
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=aeb94341a12cbafc81cb05d2ca2f6788d4c3ea3f.js.map