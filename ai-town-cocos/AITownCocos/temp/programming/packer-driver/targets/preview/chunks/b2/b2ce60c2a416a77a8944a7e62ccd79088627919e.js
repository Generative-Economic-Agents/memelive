System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2017-10-11',
          endpointPrefix: 'synthetics',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceAbbreviation: 'Synthetics',
          serviceFullName: 'Synthetics',
          serviceId: 'synthetics',
          signatureVersion: 'v4',
          signingName: 'synthetics',
          uid: 'synthetics-2017-10-11'
        },
        operations: {
          AssociateResource: {
            http: {
              method: 'PATCH',
              requestUri: '/group/{groupIdentifier}/associate'
            },
            input: {
              type: 'structure',
              required: ['GroupIdentifier', 'ResourceArn'],
              members: {
                GroupIdentifier: {
                  location: 'uri',
                  locationName: 'groupIdentifier'
                },
                ResourceArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          CreateCanary: {
            http: {
              requestUri: '/canary'
            },
            input: {
              type: 'structure',
              required: ['Name', 'Code', 'ArtifactS3Location', 'ExecutionRoleArn', 'Schedule', 'RuntimeVersion'],
              members: {
                Name: {},
                Code: {
                  shape: 'S7'
                },
                ArtifactS3Location: {},
                ExecutionRoleArn: {},
                Schedule: {
                  shape: 'Sc'
                },
                RunConfig: {
                  shape: 'Se'
                },
                SuccessRetentionPeriodInDays: {
                  type: 'integer'
                },
                FailureRetentionPeriodInDays: {
                  type: 'integer'
                },
                RuntimeVersion: {},
                VpcConfig: {
                  shape: 'Sm'
                },
                Tags: {
                  shape: 'Sr'
                },
                ArtifactConfig: {
                  shape: 'Su'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Canary: {
                  shape: 'Sz'
                }
              }
            }
          },
          CreateGroup: {
            http: {
              requestUri: '/group'
            },
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {},
                Tags: {
                  shape: 'Sr'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Group: {
                  shape: 'S1l'
                }
              }
            }
          },
          DeleteCanary: {
            http: {
              method: 'DELETE',
              requestUri: '/canary/{name}'
            },
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {
                  location: 'uri',
                  locationName: 'name'
                },
                DeleteLambda: {
                  location: 'querystring',
                  locationName: 'deleteLambda',
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteGroup: {
            http: {
              method: 'DELETE',
              requestUri: '/group/{groupIdentifier}'
            },
            input: {
              type: 'structure',
              required: ['GroupIdentifier'],
              members: {
                GroupIdentifier: {
                  location: 'uri',
                  locationName: 'groupIdentifier'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DescribeCanaries: {
            http: {
              requestUri: '/canaries'
            },
            input: {
              type: 'structure',
              members: {
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                Names: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Canaries: {
                  type: 'list',
                  member: {
                    shape: 'Sz'
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeCanariesLastRun: {
            http: {
              requestUri: '/canaries/last-run'
            },
            input: {
              type: 'structure',
              members: {
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                Names: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                CanariesLastRun: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      CanaryName: {},
                      LastRun: {
                        shape: 'S24'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DescribeRuntimeVersions: {
            http: {
              requestUri: '/runtime-versions'
            },
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
                RuntimeVersions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      VersionName: {},
                      Description: {},
                      ReleaseDate: {
                        type: 'timestamp'
                      },
                      DeprecationDate: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          DisassociateResource: {
            http: {
              method: 'PATCH',
              requestUri: '/group/{groupIdentifier}/disassociate'
            },
            input: {
              type: 'structure',
              required: ['GroupIdentifier', 'ResourceArn'],
              members: {
                GroupIdentifier: {
                  location: 'uri',
                  locationName: 'groupIdentifier'
                },
                ResourceArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          GetCanary: {
            http: {
              method: 'GET',
              requestUri: '/canary/{name}'
            },
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {
                  location: 'uri',
                  locationName: 'name'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Canary: {
                  shape: 'Sz'
                }
              }
            }
          },
          GetCanaryRuns: {
            http: {
              requestUri: '/canary/{name}/runs'
            },
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {
                  location: 'uri',
                  locationName: 'name'
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
                CanaryRuns: {
                  type: 'list',
                  member: {
                    shape: 'S24'
                  }
                },
                NextToken: {}
              }
            }
          },
          GetGroup: {
            http: {
              method: 'GET',
              requestUri: '/group/{groupIdentifier}'
            },
            input: {
              type: 'structure',
              required: ['GroupIdentifier'],
              members: {
                GroupIdentifier: {
                  location: 'uri',
                  locationName: 'groupIdentifier'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Group: {
                  shape: 'S1l'
                }
              }
            }
          },
          ListAssociatedGroups: {
            http: {
              requestUri: '/resource/{resourceArn}/groups'
            },
            input: {
              type: 'structure',
              required: ['ResourceArn'],
              members: {
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                ResourceArn: {
                  location: 'uri',
                  locationName: 'resourceArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Groups: {
                  shape: 'S2q'
                },
                NextToken: {}
              }
            }
          },
          ListGroupResources: {
            http: {
              requestUri: '/group/{groupIdentifier}/resources'
            },
            input: {
              type: 'structure',
              required: ['GroupIdentifier'],
              members: {
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                GroupIdentifier: {
                  location: 'uri',
                  locationName: 'groupIdentifier'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Resources: {
                  type: 'list',
                  member: {}
                },
                NextToken: {}
              }
            }
          },
          ListGroups: {
            http: {
              requestUri: '/groups'
            },
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
                Groups: {
                  shape: 'S2q'
                },
                NextToken: {}
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
              required: ['ResourceArn'],
              members: {
                ResourceArn: {
                  location: 'uri',
                  locationName: 'resourceArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Tags: {
                  shape: 'Sr'
                }
              }
            }
          },
          StartCanary: {
            http: {
              requestUri: '/canary/{name}/start'
            },
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {
                  location: 'uri',
                  locationName: 'name'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          StopCanary: {
            http: {
              requestUri: '/canary/{name}/stop'
            },
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {
                  location: 'uri',
                  locationName: 'name'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          TagResource: {
            http: {
              requestUri: '/tags/{resourceArn}'
            },
            input: {
              type: 'structure',
              required: ['ResourceArn', 'Tags'],
              members: {
                ResourceArn: {
                  location: 'uri',
                  locationName: 'resourceArn'
                },
                Tags: {
                  shape: 'Sr'
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
              required: ['ResourceArn', 'TagKeys'],
              members: {
                ResourceArn: {
                  location: 'uri',
                  locationName: 'resourceArn'
                },
                TagKeys: {
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
          UpdateCanary: {
            http: {
              method: 'PATCH',
              requestUri: '/canary/{name}'
            },
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {
                  location: 'uri',
                  locationName: 'name'
                },
                Code: {
                  shape: 'S7'
                },
                ExecutionRoleArn: {},
                RuntimeVersion: {},
                Schedule: {
                  shape: 'Sc'
                },
                RunConfig: {
                  shape: 'Se'
                },
                SuccessRetentionPeriodInDays: {
                  type: 'integer'
                },
                FailureRetentionPeriodInDays: {
                  type: 'integer'
                },
                VpcConfig: {
                  shape: 'Sm'
                },
                VisualReference: {
                  type: 'structure',
                  required: ['BaseCanaryRunId'],
                  members: {
                    BaseScreenshots: {
                      shape: 'S1d'
                    },
                    BaseCanaryRunId: {}
                  }
                },
                ArtifactS3Location: {},
                ArtifactConfig: {
                  shape: 'Su'
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
          S7: {
            type: 'structure',
            required: ['Handler'],
            members: {
              S3Bucket: {},
              S3Key: {},
              S3Version: {},
              ZipFile: {
                type: 'blob'
              },
              Handler: {}
            }
          },
          Sc: {
            type: 'structure',
            required: ['Expression'],
            members: {
              Expression: {},
              DurationInSeconds: {
                type: 'long'
              }
            }
          },
          Se: {
            type: 'structure',
            members: {
              TimeoutInSeconds: {
                type: 'integer'
              },
              MemoryInMB: {
                type: 'integer'
              },
              ActiveTracing: {
                type: 'boolean'
              },
              EnvironmentVariables: {
                type: 'map',
                key: {},
                value: {}
              }
            }
          },
          Sm: {
            type: 'structure',
            members: {
              SubnetIds: {
                shape: 'Sn'
              },
              SecurityGroupIds: {
                shape: 'Sp'
              }
            }
          },
          Sn: {
            type: 'list',
            member: {}
          },
          Sp: {
            type: 'list',
            member: {}
          },
          Sr: {
            type: 'map',
            key: {},
            value: {}
          },
          Su: {
            type: 'structure',
            members: {
              S3Encryption: {
                shape: 'Sv'
              }
            }
          },
          Sv: {
            type: 'structure',
            members: {
              EncryptionMode: {},
              KmsKeyArn: {}
            }
          },
          Sz: {
            type: 'structure',
            members: {
              Id: {},
              Name: {},
              Code: {
                type: 'structure',
                members: {
                  SourceLocationArn: {},
                  Handler: {}
                }
              },
              ExecutionRoleArn: {},
              Schedule: {
                type: 'structure',
                members: {
                  Expression: {},
                  DurationInSeconds: {
                    type: 'long'
                  }
                }
              },
              RunConfig: {
                type: 'structure',
                members: {
                  TimeoutInSeconds: {
                    type: 'integer'
                  },
                  MemoryInMB: {
                    type: 'integer'
                  },
                  ActiveTracing: {
                    type: 'boolean'
                  }
                }
              },
              SuccessRetentionPeriodInDays: {
                type: 'integer'
              },
              FailureRetentionPeriodInDays: {
                type: 'integer'
              },
              Status: {
                type: 'structure',
                members: {
                  State: {},
                  StateReason: {},
                  StateReasonCode: {}
                }
              },
              Timeline: {
                type: 'structure',
                members: {
                  Created: {
                    type: 'timestamp'
                  },
                  LastModified: {
                    type: 'timestamp'
                  },
                  LastStarted: {
                    type: 'timestamp'
                  },
                  LastStopped: {
                    type: 'timestamp'
                  }
                }
              },
              ArtifactS3Location: {},
              EngineArn: {},
              RuntimeVersion: {},
              VpcConfig: {
                type: 'structure',
                members: {
                  VpcId: {},
                  SubnetIds: {
                    shape: 'Sn'
                  },
                  SecurityGroupIds: {
                    shape: 'Sp'
                  }
                }
              },
              VisualReference: {
                type: 'structure',
                members: {
                  BaseScreenshots: {
                    shape: 'S1d'
                  },
                  BaseCanaryRunId: {}
                }
              },
              Tags: {
                shape: 'Sr'
              },
              ArtifactConfig: {
                type: 'structure',
                members: {
                  S3Encryption: {
                    shape: 'Sv'
                  }
                }
              }
            }
          },
          S1d: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['ScreenshotName'],
              members: {
                ScreenshotName: {},
                IgnoreCoordinates: {
                  type: 'list',
                  member: {}
                }
              }
            }
          },
          S1l: {
            type: 'structure',
            members: {
              Id: {},
              Name: {},
              Arn: {},
              Tags: {
                shape: 'Sr'
              },
              CreatedTime: {
                type: 'timestamp'
              },
              LastModifiedTime: {
                type: 'timestamp'
              }
            }
          },
          S24: {
            type: 'structure',
            members: {
              Id: {},
              Name: {},
              Status: {
                type: 'structure',
                members: {
                  State: {},
                  StateReason: {},
                  StateReasonCode: {}
                }
              },
              Timeline: {
                type: 'structure',
                members: {
                  Started: {
                    type: 'timestamp'
                  },
                  Completed: {
                    type: 'timestamp'
                  }
                }
              },
              ArtifactS3Location: {}
            }
          },
          S2q: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Id: {},
                Name: {},
                Arn: {}
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=b2ce60c2a416a77a8944a7e62ccd79088627919e.js.map