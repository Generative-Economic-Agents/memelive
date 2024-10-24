System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2020-08-23',
          endpointPrefix: 'appflow',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceFullName: 'Amazon Appflow',
          serviceId: 'Appflow',
          signatureVersion: 'v4',
          signingName: 'appflow',
          uid: 'appflow-2020-08-23'
        },
        operations: {
          CancelFlowExecutions: {
            http: {
              requestUri: '/cancel-flow-executions'
            },
            input: {
              type: 'structure',
              required: ['flowName'],
              members: {
                flowName: {},
                executionIds: {
                  shape: 'S3'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                invalidExecutions: {
                  shape: 'S3'
                }
              }
            }
          },
          CreateConnectorProfile: {
            http: {
              requestUri: '/create-connector-profile'
            },
            input: {
              type: 'structure',
              required: ['connectorProfileName', 'connectorType', 'connectionMode', 'connectorProfileConfig'],
              members: {
                connectorProfileName: {},
                kmsArn: {},
                connectorType: {},
                connectorLabel: {},
                connectionMode: {},
                connectorProfileConfig: {
                  shape: 'Sc'
                },
                clientToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                connectorProfileArn: {}
              }
            }
          },
          CreateFlow: {
            http: {
              requestUri: '/create-flow'
            },
            input: {
              type: 'structure',
              required: ['flowName', 'triggerConfig', 'sourceFlowConfig', 'destinationFlowConfigList', 'tasks'],
              members: {
                flowName: {},
                description: {},
                kmsArn: {},
                triggerConfig: {
                  shape: 'S3d'
                },
                sourceFlowConfig: {
                  shape: 'S3n'
                },
                destinationFlowConfigList: {
                  shape: 'S4n'
                },
                tasks: {
                  shape: 'S5n'
                },
                tags: {
                  shape: 'S6d'
                },
                metadataCatalogConfig: {
                  shape: 'S6g'
                },
                clientToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                flowArn: {},
                flowStatus: {}
              }
            }
          },
          DeleteConnectorProfile: {
            http: {
              requestUri: '/delete-connector-profile'
            },
            input: {
              type: 'structure',
              required: ['connectorProfileName'],
              members: {
                connectorProfileName: {},
                forceDelete: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteFlow: {
            http: {
              requestUri: '/delete-flow'
            },
            input: {
              type: 'structure',
              required: ['flowName'],
              members: {
                flowName: {},
                forceDelete: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DescribeConnector: {
            http: {
              requestUri: '/describe-connector'
            },
            input: {
              type: 'structure',
              required: ['connectorType'],
              members: {
                connectorType: {},
                connectorLabel: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                connectorConfiguration: {
                  shape: 'S6u'
                }
              }
            }
          },
          DescribeConnectorEntity: {
            http: {
              requestUri: '/describe-connector-entity'
            },
            input: {
              type: 'structure',
              required: ['connectorEntityName'],
              members: {
                connectorEntityName: {},
                connectorType: {},
                connectorProfileName: {},
                apiVersion: {}
              }
            },
            output: {
              type: 'structure',
              required: ['connectorEntityFields'],
              members: {
                connectorEntityFields: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['identifier'],
                    members: {
                      identifier: {},
                      parentIdentifier: {},
                      label: {},
                      isPrimaryKey: {
                        type: 'boolean'
                      },
                      defaultValue: {},
                      isDeprecated: {
                        type: 'boolean'
                      },
                      supportedFieldTypeDetails: {
                        type: 'structure',
                        required: ['v1'],
                        members: {
                          v1: {
                            type: 'structure',
                            required: ['fieldType', 'filterOperators'],
                            members: {
                              fieldType: {},
                              filterOperators: {
                                type: 'list',
                                member: {}
                              },
                              supportedValues: {
                                type: 'list',
                                member: {}
                              },
                              valueRegexPattern: {},
                              supportedDateFormat: {},
                              fieldValueRange: {
                                shape: 'S94'
                              },
                              fieldLengthRange: {
                                shape: 'S94'
                              }
                            }
                          }
                        }
                      },
                      description: {},
                      sourceProperties: {
                        type: 'structure',
                        members: {
                          isRetrievable: {
                            type: 'boolean'
                          },
                          isQueryable: {
                            type: 'boolean'
                          },
                          isTimestampFieldForIncrementalQueries: {
                            type: 'boolean'
                          }
                        }
                      },
                      destinationProperties: {
                        type: 'structure',
                        members: {
                          isCreatable: {
                            type: 'boolean'
                          },
                          isNullable: {
                            type: 'boolean'
                          },
                          isUpsertable: {
                            type: 'boolean'
                          },
                          isUpdatable: {
                            type: 'boolean'
                          },
                          isDefaultedOnCreate: {
                            type: 'boolean'
                          },
                          supportedWriteOperations: {
                            shape: 'S8k'
                          }
                        }
                      },
                      customProperties: {
                        shape: 'S4g'
                      }
                    }
                  }
                }
              }
            }
          },
          DescribeConnectorProfiles: {
            http: {
              requestUri: '/describe-connector-profiles'
            },
            input: {
              type: 'structure',
              members: {
                connectorProfileNames: {
                  type: 'list',
                  member: {}
                },
                connectorType: {},
                connectorLabel: {},
                maxResults: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                connectorProfileDetails: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      connectorProfileArn: {},
                      connectorProfileName: {},
                      connectorType: {},
                      connectorLabel: {},
                      connectionMode: {},
                      credentialsArn: {},
                      connectorProfileProperties: {
                        shape: 'Sd'
                      },
                      createdAt: {
                        type: 'timestamp'
                      },
                      lastUpdatedAt: {
                        type: 'timestamp'
                      },
                      privateConnectionProvisioningState: {
                        type: 'structure',
                        members: {
                          status: {},
                          failureMessage: {},
                          failureCause: {}
                        }
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          DescribeConnectors: {
            http: {
              requestUri: '/describe-connectors'
            },
            input: {
              type: 'structure',
              members: {
                connectorTypes: {
                  shape: 'S6v'
                },
                maxResults: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                connectorConfigurations: {
                  type: 'map',
                  key: {},
                  value: {
                    shape: 'S6u'
                  }
                },
                connectors: {
                  shape: 'S9m'
                },
                nextToken: {}
              }
            }
          },
          DescribeFlow: {
            http: {
              requestUri: '/describe-flow'
            },
            input: {
              type: 'structure',
              required: ['flowName'],
              members: {
                flowName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                flowArn: {},
                description: {},
                flowName: {},
                kmsArn: {},
                flowStatus: {},
                flowStatusMessage: {},
                sourceFlowConfig: {
                  shape: 'S3n'
                },
                destinationFlowConfigList: {
                  shape: 'S4n'
                },
                lastRunExecutionDetails: {
                  shape: 'S9s'
                },
                triggerConfig: {
                  shape: 'S3d'
                },
                tasks: {
                  shape: 'S5n'
                },
                createdAt: {
                  type: 'timestamp'
                },
                lastUpdatedAt: {
                  type: 'timestamp'
                },
                createdBy: {},
                lastUpdatedBy: {},
                tags: {
                  shape: 'S6d'
                },
                metadataCatalogConfig: {
                  shape: 'S6g'
                },
                lastRunMetadataCatalogDetails: {
                  shape: 'S9x'
                },
                schemaVersion: {
                  type: 'long'
                }
              }
            }
          },
          DescribeFlowExecutionRecords: {
            http: {
              requestUri: '/describe-flow-execution-records'
            },
            input: {
              type: 'structure',
              required: ['flowName'],
              members: {
                flowName: {},
                maxResults: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                flowExecutions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      executionId: {},
                      executionStatus: {},
                      executionResult: {
                        type: 'structure',
                        members: {
                          errorInfo: {
                            type: 'structure',
                            members: {
                              putFailuresCount: {
                                type: 'long'
                              },
                              executionMessage: {}
                            }
                          },
                          bytesProcessed: {
                            type: 'long'
                          },
                          bytesWritten: {
                            type: 'long'
                          },
                          recordsProcessed: {
                            type: 'long'
                          },
                          numParallelProcesses: {
                            type: 'long'
                          },
                          maxPageSize: {
                            type: 'long'
                          }
                        }
                      },
                      startedAt: {
                        type: 'timestamp'
                      },
                      lastUpdatedAt: {
                        type: 'timestamp'
                      },
                      dataPullStartTime: {
                        type: 'timestamp'
                      },
                      dataPullEndTime: {
                        type: 'timestamp'
                      },
                      metadataCatalogDetails: {
                        shape: 'S9x'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListConnectorEntities: {
            http: {
              requestUri: '/list-connector-entities'
            },
            input: {
              type: 'structure',
              members: {
                connectorProfileName: {},
                connectorType: {},
                entitiesPath: {},
                apiVersion: {},
                maxResults: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              required: ['connectorEntityMap'],
              members: {
                connectorEntityMap: {
                  type: 'map',
                  key: {},
                  value: {
                    type: 'list',
                    member: {
                      type: 'structure',
                      required: ['name'],
                      members: {
                        name: {},
                        label: {},
                        hasNestedEntities: {
                          type: 'boolean'
                        }
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListConnectors: {
            http: {
              requestUri: '/list-connectors'
            },
            input: {
              type: 'structure',
              members: {
                maxResults: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                connectors: {
                  shape: 'S9m'
                },
                nextToken: {}
              }
            }
          },
          ListFlows: {
            http: {
              requestUri: '/list-flows'
            },
            input: {
              type: 'structure',
              members: {
                maxResults: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                flows: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      flowArn: {},
                      description: {},
                      flowName: {},
                      flowStatus: {},
                      sourceConnectorType: {},
                      sourceConnectorLabel: {},
                      destinationConnectorType: {},
                      destinationConnectorLabel: {},
                      triggerType: {},
                      createdAt: {
                        type: 'timestamp'
                      },
                      lastUpdatedAt: {
                        type: 'timestamp'
                      },
                      createdBy: {},
                      lastUpdatedBy: {},
                      tags: {
                        shape: 'S6d'
                      },
                      lastRunExecutionDetails: {
                        shape: 'S9s'
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
                  shape: 'S6d'
                }
              }
            }
          },
          RegisterConnector: {
            http: {
              requestUri: '/register-connector'
            },
            input: {
              type: 'structure',
              members: {
                connectorLabel: {},
                description: {},
                connectorProvisioningType: {},
                connectorProvisioningConfig: {
                  shape: 'S8m'
                },
                clientToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                connectorArn: {}
              }
            }
          },
          ResetConnectorMetadataCache: {
            http: {
              requestUri: '/reset-connector-metadata-cache'
            },
            input: {
              type: 'structure',
              members: {
                connectorProfileName: {},
                connectorType: {},
                connectorEntityName: {},
                entitiesPath: {},
                apiVersion: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          StartFlow: {
            http: {
              requestUri: '/start-flow'
            },
            input: {
              type: 'structure',
              required: ['flowName'],
              members: {
                flowName: {},
                clientToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                flowArn: {},
                flowStatus: {},
                executionId: {}
              }
            }
          },
          StopFlow: {
            http: {
              requestUri: '/stop-flow'
            },
            input: {
              type: 'structure',
              required: ['flowName'],
              members: {
                flowName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                flowArn: {},
                flowStatus: {}
              }
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
                  shape: 'S6d'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UnregisterConnector: {
            http: {
              requestUri: '/unregister-connector'
            },
            input: {
              type: 'structure',
              required: ['connectorLabel'],
              members: {
                connectorLabel: {},
                forceDelete: {
                  type: 'boolean'
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
          UpdateConnectorProfile: {
            http: {
              requestUri: '/update-connector-profile'
            },
            input: {
              type: 'structure',
              required: ['connectorProfileName', 'connectionMode', 'connectorProfileConfig'],
              members: {
                connectorProfileName: {},
                connectionMode: {},
                connectorProfileConfig: {
                  shape: 'Sc'
                },
                clientToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                connectorProfileArn: {}
              }
            }
          },
          UpdateConnectorRegistration: {
            http: {
              requestUri: '/update-connector-registration'
            },
            input: {
              type: 'structure',
              required: ['connectorLabel'],
              members: {
                connectorLabel: {},
                description: {},
                connectorProvisioningConfig: {
                  shape: 'S8m'
                },
                clientToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                connectorArn: {}
              }
            }
          },
          UpdateFlow: {
            http: {
              requestUri: '/update-flow'
            },
            input: {
              type: 'structure',
              required: ['flowName', 'triggerConfig', 'sourceFlowConfig', 'destinationFlowConfigList', 'tasks'],
              members: {
                flowName: {},
                description: {},
                triggerConfig: {
                  shape: 'S3d'
                },
                sourceFlowConfig: {
                  shape: 'S3n'
                },
                destinationFlowConfigList: {
                  shape: 'S4n'
                },
                tasks: {
                  shape: 'S5n'
                },
                metadataCatalogConfig: {
                  shape: 'S6g'
                },
                clientToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                flowStatus: {}
              }
            }
          }
        },
        shapes: {
          S3: {
            type: 'list',
            member: {}
          },
          Sc: {
            type: 'structure',
            required: ['connectorProfileProperties'],
            members: {
              connectorProfileProperties: {
                shape: 'Sd'
              },
              connectorProfileCredentials: {
                type: 'structure',
                members: {
                  Amplitude: {
                    type: 'structure',
                    required: ['apiKey', 'secretKey'],
                    members: {
                      apiKey: {
                        shape: 'S1x'
                      },
                      secretKey: {
                        type: 'string',
                        sensitive: true
                      }
                    }
                  },
                  Datadog: {
                    type: 'structure',
                    required: ['apiKey', 'applicationKey'],
                    members: {
                      apiKey: {
                        shape: 'S1x'
                      },
                      applicationKey: {}
                    }
                  },
                  Dynatrace: {
                    type: 'structure',
                    required: ['apiToken'],
                    members: {
                      apiToken: {}
                    }
                  },
                  GoogleAnalytics: {
                    type: 'structure',
                    required: ['clientId', 'clientSecret'],
                    members: {
                      clientId: {},
                      clientSecret: {
                        shape: 'S25'
                      },
                      accessToken: {
                        shape: 'S26'
                      },
                      refreshToken: {},
                      oAuthRequest: {
                        shape: 'S28'
                      }
                    }
                  },
                  Honeycode: {
                    type: 'structure',
                    members: {
                      accessToken: {
                        shape: 'S26'
                      },
                      refreshToken: {},
                      oAuthRequest: {
                        shape: 'S28'
                      }
                    }
                  },
                  InforNexus: {
                    type: 'structure',
                    required: ['accessKeyId', 'userId', 'secretAccessKey', 'datakey'],
                    members: {
                      accessKeyId: {
                        type: 'string',
                        sensitive: true
                      },
                      userId: {},
                      secretAccessKey: {},
                      datakey: {}
                    }
                  },
                  Marketo: {
                    type: 'structure',
                    required: ['clientId', 'clientSecret'],
                    members: {
                      clientId: {},
                      clientSecret: {
                        shape: 'S25'
                      },
                      accessToken: {
                        shape: 'S26'
                      },
                      oAuthRequest: {
                        shape: 'S28'
                      }
                    }
                  },
                  Redshift: {
                    type: 'structure',
                    members: {
                      username: {},
                      password: {
                        shape: 'S2j'
                      }
                    }
                  },
                  Salesforce: {
                    type: 'structure',
                    members: {
                      accessToken: {
                        shape: 'S26'
                      },
                      refreshToken: {},
                      oAuthRequest: {
                        shape: 'S28'
                      },
                      clientCredentialsArn: {
                        shape: 'S2l'
                      },
                      oAuth2GrantType: {},
                      jwtToken: {
                        type: 'string',
                        sensitive: true
                      }
                    }
                  },
                  ServiceNow: {
                    type: 'structure',
                    members: {
                      username: {},
                      password: {
                        shape: 'S2j'
                      },
                      oAuth2Credentials: {
                        shape: 'S2o'
                      }
                    }
                  },
                  Singular: {
                    type: 'structure',
                    required: ['apiKey'],
                    members: {
                      apiKey: {
                        shape: 'S1x'
                      }
                    }
                  },
                  Slack: {
                    type: 'structure',
                    required: ['clientId', 'clientSecret'],
                    members: {
                      clientId: {},
                      clientSecret: {
                        shape: 'S25'
                      },
                      accessToken: {
                        shape: 'S26'
                      },
                      oAuthRequest: {
                        shape: 'S28'
                      }
                    }
                  },
                  Snowflake: {
                    type: 'structure',
                    required: ['username', 'password'],
                    members: {
                      username: {},
                      password: {
                        shape: 'S2j'
                      }
                    }
                  },
                  Trendmicro: {
                    type: 'structure',
                    required: ['apiSecretKey'],
                    members: {
                      apiSecretKey: {
                        shape: 'S2t'
                      }
                    }
                  },
                  Veeva: {
                    type: 'structure',
                    required: ['username', 'password'],
                    members: {
                      username: {},
                      password: {
                        shape: 'S2j'
                      }
                    }
                  },
                  Zendesk: {
                    type: 'structure',
                    required: ['clientId', 'clientSecret'],
                    members: {
                      clientId: {},
                      clientSecret: {
                        shape: 'S25'
                      },
                      accessToken: {
                        shape: 'S26'
                      },
                      oAuthRequest: {
                        shape: 'S28'
                      }
                    }
                  },
                  SAPOData: {
                    type: 'structure',
                    members: {
                      basicAuthCredentials: {
                        shape: 'S2x'
                      },
                      oAuthCredentials: {
                        type: 'structure',
                        required: ['clientId', 'clientSecret'],
                        members: {
                          clientId: {},
                          clientSecret: {
                            shape: 'S25'
                          },
                          accessToken: {
                            shape: 'S26'
                          },
                          refreshToken: {},
                          oAuthRequest: {
                            shape: 'S28'
                          }
                        }
                      }
                    }
                  },
                  CustomConnector: {
                    type: 'structure',
                    required: ['authenticationType'],
                    members: {
                      authenticationType: {},
                      basic: {
                        shape: 'S2x'
                      },
                      oauth2: {
                        shape: 'S2o'
                      },
                      apiKey: {
                        type: 'structure',
                        required: ['apiKey'],
                        members: {
                          apiKey: {
                            shape: 'S1x'
                          },
                          apiSecretKey: {
                            shape: 'S2t'
                          }
                        }
                      },
                      custom: {
                        type: 'structure',
                        required: ['customAuthenticationType'],
                        members: {
                          customAuthenticationType: {},
                          credentialsMap: {
                            type: 'map',
                            key: {
                              type: 'string',
                              sensitive: true
                            },
                            value: {
                              type: 'string',
                              sensitive: true
                            }
                          }
                        }
                      }
                    }
                  },
                  Pardot: {
                    type: 'structure',
                    members: {
                      accessToken: {
                        shape: 'S26'
                      },
                      refreshToken: {},
                      oAuthRequest: {
                        shape: 'S28'
                      },
                      clientCredentialsArn: {
                        shape: 'S2l'
                      }
                    }
                  }
                }
              }
            }
          },
          Sd: {
            type: 'structure',
            members: {
              Amplitude: {
                type: 'structure',
                members: {}
              },
              Datadog: {
                type: 'structure',
                required: ['instanceUrl'],
                members: {
                  instanceUrl: {}
                }
              },
              Dynatrace: {
                type: 'structure',
                required: ['instanceUrl'],
                members: {
                  instanceUrl: {}
                }
              },
              GoogleAnalytics: {
                type: 'structure',
                members: {}
              },
              Honeycode: {
                type: 'structure',
                members: {}
              },
              InforNexus: {
                type: 'structure',
                required: ['instanceUrl'],
                members: {
                  instanceUrl: {}
                }
              },
              Marketo: {
                type: 'structure',
                required: ['instanceUrl'],
                members: {
                  instanceUrl: {}
                }
              },
              Redshift: {
                type: 'structure',
                required: ['bucketName', 'roleArn'],
                members: {
                  databaseUrl: {},
                  bucketName: {},
                  bucketPrefix: {},
                  roleArn: {},
                  dataApiRoleArn: {},
                  isRedshiftServerless: {
                    type: 'boolean'
                  },
                  clusterIdentifier: {},
                  workgroupName: {},
                  databaseName: {}
                }
              },
              Salesforce: {
                type: 'structure',
                members: {
                  instanceUrl: {},
                  isSandboxEnvironment: {
                    type: 'boolean'
                  },
                  usePrivateLinkForMetadataAndAuthorization: {
                    type: 'boolean'
                  }
                }
              },
              ServiceNow: {
                type: 'structure',
                required: ['instanceUrl'],
                members: {
                  instanceUrl: {}
                }
              },
              Singular: {
                type: 'structure',
                members: {}
              },
              Slack: {
                type: 'structure',
                required: ['instanceUrl'],
                members: {
                  instanceUrl: {}
                }
              },
              Snowflake: {
                type: 'structure',
                required: ['warehouse', 'stage', 'bucketName'],
                members: {
                  warehouse: {},
                  stage: {},
                  bucketName: {},
                  bucketPrefix: {},
                  privateLinkServiceName: {},
                  accountName: {},
                  region: {}
                }
              },
              Trendmicro: {
                type: 'structure',
                members: {}
              },
              Veeva: {
                type: 'structure',
                required: ['instanceUrl'],
                members: {
                  instanceUrl: {}
                }
              },
              Zendesk: {
                type: 'structure',
                required: ['instanceUrl'],
                members: {
                  instanceUrl: {}
                }
              },
              SAPOData: {
                type: 'structure',
                required: ['applicationHostUrl', 'applicationServicePath', 'portNumber', 'clientNumber'],
                members: {
                  applicationHostUrl: {},
                  applicationServicePath: {},
                  portNumber: {
                    type: 'integer'
                  },
                  clientNumber: {},
                  logonLanguage: {},
                  privateLinkServiceName: {},
                  oAuthProperties: {
                    type: 'structure',
                    required: ['tokenUrl', 'authCodeUrl', 'oAuthScopes'],
                    members: {
                      tokenUrl: {},
                      authCodeUrl: {},
                      oAuthScopes: {
                        shape: 'S1i'
                      }
                    }
                  },
                  disableSSO: {
                    type: 'boolean'
                  }
                }
              },
              CustomConnector: {
                type: 'structure',
                members: {
                  profileProperties: {
                    type: 'map',
                    key: {},
                    value: {}
                  },
                  oAuth2Properties: {
                    type: 'structure',
                    required: ['tokenUrl', 'oAuth2GrantType'],
                    members: {
                      tokenUrl: {},
                      oAuth2GrantType: {},
                      tokenUrlCustomProperties: {
                        type: 'map',
                        key: {},
                        value: {}
                      }
                    }
                  }
                }
              },
              Pardot: {
                type: 'structure',
                members: {
                  instanceUrl: {},
                  isSandboxEnvironment: {
                    type: 'boolean'
                  },
                  businessUnitId: {}
                }
              }
            }
          },
          S1i: {
            type: 'list',
            member: {}
          },
          S1x: {
            type: 'string',
            sensitive: true
          },
          S25: {
            type: 'string',
            sensitive: true
          },
          S26: {
            type: 'string',
            sensitive: true
          },
          S28: {
            type: 'structure',
            members: {
              authCode: {},
              redirectUri: {}
            }
          },
          S2j: {
            type: 'string',
            sensitive: true
          },
          S2l: {
            type: 'string',
            sensitive: true
          },
          S2o: {
            type: 'structure',
            members: {
              clientId: {},
              clientSecret: {
                shape: 'S25'
              },
              accessToken: {
                shape: 'S26'
              },
              refreshToken: {},
              oAuthRequest: {
                shape: 'S28'
              }
            }
          },
          S2t: {
            type: 'string',
            sensitive: true
          },
          S2x: {
            type: 'structure',
            required: ['username', 'password'],
            members: {
              username: {},
              password: {
                shape: 'S2j'
              }
            }
          },
          S3d: {
            type: 'structure',
            required: ['triggerType'],
            members: {
              triggerType: {},
              triggerProperties: {
                type: 'structure',
                members: {
                  Scheduled: {
                    type: 'structure',
                    required: ['scheduleExpression'],
                    members: {
                      scheduleExpression: {},
                      dataPullMode: {},
                      scheduleStartTime: {
                        type: 'timestamp'
                      },
                      scheduleEndTime: {
                        type: 'timestamp'
                      },
                      timezone: {},
                      scheduleOffset: {
                        type: 'long'
                      },
                      firstExecutionFrom: {
                        type: 'timestamp'
                      },
                      flowErrorDeactivationThreshold: {
                        type: 'integer'
                      }
                    }
                  }
                }
              }
            }
          },
          S3n: {
            type: 'structure',
            required: ['connectorType', 'sourceConnectorProperties'],
            members: {
              connectorType: {},
              apiVersion: {},
              connectorProfileName: {},
              sourceConnectorProperties: {
                type: 'structure',
                members: {
                  Amplitude: {
                    type: 'structure',
                    required: ['object'],
                    members: {
                      object: {}
                    }
                  },
                  Datadog: {
                    type: 'structure',
                    required: ['object'],
                    members: {
                      object: {}
                    }
                  },
                  Dynatrace: {
                    type: 'structure',
                    required: ['object'],
                    members: {
                      object: {}
                    }
                  },
                  GoogleAnalytics: {
                    type: 'structure',
                    required: ['object'],
                    members: {
                      object: {}
                    }
                  },
                  InforNexus: {
                    type: 'structure',
                    required: ['object'],
                    members: {
                      object: {}
                    }
                  },
                  Marketo: {
                    type: 'structure',
                    required: ['object'],
                    members: {
                      object: {}
                    }
                  },
                  S3: {
                    type: 'structure',
                    required: ['bucketName'],
                    members: {
                      bucketName: {},
                      bucketPrefix: {},
                      s3InputFormatConfig: {
                        type: 'structure',
                        members: {
                          s3InputFileType: {}
                        }
                      }
                    }
                  },
                  Salesforce: {
                    type: 'structure',
                    required: ['object'],
                    members: {
                      object: {},
                      enableDynamicFieldUpdate: {
                        type: 'boolean'
                      },
                      includeDeletedRecords: {
                        type: 'boolean'
                      },
                      dataTransferApi: {}
                    }
                  },
                  ServiceNow: {
                    type: 'structure',
                    required: ['object'],
                    members: {
                      object: {}
                    }
                  },
                  Singular: {
                    type: 'structure',
                    required: ['object'],
                    members: {
                      object: {}
                    }
                  },
                  Slack: {
                    type: 'structure',
                    required: ['object'],
                    members: {
                      object: {}
                    }
                  },
                  Trendmicro: {
                    type: 'structure',
                    required: ['object'],
                    members: {
                      object: {}
                    }
                  },
                  Veeva: {
                    type: 'structure',
                    required: ['object'],
                    members: {
                      object: {},
                      documentType: {},
                      includeSourceFiles: {
                        type: 'boolean'
                      },
                      includeRenditions: {
                        type: 'boolean'
                      },
                      includeAllVersions: {
                        type: 'boolean'
                      }
                    }
                  },
                  Zendesk: {
                    type: 'structure',
                    required: ['object'],
                    members: {
                      object: {}
                    }
                  },
                  SAPOData: {
                    type: 'structure',
                    members: {
                      objectPath: {},
                      parallelismConfig: {
                        type: 'structure',
                        required: ['maxParallelism'],
                        members: {
                          maxParallelism: {
                            type: 'integer'
                          }
                        }
                      },
                      paginationConfig: {
                        type: 'structure',
                        required: ['maxPageSize'],
                        members: {
                          maxPageSize: {
                            type: 'integer'
                          }
                        }
                      }
                    }
                  },
                  CustomConnector: {
                    type: 'structure',
                    required: ['entityName'],
                    members: {
                      entityName: {},
                      customProperties: {
                        shape: 'S4g'
                      },
                      dataTransferApi: {
                        shape: 'S4h'
                      }
                    }
                  },
                  Pardot: {
                    type: 'structure',
                    required: ['object'],
                    members: {
                      object: {}
                    }
                  }
                }
              },
              incrementalPullConfig: {
                type: 'structure',
                members: {
                  datetimeTypeFieldName: {}
                }
              }
            }
          },
          S4g: {
            type: 'map',
            key: {},
            value: {}
          },
          S4h: {
            type: 'structure',
            members: {
              Name: {},
              Type: {}
            }
          },
          S4n: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['connectorType', 'destinationConnectorProperties'],
              members: {
                connectorType: {},
                apiVersion: {},
                connectorProfileName: {},
                destinationConnectorProperties: {
                  type: 'structure',
                  members: {
                    Redshift: {
                      type: 'structure',
                      required: ['object', 'intermediateBucketName'],
                      members: {
                        object: {},
                        intermediateBucketName: {},
                        bucketPrefix: {},
                        errorHandlingConfig: {
                          shape: 'S4r'
                        }
                      }
                    },
                    S3: {
                      type: 'structure',
                      required: ['bucketName'],
                      members: {
                        bucketName: {},
                        bucketPrefix: {},
                        s3OutputFormatConfig: {
                          type: 'structure',
                          members: {
                            fileType: {},
                            prefixConfig: {
                              shape: 'S4v'
                            },
                            aggregationConfig: {
                              shape: 'S50'
                            },
                            preserveSourceDataTyping: {
                              type: 'boolean'
                            }
                          }
                        }
                      }
                    },
                    Salesforce: {
                      type: 'structure',
                      required: ['object'],
                      members: {
                        object: {},
                        idFieldNames: {
                          shape: 'S55'
                        },
                        errorHandlingConfig: {
                          shape: 'S4r'
                        },
                        writeOperationType: {},
                        dataTransferApi: {}
                      }
                    },
                    Snowflake: {
                      type: 'structure',
                      required: ['object', 'intermediateBucketName'],
                      members: {
                        object: {},
                        intermediateBucketName: {},
                        bucketPrefix: {},
                        errorHandlingConfig: {
                          shape: 'S4r'
                        }
                      }
                    },
                    EventBridge: {
                      type: 'structure',
                      required: ['object'],
                      members: {
                        object: {},
                        errorHandlingConfig: {
                          shape: 'S4r'
                        }
                      }
                    },
                    LookoutMetrics: {
                      type: 'structure',
                      members: {}
                    },
                    Upsolver: {
                      type: 'structure',
                      required: ['bucketName', 's3OutputFormatConfig'],
                      members: {
                        bucketName: {},
                        bucketPrefix: {},
                        s3OutputFormatConfig: {
                          type: 'structure',
                          required: ['prefixConfig'],
                          members: {
                            fileType: {},
                            prefixConfig: {
                              shape: 'S4v'
                            },
                            aggregationConfig: {
                              shape: 'S50'
                            }
                          }
                        }
                      }
                    },
                    Honeycode: {
                      type: 'structure',
                      required: ['object'],
                      members: {
                        object: {},
                        errorHandlingConfig: {
                          shape: 'S4r'
                        }
                      }
                    },
                    CustomerProfiles: {
                      type: 'structure',
                      required: ['domainName'],
                      members: {
                        domainName: {},
                        objectTypeName: {}
                      }
                    },
                    Zendesk: {
                      type: 'structure',
                      required: ['object'],
                      members: {
                        object: {},
                        idFieldNames: {
                          shape: 'S55'
                        },
                        errorHandlingConfig: {
                          shape: 'S4r'
                        },
                        writeOperationType: {}
                      }
                    },
                    Marketo: {
                      type: 'structure',
                      required: ['object'],
                      members: {
                        object: {},
                        errorHandlingConfig: {
                          shape: 'S4r'
                        }
                      }
                    },
                    CustomConnector: {
                      type: 'structure',
                      required: ['entityName'],
                      members: {
                        entityName: {},
                        errorHandlingConfig: {
                          shape: 'S4r'
                        },
                        writeOperationType: {},
                        idFieldNames: {
                          shape: 'S55'
                        },
                        customProperties: {
                          shape: 'S4g'
                        }
                      }
                    },
                    SAPOData: {
                      type: 'structure',
                      required: ['objectPath'],
                      members: {
                        objectPath: {},
                        successResponseHandlingConfig: {
                          type: 'structure',
                          members: {
                            bucketPrefix: {},
                            bucketName: {}
                          }
                        },
                        idFieldNames: {
                          shape: 'S55'
                        },
                        errorHandlingConfig: {
                          shape: 'S4r'
                        },
                        writeOperationType: {}
                      }
                    }
                  }
                }
              }
            }
          },
          S4r: {
            type: 'structure',
            members: {
              failOnFirstDestinationError: {
                type: 'boolean'
              },
              bucketPrefix: {},
              bucketName: {}
            }
          },
          S4v: {
            type: 'structure',
            members: {
              prefixType: {},
              prefixFormat: {},
              pathPrefixHierarchy: {
                type: 'list',
                member: {}
              }
            }
          },
          S50: {
            type: 'structure',
            members: {
              aggregationType: {},
              targetFileSize: {
                type: 'long'
              }
            }
          },
          S55: {
            type: 'list',
            member: {}
          },
          S5n: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['sourceFields', 'taskType'],
              members: {
                sourceFields: {
                  type: 'list',
                  member: {}
                },
                connectorOperator: {
                  type: 'structure',
                  members: {
                    Amplitude: {},
                    Datadog: {},
                    Dynatrace: {},
                    GoogleAnalytics: {},
                    InforNexus: {},
                    Marketo: {},
                    S3: {},
                    Salesforce: {},
                    ServiceNow: {},
                    Singular: {},
                    Slack: {},
                    Trendmicro: {},
                    Veeva: {},
                    Zendesk: {},
                    SAPOData: {},
                    CustomConnector: {},
                    Pardot: {}
                  }
                },
                destinationField: {},
                taskType: {},
                taskProperties: {
                  type: 'map',
                  key: {},
                  value: {}
                }
              }
            }
          },
          S6d: {
            type: 'map',
            key: {},
            value: {}
          },
          S6g: {
            type: 'structure',
            members: {
              glueDataCatalog: {
                type: 'structure',
                required: ['roleArn', 'databaseName', 'tablePrefix'],
                members: {
                  roleArn: {},
                  databaseName: {},
                  tablePrefix: {}
                }
              }
            }
          },
          S6u: {
            type: 'structure',
            members: {
              canUseAsSource: {
                type: 'boolean'
              },
              canUseAsDestination: {
                type: 'boolean'
              },
              supportedDestinationConnectors: {
                shape: 'S6v'
              },
              supportedSchedulingFrequencies: {
                type: 'list',
                member: {}
              },
              isPrivateLinkEnabled: {
                type: 'boolean'
              },
              isPrivateLinkEndpointUrlRequired: {
                type: 'boolean'
              },
              supportedTriggerTypes: {
                type: 'list',
                member: {}
              },
              connectorMetadata: {
                type: 'structure',
                members: {
                  Amplitude: {
                    type: 'structure',
                    members: {}
                  },
                  Datadog: {
                    type: 'structure',
                    members: {}
                  },
                  Dynatrace: {
                    type: 'structure',
                    members: {}
                  },
                  GoogleAnalytics: {
                    type: 'structure',
                    members: {
                      oAuthScopes: {
                        shape: 'S1i'
                      }
                    }
                  },
                  InforNexus: {
                    type: 'structure',
                    members: {}
                  },
                  Marketo: {
                    type: 'structure',
                    members: {}
                  },
                  Redshift: {
                    type: 'structure',
                    members: {}
                  },
                  S3: {
                    type: 'structure',
                    members: {}
                  },
                  Salesforce: {
                    type: 'structure',
                    members: {
                      oAuthScopes: {
                        shape: 'S1i'
                      },
                      dataTransferApis: {
                        type: 'list',
                        member: {}
                      },
                      oauth2GrantTypesSupported: {
                        shape: 'S7a'
                      }
                    }
                  },
                  ServiceNow: {
                    type: 'structure',
                    members: {}
                  },
                  Singular: {
                    type: 'structure',
                    members: {}
                  },
                  Slack: {
                    type: 'structure',
                    members: {
                      oAuthScopes: {
                        shape: 'S1i'
                      }
                    }
                  },
                  Snowflake: {
                    type: 'structure',
                    members: {
                      supportedRegions: {
                        type: 'list',
                        member: {}
                      }
                    }
                  },
                  Trendmicro: {
                    type: 'structure',
                    members: {}
                  },
                  Veeva: {
                    type: 'structure',
                    members: {}
                  },
                  Zendesk: {
                    type: 'structure',
                    members: {
                      oAuthScopes: {
                        shape: 'S1i'
                      }
                    }
                  },
                  EventBridge: {
                    type: 'structure',
                    members: {}
                  },
                  Upsolver: {
                    type: 'structure',
                    members: {}
                  },
                  CustomerProfiles: {
                    type: 'structure',
                    members: {}
                  },
                  Honeycode: {
                    type: 'structure',
                    members: {
                      oAuthScopes: {
                        shape: 'S1i'
                      }
                    }
                  },
                  SAPOData: {
                    type: 'structure',
                    members: {}
                  },
                  Pardot: {
                    type: 'structure',
                    members: {}
                  }
                }
              },
              connectorType: {},
              connectorLabel: {},
              connectorDescription: {},
              connectorOwner: {},
              connectorName: {},
              connectorVersion: {},
              connectorArn: {},
              connectorModes: {
                shape: 'S7u'
              },
              authenticationConfig: {
                type: 'structure',
                members: {
                  isBasicAuthSupported: {
                    type: 'boolean'
                  },
                  isApiKeyAuthSupported: {
                    type: 'boolean'
                  },
                  isOAuth2Supported: {
                    type: 'boolean'
                  },
                  isCustomAuthSupported: {
                    type: 'boolean'
                  },
                  oAuth2Defaults: {
                    type: 'structure',
                    members: {
                      oauthScopes: {
                        shape: 'S1i'
                      },
                      tokenUrls: {
                        type: 'list',
                        member: {}
                      },
                      authCodeUrls: {
                        type: 'list',
                        member: {}
                      },
                      oauth2GrantTypesSupported: {
                        shape: 'S7a'
                      },
                      oauth2CustomProperties: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            key: {},
                            isRequired: {
                              type: 'boolean'
                            },
                            label: {},
                            description: {},
                            isSensitiveField: {
                              type: 'boolean'
                            },
                            connectorSuppliedValues: {
                              shape: 'S84'
                            },
                            type: {}
                          }
                        }
                      }
                    }
                  },
                  customAuthConfigs: {
                    type: 'list',
                    member: {
                      type: 'structure',
                      members: {
                        customAuthenticationType: {},
                        authParameters: {
                          type: 'list',
                          member: {
                            type: 'structure',
                            members: {
                              key: {},
                              isRequired: {
                                type: 'boolean'
                              },
                              label: {},
                              description: {},
                              isSensitiveField: {
                                type: 'boolean'
                              },
                              connectorSuppliedValues: {
                                shape: 'S84'
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              connectorRuntimeSettings: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    key: {},
                    dataType: {},
                    isRequired: {
                      type: 'boolean'
                    },
                    label: {},
                    description: {},
                    scope: {},
                    connectorSuppliedValueOptions: {
                      type: 'list',
                      member: {}
                    }
                  }
                }
              },
              supportedApiVersions: {
                type: 'list',
                member: {}
              },
              supportedOperators: {
                type: 'list',
                member: {}
              },
              supportedWriteOperations: {
                shape: 'S8k'
              },
              connectorProvisioningType: {},
              connectorProvisioningConfig: {
                shape: 'S8m'
              },
              logoURL: {},
              registeredAt: {
                type: 'timestamp'
              },
              registeredBy: {},
              supportedDataTransferTypes: {
                shape: 'S8q'
              },
              supportedDataTransferApis: {
                type: 'list',
                member: {
                  shape: 'S4h'
                }
              }
            }
          },
          S6v: {
            type: 'list',
            member: {}
          },
          S7a: {
            type: 'list',
            member: {}
          },
          S7u: {
            type: 'list',
            member: {}
          },
          S84: {
            type: 'list',
            member: {}
          },
          S8k: {
            type: 'list',
            member: {}
          },
          S8m: {
            type: 'structure',
            members: {
              lambda: {
                type: 'structure',
                required: ['lambdaArn'],
                members: {
                  lambdaArn: {}
                }
              }
            }
          },
          S8q: {
            type: 'list',
            member: {}
          },
          S94: {
            type: 'structure',
            members: {
              maximum: {
                type: 'double'
              },
              minimum: {
                type: 'double'
              }
            }
          },
          S9m: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                connectorDescription: {},
                connectorName: {},
                connectorOwner: {},
                connectorVersion: {},
                applicationType: {},
                connectorType: {},
                connectorLabel: {},
                registeredAt: {
                  type: 'timestamp'
                },
                registeredBy: {},
                connectorProvisioningType: {},
                connectorModes: {
                  shape: 'S7u'
                },
                supportedDataTransferTypes: {
                  shape: 'S8q'
                }
              }
            }
          },
          S9s: {
            type: 'structure',
            members: {
              mostRecentExecutionMessage: {},
              mostRecentExecutionTime: {
                type: 'timestamp'
              },
              mostRecentExecutionStatus: {}
            }
          },
          S9x: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                catalogType: {},
                tableName: {},
                tableRegistrationOutput: {
                  shape: 'Sa0'
                },
                partitionRegistrationOutput: {
                  shape: 'Sa0'
                }
              }
            }
          },
          Sa0: {
            type: 'structure',
            members: {
              message: {},
              result: {},
              status: {}
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=46a1e9a2d921904110be89db3ee9d7e42ab39dce.js.map