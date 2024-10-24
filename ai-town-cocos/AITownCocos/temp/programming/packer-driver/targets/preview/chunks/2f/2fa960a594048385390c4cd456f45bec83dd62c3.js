System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2017-07-25',
          endpointPrefix: 'databrew',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceFullName: 'AWS Glue DataBrew',
          serviceId: 'DataBrew',
          signatureVersion: 'v4',
          signingName: 'databrew',
          uid: 'databrew-2017-07-25'
        },
        operations: {
          BatchDeleteRecipeVersion: {
            http: {
              requestUri: '/recipes/{name}/batchDeleteRecipeVersion'
            },
            input: {
              type: 'structure',
              required: ['Name', 'RecipeVersions'],
              members: {
                Name: {
                  location: 'uri',
                  locationName: 'name'
                },
                RecipeVersions: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {},
                Errors: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ErrorCode: {},
                      ErrorMessage: {},
                      RecipeVersion: {}
                    }
                  }
                }
              }
            }
          },
          CreateDataset: {
            http: {
              requestUri: '/datasets'
            },
            input: {
              type: 'structure',
              required: ['Name', 'Input'],
              members: {
                Name: {},
                Format: {},
                FormatOptions: {
                  shape: 'Sd'
                },
                Input: {
                  shape: 'So'
                },
                PathOptions: {
                  shape: 'S13'
                },
                Tags: {
                  shape: 'S1m'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {}
              }
            }
          },
          CreateProfileJob: {
            http: {
              requestUri: '/profileJobs'
            },
            input: {
              type: 'structure',
              required: ['DatasetName', 'Name', 'OutputLocation', 'RoleArn'],
              members: {
                DatasetName: {},
                EncryptionKeyArn: {},
                EncryptionMode: {},
                Name: {},
                LogSubscription: {},
                MaxCapacity: {
                  type: 'integer'
                },
                MaxRetries: {
                  type: 'integer'
                },
                OutputLocation: {
                  shape: 'Sp'
                },
                Configuration: {
                  shape: 'S1x'
                },
                ValidationConfigurations: {
                  shape: 'S2g'
                },
                RoleArn: {},
                Tags: {
                  shape: 'S1m'
                },
                Timeout: {
                  type: 'integer'
                },
                JobSample: {
                  shape: 'S2k'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {}
              }
            }
          },
          CreateProject: {
            http: {
              requestUri: '/projects'
            },
            input: {
              type: 'structure',
              required: ['DatasetName', 'Name', 'RecipeName', 'RoleArn'],
              members: {
                DatasetName: {},
                Name: {},
                RecipeName: {},
                Sample: {
                  shape: 'S2q'
                },
                RoleArn: {},
                Tags: {
                  shape: 'S1m'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {}
              }
            }
          },
          CreateRecipe: {
            http: {
              requestUri: '/recipes'
            },
            input: {
              type: 'structure',
              required: ['Name', 'Steps'],
              members: {
                Description: {},
                Name: {},
                Steps: {
                  shape: 'S2w'
                },
                Tags: {
                  shape: 'S1m'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {}
              }
            }
          },
          CreateRecipeJob: {
            http: {
              requestUri: '/recipeJobs'
            },
            input: {
              type: 'structure',
              required: ['Name', 'RoleArn'],
              members: {
                DatasetName: {},
                EncryptionKeyArn: {},
                EncryptionMode: {},
                Name: {},
                LogSubscription: {},
                MaxCapacity: {
                  type: 'integer'
                },
                MaxRetries: {
                  type: 'integer'
                },
                Outputs: {
                  shape: 'S36'
                },
                DataCatalogOutputs: {
                  shape: 'S3f'
                },
                DatabaseOutputs: {
                  shape: 'S3j'
                },
                ProjectName: {},
                RecipeReference: {
                  shape: 'S3m'
                },
                RoleArn: {},
                Tags: {
                  shape: 'S1m'
                },
                Timeout: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {}
              }
            }
          },
          CreateRuleset: {
            http: {
              requestUri: '/rulesets'
            },
            input: {
              type: 'structure',
              required: ['Name', 'TargetArn', 'Rules'],
              members: {
                Name: {},
                Description: {},
                TargetArn: {},
                Rules: {
                  shape: 'S3r'
                },
                Tags: {
                  shape: 'S1m'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {}
              }
            }
          },
          CreateSchedule: {
            http: {
              requestUri: '/schedules'
            },
            input: {
              type: 'structure',
              required: ['CronExpression', 'Name'],
              members: {
                JobNames: {
                  shape: 'S41'
                },
                CronExpression: {},
                Tags: {
                  shape: 'S1m'
                },
                Name: {}
              }
            },
            output: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {}
              }
            }
          },
          DeleteDataset: {
            http: {
              method: 'DELETE',
              requestUri: '/datasets/{name}'
            },
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {
                  location: 'uri',
                  locationName: 'name'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {}
              }
            }
          },
          DeleteJob: {
            http: {
              method: 'DELETE',
              requestUri: '/jobs/{name}'
            },
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {
                  location: 'uri',
                  locationName: 'name'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {}
              }
            }
          },
          DeleteProject: {
            http: {
              method: 'DELETE',
              requestUri: '/projects/{name}'
            },
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {
                  location: 'uri',
                  locationName: 'name'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {}
              }
            }
          },
          DeleteRecipeVersion: {
            http: {
              method: 'DELETE',
              requestUri: '/recipes/{name}/recipeVersion/{recipeVersion}'
            },
            input: {
              type: 'structure',
              required: ['Name', 'RecipeVersion'],
              members: {
                Name: {
                  location: 'uri',
                  locationName: 'name'
                },
                RecipeVersion: {
                  location: 'uri',
                  locationName: 'recipeVersion'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Name', 'RecipeVersion'],
              members: {
                Name: {},
                RecipeVersion: {}
              }
            }
          },
          DeleteRuleset: {
            http: {
              method: 'DELETE',
              requestUri: '/rulesets/{name}'
            },
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {
                  location: 'uri',
                  locationName: 'name'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {}
              }
            }
          },
          DeleteSchedule: {
            http: {
              method: 'DELETE',
              requestUri: '/schedules/{name}'
            },
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {
                  location: 'uri',
                  locationName: 'name'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {}
              }
            }
          },
          DescribeDataset: {
            http: {
              method: 'GET',
              requestUri: '/datasets/{name}'
            },
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {
                  location: 'uri',
                  locationName: 'name'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Name', 'Input'],
              members: {
                CreatedBy: {},
                CreateDate: {
                  type: 'timestamp'
                },
                Name: {},
                Format: {},
                FormatOptions: {
                  shape: 'Sd'
                },
                Input: {
                  shape: 'So'
                },
                LastModifiedDate: {
                  type: 'timestamp'
                },
                LastModifiedBy: {},
                Source: {},
                PathOptions: {
                  shape: 'S13'
                },
                Tags: {
                  shape: 'S1m'
                },
                ResourceArn: {}
              }
            }
          },
          DescribeJob: {
            http: {
              method: 'GET',
              requestUri: '/jobs/{name}'
            },
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {
                  location: 'uri',
                  locationName: 'name'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Name'],
              members: {
                CreateDate: {
                  type: 'timestamp'
                },
                CreatedBy: {},
                DatasetName: {},
                EncryptionKeyArn: {},
                EncryptionMode: {},
                Name: {},
                Type: {},
                LastModifiedBy: {},
                LastModifiedDate: {
                  type: 'timestamp'
                },
                LogSubscription: {},
                MaxCapacity: {
                  type: 'integer'
                },
                MaxRetries: {
                  type: 'integer'
                },
                Outputs: {
                  shape: 'S36'
                },
                DataCatalogOutputs: {
                  shape: 'S3f'
                },
                DatabaseOutputs: {
                  shape: 'S3j'
                },
                ProjectName: {},
                ProfileConfiguration: {
                  shape: 'S1x'
                },
                ValidationConfigurations: {
                  shape: 'S2g'
                },
                RecipeReference: {
                  shape: 'S3m'
                },
                ResourceArn: {},
                RoleArn: {},
                Tags: {
                  shape: 'S1m'
                },
                Timeout: {
                  type: 'integer'
                },
                JobSample: {
                  shape: 'S2k'
                }
              }
            }
          },
          DescribeJobRun: {
            http: {
              method: 'GET',
              requestUri: '/jobs/{name}/jobRun/{runId}'
            },
            input: {
              type: 'structure',
              required: ['Name', 'RunId'],
              members: {
                Name: {
                  location: 'uri',
                  locationName: 'name'
                },
                RunId: {
                  location: 'uri',
                  locationName: 'runId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['JobName'],
              members: {
                Attempt: {
                  type: 'integer'
                },
                CompletedOn: {
                  type: 'timestamp'
                },
                DatasetName: {},
                ErrorMessage: {},
                ExecutionTime: {
                  type: 'integer'
                },
                JobName: {},
                ProfileConfiguration: {
                  shape: 'S1x'
                },
                ValidationConfigurations: {
                  shape: 'S2g'
                },
                RunId: {},
                State: {},
                LogSubscription: {},
                LogGroupName: {},
                Outputs: {
                  shape: 'S36'
                },
                DataCatalogOutputs: {
                  shape: 'S3f'
                },
                DatabaseOutputs: {
                  shape: 'S3j'
                },
                RecipeReference: {
                  shape: 'S3m'
                },
                StartedBy: {},
                StartedOn: {
                  type: 'timestamp'
                },
                JobSample: {
                  shape: 'S2k'
                }
              }
            }
          },
          DescribeProject: {
            http: {
              method: 'GET',
              requestUri: '/projects/{name}'
            },
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {
                  location: 'uri',
                  locationName: 'name'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Name'],
              members: {
                CreateDate: {
                  type: 'timestamp'
                },
                CreatedBy: {},
                DatasetName: {},
                LastModifiedDate: {
                  type: 'timestamp'
                },
                LastModifiedBy: {},
                Name: {},
                RecipeName: {},
                ResourceArn: {},
                Sample: {
                  shape: 'S2q'
                },
                RoleArn: {},
                Tags: {
                  shape: 'S1m'
                },
                SessionStatus: {},
                OpenedBy: {},
                OpenDate: {
                  type: 'timestamp'
                }
              }
            }
          },
          DescribeRecipe: {
            http: {
              method: 'GET',
              requestUri: '/recipes/{name}'
            },
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {
                  location: 'uri',
                  locationName: 'name'
                },
                RecipeVersion: {
                  location: 'querystring',
                  locationName: 'recipeVersion'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Name'],
              members: {
                CreatedBy: {},
                CreateDate: {
                  type: 'timestamp'
                },
                LastModifiedBy: {},
                LastModifiedDate: {
                  type: 'timestamp'
                },
                ProjectName: {},
                PublishedBy: {},
                PublishedDate: {
                  type: 'timestamp'
                },
                Description: {},
                Name: {},
                Steps: {
                  shape: 'S2w'
                },
                Tags: {
                  shape: 'S1m'
                },
                ResourceArn: {},
                RecipeVersion: {}
              }
            }
          },
          DescribeRuleset: {
            http: {
              method: 'GET',
              requestUri: '/rulesets/{name}'
            },
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {
                  location: 'uri',
                  locationName: 'name'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {},
                Description: {},
                TargetArn: {},
                Rules: {
                  shape: 'S3r'
                },
                CreateDate: {
                  type: 'timestamp'
                },
                CreatedBy: {},
                LastModifiedBy: {},
                LastModifiedDate: {
                  type: 'timestamp'
                },
                ResourceArn: {},
                Tags: {
                  shape: 'S1m'
                }
              }
            }
          },
          DescribeSchedule: {
            http: {
              method: 'GET',
              requestUri: '/schedules/{name}'
            },
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {
                  location: 'uri',
                  locationName: 'name'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Name'],
              members: {
                CreateDate: {
                  type: 'timestamp'
                },
                CreatedBy: {},
                JobNames: {
                  shape: 'S41'
                },
                LastModifiedBy: {},
                LastModifiedDate: {
                  type: 'timestamp'
                },
                ResourceArn: {},
                CronExpression: {},
                Tags: {
                  shape: 'S1m'
                },
                Name: {}
              }
            }
          },
          ListDatasets: {
            http: {
              method: 'GET',
              requestUri: '/datasets'
            },
            input: {
              type: 'structure',
              members: {
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
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
              required: ['Datasets'],
              members: {
                Datasets: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Name', 'Input'],
                    members: {
                      AccountId: {},
                      CreatedBy: {},
                      CreateDate: {
                        type: 'timestamp'
                      },
                      Name: {},
                      Format: {},
                      FormatOptions: {
                        shape: 'Sd'
                      },
                      Input: {
                        shape: 'So'
                      },
                      LastModifiedDate: {
                        type: 'timestamp'
                      },
                      LastModifiedBy: {},
                      Source: {},
                      PathOptions: {
                        shape: 'S13'
                      },
                      Tags: {
                        shape: 'S1m'
                      },
                      ResourceArn: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListJobRuns: {
            http: {
              method: 'GET',
              requestUri: '/jobs/{name}/jobRuns'
            },
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {
                  location: 'uri',
                  locationName: 'name'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
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
              required: ['JobRuns'],
              members: {
                JobRuns: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Attempt: {
                        type: 'integer'
                      },
                      CompletedOn: {
                        type: 'timestamp'
                      },
                      DatasetName: {},
                      ErrorMessage: {},
                      ExecutionTime: {
                        type: 'integer'
                      },
                      JobName: {},
                      RunId: {},
                      State: {},
                      LogSubscription: {},
                      LogGroupName: {},
                      Outputs: {
                        shape: 'S36'
                      },
                      DataCatalogOutputs: {
                        shape: 'S3f'
                      },
                      DatabaseOutputs: {
                        shape: 'S3j'
                      },
                      RecipeReference: {
                        shape: 'S3m'
                      },
                      StartedBy: {},
                      StartedOn: {
                        type: 'timestamp'
                      },
                      JobSample: {
                        shape: 'S2k'
                      },
                      ValidationConfigurations: {
                        shape: 'S2g'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListJobs: {
            http: {
              method: 'GET',
              requestUri: '/jobs'
            },
            input: {
              type: 'structure',
              members: {
                DatasetName: {
                  location: 'querystring',
                  locationName: 'datasetName'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                ProjectName: {
                  location: 'querystring',
                  locationName: 'projectName'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Jobs'],
              members: {
                Jobs: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Name'],
                    members: {
                      AccountId: {},
                      CreatedBy: {},
                      CreateDate: {
                        type: 'timestamp'
                      },
                      DatasetName: {},
                      EncryptionKeyArn: {},
                      EncryptionMode: {},
                      Name: {},
                      Type: {},
                      LastModifiedBy: {},
                      LastModifiedDate: {
                        type: 'timestamp'
                      },
                      LogSubscription: {},
                      MaxCapacity: {
                        type: 'integer'
                      },
                      MaxRetries: {
                        type: 'integer'
                      },
                      Outputs: {
                        shape: 'S36'
                      },
                      DataCatalogOutputs: {
                        shape: 'S3f'
                      },
                      DatabaseOutputs: {
                        shape: 'S3j'
                      },
                      ProjectName: {},
                      RecipeReference: {
                        shape: 'S3m'
                      },
                      ResourceArn: {},
                      RoleArn: {},
                      Timeout: {
                        type: 'integer'
                      },
                      Tags: {
                        shape: 'S1m'
                      },
                      JobSample: {
                        shape: 'S2k'
                      },
                      ValidationConfigurations: {
                        shape: 'S2g'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListProjects: {
            http: {
              method: 'GET',
              requestUri: '/projects'
            },
            input: {
              type: 'structure',
              members: {
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Projects'],
              members: {
                Projects: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Name', 'RecipeName'],
                    members: {
                      AccountId: {},
                      CreateDate: {
                        type: 'timestamp'
                      },
                      CreatedBy: {},
                      DatasetName: {},
                      LastModifiedDate: {
                        type: 'timestamp'
                      },
                      LastModifiedBy: {},
                      Name: {},
                      RecipeName: {},
                      ResourceArn: {},
                      Sample: {
                        shape: 'S2q'
                      },
                      Tags: {
                        shape: 'S1m'
                      },
                      RoleArn: {},
                      OpenedBy: {},
                      OpenDate: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListRecipeVersions: {
            http: {
              method: 'GET',
              requestUri: '/recipeVersions'
            },
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                Name: {
                  location: 'querystring',
                  locationName: 'name'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Recipes'],
              members: {
                NextToken: {},
                Recipes: {
                  shape: 'S5v'
                }
              }
            }
          },
          ListRecipes: {
            http: {
              method: 'GET',
              requestUri: '/recipes'
            },
            input: {
              type: 'structure',
              members: {
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                RecipeVersion: {
                  location: 'querystring',
                  locationName: 'recipeVersion'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Recipes'],
              members: {
                Recipes: {
                  shape: 'S5v'
                },
                NextToken: {}
              }
            }
          },
          ListRulesets: {
            http: {
              method: 'GET',
              requestUri: '/rulesets'
            },
            input: {
              type: 'structure',
              members: {
                TargetArn: {
                  location: 'querystring',
                  locationName: 'targetArn'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
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
              required: ['Rulesets'],
              members: {
                Rulesets: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Name', 'TargetArn'],
                    members: {
                      AccountId: {},
                      CreatedBy: {},
                      CreateDate: {
                        type: 'timestamp'
                      },
                      Description: {},
                      LastModifiedBy: {},
                      LastModifiedDate: {
                        type: 'timestamp'
                      },
                      Name: {},
                      ResourceArn: {},
                      RuleCount: {
                        type: 'integer'
                      },
                      Tags: {
                        shape: 'S1m'
                      },
                      TargetArn: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListSchedules: {
            http: {
              method: 'GET',
              requestUri: '/schedules'
            },
            input: {
              type: 'structure',
              members: {
                JobName: {
                  location: 'querystring',
                  locationName: 'jobName'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
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
              required: ['Schedules'],
              members: {
                Schedules: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Name'],
                    members: {
                      AccountId: {},
                      CreatedBy: {},
                      CreateDate: {
                        type: 'timestamp'
                      },
                      JobNames: {
                        shape: 'S41'
                      },
                      LastModifiedBy: {},
                      LastModifiedDate: {
                        type: 'timestamp'
                      },
                      ResourceArn: {},
                      CronExpression: {},
                      Tags: {
                        shape: 'S1m'
                      },
                      Name: {}
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
              requestUri: '/tags/{ResourceArn}'
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
                  shape: 'S1m'
                }
              }
            }
          },
          PublishRecipe: {
            http: {
              requestUri: '/recipes/{name}/publishRecipe'
            },
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Description: {},
                Name: {
                  location: 'uri',
                  locationName: 'name'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {}
              }
            }
          },
          SendProjectSessionAction: {
            http: {
              method: 'PUT',
              requestUri: '/projects/{name}/sendProjectSessionAction'
            },
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Preview: {
                  type: 'boolean'
                },
                Name: {
                  location: 'uri',
                  locationName: 'name'
                },
                RecipeStep: {
                  shape: 'S2x'
                },
                StepIndex: {
                  type: 'integer'
                },
                ClientSessionId: {
                  shape: 'S6f'
                },
                ViewFrame: {
                  type: 'structure',
                  required: ['StartColumnIndex'],
                  members: {
                    StartColumnIndex: {
                      type: 'integer'
                    },
                    ColumnRange: {
                      type: 'integer'
                    },
                    HiddenColumns: {
                      type: 'list',
                      member: {}
                    },
                    StartRowIndex: {
                      type: 'integer'
                    },
                    RowRange: {
                      type: 'integer'
                    },
                    Analytics: {}
                  }
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Name'],
              members: {
                Result: {},
                Name: {},
                ActionId: {
                  type: 'integer'
                }
              }
            }
          },
          StartJobRun: {
            http: {
              requestUri: '/jobs/{name}/startJobRun'
            },
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {
                  location: 'uri',
                  locationName: 'name'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['RunId'],
              members: {
                RunId: {}
              }
            }
          },
          StartProjectSession: {
            http: {
              method: 'PUT',
              requestUri: '/projects/{name}/startProjectSession'
            },
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {
                  location: 'uri',
                  locationName: 'name'
                },
                AssumeControl: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {},
                ClientSessionId: {
                  shape: 'S6f'
                }
              }
            }
          },
          StopJobRun: {
            http: {
              requestUri: '/jobs/{name}/jobRun/{runId}/stopJobRun'
            },
            input: {
              type: 'structure',
              required: ['Name', 'RunId'],
              members: {
                Name: {
                  location: 'uri',
                  locationName: 'name'
                },
                RunId: {
                  location: 'uri',
                  locationName: 'runId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['RunId'],
              members: {
                RunId: {}
              }
            }
          },
          TagResource: {
            http: {
              requestUri: '/tags/{ResourceArn}'
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
                  shape: 'S1m'
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
              requestUri: '/tags/{ResourceArn}'
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
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateDataset: {
            http: {
              method: 'PUT',
              requestUri: '/datasets/{name}'
            },
            input: {
              type: 'structure',
              required: ['Name', 'Input'],
              members: {
                Name: {
                  location: 'uri',
                  locationName: 'name'
                },
                Format: {},
                FormatOptions: {
                  shape: 'Sd'
                },
                Input: {
                  shape: 'So'
                },
                PathOptions: {
                  shape: 'S13'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {}
              }
            }
          },
          UpdateProfileJob: {
            http: {
              method: 'PUT',
              requestUri: '/profileJobs/{name}'
            },
            input: {
              type: 'structure',
              required: ['Name', 'OutputLocation', 'RoleArn'],
              members: {
                Configuration: {
                  shape: 'S1x'
                },
                EncryptionKeyArn: {},
                EncryptionMode: {},
                Name: {
                  location: 'uri',
                  locationName: 'name'
                },
                LogSubscription: {},
                MaxCapacity: {
                  type: 'integer'
                },
                MaxRetries: {
                  type: 'integer'
                },
                OutputLocation: {
                  shape: 'Sp'
                },
                ValidationConfigurations: {
                  shape: 'S2g'
                },
                RoleArn: {},
                Timeout: {
                  type: 'integer'
                },
                JobSample: {
                  shape: 'S2k'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {}
              }
            }
          },
          UpdateProject: {
            http: {
              method: 'PUT',
              requestUri: '/projects/{name}'
            },
            input: {
              type: 'structure',
              required: ['RoleArn', 'Name'],
              members: {
                Sample: {
                  shape: 'S2q'
                },
                RoleArn: {},
                Name: {
                  location: 'uri',
                  locationName: 'name'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Name'],
              members: {
                LastModifiedDate: {
                  type: 'timestamp'
                },
                Name: {}
              }
            }
          },
          UpdateRecipe: {
            http: {
              method: 'PUT',
              requestUri: '/recipes/{name}'
            },
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Description: {},
                Name: {
                  location: 'uri',
                  locationName: 'name'
                },
                Steps: {
                  shape: 'S2w'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {}
              }
            }
          },
          UpdateRecipeJob: {
            http: {
              method: 'PUT',
              requestUri: '/recipeJobs/{name}'
            },
            input: {
              type: 'structure',
              required: ['Name', 'RoleArn'],
              members: {
                EncryptionKeyArn: {},
                EncryptionMode: {},
                Name: {
                  location: 'uri',
                  locationName: 'name'
                },
                LogSubscription: {},
                MaxCapacity: {
                  type: 'integer'
                },
                MaxRetries: {
                  type: 'integer'
                },
                Outputs: {
                  shape: 'S36'
                },
                DataCatalogOutputs: {
                  shape: 'S3f'
                },
                DatabaseOutputs: {
                  shape: 'S3j'
                },
                RoleArn: {},
                Timeout: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {}
              }
            }
          },
          UpdateRuleset: {
            http: {
              method: 'PUT',
              requestUri: '/rulesets/{name}'
            },
            input: {
              type: 'structure',
              required: ['Name', 'Rules'],
              members: {
                Name: {
                  location: 'uri',
                  locationName: 'name'
                },
                Description: {},
                Rules: {
                  shape: 'S3r'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {}
              }
            }
          },
          UpdateSchedule: {
            http: {
              method: 'PUT',
              requestUri: '/schedules/{name}'
            },
            input: {
              type: 'structure',
              required: ['CronExpression', 'Name'],
              members: {
                JobNames: {
                  shape: 'S41'
                },
                CronExpression: {},
                Name: {
                  location: 'uri',
                  locationName: 'name'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {}
              }
            }
          }
        },
        shapes: {
          Sd: {
            type: 'structure',
            members: {
              Json: {
                type: 'structure',
                members: {
                  MultiLine: {
                    type: 'boolean'
                  }
                }
              },
              Excel: {
                type: 'structure',
                members: {
                  SheetNames: {
                    type: 'list',
                    member: {}
                  },
                  SheetIndexes: {
                    type: 'list',
                    member: {
                      type: 'integer'
                    }
                  },
                  HeaderRow: {
                    type: 'boolean'
                  }
                }
              },
              Csv: {
                type: 'structure',
                members: {
                  Delimiter: {},
                  HeaderRow: {
                    type: 'boolean'
                  }
                }
              }
            }
          },
          So: {
            type: 'structure',
            members: {
              S3InputDefinition: {
                shape: 'Sp'
              },
              DataCatalogInputDefinition: {
                type: 'structure',
                required: ['DatabaseName', 'TableName'],
                members: {
                  CatalogId: {},
                  DatabaseName: {},
                  TableName: {},
                  TempDirectory: {
                    shape: 'Sp'
                  }
                }
              },
              DatabaseInputDefinition: {
                type: 'structure',
                required: ['GlueConnectionName'],
                members: {
                  GlueConnectionName: {},
                  DatabaseTableName: {},
                  TempDirectory: {
                    shape: 'Sp'
                  },
                  QueryString: {}
                }
              },
              Metadata: {
                type: 'structure',
                members: {
                  SourceArn: {}
                }
              }
            }
          },
          Sp: {
            type: 'structure',
            required: ['Bucket'],
            members: {
              Bucket: {},
              Key: {},
              BucketOwner: {}
            }
          },
          S13: {
            type: 'structure',
            members: {
              LastModifiedDateCondition: {
                shape: 'S14'
              },
              FilesLimit: {
                type: 'structure',
                required: ['MaxFiles'],
                members: {
                  MaxFiles: {
                    type: 'integer'
                  },
                  OrderedBy: {},
                  Order: {}
                }
              },
              Parameters: {
                type: 'map',
                key: {},
                value: {
                  type: 'structure',
                  required: ['Name', 'Type'],
                  members: {
                    Name: {},
                    Type: {},
                    DatetimeOptions: {
                      type: 'structure',
                      required: ['Format'],
                      members: {
                        Format: {},
                        TimezoneOffset: {},
                        LocaleCode: {}
                      }
                    },
                    CreateColumn: {
                      type: 'boolean'
                    },
                    Filter: {
                      shape: 'S14'
                    }
                  }
                }
              }
            }
          },
          S14: {
            type: 'structure',
            required: ['Expression', 'ValuesMap'],
            members: {
              Expression: {},
              ValuesMap: {
                shape: 'S16'
              }
            }
          },
          S16: {
            type: 'map',
            key: {},
            value: {}
          },
          S1m: {
            type: 'map',
            key: {},
            value: {}
          },
          S1x: {
            type: 'structure',
            members: {
              DatasetStatisticsConfiguration: {
                shape: 'S1y'
              },
              ProfileColumns: {
                shape: 'S26'
              },
              ColumnStatisticsConfigurations: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['Statistics'],
                  members: {
                    Selectors: {
                      shape: 'S26'
                    },
                    Statistics: {
                      shape: 'S1y'
                    }
                  }
                }
              },
              EntityDetectorConfiguration: {
                type: 'structure',
                required: ['EntityTypes'],
                members: {
                  EntityTypes: {
                    type: 'list',
                    member: {}
                  },
                  AllowedStatistics: {
                    type: 'list',
                    member: {
                      type: 'structure',
                      required: ['Statistics'],
                      members: {
                        Statistics: {
                          shape: 'S1z'
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          S1y: {
            type: 'structure',
            members: {
              IncludedStatistics: {
                shape: 'S1z'
              },
              Overrides: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['Statistic', 'Parameters'],
                  members: {
                    Statistic: {},
                    Parameters: {
                      shape: 'S23'
                    }
                  }
                }
              }
            }
          },
          S1z: {
            type: 'list',
            member: {}
          },
          S23: {
            type: 'map',
            key: {},
            value: {}
          },
          S26: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Regex: {},
                Name: {}
              }
            }
          },
          S2g: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['RulesetArn'],
              members: {
                RulesetArn: {},
                ValidationMode: {}
              }
            }
          },
          S2k: {
            type: 'structure',
            members: {
              Mode: {},
              Size: {
                type: 'long'
              }
            }
          },
          S2q: {
            type: 'structure',
            required: ['Type'],
            members: {
              Size: {
                type: 'integer'
              },
              Type: {}
            }
          },
          S2w: {
            type: 'list',
            member: {
              shape: 'S2x'
            }
          },
          S2x: {
            type: 'structure',
            required: ['Action'],
            members: {
              Action: {
                type: 'structure',
                required: ['Operation'],
                members: {
                  Operation: {},
                  Parameters: {
                    shape: 'S23'
                  }
                }
              },
              ConditionExpressions: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['Condition', 'TargetColumn'],
                  members: {
                    Condition: {},
                    Value: {},
                    TargetColumn: {}
                  }
                }
              }
            }
          },
          S36: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Location'],
              members: {
                CompressionFormat: {},
                Format: {},
                PartitionColumns: {
                  type: 'list',
                  member: {}
                },
                Location: {
                  shape: 'Sp'
                },
                Overwrite: {
                  type: 'boolean'
                },
                FormatOptions: {
                  type: 'structure',
                  members: {
                    Csv: {
                      type: 'structure',
                      members: {
                        Delimiter: {}
                      }
                    }
                  }
                },
                MaxOutputFiles: {
                  type: 'integer'
                }
              }
            }
          },
          S3f: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['DatabaseName', 'TableName'],
              members: {
                CatalogId: {},
                DatabaseName: {},
                TableName: {},
                S3Options: {
                  type: 'structure',
                  required: ['Location'],
                  members: {
                    Location: {
                      shape: 'Sp'
                    }
                  }
                },
                DatabaseOptions: {
                  shape: 'S3i'
                },
                Overwrite: {
                  type: 'boolean'
                }
              }
            }
          },
          S3i: {
            type: 'structure',
            required: ['TableName'],
            members: {
              TempDirectory: {
                shape: 'Sp'
              },
              TableName: {}
            }
          },
          S3j: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['GlueConnectionName', 'DatabaseOptions'],
              members: {
                GlueConnectionName: {},
                DatabaseOptions: {
                  shape: 'S3i'
                },
                DatabaseOutputMode: {}
              }
            }
          },
          S3m: {
            type: 'structure',
            required: ['Name'],
            members: {
              Name: {},
              RecipeVersion: {}
            }
          },
          S3r: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Name', 'CheckExpression'],
              members: {
                Name: {},
                Disabled: {
                  type: 'boolean'
                },
                CheckExpression: {},
                SubstitutionMap: {
                  shape: 'S16'
                },
                Threshold: {
                  type: 'structure',
                  required: ['Value'],
                  members: {
                    Value: {
                      type: 'double'
                    },
                    Type: {},
                    Unit: {}
                  }
                },
                ColumnSelectors: {
                  shape: 'S26'
                }
              }
            }
          },
          S41: {
            type: 'list',
            member: {}
          },
          S5v: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Name'],
              members: {
                CreatedBy: {},
                CreateDate: {
                  type: 'timestamp'
                },
                LastModifiedBy: {},
                LastModifiedDate: {
                  type: 'timestamp'
                },
                ProjectName: {},
                PublishedBy: {},
                PublishedDate: {
                  type: 'timestamp'
                },
                Description: {},
                Name: {},
                ResourceArn: {},
                Steps: {
                  shape: 'S2w'
                },
                Tags: {
                  shape: 'S1m'
                },
                RecipeVersion: {}
              }
            }
          },
          S6f: {
            type: 'string',
            sensitive: true
          }
        }
      });
    }
  };
});
//# sourceMappingURL=2fa960a594048385390c4cd456f45bec83dd62c3.js.map