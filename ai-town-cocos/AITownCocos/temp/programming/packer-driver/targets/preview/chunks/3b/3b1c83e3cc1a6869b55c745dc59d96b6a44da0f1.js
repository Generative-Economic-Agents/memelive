System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2019-10-09',
          endpointPrefix: 'appconfig',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceAbbreviation: 'AppConfig',
          serviceFullName: 'Amazon AppConfig',
          serviceId: 'AppConfig',
          signatureVersion: 'v4',
          signingName: 'appconfig',
          uid: 'appconfig-2019-10-09'
        },
        operations: {
          CreateApplication: {
            http: {
              requestUri: '/applications',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {},
                Description: {},
                Tags: {
                  shape: 'S4'
                }
              }
            },
            output: {
              shape: 'S7'
            }
          },
          CreateConfigurationProfile: {
            http: {
              requestUri: '/applications/{ApplicationId}/configurationprofiles',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['ApplicationId', 'Name', 'LocationUri'],
              members: {
                ApplicationId: {
                  location: 'uri',
                  locationName: 'ApplicationId'
                },
                Name: {},
                Description: {},
                LocationUri: {},
                RetrievalRoleArn: {},
                Validators: {
                  shape: 'Sd'
                },
                Tags: {
                  shape: 'S4'
                },
                Type: {},
                KmsKeyIdentifier: {}
              }
            },
            output: {
              shape: 'Sj'
            }
          },
          CreateDeploymentStrategy: {
            http: {
              requestUri: '/deploymentstrategies',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['Name', 'DeploymentDurationInMinutes', 'GrowthFactor'],
              members: {
                Name: {},
                Description: {},
                DeploymentDurationInMinutes: {
                  type: 'integer'
                },
                FinalBakeTimeInMinutes: {
                  type: 'integer'
                },
                GrowthFactor: {
                  type: 'float'
                },
                GrowthType: {},
                ReplicateTo: {},
                Tags: {
                  shape: 'S4'
                }
              }
            },
            output: {
              shape: 'Sq'
            }
          },
          CreateEnvironment: {
            http: {
              requestUri: '/applications/{ApplicationId}/environments',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['ApplicationId', 'Name'],
              members: {
                ApplicationId: {
                  location: 'uri',
                  locationName: 'ApplicationId'
                },
                Name: {},
                Description: {},
                Monitors: {
                  shape: 'St'
                },
                Tags: {
                  shape: 'S4'
                }
              }
            },
            output: {
              shape: 'Sw'
            }
          },
          CreateExtension: {
            http: {
              requestUri: '/extensions',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['Name', 'Actions'],
              members: {
                Name: {},
                Description: {},
                Actions: {
                  shape: 'S10'
                },
                Parameters: {
                  shape: 'S14'
                },
                Tags: {
                  shape: 'S4'
                },
                LatestVersionNumber: {
                  location: 'header',
                  locationName: 'Latest-Version-Number',
                  type: 'integer'
                }
              }
            },
            output: {
              shape: 'S18'
            }
          },
          CreateExtensionAssociation: {
            http: {
              requestUri: '/extensionassociations',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['ExtensionIdentifier', 'ResourceIdentifier'],
              members: {
                ExtensionIdentifier: {},
                ExtensionVersionNumber: {
                  type: 'integer'
                },
                ResourceIdentifier: {},
                Parameters: {
                  shape: 'S1b'
                },
                Tags: {
                  shape: 'S4'
                }
              }
            },
            output: {
              shape: 'S1c'
            }
          },
          CreateHostedConfigurationVersion: {
            http: {
              requestUri: '/applications/{ApplicationId}/configurationprofiles/{ConfigurationProfileId}/hostedconfigurationversions',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['ApplicationId', 'ConfigurationProfileId', 'Content', 'ContentType'],
              members: {
                ApplicationId: {
                  location: 'uri',
                  locationName: 'ApplicationId'
                },
                ConfigurationProfileId: {
                  location: 'uri',
                  locationName: 'ConfigurationProfileId'
                },
                Description: {
                  location: 'header',
                  locationName: 'Description'
                },
                Content: {
                  shape: 'S1e'
                },
                ContentType: {
                  location: 'header',
                  locationName: 'Content-Type'
                },
                LatestVersionNumber: {
                  location: 'header',
                  locationName: 'Latest-Version-Number',
                  type: 'integer'
                },
                VersionLabel: {
                  location: 'header',
                  locationName: 'VersionLabel'
                }
              },
              payload: 'Content'
            },
            output: {
              shape: 'S1h'
            }
          },
          DeleteApplication: {
            http: {
              method: 'DELETE',
              requestUri: '/applications/{ApplicationId}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['ApplicationId'],
              members: {
                ApplicationId: {
                  location: 'uri',
                  locationName: 'ApplicationId'
                }
              }
            }
          },
          DeleteConfigurationProfile: {
            http: {
              method: 'DELETE',
              requestUri: '/applications/{ApplicationId}/configurationprofiles/{ConfigurationProfileId}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['ApplicationId', 'ConfigurationProfileId'],
              members: {
                ApplicationId: {
                  location: 'uri',
                  locationName: 'ApplicationId'
                },
                ConfigurationProfileId: {
                  location: 'uri',
                  locationName: 'ConfigurationProfileId'
                }
              }
            }
          },
          DeleteDeploymentStrategy: {
            http: {
              method: 'DELETE',
              requestUri: '/deployementstrategies/{DeploymentStrategyId}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['DeploymentStrategyId'],
              members: {
                DeploymentStrategyId: {
                  location: 'uri',
                  locationName: 'DeploymentStrategyId'
                }
              }
            }
          },
          DeleteEnvironment: {
            http: {
              method: 'DELETE',
              requestUri: '/applications/{ApplicationId}/environments/{EnvironmentId}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['ApplicationId', 'EnvironmentId'],
              members: {
                ApplicationId: {
                  location: 'uri',
                  locationName: 'ApplicationId'
                },
                EnvironmentId: {
                  location: 'uri',
                  locationName: 'EnvironmentId'
                }
              }
            }
          },
          DeleteExtension: {
            http: {
              method: 'DELETE',
              requestUri: '/extensions/{ExtensionIdentifier}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['ExtensionIdentifier'],
              members: {
                ExtensionIdentifier: {
                  location: 'uri',
                  locationName: 'ExtensionIdentifier'
                },
                VersionNumber: {
                  location: 'querystring',
                  locationName: 'version',
                  type: 'integer'
                }
              }
            }
          },
          DeleteExtensionAssociation: {
            http: {
              method: 'DELETE',
              requestUri: '/extensionassociations/{ExtensionAssociationId}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['ExtensionAssociationId'],
              members: {
                ExtensionAssociationId: {
                  location: 'uri',
                  locationName: 'ExtensionAssociationId'
                }
              }
            }
          },
          DeleteHostedConfigurationVersion: {
            http: {
              method: 'DELETE',
              requestUri: '/applications/{ApplicationId}/configurationprofiles/{ConfigurationProfileId}/hostedconfigurationversions/{VersionNumber}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['ApplicationId', 'ConfigurationProfileId', 'VersionNumber'],
              members: {
                ApplicationId: {
                  location: 'uri',
                  locationName: 'ApplicationId'
                },
                ConfigurationProfileId: {
                  location: 'uri',
                  locationName: 'ConfigurationProfileId'
                },
                VersionNumber: {
                  location: 'uri',
                  locationName: 'VersionNumber',
                  type: 'integer'
                }
              }
            }
          },
          GetApplication: {
            http: {
              method: 'GET',
              requestUri: '/applications/{ApplicationId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ApplicationId'],
              members: {
                ApplicationId: {
                  location: 'uri',
                  locationName: 'ApplicationId'
                }
              }
            },
            output: {
              shape: 'S7'
            }
          },
          GetConfiguration: {
            http: {
              method: 'GET',
              requestUri: '/applications/{Application}/environments/{Environment}/configurations/{Configuration}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['Application', 'Environment', 'Configuration', 'ClientId'],
              members: {
                Application: {
                  location: 'uri',
                  locationName: 'Application'
                },
                Environment: {
                  location: 'uri',
                  locationName: 'Environment'
                },
                Configuration: {
                  location: 'uri',
                  locationName: 'Configuration'
                },
                ClientId: {
                  location: 'querystring',
                  locationName: 'client_id'
                },
                ClientConfigurationVersion: {
                  location: 'querystring',
                  locationName: 'client_configuration_version'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Content: {
                  shape: 'S1e'
                },
                ConfigurationVersion: {
                  location: 'header',
                  locationName: 'Configuration-Version'
                },
                ContentType: {
                  location: 'header',
                  locationName: 'Content-Type'
                }
              },
              payload: 'Content'
            },
            deprecated: true,
            deprecatedMessage: 'This API has been deprecated in favor of the GetLatestConfiguration API used in conjunction with StartConfigurationSession.'
          },
          GetConfigurationProfile: {
            http: {
              method: 'GET',
              requestUri: '/applications/{ApplicationId}/configurationprofiles/{ConfigurationProfileId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ApplicationId', 'ConfigurationProfileId'],
              members: {
                ApplicationId: {
                  location: 'uri',
                  locationName: 'ApplicationId'
                },
                ConfigurationProfileId: {
                  location: 'uri',
                  locationName: 'ConfigurationProfileId'
                }
              }
            },
            output: {
              shape: 'Sj'
            }
          },
          GetDeployment: {
            http: {
              method: 'GET',
              requestUri: '/applications/{ApplicationId}/environments/{EnvironmentId}/deployments/{DeploymentNumber}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ApplicationId', 'EnvironmentId', 'DeploymentNumber'],
              members: {
                ApplicationId: {
                  location: 'uri',
                  locationName: 'ApplicationId'
                },
                EnvironmentId: {
                  location: 'uri',
                  locationName: 'EnvironmentId'
                },
                DeploymentNumber: {
                  location: 'uri',
                  locationName: 'DeploymentNumber',
                  type: 'integer'
                }
              }
            },
            output: {
              shape: 'S1y'
            }
          },
          GetDeploymentStrategy: {
            http: {
              method: 'GET',
              requestUri: '/deploymentstrategies/{DeploymentStrategyId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['DeploymentStrategyId'],
              members: {
                DeploymentStrategyId: {
                  location: 'uri',
                  locationName: 'DeploymentStrategyId'
                }
              }
            },
            output: {
              shape: 'Sq'
            }
          },
          GetEnvironment: {
            http: {
              method: 'GET',
              requestUri: '/applications/{ApplicationId}/environments/{EnvironmentId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ApplicationId', 'EnvironmentId'],
              members: {
                ApplicationId: {
                  location: 'uri',
                  locationName: 'ApplicationId'
                },
                EnvironmentId: {
                  location: 'uri',
                  locationName: 'EnvironmentId'
                }
              }
            },
            output: {
              shape: 'Sw'
            }
          },
          GetExtension: {
            http: {
              method: 'GET',
              requestUri: '/extensions/{ExtensionIdentifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ExtensionIdentifier'],
              members: {
                ExtensionIdentifier: {
                  location: 'uri',
                  locationName: 'ExtensionIdentifier'
                },
                VersionNumber: {
                  location: 'querystring',
                  locationName: 'version_number',
                  type: 'integer'
                }
              }
            },
            output: {
              shape: 'S18'
            }
          },
          GetExtensionAssociation: {
            http: {
              method: 'GET',
              requestUri: '/extensionassociations/{ExtensionAssociationId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ExtensionAssociationId'],
              members: {
                ExtensionAssociationId: {
                  location: 'uri',
                  locationName: 'ExtensionAssociationId'
                }
              }
            },
            output: {
              shape: 'S1c'
            }
          },
          GetHostedConfigurationVersion: {
            http: {
              method: 'GET',
              requestUri: '/applications/{ApplicationId}/configurationprofiles/{ConfigurationProfileId}/hostedconfigurationversions/{VersionNumber}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ApplicationId', 'ConfigurationProfileId', 'VersionNumber'],
              members: {
                ApplicationId: {
                  location: 'uri',
                  locationName: 'ApplicationId'
                },
                ConfigurationProfileId: {
                  location: 'uri',
                  locationName: 'ConfigurationProfileId'
                },
                VersionNumber: {
                  location: 'uri',
                  locationName: 'VersionNumber',
                  type: 'integer'
                }
              }
            },
            output: {
              shape: 'S1h'
            }
          },
          ListApplications: {
            http: {
              method: 'GET',
              requestUri: '/applications',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                MaxResults: {
                  location: 'querystring',
                  locationName: 'max_results',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'next_token'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Items: {
                  type: 'list',
                  member: {
                    shape: 'S7'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListConfigurationProfiles: {
            http: {
              method: 'GET',
              requestUri: '/applications/{ApplicationId}/configurationprofiles',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ApplicationId'],
              members: {
                ApplicationId: {
                  location: 'uri',
                  locationName: 'ApplicationId'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'max_results',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'next_token'
                },
                Type: {
                  location: 'querystring',
                  locationName: 'type'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Items: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ApplicationId: {},
                      Id: {},
                      Name: {},
                      LocationUri: {},
                      ValidatorTypes: {
                        type: 'list',
                        member: {}
                      },
                      Type: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListDeploymentStrategies: {
            http: {
              method: 'GET',
              requestUri: '/deploymentstrategies',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                MaxResults: {
                  location: 'querystring',
                  locationName: 'max_results',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'next_token'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Items: {
                  type: 'list',
                  member: {
                    shape: 'Sq'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListDeployments: {
            http: {
              method: 'GET',
              requestUri: '/applications/{ApplicationId}/environments/{EnvironmentId}/deployments',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ApplicationId', 'EnvironmentId'],
              members: {
                ApplicationId: {
                  location: 'uri',
                  locationName: 'ApplicationId'
                },
                EnvironmentId: {
                  location: 'uri',
                  locationName: 'EnvironmentId'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'max_results',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'next_token'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Items: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      DeploymentNumber: {
                        type: 'integer'
                      },
                      ConfigurationName: {},
                      ConfigurationVersion: {},
                      DeploymentDurationInMinutes: {
                        type: 'integer'
                      },
                      GrowthType: {},
                      GrowthFactor: {
                        type: 'float'
                      },
                      FinalBakeTimeInMinutes: {
                        type: 'integer'
                      },
                      State: {},
                      PercentageComplete: {
                        type: 'float'
                      },
                      StartedAt: {
                        shape: 'S26'
                      },
                      CompletedAt: {
                        shape: 'S26'
                      },
                      VersionLabel: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListEnvironments: {
            http: {
              method: 'GET',
              requestUri: '/applications/{ApplicationId}/environments',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ApplicationId'],
              members: {
                ApplicationId: {
                  location: 'uri',
                  locationName: 'ApplicationId'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'max_results',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'next_token'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Items: {
                  type: 'list',
                  member: {
                    shape: 'Sw'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListExtensionAssociations: {
            http: {
              method: 'GET',
              requestUri: '/extensionassociations',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ResourceIdentifier: {
                  location: 'querystring',
                  locationName: 'resource_identifier'
                },
                ExtensionIdentifier: {
                  location: 'querystring',
                  locationName: 'extension_identifier'
                },
                ExtensionVersionNumber: {
                  location: 'querystring',
                  locationName: 'extension_version_number',
                  type: 'integer'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'max_results',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'next_token'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Items: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Id: {},
                      ExtensionArn: {},
                      ResourceArn: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListExtensions: {
            http: {
              method: 'GET',
              requestUri: '/extensions',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                MaxResults: {
                  location: 'querystring',
                  locationName: 'max_results',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'next_token'
                },
                Name: {
                  location: 'querystring',
                  locationName: 'name'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Items: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Id: {},
                      Name: {},
                      VersionNumber: {
                        type: 'integer'
                      },
                      Arn: {},
                      Description: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListHostedConfigurationVersions: {
            http: {
              method: 'GET',
              requestUri: '/applications/{ApplicationId}/configurationprofiles/{ConfigurationProfileId}/hostedconfigurationversions',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ApplicationId', 'ConfigurationProfileId'],
              members: {
                ApplicationId: {
                  location: 'uri',
                  locationName: 'ApplicationId'
                },
                ConfigurationProfileId: {
                  location: 'uri',
                  locationName: 'ConfigurationProfileId'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'max_results',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'next_token'
                },
                VersionLabel: {
                  location: 'querystring',
                  locationName: 'version_label'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Items: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ApplicationId: {},
                      ConfigurationProfileId: {},
                      VersionNumber: {
                        type: 'integer'
                      },
                      Description: {},
                      ContentType: {},
                      VersionLabel: {},
                      KmsKeyArn: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListTagsForResource: {
            http: {
              method: 'GET',
              requestUri: '/tags/{ResourceArn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ResourceArn'],
              members: {
                ResourceArn: {
                  location: 'uri',
                  locationName: 'ResourceArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Tags: {
                  shape: 'S4'
                }
              }
            }
          },
          StartDeployment: {
            http: {
              requestUri: '/applications/{ApplicationId}/environments/{EnvironmentId}/deployments',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['ApplicationId', 'EnvironmentId', 'DeploymentStrategyId', 'ConfigurationProfileId', 'ConfigurationVersion'],
              members: {
                ApplicationId: {
                  location: 'uri',
                  locationName: 'ApplicationId'
                },
                EnvironmentId: {
                  location: 'uri',
                  locationName: 'EnvironmentId'
                },
                DeploymentStrategyId: {},
                ConfigurationProfileId: {},
                ConfigurationVersion: {},
                Description: {},
                Tags: {
                  shape: 'S4'
                },
                KmsKeyIdentifier: {},
                DynamicExtensionParameters: {
                  type: 'map',
                  key: {},
                  value: {}
                }
              }
            },
            output: {
              shape: 'S1y'
            }
          },
          StopDeployment: {
            http: {
              method: 'DELETE',
              requestUri: '/applications/{ApplicationId}/environments/{EnvironmentId}/deployments/{DeploymentNumber}',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['ApplicationId', 'EnvironmentId', 'DeploymentNumber'],
              members: {
                ApplicationId: {
                  location: 'uri',
                  locationName: 'ApplicationId'
                },
                EnvironmentId: {
                  location: 'uri',
                  locationName: 'EnvironmentId'
                },
                DeploymentNumber: {
                  location: 'uri',
                  locationName: 'DeploymentNumber',
                  type: 'integer'
                }
              }
            },
            output: {
              shape: 'S1y'
            }
          },
          TagResource: {
            http: {
              requestUri: '/tags/{ResourceArn}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['ResourceArn', 'Tags'],
              members: {
                ResourceArn: {
                  location: 'uri',
                  locationName: 'ResourceArn'
                },
                Tags: {
                  shape: 'S4'
                }
              }
            }
          },
          UntagResource: {
            http: {
              method: 'DELETE',
              requestUri: '/tags/{ResourceArn}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['ResourceArn', 'TagKeys'],
              members: {
                ResourceArn: {
                  location: 'uri',
                  locationName: 'ResourceArn'
                },
                TagKeys: {
                  location: 'querystring',
                  locationName: 'tagKeys',
                  type: 'list',
                  member: {}
                }
              }
            }
          },
          UpdateApplication: {
            http: {
              method: 'PATCH',
              requestUri: '/applications/{ApplicationId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ApplicationId'],
              members: {
                ApplicationId: {
                  location: 'uri',
                  locationName: 'ApplicationId'
                },
                Name: {},
                Description: {}
              }
            },
            output: {
              shape: 'S7'
            }
          },
          UpdateConfigurationProfile: {
            http: {
              method: 'PATCH',
              requestUri: '/applications/{ApplicationId}/configurationprofiles/{ConfigurationProfileId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ApplicationId', 'ConfigurationProfileId'],
              members: {
                ApplicationId: {
                  location: 'uri',
                  locationName: 'ApplicationId'
                },
                ConfigurationProfileId: {
                  location: 'uri',
                  locationName: 'ConfigurationProfileId'
                },
                Name: {},
                Description: {},
                RetrievalRoleArn: {},
                Validators: {
                  shape: 'Sd'
                },
                KmsKeyIdentifier: {}
              }
            },
            output: {
              shape: 'Sj'
            }
          },
          UpdateDeploymentStrategy: {
            http: {
              method: 'PATCH',
              requestUri: '/deploymentstrategies/{DeploymentStrategyId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['DeploymentStrategyId'],
              members: {
                DeploymentStrategyId: {
                  location: 'uri',
                  locationName: 'DeploymentStrategyId'
                },
                Description: {},
                DeploymentDurationInMinutes: {
                  type: 'integer'
                },
                FinalBakeTimeInMinutes: {
                  type: 'integer'
                },
                GrowthFactor: {
                  type: 'float'
                },
                GrowthType: {}
              }
            },
            output: {
              shape: 'Sq'
            }
          },
          UpdateEnvironment: {
            http: {
              method: 'PATCH',
              requestUri: '/applications/{ApplicationId}/environments/{EnvironmentId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ApplicationId', 'EnvironmentId'],
              members: {
                ApplicationId: {
                  location: 'uri',
                  locationName: 'ApplicationId'
                },
                EnvironmentId: {
                  location: 'uri',
                  locationName: 'EnvironmentId'
                },
                Name: {},
                Description: {},
                Monitors: {
                  shape: 'St'
                }
              }
            },
            output: {
              shape: 'Sw'
            }
          },
          UpdateExtension: {
            http: {
              method: 'PATCH',
              requestUri: '/extensions/{ExtensionIdentifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ExtensionIdentifier'],
              members: {
                ExtensionIdentifier: {
                  location: 'uri',
                  locationName: 'ExtensionIdentifier'
                },
                Description: {},
                Actions: {
                  shape: 'S10'
                },
                Parameters: {
                  shape: 'S14'
                },
                VersionNumber: {
                  type: 'integer'
                }
              }
            },
            output: {
              shape: 'S18'
            }
          },
          UpdateExtensionAssociation: {
            http: {
              method: 'PATCH',
              requestUri: '/extensionassociations/{ExtensionAssociationId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ExtensionAssociationId'],
              members: {
                ExtensionAssociationId: {
                  location: 'uri',
                  locationName: 'ExtensionAssociationId'
                },
                Parameters: {
                  shape: 'S1b'
                }
              }
            },
            output: {
              shape: 'S1c'
            }
          },
          ValidateConfiguration: {
            http: {
              requestUri: '/applications/{ApplicationId}/configurationprofiles/{ConfigurationProfileId}/validators',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['ApplicationId', 'ConfigurationProfileId', 'ConfigurationVersion'],
              members: {
                ApplicationId: {
                  location: 'uri',
                  locationName: 'ApplicationId'
                },
                ConfigurationProfileId: {
                  location: 'uri',
                  locationName: 'ConfigurationProfileId'
                },
                ConfigurationVersion: {
                  location: 'querystring',
                  locationName: 'configuration_version'
                }
              }
            }
          }
        },
        shapes: {
          S4: {
            type: 'map',
            key: {},
            value: {}
          },
          S7: {
            type: 'structure',
            members: {
              Id: {},
              Name: {},
              Description: {}
            }
          },
          Sd: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Type', 'Content'],
              members: {
                Type: {},
                Content: {
                  type: 'string',
                  sensitive: true
                }
              }
            }
          },
          Sj: {
            type: 'structure',
            members: {
              ApplicationId: {},
              Id: {},
              Name: {},
              Description: {},
              LocationUri: {},
              RetrievalRoleArn: {},
              Validators: {
                shape: 'Sd'
              },
              Type: {},
              KmsKeyArn: {},
              KmsKeyIdentifier: {}
            }
          },
          Sq: {
            type: 'structure',
            members: {
              Id: {},
              Name: {},
              Description: {},
              DeploymentDurationInMinutes: {
                type: 'integer'
              },
              GrowthType: {},
              GrowthFactor: {
                type: 'float'
              },
              FinalBakeTimeInMinutes: {
                type: 'integer'
              },
              ReplicateTo: {}
            }
          },
          St: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['AlarmArn'],
              members: {
                AlarmArn: {},
                AlarmRoleArn: {}
              }
            }
          },
          Sw: {
            type: 'structure',
            members: {
              ApplicationId: {},
              Id: {},
              Name: {},
              Description: {},
              State: {},
              Monitors: {
                shape: 'St'
              }
            }
          },
          S10: {
            type: 'map',
            key: {},
            value: {
              type: 'list',
              member: {
                type: 'structure',
                members: {
                  Name: {},
                  Description: {},
                  Uri: {},
                  RoleArn: {}
                }
              }
            }
          },
          S14: {
            type: 'map',
            key: {},
            value: {
              type: 'structure',
              members: {
                Description: {},
                Required: {
                  type: 'boolean'
                },
                Dynamic: {
                  type: 'boolean'
                }
              }
            }
          },
          S18: {
            type: 'structure',
            members: {
              Id: {},
              Name: {},
              VersionNumber: {
                type: 'integer'
              },
              Arn: {},
              Description: {},
              Actions: {
                shape: 'S10'
              },
              Parameters: {
                shape: 'S14'
              }
            }
          },
          S1b: {
            type: 'map',
            key: {},
            value: {}
          },
          S1c: {
            type: 'structure',
            members: {
              Id: {},
              ExtensionArn: {},
              ResourceArn: {},
              Arn: {},
              Parameters: {
                shape: 'S1b'
              },
              ExtensionVersionNumber: {
                type: 'integer'
              }
            }
          },
          S1e: {
            type: 'blob',
            sensitive: true
          },
          S1h: {
            type: 'structure',
            members: {
              ApplicationId: {
                location: 'header',
                locationName: 'Application-Id'
              },
              ConfigurationProfileId: {
                location: 'header',
                locationName: 'Configuration-Profile-Id'
              },
              VersionNumber: {
                location: 'header',
                locationName: 'Version-Number',
                type: 'integer'
              },
              Description: {
                location: 'header',
                locationName: 'Description'
              },
              Content: {
                shape: 'S1e'
              },
              ContentType: {
                location: 'header',
                locationName: 'Content-Type'
              },
              VersionLabel: {
                location: 'header',
                locationName: 'VersionLabel'
              },
              KmsKeyArn: {
                location: 'header',
                locationName: 'KmsKeyArn'
              }
            },
            payload: 'Content'
          },
          S1y: {
            type: 'structure',
            members: {
              ApplicationId: {},
              EnvironmentId: {},
              DeploymentStrategyId: {},
              ConfigurationProfileId: {},
              DeploymentNumber: {
                type: 'integer'
              },
              ConfigurationName: {},
              ConfigurationLocationUri: {},
              ConfigurationVersion: {},
              Description: {},
              DeploymentDurationInMinutes: {
                type: 'integer'
              },
              GrowthType: {},
              GrowthFactor: {
                type: 'float'
              },
              FinalBakeTimeInMinutes: {
                type: 'integer'
              },
              State: {},
              EventLog: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    EventType: {},
                    TriggeredBy: {},
                    Description: {},
                    ActionInvocations: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          ExtensionIdentifier: {},
                          ActionName: {},
                          Uri: {},
                          RoleArn: {},
                          ErrorMessage: {},
                          ErrorCode: {},
                          InvocationId: {}
                        }
                      }
                    },
                    OccurredAt: {
                      shape: 'S26'
                    }
                  }
                }
              },
              PercentageComplete: {
                type: 'float'
              },
              StartedAt: {
                shape: 'S26'
              },
              CompletedAt: {
                shape: 'S26'
              },
              AppliedExtensions: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    ExtensionId: {},
                    ExtensionAssociationId: {},
                    VersionNumber: {
                      type: 'integer'
                    },
                    Parameters: {
                      shape: 'S1b'
                    }
                  }
                }
              },
              KmsKeyArn: {},
              KmsKeyIdentifier: {},
              VersionLabel: {}
            }
          },
          S26: {
            type: 'timestamp',
            timestampFormat: 'iso8601'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=3b1c83e3cc1a6869b55c745dc59d96b6a44da0f1.js.map