System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2016-06-02',
          endpointPrefix: 'shield',
          jsonVersion: '1.1',
          protocol: 'json',
          serviceAbbreviation: 'AWS Shield',
          serviceFullName: 'AWS Shield',
          serviceId: 'Shield',
          signatureVersion: 'v4',
          targetPrefix: 'AWSShield_20160616',
          uid: 'shield-2016-06-02'
        },
        operations: {
          AssociateDRTLogBucket: {
            input: {
              type: 'structure',
              required: ['LogBucket'],
              members: {
                LogBucket: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          AssociateDRTRole: {
            input: {
              type: 'structure',
              required: ['RoleArn'],
              members: {
                RoleArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          AssociateHealthCheck: {
            input: {
              type: 'structure',
              required: ['ProtectionId', 'HealthCheckArn'],
              members: {
                ProtectionId: {},
                HealthCheckArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          AssociateProactiveEngagementDetails: {
            input: {
              type: 'structure',
              required: ['EmergencyContactList'],
              members: {
                EmergencyContactList: {
                  shape: 'Sc'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          CreateProtection: {
            input: {
              type: 'structure',
              required: ['Name', 'ResourceArn'],
              members: {
                Name: {},
                ResourceArn: {},
                Tags: {
                  shape: 'Sl'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ProtectionId: {}
              }
            }
          },
          CreateProtectionGroup: {
            input: {
              type: 'structure',
              required: ['ProtectionGroupId', 'Aggregation', 'Pattern'],
              members: {
                ProtectionGroupId: {},
                Aggregation: {},
                Pattern: {},
                ResourceType: {},
                Members: {
                  shape: 'Sv'
                },
                Tags: {
                  shape: 'Sl'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          CreateSubscription: {
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteProtection: {
            input: {
              type: 'structure',
              required: ['ProtectionId'],
              members: {
                ProtectionId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteProtectionGroup: {
            input: {
              type: 'structure',
              required: ['ProtectionGroupId'],
              members: {
                ProtectionGroupId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteSubscription: {
            input: {
              type: 'structure',
              members: {},
              deprecated: true
            },
            output: {
              type: 'structure',
              members: {},
              deprecated: true
            },
            deprecated: true
          },
          DescribeAttack: {
            input: {
              type: 'structure',
              required: ['AttackId'],
              members: {
                AttackId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Attack: {
                  type: 'structure',
                  members: {
                    AttackId: {},
                    ResourceArn: {},
                    SubResources: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          Type: {},
                          Id: {},
                          AttackVectors: {
                            type: 'list',
                            member: {
                              type: 'structure',
                              required: ['VectorType'],
                              members: {
                                VectorType: {},
                                VectorCounters: {
                                  shape: 'S1f'
                                }
                              }
                            }
                          },
                          Counters: {
                            shape: 'S1f'
                          }
                        }
                      }
                    },
                    StartTime: {
                      type: 'timestamp'
                    },
                    EndTime: {
                      type: 'timestamp'
                    },
                    AttackCounters: {
                      shape: 'S1f'
                    },
                    AttackProperties: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          AttackLayer: {},
                          AttackPropertyIdentifier: {},
                          TopContributors: {
                            type: 'list',
                            member: {
                              type: 'structure',
                              members: {
                                Name: {},
                                Value: {
                                  type: 'long'
                                }
                              }
                            }
                          },
                          Unit: {},
                          Total: {
                            type: 'long'
                          }
                        }
                      }
                    },
                    Mitigations: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          MitigationName: {}
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          DescribeAttackStatistics: {
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              required: ['TimeRange', 'DataItems'],
              members: {
                TimeRange: {
                  shape: 'S1w'
                },
                DataItems: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['AttackCount'],
                    members: {
                      AttackVolume: {
                        type: 'structure',
                        members: {
                          BitsPerSecond: {
                            shape: 'S21'
                          },
                          PacketsPerSecond: {
                            shape: 'S21'
                          },
                          RequestsPerSecond: {
                            shape: 'S21'
                          }
                        }
                      },
                      AttackCount: {
                        type: 'long'
                      }
                    }
                  }
                }
              }
            }
          },
          DescribeDRTAccess: {
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {
                RoleArn: {},
                LogBucketList: {
                  type: 'list',
                  member: {}
                }
              }
            }
          },
          DescribeEmergencyContactSettings: {
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {
                EmergencyContactList: {
                  shape: 'Sc'
                }
              }
            }
          },
          DescribeProtection: {
            input: {
              type: 'structure',
              members: {
                ProtectionId: {},
                ResourceArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Protection: {
                  shape: 'S29'
                }
              }
            }
          },
          DescribeProtectionGroup: {
            input: {
              type: 'structure',
              required: ['ProtectionGroupId'],
              members: {
                ProtectionGroupId: {}
              }
            },
            output: {
              type: 'structure',
              required: ['ProtectionGroup'],
              members: {
                ProtectionGroup: {
                  shape: 'S2j'
                }
              }
            }
          },
          DescribeSubscription: {
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {
                Subscription: {
                  type: 'structure',
                  required: ['SubscriptionLimits'],
                  members: {
                    StartTime: {
                      type: 'timestamp'
                    },
                    EndTime: {
                      type: 'timestamp'
                    },
                    TimeCommitmentInSeconds: {
                      type: 'long'
                    },
                    AutoRenew: {},
                    Limits: {
                      shape: 'S2p'
                    },
                    ProactiveEngagementStatus: {},
                    SubscriptionLimits: {
                      type: 'structure',
                      required: ['ProtectionLimits', 'ProtectionGroupLimits'],
                      members: {
                        ProtectionLimits: {
                          type: 'structure',
                          required: ['ProtectedResourceTypeLimits'],
                          members: {
                            ProtectedResourceTypeLimits: {
                              shape: 'S2p'
                            }
                          }
                        },
                        ProtectionGroupLimits: {
                          type: 'structure',
                          required: ['MaxProtectionGroups', 'PatternTypeLimits'],
                          members: {
                            MaxProtectionGroups: {
                              type: 'long'
                            },
                            PatternTypeLimits: {
                              type: 'structure',
                              required: ['ArbitraryPatternLimits'],
                              members: {
                                ArbitraryPatternLimits: {
                                  type: 'structure',
                                  required: ['MaxMembers'],
                                  members: {
                                    MaxMembers: {
                                      type: 'long'
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    },
                    SubscriptionArn: {}
                  }
                }
              }
            }
          },
          DisableApplicationLayerAutomaticResponse: {
            input: {
              type: 'structure',
              required: ['ResourceArn'],
              members: {
                ResourceArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DisableProactiveEngagement: {
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DisassociateDRTLogBucket: {
            input: {
              type: 'structure',
              required: ['LogBucket'],
              members: {
                LogBucket: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DisassociateDRTRole: {
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DisassociateHealthCheck: {
            input: {
              type: 'structure',
              required: ['ProtectionId', 'HealthCheckArn'],
              members: {
                ProtectionId: {},
                HealthCheckArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          EnableApplicationLayerAutomaticResponse: {
            input: {
              type: 'structure',
              required: ['ResourceArn', 'Action'],
              members: {
                ResourceArn: {},
                Action: {
                  shape: 'S2e'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          EnableProactiveEngagement: {
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          GetSubscriptionState: {
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              required: ['SubscriptionState'],
              members: {
                SubscriptionState: {}
              }
            }
          },
          ListAttacks: {
            input: {
              type: 'structure',
              members: {
                ResourceArns: {
                  type: 'list',
                  member: {}
                },
                StartTime: {
                  shape: 'S1w'
                },
                EndTime: {
                  shape: 'S1w'
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
                AttackSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      AttackId: {},
                      ResourceArn: {},
                      StartTime: {
                        type: 'timestamp'
                      },
                      EndTime: {
                        type: 'timestamp'
                      },
                      AttackVectors: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          required: ['VectorType'],
                          members: {
                            VectorType: {}
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
          ListProtectionGroups: {
            input: {
              type: 'structure',
              members: {
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                InclusionFilters: {
                  type: 'structure',
                  members: {
                    ProtectionGroupIds: {
                      type: 'list',
                      member: {}
                    },
                    Patterns: {
                      type: 'list',
                      member: {}
                    },
                    ResourceTypes: {
                      shape: 'S3r'
                    },
                    Aggregations: {
                      type: 'list',
                      member: {}
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              required: ['ProtectionGroups'],
              members: {
                ProtectionGroups: {
                  type: 'list',
                  member: {
                    shape: 'S2j'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListProtections: {
            input: {
              type: 'structure',
              members: {
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                InclusionFilters: {
                  type: 'structure',
                  members: {
                    ResourceArns: {
                      type: 'list',
                      member: {}
                    },
                    ProtectionNames: {
                      type: 'list',
                      member: {}
                    },
                    ResourceTypes: {
                      shape: 'S3r'
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Protections: {
                  type: 'list',
                  member: {
                    shape: 'S29'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListResourcesInProtectionGroup: {
            input: {
              type: 'structure',
              required: ['ProtectionGroupId'],
              members: {
                ProtectionGroupId: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['ResourceArns'],
              members: {
                ResourceArns: {
                  type: 'list',
                  member: {}
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
                  shape: 'Sl'
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
                  shape: 'Sl'
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
          UpdateApplicationLayerAutomaticResponse: {
            input: {
              type: 'structure',
              required: ['ResourceArn', 'Action'],
              members: {
                ResourceArn: {},
                Action: {
                  shape: 'S2e'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateEmergencyContactSettings: {
            input: {
              type: 'structure',
              members: {
                EmergencyContactList: {
                  shape: 'Sc'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateProtectionGroup: {
            input: {
              type: 'structure',
              required: ['ProtectionGroupId', 'Aggregation', 'Pattern'],
              members: {
                ProtectionGroupId: {},
                Aggregation: {},
                Pattern: {},
                ResourceType: {},
                Members: {
                  shape: 'Sv'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateSubscription: {
            input: {
              type: 'structure',
              members: {
                AutoRenew: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          }
        },
        shapes: {
          Sc: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['EmailAddress'],
              members: {
                EmailAddress: {},
                PhoneNumber: {},
                ContactNotes: {}
              }
            }
          },
          Sl: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Key: {},
                Value: {}
              }
            }
          },
          Sv: {
            type: 'list',
            member: {}
          },
          S1f: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Name: {},
                Max: {
                  type: 'double'
                },
                Average: {
                  type: 'double'
                },
                Sum: {
                  type: 'double'
                },
                N: {
                  type: 'integer'
                },
                Unit: {}
              }
            }
          },
          S1w: {
            type: 'structure',
            members: {
              FromInclusive: {
                type: 'timestamp'
              },
              ToExclusive: {
                type: 'timestamp'
              }
            }
          },
          S21: {
            type: 'structure',
            required: ['Max'],
            members: {
              Max: {
                type: 'double'
              }
            }
          },
          S29: {
            type: 'structure',
            members: {
              Id: {},
              Name: {},
              ResourceArn: {},
              HealthCheckIds: {
                type: 'list',
                member: {}
              },
              ProtectionArn: {},
              ApplicationLayerAutomaticResponseConfiguration: {
                type: 'structure',
                required: ['Status', 'Action'],
                members: {
                  Status: {},
                  Action: {
                    shape: 'S2e'
                  }
                }
              }
            }
          },
          S2e: {
            type: 'structure',
            members: {
              Block: {
                type: 'structure',
                members: {}
              },
              Count: {
                type: 'structure',
                members: {}
              }
            }
          },
          S2j: {
            type: 'structure',
            required: ['ProtectionGroupId', 'Aggregation', 'Pattern', 'Members'],
            members: {
              ProtectionGroupId: {},
              Aggregation: {},
              Pattern: {},
              ResourceType: {},
              Members: {
                shape: 'Sv'
              },
              ProtectionGroupArn: {}
            }
          },
          S2p: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Type: {},
                Max: {
                  type: 'long'
                }
              }
            }
          },
          S3r: {
            type: 'list',
            member: {}
          }
        }
      });
    }
  };
});
//# sourceMappingURL=41e4a0991e6ce5097a2e905115c9690fad564e70.js.map