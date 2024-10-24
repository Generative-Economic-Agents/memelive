System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2018-06-29',
          endpointPrefix: 'robomaker',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceAbbreviation: 'RoboMaker',
          serviceFullName: 'AWS RoboMaker',
          serviceId: 'RoboMaker',
          signatureVersion: 'v4',
          signingName: 'robomaker',
          uid: 'robomaker-2018-06-29'
        },
        operations: {
          BatchDeleteWorlds: {
            http: {
              requestUri: '/batchDeleteWorlds'
            },
            input: {
              type: 'structure',
              required: ['worlds'],
              members: {
                worlds: {
                  shape: 'S2'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                unprocessedWorlds: {
                  shape: 'S2'
                }
              }
            }
          },
          BatchDescribeSimulationJob: {
            http: {
              requestUri: '/batchDescribeSimulationJob'
            },
            input: {
              type: 'structure',
              required: ['jobs'],
              members: {
                jobs: {
                  shape: 'S2'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                jobs: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      arn: {},
                      name: {},
                      status: {},
                      lastStartedAt: {
                        type: 'timestamp'
                      },
                      lastUpdatedAt: {
                        type: 'timestamp'
                      },
                      failureBehavior: {},
                      failureCode: {},
                      failureReason: {},
                      clientRequestToken: {},
                      outputLocation: {
                        shape: 'Sh'
                      },
                      loggingConfig: {
                        shape: 'Sk'
                      },
                      maxJobDurationInSeconds: {
                        type: 'long'
                      },
                      simulationTimeMillis: {
                        type: 'long'
                      },
                      iamRole: {},
                      robotApplications: {
                        shape: 'Sp'
                      },
                      simulationApplications: {
                        shape: 'S1d'
                      },
                      dataSources: {
                        shape: 'S1h'
                      },
                      tags: {
                        shape: 'S1o'
                      },
                      vpcConfig: {
                        shape: 'S1r'
                      },
                      networkInterface: {
                        shape: 'S1u'
                      },
                      compute: {
                        shape: 'S1v'
                      }
                    }
                  }
                },
                unprocessedJobs: {
                  shape: 'S2'
                }
              }
            }
          },
          CancelDeploymentJob: {
            http: {
              requestUri: '/cancelDeploymentJob'
            },
            input: {
              type: 'structure',
              required: ['job'],
              members: {
                job: {}
              },
              deprecated: true,
              deprecatedMessage: 'Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html.'
            },
            output: {
              type: 'structure',
              members: {},
              deprecated: true,
              deprecatedMessage: 'Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html.'
            },
            deprecated: true,
            deprecatedMessage: 'Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html.'
          },
          CancelSimulationJob: {
            http: {
              requestUri: '/cancelSimulationJob'
            },
            input: {
              type: 'structure',
              required: ['job'],
              members: {
                job: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          CancelSimulationJobBatch: {
            http: {
              requestUri: '/cancelSimulationJobBatch'
            },
            input: {
              type: 'structure',
              required: ['batch'],
              members: {
                batch: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          CancelWorldExportJob: {
            http: {
              requestUri: '/cancelWorldExportJob'
            },
            input: {
              type: 'structure',
              required: ['job'],
              members: {
                job: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          CancelWorldGenerationJob: {
            http: {
              requestUri: '/cancelWorldGenerationJob'
            },
            input: {
              type: 'structure',
              required: ['job'],
              members: {
                job: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          CreateDeploymentJob: {
            http: {
              requestUri: '/createDeploymentJob'
            },
            input: {
              type: 'structure',
              required: ['clientRequestToken', 'fleet', 'deploymentApplicationConfigs'],
              members: {
                deploymentConfig: {
                  shape: 'S2a'
                },
                clientRequestToken: {
                  idempotencyToken: true
                },
                fleet: {},
                deploymentApplicationConfigs: {
                  shape: 'S2e'
                },
                tags: {
                  shape: 'S1o'
                }
              },
              deprecated: true,
              deprecatedMessage: 'AWS RoboMaker is unable to process this request as the support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html.'
            },
            output: {
              type: 'structure',
              members: {
                arn: {},
                fleet: {},
                status: {},
                deploymentApplicationConfigs: {
                  shape: 'S2e'
                },
                failureReason: {},
                failureCode: {},
                createdAt: {
                  type: 'timestamp'
                },
                deploymentConfig: {
                  shape: 'S2a'
                },
                tags: {
                  shape: 'S1o'
                }
              },
              deprecated: true,
              deprecatedMessage: 'AWS RoboMaker is unable to process this request as the support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html.'
            },
            deprecated: true,
            deprecatedMessage: 'AWS RoboMaker is unable to process this request as the support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html.'
          },
          CreateFleet: {
            http: {
              requestUri: '/createFleet'
            },
            input: {
              type: 'structure',
              required: ['name'],
              members: {
                name: {},
                tags: {
                  shape: 'S1o'
                }
              },
              deprecated: true,
              deprecatedMessage: 'AWS RoboMaker is unable to process this request as the support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html.'
            },
            output: {
              type: 'structure',
              members: {
                arn: {},
                name: {},
                createdAt: {
                  type: 'timestamp'
                },
                tags: {
                  shape: 'S1o'
                }
              },
              deprecated: true,
              deprecatedMessage: 'AWS RoboMaker is unable to process this request as the support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html.'
            },
            deprecated: true,
            deprecatedMessage: 'AWS RoboMaker is unable to process this request as the support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html.'
          },
          CreateRobot: {
            http: {
              requestUri: '/createRobot'
            },
            input: {
              type: 'structure',
              required: ['name', 'architecture', 'greengrassGroupId'],
              members: {
                name: {},
                architecture: {},
                greengrassGroupId: {},
                tags: {
                  shape: 'S1o'
                }
              },
              deprecated: true,
              deprecatedMessage: 'AWS RoboMaker is unable to process this request as the support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html.'
            },
            output: {
              type: 'structure',
              members: {
                arn: {},
                name: {},
                createdAt: {
                  type: 'timestamp'
                },
                greengrassGroupId: {},
                architecture: {},
                tags: {
                  shape: 'S1o'
                }
              },
              deprecated: true,
              deprecatedMessage: 'AWS RoboMaker is unable to process this request as the support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html.'
            },
            deprecated: true,
            deprecatedMessage: 'AWS RoboMaker is unable to process this request as the support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html.'
          },
          CreateRobotApplication: {
            http: {
              requestUri: '/createRobotApplication'
            },
            input: {
              type: 'structure',
              required: ['name', 'robotSoftwareSuite'],
              members: {
                name: {},
                sources: {
                  shape: 'S2t'
                },
                robotSoftwareSuite: {
                  shape: 'S2v'
                },
                tags: {
                  shape: 'S1o'
                },
                environment: {
                  shape: 'S2y'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                arn: {},
                name: {},
                version: {},
                sources: {
                  shape: 'S31'
                },
                robotSoftwareSuite: {
                  shape: 'S2v'
                },
                lastUpdatedAt: {
                  type: 'timestamp'
                },
                revisionId: {},
                tags: {
                  shape: 'S1o'
                },
                environment: {
                  shape: 'S2y'
                }
              }
            }
          },
          CreateRobotApplicationVersion: {
            http: {
              requestUri: '/createRobotApplicationVersion'
            },
            input: {
              type: 'structure',
              required: ['application'],
              members: {
                application: {},
                currentRevisionId: {},
                s3Etags: {
                  shape: 'S35'
                },
                imageDigest: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                arn: {},
                name: {},
                version: {},
                sources: {
                  shape: 'S31'
                },
                robotSoftwareSuite: {
                  shape: 'S2v'
                },
                lastUpdatedAt: {
                  type: 'timestamp'
                },
                revisionId: {},
                environment: {
                  shape: 'S2y'
                }
              }
            }
          },
          CreateSimulationApplication: {
            http: {
              requestUri: '/createSimulationApplication'
            },
            input: {
              type: 'structure',
              required: ['name', 'simulationSoftwareSuite', 'robotSoftwareSuite'],
              members: {
                name: {},
                sources: {
                  shape: 'S2t'
                },
                simulationSoftwareSuite: {
                  shape: 'S39'
                },
                robotSoftwareSuite: {
                  shape: 'S2v'
                },
                renderingEngine: {
                  shape: 'S3c'
                },
                tags: {
                  shape: 'S1o'
                },
                environment: {
                  shape: 'S2y'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                arn: {},
                name: {},
                version: {},
                sources: {
                  shape: 'S31'
                },
                simulationSoftwareSuite: {
                  shape: 'S39'
                },
                robotSoftwareSuite: {
                  shape: 'S2v'
                },
                renderingEngine: {
                  shape: 'S3c'
                },
                lastUpdatedAt: {
                  type: 'timestamp'
                },
                revisionId: {},
                tags: {
                  shape: 'S1o'
                },
                environment: {
                  shape: 'S2y'
                }
              }
            }
          },
          CreateSimulationApplicationVersion: {
            http: {
              requestUri: '/createSimulationApplicationVersion'
            },
            input: {
              type: 'structure',
              required: ['application'],
              members: {
                application: {},
                currentRevisionId: {},
                s3Etags: {
                  shape: 'S35'
                },
                imageDigest: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                arn: {},
                name: {},
                version: {},
                sources: {
                  shape: 'S31'
                },
                simulationSoftwareSuite: {
                  shape: 'S39'
                },
                robotSoftwareSuite: {
                  shape: 'S2v'
                },
                renderingEngine: {
                  shape: 'S3c'
                },
                lastUpdatedAt: {
                  type: 'timestamp'
                },
                revisionId: {},
                environment: {
                  shape: 'S2y'
                }
              }
            }
          },
          CreateSimulationJob: {
            http: {
              requestUri: '/createSimulationJob'
            },
            input: {
              type: 'structure',
              required: ['maxJobDurationInSeconds', 'iamRole'],
              members: {
                clientRequestToken: {
                  idempotencyToken: true
                },
                outputLocation: {
                  shape: 'Sh'
                },
                loggingConfig: {
                  shape: 'Sk'
                },
                maxJobDurationInSeconds: {
                  type: 'long'
                },
                iamRole: {},
                failureBehavior: {},
                robotApplications: {
                  shape: 'Sp'
                },
                simulationApplications: {
                  shape: 'S1d'
                },
                dataSources: {
                  shape: 'S3j'
                },
                tags: {
                  shape: 'S1o'
                },
                vpcConfig: {
                  shape: 'S3m'
                },
                compute: {
                  shape: 'S3n'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                arn: {},
                status: {},
                lastStartedAt: {
                  type: 'timestamp'
                },
                lastUpdatedAt: {
                  type: 'timestamp'
                },
                failureBehavior: {},
                failureCode: {},
                clientRequestToken: {},
                outputLocation: {
                  shape: 'Sh'
                },
                loggingConfig: {
                  shape: 'Sk'
                },
                maxJobDurationInSeconds: {
                  type: 'long'
                },
                simulationTimeMillis: {
                  type: 'long'
                },
                iamRole: {},
                robotApplications: {
                  shape: 'Sp'
                },
                simulationApplications: {
                  shape: 'S1d'
                },
                dataSources: {
                  shape: 'S1h'
                },
                tags: {
                  shape: 'S1o'
                },
                vpcConfig: {
                  shape: 'S1r'
                },
                compute: {
                  shape: 'S1v'
                }
              }
            }
          },
          CreateWorldExportJob: {
            http: {
              requestUri: '/createWorldExportJob'
            },
            input: {
              type: 'structure',
              required: ['worlds', 'outputLocation', 'iamRole'],
              members: {
                clientRequestToken: {
                  idempotencyToken: true
                },
                worlds: {
                  shape: 'S2'
                },
                outputLocation: {
                  shape: 'Sh'
                },
                iamRole: {},
                tags: {
                  shape: 'S1o'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                arn: {},
                status: {},
                createdAt: {
                  type: 'timestamp'
                },
                failureCode: {},
                clientRequestToken: {},
                outputLocation: {
                  shape: 'Sh'
                },
                iamRole: {},
                tags: {
                  shape: 'S1o'
                }
              }
            }
          },
          CreateWorldGenerationJob: {
            http: {
              requestUri: '/createWorldGenerationJob'
            },
            input: {
              type: 'structure',
              required: ['template', 'worldCount'],
              members: {
                clientRequestToken: {
                  idempotencyToken: true
                },
                template: {},
                worldCount: {
                  shape: 'S3u'
                },
                tags: {
                  shape: 'S1o'
                },
                worldTags: {
                  shape: 'S1o'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                arn: {},
                status: {},
                createdAt: {
                  type: 'timestamp'
                },
                failureCode: {},
                clientRequestToken: {},
                template: {},
                worldCount: {
                  shape: 'S3u'
                },
                tags: {
                  shape: 'S1o'
                },
                worldTags: {
                  shape: 'S1o'
                }
              }
            }
          },
          CreateWorldTemplate: {
            http: {
              requestUri: '/createWorldTemplate'
            },
            input: {
              type: 'structure',
              members: {
                clientRequestToken: {},
                name: {},
                templateBody: {},
                templateLocation: {
                  shape: 'S43'
                },
                tags: {
                  shape: 'S1o'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                arn: {},
                clientRequestToken: {},
                createdAt: {
                  type: 'timestamp'
                },
                name: {},
                tags: {
                  shape: 'S1o'
                }
              }
            }
          },
          DeleteFleet: {
            http: {
              requestUri: '/deleteFleet'
            },
            input: {
              type: 'structure',
              required: ['fleet'],
              members: {
                fleet: {}
              },
              deprecated: true,
              deprecatedMessage: 'Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html.'
            },
            output: {
              type: 'structure',
              members: {},
              deprecated: true,
              deprecatedMessage: 'Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html.'
            },
            deprecated: true,
            deprecatedMessage: 'Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html.'
          },
          DeleteRobot: {
            http: {
              requestUri: '/deleteRobot'
            },
            input: {
              type: 'structure',
              required: ['robot'],
              members: {
                robot: {}
              },
              deprecated: true,
              deprecatedMessage: 'Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html.'
            },
            output: {
              type: 'structure',
              members: {},
              deprecated: true,
              deprecatedMessage: 'Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html.'
            },
            deprecated: true,
            deprecatedMessage: 'Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html.'
          },
          DeleteRobotApplication: {
            http: {
              requestUri: '/deleteRobotApplication'
            },
            input: {
              type: 'structure',
              required: ['application'],
              members: {
                application: {},
                applicationVersion: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteSimulationApplication: {
            http: {
              requestUri: '/deleteSimulationApplication'
            },
            input: {
              type: 'structure',
              required: ['application'],
              members: {
                application: {},
                applicationVersion: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteWorldTemplate: {
            http: {
              requestUri: '/deleteWorldTemplate'
            },
            input: {
              type: 'structure',
              required: ['template'],
              members: {
                template: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeregisterRobot: {
            http: {
              requestUri: '/deregisterRobot'
            },
            input: {
              type: 'structure',
              required: ['fleet', 'robot'],
              members: {
                fleet: {},
                robot: {}
              },
              deprecated: true,
              deprecatedMessage: 'Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html.'
            },
            output: {
              type: 'structure',
              members: {
                fleet: {},
                robot: {}
              },
              deprecated: true,
              deprecatedMessage: 'Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html.'
            },
            deprecated: true,
            deprecatedMessage: 'Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html.'
          },
          DescribeDeploymentJob: {
            http: {
              requestUri: '/describeDeploymentJob'
            },
            input: {
              type: 'structure',
              required: ['job'],
              members: {
                job: {}
              },
              deprecated: true,
              deprecatedMessage: 'Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html.'
            },
            output: {
              type: 'structure',
              members: {
                arn: {},
                fleet: {},
                status: {},
                deploymentConfig: {
                  shape: 'S2a'
                },
                deploymentApplicationConfigs: {
                  shape: 'S2e'
                },
                failureReason: {},
                failureCode: {},
                createdAt: {
                  type: 'timestamp'
                },
                robotDeploymentSummary: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      arn: {},
                      deploymentStartTime: {
                        type: 'timestamp'
                      },
                      deploymentFinishTime: {
                        type: 'timestamp'
                      },
                      status: {},
                      progressDetail: {
                        type: 'structure',
                        members: {
                          currentProgress: {},
                          percentDone: {
                            type: 'float'
                          },
                          estimatedTimeRemainingSeconds: {
                            type: 'integer'
                          },
                          targetResource: {}
                        }
                      },
                      failureReason: {},
                      failureCode: {}
                    }
                  }
                },
                tags: {
                  shape: 'S1o'
                }
              },
              deprecated: true,
              deprecatedMessage: 'Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html.'
            },
            deprecated: true,
            deprecatedMessage: 'Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html.'
          },
          DescribeFleet: {
            http: {
              requestUri: '/describeFleet'
            },
            input: {
              type: 'structure',
              required: ['fleet'],
              members: {
                fleet: {}
              },
              deprecated: true,
              deprecatedMessage: 'Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html.'
            },
            output: {
              type: 'structure',
              members: {
                name: {},
                arn: {},
                robots: {
                  shape: 'S4s'
                },
                createdAt: {
                  type: 'timestamp'
                },
                lastDeploymentStatus: {},
                lastDeploymentJob: {},
                lastDeploymentTime: {
                  type: 'timestamp'
                },
                tags: {
                  shape: 'S1o'
                }
              },
              deprecated: true,
              deprecatedMessage: 'Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html.'
            },
            deprecated: true,
            deprecatedMessage: 'Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html.'
          },
          DescribeRobot: {
            http: {
              requestUri: '/describeRobot'
            },
            input: {
              type: 'structure',
              required: ['robot'],
              members: {
                robot: {}
              },
              deprecated: true,
              deprecatedMessage: 'Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html.'
            },
            output: {
              type: 'structure',
              members: {
                arn: {},
                name: {},
                fleetArn: {},
                status: {},
                greengrassGroupId: {},
                createdAt: {
                  type: 'timestamp'
                },
                architecture: {},
                lastDeploymentJob: {},
                lastDeploymentTime: {
                  type: 'timestamp'
                },
                tags: {
                  shape: 'S1o'
                }
              },
              deprecated: true,
              deprecatedMessage: 'Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html.'
            },
            deprecated: true,
            deprecatedMessage: 'Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html.'
          },
          DescribeRobotApplication: {
            http: {
              requestUri: '/describeRobotApplication'
            },
            input: {
              type: 'structure',
              required: ['application'],
              members: {
                application: {},
                applicationVersion: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                arn: {},
                name: {},
                version: {},
                sources: {
                  shape: 'S31'
                },
                robotSoftwareSuite: {
                  shape: 'S2v'
                },
                revisionId: {},
                lastUpdatedAt: {
                  type: 'timestamp'
                },
                tags: {
                  shape: 'S1o'
                },
                environment: {
                  shape: 'S2y'
                },
                imageDigest: {}
              }
            }
          },
          DescribeSimulationApplication: {
            http: {
              requestUri: '/describeSimulationApplication'
            },
            input: {
              type: 'structure',
              required: ['application'],
              members: {
                application: {},
                applicationVersion: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                arn: {},
                name: {},
                version: {},
                sources: {
                  shape: 'S31'
                },
                simulationSoftwareSuite: {
                  shape: 'S39'
                },
                robotSoftwareSuite: {
                  shape: 'S2v'
                },
                renderingEngine: {
                  shape: 'S3c'
                },
                revisionId: {},
                lastUpdatedAt: {
                  type: 'timestamp'
                },
                tags: {
                  shape: 'S1o'
                },
                environment: {
                  shape: 'S2y'
                },
                imageDigest: {}
              }
            }
          },
          DescribeSimulationJob: {
            http: {
              requestUri: '/describeSimulationJob'
            },
            input: {
              type: 'structure',
              required: ['job'],
              members: {
                job: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                arn: {},
                name: {},
                status: {},
                lastStartedAt: {
                  type: 'timestamp'
                },
                lastUpdatedAt: {
                  type: 'timestamp'
                },
                failureBehavior: {},
                failureCode: {},
                failureReason: {},
                clientRequestToken: {},
                outputLocation: {
                  shape: 'Sh'
                },
                loggingConfig: {
                  shape: 'Sk'
                },
                maxJobDurationInSeconds: {
                  type: 'long'
                },
                simulationTimeMillis: {
                  type: 'long'
                },
                iamRole: {},
                robotApplications: {
                  shape: 'Sp'
                },
                simulationApplications: {
                  shape: 'S1d'
                },
                dataSources: {
                  shape: 'S1h'
                },
                tags: {
                  shape: 'S1o'
                },
                vpcConfig: {
                  shape: 'S1r'
                },
                networkInterface: {
                  shape: 'S1u'
                },
                compute: {
                  shape: 'S1v'
                }
              }
            }
          },
          DescribeSimulationJobBatch: {
            http: {
              requestUri: '/describeSimulationJobBatch'
            },
            input: {
              type: 'structure',
              required: ['batch'],
              members: {
                batch: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                arn: {},
                status: {},
                lastUpdatedAt: {
                  type: 'timestamp'
                },
                createdAt: {
                  type: 'timestamp'
                },
                clientRequestToken: {},
                batchPolicy: {
                  shape: 'S55'
                },
                failureCode: {},
                failureReason: {},
                failedRequests: {
                  shape: 'S59'
                },
                pendingRequests: {
                  shape: 'S5d'
                },
                createdRequests: {
                  shape: 'S5e'
                },
                tags: {
                  shape: 'S1o'
                }
              }
            }
          },
          DescribeWorld: {
            http: {
              requestUri: '/describeWorld'
            },
            input: {
              type: 'structure',
              required: ['world'],
              members: {
                world: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                arn: {},
                generationJob: {},
                template: {},
                createdAt: {
                  type: 'timestamp'
                },
                tags: {
                  shape: 'S1o'
                },
                worldDescriptionBody: {}
              }
            }
          },
          DescribeWorldExportJob: {
            http: {
              requestUri: '/describeWorldExportJob'
            },
            input: {
              type: 'structure',
              required: ['job'],
              members: {
                job: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                arn: {},
                status: {},
                createdAt: {
                  type: 'timestamp'
                },
                failureCode: {},
                failureReason: {},
                clientRequestToken: {},
                worlds: {
                  shape: 'S2'
                },
                outputLocation: {
                  shape: 'Sh'
                },
                iamRole: {},
                tags: {
                  shape: 'S1o'
                }
              }
            }
          },
          DescribeWorldGenerationJob: {
            http: {
              requestUri: '/describeWorldGenerationJob'
            },
            input: {
              type: 'structure',
              required: ['job'],
              members: {
                job: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                arn: {},
                status: {},
                createdAt: {
                  type: 'timestamp'
                },
                failureCode: {},
                failureReason: {},
                clientRequestToken: {},
                template: {},
                worldCount: {
                  shape: 'S3u'
                },
                finishedWorldsSummary: {
                  type: 'structure',
                  members: {
                    finishedCount: {
                      type: 'integer'
                    },
                    succeededWorlds: {
                      shape: 'S2'
                    },
                    failureSummary: {
                      type: 'structure',
                      members: {
                        totalFailureCount: {
                          type: 'integer'
                        },
                        failures: {
                          type: 'list',
                          member: {
                            type: 'structure',
                            members: {
                              failureCode: {},
                              sampleFailureReason: {},
                              failureCount: {
                                type: 'integer'
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                tags: {
                  shape: 'S1o'
                },
                worldTags: {
                  shape: 'S1o'
                }
              }
            }
          },
          DescribeWorldTemplate: {
            http: {
              requestUri: '/describeWorldTemplate'
            },
            input: {
              type: 'structure',
              required: ['template'],
              members: {
                template: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                arn: {},
                clientRequestToken: {},
                name: {},
                createdAt: {
                  type: 'timestamp'
                },
                lastUpdatedAt: {
                  type: 'timestamp'
                },
                tags: {
                  shape: 'S1o'
                },
                version: {}
              }
            }
          },
          GetWorldTemplateBody: {
            http: {
              requestUri: '/getWorldTemplateBody'
            },
            input: {
              type: 'structure',
              members: {
                template: {},
                generationJob: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                templateBody: {}
              }
            }
          },
          ListDeploymentJobs: {
            http: {
              requestUri: '/listDeploymentJobs'
            },
            input: {
              type: 'structure',
              members: {
                filters: {
                  shape: 'S5z'
                },
                nextToken: {},
                maxResults: {
                  type: 'integer'
                }
              },
              deprecated: true,
              deprecatedMessage: 'Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html.'
            },
            output: {
              type: 'structure',
              members: {
                deploymentJobs: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      arn: {},
                      fleet: {},
                      status: {},
                      deploymentApplicationConfigs: {
                        shape: 'S2e'
                      },
                      deploymentConfig: {
                        shape: 'S2a'
                      },
                      failureReason: {},
                      failureCode: {},
                      createdAt: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                nextToken: {}
              },
              deprecated: true,
              deprecatedMessage: 'Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html.'
            },
            deprecated: true,
            deprecatedMessage: 'Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html.'
          },
          ListFleets: {
            http: {
              requestUri: '/listFleets'
            },
            input: {
              type: 'structure',
              members: {
                nextToken: {},
                maxResults: {
                  type: 'integer'
                },
                filters: {
                  shape: 'S5z'
                }
              },
              deprecated: true,
              deprecatedMessage: 'Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html.'
            },
            output: {
              type: 'structure',
              members: {
                fleetDetails: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      name: {},
                      arn: {},
                      createdAt: {
                        type: 'timestamp'
                      },
                      lastDeploymentStatus: {},
                      lastDeploymentJob: {},
                      lastDeploymentTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                nextToken: {}
              },
              deprecated: true,
              deprecatedMessage: 'Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html.'
            },
            deprecated: true,
            deprecatedMessage: 'Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html.'
          },
          ListRobotApplications: {
            http: {
              requestUri: '/listRobotApplications'
            },
            input: {
              type: 'structure',
              members: {
                versionQualifier: {},
                nextToken: {},
                maxResults: {
                  type: 'integer'
                },
                filters: {
                  shape: 'S5z'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                robotApplicationSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      name: {},
                      arn: {},
                      version: {},
                      lastUpdatedAt: {
                        type: 'timestamp'
                      },
                      robotSoftwareSuite: {
                        shape: 'S2v'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListRobots: {
            http: {
              requestUri: '/listRobots'
            },
            input: {
              type: 'structure',
              members: {
                nextToken: {},
                maxResults: {
                  type: 'integer'
                },
                filters: {
                  shape: 'S5z'
                }
              },
              deprecated: true,
              deprecatedMessage: 'Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html.'
            },
            output: {
              type: 'structure',
              members: {
                robots: {
                  shape: 'S4s'
                },
                nextToken: {}
              },
              deprecated: true,
              deprecatedMessage: 'Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html.'
            },
            deprecated: true,
            deprecatedMessage: 'Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html.'
          },
          ListSimulationApplications: {
            http: {
              requestUri: '/listSimulationApplications'
            },
            input: {
              type: 'structure',
              members: {
                versionQualifier: {},
                nextToken: {},
                maxResults: {
                  type: 'integer'
                },
                filters: {
                  shape: 'S5z'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                simulationApplicationSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      name: {},
                      arn: {},
                      version: {},
                      lastUpdatedAt: {
                        type: 'timestamp'
                      },
                      robotSoftwareSuite: {
                        shape: 'S2v'
                      },
                      simulationSoftwareSuite: {
                        shape: 'S39'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListSimulationJobBatches: {
            http: {
              requestUri: '/listSimulationJobBatches'
            },
            input: {
              type: 'structure',
              members: {
                nextToken: {},
                maxResults: {
                  type: 'integer'
                },
                filters: {
                  shape: 'S5z'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                simulationJobBatchSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      arn: {},
                      lastUpdatedAt: {
                        type: 'timestamp'
                      },
                      createdAt: {
                        type: 'timestamp'
                      },
                      status: {},
                      failedRequestCount: {
                        type: 'integer'
                      },
                      pendingRequestCount: {
                        type: 'integer'
                      },
                      createdRequestCount: {
                        type: 'integer'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListSimulationJobs: {
            http: {
              requestUri: '/listSimulationJobs'
            },
            input: {
              type: 'structure',
              members: {
                nextToken: {},
                maxResults: {
                  type: 'integer'
                },
                filters: {
                  shape: 'S5z'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['simulationJobSummaries'],
              members: {
                simulationJobSummaries: {
                  shape: 'S5e'
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
                  shape: 'S1o'
                }
              }
            }
          },
          ListWorldExportJobs: {
            http: {
              requestUri: '/listWorldExportJobs'
            },
            input: {
              type: 'structure',
              members: {
                nextToken: {},
                maxResults: {
                  type: 'integer'
                },
                filters: {
                  shape: 'S5z'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['worldExportJobSummaries'],
              members: {
                worldExportJobSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      arn: {},
                      status: {},
                      createdAt: {
                        type: 'timestamp'
                      },
                      worlds: {
                        shape: 'S2'
                      },
                      outputLocation: {
                        shape: 'Sh'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListWorldGenerationJobs: {
            http: {
              requestUri: '/listWorldGenerationJobs'
            },
            input: {
              type: 'structure',
              members: {
                nextToken: {},
                maxResults: {
                  type: 'integer'
                },
                filters: {
                  shape: 'S5z'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['worldGenerationJobSummaries'],
              members: {
                worldGenerationJobSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      arn: {},
                      template: {},
                      createdAt: {
                        type: 'timestamp'
                      },
                      status: {},
                      worldCount: {
                        shape: 'S3u'
                      },
                      succeededWorldCount: {
                        type: 'integer'
                      },
                      failedWorldCount: {
                        type: 'integer'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListWorldTemplates: {
            http: {
              requestUri: '/listWorldTemplates'
            },
            input: {
              type: 'structure',
              members: {
                nextToken: {},
                maxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                templateSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      arn: {},
                      createdAt: {
                        type: 'timestamp'
                      },
                      lastUpdatedAt: {
                        type: 'timestamp'
                      },
                      name: {},
                      version: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListWorlds: {
            http: {
              requestUri: '/listWorlds'
            },
            input: {
              type: 'structure',
              members: {
                nextToken: {},
                maxResults: {
                  type: 'integer'
                },
                filters: {
                  shape: 'S5z'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                worldSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      arn: {},
                      createdAt: {
                        type: 'timestamp'
                      },
                      generationJob: {},
                      template: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          RegisterRobot: {
            http: {
              requestUri: '/registerRobot'
            },
            input: {
              type: 'structure',
              required: ['fleet', 'robot'],
              members: {
                fleet: {},
                robot: {}
              },
              deprecated: true,
              deprecatedMessage: 'AWS RoboMaker is unable to process this request as the support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html.'
            },
            output: {
              type: 'structure',
              members: {
                fleet: {},
                robot: {}
              },
              deprecated: true,
              deprecatedMessage: 'AWS RoboMaker is unable to process this request as the support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html.'
            },
            deprecated: true,
            deprecatedMessage: 'AWS RoboMaker is unable to process this request as the support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html.'
          },
          RestartSimulationJob: {
            http: {
              requestUri: '/restartSimulationJob'
            },
            input: {
              type: 'structure',
              required: ['job'],
              members: {
                job: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          StartSimulationJobBatch: {
            http: {
              requestUri: '/startSimulationJobBatch'
            },
            input: {
              type: 'structure',
              required: ['createSimulationJobRequests'],
              members: {
                clientRequestToken: {
                  idempotencyToken: true
                },
                batchPolicy: {
                  shape: 'S55'
                },
                createSimulationJobRequests: {
                  shape: 'S5d'
                },
                tags: {
                  shape: 'S1o'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                arn: {},
                status: {},
                createdAt: {
                  type: 'timestamp'
                },
                clientRequestToken: {},
                batchPolicy: {
                  shape: 'S55'
                },
                failureCode: {},
                failureReason: {},
                failedRequests: {
                  shape: 'S59'
                },
                pendingRequests: {
                  shape: 'S5d'
                },
                createdRequests: {
                  shape: 'S5e'
                },
                tags: {
                  shape: 'S1o'
                }
              }
            }
          },
          SyncDeploymentJob: {
            http: {
              requestUri: '/syncDeploymentJob'
            },
            input: {
              type: 'structure',
              required: ['clientRequestToken', 'fleet'],
              members: {
                clientRequestToken: {
                  idempotencyToken: true
                },
                fleet: {}
              },
              deprecated: true,
              deprecatedMessage: 'Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html.'
            },
            output: {
              type: 'structure',
              members: {
                arn: {},
                fleet: {},
                status: {},
                deploymentConfig: {
                  shape: 'S2a'
                },
                deploymentApplicationConfigs: {
                  shape: 'S2e'
                },
                failureReason: {},
                failureCode: {},
                createdAt: {
                  type: 'timestamp'
                }
              },
              deprecated: true,
              deprecatedMessage: 'Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html.'
            },
            deprecated: true,
            deprecatedMessage: 'Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html.'
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
                  shape: 'S1o'
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
          UpdateRobotApplication: {
            http: {
              requestUri: '/updateRobotApplication'
            },
            input: {
              type: 'structure',
              required: ['application', 'robotSoftwareSuite'],
              members: {
                application: {},
                sources: {
                  shape: 'S2t'
                },
                robotSoftwareSuite: {
                  shape: 'S2v'
                },
                currentRevisionId: {},
                environment: {
                  shape: 'S2y'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                arn: {},
                name: {},
                version: {},
                sources: {
                  shape: 'S31'
                },
                robotSoftwareSuite: {
                  shape: 'S2v'
                },
                lastUpdatedAt: {
                  type: 'timestamp'
                },
                revisionId: {},
                environment: {
                  shape: 'S2y'
                }
              }
            }
          },
          UpdateSimulationApplication: {
            http: {
              requestUri: '/updateSimulationApplication'
            },
            input: {
              type: 'structure',
              required: ['application', 'simulationSoftwareSuite', 'robotSoftwareSuite'],
              members: {
                application: {},
                sources: {
                  shape: 'S2t'
                },
                simulationSoftwareSuite: {
                  shape: 'S39'
                },
                robotSoftwareSuite: {
                  shape: 'S2v'
                },
                renderingEngine: {
                  shape: 'S3c'
                },
                currentRevisionId: {},
                environment: {
                  shape: 'S2y'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                arn: {},
                name: {},
                version: {},
                sources: {
                  shape: 'S31'
                },
                simulationSoftwareSuite: {
                  shape: 'S39'
                },
                robotSoftwareSuite: {
                  shape: 'S2v'
                },
                renderingEngine: {
                  shape: 'S3c'
                },
                lastUpdatedAt: {
                  type: 'timestamp'
                },
                revisionId: {},
                environment: {
                  shape: 'S2y'
                }
              }
            }
          },
          UpdateWorldTemplate: {
            http: {
              requestUri: '/updateWorldTemplate'
            },
            input: {
              type: 'structure',
              required: ['template'],
              members: {
                template: {},
                name: {},
                templateBody: {},
                templateLocation: {
                  shape: 'S43'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                arn: {},
                name: {},
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
            type: 'list',
            member: {}
          },
          Sh: {
            type: 'structure',
            members: {
              s3Bucket: {},
              s3Prefix: {}
            }
          },
          Sk: {
            type: 'structure',
            members: {
              recordAllRosTopics: {
                deprecated: true,
                deprecatedMessage: 'AWS RoboMaker is ending support for ROS software suite. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/software-support-policy.html.',
                type: 'boolean'
              }
            }
          },
          Sp: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['application', 'launchConfig'],
              members: {
                application: {},
                applicationVersion: {},
                launchConfig: {
                  shape: 'Ss'
                },
                uploadConfigurations: {
                  shape: 'S15'
                },
                useDefaultUploadConfigurations: {
                  deprecated: true,
                  deprecatedMessage: 'AWS RoboMaker is ending support for ROS software suite. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/software-support-policy.html.',
                  type: 'boolean'
                },
                tools: {
                  shape: 'S19'
                },
                useDefaultTools: {
                  deprecated: true,
                  deprecatedMessage: 'AWS RoboMaker is ending support for ROS software suite. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/software-support-policy.html.',
                  type: 'boolean'
                }
              }
            }
          },
          Ss: {
            type: 'structure',
            members: {
              packageName: {},
              launchFile: {},
              environmentVariables: {
                shape: 'Su'
              },
              portForwardingConfig: {
                type: 'structure',
                members: {
                  portMappings: {
                    type: 'list',
                    member: {
                      type: 'structure',
                      required: ['jobPort', 'applicationPort'],
                      members: {
                        jobPort: {
                          type: 'integer'
                        },
                        applicationPort: {
                          type: 'integer'
                        },
                        enableOnPublicIp: {
                          type: 'boolean'
                        }
                      }
                    }
                  }
                }
              },
              streamUI: {
                type: 'boolean'
              },
              command: {
                type: 'list',
                member: {}
              }
            }
          },
          Su: {
            type: 'map',
            key: {},
            value: {}
          },
          S15: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['name', 'path', 'uploadBehavior'],
              members: {
                name: {},
                path: {},
                uploadBehavior: {}
              }
            }
          },
          S19: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['name', 'command'],
              members: {
                streamUI: {
                  type: 'boolean'
                },
                name: {},
                command: {},
                streamOutputToCloudWatch: {
                  type: 'boolean'
                },
                exitBehavior: {}
              }
            }
          },
          S1d: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['application', 'launchConfig'],
              members: {
                application: {},
                applicationVersion: {},
                launchConfig: {
                  shape: 'Ss'
                },
                uploadConfigurations: {
                  shape: 'S15'
                },
                worldConfigs: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      world: {}
                    }
                  }
                },
                useDefaultUploadConfigurations: {
                  deprecated: true,
                  deprecatedMessage: 'AWS RoboMaker is ending support for ROS software suite. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/software-support-policy.html.',
                  type: 'boolean'
                },
                tools: {
                  shape: 'S19'
                },
                useDefaultTools: {
                  deprecated: true,
                  deprecatedMessage: 'AWS RoboMaker is ending support for ROS software suite. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/software-support-policy.html.',
                  type: 'boolean'
                }
              }
            }
          },
          S1h: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                name: {},
                s3Bucket: {},
                s3Keys: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      s3Key: {},
                      etag: {}
                    }
                  }
                },
                type: {},
                destination: {}
              }
            }
          },
          S1o: {
            type: 'map',
            key: {},
            value: {}
          },
          S1r: {
            type: 'structure',
            members: {
              subnets: {
                shape: 'S1s'
              },
              securityGroups: {
                shape: 'S1t'
              },
              vpcId: {},
              assignPublicIp: {
                type: 'boolean'
              }
            }
          },
          S1s: {
            type: 'list',
            member: {}
          },
          S1t: {
            type: 'list',
            member: {}
          },
          S1u: {
            type: 'structure',
            members: {
              networkInterfaceId: {},
              privateIpAddress: {},
              publicIpAddress: {}
            }
          },
          S1v: {
            type: 'structure',
            members: {
              simulationUnitLimit: {
                type: 'integer'
              },
              computeType: {},
              gpuUnitLimit: {
                type: 'integer'
              }
            }
          },
          S2a: {
            type: 'structure',
            members: {
              concurrentDeploymentPercentage: {
                type: 'integer'
              },
              failureThresholdPercentage: {
                type: 'integer'
              },
              robotDeploymentTimeoutInSeconds: {
                type: 'long'
              },
              downloadConditionFile: {
                type: 'structure',
                required: ['bucket', 'key'],
                members: {
                  bucket: {},
                  key: {},
                  etag: {}
                }
              }
            }
          },
          S2e: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['application', 'applicationVersion', 'launchConfig'],
              members: {
                application: {},
                applicationVersion: {},
                launchConfig: {
                  type: 'structure',
                  required: ['packageName', 'launchFile'],
                  members: {
                    packageName: {},
                    preLaunchFile: {},
                    launchFile: {},
                    postLaunchFile: {},
                    environmentVariables: {
                      shape: 'Su'
                    }
                  }
                }
              }
            }
          },
          S2t: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                s3Bucket: {},
                s3Key: {},
                architecture: {}
              }
            }
          },
          S2v: {
            type: 'structure',
            members: {
              name: {},
              version: {}
            }
          },
          S2y: {
            type: 'structure',
            members: {
              uri: {}
            }
          },
          S31: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                s3Bucket: {},
                s3Key: {},
                etag: {},
                architecture: {}
              }
            }
          },
          S35: {
            type: 'list',
            member: {}
          },
          S39: {
            type: 'structure',
            members: {
              name: {},
              version: {}
            }
          },
          S3c: {
            type: 'structure',
            members: {
              name: {},
              version: {}
            }
          },
          S3j: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['name', 's3Bucket', 's3Keys'],
              members: {
                name: {},
                s3Bucket: {},
                s3Keys: {
                  type: 'list',
                  member: {}
                },
                type: {},
                destination: {}
              }
            }
          },
          S3m: {
            type: 'structure',
            required: ['subnets'],
            members: {
              subnets: {
                shape: 'S1s'
              },
              securityGroups: {
                shape: 'S1t'
              },
              assignPublicIp: {
                type: 'boolean'
              }
            }
          },
          S3n: {
            type: 'structure',
            members: {
              simulationUnitLimit: {
                type: 'integer'
              },
              computeType: {},
              gpuUnitLimit: {
                type: 'integer'
              }
            }
          },
          S3u: {
            type: 'structure',
            members: {
              floorplanCount: {
                type: 'integer'
              },
              interiorCountPerFloorplan: {
                type: 'integer'
              }
            }
          },
          S43: {
            type: 'structure',
            required: ['s3Bucket', 's3Key'],
            members: {
              s3Bucket: {},
              s3Key: {}
            }
          },
          S4s: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                arn: {},
                name: {},
                fleetArn: {},
                status: {},
                greenGrassGroupId: {},
                createdAt: {
                  type: 'timestamp'
                },
                architecture: {},
                lastDeploymentJob: {},
                lastDeploymentTime: {
                  type: 'timestamp'
                }
              }
            }
          },
          S55: {
            type: 'structure',
            members: {
              timeoutInSeconds: {
                type: 'long'
              },
              maxConcurrency: {
                type: 'integer'
              }
            }
          },
          S59: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                request: {
                  shape: 'S5b'
                },
                failureReason: {},
                failureCode: {},
                failedAt: {
                  type: 'timestamp'
                }
              }
            }
          },
          S5b: {
            type: 'structure',
            required: ['maxJobDurationInSeconds'],
            members: {
              outputLocation: {
                shape: 'Sh'
              },
              loggingConfig: {
                shape: 'Sk'
              },
              maxJobDurationInSeconds: {
                type: 'long'
              },
              iamRole: {},
              failureBehavior: {},
              useDefaultApplications: {
                type: 'boolean'
              },
              robotApplications: {
                shape: 'Sp'
              },
              simulationApplications: {
                shape: 'S1d'
              },
              dataSources: {
                shape: 'S3j'
              },
              vpcConfig: {
                shape: 'S3m'
              },
              compute: {
                shape: 'S3n'
              },
              tags: {
                shape: 'S1o'
              }
            }
          },
          S5d: {
            type: 'list',
            member: {
              shape: 'S5b'
            }
          },
          S5e: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                arn: {},
                lastUpdatedAt: {
                  type: 'timestamp'
                },
                name: {},
                status: {},
                simulationApplicationNames: {
                  type: 'list',
                  member: {}
                },
                robotApplicationNames: {
                  type: 'list',
                  member: {}
                },
                dataSourceNames: {
                  type: 'list',
                  member: {}
                },
                computeType: {}
              }
            }
          },
          S5z: {
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
          }
        }
      });
    }
  };
});
//# sourceMappingURL=f1f37a67af8b0b918d52dbd2e7d71955e5d5bd20.js.map