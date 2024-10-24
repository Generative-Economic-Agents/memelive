System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2015-08-04',
          endpointPrefix: 'firehose',
          jsonVersion: '1.1',
          protocol: 'json',
          protocols: ['json'],
          serviceAbbreviation: 'Firehose',
          serviceFullName: 'Amazon Kinesis Firehose',
          serviceId: 'Firehose',
          signatureVersion: 'v4',
          targetPrefix: 'Firehose_20150804',
          uid: 'firehose-2015-08-04'
        },
        operations: {
          CreateDeliveryStream: {
            input: {
              type: 'structure',
              required: ['DeliveryStreamName'],
              members: {
                DeliveryStreamName: {},
                DeliveryStreamType: {},
                KinesisStreamSourceConfiguration: {
                  type: 'structure',
                  required: ['KinesisStreamARN', 'RoleARN'],
                  members: {
                    KinesisStreamARN: {},
                    RoleARN: {}
                  }
                },
                DeliveryStreamEncryptionConfigurationInput: {
                  shape: 'S7'
                },
                S3DestinationConfiguration: {
                  shape: 'Sa',
                  deprecated: true
                },
                ExtendedS3DestinationConfiguration: {
                  type: 'structure',
                  required: ['RoleARN', 'BucketARN'],
                  members: {
                    RoleARN: {},
                    BucketARN: {},
                    Prefix: {},
                    ErrorOutputPrefix: {},
                    BufferingHints: {
                      shape: 'Se'
                    },
                    CompressionFormat: {},
                    EncryptionConfiguration: {
                      shape: 'Si'
                    },
                    CloudWatchLoggingOptions: {
                      shape: 'Sl'
                    },
                    ProcessingConfiguration: {
                      shape: 'Sq'
                    },
                    S3BackupMode: {},
                    S3BackupConfiguration: {
                      shape: 'Sa'
                    },
                    DataFormatConversionConfiguration: {
                      shape: 'Sz'
                    },
                    DynamicPartitioningConfiguration: {
                      shape: 'S1o'
                    },
                    FileExtension: {},
                    CustomTimeZone: {}
                  }
                },
                RedshiftDestinationConfiguration: {
                  type: 'structure',
                  required: ['RoleARN', 'ClusterJDBCURL', 'CopyCommand', 'S3Configuration'],
                  members: {
                    RoleARN: {},
                    ClusterJDBCURL: {},
                    CopyCommand: {
                      shape: 'S1v'
                    },
                    Username: {
                      shape: 'S1z'
                    },
                    Password: {
                      shape: 'S20'
                    },
                    RetryOptions: {
                      shape: 'S21'
                    },
                    S3Configuration: {
                      shape: 'Sa'
                    },
                    ProcessingConfiguration: {
                      shape: 'Sq'
                    },
                    S3BackupMode: {},
                    S3BackupConfiguration: {
                      shape: 'Sa'
                    },
                    CloudWatchLoggingOptions: {
                      shape: 'Sl'
                    },
                    SecretsManagerConfiguration: {
                      shape: 'S24'
                    }
                  }
                },
                ElasticsearchDestinationConfiguration: {
                  type: 'structure',
                  required: ['RoleARN', 'IndexName', 'S3Configuration'],
                  members: {
                    RoleARN: {},
                    DomainARN: {},
                    ClusterEndpoint: {},
                    IndexName: {},
                    TypeName: {},
                    IndexRotationPeriod: {},
                    BufferingHints: {
                      shape: 'S2c'
                    },
                    RetryOptions: {
                      shape: 'S2f'
                    },
                    S3BackupMode: {},
                    S3Configuration: {
                      shape: 'Sa'
                    },
                    ProcessingConfiguration: {
                      shape: 'Sq'
                    },
                    CloudWatchLoggingOptions: {
                      shape: 'Sl'
                    },
                    VpcConfiguration: {
                      shape: 'S2i'
                    },
                    DocumentIdOptions: {
                      shape: 'S2l'
                    }
                  }
                },
                AmazonopensearchserviceDestinationConfiguration: {
                  type: 'structure',
                  required: ['RoleARN', 'IndexName', 'S3Configuration'],
                  members: {
                    RoleARN: {},
                    DomainARN: {},
                    ClusterEndpoint: {},
                    IndexName: {},
                    TypeName: {},
                    IndexRotationPeriod: {},
                    BufferingHints: {
                      shape: 'S2t'
                    },
                    RetryOptions: {
                      shape: 'S2w'
                    },
                    S3BackupMode: {},
                    S3Configuration: {
                      shape: 'Sa'
                    },
                    ProcessingConfiguration: {
                      shape: 'Sq'
                    },
                    CloudWatchLoggingOptions: {
                      shape: 'Sl'
                    },
                    VpcConfiguration: {
                      shape: 'S2i'
                    },
                    DocumentIdOptions: {
                      shape: 'S2l'
                    }
                  }
                },
                SplunkDestinationConfiguration: {
                  type: 'structure',
                  required: ['HECEndpoint', 'HECEndpointType', 'S3Configuration'],
                  members: {
                    HECEndpoint: {},
                    HECEndpointType: {},
                    HECToken: {},
                    HECAcknowledgmentTimeoutInSeconds: {
                      type: 'integer'
                    },
                    RetryOptions: {
                      shape: 'S34'
                    },
                    S3BackupMode: {},
                    S3Configuration: {
                      shape: 'Sa'
                    },
                    ProcessingConfiguration: {
                      shape: 'Sq'
                    },
                    CloudWatchLoggingOptions: {
                      shape: 'Sl'
                    },
                    BufferingHints: {
                      shape: 'S37'
                    },
                    SecretsManagerConfiguration: {
                      shape: 'S24'
                    }
                  }
                },
                HttpEndpointDestinationConfiguration: {
                  type: 'structure',
                  required: ['EndpointConfiguration', 'S3Configuration'],
                  members: {
                    EndpointConfiguration: {
                      shape: 'S3b'
                    },
                    BufferingHints: {
                      shape: 'S3f'
                    },
                    CloudWatchLoggingOptions: {
                      shape: 'Sl'
                    },
                    RequestConfiguration: {
                      shape: 'S3i'
                    },
                    ProcessingConfiguration: {
                      shape: 'Sq'
                    },
                    RoleARN: {},
                    RetryOptions: {
                      shape: 'S3o'
                    },
                    S3BackupMode: {},
                    S3Configuration: {
                      shape: 'Sa'
                    },
                    SecretsManagerConfiguration: {
                      shape: 'S24'
                    }
                  }
                },
                Tags: {
                  shape: 'S3r'
                },
                AmazonOpenSearchServerlessDestinationConfiguration: {
                  type: 'structure',
                  required: ['RoleARN', 'IndexName', 'S3Configuration'],
                  members: {
                    RoleARN: {},
                    CollectionEndpoint: {},
                    IndexName: {},
                    BufferingHints: {
                      shape: 'S3y'
                    },
                    RetryOptions: {
                      shape: 'S41'
                    },
                    S3BackupMode: {},
                    S3Configuration: {
                      shape: 'Sa'
                    },
                    ProcessingConfiguration: {
                      shape: 'Sq'
                    },
                    CloudWatchLoggingOptions: {
                      shape: 'Sl'
                    },
                    VpcConfiguration: {
                      shape: 'S2i'
                    }
                  }
                },
                MSKSourceConfiguration: {
                  type: 'structure',
                  required: ['MSKClusterARN', 'TopicName', 'AuthenticationConfiguration'],
                  members: {
                    MSKClusterARN: {},
                    TopicName: {},
                    AuthenticationConfiguration: {
                      shape: 'S47'
                    }
                  }
                },
                SnowflakeDestinationConfiguration: {
                  type: 'structure',
                  required: ['AccountUrl', 'Database', 'Schema', 'Table', 'RoleARN', 'S3Configuration'],
                  members: {
                    AccountUrl: {
                      shape: 'S4a'
                    },
                    PrivateKey: {
                      shape: 'S4b'
                    },
                    KeyPassphrase: {
                      shape: 'S4c'
                    },
                    User: {
                      shape: 'S4d'
                    },
                    Database: {
                      shape: 'S4e'
                    },
                    Schema: {
                      shape: 'S4f'
                    },
                    Table: {
                      shape: 'S4g'
                    },
                    SnowflakeRoleConfiguration: {
                      shape: 'S4h'
                    },
                    DataLoadingOption: {},
                    MetaDataColumnName: {
                      shape: 'S4k'
                    },
                    ContentColumnName: {
                      shape: 'S4l'
                    },
                    SnowflakeVpcConfiguration: {
                      shape: 'S4m'
                    },
                    CloudWatchLoggingOptions: {
                      shape: 'Sl'
                    },
                    ProcessingConfiguration: {
                      shape: 'Sq'
                    },
                    RoleARN: {},
                    RetryOptions: {
                      shape: 'S4o'
                    },
                    S3BackupMode: {},
                    S3Configuration: {
                      shape: 'Sa'
                    },
                    SecretsManagerConfiguration: {
                      shape: 'S24'
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                DeliveryStreamARN: {}
              }
            }
          },
          DeleteDeliveryStream: {
            input: {
              type: 'structure',
              required: ['DeliveryStreamName'],
              members: {
                DeliveryStreamName: {},
                AllowForceDelete: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DescribeDeliveryStream: {
            input: {
              type: 'structure',
              required: ['DeliveryStreamName'],
              members: {
                DeliveryStreamName: {},
                Limit: {
                  type: 'integer'
                },
                ExclusiveStartDestinationId: {}
              }
            },
            output: {
              type: 'structure',
              required: ['DeliveryStreamDescription'],
              members: {
                DeliveryStreamDescription: {
                  type: 'structure',
                  required: ['DeliveryStreamName', 'DeliveryStreamARN', 'DeliveryStreamStatus', 'DeliveryStreamType', 'VersionId', 'Destinations', 'HasMoreDestinations'],
                  members: {
                    DeliveryStreamName: {},
                    DeliveryStreamARN: {},
                    DeliveryStreamStatus: {},
                    FailureDescription: {
                      shape: 'S51'
                    },
                    DeliveryStreamEncryptionConfiguration: {
                      type: 'structure',
                      members: {
                        KeyARN: {},
                        KeyType: {},
                        Status: {},
                        FailureDescription: {
                          shape: 'S51'
                        }
                      }
                    },
                    DeliveryStreamType: {},
                    VersionId: {},
                    CreateTimestamp: {
                      type: 'timestamp'
                    },
                    LastUpdateTimestamp: {
                      type: 'timestamp'
                    },
                    Source: {
                      type: 'structure',
                      members: {
                        KinesisStreamSourceDescription: {
                          type: 'structure',
                          members: {
                            KinesisStreamARN: {},
                            RoleARN: {},
                            DeliveryStartTimestamp: {
                              type: 'timestamp'
                            }
                          }
                        },
                        MSKSourceDescription: {
                          type: 'structure',
                          members: {
                            MSKClusterARN: {},
                            TopicName: {},
                            AuthenticationConfiguration: {
                              shape: 'S47'
                            },
                            DeliveryStartTimestamp: {
                              type: 'timestamp'
                            }
                          }
                        }
                      }
                    },
                    Destinations: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        required: ['DestinationId'],
                        members: {
                          DestinationId: {},
                          S3DestinationDescription: {
                            shape: 'S5d'
                          },
                          ExtendedS3DestinationDescription: {
                            type: 'structure',
                            required: ['RoleARN', 'BucketARN', 'BufferingHints', 'CompressionFormat', 'EncryptionConfiguration'],
                            members: {
                              RoleARN: {},
                              BucketARN: {},
                              Prefix: {},
                              ErrorOutputPrefix: {},
                              BufferingHints: {
                                shape: 'Se'
                              },
                              CompressionFormat: {},
                              EncryptionConfiguration: {
                                shape: 'Si'
                              },
                              CloudWatchLoggingOptions: {
                                shape: 'Sl'
                              },
                              ProcessingConfiguration: {
                                shape: 'Sq'
                              },
                              S3BackupMode: {},
                              S3BackupDescription: {
                                shape: 'S5d'
                              },
                              DataFormatConversionConfiguration: {
                                shape: 'Sz'
                              },
                              DynamicPartitioningConfiguration: {
                                shape: 'S1o'
                              },
                              FileExtension: {},
                              CustomTimeZone: {}
                            }
                          },
                          RedshiftDestinationDescription: {
                            type: 'structure',
                            required: ['RoleARN', 'ClusterJDBCURL', 'CopyCommand', 'S3DestinationDescription'],
                            members: {
                              RoleARN: {},
                              ClusterJDBCURL: {},
                              CopyCommand: {
                                shape: 'S1v'
                              },
                              Username: {
                                shape: 'S1z'
                              },
                              RetryOptions: {
                                shape: 'S21'
                              },
                              S3DestinationDescription: {
                                shape: 'S5d'
                              },
                              ProcessingConfiguration: {
                                shape: 'Sq'
                              },
                              S3BackupMode: {},
                              S3BackupDescription: {
                                shape: 'S5d'
                              },
                              CloudWatchLoggingOptions: {
                                shape: 'Sl'
                              },
                              SecretsManagerConfiguration: {
                                shape: 'S24'
                              }
                            }
                          },
                          ElasticsearchDestinationDescription: {
                            type: 'structure',
                            members: {
                              RoleARN: {},
                              DomainARN: {},
                              ClusterEndpoint: {},
                              IndexName: {},
                              TypeName: {},
                              IndexRotationPeriod: {},
                              BufferingHints: {
                                shape: 'S2c'
                              },
                              RetryOptions: {
                                shape: 'S2f'
                              },
                              S3BackupMode: {},
                              S3DestinationDescription: {
                                shape: 'S5d'
                              },
                              ProcessingConfiguration: {
                                shape: 'Sq'
                              },
                              CloudWatchLoggingOptions: {
                                shape: 'Sl'
                              },
                              VpcConfigurationDescription: {
                                shape: 'S5h'
                              },
                              DocumentIdOptions: {
                                shape: 'S2l'
                              }
                            }
                          },
                          AmazonopensearchserviceDestinationDescription: {
                            type: 'structure',
                            members: {
                              RoleARN: {},
                              DomainARN: {},
                              ClusterEndpoint: {},
                              IndexName: {},
                              TypeName: {},
                              IndexRotationPeriod: {},
                              BufferingHints: {
                                shape: 'S2t'
                              },
                              RetryOptions: {
                                shape: 'S2w'
                              },
                              S3BackupMode: {},
                              S3DestinationDescription: {
                                shape: 'S5d'
                              },
                              ProcessingConfiguration: {
                                shape: 'Sq'
                              },
                              CloudWatchLoggingOptions: {
                                shape: 'Sl'
                              },
                              VpcConfigurationDescription: {
                                shape: 'S5h'
                              },
                              DocumentIdOptions: {
                                shape: 'S2l'
                              }
                            }
                          },
                          SplunkDestinationDescription: {
                            type: 'structure',
                            members: {
                              HECEndpoint: {},
                              HECEndpointType: {},
                              HECToken: {},
                              HECAcknowledgmentTimeoutInSeconds: {
                                type: 'integer'
                              },
                              RetryOptions: {
                                shape: 'S34'
                              },
                              S3BackupMode: {},
                              S3DestinationDescription: {
                                shape: 'S5d'
                              },
                              ProcessingConfiguration: {
                                shape: 'Sq'
                              },
                              CloudWatchLoggingOptions: {
                                shape: 'Sl'
                              },
                              BufferingHints: {
                                shape: 'S37'
                              },
                              SecretsManagerConfiguration: {
                                shape: 'S24'
                              }
                            }
                          },
                          HttpEndpointDestinationDescription: {
                            type: 'structure',
                            members: {
                              EndpointConfiguration: {
                                type: 'structure',
                                members: {
                                  Url: {
                                    shape: 'S3c'
                                  },
                                  Name: {}
                                }
                              },
                              BufferingHints: {
                                shape: 'S3f'
                              },
                              CloudWatchLoggingOptions: {
                                shape: 'Sl'
                              },
                              RequestConfiguration: {
                                shape: 'S3i'
                              },
                              ProcessingConfiguration: {
                                shape: 'Sq'
                              },
                              RoleARN: {},
                              RetryOptions: {
                                shape: 'S3o'
                              },
                              S3BackupMode: {},
                              S3DestinationDescription: {
                                shape: 'S5d'
                              },
                              SecretsManagerConfiguration: {
                                shape: 'S24'
                              }
                            }
                          },
                          SnowflakeDestinationDescription: {
                            type: 'structure',
                            members: {
                              AccountUrl: {
                                shape: 'S4a'
                              },
                              User: {
                                shape: 'S4d'
                              },
                              Database: {
                                shape: 'S4e'
                              },
                              Schema: {
                                shape: 'S4f'
                              },
                              Table: {
                                shape: 'S4g'
                              },
                              SnowflakeRoleConfiguration: {
                                shape: 'S4h'
                              },
                              DataLoadingOption: {},
                              MetaDataColumnName: {
                                shape: 'S4k'
                              },
                              ContentColumnName: {
                                shape: 'S4l'
                              },
                              SnowflakeVpcConfiguration: {
                                shape: 'S4m'
                              },
                              CloudWatchLoggingOptions: {
                                shape: 'Sl'
                              },
                              ProcessingConfiguration: {
                                shape: 'Sq'
                              },
                              RoleARN: {},
                              RetryOptions: {
                                shape: 'S4o'
                              },
                              S3BackupMode: {},
                              S3DestinationDescription: {
                                shape: 'S5d'
                              },
                              SecretsManagerConfiguration: {
                                shape: 'S24'
                              }
                            }
                          },
                          AmazonOpenSearchServerlessDestinationDescription: {
                            type: 'structure',
                            members: {
                              RoleARN: {},
                              CollectionEndpoint: {},
                              IndexName: {},
                              BufferingHints: {
                                shape: 'S3y'
                              },
                              RetryOptions: {
                                shape: 'S41'
                              },
                              S3BackupMode: {},
                              S3DestinationDescription: {
                                shape: 'S5d'
                              },
                              ProcessingConfiguration: {
                                shape: 'Sq'
                              },
                              CloudWatchLoggingOptions: {
                                shape: 'Sl'
                              },
                              VpcConfigurationDescription: {
                                shape: 'S5h'
                              }
                            }
                          }
                        }
                      }
                    },
                    HasMoreDestinations: {
                      type: 'boolean'
                    }
                  }
                }
              }
            }
          },
          ListDeliveryStreams: {
            input: {
              type: 'structure',
              members: {
                Limit: {
                  type: 'integer'
                },
                DeliveryStreamType: {},
                ExclusiveStartDeliveryStreamName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['DeliveryStreamNames', 'HasMoreDeliveryStreams'],
              members: {
                DeliveryStreamNames: {
                  type: 'list',
                  member: {}
                },
                HasMoreDeliveryStreams: {
                  type: 'boolean'
                }
              }
            }
          },
          ListTagsForDeliveryStream: {
            input: {
              type: 'structure',
              required: ['DeliveryStreamName'],
              members: {
                DeliveryStreamName: {},
                ExclusiveStartTagKey: {},
                Limit: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Tags', 'HasMoreTags'],
              members: {
                Tags: {
                  type: 'list',
                  member: {
                    shape: 'S3s'
                  }
                },
                HasMoreTags: {
                  type: 'boolean'
                }
              }
            }
          },
          PutRecord: {
            input: {
              type: 'structure',
              required: ['DeliveryStreamName', 'Record'],
              members: {
                DeliveryStreamName: {},
                Record: {
                  shape: 'S5x'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['RecordId'],
              members: {
                RecordId: {},
                Encrypted: {
                  type: 'boolean'
                }
              }
            }
          },
          PutRecordBatch: {
            input: {
              type: 'structure',
              required: ['DeliveryStreamName', 'Records'],
              members: {
                DeliveryStreamName: {},
                Records: {
                  type: 'list',
                  member: {
                    shape: 'S5x'
                  }
                }
              }
            },
            output: {
              type: 'structure',
              required: ['FailedPutCount', 'RequestResponses'],
              members: {
                FailedPutCount: {
                  type: 'integer'
                },
                Encrypted: {
                  type: 'boolean'
                },
                RequestResponses: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      RecordId: {},
                      ErrorCode: {},
                      ErrorMessage: {}
                    }
                  }
                }
              }
            }
          },
          StartDeliveryStreamEncryption: {
            input: {
              type: 'structure',
              required: ['DeliveryStreamName'],
              members: {
                DeliveryStreamName: {},
                DeliveryStreamEncryptionConfigurationInput: {
                  shape: 'S7'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          StopDeliveryStreamEncryption: {
            input: {
              type: 'structure',
              required: ['DeliveryStreamName'],
              members: {
                DeliveryStreamName: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          TagDeliveryStream: {
            input: {
              type: 'structure',
              required: ['DeliveryStreamName', 'Tags'],
              members: {
                DeliveryStreamName: {},
                Tags: {
                  shape: 'S3r'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UntagDeliveryStream: {
            input: {
              type: 'structure',
              required: ['DeliveryStreamName', 'TagKeys'],
              members: {
                DeliveryStreamName: {},
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
          UpdateDestination: {
            input: {
              type: 'structure',
              required: ['DeliveryStreamName', 'CurrentDeliveryStreamVersionId', 'DestinationId'],
              members: {
                DeliveryStreamName: {},
                CurrentDeliveryStreamVersionId: {},
                DestinationId: {},
                S3DestinationUpdate: {
                  shape: 'S6i',
                  deprecated: true
                },
                ExtendedS3DestinationUpdate: {
                  type: 'structure',
                  members: {
                    RoleARN: {},
                    BucketARN: {},
                    Prefix: {},
                    ErrorOutputPrefix: {},
                    BufferingHints: {
                      shape: 'Se'
                    },
                    CompressionFormat: {},
                    EncryptionConfiguration: {
                      shape: 'Si'
                    },
                    CloudWatchLoggingOptions: {
                      shape: 'Sl'
                    },
                    ProcessingConfiguration: {
                      shape: 'Sq'
                    },
                    S3BackupMode: {},
                    S3BackupUpdate: {
                      shape: 'S6i'
                    },
                    DataFormatConversionConfiguration: {
                      shape: 'Sz'
                    },
                    DynamicPartitioningConfiguration: {
                      shape: 'S1o'
                    },
                    FileExtension: {},
                    CustomTimeZone: {}
                  }
                },
                RedshiftDestinationUpdate: {
                  type: 'structure',
                  members: {
                    RoleARN: {},
                    ClusterJDBCURL: {},
                    CopyCommand: {
                      shape: 'S1v'
                    },
                    Username: {
                      shape: 'S1z'
                    },
                    Password: {
                      shape: 'S20'
                    },
                    RetryOptions: {
                      shape: 'S21'
                    },
                    S3Update: {
                      shape: 'S6i'
                    },
                    ProcessingConfiguration: {
                      shape: 'Sq'
                    },
                    S3BackupMode: {},
                    S3BackupUpdate: {
                      shape: 'S6i'
                    },
                    CloudWatchLoggingOptions: {
                      shape: 'Sl'
                    },
                    SecretsManagerConfiguration: {
                      shape: 'S24'
                    }
                  }
                },
                ElasticsearchDestinationUpdate: {
                  type: 'structure',
                  members: {
                    RoleARN: {},
                    DomainARN: {},
                    ClusterEndpoint: {},
                    IndexName: {},
                    TypeName: {},
                    IndexRotationPeriod: {},
                    BufferingHints: {
                      shape: 'S2c'
                    },
                    RetryOptions: {
                      shape: 'S2f'
                    },
                    S3Update: {
                      shape: 'S6i'
                    },
                    ProcessingConfiguration: {
                      shape: 'Sq'
                    },
                    CloudWatchLoggingOptions: {
                      shape: 'Sl'
                    },
                    DocumentIdOptions: {
                      shape: 'S2l'
                    }
                  }
                },
                AmazonopensearchserviceDestinationUpdate: {
                  type: 'structure',
                  members: {
                    RoleARN: {},
                    DomainARN: {},
                    ClusterEndpoint: {},
                    IndexName: {},
                    TypeName: {},
                    IndexRotationPeriod: {},
                    BufferingHints: {
                      shape: 'S2t'
                    },
                    RetryOptions: {
                      shape: 'S2w'
                    },
                    S3Update: {
                      shape: 'S6i'
                    },
                    ProcessingConfiguration: {
                      shape: 'Sq'
                    },
                    CloudWatchLoggingOptions: {
                      shape: 'Sl'
                    },
                    DocumentIdOptions: {
                      shape: 'S2l'
                    }
                  }
                },
                SplunkDestinationUpdate: {
                  type: 'structure',
                  members: {
                    HECEndpoint: {},
                    HECEndpointType: {},
                    HECToken: {},
                    HECAcknowledgmentTimeoutInSeconds: {
                      type: 'integer'
                    },
                    RetryOptions: {
                      shape: 'S34'
                    },
                    S3BackupMode: {},
                    S3Update: {
                      shape: 'S6i'
                    },
                    ProcessingConfiguration: {
                      shape: 'Sq'
                    },
                    CloudWatchLoggingOptions: {
                      shape: 'Sl'
                    },
                    BufferingHints: {
                      shape: 'S37'
                    },
                    SecretsManagerConfiguration: {
                      shape: 'S24'
                    }
                  }
                },
                HttpEndpointDestinationUpdate: {
                  type: 'structure',
                  members: {
                    EndpointConfiguration: {
                      shape: 'S3b'
                    },
                    BufferingHints: {
                      shape: 'S3f'
                    },
                    CloudWatchLoggingOptions: {
                      shape: 'Sl'
                    },
                    RequestConfiguration: {
                      shape: 'S3i'
                    },
                    ProcessingConfiguration: {
                      shape: 'Sq'
                    },
                    RoleARN: {},
                    RetryOptions: {
                      shape: 'S3o'
                    },
                    S3BackupMode: {},
                    S3Update: {
                      shape: 'S6i'
                    },
                    SecretsManagerConfiguration: {
                      shape: 'S24'
                    }
                  }
                },
                AmazonOpenSearchServerlessDestinationUpdate: {
                  type: 'structure',
                  members: {
                    RoleARN: {},
                    CollectionEndpoint: {},
                    IndexName: {},
                    BufferingHints: {
                      shape: 'S3y'
                    },
                    RetryOptions: {
                      shape: 'S41'
                    },
                    S3Update: {
                      shape: 'S6i'
                    },
                    ProcessingConfiguration: {
                      shape: 'Sq'
                    },
                    CloudWatchLoggingOptions: {
                      shape: 'Sl'
                    }
                  }
                },
                SnowflakeDestinationUpdate: {
                  type: 'structure',
                  members: {
                    AccountUrl: {
                      shape: 'S4a'
                    },
                    PrivateKey: {
                      shape: 'S4b'
                    },
                    KeyPassphrase: {
                      shape: 'S4c'
                    },
                    User: {
                      shape: 'S4d'
                    },
                    Database: {
                      shape: 'S4e'
                    },
                    Schema: {
                      shape: 'S4f'
                    },
                    Table: {
                      shape: 'S4g'
                    },
                    SnowflakeRoleConfiguration: {
                      shape: 'S4h'
                    },
                    DataLoadingOption: {},
                    MetaDataColumnName: {
                      shape: 'S4k'
                    },
                    ContentColumnName: {
                      shape: 'S4l'
                    },
                    CloudWatchLoggingOptions: {
                      shape: 'Sl'
                    },
                    ProcessingConfiguration: {
                      shape: 'Sq'
                    },
                    RoleARN: {},
                    RetryOptions: {
                      shape: 'S4o'
                    },
                    S3BackupMode: {},
                    S3Update: {
                      shape: 'S6i'
                    },
                    SecretsManagerConfiguration: {
                      shape: 'S24'
                    }
                  }
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
          S7: {
            type: 'structure',
            required: ['KeyType'],
            members: {
              KeyARN: {},
              KeyType: {}
            }
          },
          Sa: {
            type: 'structure',
            required: ['RoleARN', 'BucketARN'],
            members: {
              RoleARN: {},
              BucketARN: {},
              Prefix: {},
              ErrorOutputPrefix: {},
              BufferingHints: {
                shape: 'Se'
              },
              CompressionFormat: {},
              EncryptionConfiguration: {
                shape: 'Si'
              },
              CloudWatchLoggingOptions: {
                shape: 'Sl'
              }
            }
          },
          Se: {
            type: 'structure',
            members: {
              SizeInMBs: {
                type: 'integer'
              },
              IntervalInSeconds: {
                type: 'integer'
              }
            }
          },
          Si: {
            type: 'structure',
            members: {
              NoEncryptionConfig: {},
              KMSEncryptionConfig: {
                type: 'structure',
                required: ['AWSKMSKeyARN'],
                members: {
                  AWSKMSKeyARN: {}
                }
              }
            }
          },
          Sl: {
            type: 'structure',
            members: {
              Enabled: {
                type: 'boolean'
              },
              LogGroupName: {},
              LogStreamName: {}
            }
          },
          Sq: {
            type: 'structure',
            members: {
              Enabled: {
                type: 'boolean'
              },
              Processors: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['Type'],
                  members: {
                    Type: {},
                    Parameters: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        required: ['ParameterName', 'ParameterValue'],
                        members: {
                          ParameterName: {},
                          ParameterValue: {}
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          Sz: {
            type: 'structure',
            members: {
              SchemaConfiguration: {
                type: 'structure',
                members: {
                  RoleARN: {},
                  CatalogId: {},
                  DatabaseName: {},
                  TableName: {},
                  Region: {},
                  VersionId: {}
                }
              },
              InputFormatConfiguration: {
                type: 'structure',
                members: {
                  Deserializer: {
                    type: 'structure',
                    members: {
                      OpenXJsonSerDe: {
                        type: 'structure',
                        members: {
                          ConvertDotsInJsonKeysToUnderscores: {
                            type: 'boolean'
                          },
                          CaseInsensitive: {
                            type: 'boolean'
                          },
                          ColumnToJsonKeyMappings: {
                            type: 'map',
                            key: {},
                            value: {}
                          }
                        }
                      },
                      HiveJsonSerDe: {
                        type: 'structure',
                        members: {
                          TimestampFormats: {
                            type: 'list',
                            member: {}
                          }
                        }
                      }
                    }
                  }
                }
              },
              OutputFormatConfiguration: {
                type: 'structure',
                members: {
                  Serializer: {
                    type: 'structure',
                    members: {
                      ParquetSerDe: {
                        type: 'structure',
                        members: {
                          BlockSizeBytes: {
                            type: 'integer'
                          },
                          PageSizeBytes: {
                            type: 'integer'
                          },
                          Compression: {},
                          EnableDictionaryCompression: {
                            type: 'boolean'
                          },
                          MaxPaddingBytes: {
                            type: 'integer'
                          },
                          WriterVersion: {}
                        }
                      },
                      OrcSerDe: {
                        type: 'structure',
                        members: {
                          StripeSizeBytes: {
                            type: 'integer'
                          },
                          BlockSizeBytes: {
                            type: 'integer'
                          },
                          RowIndexStride: {
                            type: 'integer'
                          },
                          EnablePadding: {
                            type: 'boolean'
                          },
                          PaddingTolerance: {
                            type: 'double'
                          },
                          Compression: {},
                          BloomFilterColumns: {
                            type: 'list',
                            member: {}
                          },
                          BloomFilterFalsePositiveProbability: {
                            type: 'double'
                          },
                          DictionaryKeyThreshold: {
                            type: 'double'
                          },
                          FormatVersion: {}
                        }
                      }
                    }
                  }
                }
              },
              Enabled: {
                type: 'boolean'
              }
            }
          },
          S1o: {
            type: 'structure',
            members: {
              RetryOptions: {
                type: 'structure',
                members: {
                  DurationInSeconds: {
                    type: 'integer'
                  }
                }
              },
              Enabled: {
                type: 'boolean'
              }
            }
          },
          S1v: {
            type: 'structure',
            required: ['DataTableName'],
            members: {
              DataTableName: {},
              DataTableColumns: {},
              CopyOptions: {}
            }
          },
          S1z: {
            type: 'string',
            sensitive: true
          },
          S20: {
            type: 'string',
            sensitive: true
          },
          S21: {
            type: 'structure',
            members: {
              DurationInSeconds: {
                type: 'integer'
              }
            }
          },
          S24: {
            type: 'structure',
            required: ['Enabled'],
            members: {
              SecretARN: {},
              RoleARN: {},
              Enabled: {
                type: 'boolean'
              }
            }
          },
          S2c: {
            type: 'structure',
            members: {
              IntervalInSeconds: {
                type: 'integer'
              },
              SizeInMBs: {
                type: 'integer'
              }
            }
          },
          S2f: {
            type: 'structure',
            members: {
              DurationInSeconds: {
                type: 'integer'
              }
            }
          },
          S2i: {
            type: 'structure',
            required: ['SubnetIds', 'RoleARN', 'SecurityGroupIds'],
            members: {
              SubnetIds: {
                shape: 'S2j'
              },
              RoleARN: {},
              SecurityGroupIds: {
                shape: 'S2k'
              }
            }
          },
          S2j: {
            type: 'list',
            member: {}
          },
          S2k: {
            type: 'list',
            member: {}
          },
          S2l: {
            type: 'structure',
            required: ['DefaultDocumentIdFormat'],
            members: {
              DefaultDocumentIdFormat: {}
            }
          },
          S2t: {
            type: 'structure',
            members: {
              IntervalInSeconds: {
                type: 'integer'
              },
              SizeInMBs: {
                type: 'integer'
              }
            }
          },
          S2w: {
            type: 'structure',
            members: {
              DurationInSeconds: {
                type: 'integer'
              }
            }
          },
          S34: {
            type: 'structure',
            members: {
              DurationInSeconds: {
                type: 'integer'
              }
            }
          },
          S37: {
            type: 'structure',
            members: {
              IntervalInSeconds: {
                type: 'integer'
              },
              SizeInMBs: {
                type: 'integer'
              }
            }
          },
          S3b: {
            type: 'structure',
            required: ['Url'],
            members: {
              Url: {
                shape: 'S3c'
              },
              Name: {},
              AccessKey: {
                type: 'string',
                sensitive: true
              }
            }
          },
          S3c: {
            type: 'string',
            sensitive: true
          },
          S3f: {
            type: 'structure',
            members: {
              SizeInMBs: {
                type: 'integer'
              },
              IntervalInSeconds: {
                type: 'integer'
              }
            }
          },
          S3i: {
            type: 'structure',
            members: {
              ContentEncoding: {},
              CommonAttributes: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['AttributeName', 'AttributeValue'],
                  members: {
                    AttributeName: {
                      type: 'string',
                      sensitive: true
                    },
                    AttributeValue: {
                      type: 'string',
                      sensitive: true
                    }
                  }
                }
              }
            }
          },
          S3o: {
            type: 'structure',
            members: {
              DurationInSeconds: {
                type: 'integer'
              }
            }
          },
          S3r: {
            type: 'list',
            member: {
              shape: 'S3s'
            }
          },
          S3s: {
            type: 'structure',
            required: ['Key'],
            members: {
              Key: {},
              Value: {}
            }
          },
          S3y: {
            type: 'structure',
            members: {
              IntervalInSeconds: {
                type: 'integer'
              },
              SizeInMBs: {
                type: 'integer'
              }
            }
          },
          S41: {
            type: 'structure',
            members: {
              DurationInSeconds: {
                type: 'integer'
              }
            }
          },
          S47: {
            type: 'structure',
            required: ['RoleARN', 'Connectivity'],
            members: {
              RoleARN: {},
              Connectivity: {}
            }
          },
          S4a: {
            type: 'string',
            sensitive: true
          },
          S4b: {
            type: 'string',
            sensitive: true
          },
          S4c: {
            type: 'string',
            sensitive: true
          },
          S4d: {
            type: 'string',
            sensitive: true
          },
          S4e: {
            type: 'string',
            sensitive: true
          },
          S4f: {
            type: 'string',
            sensitive: true
          },
          S4g: {
            type: 'string',
            sensitive: true
          },
          S4h: {
            type: 'structure',
            members: {
              Enabled: {
                type: 'boolean'
              },
              SnowflakeRole: {
                type: 'string',
                sensitive: true
              }
            }
          },
          S4k: {
            type: 'string',
            sensitive: true
          },
          S4l: {
            type: 'string',
            sensitive: true
          },
          S4m: {
            type: 'structure',
            required: ['PrivateLinkVpceId'],
            members: {
              PrivateLinkVpceId: {
                type: 'string',
                sensitive: true
              }
            }
          },
          S4o: {
            type: 'structure',
            members: {
              DurationInSeconds: {
                type: 'integer'
              }
            }
          },
          S51: {
            type: 'structure',
            required: ['Type', 'Details'],
            members: {
              Type: {},
              Details: {}
            }
          },
          S5d: {
            type: 'structure',
            required: ['RoleARN', 'BucketARN', 'BufferingHints', 'CompressionFormat', 'EncryptionConfiguration'],
            members: {
              RoleARN: {},
              BucketARN: {},
              Prefix: {},
              ErrorOutputPrefix: {},
              BufferingHints: {
                shape: 'Se'
              },
              CompressionFormat: {},
              EncryptionConfiguration: {
                shape: 'Si'
              },
              CloudWatchLoggingOptions: {
                shape: 'Sl'
              }
            }
          },
          S5h: {
            type: 'structure',
            required: ['SubnetIds', 'RoleARN', 'SecurityGroupIds', 'VpcId'],
            members: {
              SubnetIds: {
                shape: 'S2j'
              },
              RoleARN: {},
              SecurityGroupIds: {
                shape: 'S2k'
              },
              VpcId: {}
            }
          },
          S5x: {
            type: 'structure',
            required: ['Data'],
            members: {
              Data: {
                type: 'blob'
              }
            }
          },
          S6i: {
            type: 'structure',
            members: {
              RoleARN: {},
              BucketARN: {},
              Prefix: {},
              ErrorOutputPrefix: {},
              BufferingHints: {
                shape: 'Se'
              },
              CompressionFormat: {},
              EncryptionConfiguration: {
                shape: 'Si'
              },
              CloudWatchLoggingOptions: {
                shape: 'Sl'
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=03080dccb962236a77a641138a3a164cc0f67410.js.map