System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2018-09-25',
          endpointPrefix: 'worklink',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceAbbreviation: 'WorkLink',
          serviceFullName: 'Amazon WorkLink',
          serviceId: 'WorkLink',
          signatureVersion: 'v4',
          signingName: 'worklink',
          uid: 'worklink-2018-09-25'
        },
        operations: {
          AssociateDomain: {
            http: {
              requestUri: '/associateDomain'
            },
            input: {
              type: 'structure',
              required: ['FleetArn', 'DomainName', 'AcmCertificateArn'],
              members: {
                FleetArn: {},
                DomainName: {},
                DisplayName: {},
                AcmCertificateArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            deprecated: true,
            deprecatedMessage: 'Amazon WorkLink is no longer supported. This will be removed in a future version of the SDK.'
          },
          AssociateWebsiteAuthorizationProvider: {
            http: {
              requestUri: '/associateWebsiteAuthorizationProvider'
            },
            input: {
              type: 'structure',
              required: ['FleetArn', 'AuthorizationProviderType'],
              members: {
                FleetArn: {},
                AuthorizationProviderType: {},
                DomainName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                AuthorizationProviderId: {}
              }
            },
            deprecated: true,
            deprecatedMessage: 'Amazon WorkLink is no longer supported. This will be removed in a future version of the SDK.'
          },
          AssociateWebsiteCertificateAuthority: {
            http: {
              requestUri: '/associateWebsiteCertificateAuthority'
            },
            input: {
              type: 'structure',
              required: ['FleetArn', 'Certificate'],
              members: {
                FleetArn: {},
                Certificate: {},
                DisplayName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                WebsiteCaId: {}
              }
            },
            deprecated: true,
            deprecatedMessage: 'Amazon WorkLink is no longer supported. This will be removed in a future version of the SDK.'
          },
          CreateFleet: {
            http: {
              requestUri: '/createFleet'
            },
            input: {
              type: 'structure',
              required: ['FleetName'],
              members: {
                FleetName: {},
                DisplayName: {},
                OptimizeForEndUserLocation: {
                  type: 'boolean'
                },
                Tags: {
                  shape: 'Sh'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                FleetArn: {}
              }
            },
            deprecated: true,
            deprecatedMessage: 'Amazon WorkLink is no longer supported. This will be removed in a future version of the SDK.'
          },
          DeleteFleet: {
            http: {
              requestUri: '/deleteFleet'
            },
            input: {
              type: 'structure',
              required: ['FleetArn'],
              members: {
                FleetArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            deprecated: true,
            deprecatedMessage: 'Amazon WorkLink is no longer supported. This will be removed in a future version of the SDK.'
          },
          DescribeAuditStreamConfiguration: {
            http: {
              requestUri: '/describeAuditStreamConfiguration'
            },
            input: {
              type: 'structure',
              required: ['FleetArn'],
              members: {
                FleetArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                AuditStreamArn: {}
              }
            },
            deprecated: true,
            deprecatedMessage: 'Amazon WorkLink is no longer supported. This will be removed in a future version of the SDK.'
          },
          DescribeCompanyNetworkConfiguration: {
            http: {
              requestUri: '/describeCompanyNetworkConfiguration'
            },
            input: {
              type: 'structure',
              required: ['FleetArn'],
              members: {
                FleetArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                VpcId: {},
                SubnetIds: {
                  shape: 'St'
                },
                SecurityGroupIds: {
                  shape: 'Sv'
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'Amazon WorkLink is no longer supported. This will be removed in a future version of the SDK.'
          },
          DescribeDevice: {
            http: {
              requestUri: '/describeDevice'
            },
            input: {
              type: 'structure',
              required: ['FleetArn', 'DeviceId'],
              members: {
                FleetArn: {},
                DeviceId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Status: {},
                Model: {},
                Manufacturer: {},
                OperatingSystem: {},
                OperatingSystemVersion: {},
                PatchLevel: {},
                FirstAccessedTime: {
                  type: 'timestamp'
                },
                LastAccessedTime: {
                  type: 'timestamp'
                },
                Username: {}
              }
            },
            deprecated: true,
            deprecatedMessage: 'Amazon WorkLink is no longer supported. This will be removed in a future version of the SDK.'
          },
          DescribeDevicePolicyConfiguration: {
            http: {
              requestUri: '/describeDevicePolicyConfiguration'
            },
            input: {
              type: 'structure',
              required: ['FleetArn'],
              members: {
                FleetArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                DeviceCaCertificate: {}
              }
            },
            deprecated: true,
            deprecatedMessage: 'Amazon WorkLink is no longer supported. This will be removed in a future version of the SDK.'
          },
          DescribeDomain: {
            http: {
              requestUri: '/describeDomain'
            },
            input: {
              type: 'structure',
              required: ['FleetArn', 'DomainName'],
              members: {
                FleetArn: {},
                DomainName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                DomainName: {},
                DisplayName: {},
                CreatedTime: {
                  type: 'timestamp'
                },
                DomainStatus: {},
                AcmCertificateArn: {}
              }
            },
            deprecated: true,
            deprecatedMessage: 'Amazon WorkLink is no longer supported. This will be removed in a future version of the SDK.'
          },
          DescribeFleetMetadata: {
            http: {
              requestUri: '/describeFleetMetadata'
            },
            input: {
              type: 'structure',
              required: ['FleetArn'],
              members: {
                FleetArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                CreatedTime: {
                  type: 'timestamp'
                },
                LastUpdatedTime: {
                  type: 'timestamp'
                },
                FleetName: {},
                DisplayName: {},
                OptimizeForEndUserLocation: {
                  type: 'boolean'
                },
                CompanyCode: {},
                FleetStatus: {},
                Tags: {
                  shape: 'Sh'
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'Amazon WorkLink is no longer supported. This will be removed in a future version of the SDK.'
          },
          DescribeIdentityProviderConfiguration: {
            http: {
              requestUri: '/describeIdentityProviderConfiguration'
            },
            input: {
              type: 'structure',
              required: ['FleetArn'],
              members: {
                FleetArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                IdentityProviderType: {},
                ServiceProviderSamlMetadata: {},
                IdentityProviderSamlMetadata: {}
              }
            },
            deprecated: true,
            deprecatedMessage: 'Amazon WorkLink is no longer supported. This will be removed in a future version of the SDK.'
          },
          DescribeWebsiteCertificateAuthority: {
            http: {
              requestUri: '/describeWebsiteCertificateAuthority'
            },
            input: {
              type: 'structure',
              required: ['FleetArn', 'WebsiteCaId'],
              members: {
                FleetArn: {},
                WebsiteCaId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Certificate: {},
                CreatedTime: {
                  type: 'timestamp'
                },
                DisplayName: {}
              }
            },
            deprecated: true,
            deprecatedMessage: 'Amazon WorkLink is no longer supported. This will be removed in a future version of the SDK.'
          },
          DisassociateDomain: {
            http: {
              requestUri: '/disassociateDomain'
            },
            input: {
              type: 'structure',
              required: ['FleetArn', 'DomainName'],
              members: {
                FleetArn: {},
                DomainName: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            deprecated: true,
            deprecatedMessage: 'Amazon WorkLink is no longer supported. This will be removed in a future version of the SDK.'
          },
          DisassociateWebsiteAuthorizationProvider: {
            http: {
              requestUri: '/disassociateWebsiteAuthorizationProvider'
            },
            input: {
              type: 'structure',
              required: ['FleetArn', 'AuthorizationProviderId'],
              members: {
                FleetArn: {},
                AuthorizationProviderId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            deprecated: true,
            deprecatedMessage: 'Amazon WorkLink is no longer supported. This will be removed in a future version of the SDK.'
          },
          DisassociateWebsiteCertificateAuthority: {
            http: {
              requestUri: '/disassociateWebsiteCertificateAuthority'
            },
            input: {
              type: 'structure',
              required: ['FleetArn', 'WebsiteCaId'],
              members: {
                FleetArn: {},
                WebsiteCaId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            deprecated: true,
            deprecatedMessage: 'Amazon WorkLink is no longer supported. This will be removed in a future version of the SDK.'
          },
          ListDevices: {
            http: {
              requestUri: '/listDevices'
            },
            input: {
              type: 'structure',
              required: ['FleetArn'],
              members: {
                FleetArn: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Devices: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      DeviceId: {},
                      DeviceStatus: {}
                    }
                  }
                },
                NextToken: {}
              }
            },
            deprecated: true,
            deprecatedMessage: 'Amazon WorkLink is no longer supported. This will be removed in a future version of the SDK.'
          },
          ListDomains: {
            http: {
              requestUri: '/listDomains'
            },
            input: {
              type: 'structure',
              required: ['FleetArn'],
              members: {
                FleetArn: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Domains: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['DomainName', 'CreatedTime', 'DomainStatus'],
                    members: {
                      DomainName: {},
                      DisplayName: {},
                      CreatedTime: {
                        type: 'timestamp'
                      },
                      DomainStatus: {}
                    }
                  }
                },
                NextToken: {}
              }
            },
            deprecated: true,
            deprecatedMessage: 'Amazon WorkLink is no longer supported. This will be removed in a future version of the SDK.'
          },
          ListFleets: {
            http: {
              requestUri: '/listFleets'
            },
            input: {
              type: 'structure',
              members: {
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                FleetSummaryList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      FleetArn: {},
                      CreatedTime: {
                        type: 'timestamp'
                      },
                      LastUpdatedTime: {
                        type: 'timestamp'
                      },
                      FleetName: {},
                      DisplayName: {},
                      CompanyCode: {},
                      FleetStatus: {},
                      Tags: {
                        shape: 'Sh'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            },
            deprecated: true,
            deprecatedMessage: 'Amazon WorkLink is no longer supported. This will be removed in a future version of the SDK.'
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
                  shape: 'Sh'
                }
              }
            },
            deprecated: true,
            deprecatedMessage: 'Amazon WorkLink is no longer supported. This will be removed in a future version of the SDK.'
          },
          ListWebsiteAuthorizationProviders: {
            http: {
              requestUri: '/listWebsiteAuthorizationProviders'
            },
            input: {
              type: 'structure',
              required: ['FleetArn'],
              members: {
                FleetArn: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                WebsiteAuthorizationProviders: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['AuthorizationProviderType'],
                    members: {
                      AuthorizationProviderId: {},
                      AuthorizationProviderType: {},
                      DomainName: {},
                      CreatedTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            },
            deprecated: true,
            deprecatedMessage: 'Amazon WorkLink is no longer supported. This will be removed in a future version of the SDK.'
          },
          ListWebsiteCertificateAuthorities: {
            http: {
              requestUri: '/listWebsiteCertificateAuthorities'
            },
            input: {
              type: 'structure',
              required: ['FleetArn'],
              members: {
                FleetArn: {},
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                WebsiteCertificateAuthorities: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      WebsiteCaId: {},
                      CreatedTime: {
                        type: 'timestamp'
                      },
                      DisplayName: {}
                    }
                  }
                },
                NextToken: {}
              }
            },
            deprecated: true,
            deprecatedMessage: 'Amazon WorkLink is no longer supported. This will be removed in a future version of the SDK.'
          },
          RestoreDomainAccess: {
            http: {
              requestUri: '/restoreDomainAccess'
            },
            input: {
              type: 'structure',
              required: ['FleetArn', 'DomainName'],
              members: {
                FleetArn: {},
                DomainName: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            deprecated: true,
            deprecatedMessage: 'Amazon WorkLink is no longer supported. This will be removed in a future version of the SDK.'
          },
          RevokeDomainAccess: {
            http: {
              requestUri: '/revokeDomainAccess'
            },
            input: {
              type: 'structure',
              required: ['FleetArn', 'DomainName'],
              members: {
                FleetArn: {},
                DomainName: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            deprecated: true,
            deprecatedMessage: 'Amazon WorkLink is no longer supported. This will be removed in a future version of the SDK.'
          },
          SignOutUser: {
            http: {
              requestUri: '/signOutUser'
            },
            input: {
              type: 'structure',
              required: ['FleetArn', 'Username'],
              members: {
                FleetArn: {},
                Username: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            deprecated: true,
            deprecatedMessage: 'Amazon WorkLink is no longer supported. This will be removed in a future version of the SDK.'
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
                  shape: 'Sh'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            deprecated: true,
            deprecatedMessage: 'Amazon WorkLink is no longer supported. This will be removed in a future version of the SDK.'
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
            },
            deprecated: true,
            deprecatedMessage: 'Amazon WorkLink is no longer supported. This will be removed in a future version of the SDK.'
          },
          UpdateAuditStreamConfiguration: {
            http: {
              requestUri: '/updateAuditStreamConfiguration'
            },
            input: {
              type: 'structure',
              required: ['FleetArn'],
              members: {
                FleetArn: {},
                AuditStreamArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            deprecated: true,
            deprecatedMessage: 'Amazon WorkLink is no longer supported. This will be removed in a future version of the SDK.'
          },
          UpdateCompanyNetworkConfiguration: {
            http: {
              requestUri: '/updateCompanyNetworkConfiguration'
            },
            input: {
              type: 'structure',
              required: ['FleetArn', 'VpcId', 'SubnetIds', 'SecurityGroupIds'],
              members: {
                FleetArn: {},
                VpcId: {},
                SubnetIds: {
                  shape: 'St'
                },
                SecurityGroupIds: {
                  shape: 'Sv'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            deprecated: true,
            deprecatedMessage: 'Amazon WorkLink is no longer supported. This will be removed in a future version of the SDK.'
          },
          UpdateDevicePolicyConfiguration: {
            http: {
              requestUri: '/updateDevicePolicyConfiguration'
            },
            input: {
              type: 'structure',
              required: ['FleetArn'],
              members: {
                FleetArn: {},
                DeviceCaCertificate: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            deprecated: true,
            deprecatedMessage: 'Amazon WorkLink is no longer supported. This will be removed in a future version of the SDK.'
          },
          UpdateDomainMetadata: {
            http: {
              requestUri: '/updateDomainMetadata'
            },
            input: {
              type: 'structure',
              required: ['FleetArn', 'DomainName'],
              members: {
                FleetArn: {},
                DomainName: {},
                DisplayName: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            deprecated: true,
            deprecatedMessage: 'Amazon WorkLink is no longer supported. This will be removed in a future version of the SDK.'
          },
          UpdateFleetMetadata: {
            http: {
              requestUri: '/UpdateFleetMetadata'
            },
            input: {
              type: 'structure',
              required: ['FleetArn'],
              members: {
                FleetArn: {},
                DisplayName: {},
                OptimizeForEndUserLocation: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            deprecated: true,
            deprecatedMessage: 'Amazon WorkLink is no longer supported. This will be removed in a future version of the SDK.'
          },
          UpdateIdentityProviderConfiguration: {
            http: {
              requestUri: '/updateIdentityProviderConfiguration'
            },
            input: {
              type: 'structure',
              required: ['FleetArn', 'IdentityProviderType'],
              members: {
                FleetArn: {},
                IdentityProviderType: {},
                IdentityProviderSamlMetadata: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            deprecated: true,
            deprecatedMessage: 'Amazon WorkLink is no longer supported. This will be removed in a future version of the SDK.'
          }
        },
        shapes: {
          Sh: {
            type: 'map',
            key: {},
            value: {}
          },
          St: {
            type: 'list',
            member: {}
          },
          Sv: {
            type: 'list',
            member: {}
          }
        }
      });
    }
  };
});
//# sourceMappingURL=052d343b3726a2460c097e88317bdb4cdff3b073.js.map