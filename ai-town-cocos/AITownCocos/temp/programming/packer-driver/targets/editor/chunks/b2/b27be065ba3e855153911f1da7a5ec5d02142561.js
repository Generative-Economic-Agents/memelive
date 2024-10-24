System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        metadata: {
          apiVersion: '2018-11-29',
          endpointPrefix: 'apigateway',
          signingName: 'apigateway',
          serviceFullName: 'AmazonApiGatewayV2',
          serviceId: 'ApiGatewayV2',
          protocol: 'rest-json',
          jsonVersion: '1.1',
          uid: 'apigatewayv2-2018-11-29',
          signatureVersion: 'v4'
        },
        operations: {
          CreateApi: {
            http: {
              requestUri: '/v2/apis',
              responseCode: 201
            },
            input: {
              type: 'structure',
              members: {
                ApiKeySelectionExpression: {
                  locationName: 'apiKeySelectionExpression'
                },
                CorsConfiguration: {
                  shape: 'S3',
                  locationName: 'corsConfiguration'
                },
                CredentialsArn: {
                  locationName: 'credentialsArn'
                },
                Description: {
                  locationName: 'description'
                },
                DisableSchemaValidation: {
                  locationName: 'disableSchemaValidation',
                  type: 'boolean'
                },
                DisableExecuteApiEndpoint: {
                  locationName: 'disableExecuteApiEndpoint',
                  type: 'boolean'
                },
                Name: {
                  locationName: 'name'
                },
                ProtocolType: {
                  locationName: 'protocolType'
                },
                RouteKey: {
                  locationName: 'routeKey'
                },
                RouteSelectionExpression: {
                  locationName: 'routeSelectionExpression'
                },
                Tags: {
                  shape: 'Sg',
                  locationName: 'tags'
                },
                Target: {
                  locationName: 'target'
                },
                Version: {
                  locationName: 'version'
                }
              },
              required: ['ProtocolType', 'Name']
            },
            output: {
              type: 'structure',
              members: {
                ApiEndpoint: {
                  locationName: 'apiEndpoint'
                },
                ApiGatewayManaged: {
                  locationName: 'apiGatewayManaged',
                  type: 'boolean'
                },
                ApiId: {
                  locationName: 'apiId'
                },
                ApiKeySelectionExpression: {
                  locationName: 'apiKeySelectionExpression'
                },
                CorsConfiguration: {
                  shape: 'S3',
                  locationName: 'corsConfiguration'
                },
                CreatedDate: {
                  shape: 'Sl',
                  locationName: 'createdDate'
                },
                Description: {
                  locationName: 'description'
                },
                DisableSchemaValidation: {
                  locationName: 'disableSchemaValidation',
                  type: 'boolean'
                },
                DisableExecuteApiEndpoint: {
                  locationName: 'disableExecuteApiEndpoint',
                  type: 'boolean'
                },
                ImportInfo: {
                  shape: 'Sm',
                  locationName: 'importInfo'
                },
                Name: {
                  locationName: 'name'
                },
                ProtocolType: {
                  locationName: 'protocolType'
                },
                RouteSelectionExpression: {
                  locationName: 'routeSelectionExpression'
                },
                Tags: {
                  shape: 'Sg',
                  locationName: 'tags'
                },
                Version: {
                  locationName: 'version'
                },
                Warnings: {
                  shape: 'Sm',
                  locationName: 'warnings'
                }
              }
            }
          },
          CreateApiMapping: {
            http: {
              requestUri: '/v2/domainnames/{domainName}/apimappings',
              responseCode: 201
            },
            input: {
              type: 'structure',
              members: {
                ApiId: {
                  locationName: 'apiId'
                },
                ApiMappingKey: {
                  locationName: 'apiMappingKey'
                },
                DomainName: {
                  location: 'uri',
                  locationName: 'domainName'
                },
                Stage: {
                  locationName: 'stage'
                }
              },
              required: ['DomainName', 'Stage', 'ApiId']
            },
            output: {
              type: 'structure',
              members: {
                ApiId: {
                  locationName: 'apiId'
                },
                ApiMappingId: {
                  locationName: 'apiMappingId'
                },
                ApiMappingKey: {
                  locationName: 'apiMappingKey'
                },
                Stage: {
                  locationName: 'stage'
                }
              }
            }
          },
          CreateAuthorizer: {
            http: {
              requestUri: '/v2/apis/{apiId}/authorizers',
              responseCode: 201
            },
            input: {
              type: 'structure',
              members: {
                ApiId: {
                  location: 'uri',
                  locationName: 'apiId'
                },
                AuthorizerCredentialsArn: {
                  locationName: 'authorizerCredentialsArn'
                },
                AuthorizerPayloadFormatVersion: {
                  locationName: 'authorizerPayloadFormatVersion'
                },
                AuthorizerResultTtlInSeconds: {
                  locationName: 'authorizerResultTtlInSeconds',
                  type: 'integer'
                },
                AuthorizerType: {
                  locationName: 'authorizerType'
                },
                AuthorizerUri: {
                  locationName: 'authorizerUri'
                },
                EnableSimpleResponses: {
                  locationName: 'enableSimpleResponses',
                  type: 'boolean'
                },
                IdentitySource: {
                  shape: 'Ss',
                  locationName: 'identitySource'
                },
                IdentityValidationExpression: {
                  locationName: 'identityValidationExpression'
                },
                JwtConfiguration: {
                  shape: 'St',
                  locationName: 'jwtConfiguration'
                },
                Name: {
                  locationName: 'name'
                }
              },
              required: ['ApiId', 'AuthorizerType', 'IdentitySource', 'Name']
            },
            output: {
              type: 'structure',
              members: {
                AuthorizerCredentialsArn: {
                  locationName: 'authorizerCredentialsArn'
                },
                AuthorizerId: {
                  locationName: 'authorizerId'
                },
                AuthorizerPayloadFormatVersion: {
                  locationName: 'authorizerPayloadFormatVersion'
                },
                AuthorizerResultTtlInSeconds: {
                  locationName: 'authorizerResultTtlInSeconds',
                  type: 'integer'
                },
                AuthorizerType: {
                  locationName: 'authorizerType'
                },
                AuthorizerUri: {
                  locationName: 'authorizerUri'
                },
                EnableSimpleResponses: {
                  locationName: 'enableSimpleResponses',
                  type: 'boolean'
                },
                IdentitySource: {
                  shape: 'Ss',
                  locationName: 'identitySource'
                },
                IdentityValidationExpression: {
                  locationName: 'identityValidationExpression'
                },
                JwtConfiguration: {
                  shape: 'St',
                  locationName: 'jwtConfiguration'
                },
                Name: {
                  locationName: 'name'
                }
              }
            }
          },
          CreateDeployment: {
            http: {
              requestUri: '/v2/apis/{apiId}/deployments',
              responseCode: 201
            },
            input: {
              type: 'structure',
              members: {
                ApiId: {
                  location: 'uri',
                  locationName: 'apiId'
                },
                Description: {
                  locationName: 'description'
                },
                StageName: {
                  locationName: 'stageName'
                }
              },
              required: ['ApiId']
            },
            output: {
              type: 'structure',
              members: {
                AutoDeployed: {
                  locationName: 'autoDeployed',
                  type: 'boolean'
                },
                CreatedDate: {
                  shape: 'Sl',
                  locationName: 'createdDate'
                },
                DeploymentId: {
                  locationName: 'deploymentId'
                },
                DeploymentStatus: {
                  locationName: 'deploymentStatus'
                },
                DeploymentStatusMessage: {
                  locationName: 'deploymentStatusMessage'
                },
                Description: {
                  locationName: 'description'
                }
              }
            }
          },
          CreateDomainName: {
            http: {
              requestUri: '/v2/domainnames',
              responseCode: 201
            },
            input: {
              type: 'structure',
              members: {
                DomainName: {
                  locationName: 'domainName'
                },
                DomainNameConfigurations: {
                  shape: 'S10',
                  locationName: 'domainNameConfigurations'
                },
                MutualTlsAuthentication: {
                  shape: 'S15',
                  locationName: 'mutualTlsAuthentication'
                },
                Tags: {
                  shape: 'Sg',
                  locationName: 'tags'
                }
              },
              required: ['DomainName']
            },
            output: {
              type: 'structure',
              members: {
                ApiMappingSelectionExpression: {
                  locationName: 'apiMappingSelectionExpression'
                },
                DomainName: {
                  locationName: 'domainName'
                },
                DomainNameConfigurations: {
                  shape: 'S10',
                  locationName: 'domainNameConfigurations'
                },
                MutualTlsAuthentication: {
                  shape: 'S17',
                  locationName: 'mutualTlsAuthentication'
                },
                Tags: {
                  shape: 'Sg',
                  locationName: 'tags'
                }
              }
            }
          },
          CreateIntegration: {
            http: {
              requestUri: '/v2/apis/{apiId}/integrations',
              responseCode: 201
            },
            input: {
              type: 'structure',
              members: {
                ApiId: {
                  location: 'uri',
                  locationName: 'apiId'
                },
                ConnectionId: {
                  locationName: 'connectionId'
                },
                ConnectionType: {
                  locationName: 'connectionType'
                },
                ContentHandlingStrategy: {
                  locationName: 'contentHandlingStrategy'
                },
                CredentialsArn: {
                  locationName: 'credentialsArn'
                },
                Description: {
                  locationName: 'description'
                },
                IntegrationMethod: {
                  locationName: 'integrationMethod'
                },
                IntegrationSubtype: {
                  locationName: 'integrationSubtype'
                },
                IntegrationType: {
                  locationName: 'integrationType'
                },
                IntegrationUri: {
                  locationName: 'integrationUri'
                },
                PassthroughBehavior: {
                  locationName: 'passthroughBehavior'
                },
                PayloadFormatVersion: {
                  locationName: 'payloadFormatVersion'
                },
                RequestParameters: {
                  shape: 'S1e',
                  locationName: 'requestParameters'
                },
                RequestTemplates: {
                  shape: 'S1f',
                  locationName: 'requestTemplates'
                },
                ResponseParameters: {
                  shape: 'S1h',
                  locationName: 'responseParameters'
                },
                TemplateSelectionExpression: {
                  locationName: 'templateSelectionExpression'
                },
                TimeoutInMillis: {
                  locationName: 'timeoutInMillis',
                  type: 'integer'
                },
                TlsConfig: {
                  shape: 'S1j',
                  locationName: 'tlsConfig'
                }
              },
              required: ['ApiId', 'IntegrationType']
            },
            output: {
              type: 'structure',
              members: {
                ApiGatewayManaged: {
                  locationName: 'apiGatewayManaged',
                  type: 'boolean'
                },
                ConnectionId: {
                  locationName: 'connectionId'
                },
                ConnectionType: {
                  locationName: 'connectionType'
                },
                ContentHandlingStrategy: {
                  locationName: 'contentHandlingStrategy'
                },
                CredentialsArn: {
                  locationName: 'credentialsArn'
                },
                Description: {
                  locationName: 'description'
                },
                IntegrationId: {
                  locationName: 'integrationId'
                },
                IntegrationMethod: {
                  locationName: 'integrationMethod'
                },
                IntegrationResponseSelectionExpression: {
                  locationName: 'integrationResponseSelectionExpression'
                },
                IntegrationSubtype: {
                  locationName: 'integrationSubtype'
                },
                IntegrationType: {
                  locationName: 'integrationType'
                },
                IntegrationUri: {
                  locationName: 'integrationUri'
                },
                PassthroughBehavior: {
                  locationName: 'passthroughBehavior'
                },
                PayloadFormatVersion: {
                  locationName: 'payloadFormatVersion'
                },
                RequestParameters: {
                  shape: 'S1e',
                  locationName: 'requestParameters'
                },
                RequestTemplates: {
                  shape: 'S1f',
                  locationName: 'requestTemplates'
                },
                ResponseParameters: {
                  shape: 'S1h',
                  locationName: 'responseParameters'
                },
                TemplateSelectionExpression: {
                  locationName: 'templateSelectionExpression'
                },
                TimeoutInMillis: {
                  locationName: 'timeoutInMillis',
                  type: 'integer'
                },
                TlsConfig: {
                  shape: 'S1l',
                  locationName: 'tlsConfig'
                }
              }
            }
          },
          CreateIntegrationResponse: {
            http: {
              requestUri: '/v2/apis/{apiId}/integrations/{integrationId}/integrationresponses',
              responseCode: 201
            },
            input: {
              type: 'structure',
              members: {
                ApiId: {
                  location: 'uri',
                  locationName: 'apiId'
                },
                ContentHandlingStrategy: {
                  locationName: 'contentHandlingStrategy'
                },
                IntegrationId: {
                  location: 'uri',
                  locationName: 'integrationId'
                },
                IntegrationResponseKey: {
                  locationName: 'integrationResponseKey'
                },
                ResponseParameters: {
                  shape: 'S1e',
                  locationName: 'responseParameters'
                },
                ResponseTemplates: {
                  shape: 'S1f',
                  locationName: 'responseTemplates'
                },
                TemplateSelectionExpression: {
                  locationName: 'templateSelectionExpression'
                }
              },
              required: ['ApiId', 'IntegrationId', 'IntegrationResponseKey']
            },
            output: {
              type: 'structure',
              members: {
                ContentHandlingStrategy: {
                  locationName: 'contentHandlingStrategy'
                },
                IntegrationResponseId: {
                  locationName: 'integrationResponseId'
                },
                IntegrationResponseKey: {
                  locationName: 'integrationResponseKey'
                },
                ResponseParameters: {
                  shape: 'S1e',
                  locationName: 'responseParameters'
                },
                ResponseTemplates: {
                  shape: 'S1f',
                  locationName: 'responseTemplates'
                },
                TemplateSelectionExpression: {
                  locationName: 'templateSelectionExpression'
                }
              }
            }
          },
          CreateModel: {
            http: {
              requestUri: '/v2/apis/{apiId}/models',
              responseCode: 201
            },
            input: {
              type: 'structure',
              members: {
                ApiId: {
                  location: 'uri',
                  locationName: 'apiId'
                },
                ContentType: {
                  locationName: 'contentType'
                },
                Description: {
                  locationName: 'description'
                },
                Name: {
                  locationName: 'name'
                },
                Schema: {
                  locationName: 'schema'
                }
              },
              required: ['ApiId', 'Schema', 'Name']
            },
            output: {
              type: 'structure',
              members: {
                ContentType: {
                  locationName: 'contentType'
                },
                Description: {
                  locationName: 'description'
                },
                ModelId: {
                  locationName: 'modelId'
                },
                Name: {
                  locationName: 'name'
                },
                Schema: {
                  locationName: 'schema'
                }
              }
            }
          },
          CreateRoute: {
            http: {
              requestUri: '/v2/apis/{apiId}/routes',
              responseCode: 201
            },
            input: {
              type: 'structure',
              members: {
                ApiId: {
                  location: 'uri',
                  locationName: 'apiId'
                },
                ApiKeyRequired: {
                  locationName: 'apiKeyRequired',
                  type: 'boolean'
                },
                AuthorizationScopes: {
                  shape: 'S1s',
                  locationName: 'authorizationScopes'
                },
                AuthorizationType: {
                  locationName: 'authorizationType'
                },
                AuthorizerId: {
                  locationName: 'authorizerId'
                },
                ModelSelectionExpression: {
                  locationName: 'modelSelectionExpression'
                },
                OperationName: {
                  locationName: 'operationName'
                },
                RequestModels: {
                  shape: 'S1u',
                  locationName: 'requestModels'
                },
                RequestParameters: {
                  shape: 'S1v',
                  locationName: 'requestParameters'
                },
                RouteKey: {
                  locationName: 'routeKey'
                },
                RouteResponseSelectionExpression: {
                  locationName: 'routeResponseSelectionExpression'
                },
                Target: {
                  locationName: 'target'
                }
              },
              required: ['ApiId', 'RouteKey']
            },
            output: {
              type: 'structure',
              members: {
                ApiGatewayManaged: {
                  locationName: 'apiGatewayManaged',
                  type: 'boolean'
                },
                ApiKeyRequired: {
                  locationName: 'apiKeyRequired',
                  type: 'boolean'
                },
                AuthorizationScopes: {
                  shape: 'S1s',
                  locationName: 'authorizationScopes'
                },
                AuthorizationType: {
                  locationName: 'authorizationType'
                },
                AuthorizerId: {
                  locationName: 'authorizerId'
                },
                ModelSelectionExpression: {
                  locationName: 'modelSelectionExpression'
                },
                OperationName: {
                  locationName: 'operationName'
                },
                RequestModels: {
                  shape: 'S1u',
                  locationName: 'requestModels'
                },
                RequestParameters: {
                  shape: 'S1v',
                  locationName: 'requestParameters'
                },
                RouteId: {
                  locationName: 'routeId'
                },
                RouteKey: {
                  locationName: 'routeKey'
                },
                RouteResponseSelectionExpression: {
                  locationName: 'routeResponseSelectionExpression'
                },
                Target: {
                  locationName: 'target'
                }
              }
            }
          },
          CreateRouteResponse: {
            http: {
              requestUri: '/v2/apis/{apiId}/routes/{routeId}/routeresponses',
              responseCode: 201
            },
            input: {
              type: 'structure',
              members: {
                ApiId: {
                  location: 'uri',
                  locationName: 'apiId'
                },
                ModelSelectionExpression: {
                  locationName: 'modelSelectionExpression'
                },
                ResponseModels: {
                  shape: 'S1u',
                  locationName: 'responseModels'
                },
                ResponseParameters: {
                  shape: 'S1v',
                  locationName: 'responseParameters'
                },
                RouteId: {
                  location: 'uri',
                  locationName: 'routeId'
                },
                RouteResponseKey: {
                  locationName: 'routeResponseKey'
                }
              },
              required: ['ApiId', 'RouteId', 'RouteResponseKey']
            },
            output: {
              type: 'structure',
              members: {
                ModelSelectionExpression: {
                  locationName: 'modelSelectionExpression'
                },
                ResponseModels: {
                  shape: 'S1u',
                  locationName: 'responseModels'
                },
                ResponseParameters: {
                  shape: 'S1v',
                  locationName: 'responseParameters'
                },
                RouteResponseId: {
                  locationName: 'routeResponseId'
                },
                RouteResponseKey: {
                  locationName: 'routeResponseKey'
                }
              }
            }
          },
          CreateStage: {
            http: {
              requestUri: '/v2/apis/{apiId}/stages',
              responseCode: 201
            },
            input: {
              type: 'structure',
              members: {
                AccessLogSettings: {
                  shape: 'S21',
                  locationName: 'accessLogSettings'
                },
                ApiId: {
                  location: 'uri',
                  locationName: 'apiId'
                },
                AutoDeploy: {
                  locationName: 'autoDeploy',
                  type: 'boolean'
                },
                ClientCertificateId: {
                  locationName: 'clientCertificateId'
                },
                DefaultRouteSettings: {
                  shape: 'S22',
                  locationName: 'defaultRouteSettings'
                },
                DeploymentId: {
                  locationName: 'deploymentId'
                },
                Description: {
                  locationName: 'description'
                },
                RouteSettings: {
                  shape: 'S26',
                  locationName: 'routeSettings'
                },
                StageName: {
                  locationName: 'stageName'
                },
                StageVariables: {
                  shape: 'S27',
                  locationName: 'stageVariables'
                },
                Tags: {
                  shape: 'Sg',
                  locationName: 'tags'
                }
              },
              required: ['ApiId', 'StageName']
            },
            output: {
              type: 'structure',
              members: {
                AccessLogSettings: {
                  shape: 'S21',
                  locationName: 'accessLogSettings'
                },
                ApiGatewayManaged: {
                  locationName: 'apiGatewayManaged',
                  type: 'boolean'
                },
                AutoDeploy: {
                  locationName: 'autoDeploy',
                  type: 'boolean'
                },
                ClientCertificateId: {
                  locationName: 'clientCertificateId'
                },
                CreatedDate: {
                  shape: 'Sl',
                  locationName: 'createdDate'
                },
                DefaultRouteSettings: {
                  shape: 'S22',
                  locationName: 'defaultRouteSettings'
                },
                DeploymentId: {
                  locationName: 'deploymentId'
                },
                Description: {
                  locationName: 'description'
                },
                LastDeploymentStatusMessage: {
                  locationName: 'lastDeploymentStatusMessage'
                },
                LastUpdatedDate: {
                  shape: 'Sl',
                  locationName: 'lastUpdatedDate'
                },
                RouteSettings: {
                  shape: 'S26',
                  locationName: 'routeSettings'
                },
                StageName: {
                  locationName: 'stageName'
                },
                StageVariables: {
                  shape: 'S27',
                  locationName: 'stageVariables'
                },
                Tags: {
                  shape: 'Sg',
                  locationName: 'tags'
                }
              }
            }
          },
          CreateVpcLink: {
            http: {
              requestUri: '/v2/vpclinks',
              responseCode: 201
            },
            input: {
              type: 'structure',
              members: {
                Name: {
                  locationName: 'name'
                },
                SecurityGroupIds: {
                  shape: 'S2b',
                  locationName: 'securityGroupIds'
                },
                SubnetIds: {
                  shape: 'S2c',
                  locationName: 'subnetIds'
                },
                Tags: {
                  shape: 'Sg',
                  locationName: 'tags'
                }
              },
              required: ['SubnetIds', 'Name']
            },
            output: {
              type: 'structure',
              members: {
                CreatedDate: {
                  shape: 'Sl',
                  locationName: 'createdDate'
                },
                Name: {
                  locationName: 'name'
                },
                SecurityGroupIds: {
                  shape: 'S2b',
                  locationName: 'securityGroupIds'
                },
                SubnetIds: {
                  shape: 'S2c',
                  locationName: 'subnetIds'
                },
                Tags: {
                  shape: 'Sg',
                  locationName: 'tags'
                },
                VpcLinkId: {
                  locationName: 'vpcLinkId'
                },
                VpcLinkStatus: {
                  locationName: 'vpcLinkStatus'
                },
                VpcLinkStatusMessage: {
                  locationName: 'vpcLinkStatusMessage'
                },
                VpcLinkVersion: {
                  locationName: 'vpcLinkVersion'
                }
              }
            }
          },
          DeleteAccessLogSettings: {
            http: {
              method: 'DELETE',
              requestUri: '/v2/apis/{apiId}/stages/{stageName}/accesslogsettings',
              responseCode: 204
            },
            input: {
              type: 'structure',
              members: {
                ApiId: {
                  location: 'uri',
                  locationName: 'apiId'
                },
                StageName: {
                  location: 'uri',
                  locationName: 'stageName'
                }
              },
              required: ['StageName', 'ApiId']
            }
          },
          DeleteApi: {
            http: {
              method: 'DELETE',
              requestUri: '/v2/apis/{apiId}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              members: {
                ApiId: {
                  location: 'uri',
                  locationName: 'apiId'
                }
              },
              required: ['ApiId']
            }
          },
          DeleteApiMapping: {
            http: {
              method: 'DELETE',
              requestUri: '/v2/domainnames/{domainName}/apimappings/{apiMappingId}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              members: {
                ApiMappingId: {
                  location: 'uri',
                  locationName: 'apiMappingId'
                },
                DomainName: {
                  location: 'uri',
                  locationName: 'domainName'
                }
              },
              required: ['ApiMappingId', 'DomainName']
            }
          },
          DeleteAuthorizer: {
            http: {
              method: 'DELETE',
              requestUri: '/v2/apis/{apiId}/authorizers/{authorizerId}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              members: {
                ApiId: {
                  location: 'uri',
                  locationName: 'apiId'
                },
                AuthorizerId: {
                  location: 'uri',
                  locationName: 'authorizerId'
                }
              },
              required: ['AuthorizerId', 'ApiId']
            }
          },
          DeleteCorsConfiguration: {
            http: {
              method: 'DELETE',
              requestUri: '/v2/apis/{apiId}/cors',
              responseCode: 204
            },
            input: {
              type: 'structure',
              members: {
                ApiId: {
                  location: 'uri',
                  locationName: 'apiId'
                }
              },
              required: ['ApiId']
            }
          },
          DeleteDeployment: {
            http: {
              method: 'DELETE',
              requestUri: '/v2/apis/{apiId}/deployments/{deploymentId}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              members: {
                ApiId: {
                  location: 'uri',
                  locationName: 'apiId'
                },
                DeploymentId: {
                  location: 'uri',
                  locationName: 'deploymentId'
                }
              },
              required: ['ApiId', 'DeploymentId']
            }
          },
          DeleteDomainName: {
            http: {
              method: 'DELETE',
              requestUri: '/v2/domainnames/{domainName}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              members: {
                DomainName: {
                  location: 'uri',
                  locationName: 'domainName'
                }
              },
              required: ['DomainName']
            }
          },
          DeleteIntegration: {
            http: {
              method: 'DELETE',
              requestUri: '/v2/apis/{apiId}/integrations/{integrationId}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              members: {
                ApiId: {
                  location: 'uri',
                  locationName: 'apiId'
                },
                IntegrationId: {
                  location: 'uri',
                  locationName: 'integrationId'
                }
              },
              required: ['ApiId', 'IntegrationId']
            }
          },
          DeleteIntegrationResponse: {
            http: {
              method: 'DELETE',
              requestUri: '/v2/apis/{apiId}/integrations/{integrationId}/integrationresponses/{integrationResponseId}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              members: {
                ApiId: {
                  location: 'uri',
                  locationName: 'apiId'
                },
                IntegrationId: {
                  location: 'uri',
                  locationName: 'integrationId'
                },
                IntegrationResponseId: {
                  location: 'uri',
                  locationName: 'integrationResponseId'
                }
              },
              required: ['ApiId', 'IntegrationResponseId', 'IntegrationId']
            }
          },
          DeleteModel: {
            http: {
              method: 'DELETE',
              requestUri: '/v2/apis/{apiId}/models/{modelId}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              members: {
                ApiId: {
                  location: 'uri',
                  locationName: 'apiId'
                },
                ModelId: {
                  location: 'uri',
                  locationName: 'modelId'
                }
              },
              required: ['ModelId', 'ApiId']
            }
          },
          DeleteRoute: {
            http: {
              method: 'DELETE',
              requestUri: '/v2/apis/{apiId}/routes/{routeId}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              members: {
                ApiId: {
                  location: 'uri',
                  locationName: 'apiId'
                },
                RouteId: {
                  location: 'uri',
                  locationName: 'routeId'
                }
              },
              required: ['ApiId', 'RouteId']
            }
          },
          DeleteRouteRequestParameter: {
            http: {
              method: 'DELETE',
              requestUri: '/v2/apis/{apiId}/routes/{routeId}/requestparameters/{requestParameterKey}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              members: {
                ApiId: {
                  location: 'uri',
                  locationName: 'apiId'
                },
                RequestParameterKey: {
                  location: 'uri',
                  locationName: 'requestParameterKey'
                },
                RouteId: {
                  location: 'uri',
                  locationName: 'routeId'
                }
              },
              required: ['RequestParameterKey', 'ApiId', 'RouteId']
            }
          },
          DeleteRouteResponse: {
            http: {
              method: 'DELETE',
              requestUri: '/v2/apis/{apiId}/routes/{routeId}/routeresponses/{routeResponseId}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              members: {
                ApiId: {
                  location: 'uri',
                  locationName: 'apiId'
                },
                RouteId: {
                  location: 'uri',
                  locationName: 'routeId'
                },
                RouteResponseId: {
                  location: 'uri',
                  locationName: 'routeResponseId'
                }
              },
              required: ['RouteResponseId', 'ApiId', 'RouteId']
            }
          },
          DeleteRouteSettings: {
            http: {
              method: 'DELETE',
              requestUri: '/v2/apis/{apiId}/stages/{stageName}/routesettings/{routeKey}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              members: {
                ApiId: {
                  location: 'uri',
                  locationName: 'apiId'
                },
                RouteKey: {
                  location: 'uri',
                  locationName: 'routeKey'
                },
                StageName: {
                  location: 'uri',
                  locationName: 'stageName'
                }
              },
              required: ['StageName', 'RouteKey', 'ApiId']
            }
          },
          DeleteStage: {
            http: {
              method: 'DELETE',
              requestUri: '/v2/apis/{apiId}/stages/{stageName}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              members: {
                ApiId: {
                  location: 'uri',
                  locationName: 'apiId'
                },
                StageName: {
                  location: 'uri',
                  locationName: 'stageName'
                }
              },
              required: ['StageName', 'ApiId']
            }
          },
          DeleteVpcLink: {
            http: {
              method: 'DELETE',
              requestUri: '/v2/vpclinks/{vpcLinkId}',
              responseCode: 202
            },
            input: {
              type: 'structure',
              members: {
                VpcLinkId: {
                  location: 'uri',
                  locationName: 'vpcLinkId'
                }
              },
              required: ['VpcLinkId']
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          ExportApi: {
            http: {
              method: 'GET',
              requestUri: '/v2/apis/{apiId}/exports/{specification}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ApiId: {
                  location: 'uri',
                  locationName: 'apiId'
                },
                ExportVersion: {
                  location: 'querystring',
                  locationName: 'exportVersion'
                },
                IncludeExtensions: {
                  location: 'querystring',
                  locationName: 'includeExtensions',
                  type: 'boolean'
                },
                OutputType: {
                  location: 'querystring',
                  locationName: 'outputType'
                },
                Specification: {
                  location: 'uri',
                  locationName: 'specification'
                },
                StageName: {
                  location: 'querystring',
                  locationName: 'stageName'
                }
              },
              required: ['Specification', 'OutputType', 'ApiId']
            },
            output: {
              type: 'structure',
              members: {
                body: {
                  type: 'blob'
                }
              },
              payload: 'body'
            }
          },
          ResetAuthorizersCache: {
            http: {
              method: 'DELETE',
              requestUri: '/v2/apis/{apiId}/stages/{stageName}/cache/authorizers',
              responseCode: 204
            },
            input: {
              type: 'structure',
              members: {
                ApiId: {
                  location: 'uri',
                  locationName: 'apiId'
                },
                StageName: {
                  location: 'uri',
                  locationName: 'stageName'
                }
              },
              required: ['StageName', 'ApiId']
            }
          },
          GetApi: {
            http: {
              method: 'GET',
              requestUri: '/v2/apis/{apiId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ApiId: {
                  location: 'uri',
                  locationName: 'apiId'
                }
              },
              required: ['ApiId']
            },
            output: {
              type: 'structure',
              members: {
                ApiEndpoint: {
                  locationName: 'apiEndpoint'
                },
                ApiGatewayManaged: {
                  locationName: 'apiGatewayManaged',
                  type: 'boolean'
                },
                ApiId: {
                  locationName: 'apiId'
                },
                ApiKeySelectionExpression: {
                  locationName: 'apiKeySelectionExpression'
                },
                CorsConfiguration: {
                  shape: 'S3',
                  locationName: 'corsConfiguration'
                },
                CreatedDate: {
                  shape: 'Sl',
                  locationName: 'createdDate'
                },
                Description: {
                  locationName: 'description'
                },
                DisableSchemaValidation: {
                  locationName: 'disableSchemaValidation',
                  type: 'boolean'
                },
                DisableExecuteApiEndpoint: {
                  locationName: 'disableExecuteApiEndpoint',
                  type: 'boolean'
                },
                ImportInfo: {
                  shape: 'Sm',
                  locationName: 'importInfo'
                },
                Name: {
                  locationName: 'name'
                },
                ProtocolType: {
                  locationName: 'protocolType'
                },
                RouteSelectionExpression: {
                  locationName: 'routeSelectionExpression'
                },
                Tags: {
                  shape: 'Sg',
                  locationName: 'tags'
                },
                Version: {
                  locationName: 'version'
                },
                Warnings: {
                  shape: 'Sm',
                  locationName: 'warnings'
                }
              }
            }
          },
          GetApiMapping: {
            http: {
              method: 'GET',
              requestUri: '/v2/domainnames/{domainName}/apimappings/{apiMappingId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ApiMappingId: {
                  location: 'uri',
                  locationName: 'apiMappingId'
                },
                DomainName: {
                  location: 'uri',
                  locationName: 'domainName'
                }
              },
              required: ['ApiMappingId', 'DomainName']
            },
            output: {
              type: 'structure',
              members: {
                ApiId: {
                  locationName: 'apiId'
                },
                ApiMappingId: {
                  locationName: 'apiMappingId'
                },
                ApiMappingKey: {
                  locationName: 'apiMappingKey'
                },
                Stage: {
                  locationName: 'stage'
                }
              }
            }
          },
          GetApiMappings: {
            http: {
              method: 'GET',
              requestUri: '/v2/domainnames/{domainName}/apimappings',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                DomainName: {
                  location: 'uri',
                  locationName: 'domainName'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                }
              },
              required: ['DomainName']
            },
            output: {
              type: 'structure',
              members: {
                Items: {
                  locationName: 'items',
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ApiId: {
                        locationName: 'apiId'
                      },
                      ApiMappingId: {
                        locationName: 'apiMappingId'
                      },
                      ApiMappingKey: {
                        locationName: 'apiMappingKey'
                      },
                      Stage: {
                        locationName: 'stage'
                      }
                    },
                    required: ['Stage', 'ApiId']
                  }
                },
                NextToken: {
                  locationName: 'nextToken'
                }
              }
            }
          },
          GetApis: {
            http: {
              method: 'GET',
              requestUri: '/v2/apis',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Items: {
                  locationName: 'items',
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ApiEndpoint: {
                        locationName: 'apiEndpoint'
                      },
                      ApiGatewayManaged: {
                        locationName: 'apiGatewayManaged',
                        type: 'boolean'
                      },
                      ApiId: {
                        locationName: 'apiId'
                      },
                      ApiKeySelectionExpression: {
                        locationName: 'apiKeySelectionExpression'
                      },
                      CorsConfiguration: {
                        shape: 'S3',
                        locationName: 'corsConfiguration'
                      },
                      CreatedDate: {
                        shape: 'Sl',
                        locationName: 'createdDate'
                      },
                      Description: {
                        locationName: 'description'
                      },
                      DisableSchemaValidation: {
                        locationName: 'disableSchemaValidation',
                        type: 'boolean'
                      },
                      DisableExecuteApiEndpoint: {
                        locationName: 'disableExecuteApiEndpoint',
                        type: 'boolean'
                      },
                      ImportInfo: {
                        shape: 'Sm',
                        locationName: 'importInfo'
                      },
                      Name: {
                        locationName: 'name'
                      },
                      ProtocolType: {
                        locationName: 'protocolType'
                      },
                      RouteSelectionExpression: {
                        locationName: 'routeSelectionExpression'
                      },
                      Tags: {
                        shape: 'Sg',
                        locationName: 'tags'
                      },
                      Version: {
                        locationName: 'version'
                      },
                      Warnings: {
                        shape: 'Sm',
                        locationName: 'warnings'
                      }
                    },
                    required: ['RouteSelectionExpression', 'Name', 'ProtocolType']
                  }
                },
                NextToken: {
                  locationName: 'nextToken'
                }
              }
            }
          },
          GetAuthorizer: {
            http: {
              method: 'GET',
              requestUri: '/v2/apis/{apiId}/authorizers/{authorizerId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ApiId: {
                  location: 'uri',
                  locationName: 'apiId'
                },
                AuthorizerId: {
                  location: 'uri',
                  locationName: 'authorizerId'
                }
              },
              required: ['AuthorizerId', 'ApiId']
            },
            output: {
              type: 'structure',
              members: {
                AuthorizerCredentialsArn: {
                  locationName: 'authorizerCredentialsArn'
                },
                AuthorizerId: {
                  locationName: 'authorizerId'
                },
                AuthorizerPayloadFormatVersion: {
                  locationName: 'authorizerPayloadFormatVersion'
                },
                AuthorizerResultTtlInSeconds: {
                  locationName: 'authorizerResultTtlInSeconds',
                  type: 'integer'
                },
                AuthorizerType: {
                  locationName: 'authorizerType'
                },
                AuthorizerUri: {
                  locationName: 'authorizerUri'
                },
                EnableSimpleResponses: {
                  locationName: 'enableSimpleResponses',
                  type: 'boolean'
                },
                IdentitySource: {
                  shape: 'Ss',
                  locationName: 'identitySource'
                },
                IdentityValidationExpression: {
                  locationName: 'identityValidationExpression'
                },
                JwtConfiguration: {
                  shape: 'St',
                  locationName: 'jwtConfiguration'
                },
                Name: {
                  locationName: 'name'
                }
              }
            }
          },
          GetAuthorizers: {
            http: {
              method: 'GET',
              requestUri: '/v2/apis/{apiId}/authorizers',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ApiId: {
                  location: 'uri',
                  locationName: 'apiId'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                }
              },
              required: ['ApiId']
            },
            output: {
              type: 'structure',
              members: {
                Items: {
                  locationName: 'items',
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      AuthorizerCredentialsArn: {
                        locationName: 'authorizerCredentialsArn'
                      },
                      AuthorizerId: {
                        locationName: 'authorizerId'
                      },
                      AuthorizerPayloadFormatVersion: {
                        locationName: 'authorizerPayloadFormatVersion'
                      },
                      AuthorizerResultTtlInSeconds: {
                        locationName: 'authorizerResultTtlInSeconds',
                        type: 'integer'
                      },
                      AuthorizerType: {
                        locationName: 'authorizerType'
                      },
                      AuthorizerUri: {
                        locationName: 'authorizerUri'
                      },
                      EnableSimpleResponses: {
                        locationName: 'enableSimpleResponses',
                        type: 'boolean'
                      },
                      IdentitySource: {
                        shape: 'Ss',
                        locationName: 'identitySource'
                      },
                      IdentityValidationExpression: {
                        locationName: 'identityValidationExpression'
                      },
                      JwtConfiguration: {
                        shape: 'St',
                        locationName: 'jwtConfiguration'
                      },
                      Name: {
                        locationName: 'name'
                      }
                    },
                    required: ['Name']
                  }
                },
                NextToken: {
                  locationName: 'nextToken'
                }
              }
            }
          },
          GetDeployment: {
            http: {
              method: 'GET',
              requestUri: '/v2/apis/{apiId}/deployments/{deploymentId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ApiId: {
                  location: 'uri',
                  locationName: 'apiId'
                },
                DeploymentId: {
                  location: 'uri',
                  locationName: 'deploymentId'
                }
              },
              required: ['ApiId', 'DeploymentId']
            },
            output: {
              type: 'structure',
              members: {
                AutoDeployed: {
                  locationName: 'autoDeployed',
                  type: 'boolean'
                },
                CreatedDate: {
                  shape: 'Sl',
                  locationName: 'createdDate'
                },
                DeploymentId: {
                  locationName: 'deploymentId'
                },
                DeploymentStatus: {
                  locationName: 'deploymentStatus'
                },
                DeploymentStatusMessage: {
                  locationName: 'deploymentStatusMessage'
                },
                Description: {
                  locationName: 'description'
                }
              }
            }
          },
          GetDeployments: {
            http: {
              method: 'GET',
              requestUri: '/v2/apis/{apiId}/deployments',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ApiId: {
                  location: 'uri',
                  locationName: 'apiId'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                }
              },
              required: ['ApiId']
            },
            output: {
              type: 'structure',
              members: {
                Items: {
                  locationName: 'items',
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      AutoDeployed: {
                        locationName: 'autoDeployed',
                        type: 'boolean'
                      },
                      CreatedDate: {
                        shape: 'Sl',
                        locationName: 'createdDate'
                      },
                      DeploymentId: {
                        locationName: 'deploymentId'
                      },
                      DeploymentStatus: {
                        locationName: 'deploymentStatus'
                      },
                      DeploymentStatusMessage: {
                        locationName: 'deploymentStatusMessage'
                      },
                      Description: {
                        locationName: 'description'
                      }
                    }
                  }
                },
                NextToken: {
                  locationName: 'nextToken'
                }
              }
            }
          },
          GetDomainName: {
            http: {
              method: 'GET',
              requestUri: '/v2/domainnames/{domainName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                DomainName: {
                  location: 'uri',
                  locationName: 'domainName'
                }
              },
              required: ['DomainName']
            },
            output: {
              type: 'structure',
              members: {
                ApiMappingSelectionExpression: {
                  locationName: 'apiMappingSelectionExpression'
                },
                DomainName: {
                  locationName: 'domainName'
                },
                DomainNameConfigurations: {
                  shape: 'S10',
                  locationName: 'domainNameConfigurations'
                },
                MutualTlsAuthentication: {
                  shape: 'S17',
                  locationName: 'mutualTlsAuthentication'
                },
                Tags: {
                  shape: 'Sg',
                  locationName: 'tags'
                }
              }
            }
          },
          GetDomainNames: {
            http: {
              method: 'GET',
              requestUri: '/v2/domainnames',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Items: {
                  locationName: 'items',
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ApiMappingSelectionExpression: {
                        locationName: 'apiMappingSelectionExpression'
                      },
                      DomainName: {
                        locationName: 'domainName'
                      },
                      DomainNameConfigurations: {
                        shape: 'S10',
                        locationName: 'domainNameConfigurations'
                      },
                      MutualTlsAuthentication: {
                        shape: 'S17',
                        locationName: 'mutualTlsAuthentication'
                      },
                      Tags: {
                        shape: 'Sg',
                        locationName: 'tags'
                      }
                    },
                    required: ['DomainName']
                  }
                },
                NextToken: {
                  locationName: 'nextToken'
                }
              }
            }
          },
          GetIntegration: {
            http: {
              method: 'GET',
              requestUri: '/v2/apis/{apiId}/integrations/{integrationId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ApiId: {
                  location: 'uri',
                  locationName: 'apiId'
                },
                IntegrationId: {
                  location: 'uri',
                  locationName: 'integrationId'
                }
              },
              required: ['ApiId', 'IntegrationId']
            },
            output: {
              type: 'structure',
              members: {
                ApiGatewayManaged: {
                  locationName: 'apiGatewayManaged',
                  type: 'boolean'
                },
                ConnectionId: {
                  locationName: 'connectionId'
                },
                ConnectionType: {
                  locationName: 'connectionType'
                },
                ContentHandlingStrategy: {
                  locationName: 'contentHandlingStrategy'
                },
                CredentialsArn: {
                  locationName: 'credentialsArn'
                },
                Description: {
                  locationName: 'description'
                },
                IntegrationId: {
                  locationName: 'integrationId'
                },
                IntegrationMethod: {
                  locationName: 'integrationMethod'
                },
                IntegrationResponseSelectionExpression: {
                  locationName: 'integrationResponseSelectionExpression'
                },
                IntegrationSubtype: {
                  locationName: 'integrationSubtype'
                },
                IntegrationType: {
                  locationName: 'integrationType'
                },
                IntegrationUri: {
                  locationName: 'integrationUri'
                },
                PassthroughBehavior: {
                  locationName: 'passthroughBehavior'
                },
                PayloadFormatVersion: {
                  locationName: 'payloadFormatVersion'
                },
                RequestParameters: {
                  shape: 'S1e',
                  locationName: 'requestParameters'
                },
                RequestTemplates: {
                  shape: 'S1f',
                  locationName: 'requestTemplates'
                },
                ResponseParameters: {
                  shape: 'S1h',
                  locationName: 'responseParameters'
                },
                TemplateSelectionExpression: {
                  locationName: 'templateSelectionExpression'
                },
                TimeoutInMillis: {
                  locationName: 'timeoutInMillis',
                  type: 'integer'
                },
                TlsConfig: {
                  shape: 'S1l',
                  locationName: 'tlsConfig'
                }
              }
            }
          },
          GetIntegrationResponse: {
            http: {
              method: 'GET',
              requestUri: '/v2/apis/{apiId}/integrations/{integrationId}/integrationresponses/{integrationResponseId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ApiId: {
                  location: 'uri',
                  locationName: 'apiId'
                },
                IntegrationId: {
                  location: 'uri',
                  locationName: 'integrationId'
                },
                IntegrationResponseId: {
                  location: 'uri',
                  locationName: 'integrationResponseId'
                }
              },
              required: ['ApiId', 'IntegrationResponseId', 'IntegrationId']
            },
            output: {
              type: 'structure',
              members: {
                ContentHandlingStrategy: {
                  locationName: 'contentHandlingStrategy'
                },
                IntegrationResponseId: {
                  locationName: 'integrationResponseId'
                },
                IntegrationResponseKey: {
                  locationName: 'integrationResponseKey'
                },
                ResponseParameters: {
                  shape: 'S1e',
                  locationName: 'responseParameters'
                },
                ResponseTemplates: {
                  shape: 'S1f',
                  locationName: 'responseTemplates'
                },
                TemplateSelectionExpression: {
                  locationName: 'templateSelectionExpression'
                }
              }
            }
          },
          GetIntegrationResponses: {
            http: {
              method: 'GET',
              requestUri: '/v2/apis/{apiId}/integrations/{integrationId}/integrationresponses',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ApiId: {
                  location: 'uri',
                  locationName: 'apiId'
                },
                IntegrationId: {
                  location: 'uri',
                  locationName: 'integrationId'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                }
              },
              required: ['IntegrationId', 'ApiId']
            },
            output: {
              type: 'structure',
              members: {
                Items: {
                  locationName: 'items',
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ContentHandlingStrategy: {
                        locationName: 'contentHandlingStrategy'
                      },
                      IntegrationResponseId: {
                        locationName: 'integrationResponseId'
                      },
                      IntegrationResponseKey: {
                        locationName: 'integrationResponseKey'
                      },
                      ResponseParameters: {
                        shape: 'S1e',
                        locationName: 'responseParameters'
                      },
                      ResponseTemplates: {
                        shape: 'S1f',
                        locationName: 'responseTemplates'
                      },
                      TemplateSelectionExpression: {
                        locationName: 'templateSelectionExpression'
                      }
                    },
                    required: ['IntegrationResponseKey']
                  }
                },
                NextToken: {
                  locationName: 'nextToken'
                }
              }
            }
          },
          GetIntegrations: {
            http: {
              method: 'GET',
              requestUri: '/v2/apis/{apiId}/integrations',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ApiId: {
                  location: 'uri',
                  locationName: 'apiId'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                }
              },
              required: ['ApiId']
            },
            output: {
              type: 'structure',
              members: {
                Items: {
                  locationName: 'items',
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ApiGatewayManaged: {
                        locationName: 'apiGatewayManaged',
                        type: 'boolean'
                      },
                      ConnectionId: {
                        locationName: 'connectionId'
                      },
                      ConnectionType: {
                        locationName: 'connectionType'
                      },
                      ContentHandlingStrategy: {
                        locationName: 'contentHandlingStrategy'
                      },
                      CredentialsArn: {
                        locationName: 'credentialsArn'
                      },
                      Description: {
                        locationName: 'description'
                      },
                      IntegrationId: {
                        locationName: 'integrationId'
                      },
                      IntegrationMethod: {
                        locationName: 'integrationMethod'
                      },
                      IntegrationResponseSelectionExpression: {
                        locationName: 'integrationResponseSelectionExpression'
                      },
                      IntegrationSubtype: {
                        locationName: 'integrationSubtype'
                      },
                      IntegrationType: {
                        locationName: 'integrationType'
                      },
                      IntegrationUri: {
                        locationName: 'integrationUri'
                      },
                      PassthroughBehavior: {
                        locationName: 'passthroughBehavior'
                      },
                      PayloadFormatVersion: {
                        locationName: 'payloadFormatVersion'
                      },
                      RequestParameters: {
                        shape: 'S1e',
                        locationName: 'requestParameters'
                      },
                      RequestTemplates: {
                        shape: 'S1f',
                        locationName: 'requestTemplates'
                      },
                      ResponseParameters: {
                        shape: 'S1h',
                        locationName: 'responseParameters'
                      },
                      TemplateSelectionExpression: {
                        locationName: 'templateSelectionExpression'
                      },
                      TimeoutInMillis: {
                        locationName: 'timeoutInMillis',
                        type: 'integer'
                      },
                      TlsConfig: {
                        shape: 'S1l',
                        locationName: 'tlsConfig'
                      }
                    }
                  }
                },
                NextToken: {
                  locationName: 'nextToken'
                }
              }
            }
          },
          GetModel: {
            http: {
              method: 'GET',
              requestUri: '/v2/apis/{apiId}/models/{modelId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ApiId: {
                  location: 'uri',
                  locationName: 'apiId'
                },
                ModelId: {
                  location: 'uri',
                  locationName: 'modelId'
                }
              },
              required: ['ModelId', 'ApiId']
            },
            output: {
              type: 'structure',
              members: {
                ContentType: {
                  locationName: 'contentType'
                },
                Description: {
                  locationName: 'description'
                },
                ModelId: {
                  locationName: 'modelId'
                },
                Name: {
                  locationName: 'name'
                },
                Schema: {
                  locationName: 'schema'
                }
              }
            }
          },
          GetModelTemplate: {
            http: {
              method: 'GET',
              requestUri: '/v2/apis/{apiId}/models/{modelId}/template',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ApiId: {
                  location: 'uri',
                  locationName: 'apiId'
                },
                ModelId: {
                  location: 'uri',
                  locationName: 'modelId'
                }
              },
              required: ['ModelId', 'ApiId']
            },
            output: {
              type: 'structure',
              members: {
                Value: {
                  locationName: 'value'
                }
              }
            }
          },
          GetModels: {
            http: {
              method: 'GET',
              requestUri: '/v2/apis/{apiId}/models',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ApiId: {
                  location: 'uri',
                  locationName: 'apiId'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                }
              },
              required: ['ApiId']
            },
            output: {
              type: 'structure',
              members: {
                Items: {
                  locationName: 'items',
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ContentType: {
                        locationName: 'contentType'
                      },
                      Description: {
                        locationName: 'description'
                      },
                      ModelId: {
                        locationName: 'modelId'
                      },
                      Name: {
                        locationName: 'name'
                      },
                      Schema: {
                        locationName: 'schema'
                      }
                    },
                    required: ['Name']
                  }
                },
                NextToken: {
                  locationName: 'nextToken'
                }
              }
            }
          },
          GetRoute: {
            http: {
              method: 'GET',
              requestUri: '/v2/apis/{apiId}/routes/{routeId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ApiId: {
                  location: 'uri',
                  locationName: 'apiId'
                },
                RouteId: {
                  location: 'uri',
                  locationName: 'routeId'
                }
              },
              required: ['ApiId', 'RouteId']
            },
            output: {
              type: 'structure',
              members: {
                ApiGatewayManaged: {
                  locationName: 'apiGatewayManaged',
                  type: 'boolean'
                },
                ApiKeyRequired: {
                  locationName: 'apiKeyRequired',
                  type: 'boolean'
                },
                AuthorizationScopes: {
                  shape: 'S1s',
                  locationName: 'authorizationScopes'
                },
                AuthorizationType: {
                  locationName: 'authorizationType'
                },
                AuthorizerId: {
                  locationName: 'authorizerId'
                },
                ModelSelectionExpression: {
                  locationName: 'modelSelectionExpression'
                },
                OperationName: {
                  locationName: 'operationName'
                },
                RequestModels: {
                  shape: 'S1u',
                  locationName: 'requestModels'
                },
                RequestParameters: {
                  shape: 'S1v',
                  locationName: 'requestParameters'
                },
                RouteId: {
                  locationName: 'routeId'
                },
                RouteKey: {
                  locationName: 'routeKey'
                },
                RouteResponseSelectionExpression: {
                  locationName: 'routeResponseSelectionExpression'
                },
                Target: {
                  locationName: 'target'
                }
              }
            }
          },
          GetRouteResponse: {
            http: {
              method: 'GET',
              requestUri: '/v2/apis/{apiId}/routes/{routeId}/routeresponses/{routeResponseId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ApiId: {
                  location: 'uri',
                  locationName: 'apiId'
                },
                RouteId: {
                  location: 'uri',
                  locationName: 'routeId'
                },
                RouteResponseId: {
                  location: 'uri',
                  locationName: 'routeResponseId'
                }
              },
              required: ['RouteResponseId', 'ApiId', 'RouteId']
            },
            output: {
              type: 'structure',
              members: {
                ModelSelectionExpression: {
                  locationName: 'modelSelectionExpression'
                },
                ResponseModels: {
                  shape: 'S1u',
                  locationName: 'responseModels'
                },
                ResponseParameters: {
                  shape: 'S1v',
                  locationName: 'responseParameters'
                },
                RouteResponseId: {
                  locationName: 'routeResponseId'
                },
                RouteResponseKey: {
                  locationName: 'routeResponseKey'
                }
              }
            }
          },
          GetRouteResponses: {
            http: {
              method: 'GET',
              requestUri: '/v2/apis/{apiId}/routes/{routeId}/routeresponses',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ApiId: {
                  location: 'uri',
                  locationName: 'apiId'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                RouteId: {
                  location: 'uri',
                  locationName: 'routeId'
                }
              },
              required: ['RouteId', 'ApiId']
            },
            output: {
              type: 'structure',
              members: {
                Items: {
                  locationName: 'items',
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ModelSelectionExpression: {
                        locationName: 'modelSelectionExpression'
                      },
                      ResponseModels: {
                        shape: 'S1u',
                        locationName: 'responseModels'
                      },
                      ResponseParameters: {
                        shape: 'S1v',
                        locationName: 'responseParameters'
                      },
                      RouteResponseId: {
                        locationName: 'routeResponseId'
                      },
                      RouteResponseKey: {
                        locationName: 'routeResponseKey'
                      }
                    },
                    required: ['RouteResponseKey']
                  }
                },
                NextToken: {
                  locationName: 'nextToken'
                }
              }
            }
          },
          GetRoutes: {
            http: {
              method: 'GET',
              requestUri: '/v2/apis/{apiId}/routes',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ApiId: {
                  location: 'uri',
                  locationName: 'apiId'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                }
              },
              required: ['ApiId']
            },
            output: {
              type: 'structure',
              members: {
                Items: {
                  locationName: 'items',
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ApiGatewayManaged: {
                        locationName: 'apiGatewayManaged',
                        type: 'boolean'
                      },
                      ApiKeyRequired: {
                        locationName: 'apiKeyRequired',
                        type: 'boolean'
                      },
                      AuthorizationScopes: {
                        shape: 'S1s',
                        locationName: 'authorizationScopes'
                      },
                      AuthorizationType: {
                        locationName: 'authorizationType'
                      },
                      AuthorizerId: {
                        locationName: 'authorizerId'
                      },
                      ModelSelectionExpression: {
                        locationName: 'modelSelectionExpression'
                      },
                      OperationName: {
                        locationName: 'operationName'
                      },
                      RequestModels: {
                        shape: 'S1u',
                        locationName: 'requestModels'
                      },
                      RequestParameters: {
                        shape: 'S1v',
                        locationName: 'requestParameters'
                      },
                      RouteId: {
                        locationName: 'routeId'
                      },
                      RouteKey: {
                        locationName: 'routeKey'
                      },
                      RouteResponseSelectionExpression: {
                        locationName: 'routeResponseSelectionExpression'
                      },
                      Target: {
                        locationName: 'target'
                      }
                    },
                    required: ['RouteKey']
                  }
                },
                NextToken: {
                  locationName: 'nextToken'
                }
              }
            }
          },
          GetStage: {
            http: {
              method: 'GET',
              requestUri: '/v2/apis/{apiId}/stages/{stageName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ApiId: {
                  location: 'uri',
                  locationName: 'apiId'
                },
                StageName: {
                  location: 'uri',
                  locationName: 'stageName'
                }
              },
              required: ['StageName', 'ApiId']
            },
            output: {
              type: 'structure',
              members: {
                AccessLogSettings: {
                  shape: 'S21',
                  locationName: 'accessLogSettings'
                },
                ApiGatewayManaged: {
                  locationName: 'apiGatewayManaged',
                  type: 'boolean'
                },
                AutoDeploy: {
                  locationName: 'autoDeploy',
                  type: 'boolean'
                },
                ClientCertificateId: {
                  locationName: 'clientCertificateId'
                },
                CreatedDate: {
                  shape: 'Sl',
                  locationName: 'createdDate'
                },
                DefaultRouteSettings: {
                  shape: 'S22',
                  locationName: 'defaultRouteSettings'
                },
                DeploymentId: {
                  locationName: 'deploymentId'
                },
                Description: {
                  locationName: 'description'
                },
                LastDeploymentStatusMessage: {
                  locationName: 'lastDeploymentStatusMessage'
                },
                LastUpdatedDate: {
                  shape: 'Sl',
                  locationName: 'lastUpdatedDate'
                },
                RouteSettings: {
                  shape: 'S26',
                  locationName: 'routeSettings'
                },
                StageName: {
                  locationName: 'stageName'
                },
                StageVariables: {
                  shape: 'S27',
                  locationName: 'stageVariables'
                },
                Tags: {
                  shape: 'Sg',
                  locationName: 'tags'
                }
              }
            }
          },
          GetStages: {
            http: {
              method: 'GET',
              requestUri: '/v2/apis/{apiId}/stages',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ApiId: {
                  location: 'uri',
                  locationName: 'apiId'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                }
              },
              required: ['ApiId']
            },
            output: {
              type: 'structure',
              members: {
                Items: {
                  locationName: 'items',
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      AccessLogSettings: {
                        shape: 'S21',
                        locationName: 'accessLogSettings'
                      },
                      ApiGatewayManaged: {
                        locationName: 'apiGatewayManaged',
                        type: 'boolean'
                      },
                      AutoDeploy: {
                        locationName: 'autoDeploy',
                        type: 'boolean'
                      },
                      ClientCertificateId: {
                        locationName: 'clientCertificateId'
                      },
                      CreatedDate: {
                        shape: 'Sl',
                        locationName: 'createdDate'
                      },
                      DefaultRouteSettings: {
                        shape: 'S22',
                        locationName: 'defaultRouteSettings'
                      },
                      DeploymentId: {
                        locationName: 'deploymentId'
                      },
                      Description: {
                        locationName: 'description'
                      },
                      LastDeploymentStatusMessage: {
                        locationName: 'lastDeploymentStatusMessage'
                      },
                      LastUpdatedDate: {
                        shape: 'Sl',
                        locationName: 'lastUpdatedDate'
                      },
                      RouteSettings: {
                        shape: 'S26',
                        locationName: 'routeSettings'
                      },
                      StageName: {
                        locationName: 'stageName'
                      },
                      StageVariables: {
                        shape: 'S27',
                        locationName: 'stageVariables'
                      },
                      Tags: {
                        shape: 'Sg',
                        locationName: 'tags'
                      }
                    },
                    required: ['StageName']
                  }
                },
                NextToken: {
                  locationName: 'nextToken'
                }
              }
            }
          },
          GetTags: {
            http: {
              method: 'GET',
              requestUri: '/v2/tags/{resource-arn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ResourceArn: {
                  location: 'uri',
                  locationName: 'resource-arn'
                }
              },
              required: ['ResourceArn']
            },
            output: {
              type: 'structure',
              members: {
                Tags: {
                  shape: 'Sg',
                  locationName: 'tags'
                }
              }
            }
          },
          GetVpcLink: {
            http: {
              method: 'GET',
              requestUri: '/v2/vpclinks/{vpcLinkId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                VpcLinkId: {
                  location: 'uri',
                  locationName: 'vpcLinkId'
                }
              },
              required: ['VpcLinkId']
            },
            output: {
              type: 'structure',
              members: {
                CreatedDate: {
                  shape: 'Sl',
                  locationName: 'createdDate'
                },
                Name: {
                  locationName: 'name'
                },
                SecurityGroupIds: {
                  shape: 'S2b',
                  locationName: 'securityGroupIds'
                },
                SubnetIds: {
                  shape: 'S2c',
                  locationName: 'subnetIds'
                },
                Tags: {
                  shape: 'Sg',
                  locationName: 'tags'
                },
                VpcLinkId: {
                  locationName: 'vpcLinkId'
                },
                VpcLinkStatus: {
                  locationName: 'vpcLinkStatus'
                },
                VpcLinkStatusMessage: {
                  locationName: 'vpcLinkStatusMessage'
                },
                VpcLinkVersion: {
                  locationName: 'vpcLinkVersion'
                }
              }
            }
          },
          GetVpcLinks: {
            http: {
              method: 'GET',
              requestUri: '/v2/vpclinks',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Items: {
                  locationName: 'items',
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      CreatedDate: {
                        shape: 'Sl',
                        locationName: 'createdDate'
                      },
                      Name: {
                        locationName: 'name'
                      },
                      SecurityGroupIds: {
                        shape: 'S2b',
                        locationName: 'securityGroupIds'
                      },
                      SubnetIds: {
                        shape: 'S2c',
                        locationName: 'subnetIds'
                      },
                      Tags: {
                        shape: 'Sg',
                        locationName: 'tags'
                      },
                      VpcLinkId: {
                        locationName: 'vpcLinkId'
                      },
                      VpcLinkStatus: {
                        locationName: 'vpcLinkStatus'
                      },
                      VpcLinkStatusMessage: {
                        locationName: 'vpcLinkStatusMessage'
                      },
                      VpcLinkVersion: {
                        locationName: 'vpcLinkVersion'
                      }
                    },
                    required: ['VpcLinkId', 'SecurityGroupIds', 'SubnetIds', 'Name']
                  }
                },
                NextToken: {
                  locationName: 'nextToken'
                }
              }
            }
          },
          ImportApi: {
            http: {
              method: 'PUT',
              requestUri: '/v2/apis',
              responseCode: 201
            },
            input: {
              type: 'structure',
              members: {
                Basepath: {
                  location: 'querystring',
                  locationName: 'basepath'
                },
                Body: {
                  locationName: 'body'
                },
                FailOnWarnings: {
                  location: 'querystring',
                  locationName: 'failOnWarnings',
                  type: 'boolean'
                }
              },
              required: ['Body']
            },
            output: {
              type: 'structure',
              members: {
                ApiEndpoint: {
                  locationName: 'apiEndpoint'
                },
                ApiGatewayManaged: {
                  locationName: 'apiGatewayManaged',
                  type: 'boolean'
                },
                ApiId: {
                  locationName: 'apiId'
                },
                ApiKeySelectionExpression: {
                  locationName: 'apiKeySelectionExpression'
                },
                CorsConfiguration: {
                  shape: 'S3',
                  locationName: 'corsConfiguration'
                },
                CreatedDate: {
                  shape: 'Sl',
                  locationName: 'createdDate'
                },
                Description: {
                  locationName: 'description'
                },
                DisableSchemaValidation: {
                  locationName: 'disableSchemaValidation',
                  type: 'boolean'
                },
                DisableExecuteApiEndpoint: {
                  locationName: 'disableExecuteApiEndpoint',
                  type: 'boolean'
                },
                ImportInfo: {
                  shape: 'Sm',
                  locationName: 'importInfo'
                },
                Name: {
                  locationName: 'name'
                },
                ProtocolType: {
                  locationName: 'protocolType'
                },
                RouteSelectionExpression: {
                  locationName: 'routeSelectionExpression'
                },
                Tags: {
                  shape: 'Sg',
                  locationName: 'tags'
                },
                Version: {
                  locationName: 'version'
                },
                Warnings: {
                  shape: 'Sm',
                  locationName: 'warnings'
                }
              }
            }
          },
          ReimportApi: {
            http: {
              method: 'PUT',
              requestUri: '/v2/apis/{apiId}',
              responseCode: 201
            },
            input: {
              type: 'structure',
              members: {
                ApiId: {
                  location: 'uri',
                  locationName: 'apiId'
                },
                Basepath: {
                  location: 'querystring',
                  locationName: 'basepath'
                },
                Body: {
                  locationName: 'body'
                },
                FailOnWarnings: {
                  location: 'querystring',
                  locationName: 'failOnWarnings',
                  type: 'boolean'
                }
              },
              required: ['ApiId', 'Body']
            },
            output: {
              type: 'structure',
              members: {
                ApiEndpoint: {
                  locationName: 'apiEndpoint'
                },
                ApiGatewayManaged: {
                  locationName: 'apiGatewayManaged',
                  type: 'boolean'
                },
                ApiId: {
                  locationName: 'apiId'
                },
                ApiKeySelectionExpression: {
                  locationName: 'apiKeySelectionExpression'
                },
                CorsConfiguration: {
                  shape: 'S3',
                  locationName: 'corsConfiguration'
                },
                CreatedDate: {
                  shape: 'Sl',
                  locationName: 'createdDate'
                },
                Description: {
                  locationName: 'description'
                },
                DisableSchemaValidation: {
                  locationName: 'disableSchemaValidation',
                  type: 'boolean'
                },
                DisableExecuteApiEndpoint: {
                  locationName: 'disableExecuteApiEndpoint',
                  type: 'boolean'
                },
                ImportInfo: {
                  shape: 'Sm',
                  locationName: 'importInfo'
                },
                Name: {
                  locationName: 'name'
                },
                ProtocolType: {
                  locationName: 'protocolType'
                },
                RouteSelectionExpression: {
                  locationName: 'routeSelectionExpression'
                },
                Tags: {
                  shape: 'Sg',
                  locationName: 'tags'
                },
                Version: {
                  locationName: 'version'
                },
                Warnings: {
                  shape: 'Sm',
                  locationName: 'warnings'
                }
              }
            }
          },
          TagResource: {
            http: {
              requestUri: '/v2/tags/{resource-arn}',
              responseCode: 201
            },
            input: {
              type: 'structure',
              members: {
                ResourceArn: {
                  location: 'uri',
                  locationName: 'resource-arn'
                },
                Tags: {
                  shape: 'Sg',
                  locationName: 'tags'
                }
              },
              required: ['ResourceArn']
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UntagResource: {
            http: {
              method: 'DELETE',
              requestUri: '/v2/tags/{resource-arn}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              members: {
                ResourceArn: {
                  location: 'uri',
                  locationName: 'resource-arn'
                },
                TagKeys: {
                  shape: 'Sm',
                  location: 'querystring',
                  locationName: 'tagKeys'
                }
              },
              required: ['ResourceArn', 'TagKeys']
            }
          },
          UpdateApi: {
            http: {
              method: 'PATCH',
              requestUri: '/v2/apis/{apiId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ApiId: {
                  location: 'uri',
                  locationName: 'apiId'
                },
                ApiKeySelectionExpression: {
                  locationName: 'apiKeySelectionExpression'
                },
                CorsConfiguration: {
                  shape: 'S3',
                  locationName: 'corsConfiguration'
                },
                CredentialsArn: {
                  locationName: 'credentialsArn'
                },
                Description: {
                  locationName: 'description'
                },
                DisableSchemaValidation: {
                  locationName: 'disableSchemaValidation',
                  type: 'boolean'
                },
                DisableExecuteApiEndpoint: {
                  locationName: 'disableExecuteApiEndpoint',
                  type: 'boolean'
                },
                Name: {
                  locationName: 'name'
                },
                RouteKey: {
                  locationName: 'routeKey'
                },
                RouteSelectionExpression: {
                  locationName: 'routeSelectionExpression'
                },
                Target: {
                  locationName: 'target'
                },
                Version: {
                  locationName: 'version'
                }
              },
              required: ['ApiId']
            },
            output: {
              type: 'structure',
              members: {
                ApiEndpoint: {
                  locationName: 'apiEndpoint'
                },
                ApiGatewayManaged: {
                  locationName: 'apiGatewayManaged',
                  type: 'boolean'
                },
                ApiId: {
                  locationName: 'apiId'
                },
                ApiKeySelectionExpression: {
                  locationName: 'apiKeySelectionExpression'
                },
                CorsConfiguration: {
                  shape: 'S3',
                  locationName: 'corsConfiguration'
                },
                CreatedDate: {
                  shape: 'Sl',
                  locationName: 'createdDate'
                },
                Description: {
                  locationName: 'description'
                },
                DisableSchemaValidation: {
                  locationName: 'disableSchemaValidation',
                  type: 'boolean'
                },
                DisableExecuteApiEndpoint: {
                  locationName: 'disableExecuteApiEndpoint',
                  type: 'boolean'
                },
                ImportInfo: {
                  shape: 'Sm',
                  locationName: 'importInfo'
                },
                Name: {
                  locationName: 'name'
                },
                ProtocolType: {
                  locationName: 'protocolType'
                },
                RouteSelectionExpression: {
                  locationName: 'routeSelectionExpression'
                },
                Tags: {
                  shape: 'Sg',
                  locationName: 'tags'
                },
                Version: {
                  locationName: 'version'
                },
                Warnings: {
                  shape: 'Sm',
                  locationName: 'warnings'
                }
              }
            }
          },
          UpdateApiMapping: {
            http: {
              method: 'PATCH',
              requestUri: '/v2/domainnames/{domainName}/apimappings/{apiMappingId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ApiId: {
                  locationName: 'apiId'
                },
                ApiMappingId: {
                  location: 'uri',
                  locationName: 'apiMappingId'
                },
                ApiMappingKey: {
                  locationName: 'apiMappingKey'
                },
                DomainName: {
                  location: 'uri',
                  locationName: 'domainName'
                },
                Stage: {
                  locationName: 'stage'
                }
              },
              required: ['ApiMappingId', 'ApiId', 'DomainName']
            },
            output: {
              type: 'structure',
              members: {
                ApiId: {
                  locationName: 'apiId'
                },
                ApiMappingId: {
                  locationName: 'apiMappingId'
                },
                ApiMappingKey: {
                  locationName: 'apiMappingKey'
                },
                Stage: {
                  locationName: 'stage'
                }
              }
            }
          },
          UpdateAuthorizer: {
            http: {
              method: 'PATCH',
              requestUri: '/v2/apis/{apiId}/authorizers/{authorizerId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ApiId: {
                  location: 'uri',
                  locationName: 'apiId'
                },
                AuthorizerCredentialsArn: {
                  locationName: 'authorizerCredentialsArn'
                },
                AuthorizerId: {
                  location: 'uri',
                  locationName: 'authorizerId'
                },
                AuthorizerPayloadFormatVersion: {
                  locationName: 'authorizerPayloadFormatVersion'
                },
                AuthorizerResultTtlInSeconds: {
                  locationName: 'authorizerResultTtlInSeconds',
                  type: 'integer'
                },
                AuthorizerType: {
                  locationName: 'authorizerType'
                },
                AuthorizerUri: {
                  locationName: 'authorizerUri'
                },
                EnableSimpleResponses: {
                  locationName: 'enableSimpleResponses',
                  type: 'boolean'
                },
                IdentitySource: {
                  shape: 'Ss',
                  locationName: 'identitySource'
                },
                IdentityValidationExpression: {
                  locationName: 'identityValidationExpression'
                },
                JwtConfiguration: {
                  shape: 'St',
                  locationName: 'jwtConfiguration'
                },
                Name: {
                  locationName: 'name'
                }
              },
              required: ['AuthorizerId', 'ApiId']
            },
            output: {
              type: 'structure',
              members: {
                AuthorizerCredentialsArn: {
                  locationName: 'authorizerCredentialsArn'
                },
                AuthorizerId: {
                  locationName: 'authorizerId'
                },
                AuthorizerPayloadFormatVersion: {
                  locationName: 'authorizerPayloadFormatVersion'
                },
                AuthorizerResultTtlInSeconds: {
                  locationName: 'authorizerResultTtlInSeconds',
                  type: 'integer'
                },
                AuthorizerType: {
                  locationName: 'authorizerType'
                },
                AuthorizerUri: {
                  locationName: 'authorizerUri'
                },
                EnableSimpleResponses: {
                  locationName: 'enableSimpleResponses',
                  type: 'boolean'
                },
                IdentitySource: {
                  shape: 'Ss',
                  locationName: 'identitySource'
                },
                IdentityValidationExpression: {
                  locationName: 'identityValidationExpression'
                },
                JwtConfiguration: {
                  shape: 'St',
                  locationName: 'jwtConfiguration'
                },
                Name: {
                  locationName: 'name'
                }
              }
            }
          },
          UpdateDeployment: {
            http: {
              method: 'PATCH',
              requestUri: '/v2/apis/{apiId}/deployments/{deploymentId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ApiId: {
                  location: 'uri',
                  locationName: 'apiId'
                },
                DeploymentId: {
                  location: 'uri',
                  locationName: 'deploymentId'
                },
                Description: {
                  locationName: 'description'
                }
              },
              required: ['ApiId', 'DeploymentId']
            },
            output: {
              type: 'structure',
              members: {
                AutoDeployed: {
                  locationName: 'autoDeployed',
                  type: 'boolean'
                },
                CreatedDate: {
                  shape: 'Sl',
                  locationName: 'createdDate'
                },
                DeploymentId: {
                  locationName: 'deploymentId'
                },
                DeploymentStatus: {
                  locationName: 'deploymentStatus'
                },
                DeploymentStatusMessage: {
                  locationName: 'deploymentStatusMessage'
                },
                Description: {
                  locationName: 'description'
                }
              }
            }
          },
          UpdateDomainName: {
            http: {
              method: 'PATCH',
              requestUri: '/v2/domainnames/{domainName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                DomainName: {
                  location: 'uri',
                  locationName: 'domainName'
                },
                DomainNameConfigurations: {
                  shape: 'S10',
                  locationName: 'domainNameConfigurations'
                },
                MutualTlsAuthentication: {
                  shape: 'S15',
                  locationName: 'mutualTlsAuthentication'
                }
              },
              required: ['DomainName']
            },
            output: {
              type: 'structure',
              members: {
                ApiMappingSelectionExpression: {
                  locationName: 'apiMappingSelectionExpression'
                },
                DomainName: {
                  locationName: 'domainName'
                },
                DomainNameConfigurations: {
                  shape: 'S10',
                  locationName: 'domainNameConfigurations'
                },
                MutualTlsAuthentication: {
                  shape: 'S17',
                  locationName: 'mutualTlsAuthentication'
                },
                Tags: {
                  shape: 'Sg',
                  locationName: 'tags'
                }
              }
            }
          },
          UpdateIntegration: {
            http: {
              method: 'PATCH',
              requestUri: '/v2/apis/{apiId}/integrations/{integrationId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ApiId: {
                  location: 'uri',
                  locationName: 'apiId'
                },
                ConnectionId: {
                  locationName: 'connectionId'
                },
                ConnectionType: {
                  locationName: 'connectionType'
                },
                ContentHandlingStrategy: {
                  locationName: 'contentHandlingStrategy'
                },
                CredentialsArn: {
                  locationName: 'credentialsArn'
                },
                Description: {
                  locationName: 'description'
                },
                IntegrationId: {
                  location: 'uri',
                  locationName: 'integrationId'
                },
                IntegrationMethod: {
                  locationName: 'integrationMethod'
                },
                IntegrationSubtype: {
                  locationName: 'integrationSubtype'
                },
                IntegrationType: {
                  locationName: 'integrationType'
                },
                IntegrationUri: {
                  locationName: 'integrationUri'
                },
                PassthroughBehavior: {
                  locationName: 'passthroughBehavior'
                },
                PayloadFormatVersion: {
                  locationName: 'payloadFormatVersion'
                },
                RequestParameters: {
                  shape: 'S1e',
                  locationName: 'requestParameters'
                },
                RequestTemplates: {
                  shape: 'S1f',
                  locationName: 'requestTemplates'
                },
                ResponseParameters: {
                  shape: 'S1h',
                  locationName: 'responseParameters'
                },
                TemplateSelectionExpression: {
                  locationName: 'templateSelectionExpression'
                },
                TimeoutInMillis: {
                  locationName: 'timeoutInMillis',
                  type: 'integer'
                },
                TlsConfig: {
                  shape: 'S1j',
                  locationName: 'tlsConfig'
                }
              },
              required: ['ApiId', 'IntegrationId']
            },
            output: {
              type: 'structure',
              members: {
                ApiGatewayManaged: {
                  locationName: 'apiGatewayManaged',
                  type: 'boolean'
                },
                ConnectionId: {
                  locationName: 'connectionId'
                },
                ConnectionType: {
                  locationName: 'connectionType'
                },
                ContentHandlingStrategy: {
                  locationName: 'contentHandlingStrategy'
                },
                CredentialsArn: {
                  locationName: 'credentialsArn'
                },
                Description: {
                  locationName: 'description'
                },
                IntegrationId: {
                  locationName: 'integrationId'
                },
                IntegrationMethod: {
                  locationName: 'integrationMethod'
                },
                IntegrationResponseSelectionExpression: {
                  locationName: 'integrationResponseSelectionExpression'
                },
                IntegrationSubtype: {
                  locationName: 'integrationSubtype'
                },
                IntegrationType: {
                  locationName: 'integrationType'
                },
                IntegrationUri: {
                  locationName: 'integrationUri'
                },
                PassthroughBehavior: {
                  locationName: 'passthroughBehavior'
                },
                PayloadFormatVersion: {
                  locationName: 'payloadFormatVersion'
                },
                RequestParameters: {
                  shape: 'S1e',
                  locationName: 'requestParameters'
                },
                RequestTemplates: {
                  shape: 'S1f',
                  locationName: 'requestTemplates'
                },
                ResponseParameters: {
                  shape: 'S1h',
                  locationName: 'responseParameters'
                },
                TemplateSelectionExpression: {
                  locationName: 'templateSelectionExpression'
                },
                TimeoutInMillis: {
                  locationName: 'timeoutInMillis',
                  type: 'integer'
                },
                TlsConfig: {
                  shape: 'S1l',
                  locationName: 'tlsConfig'
                }
              }
            }
          },
          UpdateIntegrationResponse: {
            http: {
              method: 'PATCH',
              requestUri: '/v2/apis/{apiId}/integrations/{integrationId}/integrationresponses/{integrationResponseId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ApiId: {
                  location: 'uri',
                  locationName: 'apiId'
                },
                ContentHandlingStrategy: {
                  locationName: 'contentHandlingStrategy'
                },
                IntegrationId: {
                  location: 'uri',
                  locationName: 'integrationId'
                },
                IntegrationResponseId: {
                  location: 'uri',
                  locationName: 'integrationResponseId'
                },
                IntegrationResponseKey: {
                  locationName: 'integrationResponseKey'
                },
                ResponseParameters: {
                  shape: 'S1e',
                  locationName: 'responseParameters'
                },
                ResponseTemplates: {
                  shape: 'S1f',
                  locationName: 'responseTemplates'
                },
                TemplateSelectionExpression: {
                  locationName: 'templateSelectionExpression'
                }
              },
              required: ['ApiId', 'IntegrationResponseId', 'IntegrationId']
            },
            output: {
              type: 'structure',
              members: {
                ContentHandlingStrategy: {
                  locationName: 'contentHandlingStrategy'
                },
                IntegrationResponseId: {
                  locationName: 'integrationResponseId'
                },
                IntegrationResponseKey: {
                  locationName: 'integrationResponseKey'
                },
                ResponseParameters: {
                  shape: 'S1e',
                  locationName: 'responseParameters'
                },
                ResponseTemplates: {
                  shape: 'S1f',
                  locationName: 'responseTemplates'
                },
                TemplateSelectionExpression: {
                  locationName: 'templateSelectionExpression'
                }
              }
            }
          },
          UpdateModel: {
            http: {
              method: 'PATCH',
              requestUri: '/v2/apis/{apiId}/models/{modelId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ApiId: {
                  location: 'uri',
                  locationName: 'apiId'
                },
                ContentType: {
                  locationName: 'contentType'
                },
                Description: {
                  locationName: 'description'
                },
                ModelId: {
                  location: 'uri',
                  locationName: 'modelId'
                },
                Name: {
                  locationName: 'name'
                },
                Schema: {
                  locationName: 'schema'
                }
              },
              required: ['ModelId', 'ApiId']
            },
            output: {
              type: 'structure',
              members: {
                ContentType: {
                  locationName: 'contentType'
                },
                Description: {
                  locationName: 'description'
                },
                ModelId: {
                  locationName: 'modelId'
                },
                Name: {
                  locationName: 'name'
                },
                Schema: {
                  locationName: 'schema'
                }
              }
            }
          },
          UpdateRoute: {
            http: {
              method: 'PATCH',
              requestUri: '/v2/apis/{apiId}/routes/{routeId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ApiId: {
                  location: 'uri',
                  locationName: 'apiId'
                },
                ApiKeyRequired: {
                  locationName: 'apiKeyRequired',
                  type: 'boolean'
                },
                AuthorizationScopes: {
                  shape: 'S1s',
                  locationName: 'authorizationScopes'
                },
                AuthorizationType: {
                  locationName: 'authorizationType'
                },
                AuthorizerId: {
                  locationName: 'authorizerId'
                },
                ModelSelectionExpression: {
                  locationName: 'modelSelectionExpression'
                },
                OperationName: {
                  locationName: 'operationName'
                },
                RequestModels: {
                  shape: 'S1u',
                  locationName: 'requestModels'
                },
                RequestParameters: {
                  shape: 'S1v',
                  locationName: 'requestParameters'
                },
                RouteId: {
                  location: 'uri',
                  locationName: 'routeId'
                },
                RouteKey: {
                  locationName: 'routeKey'
                },
                RouteResponseSelectionExpression: {
                  locationName: 'routeResponseSelectionExpression'
                },
                Target: {
                  locationName: 'target'
                }
              },
              required: ['ApiId', 'RouteId']
            },
            output: {
              type: 'structure',
              members: {
                ApiGatewayManaged: {
                  locationName: 'apiGatewayManaged',
                  type: 'boolean'
                },
                ApiKeyRequired: {
                  locationName: 'apiKeyRequired',
                  type: 'boolean'
                },
                AuthorizationScopes: {
                  shape: 'S1s',
                  locationName: 'authorizationScopes'
                },
                AuthorizationType: {
                  locationName: 'authorizationType'
                },
                AuthorizerId: {
                  locationName: 'authorizerId'
                },
                ModelSelectionExpression: {
                  locationName: 'modelSelectionExpression'
                },
                OperationName: {
                  locationName: 'operationName'
                },
                RequestModels: {
                  shape: 'S1u',
                  locationName: 'requestModels'
                },
                RequestParameters: {
                  shape: 'S1v',
                  locationName: 'requestParameters'
                },
                RouteId: {
                  locationName: 'routeId'
                },
                RouteKey: {
                  locationName: 'routeKey'
                },
                RouteResponseSelectionExpression: {
                  locationName: 'routeResponseSelectionExpression'
                },
                Target: {
                  locationName: 'target'
                }
              }
            }
          },
          UpdateRouteResponse: {
            http: {
              method: 'PATCH',
              requestUri: '/v2/apis/{apiId}/routes/{routeId}/routeresponses/{routeResponseId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ApiId: {
                  location: 'uri',
                  locationName: 'apiId'
                },
                ModelSelectionExpression: {
                  locationName: 'modelSelectionExpression'
                },
                ResponseModels: {
                  shape: 'S1u',
                  locationName: 'responseModels'
                },
                ResponseParameters: {
                  shape: 'S1v',
                  locationName: 'responseParameters'
                },
                RouteId: {
                  location: 'uri',
                  locationName: 'routeId'
                },
                RouteResponseId: {
                  location: 'uri',
                  locationName: 'routeResponseId'
                },
                RouteResponseKey: {
                  locationName: 'routeResponseKey'
                }
              },
              required: ['RouteResponseId', 'ApiId', 'RouteId']
            },
            output: {
              type: 'structure',
              members: {
                ModelSelectionExpression: {
                  locationName: 'modelSelectionExpression'
                },
                ResponseModels: {
                  shape: 'S1u',
                  locationName: 'responseModels'
                },
                ResponseParameters: {
                  shape: 'S1v',
                  locationName: 'responseParameters'
                },
                RouteResponseId: {
                  locationName: 'routeResponseId'
                },
                RouteResponseKey: {
                  locationName: 'routeResponseKey'
                }
              }
            }
          },
          UpdateStage: {
            http: {
              method: 'PATCH',
              requestUri: '/v2/apis/{apiId}/stages/{stageName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                AccessLogSettings: {
                  shape: 'S21',
                  locationName: 'accessLogSettings'
                },
                ApiId: {
                  location: 'uri',
                  locationName: 'apiId'
                },
                AutoDeploy: {
                  locationName: 'autoDeploy',
                  type: 'boolean'
                },
                ClientCertificateId: {
                  locationName: 'clientCertificateId'
                },
                DefaultRouteSettings: {
                  shape: 'S22',
                  locationName: 'defaultRouteSettings'
                },
                DeploymentId: {
                  locationName: 'deploymentId'
                },
                Description: {
                  locationName: 'description'
                },
                RouteSettings: {
                  shape: 'S26',
                  locationName: 'routeSettings'
                },
                StageName: {
                  location: 'uri',
                  locationName: 'stageName'
                },
                StageVariables: {
                  shape: 'S27',
                  locationName: 'stageVariables'
                }
              },
              required: ['StageName', 'ApiId']
            },
            output: {
              type: 'structure',
              members: {
                AccessLogSettings: {
                  shape: 'S21',
                  locationName: 'accessLogSettings'
                },
                ApiGatewayManaged: {
                  locationName: 'apiGatewayManaged',
                  type: 'boolean'
                },
                AutoDeploy: {
                  locationName: 'autoDeploy',
                  type: 'boolean'
                },
                ClientCertificateId: {
                  locationName: 'clientCertificateId'
                },
                CreatedDate: {
                  shape: 'Sl',
                  locationName: 'createdDate'
                },
                DefaultRouteSettings: {
                  shape: 'S22',
                  locationName: 'defaultRouteSettings'
                },
                DeploymentId: {
                  locationName: 'deploymentId'
                },
                Description: {
                  locationName: 'description'
                },
                LastDeploymentStatusMessage: {
                  locationName: 'lastDeploymentStatusMessage'
                },
                LastUpdatedDate: {
                  shape: 'Sl',
                  locationName: 'lastUpdatedDate'
                },
                RouteSettings: {
                  shape: 'S26',
                  locationName: 'routeSettings'
                },
                StageName: {
                  locationName: 'stageName'
                },
                StageVariables: {
                  shape: 'S27',
                  locationName: 'stageVariables'
                },
                Tags: {
                  shape: 'Sg',
                  locationName: 'tags'
                }
              }
            }
          },
          UpdateVpcLink: {
            http: {
              method: 'PATCH',
              requestUri: '/v2/vpclinks/{vpcLinkId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                Name: {
                  locationName: 'name'
                },
                VpcLinkId: {
                  location: 'uri',
                  locationName: 'vpcLinkId'
                }
              },
              required: ['VpcLinkId']
            },
            output: {
              type: 'structure',
              members: {
                CreatedDate: {
                  shape: 'Sl',
                  locationName: 'createdDate'
                },
                Name: {
                  locationName: 'name'
                },
                SecurityGroupIds: {
                  shape: 'S2b',
                  locationName: 'securityGroupIds'
                },
                SubnetIds: {
                  shape: 'S2c',
                  locationName: 'subnetIds'
                },
                Tags: {
                  shape: 'Sg',
                  locationName: 'tags'
                },
                VpcLinkId: {
                  locationName: 'vpcLinkId'
                },
                VpcLinkStatus: {
                  locationName: 'vpcLinkStatus'
                },
                VpcLinkStatusMessage: {
                  locationName: 'vpcLinkStatusMessage'
                },
                VpcLinkVersion: {
                  locationName: 'vpcLinkVersion'
                }
              }
            }
          }
        },
        shapes: {
          S3: {
            type: 'structure',
            members: {
              AllowCredentials: {
                locationName: 'allowCredentials',
                type: 'boolean'
              },
              AllowHeaders: {
                shape: 'S5',
                locationName: 'allowHeaders'
              },
              AllowMethods: {
                locationName: 'allowMethods',
                type: 'list',
                member: {}
              },
              AllowOrigins: {
                locationName: 'allowOrigins',
                type: 'list',
                member: {}
              },
              ExposeHeaders: {
                shape: 'S5',
                locationName: 'exposeHeaders'
              },
              MaxAge: {
                locationName: 'maxAge',
                type: 'integer'
              }
            }
          },
          S5: {
            type: 'list',
            member: {}
          },
          Sg: {
            type: 'map',
            key: {},
            value: {}
          },
          Sl: {
            type: 'timestamp',
            timestampFormat: 'iso8601'
          },
          Sm: {
            type: 'list',
            member: {}
          },
          Ss: {
            type: 'list',
            member: {}
          },
          St: {
            type: 'structure',
            members: {
              Audience: {
                shape: 'Sm',
                locationName: 'audience'
              },
              Issuer: {
                locationName: 'issuer'
              }
            }
          },
          S10: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                ApiGatewayDomainName: {
                  locationName: 'apiGatewayDomainName'
                },
                CertificateArn: {
                  locationName: 'certificateArn'
                },
                CertificateName: {
                  locationName: 'certificateName'
                },
                CertificateUploadDate: {
                  shape: 'Sl',
                  locationName: 'certificateUploadDate'
                },
                DomainNameStatus: {
                  locationName: 'domainNameStatus'
                },
                DomainNameStatusMessage: {
                  locationName: 'domainNameStatusMessage'
                },
                EndpointType: {
                  locationName: 'endpointType'
                },
                HostedZoneId: {
                  locationName: 'hostedZoneId'
                },
                SecurityPolicy: {
                  locationName: 'securityPolicy'
                },
                OwnershipVerificationCertificateArn: {
                  locationName: 'ownershipVerificationCertificateArn'
                }
              }
            }
          },
          S15: {
            type: 'structure',
            members: {
              TruststoreUri: {
                locationName: 'truststoreUri'
              },
              TruststoreVersion: {
                locationName: 'truststoreVersion'
              }
            }
          },
          S17: {
            type: 'structure',
            members: {
              TruststoreUri: {
                locationName: 'truststoreUri'
              },
              TruststoreVersion: {
                locationName: 'truststoreVersion'
              },
              TruststoreWarnings: {
                shape: 'Sm',
                locationName: 'truststoreWarnings'
              }
            }
          },
          S1e: {
            type: 'map',
            key: {},
            value: {}
          },
          S1f: {
            type: 'map',
            key: {},
            value: {}
          },
          S1h: {
            type: 'map',
            key: {},
            value: {
              shape: 'S1e'
            }
          },
          S1j: {
            type: 'structure',
            members: {
              ServerNameToVerify: {
                locationName: 'serverNameToVerify'
              }
            }
          },
          S1l: {
            type: 'structure',
            members: {
              ServerNameToVerify: {
                locationName: 'serverNameToVerify'
              }
            }
          },
          S1s: {
            type: 'list',
            member: {}
          },
          S1u: {
            type: 'map',
            key: {},
            value: {}
          },
          S1v: {
            type: 'map',
            key: {},
            value: {
              type: 'structure',
              members: {
                Required: {
                  locationName: 'required',
                  type: 'boolean'
                }
              }
            }
          },
          S21: {
            type: 'structure',
            members: {
              DestinationArn: {
                locationName: 'destinationArn'
              },
              Format: {
                locationName: 'format'
              }
            }
          },
          S22: {
            type: 'structure',
            members: {
              DataTraceEnabled: {
                locationName: 'dataTraceEnabled',
                type: 'boolean'
              },
              DetailedMetricsEnabled: {
                locationName: 'detailedMetricsEnabled',
                type: 'boolean'
              },
              LoggingLevel: {
                locationName: 'loggingLevel'
              },
              ThrottlingBurstLimit: {
                locationName: 'throttlingBurstLimit',
                type: 'integer'
              },
              ThrottlingRateLimit: {
                locationName: 'throttlingRateLimit',
                type: 'double'
              }
            }
          },
          S26: {
            type: 'map',
            key: {},
            value: {
              shape: 'S22'
            }
          },
          S27: {
            type: 'map',
            key: {},
            value: {}
          },
          S2b: {
            type: 'list',
            member: {}
          },
          S2c: {
            type: 'list',
            member: {}
          }
        }
      });
    }
  };
});
//# sourceMappingURL=b27be065ba3e855153911f1da7a5ec5d02142561.js.map