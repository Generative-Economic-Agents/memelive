System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2019-12-02',
          endpointPrefix: 'iotsitewise',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceFullName: 'AWS IoT SiteWise',
          serviceId: 'IoTSiteWise',
          signatureVersion: 'v4',
          signingName: 'iotsitewise',
          uid: 'iotsitewise-2019-12-02'
        },
        operations: {
          AssociateAssets: {
            http: {
              requestUri: '/assets/{assetId}/associate'
            },
            input: {
              type: 'structure',
              required: ['assetId', 'hierarchyId', 'childAssetId'],
              members: {
                assetId: {
                  location: 'uri',
                  locationName: 'assetId'
                },
                hierarchyId: {},
                childAssetId: {},
                clientToken: {
                  idempotencyToken: true
                }
              }
            },
            endpoint: {
              hostPrefix: 'api.'
            }
          },
          AssociateTimeSeriesToAssetProperty: {
            http: {
              requestUri: '/timeseries/associate/'
            },
            input: {
              type: 'structure',
              required: ['alias', 'assetId', 'propertyId'],
              members: {
                alias: {
                  location: 'querystring',
                  locationName: 'alias'
                },
                assetId: {
                  location: 'querystring',
                  locationName: 'assetId'
                },
                propertyId: {
                  location: 'querystring',
                  locationName: 'propertyId'
                },
                clientToken: {
                  idempotencyToken: true
                }
              }
            },
            endpoint: {
              hostPrefix: 'api.'
            }
          },
          BatchAssociateProjectAssets: {
            http: {
              requestUri: '/projects/{projectId}/assets/associate',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['projectId', 'assetIds'],
              members: {
                projectId: {
                  location: 'uri',
                  locationName: 'projectId'
                },
                assetIds: {
                  shape: 'S8'
                },
                clientToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                errors: {
                  type: 'list',
                  member: {
                    shape: 'Sb'
                  }
                }
              }
            },
            endpoint: {
              hostPrefix: 'monitor.'
            }
          },
          BatchDisassociateProjectAssets: {
            http: {
              requestUri: '/projects/{projectId}/assets/disassociate',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['projectId', 'assetIds'],
              members: {
                projectId: {
                  location: 'uri',
                  locationName: 'projectId'
                },
                assetIds: {
                  shape: 'S8'
                },
                clientToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                errors: {
                  type: 'list',
                  member: {
                    shape: 'Sb'
                  }
                }
              }
            },
            endpoint: {
              hostPrefix: 'monitor.'
            }
          },
          BatchGetAssetPropertyAggregates: {
            http: {
              requestUri: '/properties/batch/aggregates'
            },
            input: {
              type: 'structure',
              required: ['entries'],
              members: {
                entries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['entryId', 'aggregateTypes', 'resolution', 'startDate', 'endDate'],
                    members: {
                      entryId: {},
                      assetId: {},
                      propertyId: {},
                      propertyAlias: {},
                      aggregateTypes: {
                        shape: 'Sm'
                      },
                      resolution: {},
                      startDate: {
                        type: 'timestamp'
                      },
                      endDate: {
                        type: 'timestamp'
                      },
                      qualities: {
                        shape: 'Sq'
                      },
                      timeOrdering: {}
                    }
                  }
                },
                nextToken: {},
                maxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['errorEntries', 'successEntries', 'skippedEntries'],
              members: {
                errorEntries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['errorCode', 'errorMessage', 'entryId'],
                    members: {
                      errorCode: {},
                      errorMessage: {},
                      entryId: {}
                    }
                  }
                },
                successEntries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['entryId', 'aggregatedValues'],
                    members: {
                      entryId: {},
                      aggregatedValues: {
                        shape: 'S12'
                      }
                    }
                  }
                },
                skippedEntries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['entryId', 'completionStatus'],
                    members: {
                      entryId: {},
                      completionStatus: {},
                      errorInfo: {
                        type: 'structure',
                        required: ['errorCode', 'errorTimestamp'],
                        members: {
                          errorCode: {},
                          errorTimestamp: {
                            type: 'timestamp'
                          }
                        }
                      }
                    }
                  }
                },
                nextToken: {}
              }
            },
            endpoint: {
              hostPrefix: 'data.'
            }
          },
          BatchGetAssetPropertyValue: {
            http: {
              requestUri: '/properties/batch/latest'
            },
            input: {
              type: 'structure',
              required: ['entries'],
              members: {
                entries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['entryId'],
                    members: {
                      entryId: {},
                      assetId: {},
                      propertyId: {},
                      propertyAlias: {}
                    }
                  }
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              required: ['errorEntries', 'successEntries', 'skippedEntries'],
              members: {
                errorEntries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['errorCode', 'errorMessage', 'entryId'],
                    members: {
                      errorCode: {},
                      errorMessage: {},
                      entryId: {}
                    }
                  }
                },
                successEntries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['entryId'],
                    members: {
                      entryId: {},
                      assetPropertyValue: {
                        shape: 'S1j'
                      }
                    }
                  }
                },
                skippedEntries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['entryId', 'completionStatus'],
                    members: {
                      entryId: {},
                      completionStatus: {},
                      errorInfo: {
                        type: 'structure',
                        required: ['errorCode', 'errorTimestamp'],
                        members: {
                          errorCode: {},
                          errorTimestamp: {
                            type: 'timestamp'
                          }
                        }
                      }
                    }
                  }
                },
                nextToken: {}
              }
            },
            endpoint: {
              hostPrefix: 'data.'
            }
          },
          BatchGetAssetPropertyValueHistory: {
            http: {
              requestUri: '/properties/batch/history'
            },
            input: {
              type: 'structure',
              required: ['entries'],
              members: {
                entries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['entryId'],
                    members: {
                      entryId: {},
                      assetId: {},
                      propertyId: {},
                      propertyAlias: {},
                      startDate: {
                        type: 'timestamp'
                      },
                      endDate: {
                        type: 'timestamp'
                      },
                      qualities: {
                        shape: 'Sq'
                      },
                      timeOrdering: {}
                    }
                  }
                },
                nextToken: {},
                maxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['errorEntries', 'successEntries', 'skippedEntries'],
              members: {
                errorEntries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['errorCode', 'errorMessage', 'entryId'],
                    members: {
                      errorCode: {},
                      errorMessage: {},
                      entryId: {}
                    }
                  }
                },
                successEntries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['entryId', 'assetPropertyValueHistory'],
                    members: {
                      entryId: {},
                      assetPropertyValueHistory: {
                        shape: 'S25'
                      }
                    }
                  }
                },
                skippedEntries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['entryId', 'completionStatus'],
                    members: {
                      entryId: {},
                      completionStatus: {},
                      errorInfo: {
                        type: 'structure',
                        required: ['errorCode', 'errorTimestamp'],
                        members: {
                          errorCode: {},
                          errorTimestamp: {
                            type: 'timestamp'
                          }
                        }
                      }
                    }
                  }
                },
                nextToken: {}
              }
            },
            endpoint: {
              hostPrefix: 'data.'
            }
          },
          BatchPutAssetPropertyValue: {
            http: {
              requestUri: '/properties'
            },
            input: {
              type: 'structure',
              required: ['entries'],
              members: {
                entries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['entryId', 'propertyValues'],
                    members: {
                      entryId: {},
                      assetId: {},
                      propertyId: {},
                      propertyAlias: {},
                      propertyValues: {
                        type: 'list',
                        member: {
                          shape: 'S1j'
                        }
                      }
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              required: ['errorEntries'],
              members: {
                errorEntries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['entryId', 'errors'],
                    members: {
                      entryId: {},
                      errors: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          required: ['errorCode', 'errorMessage', 'timestamps'],
                          members: {
                            errorCode: {},
                            errorMessage: {},
                            timestamps: {
                              type: 'list',
                              member: {
                                shape: 'S1p'
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            endpoint: {
              hostPrefix: 'data.'
            }
          },
          CreateAccessPolicy: {
            http: {
              requestUri: '/access-policies',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['accessPolicyIdentity', 'accessPolicyResource', 'accessPolicyPermission'],
              members: {
                accessPolicyIdentity: {
                  shape: 'S2l'
                },
                accessPolicyResource: {
                  shape: 'S2s'
                },
                accessPolicyPermission: {},
                clientToken: {
                  idempotencyToken: true
                },
                tags: {
                  shape: 'S2w'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['accessPolicyId', 'accessPolicyArn'],
              members: {
                accessPolicyId: {},
                accessPolicyArn: {}
              }
            },
            endpoint: {
              hostPrefix: 'monitor.'
            }
          },
          CreateAsset: {
            http: {
              requestUri: '/assets',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['assetName', 'assetModelId'],
              members: {
                assetName: {},
                assetModelId: {},
                clientToken: {
                  idempotencyToken: true
                },
                tags: {
                  shape: 'S2w'
                },
                assetDescription: {},
                assetId: {},
                assetExternalId: {}
              }
            },
            output: {
              type: 'structure',
              required: ['assetId', 'assetArn', 'assetStatus'],
              members: {
                assetId: {},
                assetArn: {},
                assetStatus: {
                  shape: 'S35'
                }
              }
            },
            endpoint: {
              hostPrefix: 'api.'
            }
          },
          CreateAssetModel: {
            http: {
              requestUri: '/asset-models',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['assetModelName'],
              members: {
                assetModelName: {},
                assetModelDescription: {},
                assetModelProperties: {
                  shape: 'S3e'
                },
                assetModelHierarchies: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['name', 'childAssetModelId'],
                    members: {
                      name: {},
                      childAssetModelId: {},
                      id: {},
                      externalId: {}
                    }
                  }
                },
                assetModelCompositeModels: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['name', 'type'],
                    members: {
                      name: {},
                      description: {},
                      type: {},
                      properties: {
                        shape: 'S3e'
                      },
                      id: {},
                      externalId: {}
                    }
                  }
                },
                clientToken: {
                  idempotencyToken: true
                },
                tags: {
                  shape: 'S2w'
                },
                assetModelId: {},
                assetModelExternalId: {},
                assetModelType: {}
              }
            },
            output: {
              type: 'structure',
              required: ['assetModelId', 'assetModelArn', 'assetModelStatus'],
              members: {
                assetModelId: {},
                assetModelArn: {},
                assetModelStatus: {
                  shape: 'S4c'
                }
              }
            },
            endpoint: {
              hostPrefix: 'api.'
            }
          },
          CreateAssetModelCompositeModel: {
            http: {
              requestUri: '/asset-models/{assetModelId}/composite-models',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['assetModelId', 'assetModelCompositeModelName', 'assetModelCompositeModelType'],
              members: {
                assetModelId: {
                  location: 'uri',
                  locationName: 'assetModelId'
                },
                parentAssetModelCompositeModelId: {},
                assetModelCompositeModelExternalId: {},
                assetModelCompositeModelId: {},
                assetModelCompositeModelDescription: {},
                assetModelCompositeModelName: {},
                assetModelCompositeModelType: {},
                clientToken: {
                  idempotencyToken: true
                },
                composedAssetModelId: {},
                assetModelCompositeModelProperties: {
                  shape: 'S3e'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['assetModelCompositeModelId', 'assetModelCompositeModelPath', 'assetModelStatus'],
              members: {
                assetModelCompositeModelId: {},
                assetModelCompositeModelPath: {
                  shape: 'S4g'
                },
                assetModelStatus: {
                  shape: 'S4c'
                }
              }
            },
            endpoint: {
              hostPrefix: 'api.'
            }
          },
          CreateBulkImportJob: {
            http: {
              requestUri: '/jobs',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['jobName', 'jobRoleArn', 'files', 'errorReportLocation', 'jobConfiguration'],
              members: {
                jobName: {},
                jobRoleArn: {},
                files: {
                  shape: 'S4j'
                },
                errorReportLocation: {
                  shape: 'S4n'
                },
                jobConfiguration: {
                  shape: 'S4o'
                },
                adaptiveIngestion: {
                  type: 'boolean'
                },
                deleteFilesAfterImport: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['jobId', 'jobName', 'jobStatus'],
              members: {
                jobId: {},
                jobName: {},
                jobStatus: {}
              }
            },
            endpoint: {
              hostPrefix: 'data.'
            }
          },
          CreateDashboard: {
            http: {
              requestUri: '/dashboards',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['projectId', 'dashboardName', 'dashboardDefinition'],
              members: {
                projectId: {},
                dashboardName: {},
                dashboardDescription: {},
                dashboardDefinition: {},
                clientToken: {
                  idempotencyToken: true
                },
                tags: {
                  shape: 'S2w'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['dashboardId', 'dashboardArn'],
              members: {
                dashboardId: {},
                dashboardArn: {}
              }
            },
            endpoint: {
              hostPrefix: 'monitor.'
            }
          },
          CreateGateway: {
            http: {
              requestUri: '/20200301/gateways',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['gatewayName', 'gatewayPlatform'],
              members: {
                gatewayName: {},
                gatewayPlatform: {
                  shape: 'S52'
                },
                tags: {
                  shape: 'S2w'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['gatewayId', 'gatewayArn'],
              members: {
                gatewayId: {},
                gatewayArn: {}
              }
            },
            endpoint: {
              hostPrefix: 'api.'
            }
          },
          CreatePortal: {
            http: {
              requestUri: '/portals',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['portalName', 'portalContactEmail', 'roleArn'],
              members: {
                portalName: {},
                portalDescription: {},
                portalContactEmail: {},
                clientToken: {
                  idempotencyToken: true
                },
                portalLogoImageFile: {
                  shape: 'S59'
                },
                roleArn: {},
                tags: {
                  shape: 'S2w'
                },
                portalAuthMode: {},
                notificationSenderEmail: {},
                alarms: {
                  shape: 'S5d'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['portalId', 'portalArn', 'portalStartUrl', 'portalStatus', 'ssoApplicationId'],
              members: {
                portalId: {},
                portalArn: {},
                portalStartUrl: {},
                portalStatus: {
                  shape: 'S5g'
                },
                ssoApplicationId: {}
              }
            },
            endpoint: {
              hostPrefix: 'monitor.'
            }
          },
          CreateProject: {
            http: {
              requestUri: '/projects',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['portalId', 'projectName'],
              members: {
                portalId: {},
                projectName: {},
                projectDescription: {},
                clientToken: {
                  idempotencyToken: true
                },
                tags: {
                  shape: 'S2w'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['projectId', 'projectArn'],
              members: {
                projectId: {},
                projectArn: {}
              }
            },
            endpoint: {
              hostPrefix: 'monitor.'
            }
          },
          DeleteAccessPolicy: {
            http: {
              method: 'DELETE',
              requestUri: '/access-policies/{accessPolicyId}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['accessPolicyId'],
              members: {
                accessPolicyId: {
                  location: 'uri',
                  locationName: 'accessPolicyId'
                },
                clientToken: {
                  idempotencyToken: true,
                  location: 'querystring',
                  locationName: 'clientToken'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            endpoint: {
              hostPrefix: 'monitor.'
            }
          },
          DeleteAsset: {
            http: {
              method: 'DELETE',
              requestUri: '/assets/{assetId}',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['assetId'],
              members: {
                assetId: {
                  location: 'uri',
                  locationName: 'assetId'
                },
                clientToken: {
                  idempotencyToken: true,
                  location: 'querystring',
                  locationName: 'clientToken'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['assetStatus'],
              members: {
                assetStatus: {
                  shape: 'S35'
                }
              }
            },
            endpoint: {
              hostPrefix: 'api.'
            }
          },
          DeleteAssetModel: {
            http: {
              method: 'DELETE',
              requestUri: '/asset-models/{assetModelId}',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['assetModelId'],
              members: {
                assetModelId: {
                  location: 'uri',
                  locationName: 'assetModelId'
                },
                clientToken: {
                  idempotencyToken: true,
                  location: 'querystring',
                  locationName: 'clientToken'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['assetModelStatus'],
              members: {
                assetModelStatus: {
                  shape: 'S4c'
                }
              }
            },
            endpoint: {
              hostPrefix: 'api.'
            }
          },
          DeleteAssetModelCompositeModel: {
            http: {
              method: 'DELETE',
              requestUri: '/asset-models/{assetModelId}/composite-models/{assetModelCompositeModelId}',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['assetModelId', 'assetModelCompositeModelId'],
              members: {
                assetModelId: {
                  location: 'uri',
                  locationName: 'assetModelId'
                },
                assetModelCompositeModelId: {
                  location: 'uri',
                  locationName: 'assetModelCompositeModelId'
                },
                clientToken: {
                  idempotencyToken: true,
                  location: 'querystring',
                  locationName: 'clientToken'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['assetModelStatus'],
              members: {
                assetModelStatus: {
                  shape: 'S4c'
                }
              }
            },
            endpoint: {
              hostPrefix: 'api.'
            }
          },
          DeleteDashboard: {
            http: {
              method: 'DELETE',
              requestUri: '/dashboards/{dashboardId}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['dashboardId'],
              members: {
                dashboardId: {
                  location: 'uri',
                  locationName: 'dashboardId'
                },
                clientToken: {
                  idempotencyToken: true,
                  location: 'querystring',
                  locationName: 'clientToken'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            endpoint: {
              hostPrefix: 'monitor.'
            }
          },
          DeleteGateway: {
            http: {
              method: 'DELETE',
              requestUri: '/20200301/gateways/{gatewayId}'
            },
            input: {
              type: 'structure',
              required: ['gatewayId'],
              members: {
                gatewayId: {
                  location: 'uri',
                  locationName: 'gatewayId'
                }
              }
            },
            endpoint: {
              hostPrefix: 'api.'
            }
          },
          DeletePortal: {
            http: {
              method: 'DELETE',
              requestUri: '/portals/{portalId}',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['portalId'],
              members: {
                portalId: {
                  location: 'uri',
                  locationName: 'portalId'
                },
                clientToken: {
                  idempotencyToken: true,
                  location: 'querystring',
                  locationName: 'clientToken'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['portalStatus'],
              members: {
                portalStatus: {
                  shape: 'S5g'
                }
              }
            },
            endpoint: {
              hostPrefix: 'monitor.'
            }
          },
          DeleteProject: {
            http: {
              method: 'DELETE',
              requestUri: '/projects/{projectId}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['projectId'],
              members: {
                projectId: {
                  location: 'uri',
                  locationName: 'projectId'
                },
                clientToken: {
                  idempotencyToken: true,
                  location: 'querystring',
                  locationName: 'clientToken'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            endpoint: {
              hostPrefix: 'monitor.'
            }
          },
          DeleteTimeSeries: {
            http: {
              requestUri: '/timeseries/delete/'
            },
            input: {
              type: 'structure',
              members: {
                alias: {
                  location: 'querystring',
                  locationName: 'alias'
                },
                assetId: {
                  location: 'querystring',
                  locationName: 'assetId'
                },
                propertyId: {
                  location: 'querystring',
                  locationName: 'propertyId'
                },
                clientToken: {
                  idempotencyToken: true
                }
              }
            },
            endpoint: {
              hostPrefix: 'api.'
            }
          },
          DescribeAccessPolicy: {
            http: {
              method: 'GET',
              requestUri: '/access-policies/{accessPolicyId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['accessPolicyId'],
              members: {
                accessPolicyId: {
                  location: 'uri',
                  locationName: 'accessPolicyId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['accessPolicyId', 'accessPolicyArn', 'accessPolicyIdentity', 'accessPolicyResource', 'accessPolicyPermission', 'accessPolicyCreationDate', 'accessPolicyLastUpdateDate'],
              members: {
                accessPolicyId: {},
                accessPolicyArn: {},
                accessPolicyIdentity: {
                  shape: 'S2l'
                },
                accessPolicyResource: {
                  shape: 'S2s'
                },
                accessPolicyPermission: {},
                accessPolicyCreationDate: {
                  type: 'timestamp'
                },
                accessPolicyLastUpdateDate: {
                  type: 'timestamp'
                }
              }
            },
            endpoint: {
              hostPrefix: 'monitor.'
            }
          },
          DescribeAction: {
            http: {
              method: 'GET',
              requestUri: '/actions/{actionId}'
            },
            input: {
              type: 'structure',
              required: ['actionId'],
              members: {
                actionId: {
                  location: 'uri',
                  locationName: 'actionId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['actionId', 'targetResource', 'actionDefinitionId', 'actionPayload', 'executionTime'],
              members: {
                actionId: {},
                targetResource: {
                  shape: 'S68'
                },
                actionDefinitionId: {},
                actionPayload: {
                  shape: 'S69'
                },
                executionTime: {
                  type: 'timestamp'
                }
              }
            },
            endpoint: {
              hostPrefix: 'api.'
            }
          },
          DescribeAsset: {
            http: {
              method: 'GET',
              requestUri: '/assets/{assetId}'
            },
            input: {
              type: 'structure',
              required: ['assetId'],
              members: {
                assetId: {
                  location: 'uri',
                  locationName: 'assetId'
                },
                excludeProperties: {
                  location: 'querystring',
                  locationName: 'excludeProperties',
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['assetId', 'assetArn', 'assetName', 'assetModelId', 'assetProperties', 'assetHierarchies', 'assetCreationDate', 'assetLastUpdateDate', 'assetStatus'],
              members: {
                assetId: {},
                assetArn: {},
                assetName: {},
                assetModelId: {},
                assetProperties: {
                  shape: 'S6e'
                },
                assetHierarchies: {
                  shape: 'S6l'
                },
                assetCompositeModels: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['name', 'type', 'properties'],
                    members: {
                      name: {},
                      description: {},
                      type: {},
                      properties: {
                        shape: 'S6e'
                      },
                      id: {},
                      externalId: {}
                    }
                  }
                },
                assetCreationDate: {
                  type: 'timestamp'
                },
                assetLastUpdateDate: {
                  type: 'timestamp'
                },
                assetStatus: {
                  shape: 'S35'
                },
                assetDescription: {},
                assetCompositeModelSummaries: {
                  shape: 'S6p'
                },
                assetExternalId: {}
              }
            },
            endpoint: {
              hostPrefix: 'api.'
            }
          },
          DescribeAssetCompositeModel: {
            http: {
              method: 'GET',
              requestUri: '/assets/{assetId}/composite-models/{assetCompositeModelId}'
            },
            input: {
              type: 'structure',
              required: ['assetId', 'assetCompositeModelId'],
              members: {
                assetId: {
                  location: 'uri',
                  locationName: 'assetId'
                },
                assetCompositeModelId: {
                  location: 'uri',
                  locationName: 'assetCompositeModelId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['assetId', 'assetCompositeModelId', 'assetCompositeModelPath', 'assetCompositeModelName', 'assetCompositeModelDescription', 'assetCompositeModelType', 'assetCompositeModelProperties', 'assetCompositeModelSummaries'],
              members: {
                assetId: {},
                assetCompositeModelId: {},
                assetCompositeModelExternalId: {},
                assetCompositeModelPath: {
                  shape: 'S6r'
                },
                assetCompositeModelName: {},
                assetCompositeModelDescription: {},
                assetCompositeModelType: {},
                assetCompositeModelProperties: {
                  shape: 'S6e'
                },
                assetCompositeModelSummaries: {
                  shape: 'S6p'
                },
                actionDefinitions: {
                  shape: 'S6v'
                }
              }
            },
            endpoint: {
              hostPrefix: 'api.'
            }
          },
          DescribeAssetModel: {
            http: {
              method: 'GET',
              requestUri: '/asset-models/{assetModelId}'
            },
            input: {
              type: 'structure',
              required: ['assetModelId'],
              members: {
                assetModelId: {
                  location: 'uri',
                  locationName: 'assetModelId'
                },
                excludeProperties: {
                  location: 'querystring',
                  locationName: 'excludeProperties',
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['assetModelId', 'assetModelArn', 'assetModelName', 'assetModelDescription', 'assetModelProperties', 'assetModelHierarchies', 'assetModelCreationDate', 'assetModelLastUpdateDate', 'assetModelStatus'],
              members: {
                assetModelId: {},
                assetModelArn: {},
                assetModelName: {},
                assetModelDescription: {},
                assetModelProperties: {
                  shape: 'S6z'
                },
                assetModelHierarchies: {
                  shape: 'S71'
                },
                assetModelCompositeModels: {
                  shape: 'S73'
                },
                assetModelCreationDate: {
                  type: 'timestamp'
                },
                assetModelLastUpdateDate: {
                  type: 'timestamp'
                },
                assetModelStatus: {
                  shape: 'S4c'
                },
                assetModelType: {},
                assetModelCompositeModelSummaries: {
                  shape: 'S75'
                },
                assetModelExternalId: {}
              }
            },
            endpoint: {
              hostPrefix: 'api.'
            }
          },
          DescribeAssetModelCompositeModel: {
            http: {
              method: 'GET',
              requestUri: '/asset-models/{assetModelId}/composite-models/{assetModelCompositeModelId}'
            },
            input: {
              type: 'structure',
              required: ['assetModelId', 'assetModelCompositeModelId'],
              members: {
                assetModelId: {
                  location: 'uri',
                  locationName: 'assetModelId'
                },
                assetModelCompositeModelId: {
                  location: 'uri',
                  locationName: 'assetModelCompositeModelId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['assetModelId', 'assetModelCompositeModelId', 'assetModelCompositeModelPath', 'assetModelCompositeModelName', 'assetModelCompositeModelDescription', 'assetModelCompositeModelType', 'assetModelCompositeModelProperties', 'assetModelCompositeModelSummaries'],
              members: {
                assetModelId: {},
                assetModelCompositeModelId: {},
                assetModelCompositeModelExternalId: {},
                assetModelCompositeModelPath: {
                  shape: 'S4g'
                },
                assetModelCompositeModelName: {},
                assetModelCompositeModelDescription: {},
                assetModelCompositeModelType: {},
                assetModelCompositeModelProperties: {
                  shape: 'S6z'
                },
                compositionDetails: {
                  type: 'structure',
                  members: {
                    compositionRelationship: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          id: {}
                        }
                      }
                    }
                  }
                },
                assetModelCompositeModelSummaries: {
                  shape: 'S75'
                },
                actionDefinitions: {
                  shape: 'S6v'
                }
              }
            },
            endpoint: {
              hostPrefix: 'api.'
            }
          },
          DescribeAssetProperty: {
            http: {
              method: 'GET',
              requestUri: '/assets/{assetId}/properties/{propertyId}'
            },
            input: {
              type: 'structure',
              required: ['assetId', 'propertyId'],
              members: {
                assetId: {
                  location: 'uri',
                  locationName: 'assetId'
                },
                propertyId: {
                  location: 'uri',
                  locationName: 'propertyId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['assetId', 'assetName', 'assetModelId'],
              members: {
                assetId: {},
                assetName: {},
                assetModelId: {},
                assetProperty: {
                  shape: 'S7e'
                },
                compositeModel: {
                  type: 'structure',
                  required: ['name', 'type', 'assetProperty'],
                  members: {
                    name: {},
                    type: {},
                    assetProperty: {
                      shape: 'S7e'
                    },
                    id: {},
                    externalId: {}
                  }
                },
                assetExternalId: {}
              }
            },
            endpoint: {
              hostPrefix: 'api.'
            }
          },
          DescribeBulkImportJob: {
            http: {
              method: 'GET',
              requestUri: '/jobs/{jobId}'
            },
            input: {
              type: 'structure',
              required: ['jobId'],
              members: {
                jobId: {
                  location: 'uri',
                  locationName: 'jobId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['jobId', 'jobName', 'jobStatus', 'jobRoleArn', 'files', 'errorReportLocation', 'jobConfiguration', 'jobCreationDate', 'jobLastUpdateDate'],
              members: {
                jobId: {},
                jobName: {},
                jobStatus: {},
                jobRoleArn: {},
                files: {
                  shape: 'S4j'
                },
                errorReportLocation: {
                  shape: 'S4n'
                },
                jobConfiguration: {
                  shape: 'S4o'
                },
                jobCreationDate: {
                  type: 'timestamp'
                },
                jobLastUpdateDate: {
                  type: 'timestamp'
                },
                adaptiveIngestion: {
                  type: 'boolean'
                },
                deleteFilesAfterImport: {
                  type: 'boolean'
                }
              }
            },
            endpoint: {
              hostPrefix: 'data.'
            }
          },
          DescribeDashboard: {
            http: {
              method: 'GET',
              requestUri: '/dashboards/{dashboardId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['dashboardId'],
              members: {
                dashboardId: {
                  location: 'uri',
                  locationName: 'dashboardId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['dashboardId', 'dashboardArn', 'dashboardName', 'projectId', 'dashboardDefinition', 'dashboardCreationDate', 'dashboardLastUpdateDate'],
              members: {
                dashboardId: {},
                dashboardArn: {},
                dashboardName: {},
                projectId: {},
                dashboardDescription: {},
                dashboardDefinition: {},
                dashboardCreationDate: {
                  type: 'timestamp'
                },
                dashboardLastUpdateDate: {
                  type: 'timestamp'
                }
              }
            },
            endpoint: {
              hostPrefix: 'monitor.'
            }
          },
          DescribeDefaultEncryptionConfiguration: {
            http: {
              method: 'GET',
              requestUri: '/configuration/account/encryption'
            },
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              required: ['encryptionType', 'configurationStatus'],
              members: {
                encryptionType: {},
                kmsKeyArn: {},
                configurationStatus: {
                  shape: 'S7n'
                }
              }
            },
            endpoint: {
              hostPrefix: 'api.'
            }
          },
          DescribeGateway: {
            http: {
              method: 'GET',
              requestUri: '/20200301/gateways/{gatewayId}'
            },
            input: {
              type: 'structure',
              required: ['gatewayId'],
              members: {
                gatewayId: {
                  location: 'uri',
                  locationName: 'gatewayId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['gatewayId', 'gatewayName', 'gatewayArn', 'gatewayCapabilitySummaries', 'creationDate', 'lastUpdateDate'],
              members: {
                gatewayId: {},
                gatewayName: {},
                gatewayArn: {},
                gatewayPlatform: {
                  shape: 'S52'
                },
                gatewayCapabilitySummaries: {
                  shape: 'S7s'
                },
                creationDate: {
                  type: 'timestamp'
                },
                lastUpdateDate: {
                  type: 'timestamp'
                }
              }
            },
            endpoint: {
              hostPrefix: 'api.'
            }
          },
          DescribeGatewayCapabilityConfiguration: {
            http: {
              method: 'GET',
              requestUri: '/20200301/gateways/{gatewayId}/capability/{capabilityNamespace}'
            },
            input: {
              type: 'structure',
              required: ['gatewayId', 'capabilityNamespace'],
              members: {
                gatewayId: {
                  location: 'uri',
                  locationName: 'gatewayId'
                },
                capabilityNamespace: {
                  location: 'uri',
                  locationName: 'capabilityNamespace'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['gatewayId', 'capabilityNamespace', 'capabilityConfiguration', 'capabilitySyncStatus'],
              members: {
                gatewayId: {},
                capabilityNamespace: {},
                capabilityConfiguration: {},
                capabilitySyncStatus: {}
              }
            },
            endpoint: {
              hostPrefix: 'api.'
            }
          },
          DescribeLoggingOptions: {
            http: {
              method: 'GET',
              requestUri: '/logging'
            },
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              required: ['loggingOptions'],
              members: {
                loggingOptions: {
                  shape: 'S81'
                }
              }
            },
            endpoint: {
              hostPrefix: 'api.'
            }
          },
          DescribePortal: {
            http: {
              method: 'GET',
              requestUri: '/portals/{portalId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['portalId'],
              members: {
                portalId: {
                  location: 'uri',
                  locationName: 'portalId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['portalId', 'portalArn', 'portalName', 'portalClientId', 'portalStartUrl', 'portalContactEmail', 'portalStatus', 'portalCreationDate', 'portalLastUpdateDate'],
              members: {
                portalId: {},
                portalArn: {},
                portalName: {},
                portalDescription: {},
                portalClientId: {},
                portalStartUrl: {},
                portalContactEmail: {},
                portalStatus: {
                  shape: 'S5g'
                },
                portalCreationDate: {
                  type: 'timestamp'
                },
                portalLastUpdateDate: {
                  type: 'timestamp'
                },
                portalLogoImageLocation: {
                  type: 'structure',
                  required: ['id', 'url'],
                  members: {
                    id: {},
                    url: {}
                  }
                },
                roleArn: {},
                portalAuthMode: {},
                notificationSenderEmail: {},
                alarms: {
                  shape: 'S5d'
                }
              }
            },
            endpoint: {
              hostPrefix: 'monitor.'
            }
          },
          DescribeProject: {
            http: {
              method: 'GET',
              requestUri: '/projects/{projectId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['projectId'],
              members: {
                projectId: {
                  location: 'uri',
                  locationName: 'projectId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['projectId', 'projectArn', 'projectName', 'portalId', 'projectCreationDate', 'projectLastUpdateDate'],
              members: {
                projectId: {},
                projectArn: {},
                projectName: {},
                portalId: {},
                projectDescription: {},
                projectCreationDate: {
                  type: 'timestamp'
                },
                projectLastUpdateDate: {
                  type: 'timestamp'
                }
              }
            },
            endpoint: {
              hostPrefix: 'monitor.'
            }
          },
          DescribeStorageConfiguration: {
            http: {
              method: 'GET',
              requestUri: '/configuration/account/storage'
            },
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              required: ['storageType', 'configurationStatus'],
              members: {
                storageType: {},
                multiLayerStorage: {
                  shape: 'S8c'
                },
                disassociatedDataStorage: {},
                retentionPeriod: {
                  shape: 'S8f'
                },
                configurationStatus: {
                  shape: 'S7n'
                },
                lastUpdateDate: {
                  type: 'timestamp'
                },
                warmTier: {},
                warmTierRetentionPeriod: {
                  shape: 'S8j'
                }
              }
            },
            endpoint: {
              hostPrefix: 'api.'
            }
          },
          DescribeTimeSeries: {
            http: {
              method: 'GET',
              requestUri: '/timeseries/describe/'
            },
            input: {
              type: 'structure',
              members: {
                alias: {
                  location: 'querystring',
                  locationName: 'alias'
                },
                assetId: {
                  location: 'querystring',
                  locationName: 'assetId'
                },
                propertyId: {
                  location: 'querystring',
                  locationName: 'propertyId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['timeSeriesId', 'dataType', 'timeSeriesCreationDate', 'timeSeriesLastUpdateDate', 'timeSeriesArn'],
              members: {
                assetId: {},
                propertyId: {},
                alias: {},
                timeSeriesId: {},
                dataType: {},
                dataTypeSpec: {},
                timeSeriesCreationDate: {
                  type: 'timestamp'
                },
                timeSeriesLastUpdateDate: {
                  type: 'timestamp'
                },
                timeSeriesArn: {}
              }
            },
            endpoint: {
              hostPrefix: 'api.'
            }
          },
          DisassociateAssets: {
            http: {
              requestUri: '/assets/{assetId}/disassociate'
            },
            input: {
              type: 'structure',
              required: ['assetId', 'hierarchyId', 'childAssetId'],
              members: {
                assetId: {
                  location: 'uri',
                  locationName: 'assetId'
                },
                hierarchyId: {},
                childAssetId: {},
                clientToken: {
                  idempotencyToken: true
                }
              }
            },
            endpoint: {
              hostPrefix: 'api.'
            }
          },
          DisassociateTimeSeriesFromAssetProperty: {
            http: {
              requestUri: '/timeseries/disassociate/'
            },
            input: {
              type: 'structure',
              required: ['alias', 'assetId', 'propertyId'],
              members: {
                alias: {
                  location: 'querystring',
                  locationName: 'alias'
                },
                assetId: {
                  location: 'querystring',
                  locationName: 'assetId'
                },
                propertyId: {
                  location: 'querystring',
                  locationName: 'propertyId'
                },
                clientToken: {
                  idempotencyToken: true
                }
              }
            },
            endpoint: {
              hostPrefix: 'api.'
            }
          },
          ExecuteAction: {
            http: {
              requestUri: '/actions',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['targetResource', 'actionDefinitionId', 'actionPayload'],
              members: {
                targetResource: {
                  shape: 'S68'
                },
                actionDefinitionId: {},
                actionPayload: {
                  shape: 'S69'
                },
                clientToken: {}
              }
            },
            output: {
              type: 'structure',
              required: ['actionId'],
              members: {
                actionId: {}
              }
            },
            endpoint: {
              hostPrefix: 'api.'
            }
          },
          ExecuteQuery: {
            http: {
              requestUri: '/queries/execution'
            },
            input: {
              type: 'structure',
              required: ['queryStatement'],
              members: {
                queryStatement: {},
                nextToken: {},
                maxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                columns: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      name: {},
                      type: {
                        type: 'structure',
                        members: {
                          scalarType: {}
                        }
                      }
                    }
                  }
                },
                rows: {
                  type: 'list',
                  member: {
                    shape: 'S91'
                  }
                },
                nextToken: {}
              }
            },
            endpoint: {
              hostPrefix: 'data.'
            }
          },
          GetAssetPropertyAggregates: {
            http: {
              method: 'GET',
              requestUri: '/properties/aggregates'
            },
            input: {
              type: 'structure',
              required: ['aggregateTypes', 'resolution', 'startDate', 'endDate'],
              members: {
                assetId: {
                  location: 'querystring',
                  locationName: 'assetId'
                },
                propertyId: {
                  location: 'querystring',
                  locationName: 'propertyId'
                },
                propertyAlias: {
                  location: 'querystring',
                  locationName: 'propertyAlias'
                },
                aggregateTypes: {
                  shape: 'Sm',
                  location: 'querystring',
                  locationName: 'aggregateTypes'
                },
                resolution: {
                  location: 'querystring',
                  locationName: 'resolution'
                },
                qualities: {
                  shape: 'Sq',
                  location: 'querystring',
                  locationName: 'qualities'
                },
                startDate: {
                  location: 'querystring',
                  locationName: 'startDate',
                  type: 'timestamp'
                },
                endDate: {
                  location: 'querystring',
                  locationName: 'endDate',
                  type: 'timestamp'
                },
                timeOrdering: {
                  location: 'querystring',
                  locationName: 'timeOrdering'
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
              required: ['aggregatedValues'],
              members: {
                aggregatedValues: {
                  shape: 'S12'
                },
                nextToken: {}
              }
            },
            endpoint: {
              hostPrefix: 'data.'
            }
          },
          GetAssetPropertyValue: {
            http: {
              method: 'GET',
              requestUri: '/properties/latest'
            },
            input: {
              type: 'structure',
              members: {
                assetId: {
                  location: 'querystring',
                  locationName: 'assetId'
                },
                propertyId: {
                  location: 'querystring',
                  locationName: 'propertyId'
                },
                propertyAlias: {
                  location: 'querystring',
                  locationName: 'propertyAlias'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                propertyValue: {
                  shape: 'S1j'
                }
              }
            },
            endpoint: {
              hostPrefix: 'data.'
            }
          },
          GetAssetPropertyValueHistory: {
            http: {
              method: 'GET',
              requestUri: '/properties/history'
            },
            input: {
              type: 'structure',
              members: {
                assetId: {
                  location: 'querystring',
                  locationName: 'assetId'
                },
                propertyId: {
                  location: 'querystring',
                  locationName: 'propertyId'
                },
                propertyAlias: {
                  location: 'querystring',
                  locationName: 'propertyAlias'
                },
                startDate: {
                  location: 'querystring',
                  locationName: 'startDate',
                  type: 'timestamp'
                },
                endDate: {
                  location: 'querystring',
                  locationName: 'endDate',
                  type: 'timestamp'
                },
                qualities: {
                  shape: 'Sq',
                  location: 'querystring',
                  locationName: 'qualities'
                },
                timeOrdering: {
                  location: 'querystring',
                  locationName: 'timeOrdering'
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
              required: ['assetPropertyValueHistory'],
              members: {
                assetPropertyValueHistory: {
                  shape: 'S25'
                },
                nextToken: {}
              }
            },
            endpoint: {
              hostPrefix: 'data.'
            }
          },
          GetInterpolatedAssetPropertyValues: {
            http: {
              method: 'GET',
              requestUri: '/properties/interpolated'
            },
            input: {
              type: 'structure',
              required: ['startTimeInSeconds', 'endTimeInSeconds', 'quality', 'intervalInSeconds', 'type'],
              members: {
                assetId: {
                  location: 'querystring',
                  locationName: 'assetId'
                },
                propertyId: {
                  location: 'querystring',
                  locationName: 'propertyId'
                },
                propertyAlias: {
                  location: 'querystring',
                  locationName: 'propertyAlias'
                },
                startTimeInSeconds: {
                  location: 'querystring',
                  locationName: 'startTimeInSeconds',
                  type: 'long'
                },
                startTimeOffsetInNanos: {
                  location: 'querystring',
                  locationName: 'startTimeOffsetInNanos',
                  type: 'integer'
                },
                endTimeInSeconds: {
                  location: 'querystring',
                  locationName: 'endTimeInSeconds',
                  type: 'long'
                },
                endTimeOffsetInNanos: {
                  location: 'querystring',
                  locationName: 'endTimeOffsetInNanos',
                  type: 'integer'
                },
                quality: {
                  location: 'querystring',
                  locationName: 'quality'
                },
                intervalInSeconds: {
                  location: 'querystring',
                  locationName: 'intervalInSeconds',
                  type: 'long'
                },
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                maxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                type: {
                  location: 'querystring',
                  locationName: 'type'
                },
                intervalWindowInSeconds: {
                  location: 'querystring',
                  locationName: 'intervalWindowInSeconds',
                  type: 'long'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['interpolatedAssetPropertyValues'],
              members: {
                interpolatedAssetPropertyValues: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['timestamp', 'value'],
                    members: {
                      timestamp: {
                        shape: 'S1p'
                      },
                      value: {
                        shape: 'S1k'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            },
            endpoint: {
              hostPrefix: 'data.'
            }
          },
          ListAccessPolicies: {
            http: {
              method: 'GET',
              requestUri: '/access-policies',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                identityType: {
                  location: 'querystring',
                  locationName: 'identityType'
                },
                identityId: {
                  location: 'querystring',
                  locationName: 'identityId'
                },
                resourceType: {
                  location: 'querystring',
                  locationName: 'resourceType'
                },
                resourceId: {
                  location: 'querystring',
                  locationName: 'resourceId'
                },
                iamArn: {
                  location: 'querystring',
                  locationName: 'iamArn'
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
              required: ['accessPolicySummaries'],
              members: {
                accessPolicySummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['id', 'identity', 'resource', 'permission'],
                    members: {
                      id: {},
                      identity: {
                        shape: 'S2l'
                      },
                      resource: {
                        shape: 'S2s'
                      },
                      permission: {},
                      creationDate: {
                        type: 'timestamp'
                      },
                      lastUpdateDate: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            },
            endpoint: {
              hostPrefix: 'monitor.'
            }
          },
          ListActions: {
            http: {
              method: 'GET',
              requestUri: '/actions'
            },
            input: {
              type: 'structure',
              required: ['targetResourceType', 'targetResourceId'],
              members: {
                targetResourceType: {
                  location: 'querystring',
                  locationName: 'targetResourceType'
                },
                targetResourceId: {
                  location: 'querystring',
                  locationName: 'targetResourceId'
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
              required: ['actionSummaries', 'nextToken'],
              members: {
                actionSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      actionId: {},
                      actionDefinitionId: {},
                      targetResource: {
                        shape: 'S68'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            },
            endpoint: {
              hostPrefix: 'api.'
            }
          },
          ListAssetModelCompositeModels: {
            http: {
              method: 'GET',
              requestUri: '/asset-models/{assetModelId}/composite-models'
            },
            input: {
              type: 'structure',
              required: ['assetModelId'],
              members: {
                assetModelId: {
                  location: 'uri',
                  locationName: 'assetModelId'
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
              required: ['assetModelCompositeModelSummaries'],
              members: {
                assetModelCompositeModelSummaries: {
                  shape: 'S75'
                },
                nextToken: {}
              }
            },
            endpoint: {
              hostPrefix: 'api.'
            }
          },
          ListAssetModelProperties: {
            http: {
              method: 'GET',
              requestUri: '/asset-models/{assetModelId}/properties'
            },
            input: {
              type: 'structure',
              required: ['assetModelId'],
              members: {
                assetModelId: {
                  location: 'uri',
                  locationName: 'assetModelId'
                },
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                maxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                filter: {
                  location: 'querystring',
                  locationName: 'filter'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['assetModelPropertySummaries'],
              members: {
                assetModelPropertySummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['name', 'dataType', 'type'],
                    members: {
                      id: {},
                      name: {},
                      dataType: {},
                      dataTypeSpec: {},
                      unit: {},
                      type: {
                        shape: 'S3i'
                      },
                      assetModelCompositeModelId: {},
                      path: {
                        shape: 'S3w'
                      },
                      externalId: {}
                    }
                  }
                },
                nextToken: {}
              }
            },
            endpoint: {
              hostPrefix: 'api.'
            }
          },
          ListAssetModels: {
            http: {
              method: 'GET',
              requestUri: '/asset-models'
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
                assetModelTypes: {
                  location: 'querystring',
                  locationName: 'assetModelTypes',
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              required: ['assetModelSummaries'],
              members: {
                assetModelSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['id', 'arn', 'name', 'description', 'creationDate', 'lastUpdateDate', 'status'],
                    members: {
                      id: {},
                      arn: {},
                      name: {},
                      description: {},
                      creationDate: {
                        type: 'timestamp'
                      },
                      lastUpdateDate: {
                        type: 'timestamp'
                      },
                      status: {
                        shape: 'S4c'
                      },
                      assetModelType: {},
                      externalId: {}
                    }
                  }
                },
                nextToken: {}
              }
            },
            endpoint: {
              hostPrefix: 'api.'
            }
          },
          ListAssetProperties: {
            http: {
              method: 'GET',
              requestUri: '/assets/{assetId}/properties'
            },
            input: {
              type: 'structure',
              required: ['assetId'],
              members: {
                assetId: {
                  location: 'uri',
                  locationName: 'assetId'
                },
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                maxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                filter: {
                  location: 'querystring',
                  locationName: 'filter'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['assetPropertySummaries'],
              members: {
                assetPropertySummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['id'],
                    members: {
                      id: {},
                      alias: {},
                      unit: {},
                      notification: {
                        shape: 'S6g'
                      },
                      assetCompositeModelId: {},
                      path: {
                        shape: 'S6j'
                      },
                      externalId: {}
                    }
                  }
                },
                nextToken: {}
              }
            },
            endpoint: {
              hostPrefix: 'api.'
            }
          },
          ListAssetRelationships: {
            http: {
              method: 'GET',
              requestUri: '/assets/{assetId}/assetRelationships'
            },
            input: {
              type: 'structure',
              required: ['assetId', 'traversalType'],
              members: {
                assetId: {
                  location: 'uri',
                  locationName: 'assetId'
                },
                traversalType: {
                  location: 'querystring',
                  locationName: 'traversalType'
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
              required: ['assetRelationshipSummaries'],
              members: {
                assetRelationshipSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['relationshipType'],
                    members: {
                      hierarchyInfo: {
                        type: 'structure',
                        members: {
                          parentAssetId: {},
                          childAssetId: {}
                        }
                      },
                      relationshipType: {}
                    }
                  }
                },
                nextToken: {}
              }
            },
            endpoint: {
              hostPrefix: 'api.'
            }
          },
          ListAssets: {
            http: {
              method: 'GET',
              requestUri: '/assets'
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
                assetModelId: {
                  location: 'querystring',
                  locationName: 'assetModelId'
                },
                filter: {
                  location: 'querystring',
                  locationName: 'filter'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['assetSummaries'],
              members: {
                assetSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['id', 'arn', 'name', 'assetModelId', 'creationDate', 'lastUpdateDate', 'status', 'hierarchies'],
                    members: {
                      id: {},
                      arn: {},
                      name: {},
                      assetModelId: {},
                      creationDate: {
                        type: 'timestamp'
                      },
                      lastUpdateDate: {
                        type: 'timestamp'
                      },
                      status: {
                        shape: 'S35'
                      },
                      hierarchies: {
                        shape: 'S6l'
                      },
                      description: {},
                      externalId: {}
                    }
                  }
                },
                nextToken: {}
              }
            },
            endpoint: {
              hostPrefix: 'api.'
            }
          },
          ListAssociatedAssets: {
            http: {
              method: 'GET',
              requestUri: '/assets/{assetId}/hierarchies'
            },
            input: {
              type: 'structure',
              required: ['assetId'],
              members: {
                assetId: {
                  location: 'uri',
                  locationName: 'assetId'
                },
                hierarchyId: {
                  location: 'querystring',
                  locationName: 'hierarchyId'
                },
                traversalDirection: {
                  location: 'querystring',
                  locationName: 'traversalDirection'
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
              required: ['assetSummaries'],
              members: {
                assetSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['id', 'arn', 'name', 'assetModelId', 'creationDate', 'lastUpdateDate', 'status', 'hierarchies'],
                    members: {
                      id: {},
                      arn: {},
                      name: {},
                      assetModelId: {},
                      creationDate: {
                        type: 'timestamp'
                      },
                      lastUpdateDate: {
                        type: 'timestamp'
                      },
                      status: {
                        shape: 'S35'
                      },
                      hierarchies: {
                        shape: 'S6l'
                      },
                      description: {},
                      externalId: {}
                    }
                  }
                },
                nextToken: {}
              }
            },
            endpoint: {
              hostPrefix: 'api.'
            }
          },
          ListBulkImportJobs: {
            http: {
              method: 'GET',
              requestUri: '/jobs'
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
                filter: {
                  location: 'querystring',
                  locationName: 'filter'
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
                    type: 'structure',
                    required: ['id', 'name', 'status'],
                    members: {
                      id: {},
                      name: {},
                      status: {}
                    }
                  }
                },
                nextToken: {}
              }
            },
            endpoint: {
              hostPrefix: 'data.'
            }
          },
          ListCompositionRelationships: {
            http: {
              method: 'GET',
              requestUri: '/asset-models/{assetModelId}/composition-relationships'
            },
            input: {
              type: 'structure',
              required: ['assetModelId'],
              members: {
                assetModelId: {
                  location: 'uri',
                  locationName: 'assetModelId'
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
              required: ['compositionRelationshipSummaries'],
              members: {
                compositionRelationshipSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['assetModelId', 'assetModelCompositeModelId', 'assetModelCompositeModelType'],
                    members: {
                      assetModelId: {},
                      assetModelCompositeModelId: {},
                      assetModelCompositeModelType: {}
                    }
                  }
                },
                nextToken: {}
              }
            },
            endpoint: {
              hostPrefix: 'api.'
            }
          },
          ListDashboards: {
            http: {
              method: 'GET',
              requestUri: '/dashboards',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['projectId'],
              members: {
                projectId: {
                  location: 'querystring',
                  locationName: 'projectId'
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
              required: ['dashboardSummaries'],
              members: {
                dashboardSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['id', 'name'],
                    members: {
                      id: {},
                      name: {},
                      description: {},
                      creationDate: {
                        type: 'timestamp'
                      },
                      lastUpdateDate: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            },
            endpoint: {
              hostPrefix: 'monitor.'
            }
          },
          ListGateways: {
            http: {
              method: 'GET',
              requestUri: '/20200301/gateways'
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
              required: ['gatewaySummaries'],
              members: {
                gatewaySummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['gatewayId', 'gatewayName', 'creationDate', 'lastUpdateDate'],
                    members: {
                      gatewayId: {},
                      gatewayName: {},
                      gatewayPlatform: {
                        shape: 'S52'
                      },
                      gatewayCapabilitySummaries: {
                        shape: 'S7s'
                      },
                      creationDate: {
                        type: 'timestamp'
                      },
                      lastUpdateDate: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            },
            endpoint: {
              hostPrefix: 'api.'
            }
          },
          ListPortals: {
            http: {
              method: 'GET',
              requestUri: '/portals',
              responseCode: 200
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
                portalSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['id', 'name', 'startUrl', 'status'],
                    members: {
                      id: {},
                      name: {},
                      description: {},
                      startUrl: {},
                      creationDate: {
                        type: 'timestamp'
                      },
                      lastUpdateDate: {
                        type: 'timestamp'
                      },
                      roleArn: {},
                      status: {
                        shape: 'S5g'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            },
            endpoint: {
              hostPrefix: 'monitor.'
            }
          },
          ListProjectAssets: {
            http: {
              method: 'GET',
              requestUri: '/projects/{projectId}/assets',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['projectId'],
              members: {
                projectId: {
                  location: 'uri',
                  locationName: 'projectId'
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
              required: ['assetIds'],
              members: {
                assetIds: {
                  type: 'list',
                  member: {}
                },
                nextToken: {}
              }
            },
            endpoint: {
              hostPrefix: 'monitor.'
            }
          },
          ListProjects: {
            http: {
              method: 'GET',
              requestUri: '/projects',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['portalId'],
              members: {
                portalId: {
                  location: 'querystring',
                  locationName: 'portalId'
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
              required: ['projectSummaries'],
              members: {
                projectSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['id', 'name'],
                    members: {
                      id: {},
                      name: {},
                      description: {},
                      creationDate: {
                        type: 'timestamp'
                      },
                      lastUpdateDate: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            },
            endpoint: {
              hostPrefix: 'monitor.'
            }
          },
          ListTagsForResource: {
            http: {
              method: 'GET',
              requestUri: '/tags'
            },
            input: {
              type: 'structure',
              required: ['resourceArn'],
              members: {
                resourceArn: {
                  location: 'querystring',
                  locationName: 'resourceArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                tags: {
                  shape: 'S2w'
                }
              }
            },
            endpoint: {
              hostPrefix: 'api.'
            }
          },
          ListTimeSeries: {
            http: {
              method: 'GET',
              requestUri: '/timeseries/'
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
                assetId: {
                  location: 'querystring',
                  locationName: 'assetId'
                },
                aliasPrefix: {
                  location: 'querystring',
                  locationName: 'aliasPrefix'
                },
                timeSeriesType: {
                  location: 'querystring',
                  locationName: 'timeSeriesType'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['TimeSeriesSummaries'],
              members: {
                TimeSeriesSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['timeSeriesId', 'dataType', 'timeSeriesCreationDate', 'timeSeriesLastUpdateDate', 'timeSeriesArn'],
                    members: {
                      assetId: {},
                      propertyId: {},
                      alias: {},
                      timeSeriesId: {},
                      dataType: {},
                      dataTypeSpec: {},
                      timeSeriesCreationDate: {
                        type: 'timestamp'
                      },
                      timeSeriesLastUpdateDate: {
                        type: 'timestamp'
                      },
                      timeSeriesArn: {}
                    }
                  }
                },
                nextToken: {}
              }
            },
            endpoint: {
              hostPrefix: 'api.'
            }
          },
          PutDefaultEncryptionConfiguration: {
            http: {
              requestUri: '/configuration/account/encryption'
            },
            input: {
              type: 'structure',
              required: ['encryptionType'],
              members: {
                encryptionType: {},
                kmsKeyId: {}
              }
            },
            output: {
              type: 'structure',
              required: ['encryptionType', 'configurationStatus'],
              members: {
                encryptionType: {},
                kmsKeyArn: {},
                configurationStatus: {
                  shape: 'S7n'
                }
              }
            },
            endpoint: {
              hostPrefix: 'api.'
            }
          },
          PutLoggingOptions: {
            http: {
              method: 'PUT',
              requestUri: '/logging'
            },
            input: {
              type: 'structure',
              required: ['loggingOptions'],
              members: {
                loggingOptions: {
                  shape: 'S81'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            endpoint: {
              hostPrefix: 'api.'
            }
          },
          PutStorageConfiguration: {
            http: {
              requestUri: '/configuration/account/storage'
            },
            input: {
              type: 'structure',
              required: ['storageType'],
              members: {
                storageType: {},
                multiLayerStorage: {
                  shape: 'S8c'
                },
                disassociatedDataStorage: {},
                retentionPeriod: {
                  shape: 'S8f'
                },
                warmTier: {},
                warmTierRetentionPeriod: {
                  shape: 'S8j'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['storageType', 'configurationStatus'],
              members: {
                storageType: {},
                multiLayerStorage: {
                  shape: 'S8c'
                },
                disassociatedDataStorage: {},
                retentionPeriod: {
                  shape: 'S8f'
                },
                configurationStatus: {
                  shape: 'S7n'
                },
                warmTier: {},
                warmTierRetentionPeriod: {
                  shape: 'S8j'
                }
              }
            },
            endpoint: {
              hostPrefix: 'api.'
            }
          },
          TagResource: {
            http: {
              requestUri: '/tags'
            },
            input: {
              type: 'structure',
              required: ['resourceArn', 'tags'],
              members: {
                resourceArn: {
                  location: 'querystring',
                  locationName: 'resourceArn'
                },
                tags: {
                  shape: 'S2w'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            endpoint: {
              hostPrefix: 'api.'
            }
          },
          UntagResource: {
            http: {
              method: 'DELETE',
              requestUri: '/tags'
            },
            input: {
              type: 'structure',
              required: ['resourceArn', 'tagKeys'],
              members: {
                resourceArn: {
                  location: 'querystring',
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
            },
            endpoint: {
              hostPrefix: 'api.'
            }
          },
          UpdateAccessPolicy: {
            http: {
              method: 'PUT',
              requestUri: '/access-policies/{accessPolicyId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['accessPolicyId', 'accessPolicyIdentity', 'accessPolicyResource', 'accessPolicyPermission'],
              members: {
                accessPolicyId: {
                  location: 'uri',
                  locationName: 'accessPolicyId'
                },
                accessPolicyIdentity: {
                  shape: 'S2l'
                },
                accessPolicyResource: {
                  shape: 'S2s'
                },
                accessPolicyPermission: {},
                clientToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            endpoint: {
              hostPrefix: 'monitor.'
            }
          },
          UpdateAsset: {
            http: {
              method: 'PUT',
              requestUri: '/assets/{assetId}',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['assetId', 'assetName'],
              members: {
                assetId: {
                  location: 'uri',
                  locationName: 'assetId'
                },
                assetName: {},
                clientToken: {
                  idempotencyToken: true
                },
                assetDescription: {},
                assetExternalId: {}
              }
            },
            output: {
              type: 'structure',
              required: ['assetStatus'],
              members: {
                assetStatus: {
                  shape: 'S35'
                }
              }
            },
            endpoint: {
              hostPrefix: 'api.'
            }
          },
          UpdateAssetModel: {
            http: {
              method: 'PUT',
              requestUri: '/asset-models/{assetModelId}',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['assetModelId', 'assetModelName'],
              members: {
                assetModelId: {
                  location: 'uri',
                  locationName: 'assetModelId'
                },
                assetModelName: {},
                assetModelDescription: {},
                assetModelProperties: {
                  shape: 'S6z'
                },
                assetModelHierarchies: {
                  shape: 'S71'
                },
                assetModelCompositeModels: {
                  shape: 'S73'
                },
                clientToken: {
                  idempotencyToken: true
                },
                assetModelExternalId: {}
              }
            },
            output: {
              type: 'structure',
              required: ['assetModelStatus'],
              members: {
                assetModelStatus: {
                  shape: 'S4c'
                }
              }
            },
            endpoint: {
              hostPrefix: 'api.'
            }
          },
          UpdateAssetModelCompositeModel: {
            http: {
              method: 'PUT',
              requestUri: '/asset-models/{assetModelId}/composite-models/{assetModelCompositeModelId}',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['assetModelId', 'assetModelCompositeModelId', 'assetModelCompositeModelName'],
              members: {
                assetModelId: {
                  location: 'uri',
                  locationName: 'assetModelId'
                },
                assetModelCompositeModelId: {
                  location: 'uri',
                  locationName: 'assetModelCompositeModelId'
                },
                assetModelCompositeModelExternalId: {},
                assetModelCompositeModelDescription: {},
                assetModelCompositeModelName: {},
                clientToken: {
                  idempotencyToken: true
                },
                assetModelCompositeModelProperties: {
                  shape: 'S6z'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['assetModelCompositeModelPath', 'assetModelStatus'],
              members: {
                assetModelCompositeModelPath: {
                  shape: 'S4g'
                },
                assetModelStatus: {
                  shape: 'S4c'
                }
              }
            },
            endpoint: {
              hostPrefix: 'api.'
            }
          },
          UpdateAssetProperty: {
            http: {
              method: 'PUT',
              requestUri: '/assets/{assetId}/properties/{propertyId}'
            },
            input: {
              type: 'structure',
              required: ['assetId', 'propertyId'],
              members: {
                assetId: {
                  location: 'uri',
                  locationName: 'assetId'
                },
                propertyId: {
                  location: 'uri',
                  locationName: 'propertyId'
                },
                propertyAlias: {},
                propertyNotificationState: {},
                clientToken: {
                  idempotencyToken: true
                },
                propertyUnit: {}
              }
            },
            endpoint: {
              hostPrefix: 'api.'
            }
          },
          UpdateDashboard: {
            http: {
              method: 'PUT',
              requestUri: '/dashboards/{dashboardId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['dashboardId', 'dashboardName', 'dashboardDefinition'],
              members: {
                dashboardId: {
                  location: 'uri',
                  locationName: 'dashboardId'
                },
                dashboardName: {},
                dashboardDescription: {},
                dashboardDefinition: {},
                clientToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            endpoint: {
              hostPrefix: 'monitor.'
            }
          },
          UpdateGateway: {
            http: {
              method: 'PUT',
              requestUri: '/20200301/gateways/{gatewayId}'
            },
            input: {
              type: 'structure',
              required: ['gatewayId', 'gatewayName'],
              members: {
                gatewayId: {
                  location: 'uri',
                  locationName: 'gatewayId'
                },
                gatewayName: {}
              }
            },
            endpoint: {
              hostPrefix: 'api.'
            }
          },
          UpdateGatewayCapabilityConfiguration: {
            http: {
              requestUri: '/20200301/gateways/{gatewayId}/capability',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['gatewayId', 'capabilityNamespace', 'capabilityConfiguration'],
              members: {
                gatewayId: {
                  location: 'uri',
                  locationName: 'gatewayId'
                },
                capabilityNamespace: {},
                capabilityConfiguration: {}
              }
            },
            output: {
              type: 'structure',
              required: ['capabilityNamespace', 'capabilitySyncStatus'],
              members: {
                capabilityNamespace: {},
                capabilitySyncStatus: {}
              }
            },
            endpoint: {
              hostPrefix: 'api.'
            }
          },
          UpdatePortal: {
            http: {
              method: 'PUT',
              requestUri: '/portals/{portalId}',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['portalId', 'portalName', 'portalContactEmail', 'roleArn'],
              members: {
                portalId: {
                  location: 'uri',
                  locationName: 'portalId'
                },
                portalName: {},
                portalDescription: {},
                portalContactEmail: {},
                portalLogoImage: {
                  type: 'structure',
                  members: {
                    id: {},
                    file: {
                      shape: 'S59'
                    }
                  }
                },
                roleArn: {},
                clientToken: {
                  idempotencyToken: true
                },
                notificationSenderEmail: {},
                alarms: {
                  shape: 'S5d'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['portalStatus'],
              members: {
                portalStatus: {
                  shape: 'S5g'
                }
              }
            },
            endpoint: {
              hostPrefix: 'monitor.'
            }
          },
          UpdateProject: {
            http: {
              method: 'PUT',
              requestUri: '/projects/{projectId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['projectId', 'projectName'],
              members: {
                projectId: {
                  location: 'uri',
                  locationName: 'projectId'
                },
                projectName: {},
                projectDescription: {},
                clientToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            endpoint: {
              hostPrefix: 'monitor.'
            }
          }
        },
        shapes: {
          S8: {
            type: 'list',
            member: {}
          },
          Sb: {
            type: 'structure',
            required: ['assetId', 'code', 'message'],
            members: {
              assetId: {},
              code: {},
              message: {}
            }
          },
          Sm: {
            type: 'list',
            member: {}
          },
          Sq: {
            type: 'list',
            member: {}
          },
          S12: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['timestamp', 'value'],
              members: {
                timestamp: {
                  type: 'timestamp'
                },
                quality: {},
                value: {
                  type: 'structure',
                  members: {
                    average: {
                      type: 'double'
                    },
                    count: {
                      type: 'double'
                    },
                    maximum: {
                      type: 'double'
                    },
                    minimum: {
                      type: 'double'
                    },
                    sum: {
                      type: 'double'
                    },
                    standardDeviation: {
                      type: 'double'
                    }
                  }
                }
              }
            }
          },
          S1j: {
            type: 'structure',
            required: ['value', 'timestamp'],
            members: {
              value: {
                shape: 'S1k'
              },
              timestamp: {
                shape: 'S1p'
              },
              quality: {}
            }
          },
          S1k: {
            type: 'structure',
            members: {
              stringValue: {},
              integerValue: {
                type: 'integer'
              },
              doubleValue: {
                type: 'double'
              },
              booleanValue: {
                type: 'boolean'
              }
            }
          },
          S1p: {
            type: 'structure',
            required: ['timeInSeconds'],
            members: {
              timeInSeconds: {
                type: 'long'
              },
              offsetInNanos: {
                type: 'integer'
              }
            }
          },
          S25: {
            type: 'list',
            member: {
              shape: 'S1j'
            }
          },
          S2l: {
            type: 'structure',
            members: {
              user: {
                type: 'structure',
                required: ['id'],
                members: {
                  id: {}
                }
              },
              group: {
                type: 'structure',
                required: ['id'],
                members: {
                  id: {}
                }
              },
              iamUser: {
                type: 'structure',
                required: ['arn'],
                members: {
                  arn: {}
                }
              },
              iamRole: {
                type: 'structure',
                required: ['arn'],
                members: {
                  arn: {}
                }
              }
            }
          },
          S2s: {
            type: 'structure',
            members: {
              portal: {
                type: 'structure',
                required: ['id'],
                members: {
                  id: {}
                }
              },
              project: {
                type: 'structure',
                required: ['id'],
                members: {
                  id: {}
                }
              }
            }
          },
          S2w: {
            type: 'map',
            key: {},
            value: {}
          },
          S35: {
            type: 'structure',
            required: ['state'],
            members: {
              state: {},
              error: {
                shape: 'S37'
              }
            }
          },
          S37: {
            type: 'structure',
            required: ['code', 'message'],
            members: {
              code: {},
              message: {},
              details: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['code', 'message'],
                  members: {
                    code: {},
                    message: {}
                  }
                }
              }
            }
          },
          S3e: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['name', 'dataType', 'type'],
              members: {
                name: {},
                dataType: {},
                dataTypeSpec: {},
                unit: {},
                type: {
                  shape: 'S3i'
                },
                id: {},
                externalId: {}
              }
            }
          },
          S3i: {
            type: 'structure',
            members: {
              attribute: {
                type: 'structure',
                members: {
                  defaultValue: {}
                }
              },
              measurement: {
                type: 'structure',
                members: {
                  processingConfig: {
                    type: 'structure',
                    required: ['forwardingConfig'],
                    members: {
                      forwardingConfig: {
                        shape: 'S3n'
                      }
                    }
                  }
                }
              },
              transform: {
                type: 'structure',
                required: ['expression', 'variables'],
                members: {
                  expression: {},
                  variables: {
                    shape: 'S3r'
                  },
                  processingConfig: {
                    type: 'structure',
                    required: ['computeLocation'],
                    members: {
                      computeLocation: {},
                      forwardingConfig: {
                        shape: 'S3n'
                      }
                    }
                  }
                }
              },
              metric: {
                type: 'structure',
                required: ['expression', 'variables', 'window'],
                members: {
                  expression: {},
                  variables: {
                    shape: 'S3r'
                  },
                  window: {
                    type: 'structure',
                    members: {
                      tumbling: {
                        type: 'structure',
                        required: ['interval'],
                        members: {
                          interval: {},
                          offset: {}
                        }
                      }
                    }
                  },
                  processingConfig: {
                    type: 'structure',
                    required: ['computeLocation'],
                    members: {
                      computeLocation: {}
                    }
                  }
                }
              }
            }
          },
          S3n: {
            type: 'structure',
            required: ['state'],
            members: {
              state: {}
            }
          },
          S3r: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['name', 'value'],
              members: {
                name: {},
                value: {
                  type: 'structure',
                  members: {
                    propertyId: {},
                    hierarchyId: {},
                    propertyPath: {
                      shape: 'S3w'
                    }
                  }
                }
              }
            }
          },
          S3w: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                id: {},
                name: {}
              }
            }
          },
          S4c: {
            type: 'structure',
            required: ['state'],
            members: {
              state: {},
              error: {
                shape: 'S37'
              }
            }
          },
          S4g: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                id: {},
                name: {}
              }
            }
          },
          S4j: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['bucket', 'key'],
              members: {
                bucket: {},
                key: {},
                versionId: {}
              }
            }
          },
          S4n: {
            type: 'structure',
            required: ['bucket', 'prefix'],
            members: {
              bucket: {},
              prefix: {}
            }
          },
          S4o: {
            type: 'structure',
            required: ['fileFormat'],
            members: {
              fileFormat: {
                type: 'structure',
                members: {
                  csv: {
                    type: 'structure',
                    required: ['columnNames'],
                    members: {
                      columnNames: {
                        type: 'list',
                        member: {}
                      }
                    }
                  },
                  parquet: {
                    type: 'structure',
                    members: {}
                  }
                }
              }
            }
          },
          S52: {
            type: 'structure',
            members: {
              greengrass: {
                type: 'structure',
                required: ['groupArn'],
                members: {
                  groupArn: {}
                }
              },
              greengrassV2: {
                type: 'structure',
                required: ['coreDeviceThingName'],
                members: {
                  coreDeviceThingName: {}
                }
              }
            }
          },
          S59: {
            type: 'structure',
            required: ['data', 'type'],
            members: {
              data: {
                type: 'blob'
              },
              type: {}
            }
          },
          S5d: {
            type: 'structure',
            required: ['alarmRoleArn'],
            members: {
              alarmRoleArn: {},
              notificationLambdaArn: {}
            }
          },
          S5g: {
            type: 'structure',
            required: ['state'],
            members: {
              state: {},
              error: {
                type: 'structure',
                members: {
                  code: {},
                  message: {}
                }
              }
            }
          },
          S68: {
            type: 'structure',
            required: ['assetId'],
            members: {
              assetId: {}
            }
          },
          S69: {
            type: 'structure',
            required: ['stringValue'],
            members: {
              stringValue: {}
            }
          },
          S6e: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['id', 'name', 'dataType'],
              members: {
                id: {},
                name: {},
                alias: {},
                notification: {
                  shape: 'S6g'
                },
                dataType: {},
                dataTypeSpec: {},
                unit: {},
                path: {
                  shape: 'S6j'
                },
                externalId: {}
              }
            }
          },
          S6g: {
            type: 'structure',
            required: ['topic', 'state'],
            members: {
              topic: {},
              state: {}
            }
          },
          S6j: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                id: {},
                name: {}
              }
            }
          },
          S6l: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['name'],
              members: {
                id: {},
                name: {},
                externalId: {}
              }
            }
          },
          S6p: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['id', 'name', 'type', 'description', 'path'],
              members: {
                id: {},
                externalId: {},
                name: {},
                type: {},
                description: {},
                path: {
                  shape: 'S6r'
                }
              }
            }
          },
          S6r: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                id: {},
                name: {}
              }
            }
          },
          S6v: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['actionDefinitionId', 'actionName', 'actionType'],
              members: {
                actionDefinitionId: {},
                actionName: {},
                actionType: {}
              }
            }
          },
          S6z: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['name', 'dataType', 'type'],
              members: {
                id: {},
                name: {},
                dataType: {},
                dataTypeSpec: {},
                unit: {},
                type: {
                  shape: 'S3i'
                },
                path: {
                  shape: 'S3w'
                },
                externalId: {}
              }
            }
          },
          S71: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['name', 'childAssetModelId'],
              members: {
                id: {},
                name: {},
                childAssetModelId: {},
                externalId: {}
              }
            }
          },
          S73: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['name', 'type'],
              members: {
                name: {},
                description: {},
                type: {},
                properties: {
                  shape: 'S6z'
                },
                id: {},
                externalId: {}
              }
            }
          },
          S75: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['id', 'name', 'type'],
              members: {
                id: {},
                externalId: {},
                name: {},
                type: {},
                description: {},
                path: {
                  shape: 'S4g'
                }
              }
            }
          },
          S7e: {
            type: 'structure',
            required: ['id', 'name', 'dataType'],
            members: {
              id: {},
              name: {},
              alias: {},
              notification: {
                shape: 'S6g'
              },
              dataType: {},
              unit: {},
              type: {
                shape: 'S3i'
              },
              path: {
                shape: 'S6j'
              },
              externalId: {}
            }
          },
          S7n: {
            type: 'structure',
            required: ['state'],
            members: {
              state: {},
              error: {
                type: 'structure',
                required: ['code', 'message'],
                members: {
                  code: {},
                  message: {}
                }
              }
            }
          },
          S7s: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['capabilityNamespace', 'capabilitySyncStatus'],
              members: {
                capabilityNamespace: {},
                capabilitySyncStatus: {}
              }
            }
          },
          S81: {
            type: 'structure',
            required: ['level'],
            members: {
              level: {}
            }
          },
          S8c: {
            type: 'structure',
            required: ['customerManagedS3Storage'],
            members: {
              customerManagedS3Storage: {
                type: 'structure',
                required: ['s3ResourceArn', 'roleArn'],
                members: {
                  s3ResourceArn: {},
                  roleArn: {}
                }
              }
            }
          },
          S8f: {
            type: 'structure',
            members: {
              numberOfDays: {
                type: 'integer'
              },
              unlimited: {
                type: 'boolean'
              }
            }
          },
          S8j: {
            type: 'structure',
            members: {
              numberOfDays: {
                type: 'integer'
              },
              unlimited: {
                type: 'boolean'
              }
            }
          },
          S91: {
            type: 'structure',
            required: ['data'],
            members: {
              data: {
                shape: 'S92'
              }
            }
          },
          S92: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                scalarValue: {},
                arrayValue: {
                  shape: 'S92'
                },
                rowValue: {
                  shape: 'S91'
                },
                nullValue: {
                  type: 'boolean'
                }
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=9017d7133ec8d26b767fa74d34438ee02f5e206c.js.map