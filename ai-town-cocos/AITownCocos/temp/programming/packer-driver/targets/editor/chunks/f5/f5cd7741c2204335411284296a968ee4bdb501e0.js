System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2015-07-09',
          endpointPrefix: 'apigateway',
          protocol: 'rest-json',
          serviceFullName: 'Amazon API Gateway',
          serviceId: 'API Gateway',
          signatureVersion: 'v4',
          uid: 'apigateway-2015-07-09'
        },
        operations: {
          CreateApiKey: {
            http: {
              requestUri: '/apikeys',
              responseCode: 201
            },
            input: {
              type: 'structure',
              members: {
                name: {},
                description: {},
                enabled: {
                  type: 'boolean'
                },
                generateDistinctId: {
                  type: 'boolean'
                },
                value: {},
                stageKeys: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      restApiId: {},
                      stageName: {}
                    }
                  }
                },
                customerId: {},
                tags: {
                  shape: 'S6'
                }
              }
            },
            output: {
              shape: 'S7'
            }
          },
          CreateAuthorizer: {
            http: {
              requestUri: '/restapis/{restapi_id}/authorizers',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['restApiId', 'name', 'type'],
              members: {
                restApiId: {
                  location: 'uri',
                  locationName: 'restapi_id'
                },
                name: {},
                type: {},
                providerARNs: {
                  shape: 'Sc'
                },
                authType: {},
                authorizerUri: {},
                authorizerCredentials: {},
                identitySource: {},
                identityValidationExpression: {},
                authorizerResultTtlInSeconds: {
                  type: 'integer'
                }
              }
            },
            output: {
              shape: 'Sf'
            }
          },
          CreateBasePathMapping: {
            http: {
              requestUri: '/domainnames/{domain_name}/basepathmappings',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['domainName', 'restApiId'],
              members: {
                domainName: {
                  location: 'uri',
                  locationName: 'domain_name'
                },
                basePath: {},
                restApiId: {},
                stage: {}
              }
            },
            output: {
              shape: 'Sh'
            }
          },
          CreateDeployment: {
            http: {
              requestUri: '/restapis/{restapi_id}/deployments',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['restApiId'],
              members: {
                restApiId: {
                  location: 'uri',
                  locationName: 'restapi_id'
                },
                stageName: {},
                stageDescription: {},
                description: {},
                cacheClusterEnabled: {
                  type: 'boolean'
                },
                cacheClusterSize: {},
                variables: {
                  shape: 'S6'
                },
                canarySettings: {
                  type: 'structure',
                  members: {
                    percentTraffic: {
                      type: 'double'
                    },
                    stageVariableOverrides: {
                      shape: 'S6'
                    },
                    useStageCache: {
                      type: 'boolean'
                    }
                  }
                },
                tracingEnabled: {
                  type: 'boolean'
                }
              }
            },
            output: {
              shape: 'Sn'
            }
          },
          CreateDocumentationPart: {
            http: {
              requestUri: '/restapis/{restapi_id}/documentation/parts',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['restApiId', 'location', 'properties'],
              members: {
                restApiId: {
                  location: 'uri',
                  locationName: 'restapi_id'
                },
                location: {
                  shape: 'Ss'
                },
                properties: {}
              }
            },
            output: {
              shape: 'Sv'
            }
          },
          CreateDocumentationVersion: {
            http: {
              requestUri: '/restapis/{restapi_id}/documentation/versions',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['restApiId', 'documentationVersion'],
              members: {
                restApiId: {
                  location: 'uri',
                  locationName: 'restapi_id'
                },
                documentationVersion: {},
                stageName: {},
                description: {}
              }
            },
            output: {
              shape: 'Sx'
            }
          },
          CreateDomainName: {
            http: {
              requestUri: '/domainnames',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['domainName'],
              members: {
                domainName: {},
                certificateName: {},
                certificateBody: {},
                certificatePrivateKey: {},
                certificateChain: {},
                certificateArn: {},
                regionalCertificateName: {},
                regionalCertificateArn: {},
                endpointConfiguration: {
                  shape: 'Sz'
                },
                tags: {
                  shape: 'S6'
                },
                securityPolicy: {},
                mutualTlsAuthentication: {
                  type: 'structure',
                  members: {
                    truststoreUri: {},
                    truststoreVersion: {}
                  }
                },
                ownershipVerificationCertificateArn: {}
              }
            },
            output: {
              shape: 'S14'
            }
          },
          CreateModel: {
            http: {
              requestUri: '/restapis/{restapi_id}/models',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['restApiId', 'name', 'contentType'],
              members: {
                restApiId: {
                  location: 'uri',
                  locationName: 'restapi_id'
                },
                name: {},
                description: {},
                schema: {},
                contentType: {}
              }
            },
            output: {
              shape: 'S18'
            }
          },
          CreateRequestValidator: {
            http: {
              requestUri: '/restapis/{restapi_id}/requestvalidators',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['restApiId'],
              members: {
                restApiId: {
                  location: 'uri',
                  locationName: 'restapi_id'
                },
                name: {},
                validateRequestBody: {
                  type: 'boolean'
                },
                validateRequestParameters: {
                  type: 'boolean'
                }
              }
            },
            output: {
              shape: 'S1a'
            }
          },
          CreateResource: {
            http: {
              requestUri: '/restapis/{restapi_id}/resources/{parent_id}',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['restApiId', 'parentId', 'pathPart'],
              members: {
                restApiId: {
                  location: 'uri',
                  locationName: 'restapi_id'
                },
                parentId: {
                  location: 'uri',
                  locationName: 'parent_id'
                },
                pathPart: {}
              }
            },
            output: {
              shape: 'S1c'
            }
          },
          CreateRestApi: {
            http: {
              requestUri: '/restapis',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['name'],
              members: {
                name: {},
                description: {},
                version: {},
                cloneFrom: {},
                binaryMediaTypes: {
                  shape: 'S9'
                },
                minimumCompressionSize: {
                  type: 'integer'
                },
                apiKeySource: {},
                endpointConfiguration: {
                  shape: 'Sz'
                },
                policy: {},
                tags: {
                  shape: 'S6'
                },
                disableExecuteApiEndpoint: {
                  type: 'boolean'
                }
              }
            },
            output: {
              shape: 'S1t'
            }
          },
          CreateStage: {
            http: {
              requestUri: '/restapis/{restapi_id}/stages',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['restApiId', 'stageName', 'deploymentId'],
              members: {
                restApiId: {
                  location: 'uri',
                  locationName: 'restapi_id'
                },
                stageName: {},
                deploymentId: {},
                description: {},
                cacheClusterEnabled: {
                  type: 'boolean'
                },
                cacheClusterSize: {},
                variables: {
                  shape: 'S6'
                },
                documentationVersion: {},
                canarySettings: {
                  shape: 'S1v'
                },
                tracingEnabled: {
                  type: 'boolean'
                },
                tags: {
                  shape: 'S6'
                }
              }
            },
            output: {
              shape: 'S1w'
            }
          },
          CreateUsagePlan: {
            http: {
              requestUri: '/usageplans',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['name'],
              members: {
                name: {},
                description: {},
                apiStages: {
                  shape: 'S23'
                },
                throttle: {
                  shape: 'S26'
                },
                quota: {
                  shape: 'S27'
                },
                tags: {
                  shape: 'S6'
                }
              }
            },
            output: {
              shape: 'S29'
            }
          },
          CreateUsagePlanKey: {
            http: {
              requestUri: '/usageplans/{usageplanId}/keys',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['usagePlanId', 'keyId', 'keyType'],
              members: {
                usagePlanId: {
                  location: 'uri',
                  locationName: 'usageplanId'
                },
                keyId: {},
                keyType: {}
              }
            },
            output: {
              shape: 'S2b'
            }
          },
          CreateVpcLink: {
            http: {
              requestUri: '/vpclinks',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['name', 'targetArns'],
              members: {
                name: {},
                description: {},
                targetArns: {
                  shape: 'S9'
                },
                tags: {
                  shape: 'S6'
                }
              }
            },
            output: {
              shape: 'S2d'
            }
          },
          DeleteApiKey: {
            http: {
              method: 'DELETE',
              requestUri: '/apikeys/{api_Key}',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['apiKey'],
              members: {
                apiKey: {
                  location: 'uri',
                  locationName: 'api_Key'
                }
              }
            }
          },
          DeleteAuthorizer: {
            http: {
              method: 'DELETE',
              requestUri: '/restapis/{restapi_id}/authorizers/{authorizer_id}',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['restApiId', 'authorizerId'],
              members: {
                restApiId: {
                  location: 'uri',
                  locationName: 'restapi_id'
                },
                authorizerId: {
                  location: 'uri',
                  locationName: 'authorizer_id'
                }
              }
            }
          },
          DeleteBasePathMapping: {
            http: {
              method: 'DELETE',
              requestUri: '/domainnames/{domain_name}/basepathmappings/{base_path}',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['domainName', 'basePath'],
              members: {
                domainName: {
                  location: 'uri',
                  locationName: 'domain_name'
                },
                basePath: {
                  location: 'uri',
                  locationName: 'base_path'
                }
              }
            }
          },
          DeleteClientCertificate: {
            http: {
              method: 'DELETE',
              requestUri: '/clientcertificates/{clientcertificate_id}',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['clientCertificateId'],
              members: {
                clientCertificateId: {
                  location: 'uri',
                  locationName: 'clientcertificate_id'
                }
              }
            }
          },
          DeleteDeployment: {
            http: {
              method: 'DELETE',
              requestUri: '/restapis/{restapi_id}/deployments/{deployment_id}',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['restApiId', 'deploymentId'],
              members: {
                restApiId: {
                  location: 'uri',
                  locationName: 'restapi_id'
                },
                deploymentId: {
                  location: 'uri',
                  locationName: 'deployment_id'
                }
              }
            }
          },
          DeleteDocumentationPart: {
            http: {
              method: 'DELETE',
              requestUri: '/restapis/{restapi_id}/documentation/parts/{part_id}',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['restApiId', 'documentationPartId'],
              members: {
                restApiId: {
                  location: 'uri',
                  locationName: 'restapi_id'
                },
                documentationPartId: {
                  location: 'uri',
                  locationName: 'part_id'
                }
              }
            }
          },
          DeleteDocumentationVersion: {
            http: {
              method: 'DELETE',
              requestUri: '/restapis/{restapi_id}/documentation/versions/{doc_version}',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['restApiId', 'documentationVersion'],
              members: {
                restApiId: {
                  location: 'uri',
                  locationName: 'restapi_id'
                },
                documentationVersion: {
                  location: 'uri',
                  locationName: 'doc_version'
                }
              }
            }
          },
          DeleteDomainName: {
            http: {
              method: 'DELETE',
              requestUri: '/domainnames/{domain_name}',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['domainName'],
              members: {
                domainName: {
                  location: 'uri',
                  locationName: 'domain_name'
                }
              }
            }
          },
          DeleteGatewayResponse: {
            http: {
              method: 'DELETE',
              requestUri: '/restapis/{restapi_id}/gatewayresponses/{response_type}',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['restApiId', 'responseType'],
              members: {
                restApiId: {
                  location: 'uri',
                  locationName: 'restapi_id'
                },
                responseType: {
                  location: 'uri',
                  locationName: 'response_type'
                }
              }
            }
          },
          DeleteIntegration: {
            http: {
              method: 'DELETE',
              requestUri: '/restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}/integration',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['restApiId', 'resourceId', 'httpMethod'],
              members: {
                restApiId: {
                  location: 'uri',
                  locationName: 'restapi_id'
                },
                resourceId: {
                  location: 'uri',
                  locationName: 'resource_id'
                },
                httpMethod: {
                  location: 'uri',
                  locationName: 'http_method'
                }
              }
            }
          },
          DeleteIntegrationResponse: {
            http: {
              method: 'DELETE',
              requestUri: '/restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}/integration/responses/{status_code}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['restApiId', 'resourceId', 'httpMethod', 'statusCode'],
              members: {
                restApiId: {
                  location: 'uri',
                  locationName: 'restapi_id'
                },
                resourceId: {
                  location: 'uri',
                  locationName: 'resource_id'
                },
                httpMethod: {
                  location: 'uri',
                  locationName: 'http_method'
                },
                statusCode: {
                  location: 'uri',
                  locationName: 'status_code'
                }
              }
            }
          },
          DeleteMethod: {
            http: {
              method: 'DELETE',
              requestUri: '/restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['restApiId', 'resourceId', 'httpMethod'],
              members: {
                restApiId: {
                  location: 'uri',
                  locationName: 'restapi_id'
                },
                resourceId: {
                  location: 'uri',
                  locationName: 'resource_id'
                },
                httpMethod: {
                  location: 'uri',
                  locationName: 'http_method'
                }
              }
            }
          },
          DeleteMethodResponse: {
            http: {
              method: 'DELETE',
              requestUri: '/restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}/responses/{status_code}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['restApiId', 'resourceId', 'httpMethod', 'statusCode'],
              members: {
                restApiId: {
                  location: 'uri',
                  locationName: 'restapi_id'
                },
                resourceId: {
                  location: 'uri',
                  locationName: 'resource_id'
                },
                httpMethod: {
                  location: 'uri',
                  locationName: 'http_method'
                },
                statusCode: {
                  location: 'uri',
                  locationName: 'status_code'
                }
              }
            }
          },
          DeleteModel: {
            http: {
              method: 'DELETE',
              requestUri: '/restapis/{restapi_id}/models/{model_name}',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['restApiId', 'modelName'],
              members: {
                restApiId: {
                  location: 'uri',
                  locationName: 'restapi_id'
                },
                modelName: {
                  location: 'uri',
                  locationName: 'model_name'
                }
              }
            }
          },
          DeleteRequestValidator: {
            http: {
              method: 'DELETE',
              requestUri: '/restapis/{restapi_id}/requestvalidators/{requestvalidator_id}',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['restApiId', 'requestValidatorId'],
              members: {
                restApiId: {
                  location: 'uri',
                  locationName: 'restapi_id'
                },
                requestValidatorId: {
                  location: 'uri',
                  locationName: 'requestvalidator_id'
                }
              }
            }
          },
          DeleteResource: {
            http: {
              method: 'DELETE',
              requestUri: '/restapis/{restapi_id}/resources/{resource_id}',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['restApiId', 'resourceId'],
              members: {
                restApiId: {
                  location: 'uri',
                  locationName: 'restapi_id'
                },
                resourceId: {
                  location: 'uri',
                  locationName: 'resource_id'
                }
              }
            }
          },
          DeleteRestApi: {
            http: {
              method: 'DELETE',
              requestUri: '/restapis/{restapi_id}',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['restApiId'],
              members: {
                restApiId: {
                  location: 'uri',
                  locationName: 'restapi_id'
                }
              }
            }
          },
          DeleteStage: {
            http: {
              method: 'DELETE',
              requestUri: '/restapis/{restapi_id}/stages/{stage_name}',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['restApiId', 'stageName'],
              members: {
                restApiId: {
                  location: 'uri',
                  locationName: 'restapi_id'
                },
                stageName: {
                  location: 'uri',
                  locationName: 'stage_name'
                }
              }
            }
          },
          DeleteUsagePlan: {
            http: {
              method: 'DELETE',
              requestUri: '/usageplans/{usageplanId}',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['usagePlanId'],
              members: {
                usagePlanId: {
                  location: 'uri',
                  locationName: 'usageplanId'
                }
              }
            }
          },
          DeleteUsagePlanKey: {
            http: {
              method: 'DELETE',
              requestUri: '/usageplans/{usageplanId}/keys/{keyId}',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['usagePlanId', 'keyId'],
              members: {
                usagePlanId: {
                  location: 'uri',
                  locationName: 'usageplanId'
                },
                keyId: {
                  location: 'uri',
                  locationName: 'keyId'
                }
              }
            }
          },
          DeleteVpcLink: {
            http: {
              method: 'DELETE',
              requestUri: '/vpclinks/{vpclink_id}',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['vpcLinkId'],
              members: {
                vpcLinkId: {
                  location: 'uri',
                  locationName: 'vpclink_id'
                }
              }
            }
          },
          FlushStageAuthorizersCache: {
            http: {
              method: 'DELETE',
              requestUri: '/restapis/{restapi_id}/stages/{stage_name}/cache/authorizers',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['restApiId', 'stageName'],
              members: {
                restApiId: {
                  location: 'uri',
                  locationName: 'restapi_id'
                },
                stageName: {
                  location: 'uri',
                  locationName: 'stage_name'
                }
              }
            }
          },
          FlushStageCache: {
            http: {
              method: 'DELETE',
              requestUri: '/restapis/{restapi_id}/stages/{stage_name}/cache/data',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['restApiId', 'stageName'],
              members: {
                restApiId: {
                  location: 'uri',
                  locationName: 'restapi_id'
                },
                stageName: {
                  location: 'uri',
                  locationName: 'stage_name'
                }
              }
            }
          },
          GenerateClientCertificate: {
            http: {
              requestUri: '/clientcertificates',
              responseCode: 201
            },
            input: {
              type: 'structure',
              members: {
                description: {},
                tags: {
                  shape: 'S6'
                }
              }
            },
            output: {
              shape: 'S34'
            }
          },
          GetAccount: {
            http: {
              method: 'GET',
              requestUri: '/account'
            },
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              shape: 'S36'
            }
          },
          GetApiKey: {
            http: {
              method: 'GET',
              requestUri: '/apikeys/{api_Key}'
            },
            input: {
              type: 'structure',
              required: ['apiKey'],
              members: {
                apiKey: {
                  location: 'uri',
                  locationName: 'api_Key'
                },
                includeValue: {
                  location: 'querystring',
                  locationName: 'includeValue',
                  type: 'boolean'
                }
              }
            },
            output: {
              shape: 'S7'
            }
          },
          GetApiKeys: {
            http: {
              method: 'GET',
              requestUri: '/apikeys'
            },
            input: {
              type: 'structure',
              members: {
                position: {
                  location: 'querystring',
                  locationName: 'position'
                },
                limit: {
                  location: 'querystring',
                  locationName: 'limit',
                  type: 'integer'
                },
                nameQuery: {
                  location: 'querystring',
                  locationName: 'name'
                },
                customerId: {
                  location: 'querystring',
                  locationName: 'customerId'
                },
                includeValues: {
                  location: 'querystring',
                  locationName: 'includeValues',
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                warnings: {
                  shape: 'S9'
                },
                position: {},
                items: {
                  locationName: 'item',
                  type: 'list',
                  member: {
                    shape: 'S7'
                  }
                }
              }
            }
          },
          GetAuthorizer: {
            http: {
              method: 'GET',
              requestUri: '/restapis/{restapi_id}/authorizers/{authorizer_id}'
            },
            input: {
              type: 'structure',
              required: ['restApiId', 'authorizerId'],
              members: {
                restApiId: {
                  location: 'uri',
                  locationName: 'restapi_id'
                },
                authorizerId: {
                  location: 'uri',
                  locationName: 'authorizer_id'
                }
              }
            },
            output: {
              shape: 'Sf'
            }
          },
          GetAuthorizers: {
            http: {
              method: 'GET',
              requestUri: '/restapis/{restapi_id}/authorizers'
            },
            input: {
              type: 'structure',
              required: ['restApiId'],
              members: {
                restApiId: {
                  location: 'uri',
                  locationName: 'restapi_id'
                },
                position: {
                  location: 'querystring',
                  locationName: 'position'
                },
                limit: {
                  location: 'querystring',
                  locationName: 'limit',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                position: {},
                items: {
                  locationName: 'item',
                  type: 'list',
                  member: {
                    shape: 'Sf'
                  }
                }
              }
            }
          },
          GetBasePathMapping: {
            http: {
              method: 'GET',
              requestUri: '/domainnames/{domain_name}/basepathmappings/{base_path}'
            },
            input: {
              type: 'structure',
              required: ['domainName', 'basePath'],
              members: {
                domainName: {
                  location: 'uri',
                  locationName: 'domain_name'
                },
                basePath: {
                  location: 'uri',
                  locationName: 'base_path'
                }
              }
            },
            output: {
              shape: 'Sh'
            }
          },
          GetBasePathMappings: {
            http: {
              method: 'GET',
              requestUri: '/domainnames/{domain_name}/basepathmappings'
            },
            input: {
              type: 'structure',
              required: ['domainName'],
              members: {
                domainName: {
                  location: 'uri',
                  locationName: 'domain_name'
                },
                position: {
                  location: 'querystring',
                  locationName: 'position'
                },
                limit: {
                  location: 'querystring',
                  locationName: 'limit',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                position: {},
                items: {
                  locationName: 'item',
                  type: 'list',
                  member: {
                    shape: 'Sh'
                  }
                }
              }
            }
          },
          GetClientCertificate: {
            http: {
              method: 'GET',
              requestUri: '/clientcertificates/{clientcertificate_id}'
            },
            input: {
              type: 'structure',
              required: ['clientCertificateId'],
              members: {
                clientCertificateId: {
                  location: 'uri',
                  locationName: 'clientcertificate_id'
                }
              }
            },
            output: {
              shape: 'S34'
            }
          },
          GetClientCertificates: {
            http: {
              method: 'GET',
              requestUri: '/clientcertificates'
            },
            input: {
              type: 'structure',
              members: {
                position: {
                  location: 'querystring',
                  locationName: 'position'
                },
                limit: {
                  location: 'querystring',
                  locationName: 'limit',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                position: {},
                items: {
                  locationName: 'item',
                  type: 'list',
                  member: {
                    shape: 'S34'
                  }
                }
              }
            }
          },
          GetDeployment: {
            http: {
              method: 'GET',
              requestUri: '/restapis/{restapi_id}/deployments/{deployment_id}'
            },
            input: {
              type: 'structure',
              required: ['restApiId', 'deploymentId'],
              members: {
                restApiId: {
                  location: 'uri',
                  locationName: 'restapi_id'
                },
                deploymentId: {
                  location: 'uri',
                  locationName: 'deployment_id'
                },
                embed: {
                  shape: 'S9',
                  location: 'querystring',
                  locationName: 'embed'
                }
              }
            },
            output: {
              shape: 'Sn'
            }
          },
          GetDeployments: {
            http: {
              method: 'GET',
              requestUri: '/restapis/{restapi_id}/deployments'
            },
            input: {
              type: 'structure',
              required: ['restApiId'],
              members: {
                restApiId: {
                  location: 'uri',
                  locationName: 'restapi_id'
                },
                position: {
                  location: 'querystring',
                  locationName: 'position'
                },
                limit: {
                  location: 'querystring',
                  locationName: 'limit',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                position: {},
                items: {
                  locationName: 'item',
                  type: 'list',
                  member: {
                    shape: 'Sn'
                  }
                }
              }
            }
          },
          GetDocumentationPart: {
            http: {
              method: 'GET',
              requestUri: '/restapis/{restapi_id}/documentation/parts/{part_id}'
            },
            input: {
              type: 'structure',
              required: ['restApiId', 'documentationPartId'],
              members: {
                restApiId: {
                  location: 'uri',
                  locationName: 'restapi_id'
                },
                documentationPartId: {
                  location: 'uri',
                  locationName: 'part_id'
                }
              }
            },
            output: {
              shape: 'Sv'
            }
          },
          GetDocumentationParts: {
            http: {
              method: 'GET',
              requestUri: '/restapis/{restapi_id}/documentation/parts'
            },
            input: {
              type: 'structure',
              required: ['restApiId'],
              members: {
                restApiId: {
                  location: 'uri',
                  locationName: 'restapi_id'
                },
                type: {
                  location: 'querystring',
                  locationName: 'type'
                },
                nameQuery: {
                  location: 'querystring',
                  locationName: 'name'
                },
                path: {
                  location: 'querystring',
                  locationName: 'path'
                },
                position: {
                  location: 'querystring',
                  locationName: 'position'
                },
                limit: {
                  location: 'querystring',
                  locationName: 'limit',
                  type: 'integer'
                },
                locationStatus: {
                  location: 'querystring',
                  locationName: 'locationStatus'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                position: {},
                items: {
                  locationName: 'item',
                  type: 'list',
                  member: {
                    shape: 'Sv'
                  }
                }
              }
            }
          },
          GetDocumentationVersion: {
            http: {
              method: 'GET',
              requestUri: '/restapis/{restapi_id}/documentation/versions/{doc_version}'
            },
            input: {
              type: 'structure',
              required: ['restApiId', 'documentationVersion'],
              members: {
                restApiId: {
                  location: 'uri',
                  locationName: 'restapi_id'
                },
                documentationVersion: {
                  location: 'uri',
                  locationName: 'doc_version'
                }
              }
            },
            output: {
              shape: 'Sx'
            }
          },
          GetDocumentationVersions: {
            http: {
              method: 'GET',
              requestUri: '/restapis/{restapi_id}/documentation/versions'
            },
            input: {
              type: 'structure',
              required: ['restApiId'],
              members: {
                restApiId: {
                  location: 'uri',
                  locationName: 'restapi_id'
                },
                position: {
                  location: 'querystring',
                  locationName: 'position'
                },
                limit: {
                  location: 'querystring',
                  locationName: 'limit',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                position: {},
                items: {
                  locationName: 'item',
                  type: 'list',
                  member: {
                    shape: 'Sx'
                  }
                }
              }
            }
          },
          GetDomainName: {
            http: {
              method: 'GET',
              requestUri: '/domainnames/{domain_name}'
            },
            input: {
              type: 'structure',
              required: ['domainName'],
              members: {
                domainName: {
                  location: 'uri',
                  locationName: 'domain_name'
                }
              }
            },
            output: {
              shape: 'S14'
            }
          },
          GetDomainNames: {
            http: {
              method: 'GET',
              requestUri: '/domainnames'
            },
            input: {
              type: 'structure',
              members: {
                position: {
                  location: 'querystring',
                  locationName: 'position'
                },
                limit: {
                  location: 'querystring',
                  locationName: 'limit',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                position: {},
                items: {
                  locationName: 'item',
                  type: 'list',
                  member: {
                    shape: 'S14'
                  }
                }
              }
            }
          },
          GetExport: {
            http: {
              method: 'GET',
              requestUri: '/restapis/{restapi_id}/stages/{stage_name}/exports/{export_type}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['restApiId', 'stageName', 'exportType'],
              members: {
                restApiId: {
                  location: 'uri',
                  locationName: 'restapi_id'
                },
                stageName: {
                  location: 'uri',
                  locationName: 'stage_name'
                },
                exportType: {
                  location: 'uri',
                  locationName: 'export_type'
                },
                parameters: {
                  shape: 'S6',
                  location: 'querystring'
                },
                accepts: {
                  location: 'header',
                  locationName: 'Accept'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                contentType: {
                  location: 'header',
                  locationName: 'Content-Type'
                },
                contentDisposition: {
                  location: 'header',
                  locationName: 'Content-Disposition'
                },
                body: {
                  type: 'blob'
                }
              },
              payload: 'body'
            }
          },
          GetGatewayResponse: {
            http: {
              method: 'GET',
              requestUri: '/restapis/{restapi_id}/gatewayresponses/{response_type}'
            },
            input: {
              type: 'structure',
              required: ['restApiId', 'responseType'],
              members: {
                restApiId: {
                  location: 'uri',
                  locationName: 'restapi_id'
                },
                responseType: {
                  location: 'uri',
                  locationName: 'response_type'
                }
              }
            },
            output: {
              shape: 'S48'
            }
          },
          GetGatewayResponses: {
            http: {
              method: 'GET',
              requestUri: '/restapis/{restapi_id}/gatewayresponses'
            },
            input: {
              type: 'structure',
              required: ['restApiId'],
              members: {
                restApiId: {
                  location: 'uri',
                  locationName: 'restapi_id'
                },
                position: {
                  location: 'querystring',
                  locationName: 'position'
                },
                limit: {
                  location: 'querystring',
                  locationName: 'limit',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                position: {},
                items: {
                  locationName: 'item',
                  type: 'list',
                  member: {
                    shape: 'S48'
                  }
                }
              }
            }
          },
          GetIntegration: {
            http: {
              method: 'GET',
              requestUri: '/restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}/integration'
            },
            input: {
              type: 'structure',
              required: ['restApiId', 'resourceId', 'httpMethod'],
              members: {
                restApiId: {
                  location: 'uri',
                  locationName: 'restapi_id'
                },
                resourceId: {
                  location: 'uri',
                  locationName: 'resource_id'
                },
                httpMethod: {
                  location: 'uri',
                  locationName: 'http_method'
                }
              }
            },
            output: {
              shape: 'S1j'
            }
          },
          GetIntegrationResponse: {
            http: {
              method: 'GET',
              requestUri: '/restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}/integration/responses/{status_code}'
            },
            input: {
              type: 'structure',
              required: ['restApiId', 'resourceId', 'httpMethod', 'statusCode'],
              members: {
                restApiId: {
                  location: 'uri',
                  locationName: 'restapi_id'
                },
                resourceId: {
                  location: 'uri',
                  locationName: 'resource_id'
                },
                httpMethod: {
                  location: 'uri',
                  locationName: 'http_method'
                },
                statusCode: {
                  location: 'uri',
                  locationName: 'status_code'
                }
              }
            },
            output: {
              shape: 'S1p'
            }
          },
          GetMethod: {
            http: {
              method: 'GET',
              requestUri: '/restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}'
            },
            input: {
              type: 'structure',
              required: ['restApiId', 'resourceId', 'httpMethod'],
              members: {
                restApiId: {
                  location: 'uri',
                  locationName: 'restapi_id'
                },
                resourceId: {
                  location: 'uri',
                  locationName: 'resource_id'
                },
                httpMethod: {
                  location: 'uri',
                  locationName: 'http_method'
                }
              }
            },
            output: {
              shape: 'S1e'
            }
          },
          GetMethodResponse: {
            http: {
              method: 'GET',
              requestUri: '/restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}/responses/{status_code}'
            },
            input: {
              type: 'structure',
              required: ['restApiId', 'resourceId', 'httpMethod', 'statusCode'],
              members: {
                restApiId: {
                  location: 'uri',
                  locationName: 'restapi_id'
                },
                resourceId: {
                  location: 'uri',
                  locationName: 'resource_id'
                },
                httpMethod: {
                  location: 'uri',
                  locationName: 'http_method'
                },
                statusCode: {
                  location: 'uri',
                  locationName: 'status_code'
                }
              }
            },
            output: {
              shape: 'S1h'
            }
          },
          GetModel: {
            http: {
              method: 'GET',
              requestUri: '/restapis/{restapi_id}/models/{model_name}'
            },
            input: {
              type: 'structure',
              required: ['restApiId', 'modelName'],
              members: {
                restApiId: {
                  location: 'uri',
                  locationName: 'restapi_id'
                },
                modelName: {
                  location: 'uri',
                  locationName: 'model_name'
                },
                flatten: {
                  location: 'querystring',
                  locationName: 'flatten',
                  type: 'boolean'
                }
              }
            },
            output: {
              shape: 'S18'
            }
          },
          GetModelTemplate: {
            http: {
              method: 'GET',
              requestUri: '/restapis/{restapi_id}/models/{model_name}/default_template'
            },
            input: {
              type: 'structure',
              required: ['restApiId', 'modelName'],
              members: {
                restApiId: {
                  location: 'uri',
                  locationName: 'restapi_id'
                },
                modelName: {
                  location: 'uri',
                  locationName: 'model_name'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                value: {}
              }
            }
          },
          GetModels: {
            http: {
              method: 'GET',
              requestUri: '/restapis/{restapi_id}/models'
            },
            input: {
              type: 'structure',
              required: ['restApiId'],
              members: {
                restApiId: {
                  location: 'uri',
                  locationName: 'restapi_id'
                },
                position: {
                  location: 'querystring',
                  locationName: 'position'
                },
                limit: {
                  location: 'querystring',
                  locationName: 'limit',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                position: {},
                items: {
                  locationName: 'item',
                  type: 'list',
                  member: {
                    shape: 'S18'
                  }
                }
              }
            }
          },
          GetRequestValidator: {
            http: {
              method: 'GET',
              requestUri: '/restapis/{restapi_id}/requestvalidators/{requestvalidator_id}'
            },
            input: {
              type: 'structure',
              required: ['restApiId', 'requestValidatorId'],
              members: {
                restApiId: {
                  location: 'uri',
                  locationName: 'restapi_id'
                },
                requestValidatorId: {
                  location: 'uri',
                  locationName: 'requestvalidator_id'
                }
              }
            },
            output: {
              shape: 'S1a'
            }
          },
          GetRequestValidators: {
            http: {
              method: 'GET',
              requestUri: '/restapis/{restapi_id}/requestvalidators'
            },
            input: {
              type: 'structure',
              required: ['restApiId'],
              members: {
                restApiId: {
                  location: 'uri',
                  locationName: 'restapi_id'
                },
                position: {
                  location: 'querystring',
                  locationName: 'position'
                },
                limit: {
                  location: 'querystring',
                  locationName: 'limit',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                position: {},
                items: {
                  locationName: 'item',
                  type: 'list',
                  member: {
                    shape: 'S1a'
                  }
                }
              }
            }
          },
          GetResource: {
            http: {
              method: 'GET',
              requestUri: '/restapis/{restapi_id}/resources/{resource_id}'
            },
            input: {
              type: 'structure',
              required: ['restApiId', 'resourceId'],
              members: {
                restApiId: {
                  location: 'uri',
                  locationName: 'restapi_id'
                },
                resourceId: {
                  location: 'uri',
                  locationName: 'resource_id'
                },
                embed: {
                  shape: 'S9',
                  location: 'querystring',
                  locationName: 'embed'
                }
              }
            },
            output: {
              shape: 'S1c'
            }
          },
          GetResources: {
            http: {
              method: 'GET',
              requestUri: '/restapis/{restapi_id}/resources'
            },
            input: {
              type: 'structure',
              required: ['restApiId'],
              members: {
                restApiId: {
                  location: 'uri',
                  locationName: 'restapi_id'
                },
                position: {
                  location: 'querystring',
                  locationName: 'position'
                },
                limit: {
                  location: 'querystring',
                  locationName: 'limit',
                  type: 'integer'
                },
                embed: {
                  shape: 'S9',
                  location: 'querystring',
                  locationName: 'embed'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                position: {},
                items: {
                  locationName: 'item',
                  type: 'list',
                  member: {
                    shape: 'S1c'
                  }
                }
              }
            }
          },
          GetRestApi: {
            http: {
              method: 'GET',
              requestUri: '/restapis/{restapi_id}'
            },
            input: {
              type: 'structure',
              required: ['restApiId'],
              members: {
                restApiId: {
                  location: 'uri',
                  locationName: 'restapi_id'
                }
              }
            },
            output: {
              shape: 'S1t'
            }
          },
          GetRestApis: {
            http: {
              method: 'GET',
              requestUri: '/restapis'
            },
            input: {
              type: 'structure',
              members: {
                position: {
                  location: 'querystring',
                  locationName: 'position'
                },
                limit: {
                  location: 'querystring',
                  locationName: 'limit',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                position: {},
                items: {
                  locationName: 'item',
                  type: 'list',
                  member: {
                    shape: 'S1t'
                  }
                }
              }
            }
          },
          GetSdk: {
            http: {
              method: 'GET',
              requestUri: '/restapis/{restapi_id}/stages/{stage_name}/sdks/{sdk_type}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['restApiId', 'stageName', 'sdkType'],
              members: {
                restApiId: {
                  location: 'uri',
                  locationName: 'restapi_id'
                },
                stageName: {
                  location: 'uri',
                  locationName: 'stage_name'
                },
                sdkType: {
                  location: 'uri',
                  locationName: 'sdk_type'
                },
                parameters: {
                  shape: 'S6',
                  location: 'querystring'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                contentType: {
                  location: 'header',
                  locationName: 'Content-Type'
                },
                contentDisposition: {
                  location: 'header',
                  locationName: 'Content-Disposition'
                },
                body: {
                  type: 'blob'
                }
              },
              payload: 'body'
            }
          },
          GetSdkType: {
            http: {
              method: 'GET',
              requestUri: '/sdktypes/{sdktype_id}'
            },
            input: {
              type: 'structure',
              required: ['id'],
              members: {
                id: {
                  location: 'uri',
                  locationName: 'sdktype_id'
                }
              }
            },
            output: {
              shape: 'S51'
            }
          },
          GetSdkTypes: {
            http: {
              method: 'GET',
              requestUri: '/sdktypes'
            },
            input: {
              type: 'structure',
              members: {
                position: {
                  location: 'querystring',
                  locationName: 'position'
                },
                limit: {
                  location: 'querystring',
                  locationName: 'limit',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                position: {},
                items: {
                  locationName: 'item',
                  type: 'list',
                  member: {
                    shape: 'S51'
                  }
                }
              }
            }
          },
          GetStage: {
            http: {
              method: 'GET',
              requestUri: '/restapis/{restapi_id}/stages/{stage_name}'
            },
            input: {
              type: 'structure',
              required: ['restApiId', 'stageName'],
              members: {
                restApiId: {
                  location: 'uri',
                  locationName: 'restapi_id'
                },
                stageName: {
                  location: 'uri',
                  locationName: 'stage_name'
                }
              }
            },
            output: {
              shape: 'S1w'
            }
          },
          GetStages: {
            http: {
              method: 'GET',
              requestUri: '/restapis/{restapi_id}/stages'
            },
            input: {
              type: 'structure',
              required: ['restApiId'],
              members: {
                restApiId: {
                  location: 'uri',
                  locationName: 'restapi_id'
                },
                deploymentId: {
                  location: 'querystring',
                  locationName: 'deploymentId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                item: {
                  type: 'list',
                  member: {
                    shape: 'S1w'
                  }
                }
              }
            }
          },
          GetTags: {
            http: {
              method: 'GET',
              requestUri: '/tags/{resource_arn}'
            },
            input: {
              type: 'structure',
              required: ['resourceArn'],
              members: {
                resourceArn: {
                  location: 'uri',
                  locationName: 'resource_arn'
                },
                position: {
                  location: 'querystring',
                  locationName: 'position'
                },
                limit: {
                  location: 'querystring',
                  locationName: 'limit',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                tags: {
                  shape: 'S6'
                }
              }
            }
          },
          GetUsage: {
            http: {
              method: 'GET',
              requestUri: '/usageplans/{usageplanId}/usage'
            },
            input: {
              type: 'structure',
              required: ['usagePlanId', 'startDate', 'endDate'],
              members: {
                usagePlanId: {
                  location: 'uri',
                  locationName: 'usageplanId'
                },
                keyId: {
                  location: 'querystring',
                  locationName: 'keyId'
                },
                startDate: {
                  location: 'querystring',
                  locationName: 'startDate'
                },
                endDate: {
                  location: 'querystring',
                  locationName: 'endDate'
                },
                position: {
                  location: 'querystring',
                  locationName: 'position'
                },
                limit: {
                  location: 'querystring',
                  locationName: 'limit',
                  type: 'integer'
                }
              }
            },
            output: {
              shape: 'S5e'
            }
          },
          GetUsagePlan: {
            http: {
              method: 'GET',
              requestUri: '/usageplans/{usageplanId}'
            },
            input: {
              type: 'structure',
              required: ['usagePlanId'],
              members: {
                usagePlanId: {
                  location: 'uri',
                  locationName: 'usageplanId'
                }
              }
            },
            output: {
              shape: 'S29'
            }
          },
          GetUsagePlanKey: {
            http: {
              method: 'GET',
              requestUri: '/usageplans/{usageplanId}/keys/{keyId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['usagePlanId', 'keyId'],
              members: {
                usagePlanId: {
                  location: 'uri',
                  locationName: 'usageplanId'
                },
                keyId: {
                  location: 'uri',
                  locationName: 'keyId'
                }
              }
            },
            output: {
              shape: 'S2b'
            }
          },
          GetUsagePlanKeys: {
            http: {
              method: 'GET',
              requestUri: '/usageplans/{usageplanId}/keys'
            },
            input: {
              type: 'structure',
              required: ['usagePlanId'],
              members: {
                usagePlanId: {
                  location: 'uri',
                  locationName: 'usageplanId'
                },
                position: {
                  location: 'querystring',
                  locationName: 'position'
                },
                limit: {
                  location: 'querystring',
                  locationName: 'limit',
                  type: 'integer'
                },
                nameQuery: {
                  location: 'querystring',
                  locationName: 'name'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                position: {},
                items: {
                  locationName: 'item',
                  type: 'list',
                  member: {
                    shape: 'S2b'
                  }
                }
              }
            }
          },
          GetUsagePlans: {
            http: {
              method: 'GET',
              requestUri: '/usageplans'
            },
            input: {
              type: 'structure',
              members: {
                position: {
                  location: 'querystring',
                  locationName: 'position'
                },
                keyId: {
                  location: 'querystring',
                  locationName: 'keyId'
                },
                limit: {
                  location: 'querystring',
                  locationName: 'limit',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                position: {},
                items: {
                  locationName: 'item',
                  type: 'list',
                  member: {
                    shape: 'S29'
                  }
                }
              }
            }
          },
          GetVpcLink: {
            http: {
              method: 'GET',
              requestUri: '/vpclinks/{vpclink_id}'
            },
            input: {
              type: 'structure',
              required: ['vpcLinkId'],
              members: {
                vpcLinkId: {
                  location: 'uri',
                  locationName: 'vpclink_id'
                }
              }
            },
            output: {
              shape: 'S2d'
            }
          },
          GetVpcLinks: {
            http: {
              method: 'GET',
              requestUri: '/vpclinks'
            },
            input: {
              type: 'structure',
              members: {
                position: {
                  location: 'querystring',
                  locationName: 'position'
                },
                limit: {
                  location: 'querystring',
                  locationName: 'limit',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                position: {},
                items: {
                  locationName: 'item',
                  type: 'list',
                  member: {
                    shape: 'S2d'
                  }
                }
              }
            }
          },
          ImportApiKeys: {
            http: {
              requestUri: '/apikeys?mode=import',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['body', 'format'],
              members: {
                body: {
                  type: 'blob'
                },
                format: {
                  location: 'querystring',
                  locationName: 'format'
                },
                failOnWarnings: {
                  location: 'querystring',
                  locationName: 'failonwarnings',
                  type: 'boolean'
                }
              },
              payload: 'body'
            },
            output: {
              type: 'structure',
              members: {
                ids: {
                  shape: 'S9'
                },
                warnings: {
                  shape: 'S9'
                }
              }
            }
          },
          ImportDocumentationParts: {
            http: {
              method: 'PUT',
              requestUri: '/restapis/{restapi_id}/documentation/parts'
            },
            input: {
              type: 'structure',
              required: ['restApiId', 'body'],
              members: {
                restApiId: {
                  location: 'uri',
                  locationName: 'restapi_id'
                },
                mode: {
                  location: 'querystring',
                  locationName: 'mode'
                },
                failOnWarnings: {
                  location: 'querystring',
                  locationName: 'failonwarnings',
                  type: 'boolean'
                },
                body: {
                  type: 'blob'
                }
              },
              payload: 'body'
            },
            output: {
              type: 'structure',
              members: {
                ids: {
                  shape: 'S9'
                },
                warnings: {
                  shape: 'S9'
                }
              }
            }
          },
          ImportRestApi: {
            http: {
              requestUri: '/restapis?mode=import',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['body'],
              members: {
                failOnWarnings: {
                  location: 'querystring',
                  locationName: 'failonwarnings',
                  type: 'boolean'
                },
                parameters: {
                  shape: 'S6',
                  location: 'querystring'
                },
                body: {
                  type: 'blob'
                }
              },
              payload: 'body'
            },
            output: {
              shape: 'S1t'
            }
          },
          PutGatewayResponse: {
            http: {
              method: 'PUT',
              requestUri: '/restapis/{restapi_id}/gatewayresponses/{response_type}',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['restApiId', 'responseType'],
              members: {
                restApiId: {
                  location: 'uri',
                  locationName: 'restapi_id'
                },
                responseType: {
                  location: 'uri',
                  locationName: 'response_type'
                },
                statusCode: {},
                responseParameters: {
                  shape: 'S6'
                },
                responseTemplates: {
                  shape: 'S6'
                }
              }
            },
            output: {
              shape: 'S48'
            }
          },
          PutIntegration: {
            http: {
              method: 'PUT',
              requestUri: '/restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}/integration',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['restApiId', 'resourceId', 'httpMethod', 'type'],
              members: {
                restApiId: {
                  location: 'uri',
                  locationName: 'restapi_id'
                },
                resourceId: {
                  location: 'uri',
                  locationName: 'resource_id'
                },
                httpMethod: {
                  location: 'uri',
                  locationName: 'http_method'
                },
                type: {},
                integrationHttpMethod: {
                  locationName: 'httpMethod'
                },
                uri: {},
                connectionType: {},
                connectionId: {},
                credentials: {},
                requestParameters: {
                  shape: 'S6'
                },
                requestTemplates: {
                  shape: 'S6'
                },
                passthroughBehavior: {},
                cacheNamespace: {},
                cacheKeyParameters: {
                  shape: 'S9'
                },
                contentHandling: {},
                timeoutInMillis: {
                  type: 'integer'
                },
                tlsConfig: {
                  shape: 'S1q'
                }
              }
            },
            output: {
              shape: 'S1j'
            }
          },
          PutIntegrationResponse: {
            http: {
              method: 'PUT',
              requestUri: '/restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}/integration/responses/{status_code}',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['restApiId', 'resourceId', 'httpMethod', 'statusCode'],
              members: {
                restApiId: {
                  location: 'uri',
                  locationName: 'restapi_id'
                },
                resourceId: {
                  location: 'uri',
                  locationName: 'resource_id'
                },
                httpMethod: {
                  location: 'uri',
                  locationName: 'http_method'
                },
                statusCode: {
                  location: 'uri',
                  locationName: 'status_code'
                },
                selectionPattern: {},
                responseParameters: {
                  shape: 'S6'
                },
                responseTemplates: {
                  shape: 'S6'
                },
                contentHandling: {}
              }
            },
            output: {
              shape: 'S1p'
            }
          },
          PutMethod: {
            http: {
              method: 'PUT',
              requestUri: '/restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['restApiId', 'resourceId', 'httpMethod', 'authorizationType'],
              members: {
                restApiId: {
                  location: 'uri',
                  locationName: 'restapi_id'
                },
                resourceId: {
                  location: 'uri',
                  locationName: 'resource_id'
                },
                httpMethod: {
                  location: 'uri',
                  locationName: 'http_method'
                },
                authorizationType: {},
                authorizerId: {},
                apiKeyRequired: {
                  type: 'boolean'
                },
                operationName: {},
                requestParameters: {
                  shape: 'S1f'
                },
                requestModels: {
                  shape: 'S6'
                },
                requestValidatorId: {},
                authorizationScopes: {
                  shape: 'S9'
                }
              }
            },
            output: {
              shape: 'S1e'
            }
          },
          PutMethodResponse: {
            http: {
              method: 'PUT',
              requestUri: '/restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}/responses/{status_code}',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['restApiId', 'resourceId', 'httpMethod', 'statusCode'],
              members: {
                restApiId: {
                  location: 'uri',
                  locationName: 'restapi_id'
                },
                resourceId: {
                  location: 'uri',
                  locationName: 'resource_id'
                },
                httpMethod: {
                  location: 'uri',
                  locationName: 'http_method'
                },
                statusCode: {
                  location: 'uri',
                  locationName: 'status_code'
                },
                responseParameters: {
                  shape: 'S1f'
                },
                responseModels: {
                  shape: 'S6'
                }
              }
            },
            output: {
              shape: 'S1h'
            }
          },
          PutRestApi: {
            http: {
              method: 'PUT',
              requestUri: '/restapis/{restapi_id}'
            },
            input: {
              type: 'structure',
              required: ['restApiId', 'body'],
              members: {
                restApiId: {
                  location: 'uri',
                  locationName: 'restapi_id'
                },
                mode: {
                  location: 'querystring',
                  locationName: 'mode'
                },
                failOnWarnings: {
                  location: 'querystring',
                  locationName: 'failonwarnings',
                  type: 'boolean'
                },
                parameters: {
                  shape: 'S6',
                  location: 'querystring'
                },
                body: {
                  type: 'blob'
                }
              },
              payload: 'body'
            },
            output: {
              shape: 'S1t'
            }
          },
          TagResource: {
            http: {
              method: 'PUT',
              requestUri: '/tags/{resource_arn}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['resourceArn', 'tags'],
              members: {
                resourceArn: {
                  location: 'uri',
                  locationName: 'resource_arn'
                },
                tags: {
                  shape: 'S6'
                }
              }
            }
          },
          TestInvokeAuthorizer: {
            http: {
              requestUri: '/restapis/{restapi_id}/authorizers/{authorizer_id}'
            },
            input: {
              type: 'structure',
              required: ['restApiId', 'authorizerId'],
              members: {
                restApiId: {
                  location: 'uri',
                  locationName: 'restapi_id'
                },
                authorizerId: {
                  location: 'uri',
                  locationName: 'authorizer_id'
                },
                headers: {
                  shape: 'S6'
                },
                multiValueHeaders: {
                  shape: 'S6a'
                },
                pathWithQueryString: {},
                body: {},
                stageVariables: {
                  shape: 'S6'
                },
                additionalContext: {
                  shape: 'S6'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                clientStatus: {
                  type: 'integer'
                },
                log: {},
                latency: {
                  type: 'long'
                },
                principalId: {},
                policy: {},
                authorization: {
                  shape: 'S6a'
                },
                claims: {
                  shape: 'S6'
                }
              }
            }
          },
          TestInvokeMethod: {
            http: {
              requestUri: '/restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}'
            },
            input: {
              type: 'structure',
              required: ['restApiId', 'resourceId', 'httpMethod'],
              members: {
                restApiId: {
                  location: 'uri',
                  locationName: 'restapi_id'
                },
                resourceId: {
                  location: 'uri',
                  locationName: 'resource_id'
                },
                httpMethod: {
                  location: 'uri',
                  locationName: 'http_method'
                },
                pathWithQueryString: {},
                body: {},
                headers: {
                  shape: 'S6'
                },
                multiValueHeaders: {
                  shape: 'S6a'
                },
                clientCertificateId: {},
                stageVariables: {
                  shape: 'S6'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                status: {
                  type: 'integer'
                },
                body: {},
                headers: {
                  shape: 'S6'
                },
                multiValueHeaders: {
                  shape: 'S6a'
                },
                log: {},
                latency: {
                  type: 'long'
                }
              }
            }
          },
          UntagResource: {
            http: {
              method: 'DELETE',
              requestUri: '/tags/{resource_arn}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['resourceArn', 'tagKeys'],
              members: {
                resourceArn: {
                  location: 'uri',
                  locationName: 'resource_arn'
                },
                tagKeys: {
                  shape: 'S9',
                  location: 'querystring',
                  locationName: 'tagKeys'
                }
              }
            }
          },
          UpdateAccount: {
            http: {
              method: 'PATCH',
              requestUri: '/account'
            },
            input: {
              type: 'structure',
              members: {
                patchOperations: {
                  shape: 'S6g'
                }
              }
            },
            output: {
              shape: 'S36'
            }
          },
          UpdateApiKey: {
            http: {
              method: 'PATCH',
              requestUri: '/apikeys/{api_Key}'
            },
            input: {
              type: 'structure',
              required: ['apiKey'],
              members: {
                apiKey: {
                  location: 'uri',
                  locationName: 'api_Key'
                },
                patchOperations: {
                  shape: 'S6g'
                }
              }
            },
            output: {
              shape: 'S7'
            }
          },
          UpdateAuthorizer: {
            http: {
              method: 'PATCH',
              requestUri: '/restapis/{restapi_id}/authorizers/{authorizer_id}'
            },
            input: {
              type: 'structure',
              required: ['restApiId', 'authorizerId'],
              members: {
                restApiId: {
                  location: 'uri',
                  locationName: 'restapi_id'
                },
                authorizerId: {
                  location: 'uri',
                  locationName: 'authorizer_id'
                },
                patchOperations: {
                  shape: 'S6g'
                }
              }
            },
            output: {
              shape: 'Sf'
            }
          },
          UpdateBasePathMapping: {
            http: {
              method: 'PATCH',
              requestUri: '/domainnames/{domain_name}/basepathmappings/{base_path}'
            },
            input: {
              type: 'structure',
              required: ['domainName', 'basePath'],
              members: {
                domainName: {
                  location: 'uri',
                  locationName: 'domain_name'
                },
                basePath: {
                  location: 'uri',
                  locationName: 'base_path'
                },
                patchOperations: {
                  shape: 'S6g'
                }
              }
            },
            output: {
              shape: 'Sh'
            }
          },
          UpdateClientCertificate: {
            http: {
              method: 'PATCH',
              requestUri: '/clientcertificates/{clientcertificate_id}'
            },
            input: {
              type: 'structure',
              required: ['clientCertificateId'],
              members: {
                clientCertificateId: {
                  location: 'uri',
                  locationName: 'clientcertificate_id'
                },
                patchOperations: {
                  shape: 'S6g'
                }
              }
            },
            output: {
              shape: 'S34'
            }
          },
          UpdateDeployment: {
            http: {
              method: 'PATCH',
              requestUri: '/restapis/{restapi_id}/deployments/{deployment_id}'
            },
            input: {
              type: 'structure',
              required: ['restApiId', 'deploymentId'],
              members: {
                restApiId: {
                  location: 'uri',
                  locationName: 'restapi_id'
                },
                deploymentId: {
                  location: 'uri',
                  locationName: 'deployment_id'
                },
                patchOperations: {
                  shape: 'S6g'
                }
              }
            },
            output: {
              shape: 'Sn'
            }
          },
          UpdateDocumentationPart: {
            http: {
              method: 'PATCH',
              requestUri: '/restapis/{restapi_id}/documentation/parts/{part_id}'
            },
            input: {
              type: 'structure',
              required: ['restApiId', 'documentationPartId'],
              members: {
                restApiId: {
                  location: 'uri',
                  locationName: 'restapi_id'
                },
                documentationPartId: {
                  location: 'uri',
                  locationName: 'part_id'
                },
                patchOperations: {
                  shape: 'S6g'
                }
              }
            },
            output: {
              shape: 'Sv'
            }
          },
          UpdateDocumentationVersion: {
            http: {
              method: 'PATCH',
              requestUri: '/restapis/{restapi_id}/documentation/versions/{doc_version}'
            },
            input: {
              type: 'structure',
              required: ['restApiId', 'documentationVersion'],
              members: {
                restApiId: {
                  location: 'uri',
                  locationName: 'restapi_id'
                },
                documentationVersion: {
                  location: 'uri',
                  locationName: 'doc_version'
                },
                patchOperations: {
                  shape: 'S6g'
                }
              }
            },
            output: {
              shape: 'Sx'
            }
          },
          UpdateDomainName: {
            http: {
              method: 'PATCH',
              requestUri: '/domainnames/{domain_name}'
            },
            input: {
              type: 'structure',
              required: ['domainName'],
              members: {
                domainName: {
                  location: 'uri',
                  locationName: 'domain_name'
                },
                patchOperations: {
                  shape: 'S6g'
                }
              }
            },
            output: {
              shape: 'S14'
            }
          },
          UpdateGatewayResponse: {
            http: {
              method: 'PATCH',
              requestUri: '/restapis/{restapi_id}/gatewayresponses/{response_type}'
            },
            input: {
              type: 'structure',
              required: ['restApiId', 'responseType'],
              members: {
                restApiId: {
                  location: 'uri',
                  locationName: 'restapi_id'
                },
                responseType: {
                  location: 'uri',
                  locationName: 'response_type'
                },
                patchOperations: {
                  shape: 'S6g'
                }
              }
            },
            output: {
              shape: 'S48'
            }
          },
          UpdateIntegration: {
            http: {
              method: 'PATCH',
              requestUri: '/restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}/integration'
            },
            input: {
              type: 'structure',
              required: ['restApiId', 'resourceId', 'httpMethod'],
              members: {
                restApiId: {
                  location: 'uri',
                  locationName: 'restapi_id'
                },
                resourceId: {
                  location: 'uri',
                  locationName: 'resource_id'
                },
                httpMethod: {
                  location: 'uri',
                  locationName: 'http_method'
                },
                patchOperations: {
                  shape: 'S6g'
                }
              }
            },
            output: {
              shape: 'S1j'
            }
          },
          UpdateIntegrationResponse: {
            http: {
              method: 'PATCH',
              requestUri: '/restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}/integration/responses/{status_code}'
            },
            input: {
              type: 'structure',
              required: ['restApiId', 'resourceId', 'httpMethod', 'statusCode'],
              members: {
                restApiId: {
                  location: 'uri',
                  locationName: 'restapi_id'
                },
                resourceId: {
                  location: 'uri',
                  locationName: 'resource_id'
                },
                httpMethod: {
                  location: 'uri',
                  locationName: 'http_method'
                },
                statusCode: {
                  location: 'uri',
                  locationName: 'status_code'
                },
                patchOperations: {
                  shape: 'S6g'
                }
              }
            },
            output: {
              shape: 'S1p'
            }
          },
          UpdateMethod: {
            http: {
              method: 'PATCH',
              requestUri: '/restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}'
            },
            input: {
              type: 'structure',
              required: ['restApiId', 'resourceId', 'httpMethod'],
              members: {
                restApiId: {
                  location: 'uri',
                  locationName: 'restapi_id'
                },
                resourceId: {
                  location: 'uri',
                  locationName: 'resource_id'
                },
                httpMethod: {
                  location: 'uri',
                  locationName: 'http_method'
                },
                patchOperations: {
                  shape: 'S6g'
                }
              }
            },
            output: {
              shape: 'S1e'
            }
          },
          UpdateMethodResponse: {
            http: {
              method: 'PATCH',
              requestUri: '/restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}/responses/{status_code}',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['restApiId', 'resourceId', 'httpMethod', 'statusCode'],
              members: {
                restApiId: {
                  location: 'uri',
                  locationName: 'restapi_id'
                },
                resourceId: {
                  location: 'uri',
                  locationName: 'resource_id'
                },
                httpMethod: {
                  location: 'uri',
                  locationName: 'http_method'
                },
                statusCode: {
                  location: 'uri',
                  locationName: 'status_code'
                },
                patchOperations: {
                  shape: 'S6g'
                }
              }
            },
            output: {
              shape: 'S1h'
            }
          },
          UpdateModel: {
            http: {
              method: 'PATCH',
              requestUri: '/restapis/{restapi_id}/models/{model_name}'
            },
            input: {
              type: 'structure',
              required: ['restApiId', 'modelName'],
              members: {
                restApiId: {
                  location: 'uri',
                  locationName: 'restapi_id'
                },
                modelName: {
                  location: 'uri',
                  locationName: 'model_name'
                },
                patchOperations: {
                  shape: 'S6g'
                }
              }
            },
            output: {
              shape: 'S18'
            }
          },
          UpdateRequestValidator: {
            http: {
              method: 'PATCH',
              requestUri: '/restapis/{restapi_id}/requestvalidators/{requestvalidator_id}'
            },
            input: {
              type: 'structure',
              required: ['restApiId', 'requestValidatorId'],
              members: {
                restApiId: {
                  location: 'uri',
                  locationName: 'restapi_id'
                },
                requestValidatorId: {
                  location: 'uri',
                  locationName: 'requestvalidator_id'
                },
                patchOperations: {
                  shape: 'S6g'
                }
              }
            },
            output: {
              shape: 'S1a'
            }
          },
          UpdateResource: {
            http: {
              method: 'PATCH',
              requestUri: '/restapis/{restapi_id}/resources/{resource_id}'
            },
            input: {
              type: 'structure',
              required: ['restApiId', 'resourceId'],
              members: {
                restApiId: {
                  location: 'uri',
                  locationName: 'restapi_id'
                },
                resourceId: {
                  location: 'uri',
                  locationName: 'resource_id'
                },
                patchOperations: {
                  shape: 'S6g'
                }
              }
            },
            output: {
              shape: 'S1c'
            }
          },
          UpdateRestApi: {
            http: {
              method: 'PATCH',
              requestUri: '/restapis/{restapi_id}'
            },
            input: {
              type: 'structure',
              required: ['restApiId'],
              members: {
                restApiId: {
                  location: 'uri',
                  locationName: 'restapi_id'
                },
                patchOperations: {
                  shape: 'S6g'
                }
              }
            },
            output: {
              shape: 'S1t'
            }
          },
          UpdateStage: {
            http: {
              method: 'PATCH',
              requestUri: '/restapis/{restapi_id}/stages/{stage_name}'
            },
            input: {
              type: 'structure',
              required: ['restApiId', 'stageName'],
              members: {
                restApiId: {
                  location: 'uri',
                  locationName: 'restapi_id'
                },
                stageName: {
                  location: 'uri',
                  locationName: 'stage_name'
                },
                patchOperations: {
                  shape: 'S6g'
                }
              }
            },
            output: {
              shape: 'S1w'
            }
          },
          UpdateUsage: {
            http: {
              method: 'PATCH',
              requestUri: '/usageplans/{usageplanId}/keys/{keyId}/usage'
            },
            input: {
              type: 'structure',
              required: ['usagePlanId', 'keyId'],
              members: {
                usagePlanId: {
                  location: 'uri',
                  locationName: 'usageplanId'
                },
                keyId: {
                  location: 'uri',
                  locationName: 'keyId'
                },
                patchOperations: {
                  shape: 'S6g'
                }
              }
            },
            output: {
              shape: 'S5e'
            }
          },
          UpdateUsagePlan: {
            http: {
              method: 'PATCH',
              requestUri: '/usageplans/{usageplanId}'
            },
            input: {
              type: 'structure',
              required: ['usagePlanId'],
              members: {
                usagePlanId: {
                  location: 'uri',
                  locationName: 'usageplanId'
                },
                patchOperations: {
                  shape: 'S6g'
                }
              }
            },
            output: {
              shape: 'S29'
            }
          },
          UpdateVpcLink: {
            http: {
              method: 'PATCH',
              requestUri: '/vpclinks/{vpclink_id}'
            },
            input: {
              type: 'structure',
              required: ['vpcLinkId'],
              members: {
                vpcLinkId: {
                  location: 'uri',
                  locationName: 'vpclink_id'
                },
                patchOperations: {
                  shape: 'S6g'
                }
              }
            },
            output: {
              shape: 'S2d'
            }
          }
        },
        shapes: {
          S6: {
            type: 'map',
            key: {},
            value: {}
          },
          S7: {
            type: 'structure',
            members: {
              id: {},
              value: {},
              name: {},
              customerId: {},
              description: {},
              enabled: {
                type: 'boolean'
              },
              createdDate: {
                type: 'timestamp'
              },
              lastUpdatedDate: {
                type: 'timestamp'
              },
              stageKeys: {
                shape: 'S9'
              },
              tags: {
                shape: 'S6'
              }
            }
          },
          S9: {
            type: 'list',
            member: {}
          },
          Sc: {
            type: 'list',
            member: {}
          },
          Sf: {
            type: 'structure',
            members: {
              id: {},
              name: {},
              type: {},
              providerARNs: {
                shape: 'Sc'
              },
              authType: {},
              authorizerUri: {},
              authorizerCredentials: {},
              identitySource: {},
              identityValidationExpression: {},
              authorizerResultTtlInSeconds: {
                type: 'integer'
              }
            }
          },
          Sh: {
            type: 'structure',
            members: {
              basePath: {},
              restApiId: {},
              stage: {}
            }
          },
          Sn: {
            type: 'structure',
            members: {
              id: {},
              description: {},
              createdDate: {
                type: 'timestamp'
              },
              apiSummary: {
                type: 'map',
                key: {},
                value: {
                  type: 'map',
                  key: {},
                  value: {
                    type: 'structure',
                    members: {
                      authorizationType: {},
                      apiKeyRequired: {
                        type: 'boolean'
                      }
                    }
                  }
                }
              }
            }
          },
          Ss: {
            type: 'structure',
            required: ['type'],
            members: {
              type: {},
              path: {},
              method: {},
              statusCode: {},
              name: {}
            }
          },
          Sv: {
            type: 'structure',
            members: {
              id: {},
              location: {
                shape: 'Ss'
              },
              properties: {}
            }
          },
          Sx: {
            type: 'structure',
            members: {
              version: {},
              createdDate: {
                type: 'timestamp'
              },
              description: {}
            }
          },
          Sz: {
            type: 'structure',
            members: {
              types: {
                type: 'list',
                member: {}
              },
              vpcEndpointIds: {
                shape: 'S9'
              }
            }
          },
          S14: {
            type: 'structure',
            members: {
              domainName: {},
              certificateName: {},
              certificateArn: {},
              certificateUploadDate: {
                type: 'timestamp'
              },
              regionalDomainName: {},
              regionalHostedZoneId: {},
              regionalCertificateName: {},
              regionalCertificateArn: {},
              distributionDomainName: {},
              distributionHostedZoneId: {},
              endpointConfiguration: {
                shape: 'Sz'
              },
              domainNameStatus: {},
              domainNameStatusMessage: {},
              securityPolicy: {},
              tags: {
                shape: 'S6'
              },
              mutualTlsAuthentication: {
                type: 'structure',
                members: {
                  truststoreUri: {},
                  truststoreVersion: {},
                  truststoreWarnings: {
                    shape: 'S9'
                  }
                }
              },
              ownershipVerificationCertificateArn: {}
            }
          },
          S18: {
            type: 'structure',
            members: {
              id: {},
              name: {},
              description: {},
              schema: {},
              contentType: {}
            }
          },
          S1a: {
            type: 'structure',
            members: {
              id: {},
              name: {},
              validateRequestBody: {
                type: 'boolean'
              },
              validateRequestParameters: {
                type: 'boolean'
              }
            }
          },
          S1c: {
            type: 'structure',
            members: {
              id: {},
              parentId: {},
              pathPart: {},
              path: {},
              resourceMethods: {
                type: 'map',
                key: {},
                value: {
                  shape: 'S1e'
                }
              }
            }
          },
          S1e: {
            type: 'structure',
            members: {
              httpMethod: {},
              authorizationType: {},
              authorizerId: {},
              apiKeyRequired: {
                type: 'boolean'
              },
              requestValidatorId: {},
              operationName: {},
              requestParameters: {
                shape: 'S1f'
              },
              requestModels: {
                shape: 'S6'
              },
              methodResponses: {
                type: 'map',
                key: {},
                value: {
                  shape: 'S1h'
                }
              },
              methodIntegration: {
                shape: 'S1j'
              },
              authorizationScopes: {
                shape: 'S9'
              }
            }
          },
          S1f: {
            type: 'map',
            key: {},
            value: {
              type: 'boolean'
            }
          },
          S1h: {
            type: 'structure',
            members: {
              statusCode: {},
              responseParameters: {
                shape: 'S1f'
              },
              responseModels: {
                shape: 'S6'
              }
            }
          },
          S1j: {
            type: 'structure',
            members: {
              type: {},
              httpMethod: {},
              uri: {},
              connectionType: {},
              connectionId: {},
              credentials: {},
              requestParameters: {
                shape: 'S6'
              },
              requestTemplates: {
                shape: 'S6'
              },
              passthroughBehavior: {},
              contentHandling: {},
              timeoutInMillis: {
                type: 'integer'
              },
              cacheNamespace: {},
              cacheKeyParameters: {
                shape: 'S9'
              },
              integrationResponses: {
                type: 'map',
                key: {},
                value: {
                  shape: 'S1p'
                }
              },
              tlsConfig: {
                shape: 'S1q'
              }
            }
          },
          S1p: {
            type: 'structure',
            members: {
              statusCode: {},
              selectionPattern: {},
              responseParameters: {
                shape: 'S6'
              },
              responseTemplates: {
                shape: 'S6'
              },
              contentHandling: {}
            }
          },
          S1q: {
            type: 'structure',
            members: {
              insecureSkipVerification: {
                type: 'boolean'
              }
            }
          },
          S1t: {
            type: 'structure',
            members: {
              id: {},
              name: {},
              description: {},
              createdDate: {
                type: 'timestamp'
              },
              version: {},
              warnings: {
                shape: 'S9'
              },
              binaryMediaTypes: {
                shape: 'S9'
              },
              minimumCompressionSize: {
                type: 'integer'
              },
              apiKeySource: {},
              endpointConfiguration: {
                shape: 'Sz'
              },
              policy: {},
              tags: {
                shape: 'S6'
              },
              disableExecuteApiEndpoint: {
                type: 'boolean'
              },
              rootResourceId: {}
            }
          },
          S1v: {
            type: 'structure',
            members: {
              percentTraffic: {
                type: 'double'
              },
              deploymentId: {},
              stageVariableOverrides: {
                shape: 'S6'
              },
              useStageCache: {
                type: 'boolean'
              }
            }
          },
          S1w: {
            type: 'structure',
            members: {
              deploymentId: {},
              clientCertificateId: {},
              stageName: {},
              description: {},
              cacheClusterEnabled: {
                type: 'boolean'
              },
              cacheClusterSize: {},
              cacheClusterStatus: {},
              methodSettings: {
                type: 'map',
                key: {},
                value: {
                  type: 'structure',
                  members: {
                    metricsEnabled: {
                      type: 'boolean'
                    },
                    loggingLevel: {},
                    dataTraceEnabled: {
                      type: 'boolean'
                    },
                    throttlingBurstLimit: {
                      type: 'integer'
                    },
                    throttlingRateLimit: {
                      type: 'double'
                    },
                    cachingEnabled: {
                      type: 'boolean'
                    },
                    cacheTtlInSeconds: {
                      type: 'integer'
                    },
                    cacheDataEncrypted: {
                      type: 'boolean'
                    },
                    requireAuthorizationForCacheControl: {
                      type: 'boolean'
                    },
                    unauthorizedCacheControlHeaderStrategy: {}
                  }
                }
              },
              variables: {
                shape: 'S6'
              },
              documentationVersion: {},
              accessLogSettings: {
                type: 'structure',
                members: {
                  format: {},
                  destinationArn: {}
                }
              },
              canarySettings: {
                shape: 'S1v'
              },
              tracingEnabled: {
                type: 'boolean'
              },
              webAclArn: {},
              tags: {
                shape: 'S6'
              },
              createdDate: {
                type: 'timestamp'
              },
              lastUpdatedDate: {
                type: 'timestamp'
              }
            }
          },
          S23: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                apiId: {},
                stage: {},
                throttle: {
                  type: 'map',
                  key: {},
                  value: {
                    shape: 'S26'
                  }
                }
              }
            }
          },
          S26: {
            type: 'structure',
            members: {
              burstLimit: {
                type: 'integer'
              },
              rateLimit: {
                type: 'double'
              }
            }
          },
          S27: {
            type: 'structure',
            members: {
              limit: {
                type: 'integer'
              },
              offset: {
                type: 'integer'
              },
              period: {}
            }
          },
          S29: {
            type: 'structure',
            members: {
              id: {},
              name: {},
              description: {},
              apiStages: {
                shape: 'S23'
              },
              throttle: {
                shape: 'S26'
              },
              quota: {
                shape: 'S27'
              },
              productCode: {},
              tags: {
                shape: 'S6'
              }
            }
          },
          S2b: {
            type: 'structure',
            members: {
              id: {},
              type: {},
              value: {},
              name: {}
            }
          },
          S2d: {
            type: 'structure',
            members: {
              id: {},
              name: {},
              description: {},
              targetArns: {
                shape: 'S9'
              },
              status: {},
              statusMessage: {},
              tags: {
                shape: 'S6'
              }
            }
          },
          S34: {
            type: 'structure',
            members: {
              clientCertificateId: {},
              description: {},
              pemEncodedCertificate: {},
              createdDate: {
                type: 'timestamp'
              },
              expirationDate: {
                type: 'timestamp'
              },
              tags: {
                shape: 'S6'
              }
            }
          },
          S36: {
            type: 'structure',
            members: {
              cloudwatchRoleArn: {},
              throttleSettings: {
                shape: 'S26'
              },
              features: {
                shape: 'S9'
              },
              apiKeyVersion: {}
            }
          },
          S48: {
            type: 'structure',
            members: {
              responseType: {},
              statusCode: {},
              responseParameters: {
                shape: 'S6'
              },
              responseTemplates: {
                shape: 'S6'
              },
              defaultResponse: {
                type: 'boolean'
              }
            }
          },
          S51: {
            type: 'structure',
            members: {
              id: {},
              friendlyName: {},
              description: {},
              configurationProperties: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    name: {},
                    friendlyName: {},
                    description: {},
                    required: {
                      type: 'boolean'
                    },
                    defaultValue: {}
                  }
                }
              }
            }
          },
          S5e: {
            type: 'structure',
            members: {
              usagePlanId: {},
              startDate: {},
              endDate: {},
              position: {},
              items: {
                locationName: 'values',
                type: 'map',
                key: {},
                value: {
                  type: 'list',
                  member: {
                    type: 'list',
                    member: {
                      type: 'long'
                    }
                  }
                }
              }
            }
          },
          S6a: {
            type: 'map',
            key: {},
            value: {
              shape: 'S9'
            }
          },
          S6g: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                op: {},
                path: {},
                value: {},
                from: {}
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=f5cd7741c2204335411284296a968ee4bdb501e0.js.map