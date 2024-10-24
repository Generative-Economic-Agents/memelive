System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2017-10-17',
          endpointPrefix: 'secretsmanager',
          jsonVersion: '1.1',
          protocol: 'json',
          protocols: ['json'],
          serviceFullName: 'AWS Secrets Manager',
          serviceId: 'Secrets Manager',
          signatureVersion: 'v4',
          signingName: 'secretsmanager',
          targetPrefix: 'secretsmanager',
          uid: 'secretsmanager-2017-10-17'
        },
        operations: {
          BatchGetSecretValue: {
            input: {
              type: 'structure',
              members: {
                SecretIdList: {
                  type: 'list',
                  member: {}
                },
                Filters: {
                  shape: 'S4'
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
                SecretValues: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ARN: {},
                      Name: {},
                      VersionId: {},
                      SecretBinary: {
                        shape: 'Sh'
                      },
                      SecretString: {
                        shape: 'Si'
                      },
                      VersionStages: {
                        shape: 'Sj'
                      },
                      CreatedDate: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {},
                Errors: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      SecretId: {},
                      ErrorCode: {},
                      Message: {}
                    }
                  }
                }
              }
            }
          },
          CancelRotateSecret: {
            input: {
              type: 'structure',
              required: ['SecretId'],
              members: {
                SecretId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ARN: {},
                Name: {},
                VersionId: {}
              }
            }
          },
          CreateSecret: {
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {},
                ClientRequestToken: {
                  idempotencyToken: true
                },
                Description: {},
                KmsKeyId: {},
                SecretBinary: {
                  shape: 'Sh'
                },
                SecretString: {
                  shape: 'Si'
                },
                Tags: {
                  shape: 'Sx'
                },
                AddReplicaRegions: {
                  shape: 'S11'
                },
                ForceOverwriteReplicaSecret: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ARN: {},
                Name: {},
                VersionId: {},
                ReplicationStatus: {
                  shape: 'S16'
                }
              }
            }
          },
          DeleteResourcePolicy: {
            input: {
              type: 'structure',
              required: ['SecretId'],
              members: {
                SecretId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ARN: {},
                Name: {}
              }
            }
          },
          DeleteSecret: {
            input: {
              type: 'structure',
              required: ['SecretId'],
              members: {
                SecretId: {},
                RecoveryWindowInDays: {
                  type: 'long'
                },
                ForceDeleteWithoutRecovery: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ARN: {},
                Name: {},
                DeletionDate: {
                  type: 'timestamp'
                }
              }
            }
          },
          DescribeSecret: {
            input: {
              type: 'structure',
              required: ['SecretId'],
              members: {
                SecretId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ARN: {},
                Name: {},
                Description: {},
                KmsKeyId: {},
                RotationEnabled: {
                  type: 'boolean'
                },
                RotationLambdaARN: {},
                RotationRules: {
                  shape: 'S1l'
                },
                LastRotatedDate: {
                  type: 'timestamp'
                },
                LastChangedDate: {
                  type: 'timestamp'
                },
                LastAccessedDate: {
                  type: 'timestamp'
                },
                DeletedDate: {
                  type: 'timestamp'
                },
                NextRotationDate: {
                  type: 'timestamp'
                },
                Tags: {
                  shape: 'Sx'
                },
                VersionIdsToStages: {
                  shape: 'S1t'
                },
                OwningService: {},
                CreatedDate: {
                  type: 'timestamp'
                },
                PrimaryRegion: {},
                ReplicationStatus: {
                  shape: 'S16'
                }
              }
            }
          },
          GetRandomPassword: {
            input: {
              type: 'structure',
              members: {
                PasswordLength: {
                  type: 'long'
                },
                ExcludeCharacters: {},
                ExcludeNumbers: {
                  type: 'boolean'
                },
                ExcludePunctuation: {
                  type: 'boolean'
                },
                ExcludeUppercase: {
                  type: 'boolean'
                },
                ExcludeLowercase: {
                  type: 'boolean'
                },
                IncludeSpace: {
                  type: 'boolean'
                },
                RequireEachIncludedType: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                RandomPassword: {
                  type: 'string',
                  sensitive: true
                }
              }
            }
          },
          GetResourcePolicy: {
            input: {
              type: 'structure',
              required: ['SecretId'],
              members: {
                SecretId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ARN: {},
                Name: {},
                ResourcePolicy: {}
              }
            }
          },
          GetSecretValue: {
            input: {
              type: 'structure',
              required: ['SecretId'],
              members: {
                SecretId: {},
                VersionId: {},
                VersionStage: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ARN: {},
                Name: {},
                VersionId: {},
                SecretBinary: {
                  shape: 'Sh'
                },
                SecretString: {
                  shape: 'Si'
                },
                VersionStages: {
                  shape: 'Sj'
                },
                CreatedDate: {
                  type: 'timestamp'
                }
              }
            }
          },
          ListSecretVersionIds: {
            input: {
              type: 'structure',
              required: ['SecretId'],
              members: {
                SecretId: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {},
                IncludeDeprecated: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Versions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      VersionId: {},
                      VersionStages: {
                        shape: 'Sj'
                      },
                      LastAccessedDate: {
                        type: 'timestamp'
                      },
                      CreatedDate: {
                        type: 'timestamp'
                      },
                      KmsKeyIds: {
                        type: 'list',
                        member: {}
                      }
                    }
                  }
                },
                NextToken: {},
                ARN: {},
                Name: {}
              }
            }
          },
          ListSecrets: {
            input: {
              type: 'structure',
              members: {
                IncludePlannedDeletion: {
                  type: 'boolean'
                },
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {},
                Filters: {
                  shape: 'S4'
                },
                SortOrder: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                SecretList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ARN: {},
                      Name: {},
                      Description: {},
                      KmsKeyId: {},
                      RotationEnabled: {
                        type: 'boolean'
                      },
                      RotationLambdaARN: {},
                      RotationRules: {
                        shape: 'S1l'
                      },
                      LastRotatedDate: {
                        type: 'timestamp'
                      },
                      LastChangedDate: {
                        type: 'timestamp'
                      },
                      LastAccessedDate: {
                        type: 'timestamp'
                      },
                      DeletedDate: {
                        type: 'timestamp'
                      },
                      NextRotationDate: {
                        type: 'timestamp'
                      },
                      Tags: {
                        shape: 'Sx'
                      },
                      SecretVersionsToStages: {
                        shape: 'S1t'
                      },
                      OwningService: {},
                      CreatedDate: {
                        type: 'timestamp'
                      },
                      PrimaryRegion: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          PutResourcePolicy: {
            input: {
              type: 'structure',
              required: ['SecretId', 'ResourcePolicy'],
              members: {
                SecretId: {},
                ResourcePolicy: {},
                BlockPublicPolicy: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ARN: {},
                Name: {}
              }
            }
          },
          PutSecretValue: {
            input: {
              type: 'structure',
              required: ['SecretId'],
              members: {
                SecretId: {},
                ClientRequestToken: {
                  idempotencyToken: true
                },
                SecretBinary: {
                  shape: 'Sh'
                },
                SecretString: {
                  shape: 'Si'
                },
                VersionStages: {
                  shape: 'Sj'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ARN: {},
                Name: {},
                VersionId: {},
                VersionStages: {
                  shape: 'Sj'
                }
              }
            }
          },
          RemoveRegionsFromReplication: {
            input: {
              type: 'structure',
              required: ['SecretId', 'RemoveReplicaRegions'],
              members: {
                SecretId: {},
                RemoveReplicaRegions: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ARN: {},
                ReplicationStatus: {
                  shape: 'S16'
                }
              }
            }
          },
          ReplicateSecretToRegions: {
            input: {
              type: 'structure',
              required: ['SecretId', 'AddReplicaRegions'],
              members: {
                SecretId: {},
                AddReplicaRegions: {
                  shape: 'S11'
                },
                ForceOverwriteReplicaSecret: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ARN: {},
                ReplicationStatus: {
                  shape: 'S16'
                }
              }
            }
          },
          RestoreSecret: {
            input: {
              type: 'structure',
              required: ['SecretId'],
              members: {
                SecretId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ARN: {},
                Name: {}
              }
            }
          },
          RotateSecret: {
            input: {
              type: 'structure',
              required: ['SecretId'],
              members: {
                SecretId: {},
                ClientRequestToken: {
                  idempotencyToken: true
                },
                RotationLambdaARN: {},
                RotationRules: {
                  shape: 'S1l'
                },
                RotateImmediately: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ARN: {},
                Name: {},
                VersionId: {}
              }
            }
          },
          StopReplicationToReplica: {
            input: {
              type: 'structure',
              required: ['SecretId'],
              members: {
                SecretId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ARN: {}
              }
            }
          },
          TagResource: {
            input: {
              type: 'structure',
              required: ['SecretId', 'Tags'],
              members: {
                SecretId: {},
                Tags: {
                  shape: 'Sx'
                }
              }
            }
          },
          UntagResource: {
            input: {
              type: 'structure',
              required: ['SecretId', 'TagKeys'],
              members: {
                SecretId: {},
                TagKeys: {
                  type: 'list',
                  member: {}
                }
              }
            }
          },
          UpdateSecret: {
            input: {
              type: 'structure',
              required: ['SecretId'],
              members: {
                SecretId: {},
                ClientRequestToken: {
                  idempotencyToken: true
                },
                Description: {},
                KmsKeyId: {},
                SecretBinary: {
                  shape: 'Sh'
                },
                SecretString: {
                  shape: 'Si'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ARN: {},
                Name: {},
                VersionId: {}
              }
            }
          },
          UpdateSecretVersionStage: {
            input: {
              type: 'structure',
              required: ['SecretId', 'VersionStage'],
              members: {
                SecretId: {},
                VersionStage: {},
                RemoveFromVersionId: {},
                MoveToVersionId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ARN: {},
                Name: {}
              }
            }
          },
          ValidateResourcePolicy: {
            input: {
              type: 'structure',
              required: ['ResourcePolicy'],
              members: {
                SecretId: {},
                ResourcePolicy: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                PolicyValidationPassed: {
                  type: 'boolean'
                },
                ValidationErrors: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      CheckName: {},
                      ErrorMessage: {}
                    }
                  }
                }
              }
            }
          }
        },
        shapes: {
          S4: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Key: {},
                Values: {
                  type: 'list',
                  member: {}
                }
              }
            }
          },
          Sh: {
            type: 'blob',
            sensitive: true
          },
          Si: {
            type: 'string',
            sensitive: true
          },
          Sj: {
            type: 'list',
            member: {}
          },
          Sx: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Key: {},
                Value: {}
              }
            }
          },
          S11: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Region: {},
                KmsKeyId: {}
              }
            }
          },
          S16: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Region: {},
                KmsKeyId: {},
                Status: {},
                StatusMessage: {},
                LastAccessedDate: {
                  type: 'timestamp'
                }
              }
            }
          },
          S1l: {
            type: 'structure',
            members: {
              AutomaticallyAfterDays: {
                type: 'long'
              },
              Duration: {},
              ScheduleExpression: {}
            }
          },
          S1t: {
            type: 'map',
            key: {},
            value: {
              shape: 'Sj'
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=57531e1da2a3f139fcc319f4557915a900032b53.js.map