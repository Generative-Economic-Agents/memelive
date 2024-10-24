System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2020-02-19',
          endpointPrefix: 'migrationhub-strategy',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceFullName: 'Migration Hub Strategy Recommendations',
          serviceId: 'MigrationHubStrategy',
          signatureVersion: 'v4',
          signingName: 'migrationhub-strategy',
          uid: 'migrationhubstrategy-2020-02-19'
        },
        operations: {
          GetApplicationComponentDetails: {
            http: {
              method: 'GET',
              requestUri: '/get-applicationcomponent-details/{applicationComponentId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['applicationComponentId'],
              members: {
                applicationComponentId: {
                  location: 'uri',
                  locationName: 'applicationComponentId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                applicationComponentDetail: {
                  shape: 'S4'
                },
                associatedApplications: {
                  shape: 'S1b'
                },
                associatedServerIds: {
                  type: 'list',
                  member: {}
                },
                moreApplicationResource: {
                  type: 'boolean'
                }
              }
            }
          },
          GetApplicationComponentStrategies: {
            http: {
              method: 'GET',
              requestUri: '/get-applicationcomponent-strategies/{applicationComponentId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['applicationComponentId'],
              members: {
                applicationComponentId: {
                  location: 'uri',
                  locationName: 'applicationComponentId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                applicationComponentStrategies: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      isPreferred: {
                        type: 'boolean'
                      },
                      recommendation: {
                        shape: 'Sq'
                      },
                      status: {}
                    }
                  }
                }
              }
            }
          },
          GetAssessment: {
            http: {
              method: 'GET',
              requestUri: '/get-assessment/{id}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['id'],
              members: {
                id: {
                  location: 'uri',
                  locationName: 'id'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                assessmentTargets: {
                  shape: 'S1m'
                },
                dataCollectionDetails: {
                  type: 'structure',
                  members: {
                    completionTime: {
                      type: 'timestamp'
                    },
                    failed: {
                      type: 'integer'
                    },
                    inProgress: {
                      type: 'integer'
                    },
                    servers: {
                      type: 'integer'
                    },
                    startTime: {
                      type: 'timestamp'
                    },
                    status: {},
                    statusMessage: {},
                    success: {
                      type: 'integer'
                    }
                  }
                },
                id: {}
              }
            }
          },
          GetImportFileTask: {
            http: {
              method: 'GET',
              requestUri: '/get-import-file-task/{id}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['id'],
              members: {
                id: {
                  location: 'uri',
                  locationName: 'id'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                completionTime: {
                  type: 'timestamp'
                },
                id: {},
                importName: {},
                inputS3Bucket: {},
                inputS3Key: {},
                numberOfRecordsFailed: {
                  type: 'integer'
                },
                numberOfRecordsSuccess: {
                  type: 'integer'
                },
                startTime: {
                  type: 'timestamp'
                },
                status: {},
                statusReportS3Bucket: {},
                statusReportS3Key: {}
              }
            }
          },
          GetLatestAssessmentId: {
            http: {
              method: 'GET',
              requestUri: '/get-latest-assessment-id',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {
                id: {}
              }
            }
          },
          GetPortfolioPreferences: {
            http: {
              method: 'GET',
              requestUri: '/get-portfolio-preferences',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {
                applicationMode: {},
                applicationPreferences: {
                  shape: 'S23'
                },
                databasePreferences: {
                  shape: 'S2e'
                },
                prioritizeBusinessGoals: {
                  shape: 'S2q'
                }
              }
            }
          },
          GetPortfolioSummary: {
            http: {
              method: 'GET',
              requestUri: '/get-portfolio-summary',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {
                assessmentSummary: {
                  type: 'structure',
                  members: {
                    antipatternReportS3Object: {
                      shape: 'S6'
                    },
                    antipatternReportStatus: {},
                    antipatternReportStatusMessage: {},
                    lastAnalyzedTimestamp: {
                      type: 'timestamp'
                    },
                    listAntipatternSeveritySummary: {
                      shape: 'Sk'
                    },
                    listApplicationComponentStatusSummary: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          count: {
                            type: 'integer'
                          },
                          srcCodeOrDbAnalysisStatus: {}
                        }
                      }
                    },
                    listApplicationComponentStrategySummary: {
                      shape: 'S2y'
                    },
                    listApplicationComponentSummary: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          appType: {},
                          count: {
                            type: 'integer'
                          }
                        }
                      }
                    },
                    listServerStatusSummary: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          count: {
                            type: 'integer'
                          },
                          runTimeAssessmentStatus: {}
                        }
                      }
                    },
                    listServerStrategySummary: {
                      shape: 'S2y'
                    },
                    listServerSummary: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          ServerOsType: {},
                          count: {
                            type: 'integer'
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          GetRecommendationReportDetails: {
            http: {
              method: 'GET',
              requestUri: '/get-recommendation-report-details/{id}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['id'],
              members: {
                id: {
                  location: 'uri',
                  locationName: 'id'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                id: {},
                recommendationReportDetails: {
                  type: 'structure',
                  members: {
                    completionTime: {
                      type: 'timestamp'
                    },
                    s3Bucket: {},
                    s3Keys: {
                      type: 'list',
                      member: {}
                    },
                    startTime: {
                      type: 'timestamp'
                    },
                    status: {},
                    statusMessage: {}
                  }
                }
              }
            }
          },
          GetServerDetails: {
            http: {
              method: 'GET',
              requestUri: '/get-server-details/{serverId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['serverId'],
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
                serverId: {
                  location: 'uri',
                  locationName: 'serverId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                associatedApplications: {
                  shape: 'S1b'
                },
                nextToken: {},
                serverDetail: {
                  shape: 'S3k'
                }
              }
            }
          },
          GetServerStrategies: {
            http: {
              method: 'GET',
              requestUri: '/get-server-strategies/{serverId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['serverId'],
              members: {
                serverId: {
                  location: 'uri',
                  locationName: 'serverId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                serverStrategies: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      isPreferred: {
                        type: 'boolean'
                      },
                      numberOfApplicationComponents: {
                        type: 'integer'
                      },
                      recommendation: {
                        shape: 'Sq'
                      },
                      status: {}
                    }
                  }
                }
              }
            }
          },
          ListAnalyzableServers: {
            http: {
              requestUri: '/list-analyzable-servers',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                maxResults: {
                  type: 'integer'
                },
                nextToken: {},
                sort: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                analyzableServers: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      hostname: {},
                      ipAddress: {},
                      source: {},
                      vmId: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListApplicationComponents: {
            http: {
              requestUri: '/list-applicationcomponents',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                applicationComponentCriteria: {},
                filterValue: {},
                groupIdFilter: {
                  shape: 'S49'
                },
                maxResults: {
                  type: 'integer'
                },
                nextToken: {},
                sort: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                applicationComponentInfos: {
                  type: 'list',
                  member: {
                    shape: 'S4'
                  }
                },
                nextToken: {}
              }
            }
          },
          ListCollectors: {
            http: {
              method: 'GET',
              requestUri: '/list-collectors',
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
                Collectors: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      collectorHealth: {},
                      collectorId: {},
                      collectorVersion: {},
                      configurationSummary: {
                        type: 'structure',
                        members: {
                          ipAddressBasedRemoteInfoList: {
                            type: 'list',
                            member: {
                              type: 'structure',
                              members: {
                                authType: {},
                                ipAddressConfigurationTimeStamp: {},
                                osType: {}
                              }
                            }
                          },
                          pipelineInfoList: {
                            type: 'list',
                            member: {
                              type: 'structure',
                              members: {
                                pipelineConfigurationTimeStamp: {},
                                pipelineType: {}
                              }
                            }
                          },
                          remoteSourceCodeAnalysisServerInfo: {
                            type: 'structure',
                            members: {
                              remoteSourceCodeAnalysisServerConfigurationTimestamp: {}
                            }
                          },
                          vcenterBasedRemoteInfoList: {
                            type: 'list',
                            member: {
                              type: 'structure',
                              members: {
                                osType: {},
                                vcenterConfigurationTimeStamp: {}
                              }
                            }
                          },
                          versionControlInfoList: {
                            type: 'list',
                            member: {
                              type: 'structure',
                              members: {
                                versionControlConfigurationTimeStamp: {},
                                versionControlType: {}
                              }
                            }
                          }
                        }
                      },
                      hostName: {},
                      ipAddress: {},
                      lastActivityTimeStamp: {},
                      registeredTimeStamp: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListImportFileTask: {
            http: {
              method: 'GET',
              requestUri: '/list-import-file-task',
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
                taskInfos: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      completionTime: {
                        type: 'timestamp'
                      },
                      id: {},
                      importName: {},
                      inputS3Bucket: {},
                      inputS3Key: {},
                      numberOfRecordsFailed: {
                        type: 'integer'
                      },
                      numberOfRecordsSuccess: {
                        type: 'integer'
                      },
                      startTime: {
                        type: 'timestamp'
                      },
                      status: {},
                      statusReportS3Bucket: {},
                      statusReportS3Key: {}
                    }
                  }
                }
              }
            }
          },
          ListServers: {
            http: {
              requestUri: '/list-servers',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                filterValue: {},
                groupIdFilter: {
                  shape: 'S49'
                },
                maxResults: {
                  type: 'integer'
                },
                nextToken: {},
                serverCriteria: {},
                sort: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                nextToken: {},
                serverInfos: {
                  type: 'list',
                  member: {
                    shape: 'S3k'
                  }
                }
              }
            }
          },
          PutPortfolioPreferences: {
            http: {
              requestUri: '/put-portfolio-preferences',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                applicationMode: {},
                applicationPreferences: {
                  shape: 'S23'
                },
                databasePreferences: {
                  shape: 'S2e'
                },
                prioritizeBusinessGoals: {
                  shape: 'S2q'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          StartAssessment: {
            http: {
              requestUri: '/start-assessment',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                assessmentDataSourceType: {},
                assessmentTargets: {
                  shape: 'S1m'
                },
                s3bucketForAnalysisData: {},
                s3bucketForReportData: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                assessmentId: {}
              }
            }
          },
          StartImportFileTask: {
            http: {
              requestUri: '/start-import-file-task',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['S3Bucket', 'name', 's3key'],
              members: {
                S3Bucket: {},
                dataSourceType: {},
                groupId: {
                  shape: 'S49'
                },
                name: {},
                s3bucketForReportData: {},
                s3key: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                id: {}
              }
            }
          },
          StartRecommendationReportGeneration: {
            http: {
              requestUri: '/start-recommendation-report-generation',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                groupIdFilter: {
                  shape: 'S49'
                },
                outputFormat: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                id: {}
              }
            }
          },
          StopAssessment: {
            http: {
              requestUri: '/stop-assessment',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['assessmentId'],
              members: {
                assessmentId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateApplicationComponentConfig: {
            http: {
              requestUri: '/update-applicationcomponent-config/',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['applicationComponentId'],
              members: {
                appType: {},
                applicationComponentId: {},
                configureOnly: {
                  type: 'boolean'
                },
                inclusionStatus: {},
                secretsManagerKey: {
                  type: 'string',
                  sensitive: true
                },
                sourceCodeList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      location: {},
                      projectName: {},
                      sourceVersion: {},
                      versionControl: {}
                    }
                  }
                },
                strategyOption: {
                  shape: 'S5t'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateServerConfig: {
            http: {
              requestUri: '/update-server-config/',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['serverId'],
              members: {
                serverId: {},
                strategyOption: {
                  shape: 'S5t'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          }
        },
        shapes: {
          S4: {
            type: 'structure',
            members: {
              analysisStatus: {},
              antipatternReportS3Object: {
                shape: 'S6'
              },
              antipatternReportStatus: {},
              antipatternReportStatusMessage: {},
              appType: {},
              appUnitError: {
                type: 'structure',
                members: {
                  appUnitErrorCategory: {}
                }
              },
              associatedServerId: {},
              databaseConfigDetail: {
                type: 'structure',
                members: {
                  secretName: {}
                }
              },
              id: {},
              inclusionStatus: {},
              lastAnalyzedTimestamp: {
                type: 'timestamp'
              },
              listAntipatternSeveritySummary: {
                shape: 'Sk'
              },
              moreServerAssociationExists: {
                type: 'boolean'
              },
              name: {},
              osDriver: {},
              osVersion: {},
              recommendationSet: {
                shape: 'Sq'
              },
              resourceSubType: {},
              resultList: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    analysisStatus: {
                      type: 'structure',
                      members: {
                        runtimeAnalysisStatus: {},
                        srcCodeOrDbAnalysisStatus: {}
                      },
                      union: true
                    },
                    analysisType: {},
                    antipatternReportResultList: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          analyzerName: {
                            type: 'structure',
                            members: {
                              binaryAnalyzerName: {},
                              runTimeAnalyzerName: {},
                              sourceCodeAnalyzerName: {}
                            },
                            union: true
                          },
                          antiPatternReportS3Object: {
                            shape: 'S6'
                          },
                          antipatternReportStatus: {},
                          antipatternReportStatusMessage: {}
                        }
                      }
                    },
                    statusMessage: {}
                  }
                }
              },
              runtimeStatus: {},
              runtimeStatusMessage: {},
              sourceCodeRepositories: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    branch: {},
                    projectName: {},
                    repository: {},
                    versionControlType: {}
                  }
                }
              },
              statusMessage: {}
            }
          },
          S6: {
            type: 'structure',
            members: {
              s3Bucket: {},
              s3key: {}
            }
          },
          Sk: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                count: {
                  type: 'integer'
                },
                severity: {}
              }
            }
          },
          Sq: {
            type: 'structure',
            members: {
              strategy: {},
              targetDestination: {},
              transformationTool: {
                type: 'structure',
                members: {
                  description: {},
                  name: {},
                  tranformationToolInstallationLink: {}
                }
              }
            }
          },
          S1b: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                id: {},
                name: {}
              }
            }
          },
          S1m: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['condition', 'name', 'values'],
              members: {
                condition: {},
                name: {},
                values: {
                  type: 'list',
                  member: {}
                }
              }
            }
          },
          S23: {
            type: 'structure',
            members: {
              managementPreference: {
                type: 'structure',
                members: {
                  awsManagedResources: {
                    type: 'structure',
                    required: ['targetDestination'],
                    members: {
                      targetDestination: {
                        type: 'list',
                        member: {}
                      }
                    }
                  },
                  noPreference: {
                    type: 'structure',
                    required: ['targetDestination'],
                    members: {
                      targetDestination: {
                        type: 'list',
                        member: {}
                      }
                    }
                  },
                  selfManageResources: {
                    type: 'structure',
                    required: ['targetDestination'],
                    members: {
                      targetDestination: {
                        type: 'list',
                        member: {}
                      }
                    }
                  }
                },
                union: true
              }
            }
          },
          S2e: {
            type: 'structure',
            members: {
              databaseManagementPreference: {},
              databaseMigrationPreference: {
                type: 'structure',
                members: {
                  heterogeneous: {
                    type: 'structure',
                    required: ['targetDatabaseEngine'],
                    members: {
                      targetDatabaseEngine: {
                        type: 'list',
                        member: {}
                      }
                    }
                  },
                  homogeneous: {
                    type: 'structure',
                    members: {
                      targetDatabaseEngine: {
                        type: 'list',
                        member: {}
                      }
                    }
                  },
                  noPreference: {
                    type: 'structure',
                    required: ['targetDatabaseEngine'],
                    members: {
                      targetDatabaseEngine: {
                        type: 'list',
                        member: {}
                      }
                    }
                  }
                },
                union: true
              }
            }
          },
          S2q: {
            type: 'structure',
            members: {
              businessGoals: {
                type: 'structure',
                members: {
                  licenseCostReduction: {
                    type: 'integer'
                  },
                  modernizeInfrastructureWithCloudNativeTechnologies: {
                    type: 'integer'
                  },
                  reduceOperationalOverheadWithManagedServices: {
                    type: 'integer'
                  },
                  speedOfMigration: {
                    type: 'integer'
                  }
                }
              }
            }
          },
          S2y: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                count: {
                  type: 'integer'
                },
                strategy: {}
              }
            }
          },
          S3k: {
            type: 'structure',
            members: {
              antipatternReportS3Object: {
                shape: 'S6'
              },
              antipatternReportStatus: {},
              antipatternReportStatusMessage: {},
              applicationComponentStrategySummary: {
                shape: 'S2y'
              },
              dataCollectionStatus: {},
              id: {},
              lastAnalyzedTimestamp: {
                type: 'timestamp'
              },
              listAntipatternSeveritySummary: {
                shape: 'Sk'
              },
              name: {},
              recommendationSet: {
                shape: 'Sq'
              },
              serverError: {
                type: 'structure',
                members: {
                  serverErrorCategory: {}
                }
              },
              serverType: {},
              statusMessage: {},
              systemInfo: {
                type: 'structure',
                members: {
                  cpuArchitecture: {},
                  fileSystemType: {},
                  networkInfoList: {
                    type: 'list',
                    member: {
                      type: 'structure',
                      required: ['interfaceName', 'ipAddress', 'macAddress', 'netMask'],
                      members: {
                        interfaceName: {},
                        ipAddress: {},
                        macAddress: {},
                        netMask: {}
                      }
                    }
                  },
                  osInfo: {
                    type: 'structure',
                    members: {
                      type: {},
                      version: {}
                    }
                  }
                }
              }
            }
          },
          S49: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                name: {},
                value: {}
              }
            }
          },
          S5t: {
            type: 'structure',
            members: {
              isPreferred: {
                type: 'boolean'
              },
              strategy: {},
              targetDestination: {},
              toolName: {}
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=0873912fe0ebfffc17dc6cd83439f0f67de5fef3.js.map