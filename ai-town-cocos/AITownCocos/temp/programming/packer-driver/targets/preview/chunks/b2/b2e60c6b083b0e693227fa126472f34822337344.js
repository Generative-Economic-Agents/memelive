System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2020-11-22',
          endpointPrefix: 'api.iotwireless',
          protocol: 'rest-json',
          protocols: ['rest-json'],
          serviceFullName: 'AWS IoT Wireless',
          serviceId: 'IoT Wireless',
          signatureVersion: 'v4',
          signingName: 'iotwireless',
          uid: 'iotwireless-2020-11-22'
        },
        operations: {
          AssociateAwsAccountWithPartnerAccount: {
            http: {
              requestUri: '/partner-accounts'
            },
            input: {
              type: 'structure',
              required: ['Sidewalk'],
              members: {
                Sidewalk: {
                  shape: 'S2'
                },
                ClientRequestToken: {
                  idempotencyToken: true
                },
                Tags: {
                  shape: 'S6'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Sidewalk: {
                  shape: 'S2'
                },
                Arn: {}
              }
            }
          },
          AssociateMulticastGroupWithFuotaTask: {
            http: {
              method: 'PUT',
              requestUri: '/fuota-tasks/{Id}/multicast-group',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['Id', 'MulticastGroupId'],
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                },
                MulticastGroupId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          AssociateWirelessDeviceWithFuotaTask: {
            http: {
              method: 'PUT',
              requestUri: '/fuota-tasks/{Id}/wireless-device',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['Id', 'WirelessDeviceId'],
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                },
                WirelessDeviceId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          AssociateWirelessDeviceWithMulticastGroup: {
            http: {
              method: 'PUT',
              requestUri: '/multicast-groups/{Id}/wireless-device',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['Id', 'WirelessDeviceId'],
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                },
                WirelessDeviceId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          AssociateWirelessDeviceWithThing: {
            http: {
              method: 'PUT',
              requestUri: '/wireless-devices/{Id}/thing',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['Id', 'ThingArn'],
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                },
                ThingArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          AssociateWirelessGatewayWithCertificate: {
            http: {
              method: 'PUT',
              requestUri: '/wireless-gateways/{Id}/certificate'
            },
            input: {
              type: 'structure',
              required: ['Id', 'IotCertificateId'],
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                },
                IotCertificateId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                IotCertificateId: {}
              }
            }
          },
          AssociateWirelessGatewayWithThing: {
            http: {
              method: 'PUT',
              requestUri: '/wireless-gateways/{Id}/thing',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['Id', 'ThingArn'],
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                },
                ThingArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          CancelMulticastGroupSession: {
            http: {
              method: 'DELETE',
              requestUri: '/multicast-groups/{Id}/session',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          CreateDestination: {
            http: {
              requestUri: '/destinations',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['Name', 'ExpressionType', 'Expression', 'RoleArn'],
              members: {
                Name: {},
                ExpressionType: {},
                Expression: {},
                Description: {},
                RoleArn: {},
                Tags: {
                  shape: 'S6'
                },
                ClientRequestToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                Name: {}
              }
            }
          },
          CreateDeviceProfile: {
            http: {
              requestUri: '/device-profiles',
              responseCode: 201
            },
            input: {
              type: 'structure',
              members: {
                Name: {},
                LoRaWAN: {
                  shape: 'S16'
                },
                Tags: {
                  shape: 'S6'
                },
                ClientRequestToken: {
                  idempotencyToken: true
                },
                Sidewalk: {
                  type: 'structure',
                  members: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                Id: {}
              }
            }
          },
          CreateFuotaTask: {
            http: {
              requestUri: '/fuota-tasks',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['FirmwareUpdateImage', 'FirmwareUpdateRole'],
              members: {
                Name: {},
                Description: {},
                ClientRequestToken: {
                  idempotencyToken: true
                },
                LoRaWAN: {
                  shape: 'S1x'
                },
                FirmwareUpdateImage: {},
                FirmwareUpdateRole: {},
                Tags: {
                  shape: 'S6'
                },
                RedundancyPercent: {
                  type: 'integer'
                },
                FragmentSizeBytes: {
                  type: 'integer'
                },
                FragmentIntervalMS: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                Id: {}
              }
            }
          },
          CreateMulticastGroup: {
            http: {
              requestUri: '/multicast-groups',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['LoRaWAN'],
              members: {
                Name: {},
                Description: {},
                ClientRequestToken: {
                  idempotencyToken: true
                },
                LoRaWAN: {
                  shape: 'S28'
                },
                Tags: {
                  shape: 'S6'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                Id: {}
              }
            }
          },
          CreateNetworkAnalyzerConfiguration: {
            http: {
              requestUri: '/network-analyzer-configurations',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {},
                TraceContent: {
                  shape: 'S2e'
                },
                WirelessDevices: {
                  shape: 'S2i'
                },
                WirelessGateways: {
                  shape: 'S2j'
                },
                Description: {},
                Tags: {
                  shape: 'S6'
                },
                ClientRequestToken: {
                  idempotencyToken: true
                },
                MulticastGroups: {
                  shape: 'S2k'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                Name: {}
              }
            }
          },
          CreateServiceProfile: {
            http: {
              requestUri: '/service-profiles',
              responseCode: 201
            },
            input: {
              type: 'structure',
              members: {
                Name: {},
                LoRaWAN: {
                  type: 'structure',
                  members: {
                    AddGwMetadata: {
                      type: 'boolean'
                    },
                    DrMin: {
                      type: 'integer'
                    },
                    DrMax: {
                      type: 'integer'
                    },
                    PrAllowed: {
                      type: 'boolean'
                    },
                    RaAllowed: {
                      type: 'boolean'
                    }
                  }
                },
                Tags: {
                  shape: 'S6'
                },
                ClientRequestToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                Id: {}
              }
            }
          },
          CreateWirelessDevice: {
            http: {
              requestUri: '/wireless-devices',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['Type', 'DestinationName'],
              members: {
                Type: {},
                Name: {},
                Description: {},
                DestinationName: {},
                ClientRequestToken: {
                  idempotencyToken: true
                },
                LoRaWAN: {
                  shape: 'S31'
                },
                Tags: {
                  shape: 'S6'
                },
                Positioning: {},
                Sidewalk: {
                  type: 'structure',
                  members: {
                    DeviceProfileId: {}
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                Id: {}
              }
            }
          },
          CreateWirelessGateway: {
            http: {
              requestUri: '/wireless-gateways',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['LoRaWAN'],
              members: {
                Name: {},
                Description: {},
                LoRaWAN: {
                  shape: 'S3x'
                },
                Tags: {
                  shape: 'S6'
                },
                ClientRequestToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                Id: {}
              }
            }
          },
          CreateWirelessGatewayTask: {
            http: {
              requestUri: '/wireless-gateways/{Id}/tasks',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['Id', 'WirelessGatewayTaskDefinitionId'],
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                },
                WirelessGatewayTaskDefinitionId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                WirelessGatewayTaskDefinitionId: {},
                Status: {}
              }
            }
          },
          CreateWirelessGatewayTaskDefinition: {
            http: {
              requestUri: '/wireless-gateway-task-definitions',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['AutoCreateTasks'],
              members: {
                AutoCreateTasks: {
                  type: 'boolean'
                },
                Name: {},
                Update: {
                  shape: 'S4j'
                },
                ClientRequestToken: {
                  idempotencyToken: true
                },
                Tags: {
                  shape: 'S6'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Id: {},
                Arn: {}
              }
            }
          },
          DeleteDestination: {
            http: {
              method: 'DELETE',
              requestUri: '/destinations/{Name}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {
                  location: 'uri',
                  locationName: 'Name'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteDeviceProfile: {
            http: {
              method: 'DELETE',
              requestUri: '/device-profiles/{Id}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteFuotaTask: {
            http: {
              method: 'DELETE',
              requestUri: '/fuota-tasks/{Id}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteMulticastGroup: {
            http: {
              method: 'DELETE',
              requestUri: '/multicast-groups/{Id}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteNetworkAnalyzerConfiguration: {
            http: {
              method: 'DELETE',
              requestUri: '/network-analyzer-configurations/{ConfigurationName}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['ConfigurationName'],
              members: {
                ConfigurationName: {
                  location: 'uri',
                  locationName: 'ConfigurationName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteQueuedMessages: {
            http: {
              method: 'DELETE',
              requestUri: '/wireless-devices/{Id}/data',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['Id', 'MessageId'],
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                },
                MessageId: {
                  location: 'querystring',
                  locationName: 'messageId'
                },
                WirelessDeviceType: {
                  location: 'querystring',
                  locationName: 'WirelessDeviceType'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteServiceProfile: {
            http: {
              method: 'DELETE',
              requestUri: '/service-profiles/{Id}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteWirelessDevice: {
            http: {
              method: 'DELETE',
              requestUri: '/wireless-devices/{Id}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteWirelessDeviceImportTask: {
            http: {
              method: 'DELETE',
              requestUri: '/wireless_device_import_task/{Id}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteWirelessGateway: {
            http: {
              method: 'DELETE',
              requestUri: '/wireless-gateways/{Id}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteWirelessGatewayTask: {
            http: {
              method: 'DELETE',
              requestUri: '/wireless-gateways/{Id}/tasks',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteWirelessGatewayTaskDefinition: {
            http: {
              method: 'DELETE',
              requestUri: '/wireless-gateway-task-definitions/{Id}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeregisterWirelessDevice: {
            http: {
              method: 'PATCH',
              requestUri: '/wireless-devices/{Identifier}/deregister'
            },
            input: {
              type: 'structure',
              required: ['Identifier'],
              members: {
                Identifier: {
                  location: 'uri',
                  locationName: 'Identifier'
                },
                WirelessDeviceType: {
                  location: 'querystring',
                  locationName: 'WirelessDeviceType'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DisassociateAwsAccountFromPartnerAccount: {
            http: {
              method: 'DELETE',
              requestUri: '/partner-accounts/{PartnerAccountId}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['PartnerAccountId', 'PartnerType'],
              members: {
                PartnerAccountId: {
                  location: 'uri',
                  locationName: 'PartnerAccountId'
                },
                PartnerType: {
                  location: 'querystring',
                  locationName: 'partnerType'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DisassociateMulticastGroupFromFuotaTask: {
            http: {
              method: 'DELETE',
              requestUri: '/fuota-tasks/{Id}/multicast-groups/{MulticastGroupId}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['Id', 'MulticastGroupId'],
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                },
                MulticastGroupId: {
                  location: 'uri',
                  locationName: 'MulticastGroupId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DisassociateWirelessDeviceFromFuotaTask: {
            http: {
              method: 'DELETE',
              requestUri: '/fuota-tasks/{Id}/wireless-devices/{WirelessDeviceId}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['Id', 'WirelessDeviceId'],
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                },
                WirelessDeviceId: {
                  location: 'uri',
                  locationName: 'WirelessDeviceId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DisassociateWirelessDeviceFromMulticastGroup: {
            http: {
              method: 'DELETE',
              requestUri: '/multicast-groups/{Id}/wireless-devices/{WirelessDeviceId}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['Id', 'WirelessDeviceId'],
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                },
                WirelessDeviceId: {
                  location: 'uri',
                  locationName: 'WirelessDeviceId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DisassociateWirelessDeviceFromThing: {
            http: {
              method: 'DELETE',
              requestUri: '/wireless-devices/{Id}/thing',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DisassociateWirelessGatewayFromCertificate: {
            http: {
              method: 'DELETE',
              requestUri: '/wireless-gateways/{Id}/certificate',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DisassociateWirelessGatewayFromThing: {
            http: {
              method: 'DELETE',
              requestUri: '/wireless-gateways/{Id}/thing',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          GetDestination: {
            http: {
              method: 'GET',
              requestUri: '/destinations/{Name}'
            },
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {
                  location: 'uri',
                  locationName: 'Name'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                Name: {},
                Expression: {},
                ExpressionType: {},
                Description: {},
                RoleArn: {}
              }
            }
          },
          GetDeviceProfile: {
            http: {
              method: 'GET',
              requestUri: '/device-profiles/{Id}'
            },
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                Name: {},
                Id: {},
                LoRaWAN: {
                  shape: 'S16'
                },
                Sidewalk: {
                  type: 'structure',
                  members: {
                    ApplicationServerPublicKey: {
                      type: 'string',
                      sensitive: true
                    },
                    QualificationStatus: {
                      type: 'boolean'
                    },
                    DakCertificateMetadata: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        required: ['CertificateId'],
                        members: {
                          CertificateId: {},
                          MaxAllowedSignature: {
                            type: 'integer'
                          },
                          FactorySupport: {
                            type: 'boolean'
                          },
                          ApId: {},
                          DeviceTypeId: {}
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          GetEventConfigurationByResourceTypes: {
            http: {
              method: 'GET',
              requestUri: '/event-configurations-resource-types'
            },
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {
                DeviceRegistrationState: {
                  shape: 'S6j'
                },
                Proximity: {
                  shape: 'S6m'
                },
                Join: {
                  shape: 'S6n'
                },
                ConnectionStatus: {
                  shape: 'S6p'
                },
                MessageDeliveryStatus: {
                  shape: 'S6r'
                }
              }
            }
          },
          GetFuotaTask: {
            http: {
              method: 'GET',
              requestUri: '/fuota-tasks/{Id}'
            },
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                Id: {},
                Status: {},
                Name: {},
                Description: {},
                LoRaWAN: {
                  type: 'structure',
                  members: {
                    RfRegion: {},
                    StartTime: {
                      shape: 'S6w'
                    }
                  }
                },
                FirmwareUpdateImage: {},
                FirmwareUpdateRole: {},
                CreatedAt: {
                  type: 'timestamp'
                },
                RedundancyPercent: {
                  type: 'integer'
                },
                FragmentSizeBytes: {
                  type: 'integer'
                },
                FragmentIntervalMS: {
                  type: 'integer'
                }
              }
            }
          },
          GetLogLevelsByResourceTypes: {
            http: {
              method: 'GET',
              requestUri: '/log-levels',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {
                DefaultLogLevel: {},
                WirelessGatewayLogOptions: {
                  shape: 'S70'
                },
                WirelessDeviceLogOptions: {
                  shape: 'S76'
                }
              }
            }
          },
          GetMetricConfiguration: {
            http: {
              method: 'GET',
              requestUri: '/metric-configuration',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {
                SummaryMetric: {
                  shape: 'S7d'
                }
              }
            }
          },
          GetMetrics: {
            http: {
              requestUri: '/metrics'
            },
            input: {
              type: 'structure',
              members: {
                SummaryMetricQueries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      QueryId: {},
                      MetricName: {},
                      Dimensions: {
                        shape: 'S7k'
                      },
                      AggregationPeriod: {},
                      StartTimestamp: {
                        type: 'timestamp'
                      },
                      EndTimestamp: {
                        type: 'timestamp'
                      }
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                SummaryMetricQueryResults: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      QueryId: {},
                      QueryStatus: {},
                      Error: {},
                      MetricName: {},
                      Dimensions: {
                        shape: 'S7k'
                      },
                      AggregationPeriod: {},
                      StartTimestamp: {
                        type: 'timestamp'
                      },
                      EndTimestamp: {
                        type: 'timestamp'
                      },
                      Timestamps: {
                        type: 'list',
                        member: {
                          type: 'timestamp'
                        }
                      },
                      Values: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            Min: {
                              type: 'double'
                            },
                            Max: {
                              type: 'double'
                            },
                            Sum: {
                              type: 'double'
                            },
                            Avg: {
                              type: 'double'
                            },
                            Std: {
                              type: 'double'
                            },
                            P90: {
                              type: 'double'
                            }
                          }
                        }
                      },
                      Unit: {}
                    }
                  }
                }
              }
            }
          },
          GetMulticastGroup: {
            http: {
              method: 'GET',
              requestUri: '/multicast-groups/{Id}'
            },
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                Id: {},
                Name: {},
                Description: {},
                Status: {},
                LoRaWAN: {
                  type: 'structure',
                  members: {
                    RfRegion: {},
                    DlClass: {},
                    NumberOfDevicesRequested: {
                      type: 'integer'
                    },
                    NumberOfDevicesInGroup: {
                      type: 'integer'
                    }
                  }
                },
                CreatedAt: {
                  type: 'timestamp'
                }
              }
            }
          },
          GetMulticastGroupSession: {
            http: {
              method: 'GET',
              requestUri: '/multicast-groups/{Id}/session'
            },
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                LoRaWAN: {
                  shape: 'S8f'
                }
              }
            }
          },
          GetNetworkAnalyzerConfiguration: {
            http: {
              method: 'GET',
              requestUri: '/network-analyzer-configurations/{ConfigurationName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ConfigurationName'],
              members: {
                ConfigurationName: {
                  location: 'uri',
                  locationName: 'ConfigurationName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                TraceContent: {
                  shape: 'S2e'
                },
                WirelessDevices: {
                  shape: 'S2i'
                },
                WirelessGateways: {
                  shape: 'S2j'
                },
                Description: {},
                Arn: {},
                Name: {},
                MulticastGroups: {
                  shape: 'S2k'
                }
              }
            }
          },
          GetPartnerAccount: {
            http: {
              method: 'GET',
              requestUri: '/partner-accounts/{PartnerAccountId}'
            },
            input: {
              type: 'structure',
              required: ['PartnerAccountId', 'PartnerType'],
              members: {
                PartnerAccountId: {
                  location: 'uri',
                  locationName: 'PartnerAccountId'
                },
                PartnerType: {
                  location: 'querystring',
                  locationName: 'partnerType'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Sidewalk: {
                  shape: 'S8o'
                },
                AccountLinked: {
                  type: 'boolean'
                }
              }
            }
          },
          GetPosition: {
            http: {
              method: 'GET',
              requestUri: '/positions/{ResourceIdentifier}'
            },
            input: {
              type: 'structure',
              required: ['ResourceIdentifier', 'ResourceType'],
              members: {
                ResourceIdentifier: {
                  location: 'uri',
                  locationName: 'ResourceIdentifier'
                },
                ResourceType: {
                  location: 'querystring',
                  locationName: 'resourceType'
                }
              },
              deprecated: true,
              deprecatedMessage: 'This operation is no longer supported.'
            },
            output: {
              type: 'structure',
              members: {
                Position: {
                  shape: 'S8v'
                },
                Accuracy: {
                  type: 'structure',
                  members: {
                    HorizontalAccuracy: {
                      type: 'float'
                    },
                    VerticalAccuracy: {
                      type: 'float'
                    }
                  }
                },
                SolverType: {},
                SolverProvider: {},
                SolverVersion: {},
                Timestamp: {}
              },
              deprecated: true,
              deprecatedMessage: 'This operation is no longer supported.'
            },
            deprecated: true,
            deprecatedMessage: 'This operation is no longer supported.'
          },
          GetPositionConfiguration: {
            http: {
              method: 'GET',
              requestUri: '/position-configurations/{ResourceIdentifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ResourceIdentifier', 'ResourceType'],
              members: {
                ResourceIdentifier: {
                  location: 'uri',
                  locationName: 'ResourceIdentifier'
                },
                ResourceType: {
                  location: 'querystring',
                  locationName: 'resourceType'
                }
              },
              deprecated: true,
              deprecatedMessage: 'This operation is no longer supported.'
            },
            output: {
              type: 'structure',
              members: {
                Solvers: {
                  shape: 'S96'
                },
                Destination: {}
              },
              deprecated: true,
              deprecatedMessage: 'This operation is no longer supported.'
            },
            deprecated: true,
            deprecatedMessage: 'This operation is no longer supported.'
          },
          GetPositionEstimate: {
            http: {
              requestUri: '/position-estimate'
            },
            input: {
              type: 'structure',
              members: {
                WiFiAccessPoints: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['MacAddress', 'Rss'],
                    members: {
                      MacAddress: {},
                      Rss: {
                        type: 'integer'
                      }
                    }
                  }
                },
                CellTowers: {
                  type: 'structure',
                  members: {
                    Gsm: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        required: ['Mcc', 'Mnc', 'Lac', 'GeranCid'],
                        members: {
                          Mcc: {
                            type: 'integer'
                          },
                          Mnc: {
                            type: 'integer'
                          },
                          Lac: {
                            type: 'integer'
                          },
                          GeranCid: {
                            type: 'integer'
                          },
                          GsmLocalId: {
                            type: 'structure',
                            required: ['Bsic', 'Bcch'],
                            members: {
                              Bsic: {
                                type: 'integer'
                              },
                              Bcch: {
                                type: 'integer'
                              }
                            }
                          },
                          GsmTimingAdvance: {
                            type: 'integer'
                          },
                          RxLevel: {
                            type: 'integer'
                          },
                          GsmNmr: {
                            type: 'list',
                            member: {
                              type: 'structure',
                              required: ['Bsic', 'Bcch'],
                              members: {
                                Bsic: {
                                  type: 'integer'
                                },
                                Bcch: {
                                  type: 'integer'
                                },
                                RxLevel: {
                                  type: 'integer'
                                },
                                GlobalIdentity: {
                                  type: 'structure',
                                  required: ['Lac', 'GeranCid'],
                                  members: {
                                    Lac: {
                                      type: 'integer'
                                    },
                                    GeranCid: {
                                      type: 'integer'
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    },
                    Wcdma: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        required: ['Mcc', 'Mnc', 'UtranCid'],
                        members: {
                          Mcc: {
                            type: 'integer'
                          },
                          Mnc: {
                            type: 'integer'
                          },
                          Lac: {
                            type: 'integer'
                          },
                          UtranCid: {
                            type: 'integer'
                          },
                          WcdmaLocalId: {
                            type: 'structure',
                            required: ['Uarfcndl', 'Psc'],
                            members: {
                              Uarfcndl: {
                                type: 'integer'
                              },
                              Psc: {
                                type: 'integer'
                              }
                            }
                          },
                          Rscp: {
                            type: 'integer'
                          },
                          PathLoss: {
                            type: 'integer'
                          },
                          WcdmaNmr: {
                            type: 'list',
                            member: {
                              type: 'structure',
                              required: ['Uarfcndl', 'Psc', 'UtranCid'],
                              members: {
                                Uarfcndl: {
                                  type: 'integer'
                                },
                                Psc: {
                                  type: 'integer'
                                },
                                UtranCid: {
                                  type: 'integer'
                                },
                                Rscp: {
                                  type: 'integer'
                                },
                                PathLoss: {
                                  type: 'integer'
                                }
                              }
                            }
                          }
                        }
                      }
                    },
                    Tdscdma: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        required: ['Mcc', 'Mnc', 'UtranCid'],
                        members: {
                          Mcc: {
                            type: 'integer'
                          },
                          Mnc: {
                            type: 'integer'
                          },
                          Lac: {
                            type: 'integer'
                          },
                          UtranCid: {
                            type: 'integer'
                          },
                          TdscdmaLocalId: {
                            type: 'structure',
                            required: ['Uarfcn', 'CellParams'],
                            members: {
                              Uarfcn: {
                                type: 'integer'
                              },
                              CellParams: {
                                type: 'integer'
                              }
                            }
                          },
                          TdscdmaTimingAdvance: {
                            type: 'integer'
                          },
                          Rscp: {
                            type: 'integer'
                          },
                          PathLoss: {
                            type: 'integer'
                          },
                          TdscdmaNmr: {
                            type: 'list',
                            member: {
                              type: 'structure',
                              required: ['Uarfcn', 'CellParams'],
                              members: {
                                Uarfcn: {
                                  type: 'integer'
                                },
                                CellParams: {
                                  type: 'integer'
                                },
                                UtranCid: {
                                  type: 'integer'
                                },
                                Rscp: {
                                  type: 'integer'
                                },
                                PathLoss: {
                                  type: 'integer'
                                }
                              }
                            }
                          }
                        }
                      }
                    },
                    Lte: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        required: ['Mcc', 'Mnc', 'EutranCid'],
                        members: {
                          Mcc: {
                            type: 'integer'
                          },
                          Mnc: {
                            type: 'integer'
                          },
                          EutranCid: {
                            type: 'integer'
                          },
                          Tac: {
                            type: 'integer'
                          },
                          LteLocalId: {
                            type: 'structure',
                            required: ['Pci', 'Earfcn'],
                            members: {
                              Pci: {
                                type: 'integer'
                              },
                              Earfcn: {
                                type: 'integer'
                              }
                            }
                          },
                          LteTimingAdvance: {
                            type: 'integer'
                          },
                          Rsrp: {
                            type: 'integer'
                          },
                          Rsrq: {
                            type: 'float'
                          },
                          NrCapable: {
                            type: 'boolean'
                          },
                          LteNmr: {
                            type: 'list',
                            member: {
                              type: 'structure',
                              required: ['Pci', 'Earfcn', 'EutranCid'],
                              members: {
                                Pci: {
                                  type: 'integer'
                                },
                                Earfcn: {
                                  type: 'integer'
                                },
                                EutranCid: {
                                  type: 'integer'
                                },
                                Rsrp: {
                                  type: 'integer'
                                },
                                Rsrq: {
                                  type: 'float'
                                }
                              }
                            }
                          }
                        }
                      }
                    },
                    Cdma: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        required: ['SystemId', 'NetworkId', 'BaseStationId'],
                        members: {
                          SystemId: {
                            type: 'integer'
                          },
                          NetworkId: {
                            type: 'integer'
                          },
                          BaseStationId: {
                            type: 'integer'
                          },
                          RegistrationZone: {
                            type: 'integer'
                          },
                          CdmaLocalId: {
                            type: 'structure',
                            required: ['PnOffset', 'CdmaChannel'],
                            members: {
                              PnOffset: {
                                type: 'integer'
                              },
                              CdmaChannel: {
                                type: 'integer'
                              }
                            }
                          },
                          PilotPower: {
                            type: 'integer'
                          },
                          BaseLat: {
                            type: 'float'
                          },
                          BaseLng: {
                            type: 'float'
                          },
                          CdmaNmr: {
                            type: 'list',
                            member: {
                              type: 'structure',
                              required: ['PnOffset', 'CdmaChannel'],
                              members: {
                                PnOffset: {
                                  type: 'integer'
                                },
                                CdmaChannel: {
                                  type: 'integer'
                                },
                                PilotPower: {
                                  type: 'integer'
                                },
                                BaseStationId: {
                                  type: 'integer'
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                Ip: {
                  type: 'structure',
                  required: ['IpAddress'],
                  members: {
                    IpAddress: {}
                  }
                },
                Gnss: {
                  type: 'structure',
                  required: ['Payload'],
                  members: {
                    Payload: {},
                    CaptureTime: {
                      type: 'float'
                    },
                    CaptureTimeAccuracy: {
                      type: 'float'
                    },
                    AssistPosition: {
                      type: 'list',
                      member: {
                        type: 'float'
                      }
                    },
                    AssistAltitude: {
                      type: 'float'
                    },
                    Use2DSolver: {
                      type: 'boolean'
                    }
                  }
                },
                Timestamp: {
                  type: 'timestamp'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                GeoJsonPayload: {
                  type: 'blob'
                }
              },
              payload: 'GeoJsonPayload'
            }
          },
          GetResourceEventConfiguration: {
            http: {
              method: 'GET',
              requestUri: '/event-configurations/{Identifier}'
            },
            input: {
              type: 'structure',
              required: ['Identifier', 'IdentifierType'],
              members: {
                Identifier: {
                  location: 'uri',
                  locationName: 'Identifier'
                },
                IdentifierType: {
                  location: 'querystring',
                  locationName: 'identifierType'
                },
                PartnerType: {
                  location: 'querystring',
                  locationName: 'partnerType'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                DeviceRegistrationState: {
                  shape: 'Sbj'
                },
                Proximity: {
                  shape: 'Sbl'
                },
                Join: {
                  shape: 'Sbm'
                },
                ConnectionStatus: {
                  shape: 'Sbo'
                },
                MessageDeliveryStatus: {
                  shape: 'Sbq'
                }
              }
            }
          },
          GetResourceLogLevel: {
            http: {
              method: 'GET',
              requestUri: '/log-levels/{ResourceIdentifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ResourceIdentifier', 'ResourceType'],
              members: {
                ResourceIdentifier: {
                  location: 'uri',
                  locationName: 'ResourceIdentifier'
                },
                ResourceType: {
                  location: 'querystring',
                  locationName: 'resourceType'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                LogLevel: {}
              }
            }
          },
          GetResourcePosition: {
            http: {
              method: 'GET',
              requestUri: '/resource-positions/{ResourceIdentifier}'
            },
            input: {
              type: 'structure',
              required: ['ResourceIdentifier', 'ResourceType'],
              members: {
                ResourceIdentifier: {
                  location: 'uri',
                  locationName: 'ResourceIdentifier'
                },
                ResourceType: {
                  location: 'querystring',
                  locationName: 'resourceType'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                GeoJsonPayload: {
                  type: 'blob'
                }
              },
              payload: 'GeoJsonPayload'
            }
          },
          GetServiceEndpoint: {
            http: {
              method: 'GET',
              requestUri: '/service-endpoint'
            },
            input: {
              type: 'structure',
              members: {
                ServiceType: {
                  location: 'querystring',
                  locationName: 'serviceType'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ServiceType: {},
                ServiceEndpoint: {},
                ServerTrust: {}
              }
            }
          },
          GetServiceProfile: {
            http: {
              method: 'GET',
              requestUri: '/service-profiles/{Id}'
            },
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                Name: {},
                Id: {},
                LoRaWAN: {
                  type: 'structure',
                  members: {
                    UlRate: {
                      type: 'integer'
                    },
                    UlBucketSize: {
                      type: 'integer'
                    },
                    UlRatePolicy: {},
                    DlRate: {
                      type: 'integer'
                    },
                    DlBucketSize: {
                      type: 'integer'
                    },
                    DlRatePolicy: {},
                    AddGwMetadata: {
                      type: 'boolean'
                    },
                    DevStatusReqFreq: {
                      type: 'integer'
                    },
                    ReportDevStatusBattery: {
                      type: 'boolean'
                    },
                    ReportDevStatusMargin: {
                      type: 'boolean'
                    },
                    DrMin: {
                      type: 'integer'
                    },
                    DrMax: {
                      type: 'integer'
                    },
                    ChannelMask: {},
                    PrAllowed: {
                      type: 'boolean'
                    },
                    HrAllowed: {
                      type: 'boolean'
                    },
                    RaAllowed: {
                      type: 'boolean'
                    },
                    NwkGeoLoc: {
                      type: 'boolean'
                    },
                    TargetPer: {
                      type: 'integer'
                    },
                    MinGwDiversity: {
                      type: 'integer'
                    }
                  }
                }
              }
            }
          },
          GetWirelessDevice: {
            http: {
              method: 'GET',
              requestUri: '/wireless-devices/{Identifier}'
            },
            input: {
              type: 'structure',
              required: ['Identifier', 'IdentifierType'],
              members: {
                Identifier: {
                  location: 'uri',
                  locationName: 'Identifier'
                },
                IdentifierType: {
                  location: 'querystring',
                  locationName: 'identifierType'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Type: {},
                Name: {},
                Description: {},
                DestinationName: {},
                Id: {},
                Arn: {},
                ThingName: {},
                ThingArn: {},
                LoRaWAN: {
                  shape: 'S31'
                },
                Sidewalk: {
                  type: 'structure',
                  members: {
                    AmazonId: {},
                    SidewalkId: {},
                    SidewalkManufacturingSn: {},
                    DeviceCertificates: {
                      shape: 'Scs'
                    },
                    PrivateKeys: {
                      type: 'list',
                      member: {
                        shape: 'Sct'
                      }
                    },
                    DeviceProfileId: {},
                    CertificateId: {},
                    Status: {}
                  }
                },
                Positioning: {}
              }
            }
          },
          GetWirelessDeviceImportTask: {
            http: {
              method: 'GET',
              requestUri: '/wireless_device_import_task/{Id}'
            },
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Id: {},
                Arn: {},
                DestinationName: {},
                Sidewalk: {
                  shape: 'Sd1'
                },
                CreationTime: {
                  shape: 'Sd5'
                },
                Status: {},
                StatusReason: {},
                InitializedImportedDeviceCount: {
                  type: 'long'
                },
                PendingImportedDeviceCount: {
                  type: 'long'
                },
                OnboardedImportedDeviceCount: {
                  type: 'long'
                },
                FailedImportedDeviceCount: {
                  type: 'long'
                }
              }
            }
          },
          GetWirelessDeviceStatistics: {
            http: {
              method: 'GET',
              requestUri: '/wireless-devices/{Id}/statistics',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['WirelessDeviceId'],
              members: {
                WirelessDeviceId: {
                  location: 'uri',
                  locationName: 'Id'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                WirelessDeviceId: {},
                LastUplinkReceivedAt: {},
                LoRaWAN: {
                  type: 'structure',
                  members: {
                    DevEui: {},
                    FPort: {
                      type: 'integer'
                    },
                    DataRate: {
                      type: 'integer'
                    },
                    Frequency: {
                      type: 'integer'
                    },
                    Timestamp: {},
                    Gateways: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          GatewayEui: {},
                          Snr: {
                            type: 'double'
                          },
                          Rssi: {
                            type: 'double'
                          }
                        }
                      }
                    },
                    PublicGateways: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          ProviderNetId: {},
                          Id: {},
                          Rssi: {
                            type: 'double'
                          },
                          Snr: {
                            type: 'double'
                          },
                          RfRegion: {},
                          DlAllowed: {
                            type: 'boolean'
                          }
                        }
                      }
                    }
                  }
                },
                Sidewalk: {
                  type: 'structure',
                  members: {
                    Rssi: {
                      type: 'integer'
                    },
                    BatteryLevel: {},
                    Event: {},
                    DeviceState: {}
                  }
                }
              }
            }
          },
          GetWirelessGateway: {
            http: {
              method: 'GET',
              requestUri: '/wireless-gateways/{Identifier}'
            },
            input: {
              type: 'structure',
              required: ['Identifier', 'IdentifierType'],
              members: {
                Identifier: {
                  location: 'uri',
                  locationName: 'Identifier'
                },
                IdentifierType: {
                  location: 'querystring',
                  locationName: 'identifierType'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Name: {},
                Id: {},
                Description: {},
                LoRaWAN: {
                  shape: 'S3x'
                },
                Arn: {},
                ThingName: {},
                ThingArn: {}
              }
            }
          },
          GetWirelessGatewayCertificate: {
            http: {
              method: 'GET',
              requestUri: '/wireless-gateways/{Id}/certificate'
            },
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                IotCertificateId: {},
                LoRaWANNetworkServerCertificateId: {}
              }
            }
          },
          GetWirelessGatewayFirmwareInformation: {
            http: {
              method: 'GET',
              requestUri: '/wireless-gateways/{Id}/firmware-information'
            },
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                LoRaWAN: {
                  type: 'structure',
                  members: {
                    CurrentVersion: {
                      shape: 'S4o'
                    }
                  }
                }
              }
            }
          },
          GetWirelessGatewayStatistics: {
            http: {
              method: 'GET',
              requestUri: '/wireless-gateways/{Id}/statistics',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['WirelessGatewayId'],
              members: {
                WirelessGatewayId: {
                  location: 'uri',
                  locationName: 'Id'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                WirelessGatewayId: {},
                LastUplinkReceivedAt: {},
                ConnectionStatus: {}
              }
            }
          },
          GetWirelessGatewayTask: {
            http: {
              method: 'GET',
              requestUri: '/wireless-gateways/{Id}/tasks'
            },
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                WirelessGatewayId: {},
                WirelessGatewayTaskDefinitionId: {},
                LastUplinkReceivedAt: {},
                TaskCreatedAt: {},
                Status: {}
              }
            }
          },
          GetWirelessGatewayTaskDefinition: {
            http: {
              method: 'GET',
              requestUri: '/wireless-gateway-task-definitions/{Id}'
            },
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AutoCreateTasks: {
                  type: 'boolean'
                },
                Name: {},
                Update: {
                  shape: 'S4j'
                },
                Arn: {}
              }
            }
          },
          ListDestinations: {
            http: {
              method: 'GET',
              requestUri: '/destinations'
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
                NextToken: {},
                DestinationList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Arn: {},
                      Name: {},
                      ExpressionType: {},
                      Expression: {},
                      Description: {},
                      RoleArn: {}
                    }
                  }
                }
              }
            }
          },
          ListDeviceProfiles: {
            http: {
              method: 'GET',
              requestUri: '/device-profiles'
            },
            input: {
              type: 'structure',
              members: {
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                DeviceProfileType: {
                  location: 'querystring',
                  locationName: 'deviceProfileType'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                DeviceProfileList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Arn: {},
                      Name: {},
                      Id: {}
                    }
                  }
                }
              }
            }
          },
          ListDevicesForWirelessDeviceImportTask: {
            http: {
              method: 'GET',
              requestUri: '/wireless_device_import_task'
            },
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {
                  location: 'querystring',
                  locationName: 'id'
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
                Status: {
                  location: 'querystring',
                  locationName: 'status'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                DestinationName: {},
                ImportedWirelessDeviceList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Sidewalk: {
                        type: 'structure',
                        members: {
                          SidewalkManufacturingSn: {},
                          OnboardingStatus: {},
                          OnboardingStatusReason: {},
                          LastUpdateTime: {
                            type: 'timestamp',
                            timestampFormat: 'iso8601'
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          ListEventConfigurations: {
            http: {
              method: 'GET',
              requestUri: '/event-configurations'
            },
            input: {
              type: 'structure',
              required: ['ResourceType'],
              members: {
                ResourceType: {
                  location: 'querystring',
                  locationName: 'resourceType'
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
                NextToken: {},
                EventConfigurationsList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Identifier: {},
                      IdentifierType: {},
                      PartnerType: {},
                      Events: {
                        type: 'structure',
                        members: {
                          DeviceRegistrationState: {
                            shape: 'Sbj'
                          },
                          Proximity: {
                            shape: 'Sbl'
                          },
                          Join: {
                            shape: 'Sbm'
                          },
                          ConnectionStatus: {
                            shape: 'Sbo'
                          },
                          MessageDeliveryStatus: {
                            shape: 'Sbq'
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          ListFuotaTasks: {
            http: {
              method: 'GET',
              requestUri: '/fuota-tasks'
            },
            input: {
              type: 'structure',
              members: {
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                FuotaTaskList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Id: {},
                      Arn: {},
                      Name: {}
                    }
                  }
                }
              }
            }
          },
          ListMulticastGroups: {
            http: {
              method: 'GET',
              requestUri: '/multicast-groups'
            },
            input: {
              type: 'structure',
              members: {
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                MulticastGroupList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Id: {},
                      Arn: {},
                      Name: {}
                    }
                  }
                }
              }
            }
          },
          ListMulticastGroupsByFuotaTask: {
            http: {
              method: 'GET',
              requestUri: '/fuota-tasks/{Id}/multicast-groups'
            },
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                MulticastGroupList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Id: {}
                    }
                  }
                }
              }
            }
          },
          ListNetworkAnalyzerConfigurations: {
            http: {
              method: 'GET',
              requestUri: '/network-analyzer-configurations'
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
                NextToken: {},
                NetworkAnalyzerConfigurationList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Arn: {},
                      Name: {}
                    }
                  }
                }
              }
            }
          },
          ListPartnerAccounts: {
            http: {
              method: 'GET',
              requestUri: '/partner-accounts'
            },
            input: {
              type: 'structure',
              members: {
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                Sidewalk: {
                  type: 'list',
                  member: {
                    shape: 'S8o'
                  }
                }
              }
            }
          },
          ListPositionConfigurations: {
            http: {
              method: 'GET',
              requestUri: '/position-configurations',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ResourceType: {
                  location: 'querystring',
                  locationName: 'resourceType'
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
              deprecated: true,
              deprecatedMessage: 'This operation is no longer supported.'
            },
            output: {
              type: 'structure',
              members: {
                PositionConfigurationList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ResourceIdentifier: {},
                      ResourceType: {},
                      Solvers: {
                        shape: 'S96'
                      },
                      Destination: {}
                    }
                  }
                },
                NextToken: {}
              },
              deprecated: true,
              deprecatedMessage: 'This operation is no longer supported.'
            },
            deprecated: true,
            deprecatedMessage: 'This operation is no longer supported.'
          },
          ListQueuedMessages: {
            http: {
              method: 'GET',
              requestUri: '/wireless-devices/{Id}/data'
            },
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                WirelessDeviceType: {
                  location: 'querystring',
                  locationName: 'WirelessDeviceType'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                DownlinkQueueMessagesList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      MessageId: {},
                      TransmitMode: {
                        type: 'integer'
                      },
                      ReceivedAt: {},
                      LoRaWAN: {
                        shape: 'Sfl'
                      }
                    }
                  }
                }
              }
            }
          },
          ListServiceProfiles: {
            http: {
              method: 'GET',
              requestUri: '/service-profiles'
            },
            input: {
              type: 'structure',
              members: {
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                ServiceProfileList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Arn: {},
                      Name: {},
                      Id: {}
                    }
                  }
                }
              }
            }
          },
          ListTagsForResource: {
            http: {
              method: 'GET',
              requestUri: '/tags'
            },
            input: {
              type: 'structure',
              required: ['ResourceArn'],
              members: {
                ResourceArn: {
                  location: 'querystring',
                  locationName: 'resourceArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Tags: {
                  shape: 'S6'
                }
              }
            }
          },
          ListWirelessDeviceImportTasks: {
            http: {
              method: 'GET',
              requestUri: '/wireless_device_import_tasks'
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
                NextToken: {},
                WirelessDeviceImportTaskList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Id: {},
                      Arn: {},
                      DestinationName: {},
                      Sidewalk: {
                        shape: 'Sd1'
                      },
                      CreationTime: {
                        shape: 'Sd5'
                      },
                      Status: {},
                      StatusReason: {},
                      InitializedImportedDeviceCount: {
                        type: 'long'
                      },
                      PendingImportedDeviceCount: {
                        type: 'long'
                      },
                      OnboardedImportedDeviceCount: {
                        type: 'long'
                      },
                      FailedImportedDeviceCount: {
                        type: 'long'
                      }
                    }
                  }
                }
              }
            }
          },
          ListWirelessDevices: {
            http: {
              method: 'GET',
              requestUri: '/wireless-devices'
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
                DestinationName: {
                  location: 'querystring',
                  locationName: 'destinationName'
                },
                DeviceProfileId: {
                  location: 'querystring',
                  locationName: 'deviceProfileId'
                },
                ServiceProfileId: {
                  location: 'querystring',
                  locationName: 'serviceProfileId'
                },
                WirelessDeviceType: {
                  location: 'querystring',
                  locationName: 'wirelessDeviceType'
                },
                FuotaTaskId: {
                  location: 'querystring',
                  locationName: 'fuotaTaskId'
                },
                MulticastGroupId: {
                  location: 'querystring',
                  locationName: 'multicastGroupId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                WirelessDeviceList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Arn: {},
                      Id: {},
                      Type: {},
                      Name: {},
                      DestinationName: {},
                      LastUplinkReceivedAt: {},
                      LoRaWAN: {
                        type: 'structure',
                        members: {
                          DevEui: {}
                        }
                      },
                      Sidewalk: {
                        type: 'structure',
                        members: {
                          AmazonId: {},
                          SidewalkId: {},
                          SidewalkManufacturingSn: {},
                          DeviceCertificates: {
                            shape: 'Scs'
                          },
                          DeviceProfileId: {},
                          Status: {}
                        }
                      },
                      FuotaDeviceStatus: {},
                      MulticastDeviceStatus: {},
                      McGroupId: {
                        type: 'integer'
                      }
                    }
                  }
                }
              }
            }
          },
          ListWirelessGatewayTaskDefinitions: {
            http: {
              method: 'GET',
              requestUri: '/wireless-gateway-task-definitions'
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
                TaskDefinitionType: {
                  location: 'querystring',
                  locationName: 'taskDefinitionType'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                TaskDefinitions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Id: {},
                      LoRaWAN: {
                        type: 'structure',
                        members: {
                          CurrentVersion: {
                            shape: 'S4o'
                          },
                          UpdateVersion: {
                            shape: 'S4o'
                          }
                        }
                      },
                      Arn: {}
                    }
                  }
                }
              }
            }
          },
          ListWirelessGateways: {
            http: {
              method: 'GET',
              requestUri: '/wireless-gateways'
            },
            input: {
              type: 'structure',
              members: {
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                WirelessGatewayList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Arn: {},
                      Id: {},
                      Name: {},
                      Description: {},
                      LoRaWAN: {
                        shape: 'S3x'
                      },
                      LastUplinkReceivedAt: {}
                    }
                  }
                }
              }
            }
          },
          PutPositionConfiguration: {
            http: {
              method: 'PUT',
              requestUri: '/position-configurations/{ResourceIdentifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ResourceIdentifier', 'ResourceType'],
              members: {
                ResourceIdentifier: {
                  location: 'uri',
                  locationName: 'ResourceIdentifier'
                },
                ResourceType: {
                  location: 'querystring',
                  locationName: 'resourceType'
                },
                Solvers: {
                  type: 'structure',
                  members: {
                    SemtechGnss: {
                      type: 'structure',
                      required: ['Status', 'Fec'],
                      members: {
                        Status: {},
                        Fec: {}
                      }
                    }
                  }
                },
                Destination: {}
              },
              deprecated: true,
              deprecatedMessage: 'This operation is no longer supported.'
            },
            output: {
              type: 'structure',
              members: {},
              deprecated: true,
              deprecatedMessage: 'This operation is no longer supported.'
            },
            deprecated: true,
            deprecatedMessage: 'This operation is no longer supported.'
          },
          PutResourceLogLevel: {
            http: {
              method: 'PUT',
              requestUri: '/log-levels/{ResourceIdentifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ResourceIdentifier', 'ResourceType', 'LogLevel'],
              members: {
                ResourceIdentifier: {
                  location: 'uri',
                  locationName: 'ResourceIdentifier'
                },
                ResourceType: {
                  location: 'querystring',
                  locationName: 'resourceType'
                },
                LogLevel: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          ResetAllResourceLogLevels: {
            http: {
              method: 'DELETE',
              requestUri: '/log-levels',
              responseCode: 204
            },
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          ResetResourceLogLevel: {
            http: {
              method: 'DELETE',
              requestUri: '/log-levels/{ResourceIdentifier}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['ResourceIdentifier', 'ResourceType'],
              members: {
                ResourceIdentifier: {
                  location: 'uri',
                  locationName: 'ResourceIdentifier'
                },
                ResourceType: {
                  location: 'querystring',
                  locationName: 'resourceType'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          SendDataToMulticastGroup: {
            http: {
              requestUri: '/multicast-groups/{Id}/data',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['Id', 'PayloadData', 'WirelessMetadata'],
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                },
                PayloadData: {},
                WirelessMetadata: {
                  type: 'structure',
                  members: {
                    LoRaWAN: {
                      type: 'structure',
                      members: {
                        FPort: {
                          type: 'integer'
                        }
                      }
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                MessageId: {}
              }
            }
          },
          SendDataToWirelessDevice: {
            http: {
              requestUri: '/wireless-devices/{Id}/data',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['Id', 'TransmitMode', 'PayloadData'],
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                },
                TransmitMode: {
                  type: 'integer'
                },
                PayloadData: {},
                WirelessMetadata: {
                  type: 'structure',
                  members: {
                    LoRaWAN: {
                      shape: 'Sfl'
                    },
                    Sidewalk: {
                      type: 'structure',
                      members: {
                        Seq: {
                          type: 'integer'
                        },
                        MessageType: {},
                        AckModeRetryDurationSecs: {
                          type: 'integer'
                        }
                      }
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                MessageId: {}
              }
            }
          },
          StartBulkAssociateWirelessDeviceWithMulticastGroup: {
            http: {
              method: 'PATCH',
              requestUri: '/multicast-groups/{Id}/bulk',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                },
                QueryString: {},
                Tags: {
                  shape: 'S6'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          StartBulkDisassociateWirelessDeviceFromMulticastGroup: {
            http: {
              requestUri: '/multicast-groups/{Id}/bulk',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                },
                QueryString: {},
                Tags: {
                  shape: 'S6'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          StartFuotaTask: {
            http: {
              method: 'PUT',
              requestUri: '/fuota-tasks/{Id}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                },
                LoRaWAN: {
                  type: 'structure',
                  members: {
                    StartTime: {
                      shape: 'S6w'
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          StartMulticastGroupSession: {
            http: {
              method: 'PUT',
              requestUri: '/multicast-groups/{Id}/session',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['Id', 'LoRaWAN'],
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                },
                LoRaWAN: {
                  shape: 'S8f'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          StartSingleWirelessDeviceImportTask: {
            http: {
              requestUri: '/wireless_single_device_import_task',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['DestinationName', 'Sidewalk'],
              members: {
                DestinationName: {},
                ClientRequestToken: {
                  idempotencyToken: true
                },
                DeviceName: {},
                Tags: {
                  shape: 'S6'
                },
                Sidewalk: {
                  type: 'structure',
                  members: {
                    SidewalkManufacturingSn: {}
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Id: {},
                Arn: {}
              }
            }
          },
          StartWirelessDeviceImportTask: {
            http: {
              requestUri: '/wireless_device_import_task',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['DestinationName', 'Sidewalk'],
              members: {
                DestinationName: {},
                ClientRequestToken: {
                  idempotencyToken: true
                },
                Tags: {
                  shape: 'S6'
                },
                Sidewalk: {
                  type: 'structure',
                  members: {
                    DeviceCreationFile: {},
                    Role: {}
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Id: {},
                Arn: {}
              }
            }
          },
          TagResource: {
            http: {
              requestUri: '/tags',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['ResourceArn', 'Tags'],
              members: {
                ResourceArn: {
                  location: 'querystring',
                  locationName: 'resourceArn'
                },
                Tags: {
                  shape: 'S6'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          TestWirelessDevice: {
            http: {
              requestUri: '/wireless-devices/{Id}/test',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Result: {}
              }
            }
          },
          UntagResource: {
            http: {
              method: 'DELETE',
              requestUri: '/tags',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['ResourceArn', 'TagKeys'],
              members: {
                ResourceArn: {
                  location: 'querystring',
                  locationName: 'resourceArn'
                },
                TagKeys: {
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
          UpdateDestination: {
            http: {
              method: 'PATCH',
              requestUri: '/destinations/{Name}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {
                  location: 'uri',
                  locationName: 'Name'
                },
                ExpressionType: {},
                Expression: {},
                Description: {},
                RoleArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateEventConfigurationByResourceTypes: {
            http: {
              method: 'PATCH',
              requestUri: '/event-configurations-resource-types',
              responseCode: 204
            },
            input: {
              type: 'structure',
              members: {
                DeviceRegistrationState: {
                  shape: 'S6j'
                },
                Proximity: {
                  shape: 'S6m'
                },
                Join: {
                  shape: 'S6n'
                },
                ConnectionStatus: {
                  shape: 'S6p'
                },
                MessageDeliveryStatus: {
                  shape: 'S6r'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateFuotaTask: {
            http: {
              method: 'PATCH',
              requestUri: '/fuota-tasks/{Id}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                },
                Name: {},
                Description: {},
                LoRaWAN: {
                  shape: 'S1x'
                },
                FirmwareUpdateImage: {},
                FirmwareUpdateRole: {},
                RedundancyPercent: {
                  type: 'integer'
                },
                FragmentSizeBytes: {
                  type: 'integer'
                },
                FragmentIntervalMS: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateLogLevelsByResourceTypes: {
            http: {
              requestUri: '/log-levels',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                DefaultLogLevel: {},
                WirelessDeviceLogOptions: {
                  shape: 'S76'
                },
                WirelessGatewayLogOptions: {
                  shape: 'S70'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateMetricConfiguration: {
            http: {
              method: 'PUT',
              requestUri: '/metric-configuration',
              responseCode: 204
            },
            input: {
              type: 'structure',
              members: {
                SummaryMetric: {
                  shape: 'S7d'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          UpdateMulticastGroup: {
            http: {
              method: 'PATCH',
              requestUri: '/multicast-groups/{Id}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                },
                Name: {},
                Description: {},
                LoRaWAN: {
                  shape: 'S28'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateNetworkAnalyzerConfiguration: {
            http: {
              method: 'PATCH',
              requestUri: '/network-analyzer-configurations/{ConfigurationName}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['ConfigurationName'],
              members: {
                ConfigurationName: {
                  location: 'uri',
                  locationName: 'ConfigurationName'
                },
                TraceContent: {
                  shape: 'S2e'
                },
                WirelessDevicesToAdd: {
                  shape: 'S2i'
                },
                WirelessDevicesToRemove: {
                  shape: 'S2i'
                },
                WirelessGatewaysToAdd: {
                  shape: 'S2j'
                },
                WirelessGatewaysToRemove: {
                  shape: 'S2j'
                },
                Description: {},
                MulticastGroupsToAdd: {
                  shape: 'S2k'
                },
                MulticastGroupsToRemove: {
                  shape: 'S2k'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdatePartnerAccount: {
            http: {
              method: 'PATCH',
              requestUri: '/partner-accounts/{PartnerAccountId}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['Sidewalk', 'PartnerAccountId', 'PartnerType'],
              members: {
                Sidewalk: {
                  type: 'structure',
                  members: {
                    AppServerPrivateKey: {
                      shape: 'S4'
                    }
                  }
                },
                PartnerAccountId: {
                  location: 'uri',
                  locationName: 'PartnerAccountId'
                },
                PartnerType: {
                  location: 'querystring',
                  locationName: 'partnerType'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdatePosition: {
            http: {
              method: 'PATCH',
              requestUri: '/positions/{ResourceIdentifier}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['ResourceIdentifier', 'ResourceType', 'Position'],
              members: {
                ResourceIdentifier: {
                  location: 'uri',
                  locationName: 'ResourceIdentifier'
                },
                ResourceType: {
                  location: 'querystring',
                  locationName: 'resourceType'
                },
                Position: {
                  shape: 'S8v'
                }
              },
              deprecated: true,
              deprecatedMessage: 'This operation is no longer supported.'
            },
            output: {
              type: 'structure',
              members: {},
              deprecated: true,
              deprecatedMessage: 'This operation is no longer supported.'
            },
            deprecated: true,
            deprecatedMessage: 'This operation is no longer supported.'
          },
          UpdateResourceEventConfiguration: {
            http: {
              method: 'PATCH',
              requestUri: '/event-configurations/{Identifier}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['Identifier', 'IdentifierType'],
              members: {
                Identifier: {
                  location: 'uri',
                  locationName: 'Identifier'
                },
                IdentifierType: {
                  location: 'querystring',
                  locationName: 'identifierType'
                },
                PartnerType: {
                  location: 'querystring',
                  locationName: 'partnerType'
                },
                DeviceRegistrationState: {
                  shape: 'Sbj'
                },
                Proximity: {
                  shape: 'Sbl'
                },
                Join: {
                  shape: 'Sbm'
                },
                ConnectionStatus: {
                  shape: 'Sbo'
                },
                MessageDeliveryStatus: {
                  shape: 'Sbq'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateResourcePosition: {
            http: {
              method: 'PATCH',
              requestUri: '/resource-positions/{ResourceIdentifier}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['ResourceIdentifier', 'ResourceType'],
              members: {
                ResourceIdentifier: {
                  location: 'uri',
                  locationName: 'ResourceIdentifier'
                },
                ResourceType: {
                  location: 'querystring',
                  locationName: 'resourceType'
                },
                GeoJsonPayload: {
                  type: 'blob'
                }
              },
              payload: 'GeoJsonPayload'
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateWirelessDevice: {
            http: {
              method: 'PATCH',
              requestUri: '/wireless-devices/{Id}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                },
                DestinationName: {},
                Name: {},
                Description: {},
                LoRaWAN: {
                  type: 'structure',
                  members: {
                    DeviceProfileId: {},
                    ServiceProfileId: {},
                    AbpV1_1: {
                      type: 'structure',
                      members: {
                        FCntStart: {
                          type: 'integer'
                        }
                      }
                    },
                    AbpV1_0_x: {
                      type: 'structure',
                      members: {
                        FCntStart: {
                          type: 'integer'
                        }
                      }
                    },
                    FPorts: {
                      type: 'structure',
                      members: {
                        Positioning: {
                          shape: 'S3n'
                        },
                        Applications: {
                          shape: 'S3o'
                        }
                      }
                    }
                  }
                },
                Positioning: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateWirelessDeviceImportTask: {
            http: {
              method: 'PATCH',
              requestUri: '/wireless_device_import_task/{Id}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['Id', 'Sidewalk'],
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                },
                Sidewalk: {
                  type: 'structure',
                  members: {
                    DeviceCreationFile: {}
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateWirelessGateway: {
            http: {
              method: 'PATCH',
              requestUri: '/wireless-gateways/{Id}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['Id'],
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'Id'
                },
                Name: {},
                Description: {},
                JoinEuiFilters: {
                  shape: 'S3z'
                },
                NetIdFilters: {
                  shape: 'S41'
                },
                MaxEirp: {
                  type: 'float'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          }
        },
        shapes: {
          S2: {
            type: 'structure',
            members: {
              AmazonId: {},
              AppServerPrivateKey: {
                shape: 'S4'
              }
            }
          },
          S4: {
            type: 'string',
            sensitive: true
          },
          S6: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Key', 'Value'],
              members: {
                Key: {},
                Value: {}
              }
            }
          },
          S16: {
            type: 'structure',
            members: {
              SupportsClassB: {
                type: 'boolean'
              },
              ClassBTimeout: {
                type: 'integer'
              },
              PingSlotPeriod: {
                type: 'integer'
              },
              PingSlotDr: {
                type: 'integer'
              },
              PingSlotFreq: {
                type: 'integer'
              },
              SupportsClassC: {
                type: 'boolean'
              },
              ClassCTimeout: {
                type: 'integer'
              },
              MacVersion: {},
              RegParamsRevision: {},
              RxDelay1: {
                type: 'integer'
              },
              RxDrOffset1: {
                type: 'integer'
              },
              RxDataRate2: {
                type: 'integer'
              },
              RxFreq2: {
                type: 'integer'
              },
              FactoryPresetFreqsList: {
                type: 'list',
                member: {
                  type: 'integer'
                }
              },
              MaxEirp: {
                type: 'integer'
              },
              MaxDutyCycle: {
                type: 'integer'
              },
              RfRegion: {},
              SupportsJoin: {
                type: 'boolean'
              },
              Supports32BitFCnt: {
                type: 'boolean'
              }
            }
          },
          S1x: {
            type: 'structure',
            members: {
              RfRegion: {}
            }
          },
          S28: {
            type: 'structure',
            members: {
              RfRegion: {},
              DlClass: {}
            }
          },
          S2e: {
            type: 'structure',
            members: {
              WirelessDeviceFrameInfo: {},
              LogLevel: {},
              MulticastFrameInfo: {}
            }
          },
          S2i: {
            type: 'list',
            member: {}
          },
          S2j: {
            type: 'list',
            member: {}
          },
          S2k: {
            type: 'list',
            member: {}
          },
          S31: {
            type: 'structure',
            members: {
              DevEui: {},
              DeviceProfileId: {},
              ServiceProfileId: {},
              OtaaV1_1: {
                type: 'structure',
                members: {
                  AppKey: {},
                  NwkKey: {},
                  JoinEui: {}
                }
              },
              OtaaV1_0_x: {
                type: 'structure',
                members: {
                  AppKey: {},
                  AppEui: {},
                  JoinEui: {},
                  GenAppKey: {}
                }
              },
              AbpV1_1: {
                type: 'structure',
                members: {
                  DevAddr: {},
                  SessionKeys: {
                    type: 'structure',
                    members: {
                      FNwkSIntKey: {},
                      SNwkSIntKey: {},
                      NwkSEncKey: {},
                      AppSKey: {}
                    }
                  },
                  FCntStart: {
                    type: 'integer'
                  }
                }
              },
              AbpV1_0_x: {
                type: 'structure',
                members: {
                  DevAddr: {},
                  SessionKeys: {
                    type: 'structure',
                    members: {
                      NwkSKey: {},
                      AppSKey: {}
                    }
                  },
                  FCntStart: {
                    type: 'integer'
                  }
                }
              },
              FPorts: {
                type: 'structure',
                members: {
                  Fuota: {
                    type: 'integer'
                  },
                  Multicast: {
                    type: 'integer'
                  },
                  ClockSync: {
                    type: 'integer'
                  },
                  Positioning: {
                    shape: 'S3n'
                  },
                  Applications: {
                    shape: 'S3o'
                  }
                }
              }
            }
          },
          S3n: {
            type: 'structure',
            members: {
              ClockSync: {
                type: 'integer'
              },
              Stream: {
                type: 'integer'
              },
              Gnss: {
                type: 'integer'
              }
            }
          },
          S3o: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                FPort: {
                  type: 'integer'
                },
                Type: {},
                DestinationName: {}
              }
            }
          },
          S3x: {
            type: 'structure',
            members: {
              GatewayEui: {},
              RfRegion: {},
              JoinEuiFilters: {
                shape: 'S3z'
              },
              NetIdFilters: {
                shape: 'S41'
              },
              SubBands: {
                type: 'list',
                member: {
                  type: 'integer'
                }
              },
              Beaconing: {
                type: 'structure',
                members: {
                  DataRate: {
                    type: 'integer'
                  },
                  Frequencies: {
                    type: 'list',
                    member: {
                      type: 'integer'
                    }
                  }
                }
              },
              MaxEirp: {
                type: 'float'
              }
            }
          },
          S3z: {
            type: 'list',
            member: {
              type: 'list',
              member: {}
            }
          },
          S41: {
            type: 'list',
            member: {}
          },
          S4j: {
            type: 'structure',
            members: {
              UpdateDataSource: {},
              UpdateDataRole: {},
              LoRaWAN: {
                type: 'structure',
                members: {
                  UpdateSignature: {},
                  SigKeyCrc: {
                    type: 'long'
                  },
                  CurrentVersion: {
                    shape: 'S4o'
                  },
                  UpdateVersion: {
                    shape: 'S4o'
                  }
                }
              }
            }
          },
          S4o: {
            type: 'structure',
            members: {
              PackageVersion: {},
              Model: {},
              Station: {}
            }
          },
          S6j: {
            type: 'structure',
            members: {
              Sidewalk: {
                shape: 'S6k'
              }
            }
          },
          S6k: {
            type: 'structure',
            members: {
              WirelessDeviceEventTopic: {}
            }
          },
          S6m: {
            type: 'structure',
            members: {
              Sidewalk: {
                shape: 'S6k'
              }
            }
          },
          S6n: {
            type: 'structure',
            members: {
              LoRaWAN: {
                type: 'structure',
                members: {
                  WirelessDeviceEventTopic: {}
                }
              }
            }
          },
          S6p: {
            type: 'structure',
            members: {
              LoRaWAN: {
                type: 'structure',
                members: {
                  WirelessGatewayEventTopic: {}
                }
              }
            }
          },
          S6r: {
            type: 'structure',
            members: {
              Sidewalk: {
                shape: 'S6k'
              }
            }
          },
          S6w: {
            type: 'timestamp',
            timestampFormat: 'iso8601'
          },
          S70: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Type', 'LogLevel'],
              members: {
                Type: {},
                LogLevel: {},
                Events: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Event', 'LogLevel'],
                    members: {
                      Event: {},
                      LogLevel: {}
                    }
                  }
                }
              }
            }
          },
          S76: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Type', 'LogLevel'],
              members: {
                Type: {},
                LogLevel: {},
                Events: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Event', 'LogLevel'],
                    members: {
                      Event: {},
                      LogLevel: {}
                    }
                  }
                }
              }
            }
          },
          S7d: {
            type: 'structure',
            members: {
              Status: {}
            }
          },
          S7k: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                name: {},
                value: {}
              }
            }
          },
          S8f: {
            type: 'structure',
            members: {
              DlDr: {
                type: 'integer'
              },
              DlFreq: {
                type: 'integer'
              },
              SessionStartTime: {
                type: 'timestamp',
                timestampFormat: 'iso8601'
              },
              SessionTimeout: {
                type: 'integer'
              },
              PingSlotPeriod: {
                type: 'integer'
              }
            }
          },
          S8o: {
            type: 'structure',
            members: {
              AmazonId: {},
              Fingerprint: {
                type: 'string',
                sensitive: true
              },
              Arn: {}
            }
          },
          S8v: {
            type: 'list',
            member: {
              type: 'float'
            }
          },
          S96: {
            type: 'structure',
            members: {
              SemtechGnss: {
                type: 'structure',
                members: {
                  Provider: {},
                  Type: {},
                  Status: {},
                  Fec: {}
                }
              }
            }
          },
          Sbj: {
            type: 'structure',
            members: {
              Sidewalk: {
                shape: 'Sbk'
              },
              WirelessDeviceIdEventTopic: {}
            }
          },
          Sbk: {
            type: 'structure',
            members: {
              AmazonIdEventTopic: {}
            }
          },
          Sbl: {
            type: 'structure',
            members: {
              Sidewalk: {
                shape: 'Sbk'
              },
              WirelessDeviceIdEventTopic: {}
            }
          },
          Sbm: {
            type: 'structure',
            members: {
              LoRaWAN: {
                type: 'structure',
                members: {
                  DevEuiEventTopic: {}
                }
              },
              WirelessDeviceIdEventTopic: {}
            }
          },
          Sbo: {
            type: 'structure',
            members: {
              LoRaWAN: {
                type: 'structure',
                members: {
                  GatewayEuiEventTopic: {}
                }
              },
              WirelessGatewayIdEventTopic: {}
            }
          },
          Sbq: {
            type: 'structure',
            members: {
              Sidewalk: {
                shape: 'Sbk'
              },
              WirelessDeviceIdEventTopic: {}
            }
          },
          Scs: {
            type: 'list',
            member: {
              shape: 'Sct'
            }
          },
          Sct: {
            type: 'structure',
            required: ['SigningAlg', 'Value'],
            members: {
              SigningAlg: {},
              Value: {}
            }
          },
          Sd1: {
            type: 'structure',
            members: {
              DeviceCreationFileList: {
                type: 'list',
                member: {}
              },
              Role: {}
            }
          },
          Sd5: {
            type: 'timestamp',
            timestampFormat: 'iso8601'
          },
          Sfl: {
            type: 'structure',
            members: {
              FPort: {
                type: 'integer'
              },
              ParticipatingGateways: {
                type: 'structure',
                required: ['DownlinkMode', 'GatewayList', 'TransmissionInterval'],
                members: {
                  DownlinkMode: {},
                  GatewayList: {
                    type: 'list',
                    member: {
                      type: 'structure',
                      required: ['GatewayId', 'DownlinkFrequency'],
                      members: {
                        GatewayId: {},
                        DownlinkFrequency: {
                          type: 'integer'
                        }
                      }
                    }
                  },
                  TransmissionInterval: {
                    type: 'integer'
                  }
                }
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=b2e60c6b083b0e693227fa126472f34822337344.js.map