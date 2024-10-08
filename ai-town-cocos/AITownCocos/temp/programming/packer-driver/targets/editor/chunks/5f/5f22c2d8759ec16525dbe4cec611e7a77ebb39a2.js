System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        metadata: {
          apiVersion: '2014-11-11',
          endpointPrefix: 'lambda',
          serviceFullName: 'AWS Lambda',
          serviceId: 'Lambda',
          signatureVersion: 'v4',
          protocol: 'rest-json'
        },
        operations: {
          AddEventSource: {
            http: {
              requestUri: '/2014-11-13/event-source-mappings/'
            },
            input: {
              type: 'structure',
              required: ['EventSource', 'FunctionName', 'Role'],
              members: {
                EventSource: {},
                FunctionName: {},
                Role: {},
                BatchSize: {
                  type: 'integer'
                },
                Parameters: {
                  shape: 'S6'
                }
              }
            },
            output: {
              shape: 'S7'
            }
          },
          DeleteFunction: {
            http: {
              method: 'DELETE',
              requestUri: '/2014-11-13/functions/{FunctionName}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['FunctionName'],
              members: {
                FunctionName: {
                  location: 'uri',
                  locationName: 'FunctionName'
                }
              }
            }
          },
          GetEventSource: {
            http: {
              method: 'GET',
              requestUri: '/2014-11-13/event-source-mappings/{UUID}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['UUID'],
              members: {
                UUID: {
                  location: 'uri',
                  locationName: 'UUID'
                }
              }
            },
            output: {
              shape: 'S7'
            }
          },
          GetFunction: {
            http: {
              method: 'GET',
              requestUri: '/2014-11-13/functions/{FunctionName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['FunctionName'],
              members: {
                FunctionName: {
                  location: 'uri',
                  locationName: 'FunctionName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Configuration: {
                  shape: 'Se'
                },
                Code: {
                  type: 'structure',
                  members: {
                    RepositoryType: {},
                    Location: {}
                  }
                }
              }
            }
          },
          GetFunctionConfiguration: {
            http: {
              method: 'GET',
              requestUri: '/2014-11-13/functions/{FunctionName}/configuration',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['FunctionName'],
              members: {
                FunctionName: {
                  location: 'uri',
                  locationName: 'FunctionName'
                }
              }
            },
            output: {
              shape: 'Se'
            }
          },
          InvokeAsync: {
            http: {
              requestUri: '/2014-11-13/functions/{FunctionName}/invoke-async/',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['FunctionName', 'InvokeArgs'],
              members: {
                FunctionName: {
                  location: 'uri',
                  locationName: 'FunctionName'
                },
                InvokeArgs: {
                  shape: 'Sq'
                }
              },
              payload: 'InvokeArgs'
            },
            output: {
              type: 'structure',
              members: {
                Status: {
                  location: 'statusCode',
                  type: 'integer'
                }
              }
            }
          },
          ListEventSources: {
            http: {
              method: 'GET',
              requestUri: '/2014-11-13/event-source-mappings/',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                EventSourceArn: {
                  location: 'querystring',
                  locationName: 'EventSource'
                },
                FunctionName: {
                  location: 'querystring',
                  locationName: 'FunctionName'
                },
                Marker: {
                  location: 'querystring',
                  locationName: 'Marker'
                },
                MaxItems: {
                  location: 'querystring',
                  locationName: 'MaxItems',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NextMarker: {},
                EventSources: {
                  type: 'list',
                  member: {
                    shape: 'S7'
                  }
                }
              }
            }
          },
          ListFunctions: {
            http: {
              method: 'GET',
              requestUri: '/2014-11-13/functions/',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                Marker: {
                  location: 'querystring',
                  locationName: 'Marker'
                },
                MaxItems: {
                  location: 'querystring',
                  locationName: 'MaxItems',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NextMarker: {},
                Functions: {
                  type: 'list',
                  member: {
                    shape: 'Se'
                  }
                }
              }
            }
          },
          RemoveEventSource: {
            http: {
              method: 'DELETE',
              requestUri: '/2014-11-13/event-source-mappings/{UUID}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['UUID'],
              members: {
                UUID: {
                  location: 'uri',
                  locationName: 'UUID'
                }
              }
            }
          },
          UpdateFunctionConfiguration: {
            http: {
              method: 'PUT',
              requestUri: '/2014-11-13/functions/{FunctionName}/configuration',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['FunctionName'],
              members: {
                FunctionName: {
                  location: 'uri',
                  locationName: 'FunctionName'
                },
                Role: {
                  location: 'querystring',
                  locationName: 'Role'
                },
                Handler: {
                  location: 'querystring',
                  locationName: 'Handler'
                },
                Description: {
                  location: 'querystring',
                  locationName: 'Description'
                },
                Timeout: {
                  location: 'querystring',
                  locationName: 'Timeout',
                  type: 'integer'
                },
                MemorySize: {
                  location: 'querystring',
                  locationName: 'MemorySize',
                  type: 'integer'
                }
              }
            },
            output: {
              shape: 'Se'
            }
          },
          UploadFunction: {
            http: {
              method: 'PUT',
              requestUri: '/2014-11-13/functions/{FunctionName}',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['FunctionName', 'FunctionZip', 'Runtime', 'Role', 'Handler', 'Mode'],
              members: {
                FunctionName: {
                  location: 'uri',
                  locationName: 'FunctionName'
                },
                FunctionZip: {
                  shape: 'Sq'
                },
                Runtime: {
                  location: 'querystring',
                  locationName: 'Runtime'
                },
                Role: {
                  location: 'querystring',
                  locationName: 'Role'
                },
                Handler: {
                  location: 'querystring',
                  locationName: 'Handler'
                },
                Mode: {
                  location: 'querystring',
                  locationName: 'Mode'
                },
                Description: {
                  location: 'querystring',
                  locationName: 'Description'
                },
                Timeout: {
                  location: 'querystring',
                  locationName: 'Timeout',
                  type: 'integer'
                },
                MemorySize: {
                  location: 'querystring',
                  locationName: 'MemorySize',
                  type: 'integer'
                }
              },
              payload: 'FunctionZip'
            },
            output: {
              shape: 'Se'
            }
          }
        },
        shapes: {
          S6: {
            type: 'map',
            key: {},
            value: {}
          },
          S7: {
            type: 'structure',
            members: {
              UUID: {},
              BatchSize: {
                type: 'integer'
              },
              EventSource: {},
              FunctionName: {},
              Parameters: {
                shape: 'S6'
              },
              Role: {},
              LastModified: {
                type: 'timestamp'
              },
              IsActive: {
                type: 'boolean'
              },
              Status: {}
            }
          },
          Se: {
            type: 'structure',
            members: {
              FunctionName: {},
              FunctionARN: {},
              ConfigurationId: {},
              Runtime: {},
              Role: {},
              Handler: {},
              Mode: {},
              CodeSize: {
                type: 'long'
              },
              Description: {},
              Timeout: {
                type: 'integer'
              },
              MemorySize: {
                type: 'integer'
              },
              LastModified: {
                type: 'timestamp'
              }
            }
          },
          Sq: {
            type: 'blob',
            streaming: true
          }
        }
      });
    }
  };
});
//# sourceMappingURL=5f22c2d8759ec16525dbe4cec611e7a77ebb39a2.js.map