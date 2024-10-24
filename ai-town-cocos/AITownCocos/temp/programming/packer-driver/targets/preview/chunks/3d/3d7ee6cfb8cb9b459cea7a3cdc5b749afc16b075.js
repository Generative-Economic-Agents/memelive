System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2021-12-03',
          endpointPrefix: 'private-networks',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceFullName: 'AWS Private 5G',
          serviceId: 'PrivateNetworks',
          signatureVersion: 'v4',
          signingName: 'private-networks',
          uid: 'privatenetworks-2021-12-03'
        },
        operations: {
          AcknowledgeOrderReceipt: {
            http: {
              requestUri: '/v1/orders/acknowledge',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['orderArn'],
              members: {
                orderArn: {}
              }
            },
            output: {
              type: 'structure',
              required: ['order'],
              members: {
                order: {
                  shape: 'S4'
                }
              }
            }
          },
          ActivateDeviceIdentifier: {
            http: {
              requestUri: '/v1/device-identifiers/activate',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['deviceIdentifierArn'],
              members: {
                clientToken: {},
                deviceIdentifierArn: {}
              }
            },
            output: {
              type: 'structure',
              required: ['deviceIdentifier'],
              members: {
                deviceIdentifier: {
                  shape: 'Sm'
                },
                tags: {
                  shape: 'Sp'
                }
              }
            },
            idempotent: true
          },
          ActivateNetworkSite: {
            http: {
              requestUri: '/v1/network-sites/activate',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['networkSiteArn', 'shippingAddress'],
              members: {
                clientToken: {},
                commitmentConfiguration: {
                  shape: 'S9'
                },
                networkSiteArn: {},
                shippingAddress: {
                  shape: 'Se'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                networkSite: {
                  shape: 'Su'
                }
              }
            },
            idempotent: true
          },
          ConfigureAccessPoint: {
            http: {
              requestUri: '/v1/network-resources/configure',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['accessPointArn'],
              members: {
                accessPointArn: {},
                cpiSecretKey: {
                  type: 'string',
                  sensitive: true
                },
                cpiUserId: {
                  type: 'string',
                  sensitive: true
                },
                cpiUserPassword: {
                  type: 'string',
                  sensitive: true
                },
                cpiUsername: {
                  type: 'string',
                  sensitive: true
                },
                position: {
                  shape: 'S19'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['accessPoint'],
              members: {
                accessPoint: {
                  shape: 'S1e'
                }
              }
            },
            idempotent: true
          },
          CreateNetwork: {
            http: {
              requestUri: '/v1/networks',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['networkName'],
              members: {
                clientToken: {},
                description: {},
                networkName: {},
                tags: {
                  shape: 'Sp'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['network'],
              members: {
                network: {
                  shape: 'S1n'
                },
                tags: {
                  shape: 'Sp'
                }
              }
            },
            idempotent: true
          },
          CreateNetworkSite: {
            http: {
              requestUri: '/v1/network-sites',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['networkArn', 'networkSiteName'],
              members: {
                availabilityZone: {},
                availabilityZoneId: {},
                clientToken: {},
                description: {},
                networkArn: {},
                networkSiteName: {},
                pendingPlan: {
                  shape: 'Sv'
                },
                tags: {
                  shape: 'Sp'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                networkSite: {
                  shape: 'Su'
                },
                tags: {
                  shape: 'Sp'
                }
              }
            },
            idempotent: true
          },
          DeactivateDeviceIdentifier: {
            http: {
              requestUri: '/v1/device-identifiers/deactivate',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['deviceIdentifierArn'],
              members: {
                clientToken: {},
                deviceIdentifierArn: {}
              }
            },
            output: {
              type: 'structure',
              required: ['deviceIdentifier'],
              members: {
                deviceIdentifier: {
                  shape: 'Sm'
                }
              }
            },
            idempotent: true
          },
          DeleteNetwork: {
            http: {
              method: 'DELETE',
              requestUri: '/v1/networks/{networkArn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['networkArn'],
              members: {
                clientToken: {
                  location: 'querystring',
                  locationName: 'clientToken'
                },
                networkArn: {
                  location: 'uri',
                  locationName: 'networkArn'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['network'],
              members: {
                network: {
                  shape: 'S1n'
                }
              }
            },
            idempotent: true
          },
          DeleteNetworkSite: {
            http: {
              method: 'DELETE',
              requestUri: '/v1/network-sites/{networkSiteArn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['networkSiteArn'],
              members: {
                clientToken: {
                  location: 'querystring',
                  locationName: 'clientToken'
                },
                networkSiteArn: {
                  location: 'uri',
                  locationName: 'networkSiteArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                networkSite: {
                  shape: 'Su'
                }
              }
            },
            idempotent: true
          },
          GetDeviceIdentifier: {
            http: {
              method: 'GET',
              requestUri: '/v1/device-identifiers/{deviceIdentifierArn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['deviceIdentifierArn'],
              members: {
                deviceIdentifierArn: {
                  location: 'uri',
                  locationName: 'deviceIdentifierArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                deviceIdentifier: {
                  shape: 'Sm'
                },
                tags: {
                  shape: 'Sp'
                }
              }
            }
          },
          GetNetwork: {
            http: {
              method: 'GET',
              requestUri: '/v1/networks/{networkArn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['networkArn'],
              members: {
                networkArn: {
                  location: 'uri',
                  locationName: 'networkArn'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['network'],
              members: {
                network: {
                  shape: 'S1n'
                },
                tags: {
                  shape: 'Sp'
                }
              }
            }
          },
          GetNetworkResource: {
            http: {
              method: 'GET',
              requestUri: '/v1/network-resources/{networkResourceArn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['networkResourceArn'],
              members: {
                networkResourceArn: {
                  location: 'uri',
                  locationName: 'networkResourceArn'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['networkResource'],
              members: {
                networkResource: {
                  shape: 'S1e'
                },
                tags: {
                  shape: 'Sp'
                }
              }
            }
          },
          GetNetworkSite: {
            http: {
              method: 'GET',
              requestUri: '/v1/network-sites/{networkSiteArn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['networkSiteArn'],
              members: {
                networkSiteArn: {
                  location: 'uri',
                  locationName: 'networkSiteArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                networkSite: {
                  shape: 'Su'
                },
                tags: {
                  shape: 'Sp'
                }
              }
            }
          },
          GetOrder: {
            http: {
              method: 'GET',
              requestUri: '/v1/orders/{orderArn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['orderArn'],
              members: {
                orderArn: {
                  location: 'uri',
                  locationName: 'orderArn'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['order'],
              members: {
                order: {
                  shape: 'S4'
                },
                tags: {
                  shape: 'Sp'
                }
              }
            }
          },
          ListDeviceIdentifiers: {
            http: {
              requestUri: '/v1/device-identifiers/list',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['networkArn'],
              members: {
                filters: {
                  type: 'map',
                  key: {},
                  value: {
                    type: 'list',
                    member: {}
                  }
                },
                maxResults: {
                  type: 'integer'
                },
                networkArn: {},
                startToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                deviceIdentifiers: {
                  type: 'list',
                  member: {
                    shape: 'Sm'
                  }
                },
                nextToken: {}
              }
            }
          },
          ListNetworkResources: {
            http: {
              requestUri: '/v1/network-resources',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['networkArn'],
              members: {
                filters: {
                  type: 'map',
                  key: {},
                  value: {
                    type: 'list',
                    member: {}
                  }
                },
                maxResults: {
                  type: 'integer'
                },
                networkArn: {},
                startToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                networkResources: {
                  type: 'list',
                  member: {
                    shape: 'S1e'
                  }
                },
                nextToken: {}
              }
            }
          },
          ListNetworkSites: {
            http: {
              requestUri: '/v1/network-sites/list',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['networkArn'],
              members: {
                filters: {
                  type: 'map',
                  key: {},
                  value: {
                    type: 'list',
                    member: {}
                  }
                },
                maxResults: {
                  type: 'integer'
                },
                networkArn: {},
                startToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                networkSites: {
                  type: 'list',
                  member: {
                    shape: 'Su'
                  }
                },
                nextToken: {}
              }
            }
          },
          ListNetworks: {
            http: {
              requestUri: '/v1/networks/list',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                filters: {
                  type: 'map',
                  key: {},
                  value: {
                    type: 'list',
                    member: {}
                  }
                },
                maxResults: {
                  type: 'integer'
                },
                startToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                networks: {
                  type: 'list',
                  member: {
                    shape: 'S1n'
                  }
                },
                nextToken: {}
              }
            }
          },
          ListOrders: {
            http: {
              requestUri: '/v1/orders/list',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['networkArn'],
              members: {
                filters: {
                  type: 'map',
                  key: {},
                  value: {
                    type: 'list',
                    member: {}
                  }
                },
                maxResults: {
                  type: 'integer'
                },
                networkArn: {},
                startToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                nextToken: {},
                orders: {
                  type: 'list',
                  member: {
                    shape: 'S4'
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
                  shape: 'Sp'
                }
              }
            }
          },
          Ping: {
            http: {
              method: 'GET',
              requestUri: '/ping',
              responseCode: 200
            },
            output: {
              type: 'structure',
              members: {
                status: {}
              }
            }
          },
          StartNetworkResourceUpdate: {
            http: {
              requestUri: '/v1/network-resources/update',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['networkResourceArn', 'updateType'],
              members: {
                commitmentConfiguration: {
                  shape: 'S9'
                },
                networkResourceArn: {},
                returnReason: {},
                shippingAddress: {
                  shape: 'Se'
                },
                updateType: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                networkResource: {
                  shape: 'S1e'
                }
              }
            },
            idempotent: true
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
                  shape: 'Sp'
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
                  member: {},
                  sensitive: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateNetworkSite: {
            http: {
              method: 'PUT',
              requestUri: '/v1/network-sites/site',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['networkSiteArn'],
              members: {
                clientToken: {},
                description: {},
                networkSiteArn: {}
              }
            },
            output: {
              shape: 'S3k'
            },
            idempotent: true
          },
          UpdateNetworkSitePlan: {
            http: {
              method: 'PUT',
              requestUri: '/v1/network-sites/plan',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['networkSiteArn', 'pendingPlan'],
              members: {
                clientToken: {},
                networkSiteArn: {},
                pendingPlan: {
                  shape: 'Sv'
                }
              }
            },
            output: {
              shape: 'S3k'
            },
            idempotent: true
          }
        },
        shapes: {
          S4: {
            type: 'structure',
            members: {
              acknowledgmentStatus: {},
              createdAt: {
                shape: 'S6'
              },
              networkArn: {},
              networkSiteArn: {},
              orderArn: {},
              orderedResources: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['count', 'type'],
                  members: {
                    commitmentConfiguration: {
                      shape: 'S9'
                    },
                    count: {
                      type: 'integer'
                    },
                    type: {}
                  }
                }
              },
              shippingAddress: {
                shape: 'Se'
              },
              trackingInformation: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    trackingNumber: {}
                  }
                }
              }
            }
          },
          S6: {
            type: 'timestamp',
            timestampFormat: 'iso8601'
          },
          S9: {
            type: 'structure',
            required: ['automaticRenewal', 'commitmentLength'],
            members: {
              automaticRenewal: {
                type: 'boolean'
              },
              commitmentLength: {}
            }
          },
          Se: {
            type: 'structure',
            required: ['city', 'country', 'name', 'postalCode', 'stateOrProvince', 'street1'],
            members: {
              city: {
                shape: 'Sf'
              },
              company: {
                shape: 'Sf'
              },
              country: {
                shape: 'Sf'
              },
              emailAddress: {
                shape: 'Sf'
              },
              name: {
                shape: 'Sf'
              },
              phoneNumber: {
                shape: 'Sf'
              },
              postalCode: {
                shape: 'Sf'
              },
              stateOrProvince: {
                shape: 'Sf'
              },
              street1: {
                shape: 'Sf'
              },
              street2: {
                shape: 'Sf'
              },
              street3: {
                shape: 'Sf'
              }
            }
          },
          Sf: {
            type: 'string',
            sensitive: true
          },
          Sm: {
            type: 'structure',
            members: {
              createdAt: {
                shape: 'S6'
              },
              deviceIdentifierArn: {},
              iccid: {},
              imsi: {
                type: 'string',
                sensitive: true
              },
              networkArn: {},
              orderArn: {},
              status: {},
              trafficGroupArn: {},
              vendor: {}
            }
          },
          Sp: {
            type: 'map',
            key: {},
            value: {},
            sensitive: true
          },
          Su: {
            type: 'structure',
            required: ['networkArn', 'networkSiteArn', 'networkSiteName', 'status'],
            members: {
              availabilityZone: {},
              availabilityZoneId: {},
              createdAt: {
                shape: 'S6'
              },
              currentPlan: {
                shape: 'Sv'
              },
              description: {},
              networkArn: {},
              networkSiteArn: {},
              networkSiteName: {},
              pendingPlan: {
                shape: 'Sv'
              },
              status: {},
              statusReason: {}
            }
          },
          Sv: {
            type: 'structure',
            members: {
              options: {
                shape: 'Sw'
              },
              resourceDefinitions: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['count', 'type'],
                  members: {
                    count: {
                      type: 'integer'
                    },
                    options: {
                      shape: 'Sw'
                    },
                    type: {}
                  }
                }
              }
            }
          },
          Sw: {
            type: 'list',
            member: {
              shape: 'Sx'
            }
          },
          Sx: {
            type: 'structure',
            required: ['name'],
            members: {
              name: {},
              value: {}
            }
          },
          S19: {
            type: 'structure',
            members: {
              elevation: {
                type: 'double'
              },
              elevationReference: {},
              elevationUnit: {},
              latitude: {
                type: 'double'
              },
              longitude: {
                type: 'double'
              }
            }
          },
          S1e: {
            type: 'structure',
            members: {
              attributes: {
                type: 'list',
                member: {
                  shape: 'Sx'
                }
              },
              commitmentInformation: {
                type: 'structure',
                required: ['commitmentConfiguration'],
                members: {
                  commitmentConfiguration: {
                    shape: 'S9'
                  },
                  expiresOn: {
                    shape: 'S6'
                  },
                  startAt: {
                    shape: 'S6'
                  }
                }
              },
              createdAt: {
                shape: 'S6'
              },
              description: {},
              health: {},
              model: {},
              networkArn: {},
              networkResourceArn: {},
              networkSiteArn: {},
              orderArn: {},
              position: {
                shape: 'S19'
              },
              returnInformation: {
                type: 'structure',
                members: {
                  replacementOrderArn: {},
                  returnReason: {},
                  shippingAddress: {
                    shape: 'Se'
                  },
                  shippingLabel: {}
                }
              },
              serialNumber: {},
              status: {},
              statusReason: {},
              type: {},
              vendor: {}
            }
          },
          S1n: {
            type: 'structure',
            required: ['networkArn', 'networkName', 'status'],
            members: {
              createdAt: {
                shape: 'S6'
              },
              description: {},
              networkArn: {},
              networkName: {},
              status: {},
              statusReason: {}
            }
          },
          S3k: {
            type: 'structure',
            members: {
              networkSite: {
                shape: 'Su'
              },
              tags: {
                shape: 'Sp'
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=3d7ee6cfb8cb9b459cea7a3cdc5b749afc16b075.js.map