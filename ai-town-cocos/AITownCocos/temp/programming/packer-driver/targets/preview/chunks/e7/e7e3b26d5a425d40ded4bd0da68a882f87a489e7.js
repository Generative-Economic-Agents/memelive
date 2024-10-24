System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2022-02-17',
          endpointPrefix: 'cleanrooms',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceFullName: 'AWS Clean Rooms Service',
          serviceId: 'CleanRooms',
          signatureVersion: 'v4',
          signingName: 'cleanrooms',
          uid: 'cleanrooms-2022-02-17'
        },
        operations: {
          BatchGetCollaborationAnalysisTemplate: {
            http: {
              requestUri: '/collaborations/{collaborationIdentifier}/batch-analysistemplates',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['collaborationIdentifier', 'analysisTemplateArns'],
              members: {
                collaborationIdentifier: {
                  location: 'uri',
                  locationName: 'collaborationIdentifier'
                },
                analysisTemplateArns: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              required: ['collaborationAnalysisTemplates', 'errors'],
              members: {
                collaborationAnalysisTemplates: {
                  type: 'list',
                  member: {
                    shape: 'S7'
                  }
                },
                errors: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['arn', 'code', 'message'],
                    members: {
                      arn: {},
                      code: {},
                      message: {}
                    }
                  }
                }
              }
            }
          },
          BatchGetSchema: {
            http: {
              requestUri: '/collaborations/{collaborationIdentifier}/batch-schema',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['collaborationIdentifier', 'names'],
              members: {
                collaborationIdentifier: {
                  location: 'uri',
                  locationName: 'collaborationIdentifier'
                },
                names: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              required: ['schemas', 'errors'],
              members: {
                schemas: {
                  type: 'list',
                  member: {
                    shape: 'S13'
                  }
                },
                errors: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['name', 'code', 'message'],
                    members: {
                      name: {},
                      code: {},
                      message: {}
                    }
                  }
                }
              }
            }
          },
          BatchGetSchemaAnalysisRule: {
            http: {
              requestUri: '/collaborations/{collaborationIdentifier}/batch-schema-analysis-rule',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['collaborationIdentifier', 'schemaAnalysisRuleRequests'],
              members: {
                collaborationIdentifier: {
                  location: 'uri',
                  locationName: 'collaborationIdentifier'
                },
                schemaAnalysisRuleRequests: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['name', 'type'],
                    members: {
                      name: {},
                      type: {}
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              required: ['analysisRules', 'errors'],
              members: {
                analysisRules: {
                  type: 'list',
                  member: {
                    shape: 'S1s'
                  }
                },
                errors: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['name', 'type', 'code', 'message'],
                    members: {
                      name: {},
                      type: {},
                      code: {},
                      message: {}
                    }
                  }
                }
              }
            }
          },
          CreateAnalysisTemplate: {
            http: {
              requestUri: '/memberships/{membershipIdentifier}/analysistemplates',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['membershipIdentifier', 'name', 'format', 'source'],
              members: {
                description: {},
                membershipIdentifier: {
                  location: 'uri',
                  locationName: 'membershipIdentifier'
                },
                name: {},
                format: {},
                source: {
                  shape: 'Sj'
                },
                tags: {
                  shape: 'S2o'
                },
                analysisParameters: {
                  shape: 'Sl'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['analysisTemplate'],
              members: {
                analysisTemplate: {
                  shape: 'S2s'
                }
              }
            }
          },
          CreateCollaboration: {
            http: {
              requestUri: '/collaborations',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['members', 'name', 'description', 'creatorMemberAbilities', 'creatorDisplayName', 'queryLogStatus'],
              members: {
                members: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['accountId', 'memberAbilities', 'displayName'],
                    members: {
                      accountId: {},
                      memberAbilities: {
                        shape: 'S2x'
                      },
                      displayName: {},
                      paymentConfiguration: {
                        shape: 'S30'
                      }
                    }
                  }
                },
                name: {},
                description: {},
                creatorMemberAbilities: {
                  shape: 'S2x'
                },
                creatorDisplayName: {},
                dataEncryptionMetadata: {
                  shape: 'S35'
                },
                queryLogStatus: {},
                tags: {
                  shape: 'S2o'
                },
                creatorPaymentConfiguration: {
                  shape: 'S30'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['collaboration'],
              members: {
                collaboration: {
                  shape: 'S38'
                }
              }
            }
          },
          CreateConfiguredAudienceModelAssociation: {
            http: {
              requestUri: '/memberships/{membershipIdentifier}/configuredaudiencemodelassociations',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['membershipIdentifier', 'configuredAudienceModelArn', 'configuredAudienceModelAssociationName', 'manageResourcePolicies'],
              members: {
                membershipIdentifier: {
                  location: 'uri',
                  locationName: 'membershipIdentifier'
                },
                configuredAudienceModelArn: {},
                configuredAudienceModelAssociationName: {},
                manageResourcePolicies: {
                  type: 'boolean'
                },
                tags: {
                  shape: 'S2o'
                },
                description: {}
              }
            },
            output: {
              type: 'structure',
              required: ['configuredAudienceModelAssociation'],
              members: {
                configuredAudienceModelAssociation: {
                  shape: 'S3e'
                }
              }
            }
          },
          CreateConfiguredTable: {
            http: {
              requestUri: '/configuredTables',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['name', 'tableReference', 'allowedColumns', 'analysisMethod'],
              members: {
                name: {},
                description: {},
                tableReference: {
                  shape: 'S3i'
                },
                allowedColumns: {
                  shape: 'S3m'
                },
                analysisMethod: {},
                tags: {
                  shape: 'S2o'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['configuredTable'],
              members: {
                configuredTable: {
                  shape: 'S3o'
                }
              }
            },
            idempotent: true
          },
          CreateConfiguredTableAnalysisRule: {
            http: {
              requestUri: '/configuredTables/{configuredTableIdentifier}/analysisRule',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['configuredTableIdentifier', 'analysisRuleType', 'analysisRulePolicy'],
              members: {
                configuredTableIdentifier: {
                  location: 'uri',
                  locationName: 'configuredTableIdentifier'
                },
                analysisRuleType: {},
                analysisRulePolicy: {
                  shape: 'S3u'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['analysisRule'],
              members: {
                analysisRule: {
                  shape: 'S3x'
                }
              }
            },
            idempotent: true
          },
          CreateConfiguredTableAssociation: {
            http: {
              requestUri: '/memberships/{membershipIdentifier}/configuredTableAssociations',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['name', 'membershipIdentifier', 'configuredTableIdentifier', 'roleArn'],
              members: {
                name: {},
                description: {},
                membershipIdentifier: {
                  location: 'uri',
                  locationName: 'membershipIdentifier'
                },
                configuredTableIdentifier: {},
                roleArn: {},
                tags: {
                  shape: 'S2o'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['configuredTableAssociation'],
              members: {
                configuredTableAssociation: {
                  shape: 'S41'
                }
              }
            }
          },
          CreateMembership: {
            http: {
              requestUri: '/memberships',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['collaborationIdentifier', 'queryLogStatus'],
              members: {
                collaborationIdentifier: {},
                queryLogStatus: {},
                tags: {
                  shape: 'S2o'
                },
                defaultResultConfiguration: {
                  shape: 'S45'
                },
                paymentConfiguration: {
                  shape: 'S4b'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['membership'],
              members: {
                membership: {
                  shape: 'S4e'
                }
              }
            }
          },
          CreatePrivacyBudgetTemplate: {
            http: {
              requestUri: '/memberships/{membershipIdentifier}/privacybudgettemplates',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['membershipIdentifier', 'autoRefresh', 'privacyBudgetType', 'parameters'],
              members: {
                membershipIdentifier: {
                  location: 'uri',
                  locationName: 'membershipIdentifier'
                },
                autoRefresh: {},
                privacyBudgetType: {},
                parameters: {
                  type: 'structure',
                  members: {
                    differentialPrivacy: {
                      type: 'structure',
                      required: ['epsilon', 'usersNoisePerQuery'],
                      members: {
                        epsilon: {
                          type: 'integer'
                        },
                        usersNoisePerQuery: {
                          type: 'integer'
                        }
                      }
                    }
                  },
                  union: true
                },
                tags: {
                  shape: 'S2o'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['privacyBudgetTemplate'],
              members: {
                privacyBudgetTemplate: {
                  shape: 'S4o'
                }
              }
            }
          },
          DeleteAnalysisTemplate: {
            http: {
              method: 'DELETE',
              requestUri: '/memberships/{membershipIdentifier}/analysistemplates/{analysisTemplateIdentifier}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['membershipIdentifier', 'analysisTemplateIdentifier'],
              members: {
                membershipIdentifier: {
                  location: 'uri',
                  locationName: 'membershipIdentifier'
                },
                analysisTemplateIdentifier: {
                  location: 'uri',
                  locationName: 'analysisTemplateIdentifier'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeleteCollaboration: {
            http: {
              method: 'DELETE',
              requestUri: '/collaborations/{collaborationIdentifier}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['collaborationIdentifier'],
              members: {
                collaborationIdentifier: {
                  location: 'uri',
                  locationName: 'collaborationIdentifier'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeleteConfiguredAudienceModelAssociation: {
            http: {
              method: 'DELETE',
              requestUri: '/memberships/{membershipIdentifier}/configuredaudiencemodelassociations/{configuredAudienceModelAssociationIdentifier}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['configuredAudienceModelAssociationIdentifier', 'membershipIdentifier'],
              members: {
                configuredAudienceModelAssociationIdentifier: {
                  location: 'uri',
                  locationName: 'configuredAudienceModelAssociationIdentifier'
                },
                membershipIdentifier: {
                  location: 'uri',
                  locationName: 'membershipIdentifier'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeleteConfiguredTable: {
            http: {
              method: 'DELETE',
              requestUri: '/configuredTables/{configuredTableIdentifier}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['configuredTableIdentifier'],
              members: {
                configuredTableIdentifier: {
                  location: 'uri',
                  locationName: 'configuredTableIdentifier'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeleteConfiguredTableAnalysisRule: {
            http: {
              method: 'DELETE',
              requestUri: '/configuredTables/{configuredTableIdentifier}/analysisRule/{analysisRuleType}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['configuredTableIdentifier', 'analysisRuleType'],
              members: {
                configuredTableIdentifier: {
                  location: 'uri',
                  locationName: 'configuredTableIdentifier'
                },
                analysisRuleType: {
                  location: 'uri',
                  locationName: 'analysisRuleType'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeleteConfiguredTableAssociation: {
            http: {
              method: 'DELETE',
              requestUri: '/memberships/{membershipIdentifier}/configuredTableAssociations/{configuredTableAssociationIdentifier}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['configuredTableAssociationIdentifier', 'membershipIdentifier'],
              members: {
                configuredTableAssociationIdentifier: {
                  location: 'uri',
                  locationName: 'configuredTableAssociationIdentifier'
                },
                membershipIdentifier: {
                  location: 'uri',
                  locationName: 'membershipIdentifier'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeleteMember: {
            http: {
              method: 'DELETE',
              requestUri: '/collaborations/{collaborationIdentifier}/member/{accountId}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['collaborationIdentifier', 'accountId'],
              members: {
                collaborationIdentifier: {
                  location: 'uri',
                  locationName: 'collaborationIdentifier'
                },
                accountId: {
                  location: 'uri',
                  locationName: 'accountId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeleteMembership: {
            http: {
              method: 'DELETE',
              requestUri: '/memberships/{membershipIdentifier}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['membershipIdentifier'],
              members: {
                membershipIdentifier: {
                  location: 'uri',
                  locationName: 'membershipIdentifier'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeletePrivacyBudgetTemplate: {
            http: {
              method: 'DELETE',
              requestUri: '/memberships/{membershipIdentifier}/privacybudgettemplates/{privacyBudgetTemplateIdentifier}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['membershipIdentifier', 'privacyBudgetTemplateIdentifier'],
              members: {
                membershipIdentifier: {
                  location: 'uri',
                  locationName: 'membershipIdentifier'
                },
                privacyBudgetTemplateIdentifier: {
                  location: 'uri',
                  locationName: 'privacyBudgetTemplateIdentifier'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          GetAnalysisTemplate: {
            http: {
              method: 'GET',
              requestUri: '/memberships/{membershipIdentifier}/analysistemplates/{analysisTemplateIdentifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['membershipIdentifier', 'analysisTemplateIdentifier'],
              members: {
                membershipIdentifier: {
                  location: 'uri',
                  locationName: 'membershipIdentifier'
                },
                analysisTemplateIdentifier: {
                  location: 'uri',
                  locationName: 'analysisTemplateIdentifier'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['analysisTemplate'],
              members: {
                analysisTemplate: {
                  shape: 'S2s'
                }
              }
            }
          },
          GetCollaboration: {
            http: {
              method: 'GET',
              requestUri: '/collaborations/{collaborationIdentifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['collaborationIdentifier'],
              members: {
                collaborationIdentifier: {
                  location: 'uri',
                  locationName: 'collaborationIdentifier'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['collaboration'],
              members: {
                collaboration: {
                  shape: 'S38'
                }
              }
            }
          },
          GetCollaborationAnalysisTemplate: {
            http: {
              method: 'GET',
              requestUri: '/collaborations/{collaborationIdentifier}/analysistemplates/{analysisTemplateArn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['collaborationIdentifier', 'analysisTemplateArn'],
              members: {
                collaborationIdentifier: {
                  location: 'uri',
                  locationName: 'collaborationIdentifier'
                },
                analysisTemplateArn: {
                  location: 'uri',
                  locationName: 'analysisTemplateArn'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['collaborationAnalysisTemplate'],
              members: {
                collaborationAnalysisTemplate: {
                  shape: 'S7'
                }
              }
            }
          },
          GetCollaborationConfiguredAudienceModelAssociation: {
            http: {
              method: 'GET',
              requestUri: '/collaborations/{collaborationIdentifier}/configuredaudiencemodelassociations/{configuredAudienceModelAssociationIdentifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['collaborationIdentifier', 'configuredAudienceModelAssociationIdentifier'],
              members: {
                collaborationIdentifier: {
                  location: 'uri',
                  locationName: 'collaborationIdentifier'
                },
                configuredAudienceModelAssociationIdentifier: {
                  location: 'uri',
                  locationName: 'configuredAudienceModelAssociationIdentifier'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['collaborationConfiguredAudienceModelAssociation'],
              members: {
                collaborationConfiguredAudienceModelAssociation: {
                  type: 'structure',
                  required: ['id', 'arn', 'collaborationId', 'collaborationArn', 'configuredAudienceModelArn', 'name', 'creatorAccountId', 'createTime', 'updateTime'],
                  members: {
                    id: {},
                    arn: {},
                    collaborationId: {},
                    collaborationArn: {},
                    configuredAudienceModelArn: {},
                    name: {},
                    description: {},
                    creatorAccountId: {},
                    createTime: {
                      type: 'timestamp'
                    },
                    updateTime: {
                      type: 'timestamp'
                    }
                  }
                }
              }
            }
          },
          GetCollaborationPrivacyBudgetTemplate: {
            http: {
              method: 'GET',
              requestUri: '/collaborations/{collaborationIdentifier}/privacybudgettemplates/{privacyBudgetTemplateIdentifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['collaborationIdentifier', 'privacyBudgetTemplateIdentifier'],
              members: {
                collaborationIdentifier: {
                  location: 'uri',
                  locationName: 'collaborationIdentifier'
                },
                privacyBudgetTemplateIdentifier: {
                  location: 'uri',
                  locationName: 'privacyBudgetTemplateIdentifier'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['collaborationPrivacyBudgetTemplate'],
              members: {
                collaborationPrivacyBudgetTemplate: {
                  type: 'structure',
                  required: ['id', 'arn', 'collaborationId', 'collaborationArn', 'creatorAccountId', 'createTime', 'updateTime', 'privacyBudgetType', 'autoRefresh', 'parameters'],
                  members: {
                    id: {},
                    arn: {},
                    collaborationId: {},
                    collaborationArn: {},
                    creatorAccountId: {},
                    createTime: {
                      type: 'timestamp'
                    },
                    updateTime: {
                      type: 'timestamp'
                    },
                    privacyBudgetType: {},
                    autoRefresh: {},
                    parameters: {
                      shape: 'S4r'
                    }
                  }
                }
              }
            }
          },
          GetConfiguredAudienceModelAssociation: {
            http: {
              method: 'GET',
              requestUri: '/memberships/{membershipIdentifier}/configuredaudiencemodelassociations/{configuredAudienceModelAssociationIdentifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['configuredAudienceModelAssociationIdentifier', 'membershipIdentifier'],
              members: {
                configuredAudienceModelAssociationIdentifier: {
                  location: 'uri',
                  locationName: 'configuredAudienceModelAssociationIdentifier'
                },
                membershipIdentifier: {
                  location: 'uri',
                  locationName: 'membershipIdentifier'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['configuredAudienceModelAssociation'],
              members: {
                configuredAudienceModelAssociation: {
                  shape: 'S3e'
                }
              }
            }
          },
          GetConfiguredTable: {
            http: {
              method: 'GET',
              requestUri: '/configuredTables/{configuredTableIdentifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['configuredTableIdentifier'],
              members: {
                configuredTableIdentifier: {
                  location: 'uri',
                  locationName: 'configuredTableIdentifier'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['configuredTable'],
              members: {
                configuredTable: {
                  shape: 'S3o'
                }
              }
            }
          },
          GetConfiguredTableAnalysisRule: {
            http: {
              method: 'GET',
              requestUri: '/configuredTables/{configuredTableIdentifier}/analysisRule/{analysisRuleType}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['configuredTableIdentifier', 'analysisRuleType'],
              members: {
                configuredTableIdentifier: {
                  location: 'uri',
                  locationName: 'configuredTableIdentifier'
                },
                analysisRuleType: {
                  location: 'uri',
                  locationName: 'analysisRuleType'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['analysisRule'],
              members: {
                analysisRule: {
                  shape: 'S3x'
                }
              }
            }
          },
          GetConfiguredTableAssociation: {
            http: {
              method: 'GET',
              requestUri: '/memberships/{membershipIdentifier}/configuredTableAssociations/{configuredTableAssociationIdentifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['configuredTableAssociationIdentifier', 'membershipIdentifier'],
              members: {
                configuredTableAssociationIdentifier: {
                  location: 'uri',
                  locationName: 'configuredTableAssociationIdentifier'
                },
                membershipIdentifier: {
                  location: 'uri',
                  locationName: 'membershipIdentifier'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['configuredTableAssociation'],
              members: {
                configuredTableAssociation: {
                  shape: 'S41'
                }
              }
            }
          },
          GetMembership: {
            http: {
              method: 'GET',
              requestUri: '/memberships/{membershipIdentifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['membershipIdentifier'],
              members: {
                membershipIdentifier: {
                  location: 'uri',
                  locationName: 'membershipIdentifier'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['membership'],
              members: {
                membership: {
                  shape: 'S4e'
                }
              }
            }
          },
          GetPrivacyBudgetTemplate: {
            http: {
              method: 'GET',
              requestUri: '/memberships/{membershipIdentifier}/privacybudgettemplates/{privacyBudgetTemplateIdentifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['membershipIdentifier', 'privacyBudgetTemplateIdentifier'],
              members: {
                membershipIdentifier: {
                  location: 'uri',
                  locationName: 'membershipIdentifier'
                },
                privacyBudgetTemplateIdentifier: {
                  location: 'uri',
                  locationName: 'privacyBudgetTemplateIdentifier'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['privacyBudgetTemplate'],
              members: {
                privacyBudgetTemplate: {
                  shape: 'S4o'
                }
              }
            }
          },
          GetProtectedQuery: {
            http: {
              method: 'GET',
              requestUri: '/memberships/{membershipIdentifier}/protectedQueries/{protectedQueryIdentifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['membershipIdentifier', 'protectedQueryIdentifier'],
              members: {
                membershipIdentifier: {
                  location: 'uri',
                  locationName: 'membershipIdentifier'
                },
                protectedQueryIdentifier: {
                  location: 'uri',
                  locationName: 'protectedQueryIdentifier'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['protectedQuery'],
              members: {
                protectedQuery: {
                  shape: 'S63'
                }
              }
            }
          },
          GetSchema: {
            http: {
              method: 'GET',
              requestUri: '/collaborations/{collaborationIdentifier}/schemas/{name}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['collaborationIdentifier', 'name'],
              members: {
                collaborationIdentifier: {
                  location: 'uri',
                  locationName: 'collaborationIdentifier'
                },
                name: {
                  location: 'uri',
                  locationName: 'name'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['schema'],
              members: {
                schema: {
                  shape: 'S13'
                }
              }
            }
          },
          GetSchemaAnalysisRule: {
            http: {
              method: 'GET',
              requestUri: '/collaborations/{collaborationIdentifier}/schemas/{name}/analysisRule/{type}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['collaborationIdentifier', 'name', 'type'],
              members: {
                collaborationIdentifier: {
                  location: 'uri',
                  locationName: 'collaborationIdentifier'
                },
                name: {
                  location: 'uri',
                  locationName: 'name'
                },
                type: {
                  location: 'uri',
                  locationName: 'type'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['analysisRule'],
              members: {
                analysisRule: {
                  shape: 'S1s'
                }
              }
            }
          },
          ListAnalysisTemplates: {
            http: {
              method: 'GET',
              requestUri: '/memberships/{membershipIdentifier}/analysistemplates',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['membershipIdentifier'],
              members: {
                membershipIdentifier: {
                  location: 'uri',
                  locationName: 'membershipIdentifier'
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
              required: ['analysisTemplateSummaries'],
              members: {
                nextToken: {},
                analysisTemplateSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['arn', 'createTime', 'id', 'name', 'updateTime', 'membershipArn', 'membershipId', 'collaborationArn', 'collaborationId'],
                    members: {
                      arn: {},
                      createTime: {
                        type: 'timestamp'
                      },
                      id: {},
                      name: {},
                      updateTime: {
                        type: 'timestamp'
                      },
                      membershipArn: {},
                      membershipId: {},
                      collaborationArn: {},
                      collaborationId: {},
                      description: {}
                    }
                  }
                }
              }
            }
          },
          ListCollaborationAnalysisTemplates: {
            http: {
              method: 'GET',
              requestUri: '/collaborations/{collaborationIdentifier}/analysistemplates',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['collaborationIdentifier'],
              members: {
                collaborationIdentifier: {
                  location: 'uri',
                  locationName: 'collaborationIdentifier'
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
              required: ['collaborationAnalysisTemplateSummaries'],
              members: {
                nextToken: {},
                collaborationAnalysisTemplateSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['arn', 'createTime', 'id', 'name', 'updateTime', 'collaborationArn', 'collaborationId', 'creatorAccountId'],
                    members: {
                      arn: {},
                      createTime: {
                        type: 'timestamp'
                      },
                      id: {},
                      name: {},
                      updateTime: {
                        type: 'timestamp'
                      },
                      collaborationArn: {},
                      collaborationId: {},
                      creatorAccountId: {},
                      description: {}
                    }
                  }
                }
              }
            }
          },
          ListCollaborationConfiguredAudienceModelAssociations: {
            http: {
              method: 'GET',
              requestUri: '/collaborations/{collaborationIdentifier}/configuredaudiencemodelassociations',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['collaborationIdentifier'],
              members: {
                collaborationIdentifier: {
                  location: 'uri',
                  locationName: 'collaborationIdentifier'
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
              required: ['collaborationConfiguredAudienceModelAssociationSummaries'],
              members: {
                collaborationConfiguredAudienceModelAssociationSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['arn', 'createTime', 'id', 'name', 'updateTime', 'collaborationArn', 'collaborationId', 'creatorAccountId'],
                    members: {
                      arn: {},
                      createTime: {
                        type: 'timestamp'
                      },
                      id: {},
                      name: {},
                      updateTime: {
                        type: 'timestamp'
                      },
                      collaborationArn: {},
                      collaborationId: {},
                      creatorAccountId: {},
                      description: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListCollaborationPrivacyBudgetTemplates: {
            http: {
              method: 'GET',
              requestUri: '/collaborations/{collaborationIdentifier}/privacybudgettemplates',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['collaborationIdentifier'],
              members: {
                collaborationIdentifier: {
                  location: 'uri',
                  locationName: 'collaborationIdentifier'
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
              required: ['collaborationPrivacyBudgetTemplateSummaries'],
              members: {
                nextToken: {},
                collaborationPrivacyBudgetTemplateSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['id', 'arn', 'collaborationId', 'collaborationArn', 'creatorAccountId', 'privacyBudgetType', 'createTime', 'updateTime'],
                    members: {
                      id: {},
                      arn: {},
                      collaborationId: {},
                      collaborationArn: {},
                      creatorAccountId: {},
                      privacyBudgetType: {},
                      createTime: {
                        type: 'timestamp'
                      },
                      updateTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                }
              }
            }
          },
          ListCollaborationPrivacyBudgets: {
            http: {
              method: 'GET',
              requestUri: '/collaborations/{collaborationIdentifier}/privacybudgets',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['collaborationIdentifier', 'privacyBudgetType'],
              members: {
                collaborationIdentifier: {
                  location: 'uri',
                  locationName: 'collaborationIdentifier'
                },
                privacyBudgetType: {
                  location: 'querystring',
                  locationName: 'privacyBudgetType'
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
              required: ['collaborationPrivacyBudgetSummaries'],
              members: {
                collaborationPrivacyBudgetSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['id', 'privacyBudgetTemplateId', 'privacyBudgetTemplateArn', 'collaborationId', 'collaborationArn', 'creatorAccountId', 'type', 'createTime', 'updateTime', 'budget'],
                    members: {
                      id: {},
                      privacyBudgetTemplateId: {},
                      privacyBudgetTemplateArn: {},
                      collaborationId: {},
                      collaborationArn: {},
                      creatorAccountId: {},
                      type: {},
                      createTime: {
                        type: 'timestamp'
                      },
                      updateTime: {
                        type: 'timestamp'
                      },
                      budget: {
                        shape: 'S7f'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListCollaborations: {
            http: {
              method: 'GET',
              requestUri: '/collaborations',
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
                memberStatus: {
                  location: 'querystring',
                  locationName: 'memberStatus'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['collaborationList'],
              members: {
                nextToken: {},
                collaborationList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['id', 'arn', 'name', 'creatorAccountId', 'creatorDisplayName', 'createTime', 'updateTime', 'memberStatus'],
                    members: {
                      id: {},
                      arn: {},
                      name: {},
                      creatorAccountId: {},
                      creatorDisplayName: {},
                      createTime: {
                        type: 'timestamp'
                      },
                      updateTime: {
                        type: 'timestamp'
                      },
                      memberStatus: {},
                      membershipId: {},
                      membershipArn: {}
                    }
                  }
                }
              }
            }
          },
          ListConfiguredAudienceModelAssociations: {
            http: {
              method: 'GET',
              requestUri: '/memberships/{membershipIdentifier}/configuredaudiencemodelassociations',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['membershipIdentifier'],
              members: {
                membershipIdentifier: {
                  location: 'uri',
                  locationName: 'membershipIdentifier'
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
              required: ['configuredAudienceModelAssociationSummaries'],
              members: {
                configuredAudienceModelAssociationSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['membershipId', 'membershipArn', 'collaborationArn', 'collaborationId', 'createTime', 'updateTime', 'id', 'arn', 'name', 'configuredAudienceModelArn'],
                    members: {
                      membershipId: {},
                      membershipArn: {},
                      collaborationArn: {},
                      collaborationId: {},
                      createTime: {
                        type: 'timestamp'
                      },
                      updateTime: {
                        type: 'timestamp'
                      },
                      id: {},
                      arn: {},
                      name: {},
                      configuredAudienceModelArn: {},
                      description: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListConfiguredTableAssociations: {
            http: {
              method: 'GET',
              requestUri: '/memberships/{membershipIdentifier}/configuredTableAssociations',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['membershipIdentifier'],
              members: {
                membershipIdentifier: {
                  location: 'uri',
                  locationName: 'membershipIdentifier'
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
              required: ['configuredTableAssociationSummaries'],
              members: {
                configuredTableAssociationSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['configuredTableId', 'membershipId', 'membershipArn', 'name', 'createTime', 'updateTime', 'id', 'arn'],
                    members: {
                      configuredTableId: {},
                      membershipId: {},
                      membershipArn: {},
                      name: {},
                      createTime: {
                        type: 'timestamp'
                      },
                      updateTime: {
                        type: 'timestamp'
                      },
                      id: {},
                      arn: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListConfiguredTables: {
            http: {
              method: 'GET',
              requestUri: '/configuredTables',
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
                }
              }
            },
            output: {
              type: 'structure',
              required: ['configuredTableSummaries'],
              members: {
                configuredTableSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['id', 'arn', 'name', 'createTime', 'updateTime', 'analysisRuleTypes', 'analysisMethod'],
                    members: {
                      id: {},
                      arn: {},
                      name: {},
                      createTime: {
                        type: 'timestamp'
                      },
                      updateTime: {
                        type: 'timestamp'
                      },
                      analysisRuleTypes: {
                        shape: 'S3q'
                      },
                      analysisMethod: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListMembers: {
            http: {
              method: 'GET',
              requestUri: '/collaborations/{collaborationIdentifier}/members',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['collaborationIdentifier'],
              members: {
                collaborationIdentifier: {
                  location: 'uri',
                  locationName: 'collaborationIdentifier'
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
              required: ['memberSummaries'],
              members: {
                nextToken: {},
                memberSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['accountId', 'status', 'displayName', 'abilities', 'createTime', 'updateTime', 'paymentConfiguration'],
                    members: {
                      accountId: {},
                      status: {},
                      displayName: {},
                      abilities: {
                        shape: 'S2x'
                      },
                      createTime: {
                        type: 'timestamp'
                      },
                      updateTime: {
                        type: 'timestamp'
                      },
                      membershipId: {},
                      membershipArn: {},
                      paymentConfiguration: {
                        shape: 'S30'
                      }
                    }
                  }
                }
              }
            }
          },
          ListMemberships: {
            http: {
              method: 'GET',
              requestUri: '/memberships',
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
                status: {
                  location: 'querystring',
                  locationName: 'status'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['membershipSummaries'],
              members: {
                nextToken: {},
                membershipSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['id', 'arn', 'collaborationArn', 'collaborationId', 'collaborationCreatorAccountId', 'collaborationCreatorDisplayName', 'collaborationName', 'createTime', 'updateTime', 'status', 'memberAbilities', 'paymentConfiguration'],
                    members: {
                      id: {},
                      arn: {},
                      collaborationArn: {},
                      collaborationId: {},
                      collaborationCreatorAccountId: {},
                      collaborationCreatorDisplayName: {},
                      collaborationName: {},
                      createTime: {
                        type: 'timestamp'
                      },
                      updateTime: {
                        type: 'timestamp'
                      },
                      status: {},
                      memberAbilities: {
                        shape: 'S2x'
                      },
                      paymentConfiguration: {
                        shape: 'S4b'
                      }
                    }
                  }
                }
              }
            }
          },
          ListPrivacyBudgetTemplates: {
            http: {
              method: 'GET',
              requestUri: '/memberships/{membershipIdentifier}/privacybudgettemplates',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['membershipIdentifier'],
              members: {
                membershipIdentifier: {
                  location: 'uri',
                  locationName: 'membershipIdentifier'
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
              required: ['privacyBudgetTemplateSummaries'],
              members: {
                nextToken: {},
                privacyBudgetTemplateSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['id', 'arn', 'membershipId', 'membershipArn', 'collaborationId', 'collaborationArn', 'privacyBudgetType', 'createTime', 'updateTime'],
                    members: {
                      id: {},
                      arn: {},
                      membershipId: {},
                      membershipArn: {},
                      collaborationId: {},
                      collaborationArn: {},
                      privacyBudgetType: {},
                      createTime: {
                        type: 'timestamp'
                      },
                      updateTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                }
              }
            }
          },
          ListPrivacyBudgets: {
            http: {
              method: 'GET',
              requestUri: '/memberships/{membershipIdentifier}/privacybudgets',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['membershipIdentifier', 'privacyBudgetType'],
              members: {
                membershipIdentifier: {
                  location: 'uri',
                  locationName: 'membershipIdentifier'
                },
                privacyBudgetType: {
                  location: 'querystring',
                  locationName: 'privacyBudgetType'
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
              required: ['privacyBudgetSummaries'],
              members: {
                privacyBudgetSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['id', 'privacyBudgetTemplateId', 'privacyBudgetTemplateArn', 'membershipId', 'membershipArn', 'collaborationId', 'collaborationArn', 'type', 'createTime', 'updateTime', 'budget'],
                    members: {
                      id: {},
                      privacyBudgetTemplateId: {},
                      privacyBudgetTemplateArn: {},
                      membershipId: {},
                      membershipArn: {},
                      collaborationId: {},
                      collaborationArn: {},
                      type: {},
                      createTime: {
                        type: 'timestamp'
                      },
                      updateTime: {
                        type: 'timestamp'
                      },
                      budget: {
                        shape: 'S7f'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListProtectedQueries: {
            http: {
              method: 'GET',
              requestUri: '/memberships/{membershipIdentifier}/protectedQueries',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['membershipIdentifier'],
              members: {
                membershipIdentifier: {
                  location: 'uri',
                  locationName: 'membershipIdentifier'
                },
                status: {
                  location: 'querystring',
                  locationName: 'status'
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
              required: ['protectedQueries'],
              members: {
                nextToken: {},
                protectedQueries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['id', 'membershipId', 'membershipArn', 'createTime', 'status'],
                    members: {
                      id: {},
                      membershipId: {},
                      membershipArn: {},
                      createTime: {
                        type: 'timestamp'
                      },
                      status: {}
                    }
                  }
                }
              }
            }
          },
          ListSchemas: {
            http: {
              method: 'GET',
              requestUri: '/collaborations/{collaborationIdentifier}/schemas',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['collaborationIdentifier'],
              members: {
                collaborationIdentifier: {
                  location: 'uri',
                  locationName: 'collaborationIdentifier'
                },
                schemaType: {
                  location: 'querystring',
                  locationName: 'schemaType'
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
              required: ['schemaSummaries'],
              members: {
                schemaSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['name', 'type', 'creatorAccountId', 'createTime', 'updateTime', 'collaborationId', 'collaborationArn', 'analysisRuleTypes'],
                    members: {
                      name: {},
                      type: {},
                      creatorAccountId: {},
                      createTime: {
                        type: 'timestamp'
                      },
                      updateTime: {
                        type: 'timestamp'
                      },
                      collaborationId: {},
                      collaborationArn: {},
                      analysisRuleTypes: {
                        shape: 'S18'
                      },
                      analysisMethod: {}
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
              required: ['tags'],
              members: {
                tags: {
                  shape: 'S2o'
                }
              }
            }
          },
          PreviewPrivacyImpact: {
            http: {
              requestUri: '/memberships/{membershipIdentifier}/previewprivacyimpact',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['membershipIdentifier', 'parameters'],
              members: {
                membershipIdentifier: {
                  location: 'uri',
                  locationName: 'membershipIdentifier'
                },
                parameters: {
                  type: 'structure',
                  members: {
                    differentialPrivacy: {
                      type: 'structure',
                      required: ['epsilon', 'usersNoisePerQuery'],
                      members: {
                        epsilon: {
                          type: 'integer'
                        },
                        usersNoisePerQuery: {
                          type: 'integer'
                        }
                      }
                    }
                  },
                  union: true
                }
              }
            },
            output: {
              type: 'structure',
              required: ['privacyImpact'],
              members: {
                privacyImpact: {
                  type: 'structure',
                  members: {
                    differentialPrivacy: {
                      type: 'structure',
                      required: ['aggregations'],
                      members: {
                        aggregations: {
                          type: 'list',
                          member: {
                            type: 'structure',
                            required: ['type', 'maxCount'],
                            members: {
                              type: {},
                              maxCount: {
                                type: 'integer'
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  union: true
                }
              }
            }
          },
          StartProtectedQuery: {
            http: {
              requestUri: '/memberships/{membershipIdentifier}/protectedQueries',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['type', 'membershipIdentifier', 'sqlParameters'],
              members: {
                type: {},
                membershipIdentifier: {
                  location: 'uri',
                  locationName: 'membershipIdentifier'
                },
                sqlParameters: {
                  shape: 'S64'
                },
                resultConfiguration: {
                  shape: 'S68'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['protectedQuery'],
              members: {
                protectedQuery: {
                  shape: 'S63'
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
                  shape: 'S2o'
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
            }
          },
          UpdateAnalysisTemplate: {
            http: {
              method: 'PATCH',
              requestUri: '/memberships/{membershipIdentifier}/analysistemplates/{analysisTemplateIdentifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['membershipIdentifier', 'analysisTemplateIdentifier'],
              members: {
                membershipIdentifier: {
                  location: 'uri',
                  locationName: 'membershipIdentifier'
                },
                analysisTemplateIdentifier: {
                  location: 'uri',
                  locationName: 'analysisTemplateIdentifier'
                },
                description: {}
              }
            },
            output: {
              type: 'structure',
              required: ['analysisTemplate'],
              members: {
                analysisTemplate: {
                  shape: 'S2s'
                }
              }
            }
          },
          UpdateCollaboration: {
            http: {
              method: 'PATCH',
              requestUri: '/collaborations/{collaborationIdentifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['collaborationIdentifier'],
              members: {
                collaborationIdentifier: {
                  location: 'uri',
                  locationName: 'collaborationIdentifier'
                },
                name: {},
                description: {}
              }
            },
            output: {
              type: 'structure',
              required: ['collaboration'],
              members: {
                collaboration: {
                  shape: 'S38'
                }
              }
            }
          },
          UpdateConfiguredAudienceModelAssociation: {
            http: {
              method: 'PATCH',
              requestUri: '/memberships/{membershipIdentifier}/configuredaudiencemodelassociations/{configuredAudienceModelAssociationIdentifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['configuredAudienceModelAssociationIdentifier', 'membershipIdentifier'],
              members: {
                configuredAudienceModelAssociationIdentifier: {
                  location: 'uri',
                  locationName: 'configuredAudienceModelAssociationIdentifier'
                },
                membershipIdentifier: {
                  location: 'uri',
                  locationName: 'membershipIdentifier'
                },
                description: {},
                name: {}
              }
            },
            output: {
              type: 'structure',
              required: ['configuredAudienceModelAssociation'],
              members: {
                configuredAudienceModelAssociation: {
                  shape: 'S3e'
                }
              }
            }
          },
          UpdateConfiguredTable: {
            http: {
              method: 'PATCH',
              requestUri: '/configuredTables/{configuredTableIdentifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['configuredTableIdentifier'],
              members: {
                configuredTableIdentifier: {
                  location: 'uri',
                  locationName: 'configuredTableIdentifier'
                },
                name: {},
                description: {}
              }
            },
            output: {
              type: 'structure',
              required: ['configuredTable'],
              members: {
                configuredTable: {
                  shape: 'S3o'
                }
              }
            }
          },
          UpdateConfiguredTableAnalysisRule: {
            http: {
              method: 'PATCH',
              requestUri: '/configuredTables/{configuredTableIdentifier}/analysisRule/{analysisRuleType}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['configuredTableIdentifier', 'analysisRuleType', 'analysisRulePolicy'],
              members: {
                configuredTableIdentifier: {
                  location: 'uri',
                  locationName: 'configuredTableIdentifier'
                },
                analysisRuleType: {
                  location: 'uri',
                  locationName: 'analysisRuleType'
                },
                analysisRulePolicy: {
                  shape: 'S3u'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['analysisRule'],
              members: {
                analysisRule: {
                  shape: 'S3x'
                }
              }
            }
          },
          UpdateConfiguredTableAssociation: {
            http: {
              method: 'PATCH',
              requestUri: '/memberships/{membershipIdentifier}/configuredTableAssociations/{configuredTableAssociationIdentifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['configuredTableAssociationIdentifier', 'membershipIdentifier'],
              members: {
                configuredTableAssociationIdentifier: {
                  location: 'uri',
                  locationName: 'configuredTableAssociationIdentifier'
                },
                membershipIdentifier: {
                  location: 'uri',
                  locationName: 'membershipIdentifier'
                },
                description: {},
                roleArn: {}
              }
            },
            output: {
              type: 'structure',
              required: ['configuredTableAssociation'],
              members: {
                configuredTableAssociation: {
                  shape: 'S41'
                }
              }
            }
          },
          UpdateMembership: {
            http: {
              method: 'PATCH',
              requestUri: '/memberships/{membershipIdentifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['membershipIdentifier'],
              members: {
                membershipIdentifier: {
                  location: 'uri',
                  locationName: 'membershipIdentifier'
                },
                queryLogStatus: {},
                defaultResultConfiguration: {
                  shape: 'S45'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['membership'],
              members: {
                membership: {
                  shape: 'S4e'
                }
              }
            }
          },
          UpdatePrivacyBudgetTemplate: {
            http: {
              method: 'PATCH',
              requestUri: '/memberships/{membershipIdentifier}/privacybudgettemplates/{privacyBudgetTemplateIdentifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['membershipIdentifier', 'privacyBudgetTemplateIdentifier', 'privacyBudgetType'],
              members: {
                membershipIdentifier: {
                  location: 'uri',
                  locationName: 'membershipIdentifier'
                },
                privacyBudgetTemplateIdentifier: {
                  location: 'uri',
                  locationName: 'privacyBudgetTemplateIdentifier'
                },
                privacyBudgetType: {},
                parameters: {
                  type: 'structure',
                  members: {
                    differentialPrivacy: {
                      type: 'structure',
                      members: {
                        epsilon: {
                          type: 'integer'
                        },
                        usersNoisePerQuery: {
                          type: 'integer'
                        }
                      }
                    }
                  },
                  union: true
                }
              }
            },
            output: {
              type: 'structure',
              required: ['privacyBudgetTemplate'],
              members: {
                privacyBudgetTemplate: {
                  shape: 'S4o'
                }
              }
            }
          },
          UpdateProtectedQuery: {
            http: {
              method: 'PATCH',
              requestUri: '/memberships/{membershipIdentifier}/protectedQueries/{protectedQueryIdentifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['membershipIdentifier', 'protectedQueryIdentifier', 'targetStatus'],
              members: {
                membershipIdentifier: {
                  location: 'uri',
                  locationName: 'membershipIdentifier'
                },
                protectedQueryIdentifier: {
                  location: 'uri',
                  locationName: 'protectedQueryIdentifier'
                },
                targetStatus: {}
              }
            },
            output: {
              type: 'structure',
              required: ['protectedQuery'],
              members: {
                protectedQuery: {
                  shape: 'S63'
                }
              }
            },
            idempotent: true
          }
        },
        shapes: {
          S7: {
            type: 'structure',
            required: ['id', 'arn', 'collaborationId', 'collaborationArn', 'creatorAccountId', 'name', 'createTime', 'updateTime', 'schema', 'format', 'source'],
            members: {
              id: {},
              arn: {},
              collaborationId: {},
              collaborationArn: {},
              description: {},
              creatorAccountId: {},
              name: {},
              createTime: {
                type: 'timestamp'
              },
              updateTime: {
                type: 'timestamp'
              },
              schema: {
                shape: 'Sf'
              },
              format: {},
              source: {
                shape: 'Sj'
              },
              analysisParameters: {
                shape: 'Sl'
              },
              validations: {
                shape: 'Sq'
              }
            }
          },
          Sf: {
            type: 'structure',
            members: {
              referencedTables: {
                type: 'list',
                member: {}
              }
            }
          },
          Sj: {
            type: 'structure',
            members: {
              text: {}
            },
            sensitive: true,
            union: true
          },
          Sl: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['name', 'type'],
              members: {
                name: {},
                type: {},
                defaultValue: {}
              },
              sensitive: true
            }
          },
          Sq: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['type', 'status'],
              members: {
                type: {},
                status: {},
                reasons: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['message'],
                    members: {
                      message: {}
                    }
                  }
                }
              }
            }
          },
          S13: {
            type: 'structure',
            required: ['columns', 'partitionKeys', 'analysisRuleTypes', 'creatorAccountId', 'name', 'collaborationId', 'collaborationArn', 'description', 'createTime', 'updateTime', 'type', 'schemaStatusDetails'],
            members: {
              columns: {
                shape: 'S14'
              },
              partitionKeys: {
                shape: 'S14'
              },
              analysisRuleTypes: {
                shape: 'S18'
              },
              analysisMethod: {},
              creatorAccountId: {},
              name: {},
              collaborationId: {},
              collaborationArn: {},
              description: {},
              createTime: {
                type: 'timestamp'
              },
              updateTime: {
                type: 'timestamp'
              },
              type: {},
              schemaStatusDetails: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['status'],
                  members: {
                    status: {},
                    reasons: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        required: ['code', 'message'],
                        members: {
                          code: {},
                          message: {}
                        }
                      }
                    },
                    analysisRuleType: {},
                    configurations: {
                      type: 'list',
                      member: {}
                    }
                  }
                }
              }
            }
          },
          S14: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['name', 'type'],
              members: {
                name: {},
                type: {}
              }
            }
          },
          S18: {
            type: 'list',
            member: {}
          },
          S1s: {
            type: 'structure',
            required: ['collaborationId', 'type', 'name', 'createTime', 'updateTime', 'policy'],
            members: {
              collaborationId: {},
              type: {},
              name: {},
              createTime: {
                type: 'timestamp'
              },
              updateTime: {
                type: 'timestamp'
              },
              policy: {
                type: 'structure',
                members: {
                  v1: {
                    type: 'structure',
                    members: {
                      list: {
                        shape: 'S1v'
                      },
                      aggregation: {
                        shape: 'S21'
                      },
                      custom: {
                        shape: 'S2d'
                      }
                    },
                    union: true
                  }
                },
                union: true
              }
            }
          },
          S1v: {
            type: 'structure',
            required: ['joinColumns', 'listColumns'],
            members: {
              joinColumns: {
                type: 'list',
                member: {}
              },
              allowedJoinOperators: {
                shape: 'S1y'
              },
              listColumns: {
                shape: 'S20'
              }
            }
          },
          S1y: {
            type: 'list',
            member: {}
          },
          S20: {
            type: 'list',
            member: {}
          },
          S21: {
            type: 'structure',
            required: ['aggregateColumns', 'joinColumns', 'dimensionColumns', 'scalarFunctions', 'outputConstraints'],
            members: {
              aggregateColumns: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['columnNames', 'function'],
                  members: {
                    columnNames: {
                      type: 'list',
                      member: {}
                    },
                    'function': {}
                  }
                }
              },
              joinColumns: {
                shape: 'S20'
              },
              joinRequired: {},
              allowedJoinOperators: {
                shape: 'S1y'
              },
              dimensionColumns: {
                shape: 'S20'
              },
              scalarFunctions: {
                type: 'list',
                member: {}
              },
              outputConstraints: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['columnName', 'minimum', 'type'],
                  members: {
                    columnName: {},
                    minimum: {
                      type: 'integer'
                    },
                    type: {}
                  }
                }
              }
            }
          },
          S2d: {
            type: 'structure',
            required: ['allowedAnalyses'],
            members: {
              allowedAnalyses: {
                type: 'list',
                member: {}
              },
              allowedAnalysisProviders: {
                type: 'list',
                member: {}
              },
              differentialPrivacy: {
                type: 'structure',
                required: ['columns'],
                members: {
                  columns: {
                    type: 'list',
                    member: {
                      type: 'structure',
                      required: ['name'],
                      members: {
                        name: {}
                      }
                    }
                  }
                }
              }
            }
          },
          S2o: {
            type: 'map',
            key: {},
            value: {}
          },
          S2s: {
            type: 'structure',
            required: ['id', 'arn', 'collaborationId', 'collaborationArn', 'membershipId', 'membershipArn', 'name', 'createTime', 'updateTime', 'schema', 'format', 'source'],
            members: {
              id: {},
              arn: {},
              collaborationId: {},
              collaborationArn: {},
              membershipId: {},
              membershipArn: {},
              description: {},
              name: {},
              createTime: {
                type: 'timestamp'
              },
              updateTime: {
                type: 'timestamp'
              },
              schema: {
                shape: 'Sf'
              },
              format: {},
              source: {
                shape: 'Sj'
              },
              analysisParameters: {
                shape: 'Sl'
              },
              validations: {
                shape: 'Sq'
              }
            }
          },
          S2x: {
            type: 'list',
            member: {}
          },
          S30: {
            type: 'structure',
            required: ['queryCompute'],
            members: {
              queryCompute: {
                type: 'structure',
                required: ['isResponsible'],
                members: {
                  isResponsible: {
                    type: 'boolean'
                  }
                }
              }
            }
          },
          S35: {
            type: 'structure',
            required: ['allowCleartext', 'allowDuplicates', 'allowJoinsOnColumnsWithDifferentNames', 'preserveNulls'],
            members: {
              allowCleartext: {
                type: 'boolean'
              },
              allowDuplicates: {
                type: 'boolean'
              },
              allowJoinsOnColumnsWithDifferentNames: {
                type: 'boolean'
              },
              preserveNulls: {
                type: 'boolean'
              }
            }
          },
          S38: {
            type: 'structure',
            required: ['id', 'arn', 'name', 'creatorAccountId', 'creatorDisplayName', 'createTime', 'updateTime', 'memberStatus', 'queryLogStatus'],
            members: {
              id: {},
              arn: {},
              name: {},
              description: {},
              creatorAccountId: {},
              creatorDisplayName: {},
              createTime: {
                type: 'timestamp'
              },
              updateTime: {
                type: 'timestamp'
              },
              memberStatus: {},
              membershipId: {},
              membershipArn: {},
              dataEncryptionMetadata: {
                shape: 'S35'
              },
              queryLogStatus: {}
            }
          },
          S3e: {
            type: 'structure',
            required: ['id', 'arn', 'configuredAudienceModelArn', 'membershipId', 'membershipArn', 'collaborationId', 'collaborationArn', 'name', 'manageResourcePolicies', 'createTime', 'updateTime'],
            members: {
              id: {},
              arn: {},
              configuredAudienceModelArn: {},
              membershipId: {},
              membershipArn: {},
              collaborationId: {},
              collaborationArn: {},
              name: {},
              manageResourcePolicies: {
                type: 'boolean'
              },
              description: {},
              createTime: {
                type: 'timestamp'
              },
              updateTime: {
                type: 'timestamp'
              }
            }
          },
          S3i: {
            type: 'structure',
            members: {
              glue: {
                type: 'structure',
                required: ['tableName', 'databaseName'],
                members: {
                  tableName: {},
                  databaseName: {}
                }
              }
            },
            union: true
          },
          S3m: {
            type: 'list',
            member: {}
          },
          S3o: {
            type: 'structure',
            required: ['id', 'arn', 'name', 'tableReference', 'createTime', 'updateTime', 'analysisRuleTypes', 'analysisMethod', 'allowedColumns'],
            members: {
              id: {},
              arn: {},
              name: {},
              description: {},
              tableReference: {
                shape: 'S3i'
              },
              createTime: {
                type: 'timestamp'
              },
              updateTime: {
                type: 'timestamp'
              },
              analysisRuleTypes: {
                shape: 'S3q'
              },
              analysisMethod: {},
              allowedColumns: {
                shape: 'S3m'
              }
            }
          },
          S3q: {
            type: 'list',
            member: {}
          },
          S3u: {
            type: 'structure',
            members: {
              v1: {
                type: 'structure',
                members: {
                  list: {
                    shape: 'S1v'
                  },
                  aggregation: {
                    shape: 'S21'
                  },
                  custom: {
                    shape: 'S2d'
                  }
                },
                union: true
              }
            },
            union: true
          },
          S3x: {
            type: 'structure',
            required: ['configuredTableId', 'configuredTableArn', 'policy', 'type', 'createTime', 'updateTime'],
            members: {
              configuredTableId: {},
              configuredTableArn: {},
              policy: {
                shape: 'S3u'
              },
              type: {},
              createTime: {
                type: 'timestamp'
              },
              updateTime: {
                type: 'timestamp'
              }
            }
          },
          S41: {
            type: 'structure',
            required: ['arn', 'id', 'configuredTableId', 'configuredTableArn', 'membershipId', 'membershipArn', 'roleArn', 'name', 'createTime', 'updateTime'],
            members: {
              arn: {},
              id: {},
              configuredTableId: {},
              configuredTableArn: {},
              membershipId: {},
              membershipArn: {},
              roleArn: {},
              name: {},
              description: {},
              createTime: {
                type: 'timestamp'
              },
              updateTime: {
                type: 'timestamp'
              }
            }
          },
          S45: {
            type: 'structure',
            required: ['outputConfiguration'],
            members: {
              outputConfiguration: {
                type: 'structure',
                members: {
                  s3: {
                    shape: 'S47'
                  }
                },
                union: true
              },
              roleArn: {}
            }
          },
          S47: {
            type: 'structure',
            required: ['resultFormat', 'bucket'],
            members: {
              resultFormat: {},
              bucket: {},
              keyPrefix: {}
            }
          },
          S4b: {
            type: 'structure',
            required: ['queryCompute'],
            members: {
              queryCompute: {
                type: 'structure',
                required: ['isResponsible'],
                members: {
                  isResponsible: {
                    type: 'boolean'
                  }
                }
              }
            }
          },
          S4e: {
            type: 'structure',
            required: ['id', 'arn', 'collaborationArn', 'collaborationId', 'collaborationCreatorAccountId', 'collaborationCreatorDisplayName', 'collaborationName', 'createTime', 'updateTime', 'status', 'memberAbilities', 'queryLogStatus', 'paymentConfiguration'],
            members: {
              id: {},
              arn: {},
              collaborationArn: {},
              collaborationId: {},
              collaborationCreatorAccountId: {},
              collaborationCreatorDisplayName: {},
              collaborationName: {},
              createTime: {
                type: 'timestamp'
              },
              updateTime: {
                type: 'timestamp'
              },
              status: {},
              memberAbilities: {
                shape: 'S2x'
              },
              queryLogStatus: {},
              defaultResultConfiguration: {
                shape: 'S45'
              },
              paymentConfiguration: {
                shape: 'S4b'
              }
            }
          },
          S4o: {
            type: 'structure',
            required: ['id', 'arn', 'membershipId', 'membershipArn', 'collaborationId', 'collaborationArn', 'createTime', 'updateTime', 'privacyBudgetType', 'autoRefresh', 'parameters'],
            members: {
              id: {},
              arn: {},
              membershipId: {},
              membershipArn: {},
              collaborationId: {},
              collaborationArn: {},
              createTime: {
                type: 'timestamp'
              },
              updateTime: {
                type: 'timestamp'
              },
              privacyBudgetType: {},
              autoRefresh: {},
              parameters: {
                shape: 'S4r'
              }
            }
          },
          S4r: {
            type: 'structure',
            members: {
              differentialPrivacy: {
                type: 'structure',
                required: ['epsilon', 'usersNoisePerQuery'],
                members: {
                  epsilon: {
                    type: 'integer'
                  },
                  usersNoisePerQuery: {
                    type: 'integer'
                  }
                }
              }
            },
            union: true
          },
          S63: {
            type: 'structure',
            required: ['id', 'membershipId', 'membershipArn', 'createTime', 'status'],
            members: {
              id: {},
              membershipId: {},
              membershipArn: {},
              createTime: {
                type: 'timestamp'
              },
              sqlParameters: {
                shape: 'S64'
              },
              status: {},
              resultConfiguration: {
                shape: 'S68'
              },
              statistics: {
                type: 'structure',
                members: {
                  totalDurationInMillis: {
                    type: 'long'
                  }
                }
              },
              result: {
                type: 'structure',
                required: ['output'],
                members: {
                  output: {
                    type: 'structure',
                    members: {
                      s3: {
                        type: 'structure',
                        required: ['location'],
                        members: {
                          location: {}
                        }
                      },
                      memberList: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          required: ['accountId'],
                          members: {
                            accountId: {}
                          }
                        }
                      }
                    },
                    union: true
                  }
                }
              },
              error: {
                type: 'structure',
                required: ['message', 'code'],
                members: {
                  message: {},
                  code: {}
                }
              },
              differentialPrivacy: {
                type: 'structure',
                required: ['sensitivityParameters'],
                members: {
                  sensitivityParameters: {
                    type: 'list',
                    member: {
                      type: 'structure',
                      required: ['aggregationType', 'aggregationExpression', 'userContributionLimit'],
                      members: {
                        aggregationType: {},
                        aggregationExpression: {},
                        userContributionLimit: {
                          type: 'integer'
                        },
                        minColumnValue: {
                          type: 'float'
                        },
                        maxColumnValue: {
                          type: 'float'
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          S64: {
            type: 'structure',
            members: {
              queryString: {},
              analysisTemplateArn: {},
              parameters: {
                type: 'map',
                key: {},
                value: {}
              }
            },
            sensitive: true
          },
          S68: {
            type: 'structure',
            required: ['outputConfiguration'],
            members: {
              outputConfiguration: {
                type: 'structure',
                members: {
                  s3: {
                    shape: 'S47'
                  }
                },
                union: true
              }
            }
          },
          S7f: {
            type: 'structure',
            members: {
              differentialPrivacy: {
                type: 'structure',
                required: ['aggregations', 'epsilon'],
                members: {
                  aggregations: {
                    type: 'list',
                    member: {
                      type: 'structure',
                      required: ['type', 'maxCount', 'remainingCount'],
                      members: {
                        type: {},
                        maxCount: {
                          type: 'integer'
                        },
                        remainingCount: {
                          type: 'integer'
                        }
                      }
                    }
                  },
                  epsilon: {
                    type: 'integer'
                  }
                }
              }
            },
            union: true
          }
        }
      });
    }
  };
});
//# sourceMappingURL=e7e3b26d5a425d40ded4bd0da68a882f87a489e7.js.map