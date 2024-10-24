System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        metadata: {
          apiVersion: '2018-11-14',
          endpointPrefix: 'mediaconnect',
          signingName: 'mediaconnect',
          serviceFullName: 'AWS MediaConnect',
          serviceId: 'MediaConnect',
          protocol: 'rest-json',
          jsonVersion: '1.1',
          uid: 'mediaconnect-2018-11-14',
          signatureVersion: 'v4'
        },
        operations: {
          AddBridgeOutputs: {
            http: {
              requestUri: '/v1/bridges/{bridgeArn}/outputs',
              responseCode: 202
            },
            input: {
              type: 'structure',
              members: {
                BridgeArn: {
                  location: 'uri',
                  locationName: 'bridgeArn'
                },
                Outputs: {
                  shape: 'S3',
                  locationName: 'outputs'
                }
              },
              required: ['BridgeArn', 'Outputs']
            },
            output: {
              type: 'structure',
              members: {
                BridgeArn: {
                  locationName: 'bridgeArn'
                },
                Outputs: {
                  shape: 'S9',
                  locationName: 'outputs'
                }
              }
            }
          },
          AddBridgeSources: {
            http: {
              requestUri: '/v1/bridges/{bridgeArn}/sources',
              responseCode: 202
            },
            input: {
              type: 'structure',
              members: {
                BridgeArn: {
                  location: 'uri',
                  locationName: 'bridgeArn'
                },
                Sources: {
                  shape: 'Se',
                  locationName: 'sources'
                }
              },
              required: ['BridgeArn', 'Sources']
            },
            output: {
              type: 'structure',
              members: {
                BridgeArn: {
                  locationName: 'bridgeArn'
                },
                Sources: {
                  shape: 'Sk',
                  locationName: 'sources'
                }
              }
            }
          },
          AddFlowMediaStreams: {
            http: {
              requestUri: '/v1/flows/{flowArn}/mediaStreams',
              responseCode: 201
            },
            input: {
              type: 'structure',
              members: {
                FlowArn: {
                  location: 'uri',
                  locationName: 'flowArn'
                },
                MediaStreams: {
                  shape: 'Sp',
                  locationName: 'mediaStreams'
                }
              },
              required: ['FlowArn', 'MediaStreams']
            },
            output: {
              type: 'structure',
              members: {
                FlowArn: {
                  locationName: 'flowArn'
                },
                MediaStreams: {
                  shape: 'Sz',
                  locationName: 'mediaStreams'
                }
              }
            }
          },
          AddFlowOutputs: {
            http: {
              requestUri: '/v1/flows/{flowArn}/outputs',
              responseCode: 201
            },
            input: {
              type: 'structure',
              members: {
                FlowArn: {
                  location: 'uri',
                  locationName: 'flowArn'
                },
                Outputs: {
                  shape: 'S14',
                  locationName: 'outputs'
                }
              },
              required: ['FlowArn', 'Outputs']
            },
            output: {
              type: 'structure',
              members: {
                FlowArn: {
                  locationName: 'flowArn'
                },
                Outputs: {
                  shape: 'S1k',
                  locationName: 'outputs'
                }
              }
            }
          },
          AddFlowSources: {
            http: {
              requestUri: '/v1/flows/{flowArn}/source',
              responseCode: 201
            },
            input: {
              type: 'structure',
              members: {
                FlowArn: {
                  location: 'uri',
                  locationName: 'flowArn'
                },
                Sources: {
                  shape: 'S1v',
                  locationName: 'sources'
                }
              },
              required: ['FlowArn', 'Sources']
            },
            output: {
              type: 'structure',
              members: {
                FlowArn: {
                  locationName: 'flowArn'
                },
                Sources: {
                  shape: 'S23',
                  locationName: 'sources'
                }
              }
            }
          },
          AddFlowVpcInterfaces: {
            http: {
              requestUri: '/v1/flows/{flowArn}/vpcInterfaces',
              responseCode: 201
            },
            input: {
              type: 'structure',
              members: {
                FlowArn: {
                  location: 'uri',
                  locationName: 'flowArn'
                },
                VpcInterfaces: {
                  shape: 'S2b',
                  locationName: 'vpcInterfaces'
                }
              },
              required: ['FlowArn', 'VpcInterfaces']
            },
            output: {
              type: 'structure',
              members: {
                FlowArn: {
                  locationName: 'flowArn'
                },
                VpcInterfaces: {
                  shape: 'S2f',
                  locationName: 'vpcInterfaces'
                }
              }
            }
          },
          CreateBridge: {
            http: {
              requestUri: '/v1/bridges',
              responseCode: 201
            },
            input: {
              type: 'structure',
              members: {
                EgressGatewayBridge: {
                  locationName: 'egressGatewayBridge',
                  type: 'structure',
                  members: {
                    MaxBitrate: {
                      locationName: 'maxBitrate',
                      type: 'integer'
                    }
                  },
                  required: ['MaxBitrate']
                },
                IngressGatewayBridge: {
                  locationName: 'ingressGatewayBridge',
                  type: 'structure',
                  members: {
                    MaxBitrate: {
                      locationName: 'maxBitrate',
                      type: 'integer'
                    },
                    MaxOutputs: {
                      locationName: 'maxOutputs',
                      type: 'integer'
                    }
                  },
                  required: ['MaxOutputs', 'MaxBitrate']
                },
                Name: {
                  locationName: 'name'
                },
                Outputs: {
                  shape: 'S3',
                  locationName: 'outputs'
                },
                PlacementArn: {
                  locationName: 'placementArn'
                },
                SourceFailoverConfig: {
                  shape: 'S2k',
                  locationName: 'sourceFailoverConfig'
                },
                Sources: {
                  shape: 'Se',
                  locationName: 'sources'
                }
              },
              required: ['Sources', 'PlacementArn', 'Name']
            },
            output: {
              type: 'structure',
              members: {
                Bridge: {
                  shape: 'S2p',
                  locationName: 'bridge'
                }
              }
            }
          },
          CreateFlow: {
            http: {
              requestUri: '/v1/flows',
              responseCode: 201
            },
            input: {
              type: 'structure',
              members: {
                AvailabilityZone: {
                  locationName: 'availabilityZone'
                },
                Entitlements: {
                  shape: 'S2w',
                  locationName: 'entitlements'
                },
                MediaStreams: {
                  shape: 'Sp',
                  locationName: 'mediaStreams'
                },
                Name: {
                  locationName: 'name'
                },
                Outputs: {
                  shape: 'S14',
                  locationName: 'outputs'
                },
                Source: {
                  shape: 'S1w',
                  locationName: 'source'
                },
                SourceFailoverConfig: {
                  shape: 'S2k',
                  locationName: 'sourceFailoverConfig'
                },
                Sources: {
                  shape: 'S1v',
                  locationName: 'sources'
                },
                VpcInterfaces: {
                  shape: 'S2b',
                  locationName: 'vpcInterfaces'
                },
                Maintenance: {
                  locationName: 'maintenance',
                  type: 'structure',
                  members: {
                    MaintenanceDay: {
                      locationName: 'maintenanceDay'
                    },
                    MaintenanceStartHour: {
                      locationName: 'maintenanceStartHour'
                    }
                  },
                  required: ['MaintenanceDay', 'MaintenanceStartHour']
                }
              },
              required: ['Name']
            },
            output: {
              type: 'structure',
              members: {
                Flow: {
                  shape: 'S32',
                  locationName: 'flow'
                }
              }
            }
          },
          CreateGateway: {
            http: {
              requestUri: '/v1/gateways',
              responseCode: 201
            },
            input: {
              type: 'structure',
              members: {
                EgressCidrBlocks: {
                  shape: 'S16',
                  locationName: 'egressCidrBlocks'
                },
                Name: {
                  locationName: 'name'
                },
                Networks: {
                  shape: 'S38',
                  locationName: 'networks'
                }
              },
              required: ['Networks', 'EgressCidrBlocks', 'Name']
            },
            output: {
              type: 'structure',
              members: {
                Gateway: {
                  shape: 'S3b',
                  locationName: 'gateway'
                }
              }
            }
          },
          DeleteBridge: {
            http: {
              method: 'DELETE',
              requestUri: '/v1/bridges/{bridgeArn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                BridgeArn: {
                  location: 'uri',
                  locationName: 'bridgeArn'
                }
              },
              required: ['BridgeArn']
            },
            output: {
              type: 'structure',
              members: {
                BridgeArn: {
                  locationName: 'bridgeArn'
                }
              }
            }
          },
          DeleteFlow: {
            http: {
              method: 'DELETE',
              requestUri: '/v1/flows/{flowArn}',
              responseCode: 202
            },
            input: {
              type: 'structure',
              members: {
                FlowArn: {
                  location: 'uri',
                  locationName: 'flowArn'
                }
              },
              required: ['FlowArn']
            },
            output: {
              type: 'structure',
              members: {
                FlowArn: {
                  locationName: 'flowArn'
                },
                Status: {
                  locationName: 'status'
                }
              }
            }
          },
          DeleteGateway: {
            http: {
              method: 'DELETE',
              requestUri: '/v1/gateways/{gatewayArn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                GatewayArn: {
                  location: 'uri',
                  locationName: 'gatewayArn'
                }
              },
              required: ['GatewayArn']
            },
            output: {
              type: 'structure',
              members: {
                GatewayArn: {
                  locationName: 'gatewayArn'
                }
              }
            }
          },
          DeregisterGatewayInstance: {
            http: {
              method: 'DELETE',
              requestUri: '/v1/gateway-instances/{gatewayInstanceArn}',
              responseCode: 202
            },
            input: {
              type: 'structure',
              members: {
                Force: {
                  location: 'querystring',
                  locationName: 'force',
                  type: 'boolean'
                },
                GatewayInstanceArn: {
                  location: 'uri',
                  locationName: 'gatewayInstanceArn'
                }
              },
              required: ['GatewayInstanceArn']
            },
            output: {
              type: 'structure',
              members: {
                GatewayInstanceArn: {
                  locationName: 'gatewayInstanceArn'
                },
                InstanceState: {
                  locationName: 'instanceState'
                }
              }
            }
          },
          DescribeBridge: {
            http: {
              method: 'GET',
              requestUri: '/v1/bridges/{bridgeArn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                BridgeArn: {
                  location: 'uri',
                  locationName: 'bridgeArn'
                }
              },
              required: ['BridgeArn']
            },
            output: {
              type: 'structure',
              members: {
                Bridge: {
                  shape: 'S2p',
                  locationName: 'bridge'
                }
              }
            }
          },
          DescribeFlow: {
            http: {
              method: 'GET',
              requestUri: '/v1/flows/{flowArn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                FlowArn: {
                  location: 'uri',
                  locationName: 'flowArn'
                }
              },
              required: ['FlowArn']
            },
            output: {
              type: 'structure',
              members: {
                Flow: {
                  shape: 'S32',
                  locationName: 'flow'
                },
                Messages: {
                  locationName: 'messages',
                  type: 'structure',
                  members: {
                    Errors: {
                      shape: 'S16',
                      locationName: 'errors'
                    }
                  },
                  required: ['Errors']
                }
              }
            }
          },
          DescribeFlowSourceMetadata: {
            http: {
              method: 'GET',
              requestUri: '/v1/flows/{flowArn}/source-metadata',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                FlowArn: {
                  location: 'uri',
                  locationName: 'flowArn'
                }
              },
              required: ['FlowArn']
            },
            output: {
              type: 'structure',
              members: {
                FlowArn: {
                  locationName: 'flowArn'
                },
                Messages: {
                  shape: 'S2q',
                  locationName: 'messages'
                },
                Timestamp: {
                  locationName: 'timestamp',
                  type: 'timestamp',
                  timestampFormat: 'iso8601'
                },
                TransportMediaInfo: {
                  locationName: 'transportMediaInfo',
                  type: 'structure',
                  members: {
                    Programs: {
                      locationName: 'programs',
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          PcrPid: {
                            locationName: 'pcrPid',
                            type: 'integer'
                          },
                          ProgramName: {
                            locationName: 'programName'
                          },
                          ProgramNumber: {
                            locationName: 'programNumber',
                            type: 'integer'
                          },
                          ProgramPid: {
                            locationName: 'programPid',
                            type: 'integer'
                          },
                          Streams: {
                            locationName: 'streams',
                            type: 'list',
                            member: {
                              type: 'structure',
                              members: {
                                Channels: {
                                  locationName: 'channels',
                                  type: 'integer'
                                },
                                Codec: {
                                  locationName: 'codec'
                                },
                                FrameRate: {
                                  locationName: 'frameRate'
                                },
                                FrameResolution: {
                                  locationName: 'frameResolution',
                                  type: 'structure',
                                  members: {
                                    FrameHeight: {
                                      locationName: 'frameHeight',
                                      type: 'integer'
                                    },
                                    FrameWidth: {
                                      locationName: 'frameWidth',
                                      type: 'integer'
                                    }
                                  },
                                  required: ['FrameWidth', 'FrameHeight']
                                },
                                Pid: {
                                  locationName: 'pid',
                                  type: 'integer'
                                },
                                SampleRate: {
                                  locationName: 'sampleRate',
                                  type: 'integer'
                                },
                                SampleSize: {
                                  locationName: 'sampleSize',
                                  type: 'integer'
                                },
                                StreamType: {
                                  locationName: 'streamType'
                                }
                              },
                              required: ['StreamType', 'Pid']
                            }
                          }
                        },
                        required: ['ProgramPid', 'PcrPid', 'ProgramNumber', 'Streams']
                      }
                    }
                  },
                  required: ['Programs']
                }
              }
            }
          },
          DescribeGateway: {
            http: {
              method: 'GET',
              requestUri: '/v1/gateways/{gatewayArn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                GatewayArn: {
                  location: 'uri',
                  locationName: 'gatewayArn'
                }
              },
              required: ['GatewayArn']
            },
            output: {
              type: 'structure',
              members: {
                Gateway: {
                  shape: 'S3b',
                  locationName: 'gateway'
                }
              }
            }
          },
          DescribeGatewayInstance: {
            http: {
              method: 'GET',
              requestUri: '/v1/gateway-instances/{gatewayInstanceArn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                GatewayInstanceArn: {
                  location: 'uri',
                  locationName: 'gatewayInstanceArn'
                }
              },
              required: ['GatewayInstanceArn']
            },
            output: {
              type: 'structure',
              members: {
                GatewayInstance: {
                  locationName: 'gatewayInstance',
                  type: 'structure',
                  members: {
                    BridgePlacement: {
                      locationName: 'bridgePlacement'
                    },
                    ConnectionStatus: {
                      locationName: 'connectionStatus'
                    },
                    GatewayArn: {
                      locationName: 'gatewayArn'
                    },
                    GatewayInstanceArn: {
                      locationName: 'gatewayInstanceArn'
                    },
                    InstanceId: {
                      locationName: 'instanceId'
                    },
                    InstanceMessages: {
                      shape: 'S2q',
                      locationName: 'instanceMessages'
                    },
                    InstanceState: {
                      locationName: 'instanceState'
                    },
                    RunningBridgeCount: {
                      locationName: 'runningBridgeCount',
                      type: 'integer'
                    }
                  },
                  required: ['GatewayArn', 'InstanceState', 'GatewayInstanceArn', 'InstanceId', 'RunningBridgeCount', 'BridgePlacement', 'ConnectionStatus']
                }
              }
            }
          },
          DescribeOffering: {
            http: {
              method: 'GET',
              requestUri: '/v1/offerings/{offeringArn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                OfferingArn: {
                  location: 'uri',
                  locationName: 'offeringArn'
                }
              },
              required: ['OfferingArn']
            },
            output: {
              type: 'structure',
              members: {
                Offering: {
                  shape: 'S4a',
                  locationName: 'offering'
                }
              }
            }
          },
          DescribeReservation: {
            http: {
              method: 'GET',
              requestUri: '/v1/reservations/{reservationArn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ReservationArn: {
                  location: 'uri',
                  locationName: 'reservationArn'
                }
              },
              required: ['ReservationArn']
            },
            output: {
              type: 'structure',
              members: {
                Reservation: {
                  shape: 'S4h',
                  locationName: 'reservation'
                }
              }
            }
          },
          GrantFlowEntitlements: {
            http: {
              requestUri: '/v1/flows/{flowArn}/entitlements',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                Entitlements: {
                  shape: 'S2w',
                  locationName: 'entitlements'
                },
                FlowArn: {
                  location: 'uri',
                  locationName: 'flowArn'
                }
              },
              required: ['FlowArn', 'Entitlements']
            },
            output: {
              type: 'structure',
              members: {
                Entitlements: {
                  shape: 'S33',
                  locationName: 'entitlements'
                },
                FlowArn: {
                  locationName: 'flowArn'
                }
              }
            }
          },
          ListBridges: {
            http: {
              method: 'GET',
              requestUri: '/v1/bridges',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                FilterArn: {
                  location: 'querystring',
                  locationName: 'filterArn'
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
              members: {
                Bridges: {
                  locationName: 'bridges',
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      BridgeArn: {
                        locationName: 'bridgeArn'
                      },
                      BridgeState: {
                        locationName: 'bridgeState'
                      },
                      BridgeType: {
                        locationName: 'bridgeType'
                      },
                      Name: {
                        locationName: 'name'
                      },
                      PlacementArn: {
                        locationName: 'placementArn'
                      }
                    },
                    required: ['BridgeArn', 'BridgeState', 'PlacementArn', 'BridgeType', 'Name']
                  }
                },
                NextToken: {
                  locationName: 'nextToken'
                }
              }
            }
          },
          ListEntitlements: {
            http: {
              method: 'GET',
              requestUri: '/v1/entitlements',
              responseCode: 200
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
              members: {
                Entitlements: {
                  locationName: 'entitlements',
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      DataTransferSubscriberFeePercent: {
                        locationName: 'dataTransferSubscriberFeePercent',
                        type: 'integer'
                      },
                      EntitlementArn: {
                        locationName: 'entitlementArn'
                      },
                      EntitlementName: {
                        locationName: 'entitlementName'
                      }
                    },
                    required: ['EntitlementArn', 'EntitlementName']
                  }
                },
                NextToken: {
                  locationName: 'nextToken'
                }
              }
            }
          },
          ListFlows: {
            http: {
              method: 'GET',
              requestUri: '/v1/flows',
              responseCode: 200
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
              members: {
                Flows: {
                  locationName: 'flows',
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      AvailabilityZone: {
                        locationName: 'availabilityZone'
                      },
                      Description: {
                        locationName: 'description'
                      },
                      FlowArn: {
                        locationName: 'flowArn'
                      },
                      Name: {
                        locationName: 'name'
                      },
                      SourceType: {
                        locationName: 'sourceType'
                      },
                      Status: {
                        locationName: 'status'
                      },
                      Maintenance: {
                        shape: 'S36',
                        locationName: 'maintenance'
                      }
                    },
                    required: ['Status', 'Description', 'SourceType', 'AvailabilityZone', 'FlowArn', 'Name']
                  }
                },
                NextToken: {
                  locationName: 'nextToken'
                }
              }
            }
          },
          ListGatewayInstances: {
            http: {
              method: 'GET',
              requestUri: '/v1/gateway-instances',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                FilterArn: {
                  location: 'querystring',
                  locationName: 'filterArn'
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
              members: {
                Instances: {
                  locationName: 'instances',
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      GatewayArn: {
                        locationName: 'gatewayArn'
                      },
                      GatewayInstanceArn: {
                        locationName: 'gatewayInstanceArn'
                      },
                      InstanceId: {
                        locationName: 'instanceId'
                      },
                      InstanceState: {
                        locationName: 'instanceState'
                      }
                    },
                    required: ['GatewayArn', 'GatewayInstanceArn', 'InstanceId']
                  }
                },
                NextToken: {
                  locationName: 'nextToken'
                }
              }
            }
          },
          ListGateways: {
            http: {
              method: 'GET',
              requestUri: '/v1/gateways',
              responseCode: 200
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
              members: {
                Gateways: {
                  locationName: 'gateways',
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      GatewayArn: {
                        locationName: 'gatewayArn'
                      },
                      GatewayState: {
                        locationName: 'gatewayState'
                      },
                      Name: {
                        locationName: 'name'
                      }
                    },
                    required: ['GatewayArn', 'GatewayState', 'Name']
                  }
                },
                NextToken: {
                  locationName: 'nextToken'
                }
              }
            }
          },
          ListOfferings: {
            http: {
              method: 'GET',
              requestUri: '/v1/offerings',
              responseCode: 200
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
              members: {
                NextToken: {
                  locationName: 'nextToken'
                },
                Offerings: {
                  locationName: 'offerings',
                  type: 'list',
                  member: {
                    shape: 'S4a'
                  }
                }
              }
            }
          },
          ListReservations: {
            http: {
              method: 'GET',
              requestUri: '/v1/reservations',
              responseCode: 200
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
              members: {
                NextToken: {
                  locationName: 'nextToken'
                },
                Reservations: {
                  locationName: 'reservations',
                  type: 'list',
                  member: {
                    shape: 'S4h'
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
              members: {
                ResourceArn: {
                  location: 'uri',
                  locationName: 'resourceArn'
                }
              },
              required: ['ResourceArn']
            },
            output: {
              type: 'structure',
              members: {
                Tags: {
                  shape: 'S5f',
                  locationName: 'tags'
                }
              }
            }
          },
          PurchaseOffering: {
            http: {
              requestUri: '/v1/offerings/{offeringArn}',
              responseCode: 201
            },
            input: {
              type: 'structure',
              members: {
                OfferingArn: {
                  location: 'uri',
                  locationName: 'offeringArn'
                },
                ReservationName: {
                  locationName: 'reservationName'
                },
                Start: {
                  locationName: 'start'
                }
              },
              required: ['OfferingArn', 'Start', 'ReservationName']
            },
            output: {
              type: 'structure',
              members: {
                Reservation: {
                  shape: 'S4h',
                  locationName: 'reservation'
                }
              }
            }
          },
          RemoveBridgeOutput: {
            http: {
              method: 'DELETE',
              requestUri: '/v1/bridges/{bridgeArn}/outputs/{outputName}',
              responseCode: 202
            },
            input: {
              type: 'structure',
              members: {
                BridgeArn: {
                  location: 'uri',
                  locationName: 'bridgeArn'
                },
                OutputName: {
                  location: 'uri',
                  locationName: 'outputName'
                }
              },
              required: ['OutputName', 'BridgeArn']
            },
            output: {
              type: 'structure',
              members: {
                BridgeArn: {
                  locationName: 'bridgeArn'
                },
                OutputName: {
                  locationName: 'outputName'
                }
              }
            }
          },
          RemoveBridgeSource: {
            http: {
              method: 'DELETE',
              requestUri: '/v1/bridges/{bridgeArn}/sources/{sourceName}',
              responseCode: 202
            },
            input: {
              type: 'structure',
              members: {
                BridgeArn: {
                  location: 'uri',
                  locationName: 'bridgeArn'
                },
                SourceName: {
                  location: 'uri',
                  locationName: 'sourceName'
                }
              },
              required: ['BridgeArn', 'SourceName']
            },
            output: {
              type: 'structure',
              members: {
                BridgeArn: {
                  locationName: 'bridgeArn'
                },
                SourceName: {
                  locationName: 'sourceName'
                }
              }
            }
          },
          RemoveFlowMediaStream: {
            http: {
              method: 'DELETE',
              requestUri: '/v1/flows/{flowArn}/mediaStreams/{mediaStreamName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                FlowArn: {
                  location: 'uri',
                  locationName: 'flowArn'
                },
                MediaStreamName: {
                  location: 'uri',
                  locationName: 'mediaStreamName'
                }
              },
              required: ['FlowArn', 'MediaStreamName']
            },
            output: {
              type: 'structure',
              members: {
                FlowArn: {
                  locationName: 'flowArn'
                },
                MediaStreamName: {
                  locationName: 'mediaStreamName'
                }
              }
            }
          },
          RemoveFlowOutput: {
            http: {
              method: 'DELETE',
              requestUri: '/v1/flows/{flowArn}/outputs/{outputArn}',
              responseCode: 202
            },
            input: {
              type: 'structure',
              members: {
                FlowArn: {
                  location: 'uri',
                  locationName: 'flowArn'
                },
                OutputArn: {
                  location: 'uri',
                  locationName: 'outputArn'
                }
              },
              required: ['FlowArn', 'OutputArn']
            },
            output: {
              type: 'structure',
              members: {
                FlowArn: {
                  locationName: 'flowArn'
                },
                OutputArn: {
                  locationName: 'outputArn'
                }
              }
            }
          },
          RemoveFlowSource: {
            http: {
              method: 'DELETE',
              requestUri: '/v1/flows/{flowArn}/source/{sourceArn}',
              responseCode: 202
            },
            input: {
              type: 'structure',
              members: {
                FlowArn: {
                  location: 'uri',
                  locationName: 'flowArn'
                },
                SourceArn: {
                  location: 'uri',
                  locationName: 'sourceArn'
                }
              },
              required: ['FlowArn', 'SourceArn']
            },
            output: {
              type: 'structure',
              members: {
                FlowArn: {
                  locationName: 'flowArn'
                },
                SourceArn: {
                  locationName: 'sourceArn'
                }
              }
            }
          },
          RemoveFlowVpcInterface: {
            http: {
              method: 'DELETE',
              requestUri: '/v1/flows/{flowArn}/vpcInterfaces/{vpcInterfaceName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                FlowArn: {
                  location: 'uri',
                  locationName: 'flowArn'
                },
                VpcInterfaceName: {
                  location: 'uri',
                  locationName: 'vpcInterfaceName'
                }
              },
              required: ['FlowArn', 'VpcInterfaceName']
            },
            output: {
              type: 'structure',
              members: {
                FlowArn: {
                  locationName: 'flowArn'
                },
                NonDeletedNetworkInterfaceIds: {
                  shape: 'S16',
                  locationName: 'nonDeletedNetworkInterfaceIds'
                },
                VpcInterfaceName: {
                  locationName: 'vpcInterfaceName'
                }
              }
            }
          },
          RevokeFlowEntitlement: {
            http: {
              method: 'DELETE',
              requestUri: '/v1/flows/{flowArn}/entitlements/{entitlementArn}',
              responseCode: 202
            },
            input: {
              type: 'structure',
              members: {
                EntitlementArn: {
                  location: 'uri',
                  locationName: 'entitlementArn'
                },
                FlowArn: {
                  location: 'uri',
                  locationName: 'flowArn'
                }
              },
              required: ['FlowArn', 'EntitlementArn']
            },
            output: {
              type: 'structure',
              members: {
                EntitlementArn: {
                  locationName: 'entitlementArn'
                },
                FlowArn: {
                  locationName: 'flowArn'
                }
              }
            }
          },
          StartFlow: {
            http: {
              requestUri: '/v1/flows/start/{flowArn}',
              responseCode: 202
            },
            input: {
              type: 'structure',
              members: {
                FlowArn: {
                  location: 'uri',
                  locationName: 'flowArn'
                }
              },
              required: ['FlowArn']
            },
            output: {
              type: 'structure',
              members: {
                FlowArn: {
                  locationName: 'flowArn'
                },
                Status: {
                  locationName: 'status'
                }
              }
            }
          },
          StopFlow: {
            http: {
              requestUri: '/v1/flows/stop/{flowArn}',
              responseCode: 202
            },
            input: {
              type: 'structure',
              members: {
                FlowArn: {
                  location: 'uri',
                  locationName: 'flowArn'
                }
              },
              required: ['FlowArn']
            },
            output: {
              type: 'structure',
              members: {
                FlowArn: {
                  locationName: 'flowArn'
                },
                Status: {
                  locationName: 'status'
                }
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
              members: {
                ResourceArn: {
                  location: 'uri',
                  locationName: 'resourceArn'
                },
                Tags: {
                  shape: 'S5f',
                  locationName: 'tags'
                }
              },
              required: ['ResourceArn', 'Tags']
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
              members: {
                ResourceArn: {
                  location: 'uri',
                  locationName: 'resourceArn'
                },
                TagKeys: {
                  shape: 'S16',
                  location: 'querystring',
                  locationName: 'tagKeys'
                }
              },
              required: ['TagKeys', 'ResourceArn']
            }
          },
          UpdateBridge: {
            http: {
              method: 'PUT',
              requestUri: '/v1/bridges/{bridgeArn}',
              responseCode: 202
            },
            input: {
              type: 'structure',
              members: {
                BridgeArn: {
                  location: 'uri',
                  locationName: 'bridgeArn'
                },
                EgressGatewayBridge: {
                  locationName: 'egressGatewayBridge',
                  type: 'structure',
                  members: {
                    MaxBitrate: {
                      locationName: 'maxBitrate',
                      type: 'integer'
                    }
                  }
                },
                IngressGatewayBridge: {
                  locationName: 'ingressGatewayBridge',
                  type: 'structure',
                  members: {
                    MaxBitrate: {
                      locationName: 'maxBitrate',
                      type: 'integer'
                    },
                    MaxOutputs: {
                      locationName: 'maxOutputs',
                      type: 'integer'
                    }
                  }
                },
                SourceFailoverConfig: {
                  shape: 'S65',
                  locationName: 'sourceFailoverConfig'
                }
              },
              required: ['BridgeArn']
            },
            output: {
              type: 'structure',
              members: {
                Bridge: {
                  shape: 'S2p',
                  locationName: 'bridge'
                }
              }
            }
          },
          UpdateBridgeOutput: {
            http: {
              method: 'PUT',
              requestUri: '/v1/bridges/{bridgeArn}/outputs/{outputName}',
              responseCode: 202
            },
            input: {
              type: 'structure',
              members: {
                BridgeArn: {
                  location: 'uri',
                  locationName: 'bridgeArn'
                },
                NetworkOutput: {
                  locationName: 'networkOutput',
                  type: 'structure',
                  members: {
                    IpAddress: {
                      locationName: 'ipAddress'
                    },
                    NetworkName: {
                      locationName: 'networkName'
                    },
                    Port: {
                      locationName: 'port',
                      type: 'integer'
                    },
                    Protocol: {
                      locationName: 'protocol'
                    },
                    Ttl: {
                      locationName: 'ttl',
                      type: 'integer'
                    }
                  }
                },
                OutputName: {
                  location: 'uri',
                  locationName: 'outputName'
                }
              },
              required: ['OutputName', 'BridgeArn']
            },
            output: {
              type: 'structure',
              members: {
                BridgeArn: {
                  locationName: 'bridgeArn'
                },
                Output: {
                  shape: 'Sa',
                  locationName: 'output'
                }
              }
            }
          },
          UpdateBridgeSource: {
            http: {
              method: 'PUT',
              requestUri: '/v1/bridges/{bridgeArn}/sources/{sourceName}',
              responseCode: 202
            },
            input: {
              type: 'structure',
              members: {
                BridgeArn: {
                  location: 'uri',
                  locationName: 'bridgeArn'
                },
                FlowSource: {
                  locationName: 'flowSource',
                  type: 'structure',
                  members: {
                    FlowArn: {
                      locationName: 'flowArn'
                    },
                    FlowVpcInterfaceAttachment: {
                      shape: 'Sh',
                      locationName: 'flowVpcInterfaceAttachment'
                    }
                  }
                },
                NetworkSource: {
                  locationName: 'networkSource',
                  type: 'structure',
                  members: {
                    MulticastIp: {
                      locationName: 'multicastIp'
                    },
                    NetworkName: {
                      locationName: 'networkName'
                    },
                    Port: {
                      locationName: 'port',
                      type: 'integer'
                    },
                    Protocol: {
                      locationName: 'protocol'
                    }
                  }
                },
                SourceName: {
                  location: 'uri',
                  locationName: 'sourceName'
                }
              },
              required: ['BridgeArn', 'SourceName']
            },
            output: {
              type: 'structure',
              members: {
                BridgeArn: {
                  locationName: 'bridgeArn'
                },
                Source: {
                  shape: 'Sl',
                  locationName: 'source'
                }
              }
            }
          },
          UpdateBridgeState: {
            http: {
              method: 'PUT',
              requestUri: '/v1/bridges/{bridgeArn}/state',
              responseCode: 202
            },
            input: {
              type: 'structure',
              members: {
                BridgeArn: {
                  location: 'uri',
                  locationName: 'bridgeArn'
                },
                DesiredState: {
                  locationName: 'desiredState'
                }
              },
              required: ['BridgeArn', 'DesiredState']
            },
            output: {
              type: 'structure',
              members: {
                BridgeArn: {
                  locationName: 'bridgeArn'
                },
                DesiredState: {
                  locationName: 'desiredState'
                }
              }
            }
          },
          UpdateFlow: {
            http: {
              method: 'PUT',
              requestUri: '/v1/flows/{flowArn}',
              responseCode: 202
            },
            input: {
              type: 'structure',
              members: {
                FlowArn: {
                  location: 'uri',
                  locationName: 'flowArn'
                },
                SourceFailoverConfig: {
                  shape: 'S65',
                  locationName: 'sourceFailoverConfig'
                },
                Maintenance: {
                  locationName: 'maintenance',
                  type: 'structure',
                  members: {
                    MaintenanceDay: {
                      locationName: 'maintenanceDay'
                    },
                    MaintenanceScheduledDate: {
                      locationName: 'maintenanceScheduledDate'
                    },
                    MaintenanceStartHour: {
                      locationName: 'maintenanceStartHour'
                    }
                  }
                }
              },
              required: ['FlowArn']
            },
            output: {
              type: 'structure',
              members: {
                Flow: {
                  shape: 'S32',
                  locationName: 'flow'
                }
              }
            }
          },
          UpdateFlowEntitlement: {
            http: {
              method: 'PUT',
              requestUri: '/v1/flows/{flowArn}/entitlements/{entitlementArn}',
              responseCode: 202
            },
            input: {
              type: 'structure',
              members: {
                Description: {
                  locationName: 'description'
                },
                Encryption: {
                  shape: 'S6l',
                  locationName: 'encryption'
                },
                EntitlementArn: {
                  location: 'uri',
                  locationName: 'entitlementArn'
                },
                EntitlementStatus: {
                  locationName: 'entitlementStatus'
                },
                FlowArn: {
                  location: 'uri',
                  locationName: 'flowArn'
                },
                Subscribers: {
                  shape: 'S16',
                  locationName: 'subscribers'
                }
              },
              required: ['FlowArn', 'EntitlementArn']
            },
            output: {
              type: 'structure',
              members: {
                Entitlement: {
                  shape: 'S34',
                  locationName: 'entitlement'
                },
                FlowArn: {
                  locationName: 'flowArn'
                }
              }
            }
          },
          UpdateFlowMediaStream: {
            http: {
              method: 'PUT',
              requestUri: '/v1/flows/{flowArn}/mediaStreams/{mediaStreamName}',
              responseCode: 202
            },
            input: {
              type: 'structure',
              members: {
                Attributes: {
                  shape: 'Sr',
                  locationName: 'attributes'
                },
                ClockRate: {
                  locationName: 'clockRate',
                  type: 'integer'
                },
                Description: {
                  locationName: 'description'
                },
                FlowArn: {
                  location: 'uri',
                  locationName: 'flowArn'
                },
                MediaStreamName: {
                  location: 'uri',
                  locationName: 'mediaStreamName'
                },
                MediaStreamType: {
                  locationName: 'mediaStreamType'
                },
                VideoFormat: {
                  locationName: 'videoFormat'
                }
              },
              required: ['FlowArn', 'MediaStreamName']
            },
            output: {
              type: 'structure',
              members: {
                FlowArn: {
                  locationName: 'flowArn'
                },
                MediaStream: {
                  shape: 'S10',
                  locationName: 'mediaStream'
                }
              }
            }
          },
          UpdateFlowOutput: {
            http: {
              method: 'PUT',
              requestUri: '/v1/flows/{flowArn}/outputs/{outputArn}',
              responseCode: 202
            },
            input: {
              type: 'structure',
              members: {
                CidrAllowList: {
                  shape: 'S16',
                  locationName: 'cidrAllowList'
                },
                Description: {
                  locationName: 'description'
                },
                Destination: {
                  locationName: 'destination'
                },
                Encryption: {
                  shape: 'S6l',
                  locationName: 'encryption'
                },
                FlowArn: {
                  location: 'uri',
                  locationName: 'flowArn'
                },
                MaxLatency: {
                  locationName: 'maxLatency',
                  type: 'integer'
                },
                MediaStreamOutputConfigurations: {
                  shape: 'S1a',
                  locationName: 'mediaStreamOutputConfigurations'
                },
                MinLatency: {
                  locationName: 'minLatency',
                  type: 'integer'
                },
                OutputArn: {
                  location: 'uri',
                  locationName: 'outputArn'
                },
                Port: {
                  locationName: 'port',
                  type: 'integer'
                },
                Protocol: {
                  locationName: 'protocol'
                },
                RemoteId: {
                  locationName: 'remoteId'
                },
                SenderControlPort: {
                  locationName: 'senderControlPort',
                  type: 'integer'
                },
                SenderIpAddress: {
                  locationName: 'senderIpAddress'
                },
                SmoothingLatency: {
                  locationName: 'smoothingLatency',
                  type: 'integer'
                },
                StreamId: {
                  locationName: 'streamId'
                },
                VpcInterfaceAttachment: {
                  shape: 'Sh',
                  locationName: 'vpcInterfaceAttachment'
                }
              },
              required: ['FlowArn', 'OutputArn']
            },
            output: {
              type: 'structure',
              members: {
                FlowArn: {
                  locationName: 'flowArn'
                },
                Output: {
                  shape: 'S1l',
                  locationName: 'output'
                }
              }
            }
          },
          UpdateFlowSource: {
            http: {
              method: 'PUT',
              requestUri: '/v1/flows/{flowArn}/source/{sourceArn}',
              responseCode: 202
            },
            input: {
              type: 'structure',
              members: {
                Decryption: {
                  shape: 'S6l',
                  locationName: 'decryption'
                },
                Description: {
                  locationName: 'description'
                },
                EntitlementArn: {
                  locationName: 'entitlementArn'
                },
                FlowArn: {
                  location: 'uri',
                  locationName: 'flowArn'
                },
                IngestPort: {
                  locationName: 'ingestPort',
                  type: 'integer'
                },
                MaxBitrate: {
                  locationName: 'maxBitrate',
                  type: 'integer'
                },
                MaxLatency: {
                  locationName: 'maxLatency',
                  type: 'integer'
                },
                MaxSyncBuffer: {
                  locationName: 'maxSyncBuffer',
                  type: 'integer'
                },
                MediaStreamSourceConfigurations: {
                  shape: 'S1x',
                  locationName: 'mediaStreamSourceConfigurations'
                },
                MinLatency: {
                  locationName: 'minLatency',
                  type: 'integer'
                },
                Protocol: {
                  locationName: 'protocol'
                },
                SenderControlPort: {
                  locationName: 'senderControlPort',
                  type: 'integer'
                },
                SenderIpAddress: {
                  locationName: 'senderIpAddress'
                },
                SourceArn: {
                  location: 'uri',
                  locationName: 'sourceArn'
                },
                SourceListenerAddress: {
                  locationName: 'sourceListenerAddress'
                },
                SourceListenerPort: {
                  locationName: 'sourceListenerPort',
                  type: 'integer'
                },
                StreamId: {
                  locationName: 'streamId'
                },
                VpcInterfaceName: {
                  locationName: 'vpcInterfaceName'
                },
                WhitelistCidr: {
                  locationName: 'whitelistCidr'
                },
                GatewayBridgeSource: {
                  locationName: 'gatewayBridgeSource',
                  type: 'structure',
                  members: {
                    BridgeArn: {
                      locationName: 'bridgeArn'
                    },
                    VpcInterfaceAttachment: {
                      shape: 'Sh',
                      locationName: 'vpcInterfaceAttachment'
                    }
                  }
                }
              },
              required: ['FlowArn', 'SourceArn']
            },
            output: {
              type: 'structure',
              members: {
                FlowArn: {
                  locationName: 'flowArn'
                },
                Source: {
                  shape: 'S24',
                  locationName: 'source'
                }
              }
            }
          },
          UpdateGatewayInstance: {
            http: {
              method: 'PUT',
              requestUri: '/v1/gateway-instances/{gatewayInstanceArn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                BridgePlacement: {
                  locationName: 'bridgePlacement'
                },
                GatewayInstanceArn: {
                  location: 'uri',
                  locationName: 'gatewayInstanceArn'
                }
              },
              required: ['GatewayInstanceArn']
            },
            output: {
              type: 'structure',
              members: {
                BridgePlacement: {
                  locationName: 'bridgePlacement'
                },
                GatewayInstanceArn: {
                  locationName: 'gatewayInstanceArn'
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
              members: {
                NetworkOutput: {
                  locationName: 'networkOutput',
                  type: 'structure',
                  members: {
                    IpAddress: {
                      locationName: 'ipAddress'
                    },
                    Name: {
                      locationName: 'name'
                    },
                    NetworkName: {
                      locationName: 'networkName'
                    },
                    Port: {
                      locationName: 'port',
                      type: 'integer'
                    },
                    Protocol: {
                      locationName: 'protocol'
                    },
                    Ttl: {
                      locationName: 'ttl',
                      type: 'integer'
                    }
                  },
                  required: ['NetworkName', 'Port', 'IpAddress', 'Protocol', 'Ttl', 'Name']
                }
              }
            }
          },
          S9: {
            type: 'list',
            member: {
              shape: 'Sa'
            }
          },
          Sa: {
            type: 'structure',
            members: {
              FlowOutput: {
                locationName: 'flowOutput',
                type: 'structure',
                members: {
                  FlowArn: {
                    locationName: 'flowArn'
                  },
                  FlowSourceArn: {
                    locationName: 'flowSourceArn'
                  },
                  Name: {
                    locationName: 'name'
                  }
                },
                required: ['FlowSourceArn', 'FlowArn', 'Name']
              },
              NetworkOutput: {
                locationName: 'networkOutput',
                type: 'structure',
                members: {
                  IpAddress: {
                    locationName: 'ipAddress'
                  },
                  Name: {
                    locationName: 'name'
                  },
                  NetworkName: {
                    locationName: 'networkName'
                  },
                  Port: {
                    locationName: 'port',
                    type: 'integer'
                  },
                  Protocol: {
                    locationName: 'protocol'
                  },
                  Ttl: {
                    locationName: 'ttl',
                    type: 'integer'
                  }
                },
                required: ['NetworkName', 'Port', 'IpAddress', 'Protocol', 'Ttl', 'Name']
              }
            }
          },
          Se: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                FlowSource: {
                  locationName: 'flowSource',
                  type: 'structure',
                  members: {
                    FlowArn: {
                      locationName: 'flowArn'
                    },
                    FlowVpcInterfaceAttachment: {
                      shape: 'Sh',
                      locationName: 'flowVpcInterfaceAttachment'
                    },
                    Name: {
                      locationName: 'name'
                    }
                  },
                  required: ['FlowArn', 'Name']
                },
                NetworkSource: {
                  locationName: 'networkSource',
                  type: 'structure',
                  members: {
                    MulticastIp: {
                      locationName: 'multicastIp'
                    },
                    Name: {
                      locationName: 'name'
                    },
                    NetworkName: {
                      locationName: 'networkName'
                    },
                    Port: {
                      locationName: 'port',
                      type: 'integer'
                    },
                    Protocol: {
                      locationName: 'protocol'
                    }
                  },
                  required: ['NetworkName', 'MulticastIp', 'Port', 'Protocol', 'Name']
                }
              }
            }
          },
          Sh: {
            type: 'structure',
            members: {
              VpcInterfaceName: {
                locationName: 'vpcInterfaceName'
              }
            }
          },
          Sk: {
            type: 'list',
            member: {
              shape: 'Sl'
            }
          },
          Sl: {
            type: 'structure',
            members: {
              FlowSource: {
                locationName: 'flowSource',
                type: 'structure',
                members: {
                  FlowArn: {
                    locationName: 'flowArn'
                  },
                  FlowVpcInterfaceAttachment: {
                    shape: 'Sh',
                    locationName: 'flowVpcInterfaceAttachment'
                  },
                  Name: {
                    locationName: 'name'
                  },
                  OutputArn: {
                    locationName: 'outputArn'
                  }
                },
                required: ['FlowArn', 'Name']
              },
              NetworkSource: {
                locationName: 'networkSource',
                type: 'structure',
                members: {
                  MulticastIp: {
                    locationName: 'multicastIp'
                  },
                  Name: {
                    locationName: 'name'
                  },
                  NetworkName: {
                    locationName: 'networkName'
                  },
                  Port: {
                    locationName: 'port',
                    type: 'integer'
                  },
                  Protocol: {
                    locationName: 'protocol'
                  }
                },
                required: ['NetworkName', 'MulticastIp', 'Port', 'Protocol', 'Name']
              }
            }
          },
          Sp: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Attributes: {
                  shape: 'Sr',
                  locationName: 'attributes'
                },
                ClockRate: {
                  locationName: 'clockRate',
                  type: 'integer'
                },
                Description: {
                  locationName: 'description'
                },
                MediaStreamId: {
                  locationName: 'mediaStreamId',
                  type: 'integer'
                },
                MediaStreamName: {
                  locationName: 'mediaStreamName'
                },
                MediaStreamType: {
                  locationName: 'mediaStreamType'
                },
                VideoFormat: {
                  locationName: 'videoFormat'
                }
              },
              required: ['MediaStreamType', 'MediaStreamId', 'MediaStreamName']
            }
          },
          Sr: {
            type: 'structure',
            members: {
              Fmtp: {
                locationName: 'fmtp',
                type: 'structure',
                members: {
                  ChannelOrder: {
                    locationName: 'channelOrder'
                  },
                  Colorimetry: {
                    locationName: 'colorimetry'
                  },
                  ExactFramerate: {
                    locationName: 'exactFramerate'
                  },
                  Par: {
                    locationName: 'par'
                  },
                  Range: {
                    locationName: 'range'
                  },
                  ScanMode: {
                    locationName: 'scanMode'
                  },
                  Tcs: {
                    locationName: 'tcs'
                  }
                }
              },
              Lang: {
                locationName: 'lang'
              }
            }
          },
          Sz: {
            type: 'list',
            member: {
              shape: 'S10'
            }
          },
          S10: {
            type: 'structure',
            members: {
              Attributes: {
                locationName: 'attributes',
                type: 'structure',
                members: {
                  Fmtp: {
                    locationName: 'fmtp',
                    type: 'structure',
                    members: {
                      ChannelOrder: {
                        locationName: 'channelOrder'
                      },
                      Colorimetry: {
                        locationName: 'colorimetry'
                      },
                      ExactFramerate: {
                        locationName: 'exactFramerate'
                      },
                      Par: {
                        locationName: 'par'
                      },
                      Range: {
                        locationName: 'range'
                      },
                      ScanMode: {
                        locationName: 'scanMode'
                      },
                      Tcs: {
                        locationName: 'tcs'
                      }
                    }
                  },
                  Lang: {
                    locationName: 'lang'
                  }
                },
                required: ['Fmtp']
              },
              ClockRate: {
                locationName: 'clockRate',
                type: 'integer'
              },
              Description: {
                locationName: 'description'
              },
              Fmt: {
                locationName: 'fmt',
                type: 'integer'
              },
              MediaStreamId: {
                locationName: 'mediaStreamId',
                type: 'integer'
              },
              MediaStreamName: {
                locationName: 'mediaStreamName'
              },
              MediaStreamType: {
                locationName: 'mediaStreamType'
              },
              VideoFormat: {
                locationName: 'videoFormat'
              }
            },
            required: ['MediaStreamType', 'MediaStreamId', 'MediaStreamName', 'Fmt']
          },
          S14: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                CidrAllowList: {
                  shape: 'S16',
                  locationName: 'cidrAllowList'
                },
                Description: {
                  locationName: 'description'
                },
                Destination: {
                  locationName: 'destination'
                },
                Encryption: {
                  shape: 'S17',
                  locationName: 'encryption'
                },
                MaxLatency: {
                  locationName: 'maxLatency',
                  type: 'integer'
                },
                MediaStreamOutputConfigurations: {
                  shape: 'S1a',
                  locationName: 'mediaStreamOutputConfigurations'
                },
                MinLatency: {
                  locationName: 'minLatency',
                  type: 'integer'
                },
                Name: {
                  locationName: 'name'
                },
                Port: {
                  locationName: 'port',
                  type: 'integer'
                },
                Protocol: {
                  locationName: 'protocol'
                },
                RemoteId: {
                  locationName: 'remoteId'
                },
                SenderControlPort: {
                  locationName: 'senderControlPort',
                  type: 'integer'
                },
                SmoothingLatency: {
                  locationName: 'smoothingLatency',
                  type: 'integer'
                },
                StreamId: {
                  locationName: 'streamId'
                },
                VpcInterfaceAttachment: {
                  shape: 'Sh',
                  locationName: 'vpcInterfaceAttachment'
                }
              },
              required: ['Protocol']
            }
          },
          S16: {
            type: 'list',
            member: {}
          },
          S17: {
            type: 'structure',
            members: {
              Algorithm: {
                locationName: 'algorithm'
              },
              ConstantInitializationVector: {
                locationName: 'constantInitializationVector'
              },
              DeviceId: {
                locationName: 'deviceId'
              },
              KeyType: {
                locationName: 'keyType'
              },
              Region: {
                locationName: 'region'
              },
              ResourceId: {
                locationName: 'resourceId'
              },
              RoleArn: {
                locationName: 'roleArn'
              },
              SecretArn: {
                locationName: 'secretArn'
              },
              Url: {
                locationName: 'url'
              }
            },
            required: ['RoleArn']
          },
          S1a: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                DestinationConfigurations: {
                  locationName: 'destinationConfigurations',
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      DestinationIp: {
                        locationName: 'destinationIp'
                      },
                      DestinationPort: {
                        locationName: 'destinationPort',
                        type: 'integer'
                      },
                      Interface: {
                        shape: 'S1e',
                        locationName: 'interface'
                      }
                    },
                    required: ['DestinationIp', 'DestinationPort', 'Interface']
                  }
                },
                EncodingName: {
                  locationName: 'encodingName'
                },
                EncodingParameters: {
                  locationName: 'encodingParameters',
                  type: 'structure',
                  members: {
                    CompressionFactor: {
                      locationName: 'compressionFactor',
                      type: 'double'
                    },
                    EncoderProfile: {
                      locationName: 'encoderProfile'
                    }
                  },
                  required: ['EncoderProfile', 'CompressionFactor']
                },
                MediaStreamName: {
                  locationName: 'mediaStreamName'
                }
              },
              required: ['MediaStreamName', 'EncodingName']
            }
          },
          S1e: {
            type: 'structure',
            members: {
              Name: {
                locationName: 'name'
              }
            },
            required: ['Name']
          },
          S1k: {
            type: 'list',
            member: {
              shape: 'S1l'
            }
          },
          S1l: {
            type: 'structure',
            members: {
              DataTransferSubscriberFeePercent: {
                locationName: 'dataTransferSubscriberFeePercent',
                type: 'integer'
              },
              Description: {
                locationName: 'description'
              },
              Destination: {
                locationName: 'destination'
              },
              Encryption: {
                shape: 'S17',
                locationName: 'encryption'
              },
              EntitlementArn: {
                locationName: 'entitlementArn'
              },
              ListenerAddress: {
                locationName: 'listenerAddress'
              },
              MediaLiveInputArn: {
                locationName: 'mediaLiveInputArn'
              },
              MediaStreamOutputConfigurations: {
                locationName: 'mediaStreamOutputConfigurations',
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    DestinationConfigurations: {
                      locationName: 'destinationConfigurations',
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          DestinationIp: {
                            locationName: 'destinationIp'
                          },
                          DestinationPort: {
                            locationName: 'destinationPort',
                            type: 'integer'
                          },
                          Interface: {
                            shape: 'S1q',
                            locationName: 'interface'
                          },
                          OutboundIp: {
                            locationName: 'outboundIp'
                          }
                        },
                        required: ['DestinationIp', 'DestinationPort', 'Interface', 'OutboundIp']
                      }
                    },
                    EncodingName: {
                      locationName: 'encodingName'
                    },
                    EncodingParameters: {
                      locationName: 'encodingParameters',
                      type: 'structure',
                      members: {
                        CompressionFactor: {
                          locationName: 'compressionFactor',
                          type: 'double'
                        },
                        EncoderProfile: {
                          locationName: 'encoderProfile'
                        }
                      },
                      required: ['EncoderProfile', 'CompressionFactor']
                    },
                    MediaStreamName: {
                      locationName: 'mediaStreamName'
                    }
                  },
                  required: ['MediaStreamName', 'EncodingName']
                }
              },
              Name: {
                locationName: 'name'
              },
              OutputArn: {
                locationName: 'outputArn'
              },
              Port: {
                locationName: 'port',
                type: 'integer'
              },
              Transport: {
                shape: 'S1s',
                locationName: 'transport'
              },
              VpcInterfaceAttachment: {
                shape: 'Sh',
                locationName: 'vpcInterfaceAttachment'
              },
              BridgeArn: {
                locationName: 'bridgeArn'
              },
              BridgePorts: {
                locationName: 'bridgePorts',
                type: 'list',
                member: {
                  type: 'integer'
                }
              }
            },
            required: ['OutputArn', 'Name']
          },
          S1q: {
            type: 'structure',
            members: {
              Name: {
                locationName: 'name'
              }
            },
            required: ['Name']
          },
          S1s: {
            type: 'structure',
            members: {
              CidrAllowList: {
                shape: 'S16',
                locationName: 'cidrAllowList'
              },
              MaxBitrate: {
                locationName: 'maxBitrate',
                type: 'integer'
              },
              MaxLatency: {
                locationName: 'maxLatency',
                type: 'integer'
              },
              MaxSyncBuffer: {
                locationName: 'maxSyncBuffer',
                type: 'integer'
              },
              MinLatency: {
                locationName: 'minLatency',
                type: 'integer'
              },
              Protocol: {
                locationName: 'protocol'
              },
              RemoteId: {
                locationName: 'remoteId'
              },
              SenderControlPort: {
                locationName: 'senderControlPort',
                type: 'integer'
              },
              SenderIpAddress: {
                locationName: 'senderIpAddress'
              },
              SmoothingLatency: {
                locationName: 'smoothingLatency',
                type: 'integer'
              },
              SourceListenerAddress: {
                locationName: 'sourceListenerAddress'
              },
              SourceListenerPort: {
                locationName: 'sourceListenerPort',
                type: 'integer'
              },
              StreamId: {
                locationName: 'streamId'
              }
            },
            required: ['Protocol']
          },
          S1v: {
            type: 'list',
            member: {
              shape: 'S1w'
            }
          },
          S1w: {
            type: 'structure',
            members: {
              Decryption: {
                shape: 'S17',
                locationName: 'decryption'
              },
              Description: {
                locationName: 'description'
              },
              EntitlementArn: {
                locationName: 'entitlementArn'
              },
              IngestPort: {
                locationName: 'ingestPort',
                type: 'integer'
              },
              MaxBitrate: {
                locationName: 'maxBitrate',
                type: 'integer'
              },
              MaxLatency: {
                locationName: 'maxLatency',
                type: 'integer'
              },
              MaxSyncBuffer: {
                locationName: 'maxSyncBuffer',
                type: 'integer'
              },
              MediaStreamSourceConfigurations: {
                shape: 'S1x',
                locationName: 'mediaStreamSourceConfigurations'
              },
              MinLatency: {
                locationName: 'minLatency',
                type: 'integer'
              },
              Name: {
                locationName: 'name'
              },
              Protocol: {
                locationName: 'protocol'
              },
              SenderControlPort: {
                locationName: 'senderControlPort',
                type: 'integer'
              },
              SenderIpAddress: {
                locationName: 'senderIpAddress'
              },
              SourceListenerAddress: {
                locationName: 'sourceListenerAddress'
              },
              SourceListenerPort: {
                locationName: 'sourceListenerPort',
                type: 'integer'
              },
              StreamId: {
                locationName: 'streamId'
              },
              VpcInterfaceName: {
                locationName: 'vpcInterfaceName'
              },
              WhitelistCidr: {
                locationName: 'whitelistCidr'
              },
              GatewayBridgeSource: {
                locationName: 'gatewayBridgeSource',
                type: 'structure',
                members: {
                  BridgeArn: {
                    locationName: 'bridgeArn'
                  },
                  VpcInterfaceAttachment: {
                    shape: 'Sh',
                    locationName: 'vpcInterfaceAttachment'
                  }
                },
                required: ['BridgeArn']
              }
            }
          },
          S1x: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                EncodingName: {
                  locationName: 'encodingName'
                },
                InputConfigurations: {
                  locationName: 'inputConfigurations',
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      InputPort: {
                        locationName: 'inputPort',
                        type: 'integer'
                      },
                      Interface: {
                        shape: 'S1e',
                        locationName: 'interface'
                      }
                    },
                    required: ['InputPort', 'Interface']
                  }
                },
                MediaStreamName: {
                  locationName: 'mediaStreamName'
                }
              },
              required: ['MediaStreamName', 'EncodingName']
            }
          },
          S23: {
            type: 'list',
            member: {
              shape: 'S24'
            }
          },
          S24: {
            type: 'structure',
            members: {
              DataTransferSubscriberFeePercent: {
                locationName: 'dataTransferSubscriberFeePercent',
                type: 'integer'
              },
              Decryption: {
                shape: 'S17',
                locationName: 'decryption'
              },
              Description: {
                locationName: 'description'
              },
              EntitlementArn: {
                locationName: 'entitlementArn'
              },
              IngestIp: {
                locationName: 'ingestIp'
              },
              IngestPort: {
                locationName: 'ingestPort',
                type: 'integer'
              },
              MediaStreamSourceConfigurations: {
                locationName: 'mediaStreamSourceConfigurations',
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    EncodingName: {
                      locationName: 'encodingName'
                    },
                    InputConfigurations: {
                      locationName: 'inputConfigurations',
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          InputIp: {
                            locationName: 'inputIp'
                          },
                          InputPort: {
                            locationName: 'inputPort',
                            type: 'integer'
                          },
                          Interface: {
                            shape: 'S1q',
                            locationName: 'interface'
                          }
                        },
                        required: ['InputPort', 'InputIp', 'Interface']
                      }
                    },
                    MediaStreamName: {
                      locationName: 'mediaStreamName'
                    }
                  },
                  required: ['MediaStreamName', 'EncodingName']
                }
              },
              Name: {
                locationName: 'name'
              },
              SenderControlPort: {
                locationName: 'senderControlPort',
                type: 'integer'
              },
              SenderIpAddress: {
                locationName: 'senderIpAddress'
              },
              SourceArn: {
                locationName: 'sourceArn'
              },
              Transport: {
                shape: 'S1s',
                locationName: 'transport'
              },
              VpcInterfaceName: {
                locationName: 'vpcInterfaceName'
              },
              WhitelistCidr: {
                locationName: 'whitelistCidr'
              },
              GatewayBridgeSource: {
                locationName: 'gatewayBridgeSource',
                type: 'structure',
                members: {
                  BridgeArn: {
                    locationName: 'bridgeArn'
                  },
                  VpcInterfaceAttachment: {
                    shape: 'Sh',
                    locationName: 'vpcInterfaceAttachment'
                  }
                },
                required: ['BridgeArn']
              }
            },
            required: ['Name', 'SourceArn']
          },
          S2b: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Name: {
                  locationName: 'name'
                },
                NetworkInterfaceType: {
                  locationName: 'networkInterfaceType'
                },
                RoleArn: {
                  locationName: 'roleArn'
                },
                SecurityGroupIds: {
                  shape: 'S16',
                  locationName: 'securityGroupIds'
                },
                SubnetId: {
                  locationName: 'subnetId'
                }
              },
              required: ['SubnetId', 'SecurityGroupIds', 'RoleArn', 'Name']
            }
          },
          S2f: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Name: {
                  locationName: 'name'
                },
                NetworkInterfaceIds: {
                  shape: 'S16',
                  locationName: 'networkInterfaceIds'
                },
                NetworkInterfaceType: {
                  locationName: 'networkInterfaceType'
                },
                RoleArn: {
                  locationName: 'roleArn'
                },
                SecurityGroupIds: {
                  shape: 'S16',
                  locationName: 'securityGroupIds'
                },
                SubnetId: {
                  locationName: 'subnetId'
                }
              },
              required: ['NetworkInterfaceType', 'NetworkInterfaceIds', 'SubnetId', 'SecurityGroupIds', 'RoleArn', 'Name']
            }
          },
          S2k: {
            type: 'structure',
            members: {
              FailoverMode: {
                locationName: 'failoverMode'
              },
              RecoveryWindow: {
                locationName: 'recoveryWindow',
                type: 'integer'
              },
              SourcePriority: {
                shape: 'S2m',
                locationName: 'sourcePriority'
              },
              State: {
                locationName: 'state'
              }
            }
          },
          S2m: {
            type: 'structure',
            members: {
              PrimarySource: {
                locationName: 'primarySource'
              }
            }
          },
          S2p: {
            type: 'structure',
            members: {
              BridgeArn: {
                locationName: 'bridgeArn'
              },
              BridgeMessages: {
                shape: 'S2q',
                locationName: 'bridgeMessages'
              },
              BridgeState: {
                locationName: 'bridgeState'
              },
              EgressGatewayBridge: {
                locationName: 'egressGatewayBridge',
                type: 'structure',
                members: {
                  InstanceId: {
                    locationName: 'instanceId'
                  },
                  MaxBitrate: {
                    locationName: 'maxBitrate',
                    type: 'integer'
                  }
                },
                required: ['MaxBitrate']
              },
              IngressGatewayBridge: {
                locationName: 'ingressGatewayBridge',
                type: 'structure',
                members: {
                  InstanceId: {
                    locationName: 'instanceId'
                  },
                  MaxBitrate: {
                    locationName: 'maxBitrate',
                    type: 'integer'
                  },
                  MaxOutputs: {
                    locationName: 'maxOutputs',
                    type: 'integer'
                  }
                },
                required: ['MaxOutputs', 'MaxBitrate']
              },
              Name: {
                locationName: 'name'
              },
              Outputs: {
                shape: 'S9',
                locationName: 'outputs'
              },
              PlacementArn: {
                locationName: 'placementArn'
              },
              SourceFailoverConfig: {
                shape: 'S2k',
                locationName: 'sourceFailoverConfig'
              },
              Sources: {
                shape: 'Sk',
                locationName: 'sources'
              }
            },
            required: ['BridgeArn', 'BridgeState', 'PlacementArn', 'Name']
          },
          S2q: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Code: {
                  locationName: 'code'
                },
                Message: {
                  locationName: 'message'
                },
                ResourceName: {
                  locationName: 'resourceName'
                }
              },
              required: ['Message', 'Code']
            }
          },
          S2w: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                DataTransferSubscriberFeePercent: {
                  locationName: 'dataTransferSubscriberFeePercent',
                  type: 'integer'
                },
                Description: {
                  locationName: 'description'
                },
                Encryption: {
                  shape: 'S17',
                  locationName: 'encryption'
                },
                EntitlementStatus: {
                  locationName: 'entitlementStatus'
                },
                Name: {
                  locationName: 'name'
                },
                Subscribers: {
                  shape: 'S16',
                  locationName: 'subscribers'
                }
              },
              required: ['Subscribers']
            }
          },
          S32: {
            type: 'structure',
            members: {
              AvailabilityZone: {
                locationName: 'availabilityZone'
              },
              Description: {
                locationName: 'description'
              },
              EgressIp: {
                locationName: 'egressIp'
              },
              Entitlements: {
                shape: 'S33',
                locationName: 'entitlements'
              },
              FlowArn: {
                locationName: 'flowArn'
              },
              MediaStreams: {
                shape: 'Sz',
                locationName: 'mediaStreams'
              },
              Name: {
                locationName: 'name'
              },
              Outputs: {
                shape: 'S1k',
                locationName: 'outputs'
              },
              Source: {
                shape: 'S24',
                locationName: 'source'
              },
              SourceFailoverConfig: {
                shape: 'S2k',
                locationName: 'sourceFailoverConfig'
              },
              Sources: {
                shape: 'S23',
                locationName: 'sources'
              },
              Status: {
                locationName: 'status'
              },
              VpcInterfaces: {
                shape: 'S2f',
                locationName: 'vpcInterfaces'
              },
              Maintenance: {
                shape: 'S36',
                locationName: 'maintenance'
              }
            },
            required: ['Status', 'AvailabilityZone', 'Source', 'Name', 'Entitlements', 'Outputs', 'FlowArn']
          },
          S33: {
            type: 'list',
            member: {
              shape: 'S34'
            }
          },
          S34: {
            type: 'structure',
            members: {
              DataTransferSubscriberFeePercent: {
                locationName: 'dataTransferSubscriberFeePercent',
                type: 'integer'
              },
              Description: {
                locationName: 'description'
              },
              Encryption: {
                shape: 'S17',
                locationName: 'encryption'
              },
              EntitlementArn: {
                locationName: 'entitlementArn'
              },
              EntitlementStatus: {
                locationName: 'entitlementStatus'
              },
              Name: {
                locationName: 'name'
              },
              Subscribers: {
                shape: 'S16',
                locationName: 'subscribers'
              }
            },
            required: ['EntitlementArn', 'Subscribers', 'Name']
          },
          S36: {
            type: 'structure',
            members: {
              MaintenanceDay: {
                locationName: 'maintenanceDay'
              },
              MaintenanceDeadline: {
                locationName: 'maintenanceDeadline'
              },
              MaintenanceScheduledDate: {
                locationName: 'maintenanceScheduledDate'
              },
              MaintenanceStartHour: {
                locationName: 'maintenanceStartHour'
              }
            }
          },
          S38: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                CidrBlock: {
                  locationName: 'cidrBlock'
                },
                Name: {
                  locationName: 'name'
                }
              },
              required: ['CidrBlock', 'Name']
            }
          },
          S3b: {
            type: 'structure',
            members: {
              EgressCidrBlocks: {
                shape: 'S16',
                locationName: 'egressCidrBlocks'
              },
              GatewayArn: {
                locationName: 'gatewayArn'
              },
              GatewayMessages: {
                shape: 'S2q',
                locationName: 'gatewayMessages'
              },
              GatewayState: {
                locationName: 'gatewayState'
              },
              Name: {
                locationName: 'name'
              },
              Networks: {
                shape: 'S38',
                locationName: 'networks'
              }
            },
            required: ['GatewayArn', 'Networks', 'EgressCidrBlocks', 'Name']
          },
          S4a: {
            type: 'structure',
            members: {
              CurrencyCode: {
                locationName: 'currencyCode'
              },
              Duration: {
                locationName: 'duration',
                type: 'integer'
              },
              DurationUnits: {
                locationName: 'durationUnits'
              },
              OfferingArn: {
                locationName: 'offeringArn'
              },
              OfferingDescription: {
                locationName: 'offeringDescription'
              },
              PricePerUnit: {
                locationName: 'pricePerUnit'
              },
              PriceUnits: {
                locationName: 'priceUnits'
              },
              ResourceSpecification: {
                shape: 'S4d',
                locationName: 'resourceSpecification'
              }
            },
            required: ['CurrencyCode', 'OfferingArn', 'OfferingDescription', 'DurationUnits', 'Duration', 'PricePerUnit', 'ResourceSpecification', 'PriceUnits']
          },
          S4d: {
            type: 'structure',
            members: {
              ReservedBitrate: {
                locationName: 'reservedBitrate',
                type: 'integer'
              },
              ResourceType: {
                locationName: 'resourceType'
              }
            },
            required: ['ResourceType']
          },
          S4h: {
            type: 'structure',
            members: {
              CurrencyCode: {
                locationName: 'currencyCode'
              },
              Duration: {
                locationName: 'duration',
                type: 'integer'
              },
              DurationUnits: {
                locationName: 'durationUnits'
              },
              End: {
                locationName: 'end'
              },
              OfferingArn: {
                locationName: 'offeringArn'
              },
              OfferingDescription: {
                locationName: 'offeringDescription'
              },
              PricePerUnit: {
                locationName: 'pricePerUnit'
              },
              PriceUnits: {
                locationName: 'priceUnits'
              },
              ReservationArn: {
                locationName: 'reservationArn'
              },
              ReservationName: {
                locationName: 'reservationName'
              },
              ReservationState: {
                locationName: 'reservationState'
              },
              ResourceSpecification: {
                shape: 'S4d',
                locationName: 'resourceSpecification'
              },
              Start: {
                locationName: 'start'
              }
            },
            required: ['CurrencyCode', 'ReservationState', 'OfferingArn', 'ReservationArn', 'Start', 'OfferingDescription', 'ReservationName', 'End', 'Duration', 'DurationUnits', 'PricePerUnit', 'ResourceSpecification', 'PriceUnits']
          },
          S5f: {
            type: 'map',
            key: {},
            value: {}
          },
          S65: {
            type: 'structure',
            members: {
              FailoverMode: {
                locationName: 'failoverMode'
              },
              RecoveryWindow: {
                locationName: 'recoveryWindow',
                type: 'integer'
              },
              SourcePriority: {
                shape: 'S2m',
                locationName: 'sourcePriority'
              },
              State: {
                locationName: 'state'
              }
            }
          },
          S6l: {
            type: 'structure',
            members: {
              Algorithm: {
                locationName: 'algorithm'
              },
              ConstantInitializationVector: {
                locationName: 'constantInitializationVector'
              },
              DeviceId: {
                locationName: 'deviceId'
              },
              KeyType: {
                locationName: 'keyType'
              },
              Region: {
                locationName: 'region'
              },
              ResourceId: {
                locationName: 'resourceId'
              },
              RoleArn: {
                locationName: 'roleArn'
              },
              SecretArn: {
                locationName: 'secretArn'
              },
              Url: {
                locationName: 'url'
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=f6a5b9fe3a331296149e4640ab4dc2e5185bf2f5.js.map