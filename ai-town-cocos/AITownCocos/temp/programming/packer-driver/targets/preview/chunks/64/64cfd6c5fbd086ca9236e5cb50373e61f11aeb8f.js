System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2019-09-19',
          endpointPrefix: 'codeguru-reviewer',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceAbbreviation: 'CodeGuruReviewer',
          serviceFullName: 'Amazon CodeGuru Reviewer',
          serviceId: 'CodeGuru Reviewer',
          signatureVersion: 'v4',
          signingName: 'codeguru-reviewer',
          uid: 'codeguru-reviewer-2019-09-19'
        },
        operations: {
          AssociateRepository: {
            http: {
              requestUri: '/associations'
            },
            input: {
              type: 'structure',
              required: ['Repository'],
              members: {
                Repository: {
                  type: 'structure',
                  members: {
                    CodeCommit: {
                      type: 'structure',
                      required: ['Name'],
                      members: {
                        Name: {}
                      }
                    },
                    Bitbucket: {
                      shape: 'S5'
                    },
                    GitHubEnterpriseServer: {
                      shape: 'S5'
                    },
                    S3Bucket: {
                      type: 'structure',
                      required: ['Name', 'BucketName'],
                      members: {
                        Name: {},
                        BucketName: {}
                      }
                    }
                  }
                },
                ClientRequestToken: {
                  idempotencyToken: true
                },
                Tags: {
                  shape: 'Sb'
                },
                KMSKeyDetails: {
                  shape: 'Se'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                RepositoryAssociation: {
                  shape: 'Si'
                },
                Tags: {
                  shape: 'Sb'
                }
              }
            }
          },
          CreateCodeReview: {
            http: {
              requestUri: '/codereviews'
            },
            input: {
              type: 'structure',
              required: ['Name', 'RepositoryAssociationArn', 'Type'],
              members: {
                Name: {},
                RepositoryAssociationArn: {},
                Type: {
                  type: 'structure',
                  required: ['RepositoryAnalysis'],
                  members: {
                    RepositoryAnalysis: {
                      type: 'structure',
                      members: {
                        RepositoryHead: {
                          shape: 'Sy'
                        },
                        SourceCodeType: {
                          shape: 'S10'
                        }
                      }
                    },
                    AnalysisTypes: {
                      shape: 'S1c'
                    }
                  }
                },
                ClientRequestToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                CodeReview: {
                  shape: 'S1f'
                }
              }
            }
          },
          DescribeCodeReview: {
            http: {
              method: 'GET',
              requestUri: '/codereviews/{CodeReviewArn}'
            },
            input: {
              type: 'structure',
              required: ['CodeReviewArn'],
              members: {
                CodeReviewArn: {
                  location: 'uri',
                  locationName: 'CodeReviewArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                CodeReview: {
                  shape: 'S1f'
                }
              }
            }
          },
          DescribeRecommendationFeedback: {
            http: {
              method: 'GET',
              requestUri: '/feedback/{CodeReviewArn}'
            },
            input: {
              type: 'structure',
              required: ['CodeReviewArn', 'RecommendationId'],
              members: {
                CodeReviewArn: {
                  location: 'uri',
                  locationName: 'CodeReviewArn'
                },
                RecommendationId: {
                  location: 'querystring',
                  locationName: 'RecommendationId'
                },
                UserId: {
                  location: 'querystring',
                  locationName: 'UserId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                RecommendationFeedback: {
                  type: 'structure',
                  members: {
                    CodeReviewArn: {},
                    RecommendationId: {},
                    Reactions: {
                      shape: 'S1u'
                    },
                    UserId: {},
                    CreatedTimeStamp: {
                      type: 'timestamp'
                    },
                    LastUpdatedTimeStamp: {
                      type: 'timestamp'
                    }
                  }
                }
              }
            }
          },
          DescribeRepositoryAssociation: {
            http: {
              method: 'GET',
              requestUri: '/associations/{AssociationArn}'
            },
            input: {
              type: 'structure',
              required: ['AssociationArn'],
              members: {
                AssociationArn: {
                  location: 'uri',
                  locationName: 'AssociationArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                RepositoryAssociation: {
                  shape: 'Si'
                },
                Tags: {
                  shape: 'Sb'
                }
              }
            }
          },
          DisassociateRepository: {
            http: {
              method: 'DELETE',
              requestUri: '/associations/{AssociationArn}'
            },
            input: {
              type: 'structure',
              required: ['AssociationArn'],
              members: {
                AssociationArn: {
                  location: 'uri',
                  locationName: 'AssociationArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                RepositoryAssociation: {
                  shape: 'Si'
                },
                Tags: {
                  shape: 'Sb'
                }
              }
            }
          },
          ListCodeReviews: {
            http: {
              method: 'GET',
              requestUri: '/codereviews'
            },
            input: {
              type: 'structure',
              required: ['Type'],
              members: {
                ProviderTypes: {
                  shape: 'S21',
                  location: 'querystring',
                  locationName: 'ProviderTypes'
                },
                States: {
                  location: 'querystring',
                  locationName: 'States',
                  type: 'list',
                  member: {}
                },
                RepositoryNames: {
                  location: 'querystring',
                  locationName: 'RepositoryNames',
                  type: 'list',
                  member: {}
                },
                Type: {
                  location: 'querystring',
                  locationName: 'Type'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'MaxResults',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'NextToken'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                CodeReviewSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Name: {},
                      CodeReviewArn: {},
                      RepositoryName: {},
                      Owner: {},
                      ProviderType: {},
                      State: {},
                      CreatedTimeStamp: {
                        type: 'timestamp'
                      },
                      LastUpdatedTimeStamp: {
                        type: 'timestamp'
                      },
                      Type: {},
                      PullRequestId: {},
                      MetricsSummary: {
                        type: 'structure',
                        members: {
                          MeteredLinesOfCodeCount: {
                            type: 'long'
                          },
                          SuppressedLinesOfCodeCount: {
                            type: 'long'
                          },
                          FindingsCount: {
                            type: 'long'
                          }
                        }
                      },
                      SourceCodeType: {
                        shape: 'S10'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListRecommendationFeedback: {
            http: {
              method: 'GET',
              requestUri: '/feedback/{CodeReviewArn}/RecommendationFeedback'
            },
            input: {
              type: 'structure',
              required: ['CodeReviewArn'],
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
                CodeReviewArn: {
                  location: 'uri',
                  locationName: 'CodeReviewArn'
                },
                UserIds: {
                  location: 'querystring',
                  locationName: 'UserIds',
                  type: 'list',
                  member: {}
                },
                RecommendationIds: {
                  location: 'querystring',
                  locationName: 'RecommendationIds',
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                RecommendationFeedbackSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      RecommendationId: {},
                      Reactions: {
                        shape: 'S1u'
                      },
                      UserId: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListRecommendations: {
            http: {
              method: 'GET',
              requestUri: '/codereviews/{CodeReviewArn}/Recommendations'
            },
            input: {
              type: 'structure',
              required: ['CodeReviewArn'],
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
                CodeReviewArn: {
                  location: 'uri',
                  locationName: 'CodeReviewArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                RecommendationSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      FilePath: {},
                      RecommendationId: {},
                      StartLine: {
                        type: 'integer'
                      },
                      EndLine: {
                        type: 'integer'
                      },
                      Description: {},
                      RecommendationCategory: {},
                      RuleMetadata: {
                        type: 'structure',
                        members: {
                          RuleId: {},
                          RuleName: {},
                          ShortDescription: {},
                          LongDescription: {},
                          RuleTags: {
                            type: 'list',
                            member: {}
                          }
                        }
                      },
                      Severity: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListRepositoryAssociations: {
            http: {
              method: 'GET',
              requestUri: '/associations'
            },
            input: {
              type: 'structure',
              members: {
                ProviderTypes: {
                  shape: 'S21',
                  location: 'querystring',
                  locationName: 'ProviderType'
                },
                States: {
                  location: 'querystring',
                  locationName: 'State',
                  type: 'list',
                  member: {}
                },
                Names: {
                  location: 'querystring',
                  locationName: 'Name',
                  type: 'list',
                  member: {}
                },
                Owners: {
                  location: 'querystring',
                  locationName: 'Owner',
                  type: 'list',
                  member: {}
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'MaxResults',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'NextToken'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                RepositoryAssociationSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      AssociationArn: {},
                      ConnectionArn: {},
                      LastUpdatedTimeStamp: {
                        type: 'timestamp'
                      },
                      AssociationId: {},
                      Name: {},
                      Owner: {},
                      ProviderType: {},
                      State: {}
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
              requestUri: '/tags/{resourceArn}'
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
                Tags: {
                  shape: 'Sb'
                }
              }
            }
          },
          PutRecommendationFeedback: {
            http: {
              method: 'PUT',
              requestUri: '/feedback'
            },
            input: {
              type: 'structure',
              required: ['CodeReviewArn', 'RecommendationId', 'Reactions'],
              members: {
                CodeReviewArn: {},
                RecommendationId: {},
                Reactions: {
                  shape: 'S1u'
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
              required: ['resourceArn', 'Tags'],
              members: {
                resourceArn: {
                  location: 'uri',
                  locationName: 'resourceArn'
                },
                Tags: {
                  shape: 'Sb'
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
              required: ['resourceArn', 'TagKeys'],
              members: {
                resourceArn: {
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
          }
        },
        shapes: {
          S5: {
            type: 'structure',
            required: ['Name', 'ConnectionArn', 'Owner'],
            members: {
              Name: {},
              ConnectionArn: {},
              Owner: {}
            }
          },
          Sb: {
            type: 'map',
            key: {},
            value: {}
          },
          Se: {
            type: 'structure',
            members: {
              KMSKeyId: {},
              EncryptionOption: {}
            }
          },
          Si: {
            type: 'structure',
            members: {
              AssociationId: {},
              AssociationArn: {},
              ConnectionArn: {},
              Name: {},
              Owner: {},
              ProviderType: {},
              State: {},
              StateReason: {},
              LastUpdatedTimeStamp: {
                type: 'timestamp'
              },
              CreatedTimeStamp: {
                type: 'timestamp'
              },
              KMSKeyDetails: {
                shape: 'Se'
              },
              S3RepositoryDetails: {
                shape: 'Sp'
              }
            }
          },
          Sp: {
            type: 'structure',
            members: {
              BucketName: {},
              CodeArtifacts: {
                type: 'structure',
                required: ['SourceCodeArtifactsObjectKey'],
                members: {
                  SourceCodeArtifactsObjectKey: {},
                  BuildArtifactsObjectKey: {}
                }
              }
            }
          },
          Sy: {
            type: 'structure',
            required: ['BranchName'],
            members: {
              BranchName: {}
            }
          },
          S10: {
            type: 'structure',
            members: {
              CommitDiff: {
                type: 'structure',
                members: {
                  SourceCommit: {},
                  DestinationCommit: {},
                  MergeBaseCommit: {}
                }
              },
              RepositoryHead: {
                shape: 'Sy'
              },
              BranchDiff: {
                type: 'structure',
                required: ['SourceBranchName', 'DestinationBranchName'],
                members: {
                  SourceBranchName: {},
                  DestinationBranchName: {}
                }
              },
              S3BucketRepository: {
                type: 'structure',
                required: ['Name'],
                members: {
                  Name: {},
                  Details: {
                    shape: 'Sp'
                  }
                }
              },
              RequestMetadata: {
                type: 'structure',
                members: {
                  RequestId: {},
                  Requester: {},
                  EventInfo: {
                    type: 'structure',
                    members: {
                      Name: {},
                      State: {}
                    }
                  },
                  VendorName: {}
                }
              }
            }
          },
          S1c: {
            type: 'list',
            member: {}
          },
          S1f: {
            type: 'structure',
            members: {
              Name: {},
              CodeReviewArn: {},
              RepositoryName: {},
              Owner: {},
              ProviderType: {},
              State: {},
              StateReason: {},
              CreatedTimeStamp: {
                type: 'timestamp'
              },
              LastUpdatedTimeStamp: {
                type: 'timestamp'
              },
              Type: {},
              PullRequestId: {},
              SourceCodeType: {
                shape: 'S10'
              },
              AssociationArn: {},
              Metrics: {
                type: 'structure',
                members: {
                  MeteredLinesOfCodeCount: {
                    type: 'long'
                  },
                  SuppressedLinesOfCodeCount: {
                    type: 'long'
                  },
                  FindingsCount: {
                    type: 'long'
                  }
                }
              },
              AnalysisTypes: {
                shape: 'S1c'
              },
              ConfigFileState: {}
            }
          },
          S1u: {
            type: 'list',
            member: {}
          },
          S21: {
            type: 'list',
            member: {}
          }
        }
      });
    }
  };
});
//# sourceMappingURL=64cfd6c5fbd086ca9236e5cb50373e61f11aeb8f.js.map