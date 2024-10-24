System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2019-07-05',
          endpointPrefix: 'networkmanager',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceAbbreviation: 'NetworkManager',
          serviceFullName: 'AWS Network Manager',
          serviceId: 'NetworkManager',
          signatureVersion: 'v4',
          signingName: 'networkmanager',
          uid: 'networkmanager-2019-07-05'
        },
        operations: {
          AcceptAttachment: {
            http: {
              requestUri: '/attachments/{attachmentId}/accept'
            },
            input: {
              type: 'structure',
              required: ['AttachmentId'],
              members: {
                AttachmentId: {
                  location: 'uri',
                  locationName: 'attachmentId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Attachment: {
                  shape: 'S4'
                }
              }
            }
          },
          AssociateConnectPeer: {
            http: {
              requestUri: '/global-networks/{globalNetworkId}/connect-peer-associations'
            },
            input: {
              type: 'structure',
              required: ['GlobalNetworkId', 'ConnectPeerId', 'DeviceId'],
              members: {
                GlobalNetworkId: {
                  location: 'uri',
                  locationName: 'globalNetworkId'
                },
                ConnectPeerId: {},
                DeviceId: {},
                LinkId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ConnectPeerAssociation: {
                  shape: 'Sq'
                }
              }
            }
          },
          AssociateCustomerGateway: {
            http: {
              requestUri: '/global-networks/{globalNetworkId}/customer-gateway-associations'
            },
            input: {
              type: 'structure',
              required: ['CustomerGatewayArn', 'GlobalNetworkId', 'DeviceId'],
              members: {
                CustomerGatewayArn: {},
                GlobalNetworkId: {
                  location: 'uri',
                  locationName: 'globalNetworkId'
                },
                DeviceId: {},
                LinkId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                CustomerGatewayAssociation: {
                  shape: 'Sv'
                }
              }
            }
          },
          AssociateLink: {
            http: {
              requestUri: '/global-networks/{globalNetworkId}/link-associations'
            },
            input: {
              type: 'structure',
              required: ['GlobalNetworkId', 'DeviceId', 'LinkId'],
              members: {
                GlobalNetworkId: {
                  location: 'uri',
                  locationName: 'globalNetworkId'
                },
                DeviceId: {},
                LinkId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                LinkAssociation: {
                  shape: 'Sz'
                }
              }
            }
          },
          AssociateTransitGatewayConnectPeer: {
            http: {
              requestUri: '/global-networks/{globalNetworkId}/transit-gateway-connect-peer-associations'
            },
            input: {
              type: 'structure',
              required: ['GlobalNetworkId', 'TransitGatewayConnectPeerArn', 'DeviceId'],
              members: {
                GlobalNetworkId: {
                  location: 'uri',
                  locationName: 'globalNetworkId'
                },
                TransitGatewayConnectPeerArn: {},
                DeviceId: {},
                LinkId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                TransitGatewayConnectPeerAssociation: {
                  shape: 'S14'
                }
              }
            }
          },
          CreateConnectAttachment: {
            http: {
              requestUri: '/connect-attachments'
            },
            input: {
              type: 'structure',
              required: ['CoreNetworkId', 'EdgeLocation', 'TransportAttachmentId', 'Options'],
              members: {
                CoreNetworkId: {},
                EdgeLocation: {},
                TransportAttachmentId: {},
                Options: {
                  shape: 'S17'
                },
                Tags: {
                  shape: 'Se'
                },
                ClientToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ConnectAttachment: {
                  shape: 'S1b'
                }
              }
            }
          },
          CreateConnectPeer: {
            http: {
              requestUri: '/connect-peers'
            },
            input: {
              type: 'structure',
              required: ['ConnectAttachmentId', 'PeerAddress'],
              members: {
                ConnectAttachmentId: {},
                CoreNetworkAddress: {},
                PeerAddress: {},
                BgpOptions: {
                  type: 'structure',
                  members: {
                    PeerAsn: {
                      type: 'long'
                    }
                  }
                },
                InsideCidrBlocks: {
                  shape: 'S1g'
                },
                Tags: {
                  shape: 'Se'
                },
                ClientToken: {
                  idempotencyToken: true
                },
                SubnetArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ConnectPeer: {
                  shape: 'S1j'
                }
              }
            }
          },
          CreateConnection: {
            http: {
              requestUri: '/global-networks/{globalNetworkId}/connections'
            },
            input: {
              type: 'structure',
              required: ['GlobalNetworkId', 'DeviceId', 'ConnectedDeviceId'],
              members: {
                GlobalNetworkId: {
                  location: 'uri',
                  locationName: 'globalNetworkId'
                },
                DeviceId: {},
                ConnectedDeviceId: {},
                LinkId: {},
                ConnectedLinkId: {},
                Description: {},
                Tags: {
                  shape: 'Se'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Connection: {
                  shape: 'S1q'
                }
              }
            }
          },
          CreateCoreNetwork: {
            http: {
              requestUri: '/core-networks'
            },
            input: {
              type: 'structure',
              required: ['GlobalNetworkId'],
              members: {
                GlobalNetworkId: {},
                Description: {},
                Tags: {
                  shape: 'Se'
                },
                PolicyDocument: {},
                ClientToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                CoreNetwork: {
                  shape: 'S1x'
                }
              }
            }
          },
          CreateDevice: {
            http: {
              requestUri: '/global-networks/{globalNetworkId}/devices'
            },
            input: {
              type: 'structure',
              required: ['GlobalNetworkId'],
              members: {
                GlobalNetworkId: {
                  location: 'uri',
                  locationName: 'globalNetworkId'
                },
                AWSLocation: {
                  shape: 'S25'
                },
                Description: {},
                Type: {},
                Vendor: {},
                Model: {},
                SerialNumber: {},
                Location: {
                  shape: 'S26'
                },
                SiteId: {},
                Tags: {
                  shape: 'Se'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Device: {
                  shape: 'S29'
                }
              }
            }
          },
          CreateGlobalNetwork: {
            http: {
              requestUri: '/global-networks'
            },
            input: {
              type: 'structure',
              members: {
                Description: {},
                Tags: {
                  shape: 'Se'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                GlobalNetwork: {
                  shape: 'S2e'
                }
              }
            }
          },
          CreateLink: {
            http: {
              requestUri: '/global-networks/{globalNetworkId}/links'
            },
            input: {
              type: 'structure',
              required: ['GlobalNetworkId', 'Bandwidth', 'SiteId'],
              members: {
                GlobalNetworkId: {
                  location: 'uri',
                  locationName: 'globalNetworkId'
                },
                Description: {},
                Type: {},
                Bandwidth: {
                  shape: 'S2i'
                },
                Provider: {},
                SiteId: {},
                Tags: {
                  shape: 'Se'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Link: {
                  shape: 'S2k'
                }
              }
            }
          },
          CreateSite: {
            http: {
              requestUri: '/global-networks/{globalNetworkId}/sites'
            },
            input: {
              type: 'structure',
              required: ['GlobalNetworkId'],
              members: {
                GlobalNetworkId: {
                  location: 'uri',
                  locationName: 'globalNetworkId'
                },
                Description: {},
                Location: {
                  shape: 'S26'
                },
                Tags: {
                  shape: 'Se'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Site: {
                  shape: 'S2p'
                }
              }
            }
          },
          CreateSiteToSiteVpnAttachment: {
            http: {
              requestUri: '/site-to-site-vpn-attachments'
            },
            input: {
              type: 'structure',
              required: ['CoreNetworkId', 'VpnConnectionArn'],
              members: {
                CoreNetworkId: {},
                VpnConnectionArn: {},
                Tags: {
                  shape: 'Se'
                },
                ClientToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                SiteToSiteVpnAttachment: {
                  shape: 'S2v'
                }
              }
            }
          },
          CreateTransitGatewayPeering: {
            http: {
              requestUri: '/transit-gateway-peerings'
            },
            input: {
              type: 'structure',
              required: ['CoreNetworkId', 'TransitGatewayArn'],
              members: {
                CoreNetworkId: {},
                TransitGatewayArn: {},
                Tags: {
                  shape: 'Se'
                },
                ClientToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                TransitGatewayPeering: {
                  shape: 'S2z'
                }
              }
            }
          },
          CreateTransitGatewayRouteTableAttachment: {
            http: {
              requestUri: '/transit-gateway-route-table-attachments'
            },
            input: {
              type: 'structure',
              required: ['PeeringId', 'TransitGatewayRouteTableArn'],
              members: {
                PeeringId: {},
                TransitGatewayRouteTableArn: {},
                Tags: {
                  shape: 'Se'
                },
                ClientToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                TransitGatewayRouteTableAttachment: {
                  shape: 'S38'
                }
              }
            }
          },
          CreateVpcAttachment: {
            http: {
              requestUri: '/vpc-attachments'
            },
            input: {
              type: 'structure',
              required: ['CoreNetworkId', 'VpcArn', 'SubnetArns'],
              members: {
                CoreNetworkId: {},
                VpcArn: {},
                SubnetArns: {
                  shape: 'S3b'
                },
                Options: {
                  shape: 'S3c'
                },
                Tags: {
                  shape: 'Se'
                },
                ClientToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                VpcAttachment: {
                  shape: 'S3f'
                }
              }
            }
          },
          DeleteAttachment: {
            http: {
              method: 'DELETE',
              requestUri: '/attachments/{attachmentId}'
            },
            input: {
              type: 'structure',
              required: ['AttachmentId'],
              members: {
                AttachmentId: {
                  location: 'uri',
                  locationName: 'attachmentId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Attachment: {
                  shape: 'S4'
                }
              }
            }
          },
          DeleteConnectPeer: {
            http: {
              method: 'DELETE',
              requestUri: '/connect-peers/{connectPeerId}'
            },
            input: {
              type: 'structure',
              required: ['ConnectPeerId'],
              members: {
                ConnectPeerId: {
                  location: 'uri',
                  locationName: 'connectPeerId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ConnectPeer: {
                  shape: 'S1j'
                }
              }
            }
          },
          DeleteConnection: {
            http: {
              method: 'DELETE',
              requestUri: '/global-networks/{globalNetworkId}/connections/{connectionId}'
            },
            input: {
              type: 'structure',
              required: ['GlobalNetworkId', 'ConnectionId'],
              members: {
                GlobalNetworkId: {
                  location: 'uri',
                  locationName: 'globalNetworkId'
                },
                ConnectionId: {
                  location: 'uri',
                  locationName: 'connectionId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Connection: {
                  shape: 'S1q'
                }
              }
            }
          },
          DeleteCoreNetwork: {
            http: {
              method: 'DELETE',
              requestUri: '/core-networks/{coreNetworkId}'
            },
            input: {
              type: 'structure',
              required: ['CoreNetworkId'],
              members: {
                CoreNetworkId: {
                  location: 'uri',
                  locationName: 'coreNetworkId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                CoreNetwork: {
                  shape: 'S1x'
                }
              }
            }
          },
          DeleteCoreNetworkPolicyVersion: {
            http: {
              method: 'DELETE',
              requestUri: '/core-networks/{coreNetworkId}/core-network-policy-versions/{policyVersionId}'
            },
            input: {
              type: 'structure',
              required: ['CoreNetworkId', 'PolicyVersionId'],
              members: {
                CoreNetworkId: {
                  location: 'uri',
                  locationName: 'coreNetworkId'
                },
                PolicyVersionId: {
                  location: 'uri',
                  locationName: 'policyVersionId',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                CoreNetworkPolicy: {
                  shape: 'S3q'
                }
              }
            }
          },
          DeleteDevice: {
            http: {
              method: 'DELETE',
              requestUri: '/global-networks/{globalNetworkId}/devices/{deviceId}'
            },
            input: {
              type: 'structure',
              required: ['GlobalNetworkId', 'DeviceId'],
              members: {
                GlobalNetworkId: {
                  location: 'uri',
                  locationName: 'globalNetworkId'
                },
                DeviceId: {
                  location: 'uri',
                  locationName: 'deviceId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Device: {
                  shape: 'S29'
                }
              }
            }
          },
          DeleteGlobalNetwork: {
            http: {
              method: 'DELETE',
              requestUri: '/global-networks/{globalNetworkId}'
            },
            input: {
              type: 'structure',
              required: ['GlobalNetworkId'],
              members: {
                GlobalNetworkId: {
                  location: 'uri',
                  locationName: 'globalNetworkId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                GlobalNetwork: {
                  shape: 'S2e'
                }
              }
            }
          },
          DeleteLink: {
            http: {
              method: 'DELETE',
              requestUri: '/global-networks/{globalNetworkId}/links/{linkId}'
            },
            input: {
              type: 'structure',
              required: ['GlobalNetworkId', 'LinkId'],
              members: {
                GlobalNetworkId: {
                  location: 'uri',
                  locationName: 'globalNetworkId'
                },
                LinkId: {
                  location: 'uri',
                  locationName: 'linkId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Link: {
                  shape: 'S2k'
                }
              }
            }
          },
          DeletePeering: {
            http: {
              method: 'DELETE',
              requestUri: '/peerings/{peeringId}'
            },
            input: {
              type: 'structure',
              required: ['PeeringId'],
              members: {
                PeeringId: {
                  location: 'uri',
                  locationName: 'peeringId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Peering: {
                  shape: 'S30'
                }
              }
            }
          },
          DeleteResourcePolicy: {
            http: {
              method: 'DELETE',
              requestUri: '/resource-policy/{resourceArn}'
            },
            input: {
              type: 'structure',
              required: ['ResourceArn'],
              members: {
                ResourceArn: {
                  location: 'uri',
                  locationName: 'resourceArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteSite: {
            http: {
              method: 'DELETE',
              requestUri: '/global-networks/{globalNetworkId}/sites/{siteId}'
            },
            input: {
              type: 'structure',
              required: ['GlobalNetworkId', 'SiteId'],
              members: {
                GlobalNetworkId: {
                  location: 'uri',
                  locationName: 'globalNetworkId'
                },
                SiteId: {
                  location: 'uri',
                  locationName: 'siteId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Site: {
                  shape: 'S2p'
                }
              }
            }
          },
          DeregisterTransitGateway: {
            http: {
              method: 'DELETE',
              requestUri: '/global-networks/{globalNetworkId}/transit-gateway-registrations/{transitGatewayArn}'
            },
            input: {
              type: 'structure',
              required: ['GlobalNetworkId', 'TransitGatewayArn'],
              members: {
                GlobalNetworkId: {
                  location: 'uri',
                  locationName: 'globalNetworkId'
                },
                TransitGatewayArn: {
                  location: 'uri',
                  locationName: 'transitGatewayArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                TransitGatewayRegistration: {
                  shape: 'S4a'
                }
              }
            }
          },
          DescribeGlobalNetworks: {
            http: {
              method: 'GET',
              requestUri: '/global-networks'
            },
            input: {
              type: 'structure',
              members: {
                GlobalNetworkIds: {
                  location: 'querystring',
                  locationName: 'globalNetworkIds',
                  type: 'list',
                  member: {}
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
                GlobalNetworks: {
                  type: 'list',
                  member: {
                    shape: 'S2e'
                  }
                },
                NextToken: {}
              }
            }
          },
          DisassociateConnectPeer: {
            http: {
              method: 'DELETE',
              requestUri: '/global-networks/{globalNetworkId}/connect-peer-associations/{connectPeerId}'
            },
            input: {
              type: 'structure',
              required: ['GlobalNetworkId', 'ConnectPeerId'],
              members: {
                GlobalNetworkId: {
                  location: 'uri',
                  locationName: 'globalNetworkId'
                },
                ConnectPeerId: {
                  location: 'uri',
                  locationName: 'connectPeerId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ConnectPeerAssociation: {
                  shape: 'Sq'
                }
              }
            }
          },
          DisassociateCustomerGateway: {
            http: {
              method: 'DELETE',
              requestUri: '/global-networks/{globalNetworkId}/customer-gateway-associations/{customerGatewayArn}'
            },
            input: {
              type: 'structure',
              required: ['GlobalNetworkId', 'CustomerGatewayArn'],
              members: {
                GlobalNetworkId: {
                  location: 'uri',
                  locationName: 'globalNetworkId'
                },
                CustomerGatewayArn: {
                  location: 'uri',
                  locationName: 'customerGatewayArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                CustomerGatewayAssociation: {
                  shape: 'Sv'
                }
              }
            }
          },
          DisassociateLink: {
            http: {
              method: 'DELETE',
              requestUri: '/global-networks/{globalNetworkId}/link-associations'
            },
            input: {
              type: 'structure',
              required: ['GlobalNetworkId', 'DeviceId', 'LinkId'],
              members: {
                GlobalNetworkId: {
                  location: 'uri',
                  locationName: 'globalNetworkId'
                },
                DeviceId: {
                  location: 'querystring',
                  locationName: 'deviceId'
                },
                LinkId: {
                  location: 'querystring',
                  locationName: 'linkId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                LinkAssociation: {
                  shape: 'Sz'
                }
              }
            }
          },
          DisassociateTransitGatewayConnectPeer: {
            http: {
              method: 'DELETE',
              requestUri: '/global-networks/{globalNetworkId}/transit-gateway-connect-peer-associations/{transitGatewayConnectPeerArn}'
            },
            input: {
              type: 'structure',
              required: ['GlobalNetworkId', 'TransitGatewayConnectPeerArn'],
              members: {
                GlobalNetworkId: {
                  location: 'uri',
                  locationName: 'globalNetworkId'
                },
                TransitGatewayConnectPeerArn: {
                  location: 'uri',
                  locationName: 'transitGatewayConnectPeerArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                TransitGatewayConnectPeerAssociation: {
                  shape: 'S14'
                }
              }
            }
          },
          ExecuteCoreNetworkChangeSet: {
            http: {
              requestUri: '/core-networks/{coreNetworkId}/core-network-change-sets/{policyVersionId}/execute'
            },
            input: {
              type: 'structure',
              required: ['CoreNetworkId', 'PolicyVersionId'],
              members: {
                CoreNetworkId: {
                  location: 'uri',
                  locationName: 'coreNetworkId'
                },
                PolicyVersionId: {
                  location: 'uri',
                  locationName: 'policyVersionId',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          GetConnectAttachment: {
            http: {
              method: 'GET',
              requestUri: '/connect-attachments/{attachmentId}'
            },
            input: {
              type: 'structure',
              required: ['AttachmentId'],
              members: {
                AttachmentId: {
                  location: 'uri',
                  locationName: 'attachmentId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ConnectAttachment: {
                  shape: 'S1b'
                }
              }
            }
          },
          GetConnectPeer: {
            http: {
              method: 'GET',
              requestUri: '/connect-peers/{connectPeerId}'
            },
            input: {
              type: 'structure',
              required: ['ConnectPeerId'],
              members: {
                ConnectPeerId: {
                  location: 'uri',
                  locationName: 'connectPeerId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ConnectPeer: {
                  shape: 'S1j'
                }
              }
            }
          },
          GetConnectPeerAssociations: {
            http: {
              method: 'GET',
              requestUri: '/global-networks/{globalNetworkId}/connect-peer-associations'
            },
            input: {
              type: 'structure',
              required: ['GlobalNetworkId'],
              members: {
                GlobalNetworkId: {
                  location: 'uri',
                  locationName: 'globalNetworkId'
                },
                ConnectPeerIds: {
                  location: 'querystring',
                  locationName: 'connectPeerIds',
                  type: 'list',
                  member: {}
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
                ConnectPeerAssociations: {
                  type: 'list',
                  member: {
                    shape: 'Sq'
                  }
                },
                NextToken: {}
              }
            }
          },
          GetConnections: {
            http: {
              method: 'GET',
              requestUri: '/global-networks/{globalNetworkId}/connections'
            },
            input: {
              type: 'structure',
              required: ['GlobalNetworkId'],
              members: {
                GlobalNetworkId: {
                  location: 'uri',
                  locationName: 'globalNetworkId'
                },
                ConnectionIds: {
                  location: 'querystring',
                  locationName: 'connectionIds',
                  type: 'list',
                  member: {}
                },
                DeviceId: {
                  location: 'querystring',
                  locationName: 'deviceId'
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
                Connections: {
                  type: 'list',
                  member: {
                    shape: 'S1q'
                  }
                },
                NextToken: {}
              }
            }
          },
          GetCoreNetwork: {
            http: {
              method: 'GET',
              requestUri: '/core-networks/{coreNetworkId}'
            },
            input: {
              type: 'structure',
              required: ['CoreNetworkId'],
              members: {
                CoreNetworkId: {
                  location: 'uri',
                  locationName: 'coreNetworkId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                CoreNetwork: {
                  shape: 'S1x'
                }
              }
            }
          },
          GetCoreNetworkChangeEvents: {
            http: {
              method: 'GET',
              requestUri: '/core-networks/{coreNetworkId}/core-network-change-events/{policyVersionId}'
            },
            input: {
              type: 'structure',
              required: ['CoreNetworkId', 'PolicyVersionId'],
              members: {
                CoreNetworkId: {
                  location: 'uri',
                  locationName: 'coreNetworkId'
                },
                PolicyVersionId: {
                  location: 'uri',
                  locationName: 'policyVersionId',
                  type: 'integer'
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
                CoreNetworkChangeEvents: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Type: {},
                      Action: {},
                      IdentifierPath: {},
                      EventTime: {
                        type: 'timestamp'
                      },
                      Status: {},
                      Values: {
                        type: 'structure',
                        members: {
                          EdgeLocation: {},
                          SegmentName: {},
                          AttachmentId: {},
                          Cidr: {}
                        }
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          GetCoreNetworkChangeSet: {
            http: {
              method: 'GET',
              requestUri: '/core-networks/{coreNetworkId}/core-network-change-sets/{policyVersionId}'
            },
            input: {
              type: 'structure',
              required: ['CoreNetworkId', 'PolicyVersionId'],
              members: {
                CoreNetworkId: {
                  location: 'uri',
                  locationName: 'coreNetworkId'
                },
                PolicyVersionId: {
                  location: 'uri',
                  locationName: 'policyVersionId',
                  type: 'integer'
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
                CoreNetworkChanges: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Type: {},
                      Action: {},
                      Identifier: {},
                      PreviousValues: {
                        shape: 'S5j'
                      },
                      NewValues: {
                        shape: 'S5j'
                      },
                      IdentifierPath: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          GetCoreNetworkPolicy: {
            http: {
              method: 'GET',
              requestUri: '/core-networks/{coreNetworkId}/core-network-policy'
            },
            input: {
              type: 'structure',
              required: ['CoreNetworkId'],
              members: {
                CoreNetworkId: {
                  location: 'uri',
                  locationName: 'coreNetworkId'
                },
                PolicyVersionId: {
                  location: 'querystring',
                  locationName: 'policyVersionId',
                  type: 'integer'
                },
                Alias: {
                  location: 'querystring',
                  locationName: 'alias'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                CoreNetworkPolicy: {
                  shape: 'S3q'
                }
              }
            }
          },
          GetCustomerGatewayAssociations: {
            http: {
              method: 'GET',
              requestUri: '/global-networks/{globalNetworkId}/customer-gateway-associations'
            },
            input: {
              type: 'structure',
              required: ['GlobalNetworkId'],
              members: {
                GlobalNetworkId: {
                  location: 'uri',
                  locationName: 'globalNetworkId'
                },
                CustomerGatewayArns: {
                  location: 'querystring',
                  locationName: 'customerGatewayArns',
                  type: 'list',
                  member: {}
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
                CustomerGatewayAssociations: {
                  type: 'list',
                  member: {
                    shape: 'Sv'
                  }
                },
                NextToken: {}
              }
            }
          },
          GetDevices: {
            http: {
              method: 'GET',
              requestUri: '/global-networks/{globalNetworkId}/devices'
            },
            input: {
              type: 'structure',
              required: ['GlobalNetworkId'],
              members: {
                GlobalNetworkId: {
                  location: 'uri',
                  locationName: 'globalNetworkId'
                },
                DeviceIds: {
                  location: 'querystring',
                  locationName: 'deviceIds',
                  type: 'list',
                  member: {}
                },
                SiteId: {
                  location: 'querystring',
                  locationName: 'siteId'
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
                Devices: {
                  type: 'list',
                  member: {
                    shape: 'S29'
                  }
                },
                NextToken: {}
              }
            }
          },
          GetLinkAssociations: {
            http: {
              method: 'GET',
              requestUri: '/global-networks/{globalNetworkId}/link-associations'
            },
            input: {
              type: 'structure',
              required: ['GlobalNetworkId'],
              members: {
                GlobalNetworkId: {
                  location: 'uri',
                  locationName: 'globalNetworkId'
                },
                DeviceId: {
                  location: 'querystring',
                  locationName: 'deviceId'
                },
                LinkId: {
                  location: 'querystring',
                  locationName: 'linkId'
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
                LinkAssociations: {
                  type: 'list',
                  member: {
                    shape: 'Sz'
                  }
                },
                NextToken: {}
              }
            }
          },
          GetLinks: {
            http: {
              method: 'GET',
              requestUri: '/global-networks/{globalNetworkId}/links'
            },
            input: {
              type: 'structure',
              required: ['GlobalNetworkId'],
              members: {
                GlobalNetworkId: {
                  location: 'uri',
                  locationName: 'globalNetworkId'
                },
                LinkIds: {
                  location: 'querystring',
                  locationName: 'linkIds',
                  type: 'list',
                  member: {}
                },
                SiteId: {
                  location: 'querystring',
                  locationName: 'siteId'
                },
                Type: {
                  location: 'querystring',
                  locationName: 'type'
                },
                Provider: {
                  location: 'querystring',
                  locationName: 'provider'
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
                Links: {
                  type: 'list',
                  member: {
                    shape: 'S2k'
                  }
                },
                NextToken: {}
              }
            }
          },
          GetNetworkResourceCounts: {
            http: {
              method: 'GET',
              requestUri: '/global-networks/{globalNetworkId}/network-resource-count'
            },
            input: {
              type: 'structure',
              required: ['GlobalNetworkId'],
              members: {
                GlobalNetworkId: {
                  location: 'uri',
                  locationName: 'globalNetworkId'
                },
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
                NetworkResourceCounts: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ResourceType: {},
                      Count: {
                        type: 'integer'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          GetNetworkResourceRelationships: {
            http: {
              method: 'GET',
              requestUri: '/global-networks/{globalNetworkId}/network-resource-relationships'
            },
            input: {
              type: 'structure',
              required: ['GlobalNetworkId'],
              members: {
                GlobalNetworkId: {
                  location: 'uri',
                  locationName: 'globalNetworkId'
                },
                CoreNetworkId: {
                  location: 'querystring',
                  locationName: 'coreNetworkId'
                },
                RegisteredGatewayArn: {
                  location: 'querystring',
                  locationName: 'registeredGatewayArn'
                },
                AwsRegion: {
                  location: 'querystring',
                  locationName: 'awsRegion'
                },
                AccountId: {
                  location: 'querystring',
                  locationName: 'accountId'
                },
                ResourceType: {
                  location: 'querystring',
                  locationName: 'resourceType'
                },
                ResourceArn: {
                  location: 'querystring',
                  locationName: 'resourceArn'
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
                Relationships: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      From: {},
                      To: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          GetNetworkResources: {
            http: {
              method: 'GET',
              requestUri: '/global-networks/{globalNetworkId}/network-resources'
            },
            input: {
              type: 'structure',
              required: ['GlobalNetworkId'],
              members: {
                GlobalNetworkId: {
                  location: 'uri',
                  locationName: 'globalNetworkId'
                },
                CoreNetworkId: {
                  location: 'querystring',
                  locationName: 'coreNetworkId'
                },
                RegisteredGatewayArn: {
                  location: 'querystring',
                  locationName: 'registeredGatewayArn'
                },
                AwsRegion: {
                  location: 'querystring',
                  locationName: 'awsRegion'
                },
                AccountId: {
                  location: 'querystring',
                  locationName: 'accountId'
                },
                ResourceType: {
                  location: 'querystring',
                  locationName: 'resourceType'
                },
                ResourceArn: {
                  location: 'querystring',
                  locationName: 'resourceArn'
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
                NetworkResources: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      RegisteredGatewayArn: {},
                      CoreNetworkId: {},
                      AwsRegion: {},
                      AccountId: {},
                      ResourceType: {},
                      ResourceId: {},
                      ResourceArn: {},
                      Definition: {},
                      DefinitionTimestamp: {
                        type: 'timestamp'
                      },
                      Tags: {
                        shape: 'Se'
                      },
                      Metadata: {
                        shape: 'S6d'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          GetNetworkRoutes: {
            http: {
              requestUri: '/global-networks/{globalNetworkId}/network-routes'
            },
            input: {
              type: 'structure',
              required: ['GlobalNetworkId', 'RouteTableIdentifier'],
              members: {
                GlobalNetworkId: {
                  location: 'uri',
                  locationName: 'globalNetworkId'
                },
                RouteTableIdentifier: {
                  type: 'structure',
                  members: {
                    TransitGatewayRouteTableArn: {},
                    CoreNetworkSegmentEdge: {
                      shape: 'S6g'
                    }
                  }
                },
                ExactCidrMatches: {
                  shape: 'S1g'
                },
                LongestPrefixMatches: {
                  shape: 'S1g'
                },
                SubnetOfMatches: {
                  shape: 'S1g'
                },
                SupernetOfMatches: {
                  shape: 'S1g'
                },
                PrefixListIds: {
                  shape: 'S1g'
                },
                States: {
                  type: 'list',
                  member: {}
                },
                Types: {
                  type: 'list',
                  member: {}
                },
                DestinationFilters: {
                  type: 'map',
                  key: {},
                  value: {
                    type: 'list',
                    member: {}
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                RouteTableArn: {},
                CoreNetworkSegmentEdge: {
                  shape: 'S6g'
                },
                RouteTableType: {},
                RouteTableTimestamp: {
                  type: 'timestamp'
                },
                NetworkRoutes: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      DestinationCidrBlock: {},
                      Destinations: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            CoreNetworkAttachmentId: {},
                            TransitGatewayAttachmentId: {},
                            SegmentName: {},
                            EdgeLocation: {},
                            ResourceType: {},
                            ResourceId: {}
                          }
                        }
                      },
                      PrefixListId: {},
                      State: {},
                      Type: {}
                    }
                  }
                }
              }
            }
          },
          GetNetworkTelemetry: {
            http: {
              method: 'GET',
              requestUri: '/global-networks/{globalNetworkId}/network-telemetry'
            },
            input: {
              type: 'structure',
              required: ['GlobalNetworkId'],
              members: {
                GlobalNetworkId: {
                  location: 'uri',
                  locationName: 'globalNetworkId'
                },
                CoreNetworkId: {
                  location: 'querystring',
                  locationName: 'coreNetworkId'
                },
                RegisteredGatewayArn: {
                  location: 'querystring',
                  locationName: 'registeredGatewayArn'
                },
                AwsRegion: {
                  location: 'querystring',
                  locationName: 'awsRegion'
                },
                AccountId: {
                  location: 'querystring',
                  locationName: 'accountId'
                },
                ResourceType: {
                  location: 'querystring',
                  locationName: 'resourceType'
                },
                ResourceArn: {
                  location: 'querystring',
                  locationName: 'resourceArn'
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
                NetworkTelemetry: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      RegisteredGatewayArn: {},
                      CoreNetworkId: {},
                      AwsRegion: {},
                      AccountId: {},
                      ResourceType: {},
                      ResourceId: {},
                      ResourceArn: {},
                      Address: {},
                      Health: {
                        type: 'structure',
                        members: {
                          Type: {},
                          Status: {},
                          Timestamp: {
                            type: 'timestamp'
                          }
                        }
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          GetResourcePolicy: {
            http: {
              method: 'GET',
              requestUri: '/resource-policy/{resourceArn}'
            },
            input: {
              type: 'structure',
              required: ['ResourceArn'],
              members: {
                ResourceArn: {
                  location: 'uri',
                  locationName: 'resourceArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                PolicyDocument: {
                  jsonvalue: true
                }
              }
            }
          },
          GetRouteAnalysis: {
            http: {
              method: 'GET',
              requestUri: '/global-networks/{globalNetworkId}/route-analyses/{routeAnalysisId}'
            },
            input: {
              type: 'structure',
              required: ['GlobalNetworkId', 'RouteAnalysisId'],
              members: {
                GlobalNetworkId: {
                  location: 'uri',
                  locationName: 'globalNetworkId'
                },
                RouteAnalysisId: {
                  location: 'uri',
                  locationName: 'routeAnalysisId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                RouteAnalysis: {
                  shape: 'S78'
                }
              }
            }
          },
          GetSiteToSiteVpnAttachment: {
            http: {
              method: 'GET',
              requestUri: '/site-to-site-vpn-attachments/{attachmentId}'
            },
            input: {
              type: 'structure',
              required: ['AttachmentId'],
              members: {
                AttachmentId: {
                  location: 'uri',
                  locationName: 'attachmentId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                SiteToSiteVpnAttachment: {
                  shape: 'S2v'
                }
              }
            }
          },
          GetSites: {
            http: {
              method: 'GET',
              requestUri: '/global-networks/{globalNetworkId}/sites'
            },
            input: {
              type: 'structure',
              required: ['GlobalNetworkId'],
              members: {
                GlobalNetworkId: {
                  location: 'uri',
                  locationName: 'globalNetworkId'
                },
                SiteIds: {
                  location: 'querystring',
                  locationName: 'siteIds',
                  type: 'list',
                  member: {}
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
                Sites: {
                  type: 'list',
                  member: {
                    shape: 'S2p'
                  }
                },
                NextToken: {}
              }
            }
          },
          GetTransitGatewayConnectPeerAssociations: {
            http: {
              method: 'GET',
              requestUri: '/global-networks/{globalNetworkId}/transit-gateway-connect-peer-associations'
            },
            input: {
              type: 'structure',
              required: ['GlobalNetworkId'],
              members: {
                GlobalNetworkId: {
                  location: 'uri',
                  locationName: 'globalNetworkId'
                },
                TransitGatewayConnectPeerArns: {
                  location: 'querystring',
                  locationName: 'transitGatewayConnectPeerArns',
                  type: 'list',
                  member: {}
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
                TransitGatewayConnectPeerAssociations: {
                  type: 'list',
                  member: {
                    shape: 'S14'
                  }
                },
                NextToken: {}
              }
            }
          },
          GetTransitGatewayPeering: {
            http: {
              method: 'GET',
              requestUri: '/transit-gateway-peerings/{peeringId}'
            },
            input: {
              type: 'structure',
              required: ['PeeringId'],
              members: {
                PeeringId: {
                  location: 'uri',
                  locationName: 'peeringId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                TransitGatewayPeering: {
                  shape: 'S2z'
                }
              }
            }
          },
          GetTransitGatewayRegistrations: {
            http: {
              method: 'GET',
              requestUri: '/global-networks/{globalNetworkId}/transit-gateway-registrations'
            },
            input: {
              type: 'structure',
              required: ['GlobalNetworkId'],
              members: {
                GlobalNetworkId: {
                  location: 'uri',
                  locationName: 'globalNetworkId'
                },
                TransitGatewayArns: {
                  location: 'querystring',
                  locationName: 'transitGatewayArns',
                  type: 'list',
                  member: {}
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
                TransitGatewayRegistrations: {
                  type: 'list',
                  member: {
                    shape: 'S4a'
                  }
                },
                NextToken: {}
              }
            }
          },
          GetTransitGatewayRouteTableAttachment: {
            http: {
              method: 'GET',
              requestUri: '/transit-gateway-route-table-attachments/{attachmentId}'
            },
            input: {
              type: 'structure',
              required: ['AttachmentId'],
              members: {
                AttachmentId: {
                  location: 'uri',
                  locationName: 'attachmentId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                TransitGatewayRouteTableAttachment: {
                  shape: 'S38'
                }
              }
            }
          },
          GetVpcAttachment: {
            http: {
              method: 'GET',
              requestUri: '/vpc-attachments/{attachmentId}'
            },
            input: {
              type: 'structure',
              required: ['AttachmentId'],
              members: {
                AttachmentId: {
                  location: 'uri',
                  locationName: 'attachmentId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                VpcAttachment: {
                  shape: 'S3f'
                }
              }
            }
          },
          ListAttachments: {
            http: {
              method: 'GET',
              requestUri: '/attachments'
            },
            input: {
              type: 'structure',
              members: {
                CoreNetworkId: {
                  location: 'querystring',
                  locationName: 'coreNetworkId'
                },
                AttachmentType: {
                  location: 'querystring',
                  locationName: 'attachmentType'
                },
                EdgeLocation: {
                  location: 'querystring',
                  locationName: 'edgeLocation'
                },
                State: {
                  location: 'querystring',
                  locationName: 'state'
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
                Attachments: {
                  type: 'list',
                  member: {
                    shape: 'S4'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListConnectPeers: {
            http: {
              method: 'GET',
              requestUri: '/connect-peers'
            },
            input: {
              type: 'structure',
              members: {
                CoreNetworkId: {
                  location: 'querystring',
                  locationName: 'coreNetworkId'
                },
                ConnectAttachmentId: {
                  location: 'querystring',
                  locationName: 'connectAttachmentId'
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
                ConnectPeers: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      CoreNetworkId: {},
                      ConnectAttachmentId: {},
                      ConnectPeerId: {},
                      EdgeLocation: {},
                      ConnectPeerState: {},
                      CreatedAt: {
                        type: 'timestamp'
                      },
                      Tags: {
                        shape: 'Se'
                      },
                      SubnetArn: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListCoreNetworkPolicyVersions: {
            http: {
              method: 'GET',
              requestUri: '/core-networks/{coreNetworkId}/core-network-policy-versions'
            },
            input: {
              type: 'structure',
              required: ['CoreNetworkId'],
              members: {
                CoreNetworkId: {
                  location: 'uri',
                  locationName: 'coreNetworkId'
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
                CoreNetworkPolicyVersions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      CoreNetworkId: {},
                      PolicyVersionId: {
                        type: 'integer'
                      },
                      Alias: {},
                      Description: {},
                      CreatedAt: {
                        type: 'timestamp'
                      },
                      ChangeSetState: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListCoreNetworks: {
            http: {
              method: 'GET',
              requestUri: '/core-networks'
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
                CoreNetworks: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      CoreNetworkId: {},
                      CoreNetworkArn: {},
                      GlobalNetworkId: {},
                      OwnerAccountId: {},
                      State: {},
                      Description: {},
                      Tags: {
                        shape: 'Se'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListOrganizationServiceAccessStatus: {
            http: {
              method: 'GET',
              requestUri: '/organizations/service-access'
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
                OrganizationStatus: {
                  shape: 'S8n'
                },
                NextToken: {}
              }
            }
          },
          ListPeerings: {
            http: {
              method: 'GET',
              requestUri: '/peerings'
            },
            input: {
              type: 'structure',
              members: {
                CoreNetworkId: {
                  location: 'querystring',
                  locationName: 'coreNetworkId'
                },
                PeeringType: {
                  location: 'querystring',
                  locationName: 'peeringType'
                },
                EdgeLocation: {
                  location: 'querystring',
                  locationName: 'edgeLocation'
                },
                State: {
                  location: 'querystring',
                  locationName: 'state'
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
                Peerings: {
                  type: 'list',
                  member: {
                    shape: 'S30'
                  }
                },
                NextToken: {}
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
              required: ['ResourceArn'],
              members: {
                ResourceArn: {
                  location: 'uri',
                  locationName: 'resourceArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                TagList: {
                  shape: 'Se'
                }
              }
            }
          },
          PutCoreNetworkPolicy: {
            http: {
              requestUri: '/core-networks/{coreNetworkId}/core-network-policy'
            },
            input: {
              type: 'structure',
              required: ['CoreNetworkId', 'PolicyDocument'],
              members: {
                CoreNetworkId: {
                  location: 'uri',
                  locationName: 'coreNetworkId'
                },
                PolicyDocument: {
                  jsonvalue: true
                },
                Description: {},
                LatestVersionId: {
                  type: 'integer'
                },
                ClientToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                CoreNetworkPolicy: {
                  shape: 'S3q'
                }
              }
            }
          },
          PutResourcePolicy: {
            http: {
              requestUri: '/resource-policy/{resourceArn}'
            },
            input: {
              type: 'structure',
              required: ['PolicyDocument', 'ResourceArn'],
              members: {
                PolicyDocument: {
                  jsonvalue: true
                },
                ResourceArn: {
                  location: 'uri',
                  locationName: 'resourceArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          RegisterTransitGateway: {
            http: {
              requestUri: '/global-networks/{globalNetworkId}/transit-gateway-registrations'
            },
            input: {
              type: 'structure',
              required: ['GlobalNetworkId', 'TransitGatewayArn'],
              members: {
                GlobalNetworkId: {
                  location: 'uri',
                  locationName: 'globalNetworkId'
                },
                TransitGatewayArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                TransitGatewayRegistration: {
                  shape: 'S4a'
                }
              }
            }
          },
          RejectAttachment: {
            http: {
              requestUri: '/attachments/{attachmentId}/reject'
            },
            input: {
              type: 'structure',
              required: ['AttachmentId'],
              members: {
                AttachmentId: {
                  location: 'uri',
                  locationName: 'attachmentId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Attachment: {
                  shape: 'S4'
                }
              }
            }
          },
          RestoreCoreNetworkPolicyVersion: {
            http: {
              requestUri: '/core-networks/{coreNetworkId}/core-network-policy-versions/{policyVersionId}/restore'
            },
            input: {
              type: 'structure',
              required: ['CoreNetworkId', 'PolicyVersionId'],
              members: {
                CoreNetworkId: {
                  location: 'uri',
                  locationName: 'coreNetworkId'
                },
                PolicyVersionId: {
                  location: 'uri',
                  locationName: 'policyVersionId',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                CoreNetworkPolicy: {
                  shape: 'S3q'
                }
              }
            }
          },
          StartOrganizationServiceAccessUpdate: {
            http: {
              requestUri: '/organizations/service-access'
            },
            input: {
              type: 'structure',
              required: ['Action'],
              members: {
                Action: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                OrganizationStatus: {
                  shape: 'S8n'
                }
              }
            }
          },
          StartRouteAnalysis: {
            http: {
              requestUri: '/global-networks/{globalNetworkId}/route-analyses'
            },
            input: {
              type: 'structure',
              required: ['GlobalNetworkId', 'Source', 'Destination'],
              members: {
                GlobalNetworkId: {
                  location: 'uri',
                  locationName: 'globalNetworkId'
                },
                Source: {
                  shape: 'S9d'
                },
                Destination: {
                  shape: 'S9d'
                },
                IncludeReturnPath: {
                  type: 'boolean'
                },
                UseMiddleboxes: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                RouteAnalysis: {
                  shape: 'S78'
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
              required: ['ResourceArn', 'Tags'],
              members: {
                ResourceArn: {
                  location: 'uri',
                  locationName: 'resourceArn'
                },
                Tags: {
                  shape: 'Se'
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
              required: ['ResourceArn', 'TagKeys'],
              members: {
                ResourceArn: {
                  location: 'uri',
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
          UpdateConnection: {
            http: {
              method: 'PATCH',
              requestUri: '/global-networks/{globalNetworkId}/connections/{connectionId}'
            },
            input: {
              type: 'structure',
              required: ['GlobalNetworkId', 'ConnectionId'],
              members: {
                GlobalNetworkId: {
                  location: 'uri',
                  locationName: 'globalNetworkId'
                },
                ConnectionId: {
                  location: 'uri',
                  locationName: 'connectionId'
                },
                LinkId: {},
                ConnectedLinkId: {},
                Description: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Connection: {
                  shape: 'S1q'
                }
              }
            }
          },
          UpdateCoreNetwork: {
            http: {
              method: 'PATCH',
              requestUri: '/core-networks/{coreNetworkId}'
            },
            input: {
              type: 'structure',
              required: ['CoreNetworkId'],
              members: {
                CoreNetworkId: {
                  location: 'uri',
                  locationName: 'coreNetworkId'
                },
                Description: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                CoreNetwork: {
                  shape: 'S1x'
                }
              }
            }
          },
          UpdateDevice: {
            http: {
              method: 'PATCH',
              requestUri: '/global-networks/{globalNetworkId}/devices/{deviceId}'
            },
            input: {
              type: 'structure',
              required: ['GlobalNetworkId', 'DeviceId'],
              members: {
                GlobalNetworkId: {
                  location: 'uri',
                  locationName: 'globalNetworkId'
                },
                DeviceId: {
                  location: 'uri',
                  locationName: 'deviceId'
                },
                AWSLocation: {
                  shape: 'S25'
                },
                Description: {},
                Type: {},
                Vendor: {},
                Model: {},
                SerialNumber: {},
                Location: {
                  shape: 'S26'
                },
                SiteId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Device: {
                  shape: 'S29'
                }
              }
            }
          },
          UpdateGlobalNetwork: {
            http: {
              method: 'PATCH',
              requestUri: '/global-networks/{globalNetworkId}'
            },
            input: {
              type: 'structure',
              required: ['GlobalNetworkId'],
              members: {
                GlobalNetworkId: {
                  location: 'uri',
                  locationName: 'globalNetworkId'
                },
                Description: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                GlobalNetwork: {
                  shape: 'S2e'
                }
              }
            }
          },
          UpdateLink: {
            http: {
              method: 'PATCH',
              requestUri: '/global-networks/{globalNetworkId}/links/{linkId}'
            },
            input: {
              type: 'structure',
              required: ['GlobalNetworkId', 'LinkId'],
              members: {
                GlobalNetworkId: {
                  location: 'uri',
                  locationName: 'globalNetworkId'
                },
                LinkId: {
                  location: 'uri',
                  locationName: 'linkId'
                },
                Description: {},
                Type: {},
                Bandwidth: {
                  shape: 'S2i'
                },
                Provider: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Link: {
                  shape: 'S2k'
                }
              }
            }
          },
          UpdateNetworkResourceMetadata: {
            http: {
              method: 'PATCH',
              requestUri: '/global-networks/{globalNetworkId}/network-resources/{resourceArn}/metadata'
            },
            input: {
              type: 'structure',
              required: ['GlobalNetworkId', 'ResourceArn', 'Metadata'],
              members: {
                GlobalNetworkId: {
                  location: 'uri',
                  locationName: 'globalNetworkId'
                },
                ResourceArn: {
                  location: 'uri',
                  locationName: 'resourceArn'
                },
                Metadata: {
                  shape: 'S6d'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ResourceArn: {},
                Metadata: {
                  shape: 'S6d'
                }
              }
            }
          },
          UpdateSite: {
            http: {
              method: 'PATCH',
              requestUri: '/global-networks/{globalNetworkId}/sites/{siteId}'
            },
            input: {
              type: 'structure',
              required: ['GlobalNetworkId', 'SiteId'],
              members: {
                GlobalNetworkId: {
                  location: 'uri',
                  locationName: 'globalNetworkId'
                },
                SiteId: {
                  location: 'uri',
                  locationName: 'siteId'
                },
                Description: {},
                Location: {
                  shape: 'S26'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Site: {
                  shape: 'S2p'
                }
              }
            }
          },
          UpdateVpcAttachment: {
            http: {
              method: 'PATCH',
              requestUri: '/vpc-attachments/{attachmentId}'
            },
            input: {
              type: 'structure',
              required: ['AttachmentId'],
              members: {
                AttachmentId: {
                  location: 'uri',
                  locationName: 'attachmentId'
                },
                AddSubnetArns: {
                  shape: 'S3b'
                },
                RemoveSubnetArns: {
                  shape: 'S3b'
                },
                Options: {
                  shape: 'S3c'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                VpcAttachment: {
                  shape: 'S3f'
                }
              }
            }
          }
        },
        shapes: {
          S4: {
            type: 'structure',
            members: {
              CoreNetworkId: {},
              CoreNetworkArn: {},
              AttachmentId: {},
              OwnerAccountId: {},
              AttachmentType: {},
              State: {},
              EdgeLocation: {},
              ResourceArn: {},
              AttachmentPolicyRuleNumber: {
                type: 'integer'
              },
              SegmentName: {},
              Tags: {
                shape: 'Se'
              },
              ProposedSegmentChange: {
                type: 'structure',
                members: {
                  Tags: {
                    shape: 'Se'
                  },
                  AttachmentPolicyRuleNumber: {
                    type: 'integer'
                  },
                  SegmentName: {}
                }
              },
              CreatedAt: {
                type: 'timestamp'
              },
              UpdatedAt: {
                type: 'timestamp'
              }
            }
          },
          Se: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Key: {},
                Value: {}
              }
            }
          },
          Sq: {
            type: 'structure',
            members: {
              ConnectPeerId: {},
              GlobalNetworkId: {},
              DeviceId: {},
              LinkId: {},
              State: {}
            }
          },
          Sv: {
            type: 'structure',
            members: {
              CustomerGatewayArn: {},
              GlobalNetworkId: {},
              DeviceId: {},
              LinkId: {},
              State: {}
            }
          },
          Sz: {
            type: 'structure',
            members: {
              GlobalNetworkId: {},
              DeviceId: {},
              LinkId: {},
              LinkAssociationState: {}
            }
          },
          S14: {
            type: 'structure',
            members: {
              TransitGatewayConnectPeerArn: {},
              GlobalNetworkId: {},
              DeviceId: {},
              LinkId: {},
              State: {}
            }
          },
          S17: {
            type: 'structure',
            members: {
              Protocol: {}
            }
          },
          S1b: {
            type: 'structure',
            members: {
              Attachment: {
                shape: 'S4'
              },
              TransportAttachmentId: {},
              Options: {
                shape: 'S17'
              }
            }
          },
          S1g: {
            type: 'list',
            member: {}
          },
          S1j: {
            type: 'structure',
            members: {
              CoreNetworkId: {},
              ConnectAttachmentId: {},
              ConnectPeerId: {},
              EdgeLocation: {},
              State: {},
              CreatedAt: {
                type: 'timestamp'
              },
              Configuration: {
                type: 'structure',
                members: {
                  CoreNetworkAddress: {},
                  PeerAddress: {},
                  InsideCidrBlocks: {
                    shape: 'S1g'
                  },
                  Protocol: {},
                  BgpConfigurations: {
                    type: 'list',
                    member: {
                      type: 'structure',
                      members: {
                        CoreNetworkAsn: {
                          type: 'long'
                        },
                        PeerAsn: {
                          type: 'long'
                        },
                        CoreNetworkAddress: {},
                        PeerAddress: {}
                      }
                    }
                  }
                }
              },
              Tags: {
                shape: 'Se'
              },
              SubnetArn: {}
            }
          },
          S1q: {
            type: 'structure',
            members: {
              ConnectionId: {},
              ConnectionArn: {},
              GlobalNetworkId: {},
              DeviceId: {},
              ConnectedDeviceId: {},
              LinkId: {},
              ConnectedLinkId: {},
              Description: {},
              CreatedAt: {
                type: 'timestamp'
              },
              State: {},
              Tags: {
                shape: 'Se'
              }
            }
          },
          S1x: {
            type: 'structure',
            members: {
              GlobalNetworkId: {},
              CoreNetworkId: {},
              CoreNetworkArn: {},
              Description: {},
              CreatedAt: {
                type: 'timestamp'
              },
              State: {},
              Segments: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    Name: {},
                    EdgeLocations: {
                      shape: 'S21'
                    },
                    SharedSegments: {
                      shape: 'S1g'
                    }
                  }
                }
              },
              Edges: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    EdgeLocation: {},
                    Asn: {
                      type: 'long'
                    },
                    InsideCidrBlocks: {
                      shape: 'S1g'
                    }
                  }
                }
              },
              Tags: {
                shape: 'Se'
              }
            }
          },
          S21: {
            type: 'list',
            member: {}
          },
          S25: {
            type: 'structure',
            members: {
              Zone: {},
              SubnetArn: {}
            }
          },
          S26: {
            type: 'structure',
            members: {
              Address: {},
              Latitude: {},
              Longitude: {}
            },
            sensitive: true
          },
          S29: {
            type: 'structure',
            members: {
              DeviceId: {},
              DeviceArn: {},
              GlobalNetworkId: {},
              AWSLocation: {
                shape: 'S25'
              },
              Description: {},
              Type: {},
              Vendor: {},
              Model: {},
              SerialNumber: {},
              Location: {
                shape: 'S26'
              },
              SiteId: {},
              CreatedAt: {
                type: 'timestamp'
              },
              State: {},
              Tags: {
                shape: 'Se'
              }
            }
          },
          S2e: {
            type: 'structure',
            members: {
              GlobalNetworkId: {},
              GlobalNetworkArn: {},
              Description: {},
              CreatedAt: {
                type: 'timestamp'
              },
              State: {},
              Tags: {
                shape: 'Se'
              }
            }
          },
          S2i: {
            type: 'structure',
            members: {
              UploadSpeed: {
                type: 'integer'
              },
              DownloadSpeed: {
                type: 'integer'
              }
            }
          },
          S2k: {
            type: 'structure',
            members: {
              LinkId: {},
              LinkArn: {},
              GlobalNetworkId: {},
              SiteId: {},
              Description: {},
              Type: {},
              Bandwidth: {
                shape: 'S2i'
              },
              Provider: {},
              CreatedAt: {
                type: 'timestamp'
              },
              State: {},
              Tags: {
                shape: 'Se'
              }
            }
          },
          S2p: {
            type: 'structure',
            members: {
              SiteId: {},
              SiteArn: {},
              GlobalNetworkId: {},
              Description: {},
              Location: {
                shape: 'S26'
              },
              CreatedAt: {
                type: 'timestamp'
              },
              State: {},
              Tags: {
                shape: 'Se'
              }
            }
          },
          S2v: {
            type: 'structure',
            members: {
              Attachment: {
                shape: 'S4'
              },
              VpnConnectionArn: {}
            }
          },
          S2z: {
            type: 'structure',
            members: {
              Peering: {
                shape: 'S30'
              },
              TransitGatewayArn: {},
              TransitGatewayPeeringAttachmentId: {}
            }
          },
          S30: {
            type: 'structure',
            members: {
              CoreNetworkId: {},
              CoreNetworkArn: {},
              PeeringId: {},
              OwnerAccountId: {},
              PeeringType: {},
              State: {},
              EdgeLocation: {},
              ResourceArn: {},
              Tags: {
                shape: 'Se'
              },
              CreatedAt: {
                type: 'timestamp'
              }
            }
          },
          S38: {
            type: 'structure',
            members: {
              Attachment: {
                shape: 'S4'
              },
              PeeringId: {},
              TransitGatewayRouteTableArn: {}
            }
          },
          S3b: {
            type: 'list',
            member: {}
          },
          S3c: {
            type: 'structure',
            members: {
              Ipv6Support: {
                type: 'boolean'
              },
              ApplianceModeSupport: {
                type: 'boolean'
              }
            }
          },
          S3f: {
            type: 'structure',
            members: {
              Attachment: {
                shape: 'S4'
              },
              SubnetArns: {
                shape: 'S3b'
              },
              Options: {
                shape: 'S3c'
              }
            }
          },
          S3q: {
            type: 'structure',
            members: {
              CoreNetworkId: {},
              PolicyVersionId: {
                type: 'integer'
              },
              Alias: {},
              Description: {},
              CreatedAt: {
                type: 'timestamp'
              },
              ChangeSetState: {},
              PolicyErrors: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['ErrorCode', 'Message'],
                  members: {
                    ErrorCode: {},
                    Message: {},
                    Path: {}
                  }
                }
              },
              PolicyDocument: {
                jsonvalue: true
              }
            }
          },
          S4a: {
            type: 'structure',
            members: {
              GlobalNetworkId: {},
              TransitGatewayArn: {},
              State: {
                type: 'structure',
                members: {
                  Code: {},
                  Message: {}
                }
              }
            }
          },
          S5j: {
            type: 'structure',
            members: {
              SegmentName: {},
              EdgeLocations: {
                shape: 'S21'
              },
              Asn: {
                type: 'long'
              },
              Cidr: {},
              DestinationIdentifier: {},
              InsideCidrBlocks: {
                shape: 'S1g'
              },
              SharedSegments: {
                shape: 'S1g'
              }
            }
          },
          S6d: {
            type: 'map',
            key: {},
            value: {}
          },
          S6g: {
            type: 'structure',
            members: {
              CoreNetworkId: {},
              SegmentName: {},
              EdgeLocation: {}
            }
          },
          S78: {
            type: 'structure',
            members: {
              GlobalNetworkId: {},
              OwnerAccountId: {},
              RouteAnalysisId: {},
              StartTimestamp: {
                type: 'timestamp'
              },
              Status: {},
              Source: {
                shape: 'S7a'
              },
              Destination: {
                shape: 'S7a'
              },
              IncludeReturnPath: {
                type: 'boolean'
              },
              UseMiddleboxes: {
                type: 'boolean'
              },
              ForwardPath: {
                shape: 'S7c'
              },
              ReturnPath: {
                shape: 'S7c'
              }
            }
          },
          S7a: {
            type: 'structure',
            members: {
              TransitGatewayAttachmentArn: {},
              TransitGatewayArn: {},
              IpAddress: {}
            }
          },
          S7c: {
            type: 'structure',
            members: {
              CompletionStatus: {
                type: 'structure',
                members: {
                  ResultCode: {},
                  ReasonCode: {},
                  ReasonContext: {
                    type: 'map',
                    key: {},
                    value: {}
                  }
                }
              },
              Path: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    Sequence: {
                      type: 'integer'
                    },
                    Resource: {
                      type: 'structure',
                      members: {
                        RegisteredGatewayArn: {},
                        ResourceArn: {},
                        ResourceType: {},
                        Definition: {},
                        NameTag: {},
                        IsMiddlebox: {
                          type: 'boolean'
                        }
                      }
                    },
                    DestinationCidrBlock: {}
                  }
                }
              }
            }
          },
          S8n: {
            type: 'structure',
            members: {
              OrganizationId: {},
              OrganizationAwsServiceAccessStatus: {},
              SLRDeploymentStatus: {},
              AccountStatusList: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    AccountId: {},
                    SLRDeploymentStatus: {}
                  }
                }
              }
            }
          },
          S9d: {
            type: 'structure',
            members: {
              TransitGatewayAttachmentArn: {},
              IpAddress: {}
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=8d0118a7fdd044d951955fd53d6f471280680233.js.map