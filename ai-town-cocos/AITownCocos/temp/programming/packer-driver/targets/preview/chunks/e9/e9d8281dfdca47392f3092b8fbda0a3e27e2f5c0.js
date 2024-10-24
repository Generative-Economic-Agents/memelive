System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2021-08-11',
          endpointPrefix: 'amplifyuibuilder',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceFullName: 'AWS Amplify UI Builder',
          serviceId: 'AmplifyUIBuilder',
          signatureVersion: 'v4',
          signingName: 'amplifyuibuilder',
          uid: 'amplifyuibuilder-2021-08-11'
        },
        operations: {
          CreateComponent: {
            http: {
              requestUri: '/app/{appId}/environment/{environmentName}/components',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['appId', 'environmentName', 'componentToCreate'],
              members: {
                appId: {
                  location: 'uri',
                  locationName: 'appId'
                },
                environmentName: {
                  location: 'uri',
                  locationName: 'environmentName'
                },
                clientToken: {
                  idempotencyToken: true,
                  location: 'querystring',
                  locationName: 'clientToken'
                },
                componentToCreate: {
                  type: 'structure',
                  required: ['name', 'componentType', 'properties', 'variants', 'overrides', 'bindingProperties'],
                  members: {
                    name: {},
                    sourceId: {},
                    componentType: {},
                    properties: {
                      shape: 'S6'
                    },
                    children: {
                      shape: 'Se'
                    },
                    variants: {
                      shape: 'Sk'
                    },
                    overrides: {
                      shape: 'Sn'
                    },
                    bindingProperties: {
                      shape: 'Sp'
                    },
                    collectionProperties: {
                      shape: 'Sv'
                    },
                    tags: {
                      shape: 'S11'
                    },
                    events: {
                      shape: 'Sg'
                    },
                    schemaVersion: {}
                  }
                }
              },
              payload: 'componentToCreate'
            },
            output: {
              type: 'structure',
              members: {
                entity: {
                  shape: 'S15'
                }
              },
              payload: 'entity'
            },
            idempotent: true
          },
          CreateForm: {
            http: {
              requestUri: '/app/{appId}/environment/{environmentName}/forms',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['appId', 'environmentName', 'formToCreate'],
              members: {
                appId: {
                  location: 'uri',
                  locationName: 'appId'
                },
                environmentName: {
                  location: 'uri',
                  locationName: 'environmentName'
                },
                clientToken: {
                  idempotencyToken: true,
                  location: 'querystring',
                  locationName: 'clientToken'
                },
                formToCreate: {
                  type: 'structure',
                  required: ['name', 'dataType', 'formActionType', 'fields', 'style', 'sectionalElements', 'schemaVersion'],
                  members: {
                    name: {},
                    dataType: {
                      shape: 'S1b'
                    },
                    formActionType: {},
                    fields: {
                      shape: 'S1e'
                    },
                    style: {
                      shape: 'S20'
                    },
                    sectionalElements: {
                      shape: 'S22'
                    },
                    schemaVersion: {},
                    cta: {
                      shape: 'S24'
                    },
                    tags: {
                      shape: 'S11'
                    },
                    labelDecorator: {}
                  }
                }
              },
              payload: 'formToCreate'
            },
            output: {
              type: 'structure',
              members: {
                entity: {
                  shape: 'S29'
                }
              },
              payload: 'entity'
            },
            idempotent: true
          },
          CreateTheme: {
            http: {
              requestUri: '/app/{appId}/environment/{environmentName}/themes',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['appId', 'environmentName', 'themeToCreate'],
              members: {
                appId: {
                  location: 'uri',
                  locationName: 'appId'
                },
                environmentName: {
                  location: 'uri',
                  locationName: 'environmentName'
                },
                clientToken: {
                  idempotencyToken: true,
                  location: 'querystring',
                  locationName: 'clientToken'
                },
                themeToCreate: {
                  type: 'structure',
                  required: ['name', 'values'],
                  members: {
                    name: {},
                    values: {
                      shape: 'S2d'
                    },
                    overrides: {
                      shape: 'S2d'
                    },
                    tags: {
                      shape: 'S11'
                    }
                  }
                }
              },
              payload: 'themeToCreate'
            },
            output: {
              type: 'structure',
              members: {
                entity: {
                  shape: 'S2h'
                }
              },
              payload: 'entity'
            },
            idempotent: true
          },
          DeleteComponent: {
            http: {
              method: 'DELETE',
              requestUri: '/app/{appId}/environment/{environmentName}/components/{id}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['appId', 'environmentName', 'id'],
              members: {
                appId: {
                  location: 'uri',
                  locationName: 'appId'
                },
                environmentName: {
                  location: 'uri',
                  locationName: 'environmentName'
                },
                id: {
                  location: 'uri',
                  locationName: 'id'
                }
              }
            },
            idempotent: true
          },
          DeleteForm: {
            http: {
              method: 'DELETE',
              requestUri: '/app/{appId}/environment/{environmentName}/forms/{id}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['appId', 'environmentName', 'id'],
              members: {
                appId: {
                  location: 'uri',
                  locationName: 'appId'
                },
                environmentName: {
                  location: 'uri',
                  locationName: 'environmentName'
                },
                id: {
                  location: 'uri',
                  locationName: 'id'
                }
              }
            },
            idempotent: true
          },
          DeleteTheme: {
            http: {
              method: 'DELETE',
              requestUri: '/app/{appId}/environment/{environmentName}/themes/{id}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['appId', 'environmentName', 'id'],
              members: {
                appId: {
                  location: 'uri',
                  locationName: 'appId'
                },
                environmentName: {
                  location: 'uri',
                  locationName: 'environmentName'
                },
                id: {
                  location: 'uri',
                  locationName: 'id'
                }
              }
            },
            idempotent: true
          },
          ExchangeCodeForToken: {
            http: {
              requestUri: '/tokens/{provider}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['provider', 'request'],
              members: {
                provider: {
                  location: 'uri',
                  locationName: 'provider'
                },
                request: {
                  type: 'structure',
                  required: ['code', 'redirectUri'],
                  members: {
                    code: {
                      shape: 'S2o'
                    },
                    redirectUri: {},
                    clientId: {
                      shape: 'S2o'
                    }
                  }
                }
              },
              payload: 'request'
            },
            output: {
              type: 'structure',
              required: ['accessToken', 'expiresIn', 'refreshToken'],
              members: {
                accessToken: {
                  shape: 'S2o'
                },
                expiresIn: {
                  type: 'integer'
                },
                refreshToken: {
                  shape: 'S2o'
                }
              }
            }
          },
          ExportComponents: {
            http: {
              method: 'GET',
              requestUri: '/export/app/{appId}/environment/{environmentName}/components',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['appId', 'environmentName'],
              members: {
                appId: {
                  location: 'uri',
                  locationName: 'appId'
                },
                environmentName: {
                  location: 'uri',
                  locationName: 'environmentName'
                },
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['entities'],
              members: {
                entities: {
                  type: 'list',
                  member: {
                    shape: 'S15'
                  }
                },
                nextToken: {}
              }
            }
          },
          ExportForms: {
            http: {
              method: 'GET',
              requestUri: '/export/app/{appId}/environment/{environmentName}/forms',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['appId', 'environmentName'],
              members: {
                appId: {
                  location: 'uri',
                  locationName: 'appId'
                },
                environmentName: {
                  location: 'uri',
                  locationName: 'environmentName'
                },
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['entities'],
              members: {
                entities: {
                  type: 'list',
                  member: {
                    shape: 'S29'
                  }
                },
                nextToken: {}
              }
            }
          },
          ExportThemes: {
            http: {
              method: 'GET',
              requestUri: '/export/app/{appId}/environment/{environmentName}/themes',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['appId', 'environmentName'],
              members: {
                appId: {
                  location: 'uri',
                  locationName: 'appId'
                },
                environmentName: {
                  location: 'uri',
                  locationName: 'environmentName'
                },
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['entities'],
              members: {
                entities: {
                  type: 'list',
                  member: {
                    shape: 'S2h'
                  }
                },
                nextToken: {}
              }
            }
          },
          GetCodegenJob: {
            http: {
              method: 'GET',
              requestUri: '/app/{appId}/environment/{environmentName}/codegen-jobs/{id}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['appId', 'environmentName', 'id'],
              members: {
                appId: {
                  location: 'uri',
                  locationName: 'appId'
                },
                environmentName: {
                  location: 'uri',
                  locationName: 'environmentName'
                },
                id: {
                  location: 'uri',
                  locationName: 'id'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                job: {
                  shape: 'S32'
                }
              },
              payload: 'job'
            }
          },
          GetComponent: {
            http: {
              method: 'GET',
              requestUri: '/app/{appId}/environment/{environmentName}/components/{id}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['appId', 'environmentName', 'id'],
              members: {
                appId: {
                  location: 'uri',
                  locationName: 'appId'
                },
                environmentName: {
                  location: 'uri',
                  locationName: 'environmentName'
                },
                id: {
                  location: 'uri',
                  locationName: 'id'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                component: {
                  shape: 'S15'
                }
              },
              payload: 'component'
            }
          },
          GetForm: {
            http: {
              method: 'GET',
              requestUri: '/app/{appId}/environment/{environmentName}/forms/{id}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['appId', 'environmentName', 'id'],
              members: {
                appId: {
                  location: 'uri',
                  locationName: 'appId'
                },
                environmentName: {
                  location: 'uri',
                  locationName: 'environmentName'
                },
                id: {
                  location: 'uri',
                  locationName: 'id'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                form: {
                  shape: 'S29'
                }
              },
              payload: 'form'
            }
          },
          GetMetadata: {
            http: {
              method: 'GET',
              requestUri: '/app/{appId}/environment/{environmentName}/metadata',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['appId', 'environmentName'],
              members: {
                appId: {
                  location: 'uri',
                  locationName: 'appId'
                },
                environmentName: {
                  location: 'uri',
                  locationName: 'environmentName'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['features'],
              members: {
                features: {
                  type: 'map',
                  key: {},
                  value: {}
                }
              }
            }
          },
          GetTheme: {
            http: {
              method: 'GET',
              requestUri: '/app/{appId}/environment/{environmentName}/themes/{id}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['appId', 'environmentName', 'id'],
              members: {
                appId: {
                  location: 'uri',
                  locationName: 'appId'
                },
                environmentName: {
                  location: 'uri',
                  locationName: 'environmentName'
                },
                id: {
                  location: 'uri',
                  locationName: 'id'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                theme: {
                  shape: 'S2h'
                }
              },
              payload: 'theme'
            }
          },
          ListCodegenJobs: {
            http: {
              method: 'GET',
              requestUri: '/app/{appId}/environment/{environmentName}/codegen-jobs',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['appId', 'environmentName'],
              members: {
                appId: {
                  location: 'uri',
                  locationName: 'appId'
                },
                environmentName: {
                  location: 'uri',
                  locationName: 'environmentName'
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
              required: ['entities'],
              members: {
                entities: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['appId', 'environmentName', 'id'],
                    members: {
                      appId: {},
                      environmentName: {},
                      id: {},
                      createdAt: {
                        shape: 'S17'
                      },
                      modifiedAt: {
                        shape: 'S17'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListComponents: {
            http: {
              method: 'GET',
              requestUri: '/app/{appId}/environment/{environmentName}/components',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['appId', 'environmentName'],
              members: {
                appId: {
                  location: 'uri',
                  locationName: 'appId'
                },
                environmentName: {
                  location: 'uri',
                  locationName: 'environmentName'
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
              required: ['entities'],
              members: {
                entities: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['appId', 'environmentName', 'id', 'name', 'componentType'],
                    members: {
                      appId: {},
                      environmentName: {},
                      id: {},
                      name: {},
                      componentType: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListForms: {
            http: {
              method: 'GET',
              requestUri: '/app/{appId}/environment/{environmentName}/forms',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['appId', 'environmentName'],
              members: {
                appId: {
                  location: 'uri',
                  locationName: 'appId'
                },
                environmentName: {
                  location: 'uri',
                  locationName: 'environmentName'
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
              required: ['entities'],
              members: {
                entities: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['appId', 'dataType', 'environmentName', 'formActionType', 'id', 'name'],
                    members: {
                      appId: {},
                      dataType: {
                        shape: 'S1b'
                      },
                      environmentName: {},
                      formActionType: {},
                      id: {},
                      name: {}
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
              requestUri: '/tags/{resourceArn}',
              responseCode: 200
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
              required: ['tags'],
              members: {
                tags: {
                  shape: 'S11'
                }
              }
            }
          },
          ListThemes: {
            http: {
              method: 'GET',
              requestUri: '/app/{appId}/environment/{environmentName}/themes',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['appId', 'environmentName'],
              members: {
                appId: {
                  location: 'uri',
                  locationName: 'appId'
                },
                environmentName: {
                  location: 'uri',
                  locationName: 'environmentName'
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
              required: ['entities'],
              members: {
                entities: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['appId', 'environmentName', 'id', 'name'],
                    members: {
                      appId: {},
                      environmentName: {},
                      id: {},
                      name: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          PutMetadataFlag: {
            http: {
              method: 'PUT',
              requestUri: '/app/{appId}/environment/{environmentName}/metadata/features/{featureName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['appId', 'environmentName', 'featureName', 'body'],
              members: {
                appId: {
                  location: 'uri',
                  locationName: 'appId'
                },
                environmentName: {
                  location: 'uri',
                  locationName: 'environmentName'
                },
                featureName: {
                  location: 'uri',
                  locationName: 'featureName'
                },
                body: {
                  type: 'structure',
                  required: ['newValue'],
                  members: {
                    newValue: {}
                  }
                }
              },
              payload: 'body'
            },
            idempotent: true
          },
          RefreshToken: {
            http: {
              requestUri: '/tokens/{provider}/refresh',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['provider', 'refreshTokenBody'],
              members: {
                provider: {
                  location: 'uri',
                  locationName: 'provider'
                },
                refreshTokenBody: {
                  type: 'structure',
                  required: ['token'],
                  members: {
                    token: {
                      shape: 'S2o'
                    },
                    clientId: {
                      shape: 'S2o'
                    }
                  }
                }
              },
              payload: 'refreshTokenBody'
            },
            output: {
              type: 'structure',
              required: ['accessToken', 'expiresIn'],
              members: {
                accessToken: {
                  shape: 'S2o'
                },
                expiresIn: {
                  type: 'integer'
                }
              }
            }
          },
          StartCodegenJob: {
            http: {
              requestUri: '/app/{appId}/environment/{environmentName}/codegen-jobs',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['appId', 'environmentName', 'codegenJobToCreate'],
              members: {
                appId: {
                  location: 'uri',
                  locationName: 'appId'
                },
                environmentName: {
                  location: 'uri',
                  locationName: 'environmentName'
                },
                clientToken: {
                  idempotencyToken: true,
                  location: 'querystring',
                  locationName: 'clientToken'
                },
                codegenJobToCreate: {
                  type: 'structure',
                  required: ['renderConfig'],
                  members: {
                    renderConfig: {
                      shape: 'S33'
                    },
                    genericDataSchema: {
                      shape: 'S3d'
                    },
                    autoGenerateForms: {
                      type: 'boolean'
                    },
                    features: {
                      shape: 'S3v'
                    },
                    tags: {
                      shape: 'S11'
                    }
                  }
                }
              },
              payload: 'codegenJobToCreate'
            },
            output: {
              type: 'structure',
              members: {
                entity: {
                  shape: 'S32'
                }
              },
              payload: 'entity'
            }
          },
          TagResource: {
            http: {
              requestUri: '/tags/{resourceArn}',
              responseCode: 200
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
                  shape: 'S11'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          UntagResource: {
            http: {
              method: 'DELETE',
              requestUri: '/tags/{resourceArn}',
              responseCode: 200
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
            },
            idempotent: true
          },
          UpdateComponent: {
            http: {
              method: 'PATCH',
              requestUri: '/app/{appId}/environment/{environmentName}/components/{id}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['appId', 'environmentName', 'id', 'updatedComponent'],
              members: {
                appId: {
                  location: 'uri',
                  locationName: 'appId'
                },
                environmentName: {
                  location: 'uri',
                  locationName: 'environmentName'
                },
                id: {
                  location: 'uri',
                  locationName: 'id'
                },
                clientToken: {
                  idempotencyToken: true,
                  location: 'querystring',
                  locationName: 'clientToken'
                },
                updatedComponent: {
                  type: 'structure',
                  members: {
                    id: {},
                    name: {},
                    sourceId: {},
                    componentType: {},
                    properties: {
                      shape: 'S6'
                    },
                    children: {
                      shape: 'Se'
                    },
                    variants: {
                      shape: 'Sk'
                    },
                    overrides: {
                      shape: 'Sn'
                    },
                    bindingProperties: {
                      shape: 'Sp'
                    },
                    collectionProperties: {
                      shape: 'Sv'
                    },
                    events: {
                      shape: 'Sg'
                    },
                    schemaVersion: {}
                  }
                }
              },
              payload: 'updatedComponent'
            },
            output: {
              type: 'structure',
              members: {
                entity: {
                  shape: 'S15'
                }
              },
              payload: 'entity'
            },
            idempotent: true
          },
          UpdateForm: {
            http: {
              method: 'PATCH',
              requestUri: '/app/{appId}/environment/{environmentName}/forms/{id}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['appId', 'environmentName', 'id', 'updatedForm'],
              members: {
                appId: {
                  location: 'uri',
                  locationName: 'appId'
                },
                environmentName: {
                  location: 'uri',
                  locationName: 'environmentName'
                },
                id: {
                  location: 'uri',
                  locationName: 'id'
                },
                clientToken: {
                  idempotencyToken: true,
                  location: 'querystring',
                  locationName: 'clientToken'
                },
                updatedForm: {
                  type: 'structure',
                  members: {
                    name: {},
                    dataType: {
                      shape: 'S1b'
                    },
                    formActionType: {},
                    fields: {
                      shape: 'S1e'
                    },
                    style: {
                      shape: 'S20'
                    },
                    sectionalElements: {
                      shape: 'S22'
                    },
                    schemaVersion: {},
                    cta: {
                      shape: 'S24'
                    },
                    labelDecorator: {}
                  }
                }
              },
              payload: 'updatedForm'
            },
            output: {
              type: 'structure',
              members: {
                entity: {
                  shape: 'S29'
                }
              },
              payload: 'entity'
            },
            idempotent: true
          },
          UpdateTheme: {
            http: {
              method: 'PATCH',
              requestUri: '/app/{appId}/environment/{environmentName}/themes/{id}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['appId', 'environmentName', 'id', 'updatedTheme'],
              members: {
                appId: {
                  location: 'uri',
                  locationName: 'appId'
                },
                environmentName: {
                  location: 'uri',
                  locationName: 'environmentName'
                },
                id: {
                  location: 'uri',
                  locationName: 'id'
                },
                clientToken: {
                  idempotencyToken: true,
                  location: 'querystring',
                  locationName: 'clientToken'
                },
                updatedTheme: {
                  type: 'structure',
                  required: ['values'],
                  members: {
                    id: {},
                    name: {},
                    values: {
                      shape: 'S2d'
                    },
                    overrides: {
                      shape: 'S2d'
                    }
                  }
                }
              },
              payload: 'updatedTheme'
            },
            output: {
              type: 'structure',
              members: {
                entity: {
                  shape: 'S2h'
                }
              },
              payload: 'entity'
            },
            idempotent: true
          }
        },
        shapes: {
          S6: {
            type: 'map',
            key: {},
            value: {
              shape: 'S7'
            }
          },
          S7: {
            type: 'structure',
            members: {
              value: {},
              bindingProperties: {
                shape: 'S8'
              },
              collectionBindingProperties: {
                shape: 'S8'
              },
              defaultValue: {},
              model: {},
              bindings: {
                type: 'map',
                key: {},
                value: {
                  type: 'structure',
                  required: ['element', 'property'],
                  members: {
                    element: {},
                    property: {}
                  }
                }
              },
              event: {},
              userAttribute: {},
              concat: {
                type: 'list',
                member: {
                  shape: 'S7'
                }
              },
              condition: {
                type: 'structure',
                members: {
                  property: {},
                  field: {},
                  operator: {},
                  operand: {},
                  then: {
                    shape: 'S7'
                  },
                  'else': {
                    shape: 'S7'
                  },
                  operandType: {}
                }
              },
              configured: {
                type: 'boolean'
              },
              type: {},
              importedValue: {},
              componentName: {},
              property: {}
            }
          },
          S8: {
            type: 'structure',
            required: ['property'],
            members: {
              property: {},
              field: {}
            }
          },
          Se: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['componentType', 'name', 'properties'],
              members: {
                componentType: {},
                name: {},
                properties: {
                  shape: 'S6'
                },
                children: {
                  shape: 'Se'
                },
                events: {
                  shape: 'Sg'
                },
                sourceId: {}
              }
            }
          },
          Sg: {
            type: 'map',
            key: {},
            value: {
              type: 'structure',
              members: {
                action: {},
                parameters: {
                  type: 'structure',
                  members: {
                    type: {
                      shape: 'S7'
                    },
                    url: {
                      shape: 'S7'
                    },
                    anchor: {
                      shape: 'S7'
                    },
                    target: {
                      shape: 'S7'
                    },
                    global: {
                      shape: 'S7'
                    },
                    model: {},
                    id: {
                      shape: 'S7'
                    },
                    fields: {
                      shape: 'S6'
                    },
                    state: {
                      type: 'structure',
                      required: ['componentName', 'property', 'set'],
                      members: {
                        componentName: {},
                        property: {},
                        set: {
                          shape: 'S7'
                        }
                      }
                    }
                  }
                },
                bindingEvent: {}
              }
            }
          },
          Sk: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                variantValues: {
                  type: 'map',
                  key: {},
                  value: {}
                },
                overrides: {
                  shape: 'Sn'
                }
              }
            }
          },
          Sn: {
            type: 'map',
            key: {},
            value: {
              type: 'map',
              key: {},
              value: {}
            }
          },
          Sp: {
            type: 'map',
            key: {},
            value: {
              type: 'structure',
              members: {
                type: {},
                bindingProperties: {
                  type: 'structure',
                  members: {
                    model: {},
                    field: {},
                    predicates: {
                      shape: 'Ss'
                    },
                    userAttribute: {},
                    bucket: {},
                    key: {},
                    defaultValue: {},
                    slotName: {}
                  }
                },
                defaultValue: {}
              }
            }
          },
          Ss: {
            type: 'list',
            member: {
              shape: 'St'
            }
          },
          St: {
            type: 'structure',
            members: {
              or: {
                shape: 'Ss'
              },
              and: {
                shape: 'Ss'
              },
              field: {},
              operator: {},
              operand: {},
              operandType: {}
            }
          },
          Sv: {
            type: 'map',
            key: {},
            value: {
              type: 'structure',
              required: ['model'],
              members: {
                model: {},
                sort: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['field', 'direction'],
                    members: {
                      field: {},
                      direction: {}
                    }
                  }
                },
                predicate: {
                  shape: 'St'
                },
                identifiers: {
                  type: 'list',
                  member: {}
                }
              }
            }
          },
          S11: {
            type: 'map',
            key: {},
            value: {}
          },
          S15: {
            type: 'structure',
            required: ['appId', 'environmentName', 'id', 'name', 'componentType', 'properties', 'variants', 'overrides', 'bindingProperties', 'createdAt'],
            members: {
              appId: {},
              environmentName: {},
              sourceId: {},
              id: {},
              name: {},
              componentType: {},
              properties: {
                shape: 'S6'
              },
              children: {
                shape: 'Se'
              },
              variants: {
                shape: 'Sk'
              },
              overrides: {
                shape: 'Sn'
              },
              bindingProperties: {
                shape: 'Sp'
              },
              collectionProperties: {
                shape: 'Sv'
              },
              createdAt: {
                shape: 'S17'
              },
              modifiedAt: {
                shape: 'S17'
              },
              tags: {
                shape: 'S11'
              },
              events: {
                shape: 'Sg'
              },
              schemaVersion: {}
            }
          },
          S17: {
            type: 'timestamp',
            timestampFormat: 'iso8601'
          },
          S1b: {
            type: 'structure',
            required: ['dataSourceType', 'dataTypeName'],
            members: {
              dataSourceType: {},
              dataTypeName: {}
            }
          },
          S1e: {
            type: 'map',
            key: {},
            value: {
              type: 'structure',
              members: {
                label: {},
                position: {
                  shape: 'S1g'
                },
                excluded: {
                  type: 'boolean'
                },
                inputType: {
                  type: 'structure',
                  required: ['type'],
                  members: {
                    type: {},
                    required: {
                      type: 'boolean'
                    },
                    readOnly: {
                      type: 'boolean'
                    },
                    placeholder: {},
                    defaultValue: {},
                    descriptiveText: {},
                    defaultChecked: {
                      type: 'boolean'
                    },
                    defaultCountryCode: {},
                    valueMappings: {
                      type: 'structure',
                      required: ['values'],
                      members: {
                        values: {
                          type: 'list',
                          member: {
                            type: 'structure',
                            required: ['value'],
                            members: {
                              displayValue: {
                                shape: 'S1m'
                              },
                              value: {
                                shape: 'S1m'
                              }
                            }
                          }
                        },
                        bindingProperties: {
                          type: 'map',
                          key: {},
                          value: {
                            type: 'structure',
                            members: {
                              type: {},
                              bindingProperties: {
                                type: 'structure',
                                members: {
                                  model: {}
                                }
                              }
                            }
                          }
                        }
                      }
                    },
                    name: {},
                    minValue: {
                      type: 'float'
                    },
                    maxValue: {
                      type: 'float'
                    },
                    step: {
                      type: 'float'
                    },
                    value: {},
                    isArray: {
                      type: 'boolean'
                    },
                    fileUploaderConfig: {
                      type: 'structure',
                      required: ['accessLevel', 'acceptedFileTypes'],
                      members: {
                        accessLevel: {},
                        acceptedFileTypes: {
                          shape: 'S1v'
                        },
                        showThumbnails: {
                          type: 'boolean'
                        },
                        isResumable: {
                          type: 'boolean'
                        },
                        maxFileCount: {
                          type: 'integer'
                        },
                        maxSize: {
                          type: 'integer'
                        }
                      }
                    }
                  }
                },
                validations: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['type'],
                    members: {
                      type: {},
                      strValues: {
                        shape: 'S1v'
                      },
                      numValues: {
                        type: 'list',
                        member: {
                          type: 'integer'
                        }
                      },
                      validationMessage: {}
                    }
                  }
                }
              }
            }
          },
          S1g: {
            type: 'structure',
            members: {
              fixed: {},
              rightOf: {},
              below: {}
            },
            union: true
          },
          S1m: {
            type: 'structure',
            members: {
              value: {},
              bindingProperties: {
                type: 'structure',
                required: ['property'],
                members: {
                  property: {},
                  field: {}
                }
              },
              concat: {
                type: 'list',
                member: {
                  shape: 'S1m'
                }
              }
            }
          },
          S1v: {
            type: 'list',
            member: {}
          },
          S20: {
            type: 'structure',
            members: {
              horizontalGap: {
                shape: 'S21'
              },
              verticalGap: {
                shape: 'S21'
              },
              outerPadding: {
                shape: 'S21'
              }
            }
          },
          S21: {
            type: 'structure',
            members: {
              tokenReference: {},
              value: {}
            },
            union: true
          },
          S22: {
            type: 'map',
            key: {},
            value: {
              type: 'structure',
              required: ['type'],
              members: {
                type: {},
                position: {
                  shape: 'S1g'
                },
                text: {},
                level: {
                  type: 'integer'
                },
                orientation: {},
                excluded: {
                  type: 'boolean'
                }
              }
            }
          },
          S24: {
            type: 'structure',
            members: {
              position: {},
              clear: {
                shape: 'S26'
              },
              cancel: {
                shape: 'S26'
              },
              submit: {
                shape: 'S26'
              }
            }
          },
          S26: {
            type: 'structure',
            members: {
              excluded: {
                type: 'boolean'
              },
              children: {},
              position: {
                shape: 'S1g'
              }
            }
          },
          S29: {
            type: 'structure',
            required: ['appId', 'environmentName', 'id', 'name', 'formActionType', 'style', 'dataType', 'fields', 'sectionalElements', 'schemaVersion'],
            members: {
              appId: {},
              environmentName: {},
              id: {},
              name: {},
              formActionType: {},
              style: {
                shape: 'S20'
              },
              dataType: {
                shape: 'S1b'
              },
              fields: {
                shape: 'S1e'
              },
              sectionalElements: {
                shape: 'S22'
              },
              schemaVersion: {},
              tags: {
                shape: 'S11'
              },
              cta: {
                shape: 'S24'
              },
              labelDecorator: {}
            }
          },
          S2d: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                key: {},
                value: {
                  type: 'structure',
                  members: {
                    value: {},
                    children: {
                      shape: 'S2d'
                    }
                  }
                }
              }
            }
          },
          S2h: {
            type: 'structure',
            required: ['appId', 'environmentName', 'id', 'name', 'createdAt', 'values'],
            members: {
              appId: {},
              environmentName: {},
              id: {},
              name: {},
              createdAt: {
                shape: 'S17'
              },
              modifiedAt: {
                shape: 'S17'
              },
              values: {
                shape: 'S2d'
              },
              overrides: {
                shape: 'S2d'
              },
              tags: {
                shape: 'S11'
              }
            }
          },
          S2o: {
            type: 'string',
            sensitive: true
          },
          S32: {
            type: 'structure',
            required: ['id', 'appId', 'environmentName'],
            members: {
              id: {},
              appId: {},
              environmentName: {},
              renderConfig: {
                shape: 'S33'
              },
              genericDataSchema: {
                shape: 'S3d'
              },
              autoGenerateForms: {
                type: 'boolean'
              },
              features: {
                shape: 'S3v'
              },
              status: {},
              statusMessage: {},
              asset: {
                type: 'structure',
                members: {
                  downloadUrl: {}
                }
              },
              tags: {
                shape: 'S11'
              },
              createdAt: {
                shape: 'S17'
              },
              modifiedAt: {
                shape: 'S17'
              },
              dependencies: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    name: {},
                    supportedVersion: {},
                    isSemVer: {
                      type: 'boolean'
                    },
                    reason: {}
                  }
                }
              }
            }
          },
          S33: {
            type: 'structure',
            members: {
              react: {
                type: 'structure',
                members: {
                  module: {},
                  target: {},
                  script: {},
                  renderTypeDeclarations: {
                    type: 'boolean'
                  },
                  inlineSourceMap: {
                    type: 'boolean'
                  },
                  apiConfiguration: {
                    type: 'structure',
                    members: {
                      graphQLConfig: {
                        type: 'structure',
                        required: ['typesFilePath', 'queriesFilePath', 'mutationsFilePath', 'subscriptionsFilePath', 'fragmentsFilePath'],
                        members: {
                          typesFilePath: {},
                          queriesFilePath: {},
                          mutationsFilePath: {},
                          subscriptionsFilePath: {},
                          fragmentsFilePath: {}
                        }
                      },
                      dataStoreConfig: {
                        type: 'structure',
                        members: {}
                      },
                      noApiConfig: {
                        type: 'structure',
                        members: {}
                      }
                    },
                    union: true
                  },
                  dependencies: {
                    type: 'map',
                    key: {},
                    value: {}
                  }
                }
              }
            },
            union: true
          },
          S3d: {
            type: 'structure',
            required: ['dataSourceType', 'models', 'enums', 'nonModels'],
            members: {
              dataSourceType: {},
              models: {
                type: 'map',
                key: {},
                value: {
                  type: 'structure',
                  required: ['fields', 'primaryKeys'],
                  members: {
                    fields: {
                      type: 'map',
                      key: {},
                      value: {
                        shape: 'S3i'
                      }
                    },
                    isJoinTable: {
                      type: 'boolean'
                    },
                    primaryKeys: {
                      type: 'list',
                      member: {}
                    }
                  }
                }
              },
              enums: {
                type: 'map',
                key: {},
                value: {
                  type: 'structure',
                  required: ['values'],
                  members: {
                    values: {
                      type: 'list',
                      member: {}
                    }
                  }
                }
              },
              nonModels: {
                type: 'map',
                key: {},
                value: {
                  type: 'structure',
                  required: ['fields'],
                  members: {
                    fields: {
                      type: 'map',
                      key: {},
                      value: {
                        shape: 'S3i'
                      }
                    }
                  }
                }
              }
            }
          },
          S3i: {
            type: 'structure',
            required: ['dataType', 'dataTypeValue', 'required', 'readOnly', 'isArray'],
            members: {
              dataType: {},
              dataTypeValue: {},
              required: {
                type: 'boolean'
              },
              readOnly: {
                type: 'boolean'
              },
              isArray: {
                type: 'boolean'
              },
              relationship: {
                type: 'structure',
                required: ['type', 'relatedModelName'],
                members: {
                  type: {},
                  relatedModelName: {},
                  relatedModelFields: {
                    type: 'list',
                    member: {}
                  },
                  canUnlinkAssociatedModel: {
                    type: 'boolean'
                  },
                  relatedJoinFieldName: {},
                  relatedJoinTableName: {},
                  belongsToFieldOnRelatedModel: {},
                  associatedFields: {
                    type: 'list',
                    member: {}
                  },
                  isHasManyIndex: {
                    type: 'boolean'
                  }
                }
              }
            }
          },
          S3v: {
            type: 'structure',
            members: {
              isRelationshipSupported: {
                type: 'boolean'
              },
              isNonModelSupported: {
                type: 'boolean'
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=e9d8281dfdca47392f3092b8fbda0a3e27e2f5c0.js.map