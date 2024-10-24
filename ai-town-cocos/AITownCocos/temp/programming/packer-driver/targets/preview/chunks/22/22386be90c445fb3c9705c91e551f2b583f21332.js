System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        metadata: {
          apiVersion: '2017-10-12',
          endpointPrefix: 'mediapackage',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceAbbreviation: 'MediaPackage',
          serviceFullName: 'AWS Elemental MediaPackage',
          serviceId: 'MediaPackage',
          signatureVersion: 'v4',
          signingName: 'mediapackage',
          uid: 'mediapackage-2017-10-12'
        },
        operations: {
          ConfigureLogs: {
            http: {
              method: 'PUT',
              requestUri: '/channels/{id}/configure_logs',
              responseCode: 200
            },
            input: {
              members: {
                EgressAccessLogs: {
                  locationName: 'egressAccessLogs',
                  shape: 'S2'
                },
                Id: {
                  location: 'uri',
                  locationName: 'id'
                },
                IngressAccessLogs: {
                  locationName: 'ingressAccessLogs',
                  shape: 'S4'
                }
              },
              required: ['Id'],
              type: 'structure'
            },
            output: {
              members: {
                Arn: {
                  locationName: 'arn'
                },
                CreatedAt: {
                  locationName: 'createdAt'
                },
                Description: {
                  locationName: 'description'
                },
                EgressAccessLogs: {
                  locationName: 'egressAccessLogs',
                  shape: 'S2'
                },
                HlsIngest: {
                  locationName: 'hlsIngest',
                  shape: 'S6'
                },
                Id: {
                  locationName: 'id'
                },
                IngressAccessLogs: {
                  locationName: 'ingressAccessLogs',
                  shape: 'S4'
                },
                Tags: {
                  locationName: 'tags',
                  shape: 'Sa'
                }
              },
              type: 'structure'
            }
          },
          CreateChannel: {
            http: {
              requestUri: '/channels',
              responseCode: 200
            },
            input: {
              members: {
                Description: {
                  locationName: 'description'
                },
                Id: {
                  locationName: 'id'
                },
                Tags: {
                  locationName: 'tags',
                  shape: 'Sa'
                }
              },
              required: ['Id'],
              type: 'structure'
            },
            output: {
              members: {
                Arn: {
                  locationName: 'arn'
                },
                CreatedAt: {
                  locationName: 'createdAt'
                },
                Description: {
                  locationName: 'description'
                },
                EgressAccessLogs: {
                  locationName: 'egressAccessLogs',
                  shape: 'S2'
                },
                HlsIngest: {
                  locationName: 'hlsIngest',
                  shape: 'S6'
                },
                Id: {
                  locationName: 'id'
                },
                IngressAccessLogs: {
                  locationName: 'ingressAccessLogs',
                  shape: 'S4'
                },
                Tags: {
                  locationName: 'tags',
                  shape: 'Sa'
                }
              },
              type: 'structure'
            }
          },
          CreateHarvestJob: {
            http: {
              requestUri: '/harvest_jobs',
              responseCode: 200
            },
            input: {
              members: {
                EndTime: {
                  locationName: 'endTime'
                },
                Id: {
                  locationName: 'id'
                },
                OriginEndpointId: {
                  locationName: 'originEndpointId'
                },
                S3Destination: {
                  locationName: 's3Destination',
                  shape: 'Se'
                },
                StartTime: {
                  locationName: 'startTime'
                }
              },
              required: ['S3Destination', 'EndTime', 'OriginEndpointId', 'StartTime', 'Id'],
              type: 'structure'
            },
            output: {
              members: {
                Arn: {
                  locationName: 'arn'
                },
                ChannelId: {
                  locationName: 'channelId'
                },
                CreatedAt: {
                  locationName: 'createdAt'
                },
                EndTime: {
                  locationName: 'endTime'
                },
                Id: {
                  locationName: 'id'
                },
                OriginEndpointId: {
                  locationName: 'originEndpointId'
                },
                S3Destination: {
                  locationName: 's3Destination',
                  shape: 'Se'
                },
                StartTime: {
                  locationName: 'startTime'
                },
                Status: {
                  locationName: 'status'
                }
              },
              type: 'structure'
            }
          },
          CreateOriginEndpoint: {
            http: {
              requestUri: '/origin_endpoints',
              responseCode: 200
            },
            input: {
              members: {
                Authorization: {
                  locationName: 'authorization',
                  shape: 'Si'
                },
                ChannelId: {
                  locationName: 'channelId'
                },
                CmafPackage: {
                  locationName: 'cmafPackage',
                  shape: 'Sj'
                },
                DashPackage: {
                  locationName: 'dashPackage',
                  shape: 'S12'
                },
                Description: {
                  locationName: 'description'
                },
                HlsPackage: {
                  locationName: 'hlsPackage',
                  shape: 'S1a'
                },
                Id: {
                  locationName: 'id'
                },
                ManifestName: {
                  locationName: 'manifestName'
                },
                MssPackage: {
                  locationName: 'mssPackage',
                  shape: 'S1d'
                },
                Origination: {
                  locationName: 'origination'
                },
                StartoverWindowSeconds: {
                  locationName: 'startoverWindowSeconds',
                  type: 'integer'
                },
                Tags: {
                  locationName: 'tags',
                  shape: 'Sa'
                },
                TimeDelaySeconds: {
                  locationName: 'timeDelaySeconds',
                  type: 'integer'
                },
                Whitelist: {
                  locationName: 'whitelist',
                  shape: 'Sr'
                }
              },
              required: ['ChannelId', 'Id'],
              type: 'structure'
            },
            output: {
              members: {
                Arn: {
                  locationName: 'arn'
                },
                Authorization: {
                  locationName: 'authorization',
                  shape: 'Si'
                },
                ChannelId: {
                  locationName: 'channelId'
                },
                CmafPackage: {
                  locationName: 'cmafPackage',
                  shape: 'S1h'
                },
                CreatedAt: {
                  locationName: 'createdAt'
                },
                DashPackage: {
                  locationName: 'dashPackage',
                  shape: 'S12'
                },
                Description: {
                  locationName: 'description'
                },
                HlsPackage: {
                  locationName: 'hlsPackage',
                  shape: 'S1a'
                },
                Id: {
                  locationName: 'id'
                },
                ManifestName: {
                  locationName: 'manifestName'
                },
                MssPackage: {
                  locationName: 'mssPackage',
                  shape: 'S1d'
                },
                Origination: {
                  locationName: 'origination'
                },
                StartoverWindowSeconds: {
                  locationName: 'startoverWindowSeconds',
                  type: 'integer'
                },
                Tags: {
                  locationName: 'tags',
                  shape: 'Sa'
                },
                TimeDelaySeconds: {
                  locationName: 'timeDelaySeconds',
                  type: 'integer'
                },
                Url: {
                  locationName: 'url'
                },
                Whitelist: {
                  locationName: 'whitelist',
                  shape: 'Sr'
                }
              },
              type: 'structure'
            }
          },
          DeleteChannel: {
            http: {
              method: 'DELETE',
              requestUri: '/channels/{id}',
              responseCode: 202
            },
            input: {
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'id'
                }
              },
              required: ['Id'],
              type: 'structure'
            },
            output: {
              members: {},
              type: 'structure'
            }
          },
          DeleteOriginEndpoint: {
            http: {
              method: 'DELETE',
              requestUri: '/origin_endpoints/{id}',
              responseCode: 202
            },
            input: {
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'id'
                }
              },
              required: ['Id'],
              type: 'structure'
            },
            output: {
              members: {},
              type: 'structure'
            }
          },
          DescribeChannel: {
            http: {
              method: 'GET',
              requestUri: '/channels/{id}',
              responseCode: 200
            },
            input: {
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'id'
                }
              },
              required: ['Id'],
              type: 'structure'
            },
            output: {
              members: {
                Arn: {
                  locationName: 'arn'
                },
                CreatedAt: {
                  locationName: 'createdAt'
                },
                Description: {
                  locationName: 'description'
                },
                EgressAccessLogs: {
                  locationName: 'egressAccessLogs',
                  shape: 'S2'
                },
                HlsIngest: {
                  locationName: 'hlsIngest',
                  shape: 'S6'
                },
                Id: {
                  locationName: 'id'
                },
                IngressAccessLogs: {
                  locationName: 'ingressAccessLogs',
                  shape: 'S4'
                },
                Tags: {
                  locationName: 'tags',
                  shape: 'Sa'
                }
              },
              type: 'structure'
            }
          },
          DescribeHarvestJob: {
            http: {
              method: 'GET',
              requestUri: '/harvest_jobs/{id}',
              responseCode: 200
            },
            input: {
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'id'
                }
              },
              required: ['Id'],
              type: 'structure'
            },
            output: {
              members: {
                Arn: {
                  locationName: 'arn'
                },
                ChannelId: {
                  locationName: 'channelId'
                },
                CreatedAt: {
                  locationName: 'createdAt'
                },
                EndTime: {
                  locationName: 'endTime'
                },
                Id: {
                  locationName: 'id'
                },
                OriginEndpointId: {
                  locationName: 'originEndpointId'
                },
                S3Destination: {
                  locationName: 's3Destination',
                  shape: 'Se'
                },
                StartTime: {
                  locationName: 'startTime'
                },
                Status: {
                  locationName: 'status'
                }
              },
              type: 'structure'
            }
          },
          DescribeOriginEndpoint: {
            http: {
              method: 'GET',
              requestUri: '/origin_endpoints/{id}',
              responseCode: 200
            },
            input: {
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'id'
                }
              },
              required: ['Id'],
              type: 'structure'
            },
            output: {
              members: {
                Arn: {
                  locationName: 'arn'
                },
                Authorization: {
                  locationName: 'authorization',
                  shape: 'Si'
                },
                ChannelId: {
                  locationName: 'channelId'
                },
                CmafPackage: {
                  locationName: 'cmafPackage',
                  shape: 'S1h'
                },
                CreatedAt: {
                  locationName: 'createdAt'
                },
                DashPackage: {
                  locationName: 'dashPackage',
                  shape: 'S12'
                },
                Description: {
                  locationName: 'description'
                },
                HlsPackage: {
                  locationName: 'hlsPackage',
                  shape: 'S1a'
                },
                Id: {
                  locationName: 'id'
                },
                ManifestName: {
                  locationName: 'manifestName'
                },
                MssPackage: {
                  locationName: 'mssPackage',
                  shape: 'S1d'
                },
                Origination: {
                  locationName: 'origination'
                },
                StartoverWindowSeconds: {
                  locationName: 'startoverWindowSeconds',
                  type: 'integer'
                },
                Tags: {
                  locationName: 'tags',
                  shape: 'Sa'
                },
                TimeDelaySeconds: {
                  locationName: 'timeDelaySeconds',
                  type: 'integer'
                },
                Url: {
                  locationName: 'url'
                },
                Whitelist: {
                  locationName: 'whitelist',
                  shape: 'Sr'
                }
              },
              type: 'structure'
            }
          },
          ListChannels: {
            http: {
              method: 'GET',
              requestUri: '/channels',
              responseCode: 200
            },
            input: {
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
              },
              type: 'structure'
            },
            output: {
              members: {
                Channels: {
                  locationName: 'channels',
                  member: {
                    members: {
                      Arn: {
                        locationName: 'arn'
                      },
                      CreatedAt: {
                        locationName: 'createdAt'
                      },
                      Description: {
                        locationName: 'description'
                      },
                      EgressAccessLogs: {
                        locationName: 'egressAccessLogs',
                        shape: 'S2'
                      },
                      HlsIngest: {
                        locationName: 'hlsIngest',
                        shape: 'S6'
                      },
                      Id: {
                        locationName: 'id'
                      },
                      IngressAccessLogs: {
                        locationName: 'ingressAccessLogs',
                        shape: 'S4'
                      },
                      Tags: {
                        locationName: 'tags',
                        shape: 'Sa'
                      }
                    },
                    type: 'structure'
                  },
                  type: 'list'
                },
                NextToken: {
                  locationName: 'nextToken'
                }
              },
              type: 'structure'
            }
          },
          ListHarvestJobs: {
            http: {
              method: 'GET',
              requestUri: '/harvest_jobs',
              responseCode: 200
            },
            input: {
              members: {
                IncludeChannelId: {
                  location: 'querystring',
                  locationName: 'includeChannelId'
                },
                IncludeStatus: {
                  location: 'querystring',
                  locationName: 'includeStatus'
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
              },
              type: 'structure'
            },
            output: {
              members: {
                HarvestJobs: {
                  locationName: 'harvestJobs',
                  member: {
                    members: {
                      Arn: {
                        locationName: 'arn'
                      },
                      ChannelId: {
                        locationName: 'channelId'
                      },
                      CreatedAt: {
                        locationName: 'createdAt'
                      },
                      EndTime: {
                        locationName: 'endTime'
                      },
                      Id: {
                        locationName: 'id'
                      },
                      OriginEndpointId: {
                        locationName: 'originEndpointId'
                      },
                      S3Destination: {
                        locationName: 's3Destination',
                        shape: 'Se'
                      },
                      StartTime: {
                        locationName: 'startTime'
                      },
                      Status: {
                        locationName: 'status'
                      }
                    },
                    type: 'structure'
                  },
                  type: 'list'
                },
                NextToken: {
                  locationName: 'nextToken'
                }
              },
              type: 'structure'
            }
          },
          ListOriginEndpoints: {
            http: {
              method: 'GET',
              requestUri: '/origin_endpoints',
              responseCode: 200
            },
            input: {
              members: {
                ChannelId: {
                  location: 'querystring',
                  locationName: 'channelId'
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
              },
              type: 'structure'
            },
            output: {
              members: {
                NextToken: {
                  locationName: 'nextToken'
                },
                OriginEndpoints: {
                  locationName: 'originEndpoints',
                  member: {
                    members: {
                      Arn: {
                        locationName: 'arn'
                      },
                      Authorization: {
                        locationName: 'authorization',
                        shape: 'Si'
                      },
                      ChannelId: {
                        locationName: 'channelId'
                      },
                      CmafPackage: {
                        locationName: 'cmafPackage',
                        shape: 'S1h'
                      },
                      CreatedAt: {
                        locationName: 'createdAt'
                      },
                      DashPackage: {
                        locationName: 'dashPackage',
                        shape: 'S12'
                      },
                      Description: {
                        locationName: 'description'
                      },
                      HlsPackage: {
                        locationName: 'hlsPackage',
                        shape: 'S1a'
                      },
                      Id: {
                        locationName: 'id'
                      },
                      ManifestName: {
                        locationName: 'manifestName'
                      },
                      MssPackage: {
                        locationName: 'mssPackage',
                        shape: 'S1d'
                      },
                      Origination: {
                        locationName: 'origination'
                      },
                      StartoverWindowSeconds: {
                        locationName: 'startoverWindowSeconds',
                        type: 'integer'
                      },
                      Tags: {
                        locationName: 'tags',
                        shape: 'Sa'
                      },
                      TimeDelaySeconds: {
                        locationName: 'timeDelaySeconds',
                        type: 'integer'
                      },
                      Url: {
                        locationName: 'url'
                      },
                      Whitelist: {
                        locationName: 'whitelist',
                        shape: 'Sr'
                      }
                    },
                    type: 'structure'
                  },
                  type: 'list'
                }
              },
              type: 'structure'
            }
          },
          ListTagsForResource: {
            http: {
              method: 'GET',
              requestUri: '/tags/{resource-arn}',
              responseCode: 200
            },
            input: {
              members: {
                ResourceArn: {
                  location: 'uri',
                  locationName: 'resource-arn'
                }
              },
              required: ['ResourceArn'],
              type: 'structure'
            },
            output: {
              members: {
                Tags: {
                  locationName: 'tags',
                  shape: 'S29'
                }
              },
              type: 'structure'
            }
          },
          RotateChannelCredentials: {
            deprecated: true,
            deprecatedMessage: 'This API is deprecated. Please use RotateIngestEndpointCredentials instead',
            http: {
              method: 'PUT',
              requestUri: '/channels/{id}/credentials',
              responseCode: 200
            },
            input: {
              deprecated: true,
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'id'
                }
              },
              required: ['Id'],
              type: 'structure'
            },
            output: {
              deprecated: true,
              members: {
                Arn: {
                  locationName: 'arn'
                },
                CreatedAt: {
                  locationName: 'createdAt'
                },
                Description: {
                  locationName: 'description'
                },
                EgressAccessLogs: {
                  locationName: 'egressAccessLogs',
                  shape: 'S2'
                },
                HlsIngest: {
                  locationName: 'hlsIngest',
                  shape: 'S6'
                },
                Id: {
                  locationName: 'id'
                },
                IngressAccessLogs: {
                  locationName: 'ingressAccessLogs',
                  shape: 'S4'
                },
                Tags: {
                  locationName: 'tags',
                  shape: 'Sa'
                }
              },
              type: 'structure'
            }
          },
          RotateIngestEndpointCredentials: {
            http: {
              method: 'PUT',
              requestUri: '/channels/{id}/ingest_endpoints/{ingest_endpoint_id}/credentials',
              responseCode: 200
            },
            input: {
              members: {
                Id: {
                  location: 'uri',
                  locationName: 'id'
                },
                IngestEndpointId: {
                  location: 'uri',
                  locationName: 'ingest_endpoint_id'
                }
              },
              required: ['IngestEndpointId', 'Id'],
              type: 'structure'
            },
            output: {
              members: {
                Arn: {
                  locationName: 'arn'
                },
                CreatedAt: {
                  locationName: 'createdAt'
                },
                Description: {
                  locationName: 'description'
                },
                EgressAccessLogs: {
                  locationName: 'egressAccessLogs',
                  shape: 'S2'
                },
                HlsIngest: {
                  locationName: 'hlsIngest',
                  shape: 'S6'
                },
                Id: {
                  locationName: 'id'
                },
                IngressAccessLogs: {
                  locationName: 'ingressAccessLogs',
                  shape: 'S4'
                },
                Tags: {
                  locationName: 'tags',
                  shape: 'Sa'
                }
              },
              type: 'structure'
            }
          },
          TagResource: {
            http: {
              requestUri: '/tags/{resource-arn}',
              responseCode: 204
            },
            input: {
              members: {
                ResourceArn: {
                  location: 'uri',
                  locationName: 'resource-arn'
                },
                Tags: {
                  locationName: 'tags',
                  shape: 'S29'
                }
              },
              required: ['ResourceArn', 'Tags'],
              type: 'structure'
            }
          },
          UntagResource: {
            http: {
              method: 'DELETE',
              requestUri: '/tags/{resource-arn}',
              responseCode: 204
            },
            input: {
              members: {
                ResourceArn: {
                  location: 'uri',
                  locationName: 'resource-arn'
                },
                TagKeys: {
                  location: 'querystring',
                  locationName: 'tagKeys',
                  shape: 'Sr'
                }
              },
              required: ['TagKeys', 'ResourceArn'],
              type: 'structure'
            }
          },
          UpdateChannel: {
            http: {
              method: 'PUT',
              requestUri: '/channels/{id}',
              responseCode: 200
            },
            input: {
              members: {
                Description: {
                  locationName: 'description'
                },
                Id: {
                  location: 'uri',
                  locationName: 'id'
                }
              },
              required: ['Id'],
              type: 'structure'
            },
            output: {
              members: {
                Arn: {
                  locationName: 'arn'
                },
                CreatedAt: {
                  locationName: 'createdAt'
                },
                Description: {
                  locationName: 'description'
                },
                EgressAccessLogs: {
                  locationName: 'egressAccessLogs',
                  shape: 'S2'
                },
                HlsIngest: {
                  locationName: 'hlsIngest',
                  shape: 'S6'
                },
                Id: {
                  locationName: 'id'
                },
                IngressAccessLogs: {
                  locationName: 'ingressAccessLogs',
                  shape: 'S4'
                },
                Tags: {
                  locationName: 'tags',
                  shape: 'Sa'
                }
              },
              type: 'structure'
            }
          },
          UpdateOriginEndpoint: {
            http: {
              method: 'PUT',
              requestUri: '/origin_endpoints/{id}',
              responseCode: 200
            },
            input: {
              members: {
                Authorization: {
                  locationName: 'authorization',
                  shape: 'Si'
                },
                CmafPackage: {
                  locationName: 'cmafPackage',
                  shape: 'Sj'
                },
                DashPackage: {
                  locationName: 'dashPackage',
                  shape: 'S12'
                },
                Description: {
                  locationName: 'description'
                },
                HlsPackage: {
                  locationName: 'hlsPackage',
                  shape: 'S1a'
                },
                Id: {
                  location: 'uri',
                  locationName: 'id'
                },
                ManifestName: {
                  locationName: 'manifestName'
                },
                MssPackage: {
                  locationName: 'mssPackage',
                  shape: 'S1d'
                },
                Origination: {
                  locationName: 'origination'
                },
                StartoverWindowSeconds: {
                  locationName: 'startoverWindowSeconds',
                  type: 'integer'
                },
                TimeDelaySeconds: {
                  locationName: 'timeDelaySeconds',
                  type: 'integer'
                },
                Whitelist: {
                  locationName: 'whitelist',
                  shape: 'Sr'
                }
              },
              required: ['Id'],
              type: 'structure'
            },
            output: {
              members: {
                Arn: {
                  locationName: 'arn'
                },
                Authorization: {
                  locationName: 'authorization',
                  shape: 'Si'
                },
                ChannelId: {
                  locationName: 'channelId'
                },
                CmafPackage: {
                  locationName: 'cmafPackage',
                  shape: 'S1h'
                },
                CreatedAt: {
                  locationName: 'createdAt'
                },
                DashPackage: {
                  locationName: 'dashPackage',
                  shape: 'S12'
                },
                Description: {
                  locationName: 'description'
                },
                HlsPackage: {
                  locationName: 'hlsPackage',
                  shape: 'S1a'
                },
                Id: {
                  locationName: 'id'
                },
                ManifestName: {
                  locationName: 'manifestName'
                },
                MssPackage: {
                  locationName: 'mssPackage',
                  shape: 'S1d'
                },
                Origination: {
                  locationName: 'origination'
                },
                StartoverWindowSeconds: {
                  locationName: 'startoverWindowSeconds',
                  type: 'integer'
                },
                Tags: {
                  locationName: 'tags',
                  shape: 'Sa'
                },
                TimeDelaySeconds: {
                  locationName: 'timeDelaySeconds',
                  type: 'integer'
                },
                Url: {
                  locationName: 'url'
                },
                Whitelist: {
                  locationName: 'whitelist',
                  shape: 'Sr'
                }
              },
              type: 'structure'
            }
          }
        },
        shapes: {
          S2: {
            members: {
              LogGroupName: {
                locationName: 'logGroupName'
              }
            },
            type: 'structure'
          },
          S4: {
            members: {
              LogGroupName: {
                locationName: 'logGroupName'
              }
            },
            type: 'structure'
          },
          S6: {
            members: {
              IngestEndpoints: {
                locationName: 'ingestEndpoints',
                member: {
                  members: {
                    Id: {
                      locationName: 'id'
                    },
                    Password: {
                      locationName: 'password',
                      shape: 'S9'
                    },
                    Url: {
                      locationName: 'url'
                    },
                    Username: {
                      locationName: 'username',
                      shape: 'S9'
                    }
                  },
                  type: 'structure'
                },
                type: 'list'
              }
            },
            type: 'structure'
          },
          S9: {
            sensitive: true,
            type: 'string'
          },
          Sa: {
            key: {},
            type: 'map',
            value: {}
          },
          Se: {
            members: {
              BucketName: {
                locationName: 'bucketName'
              },
              ManifestKey: {
                locationName: 'manifestKey'
              },
              RoleArn: {
                locationName: 'roleArn'
              }
            },
            required: ['ManifestKey', 'BucketName', 'RoleArn'],
            type: 'structure'
          },
          Si: {
            members: {
              CdnIdentifierSecret: {
                locationName: 'cdnIdentifierSecret'
              },
              SecretsRoleArn: {
                locationName: 'secretsRoleArn'
              }
            },
            required: ['SecretsRoleArn', 'CdnIdentifierSecret'],
            type: 'structure'
          },
          Sj: {
            members: {
              Encryption: {
                locationName: 'encryption',
                shape: 'Sk'
              },
              HlsManifests: {
                locationName: 'hlsManifests',
                member: {
                  members: {
                    AdMarkers: {
                      locationName: 'adMarkers'
                    },
                    AdTriggers: {
                      locationName: 'adTriggers',
                      shape: 'Sv'
                    },
                    AdsOnDeliveryRestrictions: {
                      locationName: 'adsOnDeliveryRestrictions'
                    },
                    Id: {
                      locationName: 'id'
                    },
                    IncludeIframeOnlyStream: {
                      locationName: 'includeIframeOnlyStream',
                      type: 'boolean'
                    },
                    ManifestName: {
                      locationName: 'manifestName'
                    },
                    PlaylistType: {
                      locationName: 'playlistType'
                    },
                    PlaylistWindowSeconds: {
                      locationName: 'playlistWindowSeconds',
                      type: 'integer'
                    },
                    ProgramDateTimeIntervalSeconds: {
                      locationName: 'programDateTimeIntervalSeconds',
                      type: 'integer'
                    }
                  },
                  required: ['Id'],
                  type: 'structure'
                },
                type: 'list'
              },
              SegmentDurationSeconds: {
                locationName: 'segmentDurationSeconds',
                type: 'integer'
              },
              SegmentPrefix: {
                locationName: 'segmentPrefix'
              },
              StreamSelection: {
                locationName: 'streamSelection',
                shape: 'S10'
              }
            },
            type: 'structure'
          },
          Sk: {
            members: {
              ConstantInitializationVector: {
                locationName: 'constantInitializationVector'
              },
              EncryptionMethod: {
                locationName: 'encryptionMethod'
              },
              KeyRotationIntervalSeconds: {
                locationName: 'keyRotationIntervalSeconds',
                type: 'integer'
              },
              SpekeKeyProvider: {
                locationName: 'spekeKeyProvider',
                shape: 'Sn'
              }
            },
            required: ['SpekeKeyProvider'],
            type: 'structure'
          },
          Sn: {
            members: {
              CertificateArn: {
                locationName: 'certificateArn'
              },
              EncryptionContractConfiguration: {
                locationName: 'encryptionContractConfiguration',
                members: {
                  PresetSpeke20Audio: {
                    locationName: 'presetSpeke20Audio'
                  },
                  PresetSpeke20Video: {
                    locationName: 'presetSpeke20Video'
                  }
                },
                required: ['PresetSpeke20Audio', 'PresetSpeke20Video'],
                type: 'structure'
              },
              ResourceId: {
                locationName: 'resourceId'
              },
              RoleArn: {
                locationName: 'roleArn'
              },
              SystemIds: {
                locationName: 'systemIds',
                shape: 'Sr'
              },
              Url: {
                locationName: 'url'
              }
            },
            required: ['ResourceId', 'SystemIds', 'Url', 'RoleArn'],
            type: 'structure'
          },
          Sr: {
            member: {},
            type: 'list'
          },
          Sv: {
            member: {},
            type: 'list'
          },
          S10: {
            members: {
              MaxVideoBitsPerSecond: {
                locationName: 'maxVideoBitsPerSecond',
                type: 'integer'
              },
              MinVideoBitsPerSecond: {
                locationName: 'minVideoBitsPerSecond',
                type: 'integer'
              },
              StreamOrder: {
                locationName: 'streamOrder'
              }
            },
            type: 'structure'
          },
          S12: {
            members: {
              AdTriggers: {
                locationName: 'adTriggers',
                shape: 'Sv'
              },
              AdsOnDeliveryRestrictions: {
                locationName: 'adsOnDeliveryRestrictions'
              },
              Encryption: {
                locationName: 'encryption',
                members: {
                  KeyRotationIntervalSeconds: {
                    locationName: 'keyRotationIntervalSeconds',
                    type: 'integer'
                  },
                  SpekeKeyProvider: {
                    locationName: 'spekeKeyProvider',
                    shape: 'Sn'
                  }
                },
                required: ['SpekeKeyProvider'],
                type: 'structure'
              },
              IncludeIframeOnlyStream: {
                locationName: 'includeIframeOnlyStream',
                type: 'boolean'
              },
              ManifestLayout: {
                locationName: 'manifestLayout'
              },
              ManifestWindowSeconds: {
                locationName: 'manifestWindowSeconds',
                type: 'integer'
              },
              MinBufferTimeSeconds: {
                locationName: 'minBufferTimeSeconds',
                type: 'integer'
              },
              MinUpdatePeriodSeconds: {
                locationName: 'minUpdatePeriodSeconds',
                type: 'integer'
              },
              PeriodTriggers: {
                locationName: 'periodTriggers',
                member: {},
                type: 'list'
              },
              Profile: {
                locationName: 'profile'
              },
              SegmentDurationSeconds: {
                locationName: 'segmentDurationSeconds',
                type: 'integer'
              },
              SegmentTemplateFormat: {
                locationName: 'segmentTemplateFormat'
              },
              StreamSelection: {
                locationName: 'streamSelection',
                shape: 'S10'
              },
              SuggestedPresentationDelaySeconds: {
                locationName: 'suggestedPresentationDelaySeconds',
                type: 'integer'
              },
              UtcTiming: {
                locationName: 'utcTiming'
              },
              UtcTimingUri: {
                locationName: 'utcTimingUri'
              }
            },
            type: 'structure'
          },
          S1a: {
            members: {
              AdMarkers: {
                locationName: 'adMarkers'
              },
              AdTriggers: {
                locationName: 'adTriggers',
                shape: 'Sv'
              },
              AdsOnDeliveryRestrictions: {
                locationName: 'adsOnDeliveryRestrictions'
              },
              Encryption: {
                locationName: 'encryption',
                members: {
                  ConstantInitializationVector: {
                    locationName: 'constantInitializationVector'
                  },
                  EncryptionMethod: {
                    locationName: 'encryptionMethod'
                  },
                  KeyRotationIntervalSeconds: {
                    locationName: 'keyRotationIntervalSeconds',
                    type: 'integer'
                  },
                  RepeatExtXKey: {
                    locationName: 'repeatExtXKey',
                    type: 'boolean'
                  },
                  SpekeKeyProvider: {
                    locationName: 'spekeKeyProvider',
                    shape: 'Sn'
                  }
                },
                required: ['SpekeKeyProvider'],
                type: 'structure'
              },
              IncludeDvbSubtitles: {
                locationName: 'includeDvbSubtitles',
                type: 'boolean'
              },
              IncludeIframeOnlyStream: {
                locationName: 'includeIframeOnlyStream',
                type: 'boolean'
              },
              PlaylistType: {
                locationName: 'playlistType'
              },
              PlaylistWindowSeconds: {
                locationName: 'playlistWindowSeconds',
                type: 'integer'
              },
              ProgramDateTimeIntervalSeconds: {
                locationName: 'programDateTimeIntervalSeconds',
                type: 'integer'
              },
              SegmentDurationSeconds: {
                locationName: 'segmentDurationSeconds',
                type: 'integer'
              },
              StreamSelection: {
                locationName: 'streamSelection',
                shape: 'S10'
              },
              UseAudioRenditionGroup: {
                locationName: 'useAudioRenditionGroup',
                type: 'boolean'
              }
            },
            type: 'structure'
          },
          S1d: {
            members: {
              Encryption: {
                locationName: 'encryption',
                members: {
                  SpekeKeyProvider: {
                    locationName: 'spekeKeyProvider',
                    shape: 'Sn'
                  }
                },
                required: ['SpekeKeyProvider'],
                type: 'structure'
              },
              ManifestWindowSeconds: {
                locationName: 'manifestWindowSeconds',
                type: 'integer'
              },
              SegmentDurationSeconds: {
                locationName: 'segmentDurationSeconds',
                type: 'integer'
              },
              StreamSelection: {
                locationName: 'streamSelection',
                shape: 'S10'
              }
            },
            type: 'structure'
          },
          S1h: {
            members: {
              Encryption: {
                locationName: 'encryption',
                shape: 'Sk'
              },
              HlsManifests: {
                locationName: 'hlsManifests',
                member: {
                  members: {
                    AdMarkers: {
                      locationName: 'adMarkers'
                    },
                    Id: {
                      locationName: 'id'
                    },
                    IncludeIframeOnlyStream: {
                      locationName: 'includeIframeOnlyStream',
                      type: 'boolean'
                    },
                    ManifestName: {
                      locationName: 'manifestName'
                    },
                    PlaylistType: {
                      locationName: 'playlistType'
                    },
                    PlaylistWindowSeconds: {
                      locationName: 'playlistWindowSeconds',
                      type: 'integer'
                    },
                    ProgramDateTimeIntervalSeconds: {
                      locationName: 'programDateTimeIntervalSeconds',
                      type: 'integer'
                    },
                    Url: {
                      locationName: 'url'
                    },
                    AdTriggers: {
                      locationName: 'adTriggers',
                      shape: 'Sv'
                    },
                    AdsOnDeliveryRestrictions: {
                      locationName: 'adsOnDeliveryRestrictions'
                    }
                  },
                  required: ['Id'],
                  type: 'structure'
                },
                type: 'list'
              },
              SegmentDurationSeconds: {
                locationName: 'segmentDurationSeconds',
                type: 'integer'
              },
              SegmentPrefix: {
                locationName: 'segmentPrefix'
              },
              StreamSelection: {
                locationName: 'streamSelection',
                shape: 'S10'
              }
            },
            type: 'structure'
          },
          S29: {
            key: {},
            type: 'map',
            value: {}
          }
        }
      });
    }
  };
});
//# sourceMappingURL=22386be90c445fb3c9705c91e551f2b583f21332.js.map