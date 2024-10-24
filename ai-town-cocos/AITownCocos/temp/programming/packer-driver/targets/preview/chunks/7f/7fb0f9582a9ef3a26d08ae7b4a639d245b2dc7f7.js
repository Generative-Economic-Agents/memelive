System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2020-06-24',
          endpointPrefix: 'servicecatalog-appregistry',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceAbbreviation: 'AppRegistry',
          serviceFullName: 'AWS Service Catalog App Registry',
          serviceId: 'Service Catalog AppRegistry',
          signatureVersion: 'v4',
          signingName: 'servicecatalog',
          uid: 'AWS242AppRegistry-2020-06-24'
        },
        operations: {
          AssociateAttributeGroup: {
            http: {
              method: 'PUT',
              requestUri: '/applications/{application}/attribute-groups/{attributeGroup}'
            },
            input: {
              type: 'structure',
              required: ['application', 'attributeGroup'],
              members: {
                application: {
                  location: 'uri',
                  locationName: 'application'
                },
                attributeGroup: {
                  location: 'uri',
                  locationName: 'attributeGroup'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                applicationArn: {},
                attributeGroupArn: {}
              }
            }
          },
          AssociateResource: {
            http: {
              method: 'PUT',
              requestUri: '/applications/{application}/resources/{resourceType}/{resource}'
            },
            input: {
              type: 'structure',
              required: ['application', 'resourceType', 'resource'],
              members: {
                application: {
                  location: 'uri',
                  locationName: 'application'
                },
                resourceType: {
                  location: 'uri',
                  locationName: 'resourceType'
                },
                resource: {
                  location: 'uri',
                  locationName: 'resource'
                },
                options: {
                  shape: 'Sa'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                applicationArn: {},
                resourceArn: {},
                options: {
                  shape: 'Sa'
                }
              }
            }
          },
          CreateApplication: {
            http: {
              requestUri: '/applications',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['name', 'clientToken'],
              members: {
                name: {},
                description: {},
                tags: {
                  shape: 'Sh'
                },
                clientToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                application: {
                  shape: 'Sm'
                }
              }
            }
          },
          CreateAttributeGroup: {
            http: {
              requestUri: '/attribute-groups',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['name', 'attributes', 'clientToken'],
              members: {
                name: {},
                description: {},
                attributes: {},
                tags: {
                  shape: 'Sh'
                },
                clientToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                attributeGroup: {
                  shape: 'St'
                }
              }
            }
          },
          DeleteApplication: {
            http: {
              method: 'DELETE',
              requestUri: '/applications/{application}'
            },
            input: {
              type: 'structure',
              required: ['application'],
              members: {
                application: {
                  location: 'uri',
                  locationName: 'application'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                application: {
                  shape: 'Sx'
                }
              }
            }
          },
          DeleteAttributeGroup: {
            http: {
              method: 'DELETE',
              requestUri: '/attribute-groups/{attributeGroup}'
            },
            input: {
              type: 'structure',
              required: ['attributeGroup'],
              members: {
                attributeGroup: {
                  location: 'uri',
                  locationName: 'attributeGroup'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                attributeGroup: {
                  shape: 'S10'
                }
              }
            }
          },
          DisassociateAttributeGroup: {
            http: {
              method: 'DELETE',
              requestUri: '/applications/{application}/attribute-groups/{attributeGroup}'
            },
            input: {
              type: 'structure',
              required: ['application', 'attributeGroup'],
              members: {
                application: {
                  location: 'uri',
                  locationName: 'application'
                },
                attributeGroup: {
                  location: 'uri',
                  locationName: 'attributeGroup'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                applicationArn: {},
                attributeGroupArn: {}
              }
            }
          },
          DisassociateResource: {
            http: {
              method: 'DELETE',
              requestUri: '/applications/{application}/resources/{resourceType}/{resource}'
            },
            input: {
              type: 'structure',
              required: ['application', 'resourceType', 'resource'],
              members: {
                application: {
                  location: 'uri',
                  locationName: 'application'
                },
                resourceType: {
                  location: 'uri',
                  locationName: 'resourceType'
                },
                resource: {
                  location: 'uri',
                  locationName: 'resource'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                applicationArn: {},
                resourceArn: {}
              }
            }
          },
          GetApplication: {
            http: {
              method: 'GET',
              requestUri: '/applications/{application}'
            },
            input: {
              type: 'structure',
              required: ['application'],
              members: {
                application: {
                  location: 'uri',
                  locationName: 'application'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                id: {},
                arn: {},
                name: {},
                description: {},
                creationTime: {
                  shape: 'So'
                },
                lastUpdateTime: {
                  shape: 'So'
                },
                associatedResourceCount: {
                  type: 'integer'
                },
                tags: {
                  shape: 'Sh'
                },
                integrations: {
                  type: 'structure',
                  members: {
                    resourceGroup: {
                      shape: 'S1a'
                    },
                    applicationTagResourceGroup: {
                      shape: 'S1a'
                    }
                  }
                },
                applicationTag: {
                  shape: 'Sp'
                }
              }
            }
          },
          GetAssociatedResource: {
            http: {
              method: 'GET',
              requestUri: '/applications/{application}/resources/{resourceType}/{resource}'
            },
            input: {
              type: 'structure',
              required: ['application', 'resourceType', 'resource'],
              members: {
                application: {
                  location: 'uri',
                  locationName: 'application'
                },
                resourceType: {
                  location: 'uri',
                  locationName: 'resourceType'
                },
                resource: {
                  location: 'uri',
                  locationName: 'resource'
                },
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                resourceTagStatus: {
                  location: 'querystring',
                  locationName: 'resourceTagStatus',
                  type: 'list',
                  member: {}
                },
                maxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                resource: {
                  type: 'structure',
                  members: {
                    name: {},
                    arn: {},
                    associationTime: {
                      shape: 'So'
                    },
                    integrations: {
                      type: 'structure',
                      members: {
                        resourceGroup: {
                          shape: 'S1a'
                        }
                      }
                    }
                  }
                },
                options: {
                  shape: 'Sa'
                },
                applicationTagResult: {
                  type: 'structure',
                  members: {
                    applicationTagStatus: {},
                    errorMessage: {},
                    resources: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          resourceArn: {},
                          errorMessage: {},
                          status: {},
                          resourceType: {}
                        }
                      }
                    },
                    nextToken: {}
                  }
                }
              }
            },
            idempotent: true
          },
          GetAttributeGroup: {
            http: {
              method: 'GET',
              requestUri: '/attribute-groups/{attributeGroup}'
            },
            input: {
              type: 'structure',
              required: ['attributeGroup'],
              members: {
                attributeGroup: {
                  location: 'uri',
                  locationName: 'attributeGroup'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                id: {},
                arn: {},
                name: {},
                description: {},
                attributes: {},
                creationTime: {
                  shape: 'So'
                },
                lastUpdateTime: {
                  shape: 'So'
                },
                tags: {
                  shape: 'Sh'
                },
                createdBy: {}
              }
            }
          },
          GetConfiguration: {
            http: {
              method: 'GET',
              requestUri: '/configuration'
            },
            output: {
              type: 'structure',
              members: {
                configuration: {
                  shape: 'S1u'
                }
              }
            }
          },
          ListApplications: {
            http: {
              method: 'GET',
              requestUri: '/applications'
            },
            input: {
              type: 'structure',
              members: {
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                maxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                applications: {
                  type: 'list',
                  member: {
                    shape: 'Sx'
                  }
                },
                nextToken: {}
              }
            },
            idempotent: true
          },
          ListAssociatedAttributeGroups: {
            http: {
              method: 'GET',
              requestUri: '/applications/{application}/attribute-groups'
            },
            input: {
              type: 'structure',
              required: ['application'],
              members: {
                application: {
                  location: 'uri',
                  locationName: 'application'
                },
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                maxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                attributeGroups: {
                  type: 'list',
                  member: {}
                },
                nextToken: {}
              }
            },
            idempotent: true
          },
          ListAssociatedResources: {
            http: {
              method: 'GET',
              requestUri: '/applications/{application}/resources'
            },
            input: {
              type: 'structure',
              required: ['application'],
              members: {
                application: {
                  location: 'uri',
                  locationName: 'application'
                },
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                maxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                resources: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      name: {},
                      arn: {},
                      resourceType: {},
                      resourceDetails: {
                        type: 'structure',
                        members: {
                          tagValue: {}
                        }
                      },
                      options: {
                        shape: 'Sa'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            },
            idempotent: true
          },
          ListAttributeGroups: {
            http: {
              method: 'GET',
              requestUri: '/attribute-groups'
            },
            input: {
              type: 'structure',
              members: {
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                maxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                attributeGroups: {
                  type: 'list',
                  member: {
                    shape: 'S10'
                  }
                },
                nextToken: {}
              }
            },
            idempotent: true
          },
          ListAttributeGroupsForApplication: {
            http: {
              method: 'GET',
              requestUri: '/applications/{application}/attribute-group-details'
            },
            input: {
              type: 'structure',
              required: ['application'],
              members: {
                application: {
                  location: 'uri',
                  locationName: 'application'
                },
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                maxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                attributeGroupsDetails: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      id: {},
                      arn: {},
                      name: {},
                      createdBy: {}
                    }
                  }
                },
                nextToken: {}
              }
            },
            idempotent: true
          },
          ListTagsForResource: {
            http: {
              method: 'GET',
              requestUri: '/tags/{resourceArn}'
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
                  shape: 'Sh'
                }
              }
            }
          },
          PutConfiguration: {
            http: {
              method: 'PUT',
              requestUri: '/configuration'
            },
            input: {
              type: 'structure',
              required: ['configuration'],
              members: {
                configuration: {
                  shape: 'S1u'
                }
              }
            }
          },
          SyncResource: {
            http: {
              requestUri: '/sync/{resourceType}/{resource}'
            },
            input: {
              type: 'structure',
              required: ['resourceType', 'resource'],
              members: {
                resourceType: {
                  location: 'uri',
                  locationName: 'resourceType'
                },
                resource: {
                  location: 'uri',
                  locationName: 'resource'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                applicationArn: {},
                resourceArn: {},
                actionTaken: {}
              }
            }
          },
          TagResource: {
            http: {
              requestUri: '/tags/{resourceArn}'
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
                  shape: 'Sh'
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
            }
          },
          UpdateApplication: {
            http: {
              method: 'PATCH',
              requestUri: '/applications/{application}'
            },
            input: {
              type: 'structure',
              required: ['application'],
              members: {
                application: {
                  location: 'uri',
                  locationName: 'application'
                },
                name: {
                  deprecated: true,
                  deprecatedMessage: 'Name update for application is deprecated.'
                },
                description: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                application: {
                  shape: 'Sm'
                }
              }
            }
          },
          UpdateAttributeGroup: {
            http: {
              method: 'PATCH',
              requestUri: '/attribute-groups/{attributeGroup}'
            },
            input: {
              type: 'structure',
              required: ['attributeGroup'],
              members: {
                attributeGroup: {
                  location: 'uri',
                  locationName: 'attributeGroup'
                },
                name: {
                  deprecated: true,
                  deprecatedMessage: 'Name update for attribute group is deprecated.'
                },
                description: {},
                attributes: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                attributeGroup: {
                  shape: 'St'
                }
              }
            }
          }
        },
        shapes: {
          Sa: {
            type: 'list',
            member: {}
          },
          Sh: {
            type: 'map',
            key: {},
            value: {}
          },
          Sm: {
            type: 'structure',
            members: {
              id: {},
              arn: {},
              name: {},
              description: {},
              creationTime: {
                shape: 'So'
              },
              lastUpdateTime: {
                shape: 'So'
              },
              tags: {
                shape: 'Sh'
              },
              applicationTag: {
                shape: 'Sp'
              }
            }
          },
          So: {
            type: 'timestamp',
            timestampFormat: 'iso8601'
          },
          Sp: {
            type: 'map',
            key: {},
            value: {}
          },
          St: {
            type: 'structure',
            members: {
              id: {},
              arn: {},
              name: {},
              description: {},
              creationTime: {
                shape: 'So'
              },
              lastUpdateTime: {
                shape: 'So'
              },
              tags: {
                shape: 'Sh'
              }
            }
          },
          Sx: {
            type: 'structure',
            members: {
              id: {},
              arn: {},
              name: {},
              description: {},
              creationTime: {
                shape: 'So'
              },
              lastUpdateTime: {
                shape: 'So'
              }
            }
          },
          S10: {
            type: 'structure',
            members: {
              id: {},
              arn: {},
              name: {},
              description: {},
              creationTime: {
                shape: 'So'
              },
              lastUpdateTime: {
                shape: 'So'
              },
              createdBy: {}
            }
          },
          S1a: {
            type: 'structure',
            members: {
              state: {},
              arn: {},
              errorMessage: {}
            }
          },
          S1u: {
            type: 'structure',
            members: {
              tagQueryConfiguration: {
                type: 'structure',
                members: {
                  tagKey: {}
                }
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=7fb0f9582a9ef3a26d08ae7b4a639d245b2dc7f7.js.map