System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2017-09-23',
          endpointPrefix: 'cloud9',
          jsonVersion: '1.1',
          protocol: 'json',
          serviceFullName: 'AWS Cloud9',
          serviceId: 'Cloud9',
          signatureVersion: 'v4',
          targetPrefix: 'AWSCloud9WorkspaceManagementService',
          uid: 'cloud9-2017-09-23'
        },
        operations: {
          CreateEnvironmentEC2: {
            input: {
              type: 'structure',
              required: ['name', 'instanceType', 'imageId'],
              members: {
                name: {},
                description: {
                  shape: 'S3'
                },
                clientRequestToken: {},
                instanceType: {},
                subnetId: {},
                imageId: {},
                automaticStopTimeMinutes: {
                  type: 'integer'
                },
                ownerArn: {},
                tags: {
                  shape: 'Sa'
                },
                connectionType: {},
                dryRun: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                environmentId: {}
              }
            },
            idempotent: true
          },
          CreateEnvironmentMembership: {
            input: {
              type: 'structure',
              required: ['environmentId', 'userArn', 'permissions'],
              members: {
                environmentId: {},
                userArn: {},
                permissions: {}
              }
            },
            output: {
              type: 'structure',
              required: ['membership'],
              members: {
                membership: {
                  shape: 'Sl'
                }
              }
            },
            idempotent: true
          },
          DeleteEnvironment: {
            input: {
              type: 'structure',
              required: ['environmentId'],
              members: {
                environmentId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeleteEnvironmentMembership: {
            input: {
              type: 'structure',
              required: ['environmentId', 'userArn'],
              members: {
                environmentId: {},
                userArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DescribeEnvironmentMemberships: {
            input: {
              type: 'structure',
              members: {
                userArn: {},
                environmentId: {},
                permissions: {
                  type: 'list',
                  member: {}
                },
                nextToken: {},
                maxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                memberships: {
                  type: 'list',
                  member: {
                    shape: 'Sl'
                  }
                },
                nextToken: {}
              }
            }
          },
          DescribeEnvironmentStatus: {
            input: {
              type: 'structure',
              required: ['environmentId'],
              members: {
                environmentId: {}
              }
            },
            output: {
              type: 'structure',
              required: ['status', 'message'],
              members: {
                status: {},
                message: {}
              }
            }
          },
          DescribeEnvironments: {
            input: {
              type: 'structure',
              required: ['environmentIds'],
              members: {
                environmentIds: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                environments: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['type', 'arn', 'ownerArn'],
                    members: {
                      id: {},
                      name: {},
                      description: {
                        shape: 'S3'
                      },
                      type: {},
                      connectionType: {},
                      arn: {},
                      ownerArn: {},
                      lifecycle: {
                        type: 'structure',
                        members: {
                          status: {},
                          reason: {},
                          failureResource: {}
                        }
                      },
                      managedCredentialsStatus: {}
                    }
                  }
                }
              }
            }
          },
          ListEnvironments: {
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
                nextToken: {},
                environmentIds: {
                  type: 'list',
                  member: {}
                }
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
                  shape: 'Sa'
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
                  shape: 'Sa'
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
                  member: {
                    shape: 'Sc'
                  },
                  sensitive: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateEnvironment: {
            input: {
              type: 'structure',
              required: ['environmentId'],
              members: {
                environmentId: {},
                name: {},
                description: {
                  shape: 'S3'
                },
                managedCredentialsAction: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          UpdateEnvironmentMembership: {
            input: {
              type: 'structure',
              required: ['environmentId', 'userArn', 'permissions'],
              members: {
                environmentId: {},
                userArn: {},
                permissions: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                membership: {
                  shape: 'Sl'
                }
              }
            },
            idempotent: true
          }
        },
        shapes: {
          S3: {
            type: 'string',
            sensitive: true
          },
          Sa: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Key', 'Value'],
              members: {
                Key: {
                  shape: 'Sc'
                },
                Value: {
                  type: 'string',
                  sensitive: true
                }
              },
              sensitive: true
            },
            sensitive: true
          },
          Sc: {
            type: 'string',
            sensitive: true
          },
          Sl: {
            type: 'structure',
            required: ['permissions', 'userId', 'userArn', 'environmentId'],
            members: {
              permissions: {},
              userId: {},
              userArn: {},
              environmentId: {},
              lastAccess: {
                type: 'timestamp'
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=c027c45bff7b3467458fb40ac3943dfd743d2ca8.js.map