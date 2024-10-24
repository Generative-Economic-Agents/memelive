System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2023-08-01',
          endpointPrefix: 'neptune-db',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceFullName: 'Amazon NeptuneData',
          serviceId: 'neptunedata',
          signatureVersion: 'v4',
          signingName: 'neptune-db',
          uid: 'neptunedata-2023-08-01'
        },
        operations: {
          CancelGremlinQuery: {
            http: {
              method: 'DELETE',
              requestUri: '/gremlin/status/{queryId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['queryId'],
              members: {
                queryId: {
                  location: 'uri',
                  locationName: 'queryId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                status: {}
              }
            },
            idempotent: true
          },
          CancelLoaderJob: {
            http: {
              method: 'DELETE',
              requestUri: '/loader/{loadId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['loadId'],
              members: {
                loadId: {
                  location: 'uri',
                  locationName: 'loadId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                status: {}
              }
            },
            idempotent: true
          },
          CancelMLDataProcessingJob: {
            http: {
              method: 'DELETE',
              requestUri: '/ml/dataprocessing/{id}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['id'],
              members: {
                id: {
                  location: 'uri',
                  locationName: 'id'
                },
                neptuneIamRoleArn: {
                  location: 'querystring',
                  locationName: 'neptuneIamRoleArn'
                },
                clean: {
                  location: 'querystring',
                  locationName: 'clean',
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                status: {}
              }
            },
            idempotent: true
          },
          CancelMLModelTrainingJob: {
            http: {
              method: 'DELETE',
              requestUri: '/ml/modeltraining/{id}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['id'],
              members: {
                id: {
                  location: 'uri',
                  locationName: 'id'
                },
                neptuneIamRoleArn: {
                  location: 'querystring',
                  locationName: 'neptuneIamRoleArn'
                },
                clean: {
                  location: 'querystring',
                  locationName: 'clean',
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                status: {}
              }
            },
            idempotent: true
          },
          CancelMLModelTransformJob: {
            http: {
              method: 'DELETE',
              requestUri: '/ml/modeltransform/{id}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['id'],
              members: {
                id: {
                  location: 'uri',
                  locationName: 'id'
                },
                neptuneIamRoleArn: {
                  location: 'querystring',
                  locationName: 'neptuneIamRoleArn'
                },
                clean: {
                  location: 'querystring',
                  locationName: 'clean',
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                status: {}
              }
            },
            idempotent: true
          },
          CancelOpenCypherQuery: {
            http: {
              method: 'DELETE',
              requestUri: '/opencypher/status/{queryId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['queryId'],
              members: {
                queryId: {
                  location: 'uri',
                  locationName: 'queryId'
                },
                silent: {
                  location: 'querystring',
                  locationName: 'silent',
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                status: {},
                payload: {
                  type: 'boolean'
                }
              }
            },
            idempotent: true
          },
          CreateMLEndpoint: {
            http: {
              requestUri: '/ml/endpoints',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                id: {},
                mlModelTrainingJobId: {},
                mlModelTransformJobId: {},
                update: {
                  type: 'boolean'
                },
                neptuneIamRoleArn: {},
                modelName: {},
                instanceType: {},
                instanceCount: {
                  type: 'integer'
                },
                volumeEncryptionKMSKey: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                id: {},
                arn: {},
                creationTimeInMillis: {
                  type: 'long'
                }
              }
            }
          },
          DeleteMLEndpoint: {
            http: {
              method: 'DELETE',
              requestUri: '/ml/endpoints/{id}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['id'],
              members: {
                id: {
                  location: 'uri',
                  locationName: 'id'
                },
                neptuneIamRoleArn: {
                  location: 'querystring',
                  locationName: 'neptuneIamRoleArn'
                },
                clean: {
                  location: 'querystring',
                  locationName: 'clean',
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                status: {}
              }
            },
            idempotent: true
          },
          DeletePropertygraphStatistics: {
            http: {
              method: 'DELETE',
              requestUri: '/propertygraph/statistics',
              responseCode: 200
            },
            output: {
              type: 'structure',
              members: {
                statusCode: {
                  location: 'statusCode',
                  type: 'integer'
                },
                status: {},
                payload: {
                  shape: 'Sm'
                }
              }
            },
            idempotent: true
          },
          DeleteSparqlStatistics: {
            http: {
              method: 'DELETE',
              requestUri: '/sparql/statistics',
              responseCode: 200
            },
            output: {
              type: 'structure',
              members: {
                statusCode: {
                  location: 'statusCode',
                  type: 'integer'
                },
                status: {},
                payload: {
                  shape: 'Sm'
                }
              }
            },
            idempotent: true
          },
          ExecuteFastReset: {
            http: {
              requestUri: '/system',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['action'],
              members: {
                action: {},
                token: {}
              }
            },
            output: {
              type: 'structure',
              required: ['status'],
              members: {
                status: {},
                payload: {
                  type: 'structure',
                  members: {
                    token: {}
                  }
                }
              }
            },
            idempotent: true
          },
          ExecuteGremlinExplainQuery: {
            http: {
              requestUri: '/gremlin/explain',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['gremlinQuery'],
              members: {
                gremlinQuery: {
                  locationName: 'gremlin'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                output: {
                  type: 'blob'
                }
              },
              payload: 'output'
            }
          },
          ExecuteGremlinProfileQuery: {
            http: {
              requestUri: '/gremlin/profile',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['gremlinQuery'],
              members: {
                gremlinQuery: {
                  locationName: 'gremlin'
                },
                results: {
                  locationName: 'profile.results',
                  type: 'boolean'
                },
                chop: {
                  locationName: 'profile.chop',
                  type: 'integer'
                },
                serializer: {
                  locationName: 'profile.serializer'
                },
                indexOps: {
                  locationName: 'profile.indexOps',
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                output: {
                  type: 'blob'
                }
              },
              payload: 'output'
            }
          },
          ExecuteGremlinQuery: {
            http: {
              requestUri: '/gremlin',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['gremlinQuery'],
              members: {
                gremlinQuery: {
                  locationName: 'gremlin'
                },
                serializer: {
                  location: 'header',
                  locationName: 'accept'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                requestId: {},
                status: {
                  type: 'structure',
                  members: {
                    message: {},
                    code: {
                      type: 'integer'
                    },
                    attributes: {
                      shape: 'S10'
                    }
                  }
                },
                result: {
                  shape: 'S10'
                },
                meta: {
                  shape: 'S10'
                }
              }
            }
          },
          ExecuteOpenCypherExplainQuery: {
            http: {
              requestUri: '/opencypher/explain',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['openCypherQuery', 'explainMode'],
              members: {
                openCypherQuery: {
                  locationName: 'query'
                },
                parameters: {},
                explainMode: {
                  locationName: 'explain'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['results'],
              members: {
                results: {
                  type: 'blob'
                }
              },
              payload: 'results'
            }
          },
          ExecuteOpenCypherQuery: {
            http: {
              requestUri: '/opencypher',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['openCypherQuery'],
              members: {
                openCypherQuery: {
                  locationName: 'query'
                },
                parameters: {}
              }
            },
            output: {
              type: 'structure',
              required: ['results'],
              members: {
                results: {
                  shape: 'S10'
                }
              }
            }
          },
          GetEngineStatus: {
            http: {
              method: 'GET',
              requestUri: '/status',
              responseCode: 200
            },
            output: {
              type: 'structure',
              members: {
                status: {},
                startTime: {},
                dbEngineVersion: {},
                role: {},
                dfeQueryEngine: {},
                gremlin: {
                  shape: 'S18'
                },
                sparql: {
                  shape: 'S18'
                },
                opencypher: {
                  shape: 'S18'
                },
                labMode: {
                  shape: 'S19'
                },
                rollingBackTrxCount: {
                  type: 'integer'
                },
                rollingBackTrxEarliestStartTime: {},
                features: {
                  type: 'map',
                  key: {},
                  value: {
                    shape: 'S10'
                  }
                },
                settings: {
                  shape: 'S19'
                }
              }
            }
          },
          GetGremlinQueryStatus: {
            http: {
              method: 'GET',
              requestUri: '/gremlin/status/{queryId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['queryId'],
              members: {
                queryId: {
                  location: 'uri',
                  locationName: 'queryId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                queryId: {},
                queryString: {},
                queryEvalStats: {
                  shape: 'S1d'
                }
              }
            }
          },
          GetLoaderJobStatus: {
            http: {
              method: 'GET',
              requestUri: '/loader/{loadId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['loadId'],
              members: {
                loadId: {
                  location: 'uri',
                  locationName: 'loadId'
                },
                details: {
                  location: 'querystring',
                  locationName: 'details',
                  type: 'boolean'
                },
                errors: {
                  location: 'querystring',
                  locationName: 'errors',
                  type: 'boolean'
                },
                page: {
                  location: 'querystring',
                  locationName: 'page',
                  type: 'integer'
                },
                errorsPerPage: {
                  location: 'querystring',
                  locationName: 'errorsPerPage',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['status', 'payload'],
              members: {
                status: {},
                payload: {
                  shape: 'S10'
                }
              }
            }
          },
          GetMLDataProcessingJob: {
            http: {
              method: 'GET',
              requestUri: '/ml/dataprocessing/{id}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['id'],
              members: {
                id: {
                  location: 'uri',
                  locationName: 'id'
                },
                neptuneIamRoleArn: {
                  location: 'querystring',
                  locationName: 'neptuneIamRoleArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                status: {},
                id: {},
                processingJob: {
                  shape: 'S1j'
                }
              }
            }
          },
          GetMLEndpoint: {
            http: {
              method: 'GET',
              requestUri: '/ml/endpoints/{id}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['id'],
              members: {
                id: {
                  location: 'uri',
                  locationName: 'id'
                },
                neptuneIamRoleArn: {
                  location: 'querystring',
                  locationName: 'neptuneIamRoleArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                status: {},
                id: {},
                endpoint: {
                  shape: 'S1j'
                },
                endpointConfig: {
                  shape: 'S1m'
                }
              }
            }
          },
          GetMLModelTrainingJob: {
            http: {
              method: 'GET',
              requestUri: '/ml/modeltraining/{id}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['id'],
              members: {
                id: {
                  location: 'uri',
                  locationName: 'id'
                },
                neptuneIamRoleArn: {
                  location: 'querystring',
                  locationName: 'neptuneIamRoleArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                status: {},
                id: {},
                processingJob: {
                  shape: 'S1j'
                },
                hpoJob: {
                  shape: 'S1j'
                },
                modelTransformJob: {
                  shape: 'S1j'
                },
                mlModels: {
                  type: 'list',
                  member: {
                    shape: 'S1m'
                  }
                }
              }
            }
          },
          GetMLModelTransformJob: {
            http: {
              method: 'GET',
              requestUri: '/ml/modeltransform/{id}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['id'],
              members: {
                id: {
                  location: 'uri',
                  locationName: 'id'
                },
                neptuneIamRoleArn: {
                  location: 'querystring',
                  locationName: 'neptuneIamRoleArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                status: {},
                id: {},
                baseProcessingJob: {
                  shape: 'S1j'
                },
                remoteModelTransformJob: {
                  shape: 'S1j'
                },
                models: {
                  type: 'list',
                  member: {
                    shape: 'S1m'
                  }
                }
              }
            }
          },
          GetOpenCypherQueryStatus: {
            http: {
              method: 'GET',
              requestUri: '/opencypher/status/{queryId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['queryId'],
              members: {
                queryId: {
                  location: 'uri',
                  locationName: 'queryId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                queryId: {},
                queryString: {},
                queryEvalStats: {
                  shape: 'S1d'
                }
              }
            }
          },
          GetPropertygraphStatistics: {
            http: {
              method: 'GET',
              requestUri: '/propertygraph/statistics',
              responseCode: 200
            },
            output: {
              type: 'structure',
              required: ['status', 'payload'],
              members: {
                status: {},
                payload: {
                  shape: 'S1w'
                }
              }
            }
          },
          GetPropertygraphStream: {
            http: {
              method: 'GET',
              requestUri: '/propertygraph/stream',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                limit: {
                  location: 'querystring',
                  locationName: 'limit',
                  type: 'long'
                },
                iteratorType: {
                  location: 'querystring',
                  locationName: 'iteratorType'
                },
                commitNum: {
                  location: 'querystring',
                  locationName: 'commitNum',
                  type: 'long'
                },
                opNum: {
                  location: 'querystring',
                  locationName: 'opNum',
                  type: 'long'
                },
                encoding: {
                  location: 'header',
                  locationName: 'Accept-Encoding'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['lastEventId', 'lastTrxTimestampInMillis', 'format', 'records', 'totalRecords'],
              members: {
                lastEventId: {
                  shape: 'S19'
                },
                lastTrxTimestampInMillis: {
                  locationName: 'lastTrxTimestamp',
                  type: 'long'
                },
                format: {},
                records: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['commitTimestampInMillis', 'eventId', 'data', 'op'],
                    members: {
                      commitTimestampInMillis: {
                        locationName: 'commitTimestamp',
                        type: 'long'
                      },
                      eventId: {
                        shape: 'S19'
                      },
                      data: {
                        type: 'structure',
                        required: ['id', 'type', 'key', 'value'],
                        members: {
                          id: {},
                          type: {},
                          key: {},
                          value: {
                            shape: 'S10'
                          },
                          from: {},
                          to: {}
                        }
                      },
                      op: {},
                      isLastOp: {
                        type: 'boolean'
                      }
                    }
                  }
                },
                totalRecords: {
                  type: 'integer'
                }
              }
            }
          },
          GetPropertygraphSummary: {
            http: {
              method: 'GET',
              requestUri: '/propertygraph/statistics/summary',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                mode: {
                  location: 'querystring',
                  locationName: 'mode'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                statusCode: {
                  location: 'statusCode',
                  type: 'integer'
                },
                payload: {
                  type: 'structure',
                  members: {
                    version: {},
                    lastStatisticsComputationTime: {
                      shape: 'S1x'
                    },
                    graphSummary: {
                      type: 'structure',
                      members: {
                        numNodes: {
                          type: 'long'
                        },
                        numEdges: {
                          type: 'long'
                        },
                        numNodeLabels: {
                          type: 'long'
                        },
                        numEdgeLabels: {
                          type: 'long'
                        },
                        nodeLabels: {
                          type: 'list',
                          member: {}
                        },
                        edgeLabels: {
                          type: 'list',
                          member: {}
                        },
                        numNodeProperties: {
                          type: 'long'
                        },
                        numEdgeProperties: {
                          type: 'long'
                        },
                        nodeProperties: {
                          shape: 'S2e'
                        },
                        edgeProperties: {
                          shape: 'S2e'
                        },
                        totalNodePropertyValues: {
                          type: 'long'
                        },
                        totalEdgePropertyValues: {
                          type: 'long'
                        },
                        nodeStructures: {
                          type: 'list',
                          member: {
                            type: 'structure',
                            members: {
                              count: {
                                type: 'long'
                              },
                              nodeProperties: {
                                type: 'list',
                                member: {}
                              },
                              distinctOutgoingEdgeLabels: {
                                type: 'list',
                                member: {}
                              }
                            }
                          }
                        },
                        edgeStructures: {
                          type: 'list',
                          member: {
                            type: 'structure',
                            members: {
                              count: {
                                type: 'long'
                              },
                              edgeProperties: {
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
            }
          },
          GetRDFGraphSummary: {
            http: {
              method: 'GET',
              requestUri: '/rdf/statistics/summary',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                mode: {
                  location: 'querystring',
                  locationName: 'mode'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                statusCode: {
                  location: 'statusCode',
                  type: 'integer'
                },
                payload: {
                  type: 'structure',
                  members: {
                    version: {},
                    lastStatisticsComputationTime: {
                      shape: 'S1x'
                    },
                    graphSummary: {
                      type: 'structure',
                      members: {
                        numDistinctSubjects: {
                          type: 'long'
                        },
                        numDistinctPredicates: {
                          type: 'long'
                        },
                        numQuads: {
                          type: 'long'
                        },
                        numClasses: {
                          type: 'long'
                        },
                        classes: {
                          type: 'list',
                          member: {}
                        },
                        predicates: {
                          shape: 'S2e'
                        },
                        subjectStructures: {
                          type: 'list',
                          member: {
                            type: 'structure',
                            members: {
                              count: {
                                type: 'long'
                              },
                              predicates: {
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
            }
          },
          GetSparqlStatistics: {
            http: {
              method: 'GET',
              requestUri: '/sparql/statistics',
              responseCode: 200
            },
            output: {
              type: 'structure',
              required: ['status', 'payload'],
              members: {
                status: {},
                payload: {
                  shape: 'S1w'
                }
              }
            }
          },
          GetSparqlStream: {
            http: {
              method: 'GET',
              requestUri: '/sparql/stream',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                limit: {
                  location: 'querystring',
                  locationName: 'limit',
                  type: 'long'
                },
                iteratorType: {
                  location: 'querystring',
                  locationName: 'iteratorType'
                },
                commitNum: {
                  location: 'querystring',
                  locationName: 'commitNum',
                  type: 'long'
                },
                opNum: {
                  location: 'querystring',
                  locationName: 'opNum',
                  type: 'long'
                },
                encoding: {
                  location: 'header',
                  locationName: 'Accept-Encoding'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['lastEventId', 'lastTrxTimestampInMillis', 'format', 'records', 'totalRecords'],
              members: {
                lastEventId: {
                  shape: 'S19'
                },
                lastTrxTimestampInMillis: {
                  locationName: 'lastTrxTimestamp',
                  type: 'long'
                },
                format: {},
                records: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['commitTimestampInMillis', 'eventId', 'data', 'op'],
                    members: {
                      commitTimestampInMillis: {
                        locationName: 'commitTimestamp',
                        type: 'long'
                      },
                      eventId: {
                        shape: 'S19'
                      },
                      data: {
                        type: 'structure',
                        required: ['stmt'],
                        members: {
                          stmt: {}
                        }
                      },
                      op: {},
                      isLastOp: {
                        type: 'boolean'
                      }
                    }
                  }
                },
                totalRecords: {
                  type: 'integer'
                }
              }
            }
          },
          ListGremlinQueries: {
            http: {
              method: 'GET',
              requestUri: '/gremlin/status',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                includeWaiting: {
                  location: 'querystring',
                  locationName: 'includeWaiting',
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                acceptedQueryCount: {
                  type: 'integer'
                },
                runningQueryCount: {
                  type: 'integer'
                },
                queries: {
                  type: 'list',
                  member: {
                    shape: 'S35'
                  }
                }
              }
            }
          },
          ListLoaderJobs: {
            http: {
              method: 'GET',
              requestUri: '/loader',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                limit: {
                  location: 'querystring',
                  locationName: 'limit',
                  type: 'integer'
                },
                includeQueuedLoads: {
                  location: 'querystring',
                  locationName: 'includeQueuedLoads',
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['status', 'payload'],
              members: {
                status: {},
                payload: {
                  type: 'structure',
                  members: {
                    loadIds: {
                      shape: 'S3a'
                    }
                  }
                }
              }
            }
          },
          ListMLDataProcessingJobs: {
            http: {
              method: 'GET',
              requestUri: '/ml/dataprocessing',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                maxItems: {
                  location: 'querystring',
                  locationName: 'maxItems',
                  type: 'integer'
                },
                neptuneIamRoleArn: {
                  location: 'querystring',
                  locationName: 'neptuneIamRoleArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ids: {
                  shape: 'S3a'
                }
              }
            }
          },
          ListMLEndpoints: {
            http: {
              method: 'GET',
              requestUri: '/ml/endpoints',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                maxItems: {
                  location: 'querystring',
                  locationName: 'maxItems',
                  type: 'integer'
                },
                neptuneIamRoleArn: {
                  location: 'querystring',
                  locationName: 'neptuneIamRoleArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ids: {
                  shape: 'S3a'
                }
              }
            }
          },
          ListMLModelTrainingJobs: {
            http: {
              method: 'GET',
              requestUri: '/ml/modeltraining',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                maxItems: {
                  location: 'querystring',
                  locationName: 'maxItems',
                  type: 'integer'
                },
                neptuneIamRoleArn: {
                  location: 'querystring',
                  locationName: 'neptuneIamRoleArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ids: {
                  shape: 'S3a'
                }
              }
            }
          },
          ListMLModelTransformJobs: {
            http: {
              method: 'GET',
              requestUri: '/ml/modeltransform',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                maxItems: {
                  location: 'querystring',
                  locationName: 'maxItems',
                  type: 'integer'
                },
                neptuneIamRoleArn: {
                  location: 'querystring',
                  locationName: 'neptuneIamRoleArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ids: {
                  shape: 'S3a'
                }
              }
            }
          },
          ListOpenCypherQueries: {
            http: {
              method: 'GET',
              requestUri: '/opencypher/status',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                includeWaiting: {
                  location: 'querystring',
                  locationName: 'includeWaiting',
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                acceptedQueryCount: {
                  type: 'integer'
                },
                runningQueryCount: {
                  type: 'integer'
                },
                queries: {
                  type: 'list',
                  member: {
                    shape: 'S35'
                  }
                }
              }
            }
          },
          ManagePropertygraphStatistics: {
            http: {
              requestUri: '/propertygraph/statistics',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                mode: {}
              }
            },
            output: {
              type: 'structure',
              required: ['status'],
              members: {
                status: {},
                payload: {
                  shape: 'S3t'
                }
              }
            },
            idempotent: true
          },
          ManageSparqlStatistics: {
            http: {
              requestUri: '/sparql/statistics',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                mode: {}
              }
            },
            output: {
              type: 'structure',
              required: ['status'],
              members: {
                status: {},
                payload: {
                  shape: 'S3t'
                }
              }
            },
            idempotent: true
          },
          StartLoaderJob: {
            http: {
              requestUri: '/loader',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['source', 'format', 's3BucketRegion', 'iamRoleArn'],
              members: {
                source: {},
                format: {},
                s3BucketRegion: {
                  locationName: 'region'
                },
                iamRoleArn: {},
                mode: {},
                failOnError: {
                  type: 'boolean'
                },
                parallelism: {},
                parserConfiguration: {
                  shape: 'S19'
                },
                updateSingleCardinalityProperties: {
                  type: 'boolean'
                },
                queueRequest: {
                  type: 'boolean'
                },
                dependencies: {
                  shape: 'S3a'
                },
                userProvidedEdgeIds: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['status', 'payload'],
              members: {
                status: {},
                payload: {
                  shape: 'S19'
                }
              }
            },
            idempotent: true
          },
          StartMLDataProcessingJob: {
            http: {
              requestUri: '/ml/dataprocessing',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['inputDataS3Location', 'processedDataS3Location'],
              members: {
                id: {},
                previousDataProcessingJobId: {},
                inputDataS3Location: {},
                processedDataS3Location: {},
                sagemakerIamRoleArn: {},
                neptuneIamRoleArn: {},
                processingInstanceType: {},
                processingInstanceVolumeSizeInGB: {
                  type: 'integer'
                },
                processingTimeOutInSeconds: {
                  type: 'integer'
                },
                modelType: {},
                configFileName: {},
                subnets: {
                  shape: 'S3a'
                },
                securityGroupIds: {
                  shape: 'S3a'
                },
                volumeEncryptionKMSKey: {},
                s3OutputEncryptionKMSKey: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                id: {},
                arn: {},
                creationTimeInMillis: {
                  type: 'long'
                }
              }
            }
          },
          StartMLModelTrainingJob: {
            http: {
              requestUri: '/ml/modeltraining',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['dataProcessingJobId', 'trainModelS3Location'],
              members: {
                id: {},
                previousModelTrainingJobId: {},
                dataProcessingJobId: {},
                trainModelS3Location: {},
                sagemakerIamRoleArn: {},
                neptuneIamRoleArn: {},
                baseProcessingInstanceType: {},
                trainingInstanceType: {},
                trainingInstanceVolumeSizeInGB: {
                  type: 'integer'
                },
                trainingTimeOutInSeconds: {
                  type: 'integer'
                },
                maxHPONumberOfTrainingJobs: {
                  type: 'integer'
                },
                maxHPOParallelTrainingJobs: {
                  type: 'integer'
                },
                subnets: {
                  shape: 'S3a'
                },
                securityGroupIds: {
                  shape: 'S3a'
                },
                volumeEncryptionKMSKey: {},
                s3OutputEncryptionKMSKey: {},
                enableManagedSpotTraining: {
                  type: 'boolean'
                },
                customModelTrainingParameters: {
                  type: 'structure',
                  required: ['sourceS3DirectoryPath'],
                  members: {
                    sourceS3DirectoryPath: {},
                    trainingEntryPointScript: {},
                    transformEntryPointScript: {}
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                id: {},
                arn: {},
                creationTimeInMillis: {
                  type: 'long'
                }
              }
            }
          },
          StartMLModelTransformJob: {
            http: {
              requestUri: '/ml/modeltransform',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['modelTransformOutputS3Location'],
              members: {
                id: {},
                dataProcessingJobId: {},
                mlModelTrainingJobId: {},
                trainingJobName: {},
                modelTransformOutputS3Location: {},
                sagemakerIamRoleArn: {},
                neptuneIamRoleArn: {},
                customModelTransformParameters: {
                  type: 'structure',
                  required: ['sourceS3DirectoryPath'],
                  members: {
                    sourceS3DirectoryPath: {},
                    transformEntryPointScript: {}
                  }
                },
                baseProcessingInstanceType: {},
                baseProcessingInstanceVolumeSizeInGB: {
                  type: 'integer'
                },
                subnets: {
                  shape: 'S3a'
                },
                securityGroupIds: {
                  shape: 'S3a'
                },
                volumeEncryptionKMSKey: {},
                s3OutputEncryptionKMSKey: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                id: {},
                arn: {},
                creationTimeInMillis: {
                  type: 'long'
                }
              }
            }
          }
        },
        shapes: {
          Sm: {
            type: 'structure',
            members: {
              active: {
                type: 'boolean'
              },
              statisticsId: {}
            }
          },
          S10: {
            type: 'structure',
            members: {},
            document: true
          },
          S18: {
            type: 'structure',
            required: ['version'],
            members: {
              version: {}
            }
          },
          S19: {
            type: 'map',
            key: {},
            value: {}
          },
          S1d: {
            type: 'structure',
            members: {
              waited: {
                type: 'integer'
              },
              elapsed: {
                type: 'integer'
              },
              cancelled: {
                type: 'boolean'
              },
              subqueries: {
                shape: 'S10'
              }
            }
          },
          S1j: {
            type: 'structure',
            members: {
              name: {},
              arn: {},
              status: {},
              outputLocation: {},
              failureReason: {},
              cloudwatchLogUrl: {}
            }
          },
          S1m: {
            type: 'structure',
            members: {
              name: {},
              arn: {}
            }
          },
          S1w: {
            type: 'structure',
            members: {
              autoCompute: {
                type: 'boolean'
              },
              active: {
                type: 'boolean'
              },
              statisticsId: {},
              date: {
                shape: 'S1x'
              },
              note: {},
              signatureInfo: {
                type: 'structure',
                members: {
                  signatureCount: {
                    type: 'integer'
                  },
                  instanceCount: {
                    type: 'integer'
                  },
                  predicateCount: {
                    type: 'integer'
                  }
                }
              }
            }
          },
          S1x: {
            type: 'timestamp',
            timestampFormat: 'iso8601'
          },
          S2e: {
            type: 'list',
            member: {
              type: 'map',
              key: {},
              value: {
                type: 'long'
              }
            }
          },
          S35: {
            type: 'structure',
            members: {
              queryId: {},
              queryString: {},
              queryEvalStats: {
                shape: 'S1d'
              }
            }
          },
          S3a: {
            type: 'list',
            member: {}
          },
          S3t: {
            type: 'structure',
            members: {
              statisticsId: {}
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=e094f3174dc7a13b70363d8f6659a5c83b584b40.js.map