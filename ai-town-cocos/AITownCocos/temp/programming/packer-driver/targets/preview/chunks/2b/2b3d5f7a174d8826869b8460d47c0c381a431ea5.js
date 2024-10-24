System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        metadata: {
          apiVersion: '2017-09-08',
          endpointPrefix: 'serverlessrepo',
          signingName: 'serverlessrepo',
          serviceFullName: 'AWSServerlessApplicationRepository',
          serviceId: 'ServerlessApplicationRepository',
          protocol: 'rest-json',
          jsonVersion: '1.1',
          uid: 'serverlessrepo-2017-09-08',
          signatureVersion: 'v4'
        },
        operations: {
          CreateApplication: {
            http: {
              requestUri: '/applications',
              responseCode: 201
            },
            input: {
              type: 'structure',
              members: {
                Author: {
                  locationName: 'author'
                },
                Description: {
                  locationName: 'description'
                },
                HomePageUrl: {
                  locationName: 'homePageUrl'
                },
                Labels: {
                  shape: 'S3',
                  locationName: 'labels'
                },
                LicenseBody: {
                  locationName: 'licenseBody'
                },
                LicenseUrl: {
                  locationName: 'licenseUrl'
                },
                Name: {
                  locationName: 'name'
                },
                ReadmeBody: {
                  locationName: 'readmeBody'
                },
                ReadmeUrl: {
                  locationName: 'readmeUrl'
                },
                SemanticVersion: {
                  locationName: 'semanticVersion'
                },
                SourceCodeArchiveUrl: {
                  locationName: 'sourceCodeArchiveUrl'
                },
                SourceCodeUrl: {
                  locationName: 'sourceCodeUrl'
                },
                SpdxLicenseId: {
                  locationName: 'spdxLicenseId'
                },
                TemplateBody: {
                  locationName: 'templateBody'
                },
                TemplateUrl: {
                  locationName: 'templateUrl'
                }
              },
              required: ['Description', 'Name', 'Author']
            },
            output: {
              type: 'structure',
              members: {
                ApplicationId: {
                  locationName: 'applicationId'
                },
                Author: {
                  locationName: 'author'
                },
                CreationTime: {
                  locationName: 'creationTime'
                },
                Description: {
                  locationName: 'description'
                },
                HomePageUrl: {
                  locationName: 'homePageUrl'
                },
                IsVerifiedAuthor: {
                  locationName: 'isVerifiedAuthor',
                  type: 'boolean'
                },
                Labels: {
                  shape: 'S3',
                  locationName: 'labels'
                },
                LicenseUrl: {
                  locationName: 'licenseUrl'
                },
                Name: {
                  locationName: 'name'
                },
                ReadmeUrl: {
                  locationName: 'readmeUrl'
                },
                SpdxLicenseId: {
                  locationName: 'spdxLicenseId'
                },
                VerifiedAuthorUrl: {
                  locationName: 'verifiedAuthorUrl'
                },
                Version: {
                  shape: 'S6',
                  locationName: 'version'
                }
              }
            }
          },
          CreateApplicationVersion: {
            http: {
              method: 'PUT',
              requestUri: '/applications/{applicationId}/versions/{semanticVersion}',
              responseCode: 201
            },
            input: {
              type: 'structure',
              members: {
                ApplicationId: {
                  location: 'uri',
                  locationName: 'applicationId'
                },
                SemanticVersion: {
                  location: 'uri',
                  locationName: 'semanticVersion'
                },
                SourceCodeArchiveUrl: {
                  locationName: 'sourceCodeArchiveUrl'
                },
                SourceCodeUrl: {
                  locationName: 'sourceCodeUrl'
                },
                TemplateBody: {
                  locationName: 'templateBody'
                },
                TemplateUrl: {
                  locationName: 'templateUrl'
                }
              },
              required: ['ApplicationId', 'SemanticVersion']
            },
            output: {
              type: 'structure',
              members: {
                ApplicationId: {
                  locationName: 'applicationId'
                },
                CreationTime: {
                  locationName: 'creationTime'
                },
                ParameterDefinitions: {
                  shape: 'S7',
                  locationName: 'parameterDefinitions'
                },
                RequiredCapabilities: {
                  shape: 'Sa',
                  locationName: 'requiredCapabilities'
                },
                ResourcesSupported: {
                  locationName: 'resourcesSupported',
                  type: 'boolean'
                },
                SemanticVersion: {
                  locationName: 'semanticVersion'
                },
                SourceCodeArchiveUrl: {
                  locationName: 'sourceCodeArchiveUrl'
                },
                SourceCodeUrl: {
                  locationName: 'sourceCodeUrl'
                },
                TemplateUrl: {
                  locationName: 'templateUrl'
                }
              }
            }
          },
          CreateCloudFormationChangeSet: {
            http: {
              requestUri: '/applications/{applicationId}/changesets',
              responseCode: 201
            },
            input: {
              type: 'structure',
              members: {
                ApplicationId: {
                  location: 'uri',
                  locationName: 'applicationId'
                },
                Capabilities: {
                  shape: 'S3',
                  locationName: 'capabilities'
                },
                ChangeSetName: {
                  locationName: 'changeSetName'
                },
                ClientToken: {
                  locationName: 'clientToken'
                },
                Description: {
                  locationName: 'description'
                },
                NotificationArns: {
                  shape: 'S3',
                  locationName: 'notificationArns'
                },
                ParameterOverrides: {
                  locationName: 'parameterOverrides',
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Name: {
                        locationName: 'name'
                      },
                      Value: {
                        locationName: 'value'
                      }
                    },
                    required: ['Value', 'Name']
                  }
                },
                ResourceTypes: {
                  shape: 'S3',
                  locationName: 'resourceTypes'
                },
                RollbackConfiguration: {
                  locationName: 'rollbackConfiguration',
                  type: 'structure',
                  members: {
                    MonitoringTimeInMinutes: {
                      locationName: 'monitoringTimeInMinutes',
                      type: 'integer'
                    },
                    RollbackTriggers: {
                      locationName: 'rollbackTriggers',
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          Arn: {
                            locationName: 'arn'
                          },
                          Type: {
                            locationName: 'type'
                          }
                        },
                        required: ['Type', 'Arn']
                      }
                    }
                  }
                },
                SemanticVersion: {
                  locationName: 'semanticVersion'
                },
                StackName: {
                  locationName: 'stackName'
                },
                Tags: {
                  locationName: 'tags',
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Key: {
                        locationName: 'key'
                      },
                      Value: {
                        locationName: 'value'
                      }
                    },
                    required: ['Value', 'Key']
                  }
                },
                TemplateId: {
                  locationName: 'templateId'
                }
              },
              required: ['ApplicationId', 'StackName']
            },
            output: {
              type: 'structure',
              members: {
                ApplicationId: {
                  locationName: 'applicationId'
                },
                ChangeSetId: {
                  locationName: 'changeSetId'
                },
                SemanticVersion: {
                  locationName: 'semanticVersion'
                },
                StackId: {
                  locationName: 'stackId'
                }
              }
            }
          },
          CreateCloudFormationTemplate: {
            http: {
              requestUri: '/applications/{applicationId}/templates',
              responseCode: 201
            },
            input: {
              type: 'structure',
              members: {
                ApplicationId: {
                  location: 'uri',
                  locationName: 'applicationId'
                },
                SemanticVersion: {
                  locationName: 'semanticVersion'
                }
              },
              required: ['ApplicationId']
            },
            output: {
              type: 'structure',
              members: {
                ApplicationId: {
                  locationName: 'applicationId'
                },
                CreationTime: {
                  locationName: 'creationTime'
                },
                ExpirationTime: {
                  locationName: 'expirationTime'
                },
                SemanticVersion: {
                  locationName: 'semanticVersion'
                },
                Status: {
                  locationName: 'status'
                },
                TemplateId: {
                  locationName: 'templateId'
                },
                TemplateUrl: {
                  locationName: 'templateUrl'
                }
              }
            }
          },
          DeleteApplication: {
            http: {
              method: 'DELETE',
              requestUri: '/applications/{applicationId}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              members: {
                ApplicationId: {
                  location: 'uri',
                  locationName: 'applicationId'
                }
              },
              required: ['ApplicationId']
            }
          },
          GetApplication: {
            http: {
              method: 'GET',
              requestUri: '/applications/{applicationId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ApplicationId: {
                  location: 'uri',
                  locationName: 'applicationId'
                },
                SemanticVersion: {
                  location: 'querystring',
                  locationName: 'semanticVersion'
                }
              },
              required: ['ApplicationId']
            },
            output: {
              type: 'structure',
              members: {
                ApplicationId: {
                  locationName: 'applicationId'
                },
                Author: {
                  locationName: 'author'
                },
                CreationTime: {
                  locationName: 'creationTime'
                },
                Description: {
                  locationName: 'description'
                },
                HomePageUrl: {
                  locationName: 'homePageUrl'
                },
                IsVerifiedAuthor: {
                  locationName: 'isVerifiedAuthor',
                  type: 'boolean'
                },
                Labels: {
                  shape: 'S3',
                  locationName: 'labels'
                },
                LicenseUrl: {
                  locationName: 'licenseUrl'
                },
                Name: {
                  locationName: 'name'
                },
                ReadmeUrl: {
                  locationName: 'readmeUrl'
                },
                SpdxLicenseId: {
                  locationName: 'spdxLicenseId'
                },
                VerifiedAuthorUrl: {
                  locationName: 'verifiedAuthorUrl'
                },
                Version: {
                  shape: 'S6',
                  locationName: 'version'
                }
              }
            }
          },
          GetApplicationPolicy: {
            http: {
              method: 'GET',
              requestUri: '/applications/{applicationId}/policy',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ApplicationId: {
                  location: 'uri',
                  locationName: 'applicationId'
                }
              },
              required: ['ApplicationId']
            },
            output: {
              type: 'structure',
              members: {
                Statements: {
                  shape: 'Sv',
                  locationName: 'statements'
                }
              }
            }
          },
          GetCloudFormationTemplate: {
            http: {
              method: 'GET',
              requestUri: '/applications/{applicationId}/templates/{templateId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ApplicationId: {
                  location: 'uri',
                  locationName: 'applicationId'
                },
                TemplateId: {
                  location: 'uri',
                  locationName: 'templateId'
                }
              },
              required: ['ApplicationId', 'TemplateId']
            },
            output: {
              type: 'structure',
              members: {
                ApplicationId: {
                  locationName: 'applicationId'
                },
                CreationTime: {
                  locationName: 'creationTime'
                },
                ExpirationTime: {
                  locationName: 'expirationTime'
                },
                SemanticVersion: {
                  locationName: 'semanticVersion'
                },
                Status: {
                  locationName: 'status'
                },
                TemplateId: {
                  locationName: 'templateId'
                },
                TemplateUrl: {
                  locationName: 'templateUrl'
                }
              }
            }
          },
          ListApplicationDependencies: {
            http: {
              method: 'GET',
              requestUri: '/applications/{applicationId}/dependencies',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ApplicationId: {
                  location: 'uri',
                  locationName: 'applicationId'
                },
                MaxItems: {
                  location: 'querystring',
                  locationName: 'maxItems',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                SemanticVersion: {
                  location: 'querystring',
                  locationName: 'semanticVersion'
                }
              },
              required: ['ApplicationId']
            },
            output: {
              type: 'structure',
              members: {
                Dependencies: {
                  locationName: 'dependencies',
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ApplicationId: {
                        locationName: 'applicationId'
                      },
                      SemanticVersion: {
                        locationName: 'semanticVersion'
                      }
                    },
                    required: ['ApplicationId', 'SemanticVersion']
                  }
                },
                NextToken: {
                  locationName: 'nextToken'
                }
              }
            }
          },
          ListApplicationVersions: {
            http: {
              method: 'GET',
              requestUri: '/applications/{applicationId}/versions',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ApplicationId: {
                  location: 'uri',
                  locationName: 'applicationId'
                },
                MaxItems: {
                  location: 'querystring',
                  locationName: 'maxItems',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                }
              },
              required: ['ApplicationId']
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {
                  locationName: 'nextToken'
                },
                Versions: {
                  locationName: 'versions',
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ApplicationId: {
                        locationName: 'applicationId'
                      },
                      CreationTime: {
                        locationName: 'creationTime'
                      },
                      SemanticVersion: {
                        locationName: 'semanticVersion'
                      },
                      SourceCodeUrl: {
                        locationName: 'sourceCodeUrl'
                      }
                    },
                    required: ['CreationTime', 'ApplicationId', 'SemanticVersion']
                  }
                }
              }
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
                MaxItems: {
                  location: 'querystring',
                  locationName: 'maxItems',
                  type: 'integer'
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
                Applications: {
                  locationName: 'applications',
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ApplicationId: {
                        locationName: 'applicationId'
                      },
                      Author: {
                        locationName: 'author'
                      },
                      CreationTime: {
                        locationName: 'creationTime'
                      },
                      Description: {
                        locationName: 'description'
                      },
                      HomePageUrl: {
                        locationName: 'homePageUrl'
                      },
                      Labels: {
                        shape: 'S3',
                        locationName: 'labels'
                      },
                      Name: {
                        locationName: 'name'
                      },
                      SpdxLicenseId: {
                        locationName: 'spdxLicenseId'
                      }
                    },
                    required: ['Description', 'Author', 'ApplicationId', 'Name']
                  }
                },
                NextToken: {
                  locationName: 'nextToken'
                }
              }
            }
          },
          PutApplicationPolicy: {
            http: {
              method: 'PUT',
              requestUri: '/applications/{applicationId}/policy',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ApplicationId: {
                  location: 'uri',
                  locationName: 'applicationId'
                },
                Statements: {
                  shape: 'Sv',
                  locationName: 'statements'
                }
              },
              required: ['ApplicationId', 'Statements']
            },
            output: {
              type: 'structure',
              members: {
                Statements: {
                  shape: 'Sv',
                  locationName: 'statements'
                }
              }
            }
          },
          UnshareApplication: {
            http: {
              requestUri: '/applications/{applicationId}/unshare',
              responseCode: 204
            },
            input: {
              type: 'structure',
              members: {
                ApplicationId: {
                  location: 'uri',
                  locationName: 'applicationId'
                },
                OrganizationId: {
                  locationName: 'organizationId'
                }
              },
              required: ['ApplicationId', 'OrganizationId']
            }
          },
          UpdateApplication: {
            http: {
              method: 'PATCH',
              requestUri: '/applications/{applicationId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ApplicationId: {
                  location: 'uri',
                  locationName: 'applicationId'
                },
                Author: {
                  locationName: 'author'
                },
                Description: {
                  locationName: 'description'
                },
                HomePageUrl: {
                  locationName: 'homePageUrl'
                },
                Labels: {
                  shape: 'S3',
                  locationName: 'labels'
                },
                ReadmeBody: {
                  locationName: 'readmeBody'
                },
                ReadmeUrl: {
                  locationName: 'readmeUrl'
                }
              },
              required: ['ApplicationId']
            },
            output: {
              type: 'structure',
              members: {
                ApplicationId: {
                  locationName: 'applicationId'
                },
                Author: {
                  locationName: 'author'
                },
                CreationTime: {
                  locationName: 'creationTime'
                },
                Description: {
                  locationName: 'description'
                },
                HomePageUrl: {
                  locationName: 'homePageUrl'
                },
                IsVerifiedAuthor: {
                  locationName: 'isVerifiedAuthor',
                  type: 'boolean'
                },
                Labels: {
                  shape: 'S3',
                  locationName: 'labels'
                },
                LicenseUrl: {
                  locationName: 'licenseUrl'
                },
                Name: {
                  locationName: 'name'
                },
                ReadmeUrl: {
                  locationName: 'readmeUrl'
                },
                SpdxLicenseId: {
                  locationName: 'spdxLicenseId'
                },
                VerifiedAuthorUrl: {
                  locationName: 'verifiedAuthorUrl'
                },
                Version: {
                  shape: 'S6',
                  locationName: 'version'
                }
              }
            }
          }
        },
        shapes: {
          S3: {
            type: 'list',
            member: {}
          },
          S6: {
            type: 'structure',
            members: {
              ApplicationId: {
                locationName: 'applicationId'
              },
              CreationTime: {
                locationName: 'creationTime'
              },
              ParameterDefinitions: {
                shape: 'S7',
                locationName: 'parameterDefinitions'
              },
              RequiredCapabilities: {
                shape: 'Sa',
                locationName: 'requiredCapabilities'
              },
              ResourcesSupported: {
                locationName: 'resourcesSupported',
                type: 'boolean'
              },
              SemanticVersion: {
                locationName: 'semanticVersion'
              },
              SourceCodeArchiveUrl: {
                locationName: 'sourceCodeArchiveUrl'
              },
              SourceCodeUrl: {
                locationName: 'sourceCodeUrl'
              },
              TemplateUrl: {
                locationName: 'templateUrl'
              }
            },
            required: ['TemplateUrl', 'ParameterDefinitions', 'ResourcesSupported', 'CreationTime', 'RequiredCapabilities', 'ApplicationId', 'SemanticVersion']
          },
          S7: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                AllowedPattern: {
                  locationName: 'allowedPattern'
                },
                AllowedValues: {
                  shape: 'S3',
                  locationName: 'allowedValues'
                },
                ConstraintDescription: {
                  locationName: 'constraintDescription'
                },
                DefaultValue: {
                  locationName: 'defaultValue'
                },
                Description: {
                  locationName: 'description'
                },
                MaxLength: {
                  locationName: 'maxLength',
                  type: 'integer'
                },
                MaxValue: {
                  locationName: 'maxValue',
                  type: 'integer'
                },
                MinLength: {
                  locationName: 'minLength',
                  type: 'integer'
                },
                MinValue: {
                  locationName: 'minValue',
                  type: 'integer'
                },
                Name: {
                  locationName: 'name'
                },
                NoEcho: {
                  locationName: 'noEcho',
                  type: 'boolean'
                },
                ReferencedByResources: {
                  shape: 'S3',
                  locationName: 'referencedByResources'
                },
                Type: {
                  locationName: 'type'
                }
              },
              required: ['ReferencedByResources', 'Name']
            }
          },
          Sa: {
            type: 'list',
            member: {}
          },
          Sv: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Actions: {
                  shape: 'S3',
                  locationName: 'actions'
                },
                PrincipalOrgIDs: {
                  shape: 'S3',
                  locationName: 'principalOrgIDs'
                },
                Principals: {
                  shape: 'S3',
                  locationName: 'principals'
                },
                StatementId: {
                  locationName: 'statementId'
                }
              },
              required: ['Principals', 'Actions']
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=2b3d5f7a174d8826869b8460d47c0c381a431ea5.js.map