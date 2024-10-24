System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2020-07-08',
          endpointPrefix: 'workspaces-web',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceFullName: 'Amazon WorkSpaces Web',
          serviceId: 'WorkSpaces Web',
          signatureVersion: 'v4',
          signingName: 'workspaces-web',
          uid: 'workspaces-web-2020-07-08'
        },
        operations: {
          AssociateBrowserSettings: {
            http: {
              method: 'PUT',
              requestUri: '/portals/{portalArn+}/browserSettings',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['browserSettingsArn', 'portalArn'],
              members: {
                browserSettingsArn: {
                  location: 'querystring',
                  locationName: 'browserSettingsArn'
                },
                portalArn: {
                  location: 'uri',
                  locationName: 'portalArn'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['browserSettingsArn', 'portalArn'],
              members: {
                browserSettingsArn: {},
                portalArn: {}
              }
            },
            idempotent: true
          },
          AssociateIpAccessSettings: {
            http: {
              method: 'PUT',
              requestUri: '/portals/{portalArn+}/ipAccessSettings',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ipAccessSettingsArn', 'portalArn'],
              members: {
                ipAccessSettingsArn: {
                  location: 'querystring',
                  locationName: 'ipAccessSettingsArn'
                },
                portalArn: {
                  location: 'uri',
                  locationName: 'portalArn'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['ipAccessSettingsArn', 'portalArn'],
              members: {
                ipAccessSettingsArn: {},
                portalArn: {}
              }
            },
            idempotent: true
          },
          AssociateNetworkSettings: {
            http: {
              method: 'PUT',
              requestUri: '/portals/{portalArn+}/networkSettings',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['networkSettingsArn', 'portalArn'],
              members: {
                networkSettingsArn: {
                  location: 'querystring',
                  locationName: 'networkSettingsArn'
                },
                portalArn: {
                  location: 'uri',
                  locationName: 'portalArn'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['networkSettingsArn', 'portalArn'],
              members: {
                networkSettingsArn: {},
                portalArn: {}
              }
            },
            idempotent: true
          },
          AssociateTrustStore: {
            http: {
              method: 'PUT',
              requestUri: '/portals/{portalArn+}/trustStores',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['portalArn', 'trustStoreArn'],
              members: {
                portalArn: {
                  location: 'uri',
                  locationName: 'portalArn'
                },
                trustStoreArn: {
                  location: 'querystring',
                  locationName: 'trustStoreArn'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['portalArn', 'trustStoreArn'],
              members: {
                portalArn: {},
                trustStoreArn: {}
              }
            },
            idempotent: true
          },
          AssociateUserAccessLoggingSettings: {
            http: {
              method: 'PUT',
              requestUri: '/portals/{portalArn+}/userAccessLoggingSettings',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['portalArn', 'userAccessLoggingSettingsArn'],
              members: {
                portalArn: {
                  location: 'uri',
                  locationName: 'portalArn'
                },
                userAccessLoggingSettingsArn: {
                  location: 'querystring',
                  locationName: 'userAccessLoggingSettingsArn'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['portalArn', 'userAccessLoggingSettingsArn'],
              members: {
                portalArn: {},
                userAccessLoggingSettingsArn: {}
              }
            },
            idempotent: true
          },
          AssociateUserSettings: {
            http: {
              method: 'PUT',
              requestUri: '/portals/{portalArn+}/userSettings',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['portalArn', 'userSettingsArn'],
              members: {
                portalArn: {
                  location: 'uri',
                  locationName: 'portalArn'
                },
                userSettingsArn: {
                  location: 'querystring',
                  locationName: 'userSettingsArn'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['portalArn', 'userSettingsArn'],
              members: {
                portalArn: {},
                userSettingsArn: {}
              }
            },
            idempotent: true
          },
          CreateBrowserSettings: {
            http: {
              requestUri: '/browserSettings',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['browserPolicy'],
              members: {
                additionalEncryptionContext: {
                  shape: 'Sf'
                },
                browserPolicy: {
                  shape: 'Sh'
                },
                clientToken: {
                  idempotencyToken: true
                },
                customerManagedKey: {},
                tags: {
                  shape: 'Sk'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['browserSettingsArn'],
              members: {
                browserSettingsArn: {}
              }
            }
          },
          CreateIdentityProvider: {
            http: {
              requestUri: '/identityProviders',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['identityProviderDetails', 'identityProviderName', 'identityProviderType', 'portalArn'],
              members: {
                clientToken: {
                  idempotencyToken: true
                },
                identityProviderDetails: {
                  shape: 'Sq'
                },
                identityProviderName: {
                  shape: 'Sr'
                },
                identityProviderType: {},
                portalArn: {}
              }
            },
            output: {
              type: 'structure',
              required: ['identityProviderArn'],
              members: {
                identityProviderArn: {}
              }
            }
          },
          CreateIpAccessSettings: {
            http: {
              requestUri: '/ipAccessSettings',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ipRules'],
              members: {
                additionalEncryptionContext: {
                  shape: 'Sf'
                },
                clientToken: {
                  idempotencyToken: true
                },
                customerManagedKey: {},
                description: {
                  shape: 'Sw'
                },
                displayName: {
                  shape: 'Sx'
                },
                ipRules: {
                  shape: 'Sy'
                },
                tags: {
                  shape: 'Sk'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['ipAccessSettingsArn'],
              members: {
                ipAccessSettingsArn: {}
              }
            }
          },
          CreateNetworkSettings: {
            http: {
              requestUri: '/networkSettings',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['securityGroupIds', 'subnetIds', 'vpcId'],
              members: {
                clientToken: {
                  idempotencyToken: true
                },
                securityGroupIds: {
                  shape: 'S13'
                },
                subnetIds: {
                  shape: 'S15'
                },
                tags: {
                  shape: 'Sk'
                },
                vpcId: {}
              }
            },
            output: {
              type: 'structure',
              required: ['networkSettingsArn'],
              members: {
                networkSettingsArn: {}
              }
            }
          },
          CreatePortal: {
            http: {
              requestUri: '/portals',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                additionalEncryptionContext: {
                  shape: 'Sf'
                },
                authenticationType: {},
                clientToken: {
                  idempotencyToken: true
                },
                customerManagedKey: {},
                displayName: {
                  shape: 'Sx'
                },
                instanceType: {},
                maxConcurrentSessions: {
                  type: 'integer'
                },
                tags: {
                  shape: 'Sk'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['portalArn', 'portalEndpoint'],
              members: {
                portalArn: {},
                portalEndpoint: {}
              }
            }
          },
          CreateTrustStore: {
            http: {
              requestUri: '/trustStores',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['certificateList'],
              members: {
                certificateList: {
                  shape: 'S1g'
                },
                clientToken: {
                  idempotencyToken: true
                },
                tags: {
                  shape: 'Sk'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['trustStoreArn'],
              members: {
                trustStoreArn: {}
              }
            }
          },
          CreateUserAccessLoggingSettings: {
            http: {
              requestUri: '/userAccessLoggingSettings',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['kinesisStreamArn'],
              members: {
                clientToken: {
                  idempotencyToken: true
                },
                kinesisStreamArn: {},
                tags: {
                  shape: 'Sk'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['userAccessLoggingSettingsArn'],
              members: {
                userAccessLoggingSettingsArn: {}
              }
            }
          },
          CreateUserSettings: {
            http: {
              requestUri: '/userSettings',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['copyAllowed', 'downloadAllowed', 'pasteAllowed', 'printAllowed', 'uploadAllowed'],
              members: {
                additionalEncryptionContext: {
                  shape: 'Sf'
                },
                clientToken: {
                  idempotencyToken: true
                },
                cookieSynchronizationConfiguration: {
                  shape: 'S1n'
                },
                copyAllowed: {},
                customerManagedKey: {},
                disconnectTimeoutInMinutes: {
                  type: 'integer'
                },
                downloadAllowed: {},
                idleDisconnectTimeoutInMinutes: {
                  type: 'integer'
                },
                pasteAllowed: {},
                printAllowed: {},
                tags: {
                  shape: 'Sk'
                },
                uploadAllowed: {}
              }
            },
            output: {
              type: 'structure',
              required: ['userSettingsArn'],
              members: {
                userSettingsArn: {}
              }
            }
          },
          DeleteBrowserSettings: {
            http: {
              method: 'DELETE',
              requestUri: '/browserSettings/{browserSettingsArn+}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['browserSettingsArn'],
              members: {
                browserSettingsArn: {
                  location: 'uri',
                  locationName: 'browserSettingsArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeleteIdentityProvider: {
            http: {
              method: 'DELETE',
              requestUri: '/identityProviders/{identityProviderArn+}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['identityProviderArn'],
              members: {
                identityProviderArn: {
                  location: 'uri',
                  locationName: 'identityProviderArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeleteIpAccessSettings: {
            http: {
              method: 'DELETE',
              requestUri: '/ipAccessSettings/{ipAccessSettingsArn+}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ipAccessSettingsArn'],
              members: {
                ipAccessSettingsArn: {
                  location: 'uri',
                  locationName: 'ipAccessSettingsArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeleteNetworkSettings: {
            http: {
              method: 'DELETE',
              requestUri: '/networkSettings/{networkSettingsArn+}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['networkSettingsArn'],
              members: {
                networkSettingsArn: {
                  location: 'uri',
                  locationName: 'networkSettingsArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeletePortal: {
            http: {
              method: 'DELETE',
              requestUri: '/portals/{portalArn+}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['portalArn'],
              members: {
                portalArn: {
                  location: 'uri',
                  locationName: 'portalArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeleteTrustStore: {
            http: {
              method: 'DELETE',
              requestUri: '/trustStores/{trustStoreArn+}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['trustStoreArn'],
              members: {
                trustStoreArn: {
                  location: 'uri',
                  locationName: 'trustStoreArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeleteUserAccessLoggingSettings: {
            http: {
              method: 'DELETE',
              requestUri: '/userAccessLoggingSettings/{userAccessLoggingSettingsArn+}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['userAccessLoggingSettingsArn'],
              members: {
                userAccessLoggingSettingsArn: {
                  location: 'uri',
                  locationName: 'userAccessLoggingSettingsArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeleteUserSettings: {
            http: {
              method: 'DELETE',
              requestUri: '/userSettings/{userSettingsArn+}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['userSettingsArn'],
              members: {
                userSettingsArn: {
                  location: 'uri',
                  locationName: 'userSettingsArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DisassociateBrowserSettings: {
            http: {
              method: 'DELETE',
              requestUri: '/portals/{portalArn+}/browserSettings',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['portalArn'],
              members: {
                portalArn: {
                  location: 'uri',
                  locationName: 'portalArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DisassociateIpAccessSettings: {
            http: {
              method: 'DELETE',
              requestUri: '/portals/{portalArn+}/ipAccessSettings',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['portalArn'],
              members: {
                portalArn: {
                  location: 'uri',
                  locationName: 'portalArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DisassociateNetworkSettings: {
            http: {
              method: 'DELETE',
              requestUri: '/portals/{portalArn+}/networkSettings',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['portalArn'],
              members: {
                portalArn: {
                  location: 'uri',
                  locationName: 'portalArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DisassociateTrustStore: {
            http: {
              method: 'DELETE',
              requestUri: '/portals/{portalArn+}/trustStores',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['portalArn'],
              members: {
                portalArn: {
                  location: 'uri',
                  locationName: 'portalArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DisassociateUserAccessLoggingSettings: {
            http: {
              method: 'DELETE',
              requestUri: '/portals/{portalArn+}/userAccessLoggingSettings',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['portalArn'],
              members: {
                portalArn: {
                  location: 'uri',
                  locationName: 'portalArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DisassociateUserSettings: {
            http: {
              method: 'DELETE',
              requestUri: '/portals/{portalArn+}/userSettings',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['portalArn'],
              members: {
                portalArn: {
                  location: 'uri',
                  locationName: 'portalArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          GetBrowserSettings: {
            http: {
              method: 'GET',
              requestUri: '/browserSettings/{browserSettingsArn+}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['browserSettingsArn'],
              members: {
                browserSettingsArn: {
                  location: 'uri',
                  locationName: 'browserSettingsArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                browserSettings: {
                  shape: 'S2r'
                }
              }
            }
          },
          GetIdentityProvider: {
            http: {
              method: 'GET',
              requestUri: '/identityProviders/{identityProviderArn+}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['identityProviderArn'],
              members: {
                identityProviderArn: {
                  location: 'uri',
                  locationName: 'identityProviderArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                identityProvider: {
                  shape: 'S2v'
                }
              }
            }
          },
          GetIpAccessSettings: {
            http: {
              method: 'GET',
              requestUri: '/ipAccessSettings/{ipAccessSettingsArn+}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ipAccessSettingsArn'],
              members: {
                ipAccessSettingsArn: {
                  location: 'uri',
                  locationName: 'ipAccessSettingsArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ipAccessSettings: {
                  shape: 'S2y'
                }
              }
            }
          },
          GetNetworkSettings: {
            http: {
              method: 'GET',
              requestUri: '/networkSettings/{networkSettingsArn+}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['networkSettingsArn'],
              members: {
                networkSettingsArn: {
                  location: 'uri',
                  locationName: 'networkSettingsArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                networkSettings: {
                  shape: 'S32'
                }
              }
            }
          },
          GetPortal: {
            http: {
              method: 'GET',
              requestUri: '/portals/{portalArn+}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['portalArn'],
              members: {
                portalArn: {
                  location: 'uri',
                  locationName: 'portalArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                portal: {
                  shape: 'S35'
                }
              }
            }
          },
          GetPortalServiceProviderMetadata: {
            http: {
              method: 'GET',
              requestUri: '/portalIdp/{portalArn+}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['portalArn'],
              members: {
                portalArn: {
                  location: 'uri',
                  locationName: 'portalArn'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['portalArn'],
              members: {
                portalArn: {},
                serviceProviderSamlMetadata: {}
              }
            }
          },
          GetTrustStore: {
            http: {
              method: 'GET',
              requestUri: '/trustStores/{trustStoreArn+}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['trustStoreArn'],
              members: {
                trustStoreArn: {
                  location: 'uri',
                  locationName: 'trustStoreArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                trustStore: {
                  type: 'structure',
                  required: ['trustStoreArn'],
                  members: {
                    associatedPortalArns: {
                      shape: 'S2s'
                    },
                    trustStoreArn: {}
                  }
                }
              }
            }
          },
          GetTrustStoreCertificate: {
            http: {
              method: 'GET',
              requestUri: '/trustStores/{trustStoreArn+}/certificate',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['thumbprint', 'trustStoreArn'],
              members: {
                thumbprint: {
                  location: 'querystring',
                  locationName: 'thumbprint'
                },
                trustStoreArn: {
                  location: 'uri',
                  locationName: 'trustStoreArn'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['trustStoreArn'],
              members: {
                certificate: {
                  type: 'structure',
                  members: {
                    body: {
                      type: 'blob'
                    },
                    issuer: {},
                    notValidAfter: {
                      type: 'timestamp'
                    },
                    notValidBefore: {
                      type: 'timestamp'
                    },
                    subject: {},
                    thumbprint: {}
                  }
                },
                trustStoreArn: {}
              }
            }
          },
          GetUserAccessLoggingSettings: {
            http: {
              method: 'GET',
              requestUri: '/userAccessLoggingSettings/{userAccessLoggingSettingsArn+}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['userAccessLoggingSettingsArn'],
              members: {
                userAccessLoggingSettingsArn: {
                  location: 'uri',
                  locationName: 'userAccessLoggingSettingsArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                userAccessLoggingSettings: {
                  shape: 'S3n'
                }
              }
            }
          },
          GetUserSettings: {
            http: {
              method: 'GET',
              requestUri: '/userSettings/{userSettingsArn+}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['userSettingsArn'],
              members: {
                userSettingsArn: {
                  location: 'uri',
                  locationName: 'userSettingsArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                userSettings: {
                  shape: 'S3q'
                }
              }
            }
          },
          ListBrowserSettings: {
            http: {
              method: 'GET',
              requestUri: '/browserSettings',
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
                browserSettings: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['browserSettingsArn'],
                    members: {
                      browserSettingsArn: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListIdentityProviders: {
            http: {
              method: 'GET',
              requestUri: '/portals/{portalArn+}/identityProviders',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['portalArn'],
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
                portalArn: {
                  location: 'uri',
                  locationName: 'portalArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                identityProviders: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['identityProviderArn'],
                    members: {
                      identityProviderArn: {},
                      identityProviderName: {
                        shape: 'Sr'
                      },
                      identityProviderType: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListIpAccessSettings: {
            http: {
              method: 'GET',
              requestUri: '/ipAccessSettings',
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
                ipAccessSettings: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['ipAccessSettingsArn'],
                    members: {
                      creationDate: {
                        type: 'timestamp'
                      },
                      description: {
                        shape: 'Sw'
                      },
                      displayName: {
                        shape: 'Sx'
                      },
                      ipAccessSettingsArn: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListNetworkSettings: {
            http: {
              method: 'GET',
              requestUri: '/networkSettings',
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
                networkSettings: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['networkSettingsArn'],
                    members: {
                      networkSettingsArn: {},
                      vpcId: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListPortals: {
            http: {
              method: 'GET',
              requestUri: '/portals',
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
                portals: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['portalArn'],
                    members: {
                      authenticationType: {},
                      browserSettingsArn: {},
                      browserType: {},
                      creationDate: {
                        type: 'timestamp'
                      },
                      displayName: {
                        shape: 'Sx'
                      },
                      instanceType: {},
                      ipAccessSettingsArn: {},
                      maxConcurrentSessions: {
                        type: 'integer'
                      },
                      networkSettingsArn: {},
                      portalArn: {},
                      portalEndpoint: {},
                      portalStatus: {},
                      rendererType: {},
                      trustStoreArn: {},
                      userAccessLoggingSettingsArn: {},
                      userSettingsArn: {}
                    }
                  }
                }
              }
            }
          },
          ListTagsForResource: {
            http: {
              method: 'GET',
              requestUri: '/tags/{resourceArn+}',
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
                  shape: 'Sk'
                }
              }
            }
          },
          ListTrustStoreCertificates: {
            http: {
              method: 'GET',
              requestUri: '/trustStores/{trustStoreArn+}/certificates',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['trustStoreArn'],
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
                trustStoreArn: {
                  location: 'uri',
                  locationName: 'trustStoreArn'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['trustStoreArn'],
              members: {
                certificateList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      issuer: {},
                      notValidAfter: {
                        type: 'timestamp'
                      },
                      notValidBefore: {
                        type: 'timestamp'
                      },
                      subject: {},
                      thumbprint: {}
                    }
                  }
                },
                nextToken: {},
                trustStoreArn: {}
              }
            }
          },
          ListTrustStores: {
            http: {
              method: 'GET',
              requestUri: '/trustStores',
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
                trustStores: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      trustStoreArn: {}
                    }
                  }
                }
              }
            }
          },
          ListUserAccessLoggingSettings: {
            http: {
              method: 'GET',
              requestUri: '/userAccessLoggingSettings',
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
                userAccessLoggingSettings: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['userAccessLoggingSettingsArn'],
                    members: {
                      kinesisStreamArn: {},
                      userAccessLoggingSettingsArn: {}
                    }
                  }
                }
              }
            }
          },
          ListUserSettings: {
            http: {
              method: 'GET',
              requestUri: '/userSettings',
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
                userSettings: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['userSettingsArn'],
                    members: {
                      cookieSynchronizationConfiguration: {
                        shape: 'S1n'
                      },
                      copyAllowed: {},
                      disconnectTimeoutInMinutes: {
                        type: 'integer'
                      },
                      downloadAllowed: {},
                      idleDisconnectTimeoutInMinutes: {
                        type: 'integer'
                      },
                      pasteAllowed: {},
                      printAllowed: {},
                      uploadAllowed: {},
                      userSettingsArn: {}
                    }
                  }
                }
              }
            }
          },
          TagResource: {
            http: {
              requestUri: '/tags/{resourceArn+}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['resourceArn', 'tags'],
              members: {
                clientToken: {
                  idempotencyToken: true
                },
                resourceArn: {
                  location: 'uri',
                  locationName: 'resourceArn'
                },
                tags: {
                  shape: 'Sk'
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
              requestUri: '/tags/{resourceArn+}',
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
                  member: {
                    shape: 'Sm'
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          UpdateBrowserSettings: {
            http: {
              method: 'PATCH',
              requestUri: '/browserSettings/{browserSettingsArn+}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['browserSettingsArn'],
              members: {
                browserPolicy: {
                  shape: 'Sh'
                },
                browserSettingsArn: {
                  location: 'uri',
                  locationName: 'browserSettingsArn'
                },
                clientToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              required: ['browserSettings'],
              members: {
                browserSettings: {
                  shape: 'S2r'
                }
              }
            }
          },
          UpdateIdentityProvider: {
            http: {
              method: 'PATCH',
              requestUri: '/identityProviders/{identityProviderArn+}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['identityProviderArn'],
              members: {
                clientToken: {
                  idempotencyToken: true
                },
                identityProviderArn: {
                  location: 'uri',
                  locationName: 'identityProviderArn'
                },
                identityProviderDetails: {
                  shape: 'Sq'
                },
                identityProviderName: {
                  shape: 'Sr'
                },
                identityProviderType: {}
              }
            },
            output: {
              type: 'structure',
              required: ['identityProvider'],
              members: {
                identityProvider: {
                  shape: 'S2v'
                }
              }
            }
          },
          UpdateIpAccessSettings: {
            http: {
              method: 'PATCH',
              requestUri: '/ipAccessSettings/{ipAccessSettingsArn+}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ipAccessSettingsArn'],
              members: {
                clientToken: {
                  idempotencyToken: true
                },
                description: {
                  shape: 'Sw'
                },
                displayName: {
                  shape: 'Sx'
                },
                ipAccessSettingsArn: {
                  location: 'uri',
                  locationName: 'ipAccessSettingsArn'
                },
                ipRules: {
                  shape: 'Sy'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['ipAccessSettings'],
              members: {
                ipAccessSettings: {
                  shape: 'S2y'
                }
              }
            }
          },
          UpdateNetworkSettings: {
            http: {
              method: 'PATCH',
              requestUri: '/networkSettings/{networkSettingsArn+}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['networkSettingsArn'],
              members: {
                clientToken: {
                  idempotencyToken: true
                },
                networkSettingsArn: {
                  location: 'uri',
                  locationName: 'networkSettingsArn'
                },
                securityGroupIds: {
                  shape: 'S13'
                },
                subnetIds: {
                  shape: 'S15'
                },
                vpcId: {}
              }
            },
            output: {
              type: 'structure',
              required: ['networkSettings'],
              members: {
                networkSettings: {
                  shape: 'S32'
                }
              }
            }
          },
          UpdatePortal: {
            http: {
              method: 'PUT',
              requestUri: '/portals/{portalArn+}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['portalArn'],
              members: {
                authenticationType: {},
                displayName: {
                  shape: 'Sx'
                },
                instanceType: {},
                maxConcurrentSessions: {
                  type: 'integer'
                },
                portalArn: {
                  location: 'uri',
                  locationName: 'portalArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                portal: {
                  shape: 'S35'
                }
              }
            },
            idempotent: true
          },
          UpdateTrustStore: {
            http: {
              method: 'PATCH',
              requestUri: '/trustStores/{trustStoreArn+}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['trustStoreArn'],
              members: {
                certificatesToAdd: {
                  shape: 'S1g'
                },
                certificatesToDelete: {
                  type: 'list',
                  member: {}
                },
                clientToken: {
                  idempotencyToken: true
                },
                trustStoreArn: {
                  location: 'uri',
                  locationName: 'trustStoreArn'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['trustStoreArn'],
              members: {
                trustStoreArn: {}
              }
            }
          },
          UpdateUserAccessLoggingSettings: {
            http: {
              method: 'PATCH',
              requestUri: '/userAccessLoggingSettings/{userAccessLoggingSettingsArn+}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['userAccessLoggingSettingsArn'],
              members: {
                clientToken: {
                  idempotencyToken: true
                },
                kinesisStreamArn: {},
                userAccessLoggingSettingsArn: {
                  location: 'uri',
                  locationName: 'userAccessLoggingSettingsArn'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['userAccessLoggingSettings'],
              members: {
                userAccessLoggingSettings: {
                  shape: 'S3n'
                }
              }
            }
          },
          UpdateUserSettings: {
            http: {
              method: 'PATCH',
              requestUri: '/userSettings/{userSettingsArn+}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['userSettingsArn'],
              members: {
                clientToken: {
                  idempotencyToken: true
                },
                cookieSynchronizationConfiguration: {
                  shape: 'S1n'
                },
                copyAllowed: {},
                disconnectTimeoutInMinutes: {
                  type: 'integer'
                },
                downloadAllowed: {},
                idleDisconnectTimeoutInMinutes: {
                  type: 'integer'
                },
                pasteAllowed: {},
                printAllowed: {},
                uploadAllowed: {},
                userSettingsArn: {
                  location: 'uri',
                  locationName: 'userSettingsArn'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['userSettings'],
              members: {
                userSettings: {
                  shape: 'S3q'
                }
              }
            }
          }
        },
        shapes: {
          Sf: {
            type: 'map',
            key: {},
            value: {}
          },
          Sh: {
            type: 'string',
            sensitive: true
          },
          Sk: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Key', 'Value'],
              members: {
                Key: {
                  shape: 'Sm'
                },
                Value: {
                  type: 'string',
                  sensitive: true
                }
              },
              sensitive: true
            }
          },
          Sm: {
            type: 'string',
            sensitive: true
          },
          Sq: {
            type: 'map',
            key: {},
            value: {},
            sensitive: true
          },
          Sr: {
            type: 'string',
            sensitive: true
          },
          Sw: {
            type: 'string',
            sensitive: true
          },
          Sx: {
            type: 'string',
            sensitive: true
          },
          Sy: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['ipRange'],
              members: {
                description: {
                  shape: 'Sw'
                },
                ipRange: {
                  type: 'string',
                  sensitive: true
                }
              }
            },
            sensitive: true
          },
          S13: {
            type: 'list',
            member: {}
          },
          S15: {
            type: 'list',
            member: {}
          },
          S1g: {
            type: 'list',
            member: {
              type: 'blob'
            }
          },
          S1n: {
            type: 'structure',
            required: ['allowlist'],
            members: {
              allowlist: {
                shape: 'S1o'
              },
              blocklist: {
                shape: 'S1o'
              }
            },
            sensitive: true
          },
          S1o: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['domain'],
              members: {
                domain: {
                  type: 'string',
                  sensitive: true
                },
                name: {
                  type: 'string',
                  sensitive: true
                },
                path: {
                  type: 'string',
                  sensitive: true
                }
              }
            }
          },
          S2r: {
            type: 'structure',
            required: ['browserSettingsArn'],
            members: {
              additionalEncryptionContext: {
                shape: 'Sf'
              },
              associatedPortalArns: {
                shape: 'S2s'
              },
              browserPolicy: {
                shape: 'Sh'
              },
              browserSettingsArn: {},
              customerManagedKey: {}
            }
          },
          S2s: {
            type: 'list',
            member: {}
          },
          S2v: {
            type: 'structure',
            required: ['identityProviderArn'],
            members: {
              identityProviderArn: {},
              identityProviderDetails: {
                shape: 'Sq'
              },
              identityProviderName: {
                shape: 'Sr'
              },
              identityProviderType: {}
            }
          },
          S2y: {
            type: 'structure',
            required: ['ipAccessSettingsArn'],
            members: {
              additionalEncryptionContext: {
                shape: 'Sf'
              },
              associatedPortalArns: {
                shape: 'S2s'
              },
              creationDate: {
                type: 'timestamp'
              },
              customerManagedKey: {},
              description: {
                shape: 'Sw'
              },
              displayName: {
                shape: 'Sx'
              },
              ipAccessSettingsArn: {},
              ipRules: {
                shape: 'Sy'
              }
            }
          },
          S32: {
            type: 'structure',
            required: ['networkSettingsArn'],
            members: {
              associatedPortalArns: {
                shape: 'S2s'
              },
              networkSettingsArn: {},
              securityGroupIds: {
                shape: 'S13'
              },
              subnetIds: {
                shape: 'S15'
              },
              vpcId: {}
            }
          },
          S35: {
            type: 'structure',
            required: ['portalArn'],
            members: {
              additionalEncryptionContext: {
                shape: 'Sf'
              },
              authenticationType: {},
              browserSettingsArn: {},
              browserType: {},
              creationDate: {
                type: 'timestamp'
              },
              customerManagedKey: {},
              displayName: {
                shape: 'Sx'
              },
              instanceType: {},
              ipAccessSettingsArn: {},
              maxConcurrentSessions: {
                type: 'integer'
              },
              networkSettingsArn: {},
              portalArn: {},
              portalEndpoint: {},
              portalStatus: {},
              rendererType: {},
              statusReason: {},
              trustStoreArn: {},
              userAccessLoggingSettingsArn: {},
              userSettingsArn: {}
            }
          },
          S3n: {
            type: 'structure',
            required: ['userAccessLoggingSettingsArn'],
            members: {
              associatedPortalArns: {
                shape: 'S2s'
              },
              kinesisStreamArn: {},
              userAccessLoggingSettingsArn: {}
            }
          },
          S3q: {
            type: 'structure',
            required: ['userSettingsArn'],
            members: {
              additionalEncryptionContext: {
                shape: 'Sf'
              },
              associatedPortalArns: {
                shape: 'S2s'
              },
              cookieSynchronizationConfiguration: {
                shape: 'S1n'
              },
              copyAllowed: {},
              customerManagedKey: {},
              disconnectTimeoutInMinutes: {
                type: 'integer'
              },
              downloadAllowed: {},
              idleDisconnectTimeoutInMinutes: {
                type: 'integer'
              },
              pasteAllowed: {},
              printAllowed: {},
              uploadAllowed: {},
              userSettingsArn: {}
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=210c1ac85d8c99be16e1d37b8ab23ca1ec71f28b.js.map