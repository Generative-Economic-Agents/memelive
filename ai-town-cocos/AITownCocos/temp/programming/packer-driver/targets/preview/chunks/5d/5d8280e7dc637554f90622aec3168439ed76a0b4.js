System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2017-04-19',
          endpointPrefix: 'codestar',
          jsonVersion: '1.1',
          protocol: 'json',
          serviceAbbreviation: 'CodeStar',
          serviceFullName: 'AWS CodeStar',
          serviceId: 'CodeStar',
          signatureVersion: 'v4',
          targetPrefix: 'CodeStar_20170419',
          uid: 'codestar-2017-04-19'
        },
        operations: {
          AssociateTeamMember: {
            input: {
              type: 'structure',
              required: ['projectId', 'userArn', 'projectRole'],
              members: {
                projectId: {},
                clientRequestToken: {},
                userArn: {},
                projectRole: {},
                remoteAccessAllowed: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                clientRequestToken: {}
              }
            }
          },
          CreateProject: {
            input: {
              type: 'structure',
              required: ['name', 'id'],
              members: {
                name: {
                  shape: 'S9'
                },
                id: {},
                description: {
                  shape: 'Sa'
                },
                clientRequestToken: {},
                sourceCode: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['source', 'destination'],
                    members: {
                      source: {
                        type: 'structure',
                        required: ['s3'],
                        members: {
                          s3: {
                            shape: 'Se'
                          }
                        }
                      },
                      destination: {
                        type: 'structure',
                        members: {
                          codeCommit: {
                            type: 'structure',
                            required: ['name'],
                            members: {
                              name: {}
                            }
                          },
                          gitHub: {
                            type: 'structure',
                            required: ['name', 'type', 'owner', 'privateRepository', 'issuesEnabled', 'token'],
                            members: {
                              name: {},
                              description: {},
                              type: {},
                              owner: {},
                              privateRepository: {
                                type: 'boolean'
                              },
                              issuesEnabled: {
                                type: 'boolean'
                              },
                              token: {
                                type: 'string',
                                sensitive: true
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                toolchain: {
                  type: 'structure',
                  required: ['source'],
                  members: {
                    source: {
                      type: 'structure',
                      required: ['s3'],
                      members: {
                        s3: {
                          shape: 'Se'
                        }
                      }
                    },
                    roleArn: {},
                    stackParameters: {
                      type: 'map',
                      key: {},
                      value: {
                        type: 'string',
                        sensitive: true
                      }
                    }
                  }
                },
                tags: {
                  shape: 'Sx'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['id', 'arn'],
              members: {
                id: {},
                arn: {},
                clientRequestToken: {},
                projectTemplateId: {}
              }
            }
          },
          CreateUserProfile: {
            input: {
              type: 'structure',
              required: ['userArn', 'displayName', 'emailAddress'],
              members: {
                userArn: {},
                displayName: {
                  shape: 'S14'
                },
                emailAddress: {
                  shape: 'S15'
                },
                sshPublicKey: {}
              }
            },
            output: {
              type: 'structure',
              required: ['userArn'],
              members: {
                userArn: {},
                displayName: {
                  shape: 'S14'
                },
                emailAddress: {
                  shape: 'S15'
                },
                sshPublicKey: {},
                createdTimestamp: {
                  type: 'timestamp'
                },
                lastModifiedTimestamp: {
                  type: 'timestamp'
                }
              }
            }
          },
          DeleteProject: {
            input: {
              type: 'structure',
              required: ['id'],
              members: {
                id: {},
                clientRequestToken: {},
                deleteStack: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                stackId: {},
                projectArn: {}
              }
            }
          },
          DeleteUserProfile: {
            input: {
              type: 'structure',
              required: ['userArn'],
              members: {
                userArn: {}
              }
            },
            output: {
              type: 'structure',
              required: ['userArn'],
              members: {
                userArn: {}
              }
            }
          },
          DescribeProject: {
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
                name: {
                  shape: 'S9'
                },
                id: {},
                arn: {},
                description: {
                  shape: 'Sa'
                },
                clientRequestToken: {},
                createdTimeStamp: {
                  type: 'timestamp'
                },
                stackId: {},
                projectTemplateId: {},
                status: {
                  type: 'structure',
                  required: ['state'],
                  members: {
                    state: {},
                    reason: {}
                  }
                }
              }
            }
          },
          DescribeUserProfile: {
            input: {
              type: 'structure',
              required: ['userArn'],
              members: {
                userArn: {}
              }
            },
            output: {
              type: 'structure',
              required: ['userArn', 'createdTimestamp', 'lastModifiedTimestamp'],
              members: {
                userArn: {},
                displayName: {
                  shape: 'S14'
                },
                emailAddress: {
                  shape: 'S15'
                },
                sshPublicKey: {},
                createdTimestamp: {
                  type: 'timestamp'
                },
                lastModifiedTimestamp: {
                  type: 'timestamp'
                }
              }
            }
          },
          DisassociateTeamMember: {
            input: {
              type: 'structure',
              required: ['projectId', 'userArn'],
              members: {
                projectId: {},
                userArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          ListProjects: {
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
              required: ['projects'],
              members: {
                projects: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      projectId: {},
                      projectArn: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListResources: {
            input: {
              type: 'structure',
              required: ['projectId'],
              members: {
                projectId: {},
                nextToken: {},
                maxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                resources: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['id'],
                    members: {
                      id: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListTagsForProject: {
            input: {
              type: 'structure',
              required: ['id'],
              members: {
                id: {},
                nextToken: {},
                maxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                tags: {
                  shape: 'Sx'
                },
                nextToken: {}
              }
            }
          },
          ListTeamMembers: {
            input: {
              type: 'structure',
              required: ['projectId'],
              members: {
                projectId: {},
                nextToken: {},
                maxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['teamMembers'],
              members: {
                teamMembers: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['userArn', 'projectRole'],
                    members: {
                      userArn: {},
                      projectRole: {},
                      remoteAccessAllowed: {
                        type: 'boolean'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListUserProfiles: {
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
              required: ['userProfiles'],
              members: {
                userProfiles: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      userArn: {},
                      displayName: {
                        shape: 'S14'
                      },
                      emailAddress: {
                        shape: 'S15'
                      },
                      sshPublicKey: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          TagProject: {
            input: {
              type: 'structure',
              required: ['id', 'tags'],
              members: {
                id: {},
                tags: {
                  shape: 'Sx'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                tags: {
                  shape: 'Sx'
                }
              }
            }
          },
          UntagProject: {
            input: {
              type: 'structure',
              required: ['id', 'tags'],
              members: {
                id: {},
                tags: {
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
          UpdateProject: {
            input: {
              type: 'structure',
              required: ['id'],
              members: {
                id: {},
                name: {
                  shape: 'S9'
                },
                description: {
                  shape: 'Sa'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateTeamMember: {
            input: {
              type: 'structure',
              required: ['projectId', 'userArn'],
              members: {
                projectId: {},
                userArn: {},
                projectRole: {},
                remoteAccessAllowed: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                userArn: {},
                projectRole: {},
                remoteAccessAllowed: {
                  type: 'boolean'
                }
              }
            }
          },
          UpdateUserProfile: {
            input: {
              type: 'structure',
              required: ['userArn'],
              members: {
                userArn: {},
                displayName: {
                  shape: 'S14'
                },
                emailAddress: {
                  shape: 'S15'
                },
                sshPublicKey: {}
              }
            },
            output: {
              type: 'structure',
              required: ['userArn'],
              members: {
                userArn: {},
                displayName: {
                  shape: 'S14'
                },
                emailAddress: {
                  shape: 'S15'
                },
                sshPublicKey: {},
                createdTimestamp: {
                  type: 'timestamp'
                },
                lastModifiedTimestamp: {
                  type: 'timestamp'
                }
              }
            }
          }
        },
        shapes: {
          S9: {
            type: 'string',
            sensitive: true
          },
          Sa: {
            type: 'string',
            sensitive: true
          },
          Se: {
            type: 'structure',
            members: {
              bucketName: {},
              bucketKey: {}
            }
          },
          Sx: {
            type: 'map',
            key: {},
            value: {}
          },
          S14: {
            type: 'string',
            sensitive: true
          },
          S15: {
            type: 'string',
            sensitive: true
          }
        }
      });
    }
  };
});
//# sourceMappingURL=5d8280e7dc637554f90622aec3168439ed76a0b4.js.map