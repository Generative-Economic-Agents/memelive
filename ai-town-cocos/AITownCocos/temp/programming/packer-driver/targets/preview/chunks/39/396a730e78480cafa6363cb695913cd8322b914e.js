System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2023-11-26',
          endpointPrefix: 'bcm-data-exports',
          jsonVersion: '1.1',
          protocol: 'json',
          serviceFullName: 'AWS Billing and Cost Management Data Exports',
          serviceId: 'BCM Data Exports',
          signatureVersion: 'v4',
          signingName: 'bcm-data-exports',
          targetPrefix: 'AWSBillingAndCostManagementDataExports',
          uid: 'bcm-data-exports-2023-11-26'
        },
        operations: {
          CreateExport: {
            input: {
              type: 'structure',
              required: ['Export'],
              members: {
                Export: {
                  shape: 'S2'
                },
                ResourceTags: {
                  shape: 'Sl'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ExportArn: {}
              }
            }
          },
          DeleteExport: {
            input: {
              type: 'structure',
              required: ['ExportArn'],
              members: {
                ExportArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ExportArn: {}
              }
            },
            idempotent: true
          },
          GetExecution: {
            input: {
              type: 'structure',
              required: ['ExecutionId', 'ExportArn'],
              members: {
                ExecutionId: {},
                ExportArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ExecutionId: {},
                ExecutionStatus: {
                  shape: 'Su'
                },
                Export: {
                  shape: 'S2'
                }
              }
            }
          },
          GetExport: {
            input: {
              type: 'structure',
              required: ['ExportArn'],
              members: {
                ExportArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Export: {
                  shape: 'S2'
                },
                ExportStatus: {
                  shape: 'S10'
                }
              }
            }
          },
          GetTable: {
            input: {
              type: 'structure',
              required: ['TableName'],
              members: {
                TableName: {},
                TableProperties: {
                  shape: 'S7'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Description: {},
                Schema: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Description: {},
                      Name: {},
                      Type: {}
                    }
                  }
                },
                TableName: {},
                TableProperties: {
                  shape: 'S7'
                }
              }
            }
          },
          ListExecutions: {
            input: {
              type: 'structure',
              required: ['ExportArn'],
              members: {
                ExportArn: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Executions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['ExecutionId', 'ExecutionStatus'],
                    members: {
                      ExecutionId: {},
                      ExecutionStatus: {
                        shape: 'Su'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListExports: {
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
                Exports: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['ExportArn', 'ExportName', 'ExportStatus'],
                    members: {
                      ExportArn: {},
                      ExportName: {},
                      ExportStatus: {
                        shape: 'S10'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListTables: {
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
                NextToken: {},
                Tables: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Description: {},
                      TableName: {},
                      TableProperties: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            DefaultValue: {},
                            Description: {},
                            Name: {},
                            ValidValues: {
                              type: 'list',
                              member: {}
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
          ListTagsForResource: {
            input: {
              type: 'structure',
              required: ['ResourceArn'],
              members: {
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {},
                ResourceArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                ResourceTags: {
                  shape: 'Sl'
                }
              }
            }
          },
          TagResource: {
            input: {
              type: 'structure',
              required: ['ResourceArn', 'ResourceTags'],
              members: {
                ResourceArn: {},
                ResourceTags: {
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
              required: ['ResourceArn', 'ResourceTagKeys'],
              members: {
                ResourceArn: {},
                ResourceTagKeys: {
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
          UpdateExport: {
            input: {
              type: 'structure',
              required: ['Export', 'ExportArn'],
              members: {
                Export: {
                  shape: 'S2'
                },
                ExportArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ExportArn: {}
              }
            }
          }
        },
        shapes: {
          S2: {
            type: 'structure',
            required: ['DataQuery', 'DestinationConfigurations', 'Name', 'RefreshCadence'],
            members: {
              DataQuery: {
                type: 'structure',
                required: ['QueryStatement'],
                members: {
                  QueryStatement: {},
                  TableConfigurations: {
                    type: 'map',
                    key: {},
                    value: {
                      shape: 'S7'
                    }
                  }
                }
              },
              Description: {},
              DestinationConfigurations: {
                type: 'structure',
                required: ['S3Destination'],
                members: {
                  S3Destination: {
                    type: 'structure',
                    required: ['S3Bucket', 'S3OutputConfigurations', 'S3Prefix', 'S3Region'],
                    members: {
                      S3Bucket: {},
                      S3OutputConfigurations: {
                        type: 'structure',
                        required: ['Compression', 'Format', 'OutputType', 'Overwrite'],
                        members: {
                          Compression: {},
                          Format: {},
                          OutputType: {},
                          Overwrite: {}
                        }
                      },
                      S3Prefix: {},
                      S3Region: {}
                    }
                  }
                }
              },
              ExportArn: {},
              Name: {},
              RefreshCadence: {
                type: 'structure',
                required: ['Frequency'],
                members: {
                  Frequency: {}
                }
              }
            }
          },
          S7: {
            type: 'map',
            key: {},
            value: {}
          },
          Sl: {
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
          Su: {
            type: 'structure',
            members: {
              CompletedAt: {
                shape: 'Sv'
              },
              CreatedAt: {
                shape: 'Sv'
              },
              LastUpdatedAt: {
                shape: 'Sv'
              },
              StatusCode: {},
              StatusReason: {}
            }
          },
          Sv: {
            type: 'timestamp',
            timestampFormat: 'iso8601'
          },
          S10: {
            type: 'structure',
            members: {
              CreatedAt: {
                shape: 'Sv'
              },
              LastRefreshedAt: {
                shape: 'Sv'
              },
              LastUpdatedAt: {
                shape: 'Sv'
              },
              StatusCode: {},
              StatusReason: {}
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=396a730e78480cafa6363cb695913cd8322b914e.js.map