System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        metadata: {
          apiVersion: '2017-06-07',
          endpointPrefix: 'greengrass',
          signingName: 'greengrass',
          serviceFullName: 'AWS Greengrass',
          serviceId: 'Greengrass',
          protocol: 'rest-json',
          jsonVersion: '1.1',
          uid: 'greengrass-2017-06-07',
          signatureVersion: 'v4'
        },
        operations: {
          AssociateRoleToGroup: {
            http: {
              method: 'PUT',
              requestUri: '/greengrass/groups/{GroupId}/role',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                GroupId: {
                  location: 'uri',
                  locationName: 'GroupId'
                },
                RoleArn: {}
              },
              required: ['GroupId', 'RoleArn']
            },
            output: {
              type: 'structure',
              members: {
                AssociatedAt: {}
              }
            }
          },
          AssociateServiceRoleToAccount: {
            http: {
              method: 'PUT',
              requestUri: '/greengrass/servicerole',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                RoleArn: {}
              },
              required: ['RoleArn']
            },
            output: {
              type: 'structure',
              members: {
                AssociatedAt: {}
              }
            }
          },
          CreateConnectorDefinition: {
            http: {
              requestUri: '/greengrass/definition/connectors',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                AmznClientToken: {
                  location: 'header',
                  locationName: 'X-Amzn-Client-Token'
                },
                InitialVersion: {
                  shape: 'S7'
                },
                Name: {},
                tags: {
                  shape: 'Sb'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                CreationTimestamp: {},
                Id: {},
                LastUpdatedTimestamp: {},
                LatestVersion: {},
                LatestVersionArn: {},
                Name: {}
              }
            }
          },
          CreateConnectorDefinitionVersion: {
            http: {
              requestUri: '/greengrass/definition/connectors/{ConnectorDefinitionId}/versions',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                AmznClientToken: {
                  location: 'header',
                  locationName: 'X-Amzn-Client-Token'
                },
                ConnectorDefinitionId: {
                  location: 'uri',
                  locationName: 'ConnectorDefinitionId'
                },
                Connectors: {
                  shape: 'S8'
                }
              },
              required: ['ConnectorDefinitionId']
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                CreationTimestamp: {},
                Id: {},
                Version: {}
              }
            }
          },
          CreateCoreDefinition: {
            http: {
              requestUri: '/greengrass/definition/cores',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                AmznClientToken: {
                  location: 'header',
                  locationName: 'X-Amzn-Client-Token'
                },
                InitialVersion: {
                  shape: 'Sg'
                },
                Name: {},
                tags: {
                  shape: 'Sb'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                CreationTimestamp: {},
                Id: {},
                LastUpdatedTimestamp: {},
                LatestVersion: {},
                LatestVersionArn: {},
                Name: {}
              }
            }
          },
          CreateCoreDefinitionVersion: {
            http: {
              requestUri: '/greengrass/definition/cores/{CoreDefinitionId}/versions',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                AmznClientToken: {
                  location: 'header',
                  locationName: 'X-Amzn-Client-Token'
                },
                CoreDefinitionId: {
                  location: 'uri',
                  locationName: 'CoreDefinitionId'
                },
                Cores: {
                  shape: 'Sh'
                }
              },
              required: ['CoreDefinitionId']
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                CreationTimestamp: {},
                Id: {},
                Version: {}
              }
            }
          },
          CreateDeployment: {
            http: {
              requestUri: '/greengrass/groups/{GroupId}/deployments',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                AmznClientToken: {
                  location: 'header',
                  locationName: 'X-Amzn-Client-Token'
                },
                DeploymentId: {},
                DeploymentType: {},
                GroupId: {
                  location: 'uri',
                  locationName: 'GroupId'
                },
                GroupVersionId: {}
              },
              required: ['GroupId', 'DeploymentType']
            },
            output: {
              type: 'structure',
              members: {
                DeploymentArn: {},
                DeploymentId: {}
              }
            }
          },
          CreateDeviceDefinition: {
            http: {
              requestUri: '/greengrass/definition/devices',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                AmznClientToken: {
                  location: 'header',
                  locationName: 'X-Amzn-Client-Token'
                },
                InitialVersion: {
                  shape: 'Sr'
                },
                Name: {},
                tags: {
                  shape: 'Sb'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                CreationTimestamp: {},
                Id: {},
                LastUpdatedTimestamp: {},
                LatestVersion: {},
                LatestVersionArn: {},
                Name: {}
              }
            }
          },
          CreateDeviceDefinitionVersion: {
            http: {
              requestUri: '/greengrass/definition/devices/{DeviceDefinitionId}/versions',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                AmznClientToken: {
                  location: 'header',
                  locationName: 'X-Amzn-Client-Token'
                },
                DeviceDefinitionId: {
                  location: 'uri',
                  locationName: 'DeviceDefinitionId'
                },
                Devices: {
                  shape: 'Ss'
                }
              },
              required: ['DeviceDefinitionId']
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                CreationTimestamp: {},
                Id: {},
                Version: {}
              }
            }
          },
          CreateFunctionDefinition: {
            http: {
              requestUri: '/greengrass/definition/functions',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                AmznClientToken: {
                  location: 'header',
                  locationName: 'X-Amzn-Client-Token'
                },
                InitialVersion: {
                  shape: 'Sy'
                },
                Name: {},
                tags: {
                  shape: 'Sb'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                CreationTimestamp: {},
                Id: {},
                LastUpdatedTimestamp: {},
                LatestVersion: {},
                LatestVersionArn: {},
                Name: {}
              }
            }
          },
          CreateFunctionDefinitionVersion: {
            http: {
              requestUri: '/greengrass/definition/functions/{FunctionDefinitionId}/versions',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                AmznClientToken: {
                  location: 'header',
                  locationName: 'X-Amzn-Client-Token'
                },
                DefaultConfig: {
                  shape: 'Sz'
                },
                FunctionDefinitionId: {
                  location: 'uri',
                  locationName: 'FunctionDefinitionId'
                },
                Functions: {
                  shape: 'S14'
                }
              },
              required: ['FunctionDefinitionId']
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                CreationTimestamp: {},
                Id: {},
                Version: {}
              }
            }
          },
          CreateGroup: {
            http: {
              requestUri: '/greengrass/groups',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                AmznClientToken: {
                  location: 'header',
                  locationName: 'X-Amzn-Client-Token'
                },
                InitialVersion: {
                  shape: 'S1h'
                },
                Name: {},
                tags: {
                  shape: 'Sb'
                }
              },
              required: ['Name']
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                CreationTimestamp: {},
                Id: {},
                LastUpdatedTimestamp: {},
                LatestVersion: {},
                LatestVersionArn: {},
                Name: {}
              }
            }
          },
          CreateGroupCertificateAuthority: {
            http: {
              requestUri: '/greengrass/groups/{GroupId}/certificateauthorities',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                AmznClientToken: {
                  location: 'header',
                  locationName: 'X-Amzn-Client-Token'
                },
                GroupId: {
                  location: 'uri',
                  locationName: 'GroupId'
                }
              },
              required: ['GroupId']
            },
            output: {
              type: 'structure',
              members: {
                GroupCertificateAuthorityArn: {}
              }
            }
          },
          CreateGroupVersion: {
            http: {
              requestUri: '/greengrass/groups/{GroupId}/versions',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                AmznClientToken: {
                  location: 'header',
                  locationName: 'X-Amzn-Client-Token'
                },
                ConnectorDefinitionVersionArn: {},
                CoreDefinitionVersionArn: {},
                DeviceDefinitionVersionArn: {},
                FunctionDefinitionVersionArn: {},
                GroupId: {
                  location: 'uri',
                  locationName: 'GroupId'
                },
                LoggerDefinitionVersionArn: {},
                ResourceDefinitionVersionArn: {},
                SubscriptionDefinitionVersionArn: {}
              },
              required: ['GroupId']
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                CreationTimestamp: {},
                Id: {},
                Version: {}
              }
            }
          },
          CreateLoggerDefinition: {
            http: {
              requestUri: '/greengrass/definition/loggers',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                AmznClientToken: {
                  location: 'header',
                  locationName: 'X-Amzn-Client-Token'
                },
                InitialVersion: {
                  shape: 'S1o'
                },
                Name: {},
                tags: {
                  shape: 'Sb'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                CreationTimestamp: {},
                Id: {},
                LastUpdatedTimestamp: {},
                LatestVersion: {},
                LatestVersionArn: {},
                Name: {}
              }
            }
          },
          CreateLoggerDefinitionVersion: {
            http: {
              requestUri: '/greengrass/definition/loggers/{LoggerDefinitionId}/versions',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                AmznClientToken: {
                  location: 'header',
                  locationName: 'X-Amzn-Client-Token'
                },
                LoggerDefinitionId: {
                  location: 'uri',
                  locationName: 'LoggerDefinitionId'
                },
                Loggers: {
                  shape: 'S1p'
                }
              },
              required: ['LoggerDefinitionId']
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                CreationTimestamp: {},
                Id: {},
                Version: {}
              }
            }
          },
          CreateResourceDefinition: {
            http: {
              requestUri: '/greengrass/definition/resources',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                AmznClientToken: {
                  location: 'header',
                  locationName: 'X-Amzn-Client-Token'
                },
                InitialVersion: {
                  shape: 'S1y'
                },
                Name: {},
                tags: {
                  shape: 'Sb'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                CreationTimestamp: {},
                Id: {},
                LastUpdatedTimestamp: {},
                LatestVersion: {},
                LatestVersionArn: {},
                Name: {}
              }
            }
          },
          CreateResourceDefinitionVersion: {
            http: {
              requestUri: '/greengrass/definition/resources/{ResourceDefinitionId}/versions',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                AmznClientToken: {
                  location: 'header',
                  locationName: 'X-Amzn-Client-Token'
                },
                ResourceDefinitionId: {
                  location: 'uri',
                  locationName: 'ResourceDefinitionId'
                },
                Resources: {
                  shape: 'S1z'
                }
              },
              required: ['ResourceDefinitionId']
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                CreationTimestamp: {},
                Id: {},
                Version: {}
              }
            }
          },
          CreateSoftwareUpdateJob: {
            http: {
              requestUri: '/greengrass/updates',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                AmznClientToken: {
                  location: 'header',
                  locationName: 'X-Amzn-Client-Token'
                },
                S3UrlSignerRole: {},
                SoftwareToUpdate: {},
                UpdateAgentLogLevel: {},
                UpdateTargets: {
                  type: 'list',
                  member: {}
                },
                UpdateTargetsArchitecture: {},
                UpdateTargetsOperatingSystem: {}
              },
              required: ['S3UrlSignerRole', 'UpdateTargetsArchitecture', 'SoftwareToUpdate', 'UpdateTargets', 'UpdateTargetsOperatingSystem']
            },
            output: {
              type: 'structure',
              members: {
                IotJobArn: {},
                IotJobId: {},
                PlatformSoftwareVersion: {}
              }
            }
          },
          CreateSubscriptionDefinition: {
            http: {
              requestUri: '/greengrass/definition/subscriptions',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                AmznClientToken: {
                  location: 'header',
                  locationName: 'X-Amzn-Client-Token'
                },
                InitialVersion: {
                  shape: 'S2m'
                },
                Name: {},
                tags: {
                  shape: 'Sb'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                CreationTimestamp: {},
                Id: {},
                LastUpdatedTimestamp: {},
                LatestVersion: {},
                LatestVersionArn: {},
                Name: {}
              }
            }
          },
          CreateSubscriptionDefinitionVersion: {
            http: {
              requestUri: '/greengrass/definition/subscriptions/{SubscriptionDefinitionId}/versions',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                AmznClientToken: {
                  location: 'header',
                  locationName: 'X-Amzn-Client-Token'
                },
                SubscriptionDefinitionId: {
                  location: 'uri',
                  locationName: 'SubscriptionDefinitionId'
                },
                Subscriptions: {
                  shape: 'S2n'
                }
              },
              required: ['SubscriptionDefinitionId']
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                CreationTimestamp: {},
                Id: {},
                Version: {}
              }
            }
          },
          DeleteConnectorDefinition: {
            http: {
              method: 'DELETE',
              requestUri: '/greengrass/definition/connectors/{ConnectorDefinitionId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ConnectorDefinitionId: {
                  location: 'uri',
                  locationName: 'ConnectorDefinitionId'
                }
              },
              required: ['ConnectorDefinitionId']
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteCoreDefinition: {
            http: {
              method: 'DELETE',
              requestUri: '/greengrass/definition/cores/{CoreDefinitionId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                CoreDefinitionId: {
                  location: 'uri',
                  locationName: 'CoreDefinitionId'
                }
              },
              required: ['CoreDefinitionId']
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteDeviceDefinition: {
            http: {
              method: 'DELETE',
              requestUri: '/greengrass/definition/devices/{DeviceDefinitionId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                DeviceDefinitionId: {
                  location: 'uri',
                  locationName: 'DeviceDefinitionId'
                }
              },
              required: ['DeviceDefinitionId']
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteFunctionDefinition: {
            http: {
              method: 'DELETE',
              requestUri: '/greengrass/definition/functions/{FunctionDefinitionId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                FunctionDefinitionId: {
                  location: 'uri',
                  locationName: 'FunctionDefinitionId'
                }
              },
              required: ['FunctionDefinitionId']
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteGroup: {
            http: {
              method: 'DELETE',
              requestUri: '/greengrass/groups/{GroupId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                GroupId: {
                  location: 'uri',
                  locationName: 'GroupId'
                }
              },
              required: ['GroupId']
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteLoggerDefinition: {
            http: {
              method: 'DELETE',
              requestUri: '/greengrass/definition/loggers/{LoggerDefinitionId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                LoggerDefinitionId: {
                  location: 'uri',
                  locationName: 'LoggerDefinitionId'
                }
              },
              required: ['LoggerDefinitionId']
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteResourceDefinition: {
            http: {
              method: 'DELETE',
              requestUri: '/greengrass/definition/resources/{ResourceDefinitionId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ResourceDefinitionId: {
                  location: 'uri',
                  locationName: 'ResourceDefinitionId'
                }
              },
              required: ['ResourceDefinitionId']
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteSubscriptionDefinition: {
            http: {
              method: 'DELETE',
              requestUri: '/greengrass/definition/subscriptions/{SubscriptionDefinitionId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                SubscriptionDefinitionId: {
                  location: 'uri',
                  locationName: 'SubscriptionDefinitionId'
                }
              },
              required: ['SubscriptionDefinitionId']
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DisassociateRoleFromGroup: {
            http: {
              method: 'DELETE',
              requestUri: '/greengrass/groups/{GroupId}/role',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                GroupId: {
                  location: 'uri',
                  locationName: 'GroupId'
                }
              },
              required: ['GroupId']
            },
            output: {
              type: 'structure',
              members: {
                DisassociatedAt: {}
              }
            }
          },
          DisassociateServiceRoleFromAccount: {
            http: {
              method: 'DELETE',
              requestUri: '/greengrass/servicerole',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {
                DisassociatedAt: {}
              }
            }
          },
          GetAssociatedRole: {
            http: {
              method: 'GET',
              requestUri: '/greengrass/groups/{GroupId}/role',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                GroupId: {
                  location: 'uri',
                  locationName: 'GroupId'
                }
              },
              required: ['GroupId']
            },
            output: {
              type: 'structure',
              members: {
                AssociatedAt: {},
                RoleArn: {}
              }
            }
          },
          GetBulkDeploymentStatus: {
            http: {
              method: 'GET',
              requestUri: '/greengrass/bulk/deployments/{BulkDeploymentId}/status',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                BulkDeploymentId: {
                  location: 'uri',
                  locationName: 'BulkDeploymentId'
                }
              },
              required: ['BulkDeploymentId']
            },
            output: {
              type: 'structure',
              members: {
                BulkDeploymentMetrics: {
                  type: 'structure',
                  members: {
                    InvalidInputRecords: {
                      type: 'integer'
                    },
                    RecordsProcessed: {
                      type: 'integer'
                    },
                    RetryAttempts: {
                      type: 'integer'
                    }
                  }
                },
                BulkDeploymentStatus: {},
                CreatedAt: {},
                ErrorDetails: {
                  shape: 'S3i'
                },
                ErrorMessage: {},
                tags: {
                  shape: 'Sb'
                }
              }
            }
          },
          GetConnectivityInfo: {
            http: {
              method: 'GET',
              requestUri: '/greengrass/things/{ThingName}/connectivityInfo',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ThingName: {
                  location: 'uri',
                  locationName: 'ThingName'
                }
              },
              required: ['ThingName']
            },
            output: {
              type: 'structure',
              members: {
                ConnectivityInfo: {
                  shape: 'S3m'
                },
                Message: {
                  locationName: 'message'
                }
              }
            }
          },
          GetConnectorDefinition: {
            http: {
              method: 'GET',
              requestUri: '/greengrass/definition/connectors/{ConnectorDefinitionId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ConnectorDefinitionId: {
                  location: 'uri',
                  locationName: 'ConnectorDefinitionId'
                }
              },
              required: ['ConnectorDefinitionId']
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                CreationTimestamp: {},
                Id: {},
                LastUpdatedTimestamp: {},
                LatestVersion: {},
                LatestVersionArn: {},
                Name: {},
                tags: {
                  shape: 'Sb'
                }
              }
            }
          },
          GetConnectorDefinitionVersion: {
            http: {
              method: 'GET',
              requestUri: '/greengrass/definition/connectors/{ConnectorDefinitionId}/versions/{ConnectorDefinitionVersionId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ConnectorDefinitionId: {
                  location: 'uri',
                  locationName: 'ConnectorDefinitionId'
                },
                ConnectorDefinitionVersionId: {
                  location: 'uri',
                  locationName: 'ConnectorDefinitionVersionId'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'NextToken'
                }
              },
              required: ['ConnectorDefinitionId', 'ConnectorDefinitionVersionId']
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                CreationTimestamp: {},
                Definition: {
                  shape: 'S7'
                },
                Id: {},
                NextToken: {},
                Version: {}
              }
            }
          },
          GetCoreDefinition: {
            http: {
              method: 'GET',
              requestUri: '/greengrass/definition/cores/{CoreDefinitionId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                CoreDefinitionId: {
                  location: 'uri',
                  locationName: 'CoreDefinitionId'
                }
              },
              required: ['CoreDefinitionId']
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                CreationTimestamp: {},
                Id: {},
                LastUpdatedTimestamp: {},
                LatestVersion: {},
                LatestVersionArn: {},
                Name: {},
                tags: {
                  shape: 'Sb'
                }
              }
            }
          },
          GetCoreDefinitionVersion: {
            http: {
              method: 'GET',
              requestUri: '/greengrass/definition/cores/{CoreDefinitionId}/versions/{CoreDefinitionVersionId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                CoreDefinitionId: {
                  location: 'uri',
                  locationName: 'CoreDefinitionId'
                },
                CoreDefinitionVersionId: {
                  location: 'uri',
                  locationName: 'CoreDefinitionVersionId'
                }
              },
              required: ['CoreDefinitionId', 'CoreDefinitionVersionId']
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                CreationTimestamp: {},
                Definition: {
                  shape: 'Sg'
                },
                Id: {},
                NextToken: {},
                Version: {}
              }
            }
          },
          GetDeploymentStatus: {
            http: {
              method: 'GET',
              requestUri: '/greengrass/groups/{GroupId}/deployments/{DeploymentId}/status',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                DeploymentId: {
                  location: 'uri',
                  locationName: 'DeploymentId'
                },
                GroupId: {
                  location: 'uri',
                  locationName: 'GroupId'
                }
              },
              required: ['GroupId', 'DeploymentId']
            },
            output: {
              type: 'structure',
              members: {
                DeploymentStatus: {},
                DeploymentType: {},
                ErrorDetails: {
                  shape: 'S3i'
                },
                ErrorMessage: {},
                UpdatedAt: {}
              }
            }
          },
          GetDeviceDefinition: {
            http: {
              method: 'GET',
              requestUri: '/greengrass/definition/devices/{DeviceDefinitionId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                DeviceDefinitionId: {
                  location: 'uri',
                  locationName: 'DeviceDefinitionId'
                }
              },
              required: ['DeviceDefinitionId']
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                CreationTimestamp: {},
                Id: {},
                LastUpdatedTimestamp: {},
                LatestVersion: {},
                LatestVersionArn: {},
                Name: {},
                tags: {
                  shape: 'Sb'
                }
              }
            }
          },
          GetDeviceDefinitionVersion: {
            http: {
              method: 'GET',
              requestUri: '/greengrass/definition/devices/{DeviceDefinitionId}/versions/{DeviceDefinitionVersionId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                DeviceDefinitionId: {
                  location: 'uri',
                  locationName: 'DeviceDefinitionId'
                },
                DeviceDefinitionVersionId: {
                  location: 'uri',
                  locationName: 'DeviceDefinitionVersionId'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'NextToken'
                }
              },
              required: ['DeviceDefinitionVersionId', 'DeviceDefinitionId']
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                CreationTimestamp: {},
                Definition: {
                  shape: 'Sr'
                },
                Id: {},
                NextToken: {},
                Version: {}
              }
            }
          },
          GetFunctionDefinition: {
            http: {
              method: 'GET',
              requestUri: '/greengrass/definition/functions/{FunctionDefinitionId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                FunctionDefinitionId: {
                  location: 'uri',
                  locationName: 'FunctionDefinitionId'
                }
              },
              required: ['FunctionDefinitionId']
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                CreationTimestamp: {},
                Id: {},
                LastUpdatedTimestamp: {},
                LatestVersion: {},
                LatestVersionArn: {},
                Name: {},
                tags: {
                  shape: 'Sb'
                }
              }
            }
          },
          GetFunctionDefinitionVersion: {
            http: {
              method: 'GET',
              requestUri: '/greengrass/definition/functions/{FunctionDefinitionId}/versions/{FunctionDefinitionVersionId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                FunctionDefinitionId: {
                  location: 'uri',
                  locationName: 'FunctionDefinitionId'
                },
                FunctionDefinitionVersionId: {
                  location: 'uri',
                  locationName: 'FunctionDefinitionVersionId'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'NextToken'
                }
              },
              required: ['FunctionDefinitionId', 'FunctionDefinitionVersionId']
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                CreationTimestamp: {},
                Definition: {
                  shape: 'Sy'
                },
                Id: {},
                NextToken: {},
                Version: {}
              }
            }
          },
          GetGroup: {
            http: {
              method: 'GET',
              requestUri: '/greengrass/groups/{GroupId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                GroupId: {
                  location: 'uri',
                  locationName: 'GroupId'
                }
              },
              required: ['GroupId']
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                CreationTimestamp: {},
                Id: {},
                LastUpdatedTimestamp: {},
                LatestVersion: {},
                LatestVersionArn: {},
                Name: {},
                tags: {
                  shape: 'Sb'
                }
              }
            }
          },
          GetGroupCertificateAuthority: {
            http: {
              method: 'GET',
              requestUri: '/greengrass/groups/{GroupId}/certificateauthorities/{CertificateAuthorityId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                CertificateAuthorityId: {
                  location: 'uri',
                  locationName: 'CertificateAuthorityId'
                },
                GroupId: {
                  location: 'uri',
                  locationName: 'GroupId'
                }
              },
              required: ['CertificateAuthorityId', 'GroupId']
            },
            output: {
              type: 'structure',
              members: {
                GroupCertificateAuthorityArn: {},
                GroupCertificateAuthorityId: {},
                PemEncodedCertificate: {}
              }
            }
          },
          GetGroupCertificateConfiguration: {
            http: {
              method: 'GET',
              requestUri: '/greengrass/groups/{GroupId}/certificateauthorities/configuration/expiry',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                GroupId: {
                  location: 'uri',
                  locationName: 'GroupId'
                }
              },
              required: ['GroupId']
            },
            output: {
              type: 'structure',
              members: {
                CertificateAuthorityExpiryInMilliseconds: {},
                CertificateExpiryInMilliseconds: {},
                GroupId: {}
              }
            }
          },
          GetGroupVersion: {
            http: {
              method: 'GET',
              requestUri: '/greengrass/groups/{GroupId}/versions/{GroupVersionId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                GroupId: {
                  location: 'uri',
                  locationName: 'GroupId'
                },
                GroupVersionId: {
                  location: 'uri',
                  locationName: 'GroupVersionId'
                }
              },
              required: ['GroupVersionId', 'GroupId']
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                CreationTimestamp: {},
                Definition: {
                  shape: 'S1h'
                },
                Id: {},
                Version: {}
              }
            }
          },
          GetLoggerDefinition: {
            http: {
              method: 'GET',
              requestUri: '/greengrass/definition/loggers/{LoggerDefinitionId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                LoggerDefinitionId: {
                  location: 'uri',
                  locationName: 'LoggerDefinitionId'
                }
              },
              required: ['LoggerDefinitionId']
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                CreationTimestamp: {},
                Id: {},
                LastUpdatedTimestamp: {},
                LatestVersion: {},
                LatestVersionArn: {},
                Name: {},
                tags: {
                  shape: 'Sb'
                }
              }
            }
          },
          GetLoggerDefinitionVersion: {
            http: {
              method: 'GET',
              requestUri: '/greengrass/definition/loggers/{LoggerDefinitionId}/versions/{LoggerDefinitionVersionId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                LoggerDefinitionId: {
                  location: 'uri',
                  locationName: 'LoggerDefinitionId'
                },
                LoggerDefinitionVersionId: {
                  location: 'uri',
                  locationName: 'LoggerDefinitionVersionId'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'NextToken'
                }
              },
              required: ['LoggerDefinitionVersionId', 'LoggerDefinitionId']
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                CreationTimestamp: {},
                Definition: {
                  shape: 'S1o'
                },
                Id: {},
                Version: {}
              }
            }
          },
          GetResourceDefinition: {
            http: {
              method: 'GET',
              requestUri: '/greengrass/definition/resources/{ResourceDefinitionId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ResourceDefinitionId: {
                  location: 'uri',
                  locationName: 'ResourceDefinitionId'
                }
              },
              required: ['ResourceDefinitionId']
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                CreationTimestamp: {},
                Id: {},
                LastUpdatedTimestamp: {},
                LatestVersion: {},
                LatestVersionArn: {},
                Name: {},
                tags: {
                  shape: 'Sb'
                }
              }
            }
          },
          GetResourceDefinitionVersion: {
            http: {
              method: 'GET',
              requestUri: '/greengrass/definition/resources/{ResourceDefinitionId}/versions/{ResourceDefinitionVersionId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ResourceDefinitionId: {
                  location: 'uri',
                  locationName: 'ResourceDefinitionId'
                },
                ResourceDefinitionVersionId: {
                  location: 'uri',
                  locationName: 'ResourceDefinitionVersionId'
                }
              },
              required: ['ResourceDefinitionVersionId', 'ResourceDefinitionId']
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                CreationTimestamp: {},
                Definition: {
                  shape: 'S1y'
                },
                Id: {},
                Version: {}
              }
            }
          },
          GetServiceRoleForAccount: {
            http: {
              method: 'GET',
              requestUri: '/greengrass/servicerole',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {
                AssociatedAt: {},
                RoleArn: {}
              }
            }
          },
          GetSubscriptionDefinition: {
            http: {
              method: 'GET',
              requestUri: '/greengrass/definition/subscriptions/{SubscriptionDefinitionId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                SubscriptionDefinitionId: {
                  location: 'uri',
                  locationName: 'SubscriptionDefinitionId'
                }
              },
              required: ['SubscriptionDefinitionId']
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                CreationTimestamp: {},
                Id: {},
                LastUpdatedTimestamp: {},
                LatestVersion: {},
                LatestVersionArn: {},
                Name: {},
                tags: {
                  shape: 'Sb'
                }
              }
            }
          },
          GetSubscriptionDefinitionVersion: {
            http: {
              method: 'GET',
              requestUri: '/greengrass/definition/subscriptions/{SubscriptionDefinitionId}/versions/{SubscriptionDefinitionVersionId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                NextToken: {
                  location: 'querystring',
                  locationName: 'NextToken'
                },
                SubscriptionDefinitionId: {
                  location: 'uri',
                  locationName: 'SubscriptionDefinitionId'
                },
                SubscriptionDefinitionVersionId: {
                  location: 'uri',
                  locationName: 'SubscriptionDefinitionVersionId'
                }
              },
              required: ['SubscriptionDefinitionId', 'SubscriptionDefinitionVersionId']
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                CreationTimestamp: {},
                Definition: {
                  shape: 'S2m'
                },
                Id: {},
                NextToken: {},
                Version: {}
              }
            }
          },
          GetThingRuntimeConfiguration: {
            http: {
              method: 'GET',
              requestUri: '/greengrass/things/{ThingName}/runtimeconfig',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ThingName: {
                  location: 'uri',
                  locationName: 'ThingName'
                }
              },
              required: ['ThingName']
            },
            output: {
              type: 'structure',
              members: {
                RuntimeConfiguration: {
                  type: 'structure',
                  members: {
                    TelemetryConfiguration: {
                      type: 'structure',
                      members: {
                        ConfigurationSyncStatus: {},
                        Telemetry: {}
                      },
                      required: ['Telemetry']
                    }
                  }
                }
              }
            }
          },
          ListBulkDeploymentDetailedReports: {
            http: {
              method: 'GET',
              requestUri: '/greengrass/bulk/deployments/{BulkDeploymentId}/detailed-reports',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                BulkDeploymentId: {
                  location: 'uri',
                  locationName: 'BulkDeploymentId'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'MaxResults'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'NextToken'
                }
              },
              required: ['BulkDeploymentId']
            },
            output: {
              type: 'structure',
              members: {
                Deployments: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      CreatedAt: {},
                      DeploymentArn: {},
                      DeploymentId: {},
                      DeploymentStatus: {},
                      DeploymentType: {},
                      ErrorDetails: {
                        shape: 'S3i'
                      },
                      ErrorMessage: {},
                      GroupArn: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListBulkDeployments: {
            http: {
              method: 'GET',
              requestUri: '/greengrass/bulk/deployments',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                MaxResults: {
                  location: 'querystring',
                  locationName: 'MaxResults'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'NextToken'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                BulkDeployments: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      BulkDeploymentArn: {},
                      BulkDeploymentId: {},
                      CreatedAt: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListConnectorDefinitionVersions: {
            http: {
              method: 'GET',
              requestUri: '/greengrass/definition/connectors/{ConnectorDefinitionId}/versions',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ConnectorDefinitionId: {
                  location: 'uri',
                  locationName: 'ConnectorDefinitionId'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'MaxResults'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'NextToken'
                }
              },
              required: ['ConnectorDefinitionId']
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                Versions: {
                  shape: 'S58'
                }
              }
            }
          },
          ListConnectorDefinitions: {
            http: {
              method: 'GET',
              requestUri: '/greengrass/definition/connectors',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                MaxResults: {
                  location: 'querystring',
                  locationName: 'MaxResults'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'NextToken'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Definitions: {
                  shape: 'S5c'
                },
                NextToken: {}
              }
            }
          },
          ListCoreDefinitionVersions: {
            http: {
              method: 'GET',
              requestUri: '/greengrass/definition/cores/{CoreDefinitionId}/versions',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                CoreDefinitionId: {
                  location: 'uri',
                  locationName: 'CoreDefinitionId'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'MaxResults'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'NextToken'
                }
              },
              required: ['CoreDefinitionId']
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                Versions: {
                  shape: 'S58'
                }
              }
            }
          },
          ListCoreDefinitions: {
            http: {
              method: 'GET',
              requestUri: '/greengrass/definition/cores',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                MaxResults: {
                  location: 'querystring',
                  locationName: 'MaxResults'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'NextToken'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Definitions: {
                  shape: 'S5c'
                },
                NextToken: {}
              }
            }
          },
          ListDeployments: {
            http: {
              method: 'GET',
              requestUri: '/greengrass/groups/{GroupId}/deployments',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                GroupId: {
                  location: 'uri',
                  locationName: 'GroupId'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'MaxResults'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'NextToken'
                }
              },
              required: ['GroupId']
            },
            output: {
              type: 'structure',
              members: {
                Deployments: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      CreatedAt: {},
                      DeploymentArn: {},
                      DeploymentId: {},
                      DeploymentType: {},
                      GroupArn: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListDeviceDefinitionVersions: {
            http: {
              method: 'GET',
              requestUri: '/greengrass/definition/devices/{DeviceDefinitionId}/versions',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                DeviceDefinitionId: {
                  location: 'uri',
                  locationName: 'DeviceDefinitionId'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'MaxResults'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'NextToken'
                }
              },
              required: ['DeviceDefinitionId']
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                Versions: {
                  shape: 'S58'
                }
              }
            }
          },
          ListDeviceDefinitions: {
            http: {
              method: 'GET',
              requestUri: '/greengrass/definition/devices',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                MaxResults: {
                  location: 'querystring',
                  locationName: 'MaxResults'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'NextToken'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Definitions: {
                  shape: 'S5c'
                },
                NextToken: {}
              }
            }
          },
          ListFunctionDefinitionVersions: {
            http: {
              method: 'GET',
              requestUri: '/greengrass/definition/functions/{FunctionDefinitionId}/versions',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                FunctionDefinitionId: {
                  location: 'uri',
                  locationName: 'FunctionDefinitionId'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'MaxResults'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'NextToken'
                }
              },
              required: ['FunctionDefinitionId']
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                Versions: {
                  shape: 'S58'
                }
              }
            }
          },
          ListFunctionDefinitions: {
            http: {
              method: 'GET',
              requestUri: '/greengrass/definition/functions',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                MaxResults: {
                  location: 'querystring',
                  locationName: 'MaxResults'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'NextToken'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Definitions: {
                  shape: 'S5c'
                },
                NextToken: {}
              }
            }
          },
          ListGroupCertificateAuthorities: {
            http: {
              method: 'GET',
              requestUri: '/greengrass/groups/{GroupId}/certificateauthorities',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                GroupId: {
                  location: 'uri',
                  locationName: 'GroupId'
                }
              },
              required: ['GroupId']
            },
            output: {
              type: 'structure',
              members: {
                GroupCertificateAuthorities: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      GroupCertificateAuthorityArn: {},
                      GroupCertificateAuthorityId: {}
                    }
                  }
                }
              }
            }
          },
          ListGroupVersions: {
            http: {
              method: 'GET',
              requestUri: '/greengrass/groups/{GroupId}/versions',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                GroupId: {
                  location: 'uri',
                  locationName: 'GroupId'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'MaxResults'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'NextToken'
                }
              },
              required: ['GroupId']
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                Versions: {
                  shape: 'S58'
                }
              }
            }
          },
          ListGroups: {
            http: {
              method: 'GET',
              requestUri: '/greengrass/groups',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                MaxResults: {
                  location: 'querystring',
                  locationName: 'MaxResults'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'NextToken'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Groups: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Arn: {},
                      CreationTimestamp: {},
                      Id: {},
                      LastUpdatedTimestamp: {},
                      LatestVersion: {},
                      LatestVersionArn: {},
                      Name: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListLoggerDefinitionVersions: {
            http: {
              method: 'GET',
              requestUri: '/greengrass/definition/loggers/{LoggerDefinitionId}/versions',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                LoggerDefinitionId: {
                  location: 'uri',
                  locationName: 'LoggerDefinitionId'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'MaxResults'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'NextToken'
                }
              },
              required: ['LoggerDefinitionId']
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                Versions: {
                  shape: 'S58'
                }
              }
            }
          },
          ListLoggerDefinitions: {
            http: {
              method: 'GET',
              requestUri: '/greengrass/definition/loggers',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                MaxResults: {
                  location: 'querystring',
                  locationName: 'MaxResults'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'NextToken'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Definitions: {
                  shape: 'S5c'
                },
                NextToken: {}
              }
            }
          },
          ListResourceDefinitionVersions: {
            http: {
              method: 'GET',
              requestUri: '/greengrass/definition/resources/{ResourceDefinitionId}/versions',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                MaxResults: {
                  location: 'querystring',
                  locationName: 'MaxResults'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'NextToken'
                },
                ResourceDefinitionId: {
                  location: 'uri',
                  locationName: 'ResourceDefinitionId'
                }
              },
              required: ['ResourceDefinitionId']
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                Versions: {
                  shape: 'S58'
                }
              }
            }
          },
          ListResourceDefinitions: {
            http: {
              method: 'GET',
              requestUri: '/greengrass/definition/resources',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                MaxResults: {
                  location: 'querystring',
                  locationName: 'MaxResults'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'NextToken'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Definitions: {
                  shape: 'S5c'
                },
                NextToken: {}
              }
            }
          },
          ListSubscriptionDefinitionVersions: {
            http: {
              method: 'GET',
              requestUri: '/greengrass/definition/subscriptions/{SubscriptionDefinitionId}/versions',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                MaxResults: {
                  location: 'querystring',
                  locationName: 'MaxResults'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'NextToken'
                },
                SubscriptionDefinitionId: {
                  location: 'uri',
                  locationName: 'SubscriptionDefinitionId'
                }
              },
              required: ['SubscriptionDefinitionId']
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                Versions: {
                  shape: 'S58'
                }
              }
            }
          },
          ListSubscriptionDefinitions: {
            http: {
              method: 'GET',
              requestUri: '/greengrass/definition/subscriptions',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                MaxResults: {
                  location: 'querystring',
                  locationName: 'MaxResults'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'NextToken'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Definitions: {
                  shape: 'S5c'
                },
                NextToken: {}
              }
            }
          },
          ListTagsForResource: {
            http: {
              method: 'GET',
              requestUri: '/tags/{resource-arn}',
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
                tags: {
                  shape: 'Sb'
                }
              }
            }
          },
          ResetDeployments: {
            http: {
              requestUri: '/greengrass/groups/{GroupId}/deployments/$reset',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                AmznClientToken: {
                  location: 'header',
                  locationName: 'X-Amzn-Client-Token'
                },
                Force: {
                  type: 'boolean'
                },
                GroupId: {
                  location: 'uri',
                  locationName: 'GroupId'
                }
              },
              required: ['GroupId']
            },
            output: {
              type: 'structure',
              members: {
                DeploymentArn: {},
                DeploymentId: {}
              }
            }
          },
          StartBulkDeployment: {
            http: {
              requestUri: '/greengrass/bulk/deployments',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                AmznClientToken: {
                  location: 'header',
                  locationName: 'X-Amzn-Client-Token'
                },
                ExecutionRoleArn: {},
                InputFileUri: {},
                tags: {
                  shape: 'Sb'
                }
              },
              required: ['ExecutionRoleArn', 'InputFileUri']
            },
            output: {
              type: 'structure',
              members: {
                BulkDeploymentArn: {},
                BulkDeploymentId: {}
              }
            }
          },
          StopBulkDeployment: {
            http: {
              method: 'PUT',
              requestUri: '/greengrass/bulk/deployments/{BulkDeploymentId}/$stop',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                BulkDeploymentId: {
                  location: 'uri',
                  locationName: 'BulkDeploymentId'
                }
              },
              required: ['BulkDeploymentId']
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          TagResource: {
            http: {
              requestUri: '/tags/{resource-arn}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              members: {
                ResourceArn: {
                  location: 'uri',
                  locationName: 'resource-arn'
                },
                tags: {
                  shape: 'Sb'
                }
              },
              required: ['ResourceArn']
            }
          },
          UntagResource: {
            http: {
              method: 'DELETE',
              requestUri: '/tags/{resource-arn}',
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
                  shape: 'S29',
                  location: 'querystring',
                  locationName: 'tagKeys'
                }
              },
              required: ['TagKeys', 'ResourceArn']
            }
          },
          UpdateConnectivityInfo: {
            http: {
              method: 'PUT',
              requestUri: '/greengrass/things/{ThingName}/connectivityInfo',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ConnectivityInfo: {
                  shape: 'S3m'
                },
                ThingName: {
                  location: 'uri',
                  locationName: 'ThingName'
                }
              },
              required: ['ThingName']
            },
            output: {
              type: 'structure',
              members: {
                Message: {
                  locationName: 'message'
                },
                Version: {}
              }
            }
          },
          UpdateConnectorDefinition: {
            http: {
              method: 'PUT',
              requestUri: '/greengrass/definition/connectors/{ConnectorDefinitionId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ConnectorDefinitionId: {
                  location: 'uri',
                  locationName: 'ConnectorDefinitionId'
                },
                Name: {}
              },
              required: ['ConnectorDefinitionId']
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateCoreDefinition: {
            http: {
              method: 'PUT',
              requestUri: '/greengrass/definition/cores/{CoreDefinitionId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                CoreDefinitionId: {
                  location: 'uri',
                  locationName: 'CoreDefinitionId'
                },
                Name: {}
              },
              required: ['CoreDefinitionId']
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateDeviceDefinition: {
            http: {
              method: 'PUT',
              requestUri: '/greengrass/definition/devices/{DeviceDefinitionId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                DeviceDefinitionId: {
                  location: 'uri',
                  locationName: 'DeviceDefinitionId'
                },
                Name: {}
              },
              required: ['DeviceDefinitionId']
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateFunctionDefinition: {
            http: {
              method: 'PUT',
              requestUri: '/greengrass/definition/functions/{FunctionDefinitionId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                FunctionDefinitionId: {
                  location: 'uri',
                  locationName: 'FunctionDefinitionId'
                },
                Name: {}
              },
              required: ['FunctionDefinitionId']
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateGroup: {
            http: {
              method: 'PUT',
              requestUri: '/greengrass/groups/{GroupId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                GroupId: {
                  location: 'uri',
                  locationName: 'GroupId'
                },
                Name: {}
              },
              required: ['GroupId']
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateGroupCertificateConfiguration: {
            http: {
              method: 'PUT',
              requestUri: '/greengrass/groups/{GroupId}/certificateauthorities/configuration/expiry',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                CertificateExpiryInMilliseconds: {},
                GroupId: {
                  location: 'uri',
                  locationName: 'GroupId'
                }
              },
              required: ['GroupId']
            },
            output: {
              type: 'structure',
              members: {
                CertificateAuthorityExpiryInMilliseconds: {},
                CertificateExpiryInMilliseconds: {},
                GroupId: {}
              }
            }
          },
          UpdateLoggerDefinition: {
            http: {
              method: 'PUT',
              requestUri: '/greengrass/definition/loggers/{LoggerDefinitionId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                LoggerDefinitionId: {
                  location: 'uri',
                  locationName: 'LoggerDefinitionId'
                },
                Name: {}
              },
              required: ['LoggerDefinitionId']
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateResourceDefinition: {
            http: {
              method: 'PUT',
              requestUri: '/greengrass/definition/resources/{ResourceDefinitionId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                Name: {},
                ResourceDefinitionId: {
                  location: 'uri',
                  locationName: 'ResourceDefinitionId'
                }
              },
              required: ['ResourceDefinitionId']
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateSubscriptionDefinition: {
            http: {
              method: 'PUT',
              requestUri: '/greengrass/definition/subscriptions/{SubscriptionDefinitionId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                Name: {},
                SubscriptionDefinitionId: {
                  location: 'uri',
                  locationName: 'SubscriptionDefinitionId'
                }
              },
              required: ['SubscriptionDefinitionId']
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateThingRuntimeConfiguration: {
            http: {
              method: 'PUT',
              requestUri: '/greengrass/things/{ThingName}/runtimeconfig',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                TelemetryConfiguration: {
                  type: 'structure',
                  members: {
                    Telemetry: {}
                  },
                  required: ['Telemetry']
                },
                ThingName: {
                  location: 'uri',
                  locationName: 'ThingName'
                }
              },
              required: ['ThingName']
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
            members: {
              Connectors: {
                shape: 'S8'
              }
            }
          },
          S8: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                ConnectorArn: {},
                Id: {},
                Parameters: {
                  shape: 'Sa'
                }
              },
              required: ['ConnectorArn', 'Id']
            }
          },
          Sa: {
            type: 'map',
            key: {},
            value: {}
          },
          Sb: {
            type: 'map',
            key: {},
            value: {}
          },
          Sg: {
            type: 'structure',
            members: {
              Cores: {
                shape: 'Sh'
              }
            }
          },
          Sh: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                CertificateArn: {},
                Id: {},
                SyncShadow: {
                  type: 'boolean'
                },
                ThingArn: {}
              },
              required: ['ThingArn', 'Id', 'CertificateArn']
            }
          },
          Sr: {
            type: 'structure',
            members: {
              Devices: {
                shape: 'Ss'
              }
            }
          },
          Ss: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                CertificateArn: {},
                Id: {},
                SyncShadow: {
                  type: 'boolean'
                },
                ThingArn: {}
              },
              required: ['ThingArn', 'Id', 'CertificateArn']
            }
          },
          Sy: {
            type: 'structure',
            members: {
              DefaultConfig: {
                shape: 'Sz'
              },
              Functions: {
                shape: 'S14'
              }
            }
          },
          Sz: {
            type: 'structure',
            members: {
              Execution: {
                type: 'structure',
                members: {
                  IsolationMode: {},
                  RunAs: {
                    shape: 'S12'
                  }
                }
              }
            }
          },
          S12: {
            type: 'structure',
            members: {
              Gid: {
                type: 'integer'
              },
              Uid: {
                type: 'integer'
              }
            }
          },
          S14: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                FunctionArn: {},
                FunctionConfiguration: {
                  type: 'structure',
                  members: {
                    EncodingType: {},
                    Environment: {
                      type: 'structure',
                      members: {
                        AccessSysfs: {
                          type: 'boolean'
                        },
                        Execution: {
                          type: 'structure',
                          members: {
                            IsolationMode: {},
                            RunAs: {
                              shape: 'S12'
                            }
                          }
                        },
                        ResourceAccessPolicies: {
                          type: 'list',
                          member: {
                            type: 'structure',
                            members: {
                              Permission: {},
                              ResourceId: {}
                            },
                            required: ['ResourceId']
                          }
                        },
                        Variables: {
                          shape: 'Sa'
                        }
                      }
                    },
                    ExecArgs: {},
                    Executable: {},
                    MemorySize: {
                      type: 'integer'
                    },
                    Pinned: {
                      type: 'boolean'
                    },
                    Timeout: {
                      type: 'integer'
                    },
                    FunctionRuntimeOverride: {}
                  }
                },
                Id: {}
              },
              required: ['Id']
            }
          },
          S1h: {
            type: 'structure',
            members: {
              ConnectorDefinitionVersionArn: {},
              CoreDefinitionVersionArn: {},
              DeviceDefinitionVersionArn: {},
              FunctionDefinitionVersionArn: {},
              LoggerDefinitionVersionArn: {},
              ResourceDefinitionVersionArn: {},
              SubscriptionDefinitionVersionArn: {}
            }
          },
          S1o: {
            type: 'structure',
            members: {
              Loggers: {
                shape: 'S1p'
              }
            }
          },
          S1p: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Component: {},
                Id: {},
                Level: {},
                Space: {
                  type: 'integer'
                },
                Type: {}
              },
              required: ['Type', 'Level', 'Id', 'Component']
            }
          },
          S1y: {
            type: 'structure',
            members: {
              Resources: {
                shape: 'S1z'
              }
            }
          },
          S1z: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Id: {},
                Name: {},
                ResourceDataContainer: {
                  type: 'structure',
                  members: {
                    LocalDeviceResourceData: {
                      type: 'structure',
                      members: {
                        GroupOwnerSetting: {
                          shape: 'S23'
                        },
                        SourcePath: {}
                      }
                    },
                    LocalVolumeResourceData: {
                      type: 'structure',
                      members: {
                        DestinationPath: {},
                        GroupOwnerSetting: {
                          shape: 'S23'
                        },
                        SourcePath: {}
                      }
                    },
                    S3MachineLearningModelResourceData: {
                      type: 'structure',
                      members: {
                        DestinationPath: {},
                        OwnerSetting: {
                          shape: 'S26'
                        },
                        S3Uri: {}
                      }
                    },
                    SageMakerMachineLearningModelResourceData: {
                      type: 'structure',
                      members: {
                        DestinationPath: {},
                        OwnerSetting: {
                          shape: 'S26'
                        },
                        SageMakerJobArn: {}
                      }
                    },
                    SecretsManagerSecretResourceData: {
                      type: 'structure',
                      members: {
                        ARN: {},
                        AdditionalStagingLabelsToDownload: {
                          shape: 'S29'
                        }
                      }
                    }
                  }
                }
              },
              required: ['ResourceDataContainer', 'Id', 'Name']
            }
          },
          S23: {
            type: 'structure',
            members: {
              AutoAddGroupOwner: {
                type: 'boolean'
              },
              GroupOwner: {}
            }
          },
          S26: {
            type: 'structure',
            members: {
              GroupOwner: {},
              GroupPermission: {}
            },
            required: ['GroupOwner', 'GroupPermission']
          },
          S29: {
            type: 'list',
            member: {}
          },
          S2m: {
            type: 'structure',
            members: {
              Subscriptions: {
                shape: 'S2n'
              }
            }
          },
          S2n: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Id: {},
                Source: {},
                Subject: {},
                Target: {}
              },
              required: ['Target', 'Id', 'Subject', 'Source']
            }
          },
          S3i: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                DetailedErrorCode: {},
                DetailedErrorMessage: {}
              }
            }
          },
          S3m: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                HostAddress: {},
                Id: {},
                Metadata: {},
                PortNumber: {
                  type: 'integer'
                }
              }
            }
          },
          S58: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Arn: {},
                CreationTimestamp: {},
                Id: {},
                Version: {}
              }
            }
          },
          S5c: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Arn: {},
                CreationTimestamp: {},
                Id: {},
                LastUpdatedTimestamp: {},
                LatestVersion: {},
                LatestVersionArn: {},
                Name: {},
                Tags: {
                  shape: 'Sb',
                  locationName: 'tags'
                }
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=53a29140fafcfc421272b6d6bbbfcf597e5df864.js.map