System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        metadata: {
          apiVersion: '2017-10-14',
          endpointPrefix: 'medialive',
          signingName: 'medialive',
          serviceFullName: 'AWS Elemental MediaLive',
          serviceId: 'MediaLive',
          protocol: 'rest-json',
          uid: 'medialive-2017-10-14',
          signatureVersion: 'v4',
          serviceAbbreviation: 'MediaLive',
          jsonVersion: '1.1'
        },
        operations: {
          AcceptInputDeviceTransfer: {
            http: {
              requestUri: '/prod/inputDevices/{inputDeviceId}/accept',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                InputDeviceId: {
                  location: 'uri',
                  locationName: 'inputDeviceId'
                }
              },
              required: ['InputDeviceId']
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          BatchDelete: {
            http: {
              requestUri: '/prod/batch/delete',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ChannelIds: {
                  shape: 'S5',
                  locationName: 'channelIds'
                },
                InputIds: {
                  shape: 'S5',
                  locationName: 'inputIds'
                },
                InputSecurityGroupIds: {
                  shape: 'S5',
                  locationName: 'inputSecurityGroupIds'
                },
                MultiplexIds: {
                  shape: 'S5',
                  locationName: 'multiplexIds'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Failed: {
                  shape: 'S7',
                  locationName: 'failed'
                },
                Successful: {
                  shape: 'S9',
                  locationName: 'successful'
                }
              }
            }
          },
          BatchStart: {
            http: {
              requestUri: '/prod/batch/start',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ChannelIds: {
                  shape: 'S5',
                  locationName: 'channelIds'
                },
                MultiplexIds: {
                  shape: 'S5',
                  locationName: 'multiplexIds'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Failed: {
                  shape: 'S7',
                  locationName: 'failed'
                },
                Successful: {
                  shape: 'S9',
                  locationName: 'successful'
                }
              }
            }
          },
          BatchStop: {
            http: {
              requestUri: '/prod/batch/stop',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ChannelIds: {
                  shape: 'S5',
                  locationName: 'channelIds'
                },
                MultiplexIds: {
                  shape: 'S5',
                  locationName: 'multiplexIds'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Failed: {
                  shape: 'S7',
                  locationName: 'failed'
                },
                Successful: {
                  shape: 'S9',
                  locationName: 'successful'
                }
              }
            }
          },
          BatchUpdateSchedule: {
            http: {
              method: 'PUT',
              requestUri: '/prod/channels/{channelId}/schedule',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ChannelId: {
                  location: 'uri',
                  locationName: 'channelId'
                },
                Creates: {
                  locationName: 'creates',
                  type: 'structure',
                  members: {
                    ScheduleActions: {
                      shape: 'Sh',
                      locationName: 'scheduleActions'
                    }
                  },
                  required: ['ScheduleActions']
                },
                Deletes: {
                  locationName: 'deletes',
                  type: 'structure',
                  members: {
                    ActionNames: {
                      shape: 'S5',
                      locationName: 'actionNames'
                    }
                  },
                  required: ['ActionNames']
                }
              },
              required: ['ChannelId']
            },
            output: {
              type: 'structure',
              members: {
                Creates: {
                  locationName: 'creates',
                  type: 'structure',
                  members: {
                    ScheduleActions: {
                      shape: 'Sh',
                      locationName: 'scheduleActions'
                    }
                  },
                  required: ['ScheduleActions']
                },
                Deletes: {
                  locationName: 'deletes',
                  type: 'structure',
                  members: {
                    ScheduleActions: {
                      shape: 'Sh',
                      locationName: 'scheduleActions'
                    }
                  },
                  required: ['ScheduleActions']
                }
              }
            }
          },
          CancelInputDeviceTransfer: {
            http: {
              requestUri: '/prod/inputDevices/{inputDeviceId}/cancel',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                InputDeviceId: {
                  location: 'uri',
                  locationName: 'inputDeviceId'
                }
              },
              required: ['InputDeviceId']
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          ClaimDevice: {
            http: {
              requestUri: '/prod/claimDevice',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                Id: {
                  locationName: 'id'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          CreateChannel: {
            http: {
              requestUri: '/prod/channels',
              responseCode: 201
            },
            input: {
              type: 'structure',
              members: {
                CdiInputSpecification: {
                  shape: 'S27',
                  locationName: 'cdiInputSpecification'
                },
                ChannelClass: {
                  locationName: 'channelClass'
                },
                Destinations: {
                  shape: 'S2a',
                  locationName: 'destinations'
                },
                EncoderSettings: {
                  shape: 'S2i',
                  locationName: 'encoderSettings'
                },
                InputAttachments: {
                  shape: 'Sdx',
                  locationName: 'inputAttachments'
                },
                InputSpecification: {
                  shape: 'Sfm',
                  locationName: 'inputSpecification'
                },
                LogLevel: {
                  locationName: 'logLevel'
                },
                Maintenance: {
                  locationName: 'maintenance',
                  type: 'structure',
                  members: {
                    MaintenanceDay: {
                      locationName: 'maintenanceDay'
                    },
                    MaintenanceStartTime: {
                      locationName: 'maintenanceStartTime'
                    }
                  }
                },
                Name: {
                  locationName: 'name'
                },
                RequestId: {
                  locationName: 'requestId',
                  idempotencyToken: true
                },
                Reserved: {
                  locationName: 'reserved',
                  deprecated: true
                },
                RoleArn: {
                  locationName: 'roleArn'
                },
                Tags: {
                  shape: 'Sfu',
                  locationName: 'tags'
                },
                Vpc: {
                  locationName: 'vpc',
                  type: 'structure',
                  members: {
                    PublicAddressAllocationIds: {
                      shape: 'S5',
                      locationName: 'publicAddressAllocationIds'
                    },
                    SecurityGroupIds: {
                      shape: 'S5',
                      locationName: 'securityGroupIds'
                    },
                    SubnetIds: {
                      shape: 'S5',
                      locationName: 'subnetIds'
                    }
                  },
                  required: ['SubnetIds']
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Channel: {
                  shape: 'Sfx',
                  locationName: 'channel'
                }
              }
            }
          },
          CreateInput: {
            http: {
              requestUri: '/prod/inputs',
              responseCode: 201
            },
            input: {
              type: 'structure',
              members: {
                Destinations: {
                  shape: 'Sg6',
                  locationName: 'destinations'
                },
                InputDevices: {
                  shape: 'Sg8',
                  locationName: 'inputDevices'
                },
                InputSecurityGroups: {
                  shape: 'S5',
                  locationName: 'inputSecurityGroups'
                },
                MediaConnectFlows: {
                  shape: 'Sga',
                  locationName: 'mediaConnectFlows'
                },
                Name: {
                  locationName: 'name'
                },
                RequestId: {
                  locationName: 'requestId',
                  idempotencyToken: true
                },
                RoleArn: {
                  locationName: 'roleArn'
                },
                Sources: {
                  shape: 'Sgc',
                  locationName: 'sources'
                },
                Tags: {
                  shape: 'Sfu',
                  locationName: 'tags'
                },
                Type: {
                  locationName: 'type'
                },
                Vpc: {
                  locationName: 'vpc',
                  type: 'structure',
                  members: {
                    SecurityGroupIds: {
                      shape: 'S5',
                      locationName: 'securityGroupIds'
                    },
                    SubnetIds: {
                      shape: 'S5',
                      locationName: 'subnetIds'
                    }
                  },
                  required: ['SubnetIds']
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Input: {
                  shape: 'Sgh',
                  locationName: 'input'
                }
              }
            }
          },
          CreateInputSecurityGroup: {
            http: {
              requestUri: '/prod/inputSecurityGroups',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                Tags: {
                  shape: 'Sfu',
                  locationName: 'tags'
                },
                WhitelistRules: {
                  shape: 'Sgt',
                  locationName: 'whitelistRules'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                SecurityGroup: {
                  shape: 'Sgw',
                  locationName: 'securityGroup'
                }
              }
            }
          },
          CreateMultiplex: {
            http: {
              requestUri: '/prod/multiplexes',
              responseCode: 201
            },
            input: {
              type: 'structure',
              members: {
                AvailabilityZones: {
                  shape: 'S5',
                  locationName: 'availabilityZones'
                },
                MultiplexSettings: {
                  shape: 'Sh1',
                  locationName: 'multiplexSettings'
                },
                Name: {
                  locationName: 'name'
                },
                RequestId: {
                  locationName: 'requestId',
                  idempotencyToken: true
                },
                Tags: {
                  shape: 'Sfu',
                  locationName: 'tags'
                }
              },
              required: ['RequestId', 'MultiplexSettings', 'AvailabilityZones', 'Name']
            },
            output: {
              type: 'structure',
              members: {
                Multiplex: {
                  shape: 'Sh6',
                  locationName: 'multiplex'
                }
              }
            }
          },
          CreateMultiplexProgram: {
            http: {
              requestUri: '/prod/multiplexes/{multiplexId}/programs',
              responseCode: 201
            },
            input: {
              type: 'structure',
              members: {
                MultiplexId: {
                  location: 'uri',
                  locationName: 'multiplexId'
                },
                MultiplexProgramSettings: {
                  shape: 'Shc',
                  locationName: 'multiplexProgramSettings'
                },
                ProgramName: {
                  locationName: 'programName'
                },
                RequestId: {
                  locationName: 'requestId',
                  idempotencyToken: true
                }
              },
              required: ['MultiplexId', 'RequestId', 'MultiplexProgramSettings', 'ProgramName']
            },
            output: {
              type: 'structure',
              members: {
                MultiplexProgram: {
                  shape: 'Shk',
                  locationName: 'multiplexProgram'
                }
              }
            }
          },
          CreatePartnerInput: {
            http: {
              requestUri: '/prod/inputs/{inputId}/partners',
              responseCode: 201
            },
            input: {
              type: 'structure',
              members: {
                InputId: {
                  location: 'uri',
                  locationName: 'inputId'
                },
                RequestId: {
                  locationName: 'requestId',
                  idempotencyToken: true
                },
                Tags: {
                  shape: 'Sfu',
                  locationName: 'tags'
                }
              },
              required: ['InputId']
            },
            output: {
              type: 'structure',
              members: {
                Input: {
                  shape: 'Sgh',
                  locationName: 'input'
                }
              }
            }
          },
          CreateTags: {
            http: {
              requestUri: '/prod/tags/{resource-arn}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              members: {
                ResourceArn: {
                  location: 'uri',
                  locationName: 'resource-arn'
                },
                Tags: {
                  shape: 'Sfu',
                  locationName: 'tags'
                }
              },
              required: ['ResourceArn']
            }
          },
          DeleteChannel: {
            http: {
              method: 'DELETE',
              requestUri: '/prod/channels/{channelId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ChannelId: {
                  location: 'uri',
                  locationName: 'channelId'
                }
              },
              required: ['ChannelId']
            },
            output: {
              type: 'structure',
              members: {
                Arn: {
                  locationName: 'arn'
                },
                CdiInputSpecification: {
                  shape: 'S27',
                  locationName: 'cdiInputSpecification'
                },
                ChannelClass: {
                  locationName: 'channelClass'
                },
                Destinations: {
                  shape: 'S2a',
                  locationName: 'destinations'
                },
                EgressEndpoints: {
                  shape: 'Sfy',
                  locationName: 'egressEndpoints'
                },
                EncoderSettings: {
                  shape: 'S2i',
                  locationName: 'encoderSettings'
                },
                Id: {
                  locationName: 'id'
                },
                InputAttachments: {
                  shape: 'Sdx',
                  locationName: 'inputAttachments'
                },
                InputSpecification: {
                  shape: 'Sfm',
                  locationName: 'inputSpecification'
                },
                LogLevel: {
                  locationName: 'logLevel'
                },
                Maintenance: {
                  shape: 'Sg0',
                  locationName: 'maintenance'
                },
                Name: {
                  locationName: 'name'
                },
                PipelineDetails: {
                  shape: 'Sg1',
                  locationName: 'pipelineDetails'
                },
                PipelinesRunningCount: {
                  locationName: 'pipelinesRunningCount',
                  type: 'integer'
                },
                RoleArn: {
                  locationName: 'roleArn'
                },
                State: {
                  locationName: 'state'
                },
                Tags: {
                  shape: 'Sfu',
                  locationName: 'tags'
                },
                Vpc: {
                  shape: 'Sg4',
                  locationName: 'vpc'
                }
              }
            }
          },
          DeleteInput: {
            http: {
              method: 'DELETE',
              requestUri: '/prod/inputs/{inputId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                InputId: {
                  location: 'uri',
                  locationName: 'inputId'
                }
              },
              required: ['InputId']
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteInputSecurityGroup: {
            http: {
              method: 'DELETE',
              requestUri: '/prod/inputSecurityGroups/{inputSecurityGroupId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                InputSecurityGroupId: {
                  location: 'uri',
                  locationName: 'inputSecurityGroupId'
                }
              },
              required: ['InputSecurityGroupId']
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteMultiplex: {
            http: {
              method: 'DELETE',
              requestUri: '/prod/multiplexes/{multiplexId}',
              responseCode: 202
            },
            input: {
              type: 'structure',
              members: {
                MultiplexId: {
                  location: 'uri',
                  locationName: 'multiplexId'
                }
              },
              required: ['MultiplexId']
            },
            output: {
              type: 'structure',
              members: {
                Arn: {
                  locationName: 'arn'
                },
                AvailabilityZones: {
                  shape: 'S5',
                  locationName: 'availabilityZones'
                },
                Destinations: {
                  shape: 'Sh7',
                  locationName: 'destinations'
                },
                Id: {
                  locationName: 'id'
                },
                MultiplexSettings: {
                  shape: 'Sh1',
                  locationName: 'multiplexSettings'
                },
                Name: {
                  locationName: 'name'
                },
                PipelinesRunningCount: {
                  locationName: 'pipelinesRunningCount',
                  type: 'integer'
                },
                ProgramCount: {
                  locationName: 'programCount',
                  type: 'integer'
                },
                State: {
                  locationName: 'state'
                },
                Tags: {
                  shape: 'Sfu',
                  locationName: 'tags'
                }
              }
            }
          },
          DeleteMultiplexProgram: {
            http: {
              method: 'DELETE',
              requestUri: '/prod/multiplexes/{multiplexId}/programs/{programName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                MultiplexId: {
                  location: 'uri',
                  locationName: 'multiplexId'
                },
                ProgramName: {
                  location: 'uri',
                  locationName: 'programName'
                }
              },
              required: ['MultiplexId', 'ProgramName']
            },
            output: {
              type: 'structure',
              members: {
                ChannelId: {
                  locationName: 'channelId'
                },
                MultiplexProgramSettings: {
                  shape: 'Shc',
                  locationName: 'multiplexProgramSettings'
                },
                PacketIdentifiersMap: {
                  shape: 'Shl',
                  locationName: 'packetIdentifiersMap'
                },
                PipelineDetails: {
                  shape: 'Shn',
                  locationName: 'pipelineDetails'
                },
                ProgramName: {
                  locationName: 'programName'
                }
              }
            }
          },
          DeleteReservation: {
            http: {
              method: 'DELETE',
              requestUri: '/prod/reservations/{reservationId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ReservationId: {
                  location: 'uri',
                  locationName: 'reservationId'
                }
              },
              required: ['ReservationId']
            },
            output: {
              type: 'structure',
              members: {
                Arn: {
                  locationName: 'arn'
                },
                Count: {
                  locationName: 'count',
                  type: 'integer'
                },
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
                FixedPrice: {
                  locationName: 'fixedPrice',
                  type: 'double'
                },
                Name: {
                  locationName: 'name'
                },
                OfferingDescription: {
                  locationName: 'offeringDescription'
                },
                OfferingId: {
                  locationName: 'offeringId'
                },
                OfferingType: {
                  locationName: 'offeringType'
                },
                Region: {
                  locationName: 'region'
                },
                RenewalSettings: {
                  shape: 'Si6',
                  locationName: 'renewalSettings'
                },
                ReservationId: {
                  locationName: 'reservationId'
                },
                ResourceSpecification: {
                  shape: 'Si8',
                  locationName: 'resourceSpecification'
                },
                Start: {
                  locationName: 'start'
                },
                State: {
                  locationName: 'state'
                },
                Tags: {
                  shape: 'Sfu',
                  locationName: 'tags'
                },
                UsagePrice: {
                  locationName: 'usagePrice',
                  type: 'double'
                }
              }
            }
          },
          DeleteSchedule: {
            http: {
              method: 'DELETE',
              requestUri: '/prod/channels/{channelId}/schedule',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ChannelId: {
                  location: 'uri',
                  locationName: 'channelId'
                }
              },
              required: ['ChannelId']
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteTags: {
            http: {
              method: 'DELETE',
              requestUri: '/prod/tags/{resource-arn}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              members: {
                ResourceArn: {
                  location: 'uri',
                  locationName: 'resource-arn'
                },
                TagKeys: {
                  shape: 'S5',
                  location: 'querystring',
                  locationName: 'tagKeys'
                }
              },
              required: ['TagKeys', 'ResourceArn']
            }
          },
          DescribeAccountConfiguration: {
            http: {
              method: 'GET',
              requestUri: '/prod/accountConfiguration',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {
                AccountConfiguration: {
                  shape: 'Sim',
                  locationName: 'accountConfiguration'
                }
              }
            }
          },
          DescribeChannel: {
            http: {
              method: 'GET',
              requestUri: '/prod/channels/{channelId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ChannelId: {
                  location: 'uri',
                  locationName: 'channelId'
                }
              },
              required: ['ChannelId']
            },
            output: {
              type: 'structure',
              members: {
                Arn: {
                  locationName: 'arn'
                },
                CdiInputSpecification: {
                  shape: 'S27',
                  locationName: 'cdiInputSpecification'
                },
                ChannelClass: {
                  locationName: 'channelClass'
                },
                Destinations: {
                  shape: 'S2a',
                  locationName: 'destinations'
                },
                EgressEndpoints: {
                  shape: 'Sfy',
                  locationName: 'egressEndpoints'
                },
                EncoderSettings: {
                  shape: 'S2i',
                  locationName: 'encoderSettings'
                },
                Id: {
                  locationName: 'id'
                },
                InputAttachments: {
                  shape: 'Sdx',
                  locationName: 'inputAttachments'
                },
                InputSpecification: {
                  shape: 'Sfm',
                  locationName: 'inputSpecification'
                },
                LogLevel: {
                  locationName: 'logLevel'
                },
                Maintenance: {
                  shape: 'Sg0',
                  locationName: 'maintenance'
                },
                Name: {
                  locationName: 'name'
                },
                PipelineDetails: {
                  shape: 'Sg1',
                  locationName: 'pipelineDetails'
                },
                PipelinesRunningCount: {
                  locationName: 'pipelinesRunningCount',
                  type: 'integer'
                },
                RoleArn: {
                  locationName: 'roleArn'
                },
                State: {
                  locationName: 'state'
                },
                Tags: {
                  shape: 'Sfu',
                  locationName: 'tags'
                },
                Vpc: {
                  shape: 'Sg4',
                  locationName: 'vpc'
                }
              }
            }
          },
          DescribeInput: {
            http: {
              method: 'GET',
              requestUri: '/prod/inputs/{inputId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                InputId: {
                  location: 'uri',
                  locationName: 'inputId'
                }
              },
              required: ['InputId']
            },
            output: {
              type: 'structure',
              members: {
                Arn: {
                  locationName: 'arn'
                },
                AttachedChannels: {
                  shape: 'S5',
                  locationName: 'attachedChannels'
                },
                Destinations: {
                  shape: 'Sgi',
                  locationName: 'destinations'
                },
                Id: {
                  locationName: 'id'
                },
                InputClass: {
                  locationName: 'inputClass'
                },
                InputDevices: {
                  shape: 'Sg8',
                  locationName: 'inputDevices'
                },
                InputPartnerIds: {
                  shape: 'S5',
                  locationName: 'inputPartnerIds'
                },
                InputSourceType: {
                  locationName: 'inputSourceType'
                },
                MediaConnectFlows: {
                  shape: 'Sgn',
                  locationName: 'mediaConnectFlows'
                },
                Name: {
                  locationName: 'name'
                },
                RoleArn: {
                  locationName: 'roleArn'
                },
                SecurityGroups: {
                  shape: 'S5',
                  locationName: 'securityGroups'
                },
                Sources: {
                  shape: 'Sgp',
                  locationName: 'sources'
                },
                State: {
                  locationName: 'state'
                },
                Tags: {
                  shape: 'Sfu',
                  locationName: 'tags'
                },
                Type: {
                  locationName: 'type'
                }
              }
            }
          },
          DescribeInputDevice: {
            http: {
              method: 'GET',
              requestUri: '/prod/inputDevices/{inputDeviceId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                InputDeviceId: {
                  location: 'uri',
                  locationName: 'inputDeviceId'
                }
              },
              required: ['InputDeviceId']
            },
            output: {
              type: 'structure',
              members: {
                Arn: {
                  locationName: 'arn'
                },
                ConnectionState: {
                  locationName: 'connectionState'
                },
                DeviceSettingsSyncState: {
                  locationName: 'deviceSettingsSyncState'
                },
                DeviceUpdateStatus: {
                  locationName: 'deviceUpdateStatus'
                },
                HdDeviceSettings: {
                  shape: 'Siw',
                  locationName: 'hdDeviceSettings'
                },
                Id: {
                  locationName: 'id'
                },
                MacAddress: {
                  locationName: 'macAddress'
                },
                Name: {
                  locationName: 'name'
                },
                NetworkSettings: {
                  shape: 'Sj1',
                  locationName: 'networkSettings'
                },
                SerialNumber: {
                  locationName: 'serialNumber'
                },
                Type: {
                  locationName: 'type'
                },
                UhdDeviceSettings: {
                  shape: 'Sj4',
                  locationName: 'uhdDeviceSettings'
                },
                Tags: {
                  shape: 'Sfu',
                  locationName: 'tags'
                },
                AvailabilityZone: {
                  locationName: 'availabilityZone'
                },
                MedialiveInputArns: {
                  shape: 'S5',
                  locationName: 'medialiveInputArns'
                },
                OutputType: {
                  locationName: 'outputType'
                }
              }
            }
          },
          DescribeInputDeviceThumbnail: {
            http: {
              method: 'GET',
              requestUri: '/prod/inputDevices/{inputDeviceId}/thumbnailData',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                InputDeviceId: {
                  location: 'uri',
                  locationName: 'inputDeviceId'
                },
                Accept: {
                  location: 'header',
                  locationName: 'accept'
                }
              },
              required: ['InputDeviceId', 'Accept']
            },
            output: {
              type: 'structure',
              members: {
                Body: {
                  locationName: 'body',
                  type: 'blob',
                  streaming: true
                },
                ContentType: {
                  location: 'header',
                  locationName: 'Content-Type'
                },
                ContentLength: {
                  location: 'header',
                  locationName: 'Content-Length',
                  type: 'long'
                },
                ETag: {
                  location: 'header',
                  locationName: 'ETag'
                },
                LastModified: {
                  location: 'header',
                  locationName: 'Last-Modified',
                  type: 'timestamp'
                }
              },
              payload: 'Body'
            }
          },
          DescribeInputSecurityGroup: {
            http: {
              method: 'GET',
              requestUri: '/prod/inputSecurityGroups/{inputSecurityGroupId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                InputSecurityGroupId: {
                  location: 'uri',
                  locationName: 'inputSecurityGroupId'
                }
              },
              required: ['InputSecurityGroupId']
            },
            output: {
              type: 'structure',
              members: {
                Arn: {
                  locationName: 'arn'
                },
                Id: {
                  locationName: 'id'
                },
                Inputs: {
                  shape: 'S5',
                  locationName: 'inputs'
                },
                State: {
                  locationName: 'state'
                },
                Tags: {
                  shape: 'Sfu',
                  locationName: 'tags'
                },
                WhitelistRules: {
                  shape: 'Sgy',
                  locationName: 'whitelistRules'
                }
              }
            }
          },
          DescribeMultiplex: {
            http: {
              method: 'GET',
              requestUri: '/prod/multiplexes/{multiplexId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                MultiplexId: {
                  location: 'uri',
                  locationName: 'multiplexId'
                }
              },
              required: ['MultiplexId']
            },
            output: {
              type: 'structure',
              members: {
                Arn: {
                  locationName: 'arn'
                },
                AvailabilityZones: {
                  shape: 'S5',
                  locationName: 'availabilityZones'
                },
                Destinations: {
                  shape: 'Sh7',
                  locationName: 'destinations'
                },
                Id: {
                  locationName: 'id'
                },
                MultiplexSettings: {
                  shape: 'Sh1',
                  locationName: 'multiplexSettings'
                },
                Name: {
                  locationName: 'name'
                },
                PipelinesRunningCount: {
                  locationName: 'pipelinesRunningCount',
                  type: 'integer'
                },
                ProgramCount: {
                  locationName: 'programCount',
                  type: 'integer'
                },
                State: {
                  locationName: 'state'
                },
                Tags: {
                  shape: 'Sfu',
                  locationName: 'tags'
                }
              }
            }
          },
          DescribeMultiplexProgram: {
            http: {
              method: 'GET',
              requestUri: '/prod/multiplexes/{multiplexId}/programs/{programName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                MultiplexId: {
                  location: 'uri',
                  locationName: 'multiplexId'
                },
                ProgramName: {
                  location: 'uri',
                  locationName: 'programName'
                }
              },
              required: ['MultiplexId', 'ProgramName']
            },
            output: {
              type: 'structure',
              members: {
                ChannelId: {
                  locationName: 'channelId'
                },
                MultiplexProgramSettings: {
                  shape: 'Shc',
                  locationName: 'multiplexProgramSettings'
                },
                PacketIdentifiersMap: {
                  shape: 'Shl',
                  locationName: 'packetIdentifiersMap'
                },
                PipelineDetails: {
                  shape: 'Shn',
                  locationName: 'pipelineDetails'
                },
                ProgramName: {
                  locationName: 'programName'
                }
              }
            }
          },
          DescribeOffering: {
            http: {
              method: 'GET',
              requestUri: '/prod/offerings/{offeringId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                OfferingId: {
                  location: 'uri',
                  locationName: 'offeringId'
                }
              },
              required: ['OfferingId']
            },
            output: {
              type: 'structure',
              members: {
                Arn: {
                  locationName: 'arn'
                },
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
                FixedPrice: {
                  locationName: 'fixedPrice',
                  type: 'double'
                },
                OfferingDescription: {
                  locationName: 'offeringDescription'
                },
                OfferingId: {
                  locationName: 'offeringId'
                },
                OfferingType: {
                  locationName: 'offeringType'
                },
                Region: {
                  locationName: 'region'
                },
                ResourceSpecification: {
                  shape: 'Si8',
                  locationName: 'resourceSpecification'
                },
                UsagePrice: {
                  locationName: 'usagePrice',
                  type: 'double'
                }
              }
            }
          },
          DescribeReservation: {
            http: {
              method: 'GET',
              requestUri: '/prod/reservations/{reservationId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ReservationId: {
                  location: 'uri',
                  locationName: 'reservationId'
                }
              },
              required: ['ReservationId']
            },
            output: {
              type: 'structure',
              members: {
                Arn: {
                  locationName: 'arn'
                },
                Count: {
                  locationName: 'count',
                  type: 'integer'
                },
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
                FixedPrice: {
                  locationName: 'fixedPrice',
                  type: 'double'
                },
                Name: {
                  locationName: 'name'
                },
                OfferingDescription: {
                  locationName: 'offeringDescription'
                },
                OfferingId: {
                  locationName: 'offeringId'
                },
                OfferingType: {
                  locationName: 'offeringType'
                },
                Region: {
                  locationName: 'region'
                },
                RenewalSettings: {
                  shape: 'Si6',
                  locationName: 'renewalSettings'
                },
                ReservationId: {
                  locationName: 'reservationId'
                },
                ResourceSpecification: {
                  shape: 'Si8',
                  locationName: 'resourceSpecification'
                },
                Start: {
                  locationName: 'start'
                },
                State: {
                  locationName: 'state'
                },
                Tags: {
                  shape: 'Sfu',
                  locationName: 'tags'
                },
                UsagePrice: {
                  locationName: 'usagePrice',
                  type: 'double'
                }
              }
            }
          },
          DescribeSchedule: {
            http: {
              method: 'GET',
              requestUri: '/prod/channels/{channelId}/schedule',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ChannelId: {
                  location: 'uri',
                  locationName: 'channelId'
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
              },
              required: ['ChannelId']
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {
                  locationName: 'nextToken'
                },
                ScheduleActions: {
                  shape: 'Sh',
                  locationName: 'scheduleActions'
                }
              }
            }
          },
          DescribeThumbnails: {
            http: {
              method: 'GET',
              requestUri: '/prod/channels/{channelId}/thumbnails',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ChannelId: {
                  location: 'uri',
                  locationName: 'channelId'
                },
                PipelineId: {
                  location: 'querystring',
                  locationName: 'pipelineId'
                },
                ThumbnailType: {
                  location: 'querystring',
                  locationName: 'thumbnailType'
                }
              },
              required: ['ThumbnailType', 'PipelineId', 'ChannelId']
            },
            output: {
              type: 'structure',
              members: {
                ThumbnailDetails: {
                  locationName: 'thumbnailDetails',
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      PipelineId: {
                        locationName: 'pipelineId'
                      },
                      Thumbnails: {
                        locationName: 'thumbnails',
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            Body: {
                              locationName: 'body'
                            },
                            ContentType: {
                              locationName: 'contentType'
                            },
                            ThumbnailType: {
                              locationName: 'thumbnailType'
                            },
                            TimeStamp: {
                              shape: 'Sk2',
                              locationName: 'timeStamp'
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
          ListChannels: {
            http: {
              method: 'GET',
              requestUri: '/prod/channels',
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
                Channels: {
                  locationName: 'channels',
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Arn: {
                        locationName: 'arn'
                      },
                      CdiInputSpecification: {
                        shape: 'S27',
                        locationName: 'cdiInputSpecification'
                      },
                      ChannelClass: {
                        locationName: 'channelClass'
                      },
                      Destinations: {
                        shape: 'S2a',
                        locationName: 'destinations'
                      },
                      EgressEndpoints: {
                        shape: 'Sfy',
                        locationName: 'egressEndpoints'
                      },
                      Id: {
                        locationName: 'id'
                      },
                      InputAttachments: {
                        shape: 'Sdx',
                        locationName: 'inputAttachments'
                      },
                      InputSpecification: {
                        shape: 'Sfm',
                        locationName: 'inputSpecification'
                      },
                      LogLevel: {
                        locationName: 'logLevel'
                      },
                      Maintenance: {
                        shape: 'Sg0',
                        locationName: 'maintenance'
                      },
                      Name: {
                        locationName: 'name'
                      },
                      PipelinesRunningCount: {
                        locationName: 'pipelinesRunningCount',
                        type: 'integer'
                      },
                      RoleArn: {
                        locationName: 'roleArn'
                      },
                      State: {
                        locationName: 'state'
                      },
                      Tags: {
                        shape: 'Sfu',
                        locationName: 'tags'
                      },
                      Vpc: {
                        shape: 'Sg4',
                        locationName: 'vpc'
                      }
                    }
                  }
                },
                NextToken: {
                  locationName: 'nextToken'
                }
              }
            }
          },
          ListInputDeviceTransfers: {
            http: {
              method: 'GET',
              requestUri: '/prod/inputDeviceTransfers',
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
                },
                TransferType: {
                  location: 'querystring',
                  locationName: 'transferType'
                }
              },
              required: ['TransferType']
            },
            output: {
              type: 'structure',
              members: {
                InputDeviceTransfers: {
                  locationName: 'inputDeviceTransfers',
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Id: {
                        locationName: 'id'
                      },
                      Message: {
                        locationName: 'message'
                      },
                      TargetCustomerId: {
                        locationName: 'targetCustomerId'
                      },
                      TransferType: {
                        locationName: 'transferType'
                      }
                    }
                  }
                },
                NextToken: {
                  locationName: 'nextToken'
                }
              }
            }
          },
          ListInputDevices: {
            http: {
              method: 'GET',
              requestUri: '/prod/inputDevices',
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
                InputDevices: {
                  locationName: 'inputDevices',
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Arn: {
                        locationName: 'arn'
                      },
                      ConnectionState: {
                        locationName: 'connectionState'
                      },
                      DeviceSettingsSyncState: {
                        locationName: 'deviceSettingsSyncState'
                      },
                      DeviceUpdateStatus: {
                        locationName: 'deviceUpdateStatus'
                      },
                      HdDeviceSettings: {
                        shape: 'Siw',
                        locationName: 'hdDeviceSettings'
                      },
                      Id: {
                        locationName: 'id'
                      },
                      MacAddress: {
                        locationName: 'macAddress'
                      },
                      Name: {
                        locationName: 'name'
                      },
                      NetworkSettings: {
                        shape: 'Sj1',
                        locationName: 'networkSettings'
                      },
                      SerialNumber: {
                        locationName: 'serialNumber'
                      },
                      Type: {
                        locationName: 'type'
                      },
                      UhdDeviceSettings: {
                        shape: 'Sj4',
                        locationName: 'uhdDeviceSettings'
                      },
                      Tags: {
                        shape: 'Sfu',
                        locationName: 'tags'
                      },
                      AvailabilityZone: {
                        locationName: 'availabilityZone'
                      },
                      MedialiveInputArns: {
                        shape: 'S5',
                        locationName: 'medialiveInputArns'
                      },
                      OutputType: {
                        locationName: 'outputType'
                      }
                    }
                  }
                },
                NextToken: {
                  locationName: 'nextToken'
                }
              }
            }
          },
          ListInputSecurityGroups: {
            http: {
              method: 'GET',
              requestUri: '/prod/inputSecurityGroups',
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
                InputSecurityGroups: {
                  locationName: 'inputSecurityGroups',
                  type: 'list',
                  member: {
                    shape: 'Sgw'
                  }
                },
                NextToken: {
                  locationName: 'nextToken'
                }
              }
            }
          },
          ListInputs: {
            http: {
              method: 'GET',
              requestUri: '/prod/inputs',
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
                Inputs: {
                  locationName: 'inputs',
                  type: 'list',
                  member: {
                    shape: 'Sgh'
                  }
                },
                NextToken: {
                  locationName: 'nextToken'
                }
              }
            }
          },
          ListMultiplexPrograms: {
            http: {
              method: 'GET',
              requestUri: '/prod/multiplexes/{multiplexId}/programs',
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
                MultiplexId: {
                  location: 'uri',
                  locationName: 'multiplexId'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                }
              },
              required: ['MultiplexId']
            },
            output: {
              type: 'structure',
              members: {
                MultiplexPrograms: {
                  locationName: 'multiplexPrograms',
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ChannelId: {
                        locationName: 'channelId'
                      },
                      ProgramName: {
                        locationName: 'programName'
                      }
                    }
                  }
                },
                NextToken: {
                  locationName: 'nextToken'
                }
              }
            }
          },
          ListMultiplexes: {
            http: {
              method: 'GET',
              requestUri: '/prod/multiplexes',
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
                Multiplexes: {
                  locationName: 'multiplexes',
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Arn: {
                        locationName: 'arn'
                      },
                      AvailabilityZones: {
                        shape: 'S5',
                        locationName: 'availabilityZones'
                      },
                      Id: {
                        locationName: 'id'
                      },
                      MultiplexSettings: {
                        locationName: 'multiplexSettings',
                        type: 'structure',
                        members: {
                          TransportStreamBitrate: {
                            locationName: 'transportStreamBitrate',
                            type: 'integer'
                          }
                        }
                      },
                      Name: {
                        locationName: 'name'
                      },
                      PipelinesRunningCount: {
                        locationName: 'pipelinesRunningCount',
                        type: 'integer'
                      },
                      ProgramCount: {
                        locationName: 'programCount',
                        type: 'integer'
                      },
                      State: {
                        locationName: 'state'
                      },
                      Tags: {
                        shape: 'Sfu',
                        locationName: 'tags'
                      }
                    }
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
              requestUri: '/prod/offerings',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ChannelClass: {
                  location: 'querystring',
                  locationName: 'channelClass'
                },
                ChannelConfiguration: {
                  location: 'querystring',
                  locationName: 'channelConfiguration'
                },
                Codec: {
                  location: 'querystring',
                  locationName: 'codec'
                },
                Duration: {
                  location: 'querystring',
                  locationName: 'duration'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                MaximumBitrate: {
                  location: 'querystring',
                  locationName: 'maximumBitrate'
                },
                MaximumFramerate: {
                  location: 'querystring',
                  locationName: 'maximumFramerate'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                Resolution: {
                  location: 'querystring',
                  locationName: 'resolution'
                },
                ResourceType: {
                  location: 'querystring',
                  locationName: 'resourceType'
                },
                SpecialFeature: {
                  location: 'querystring',
                  locationName: 'specialFeature'
                },
                VideoQuality: {
                  location: 'querystring',
                  locationName: 'videoQuality'
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
                    type: 'structure',
                    members: {
                      Arn: {
                        locationName: 'arn'
                      },
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
                      FixedPrice: {
                        locationName: 'fixedPrice',
                        type: 'double'
                      },
                      OfferingDescription: {
                        locationName: 'offeringDescription'
                      },
                      OfferingId: {
                        locationName: 'offeringId'
                      },
                      OfferingType: {
                        locationName: 'offeringType'
                      },
                      Region: {
                        locationName: 'region'
                      },
                      ResourceSpecification: {
                        shape: 'Si8',
                        locationName: 'resourceSpecification'
                      },
                      UsagePrice: {
                        locationName: 'usagePrice',
                        type: 'double'
                      }
                    }
                  }
                }
              }
            }
          },
          ListReservations: {
            http: {
              method: 'GET',
              requestUri: '/prod/reservations',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ChannelClass: {
                  location: 'querystring',
                  locationName: 'channelClass'
                },
                Codec: {
                  location: 'querystring',
                  locationName: 'codec'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                MaximumBitrate: {
                  location: 'querystring',
                  locationName: 'maximumBitrate'
                },
                MaximumFramerate: {
                  location: 'querystring',
                  locationName: 'maximumFramerate'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                Resolution: {
                  location: 'querystring',
                  locationName: 'resolution'
                },
                ResourceType: {
                  location: 'querystring',
                  locationName: 'resourceType'
                },
                SpecialFeature: {
                  location: 'querystring',
                  locationName: 'specialFeature'
                },
                VideoQuality: {
                  location: 'querystring',
                  locationName: 'videoQuality'
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
                    shape: 'Sl2'
                  }
                }
              }
            }
          },
          ListTagsForResource: {
            http: {
              method: 'GET',
              requestUri: '/prod/tags/{resource-arn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ResourceArn: {
                  location: 'uri',
                  locationName: 'resource-arn'
                }
              },
              required: ['ResourceArn']
            },
            output: {
              type: 'structure',
              members: {
                Tags: {
                  shape: 'Sfu',
                  locationName: 'tags'
                }
              }
            }
          },
          PurchaseOffering: {
            http: {
              requestUri: '/prod/offerings/{offeringId}/purchase',
              responseCode: 201
            },
            input: {
              type: 'structure',
              members: {
                Count: {
                  locationName: 'count',
                  type: 'integer'
                },
                Name: {
                  locationName: 'name'
                },
                OfferingId: {
                  location: 'uri',
                  locationName: 'offeringId'
                },
                RenewalSettings: {
                  shape: 'Si6',
                  locationName: 'renewalSettings'
                },
                RequestId: {
                  locationName: 'requestId',
                  idempotencyToken: true
                },
                Start: {
                  locationName: 'start'
                },
                Tags: {
                  shape: 'Sfu',
                  locationName: 'tags'
                }
              },
              required: ['OfferingId', 'Count']
            },
            output: {
              type: 'structure',
              members: {
                Reservation: {
                  shape: 'Sl2',
                  locationName: 'reservation'
                }
              }
            }
          },
          RebootInputDevice: {
            http: {
              requestUri: '/prod/inputDevices/{inputDeviceId}/reboot',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                Force: {
                  locationName: 'force'
                },
                InputDeviceId: {
                  location: 'uri',
                  locationName: 'inputDeviceId'
                }
              },
              required: ['InputDeviceId']
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          RejectInputDeviceTransfer: {
            http: {
              requestUri: '/prod/inputDevices/{inputDeviceId}/reject',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                InputDeviceId: {
                  location: 'uri',
                  locationName: 'inputDeviceId'
                }
              },
              required: ['InputDeviceId']
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          StartChannel: {
            http: {
              requestUri: '/prod/channels/{channelId}/start',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ChannelId: {
                  location: 'uri',
                  locationName: 'channelId'
                }
              },
              required: ['ChannelId']
            },
            output: {
              type: 'structure',
              members: {
                Arn: {
                  locationName: 'arn'
                },
                CdiInputSpecification: {
                  shape: 'S27',
                  locationName: 'cdiInputSpecification'
                },
                ChannelClass: {
                  locationName: 'channelClass'
                },
                Destinations: {
                  shape: 'S2a',
                  locationName: 'destinations'
                },
                EgressEndpoints: {
                  shape: 'Sfy',
                  locationName: 'egressEndpoints'
                },
                EncoderSettings: {
                  shape: 'S2i',
                  locationName: 'encoderSettings'
                },
                Id: {
                  locationName: 'id'
                },
                InputAttachments: {
                  shape: 'Sdx',
                  locationName: 'inputAttachments'
                },
                InputSpecification: {
                  shape: 'Sfm',
                  locationName: 'inputSpecification'
                },
                LogLevel: {
                  locationName: 'logLevel'
                },
                Maintenance: {
                  shape: 'Sg0',
                  locationName: 'maintenance'
                },
                Name: {
                  locationName: 'name'
                },
                PipelineDetails: {
                  shape: 'Sg1',
                  locationName: 'pipelineDetails'
                },
                PipelinesRunningCount: {
                  locationName: 'pipelinesRunningCount',
                  type: 'integer'
                },
                RoleArn: {
                  locationName: 'roleArn'
                },
                State: {
                  locationName: 'state'
                },
                Tags: {
                  shape: 'Sfu',
                  locationName: 'tags'
                },
                Vpc: {
                  shape: 'Sg4',
                  locationName: 'vpc'
                }
              }
            }
          },
          StartInputDevice: {
            http: {
              requestUri: '/prod/inputDevices/{inputDeviceId}/start',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                InputDeviceId: {
                  location: 'uri',
                  locationName: 'inputDeviceId'
                }
              },
              required: ['InputDeviceId']
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          StartInputDeviceMaintenanceWindow: {
            http: {
              requestUri: '/prod/inputDevices/{inputDeviceId}/startInputDeviceMaintenanceWindow',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                InputDeviceId: {
                  location: 'uri',
                  locationName: 'inputDeviceId'
                }
              },
              required: ['InputDeviceId']
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          StartMultiplex: {
            http: {
              requestUri: '/prod/multiplexes/{multiplexId}/start',
              responseCode: 202
            },
            input: {
              type: 'structure',
              members: {
                MultiplexId: {
                  location: 'uri',
                  locationName: 'multiplexId'
                }
              },
              required: ['MultiplexId']
            },
            output: {
              type: 'structure',
              members: {
                Arn: {
                  locationName: 'arn'
                },
                AvailabilityZones: {
                  shape: 'S5',
                  locationName: 'availabilityZones'
                },
                Destinations: {
                  shape: 'Sh7',
                  locationName: 'destinations'
                },
                Id: {
                  locationName: 'id'
                },
                MultiplexSettings: {
                  shape: 'Sh1',
                  locationName: 'multiplexSettings'
                },
                Name: {
                  locationName: 'name'
                },
                PipelinesRunningCount: {
                  locationName: 'pipelinesRunningCount',
                  type: 'integer'
                },
                ProgramCount: {
                  locationName: 'programCount',
                  type: 'integer'
                },
                State: {
                  locationName: 'state'
                },
                Tags: {
                  shape: 'Sfu',
                  locationName: 'tags'
                }
              }
            }
          },
          StopChannel: {
            http: {
              requestUri: '/prod/channels/{channelId}/stop',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ChannelId: {
                  location: 'uri',
                  locationName: 'channelId'
                }
              },
              required: ['ChannelId']
            },
            output: {
              type: 'structure',
              members: {
                Arn: {
                  locationName: 'arn'
                },
                CdiInputSpecification: {
                  shape: 'S27',
                  locationName: 'cdiInputSpecification'
                },
                ChannelClass: {
                  locationName: 'channelClass'
                },
                Destinations: {
                  shape: 'S2a',
                  locationName: 'destinations'
                },
                EgressEndpoints: {
                  shape: 'Sfy',
                  locationName: 'egressEndpoints'
                },
                EncoderSettings: {
                  shape: 'S2i',
                  locationName: 'encoderSettings'
                },
                Id: {
                  locationName: 'id'
                },
                InputAttachments: {
                  shape: 'Sdx',
                  locationName: 'inputAttachments'
                },
                InputSpecification: {
                  shape: 'Sfm',
                  locationName: 'inputSpecification'
                },
                LogLevel: {
                  locationName: 'logLevel'
                },
                Maintenance: {
                  shape: 'Sg0',
                  locationName: 'maintenance'
                },
                Name: {
                  locationName: 'name'
                },
                PipelineDetails: {
                  shape: 'Sg1',
                  locationName: 'pipelineDetails'
                },
                PipelinesRunningCount: {
                  locationName: 'pipelinesRunningCount',
                  type: 'integer'
                },
                RoleArn: {
                  locationName: 'roleArn'
                },
                State: {
                  locationName: 'state'
                },
                Tags: {
                  shape: 'Sfu',
                  locationName: 'tags'
                },
                Vpc: {
                  shape: 'Sg4',
                  locationName: 'vpc'
                }
              }
            }
          },
          StopInputDevice: {
            http: {
              requestUri: '/prod/inputDevices/{inputDeviceId}/stop',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                InputDeviceId: {
                  location: 'uri',
                  locationName: 'inputDeviceId'
                }
              },
              required: ['InputDeviceId']
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          StopMultiplex: {
            http: {
              requestUri: '/prod/multiplexes/{multiplexId}/stop',
              responseCode: 202
            },
            input: {
              type: 'structure',
              members: {
                MultiplexId: {
                  location: 'uri',
                  locationName: 'multiplexId'
                }
              },
              required: ['MultiplexId']
            },
            output: {
              type: 'structure',
              members: {
                Arn: {
                  locationName: 'arn'
                },
                AvailabilityZones: {
                  shape: 'S5',
                  locationName: 'availabilityZones'
                },
                Destinations: {
                  shape: 'Sh7',
                  locationName: 'destinations'
                },
                Id: {
                  locationName: 'id'
                },
                MultiplexSettings: {
                  shape: 'Sh1',
                  locationName: 'multiplexSettings'
                },
                Name: {
                  locationName: 'name'
                },
                PipelinesRunningCount: {
                  locationName: 'pipelinesRunningCount',
                  type: 'integer'
                },
                ProgramCount: {
                  locationName: 'programCount',
                  type: 'integer'
                },
                State: {
                  locationName: 'state'
                },
                Tags: {
                  shape: 'Sfu',
                  locationName: 'tags'
                }
              }
            }
          },
          TransferInputDevice: {
            http: {
              requestUri: '/prod/inputDevices/{inputDeviceId}/transfer',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                InputDeviceId: {
                  location: 'uri',
                  locationName: 'inputDeviceId'
                },
                TargetCustomerId: {
                  locationName: 'targetCustomerId'
                },
                TargetRegion: {
                  locationName: 'targetRegion'
                },
                TransferMessage: {
                  locationName: 'transferMessage'
                }
              },
              required: ['InputDeviceId']
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateAccountConfiguration: {
            http: {
              method: 'PUT',
              requestUri: '/prod/accountConfiguration',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                AccountConfiguration: {
                  shape: 'Sim',
                  locationName: 'accountConfiguration'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AccountConfiguration: {
                  shape: 'Sim',
                  locationName: 'accountConfiguration'
                }
              }
            }
          },
          UpdateChannel: {
            http: {
              method: 'PUT',
              requestUri: '/prod/channels/{channelId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                CdiInputSpecification: {
                  shape: 'S27',
                  locationName: 'cdiInputSpecification'
                },
                ChannelId: {
                  location: 'uri',
                  locationName: 'channelId'
                },
                Destinations: {
                  shape: 'S2a',
                  locationName: 'destinations'
                },
                EncoderSettings: {
                  shape: 'S2i',
                  locationName: 'encoderSettings'
                },
                InputAttachments: {
                  shape: 'Sdx',
                  locationName: 'inputAttachments'
                },
                InputSpecification: {
                  shape: 'Sfm',
                  locationName: 'inputSpecification'
                },
                LogLevel: {
                  locationName: 'logLevel'
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
                    MaintenanceStartTime: {
                      locationName: 'maintenanceStartTime'
                    }
                  }
                },
                Name: {
                  locationName: 'name'
                },
                RoleArn: {
                  locationName: 'roleArn'
                }
              },
              required: ['ChannelId']
            },
            output: {
              type: 'structure',
              members: {
                Channel: {
                  shape: 'Sfx',
                  locationName: 'channel'
                }
              }
            }
          },
          UpdateChannelClass: {
            http: {
              method: 'PUT',
              requestUri: '/prod/channels/{channelId}/channelClass',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ChannelClass: {
                  locationName: 'channelClass'
                },
                ChannelId: {
                  location: 'uri',
                  locationName: 'channelId'
                },
                Destinations: {
                  shape: 'S2a',
                  locationName: 'destinations'
                }
              },
              required: ['ChannelId', 'ChannelClass']
            },
            output: {
              type: 'structure',
              members: {
                Channel: {
                  shape: 'Sfx',
                  locationName: 'channel'
                }
              }
            }
          },
          UpdateInput: {
            http: {
              method: 'PUT',
              requestUri: '/prod/inputs/{inputId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                Destinations: {
                  shape: 'Sg6',
                  locationName: 'destinations'
                },
                InputDevices: {
                  locationName: 'inputDevices',
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Id: {
                        locationName: 'id'
                      }
                    }
                  }
                },
                InputId: {
                  location: 'uri',
                  locationName: 'inputId'
                },
                InputSecurityGroups: {
                  shape: 'S5',
                  locationName: 'inputSecurityGroups'
                },
                MediaConnectFlows: {
                  shape: 'Sga',
                  locationName: 'mediaConnectFlows'
                },
                Name: {
                  locationName: 'name'
                },
                RoleArn: {
                  locationName: 'roleArn'
                },
                Sources: {
                  shape: 'Sgc',
                  locationName: 'sources'
                }
              },
              required: ['InputId']
            },
            output: {
              type: 'structure',
              members: {
                Input: {
                  shape: 'Sgh',
                  locationName: 'input'
                }
              }
            }
          },
          UpdateInputDevice: {
            http: {
              method: 'PUT',
              requestUri: '/prod/inputDevices/{inputDeviceId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                HdDeviceSettings: {
                  shape: 'Sm4',
                  locationName: 'hdDeviceSettings'
                },
                InputDeviceId: {
                  location: 'uri',
                  locationName: 'inputDeviceId'
                },
                Name: {
                  locationName: 'name'
                },
                UhdDeviceSettings: {
                  shape: 'Sm4',
                  locationName: 'uhdDeviceSettings'
                },
                AvailabilityZone: {
                  locationName: 'availabilityZone'
                }
              },
              required: ['InputDeviceId']
            },
            output: {
              type: 'structure',
              members: {
                Arn: {
                  locationName: 'arn'
                },
                ConnectionState: {
                  locationName: 'connectionState'
                },
                DeviceSettingsSyncState: {
                  locationName: 'deviceSettingsSyncState'
                },
                DeviceUpdateStatus: {
                  locationName: 'deviceUpdateStatus'
                },
                HdDeviceSettings: {
                  shape: 'Siw',
                  locationName: 'hdDeviceSettings'
                },
                Id: {
                  locationName: 'id'
                },
                MacAddress: {
                  locationName: 'macAddress'
                },
                Name: {
                  locationName: 'name'
                },
                NetworkSettings: {
                  shape: 'Sj1',
                  locationName: 'networkSettings'
                },
                SerialNumber: {
                  locationName: 'serialNumber'
                },
                Type: {
                  locationName: 'type'
                },
                UhdDeviceSettings: {
                  shape: 'Sj4',
                  locationName: 'uhdDeviceSettings'
                },
                Tags: {
                  shape: 'Sfu',
                  locationName: 'tags'
                },
                AvailabilityZone: {
                  locationName: 'availabilityZone'
                },
                MedialiveInputArns: {
                  shape: 'S5',
                  locationName: 'medialiveInputArns'
                },
                OutputType: {
                  locationName: 'outputType'
                }
              }
            }
          },
          UpdateInputSecurityGroup: {
            http: {
              method: 'PUT',
              requestUri: '/prod/inputSecurityGroups/{inputSecurityGroupId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                InputSecurityGroupId: {
                  location: 'uri',
                  locationName: 'inputSecurityGroupId'
                },
                Tags: {
                  shape: 'Sfu',
                  locationName: 'tags'
                },
                WhitelistRules: {
                  shape: 'Sgt',
                  locationName: 'whitelistRules'
                }
              },
              required: ['InputSecurityGroupId']
            },
            output: {
              type: 'structure',
              members: {
                SecurityGroup: {
                  shape: 'Sgw',
                  locationName: 'securityGroup'
                }
              }
            }
          },
          UpdateMultiplex: {
            http: {
              method: 'PUT',
              requestUri: '/prod/multiplexes/{multiplexId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                MultiplexId: {
                  location: 'uri',
                  locationName: 'multiplexId'
                },
                MultiplexSettings: {
                  shape: 'Sh1',
                  locationName: 'multiplexSettings'
                },
                Name: {
                  locationName: 'name'
                }
              },
              required: ['MultiplexId']
            },
            output: {
              type: 'structure',
              members: {
                Multiplex: {
                  shape: 'Sh6',
                  locationName: 'multiplex'
                }
              }
            }
          },
          UpdateMultiplexProgram: {
            http: {
              method: 'PUT',
              requestUri: '/prod/multiplexes/{multiplexId}/programs/{programName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                MultiplexId: {
                  location: 'uri',
                  locationName: 'multiplexId'
                },
                MultiplexProgramSettings: {
                  shape: 'Shc',
                  locationName: 'multiplexProgramSettings'
                },
                ProgramName: {
                  location: 'uri',
                  locationName: 'programName'
                }
              },
              required: ['MultiplexId', 'ProgramName']
            },
            output: {
              type: 'structure',
              members: {
                MultiplexProgram: {
                  shape: 'Shk',
                  locationName: 'multiplexProgram'
                }
              }
            }
          },
          UpdateReservation: {
            http: {
              method: 'PUT',
              requestUri: '/prod/reservations/{reservationId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                Name: {
                  locationName: 'name'
                },
                RenewalSettings: {
                  shape: 'Si6',
                  locationName: 'renewalSettings'
                },
                ReservationId: {
                  location: 'uri',
                  locationName: 'reservationId'
                }
              },
              required: ['ReservationId']
            },
            output: {
              type: 'structure',
              members: {
                Reservation: {
                  shape: 'Sl2',
                  locationName: 'reservation'
                }
              }
            }
          },
          RestartChannelPipelines: {
            http: {
              requestUri: '/prod/channels/{channelId}/restartChannelPipelines',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ChannelId: {
                  location: 'uri',
                  locationName: 'channelId'
                },
                PipelineIds: {
                  locationName: 'pipelineIds',
                  type: 'list',
                  member: {}
                }
              },
              required: ['ChannelId']
            },
            output: {
              type: 'structure',
              members: {
                Arn: {
                  locationName: 'arn'
                },
                CdiInputSpecification: {
                  shape: 'S27',
                  locationName: 'cdiInputSpecification'
                },
                ChannelClass: {
                  locationName: 'channelClass'
                },
                Destinations: {
                  shape: 'S2a',
                  locationName: 'destinations'
                },
                EgressEndpoints: {
                  shape: 'Sfy',
                  locationName: 'egressEndpoints'
                },
                EncoderSettings: {
                  shape: 'S2i',
                  locationName: 'encoderSettings'
                },
                Id: {
                  locationName: 'id'
                },
                InputAttachments: {
                  shape: 'Sdx',
                  locationName: 'inputAttachments'
                },
                InputSpecification: {
                  shape: 'Sfm',
                  locationName: 'inputSpecification'
                },
                LogLevel: {
                  locationName: 'logLevel'
                },
                Maintenance: {
                  shape: 'Sg0',
                  locationName: 'maintenance'
                },
                MaintenanceStatus: {
                  locationName: 'maintenanceStatus'
                },
                Name: {
                  locationName: 'name'
                },
                PipelineDetails: {
                  shape: 'Sg1',
                  locationName: 'pipelineDetails'
                },
                PipelinesRunningCount: {
                  locationName: 'pipelinesRunningCount',
                  type: 'integer'
                },
                RoleArn: {
                  locationName: 'roleArn'
                },
                State: {
                  locationName: 'state'
                },
                Tags: {
                  shape: 'Sfu',
                  locationName: 'tags'
                },
                Vpc: {
                  shape: 'Sg4',
                  locationName: 'vpc'
                }
              }
            }
          },
          CreateCloudWatchAlarmTemplate: {
            http: {
              requestUri: '/prod/cloudwatch-alarm-templates',
              responseCode: 201
            },
            input: {
              type: 'structure',
              members: {
                ComparisonOperator: {
                  locationName: 'comparisonOperator'
                },
                DatapointsToAlarm: {
                  locationName: 'datapointsToAlarm',
                  type: 'integer'
                },
                Description: {
                  locationName: 'description'
                },
                EvaluationPeriods: {
                  locationName: 'evaluationPeriods',
                  type: 'integer'
                },
                GroupIdentifier: {
                  locationName: 'groupIdentifier'
                },
                MetricName: {
                  locationName: 'metricName'
                },
                Name: {
                  locationName: 'name'
                },
                Period: {
                  locationName: 'period',
                  type: 'integer'
                },
                Statistic: {
                  locationName: 'statistic'
                },
                Tags: {
                  shape: 'Smu',
                  locationName: 'tags'
                },
                TargetResourceType: {
                  locationName: 'targetResourceType'
                },
                Threshold: {
                  locationName: 'threshold',
                  type: 'double'
                },
                TreatMissingData: {
                  locationName: 'treatMissingData'
                }
              },
              required: ['TargetResourceType', 'MetricName', 'TreatMissingData', 'ComparisonOperator', 'Statistic', 'Period', 'EvaluationPeriods', 'Threshold', 'Name', 'GroupIdentifier']
            },
            output: {
              type: 'structure',
              members: {
                Arn: {
                  locationName: 'arn'
                },
                ComparisonOperator: {
                  locationName: 'comparisonOperator'
                },
                CreatedAt: {
                  shape: 'Sk2',
                  locationName: 'createdAt'
                },
                DatapointsToAlarm: {
                  locationName: 'datapointsToAlarm',
                  type: 'integer'
                },
                Description: {
                  locationName: 'description'
                },
                EvaluationPeriods: {
                  locationName: 'evaluationPeriods',
                  type: 'integer'
                },
                GroupId: {
                  locationName: 'groupId'
                },
                Id: {
                  locationName: 'id'
                },
                MetricName: {
                  locationName: 'metricName'
                },
                ModifiedAt: {
                  shape: 'Sk2',
                  locationName: 'modifiedAt'
                },
                Name: {
                  locationName: 'name'
                },
                Period: {
                  locationName: 'period',
                  type: 'integer'
                },
                Statistic: {
                  locationName: 'statistic'
                },
                Tags: {
                  shape: 'Smu',
                  locationName: 'tags'
                },
                TargetResourceType: {
                  locationName: 'targetResourceType'
                },
                Threshold: {
                  locationName: 'threshold',
                  type: 'double'
                },
                TreatMissingData: {
                  locationName: 'treatMissingData'
                }
              }
            }
          },
          CreateCloudWatchAlarmTemplateGroup: {
            http: {
              requestUri: '/prod/cloudwatch-alarm-template-groups',
              responseCode: 201
            },
            input: {
              type: 'structure',
              members: {
                Description: {
                  locationName: 'description'
                },
                Name: {
                  locationName: 'name'
                },
                Tags: {
                  shape: 'Smu',
                  locationName: 'tags'
                }
              },
              required: ['Name']
            },
            output: {
              type: 'structure',
              members: {
                Arn: {
                  locationName: 'arn'
                },
                CreatedAt: {
                  shape: 'Sk2',
                  locationName: 'createdAt'
                },
                Description: {
                  locationName: 'description'
                },
                Id: {
                  locationName: 'id'
                },
                ModifiedAt: {
                  shape: 'Sk2',
                  locationName: 'modifiedAt'
                },
                Name: {
                  locationName: 'name'
                },
                Tags: {
                  shape: 'Smu',
                  locationName: 'tags'
                }
              }
            }
          },
          CreateEventBridgeRuleTemplate: {
            http: {
              requestUri: '/prod/eventbridge-rule-templates',
              responseCode: 201
            },
            input: {
              type: 'structure',
              members: {
                Description: {
                  locationName: 'description'
                },
                EventTargets: {
                  shape: 'Sn4',
                  locationName: 'eventTargets'
                },
                EventType: {
                  locationName: 'eventType'
                },
                GroupIdentifier: {
                  locationName: 'groupIdentifier'
                },
                Name: {
                  locationName: 'name'
                },
                Tags: {
                  shape: 'Smu',
                  locationName: 'tags'
                }
              },
              required: ['EventType', 'Name', 'GroupIdentifier']
            },
            output: {
              type: 'structure',
              members: {
                Arn: {
                  locationName: 'arn'
                },
                CreatedAt: {
                  shape: 'Sk2',
                  locationName: 'createdAt'
                },
                Description: {
                  locationName: 'description'
                },
                EventTargets: {
                  shape: 'Sn4',
                  locationName: 'eventTargets'
                },
                EventType: {
                  locationName: 'eventType'
                },
                GroupId: {
                  locationName: 'groupId'
                },
                Id: {
                  locationName: 'id'
                },
                ModifiedAt: {
                  shape: 'Sk2',
                  locationName: 'modifiedAt'
                },
                Name: {
                  locationName: 'name'
                },
                Tags: {
                  shape: 'Smu',
                  locationName: 'tags'
                }
              }
            }
          },
          CreateEventBridgeRuleTemplateGroup: {
            http: {
              requestUri: '/prod/eventbridge-rule-template-groups',
              responseCode: 201
            },
            input: {
              type: 'structure',
              members: {
                Description: {
                  locationName: 'description'
                },
                Name: {
                  locationName: 'name'
                },
                Tags: {
                  shape: 'Smu',
                  locationName: 'tags'
                }
              },
              required: ['Name']
            },
            output: {
              type: 'structure',
              members: {
                Arn: {
                  locationName: 'arn'
                },
                CreatedAt: {
                  shape: 'Sk2',
                  locationName: 'createdAt'
                },
                Description: {
                  locationName: 'description'
                },
                Id: {
                  locationName: 'id'
                },
                ModifiedAt: {
                  shape: 'Sk2',
                  locationName: 'modifiedAt'
                },
                Name: {
                  locationName: 'name'
                },
                Tags: {
                  shape: 'Smu',
                  locationName: 'tags'
                }
              }
            }
          },
          CreateSignalMap: {
            http: {
              requestUri: '/prod/signal-maps',
              responseCode: 201
            },
            input: {
              type: 'structure',
              members: {
                CloudWatchAlarmTemplateGroupIdentifiers: {
                  shape: 'Sne',
                  locationName: 'cloudWatchAlarmTemplateGroupIdentifiers'
                },
                Description: {
                  locationName: 'description'
                },
                DiscoveryEntryPointArn: {
                  locationName: 'discoveryEntryPointArn'
                },
                EventBridgeRuleTemplateGroupIdentifiers: {
                  shape: 'Sne',
                  locationName: 'eventBridgeRuleTemplateGroupIdentifiers'
                },
                Name: {
                  locationName: 'name'
                },
                Tags: {
                  shape: 'Smu',
                  locationName: 'tags'
                }
              },
              required: ['DiscoveryEntryPointArn', 'Name']
            },
            output: {
              type: 'structure',
              members: {
                Arn: {
                  locationName: 'arn'
                },
                CloudWatchAlarmTemplateGroupIds: {
                  shape: 'Sni',
                  locationName: 'cloudWatchAlarmTemplateGroupIds'
                },
                CreatedAt: {
                  shape: 'Sk2',
                  locationName: 'createdAt'
                },
                Description: {
                  locationName: 'description'
                },
                DiscoveryEntryPointArn: {
                  locationName: 'discoveryEntryPointArn'
                },
                ErrorMessage: {
                  locationName: 'errorMessage'
                },
                EventBridgeRuleTemplateGroupIds: {
                  shape: 'Sni',
                  locationName: 'eventBridgeRuleTemplateGroupIds'
                },
                FailedMediaResourceMap: {
                  shape: 'Snj',
                  locationName: 'failedMediaResourceMap'
                },
                Id: {
                  locationName: 'id'
                },
                LastDiscoveredAt: {
                  shape: 'Sk2',
                  locationName: 'lastDiscoveredAt'
                },
                LastSuccessfulMonitorDeployment: {
                  shape: 'Snn',
                  locationName: 'lastSuccessfulMonitorDeployment'
                },
                MediaResourceMap: {
                  shape: 'Snp',
                  locationName: 'mediaResourceMap'
                },
                ModifiedAt: {
                  shape: 'Sk2',
                  locationName: 'modifiedAt'
                },
                MonitorChangesPendingDeployment: {
                  locationName: 'monitorChangesPendingDeployment',
                  type: 'boolean'
                },
                MonitorDeployment: {
                  shape: 'Snr',
                  locationName: 'monitorDeployment'
                },
                Name: {
                  locationName: 'name'
                },
                Status: {
                  locationName: 'status'
                },
                Tags: {
                  shape: 'Smu',
                  locationName: 'tags'
                }
              }
            }
          },
          DeleteCloudWatchAlarmTemplate: {
            http: {
              method: 'DELETE',
              requestUri: '/prod/cloudwatch-alarm-templates/{identifier}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              members: {
                Identifier: {
                  location: 'uri',
                  locationName: 'identifier'
                }
              },
              required: ['Identifier']
            }
          },
          DeleteCloudWatchAlarmTemplateGroup: {
            http: {
              method: 'DELETE',
              requestUri: '/prod/cloudwatch-alarm-template-groups/{identifier}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              members: {
                Identifier: {
                  location: 'uri',
                  locationName: 'identifier'
                }
              },
              required: ['Identifier']
            }
          },
          DeleteEventBridgeRuleTemplate: {
            http: {
              method: 'DELETE',
              requestUri: '/prod/eventbridge-rule-templates/{identifier}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              members: {
                Identifier: {
                  location: 'uri',
                  locationName: 'identifier'
                }
              },
              required: ['Identifier']
            }
          },
          DeleteEventBridgeRuleTemplateGroup: {
            http: {
              method: 'DELETE',
              requestUri: '/prod/eventbridge-rule-template-groups/{identifier}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              members: {
                Identifier: {
                  location: 'uri',
                  locationName: 'identifier'
                }
              },
              required: ['Identifier']
            }
          },
          DeleteSignalMap: {
            http: {
              method: 'DELETE',
              requestUri: '/prod/signal-maps/{identifier}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              members: {
                Identifier: {
                  location: 'uri',
                  locationName: 'identifier'
                }
              },
              required: ['Identifier']
            }
          },
          GetCloudWatchAlarmTemplate: {
            http: {
              method: 'GET',
              requestUri: '/prod/cloudwatch-alarm-templates/{identifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                Identifier: {
                  location: 'uri',
                  locationName: 'identifier'
                }
              },
              required: ['Identifier']
            },
            output: {
              type: 'structure',
              members: {
                Arn: {
                  locationName: 'arn'
                },
                ComparisonOperator: {
                  locationName: 'comparisonOperator'
                },
                CreatedAt: {
                  shape: 'Sk2',
                  locationName: 'createdAt'
                },
                DatapointsToAlarm: {
                  locationName: 'datapointsToAlarm',
                  type: 'integer'
                },
                Description: {
                  locationName: 'description'
                },
                EvaluationPeriods: {
                  locationName: 'evaluationPeriods',
                  type: 'integer'
                },
                GroupId: {
                  locationName: 'groupId'
                },
                Id: {
                  locationName: 'id'
                },
                MetricName: {
                  locationName: 'metricName'
                },
                ModifiedAt: {
                  shape: 'Sk2',
                  locationName: 'modifiedAt'
                },
                Name: {
                  locationName: 'name'
                },
                Period: {
                  locationName: 'period',
                  type: 'integer'
                },
                Statistic: {
                  locationName: 'statistic'
                },
                Tags: {
                  shape: 'Smu',
                  locationName: 'tags'
                },
                TargetResourceType: {
                  locationName: 'targetResourceType'
                },
                Threshold: {
                  locationName: 'threshold',
                  type: 'double'
                },
                TreatMissingData: {
                  locationName: 'treatMissingData'
                }
              }
            }
          },
          GetCloudWatchAlarmTemplateGroup: {
            http: {
              method: 'GET',
              requestUri: '/prod/cloudwatch-alarm-template-groups/{identifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                Identifier: {
                  location: 'uri',
                  locationName: 'identifier'
                }
              },
              required: ['Identifier']
            },
            output: {
              type: 'structure',
              members: {
                Arn: {
                  locationName: 'arn'
                },
                CreatedAt: {
                  shape: 'Sk2',
                  locationName: 'createdAt'
                },
                Description: {
                  locationName: 'description'
                },
                Id: {
                  locationName: 'id'
                },
                ModifiedAt: {
                  shape: 'Sk2',
                  locationName: 'modifiedAt'
                },
                Name: {
                  locationName: 'name'
                },
                Tags: {
                  shape: 'Smu',
                  locationName: 'tags'
                }
              }
            }
          },
          GetEventBridgeRuleTemplate: {
            http: {
              method: 'GET',
              requestUri: '/prod/eventbridge-rule-templates/{identifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                Identifier: {
                  location: 'uri',
                  locationName: 'identifier'
                }
              },
              required: ['Identifier']
            },
            output: {
              type: 'structure',
              members: {
                Arn: {
                  locationName: 'arn'
                },
                CreatedAt: {
                  shape: 'Sk2',
                  locationName: 'createdAt'
                },
                Description: {
                  locationName: 'description'
                },
                EventTargets: {
                  shape: 'Sn4',
                  locationName: 'eventTargets'
                },
                EventType: {
                  locationName: 'eventType'
                },
                GroupId: {
                  locationName: 'groupId'
                },
                Id: {
                  locationName: 'id'
                },
                ModifiedAt: {
                  shape: 'Sk2',
                  locationName: 'modifiedAt'
                },
                Name: {
                  locationName: 'name'
                },
                Tags: {
                  shape: 'Smu',
                  locationName: 'tags'
                }
              }
            }
          },
          GetEventBridgeRuleTemplateGroup: {
            http: {
              method: 'GET',
              requestUri: '/prod/eventbridge-rule-template-groups/{identifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                Identifier: {
                  location: 'uri',
                  locationName: 'identifier'
                }
              },
              required: ['Identifier']
            },
            output: {
              type: 'structure',
              members: {
                Arn: {
                  locationName: 'arn'
                },
                CreatedAt: {
                  shape: 'Sk2',
                  locationName: 'createdAt'
                },
                Description: {
                  locationName: 'description'
                },
                Id: {
                  locationName: 'id'
                },
                ModifiedAt: {
                  shape: 'Sk2',
                  locationName: 'modifiedAt'
                },
                Name: {
                  locationName: 'name'
                },
                Tags: {
                  shape: 'Smu',
                  locationName: 'tags'
                }
              }
            }
          },
          GetSignalMap: {
            http: {
              method: 'GET',
              requestUri: '/prod/signal-maps/{identifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                Identifier: {
                  location: 'uri',
                  locationName: 'identifier'
                }
              },
              required: ['Identifier']
            },
            output: {
              type: 'structure',
              members: {
                Arn: {
                  locationName: 'arn'
                },
                CloudWatchAlarmTemplateGroupIds: {
                  shape: 'Sni',
                  locationName: 'cloudWatchAlarmTemplateGroupIds'
                },
                CreatedAt: {
                  shape: 'Sk2',
                  locationName: 'createdAt'
                },
                Description: {
                  locationName: 'description'
                },
                DiscoveryEntryPointArn: {
                  locationName: 'discoveryEntryPointArn'
                },
                ErrorMessage: {
                  locationName: 'errorMessage'
                },
                EventBridgeRuleTemplateGroupIds: {
                  shape: 'Sni',
                  locationName: 'eventBridgeRuleTemplateGroupIds'
                },
                FailedMediaResourceMap: {
                  shape: 'Snj',
                  locationName: 'failedMediaResourceMap'
                },
                Id: {
                  locationName: 'id'
                },
                LastDiscoveredAt: {
                  shape: 'Sk2',
                  locationName: 'lastDiscoveredAt'
                },
                LastSuccessfulMonitorDeployment: {
                  shape: 'Snn',
                  locationName: 'lastSuccessfulMonitorDeployment'
                },
                MediaResourceMap: {
                  shape: 'Snp',
                  locationName: 'mediaResourceMap'
                },
                ModifiedAt: {
                  shape: 'Sk2',
                  locationName: 'modifiedAt'
                },
                MonitorChangesPendingDeployment: {
                  locationName: 'monitorChangesPendingDeployment',
                  type: 'boolean'
                },
                MonitorDeployment: {
                  shape: 'Snr',
                  locationName: 'monitorDeployment'
                },
                Name: {
                  locationName: 'name'
                },
                Status: {
                  locationName: 'status'
                },
                Tags: {
                  shape: 'Smu',
                  locationName: 'tags'
                }
              }
            }
          },
          ListCloudWatchAlarmTemplateGroups: {
            http: {
              method: 'GET',
              requestUri: '/prod/cloudwatch-alarm-template-groups',
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
                },
                Scope: {
                  location: 'querystring',
                  locationName: 'scope'
                },
                SignalMapIdentifier: {
                  location: 'querystring',
                  locationName: 'signalMapIdentifier'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                CloudWatchAlarmTemplateGroups: {
                  locationName: 'cloudWatchAlarmTemplateGroups',
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Arn: {
                        locationName: 'arn'
                      },
                      CreatedAt: {
                        shape: 'Sk2',
                        locationName: 'createdAt'
                      },
                      Description: {
                        locationName: 'description'
                      },
                      Id: {
                        locationName: 'id'
                      },
                      ModifiedAt: {
                        shape: 'Sk2',
                        locationName: 'modifiedAt'
                      },
                      Name: {
                        locationName: 'name'
                      },
                      Tags: {
                        shape: 'Smu',
                        locationName: 'tags'
                      },
                      TemplateCount: {
                        locationName: 'templateCount',
                        type: 'integer'
                      }
                    },
                    required: ['TemplateCount', 'CreatedAt', 'Id', 'Arn', 'Name']
                  }
                },
                NextToken: {
                  locationName: 'nextToken'
                }
              }
            }
          },
          ListCloudWatchAlarmTemplates: {
            http: {
              method: 'GET',
              requestUri: '/prod/cloudwatch-alarm-templates',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                GroupIdentifier: {
                  location: 'querystring',
                  locationName: 'groupIdentifier'
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
                Scope: {
                  location: 'querystring',
                  locationName: 'scope'
                },
                SignalMapIdentifier: {
                  location: 'querystring',
                  locationName: 'signalMapIdentifier'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                CloudWatchAlarmTemplates: {
                  locationName: 'cloudWatchAlarmTemplates',
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Arn: {
                        locationName: 'arn'
                      },
                      ComparisonOperator: {
                        locationName: 'comparisonOperator'
                      },
                      CreatedAt: {
                        shape: 'Sk2',
                        locationName: 'createdAt'
                      },
                      DatapointsToAlarm: {
                        locationName: 'datapointsToAlarm',
                        type: 'integer'
                      },
                      Description: {
                        locationName: 'description'
                      },
                      EvaluationPeriods: {
                        locationName: 'evaluationPeriods',
                        type: 'integer'
                      },
                      GroupId: {
                        locationName: 'groupId'
                      },
                      Id: {
                        locationName: 'id'
                      },
                      MetricName: {
                        locationName: 'metricName'
                      },
                      ModifiedAt: {
                        shape: 'Sk2',
                        locationName: 'modifiedAt'
                      },
                      Name: {
                        locationName: 'name'
                      },
                      Period: {
                        locationName: 'period',
                        type: 'integer'
                      },
                      Statistic: {
                        locationName: 'statistic'
                      },
                      Tags: {
                        shape: 'Smu',
                        locationName: 'tags'
                      },
                      TargetResourceType: {
                        locationName: 'targetResourceType'
                      },
                      Threshold: {
                        locationName: 'threshold',
                        type: 'double'
                      },
                      TreatMissingData: {
                        locationName: 'treatMissingData'
                      }
                    },
                    required: ['TargetResourceType', 'TreatMissingData', 'ComparisonOperator', 'CreatedAt', 'Period', 'EvaluationPeriods', 'Name', 'GroupId', 'MetricName', 'Statistic', 'Id', 'Arn', 'Threshold']
                  }
                },
                NextToken: {
                  locationName: 'nextToken'
                }
              }
            }
          },
          ListEventBridgeRuleTemplateGroups: {
            http: {
              method: 'GET',
              requestUri: '/prod/eventbridge-rule-template-groups',
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
                },
                SignalMapIdentifier: {
                  location: 'querystring',
                  locationName: 'signalMapIdentifier'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                EventBridgeRuleTemplateGroups: {
                  locationName: 'eventBridgeRuleTemplateGroups',
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Arn: {
                        locationName: 'arn'
                      },
                      CreatedAt: {
                        shape: 'Sk2',
                        locationName: 'createdAt'
                      },
                      Description: {
                        locationName: 'description'
                      },
                      Id: {
                        locationName: 'id'
                      },
                      ModifiedAt: {
                        shape: 'Sk2',
                        locationName: 'modifiedAt'
                      },
                      Name: {
                        locationName: 'name'
                      },
                      Tags: {
                        shape: 'Smu',
                        locationName: 'tags'
                      },
                      TemplateCount: {
                        locationName: 'templateCount',
                        type: 'integer'
                      }
                    },
                    required: ['TemplateCount', 'CreatedAt', 'Id', 'Arn', 'Name']
                  }
                },
                NextToken: {
                  locationName: 'nextToken'
                }
              }
            }
          },
          ListEventBridgeRuleTemplates: {
            http: {
              method: 'GET',
              requestUri: '/prod/eventbridge-rule-templates',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                GroupIdentifier: {
                  location: 'querystring',
                  locationName: 'groupIdentifier'
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
                SignalMapIdentifier: {
                  location: 'querystring',
                  locationName: 'signalMapIdentifier'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                EventBridgeRuleTemplates: {
                  locationName: 'eventBridgeRuleTemplates',
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Arn: {
                        locationName: 'arn'
                      },
                      CreatedAt: {
                        shape: 'Sk2',
                        locationName: 'createdAt'
                      },
                      Description: {
                        locationName: 'description'
                      },
                      EventTargetCount: {
                        locationName: 'eventTargetCount',
                        type: 'integer'
                      },
                      EventType: {
                        locationName: 'eventType'
                      },
                      GroupId: {
                        locationName: 'groupId'
                      },
                      Id: {
                        locationName: 'id'
                      },
                      ModifiedAt: {
                        shape: 'Sk2',
                        locationName: 'modifiedAt'
                      },
                      Name: {
                        locationName: 'name'
                      },
                      Tags: {
                        shape: 'Smu',
                        locationName: 'tags'
                      }
                    },
                    required: ['EventType', 'CreatedAt', 'EventTargetCount', 'Id', 'Arn', 'Name', 'GroupId']
                  }
                },
                NextToken: {
                  locationName: 'nextToken'
                }
              }
            }
          },
          ListSignalMaps: {
            http: {
              method: 'GET',
              requestUri: '/prod/signal-maps',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                CloudWatchAlarmTemplateGroupIdentifier: {
                  location: 'querystring',
                  locationName: 'cloudWatchAlarmTemplateGroupIdentifier'
                },
                EventBridgeRuleTemplateGroupIdentifier: {
                  location: 'querystring',
                  locationName: 'eventBridgeRuleTemplateGroupIdentifier'
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
                NextToken: {
                  locationName: 'nextToken'
                },
                SignalMaps: {
                  locationName: 'signalMaps',
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Arn: {
                        locationName: 'arn'
                      },
                      CreatedAt: {
                        shape: 'Sk2',
                        locationName: 'createdAt'
                      },
                      Description: {
                        locationName: 'description'
                      },
                      Id: {
                        locationName: 'id'
                      },
                      ModifiedAt: {
                        shape: 'Sk2',
                        locationName: 'modifiedAt'
                      },
                      MonitorDeploymentStatus: {
                        locationName: 'monitorDeploymentStatus'
                      },
                      Name: {
                        locationName: 'name'
                      },
                      Status: {
                        locationName: 'status'
                      },
                      Tags: {
                        shape: 'Smu',
                        locationName: 'tags'
                      }
                    },
                    required: ['Status', 'MonitorDeploymentStatus', 'CreatedAt', 'Id', 'Arn', 'Name']
                  }
                }
              }
            }
          },
          StartDeleteMonitorDeployment: {
            http: {
              method: 'DELETE',
              requestUri: '/prod/signal-maps/{identifier}/monitor-deployment',
              responseCode: 202
            },
            input: {
              type: 'structure',
              members: {
                Identifier: {
                  location: 'uri',
                  locationName: 'identifier'
                }
              },
              required: ['Identifier']
            },
            output: {
              type: 'structure',
              members: {
                Arn: {
                  locationName: 'arn'
                },
                CloudWatchAlarmTemplateGroupIds: {
                  shape: 'Sni',
                  locationName: 'cloudWatchAlarmTemplateGroupIds'
                },
                CreatedAt: {
                  shape: 'Sk2',
                  locationName: 'createdAt'
                },
                Description: {
                  locationName: 'description'
                },
                DiscoveryEntryPointArn: {
                  locationName: 'discoveryEntryPointArn'
                },
                ErrorMessage: {
                  locationName: 'errorMessage'
                },
                EventBridgeRuleTemplateGroupIds: {
                  shape: 'Sni',
                  locationName: 'eventBridgeRuleTemplateGroupIds'
                },
                FailedMediaResourceMap: {
                  shape: 'Snj',
                  locationName: 'failedMediaResourceMap'
                },
                Id: {
                  locationName: 'id'
                },
                LastDiscoveredAt: {
                  shape: 'Sk2',
                  locationName: 'lastDiscoveredAt'
                },
                LastSuccessfulMonitorDeployment: {
                  shape: 'Snn',
                  locationName: 'lastSuccessfulMonitorDeployment'
                },
                MediaResourceMap: {
                  shape: 'Snp',
                  locationName: 'mediaResourceMap'
                },
                ModifiedAt: {
                  shape: 'Sk2',
                  locationName: 'modifiedAt'
                },
                MonitorChangesPendingDeployment: {
                  locationName: 'monitorChangesPendingDeployment',
                  type: 'boolean'
                },
                MonitorDeployment: {
                  shape: 'Snr',
                  locationName: 'monitorDeployment'
                },
                Name: {
                  locationName: 'name'
                },
                Status: {
                  locationName: 'status'
                },
                Tags: {
                  shape: 'Smu',
                  locationName: 'tags'
                }
              }
            }
          },
          StartMonitorDeployment: {
            http: {
              requestUri: '/prod/signal-maps/{identifier}/monitor-deployment',
              responseCode: 202
            },
            input: {
              type: 'structure',
              members: {
                DryRun: {
                  locationName: 'dryRun',
                  type: 'boolean'
                },
                Identifier: {
                  location: 'uri',
                  locationName: 'identifier'
                }
              },
              required: ['Identifier']
            },
            output: {
              type: 'structure',
              members: {
                Arn: {
                  locationName: 'arn'
                },
                CloudWatchAlarmTemplateGroupIds: {
                  shape: 'Sni',
                  locationName: 'cloudWatchAlarmTemplateGroupIds'
                },
                CreatedAt: {
                  shape: 'Sk2',
                  locationName: 'createdAt'
                },
                Description: {
                  locationName: 'description'
                },
                DiscoveryEntryPointArn: {
                  locationName: 'discoveryEntryPointArn'
                },
                ErrorMessage: {
                  locationName: 'errorMessage'
                },
                EventBridgeRuleTemplateGroupIds: {
                  shape: 'Sni',
                  locationName: 'eventBridgeRuleTemplateGroupIds'
                },
                FailedMediaResourceMap: {
                  shape: 'Snj',
                  locationName: 'failedMediaResourceMap'
                },
                Id: {
                  locationName: 'id'
                },
                LastDiscoveredAt: {
                  shape: 'Sk2',
                  locationName: 'lastDiscoveredAt'
                },
                LastSuccessfulMonitorDeployment: {
                  shape: 'Snn',
                  locationName: 'lastSuccessfulMonitorDeployment'
                },
                MediaResourceMap: {
                  shape: 'Snp',
                  locationName: 'mediaResourceMap'
                },
                ModifiedAt: {
                  shape: 'Sk2',
                  locationName: 'modifiedAt'
                },
                MonitorChangesPendingDeployment: {
                  locationName: 'monitorChangesPendingDeployment',
                  type: 'boolean'
                },
                MonitorDeployment: {
                  shape: 'Snr',
                  locationName: 'monitorDeployment'
                },
                Name: {
                  locationName: 'name'
                },
                Status: {
                  locationName: 'status'
                },
                Tags: {
                  shape: 'Smu',
                  locationName: 'tags'
                }
              }
            }
          },
          StartUpdateSignalMap: {
            http: {
              method: 'PATCH',
              requestUri: '/prod/signal-maps/{identifier}',
              responseCode: 202
            },
            input: {
              type: 'structure',
              members: {
                CloudWatchAlarmTemplateGroupIdentifiers: {
                  shape: 'Sne',
                  locationName: 'cloudWatchAlarmTemplateGroupIdentifiers'
                },
                Description: {
                  locationName: 'description'
                },
                DiscoveryEntryPointArn: {
                  locationName: 'discoveryEntryPointArn'
                },
                EventBridgeRuleTemplateGroupIdentifiers: {
                  shape: 'Sne',
                  locationName: 'eventBridgeRuleTemplateGroupIdentifiers'
                },
                ForceRediscovery: {
                  locationName: 'forceRediscovery',
                  type: 'boolean'
                },
                Identifier: {
                  location: 'uri',
                  locationName: 'identifier'
                },
                Name: {
                  locationName: 'name'
                }
              },
              required: ['Identifier']
            },
            output: {
              type: 'structure',
              members: {
                Arn: {
                  locationName: 'arn'
                },
                CloudWatchAlarmTemplateGroupIds: {
                  shape: 'Sni',
                  locationName: 'cloudWatchAlarmTemplateGroupIds'
                },
                CreatedAt: {
                  shape: 'Sk2',
                  locationName: 'createdAt'
                },
                Description: {
                  locationName: 'description'
                },
                DiscoveryEntryPointArn: {
                  locationName: 'discoveryEntryPointArn'
                },
                ErrorMessage: {
                  locationName: 'errorMessage'
                },
                EventBridgeRuleTemplateGroupIds: {
                  shape: 'Sni',
                  locationName: 'eventBridgeRuleTemplateGroupIds'
                },
                FailedMediaResourceMap: {
                  shape: 'Snj',
                  locationName: 'failedMediaResourceMap'
                },
                Id: {
                  locationName: 'id'
                },
                LastDiscoveredAt: {
                  shape: 'Sk2',
                  locationName: 'lastDiscoveredAt'
                },
                LastSuccessfulMonitorDeployment: {
                  shape: 'Snn',
                  locationName: 'lastSuccessfulMonitorDeployment'
                },
                MediaResourceMap: {
                  shape: 'Snp',
                  locationName: 'mediaResourceMap'
                },
                ModifiedAt: {
                  shape: 'Sk2',
                  locationName: 'modifiedAt'
                },
                MonitorChangesPendingDeployment: {
                  locationName: 'monitorChangesPendingDeployment',
                  type: 'boolean'
                },
                MonitorDeployment: {
                  shape: 'Snr',
                  locationName: 'monitorDeployment'
                },
                Name: {
                  locationName: 'name'
                },
                Status: {
                  locationName: 'status'
                },
                Tags: {
                  shape: 'Smu',
                  locationName: 'tags'
                }
              }
            }
          },
          UpdateCloudWatchAlarmTemplate: {
            http: {
              method: 'PATCH',
              requestUri: '/prod/cloudwatch-alarm-templates/{identifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ComparisonOperator: {
                  locationName: 'comparisonOperator'
                },
                DatapointsToAlarm: {
                  locationName: 'datapointsToAlarm',
                  type: 'integer'
                },
                Description: {
                  locationName: 'description'
                },
                EvaluationPeriods: {
                  locationName: 'evaluationPeriods',
                  type: 'integer'
                },
                GroupIdentifier: {
                  locationName: 'groupIdentifier'
                },
                Identifier: {
                  location: 'uri',
                  locationName: 'identifier'
                },
                MetricName: {
                  locationName: 'metricName'
                },
                Name: {
                  locationName: 'name'
                },
                Period: {
                  locationName: 'period',
                  type: 'integer'
                },
                Statistic: {
                  locationName: 'statistic'
                },
                TargetResourceType: {
                  locationName: 'targetResourceType'
                },
                Threshold: {
                  locationName: 'threshold',
                  type: 'double'
                },
                TreatMissingData: {
                  locationName: 'treatMissingData'
                }
              },
              required: ['Identifier']
            },
            output: {
              type: 'structure',
              members: {
                Arn: {
                  locationName: 'arn'
                },
                ComparisonOperator: {
                  locationName: 'comparisonOperator'
                },
                CreatedAt: {
                  shape: 'Sk2',
                  locationName: 'createdAt'
                },
                DatapointsToAlarm: {
                  locationName: 'datapointsToAlarm',
                  type: 'integer'
                },
                Description: {
                  locationName: 'description'
                },
                EvaluationPeriods: {
                  locationName: 'evaluationPeriods',
                  type: 'integer'
                },
                GroupId: {
                  locationName: 'groupId'
                },
                Id: {
                  locationName: 'id'
                },
                MetricName: {
                  locationName: 'metricName'
                },
                ModifiedAt: {
                  shape: 'Sk2',
                  locationName: 'modifiedAt'
                },
                Name: {
                  locationName: 'name'
                },
                Period: {
                  locationName: 'period',
                  type: 'integer'
                },
                Statistic: {
                  locationName: 'statistic'
                },
                Tags: {
                  shape: 'Smu',
                  locationName: 'tags'
                },
                TargetResourceType: {
                  locationName: 'targetResourceType'
                },
                Threshold: {
                  locationName: 'threshold',
                  type: 'double'
                },
                TreatMissingData: {
                  locationName: 'treatMissingData'
                }
              }
            }
          },
          UpdateCloudWatchAlarmTemplateGroup: {
            http: {
              method: 'PATCH',
              requestUri: '/prod/cloudwatch-alarm-template-groups/{identifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                Description: {
                  locationName: 'description'
                },
                Identifier: {
                  location: 'uri',
                  locationName: 'identifier'
                }
              },
              required: ['Identifier']
            },
            output: {
              type: 'structure',
              members: {
                Arn: {
                  locationName: 'arn'
                },
                CreatedAt: {
                  shape: 'Sk2',
                  locationName: 'createdAt'
                },
                Description: {
                  locationName: 'description'
                },
                Id: {
                  locationName: 'id'
                },
                ModifiedAt: {
                  shape: 'Sk2',
                  locationName: 'modifiedAt'
                },
                Name: {
                  locationName: 'name'
                },
                Tags: {
                  shape: 'Smu',
                  locationName: 'tags'
                }
              }
            }
          },
          UpdateEventBridgeRuleTemplate: {
            http: {
              method: 'PATCH',
              requestUri: '/prod/eventbridge-rule-templates/{identifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                Description: {
                  locationName: 'description'
                },
                EventTargets: {
                  shape: 'Sn4',
                  locationName: 'eventTargets'
                },
                EventType: {
                  locationName: 'eventType'
                },
                GroupIdentifier: {
                  locationName: 'groupIdentifier'
                },
                Identifier: {
                  location: 'uri',
                  locationName: 'identifier'
                },
                Name: {
                  locationName: 'name'
                }
              },
              required: ['Identifier']
            },
            output: {
              type: 'structure',
              members: {
                Arn: {
                  locationName: 'arn'
                },
                CreatedAt: {
                  shape: 'Sk2',
                  locationName: 'createdAt'
                },
                Description: {
                  locationName: 'description'
                },
                EventTargets: {
                  shape: 'Sn4',
                  locationName: 'eventTargets'
                },
                EventType: {
                  locationName: 'eventType'
                },
                GroupId: {
                  locationName: 'groupId'
                },
                Id: {
                  locationName: 'id'
                },
                ModifiedAt: {
                  shape: 'Sk2',
                  locationName: 'modifiedAt'
                },
                Name: {
                  locationName: 'name'
                },
                Tags: {
                  shape: 'Smu',
                  locationName: 'tags'
                }
              }
            }
          },
          UpdateEventBridgeRuleTemplateGroup: {
            http: {
              method: 'PATCH',
              requestUri: '/prod/eventbridge-rule-template-groups/{identifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                Description: {
                  locationName: 'description'
                },
                Identifier: {
                  location: 'uri',
                  locationName: 'identifier'
                }
              },
              required: ['Identifier']
            },
            output: {
              type: 'structure',
              members: {
                Arn: {
                  locationName: 'arn'
                },
                CreatedAt: {
                  shape: 'Sk2',
                  locationName: 'createdAt'
                },
                Description: {
                  locationName: 'description'
                },
                Id: {
                  locationName: 'id'
                },
                ModifiedAt: {
                  shape: 'Sk2',
                  locationName: 'modifiedAt'
                },
                Name: {
                  locationName: 'name'
                },
                Tags: {
                  shape: 'Smu',
                  locationName: 'tags'
                }
              }
            }
          }
        },
        shapes: {
          S5: {
            type: 'list',
            member: {}
          },
          S7: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Arn: {
                  locationName: 'arn'
                },
                Code: {
                  locationName: 'code'
                },
                Id: {
                  locationName: 'id'
                },
                Message: {
                  locationName: 'message'
                }
              }
            }
          },
          S9: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Arn: {
                  locationName: 'arn'
                },
                Id: {
                  locationName: 'id'
                },
                State: {
                  locationName: 'state'
                }
              }
            }
          },
          Sh: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                ActionName: {
                  locationName: 'actionName'
                },
                ScheduleActionSettings: {
                  locationName: 'scheduleActionSettings',
                  type: 'structure',
                  members: {
                    HlsId3SegmentTaggingSettings: {
                      locationName: 'hlsId3SegmentTaggingSettings',
                      type: 'structure',
                      members: {
                        Tag: {
                          locationName: 'tag'
                        },
                        Id3: {
                          locationName: 'id3'
                        }
                      }
                    },
                    HlsTimedMetadataSettings: {
                      locationName: 'hlsTimedMetadataSettings',
                      type: 'structure',
                      members: {
                        Id3: {
                          locationName: 'id3'
                        }
                      },
                      required: ['Id3']
                    },
                    InputPrepareSettings: {
                      locationName: 'inputPrepareSettings',
                      type: 'structure',
                      members: {
                        InputAttachmentNameReference: {
                          locationName: 'inputAttachmentNameReference'
                        },
                        InputClippingSettings: {
                          shape: 'Sn',
                          locationName: 'inputClippingSettings'
                        },
                        UrlPath: {
                          shape: 'S5',
                          locationName: 'urlPath'
                        }
                      }
                    },
                    InputSwitchSettings: {
                      locationName: 'inputSwitchSettings',
                      type: 'structure',
                      members: {
                        InputAttachmentNameReference: {
                          locationName: 'inputAttachmentNameReference'
                        },
                        InputClippingSettings: {
                          shape: 'Sn',
                          locationName: 'inputClippingSettings'
                        },
                        UrlPath: {
                          shape: 'S5',
                          locationName: 'urlPath'
                        }
                      },
                      required: ['InputAttachmentNameReference']
                    },
                    MotionGraphicsImageActivateSettings: {
                      locationName: 'motionGraphicsImageActivateSettings',
                      type: 'structure',
                      members: {
                        Duration: {
                          locationName: 'duration',
                          type: 'long'
                        },
                        PasswordParam: {
                          locationName: 'passwordParam'
                        },
                        Url: {
                          locationName: 'url'
                        },
                        Username: {
                          locationName: 'username'
                        }
                      }
                    },
                    MotionGraphicsImageDeactivateSettings: {
                      locationName: 'motionGraphicsImageDeactivateSettings',
                      type: 'structure',
                      members: {}
                    },
                    PauseStateSettings: {
                      locationName: 'pauseStateSettings',
                      type: 'structure',
                      members: {
                        Pipelines: {
                          locationName: 'pipelines',
                          type: 'list',
                          member: {
                            type: 'structure',
                            members: {
                              PipelineId: {
                                locationName: 'pipelineId'
                              }
                            },
                            required: ['PipelineId']
                          }
                        }
                      }
                    },
                    Scte35InputSettings: {
                      locationName: 'scte35InputSettings',
                      type: 'structure',
                      members: {
                        InputAttachmentNameReference: {
                          locationName: 'inputAttachmentNameReference'
                        },
                        Mode: {
                          locationName: 'mode'
                        }
                      },
                      required: ['Mode']
                    },
                    Scte35ReturnToNetworkSettings: {
                      locationName: 'scte35ReturnToNetworkSettings',
                      type: 'structure',
                      members: {
                        SpliceEventId: {
                          locationName: 'spliceEventId',
                          type: 'long'
                        }
                      },
                      required: ['SpliceEventId']
                    },
                    Scte35SpliceInsertSettings: {
                      locationName: 'scte35SpliceInsertSettings',
                      type: 'structure',
                      members: {
                        Duration: {
                          locationName: 'duration',
                          type: 'long'
                        },
                        SpliceEventId: {
                          locationName: 'spliceEventId',
                          type: 'long'
                        }
                      },
                      required: ['SpliceEventId']
                    },
                    Scte35TimeSignalSettings: {
                      locationName: 'scte35TimeSignalSettings',
                      type: 'structure',
                      members: {
                        Scte35Descriptors: {
                          locationName: 'scte35Descriptors',
                          type: 'list',
                          member: {
                            type: 'structure',
                            members: {
                              Scte35DescriptorSettings: {
                                locationName: 'scte35DescriptorSettings',
                                type: 'structure',
                                members: {
                                  SegmentationDescriptorScte35DescriptorSettings: {
                                    locationName: 'segmentationDescriptorScte35DescriptorSettings',
                                    type: 'structure',
                                    members: {
                                      DeliveryRestrictions: {
                                        locationName: 'deliveryRestrictions',
                                        type: 'structure',
                                        members: {
                                          ArchiveAllowedFlag: {
                                            locationName: 'archiveAllowedFlag'
                                          },
                                          DeviceRestrictions: {
                                            locationName: 'deviceRestrictions'
                                          },
                                          NoRegionalBlackoutFlag: {
                                            locationName: 'noRegionalBlackoutFlag'
                                          },
                                          WebDeliveryAllowedFlag: {
                                            locationName: 'webDeliveryAllowedFlag'
                                          }
                                        },
                                        required: ['DeviceRestrictions', 'ArchiveAllowedFlag', 'WebDeliveryAllowedFlag', 'NoRegionalBlackoutFlag']
                                      },
                                      SegmentNum: {
                                        locationName: 'segmentNum',
                                        type: 'integer'
                                      },
                                      SegmentationCancelIndicator: {
                                        locationName: 'segmentationCancelIndicator'
                                      },
                                      SegmentationDuration: {
                                        locationName: 'segmentationDuration',
                                        type: 'long'
                                      },
                                      SegmentationEventId: {
                                        locationName: 'segmentationEventId',
                                        type: 'long'
                                      },
                                      SegmentationTypeId: {
                                        locationName: 'segmentationTypeId',
                                        type: 'integer'
                                      },
                                      SegmentationUpid: {
                                        locationName: 'segmentationUpid'
                                      },
                                      SegmentationUpidType: {
                                        locationName: 'segmentationUpidType',
                                        type: 'integer'
                                      },
                                      SegmentsExpected: {
                                        locationName: 'segmentsExpected',
                                        type: 'integer'
                                      },
                                      SubSegmentNum: {
                                        locationName: 'subSegmentNum',
                                        type: 'integer'
                                      },
                                      SubSegmentsExpected: {
                                        locationName: 'subSegmentsExpected',
                                        type: 'integer'
                                      }
                                    },
                                    required: ['SegmentationEventId', 'SegmentationCancelIndicator']
                                  }
                                },
                                required: ['SegmentationDescriptorScte35DescriptorSettings']
                              }
                            },
                            required: ['Scte35DescriptorSettings']
                          }
                        }
                      },
                      required: ['Scte35Descriptors']
                    },
                    StaticImageActivateSettings: {
                      locationName: 'staticImageActivateSettings',
                      type: 'structure',
                      members: {
                        Duration: {
                          locationName: 'duration',
                          type: 'integer'
                        },
                        FadeIn: {
                          locationName: 'fadeIn',
                          type: 'integer'
                        },
                        FadeOut: {
                          locationName: 'fadeOut',
                          type: 'integer'
                        },
                        Height: {
                          locationName: 'height',
                          type: 'integer'
                        },
                        Image: {
                          shape: 'S1m',
                          locationName: 'image'
                        },
                        ImageX: {
                          locationName: 'imageX',
                          type: 'integer'
                        },
                        ImageY: {
                          locationName: 'imageY',
                          type: 'integer'
                        },
                        Layer: {
                          locationName: 'layer',
                          type: 'integer'
                        },
                        Opacity: {
                          locationName: 'opacity',
                          type: 'integer'
                        },
                        Width: {
                          locationName: 'width',
                          type: 'integer'
                        }
                      },
                      required: ['Image']
                    },
                    StaticImageDeactivateSettings: {
                      locationName: 'staticImageDeactivateSettings',
                      type: 'structure',
                      members: {
                        FadeOut: {
                          locationName: 'fadeOut',
                          type: 'integer'
                        },
                        Layer: {
                          locationName: 'layer',
                          type: 'integer'
                        }
                      }
                    },
                    StaticImageOutputActivateSettings: {
                      locationName: 'staticImageOutputActivateSettings',
                      type: 'structure',
                      members: {
                        Duration: {
                          locationName: 'duration',
                          type: 'integer'
                        },
                        FadeIn: {
                          locationName: 'fadeIn',
                          type: 'integer'
                        },
                        FadeOut: {
                          locationName: 'fadeOut',
                          type: 'integer'
                        },
                        Height: {
                          locationName: 'height',
                          type: 'integer'
                        },
                        Image: {
                          shape: 'S1m',
                          locationName: 'image'
                        },
                        ImageX: {
                          locationName: 'imageX',
                          type: 'integer'
                        },
                        ImageY: {
                          locationName: 'imageY',
                          type: 'integer'
                        },
                        Layer: {
                          locationName: 'layer',
                          type: 'integer'
                        },
                        Opacity: {
                          locationName: 'opacity',
                          type: 'integer'
                        },
                        OutputNames: {
                          shape: 'S5',
                          locationName: 'outputNames'
                        },
                        Width: {
                          locationName: 'width',
                          type: 'integer'
                        }
                      },
                      required: ['OutputNames', 'Image']
                    },
                    StaticImageOutputDeactivateSettings: {
                      locationName: 'staticImageOutputDeactivateSettings',
                      type: 'structure',
                      members: {
                        FadeOut: {
                          locationName: 'fadeOut',
                          type: 'integer'
                        },
                        Layer: {
                          locationName: 'layer',
                          type: 'integer'
                        },
                        OutputNames: {
                          shape: 'S5',
                          locationName: 'outputNames'
                        }
                      },
                      required: ['OutputNames']
                    }
                  }
                },
                ScheduleActionStartSettings: {
                  locationName: 'scheduleActionStartSettings',
                  type: 'structure',
                  members: {
                    FixedModeScheduleActionStartSettings: {
                      locationName: 'fixedModeScheduleActionStartSettings',
                      type: 'structure',
                      members: {
                        Time: {
                          locationName: 'time'
                        }
                      },
                      required: ['Time']
                    },
                    FollowModeScheduleActionStartSettings: {
                      locationName: 'followModeScheduleActionStartSettings',
                      type: 'structure',
                      members: {
                        FollowPoint: {
                          locationName: 'followPoint'
                        },
                        ReferenceActionName: {
                          locationName: 'referenceActionName'
                        }
                      },
                      required: ['ReferenceActionName', 'FollowPoint']
                    },
                    ImmediateModeScheduleActionStartSettings: {
                      locationName: 'immediateModeScheduleActionStartSettings',
                      type: 'structure',
                      members: {}
                    }
                  }
                }
              },
              required: ['ActionName', 'ScheduleActionStartSettings', 'ScheduleActionSettings']
            }
          },
          Sn: {
            type: 'structure',
            members: {
              InputTimecodeSource: {
                locationName: 'inputTimecodeSource'
              },
              StartTimecode: {
                locationName: 'startTimecode',
                type: 'structure',
                members: {
                  Timecode: {
                    locationName: 'timecode'
                  }
                }
              },
              StopTimecode: {
                locationName: 'stopTimecode',
                type: 'structure',
                members: {
                  LastFrameClippingBehavior: {
                    locationName: 'lastFrameClippingBehavior'
                  },
                  Timecode: {
                    locationName: 'timecode'
                  }
                }
              }
            },
            required: ['InputTimecodeSource']
          },
          S1m: {
            type: 'structure',
            members: {
              PasswordParam: {
                locationName: 'passwordParam'
              },
              Uri: {
                locationName: 'uri'
              },
              Username: {
                locationName: 'username'
              }
            },
            required: ['Uri']
          },
          S27: {
            type: 'structure',
            members: {
              Resolution: {
                locationName: 'resolution'
              }
            }
          },
          S2a: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Id: {
                  locationName: 'id'
                },
                MediaPackageSettings: {
                  locationName: 'mediaPackageSettings',
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ChannelId: {
                        locationName: 'channelId'
                      }
                    }
                  }
                },
                MultiplexSettings: {
                  locationName: 'multiplexSettings',
                  type: 'structure',
                  members: {
                    MultiplexId: {
                      locationName: 'multiplexId'
                    },
                    ProgramName: {
                      locationName: 'programName'
                    }
                  }
                },
                Settings: {
                  locationName: 'settings',
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      PasswordParam: {
                        locationName: 'passwordParam'
                      },
                      StreamName: {
                        locationName: 'streamName'
                      },
                      Url: {
                        locationName: 'url'
                      },
                      Username: {
                        locationName: 'username'
                      }
                    }
                  }
                }
              }
            }
          },
          S2i: {
            type: 'structure',
            members: {
              AudioDescriptions: {
                locationName: 'audioDescriptions',
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    AudioNormalizationSettings: {
                      locationName: 'audioNormalizationSettings',
                      type: 'structure',
                      members: {
                        Algorithm: {
                          locationName: 'algorithm'
                        },
                        AlgorithmControl: {
                          locationName: 'algorithmControl'
                        },
                        TargetLkfs: {
                          locationName: 'targetLkfs',
                          type: 'double'
                        }
                      }
                    },
                    AudioSelectorName: {
                      locationName: 'audioSelectorName'
                    },
                    AudioType: {
                      locationName: 'audioType'
                    },
                    AudioTypeControl: {
                      locationName: 'audioTypeControl'
                    },
                    AudioWatermarkingSettings: {
                      locationName: 'audioWatermarkingSettings',
                      type: 'structure',
                      members: {
                        NielsenWatermarksSettings: {
                          locationName: 'nielsenWatermarksSettings',
                          type: 'structure',
                          members: {
                            NielsenCbetSettings: {
                              locationName: 'nielsenCbetSettings',
                              type: 'structure',
                              members: {
                                CbetCheckDigitString: {
                                  locationName: 'cbetCheckDigitString'
                                },
                                CbetStepaside: {
                                  locationName: 'cbetStepaside'
                                },
                                Csid: {
                                  locationName: 'csid'
                                }
                              },
                              required: ['CbetCheckDigitString', 'CbetStepaside', 'Csid']
                            },
                            NielsenDistributionType: {
                              locationName: 'nielsenDistributionType'
                            },
                            NielsenNaesIiNwSettings: {
                              locationName: 'nielsenNaesIiNwSettings',
                              type: 'structure',
                              members: {
                                CheckDigitString: {
                                  locationName: 'checkDigitString'
                                },
                                Sid: {
                                  locationName: 'sid',
                                  type: 'double'
                                },
                                Timezone: {
                                  locationName: 'timezone'
                                }
                              },
                              required: ['CheckDigitString', 'Sid']
                            }
                          }
                        }
                      }
                    },
                    CodecSettings: {
                      locationName: 'codecSettings',
                      type: 'structure',
                      members: {
                        AacSettings: {
                          locationName: 'aacSettings',
                          type: 'structure',
                          members: {
                            Bitrate: {
                              locationName: 'bitrate',
                              type: 'double'
                            },
                            CodingMode: {
                              locationName: 'codingMode'
                            },
                            InputType: {
                              locationName: 'inputType'
                            },
                            Profile: {
                              locationName: 'profile'
                            },
                            RateControlMode: {
                              locationName: 'rateControlMode'
                            },
                            RawFormat: {
                              locationName: 'rawFormat'
                            },
                            SampleRate: {
                              locationName: 'sampleRate',
                              type: 'double'
                            },
                            Spec: {
                              locationName: 'spec'
                            },
                            VbrQuality: {
                              locationName: 'vbrQuality'
                            }
                          }
                        },
                        Ac3Settings: {
                          locationName: 'ac3Settings',
                          type: 'structure',
                          members: {
                            Bitrate: {
                              locationName: 'bitrate',
                              type: 'double'
                            },
                            BitstreamMode: {
                              locationName: 'bitstreamMode'
                            },
                            CodingMode: {
                              locationName: 'codingMode'
                            },
                            Dialnorm: {
                              locationName: 'dialnorm',
                              type: 'integer'
                            },
                            DrcProfile: {
                              locationName: 'drcProfile'
                            },
                            LfeFilter: {
                              locationName: 'lfeFilter'
                            },
                            MetadataControl: {
                              locationName: 'metadataControl'
                            },
                            AttenuationControl: {
                              locationName: 'attenuationControl'
                            }
                          }
                        },
                        Eac3AtmosSettings: {
                          locationName: 'eac3AtmosSettings',
                          type: 'structure',
                          members: {
                            Bitrate: {
                              locationName: 'bitrate',
                              type: 'double'
                            },
                            CodingMode: {
                              locationName: 'codingMode'
                            },
                            Dialnorm: {
                              locationName: 'dialnorm',
                              type: 'integer'
                            },
                            DrcLine: {
                              locationName: 'drcLine'
                            },
                            DrcRf: {
                              locationName: 'drcRf'
                            },
                            HeightTrim: {
                              locationName: 'heightTrim',
                              type: 'double'
                            },
                            SurroundTrim: {
                              locationName: 'surroundTrim',
                              type: 'double'
                            }
                          }
                        },
                        Eac3Settings: {
                          locationName: 'eac3Settings',
                          type: 'structure',
                          members: {
                            AttenuationControl: {
                              locationName: 'attenuationControl'
                            },
                            Bitrate: {
                              locationName: 'bitrate',
                              type: 'double'
                            },
                            BitstreamMode: {
                              locationName: 'bitstreamMode'
                            },
                            CodingMode: {
                              locationName: 'codingMode'
                            },
                            DcFilter: {
                              locationName: 'dcFilter'
                            },
                            Dialnorm: {
                              locationName: 'dialnorm',
                              type: 'integer'
                            },
                            DrcLine: {
                              locationName: 'drcLine'
                            },
                            DrcRf: {
                              locationName: 'drcRf'
                            },
                            LfeControl: {
                              locationName: 'lfeControl'
                            },
                            LfeFilter: {
                              locationName: 'lfeFilter'
                            },
                            LoRoCenterMixLevel: {
                              locationName: 'loRoCenterMixLevel',
                              type: 'double'
                            },
                            LoRoSurroundMixLevel: {
                              locationName: 'loRoSurroundMixLevel',
                              type: 'double'
                            },
                            LtRtCenterMixLevel: {
                              locationName: 'ltRtCenterMixLevel',
                              type: 'double'
                            },
                            LtRtSurroundMixLevel: {
                              locationName: 'ltRtSurroundMixLevel',
                              type: 'double'
                            },
                            MetadataControl: {
                              locationName: 'metadataControl'
                            },
                            PassthroughControl: {
                              locationName: 'passthroughControl'
                            },
                            PhaseControl: {
                              locationName: 'phaseControl'
                            },
                            StereoDownmix: {
                              locationName: 'stereoDownmix'
                            },
                            SurroundExMode: {
                              locationName: 'surroundExMode'
                            },
                            SurroundMode: {
                              locationName: 'surroundMode'
                            }
                          }
                        },
                        Mp2Settings: {
                          locationName: 'mp2Settings',
                          type: 'structure',
                          members: {
                            Bitrate: {
                              locationName: 'bitrate',
                              type: 'double'
                            },
                            CodingMode: {
                              locationName: 'codingMode'
                            },
                            SampleRate: {
                              locationName: 'sampleRate',
                              type: 'double'
                            }
                          }
                        },
                        PassThroughSettings: {
                          locationName: 'passThroughSettings',
                          type: 'structure',
                          members: {}
                        },
                        WavSettings: {
                          locationName: 'wavSettings',
                          type: 'structure',
                          members: {
                            BitDepth: {
                              locationName: 'bitDepth',
                              type: 'double'
                            },
                            CodingMode: {
                              locationName: 'codingMode'
                            },
                            SampleRate: {
                              locationName: 'sampleRate',
                              type: 'double'
                            }
                          }
                        }
                      }
                    },
                    LanguageCode: {
                      locationName: 'languageCode'
                    },
                    LanguageCodeControl: {
                      locationName: 'languageCodeControl'
                    },
                    Name: {
                      locationName: 'name'
                    },
                    RemixSettings: {
                      locationName: 'remixSettings',
                      type: 'structure',
                      members: {
                        ChannelMappings: {
                          locationName: 'channelMappings',
                          type: 'list',
                          member: {
                            type: 'structure',
                            members: {
                              InputChannelLevels: {
                                locationName: 'inputChannelLevels',
                                type: 'list',
                                member: {
                                  type: 'structure',
                                  members: {
                                    Gain: {
                                      locationName: 'gain',
                                      type: 'integer'
                                    },
                                    InputChannel: {
                                      locationName: 'inputChannel',
                                      type: 'integer'
                                    }
                                  },
                                  required: ['InputChannel', 'Gain']
                                }
                              },
                              OutputChannel: {
                                locationName: 'outputChannel',
                                type: 'integer'
                              }
                            },
                            required: ['OutputChannel', 'InputChannelLevels']
                          }
                        },
                        ChannelsIn: {
                          locationName: 'channelsIn',
                          type: 'integer'
                        },
                        ChannelsOut: {
                          locationName: 'channelsOut',
                          type: 'integer'
                        }
                      },
                      required: ['ChannelMappings']
                    },
                    StreamName: {
                      locationName: 'streamName'
                    },
                    AudioDashRoles: {
                      locationName: 'audioDashRoles',
                      type: 'list',
                      member: {}
                    },
                    DvbDashAccessibility: {
                      locationName: 'dvbDashAccessibility'
                    }
                  },
                  required: ['AudioSelectorName', 'Name']
                }
              },
              AvailBlanking: {
                locationName: 'availBlanking',
                type: 'structure',
                members: {
                  AvailBlankingImage: {
                    shape: 'S1m',
                    locationName: 'availBlankingImage'
                  },
                  State: {
                    locationName: 'state'
                  }
                }
              },
              AvailConfiguration: {
                locationName: 'availConfiguration',
                type: 'structure',
                members: {
                  AvailSettings: {
                    locationName: 'availSettings',
                    type: 'structure',
                    members: {
                      Esam: {
                        locationName: 'esam',
                        type: 'structure',
                        members: {
                          AcquisitionPointId: {
                            locationName: 'acquisitionPointId'
                          },
                          AdAvailOffset: {
                            locationName: 'adAvailOffset',
                            type: 'integer'
                          },
                          PasswordParam: {
                            locationName: 'passwordParam'
                          },
                          PoisEndpoint: {
                            locationName: 'poisEndpoint'
                          },
                          Username: {
                            locationName: 'username'
                          },
                          ZoneIdentity: {
                            locationName: 'zoneIdentity'
                          }
                        },
                        required: ['AcquisitionPointId', 'PoisEndpoint']
                      },
                      Scte35SpliceInsert: {
                        locationName: 'scte35SpliceInsert',
                        type: 'structure',
                        members: {
                          AdAvailOffset: {
                            locationName: 'adAvailOffset',
                            type: 'integer'
                          },
                          NoRegionalBlackoutFlag: {
                            locationName: 'noRegionalBlackoutFlag'
                          },
                          WebDeliveryAllowedFlag: {
                            locationName: 'webDeliveryAllowedFlag'
                          }
                        }
                      },
                      Scte35TimeSignalApos: {
                        locationName: 'scte35TimeSignalApos',
                        type: 'structure',
                        members: {
                          AdAvailOffset: {
                            locationName: 'adAvailOffset',
                            type: 'integer'
                          },
                          NoRegionalBlackoutFlag: {
                            locationName: 'noRegionalBlackoutFlag'
                          },
                          WebDeliveryAllowedFlag: {
                            locationName: 'webDeliveryAllowedFlag'
                          }
                        }
                      }
                    }
                  },
                  Scte35SegmentationScope: {
                    locationName: 'scte35SegmentationScope'
                  }
                }
              },
              BlackoutSlate: {
                locationName: 'blackoutSlate',
                type: 'structure',
                members: {
                  BlackoutSlateImage: {
                    shape: 'S1m',
                    locationName: 'blackoutSlateImage'
                  },
                  NetworkEndBlackout: {
                    locationName: 'networkEndBlackout'
                  },
                  NetworkEndBlackoutImage: {
                    shape: 'S1m',
                    locationName: 'networkEndBlackoutImage'
                  },
                  NetworkId: {
                    locationName: 'networkId'
                  },
                  State: {
                    locationName: 'state'
                  }
                }
              },
              CaptionDescriptions: {
                locationName: 'captionDescriptions',
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    Accessibility: {
                      locationName: 'accessibility'
                    },
                    CaptionSelectorName: {
                      locationName: 'captionSelectorName'
                    },
                    DestinationSettings: {
                      locationName: 'destinationSettings',
                      type: 'structure',
                      members: {
                        AribDestinationSettings: {
                          locationName: 'aribDestinationSettings',
                          type: 'structure',
                          members: {}
                        },
                        BurnInDestinationSettings: {
                          locationName: 'burnInDestinationSettings',
                          type: 'structure',
                          members: {
                            Alignment: {
                              locationName: 'alignment'
                            },
                            BackgroundColor: {
                              locationName: 'backgroundColor'
                            },
                            BackgroundOpacity: {
                              locationName: 'backgroundOpacity',
                              type: 'integer'
                            },
                            Font: {
                              shape: 'S1m',
                              locationName: 'font'
                            },
                            FontColor: {
                              locationName: 'fontColor'
                            },
                            FontOpacity: {
                              locationName: 'fontOpacity',
                              type: 'integer'
                            },
                            FontResolution: {
                              locationName: 'fontResolution',
                              type: 'integer'
                            },
                            FontSize: {
                              locationName: 'fontSize'
                            },
                            OutlineColor: {
                              locationName: 'outlineColor'
                            },
                            OutlineSize: {
                              locationName: 'outlineSize',
                              type: 'integer'
                            },
                            ShadowColor: {
                              locationName: 'shadowColor'
                            },
                            ShadowOpacity: {
                              locationName: 'shadowOpacity',
                              type: 'integer'
                            },
                            ShadowXOffset: {
                              locationName: 'shadowXOffset',
                              type: 'integer'
                            },
                            ShadowYOffset: {
                              locationName: 'shadowYOffset',
                              type: 'integer'
                            },
                            TeletextGridControl: {
                              locationName: 'teletextGridControl'
                            },
                            XPosition: {
                              locationName: 'xPosition',
                              type: 'integer'
                            },
                            YPosition: {
                              locationName: 'yPosition',
                              type: 'integer'
                            }
                          }
                        },
                        DvbSubDestinationSettings: {
                          locationName: 'dvbSubDestinationSettings',
                          type: 'structure',
                          members: {
                            Alignment: {
                              locationName: 'alignment'
                            },
                            BackgroundColor: {
                              locationName: 'backgroundColor'
                            },
                            BackgroundOpacity: {
                              locationName: 'backgroundOpacity',
                              type: 'integer'
                            },
                            Font: {
                              shape: 'S1m',
                              locationName: 'font'
                            },
                            FontColor: {
                              locationName: 'fontColor'
                            },
                            FontOpacity: {
                              locationName: 'fontOpacity',
                              type: 'integer'
                            },
                            FontResolution: {
                              locationName: 'fontResolution',
                              type: 'integer'
                            },
                            FontSize: {
                              locationName: 'fontSize'
                            },
                            OutlineColor: {
                              locationName: 'outlineColor'
                            },
                            OutlineSize: {
                              locationName: 'outlineSize',
                              type: 'integer'
                            },
                            ShadowColor: {
                              locationName: 'shadowColor'
                            },
                            ShadowOpacity: {
                              locationName: 'shadowOpacity',
                              type: 'integer'
                            },
                            ShadowXOffset: {
                              locationName: 'shadowXOffset',
                              type: 'integer'
                            },
                            ShadowYOffset: {
                              locationName: 'shadowYOffset',
                              type: 'integer'
                            },
                            TeletextGridControl: {
                              locationName: 'teletextGridControl'
                            },
                            XPosition: {
                              locationName: 'xPosition',
                              type: 'integer'
                            },
                            YPosition: {
                              locationName: 'yPosition',
                              type: 'integer'
                            }
                          }
                        },
                        EbuTtDDestinationSettings: {
                          locationName: 'ebuTtDDestinationSettings',
                          type: 'structure',
                          members: {
                            CopyrightHolder: {
                              locationName: 'copyrightHolder'
                            },
                            FillLineGap: {
                              locationName: 'fillLineGap'
                            },
                            FontFamily: {
                              locationName: 'fontFamily'
                            },
                            StyleControl: {
                              locationName: 'styleControl'
                            }
                          }
                        },
                        EmbeddedDestinationSettings: {
                          locationName: 'embeddedDestinationSettings',
                          type: 'structure',
                          members: {}
                        },
                        EmbeddedPlusScte20DestinationSettings: {
                          locationName: 'embeddedPlusScte20DestinationSettings',
                          type: 'structure',
                          members: {}
                        },
                        RtmpCaptionInfoDestinationSettings: {
                          locationName: 'rtmpCaptionInfoDestinationSettings',
                          type: 'structure',
                          members: {}
                        },
                        Scte20PlusEmbeddedDestinationSettings: {
                          locationName: 'scte20PlusEmbeddedDestinationSettings',
                          type: 'structure',
                          members: {}
                        },
                        Scte27DestinationSettings: {
                          locationName: 'scte27DestinationSettings',
                          type: 'structure',
                          members: {}
                        },
                        SmpteTtDestinationSettings: {
                          locationName: 'smpteTtDestinationSettings',
                          type: 'structure',
                          members: {}
                        },
                        TeletextDestinationSettings: {
                          locationName: 'teletextDestinationSettings',
                          type: 'structure',
                          members: {}
                        },
                        TtmlDestinationSettings: {
                          locationName: 'ttmlDestinationSettings',
                          type: 'structure',
                          members: {
                            StyleControl: {
                              locationName: 'styleControl'
                            }
                          }
                        },
                        WebvttDestinationSettings: {
                          locationName: 'webvttDestinationSettings',
                          type: 'structure',
                          members: {
                            StyleControl: {
                              locationName: 'styleControl'
                            }
                          }
                        }
                      }
                    },
                    LanguageCode: {
                      locationName: 'languageCode'
                    },
                    LanguageDescription: {
                      locationName: 'languageDescription'
                    },
                    Name: {
                      locationName: 'name'
                    },
                    CaptionDashRoles: {
                      locationName: 'captionDashRoles',
                      type: 'list',
                      member: {}
                    },
                    DvbDashAccessibility: {
                      locationName: 'dvbDashAccessibility'
                    }
                  },
                  required: ['CaptionSelectorName', 'Name']
                }
              },
              FeatureActivations: {
                locationName: 'featureActivations',
                type: 'structure',
                members: {
                  InputPrepareScheduleActions: {
                    locationName: 'inputPrepareScheduleActions'
                  },
                  OutputStaticImageOverlayScheduleActions: {
                    locationName: 'outputStaticImageOverlayScheduleActions'
                  }
                }
              },
              GlobalConfiguration: {
                locationName: 'globalConfiguration',
                type: 'structure',
                members: {
                  InitialAudioGain: {
                    locationName: 'initialAudioGain',
                    type: 'integer'
                  },
                  InputEndAction: {
                    locationName: 'inputEndAction'
                  },
                  InputLossBehavior: {
                    locationName: 'inputLossBehavior',
                    type: 'structure',
                    members: {
                      BlackFrameMsec: {
                        locationName: 'blackFrameMsec',
                        type: 'integer'
                      },
                      InputLossImageColor: {
                        locationName: 'inputLossImageColor'
                      },
                      InputLossImageSlate: {
                        shape: 'S1m',
                        locationName: 'inputLossImageSlate'
                      },
                      InputLossImageType: {
                        locationName: 'inputLossImageType'
                      },
                      RepeatFrameMsec: {
                        locationName: 'repeatFrameMsec',
                        type: 'integer'
                      }
                    }
                  },
                  OutputLockingMode: {
                    locationName: 'outputLockingMode'
                  },
                  OutputTimingSource: {
                    locationName: 'outputTimingSource'
                  },
                  SupportLowFramerateInputs: {
                    locationName: 'supportLowFramerateInputs'
                  },
                  OutputLockingSettings: {
                    locationName: 'outputLockingSettings',
                    type: 'structure',
                    members: {
                      EpochLockingSettings: {
                        locationName: 'epochLockingSettings',
                        type: 'structure',
                        members: {
                          CustomEpoch: {
                            locationName: 'customEpoch'
                          },
                          JamSyncTime: {
                            locationName: 'jamSyncTime'
                          }
                        }
                      },
                      PipelineLockingSettings: {
                        locationName: 'pipelineLockingSettings',
                        type: 'structure',
                        members: {}
                      }
                    }
                  }
                }
              },
              MotionGraphicsConfiguration: {
                locationName: 'motionGraphicsConfiguration',
                type: 'structure',
                members: {
                  MotionGraphicsInsertion: {
                    locationName: 'motionGraphicsInsertion'
                  },
                  MotionGraphicsSettings: {
                    locationName: 'motionGraphicsSettings',
                    type: 'structure',
                    members: {
                      HtmlMotionGraphicsSettings: {
                        locationName: 'htmlMotionGraphicsSettings',
                        type: 'structure',
                        members: {}
                      }
                    }
                  }
                },
                required: ['MotionGraphicsSettings']
              },
              NielsenConfiguration: {
                locationName: 'nielsenConfiguration',
                type: 'structure',
                members: {
                  DistributorId: {
                    locationName: 'distributorId'
                  },
                  NielsenPcmToId3Tagging: {
                    locationName: 'nielsenPcmToId3Tagging'
                  }
                }
              },
              OutputGroups: {
                locationName: 'outputGroups',
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    Name: {
                      locationName: 'name'
                    },
                    OutputGroupSettings: {
                      locationName: 'outputGroupSettings',
                      type: 'structure',
                      members: {
                        ArchiveGroupSettings: {
                          locationName: 'archiveGroupSettings',
                          type: 'structure',
                          members: {
                            ArchiveCdnSettings: {
                              locationName: 'archiveCdnSettings',
                              type: 'structure',
                              members: {
                                ArchiveS3Settings: {
                                  locationName: 'archiveS3Settings',
                                  type: 'structure',
                                  members: {
                                    CannedAcl: {
                                      locationName: 'cannedAcl'
                                    }
                                  }
                                }
                              }
                            },
                            Destination: {
                              shape: 'S71',
                              locationName: 'destination'
                            },
                            RolloverInterval: {
                              locationName: 'rolloverInterval',
                              type: 'integer'
                            }
                          },
                          required: ['Destination']
                        },
                        FrameCaptureGroupSettings: {
                          locationName: 'frameCaptureGroupSettings',
                          type: 'structure',
                          members: {
                            Destination: {
                              shape: 'S71',
                              locationName: 'destination'
                            },
                            FrameCaptureCdnSettings: {
                              locationName: 'frameCaptureCdnSettings',
                              type: 'structure',
                              members: {
                                FrameCaptureS3Settings: {
                                  locationName: 'frameCaptureS3Settings',
                                  type: 'structure',
                                  members: {
                                    CannedAcl: {
                                      locationName: 'cannedAcl'
                                    }
                                  }
                                }
                              }
                            }
                          },
                          required: ['Destination']
                        },
                        HlsGroupSettings: {
                          locationName: 'hlsGroupSettings',
                          type: 'structure',
                          members: {
                            AdMarkers: {
                              locationName: 'adMarkers',
                              type: 'list',
                              member: {}
                            },
                            BaseUrlContent: {
                              locationName: 'baseUrlContent'
                            },
                            BaseUrlContent1: {
                              locationName: 'baseUrlContent1'
                            },
                            BaseUrlManifest: {
                              locationName: 'baseUrlManifest'
                            },
                            BaseUrlManifest1: {
                              locationName: 'baseUrlManifest1'
                            },
                            CaptionLanguageMappings: {
                              locationName: 'captionLanguageMappings',
                              type: 'list',
                              member: {
                                type: 'structure',
                                members: {
                                  CaptionChannel: {
                                    locationName: 'captionChannel',
                                    type: 'integer'
                                  },
                                  LanguageCode: {
                                    locationName: 'languageCode'
                                  },
                                  LanguageDescription: {
                                    locationName: 'languageDescription'
                                  }
                                },
                                required: ['LanguageCode', 'LanguageDescription', 'CaptionChannel']
                              }
                            },
                            CaptionLanguageSetting: {
                              locationName: 'captionLanguageSetting'
                            },
                            ClientCache: {
                              locationName: 'clientCache'
                            },
                            CodecSpecification: {
                              locationName: 'codecSpecification'
                            },
                            ConstantIv: {
                              locationName: 'constantIv'
                            },
                            Destination: {
                              shape: 'S71',
                              locationName: 'destination'
                            },
                            DirectoryStructure: {
                              locationName: 'directoryStructure'
                            },
                            DiscontinuityTags: {
                              locationName: 'discontinuityTags'
                            },
                            EncryptionType: {
                              locationName: 'encryptionType'
                            },
                            HlsCdnSettings: {
                              locationName: 'hlsCdnSettings',
                              type: 'structure',
                              members: {
                                HlsAkamaiSettings: {
                                  locationName: 'hlsAkamaiSettings',
                                  type: 'structure',
                                  members: {
                                    ConnectionRetryInterval: {
                                      locationName: 'connectionRetryInterval',
                                      type: 'integer'
                                    },
                                    FilecacheDuration: {
                                      locationName: 'filecacheDuration',
                                      type: 'integer'
                                    },
                                    HttpTransferMode: {
                                      locationName: 'httpTransferMode'
                                    },
                                    NumRetries: {
                                      locationName: 'numRetries',
                                      type: 'integer'
                                    },
                                    RestartDelay: {
                                      locationName: 'restartDelay',
                                      type: 'integer'
                                    },
                                    Salt: {
                                      locationName: 'salt'
                                    },
                                    Token: {
                                      locationName: 'token'
                                    }
                                  }
                                },
                                HlsBasicPutSettings: {
                                  locationName: 'hlsBasicPutSettings',
                                  type: 'structure',
                                  members: {
                                    ConnectionRetryInterval: {
                                      locationName: 'connectionRetryInterval',
                                      type: 'integer'
                                    },
                                    FilecacheDuration: {
                                      locationName: 'filecacheDuration',
                                      type: 'integer'
                                    },
                                    NumRetries: {
                                      locationName: 'numRetries',
                                      type: 'integer'
                                    },
                                    RestartDelay: {
                                      locationName: 'restartDelay',
                                      type: 'integer'
                                    }
                                  }
                                },
                                HlsMediaStoreSettings: {
                                  locationName: 'hlsMediaStoreSettings',
                                  type: 'structure',
                                  members: {
                                    ConnectionRetryInterval: {
                                      locationName: 'connectionRetryInterval',
                                      type: 'integer'
                                    },
                                    FilecacheDuration: {
                                      locationName: 'filecacheDuration',
                                      type: 'integer'
                                    },
                                    MediaStoreStorageClass: {
                                      locationName: 'mediaStoreStorageClass'
                                    },
                                    NumRetries: {
                                      locationName: 'numRetries',
                                      type: 'integer'
                                    },
                                    RestartDelay: {
                                      locationName: 'restartDelay',
                                      type: 'integer'
                                    }
                                  }
                                },
                                HlsS3Settings: {
                                  locationName: 'hlsS3Settings',
                                  type: 'structure',
                                  members: {
                                    CannedAcl: {
                                      locationName: 'cannedAcl'
                                    }
                                  }
                                },
                                HlsWebdavSettings: {
                                  locationName: 'hlsWebdavSettings',
                                  type: 'structure',
                                  members: {
                                    ConnectionRetryInterval: {
                                      locationName: 'connectionRetryInterval',
                                      type: 'integer'
                                    },
                                    FilecacheDuration: {
                                      locationName: 'filecacheDuration',
                                      type: 'integer'
                                    },
                                    HttpTransferMode: {
                                      locationName: 'httpTransferMode'
                                    },
                                    NumRetries: {
                                      locationName: 'numRetries',
                                      type: 'integer'
                                    },
                                    RestartDelay: {
                                      locationName: 'restartDelay',
                                      type: 'integer'
                                    }
                                  }
                                }
                              }
                            },
                            HlsId3SegmentTagging: {
                              locationName: 'hlsId3SegmentTagging'
                            },
                            IFrameOnlyPlaylists: {
                              locationName: 'iFrameOnlyPlaylists'
                            },
                            IncompleteSegmentBehavior: {
                              locationName: 'incompleteSegmentBehavior'
                            },
                            IndexNSegments: {
                              locationName: 'indexNSegments',
                              type: 'integer'
                            },
                            InputLossAction: {
                              locationName: 'inputLossAction'
                            },
                            IvInManifest: {
                              locationName: 'ivInManifest'
                            },
                            IvSource: {
                              locationName: 'ivSource'
                            },
                            KeepSegments: {
                              locationName: 'keepSegments',
                              type: 'integer'
                            },
                            KeyFormat: {
                              locationName: 'keyFormat'
                            },
                            KeyFormatVersions: {
                              locationName: 'keyFormatVersions'
                            },
                            KeyProviderSettings: {
                              locationName: 'keyProviderSettings',
                              type: 'structure',
                              members: {
                                StaticKeySettings: {
                                  locationName: 'staticKeySettings',
                                  type: 'structure',
                                  members: {
                                    KeyProviderServer: {
                                      shape: 'S1m',
                                      locationName: 'keyProviderServer'
                                    },
                                    StaticKeyValue: {
                                      locationName: 'staticKeyValue'
                                    }
                                  },
                                  required: ['StaticKeyValue']
                                }
                              }
                            },
                            ManifestCompression: {
                              locationName: 'manifestCompression'
                            },
                            ManifestDurationFormat: {
                              locationName: 'manifestDurationFormat'
                            },
                            MinSegmentLength: {
                              locationName: 'minSegmentLength',
                              type: 'integer'
                            },
                            Mode: {
                              locationName: 'mode'
                            },
                            OutputSelection: {
                              locationName: 'outputSelection'
                            },
                            ProgramDateTime: {
                              locationName: 'programDateTime'
                            },
                            ProgramDateTimeClock: {
                              locationName: 'programDateTimeClock'
                            },
                            ProgramDateTimePeriod: {
                              locationName: 'programDateTimePeriod',
                              type: 'integer'
                            },
                            RedundantManifest: {
                              locationName: 'redundantManifest'
                            },
                            SegmentLength: {
                              locationName: 'segmentLength',
                              type: 'integer'
                            },
                            SegmentationMode: {
                              locationName: 'segmentationMode'
                            },
                            SegmentsPerSubdirectory: {
                              locationName: 'segmentsPerSubdirectory',
                              type: 'integer'
                            },
                            StreamInfResolution: {
                              locationName: 'streamInfResolution'
                            },
                            TimedMetadataId3Frame: {
                              locationName: 'timedMetadataId3Frame'
                            },
                            TimedMetadataId3Period: {
                              locationName: 'timedMetadataId3Period',
                              type: 'integer'
                            },
                            TimestampDeltaMilliseconds: {
                              locationName: 'timestampDeltaMilliseconds',
                              type: 'integer'
                            },
                            TsFileMode: {
                              locationName: 'tsFileMode'
                            }
                          },
                          required: ['Destination']
                        },
                        MediaPackageGroupSettings: {
                          locationName: 'mediaPackageGroupSettings',
                          type: 'structure',
                          members: {
                            Destination: {
                              shape: 'S71',
                              locationName: 'destination'
                            }
                          },
                          required: ['Destination']
                        },
                        MsSmoothGroupSettings: {
                          locationName: 'msSmoothGroupSettings',
                          type: 'structure',
                          members: {
                            AcquisitionPointId: {
                              locationName: 'acquisitionPointId'
                            },
                            AudioOnlyTimecodeControl: {
                              locationName: 'audioOnlyTimecodeControl'
                            },
                            CertificateMode: {
                              locationName: 'certificateMode'
                            },
                            ConnectionRetryInterval: {
                              locationName: 'connectionRetryInterval',
                              type: 'integer'
                            },
                            Destination: {
                              shape: 'S71',
                              locationName: 'destination'
                            },
                            EventId: {
                              locationName: 'eventId'
                            },
                            EventIdMode: {
                              locationName: 'eventIdMode'
                            },
                            EventStopBehavior: {
                              locationName: 'eventStopBehavior'
                            },
                            FilecacheDuration: {
                              locationName: 'filecacheDuration',
                              type: 'integer'
                            },
                            FragmentLength: {
                              locationName: 'fragmentLength',
                              type: 'integer'
                            },
                            InputLossAction: {
                              locationName: 'inputLossAction'
                            },
                            NumRetries: {
                              locationName: 'numRetries',
                              type: 'integer'
                            },
                            RestartDelay: {
                              locationName: 'restartDelay',
                              type: 'integer'
                            },
                            SegmentationMode: {
                              locationName: 'segmentationMode'
                            },
                            SendDelayMs: {
                              locationName: 'sendDelayMs',
                              type: 'integer'
                            },
                            SparseTrackType: {
                              locationName: 'sparseTrackType'
                            },
                            StreamManifestBehavior: {
                              locationName: 'streamManifestBehavior'
                            },
                            TimestampOffset: {
                              locationName: 'timestampOffset'
                            },
                            TimestampOffsetMode: {
                              locationName: 'timestampOffsetMode'
                            }
                          },
                          required: ['Destination']
                        },
                        MultiplexGroupSettings: {
                          locationName: 'multiplexGroupSettings',
                          type: 'structure',
                          members: {}
                        },
                        RtmpGroupSettings: {
                          locationName: 'rtmpGroupSettings',
                          type: 'structure',
                          members: {
                            AdMarkers: {
                              locationName: 'adMarkers',
                              type: 'list',
                              member: {}
                            },
                            AuthenticationScheme: {
                              locationName: 'authenticationScheme'
                            },
                            CacheFullBehavior: {
                              locationName: 'cacheFullBehavior'
                            },
                            CacheLength: {
                              locationName: 'cacheLength',
                              type: 'integer'
                            },
                            CaptionData: {
                              locationName: 'captionData'
                            },
                            InputLossAction: {
                              locationName: 'inputLossAction'
                            },
                            RestartDelay: {
                              locationName: 'restartDelay',
                              type: 'integer'
                            },
                            IncludeFillerNalUnits: {
                              locationName: 'includeFillerNalUnits'
                            }
                          }
                        },
                        UdpGroupSettings: {
                          locationName: 'udpGroupSettings',
                          type: 'structure',
                          members: {
                            InputLossAction: {
                              locationName: 'inputLossAction'
                            },
                            TimedMetadataId3Frame: {
                              locationName: 'timedMetadataId3Frame'
                            },
                            TimedMetadataId3Period: {
                              locationName: 'timedMetadataId3Period',
                              type: 'integer'
                            }
                          }
                        },
                        CmafIngestGroupSettings: {
                          locationName: 'cmafIngestGroupSettings',
                          type: 'structure',
                          members: {
                            Destination: {
                              shape: 'S71',
                              locationName: 'destination'
                            },
                            NielsenId3Behavior: {
                              locationName: 'nielsenId3Behavior'
                            },
                            Scte35Type: {
                              locationName: 'scte35Type'
                            },
                            SegmentLength: {
                              locationName: 'segmentLength',
                              type: 'integer'
                            },
                            SegmentLengthUnits: {
                              locationName: 'segmentLengthUnits'
                            },
                            SendDelayMs: {
                              locationName: 'sendDelayMs',
                              type: 'integer'
                            }
                          },
                          required: ['Destination']
                        }
                      }
                    },
                    Outputs: {
                      locationName: 'outputs',
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          AudioDescriptionNames: {
                            shape: 'S5',
                            locationName: 'audioDescriptionNames'
                          },
                          CaptionDescriptionNames: {
                            shape: 'S5',
                            locationName: 'captionDescriptionNames'
                          },
                          OutputName: {
                            locationName: 'outputName'
                          },
                          OutputSettings: {
                            locationName: 'outputSettings',
                            type: 'structure',
                            members: {
                              ArchiveOutputSettings: {
                                locationName: 'archiveOutputSettings',
                                type: 'structure',
                                members: {
                                  ContainerSettings: {
                                    locationName: 'containerSettings',
                                    type: 'structure',
                                    members: {
                                      M2tsSettings: {
                                        shape: 'S9e',
                                        locationName: 'm2tsSettings'
                                      },
                                      RawSettings: {
                                        locationName: 'rawSettings',
                                        type: 'structure',
                                        members: {}
                                      }
                                    }
                                  },
                                  Extension: {
                                    locationName: 'extension'
                                  },
                                  NameModifier: {
                                    locationName: 'nameModifier'
                                  }
                                },
                                required: ['ContainerSettings']
                              },
                              FrameCaptureOutputSettings: {
                                locationName: 'frameCaptureOutputSettings',
                                type: 'structure',
                                members: {
                                  NameModifier: {
                                    locationName: 'nameModifier'
                                  }
                                }
                              },
                              HlsOutputSettings: {
                                locationName: 'hlsOutputSettings',
                                type: 'structure',
                                members: {
                                  H265PackagingType: {
                                    locationName: 'h265PackagingType'
                                  },
                                  HlsSettings: {
                                    locationName: 'hlsSettings',
                                    type: 'structure',
                                    members: {
                                      AudioOnlyHlsSettings: {
                                        locationName: 'audioOnlyHlsSettings',
                                        type: 'structure',
                                        members: {
                                          AudioGroupId: {
                                            locationName: 'audioGroupId'
                                          },
                                          AudioOnlyImage: {
                                            shape: 'S1m',
                                            locationName: 'audioOnlyImage'
                                          },
                                          AudioTrackType: {
                                            locationName: 'audioTrackType'
                                          },
                                          SegmentType: {
                                            locationName: 'segmentType'
                                          }
                                        }
                                      },
                                      Fmp4HlsSettings: {
                                        locationName: 'fmp4HlsSettings',
                                        type: 'structure',
                                        members: {
                                          AudioRenditionSets: {
                                            locationName: 'audioRenditionSets'
                                          },
                                          NielsenId3Behavior: {
                                            locationName: 'nielsenId3Behavior'
                                          },
                                          TimedMetadataBehavior: {
                                            locationName: 'timedMetadataBehavior'
                                          }
                                        }
                                      },
                                      FrameCaptureHlsSettings: {
                                        locationName: 'frameCaptureHlsSettings',
                                        type: 'structure',
                                        members: {}
                                      },
                                      StandardHlsSettings: {
                                        locationName: 'standardHlsSettings',
                                        type: 'structure',
                                        members: {
                                          AudioRenditionSets: {
                                            locationName: 'audioRenditionSets'
                                          },
                                          M3u8Settings: {
                                            locationName: 'm3u8Settings',
                                            type: 'structure',
                                            members: {
                                              AudioFramesPerPes: {
                                                locationName: 'audioFramesPerPes',
                                                type: 'integer'
                                              },
                                              AudioPids: {
                                                locationName: 'audioPids'
                                              },
                                              EcmPid: {
                                                locationName: 'ecmPid'
                                              },
                                              NielsenId3Behavior: {
                                                locationName: 'nielsenId3Behavior'
                                              },
                                              PatInterval: {
                                                locationName: 'patInterval',
                                                type: 'integer'
                                              },
                                              PcrControl: {
                                                locationName: 'pcrControl'
                                              },
                                              PcrPeriod: {
                                                locationName: 'pcrPeriod',
                                                type: 'integer'
                                              },
                                              PcrPid: {
                                                locationName: 'pcrPid'
                                              },
                                              PmtInterval: {
                                                locationName: 'pmtInterval',
                                                type: 'integer'
                                              },
                                              PmtPid: {
                                                locationName: 'pmtPid'
                                              },
                                              ProgramNum: {
                                                locationName: 'programNum',
                                                type: 'integer'
                                              },
                                              Scte35Behavior: {
                                                locationName: 'scte35Behavior'
                                              },
                                              Scte35Pid: {
                                                locationName: 'scte35Pid'
                                              },
                                              TimedMetadataBehavior: {
                                                locationName: 'timedMetadataBehavior'
                                              },
                                              TimedMetadataPid: {
                                                locationName: 'timedMetadataPid'
                                              },
                                              TransportStreamId: {
                                                locationName: 'transportStreamId',
                                                type: 'integer'
                                              },
                                              VideoPid: {
                                                locationName: 'videoPid'
                                              },
                                              KlvBehavior: {
                                                locationName: 'klvBehavior'
                                              },
                                              KlvDataPids: {
                                                locationName: 'klvDataPids'
                                              }
                                            }
                                          }
                                        },
                                        required: ['M3u8Settings']
                                      }
                                    }
                                  },
                                  NameModifier: {
                                    locationName: 'nameModifier'
                                  },
                                  SegmentModifier: {
                                    locationName: 'segmentModifier'
                                  }
                                },
                                required: ['HlsSettings']
                              },
                              MediaPackageOutputSettings: {
                                locationName: 'mediaPackageOutputSettings',
                                type: 'structure',
                                members: {}
                              },
                              MsSmoothOutputSettings: {
                                locationName: 'msSmoothOutputSettings',
                                type: 'structure',
                                members: {
                                  H265PackagingType: {
                                    locationName: 'h265PackagingType'
                                  },
                                  NameModifier: {
                                    locationName: 'nameModifier'
                                  }
                                }
                              },
                              MultiplexOutputSettings: {
                                locationName: 'multiplexOutputSettings',
                                type: 'structure',
                                members: {
                                  Destination: {
                                    shape: 'S71',
                                    locationName: 'destination'
                                  }
                                },
                                required: ['Destination']
                              },
                              RtmpOutputSettings: {
                                locationName: 'rtmpOutputSettings',
                                type: 'structure',
                                members: {
                                  CertificateMode: {
                                    locationName: 'certificateMode'
                                  },
                                  ConnectionRetryInterval: {
                                    locationName: 'connectionRetryInterval',
                                    type: 'integer'
                                  },
                                  Destination: {
                                    shape: 'S71',
                                    locationName: 'destination'
                                  },
                                  NumRetries: {
                                    locationName: 'numRetries',
                                    type: 'integer'
                                  }
                                },
                                required: ['Destination']
                              },
                              UdpOutputSettings: {
                                locationName: 'udpOutputSettings',
                                type: 'structure',
                                members: {
                                  BufferMsec: {
                                    locationName: 'bufferMsec',
                                    type: 'integer'
                                  },
                                  ContainerSettings: {
                                    locationName: 'containerSettings',
                                    type: 'structure',
                                    members: {
                                      M2tsSettings: {
                                        shape: 'S9e',
                                        locationName: 'm2tsSettings'
                                      }
                                    }
                                  },
                                  Destination: {
                                    shape: 'S71',
                                    locationName: 'destination'
                                  },
                                  FecOutputSettings: {
                                    locationName: 'fecOutputSettings',
                                    type: 'structure',
                                    members: {
                                      ColumnDepth: {
                                        locationName: 'columnDepth',
                                        type: 'integer'
                                      },
                                      IncludeFec: {
                                        locationName: 'includeFec'
                                      },
                                      RowLength: {
                                        locationName: 'rowLength',
                                        type: 'integer'
                                      }
                                    }
                                  }
                                },
                                required: ['Destination', 'ContainerSettings']
                              },
                              CmafIngestOutputSettings: {
                                locationName: 'cmafIngestOutputSettings',
                                type: 'structure',
                                members: {
                                  NameModifier: {
                                    locationName: 'nameModifier'
                                  }
                                }
                              }
                            }
                          },
                          VideoDescriptionName: {
                            locationName: 'videoDescriptionName'
                          }
                        },
                        required: ['OutputSettings']
                      }
                    }
                  },
                  required: ['Outputs', 'OutputGroupSettings']
                }
              },
              TimecodeConfig: {
                locationName: 'timecodeConfig',
                type: 'structure',
                members: {
                  Source: {
                    locationName: 'source'
                  },
                  SyncThreshold: {
                    locationName: 'syncThreshold',
                    type: 'integer'
                  }
                },
                required: ['Source']
              },
              VideoDescriptions: {
                locationName: 'videoDescriptions',
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    CodecSettings: {
                      locationName: 'codecSettings',
                      type: 'structure',
                      members: {
                        FrameCaptureSettings: {
                          locationName: 'frameCaptureSettings',
                          type: 'structure',
                          members: {
                            CaptureInterval: {
                              locationName: 'captureInterval',
                              type: 'integer'
                            },
                            CaptureIntervalUnits: {
                              locationName: 'captureIntervalUnits'
                            },
                            TimecodeBurninSettings: {
                              shape: 'Sbi',
                              locationName: 'timecodeBurninSettings'
                            }
                          }
                        },
                        H264Settings: {
                          locationName: 'h264Settings',
                          type: 'structure',
                          members: {
                            AdaptiveQuantization: {
                              locationName: 'adaptiveQuantization'
                            },
                            AfdSignaling: {
                              locationName: 'afdSignaling'
                            },
                            Bitrate: {
                              locationName: 'bitrate',
                              type: 'integer'
                            },
                            BufFillPct: {
                              locationName: 'bufFillPct',
                              type: 'integer'
                            },
                            BufSize: {
                              locationName: 'bufSize',
                              type: 'integer'
                            },
                            ColorMetadata: {
                              locationName: 'colorMetadata'
                            },
                            ColorSpaceSettings: {
                              locationName: 'colorSpaceSettings',
                              type: 'structure',
                              members: {
                                ColorSpacePassthroughSettings: {
                                  shape: 'Sbr',
                                  locationName: 'colorSpacePassthroughSettings'
                                },
                                Rec601Settings: {
                                  shape: 'Sbs',
                                  locationName: 'rec601Settings'
                                },
                                Rec709Settings: {
                                  shape: 'Sbt',
                                  locationName: 'rec709Settings'
                                }
                              }
                            },
                            EntropyEncoding: {
                              locationName: 'entropyEncoding'
                            },
                            FilterSettings: {
                              locationName: 'filterSettings',
                              type: 'structure',
                              members: {
                                TemporalFilterSettings: {
                                  shape: 'Sbw',
                                  locationName: 'temporalFilterSettings'
                                }
                              }
                            },
                            FixedAfd: {
                              locationName: 'fixedAfd'
                            },
                            FlickerAq: {
                              locationName: 'flickerAq'
                            },
                            ForceFieldPictures: {
                              locationName: 'forceFieldPictures'
                            },
                            FramerateControl: {
                              locationName: 'framerateControl'
                            },
                            FramerateDenominator: {
                              locationName: 'framerateDenominator',
                              type: 'integer'
                            },
                            FramerateNumerator: {
                              locationName: 'framerateNumerator',
                              type: 'integer'
                            },
                            GopBReference: {
                              locationName: 'gopBReference'
                            },
                            GopClosedCadence: {
                              locationName: 'gopClosedCadence',
                              type: 'integer'
                            },
                            GopNumBFrames: {
                              locationName: 'gopNumBFrames',
                              type: 'integer'
                            },
                            GopSize: {
                              locationName: 'gopSize',
                              type: 'double'
                            },
                            GopSizeUnits: {
                              locationName: 'gopSizeUnits'
                            },
                            Level: {
                              locationName: 'level'
                            },
                            LookAheadRateControl: {
                              locationName: 'lookAheadRateControl'
                            },
                            MaxBitrate: {
                              locationName: 'maxBitrate',
                              type: 'integer'
                            },
                            MinIInterval: {
                              locationName: 'minIInterval',
                              type: 'integer'
                            },
                            NumRefFrames: {
                              locationName: 'numRefFrames',
                              type: 'integer'
                            },
                            ParControl: {
                              locationName: 'parControl'
                            },
                            ParDenominator: {
                              locationName: 'parDenominator',
                              type: 'integer'
                            },
                            ParNumerator: {
                              locationName: 'parNumerator',
                              type: 'integer'
                            },
                            Profile: {
                              locationName: 'profile'
                            },
                            QualityLevel: {
                              locationName: 'qualityLevel'
                            },
                            QvbrQualityLevel: {
                              locationName: 'qvbrQualityLevel',
                              type: 'integer'
                            },
                            RateControlMode: {
                              locationName: 'rateControlMode'
                            },
                            ScanType: {
                              locationName: 'scanType'
                            },
                            SceneChangeDetect: {
                              locationName: 'sceneChangeDetect'
                            },
                            Slices: {
                              locationName: 'slices',
                              type: 'integer'
                            },
                            Softness: {
                              locationName: 'softness',
                              type: 'integer'
                            },
                            SpatialAq: {
                              locationName: 'spatialAq'
                            },
                            SubgopLength: {
                              locationName: 'subgopLength'
                            },
                            Syntax: {
                              locationName: 'syntax'
                            },
                            TemporalAq: {
                              locationName: 'temporalAq'
                            },
                            TimecodeInsertion: {
                              locationName: 'timecodeInsertion'
                            },
                            TimecodeBurninSettings: {
                              shape: 'Sbi',
                              locationName: 'timecodeBurninSettings'
                            }
                          }
                        },
                        H265Settings: {
                          locationName: 'h265Settings',
                          type: 'structure',
                          members: {
                            AdaptiveQuantization: {
                              locationName: 'adaptiveQuantization'
                            },
                            AfdSignaling: {
                              locationName: 'afdSignaling'
                            },
                            AlternativeTransferFunction: {
                              locationName: 'alternativeTransferFunction'
                            },
                            Bitrate: {
                              locationName: 'bitrate',
                              type: 'integer'
                            },
                            BufSize: {
                              locationName: 'bufSize',
                              type: 'integer'
                            },
                            ColorMetadata: {
                              locationName: 'colorMetadata'
                            },
                            ColorSpaceSettings: {
                              locationName: 'colorSpaceSettings',
                              type: 'structure',
                              members: {
                                ColorSpacePassthroughSettings: {
                                  shape: 'Sbr',
                                  locationName: 'colorSpacePassthroughSettings'
                                },
                                DolbyVision81Settings: {
                                  locationName: 'dolbyVision81Settings',
                                  type: 'structure',
                                  members: {}
                                },
                                Hdr10Settings: {
                                  shape: 'Scv',
                                  locationName: 'hdr10Settings'
                                },
                                Rec601Settings: {
                                  shape: 'Sbs',
                                  locationName: 'rec601Settings'
                                },
                                Rec709Settings: {
                                  shape: 'Sbt',
                                  locationName: 'rec709Settings'
                                }
                              }
                            },
                            FilterSettings: {
                              locationName: 'filterSettings',
                              type: 'structure',
                              members: {
                                TemporalFilterSettings: {
                                  shape: 'Sbw',
                                  locationName: 'temporalFilterSettings'
                                }
                              }
                            },
                            FixedAfd: {
                              locationName: 'fixedAfd'
                            },
                            FlickerAq: {
                              locationName: 'flickerAq'
                            },
                            FramerateDenominator: {
                              locationName: 'framerateDenominator',
                              type: 'integer'
                            },
                            FramerateNumerator: {
                              locationName: 'framerateNumerator',
                              type: 'integer'
                            },
                            GopClosedCadence: {
                              locationName: 'gopClosedCadence',
                              type: 'integer'
                            },
                            GopSize: {
                              locationName: 'gopSize',
                              type: 'double'
                            },
                            GopSizeUnits: {
                              locationName: 'gopSizeUnits'
                            },
                            Level: {
                              locationName: 'level'
                            },
                            LookAheadRateControl: {
                              locationName: 'lookAheadRateControl'
                            },
                            MaxBitrate: {
                              locationName: 'maxBitrate',
                              type: 'integer'
                            },
                            MinIInterval: {
                              locationName: 'minIInterval',
                              type: 'integer'
                            },
                            ParDenominator: {
                              locationName: 'parDenominator',
                              type: 'integer'
                            },
                            ParNumerator: {
                              locationName: 'parNumerator',
                              type: 'integer'
                            },
                            Profile: {
                              locationName: 'profile'
                            },
                            QvbrQualityLevel: {
                              locationName: 'qvbrQualityLevel',
                              type: 'integer'
                            },
                            RateControlMode: {
                              locationName: 'rateControlMode'
                            },
                            ScanType: {
                              locationName: 'scanType'
                            },
                            SceneChangeDetect: {
                              locationName: 'sceneChangeDetect'
                            },
                            Slices: {
                              locationName: 'slices',
                              type: 'integer'
                            },
                            Tier: {
                              locationName: 'tier'
                            },
                            TimecodeInsertion: {
                              locationName: 'timecodeInsertion'
                            },
                            TimecodeBurninSettings: {
                              shape: 'Sbi',
                              locationName: 'timecodeBurninSettings'
                            },
                            MvOverPictureBoundaries: {
                              locationName: 'mvOverPictureBoundaries'
                            },
                            MvTemporalPredictor: {
                              locationName: 'mvTemporalPredictor'
                            },
                            TileHeight: {
                              locationName: 'tileHeight',
                              type: 'integer'
                            },
                            TilePadding: {
                              locationName: 'tilePadding'
                            },
                            TileWidth: {
                              locationName: 'tileWidth',
                              type: 'integer'
                            },
                            TreeblockSize: {
                              locationName: 'treeblockSize'
                            }
                          },
                          required: ['FramerateNumerator', 'FramerateDenominator']
                        },
                        Mpeg2Settings: {
                          locationName: 'mpeg2Settings',
                          type: 'structure',
                          members: {
                            AdaptiveQuantization: {
                              locationName: 'adaptiveQuantization'
                            },
                            AfdSignaling: {
                              locationName: 'afdSignaling'
                            },
                            ColorMetadata: {
                              locationName: 'colorMetadata'
                            },
                            ColorSpace: {
                              locationName: 'colorSpace'
                            },
                            DisplayAspectRatio: {
                              locationName: 'displayAspectRatio'
                            },
                            FilterSettings: {
                              locationName: 'filterSettings',
                              type: 'structure',
                              members: {
                                TemporalFilterSettings: {
                                  shape: 'Sbw',
                                  locationName: 'temporalFilterSettings'
                                }
                              }
                            },
                            FixedAfd: {
                              locationName: 'fixedAfd'
                            },
                            FramerateDenominator: {
                              locationName: 'framerateDenominator',
                              type: 'integer'
                            },
                            FramerateNumerator: {
                              locationName: 'framerateNumerator',
                              type: 'integer'
                            },
                            GopClosedCadence: {
                              locationName: 'gopClosedCadence',
                              type: 'integer'
                            },
                            GopNumBFrames: {
                              locationName: 'gopNumBFrames',
                              type: 'integer'
                            },
                            GopSize: {
                              locationName: 'gopSize',
                              type: 'double'
                            },
                            GopSizeUnits: {
                              locationName: 'gopSizeUnits'
                            },
                            ScanType: {
                              locationName: 'scanType'
                            },
                            SubgopLength: {
                              locationName: 'subgopLength'
                            },
                            TimecodeInsertion: {
                              locationName: 'timecodeInsertion'
                            },
                            TimecodeBurninSettings: {
                              shape: 'Sbi',
                              locationName: 'timecodeBurninSettings'
                            }
                          },
                          required: ['FramerateNumerator', 'FramerateDenominator']
                        }
                      }
                    },
                    Height: {
                      locationName: 'height',
                      type: 'integer'
                    },
                    Name: {
                      locationName: 'name'
                    },
                    RespondToAfd: {
                      locationName: 'respondToAfd'
                    },
                    ScalingBehavior: {
                      locationName: 'scalingBehavior'
                    },
                    Sharpness: {
                      locationName: 'sharpness',
                      type: 'integer'
                    },
                    Width: {
                      locationName: 'width',
                      type: 'integer'
                    }
                  },
                  required: ['Name']
                }
              },
              ThumbnailConfiguration: {
                locationName: 'thumbnailConfiguration',
                type: 'structure',
                members: {
                  State: {
                    locationName: 'state'
                  }
                },
                required: ['State']
              },
              ColorCorrectionSettings: {
                locationName: 'colorCorrectionSettings',
                type: 'structure',
                members: {
                  GlobalColorCorrections: {
                    locationName: 'globalColorCorrections',
                    type: 'list',
                    member: {
                      type: 'structure',
                      members: {
                        InputColorSpace: {
                          locationName: 'inputColorSpace'
                        },
                        OutputColorSpace: {
                          locationName: 'outputColorSpace'
                        },
                        Uri: {
                          locationName: 'uri'
                        }
                      },
                      required: ['OutputColorSpace', 'InputColorSpace', 'Uri']
                    }
                  }
                },
                required: ['GlobalColorCorrections']
              }
            },
            required: ['VideoDescriptions', 'AudioDescriptions', 'OutputGroups', 'TimecodeConfig']
          },
          S71: {
            type: 'structure',
            members: {
              DestinationRefId: {
                locationName: 'destinationRefId'
              }
            }
          },
          S9e: {
            type: 'structure',
            members: {
              AbsentInputAudioBehavior: {
                locationName: 'absentInputAudioBehavior'
              },
              Arib: {
                locationName: 'arib'
              },
              AribCaptionsPid: {
                locationName: 'aribCaptionsPid'
              },
              AribCaptionsPidControl: {
                locationName: 'aribCaptionsPidControl'
              },
              AudioBufferModel: {
                locationName: 'audioBufferModel'
              },
              AudioFramesPerPes: {
                locationName: 'audioFramesPerPes',
                type: 'integer'
              },
              AudioPids: {
                locationName: 'audioPids'
              },
              AudioStreamType: {
                locationName: 'audioStreamType'
              },
              Bitrate: {
                locationName: 'bitrate',
                type: 'integer'
              },
              BufferModel: {
                locationName: 'bufferModel'
              },
              CcDescriptor: {
                locationName: 'ccDescriptor'
              },
              DvbNitSettings: {
                locationName: 'dvbNitSettings',
                type: 'structure',
                members: {
                  NetworkId: {
                    locationName: 'networkId',
                    type: 'integer'
                  },
                  NetworkName: {
                    locationName: 'networkName'
                  },
                  RepInterval: {
                    locationName: 'repInterval',
                    type: 'integer'
                  }
                },
                required: ['NetworkName', 'NetworkId']
              },
              DvbSdtSettings: {
                locationName: 'dvbSdtSettings',
                type: 'structure',
                members: {
                  OutputSdt: {
                    locationName: 'outputSdt'
                  },
                  RepInterval: {
                    locationName: 'repInterval',
                    type: 'integer'
                  },
                  ServiceName: {
                    locationName: 'serviceName'
                  },
                  ServiceProviderName: {
                    locationName: 'serviceProviderName'
                  }
                }
              },
              DvbSubPids: {
                locationName: 'dvbSubPids'
              },
              DvbTdtSettings: {
                locationName: 'dvbTdtSettings',
                type: 'structure',
                members: {
                  RepInterval: {
                    locationName: 'repInterval',
                    type: 'integer'
                  }
                }
              },
              DvbTeletextPid: {
                locationName: 'dvbTeletextPid'
              },
              Ebif: {
                locationName: 'ebif'
              },
              EbpAudioInterval: {
                locationName: 'ebpAudioInterval'
              },
              EbpLookaheadMs: {
                locationName: 'ebpLookaheadMs',
                type: 'integer'
              },
              EbpPlacement: {
                locationName: 'ebpPlacement'
              },
              EcmPid: {
                locationName: 'ecmPid'
              },
              EsRateInPes: {
                locationName: 'esRateInPes'
              },
              EtvPlatformPid: {
                locationName: 'etvPlatformPid'
              },
              EtvSignalPid: {
                locationName: 'etvSignalPid'
              },
              FragmentTime: {
                locationName: 'fragmentTime',
                type: 'double'
              },
              Klv: {
                locationName: 'klv'
              },
              KlvDataPids: {
                locationName: 'klvDataPids'
              },
              NielsenId3Behavior: {
                locationName: 'nielsenId3Behavior'
              },
              NullPacketBitrate: {
                locationName: 'nullPacketBitrate',
                type: 'double'
              },
              PatInterval: {
                locationName: 'patInterval',
                type: 'integer'
              },
              PcrControl: {
                locationName: 'pcrControl'
              },
              PcrPeriod: {
                locationName: 'pcrPeriod',
                type: 'integer'
              },
              PcrPid: {
                locationName: 'pcrPid'
              },
              PmtInterval: {
                locationName: 'pmtInterval',
                type: 'integer'
              },
              PmtPid: {
                locationName: 'pmtPid'
              },
              ProgramNum: {
                locationName: 'programNum',
                type: 'integer'
              },
              RateMode: {
                locationName: 'rateMode'
              },
              Scte27Pids: {
                locationName: 'scte27Pids'
              },
              Scte35Control: {
                locationName: 'scte35Control'
              },
              Scte35Pid: {
                locationName: 'scte35Pid'
              },
              SegmentationMarkers: {
                locationName: 'segmentationMarkers'
              },
              SegmentationStyle: {
                locationName: 'segmentationStyle'
              },
              SegmentationTime: {
                locationName: 'segmentationTime',
                type: 'double'
              },
              TimedMetadataBehavior: {
                locationName: 'timedMetadataBehavior'
              },
              TimedMetadataPid: {
                locationName: 'timedMetadataPid'
              },
              TransportStreamId: {
                locationName: 'transportStreamId',
                type: 'integer'
              },
              VideoPid: {
                locationName: 'videoPid'
              },
              Scte35PrerollPullupMilliseconds: {
                locationName: 'scte35PrerollPullupMilliseconds',
                type: 'double'
              }
            }
          },
          Sbi: {
            type: 'structure',
            members: {
              FontSize: {
                locationName: 'fontSize'
              },
              Position: {
                locationName: 'position'
              },
              Prefix: {
                locationName: 'prefix'
              }
            },
            required: ['Position', 'FontSize']
          },
          Sbr: {
            type: 'structure',
            members: {}
          },
          Sbs: {
            type: 'structure',
            members: {}
          },
          Sbt: {
            type: 'structure',
            members: {}
          },
          Sbw: {
            type: 'structure',
            members: {
              PostFilterSharpening: {
                locationName: 'postFilterSharpening'
              },
              Strength: {
                locationName: 'strength'
              }
            }
          },
          Scv: {
            type: 'structure',
            members: {
              MaxCll: {
                locationName: 'maxCll',
                type: 'integer'
              },
              MaxFall: {
                locationName: 'maxFall',
                type: 'integer'
              }
            }
          },
          Sdx: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                AutomaticInputFailoverSettings: {
                  locationName: 'automaticInputFailoverSettings',
                  type: 'structure',
                  members: {
                    ErrorClearTimeMsec: {
                      locationName: 'errorClearTimeMsec',
                      type: 'integer'
                    },
                    FailoverConditions: {
                      locationName: 'failoverConditions',
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          FailoverConditionSettings: {
                            locationName: 'failoverConditionSettings',
                            type: 'structure',
                            members: {
                              AudioSilenceSettings: {
                                locationName: 'audioSilenceSettings',
                                type: 'structure',
                                members: {
                                  AudioSelectorName: {
                                    locationName: 'audioSelectorName'
                                  },
                                  AudioSilenceThresholdMsec: {
                                    locationName: 'audioSilenceThresholdMsec',
                                    type: 'integer'
                                  }
                                },
                                required: ['AudioSelectorName']
                              },
                              InputLossSettings: {
                                locationName: 'inputLossSettings',
                                type: 'structure',
                                members: {
                                  InputLossThresholdMsec: {
                                    locationName: 'inputLossThresholdMsec',
                                    type: 'integer'
                                  }
                                }
                              },
                              VideoBlackSettings: {
                                locationName: 'videoBlackSettings',
                                type: 'structure',
                                members: {
                                  BlackDetectThreshold: {
                                    locationName: 'blackDetectThreshold',
                                    type: 'double'
                                  },
                                  VideoBlackThresholdMsec: {
                                    locationName: 'videoBlackThresholdMsec',
                                    type: 'integer'
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    },
                    InputPreference: {
                      locationName: 'inputPreference'
                    },
                    SecondaryInputId: {
                      locationName: 'secondaryInputId'
                    }
                  },
                  required: ['SecondaryInputId']
                },
                InputAttachmentName: {
                  locationName: 'inputAttachmentName'
                },
                InputId: {
                  locationName: 'inputId'
                },
                InputSettings: {
                  locationName: 'inputSettings',
                  type: 'structure',
                  members: {
                    AudioSelectors: {
                      locationName: 'audioSelectors',
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          Name: {
                            locationName: 'name'
                          },
                          SelectorSettings: {
                            locationName: 'selectorSettings',
                            type: 'structure',
                            members: {
                              AudioHlsRenditionSelection: {
                                locationName: 'audioHlsRenditionSelection',
                                type: 'structure',
                                members: {
                                  GroupId: {
                                    locationName: 'groupId'
                                  },
                                  Name: {
                                    locationName: 'name'
                                  }
                                },
                                required: ['Name', 'GroupId']
                              },
                              AudioLanguageSelection: {
                                locationName: 'audioLanguageSelection',
                                type: 'structure',
                                members: {
                                  LanguageCode: {
                                    locationName: 'languageCode'
                                  },
                                  LanguageSelectionPolicy: {
                                    locationName: 'languageSelectionPolicy'
                                  }
                                },
                                required: ['LanguageCode']
                              },
                              AudioPidSelection: {
                                locationName: 'audioPidSelection',
                                type: 'structure',
                                members: {
                                  Pid: {
                                    locationName: 'pid',
                                    type: 'integer'
                                  }
                                },
                                required: ['Pid']
                              },
                              AudioTrackSelection: {
                                locationName: 'audioTrackSelection',
                                type: 'structure',
                                members: {
                                  Tracks: {
                                    locationName: 'tracks',
                                    type: 'list',
                                    member: {
                                      type: 'structure',
                                      members: {
                                        Track: {
                                          locationName: 'track',
                                          type: 'integer'
                                        }
                                      },
                                      required: ['Track']
                                    }
                                  },
                                  DolbyEDecode: {
                                    locationName: 'dolbyEDecode',
                                    type: 'structure',
                                    members: {
                                      ProgramSelection: {
                                        locationName: 'programSelection'
                                      }
                                    },
                                    required: ['ProgramSelection']
                                  }
                                },
                                required: ['Tracks']
                              }
                            }
                          }
                        },
                        required: ['Name']
                      }
                    },
                    CaptionSelectors: {
                      locationName: 'captionSelectors',
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          LanguageCode: {
                            locationName: 'languageCode'
                          },
                          Name: {
                            locationName: 'name'
                          },
                          SelectorSettings: {
                            locationName: 'selectorSettings',
                            type: 'structure',
                            members: {
                              AncillarySourceSettings: {
                                locationName: 'ancillarySourceSettings',
                                type: 'structure',
                                members: {
                                  SourceAncillaryChannelNumber: {
                                    locationName: 'sourceAncillaryChannelNumber',
                                    type: 'integer'
                                  }
                                }
                              },
                              AribSourceSettings: {
                                locationName: 'aribSourceSettings',
                                type: 'structure',
                                members: {}
                              },
                              DvbSubSourceSettings: {
                                locationName: 'dvbSubSourceSettings',
                                type: 'structure',
                                members: {
                                  OcrLanguage: {
                                    locationName: 'ocrLanguage'
                                  },
                                  Pid: {
                                    locationName: 'pid',
                                    type: 'integer'
                                  }
                                }
                              },
                              EmbeddedSourceSettings: {
                                locationName: 'embeddedSourceSettings',
                                type: 'structure',
                                members: {
                                  Convert608To708: {
                                    locationName: 'convert608To708'
                                  },
                                  Scte20Detection: {
                                    locationName: 'scte20Detection'
                                  },
                                  Source608ChannelNumber: {
                                    locationName: 'source608ChannelNumber',
                                    type: 'integer'
                                  },
                                  Source608TrackNumber: {
                                    locationName: 'source608TrackNumber',
                                    type: 'integer'
                                  }
                                }
                              },
                              Scte20SourceSettings: {
                                locationName: 'scte20SourceSettings',
                                type: 'structure',
                                members: {
                                  Convert608To708: {
                                    locationName: 'convert608To708'
                                  },
                                  Source608ChannelNumber: {
                                    locationName: 'source608ChannelNumber',
                                    type: 'integer'
                                  }
                                }
                              },
                              Scte27SourceSettings: {
                                locationName: 'scte27SourceSettings',
                                type: 'structure',
                                members: {
                                  OcrLanguage: {
                                    locationName: 'ocrLanguage'
                                  },
                                  Pid: {
                                    locationName: 'pid',
                                    type: 'integer'
                                  }
                                }
                              },
                              TeletextSourceSettings: {
                                locationName: 'teletextSourceSettings',
                                type: 'structure',
                                members: {
                                  OutputRectangle: {
                                    locationName: 'outputRectangle',
                                    type: 'structure',
                                    members: {
                                      Height: {
                                        locationName: 'height',
                                        type: 'double'
                                      },
                                      LeftOffset: {
                                        locationName: 'leftOffset',
                                        type: 'double'
                                      },
                                      TopOffset: {
                                        locationName: 'topOffset',
                                        type: 'double'
                                      },
                                      Width: {
                                        locationName: 'width',
                                        type: 'double'
                                      }
                                    },
                                    required: ['TopOffset', 'Height', 'Width', 'LeftOffset']
                                  },
                                  PageNumber: {
                                    locationName: 'pageNumber'
                                  }
                                }
                              }
                            }
                          }
                        },
                        required: ['Name']
                      }
                    },
                    DeblockFilter: {
                      locationName: 'deblockFilter'
                    },
                    DenoiseFilter: {
                      locationName: 'denoiseFilter'
                    },
                    FilterStrength: {
                      locationName: 'filterStrength',
                      type: 'integer'
                    },
                    InputFilter: {
                      locationName: 'inputFilter'
                    },
                    NetworkInputSettings: {
                      locationName: 'networkInputSettings',
                      type: 'structure',
                      members: {
                        HlsInputSettings: {
                          locationName: 'hlsInputSettings',
                          type: 'structure',
                          members: {
                            Bandwidth: {
                              locationName: 'bandwidth',
                              type: 'integer'
                            },
                            BufferSegments: {
                              locationName: 'bufferSegments',
                              type: 'integer'
                            },
                            Retries: {
                              locationName: 'retries',
                              type: 'integer'
                            },
                            RetryInterval: {
                              locationName: 'retryInterval',
                              type: 'integer'
                            },
                            Scte35Source: {
                              locationName: 'scte35Source'
                            }
                          }
                        },
                        ServerValidation: {
                          locationName: 'serverValidation'
                        }
                      }
                    },
                    Scte35Pid: {
                      locationName: 'scte35Pid',
                      type: 'integer'
                    },
                    Smpte2038DataPreference: {
                      locationName: 'smpte2038DataPreference'
                    },
                    SourceEndBehavior: {
                      locationName: 'sourceEndBehavior'
                    },
                    VideoSelector: {
                      locationName: 'videoSelector',
                      type: 'structure',
                      members: {
                        ColorSpace: {
                          locationName: 'colorSpace'
                        },
                        ColorSpaceSettings: {
                          locationName: 'colorSpaceSettings',
                          type: 'structure',
                          members: {
                            Hdr10Settings: {
                              shape: 'Scv',
                              locationName: 'hdr10Settings'
                            }
                          }
                        },
                        ColorSpaceUsage: {
                          locationName: 'colorSpaceUsage'
                        },
                        SelectorSettings: {
                          locationName: 'selectorSettings',
                          type: 'structure',
                          members: {
                            VideoSelectorPid: {
                              locationName: 'videoSelectorPid',
                              type: 'structure',
                              members: {
                                Pid: {
                                  locationName: 'pid',
                                  type: 'integer'
                                }
                              }
                            },
                            VideoSelectorProgramId: {
                              locationName: 'videoSelectorProgramId',
                              type: 'structure',
                              members: {
                                ProgramId: {
                                  locationName: 'programId',
                                  type: 'integer'
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
          Sfm: {
            type: 'structure',
            members: {
              Codec: {
                locationName: 'codec'
              },
              MaximumBitrate: {
                locationName: 'maximumBitrate'
              },
              Resolution: {
                locationName: 'resolution'
              }
            }
          },
          Sfu: {
            type: 'map',
            key: {},
            value: {}
          },
          Sfx: {
            type: 'structure',
            members: {
              Arn: {
                locationName: 'arn'
              },
              CdiInputSpecification: {
                shape: 'S27',
                locationName: 'cdiInputSpecification'
              },
              ChannelClass: {
                locationName: 'channelClass'
              },
              Destinations: {
                shape: 'S2a',
                locationName: 'destinations'
              },
              EgressEndpoints: {
                shape: 'Sfy',
                locationName: 'egressEndpoints'
              },
              EncoderSettings: {
                shape: 'S2i',
                locationName: 'encoderSettings'
              },
              Id: {
                locationName: 'id'
              },
              InputAttachments: {
                shape: 'Sdx',
                locationName: 'inputAttachments'
              },
              InputSpecification: {
                shape: 'Sfm',
                locationName: 'inputSpecification'
              },
              LogLevel: {
                locationName: 'logLevel'
              },
              Maintenance: {
                shape: 'Sg0',
                locationName: 'maintenance'
              },
              Name: {
                locationName: 'name'
              },
              PipelineDetails: {
                shape: 'Sg1',
                locationName: 'pipelineDetails'
              },
              PipelinesRunningCount: {
                locationName: 'pipelinesRunningCount',
                type: 'integer'
              },
              RoleArn: {
                locationName: 'roleArn'
              },
              State: {
                locationName: 'state'
              },
              Tags: {
                shape: 'Sfu',
                locationName: 'tags'
              },
              Vpc: {
                shape: 'Sg4',
                locationName: 'vpc'
              }
            }
          },
          Sfy: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                SourceIp: {
                  locationName: 'sourceIp'
                }
              }
            }
          },
          Sg0: {
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
              MaintenanceStartTime: {
                locationName: 'maintenanceStartTime'
              }
            }
          },
          Sg1: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                ActiveInputAttachmentName: {
                  locationName: 'activeInputAttachmentName'
                },
                ActiveInputSwitchActionName: {
                  locationName: 'activeInputSwitchActionName'
                },
                ActiveMotionGraphicsActionName: {
                  locationName: 'activeMotionGraphicsActionName'
                },
                ActiveMotionGraphicsUri: {
                  locationName: 'activeMotionGraphicsUri'
                },
                PipelineId: {
                  locationName: 'pipelineId'
                }
              }
            }
          },
          Sg4: {
            type: 'structure',
            members: {
              AvailabilityZones: {
                shape: 'S5',
                locationName: 'availabilityZones'
              },
              NetworkInterfaceIds: {
                shape: 'S5',
                locationName: 'networkInterfaceIds'
              },
              SecurityGroupIds: {
                shape: 'S5',
                locationName: 'securityGroupIds'
              },
              SubnetIds: {
                shape: 'S5',
                locationName: 'subnetIds'
              }
            }
          },
          Sg6: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                StreamName: {
                  locationName: 'streamName'
                }
              }
            }
          },
          Sg8: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Id: {
                  locationName: 'id'
                }
              }
            }
          },
          Sga: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                FlowArn: {
                  locationName: 'flowArn'
                }
              }
            }
          },
          Sgc: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                PasswordParam: {
                  locationName: 'passwordParam'
                },
                Url: {
                  locationName: 'url'
                },
                Username: {
                  locationName: 'username'
                }
              }
            }
          },
          Sgh: {
            type: 'structure',
            members: {
              Arn: {
                locationName: 'arn'
              },
              AttachedChannels: {
                shape: 'S5',
                locationName: 'attachedChannels'
              },
              Destinations: {
                shape: 'Sgi',
                locationName: 'destinations'
              },
              Id: {
                locationName: 'id'
              },
              InputClass: {
                locationName: 'inputClass'
              },
              InputDevices: {
                shape: 'Sg8',
                locationName: 'inputDevices'
              },
              InputPartnerIds: {
                shape: 'S5',
                locationName: 'inputPartnerIds'
              },
              InputSourceType: {
                locationName: 'inputSourceType'
              },
              MediaConnectFlows: {
                shape: 'Sgn',
                locationName: 'mediaConnectFlows'
              },
              Name: {
                locationName: 'name'
              },
              RoleArn: {
                locationName: 'roleArn'
              },
              SecurityGroups: {
                shape: 'S5',
                locationName: 'securityGroups'
              },
              Sources: {
                shape: 'Sgp',
                locationName: 'sources'
              },
              State: {
                locationName: 'state'
              },
              Tags: {
                shape: 'Sfu',
                locationName: 'tags'
              },
              Type: {
                locationName: 'type'
              }
            }
          },
          Sgi: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Ip: {
                  locationName: 'ip'
                },
                Port: {
                  locationName: 'port'
                },
                Url: {
                  locationName: 'url'
                },
                Vpc: {
                  locationName: 'vpc',
                  type: 'structure',
                  members: {
                    AvailabilityZone: {
                      locationName: 'availabilityZone'
                    },
                    NetworkInterfaceId: {
                      locationName: 'networkInterfaceId'
                    }
                  }
                }
              }
            }
          },
          Sgn: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                FlowArn: {
                  locationName: 'flowArn'
                }
              }
            }
          },
          Sgp: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                PasswordParam: {
                  locationName: 'passwordParam'
                },
                Url: {
                  locationName: 'url'
                },
                Username: {
                  locationName: 'username'
                }
              }
            }
          },
          Sgt: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Cidr: {
                  locationName: 'cidr'
                }
              }
            }
          },
          Sgw: {
            type: 'structure',
            members: {
              Arn: {
                locationName: 'arn'
              },
              Id: {
                locationName: 'id'
              },
              Inputs: {
                shape: 'S5',
                locationName: 'inputs'
              },
              State: {
                locationName: 'state'
              },
              Tags: {
                shape: 'Sfu',
                locationName: 'tags'
              },
              WhitelistRules: {
                shape: 'Sgy',
                locationName: 'whitelistRules'
              }
            }
          },
          Sgy: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Cidr: {
                  locationName: 'cidr'
                }
              }
            }
          },
          Sh1: {
            type: 'structure',
            members: {
              MaximumVideoBufferDelayMilliseconds: {
                locationName: 'maximumVideoBufferDelayMilliseconds',
                type: 'integer'
              },
              TransportStreamBitrate: {
                locationName: 'transportStreamBitrate',
                type: 'integer'
              },
              TransportStreamId: {
                locationName: 'transportStreamId',
                type: 'integer'
              },
              TransportStreamReservedBitrate: {
                locationName: 'transportStreamReservedBitrate',
                type: 'integer'
              }
            },
            required: ['TransportStreamBitrate', 'TransportStreamId']
          },
          Sh6: {
            type: 'structure',
            members: {
              Arn: {
                locationName: 'arn'
              },
              AvailabilityZones: {
                shape: 'S5',
                locationName: 'availabilityZones'
              },
              Destinations: {
                shape: 'Sh7',
                locationName: 'destinations'
              },
              Id: {
                locationName: 'id'
              },
              MultiplexSettings: {
                shape: 'Sh1',
                locationName: 'multiplexSettings'
              },
              Name: {
                locationName: 'name'
              },
              PipelinesRunningCount: {
                locationName: 'pipelinesRunningCount',
                type: 'integer'
              },
              ProgramCount: {
                locationName: 'programCount',
                type: 'integer'
              },
              State: {
                locationName: 'state'
              },
              Tags: {
                shape: 'Sfu',
                locationName: 'tags'
              }
            }
          },
          Sh7: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                MediaConnectSettings: {
                  locationName: 'mediaConnectSettings',
                  type: 'structure',
                  members: {
                    EntitlementArn: {
                      locationName: 'entitlementArn'
                    }
                  }
                }
              }
            }
          },
          Shc: {
            type: 'structure',
            members: {
              PreferredChannelPipeline: {
                locationName: 'preferredChannelPipeline'
              },
              ProgramNumber: {
                locationName: 'programNumber',
                type: 'integer'
              },
              ServiceDescriptor: {
                locationName: 'serviceDescriptor',
                type: 'structure',
                members: {
                  ProviderName: {
                    locationName: 'providerName'
                  },
                  ServiceName: {
                    locationName: 'serviceName'
                  }
                },
                required: ['ProviderName', 'ServiceName']
              },
              VideoSettings: {
                locationName: 'videoSettings',
                type: 'structure',
                members: {
                  ConstantBitrate: {
                    locationName: 'constantBitrate',
                    type: 'integer'
                  },
                  StatmuxSettings: {
                    locationName: 'statmuxSettings',
                    type: 'structure',
                    members: {
                      MaximumBitrate: {
                        locationName: 'maximumBitrate',
                        type: 'integer'
                      },
                      MinimumBitrate: {
                        locationName: 'minimumBitrate',
                        type: 'integer'
                      },
                      Priority: {
                        locationName: 'priority',
                        type: 'integer'
                      }
                    }
                  }
                }
              }
            },
            required: ['ProgramNumber']
          },
          Shk: {
            type: 'structure',
            members: {
              ChannelId: {
                locationName: 'channelId'
              },
              MultiplexProgramSettings: {
                shape: 'Shc',
                locationName: 'multiplexProgramSettings'
              },
              PacketIdentifiersMap: {
                shape: 'Shl',
                locationName: 'packetIdentifiersMap'
              },
              PipelineDetails: {
                shape: 'Shn',
                locationName: 'pipelineDetails'
              },
              ProgramName: {
                locationName: 'programName'
              }
            }
          },
          Shl: {
            type: 'structure',
            members: {
              AudioPids: {
                shape: 'Shm',
                locationName: 'audioPids'
              },
              DvbSubPids: {
                shape: 'Shm',
                locationName: 'dvbSubPids'
              },
              DvbTeletextPid: {
                locationName: 'dvbTeletextPid',
                type: 'integer'
              },
              EtvPlatformPid: {
                locationName: 'etvPlatformPid',
                type: 'integer'
              },
              EtvSignalPid: {
                locationName: 'etvSignalPid',
                type: 'integer'
              },
              KlvDataPids: {
                shape: 'Shm',
                locationName: 'klvDataPids'
              },
              PcrPid: {
                locationName: 'pcrPid',
                type: 'integer'
              },
              PmtPid: {
                locationName: 'pmtPid',
                type: 'integer'
              },
              PrivateMetadataPid: {
                locationName: 'privateMetadataPid',
                type: 'integer'
              },
              Scte27Pids: {
                shape: 'Shm',
                locationName: 'scte27Pids'
              },
              Scte35Pid: {
                locationName: 'scte35Pid',
                type: 'integer'
              },
              TimedMetadataPid: {
                locationName: 'timedMetadataPid',
                type: 'integer'
              },
              VideoPid: {
                locationName: 'videoPid',
                type: 'integer'
              }
            }
          },
          Shm: {
            type: 'list',
            member: {
              type: 'integer'
            }
          },
          Shn: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                ActiveChannelPipeline: {
                  locationName: 'activeChannelPipeline'
                },
                PipelineId: {
                  locationName: 'pipelineId'
                }
              }
            }
          },
          Si6: {
            type: 'structure',
            members: {
              AutomaticRenewal: {
                locationName: 'automaticRenewal'
              },
              RenewalCount: {
                locationName: 'renewalCount',
                type: 'integer'
              }
            }
          },
          Si8: {
            type: 'structure',
            members: {
              ChannelClass: {
                locationName: 'channelClass'
              },
              Codec: {
                locationName: 'codec'
              },
              MaximumBitrate: {
                locationName: 'maximumBitrate'
              },
              MaximumFramerate: {
                locationName: 'maximumFramerate'
              },
              Resolution: {
                locationName: 'resolution'
              },
              ResourceType: {
                locationName: 'resourceType'
              },
              SpecialFeature: {
                locationName: 'specialFeature'
              },
              VideoQuality: {
                locationName: 'videoQuality'
              }
            }
          },
          Sim: {
            type: 'structure',
            members: {
              KmsKeyId: {
                locationName: 'kmsKeyId'
              }
            }
          },
          Siw: {
            type: 'structure',
            members: {
              ActiveInput: {
                locationName: 'activeInput'
              },
              ConfiguredInput: {
                locationName: 'configuredInput'
              },
              DeviceState: {
                locationName: 'deviceState'
              },
              Framerate: {
                locationName: 'framerate',
                type: 'double'
              },
              Height: {
                locationName: 'height',
                type: 'integer'
              },
              MaxBitrate: {
                locationName: 'maxBitrate',
                type: 'integer'
              },
              ScanType: {
                locationName: 'scanType'
              },
              Width: {
                locationName: 'width',
                type: 'integer'
              },
              LatencyMs: {
                locationName: 'latencyMs',
                type: 'integer'
              }
            }
          },
          Sj1: {
            type: 'structure',
            members: {
              DnsAddresses: {
                shape: 'S5',
                locationName: 'dnsAddresses'
              },
              Gateway: {
                locationName: 'gateway'
              },
              IpAddress: {
                locationName: 'ipAddress'
              },
              IpScheme: {
                locationName: 'ipScheme'
              },
              SubnetMask: {
                locationName: 'subnetMask'
              }
            }
          },
          Sj4: {
            type: 'structure',
            members: {
              ActiveInput: {
                locationName: 'activeInput'
              },
              ConfiguredInput: {
                locationName: 'configuredInput'
              },
              DeviceState: {
                locationName: 'deviceState'
              },
              Framerate: {
                locationName: 'framerate',
                type: 'double'
              },
              Height: {
                locationName: 'height',
                type: 'integer'
              },
              MaxBitrate: {
                locationName: 'maxBitrate',
                type: 'integer'
              },
              ScanType: {
                locationName: 'scanType'
              },
              Width: {
                locationName: 'width',
                type: 'integer'
              },
              LatencyMs: {
                locationName: 'latencyMs',
                type: 'integer'
              },
              Codec: {
                locationName: 'codec'
              },
              MediaconnectSettings: {
                locationName: 'mediaconnectSettings',
                type: 'structure',
                members: {
                  FlowArn: {
                    locationName: 'flowArn'
                  },
                  RoleArn: {
                    locationName: 'roleArn'
                  },
                  SecretArn: {
                    locationName: 'secretArn'
                  },
                  SourceName: {
                    locationName: 'sourceName'
                  }
                }
              },
              AudioChannelPairs: {
                locationName: 'audioChannelPairs',
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    Id: {
                      locationName: 'id',
                      type: 'integer'
                    },
                    Profile: {
                      locationName: 'profile'
                    }
                  }
                }
              }
            }
          },
          Sk2: {
            type: 'timestamp',
            timestampFormat: 'iso8601'
          },
          Sl2: {
            type: 'structure',
            members: {
              Arn: {
                locationName: 'arn'
              },
              Count: {
                locationName: 'count',
                type: 'integer'
              },
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
              FixedPrice: {
                locationName: 'fixedPrice',
                type: 'double'
              },
              Name: {
                locationName: 'name'
              },
              OfferingDescription: {
                locationName: 'offeringDescription'
              },
              OfferingId: {
                locationName: 'offeringId'
              },
              OfferingType: {
                locationName: 'offeringType'
              },
              Region: {
                locationName: 'region'
              },
              RenewalSettings: {
                shape: 'Si6',
                locationName: 'renewalSettings'
              },
              ReservationId: {
                locationName: 'reservationId'
              },
              ResourceSpecification: {
                shape: 'Si8',
                locationName: 'resourceSpecification'
              },
              Start: {
                locationName: 'start'
              },
              State: {
                locationName: 'state'
              },
              Tags: {
                shape: 'Sfu',
                locationName: 'tags'
              },
              UsagePrice: {
                locationName: 'usagePrice',
                type: 'double'
              }
            }
          },
          Sm4: {
            type: 'structure',
            members: {
              ConfiguredInput: {
                locationName: 'configuredInput'
              },
              MaxBitrate: {
                locationName: 'maxBitrate',
                type: 'integer'
              },
              LatencyMs: {
                locationName: 'latencyMs',
                type: 'integer'
              },
              Codec: {
                locationName: 'codec'
              },
              MediaconnectSettings: {
                locationName: 'mediaconnectSettings',
                type: 'structure',
                members: {
                  FlowArn: {
                    locationName: 'flowArn'
                  },
                  RoleArn: {
                    locationName: 'roleArn'
                  },
                  SecretArn: {
                    locationName: 'secretArn'
                  },
                  SourceName: {
                    locationName: 'sourceName'
                  }
                }
              },
              AudioChannelPairs: {
                locationName: 'audioChannelPairs',
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    Id: {
                      locationName: 'id',
                      type: 'integer'
                    },
                    Profile: {
                      locationName: 'profile'
                    }
                  }
                }
              }
            }
          },
          Smu: {
            type: 'map',
            key: {},
            value: {}
          },
          Sn4: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Arn: {
                  locationName: 'arn'
                }
              },
              required: ['Arn']
            }
          },
          Sne: {
            type: 'list',
            member: {}
          },
          Sni: {
            type: 'list',
            member: {}
          },
          Snj: {
            type: 'map',
            key: {},
            value: {
              shape: 'Snk'
            }
          },
          Snk: {
            type: 'structure',
            members: {
              Destinations: {
                shape: 'Snl',
                locationName: 'destinations'
              },
              Name: {
                locationName: 'name'
              },
              Sources: {
                shape: 'Snl',
                locationName: 'sources'
              }
            }
          },
          Snl: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Arn: {
                  locationName: 'arn'
                },
                Name: {
                  locationName: 'name'
                }
              },
              required: ['Arn']
            }
          },
          Snn: {
            type: 'structure',
            members: {
              DetailsUri: {
                locationName: 'detailsUri'
              },
              Status: {
                locationName: 'status'
              }
            },
            required: ['DetailsUri', 'Status']
          },
          Snp: {
            type: 'map',
            key: {},
            value: {
              shape: 'Snk'
            }
          },
          Snr: {
            type: 'structure',
            members: {
              DetailsUri: {
                locationName: 'detailsUri'
              },
              ErrorMessage: {
                locationName: 'errorMessage'
              },
              Status: {
                locationName: 'status'
              }
            },
            required: ['Status']
          }
        }
      });
    }
  };
});
//# sourceMappingURL=3ad8a996d6491337cda093a9b0ff03dc1b1fff03.js.map