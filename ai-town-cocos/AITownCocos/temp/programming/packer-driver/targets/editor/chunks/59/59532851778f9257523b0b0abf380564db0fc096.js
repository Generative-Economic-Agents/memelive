System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2017-07-01',
          endpointPrefix: 'mobile',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceFullName: 'AWS Mobile',
          serviceId: 'Mobile',
          signatureVersion: 'v4',
          signingName: 'AWSMobileHubService',
          uid: 'mobile-2017-07-01'
        },
        operations: {
          CreateProject: {
            http: {
              requestUri: '/projects'
            },
            input: {
              type: 'structure',
              members: {
                name: {
                  location: 'querystring',
                  locationName: 'name'
                },
                region: {
                  location: 'querystring',
                  locationName: 'region'
                },
                contents: {
                  type: 'blob'
                },
                snapshotId: {
                  location: 'querystring',
                  locationName: 'snapshotId'
                }
              },
              payload: 'contents'
            },
            output: {
              type: 'structure',
              members: {
                details: {
                  shape: 'S7'
                }
              }
            }
          },
          DeleteProject: {
            http: {
              method: 'DELETE',
              requestUri: '/projects/{projectId}'
            },
            input: {
              type: 'structure',
              required: ['projectId'],
              members: {
                projectId: {
                  location: 'uri',
                  locationName: 'projectId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                deletedResources: {
                  shape: 'Sc'
                },
                orphanedResources: {
                  shape: 'Sc'
                }
              }
            }
          },
          DescribeBundle: {
            http: {
              method: 'GET',
              requestUri: '/bundles/{bundleId}'
            },
            input: {
              type: 'structure',
              required: ['bundleId'],
              members: {
                bundleId: {
                  location: 'uri',
                  locationName: 'bundleId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                details: {
                  shape: 'Sq'
                }
              }
            }
          },
          DescribeProject: {
            http: {
              method: 'GET',
              requestUri: '/project'
            },
            input: {
              type: 'structure',
              required: ['projectId'],
              members: {
                projectId: {
                  location: 'querystring',
                  locationName: 'projectId'
                },
                syncFromResources: {
                  location: 'querystring',
                  locationName: 'syncFromResources',
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                details: {
                  shape: 'S7'
                }
              }
            }
          },
          ExportBundle: {
            http: {
              requestUri: '/bundles/{bundleId}'
            },
            input: {
              type: 'structure',
              required: ['bundleId'],
              members: {
                bundleId: {
                  location: 'uri',
                  locationName: 'bundleId'
                },
                projectId: {
                  location: 'querystring',
                  locationName: 'projectId'
                },
                platform: {
                  location: 'querystring',
                  locationName: 'platform'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                downloadUrl: {}
              }
            }
          },
          ExportProject: {
            http: {
              requestUri: '/exports/{projectId}'
            },
            input: {
              type: 'structure',
              required: ['projectId'],
              members: {
                projectId: {
                  location: 'uri',
                  locationName: 'projectId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                downloadUrl: {},
                shareUrl: {},
                snapshotId: {}
              }
            }
          },
          ListBundles: {
            http: {
              method: 'GET',
              requestUri: '/bundles'
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
              members: {
                bundleList: {
                  type: 'list',
                  member: {
                    shape: 'Sq'
                  }
                },
                nextToken: {}
              }
            }
          },
          ListProjects: {
            http: {
              method: 'GET',
              requestUri: '/projects'
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
              members: {
                projects: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      name: {},
                      projectId: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          UpdateProject: {
            http: {
              requestUri: '/update'
            },
            input: {
              type: 'structure',
              required: ['projectId'],
              members: {
                contents: {
                  type: 'blob'
                },
                projectId: {
                  location: 'querystring',
                  locationName: 'projectId'
                }
              },
              payload: 'contents'
            },
            output: {
              type: 'structure',
              members: {
                details: {
                  shape: 'S7'
                }
              }
            }
          }
        },
        shapes: {
          S7: {
            type: 'structure',
            members: {
              name: {},
              projectId: {},
              region: {},
              state: {},
              createdDate: {
                type: 'timestamp'
              },
              lastUpdatedDate: {
                type: 'timestamp'
              },
              consoleUrl: {},
              resources: {
                shape: 'Sc'
              }
            }
          },
          Sc: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                type: {},
                name: {},
                arn: {},
                feature: {},
                attributes: {
                  type: 'map',
                  key: {},
                  value: {}
                }
              }
            }
          },
          Sq: {
            type: 'structure',
            members: {
              bundleId: {},
              title: {},
              version: {},
              description: {},
              iconUrl: {},
              availablePlatforms: {
                type: 'list',
                member: {}
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=59532851778f9257523b0b0abf380564db0fc096.js.map