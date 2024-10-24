System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2020-03-31',
          endpointPrefix: 'wellarchitected',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceAbbreviation: 'Well-Architected',
          serviceFullName: 'AWS Well-Architected Tool',
          serviceId: 'WellArchitected',
          signatureVersion: 'v4',
          signingName: 'wellarchitected',
          uid: 'wellarchitected-2020-03-31'
        },
        operations: {
          AssociateLenses: {
            http: {
              method: 'PATCH',
              requestUri: '/workloads/{WorkloadId}/associateLenses'
            },
            input: {
              type: 'structure',
              required: ['WorkloadId', 'LensAliases'],
              members: {
                WorkloadId: {
                  location: 'uri',
                  locationName: 'WorkloadId'
                },
                LensAliases: {
                  shape: 'S3'
                }
              }
            }
          },
          AssociateProfiles: {
            http: {
              method: 'PATCH',
              requestUri: '/workloads/{WorkloadId}/associateProfiles'
            },
            input: {
              type: 'structure',
              required: ['WorkloadId', 'ProfileArns'],
              members: {
                WorkloadId: {
                  location: 'uri',
                  locationName: 'WorkloadId'
                },
                ProfileArns: {
                  shape: 'S6'
                }
              }
            }
          },
          CreateLensShare: {
            http: {
              requestUri: '/lenses/{LensAlias}/shares'
            },
            input: {
              type: 'structure',
              required: ['LensAlias', 'SharedWith', 'ClientRequestToken'],
              members: {
                LensAlias: {
                  location: 'uri',
                  locationName: 'LensAlias'
                },
                SharedWith: {},
                ClientRequestToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ShareId: {}
              }
            }
          },
          CreateLensVersion: {
            http: {
              requestUri: '/lenses/{LensAlias}/versions'
            },
            input: {
              type: 'structure',
              required: ['LensAlias', 'LensVersion', 'ClientRequestToken'],
              members: {
                LensAlias: {
                  location: 'uri',
                  locationName: 'LensAlias'
                },
                LensVersion: {},
                IsMajorVersion: {
                  type: 'boolean'
                },
                ClientRequestToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                LensArn: {},
                LensVersion: {}
              }
            }
          },
          CreateMilestone: {
            http: {
              requestUri: '/workloads/{WorkloadId}/milestones'
            },
            input: {
              type: 'structure',
              required: ['WorkloadId', 'MilestoneName', 'ClientRequestToken'],
              members: {
                WorkloadId: {
                  location: 'uri',
                  locationName: 'WorkloadId'
                },
                MilestoneName: {},
                ClientRequestToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                WorkloadId: {},
                MilestoneNumber: {
                  type: 'integer'
                }
              }
            }
          },
          CreateProfile: {
            http: {
              requestUri: '/profiles'
            },
            input: {
              type: 'structure',
              required: ['ProfileName', 'ProfileDescription', 'ProfileQuestions', 'ClientRequestToken'],
              members: {
                ProfileName: {},
                ProfileDescription: {},
                ProfileQuestions: {
                  shape: 'Sp'
                },
                ClientRequestToken: {
                  idempotencyToken: true
                },
                Tags: {
                  shape: 'Su'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ProfileArn: {},
                ProfileVersion: {}
              }
            }
          },
          CreateProfileShare: {
            http: {
              requestUri: '/profiles/{ProfileArn}/shares'
            },
            input: {
              type: 'structure',
              required: ['ProfileArn', 'SharedWith', 'ClientRequestToken'],
              members: {
                ProfileArn: {
                  location: 'uri',
                  locationName: 'ProfileArn'
                },
                SharedWith: {},
                ClientRequestToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ShareId: {},
                ProfileArn: {}
              }
            }
          },
          CreateReviewTemplate: {
            http: {
              requestUri: '/reviewTemplates'
            },
            input: {
              type: 'structure',
              required: ['TemplateName', 'Description', 'Lenses', 'ClientRequestToken'],
              members: {
                TemplateName: {},
                Description: {},
                Lenses: {
                  shape: 'S14'
                },
                Notes: {},
                Tags: {
                  shape: 'Su'
                },
                ClientRequestToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                TemplateArn: {}
              }
            }
          },
          CreateTemplateShare: {
            http: {
              requestUri: '/templates/shares/{TemplateArn}'
            },
            input: {
              type: 'structure',
              required: ['TemplateArn', 'SharedWith', 'ClientRequestToken'],
              members: {
                TemplateArn: {
                  location: 'uri',
                  locationName: 'TemplateArn'
                },
                SharedWith: {},
                ClientRequestToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                TemplateArn: {},
                ShareId: {}
              }
            }
          },
          CreateWorkload: {
            http: {
              requestUri: '/workloads'
            },
            input: {
              type: 'structure',
              required: ['WorkloadName', 'Description', 'Environment', 'Lenses', 'ClientRequestToken'],
              members: {
                WorkloadName: {},
                Description: {},
                Environment: {},
                AccountIds: {
                  shape: 'S1e'
                },
                AwsRegions: {
                  shape: 'S1g'
                },
                NonAwsRegions: {
                  shape: 'S1i'
                },
                PillarPriorities: {
                  shape: 'S1k'
                },
                ArchitecturalDesign: {},
                ReviewOwner: {},
                IndustryType: {},
                Industry: {},
                Lenses: {
                  shape: 'S1q'
                },
                Notes: {},
                ClientRequestToken: {
                  idempotencyToken: true
                },
                Tags: {
                  shape: 'Su'
                },
                DiscoveryConfig: {
                  shape: 'S1r'
                },
                Applications: {
                  shape: 'S1v'
                },
                ProfileArns: {
                  type: 'list',
                  member: {}
                },
                ReviewTemplateArns: {
                  type: 'list',
                  member: {}
                },
                JiraConfiguration: {
                  shape: 'S1z'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                WorkloadId: {},
                WorkloadArn: {}
              }
            }
          },
          CreateWorkloadShare: {
            http: {
              requestUri: '/workloads/{WorkloadId}/shares'
            },
            input: {
              type: 'structure',
              required: ['WorkloadId', 'SharedWith', 'PermissionType', 'ClientRequestToken'],
              members: {
                WorkloadId: {
                  location: 'uri',
                  locationName: 'WorkloadId'
                },
                SharedWith: {},
                PermissionType: {},
                ClientRequestToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                WorkloadId: {},
                ShareId: {}
              }
            }
          },
          DeleteLens: {
            http: {
              method: 'DELETE',
              requestUri: '/lenses/{LensAlias}'
            },
            input: {
              type: 'structure',
              required: ['LensAlias', 'ClientRequestToken', 'LensStatus'],
              members: {
                LensAlias: {
                  location: 'uri',
                  locationName: 'LensAlias'
                },
                ClientRequestToken: {
                  idempotencyToken: true,
                  location: 'querystring',
                  locationName: 'ClientRequestToken'
                },
                LensStatus: {
                  location: 'querystring',
                  locationName: 'LensStatus'
                }
              }
            }
          },
          DeleteLensShare: {
            http: {
              method: 'DELETE',
              requestUri: '/lenses/{LensAlias}/shares/{ShareId}'
            },
            input: {
              type: 'structure',
              required: ['ShareId', 'LensAlias', 'ClientRequestToken'],
              members: {
                ShareId: {
                  location: 'uri',
                  locationName: 'ShareId'
                },
                LensAlias: {
                  location: 'uri',
                  locationName: 'LensAlias'
                },
                ClientRequestToken: {
                  idempotencyToken: true,
                  location: 'querystring',
                  locationName: 'ClientRequestToken'
                }
              }
            }
          },
          DeleteProfile: {
            http: {
              method: 'DELETE',
              requestUri: '/profiles/{ProfileArn}'
            },
            input: {
              type: 'structure',
              required: ['ProfileArn', 'ClientRequestToken'],
              members: {
                ProfileArn: {
                  location: 'uri',
                  locationName: 'ProfileArn'
                },
                ClientRequestToken: {
                  idempotencyToken: true,
                  location: 'querystring',
                  locationName: 'ClientRequestToken'
                }
              }
            }
          },
          DeleteProfileShare: {
            http: {
              method: 'DELETE',
              requestUri: '/profiles/{ProfileArn}/shares/{ShareId}'
            },
            input: {
              type: 'structure',
              required: ['ShareId', 'ProfileArn', 'ClientRequestToken'],
              members: {
                ShareId: {
                  location: 'uri',
                  locationName: 'ShareId'
                },
                ProfileArn: {
                  location: 'uri',
                  locationName: 'ProfileArn'
                },
                ClientRequestToken: {
                  idempotencyToken: true,
                  location: 'querystring',
                  locationName: 'ClientRequestToken'
                }
              }
            }
          },
          DeleteReviewTemplate: {
            http: {
              method: 'DELETE',
              requestUri: '/reviewTemplates/{TemplateArn}'
            },
            input: {
              type: 'structure',
              required: ['TemplateArn', 'ClientRequestToken'],
              members: {
                TemplateArn: {
                  location: 'uri',
                  locationName: 'TemplateArn'
                },
                ClientRequestToken: {
                  idempotencyToken: true,
                  location: 'querystring',
                  locationName: 'ClientRequestToken'
                }
              }
            }
          },
          DeleteTemplateShare: {
            http: {
              method: 'DELETE',
              requestUri: '/templates/shares/{TemplateArn}/{ShareId}'
            },
            input: {
              type: 'structure',
              required: ['ShareId', 'TemplateArn', 'ClientRequestToken'],
              members: {
                ShareId: {
                  location: 'uri',
                  locationName: 'ShareId'
                },
                TemplateArn: {
                  location: 'uri',
                  locationName: 'TemplateArn'
                },
                ClientRequestToken: {
                  idempotencyToken: true,
                  location: 'querystring',
                  locationName: 'ClientRequestToken'
                }
              }
            }
          },
          DeleteWorkload: {
            http: {
              method: 'DELETE',
              requestUri: '/workloads/{WorkloadId}'
            },
            input: {
              type: 'structure',
              required: ['WorkloadId', 'ClientRequestToken'],
              members: {
                WorkloadId: {
                  location: 'uri',
                  locationName: 'WorkloadId'
                },
                ClientRequestToken: {
                  idempotencyToken: true,
                  location: 'querystring',
                  locationName: 'ClientRequestToken'
                }
              }
            }
          },
          DeleteWorkloadShare: {
            http: {
              method: 'DELETE',
              requestUri: '/workloads/{WorkloadId}/shares/{ShareId}'
            },
            input: {
              type: 'structure',
              required: ['ShareId', 'WorkloadId', 'ClientRequestToken'],
              members: {
                ShareId: {
                  location: 'uri',
                  locationName: 'ShareId'
                },
                WorkloadId: {
                  location: 'uri',
                  locationName: 'WorkloadId'
                },
                ClientRequestToken: {
                  idempotencyToken: true,
                  location: 'querystring',
                  locationName: 'ClientRequestToken'
                }
              }
            }
          },
          DisassociateLenses: {
            http: {
              method: 'PATCH',
              requestUri: '/workloads/{WorkloadId}/disassociateLenses'
            },
            input: {
              type: 'structure',
              required: ['WorkloadId', 'LensAliases'],
              members: {
                WorkloadId: {
                  location: 'uri',
                  locationName: 'WorkloadId'
                },
                LensAliases: {
                  shape: 'S3'
                }
              }
            }
          },
          DisassociateProfiles: {
            http: {
              method: 'PATCH',
              requestUri: '/workloads/{WorkloadId}/disassociateProfiles'
            },
            input: {
              type: 'structure',
              required: ['WorkloadId', 'ProfileArns'],
              members: {
                WorkloadId: {
                  location: 'uri',
                  locationName: 'WorkloadId'
                },
                ProfileArns: {
                  shape: 'S6'
                }
              }
            }
          },
          ExportLens: {
            http: {
              method: 'GET',
              requestUri: '/lenses/{LensAlias}/export'
            },
            input: {
              type: 'structure',
              required: ['LensAlias'],
              members: {
                LensAlias: {
                  location: 'uri',
                  locationName: 'LensAlias'
                },
                LensVersion: {
                  location: 'querystring',
                  locationName: 'LensVersion'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                LensJSON: {}
              }
            }
          },
          GetAnswer: {
            http: {
              method: 'GET',
              requestUri: '/workloads/{WorkloadId}/lensReviews/{LensAlias}/answers/{QuestionId}'
            },
            input: {
              type: 'structure',
              required: ['WorkloadId', 'LensAlias', 'QuestionId'],
              members: {
                WorkloadId: {
                  location: 'uri',
                  locationName: 'WorkloadId'
                },
                LensAlias: {
                  location: 'uri',
                  locationName: 'LensAlias'
                },
                QuestionId: {
                  location: 'uri',
                  locationName: 'QuestionId'
                },
                MilestoneNumber: {
                  location: 'querystring',
                  locationName: 'MilestoneNumber',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                WorkloadId: {},
                MilestoneNumber: {
                  type: 'integer'
                },
                LensAlias: {},
                LensArn: {},
                Answer: {
                  shape: 'S2o'
                }
              }
            }
          },
          GetConsolidatedReport: {
            http: {
              method: 'GET',
              requestUri: '/consolidatedReport'
            },
            input: {
              type: 'structure',
              required: ['Format'],
              members: {
                Format: {
                  location: 'querystring',
                  locationName: 'Format'
                },
                IncludeSharedResources: {
                  location: 'querystring',
                  locationName: 'IncludeSharedResources',
                  type: 'boolean'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'NextToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'MaxResults',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Metrics: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      MetricType: {},
                      RiskCounts: {
                        shape: 'S3q'
                      },
                      WorkloadId: {},
                      WorkloadName: {},
                      WorkloadArn: {},
                      UpdatedAt: {
                        type: 'timestamp'
                      },
                      Lenses: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            LensArn: {},
                            Pillars: {
                              type: 'list',
                              member: {
                                type: 'structure',
                                members: {
                                  PillarId: {},
                                  RiskCounts: {
                                    shape: 'S3q'
                                  },
                                  Questions: {
                                    type: 'list',
                                    member: {
                                      type: 'structure',
                                      members: {
                                        QuestionId: {},
                                        Risk: {},
                                        BestPractices: {
                                          type: 'list',
                                          member: {
                                            type: 'structure',
                                            members: {
                                              ChoiceId: {},
                                              ChoiceTitle: {}
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            },
                            RiskCounts: {
                              shape: 'S3q'
                            }
                          }
                        }
                      },
                      LensesAppliedCount: {
                        type: 'integer'
                      }
                    }
                  }
                },
                NextToken: {},
                Base64String: {}
              }
            }
          },
          GetGlobalSettings: {
            http: {
              method: 'GET',
              requestUri: '/global-settings'
            },
            output: {
              type: 'structure',
              members: {
                OrganizationSharingStatus: {},
                DiscoveryIntegrationStatus: {},
                JiraConfiguration: {
                  type: 'structure',
                  members: {
                    IntegrationStatus: {},
                    IssueManagementStatus: {},
                    IssueManagementType: {},
                    Subdomain: {},
                    JiraProjectKey: {},
                    StatusMessage: {}
                  }
                }
              }
            }
          },
          GetLens: {
            http: {
              method: 'GET',
              requestUri: '/lenses/{LensAlias}'
            },
            input: {
              type: 'structure',
              required: ['LensAlias'],
              members: {
                LensAlias: {
                  location: 'uri',
                  locationName: 'LensAlias'
                },
                LensVersion: {
                  location: 'querystring',
                  locationName: 'LensVersion'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Lens: {
                  type: 'structure',
                  members: {
                    LensArn: {},
                    LensVersion: {},
                    Name: {},
                    Description: {},
                    Owner: {},
                    ShareInvitationId: {},
                    Tags: {
                      shape: 'Su'
                    }
                  }
                }
              }
            }
          },
          GetLensReview: {
            http: {
              method: 'GET',
              requestUri: '/workloads/{WorkloadId}/lensReviews/{LensAlias}'
            },
            input: {
              type: 'structure',
              required: ['WorkloadId', 'LensAlias'],
              members: {
                WorkloadId: {
                  location: 'uri',
                  locationName: 'WorkloadId'
                },
                LensAlias: {
                  location: 'uri',
                  locationName: 'LensAlias'
                },
                MilestoneNumber: {
                  location: 'querystring',
                  locationName: 'MilestoneNumber',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                WorkloadId: {},
                MilestoneNumber: {
                  type: 'integer'
                },
                LensReview: {
                  shape: 'S4j'
                }
              }
            }
          },
          GetLensReviewReport: {
            http: {
              method: 'GET',
              requestUri: '/workloads/{WorkloadId}/lensReviews/{LensAlias}/report'
            },
            input: {
              type: 'structure',
              required: ['WorkloadId', 'LensAlias'],
              members: {
                WorkloadId: {
                  location: 'uri',
                  locationName: 'WorkloadId'
                },
                LensAlias: {
                  location: 'uri',
                  locationName: 'LensAlias'
                },
                MilestoneNumber: {
                  location: 'querystring',
                  locationName: 'MilestoneNumber',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                WorkloadId: {},
                MilestoneNumber: {
                  type: 'integer'
                },
                LensReviewReport: {
                  type: 'structure',
                  members: {
                    LensAlias: {},
                    LensArn: {},
                    Base64String: {}
                  }
                }
              }
            }
          },
          GetLensVersionDifference: {
            http: {
              method: 'GET',
              requestUri: '/lenses/{LensAlias}/versionDifference'
            },
            input: {
              type: 'structure',
              required: ['LensAlias'],
              members: {
                LensAlias: {
                  location: 'uri',
                  locationName: 'LensAlias'
                },
                BaseLensVersion: {
                  location: 'querystring',
                  locationName: 'BaseLensVersion'
                },
                TargetLensVersion: {
                  location: 'querystring',
                  locationName: 'TargetLensVersion'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                LensAlias: {},
                LensArn: {},
                BaseLensVersion: {},
                TargetLensVersion: {},
                LatestLensVersion: {},
                VersionDifferences: {
                  type: 'structure',
                  members: {
                    PillarDifferences: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          PillarId: {},
                          PillarName: {},
                          DifferenceStatus: {},
                          QuestionDifferences: {
                            type: 'list',
                            member: {
                              type: 'structure',
                              members: {
                                QuestionId: {},
                                QuestionTitle: {},
                                DifferenceStatus: {}
                              }
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
          GetMilestone: {
            http: {
              method: 'GET',
              requestUri: '/workloads/{WorkloadId}/milestones/{MilestoneNumber}'
            },
            input: {
              type: 'structure',
              required: ['WorkloadId', 'MilestoneNumber'],
              members: {
                WorkloadId: {
                  location: 'uri',
                  locationName: 'WorkloadId'
                },
                MilestoneNumber: {
                  location: 'uri',
                  locationName: 'MilestoneNumber',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                WorkloadId: {},
                Milestone: {
                  type: 'structure',
                  members: {
                    MilestoneNumber: {
                      type: 'integer'
                    },
                    MilestoneName: {},
                    RecordedAt: {
                      type: 'timestamp'
                    },
                    Workload: {
                      shape: 'S59'
                    }
                  }
                }
              }
            }
          },
          GetProfile: {
            http: {
              method: 'GET',
              requestUri: '/profiles/{ProfileArn}'
            },
            input: {
              type: 'structure',
              required: ['ProfileArn'],
              members: {
                ProfileArn: {
                  location: 'uri',
                  locationName: 'ProfileArn'
                },
                ProfileVersion: {
                  location: 'querystring',
                  locationName: 'ProfileVersion'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Profile: {
                  shape: 'S5f'
                }
              }
            }
          },
          GetProfileTemplate: {
            http: {
              method: 'GET',
              requestUri: '/profileTemplate'
            },
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {
                ProfileTemplate: {
                  type: 'structure',
                  members: {
                    TemplateName: {},
                    TemplateQuestions: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          QuestionId: {},
                          QuestionTitle: {},
                          QuestionDescription: {},
                          QuestionChoices: {
                            type: 'list',
                            member: {
                              type: 'structure',
                              members: {
                                ChoiceId: {},
                                ChoiceTitle: {},
                                ChoiceDescription: {}
                              }
                            }
                          },
                          MinSelectedChoices: {
                            type: 'integer'
                          },
                          MaxSelectedChoices: {
                            type: 'integer'
                          }
                        }
                      }
                    },
                    CreatedAt: {
                      type: 'timestamp'
                    },
                    UpdatedAt: {
                      type: 'timestamp'
                    }
                  }
                }
              }
            }
          },
          GetReviewTemplate: {
            http: {
              method: 'GET',
              requestUri: '/reviewTemplates/{TemplateArn}'
            },
            input: {
              type: 'structure',
              required: ['TemplateArn'],
              members: {
                TemplateArn: {
                  location: 'uri',
                  locationName: 'TemplateArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ReviewTemplate: {
                  shape: 'S5w'
                }
              }
            }
          },
          GetReviewTemplateAnswer: {
            http: {
              method: 'GET',
              requestUri: '/reviewTemplates/{TemplateArn}/lensReviews/{LensAlias}/answers/{QuestionId}'
            },
            input: {
              type: 'structure',
              required: ['TemplateArn', 'LensAlias', 'QuestionId'],
              members: {
                TemplateArn: {
                  location: 'uri',
                  locationName: 'TemplateArn'
                },
                LensAlias: {
                  location: 'uri',
                  locationName: 'LensAlias'
                },
                QuestionId: {
                  location: 'uri',
                  locationName: 'QuestionId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                TemplateArn: {},
                LensAlias: {},
                Answer: {
                  shape: 'S62'
                }
              }
            }
          },
          GetReviewTemplateLensReview: {
            http: {
              method: 'GET',
              requestUri: '/reviewTemplates/{TemplateArn}/lensReviews/{LensAlias}'
            },
            input: {
              type: 'structure',
              required: ['TemplateArn', 'LensAlias'],
              members: {
                TemplateArn: {
                  location: 'uri',
                  locationName: 'TemplateArn'
                },
                LensAlias: {
                  location: 'uri',
                  locationName: 'LensAlias'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                TemplateArn: {},
                LensReview: {
                  shape: 'S66'
                }
              }
            }
          },
          GetWorkload: {
            http: {
              method: 'GET',
              requestUri: '/workloads/{WorkloadId}'
            },
            input: {
              type: 'structure',
              required: ['WorkloadId'],
              members: {
                WorkloadId: {
                  location: 'uri',
                  locationName: 'WorkloadId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Workload: {
                  shape: 'S59'
                }
              }
            }
          },
          ImportLens: {
            http: {
              method: 'PUT',
              requestUri: '/importLens'
            },
            input: {
              type: 'structure',
              required: ['JSONString', 'ClientRequestToken'],
              members: {
                LensAlias: {},
                JSONString: {},
                ClientRequestToken: {
                  idempotencyToken: true
                },
                Tags: {
                  shape: 'Su'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                LensArn: {},
                Status: {}
              }
            }
          },
          ListAnswers: {
            http: {
              method: 'GET',
              requestUri: '/workloads/{WorkloadId}/lensReviews/{LensAlias}/answers'
            },
            input: {
              type: 'structure',
              required: ['WorkloadId', 'LensAlias'],
              members: {
                WorkloadId: {
                  location: 'uri',
                  locationName: 'WorkloadId'
                },
                LensAlias: {
                  location: 'uri',
                  locationName: 'LensAlias'
                },
                PillarId: {
                  location: 'querystring',
                  locationName: 'PillarId'
                },
                MilestoneNumber: {
                  location: 'querystring',
                  locationName: 'MilestoneNumber',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'NextToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'MaxResults',
                  type: 'integer'
                },
                QuestionPriority: {
                  location: 'querystring',
                  locationName: 'QuestionPriority'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                WorkloadId: {},
                MilestoneNumber: {
                  type: 'integer'
                },
                LensAlias: {},
                LensArn: {},
                AnswerSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      QuestionId: {},
                      PillarId: {},
                      QuestionTitle: {},
                      Choices: {
                        shape: 'S2u'
                      },
                      SelectedChoices: {
                        shape: 'S35'
                      },
                      ChoiceAnswerSummaries: {
                        shape: 'S6k'
                      },
                      IsApplicable: {
                        type: 'boolean'
                      },
                      Risk: {},
                      Reason: {},
                      QuestionType: {},
                      JiraConfiguration: {
                        shape: 'S3e'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListCheckDetails: {
            http: {
              requestUri: '/workloads/{WorkloadId}/checks'
            },
            input: {
              type: 'structure',
              required: ['WorkloadId', 'LensArn', 'PillarId', 'QuestionId', 'ChoiceId'],
              members: {
                WorkloadId: {
                  location: 'uri',
                  locationName: 'WorkloadId'
                },
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                LensArn: {},
                PillarId: {},
                QuestionId: {},
                ChoiceId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                CheckDetails: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Id: {},
                      Name: {},
                      Description: {},
                      Provider: {},
                      LensArn: {},
                      PillarId: {},
                      QuestionId: {},
                      ChoiceId: {},
                      Status: {},
                      AccountId: {},
                      FlaggedResources: {
                        type: 'integer'
                      },
                      Reason: {},
                      UpdatedAt: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListCheckSummaries: {
            http: {
              requestUri: '/workloads/{WorkloadId}/checkSummaries'
            },
            input: {
              type: 'structure',
              required: ['WorkloadId', 'LensArn', 'PillarId', 'QuestionId', 'ChoiceId'],
              members: {
                WorkloadId: {
                  location: 'uri',
                  locationName: 'WorkloadId'
                },
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                LensArn: {},
                PillarId: {},
                QuestionId: {},
                ChoiceId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                CheckSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Id: {},
                      Name: {},
                      Provider: {},
                      Description: {},
                      UpdatedAt: {
                        type: 'timestamp'
                      },
                      LensArn: {},
                      PillarId: {},
                      QuestionId: {},
                      ChoiceId: {},
                      Status: {},
                      AccountSummary: {
                        type: 'map',
                        key: {},
                        value: {
                          type: 'integer'
                        }
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListLensReviewImprovements: {
            http: {
              method: 'GET',
              requestUri: '/workloads/{WorkloadId}/lensReviews/{LensAlias}/improvements'
            },
            input: {
              type: 'structure',
              required: ['WorkloadId', 'LensAlias'],
              members: {
                WorkloadId: {
                  location: 'uri',
                  locationName: 'WorkloadId'
                },
                LensAlias: {
                  location: 'uri',
                  locationName: 'LensAlias'
                },
                PillarId: {
                  location: 'querystring',
                  locationName: 'PillarId'
                },
                MilestoneNumber: {
                  location: 'querystring',
                  locationName: 'MilestoneNumber',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'NextToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'MaxResults',
                  type: 'integer'
                },
                QuestionPriority: {
                  location: 'querystring',
                  locationName: 'QuestionPriority'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                WorkloadId: {},
                MilestoneNumber: {
                  type: 'integer'
                },
                LensAlias: {},
                LensArn: {},
                ImprovementSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      QuestionId: {},
                      PillarId: {},
                      QuestionTitle: {},
                      Risk: {},
                      ImprovementPlanUrl: {},
                      ImprovementPlans: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            ChoiceId: {},
                            DisplayText: {},
                            ImprovementPlanUrl: {}
                          }
                        }
                      },
                      JiraConfiguration: {
                        shape: 'S3e'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListLensReviews: {
            http: {
              method: 'GET',
              requestUri: '/workloads/{WorkloadId}/lensReviews'
            },
            input: {
              type: 'structure',
              required: ['WorkloadId'],
              members: {
                WorkloadId: {
                  location: 'uri',
                  locationName: 'WorkloadId'
                },
                MilestoneNumber: {
                  location: 'querystring',
                  locationName: 'MilestoneNumber',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'NextToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'MaxResults',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                WorkloadId: {},
                MilestoneNumber: {
                  type: 'integer'
                },
                LensReviewSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      LensAlias: {},
                      LensArn: {},
                      LensVersion: {},
                      LensName: {},
                      LensStatus: {},
                      UpdatedAt: {
                        type: 'timestamp'
                      },
                      RiskCounts: {
                        shape: 'S3q'
                      },
                      Profiles: {
                        shape: 'S4t'
                      },
                      PrioritizedRiskCounts: {
                        shape: 'S3q'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListLensShares: {
            http: {
              method: 'GET',
              requestUri: '/lenses/{LensAlias}/shares'
            },
            input: {
              type: 'structure',
              required: ['LensAlias'],
              members: {
                LensAlias: {
                  location: 'uri',
                  locationName: 'LensAlias'
                },
                SharedWithPrefix: {
                  location: 'querystring',
                  locationName: 'SharedWithPrefix'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'NextToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'MaxResults',
                  type: 'integer'
                },
                Status: {
                  location: 'querystring',
                  locationName: 'Status'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                LensShareSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ShareId: {},
                      SharedWith: {},
                      Status: {},
                      StatusMessage: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListLenses: {
            http: {
              method: 'GET',
              requestUri: '/lenses'
            },
            input: {
              type: 'structure',
              members: {
                NextToken: {
                  location: 'querystring',
                  locationName: 'NextToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'MaxResults',
                  type: 'integer'
                },
                LensType: {
                  location: 'querystring',
                  locationName: 'LensType'
                },
                LensStatus: {
                  location: 'querystring',
                  locationName: 'LensStatus'
                },
                LensName: {
                  location: 'querystring',
                  locationName: 'LensName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                LensSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      LensArn: {},
                      LensAlias: {},
                      LensName: {},
                      LensType: {},
                      Description: {},
                      CreatedAt: {
                        type: 'timestamp'
                      },
                      UpdatedAt: {
                        type: 'timestamp'
                      },
                      LensVersion: {},
                      Owner: {},
                      LensStatus: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListMilestones: {
            http: {
              requestUri: '/workloads/{WorkloadId}/milestonesSummaries'
            },
            input: {
              type: 'structure',
              required: ['WorkloadId'],
              members: {
                WorkloadId: {
                  location: 'uri',
                  locationName: 'WorkloadId'
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
                WorkloadId: {},
                MilestoneSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      MilestoneNumber: {
                        type: 'integer'
                      },
                      MilestoneName: {},
                      RecordedAt: {
                        type: 'timestamp'
                      },
                      WorkloadSummary: {
                        shape: 'S7w'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListNotifications: {
            http: {
              requestUri: '/notifications'
            },
            input: {
              type: 'structure',
              members: {
                WorkloadId: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                ResourceArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                NotificationSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Type: {},
                      LensUpgradeSummary: {
                        type: 'structure',
                        members: {
                          WorkloadId: {},
                          WorkloadName: {},
                          LensAlias: {},
                          LensArn: {},
                          CurrentLensVersion: {},
                          LatestLensVersion: {},
                          ResourceArn: {},
                          ResourceName: {}
                        }
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListProfileNotifications: {
            http: {
              method: 'GET',
              requestUri: '/profileNotifications/'
            },
            input: {
              type: 'structure',
              members: {
                WorkloadId: {
                  location: 'querystring',
                  locationName: 'WorkloadId'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'NextToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'MaxResults',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NotificationSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      CurrentProfileVersion: {},
                      LatestProfileVersion: {},
                      Type: {},
                      ProfileArn: {},
                      ProfileName: {},
                      WorkloadId: {},
                      WorkloadName: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListProfileShares: {
            http: {
              method: 'GET',
              requestUri: '/profiles/{ProfileArn}/shares'
            },
            input: {
              type: 'structure',
              required: ['ProfileArn'],
              members: {
                ProfileArn: {
                  location: 'uri',
                  locationName: 'ProfileArn'
                },
                SharedWithPrefix: {
                  location: 'querystring',
                  locationName: 'SharedWithPrefix'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'NextToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'MaxResults',
                  type: 'integer'
                },
                Status: {
                  location: 'querystring',
                  locationName: 'Status'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ProfileShareSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ShareId: {},
                      SharedWith: {},
                      Status: {},
                      StatusMessage: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListProfiles: {
            http: {
              method: 'GET',
              requestUri: '/profileSummaries'
            },
            input: {
              type: 'structure',
              members: {
                ProfileNamePrefix: {
                  location: 'querystring',
                  locationName: 'ProfileNamePrefix'
                },
                ProfileOwnerType: {
                  location: 'querystring',
                  locationName: 'ProfileOwnerType'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'NextToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'MaxResults',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ProfileSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ProfileArn: {},
                      ProfileVersion: {},
                      ProfileName: {},
                      ProfileDescription: {},
                      Owner: {},
                      CreatedAt: {
                        type: 'timestamp'
                      },
                      UpdatedAt: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListReviewTemplateAnswers: {
            http: {
              method: 'GET',
              requestUri: '/reviewTemplates/{TemplateArn}/lensReviews/{LensAlias}/answers'
            },
            input: {
              type: 'structure',
              required: ['TemplateArn', 'LensAlias'],
              members: {
                TemplateArn: {
                  location: 'uri',
                  locationName: 'TemplateArn'
                },
                LensAlias: {
                  location: 'uri',
                  locationName: 'LensAlias'
                },
                PillarId: {
                  location: 'querystring',
                  locationName: 'PillarId'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'NextToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'MaxResults',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                TemplateArn: {},
                LensAlias: {},
                AnswerSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      QuestionId: {},
                      PillarId: {},
                      QuestionTitle: {},
                      Choices: {
                        shape: 'S2u'
                      },
                      SelectedChoices: {
                        shape: 'S35'
                      },
                      ChoiceAnswerSummaries: {
                        shape: 'S6k'
                      },
                      IsApplicable: {
                        type: 'boolean'
                      },
                      AnswerStatus: {},
                      Reason: {},
                      QuestionType: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListReviewTemplates: {
            http: {
              method: 'GET',
              requestUri: '/reviewTemplates'
            },
            input: {
              type: 'structure',
              members: {
                NextToken: {
                  location: 'querystring',
                  locationName: 'NextToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'MaxResults',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ReviewTemplates: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Description: {},
                      Lenses: {
                        shape: 'S14'
                      },
                      Owner: {},
                      UpdatedAt: {
                        type: 'timestamp'
                      },
                      TemplateArn: {},
                      TemplateName: {},
                      UpdateStatus: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListShareInvitations: {
            http: {
              method: 'GET',
              requestUri: '/shareInvitations'
            },
            input: {
              type: 'structure',
              members: {
                WorkloadNamePrefix: {
                  location: 'querystring',
                  locationName: 'WorkloadNamePrefix'
                },
                LensNamePrefix: {
                  location: 'querystring',
                  locationName: 'LensNamePrefix'
                },
                ShareResourceType: {
                  location: 'querystring',
                  locationName: 'ShareResourceType'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'NextToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'MaxResults',
                  type: 'integer'
                },
                ProfileNamePrefix: {
                  location: 'querystring',
                  locationName: 'ProfileNamePrefix'
                },
                TemplateNamePrefix: {
                  location: 'querystring',
                  locationName: 'TemplateNamePrefix'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ShareInvitationSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ShareInvitationId: {},
                      SharedBy: {},
                      SharedWith: {},
                      PermissionType: {},
                      ShareResourceType: {},
                      WorkloadName: {},
                      WorkloadId: {},
                      LensName: {},
                      LensArn: {},
                      ProfileName: {},
                      ProfileArn: {},
                      TemplateName: {},
                      TemplateArn: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListTagsForResource: {
            http: {
              method: 'GET',
              requestUri: '/tags/{WorkloadArn}'
            },
            input: {
              type: 'structure',
              required: ['WorkloadArn'],
              members: {
                WorkloadArn: {
                  location: 'uri',
                  locationName: 'WorkloadArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Tags: {
                  shape: 'Su'
                }
              }
            }
          },
          ListTemplateShares: {
            http: {
              method: 'GET',
              requestUri: '/templates/shares/{TemplateArn}'
            },
            input: {
              type: 'structure',
              required: ['TemplateArn'],
              members: {
                TemplateArn: {
                  location: 'uri',
                  locationName: 'TemplateArn'
                },
                SharedWithPrefix: {
                  location: 'querystring',
                  locationName: 'SharedWithPrefix'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'NextToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'MaxResults',
                  type: 'integer'
                },
                Status: {
                  location: 'querystring',
                  locationName: 'Status'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                TemplateArn: {},
                TemplateShareSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ShareId: {},
                      SharedWith: {},
                      Status: {},
                      StatusMessage: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListWorkloadShares: {
            http: {
              method: 'GET',
              requestUri: '/workloads/{WorkloadId}/shares'
            },
            input: {
              type: 'structure',
              required: ['WorkloadId'],
              members: {
                WorkloadId: {
                  location: 'uri',
                  locationName: 'WorkloadId'
                },
                SharedWithPrefix: {
                  location: 'querystring',
                  locationName: 'SharedWithPrefix'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'NextToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'MaxResults',
                  type: 'integer'
                },
                Status: {
                  location: 'querystring',
                  locationName: 'Status'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                WorkloadId: {},
                WorkloadShareSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ShareId: {},
                      SharedWith: {},
                      PermissionType: {},
                      Status: {},
                      StatusMessage: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListWorkloads: {
            http: {
              requestUri: '/workloadsSummaries'
            },
            input: {
              type: 'structure',
              members: {
                WorkloadNamePrefix: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                WorkloadSummaries: {
                  type: 'list',
                  member: {
                    shape: 'S7w'
                  }
                },
                NextToken: {}
              }
            }
          },
          TagResource: {
            http: {
              requestUri: '/tags/{WorkloadArn}'
            },
            input: {
              type: 'structure',
              required: ['WorkloadArn', 'Tags'],
              members: {
                WorkloadArn: {
                  location: 'uri',
                  locationName: 'WorkloadArn'
                },
                Tags: {
                  shape: 'Su'
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
              requestUri: '/tags/{WorkloadArn}'
            },
            input: {
              type: 'structure',
              required: ['WorkloadArn', 'TagKeys'],
              members: {
                WorkloadArn: {
                  location: 'uri',
                  locationName: 'WorkloadArn'
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
          UpdateAnswer: {
            http: {
              method: 'PATCH',
              requestUri: '/workloads/{WorkloadId}/lensReviews/{LensAlias}/answers/{QuestionId}'
            },
            input: {
              type: 'structure',
              required: ['WorkloadId', 'LensAlias', 'QuestionId'],
              members: {
                WorkloadId: {
                  location: 'uri',
                  locationName: 'WorkloadId'
                },
                LensAlias: {
                  location: 'uri',
                  locationName: 'LensAlias'
                },
                QuestionId: {
                  location: 'uri',
                  locationName: 'QuestionId'
                },
                SelectedChoices: {
                  shape: 'S35'
                },
                ChoiceUpdates: {
                  shape: 'S9o'
                },
                Notes: {},
                IsApplicable: {
                  type: 'boolean'
                },
                Reason: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                WorkloadId: {},
                LensAlias: {},
                LensArn: {},
                Answer: {
                  shape: 'S2o'
                }
              }
            }
          },
          UpdateGlobalSettings: {
            http: {
              method: 'PATCH',
              requestUri: '/global-settings'
            },
            input: {
              type: 'structure',
              members: {
                OrganizationSharingStatus: {},
                DiscoveryIntegrationStatus: {},
                JiraConfiguration: {
                  type: 'structure',
                  members: {
                    IssueManagementStatus: {},
                    IssueManagementType: {},
                    JiraProjectKey: {},
                    IntegrationStatus: {}
                  }
                }
              }
            }
          },
          UpdateIntegration: {
            http: {
              requestUri: '/workloads/{WorkloadId}/updateIntegration'
            },
            input: {
              type: 'structure',
              required: ['WorkloadId', 'ClientRequestToken', 'IntegratingService'],
              members: {
                WorkloadId: {
                  location: 'uri',
                  locationName: 'WorkloadId'
                },
                ClientRequestToken: {
                  idempotencyToken: true
                },
                IntegratingService: {}
              }
            }
          },
          UpdateLensReview: {
            http: {
              method: 'PATCH',
              requestUri: '/workloads/{WorkloadId}/lensReviews/{LensAlias}'
            },
            input: {
              type: 'structure',
              required: ['WorkloadId', 'LensAlias'],
              members: {
                WorkloadId: {
                  location: 'uri',
                  locationName: 'WorkloadId'
                },
                LensAlias: {
                  location: 'uri',
                  locationName: 'LensAlias'
                },
                LensNotes: {},
                PillarNotes: {
                  shape: 'S9x'
                },
                JiraConfiguration: {
                  shape: 'S4o'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                WorkloadId: {},
                LensReview: {
                  shape: 'S4j'
                }
              }
            }
          },
          UpdateProfile: {
            http: {
              method: 'PATCH',
              requestUri: '/profiles/{ProfileArn}'
            },
            input: {
              type: 'structure',
              required: ['ProfileArn'],
              members: {
                ProfileArn: {
                  location: 'uri',
                  locationName: 'ProfileArn'
                },
                ProfileDescription: {},
                ProfileQuestions: {
                  shape: 'Sp'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Profile: {
                  shape: 'S5f'
                }
              }
            }
          },
          UpdateReviewTemplate: {
            http: {
              method: 'PATCH',
              requestUri: '/reviewTemplates/{TemplateArn}'
            },
            input: {
              type: 'structure',
              required: ['TemplateArn'],
              members: {
                TemplateArn: {
                  location: 'uri',
                  locationName: 'TemplateArn'
                },
                TemplateName: {},
                Description: {},
                Notes: {},
                LensesToAssociate: {
                  shape: 'Sa2'
                },
                LensesToDisassociate: {
                  shape: 'Sa2'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ReviewTemplate: {
                  shape: 'S5w'
                }
              }
            }
          },
          UpdateReviewTemplateAnswer: {
            http: {
              method: 'PATCH',
              requestUri: '/reviewTemplates/{TemplateArn}/lensReviews/{LensAlias}/answers/{QuestionId}'
            },
            input: {
              type: 'structure',
              required: ['TemplateArn', 'LensAlias', 'QuestionId'],
              members: {
                TemplateArn: {
                  location: 'uri',
                  locationName: 'TemplateArn'
                },
                LensAlias: {
                  location: 'uri',
                  locationName: 'LensAlias'
                },
                QuestionId: {
                  location: 'uri',
                  locationName: 'QuestionId'
                },
                SelectedChoices: {
                  shape: 'S35'
                },
                ChoiceUpdates: {
                  shape: 'S9o'
                },
                Notes: {},
                IsApplicable: {
                  type: 'boolean'
                },
                Reason: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                TemplateArn: {},
                LensAlias: {},
                Answer: {
                  shape: 'S62'
                }
              }
            }
          },
          UpdateReviewTemplateLensReview: {
            http: {
              method: 'PATCH',
              requestUri: '/reviewTemplates/{TemplateArn}/lensReviews/{LensAlias}'
            },
            input: {
              type: 'structure',
              required: ['TemplateArn', 'LensAlias'],
              members: {
                TemplateArn: {
                  location: 'uri',
                  locationName: 'TemplateArn'
                },
                LensAlias: {
                  location: 'uri',
                  locationName: 'LensAlias'
                },
                LensNotes: {},
                PillarNotes: {
                  shape: 'S9x'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                TemplateArn: {},
                LensReview: {
                  shape: 'S66'
                }
              }
            }
          },
          UpdateShareInvitation: {
            http: {
              method: 'PATCH',
              requestUri: '/shareInvitations/{ShareInvitationId}'
            },
            input: {
              type: 'structure',
              required: ['ShareInvitationId', 'ShareInvitationAction'],
              members: {
                ShareInvitationId: {
                  location: 'uri',
                  locationName: 'ShareInvitationId'
                },
                ShareInvitationAction: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ShareInvitation: {
                  type: 'structure',
                  members: {
                    ShareInvitationId: {},
                    ShareResourceType: {},
                    WorkloadId: {},
                    LensAlias: {},
                    LensArn: {},
                    ProfileArn: {},
                    TemplateArn: {}
                  }
                }
              }
            }
          },
          UpdateWorkload: {
            http: {
              method: 'PATCH',
              requestUri: '/workloads/{WorkloadId}'
            },
            input: {
              type: 'structure',
              required: ['WorkloadId'],
              members: {
                WorkloadId: {
                  location: 'uri',
                  locationName: 'WorkloadId'
                },
                WorkloadName: {},
                Description: {},
                Environment: {},
                AccountIds: {
                  shape: 'S1e'
                },
                AwsRegions: {
                  shape: 'S1g'
                },
                NonAwsRegions: {
                  shape: 'S1i'
                },
                PillarPriorities: {
                  shape: 'S1k'
                },
                ArchitecturalDesign: {},
                ReviewOwner: {},
                IsReviewOwnerUpdateAcknowledged: {
                  type: 'boolean'
                },
                IndustryType: {},
                Industry: {},
                Notes: {},
                ImprovementStatus: {},
                DiscoveryConfig: {
                  shape: 'S1r'
                },
                Applications: {
                  shape: 'S1v'
                },
                JiraConfiguration: {
                  shape: 'S1z'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Workload: {
                  shape: 'S59'
                }
              }
            }
          },
          UpdateWorkloadShare: {
            http: {
              method: 'PATCH',
              requestUri: '/workloads/{WorkloadId}/shares/{ShareId}'
            },
            input: {
              type: 'structure',
              required: ['ShareId', 'WorkloadId', 'PermissionType'],
              members: {
                ShareId: {
                  location: 'uri',
                  locationName: 'ShareId'
                },
                WorkloadId: {
                  location: 'uri',
                  locationName: 'WorkloadId'
                },
                PermissionType: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                WorkloadId: {},
                WorkloadShare: {
                  type: 'structure',
                  members: {
                    ShareId: {},
                    SharedBy: {},
                    SharedWith: {},
                    PermissionType: {},
                    Status: {},
                    WorkloadName: {},
                    WorkloadId: {}
                  }
                }
              }
            }
          },
          UpgradeLensReview: {
            http: {
              method: 'PUT',
              requestUri: '/workloads/{WorkloadId}/lensReviews/{LensAlias}/upgrade'
            },
            input: {
              type: 'structure',
              required: ['WorkloadId', 'LensAlias', 'MilestoneName'],
              members: {
                WorkloadId: {
                  location: 'uri',
                  locationName: 'WorkloadId'
                },
                LensAlias: {
                  location: 'uri',
                  locationName: 'LensAlias'
                },
                MilestoneName: {},
                ClientRequestToken: {}
              }
            }
          },
          UpgradeProfileVersion: {
            http: {
              method: 'PUT',
              requestUri: '/workloads/{WorkloadId}/profiles/{ProfileArn}/upgrade'
            },
            input: {
              type: 'structure',
              required: ['WorkloadId', 'ProfileArn'],
              members: {
                WorkloadId: {
                  location: 'uri',
                  locationName: 'WorkloadId'
                },
                ProfileArn: {
                  location: 'uri',
                  locationName: 'ProfileArn'
                },
                MilestoneName: {},
                ClientRequestToken: {
                  idempotencyToken: true
                }
              }
            }
          },
          UpgradeReviewTemplateLensReview: {
            http: {
              method: 'PUT',
              requestUri: '/reviewTemplates/{TemplateArn}/lensReviews/{LensAlias}/upgrade'
            },
            input: {
              type: 'structure',
              required: ['TemplateArn', 'LensAlias'],
              members: {
                TemplateArn: {
                  location: 'uri',
                  locationName: 'TemplateArn'
                },
                LensAlias: {
                  location: 'uri',
                  locationName: 'LensAlias'
                },
                ClientRequestToken: {}
              }
            }
          }
        },
        shapes: {
          S3: {
            type: 'list',
            member: {}
          },
          S6: {
            type: 'list',
            member: {}
          },
          Sp: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                QuestionId: {},
                SelectedChoiceIds: {
                  type: 'list',
                  member: {}
                }
              }
            }
          },
          Su: {
            type: 'map',
            key: {},
            value: {}
          },
          S14: {
            type: 'list',
            member: {}
          },
          S1e: {
            type: 'list',
            member: {}
          },
          S1g: {
            type: 'list',
            member: {}
          },
          S1i: {
            type: 'list',
            member: {}
          },
          S1k: {
            type: 'list',
            member: {}
          },
          S1q: {
            type: 'list',
            member: {}
          },
          S1r: {
            type: 'structure',
            members: {
              TrustedAdvisorIntegrationStatus: {},
              WorkloadResourceDefinition: {
                type: 'list',
                member: {}
              }
            }
          },
          S1v: {
            type: 'list',
            member: {}
          },
          S1z: {
            type: 'structure',
            members: {
              IssueManagementStatus: {},
              IssueManagementType: {},
              JiraProjectKey: {}
            }
          },
          S2o: {
            type: 'structure',
            members: {
              QuestionId: {},
              PillarId: {},
              QuestionTitle: {},
              QuestionDescription: {},
              ImprovementPlanUrl: {},
              HelpfulResourceUrl: {},
              HelpfulResourceDisplayText: {},
              Choices: {
                shape: 'S2u'
              },
              SelectedChoices: {
                shape: 'S35'
              },
              ChoiceAnswers: {
                shape: 'S36'
              },
              IsApplicable: {
                type: 'boolean'
              },
              Risk: {},
              Notes: {},
              Reason: {},
              JiraConfiguration: {
                shape: 'S3e'
              }
            }
          },
          S2u: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                ChoiceId: {},
                Title: {},
                Description: {},
                HelpfulResource: {
                  shape: 'S2y'
                },
                ImprovementPlan: {
                  shape: 'S2y'
                },
                AdditionalResources: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Type: {},
                      Content: {
                        type: 'list',
                        member: {
                          shape: 'S2y'
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          S2y: {
            type: 'structure',
            members: {
              DisplayText: {},
              Url: {}
            }
          },
          S35: {
            type: 'list',
            member: {}
          },
          S36: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                ChoiceId: {},
                Status: {},
                Reason: {},
                Notes: {}
              }
            }
          },
          S3e: {
            type: 'structure',
            members: {
              JiraIssueUrl: {},
              LastSyncedTime: {
                type: 'timestamp'
              }
            }
          },
          S3q: {
            type: 'map',
            key: {},
            value: {
              type: 'integer'
            }
          },
          S4j: {
            type: 'structure',
            members: {
              LensAlias: {},
              LensArn: {},
              LensVersion: {},
              LensName: {},
              LensStatus: {},
              PillarReviewSummaries: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    PillarId: {},
                    PillarName: {},
                    Notes: {},
                    RiskCounts: {
                      shape: 'S3q'
                    },
                    PrioritizedRiskCounts: {
                      shape: 'S3q'
                    }
                  }
                }
              },
              JiraConfiguration: {
                shape: 'S4o'
              },
              UpdatedAt: {
                type: 'timestamp'
              },
              Notes: {},
              RiskCounts: {
                shape: 'S3q'
              },
              NextToken: {},
              Profiles: {
                shape: 'S4t'
              },
              PrioritizedRiskCounts: {
                shape: 'S3q'
              }
            }
          },
          S4o: {
            type: 'structure',
            members: {
              SelectedPillars: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    PillarId: {},
                    SelectedQuestionIds: {
                      type: 'list',
                      member: {}
                    }
                  }
                }
              }
            }
          },
          S4t: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                ProfileArn: {},
                ProfileVersion: {}
              }
            }
          },
          S59: {
            type: 'structure',
            members: {
              WorkloadId: {},
              WorkloadArn: {},
              WorkloadName: {},
              Description: {},
              Environment: {},
              UpdatedAt: {
                type: 'timestamp'
              },
              AccountIds: {
                shape: 'S1e'
              },
              AwsRegions: {
                shape: 'S1g'
              },
              NonAwsRegions: {
                shape: 'S1i'
              },
              ArchitecturalDesign: {},
              ReviewOwner: {},
              ReviewRestrictionDate: {
                type: 'timestamp'
              },
              IsReviewOwnerUpdateAcknowledged: {
                type: 'boolean'
              },
              IndustryType: {},
              Industry: {},
              Notes: {},
              ImprovementStatus: {},
              RiskCounts: {
                shape: 'S3q'
              },
              PillarPriorities: {
                shape: 'S1k'
              },
              Lenses: {
                shape: 'S1q'
              },
              Owner: {},
              ShareInvitationId: {},
              Tags: {
                shape: 'Su'
              },
              DiscoveryConfig: {
                shape: 'S1r'
              },
              Applications: {
                shape: 'S1v'
              },
              Profiles: {
                shape: 'S4t'
              },
              PrioritizedRiskCounts: {
                shape: 'S3q'
              },
              JiraConfiguration: {
                type: 'structure',
                members: {
                  IssueManagementStatus: {},
                  IssueManagementType: {},
                  JiraProjectKey: {},
                  StatusMessage: {}
                }
              }
            }
          },
          S5f: {
            type: 'structure',
            members: {
              ProfileArn: {},
              ProfileVersion: {},
              ProfileName: {},
              ProfileDescription: {},
              ProfileQuestions: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    QuestionId: {},
                    QuestionTitle: {},
                    QuestionDescription: {},
                    QuestionChoices: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          ChoiceId: {},
                          ChoiceTitle: {},
                          ChoiceDescription: {}
                        }
                      }
                    },
                    SelectedChoiceIds: {
                      type: 'list',
                      member: {}
                    },
                    MinSelectedChoices: {
                      type: 'integer'
                    },
                    MaxSelectedChoices: {
                      type: 'integer'
                    }
                  }
                }
              },
              Owner: {},
              CreatedAt: {
                type: 'timestamp'
              },
              UpdatedAt: {
                type: 'timestamp'
              },
              ShareInvitationId: {},
              Tags: {
                shape: 'Su'
              }
            }
          },
          S5w: {
            type: 'structure',
            members: {
              Description: {},
              Lenses: {
                shape: 'S14'
              },
              Notes: {},
              QuestionCounts: {
                shape: 'S5x'
              },
              Owner: {},
              UpdatedAt: {
                type: 'timestamp'
              },
              TemplateArn: {},
              TemplateName: {},
              Tags: {
                shape: 'Su'
              },
              UpdateStatus: {},
              ShareInvitationId: {}
            }
          },
          S5x: {
            type: 'map',
            key: {},
            value: {
              type: 'integer'
            }
          },
          S62: {
            type: 'structure',
            members: {
              QuestionId: {},
              PillarId: {},
              QuestionTitle: {},
              QuestionDescription: {},
              ImprovementPlanUrl: {},
              HelpfulResourceUrl: {},
              HelpfulResourceDisplayText: {},
              Choices: {
                shape: 'S2u'
              },
              SelectedChoices: {
                shape: 'S35'
              },
              ChoiceAnswers: {
                shape: 'S36'
              },
              IsApplicable: {
                type: 'boolean'
              },
              AnswerStatus: {},
              Notes: {},
              Reason: {}
            }
          },
          S66: {
            type: 'structure',
            members: {
              LensAlias: {},
              LensArn: {},
              LensVersion: {},
              LensName: {},
              LensStatus: {},
              PillarReviewSummaries: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    PillarId: {},
                    PillarName: {},
                    Notes: {},
                    QuestionCounts: {
                      shape: 'S5x'
                    }
                  }
                }
              },
              UpdatedAt: {
                type: 'timestamp'
              },
              Notes: {},
              QuestionCounts: {
                shape: 'S5x'
              },
              NextToken: {}
            }
          },
          S6k: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                ChoiceId: {},
                Status: {},
                Reason: {}
              }
            }
          },
          S7w: {
            type: 'structure',
            members: {
              WorkloadId: {},
              WorkloadArn: {},
              WorkloadName: {},
              Owner: {},
              UpdatedAt: {
                type: 'timestamp'
              },
              Lenses: {
                shape: 'S1q'
              },
              RiskCounts: {
                shape: 'S3q'
              },
              ImprovementStatus: {},
              Profiles: {
                shape: 'S4t'
              },
              PrioritizedRiskCounts: {
                shape: 'S3q'
              }
            }
          },
          S9o: {
            type: 'map',
            key: {},
            value: {
              type: 'structure',
              required: ['Status'],
              members: {
                Status: {},
                Reason: {},
                Notes: {}
              }
            }
          },
          S9x: {
            type: 'map',
            key: {},
            value: {}
          },
          Sa2: {
            type: 'list',
            member: {}
          }
        }
      });
    }
  };
});
//# sourceMappingURL=49b3b3e89eb4b6e8bc433f5829f85e51cffec3a3.js.map