System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2019-02-03',
          endpointPrefix: 'kendra',
          jsonVersion: '1.1',
          protocol: 'json',
          serviceAbbreviation: 'kendra',
          serviceFullName: 'AWSKendraFrontendService',
          serviceId: 'kendra',
          signatureVersion: 'v4',
          signingName: 'kendra',
          targetPrefix: 'AWSKendraFrontendService',
          uid: 'kendra-2019-02-03'
        },
        operations: {
          AssociateEntitiesToExperience: {
            input: {
              type: 'structure',
              required: ['Id', 'IndexId', 'EntityList'],
              members: {
                Id: {},
                IndexId: {},
                EntityList: {
                  type: 'list',
                  member: {
                    shape: 'S5'
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                FailedEntityList: {
                  type: 'list',
                  member: {
                    shape: 'Sa'
                  }
                }
              }
            }
          },
          AssociatePersonasToEntities: {
            input: {
              type: 'structure',
              required: ['Id', 'IndexId', 'Personas'],
              members: {
                Id: {},
                IndexId: {},
                Personas: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['EntityId', 'Persona'],
                    members: {
                      EntityId: {},
                      Persona: {}
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                FailedEntityList: {
                  shape: 'Sh'
                }
              }
            }
          },
          BatchDeleteDocument: {
            input: {
              type: 'structure',
              required: ['IndexId', 'DocumentIdList'],
              members: {
                IndexId: {},
                DocumentIdList: {
                  type: 'list',
                  member: {}
                },
                DataSourceSyncJobMetricTarget: {
                  type: 'structure',
                  required: ['DataSourceId'],
                  members: {
                    DataSourceId: {},
                    DataSourceSyncJobId: {}
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                FailedDocuments: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Id: {},
                      ErrorCode: {},
                      ErrorMessage: {}
                    }
                  }
                }
              }
            }
          },
          BatchDeleteFeaturedResultsSet: {
            input: {
              type: 'structure',
              required: ['IndexId', 'FeaturedResultsSetIds'],
              members: {
                IndexId: {},
                FeaturedResultsSetIds: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Errors'],
              members: {
                Errors: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Id', 'ErrorCode', 'ErrorMessage'],
                    members: {
                      Id: {},
                      ErrorCode: {},
                      ErrorMessage: {}
                    }
                  }
                }
              }
            }
          },
          BatchGetDocumentStatus: {
            input: {
              type: 'structure',
              required: ['IndexId', 'DocumentInfoList'],
              members: {
                IndexId: {},
                DocumentInfoList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['DocumentId'],
                    members: {
                      DocumentId: {},
                      Attributes: {
                        shape: 'S11'
                      }
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Errors: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      DocumentId: {},
                      ErrorCode: {},
                      ErrorMessage: {}
                    }
                  }
                },
                DocumentStatusList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      DocumentId: {},
                      DocumentStatus: {},
                      FailureCode: {},
                      FailureReason: {}
                    }
                  }
                }
              }
            }
          },
          BatchPutDocument: {
            input: {
              type: 'structure',
              required: ['IndexId', 'Documents'],
              members: {
                IndexId: {},
                RoleArn: {},
                Documents: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Id'],
                    members: {
                      Id: {},
                      Title: {},
                      Blob: {
                        type: 'blob'
                      },
                      S3Path: {
                        shape: 'S1m'
                      },
                      Attributes: {
                        shape: 'S11'
                      },
                      AccessControlList: {
                        shape: 'S1p'
                      },
                      HierarchicalAccessControlList: {
                        shape: 'S1u'
                      },
                      ContentType: {},
                      AccessControlConfigurationId: {}
                    }
                  }
                },
                CustomDocumentEnrichmentConfiguration: {
                  shape: 'S1y'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                FailedDocuments: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Id: {},
                      ErrorCode: {},
                      ErrorMessage: {}
                    }
                  }
                }
              }
            }
          },
          ClearQuerySuggestions: {
            input: {
              type: 'structure',
              required: ['IndexId'],
              members: {
                IndexId: {}
              }
            }
          },
          CreateAccessControlConfiguration: {
            input: {
              type: 'structure',
              required: ['IndexId', 'Name'],
              members: {
                IndexId: {},
                Name: {},
                Description: {},
                AccessControlList: {
                  shape: 'S1p'
                },
                HierarchicalAccessControlList: {
                  shape: 'S1u'
                },
                ClientToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {}
              }
            }
          },
          CreateDataSource: {
            input: {
              type: 'structure',
              required: ['Name', 'IndexId', 'Type'],
              members: {
                Name: {},
                IndexId: {},
                Type: {},
                Configuration: {
                  shape: 'S2j'
                },
                VpcConfiguration: {
                  shape: 'S2u'
                },
                Description: {},
                Schedule: {},
                RoleArn: {},
                Tags: {
                  shape: 'S6r'
                },
                ClientToken: {
                  idempotencyToken: true
                },
                LanguageCode: {},
                CustomDocumentEnrichmentConfiguration: {
                  shape: 'S1y'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {}
              }
            }
          },
          CreateExperience: {
            input: {
              type: 'structure',
              required: ['Name', 'IndexId'],
              members: {
                Name: {},
                IndexId: {},
                RoleArn: {},
                Configuration: {
                  shape: 'S6z'
                },
                Description: {},
                ClientToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {}
              }
            }
          },
          CreateFaq: {
            input: {
              type: 'structure',
              required: ['IndexId', 'Name', 'S3Path', 'RoleArn'],
              members: {
                IndexId: {},
                Name: {},
                Description: {},
                S3Path: {
                  shape: 'S1m'
                },
                RoleArn: {},
                Tags: {
                  shape: 'S6r'
                },
                FileFormat: {},
                ClientToken: {
                  idempotencyToken: true
                },
                LanguageCode: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Id: {}
              }
            }
          },
          CreateFeaturedResultsSet: {
            input: {
              type: 'structure',
              required: ['IndexId', 'FeaturedResultsSetName'],
              members: {
                IndexId: {},
                FeaturedResultsSetName: {},
                Description: {},
                ClientToken: {},
                Status: {},
                QueryTexts: {
                  shape: 'S7f'
                },
                FeaturedDocuments: {
                  shape: 'S7h'
                },
                Tags: {
                  shape: 'S6r'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                FeaturedResultsSet: {
                  shape: 'S7k'
                }
              }
            }
          },
          CreateIndex: {
            input: {
              type: 'structure',
              required: ['Name', 'RoleArn'],
              members: {
                Name: {},
                Edition: {},
                RoleArn: {},
                ServerSideEncryptionConfiguration: {
                  shape: 'S7o'
                },
                Description: {},
                ClientToken: {
                  idempotencyToken: true
                },
                Tags: {
                  shape: 'S6r'
                },
                UserTokenConfigurations: {
                  shape: 'S7q'
                },
                UserContextPolicy: {},
                UserGroupResolutionConfiguration: {
                  shape: 'S80'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Id: {}
              }
            }
          },
          CreateQuerySuggestionsBlockList: {
            input: {
              type: 'structure',
              required: ['IndexId', 'Name', 'SourceS3Path', 'RoleArn'],
              members: {
                IndexId: {},
                Name: {},
                Description: {},
                SourceS3Path: {
                  shape: 'S1m'
                },
                ClientToken: {
                  idempotencyToken: true
                },
                RoleArn: {},
                Tags: {
                  shape: 'S6r'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Id: {}
              }
            }
          },
          CreateThesaurus: {
            input: {
              type: 'structure',
              required: ['IndexId', 'Name', 'RoleArn', 'SourceS3Path'],
              members: {
                IndexId: {},
                Name: {},
                Description: {},
                RoleArn: {},
                Tags: {
                  shape: 'S6r'
                },
                SourceS3Path: {
                  shape: 'S1m'
                },
                ClientToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Id: {}
              }
            }
          },
          DeleteAccessControlConfiguration: {
            input: {
              type: 'structure',
              required: ['IndexId', 'Id'],
              members: {
                IndexId: {},
                Id: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteDataSource: {
            input: {
              type: 'structure',
              required: ['Id', 'IndexId'],
              members: {
                Id: {},
                IndexId: {}
              }
            }
          },
          DeleteExperience: {
            input: {
              type: 'structure',
              required: ['Id', 'IndexId'],
              members: {
                Id: {},
                IndexId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteFaq: {
            input: {
              type: 'structure',
              required: ['Id', 'IndexId'],
              members: {
                Id: {},
                IndexId: {}
              }
            }
          },
          DeleteIndex: {
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {}
              }
            }
          },
          DeletePrincipalMapping: {
            input: {
              type: 'structure',
              required: ['IndexId', 'GroupId'],
              members: {
                IndexId: {},
                DataSourceId: {},
                GroupId: {},
                OrderingId: {
                  type: 'long'
                }
              }
            }
          },
          DeleteQuerySuggestionsBlockList: {
            input: {
              type: 'structure',
              required: ['IndexId', 'Id'],
              members: {
                IndexId: {},
                Id: {}
              }
            }
          },
          DeleteThesaurus: {
            input: {
              type: 'structure',
              required: ['Id', 'IndexId'],
              members: {
                Id: {},
                IndexId: {}
              }
            }
          },
          DescribeAccessControlConfiguration: {
            input: {
              type: 'structure',
              required: ['IndexId', 'Id'],
              members: {
                IndexId: {},
                Id: {}
              }
            },
            output: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {},
                Description: {},
                ErrorMessage: {},
                AccessControlList: {
                  shape: 'S1p'
                },
                HierarchicalAccessControlList: {
                  shape: 'S1u'
                }
              }
            }
          },
          DescribeDataSource: {
            input: {
              type: 'structure',
              required: ['Id', 'IndexId'],
              members: {
                Id: {},
                IndexId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Id: {},
                IndexId: {},
                Name: {},
                Type: {},
                Configuration: {
                  shape: 'S2j'
                },
                VpcConfiguration: {
                  shape: 'S2u'
                },
                CreatedAt: {
                  type: 'timestamp'
                },
                UpdatedAt: {
                  type: 'timestamp'
                },
                Description: {},
                Status: {},
                Schedule: {},
                RoleArn: {},
                ErrorMessage: {},
                LanguageCode: {},
                CustomDocumentEnrichmentConfiguration: {
                  shape: 'S1y'
                }
              }
            }
          },
          DescribeExperience: {
            input: {
              type: 'structure',
              required: ['Id', 'IndexId'],
              members: {
                Id: {},
                IndexId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Id: {},
                IndexId: {},
                Name: {},
                Endpoints: {
                  shape: 'S8u'
                },
                Configuration: {
                  shape: 'S6z'
                },
                CreatedAt: {
                  type: 'timestamp'
                },
                UpdatedAt: {
                  type: 'timestamp'
                },
                Description: {},
                Status: {},
                RoleArn: {},
                ErrorMessage: {}
              }
            }
          },
          DescribeFaq: {
            input: {
              type: 'structure',
              required: ['Id', 'IndexId'],
              members: {
                Id: {},
                IndexId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Id: {},
                IndexId: {},
                Name: {},
                Description: {},
                CreatedAt: {
                  type: 'timestamp'
                },
                UpdatedAt: {
                  type: 'timestamp'
                },
                S3Path: {
                  shape: 'S1m'
                },
                Status: {},
                RoleArn: {},
                ErrorMessage: {},
                FileFormat: {},
                LanguageCode: {}
              }
            }
          },
          DescribeFeaturedResultsSet: {
            input: {
              type: 'structure',
              required: ['IndexId', 'FeaturedResultsSetId'],
              members: {
                IndexId: {},
                FeaturedResultsSetId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                FeaturedResultsSetId: {},
                FeaturedResultsSetName: {},
                Description: {},
                Status: {},
                QueryTexts: {
                  shape: 'S7f'
                },
                FeaturedDocumentsWithMetadata: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Id: {},
                      Title: {},
                      URI: {}
                    }
                  }
                },
                FeaturedDocumentsMissing: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Id: {}
                    }
                  }
                },
                LastUpdatedTimestamp: {
                  type: 'long'
                },
                CreationTimestamp: {
                  type: 'long'
                }
              }
            }
          },
          DescribeIndex: {
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Name: {},
                Id: {},
                Edition: {},
                RoleArn: {},
                ServerSideEncryptionConfiguration: {
                  shape: 'S7o'
                },
                Status: {},
                Description: {},
                CreatedAt: {
                  type: 'timestamp'
                },
                UpdatedAt: {
                  type: 'timestamp'
                },
                DocumentMetadataConfigurations: {
                  shape: 'S9b'
                },
                IndexStatistics: {
                  type: 'structure',
                  required: ['FaqStatistics', 'TextDocumentStatistics'],
                  members: {
                    FaqStatistics: {
                      type: 'structure',
                      required: ['IndexedQuestionAnswersCount'],
                      members: {
                        IndexedQuestionAnswersCount: {
                          type: 'integer'
                        }
                      }
                    },
                    TextDocumentStatistics: {
                      type: 'structure',
                      required: ['IndexedTextDocumentsCount', 'IndexedTextBytes'],
                      members: {
                        IndexedTextDocumentsCount: {
                          type: 'integer'
                        },
                        IndexedTextBytes: {
                          type: 'long'
                        }
                      }
                    }
                  }
                },
                ErrorMessage: {},
                CapacityUnits: {
                  shape: 'S9t'
                },
                UserTokenConfigurations: {
                  shape: 'S7q'
                },
                UserContextPolicy: {},
                UserGroupResolutionConfiguration: {
                  shape: 'S80'
                }
              }
            }
          },
          DescribePrincipalMapping: {
            input: {
              type: 'structure',
              required: ['IndexId', 'GroupId'],
              members: {
                IndexId: {},
                DataSourceId: {},
                GroupId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                IndexId: {},
                DataSourceId: {},
                GroupId: {},
                GroupOrderingIdSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Status: {},
                      LastUpdatedAt: {
                        type: 'timestamp'
                      },
                      ReceivedAt: {
                        type: 'timestamp'
                      },
                      OrderingId: {
                        type: 'long'
                      },
                      FailureReason: {}
                    }
                  }
                }
              }
            }
          },
          DescribeQuerySuggestionsBlockList: {
            input: {
              type: 'structure',
              required: ['IndexId', 'Id'],
              members: {
                IndexId: {},
                Id: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                IndexId: {},
                Id: {},
                Name: {},
                Description: {},
                Status: {},
                ErrorMessage: {},
                CreatedAt: {
                  type: 'timestamp'
                },
                UpdatedAt: {
                  type: 'timestamp'
                },
                SourceS3Path: {
                  shape: 'S1m'
                },
                ItemCount: {
                  type: 'integer'
                },
                FileSizeBytes: {
                  type: 'long'
                },
                RoleArn: {}
              }
            }
          },
          DescribeQuerySuggestionsConfig: {
            input: {
              type: 'structure',
              required: ['IndexId'],
              members: {
                IndexId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Mode: {},
                Status: {},
                QueryLogLookBackWindowInDays: {
                  type: 'integer'
                },
                IncludeQueriesWithoutUserInformation: {
                  type: 'boolean'
                },
                MinimumNumberOfQueryingUsers: {
                  type: 'integer'
                },
                MinimumQueryCount: {
                  type: 'integer'
                },
                LastSuggestionsBuildTime: {
                  type: 'timestamp'
                },
                LastClearTime: {
                  type: 'timestamp'
                },
                TotalSuggestionsCount: {
                  type: 'integer'
                },
                AttributeSuggestionsConfig: {
                  type: 'structure',
                  members: {
                    SuggestableConfigList: {
                      shape: 'Sae'
                    },
                    AttributeSuggestionsMode: {}
                  }
                }
              }
            }
          },
          DescribeThesaurus: {
            input: {
              type: 'structure',
              required: ['Id', 'IndexId'],
              members: {
                Id: {},
                IndexId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Id: {},
                IndexId: {},
                Name: {},
                Description: {},
                Status: {},
                ErrorMessage: {},
                CreatedAt: {
                  type: 'timestamp'
                },
                UpdatedAt: {
                  type: 'timestamp'
                },
                RoleArn: {},
                SourceS3Path: {
                  shape: 'S1m'
                },
                FileSizeBytes: {
                  type: 'long'
                },
                TermCount: {
                  type: 'long'
                },
                SynonymRuleCount: {
                  type: 'long'
                }
              }
            }
          },
          DisassociateEntitiesFromExperience: {
            input: {
              type: 'structure',
              required: ['Id', 'IndexId', 'EntityList'],
              members: {
                Id: {},
                IndexId: {},
                EntityList: {
                  type: 'list',
                  member: {
                    shape: 'S5'
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                FailedEntityList: {
                  shape: 'Sh'
                }
              }
            }
          },
          DisassociatePersonasFromEntities: {
            input: {
              type: 'structure',
              required: ['Id', 'IndexId', 'EntityIds'],
              members: {
                Id: {},
                IndexId: {},
                EntityIds: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                FailedEntityList: {
                  shape: 'Sh'
                }
              }
            }
          },
          GetQuerySuggestions: {
            input: {
              type: 'structure',
              required: ['IndexId', 'QueryText'],
              members: {
                IndexId: {},
                QueryText: {},
                MaxSuggestionsCount: {
                  type: 'integer'
                },
                SuggestionTypes: {
                  type: 'list',
                  member: {}
                },
                AttributeSuggestionsConfig: {
                  type: 'structure',
                  members: {
                    SuggestionAttributes: {
                      shape: 'Sav'
                    },
                    AdditionalResponseAttributes: {
                      shape: 'Sav'
                    },
                    AttributeFilter: {
                      shape: 'Saw'
                    },
                    UserContext: {
                      shape: 'Say'
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                QuerySuggestionsId: {},
                Suggestions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Id: {},
                      Value: {
                        type: 'structure',
                        members: {
                          Text: {
                            type: 'structure',
                            members: {
                              Text: {},
                              Highlights: {
                                type: 'list',
                                member: {
                                  type: 'structure',
                                  members: {
                                    BeginOffset: {
                                      type: 'integer'
                                    },
                                    EndOffset: {
                                      type: 'integer'
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      SourceDocuments: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            DocumentId: {},
                            SuggestionAttributes: {
                              shape: 'Sav'
                            },
                            AdditionalAttributes: {
                              shape: 'S11'
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
          GetSnapshots: {
            input: {
              type: 'structure',
              required: ['IndexId', 'Interval', 'MetricType'],
              members: {
                IndexId: {},
                Interval: {},
                MetricType: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                SnapShotTimeFilter: {
                  shape: 'Sbj'
                },
                SnapshotsDataHeader: {
                  type: 'list',
                  member: {}
                },
                SnapshotsData: {
                  type: 'list',
                  member: {
                    type: 'list',
                    member: {}
                  }
                },
                NextToken: {}
              }
            }
          },
          ListAccessControlConfigurations: {
            input: {
              type: 'structure',
              required: ['IndexId'],
              members: {
                IndexId: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['AccessControlConfigurations'],
              members: {
                NextToken: {},
                AccessControlConfigurations: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Id'],
                    members: {
                      Id: {}
                    }
                  }
                }
              }
            }
          },
          ListDataSourceSyncJobs: {
            input: {
              type: 'structure',
              required: ['Id', 'IndexId'],
              members: {
                Id: {},
                IndexId: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                StartTimeFilter: {
                  shape: 'Sbj'
                },
                StatusFilter: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                History: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ExecutionId: {},
                      StartTime: {
                        type: 'timestamp'
                      },
                      EndTime: {
                        type: 'timestamp'
                      },
                      Status: {},
                      ErrorMessage: {},
                      ErrorCode: {},
                      DataSourceErrorCode: {},
                      Metrics: {
                        type: 'structure',
                        members: {
                          DocumentsAdded: {},
                          DocumentsModified: {},
                          DocumentsDeleted: {},
                          DocumentsFailed: {},
                          DocumentsScanned: {}
                        }
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListDataSources: {
            input: {
              type: 'structure',
              required: ['IndexId'],
              members: {
                IndexId: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                SummaryItems: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Name: {},
                      Id: {},
                      Type: {},
                      CreatedAt: {
                        type: 'timestamp'
                      },
                      UpdatedAt: {
                        type: 'timestamp'
                      },
                      Status: {},
                      LanguageCode: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListEntityPersonas: {
            input: {
              type: 'structure',
              required: ['Id', 'IndexId'],
              members: {
                Id: {},
                IndexId: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                SummaryItems: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      EntityId: {},
                      Persona: {},
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
          ListExperienceEntities: {
            input: {
              type: 'structure',
              required: ['Id', 'IndexId'],
              members: {
                Id: {},
                IndexId: {},
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                SummaryItems: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      EntityId: {},
                      EntityType: {},
                      DisplayData: {
                        type: 'structure',
                        members: {
                          UserName: {
                            shape: 'Scf'
                          },
                          GroupName: {
                            shape: 'Scf'
                          },
                          IdentifiedUserName: {
                            shape: 'Scf'
                          },
                          FirstName: {
                            shape: 'Scf'
                          },
                          LastName: {
                            shape: 'Scf'
                          }
                        }
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListExperiences: {
            input: {
              type: 'structure',
              required: ['IndexId'],
              members: {
                IndexId: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                SummaryItems: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Name: {},
                      Id: {},
                      CreatedAt: {
                        type: 'timestamp'
                      },
                      Status: {},
                      Endpoints: {
                        shape: 'S8u'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListFaqs: {
            input: {
              type: 'structure',
              required: ['IndexId'],
              members: {
                IndexId: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                FaqSummaryItems: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Id: {},
                      Name: {},
                      Status: {},
                      CreatedAt: {
                        type: 'timestamp'
                      },
                      UpdatedAt: {
                        type: 'timestamp'
                      },
                      FileFormat: {},
                      LanguageCode: {}
                    }
                  }
                }
              }
            }
          },
          ListFeaturedResultsSets: {
            input: {
              type: 'structure',
              required: ['IndexId'],
              members: {
                IndexId: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                FeaturedResultsSetSummaryItems: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      FeaturedResultsSetId: {},
                      FeaturedResultsSetName: {},
                      Status: {},
                      LastUpdatedTimestamp: {
                        type: 'long'
                      },
                      CreationTimestamp: {
                        type: 'long'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListGroupsOlderThanOrderingId: {
            input: {
              type: 'structure',
              required: ['IndexId', 'OrderingId'],
              members: {
                IndexId: {},
                DataSourceId: {},
                OrderingId: {
                  type: 'long'
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
                GroupsSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      GroupId: {},
                      OrderingId: {
                        type: 'long'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListIndices: {
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
              members: {
                IndexConfigurationSummaryItems: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['CreatedAt', 'UpdatedAt', 'Status'],
                    members: {
                      Name: {},
                      Id: {},
                      Edition: {},
                      CreatedAt: {
                        type: 'timestamp'
                      },
                      UpdatedAt: {
                        type: 'timestamp'
                      },
                      Status: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListQuerySuggestionsBlockLists: {
            input: {
              type: 'structure',
              required: ['IndexId'],
              members: {
                IndexId: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                BlockListSummaryItems: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Id: {},
                      Name: {},
                      Status: {},
                      CreatedAt: {
                        type: 'timestamp'
                      },
                      UpdatedAt: {
                        type: 'timestamp'
                      },
                      ItemCount: {
                        type: 'integer'
                      }
                    }
                  }
                },
                NextToken: {}
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
                  shape: 'S6r'
                }
              }
            }
          },
          ListThesauri: {
            input: {
              type: 'structure',
              required: ['IndexId'],
              members: {
                IndexId: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                ThesaurusSummaryItems: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Id: {},
                      Name: {},
                      Status: {},
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
            }
          },
          PutPrincipalMapping: {
            input: {
              type: 'structure',
              required: ['IndexId', 'GroupId', 'GroupMembers'],
              members: {
                IndexId: {},
                DataSourceId: {},
                GroupId: {},
                GroupMembers: {
                  type: 'structure',
                  members: {
                    MemberGroups: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        required: ['GroupId'],
                        members: {
                          GroupId: {},
                          DataSourceId: {}
                        }
                      }
                    },
                    MemberUsers: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        required: ['UserId'],
                        members: {
                          UserId: {}
                        }
                      }
                    },
                    S3PathforGroupMembers: {
                      shape: 'S1m'
                    }
                  }
                },
                OrderingId: {
                  type: 'long'
                },
                RoleArn: {}
              }
            }
          },
          Query: {
            input: {
              type: 'structure',
              required: ['IndexId'],
              members: {
                IndexId: {},
                QueryText: {},
                AttributeFilter: {
                  shape: 'Saw'
                },
                Facets: {
                  shape: 'Sdq'
                },
                RequestedDocumentAttributes: {
                  shape: 'Sav'
                },
                QueryResultTypeFilter: {},
                DocumentRelevanceOverrideConfigurations: {
                  shape: 'Sdu'
                },
                PageNumber: {
                  type: 'integer'
                },
                PageSize: {
                  type: 'integer'
                },
                SortingConfiguration: {
                  shape: 'Sdw'
                },
                SortingConfigurations: {
                  shape: 'Sdy'
                },
                UserContext: {
                  shape: 'Say'
                },
                VisitorId: {},
                SpellCorrectionConfiguration: {
                  type: 'structure',
                  required: ['IncludeQuerySpellCheckSuggestions'],
                  members: {
                    IncludeQuerySpellCheckSuggestions: {
                      type: 'boolean'
                    }
                  }
                },
                CollapseConfiguration: {
                  type: 'structure',
                  required: ['DocumentAttributeKey'],
                  members: {
                    DocumentAttributeKey: {},
                    SortingConfigurations: {
                      shape: 'Sdy'
                    },
                    MissingAttributeKeyStrategy: {},
                    Expand: {
                      type: 'boolean'
                    },
                    ExpandConfiguration: {
                      type: 'structure',
                      members: {
                        MaxResultItemsToExpand: {
                          type: 'integer'
                        },
                        MaxExpandedResultsPerItem: {
                          type: 'integer'
                        }
                      }
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                QueryId: {},
                ResultItems: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Id: {},
                      Type: {},
                      Format: {},
                      AdditionalAttributes: {
                        shape: 'Se9'
                      },
                      DocumentId: {},
                      DocumentTitle: {
                        shape: 'Sed'
                      },
                      DocumentExcerpt: {
                        shape: 'Sed'
                      },
                      DocumentURI: {},
                      DocumentAttributes: {
                        shape: 'S11'
                      },
                      ScoreAttributes: {
                        shape: 'Seh'
                      },
                      FeedbackToken: {},
                      TableExcerpt: {
                        type: 'structure',
                        members: {
                          Rows: {
                            type: 'list',
                            member: {
                              type: 'structure',
                              members: {
                                Cells: {
                                  type: 'list',
                                  member: {
                                    type: 'structure',
                                    members: {
                                      Value: {},
                                      TopAnswer: {
                                        type: 'boolean'
                                      },
                                      Highlighted: {
                                        type: 'boolean'
                                      },
                                      Header: {
                                        type: 'boolean'
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          },
                          TotalNumberOfRows: {
                            type: 'integer'
                          }
                        }
                      },
                      CollapsedResultDetail: {
                        type: 'structure',
                        required: ['DocumentAttribute'],
                        members: {
                          DocumentAttribute: {
                            shape: 'S12'
                          },
                          ExpandedResults: {
                            type: 'list',
                            member: {
                              type: 'structure',
                              members: {
                                Id: {},
                                DocumentId: {},
                                DocumentTitle: {
                                  shape: 'Sed'
                                },
                                DocumentExcerpt: {
                                  shape: 'Sed'
                                },
                                DocumentURI: {},
                                DocumentAttributes: {
                                  shape: 'S11'
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                FacetResults: {
                  shape: 'Ses'
                },
                TotalNumberOfResults: {
                  type: 'integer'
                },
                Warnings: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Message: {},
                      Code: {}
                    }
                  }
                },
                SpellCorrectedQueries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      SuggestedQueryText: {},
                      Corrections: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            BeginOffset: {
                              type: 'integer'
                            },
                            EndOffset: {
                              type: 'integer'
                            },
                            Term: {},
                            CorrectedTerm: {}
                          }
                        }
                      }
                    }
                  }
                },
                FeaturedResultsItems: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Id: {},
                      Type: {},
                      AdditionalAttributes: {
                        shape: 'Se9'
                      },
                      DocumentId: {},
                      DocumentTitle: {
                        shape: 'Sed'
                      },
                      DocumentExcerpt: {
                        shape: 'Sed'
                      },
                      DocumentURI: {},
                      DocumentAttributes: {
                        shape: 'S11'
                      },
                      FeedbackToken: {}
                    }
                  }
                }
              }
            }
          },
          Retrieve: {
            input: {
              type: 'structure',
              required: ['IndexId', 'QueryText'],
              members: {
                IndexId: {},
                QueryText: {},
                AttributeFilter: {
                  shape: 'Saw'
                },
                RequestedDocumentAttributes: {
                  shape: 'Sav'
                },
                DocumentRelevanceOverrideConfigurations: {
                  shape: 'Sdu'
                },
                PageNumber: {
                  type: 'integer'
                },
                PageSize: {
                  type: 'integer'
                },
                UserContext: {
                  shape: 'Say'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                QueryId: {},
                ResultItems: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Id: {},
                      DocumentId: {},
                      DocumentTitle: {},
                      Content: {},
                      DocumentURI: {},
                      DocumentAttributes: {
                        shape: 'S11'
                      },
                      ScoreAttributes: {
                        shape: 'Seh'
                      }
                    }
                  }
                }
              }
            }
          },
          StartDataSourceSyncJob: {
            input: {
              type: 'structure',
              required: ['Id', 'IndexId'],
              members: {
                Id: {},
                IndexId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ExecutionId: {}
              }
            }
          },
          StopDataSourceSyncJob: {
            input: {
              type: 'structure',
              required: ['Id', 'IndexId'],
              members: {
                Id: {},
                IndexId: {}
              }
            }
          },
          SubmitFeedback: {
            input: {
              type: 'structure',
              required: ['IndexId', 'QueryId'],
              members: {
                IndexId: {},
                QueryId: {},
                ClickFeedbackItems: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['ResultId', 'ClickTime'],
                    members: {
                      ResultId: {},
                      ClickTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                RelevanceFeedbackItems: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['ResultId', 'RelevanceValue'],
                    members: {
                      ResultId: {},
                      RelevanceValue: {}
                    }
                  }
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
                  shape: 'S6r'
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
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateAccessControlConfiguration: {
            input: {
              type: 'structure',
              required: ['IndexId', 'Id'],
              members: {
                IndexId: {},
                Id: {},
                Name: {},
                Description: {},
                AccessControlList: {
                  shape: 'S1p'
                },
                HierarchicalAccessControlList: {
                  shape: 'S1u'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateDataSource: {
            input: {
              type: 'structure',
              required: ['Id', 'IndexId'],
              members: {
                Id: {},
                Name: {},
                IndexId: {},
                Configuration: {
                  shape: 'S2j'
                },
                VpcConfiguration: {
                  shape: 'S2u'
                },
                Description: {},
                Schedule: {},
                RoleArn: {},
                LanguageCode: {},
                CustomDocumentEnrichmentConfiguration: {
                  shape: 'S1y'
                }
              }
            }
          },
          UpdateExperience: {
            input: {
              type: 'structure',
              required: ['Id', 'IndexId'],
              members: {
                Id: {},
                Name: {},
                IndexId: {},
                RoleArn: {},
                Configuration: {
                  shape: 'S6z'
                },
                Description: {}
              }
            }
          },
          UpdateFeaturedResultsSet: {
            input: {
              type: 'structure',
              required: ['IndexId', 'FeaturedResultsSetId'],
              members: {
                IndexId: {},
                FeaturedResultsSetId: {},
                FeaturedResultsSetName: {},
                Description: {},
                Status: {},
                QueryTexts: {
                  shape: 'S7f'
                },
                FeaturedDocuments: {
                  shape: 'S7h'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                FeaturedResultsSet: {
                  shape: 'S7k'
                }
              }
            }
          },
          UpdateIndex: {
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {},
                Name: {},
                RoleArn: {},
                Description: {},
                DocumentMetadataConfigurationUpdates: {
                  shape: 'S9b'
                },
                CapacityUnits: {
                  shape: 'S9t'
                },
                UserTokenConfigurations: {
                  shape: 'S7q'
                },
                UserContextPolicy: {},
                UserGroupResolutionConfiguration: {
                  shape: 'S80'
                }
              }
            }
          },
          UpdateQuerySuggestionsBlockList: {
            input: {
              type: 'structure',
              required: ['IndexId', 'Id'],
              members: {
                IndexId: {},
                Id: {},
                Name: {},
                Description: {},
                SourceS3Path: {
                  shape: 'S1m'
                },
                RoleArn: {}
              }
            }
          },
          UpdateQuerySuggestionsConfig: {
            input: {
              type: 'structure',
              required: ['IndexId'],
              members: {
                IndexId: {},
                Mode: {},
                QueryLogLookBackWindowInDays: {
                  type: 'integer'
                },
                IncludeQueriesWithoutUserInformation: {
                  type: 'boolean'
                },
                MinimumNumberOfQueryingUsers: {
                  type: 'integer'
                },
                MinimumQueryCount: {
                  type: 'integer'
                },
                AttributeSuggestionsConfig: {
                  type: 'structure',
                  members: {
                    SuggestableConfigList: {
                      shape: 'Sae'
                    },
                    AttributeSuggestionsMode: {}
                  }
                }
              }
            }
          },
          UpdateThesaurus: {
            input: {
              type: 'structure',
              required: ['Id', 'IndexId'],
              members: {
                Id: {},
                Name: {},
                IndexId: {},
                Description: {},
                RoleArn: {},
                SourceS3Path: {
                  shape: 'S1m'
                }
              }
            }
          }
        },
        shapes: {
          S5: {
            type: 'structure',
            required: ['EntityId', 'EntityType'],
            members: {
              EntityId: {},
              EntityType: {}
            }
          },
          Sa: {
            type: 'structure',
            members: {
              EntityId: {},
              ErrorMessage: {}
            }
          },
          Sh: {
            type: 'list',
            member: {
              shape: 'Sa'
            }
          },
          S11: {
            type: 'list',
            member: {
              shape: 'S12'
            }
          },
          S12: {
            type: 'structure',
            required: ['Key', 'Value'],
            members: {
              Key: {},
              Value: {
                shape: 'S14'
              }
            }
          },
          S14: {
            type: 'structure',
            members: {
              StringValue: {},
              StringListValue: {
                type: 'list',
                member: {}
              },
              LongValue: {
                type: 'long'
              },
              DateValue: {
                type: 'timestamp'
              }
            }
          },
          S1m: {
            type: 'structure',
            required: ['Bucket', 'Key'],
            members: {
              Bucket: {},
              Key: {}
            }
          },
          S1p: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Name', 'Type', 'Access'],
              members: {
                Name: {},
                Type: {},
                Access: {},
                DataSourceId: {}
              }
            }
          },
          S1u: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['PrincipalList'],
              members: {
                PrincipalList: {
                  shape: 'S1p'
                }
              }
            }
          },
          S1y: {
            type: 'structure',
            members: {
              InlineConfigurations: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    Condition: {
                      shape: 'S21'
                    },
                    Target: {
                      type: 'structure',
                      members: {
                        TargetDocumentAttributeKey: {},
                        TargetDocumentAttributeValueDeletion: {
                          type: 'boolean'
                        },
                        TargetDocumentAttributeValue: {
                          shape: 'S14'
                        }
                      }
                    },
                    DocumentContentDeletion: {
                      type: 'boolean'
                    }
                  }
                }
              },
              PreExtractionHookConfiguration: {
                shape: 'S25'
              },
              PostExtractionHookConfiguration: {
                shape: 'S25'
              },
              RoleArn: {}
            }
          },
          S21: {
            type: 'structure',
            required: ['ConditionDocumentAttributeKey', 'Operator'],
            members: {
              ConditionDocumentAttributeKey: {},
              Operator: {},
              ConditionOnValue: {
                shape: 'S14'
              }
            }
          },
          S25: {
            type: 'structure',
            required: ['LambdaArn', 'S3Bucket'],
            members: {
              InvocationCondition: {
                shape: 'S21'
              },
              LambdaArn: {},
              S3Bucket: {}
            }
          },
          S2j: {
            type: 'structure',
            members: {
              S3Configuration: {
                type: 'structure',
                required: ['BucketName'],
                members: {
                  BucketName: {},
                  InclusionPrefixes: {
                    shape: 'S2l'
                  },
                  InclusionPatterns: {
                    shape: 'S2l'
                  },
                  ExclusionPatterns: {
                    shape: 'S2l'
                  },
                  DocumentsMetadataConfiguration: {
                    type: 'structure',
                    members: {
                      S3Prefix: {}
                    }
                  },
                  AccessControlListConfiguration: {
                    type: 'structure',
                    members: {
                      KeyPath: {}
                    }
                  }
                }
              },
              SharePointConfiguration: {
                type: 'structure',
                required: ['SharePointVersion', 'Urls', 'SecretArn'],
                members: {
                  SharePointVersion: {},
                  Urls: {
                    type: 'list',
                    member: {}
                  },
                  SecretArn: {},
                  CrawlAttachments: {
                    type: 'boolean'
                  },
                  UseChangeLog: {
                    type: 'boolean'
                  },
                  InclusionPatterns: {
                    shape: 'S2l'
                  },
                  ExclusionPatterns: {
                    shape: 'S2l'
                  },
                  VpcConfiguration: {
                    shape: 'S2u'
                  },
                  FieldMappings: {
                    shape: 'S2z'
                  },
                  DocumentTitleFieldName: {},
                  DisableLocalGroups: {
                    type: 'boolean'
                  },
                  SslCertificateS3Path: {
                    shape: 'S1m'
                  },
                  AuthenticationType: {},
                  ProxyConfiguration: {
                    shape: 'S35'
                  }
                }
              },
              DatabaseConfiguration: {
                type: 'structure',
                required: ['DatabaseEngineType', 'ConnectionConfiguration', 'ColumnConfiguration'],
                members: {
                  DatabaseEngineType: {},
                  ConnectionConfiguration: {
                    type: 'structure',
                    required: ['DatabaseHost', 'DatabasePort', 'DatabaseName', 'TableName', 'SecretArn'],
                    members: {
                      DatabaseHost: {},
                      DatabasePort: {
                        type: 'integer'
                      },
                      DatabaseName: {},
                      TableName: {},
                      SecretArn: {}
                    }
                  },
                  VpcConfiguration: {
                    shape: 'S2u'
                  },
                  ColumnConfiguration: {
                    type: 'structure',
                    required: ['DocumentIdColumnName', 'DocumentDataColumnName', 'ChangeDetectingColumns'],
                    members: {
                      DocumentIdColumnName: {},
                      DocumentDataColumnName: {},
                      DocumentTitleColumnName: {},
                      FieldMappings: {
                        shape: 'S2z'
                      },
                      ChangeDetectingColumns: {
                        type: 'list',
                        member: {}
                      }
                    }
                  },
                  AclConfiguration: {
                    type: 'structure',
                    required: ['AllowedGroupsColumnName'],
                    members: {
                      AllowedGroupsColumnName: {}
                    }
                  },
                  SqlConfiguration: {
                    type: 'structure',
                    members: {
                      QueryIdentifiersEnclosingOption: {}
                    }
                  }
                }
              },
              SalesforceConfiguration: {
                type: 'structure',
                required: ['ServerUrl', 'SecretArn'],
                members: {
                  ServerUrl: {},
                  SecretArn: {},
                  StandardObjectConfigurations: {
                    type: 'list',
                    member: {
                      type: 'structure',
                      required: ['Name', 'DocumentDataFieldName'],
                      members: {
                        Name: {},
                        DocumentDataFieldName: {},
                        DocumentTitleFieldName: {},
                        FieldMappings: {
                          shape: 'S2z'
                        }
                      }
                    }
                  },
                  KnowledgeArticleConfiguration: {
                    type: 'structure',
                    required: ['IncludedStates'],
                    members: {
                      IncludedStates: {
                        type: 'list',
                        member: {}
                      },
                      StandardKnowledgeArticleTypeConfiguration: {
                        type: 'structure',
                        required: ['DocumentDataFieldName'],
                        members: {
                          DocumentDataFieldName: {},
                          DocumentTitleFieldName: {},
                          FieldMappings: {
                            shape: 'S2z'
                          }
                        }
                      },
                      CustomKnowledgeArticleTypeConfigurations: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          required: ['Name', 'DocumentDataFieldName'],
                          members: {
                            Name: {},
                            DocumentDataFieldName: {},
                            DocumentTitleFieldName: {},
                            FieldMappings: {
                              shape: 'S2z'
                            }
                          }
                        }
                      }
                    }
                  },
                  ChatterFeedConfiguration: {
                    type: 'structure',
                    required: ['DocumentDataFieldName'],
                    members: {
                      DocumentDataFieldName: {},
                      DocumentTitleFieldName: {},
                      FieldMappings: {
                        shape: 'S2z'
                      },
                      IncludeFilterTypes: {
                        type: 'list',
                        member: {}
                      }
                    }
                  },
                  CrawlAttachments: {
                    type: 'boolean'
                  },
                  StandardObjectAttachmentConfiguration: {
                    type: 'structure',
                    members: {
                      DocumentTitleFieldName: {},
                      FieldMappings: {
                        shape: 'S2z'
                      }
                    }
                  },
                  IncludeAttachmentFilePatterns: {
                    shape: 'S2l'
                  },
                  ExcludeAttachmentFilePatterns: {
                    shape: 'S2l'
                  }
                }
              },
              OneDriveConfiguration: {
                type: 'structure',
                required: ['TenantDomain', 'SecretArn', 'OneDriveUsers'],
                members: {
                  TenantDomain: {},
                  SecretArn: {},
                  OneDriveUsers: {
                    type: 'structure',
                    members: {
                      OneDriveUserList: {
                        type: 'list',
                        member: {}
                      },
                      OneDriveUserS3Path: {
                        shape: 'S1m'
                      }
                    }
                  },
                  InclusionPatterns: {
                    shape: 'S2l'
                  },
                  ExclusionPatterns: {
                    shape: 'S2l'
                  },
                  FieldMappings: {
                    shape: 'S2z'
                  },
                  DisableLocalGroups: {
                    type: 'boolean'
                  }
                }
              },
              ServiceNowConfiguration: {
                type: 'structure',
                required: ['HostUrl', 'SecretArn', 'ServiceNowBuildVersion'],
                members: {
                  HostUrl: {},
                  SecretArn: {},
                  ServiceNowBuildVersion: {},
                  KnowledgeArticleConfiguration: {
                    type: 'structure',
                    required: ['DocumentDataFieldName'],
                    members: {
                      CrawlAttachments: {
                        type: 'boolean'
                      },
                      IncludeAttachmentFilePatterns: {
                        shape: 'S2l'
                      },
                      ExcludeAttachmentFilePatterns: {
                        shape: 'S2l'
                      },
                      DocumentDataFieldName: {},
                      DocumentTitleFieldName: {},
                      FieldMappings: {
                        shape: 'S2z'
                      },
                      FilterQuery: {}
                    }
                  },
                  ServiceCatalogConfiguration: {
                    type: 'structure',
                    required: ['DocumentDataFieldName'],
                    members: {
                      CrawlAttachments: {
                        type: 'boolean'
                      },
                      IncludeAttachmentFilePatterns: {
                        shape: 'S2l'
                      },
                      ExcludeAttachmentFilePatterns: {
                        shape: 'S2l'
                      },
                      DocumentDataFieldName: {},
                      DocumentTitleFieldName: {},
                      FieldMappings: {
                        shape: 'S2z'
                      }
                    }
                  },
                  AuthenticationType: {}
                }
              },
              ConfluenceConfiguration: {
                type: 'structure',
                required: ['ServerUrl', 'SecretArn', 'Version'],
                members: {
                  ServerUrl: {},
                  SecretArn: {},
                  Version: {},
                  SpaceConfiguration: {
                    type: 'structure',
                    members: {
                      CrawlPersonalSpaces: {
                        type: 'boolean'
                      },
                      CrawlArchivedSpaces: {
                        type: 'boolean'
                      },
                      IncludeSpaces: {
                        shape: 'S4f'
                      },
                      ExcludeSpaces: {
                        shape: 'S4f'
                      },
                      SpaceFieldMappings: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            DataSourceFieldName: {},
                            DateFieldFormat: {},
                            IndexFieldName: {}
                          }
                        }
                      }
                    }
                  },
                  PageConfiguration: {
                    type: 'structure',
                    members: {
                      PageFieldMappings: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            DataSourceFieldName: {},
                            DateFieldFormat: {},
                            IndexFieldName: {}
                          }
                        }
                      }
                    }
                  },
                  BlogConfiguration: {
                    type: 'structure',
                    members: {
                      BlogFieldMappings: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            DataSourceFieldName: {},
                            DateFieldFormat: {},
                            IndexFieldName: {}
                          }
                        }
                      }
                    }
                  },
                  AttachmentConfiguration: {
                    type: 'structure',
                    members: {
                      CrawlAttachments: {
                        type: 'boolean'
                      },
                      AttachmentFieldMappings: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            DataSourceFieldName: {},
                            DateFieldFormat: {},
                            IndexFieldName: {}
                          }
                        }
                      }
                    }
                  },
                  VpcConfiguration: {
                    shape: 'S2u'
                  },
                  InclusionPatterns: {
                    shape: 'S2l'
                  },
                  ExclusionPatterns: {
                    shape: 'S2l'
                  },
                  ProxyConfiguration: {
                    shape: 'S35'
                  },
                  AuthenticationType: {}
                }
              },
              GoogleDriveConfiguration: {
                type: 'structure',
                required: ['SecretArn'],
                members: {
                  SecretArn: {},
                  InclusionPatterns: {
                    shape: 'S2l'
                  },
                  ExclusionPatterns: {
                    shape: 'S2l'
                  },
                  FieldMappings: {
                    shape: 'S2z'
                  },
                  ExcludeMimeTypes: {
                    type: 'list',
                    member: {}
                  },
                  ExcludeUserAccounts: {
                    type: 'list',
                    member: {}
                  },
                  ExcludeSharedDrives: {
                    type: 'list',
                    member: {}
                  }
                }
              },
              WebCrawlerConfiguration: {
                type: 'structure',
                required: ['Urls'],
                members: {
                  Urls: {
                    type: 'structure',
                    members: {
                      SeedUrlConfiguration: {
                        type: 'structure',
                        required: ['SeedUrls'],
                        members: {
                          SeedUrls: {
                            type: 'list',
                            member: {}
                          },
                          WebCrawlerMode: {}
                        }
                      },
                      SiteMapsConfiguration: {
                        type: 'structure',
                        required: ['SiteMaps'],
                        members: {
                          SiteMaps: {
                            type: 'list',
                            member: {}
                          }
                        }
                      }
                    }
                  },
                  CrawlDepth: {
                    type: 'integer'
                  },
                  MaxLinksPerPage: {
                    type: 'integer'
                  },
                  MaxContentSizePerPageInMegaBytes: {
                    type: 'float'
                  },
                  MaxUrlsPerMinuteCrawlRate: {
                    type: 'integer'
                  },
                  UrlInclusionPatterns: {
                    shape: 'S2l'
                  },
                  UrlExclusionPatterns: {
                    shape: 'S2l'
                  },
                  ProxyConfiguration: {
                    shape: 'S35'
                  },
                  AuthenticationConfiguration: {
                    type: 'structure',
                    members: {
                      BasicAuthentication: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          required: ['Host', 'Port', 'Credentials'],
                          members: {
                            Host: {},
                            Port: {
                              type: 'integer'
                            },
                            Credentials: {}
                          }
                        }
                      }
                    }
                  }
                }
              },
              WorkDocsConfiguration: {
                type: 'structure',
                required: ['OrganizationId'],
                members: {
                  OrganizationId: {},
                  CrawlComments: {
                    type: 'boolean'
                  },
                  UseChangeLog: {
                    type: 'boolean'
                  },
                  InclusionPatterns: {
                    shape: 'S2l'
                  },
                  ExclusionPatterns: {
                    shape: 'S2l'
                  },
                  FieldMappings: {
                    shape: 'S2z'
                  }
                }
              },
              FsxConfiguration: {
                type: 'structure',
                required: ['FileSystemId', 'FileSystemType', 'VpcConfiguration'],
                members: {
                  FileSystemId: {},
                  FileSystemType: {},
                  VpcConfiguration: {
                    shape: 'S2u'
                  },
                  SecretArn: {},
                  InclusionPatterns: {
                    shape: 'S2l'
                  },
                  ExclusionPatterns: {
                    shape: 'S2l'
                  },
                  FieldMappings: {
                    shape: 'S2z'
                  }
                }
              },
              SlackConfiguration: {
                type: 'structure',
                required: ['TeamId', 'SecretArn', 'SlackEntityList', 'SinceCrawlDate'],
                members: {
                  TeamId: {},
                  SecretArn: {},
                  VpcConfiguration: {
                    shape: 'S2u'
                  },
                  SlackEntityList: {
                    type: 'list',
                    member: {}
                  },
                  UseChangeLog: {
                    type: 'boolean'
                  },
                  CrawlBotMessage: {
                    type: 'boolean'
                  },
                  ExcludeArchived: {
                    type: 'boolean'
                  },
                  SinceCrawlDate: {},
                  LookBackPeriod: {
                    type: 'integer'
                  },
                  PrivateChannelFilter: {
                    type: 'list',
                    member: {}
                  },
                  PublicChannelFilter: {
                    type: 'list',
                    member: {}
                  },
                  InclusionPatterns: {
                    shape: 'S2l'
                  },
                  ExclusionPatterns: {
                    shape: 'S2l'
                  },
                  FieldMappings: {
                    shape: 'S2z'
                  }
                }
              },
              BoxConfiguration: {
                type: 'structure',
                required: ['EnterpriseId', 'SecretArn'],
                members: {
                  EnterpriseId: {},
                  SecretArn: {},
                  UseChangeLog: {
                    type: 'boolean'
                  },
                  CrawlComments: {
                    type: 'boolean'
                  },
                  CrawlTasks: {
                    type: 'boolean'
                  },
                  CrawlWebLinks: {
                    type: 'boolean'
                  },
                  FileFieldMappings: {
                    shape: 'S2z'
                  },
                  TaskFieldMappings: {
                    shape: 'S2z'
                  },
                  CommentFieldMappings: {
                    shape: 'S2z'
                  },
                  WebLinkFieldMappings: {
                    shape: 'S2z'
                  },
                  InclusionPatterns: {
                    shape: 'S2l'
                  },
                  ExclusionPatterns: {
                    shape: 'S2l'
                  },
                  VpcConfiguration: {
                    shape: 'S2u'
                  }
                }
              },
              QuipConfiguration: {
                type: 'structure',
                required: ['Domain', 'SecretArn'],
                members: {
                  Domain: {},
                  SecretArn: {},
                  CrawlFileComments: {
                    type: 'boolean'
                  },
                  CrawlChatRooms: {
                    type: 'boolean'
                  },
                  CrawlAttachments: {
                    type: 'boolean'
                  },
                  FolderIds: {
                    type: 'list',
                    member: {}
                  },
                  ThreadFieldMappings: {
                    shape: 'S2z'
                  },
                  MessageFieldMappings: {
                    shape: 'S2z'
                  },
                  AttachmentFieldMappings: {
                    shape: 'S2z'
                  },
                  InclusionPatterns: {
                    shape: 'S2l'
                  },
                  ExclusionPatterns: {
                    shape: 'S2l'
                  },
                  VpcConfiguration: {
                    shape: 'S2u'
                  }
                }
              },
              JiraConfiguration: {
                type: 'structure',
                required: ['JiraAccountUrl', 'SecretArn'],
                members: {
                  JiraAccountUrl: {},
                  SecretArn: {},
                  UseChangeLog: {
                    type: 'boolean'
                  },
                  Project: {
                    type: 'list',
                    member: {}
                  },
                  IssueType: {
                    type: 'list',
                    member: {}
                  },
                  Status: {
                    type: 'list',
                    member: {}
                  },
                  IssueSubEntityFilter: {
                    type: 'list',
                    member: {}
                  },
                  AttachmentFieldMappings: {
                    shape: 'S2z'
                  },
                  CommentFieldMappings: {
                    shape: 'S2z'
                  },
                  IssueFieldMappings: {
                    shape: 'S2z'
                  },
                  ProjectFieldMappings: {
                    shape: 'S2z'
                  },
                  WorkLogFieldMappings: {
                    shape: 'S2z'
                  },
                  InclusionPatterns: {
                    shape: 'S2l'
                  },
                  ExclusionPatterns: {
                    shape: 'S2l'
                  },
                  VpcConfiguration: {
                    shape: 'S2u'
                  }
                }
              },
              GitHubConfiguration: {
                type: 'structure',
                required: ['SecretArn'],
                members: {
                  SaaSConfiguration: {
                    type: 'structure',
                    required: ['OrganizationName', 'HostUrl'],
                    members: {
                      OrganizationName: {},
                      HostUrl: {}
                    }
                  },
                  OnPremiseConfiguration: {
                    type: 'structure',
                    required: ['HostUrl', 'OrganizationName', 'SslCertificateS3Path'],
                    members: {
                      HostUrl: {},
                      OrganizationName: {},
                      SslCertificateS3Path: {
                        shape: 'S1m'
                      }
                    }
                  },
                  Type: {},
                  SecretArn: {},
                  UseChangeLog: {
                    type: 'boolean'
                  },
                  GitHubDocumentCrawlProperties: {
                    type: 'structure',
                    members: {
                      CrawlRepositoryDocuments: {
                        type: 'boolean'
                      },
                      CrawlIssue: {
                        type: 'boolean'
                      },
                      CrawlIssueComment: {
                        type: 'boolean'
                      },
                      CrawlIssueCommentAttachment: {
                        type: 'boolean'
                      },
                      CrawlPullRequest: {
                        type: 'boolean'
                      },
                      CrawlPullRequestComment: {
                        type: 'boolean'
                      },
                      CrawlPullRequestCommentAttachment: {
                        type: 'boolean'
                      }
                    }
                  },
                  RepositoryFilter: {
                    type: 'list',
                    member: {}
                  },
                  InclusionFolderNamePatterns: {
                    shape: 'S6i'
                  },
                  InclusionFileTypePatterns: {
                    shape: 'S6i'
                  },
                  InclusionFileNamePatterns: {
                    shape: 'S6i'
                  },
                  ExclusionFolderNamePatterns: {
                    shape: 'S6i'
                  },
                  ExclusionFileTypePatterns: {
                    shape: 'S6i'
                  },
                  ExclusionFileNamePatterns: {
                    shape: 'S6i'
                  },
                  VpcConfiguration: {
                    shape: 'S2u'
                  },
                  GitHubRepositoryConfigurationFieldMappings: {
                    shape: 'S2z'
                  },
                  GitHubCommitConfigurationFieldMappings: {
                    shape: 'S2z'
                  },
                  GitHubIssueDocumentConfigurationFieldMappings: {
                    shape: 'S2z'
                  },
                  GitHubIssueCommentConfigurationFieldMappings: {
                    shape: 'S2z'
                  },
                  GitHubIssueAttachmentConfigurationFieldMappings: {
                    shape: 'S2z'
                  },
                  GitHubPullRequestCommentConfigurationFieldMappings: {
                    shape: 'S2z'
                  },
                  GitHubPullRequestDocumentConfigurationFieldMappings: {
                    shape: 'S2z'
                  },
                  GitHubPullRequestDocumentAttachmentConfigurationFieldMappings: {
                    shape: 'S2z'
                  }
                }
              },
              AlfrescoConfiguration: {
                deprecated: true,
                deprecatedMessage: 'Deprecated AlfrescoConfiguration in favor of TemplateConfiguration',
                type: 'structure',
                required: ['SiteUrl', 'SiteId', 'SecretArn', 'SslCertificateS3Path'],
                members: {
                  SiteUrl: {},
                  SiteId: {},
                  SecretArn: {},
                  SslCertificateS3Path: {
                    shape: 'S1m'
                  },
                  CrawlSystemFolders: {
                    type: 'boolean'
                  },
                  CrawlComments: {
                    type: 'boolean'
                  },
                  EntityFilter: {
                    type: 'list',
                    member: {}
                  },
                  DocumentLibraryFieldMappings: {
                    shape: 'S2z'
                  },
                  BlogFieldMappings: {
                    shape: 'S2z'
                  },
                  WikiFieldMappings: {
                    shape: 'S2z'
                  },
                  InclusionPatterns: {
                    shape: 'S2l'
                  },
                  ExclusionPatterns: {
                    shape: 'S2l'
                  },
                  VpcConfiguration: {
                    shape: 'S2u'
                  }
                }
              },
              TemplateConfiguration: {
                type: 'structure',
                members: {
                  Template: {
                    type: 'structure',
                    members: {},
                    document: true
                  }
                }
              }
            }
          },
          S2l: {
            type: 'list',
            member: {}
          },
          S2u: {
            type: 'structure',
            required: ['SubnetIds', 'SecurityGroupIds'],
            members: {
              SubnetIds: {
                type: 'list',
                member: {}
              },
              SecurityGroupIds: {
                type: 'list',
                member: {}
              }
            }
          },
          S2z: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['DataSourceFieldName', 'IndexFieldName'],
              members: {
                DataSourceFieldName: {},
                DateFieldFormat: {},
                IndexFieldName: {}
              }
            }
          },
          S35: {
            type: 'structure',
            required: ['Host', 'Port'],
            members: {
              Host: {},
              Port: {
                type: 'integer'
              },
              Credentials: {}
            }
          },
          S4f: {
            type: 'list',
            member: {}
          },
          S6i: {
            type: 'list',
            member: {}
          },
          S6r: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Key', 'Value'],
              members: {
                Key: {},
                Value: {}
              }
            }
          },
          S6z: {
            type: 'structure',
            members: {
              ContentSourceConfiguration: {
                type: 'structure',
                members: {
                  DataSourceIds: {
                    type: 'list',
                    member: {}
                  },
                  FaqIds: {
                    type: 'list',
                    member: {}
                  },
                  DirectPutContent: {
                    type: 'boolean'
                  }
                }
              },
              UserIdentityConfiguration: {
                type: 'structure',
                members: {
                  IdentityAttributeName: {}
                }
              }
            }
          },
          S7f: {
            type: 'list',
            member: {}
          },
          S7h: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Id: {}
              }
            }
          },
          S7k: {
            type: 'structure',
            members: {
              FeaturedResultsSetId: {},
              FeaturedResultsSetName: {},
              Description: {},
              Status: {},
              QueryTexts: {
                shape: 'S7f'
              },
              FeaturedDocuments: {
                shape: 'S7h'
              },
              LastUpdatedTimestamp: {
                type: 'long'
              },
              CreationTimestamp: {
                type: 'long'
              }
            }
          },
          S7o: {
            type: 'structure',
            members: {
              KmsKeyId: {
                type: 'string',
                sensitive: true
              }
            }
          },
          S7q: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                JwtTokenTypeConfiguration: {
                  type: 'structure',
                  required: ['KeyLocation'],
                  members: {
                    KeyLocation: {},
                    URL: {},
                    SecretManagerArn: {},
                    UserNameAttributeField: {},
                    GroupAttributeField: {},
                    Issuer: {},
                    ClaimRegex: {}
                  }
                },
                JsonTokenTypeConfiguration: {
                  type: 'structure',
                  required: ['UserNameAttributeField', 'GroupAttributeField'],
                  members: {
                    UserNameAttributeField: {},
                    GroupAttributeField: {}
                  }
                }
              }
            }
          },
          S80: {
            type: 'structure',
            required: ['UserGroupResolutionMode'],
            members: {
              UserGroupResolutionMode: {}
            }
          },
          S8u: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                EndpointType: {},
                Endpoint: {}
              }
            }
          },
          S9b: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Name', 'Type'],
              members: {
                Name: {},
                Type: {},
                Relevance: {
                  shape: 'S9f'
                },
                Search: {
                  type: 'structure',
                  members: {
                    Facetable: {
                      type: 'boolean'
                    },
                    Searchable: {
                      type: 'boolean'
                    },
                    Displayable: {
                      type: 'boolean'
                    },
                    Sortable: {
                      type: 'boolean'
                    }
                  }
                }
              }
            }
          },
          S9f: {
            type: 'structure',
            members: {
              Freshness: {
                type: 'boolean'
              },
              Importance: {
                type: 'integer'
              },
              Duration: {},
              RankOrder: {},
              ValueImportanceMap: {
                type: 'map',
                key: {},
                value: {
                  type: 'integer'
                }
              }
            }
          },
          S9t: {
            type: 'structure',
            required: ['StorageCapacityUnits', 'QueryCapacityUnits'],
            members: {
              StorageCapacityUnits: {
                type: 'integer'
              },
              QueryCapacityUnits: {
                type: 'integer'
              }
            }
          },
          Sae: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                AttributeName: {},
                Suggestable: {
                  type: 'boolean'
                }
              }
            }
          },
          Sav: {
            type: 'list',
            member: {}
          },
          Saw: {
            type: 'structure',
            members: {
              AndAllFilters: {
                shape: 'Sax'
              },
              OrAllFilters: {
                shape: 'Sax'
              },
              NotFilter: {
                shape: 'Saw'
              },
              EqualsTo: {
                shape: 'S12'
              },
              ContainsAll: {
                shape: 'S12'
              },
              ContainsAny: {
                shape: 'S12'
              },
              GreaterThan: {
                shape: 'S12'
              },
              GreaterThanOrEquals: {
                shape: 'S12'
              },
              LessThan: {
                shape: 'S12'
              },
              LessThanOrEquals: {
                shape: 'S12'
              }
            }
          },
          Sax: {
            type: 'list',
            member: {
              shape: 'Saw'
            }
          },
          Say: {
            type: 'structure',
            members: {
              Token: {},
              UserId: {},
              Groups: {
                type: 'list',
                member: {}
              },
              DataSourceGroups: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['GroupId', 'DataSourceId'],
                  members: {
                    GroupId: {},
                    DataSourceId: {}
                  }
                }
              }
            }
          },
          Sbj: {
            type: 'structure',
            members: {
              StartTime: {
                type: 'timestamp'
              },
              EndTime: {
                type: 'timestamp'
              }
            }
          },
          Scf: {
            type: 'string',
            sensitive: true
          },
          Sdq: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                DocumentAttributeKey: {},
                Facets: {
                  shape: 'Sdq'
                },
                MaxResults: {
                  type: 'integer'
                }
              }
            }
          },
          Sdu: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Name', 'Relevance'],
              members: {
                Name: {},
                Relevance: {
                  shape: 'S9f'
                }
              }
            }
          },
          Sdw: {
            type: 'structure',
            required: ['DocumentAttributeKey', 'SortOrder'],
            members: {
              DocumentAttributeKey: {},
              SortOrder: {}
            }
          },
          Sdy: {
            type: 'list',
            member: {
              shape: 'Sdw'
            }
          },
          Se9: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Key', 'ValueType', 'Value'],
              members: {
                Key: {},
                ValueType: {},
                Value: {
                  type: 'structure',
                  members: {
                    TextWithHighlightsValue: {
                      shape: 'Sed'
                    }
                  }
                }
              }
            }
          },
          Sed: {
            type: 'structure',
            members: {
              Text: {},
              Highlights: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['BeginOffset', 'EndOffset'],
                  members: {
                    BeginOffset: {
                      type: 'integer'
                    },
                    EndOffset: {
                      type: 'integer'
                    },
                    TopAnswer: {
                      type: 'boolean'
                    },
                    Type: {}
                  }
                }
              }
            }
          },
          Seh: {
            type: 'structure',
            members: {
              ScoreConfidence: {}
            }
          },
          Ses: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                DocumentAttributeKey: {},
                DocumentAttributeValueType: {},
                DocumentAttributeValueCountPairs: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      DocumentAttributeValue: {
                        shape: 'S14'
                      },
                      Count: {
                        type: 'integer'
                      },
                      FacetResults: {
                        shape: 'Ses'
                      }
                    }
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
//# sourceMappingURL=631823b378ac2e5349b50e777c557d676c7c0161.js.map