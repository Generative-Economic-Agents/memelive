System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2018-09-06',
          endpointPrefix: 'iotthingsgraph',
          jsonVersion: '1.1',
          protocol: 'json',
          serviceFullName: 'AWS IoT Things Graph',
          serviceId: 'IoTThingsGraph',
          signatureVersion: 'v4',
          signingName: 'iotthingsgraph',
          targetPrefix: 'IotThingsGraphFrontEndService',
          uid: 'iotthingsgraph-2018-09-06'
        },
        operations: {
          AssociateEntityToThing: {
            input: {
              type: 'structure',
              required: ['thingName', 'entityId'],
              members: {
                thingName: {},
                entityId: {},
                namespaceVersion: {
                  type: 'long'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            deprecated: true,
            deprecatedMessage: 'since: 2022-08-30'
          },
          CreateFlowTemplate: {
            input: {
              type: 'structure',
              required: ['definition'],
              members: {
                definition: {
                  shape: 'S7'
                },
                compatibleNamespaceVersion: {
                  type: 'long'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                summary: {
                  shape: 'Sb'
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'since: 2022-08-30'
          },
          CreateSystemInstance: {
            input: {
              type: 'structure',
              required: ['definition', 'target'],
              members: {
                tags: {
                  shape: 'Sf'
                },
                definition: {
                  shape: 'S7'
                },
                target: {},
                greengrassGroupName: {},
                s3BucketName: {},
                metricsConfiguration: {
                  shape: 'Sm'
                },
                flowActionsRoleArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                summary: {
                  shape: 'Sq'
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'since: 2022-08-30'
          },
          CreateSystemTemplate: {
            input: {
              type: 'structure',
              required: ['definition'],
              members: {
                definition: {
                  shape: 'S7'
                },
                compatibleNamespaceVersion: {
                  type: 'long'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                summary: {
                  shape: 'Sw'
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'since: 2022-08-30'
          },
          DeleteFlowTemplate: {
            input: {
              type: 'structure',
              required: ['id'],
              members: {
                id: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            deprecated: true,
            deprecatedMessage: 'since: 2022-08-30'
          },
          DeleteNamespace: {
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {
                namespaceArn: {},
                namespaceName: {}
              }
            },
            deprecated: true,
            deprecatedMessage: 'since: 2022-08-30'
          },
          DeleteSystemInstance: {
            input: {
              type: 'structure',
              members: {
                id: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            deprecated: true,
            deprecatedMessage: 'since: 2022-08-30'
          },
          DeleteSystemTemplate: {
            input: {
              type: 'structure',
              required: ['id'],
              members: {
                id: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            deprecated: true,
            deprecatedMessage: 'since: 2022-08-30'
          },
          DeploySystemInstance: {
            input: {
              type: 'structure',
              members: {
                id: {}
              }
            },
            output: {
              type: 'structure',
              required: ['summary'],
              members: {
                summary: {
                  shape: 'Sq'
                },
                greengrassDeploymentId: {}
              }
            },
            deprecated: true,
            deprecatedMessage: 'since: 2022-08-30'
          },
          DeprecateFlowTemplate: {
            input: {
              type: 'structure',
              required: ['id'],
              members: {
                id: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            deprecated: true,
            deprecatedMessage: 'since: 2022-08-30'
          },
          DeprecateSystemTemplate: {
            input: {
              type: 'structure',
              required: ['id'],
              members: {
                id: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            deprecated: true,
            deprecatedMessage: 'since: 2022-08-30'
          },
          DescribeNamespace: {
            input: {
              type: 'structure',
              members: {
                namespaceName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                namespaceArn: {},
                namespaceName: {},
                trackingNamespaceName: {},
                trackingNamespaceVersion: {
                  type: 'long'
                },
                namespaceVersion: {
                  type: 'long'
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'since: 2022-08-30'
          },
          DissociateEntityFromThing: {
            input: {
              type: 'structure',
              required: ['thingName', 'entityType'],
              members: {
                thingName: {},
                entityType: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            deprecated: true,
            deprecatedMessage: 'since: 2022-08-30'
          },
          GetEntities: {
            input: {
              type: 'structure',
              required: ['ids'],
              members: {
                ids: {
                  type: 'list',
                  member: {}
                },
                namespaceVersion: {
                  type: 'long'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                descriptions: {
                  shape: 'S1l'
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'since: 2022-08-30'
          },
          GetFlowTemplate: {
            input: {
              type: 'structure',
              required: ['id'],
              members: {
                id: {},
                revisionNumber: {
                  type: 'long'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                description: {
                  type: 'structure',
                  members: {
                    summary: {
                      shape: 'Sb'
                    },
                    definition: {
                      shape: 'S7'
                    },
                    validatedNamespaceVersion: {
                      type: 'long'
                    }
                  }
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'since: 2022-08-30'
          },
          GetFlowTemplateRevisions: {
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
                summaries: {
                  shape: 'S1u'
                },
                nextToken: {}
              }
            },
            deprecated: true,
            deprecatedMessage: 'since: 2022-08-30'
          },
          GetNamespaceDeletionStatus: {
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {
                namespaceArn: {},
                namespaceName: {},
                status: {},
                errorCode: {},
                errorMessage: {}
              }
            },
            deprecated: true,
            deprecatedMessage: 'since: 2022-08-30'
          },
          GetSystemInstance: {
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
                description: {
                  type: 'structure',
                  members: {
                    summary: {
                      shape: 'Sq'
                    },
                    definition: {
                      shape: 'S7'
                    },
                    s3BucketName: {},
                    metricsConfiguration: {
                      shape: 'Sm'
                    },
                    validatedNamespaceVersion: {
                      type: 'long'
                    },
                    validatedDependencyRevisions: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          id: {},
                          revisionNumber: {
                            type: 'long'
                          }
                        }
                      }
                    },
                    flowActionsRoleArn: {}
                  }
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'since: 2022-08-30'
          },
          GetSystemTemplate: {
            input: {
              type: 'structure',
              required: ['id'],
              members: {
                id: {},
                revisionNumber: {
                  type: 'long'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                description: {
                  type: 'structure',
                  members: {
                    summary: {
                      shape: 'Sw'
                    },
                    definition: {
                      shape: 'S7'
                    },
                    validatedNamespaceVersion: {
                      type: 'long'
                    }
                  }
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'since: 2022-08-30'
          },
          GetSystemTemplateRevisions: {
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
                summaries: {
                  shape: 'S2a'
                },
                nextToken: {}
              }
            },
            deprecated: true,
            deprecatedMessage: 'since: 2022-08-30'
          },
          GetUploadStatus: {
            input: {
              type: 'structure',
              required: ['uploadId'],
              members: {
                uploadId: {}
              }
            },
            output: {
              type: 'structure',
              required: ['uploadId', 'uploadStatus', 'createdDate'],
              members: {
                uploadId: {},
                uploadStatus: {},
                namespaceArn: {},
                namespaceName: {},
                namespaceVersion: {
                  type: 'long'
                },
                failureReason: {
                  type: 'list',
                  member: {}
                },
                createdDate: {
                  type: 'timestamp'
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'since: 2022-08-30'
          },
          ListFlowExecutionMessages: {
            input: {
              type: 'structure',
              required: ['flowExecutionId'],
              members: {
                flowExecutionId: {},
                nextToken: {},
                maxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                messages: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      messageId: {},
                      eventType: {},
                      timestamp: {
                        type: 'timestamp'
                      },
                      payload: {}
                    }
                  }
                },
                nextToken: {}
              }
            },
            deprecated: true,
            deprecatedMessage: 'since: 2022-08-30'
          },
          ListTagsForResource: {
            input: {
              type: 'structure',
              required: ['resourceArn'],
              members: {
                maxResults: {
                  type: 'integer'
                },
                resourceArn: {},
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                tags: {
                  shape: 'Sf'
                },
                nextToken: {}
              }
            },
            deprecated: true,
            deprecatedMessage: 'since: 2022-08-30'
          },
          SearchEntities: {
            input: {
              type: 'structure',
              required: ['entityTypes'],
              members: {
                entityTypes: {
                  type: 'list',
                  member: {}
                },
                filters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      name: {},
                      value: {
                        type: 'list',
                        member: {}
                      }
                    }
                  }
                },
                nextToken: {},
                maxResults: {
                  type: 'integer'
                },
                namespaceVersion: {
                  type: 'long'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                descriptions: {
                  shape: 'S1l'
                },
                nextToken: {}
              }
            },
            deprecated: true,
            deprecatedMessage: 'since: 2022-08-30'
          },
          SearchFlowExecutions: {
            input: {
              type: 'structure',
              required: ['systemInstanceId'],
              members: {
                systemInstanceId: {},
                flowExecutionId: {},
                startTime: {
                  type: 'timestamp'
                },
                endTime: {
                  type: 'timestamp'
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
                summaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      flowExecutionId: {},
                      status: {},
                      systemInstanceId: {},
                      flowTemplateId: {},
                      createdAt: {
                        type: 'timestamp'
                      },
                      updatedAt: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            },
            deprecated: true,
            deprecatedMessage: 'since: 2022-08-30'
          },
          SearchFlowTemplates: {
            input: {
              type: 'structure',
              members: {
                filters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['name', 'value'],
                    members: {
                      name: {},
                      value: {
                        type: 'list',
                        member: {}
                      }
                    }
                  }
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
                summaries: {
                  shape: 'S1u'
                },
                nextToken: {}
              }
            },
            deprecated: true,
            deprecatedMessage: 'since: 2022-08-30'
          },
          SearchSystemInstances: {
            input: {
              type: 'structure',
              members: {
                filters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      name: {},
                      value: {
                        type: 'list',
                        member: {}
                      }
                    }
                  }
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
                summaries: {
                  type: 'list',
                  member: {
                    shape: 'Sq'
                  }
                },
                nextToken: {}
              }
            },
            deprecated: true,
            deprecatedMessage: 'since: 2022-08-30'
          },
          SearchSystemTemplates: {
            input: {
              type: 'structure',
              members: {
                filters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['name', 'value'],
                    members: {
                      name: {},
                      value: {
                        type: 'list',
                        member: {}
                      }
                    }
                  }
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
                summaries: {
                  shape: 'S2a'
                },
                nextToken: {}
              }
            },
            deprecated: true,
            deprecatedMessage: 'since: 2022-08-30'
          },
          SearchThings: {
            input: {
              type: 'structure',
              required: ['entityId'],
              members: {
                entityId: {},
                nextToken: {},
                maxResults: {
                  type: 'integer'
                },
                namespaceVersion: {
                  type: 'long'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                things: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      thingArn: {},
                      thingName: {}
                    }
                  }
                },
                nextToken: {}
              }
            },
            deprecated: true,
            deprecatedMessage: 'since: 2022-08-30'
          },
          TagResource: {
            input: {
              type: 'structure',
              required: ['resourceArn', 'tags'],
              members: {
                resourceArn: {},
                tags: {
                  shape: 'Sf'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            deprecated: true,
            deprecatedMessage: 'since: 2022-08-30'
          },
          UndeploySystemInstance: {
            input: {
              type: 'structure',
              members: {
                id: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                summary: {
                  shape: 'Sq'
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'since: 2022-08-30'
          },
          UntagResource: {
            input: {
              type: 'structure',
              required: ['resourceArn', 'tagKeys'],
              members: {
                resourceArn: {},
                tagKeys: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            deprecated: true,
            deprecatedMessage: 'since: 2022-08-30'
          },
          UpdateFlowTemplate: {
            input: {
              type: 'structure',
              required: ['id', 'definition'],
              members: {
                id: {},
                definition: {
                  shape: 'S7'
                },
                compatibleNamespaceVersion: {
                  type: 'long'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                summary: {
                  shape: 'Sb'
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'since: 2022-08-30'
          },
          UpdateSystemTemplate: {
            input: {
              type: 'structure',
              required: ['id', 'definition'],
              members: {
                id: {},
                definition: {
                  shape: 'S7'
                },
                compatibleNamespaceVersion: {
                  type: 'long'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                summary: {
                  shape: 'Sw'
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'since: 2022-08-30'
          },
          UploadEntityDefinitions: {
            input: {
              type: 'structure',
              members: {
                document: {
                  shape: 'S7'
                },
                syncWithPublicNamespace: {
                  type: 'boolean'
                },
                deprecateExistingEntities: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['uploadId'],
              members: {
                uploadId: {}
              }
            },
            deprecated: true,
            deprecatedMessage: 'since: 2022-08-30'
          }
        },
        shapes: {
          S7: {
            type: 'structure',
            required: ['language', 'text'],
            members: {
              language: {},
              text: {}
            }
          },
          Sb: {
            type: 'structure',
            members: {
              id: {},
              arn: {},
              revisionNumber: {
                type: 'long'
              },
              createdAt: {
                type: 'timestamp'
              }
            }
          },
          Sf: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['key', 'value'],
              members: {
                key: {},
                value: {}
              }
            }
          },
          Sm: {
            type: 'structure',
            members: {
              cloudMetricEnabled: {
                type: 'boolean'
              },
              metricRuleRoleArn: {}
            }
          },
          Sq: {
            type: 'structure',
            members: {
              id: {},
              arn: {},
              status: {},
              target: {},
              greengrassGroupName: {},
              createdAt: {
                type: 'timestamp'
              },
              updatedAt: {
                type: 'timestamp'
              },
              greengrassGroupId: {},
              greengrassGroupVersionId: {}
            }
          },
          Sw: {
            type: 'structure',
            members: {
              id: {},
              arn: {},
              revisionNumber: {
                type: 'long'
              },
              createdAt: {
                type: 'timestamp'
              }
            }
          },
          S1l: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                id: {},
                arn: {},
                type: {},
                createdAt: {
                  type: 'timestamp'
                },
                definition: {
                  shape: 'S7'
                }
              }
            }
          },
          S1u: {
            type: 'list',
            member: {
              shape: 'Sb'
            }
          },
          S2a: {
            type: 'list',
            member: {
              shape: 'Sw'
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=51559bca732ac870dc8004178326c61354257c06.js.map