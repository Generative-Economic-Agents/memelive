System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2018-01-04',
          endpointPrefix: 'ram',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceAbbreviation: 'RAM',
          serviceFullName: 'AWS Resource Access Manager',
          serviceId: 'RAM',
          signatureVersion: 'v4',
          uid: 'ram-2018-01-04'
        },
        operations: {
          AcceptResourceShareInvitation: {
            http: {
              requestUri: '/acceptresourceshareinvitation'
            },
            input: {
              type: 'structure',
              required: ['resourceShareInvitationArn'],
              members: {
                resourceShareInvitationArn: {},
                clientToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                resourceShareInvitation: {
                  shape: 'S4'
                },
                clientToken: {}
              }
            }
          },
          AssociateResourceShare: {
            http: {
              requestUri: '/associateresourceshare'
            },
            input: {
              type: 'structure',
              required: ['resourceShareArn'],
              members: {
                resourceShareArn: {},
                resourceArns: {
                  shape: 'Sd'
                },
                principals: {
                  shape: 'Se'
                },
                clientToken: {},
                sources: {
                  shape: 'Sf'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                resourceShareAssociations: {
                  shape: 'S7'
                },
                clientToken: {}
              }
            }
          },
          AssociateResourceSharePermission: {
            http: {
              requestUri: '/associateresourcesharepermission'
            },
            input: {
              type: 'structure',
              required: ['resourceShareArn', 'permissionArn'],
              members: {
                resourceShareArn: {},
                permissionArn: {},
                replace: {
                  type: 'boolean'
                },
                clientToken: {},
                permissionVersion: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                returnValue: {
                  type: 'boolean'
                },
                clientToken: {}
              }
            }
          },
          CreatePermission: {
            http: {
              requestUri: '/createpermission'
            },
            input: {
              type: 'structure',
              required: ['name', 'resourceType', 'policyTemplate'],
              members: {
                name: {},
                resourceType: {},
                policyTemplate: {},
                clientToken: {},
                tags: {
                  shape: 'Sn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                permission: {
                  shape: 'Ss'
                },
                clientToken: {}
              }
            }
          },
          CreatePermissionVersion: {
            http: {
              requestUri: '/createpermissionversion'
            },
            input: {
              type: 'structure',
              required: ['permissionArn', 'policyTemplate'],
              members: {
                permissionArn: {},
                policyTemplate: {},
                clientToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                permission: {
                  shape: 'Sx'
                },
                clientToken: {}
              }
            }
          },
          CreateResourceShare: {
            http: {
              requestUri: '/createresourceshare'
            },
            input: {
              type: 'structure',
              required: ['name'],
              members: {
                name: {},
                resourceArns: {
                  shape: 'Sd'
                },
                principals: {
                  shape: 'Se'
                },
                tags: {
                  shape: 'Sn'
                },
                allowExternalPrincipals: {
                  type: 'boolean'
                },
                clientToken: {},
                permissionArns: {
                  type: 'list',
                  member: {}
                },
                sources: {
                  shape: 'Sf'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                resourceShare: {
                  shape: 'S12'
                },
                clientToken: {}
              }
            }
          },
          DeletePermission: {
            http: {
              method: 'DELETE',
              requestUri: '/deletepermission'
            },
            input: {
              type: 'structure',
              required: ['permissionArn'],
              members: {
                permissionArn: {
                  location: 'querystring',
                  locationName: 'permissionArn'
                },
                clientToken: {
                  location: 'querystring',
                  locationName: 'clientToken'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                returnValue: {
                  type: 'boolean'
                },
                clientToken: {},
                permissionStatus: {}
              }
            }
          },
          DeletePermissionVersion: {
            http: {
              method: 'DELETE',
              requestUri: '/deletepermissionversion'
            },
            input: {
              type: 'structure',
              required: ['permissionArn', 'permissionVersion'],
              members: {
                permissionArn: {
                  location: 'querystring',
                  locationName: 'permissionArn'
                },
                permissionVersion: {
                  location: 'querystring',
                  locationName: 'permissionVersion',
                  type: 'integer'
                },
                clientToken: {
                  location: 'querystring',
                  locationName: 'clientToken'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                returnValue: {
                  type: 'boolean'
                },
                clientToken: {},
                permissionStatus: {}
              }
            }
          },
          DeleteResourceShare: {
            http: {
              method: 'DELETE',
              requestUri: '/deleteresourceshare'
            },
            input: {
              type: 'structure',
              required: ['resourceShareArn'],
              members: {
                resourceShareArn: {
                  location: 'querystring',
                  locationName: 'resourceShareArn'
                },
                clientToken: {
                  location: 'querystring',
                  locationName: 'clientToken'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                returnValue: {
                  type: 'boolean'
                },
                clientToken: {}
              }
            }
          },
          DisassociateResourceShare: {
            http: {
              requestUri: '/disassociateresourceshare'
            },
            input: {
              type: 'structure',
              required: ['resourceShareArn'],
              members: {
                resourceShareArn: {},
                resourceArns: {
                  shape: 'Sd'
                },
                principals: {
                  shape: 'Se'
                },
                clientToken: {},
                sources: {
                  shape: 'Sf'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                resourceShareAssociations: {
                  shape: 'S7'
                },
                clientToken: {}
              }
            }
          },
          DisassociateResourceSharePermission: {
            http: {
              requestUri: '/disassociateresourcesharepermission'
            },
            input: {
              type: 'structure',
              required: ['resourceShareArn', 'permissionArn'],
              members: {
                resourceShareArn: {},
                permissionArn: {},
                clientToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                returnValue: {
                  type: 'boolean'
                },
                clientToken: {}
              }
            }
          },
          EnableSharingWithAwsOrganization: {
            http: {
              requestUri: '/enablesharingwithawsorganization'
            },
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {
                returnValue: {
                  type: 'boolean'
                }
              }
            }
          },
          GetPermission: {
            http: {
              requestUri: '/getpermission'
            },
            input: {
              type: 'structure',
              required: ['permissionArn'],
              members: {
                permissionArn: {},
                permissionVersion: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                permission: {
                  shape: 'Sx'
                }
              }
            }
          },
          GetResourcePolicies: {
            http: {
              requestUri: '/getresourcepolicies'
            },
            input: {
              type: 'structure',
              required: ['resourceArns'],
              members: {
                resourceArns: {
                  shape: 'Sd'
                },
                principal: {},
                nextToken: {},
                maxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                policies: {
                  type: 'list',
                  member: {}
                },
                nextToken: {}
              }
            }
          },
          GetResourceShareAssociations: {
            http: {
              requestUri: '/getresourceshareassociations'
            },
            input: {
              type: 'structure',
              required: ['associationType'],
              members: {
                associationType: {},
                resourceShareArns: {
                  shape: 'S1o'
                },
                resourceArn: {},
                principal: {},
                associationStatus: {},
                nextToken: {},
                maxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                resourceShareAssociations: {
                  shape: 'S7'
                },
                nextToken: {}
              }
            }
          },
          GetResourceShareInvitations: {
            http: {
              requestUri: '/getresourceshareinvitations'
            },
            input: {
              type: 'structure',
              members: {
                resourceShareInvitationArns: {
                  type: 'list',
                  member: {}
                },
                resourceShareArns: {
                  shape: 'S1o'
                },
                nextToken: {},
                maxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                resourceShareInvitations: {
                  type: 'list',
                  member: {
                    shape: 'S4'
                  }
                },
                nextToken: {}
              }
            }
          },
          GetResourceShares: {
            http: {
              requestUri: '/getresourceshares'
            },
            input: {
              type: 'structure',
              required: ['resourceOwner'],
              members: {
                resourceShareArns: {
                  shape: 'S1o'
                },
                resourceShareStatus: {},
                resourceOwner: {},
                name: {},
                tagFilters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      tagKey: {},
                      tagValues: {
                        type: 'list',
                        member: {}
                      }
                    }
                  }
                },
                nextToken: {},
                maxResults: {
                  type: 'integer'
                },
                permissionArn: {},
                permissionVersion: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                resourceShares: {
                  type: 'list',
                  member: {
                    shape: 'S12'
                  }
                },
                nextToken: {}
              }
            }
          },
          ListPendingInvitationResources: {
            http: {
              requestUri: '/listpendinginvitationresources'
            },
            input: {
              type: 'structure',
              required: ['resourceShareInvitationArn'],
              members: {
                resourceShareInvitationArn: {},
                nextToken: {},
                maxResults: {
                  type: 'integer'
                },
                resourceRegionScope: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                resources: {
                  shape: 'S24'
                },
                nextToken: {}
              }
            }
          },
          ListPermissionAssociations: {
            http: {
              requestUri: '/listpermissionassociations'
            },
            input: {
              type: 'structure',
              members: {
                permissionArn: {},
                permissionVersion: {
                  type: 'integer'
                },
                associationStatus: {},
                resourceType: {},
                featureSet: {},
                defaultVersion: {
                  type: 'boolean'
                },
                nextToken: {},
                maxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                permissions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      arn: {},
                      permissionVersion: {},
                      defaultVersion: {
                        type: 'boolean'
                      },
                      resourceType: {},
                      status: {},
                      featureSet: {},
                      lastUpdatedTime: {
                        type: 'timestamp'
                      },
                      resourceShareArn: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListPermissionVersions: {
            http: {
              requestUri: '/listpermissionversions'
            },
            input: {
              type: 'structure',
              required: ['permissionArn'],
              members: {
                permissionArn: {},
                nextToken: {},
                maxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                permissions: {
                  shape: 'S2e'
                },
                nextToken: {}
              }
            }
          },
          ListPermissions: {
            http: {
              requestUri: '/listpermissions'
            },
            input: {
              type: 'structure',
              members: {
                resourceType: {},
                nextToken: {},
                maxResults: {
                  type: 'integer'
                },
                permissionType: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                permissions: {
                  shape: 'S2e'
                },
                nextToken: {}
              }
            }
          },
          ListPrincipals: {
            http: {
              requestUri: '/listprincipals'
            },
            input: {
              type: 'structure',
              required: ['resourceOwner'],
              members: {
                resourceOwner: {},
                resourceArn: {},
                principals: {
                  shape: 'Se'
                },
                resourceType: {},
                resourceShareArns: {
                  shape: 'S1o'
                },
                nextToken: {},
                maxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                principals: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      id: {},
                      resourceShareArn: {},
                      creationTime: {
                        type: 'timestamp'
                      },
                      lastUpdatedTime: {
                        type: 'timestamp'
                      },
                      external: {
                        type: 'boolean'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListReplacePermissionAssociationsWork: {
            http: {
              requestUri: '/listreplacepermissionassociationswork'
            },
            input: {
              type: 'structure',
              members: {
                workIds: {
                  type: 'list',
                  member: {}
                },
                status: {},
                nextToken: {},
                maxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                replacePermissionAssociationsWorks: {
                  type: 'list',
                  member: {
                    shape: 'S2r'
                  }
                },
                nextToken: {}
              }
            }
          },
          ListResourceSharePermissions: {
            http: {
              requestUri: '/listresourcesharepermissions'
            },
            input: {
              type: 'structure',
              required: ['resourceShareArn'],
              members: {
                resourceShareArn: {},
                nextToken: {},
                maxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                permissions: {
                  shape: 'S2e'
                },
                nextToken: {}
              }
            }
          },
          ListResourceTypes: {
            http: {
              requestUri: '/listresourcetypes'
            },
            input: {
              type: 'structure',
              members: {
                nextToken: {},
                maxResults: {
                  type: 'integer'
                },
                resourceRegionScope: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                resourceTypes: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      resourceType: {},
                      serviceName: {},
                      resourceRegionScope: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListResources: {
            http: {
              requestUri: '/listresources'
            },
            input: {
              type: 'structure',
              required: ['resourceOwner'],
              members: {
                resourceOwner: {},
                principal: {},
                resourceType: {},
                resourceArns: {
                  shape: 'Sd'
                },
                resourceShareArns: {
                  shape: 'S1o'
                },
                nextToken: {},
                maxResults: {
                  type: 'integer'
                },
                resourceRegionScope: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                resources: {
                  shape: 'S24'
                },
                nextToken: {}
              }
            }
          },
          PromotePermissionCreatedFromPolicy: {
            http: {
              requestUri: '/promotepermissioncreatedfrompolicy'
            },
            input: {
              type: 'structure',
              required: ['permissionArn', 'name'],
              members: {
                permissionArn: {},
                name: {},
                clientToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                permission: {
                  shape: 'Ss'
                },
                clientToken: {}
              }
            }
          },
          PromoteResourceShareCreatedFromPolicy: {
            http: {
              requestUri: '/promoteresourcesharecreatedfrompolicy'
            },
            input: {
              type: 'structure',
              required: ['resourceShareArn'],
              members: {
                resourceShareArn: {
                  location: 'querystring',
                  locationName: 'resourceShareArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                returnValue: {
                  type: 'boolean'
                }
              }
            }
          },
          RejectResourceShareInvitation: {
            http: {
              requestUri: '/rejectresourceshareinvitation'
            },
            input: {
              type: 'structure',
              required: ['resourceShareInvitationArn'],
              members: {
                resourceShareInvitationArn: {},
                clientToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                resourceShareInvitation: {
                  shape: 'S4'
                },
                clientToken: {}
              }
            }
          },
          ReplacePermissionAssociations: {
            http: {
              requestUri: '/replacepermissionassociations'
            },
            input: {
              type: 'structure',
              required: ['fromPermissionArn', 'toPermissionArn'],
              members: {
                fromPermissionArn: {},
                fromPermissionVersion: {
                  type: 'integer'
                },
                toPermissionArn: {},
                clientToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                replacePermissionAssociationsWork: {
                  shape: 'S2r'
                },
                clientToken: {}
              }
            }
          },
          SetDefaultPermissionVersion: {
            http: {
              requestUri: '/setdefaultpermissionversion'
            },
            input: {
              type: 'structure',
              required: ['permissionArn', 'permissionVersion'],
              members: {
                permissionArn: {},
                permissionVersion: {
                  type: 'integer'
                },
                clientToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                returnValue: {
                  type: 'boolean'
                },
                clientToken: {}
              }
            }
          },
          TagResource: {
            http: {
              requestUri: '/tagresource'
            },
            input: {
              type: 'structure',
              required: ['tags'],
              members: {
                resourceShareArn: {},
                tags: {
                  shape: 'Sn'
                },
                resourceArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UntagResource: {
            http: {
              requestUri: '/untagresource'
            },
            input: {
              type: 'structure',
              required: ['tagKeys'],
              members: {
                resourceShareArn: {},
                tagKeys: {
                  type: 'list',
                  member: {}
                },
                resourceArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateResourceShare: {
            http: {
              requestUri: '/updateresourceshare'
            },
            input: {
              type: 'structure',
              required: ['resourceShareArn'],
              members: {
                resourceShareArn: {},
                name: {},
                allowExternalPrincipals: {
                  type: 'boolean'
                },
                clientToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                resourceShare: {
                  shape: 'S12'
                },
                clientToken: {}
              }
            }
          }
        },
        shapes: {
          S4: {
            type: 'structure',
            members: {
              resourceShareInvitationArn: {},
              resourceShareName: {},
              resourceShareArn: {},
              senderAccountId: {},
              receiverAccountId: {},
              invitationTimestamp: {
                type: 'timestamp'
              },
              status: {},
              resourceShareAssociations: {
                shape: 'S7',
                deprecated: true,
                deprecatedMessage: 'This member has been deprecated. Use ListPendingInvitationResources.'
              },
              receiverArn: {}
            }
          },
          S7: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                resourceShareArn: {},
                resourceShareName: {},
                associatedEntity: {},
                associationType: {},
                status: {},
                statusMessage: {},
                creationTime: {
                  type: 'timestamp'
                },
                lastUpdatedTime: {
                  type: 'timestamp'
                },
                external: {
                  type: 'boolean'
                }
              }
            }
          },
          Sd: {
            type: 'list',
            member: {}
          },
          Se: {
            type: 'list',
            member: {}
          },
          Sf: {
            type: 'list',
            member: {}
          },
          Sn: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                key: {},
                value: {}
              }
            }
          },
          Ss: {
            type: 'structure',
            members: {
              arn: {},
              version: {},
              defaultVersion: {
                type: 'boolean'
              },
              name: {},
              resourceType: {},
              status: {},
              creationTime: {
                type: 'timestamp'
              },
              lastUpdatedTime: {
                type: 'timestamp'
              },
              isResourceTypeDefault: {
                type: 'boolean'
              },
              permissionType: {},
              featureSet: {},
              tags: {
                shape: 'Sn'
              }
            }
          },
          Sx: {
            type: 'structure',
            members: {
              arn: {},
              version: {},
              defaultVersion: {
                type: 'boolean'
              },
              name: {},
              resourceType: {},
              permission: {},
              creationTime: {
                type: 'timestamp'
              },
              lastUpdatedTime: {
                type: 'timestamp'
              },
              isResourceTypeDefault: {
                type: 'boolean'
              },
              permissionType: {},
              featureSet: {},
              status: {},
              tags: {
                shape: 'Sn'
              }
            }
          },
          S12: {
            type: 'structure',
            members: {
              resourceShareArn: {},
              name: {},
              owningAccountId: {},
              allowExternalPrincipals: {
                type: 'boolean'
              },
              status: {},
              statusMessage: {},
              tags: {
                shape: 'Sn'
              },
              creationTime: {
                type: 'timestamp'
              },
              lastUpdatedTime: {
                type: 'timestamp'
              },
              featureSet: {}
            }
          },
          S1o: {
            type: 'list',
            member: {}
          },
          S24: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                arn: {},
                type: {},
                resourceShareArn: {},
                resourceGroupArn: {},
                status: {},
                statusMessage: {},
                creationTime: {
                  type: 'timestamp'
                },
                lastUpdatedTime: {
                  type: 'timestamp'
                },
                resourceRegionScope: {}
              }
            }
          },
          S2e: {
            type: 'list',
            member: {
              shape: 'Ss'
            }
          },
          S2r: {
            type: 'structure',
            members: {
              id: {},
              fromPermissionArn: {},
              fromPermissionVersion: {},
              toPermissionArn: {},
              toPermissionVersion: {},
              status: {},
              statusMessage: {},
              creationTime: {
                type: 'timestamp'
              },
              lastUpdatedTime: {
                type: 'timestamp'
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=2918b6f206a9391928f576afe94f7a12a5074da8.js.map