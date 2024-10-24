System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2022-01-01',
          endpointPrefix: 'osis',
          protocol: 'rest-json',
          protocols: ['rest-json'],
          serviceFullName: 'Amazon OpenSearch Ingestion',
          serviceId: 'OSIS',
          signatureVersion: 'v4',
          uid: 'osis-2022-01-01'
        },
        operations: {
          CreatePipeline: {
            http: {
              requestUri: '/2022-01-01/osis/createPipeline'
            },
            input: {
              type: 'structure',
              required: ['PipelineName', 'MinUnits', 'MaxUnits', 'PipelineConfigurationBody'],
              members: {
                PipelineName: {},
                MinUnits: {
                  type: 'integer'
                },
                MaxUnits: {
                  type: 'integer'
                },
                PipelineConfigurationBody: {},
                LogPublishingOptions: {
                  shape: 'S5'
                },
                VpcOptions: {
                  shape: 'S9'
                },
                BufferOptions: {
                  shape: 'Sg'
                },
                EncryptionAtRestOptions: {
                  shape: 'Sh'
                },
                Tags: {
                  shape: 'Sj'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Pipeline: {
                  shape: 'So'
                }
              }
            }
          },
          DeletePipeline: {
            http: {
              method: 'DELETE',
              requestUri: '/2022-01-01/osis/deletePipeline/{PipelineName}'
            },
            input: {
              type: 'structure',
              required: ['PipelineName'],
              members: {
                PipelineName: {
                  location: 'uri',
                  locationName: 'PipelineName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          GetPipeline: {
            http: {
              method: 'GET',
              requestUri: '/2022-01-01/osis/getPipeline/{PipelineName}'
            },
            input: {
              type: 'structure',
              required: ['PipelineName'],
              members: {
                PipelineName: {
                  location: 'uri',
                  locationName: 'PipelineName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Pipeline: {
                  shape: 'So'
                }
              }
            }
          },
          GetPipelineBlueprint: {
            http: {
              method: 'GET',
              requestUri: '/2022-01-01/osis/getPipelineBlueprint/{BlueprintName}'
            },
            input: {
              type: 'structure',
              required: ['BlueprintName'],
              members: {
                BlueprintName: {
                  location: 'uri',
                  locationName: 'BlueprintName'
                },
                Format: {
                  location: 'querystring',
                  locationName: 'format'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Blueprint: {
                  type: 'structure',
                  members: {
                    BlueprintName: {},
                    PipelineConfigurationBody: {},
                    DisplayName: {},
                    DisplayDescription: {},
                    Service: {},
                    UseCase: {}
                  }
                },
                Format: {}
              }
            }
          },
          GetPipelineChangeProgress: {
            http: {
              method: 'GET',
              requestUri: '/2022-01-01/osis/getPipelineChangeProgress/{PipelineName}'
            },
            input: {
              type: 'structure',
              required: ['PipelineName'],
              members: {
                PipelineName: {
                  location: 'uri',
                  locationName: 'PipelineName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ChangeProgressStatuses: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      StartTime: {
                        type: 'timestamp'
                      },
                      Status: {},
                      TotalNumberOfStages: {
                        type: 'integer'
                      },
                      ChangeProgressStages: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            Name: {},
                            Status: {},
                            Description: {},
                            LastUpdatedAt: {
                              type: 'timestamp'
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
          ListPipelineBlueprints: {
            http: {
              requestUri: '/2022-01-01/osis/listPipelineBlueprints'
            },
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {
                Blueprints: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      BlueprintName: {},
                      DisplayName: {},
                      DisplayDescription: {},
                      Service: {},
                      UseCase: {}
                    }
                  }
                }
              }
            }
          },
          ListPipelines: {
            http: {
              method: 'GET',
              requestUri: '/2022-01-01/osis/listPipelines'
            },
            input: {
              type: 'structure',
              members: {
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                Pipelines: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Status: {},
                      StatusReason: {
                        shape: 'Ss'
                      },
                      PipelineName: {},
                      PipelineArn: {},
                      MinUnits: {
                        type: 'integer'
                      },
                      MaxUnits: {
                        type: 'integer'
                      },
                      CreatedAt: {
                        type: 'timestamp'
                      },
                      LastUpdatedAt: {
                        type: 'timestamp'
                      },
                      Destinations: {
                        shape: 'S10'
                      },
                      Tags: {
                        shape: 'Sj'
                      }
                    }
                  }
                }
              }
            }
          },
          ListTagsForResource: {
            http: {
              method: 'GET',
              requestUri: '/2022-01-01/osis/listTagsForResource/'
            },
            input: {
              type: 'structure',
              required: ['Arn'],
              members: {
                Arn: {
                  location: 'querystring',
                  locationName: 'arn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Tags: {
                  shape: 'Sj'
                }
              }
            }
          },
          StartPipeline: {
            http: {
              method: 'PUT',
              requestUri: '/2022-01-01/osis/startPipeline/{PipelineName}'
            },
            input: {
              type: 'structure',
              required: ['PipelineName'],
              members: {
                PipelineName: {
                  location: 'uri',
                  locationName: 'PipelineName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Pipeline: {
                  shape: 'So'
                }
              }
            }
          },
          StopPipeline: {
            http: {
              method: 'PUT',
              requestUri: '/2022-01-01/osis/stopPipeline/{PipelineName}'
            },
            input: {
              type: 'structure',
              required: ['PipelineName'],
              members: {
                PipelineName: {
                  location: 'uri',
                  locationName: 'PipelineName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Pipeline: {
                  shape: 'So'
                }
              }
            }
          },
          TagResource: {
            http: {
              requestUri: '/2022-01-01/osis/tagResource/'
            },
            input: {
              type: 'structure',
              required: ['Arn', 'Tags'],
              members: {
                Arn: {
                  location: 'querystring',
                  locationName: 'arn'
                },
                Tags: {
                  shape: 'Sj'
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
              requestUri: '/2022-01-01/osis/untagResource/'
            },
            input: {
              type: 'structure',
              required: ['Arn', 'TagKeys'],
              members: {
                Arn: {
                  location: 'querystring',
                  locationName: 'arn'
                },
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
          UpdatePipeline: {
            http: {
              method: 'PUT',
              requestUri: '/2022-01-01/osis/updatePipeline/{PipelineName}'
            },
            input: {
              type: 'structure',
              required: ['PipelineName'],
              members: {
                PipelineName: {
                  location: 'uri',
                  locationName: 'PipelineName'
                },
                MinUnits: {
                  type: 'integer'
                },
                MaxUnits: {
                  type: 'integer'
                },
                PipelineConfigurationBody: {},
                LogPublishingOptions: {
                  shape: 'S5'
                },
                BufferOptions: {
                  shape: 'Sg'
                },
                EncryptionAtRestOptions: {
                  shape: 'Sh'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Pipeline: {
                  shape: 'So'
                }
              }
            }
          },
          ValidatePipeline: {
            http: {
              requestUri: '/2022-01-01/osis/validatePipeline'
            },
            input: {
              type: 'structure',
              required: ['PipelineConfigurationBody'],
              members: {
                PipelineConfigurationBody: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                isValid: {
                  type: 'boolean'
                },
                Errors: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Message: {}
                    }
                  }
                }
              }
            }
          }
        },
        shapes: {
          S5: {
            type: 'structure',
            members: {
              IsLoggingEnabled: {
                type: 'boolean'
              },
              CloudWatchLogDestination: {
                type: 'structure',
                required: ['LogGroup'],
                members: {
                  LogGroup: {}
                }
              }
            }
          },
          S9: {
            type: 'structure',
            required: ['SubnetIds'],
            members: {
              SubnetIds: {
                type: 'list',
                member: {}
              },
              SecurityGroupIds: {
                type: 'list',
                member: {}
              },
              VpcAttachmentOptions: {
                type: 'structure',
                required: ['AttachToVpc'],
                members: {
                  AttachToVpc: {
                    type: 'boolean'
                  },
                  CidrBlock: {}
                }
              }
            }
          },
          Sg: {
            type: 'structure',
            required: ['PersistentBufferEnabled'],
            members: {
              PersistentBufferEnabled: {
                type: 'boolean'
              }
            }
          },
          Sh: {
            type: 'structure',
            required: ['KmsKeyArn'],
            members: {
              KmsKeyArn: {}
            }
          },
          Sj: {
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
          So: {
            type: 'structure',
            members: {
              PipelineName: {},
              PipelineArn: {},
              MinUnits: {
                type: 'integer'
              },
              MaxUnits: {
                type: 'integer'
              },
              Status: {},
              StatusReason: {
                shape: 'Ss'
              },
              PipelineConfigurationBody: {},
              CreatedAt: {
                type: 'timestamp'
              },
              LastUpdatedAt: {
                type: 'timestamp'
              },
              IngestEndpointUrls: {
                type: 'list',
                member: {}
              },
              LogPublishingOptions: {
                shape: 'S5'
              },
              VpcEndpoints: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    VpcEndpointId: {},
                    VpcId: {},
                    VpcOptions: {
                      shape: 'S9'
                    }
                  }
                }
              },
              BufferOptions: {
                shape: 'Sg'
              },
              EncryptionAtRestOptions: {
                shape: 'Sh'
              },
              ServiceVpcEndpoints: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    ServiceName: {},
                    VpcEndpointId: {}
                  }
                }
              },
              Destinations: {
                shape: 'S10'
              },
              Tags: {
                shape: 'Sj'
              }
            }
          },
          Ss: {
            type: 'structure',
            members: {
              Description: {}
            }
          },
          S10: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                ServiceName: {},
                Endpoint: {}
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=1d217734971af7b0030f508cca46d30e7b1a8cc3.js.map