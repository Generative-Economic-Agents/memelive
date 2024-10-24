System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2022-12-25',
          endpointPrefix: 'mediapackagev2',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceAbbreviation: 'mediapackagev2',
          serviceFullName: 'AWS Elemental MediaPackage v2',
          serviceId: 'MediaPackageV2',
          signatureVersion: 'v4',
          signingName: 'mediapackagev2',
          uid: 'mediapackagev2-2022-12-25'
        },
        operations: {
          CreateChannel: {
            http: {
              requestUri: '/channelGroup/{ChannelGroupName}/channel',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ChannelGroupName', 'ChannelName'],
              members: {
                ChannelGroupName: {
                  location: 'uri',
                  locationName: 'ChannelGroupName'
                },
                ChannelName: {},
                ClientToken: {
                  idempotencyToken: true,
                  location: 'header',
                  locationName: 'x-amzn-client-token'
                },
                Description: {},
                Tags: {
                  shape: 'S5',
                  locationName: 'tags'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Arn', 'ChannelName', 'ChannelGroupName', 'CreatedAt', 'ModifiedAt'],
              members: {
                Arn: {},
                ChannelName: {},
                ChannelGroupName: {},
                CreatedAt: {
                  type: 'timestamp'
                },
                ModifiedAt: {
                  type: 'timestamp'
                },
                Description: {},
                IngestEndpoints: {
                  shape: 'Sb'
                },
                ETag: {},
                Tags: {
                  shape: 'S5'
                }
              }
            },
            idempotent: true
          },
          CreateChannelGroup: {
            http: {
              requestUri: '/channelGroup',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ChannelGroupName'],
              members: {
                ChannelGroupName: {},
                ClientToken: {
                  idempotencyToken: true,
                  location: 'header',
                  locationName: 'x-amzn-client-token'
                },
                Description: {},
                Tags: {
                  shape: 'S5',
                  locationName: 'tags'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['ChannelGroupName', 'Arn', 'EgressDomain', 'CreatedAt', 'ModifiedAt'],
              members: {
                ChannelGroupName: {},
                Arn: {},
                EgressDomain: {},
                CreatedAt: {
                  type: 'timestamp'
                },
                ModifiedAt: {
                  type: 'timestamp'
                },
                ETag: {},
                Description: {},
                Tags: {
                  shape: 'S5'
                }
              }
            },
            idempotent: true
          },
          CreateOriginEndpoint: {
            http: {
              requestUri: '/channelGroup/{ChannelGroupName}/channel/{ChannelName}/originEndpoint',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ChannelGroupName', 'ChannelName', 'OriginEndpointName', 'ContainerType'],
              members: {
                ChannelGroupName: {
                  location: 'uri',
                  locationName: 'ChannelGroupName'
                },
                ChannelName: {
                  location: 'uri',
                  locationName: 'ChannelName'
                },
                OriginEndpointName: {},
                ContainerType: {},
                Segment: {
                  shape: 'Si'
                },
                ClientToken: {
                  idempotencyToken: true,
                  location: 'header',
                  locationName: 'x-amzn-client-token'
                },
                Description: {},
                StartoverWindowSeconds: {
                  type: 'integer'
                },
                HlsManifests: {
                  shape: 'S15'
                },
                LowLatencyHlsManifests: {
                  shape: 'S1f'
                },
                DashManifests: {
                  shape: 'S1j'
                },
                Tags: {
                  shape: 'S5'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Arn', 'ChannelGroupName', 'ChannelName', 'OriginEndpointName', 'ContainerType', 'Segment', 'CreatedAt', 'ModifiedAt'],
              members: {
                Arn: {},
                ChannelGroupName: {},
                ChannelName: {},
                OriginEndpointName: {},
                ContainerType: {},
                Segment: {
                  shape: 'Si'
                },
                CreatedAt: {
                  type: 'timestamp'
                },
                ModifiedAt: {
                  type: 'timestamp'
                },
                Description: {},
                StartoverWindowSeconds: {
                  type: 'integer'
                },
                HlsManifests: {
                  shape: 'S20'
                },
                LowLatencyHlsManifests: {
                  shape: 'S22'
                },
                DashManifests: {
                  shape: 'S24'
                },
                ETag: {},
                Tags: {
                  shape: 'S5'
                }
              }
            },
            idempotent: true
          },
          DeleteChannel: {
            http: {
              method: 'DELETE',
              requestUri: '/channelGroup/{ChannelGroupName}/channel/{ChannelName}/',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ChannelGroupName', 'ChannelName'],
              members: {
                ChannelGroupName: {
                  location: 'uri',
                  locationName: 'ChannelGroupName'
                },
                ChannelName: {
                  location: 'uri',
                  locationName: 'ChannelName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeleteChannelGroup: {
            http: {
              method: 'DELETE',
              requestUri: '/channelGroup/{ChannelGroupName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ChannelGroupName'],
              members: {
                ChannelGroupName: {
                  location: 'uri',
                  locationName: 'ChannelGroupName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeleteChannelPolicy: {
            http: {
              method: 'DELETE',
              requestUri: '/channelGroup/{ChannelGroupName}/channel/{ChannelName}/policy',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ChannelGroupName', 'ChannelName'],
              members: {
                ChannelGroupName: {
                  location: 'uri',
                  locationName: 'ChannelGroupName'
                },
                ChannelName: {
                  location: 'uri',
                  locationName: 'ChannelName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeleteOriginEndpoint: {
            http: {
              method: 'DELETE',
              requestUri: '/channelGroup/{ChannelGroupName}/channel/{ChannelName}/originEndpoint/{OriginEndpointName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ChannelGroupName', 'ChannelName', 'OriginEndpointName'],
              members: {
                ChannelGroupName: {
                  location: 'uri',
                  locationName: 'ChannelGroupName'
                },
                ChannelName: {
                  location: 'uri',
                  locationName: 'ChannelName'
                },
                OriginEndpointName: {
                  location: 'uri',
                  locationName: 'OriginEndpointName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeleteOriginEndpointPolicy: {
            http: {
              method: 'DELETE',
              requestUri: '/channelGroup/{ChannelGroupName}/channel/{ChannelName}/originEndpoint/{OriginEndpointName}/policy',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ChannelGroupName', 'ChannelName', 'OriginEndpointName'],
              members: {
                ChannelGroupName: {
                  location: 'uri',
                  locationName: 'ChannelGroupName'
                },
                ChannelName: {
                  location: 'uri',
                  locationName: 'ChannelName'
                },
                OriginEndpointName: {
                  location: 'uri',
                  locationName: 'OriginEndpointName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          GetChannel: {
            http: {
              method: 'GET',
              requestUri: '/channelGroup/{ChannelGroupName}/channel/{ChannelName}/',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ChannelGroupName', 'ChannelName'],
              members: {
                ChannelGroupName: {
                  location: 'uri',
                  locationName: 'ChannelGroupName'
                },
                ChannelName: {
                  location: 'uri',
                  locationName: 'ChannelName'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Arn', 'ChannelName', 'ChannelGroupName', 'CreatedAt', 'ModifiedAt'],
              members: {
                Arn: {},
                ChannelName: {},
                ChannelGroupName: {},
                CreatedAt: {
                  type: 'timestamp'
                },
                ModifiedAt: {
                  type: 'timestamp'
                },
                Description: {},
                IngestEndpoints: {
                  shape: 'Sb'
                },
                ETag: {},
                Tags: {
                  shape: 'S5'
                }
              }
            }
          },
          GetChannelGroup: {
            http: {
              method: 'GET',
              requestUri: '/channelGroup/{ChannelGroupName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ChannelGroupName'],
              members: {
                ChannelGroupName: {
                  location: 'uri',
                  locationName: 'ChannelGroupName'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['ChannelGroupName', 'Arn', 'EgressDomain', 'CreatedAt', 'ModifiedAt'],
              members: {
                ChannelGroupName: {},
                Arn: {},
                EgressDomain: {},
                CreatedAt: {
                  type: 'timestamp'
                },
                ModifiedAt: {
                  type: 'timestamp'
                },
                Description: {},
                ETag: {},
                Tags: {
                  shape: 'S5',
                  locationName: 'tags'
                }
              }
            }
          },
          GetChannelPolicy: {
            http: {
              method: 'GET',
              requestUri: '/channelGroup/{ChannelGroupName}/channel/{ChannelName}/policy',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ChannelGroupName', 'ChannelName'],
              members: {
                ChannelGroupName: {
                  location: 'uri',
                  locationName: 'ChannelGroupName'
                },
                ChannelName: {
                  location: 'uri',
                  locationName: 'ChannelName'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['ChannelGroupName', 'ChannelName', 'Policy'],
              members: {
                ChannelGroupName: {},
                ChannelName: {},
                Policy: {}
              }
            }
          },
          GetOriginEndpoint: {
            http: {
              method: 'GET',
              requestUri: '/channelGroup/{ChannelGroupName}/channel/{ChannelName}/originEndpoint/{OriginEndpointName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ChannelGroupName', 'ChannelName', 'OriginEndpointName'],
              members: {
                ChannelGroupName: {
                  location: 'uri',
                  locationName: 'ChannelGroupName'
                },
                ChannelName: {
                  location: 'uri',
                  locationName: 'ChannelName'
                },
                OriginEndpointName: {
                  location: 'uri',
                  locationName: 'OriginEndpointName'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Arn', 'ChannelGroupName', 'ChannelName', 'OriginEndpointName', 'ContainerType', 'Segment', 'CreatedAt', 'ModifiedAt'],
              members: {
                Arn: {},
                ChannelGroupName: {},
                ChannelName: {},
                OriginEndpointName: {},
                ContainerType: {},
                Segment: {
                  shape: 'Si'
                },
                CreatedAt: {
                  type: 'timestamp'
                },
                ModifiedAt: {
                  type: 'timestamp'
                },
                Description: {},
                StartoverWindowSeconds: {
                  type: 'integer'
                },
                HlsManifests: {
                  shape: 'S20'
                },
                LowLatencyHlsManifests: {
                  shape: 'S22'
                },
                ETag: {},
                Tags: {
                  shape: 'S5'
                },
                DashManifests: {
                  shape: 'S24'
                }
              }
            }
          },
          GetOriginEndpointPolicy: {
            http: {
              method: 'GET',
              requestUri: '/channelGroup/{ChannelGroupName}/channel/{ChannelName}/originEndpoint/{OriginEndpointName}/policy',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ChannelGroupName', 'ChannelName', 'OriginEndpointName'],
              members: {
                ChannelGroupName: {
                  location: 'uri',
                  locationName: 'ChannelGroupName'
                },
                ChannelName: {
                  location: 'uri',
                  locationName: 'ChannelName'
                },
                OriginEndpointName: {
                  location: 'uri',
                  locationName: 'OriginEndpointName'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['ChannelGroupName', 'ChannelName', 'OriginEndpointName', 'Policy'],
              members: {
                ChannelGroupName: {},
                ChannelName: {},
                OriginEndpointName: {},
                Policy: {}
              }
            }
          },
          ListChannelGroups: {
            http: {
              method: 'GET',
              requestUri: '/channelGroup',
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
                Items: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['ChannelGroupName', 'Arn', 'CreatedAt', 'ModifiedAt'],
                    members: {
                      ChannelGroupName: {},
                      Arn: {},
                      CreatedAt: {
                        type: 'timestamp'
                      },
                      ModifiedAt: {
                        type: 'timestamp'
                      },
                      Description: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListChannels: {
            http: {
              method: 'GET',
              requestUri: '/channelGroup/{ChannelGroupName}/channel',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ChannelGroupName'],
              members: {
                ChannelGroupName: {
                  location: 'uri',
                  locationName: 'ChannelGroupName'
                },
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
                Items: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Arn', 'ChannelName', 'ChannelGroupName', 'CreatedAt', 'ModifiedAt'],
                    members: {
                      Arn: {},
                      ChannelName: {},
                      ChannelGroupName: {},
                      CreatedAt: {
                        type: 'timestamp'
                      },
                      ModifiedAt: {
                        type: 'timestamp'
                      },
                      Description: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListOriginEndpoints: {
            http: {
              method: 'GET',
              requestUri: '/channelGroup/{ChannelGroupName}/channel/{ChannelName}/originEndpoint',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ChannelGroupName', 'ChannelName'],
              members: {
                ChannelGroupName: {
                  location: 'uri',
                  locationName: 'ChannelGroupName'
                },
                ChannelName: {
                  location: 'uri',
                  locationName: 'ChannelName'
                },
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
                Items: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Arn', 'ChannelGroupName', 'ChannelName', 'OriginEndpointName', 'ContainerType'],
                    members: {
                      Arn: {},
                      ChannelGroupName: {},
                      ChannelName: {},
                      OriginEndpointName: {},
                      ContainerType: {},
                      Description: {},
                      CreatedAt: {
                        type: 'timestamp'
                      },
                      ModifiedAt: {
                        type: 'timestamp'
                      },
                      HlsManifests: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          required: ['ManifestName'],
                          members: {
                            ManifestName: {},
                            ChildManifestName: {},
                            Url: {}
                          }
                        }
                      },
                      LowLatencyHlsManifests: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          required: ['ManifestName'],
                          members: {
                            ManifestName: {},
                            ChildManifestName: {},
                            Url: {}
                          }
                        }
                      },
                      DashManifests: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          required: ['ManifestName'],
                          members: {
                            ManifestName: {},
                            Url: {}
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
              members: {
                Tags: {
                  shape: 'S5',
                  locationName: 'tags'
                }
              }
            }
          },
          PutChannelPolicy: {
            http: {
              method: 'PUT',
              requestUri: '/channelGroup/{ChannelGroupName}/channel/{ChannelName}/policy',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ChannelGroupName', 'ChannelName', 'Policy'],
              members: {
                ChannelGroupName: {
                  location: 'uri',
                  locationName: 'ChannelGroupName'
                },
                ChannelName: {
                  location: 'uri',
                  locationName: 'ChannelName'
                },
                Policy: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          PutOriginEndpointPolicy: {
            http: {
              requestUri: '/channelGroup/{ChannelGroupName}/channel/{ChannelName}/originEndpoint/{OriginEndpointName}/policy',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ChannelGroupName', 'ChannelName', 'OriginEndpointName', 'Policy'],
              members: {
                ChannelGroupName: {
                  location: 'uri',
                  locationName: 'ChannelGroupName'
                },
                ChannelName: {
                  location: 'uri',
                  locationName: 'ChannelName'
                },
                OriginEndpointName: {
                  location: 'uri',
                  locationName: 'OriginEndpointName'
                },
                Policy: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
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
                  shape: 'S5',
                  locationName: 'tags'
                }
              }
            }
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
            idempotent: true
          },
          UpdateChannel: {
            http: {
              method: 'PUT',
              requestUri: '/channelGroup/{ChannelGroupName}/channel/{ChannelName}/',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ChannelGroupName', 'ChannelName'],
              members: {
                ChannelGroupName: {
                  location: 'uri',
                  locationName: 'ChannelGroupName'
                },
                ChannelName: {
                  location: 'uri',
                  locationName: 'ChannelName'
                },
                ETag: {
                  location: 'header',
                  locationName: 'x-amzn-update-if-match'
                },
                Description: {}
              }
            },
            output: {
              type: 'structure',
              required: ['Arn', 'ChannelName', 'ChannelGroupName', 'CreatedAt', 'ModifiedAt'],
              members: {
                Arn: {},
                ChannelName: {},
                ChannelGroupName: {},
                CreatedAt: {
                  type: 'timestamp'
                },
                ModifiedAt: {
                  type: 'timestamp'
                },
                Description: {},
                IngestEndpoints: {
                  shape: 'Sb'
                },
                ETag: {},
                Tags: {
                  shape: 'S5',
                  locationName: 'tags'
                }
              }
            },
            idempotent: true
          },
          UpdateChannelGroup: {
            http: {
              method: 'PUT',
              requestUri: '/channelGroup/{ChannelGroupName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ChannelGroupName'],
              members: {
                ChannelGroupName: {
                  location: 'uri',
                  locationName: 'ChannelGroupName'
                },
                ETag: {
                  location: 'header',
                  locationName: 'x-amzn-update-if-match'
                },
                Description: {}
              }
            },
            output: {
              type: 'structure',
              required: ['ChannelGroupName', 'Arn', 'EgressDomain', 'CreatedAt', 'ModifiedAt'],
              members: {
                ChannelGroupName: {},
                Arn: {},
                EgressDomain: {},
                CreatedAt: {
                  type: 'timestamp'
                },
                ModifiedAt: {
                  type: 'timestamp'
                },
                Description: {},
                ETag: {},
                Tags: {
                  shape: 'S5',
                  locationName: 'tags'
                }
              }
            },
            idempotent: true
          },
          UpdateOriginEndpoint: {
            http: {
              method: 'PUT',
              requestUri: '/channelGroup/{ChannelGroupName}/channel/{ChannelName}/originEndpoint/{OriginEndpointName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ChannelGroupName', 'ChannelName', 'OriginEndpointName', 'ContainerType'],
              members: {
                ChannelGroupName: {
                  location: 'uri',
                  locationName: 'ChannelGroupName'
                },
                ChannelName: {
                  location: 'uri',
                  locationName: 'ChannelName'
                },
                OriginEndpointName: {
                  location: 'uri',
                  locationName: 'OriginEndpointName'
                },
                ContainerType: {},
                Segment: {
                  shape: 'Si'
                },
                Description: {},
                StartoverWindowSeconds: {
                  type: 'integer'
                },
                HlsManifests: {
                  shape: 'S15'
                },
                LowLatencyHlsManifests: {
                  shape: 'S1f'
                },
                DashManifests: {
                  shape: 'S1j'
                },
                ETag: {
                  location: 'header',
                  locationName: 'x-amzn-update-if-match'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Arn', 'ChannelGroupName', 'ChannelName', 'OriginEndpointName', 'ContainerType', 'Segment', 'CreatedAt', 'ModifiedAt'],
              members: {
                Arn: {},
                ChannelGroupName: {},
                ChannelName: {},
                OriginEndpointName: {},
                ContainerType: {},
                Segment: {
                  shape: 'Si'
                },
                CreatedAt: {
                  type: 'timestamp'
                },
                ModifiedAt: {
                  type: 'timestamp'
                },
                Description: {},
                StartoverWindowSeconds: {
                  type: 'integer'
                },
                HlsManifests: {
                  shape: 'S20'
                },
                LowLatencyHlsManifests: {
                  shape: 'S22'
                },
                ETag: {},
                Tags: {
                  shape: 'S5',
                  locationName: 'tags'
                },
                DashManifests: {
                  shape: 'S24'
                }
              }
            },
            idempotent: true
          }
        },
        shapes: {
          S5: {
            type: 'map',
            key: {},
            value: {}
          },
          Sb: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Id: {},
                Url: {}
              }
            }
          },
          Si: {
            type: 'structure',
            members: {
              SegmentDurationSeconds: {
                type: 'integer'
              },
              SegmentName: {},
              TsUseAudioRenditionGroup: {
                type: 'boolean'
              },
              IncludeIframeOnlyStreams: {
                type: 'boolean'
              },
              TsIncludeDvbSubtitles: {
                type: 'boolean'
              },
              Scte: {
                type: 'structure',
                members: {
                  ScteFilter: {
                    type: 'list',
                    member: {}
                  }
                }
              },
              Encryption: {
                type: 'structure',
                required: ['EncryptionMethod', 'SpekeKeyProvider'],
                members: {
                  ConstantInitializationVector: {},
                  EncryptionMethod: {
                    type: 'structure',
                    members: {
                      TsEncryptionMethod: {},
                      CmafEncryptionMethod: {}
                    }
                  },
                  KeyRotationIntervalSeconds: {
                    type: 'integer'
                  },
                  SpekeKeyProvider: {
                    type: 'structure',
                    required: ['EncryptionContractConfiguration', 'ResourceId', 'DrmSystems', 'RoleArn', 'Url'],
                    members: {
                      EncryptionContractConfiguration: {
                        type: 'structure',
                        required: ['PresetSpeke20Audio', 'PresetSpeke20Video'],
                        members: {
                          PresetSpeke20Audio: {},
                          PresetSpeke20Video: {}
                        }
                      },
                      ResourceId: {},
                      DrmSystems: {
                        type: 'list',
                        member: {}
                      },
                      RoleArn: {},
                      Url: {}
                    }
                  }
                }
              }
            }
          },
          S15: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['ManifestName'],
              members: {
                ManifestName: {},
                ChildManifestName: {},
                ScteHls: {
                  shape: 'S18'
                },
                ManifestWindowSeconds: {
                  type: 'integer'
                },
                ProgramDateTimeIntervalSeconds: {
                  type: 'integer'
                },
                FilterConfiguration: {
                  shape: 'S1c'
                }
              }
            }
          },
          S18: {
            type: 'structure',
            members: {
              AdMarkerHls: {}
            }
          },
          S1c: {
            type: 'structure',
            members: {
              ManifestFilter: {},
              Start: {
                type: 'timestamp'
              },
              End: {
                type: 'timestamp'
              },
              TimeDelaySeconds: {
                type: 'integer'
              }
            }
          },
          S1f: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['ManifestName'],
              members: {
                ManifestName: {},
                ChildManifestName: {},
                ScteHls: {
                  shape: 'S18'
                },
                ManifestWindowSeconds: {
                  type: 'integer'
                },
                ProgramDateTimeIntervalSeconds: {
                  type: 'integer'
                },
                FilterConfiguration: {
                  shape: 'S1c'
                }
              }
            }
          },
          S1j: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['ManifestName'],
              members: {
                ManifestName: {},
                ManifestWindowSeconds: {
                  type: 'integer'
                },
                FilterConfiguration: {
                  shape: 'S1c'
                },
                MinUpdatePeriodSeconds: {
                  type: 'integer'
                },
                MinBufferTimeSeconds: {
                  type: 'integer'
                },
                SuggestedPresentationDelaySeconds: {
                  type: 'integer'
                },
                SegmentTemplateFormat: {},
                PeriodTriggers: {
                  shape: 'S1q'
                },
                ScteDash: {
                  shape: 'S1s'
                },
                DrmSignaling: {},
                UtcTiming: {
                  shape: 'S1v'
                }
              }
            }
          },
          S1q: {
            type: 'list',
            member: {}
          },
          S1s: {
            type: 'structure',
            members: {
              AdMarkerDash: {}
            }
          },
          S1v: {
            type: 'structure',
            members: {
              TimingMode: {},
              TimingSource: {}
            }
          },
          S20: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['ManifestName', 'Url'],
              members: {
                ManifestName: {},
                Url: {},
                ChildManifestName: {},
                ManifestWindowSeconds: {
                  type: 'integer'
                },
                ProgramDateTimeIntervalSeconds: {
                  type: 'integer'
                },
                ScteHls: {
                  shape: 'S18'
                },
                FilterConfiguration: {
                  shape: 'S1c'
                }
              }
            }
          },
          S22: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['ManifestName', 'Url'],
              members: {
                ManifestName: {},
                Url: {},
                ChildManifestName: {},
                ManifestWindowSeconds: {
                  type: 'integer'
                },
                ProgramDateTimeIntervalSeconds: {
                  type: 'integer'
                },
                ScteHls: {
                  shape: 'S18'
                },
                FilterConfiguration: {
                  shape: 'S1c'
                }
              }
            }
          },
          S24: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['ManifestName', 'Url'],
              members: {
                ManifestName: {},
                Url: {},
                ManifestWindowSeconds: {
                  type: 'integer'
                },
                FilterConfiguration: {
                  shape: 'S1c'
                },
                MinUpdatePeriodSeconds: {
                  type: 'integer'
                },
                MinBufferTimeSeconds: {
                  type: 'integer'
                },
                SuggestedPresentationDelaySeconds: {
                  type: 'integer'
                },
                SegmentTemplateFormat: {},
                PeriodTriggers: {
                  shape: 'S1q'
                },
                ScteDash: {
                  shape: 'S1s'
                },
                DrmSignaling: {},
                UtcTiming: {
                  shape: 'S1v'
                }
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=40f8b598e9e0d679b8108df5efb5f69d89b96386.js.map