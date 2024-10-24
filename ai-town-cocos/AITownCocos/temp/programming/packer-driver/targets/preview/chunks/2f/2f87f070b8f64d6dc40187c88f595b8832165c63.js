System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2017-07-25',
          endpointPrefix: 'api.elastic-inference',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceAbbreviation: 'Amazon Elastic Inference',
          serviceFullName: 'Amazon Elastic  Inference',
          serviceId: 'Elastic Inference',
          signatureVersion: 'v4',
          signingName: 'elastic-inference',
          uid: 'elastic-inference-2017-07-25'
        },
        operations: {
          DescribeAcceleratorOfferings: {
            http: {
              requestUri: '/describe-accelerator-offerings'
            },
            input: {
              type: 'structure',
              required: ['locationType'],
              members: {
                locationType: {},
                acceleratorTypes: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                acceleratorTypeOfferings: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      acceleratorType: {},
                      locationType: {},
                      location: {}
                    }
                  }
                }
              }
            }
          },
          DescribeAcceleratorTypes: {
            http: {
              method: 'GET',
              requestUri: '/describe-accelerator-types'
            },
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {
                acceleratorTypes: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      acceleratorTypeName: {},
                      memoryInfo: {
                        type: 'structure',
                        members: {
                          sizeInMiB: {
                            type: 'integer'
                          }
                        }
                      },
                      throughputInfo: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            key: {},
                            value: {
                              type: 'integer'
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          DescribeAccelerators: {
            http: {
              requestUri: '/describe-accelerators'
            },
            input: {
              type: 'structure',
              members: {
                acceleratorIds: {
                  type: 'list',
                  member: {}
                },
                filters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      name: {},
                      values: {
                        type: 'list',
                        member: {}
                      }
                    }
                  }
                },
                maxResults: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                acceleratorSet: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      acceleratorHealth: {
                        type: 'structure',
                        members: {
                          status: {}
                        }
                      },
                      acceleratorType: {},
                      acceleratorId: {},
                      availabilityZone: {},
                      attachedResource: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
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
                  shape: 'S13'
                }
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
                  shape: 'S13'
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
          }
        },
        shapes: {
          S13: {
            type: 'map',
            key: {},
            value: {}
          }
        }
      });
    }
  };
});
//# sourceMappingURL=2f87f070b8f64d6dc40187c88f595b8832165c63.js.map