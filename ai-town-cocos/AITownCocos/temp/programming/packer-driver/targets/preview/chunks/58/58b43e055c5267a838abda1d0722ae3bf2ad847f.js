System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2019-12-20',
          endpointPrefix: 'redshift-data',
          jsonVersion: '1.1',
          protocol: 'json',
          serviceFullName: 'Redshift Data API Service',
          serviceId: 'Redshift Data',
          signatureVersion: 'v4',
          signingName: 'redshift-data',
          targetPrefix: 'RedshiftData',
          uid: 'redshift-data-2019-12-20'
        },
        operations: {
          BatchExecuteStatement: {
            input: {
              type: 'structure',
              required: ['Database', 'Sqls'],
              members: {
                ClientToken: {
                  idempotencyToken: true
                },
                ClusterIdentifier: {},
                Database: {},
                DbUser: {},
                SecretArn: {},
                Sqls: {
                  type: 'list',
                  member: {}
                },
                StatementName: {},
                WithEvent: {
                  type: 'boolean'
                },
                WorkgroupName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ClusterIdentifier: {},
                CreatedAt: {
                  type: 'timestamp'
                },
                Database: {},
                DbUser: {},
                Id: {},
                SecretArn: {},
                WorkgroupName: {}
              }
            }
          },
          CancelStatement: {
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
                Status: {
                  type: 'boolean'
                }
              }
            }
          },
          DescribeStatement: {
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {}
              }
            },
            output: {
              type: 'structure',
              required: ['Id'],
              members: {
                ClusterIdentifier: {},
                CreatedAt: {
                  type: 'timestamp'
                },
                Database: {},
                DbUser: {},
                Duration: {
                  type: 'long'
                },
                Error: {},
                HasResultSet: {
                  type: 'boolean'
                },
                Id: {},
                QueryParameters: {
                  shape: 'Sj'
                },
                QueryString: {},
                RedshiftPid: {
                  type: 'long'
                },
                RedshiftQueryId: {
                  type: 'long'
                },
                ResultRows: {
                  type: 'long'
                },
                ResultSize: {
                  type: 'long'
                },
                SecretArn: {},
                Status: {},
                SubStatements: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Id'],
                    members: {
                      CreatedAt: {
                        type: 'timestamp'
                      },
                      Duration: {
                        type: 'long'
                      },
                      Error: {},
                      HasResultSet: {
                        type: 'boolean'
                      },
                      Id: {},
                      QueryString: {},
                      RedshiftQueryId: {
                        type: 'long'
                      },
                      ResultRows: {
                        type: 'long'
                      },
                      ResultSize: {
                        type: 'long'
                      },
                      Status: {},
                      UpdatedAt: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                UpdatedAt: {
                  type: 'timestamp'
                },
                WorkgroupName: {}
              }
            }
          },
          DescribeTable: {
            input: {
              type: 'structure',
              required: ['Database'],
              members: {
                ClusterIdentifier: {},
                ConnectedDatabase: {},
                Database: {},
                DbUser: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {},
                Schema: {},
                SecretArn: {},
                Table: {},
                WorkgroupName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ColumnList: {
                  type: 'list',
                  member: {
                    shape: 'Sv'
                  }
                },
                NextToken: {},
                TableName: {}
              }
            }
          },
          ExecuteStatement: {
            input: {
              type: 'structure',
              required: ['Database', 'Sql'],
              members: {
                ClientToken: {
                  idempotencyToken: true
                },
                ClusterIdentifier: {},
                Database: {},
                DbUser: {},
                Parameters: {
                  shape: 'Sj'
                },
                SecretArn: {},
                Sql: {},
                StatementName: {},
                WithEvent: {
                  type: 'boolean'
                },
                WorkgroupName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ClusterIdentifier: {},
                CreatedAt: {
                  type: 'timestamp'
                },
                Database: {},
                DbUser: {},
                Id: {},
                SecretArn: {},
                WorkgroupName: {}
              }
            }
          },
          GetStatementResult: {
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {},
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              required: ['Records'],
              members: {
                ColumnMetadata: {
                  type: 'list',
                  member: {
                    shape: 'Sv'
                  }
                },
                NextToken: {},
                Records: {
                  type: 'list',
                  member: {
                    type: 'list',
                    member: {
                      type: 'structure',
                      members: {
                        blobValue: {
                          type: 'blob'
                        },
                        booleanValue: {
                          type: 'boolean'
                        },
                        doubleValue: {
                          type: 'double'
                        },
                        isNull: {
                          type: 'boolean'
                        },
                        longValue: {
                          type: 'long'
                        },
                        stringValue: {}
                      },
                      union: true
                    }
                  }
                },
                TotalNumRows: {
                  type: 'long'
                }
              }
            }
          },
          ListDatabases: {
            input: {
              type: 'structure',
              required: ['Database'],
              members: {
                ClusterIdentifier: {},
                Database: {},
                DbUser: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {},
                SecretArn: {},
                WorkgroupName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Databases: {
                  type: 'list',
                  member: {}
                },
                NextToken: {}
              }
            }
          },
          ListSchemas: {
            input: {
              type: 'structure',
              required: ['Database'],
              members: {
                ClusterIdentifier: {},
                ConnectedDatabase: {},
                Database: {},
                DbUser: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {},
                SchemaPattern: {},
                SecretArn: {},
                WorkgroupName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                Schemas: {
                  type: 'list',
                  member: {}
                }
              }
            }
          },
          ListStatements: {
            input: {
              type: 'structure',
              members: {
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {},
                RoleLevel: {
                  type: 'boolean'
                },
                StatementName: {},
                Status: {}
              }
            },
            output: {
              type: 'structure',
              required: ['Statements'],
              members: {
                NextToken: {},
                Statements: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Id'],
                    members: {
                      CreatedAt: {
                        type: 'timestamp'
                      },
                      Id: {},
                      IsBatchStatement: {
                        type: 'boolean'
                      },
                      QueryParameters: {
                        shape: 'Sj'
                      },
                      QueryString: {},
                      QueryStrings: {
                        type: 'list',
                        member: {}
                      },
                      SecretArn: {},
                      StatementName: {},
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
          ListTables: {
            input: {
              type: 'structure',
              required: ['Database'],
              members: {
                ClusterIdentifier: {},
                ConnectedDatabase: {},
                Database: {},
                DbUser: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {},
                SchemaPattern: {},
                SecretArn: {},
                TablePattern: {},
                WorkgroupName: {}
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
                      name: {},
                      schema: {},
                      type: {}
                    }
                  }
                }
              }
            }
          }
        },
        shapes: {
          Sj: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['name', 'value'],
              members: {
                name: {},
                value: {}
              }
            }
          },
          Sv: {
            type: 'structure',
            members: {
              columnDefault: {},
              isCaseSensitive: {
                type: 'boolean'
              },
              isCurrency: {
                type: 'boolean'
              },
              isSigned: {
                type: 'boolean'
              },
              label: {},
              length: {
                type: 'integer'
              },
              name: {},
              nullable: {
                type: 'integer'
              },
              precision: {
                type: 'integer'
              },
              scale: {
                type: 'integer'
              },
              schemaName: {},
              tableName: {},
              typeName: {}
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=58b43e055c5267a838abda1d0722ae3bf2ad847f.js.map