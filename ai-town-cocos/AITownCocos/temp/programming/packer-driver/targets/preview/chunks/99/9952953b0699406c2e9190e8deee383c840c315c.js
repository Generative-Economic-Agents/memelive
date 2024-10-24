System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2017-05-31',
          endpointPrefix: 'mgh',
          jsonVersion: '1.1',
          protocol: 'json',
          serviceFullName: 'AWS Migration Hub',
          serviceId: 'Migration Hub',
          signatureVersion: 'v4',
          targetPrefix: 'AWSMigrationHub',
          uid: 'AWSMigrationHub-2017-05-31'
        },
        operations: {
          AssociateCreatedArtifact: {
            input: {
              type: 'structure',
              required: ['ProgressUpdateStream', 'MigrationTaskName', 'CreatedArtifact'],
              members: {
                ProgressUpdateStream: {},
                MigrationTaskName: {},
                CreatedArtifact: {
                  shape: 'S4'
                },
                DryRun: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          AssociateDiscoveredResource: {
            input: {
              type: 'structure',
              required: ['ProgressUpdateStream', 'MigrationTaskName', 'DiscoveredResource'],
              members: {
                ProgressUpdateStream: {},
                MigrationTaskName: {},
                DiscoveredResource: {
                  shape: 'Sa'
                },
                DryRun: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          CreateProgressUpdateStream: {
            input: {
              type: 'structure',
              required: ['ProgressUpdateStreamName'],
              members: {
                ProgressUpdateStreamName: {},
                DryRun: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteProgressUpdateStream: {
            input: {
              type: 'structure',
              required: ['ProgressUpdateStreamName'],
              members: {
                ProgressUpdateStreamName: {},
                DryRun: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DescribeApplicationState: {
            input: {
              type: 'structure',
              required: ['ApplicationId'],
              members: {
                ApplicationId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ApplicationStatus: {},
                LastUpdatedTime: {
                  type: 'timestamp'
                }
              }
            }
          },
          DescribeMigrationTask: {
            input: {
              type: 'structure',
              required: ['ProgressUpdateStream', 'MigrationTaskName'],
              members: {
                ProgressUpdateStream: {},
                MigrationTaskName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                MigrationTask: {
                  type: 'structure',
                  members: {
                    ProgressUpdateStream: {},
                    MigrationTaskName: {},
                    Task: {
                      shape: 'Sq'
                    },
                    UpdateDateTime: {
                      type: 'timestamp'
                    },
                    ResourceAttributeList: {
                      type: 'list',
                      member: {
                        shape: 'Sv'
                      }
                    }
                  }
                }
              }
            }
          },
          DisassociateCreatedArtifact: {
            input: {
              type: 'structure',
              required: ['ProgressUpdateStream', 'MigrationTaskName', 'CreatedArtifactName'],
              members: {
                ProgressUpdateStream: {},
                MigrationTaskName: {},
                CreatedArtifactName: {},
                DryRun: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DisassociateDiscoveredResource: {
            input: {
              type: 'structure',
              required: ['ProgressUpdateStream', 'MigrationTaskName', 'ConfigurationId'],
              members: {
                ProgressUpdateStream: {},
                MigrationTaskName: {},
                ConfigurationId: {},
                DryRun: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          ImportMigrationTask: {
            input: {
              type: 'structure',
              required: ['ProgressUpdateStream', 'MigrationTaskName'],
              members: {
                ProgressUpdateStream: {},
                MigrationTaskName: {},
                DryRun: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          ListApplicationStates: {
            input: {
              type: 'structure',
              members: {
                ApplicationIds: {
                  type: 'list',
                  member: {}
                },
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ApplicationStateList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ApplicationId: {},
                      ApplicationStatus: {},
                      LastUpdatedTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListCreatedArtifacts: {
            input: {
              type: 'structure',
              required: ['ProgressUpdateStream', 'MigrationTaskName'],
              members: {
                ProgressUpdateStream: {},
                MigrationTaskName: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                CreatedArtifactList: {
                  type: 'list',
                  member: {
                    shape: 'S4'
                  }
                }
              }
            }
          },
          ListDiscoveredResources: {
            input: {
              type: 'structure',
              required: ['ProgressUpdateStream', 'MigrationTaskName'],
              members: {
                ProgressUpdateStream: {},
                MigrationTaskName: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                DiscoveredResourceList: {
                  type: 'list',
                  member: {
                    shape: 'Sa'
                  }
                }
              }
            }
          },
          ListMigrationTasks: {
            input: {
              type: 'structure',
              members: {
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                ResourceName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                MigrationTaskSummaryList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ProgressUpdateStream: {},
                      MigrationTaskName: {},
                      Status: {},
                      ProgressPercent: {
                        type: 'integer'
                      },
                      StatusDetail: {},
                      UpdateDateTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                }
              }
            }
          },
          ListProgressUpdateStreams: {
            input: {
              type: 'structure',
              members: {
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ProgressUpdateStreamSummaryList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ProgressUpdateStreamName: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          NotifyApplicationState: {
            input: {
              type: 'structure',
              required: ['ApplicationId', 'Status'],
              members: {
                ApplicationId: {},
                Status: {},
                UpdateDateTime: {
                  type: 'timestamp'
                },
                DryRun: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          NotifyMigrationTaskState: {
            input: {
              type: 'structure',
              required: ['ProgressUpdateStream', 'MigrationTaskName', 'Task', 'UpdateDateTime', 'NextUpdateSeconds'],
              members: {
                ProgressUpdateStream: {},
                MigrationTaskName: {},
                Task: {
                  shape: 'Sq'
                },
                UpdateDateTime: {
                  type: 'timestamp'
                },
                NextUpdateSeconds: {
                  type: 'integer'
                },
                DryRun: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          PutResourceAttributes: {
            input: {
              type: 'structure',
              required: ['ProgressUpdateStream', 'MigrationTaskName', 'ResourceAttributeList'],
              members: {
                ProgressUpdateStream: {},
                MigrationTaskName: {},
                ResourceAttributeList: {
                  type: 'list',
                  member: {
                    shape: 'Sv'
                  }
                },
                DryRun: {
                  type: 'boolean'
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
            required: ['Name'],
            members: {
              Name: {},
              Description: {}
            }
          },
          Sa: {
            type: 'structure',
            required: ['ConfigurationId'],
            members: {
              ConfigurationId: {},
              Description: {}
            }
          },
          Sq: {
            type: 'structure',
            required: ['Status'],
            members: {
              Status: {},
              StatusDetail: {},
              ProgressPercent: {
                type: 'integer'
              }
            }
          },
          Sv: {
            type: 'structure',
            required: ['Type', 'Value'],
            members: {
              Type: {},
              Value: {}
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=9952953b0699406c2e9190e8deee383c840c315c.js.map