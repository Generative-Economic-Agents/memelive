System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2019-05-23',
          endpointPrefix: 'groundstation',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceFullName: 'AWS Ground Station',
          serviceId: 'GroundStation',
          signatureVersion: 'v4',
          signingName: 'groundstation',
          uid: 'groundstation-2019-05-23'
        },
        operations: {
          CancelContact: {
            http: {
              method: 'DELETE',
              requestUri: '/contact/{contactId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['contactId'],
              members: {
                contactId: {
                  location: 'uri',
                  locationName: 'contactId'
                }
              }
            },
            output: {
              shape: 'S3'
            },
            idempotent: true
          },
          CreateConfig: {
            http: {
              requestUri: '/config',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['configData', 'name'],
              members: {
                configData: {
                  shape: 'S5'
                },
                name: {},
                tags: {
                  shape: 'Sy'
                }
              }
            },
            output: {
              shape: 'Sz'
            }
          },
          CreateDataflowEndpointGroup: {
            http: {
              requestUri: '/dataflowEndpointGroup',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['endpointDetails'],
              members: {
                contactPostPassDurationSeconds: {
                  type: 'integer'
                },
                contactPrePassDurationSeconds: {
                  type: 'integer'
                },
                endpointDetails: {
                  shape: 'S13'
                },
                tags: {
                  shape: 'Sy'
                }
              }
            },
            output: {
              shape: 'S1p'
            }
          },
          CreateEphemeris: {
            http: {
              requestUri: '/ephemeris',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['name', 'satelliteId'],
              members: {
                enabled: {
                  type: 'boolean'
                },
                ephemeris: {
                  type: 'structure',
                  members: {
                    oem: {
                      type: 'structure',
                      members: {
                        oemData: {},
                        s3Object: {
                          shape: 'S1u'
                        }
                      }
                    },
                    tle: {
                      type: 'structure',
                      members: {
                        s3Object: {
                          shape: 'S1u'
                        },
                        tleData: {
                          type: 'list',
                          member: {
                            type: 'structure',
                            required: ['tleLine1', 'tleLine2', 'validTimeRange'],
                            members: {
                              tleLine1: {},
                              tleLine2: {},
                              validTimeRange: {
                                type: 'structure',
                                required: ['endTime', 'startTime'],
                                members: {
                                  endTime: {
                                    type: 'timestamp'
                                  },
                                  startTime: {
                                    type: 'timestamp'
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  union: true
                },
                expirationTime: {
                  type: 'timestamp'
                },
                kmsKeyArn: {},
                name: {},
                priority: {
                  type: 'integer'
                },
                satelliteId: {},
                tags: {
                  shape: 'Sy'
                }
              }
            },
            output: {
              shape: 'S27'
            }
          },
          CreateMissionProfile: {
            http: {
              requestUri: '/missionprofile',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['dataflowEdges', 'minimumViableContactDurationSeconds', 'name', 'trackingConfigArn'],
              members: {
                contactPostPassDurationSeconds: {
                  type: 'integer'
                },
                contactPrePassDurationSeconds: {
                  type: 'integer'
                },
                dataflowEdges: {
                  shape: 'S2a'
                },
                minimumViableContactDurationSeconds: {
                  type: 'integer'
                },
                name: {},
                streamsKmsKey: {
                  shape: 'S2d'
                },
                streamsKmsRole: {},
                tags: {
                  shape: 'Sy'
                },
                trackingConfigArn: {}
              }
            },
            output: {
              shape: 'S2g'
            }
          },
          DeleteConfig: {
            http: {
              method: 'DELETE',
              requestUri: '/config/{configType}/{configId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['configId', 'configType'],
              members: {
                configId: {
                  location: 'uri',
                  locationName: 'configId'
                },
                configType: {
                  location: 'uri',
                  locationName: 'configType'
                }
              }
            },
            output: {
              shape: 'Sz'
            },
            idempotent: true
          },
          DeleteDataflowEndpointGroup: {
            http: {
              method: 'DELETE',
              requestUri: '/dataflowEndpointGroup/{dataflowEndpointGroupId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['dataflowEndpointGroupId'],
              members: {
                dataflowEndpointGroupId: {
                  location: 'uri',
                  locationName: 'dataflowEndpointGroupId'
                }
              }
            },
            output: {
              shape: 'S1p'
            },
            idempotent: true
          },
          DeleteEphemeris: {
            http: {
              method: 'DELETE',
              requestUri: '/ephemeris/{ephemerisId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ephemerisId'],
              members: {
                ephemerisId: {
                  location: 'uri',
                  locationName: 'ephemerisId'
                }
              }
            },
            output: {
              shape: 'S27'
            },
            idempotent: true
          },
          DeleteMissionProfile: {
            http: {
              method: 'DELETE',
              requestUri: '/missionprofile/{missionProfileId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['missionProfileId'],
              members: {
                missionProfileId: {
                  location: 'uri',
                  locationName: 'missionProfileId'
                }
              }
            },
            output: {
              shape: 'S2g'
            },
            idempotent: true
          },
          DescribeContact: {
            http: {
              method: 'GET',
              requestUri: '/contact/{contactId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['contactId'],
              members: {
                contactId: {
                  location: 'uri',
                  locationName: 'contactId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                contactId: {},
                contactStatus: {},
                dataflowList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      destination: {
                        type: 'structure',
                        members: {
                          configDetails: {
                            shape: 'S2r'
                          },
                          configId: {},
                          configType: {},
                          dataflowDestinationRegion: {}
                        }
                      },
                      errorMessage: {},
                      source: {
                        type: 'structure',
                        members: {
                          configDetails: {
                            shape: 'S2r'
                          },
                          configId: {},
                          configType: {},
                          dataflowSourceRegion: {}
                        }
                      }
                    }
                  }
                },
                endTime: {
                  type: 'timestamp'
                },
                errorMessage: {},
                groundStation: {},
                maximumElevation: {
                  shape: 'S2v'
                },
                missionProfileArn: {},
                postPassEndTime: {
                  type: 'timestamp'
                },
                prePassStartTime: {
                  type: 'timestamp'
                },
                region: {},
                satelliteArn: {},
                startTime: {
                  type: 'timestamp'
                },
                tags: {
                  shape: 'Sy'
                },
                visibilityEndTime: {
                  type: 'timestamp'
                },
                visibilityStartTime: {
                  type: 'timestamp'
                }
              }
            }
          },
          DescribeEphemeris: {
            http: {
              method: 'GET',
              requestUri: '/ephemeris/{ephemerisId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ephemerisId'],
              members: {
                ephemerisId: {
                  location: 'uri',
                  locationName: 'ephemerisId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                creationTime: {
                  type: 'timestamp'
                },
                enabled: {
                  type: 'boolean'
                },
                ephemerisId: {},
                invalidReason: {},
                name: {},
                priority: {
                  type: 'integer'
                },
                satelliteId: {},
                status: {},
                suppliedData: {
                  type: 'structure',
                  members: {
                    oem: {
                      shape: 'S35'
                    },
                    tle: {
                      shape: 'S35'
                    }
                  },
                  union: true
                },
                tags: {
                  shape: 'Sy'
                }
              }
            }
          },
          GetAgentConfiguration: {
            http: {
              method: 'GET',
              requestUri: '/agent/{agentId}/configuration',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['agentId'],
              members: {
                agentId: {
                  location: 'uri',
                  locationName: 'agentId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                agentId: {},
                taskingDocument: {}
              }
            }
          },
          GetConfig: {
            http: {
              method: 'GET',
              requestUri: '/config/{configType}/{configId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['configId', 'configType'],
              members: {
                configId: {
                  location: 'uri',
                  locationName: 'configId'
                },
                configType: {
                  location: 'uri',
                  locationName: 'configType'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['configArn', 'configData', 'configId', 'name'],
              members: {
                configArn: {},
                configData: {
                  shape: 'S5'
                },
                configId: {},
                configType: {},
                name: {},
                tags: {
                  shape: 'Sy'
                }
              }
            }
          },
          GetDataflowEndpointGroup: {
            http: {
              method: 'GET',
              requestUri: '/dataflowEndpointGroup/{dataflowEndpointGroupId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['dataflowEndpointGroupId'],
              members: {
                dataflowEndpointGroupId: {
                  location: 'uri',
                  locationName: 'dataflowEndpointGroupId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                contactPostPassDurationSeconds: {
                  type: 'integer'
                },
                contactPrePassDurationSeconds: {
                  type: 'integer'
                },
                dataflowEndpointGroupArn: {},
                dataflowEndpointGroupId: {},
                endpointsDetails: {
                  shape: 'S13'
                },
                tags: {
                  shape: 'Sy'
                }
              }
            }
          },
          GetMinuteUsage: {
            http: {
              requestUri: '/minute-usage',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['month', 'year'],
              members: {
                month: {
                  type: 'integer'
                },
                year: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                estimatedMinutesRemaining: {
                  type: 'integer'
                },
                isReservedMinutesCustomer: {
                  type: 'boolean'
                },
                totalReservedMinuteAllocation: {
                  type: 'integer'
                },
                totalScheduledMinutes: {
                  type: 'integer'
                },
                upcomingMinutesScheduled: {
                  type: 'integer'
                }
              }
            }
          },
          GetMissionProfile: {
            http: {
              method: 'GET',
              requestUri: '/missionprofile/{missionProfileId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['missionProfileId'],
              members: {
                missionProfileId: {
                  location: 'uri',
                  locationName: 'missionProfileId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                contactPostPassDurationSeconds: {
                  type: 'integer'
                },
                contactPrePassDurationSeconds: {
                  type: 'integer'
                },
                dataflowEdges: {
                  shape: 'S2a'
                },
                minimumViableContactDurationSeconds: {
                  type: 'integer'
                },
                missionProfileArn: {},
                missionProfileId: {},
                name: {},
                region: {},
                streamsKmsKey: {
                  shape: 'S2d'
                },
                streamsKmsRole: {},
                tags: {
                  shape: 'Sy'
                },
                trackingConfigArn: {}
              }
            }
          },
          GetSatellite: {
            http: {
              method: 'GET',
              requestUri: '/satellite/{satelliteId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['satelliteId'],
              members: {
                satelliteId: {
                  location: 'uri',
                  locationName: 'satelliteId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                currentEphemeris: {
                  shape: 'S3m'
                },
                groundStations: {
                  shape: 'S3o'
                },
                noradSatelliteID: {
                  type: 'integer'
                },
                satelliteArn: {},
                satelliteId: {}
              }
            }
          },
          ListConfigs: {
            http: {
              method: 'GET',
              requestUri: '/config',
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
              members: {
                configList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      configArn: {},
                      configId: {},
                      configType: {},
                      name: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListContacts: {
            http: {
              requestUri: '/contacts',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['endTime', 'startTime', 'statusList'],
              members: {
                endTime: {
                  type: 'timestamp'
                },
                groundStation: {},
                maxResults: {
                  type: 'integer'
                },
                missionProfileArn: {},
                nextToken: {},
                satelliteArn: {},
                startTime: {
                  type: 'timestamp'
                },
                statusList: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                contactList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      contactId: {},
                      contactStatus: {},
                      endTime: {
                        type: 'timestamp'
                      },
                      errorMessage: {},
                      groundStation: {},
                      maximumElevation: {
                        shape: 'S2v'
                      },
                      missionProfileArn: {},
                      postPassEndTime: {
                        type: 'timestamp'
                      },
                      prePassStartTime: {
                        type: 'timestamp'
                      },
                      region: {},
                      satelliteArn: {},
                      startTime: {
                        type: 'timestamp'
                      },
                      tags: {
                        shape: 'Sy'
                      },
                      visibilityEndTime: {
                        type: 'timestamp'
                      },
                      visibilityStartTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListDataflowEndpointGroups: {
            http: {
              method: 'GET',
              requestUri: '/dataflowEndpointGroup',
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
              members: {
                dataflowEndpointGroupList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      dataflowEndpointGroupArn: {},
                      dataflowEndpointGroupId: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListEphemerides: {
            http: {
              requestUri: '/ephemerides',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['endTime', 'satelliteId', 'startTime'],
              members: {
                endTime: {
                  type: 'timestamp'
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
                satelliteId: {},
                startTime: {
                  type: 'timestamp'
                },
                statusList: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ephemerides: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      creationTime: {
                        type: 'timestamp'
                      },
                      enabled: {
                        type: 'boolean'
                      },
                      ephemerisId: {},
                      name: {},
                      priority: {
                        type: 'integer'
                      },
                      sourceS3Object: {
                        shape: 'S1u'
                      },
                      status: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListGroundStations: {
            http: {
              method: 'GET',
              requestUri: '/groundstation',
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
                satelliteId: {
                  location: 'querystring',
                  locationName: 'satelliteId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                groundStationList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      groundStationId: {},
                      groundStationName: {},
                      region: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListMissionProfiles: {
            http: {
              method: 'GET',
              requestUri: '/missionprofile',
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
              members: {
                missionProfileList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      missionProfileArn: {},
                      missionProfileId: {},
                      name: {},
                      region: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListSatellites: {
            http: {
              method: 'GET',
              requestUri: '/satellite',
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
              members: {
                nextToken: {},
                satellites: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      currentEphemeris: {
                        shape: 'S3m'
                      },
                      groundStations: {
                        shape: 'S3o'
                      },
                      noradSatelliteID: {
                        type: 'integer'
                      },
                      satelliteArn: {},
                      satelliteId: {}
                    }
                  }
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
                  shape: 'Sy'
                }
              }
            }
          },
          RegisterAgent: {
            http: {
              requestUri: '/agent',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['agentDetails', 'discoveryData'],
              members: {
                agentDetails: {
                  type: 'structure',
                  required: ['agentVersion', 'componentVersions', 'instanceId', 'instanceType'],
                  members: {
                    agentCpuCores: {
                      shape: 'S4s'
                    },
                    agentVersion: {},
                    componentVersions: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        required: ['componentType', 'versions'],
                        members: {
                          componentType: {},
                          versions: {
                            type: 'list',
                            member: {}
                          }
                        }
                      }
                    },
                    instanceId: {},
                    instanceType: {},
                    reservedCpuCores: {
                      shape: 'S4s'
                    }
                  }
                },
                discoveryData: {
                  type: 'structure',
                  required: ['capabilityArns', 'privateIpAddresses', 'publicIpAddresses'],
                  members: {
                    capabilityArns: {
                      type: 'list',
                      member: {}
                    },
                    privateIpAddresses: {
                      shape: 'S53'
                    },
                    publicIpAddresses: {
                      shape: 'S53'
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                agentId: {}
              }
            }
          },
          ReserveContact: {
            http: {
              requestUri: '/contact',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['endTime', 'groundStation', 'missionProfileArn', 'satelliteArn', 'startTime'],
              members: {
                endTime: {
                  type: 'timestamp'
                },
                groundStation: {},
                missionProfileArn: {},
                satelliteArn: {},
                startTime: {
                  type: 'timestamp'
                },
                tags: {
                  shape: 'Sy'
                }
              }
            },
            output: {
              shape: 'S3'
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
                  shape: 'Sy'
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
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          UpdateAgentStatus: {
            http: {
              method: 'PUT',
              requestUri: '/agent/{agentId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['agentId', 'aggregateStatus', 'componentStatuses', 'taskId'],
              members: {
                agentId: {
                  location: 'uri',
                  locationName: 'agentId'
                },
                aggregateStatus: {
                  type: 'structure',
                  required: ['status'],
                  members: {
                    signatureMap: {
                      type: 'map',
                      key: {},
                      value: {
                        type: 'boolean'
                      }
                    },
                    status: {}
                  }
                },
                componentStatuses: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['capabilityArn', 'componentType', 'dataflowId', 'status'],
                    members: {
                      bytesReceived: {
                        type: 'long'
                      },
                      bytesSent: {
                        type: 'long'
                      },
                      capabilityArn: {},
                      componentType: {},
                      dataflowId: {},
                      packetsDropped: {
                        type: 'long'
                      },
                      status: {}
                    }
                  }
                },
                taskId: {}
              }
            },
            output: {
              type: 'structure',
              required: ['agentId'],
              members: {
                agentId: {}
              }
            },
            idempotent: true
          },
          UpdateConfig: {
            http: {
              method: 'PUT',
              requestUri: '/config/{configType}/{configId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['configData', 'configId', 'configType', 'name'],
              members: {
                configData: {
                  shape: 'S5'
                },
                configId: {
                  location: 'uri',
                  locationName: 'configId'
                },
                configType: {
                  location: 'uri',
                  locationName: 'configType'
                },
                name: {}
              }
            },
            output: {
              shape: 'Sz'
            },
            idempotent: true
          },
          UpdateEphemeris: {
            http: {
              method: 'PUT',
              requestUri: '/ephemeris/{ephemerisId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['enabled', 'ephemerisId'],
              members: {
                enabled: {
                  type: 'boolean'
                },
                ephemerisId: {
                  location: 'uri',
                  locationName: 'ephemerisId'
                },
                name: {},
                priority: {
                  type: 'integer'
                }
              }
            },
            output: {
              shape: 'S27'
            },
            idempotent: true
          },
          UpdateMissionProfile: {
            http: {
              method: 'PUT',
              requestUri: '/missionprofile/{missionProfileId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['missionProfileId'],
              members: {
                contactPostPassDurationSeconds: {
                  type: 'integer'
                },
                contactPrePassDurationSeconds: {
                  type: 'integer'
                },
                dataflowEdges: {
                  shape: 'S2a'
                },
                minimumViableContactDurationSeconds: {
                  type: 'integer'
                },
                missionProfileId: {
                  location: 'uri',
                  locationName: 'missionProfileId'
                },
                name: {},
                streamsKmsKey: {
                  shape: 'S2d'
                },
                streamsKmsRole: {},
                trackingConfigArn: {}
              }
            },
            output: {
              shape: 'S2g'
            },
            idempotent: true
          }
        },
        shapes: {
          S3: {
            type: 'structure',
            members: {
              contactId: {}
            }
          },
          S5: {
            type: 'structure',
            members: {
              antennaDownlinkConfig: {
                type: 'structure',
                required: ['spectrumConfig'],
                members: {
                  spectrumConfig: {
                    shape: 'S7'
                  }
                }
              },
              antennaDownlinkDemodDecodeConfig: {
                type: 'structure',
                required: ['decodeConfig', 'demodulationConfig', 'spectrumConfig'],
                members: {
                  decodeConfig: {
                    type: 'structure',
                    required: ['unvalidatedJSON'],
                    members: {
                      unvalidatedJSON: {}
                    }
                  },
                  demodulationConfig: {
                    type: 'structure',
                    required: ['unvalidatedJSON'],
                    members: {
                      unvalidatedJSON: {}
                    }
                  },
                  spectrumConfig: {
                    shape: 'S7'
                  }
                }
              },
              antennaUplinkConfig: {
                type: 'structure',
                required: ['spectrumConfig', 'targetEirp'],
                members: {
                  spectrumConfig: {
                    type: 'structure',
                    required: ['centerFrequency'],
                    members: {
                      centerFrequency: {
                        shape: 'Sb'
                      },
                      polarization: {}
                    }
                  },
                  targetEirp: {
                    type: 'structure',
                    required: ['units', 'value'],
                    members: {
                      units: {},
                      value: {
                        type: 'double'
                      }
                    }
                  },
                  transmitDisabled: {
                    type: 'boolean'
                  }
                }
              },
              dataflowEndpointConfig: {
                type: 'structure',
                required: ['dataflowEndpointName'],
                members: {
                  dataflowEndpointName: {},
                  dataflowEndpointRegion: {}
                }
              },
              s3RecordingConfig: {
                type: 'structure',
                required: ['bucketArn', 'roleArn'],
                members: {
                  bucketArn: {},
                  prefix: {},
                  roleArn: {}
                }
              },
              trackingConfig: {
                type: 'structure',
                required: ['autotrack'],
                members: {
                  autotrack: {}
                }
              },
              uplinkEchoConfig: {
                type: 'structure',
                required: ['antennaUplinkConfigArn', 'enabled'],
                members: {
                  antennaUplinkConfigArn: {},
                  enabled: {
                    type: 'boolean'
                  }
                }
              }
            },
            union: true
          },
          S7: {
            type: 'structure',
            required: ['bandwidth', 'centerFrequency'],
            members: {
              bandwidth: {
                type: 'structure',
                required: ['units', 'value'],
                members: {
                  units: {},
                  value: {
                    type: 'double'
                  }
                }
              },
              centerFrequency: {
                shape: 'Sb'
              },
              polarization: {}
            }
          },
          Sb: {
            type: 'structure',
            required: ['units', 'value'],
            members: {
              units: {},
              value: {
                type: 'double'
              }
            }
          },
          Sy: {
            type: 'map',
            key: {},
            value: {}
          },
          Sz: {
            type: 'structure',
            members: {
              configArn: {},
              configId: {},
              configType: {}
            }
          },
          S13: {
            type: 'list',
            member: {
              shape: 'S14'
            }
          },
          S14: {
            type: 'structure',
            members: {
              awsGroundStationAgentEndpoint: {
                type: 'structure',
                required: ['egressAddress', 'ingressAddress', 'name'],
                members: {
                  agentStatus: {},
                  auditResults: {},
                  egressAddress: {
                    type: 'structure',
                    required: ['socketAddress'],
                    members: {
                      mtu: {
                        type: 'integer'
                      },
                      socketAddress: {
                        shape: 'S1a'
                      }
                    }
                  },
                  ingressAddress: {
                    type: 'structure',
                    required: ['socketAddress'],
                    members: {
                      mtu: {
                        type: 'integer'
                      },
                      socketAddress: {
                        type: 'structure',
                        required: ['name', 'portRange'],
                        members: {
                          name: {},
                          portRange: {
                            type: 'structure',
                            required: ['maximum', 'minimum'],
                            members: {
                              maximum: {
                                type: 'integer'
                              },
                              minimum: {
                                type: 'integer'
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  name: {}
                }
              },
              endpoint: {
                type: 'structure',
                members: {
                  address: {
                    shape: 'S1a'
                  },
                  mtu: {
                    type: 'integer'
                  },
                  name: {},
                  status: {}
                }
              },
              healthReasons: {
                type: 'list',
                member: {}
              },
              healthStatus: {},
              securityDetails: {
                type: 'structure',
                required: ['roleArn', 'securityGroupIds', 'subnetIds'],
                members: {
                  roleArn: {},
                  securityGroupIds: {
                    type: 'list',
                    member: {}
                  },
                  subnetIds: {
                    type: 'list',
                    member: {}
                  }
                }
              }
            }
          },
          S1a: {
            type: 'structure',
            required: ['name', 'port'],
            members: {
              name: {},
              port: {
                type: 'integer'
              }
            }
          },
          S1p: {
            type: 'structure',
            members: {
              dataflowEndpointGroupId: {}
            }
          },
          S1u: {
            type: 'structure',
            members: {
              bucket: {},
              key: {},
              version: {}
            }
          },
          S27: {
            type: 'structure',
            members: {
              ephemerisId: {}
            }
          },
          S2a: {
            type: 'list',
            member: {
              type: 'list',
              member: {}
            }
          },
          S2d: {
            type: 'structure',
            members: {
              kmsAliasArn: {},
              kmsAliasName: {},
              kmsKeyArn: {}
            },
            union: true
          },
          S2g: {
            type: 'structure',
            members: {
              missionProfileId: {}
            }
          },
          S2r: {
            type: 'structure',
            members: {
              antennaDemodDecodeDetails: {
                type: 'structure',
                members: {
                  outputNode: {}
                }
              },
              endpointDetails: {
                shape: 'S14'
              },
              s3RecordingDetails: {
                type: 'structure',
                members: {
                  bucketArn: {},
                  keyTemplate: {}
                }
              }
            },
            union: true
          },
          S2v: {
            type: 'structure',
            required: ['unit', 'value'],
            members: {
              unit: {},
              value: {
                type: 'double'
              }
            }
          },
          S35: {
            type: 'structure',
            members: {
              ephemerisData: {},
              sourceS3Object: {
                shape: 'S1u'
              }
            }
          },
          S3m: {
            type: 'structure',
            required: ['source'],
            members: {
              ephemerisId: {},
              epoch: {
                type: 'timestamp'
              },
              name: {},
              source: {}
            }
          },
          S3o: {
            type: 'list',
            member: {}
          },
          S4s: {
            type: 'list',
            member: {
              type: 'integer'
            }
          },
          S53: {
            type: 'list',
            member: {}
          }
        }
      });
    }
  };
});
//# sourceMappingURL=f0a66ea1101bb8823d13b65b7aa097ddda5083b3.js.map