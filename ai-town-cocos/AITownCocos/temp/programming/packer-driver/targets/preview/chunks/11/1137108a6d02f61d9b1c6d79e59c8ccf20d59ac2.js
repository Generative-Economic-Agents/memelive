System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2019-11-01',
          endpointPrefix: 'access-analyzer',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceFullName: 'Access Analyzer',
          serviceId: 'AccessAnalyzer',
          signatureVersion: 'v4',
          signingName: 'access-analyzer',
          uid: 'accessanalyzer-2019-11-01'
        },
        operations: {
          ApplyArchiveRule: {
            http: {
              method: 'PUT',
              requestUri: '/archive-rule',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['analyzerArn', 'ruleName'],
              members: {
                analyzerArn: {},
                ruleName: {},
                clientToken: {
                  idempotencyToken: true
                }
              }
            },
            idempotent: true
          },
          CancelPolicyGeneration: {
            http: {
              method: 'PUT',
              requestUri: '/policy/generation/{jobId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['jobId'],
              members: {
                jobId: {
                  location: 'uri',
                  locationName: 'jobId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          CheckAccessNotGranted: {
            http: {
              requestUri: '/policy/check-access-not-granted',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['policyDocument', 'access', 'policyType'],
              members: {
                policyDocument: {
                  shape: 'S9'
                },
                access: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['actions'],
                    members: {
                      actions: {
                        type: 'list',
                        member: {}
                      }
                    }
                  }
                },
                policyType: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                result: {},
                message: {},
                reasons: {
                  shape: 'Sh'
                }
              }
            }
          },
          CheckNoNewAccess: {
            http: {
              requestUri: '/policy/check-no-new-access',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['newPolicyDocument', 'existingPolicyDocument', 'policyType'],
              members: {
                newPolicyDocument: {
                  shape: 'S9'
                },
                existingPolicyDocument: {
                  shape: 'S9'
                },
                policyType: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                result: {},
                message: {},
                reasons: {
                  shape: 'Sh'
                }
              }
            }
          },
          CreateAccessPreview: {
            http: {
              method: 'PUT',
              requestUri: '/access-preview',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['analyzerArn', 'configurations'],
              members: {
                analyzerArn: {},
                configurations: {
                  shape: 'So'
                },
                clientToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              required: ['id'],
              members: {
                id: {}
              }
            },
            idempotent: true
          },
          CreateAnalyzer: {
            http: {
              method: 'PUT',
              requestUri: '/analyzer',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['analyzerName', 'type'],
              members: {
                analyzerName: {},
                type: {},
                archiveRules: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['ruleName', 'filter'],
                    members: {
                      ruleName: {},
                      filter: {
                        shape: 'S2x'
                      }
                    }
                  }
                },
                tags: {
                  shape: 'S30'
                },
                clientToken: {
                  idempotencyToken: true
                },
                configuration: {
                  shape: 'S31'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                arn: {}
              }
            },
            idempotent: true
          },
          CreateArchiveRule: {
            http: {
              method: 'PUT',
              requestUri: '/analyzer/{analyzerName}/archive-rule',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['analyzerName', 'ruleName', 'filter'],
              members: {
                analyzerName: {
                  location: 'uri',
                  locationName: 'analyzerName'
                },
                ruleName: {},
                filter: {
                  shape: 'S2x'
                },
                clientToken: {
                  idempotencyToken: true
                }
              }
            },
            idempotent: true
          },
          DeleteAnalyzer: {
            http: {
              method: 'DELETE',
              requestUri: '/analyzer/{analyzerName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['analyzerName'],
              members: {
                analyzerName: {
                  location: 'uri',
                  locationName: 'analyzerName'
                },
                clientToken: {
                  idempotencyToken: true,
                  location: 'querystring',
                  locationName: 'clientToken'
                }
              }
            },
            idempotent: true
          },
          DeleteArchiveRule: {
            http: {
              method: 'DELETE',
              requestUri: '/analyzer/{analyzerName}/archive-rule/{ruleName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['analyzerName', 'ruleName'],
              members: {
                analyzerName: {
                  location: 'uri',
                  locationName: 'analyzerName'
                },
                ruleName: {
                  location: 'uri',
                  locationName: 'ruleName'
                },
                clientToken: {
                  idempotencyToken: true,
                  location: 'querystring',
                  locationName: 'clientToken'
                }
              }
            },
            idempotent: true
          },
          GetAccessPreview: {
            http: {
              method: 'GET',
              requestUri: '/access-preview/{accessPreviewId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['accessPreviewId', 'analyzerArn'],
              members: {
                accessPreviewId: {
                  location: 'uri',
                  locationName: 'accessPreviewId'
                },
                analyzerArn: {
                  location: 'querystring',
                  locationName: 'analyzerArn'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['accessPreview'],
              members: {
                accessPreview: {
                  type: 'structure',
                  required: ['id', 'analyzerArn', 'configurations', 'createdAt', 'status'],
                  members: {
                    id: {},
                    analyzerArn: {},
                    configurations: {
                      shape: 'So'
                    },
                    createdAt: {
                      shape: 'S3a'
                    },
                    status: {},
                    statusReason: {
                      shape: 'S3c'
                    }
                  }
                }
              }
            }
          },
          GetAnalyzedResource: {
            http: {
              method: 'GET',
              requestUri: '/analyzed-resource',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['analyzerArn', 'resourceArn'],
              members: {
                analyzerArn: {
                  location: 'querystring',
                  locationName: 'analyzerArn'
                },
                resourceArn: {
                  location: 'querystring',
                  locationName: 'resourceArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                resource: {
                  type: 'structure',
                  required: ['resourceArn', 'resourceType', 'createdAt', 'analyzedAt', 'updatedAt', 'isPublic', 'resourceOwnerAccount'],
                  members: {
                    resourceArn: {},
                    resourceType: {},
                    createdAt: {
                      shape: 'S3a'
                    },
                    analyzedAt: {
                      shape: 'S3a'
                    },
                    updatedAt: {
                      shape: 'S3a'
                    },
                    isPublic: {
                      type: 'boolean'
                    },
                    actions: {
                      shape: 'S3j'
                    },
                    sharedVia: {
                      type: 'list',
                      member: {}
                    },
                    status: {},
                    resourceOwnerAccount: {},
                    error: {}
                  }
                }
              }
            }
          },
          GetAnalyzer: {
            http: {
              method: 'GET',
              requestUri: '/analyzer/{analyzerName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['analyzerName'],
              members: {
                analyzerName: {
                  location: 'uri',
                  locationName: 'analyzerName'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['analyzer'],
              members: {
                analyzer: {
                  shape: 'S3o'
                }
              }
            }
          },
          GetArchiveRule: {
            http: {
              method: 'GET',
              requestUri: '/analyzer/{analyzerName}/archive-rule/{ruleName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['analyzerName', 'ruleName'],
              members: {
                analyzerName: {
                  location: 'uri',
                  locationName: 'analyzerName'
                },
                ruleName: {
                  location: 'uri',
                  locationName: 'ruleName'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['archiveRule'],
              members: {
                archiveRule: {
                  shape: 'S3u'
                }
              }
            }
          },
          GetFinding: {
            http: {
              method: 'GET',
              requestUri: '/finding/{id}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['analyzerArn', 'id'],
              members: {
                analyzerArn: {
                  location: 'querystring',
                  locationName: 'analyzerArn'
                },
                id: {
                  location: 'uri',
                  locationName: 'id'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                finding: {
                  type: 'structure',
                  required: ['id', 'resourceType', 'condition', 'createdAt', 'analyzedAt', 'updatedAt', 'status', 'resourceOwnerAccount'],
                  members: {
                    id: {},
                    principal: {
                      shape: 'S3z'
                    },
                    action: {
                      shape: 'S3j'
                    },
                    resource: {},
                    isPublic: {
                      type: 'boolean'
                    },
                    resourceType: {},
                    condition: {
                      shape: 'S40'
                    },
                    createdAt: {
                      shape: 'S3a'
                    },
                    analyzedAt: {
                      shape: 'S3a'
                    },
                    updatedAt: {
                      shape: 'S3a'
                    },
                    status: {},
                    resourceOwnerAccount: {},
                    error: {},
                    sources: {
                      shape: 'S41'
                    }
                  }
                }
              }
            }
          },
          GetFindingV2: {
            http: {
              method: 'GET',
              requestUri: '/findingv2/{id}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['analyzerArn', 'id'],
              members: {
                analyzerArn: {
                  location: 'querystring',
                  locationName: 'analyzerArn'
                },
                id: {
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
              required: ['analyzedAt', 'createdAt', 'id', 'resourceType', 'resourceOwnerAccount', 'status', 'updatedAt', 'findingDetails'],
              members: {
                analyzedAt: {
                  shape: 'S3a'
                },
                createdAt: {
                  shape: 'S3a'
                },
                error: {},
                id: {},
                nextToken: {},
                resource: {},
                resourceType: {},
                resourceOwnerAccount: {},
                status: {},
                updatedAt: {
                  shape: 'S3a'
                },
                findingDetails: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      externalAccessDetails: {
                        type: 'structure',
                        required: ['condition'],
                        members: {
                          action: {
                            shape: 'S3j'
                          },
                          condition: {
                            shape: 'S40'
                          },
                          isPublic: {
                            type: 'boolean'
                          },
                          principal: {
                            shape: 'S3z'
                          },
                          sources: {
                            shape: 'S41'
                          }
                        }
                      },
                      unusedPermissionDetails: {
                        type: 'structure',
                        required: ['serviceNamespace'],
                        members: {
                          actions: {
                            type: 'list',
                            member: {
                              type: 'structure',
                              required: ['action'],
                              members: {
                                action: {},
                                lastAccessed: {
                                  shape: 'S3a'
                                }
                              }
                            }
                          },
                          serviceNamespace: {},
                          lastAccessed: {
                            shape: 'S3a'
                          }
                        }
                      },
                      unusedIamUserAccessKeyDetails: {
                        type: 'structure',
                        required: ['accessKeyId'],
                        members: {
                          accessKeyId: {},
                          lastAccessed: {
                            shape: 'S3a'
                          }
                        }
                      },
                      unusedIamRoleDetails: {
                        type: 'structure',
                        members: {
                          lastAccessed: {
                            shape: 'S3a'
                          }
                        }
                      },
                      unusedIamUserPasswordDetails: {
                        type: 'structure',
                        members: {
                          lastAccessed: {
                            shape: 'S3a'
                          }
                        }
                      }
                    },
                    union: true
                  }
                },
                findingType: {}
              }
            }
          },
          GetGeneratedPolicy: {
            http: {
              method: 'GET',
              requestUri: '/policy/generation/{jobId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['jobId'],
              members: {
                jobId: {
                  location: 'uri',
                  locationName: 'jobId'
                },
                includeResourcePlaceholders: {
                  location: 'querystring',
                  locationName: 'includeResourcePlaceholders',
                  type: 'boolean'
                },
                includeServiceLevelTemplate: {
                  location: 'querystring',
                  locationName: 'includeServiceLevelTemplate',
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['jobDetails', 'generatedPolicyResult'],
              members: {
                jobDetails: {
                  type: 'structure',
                  required: ['jobId', 'status', 'startedOn'],
                  members: {
                    jobId: {},
                    status: {},
                    startedOn: {
                      shape: 'S3a'
                    },
                    completedOn: {
                      shape: 'S3a'
                    },
                    jobError: {
                      type: 'structure',
                      required: ['code', 'message'],
                      members: {
                        code: {},
                        message: {}
                      }
                    }
                  }
                },
                generatedPolicyResult: {
                  type: 'structure',
                  required: ['properties'],
                  members: {
                    properties: {
                      type: 'structure',
                      required: ['principalArn'],
                      members: {
                        isComplete: {
                          type: 'boolean'
                        },
                        principalArn: {},
                        cloudTrailProperties: {
                          type: 'structure',
                          required: ['trailProperties', 'startTime', 'endTime'],
                          members: {
                            trailProperties: {
                              type: 'list',
                              member: {
                                type: 'structure',
                                required: ['cloudTrailArn'],
                                members: {
                                  cloudTrailArn: {},
                                  regions: {
                                    shape: 'S4v'
                                  },
                                  allRegions: {
                                    type: 'boolean'
                                  }
                                }
                              }
                            },
                            startTime: {
                              shape: 'S3a'
                            },
                            endTime: {
                              shape: 'S3a'
                            }
                          }
                        }
                      }
                    },
                    generatedPolicies: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        required: ['policy'],
                        members: {
                          policy: {}
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          ListAccessPreviewFindings: {
            http: {
              requestUri: '/access-preview/{accessPreviewId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['accessPreviewId', 'analyzerArn'],
              members: {
                accessPreviewId: {
                  location: 'uri',
                  locationName: 'accessPreviewId'
                },
                analyzerArn: {},
                filter: {
                  shape: 'S2x'
                },
                nextToken: {},
                maxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['findings'],
              members: {
                findings: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['id', 'resourceType', 'createdAt', 'changeType', 'status', 'resourceOwnerAccount'],
                    members: {
                      id: {},
                      existingFindingId: {},
                      existingFindingStatus: {},
                      principal: {
                        shape: 'S3z'
                      },
                      action: {
                        shape: 'S3j'
                      },
                      condition: {
                        shape: 'S40'
                      },
                      resource: {},
                      isPublic: {
                        type: 'boolean'
                      },
                      resourceType: {},
                      createdAt: {
                        shape: 'S3a'
                      },
                      changeType: {},
                      status: {},
                      resourceOwnerAccount: {},
                      error: {},
                      sources: {
                        shape: 'S41'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListAccessPreviews: {
            http: {
              method: 'GET',
              requestUri: '/access-preview',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['analyzerArn'],
              members: {
                analyzerArn: {
                  location: 'querystring',
                  locationName: 'analyzerArn'
                },
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                maxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['accessPreviews'],
              members: {
                accessPreviews: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['id', 'analyzerArn', 'createdAt', 'status'],
                    members: {
                      id: {},
                      analyzerArn: {},
                      createdAt: {
                        shape: 'S3a'
                      },
                      status: {},
                      statusReason: {
                        shape: 'S3c'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListAnalyzedResources: {
            http: {
              requestUri: '/analyzed-resource',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['analyzerArn'],
              members: {
                analyzerArn: {},
                resourceType: {},
                nextToken: {},
                maxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['analyzedResources'],
              members: {
                analyzedResources: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['resourceArn', 'resourceOwnerAccount', 'resourceType'],
                    members: {
                      resourceArn: {},
                      resourceOwnerAccount: {},
                      resourceType: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListAnalyzers: {
            http: {
              method: 'GET',
              requestUri: '/analyzer',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                maxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                type: {
                  location: 'querystring',
                  locationName: 'type'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['analyzers'],
              members: {
                analyzers: {
                  type: 'list',
                  member: {
                    shape: 'S3o'
                  }
                },
                nextToken: {}
              }
            }
          },
          ListArchiveRules: {
            http: {
              method: 'GET',
              requestUri: '/analyzer/{analyzerName}/archive-rule',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['analyzerName'],
              members: {
                analyzerName: {
                  location: 'uri',
                  locationName: 'analyzerName'
                },
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                maxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['archiveRules'],
              members: {
                archiveRules: {
                  type: 'list',
                  member: {
                    shape: 'S3u'
                  }
                },
                nextToken: {}
              }
            }
          },
          ListFindings: {
            http: {
              requestUri: '/finding',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['analyzerArn'],
              members: {
                analyzerArn: {},
                filter: {
                  shape: 'S2x'
                },
                sort: {
                  shape: 'S5j'
                },
                nextToken: {},
                maxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['findings'],
              members: {
                findings: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['id', 'resourceType', 'condition', 'createdAt', 'analyzedAt', 'updatedAt', 'status', 'resourceOwnerAccount'],
                    members: {
                      id: {},
                      principal: {
                        shape: 'S3z'
                      },
                      action: {
                        shape: 'S3j'
                      },
                      resource: {},
                      isPublic: {
                        type: 'boolean'
                      },
                      resourceType: {},
                      condition: {
                        shape: 'S40'
                      },
                      createdAt: {
                        shape: 'S3a'
                      },
                      analyzedAt: {
                        shape: 'S3a'
                      },
                      updatedAt: {
                        shape: 'S3a'
                      },
                      status: {},
                      resourceOwnerAccount: {},
                      error: {},
                      sources: {
                        shape: 'S41'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListFindingsV2: {
            http: {
              requestUri: '/findingv2',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['analyzerArn'],
              members: {
                analyzerArn: {},
                filter: {
                  shape: 'S2x'
                },
                maxResults: {
                  type: 'integer'
                },
                nextToken: {},
                sort: {
                  shape: 'S5j'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['findings'],
              members: {
                findings: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['analyzedAt', 'createdAt', 'id', 'resourceType', 'resourceOwnerAccount', 'status', 'updatedAt'],
                    members: {
                      analyzedAt: {
                        shape: 'S3a'
                      },
                      createdAt: {
                        shape: 'S3a'
                      },
                      error: {},
                      id: {},
                      resource: {},
                      resourceType: {},
                      resourceOwnerAccount: {},
                      status: {},
                      updatedAt: {
                        shape: 'S3a'
                      },
                      findingType: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListPolicyGenerations: {
            http: {
              method: 'GET',
              requestUri: '/policy/generation',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                principalArn: {
                  location: 'querystring',
                  locationName: 'principalArn'
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
              required: ['policyGenerations'],
              members: {
                policyGenerations: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['jobId', 'principalArn', 'status', 'startedOn'],
                    members: {
                      jobId: {},
                      principalArn: {},
                      status: {},
                      startedOn: {
                        shape: 'S3a'
                      },
                      completedOn: {
                        shape: 'S3a'
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
                  shape: 'S30'
                }
              }
            }
          },
          StartPolicyGeneration: {
            http: {
              method: 'PUT',
              requestUri: '/policy/generation',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['policyGenerationDetails'],
              members: {
                policyGenerationDetails: {
                  type: 'structure',
                  required: ['principalArn'],
                  members: {
                    principalArn: {}
                  }
                },
                cloudTrailDetails: {
                  type: 'structure',
                  required: ['trails', 'accessRole', 'startTime'],
                  members: {
                    trails: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        required: ['cloudTrailArn'],
                        members: {
                          cloudTrailArn: {},
                          regions: {
                            shape: 'S4v'
                          },
                          allRegions: {
                            type: 'boolean'
                          }
                        }
                      }
                    },
                    accessRole: {},
                    startTime: {
                      shape: 'S3a'
                    },
                    endTime: {
                      shape: 'S3a'
                    }
                  }
                },
                clientToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              required: ['jobId'],
              members: {
                jobId: {}
              }
            },
            idempotent: true
          },
          StartResourceScan: {
            http: {
              requestUri: '/resource/scan',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['analyzerArn', 'resourceArn'],
              members: {
                analyzerArn: {},
                resourceArn: {},
                resourceOwnerAccount: {}
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
                  shape: 'S30'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          UntagResource: {
            http: {
              method: 'DELETE',
              requestUri: '/tags/{resourceArn}',
              responseCode: 200
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
            },
            idempotent: true
          },
          UpdateArchiveRule: {
            http: {
              method: 'PUT',
              requestUri: '/analyzer/{analyzerName}/archive-rule/{ruleName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['analyzerName', 'ruleName', 'filter'],
              members: {
                analyzerName: {
                  location: 'uri',
                  locationName: 'analyzerName'
                },
                ruleName: {
                  location: 'uri',
                  locationName: 'ruleName'
                },
                filter: {
                  shape: 'S2x'
                },
                clientToken: {
                  idempotencyToken: true
                }
              }
            },
            idempotent: true
          },
          UpdateFindings: {
            http: {
              method: 'PUT',
              requestUri: '/finding',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['analyzerArn', 'status'],
              members: {
                analyzerArn: {},
                status: {},
                ids: {
                  type: 'list',
                  member: {}
                },
                resourceArn: {},
                clientToken: {
                  idempotencyToken: true
                }
              }
            },
            idempotent: true
          },
          ValidatePolicy: {
            http: {
              requestUri: '/policy/validation',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['policyDocument', 'policyType'],
              members: {
                locale: {},
                maxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                policyDocument: {},
                policyType: {},
                validatePolicyResourceType: {}
              }
            },
            output: {
              type: 'structure',
              required: ['findings'],
              members: {
                findings: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['findingDetails', 'findingType', 'issueCode', 'learnMoreLink', 'locations'],
                    members: {
                      findingDetails: {},
                      findingType: {},
                      issueCode: {},
                      learnMoreLink: {},
                      locations: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          required: ['path', 'span'],
                          members: {
                            path: {
                              type: 'list',
                              member: {
                                type: 'structure',
                                members: {
                                  index: {
                                    type: 'integer'
                                  },
                                  key: {},
                                  substring: {
                                    type: 'structure',
                                    required: ['start', 'length'],
                                    members: {
                                      start: {
                                        type: 'integer'
                                      },
                                      length: {
                                        type: 'integer'
                                      }
                                    }
                                  },
                                  value: {}
                                },
                                union: true
                              }
                            },
                            span: {
                              type: 'structure',
                              required: ['start', 'end'],
                              members: {
                                start: {
                                  shape: 'S6x'
                                },
                                end: {
                                  shape: 'S6x'
                                }
                              }
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
          }
        },
        shapes: {
          S9: {
            type: 'string',
            sensitive: true
          },
          Sh: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                description: {},
                statementIndex: {
                  type: 'integer'
                },
                statementId: {}
              }
            }
          },
          So: {
            type: 'map',
            key: {},
            value: {
              type: 'structure',
              members: {
                ebsSnapshot: {
                  type: 'structure',
                  members: {
                    userIds: {
                      type: 'list',
                      member: {}
                    },
                    groups: {
                      type: 'list',
                      member: {}
                    },
                    kmsKeyId: {}
                  }
                },
                ecrRepository: {
                  type: 'structure',
                  members: {
                    repositoryPolicy: {}
                  }
                },
                iamRole: {
                  type: 'structure',
                  members: {
                    trustPolicy: {}
                  }
                },
                efsFileSystem: {
                  type: 'structure',
                  members: {
                    fileSystemPolicy: {}
                  }
                },
                kmsKey: {
                  type: 'structure',
                  members: {
                    keyPolicies: {
                      type: 'map',
                      key: {},
                      value: {}
                    },
                    grants: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        required: ['operations', 'granteePrincipal', 'issuingAccount'],
                        members: {
                          operations: {
                            type: 'list',
                            member: {}
                          },
                          granteePrincipal: {},
                          retiringPrincipal: {},
                          constraints: {
                            type: 'structure',
                            members: {
                              encryptionContextEquals: {
                                shape: 'S1e'
                              },
                              encryptionContextSubset: {
                                shape: 'S1e'
                              }
                            }
                          },
                          issuingAccount: {}
                        }
                      }
                    }
                  }
                },
                rdsDbClusterSnapshot: {
                  type: 'structure',
                  members: {
                    attributes: {
                      type: 'map',
                      key: {},
                      value: {
                        type: 'structure',
                        members: {
                          accountIds: {
                            type: 'list',
                            member: {}
                          }
                        },
                        union: true
                      }
                    },
                    kmsKeyId: {}
                  }
                },
                rdsDbSnapshot: {
                  type: 'structure',
                  members: {
                    attributes: {
                      type: 'map',
                      key: {},
                      value: {
                        type: 'structure',
                        members: {
                          accountIds: {
                            type: 'list',
                            member: {}
                          }
                        },
                        union: true
                      }
                    },
                    kmsKeyId: {}
                  }
                },
                secretsManagerSecret: {
                  type: 'structure',
                  members: {
                    kmsKeyId: {},
                    secretPolicy: {}
                  }
                },
                s3Bucket: {
                  type: 'structure',
                  members: {
                    bucketPolicy: {},
                    bucketAclGrants: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        required: ['permission', 'grantee'],
                        members: {
                          permission: {},
                          grantee: {
                            type: 'structure',
                            members: {
                              id: {},
                              uri: {}
                            },
                            union: true
                          }
                        }
                      }
                    },
                    bucketPublicAccessBlock: {
                      shape: 'S27'
                    },
                    accessPoints: {
                      type: 'map',
                      key: {},
                      value: {
                        type: 'structure',
                        members: {
                          accessPointPolicy: {},
                          publicAccessBlock: {
                            shape: 'S27'
                          },
                          networkOrigin: {
                            type: 'structure',
                            members: {
                              vpcConfiguration: {
                                type: 'structure',
                                required: ['vpcId'],
                                members: {
                                  vpcId: {}
                                }
                              },
                              internetConfiguration: {
                                type: 'structure',
                                members: {}
                              }
                            },
                            union: true
                          }
                        }
                      }
                    }
                  }
                },
                snsTopic: {
                  type: 'structure',
                  members: {
                    topicPolicy: {}
                  }
                },
                sqsQueue: {
                  type: 'structure',
                  members: {
                    queuePolicy: {}
                  }
                },
                s3ExpressDirectoryBucket: {
                  type: 'structure',
                  members: {
                    bucketPolicy: {}
                  }
                },
                dynamodbStream: {
                  type: 'structure',
                  members: {
                    streamPolicy: {}
                  }
                },
                dynamodbTable: {
                  type: 'structure',
                  members: {
                    tablePolicy: {}
                  }
                }
              },
              union: true
            }
          },
          S1e: {
            type: 'map',
            key: {},
            value: {}
          },
          S27: {
            type: 'structure',
            required: ['ignorePublicAcls', 'restrictPublicBuckets'],
            members: {
              ignorePublicAcls: {
                type: 'boolean'
              },
              restrictPublicBuckets: {
                type: 'boolean'
              }
            }
          },
          S2x: {
            type: 'map',
            key: {},
            value: {
              type: 'structure',
              members: {
                eq: {
                  shape: 'S2z'
                },
                neq: {
                  shape: 'S2z'
                },
                contains: {
                  shape: 'S2z'
                },
                exists: {
                  type: 'boolean'
                }
              }
            }
          },
          S2z: {
            type: 'list',
            member: {}
          },
          S30: {
            type: 'map',
            key: {},
            value: {}
          },
          S31: {
            type: 'structure',
            members: {
              unusedAccess: {
                type: 'structure',
                members: {
                  unusedAccessAge: {
                    type: 'integer'
                  }
                }
              }
            },
            union: true
          },
          S3a: {
            type: 'timestamp',
            timestampFormat: 'iso8601'
          },
          S3c: {
            type: 'structure',
            required: ['code'],
            members: {
              code: {}
            }
          },
          S3j: {
            type: 'list',
            member: {}
          },
          S3o: {
            type: 'structure',
            required: ['arn', 'name', 'type', 'createdAt', 'status'],
            members: {
              arn: {},
              name: {},
              type: {},
              createdAt: {
                shape: 'S3a'
              },
              lastResourceAnalyzed: {},
              lastResourceAnalyzedAt: {
                shape: 'S3a'
              },
              tags: {
                shape: 'S30'
              },
              status: {},
              statusReason: {
                type: 'structure',
                required: ['code'],
                members: {
                  code: {}
                }
              },
              configuration: {
                shape: 'S31'
              }
            }
          },
          S3u: {
            type: 'structure',
            required: ['ruleName', 'filter', 'createdAt', 'updatedAt'],
            members: {
              ruleName: {},
              filter: {
                shape: 'S2x'
              },
              createdAt: {
                shape: 'S3a'
              },
              updatedAt: {
                shape: 'S3a'
              }
            }
          },
          S3z: {
            type: 'map',
            key: {},
            value: {}
          },
          S40: {
            type: 'map',
            key: {},
            value: {}
          },
          S41: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['type'],
              members: {
                type: {},
                detail: {
                  type: 'structure',
                  members: {
                    accessPointArn: {},
                    accessPointAccount: {}
                  }
                }
              }
            }
          },
          S4v: {
            type: 'list',
            member: {}
          },
          S5j: {
            type: 'structure',
            members: {
              attributeName: {},
              orderBy: {}
            }
          },
          S6x: {
            type: 'structure',
            required: ['line', 'column', 'offset'],
            members: {
              line: {
                type: 'integer'
              },
              column: {
                type: 'integer'
              },
              offset: {
                type: 'integer'
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=1137108a6d02f61d9b1c6d79e59c8ccf20d59ac2.js.map