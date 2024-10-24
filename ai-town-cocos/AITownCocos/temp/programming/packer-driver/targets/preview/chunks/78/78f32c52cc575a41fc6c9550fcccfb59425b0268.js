System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2018-08-01',
          endpointPrefix: 'rds-data',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceFullName: 'AWS RDS DataService',
          serviceId: 'RDS Data',
          signatureVersion: 'v4',
          signingName: 'rds-data',
          uid: 'rds-data-2018-08-01'
        },
        operations: {
          BatchExecuteStatement: {
            http: {
              requestUri: '/BatchExecute',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['resourceArn', 'secretArn', 'sql'],
              members: {
                resourceArn: {},
                secretArn: {},
                sql: {},
                database: {},
                schema: {},
                parameterSets: {
                  type: 'list',
                  member: {
                    shape: 'S6'
                  }
                },
                transactionId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                updateResults: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      generatedFields: {
                        shape: 'Sq'
                      }
                    }
                  }
                }
              }
            }
          },
          BeginTransaction: {
            http: {
              requestUri: '/BeginTransaction',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['resourceArn', 'secretArn'],
              members: {
                resourceArn: {},
                secretArn: {},
                database: {},
                schema: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                transactionId: {}
              }
            }
          },
          CommitTransaction: {
            http: {
              requestUri: '/CommitTransaction',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['resourceArn', 'secretArn', 'transactionId'],
              members: {
                resourceArn: {},
                secretArn: {},
                transactionId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                transactionStatus: {}
              }
            }
          },
          ExecuteSql: {
            http: {
              requestUri: '/ExecuteSql',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['dbClusterOrInstanceArn', 'awsSecretStoreArn', 'sqlStatements'],
              members: {
                dbClusterOrInstanceArn: {},
                awsSecretStoreArn: {},
                sqlStatements: {},
                database: {},
                schema: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                sqlStatementResults: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      resultFrame: {
                        type: 'structure',
                        members: {
                          resultSetMetadata: {
                            type: 'structure',
                            members: {
                              columnCount: {
                                type: 'long'
                              },
                              columnMetadata: {
                                shape: 'S13'
                              }
                            }
                          },
                          records: {
                            type: 'list',
                            member: {
                              type: 'structure',
                              members: {
                                values: {
                                  type: 'list',
                                  member: {
                                    shape: 'S1a'
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      numberOfRecordsUpdated: {
                        type: 'long'
                      }
                    }
                  }
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'The ExecuteSql API is deprecated, please use the ExecuteStatement API.'
          },
          ExecuteStatement: {
            http: {
              requestUri: '/Execute',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['resourceArn', 'secretArn', 'sql'],
              members: {
                resourceArn: {},
                secretArn: {},
                sql: {},
                database: {},
                schema: {},
                parameters: {
                  shape: 'S6'
                },
                transactionId: {},
                includeResultMetadata: {
                  type: 'boolean'
                },
                continueAfterTimeout: {
                  type: 'boolean'
                },
                resultSetOptions: {
                  type: 'structure',
                  members: {
                    decimalReturnType: {},
                    longReturnType: {}
                  }
                },
                formatRecordsAs: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                records: {
                  type: 'list',
                  member: {
                    shape: 'Sq'
                  }
                },
                columnMetadata: {
                  shape: 'S13'
                },
                numberOfRecordsUpdated: {
                  type: 'long'
                },
                generatedFields: {
                  shape: 'Sq'
                },
                formattedRecords: {}
              }
            }
          },
          RollbackTransaction: {
            http: {
              requestUri: '/RollbackTransaction',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['resourceArn', 'secretArn', 'transactionId'],
              members: {
                resourceArn: {},
                secretArn: {},
                transactionId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                transactionStatus: {}
              }
            }
          }
        },
        shapes: {
          S6: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                name: {},
                value: {
                  shape: 'S9'
                },
                typeHint: {}
              }
            }
          },
          S9: {
            type: 'structure',
            members: {
              isNull: {
                type: 'boolean'
              },
              booleanValue: {
                type: 'boolean'
              },
              longValue: {
                type: 'long'
              },
              doubleValue: {
                type: 'double'
              },
              stringValue: {},
              blobValue: {
                type: 'blob'
              },
              arrayValue: {
                shape: 'Sf'
              }
            },
            union: true
          },
          Sf: {
            type: 'structure',
            members: {
              booleanValues: {
                type: 'list',
                member: {
                  type: 'boolean'
                }
              },
              longValues: {
                type: 'list',
                member: {
                  type: 'long'
                }
              },
              doubleValues: {
                type: 'list',
                member: {
                  type: 'double'
                }
              },
              stringValues: {
                type: 'list',
                member: {}
              },
              arrayValues: {
                type: 'list',
                member: {
                  shape: 'Sf'
                }
              }
            },
            union: true
          },
          Sq: {
            type: 'list',
            member: {
              shape: 'S9'
            }
          },
          S13: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                name: {},
                type: {
                  type: 'integer'
                },
                typeName: {},
                label: {},
                schemaName: {},
                tableName: {},
                isAutoIncrement: {
                  type: 'boolean'
                },
                isSigned: {
                  type: 'boolean'
                },
                isCurrency: {
                  type: 'boolean'
                },
                isCaseSensitive: {
                  type: 'boolean'
                },
                nullable: {
                  type: 'integer'
                },
                precision: {
                  type: 'integer'
                },
                scale: {
                  type: 'integer'
                },
                arrayBaseColumnType: {
                  type: 'integer'
                }
              }
            }
          },
          S1a: {
            type: 'structure',
            members: {
              isNull: {
                type: 'boolean'
              },
              bitValue: {
                type: 'boolean'
              },
              bigIntValue: {
                type: 'long'
              },
              intValue: {
                type: 'integer'
              },
              doubleValue: {
                type: 'double'
              },
              realValue: {
                type: 'float'
              },
              stringValue: {},
              blobValue: {
                type: 'blob'
              },
              arrayValues: {
                shape: 'S1d'
              },
              structValue: {
                type: 'structure',
                members: {
                  attributes: {
                    shape: 'S1d'
                  }
                }
              }
            },
            union: true
          },
          S1d: {
            type: 'list',
            member: {
              shape: 'S1a'
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=78f32c52cc575a41fc6c9550fcccfb59425b0268.js.map