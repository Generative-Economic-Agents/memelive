System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2020-07-01',
          endpointPrefix: 'featurestore-runtime.sagemaker',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceFullName: 'Amazon SageMaker Feature Store Runtime',
          serviceId: 'SageMaker FeatureStore Runtime',
          signatureVersion: 'v4',
          signingName: 'sagemaker',
          uid: 'sagemaker-featurestore-runtime-2020-07-01'
        },
        operations: {
          BatchGetRecord: {
            http: {
              requestUri: '/BatchGetRecord'
            },
            input: {
              type: 'structure',
              required: ['Identifiers'],
              members: {
                Identifiers: {
                  type: 'list',
                  member: {
                    shape: 'S3'
                  }
                },
                ExpirationTimeResponse: {}
              }
            },
            output: {
              type: 'structure',
              required: ['Records', 'Errors', 'UnprocessedIdentifiers'],
              members: {
                Records: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['FeatureGroupName', 'RecordIdentifierValueAsString', 'Record'],
                    members: {
                      FeatureGroupName: {},
                      RecordIdentifierValueAsString: {},
                      Record: {
                        shape: 'Sd'
                      },
                      ExpiresAt: {}
                    }
                  }
                },
                Errors: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['FeatureGroupName', 'RecordIdentifierValueAsString', 'ErrorCode', 'ErrorMessage'],
                    members: {
                      FeatureGroupName: {},
                      RecordIdentifierValueAsString: {},
                      ErrorCode: {},
                      ErrorMessage: {}
                    }
                  }
                },
                UnprocessedIdentifiers: {
                  type: 'list',
                  member: {
                    shape: 'S3'
                  }
                }
              }
            }
          },
          DeleteRecord: {
            http: {
              method: 'DELETE',
              requestUri: '/FeatureGroup/{FeatureGroupName}'
            },
            input: {
              type: 'structure',
              required: ['FeatureGroupName', 'RecordIdentifierValueAsString', 'EventTime'],
              members: {
                FeatureGroupName: {
                  location: 'uri',
                  locationName: 'FeatureGroupName'
                },
                RecordIdentifierValueAsString: {
                  location: 'querystring',
                  locationName: 'RecordIdentifierValueAsString'
                },
                EventTime: {
                  location: 'querystring',
                  locationName: 'EventTime'
                },
                TargetStores: {
                  shape: 'Sm',
                  location: 'querystring',
                  locationName: 'TargetStores'
                },
                DeletionMode: {
                  location: 'querystring',
                  locationName: 'DeletionMode'
                }
              }
            }
          },
          GetRecord: {
            http: {
              method: 'GET',
              requestUri: '/FeatureGroup/{FeatureGroupName}'
            },
            input: {
              type: 'structure',
              required: ['FeatureGroupName', 'RecordIdentifierValueAsString'],
              members: {
                FeatureGroupName: {
                  location: 'uri',
                  locationName: 'FeatureGroupName'
                },
                RecordIdentifierValueAsString: {
                  location: 'querystring',
                  locationName: 'RecordIdentifierValueAsString'
                },
                FeatureNames: {
                  shape: 'S7',
                  location: 'querystring',
                  locationName: 'FeatureName'
                },
                ExpirationTimeResponse: {
                  location: 'querystring',
                  locationName: 'ExpirationTimeResponse'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Record: {
                  shape: 'Sd'
                },
                ExpiresAt: {}
              }
            }
          },
          PutRecord: {
            http: {
              method: 'PUT',
              requestUri: '/FeatureGroup/{FeatureGroupName}'
            },
            input: {
              type: 'structure',
              required: ['FeatureGroupName', 'Record'],
              members: {
                FeatureGroupName: {
                  location: 'uri',
                  locationName: 'FeatureGroupName'
                },
                Record: {
                  shape: 'Sd'
                },
                TargetStores: {
                  shape: 'Sm'
                },
                TtlDuration: {
                  type: 'structure',
                  required: ['Unit', 'Value'],
                  members: {
                    Unit: {},
                    Value: {
                      type: 'integer'
                    }
                  }
                }
              }
            }
          }
        },
        shapes: {
          S3: {
            type: 'structure',
            required: ['FeatureGroupName', 'RecordIdentifiersValueAsString'],
            members: {
              FeatureGroupName: {},
              RecordIdentifiersValueAsString: {
                type: 'list',
                member: {}
              },
              FeatureNames: {
                shape: 'S7'
              }
            }
          },
          S7: {
            type: 'list',
            member: {}
          },
          Sd: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['FeatureName'],
              members: {
                FeatureName: {},
                ValueAsString: {},
                ValueAsStringList: {
                  type: 'list',
                  member: {}
                }
              }
            }
          },
          Sm: {
            type: 'list',
            member: {}
          }
        }
      });
    }
  };
});
//# sourceMappingURL=682bae6626a423dd26431461989e6c4f0e52350c.js.map