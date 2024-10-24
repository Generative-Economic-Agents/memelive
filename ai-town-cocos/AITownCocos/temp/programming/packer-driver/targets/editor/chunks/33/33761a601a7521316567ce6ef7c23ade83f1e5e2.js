System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2012-10-25',
          endpointPrefix: 'directconnect',
          jsonVersion: '1.1',
          protocol: 'json',
          serviceFullName: 'AWS Direct Connect',
          serviceId: 'Direct Connect',
          signatureVersion: 'v4',
          targetPrefix: 'OvertureService',
          uid: 'directconnect-2012-10-25'
        },
        operations: {
          AcceptDirectConnectGatewayAssociationProposal: {
            input: {
              type: 'structure',
              required: ['directConnectGatewayId', 'proposalId', 'associatedGatewayOwnerAccount'],
              members: {
                directConnectGatewayId: {},
                proposalId: {},
                associatedGatewayOwnerAccount: {},
                overrideAllowedPrefixesToDirectConnectGateway: {
                  shape: 'S5'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                directConnectGatewayAssociation: {
                  shape: 'S9'
                }
              }
            }
          },
          AllocateConnectionOnInterconnect: {
            input: {
              type: 'structure',
              required: ['bandwidth', 'connectionName', 'ownerAccount', 'interconnectId', 'vlan'],
              members: {
                bandwidth: {},
                connectionName: {},
                ownerAccount: {},
                interconnectId: {},
                vlan: {
                  type: 'integer'
                }
              }
            },
            output: {
              shape: 'So'
            },
            deprecated: true
          },
          AllocateHostedConnection: {
            input: {
              type: 'structure',
              required: ['connectionId', 'ownerAccount', 'bandwidth', 'connectionName', 'vlan'],
              members: {
                connectionId: {},
                ownerAccount: {},
                bandwidth: {},
                connectionName: {},
                vlan: {
                  type: 'integer'
                },
                tags: {
                  shape: 'S10'
                }
              }
            },
            output: {
              shape: 'So'
            }
          },
          AllocatePrivateVirtualInterface: {
            input: {
              type: 'structure',
              required: ['connectionId', 'ownerAccount', 'newPrivateVirtualInterfaceAllocation'],
              members: {
                connectionId: {},
                ownerAccount: {},
                newPrivateVirtualInterfaceAllocation: {
                  type: 'structure',
                  required: ['virtualInterfaceName', 'vlan', 'asn'],
                  members: {
                    virtualInterfaceName: {},
                    vlan: {
                      type: 'integer'
                    },
                    asn: {
                      type: 'integer'
                    },
                    mtu: {
                      type: 'integer'
                    },
                    authKey: {},
                    amazonAddress: {},
                    addressFamily: {},
                    customerAddress: {},
                    tags: {
                      shape: 'S10'
                    }
                  }
                }
              }
            },
            output: {
              shape: 'S1o'
            }
          },
          AllocatePublicVirtualInterface: {
            input: {
              type: 'structure',
              required: ['connectionId', 'ownerAccount', 'newPublicVirtualInterfaceAllocation'],
              members: {
                connectionId: {},
                ownerAccount: {},
                newPublicVirtualInterfaceAllocation: {
                  type: 'structure',
                  required: ['virtualInterfaceName', 'vlan', 'asn'],
                  members: {
                    virtualInterfaceName: {},
                    vlan: {
                      type: 'integer'
                    },
                    asn: {
                      type: 'integer'
                    },
                    authKey: {},
                    amazonAddress: {},
                    customerAddress: {},
                    addressFamily: {},
                    routeFilterPrefixes: {
                      shape: 'S5'
                    },
                    tags: {
                      shape: 'S10'
                    }
                  }
                }
              }
            },
            output: {
              shape: 'S1o'
            }
          },
          AllocateTransitVirtualInterface: {
            input: {
              type: 'structure',
              required: ['connectionId', 'ownerAccount', 'newTransitVirtualInterfaceAllocation'],
              members: {
                connectionId: {},
                ownerAccount: {},
                newTransitVirtualInterfaceAllocation: {
                  type: 'structure',
                  members: {
                    virtualInterfaceName: {},
                    vlan: {
                      type: 'integer'
                    },
                    asn: {
                      type: 'integer'
                    },
                    mtu: {
                      type: 'integer'
                    },
                    authKey: {},
                    amazonAddress: {},
                    customerAddress: {},
                    addressFamily: {},
                    tags: {
                      shape: 'S10'
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                virtualInterface: {
                  shape: 'S1o'
                }
              }
            }
          },
          AssociateConnectionWithLag: {
            input: {
              type: 'structure',
              required: ['connectionId', 'lagId'],
              members: {
                connectionId: {},
                lagId: {}
              }
            },
            output: {
              shape: 'So'
            }
          },
          AssociateHostedConnection: {
            input: {
              type: 'structure',
              required: ['connectionId', 'parentConnectionId'],
              members: {
                connectionId: {},
                parentConnectionId: {}
              }
            },
            output: {
              shape: 'So'
            }
          },
          AssociateMacSecKey: {
            input: {
              type: 'structure',
              required: ['connectionId'],
              members: {
                connectionId: {},
                secretARN: {},
                ckn: {},
                cak: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                connectionId: {},
                macSecKeys: {
                  shape: 'S18'
                }
              }
            }
          },
          AssociateVirtualInterface: {
            input: {
              type: 'structure',
              required: ['virtualInterfaceId', 'connectionId'],
              members: {
                virtualInterfaceId: {},
                connectionId: {}
              }
            },
            output: {
              shape: 'S1o'
            }
          },
          ConfirmConnection: {
            input: {
              type: 'structure',
              required: ['connectionId'],
              members: {
                connectionId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                connectionState: {}
              }
            }
          },
          ConfirmCustomerAgreement: {
            input: {
              type: 'structure',
              members: {
                agreementName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                status: {}
              }
            }
          },
          ConfirmPrivateVirtualInterface: {
            input: {
              type: 'structure',
              required: ['virtualInterfaceId'],
              members: {
                virtualInterfaceId: {},
                virtualGatewayId: {},
                directConnectGatewayId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                virtualInterfaceState: {}
              }
            }
          },
          ConfirmPublicVirtualInterface: {
            input: {
              type: 'structure',
              required: ['virtualInterfaceId'],
              members: {
                virtualInterfaceId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                virtualInterfaceState: {}
              }
            }
          },
          ConfirmTransitVirtualInterface: {
            input: {
              type: 'structure',
              required: ['virtualInterfaceId', 'directConnectGatewayId'],
              members: {
                virtualInterfaceId: {},
                directConnectGatewayId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                virtualInterfaceState: {}
              }
            }
          },
          CreateBGPPeer: {
            input: {
              type: 'structure',
              members: {
                virtualInterfaceId: {},
                newBGPPeer: {
                  type: 'structure',
                  members: {
                    asn: {
                      type: 'integer'
                    },
                    authKey: {},
                    addressFamily: {},
                    amazonAddress: {},
                    customerAddress: {}
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                virtualInterface: {
                  shape: 'S1o'
                }
              }
            }
          },
          CreateConnection: {
            input: {
              type: 'structure',
              required: ['location', 'bandwidth', 'connectionName'],
              members: {
                location: {},
                bandwidth: {},
                connectionName: {},
                lagId: {},
                tags: {
                  shape: 'S10'
                },
                providerName: {},
                requestMACSec: {
                  type: 'boolean'
                }
              }
            },
            output: {
              shape: 'So'
            }
          },
          CreateDirectConnectGateway: {
            input: {
              type: 'structure',
              required: ['directConnectGatewayName'],
              members: {
                directConnectGatewayName: {},
                amazonSideAsn: {
                  type: 'long'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                directConnectGateway: {
                  shape: 'S2v'
                }
              }
            }
          },
          CreateDirectConnectGatewayAssociation: {
            input: {
              type: 'structure',
              required: ['directConnectGatewayId'],
              members: {
                directConnectGatewayId: {},
                gatewayId: {},
                addAllowedPrefixesToDirectConnectGateway: {
                  shape: 'S5'
                },
                virtualGatewayId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                directConnectGatewayAssociation: {
                  shape: 'S9'
                }
              }
            }
          },
          CreateDirectConnectGatewayAssociationProposal: {
            input: {
              type: 'structure',
              required: ['directConnectGatewayId', 'directConnectGatewayOwnerAccount', 'gatewayId'],
              members: {
                directConnectGatewayId: {},
                directConnectGatewayOwnerAccount: {},
                gatewayId: {},
                addAllowedPrefixesToDirectConnectGateway: {
                  shape: 'S5'
                },
                removeAllowedPrefixesToDirectConnectGateway: {
                  shape: 'S5'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                directConnectGatewayAssociationProposal: {
                  shape: 'S32'
                }
              }
            }
          },
          CreateInterconnect: {
            input: {
              type: 'structure',
              required: ['interconnectName', 'bandwidth', 'location'],
              members: {
                interconnectName: {},
                bandwidth: {},
                location: {},
                lagId: {},
                tags: {
                  shape: 'S10'
                },
                providerName: {}
              }
            },
            output: {
              shape: 'S36'
            }
          },
          CreateLag: {
            input: {
              type: 'structure',
              required: ['numberOfConnections', 'location', 'connectionsBandwidth', 'lagName'],
              members: {
                numberOfConnections: {
                  type: 'integer'
                },
                location: {},
                connectionsBandwidth: {},
                lagName: {},
                connectionId: {},
                tags: {
                  shape: 'S10'
                },
                childConnectionTags: {
                  shape: 'S10'
                },
                providerName: {},
                requestMACSec: {
                  type: 'boolean'
                }
              }
            },
            output: {
              shape: 'S3b'
            }
          },
          CreatePrivateVirtualInterface: {
            input: {
              type: 'structure',
              required: ['connectionId', 'newPrivateVirtualInterface'],
              members: {
                connectionId: {},
                newPrivateVirtualInterface: {
                  type: 'structure',
                  required: ['virtualInterfaceName', 'vlan', 'asn'],
                  members: {
                    virtualInterfaceName: {},
                    vlan: {
                      type: 'integer'
                    },
                    asn: {
                      type: 'integer'
                    },
                    mtu: {
                      type: 'integer'
                    },
                    authKey: {},
                    amazonAddress: {},
                    customerAddress: {},
                    addressFamily: {},
                    virtualGatewayId: {},
                    directConnectGatewayId: {},
                    tags: {
                      shape: 'S10'
                    },
                    enableSiteLink: {
                      type: 'boolean'
                    }
                  }
                }
              }
            },
            output: {
              shape: 'S1o'
            }
          },
          CreatePublicVirtualInterface: {
            input: {
              type: 'structure',
              required: ['connectionId', 'newPublicVirtualInterface'],
              members: {
                connectionId: {},
                newPublicVirtualInterface: {
                  type: 'structure',
                  required: ['virtualInterfaceName', 'vlan', 'asn'],
                  members: {
                    virtualInterfaceName: {},
                    vlan: {
                      type: 'integer'
                    },
                    asn: {
                      type: 'integer'
                    },
                    authKey: {},
                    amazonAddress: {},
                    customerAddress: {},
                    addressFamily: {},
                    routeFilterPrefixes: {
                      shape: 'S5'
                    },
                    tags: {
                      shape: 'S10'
                    }
                  }
                }
              }
            },
            output: {
              shape: 'S1o'
            }
          },
          CreateTransitVirtualInterface: {
            input: {
              type: 'structure',
              required: ['connectionId', 'newTransitVirtualInterface'],
              members: {
                connectionId: {},
                newTransitVirtualInterface: {
                  type: 'structure',
                  members: {
                    virtualInterfaceName: {},
                    vlan: {
                      type: 'integer'
                    },
                    asn: {
                      type: 'integer'
                    },
                    mtu: {
                      type: 'integer'
                    },
                    authKey: {},
                    amazonAddress: {},
                    customerAddress: {},
                    addressFamily: {},
                    directConnectGatewayId: {},
                    tags: {
                      shape: 'S10'
                    },
                    enableSiteLink: {
                      type: 'boolean'
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                virtualInterface: {
                  shape: 'S1o'
                }
              }
            }
          },
          DeleteBGPPeer: {
            input: {
              type: 'structure',
              members: {
                virtualInterfaceId: {},
                asn: {
                  type: 'integer'
                },
                customerAddress: {},
                bgpPeerId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                virtualInterface: {
                  shape: 'S1o'
                }
              }
            }
          },
          DeleteConnection: {
            input: {
              type: 'structure',
              required: ['connectionId'],
              members: {
                connectionId: {}
              }
            },
            output: {
              shape: 'So'
            }
          },
          DeleteDirectConnectGateway: {
            input: {
              type: 'structure',
              required: ['directConnectGatewayId'],
              members: {
                directConnectGatewayId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                directConnectGateway: {
                  shape: 'S2v'
                }
              }
            }
          },
          DeleteDirectConnectGatewayAssociation: {
            input: {
              type: 'structure',
              members: {
                associationId: {},
                directConnectGatewayId: {},
                virtualGatewayId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                directConnectGatewayAssociation: {
                  shape: 'S9'
                }
              }
            }
          },
          DeleteDirectConnectGatewayAssociationProposal: {
            input: {
              type: 'structure',
              required: ['proposalId'],
              members: {
                proposalId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                directConnectGatewayAssociationProposal: {
                  shape: 'S32'
                }
              }
            }
          },
          DeleteInterconnect: {
            input: {
              type: 'structure',
              required: ['interconnectId'],
              members: {
                interconnectId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                interconnectState: {}
              }
            }
          },
          DeleteLag: {
            input: {
              type: 'structure',
              required: ['lagId'],
              members: {
                lagId: {}
              }
            },
            output: {
              shape: 'S3b'
            }
          },
          DeleteVirtualInterface: {
            input: {
              type: 'structure',
              required: ['virtualInterfaceId'],
              members: {
                virtualInterfaceId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                virtualInterfaceState: {}
              }
            }
          },
          DescribeConnectionLoa: {
            input: {
              type: 'structure',
              required: ['connectionId'],
              members: {
                connectionId: {},
                providerName: {},
                loaContentType: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                loa: {
                  shape: 'S44'
                }
              }
            },
            deprecated: true
          },
          DescribeConnections: {
            input: {
              type: 'structure',
              members: {
                connectionId: {}
              }
            },
            output: {
              shape: 'S47'
            }
          },
          DescribeConnectionsOnInterconnect: {
            input: {
              type: 'structure',
              required: ['interconnectId'],
              members: {
                interconnectId: {}
              }
            },
            output: {
              shape: 'S47'
            },
            deprecated: true
          },
          DescribeCustomerMetadata: {
            output: {
              type: 'structure',
              members: {
                agreements: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      agreementName: {},
                      status: {}
                    }
                  }
                },
                nniPartnerType: {}
              }
            }
          },
          DescribeDirectConnectGatewayAssociationProposals: {
            input: {
              type: 'structure',
              members: {
                directConnectGatewayId: {},
                proposalId: {},
                associatedGatewayId: {},
                maxResults: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                directConnectGatewayAssociationProposals: {
                  type: 'list',
                  member: {
                    shape: 'S32'
                  }
                },
                nextToken: {}
              }
            }
          },
          DescribeDirectConnectGatewayAssociations: {
            input: {
              type: 'structure',
              members: {
                associationId: {},
                associatedGatewayId: {},
                directConnectGatewayId: {},
                maxResults: {
                  type: 'integer'
                },
                nextToken: {},
                virtualGatewayId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                directConnectGatewayAssociations: {
                  type: 'list',
                  member: {
                    shape: 'S9'
                  }
                },
                nextToken: {}
              }
            }
          },
          DescribeDirectConnectGatewayAttachments: {
            input: {
              type: 'structure',
              members: {
                directConnectGatewayId: {},
                virtualInterfaceId: {},
                maxResults: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                directConnectGatewayAttachments: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      directConnectGatewayId: {},
                      virtualInterfaceId: {},
                      virtualInterfaceRegion: {},
                      virtualInterfaceOwnerAccount: {},
                      attachmentState: {},
                      attachmentType: {},
                      stateChangeError: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          DescribeDirectConnectGateways: {
            input: {
              type: 'structure',
              members: {
                directConnectGatewayId: {},
                maxResults: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                directConnectGateways: {
                  type: 'list',
                  member: {
                    shape: 'S2v'
                  }
                },
                nextToken: {}
              }
            }
          },
          DescribeHostedConnections: {
            input: {
              type: 'structure',
              required: ['connectionId'],
              members: {
                connectionId: {}
              }
            },
            output: {
              shape: 'S47'
            }
          },
          DescribeInterconnectLoa: {
            input: {
              type: 'structure',
              required: ['interconnectId'],
              members: {
                interconnectId: {},
                providerName: {},
                loaContentType: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                loa: {
                  shape: 'S44'
                }
              }
            },
            deprecated: true
          },
          DescribeInterconnects: {
            input: {
              type: 'structure',
              members: {
                interconnectId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                interconnects: {
                  type: 'list',
                  member: {
                    shape: 'S36'
                  }
                }
              }
            }
          },
          DescribeLags: {
            input: {
              type: 'structure',
              members: {
                lagId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                lags: {
                  type: 'list',
                  member: {
                    shape: 'S3b'
                  }
                }
              }
            }
          },
          DescribeLoa: {
            input: {
              type: 'structure',
              required: ['connectionId'],
              members: {
                connectionId: {},
                providerName: {},
                loaContentType: {}
              }
            },
            output: {
              shape: 'S44'
            }
          },
          DescribeLocations: {
            output: {
              type: 'structure',
              members: {
                locations: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      locationCode: {},
                      locationName: {},
                      region: {},
                      availablePortSpeeds: {
                        type: 'list',
                        member: {}
                      },
                      availableProviders: {
                        type: 'list',
                        member: {}
                      },
                      availableMacSecPortSpeeds: {
                        type: 'list',
                        member: {}
                      }
                    }
                  }
                }
              }
            }
          },
          DescribeRouterConfiguration: {
            input: {
              type: 'structure',
              required: ['virtualInterfaceId'],
              members: {
                virtualInterfaceId: {},
                routerTypeIdentifier: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                customerRouterConfig: {},
                router: {
                  type: 'structure',
                  members: {
                    vendor: {},
                    platform: {},
                    software: {},
                    xsltTemplateName: {},
                    xsltTemplateNameForMacSec: {},
                    routerTypeIdentifier: {}
                  }
                },
                virtualInterfaceId: {},
                virtualInterfaceName: {}
              }
            }
          },
          DescribeTags: {
            input: {
              type: 'structure',
              required: ['resourceArns'],
              members: {
                resourceArns: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                resourceTags: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      resourceArn: {},
                      tags: {
                        shape: 'S10'
                      }
                    }
                  }
                }
              }
            }
          },
          DescribeVirtualGateways: {
            output: {
              type: 'structure',
              members: {
                virtualGateways: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      virtualGatewayId: {},
                      virtualGatewayState: {}
                    }
                  }
                }
              }
            }
          },
          DescribeVirtualInterfaces: {
            input: {
              type: 'structure',
              members: {
                connectionId: {},
                virtualInterfaceId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                virtualInterfaces: {
                  type: 'list',
                  member: {
                    shape: 'S1o'
                  }
                }
              }
            }
          },
          DisassociateConnectionFromLag: {
            input: {
              type: 'structure',
              required: ['connectionId', 'lagId'],
              members: {
                connectionId: {},
                lagId: {}
              }
            },
            output: {
              shape: 'So'
            }
          },
          DisassociateMacSecKey: {
            input: {
              type: 'structure',
              required: ['connectionId', 'secretARN'],
              members: {
                connectionId: {},
                secretARN: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                connectionId: {},
                macSecKeys: {
                  shape: 'S18'
                }
              }
            }
          },
          ListVirtualInterfaceTestHistory: {
            input: {
              type: 'structure',
              members: {
                testId: {},
                virtualInterfaceId: {},
                bgpPeers: {
                  shape: 'S65'
                },
                status: {},
                maxResults: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                virtualInterfaceTestHistory: {
                  type: 'list',
                  member: {
                    shape: 'S69'
                  }
                },
                nextToken: {}
              }
            }
          },
          StartBgpFailoverTest: {
            input: {
              type: 'structure',
              required: ['virtualInterfaceId'],
              members: {
                virtualInterfaceId: {},
                bgpPeers: {
                  shape: 'S65'
                },
                testDurationInMinutes: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                virtualInterfaceTest: {
                  shape: 'S69'
                }
              }
            }
          },
          StopBgpFailoverTest: {
            input: {
              type: 'structure',
              required: ['virtualInterfaceId'],
              members: {
                virtualInterfaceId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                virtualInterfaceTest: {
                  shape: 'S69'
                }
              }
            }
          },
          TagResource: {
            input: {
              type: 'structure',
              required: ['resourceArn', 'tags'],
              members: {
                resourceArn: {},
                tags: {
                  shape: 'S10'
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
              required: ['resourceArn', 'tagKeys'],
              members: {
                resourceArn: {},
                tagKeys: {
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
          UpdateConnection: {
            input: {
              type: 'structure',
              required: ['connectionId'],
              members: {
                connectionId: {},
                connectionName: {},
                encryptionMode: {}
              }
            },
            output: {
              shape: 'So'
            }
          },
          UpdateDirectConnectGateway: {
            input: {
              type: 'structure',
              required: ['directConnectGatewayId', 'newDirectConnectGatewayName'],
              members: {
                directConnectGatewayId: {},
                newDirectConnectGatewayName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                directConnectGateway: {
                  shape: 'S2v'
                }
              }
            }
          },
          UpdateDirectConnectGatewayAssociation: {
            input: {
              type: 'structure',
              members: {
                associationId: {},
                addAllowedPrefixesToDirectConnectGateway: {
                  shape: 'S5'
                },
                removeAllowedPrefixesToDirectConnectGateway: {
                  shape: 'S5'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                directConnectGatewayAssociation: {
                  shape: 'S9'
                }
              }
            }
          },
          UpdateLag: {
            input: {
              type: 'structure',
              required: ['lagId'],
              members: {
                lagId: {},
                lagName: {},
                minimumLinks: {
                  type: 'integer'
                },
                encryptionMode: {}
              }
            },
            output: {
              shape: 'S3b'
            }
          },
          UpdateVirtualInterfaceAttributes: {
            input: {
              type: 'structure',
              required: ['virtualInterfaceId'],
              members: {
                virtualInterfaceId: {},
                mtu: {
                  type: 'integer'
                },
                enableSiteLink: {
                  type: 'boolean'
                },
                virtualInterfaceName: {}
              }
            },
            output: {
              shape: 'S1o'
            }
          }
        },
        shapes: {
          S5: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                cidr: {}
              }
            }
          },
          S9: {
            type: 'structure',
            members: {
              directConnectGatewayId: {},
              directConnectGatewayOwnerAccount: {},
              associationState: {},
              stateChangeError: {},
              associatedGateway: {
                shape: 'Sc'
              },
              associationId: {},
              allowedPrefixesToDirectConnectGateway: {
                shape: 'S5'
              },
              virtualGatewayId: {},
              virtualGatewayRegion: {
                type: 'string',
                deprecated: true
              },
              virtualGatewayOwnerAccount: {}
            }
          },
          Sc: {
            type: 'structure',
            members: {
              id: {},
              type: {},
              ownerAccount: {},
              region: {}
            }
          },
          So: {
            type: 'structure',
            members: {
              ownerAccount: {},
              connectionId: {},
              connectionName: {},
              connectionState: {},
              region: {},
              location: {},
              bandwidth: {},
              vlan: {
                type: 'integer'
              },
              partnerName: {},
              loaIssueTime: {
                type: 'timestamp'
              },
              lagId: {},
              awsDevice: {
                shape: 'Sv'
              },
              jumboFrameCapable: {
                type: 'boolean'
              },
              awsDeviceV2: {},
              awsLogicalDeviceId: {},
              hasLogicalRedundancy: {},
              tags: {
                shape: 'S10'
              },
              providerName: {},
              macSecCapable: {
                type: 'boolean'
              },
              portEncryptionStatus: {},
              encryptionMode: {},
              macSecKeys: {
                shape: 'S18'
              }
            }
          },
          Sv: {
            type: 'string',
            deprecated: true
          },
          S10: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['key'],
              members: {
                key: {},
                value: {}
              }
            }
          },
          S18: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                secretARN: {},
                ckn: {},
                state: {},
                startOn: {}
              }
            }
          },
          S1o: {
            type: 'structure',
            members: {
              ownerAccount: {},
              virtualInterfaceId: {},
              location: {},
              connectionId: {},
              virtualInterfaceType: {},
              virtualInterfaceName: {},
              vlan: {
                type: 'integer'
              },
              asn: {
                type: 'integer'
              },
              amazonSideAsn: {
                type: 'long'
              },
              authKey: {},
              amazonAddress: {},
              customerAddress: {},
              addressFamily: {},
              virtualInterfaceState: {},
              customerRouterConfig: {},
              mtu: {
                type: 'integer'
              },
              jumboFrameCapable: {
                type: 'boolean'
              },
              virtualGatewayId: {},
              directConnectGatewayId: {},
              routeFilterPrefixes: {
                shape: 'S5'
              },
              bgpPeers: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    bgpPeerId: {},
                    asn: {
                      type: 'integer'
                    },
                    authKey: {},
                    addressFamily: {},
                    amazonAddress: {},
                    customerAddress: {},
                    bgpPeerState: {},
                    bgpStatus: {},
                    awsDeviceV2: {},
                    awsLogicalDeviceId: {}
                  }
                }
              },
              region: {},
              awsDeviceV2: {},
              awsLogicalDeviceId: {},
              tags: {
                shape: 'S10'
              },
              siteLinkEnabled: {
                type: 'boolean'
              }
            }
          },
          S2v: {
            type: 'structure',
            members: {
              directConnectGatewayId: {},
              directConnectGatewayName: {},
              amazonSideAsn: {
                type: 'long'
              },
              ownerAccount: {},
              directConnectGatewayState: {},
              stateChangeError: {}
            }
          },
          S32: {
            type: 'structure',
            members: {
              proposalId: {},
              directConnectGatewayId: {},
              directConnectGatewayOwnerAccount: {},
              proposalState: {},
              associatedGateway: {
                shape: 'Sc'
              },
              existingAllowedPrefixesToDirectConnectGateway: {
                shape: 'S5'
              },
              requestedAllowedPrefixesToDirectConnectGateway: {
                shape: 'S5'
              }
            }
          },
          S36: {
            type: 'structure',
            members: {
              interconnectId: {},
              interconnectName: {},
              interconnectState: {},
              region: {},
              location: {},
              bandwidth: {},
              loaIssueTime: {
                type: 'timestamp'
              },
              lagId: {},
              awsDevice: {
                shape: 'Sv'
              },
              jumboFrameCapable: {
                type: 'boolean'
              },
              awsDeviceV2: {},
              awsLogicalDeviceId: {},
              hasLogicalRedundancy: {},
              tags: {
                shape: 'S10'
              },
              providerName: {}
            }
          },
          S3b: {
            type: 'structure',
            members: {
              connectionsBandwidth: {},
              numberOfConnections: {
                type: 'integer'
              },
              lagId: {},
              ownerAccount: {},
              lagName: {},
              lagState: {},
              location: {},
              region: {},
              minimumLinks: {
                type: 'integer'
              },
              awsDevice: {
                shape: 'Sv'
              },
              awsDeviceV2: {},
              awsLogicalDeviceId: {},
              connections: {
                shape: 'S3d'
              },
              allowsHostedConnections: {
                type: 'boolean'
              },
              jumboFrameCapable: {
                type: 'boolean'
              },
              hasLogicalRedundancy: {},
              tags: {
                shape: 'S10'
              },
              providerName: {},
              macSecCapable: {
                type: 'boolean'
              },
              encryptionMode: {},
              macSecKeys: {
                shape: 'S18'
              }
            }
          },
          S3d: {
            type: 'list',
            member: {
              shape: 'So'
            }
          },
          S44: {
            type: 'structure',
            members: {
              loaContent: {
                type: 'blob'
              },
              loaContentType: {}
            }
          },
          S47: {
            type: 'structure',
            members: {
              connections: {
                shape: 'S3d'
              }
            }
          },
          S65: {
            type: 'list',
            member: {}
          },
          S69: {
            type: 'structure',
            members: {
              testId: {},
              virtualInterfaceId: {},
              bgpPeers: {
                shape: 'S65'
              },
              status: {},
              ownerAccount: {},
              testDurationInMinutes: {
                type: 'integer'
              },
              startTime: {
                type: 'timestamp'
              },
              endTime: {
                type: 'timestamp'
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=33761a601a7521316567ce6ef7c23ade83f1e5e2.js.map