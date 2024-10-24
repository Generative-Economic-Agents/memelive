System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2018-05-14',
          endpointPrefix: 'projects.iot1click',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceAbbreviation: 'AWS IoT 1-Click Projects',
          serviceFullName: 'AWS IoT 1-Click Projects Service',
          serviceId: 'IoT 1Click Projects',
          signatureVersion: 'v4',
          signingName: 'iot1click',
          uid: 'iot1click-projects-2018-05-14'
        },
        operations: {
          AssociateDeviceWithPlacement: {
            http: {
              method: 'PUT',
              requestUri: '/projects/{projectName}/placements/{placementName}/devices/{deviceTemplateName}'
            },
            input: {
              type: 'structure',
              required: ['projectName', 'placementName', 'deviceId', 'deviceTemplateName'],
              members: {
                projectName: {
                  location: 'uri',
                  locationName: 'projectName'
                },
                placementName: {
                  location: 'uri',
                  locationName: 'placementName'
                },
                deviceId: {},
                deviceTemplateName: {
                  location: 'uri',
                  locationName: 'deviceTemplateName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          CreatePlacement: {
            http: {
              requestUri: '/projects/{projectName}/placements'
            },
            input: {
              type: 'structure',
              required: ['placementName', 'projectName'],
              members: {
                placementName: {},
                projectName: {
                  location: 'uri',
                  locationName: 'projectName'
                },
                attributes: {
                  shape: 'S8'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          CreateProject: {
            http: {
              requestUri: '/projects'
            },
            input: {
              type: 'structure',
              required: ['projectName'],
              members: {
                projectName: {},
                description: {},
                placementTemplate: {
                  shape: 'Se'
                },
                tags: {
                  shape: 'Sn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeletePlacement: {
            http: {
              method: 'DELETE',
              requestUri: '/projects/{projectName}/placements/{placementName}'
            },
            input: {
              type: 'structure',
              required: ['placementName', 'projectName'],
              members: {
                placementName: {
                  location: 'uri',
                  locationName: 'placementName'
                },
                projectName: {
                  location: 'uri',
                  locationName: 'projectName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteProject: {
            http: {
              method: 'DELETE',
              requestUri: '/projects/{projectName}'
            },
            input: {
              type: 'structure',
              required: ['projectName'],
              members: {
                projectName: {
                  location: 'uri',
                  locationName: 'projectName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DescribePlacement: {
            http: {
              method: 'GET',
              requestUri: '/projects/{projectName}/placements/{placementName}'
            },
            input: {
              type: 'structure',
              required: ['placementName', 'projectName'],
              members: {
                placementName: {
                  location: 'uri',
                  locationName: 'placementName'
                },
                projectName: {
                  location: 'uri',
                  locationName: 'projectName'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['placement'],
              members: {
                placement: {
                  type: 'structure',
                  required: ['projectName', 'placementName', 'attributes', 'createdDate', 'updatedDate'],
                  members: {
                    projectName: {},
                    placementName: {},
                    attributes: {
                      shape: 'S8'
                    },
                    createdDate: {
                      type: 'timestamp'
                    },
                    updatedDate: {
                      type: 'timestamp'
                    }
                  }
                }
              }
            }
          },
          DescribeProject: {
            http: {
              method: 'GET',
              requestUri: '/projects/{projectName}'
            },
            input: {
              type: 'structure',
              required: ['projectName'],
              members: {
                projectName: {
                  location: 'uri',
                  locationName: 'projectName'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['project'],
              members: {
                project: {
                  type: 'structure',
                  required: ['projectName', 'createdDate', 'updatedDate'],
                  members: {
                    arn: {},
                    projectName: {},
                    description: {},
                    createdDate: {
                      type: 'timestamp'
                    },
                    updatedDate: {
                      type: 'timestamp'
                    },
                    placementTemplate: {
                      shape: 'Se'
                    },
                    tags: {
                      shape: 'Sn'
                    }
                  }
                }
              }
            }
          },
          DisassociateDeviceFromPlacement: {
            http: {
              method: 'DELETE',
              requestUri: '/projects/{projectName}/placements/{placementName}/devices/{deviceTemplateName}'
            },
            input: {
              type: 'structure',
              required: ['projectName', 'placementName', 'deviceTemplateName'],
              members: {
                projectName: {
                  location: 'uri',
                  locationName: 'projectName'
                },
                placementName: {
                  location: 'uri',
                  locationName: 'placementName'
                },
                deviceTemplateName: {
                  location: 'uri',
                  locationName: 'deviceTemplateName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          GetDevicesInPlacement: {
            http: {
              method: 'GET',
              requestUri: '/projects/{projectName}/placements/{placementName}/devices'
            },
            input: {
              type: 'structure',
              required: ['projectName', 'placementName'],
              members: {
                projectName: {
                  location: 'uri',
                  locationName: 'projectName'
                },
                placementName: {
                  location: 'uri',
                  locationName: 'placementName'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['devices'],
              members: {
                devices: {
                  type: 'map',
                  key: {},
                  value: {}
                }
              }
            }
          },
          ListPlacements: {
            http: {
              method: 'GET',
              requestUri: '/projects/{projectName}/placements'
            },
            input: {
              type: 'structure',
              required: ['projectName'],
              members: {
                projectName: {
                  location: 'uri',
                  locationName: 'projectName'
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
              required: ['placements'],
              members: {
                placements: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['projectName', 'placementName', 'createdDate', 'updatedDate'],
                    members: {
                      projectName: {},
                      placementName: {},
                      createdDate: {
                        type: 'timestamp'
                      },
                      updatedDate: {
                        type: 'timestamp'
                      }
                    }
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
              required: ['projects'],
              members: {
                projects: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['projectName', 'createdDate', 'updatedDate'],
                    members: {
                      arn: {},
                      projectName: {},
                      createdDate: {
                        type: 'timestamp'
                      },
                      updatedDate: {
                        type: 'timestamp'
                      },
                      tags: {
                        shape: 'Sn'
                      }
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
                  shape: 'Sn'
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
                  shape: 'Sn'
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
          UpdatePlacement: {
            http: {
              method: 'PUT',
              requestUri: '/projects/{projectName}/placements/{placementName}'
            },
            input: {
              type: 'structure',
              required: ['placementName', 'projectName'],
              members: {
                placementName: {
                  location: 'uri',
                  locationName: 'placementName'
                },
                projectName: {
                  location: 'uri',
                  locationName: 'projectName'
                },
                attributes: {
                  shape: 'S8'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateProject: {
            http: {
              method: 'PUT',
              requestUri: '/projects/{projectName}'
            },
            input: {
              type: 'structure',
              required: ['projectName'],
              members: {
                projectName: {
                  location: 'uri',
                  locationName: 'projectName'
                },
                description: {},
                placementTemplate: {
                  shape: 'Se'
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
          S8: {
            type: 'map',
            key: {},
            value: {}
          },
          Se: {
            type: 'structure',
            members: {
              defaultAttributes: {
                type: 'map',
                key: {},
                value: {}
              },
              deviceTemplates: {
                type: 'map',
                key: {},
                value: {
                  type: 'structure',
                  members: {
                    deviceType: {},
                    callbackOverrides: {
                      type: 'map',
                      key: {},
                      value: {}
                    }
                  }
                }
              }
            }
          },
          Sn: {
            type: 'map',
            key: {},
            value: {}
          }
        }
      });
    }
  };
});
//# sourceMappingURL=86dec20842e38317298813f2bef7067db2246877.js.map