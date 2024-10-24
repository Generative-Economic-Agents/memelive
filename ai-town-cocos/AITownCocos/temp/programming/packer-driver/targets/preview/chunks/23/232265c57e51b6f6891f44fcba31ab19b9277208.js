System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2015-06-23',
          endpointPrefix: 'devicefarm',
          jsonVersion: '1.1',
          protocol: 'json',
          serviceFullName: 'AWS Device Farm',
          serviceId: 'Device Farm',
          signatureVersion: 'v4',
          targetPrefix: 'DeviceFarm_20150623',
          uid: 'devicefarm-2015-06-23'
        },
        operations: {
          CreateDevicePool: {
            input: {
              type: 'structure',
              required: ['projectArn', 'name', 'rules'],
              members: {
                projectArn: {},
                name: {},
                description: {},
                rules: {
                  shape: 'S5'
                },
                maxDevices: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                devicePool: {
                  shape: 'Sc'
                }
              }
            }
          },
          CreateInstanceProfile: {
            input: {
              type: 'structure',
              required: ['name'],
              members: {
                name: {},
                description: {},
                packageCleanup: {
                  type: 'boolean'
                },
                excludeAppPackagesFromCleanup: {
                  shape: 'Sg'
                },
                rebootAfterUse: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                instanceProfile: {
                  shape: 'Si'
                }
              }
            }
          },
          CreateNetworkProfile: {
            input: {
              type: 'structure',
              required: ['projectArn', 'name'],
              members: {
                projectArn: {},
                name: {},
                description: {},
                type: {},
                uplinkBandwidthBits: {
                  type: 'long'
                },
                downlinkBandwidthBits: {
                  type: 'long'
                },
                uplinkDelayMs: {
                  type: 'long'
                },
                downlinkDelayMs: {
                  type: 'long'
                },
                uplinkJitterMs: {
                  type: 'long'
                },
                downlinkJitterMs: {
                  type: 'long'
                },
                uplinkLossPercent: {
                  type: 'integer'
                },
                downlinkLossPercent: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                networkProfile: {
                  shape: 'So'
                }
              }
            }
          },
          CreateProject: {
            input: {
              type: 'structure',
              required: ['name'],
              members: {
                name: {},
                defaultJobTimeoutMinutes: {
                  type: 'integer'
                },
                vpcConfig: {
                  shape: 'Sr'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                project: {
                  shape: 'Sy'
                }
              }
            }
          },
          CreateRemoteAccessSession: {
            input: {
              type: 'structure',
              required: ['projectArn', 'deviceArn'],
              members: {
                projectArn: {},
                deviceArn: {},
                instanceArn: {},
                sshPublicKey: {},
                remoteDebugEnabled: {
                  type: 'boolean'
                },
                remoteRecordEnabled: {
                  type: 'boolean'
                },
                remoteRecordAppArn: {},
                name: {},
                clientId: {},
                configuration: {
                  type: 'structure',
                  members: {
                    billingMethod: {},
                    vpceConfigurationArns: {
                      shape: 'S15'
                    }
                  }
                },
                interactionMode: {},
                skipAppResign: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                remoteAccessSession: {
                  shape: 'S18'
                }
              }
            }
          },
          CreateTestGridProject: {
            input: {
              type: 'structure',
              required: ['name'],
              members: {
                name: {},
                description: {},
                vpcConfig: {
                  shape: 'S1s'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                testGridProject: {
                  shape: 'S1w'
                }
              }
            }
          },
          CreateTestGridUrl: {
            input: {
              type: 'structure',
              required: ['projectArn', 'expiresInSeconds'],
              members: {
                projectArn: {},
                expiresInSeconds: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                url: {
                  shape: 'S21'
                },
                expires: {
                  type: 'timestamp'
                }
              }
            }
          },
          CreateUpload: {
            input: {
              type: 'structure',
              required: ['projectArn', 'name', 'type'],
              members: {
                projectArn: {},
                name: {},
                type: {},
                contentType: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                upload: {
                  shape: 'S26'
                }
              }
            }
          },
          CreateVPCEConfiguration: {
            input: {
              type: 'structure',
              required: ['vpceConfigurationName', 'vpceServiceName', 'serviceDnsName'],
              members: {
                vpceConfigurationName: {},
                vpceServiceName: {},
                serviceDnsName: {},
                vpceConfigurationDescription: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                vpceConfiguration: {
                  shape: 'S2h'
                }
              }
            }
          },
          DeleteDevicePool: {
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
          DeleteInstanceProfile: {
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
          DeleteNetworkProfile: {
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
          DeleteRemoteAccessSession: {
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
          DeleteRun: {
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
          DeleteTestGridProject: {
            input: {
              type: 'structure',
              required: ['projectArn'],
              members: {
                projectArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteUpload: {
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
          DeleteVPCEConfiguration: {
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
          GetAccountSettings: {
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {
                accountSettings: {
                  type: 'structure',
                  members: {
                    awsAccountNumber: {},
                    unmeteredDevices: {
                      shape: 'S34'
                    },
                    unmeteredRemoteAccessDevices: {
                      shape: 'S34'
                    },
                    maxJobTimeoutMinutes: {
                      type: 'integer'
                    },
                    trialMinutes: {
                      type: 'structure',
                      members: {
                        total: {
                          type: 'double'
                        },
                        remaining: {
                          type: 'double'
                        }
                      }
                    },
                    maxSlots: {
                      type: 'map',
                      key: {},
                      value: {
                        type: 'integer'
                      }
                    },
                    defaultJobTimeoutMinutes: {
                      type: 'integer'
                    },
                    skipAppResign: {
                      type: 'boolean'
                    }
                  }
                }
              }
            }
          },
          GetDevice: {
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
                device: {
                  shape: 'S1b'
                }
              }
            }
          },
          GetDeviceInstance: {
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
                deviceInstance: {
                  shape: 'S1i'
                }
              }
            }
          },
          GetDevicePool: {
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
                devicePool: {
                  shape: 'Sc'
                }
              }
            }
          },
          GetDevicePoolCompatibility: {
            input: {
              type: 'structure',
              required: ['devicePoolArn'],
              members: {
                devicePoolArn: {},
                appArn: {},
                testType: {},
                test: {
                  shape: 'S3f'
                },
                configuration: {
                  shape: 'S3i'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                compatibleDevices: {
                  shape: 'S3q'
                },
                incompatibleDevices: {
                  shape: 'S3q'
                }
              }
            }
          },
          GetInstanceProfile: {
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
                instanceProfile: {
                  shape: 'Si'
                }
              }
            }
          },
          GetJob: {
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
                job: {
                  shape: 'S3y'
                }
              }
            }
          },
          GetNetworkProfile: {
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
                networkProfile: {
                  shape: 'So'
                }
              }
            }
          },
          GetOfferingStatus: {
            input: {
              type: 'structure',
              members: {
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                current: {
                  shape: 'S46'
                },
                nextPeriod: {
                  shape: 'S46'
                },
                nextToken: {}
              }
            }
          },
          GetProject: {
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
                project: {
                  shape: 'Sy'
                }
              }
            }
          },
          GetRemoteAccessSession: {
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
                remoteAccessSession: {
                  shape: 'S18'
                }
              }
            }
          },
          GetRun: {
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
                run: {
                  shape: 'S4n'
                }
              }
            }
          },
          GetSuite: {
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
                suite: {
                  shape: 'S4w'
                }
              }
            }
          },
          GetTest: {
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
                test: {
                  shape: 'S4z'
                }
              }
            }
          },
          GetTestGridProject: {
            input: {
              type: 'structure',
              required: ['projectArn'],
              members: {
                projectArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                testGridProject: {
                  shape: 'S1w'
                }
              }
            }
          },
          GetTestGridSession: {
            input: {
              type: 'structure',
              members: {
                projectArn: {},
                sessionId: {},
                sessionArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                testGridSession: {
                  shape: 'S55'
                }
              }
            }
          },
          GetUpload: {
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
                upload: {
                  shape: 'S26'
                }
              }
            }
          },
          GetVPCEConfiguration: {
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
                vpceConfiguration: {
                  shape: 'S2h'
                }
              }
            }
          },
          InstallToRemoteAccessSession: {
            input: {
              type: 'structure',
              required: ['remoteAccessSessionArn', 'appArn'],
              members: {
                remoteAccessSessionArn: {},
                appArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                appUpload: {
                  shape: 'S26'
                }
              }
            }
          },
          ListArtifacts: {
            input: {
              type: 'structure',
              required: ['arn', 'type'],
              members: {
                arn: {},
                type: {},
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                artifacts: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      arn: {},
                      name: {},
                      type: {},
                      extension: {},
                      url: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListDeviceInstances: {
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
                deviceInstances: {
                  shape: 'S1h'
                },
                nextToken: {}
              }
            }
          },
          ListDevicePools: {
            input: {
              type: 'structure',
              required: ['arn'],
              members: {
                arn: {},
                type: {},
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                devicePools: {
                  type: 'list',
                  member: {
                    shape: 'Sc'
                  }
                },
                nextToken: {}
              }
            }
          },
          ListDevices: {
            input: {
              type: 'structure',
              members: {
                arn: {},
                nextToken: {},
                filters: {
                  shape: 'S4q'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                devices: {
                  type: 'list',
                  member: {
                    shape: 'S1b'
                  }
                },
                nextToken: {}
              }
            }
          },
          ListInstanceProfiles: {
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
                instanceProfiles: {
                  type: 'list',
                  member: {
                    shape: 'Si'
                  }
                },
                nextToken: {}
              }
            }
          },
          ListJobs: {
            input: {
              type: 'structure',
              required: ['arn'],
              members: {
                arn: {},
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                jobs: {
                  type: 'list',
                  member: {
                    shape: 'S3y'
                  }
                },
                nextToken: {}
              }
            }
          },
          ListNetworkProfiles: {
            input: {
              type: 'structure',
              required: ['arn'],
              members: {
                arn: {},
                type: {},
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                networkProfiles: {
                  type: 'list',
                  member: {
                    shape: 'So'
                  }
                },
                nextToken: {}
              }
            }
          },
          ListOfferingPromotions: {
            input: {
              type: 'structure',
              members: {
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                offeringPromotions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      id: {},
                      description: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListOfferingTransactions: {
            input: {
              type: 'structure',
              members: {
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                offeringTransactions: {
                  type: 'list',
                  member: {
                    shape: 'S69'
                  }
                },
                nextToken: {}
              }
            }
          },
          ListOfferings: {
            input: {
              type: 'structure',
              members: {
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                offerings: {
                  type: 'list',
                  member: {
                    shape: 'S4a'
                  }
                },
                nextToken: {}
              }
            }
          },
          ListProjects: {
            input: {
              type: 'structure',
              members: {
                arn: {},
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                projects: {
                  type: 'list',
                  member: {
                    shape: 'Sy'
                  }
                },
                nextToken: {}
              }
            }
          },
          ListRemoteAccessSessions: {
            input: {
              type: 'structure',
              required: ['arn'],
              members: {
                arn: {},
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                remoteAccessSessions: {
                  type: 'list',
                  member: {
                    shape: 'S18'
                  }
                },
                nextToken: {}
              }
            }
          },
          ListRuns: {
            input: {
              type: 'structure',
              required: ['arn'],
              members: {
                arn: {},
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                runs: {
                  type: 'list',
                  member: {
                    shape: 'S4n'
                  }
                },
                nextToken: {}
              }
            }
          },
          ListSamples: {
            input: {
              type: 'structure',
              required: ['arn'],
              members: {
                arn: {},
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                samples: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      arn: {},
                      type: {},
                      url: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListSuites: {
            input: {
              type: 'structure',
              required: ['arn'],
              members: {
                arn: {},
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                suites: {
                  type: 'list',
                  member: {
                    shape: 'S4w'
                  }
                },
                nextToken: {}
              }
            }
          },
          ListTagsForResource: {
            input: {
              type: 'structure',
              required: ['ResourceARN'],
              members: {
                ResourceARN: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Tags: {
                  shape: 'S6x'
                }
              }
            }
          },
          ListTestGridProjects: {
            input: {
              type: 'structure',
              members: {
                maxResult: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                testGridProjects: {
                  type: 'list',
                  member: {
                    shape: 'S1w'
                  }
                },
                nextToken: {}
              }
            }
          },
          ListTestGridSessionActions: {
            input: {
              type: 'structure',
              required: ['sessionArn'],
              members: {
                sessionArn: {},
                maxResult: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                actions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      action: {},
                      started: {
                        type: 'timestamp'
                      },
                      duration: {
                        type: 'long'
                      },
                      statusCode: {},
                      requestMethod: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListTestGridSessionArtifacts: {
            input: {
              type: 'structure',
              required: ['sessionArn'],
              members: {
                sessionArn: {},
                type: {},
                maxResult: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                artifacts: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      filename: {},
                      type: {},
                      url: {
                        shape: 'S21'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListTestGridSessions: {
            input: {
              type: 'structure',
              required: ['projectArn'],
              members: {
                projectArn: {},
                status: {},
                creationTimeAfter: {
                  type: 'timestamp'
                },
                creationTimeBefore: {
                  type: 'timestamp'
                },
                endTimeAfter: {
                  type: 'timestamp'
                },
                endTimeBefore: {
                  type: 'timestamp'
                },
                maxResult: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                testGridSessions: {
                  type: 'list',
                  member: {
                    shape: 'S55'
                  }
                },
                nextToken: {}
              }
            }
          },
          ListTests: {
            input: {
              type: 'structure',
              required: ['arn'],
              members: {
                arn: {},
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                tests: {
                  type: 'list',
                  member: {
                    shape: 'S4z'
                  }
                },
                nextToken: {}
              }
            }
          },
          ListUniqueProblems: {
            input: {
              type: 'structure',
              required: ['arn'],
              members: {
                arn: {},
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                uniqueProblems: {
                  type: 'map',
                  key: {},
                  value: {
                    type: 'list',
                    member: {
                      type: 'structure',
                      members: {
                        message: {},
                        problems: {
                          type: 'list',
                          member: {
                            type: 'structure',
                            members: {
                              run: {
                                shape: 'S7s'
                              },
                              job: {
                                shape: 'S7s'
                              },
                              suite: {
                                shape: 'S7s'
                              },
                              test: {
                                shape: 'S7s'
                              },
                              device: {
                                shape: 'S1b'
                              },
                              result: {},
                              message: {}
                            }
                          }
                        }
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListUploads: {
            input: {
              type: 'structure',
              required: ['arn'],
              members: {
                arn: {},
                type: {},
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                uploads: {
                  type: 'list',
                  member: {
                    shape: 'S26'
                  }
                },
                nextToken: {}
              }
            }
          },
          ListVPCEConfigurations: {
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
                vpceConfigurations: {
                  type: 'list',
                  member: {
                    shape: 'S2h'
                  }
                },
                nextToken: {}
              }
            }
          },
          PurchaseOffering: {
            input: {
              type: 'structure',
              required: ['offeringId', 'quantity'],
              members: {
                offeringId: {},
                quantity: {
                  type: 'integer'
                },
                offeringPromotionId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                offeringTransaction: {
                  shape: 'S69'
                }
              }
            }
          },
          RenewOffering: {
            input: {
              type: 'structure',
              required: ['offeringId', 'quantity'],
              members: {
                offeringId: {},
                quantity: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                offeringTransaction: {
                  shape: 'S69'
                }
              }
            }
          },
          ScheduleRun: {
            input: {
              type: 'structure',
              required: ['projectArn', 'test'],
              members: {
                projectArn: {},
                appArn: {},
                devicePoolArn: {},
                deviceSelectionConfiguration: {
                  type: 'structure',
                  required: ['filters', 'maxDevices'],
                  members: {
                    filters: {
                      shape: 'S4q'
                    },
                    maxDevices: {
                      type: 'integer'
                    }
                  }
                },
                name: {},
                test: {
                  shape: 'S3f'
                },
                configuration: {
                  shape: 'S3i'
                },
                executionConfiguration: {
                  type: 'structure',
                  members: {
                    jobTimeoutMinutes: {
                      type: 'integer'
                    },
                    accountsCleanup: {
                      type: 'boolean'
                    },
                    appPackagesCleanup: {
                      type: 'boolean'
                    },
                    videoCapture: {
                      type: 'boolean'
                    },
                    skipAppResign: {
                      type: 'boolean'
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                run: {
                  shape: 'S4n'
                }
              }
            }
          },
          StopJob: {
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
                job: {
                  shape: 'S3y'
                }
              }
            }
          },
          StopRemoteAccessSession: {
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
                remoteAccessSession: {
                  shape: 'S18'
                }
              }
            }
          },
          StopRun: {
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
                run: {
                  shape: 'S4n'
                }
              }
            }
          },
          TagResource: {
            input: {
              type: 'structure',
              required: ['ResourceARN', 'Tags'],
              members: {
                ResourceARN: {},
                Tags: {
                  shape: 'S6x'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UntagResource: {
            input: {
              type: 'structure',
              required: ['ResourceARN', 'TagKeys'],
              members: {
                ResourceARN: {},
                TagKeys: {
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
          UpdateDeviceInstance: {
            input: {
              type: 'structure',
              required: ['arn'],
              members: {
                arn: {},
                profileArn: {},
                labels: {
                  shape: 'S1j'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                deviceInstance: {
                  shape: 'S1i'
                }
              }
            }
          },
          UpdateDevicePool: {
            input: {
              type: 'structure',
              required: ['arn'],
              members: {
                arn: {},
                name: {},
                description: {},
                rules: {
                  shape: 'S5'
                },
                maxDevices: {
                  type: 'integer'
                },
                clearMaxDevices: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                devicePool: {
                  shape: 'Sc'
                }
              }
            }
          },
          UpdateInstanceProfile: {
            input: {
              type: 'structure',
              required: ['arn'],
              members: {
                arn: {},
                name: {},
                description: {},
                packageCleanup: {
                  type: 'boolean'
                },
                excludeAppPackagesFromCleanup: {
                  shape: 'Sg'
                },
                rebootAfterUse: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                instanceProfile: {
                  shape: 'Si'
                }
              }
            }
          },
          UpdateNetworkProfile: {
            input: {
              type: 'structure',
              required: ['arn'],
              members: {
                arn: {},
                name: {},
                description: {},
                type: {},
                uplinkBandwidthBits: {
                  type: 'long'
                },
                downlinkBandwidthBits: {
                  type: 'long'
                },
                uplinkDelayMs: {
                  type: 'long'
                },
                downlinkDelayMs: {
                  type: 'long'
                },
                uplinkJitterMs: {
                  type: 'long'
                },
                downlinkJitterMs: {
                  type: 'long'
                },
                uplinkLossPercent: {
                  type: 'integer'
                },
                downlinkLossPercent: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                networkProfile: {
                  shape: 'So'
                }
              }
            }
          },
          UpdateProject: {
            input: {
              type: 'structure',
              required: ['arn'],
              members: {
                arn: {},
                name: {},
                defaultJobTimeoutMinutes: {
                  type: 'integer'
                },
                vpcConfig: {
                  shape: 'Sr'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                project: {
                  shape: 'Sy'
                }
              }
            }
          },
          UpdateTestGridProject: {
            input: {
              type: 'structure',
              required: ['projectArn'],
              members: {
                projectArn: {},
                name: {},
                description: {},
                vpcConfig: {
                  shape: 'S1s'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                testGridProject: {
                  shape: 'S1w'
                }
              }
            }
          },
          UpdateUpload: {
            input: {
              type: 'structure',
              required: ['arn'],
              members: {
                arn: {},
                name: {},
                contentType: {},
                editContent: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                upload: {
                  shape: 'S26'
                }
              }
            }
          },
          UpdateVPCEConfiguration: {
            input: {
              type: 'structure',
              required: ['arn'],
              members: {
                arn: {},
                vpceConfigurationName: {},
                vpceServiceName: {},
                serviceDnsName: {},
                vpceConfigurationDescription: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                vpceConfiguration: {
                  shape: 'S2h'
                }
              }
            }
          }
        },
        shapes: {
          S5: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                attribute: {},
                operator: {},
                value: {}
              }
            }
          },
          Sc: {
            type: 'structure',
            members: {
              arn: {},
              name: {},
              description: {},
              type: {},
              rules: {
                shape: 'S5'
              },
              maxDevices: {
                type: 'integer'
              }
            }
          },
          Sg: {
            type: 'list',
            member: {}
          },
          Si: {
            type: 'structure',
            members: {
              arn: {},
              packageCleanup: {
                type: 'boolean'
              },
              excludeAppPackagesFromCleanup: {
                shape: 'Sg'
              },
              rebootAfterUse: {
                type: 'boolean'
              },
              name: {},
              description: {}
            }
          },
          So: {
            type: 'structure',
            members: {
              arn: {},
              name: {},
              description: {},
              type: {},
              uplinkBandwidthBits: {
                type: 'long'
              },
              downlinkBandwidthBits: {
                type: 'long'
              },
              uplinkDelayMs: {
                type: 'long'
              },
              downlinkDelayMs: {
                type: 'long'
              },
              uplinkJitterMs: {
                type: 'long'
              },
              downlinkJitterMs: {
                type: 'long'
              },
              uplinkLossPercent: {
                type: 'integer'
              },
              downlinkLossPercent: {
                type: 'integer'
              }
            }
          },
          Sr: {
            type: 'structure',
            required: ['securityGroupIds', 'subnetIds', 'vpcId'],
            members: {
              securityGroupIds: {
                type: 'list',
                member: {}
              },
              subnetIds: {
                type: 'list',
                member: {}
              },
              vpcId: {}
            }
          },
          Sy: {
            type: 'structure',
            members: {
              arn: {},
              name: {},
              defaultJobTimeoutMinutes: {
                type: 'integer'
              },
              created: {
                type: 'timestamp'
              },
              vpcConfig: {
                shape: 'Sr'
              }
            }
          },
          S15: {
            type: 'list',
            member: {}
          },
          S18: {
            type: 'structure',
            members: {
              arn: {},
              name: {},
              created: {
                type: 'timestamp'
              },
              status: {},
              result: {},
              message: {},
              started: {
                type: 'timestamp'
              },
              stopped: {
                type: 'timestamp'
              },
              device: {
                shape: 'S1b'
              },
              instanceArn: {},
              remoteDebugEnabled: {
                type: 'boolean'
              },
              remoteRecordEnabled: {
                type: 'boolean'
              },
              remoteRecordAppArn: {},
              hostAddress: {},
              clientId: {},
              billingMethod: {},
              deviceMinutes: {
                shape: 'S1n'
              },
              endpoint: {},
              deviceUdid: {},
              interactionMode: {},
              skipAppResign: {
                type: 'boolean'
              },
              vpcConfig: {
                shape: 'Sr'
              }
            }
          },
          S1b: {
            type: 'structure',
            members: {
              arn: {},
              name: {},
              manufacturer: {},
              model: {},
              modelId: {},
              formFactor: {},
              platform: {},
              os: {},
              cpu: {
                type: 'structure',
                members: {
                  frequency: {},
                  architecture: {},
                  clock: {
                    type: 'double'
                  }
                }
              },
              resolution: {
                type: 'structure',
                members: {
                  width: {
                    type: 'integer'
                  },
                  height: {
                    type: 'integer'
                  }
                }
              },
              heapSize: {
                type: 'long'
              },
              memory: {
                type: 'long'
              },
              image: {},
              carrier: {},
              radio: {},
              remoteAccessEnabled: {
                type: 'boolean'
              },
              remoteDebugEnabled: {
                type: 'boolean'
              },
              fleetType: {},
              fleetName: {},
              instances: {
                shape: 'S1h'
              },
              availability: {}
            }
          },
          S1h: {
            type: 'list',
            member: {
              shape: 'S1i'
            }
          },
          S1i: {
            type: 'structure',
            members: {
              arn: {},
              deviceArn: {},
              labels: {
                shape: 'S1j'
              },
              status: {},
              udid: {},
              instanceProfile: {
                shape: 'Si'
              }
            }
          },
          S1j: {
            type: 'list',
            member: {}
          },
          S1n: {
            type: 'structure',
            members: {
              total: {
                type: 'double'
              },
              metered: {
                type: 'double'
              },
              unmetered: {
                type: 'double'
              }
            }
          },
          S1s: {
            type: 'structure',
            required: ['securityGroupIds', 'subnetIds', 'vpcId'],
            members: {
              securityGroupIds: {
                type: 'list',
                member: {}
              },
              subnetIds: {
                type: 'list',
                member: {}
              },
              vpcId: {}
            }
          },
          S1w: {
            type: 'structure',
            members: {
              arn: {},
              name: {},
              description: {},
              vpcConfig: {
                shape: 'S1s'
              },
              created: {
                type: 'timestamp'
              }
            }
          },
          S21: {
            type: 'string',
            sensitive: true
          },
          S26: {
            type: 'structure',
            members: {
              arn: {},
              name: {},
              created: {
                type: 'timestamp'
              },
              type: {},
              status: {},
              url: {
                type: 'string',
                sensitive: true
              },
              metadata: {},
              contentType: {},
              message: {},
              category: {}
            }
          },
          S2h: {
            type: 'structure',
            members: {
              arn: {},
              vpceConfigurationName: {},
              vpceServiceName: {},
              serviceDnsName: {},
              vpceConfigurationDescription: {}
            }
          },
          S34: {
            type: 'map',
            key: {},
            value: {
              type: 'integer'
            }
          },
          S3f: {
            type: 'structure',
            required: ['type'],
            members: {
              type: {},
              testPackageArn: {},
              testSpecArn: {},
              filter: {},
              parameters: {
                type: 'map',
                key: {},
                value: {}
              }
            }
          },
          S3i: {
            type: 'structure',
            members: {
              extraDataPackageArn: {},
              networkProfileArn: {},
              locale: {},
              location: {
                shape: 'S3j'
              },
              vpceConfigurationArns: {
                shape: 'S15'
              },
              customerArtifactPaths: {
                shape: 'S3k'
              },
              radios: {
                shape: 'S3o'
              },
              auxiliaryApps: {
                shape: 'S15'
              },
              billingMethod: {}
            }
          },
          S3j: {
            type: 'structure',
            required: ['latitude', 'longitude'],
            members: {
              latitude: {
                type: 'double'
              },
              longitude: {
                type: 'double'
              }
            }
          },
          S3k: {
            type: 'structure',
            members: {
              iosPaths: {
                type: 'list',
                member: {}
              },
              androidPaths: {
                type: 'list',
                member: {}
              },
              deviceHostPaths: {
                type: 'list',
                member: {}
              }
            }
          },
          S3o: {
            type: 'structure',
            members: {
              wifi: {
                type: 'boolean'
              },
              bluetooth: {
                type: 'boolean'
              },
              nfc: {
                type: 'boolean'
              },
              gps: {
                type: 'boolean'
              }
            }
          },
          S3q: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                device: {
                  shape: 'S1b'
                },
                compatible: {
                  type: 'boolean'
                },
                incompatibilityMessages: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      message: {},
                      type: {}
                    }
                  }
                }
              }
            }
          },
          S3y: {
            type: 'structure',
            members: {
              arn: {},
              name: {},
              type: {},
              created: {
                type: 'timestamp'
              },
              status: {},
              result: {},
              started: {
                type: 'timestamp'
              },
              stopped: {
                type: 'timestamp'
              },
              counters: {
                shape: 'S3z'
              },
              message: {},
              device: {
                shape: 'S1b'
              },
              instanceArn: {},
              deviceMinutes: {
                shape: 'S1n'
              },
              videoEndpoint: {},
              videoCapture: {
                type: 'boolean'
              }
            }
          },
          S3z: {
            type: 'structure',
            members: {
              total: {
                type: 'integer'
              },
              passed: {
                type: 'integer'
              },
              failed: {
                type: 'integer'
              },
              warned: {
                type: 'integer'
              },
              errored: {
                type: 'integer'
              },
              stopped: {
                type: 'integer'
              },
              skipped: {
                type: 'integer'
              }
            }
          },
          S46: {
            type: 'map',
            key: {},
            value: {
              shape: 'S48'
            }
          },
          S48: {
            type: 'structure',
            members: {
              type: {},
              offering: {
                shape: 'S4a'
              },
              quantity: {
                type: 'integer'
              },
              effectiveOn: {
                type: 'timestamp'
              }
            }
          },
          S4a: {
            type: 'structure',
            members: {
              id: {},
              description: {},
              type: {},
              platform: {},
              recurringCharges: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    cost: {
                      shape: 'S4e'
                    },
                    frequency: {}
                  }
                }
              }
            }
          },
          S4e: {
            type: 'structure',
            members: {
              amount: {
                type: 'double'
              },
              currencyCode: {}
            }
          },
          S4n: {
            type: 'structure',
            members: {
              arn: {},
              name: {},
              type: {},
              platform: {},
              created: {
                type: 'timestamp'
              },
              status: {},
              result: {},
              started: {
                type: 'timestamp'
              },
              stopped: {
                type: 'timestamp'
              },
              counters: {
                shape: 'S3z'
              },
              message: {},
              totalJobs: {
                type: 'integer'
              },
              completedJobs: {
                type: 'integer'
              },
              billingMethod: {},
              deviceMinutes: {
                shape: 'S1n'
              },
              networkProfile: {
                shape: 'So'
              },
              parsingResultUrl: {},
              resultCode: {},
              seed: {
                type: 'integer'
              },
              appUpload: {},
              eventCount: {
                type: 'integer'
              },
              jobTimeoutMinutes: {
                type: 'integer'
              },
              devicePoolArn: {},
              locale: {},
              radios: {
                shape: 'S3o'
              },
              location: {
                shape: 'S3j'
              },
              customerArtifactPaths: {
                shape: 'S3k'
              },
              webUrl: {},
              skipAppResign: {
                type: 'boolean'
              },
              testSpecArn: {},
              deviceSelectionResult: {
                type: 'structure',
                members: {
                  filters: {
                    shape: 'S4q'
                  },
                  matchedDevicesCount: {
                    type: 'integer'
                  },
                  maxDevices: {
                    type: 'integer'
                  }
                }
              },
              vpcConfig: {
                shape: 'Sr'
              }
            }
          },
          S4q: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['attribute', 'operator', 'values'],
              members: {
                attribute: {},
                operator: {},
                values: {
                  type: 'list',
                  member: {}
                }
              }
            }
          },
          S4w: {
            type: 'structure',
            members: {
              arn: {},
              name: {},
              type: {},
              created: {
                type: 'timestamp'
              },
              status: {},
              result: {},
              started: {
                type: 'timestamp'
              },
              stopped: {
                type: 'timestamp'
              },
              counters: {
                shape: 'S3z'
              },
              message: {},
              deviceMinutes: {
                shape: 'S1n'
              }
            }
          },
          S4z: {
            type: 'structure',
            members: {
              arn: {},
              name: {},
              type: {},
              created: {
                type: 'timestamp'
              },
              status: {},
              result: {},
              started: {
                type: 'timestamp'
              },
              stopped: {
                type: 'timestamp'
              },
              counters: {
                shape: 'S3z'
              },
              message: {},
              deviceMinutes: {
                shape: 'S1n'
              }
            }
          },
          S55: {
            type: 'structure',
            members: {
              arn: {},
              status: {},
              created: {
                type: 'timestamp'
              },
              ended: {
                type: 'timestamp'
              },
              billingMinutes: {
                type: 'double'
              },
              seleniumProperties: {}
            }
          },
          S69: {
            type: 'structure',
            members: {
              offeringStatus: {
                shape: 'S48'
              },
              transactionId: {},
              offeringPromotionId: {},
              createdOn: {
                type: 'timestamp'
              },
              cost: {
                shape: 'S4e'
              }
            }
          },
          S6x: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Key', 'Value'],
              members: {
                Key: {},
                Value: {}
              }
            }
          },
          S7s: {
            type: 'structure',
            members: {
              arn: {},
              name: {}
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=232265c57e51b6f6891f44fcba31ab19b9277208.js.map