System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        metadata: {
          apiVersion: '2019-12-02',
          endpointPrefix: 'route53-recovery-readiness',
          signingName: 'route53-recovery-readiness',
          serviceFullName: 'AWS Route53 Recovery Readiness',
          serviceId: 'Route53 Recovery Readiness',
          protocol: 'rest-json',
          jsonVersion: '1.1',
          uid: 'route53-recovery-readiness-2019-12-02',
          signatureVersion: 'v4'
        },
        operations: {
          CreateCell: {
            http: {
              requestUri: '/cells',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                CellName: {
                  locationName: 'cellName'
                },
                Cells: {
                  shape: 'S3',
                  locationName: 'cells'
                },
                Tags: {
                  shape: 'S4',
                  locationName: 'tags'
                }
              },
              required: ['CellName']
            },
            output: {
              type: 'structure',
              members: {
                CellArn: {
                  locationName: 'cellArn'
                },
                CellName: {
                  locationName: 'cellName'
                },
                Cells: {
                  shape: 'S3',
                  locationName: 'cells'
                },
                ParentReadinessScopes: {
                  shape: 'S3',
                  locationName: 'parentReadinessScopes'
                },
                Tags: {
                  shape: 'S4',
                  locationName: 'tags'
                }
              }
            }
          },
          CreateCrossAccountAuthorization: {
            http: {
              requestUri: '/crossaccountauthorizations',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                CrossAccountAuthorization: {
                  locationName: 'crossAccountAuthorization'
                }
              },
              required: ['CrossAccountAuthorization']
            },
            output: {
              type: 'structure',
              members: {
                CrossAccountAuthorization: {
                  locationName: 'crossAccountAuthorization'
                }
              }
            }
          },
          CreateReadinessCheck: {
            http: {
              requestUri: '/readinesschecks',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ReadinessCheckName: {
                  locationName: 'readinessCheckName'
                },
                ResourceSetName: {
                  locationName: 'resourceSetName'
                },
                Tags: {
                  shape: 'S4',
                  locationName: 'tags'
                }
              },
              required: ['ResourceSetName', 'ReadinessCheckName']
            },
            output: {
              type: 'structure',
              members: {
                ReadinessCheckArn: {
                  locationName: 'readinessCheckArn'
                },
                ReadinessCheckName: {
                  locationName: 'readinessCheckName'
                },
                ResourceSet: {
                  locationName: 'resourceSet'
                },
                Tags: {
                  shape: 'S4',
                  locationName: 'tags'
                }
              }
            }
          },
          CreateRecoveryGroup: {
            http: {
              requestUri: '/recoverygroups',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                Cells: {
                  shape: 'S3',
                  locationName: 'cells'
                },
                RecoveryGroupName: {
                  locationName: 'recoveryGroupName'
                },
                Tags: {
                  shape: 'S4',
                  locationName: 'tags'
                }
              },
              required: ['RecoveryGroupName']
            },
            output: {
              type: 'structure',
              members: {
                Cells: {
                  shape: 'S3',
                  locationName: 'cells'
                },
                RecoveryGroupArn: {
                  locationName: 'recoveryGroupArn'
                },
                RecoveryGroupName: {
                  locationName: 'recoveryGroupName'
                },
                Tags: {
                  shape: 'S4',
                  locationName: 'tags'
                }
              }
            }
          },
          CreateResourceSet: {
            http: {
              requestUri: '/resourcesets',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ResourceSetName: {
                  locationName: 'resourceSetName'
                },
                ResourceSetType: {
                  locationName: 'resourceSetType'
                },
                Resources: {
                  shape: 'Sh',
                  locationName: 'resources'
                },
                Tags: {
                  shape: 'S4',
                  locationName: 'tags'
                }
              },
              required: ['ResourceSetType', 'ResourceSetName', 'Resources']
            },
            output: {
              type: 'structure',
              members: {
                ResourceSetArn: {
                  locationName: 'resourceSetArn'
                },
                ResourceSetName: {
                  locationName: 'resourceSetName'
                },
                ResourceSetType: {
                  locationName: 'resourceSetType'
                },
                Resources: {
                  shape: 'Sh',
                  locationName: 'resources'
                },
                Tags: {
                  shape: 'S4',
                  locationName: 'tags'
                }
              }
            }
          },
          DeleteCell: {
            http: {
              method: 'DELETE',
              requestUri: '/cells/{cellName}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              members: {
                CellName: {
                  location: 'uri',
                  locationName: 'cellName'
                }
              },
              required: ['CellName']
            }
          },
          DeleteCrossAccountAuthorization: {
            http: {
              method: 'DELETE',
              requestUri: '/crossaccountauthorizations/{crossAccountAuthorization}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                CrossAccountAuthorization: {
                  location: 'uri',
                  locationName: 'crossAccountAuthorization'
                }
              },
              required: ['CrossAccountAuthorization']
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteReadinessCheck: {
            http: {
              method: 'DELETE',
              requestUri: '/readinesschecks/{readinessCheckName}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              members: {
                ReadinessCheckName: {
                  location: 'uri',
                  locationName: 'readinessCheckName'
                }
              },
              required: ['ReadinessCheckName']
            }
          },
          DeleteRecoveryGroup: {
            http: {
              method: 'DELETE',
              requestUri: '/recoverygroups/{recoveryGroupName}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              members: {
                RecoveryGroupName: {
                  location: 'uri',
                  locationName: 'recoveryGroupName'
                }
              },
              required: ['RecoveryGroupName']
            }
          },
          DeleteResourceSet: {
            http: {
              method: 'DELETE',
              requestUri: '/resourcesets/{resourceSetName}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              members: {
                ResourceSetName: {
                  location: 'uri',
                  locationName: 'resourceSetName'
                }
              },
              required: ['ResourceSetName']
            }
          },
          GetArchitectureRecommendations: {
            http: {
              method: 'GET',
              requestUri: '/recoverygroups/{recoveryGroupName}/architectureRecommendations',
              responseCode: 200
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
                },
                RecoveryGroupName: {
                  location: 'uri',
                  locationName: 'recoveryGroupName'
                }
              },
              required: ['RecoveryGroupName']
            },
            output: {
              type: 'structure',
              members: {
                LastAuditTimestamp: {
                  locationName: 'lastAuditTimestamp',
                  type: 'timestamp',
                  timestampFormat: 'iso8601'
                },
                NextToken: {
                  locationName: 'nextToken'
                },
                Recommendations: {
                  locationName: 'recommendations',
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      RecommendationText: {
                        locationName: 'recommendationText'
                      }
                    },
                    required: ['RecommendationText']
                  }
                }
              }
            }
          },
          GetCell: {
            http: {
              method: 'GET',
              requestUri: '/cells/{cellName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                CellName: {
                  location: 'uri',
                  locationName: 'cellName'
                }
              },
              required: ['CellName']
            },
            output: {
              type: 'structure',
              members: {
                CellArn: {
                  locationName: 'cellArn'
                },
                CellName: {
                  locationName: 'cellName'
                },
                Cells: {
                  shape: 'S3',
                  locationName: 'cells'
                },
                ParentReadinessScopes: {
                  shape: 'S3',
                  locationName: 'parentReadinessScopes'
                },
                Tags: {
                  shape: 'S4',
                  locationName: 'tags'
                }
              }
            }
          },
          GetCellReadinessSummary: {
            http: {
              method: 'GET',
              requestUri: '/cellreadiness/{cellName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                CellName: {
                  location: 'uri',
                  locationName: 'cellName'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                }
              },
              required: ['CellName']
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {
                  locationName: 'nextToken'
                },
                Readiness: {
                  locationName: 'readiness'
                },
                ReadinessChecks: {
                  shape: 'S15',
                  locationName: 'readinessChecks'
                }
              }
            }
          },
          GetReadinessCheck: {
            http: {
              method: 'GET',
              requestUri: '/readinesschecks/{readinessCheckName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ReadinessCheckName: {
                  location: 'uri',
                  locationName: 'readinessCheckName'
                }
              },
              required: ['ReadinessCheckName']
            },
            output: {
              type: 'structure',
              members: {
                ReadinessCheckArn: {
                  locationName: 'readinessCheckArn'
                },
                ReadinessCheckName: {
                  locationName: 'readinessCheckName'
                },
                ResourceSet: {
                  locationName: 'resourceSet'
                },
                Tags: {
                  shape: 'S4',
                  locationName: 'tags'
                }
              }
            }
          },
          GetReadinessCheckResourceStatus: {
            http: {
              method: 'GET',
              requestUri: '/readinesschecks/{readinessCheckName}/resource/{resourceIdentifier}/status',
              responseCode: 200
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
                },
                ReadinessCheckName: {
                  location: 'uri',
                  locationName: 'readinessCheckName'
                },
                ResourceIdentifier: {
                  location: 'uri',
                  locationName: 'resourceIdentifier'
                }
              },
              required: ['ReadinessCheckName', 'ResourceIdentifier']
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {
                  locationName: 'nextToken'
                },
                Readiness: {
                  locationName: 'readiness'
                },
                Rules: {
                  locationName: 'rules',
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      LastCheckedTimestamp: {
                        shape: 'S1d',
                        locationName: 'lastCheckedTimestamp'
                      },
                      Messages: {
                        shape: 'S1e',
                        locationName: 'messages'
                      },
                      Readiness: {
                        locationName: 'readiness'
                      },
                      RuleId: {
                        locationName: 'ruleId'
                      }
                    },
                    required: ['Messages', 'Readiness', 'RuleId', 'LastCheckedTimestamp']
                  }
                }
              }
            }
          },
          GetReadinessCheckStatus: {
            http: {
              method: 'GET',
              requestUri: '/readinesschecks/{readinessCheckName}/status',
              responseCode: 200
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
                },
                ReadinessCheckName: {
                  location: 'uri',
                  locationName: 'readinessCheckName'
                }
              },
              required: ['ReadinessCheckName']
            },
            output: {
              type: 'structure',
              members: {
                Messages: {
                  shape: 'S1e',
                  locationName: 'messages'
                },
                NextToken: {
                  locationName: 'nextToken'
                },
                Readiness: {
                  locationName: 'readiness'
                },
                Resources: {
                  locationName: 'resources',
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ComponentId: {
                        locationName: 'componentId'
                      },
                      LastCheckedTimestamp: {
                        shape: 'S1d',
                        locationName: 'lastCheckedTimestamp'
                      },
                      Readiness: {
                        locationName: 'readiness'
                      },
                      ResourceArn: {
                        locationName: 'resourceArn'
                      }
                    },
                    required: ['Readiness', 'LastCheckedTimestamp']
                  }
                }
              }
            }
          },
          GetRecoveryGroup: {
            http: {
              method: 'GET',
              requestUri: '/recoverygroups/{recoveryGroupName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                RecoveryGroupName: {
                  location: 'uri',
                  locationName: 'recoveryGroupName'
                }
              },
              required: ['RecoveryGroupName']
            },
            output: {
              type: 'structure',
              members: {
                Cells: {
                  shape: 'S3',
                  locationName: 'cells'
                },
                RecoveryGroupArn: {
                  locationName: 'recoveryGroupArn'
                },
                RecoveryGroupName: {
                  locationName: 'recoveryGroupName'
                },
                Tags: {
                  shape: 'S4',
                  locationName: 'tags'
                }
              }
            }
          },
          GetRecoveryGroupReadinessSummary: {
            http: {
              method: 'GET',
              requestUri: '/recoverygroupreadiness/{recoveryGroupName}',
              responseCode: 200
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
                },
                RecoveryGroupName: {
                  location: 'uri',
                  locationName: 'recoveryGroupName'
                }
              },
              required: ['RecoveryGroupName']
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {
                  locationName: 'nextToken'
                },
                Readiness: {
                  locationName: 'readiness'
                },
                ReadinessChecks: {
                  shape: 'S15',
                  locationName: 'readinessChecks'
                }
              }
            }
          },
          GetResourceSet: {
            http: {
              method: 'GET',
              requestUri: '/resourcesets/{resourceSetName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ResourceSetName: {
                  location: 'uri',
                  locationName: 'resourceSetName'
                }
              },
              required: ['ResourceSetName']
            },
            output: {
              type: 'structure',
              members: {
                ResourceSetArn: {
                  locationName: 'resourceSetArn'
                },
                ResourceSetName: {
                  locationName: 'resourceSetName'
                },
                ResourceSetType: {
                  locationName: 'resourceSetType'
                },
                Resources: {
                  shape: 'Sh',
                  locationName: 'resources'
                },
                Tags: {
                  shape: 'S4',
                  locationName: 'tags'
                }
              }
            }
          },
          ListCells: {
            http: {
              method: 'GET',
              requestUri: '/cells',
              responseCode: 200
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
                Cells: {
                  locationName: 'cells',
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      CellArn: {
                        locationName: 'cellArn'
                      },
                      CellName: {
                        locationName: 'cellName'
                      },
                      Cells: {
                        shape: 'S3',
                        locationName: 'cells'
                      },
                      ParentReadinessScopes: {
                        shape: 'S3',
                        locationName: 'parentReadinessScopes'
                      },
                      Tags: {
                        shape: 'S4',
                        locationName: 'tags'
                      }
                    },
                    required: ['ParentReadinessScopes', 'CellArn', 'CellName', 'Cells']
                  }
                },
                NextToken: {
                  locationName: 'nextToken'
                }
              }
            }
          },
          ListCrossAccountAuthorizations: {
            http: {
              method: 'GET',
              requestUri: '/crossaccountauthorizations',
              responseCode: 200
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
                CrossAccountAuthorizations: {
                  locationName: 'crossAccountAuthorizations',
                  type: 'list',
                  member: {}
                },
                NextToken: {
                  locationName: 'nextToken'
                }
              }
            }
          },
          ListReadinessChecks: {
            http: {
              method: 'GET',
              requestUri: '/readinesschecks',
              responseCode: 200
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
                NextToken: {
                  locationName: 'nextToken'
                },
                ReadinessChecks: {
                  locationName: 'readinessChecks',
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ReadinessCheckArn: {
                        locationName: 'readinessCheckArn'
                      },
                      ReadinessCheckName: {
                        locationName: 'readinessCheckName'
                      },
                      ResourceSet: {
                        locationName: 'resourceSet'
                      },
                      Tags: {
                        shape: 'S4',
                        locationName: 'tags'
                      }
                    },
                    required: ['ReadinessCheckArn', 'ResourceSet']
                  }
                }
              }
            }
          },
          ListRecoveryGroups: {
            http: {
              method: 'GET',
              requestUri: '/recoverygroups',
              responseCode: 200
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
                NextToken: {
                  locationName: 'nextToken'
                },
                RecoveryGroups: {
                  locationName: 'recoveryGroups',
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Cells: {
                        shape: 'S3',
                        locationName: 'cells'
                      },
                      RecoveryGroupArn: {
                        locationName: 'recoveryGroupArn'
                      },
                      RecoveryGroupName: {
                        locationName: 'recoveryGroupName'
                      },
                      Tags: {
                        shape: 'S4',
                        locationName: 'tags'
                      }
                    },
                    required: ['RecoveryGroupArn', 'RecoveryGroupName', 'Cells']
                  }
                }
              }
            }
          },
          ListResourceSets: {
            http: {
              method: 'GET',
              requestUri: '/resourcesets',
              responseCode: 200
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
                NextToken: {
                  locationName: 'nextToken'
                },
                ResourceSets: {
                  locationName: 'resourceSets',
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ResourceSetArn: {
                        locationName: 'resourceSetArn'
                      },
                      ResourceSetName: {
                        locationName: 'resourceSetName'
                      },
                      ResourceSetType: {
                        locationName: 'resourceSetType'
                      },
                      Resources: {
                        shape: 'Sh',
                        locationName: 'resources'
                      },
                      Tags: {
                        shape: 'S4',
                        locationName: 'tags'
                      }
                    },
                    required: ['ResourceSetType', 'ResourceSetName', 'ResourceSetArn', 'Resources']
                  }
                }
              }
            }
          },
          ListRules: {
            http: {
              method: 'GET',
              requestUri: '/rules',
              responseCode: 200
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
                },
                ResourceType: {
                  location: 'querystring',
                  locationName: 'resourceType'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {
                  locationName: 'nextToken'
                },
                Rules: {
                  locationName: 'rules',
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ResourceType: {
                        locationName: 'resourceType'
                      },
                      RuleDescription: {
                        locationName: 'ruleDescription'
                      },
                      RuleId: {
                        locationName: 'ruleId'
                      }
                    },
                    required: ['RuleDescription', 'RuleId', 'ResourceType']
                  }
                }
              }
            }
          },
          ListTagsForResources: {
            http: {
              method: 'GET',
              requestUri: '/tags/{resource-arn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ResourceArn: {
                  location: 'uri',
                  locationName: 'resource-arn'
                }
              },
              required: ['ResourceArn']
            },
            output: {
              type: 'structure',
              members: {
                Tags: {
                  shape: 'S4',
                  locationName: 'tags'
                }
              }
            }
          },
          TagResource: {
            http: {
              requestUri: '/tags/{resource-arn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ResourceArn: {
                  location: 'uri',
                  locationName: 'resource-arn'
                },
                Tags: {
                  shape: 'S4',
                  locationName: 'tags'
                }
              },
              required: ['ResourceArn', 'Tags']
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UntagResource: {
            http: {
              method: 'DELETE',
              requestUri: '/tags/{resource-arn}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              members: {
                ResourceArn: {
                  location: 'uri',
                  locationName: 'resource-arn'
                },
                TagKeys: {
                  shape: 'S3',
                  location: 'querystring',
                  locationName: 'tagKeys'
                }
              },
              required: ['TagKeys', 'ResourceArn']
            }
          },
          UpdateCell: {
            http: {
              method: 'PUT',
              requestUri: '/cells/{cellName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                CellName: {
                  location: 'uri',
                  locationName: 'cellName'
                },
                Cells: {
                  shape: 'S3',
                  locationName: 'cells'
                }
              },
              required: ['CellName', 'Cells']
            },
            output: {
              type: 'structure',
              members: {
                CellArn: {
                  locationName: 'cellArn'
                },
                CellName: {
                  locationName: 'cellName'
                },
                Cells: {
                  shape: 'S3',
                  locationName: 'cells'
                },
                ParentReadinessScopes: {
                  shape: 'S3',
                  locationName: 'parentReadinessScopes'
                },
                Tags: {
                  shape: 'S4',
                  locationName: 'tags'
                }
              }
            }
          },
          UpdateReadinessCheck: {
            http: {
              method: 'PUT',
              requestUri: '/readinesschecks/{readinessCheckName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ReadinessCheckName: {
                  location: 'uri',
                  locationName: 'readinessCheckName'
                },
                ResourceSetName: {
                  locationName: 'resourceSetName'
                }
              },
              required: ['ReadinessCheckName', 'ResourceSetName']
            },
            output: {
              type: 'structure',
              members: {
                ReadinessCheckArn: {
                  locationName: 'readinessCheckArn'
                },
                ReadinessCheckName: {
                  locationName: 'readinessCheckName'
                },
                ResourceSet: {
                  locationName: 'resourceSet'
                },
                Tags: {
                  shape: 'S4',
                  locationName: 'tags'
                }
              }
            }
          },
          UpdateRecoveryGroup: {
            http: {
              method: 'PUT',
              requestUri: '/recoverygroups/{recoveryGroupName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                Cells: {
                  shape: 'S3',
                  locationName: 'cells'
                },
                RecoveryGroupName: {
                  location: 'uri',
                  locationName: 'recoveryGroupName'
                }
              },
              required: ['RecoveryGroupName', 'Cells']
            },
            output: {
              type: 'structure',
              members: {
                Cells: {
                  shape: 'S3',
                  locationName: 'cells'
                },
                RecoveryGroupArn: {
                  locationName: 'recoveryGroupArn'
                },
                RecoveryGroupName: {
                  locationName: 'recoveryGroupName'
                },
                Tags: {
                  shape: 'S4',
                  locationName: 'tags'
                }
              }
            }
          },
          UpdateResourceSet: {
            http: {
              method: 'PUT',
              requestUri: '/resourcesets/{resourceSetName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ResourceSetName: {
                  location: 'uri',
                  locationName: 'resourceSetName'
                },
                ResourceSetType: {
                  locationName: 'resourceSetType'
                },
                Resources: {
                  shape: 'Sh',
                  locationName: 'resources'
                }
              },
              required: ['ResourceSetName', 'ResourceSetType', 'Resources']
            },
            output: {
              type: 'structure',
              members: {
                ResourceSetArn: {
                  locationName: 'resourceSetArn'
                },
                ResourceSetName: {
                  locationName: 'resourceSetName'
                },
                ResourceSetType: {
                  locationName: 'resourceSetType'
                },
                Resources: {
                  shape: 'Sh',
                  locationName: 'resources'
                },
                Tags: {
                  shape: 'S4',
                  locationName: 'tags'
                }
              }
            }
          }
        },
        shapes: {
          S3: {
            type: 'list',
            member: {}
          },
          S4: {
            type: 'map',
            key: {},
            value: {}
          },
          Sh: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                ComponentId: {
                  locationName: 'componentId'
                },
                DnsTargetResource: {
                  locationName: 'dnsTargetResource',
                  type: 'structure',
                  members: {
                    DomainName: {
                      locationName: 'domainName'
                    },
                    HostedZoneArn: {
                      locationName: 'hostedZoneArn'
                    },
                    RecordSetId: {
                      locationName: 'recordSetId'
                    },
                    RecordType: {
                      locationName: 'recordType'
                    },
                    TargetResource: {
                      locationName: 'targetResource',
                      type: 'structure',
                      members: {
                        NLBResource: {
                          locationName: 'nLBResource',
                          type: 'structure',
                          members: {
                            Arn: {
                              locationName: 'arn'
                            }
                          }
                        },
                        R53Resource: {
                          locationName: 'r53Resource',
                          type: 'structure',
                          members: {
                            DomainName: {
                              locationName: 'domainName'
                            },
                            RecordSetId: {
                              locationName: 'recordSetId'
                            }
                          }
                        }
                      }
                    }
                  }
                },
                ReadinessScopes: {
                  shape: 'S3',
                  locationName: 'readinessScopes'
                },
                ResourceArn: {
                  locationName: 'resourceArn'
                }
              }
            }
          },
          S15: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Readiness: {
                  locationName: 'readiness'
                },
                ReadinessCheckName: {
                  locationName: 'readinessCheckName'
                }
              }
            }
          },
          S1d: {
            type: 'timestamp',
            timestampFormat: 'iso8601'
          },
          S1e: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                MessageText: {
                  locationName: 'messageText'
                }
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=2bb46c5b103f09be7f441746043b5d47f60b4878.js.map