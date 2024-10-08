System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2018-06-27',
          endpointPrefix: 'textract',
          jsonVersion: '1.1',
          protocol: 'json',
          serviceFullName: 'Amazon Textract',
          serviceId: 'Textract',
          signatureVersion: 'v4',
          targetPrefix: 'Textract',
          uid: 'textract-2018-06-27'
        },
        operations: {
          AnalyzeDocument: {
            input: {
              type: 'structure',
              required: ['Document', 'FeatureTypes'],
              members: {
                Document: {
                  shape: 'S2'
                },
                FeatureTypes: {
                  shape: 'S8'
                },
                HumanLoopConfig: {
                  type: 'structure',
                  required: ['HumanLoopName', 'FlowDefinitionArn'],
                  members: {
                    HumanLoopName: {},
                    FlowDefinitionArn: {},
                    DataAttributes: {
                      type: 'structure',
                      members: {
                        ContentClassifiers: {
                          type: 'list',
                          member: {}
                        }
                      }
                    }
                  }
                },
                QueriesConfig: {
                  shape: 'Sg'
                },
                AdaptersConfig: {
                  shape: 'Sm'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                DocumentMetadata: {
                  shape: 'Su'
                },
                Blocks: {
                  shape: 'Sw'
                },
                HumanLoopActivationOutput: {
                  type: 'structure',
                  members: {
                    HumanLoopArn: {},
                    HumanLoopActivationReasons: {
                      type: 'list',
                      member: {}
                    },
                    HumanLoopActivationConditionsEvaluationResults: {
                      jsonvalue: true
                    }
                  }
                },
                AnalyzeDocumentModelVersion: {}
              }
            }
          },
          AnalyzeExpense: {
            input: {
              type: 'structure',
              required: ['Document'],
              members: {
                Document: {
                  shape: 'S2'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                DocumentMetadata: {
                  shape: 'Su'
                },
                ExpenseDocuments: {
                  shape: 'S1m'
                }
              }
            }
          },
          AnalyzeID: {
            input: {
              type: 'structure',
              required: ['DocumentPages'],
              members: {
                DocumentPages: {
                  type: 'list',
                  member: {
                    shape: 'S2'
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                IdentityDocuments: {
                  type: 'list',
                  member: {
                    shape: 'S24'
                  }
                },
                DocumentMetadata: {
                  shape: 'Su'
                },
                AnalyzeIDModelVersion: {}
              }
            }
          },
          CreateAdapter: {
            input: {
              type: 'structure',
              required: ['AdapterName', 'FeatureTypes'],
              members: {
                AdapterName: {},
                ClientRequestToken: {
                  idempotencyToken: true
                },
                Description: {},
                FeatureTypes: {
                  shape: 'S8'
                },
                AutoUpdate: {},
                Tags: {
                  shape: 'S2f'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AdapterId: {}
              }
            },
            idempotent: true
          },
          CreateAdapterVersion: {
            input: {
              type: 'structure',
              required: ['AdapterId', 'DatasetConfig', 'OutputConfig'],
              members: {
                AdapterId: {},
                ClientRequestToken: {
                  idempotencyToken: true
                },
                DatasetConfig: {
                  shape: 'S2k'
                },
                KMSKeyId: {},
                OutputConfig: {
                  shape: 'S2m'
                },
                Tags: {
                  shape: 'S2f'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AdapterId: {},
                AdapterVersion: {}
              }
            },
            idempotent: true
          },
          DeleteAdapter: {
            input: {
              type: 'structure',
              required: ['AdapterId'],
              members: {
                AdapterId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeleteAdapterVersion: {
            input: {
              type: 'structure',
              required: ['AdapterId', 'AdapterVersion'],
              members: {
                AdapterId: {},
                AdapterVersion: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DetectDocumentText: {
            input: {
              type: 'structure',
              required: ['Document'],
              members: {
                Document: {
                  shape: 'S2'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                DocumentMetadata: {
                  shape: 'Su'
                },
                Blocks: {
                  shape: 'Sw'
                },
                DetectDocumentTextModelVersion: {}
              }
            }
          },
          GetAdapter: {
            input: {
              type: 'structure',
              required: ['AdapterId'],
              members: {
                AdapterId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                AdapterId: {},
                AdapterName: {},
                CreationTime: {
                  type: 'timestamp'
                },
                Description: {},
                FeatureTypes: {
                  shape: 'S8'
                },
                AutoUpdate: {},
                Tags: {
                  shape: 'S2f'
                }
              }
            }
          },
          GetAdapterVersion: {
            input: {
              type: 'structure',
              required: ['AdapterId', 'AdapterVersion'],
              members: {
                AdapterId: {},
                AdapterVersion: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                AdapterId: {},
                AdapterVersion: {},
                CreationTime: {
                  type: 'timestamp'
                },
                FeatureTypes: {
                  shape: 'S8'
                },
                Status: {},
                StatusMessage: {},
                DatasetConfig: {
                  shape: 'S2k'
                },
                KMSKeyId: {},
                OutputConfig: {
                  shape: 'S2m'
                },
                EvaluationMetrics: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Baseline: {
                        shape: 'S33'
                      },
                      AdapterVersion: {
                        shape: 'S33'
                      },
                      FeatureType: {}
                    }
                  }
                },
                Tags: {
                  shape: 'S2f'
                }
              }
            }
          },
          GetDocumentAnalysis: {
            input: {
              type: 'structure',
              required: ['JobId'],
              members: {
                JobId: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                DocumentMetadata: {
                  shape: 'Su'
                },
                JobStatus: {},
                NextToken: {},
                Blocks: {
                  shape: 'Sw'
                },
                Warnings: {
                  shape: 'S3a'
                },
                StatusMessage: {},
                AnalyzeDocumentModelVersion: {}
              }
            }
          },
          GetDocumentTextDetection: {
            input: {
              type: 'structure',
              required: ['JobId'],
              members: {
                JobId: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                DocumentMetadata: {
                  shape: 'Su'
                },
                JobStatus: {},
                NextToken: {},
                Blocks: {
                  shape: 'Sw'
                },
                Warnings: {
                  shape: 'S3a'
                },
                StatusMessage: {},
                DetectDocumentTextModelVersion: {}
              }
            }
          },
          GetExpenseAnalysis: {
            input: {
              type: 'structure',
              required: ['JobId'],
              members: {
                JobId: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                DocumentMetadata: {
                  shape: 'Su'
                },
                JobStatus: {},
                NextToken: {},
                ExpenseDocuments: {
                  shape: 'S1m'
                },
                Warnings: {
                  shape: 'S3a'
                },
                StatusMessage: {},
                AnalyzeExpenseModelVersion: {}
              }
            }
          },
          GetLendingAnalysis: {
            input: {
              type: 'structure',
              required: ['JobId'],
              members: {
                JobId: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                DocumentMetadata: {
                  shape: 'Su'
                },
                JobStatus: {},
                NextToken: {},
                Results: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Page: {
                        type: 'integer'
                      },
                      PageClassification: {
                        type: 'structure',
                        required: ['PageType', 'PageNumber'],
                        members: {
                          PageType: {
                            shape: 'S3o'
                          },
                          PageNumber: {
                            shape: 'S3o'
                          }
                        }
                      },
                      Extractions: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            LendingDocument: {
                              type: 'structure',
                              members: {
                                LendingFields: {
                                  type: 'list',
                                  member: {
                                    type: 'structure',
                                    members: {
                                      Type: {},
                                      KeyDetection: {
                                        shape: 'S3v'
                                      },
                                      ValueDetections: {
                                        type: 'list',
                                        member: {
                                          shape: 'S3v'
                                        }
                                      }
                                    }
                                  }
                                },
                                SignatureDetections: {
                                  type: 'list',
                                  member: {
                                    type: 'structure',
                                    members: {
                                      Confidence: {
                                        type: 'float'
                                      },
                                      Geometry: {
                                        shape: 'S12'
                                      }
                                    }
                                  }
                                }
                              }
                            },
                            ExpenseDocument: {
                              shape: 'S1n'
                            },
                            IdentityDocument: {
                              shape: 'S24'
                            }
                          }
                        }
                      }
                    }
                  }
                },
                Warnings: {
                  shape: 'S3a'
                },
                StatusMessage: {},
                AnalyzeLendingModelVersion: {}
              }
            }
          },
          GetLendingAnalysisSummary: {
            input: {
              type: 'structure',
              required: ['JobId'],
              members: {
                JobId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                DocumentMetadata: {
                  shape: 'Su'
                },
                JobStatus: {},
                Summary: {
                  type: 'structure',
                  members: {
                    DocumentGroups: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          Type: {},
                          SplitDocuments: {
                            type: 'list',
                            member: {
                              type: 'structure',
                              members: {
                                Index: {
                                  type: 'integer'
                                },
                                Pages: {
                                  type: 'list',
                                  member: {
                                    type: 'integer'
                                  }
                                }
                              }
                            }
                          },
                          DetectedSignatures: {
                            type: 'list',
                            member: {
                              type: 'structure',
                              members: {
                                Page: {
                                  type: 'integer'
                                }
                              }
                            }
                          },
                          UndetectedSignatures: {
                            type: 'list',
                            member: {
                              type: 'structure',
                              members: {
                                Page: {
                                  type: 'integer'
                                }
                              }
                            }
                          }
                        }
                      }
                    },
                    UndetectedDocumentTypes: {
                      type: 'list',
                      member: {}
                    }
                  }
                },
                Warnings: {
                  shape: 'S3a'
                },
                StatusMessage: {},
                AnalyzeLendingModelVersion: {}
              }
            }
          },
          ListAdapterVersions: {
            input: {
              type: 'structure',
              members: {
                AdapterId: {},
                AfterCreationTime: {
                  type: 'timestamp'
                },
                BeforeCreationTime: {
                  type: 'timestamp'
                },
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                AdapterVersions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      AdapterId: {},
                      AdapterVersion: {},
                      CreationTime: {
                        type: 'timestamp'
                      },
                      FeatureTypes: {
                        shape: 'S8'
                      },
                      Status: {},
                      StatusMessage: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListAdapters: {
            input: {
              type: 'structure',
              members: {
                AfterCreationTime: {
                  type: 'timestamp'
                },
                BeforeCreationTime: {
                  type: 'timestamp'
                },
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Adapters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      AdapterId: {},
                      AdapterName: {},
                      CreationTime: {
                        type: 'timestamp'
                      },
                      FeatureTypes: {
                        shape: 'S8'
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
                  shape: 'S2f'
                }
              }
            }
          },
          StartDocumentAnalysis: {
            input: {
              type: 'structure',
              required: ['DocumentLocation', 'FeatureTypes'],
              members: {
                DocumentLocation: {
                  shape: 'S4o'
                },
                FeatureTypes: {
                  shape: 'S8'
                },
                ClientRequestToken: {},
                JobTag: {},
                NotificationChannel: {
                  shape: 'S4q'
                },
                OutputConfig: {
                  shape: 'S2m'
                },
                KMSKeyId: {},
                QueriesConfig: {
                  shape: 'Sg'
                },
                AdaptersConfig: {
                  shape: 'Sm'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                JobId: {}
              }
            }
          },
          StartDocumentTextDetection: {
            input: {
              type: 'structure',
              required: ['DocumentLocation'],
              members: {
                DocumentLocation: {
                  shape: 'S4o'
                },
                ClientRequestToken: {},
                JobTag: {},
                NotificationChannel: {
                  shape: 'S4q'
                },
                OutputConfig: {
                  shape: 'S2m'
                },
                KMSKeyId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                JobId: {}
              }
            }
          },
          StartExpenseAnalysis: {
            input: {
              type: 'structure',
              required: ['DocumentLocation'],
              members: {
                DocumentLocation: {
                  shape: 'S4o'
                },
                ClientRequestToken: {},
                JobTag: {},
                NotificationChannel: {
                  shape: 'S4q'
                },
                OutputConfig: {
                  shape: 'S2m'
                },
                KMSKeyId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                JobId: {}
              }
            }
          },
          StartLendingAnalysis: {
            input: {
              type: 'structure',
              required: ['DocumentLocation'],
              members: {
                DocumentLocation: {
                  shape: 'S4o'
                },
                ClientRequestToken: {},
                JobTag: {},
                NotificationChannel: {
                  shape: 'S4q'
                },
                OutputConfig: {
                  shape: 'S2m'
                },
                KMSKeyId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                JobId: {}
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
                  shape: 'S2f'
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
          UpdateAdapter: {
            input: {
              type: 'structure',
              required: ['AdapterId'],
              members: {
                AdapterId: {},
                Description: {},
                AdapterName: {},
                AutoUpdate: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                AdapterId: {},
                AdapterName: {},
                CreationTime: {
                  type: 'timestamp'
                },
                Description: {},
                FeatureTypes: {
                  shape: 'S8'
                },
                AutoUpdate: {}
              }
            }
          }
        },
        shapes: {
          S2: {
            type: 'structure',
            members: {
              Bytes: {
                type: 'blob'
              },
              S3Object: {
                shape: 'S4'
              }
            }
          },
          S4: {
            type: 'structure',
            members: {
              Bucket: {},
              Name: {},
              Version: {}
            }
          },
          S8: {
            type: 'list',
            member: {}
          },
          Sg: {
            type: 'structure',
            required: ['Queries'],
            members: {
              Queries: {
                type: 'list',
                member: {
                  shape: 'Si'
                }
              }
            }
          },
          Si: {
            type: 'structure',
            required: ['Text'],
            members: {
              Text: {},
              Alias: {},
              Pages: {
                type: 'list',
                member: {}
              }
            }
          },
          Sm: {
            type: 'structure',
            required: ['Adapters'],
            members: {
              Adapters: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['AdapterId', 'Version'],
                  members: {
                    AdapterId: {},
                    Pages: {
                      type: 'list',
                      member: {}
                    },
                    Version: {}
                  }
                }
              }
            }
          },
          Su: {
            type: 'structure',
            members: {
              Pages: {
                type: 'integer'
              }
            }
          },
          Sw: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                BlockType: {},
                Confidence: {
                  type: 'float'
                },
                Text: {},
                TextType: {},
                RowIndex: {
                  type: 'integer'
                },
                ColumnIndex: {
                  type: 'integer'
                },
                RowSpan: {
                  type: 'integer'
                },
                ColumnSpan: {
                  type: 'integer'
                },
                Geometry: {
                  shape: 'S12'
                },
                Id: {},
                Relationships: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Type: {},
                      Ids: {
                        type: 'list',
                        member: {}
                      }
                    }
                  }
                },
                EntityTypes: {
                  type: 'list',
                  member: {}
                },
                SelectionStatus: {},
                Page: {
                  type: 'integer'
                },
                Query: {
                  shape: 'Si'
                }
              }
            }
          },
          S12: {
            type: 'structure',
            members: {
              BoundingBox: {
                type: 'structure',
                members: {
                  Width: {
                    type: 'float'
                  },
                  Height: {
                    type: 'float'
                  },
                  Left: {
                    type: 'float'
                  },
                  Top: {
                    type: 'float'
                  }
                }
              },
              Polygon: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    X: {
                      type: 'float'
                    },
                    Y: {
                      type: 'float'
                    }
                  }
                }
              }
            }
          },
          S1m: {
            type: 'list',
            member: {
              shape: 'S1n'
            }
          },
          S1n: {
            type: 'structure',
            members: {
              ExpenseIndex: {
                type: 'integer'
              },
              SummaryFields: {
                shape: 'S1o'
              },
              LineItemGroups: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    LineItemGroupIndex: {
                      type: 'integer'
                    },
                    LineItems: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          LineItemExpenseFields: {
                            shape: 'S1o'
                          }
                        }
                      }
                    }
                  }
                }
              },
              Blocks: {
                shape: 'Sw'
              }
            }
          },
          S1o: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Type: {
                  type: 'structure',
                  members: {
                    Text: {},
                    Confidence: {
                      type: 'float'
                    }
                  }
                },
                LabelDetection: {
                  shape: 'S1r'
                },
                ValueDetection: {
                  shape: 'S1r'
                },
                PageNumber: {
                  type: 'integer'
                },
                Currency: {
                  type: 'structure',
                  members: {
                    Code: {},
                    Confidence: {
                      type: 'float'
                    }
                  }
                },
                GroupProperties: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Types: {
                        type: 'list',
                        member: {}
                      },
                      Id: {}
                    }
                  }
                }
              }
            }
          },
          S1r: {
            type: 'structure',
            members: {
              Text: {},
              Geometry: {
                shape: 'S12'
              },
              Confidence: {
                type: 'float'
              }
            }
          },
          S24: {
            type: 'structure',
            members: {
              DocumentIndex: {
                type: 'integer'
              },
              IdentityDocumentFields: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    Type: {
                      shape: 'S27'
                    },
                    ValueDetection: {
                      shape: 'S27'
                    }
                  }
                }
              },
              Blocks: {
                shape: 'Sw'
              }
            }
          },
          S27: {
            type: 'structure',
            required: ['Text'],
            members: {
              Text: {},
              NormalizedValue: {
                type: 'structure',
                members: {
                  Value: {},
                  ValueType: {}
                }
              },
              Confidence: {
                type: 'float'
              }
            }
          },
          S2f: {
            type: 'map',
            key: {},
            value: {}
          },
          S2k: {
            type: 'structure',
            members: {
              ManifestS3Object: {
                shape: 'S4'
              }
            }
          },
          S2m: {
            type: 'structure',
            required: ['S3Bucket'],
            members: {
              S3Bucket: {},
              S3Prefix: {}
            }
          },
          S33: {
            type: 'structure',
            members: {
              F1Score: {
                type: 'float'
              },
              Precision: {
                type: 'float'
              },
              Recall: {
                type: 'float'
              }
            }
          },
          S3a: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                ErrorCode: {},
                Pages: {
                  type: 'list',
                  member: {
                    type: 'integer'
                  }
                }
              }
            }
          },
          S3o: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Value: {},
                Confidence: {
                  type: 'float'
                }
              }
            }
          },
          S3v: {
            type: 'structure',
            members: {
              Text: {},
              SelectionStatus: {},
              Geometry: {
                shape: 'S12'
              },
              Confidence: {
                type: 'float'
              }
            }
          },
          S4o: {
            type: 'structure',
            members: {
              S3Object: {
                shape: 'S4'
              }
            }
          },
          S4q: {
            type: 'structure',
            required: ['SNSTopicArn', 'RoleArn'],
            members: {
              SNSTopicArn: {},
              RoleArn: {}
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=9ce4476d2b41d50f11ba5110f3b91839f4852d61.js.map