System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2020-11-30',
          endpointPrefix: 'greengrass',
          protocol: 'rest-json',
          protocols: ['rest-json'],
          serviceAbbreviation: 'AWS GreengrassV2',
          serviceFullName: 'AWS IoT Greengrass V2',
          serviceId: 'GreengrassV2',
          signatureVersion: 'v4',
          uid: 'greengrassv2-2020-11-30'
        },
        operations: {
          AssociateServiceRoleToAccount: {
            http: {
              method: 'PUT',
              requestUri: '/greengrass/servicerole',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['roleArn'],
              members: {
                roleArn: {
                  locationName: 'RoleArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                associatedAt: {
                  locationName: 'AssociatedAt'
                }
              }
            }
          },
          BatchAssociateClientDeviceWithCoreDevice: {
            http: {
              requestUri: '/greengrass/v2/coreDevices/{coreDeviceThingName}/associateClientDevices',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['coreDeviceThingName'],
              members: {
                entries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['thingName'],
                    members: {
                      thingName: {}
                    }
                  }
                },
                coreDeviceThingName: {
                  location: 'uri',
                  locationName: 'coreDeviceThingName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                errorEntries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      thingName: {},
                      code: {},
                      message: {}
                    }
                  }
                }
              }
            }
          },
          BatchDisassociateClientDeviceFromCoreDevice: {
            http: {
              requestUri: '/greengrass/v2/coreDevices/{coreDeviceThingName}/disassociateClientDevices',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['coreDeviceThingName'],
              members: {
                entries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['thingName'],
                    members: {
                      thingName: {}
                    }
                  }
                },
                coreDeviceThingName: {
                  location: 'uri',
                  locationName: 'coreDeviceThingName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                errorEntries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      thingName: {},
                      code: {},
                      message: {}
                    }
                  }
                }
              }
            }
          },
          CancelDeployment: {
            http: {
              requestUri: '/greengrass/v2/deployments/{deploymentId}/cancel'
            },
            input: {
              type: 'structure',
              required: ['deploymentId'],
              members: {
                deploymentId: {
                  location: 'uri',
                  locationName: 'deploymentId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                message: {}
              }
            }
          },
          CreateComponentVersion: {
            http: {
              requestUri: '/greengrass/v2/createComponentVersion',
              responseCode: 201
            },
            input: {
              type: 'structure',
              members: {
                inlineRecipe: {
                  type: 'blob'
                },
                lambdaFunction: {
                  type: 'structure',
                  required: ['lambdaArn'],
                  members: {
                    lambdaArn: {},
                    componentName: {},
                    componentVersion: {},
                    componentPlatforms: {
                      shape: 'Sp'
                    },
                    componentDependencies: {
                      type: 'map',
                      key: {},
                      value: {
                        type: 'structure',
                        members: {
                          versionRequirement: {},
                          dependencyType: {}
                        }
                      }
                    },
                    componentLambdaParameters: {
                      type: 'structure',
                      members: {
                        eventSources: {
                          type: 'list',
                          member: {
                            type: 'structure',
                            required: ['topic', 'type'],
                            members: {
                              topic: {},
                              type: {}
                            }
                          }
                        },
                        maxQueueSize: {
                          type: 'integer'
                        },
                        maxInstancesCount: {
                          type: 'integer'
                        },
                        maxIdleTimeInSeconds: {
                          type: 'integer'
                        },
                        timeoutInSeconds: {
                          type: 'integer'
                        },
                        statusTimeoutInSeconds: {
                          type: 'integer'
                        },
                        pinned: {
                          type: 'boolean'
                        },
                        inputPayloadEncodingType: {},
                        execArgs: {
                          type: 'list',
                          member: {}
                        },
                        environmentVariables: {
                          type: 'map',
                          key: {},
                          value: {}
                        },
                        linuxProcessParams: {
                          type: 'structure',
                          members: {
                            isolationMode: {},
                            containerParams: {
                              type: 'structure',
                              members: {
                                memorySizeInKB: {
                                  type: 'integer'
                                },
                                mountROSysfs: {
                                  type: 'boolean'
                                },
                                volumes: {
                                  type: 'list',
                                  member: {
                                    type: 'structure',
                                    required: ['sourcePath', 'destinationPath'],
                                    members: {
                                      sourcePath: {},
                                      destinationPath: {},
                                      permission: {},
                                      addGroupOwner: {
                                        type: 'boolean'
                                      }
                                    }
                                  }
                                },
                                devices: {
                                  type: 'list',
                                  member: {
                                    type: 'structure',
                                    required: ['path'],
                                    members: {
                                      path: {},
                                      permission: {},
                                      addGroupOwner: {
                                        type: 'boolean'
                                      }
                                    }
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
                tags: {
                  shape: 'S1f'
                },
                clientToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              required: ['componentName', 'componentVersion', 'creationTimestamp', 'status'],
              members: {
                arn: {},
                componentName: {},
                componentVersion: {},
                creationTimestamp: {
                  type: 'timestamp'
                },
                status: {
                  shape: 'S1m'
                }
              }
            }
          },
          CreateDeployment: {
            http: {
              requestUri: '/greengrass/v2/deployments',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['targetArn'],
              members: {
                targetArn: {},
                deploymentName: {},
                components: {
                  shape: 'S1t'
                },
                iotJobConfiguration: {
                  shape: 'S23'
                },
                deploymentPolicies: {
                  shape: 'S2k'
                },
                parentTargetArn: {},
                tags: {
                  shape: 'S1f'
                },
                clientToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                deploymentId: {},
                iotJobId: {},
                iotJobArn: {}
              }
            }
          },
          DeleteComponent: {
            http: {
              method: 'DELETE',
              requestUri: '/greengrass/v2/components/{arn}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['arn'],
              members: {
                arn: {
                  location: 'uri',
                  locationName: 'arn'
                }
              }
            }
          },
          DeleteCoreDevice: {
            http: {
              method: 'DELETE',
              requestUri: '/greengrass/v2/coreDevices/{coreDeviceThingName}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['coreDeviceThingName'],
              members: {
                coreDeviceThingName: {
                  location: 'uri',
                  locationName: 'coreDeviceThingName'
                }
              }
            }
          },
          DeleteDeployment: {
            http: {
              method: 'DELETE',
              requestUri: '/greengrass/v2/deployments/{deploymentId}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['deploymentId'],
              members: {
                deploymentId: {
                  location: 'uri',
                  locationName: 'deploymentId'
                }
              }
            }
          },
          DescribeComponent: {
            http: {
              method: 'GET',
              requestUri: '/greengrass/v2/components/{arn}/metadata'
            },
            input: {
              type: 'structure',
              required: ['arn'],
              members: {
                arn: {
                  location: 'uri',
                  locationName: 'arn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                arn: {},
                componentName: {},
                componentVersion: {},
                creationTimestamp: {
                  type: 'timestamp'
                },
                publisher: {},
                description: {},
                status: {
                  shape: 'S1m'
                },
                platforms: {
                  shape: 'Sp'
                },
                tags: {
                  shape: 'S1f'
                }
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
                disassociatedAt: {
                  locationName: 'DisassociatedAt'
                }
              }
            }
          },
          GetComponent: {
            http: {
              method: 'GET',
              requestUri: '/greengrass/v2/components/{arn}'
            },
            input: {
              type: 'structure',
              required: ['arn'],
              members: {
                recipeOutputFormat: {
                  location: 'querystring',
                  locationName: 'recipeOutputFormat'
                },
                arn: {
                  location: 'uri',
                  locationName: 'arn'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['recipeOutputFormat', 'recipe'],
              members: {
                recipeOutputFormat: {},
                recipe: {
                  type: 'blob'
                },
                tags: {
                  shape: 'S1f'
                }
              }
            }
          },
          GetComponentVersionArtifact: {
            http: {
              method: 'GET',
              requestUri: '/greengrass/v2/components/{arn}/artifacts/{artifactName+}'
            },
            input: {
              type: 'structure',
              required: ['arn', 'artifactName'],
              members: {
                arn: {
                  location: 'uri',
                  locationName: 'arn'
                },
                artifactName: {
                  location: 'uri',
                  locationName: 'artifactName'
                },
                s3EndpointType: {
                  location: 'querystring',
                  locationName: 's3EndpointType'
                },
                iotEndpointType: {
                  location: 'header',
                  locationName: 'x-amz-iot-endpoint-type'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['preSignedUrl'],
              members: {
                preSignedUrl: {}
              }
            }
          },
          GetConnectivityInfo: {
            http: {
              method: 'GET',
              requestUri: '/greengrass/things/{thingName}/connectivityInfo',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['thingName'],
              members: {
                thingName: {
                  location: 'uri',
                  locationName: 'thingName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                connectivityInfo: {
                  shape: 'S3b',
                  locationName: 'ConnectivityInfo'
                },
                message: {
                  locationName: 'Message'
                }
              }
            }
          },
          GetCoreDevice: {
            http: {
              method: 'GET',
              requestUri: '/greengrass/v2/coreDevices/{coreDeviceThingName}'
            },
            input: {
              type: 'structure',
              required: ['coreDeviceThingName'],
              members: {
                coreDeviceThingName: {
                  location: 'uri',
                  locationName: 'coreDeviceThingName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                coreDeviceThingName: {},
                coreVersion: {},
                platform: {},
                architecture: {},
                status: {},
                lastStatusUpdateTimestamp: {
                  type: 'timestamp'
                },
                tags: {
                  shape: 'S1f'
                }
              }
            }
          },
          GetDeployment: {
            http: {
              method: 'GET',
              requestUri: '/greengrass/v2/deployments/{deploymentId}'
            },
            input: {
              type: 'structure',
              required: ['deploymentId'],
              members: {
                deploymentId: {
                  location: 'uri',
                  locationName: 'deploymentId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                targetArn: {},
                revisionId: {},
                deploymentId: {},
                deploymentName: {},
                deploymentStatus: {},
                iotJobId: {},
                iotJobArn: {},
                components: {
                  shape: 'S1t'
                },
                deploymentPolicies: {
                  shape: 'S2k'
                },
                iotJobConfiguration: {
                  shape: 'S23'
                },
                creationTimestamp: {
                  type: 'timestamp'
                },
                isLatestForTarget: {
                  type: 'boolean'
                },
                parentTargetArn: {},
                tags: {
                  shape: 'S1f'
                }
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
                associatedAt: {
                  locationName: 'AssociatedAt'
                },
                roleArn: {
                  locationName: 'RoleArn'
                }
              }
            }
          },
          ListClientDevicesAssociatedWithCoreDevice: {
            http: {
              method: 'GET',
              requestUri: '/greengrass/v2/coreDevices/{coreDeviceThingName}/associatedClientDevices',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['coreDeviceThingName'],
              members: {
                coreDeviceThingName: {
                  location: 'uri',
                  locationName: 'coreDeviceThingName'
                },
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
              members: {
                associatedClientDevices: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      thingName: {},
                      associationTimestamp: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListComponentVersions: {
            http: {
              method: 'GET',
              requestUri: '/greengrass/v2/components/{arn}/versions'
            },
            input: {
              type: 'structure',
              required: ['arn'],
              members: {
                arn: {
                  location: 'uri',
                  locationName: 'arn'
                },
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
              members: {
                componentVersions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      componentName: {},
                      componentVersion: {},
                      arn: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListComponents: {
            http: {
              method: 'GET',
              requestUri: '/greengrass/v2/components'
            },
            input: {
              type: 'structure',
              members: {
                scope: {
                  location: 'querystring',
                  locationName: 'scope'
                },
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
              members: {
                components: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      arn: {},
                      componentName: {},
                      latestVersion: {
                        type: 'structure',
                        members: {
                          arn: {},
                          componentVersion: {},
                          creationTimestamp: {
                            type: 'timestamp'
                          },
                          description: {},
                          publisher: {},
                          platforms: {
                            shape: 'Sp'
                          }
                        }
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListCoreDevices: {
            http: {
              method: 'GET',
              requestUri: '/greengrass/v2/coreDevices'
            },
            input: {
              type: 'structure',
              members: {
                thingGroupArn: {
                  location: 'querystring',
                  locationName: 'thingGroupArn'
                },
                status: {
                  location: 'querystring',
                  locationName: 'status'
                },
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
              members: {
                coreDevices: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      coreDeviceThingName: {},
                      status: {},
                      lastStatusUpdateTimestamp: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListDeployments: {
            http: {
              method: 'GET',
              requestUri: '/greengrass/v2/deployments'
            },
            input: {
              type: 'structure',
              members: {
                targetArn: {
                  location: 'querystring',
                  locationName: 'targetArn'
                },
                historyFilter: {
                  location: 'querystring',
                  locationName: 'historyFilter'
                },
                parentTargetArn: {
                  location: 'querystring',
                  locationName: 'parentTargetArn'
                },
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
              members: {
                deployments: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      targetArn: {},
                      revisionId: {},
                      deploymentId: {},
                      deploymentName: {},
                      creationTimestamp: {
                        type: 'timestamp'
                      },
                      deploymentStatus: {},
                      isLatestForTarget: {
                        type: 'boolean'
                      },
                      parentTargetArn: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListEffectiveDeployments: {
            http: {
              method: 'GET',
              requestUri: '/greengrass/v2/coreDevices/{coreDeviceThingName}/effectiveDeployments'
            },
            input: {
              type: 'structure',
              required: ['coreDeviceThingName'],
              members: {
                coreDeviceThingName: {
                  location: 'uri',
                  locationName: 'coreDeviceThingName'
                },
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
              members: {
                effectiveDeployments: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['deploymentId', 'deploymentName', 'targetArn', 'coreDeviceExecutionStatus', 'creationTimestamp', 'modifiedTimestamp'],
                    members: {
                      deploymentId: {},
                      deploymentName: {},
                      iotJobId: {},
                      iotJobArn: {},
                      description: {},
                      targetArn: {},
                      coreDeviceExecutionStatus: {},
                      reason: {},
                      creationTimestamp: {
                        type: 'timestamp'
                      },
                      modifiedTimestamp: {
                        type: 'timestamp'
                      },
                      statusDetails: {
                        type: 'structure',
                        members: {
                          errorStack: {
                            type: 'list',
                            member: {}
                          },
                          errorTypes: {
                            type: 'list',
                            member: {}
                          }
                        }
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListInstalledComponents: {
            http: {
              method: 'GET',
              requestUri: '/greengrass/v2/coreDevices/{coreDeviceThingName}/installedComponents'
            },
            input: {
              type: 'structure',
              required: ['coreDeviceThingName'],
              members: {
                coreDeviceThingName: {
                  location: 'uri',
                  locationName: 'coreDeviceThingName'
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
                topologyFilter: {
                  location: 'querystring',
                  locationName: 'topologyFilter'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                installedComponents: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      componentName: {},
                      componentVersion: {},
                      lifecycleState: {},
                      lifecycleStateDetails: {},
                      isRoot: {
                        type: 'boolean'
                      },
                      lastStatusChangeTimestamp: {
                        type: 'timestamp'
                      },
                      lastReportedTimestamp: {
                        type: 'timestamp'
                      },
                      lastInstallationSource: {},
                      lifecycleStatusCodes: {
                        type: 'list',
                        member: {}
                      }
                    }
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
                  shape: 'S1f'
                }
              }
            }
          },
          ResolveComponentCandidates: {
            http: {
              requestUri: '/greengrass/v2/resolveComponentCandidates'
            },
            input: {
              type: 'structure',
              members: {
                platform: {
                  shape: 'Sq'
                },
                componentCandidates: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      componentName: {},
                      componentVersion: {},
                      versionRequirements: {
                        type: 'map',
                        key: {},
                        value: {}
                      }
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                resolvedComponentVersions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      arn: {},
                      componentName: {},
                      componentVersion: {},
                      recipe: {
                        type: 'blob'
                      },
                      vendorGuidance: {},
                      message: {}
                    }
                  }
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
                  shape: 'S1f'
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
          UpdateConnectivityInfo: {
            http: {
              method: 'PUT',
              requestUri: '/greengrass/things/{thingName}/connectivityInfo',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['thingName', 'connectivityInfo'],
              members: {
                thingName: {
                  location: 'uri',
                  locationName: 'thingName'
                },
                connectivityInfo: {
                  shape: 'S3b',
                  locationName: 'ConnectivityInfo'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                version: {
                  locationName: 'Version'
                },
                message: {
                  locationName: 'Message'
                }
              }
            }
          }
        },
        shapes: {
          Sp: {
            type: 'list',
            member: {
              shape: 'Sq'
            }
          },
          Sq: {
            type: 'structure',
            members: {
              name: {},
              attributes: {
                type: 'map',
                key: {},
                value: {}
              }
            }
          },
          S1f: {
            type: 'map',
            key: {},
            value: {}
          },
          S1m: {
            type: 'structure',
            members: {
              componentState: {},
              message: {},
              errors: {
                type: 'map',
                key: {},
                value: {}
              },
              vendorGuidance: {},
              vendorGuidanceMessage: {}
            }
          },
          S1t: {
            type: 'map',
            key: {},
            value: {
              type: 'structure',
              required: ['componentVersion'],
              members: {
                componentVersion: {},
                configurationUpdate: {
                  type: 'structure',
                  members: {
                    merge: {},
                    reset: {
                      type: 'list',
                      member: {}
                    }
                  }
                },
                runWith: {
                  type: 'structure',
                  members: {
                    posixUser: {},
                    systemResourceLimits: {
                      type: 'structure',
                      members: {
                        memory: {
                          type: 'long'
                        },
                        cpus: {
                          type: 'double'
                        }
                      }
                    },
                    windowsUser: {}
                  }
                }
              }
            }
          },
          S23: {
            type: 'structure',
            members: {
              jobExecutionsRolloutConfig: {
                type: 'structure',
                members: {
                  exponentialRate: {
                    type: 'structure',
                    required: ['baseRatePerMinute', 'incrementFactor', 'rateIncreaseCriteria'],
                    members: {
                      baseRatePerMinute: {
                        type: 'integer'
                      },
                      incrementFactor: {
                        type: 'double'
                      },
                      rateIncreaseCriteria: {
                        type: 'structure',
                        members: {
                          numberOfNotifiedThings: {
                            type: 'integer'
                          },
                          numberOfSucceededThings: {
                            type: 'integer'
                          }
                        }
                      }
                    }
                  },
                  maximumPerMinute: {
                    type: 'integer'
                  }
                }
              },
              abortConfig: {
                type: 'structure',
                required: ['criteriaList'],
                members: {
                  criteriaList: {
                    type: 'list',
                    member: {
                      type: 'structure',
                      required: ['failureType', 'action', 'thresholdPercentage', 'minNumberOfExecutedThings'],
                      members: {
                        failureType: {},
                        action: {},
                        thresholdPercentage: {
                          type: 'double'
                        },
                        minNumberOfExecutedThings: {
                          type: 'integer'
                        }
                      }
                    }
                  }
                }
              },
              timeoutConfig: {
                type: 'structure',
                members: {
                  inProgressTimeoutInMinutes: {
                    type: 'long'
                  }
                }
              }
            }
          },
          S2k: {
            type: 'structure',
            members: {
              failureHandlingPolicy: {},
              componentUpdatePolicy: {
                type: 'structure',
                members: {
                  timeoutInSeconds: {
                    type: 'integer'
                  },
                  action: {}
                }
              },
              configurationValidationPolicy: {
                type: 'structure',
                members: {
                  timeoutInSeconds: {
                    type: 'integer'
                  }
                }
              }
            }
          },
          S3b: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                id: {
                  locationName: 'Id'
                },
                hostAddress: {
                  locationName: 'HostAddress'
                },
                portNumber: {
                  locationName: 'PortNumber',
                  type: 'integer'
                },
                metadata: {
                  locationName: 'Metadata'
                }
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=8cb46b4fc4f6c4bd9432aed16c7ed183e6d77f40.js.map