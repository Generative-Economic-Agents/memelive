System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2021-09-14',
          endpointPrefix: 'kafkaconnect',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceAbbreviation: 'Kafka Connect',
          serviceFullName: 'Managed Streaming for Kafka Connect',
          serviceId: 'KafkaConnect',
          signatureVersion: 'v4',
          signingName: 'kafkaconnect',
          uid: 'kafkaconnect-2021-09-14'
        },
        operations: {
          CreateConnector: {
            http: {
              requestUri: '/v1/connectors',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['capacity', 'connectorConfiguration', 'connectorName', 'kafkaCluster', 'kafkaClusterClientAuthentication', 'kafkaClusterEncryptionInTransit', 'kafkaConnectVersion', 'plugins', 'serviceExecutionRoleArn'],
              members: {
                capacity: {
                  type: 'structure',
                  members: {
                    autoScaling: {
                      type: 'structure',
                      required: ['maxWorkerCount', 'mcuCount', 'minWorkerCount'],
                      members: {
                        maxWorkerCount: {
                          type: 'integer'
                        },
                        mcuCount: {
                          type: 'integer'
                        },
                        minWorkerCount: {
                          type: 'integer'
                        },
                        scaleInPolicy: {
                          type: 'structure',
                          required: ['cpuUtilizationPercentage'],
                          members: {
                            cpuUtilizationPercentage: {
                              type: 'integer'
                            }
                          }
                        },
                        scaleOutPolicy: {
                          type: 'structure',
                          required: ['cpuUtilizationPercentage'],
                          members: {
                            cpuUtilizationPercentage: {
                              type: 'integer'
                            }
                          }
                        }
                      }
                    },
                    provisionedCapacity: {
                      type: 'structure',
                      required: ['mcuCount', 'workerCount'],
                      members: {
                        mcuCount: {
                          type: 'integer'
                        },
                        workerCount: {
                          type: 'integer'
                        }
                      }
                    }
                  }
                },
                connectorConfiguration: {
                  shape: 'Sa'
                },
                connectorDescription: {},
                connectorName: {},
                kafkaCluster: {
                  type: 'structure',
                  required: ['apacheKafkaCluster'],
                  members: {
                    apacheKafkaCluster: {
                      type: 'structure',
                      required: ['bootstrapServers', 'vpc'],
                      members: {
                        bootstrapServers: {},
                        vpc: {
                          type: 'structure',
                          required: ['subnets'],
                          members: {
                            securityGroups: {
                              shape: 'Sh'
                            },
                            subnets: {
                              shape: 'Sh'
                            }
                          }
                        }
                      }
                    }
                  }
                },
                kafkaClusterClientAuthentication: {
                  type: 'structure',
                  required: ['authenticationType'],
                  members: {
                    authenticationType: {}
                  }
                },
                kafkaClusterEncryptionInTransit: {
                  type: 'structure',
                  required: ['encryptionType'],
                  members: {
                    encryptionType: {}
                  }
                },
                kafkaConnectVersion: {},
                logDelivery: {
                  type: 'structure',
                  required: ['workerLogDelivery'],
                  members: {
                    workerLogDelivery: {
                      type: 'structure',
                      members: {
                        cloudWatchLogs: {
                          type: 'structure',
                          required: ['enabled'],
                          members: {
                            enabled: {
                              type: 'boolean'
                            },
                            logGroup: {}
                          }
                        },
                        firehose: {
                          type: 'structure',
                          required: ['enabled'],
                          members: {
                            deliveryStream: {},
                            enabled: {
                              type: 'boolean'
                            }
                          }
                        },
                        s3: {
                          type: 'structure',
                          required: ['enabled'],
                          members: {
                            bucket: {},
                            enabled: {
                              type: 'boolean'
                            },
                            prefix: {}
                          }
                        }
                      }
                    }
                  }
                },
                plugins: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['customPlugin'],
                    members: {
                      customPlugin: {
                        type: 'structure',
                        required: ['customPluginArn', 'revision'],
                        members: {
                          customPluginArn: {},
                          revision: {
                            type: 'long'
                          }
                        }
                      }
                    }
                  }
                },
                serviceExecutionRoleArn: {},
                tags: {
                  shape: 'Sw'
                },
                workerConfiguration: {
                  type: 'structure',
                  required: ['revision', 'workerConfigurationArn'],
                  members: {
                    revision: {
                      type: 'long'
                    },
                    workerConfigurationArn: {}
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                connectorArn: {},
                connectorName: {},
                connectorState: {}
              }
            }
          },
          CreateCustomPlugin: {
            http: {
              requestUri: '/v1/custom-plugins',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['contentType', 'location', 'name'],
              members: {
                contentType: {},
                description: {},
                location: {
                  type: 'structure',
                  required: ['s3Location'],
                  members: {
                    s3Location: {
                      type: 'structure',
                      required: ['bucketArn', 'fileKey'],
                      members: {
                        bucketArn: {},
                        fileKey: {},
                        objectVersion: {}
                      }
                    }
                  }
                },
                name: {},
                tags: {
                  shape: 'Sw'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                customPluginArn: {},
                customPluginState: {},
                name: {},
                revision: {
                  type: 'long'
                }
              }
            }
          },
          CreateWorkerConfiguration: {
            http: {
              requestUri: '/v1/worker-configurations',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['name', 'propertiesFileContent'],
              members: {
                description: {},
                name: {},
                propertiesFileContent: {
                  shape: 'S1a'
                },
                tags: {
                  shape: 'Sw'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                creationTime: {
                  shape: 'S1c'
                },
                latestRevision: {
                  shape: 'S1d'
                },
                name: {},
                workerConfigurationArn: {},
                workerConfigurationState: {}
              }
            }
          },
          DeleteConnector: {
            http: {
              method: 'DELETE',
              requestUri: '/v1/connectors/{connectorArn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['connectorArn'],
              members: {
                connectorArn: {
                  location: 'uri',
                  locationName: 'connectorArn'
                },
                currentVersion: {
                  location: 'querystring',
                  locationName: 'currentVersion'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                connectorArn: {},
                connectorState: {}
              }
            },
            idempotent: true
          },
          DeleteCustomPlugin: {
            http: {
              method: 'DELETE',
              requestUri: '/v1/custom-plugins/{customPluginArn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['customPluginArn'],
              members: {
                customPluginArn: {
                  location: 'uri',
                  locationName: 'customPluginArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                customPluginArn: {},
                customPluginState: {}
              }
            },
            idempotent: true
          },
          DeleteWorkerConfiguration: {
            http: {
              method: 'DELETE',
              requestUri: '/v1/worker-configurations/{workerConfigurationArn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['workerConfigurationArn'],
              members: {
                workerConfigurationArn: {
                  location: 'uri',
                  locationName: 'workerConfigurationArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                workerConfigurationArn: {},
                workerConfigurationState: {}
              }
            },
            idempotent: true
          },
          DescribeConnector: {
            http: {
              method: 'GET',
              requestUri: '/v1/connectors/{connectorArn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['connectorArn'],
              members: {
                connectorArn: {
                  location: 'uri',
                  locationName: 'connectorArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                capacity: {
                  shape: 'S1n'
                },
                connectorArn: {},
                connectorConfiguration: {
                  shape: 'Sa'
                },
                connectorDescription: {},
                connectorName: {},
                connectorState: {},
                creationTime: {
                  shape: 'S1c'
                },
                currentVersion: {},
                kafkaCluster: {
                  shape: 'S1t'
                },
                kafkaClusterClientAuthentication: {
                  shape: 'S1w'
                },
                kafkaClusterEncryptionInTransit: {
                  shape: 'S1x'
                },
                kafkaConnectVersion: {},
                logDelivery: {
                  shape: 'S1y'
                },
                plugins: {
                  shape: 'S23'
                },
                serviceExecutionRoleArn: {},
                stateDescription: {
                  shape: 'S26'
                },
                workerConfiguration: {
                  shape: 'S27'
                }
              }
            }
          },
          DescribeCustomPlugin: {
            http: {
              method: 'GET',
              requestUri: '/v1/custom-plugins/{customPluginArn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['customPluginArn'],
              members: {
                customPluginArn: {
                  location: 'uri',
                  locationName: 'customPluginArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                creationTime: {
                  shape: 'S1c'
                },
                customPluginArn: {},
                customPluginState: {},
                description: {},
                latestRevision: {
                  shape: 'S2a'
                },
                name: {},
                stateDescription: {
                  shape: 'S26'
                }
              }
            }
          },
          DescribeWorkerConfiguration: {
            http: {
              method: 'GET',
              requestUri: '/v1/worker-configurations/{workerConfigurationArn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['workerConfigurationArn'],
              members: {
                workerConfigurationArn: {
                  location: 'uri',
                  locationName: 'workerConfigurationArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                creationTime: {
                  shape: 'S1c'
                },
                description: {},
                latestRevision: {
                  type: 'structure',
                  members: {
                    creationTime: {
                      shape: 'S1c'
                    },
                    description: {},
                    propertiesFileContent: {
                      shape: 'S1a'
                    },
                    revision: {
                      type: 'long'
                    }
                  }
                },
                name: {},
                workerConfigurationArn: {},
                workerConfigurationState: {}
              }
            }
          },
          ListConnectors: {
            http: {
              method: 'GET',
              requestUri: '/v1/connectors',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                connectorNamePrefix: {
                  location: 'querystring',
                  locationName: 'connectorNamePrefix'
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
                connectors: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      capacity: {
                        shape: 'S1n'
                      },
                      connectorArn: {},
                      connectorDescription: {},
                      connectorName: {},
                      connectorState: {},
                      creationTime: {
                        shape: 'S1c'
                      },
                      currentVersion: {},
                      kafkaCluster: {
                        shape: 'S1t'
                      },
                      kafkaClusterClientAuthentication: {
                        shape: 'S1w'
                      },
                      kafkaClusterEncryptionInTransit: {
                        shape: 'S1x'
                      },
                      kafkaConnectVersion: {},
                      logDelivery: {
                        shape: 'S1y'
                      },
                      plugins: {
                        shape: 'S23'
                      },
                      serviceExecutionRoleArn: {},
                      workerConfiguration: {
                        shape: 'S27'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListCustomPlugins: {
            http: {
              method: 'GET',
              requestUri: '/v1/custom-plugins',
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
                namePrefix: {
                  location: 'querystring',
                  locationName: 'namePrefix'
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
                customPlugins: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      creationTime: {
                        shape: 'S1c'
                      },
                      customPluginArn: {},
                      customPluginState: {},
                      description: {},
                      latestRevision: {
                        shape: 'S2a'
                      },
                      name: {}
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
              requestUri: '/v1/tags/{resourceArn}',
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
                  shape: 'Sw'
                }
              }
            }
          },
          ListWorkerConfigurations: {
            http: {
              method: 'GET',
              requestUri: '/v1/worker-configurations',
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
                namePrefix: {
                  location: 'querystring',
                  locationName: 'namePrefix'
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
                workerConfigurations: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      creationTime: {
                        shape: 'S1c'
                      },
                      description: {},
                      latestRevision: {
                        shape: 'S1d'
                      },
                      name: {},
                      workerConfigurationArn: {},
                      workerConfigurationState: {}
                    }
                  }
                }
              }
            }
          },
          TagResource: {
            http: {
              requestUri: '/v1/tags/{resourceArn}',
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
                  shape: 'Sw'
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
              requestUri: '/v1/tags/{resourceArn}',
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
          UpdateConnector: {
            http: {
              method: 'PUT',
              requestUri: '/v1/connectors/{connectorArn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['capacity', 'connectorArn', 'currentVersion'],
              members: {
                capacity: {
                  type: 'structure',
                  members: {
                    autoScaling: {
                      type: 'structure',
                      required: ['maxWorkerCount', 'mcuCount', 'minWorkerCount', 'scaleInPolicy', 'scaleOutPolicy'],
                      members: {
                        maxWorkerCount: {
                          type: 'integer'
                        },
                        mcuCount: {
                          type: 'integer'
                        },
                        minWorkerCount: {
                          type: 'integer'
                        },
                        scaleInPolicy: {
                          type: 'structure',
                          required: ['cpuUtilizationPercentage'],
                          members: {
                            cpuUtilizationPercentage: {
                              type: 'integer'
                            }
                          }
                        },
                        scaleOutPolicy: {
                          type: 'structure',
                          required: ['cpuUtilizationPercentage'],
                          members: {
                            cpuUtilizationPercentage: {
                              type: 'integer'
                            }
                          }
                        }
                      }
                    },
                    provisionedCapacity: {
                      type: 'structure',
                      required: ['mcuCount', 'workerCount'],
                      members: {
                        mcuCount: {
                          type: 'integer'
                        },
                        workerCount: {
                          type: 'integer'
                        }
                      }
                    }
                  }
                },
                connectorArn: {
                  location: 'uri',
                  locationName: 'connectorArn'
                },
                currentVersion: {
                  location: 'querystring',
                  locationName: 'currentVersion'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                connectorArn: {},
                connectorState: {}
              }
            },
            idempotent: true
          }
        },
        shapes: {
          Sa: {
            type: 'map',
            key: {},
            value: {},
            sensitive: true
          },
          Sh: {
            type: 'list',
            member: {}
          },
          Sw: {
            type: 'map',
            key: {},
            value: {}
          },
          S1a: {
            type: 'string',
            sensitive: true
          },
          S1c: {
            type: 'timestamp',
            timestampFormat: 'iso8601'
          },
          S1d: {
            type: 'structure',
            members: {
              creationTime: {
                shape: 'S1c'
              },
              description: {},
              revision: {
                type: 'long'
              }
            }
          },
          S1n: {
            type: 'structure',
            members: {
              autoScaling: {
                type: 'structure',
                members: {
                  maxWorkerCount: {
                    type: 'integer'
                  },
                  mcuCount: {
                    type: 'integer'
                  },
                  minWorkerCount: {
                    type: 'integer'
                  },
                  scaleInPolicy: {
                    type: 'structure',
                    members: {
                      cpuUtilizationPercentage: {
                        type: 'integer'
                      }
                    }
                  },
                  scaleOutPolicy: {
                    type: 'structure',
                    members: {
                      cpuUtilizationPercentage: {
                        type: 'integer'
                      }
                    }
                  }
                }
              },
              provisionedCapacity: {
                type: 'structure',
                members: {
                  mcuCount: {
                    type: 'integer'
                  },
                  workerCount: {
                    type: 'integer'
                  }
                }
              }
            }
          },
          S1t: {
            type: 'structure',
            members: {
              apacheKafkaCluster: {
                type: 'structure',
                members: {
                  bootstrapServers: {},
                  vpc: {
                    type: 'structure',
                    members: {
                      securityGroups: {
                        shape: 'Sh'
                      },
                      subnets: {
                        shape: 'Sh'
                      }
                    }
                  }
                }
              }
            }
          },
          S1w: {
            type: 'structure',
            members: {
              authenticationType: {}
            }
          },
          S1x: {
            type: 'structure',
            members: {
              encryptionType: {}
            }
          },
          S1y: {
            type: 'structure',
            members: {
              workerLogDelivery: {
                type: 'structure',
                members: {
                  cloudWatchLogs: {
                    type: 'structure',
                    members: {
                      enabled: {
                        type: 'boolean'
                      },
                      logGroup: {}
                    }
                  },
                  firehose: {
                    type: 'structure',
                    members: {
                      deliveryStream: {},
                      enabled: {
                        type: 'boolean'
                      }
                    }
                  },
                  s3: {
                    type: 'structure',
                    members: {
                      bucket: {},
                      enabled: {
                        type: 'boolean'
                      },
                      prefix: {}
                    }
                  }
                }
              }
            }
          },
          S23: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                customPlugin: {
                  type: 'structure',
                  members: {
                    customPluginArn: {},
                    revision: {
                      type: 'long'
                    }
                  }
                }
              }
            }
          },
          S26: {
            type: 'structure',
            members: {
              code: {},
              message: {}
            }
          },
          S27: {
            type: 'structure',
            members: {
              revision: {
                type: 'long'
              },
              workerConfigurationArn: {}
            }
          },
          S2a: {
            type: 'structure',
            members: {
              contentType: {},
              creationTime: {
                shape: 'S1c'
              },
              description: {},
              fileDescription: {
                type: 'structure',
                members: {
                  fileMd5: {},
                  fileSize: {
                    type: 'long'
                  }
                }
              },
              location: {
                type: 'structure',
                members: {
                  s3Location: {
                    type: 'structure',
                    members: {
                      bucketArn: {},
                      fileKey: {},
                      objectVersion: {}
                    }
                  }
                }
              },
              revision: {
                type: 'long'
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=ce0c63eb345eb1211f5e7b9a0971ed3f56994d12.js.map