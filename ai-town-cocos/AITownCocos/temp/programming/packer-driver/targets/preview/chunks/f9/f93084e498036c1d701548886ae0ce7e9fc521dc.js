System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2018-05-10',
          endpointPrefix: 'route53profiles',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          protocols: ['rest-json'],
          serviceFullName: 'Route 53 Profiles',
          serviceId: 'Route53Profiles',
          signatureVersion: 'v4',
          signingName: 'route53profiles',
          uid: 'route53profiles-2018-05-10'
        },
        operations: {
          AssociateProfile: {
            http: {
              requestUri: '/profileassociation',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['Name', 'ProfileId', 'ResourceId'],
              members: {
                Name: {},
                ProfileId: {},
                ResourceId: {},
                Tags: {
                  shape: 'S4'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ProfileAssociation: {
                  shape: 'S9'
                }
              }
            }
          },
          AssociateResourceToProfile: {
            http: {
              requestUri: '/profileresourceassociation',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['Name', 'ProfileId', 'ResourceArn'],
              members: {
                Name: {},
                ProfileId: {},
                ResourceArn: {},
                ResourceProperties: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ProfileResourceAssociation: {
                  shape: 'Si'
                }
              }
            }
          },
          CreateProfile: {
            http: {
              requestUri: '/profile',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ClientToken', 'Name'],
              members: {
                ClientToken: {
                  idempotencyToken: true
                },
                Name: {},
                Tags: {
                  shape: 'S4'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Profile: {
                  shape: 'Sm'
                }
              }
            }
          },
          DeleteProfile: {
            http: {
              method: 'DELETE',
              requestUri: '/profile/{ProfileId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ProfileId'],
              members: {
                ProfileId: {
                  location: 'uri',
                  locationName: 'ProfileId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Profile: {
                  shape: 'Sm'
                }
              }
            },
            idempotent: true
          },
          DisassociateProfile: {
            http: {
              method: 'DELETE',
              requestUri: '/profileassociation/Profileid/{ProfileId}/resourceid/{ResourceId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ProfileId', 'ResourceId'],
              members: {
                ProfileId: {
                  location: 'uri',
                  locationName: 'ProfileId'
                },
                ResourceId: {
                  location: 'uri',
                  locationName: 'ResourceId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ProfileAssociation: {
                  shape: 'S9'
                }
              }
            },
            idempotent: true
          },
          DisassociateResourceFromProfile: {
            http: {
              method: 'DELETE',
              requestUri: '/profileresourceassociation/profileid/{ProfileId}/resourcearn/{ResourceArn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ProfileId', 'ResourceArn'],
              members: {
                ProfileId: {
                  location: 'uri',
                  locationName: 'ProfileId'
                },
                ResourceArn: {
                  location: 'uri',
                  locationName: 'ResourceArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ProfileResourceAssociation: {
                  shape: 'Si'
                }
              }
            },
            idempotent: true
          },
          GetProfile: {
            http: {
              method: 'GET',
              requestUri: '/profile/{ProfileId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ProfileId'],
              members: {
                ProfileId: {
                  location: 'uri',
                  locationName: 'ProfileId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Profile: {
                  shape: 'Sm'
                }
              }
            }
          },
          GetProfileAssociation: {
            http: {
              method: 'GET',
              requestUri: '/profileassociation/{ProfileAssociationId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ProfileAssociationId'],
              members: {
                ProfileAssociationId: {
                  location: 'uri',
                  locationName: 'ProfileAssociationId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ProfileAssociation: {
                  shape: 'S9'
                }
              }
            }
          },
          GetProfileResourceAssociation: {
            http: {
              method: 'GET',
              requestUri: '/profileresourceassociation/{ProfileResourceAssociationId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ProfileResourceAssociationId'],
              members: {
                ProfileResourceAssociationId: {
                  location: 'uri',
                  locationName: 'ProfileResourceAssociationId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ProfileResourceAssociation: {
                  shape: 'Si'
                }
              }
            }
          },
          ListProfileAssociations: {
            http: {
              method: 'GET',
              requestUri: '/profileassociations',
              responseCode: 200
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
                ProfileId: {
                  location: 'querystring',
                  locationName: 'profileId'
                },
                ResourceId: {
                  location: 'querystring',
                  locationName: 'resourceId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                ProfileAssociations: {
                  type: 'list',
                  member: {
                    shape: 'S9'
                  }
                }
              }
            }
          },
          ListProfileResourceAssociations: {
            http: {
              method: 'GET',
              requestUri: '/profileresourceassociations/profileid/{ProfileId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ProfileId'],
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
                ProfileId: {
                  location: 'uri',
                  locationName: 'ProfileId'
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
                NextToken: {},
                ProfileResourceAssociations: {
                  type: 'list',
                  member: {
                    shape: 'Si'
                  }
                }
              }
            }
          },
          ListProfiles: {
            http: {
              method: 'GET',
              requestUri: '/profiles',
              responseCode: 200
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
                ProfileSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Arn: {},
                      Id: {},
                      Name: {},
                      ShareStatus: {}
                    }
                  }
                }
              }
            }
          },
          ListTagsForResource: {
            http: {
              method: 'GET',
              requestUri: '/tags/{ResourceArn}',
              responseCode: 200
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
              required: ['Tags'],
              members: {
                Tags: {
                  shape: 'S1e'
                }
              }
            }
          },
          TagResource: {
            http: {
              requestUri: '/tags/{ResourceArn}',
              responseCode: 204
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
                  shape: 'S1e'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          UntagResource: {
            http: {
              method: 'DELETE',
              requestUri: '/tags/{ResourceArn}',
              responseCode: 204
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
            idempotent: true
          },
          UpdateProfileResourceAssociation: {
            http: {
              method: 'PATCH',
              requestUri: '/profileresourceassociation/{ProfileResourceAssociationId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ProfileResourceAssociationId'],
              members: {
                Name: {},
                ProfileResourceAssociationId: {
                  location: 'uri',
                  locationName: 'ProfileResourceAssociationId'
                },
                ResourceProperties: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ProfileResourceAssociation: {
                  shape: 'Si'
                }
              }
            }
          }
        },
        shapes: {
          S4: {
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
          S9: {
            type: 'structure',
            members: {
              CreationTime: {
                type: 'timestamp'
              },
              Id: {},
              ModificationTime: {
                type: 'timestamp'
              },
              Name: {},
              OwnerId: {},
              ProfileId: {},
              ResourceId: {},
              Status: {},
              StatusMessage: {}
            }
          },
          Si: {
            type: 'structure',
            members: {
              CreationTime: {
                type: 'timestamp'
              },
              Id: {},
              ModificationTime: {
                type: 'timestamp'
              },
              Name: {},
              OwnerId: {},
              ProfileId: {},
              ResourceArn: {},
              ResourceProperties: {},
              ResourceType: {},
              Status: {},
              StatusMessage: {}
            }
          },
          Sm: {
            type: 'structure',
            members: {
              Arn: {},
              ClientToken: {},
              CreationTime: {
                type: 'timestamp'
              },
              Id: {},
              ModificationTime: {
                type: 'timestamp'
              },
              Name: {},
              OwnerId: {},
              ShareStatus: {},
              Status: {},
              StatusMessage: {}
            }
          },
          S1e: {
            type: 'map',
            key: {},
            value: {}
          }
        }
      });
    }
  };
});
//# sourceMappingURL=f93084e498036c1d701548886ae0ce7e9fc521dc.js.map