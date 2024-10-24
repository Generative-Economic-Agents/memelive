System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2020-04-30',
          endpointPrefix: 'resiliencehub',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          protocols: ['rest-json'],
          serviceFullName: 'AWS Resilience Hub',
          serviceId: 'resiliencehub',
          signatureVersion: 'v4',
          signingName: 'resiliencehub',
          uid: 'resiliencehub-2020-04-30'
        },
        operations: {
          AddDraftAppVersionResourceMappings: {
            http: {
              requestUri: '/add-draft-app-version-resource-mappings',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['appArn', 'resourceMappings'],
              members: {
                appArn: {},
                resourceMappings: {
                  shape: 'S3'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['appArn', 'appVersion', 'resourceMappings'],
              members: {
                appArn: {},
                appVersion: {},
                resourceMappings: {
                  shape: 'S3'
                }
              }
            }
          },
          BatchUpdateRecommendationStatus: {
            http: {
              requestUri: '/batch-update-recommendation-status',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['appArn', 'requestEntries'],
              members: {
                appArn: {},
                requestEntries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['entryId', 'excluded', 'item', 'referenceId'],
                    members: {
                      entryId: {},
                      excludeReason: {},
                      excluded: {
                        type: 'boolean'
                      },
                      item: {
                        shape: 'Sj'
                      },
                      referenceId: {}
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              required: ['appArn', 'failedEntries', 'successfulEntries'],
              members: {
                appArn: {},
                failedEntries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['entryId', 'errorMessage'],
                    members: {
                      entryId: {},
                      errorMessage: {}
                    }
                  }
                },
                successfulEntries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['entryId', 'excluded', 'item', 'referenceId'],
                    members: {
                      entryId: {},
                      excludeReason: {},
                      excluded: {
                        type: 'boolean'
                      },
                      item: {
                        shape: 'Sj'
                      },
                      referenceId: {}
                    }
                  }
                }
              }
            }
          },
          CreateApp: {
            http: {
              requestUri: '/create-app',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['name'],
              members: {
                assessmentSchedule: {},
                clientToken: {
                  idempotencyToken: true
                },
                description: {},
                eventSubscriptions: {
                  shape: 'Sw'
                },
                name: {},
                permissionModel: {
                  shape: 'Sz'
                },
                policyArn: {},
                tags: {
                  shape: 'S14'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['app'],
              members: {
                app: {
                  shape: 'S18'
                }
              }
            }
          },
          CreateAppVersionAppComponent: {
            http: {
              requestUri: '/create-app-version-app-component',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['appArn', 'name', 'type'],
              members: {
                additionalInfo: {
                  shape: 'S1g'
                },
                appArn: {},
                clientToken: {
                  idempotencyToken: true
                },
                id: {},
                name: {},
                type: {}
              }
            },
            output: {
              type: 'structure',
              required: ['appArn', 'appVersion'],
              members: {
                appArn: {},
                appComponent: {
                  shape: 'S1l'
                },
                appVersion: {}
              }
            }
          },
          CreateAppVersionResource: {
            http: {
              requestUri: '/create-app-version-resource',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['appArn', 'appComponents', 'logicalResourceId', 'physicalResourceId', 'resourceType'],
              members: {
                additionalInfo: {
                  shape: 'S1g'
                },
                appArn: {},
                appComponents: {
                  shape: 'S1n'
                },
                awsAccountId: {},
                awsRegion: {},
                clientToken: {
                  idempotencyToken: true
                },
                logicalResourceId: {
                  shape: 'S1o'
                },
                physicalResourceId: {},
                resourceName: {},
                resourceType: {}
              }
            },
            output: {
              type: 'structure',
              required: ['appArn', 'appVersion'],
              members: {
                appArn: {},
                appVersion: {},
                physicalResource: {
                  shape: 'S1r'
                }
              }
            }
          },
          CreateRecommendationTemplate: {
            http: {
              requestUri: '/create-recommendation-template',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['assessmentArn', 'name'],
              members: {
                assessmentArn: {},
                bucketName: {},
                clientToken: {
                  idempotencyToken: true
                },
                format: {},
                name: {},
                recommendationIds: {
                  shape: 'S1w'
                },
                recommendationTypes: {
                  shape: 'S1y'
                },
                tags: {
                  shape: 'S14'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                recommendationTemplate: {
                  shape: 'S21'
                }
              }
            }
          },
          CreateResiliencyPolicy: {
            http: {
              requestUri: '/create-resiliency-policy',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['policy', 'policyName', 'tier'],
              members: {
                clientToken: {
                  idempotencyToken: true
                },
                dataLocationConstraint: {},
                policy: {
                  shape: 'S26'
                },
                policyDescription: {},
                policyName: {},
                tags: {
                  shape: 'S14'
                },
                tier: {}
              }
            },
            output: {
              type: 'structure',
              required: ['policy'],
              members: {
                policy: {
                  shape: 'S2c'
                }
              }
            }
          },
          DeleteApp: {
            http: {
              requestUri: '/delete-app',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['appArn'],
              members: {
                appArn: {},
                clientToken: {
                  idempotencyToken: true
                },
                forceDelete: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['appArn'],
              members: {
                appArn: {}
              }
            }
          },
          DeleteAppAssessment: {
            http: {
              requestUri: '/delete-app-assessment',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['assessmentArn'],
              members: {
                assessmentArn: {},
                clientToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              required: ['assessmentArn', 'assessmentStatus'],
              members: {
                assessmentArn: {},
                assessmentStatus: {}
              }
            }
          },
          DeleteAppInputSource: {
            http: {
              requestUri: '/delete-app-input-source',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['appArn'],
              members: {
                appArn: {},
                clientToken: {
                  idempotencyToken: true
                },
                eksSourceClusterNamespace: {
                  shape: 'S2k'
                },
                sourceArn: {},
                terraformSource: {
                  shape: 'S2m'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                appArn: {},
                appInputSource: {
                  shape: 'S2p'
                }
              }
            }
          },
          DeleteAppVersionAppComponent: {
            http: {
              requestUri: '/delete-app-version-app-component',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['appArn', 'id'],
              members: {
                appArn: {},
                clientToken: {
                  idempotencyToken: true
                },
                id: {}
              }
            },
            output: {
              type: 'structure',
              required: ['appArn', 'appVersion'],
              members: {
                appArn: {},
                appComponent: {
                  shape: 'S1l'
                },
                appVersion: {}
              }
            }
          },
          DeleteAppVersionResource: {
            http: {
              requestUri: '/delete-app-version-resource',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['appArn'],
              members: {
                appArn: {},
                awsAccountId: {},
                awsRegion: {},
                clientToken: {
                  idempotencyToken: true
                },
                logicalResourceId: {
                  shape: 'S1o'
                },
                physicalResourceId: {},
                resourceName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['appArn', 'appVersion'],
              members: {
                appArn: {},
                appVersion: {},
                physicalResource: {
                  shape: 'S1r'
                }
              }
            }
          },
          DeleteRecommendationTemplate: {
            http: {
              requestUri: '/delete-recommendation-template',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['recommendationTemplateArn'],
              members: {
                clientToken: {
                  idempotencyToken: true
                },
                recommendationTemplateArn: {}
              }
            },
            output: {
              type: 'structure',
              required: ['recommendationTemplateArn', 'status'],
              members: {
                recommendationTemplateArn: {},
                status: {}
              }
            }
          },
          DeleteResiliencyPolicy: {
            http: {
              requestUri: '/delete-resiliency-policy',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['policyArn'],
              members: {
                clientToken: {
                  idempotencyToken: true
                },
                policyArn: {}
              }
            },
            output: {
              type: 'structure',
              required: ['policyArn'],
              members: {
                policyArn: {}
              }
            }
          },
          DescribeApp: {
            http: {
              requestUri: '/describe-app',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['appArn'],
              members: {
                appArn: {}
              }
            },
            output: {
              type: 'structure',
              required: ['app'],
              members: {
                app: {
                  shape: 'S18'
                }
              }
            }
          },
          DescribeAppAssessment: {
            http: {
              requestUri: '/describe-app-assessment',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['assessmentArn'],
              members: {
                assessmentArn: {}
              }
            },
            output: {
              type: 'structure',
              required: ['assessment'],
              members: {
                assessment: {
                  shape: 'S33'
                }
              }
            }
          },
          DescribeAppVersion: {
            http: {
              requestUri: '/describe-app-version',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['appArn', 'appVersion'],
              members: {
                appArn: {},
                appVersion: {}
              }
            },
            output: {
              type: 'structure',
              required: ['appArn', 'appVersion'],
              members: {
                additionalInfo: {
                  shape: 'S1g'
                },
                appArn: {},
                appVersion: {}
              }
            }
          },
          DescribeAppVersionAppComponent: {
            http: {
              requestUri: '/describe-app-version-app-component',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['appArn', 'appVersion', 'id'],
              members: {
                appArn: {},
                appVersion: {},
                id: {}
              }
            },
            output: {
              type: 'structure',
              required: ['appArn', 'appVersion'],
              members: {
                appArn: {},
                appComponent: {
                  shape: 'S1l'
                },
                appVersion: {}
              }
            }
          },
          DescribeAppVersionResource: {
            http: {
              requestUri: '/describe-app-version-resource',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['appArn', 'appVersion'],
              members: {
                appArn: {},
                appVersion: {},
                awsAccountId: {},
                awsRegion: {},
                logicalResourceId: {
                  shape: 'S1o'
                },
                physicalResourceId: {},
                resourceName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['appArn', 'appVersion'],
              members: {
                appArn: {},
                appVersion: {},
                physicalResource: {
                  shape: 'S1r'
                }
              }
            }
          },
          DescribeAppVersionResourcesResolutionStatus: {
            http: {
              requestUri: '/describe-app-version-resources-resolution-status',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['appArn', 'appVersion'],
              members: {
                appArn: {},
                appVersion: {},
                resolutionId: {}
              }
            },
            output: {
              type: 'structure',
              required: ['appArn', 'appVersion', 'resolutionId', 'status'],
              members: {
                appArn: {},
                appVersion: {},
                errorMessage: {},
                resolutionId: {},
                status: {}
              }
            }
          },
          DescribeAppVersionTemplate: {
            http: {
              requestUri: '/describe-app-version-template',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['appArn', 'appVersion'],
              members: {
                appArn: {},
                appVersion: {}
              }
            },
            output: {
              type: 'structure',
              required: ['appArn', 'appTemplateBody', 'appVersion'],
              members: {
                appArn: {},
                appTemplateBody: {},
                appVersion: {}
              }
            }
          },
          DescribeDraftAppVersionResourcesImportStatus: {
            http: {
              requestUri: '/describe-draft-app-version-resources-import-status',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['appArn'],
              members: {
                appArn: {}
              }
            },
            output: {
              type: 'structure',
              required: ['appArn', 'appVersion', 'status', 'statusChangeTime'],
              members: {
                appArn: {},
                appVersion: {},
                errorMessage: {},
                status: {},
                statusChangeTime: {
                  type: 'timestamp'
                }
              }
            }
          },
          DescribeResiliencyPolicy: {
            http: {
              requestUri: '/describe-resiliency-policy',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['policyArn'],
              members: {
                policyArn: {}
              }
            },
            output: {
              type: 'structure',
              required: ['policy'],
              members: {
                policy: {
                  shape: 'S2c'
                }
              }
            }
          },
          ImportResourcesToDraftAppVersion: {
            http: {
              requestUri: '/import-resources-to-draft-app-version',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['appArn'],
              members: {
                appArn: {},
                eksSources: {
                  shape: 'S43'
                },
                importStrategy: {},
                sourceArns: {
                  shape: 'S47'
                },
                terraformSources: {
                  shape: 'S48'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['appArn', 'appVersion', 'status'],
              members: {
                appArn: {},
                appVersion: {},
                eksSources: {
                  shape: 'S43'
                },
                sourceArns: {
                  shape: 'S47'
                },
                status: {},
                terraformSources: {
                  shape: 'S48'
                }
              }
            }
          },
          ListAlarmRecommendations: {
            http: {
              requestUri: '/list-alarm-recommendations',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['assessmentArn'],
              members: {
                assessmentArn: {},
                maxResults: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              required: ['alarmRecommendations'],
              members: {
                alarmRecommendations: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['name', 'recommendationId', 'referenceId', 'type'],
                    members: {
                      appComponentName: {
                        deprecated: true,
                        deprecatedMessage: 'An alarm recommendation can be attached to multiple Application Components, hence this property will be replaced by the new property \'appComponentNames\'.'
                      },
                      appComponentNames: {
                        shape: 'S1n'
                      },
                      description: {},
                      items: {
                        shape: 'S4h'
                      },
                      name: {},
                      prerequisite: {},
                      recommendationId: {},
                      recommendationStatus: {},
                      referenceId: {},
                      type: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListAppAssessmentComplianceDrifts: {
            http: {
              requestUri: '/list-app-assessment-compliance-drifts',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['assessmentArn'],
              members: {
                assessmentArn: {},
                maxResults: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              required: ['complianceDrifts'],
              members: {
                complianceDrifts: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      actualReferenceId: {},
                      actualValue: {
                        shape: 'S34'
                      },
                      appId: {},
                      appVersion: {},
                      diffType: {},
                      driftType: {},
                      entityId: {},
                      entityType: {},
                      expectedReferenceId: {},
                      expectedValue: {
                        shape: 'S34'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListAppAssessmentResourceDrifts: {
            http: {
              requestUri: '/list-app-assessment-resource-drifts',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['assessmentArn'],
              members: {
                assessmentArn: {},
                maxResults: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              required: ['resourceDrifts'],
              members: {
                nextToken: {},
                resourceDrifts: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      appArn: {},
                      appVersion: {},
                      diffType: {},
                      referenceId: {},
                      resourceIdentifier: {
                        type: 'structure',
                        members: {
                          logicalResourceId: {
                            shape: 'S1o'
                          },
                          resourceType: {}
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          ListAppAssessments: {
            http: {
              method: 'GET',
              requestUri: '/list-app-assessments',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                appArn: {
                  location: 'querystring',
                  locationName: 'appArn'
                },
                assessmentName: {
                  location: 'querystring',
                  locationName: 'assessmentName'
                },
                assessmentStatus: {
                  location: 'querystring',
                  locationName: 'assessmentStatus',
                  type: 'list',
                  member: {}
                },
                complianceStatus: {
                  location: 'querystring',
                  locationName: 'complianceStatus'
                },
                invoker: {
                  location: 'querystring',
                  locationName: 'invoker'
                },
                maxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                reverseOrder: {
                  location: 'querystring',
                  locationName: 'reverseOrder',
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['assessmentSummaries'],
              members: {
                assessmentSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['assessmentArn', 'assessmentStatus'],
                    members: {
                      appArn: {},
                      appVersion: {},
                      assessmentArn: {},
                      assessmentName: {},
                      assessmentStatus: {},
                      complianceStatus: {},
                      cost: {
                        shape: 'S37'
                      },
                      driftStatus: {},
                      endTime: {
                        type: 'timestamp'
                      },
                      invoker: {},
                      message: {},
                      resiliencyScore: {
                        type: 'double'
                      },
                      startTime: {
                        type: 'timestamp'
                      },
                      versionName: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListAppComponentCompliances: {
            http: {
              requestUri: '/list-app-component-compliances',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['assessmentArn'],
              members: {
                assessmentArn: {},
                maxResults: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              required: ['componentCompliances'],
              members: {
                componentCompliances: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      appComponentName: {},
                      compliance: {
                        shape: 'S34'
                      },
                      cost: {
                        shape: 'S37'
                      },
                      message: {},
                      resiliencyScore: {
                        shape: 'S3c'
                      },
                      status: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListAppComponentRecommendations: {
            http: {
              requestUri: '/list-app-component-recommendations',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['assessmentArn'],
              members: {
                assessmentArn: {},
                maxResults: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              required: ['componentRecommendations'],
              members: {
                componentRecommendations: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['appComponentName', 'configRecommendations', 'recommendationStatus'],
                    members: {
                      appComponentName: {},
                      configRecommendations: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          required: ['name', 'optimizationType', 'referenceId'],
                          members: {
                            appComponentName: {},
                            compliance: {
                              shape: 'S34'
                            },
                            cost: {
                              shape: 'S37'
                            },
                            description: {},
                            haArchitecture: {},
                            name: {},
                            optimizationType: {},
                            recommendationCompliance: {
                              type: 'map',
                              key: {},
                              value: {
                                type: 'structure',
                                required: ['expectedComplianceStatus'],
                                members: {
                                  expectedComplianceStatus: {},
                                  expectedRpoDescription: {},
                                  expectedRpoInSecs: {
                                    type: 'integer'
                                  },
                                  expectedRtoDescription: {},
                                  expectedRtoInSecs: {
                                    type: 'integer'
                                  }
                                }
                              }
                            },
                            referenceId: {},
                            suggestedChanges: {
                              type: 'list',
                              member: {}
                            }
                          }
                        }
                      },
                      recommendationStatus: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListAppInputSources: {
            http: {
              requestUri: '/list-app-input-sources',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['appArn', 'appVersion'],
              members: {
                appArn: {},
                appVersion: {},
                maxResults: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              required: ['appInputSources'],
              members: {
                appInputSources: {
                  type: 'list',
                  member: {
                    shape: 'S2p'
                  }
                },
                nextToken: {}
              }
            }
          },
          ListAppVersionAppComponents: {
            http: {
              requestUri: '/list-app-version-app-components',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['appArn', 'appVersion'],
              members: {
                appArn: {},
                appVersion: {},
                maxResults: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              required: ['appArn', 'appVersion'],
              members: {
                appArn: {},
                appComponents: {
                  shape: 'S1s'
                },
                appVersion: {},
                nextToken: {}
              }
            }
          },
          ListAppVersionResourceMappings: {
            http: {
              requestUri: '/list-app-version-resource-mappings',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['appArn', 'appVersion'],
              members: {
                appArn: {},
                appVersion: {},
                maxResults: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              required: ['resourceMappings'],
              members: {
                nextToken: {},
                resourceMappings: {
                  shape: 'S3'
                }
              }
            }
          },
          ListAppVersionResources: {
            http: {
              requestUri: '/list-app-version-resources',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['appArn', 'appVersion'],
              members: {
                appArn: {},
                appVersion: {},
                maxResults: {
                  type: 'integer'
                },
                nextToken: {},
                resolutionId: {}
              }
            },
            output: {
              type: 'structure',
              required: ['physicalResources', 'resolutionId'],
              members: {
                nextToken: {},
                physicalResources: {
                  type: 'list',
                  member: {
                    shape: 'S1r'
                  }
                },
                resolutionId: {}
              }
            }
          },
          ListAppVersions: {
            http: {
              requestUri: '/list-app-versions',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['appArn'],
              members: {
                appArn: {},
                endTime: {
                  type: 'timestamp'
                },
                maxResults: {
                  type: 'integer'
                },
                nextToken: {},
                startTime: {
                  type: 'timestamp'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['appVersions'],
              members: {
                appVersions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['appVersion'],
                    members: {
                      appVersion: {},
                      creationTime: {
                        type: 'timestamp'
                      },
                      identifier: {
                        type: 'long'
                      },
                      versionName: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListApps: {
            http: {
              method: 'GET',
              requestUri: '/list-apps',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                appArn: {
                  location: 'querystring',
                  locationName: 'appArn'
                },
                fromLastAssessmentTime: {
                  location: 'querystring',
                  locationName: 'fromLastAssessmentTime',
                  type: 'timestamp'
                },
                maxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                name: {
                  location: 'querystring',
                  locationName: 'name'
                },
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                reverseOrder: {
                  location: 'querystring',
                  locationName: 'reverseOrder',
                  type: 'boolean'
                },
                toLastAssessmentTime: {
                  location: 'querystring',
                  locationName: 'toLastAssessmentTime',
                  type: 'timestamp'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['appSummaries'],
              members: {
                appSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['appArn', 'creationTime', 'name'],
                    members: {
                      appArn: {},
                      assessmentSchedule: {},
                      complianceStatus: {},
                      creationTime: {
                        type: 'timestamp'
                      },
                      description: {},
                      driftStatus: {},
                      lastAppComplianceEvaluationTime: {
                        type: 'timestamp'
                      },
                      name: {},
                      resiliencyScore: {
                        type: 'double'
                      },
                      rpoInSecs: {
                        type: 'integer'
                      },
                      rtoInSecs: {
                        type: 'integer'
                      },
                      status: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListRecommendationTemplates: {
            http: {
              method: 'GET',
              requestUri: '/list-recommendation-templates',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                assessmentArn: {
                  location: 'querystring',
                  locationName: 'assessmentArn'
                },
                maxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                name: {
                  location: 'querystring',
                  locationName: 'name'
                },
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                recommendationTemplateArn: {
                  location: 'querystring',
                  locationName: 'recommendationTemplateArn'
                },
                reverseOrder: {
                  location: 'querystring',
                  locationName: 'reverseOrder',
                  type: 'boolean'
                },
                status: {
                  location: 'querystring',
                  locationName: 'status',
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                nextToken: {},
                recommendationTemplates: {
                  type: 'list',
                  member: {
                    shape: 'S21'
                  }
                }
              }
            }
          },
          ListResiliencyPolicies: {
            http: {
              method: 'GET',
              requestUri: '/list-resiliency-policies',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                maxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                policyName: {
                  location: 'querystring',
                  locationName: 'policyName'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['resiliencyPolicies'],
              members: {
                nextToken: {},
                resiliencyPolicies: {
                  shape: 'S66'
                }
              }
            }
          },
          ListSopRecommendations: {
            http: {
              requestUri: '/list-sop-recommendations',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['assessmentArn'],
              members: {
                assessmentArn: {},
                maxResults: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              required: ['sopRecommendations'],
              members: {
                nextToken: {},
                sopRecommendations: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['recommendationId', 'referenceId', 'serviceType'],
                    members: {
                      appComponentName: {},
                      description: {},
                      items: {
                        shape: 'S4h'
                      },
                      name: {},
                      prerequisite: {},
                      recommendationId: {},
                      recommendationStatus: {},
                      referenceId: {},
                      serviceType: {}
                    }
                  }
                }
              }
            }
          },
          ListSuggestedResiliencyPolicies: {
            http: {
              method: 'GET',
              requestUri: '/list-suggested-resiliency-policies',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                maxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['resiliencyPolicies'],
              members: {
                nextToken: {},
                resiliencyPolicies: {
                  shape: 'S66'
                }
              }
            }
          },
          ListTagsForResource: {
            http: {
              method: 'GET',
              requestUri: '/tags/{resourceArn}',
              responseCode: 200
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
                  shape: 'S14'
                }
              }
            }
          },
          ListTestRecommendations: {
            http: {
              requestUri: '/list-test-recommendations',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['assessmentArn'],
              members: {
                assessmentArn: {},
                maxResults: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              required: ['testRecommendations'],
              members: {
                nextToken: {},
                testRecommendations: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['referenceId'],
                    members: {
                      appComponentName: {},
                      dependsOnAlarms: {
                        type: 'list',
                        member: {}
                      },
                      description: {},
                      intent: {},
                      items: {
                        shape: 'S4h'
                      },
                      name: {},
                      prerequisite: {},
                      recommendationId: {},
                      recommendationStatus: {},
                      referenceId: {},
                      risk: {},
                      type: {}
                    }
                  }
                }
              }
            }
          },
          ListUnsupportedAppVersionResources: {
            http: {
              requestUri: '/list-unsupported-app-version-resources',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['appArn', 'appVersion'],
              members: {
                appArn: {},
                appVersion: {},
                maxResults: {
                  type: 'integer'
                },
                nextToken: {},
                resolutionId: {}
              }
            },
            output: {
              type: 'structure',
              required: ['resolutionId', 'unsupportedResources'],
              members: {
                nextToken: {},
                resolutionId: {},
                unsupportedResources: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['logicalResourceId', 'physicalResourceId', 'resourceType'],
                    members: {
                      logicalResourceId: {
                        shape: 'S1o'
                      },
                      physicalResourceId: {
                        shape: 'S8'
                      },
                      resourceType: {},
                      unsupportedResourceStatus: {}
                    }
                  }
                }
              }
            }
          },
          PublishAppVersion: {
            http: {
              requestUri: '/publish-app-version',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['appArn'],
              members: {
                appArn: {},
                versionName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['appArn'],
              members: {
                appArn: {},
                appVersion: {},
                identifier: {
                  type: 'long'
                },
                versionName: {}
              }
            }
          },
          PutDraftAppVersionTemplate: {
            http: {
              requestUri: '/put-draft-app-version-template',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['appArn', 'appTemplateBody'],
              members: {
                appArn: {},
                appTemplateBody: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                appArn: {},
                appVersion: {}
              }
            }
          },
          RemoveDraftAppVersionResourceMappings: {
            http: {
              requestUri: '/remove-draft-app-version-resource-mappings',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['appArn'],
              members: {
                appArn: {},
                appRegistryAppNames: {
                  shape: 'S6x'
                },
                eksSourceNames: {
                  shape: 'S6y'
                },
                logicalStackNames: {
                  shape: 'S6y'
                },
                resourceGroupNames: {
                  shape: 'S6x'
                },
                resourceNames: {
                  shape: 'S6x'
                },
                terraformSourceNames: {
                  shape: 'S6y'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                appArn: {},
                appVersion: {}
              }
            }
          },
          ResolveAppVersionResources: {
            http: {
              requestUri: '/resolve-app-version-resources',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['appArn', 'appVersion'],
              members: {
                appArn: {},
                appVersion: {}
              }
            },
            output: {
              type: 'structure',
              required: ['appArn', 'appVersion', 'resolutionId', 'status'],
              members: {
                appArn: {},
                appVersion: {},
                resolutionId: {},
                status: {}
              }
            }
          },
          StartAppAssessment: {
            http: {
              requestUri: '/start-app-assessment',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['appArn', 'appVersion', 'assessmentName'],
              members: {
                appArn: {},
                appVersion: {},
                assessmentName: {},
                clientToken: {
                  idempotencyToken: true
                },
                tags: {
                  shape: 'S14'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['assessment'],
              members: {
                assessment: {
                  shape: 'S33'
                }
              }
            }
          },
          TagResource: {
            http: {
              requestUri: '/tags/{resourceArn}',
              responseCode: 200
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
                  shape: 'S14'
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
              requestUri: '/tags/{resourceArn}',
              responseCode: 200
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
                  member: {},
                  sensitive: true
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
              requestUri: '/update-app',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['appArn'],
              members: {
                appArn: {},
                assessmentSchedule: {},
                clearResiliencyPolicyArn: {
                  type: 'boolean'
                },
                description: {},
                eventSubscriptions: {
                  shape: 'Sw'
                },
                permissionModel: {
                  shape: 'Sz'
                },
                policyArn: {}
              }
            },
            output: {
              type: 'structure',
              required: ['app'],
              members: {
                app: {
                  shape: 'S18'
                }
              }
            }
          },
          UpdateAppVersion: {
            http: {
              requestUri: '/update-app-version',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['appArn'],
              members: {
                additionalInfo: {
                  shape: 'S1g'
                },
                appArn: {}
              }
            },
            output: {
              type: 'structure',
              required: ['appArn', 'appVersion'],
              members: {
                additionalInfo: {
                  shape: 'S1g'
                },
                appArn: {},
                appVersion: {}
              }
            }
          },
          UpdateAppVersionAppComponent: {
            http: {
              requestUri: '/update-app-version-app-component',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['appArn', 'id'],
              members: {
                additionalInfo: {
                  shape: 'S1g'
                },
                appArn: {},
                id: {},
                name: {},
                type: {}
              }
            },
            output: {
              type: 'structure',
              required: ['appArn', 'appVersion'],
              members: {
                appArn: {},
                appComponent: {
                  shape: 'S1l'
                },
                appVersion: {}
              }
            }
          },
          UpdateAppVersionResource: {
            http: {
              requestUri: '/update-app-version-resource',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['appArn'],
              members: {
                additionalInfo: {
                  shape: 'S1g'
                },
                appArn: {},
                appComponents: {
                  shape: 'S1n'
                },
                awsAccountId: {},
                awsRegion: {},
                excluded: {
                  type: 'boolean'
                },
                logicalResourceId: {
                  shape: 'S1o'
                },
                physicalResourceId: {},
                resourceName: {},
                resourceType: {}
              }
            },
            output: {
              type: 'structure',
              required: ['appArn', 'appVersion'],
              members: {
                appArn: {},
                appVersion: {},
                physicalResource: {
                  shape: 'S1r'
                }
              }
            }
          },
          UpdateResiliencyPolicy: {
            http: {
              requestUri: '/update-resiliency-policy',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['policyArn'],
              members: {
                dataLocationConstraint: {},
                policy: {
                  shape: 'S26'
                },
                policyArn: {},
                policyDescription: {},
                policyName: {},
                tier: {}
              }
            },
            output: {
              type: 'structure',
              required: ['policy'],
              members: {
                policy: {
                  shape: 'S2c'
                }
              }
            }
          }
        },
        shapes: {
          S3: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['mappingType', 'physicalResourceId'],
              members: {
                appRegistryAppName: {},
                eksSourceName: {},
                logicalStackName: {},
                mappingType: {},
                physicalResourceId: {
                  shape: 'S8'
                },
                resourceGroupName: {},
                resourceName: {},
                terraformSourceName: {}
              }
            }
          },
          S8: {
            type: 'structure',
            required: ['identifier', 'type'],
            members: {
              awsAccountId: {},
              awsRegion: {},
              identifier: {},
              type: {}
            }
          },
          Sj: {
            type: 'structure',
            members: {
              resourceId: {},
              targetAccountId: {},
              targetRegion: {}
            }
          },
          Sw: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['eventType', 'name'],
              members: {
                eventType: {},
                name: {},
                snsTopicArn: {}
              }
            }
          },
          Sz: {
            type: 'structure',
            required: ['type'],
            members: {
              crossAccountRoleArns: {
                type: 'list',
                member: {}
              },
              invokerRoleName: {},
              type: {}
            }
          },
          S14: {
            type: 'map',
            key: {},
            value: {},
            sensitive: true
          },
          S18: {
            type: 'structure',
            required: ['appArn', 'creationTime', 'name'],
            members: {
              appArn: {},
              assessmentSchedule: {},
              complianceStatus: {},
              creationTime: {
                type: 'timestamp'
              },
              description: {},
              driftStatus: {},
              eventSubscriptions: {
                shape: 'Sw'
              },
              lastAppComplianceEvaluationTime: {
                type: 'timestamp'
              },
              lastDriftEvaluationTime: {
                type: 'timestamp'
              },
              lastResiliencyScoreEvaluationTime: {
                type: 'timestamp'
              },
              name: {},
              permissionModel: {
                shape: 'Sz'
              },
              policyArn: {},
              resiliencyScore: {
                type: 'double'
              },
              rpoInSecs: {
                type: 'integer'
              },
              rtoInSecs: {
                type: 'integer'
              },
              status: {},
              tags: {
                shape: 'S14'
              }
            }
          },
          S1g: {
            type: 'map',
            key: {},
            value: {
              type: 'list',
              member: {}
            }
          },
          S1l: {
            type: 'structure',
            required: ['name', 'type'],
            members: {
              additionalInfo: {
                shape: 'S1g'
              },
              id: {},
              name: {},
              type: {}
            }
          },
          S1n: {
            type: 'list',
            member: {}
          },
          S1o: {
            type: 'structure',
            required: ['identifier'],
            members: {
              eksSourceName: {},
              identifier: {},
              logicalStackName: {},
              resourceGroupName: {},
              terraformSourceName: {}
            }
          },
          S1r: {
            type: 'structure',
            required: ['logicalResourceId', 'physicalResourceId', 'resourceType'],
            members: {
              additionalInfo: {
                shape: 'S1g'
              },
              appComponents: {
                shape: 'S1s'
              },
              excluded: {
                type: 'boolean'
              },
              logicalResourceId: {
                shape: 'S1o'
              },
              parentResourceName: {},
              physicalResourceId: {
                shape: 'S8'
              },
              resourceName: {},
              resourceType: {},
              sourceType: {}
            }
          },
          S1s: {
            type: 'list',
            member: {
              shape: 'S1l'
            }
          },
          S1w: {
            type: 'list',
            member: {}
          },
          S1y: {
            type: 'list',
            member: {}
          },
          S21: {
            type: 'structure',
            required: ['assessmentArn', 'format', 'name', 'recommendationTemplateArn', 'recommendationTypes', 'status'],
            members: {
              appArn: {},
              assessmentArn: {},
              endTime: {
                type: 'timestamp'
              },
              format: {},
              message: {},
              name: {},
              needsReplacements: {
                type: 'boolean'
              },
              recommendationIds: {
                shape: 'S1w'
              },
              recommendationTemplateArn: {},
              recommendationTypes: {
                shape: 'S1y'
              },
              startTime: {
                type: 'timestamp'
              },
              status: {},
              tags: {
                shape: 'S14'
              },
              templatesLocation: {
                type: 'structure',
                members: {
                  bucket: {},
                  prefix: {}
                }
              }
            }
          },
          S26: {
            type: 'map',
            key: {},
            value: {
              type: 'structure',
              required: ['rpoInSecs', 'rtoInSecs'],
              members: {
                rpoInSecs: {
                  type: 'integer'
                },
                rtoInSecs: {
                  type: 'integer'
                }
              }
            }
          },
          S2c: {
            type: 'structure',
            members: {
              creationTime: {
                type: 'timestamp'
              },
              dataLocationConstraint: {},
              estimatedCostTier: {},
              policy: {
                shape: 'S26'
              },
              policyArn: {},
              policyDescription: {},
              policyName: {},
              tags: {
                shape: 'S14'
              },
              tier: {}
            }
          },
          S2k: {
            type: 'structure',
            required: ['eksClusterArn', 'namespace'],
            members: {
              eksClusterArn: {},
              namespace: {}
            }
          },
          S2m: {
            type: 'structure',
            required: ['s3StateFileUrl'],
            members: {
              s3StateFileUrl: {}
            }
          },
          S2p: {
            type: 'structure',
            required: ['importType'],
            members: {
              eksSourceClusterNamespace: {
                shape: 'S2k'
              },
              importType: {},
              resourceCount: {
                type: 'integer'
              },
              sourceArn: {},
              sourceName: {},
              terraformSource: {
                shape: 'S2m'
              }
            }
          },
          S33: {
            type: 'structure',
            required: ['assessmentArn', 'assessmentStatus', 'invoker'],
            members: {
              appArn: {},
              appVersion: {},
              assessmentArn: {},
              assessmentName: {},
              assessmentStatus: {},
              compliance: {
                shape: 'S34'
              },
              complianceStatus: {},
              cost: {
                shape: 'S37'
              },
              driftStatus: {},
              endTime: {
                type: 'timestamp'
              },
              invoker: {},
              message: {},
              policy: {
                shape: 'S2c'
              },
              resiliencyScore: {
                shape: 'S3c'
              },
              resourceErrorsDetails: {
                type: 'structure',
                members: {
                  hasMoreErrors: {
                    type: 'boolean'
                  },
                  resourceErrors: {
                    type: 'list',
                    member: {
                      type: 'structure',
                      members: {
                        logicalResourceId: {},
                        physicalResourceId: {},
                        reason: {}
                      }
                    }
                  }
                }
              },
              startTime: {
                type: 'timestamp'
              },
              tags: {
                shape: 'S14'
              },
              versionName: {}
            }
          },
          S34: {
            type: 'map',
            key: {},
            value: {
              type: 'structure',
              required: ['complianceStatus'],
              members: {
                achievableRpoInSecs: {
                  type: 'integer'
                },
                achievableRtoInSecs: {
                  type: 'integer'
                },
                complianceStatus: {},
                currentRpoInSecs: {
                  type: 'integer'
                },
                currentRtoInSecs: {
                  type: 'integer'
                },
                message: {},
                rpoDescription: {},
                rpoReferenceId: {},
                rtoDescription: {},
                rtoReferenceId: {}
              }
            }
          },
          S37: {
            type: 'structure',
            required: ['amount', 'currency', 'frequency'],
            members: {
              amount: {
                type: 'double'
              },
              currency: {},
              frequency: {}
            }
          },
          S3c: {
            type: 'structure',
            required: ['disruptionScore', 'score'],
            members: {
              componentScore: {
                type: 'map',
                key: {},
                value: {
                  type: 'structure',
                  members: {
                    excludedCount: {
                      type: 'long'
                    },
                    outstandingCount: {
                      type: 'long'
                    },
                    possibleScore: {
                      type: 'double'
                    },
                    score: {
                      type: 'double'
                    }
                  }
                }
              },
              disruptionScore: {
                type: 'map',
                key: {},
                value: {
                  type: 'double'
                }
              },
              score: {
                type: 'double'
              }
            }
          },
          S43: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['eksClusterArn', 'namespaces'],
              members: {
                eksClusterArn: {},
                namespaces: {
                  type: 'list',
                  member: {}
                }
              }
            }
          },
          S47: {
            type: 'list',
            member: {}
          },
          S48: {
            type: 'list',
            member: {
              shape: 'S2m'
            }
          },
          S4h: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                alreadyImplemented: {
                  type: 'boolean'
                },
                excludeReason: {},
                excluded: {
                  type: 'boolean'
                },
                resourceId: {},
                targetAccountId: {},
                targetRegion: {}
              }
            }
          },
          S66: {
            type: 'list',
            member: {
              shape: 'S2c'
            }
          },
          S6x: {
            type: 'list',
            member: {}
          },
          S6y: {
            type: 'list',
            member: {}
          }
        }
      });
    }
  };
});
//# sourceMappingURL=93d04a079089911f456a003676ebe9dfe444ebd0.js.map