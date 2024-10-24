System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2017-09-01',
          endpointPrefix: 'mediastore',
          jsonVersion: '1.1',
          protocol: 'json',
          serviceAbbreviation: 'MediaStore',
          serviceFullName: 'AWS Elemental MediaStore',
          serviceId: 'MediaStore',
          signatureVersion: 'v4',
          signingName: 'mediastore',
          targetPrefix: 'MediaStore_20170901',
          uid: 'mediastore-2017-09-01'
        },
        operations: {
          CreateContainer: {
            input: {
              type: 'structure',
              required: ['ContainerName'],
              members: {
                ContainerName: {},
                Tags: {
                  shape: 'S3'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Container'],
              members: {
                Container: {
                  shape: 'S8'
                }
              }
            }
          },
          DeleteContainer: {
            input: {
              type: 'structure',
              required: ['ContainerName'],
              members: {
                ContainerName: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteContainerPolicy: {
            input: {
              type: 'structure',
              required: ['ContainerName'],
              members: {
                ContainerName: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteCorsPolicy: {
            input: {
              type: 'structure',
              required: ['ContainerName'],
              members: {
                ContainerName: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteLifecyclePolicy: {
            input: {
              type: 'structure',
              required: ['ContainerName'],
              members: {
                ContainerName: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteMetricPolicy: {
            input: {
              type: 'structure',
              required: ['ContainerName'],
              members: {
                ContainerName: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DescribeContainer: {
            input: {
              type: 'structure',
              members: {
                ContainerName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Container: {
                  shape: 'S8'
                }
              }
            }
          },
          GetContainerPolicy: {
            input: {
              type: 'structure',
              required: ['ContainerName'],
              members: {
                ContainerName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['Policy'],
              members: {
                Policy: {}
              }
            }
          },
          GetCorsPolicy: {
            input: {
              type: 'structure',
              required: ['ContainerName'],
              members: {
                ContainerName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['CorsPolicy'],
              members: {
                CorsPolicy: {
                  shape: 'Sv'
                }
              }
            }
          },
          GetLifecyclePolicy: {
            input: {
              type: 'structure',
              required: ['ContainerName'],
              members: {
                ContainerName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['LifecyclePolicy'],
              members: {
                LifecyclePolicy: {}
              }
            }
          },
          GetMetricPolicy: {
            input: {
              type: 'structure',
              required: ['ContainerName'],
              members: {
                ContainerName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['MetricPolicy'],
              members: {
                MetricPolicy: {
                  shape: 'S1a'
                }
              }
            }
          },
          ListContainers: {
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
              required: ['Containers'],
              members: {
                Containers: {
                  type: 'list',
                  member: {
                    shape: 'S8'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListTagsForResource: {
            input: {
              type: 'structure',
              required: ['Resource'],
              members: {
                Resource: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Tags: {
                  shape: 'S3'
                }
              }
            }
          },
          PutContainerPolicy: {
            input: {
              type: 'structure',
              required: ['ContainerName', 'Policy'],
              members: {
                ContainerName: {},
                Policy: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          PutCorsPolicy: {
            input: {
              type: 'structure',
              required: ['ContainerName', 'CorsPolicy'],
              members: {
                ContainerName: {},
                CorsPolicy: {
                  shape: 'Sv'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          PutLifecyclePolicy: {
            input: {
              type: 'structure',
              required: ['ContainerName', 'LifecyclePolicy'],
              members: {
                ContainerName: {},
                LifecyclePolicy: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          PutMetricPolicy: {
            input: {
              type: 'structure',
              required: ['ContainerName', 'MetricPolicy'],
              members: {
                ContainerName: {},
                MetricPolicy: {
                  shape: 'S1a'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          StartAccessLogging: {
            input: {
              type: 'structure',
              required: ['ContainerName'],
              members: {
                ContainerName: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          StopAccessLogging: {
            input: {
              type: 'structure',
              required: ['ContainerName'],
              members: {
                ContainerName: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          TagResource: {
            input: {
              type: 'structure',
              required: ['Resource', 'Tags'],
              members: {
                Resource: {},
                Tags: {
                  shape: 'S3'
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
              required: ['Resource', 'TagKeys'],
              members: {
                Resource: {},
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
          }
        },
        shapes: {
          S3: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Key'],
              members: {
                Key: {},
                Value: {}
              }
            }
          },
          S8: {
            type: 'structure',
            members: {
              Endpoint: {},
              CreationTime: {
                type: 'timestamp'
              },
              ARN: {},
              Name: {},
              Status: {},
              AccessLoggingEnabled: {
                type: 'boolean'
              }
            }
          },
          Sv: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['AllowedOrigins', 'AllowedHeaders'],
              members: {
                AllowedOrigins: {
                  type: 'list',
                  member: {}
                },
                AllowedMethods: {
                  type: 'list',
                  member: {}
                },
                AllowedHeaders: {
                  type: 'list',
                  member: {}
                },
                MaxAgeSeconds: {
                  type: 'integer'
                },
                ExposeHeaders: {
                  type: 'list',
                  member: {}
                }
              }
            }
          },
          S1a: {
            type: 'structure',
            required: ['ContainerLevelMetrics'],
            members: {
              ContainerLevelMetrics: {},
              MetricPolicyRules: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['ObjectGroup', 'ObjectGroupName'],
                  members: {
                    ObjectGroup: {},
                    ObjectGroupName: {}
                  }
                }
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=94c42db1774bd246f04f104af4e1e7bc46a67bce.js.map