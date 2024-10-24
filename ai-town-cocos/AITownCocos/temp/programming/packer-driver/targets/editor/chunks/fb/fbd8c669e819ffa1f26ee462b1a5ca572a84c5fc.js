System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2019-12-03',
          endpointPrefix: 'outposts',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceAbbreviation: 'Outposts',
          serviceFullName: 'AWS Outposts',
          serviceId: 'Outposts',
          signatureVersion: 'v4',
          signingName: 'outposts',
          uid: 'outposts-2019-12-03'
        },
        operations: {
          CancelCapacityTask: {
            http: {
              requestUri: '/outposts/{OutpostId}/capacity/{CapacityTaskId}'
            },
            input: {
              type: 'structure',
              required: ['CapacityTaskId', 'OutpostIdentifier'],
              members: {
                CapacityTaskId: {
                  location: 'uri',
                  locationName: 'CapacityTaskId'
                },
                OutpostIdentifier: {
                  location: 'uri',
                  locationName: 'OutpostId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          CancelOrder: {
            http: {
              requestUri: '/orders/{OrderId}/cancel'
            },
            input: {
              type: 'structure',
              required: ['OrderId'],
              members: {
                OrderId: {
                  location: 'uri',
                  locationName: 'OrderId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          CreateOrder: {
            http: {
              requestUri: '/orders'
            },
            input: {
              type: 'structure',
              required: ['OutpostIdentifier', 'LineItems', 'PaymentOption'],
              members: {
                OutpostIdentifier: {},
                LineItems: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      CatalogItemId: {},
                      Quantity: {
                        type: 'integer'
                      }
                    }
                  }
                },
                PaymentOption: {},
                PaymentTerm: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Order: {
                  shape: 'Sg'
                }
              }
            }
          },
          CreateOutpost: {
            http: {
              requestUri: '/outposts'
            },
            input: {
              type: 'structure',
              required: ['Name', 'SiteId'],
              members: {
                Name: {},
                Description: {},
                SiteId: {},
                AvailabilityZone: {},
                AvailabilityZoneId: {},
                Tags: {
                  shape: 'S13'
                },
                SupportedHardwareType: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Outpost: {
                  shape: 'S18'
                }
              }
            }
          },
          CreateSite: {
            http: {
              requestUri: '/sites'
            },
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {},
                Description: {},
                Notes: {},
                Tags: {
                  shape: 'S13'
                },
                OperatingAddress: {
                  shape: 'S1i'
                },
                ShippingAddress: {
                  shape: 'S1i'
                },
                RackPhysicalProperties: {
                  shape: 'S1u'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Site: {
                  shape: 'S25'
                }
              }
            }
          },
          DeleteOutpost: {
            http: {
              method: 'DELETE',
              requestUri: '/outposts/{OutpostId}'
            },
            input: {
              type: 'structure',
              required: ['OutpostId'],
              members: {
                OutpostId: {
                  location: 'uri',
                  locationName: 'OutpostId'
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
              requestUri: '/sites/{SiteId}'
            },
            input: {
              type: 'structure',
              required: ['SiteId'],
              members: {
                SiteId: {
                  location: 'uri',
                  locationName: 'SiteId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          GetCapacityTask: {
            http: {
              method: 'GET',
              requestUri: '/outposts/{OutpostId}/capacity/{CapacityTaskId}'
            },
            input: {
              type: 'structure',
              required: ['CapacityTaskId', 'OutpostIdentifier'],
              members: {
                CapacityTaskId: {
                  location: 'uri',
                  locationName: 'CapacityTaskId'
                },
                OutpostIdentifier: {
                  location: 'uri',
                  locationName: 'OutpostId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                CapacityTaskId: {},
                OutpostId: {},
                OrderId: {},
                RequestedInstancePools: {
                  shape: 'S2d'
                },
                DryRun: {
                  type: 'boolean'
                },
                CapacityTaskStatus: {},
                Failed: {
                  shape: 'S2j'
                },
                CreationDate: {
                  type: 'timestamp'
                },
                CompletionDate: {
                  type: 'timestamp'
                },
                LastModifiedDate: {
                  type: 'timestamp'
                }
              }
            }
          },
          GetCatalogItem: {
            http: {
              method: 'GET',
              requestUri: '/catalog/item/{CatalogItemId}'
            },
            input: {
              type: 'structure',
              required: ['CatalogItemId'],
              members: {
                CatalogItemId: {
                  location: 'uri',
                  locationName: 'CatalogItemId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                CatalogItem: {
                  shape: 'S2o'
                }
              }
            }
          },
          GetConnection: {
            http: {
              method: 'GET',
              requestUri: '/connections/{ConnectionId}'
            },
            input: {
              type: 'structure',
              required: ['ConnectionId'],
              members: {
                ConnectionId: {
                  location: 'uri',
                  locationName: 'ConnectionId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ConnectionId: {},
                ConnectionDetails: {
                  type: 'structure',
                  members: {
                    ClientPublicKey: {},
                    ServerPublicKey: {},
                    ServerEndpoint: {},
                    ClientTunnelAddress: {},
                    ServerTunnelAddress: {},
                    AllowedIps: {
                      type: 'list',
                      member: {}
                    }
                  }
                }
              }
            }
          },
          GetOrder: {
            http: {
              method: 'GET',
              requestUri: '/orders/{OrderId}'
            },
            input: {
              type: 'structure',
              required: ['OrderId'],
              members: {
                OrderId: {
                  location: 'uri',
                  locationName: 'OrderId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Order: {
                  shape: 'Sg'
                }
              }
            }
          },
          GetOutpost: {
            http: {
              method: 'GET',
              requestUri: '/outposts/{OutpostId}'
            },
            input: {
              type: 'structure',
              required: ['OutpostId'],
              members: {
                OutpostId: {
                  location: 'uri',
                  locationName: 'OutpostId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Outpost: {
                  shape: 'S18'
                }
              }
            }
          },
          GetOutpostInstanceTypes: {
            http: {
              method: 'GET',
              requestUri: '/outposts/{OutpostId}/instanceTypes'
            },
            input: {
              type: 'structure',
              required: ['OutpostId'],
              members: {
                OutpostId: {
                  location: 'uri',
                  locationName: 'OutpostId'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'NextToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'MaxResults',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                InstanceTypes: {
                  shape: 'S3h'
                },
                NextToken: {},
                OutpostId: {},
                OutpostArn: {}
              }
            }
          },
          GetOutpostSupportedInstanceTypes: {
            http: {
              method: 'GET',
              requestUri: '/outposts/{OutpostId}/supportedInstanceTypes'
            },
            input: {
              type: 'structure',
              required: ['OutpostIdentifier', 'OrderId'],
              members: {
                OutpostIdentifier: {
                  location: 'uri',
                  locationName: 'OutpostId'
                },
                OrderId: {
                  location: 'querystring',
                  locationName: 'OrderId'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'MaxResults',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'NextToken'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                InstanceTypes: {
                  shape: 'S3h'
                },
                NextToken: {}
              }
            }
          },
          GetSite: {
            http: {
              method: 'GET',
              requestUri: '/sites/{SiteId}'
            },
            input: {
              type: 'structure',
              required: ['SiteId'],
              members: {
                SiteId: {
                  location: 'uri',
                  locationName: 'SiteId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Site: {
                  shape: 'S25'
                }
              }
            }
          },
          GetSiteAddress: {
            http: {
              method: 'GET',
              requestUri: '/sites/{SiteId}/address'
            },
            input: {
              type: 'structure',
              required: ['SiteId', 'AddressType'],
              members: {
                SiteId: {
                  location: 'uri',
                  locationName: 'SiteId'
                },
                AddressType: {
                  location: 'querystring',
                  locationName: 'AddressType'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                SiteId: {},
                AddressType: {},
                Address: {
                  shape: 'S1i'
                }
              }
            }
          },
          ListAssets: {
            http: {
              method: 'GET',
              requestUri: '/outposts/{OutpostId}/assets'
            },
            input: {
              type: 'structure',
              required: ['OutpostIdentifier'],
              members: {
                OutpostIdentifier: {
                  location: 'uri',
                  locationName: 'OutpostId'
                },
                HostIdFilter: {
                  location: 'querystring',
                  locationName: 'HostIdFilter',
                  type: 'list',
                  member: {}
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'MaxResults',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'NextToken'
                },
                StatusFilter: {
                  location: 'querystring',
                  locationName: 'StatusFilter',
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Assets: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      AssetId: {},
                      RackId: {},
                      AssetType: {},
                      ComputeAttributes: {
                        type: 'structure',
                        members: {
                          HostId: {},
                          State: {},
                          InstanceFamilies: {
                            type: 'list',
                            member: {}
                          }
                        }
                      },
                      AssetLocation: {
                        type: 'structure',
                        members: {
                          RackElevation: {
                            type: 'float'
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
          ListCapacityTasks: {
            http: {
              method: 'GET',
              requestUri: '/capacity/tasks'
            },
            input: {
              type: 'structure',
              members: {
                OutpostIdentifierFilter: {
                  location: 'querystring',
                  locationName: 'OutpostIdentifierFilter'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'MaxResults',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'NextToken'
                },
                CapacityTaskStatusFilter: {
                  location: 'querystring',
                  locationName: 'CapacityTaskStatusFilter',
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                CapacityTasks: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      CapacityTaskId: {},
                      OutpostId: {},
                      OrderId: {},
                      CapacityTaskStatus: {},
                      CreationDate: {
                        type: 'timestamp'
                      },
                      CompletionDate: {
                        type: 'timestamp'
                      },
                      LastModifiedDate: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListCatalogItems: {
            http: {
              method: 'GET',
              requestUri: '/catalog/items'
            },
            input: {
              type: 'structure',
              members: {
                NextToken: {
                  location: 'querystring',
                  locationName: 'NextToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'MaxResults',
                  type: 'integer'
                },
                ItemClassFilter: {
                  location: 'querystring',
                  locationName: 'ItemClassFilter',
                  type: 'list',
                  member: {}
                },
                SupportedStorageFilter: {
                  shape: 'S2z',
                  location: 'querystring',
                  locationName: 'SupportedStorageFilter'
                },
                EC2FamilyFilter: {
                  location: 'querystring',
                  locationName: 'EC2FamilyFilter',
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                CatalogItems: {
                  type: 'list',
                  member: {
                    shape: 'S2o'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListOrders: {
            http: {
              method: 'GET',
              requestUri: '/list-orders'
            },
            input: {
              type: 'structure',
              members: {
                OutpostIdentifierFilter: {
                  location: 'querystring',
                  locationName: 'OutpostIdentifierFilter'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'NextToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'MaxResults',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Orders: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      OutpostId: {},
                      OrderId: {},
                      OrderType: {},
                      Status: {},
                      LineItemCountsByStatus: {
                        type: 'map',
                        key: {},
                        value: {
                          type: 'integer'
                        }
                      },
                      OrderSubmissionDate: {
                        type: 'timestamp'
                      },
                      OrderFulfilledDate: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListOutposts: {
            http: {
              method: 'GET',
              requestUri: '/outposts'
            },
            input: {
              type: 'structure',
              members: {
                NextToken: {
                  location: 'querystring',
                  locationName: 'NextToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'MaxResults',
                  type: 'integer'
                },
                LifeCycleStatusFilter: {
                  location: 'querystring',
                  locationName: 'LifeCycleStatusFilter',
                  type: 'list',
                  member: {}
                },
                AvailabilityZoneFilter: {
                  location: 'querystring',
                  locationName: 'AvailabilityZoneFilter',
                  type: 'list',
                  member: {}
                },
                AvailabilityZoneIdFilter: {
                  location: 'querystring',
                  locationName: 'AvailabilityZoneIdFilter',
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Outposts: {
                  type: 'list',
                  member: {
                    shape: 'S18'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListSites: {
            http: {
              method: 'GET',
              requestUri: '/sites'
            },
            input: {
              type: 'structure',
              members: {
                NextToken: {
                  location: 'querystring',
                  locationName: 'NextToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'MaxResults',
                  type: 'integer'
                },
                OperatingAddressCountryCodeFilter: {
                  location: 'querystring',
                  locationName: 'OperatingAddressCountryCodeFilter',
                  type: 'list',
                  member: {}
                },
                OperatingAddressStateOrRegionFilter: {
                  location: 'querystring',
                  locationName: 'OperatingAddressStateOrRegionFilter',
                  type: 'list',
                  member: {}
                },
                OperatingAddressCityFilter: {
                  location: 'querystring',
                  locationName: 'OperatingAddressCityFilter',
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Sites: {
                  type: 'list',
                  member: {
                    shape: 'S25'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListTagsForResource: {
            http: {
              method: 'GET',
              requestUri: '/tags/{ResourceArn}'
            },
            input: {
              type: 'structure',
              required: ['ResourceArn'],
              members: {
                ResourceArn: {
                  location: 'uri',
                  locationName: 'ResourceArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Tags: {
                  shape: 'S13'
                }
              }
            }
          },
          StartCapacityTask: {
            http: {
              requestUri: '/outposts/{OutpostId}/capacity'
            },
            input: {
              type: 'structure',
              required: ['OutpostIdentifier', 'OrderId', 'InstancePools'],
              members: {
                OutpostIdentifier: {
                  location: 'uri',
                  locationName: 'OutpostId'
                },
                OrderId: {},
                InstancePools: {
                  shape: 'S2d'
                },
                DryRun: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                CapacityTaskId: {},
                OutpostId: {},
                OrderId: {},
                RequestedInstancePools: {
                  shape: 'S2d'
                },
                DryRun: {
                  type: 'boolean'
                },
                CapacityTaskStatus: {},
                Failed: {
                  shape: 'S2j'
                },
                CreationDate: {
                  type: 'timestamp'
                },
                CompletionDate: {
                  type: 'timestamp'
                },
                LastModifiedDate: {
                  type: 'timestamp'
                }
              }
            }
          },
          StartConnection: {
            http: {
              requestUri: '/connections'
            },
            input: {
              type: 'structure',
              required: ['AssetId', 'ClientPublicKey', 'NetworkInterfaceDeviceIndex'],
              members: {
                DeviceSerialNumber: {},
                AssetId: {},
                ClientPublicKey: {},
                NetworkInterfaceDeviceIndex: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ConnectionId: {},
                UnderlayIpAddress: {}
              }
            }
          },
          TagResource: {
            http: {
              requestUri: '/tags/{ResourceArn}'
            },
            input: {
              type: 'structure',
              required: ['ResourceArn', 'Tags'],
              members: {
                ResourceArn: {
                  location: 'uri',
                  locationName: 'ResourceArn'
                },
                Tags: {
                  shape: 'S13'
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
              requestUri: '/tags/{ResourceArn}'
            },
            input: {
              type: 'structure',
              required: ['ResourceArn', 'TagKeys'],
              members: {
                ResourceArn: {
                  location: 'uri',
                  locationName: 'ResourceArn'
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
          UpdateOutpost: {
            http: {
              method: 'PATCH',
              requestUri: '/outposts/{OutpostId}'
            },
            input: {
              type: 'structure',
              required: ['OutpostId'],
              members: {
                OutpostId: {
                  location: 'uri',
                  locationName: 'OutpostId'
                },
                Name: {},
                Description: {},
                SupportedHardwareType: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Outpost: {
                  shape: 'S18'
                }
              }
            }
          },
          UpdateSite: {
            http: {
              method: 'PATCH',
              requestUri: '/sites/{SiteId}'
            },
            input: {
              type: 'structure',
              required: ['SiteId'],
              members: {
                SiteId: {
                  location: 'uri',
                  locationName: 'SiteId'
                },
                Name: {},
                Description: {},
                Notes: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Site: {
                  shape: 'S25'
                }
              }
            }
          },
          UpdateSiteAddress: {
            http: {
              method: 'PUT',
              requestUri: '/sites/{SiteId}/address'
            },
            input: {
              type: 'structure',
              required: ['SiteId', 'AddressType', 'Address'],
              members: {
                SiteId: {
                  location: 'uri',
                  locationName: 'SiteId'
                },
                AddressType: {},
                Address: {
                  shape: 'S1i'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AddressType: {},
                Address: {
                  shape: 'S1i'
                }
              }
            }
          },
          UpdateSiteRackPhysicalProperties: {
            http: {
              method: 'PATCH',
              requestUri: '/sites/{SiteId}/rackPhysicalProperties'
            },
            input: {
              type: 'structure',
              required: ['SiteId'],
              members: {
                SiteId: {
                  location: 'uri',
                  locationName: 'SiteId'
                },
                PowerDrawKva: {},
                PowerPhase: {},
                PowerConnector: {},
                PowerFeedDrop: {},
                UplinkGbps: {},
                UplinkCount: {},
                FiberOpticCableType: {},
                OpticalStandard: {},
                MaximumSupportedWeightLbs: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Site: {
                  shape: 'S25'
                }
              }
            }
          }
        },
        shapes: {
          Sg: {
            type: 'structure',
            members: {
              OutpostId: {},
              OrderId: {},
              Status: {},
              LineItems: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    CatalogItemId: {},
                    LineItemId: {},
                    Quantity: {
                      type: 'integer'
                    },
                    Status: {},
                    ShipmentInformation: {
                      type: 'structure',
                      members: {
                        ShipmentTrackingNumber: {},
                        ShipmentCarrier: {}
                      }
                    },
                    AssetInformationList: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          AssetId: {},
                          MacAddressList: {
                            type: 'list',
                            member: {}
                          }
                        }
                      }
                    },
                    PreviousLineItemId: {},
                    PreviousOrderId: {}
                  }
                }
              },
              PaymentOption: {},
              OrderSubmissionDate: {
                type: 'timestamp'
              },
              OrderFulfilledDate: {
                type: 'timestamp'
              },
              PaymentTerm: {},
              OrderType: {}
            }
          },
          S13: {
            type: 'map',
            key: {},
            value: {}
          },
          S18: {
            type: 'structure',
            members: {
              OutpostId: {},
              OwnerId: {},
              OutpostArn: {},
              SiteId: {},
              Name: {},
              Description: {},
              LifeCycleStatus: {},
              AvailabilityZone: {},
              AvailabilityZoneId: {},
              Tags: {
                shape: 'S13'
              },
              SiteArn: {},
              SupportedHardwareType: {}
            }
          },
          S1i: {
            type: 'structure',
            required: ['AddressLine1', 'City', 'StateOrRegion', 'PostalCode', 'CountryCode'],
            members: {
              ContactName: {},
              ContactPhoneNumber: {},
              AddressLine1: {},
              AddressLine2: {},
              AddressLine3: {},
              City: {},
              StateOrRegion: {},
              DistrictOrCounty: {},
              PostalCode: {},
              CountryCode: {},
              Municipality: {}
            }
          },
          S1u: {
            type: 'structure',
            members: {
              PowerDrawKva: {},
              PowerPhase: {},
              PowerConnector: {},
              PowerFeedDrop: {},
              UplinkGbps: {},
              UplinkCount: {},
              FiberOpticCableType: {},
              OpticalStandard: {},
              MaximumSupportedWeightLbs: {}
            }
          },
          S25: {
            type: 'structure',
            members: {
              SiteId: {},
              AccountId: {},
              Name: {},
              Description: {},
              Tags: {
                shape: 'S13'
              },
              SiteArn: {},
              Notes: {},
              OperatingAddressCountryCode: {},
              OperatingAddressStateOrRegion: {},
              OperatingAddressCity: {},
              RackPhysicalProperties: {
                shape: 'S1u'
              }
            }
          },
          S2d: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['InstanceType', 'Count'],
              members: {
                InstanceType: {},
                Count: {
                  type: 'integer'
                }
              }
            }
          },
          S2j: {
            type: 'structure',
            required: ['Reason'],
            members: {
              Reason: {},
              Type: {}
            }
          },
          S2o: {
            type: 'structure',
            members: {
              CatalogItemId: {},
              ItemStatus: {},
              EC2Capacities: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    Family: {},
                    MaxSize: {},
                    Quantity: {}
                  }
                }
              },
              PowerKva: {
                type: 'float'
              },
              WeightLbs: {
                type: 'integer'
              },
              SupportedUplinkGbps: {
                type: 'list',
                member: {
                  type: 'integer'
                }
              },
              SupportedStorage: {
                shape: 'S2z'
              }
            }
          },
          S2z: {
            type: 'list',
            member: {}
          },
          S3h: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                InstanceType: {}
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=fbd8c669e819ffa1f26ee462b1a5ca572a84c5fc.js.map