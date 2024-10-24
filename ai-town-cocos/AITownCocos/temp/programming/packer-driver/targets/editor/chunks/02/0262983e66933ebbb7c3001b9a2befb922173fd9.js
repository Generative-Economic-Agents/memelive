System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2020-07-01',
          endpointPrefix: 'airflow',
          protocol: 'rest-json',
          protocols: ['rest-json'],
          serviceFullName: 'AmazonMWAA',
          serviceId: 'MWAA',
          signatureVersion: 'v4',
          signingName: 'airflow',
          uid: 'mwaa-2020-07-01'
        },
        operations: {
          CreateCliToken: {
            http: {
              requestUri: '/clitoken/{Name}',
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
                CliToken: {
                  shape: 'S4'
                },
                WebServerHostname: {}
              }
            },
            endpoint: {
              hostPrefix: 'env.'
            }
          },
          CreateEnvironment: {
            http: {
              method: 'PUT',
              requestUri: '/environments/{Name}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['Name', 'ExecutionRoleArn', 'SourceBucketArn', 'DagS3Path', 'NetworkConfiguration'],
              members: {
                Name: {
                  location: 'uri',
                  locationName: 'Name'
                },
                ExecutionRoleArn: {},
                SourceBucketArn: {},
                DagS3Path: {},
                NetworkConfiguration: {
                  shape: 'Sa'
                },
                PluginsS3Path: {},
                PluginsS3ObjectVersion: {},
                RequirementsS3Path: {},
                RequirementsS3ObjectVersion: {},
                StartupScriptS3Path: {},
                StartupScriptS3ObjectVersion: {},
                AirflowConfigurationOptions: {
                  shape: 'Sg'
                },
                EnvironmentClass: {},
                MaxWorkers: {
                  type: 'integer'
                },
                KmsKey: {},
                AirflowVersion: {},
                LoggingConfiguration: {
                  shape: 'Sn'
                },
                WeeklyMaintenanceWindowStart: {},
                Tags: {
                  shape: 'Ss'
                },
                WebserverAccessMode: {},
                MinWorkers: {
                  type: 'integer'
                },
                Schedulers: {
                  type: 'integer'
                },
                EndpointManagement: {},
                MinWebservers: {
                  type: 'integer'
                },
                MaxWebservers: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {}
              }
            },
            endpoint: {
              hostPrefix: 'api.'
            },
            idempotent: true
          },
          CreateWebLoginToken: {
            http: {
              requestUri: '/webtoken/{Name}',
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
                WebToken: {
                  shape: 'S4'
                },
                WebServerHostname: {},
                IamIdentity: {},
                AirflowIdentity: {}
              }
            },
            endpoint: {
              hostPrefix: 'env.'
            },
            idempotent: true
          },
          DeleteEnvironment: {
            http: {
              method: 'DELETE',
              requestUri: '/environments/{Name}',
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
            endpoint: {
              hostPrefix: 'api.'
            },
            idempotent: true
          },
          GetEnvironment: {
            http: {
              method: 'GET',
              requestUri: '/environments/{Name}',
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
                Environment: {
                  type: 'structure',
                  members: {
                    Name: {},
                    Status: {},
                    Arn: {},
                    CreatedAt: {
                      type: 'timestamp'
                    },
                    WebserverUrl: {},
                    ExecutionRoleArn: {},
                    ServiceRoleArn: {},
                    KmsKey: {},
                    AirflowVersion: {},
                    SourceBucketArn: {},
                    DagS3Path: {},
                    PluginsS3Path: {},
                    PluginsS3ObjectVersion: {},
                    RequirementsS3Path: {},
                    RequirementsS3ObjectVersion: {},
                    StartupScriptS3Path: {},
                    StartupScriptS3ObjectVersion: {},
                    AirflowConfigurationOptions: {
                      shape: 'Sg'
                    },
                    EnvironmentClass: {},
                    MaxWorkers: {
                      type: 'integer'
                    },
                    NetworkConfiguration: {
                      shape: 'Sa'
                    },
                    LoggingConfiguration: {
                      type: 'structure',
                      members: {
                        DagProcessingLogs: {
                          shape: 'S1h'
                        },
                        SchedulerLogs: {
                          shape: 'S1h'
                        },
                        WebserverLogs: {
                          shape: 'S1h'
                        },
                        WorkerLogs: {
                          shape: 'S1h'
                        },
                        TaskLogs: {
                          shape: 'S1h'
                        }
                      }
                    },
                    LastUpdate: {
                      type: 'structure',
                      members: {
                        Status: {},
                        CreatedAt: {
                          type: 'timestamp'
                        },
                        Error: {
                          type: 'structure',
                          members: {
                            ErrorCode: {},
                            ErrorMessage: {}
                          }
                        },
                        Source: {}
                      }
                    },
                    WeeklyMaintenanceWindowStart: {},
                    Tags: {
                      shape: 'Ss'
                    },
                    WebserverAccessMode: {},
                    MinWorkers: {
                      type: 'integer'
                    },
                    Schedulers: {
                      type: 'integer'
                    },
                    WebserverVpcEndpointService: {},
                    DatabaseVpcEndpointService: {},
                    CeleryExecutorQueue: {},
                    EndpointManagement: {},
                    MinWebservers: {
                      type: 'integer'
                    },
                    MaxWebservers: {
                      type: 'integer'
                    }
                  }
                }
              }
            },
            endpoint: {
              hostPrefix: 'api.'
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
              required: ['Environments'],
              members: {
                Environments: {
                  type: 'list',
                  member: {}
                },
                NextToken: {}
              }
            },
            endpoint: {
              hostPrefix: 'api.'
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
                  shape: 'Ss'
                }
              }
            },
            endpoint: {
              hostPrefix: 'api.'
            }
          },
          PublishMetrics: {
            http: {
              requestUri: '/metrics/environments/{EnvironmentName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['EnvironmentName', 'MetricData'],
              members: {
                EnvironmentName: {
                  location: 'uri',
                  locationName: 'EnvironmentName'
                },
                MetricData: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['MetricName', 'Timestamp'],
                    members: {
                      MetricName: {},
                      Timestamp: {
                        type: 'timestamp'
                      },
                      Dimensions: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          required: ['Name', 'Value'],
                          members: {
                            Name: {},
                            Value: {}
                          },
                          deprecated: true,
                          deprecatedMessage: 'This type is for internal use and not meant for public use. Data set for this type will be ignored.'
                        },
                        deprecated: true,
                        deprecatedMessage: 'This type is for internal use and not meant for public use. Data set for this type will be ignored.'
                      },
                      Value: {
                        type: 'double'
                      },
                      Unit: {},
                      StatisticValues: {
                        type: 'structure',
                        members: {
                          SampleCount: {
                            type: 'integer'
                          },
                          Sum: {
                            type: 'double'
                          },
                          Minimum: {
                            type: 'double'
                          },
                          Maximum: {
                            type: 'double'
                          }
                        },
                        deprecated: true,
                        deprecatedMessage: 'This type is for internal use and not meant for public use. Data set for this type will be ignored.'
                      }
                    },
                    deprecated: true,
                    deprecatedMessage: 'This type is for internal use and not meant for public use. Data set for this type will be ignored.'
                  },
                  deprecated: true,
                  deprecatedMessage: 'This type is for internal use and not meant for public use. Data set for this type will be ignored.'
                }
              },
              deprecated: true,
              deprecatedMessage: 'This type is for internal use and not meant for public use. Data set for this type will be ignored.'
            },
            output: {
              type: 'structure',
              members: {},
              deprecated: true,
              deprecatedMessage: 'This type is for internal use and not meant for public use. Data set for this type will be ignored.'
            },
            deprecated: true,
            deprecatedMessage: 'This API is for internal use and not meant for public use, and is no longer available.',
            endpoint: {
              hostPrefix: 'ops.'
            }
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
                  shape: 'Ss'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            endpoint: {
              hostPrefix: 'api.'
            }
          },
          UntagResource: {
            http: {
              method: 'DELETE',
              requestUri: '/tags/{ResourceArn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ResourceArn', 'tagKeys'],
              members: {
                ResourceArn: {
                  location: 'uri',
                  locationName: 'ResourceArn'
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
            endpoint: {
              hostPrefix: 'api.'
            },
            idempotent: true
          },
          UpdateEnvironment: {
            http: {
              method: 'PATCH',
              requestUri: '/environments/{Name}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {
                  location: 'uri',
                  locationName: 'Name'
                },
                ExecutionRoleArn: {},
                AirflowVersion: {},
                SourceBucketArn: {},
                DagS3Path: {},
                PluginsS3Path: {},
                PluginsS3ObjectVersion: {},
                RequirementsS3Path: {},
                RequirementsS3ObjectVersion: {},
                StartupScriptS3Path: {},
                StartupScriptS3ObjectVersion: {},
                AirflowConfigurationOptions: {
                  shape: 'Sg'
                },
                EnvironmentClass: {},
                MaxWorkers: {
                  type: 'integer'
                },
                NetworkConfiguration: {
                  type: 'structure',
                  required: ['SecurityGroupIds'],
                  members: {
                    SecurityGroupIds: {
                      shape: 'Sd'
                    }
                  }
                },
                LoggingConfiguration: {
                  shape: 'Sn'
                },
                WeeklyMaintenanceWindowStart: {},
                WebserverAccessMode: {},
                MinWorkers: {
                  type: 'integer'
                },
                Schedulers: {
                  type: 'integer'
                },
                MinWebservers: {
                  type: 'integer'
                },
                MaxWebservers: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {}
              }
            },
            endpoint: {
              hostPrefix: 'api.'
            }
          }
        },
        shapes: {
          S4: {
            type: 'string',
            sensitive: true
          },
          Sa: {
            type: 'structure',
            members: {
              SubnetIds: {
                type: 'list',
                member: {}
              },
              SecurityGroupIds: {
                shape: 'Sd'
              }
            }
          },
          Sd: {
            type: 'list',
            member: {}
          },
          Sg: {
            type: 'map',
            key: {},
            value: {
              type: 'string',
              sensitive: true
            },
            sensitive: true
          },
          Sn: {
            type: 'structure',
            members: {
              DagProcessingLogs: {
                shape: 'So'
              },
              SchedulerLogs: {
                shape: 'So'
              },
              WebserverLogs: {
                shape: 'So'
              },
              WorkerLogs: {
                shape: 'So'
              },
              TaskLogs: {
                shape: 'So'
              }
            }
          },
          So: {
            type: 'structure',
            required: ['Enabled', 'LogLevel'],
            members: {
              Enabled: {
                type: 'boolean'
              },
              LogLevel: {}
            }
          },
          Ss: {
            type: 'map',
            key: {},
            value: {}
          },
          S1h: {
            type: 'structure',
            members: {
              Enabled: {
                type: 'boolean'
              },
              LogLevel: {},
              CloudWatchLogGroupArn: {}
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=0262983e66933ebbb7c3001b9a2befb922173fd9.js.map