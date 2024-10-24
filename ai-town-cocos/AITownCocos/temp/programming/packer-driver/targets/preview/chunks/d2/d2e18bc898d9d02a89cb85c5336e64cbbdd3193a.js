System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2018-08-08',
          endpointPrefix: 'globalaccelerator',
          jsonVersion: '1.1',
          protocol: 'json',
          protocols: ['json'],
          serviceFullName: 'AWS Global Accelerator',
          serviceId: 'Global Accelerator',
          signatureVersion: 'v4',
          signingName: 'globalaccelerator',
          targetPrefix: 'GlobalAccelerator_V20180706',
          uid: 'globalaccelerator-2018-08-08',
          auth: ['aws.auth#sigv4']
        },
        operations: {
          AddCustomRoutingEndpoints: {
            input: {
              type: 'structure',
              required: ['EndpointConfigurations', 'EndpointGroupArn'],
              members: {
                EndpointConfigurations: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      EndpointId: {},
                      AttachmentArn: {}
                    }
                  }
                },
                EndpointGroupArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                EndpointDescriptions: {
                  shape: 'S6'
                },
                EndpointGroupArn: {}
              }
            }
          },
          AddEndpoints: {
            input: {
              type: 'structure',
              required: ['EndpointConfigurations', 'EndpointGroupArn'],
              members: {
                EndpointConfigurations: {
                  shape: 'S9'
                },
                EndpointGroupArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                EndpointDescriptions: {
                  shape: 'Se'
                },
                EndpointGroupArn: {}
              }
            }
          },
          AdvertiseByoipCidr: {
            input: {
              type: 'structure',
              required: ['Cidr'],
              members: {
                Cidr: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ByoipCidr: {
                  shape: 'Sj'
                }
              }
            }
          },
          AllowCustomRoutingTraffic: {
            input: {
              type: 'structure',
              required: ['EndpointGroupArn', 'EndpointId'],
              members: {
                EndpointGroupArn: {},
                EndpointId: {},
                DestinationAddresses: {
                  shape: 'Sp'
                },
                DestinationPorts: {
                  shape: 'Sr'
                },
                AllowAllTrafficToEndpoint: {
                  type: 'boolean'
                }
              }
            }
          },
          CreateAccelerator: {
            input: {
              type: 'structure',
              required: ['Name', 'IdempotencyToken'],
              members: {
                Name: {},
                IpAddressType: {},
                IpAddresses: {
                  shape: 'Sv'
                },
                Enabled: {
                  type: 'boolean'
                },
                IdempotencyToken: {
                  idempotencyToken: true
                },
                Tags: {
                  shape: 'Sx'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Accelerator: {
                  shape: 'S12'
                }
              }
            }
          },
          CreateCrossAccountAttachment: {
            input: {
              type: 'structure',
              required: ['Name', 'IdempotencyToken'],
              members: {
                Name: {},
                Principals: {
                  shape: 'S1b'
                },
                Resources: {
                  shape: 'S1d'
                },
                IdempotencyToken: {
                  idempotencyToken: true
                },
                Tags: {
                  shape: 'Sx'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                CrossAccountAttachment: {
                  shape: 'S1g'
                }
              }
            }
          },
          CreateCustomRoutingAccelerator: {
            input: {
              type: 'structure',
              required: ['Name', 'IdempotencyToken'],
              members: {
                Name: {},
                IpAddressType: {},
                IpAddresses: {
                  shape: 'Sv'
                },
                Enabled: {
                  type: 'boolean'
                },
                IdempotencyToken: {
                  idempotencyToken: true
                },
                Tags: {
                  shape: 'Sx'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Accelerator: {
                  shape: 'S1j'
                }
              }
            }
          },
          CreateCustomRoutingEndpointGroup: {
            input: {
              type: 'structure',
              required: ['ListenerArn', 'EndpointGroupRegion', 'DestinationConfigurations', 'IdempotencyToken'],
              members: {
                ListenerArn: {},
                EndpointGroupRegion: {},
                DestinationConfigurations: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['FromPort', 'ToPort', 'Protocols'],
                    members: {
                      FromPort: {
                        type: 'integer'
                      },
                      ToPort: {
                        type: 'integer'
                      },
                      Protocols: {
                        shape: 'S1o'
                      }
                    }
                  }
                },
                IdempotencyToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                EndpointGroup: {
                  shape: 'S1r'
                }
              }
            }
          },
          CreateCustomRoutingListener: {
            input: {
              type: 'structure',
              required: ['AcceleratorArn', 'PortRanges', 'IdempotencyToken'],
              members: {
                AcceleratorArn: {},
                PortRanges: {
                  shape: 'S1x'
                },
                IdempotencyToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Listener: {
                  shape: 'S20'
                }
              }
            }
          },
          CreateEndpointGroup: {
            input: {
              type: 'structure',
              required: ['ListenerArn', 'EndpointGroupRegion', 'IdempotencyToken'],
              members: {
                ListenerArn: {},
                EndpointGroupRegion: {},
                EndpointConfigurations: {
                  shape: 'S9'
                },
                TrafficDialPercentage: {
                  type: 'float'
                },
                HealthCheckPort: {
                  type: 'integer'
                },
                HealthCheckProtocol: {},
                HealthCheckPath: {},
                HealthCheckIntervalSeconds: {
                  type: 'integer'
                },
                ThresholdCount: {
                  type: 'integer'
                },
                IdempotencyToken: {
                  idempotencyToken: true
                },
                PortOverrides: {
                  shape: 'S28'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                EndpointGroup: {
                  shape: 'S2b'
                }
              }
            }
          },
          CreateListener: {
            input: {
              type: 'structure',
              required: ['AcceleratorArn', 'PortRanges', 'Protocol', 'IdempotencyToken'],
              members: {
                AcceleratorArn: {},
                PortRanges: {
                  shape: 'S1x'
                },
                Protocol: {},
                ClientAffinity: {},
                IdempotencyToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Listener: {
                  shape: 'S2f'
                }
              }
            }
          },
          DeleteAccelerator: {
            input: {
              type: 'structure',
              required: ['AcceleratorArn'],
              members: {
                AcceleratorArn: {}
              }
            }
          },
          DeleteCrossAccountAttachment: {
            input: {
              type: 'structure',
              required: ['AttachmentArn'],
              members: {
                AttachmentArn: {}
              }
            }
          },
          DeleteCustomRoutingAccelerator: {
            input: {
              type: 'structure',
              required: ['AcceleratorArn'],
              members: {
                AcceleratorArn: {}
              }
            }
          },
          DeleteCustomRoutingEndpointGroup: {
            input: {
              type: 'structure',
              required: ['EndpointGroupArn'],
              members: {
                EndpointGroupArn: {}
              }
            }
          },
          DeleteCustomRoutingListener: {
            input: {
              type: 'structure',
              required: ['ListenerArn'],
              members: {
                ListenerArn: {}
              }
            }
          },
          DeleteEndpointGroup: {
            input: {
              type: 'structure',
              required: ['EndpointGroupArn'],
              members: {
                EndpointGroupArn: {}
              }
            }
          },
          DeleteListener: {
            input: {
              type: 'structure',
              required: ['ListenerArn'],
              members: {
                ListenerArn: {}
              }
            }
          },
          DenyCustomRoutingTraffic: {
            input: {
              type: 'structure',
              required: ['EndpointGroupArn', 'EndpointId'],
              members: {
                EndpointGroupArn: {},
                EndpointId: {},
                DestinationAddresses: {
                  shape: 'Sp'
                },
                DestinationPorts: {
                  shape: 'Sr'
                },
                DenyAllTrafficToEndpoint: {
                  type: 'boolean'
                }
              }
            }
          },
          DeprovisionByoipCidr: {
            input: {
              type: 'structure',
              required: ['Cidr'],
              members: {
                Cidr: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ByoipCidr: {
                  shape: 'Sj'
                }
              }
            }
          },
          DescribeAccelerator: {
            input: {
              type: 'structure',
              required: ['AcceleratorArn'],
              members: {
                AcceleratorArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Accelerator: {
                  shape: 'S12'
                }
              }
            }
          },
          DescribeAcceleratorAttributes: {
            input: {
              type: 'structure',
              required: ['AcceleratorArn'],
              members: {
                AcceleratorArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                AcceleratorAttributes: {
                  shape: 'S2u'
                }
              }
            }
          },
          DescribeCrossAccountAttachment: {
            input: {
              type: 'structure',
              required: ['AttachmentArn'],
              members: {
                AttachmentArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                CrossAccountAttachment: {
                  shape: 'S1g'
                }
              }
            }
          },
          DescribeCustomRoutingAccelerator: {
            input: {
              type: 'structure',
              required: ['AcceleratorArn'],
              members: {
                AcceleratorArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Accelerator: {
                  shape: 'S1j'
                }
              }
            }
          },
          DescribeCustomRoutingAcceleratorAttributes: {
            input: {
              type: 'structure',
              required: ['AcceleratorArn'],
              members: {
                AcceleratorArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                AcceleratorAttributes: {
                  shape: 'S31'
                }
              }
            }
          },
          DescribeCustomRoutingEndpointGroup: {
            input: {
              type: 'structure',
              required: ['EndpointGroupArn'],
              members: {
                EndpointGroupArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                EndpointGroup: {
                  shape: 'S1r'
                }
              }
            }
          },
          DescribeCustomRoutingListener: {
            input: {
              type: 'structure',
              required: ['ListenerArn'],
              members: {
                ListenerArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Listener: {
                  shape: 'S20'
                }
              }
            }
          },
          DescribeEndpointGroup: {
            input: {
              type: 'structure',
              required: ['EndpointGroupArn'],
              members: {
                EndpointGroupArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                EndpointGroup: {
                  shape: 'S2b'
                }
              }
            }
          },
          DescribeListener: {
            input: {
              type: 'structure',
              required: ['ListenerArn'],
              members: {
                ListenerArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Listener: {
                  shape: 'S2f'
                }
              }
            }
          },
          ListAccelerators: {
            input: {
              type: 'structure',
              members: {
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Accelerators: {
                  type: 'list',
                  member: {
                    shape: 'S12'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListByoipCidrs: {
            input: {
              type: 'structure',
              members: {
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ByoipCidrs: {
                  type: 'list',
                  member: {
                    shape: 'Sj'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListCrossAccountAttachments: {
            input: {
              type: 'structure',
              members: {
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                CrossAccountAttachments: {
                  type: 'list',
                  member: {
                    shape: 'S1g'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListCrossAccountResourceAccounts: {
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {
                ResourceOwnerAwsAccountIds: {
                  type: 'list',
                  member: {}
                }
              }
            }
          },
          ListCrossAccountResources: {
            input: {
              type: 'structure',
              required: ['ResourceOwnerAwsAccountId'],
              members: {
                AcceleratorArn: {},
                ResourceOwnerAwsAccountId: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                CrossAccountResources: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      EndpointId: {},
                      Cidr: {},
                      AttachmentArn: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListCustomRoutingAccelerators: {
            input: {
              type: 'structure',
              members: {
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Accelerators: {
                  type: 'list',
                  member: {
                    shape: 'S1j'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListCustomRoutingEndpointGroups: {
            input: {
              type: 'structure',
              required: ['ListenerArn'],
              members: {
                ListenerArn: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                EndpointGroups: {
                  type: 'list',
                  member: {
                    shape: 'S1r'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListCustomRoutingListeners: {
            input: {
              type: 'structure',
              required: ['AcceleratorArn'],
              members: {
                AcceleratorArn: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Listeners: {
                  type: 'list',
                  member: {
                    shape: 'S20'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListCustomRoutingPortMappings: {
            input: {
              type: 'structure',
              required: ['AcceleratorArn'],
              members: {
                AcceleratorArn: {},
                EndpointGroupArn: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                PortMappings: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      AcceleratorPort: {
                        type: 'integer'
                      },
                      EndpointGroupArn: {},
                      EndpointId: {},
                      DestinationSocketAddress: {
                        shape: 'S46'
                      },
                      Protocols: {
                        shape: 'S1o'
                      },
                      DestinationTrafficState: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListCustomRoutingPortMappingsByDestination: {
            input: {
              type: 'structure',
              required: ['EndpointId', 'DestinationAddress'],
              members: {
                EndpointId: {},
                DestinationAddress: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                DestinationPortMappings: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      AcceleratorArn: {},
                      AcceleratorSocketAddresses: {
                        type: 'list',
                        member: {
                          shape: 'S46'
                        }
                      },
                      EndpointGroupArn: {},
                      EndpointId: {},
                      EndpointGroupRegion: {},
                      DestinationSocketAddress: {
                        shape: 'S46'
                      },
                      IpAddressType: {},
                      DestinationTrafficState: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListEndpointGroups: {
            input: {
              type: 'structure',
              required: ['ListenerArn'],
              members: {
                ListenerArn: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                EndpointGroups: {
                  type: 'list',
                  member: {
                    shape: 'S2b'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListListeners: {
            input: {
              type: 'structure',
              required: ['AcceleratorArn'],
              members: {
                AcceleratorArn: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Listeners: {
                  type: 'list',
                  member: {
                    shape: 'S2f'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListTagsForResource: {
            input: {
              type: 'structure',
              required: ['ResourceArn'],
              members: {
                ResourceArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Tags: {
                  shape: 'Sx'
                }
              }
            }
          },
          ProvisionByoipCidr: {
            input: {
              type: 'structure',
              required: ['Cidr', 'CidrAuthorizationContext'],
              members: {
                Cidr: {},
                CidrAuthorizationContext: {
                  type: 'structure',
                  required: ['Message', 'Signature'],
                  members: {
                    Message: {},
                    Signature: {}
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ByoipCidr: {
                  shape: 'Sj'
                }
              }
            }
          },
          RemoveCustomRoutingEndpoints: {
            input: {
              type: 'structure',
              required: ['EndpointIds', 'EndpointGroupArn'],
              members: {
                EndpointIds: {
                  type: 'list',
                  member: {}
                },
                EndpointGroupArn: {}
              }
            }
          },
          RemoveEndpoints: {
            input: {
              type: 'structure',
              required: ['EndpointIdentifiers', 'EndpointGroupArn'],
              members: {
                EndpointIdentifiers: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['EndpointId'],
                    members: {
                      EndpointId: {},
                      ClientIPPreservationEnabled: {
                        type: 'boolean'
                      }
                    }
                  }
                },
                EndpointGroupArn: {}
              }
            }
          },
          TagResource: {
            input: {
              type: 'structure',
              required: ['ResourceArn', 'Tags'],
              members: {
                ResourceArn: {},
                Tags: {
                  shape: 'Sx'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UntagResource: {
            input: {
              type: 'structure',
              required: ['ResourceArn', 'TagKeys'],
              members: {
                ResourceArn: {},
                TagKeys: {
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
          UpdateAccelerator: {
            input: {
              type: 'structure',
              required: ['AcceleratorArn'],
              members: {
                AcceleratorArn: {},
                Name: {},
                IpAddressType: {},
                IpAddresses: {
                  shape: 'Sv'
                },
                Enabled: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Accelerator: {
                  shape: 'S12'
                }
              }
            }
          },
          UpdateAcceleratorAttributes: {
            input: {
              type: 'structure',
              required: ['AcceleratorArn'],
              members: {
                AcceleratorArn: {},
                FlowLogsEnabled: {
                  type: 'boolean'
                },
                FlowLogsS3Bucket: {},
                FlowLogsS3Prefix: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                AcceleratorAttributes: {
                  shape: 'S2u'
                }
              }
            }
          },
          UpdateCrossAccountAttachment: {
            input: {
              type: 'structure',
              required: ['AttachmentArn'],
              members: {
                AttachmentArn: {},
                Name: {},
                AddPrincipals: {
                  shape: 'S1b'
                },
                RemovePrincipals: {
                  shape: 'S1b'
                },
                AddResources: {
                  shape: 'S1d'
                },
                RemoveResources: {
                  shape: 'S1d'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                CrossAccountAttachment: {
                  shape: 'S1g'
                }
              }
            }
          },
          UpdateCustomRoutingAccelerator: {
            input: {
              type: 'structure',
              required: ['AcceleratorArn'],
              members: {
                AcceleratorArn: {},
                Name: {},
                IpAddressType: {},
                IpAddresses: {
                  shape: 'Sv'
                },
                Enabled: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Accelerator: {
                  shape: 'S1j'
                }
              }
            }
          },
          UpdateCustomRoutingAcceleratorAttributes: {
            input: {
              type: 'structure',
              required: ['AcceleratorArn'],
              members: {
                AcceleratorArn: {},
                FlowLogsEnabled: {
                  type: 'boolean'
                },
                FlowLogsS3Bucket: {},
                FlowLogsS3Prefix: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                AcceleratorAttributes: {
                  shape: 'S31'
                }
              }
            }
          },
          UpdateCustomRoutingListener: {
            input: {
              type: 'structure',
              required: ['ListenerArn', 'PortRanges'],
              members: {
                ListenerArn: {},
                PortRanges: {
                  shape: 'S1x'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Listener: {
                  shape: 'S20'
                }
              }
            }
          },
          UpdateEndpointGroup: {
            input: {
              type: 'structure',
              required: ['EndpointGroupArn'],
              members: {
                EndpointGroupArn: {},
                EndpointConfigurations: {
                  shape: 'S9'
                },
                TrafficDialPercentage: {
                  type: 'float'
                },
                HealthCheckPort: {
                  type: 'integer'
                },
                HealthCheckProtocol: {},
                HealthCheckPath: {},
                HealthCheckIntervalSeconds: {
                  type: 'integer'
                },
                ThresholdCount: {
                  type: 'integer'
                },
                PortOverrides: {
                  shape: 'S28'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                EndpointGroup: {
                  shape: 'S2b'
                }
              }
            }
          },
          UpdateListener: {
            input: {
              type: 'structure',
              required: ['ListenerArn'],
              members: {
                ListenerArn: {},
                PortRanges: {
                  shape: 'S1x'
                },
                Protocol: {},
                ClientAffinity: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Listener: {
                  shape: 'S2f'
                }
              }
            }
          },
          WithdrawByoipCidr: {
            input: {
              type: 'structure',
              required: ['Cidr'],
              members: {
                Cidr: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ByoipCidr: {
                  shape: 'Sj'
                }
              }
            }
          }
        },
        shapes: {
          S6: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                EndpointId: {}
              }
            }
          },
          S9: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                EndpointId: {},
                Weight: {
                  type: 'integer'
                },
                ClientIPPreservationEnabled: {
                  type: 'boolean'
                },
                AttachmentArn: {}
              }
            }
          },
          Se: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                EndpointId: {},
                Weight: {
                  type: 'integer'
                },
                HealthState: {},
                HealthReason: {},
                ClientIPPreservationEnabled: {
                  type: 'boolean'
                }
              }
            }
          },
          Sj: {
            type: 'structure',
            members: {
              Cidr: {},
              State: {},
              Events: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    Message: {},
                    Timestamp: {
                      type: 'timestamp'
                    }
                  }
                }
              }
            }
          },
          Sp: {
            type: 'list',
            member: {}
          },
          Sr: {
            type: 'list',
            member: {
              type: 'integer'
            }
          },
          Sv: {
            type: 'list',
            member: {}
          },
          Sx: {
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
          S12: {
            type: 'structure',
            members: {
              AcceleratorArn: {},
              Name: {},
              IpAddressType: {},
              Enabled: {
                type: 'boolean'
              },
              IpSets: {
                shape: 'S13'
              },
              DnsName: {},
              Status: {},
              CreatedTime: {
                type: 'timestamp'
              },
              LastModifiedTime: {
                type: 'timestamp'
              },
              DualStackDnsName: {},
              Events: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    Message: {},
                    Timestamp: {
                      type: 'timestamp'
                    }
                  }
                }
              }
            }
          },
          S13: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                IpFamily: {
                  deprecated: true,
                  deprecatedMessage: 'IpFamily has been replaced by IpAddressFamily'
                },
                IpAddresses: {
                  shape: 'Sv'
                },
                IpAddressFamily: {}
              }
            }
          },
          S1b: {
            type: 'list',
            member: {}
          },
          S1d: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                EndpointId: {},
                Cidr: {},
                Region: {}
              }
            }
          },
          S1g: {
            type: 'structure',
            members: {
              AttachmentArn: {},
              Name: {},
              Principals: {
                shape: 'S1b'
              },
              Resources: {
                shape: 'S1d'
              },
              LastModifiedTime: {
                type: 'timestamp'
              },
              CreatedTime: {
                type: 'timestamp'
              }
            }
          },
          S1j: {
            type: 'structure',
            members: {
              AcceleratorArn: {},
              Name: {},
              IpAddressType: {},
              Enabled: {
                type: 'boolean'
              },
              IpSets: {
                shape: 'S13'
              },
              DnsName: {},
              Status: {},
              CreatedTime: {
                type: 'timestamp'
              },
              LastModifiedTime: {
                type: 'timestamp'
              }
            }
          },
          S1o: {
            type: 'list',
            member: {}
          },
          S1r: {
            type: 'structure',
            members: {
              EndpointGroupArn: {},
              EndpointGroupRegion: {},
              DestinationDescriptions: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    FromPort: {
                      type: 'integer'
                    },
                    ToPort: {
                      type: 'integer'
                    },
                    Protocols: {
                      type: 'list',
                      member: {}
                    }
                  }
                }
              },
              EndpointDescriptions: {
                shape: 'S6'
              }
            }
          },
          S1x: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                FromPort: {
                  type: 'integer'
                },
                ToPort: {
                  type: 'integer'
                }
              }
            }
          },
          S20: {
            type: 'structure',
            members: {
              ListenerArn: {},
              PortRanges: {
                shape: 'S1x'
              }
            }
          },
          S28: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                ListenerPort: {
                  type: 'integer'
                },
                EndpointPort: {
                  type: 'integer'
                }
              }
            }
          },
          S2b: {
            type: 'structure',
            members: {
              EndpointGroupArn: {},
              EndpointGroupRegion: {},
              EndpointDescriptions: {
                shape: 'Se'
              },
              TrafficDialPercentage: {
                type: 'float'
              },
              HealthCheckPort: {
                type: 'integer'
              },
              HealthCheckProtocol: {},
              HealthCheckPath: {},
              HealthCheckIntervalSeconds: {
                type: 'integer'
              },
              ThresholdCount: {
                type: 'integer'
              },
              PortOverrides: {
                shape: 'S28'
              }
            }
          },
          S2f: {
            type: 'structure',
            members: {
              ListenerArn: {},
              PortRanges: {
                shape: 'S1x'
              },
              Protocol: {},
              ClientAffinity: {}
            }
          },
          S2u: {
            type: 'structure',
            members: {
              FlowLogsEnabled: {
                type: 'boolean'
              },
              FlowLogsS3Bucket: {},
              FlowLogsS3Prefix: {}
            }
          },
          S31: {
            type: 'structure',
            members: {
              FlowLogsEnabled: {
                type: 'boolean'
              },
              FlowLogsS3Bucket: {},
              FlowLogsS3Prefix: {}
            }
          },
          S46: {
            type: 'structure',
            members: {
              IpAddress: {},
              Port: {
                type: 'integer'
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=d2e18bc898d9d02a89cb85c5336e64cbbdd3193a.js.map