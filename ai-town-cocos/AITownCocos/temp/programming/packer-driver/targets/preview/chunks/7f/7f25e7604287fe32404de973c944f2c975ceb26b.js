System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2016-10-06',
          endpointPrefix: 'codebuild',
          jsonVersion: '1.1',
          protocol: 'json',
          protocols: ['json'],
          serviceFullName: 'AWS CodeBuild',
          serviceId: 'CodeBuild',
          signatureVersion: 'v4',
          targetPrefix: 'CodeBuild_20161006',
          uid: 'codebuild-2016-10-06'
        },
        operations: {
          BatchDeleteBuilds: {
            input: {
              type: 'structure',
              required: ['ids'],
              members: {
                ids: {
                  shape: 'S2'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                buildsDeleted: {
                  shape: 'S2'
                },
                buildsNotDeleted: {
                  shape: 'S5'
                }
              }
            }
          },
          BatchGetBuildBatches: {
            input: {
              type: 'structure',
              required: ['ids'],
              members: {
                ids: {
                  shape: 'S9'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                buildBatches: {
                  type: 'list',
                  member: {
                    shape: 'Sc'
                  }
                },
                buildBatchesNotFound: {
                  shape: 'S9'
                }
              }
            }
          },
          BatchGetBuilds: {
            input: {
              type: 'structure',
              required: ['ids'],
              members: {
                ids: {
                  shape: 'S2'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                builds: {
                  type: 'list',
                  member: {
                    shape: 'S24'
                  }
                },
                buildsNotFound: {
                  shape: 'S2'
                }
              }
            }
          },
          BatchGetFleets: {
            input: {
              type: 'structure',
              required: ['names'],
              members: {
                names: {
                  shape: 'S2f'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                fleets: {
                  type: 'list',
                  member: {
                    shape: 'S2i'
                  }
                },
                fleetsNotFound: {
                  shape: 'S2f'
                }
              }
            }
          },
          BatchGetProjects: {
            input: {
              type: 'structure',
              required: ['names'],
              members: {
                names: {
                  shape: 'S30'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                projects: {
                  type: 'list',
                  member: {
                    shape: 'S33'
                  }
                },
                projectsNotFound: {
                  shape: 'S30'
                }
              }
            }
          },
          BatchGetReportGroups: {
            input: {
              type: 'structure',
              required: ['reportGroupArns'],
              members: {
                reportGroupArns: {
                  shape: 'S3l'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                reportGroups: {
                  type: 'list',
                  member: {
                    shape: 'S3o'
                  }
                },
                reportGroupsNotFound: {
                  shape: 'S3l'
                }
              }
            }
          },
          BatchGetReports: {
            input: {
              type: 'structure',
              required: ['reportArns'],
              members: {
                reportArns: {
                  shape: 'S3x'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                reports: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      arn: {},
                      type: {},
                      name: {},
                      reportGroupArn: {},
                      executionId: {},
                      status: {},
                      created: {
                        type: 'timestamp'
                      },
                      expired: {
                        type: 'timestamp'
                      },
                      exportConfig: {
                        shape: 'S3r'
                      },
                      truncated: {
                        type: 'boolean'
                      },
                      testSummary: {
                        type: 'structure',
                        required: ['total', 'statusCounts', 'durationInNanoSeconds'],
                        members: {
                          total: {
                            type: 'integer'
                          },
                          statusCounts: {
                            type: 'map',
                            key: {},
                            value: {
                              type: 'integer'
                            }
                          },
                          durationInNanoSeconds: {
                            type: 'long'
                          }
                        }
                      },
                      codeCoverageSummary: {
                        type: 'structure',
                        members: {
                          lineCoveragePercentage: {
                            type: 'double'
                          },
                          linesCovered: {
                            type: 'integer'
                          },
                          linesMissed: {
                            type: 'integer'
                          },
                          branchCoveragePercentage: {
                            type: 'double'
                          },
                          branchesCovered: {
                            type: 'integer'
                          },
                          branchesMissed: {
                            type: 'integer'
                          }
                        }
                      }
                    }
                  }
                },
                reportsNotFound: {
                  shape: 'S3x'
                }
              }
            }
          },
          CreateFleet: {
            input: {
              type: 'structure',
              required: ['name', 'baseCapacity', 'environmentType', 'computeType'],
              members: {
                name: {},
                baseCapacity: {
                  type: 'integer'
                },
                environmentType: {},
                computeType: {},
                scalingConfiguration: {
                  shape: 'S48'
                },
                overflowBehavior: {},
                vpcConfig: {
                  shape: 'S1j'
                },
                fleetServiceRole: {},
                tags: {
                  shape: 'S2v'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                fleet: {
                  shape: 'S2i'
                }
              }
            }
          },
          CreateProject: {
            input: {
              type: 'structure',
              required: ['name', 'source', 'artifacts', 'environment', 'serviceRole'],
              members: {
                name: {},
                description: {},
                source: {
                  shape: 'Sl'
                },
                secondarySources: {
                  shape: 'St'
                },
                sourceVersion: {},
                secondarySourceVersions: {
                  shape: 'Su'
                },
                artifacts: {
                  shape: 'S36'
                },
                secondaryArtifacts: {
                  shape: 'S39'
                },
                cache: {
                  shape: 'Sz'
                },
                environment: {
                  shape: 'S13'
                },
                serviceRole: {},
                timeoutInMinutes: {
                  type: 'integer'
                },
                queuedTimeoutInMinutes: {
                  type: 'integer'
                },
                encryptionKey: {},
                tags: {
                  shape: 'S2v'
                },
                vpcConfig: {
                  shape: 'S1j'
                },
                badgeEnabled: {
                  type: 'boolean'
                },
                logsConfig: {
                  shape: 'S1d'
                },
                fileSystemLocations: {
                  shape: 'S1m'
                },
                buildBatchConfig: {
                  shape: 'S1p'
                },
                concurrentBuildLimit: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                project: {
                  shape: 'S33'
                }
              }
            }
          },
          CreateReportGroup: {
            input: {
              type: 'structure',
              required: ['name', 'type', 'exportConfig'],
              members: {
                name: {},
                type: {},
                exportConfig: {
                  shape: 'S3r'
                },
                tags: {
                  shape: 'S2v'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                reportGroup: {
                  shape: 'S3o'
                }
              }
            }
          },
          CreateWebhook: {
            input: {
              type: 'structure',
              required: ['projectName'],
              members: {
                projectName: {},
                branchFilter: {},
                filterGroups: {
                  shape: 'S3d'
                },
                buildType: {},
                manualCreation: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                webhook: {
                  shape: 'S3c'
                }
              }
            }
          },
          DeleteBuildBatch: {
            input: {
              type: 'structure',
              required: ['id'],
              members: {
                id: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                statusCode: {},
                buildsDeleted: {
                  shape: 'S2'
                },
                buildsNotDeleted: {
                  shape: 'S5'
                }
              }
            }
          },
          DeleteFleet: {
            input: {
              type: 'structure',
              required: ['arn'],
              members: {
                arn: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteProject: {
            input: {
              type: 'structure',
              required: ['name'],
              members: {
                name: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteReport: {
            input: {
              type: 'structure',
              required: ['arn'],
              members: {
                arn: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteReportGroup: {
            input: {
              type: 'structure',
              required: ['arn'],
              members: {
                arn: {},
                deleteReports: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteResourcePolicy: {
            input: {
              type: 'structure',
              required: ['resourceArn'],
              members: {
                resourceArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteSourceCredentials: {
            input: {
              type: 'structure',
              required: ['arn'],
              members: {
                arn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                arn: {}
              }
            }
          },
          DeleteWebhook: {
            input: {
              type: 'structure',
              required: ['projectName'],
              members: {
                projectName: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DescribeCodeCoverages: {
            input: {
              type: 'structure',
              required: ['reportArn'],
              members: {
                reportArn: {},
                nextToken: {},
                maxResults: {
                  type: 'integer'
                },
                sortOrder: {},
                sortBy: {},
                minLineCoveragePercentage: {
                  type: 'double'
                },
                maxLineCoveragePercentage: {
                  type: 'double'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                nextToken: {},
                codeCoverages: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      id: {},
                      reportARN: {},
                      filePath: {},
                      lineCoveragePercentage: {
                        type: 'double'
                      },
                      linesCovered: {
                        type: 'integer'
                      },
                      linesMissed: {
                        type: 'integer'
                      },
                      branchCoveragePercentage: {
                        type: 'double'
                      },
                      branchesCovered: {
                        type: 'integer'
                      },
                      branchesMissed: {
                        type: 'integer'
                      },
                      expired: {
                        type: 'timestamp'
                      }
                    }
                  }
                }
              }
            }
          },
          DescribeTestCases: {
            input: {
              type: 'structure',
              required: ['reportArn'],
              members: {
                reportArn: {},
                nextToken: {},
                maxResults: {
                  type: 'integer'
                },
                filter: {
                  type: 'structure',
                  members: {
                    status: {},
                    keyword: {}
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                nextToken: {},
                testCases: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      reportArn: {},
                      testRawDataPath: {},
                      prefix: {},
                      name: {},
                      status: {},
                      durationInNanoSeconds: {
                        type: 'long'
                      },
                      message: {},
                      expired: {
                        type: 'timestamp'
                      }
                    }
                  }
                }
              }
            }
          },
          GetReportGroupTrend: {
            input: {
              type: 'structure',
              required: ['reportGroupArn', 'trendField'],
              members: {
                reportGroupArn: {},
                numOfReports: {
                  type: 'integer'
                },
                trendField: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                stats: {
                  type: 'structure',
                  members: {
                    average: {},
                    max: {},
                    min: {}
                  }
                },
                rawData: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      reportArn: {},
                      data: {}
                    }
                  }
                }
              }
            }
          },
          GetResourcePolicy: {
            input: {
              type: 'structure',
              required: ['resourceArn'],
              members: {
                resourceArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                policy: {}
              }
            }
          },
          ImportSourceCredentials: {
            input: {
              type: 'structure',
              required: ['token', 'serverType', 'authType'],
              members: {
                username: {},
                token: {
                  type: 'string',
                  sensitive: true
                },
                serverType: {},
                authType: {},
                shouldOverwrite: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                arn: {}
              }
            }
          },
          InvalidateProjectCache: {
            input: {
              type: 'structure',
              required: ['projectName'],
              members: {
                projectName: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          ListBuildBatches: {
            input: {
              type: 'structure',
              members: {
                filter: {
                  shape: 'S5o'
                },
                maxResults: {
                  type: 'integer'
                },
                sortOrder: {},
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ids: {
                  shape: 'S9'
                },
                nextToken: {}
              }
            }
          },
          ListBuildBatchesForProject: {
            input: {
              type: 'structure',
              members: {
                projectName: {},
                filter: {
                  shape: 'S5o'
                },
                maxResults: {
                  type: 'integer'
                },
                sortOrder: {},
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ids: {
                  shape: 'S9'
                },
                nextToken: {}
              }
            }
          },
          ListBuilds: {
            input: {
              type: 'structure',
              members: {
                sortOrder: {},
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ids: {
                  shape: 'S2'
                },
                nextToken: {}
              }
            }
          },
          ListBuildsForProject: {
            input: {
              type: 'structure',
              required: ['projectName'],
              members: {
                projectName: {},
                sortOrder: {},
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ids: {
                  shape: 'S2'
                },
                nextToken: {}
              }
            }
          },
          ListCuratedEnvironmentImages: {
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {
                platforms: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      platform: {},
                      languages: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            language: {},
                            images: {
                              type: 'list',
                              member: {
                                type: 'structure',
                                members: {
                                  name: {},
                                  description: {},
                                  versions: {
                                    type: 'list',
                                    member: {}
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
              }
            }
          },
          ListFleets: {
            input: {
              type: 'structure',
              members: {
                nextToken: {
                  type: 'string',
                  sensitive: true
                },
                maxResults: {
                  type: 'integer'
                },
                sortOrder: {},
                sortBy: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                nextToken: {},
                fleets: {
                  type: 'list',
                  member: {}
                }
              }
            }
          },
          ListProjects: {
            input: {
              type: 'structure',
              members: {
                sortBy: {},
                sortOrder: {},
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                nextToken: {},
                projects: {
                  shape: 'S30'
                }
              }
            }
          },
          ListReportGroups: {
            input: {
              type: 'structure',
              members: {
                sortOrder: {},
                sortBy: {},
                nextToken: {},
                maxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                nextToken: {},
                reportGroups: {
                  shape: 'S3l'
                }
              }
            }
          },
          ListReports: {
            input: {
              type: 'structure',
              members: {
                sortOrder: {},
                nextToken: {},
                maxResults: {
                  type: 'integer'
                },
                filter: {
                  shape: 'S6j'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                nextToken: {},
                reports: {
                  shape: 'S3x'
                }
              }
            }
          },
          ListReportsForReportGroup: {
            input: {
              type: 'structure',
              required: ['reportGroupArn'],
              members: {
                reportGroupArn: {},
                nextToken: {},
                sortOrder: {},
                maxResults: {
                  type: 'integer'
                },
                filter: {
                  shape: 'S6j'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                nextToken: {},
                reports: {
                  shape: 'S3x'
                }
              }
            }
          },
          ListSharedProjects: {
            input: {
              type: 'structure',
              members: {
                sortBy: {},
                sortOrder: {},
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
                projects: {
                  type: 'list',
                  member: {}
                }
              }
            }
          },
          ListSharedReportGroups: {
            input: {
              type: 'structure',
              members: {
                sortOrder: {},
                sortBy: {},
                nextToken: {},
                maxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                nextToken: {},
                reportGroups: {
                  shape: 'S3l'
                }
              }
            }
          },
          ListSourceCredentials: {
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {
                sourceCredentialsInfos: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      arn: {},
                      serverType: {},
                      authType: {},
                      resource: {}
                    }
                  }
                }
              }
            }
          },
          PutResourcePolicy: {
            input: {
              type: 'structure',
              required: ['policy', 'resourceArn'],
              members: {
                policy: {},
                resourceArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                resourceArn: {}
              }
            }
          },
          RetryBuild: {
            input: {
              type: 'structure',
              members: {
                id: {},
                idempotencyToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                build: {
                  shape: 'S24'
                }
              }
            }
          },
          RetryBuildBatch: {
            input: {
              type: 'structure',
              members: {
                id: {},
                idempotencyToken: {},
                retryType: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                buildBatch: {
                  shape: 'Sc'
                }
              }
            }
          },
          StartBuild: {
            input: {
              type: 'structure',
              required: ['projectName'],
              members: {
                projectName: {},
                secondarySourcesOverride: {
                  shape: 'St'
                },
                secondarySourcesVersionOverride: {
                  shape: 'Su'
                },
                sourceVersion: {},
                artifactsOverride: {
                  shape: 'S36'
                },
                secondaryArtifactsOverride: {
                  shape: 'S39'
                },
                environmentVariablesOverride: {
                  shape: 'S17'
                },
                sourceTypeOverride: {},
                sourceLocationOverride: {},
                sourceAuthOverride: {
                  shape: 'Sq'
                },
                gitCloneDepthOverride: {
                  type: 'integer'
                },
                gitSubmodulesConfigOverride: {
                  shape: 'So'
                },
                buildspecOverride: {},
                insecureSslOverride: {
                  type: 'boolean'
                },
                reportBuildStatusOverride: {
                  type: 'boolean'
                },
                buildStatusConfigOverride: {
                  shape: 'Ss'
                },
                environmentTypeOverride: {},
                imageOverride: {},
                computeTypeOverride: {},
                certificateOverride: {},
                cacheOverride: {
                  shape: 'Sz'
                },
                serviceRoleOverride: {},
                privilegedModeOverride: {
                  type: 'boolean'
                },
                timeoutInMinutesOverride: {
                  type: 'integer'
                },
                queuedTimeoutInMinutesOverride: {
                  type: 'integer'
                },
                encryptionKeyOverride: {},
                idempotencyToken: {},
                logsConfigOverride: {
                  shape: 'S1d'
                },
                registryCredentialOverride: {
                  shape: 'S1a'
                },
                imagePullCredentialsTypeOverride: {},
                debugSessionEnabled: {
                  type: 'boolean'
                },
                fleetOverride: {
                  shape: 'S16'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                build: {
                  shape: 'S24'
                }
              }
            }
          },
          StartBuildBatch: {
            input: {
              type: 'structure',
              required: ['projectName'],
              members: {
                projectName: {},
                secondarySourcesOverride: {
                  shape: 'St'
                },
                secondarySourcesVersionOverride: {
                  shape: 'Su'
                },
                sourceVersion: {},
                artifactsOverride: {
                  shape: 'S36'
                },
                secondaryArtifactsOverride: {
                  shape: 'S39'
                },
                environmentVariablesOverride: {
                  shape: 'S17'
                },
                sourceTypeOverride: {},
                sourceLocationOverride: {},
                sourceAuthOverride: {
                  shape: 'Sq'
                },
                gitCloneDepthOverride: {
                  type: 'integer'
                },
                gitSubmodulesConfigOverride: {
                  shape: 'So'
                },
                buildspecOverride: {},
                insecureSslOverride: {
                  type: 'boolean'
                },
                reportBuildBatchStatusOverride: {
                  type: 'boolean'
                },
                environmentTypeOverride: {},
                imageOverride: {},
                computeTypeOverride: {},
                certificateOverride: {},
                cacheOverride: {
                  shape: 'Sz'
                },
                serviceRoleOverride: {},
                privilegedModeOverride: {
                  type: 'boolean'
                },
                buildTimeoutInMinutesOverride: {
                  type: 'integer'
                },
                queuedTimeoutInMinutesOverride: {
                  type: 'integer'
                },
                encryptionKeyOverride: {},
                idempotencyToken: {},
                logsConfigOverride: {
                  shape: 'S1d'
                },
                registryCredentialOverride: {
                  shape: 'S1a'
                },
                imagePullCredentialsTypeOverride: {},
                buildBatchConfigOverride: {
                  shape: 'S1p'
                },
                debugSessionEnabled: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                buildBatch: {
                  shape: 'Sc'
                }
              }
            }
          },
          StopBuild: {
            input: {
              type: 'structure',
              required: ['id'],
              members: {
                id: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                build: {
                  shape: 'S24'
                }
              }
            }
          },
          StopBuildBatch: {
            input: {
              type: 'structure',
              required: ['id'],
              members: {
                id: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                buildBatch: {
                  shape: 'Sc'
                }
              }
            }
          },
          UpdateFleet: {
            input: {
              type: 'structure',
              required: ['arn'],
              members: {
                arn: {},
                baseCapacity: {
                  type: 'integer'
                },
                environmentType: {},
                computeType: {},
                scalingConfiguration: {
                  shape: 'S48'
                },
                overflowBehavior: {},
                vpcConfig: {
                  shape: 'S1j'
                },
                fleetServiceRole: {},
                tags: {
                  shape: 'S2v'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                fleet: {
                  shape: 'S2i'
                }
              }
            }
          },
          UpdateProject: {
            input: {
              type: 'structure',
              required: ['name'],
              members: {
                name: {},
                description: {},
                source: {
                  shape: 'Sl'
                },
                secondarySources: {
                  shape: 'St'
                },
                sourceVersion: {},
                secondarySourceVersions: {
                  shape: 'Su'
                },
                artifacts: {
                  shape: 'S36'
                },
                secondaryArtifacts: {
                  shape: 'S39'
                },
                cache: {
                  shape: 'Sz'
                },
                environment: {
                  shape: 'S13'
                },
                serviceRole: {},
                timeoutInMinutes: {
                  type: 'integer'
                },
                queuedTimeoutInMinutes: {
                  type: 'integer'
                },
                encryptionKey: {},
                tags: {
                  shape: 'S2v'
                },
                vpcConfig: {
                  shape: 'S1j'
                },
                badgeEnabled: {
                  type: 'boolean'
                },
                logsConfig: {
                  shape: 'S1d'
                },
                fileSystemLocations: {
                  shape: 'S1m'
                },
                buildBatchConfig: {
                  shape: 'S1p'
                },
                concurrentBuildLimit: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                project: {
                  shape: 'S33'
                }
              }
            }
          },
          UpdateProjectVisibility: {
            input: {
              type: 'structure',
              required: ['projectArn', 'projectVisibility'],
              members: {
                projectArn: {},
                projectVisibility: {},
                resourceAccessRole: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                projectArn: {},
                publicProjectAlias: {},
                projectVisibility: {}
              }
            }
          },
          UpdateReportGroup: {
            input: {
              type: 'structure',
              required: ['arn'],
              members: {
                arn: {},
                exportConfig: {
                  shape: 'S3r'
                },
                tags: {
                  shape: 'S2v'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                reportGroup: {
                  shape: 'S3o'
                }
              }
            }
          },
          UpdateWebhook: {
            input: {
              type: 'structure',
              required: ['projectName'],
              members: {
                projectName: {},
                branchFilter: {},
                rotateSecret: {
                  type: 'boolean'
                },
                filterGroups: {
                  shape: 'S3d'
                },
                buildType: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                webhook: {
                  shape: 'S3c'
                }
              }
            }
          }
        },
        shapes: {
          S2: {
            type: 'list',
            member: {}
          },
          S5: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                id: {},
                statusCode: {}
              }
            }
          },
          S9: {
            type: 'list',
            member: {}
          },
          Sc: {
            type: 'structure',
            members: {
              id: {},
              arn: {},
              startTime: {
                type: 'timestamp'
              },
              endTime: {
                type: 'timestamp'
              },
              currentPhase: {},
              buildBatchStatus: {},
              sourceVersion: {},
              resolvedSourceVersion: {},
              projectName: {},
              phases: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    phaseType: {},
                    phaseStatus: {},
                    startTime: {
                      type: 'timestamp'
                    },
                    endTime: {
                      type: 'timestamp'
                    },
                    durationInSeconds: {
                      type: 'long'
                    },
                    contexts: {
                      shape: 'Sj'
                    }
                  }
                }
              },
              source: {
                shape: 'Sl'
              },
              secondarySources: {
                shape: 'St'
              },
              secondarySourceVersions: {
                shape: 'Su'
              },
              artifacts: {
                shape: 'Sw'
              },
              secondaryArtifacts: {
                shape: 'Sy'
              },
              cache: {
                shape: 'Sz'
              },
              environment: {
                shape: 'S13'
              },
              serviceRole: {},
              logConfig: {
                shape: 'S1d'
              },
              buildTimeoutInMinutes: {
                type: 'integer'
              },
              queuedTimeoutInMinutes: {
                type: 'integer'
              },
              complete: {
                type: 'boolean'
              },
              initiator: {},
              vpcConfig: {
                shape: 'S1j'
              },
              encryptionKey: {},
              buildBatchNumber: {
                type: 'long'
              },
              fileSystemLocations: {
                shape: 'S1m'
              },
              buildBatchConfig: {
                shape: 'S1p'
              },
              buildGroups: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    identifier: {},
                    dependsOn: {
                      type: 'list',
                      member: {}
                    },
                    ignoreFailure: {
                      type: 'boolean'
                    },
                    currentBuildSummary: {
                      shape: 'S1w'
                    },
                    priorBuildSummaryList: {
                      type: 'list',
                      member: {
                        shape: 'S1w'
                      }
                    }
                  }
                }
              },
              debugSessionEnabled: {
                type: 'boolean'
              }
            }
          },
          Sj: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                statusCode: {},
                message: {}
              }
            }
          },
          Sl: {
            type: 'structure',
            required: ['type'],
            members: {
              type: {},
              location: {},
              gitCloneDepth: {
                type: 'integer'
              },
              gitSubmodulesConfig: {
                shape: 'So'
              },
              buildspec: {},
              auth: {
                shape: 'Sq'
              },
              reportBuildStatus: {
                type: 'boolean'
              },
              buildStatusConfig: {
                shape: 'Ss'
              },
              insecureSsl: {
                type: 'boolean'
              },
              sourceIdentifier: {}
            }
          },
          So: {
            type: 'structure',
            required: ['fetchSubmodules'],
            members: {
              fetchSubmodules: {
                type: 'boolean'
              }
            }
          },
          Sq: {
            type: 'structure',
            required: ['type'],
            members: {
              type: {},
              resource: {}
            }
          },
          Ss: {
            type: 'structure',
            members: {
              context: {},
              targetUrl: {}
            }
          },
          St: {
            type: 'list',
            member: {
              shape: 'Sl'
            }
          },
          Su: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['sourceIdentifier', 'sourceVersion'],
              members: {
                sourceIdentifier: {},
                sourceVersion: {}
              }
            }
          },
          Sw: {
            type: 'structure',
            members: {
              location: {},
              sha256sum: {},
              md5sum: {},
              overrideArtifactName: {
                type: 'boolean'
              },
              encryptionDisabled: {
                type: 'boolean'
              },
              artifactIdentifier: {},
              bucketOwnerAccess: {}
            }
          },
          Sy: {
            type: 'list',
            member: {
              shape: 'Sw'
            }
          },
          Sz: {
            type: 'structure',
            required: ['type'],
            members: {
              type: {},
              location: {},
              modes: {
                type: 'list',
                member: {}
              }
            }
          },
          S13: {
            type: 'structure',
            required: ['type', 'image', 'computeType'],
            members: {
              type: {},
              image: {},
              computeType: {},
              fleet: {
                shape: 'S16'
              },
              environmentVariables: {
                shape: 'S17'
              },
              privilegedMode: {
                type: 'boolean'
              },
              certificate: {},
              registryCredential: {
                shape: 'S1a'
              },
              imagePullCredentialsType: {}
            }
          },
          S16: {
            type: 'structure',
            members: {
              fleetArn: {}
            }
          },
          S17: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['name', 'value'],
              members: {
                name: {},
                value: {},
                type: {}
              }
            }
          },
          S1a: {
            type: 'structure',
            required: ['credential', 'credentialProvider'],
            members: {
              credential: {},
              credentialProvider: {}
            }
          },
          S1d: {
            type: 'structure',
            members: {
              cloudWatchLogs: {
                shape: 'S1e'
              },
              s3Logs: {
                shape: 'S1g'
              }
            }
          },
          S1e: {
            type: 'structure',
            required: ['status'],
            members: {
              status: {},
              groupName: {},
              streamName: {}
            }
          },
          S1g: {
            type: 'structure',
            required: ['status'],
            members: {
              status: {},
              location: {},
              encryptionDisabled: {
                type: 'boolean'
              },
              bucketOwnerAccess: {}
            }
          },
          S1j: {
            type: 'structure',
            members: {
              vpcId: {},
              subnets: {
                type: 'list',
                member: {}
              },
              securityGroupIds: {
                type: 'list',
                member: {}
              }
            }
          },
          S1m: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                type: {},
                location: {},
                mountPoint: {},
                identifier: {},
                mountOptions: {}
              }
            }
          },
          S1p: {
            type: 'structure',
            members: {
              serviceRole: {},
              combineArtifacts: {
                type: 'boolean'
              },
              restrictions: {
                type: 'structure',
                members: {
                  maximumBuildsAllowed: {
                    type: 'integer'
                  },
                  computeTypesAllowed: {
                    type: 'list',
                    member: {}
                  }
                }
              },
              timeoutInMins: {
                type: 'integer'
              },
              batchReportMode: {}
            }
          },
          S1w: {
            type: 'structure',
            members: {
              arn: {},
              requestedOn: {
                type: 'timestamp'
              },
              buildStatus: {},
              primaryArtifact: {
                shape: 'S1x'
              },
              secondaryArtifacts: {
                type: 'list',
                member: {
                  shape: 'S1x'
                }
              }
            }
          },
          S1x: {
            type: 'structure',
            members: {
              type: {},
              location: {},
              identifier: {}
            }
          },
          S24: {
            type: 'structure',
            members: {
              id: {},
              arn: {},
              buildNumber: {
                type: 'long'
              },
              startTime: {
                type: 'timestamp'
              },
              endTime: {
                type: 'timestamp'
              },
              currentPhase: {},
              buildStatus: {},
              sourceVersion: {},
              resolvedSourceVersion: {},
              projectName: {},
              phases: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    phaseType: {},
                    phaseStatus: {},
                    startTime: {
                      type: 'timestamp'
                    },
                    endTime: {
                      type: 'timestamp'
                    },
                    durationInSeconds: {
                      type: 'long'
                    },
                    contexts: {
                      shape: 'Sj'
                    }
                  }
                }
              },
              source: {
                shape: 'Sl'
              },
              secondarySources: {
                shape: 'St'
              },
              secondarySourceVersions: {
                shape: 'Su'
              },
              artifacts: {
                shape: 'Sw'
              },
              secondaryArtifacts: {
                shape: 'Sy'
              },
              cache: {
                shape: 'Sz'
              },
              environment: {
                shape: 'S13'
              },
              serviceRole: {},
              logs: {
                type: 'structure',
                members: {
                  groupName: {},
                  streamName: {},
                  deepLink: {},
                  s3DeepLink: {},
                  cloudWatchLogsArn: {},
                  s3LogsArn: {},
                  cloudWatchLogs: {
                    shape: 'S1e'
                  },
                  s3Logs: {
                    shape: 'S1g'
                  }
                }
              },
              timeoutInMinutes: {
                type: 'integer'
              },
              queuedTimeoutInMinutes: {
                type: 'integer'
              },
              buildComplete: {
                type: 'boolean'
              },
              initiator: {},
              vpcConfig: {
                shape: 'S1j'
              },
              networkInterface: {
                type: 'structure',
                members: {
                  subnetId: {},
                  networkInterfaceId: {}
                }
              },
              encryptionKey: {},
              exportedEnvironmentVariables: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    name: {},
                    value: {}
                  }
                }
              },
              reportArns: {
                type: 'list',
                member: {}
              },
              fileSystemLocations: {
                shape: 'S1m'
              },
              debugSession: {
                type: 'structure',
                members: {
                  sessionEnabled: {
                    type: 'boolean'
                  },
                  sessionTarget: {}
                }
              },
              buildBatchArn: {}
            }
          },
          S2f: {
            type: 'list',
            member: {}
          },
          S2i: {
            type: 'structure',
            members: {
              arn: {},
              name: {},
              id: {},
              created: {
                type: 'timestamp'
              },
              lastModified: {
                type: 'timestamp'
              },
              status: {
                type: 'structure',
                members: {
                  statusCode: {},
                  context: {},
                  message: {}
                }
              },
              baseCapacity: {
                type: 'integer'
              },
              environmentType: {},
              computeType: {},
              scalingConfiguration: {
                type: 'structure',
                members: {
                  scalingType: {},
                  targetTrackingScalingConfigs: {
                    shape: 'S2q'
                  },
                  maxCapacity: {
                    type: 'integer'
                  },
                  desiredCapacity: {
                    type: 'integer'
                  }
                }
              },
              overflowBehavior: {},
              vpcConfig: {
                shape: 'S1j'
              },
              fleetServiceRole: {},
              tags: {
                shape: 'S2v'
              }
            }
          },
          S2q: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                metricType: {},
                targetValue: {
                  type: 'double'
                }
              }
            }
          },
          S2v: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                key: {},
                value: {}
              }
            }
          },
          S30: {
            type: 'list',
            member: {}
          },
          S33: {
            type: 'structure',
            members: {
              name: {},
              arn: {},
              description: {},
              source: {
                shape: 'Sl'
              },
              secondarySources: {
                shape: 'St'
              },
              sourceVersion: {},
              secondarySourceVersions: {
                shape: 'Su'
              },
              artifacts: {
                shape: 'S36'
              },
              secondaryArtifacts: {
                shape: 'S39'
              },
              cache: {
                shape: 'Sz'
              },
              environment: {
                shape: 'S13'
              },
              serviceRole: {},
              timeoutInMinutes: {
                type: 'integer'
              },
              queuedTimeoutInMinutes: {
                type: 'integer'
              },
              encryptionKey: {},
              tags: {
                shape: 'S2v'
              },
              created: {
                type: 'timestamp'
              },
              lastModified: {
                type: 'timestamp'
              },
              webhook: {
                shape: 'S3c'
              },
              vpcConfig: {
                shape: 'S1j'
              },
              badge: {
                type: 'structure',
                members: {
                  badgeEnabled: {
                    type: 'boolean'
                  },
                  badgeRequestUrl: {}
                }
              },
              logsConfig: {
                shape: 'S1d'
              },
              fileSystemLocations: {
                shape: 'S1m'
              },
              buildBatchConfig: {
                shape: 'S1p'
              },
              concurrentBuildLimit: {
                type: 'integer'
              },
              projectVisibility: {},
              publicProjectAlias: {},
              resourceAccessRole: {}
            }
          },
          S36: {
            type: 'structure',
            required: ['type'],
            members: {
              type: {},
              location: {},
              path: {},
              namespaceType: {},
              name: {},
              packaging: {},
              overrideArtifactName: {
                type: 'boolean'
              },
              encryptionDisabled: {
                type: 'boolean'
              },
              artifactIdentifier: {},
              bucketOwnerAccess: {}
            }
          },
          S39: {
            type: 'list',
            member: {
              shape: 'S36'
            }
          },
          S3c: {
            type: 'structure',
            members: {
              url: {},
              payloadUrl: {},
              secret: {},
              branchFilter: {},
              filterGroups: {
                shape: 'S3d'
              },
              buildType: {},
              manualCreation: {
                type: 'boolean'
              },
              lastModifiedSecret: {
                type: 'timestamp'
              }
            }
          },
          S3d: {
            type: 'list',
            member: {
              type: 'list',
              member: {
                type: 'structure',
                required: ['type', 'pattern'],
                members: {
                  type: {},
                  pattern: {},
                  excludeMatchedPattern: {
                    type: 'boolean'
                  }
                }
              }
            }
          },
          S3l: {
            type: 'list',
            member: {}
          },
          S3o: {
            type: 'structure',
            members: {
              arn: {},
              name: {},
              type: {},
              exportConfig: {
                shape: 'S3r'
              },
              created: {
                type: 'timestamp'
              },
              lastModified: {
                type: 'timestamp'
              },
              tags: {
                shape: 'S2v'
              },
              status: {}
            }
          },
          S3r: {
            type: 'structure',
            members: {
              exportConfigType: {},
              s3Destination: {
                type: 'structure',
                members: {
                  bucket: {},
                  bucketOwner: {},
                  path: {},
                  packaging: {},
                  encryptionKey: {},
                  encryptionDisabled: {
                    type: 'boolean'
                  }
                }
              }
            }
          },
          S3x: {
            type: 'list',
            member: {}
          },
          S48: {
            type: 'structure',
            members: {
              scalingType: {},
              targetTrackingScalingConfigs: {
                shape: 'S2q'
              },
              maxCapacity: {
                type: 'integer'
              }
            }
          },
          S5o: {
            type: 'structure',
            members: {
              status: {}
            }
          },
          S6j: {
            type: 'structure',
            members: {
              status: {}
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=7f25e7604287fe32404de973c944f2c975ceb26b.js.map