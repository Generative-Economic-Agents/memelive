System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2022-05-13',
          endpointPrefix: 'repostspace',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceFullName: 'AWS re:Post Private',
          serviceId: 'repostspace',
          signatureVersion: 'v4',
          signingName: 'repostspace',
          uid: 'repostspace-2022-05-13'
        },
        operations: {
          CreateSpace: {
            http: {
              requestUri: '/spaces',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['name', 'subdomain', 'tier'],
              members: {
                description: {
                  shape: 'S2'
                },
                name: {
                  shape: 'S3'
                },
                roleArn: {},
                subdomain: {},
                tags: {
                  shape: 'S6'
                },
                tier: {},
                userKMSKey: {}
              }
            },
            output: {
              type: 'structure',
              required: ['spaceId'],
              members: {
                spaceId: {}
              }
            },
            idempotent: true
          },
          DeleteSpace: {
            http: {
              method: 'DELETE',
              requestUri: '/spaces/{spaceId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['spaceId'],
              members: {
                spaceId: {
                  location: 'uri',
                  locationName: 'spaceId'
                }
              }
            },
            idempotent: true
          },
          DeregisterAdmin: {
            http: {
              method: 'DELETE',
              requestUri: '/spaces/{spaceId}/admins/{adminId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['adminId', 'spaceId'],
              members: {
                adminId: {
                  location: 'uri',
                  locationName: 'adminId'
                },
                spaceId: {
                  location: 'uri',
                  locationName: 'spaceId'
                }
              }
            },
            idempotent: true
          },
          GetSpace: {
            http: {
              method: 'GET',
              requestUri: '/spaces/{spaceId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['spaceId'],
              members: {
                spaceId: {
                  location: 'uri',
                  locationName: 'spaceId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['arn', 'clientId', 'configurationStatus', 'createDateTime', 'name', 'randomDomain', 'spaceId', 'status', 'storageLimit', 'tier', 'vanityDomain', 'vanityDomainStatus'],
              members: {
                arn: {},
                clientId: {},
                configurationStatus: {},
                contentSize: {
                  type: 'long'
                },
                createDateTime: {
                  shape: 'Sl'
                },
                customerRoleArn: {},
                deleteDateTime: {
                  shape: 'Sl'
                },
                description: {
                  shape: 'S2'
                },
                groupAdmins: {
                  type: 'list',
                  member: {}
                },
                name: {
                  shape: 'S3'
                },
                randomDomain: {},
                spaceId: {},
                status: {},
                storageLimit: {
                  type: 'long'
                },
                tier: {},
                userAdmins: {
                  type: 'list',
                  member: {}
                },
                userCount: {
                  type: 'integer'
                },
                userKMSKey: {},
                vanityDomain: {},
                vanityDomainStatus: {}
              }
            }
          },
          ListSpaces: {
            http: {
              method: 'GET',
              requestUri: '/spaces',
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
              required: ['spaces'],
              members: {
                nextToken: {},
                spaces: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['arn', 'configurationStatus', 'createDateTime', 'name', 'randomDomain', 'spaceId', 'status', 'storageLimit', 'tier', 'vanityDomain', 'vanityDomainStatus'],
                    members: {
                      arn: {},
                      configurationStatus: {},
                      contentSize: {
                        type: 'long'
                      },
                      createDateTime: {
                        shape: 'Sl'
                      },
                      deleteDateTime: {
                        shape: 'Sl'
                      },
                      description: {
                        shape: 'S2'
                      },
                      name: {
                        shape: 'S3'
                      },
                      randomDomain: {},
                      spaceId: {},
                      status: {},
                      storageLimit: {
                        type: 'long'
                      },
                      tier: {},
                      userCount: {
                        type: 'integer'
                      },
                      userKMSKey: {},
                      vanityDomain: {},
                      vanityDomainStatus: {}
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
                  shape: 'S6'
                }
              }
            }
          },
          RegisterAdmin: {
            http: {
              requestUri: '/spaces/{spaceId}/admins/{adminId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['adminId', 'spaceId'],
              members: {
                adminId: {
                  location: 'uri',
                  locationName: 'adminId'
                },
                spaceId: {
                  location: 'uri',
                  locationName: 'spaceId'
                }
              }
            },
            idempotent: true
          },
          SendInvites: {
            http: {
              requestUri: '/spaces/{spaceId}/invite',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['accessorIds', 'body', 'spaceId', 'title'],
              members: {
                accessorIds: {
                  type: 'list',
                  member: {}
                },
                body: {
                  type: 'string',
                  sensitive: true
                },
                spaceId: {
                  location: 'uri',
                  locationName: 'spaceId'
                },
                title: {
                  type: 'string',
                  sensitive: true
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
                  shape: 'S6'
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
          UpdateSpace: {
            http: {
              method: 'PUT',
              requestUri: '/spaces/{spaceId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['spaceId'],
              members: {
                description: {
                  shape: 'S2'
                },
                roleArn: {},
                spaceId: {
                  location: 'uri',
                  locationName: 'spaceId'
                },
                tier: {}
              }
            },
            idempotent: true
          }
        },
        shapes: {
          S2: {
            type: 'string',
            sensitive: true
          },
          S3: {
            type: 'string',
            sensitive: true
          },
          S6: {
            type: 'map',
            key: {},
            value: {},
            sensitive: true
          },
          Sl: {
            type: 'timestamp',
            timestampFormat: 'iso8601'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=ac2f7f4825b9debe1e7a08b2e3a0fe17595f9ef0.js.map