System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2015-11-01',
          endpointPrefix: 'discovery',
          jsonVersion: '1.1',
          protocol: 'json',
          protocols: ['json'],
          serviceFullName: 'AWS Application Discovery Service',
          serviceId: 'Application Discovery Service',
          signatureVersion: 'v4',
          targetPrefix: 'AWSPoseidonService_V2015_11_01',
          uid: 'discovery-2015-11-01'
        },
        operations: {
          AssociateConfigurationItemsToApplication: {
            input: {
              type: 'structure',
              required: ['applicationConfigurationId', 'configurationIds'],
              members: {
                applicationConfigurationId: {},
                configurationIds: {
                  shape: 'S3'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          BatchDeleteAgents: {
            input: {
              type: 'structure',
              required: ['deleteAgents'],
              members: {
                deleteAgents: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['agentId'],
                    members: {
                      agentId: {},
                      force: {
                        type: 'boolean'
                      }
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                errors: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['agentId', 'errorMessage', 'errorCode'],
                    members: {
                      agentId: {},
                      errorMessage: {},
                      errorCode: {}
                    }
                  }
                }
              }
            }
          },
          BatchDeleteImportData: {
            input: {
              type: 'structure',
              required: ['importTaskIds'],
              members: {
                importTaskIds: {
                  type: 'list',
                  member: {}
                },
                deleteHistory: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                errors: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      importTaskId: {},
                      errorCode: {},
                      errorDescription: {}
                    }
                  }
                }
              }
            }
          },
          CreateApplication: {
            input: {
              type: 'structure',
              required: ['name'],
              members: {
                name: {},
                description: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                configurationId: {}
              }
            }
          },
          CreateTags: {
            input: {
              type: 'structure',
              required: ['configurationIds', 'tags'],
              members: {
                configurationIds: {
                  shape: 'S3'
                },
                tags: {
                  shape: 'St'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteApplications: {
            input: {
              type: 'structure',
              required: ['configurationIds'],
              members: {
                configurationIds: {
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
          DeleteTags: {
            input: {
              type: 'structure',
              required: ['configurationIds'],
              members: {
                configurationIds: {
                  shape: 'S3'
                },
                tags: {
                  shape: 'St'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DescribeAgents: {
            input: {
              type: 'structure',
              members: {
                agentIds: {
                  shape: 'S14'
                },
                filters: {
                  shape: 'S15'
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
                agentsInfo: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      agentId: {},
                      hostName: {},
                      agentNetworkInfoList: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            ipAddress: {},
                            macAddress: {}
                          },
                          sensitive: true
                        }
                      },
                      connectorId: {},
                      version: {},
                      health: {},
                      lastHealthPingTime: {},
                      collectionStatus: {},
                      agentType: {},
                      registeredTime: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          DescribeBatchDeleteConfigurationTask: {
            input: {
              type: 'structure',
              required: ['taskId'],
              members: {
                taskId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                task: {
                  type: 'structure',
                  members: {
                    taskId: {},
                    status: {},
                    startTime: {
                      type: 'timestamp'
                    },
                    endTime: {
                      type: 'timestamp'
                    },
                    configurationType: {},
                    requestedConfigurations: {
                      shape: 'S3'
                    },
                    deletedConfigurations: {
                      shape: 'S3'
                    },
                    failedConfigurations: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          configurationId: {},
                          errorStatusCode: {
                            type: 'integer'
                          },
                          errorMessage: {}
                        }
                      }
                    },
                    deletionWarnings: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          configurationId: {},
                          warningCode: {
                            type: 'integer'
                          },
                          warningText: {}
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          DescribeConfigurations: {
            input: {
              type: 'structure',
              required: ['configurationIds'],
              members: {
                configurationIds: {
                  shape: 'S3'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                configurations: {
                  type: 'list',
                  member: {
                    type: 'map',
                    key: {},
                    value: {}
                  }
                }
              }
            }
          },
          DescribeContinuousExports: {
            input: {
              type: 'structure',
              members: {
                exportIds: {
                  type: 'list',
                  member: {}
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
                descriptions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      exportId: {},
                      status: {},
                      statusDetail: {},
                      s3Bucket: {},
                      startTime: {
                        type: 'timestamp'
                      },
                      stopTime: {
                        type: 'timestamp'
                      },
                      dataSource: {},
                      schemaStorageConfig: {
                        shape: 'S2c'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          DescribeExportConfigurations: {
            input: {
              type: 'structure',
              members: {
                exportIds: {
                  shape: 'S2f'
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
                exportsInfo: {
                  shape: 'S2h'
                },
                nextToken: {}
              }
            },
            deprecated: true
          },
          DescribeExportTasks: {
            input: {
              type: 'structure',
              members: {
                exportIds: {
                  shape: 'S2f'
                },
                filters: {
                  shape: 'S2o'
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
                exportsInfo: {
                  shape: 'S2h'
                },
                nextToken: {}
              }
            }
          },
          DescribeImportTasks: {
            input: {
              type: 'structure',
              members: {
                filters: {
                  type: 'list',
                  member: {
                    type: 'structure',
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
              members: {
                nextToken: {},
                tasks: {
                  type: 'list',
                  member: {
                    shape: 'S31'
                  }
                }
              }
            }
          },
          DescribeTags: {
            input: {
              type: 'structure',
              members: {
                filters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['name', 'values'],
                    members: {
                      name: {},
                      values: {
                        shape: 'S17'
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
              members: {
                tags: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      configurationType: {},
                      configurationId: {},
                      key: {},
                      value: {},
                      timeOfCreation: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          DisassociateConfigurationItemsFromApplication: {
            input: {
              type: 'structure',
              required: ['applicationConfigurationId', 'configurationIds'],
              members: {
                applicationConfigurationId: {},
                configurationIds: {
                  shape: 'S3'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          ExportConfigurations: {
            output: {
              type: 'structure',
              members: {
                exportId: {}
              }
            },
            deprecated: true
          },
          GetDiscoverySummary: {
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {
                servers: {
                  type: 'long'
                },
                applications: {
                  type: 'long'
                },
                serversMappedToApplications: {
                  type: 'long'
                },
                serversMappedtoTags: {
                  type: 'long'
                },
                agentSummary: {
                  type: 'structure',
                  required: ['activeAgents', 'healthyAgents', 'blackListedAgents', 'shutdownAgents', 'unhealthyAgents', 'totalAgents', 'unknownAgents'],
                  members: {
                    activeAgents: {
                      type: 'integer'
                    },
                    healthyAgents: {
                      type: 'integer'
                    },
                    blackListedAgents: {
                      type: 'integer'
                    },
                    shutdownAgents: {
                      type: 'integer'
                    },
                    unhealthyAgents: {
                      type: 'integer'
                    },
                    totalAgents: {
                      type: 'integer'
                    },
                    unknownAgents: {
                      type: 'integer'
                    }
                  }
                },
                connectorSummary: {
                  type: 'structure',
                  required: ['activeConnectors', 'healthyConnectors', 'blackListedConnectors', 'shutdownConnectors', 'unhealthyConnectors', 'totalConnectors', 'unknownConnectors'],
                  members: {
                    activeConnectors: {
                      type: 'integer'
                    },
                    healthyConnectors: {
                      type: 'integer'
                    },
                    blackListedConnectors: {
                      type: 'integer'
                    },
                    shutdownConnectors: {
                      type: 'integer'
                    },
                    unhealthyConnectors: {
                      type: 'integer'
                    },
                    totalConnectors: {
                      type: 'integer'
                    },
                    unknownConnectors: {
                      type: 'integer'
                    }
                  }
                },
                meCollectorSummary: {
                  type: 'structure',
                  required: ['activeMeCollectors', 'healthyMeCollectors', 'denyListedMeCollectors', 'shutdownMeCollectors', 'unhealthyMeCollectors', 'totalMeCollectors', 'unknownMeCollectors'],
                  members: {
                    activeMeCollectors: {
                      type: 'integer'
                    },
                    healthyMeCollectors: {
                      type: 'integer'
                    },
                    denyListedMeCollectors: {
                      type: 'integer'
                    },
                    shutdownMeCollectors: {
                      type: 'integer'
                    },
                    unhealthyMeCollectors: {
                      type: 'integer'
                    },
                    totalMeCollectors: {
                      type: 'integer'
                    },
                    unknownMeCollectors: {
                      type: 'integer'
                    }
                  }
                },
                agentlessCollectorSummary: {
                  type: 'structure',
                  required: ['activeAgentlessCollectors', 'healthyAgentlessCollectors', 'denyListedAgentlessCollectors', 'shutdownAgentlessCollectors', 'unhealthyAgentlessCollectors', 'totalAgentlessCollectors', 'unknownAgentlessCollectors'],
                  members: {
                    activeAgentlessCollectors: {
                      type: 'integer'
                    },
                    healthyAgentlessCollectors: {
                      type: 'integer'
                    },
                    denyListedAgentlessCollectors: {
                      type: 'integer'
                    },
                    shutdownAgentlessCollectors: {
                      type: 'integer'
                    },
                    unhealthyAgentlessCollectors: {
                      type: 'integer'
                    },
                    totalAgentlessCollectors: {
                      type: 'integer'
                    },
                    unknownAgentlessCollectors: {
                      type: 'integer'
                    }
                  }
                }
              }
            }
          },
          ListConfigurations: {
            input: {
              type: 'structure',
              required: ['configurationType'],
              members: {
                configurationType: {},
                filters: {
                  shape: 'S15'
                },
                maxResults: {
                  type: 'integer'
                },
                nextToken: {},
                orderBy: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['fieldName'],
                    members: {
                      fieldName: {},
                      sortOrder: {}
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                configurations: {
                  type: 'list',
                  member: {
                    type: 'map',
                    key: {},
                    value: {}
                  }
                },
                nextToken: {}
              }
            }
          },
          ListServerNeighbors: {
            input: {
              type: 'structure',
              required: ['configurationId'],
              members: {
                configurationId: {},
                portInformationNeeded: {
                  type: 'boolean'
                },
                neighborConfigurationIds: {
                  shape: 'S3'
                },
                maxResults: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              required: ['neighbors'],
              members: {
                neighbors: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['sourceServerId', 'destinationServerId', 'connectionsCount'],
                    members: {
                      sourceServerId: {},
                      destinationServerId: {},
                      destinationPort: {
                        type: 'integer'
                      },
                      transportProtocol: {},
                      connectionsCount: {
                        type: 'long'
                      }
                    }
                  }
                },
                nextToken: {},
                knownDependencyCount: {
                  type: 'long'
                }
              }
            }
          },
          StartBatchDeleteConfigurationTask: {
            input: {
              type: 'structure',
              required: ['configurationType', 'configurationIds'],
              members: {
                configurationType: {},
                configurationIds: {
                  shape: 'S3'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                taskId: {}
              }
            }
          },
          StartContinuousExport: {
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {
                exportId: {},
                s3Bucket: {},
                startTime: {
                  type: 'timestamp'
                },
                dataSource: {},
                schemaStorageConfig: {
                  shape: 'S2c'
                }
              }
            }
          },
          StartDataCollectionByAgentIds: {
            input: {
              type: 'structure',
              required: ['agentIds'],
              members: {
                agentIds: {
                  shape: 'S14'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                agentsConfigurationStatus: {
                  shape: 'S47'
                }
              }
            }
          },
          StartExportTask: {
            input: {
              type: 'structure',
              members: {
                exportDataFormat: {
                  type: 'list',
                  member: {}
                },
                filters: {
                  shape: 'S2o'
                },
                startTime: {
                  type: 'timestamp'
                },
                endTime: {
                  type: 'timestamp'
                },
                preferences: {
                  type: 'structure',
                  members: {
                    ec2RecommendationsPreferences: {
                      type: 'structure',
                      members: {
                        enabled: {
                          type: 'boolean'
                        },
                        cpuPerformanceMetricBasis: {
                          shape: 'S4f'
                        },
                        ramPerformanceMetricBasis: {
                          shape: 'S4f'
                        },
                        tenancy: {},
                        excludedInstanceTypes: {
                          type: 'list',
                          member: {}
                        },
                        preferredRegion: {},
                        reservedInstanceOptions: {
                          type: 'structure',
                          required: ['purchasingOption', 'offeringClass', 'termLength'],
                          members: {
                            purchasingOption: {},
                            offeringClass: {},
                            termLength: {}
                          }
                        }
                      }
                    }
                  },
                  union: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                exportId: {}
              }
            }
          },
          StartImportTask: {
            input: {
              type: 'structure',
              required: ['name', 'importUrl'],
              members: {
                clientRequestToken: {
                  idempotencyToken: true
                },
                name: {},
                importUrl: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                task: {
                  shape: 'S31'
                }
              }
            }
          },
          StopContinuousExport: {
            input: {
              type: 'structure',
              required: ['exportId'],
              members: {
                exportId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                startTime: {
                  type: 'timestamp'
                },
                stopTime: {
                  type: 'timestamp'
                }
              }
            }
          },
          StopDataCollectionByAgentIds: {
            input: {
              type: 'structure',
              required: ['agentIds'],
              members: {
                agentIds: {
                  shape: 'S14'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                agentsConfigurationStatus: {
                  shape: 'S47'
                }
              }
            }
          },
          UpdateApplication: {
            input: {
              type: 'structure',
              required: ['configurationId'],
              members: {
                configurationId: {},
                name: {},
                description: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          }
        },
        shapes: {
          S3: {
            type: 'list',
            member: {}
          },
          St: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['key', 'value'],
              members: {
                key: {},
                value: {}
              }
            }
          },
          S14: {
            type: 'list',
            member: {}
          },
          S15: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['name', 'values', 'condition'],
              members: {
                name: {},
                values: {
                  shape: 'S17'
                },
                condition: {}
              }
            }
          },
          S17: {
            type: 'list',
            member: {}
          },
          S2c: {
            type: 'map',
            key: {},
            value: {}
          },
          S2f: {
            type: 'list',
            member: {}
          },
          S2h: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['exportId', 'exportStatus', 'statusMessage', 'exportRequestTime'],
              members: {
                exportId: {},
                exportStatus: {},
                statusMessage: {},
                configurationsDownloadUrl: {},
                exportRequestTime: {
                  type: 'timestamp'
                },
                isTruncated: {
                  type: 'boolean'
                },
                requestedStartTime: {
                  type: 'timestamp'
                },
                requestedEndTime: {
                  type: 'timestamp'
                }
              }
            }
          },
          S2o: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['name', 'values', 'condition'],
              members: {
                name: {},
                values: {
                  shape: 'S17'
                },
                condition: {}
              }
            }
          },
          S31: {
            type: 'structure',
            members: {
              importTaskId: {},
              clientRequestToken: {},
              name: {},
              importUrl: {},
              status: {},
              importRequestTime: {
                type: 'timestamp'
              },
              importCompletionTime: {
                type: 'timestamp'
              },
              importDeletedTime: {
                type: 'timestamp'
              },
              serverImportSuccess: {
                type: 'integer'
              },
              serverImportFailure: {
                type: 'integer'
              },
              applicationImportSuccess: {
                type: 'integer'
              },
              applicationImportFailure: {
                type: 'integer'
              },
              errorsAndFailedEntriesZip: {}
            }
          },
          S47: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                agentId: {},
                operationSucceeded: {
                  type: 'boolean'
                },
                description: {}
              }
            }
          },
          S4f: {
            type: 'structure',
            members: {
              name: {},
              percentageAdjust: {
                type: 'double'
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=3e190ce58c44222e3e0fe66745dcdbb9b895f89d.js.map