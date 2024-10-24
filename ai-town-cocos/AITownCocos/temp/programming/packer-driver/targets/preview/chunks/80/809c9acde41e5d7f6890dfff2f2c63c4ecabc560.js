System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2020-12-01',
          endpointPrefix: 'fis',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceAbbreviation: 'FIS',
          serviceFullName: 'AWS Fault Injection Simulator',
          serviceId: 'fis',
          signatureVersion: 'v4',
          signingName: 'fis',
          uid: 'fis-2020-12-01'
        },
        operations: {
          CreateExperimentTemplate: {
            http: {
              requestUri: '/experimentTemplates',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['clientToken', 'description', 'stopConditions', 'actions', 'roleArn'],
              members: {
                clientToken: {
                  idempotencyToken: true
                },
                description: {},
                stopConditions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['source'],
                    members: {
                      source: {},
                      value: {}
                    }
                  }
                },
                targets: {
                  type: 'map',
                  key: {},
                  value: {
                    type: 'structure',
                    required: ['resourceType', 'selectionMode'],
                    members: {
                      resourceType: {},
                      resourceArns: {
                        shape: 'Sc'
                      },
                      resourceTags: {
                        shape: 'Se'
                      },
                      filters: {
                        shape: 'Sh'
                      },
                      selectionMode: {},
                      parameters: {
                        shape: 'Sn'
                      }
                    }
                  }
                },
                actions: {
                  type: 'map',
                  key: {},
                  value: {
                    type: 'structure',
                    required: ['actionId'],
                    members: {
                      actionId: {},
                      description: {},
                      parameters: {
                        shape: 'Sv'
                      },
                      targets: {
                        shape: 'Sy'
                      },
                      startAfter: {
                        shape: 'S10'
                      }
                    }
                  }
                },
                roleArn: {},
                tags: {
                  shape: 'Se'
                },
                logConfiguration: {
                  type: 'structure',
                  required: ['logSchemaVersion'],
                  members: {
                    cloudWatchLogsConfiguration: {
                      shape: 'S14'
                    },
                    s3Configuration: {
                      shape: 'S16'
                    },
                    logSchemaVersion: {
                      type: 'integer'
                    }
                  }
                },
                experimentOptions: {
                  type: 'structure',
                  members: {
                    accountTargeting: {},
                    emptyTargetResolutionMode: {}
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                experimentTemplate: {
                  shape: 'S1e'
                }
              }
            }
          },
          CreateTargetAccountConfiguration: {
            http: {
              requestUri: '/experimentTemplates/{id}/targetAccountConfigurations/{accountId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['experimentTemplateId', 'accountId', 'roleArn'],
              members: {
                clientToken: {
                  idempotencyToken: true
                },
                experimentTemplateId: {
                  location: 'uri',
                  locationName: 'id'
                },
                accountId: {
                  location: 'uri',
                  locationName: 'accountId'
                },
                roleArn: {},
                description: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                targetAccountConfiguration: {
                  shape: 'S1z'
                }
              }
            }
          },
          DeleteExperimentTemplate: {
            http: {
              method: 'DELETE',
              requestUri: '/experimentTemplates/{id}',
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
                experimentTemplate: {
                  shape: 'S1e'
                }
              }
            }
          },
          DeleteTargetAccountConfiguration: {
            http: {
              method: 'DELETE',
              requestUri: '/experimentTemplates/{id}/targetAccountConfigurations/{accountId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['experimentTemplateId', 'accountId'],
              members: {
                experimentTemplateId: {
                  location: 'uri',
                  locationName: 'id'
                },
                accountId: {
                  location: 'uri',
                  locationName: 'accountId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                targetAccountConfiguration: {
                  shape: 'S1z'
                }
              }
            }
          },
          GetAction: {
            http: {
              method: 'GET',
              requestUri: '/actions/{id}',
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
                action: {
                  type: 'structure',
                  members: {
                    id: {},
                    arn: {},
                    description: {},
                    parameters: {
                      type: 'map',
                      key: {},
                      value: {
                        type: 'structure',
                        members: {
                          description: {},
                          required: {
                            type: 'boolean'
                          }
                        }
                      }
                    },
                    targets: {
                      shape: 'S2d'
                    },
                    tags: {
                      shape: 'Se'
                    }
                  }
                }
              }
            }
          },
          GetExperiment: {
            http: {
              method: 'GET',
              requestUri: '/experiments/{id}',
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
                experiment: {
                  shape: 'S2j'
                }
              }
            }
          },
          GetExperimentTargetAccountConfiguration: {
            http: {
              method: 'GET',
              requestUri: '/experiments/{id}/targetAccountConfigurations/{accountId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['experimentId', 'accountId'],
              members: {
                experimentId: {
                  location: 'uri',
                  locationName: 'id'
                },
                accountId: {
                  location: 'uri',
                  locationName: 'accountId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                targetAccountConfiguration: {
                  type: 'structure',
                  members: {
                    roleArn: {},
                    accountId: {},
                    description: {}
                  }
                }
              }
            }
          },
          GetExperimentTemplate: {
            http: {
              method: 'GET',
              requestUri: '/experimentTemplates/{id}',
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
                experimentTemplate: {
                  shape: 'S1e'
                }
              }
            }
          },
          GetTargetAccountConfiguration: {
            http: {
              method: 'GET',
              requestUri: '/experimentTemplates/{id}/targetAccountConfigurations/{accountId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['experimentTemplateId', 'accountId'],
              members: {
                experimentTemplateId: {
                  location: 'uri',
                  locationName: 'id'
                },
                accountId: {
                  location: 'uri',
                  locationName: 'accountId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                targetAccountConfiguration: {
                  shape: 'S1z'
                }
              }
            }
          },
          GetTargetResourceType: {
            http: {
              method: 'GET',
              requestUri: '/targetResourceTypes/{resourceType}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['resourceType'],
              members: {
                resourceType: {
                  location: 'uri',
                  locationName: 'resourceType'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                targetResourceType: {
                  type: 'structure',
                  members: {
                    resourceType: {},
                    description: {},
                    parameters: {
                      type: 'map',
                      key: {},
                      value: {
                        type: 'structure',
                        members: {
                          description: {},
                          required: {
                            type: 'boolean'
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          ListActions: {
            http: {
              method: 'GET',
              requestUri: '/actions',
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
                actions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      id: {},
                      arn: {},
                      description: {},
                      targets: {
                        shape: 'S2d'
                      },
                      tags: {
                        shape: 'Se'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListExperimentResolvedTargets: {
            http: {
              method: 'GET',
              requestUri: '/experiments/{id}/resolvedTargets',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['experimentId'],
              members: {
                experimentId: {
                  location: 'uri',
                  locationName: 'id'
                },
                maxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                targetName: {
                  location: 'querystring',
                  locationName: 'targetName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                resolvedTargets: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      resourceType: {},
                      targetName: {},
                      targetInformation: {
                        type: 'map',
                        key: {},
                        value: {}
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListExperimentTargetAccountConfigurations: {
            http: {
              method: 'GET',
              requestUri: '/experiments/{id}/targetAccountConfigurations',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['experimentId'],
              members: {
                experimentId: {
                  location: 'uri',
                  locationName: 'id'
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
                targetAccountConfigurations: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      roleArn: {},
                      accountId: {},
                      description: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListExperimentTemplates: {
            http: {
              method: 'GET',
              requestUri: '/experimentTemplates',
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
                experimentTemplates: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      id: {},
                      arn: {},
                      description: {},
                      creationTime: {
                        type: 'timestamp'
                      },
                      lastUpdateTime: {
                        type: 'timestamp'
                      },
                      tags: {
                        shape: 'Se'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListExperiments: {
            http: {
              method: 'GET',
              requestUri: '/experiments',
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
                },
                experimentTemplateId: {
                  location: 'querystring',
                  locationName: 'experimentTemplateId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                experiments: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      id: {},
                      arn: {},
                      experimentTemplateId: {},
                      state: {
                        shape: 'S2k'
                      },
                      creationTime: {
                        type: 'timestamp'
                      },
                      tags: {
                        shape: 'Se'
                      },
                      experimentOptions: {
                        shape: 'S3m'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListTagsForResource: {
            http: {
              method: 'GET',
              requestUri: '/tags/{resourceArn}',
              responseCode: 200
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
                  shape: 'Se'
                }
              }
            }
          },
          ListTargetAccountConfigurations: {
            http: {
              method: 'GET',
              requestUri: '/experimentTemplates/{id}/targetAccountConfigurations',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['experimentTemplateId'],
              members: {
                experimentTemplateId: {
                  location: 'uri',
                  locationName: 'id'
                },
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
                targetAccountConfigurations: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      roleArn: {},
                      accountId: {},
                      description: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListTargetResourceTypes: {
            http: {
              method: 'GET',
              requestUri: '/targetResourceTypes',
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
                targetResourceTypes: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      resourceType: {},
                      description: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          StartExperiment: {
            http: {
              requestUri: '/experiments',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['clientToken', 'experimentTemplateId'],
              members: {
                clientToken: {
                  idempotencyToken: true
                },
                experimentTemplateId: {},
                experimentOptions: {
                  type: 'structure',
                  members: {
                    actionsMode: {}
                  }
                },
                tags: {
                  shape: 'Se'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                experiment: {
                  shape: 'S2j'
                }
              }
            }
          },
          StopExperiment: {
            http: {
              method: 'DELETE',
              requestUri: '/experiments/{id}',
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
                experiment: {
                  shape: 'S2j'
                }
              }
            }
          },
          TagResource: {
            http: {
              requestUri: '/tags/{resourceArn}',
              responseCode: 200
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
                  shape: 'Se'
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
              requestUri: '/tags/{resourceArn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['resourceArn'],
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
          UpdateExperimentTemplate: {
            http: {
              method: 'PATCH',
              requestUri: '/experimentTemplates/{id}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['id'],
              members: {
                id: {
                  location: 'uri',
                  locationName: 'id'
                },
                description: {},
                stopConditions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['source'],
                    members: {
                      source: {},
                      value: {}
                    }
                  }
                },
                targets: {
                  type: 'map',
                  key: {},
                  value: {
                    type: 'structure',
                    required: ['resourceType', 'selectionMode'],
                    members: {
                      resourceType: {},
                      resourceArns: {
                        shape: 'Sc'
                      },
                      resourceTags: {
                        shape: 'Se'
                      },
                      filters: {
                        shape: 'Sh'
                      },
                      selectionMode: {},
                      parameters: {
                        shape: 'Sn'
                      }
                    }
                  }
                },
                actions: {
                  type: 'map',
                  key: {},
                  value: {
                    type: 'structure',
                    members: {
                      actionId: {},
                      description: {},
                      parameters: {
                        shape: 'Sv'
                      },
                      targets: {
                        shape: 'Sy'
                      },
                      startAfter: {
                        shape: 'S10'
                      }
                    }
                  }
                },
                roleArn: {},
                logConfiguration: {
                  type: 'structure',
                  members: {
                    cloudWatchLogsConfiguration: {
                      shape: 'S14'
                    },
                    s3Configuration: {
                      shape: 'S16'
                    },
                    logSchemaVersion: {
                      type: 'integer'
                    }
                  }
                },
                experimentOptions: {
                  type: 'structure',
                  members: {
                    emptyTargetResolutionMode: {}
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                experimentTemplate: {
                  shape: 'S1e'
                }
              }
            }
          },
          UpdateTargetAccountConfiguration: {
            http: {
              method: 'PATCH',
              requestUri: '/experimentTemplates/{id}/targetAccountConfigurations/{accountId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['experimentTemplateId', 'accountId'],
              members: {
                experimentTemplateId: {
                  location: 'uri',
                  locationName: 'id'
                },
                accountId: {
                  location: 'uri',
                  locationName: 'accountId'
                },
                roleArn: {},
                description: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                targetAccountConfiguration: {
                  shape: 'S1z'
                }
              }
            }
          }
        },
        shapes: {
          Sc: {
            type: 'list',
            member: {}
          },
          Se: {
            type: 'map',
            key: {},
            value: {}
          },
          Sh: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['path', 'values'],
              members: {
                path: {},
                values: {
                  shape: 'Sk'
                }
              }
            }
          },
          Sk: {
            type: 'list',
            member: {}
          },
          Sn: {
            type: 'map',
            key: {},
            value: {}
          },
          Sv: {
            type: 'map',
            key: {},
            value: {}
          },
          Sy: {
            type: 'map',
            key: {},
            value: {}
          },
          S10: {
            type: 'list',
            member: {}
          },
          S14: {
            type: 'structure',
            required: ['logGroupArn'],
            members: {
              logGroupArn: {}
            }
          },
          S16: {
            type: 'structure',
            required: ['bucketName'],
            members: {
              bucketName: {},
              prefix: {}
            }
          },
          S1e: {
            type: 'structure',
            members: {
              id: {},
              arn: {},
              description: {},
              targets: {
                type: 'map',
                key: {},
                value: {
                  type: 'structure',
                  members: {
                    resourceType: {},
                    resourceArns: {
                      shape: 'Sc'
                    },
                    resourceTags: {
                      shape: 'Se'
                    },
                    filters: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          path: {},
                          values: {
                            shape: 'Sk'
                          }
                        }
                      }
                    },
                    selectionMode: {},
                    parameters: {
                      shape: 'Sn'
                    }
                  }
                }
              },
              actions: {
                type: 'map',
                key: {},
                value: {
                  type: 'structure',
                  members: {
                    actionId: {},
                    description: {},
                    parameters: {
                      shape: 'Sv'
                    },
                    targets: {
                      shape: 'Sy'
                    },
                    startAfter: {
                      shape: 'S10'
                    }
                  }
                }
              },
              stopConditions: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    source: {},
                    value: {}
                  }
                }
              },
              creationTime: {
                type: 'timestamp'
              },
              lastUpdateTime: {
                type: 'timestamp'
              },
              roleArn: {},
              tags: {
                shape: 'Se'
              },
              logConfiguration: {
                type: 'structure',
                members: {
                  cloudWatchLogsConfiguration: {
                    type: 'structure',
                    members: {
                      logGroupArn: {}
                    }
                  },
                  s3Configuration: {
                    type: 'structure',
                    members: {
                      bucketName: {},
                      prefix: {}
                    }
                  },
                  logSchemaVersion: {
                    type: 'integer'
                  }
                }
              },
              experimentOptions: {
                type: 'structure',
                members: {
                  accountTargeting: {},
                  emptyTargetResolutionMode: {}
                }
              },
              targetAccountConfigurationsCount: {
                type: 'long'
              }
            }
          },
          S1z: {
            type: 'structure',
            members: {
              roleArn: {},
              accountId: {},
              description: {}
            }
          },
          S2d: {
            type: 'map',
            key: {},
            value: {
              type: 'structure',
              members: {
                resourceType: {}
              }
            }
          },
          S2j: {
            type: 'structure',
            members: {
              id: {},
              arn: {},
              experimentTemplateId: {},
              roleArn: {},
              state: {
                shape: 'S2k'
              },
              targets: {
                type: 'map',
                key: {},
                value: {
                  type: 'structure',
                  members: {
                    resourceType: {},
                    resourceArns: {
                      shape: 'Sc'
                    },
                    resourceTags: {
                      shape: 'Se'
                    },
                    filters: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          path: {},
                          values: {
                            type: 'list',
                            member: {}
                          }
                        }
                      }
                    },
                    selectionMode: {},
                    parameters: {
                      type: 'map',
                      key: {},
                      value: {}
                    }
                  }
                }
              },
              actions: {
                type: 'map',
                key: {},
                value: {
                  type: 'structure',
                  members: {
                    actionId: {},
                    description: {},
                    parameters: {
                      type: 'map',
                      key: {},
                      value: {}
                    },
                    targets: {
                      type: 'map',
                      key: {},
                      value: {}
                    },
                    startAfter: {
                      type: 'list',
                      member: {}
                    },
                    state: {
                      type: 'structure',
                      members: {
                        status: {},
                        reason: {}
                      }
                    },
                    startTime: {
                      type: 'timestamp'
                    },
                    endTime: {
                      type: 'timestamp'
                    }
                  }
                }
              },
              stopConditions: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    source: {},
                    value: {}
                  }
                }
              },
              creationTime: {
                type: 'timestamp'
              },
              startTime: {
                type: 'timestamp'
              },
              endTime: {
                type: 'timestamp'
              },
              tags: {
                shape: 'Se'
              },
              logConfiguration: {
                type: 'structure',
                members: {
                  cloudWatchLogsConfiguration: {
                    type: 'structure',
                    members: {
                      logGroupArn: {}
                    }
                  },
                  s3Configuration: {
                    type: 'structure',
                    members: {
                      bucketName: {},
                      prefix: {}
                    }
                  },
                  logSchemaVersion: {
                    type: 'integer'
                  }
                }
              },
              experimentOptions: {
                shape: 'S3m'
              },
              targetAccountConfigurationsCount: {
                type: 'long'
              }
            }
          },
          S2k: {
            type: 'structure',
            members: {
              status: {},
              reason: {}
            }
          },
          S3m: {
            type: 'structure',
            members: {
              accountTargeting: {},
              emptyTargetResolutionMode: {},
              actionsMode: {}
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=809c9acde41e5d7f6890dfff2f2c63c4ecabc560.js.map