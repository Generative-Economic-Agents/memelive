System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2018-05-10',
          endpointPrefix: 'controltower',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          protocols: ['rest-json'],
          serviceFullName: 'AWS Control Tower',
          serviceId: 'ControlTower',
          signatureVersion: 'v4',
          signingName: 'controltower',
          uid: 'controltower-2018-05-10'
        },
        operations: {
          CreateLandingZone: {
            http: {
              requestUri: '/create-landingzone',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['manifest', 'version'],
              members: {
                manifest: {
                  shape: 'S2'
                },
                tags: {
                  shape: 'S3'
                },
                version: {}
              }
            },
            output: {
              type: 'structure',
              required: ['arn', 'operationIdentifier'],
              members: {
                arn: {},
                operationIdentifier: {}
              }
            }
          },
          DeleteLandingZone: {
            http: {
              requestUri: '/delete-landingzone',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['landingZoneIdentifier'],
              members: {
                landingZoneIdentifier: {}
              }
            },
            output: {
              type: 'structure',
              required: ['operationIdentifier'],
              members: {
                operationIdentifier: {}
              }
            },
            idempotent: true
          },
          DisableBaseline: {
            http: {
              requestUri: '/disable-baseline',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['enabledBaselineIdentifier'],
              members: {
                enabledBaselineIdentifier: {}
              }
            },
            output: {
              type: 'structure',
              required: ['operationIdentifier'],
              members: {
                operationIdentifier: {}
              }
            },
            idempotent: true
          },
          DisableControl: {
            http: {
              requestUri: '/disable-control',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['controlIdentifier', 'targetIdentifier'],
              members: {
                controlIdentifier: {},
                targetIdentifier: {}
              }
            },
            output: {
              type: 'structure',
              required: ['operationIdentifier'],
              members: {
                operationIdentifier: {}
              }
            }
          },
          EnableBaseline: {
            http: {
              requestUri: '/enable-baseline',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['baselineIdentifier', 'baselineVersion', 'targetIdentifier'],
              members: {
                baselineIdentifier: {},
                baselineVersion: {},
                parameters: {
                  shape: 'Sl'
                },
                tags: {
                  shape: 'S3'
                },
                targetIdentifier: {}
              }
            },
            output: {
              type: 'structure',
              required: ['arn', 'operationIdentifier'],
              members: {
                arn: {},
                operationIdentifier: {}
              }
            }
          },
          EnableControl: {
            http: {
              requestUri: '/enable-control',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['controlIdentifier', 'targetIdentifier'],
              members: {
                controlIdentifier: {},
                parameters: {
                  shape: 'Sq'
                },
                tags: {
                  shape: 'S3'
                },
                targetIdentifier: {}
              }
            },
            output: {
              type: 'structure',
              required: ['operationIdentifier'],
              members: {
                arn: {},
                operationIdentifier: {}
              }
            }
          },
          GetBaseline: {
            http: {
              requestUri: '/get-baseline',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['baselineIdentifier'],
              members: {
                baselineIdentifier: {}
              }
            },
            output: {
              type: 'structure',
              required: ['arn', 'name'],
              members: {
                arn: {},
                description: {},
                name: {}
              }
            }
          },
          GetBaselineOperation: {
            http: {
              requestUri: '/get-baseline-operation',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['operationIdentifier'],
              members: {
                operationIdentifier: {}
              }
            },
            output: {
              type: 'structure',
              required: ['baselineOperation'],
              members: {
                baselineOperation: {
                  type: 'structure',
                  members: {
                    endTime: {
                      shape: 'S10'
                    },
                    operationIdentifier: {},
                    operationType: {},
                    startTime: {
                      shape: 'S10'
                    },
                    status: {},
                    statusMessage: {}
                  }
                }
              }
            }
          },
          GetControlOperation: {
            http: {
              requestUri: '/get-control-operation',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['operationIdentifier'],
              members: {
                operationIdentifier: {}
              }
            },
            output: {
              type: 'structure',
              required: ['controlOperation'],
              members: {
                controlOperation: {
                  type: 'structure',
                  members: {
                    controlIdentifier: {},
                    enabledControlIdentifier: {},
                    endTime: {
                      shape: 'S16'
                    },
                    operationIdentifier: {},
                    operationType: {},
                    startTime: {
                      shape: 'S16'
                    },
                    status: {},
                    statusMessage: {},
                    targetIdentifier: {}
                  }
                }
              }
            }
          },
          GetEnabledBaseline: {
            http: {
              requestUri: '/get-enabled-baseline',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['enabledBaselineIdentifier'],
              members: {
                enabledBaselineIdentifier: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                enabledBaselineDetails: {
                  type: 'structure',
                  required: ['arn', 'baselineIdentifier', 'statusSummary', 'targetIdentifier'],
                  members: {
                    arn: {},
                    baselineIdentifier: {},
                    baselineVersion: {},
                    parameters: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        required: ['key', 'value'],
                        members: {
                          key: {},
                          value: {
                            shape: 'Sn'
                          }
                        }
                      }
                    },
                    statusSummary: {
                      shape: 'S1e'
                    },
                    targetIdentifier: {}
                  }
                }
              }
            }
          },
          GetEnabledControl: {
            http: {
              requestUri: '/get-enabled-control',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['enabledControlIdentifier'],
              members: {
                enabledControlIdentifier: {}
              }
            },
            output: {
              type: 'structure',
              required: ['enabledControlDetails'],
              members: {
                enabledControlDetails: {
                  type: 'structure',
                  members: {
                    arn: {},
                    controlIdentifier: {},
                    driftStatusSummary: {
                      shape: 'S1j'
                    },
                    parameters: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        required: ['key', 'value'],
                        members: {
                          key: {},
                          value: {
                            shape: 'Ss'
                          }
                        }
                      }
                    },
                    statusSummary: {
                      shape: 'S1e'
                    },
                    targetIdentifier: {},
                    targetRegions: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          name: {}
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          GetLandingZone: {
            http: {
              requestUri: '/get-landingzone',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['landingZoneIdentifier'],
              members: {
                landingZoneIdentifier: {}
              }
            },
            output: {
              type: 'structure',
              required: ['landingZone'],
              members: {
                landingZone: {
                  type: 'structure',
                  required: ['manifest', 'version'],
                  members: {
                    arn: {},
                    driftStatus: {
                      type: 'structure',
                      members: {
                        status: {}
                      }
                    },
                    latestAvailableVersion: {},
                    manifest: {
                      shape: 'S2'
                    },
                    status: {},
                    version: {}
                  }
                }
              }
            }
          },
          GetLandingZoneOperation: {
            http: {
              requestUri: '/get-landingzone-operation',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['operationIdentifier'],
              members: {
                operationIdentifier: {}
              }
            },
            output: {
              type: 'structure',
              required: ['operationDetails'],
              members: {
                operationDetails: {
                  type: 'structure',
                  members: {
                    endTime: {
                      shape: 'S10'
                    },
                    operationType: {},
                    startTime: {
                      shape: 'S10'
                    },
                    status: {},
                    statusMessage: {}
                  }
                }
              }
            }
          },
          ListBaselines: {
            http: {
              requestUri: '/list-baselines',
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
              required: ['baselines'],
              members: {
                baselines: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['arn', 'name'],
                    members: {
                      arn: {},
                      description: {},
                      name: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListControlOperations: {
            http: {
              requestUri: '/list-control-operations',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                filter: {
                  type: 'structure',
                  members: {
                    controlIdentifiers: {
                      shape: 'S28'
                    },
                    controlOperationTypes: {
                      type: 'list',
                      member: {}
                    },
                    enabledControlIdentifiers: {
                      type: 'list',
                      member: {}
                    },
                    statuses: {
                      type: 'list',
                      member: {}
                    },
                    targetIdentifiers: {
                      type: 'list',
                      member: {}
                    }
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
              required: ['controlOperations'],
              members: {
                controlOperations: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      controlIdentifier: {},
                      enabledControlIdentifier: {},
                      endTime: {
                        shape: 'S16'
                      },
                      operationIdentifier: {},
                      operationType: {},
                      startTime: {
                        shape: 'S16'
                      },
                      status: {},
                      statusMessage: {},
                      targetIdentifier: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListEnabledBaselines: {
            http: {
              requestUri: '/list-enabled-baselines',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                filter: {
                  type: 'structure',
                  members: {
                    baselineIdentifiers: {
                      type: 'list',
                      member: {}
                    },
                    targetIdentifiers: {
                      type: 'list',
                      member: {}
                    }
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
              required: ['enabledBaselines'],
              members: {
                enabledBaselines: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['arn', 'baselineIdentifier', 'statusSummary', 'targetIdentifier'],
                    members: {
                      arn: {},
                      baselineIdentifier: {},
                      baselineVersion: {},
                      statusSummary: {
                        shape: 'S1e'
                      },
                      targetIdentifier: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListEnabledControls: {
            http: {
              requestUri: '/list-enabled-controls',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                filter: {
                  type: 'structure',
                  members: {
                    controlIdentifiers: {
                      shape: 'S28'
                    },
                    driftStatuses: {
                      type: 'list',
                      member: {}
                    },
                    statuses: {
                      type: 'list',
                      member: {}
                    }
                  }
                },
                maxResults: {
                  type: 'integer'
                },
                nextToken: {},
                targetIdentifier: {}
              }
            },
            output: {
              type: 'structure',
              required: ['enabledControls'],
              members: {
                enabledControls: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      arn: {},
                      controlIdentifier: {},
                      driftStatusSummary: {
                        shape: 'S1j'
                      },
                      statusSummary: {
                        shape: 'S1e'
                      },
                      targetIdentifier: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListLandingZones: {
            http: {
              requestUri: '/list-landingzones',
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
              required: ['landingZones'],
              members: {
                landingZones: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      arn: {}
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
              required: ['tags'],
              members: {
                tags: {
                  shape: 'S3'
                }
              }
            }
          },
          ResetEnabledBaseline: {
            http: {
              requestUri: '/reset-enabled-baseline',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['enabledBaselineIdentifier'],
              members: {
                enabledBaselineIdentifier: {}
              }
            },
            output: {
              type: 'structure',
              required: ['operationIdentifier'],
              members: {
                operationIdentifier: {}
              }
            }
          },
          ResetLandingZone: {
            http: {
              requestUri: '/reset-landingzone',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['landingZoneIdentifier'],
              members: {
                landingZoneIdentifier: {}
              }
            },
            output: {
              type: 'structure',
              required: ['operationIdentifier'],
              members: {
                operationIdentifier: {}
              }
            }
          },
          TagResource: {
            http: {
              requestUri: '/tags/{resourceArn}',
              responseCode: 204
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
                  shape: 'S3'
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
              responseCode: 204
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
          UpdateEnabledBaseline: {
            http: {
              requestUri: '/update-enabled-baseline',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['baselineVersion', 'enabledBaselineIdentifier'],
              members: {
                baselineVersion: {},
                enabledBaselineIdentifier: {},
                parameters: {
                  shape: 'Sl'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['operationIdentifier'],
              members: {
                operationIdentifier: {}
              }
            }
          },
          UpdateEnabledControl: {
            http: {
              requestUri: '/update-enabled-control',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['enabledControlIdentifier', 'parameters'],
              members: {
                enabledControlIdentifier: {},
                parameters: {
                  shape: 'Sq'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['operationIdentifier'],
              members: {
                operationIdentifier: {}
              }
            }
          },
          UpdateLandingZone: {
            http: {
              requestUri: '/update-landingzone',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['landingZoneIdentifier', 'manifest', 'version'],
              members: {
                landingZoneIdentifier: {},
                manifest: {
                  shape: 'S2'
                },
                version: {}
              }
            },
            output: {
              type: 'structure',
              required: ['operationIdentifier'],
              members: {
                operationIdentifier: {}
              }
            }
          }
        },
        shapes: {
          S2: {
            type: 'structure',
            members: {},
            document: true
          },
          S3: {
            type: 'map',
            key: {},
            value: {}
          },
          Sl: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['key', 'value'],
              members: {
                key: {},
                value: {
                  shape: 'Sn'
                }
              }
            }
          },
          Sn: {
            type: 'structure',
            members: {},
            document: true
          },
          Sq: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['key', 'value'],
              members: {
                key: {},
                value: {
                  shape: 'Ss'
                }
              }
            }
          },
          Ss: {
            type: 'structure',
            members: {},
            document: true
          },
          S10: {
            type: 'timestamp',
            timestampFormat: 'iso8601'
          },
          S16: {
            type: 'timestamp',
            timestampFormat: 'iso8601'
          },
          S1e: {
            type: 'structure',
            members: {
              lastOperationIdentifier: {},
              status: {}
            }
          },
          S1j: {
            type: 'structure',
            members: {
              driftStatus: {}
            }
          },
          S28: {
            type: 'list',
            member: {}
          }
        }
      });
    }
  };
});
//# sourceMappingURL=0a7a88ca42f080685ed666b5000a33fc10845883.js.map