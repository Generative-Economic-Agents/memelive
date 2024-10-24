System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2021-09-27',
          endpointPrefix: 'voiceid',
          jsonVersion: '1.0',
          protocol: 'json',
          serviceFullName: 'Amazon Voice ID',
          serviceId: 'Voice ID',
          signatureVersion: 'v4',
          signingName: 'voiceid',
          targetPrefix: 'VoiceID',
          uid: 'voice-id-2021-09-27'
        },
        operations: {
          AssociateFraudster: {
            input: {
              type: 'structure',
              required: ['DomainId', 'FraudsterId', 'WatchlistId'],
              members: {
                DomainId: {},
                FraudsterId: {
                  shape: 'S3'
                },
                WatchlistId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Fraudster: {
                  shape: 'S6'
                }
              }
            }
          },
          CreateDomain: {
            input: {
              type: 'structure',
              required: ['Name', 'ServerSideEncryptionConfiguration'],
              members: {
                ClientToken: {
                  idempotencyToken: true
                },
                Description: {
                  shape: 'Sc'
                },
                Name: {
                  shape: 'Sd'
                },
                ServerSideEncryptionConfiguration: {
                  shape: 'Se'
                },
                Tags: {
                  shape: 'Sg'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Domain: {
                  shape: 'Sl'
                }
              }
            },
            idempotent: true
          },
          CreateWatchlist: {
            input: {
              type: 'structure',
              required: ['DomainId', 'Name'],
              members: {
                ClientToken: {
                  idempotencyToken: true
                },
                Description: {
                  shape: 'St'
                },
                DomainId: {},
                Name: {
                  shape: 'Su'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Watchlist: {
                  shape: 'Sw'
                }
              }
            },
            idempotent: true
          },
          DeleteDomain: {
            input: {
              type: 'structure',
              required: ['DomainId'],
              members: {
                DomainId: {}
              }
            },
            idempotent: true
          },
          DeleteFraudster: {
            input: {
              type: 'structure',
              required: ['DomainId', 'FraudsterId'],
              members: {
                DomainId: {},
                FraudsterId: {
                  shape: 'S3'
                }
              }
            }
          },
          DeleteSpeaker: {
            input: {
              type: 'structure',
              required: ['DomainId', 'SpeakerId'],
              members: {
                DomainId: {},
                SpeakerId: {
                  shape: 'S11'
                }
              }
            }
          },
          DeleteWatchlist: {
            input: {
              type: 'structure',
              required: ['DomainId', 'WatchlistId'],
              members: {
                DomainId: {},
                WatchlistId: {}
              }
            }
          },
          DescribeDomain: {
            input: {
              type: 'structure',
              required: ['DomainId'],
              members: {
                DomainId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Domain: {
                  shape: 'Sl'
                }
              }
            }
          },
          DescribeFraudster: {
            input: {
              type: 'structure',
              required: ['DomainId', 'FraudsterId'],
              members: {
                DomainId: {},
                FraudsterId: {
                  shape: 'S3'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Fraudster: {
                  shape: 'S6'
                }
              }
            }
          },
          DescribeFraudsterRegistrationJob: {
            input: {
              type: 'structure',
              required: ['DomainId', 'JobId'],
              members: {
                DomainId: {},
                JobId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Job: {
                  shape: 'S1a'
                }
              }
            }
          },
          DescribeSpeaker: {
            input: {
              type: 'structure',
              required: ['DomainId', 'SpeakerId'],
              members: {
                DomainId: {},
                SpeakerId: {
                  shape: 'S11'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Speaker: {
                  shape: 'S1q'
                }
              }
            }
          },
          DescribeSpeakerEnrollmentJob: {
            input: {
              type: 'structure',
              required: ['DomainId', 'JobId'],
              members: {
                DomainId: {},
                JobId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Job: {
                  shape: 'S1w'
                }
              }
            }
          },
          DescribeWatchlist: {
            input: {
              type: 'structure',
              required: ['DomainId', 'WatchlistId'],
              members: {
                DomainId: {},
                WatchlistId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Watchlist: {
                  shape: 'Sw'
                }
              }
            }
          },
          DisassociateFraudster: {
            input: {
              type: 'structure',
              required: ['DomainId', 'FraudsterId', 'WatchlistId'],
              members: {
                DomainId: {},
                FraudsterId: {
                  shape: 'S3'
                },
                WatchlistId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Fraudster: {
                  shape: 'S6'
                }
              }
            }
          },
          EvaluateSession: {
            input: {
              type: 'structure',
              required: ['DomainId', 'SessionNameOrId'],
              members: {
                DomainId: {},
                SessionNameOrId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                AuthenticationResult: {
                  type: 'structure',
                  members: {
                    AudioAggregationEndedAt: {
                      type: 'timestamp'
                    },
                    AudioAggregationStartedAt: {
                      type: 'timestamp'
                    },
                    AuthenticationResultId: {},
                    Configuration: {
                      type: 'structure',
                      required: ['AcceptanceThreshold'],
                      members: {
                        AcceptanceThreshold: {
                          type: 'integer'
                        }
                      }
                    },
                    CustomerSpeakerId: {
                      shape: 'S1r'
                    },
                    Decision: {},
                    GeneratedSpeakerId: {},
                    Score: {
                      type: 'integer'
                    }
                  }
                },
                DomainId: {},
                FraudDetectionResult: {
                  type: 'structure',
                  members: {
                    AudioAggregationEndedAt: {
                      type: 'timestamp'
                    },
                    AudioAggregationStartedAt: {
                      type: 'timestamp'
                    },
                    Configuration: {
                      type: 'structure',
                      members: {
                        RiskThreshold: {
                          type: 'integer'
                        },
                        WatchlistId: {}
                      }
                    },
                    Decision: {},
                    FraudDetectionResultId: {},
                    Reasons: {
                      type: 'list',
                      member: {}
                    },
                    RiskDetails: {
                      type: 'structure',
                      required: ['KnownFraudsterRisk', 'VoiceSpoofingRisk'],
                      members: {
                        KnownFraudsterRisk: {
                          type: 'structure',
                          required: ['RiskScore'],
                          members: {
                            GeneratedFraudsterId: {},
                            RiskScore: {
                              type: 'integer'
                            }
                          }
                        },
                        VoiceSpoofingRisk: {
                          type: 'structure',
                          required: ['RiskScore'],
                          members: {
                            RiskScore: {
                              type: 'integer'
                            }
                          }
                        }
                      }
                    }
                  }
                },
                SessionId: {},
                SessionName: {},
                StreamingStatus: {}
              }
            }
          },
          ListDomains: {
            input: {
              type: 'structure',
              members: {
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                DomainSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Arn: {},
                      CreatedAt: {
                        type: 'timestamp'
                      },
                      Description: {
                        shape: 'Sc'
                      },
                      DomainId: {},
                      DomainStatus: {},
                      Name: {
                        shape: 'Sd'
                      },
                      ServerSideEncryptionConfiguration: {
                        shape: 'Se'
                      },
                      ServerSideEncryptionUpdateDetails: {
                        shape: 'So'
                      },
                      UpdatedAt: {
                        type: 'timestamp'
                      },
                      WatchlistDetails: {
                        shape: 'Sr'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListFraudsterRegistrationJobs: {
            input: {
              type: 'structure',
              required: ['DomainId'],
              members: {
                DomainId: {},
                JobStatus: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                JobSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      CreatedAt: {
                        type: 'timestamp'
                      },
                      DomainId: {},
                      EndedAt: {
                        type: 'timestamp'
                      },
                      FailureDetails: {
                        shape: 'S1c'
                      },
                      JobId: {},
                      JobName: {
                        shape: 'S1g'
                      },
                      JobProgress: {
                        shape: 'S1h'
                      },
                      JobStatus: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListFraudsters: {
            input: {
              type: 'structure',
              required: ['DomainId'],
              members: {
                DomainId: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {},
                WatchlistId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                FraudsterSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      CreatedAt: {
                        type: 'timestamp'
                      },
                      DomainId: {},
                      GeneratedFraudsterId: {},
                      WatchlistIds: {
                        shape: 'S9'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListSpeakerEnrollmentJobs: {
            input: {
              type: 'structure',
              required: ['DomainId'],
              members: {
                DomainId: {},
                JobStatus: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                JobSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      CreatedAt: {
                        type: 'timestamp'
                      },
                      DomainId: {},
                      EndedAt: {
                        type: 'timestamp'
                      },
                      FailureDetails: {
                        shape: 'S1c'
                      },
                      JobId: {},
                      JobName: {
                        shape: 'S1g'
                      },
                      JobProgress: {
                        shape: 'S1h'
                      },
                      JobStatus: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListSpeakers: {
            input: {
              type: 'structure',
              required: ['DomainId'],
              members: {
                DomainId: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                SpeakerSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      CreatedAt: {
                        type: 'timestamp'
                      },
                      CustomerSpeakerId: {
                        shape: 'S1r'
                      },
                      DomainId: {},
                      GeneratedSpeakerId: {},
                      LastAccessedAt: {
                        type: 'timestamp'
                      },
                      Status: {},
                      UpdatedAt: {
                        type: 'timestamp'
                      }
                    }
                  }
                }
              }
            }
          },
          ListTagsForResource: {
            input: {
              type: 'structure',
              required: ['ResourceArn'],
              members: {
                ResourceArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Tags: {
                  shape: 'Sg'
                }
              }
            }
          },
          ListWatchlists: {
            input: {
              type: 'structure',
              required: ['DomainId'],
              members: {
                DomainId: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                WatchlistSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      CreatedAt: {
                        type: 'timestamp'
                      },
                      DefaultWatchlist: {
                        type: 'boolean'
                      },
                      Description: {
                        shape: 'St'
                      },
                      DomainId: {},
                      Name: {
                        shape: 'Su'
                      },
                      UpdatedAt: {
                        type: 'timestamp'
                      },
                      WatchlistId: {}
                    }
                  }
                }
              }
            }
          },
          OptOutSpeaker: {
            input: {
              type: 'structure',
              required: ['DomainId', 'SpeakerId'],
              members: {
                DomainId: {},
                SpeakerId: {
                  shape: 'S11'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Speaker: {
                  shape: 'S1q'
                }
              }
            }
          },
          StartFraudsterRegistrationJob: {
            input: {
              type: 'structure',
              required: ['DataAccessRoleArn', 'DomainId', 'InputDataConfig', 'OutputDataConfig'],
              members: {
                ClientToken: {
                  idempotencyToken: true
                },
                DataAccessRoleArn: {},
                DomainId: {},
                InputDataConfig: {
                  shape: 'S1e'
                },
                JobName: {
                  shape: 'S1g'
                },
                OutputDataConfig: {
                  shape: 'S1k'
                },
                RegistrationConfig: {
                  shape: 'S1l'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Job: {
                  shape: 'S1a'
                }
              }
            },
            idempotent: true
          },
          StartSpeakerEnrollmentJob: {
            input: {
              type: 'structure',
              required: ['DataAccessRoleArn', 'DomainId', 'InputDataConfig', 'OutputDataConfig'],
              members: {
                ClientToken: {
                  idempotencyToken: true
                },
                DataAccessRoleArn: {},
                DomainId: {},
                EnrollmentConfig: {
                  shape: 'S1x'
                },
                InputDataConfig: {
                  shape: 'S1e'
                },
                JobName: {
                  shape: 'S1g'
                },
                OutputDataConfig: {
                  shape: 'S1k'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Job: {
                  shape: 'S1w'
                }
              }
            },
            idempotent: true
          },
          TagResource: {
            input: {
              type: 'structure',
              required: ['ResourceArn', 'Tags'],
              members: {
                ResourceArn: {},
                Tags: {
                  shape: 'Sg'
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
              required: ['ResourceArn', 'TagKeys'],
              members: {
                ResourceArn: {},
                TagKeys: {
                  type: 'list',
                  member: {
                    shape: 'Si'
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateDomain: {
            input: {
              type: 'structure',
              required: ['DomainId', 'Name', 'ServerSideEncryptionConfiguration'],
              members: {
                Description: {
                  shape: 'Sc'
                },
                DomainId: {},
                Name: {
                  shape: 'Sd'
                },
                ServerSideEncryptionConfiguration: {
                  shape: 'Se'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Domain: {
                  shape: 'Sl'
                }
              }
            }
          },
          UpdateWatchlist: {
            input: {
              type: 'structure',
              required: ['DomainId', 'WatchlistId'],
              members: {
                Description: {
                  shape: 'St'
                },
                DomainId: {},
                Name: {
                  shape: 'Su'
                },
                WatchlistId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Watchlist: {
                  shape: 'Sw'
                }
              }
            }
          }
        },
        shapes: {
          S3: {
            type: 'string',
            sensitive: true
          },
          S6: {
            type: 'structure',
            members: {
              CreatedAt: {
                type: 'timestamp'
              },
              DomainId: {},
              GeneratedFraudsterId: {},
              WatchlistIds: {
                shape: 'S9'
              }
            }
          },
          S9: {
            type: 'list',
            member: {}
          },
          Sc: {
            type: 'string',
            sensitive: true
          },
          Sd: {
            type: 'string',
            sensitive: true
          },
          Se: {
            type: 'structure',
            required: ['KmsKeyId'],
            members: {
              KmsKeyId: {}
            }
          },
          Sg: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Key', 'Value'],
              members: {
                Key: {
                  shape: 'Si'
                },
                Value: {
                  type: 'string',
                  sensitive: true
                }
              }
            }
          },
          Si: {
            type: 'string',
            sensitive: true
          },
          Sl: {
            type: 'structure',
            members: {
              Arn: {},
              CreatedAt: {
                type: 'timestamp'
              },
              Description: {
                shape: 'Sc'
              },
              DomainId: {},
              DomainStatus: {},
              Name: {
                shape: 'Sd'
              },
              ServerSideEncryptionConfiguration: {
                shape: 'Se'
              },
              ServerSideEncryptionUpdateDetails: {
                shape: 'So'
              },
              UpdatedAt: {
                type: 'timestamp'
              },
              WatchlistDetails: {
                shape: 'Sr'
              }
            }
          },
          So: {
            type: 'structure',
            members: {
              Message: {},
              OldKmsKeyId: {},
              UpdateStatus: {}
            }
          },
          Sr: {
            type: 'structure',
            required: ['DefaultWatchlistId'],
            members: {
              DefaultWatchlistId: {}
            }
          },
          St: {
            type: 'string',
            sensitive: true
          },
          Su: {
            type: 'string',
            sensitive: true
          },
          Sw: {
            type: 'structure',
            members: {
              CreatedAt: {
                type: 'timestamp'
              },
              DefaultWatchlist: {
                type: 'boolean'
              },
              Description: {
                shape: 'St'
              },
              DomainId: {},
              Name: {
                shape: 'Su'
              },
              UpdatedAt: {
                type: 'timestamp'
              },
              WatchlistId: {}
            }
          },
          S11: {
            type: 'string',
            sensitive: true
          },
          S1a: {
            type: 'structure',
            members: {
              CreatedAt: {
                type: 'timestamp'
              },
              DataAccessRoleArn: {},
              DomainId: {},
              EndedAt: {
                type: 'timestamp'
              },
              FailureDetails: {
                shape: 'S1c'
              },
              InputDataConfig: {
                shape: 'S1e'
              },
              JobId: {},
              JobName: {
                shape: 'S1g'
              },
              JobProgress: {
                shape: 'S1h'
              },
              JobStatus: {},
              OutputDataConfig: {
                shape: 'S1k'
              },
              RegistrationConfig: {
                shape: 'S1l'
              }
            }
          },
          S1c: {
            type: 'structure',
            members: {
              Message: {},
              StatusCode: {
                type: 'integer'
              }
            }
          },
          S1e: {
            type: 'structure',
            required: ['S3Uri'],
            members: {
              S3Uri: {}
            }
          },
          S1g: {
            type: 'string',
            sensitive: true
          },
          S1h: {
            type: 'structure',
            members: {
              PercentComplete: {
                type: 'integer'
              }
            }
          },
          S1k: {
            type: 'structure',
            required: ['S3Uri'],
            members: {
              KmsKeyId: {},
              S3Uri: {}
            }
          },
          S1l: {
            type: 'structure',
            members: {
              DuplicateRegistrationAction: {},
              FraudsterSimilarityThreshold: {
                type: 'integer'
              },
              WatchlistIds: {
                type: 'list',
                member: {}
              }
            }
          },
          S1q: {
            type: 'structure',
            members: {
              CreatedAt: {
                type: 'timestamp'
              },
              CustomerSpeakerId: {
                shape: 'S1r'
              },
              DomainId: {},
              GeneratedSpeakerId: {},
              LastAccessedAt: {
                type: 'timestamp'
              },
              Status: {},
              UpdatedAt: {
                type: 'timestamp'
              }
            }
          },
          S1r: {
            type: 'string',
            sensitive: true
          },
          S1w: {
            type: 'structure',
            members: {
              CreatedAt: {
                type: 'timestamp'
              },
              DataAccessRoleArn: {},
              DomainId: {},
              EndedAt: {
                type: 'timestamp'
              },
              EnrollmentConfig: {
                shape: 'S1x'
              },
              FailureDetails: {
                shape: 'S1c'
              },
              InputDataConfig: {
                shape: 'S1e'
              },
              JobId: {},
              JobName: {
                shape: 'S1g'
              },
              JobProgress: {
                shape: 'S1h'
              },
              JobStatus: {},
              OutputDataConfig: {
                shape: 'S1k'
              }
            }
          },
          S1x: {
            type: 'structure',
            members: {
              ExistingEnrollmentAction: {},
              FraudDetectionConfig: {
                type: 'structure',
                members: {
                  FraudDetectionAction: {},
                  RiskThreshold: {
                    type: 'integer'
                  },
                  WatchlistIds: {
                    type: 'list',
                    member: {}
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
//# sourceMappingURL=ccd3ed17b2b5e4701a2b5b6e204df14949c56a9e.js.map