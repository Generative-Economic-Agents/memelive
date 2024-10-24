System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2022-09-15',
          endpointPrefix: 'trustedadvisor',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceFullName: 'TrustedAdvisor Public API',
          serviceId: 'TrustedAdvisor',
          signatureVersion: 'v4',
          signingName: 'trustedadvisor',
          uid: 'trustedadvisor-2022-09-15'
        },
        operations: {
          BatchUpdateRecommendationResourceExclusion: {
            http: {
              method: 'PUT',
              requestUri: '/v1/batch-update-recommendation-resource-exclusion',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['recommendationResourceExclusions'],
              members: {
                recommendationResourceExclusions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['arn', 'isExcluded'],
                    members: {
                      arn: {},
                      isExcluded: {
                        type: 'boolean'
                      }
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              required: ['batchUpdateRecommendationResourceExclusionErrors'],
              members: {
                batchUpdateRecommendationResourceExclusionErrors: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      arn: {},
                      errorCode: {},
                      errorMessage: {}
                    }
                  }
                }
              }
            },
            idempotent: true
          },
          GetOrganizationRecommendation: {
            http: {
              method: 'GET',
              requestUri: '/v1/organization-recommendations/{organizationRecommendationIdentifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['organizationRecommendationIdentifier'],
              members: {
                organizationRecommendationIdentifier: {
                  location: 'uri',
                  locationName: 'organizationRecommendationIdentifier'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                organizationRecommendation: {
                  type: 'structure',
                  required: ['arn', 'description', 'id', 'name', 'pillars', 'resourcesAggregates', 'source', 'status', 'type'],
                  members: {
                    arn: {},
                    awsServices: {
                      shape: 'Sf'
                    },
                    checkArn: {},
                    createdAt: {
                      shape: 'Sh'
                    },
                    createdBy: {},
                    description: {},
                    id: {},
                    lastUpdatedAt: {
                      shape: 'Sh'
                    },
                    lifecycleStage: {},
                    name: {},
                    pillarSpecificAggregates: {
                      shape: 'Sj'
                    },
                    pillars: {
                      shape: 'Sm'
                    },
                    resolvedAt: {
                      shape: 'Sh'
                    },
                    resourcesAggregates: {
                      shape: 'So'
                    },
                    source: {},
                    status: {},
                    type: {},
                    updateReason: {
                      shape: 'St'
                    },
                    updateReasonCode: {},
                    updatedOnBehalfOf: {},
                    updatedOnBehalfOfJobTitle: {}
                  }
                }
              }
            }
          },
          GetRecommendation: {
            http: {
              method: 'GET',
              requestUri: '/v1/recommendations/{recommendationIdentifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['recommendationIdentifier'],
              members: {
                recommendationIdentifier: {
                  location: 'uri',
                  locationName: 'recommendationIdentifier'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                recommendation: {
                  type: 'structure',
                  required: ['arn', 'description', 'id', 'name', 'pillars', 'resourcesAggregates', 'source', 'status', 'type'],
                  members: {
                    arn: {},
                    awsServices: {
                      shape: 'Sf'
                    },
                    checkArn: {},
                    createdAt: {
                      shape: 'Sh'
                    },
                    createdBy: {},
                    description: {},
                    id: {},
                    lastUpdatedAt: {
                      shape: 'Sh'
                    },
                    lifecycleStage: {},
                    name: {},
                    pillarSpecificAggregates: {
                      shape: 'Sj'
                    },
                    pillars: {
                      shape: 'Sm'
                    },
                    resolvedAt: {
                      shape: 'Sh'
                    },
                    resourcesAggregates: {
                      shape: 'So'
                    },
                    source: {},
                    status: {},
                    type: {},
                    updateReason: {
                      shape: 'St'
                    },
                    updateReasonCode: {},
                    updatedOnBehalfOf: {},
                    updatedOnBehalfOfJobTitle: {}
                  }
                }
              }
            }
          },
          ListChecks: {
            http: {
              method: 'GET',
              requestUri: '/v1/checks',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                awsService: {
                  location: 'querystring',
                  locationName: 'awsService'
                },
                language: {
                  location: 'querystring',
                  locationName: 'language'
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
                pillar: {
                  location: 'querystring',
                  locationName: 'pillar'
                },
                source: {
                  location: 'querystring',
                  locationName: 'source'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['checkSummaries'],
              members: {
                checkSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['arn', 'awsServices', 'description', 'id', 'metadata', 'name', 'pillars', 'source'],
                    members: {
                      arn: {},
                      awsServices: {
                        shape: 'Sf'
                      },
                      description: {},
                      id: {},
                      metadata: {
                        shape: 'S18'
                      },
                      name: {},
                      pillars: {
                        shape: 'Sm'
                      },
                      source: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListOrganizationRecommendationAccounts: {
            http: {
              method: 'GET',
              requestUri: '/v1/organization-recommendations/{organizationRecommendationIdentifier}/accounts',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['organizationRecommendationIdentifier'],
              members: {
                affectedAccountId: {
                  location: 'querystring',
                  locationName: 'affectedAccountId'
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
                organizationRecommendationIdentifier: {
                  location: 'uri',
                  locationName: 'organizationRecommendationIdentifier'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['accountRecommendationLifecycleSummaries'],
              members: {
                accountRecommendationLifecycleSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      accountId: {},
                      accountRecommendationArn: {},
                      lastUpdatedAt: {
                        shape: 'Sh'
                      },
                      lifecycleStage: {},
                      updateReason: {
                        shape: 'St'
                      },
                      updateReasonCode: {},
                      updatedOnBehalfOf: {},
                      updatedOnBehalfOfJobTitle: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListOrganizationRecommendationResources: {
            http: {
              method: 'GET',
              requestUri: '/v1/organization-recommendations/{organizationRecommendationIdentifier}/resources',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['organizationRecommendationIdentifier'],
              members: {
                affectedAccountId: {
                  location: 'querystring',
                  locationName: 'affectedAccountId'
                },
                exclusionStatus: {
                  location: 'querystring',
                  locationName: 'exclusionStatus'
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
                organizationRecommendationIdentifier: {
                  location: 'uri',
                  locationName: 'organizationRecommendationIdentifier'
                },
                regionCode: {
                  location: 'querystring',
                  locationName: 'regionCode'
                },
                status: {
                  location: 'querystring',
                  locationName: 'status'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['organizationRecommendationResourceSummaries'],
              members: {
                nextToken: {},
                organizationRecommendationResourceSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['arn', 'awsResourceId', 'id', 'lastUpdatedAt', 'metadata', 'recommendationArn', 'regionCode', 'status'],
                    members: {
                      accountId: {},
                      arn: {},
                      awsResourceId: {},
                      exclusionStatus: {},
                      id: {},
                      lastUpdatedAt: {
                        shape: 'Sh'
                      },
                      metadata: {
                        shape: 'S18'
                      },
                      recommendationArn: {},
                      regionCode: {},
                      status: {}
                    }
                  }
                }
              }
            }
          },
          ListOrganizationRecommendations: {
            http: {
              method: 'GET',
              requestUri: '/v1/organization-recommendations',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                afterLastUpdatedAt: {
                  location: 'querystring',
                  locationName: 'afterLastUpdatedAt',
                  type: 'timestamp'
                },
                awsService: {
                  location: 'querystring',
                  locationName: 'awsService'
                },
                beforeLastUpdatedAt: {
                  location: 'querystring',
                  locationName: 'beforeLastUpdatedAt',
                  type: 'timestamp'
                },
                checkIdentifier: {
                  location: 'querystring',
                  locationName: 'checkIdentifier'
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
                pillar: {
                  location: 'querystring',
                  locationName: 'pillar'
                },
                source: {
                  location: 'querystring',
                  locationName: 'source'
                },
                status: {
                  location: 'querystring',
                  locationName: 'status'
                },
                type: {
                  location: 'querystring',
                  locationName: 'type'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['organizationRecommendationSummaries'],
              members: {
                nextToken: {},
                organizationRecommendationSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['arn', 'id', 'name', 'pillars', 'resourcesAggregates', 'source', 'status', 'type'],
                    members: {
                      arn: {},
                      awsServices: {
                        shape: 'Sf'
                      },
                      checkArn: {},
                      createdAt: {
                        shape: 'Sh'
                      },
                      id: {},
                      lastUpdatedAt: {
                        shape: 'Sh'
                      },
                      lifecycleStage: {},
                      name: {},
                      pillarSpecificAggregates: {
                        shape: 'Sj'
                      },
                      pillars: {
                        shape: 'Sm'
                      },
                      resourcesAggregates: {
                        shape: 'So'
                      },
                      source: {},
                      status: {},
                      type: {}
                    }
                  }
                }
              }
            }
          },
          ListRecommendationResources: {
            http: {
              method: 'GET',
              requestUri: '/v1/recommendations/{recommendationIdentifier}/resources',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['recommendationIdentifier'],
              members: {
                exclusionStatus: {
                  location: 'querystring',
                  locationName: 'exclusionStatus'
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
                recommendationIdentifier: {
                  location: 'uri',
                  locationName: 'recommendationIdentifier'
                },
                regionCode: {
                  location: 'querystring',
                  locationName: 'regionCode'
                },
                status: {
                  location: 'querystring',
                  locationName: 'status'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['recommendationResourceSummaries'],
              members: {
                nextToken: {},
                recommendationResourceSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['arn', 'awsResourceId', 'id', 'lastUpdatedAt', 'metadata', 'recommendationArn', 'regionCode', 'status'],
                    members: {
                      arn: {},
                      awsResourceId: {},
                      exclusionStatus: {},
                      id: {},
                      lastUpdatedAt: {
                        shape: 'Sh'
                      },
                      metadata: {
                        shape: 'S18'
                      },
                      recommendationArn: {},
                      regionCode: {},
                      status: {}
                    }
                  }
                }
              }
            }
          },
          ListRecommendations: {
            http: {
              method: 'GET',
              requestUri: '/v1/recommendations',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                afterLastUpdatedAt: {
                  location: 'querystring',
                  locationName: 'afterLastUpdatedAt',
                  type: 'timestamp'
                },
                awsService: {
                  location: 'querystring',
                  locationName: 'awsService'
                },
                beforeLastUpdatedAt: {
                  location: 'querystring',
                  locationName: 'beforeLastUpdatedAt',
                  type: 'timestamp'
                },
                checkIdentifier: {
                  location: 'querystring',
                  locationName: 'checkIdentifier'
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
                pillar: {
                  location: 'querystring',
                  locationName: 'pillar'
                },
                source: {
                  location: 'querystring',
                  locationName: 'source'
                },
                status: {
                  location: 'querystring',
                  locationName: 'status'
                },
                type: {
                  location: 'querystring',
                  locationName: 'type'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['recommendationSummaries'],
              members: {
                nextToken: {},
                recommendationSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['arn', 'id', 'name', 'pillars', 'resourcesAggregates', 'source', 'status', 'type'],
                    members: {
                      arn: {},
                      awsServices: {
                        shape: 'Sf'
                      },
                      checkArn: {},
                      createdAt: {
                        shape: 'Sh'
                      },
                      id: {},
                      lastUpdatedAt: {
                        shape: 'Sh'
                      },
                      lifecycleStage: {},
                      name: {},
                      pillarSpecificAggregates: {
                        shape: 'Sj'
                      },
                      pillars: {
                        shape: 'Sm'
                      },
                      resourcesAggregates: {
                        shape: 'So'
                      },
                      source: {},
                      status: {},
                      type: {}
                    }
                  }
                }
              }
            }
          },
          UpdateOrganizationRecommendationLifecycle: {
            http: {
              method: 'PUT',
              requestUri: '/v1/organization-recommendations/{organizationRecommendationIdentifier}/lifecycle',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['lifecycleStage', 'organizationRecommendationIdentifier'],
              members: {
                lifecycleStage: {},
                organizationRecommendationIdentifier: {
                  location: 'uri',
                  locationName: 'organizationRecommendationIdentifier'
                },
                updateReason: {
                  shape: 'St'
                },
                updateReasonCode: {}
              }
            },
            idempotent: true
          },
          UpdateRecommendationLifecycle: {
            http: {
              method: 'PUT',
              requestUri: '/v1/recommendations/{recommendationIdentifier}/lifecycle',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['lifecycleStage', 'recommendationIdentifier'],
              members: {
                lifecycleStage: {},
                recommendationIdentifier: {
                  location: 'uri',
                  locationName: 'recommendationIdentifier'
                },
                updateReason: {
                  shape: 'St'
                },
                updateReasonCode: {}
              }
            },
            idempotent: true
          }
        },
        shapes: {
          Sf: {
            type: 'list',
            member: {}
          },
          Sh: {
            type: 'timestamp',
            timestampFormat: 'iso8601'
          },
          Sj: {
            type: 'structure',
            members: {
              costOptimizing: {
                type: 'structure',
                required: ['estimatedMonthlySavings', 'estimatedPercentMonthlySavings'],
                members: {
                  estimatedMonthlySavings: {
                    type: 'double'
                  },
                  estimatedPercentMonthlySavings: {
                    type: 'double'
                  }
                }
              }
            }
          },
          Sm: {
            type: 'list',
            member: {}
          },
          So: {
            type: 'structure',
            required: ['errorCount', 'okCount', 'warningCount'],
            members: {
              errorCount: {
                type: 'long'
              },
              okCount: {
                type: 'long'
              },
              warningCount: {
                type: 'long'
              }
            }
          },
          St: {
            type: 'string',
            sensitive: true
          },
          S18: {
            type: 'map',
            key: {},
            value: {}
          }
        }
      });
    }
  };
});
//# sourceMappingURL=fe0b31ac54befd8c9e38b74849da904eada10a42.js.map