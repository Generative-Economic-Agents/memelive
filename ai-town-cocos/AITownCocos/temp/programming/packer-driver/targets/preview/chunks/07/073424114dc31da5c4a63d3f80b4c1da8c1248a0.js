System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2021-11-29',
          endpointPrefix: 'iottwinmaker',
          protocol: 'rest-json',
          protocols: ['rest-json'],
          serviceFullName: 'AWS IoT TwinMaker',
          serviceId: 'IoTTwinMaker',
          signatureVersion: 'v4',
          signingName: 'iottwinmaker',
          uid: 'iottwinmaker-2021-11-29'
        },
        operations: {
          BatchPutPropertyValues: {
            http: {
              requestUri: '/workspaces/{workspaceId}/entity-properties',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['workspaceId', 'entries'],
              members: {
                workspaceId: {
                  location: 'uri',
                  locationName: 'workspaceId'
                },
                entries: {
                  type: 'list',
                  member: {
                    shape: 'S4'
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
                    required: ['errors'],
                    members: {
                      errors: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          required: ['errorCode', 'errorMessage', 'entry'],
                          members: {
                            errorCode: {},
                            errorMessage: {},
                            entry: {
                              shape: 'S4'
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
          CancelMetadataTransferJob: {
            http: {
              method: 'PUT',
              requestUri: '/metadata-transfer-jobs/{metadataTransferJobId}/cancel',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['metadataTransferJobId'],
              members: {
                metadataTransferJobId: {
                  location: 'uri',
                  locationName: 'metadataTransferJobId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['metadataTransferJobId', 'arn', 'updateDateTime', 'status'],
              members: {
                metadataTransferJobId: {},
                arn: {},
                updateDateTime: {
                  type: 'timestamp'
                },
                status: {
                  shape: 'Sw'
                },
                progress: {
                  shape: 'S11'
                }
              }
            },
            endpoint: {
              hostPrefix: 'api.'
            }
          },
          CreateComponentType: {
            http: {
              requestUri: '/workspaces/{workspaceId}/component-types/{componentTypeId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['workspaceId', 'componentTypeId'],
              members: {
                workspaceId: {
                  location: 'uri',
                  locationName: 'workspaceId'
                },
                isSingleton: {
                  type: 'boolean'
                },
                componentTypeId: {
                  location: 'uri',
                  locationName: 'componentTypeId'
                },
                description: {},
                propertyDefinitions: {
                  shape: 'S15'
                },
                extendsFrom: {
                  shape: 'S1d'
                },
                functions: {
                  shape: 'S1e'
                },
                tags: {
                  shape: 'S1l'
                },
                propertyGroups: {
                  shape: 'S1o'
                },
                componentTypeName: {},
                compositeComponentTypes: {
                  shape: 'S1t'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['arn', 'creationDateTime', 'state'],
              members: {
                arn: {},
                creationDateTime: {
                  type: 'timestamp'
                },
                state: {}
              }
            },
            endpoint: {
              hostPrefix: 'api.'
            }
          },
          CreateEntity: {
            http: {
              requestUri: '/workspaces/{workspaceId}/entities',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['workspaceId', 'entityName'],
              members: {
                workspaceId: {
                  location: 'uri',
                  locationName: 'workspaceId'
                },
                entityId: {},
                entityName: {},
                description: {},
                components: {
                  type: 'map',
                  key: {},
                  value: {
                    type: 'structure',
                    members: {
                      description: {},
                      componentTypeId: {},
                      properties: {
                        shape: 'S21'
                      },
                      propertyGroups: {
                        shape: 'S24'
                      }
                    }
                  }
                },
                compositeComponents: {
                  type: 'map',
                  key: {},
                  value: {
                    type: 'structure',
                    members: {
                      description: {},
                      properties: {
                        shape: 'S21'
                      },
                      propertyGroups: {
                        shape: 'S24'
                      }
                    }
                  }
                },
                parentEntityId: {},
                tags: {
                  shape: 'S1l'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['entityId', 'arn', 'creationDateTime', 'state'],
              members: {
                entityId: {},
                arn: {},
                creationDateTime: {
                  type: 'timestamp'
                },
                state: {}
              }
            },
            endpoint: {
              hostPrefix: 'api.'
            }
          },
          CreateMetadataTransferJob: {
            http: {
              requestUri: '/metadata-transfer-jobs',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['sources', 'destination'],
              members: {
                metadataTransferJobId: {},
                description: {},
                sources: {
                  shape: 'S2c'
                },
                destination: {
                  shape: 'S2t'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['metadataTransferJobId', 'arn', 'creationDateTime', 'status'],
              members: {
                metadataTransferJobId: {},
                arn: {},
                creationDateTime: {
                  type: 'timestamp'
                },
                status: {
                  shape: 'Sw'
                }
              }
            },
            endpoint: {
              hostPrefix: 'api.'
            }
          },
          CreateScene: {
            http: {
              requestUri: '/workspaces/{workspaceId}/scenes',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['workspaceId', 'sceneId', 'contentLocation'],
              members: {
                workspaceId: {
                  location: 'uri',
                  locationName: 'workspaceId'
                },
                sceneId: {},
                contentLocation: {},
                description: {},
                capabilities: {
                  shape: 'S31'
                },
                tags: {
                  shape: 'S1l'
                },
                sceneMetadata: {
                  shape: 'S33'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['arn', 'creationDateTime'],
              members: {
                arn: {},
                creationDateTime: {
                  type: 'timestamp'
                }
              }
            },
            endpoint: {
              hostPrefix: 'api.'
            }
          },
          CreateSyncJob: {
            http: {
              requestUri: '/workspaces/{workspaceId}/sync-jobs/{syncSource}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['workspaceId', 'syncSource', 'syncRole'],
              members: {
                workspaceId: {
                  location: 'uri',
                  locationName: 'workspaceId'
                },
                syncSource: {
                  location: 'uri',
                  locationName: 'syncSource'
                },
                syncRole: {},
                tags: {
                  shape: 'S1l'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['arn', 'creationDateTime', 'state'],
              members: {
                arn: {},
                creationDateTime: {
                  type: 'timestamp'
                },
                state: {}
              }
            },
            endpoint: {
              hostPrefix: 'api.'
            }
          },
          CreateWorkspace: {
            http: {
              requestUri: '/workspaces/{workspaceId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['workspaceId'],
              members: {
                workspaceId: {
                  location: 'uri',
                  locationName: 'workspaceId'
                },
                description: {},
                s3Location: {},
                role: {},
                tags: {
                  shape: 'S1l'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['arn', 'creationDateTime'],
              members: {
                arn: {},
                creationDateTime: {
                  type: 'timestamp'
                }
              }
            },
            endpoint: {
              hostPrefix: 'api.'
            }
          },
          DeleteComponentType: {
            http: {
              method: 'DELETE',
              requestUri: '/workspaces/{workspaceId}/component-types/{componentTypeId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['workspaceId', 'componentTypeId'],
              members: {
                workspaceId: {
                  location: 'uri',
                  locationName: 'workspaceId'
                },
                componentTypeId: {
                  location: 'uri',
                  locationName: 'componentTypeId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['state'],
              members: {
                state: {}
              }
            },
            endpoint: {
              hostPrefix: 'api.'
            }
          },
          DeleteEntity: {
            http: {
              method: 'DELETE',
              requestUri: '/workspaces/{workspaceId}/entities/{entityId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['workspaceId', 'entityId'],
              members: {
                workspaceId: {
                  location: 'uri',
                  locationName: 'workspaceId'
                },
                entityId: {
                  location: 'uri',
                  locationName: 'entityId'
                },
                isRecursive: {
                  location: 'querystring',
                  locationName: 'isRecursive',
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['state'],
              members: {
                state: {}
              }
            },
            endpoint: {
              hostPrefix: 'api.'
            }
          },
          DeleteScene: {
            http: {
              method: 'DELETE',
              requestUri: '/workspaces/{workspaceId}/scenes/{sceneId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['workspaceId', 'sceneId'],
              members: {
                workspaceId: {
                  location: 'uri',
                  locationName: 'workspaceId'
                },
                sceneId: {
                  location: 'uri',
                  locationName: 'sceneId'
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
          DeleteSyncJob: {
            http: {
              method: 'DELETE',
              requestUri: '/workspaces/{workspaceId}/sync-jobs/{syncSource}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['workspaceId', 'syncSource'],
              members: {
                workspaceId: {
                  location: 'uri',
                  locationName: 'workspaceId'
                },
                syncSource: {
                  location: 'uri',
                  locationName: 'syncSource'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['state'],
              members: {
                state: {}
              }
            },
            endpoint: {
              hostPrefix: 'api.'
            }
          },
          DeleteWorkspace: {
            http: {
              method: 'DELETE',
              requestUri: '/workspaces/{workspaceId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['workspaceId'],
              members: {
                workspaceId: {
                  location: 'uri',
                  locationName: 'workspaceId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                message: {}
              }
            },
            endpoint: {
              hostPrefix: 'api.'
            }
          },
          ExecuteQuery: {
            http: {
              requestUri: '/queries/execution',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['workspaceId', 'queryStatement'],
              members: {
                workspaceId: {},
                queryStatement: {},
                maxResults: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                columnDescriptions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      name: {},
                      type: {}
                    }
                  }
                },
                rows: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      rowData: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {},
                          document: true
                        }
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
          GetComponentType: {
            http: {
              method: 'GET',
              requestUri: '/workspaces/{workspaceId}/component-types/{componentTypeId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['workspaceId', 'componentTypeId'],
              members: {
                workspaceId: {
                  location: 'uri',
                  locationName: 'workspaceId'
                },
                componentTypeId: {
                  location: 'uri',
                  locationName: 'componentTypeId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['workspaceId', 'componentTypeId', 'creationDateTime', 'updateDateTime', 'arn'],
              members: {
                workspaceId: {},
                isSingleton: {
                  type: 'boolean'
                },
                componentTypeId: {},
                description: {},
                propertyDefinitions: {
                  type: 'map',
                  key: {},
                  value: {
                    shape: 'S45'
                  }
                },
                extendsFrom: {
                  shape: 'S1d'
                },
                functions: {
                  type: 'map',
                  key: {},
                  value: {
                    type: 'structure',
                    members: {
                      requiredProperties: {
                        shape: 'S1g'
                      },
                      scope: {},
                      implementedBy: {
                        shape: 'S1i'
                      },
                      isInherited: {
                        type: 'boolean'
                      }
                    }
                  }
                },
                creationDateTime: {
                  type: 'timestamp'
                },
                updateDateTime: {
                  type: 'timestamp'
                },
                arn: {},
                isAbstract: {
                  type: 'boolean'
                },
                isSchemaInitialized: {
                  type: 'boolean'
                },
                status: {
                  shape: 'S48'
                },
                propertyGroups: {
                  type: 'map',
                  key: {},
                  value: {
                    type: 'structure',
                    required: ['groupType', 'propertyNames', 'isInherited'],
                    members: {
                      groupType: {},
                      propertyNames: {
                        shape: 'S1r'
                      },
                      isInherited: {
                        type: 'boolean'
                      }
                    }
                  }
                },
                syncSource: {},
                componentTypeName: {},
                compositeComponentTypes: {
                  type: 'map',
                  key: {},
                  value: {
                    type: 'structure',
                    members: {
                      componentTypeId: {},
                      isInherited: {
                        type: 'boolean'
                      }
                    }
                  }
                }
              }
            },
            endpoint: {
              hostPrefix: 'api.'
            }
          },
          GetEntity: {
            http: {
              method: 'GET',
              requestUri: '/workspaces/{workspaceId}/entities/{entityId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['workspaceId', 'entityId'],
              members: {
                workspaceId: {
                  location: 'uri',
                  locationName: 'workspaceId'
                },
                entityId: {
                  location: 'uri',
                  locationName: 'entityId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['entityId', 'entityName', 'arn', 'status', 'workspaceId', 'parentEntityId', 'hasChildEntities', 'creationDateTime', 'updateDateTime'],
              members: {
                entityId: {},
                entityName: {},
                arn: {},
                status: {
                  shape: 'S48'
                },
                workspaceId: {},
                description: {},
                components: {
                  type: 'map',
                  key: {},
                  value: {
                    type: 'structure',
                    members: {
                      componentName: {},
                      description: {},
                      componentTypeId: {},
                      status: {
                        shape: 'S48'
                      },
                      definedIn: {},
                      properties: {
                        type: 'map',
                        key: {},
                        value: {
                          type: 'structure',
                          members: {
                            definition: {
                              shape: 'S45'
                            },
                            value: {
                              shape: 'Se'
                            },
                            areAllPropertyValuesReturned: {
                              type: 'boolean'
                            }
                          }
                        }
                      },
                      propertyGroups: {
                        shape: 'S4j'
                      },
                      syncSource: {},
                      areAllPropertiesReturned: {
                        type: 'boolean'
                      },
                      compositeComponents: {
                        type: 'map',
                        key: {},
                        value: {
                          shape: 'S4m'
                        }
                      },
                      areAllCompositeComponentsReturned: {
                        type: 'boolean'
                      }
                    }
                  }
                },
                parentEntityId: {},
                hasChildEntities: {
                  type: 'boolean'
                },
                creationDateTime: {
                  type: 'timestamp'
                },
                updateDateTime: {
                  type: 'timestamp'
                },
                syncSource: {},
                areAllComponentsReturned: {
                  type: 'boolean'
                }
              }
            },
            endpoint: {
              hostPrefix: 'api.'
            }
          },
          GetMetadataTransferJob: {
            http: {
              method: 'GET',
              requestUri: '/metadata-transfer-jobs/{metadataTransferJobId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['metadataTransferJobId'],
              members: {
                metadataTransferJobId: {
                  location: 'uri',
                  locationName: 'metadataTransferJobId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['metadataTransferJobId', 'arn', 'sources', 'destination', 'metadataTransferJobRole', 'creationDateTime', 'updateDateTime', 'status'],
              members: {
                metadataTransferJobId: {},
                arn: {},
                description: {},
                sources: {
                  shape: 'S2c'
                },
                destination: {
                  shape: 'S2t'
                },
                metadataTransferJobRole: {},
                reportUrl: {},
                creationDateTime: {
                  type: 'timestamp'
                },
                updateDateTime: {
                  type: 'timestamp'
                },
                status: {
                  shape: 'Sw'
                },
                progress: {
                  shape: 'S11'
                }
              }
            },
            endpoint: {
              hostPrefix: 'api.'
            }
          },
          GetPricingPlan: {
            http: {
              method: 'GET',
              requestUri: '/pricingplan',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              required: ['currentPricingPlan'],
              members: {
                currentPricingPlan: {
                  shape: 'S4r'
                },
                pendingPricingPlan: {
                  shape: 'S4r'
                }
              }
            },
            endpoint: {
              hostPrefix: 'api.'
            }
          },
          GetPropertyValue: {
            http: {
              requestUri: '/workspaces/{workspaceId}/entity-properties/value',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['selectedProperties', 'workspaceId'],
              members: {
                componentName: {},
                componentPath: {},
                componentTypeId: {},
                entityId: {},
                selectedProperties: {
                  shape: 'S4z'
                },
                workspaceId: {
                  location: 'uri',
                  locationName: 'workspaceId'
                },
                maxResults: {
                  type: 'integer'
                },
                nextToken: {},
                propertyGroupName: {},
                tabularConditions: {
                  type: 'structure',
                  members: {
                    orderBy: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        required: ['propertyName'],
                        members: {
                          order: {},
                          propertyName: {}
                        }
                      }
                    },
                    propertyFilters: {
                      shape: 'S55'
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                propertyValues: {
                  type: 'map',
                  key: {},
                  value: {
                    type: 'structure',
                    required: ['propertyReference'],
                    members: {
                      propertyReference: {
                        shape: 'S5'
                      },
                      propertyValue: {
                        shape: 'Se'
                      }
                    }
                  }
                },
                nextToken: {},
                tabularPropertyValues: {
                  type: 'list',
                  member: {
                    type: 'list',
                    member: {
                      type: 'map',
                      key: {},
                      value: {
                        shape: 'Se'
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
          GetPropertyValueHistory: {
            http: {
              requestUri: '/workspaces/{workspaceId}/entity-properties/history',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['workspaceId', 'selectedProperties'],
              members: {
                workspaceId: {
                  location: 'uri',
                  locationName: 'workspaceId'
                },
                entityId: {},
                componentName: {},
                componentPath: {},
                componentTypeId: {},
                selectedProperties: {
                  shape: 'S4z'
                },
                propertyFilters: {
                  shape: 'S55'
                },
                startDateTime: {
                  deprecated: true,
                  deprecatedMessage: 'This field is deprecated and will throw an error in the future. Use startTime instead.',
                  type: 'timestamp'
                },
                endDateTime: {
                  deprecated: true,
                  deprecatedMessage: 'This field is deprecated and will throw an error in the future. Use endTime instead.',
                  type: 'timestamp'
                },
                interpolation: {
                  type: 'structure',
                  members: {
                    interpolationType: {},
                    intervalInSeconds: {
                      type: 'long'
                    }
                  }
                },
                nextToken: {},
                maxResults: {
                  type: 'integer'
                },
                orderByTime: {},
                startTime: {},
                endTime: {}
              }
            },
            output: {
              type: 'structure',
              required: ['propertyValues'],
              members: {
                propertyValues: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['entityPropertyReference'],
                    members: {
                      entityPropertyReference: {
                        shape: 'S5'
                      },
                      values: {
                        type: 'list',
                        member: {
                          shape: 'Sc'
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
          GetScene: {
            http: {
              method: 'GET',
              requestUri: '/workspaces/{workspaceId}/scenes/{sceneId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['workspaceId', 'sceneId'],
              members: {
                workspaceId: {
                  location: 'uri',
                  locationName: 'workspaceId'
                },
                sceneId: {
                  location: 'uri',
                  locationName: 'sceneId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['workspaceId', 'sceneId', 'contentLocation', 'arn', 'creationDateTime', 'updateDateTime'],
              members: {
                workspaceId: {},
                sceneId: {},
                contentLocation: {},
                arn: {},
                creationDateTime: {
                  type: 'timestamp'
                },
                updateDateTime: {
                  type: 'timestamp'
                },
                description: {},
                capabilities: {
                  shape: 'S31'
                },
                sceneMetadata: {
                  shape: 'S33'
                },
                generatedSceneMetadata: {
                  type: 'map',
                  key: {},
                  value: {}
                },
                error: {
                  type: 'structure',
                  members: {
                    code: {},
                    message: {}
                  }
                }
              }
            },
            endpoint: {
              hostPrefix: 'api.'
            }
          },
          GetSyncJob: {
            http: {
              method: 'GET',
              requestUri: '/sync-jobs/{syncSource}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['syncSource'],
              members: {
                syncSource: {
                  location: 'uri',
                  locationName: 'syncSource'
                },
                workspaceId: {
                  location: 'querystring',
                  locationName: 'workspace'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['arn', 'workspaceId', 'syncSource', 'syncRole', 'status', 'creationDateTime', 'updateDateTime'],
              members: {
                arn: {},
                workspaceId: {},
                syncSource: {},
                syncRole: {},
                status: {
                  shape: 'S5t'
                },
                creationDateTime: {
                  type: 'timestamp'
                },
                updateDateTime: {
                  type: 'timestamp'
                }
              }
            },
            endpoint: {
              hostPrefix: 'api.'
            }
          },
          GetWorkspace: {
            http: {
              method: 'GET',
              requestUri: '/workspaces/{workspaceId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['workspaceId'],
              members: {
                workspaceId: {
                  location: 'uri',
                  locationName: 'workspaceId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['workspaceId', 'arn', 'creationDateTime', 'updateDateTime'],
              members: {
                workspaceId: {},
                arn: {},
                description: {},
                linkedServices: {
                  shape: 'S5x'
                },
                s3Location: {},
                role: {},
                creationDateTime: {
                  type: 'timestamp'
                },
                updateDateTime: {
                  type: 'timestamp'
                }
              }
            },
            endpoint: {
              hostPrefix: 'api.'
            }
          },
          ListComponentTypes: {
            http: {
              requestUri: '/workspaces/{workspaceId}/component-types-list',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['workspaceId'],
              members: {
                workspaceId: {
                  location: 'uri',
                  locationName: 'workspaceId'
                },
                filters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      extendsFrom: {},
                      namespace: {},
                      isAbstract: {
                        type: 'boolean'
                      }
                    },
                    union: true
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
              required: ['workspaceId', 'componentTypeSummaries'],
              members: {
                workspaceId: {},
                componentTypeSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['arn', 'componentTypeId', 'creationDateTime', 'updateDateTime'],
                    members: {
                      arn: {},
                      componentTypeId: {},
                      creationDateTime: {
                        type: 'timestamp'
                      },
                      updateDateTime: {
                        type: 'timestamp'
                      },
                      description: {},
                      status: {
                        shape: 'S48'
                      },
                      componentTypeName: {}
                    }
                  }
                },
                nextToken: {},
                maxResults: {
                  type: 'integer'
                }
              }
            },
            endpoint: {
              hostPrefix: 'api.'
            }
          },
          ListComponents: {
            http: {
              requestUri: '/workspaces/{workspaceId}/entities/{entityId}/components-list',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['workspaceId', 'entityId'],
              members: {
                workspaceId: {
                  location: 'uri',
                  locationName: 'workspaceId'
                },
                entityId: {
                  location: 'uri',
                  locationName: 'entityId'
                },
                componentPath: {},
                maxResults: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              required: ['componentSummaries'],
              members: {
                componentSummaries: {
                  type: 'list',
                  member: {
                    shape: 'S4m'
                  }
                },
                nextToken: {}
              }
            },
            endpoint: {
              hostPrefix: 'api.'
            }
          },
          ListEntities: {
            http: {
              requestUri: '/workspaces/{workspaceId}/entities-list',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['workspaceId'],
              members: {
                workspaceId: {
                  location: 'uri',
                  locationName: 'workspaceId'
                },
                filters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      parentEntityId: {},
                      componentTypeId: {},
                      externalId: {}
                    },
                    union: true
                  }
                },
                maxResults: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                entitySummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['entityId', 'entityName', 'arn', 'status', 'creationDateTime', 'updateDateTime'],
                    members: {
                      entityId: {},
                      entityName: {},
                      arn: {},
                      parentEntityId: {},
                      status: {
                        shape: 'S48'
                      },
                      description: {},
                      hasChildEntities: {
                        type: 'boolean'
                      },
                      creationDateTime: {
                        type: 'timestamp'
                      },
                      updateDateTime: {
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
          ListMetadataTransferJobs: {
            http: {
              requestUri: '/metadata-transfer-jobs-list',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['sourceType', 'destinationType'],
              members: {
                sourceType: {},
                destinationType: {},
                filters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      workspaceId: {},
                      state: {}
                    },
                    union: true
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
              required: ['metadataTransferJobSummaries'],
              members: {
                metadataTransferJobSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['metadataTransferJobId', 'arn', 'creationDateTime', 'updateDateTime', 'status'],
                    members: {
                      metadataTransferJobId: {},
                      arn: {},
                      creationDateTime: {
                        type: 'timestamp'
                      },
                      updateDateTime: {
                        type: 'timestamp'
                      },
                      status: {
                        shape: 'Sw'
                      },
                      progress: {
                        shape: 'S11'
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
          ListProperties: {
            http: {
              requestUri: '/workspaces/{workspaceId}/properties-list',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['workspaceId', 'entityId'],
              members: {
                workspaceId: {
                  location: 'uri',
                  locationName: 'workspaceId'
                },
                componentName: {},
                componentPath: {},
                entityId: {},
                maxResults: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              required: ['propertySummaries'],
              members: {
                propertySummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['propertyName'],
                    members: {
                      definition: {
                        shape: 'S45'
                      },
                      propertyName: {},
                      value: {
                        shape: 'Se'
                      },
                      areAllPropertyValuesReturned: {
                        type: 'boolean'
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
          ListScenes: {
            http: {
              requestUri: '/workspaces/{workspaceId}/scenes-list',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['workspaceId'],
              members: {
                workspaceId: {
                  location: 'uri',
                  locationName: 'workspaceId'
                },
                maxResults: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                sceneSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['sceneId', 'contentLocation', 'arn', 'creationDateTime', 'updateDateTime'],
                    members: {
                      sceneId: {},
                      contentLocation: {},
                      arn: {},
                      creationDateTime: {
                        type: 'timestamp'
                      },
                      updateDateTime: {
                        type: 'timestamp'
                      },
                      description: {}
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
          ListSyncJobs: {
            http: {
              requestUri: '/workspaces/{workspaceId}/sync-jobs-list',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['workspaceId'],
              members: {
                workspaceId: {
                  location: 'uri',
                  locationName: 'workspaceId'
                },
                maxResults: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                syncJobSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      arn: {},
                      workspaceId: {},
                      syncSource: {},
                      status: {
                        shape: 'S5t'
                      },
                      creationDateTime: {
                        type: 'timestamp'
                      },
                      updateDateTime: {
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
          ListSyncResources: {
            http: {
              requestUri: '/workspaces/{workspaceId}/sync-jobs/{syncSource}/resources-list',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['workspaceId', 'syncSource'],
              members: {
                workspaceId: {
                  location: 'uri',
                  locationName: 'workspaceId'
                },
                syncSource: {
                  location: 'uri',
                  locationName: 'syncSource'
                },
                filters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      state: {},
                      resourceType: {},
                      resourceId: {},
                      externalId: {}
                    },
                    union: true
                  }
                },
                maxResults: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                syncResources: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      resourceType: {},
                      externalId: {},
                      resourceId: {},
                      status: {
                        type: 'structure',
                        members: {
                          state: {},
                          error: {
                            shape: 'Sy'
                          }
                        }
                      },
                      updateDateTime: {
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
          ListTagsForResource: {
            http: {
              requestUri: '/tags-list',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['resourceARN'],
              members: {
                resourceARN: {},
                maxResults: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                tags: {
                  shape: 'S1l'
                },
                nextToken: {}
              }
            },
            endpoint: {
              hostPrefix: 'api.'
            }
          },
          ListWorkspaces: {
            http: {
              requestUri: '/workspaces-list',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                maxResults: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                workspaceSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['workspaceId', 'arn', 'creationDateTime', 'updateDateTime'],
                    members: {
                      workspaceId: {},
                      arn: {},
                      description: {},
                      linkedServices: {
                        shape: 'S5x'
                      },
                      creationDateTime: {
                        type: 'timestamp'
                      },
                      updateDateTime: {
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
          TagResource: {
            http: {
              requestUri: '/tags',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['resourceARN', 'tags'],
              members: {
                resourceARN: {},
                tags: {
                  shape: 'S1l'
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
              requestUri: '/tags',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['resourceARN', 'tagKeys'],
              members: {
                resourceARN: {
                  location: 'querystring',
                  locationName: 'resourceARN'
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
          UpdateComponentType: {
            http: {
              method: 'PUT',
              requestUri: '/workspaces/{workspaceId}/component-types/{componentTypeId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['workspaceId', 'componentTypeId'],
              members: {
                workspaceId: {
                  location: 'uri',
                  locationName: 'workspaceId'
                },
                isSingleton: {
                  type: 'boolean'
                },
                componentTypeId: {
                  location: 'uri',
                  locationName: 'componentTypeId'
                },
                description: {},
                propertyDefinitions: {
                  shape: 'S15'
                },
                extendsFrom: {
                  shape: 'S1d'
                },
                functions: {
                  shape: 'S1e'
                },
                propertyGroups: {
                  shape: 'S1o'
                },
                componentTypeName: {},
                compositeComponentTypes: {
                  shape: 'S1t'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['workspaceId', 'arn', 'componentTypeId', 'state'],
              members: {
                workspaceId: {},
                arn: {},
                componentTypeId: {},
                state: {}
              }
            },
            endpoint: {
              hostPrefix: 'api.'
            }
          },
          UpdateEntity: {
            http: {
              method: 'PUT',
              requestUri: '/workspaces/{workspaceId}/entities/{entityId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['workspaceId', 'entityId'],
              members: {
                workspaceId: {
                  location: 'uri',
                  locationName: 'workspaceId'
                },
                entityId: {
                  location: 'uri',
                  locationName: 'entityId'
                },
                entityName: {},
                description: {},
                componentUpdates: {
                  type: 'map',
                  key: {},
                  value: {
                    type: 'structure',
                    members: {
                      updateType: {},
                      description: {},
                      componentTypeId: {},
                      propertyUpdates: {
                        shape: 'S21'
                      },
                      propertyGroupUpdates: {
                        shape: 'S24'
                      }
                    }
                  }
                },
                compositeComponentUpdates: {
                  type: 'map',
                  key: {},
                  value: {
                    type: 'structure',
                    members: {
                      updateType: {},
                      description: {},
                      propertyUpdates: {
                        shape: 'S21'
                      },
                      propertyGroupUpdates: {
                        shape: 'S24'
                      }
                    }
                  }
                },
                parentEntityUpdate: {
                  type: 'structure',
                  required: ['updateType'],
                  members: {
                    updateType: {},
                    parentEntityId: {}
                  }
                }
              }
            },
            output: {
              type: 'structure',
              required: ['updateDateTime', 'state'],
              members: {
                updateDateTime: {
                  type: 'timestamp'
                },
                state: {}
              }
            },
            endpoint: {
              hostPrefix: 'api.'
            }
          },
          UpdatePricingPlan: {
            http: {
              requestUri: '/pricingplan',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['pricingMode'],
              members: {
                pricingMode: {},
                bundleNames: {
                  shape: 'S4t'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['currentPricingPlan'],
              members: {
                currentPricingPlan: {
                  shape: 'S4r'
                },
                pendingPricingPlan: {
                  shape: 'S4r'
                }
              }
            },
            endpoint: {
              hostPrefix: 'api.'
            }
          },
          UpdateScene: {
            http: {
              method: 'PUT',
              requestUri: '/workspaces/{workspaceId}/scenes/{sceneId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['workspaceId', 'sceneId'],
              members: {
                workspaceId: {
                  location: 'uri',
                  locationName: 'workspaceId'
                },
                sceneId: {
                  location: 'uri',
                  locationName: 'sceneId'
                },
                contentLocation: {},
                description: {},
                capabilities: {
                  shape: 'S31'
                },
                sceneMetadata: {
                  shape: 'S33'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['updateDateTime'],
              members: {
                updateDateTime: {
                  type: 'timestamp'
                }
              }
            },
            endpoint: {
              hostPrefix: 'api.'
            }
          },
          UpdateWorkspace: {
            http: {
              method: 'PUT',
              requestUri: '/workspaces/{workspaceId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['workspaceId'],
              members: {
                workspaceId: {
                  location: 'uri',
                  locationName: 'workspaceId'
                },
                description: {},
                role: {},
                s3Location: {}
              }
            },
            output: {
              type: 'structure',
              required: ['updateDateTime'],
              members: {
                updateDateTime: {
                  type: 'timestamp'
                }
              }
            },
            endpoint: {
              hostPrefix: 'api.'
            }
          }
        },
        shapes: {
          S4: {
            type: 'structure',
            required: ['entityPropertyReference'],
            members: {
              entityPropertyReference: {
                shape: 'S5'
              },
              propertyValues: {
                type: 'list',
                member: {
                  shape: 'Sc'
                }
              }
            }
          },
          S5: {
            type: 'structure',
            required: ['propertyName'],
            members: {
              componentName: {},
              componentPath: {},
              externalIdProperty: {
                type: 'map',
                key: {},
                value: {}
              },
              entityId: {},
              propertyName: {}
            }
          },
          Sc: {
            type: 'structure',
            required: ['value'],
            members: {
              timestamp: {
                deprecated: true,
                deprecatedMessage: 'This field is deprecated and will throw an error in the future. Use time instead.',
                type: 'timestamp'
              },
              value: {
                shape: 'Se'
              },
              time: {}
            }
          },
          Se: {
            type: 'structure',
            members: {
              booleanValue: {
                type: 'boolean'
              },
              doubleValue: {
                type: 'double'
              },
              integerValue: {
                type: 'integer'
              },
              longValue: {
                type: 'long'
              },
              stringValue: {},
              listValue: {
                shape: 'Sj'
              },
              mapValue: {
                type: 'map',
                key: {},
                value: {
                  shape: 'Se'
                }
              },
              relationshipValue: {
                type: 'structure',
                members: {
                  targetEntityId: {},
                  targetComponentName: {}
                }
              },
              expression: {}
            }
          },
          Sj: {
            type: 'list',
            member: {
              shape: 'Se'
            }
          },
          Sw: {
            type: 'structure',
            members: {
              state: {},
              error: {
                shape: 'Sy'
              },
              queuedPosition: {
                type: 'integer'
              }
            }
          },
          Sy: {
            type: 'structure',
            members: {
              code: {},
              message: {}
            }
          },
          S11: {
            type: 'structure',
            members: {
              totalCount: {
                type: 'integer'
              },
              succeededCount: {
                type: 'integer'
              },
              skippedCount: {
                type: 'integer'
              },
              failedCount: {
                type: 'integer'
              }
            }
          },
          S15: {
            type: 'map',
            key: {},
            value: {
              shape: 'S16'
            }
          },
          S16: {
            type: 'structure',
            members: {
              dataType: {
                shape: 'S17'
              },
              isRequiredInEntity: {
                type: 'boolean'
              },
              isExternalId: {
                type: 'boolean'
              },
              isStoredExternally: {
                type: 'boolean'
              },
              isTimeSeries: {
                type: 'boolean'
              },
              defaultValue: {
                shape: 'Se'
              },
              configuration: {
                shape: 'S1a'
              },
              displayName: {}
            }
          },
          S17: {
            type: 'structure',
            required: ['type'],
            members: {
              type: {},
              nestedType: {
                shape: 'S17'
              },
              allowedValues: {
                shape: 'Sj'
              },
              unitOfMeasure: {},
              relationship: {
                type: 'structure',
                members: {
                  targetComponentTypeId: {},
                  relationshipType: {}
                }
              }
            }
          },
          S1a: {
            type: 'map',
            key: {},
            value: {}
          },
          S1d: {
            type: 'list',
            member: {}
          },
          S1e: {
            type: 'map',
            key: {},
            value: {
              type: 'structure',
              members: {
                requiredProperties: {
                  shape: 'S1g'
                },
                scope: {},
                implementedBy: {
                  shape: 'S1i'
                }
              }
            }
          },
          S1g: {
            type: 'list',
            member: {}
          },
          S1i: {
            type: 'structure',
            members: {
              lambda: {
                type: 'structure',
                required: ['arn'],
                members: {
                  arn: {}
                }
              },
              isNative: {
                type: 'boolean'
              }
            }
          },
          S1l: {
            type: 'map',
            key: {},
            value: {}
          },
          S1o: {
            type: 'map',
            key: {},
            value: {
              type: 'structure',
              members: {
                groupType: {},
                propertyNames: {
                  shape: 'S1r'
                }
              }
            }
          },
          S1r: {
            type: 'list',
            member: {}
          },
          S1t: {
            type: 'map',
            key: {},
            value: {
              type: 'structure',
              members: {
                componentTypeId: {}
              }
            }
          },
          S21: {
            type: 'map',
            key: {},
            value: {
              type: 'structure',
              members: {
                definition: {
                  shape: 'S16'
                },
                value: {
                  shape: 'Se'
                },
                updateType: {}
              }
            }
          },
          S24: {
            type: 'map',
            key: {},
            value: {
              type: 'structure',
              members: {
                groupType: {},
                propertyNames: {
                  shape: 'S1r'
                },
                updateType: {}
              }
            }
          },
          S2c: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['type'],
              members: {
                type: {},
                s3Configuration: {
                  type: 'structure',
                  required: ['location'],
                  members: {
                    location: {}
                  }
                },
                iotSiteWiseConfiguration: {
                  type: 'structure',
                  members: {
                    filters: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          filterByAssetModel: {
                            type: 'structure',
                            members: {
                              assetModelId: {},
                              assetModelExternalId: {},
                              includeOffspring: {
                                type: 'boolean'
                              },
                              includeAssets: {
                                type: 'boolean'
                              }
                            }
                          },
                          filterByAsset: {
                            type: 'structure',
                            members: {
                              assetId: {},
                              assetExternalId: {},
                              includeOffspring: {
                                type: 'boolean'
                              },
                              includeAssetModel: {
                                type: 'boolean'
                              }
                            }
                          }
                        },
                        union: true
                      }
                    }
                  }
                },
                iotTwinMakerConfiguration: {
                  type: 'structure',
                  required: ['workspace'],
                  members: {
                    workspace: {},
                    filters: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          filterByComponentType: {
                            type: 'structure',
                            required: ['componentTypeId'],
                            members: {
                              componentTypeId: {}
                            }
                          },
                          filterByEntity: {
                            type: 'structure',
                            required: ['entityId'],
                            members: {
                              entityId: {}
                            }
                          }
                        },
                        union: true
                      }
                    }
                  }
                }
              }
            }
          },
          S2t: {
            type: 'structure',
            required: ['type'],
            members: {
              type: {},
              s3Configuration: {
                type: 'structure',
                required: ['location'],
                members: {
                  location: {}
                }
              },
              iotTwinMakerConfiguration: {
                type: 'structure',
                required: ['workspace'],
                members: {
                  workspace: {}
                }
              }
            }
          },
          S31: {
            type: 'list',
            member: {}
          },
          S33: {
            type: 'map',
            key: {},
            value: {}
          },
          S45: {
            type: 'structure',
            required: ['dataType', 'isTimeSeries', 'isRequiredInEntity', 'isExternalId', 'isStoredExternally', 'isImported', 'isFinal', 'isInherited'],
            members: {
              dataType: {
                shape: 'S17'
              },
              isTimeSeries: {
                type: 'boolean'
              },
              isRequiredInEntity: {
                type: 'boolean'
              },
              isExternalId: {
                type: 'boolean'
              },
              isStoredExternally: {
                type: 'boolean'
              },
              isImported: {
                type: 'boolean'
              },
              isFinal: {
                type: 'boolean'
              },
              isInherited: {
                type: 'boolean'
              },
              defaultValue: {
                shape: 'Se'
              },
              configuration: {
                shape: 'S1a'
              },
              displayName: {}
            }
          },
          S48: {
            type: 'structure',
            members: {
              state: {},
              error: {
                shape: 'Sy'
              }
            }
          },
          S4j: {
            type: 'map',
            key: {},
            value: {
              type: 'structure',
              required: ['groupType', 'propertyNames', 'isInherited'],
              members: {
                groupType: {},
                propertyNames: {
                  shape: 'S1r'
                },
                isInherited: {
                  type: 'boolean'
                }
              }
            }
          },
          S4m: {
            type: 'structure',
            required: ['componentName', 'componentTypeId', 'status'],
            members: {
              componentName: {},
              componentTypeId: {},
              definedIn: {},
              description: {},
              propertyGroups: {
                shape: 'S4j'
              },
              status: {
                shape: 'S48'
              },
              syncSource: {},
              componentPath: {}
            }
          },
          S4r: {
            type: 'structure',
            required: ['effectiveDateTime', 'pricingMode', 'updateDateTime', 'updateReason'],
            members: {
              billableEntityCount: {
                type: 'long'
              },
              bundleInformation: {
                type: 'structure',
                required: ['bundleNames'],
                members: {
                  bundleNames: {
                    shape: 'S4t'
                  },
                  pricingTier: {}
                }
              },
              effectiveDateTime: {
                type: 'timestamp'
              },
              pricingMode: {},
              updateDateTime: {
                type: 'timestamp'
              },
              updateReason: {}
            }
          },
          S4t: {
            type: 'list',
            member: {}
          },
          S4z: {
            type: 'list',
            member: {}
          },
          S55: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                propertyName: {},
                operator: {},
                value: {
                  shape: 'Se'
                }
              }
            }
          },
          S5t: {
            type: 'structure',
            members: {
              state: {},
              error: {
                shape: 'Sy'
              }
            }
          },
          S5x: {
            type: 'list',
            member: {}
          }
        }
      });
    }
  };
});
//# sourceMappingURL=073424114dc31da5c4a63d3f80b4c1da8c1248a0.js.map