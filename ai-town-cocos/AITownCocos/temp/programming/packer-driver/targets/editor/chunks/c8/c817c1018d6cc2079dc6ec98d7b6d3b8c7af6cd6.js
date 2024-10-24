System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2017-07-25',
          endpointPrefix: 's3-outposts',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceAbbreviation: 'Amazon S3 Outposts',
          serviceFullName: 'Amazon S3 on Outposts',
          serviceId: 'S3Outposts',
          signatureVersion: 'v4',
          signingName: 's3-outposts',
          uid: 's3outposts-2017-07-25'
        },
        operations: {
          CreateEndpoint: {
            http: {
              requestUri: '/S3Outposts/CreateEndpoint'
            },
            input: {
              type: 'structure',
              required: ['OutpostId', 'SubnetId', 'SecurityGroupId'],
              members: {
                OutpostId: {},
                SubnetId: {},
                SecurityGroupId: {},
                AccessType: {},
                CustomerOwnedIpv4Pool: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                EndpointArn: {}
              }
            }
          },
          DeleteEndpoint: {
            http: {
              method: 'DELETE',
              requestUri: '/S3Outposts/DeleteEndpoint'
            },
            input: {
              type: 'structure',
              required: ['EndpointId', 'OutpostId'],
              members: {
                EndpointId: {
                  location: 'querystring',
                  locationName: 'endpointId'
                },
                OutpostId: {
                  location: 'querystring',
                  locationName: 'outpostId'
                }
              }
            }
          },
          ListEndpoints: {
            http: {
              method: 'GET',
              requestUri: '/S3Outposts/ListEndpoints'
            },
            input: {
              type: 'structure',
              members: {
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Endpoints: {
                  shape: 'Sf'
                },
                NextToken: {}
              }
            }
          },
          ListOutpostsWithS3: {
            http: {
              method: 'GET',
              requestUri: '/S3Outposts/ListOutpostsWithS3'
            },
            input: {
              type: 'structure',
              members: {
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Outposts: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      OutpostArn: {},
                      S3OutpostArn: {},
                      OutpostId: {},
                      OwnerId: {},
                      CapacityInBytes: {
                        type: 'long'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListSharedEndpoints: {
            http: {
              method: 'GET',
              requestUri: '/S3Outposts/ListSharedEndpoints'
            },
            input: {
              type: 'structure',
              required: ['OutpostId'],
              members: {
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                OutpostId: {
                  location: 'querystring',
                  locationName: 'outpostId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Endpoints: {
                  shape: 'Sf'
                },
                NextToken: {}
              }
            }
          }
        },
        shapes: {
          Sf: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                EndpointArn: {},
                OutpostsId: {},
                CidrBlock: {},
                Status: {},
                CreationTime: {
                  type: 'timestamp'
                },
                NetworkInterfaces: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      NetworkInterfaceId: {}
                    }
                  }
                },
                VpcId: {},
                SubnetId: {},
                SecurityGroupId: {},
                AccessType: {},
                CustomerOwnedIpv4Pool: {},
                FailedReason: {
                  type: 'structure',
                  members: {
                    ErrorCode: {},
                    Message: {}
                  }
                }
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=c817c1018d6cc2079dc6ec98d7b6d3b8c7af6cd6.js.map