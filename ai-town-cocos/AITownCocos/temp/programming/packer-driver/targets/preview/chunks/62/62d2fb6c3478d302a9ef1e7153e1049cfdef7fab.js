System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2017-07-25',
          endpointPrefix: 'amplify',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          protocols: ['rest-json'],
          serviceAbbreviation: 'Amplify',
          serviceFullName: 'AWS Amplify',
          serviceId: 'Amplify',
          signatureVersion: 'v4',
          signingName: 'amplify',
          uid: 'amplify-2017-07-25'
        },
        operations: {
          CreateApp: {
            http: {
              requestUri: '/apps'
            },
            input: {
              type: 'structure',
              required: ['name'],
              members: {
                name: {},
                description: {},
                repository: {},
                platform: {},
                iamServiceRoleArn: {},
                oauthToken: {
                  shape: 'S7'
                },
                accessToken: {
                  shape: 'S8'
                },
                environmentVariables: {
                  shape: 'S9'
                },
                enableBranchAutoBuild: {
                  type: 'boolean'
                },
                enableBranchAutoDeletion: {
                  type: 'boolean'
                },
                enableBasicAuth: {
                  type: 'boolean'
                },
                basicAuthCredentials: {
                  shape: 'Sf'
                },
                customRules: {
                  shape: 'Sg'
                },
                tags: {
                  shape: 'Sm'
                },
                buildSpec: {
                  shape: 'Sp'
                },
                customHeaders: {},
                enableAutoBranchCreation: {
                  type: 'boolean'
                },
                autoBranchCreationPatterns: {
                  shape: 'Ss'
                },
                autoBranchCreationConfig: {
                  shape: 'Su'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['app'],
              members: {
                app: {
                  shape: 'S12'
                }
              }
            }
          },
          CreateBackendEnvironment: {
            http: {
              requestUri: '/apps/{appId}/backendenvironments'
            },
            input: {
              type: 'structure',
              required: ['appId', 'environmentName'],
              members: {
                appId: {
                  location: 'uri',
                  locationName: 'appId'
                },
                environmentName: {},
                stackName: {},
                deploymentArtifacts: {}
              }
            },
            output: {
              type: 'structure',
              required: ['backendEnvironment'],
              members: {
                backendEnvironment: {
                  shape: 'S1i'
                }
              }
            }
          },
          CreateBranch: {
            http: {
              requestUri: '/apps/{appId}/branches'
            },
            input: {
              type: 'structure',
              required: ['appId', 'branchName'],
              members: {
                appId: {
                  location: 'uri',
                  locationName: 'appId'
                },
                branchName: {},
                description: {},
                stage: {},
                framework: {},
                enableNotification: {
                  type: 'boolean'
                },
                enableAutoBuild: {
                  type: 'boolean'
                },
                environmentVariables: {
                  shape: 'S9'
                },
                basicAuthCredentials: {
                  shape: 'Sf'
                },
                enableBasicAuth: {
                  type: 'boolean'
                },
                enablePerformanceMode: {
                  type: 'boolean'
                },
                tags: {
                  shape: 'Sm'
                },
                buildSpec: {
                  shape: 'Sp'
                },
                ttl: {},
                displayName: {},
                enablePullRequestPreview: {
                  type: 'boolean'
                },
                pullRequestEnvironmentName: {},
                backendEnvironmentArn: {},
                backend: {
                  shape: 'S1o'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['branch'],
              members: {
                branch: {
                  shape: 'S1r'
                }
              }
            }
          },
          CreateDeployment: {
            http: {
              requestUri: '/apps/{appId}/branches/{branchName}/deployments'
            },
            input: {
              type: 'structure',
              required: ['appId', 'branchName'],
              members: {
                appId: {
                  location: 'uri',
                  locationName: 'appId'
                },
                branchName: {
                  location: 'uri',
                  locationName: 'branchName'
                },
                fileMap: {
                  type: 'map',
                  key: {},
                  value: {}
                }
              }
            },
            output: {
              type: 'structure',
              required: ['fileUploadUrls', 'zipUploadUrl'],
              members: {
                jobId: {},
                fileUploadUrls: {
                  type: 'map',
                  key: {},
                  value: {}
                },
                zipUploadUrl: {}
              }
            }
          },
          CreateDomainAssociation: {
            http: {
              requestUri: '/apps/{appId}/domains'
            },
            input: {
              type: 'structure',
              required: ['appId', 'domainName', 'subDomainSettings'],
              members: {
                appId: {
                  location: 'uri',
                  locationName: 'appId'
                },
                domainName: {},
                enableAutoSubDomain: {
                  type: 'boolean'
                },
                subDomainSettings: {
                  shape: 'S2a'
                },
                autoSubDomainCreationPatterns: {
                  shape: 'S2d'
                },
                autoSubDomainIAMRole: {},
                certificateSettings: {
                  shape: 'S2g'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['domainAssociation'],
              members: {
                domainAssociation: {
                  shape: 'S2k'
                }
              }
            }
          },
          CreateWebhook: {
            http: {
              requestUri: '/apps/{appId}/webhooks'
            },
            input: {
              type: 'structure',
              required: ['appId', 'branchName'],
              members: {
                appId: {
                  location: 'uri',
                  locationName: 'appId'
                },
                branchName: {},
                description: {}
              }
            },
            output: {
              type: 'structure',
              required: ['webhook'],
              members: {
                webhook: {
                  shape: 'S2x'
                }
              }
            }
          },
          DeleteApp: {
            http: {
              method: 'DELETE',
              requestUri: '/apps/{appId}'
            },
            input: {
              type: 'structure',
              required: ['appId'],
              members: {
                appId: {
                  location: 'uri',
                  locationName: 'appId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['app'],
              members: {
                app: {
                  shape: 'S12'
                }
              }
            }
          },
          DeleteBackendEnvironment: {
            http: {
              method: 'DELETE',
              requestUri: '/apps/{appId}/backendenvironments/{environmentName}'
            },
            input: {
              type: 'structure',
              required: ['appId', 'environmentName'],
              members: {
                appId: {
                  location: 'uri',
                  locationName: 'appId'
                },
                environmentName: {
                  location: 'uri',
                  locationName: 'environmentName'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['backendEnvironment'],
              members: {
                backendEnvironment: {
                  shape: 'S1i'
                }
              }
            }
          },
          DeleteBranch: {
            http: {
              method: 'DELETE',
              requestUri: '/apps/{appId}/branches/{branchName}'
            },
            input: {
              type: 'structure',
              required: ['appId', 'branchName'],
              members: {
                appId: {
                  location: 'uri',
                  locationName: 'appId'
                },
                branchName: {
                  location: 'uri',
                  locationName: 'branchName'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['branch'],
              members: {
                branch: {
                  shape: 'S1r'
                }
              }
            }
          },
          DeleteDomainAssociation: {
            http: {
              method: 'DELETE',
              requestUri: '/apps/{appId}/domains/{domainName}'
            },
            input: {
              type: 'structure',
              required: ['appId', 'domainName'],
              members: {
                appId: {
                  location: 'uri',
                  locationName: 'appId'
                },
                domainName: {
                  location: 'uri',
                  locationName: 'domainName'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['domainAssociation'],
              members: {
                domainAssociation: {
                  shape: 'S2k'
                }
              }
            }
          },
          DeleteJob: {
            http: {
              method: 'DELETE',
              requestUri: '/apps/{appId}/branches/{branchName}/jobs/{jobId}'
            },
            input: {
              type: 'structure',
              required: ['appId', 'branchName', 'jobId'],
              members: {
                appId: {
                  location: 'uri',
                  locationName: 'appId'
                },
                branchName: {
                  location: 'uri',
                  locationName: 'branchName'
                },
                jobId: {
                  location: 'uri',
                  locationName: 'jobId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['jobSummary'],
              members: {
                jobSummary: {
                  shape: 'S3b'
                }
              }
            }
          },
          DeleteWebhook: {
            http: {
              method: 'DELETE',
              requestUri: '/webhooks/{webhookId}'
            },
            input: {
              type: 'structure',
              required: ['webhookId'],
              members: {
                webhookId: {
                  location: 'uri',
                  locationName: 'webhookId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['webhook'],
              members: {
                webhook: {
                  shape: 'S2x'
                }
              }
            }
          },
          GenerateAccessLogs: {
            http: {
              requestUri: '/apps/{appId}/accesslogs'
            },
            input: {
              type: 'structure',
              required: ['domainName', 'appId'],
              members: {
                startTime: {
                  type: 'timestamp'
                },
                endTime: {
                  type: 'timestamp'
                },
                domainName: {},
                appId: {
                  location: 'uri',
                  locationName: 'appId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                logUrl: {}
              }
            }
          },
          GetApp: {
            http: {
              method: 'GET',
              requestUri: '/apps/{appId}'
            },
            input: {
              type: 'structure',
              required: ['appId'],
              members: {
                appId: {
                  location: 'uri',
                  locationName: 'appId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['app'],
              members: {
                app: {
                  shape: 'S12'
                }
              }
            }
          },
          GetArtifactUrl: {
            http: {
              method: 'GET',
              requestUri: '/artifacts/{artifactId}'
            },
            input: {
              type: 'structure',
              required: ['artifactId'],
              members: {
                artifactId: {
                  location: 'uri',
                  locationName: 'artifactId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['artifactId', 'artifactUrl'],
              members: {
                artifactId: {},
                artifactUrl: {}
              }
            }
          },
          GetBackendEnvironment: {
            http: {
              method: 'GET',
              requestUri: '/apps/{appId}/backendenvironments/{environmentName}'
            },
            input: {
              type: 'structure',
              required: ['appId', 'environmentName'],
              members: {
                appId: {
                  location: 'uri',
                  locationName: 'appId'
                },
                environmentName: {
                  location: 'uri',
                  locationName: 'environmentName'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['backendEnvironment'],
              members: {
                backendEnvironment: {
                  shape: 'S1i'
                }
              }
            }
          },
          GetBranch: {
            http: {
              method: 'GET',
              requestUri: '/apps/{appId}/branches/{branchName}'
            },
            input: {
              type: 'structure',
              required: ['appId', 'branchName'],
              members: {
                appId: {
                  location: 'uri',
                  locationName: 'appId'
                },
                branchName: {
                  location: 'uri',
                  locationName: 'branchName'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['branch'],
              members: {
                branch: {
                  shape: 'S1r'
                }
              }
            }
          },
          GetDomainAssociation: {
            http: {
              method: 'GET',
              requestUri: '/apps/{appId}/domains/{domainName}'
            },
            input: {
              type: 'structure',
              required: ['appId', 'domainName'],
              members: {
                appId: {
                  location: 'uri',
                  locationName: 'appId'
                },
                domainName: {
                  location: 'uri',
                  locationName: 'domainName'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['domainAssociation'],
              members: {
                domainAssociation: {
                  shape: 'S2k'
                }
              }
            }
          },
          GetJob: {
            http: {
              method: 'GET',
              requestUri: '/apps/{appId}/branches/{branchName}/jobs/{jobId}'
            },
            input: {
              type: 'structure',
              required: ['appId', 'branchName', 'jobId'],
              members: {
                appId: {
                  location: 'uri',
                  locationName: 'appId'
                },
                branchName: {
                  location: 'uri',
                  locationName: 'branchName'
                },
                jobId: {
                  location: 'uri',
                  locationName: 'jobId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['job'],
              members: {
                job: {
                  type: 'structure',
                  required: ['summary', 'steps'],
                  members: {
                    summary: {
                      shape: 'S3b'
                    },
                    steps: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        required: ['stepName', 'startTime', 'status', 'endTime'],
                        members: {
                          stepName: {},
                          startTime: {
                            type: 'timestamp'
                          },
                          status: {},
                          endTime: {
                            type: 'timestamp'
                          },
                          logUrl: {},
                          artifactsUrl: {},
                          testArtifactsUrl: {},
                          testConfigUrl: {},
                          screenshots: {
                            type: 'map',
                            key: {},
                            value: {}
                          },
                          statusReason: {},
                          context: {}
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          GetWebhook: {
            http: {
              method: 'GET',
              requestUri: '/webhooks/{webhookId}'
            },
            input: {
              type: 'structure',
              required: ['webhookId'],
              members: {
                webhookId: {
                  location: 'uri',
                  locationName: 'webhookId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['webhook'],
              members: {
                webhook: {
                  shape: 'S2x'
                }
              }
            }
          },
          ListApps: {
            http: {
              method: 'GET',
              requestUri: '/apps'
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
              required: ['apps'],
              members: {
                apps: {
                  type: 'list',
                  member: {
                    shape: 'S12'
                  }
                },
                nextToken: {}
              }
            }
          },
          ListArtifacts: {
            http: {
              method: 'GET',
              requestUri: '/apps/{appId}/branches/{branchName}/jobs/{jobId}/artifacts'
            },
            input: {
              type: 'structure',
              required: ['appId', 'branchName', 'jobId'],
              members: {
                appId: {
                  location: 'uri',
                  locationName: 'appId'
                },
                branchName: {
                  location: 'uri',
                  locationName: 'branchName'
                },
                jobId: {
                  location: 'uri',
                  locationName: 'jobId'
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
              required: ['artifacts'],
              members: {
                artifacts: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['artifactFileName', 'artifactId'],
                    members: {
                      artifactFileName: {},
                      artifactId: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListBackendEnvironments: {
            http: {
              method: 'GET',
              requestUri: '/apps/{appId}/backendenvironments'
            },
            input: {
              type: 'structure',
              required: ['appId'],
              members: {
                appId: {
                  location: 'uri',
                  locationName: 'appId'
                },
                environmentName: {
                  location: 'querystring',
                  locationName: 'environmentName'
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
              required: ['backendEnvironments'],
              members: {
                backendEnvironments: {
                  type: 'list',
                  member: {
                    shape: 'S1i'
                  }
                },
                nextToken: {}
              }
            }
          },
          ListBranches: {
            http: {
              method: 'GET',
              requestUri: '/apps/{appId}/branches'
            },
            input: {
              type: 'structure',
              required: ['appId'],
              members: {
                appId: {
                  location: 'uri',
                  locationName: 'appId'
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
              required: ['branches'],
              members: {
                branches: {
                  type: 'list',
                  member: {
                    shape: 'S1r'
                  }
                },
                nextToken: {}
              }
            }
          },
          ListDomainAssociations: {
            http: {
              method: 'GET',
              requestUri: '/apps/{appId}/domains'
            },
            input: {
              type: 'structure',
              required: ['appId'],
              members: {
                appId: {
                  location: 'uri',
                  locationName: 'appId'
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
              required: ['domainAssociations'],
              members: {
                domainAssociations: {
                  type: 'list',
                  member: {
                    shape: 'S2k'
                  }
                },
                nextToken: {}
              }
            }
          },
          ListJobs: {
            http: {
              method: 'GET',
              requestUri: '/apps/{appId}/branches/{branchName}/jobs'
            },
            input: {
              type: 'structure',
              required: ['appId', 'branchName'],
              members: {
                appId: {
                  location: 'uri',
                  locationName: 'appId'
                },
                branchName: {
                  location: 'uri',
                  locationName: 'branchName'
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
              required: ['jobSummaries'],
              members: {
                jobSummaries: {
                  type: 'list',
                  member: {
                    shape: 'S3b'
                  }
                },
                nextToken: {}
              }
            }
          },
          ListTagsForResource: {
            http: {
              method: 'GET',
              requestUri: '/tags/{resourceArn}'
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
                  shape: 'Sm'
                }
              }
            }
          },
          ListWebhooks: {
            http: {
              method: 'GET',
              requestUri: '/apps/{appId}/webhooks'
            },
            input: {
              type: 'structure',
              required: ['appId'],
              members: {
                appId: {
                  location: 'uri',
                  locationName: 'appId'
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
              required: ['webhooks'],
              members: {
                webhooks: {
                  type: 'list',
                  member: {
                    shape: 'S2x'
                  }
                },
                nextToken: {}
              }
            }
          },
          StartDeployment: {
            http: {
              requestUri: '/apps/{appId}/branches/{branchName}/deployments/start'
            },
            input: {
              type: 'structure',
              required: ['appId', 'branchName'],
              members: {
                appId: {
                  location: 'uri',
                  locationName: 'appId'
                },
                branchName: {
                  location: 'uri',
                  locationName: 'branchName'
                },
                jobId: {},
                sourceUrl: {}
              }
            },
            output: {
              type: 'structure',
              required: ['jobSummary'],
              members: {
                jobSummary: {
                  shape: 'S3b'
                }
              }
            }
          },
          StartJob: {
            http: {
              requestUri: '/apps/{appId}/branches/{branchName}/jobs'
            },
            input: {
              type: 'structure',
              required: ['appId', 'branchName', 'jobType'],
              members: {
                appId: {
                  location: 'uri',
                  locationName: 'appId'
                },
                branchName: {
                  location: 'uri',
                  locationName: 'branchName'
                },
                jobId: {},
                jobType: {},
                jobReason: {},
                commitId: {},
                commitMessage: {},
                commitTime: {
                  type: 'timestamp'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['jobSummary'],
              members: {
                jobSummary: {
                  shape: 'S3b'
                }
              }
            }
          },
          StopJob: {
            http: {
              method: 'DELETE',
              requestUri: '/apps/{appId}/branches/{branchName}/jobs/{jobId}/stop'
            },
            input: {
              type: 'structure',
              required: ['appId', 'branchName', 'jobId'],
              members: {
                appId: {
                  location: 'uri',
                  locationName: 'appId'
                },
                branchName: {
                  location: 'uri',
                  locationName: 'branchName'
                },
                jobId: {
                  location: 'uri',
                  locationName: 'jobId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['jobSummary'],
              members: {
                jobSummary: {
                  shape: 'S3b'
                }
              }
            }
          },
          TagResource: {
            http: {
              requestUri: '/tags/{resourceArn}'
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
                  shape: 'Sm'
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
              requestUri: '/tags/{resourceArn}'
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
          UpdateApp: {
            http: {
              requestUri: '/apps/{appId}'
            },
            input: {
              type: 'structure',
              required: ['appId'],
              members: {
                appId: {
                  location: 'uri',
                  locationName: 'appId'
                },
                name: {},
                description: {},
                platform: {},
                iamServiceRoleArn: {},
                environmentVariables: {
                  shape: 'S9'
                },
                enableBranchAutoBuild: {
                  type: 'boolean'
                },
                enableBranchAutoDeletion: {
                  type: 'boolean'
                },
                enableBasicAuth: {
                  type: 'boolean'
                },
                basicAuthCredentials: {
                  shape: 'Sf'
                },
                customRules: {
                  shape: 'Sg'
                },
                buildSpec: {
                  shape: 'Sp'
                },
                customHeaders: {},
                enableAutoBranchCreation: {
                  type: 'boolean'
                },
                autoBranchCreationPatterns: {
                  shape: 'Ss'
                },
                autoBranchCreationConfig: {
                  shape: 'Su'
                },
                repository: {},
                oauthToken: {
                  shape: 'S7'
                },
                accessToken: {
                  shape: 'S8'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['app'],
              members: {
                app: {
                  shape: 'S12'
                }
              }
            }
          },
          UpdateBranch: {
            http: {
              requestUri: '/apps/{appId}/branches/{branchName}'
            },
            input: {
              type: 'structure',
              required: ['appId', 'branchName'],
              members: {
                appId: {
                  location: 'uri',
                  locationName: 'appId'
                },
                branchName: {
                  location: 'uri',
                  locationName: 'branchName'
                },
                description: {},
                framework: {},
                stage: {},
                enableNotification: {
                  type: 'boolean'
                },
                enableAutoBuild: {
                  type: 'boolean'
                },
                environmentVariables: {
                  shape: 'S9'
                },
                basicAuthCredentials: {
                  shape: 'Sf'
                },
                enableBasicAuth: {
                  type: 'boolean'
                },
                enablePerformanceMode: {
                  type: 'boolean'
                },
                buildSpec: {
                  shape: 'Sp'
                },
                ttl: {},
                displayName: {},
                enablePullRequestPreview: {
                  type: 'boolean'
                },
                pullRequestEnvironmentName: {},
                backendEnvironmentArn: {},
                backend: {
                  shape: 'S1o'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['branch'],
              members: {
                branch: {
                  shape: 'S1r'
                }
              }
            }
          },
          UpdateDomainAssociation: {
            http: {
              requestUri: '/apps/{appId}/domains/{domainName}'
            },
            input: {
              type: 'structure',
              required: ['appId', 'domainName'],
              members: {
                appId: {
                  location: 'uri',
                  locationName: 'appId'
                },
                domainName: {
                  location: 'uri',
                  locationName: 'domainName'
                },
                enableAutoSubDomain: {
                  type: 'boolean'
                },
                subDomainSettings: {
                  shape: 'S2a'
                },
                autoSubDomainCreationPatterns: {
                  shape: 'S2d'
                },
                autoSubDomainIAMRole: {},
                certificateSettings: {
                  shape: 'S2g'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['domainAssociation'],
              members: {
                domainAssociation: {
                  shape: 'S2k'
                }
              }
            }
          },
          UpdateWebhook: {
            http: {
              requestUri: '/webhooks/{webhookId}'
            },
            input: {
              type: 'structure',
              required: ['webhookId'],
              members: {
                webhookId: {
                  location: 'uri',
                  locationName: 'webhookId'
                },
                branchName: {},
                description: {}
              }
            },
            output: {
              type: 'structure',
              required: ['webhook'],
              members: {
                webhook: {
                  shape: 'S2x'
                }
              }
            }
          }
        },
        shapes: {
          S7: {
            type: 'string',
            sensitive: true
          },
          S8: {
            type: 'string',
            sensitive: true
          },
          S9: {
            type: 'map',
            key: {},
            value: {}
          },
          Sf: {
            type: 'string',
            sensitive: true
          },
          Sg: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['source', 'target'],
              members: {
                source: {},
                target: {},
                status: {},
                condition: {}
              }
            }
          },
          Sm: {
            type: 'map',
            key: {},
            value: {}
          },
          Sp: {
            type: 'string',
            sensitive: true
          },
          Ss: {
            type: 'list',
            member: {}
          },
          Su: {
            type: 'structure',
            members: {
              stage: {},
              framework: {},
              enableAutoBuild: {
                type: 'boolean'
              },
              environmentVariables: {
                shape: 'S9'
              },
              basicAuthCredentials: {
                shape: 'Sf'
              },
              enableBasicAuth: {
                type: 'boolean'
              },
              enablePerformanceMode: {
                type: 'boolean'
              },
              buildSpec: {
                shape: 'Sp'
              },
              enablePullRequestPreview: {
                type: 'boolean'
              },
              pullRequestEnvironmentName: {}
            }
          },
          S12: {
            type: 'structure',
            required: ['appId', 'appArn', 'name', 'description', 'repository', 'platform', 'createTime', 'updateTime', 'environmentVariables', 'defaultDomain', 'enableBranchAutoBuild', 'enableBasicAuth'],
            members: {
              appId: {},
              appArn: {},
              name: {},
              tags: {
                shape: 'Sm'
              },
              description: {},
              repository: {},
              platform: {},
              createTime: {
                type: 'timestamp'
              },
              updateTime: {
                type: 'timestamp'
              },
              iamServiceRoleArn: {},
              environmentVariables: {
                shape: 'S9'
              },
              defaultDomain: {},
              enableBranchAutoBuild: {
                type: 'boolean'
              },
              enableBranchAutoDeletion: {
                type: 'boolean'
              },
              enableBasicAuth: {
                type: 'boolean'
              },
              basicAuthCredentials: {
                shape: 'Sf'
              },
              customRules: {
                shape: 'Sg'
              },
              productionBranch: {
                type: 'structure',
                members: {
                  lastDeployTime: {
                    type: 'timestamp'
                  },
                  status: {},
                  thumbnailUrl: {},
                  branchName: {}
                }
              },
              buildSpec: {
                shape: 'Sp'
              },
              customHeaders: {},
              enableAutoBranchCreation: {
                type: 'boolean'
              },
              autoBranchCreationPatterns: {
                shape: 'Ss'
              },
              autoBranchCreationConfig: {
                shape: 'Su'
              },
              repositoryCloneMethod: {}
            }
          },
          S1i: {
            type: 'structure',
            required: ['backendEnvironmentArn', 'environmentName', 'createTime', 'updateTime'],
            members: {
              backendEnvironmentArn: {},
              environmentName: {},
              stackName: {},
              deploymentArtifacts: {},
              createTime: {
                type: 'timestamp'
              },
              updateTime: {
                type: 'timestamp'
              }
            }
          },
          S1o: {
            type: 'structure',
            members: {
              stackArn: {}
            }
          },
          S1r: {
            type: 'structure',
            required: ['branchArn', 'branchName', 'description', 'stage', 'displayName', 'enableNotification', 'createTime', 'updateTime', 'environmentVariables', 'enableAutoBuild', 'customDomains', 'framework', 'activeJobId', 'totalNumberOfJobs', 'enableBasicAuth', 'ttl', 'enablePullRequestPreview'],
            members: {
              branchArn: {},
              branchName: {},
              description: {},
              tags: {
                shape: 'Sm'
              },
              stage: {},
              displayName: {},
              enableNotification: {
                type: 'boolean'
              },
              createTime: {
                type: 'timestamp'
              },
              updateTime: {
                type: 'timestamp'
              },
              environmentVariables: {
                shape: 'S9'
              },
              enableAutoBuild: {
                type: 'boolean'
              },
              customDomains: {
                type: 'list',
                member: {}
              },
              framework: {},
              activeJobId: {},
              totalNumberOfJobs: {},
              enableBasicAuth: {
                type: 'boolean'
              },
              enablePerformanceMode: {
                type: 'boolean'
              },
              thumbnailUrl: {},
              basicAuthCredentials: {
                shape: 'Sf'
              },
              buildSpec: {
                shape: 'Sp'
              },
              ttl: {},
              associatedResources: {
                type: 'list',
                member: {}
              },
              enablePullRequestPreview: {
                type: 'boolean'
              },
              pullRequestEnvironmentName: {},
              destinationBranch: {},
              sourceBranch: {},
              backendEnvironmentArn: {},
              backend: {
                shape: 'S1o'
              }
            }
          },
          S2a: {
            type: 'list',
            member: {
              shape: 'S2b'
            }
          },
          S2b: {
            type: 'structure',
            required: ['prefix', 'branchName'],
            members: {
              prefix: {},
              branchName: {}
            }
          },
          S2d: {
            type: 'list',
            member: {}
          },
          S2g: {
            type: 'structure',
            required: ['type'],
            members: {
              type: {},
              customCertificateArn: {}
            }
          },
          S2k: {
            type: 'structure',
            required: ['domainAssociationArn', 'domainName', 'enableAutoSubDomain', 'domainStatus', 'statusReason', 'subDomains'],
            members: {
              domainAssociationArn: {},
              domainName: {},
              enableAutoSubDomain: {
                type: 'boolean'
              },
              autoSubDomainCreationPatterns: {
                shape: 'S2d'
              },
              autoSubDomainIAMRole: {},
              domainStatus: {},
              updateStatus: {},
              statusReason: {},
              certificateVerificationDNSRecord: {},
              subDomains: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['subDomainSetting', 'verified', 'dnsRecord'],
                  members: {
                    subDomainSetting: {
                      shape: 'S2b'
                    },
                    verified: {
                      type: 'boolean'
                    },
                    dnsRecord: {}
                  }
                }
              },
              certificate: {
                type: 'structure',
                required: ['type'],
                members: {
                  type: {},
                  customCertificateArn: {},
                  certificateVerificationDNSRecord: {}
                }
              }
            }
          },
          S2x: {
            type: 'structure',
            required: ['webhookArn', 'webhookId', 'webhookUrl', 'branchName', 'description', 'createTime', 'updateTime'],
            members: {
              webhookArn: {},
              webhookId: {},
              webhookUrl: {},
              branchName: {},
              description: {},
              createTime: {
                type: 'timestamp'
              },
              updateTime: {
                type: 'timestamp'
              }
            }
          },
          S3b: {
            type: 'structure',
            required: ['jobArn', 'jobId', 'commitId', 'commitMessage', 'commitTime', 'startTime', 'status', 'jobType'],
            members: {
              jobArn: {},
              jobId: {},
              commitId: {},
              commitMessage: {},
              commitTime: {
                type: 'timestamp'
              },
              startTime: {
                type: 'timestamp'
              },
              status: {},
              endTime: {
                type: 'timestamp'
              },
              jobType: {}
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=62d2fb6c3478d302a9ef1e7153e1049cfdef7fab.js.map