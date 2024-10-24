System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2017-09-01',
          endpointPrefix: 'data.mediastore',
          protocol: 'rest-json',
          serviceAbbreviation: 'MediaStore Data',
          serviceFullName: 'AWS Elemental MediaStore Data Plane',
          serviceId: 'MediaStore Data',
          signatureVersion: 'v4',
          signingName: 'mediastore',
          uid: 'mediastore-data-2017-09-01'
        },
        operations: {
          DeleteObject: {
            http: {
              method: 'DELETE',
              requestUri: '/{Path+}'
            },
            input: {
              type: 'structure',
              required: ['Path'],
              members: {
                Path: {
                  location: 'uri',
                  locationName: 'Path'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DescribeObject: {
            http: {
              method: 'HEAD',
              requestUri: '/{Path+}'
            },
            input: {
              type: 'structure',
              required: ['Path'],
              members: {
                Path: {
                  location: 'uri',
                  locationName: 'Path'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ETag: {
                  location: 'header',
                  locationName: 'ETag'
                },
                ContentType: {
                  location: 'header',
                  locationName: 'Content-Type'
                },
                ContentLength: {
                  location: 'header',
                  locationName: 'Content-Length',
                  type: 'long'
                },
                CacheControl: {
                  location: 'header',
                  locationName: 'Cache-Control'
                },
                LastModified: {
                  location: 'header',
                  locationName: 'Last-Modified',
                  type: 'timestamp'
                }
              }
            }
          },
          GetObject: {
            http: {
              method: 'GET',
              requestUri: '/{Path+}'
            },
            input: {
              type: 'structure',
              required: ['Path'],
              members: {
                Path: {
                  location: 'uri',
                  locationName: 'Path'
                },
                Range: {
                  location: 'header',
                  locationName: 'Range'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['StatusCode'],
              members: {
                Body: {
                  shape: 'Se'
                },
                CacheControl: {
                  location: 'header',
                  locationName: 'Cache-Control'
                },
                ContentRange: {
                  location: 'header',
                  locationName: 'Content-Range'
                },
                ContentLength: {
                  location: 'header',
                  locationName: 'Content-Length',
                  type: 'long'
                },
                ContentType: {
                  location: 'header',
                  locationName: 'Content-Type'
                },
                ETag: {
                  location: 'header',
                  locationName: 'ETag'
                },
                LastModified: {
                  location: 'header',
                  locationName: 'Last-Modified',
                  type: 'timestamp'
                },
                StatusCode: {
                  location: 'statusCode',
                  type: 'integer'
                }
              },
              payload: 'Body'
            }
          },
          ListItems: {
            http: {
              method: 'GET'
            },
            input: {
              type: 'structure',
              members: {
                Path: {
                  location: 'querystring',
                  locationName: 'Path'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'MaxResults',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'NextToken'
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
                    members: {
                      Name: {},
                      Type: {},
                      ETag: {},
                      LastModified: {
                        type: 'timestamp'
                      },
                      ContentType: {},
                      ContentLength: {
                        type: 'long'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          PutObject: {
            http: {
              method: 'PUT',
              requestUri: '/{Path+}'
            },
            input: {
              type: 'structure',
              required: ['Body', 'Path'],
              members: {
                Body: {
                  shape: 'Se'
                },
                Path: {
                  location: 'uri',
                  locationName: 'Path'
                },
                ContentType: {
                  location: 'header',
                  locationName: 'Content-Type'
                },
                CacheControl: {
                  location: 'header',
                  locationName: 'Cache-Control'
                },
                StorageClass: {
                  location: 'header',
                  locationName: 'x-amz-storage-class'
                },
                UploadAvailability: {
                  location: 'header',
                  locationName: 'x-amz-upload-availability'
                }
              },
              payload: 'Body'
            },
            output: {
              type: 'structure',
              members: {
                ContentSHA256: {},
                ETag: {},
                StorageClass: {}
              }
            },
            authtype: 'v4-unsigned-body'
          }
        },
        shapes: {
          Se: {
            type: 'blob',
            streaming: true
          }
        }
      });
    }
  };
});
//# sourceMappingURL=510f994943d5cc43a78076d7495cb8e1224712be.js.map