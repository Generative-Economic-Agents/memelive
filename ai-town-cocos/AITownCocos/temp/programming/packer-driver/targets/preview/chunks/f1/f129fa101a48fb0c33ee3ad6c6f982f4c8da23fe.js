System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2022-06-10',
          endpointPrefix: 'oam',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          protocols: ['rest-json'],
          serviceFullName: 'CloudWatch Observability Access Manager',
          serviceId: 'OAM',
          signatureVersion: 'v4',
          signingName: 'oam',
          uid: 'oam-2022-06-10'
        },
        operations: {
          CreateLink: {
            http: {
              requestUri: '/CreateLink',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['LabelTemplate', 'ResourceTypes', 'SinkIdentifier'],
              members: {
                LabelTemplate: {},
                LinkConfiguration: {
                  shape: 'S3'
                },
                ResourceTypes: {
                  shape: 'S8'
                },
                SinkIdentifier: {},
                Tags: {
                  shape: 'Sb'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                Id: {},
                Label: {},
                LabelTemplate: {},
                LinkConfiguration: {
                  shape: 'S3'
                },
                ResourceTypes: {
                  shape: 'Sg'
                },
                SinkArn: {},
                Tags: {
                  shape: 'Sh'
                }
              }
            }
          },
          CreateSink: {
            http: {
              requestUri: '/CreateSink',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {},
                Tags: {
                  shape: 'Sb'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                Id: {},
                Name: {},
                Tags: {
                  shape: 'Sh'
                }
              }
            }
          },
          DeleteLink: {
            http: {
              requestUri: '/DeleteLink',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['Identifier'],
              members: {
                Identifier: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteSink: {
            http: {
              requestUri: '/DeleteSink',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['Identifier'],
              members: {
                Identifier: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          GetLink: {
            http: {
              requestUri: '/GetLink',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['Identifier'],
              members: {
                Identifier: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                Id: {},
                Label: {},
                LabelTemplate: {},
                LinkConfiguration: {
                  shape: 'S3'
                },
                ResourceTypes: {
                  shape: 'Sg'
                },
                SinkArn: {},
                Tags: {
                  shape: 'Sh'
                }
              }
            }
          },
          GetSink: {
            http: {
              requestUri: '/GetSink',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['Identifier'],
              members: {
                Identifier: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                Id: {},
                Name: {},
                Tags: {
                  shape: 'Sh'
                }
              }
            }
          },
          GetSinkPolicy: {
            http: {
              requestUri: '/GetSinkPolicy',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['SinkIdentifier'],
              members: {
                SinkIdentifier: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Policy: {},
                SinkArn: {},
                SinkId: {}
              }
            }
          },
          ListAttachedLinks: {
            http: {
              requestUri: '/ListAttachedLinks',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['SinkIdentifier'],
              members: {
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {},
                SinkIdentifier: {}
              }
            },
            output: {
              type: 'structure',
              required: ['Items'],
              members: {
                Items: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Label: {},
                      LinkArn: {},
                      ResourceTypes: {
                        shape: 'Sg'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListLinks: {
            http: {
              requestUri: '/ListLinks',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              required: ['Items'],
              members: {
                Items: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Arn: {},
                      Id: {},
                      Label: {},
                      ResourceTypes: {
                        shape: 'Sg'
                      },
                      SinkArn: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListSinks: {
            http: {
              requestUri: '/ListSinks',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                MaxResults: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              required: ['Items'],
              members: {
                Items: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Arn: {},
                      Id: {},
                      Name: {}
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
                  shape: 'Sh'
                }
              }
            }
          },
          PutSinkPolicy: {
            http: {
              requestUri: '/PutSinkPolicy',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['Policy', 'SinkIdentifier'],
              members: {
                Policy: {},
                SinkIdentifier: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Policy: {},
                SinkArn: {},
                SinkId: {}
              }
            }
          },
          TagResource: {
            http: {
              method: 'PUT',
              requestUri: '/tags/{ResourceArn}',
              responseCode: 200
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
                  shape: 'Sb'
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
              requestUri: '/tags/{ResourceArn}',
              responseCode: 200
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
            }
          },
          UpdateLink: {
            http: {
              requestUri: '/UpdateLink',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['Identifier', 'ResourceTypes'],
              members: {
                Identifier: {},
                LinkConfiguration: {
                  shape: 'S3'
                },
                ResourceTypes: {
                  shape: 'S8'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Arn: {},
                Id: {},
                Label: {},
                LabelTemplate: {},
                LinkConfiguration: {
                  shape: 'S3'
                },
                ResourceTypes: {
                  shape: 'Sg'
                },
                SinkArn: {},
                Tags: {
                  shape: 'Sh'
                }
              }
            }
          }
        },
        shapes: {
          S3: {
            type: 'structure',
            members: {
              LogGroupConfiguration: {
                type: 'structure',
                required: ['Filter'],
                members: {
                  Filter: {}
                }
              },
              MetricConfiguration: {
                type: 'structure',
                required: ['Filter'],
                members: {
                  Filter: {}
                }
              }
            }
          },
          S8: {
            type: 'list',
            member: {}
          },
          Sb: {
            type: 'map',
            key: {},
            value: {}
          },
          Sg: {
            type: 'list',
            member: {}
          },
          Sh: {
            type: 'map',
            key: {},
            value: {}
          }
        }
      });
    }
  };
});
//# sourceMappingURL=f129fa101a48fb0c33ee3ad6c6f982f4c8da23fe.js.map