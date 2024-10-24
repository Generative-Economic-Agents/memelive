System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2020-08-18',
          endpointPrefix: 'grafana',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          protocols: ['rest-json'],
          serviceFullName: 'Amazon Managed Grafana',
          serviceId: 'grafana',
          signatureVersion: 'v4',
          signingName: 'grafana',
          uid: 'grafana-2020-08-18'
        },
        operations: {
          AssociateLicense: {
            http: {
              requestUri: '/workspaces/{workspaceId}/licenses/{licenseType}',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['licenseType', 'workspaceId'],
              members: {
                grafanaToken: {
                  location: 'header',
                  locationName: 'Grafana-Token'
                },
                licenseType: {
                  location: 'uri',
                  locationName: 'licenseType'
                },
                workspaceId: {
                  location: 'uri',
                  locationName: 'workspaceId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['workspace'],
              members: {
                workspace: {
                  shape: 'S6'
                }
              }
            }
          },
          CreateWorkspace: {
            http: {
              requestUri: '/workspaces',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['accountAccessType', 'authenticationProviders', 'permissionType'],
              members: {
                accountAccessType: {},
                authenticationProviders: {
                  shape: 'S9'
                },
                clientToken: {
                  idempotencyToken: true
                },
                configuration: {
                  jsonvalue: true
                },
                grafanaVersion: {},
                networkAccessControl: {
                  shape: 'Sk'
                },
                organizationRoleName: {
                  shape: 'Sr'
                },
                permissionType: {},
                stackSetName: {},
                tags: {
                  shape: 'Sx'
                },
                vpcConfiguration: {
                  shape: 'S10'
                },
                workspaceDataSources: {
                  shape: 'Sd'
                },
                workspaceDescription: {
                  shape: 'Sf'
                },
                workspaceName: {
                  shape: 'Sj'
                },
                workspaceNotificationDestinations: {
                  shape: 'Sp'
                },
                workspaceOrganizationalUnits: {
                  shape: 'Ss'
                },
                workspaceRoleArn: {
                  shape: 'S15'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['workspace'],
              members: {
                workspace: {
                  shape: 'S6'
                }
              }
            },
            idempotent: true
          },
          CreateWorkspaceApiKey: {
            http: {
              requestUri: '/workspaces/{workspaceId}/apikeys',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['keyName', 'keyRole', 'secondsToLive', 'workspaceId'],
              members: {
                keyName: {},
                keyRole: {},
                secondsToLive: {
                  type: 'integer'
                },
                workspaceId: {
                  location: 'uri',
                  locationName: 'workspaceId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['key', 'keyName', 'workspaceId'],
              members: {
                key: {
                  type: 'string',
                  sensitive: true
                },
                keyName: {},
                workspaceId: {}
              }
            }
          },
          CreateWorkspaceServiceAccount: {
            http: {
              requestUri: '/workspaces/{workspaceId}/serviceaccounts',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['grafanaRole', 'name', 'workspaceId'],
              members: {
                grafanaRole: {},
                name: {},
                workspaceId: {
                  location: 'uri',
                  locationName: 'workspaceId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['grafanaRole', 'id', 'name', 'workspaceId'],
              members: {
                grafanaRole: {},
                id: {},
                name: {},
                workspaceId: {}
              }
            }
          },
          CreateWorkspaceServiceAccountToken: {
            http: {
              requestUri: '/workspaces/{workspaceId}/serviceaccounts/{serviceAccountId}/tokens',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['name', 'secondsToLive', 'serviceAccountId', 'workspaceId'],
              members: {
                name: {},
                secondsToLive: {
                  type: 'integer'
                },
                serviceAccountId: {
                  location: 'uri',
                  locationName: 'serviceAccountId'
                },
                workspaceId: {
                  location: 'uri',
                  locationName: 'workspaceId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['serviceAccountId', 'serviceAccountToken', 'workspaceId'],
              members: {
                serviceAccountId: {},
                serviceAccountToken: {
                  type: 'structure',
                  required: ['id', 'key', 'name'],
                  members: {
                    id: {},
                    key: {
                      type: 'string',
                      sensitive: true
                    },
                    name: {}
                  }
                },
                workspaceId: {}
              }
            }
          },
          DeleteWorkspace: {
            http: {
              method: 'DELETE',
              requestUri: '/workspaces/{workspaceId}',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['workspaceId'],
              members: {
                workspaceId: {
                  location: 'uri',
                  locationName: 'workspaceId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['workspace'],
              members: {
                workspace: {
                  shape: 'S6'
                }
              }
            },
            idempotent: true
          },
          DeleteWorkspaceApiKey: {
            http: {
              method: 'DELETE',
              requestUri: '/workspaces/{workspaceId}/apikeys/{keyName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['keyName', 'workspaceId'],
              members: {
                keyName: {
                  location: 'uri',
                  locationName: 'keyName'
                },
                workspaceId: {
                  location: 'uri',
                  locationName: 'workspaceId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['keyName', 'workspaceId'],
              members: {
                keyName: {},
                workspaceId: {}
              }
            }
          },
          DeleteWorkspaceServiceAccount: {
            http: {
              method: 'DELETE',
              requestUri: '/workspaces/{workspaceId}/serviceaccounts/{serviceAccountId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['serviceAccountId', 'workspaceId'],
              members: {
                serviceAccountId: {
                  location: 'uri',
                  locationName: 'serviceAccountId'
                },
                workspaceId: {
                  location: 'uri',
                  locationName: 'workspaceId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['serviceAccountId', 'workspaceId'],
              members: {
                serviceAccountId: {},
                workspaceId: {}
              }
            }
          },
          DeleteWorkspaceServiceAccountToken: {
            http: {
              method: 'DELETE',
              requestUri: '/workspaces/{workspaceId}/serviceaccounts/{serviceAccountId}/tokens/{tokenId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['serviceAccountId', 'tokenId', 'workspaceId'],
              members: {
                serviceAccountId: {
                  location: 'uri',
                  locationName: 'serviceAccountId'
                },
                tokenId: {
                  location: 'uri',
                  locationName: 'tokenId'
                },
                workspaceId: {
                  location: 'uri',
                  locationName: 'workspaceId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['serviceAccountId', 'tokenId', 'workspaceId'],
              members: {
                serviceAccountId: {},
                tokenId: {},
                workspaceId: {}
              }
            }
          },
          DescribeWorkspace: {
            http: {
              method: 'GET',
              requestUri: '/workspaces/{workspaceId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['workspaceId'],
              members: {
                workspaceId: {
                  location: 'uri',
                  locationName: 'workspaceId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['workspace'],
              members: {
                workspace: {
                  shape: 'S6'
                }
              }
            }
          },
          DescribeWorkspaceAuthentication: {
            http: {
              method: 'GET',
              requestUri: '/workspaces/{workspaceId}/authentication',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['workspaceId'],
              members: {
                workspaceId: {
                  location: 'uri',
                  locationName: 'workspaceId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['authentication'],
              members: {
                authentication: {
                  shape: 'S22'
                }
              }
            }
          },
          DescribeWorkspaceConfiguration: {
            http: {
              method: 'GET',
              requestUri: '/workspaces/{workspaceId}/configuration',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['workspaceId'],
              members: {
                workspaceId: {
                  location: 'uri',
                  locationName: 'workspaceId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['configuration'],
              members: {
                configuration: {
                  jsonvalue: true
                },
                grafanaVersion: {}
              }
            }
          },
          DisassociateLicense: {
            http: {
              method: 'DELETE',
              requestUri: '/workspaces/{workspaceId}/licenses/{licenseType}',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['licenseType', 'workspaceId'],
              members: {
                licenseType: {
                  location: 'uri',
                  locationName: 'licenseType'
                },
                workspaceId: {
                  location: 'uri',
                  locationName: 'workspaceId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['workspace'],
              members: {
                workspace: {
                  shape: 'S6'
                }
              }
            }
          },
          ListPermissions: {
            http: {
              method: 'GET',
              requestUri: '/workspaces/{workspaceId}/permissions',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['workspaceId'],
              members: {
                groupId: {
                  location: 'querystring',
                  locationName: 'groupId'
                },
                maxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                userId: {
                  location: 'querystring',
                  locationName: 'userId'
                },
                userType: {
                  location: 'querystring',
                  locationName: 'userType'
                },
                workspaceId: {
                  location: 'uri',
                  locationName: 'workspaceId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['permissions'],
              members: {
                nextToken: {},
                permissions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['role', 'user'],
                    members: {
                      role: {},
                      user: {
                        shape: 'S2t'
                      }
                    }
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
                  shape: 'Sx'
                }
              }
            }
          },
          ListVersions: {
            http: {
              method: 'GET',
              requestUri: '/versions',
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
                },
                workspaceId: {
                  location: 'querystring',
                  locationName: 'workspace-id'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                grafanaVersions: {
                  type: 'list',
                  member: {}
                },
                nextToken: {}
              }
            }
          },
          ListWorkspaceServiceAccountTokens: {
            http: {
              method: 'GET',
              requestUri: '/workspaces/{workspaceId}/serviceaccounts/{serviceAccountId}/tokens',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['serviceAccountId', 'workspaceId'],
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
                serviceAccountId: {
                  location: 'uri',
                  locationName: 'serviceAccountId'
                },
                workspaceId: {
                  location: 'uri',
                  locationName: 'workspaceId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['serviceAccountId', 'serviceAccountTokens', 'workspaceId'],
              members: {
                nextToken: {},
                serviceAccountId: {},
                serviceAccountTokens: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['createdAt', 'expiresAt', 'id', 'name'],
                    members: {
                      createdAt: {
                        type: 'timestamp'
                      },
                      expiresAt: {
                        type: 'timestamp'
                      },
                      id: {},
                      lastUsedAt: {
                        type: 'timestamp'
                      },
                      name: {}
                    }
                  }
                },
                workspaceId: {}
              }
            }
          },
          ListWorkspaceServiceAccounts: {
            http: {
              method: 'GET',
              requestUri: '/workspaces/{workspaceId}/serviceaccounts',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['workspaceId'],
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
                workspaceId: {
                  location: 'uri',
                  locationName: 'workspaceId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['serviceAccounts', 'workspaceId'],
              members: {
                nextToken: {},
                serviceAccounts: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['grafanaRole', 'id', 'isDisabled', 'name'],
                    members: {
                      grafanaRole: {},
                      id: {},
                      isDisabled: {},
                      name: {}
                    }
                  }
                },
                workspaceId: {}
              }
            }
          },
          ListWorkspaces: {
            http: {
              method: 'GET',
              requestUri: '/workspaces',
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
              required: ['workspaces'],
              members: {
                nextToken: {},
                workspaces: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['authentication', 'created', 'endpoint', 'grafanaVersion', 'id', 'modified', 'status'],
                    members: {
                      authentication: {
                        shape: 'S8'
                      },
                      created: {
                        type: 'timestamp'
                      },
                      description: {
                        shape: 'Sf'
                      },
                      endpoint: {},
                      grafanaToken: {},
                      grafanaVersion: {},
                      id: {},
                      licenseType: {},
                      modified: {
                        type: 'timestamp'
                      },
                      name: {
                        shape: 'Sj'
                      },
                      notificationDestinations: {
                        shape: 'Sp'
                      },
                      status: {},
                      tags: {
                        shape: 'Sx'
                      }
                    }
                  }
                }
              }
            }
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
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          UpdatePermissions: {
            http: {
              method: 'PATCH',
              requestUri: '/workspaces/{workspaceId}/permissions',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['updateInstructionBatch', 'workspaceId'],
              members: {
                updateInstructionBatch: {
                  type: 'list',
                  member: {
                    shape: 'S3m'
                  }
                },
                workspaceId: {
                  location: 'uri',
                  locationName: 'workspaceId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['errors'],
              members: {
                errors: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['causedBy', 'code', 'message'],
                    members: {
                      causedBy: {
                        shape: 'S3m'
                      },
                      code: {
                        type: 'integer'
                      },
                      message: {}
                    }
                  }
                }
              }
            }
          },
          UpdateWorkspace: {
            http: {
              method: 'PUT',
              requestUri: '/workspaces/{workspaceId}',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['workspaceId'],
              members: {
                accountAccessType: {},
                networkAccessControl: {
                  shape: 'Sk'
                },
                organizationRoleName: {
                  shape: 'Sr'
                },
                permissionType: {},
                removeNetworkAccessConfiguration: {
                  type: 'boolean'
                },
                removeVpcConfiguration: {
                  type: 'boolean'
                },
                stackSetName: {},
                vpcConfiguration: {
                  shape: 'S10'
                },
                workspaceDataSources: {
                  shape: 'Sd'
                },
                workspaceDescription: {
                  shape: 'Sf'
                },
                workspaceId: {
                  location: 'uri',
                  locationName: 'workspaceId'
                },
                workspaceName: {
                  shape: 'Sj'
                },
                workspaceNotificationDestinations: {
                  shape: 'Sp'
                },
                workspaceOrganizationalUnits: {
                  shape: 'Ss'
                },
                workspaceRoleArn: {
                  shape: 'S15'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['workspace'],
              members: {
                workspace: {
                  shape: 'S6'
                }
              }
            }
          },
          UpdateWorkspaceAuthentication: {
            http: {
              requestUri: '/workspaces/{workspaceId}/authentication',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['authenticationProviders', 'workspaceId'],
              members: {
                authenticationProviders: {
                  shape: 'S9'
                },
                samlConfiguration: {
                  shape: 'S26'
                },
                workspaceId: {
                  location: 'uri',
                  locationName: 'workspaceId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['authentication'],
              members: {
                authentication: {
                  shape: 'S22'
                }
              }
            }
          },
          UpdateWorkspaceConfiguration: {
            http: {
              method: 'PUT',
              requestUri: '/workspaces/{workspaceId}/configuration',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['configuration', 'workspaceId'],
              members: {
                configuration: {
                  jsonvalue: true
                },
                grafanaVersion: {},
                workspaceId: {
                  location: 'uri',
                  locationName: 'workspaceId'
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
          S6: {
            type: 'structure',
            required: ['authentication', 'created', 'dataSources', 'endpoint', 'grafanaVersion', 'id', 'modified', 'status'],
            members: {
              accountAccessType: {},
              authentication: {
                shape: 'S8'
              },
              created: {
                type: 'timestamp'
              },
              dataSources: {
                shape: 'Sd'
              },
              description: {
                shape: 'Sf'
              },
              endpoint: {},
              freeTrialConsumed: {
                type: 'boolean'
              },
              freeTrialExpiration: {
                type: 'timestamp'
              },
              grafanaToken: {},
              grafanaVersion: {},
              id: {},
              licenseExpiration: {
                type: 'timestamp'
              },
              licenseType: {},
              modified: {
                type: 'timestamp'
              },
              name: {
                shape: 'Sj'
              },
              networkAccessControl: {
                shape: 'Sk'
              },
              notificationDestinations: {
                shape: 'Sp'
              },
              organizationRoleName: {
                shape: 'Sr'
              },
              organizationalUnits: {
                shape: 'Ss'
              },
              permissionType: {},
              stackSetName: {},
              status: {},
              tags: {
                shape: 'Sx'
              },
              vpcConfiguration: {
                shape: 'S10'
              },
              workspaceRoleArn: {
                shape: 'S15'
              }
            }
          },
          S8: {
            type: 'structure',
            required: ['providers'],
            members: {
              providers: {
                shape: 'S9'
              },
              samlConfigurationStatus: {}
            }
          },
          S9: {
            type: 'list',
            member: {}
          },
          Sd: {
            type: 'list',
            member: {}
          },
          Sf: {
            type: 'string',
            sensitive: true
          },
          Sj: {
            type: 'string',
            sensitive: true
          },
          Sk: {
            type: 'structure',
            required: ['prefixListIds', 'vpceIds'],
            members: {
              prefixListIds: {
                type: 'list',
                member: {}
              },
              vpceIds: {
                type: 'list',
                member: {}
              }
            }
          },
          Sp: {
            type: 'list',
            member: {}
          },
          Sr: {
            type: 'string',
            sensitive: true
          },
          Ss: {
            type: 'list',
            member: {},
            sensitive: true
          },
          Sx: {
            type: 'map',
            key: {},
            value: {}
          },
          S10: {
            type: 'structure',
            required: ['securityGroupIds', 'subnetIds'],
            members: {
              securityGroupIds: {
                type: 'list',
                member: {}
              },
              subnetIds: {
                type: 'list',
                member: {}
              }
            }
          },
          S15: {
            type: 'string',
            sensitive: true
          },
          S22: {
            type: 'structure',
            required: ['providers'],
            members: {
              awsSso: {
                type: 'structure',
                members: {
                  ssoClientId: {}
                }
              },
              providers: {
                shape: 'S9'
              },
              saml: {
                type: 'structure',
                required: ['status'],
                members: {
                  configuration: {
                    shape: 'S26'
                  },
                  status: {}
                }
              }
            }
          },
          S26: {
            type: 'structure',
            required: ['idpMetadata'],
            members: {
              allowedOrganizations: {
                type: 'list',
                member: {}
              },
              assertionAttributes: {
                type: 'structure',
                members: {
                  email: {},
                  groups: {},
                  login: {},
                  name: {},
                  org: {},
                  role: {}
                }
              },
              idpMetadata: {
                type: 'structure',
                members: {
                  url: {},
                  xml: {}
                },
                union: true
              },
              loginValidityDuration: {
                type: 'integer'
              },
              roleValues: {
                type: 'structure',
                members: {
                  admin: {
                    shape: 'S2f'
                  },
                  editor: {
                    shape: 'S2f'
                  }
                }
              }
            }
          },
          S2f: {
            type: 'list',
            member: {},
            sensitive: true
          },
          S2t: {
            type: 'structure',
            required: ['id', 'type'],
            members: {
              id: {},
              type: {}
            }
          },
          S3m: {
            type: 'structure',
            required: ['action', 'role', 'users'],
            members: {
              action: {},
              role: {},
              users: {
                type: 'list',
                member: {
                  shape: 'S2t'
                }
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=73704adca33b9bc117fee8b10edb9cbe3ca69435.js.map