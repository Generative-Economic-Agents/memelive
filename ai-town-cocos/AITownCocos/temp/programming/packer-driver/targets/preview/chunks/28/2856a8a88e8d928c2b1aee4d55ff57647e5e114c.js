System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2017-07-25',
          endpointPrefix: 'appsync',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          protocols: ['rest-json'],
          serviceAbbreviation: 'AWSAppSync',
          serviceFullName: 'AWS AppSync',
          serviceId: 'AppSync',
          signatureVersion: 'v4',
          signingName: 'appsync',
          uid: 'appsync-2017-07-25'
        },
        operations: {
          AssociateApi: {
            http: {
              requestUri: '/v1/domainnames/{domainName}/apiassociation'
            },
            input: {
              type: 'structure',
              required: ['domainName', 'apiId'],
              members: {
                domainName: {
                  location: 'uri',
                  locationName: 'domainName'
                },
                apiId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                apiAssociation: {
                  shape: 'S5'
                }
              }
            }
          },
          AssociateMergedGraphqlApi: {
            http: {
              requestUri: '/v1/sourceApis/{sourceApiIdentifier}/mergedApiAssociations'
            },
            input: {
              type: 'structure',
              required: ['sourceApiIdentifier', 'mergedApiIdentifier'],
              members: {
                sourceApiIdentifier: {
                  location: 'uri',
                  locationName: 'sourceApiIdentifier'
                },
                mergedApiIdentifier: {},
                description: {},
                sourceApiAssociationConfig: {
                  shape: 'S8'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                sourceApiAssociation: {
                  shape: 'Sb'
                }
              }
            }
          },
          AssociateSourceGraphqlApi: {
            http: {
              requestUri: '/v1/mergedApis/{mergedApiIdentifier}/sourceApiAssociations'
            },
            input: {
              type: 'structure',
              required: ['mergedApiIdentifier', 'sourceApiIdentifier'],
              members: {
                mergedApiIdentifier: {
                  location: 'uri',
                  locationName: 'mergedApiIdentifier'
                },
                sourceApiIdentifier: {},
                description: {},
                sourceApiAssociationConfig: {
                  shape: 'S8'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                sourceApiAssociation: {
                  shape: 'Sb'
                }
              }
            }
          },
          CreateApiCache: {
            http: {
              requestUri: '/v1/apis/{apiId}/ApiCaches'
            },
            input: {
              type: 'structure',
              required: ['apiId', 'ttl', 'apiCachingBehavior', 'type'],
              members: {
                apiId: {
                  location: 'uri',
                  locationName: 'apiId'
                },
                ttl: {
                  type: 'long'
                },
                transitEncryptionEnabled: {
                  type: 'boolean'
                },
                atRestEncryptionEnabled: {
                  type: 'boolean'
                },
                apiCachingBehavior: {},
                type: {},
                healthMetricsConfig: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                apiCache: {
                  shape: 'Sn'
                }
              }
            }
          },
          CreateApiKey: {
            http: {
              requestUri: '/v1/apis/{apiId}/apikeys'
            },
            input: {
              type: 'structure',
              required: ['apiId'],
              members: {
                apiId: {
                  location: 'uri',
                  locationName: 'apiId'
                },
                description: {},
                expires: {
                  type: 'long'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                apiKey: {
                  shape: 'Sr'
                }
              }
            }
          },
          CreateDataSource: {
            http: {
              requestUri: '/v1/apis/{apiId}/datasources'
            },
            input: {
              type: 'structure',
              required: ['apiId', 'name', 'type'],
              members: {
                apiId: {
                  location: 'uri',
                  locationName: 'apiId'
                },
                name: {},
                description: {},
                type: {},
                serviceRoleArn: {},
                dynamodbConfig: {
                  shape: 'Sv'
                },
                lambdaConfig: {
                  shape: 'Sx'
                },
                elasticsearchConfig: {
                  shape: 'Sy'
                },
                openSearchServiceConfig: {
                  shape: 'Sz'
                },
                httpConfig: {
                  shape: 'S10'
                },
                relationalDatabaseConfig: {
                  shape: 'S14'
                },
                eventBridgeConfig: {
                  shape: 'S17'
                },
                metricsConfig: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                dataSource: {
                  shape: 'S1a'
                }
              }
            }
          },
          CreateDomainName: {
            http: {
              requestUri: '/v1/domainnames'
            },
            input: {
              type: 'structure',
              required: ['domainName', 'certificateArn'],
              members: {
                domainName: {},
                certificateArn: {},
                description: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                domainNameConfig: {
                  shape: 'S1f'
                }
              }
            }
          },
          CreateFunction: {
            http: {
              requestUri: '/v1/apis/{apiId}/functions'
            },
            input: {
              type: 'structure',
              required: ['apiId', 'name', 'dataSourceName'],
              members: {
                apiId: {
                  location: 'uri',
                  locationName: 'apiId'
                },
                name: {},
                description: {},
                dataSourceName: {},
                requestMappingTemplate: {},
                responseMappingTemplate: {},
                functionVersion: {},
                syncConfig: {
                  shape: 'S1i'
                },
                maxBatchSize: {
                  type: 'integer'
                },
                runtime: {
                  shape: 'S1n'
                },
                code: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                functionConfiguration: {
                  shape: 'S1r'
                }
              }
            }
          },
          CreateGraphqlApi: {
            http: {
              requestUri: '/v1/apis'
            },
            input: {
              type: 'structure',
              required: ['name', 'authenticationType'],
              members: {
                name: {},
                logConfig: {
                  shape: 'S1t'
                },
                authenticationType: {},
                userPoolConfig: {
                  shape: 'S1w'
                },
                openIDConnectConfig: {
                  shape: 'S1y'
                },
                tags: {
                  shape: 'S1z'
                },
                additionalAuthenticationProviders: {
                  shape: 'S22'
                },
                xrayEnabled: {
                  type: 'boolean'
                },
                lambdaAuthorizerConfig: {
                  shape: 'S25'
                },
                visibility: {},
                apiType: {},
                mergedApiExecutionRoleArn: {},
                ownerContact: {},
                introspectionConfig: {},
                queryDepthLimit: {
                  type: 'integer'
                },
                resolverCountLimit: {
                  type: 'integer'
                },
                enhancedMetricsConfig: {
                  shape: 'S2c'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                graphqlApi: {
                  shape: 'S2h'
                }
              }
            }
          },
          CreateResolver: {
            http: {
              requestUri: '/v1/apis/{apiId}/types/{typeName}/resolvers'
            },
            input: {
              type: 'structure',
              required: ['apiId', 'typeName', 'fieldName'],
              members: {
                apiId: {
                  location: 'uri',
                  locationName: 'apiId'
                },
                typeName: {
                  location: 'uri',
                  locationName: 'typeName'
                },
                fieldName: {},
                dataSourceName: {},
                requestMappingTemplate: {},
                responseMappingTemplate: {},
                kind: {},
                pipelineConfig: {
                  shape: 'S2l'
                },
                syncConfig: {
                  shape: 'S1i'
                },
                cachingConfig: {
                  shape: 'S2n'
                },
                maxBatchSize: {
                  type: 'integer'
                },
                runtime: {
                  shape: 'S1n'
                },
                code: {},
                metricsConfig: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                resolver: {
                  shape: 'S2r'
                }
              }
            }
          },
          CreateType: {
            http: {
              requestUri: '/v1/apis/{apiId}/types'
            },
            input: {
              type: 'structure',
              required: ['apiId', 'definition', 'format'],
              members: {
                apiId: {
                  location: 'uri',
                  locationName: 'apiId'
                },
                definition: {},
                format: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                type: {
                  shape: 'S2v'
                }
              }
            }
          },
          DeleteApiCache: {
            http: {
              method: 'DELETE',
              requestUri: '/v1/apis/{apiId}/ApiCaches'
            },
            input: {
              type: 'structure',
              required: ['apiId'],
              members: {
                apiId: {
                  location: 'uri',
                  locationName: 'apiId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteApiKey: {
            http: {
              method: 'DELETE',
              requestUri: '/v1/apis/{apiId}/apikeys/{id}'
            },
            input: {
              type: 'structure',
              required: ['apiId', 'id'],
              members: {
                apiId: {
                  location: 'uri',
                  locationName: 'apiId'
                },
                id: {
                  location: 'uri',
                  locationName: 'id'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteDataSource: {
            http: {
              method: 'DELETE',
              requestUri: '/v1/apis/{apiId}/datasources/{name}'
            },
            input: {
              type: 'structure',
              required: ['apiId', 'name'],
              members: {
                apiId: {
                  location: 'uri',
                  locationName: 'apiId'
                },
                name: {
                  location: 'uri',
                  locationName: 'name'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteDomainName: {
            http: {
              method: 'DELETE',
              requestUri: '/v1/domainnames/{domainName}'
            },
            input: {
              type: 'structure',
              required: ['domainName'],
              members: {
                domainName: {
                  location: 'uri',
                  locationName: 'domainName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteFunction: {
            http: {
              method: 'DELETE',
              requestUri: '/v1/apis/{apiId}/functions/{functionId}'
            },
            input: {
              type: 'structure',
              required: ['apiId', 'functionId'],
              members: {
                apiId: {
                  location: 'uri',
                  locationName: 'apiId'
                },
                functionId: {
                  location: 'uri',
                  locationName: 'functionId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteGraphqlApi: {
            http: {
              method: 'DELETE',
              requestUri: '/v1/apis/{apiId}'
            },
            input: {
              type: 'structure',
              required: ['apiId'],
              members: {
                apiId: {
                  location: 'uri',
                  locationName: 'apiId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteResolver: {
            http: {
              method: 'DELETE',
              requestUri: '/v1/apis/{apiId}/types/{typeName}/resolvers/{fieldName}'
            },
            input: {
              type: 'structure',
              required: ['apiId', 'typeName', 'fieldName'],
              members: {
                apiId: {
                  location: 'uri',
                  locationName: 'apiId'
                },
                typeName: {
                  location: 'uri',
                  locationName: 'typeName'
                },
                fieldName: {
                  location: 'uri',
                  locationName: 'fieldName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteType: {
            http: {
              method: 'DELETE',
              requestUri: '/v1/apis/{apiId}/types/{typeName}'
            },
            input: {
              type: 'structure',
              required: ['apiId', 'typeName'],
              members: {
                apiId: {
                  location: 'uri',
                  locationName: 'apiId'
                },
                typeName: {
                  location: 'uri',
                  locationName: 'typeName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DisassociateApi: {
            http: {
              method: 'DELETE',
              requestUri: '/v1/domainnames/{domainName}/apiassociation'
            },
            input: {
              type: 'structure',
              required: ['domainName'],
              members: {
                domainName: {
                  location: 'uri',
                  locationName: 'domainName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DisassociateMergedGraphqlApi: {
            http: {
              method: 'DELETE',
              requestUri: '/v1/sourceApis/{sourceApiIdentifier}/mergedApiAssociations/{associationId}'
            },
            input: {
              type: 'structure',
              required: ['sourceApiIdentifier', 'associationId'],
              members: {
                sourceApiIdentifier: {
                  location: 'uri',
                  locationName: 'sourceApiIdentifier'
                },
                associationId: {
                  location: 'uri',
                  locationName: 'associationId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                sourceApiAssociationStatus: {}
              }
            }
          },
          DisassociateSourceGraphqlApi: {
            http: {
              method: 'DELETE',
              requestUri: '/v1/mergedApis/{mergedApiIdentifier}/sourceApiAssociations/{associationId}'
            },
            input: {
              type: 'structure',
              required: ['mergedApiIdentifier', 'associationId'],
              members: {
                mergedApiIdentifier: {
                  location: 'uri',
                  locationName: 'mergedApiIdentifier'
                },
                associationId: {
                  location: 'uri',
                  locationName: 'associationId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                sourceApiAssociationStatus: {}
              }
            }
          },
          EvaluateCode: {
            http: {
              requestUri: '/v1/dataplane-evaluatecode'
            },
            input: {
              type: 'structure',
              required: ['runtime', 'code', 'context'],
              members: {
                runtime: {
                  shape: 'S1n'
                },
                code: {},
                context: {},
                'function': {}
              }
            },
            output: {
              type: 'structure',
              members: {
                evaluationResult: {},
                error: {
                  type: 'structure',
                  members: {
                    message: {},
                    codeErrors: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          errorType: {},
                          value: {},
                          location: {
                            type: 'structure',
                            members: {
                              line: {
                                type: 'integer'
                              },
                              column: {
                                type: 'integer'
                              },
                              span: {
                                type: 'integer'
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                logs: {
                  shape: 'S3u'
                }
              }
            }
          },
          EvaluateMappingTemplate: {
            http: {
              requestUri: '/v1/dataplane-evaluatetemplate'
            },
            input: {
              type: 'structure',
              required: ['template', 'context'],
              members: {
                template: {},
                context: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                evaluationResult: {},
                error: {
                  type: 'structure',
                  members: {
                    message: {}
                  }
                },
                logs: {
                  shape: 'S3u'
                }
              }
            }
          },
          FlushApiCache: {
            http: {
              method: 'DELETE',
              requestUri: '/v1/apis/{apiId}/FlushCache'
            },
            input: {
              type: 'structure',
              required: ['apiId'],
              members: {
                apiId: {
                  location: 'uri',
                  locationName: 'apiId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          GetApiAssociation: {
            http: {
              method: 'GET',
              requestUri: '/v1/domainnames/{domainName}/apiassociation'
            },
            input: {
              type: 'structure',
              required: ['domainName'],
              members: {
                domainName: {
                  location: 'uri',
                  locationName: 'domainName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                apiAssociation: {
                  shape: 'S5'
                }
              }
            }
          },
          GetApiCache: {
            http: {
              method: 'GET',
              requestUri: '/v1/apis/{apiId}/ApiCaches'
            },
            input: {
              type: 'structure',
              required: ['apiId'],
              members: {
                apiId: {
                  location: 'uri',
                  locationName: 'apiId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                apiCache: {
                  shape: 'Sn'
                }
              }
            }
          },
          GetDataSource: {
            http: {
              method: 'GET',
              requestUri: '/v1/apis/{apiId}/datasources/{name}'
            },
            input: {
              type: 'structure',
              required: ['apiId', 'name'],
              members: {
                apiId: {
                  location: 'uri',
                  locationName: 'apiId'
                },
                name: {
                  location: 'uri',
                  locationName: 'name'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                dataSource: {
                  shape: 'S1a'
                }
              }
            }
          },
          GetDataSourceIntrospection: {
            http: {
              method: 'GET',
              requestUri: '/v1/datasources/introspections/{introspectionId}'
            },
            input: {
              type: 'structure',
              required: ['introspectionId'],
              members: {
                introspectionId: {
                  location: 'uri',
                  locationName: 'introspectionId'
                },
                includeModelsSDL: {
                  location: 'querystring',
                  locationName: 'includeModelsSDL',
                  type: 'boolean'
                },
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                maxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                introspectionId: {},
                introspectionStatus: {},
                introspectionStatusDetail: {},
                introspectionResult: {
                  type: 'structure',
                  members: {
                    models: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          name: {},
                          fields: {
                            type: 'list',
                            member: {
                              type: 'structure',
                              members: {
                                name: {},
                                type: {
                                  shape: 'S4h'
                                },
                                length: {
                                  type: 'long'
                                }
                              }
                            }
                          },
                          primaryKey: {
                            shape: 'S4j'
                          },
                          indexes: {
                            type: 'list',
                            member: {
                              shape: 'S4j'
                            }
                          },
                          sdl: {}
                        }
                      }
                    },
                    nextToken: {}
                  }
                }
              }
            }
          },
          GetDomainName: {
            http: {
              method: 'GET',
              requestUri: '/v1/domainnames/{domainName}'
            },
            input: {
              type: 'structure',
              required: ['domainName'],
              members: {
                domainName: {
                  location: 'uri',
                  locationName: 'domainName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                domainNameConfig: {
                  shape: 'S1f'
                }
              }
            }
          },
          GetFunction: {
            http: {
              method: 'GET',
              requestUri: '/v1/apis/{apiId}/functions/{functionId}'
            },
            input: {
              type: 'structure',
              required: ['apiId', 'functionId'],
              members: {
                apiId: {
                  location: 'uri',
                  locationName: 'apiId'
                },
                functionId: {
                  location: 'uri',
                  locationName: 'functionId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                functionConfiguration: {
                  shape: 'S1r'
                }
              }
            }
          },
          GetGraphqlApi: {
            http: {
              method: 'GET',
              requestUri: '/v1/apis/{apiId}'
            },
            input: {
              type: 'structure',
              required: ['apiId'],
              members: {
                apiId: {
                  location: 'uri',
                  locationName: 'apiId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                graphqlApi: {
                  shape: 'S2h'
                }
              }
            }
          },
          GetGraphqlApiEnvironmentVariables: {
            http: {
              method: 'GET',
              requestUri: '/v1/apis/{apiId}/environmentVariables'
            },
            input: {
              type: 'structure',
              required: ['apiId'],
              members: {
                apiId: {
                  location: 'uri',
                  locationName: 'apiId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                environmentVariables: {
                  shape: 'S4u'
                }
              }
            }
          },
          GetIntrospectionSchema: {
            http: {
              method: 'GET',
              requestUri: '/v1/apis/{apiId}/schema'
            },
            input: {
              type: 'structure',
              required: ['apiId', 'format'],
              members: {
                apiId: {
                  location: 'uri',
                  locationName: 'apiId'
                },
                format: {
                  location: 'querystring',
                  locationName: 'format'
                },
                includeDirectives: {
                  location: 'querystring',
                  locationName: 'includeDirectives',
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                schema: {
                  type: 'blob'
                }
              },
              payload: 'schema'
            }
          },
          GetResolver: {
            http: {
              method: 'GET',
              requestUri: '/v1/apis/{apiId}/types/{typeName}/resolvers/{fieldName}'
            },
            input: {
              type: 'structure',
              required: ['apiId', 'typeName', 'fieldName'],
              members: {
                apiId: {
                  location: 'uri',
                  locationName: 'apiId'
                },
                typeName: {
                  location: 'uri',
                  locationName: 'typeName'
                },
                fieldName: {
                  location: 'uri',
                  locationName: 'fieldName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                resolver: {
                  shape: 'S2r'
                }
              }
            }
          },
          GetSchemaCreationStatus: {
            http: {
              method: 'GET',
              requestUri: '/v1/apis/{apiId}/schemacreation'
            },
            input: {
              type: 'structure',
              required: ['apiId'],
              members: {
                apiId: {
                  location: 'uri',
                  locationName: 'apiId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                status: {},
                details: {}
              }
            }
          },
          GetSourceApiAssociation: {
            http: {
              method: 'GET',
              requestUri: '/v1/mergedApis/{mergedApiIdentifier}/sourceApiAssociations/{associationId}'
            },
            input: {
              type: 'structure',
              required: ['mergedApiIdentifier', 'associationId'],
              members: {
                mergedApiIdentifier: {
                  location: 'uri',
                  locationName: 'mergedApiIdentifier'
                },
                associationId: {
                  location: 'uri',
                  locationName: 'associationId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                sourceApiAssociation: {
                  shape: 'Sb'
                }
              }
            }
          },
          GetType: {
            http: {
              method: 'GET',
              requestUri: '/v1/apis/{apiId}/types/{typeName}'
            },
            input: {
              type: 'structure',
              required: ['apiId', 'typeName', 'format'],
              members: {
                apiId: {
                  location: 'uri',
                  locationName: 'apiId'
                },
                typeName: {
                  location: 'uri',
                  locationName: 'typeName'
                },
                format: {
                  location: 'querystring',
                  locationName: 'format'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                type: {
                  shape: 'S2v'
                }
              }
            }
          },
          ListApiKeys: {
            http: {
              method: 'GET',
              requestUri: '/v1/apis/{apiId}/apikeys'
            },
            input: {
              type: 'structure',
              required: ['apiId'],
              members: {
                apiId: {
                  location: 'uri',
                  locationName: 'apiId'
                },
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                maxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                apiKeys: {
                  type: 'list',
                  member: {
                    shape: 'Sr'
                  }
                },
                nextToken: {}
              }
            }
          },
          ListDataSources: {
            http: {
              method: 'GET',
              requestUri: '/v1/apis/{apiId}/datasources'
            },
            input: {
              type: 'structure',
              required: ['apiId'],
              members: {
                apiId: {
                  location: 'uri',
                  locationName: 'apiId'
                },
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                maxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                dataSources: {
                  type: 'list',
                  member: {
                    shape: 'S1a'
                  }
                },
                nextToken: {}
              }
            }
          },
          ListDomainNames: {
            http: {
              method: 'GET',
              requestUri: '/v1/domainnames'
            },
            input: {
              type: 'structure',
              members: {
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                maxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                domainNameConfigs: {
                  type: 'list',
                  member: {
                    shape: 'S1f'
                  }
                },
                nextToken: {}
              }
            }
          },
          ListFunctions: {
            http: {
              method: 'GET',
              requestUri: '/v1/apis/{apiId}/functions'
            },
            input: {
              type: 'structure',
              required: ['apiId'],
              members: {
                apiId: {
                  location: 'uri',
                  locationName: 'apiId'
                },
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                maxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                functions: {
                  type: 'list',
                  member: {
                    shape: 'S1r'
                  }
                },
                nextToken: {}
              }
            }
          },
          ListGraphqlApis: {
            http: {
              method: 'GET',
              requestUri: '/v1/apis'
            },
            input: {
              type: 'structure',
              members: {
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                maxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                apiType: {
                  location: 'querystring',
                  locationName: 'apiType'
                },
                owner: {
                  location: 'querystring',
                  locationName: 'owner'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                graphqlApis: {
                  type: 'list',
                  member: {
                    shape: 'S2h'
                  }
                },
                nextToken: {}
              }
            }
          },
          ListResolvers: {
            http: {
              method: 'GET',
              requestUri: '/v1/apis/{apiId}/types/{typeName}/resolvers'
            },
            input: {
              type: 'structure',
              required: ['apiId', 'typeName'],
              members: {
                apiId: {
                  location: 'uri',
                  locationName: 'apiId'
                },
                typeName: {
                  location: 'uri',
                  locationName: 'typeName'
                },
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                maxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                resolvers: {
                  shape: 'S5t'
                },
                nextToken: {}
              }
            }
          },
          ListResolversByFunction: {
            http: {
              method: 'GET',
              requestUri: '/v1/apis/{apiId}/functions/{functionId}/resolvers'
            },
            input: {
              type: 'structure',
              required: ['apiId', 'functionId'],
              members: {
                apiId: {
                  location: 'uri',
                  locationName: 'apiId'
                },
                functionId: {
                  location: 'uri',
                  locationName: 'functionId'
                },
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                maxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                resolvers: {
                  shape: 'S5t'
                },
                nextToken: {}
              }
            }
          },
          ListSourceApiAssociations: {
            http: {
              method: 'GET',
              requestUri: '/v1/apis/{apiId}/sourceApiAssociations'
            },
            input: {
              type: 'structure',
              required: ['apiId'],
              members: {
                apiId: {
                  location: 'uri',
                  locationName: 'apiId'
                },
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                maxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                sourceApiAssociationSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      associationId: {},
                      associationArn: {},
                      sourceApiId: {},
                      sourceApiArn: {},
                      mergedApiId: {},
                      mergedApiArn: {},
                      description: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListTagsForResource: {
            http: {
              method: 'GET',
              requestUri: '/v1/tags/{resourceArn}'
            },
            input: {
              type: 'structure',
              required: ['resourceArn'],
              members: {
                resourceArn: {
                  location: 'uri',
                  locationName: 'resourceArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                tags: {
                  shape: 'S1z'
                }
              }
            }
          },
          ListTypes: {
            http: {
              method: 'GET',
              requestUri: '/v1/apis/{apiId}/types'
            },
            input: {
              type: 'structure',
              required: ['apiId', 'format'],
              members: {
                apiId: {
                  location: 'uri',
                  locationName: 'apiId'
                },
                format: {
                  location: 'querystring',
                  locationName: 'format'
                },
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                maxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                types: {
                  shape: 'S65'
                },
                nextToken: {}
              }
            }
          },
          ListTypesByAssociation: {
            http: {
              method: 'GET',
              requestUri: '/v1/mergedApis/{mergedApiIdentifier}/sourceApiAssociations/{associationId}/types'
            },
            input: {
              type: 'structure',
              required: ['mergedApiIdentifier', 'associationId', 'format'],
              members: {
                mergedApiIdentifier: {
                  location: 'uri',
                  locationName: 'mergedApiIdentifier'
                },
                associationId: {
                  location: 'uri',
                  locationName: 'associationId'
                },
                format: {
                  location: 'querystring',
                  locationName: 'format'
                },
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                maxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                types: {
                  shape: 'S65'
                },
                nextToken: {}
              }
            }
          },
          PutGraphqlApiEnvironmentVariables: {
            http: {
              method: 'PUT',
              requestUri: '/v1/apis/{apiId}/environmentVariables'
            },
            input: {
              type: 'structure',
              required: ['apiId', 'environmentVariables'],
              members: {
                apiId: {
                  location: 'uri',
                  locationName: 'apiId'
                },
                environmentVariables: {
                  shape: 'S4u'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                environmentVariables: {
                  shape: 'S4u'
                }
              }
            }
          },
          StartDataSourceIntrospection: {
            http: {
              requestUri: '/v1/datasources/introspections'
            },
            input: {
              type: 'structure',
              members: {
                rdsDataApiConfig: {
                  type: 'structure',
                  required: ['resourceArn', 'secretArn', 'databaseName'],
                  members: {
                    resourceArn: {},
                    secretArn: {},
                    databaseName: {}
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                introspectionId: {},
                introspectionStatus: {},
                introspectionStatusDetail: {}
              }
            }
          },
          StartSchemaCreation: {
            http: {
              requestUri: '/v1/apis/{apiId}/schemacreation'
            },
            input: {
              type: 'structure',
              required: ['apiId', 'definition'],
              members: {
                apiId: {
                  location: 'uri',
                  locationName: 'apiId'
                },
                definition: {
                  type: 'blob'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                status: {}
              }
            }
          },
          StartSchemaMerge: {
            http: {
              requestUri: '/v1/mergedApis/{mergedApiIdentifier}/sourceApiAssociations/{associationId}/merge'
            },
            input: {
              type: 'structure',
              required: ['associationId', 'mergedApiIdentifier'],
              members: {
                associationId: {
                  location: 'uri',
                  locationName: 'associationId'
                },
                mergedApiIdentifier: {
                  location: 'uri',
                  locationName: 'mergedApiIdentifier'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                sourceApiAssociationStatus: {}
              }
            }
          },
          TagResource: {
            http: {
              requestUri: '/v1/tags/{resourceArn}'
            },
            input: {
              type: 'structure',
              required: ['resourceArn', 'tags'],
              members: {
                resourceArn: {
                  location: 'uri',
                  locationName: 'resourceArn'
                },
                tags: {
                  shape: 'S1z'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UntagResource: {
            http: {
              method: 'DELETE',
              requestUri: '/v1/tags/{resourceArn}'
            },
            input: {
              type: 'structure',
              required: ['resourceArn', 'tagKeys'],
              members: {
                resourceArn: {
                  location: 'uri',
                  locationName: 'resourceArn'
                },
                tagKeys: {
                  location: 'querystring',
                  locationName: 'tagKeys',
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
          UpdateApiCache: {
            http: {
              requestUri: '/v1/apis/{apiId}/ApiCaches/update'
            },
            input: {
              type: 'structure',
              required: ['apiId', 'ttl', 'apiCachingBehavior', 'type'],
              members: {
                apiId: {
                  location: 'uri',
                  locationName: 'apiId'
                },
                ttl: {
                  type: 'long'
                },
                apiCachingBehavior: {},
                type: {},
                healthMetricsConfig: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                apiCache: {
                  shape: 'Sn'
                }
              }
            }
          },
          UpdateApiKey: {
            http: {
              requestUri: '/v1/apis/{apiId}/apikeys/{id}'
            },
            input: {
              type: 'structure',
              required: ['apiId', 'id'],
              members: {
                apiId: {
                  location: 'uri',
                  locationName: 'apiId'
                },
                id: {
                  location: 'uri',
                  locationName: 'id'
                },
                description: {},
                expires: {
                  type: 'long'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                apiKey: {
                  shape: 'Sr'
                }
              }
            }
          },
          UpdateDataSource: {
            http: {
              requestUri: '/v1/apis/{apiId}/datasources/{name}'
            },
            input: {
              type: 'structure',
              required: ['apiId', 'name', 'type'],
              members: {
                apiId: {
                  location: 'uri',
                  locationName: 'apiId'
                },
                name: {
                  location: 'uri',
                  locationName: 'name'
                },
                description: {},
                type: {},
                serviceRoleArn: {},
                dynamodbConfig: {
                  shape: 'Sv'
                },
                lambdaConfig: {
                  shape: 'Sx'
                },
                elasticsearchConfig: {
                  shape: 'Sy'
                },
                openSearchServiceConfig: {
                  shape: 'Sz'
                },
                httpConfig: {
                  shape: 'S10'
                },
                relationalDatabaseConfig: {
                  shape: 'S14'
                },
                eventBridgeConfig: {
                  shape: 'S17'
                },
                metricsConfig: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                dataSource: {
                  shape: 'S1a'
                }
              }
            }
          },
          UpdateDomainName: {
            http: {
              requestUri: '/v1/domainnames/{domainName}'
            },
            input: {
              type: 'structure',
              required: ['domainName'],
              members: {
                domainName: {
                  location: 'uri',
                  locationName: 'domainName'
                },
                description: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                domainNameConfig: {
                  shape: 'S1f'
                }
              }
            }
          },
          UpdateFunction: {
            http: {
              requestUri: '/v1/apis/{apiId}/functions/{functionId}'
            },
            input: {
              type: 'structure',
              required: ['apiId', 'name', 'functionId', 'dataSourceName'],
              members: {
                apiId: {
                  location: 'uri',
                  locationName: 'apiId'
                },
                name: {},
                description: {},
                functionId: {
                  location: 'uri',
                  locationName: 'functionId'
                },
                dataSourceName: {},
                requestMappingTemplate: {},
                responseMappingTemplate: {},
                functionVersion: {},
                syncConfig: {
                  shape: 'S1i'
                },
                maxBatchSize: {
                  type: 'integer'
                },
                runtime: {
                  shape: 'S1n'
                },
                code: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                functionConfiguration: {
                  shape: 'S1r'
                }
              }
            }
          },
          UpdateGraphqlApi: {
            http: {
              requestUri: '/v1/apis/{apiId}'
            },
            input: {
              type: 'structure',
              required: ['apiId', 'name', 'authenticationType'],
              members: {
                apiId: {
                  location: 'uri',
                  locationName: 'apiId'
                },
                name: {},
                logConfig: {
                  shape: 'S1t'
                },
                authenticationType: {},
                userPoolConfig: {
                  shape: 'S1w'
                },
                openIDConnectConfig: {
                  shape: 'S1y'
                },
                additionalAuthenticationProviders: {
                  shape: 'S22'
                },
                xrayEnabled: {
                  type: 'boolean'
                },
                lambdaAuthorizerConfig: {
                  shape: 'S25'
                },
                mergedApiExecutionRoleArn: {},
                ownerContact: {},
                introspectionConfig: {},
                queryDepthLimit: {
                  type: 'integer'
                },
                resolverCountLimit: {
                  type: 'integer'
                },
                enhancedMetricsConfig: {
                  shape: 'S2c'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                graphqlApi: {
                  shape: 'S2h'
                }
              }
            }
          },
          UpdateResolver: {
            http: {
              requestUri: '/v1/apis/{apiId}/types/{typeName}/resolvers/{fieldName}'
            },
            input: {
              type: 'structure',
              required: ['apiId', 'typeName', 'fieldName'],
              members: {
                apiId: {
                  location: 'uri',
                  locationName: 'apiId'
                },
                typeName: {
                  location: 'uri',
                  locationName: 'typeName'
                },
                fieldName: {
                  location: 'uri',
                  locationName: 'fieldName'
                },
                dataSourceName: {},
                requestMappingTemplate: {},
                responseMappingTemplate: {},
                kind: {},
                pipelineConfig: {
                  shape: 'S2l'
                },
                syncConfig: {
                  shape: 'S1i'
                },
                cachingConfig: {
                  shape: 'S2n'
                },
                maxBatchSize: {
                  type: 'integer'
                },
                runtime: {
                  shape: 'S1n'
                },
                code: {},
                metricsConfig: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                resolver: {
                  shape: 'S2r'
                }
              }
            }
          },
          UpdateSourceApiAssociation: {
            http: {
              requestUri: '/v1/mergedApis/{mergedApiIdentifier}/sourceApiAssociations/{associationId}'
            },
            input: {
              type: 'structure',
              required: ['associationId', 'mergedApiIdentifier'],
              members: {
                associationId: {
                  location: 'uri',
                  locationName: 'associationId'
                },
                mergedApiIdentifier: {
                  location: 'uri',
                  locationName: 'mergedApiIdentifier'
                },
                description: {},
                sourceApiAssociationConfig: {
                  shape: 'S8'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                sourceApiAssociation: {
                  shape: 'Sb'
                }
              }
            }
          },
          UpdateType: {
            http: {
              requestUri: '/v1/apis/{apiId}/types/{typeName}'
            },
            input: {
              type: 'structure',
              required: ['apiId', 'typeName', 'format'],
              members: {
                apiId: {
                  location: 'uri',
                  locationName: 'apiId'
                },
                typeName: {
                  location: 'uri',
                  locationName: 'typeName'
                },
                definition: {},
                format: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                type: {
                  shape: 'S2v'
                }
              }
            }
          }
        },
        shapes: {
          S5: {
            type: 'structure',
            members: {
              domainName: {},
              apiId: {},
              associationStatus: {},
              deploymentDetail: {}
            }
          },
          S8: {
            type: 'structure',
            members: {
              mergeType: {}
            }
          },
          Sb: {
            type: 'structure',
            members: {
              associationId: {},
              associationArn: {},
              sourceApiId: {},
              sourceApiArn: {},
              mergedApiArn: {},
              mergedApiId: {},
              description: {},
              sourceApiAssociationConfig: {
                shape: 'S8'
              },
              sourceApiAssociationStatus: {},
              sourceApiAssociationStatusDetail: {},
              lastSuccessfulMergeDate: {
                type: 'timestamp'
              }
            }
          },
          Sn: {
            type: 'structure',
            members: {
              ttl: {
                type: 'long'
              },
              apiCachingBehavior: {},
              transitEncryptionEnabled: {
                type: 'boolean'
              },
              atRestEncryptionEnabled: {
                type: 'boolean'
              },
              type: {},
              status: {},
              healthMetricsConfig: {}
            }
          },
          Sr: {
            type: 'structure',
            members: {
              id: {},
              description: {},
              expires: {
                type: 'long'
              },
              deletes: {
                type: 'long'
              }
            }
          },
          Sv: {
            type: 'structure',
            required: ['tableName', 'awsRegion'],
            members: {
              tableName: {},
              awsRegion: {},
              useCallerCredentials: {
                type: 'boolean'
              },
              deltaSyncConfig: {
                type: 'structure',
                members: {
                  baseTableTTL: {
                    type: 'long'
                  },
                  deltaSyncTableName: {},
                  deltaSyncTableTTL: {
                    type: 'long'
                  }
                }
              },
              versioned: {
                type: 'boolean'
              }
            }
          },
          Sx: {
            type: 'structure',
            required: ['lambdaFunctionArn'],
            members: {
              lambdaFunctionArn: {}
            }
          },
          Sy: {
            type: 'structure',
            required: ['endpoint', 'awsRegion'],
            members: {
              endpoint: {},
              awsRegion: {}
            }
          },
          Sz: {
            type: 'structure',
            required: ['endpoint', 'awsRegion'],
            members: {
              endpoint: {},
              awsRegion: {}
            }
          },
          S10: {
            type: 'structure',
            members: {
              endpoint: {},
              authorizationConfig: {
                type: 'structure',
                required: ['authorizationType'],
                members: {
                  authorizationType: {},
                  awsIamConfig: {
                    type: 'structure',
                    members: {
                      signingRegion: {},
                      signingServiceName: {}
                    }
                  }
                }
              }
            }
          },
          S14: {
            type: 'structure',
            members: {
              relationalDatabaseSourceType: {},
              rdsHttpEndpointConfig: {
                type: 'structure',
                members: {
                  awsRegion: {},
                  dbClusterIdentifier: {},
                  databaseName: {},
                  schema: {},
                  awsSecretStoreArn: {}
                }
              }
            }
          },
          S17: {
            type: 'structure',
            required: ['eventBusArn'],
            members: {
              eventBusArn: {}
            }
          },
          S1a: {
            type: 'structure',
            members: {
              dataSourceArn: {},
              name: {},
              description: {},
              type: {},
              serviceRoleArn: {},
              dynamodbConfig: {
                shape: 'Sv'
              },
              lambdaConfig: {
                shape: 'Sx'
              },
              elasticsearchConfig: {
                shape: 'Sy'
              },
              openSearchServiceConfig: {
                shape: 'Sz'
              },
              httpConfig: {
                shape: 'S10'
              },
              relationalDatabaseConfig: {
                shape: 'S14'
              },
              eventBridgeConfig: {
                shape: 'S17'
              },
              metricsConfig: {}
            }
          },
          S1f: {
            type: 'structure',
            members: {
              domainName: {},
              description: {},
              certificateArn: {},
              appsyncDomainName: {},
              hostedZoneId: {}
            }
          },
          S1i: {
            type: 'structure',
            members: {
              conflictHandler: {},
              conflictDetection: {},
              lambdaConflictHandlerConfig: {
                type: 'structure',
                members: {
                  lambdaConflictHandlerArn: {}
                }
              }
            }
          },
          S1n: {
            type: 'structure',
            required: ['name', 'runtimeVersion'],
            members: {
              name: {},
              runtimeVersion: {}
            }
          },
          S1r: {
            type: 'structure',
            members: {
              functionId: {},
              functionArn: {},
              name: {},
              description: {},
              dataSourceName: {},
              requestMappingTemplate: {},
              responseMappingTemplate: {},
              functionVersion: {},
              syncConfig: {
                shape: 'S1i'
              },
              maxBatchSize: {
                type: 'integer'
              },
              runtime: {
                shape: 'S1n'
              },
              code: {}
            }
          },
          S1t: {
            type: 'structure',
            required: ['fieldLogLevel', 'cloudWatchLogsRoleArn'],
            members: {
              fieldLogLevel: {},
              cloudWatchLogsRoleArn: {},
              excludeVerboseContent: {
                type: 'boolean'
              }
            }
          },
          S1w: {
            type: 'structure',
            required: ['userPoolId', 'awsRegion', 'defaultAction'],
            members: {
              userPoolId: {},
              awsRegion: {},
              defaultAction: {},
              appIdClientRegex: {}
            }
          },
          S1y: {
            type: 'structure',
            required: ['issuer'],
            members: {
              issuer: {},
              clientId: {},
              iatTTL: {
                type: 'long'
              },
              authTTL: {
                type: 'long'
              }
            }
          },
          S1z: {
            type: 'map',
            key: {},
            value: {}
          },
          S22: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                authenticationType: {},
                openIDConnectConfig: {
                  shape: 'S1y'
                },
                userPoolConfig: {
                  type: 'structure',
                  required: ['userPoolId', 'awsRegion'],
                  members: {
                    userPoolId: {},
                    awsRegion: {},
                    appIdClientRegex: {}
                  }
                },
                lambdaAuthorizerConfig: {
                  shape: 'S25'
                }
              }
            }
          },
          S25: {
            type: 'structure',
            required: ['authorizerUri'],
            members: {
              authorizerResultTtlInSeconds: {
                type: 'integer'
              },
              authorizerUri: {},
              identityValidationExpression: {}
            }
          },
          S2c: {
            type: 'structure',
            required: ['resolverLevelMetricsBehavior', 'dataSourceLevelMetricsBehavior', 'operationLevelMetricsConfig'],
            members: {
              resolverLevelMetricsBehavior: {},
              dataSourceLevelMetricsBehavior: {},
              operationLevelMetricsConfig: {}
            }
          },
          S2h: {
            type: 'structure',
            members: {
              name: {},
              apiId: {},
              authenticationType: {},
              logConfig: {
                shape: 'S1t'
              },
              userPoolConfig: {
                shape: 'S1w'
              },
              openIDConnectConfig: {
                shape: 'S1y'
              },
              arn: {},
              uris: {
                shape: 'S2i'
              },
              tags: {
                shape: 'S1z'
              },
              additionalAuthenticationProviders: {
                shape: 'S22'
              },
              xrayEnabled: {
                type: 'boolean'
              },
              wafWebAclArn: {},
              lambdaAuthorizerConfig: {
                shape: 'S25'
              },
              dns: {
                shape: 'S2i'
              },
              visibility: {},
              apiType: {},
              mergedApiExecutionRoleArn: {},
              owner: {},
              ownerContact: {},
              introspectionConfig: {},
              queryDepthLimit: {
                type: 'integer'
              },
              resolverCountLimit: {
                type: 'integer'
              },
              enhancedMetricsConfig: {
                shape: 'S2c'
              }
            }
          },
          S2i: {
            type: 'map',
            key: {},
            value: {}
          },
          S2l: {
            type: 'structure',
            members: {
              functions: {
                type: 'list',
                member: {}
              }
            }
          },
          S2n: {
            type: 'structure',
            required: ['ttl'],
            members: {
              ttl: {
                type: 'long'
              },
              cachingKeys: {
                type: 'list',
                member: {}
              }
            }
          },
          S2r: {
            type: 'structure',
            members: {
              typeName: {},
              fieldName: {},
              dataSourceName: {},
              resolverArn: {},
              requestMappingTemplate: {},
              responseMappingTemplate: {},
              kind: {},
              pipelineConfig: {
                shape: 'S2l'
              },
              syncConfig: {
                shape: 'S1i'
              },
              cachingConfig: {
                shape: 'S2n'
              },
              maxBatchSize: {
                type: 'integer'
              },
              runtime: {
                shape: 'S1n'
              },
              code: {},
              metricsConfig: {}
            }
          },
          S2v: {
            type: 'structure',
            members: {
              name: {},
              description: {},
              arn: {},
              definition: {},
              format: {}
            }
          },
          S3u: {
            type: 'list',
            member: {}
          },
          S4h: {
            type: 'structure',
            members: {
              kind: {},
              name: {},
              type: {
                shape: 'S4h'
              },
              values: {
                type: 'list',
                member: {}
              }
            }
          },
          S4j: {
            type: 'structure',
            members: {
              name: {},
              fields: {
                type: 'list',
                member: {}
              }
            }
          },
          S4u: {
            type: 'map',
            key: {},
            value: {}
          },
          S5t: {
            type: 'list',
            member: {
              shape: 'S2r'
            }
          },
          S65: {
            type: 'list',
            member: {
              shape: 'S2v'
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=2856a8a88e8d928c2b1aee4d55ff57647e5e114c.js.map