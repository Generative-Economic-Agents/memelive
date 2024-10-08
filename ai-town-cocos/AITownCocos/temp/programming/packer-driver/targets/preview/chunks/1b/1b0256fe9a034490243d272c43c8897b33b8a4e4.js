System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2023-05-19',
          endpointPrefix: 'appfabric',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceFullName: 'AppFabric',
          serviceId: 'AppFabric',
          signatureVersion: 'v4',
          signingName: 'appfabric',
          uid: 'appfabric-2023-05-19'
        },
        operations: {
          BatchGetUserAccessTasks: {
            http: {
              requestUri: '/useraccess/batchget',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['appBundleIdentifier', 'taskIdList'],
              members: {
                appBundleIdentifier: {},
                taskIdList: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                userAccessResultsList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      app: {},
                      tenantId: {},
                      tenantDisplayName: {},
                      taskId: {},
                      resultStatus: {},
                      email: {
                        shape: 'Sc'
                      },
                      userId: {
                        shape: 'Sd'
                      },
                      userFullName: {
                        shape: 'Sd'
                      },
                      userFirstName: {
                        shape: 'Sd'
                      },
                      userLastName: {
                        shape: 'Sd'
                      },
                      userStatus: {},
                      taskError: {
                        shape: 'Sf'
                      }
                    }
                  }
                }
              }
            }
          },
          ConnectAppAuthorization: {
            http: {
              requestUri: '/appbundles/{appBundleIdentifier}/appauthorizations/{appAuthorizationIdentifier}/connect',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['appBundleIdentifier', 'appAuthorizationIdentifier'],
              members: {
                appBundleIdentifier: {
                  location: 'uri',
                  locationName: 'appBundleIdentifier'
                },
                appAuthorizationIdentifier: {
                  location: 'uri',
                  locationName: 'appAuthorizationIdentifier'
                },
                authRequest: {
                  type: 'structure',
                  required: ['redirectUri', 'code'],
                  members: {
                    redirectUri: {},
                    code: {
                      shape: 'Sd'
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              required: ['appAuthorizationSummary'],
              members: {
                appAuthorizationSummary: {
                  shape: 'Sk'
                }
              }
            }
          },
          CreateAppAuthorization: {
            http: {
              requestUri: '/appbundles/{appBundleIdentifier}/appauthorizations',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['appBundleIdentifier', 'app', 'credential', 'tenant', 'authType'],
              members: {
                appBundleIdentifier: {
                  location: 'uri',
                  locationName: 'appBundleIdentifier'
                },
                app: {},
                credential: {
                  shape: 'Sq'
                },
                tenant: {
                  shape: 'Sm'
                },
                authType: {},
                clientToken: {
                  idempotencyToken: true
                },
                tags: {
                  shape: 'Su'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['appAuthorization'],
              members: {
                appAuthorization: {
                  shape: 'Sz'
                }
              }
            },
            idempotent: true
          },
          CreateAppBundle: {
            http: {
              requestUri: '/appbundles',
              responseCode: 201
            },
            input: {
              type: 'structure',
              members: {
                clientToken: {
                  idempotencyToken: true
                },
                customerManagedKeyIdentifier: {},
                tags: {
                  shape: 'Su'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['appBundle'],
              members: {
                appBundle: {
                  shape: 'S13'
                }
              }
            },
            idempotent: true
          },
          CreateIngestion: {
            http: {
              requestUri: '/appbundles/{appBundleIdentifier}/ingestions',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['appBundleIdentifier', 'app', 'tenantId', 'ingestionType'],
              members: {
                appBundleIdentifier: {
                  location: 'uri',
                  locationName: 'appBundleIdentifier'
                },
                app: {},
                tenantId: {},
                ingestionType: {},
                clientToken: {
                  idempotencyToken: true
                },
                tags: {
                  shape: 'Su'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['ingestion'],
              members: {
                ingestion: {
                  shape: 'S17'
                }
              }
            },
            idempotent: true
          },
          CreateIngestionDestination: {
            http: {
              requestUri: '/appbundles/{appBundleIdentifier}/ingestions/{ingestionIdentifier}/ingestiondestinations',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['appBundleIdentifier', 'ingestionIdentifier', 'processingConfiguration', 'destinationConfiguration'],
              members: {
                appBundleIdentifier: {
                  location: 'uri',
                  locationName: 'appBundleIdentifier'
                },
                ingestionIdentifier: {
                  location: 'uri',
                  locationName: 'ingestionIdentifier'
                },
                processingConfiguration: {
                  shape: 'S1a'
                },
                destinationConfiguration: {
                  shape: 'S1e'
                },
                clientToken: {
                  idempotencyToken: true
                },
                tags: {
                  shape: 'Su'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['ingestionDestination'],
              members: {
                ingestionDestination: {
                  shape: 'S1n'
                }
              }
            },
            idempotent: true
          },
          DeleteAppAuthorization: {
            http: {
              method: 'DELETE',
              requestUri: '/appbundles/{appBundleIdentifier}/appauthorizations/{appAuthorizationIdentifier}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['appBundleIdentifier', 'appAuthorizationIdentifier'],
              members: {
                appBundleIdentifier: {
                  location: 'uri',
                  locationName: 'appBundleIdentifier'
                },
                appAuthorizationIdentifier: {
                  location: 'uri',
                  locationName: 'appAuthorizationIdentifier'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeleteAppBundle: {
            http: {
              method: 'DELETE',
              requestUri: '/appbundles/{appBundleIdentifier}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['appBundleIdentifier'],
              members: {
                appBundleIdentifier: {
                  location: 'uri',
                  locationName: 'appBundleIdentifier'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeleteIngestion: {
            http: {
              method: 'DELETE',
              requestUri: '/appbundles/{appBundleIdentifier}/ingestions/{ingestionIdentifier}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['appBundleIdentifier', 'ingestionIdentifier'],
              members: {
                appBundleIdentifier: {
                  location: 'uri',
                  locationName: 'appBundleIdentifier'
                },
                ingestionIdentifier: {
                  location: 'uri',
                  locationName: 'ingestionIdentifier'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeleteIngestionDestination: {
            http: {
              method: 'DELETE',
              requestUri: '/appbundles/{appBundleIdentifier}/ingestions/{ingestionIdentifier}/ingestiondestinations/{ingestionDestinationIdentifier}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['appBundleIdentifier', 'ingestionIdentifier', 'ingestionDestinationIdentifier'],
              members: {
                appBundleIdentifier: {
                  location: 'uri',
                  locationName: 'appBundleIdentifier'
                },
                ingestionIdentifier: {
                  location: 'uri',
                  locationName: 'ingestionIdentifier'
                },
                ingestionDestinationIdentifier: {
                  location: 'uri',
                  locationName: 'ingestionDestinationIdentifier'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          GetAppAuthorization: {
            http: {
              method: 'GET',
              requestUri: '/appbundles/{appBundleIdentifier}/appauthorizations/{appAuthorizationIdentifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['appBundleIdentifier', 'appAuthorizationIdentifier'],
              members: {
                appBundleIdentifier: {
                  location: 'uri',
                  locationName: 'appBundleIdentifier'
                },
                appAuthorizationIdentifier: {
                  location: 'uri',
                  locationName: 'appAuthorizationIdentifier'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['appAuthorization'],
              members: {
                appAuthorization: {
                  shape: 'Sz'
                }
              }
            }
          },
          GetAppBundle: {
            http: {
              method: 'GET',
              requestUri: '/appbundles/{appBundleIdentifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['appBundleIdentifier'],
              members: {
                appBundleIdentifier: {
                  location: 'uri',
                  locationName: 'appBundleIdentifier'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['appBundle'],
              members: {
                appBundle: {
                  shape: 'S13'
                }
              }
            }
          },
          GetIngestion: {
            http: {
              method: 'GET',
              requestUri: '/appbundles/{appBundleIdentifier}/ingestions/{ingestionIdentifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['appBundleIdentifier', 'ingestionIdentifier'],
              members: {
                appBundleIdentifier: {
                  location: 'uri',
                  locationName: 'appBundleIdentifier'
                },
                ingestionIdentifier: {
                  location: 'uri',
                  locationName: 'ingestionIdentifier'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['ingestion'],
              members: {
                ingestion: {
                  shape: 'S17'
                }
              }
            }
          },
          GetIngestionDestination: {
            http: {
              method: 'GET',
              requestUri: '/appbundles/{appBundleIdentifier}/ingestions/{ingestionIdentifier}/ingestiondestinations/{ingestionDestinationIdentifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['appBundleIdentifier', 'ingestionIdentifier', 'ingestionDestinationIdentifier'],
              members: {
                appBundleIdentifier: {
                  location: 'uri',
                  locationName: 'appBundleIdentifier'
                },
                ingestionIdentifier: {
                  location: 'uri',
                  locationName: 'ingestionIdentifier'
                },
                ingestionDestinationIdentifier: {
                  location: 'uri',
                  locationName: 'ingestionDestinationIdentifier'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['ingestionDestination'],
              members: {
                ingestionDestination: {
                  shape: 'S1n'
                }
              }
            }
          },
          ListAppAuthorizations: {
            http: {
              method: 'GET',
              requestUri: '/appbundles/{appBundleIdentifier}/appauthorizations',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['appBundleIdentifier'],
              members: {
                appBundleIdentifier: {
                  location: 'uri',
                  locationName: 'appBundleIdentifier'
                },
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
              required: ['appAuthorizationSummaryList'],
              members: {
                appAuthorizationSummaryList: {
                  type: 'list',
                  member: {
                    shape: 'Sk'
                  }
                },
                nextToken: {}
              }
            }
          },
          ListAppBundles: {
            http: {
              method: 'GET',
              requestUri: '/appbundles',
              responseCode: 200
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
              required: ['appBundleSummaryList'],
              members: {
                appBundleSummaryList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['arn'],
                    members: {
                      arn: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListIngestionDestinations: {
            http: {
              method: 'GET',
              requestUri: '/appbundles/{appBundleIdentifier}/ingestions/{ingestionIdentifier}/ingestiondestinations',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['appBundleIdentifier', 'ingestionIdentifier'],
              members: {
                appBundleIdentifier: {
                  location: 'uri',
                  locationName: 'appBundleIdentifier'
                },
                ingestionIdentifier: {
                  location: 'uri',
                  locationName: 'ingestionIdentifier'
                },
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
              required: ['ingestionDestinations'],
              members: {
                ingestionDestinations: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['arn'],
                    members: {
                      arn: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListIngestions: {
            http: {
              method: 'GET',
              requestUri: '/appbundles/{appBundleIdentifier}/ingestions',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['appBundleIdentifier'],
              members: {
                appBundleIdentifier: {
                  location: 'uri',
                  locationName: 'appBundleIdentifier'
                },
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
              required: ['ingestions'],
              members: {
                ingestions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['arn', 'app', 'tenantId', 'state'],
                    members: {
                      arn: {},
                      app: {},
                      tenantId: {},
                      state: {}
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
              members: {
                tags: {
                  shape: 'Su'
                }
              }
            }
          },
          StartIngestion: {
            http: {
              requestUri: '/appbundles/{appBundleIdentifier}/ingestions/{ingestionIdentifier}/start',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ingestionIdentifier', 'appBundleIdentifier'],
              members: {
                ingestionIdentifier: {
                  location: 'uri',
                  locationName: 'ingestionIdentifier'
                },
                appBundleIdentifier: {
                  location: 'uri',
                  locationName: 'appBundleIdentifier'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          StartUserAccessTasks: {
            http: {
              requestUri: '/useraccess/start',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['appBundleIdentifier', 'email'],
              members: {
                appBundleIdentifier: {},
                email: {
                  shape: 'Sc'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                userAccessTasksList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['app', 'tenantId'],
                    members: {
                      app: {},
                      tenantId: {},
                      taskId: {},
                      error: {
                        shape: 'Sf'
                      }
                    }
                  }
                }
              }
            }
          },
          StopIngestion: {
            http: {
              requestUri: '/appbundles/{appBundleIdentifier}/ingestions/{ingestionIdentifier}/stop',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ingestionIdentifier', 'appBundleIdentifier'],
              members: {
                ingestionIdentifier: {
                  location: 'uri',
                  locationName: 'ingestionIdentifier'
                },
                appBundleIdentifier: {
                  location: 'uri',
                  locationName: 'appBundleIdentifier'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
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
                  shape: 'Su'
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
          UpdateAppAuthorization: {
            http: {
              method: 'PATCH',
              requestUri: '/appbundles/{appBundleIdentifier}/appauthorizations/{appAuthorizationIdentifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['appBundleIdentifier', 'appAuthorizationIdentifier'],
              members: {
                appBundleIdentifier: {
                  location: 'uri',
                  locationName: 'appBundleIdentifier'
                },
                appAuthorizationIdentifier: {
                  location: 'uri',
                  locationName: 'appAuthorizationIdentifier'
                },
                credential: {
                  shape: 'Sq'
                },
                tenant: {
                  shape: 'Sm'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['appAuthorization'],
              members: {
                appAuthorization: {
                  shape: 'Sz'
                }
              }
            }
          },
          UpdateIngestionDestination: {
            http: {
              method: 'PATCH',
              requestUri: '/appbundles/{appBundleIdentifier}/ingestions/{ingestionIdentifier}/ingestiondestinations/{ingestionDestinationIdentifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['appBundleIdentifier', 'ingestionIdentifier', 'ingestionDestinationIdentifier', 'destinationConfiguration'],
              members: {
                appBundleIdentifier: {
                  location: 'uri',
                  locationName: 'appBundleIdentifier'
                },
                ingestionIdentifier: {
                  location: 'uri',
                  locationName: 'ingestionIdentifier'
                },
                ingestionDestinationIdentifier: {
                  location: 'uri',
                  locationName: 'ingestionDestinationIdentifier'
                },
                destinationConfiguration: {
                  shape: 'S1e'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['ingestionDestination'],
              members: {
                ingestionDestination: {
                  shape: 'S1n'
                }
              }
            }
          }
        },
        shapes: {
          Sc: {
            type: 'string',
            sensitive: true
          },
          Sd: {
            type: 'string',
            sensitive: true
          },
          Sf: {
            type: 'structure',
            members: {
              errorCode: {},
              errorMessage: {}
            }
          },
          Sk: {
            type: 'structure',
            required: ['appAuthorizationArn', 'appBundleArn', 'app', 'tenant', 'status', 'updatedAt'],
            members: {
              appAuthorizationArn: {},
              appBundleArn: {},
              app: {},
              tenant: {
                shape: 'Sm'
              },
              status: {},
              updatedAt: {
                shape: 'So'
              }
            }
          },
          Sm: {
            type: 'structure',
            required: ['tenantIdentifier', 'tenantDisplayName'],
            members: {
              tenantIdentifier: {},
              tenantDisplayName: {}
            }
          },
          So: {
            type: 'timestamp',
            timestampFormat: 'iso8601'
          },
          Sq: {
            type: 'structure',
            members: {
              oauth2Credential: {
                type: 'structure',
                required: ['clientId', 'clientSecret'],
                members: {
                  clientId: {},
                  clientSecret: {
                    shape: 'Sd'
                  }
                }
              },
              apiKeyCredential: {
                type: 'structure',
                required: ['apiKey'],
                members: {
                  apiKey: {
                    shape: 'Sd'
                  }
                }
              }
            },
            union: true
          },
          Su: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['key', 'value'],
              members: {
                key: {},
                value: {}
              }
            }
          },
          Sz: {
            type: 'structure',
            required: ['appAuthorizationArn', 'appBundleArn', 'app', 'tenant', 'authType', 'status', 'createdAt', 'updatedAt'],
            members: {
              appAuthorizationArn: {},
              appBundleArn: {},
              app: {},
              tenant: {
                shape: 'Sm'
              },
              authType: {},
              status: {},
              createdAt: {
                shape: 'So'
              },
              updatedAt: {
                shape: 'So'
              },
              persona: {},
              authUrl: {}
            }
          },
          S13: {
            type: 'structure',
            required: ['arn'],
            members: {
              arn: {},
              customerManagedKeyArn: {}
            }
          },
          S17: {
            type: 'structure',
            required: ['arn', 'appBundleArn', 'app', 'tenantId', 'createdAt', 'updatedAt', 'state', 'ingestionType'],
            members: {
              arn: {},
              appBundleArn: {},
              app: {},
              tenantId: {},
              createdAt: {
                shape: 'So'
              },
              updatedAt: {
                shape: 'So'
              },
              state: {},
              ingestionType: {}
            }
          },
          S1a: {
            type: 'structure',
            members: {
              auditLog: {
                type: 'structure',
                required: ['schema', 'format'],
                members: {
                  schema: {},
                  format: {}
                }
              }
            },
            union: true
          },
          S1e: {
            type: 'structure',
            members: {
              auditLog: {
                type: 'structure',
                required: ['destination'],
                members: {
                  destination: {
                    type: 'structure',
                    members: {
                      s3Bucket: {
                        type: 'structure',
                        required: ['bucketName'],
                        members: {
                          bucketName: {},
                          prefix: {}
                        }
                      },
                      firehoseStream: {
                        type: 'structure',
                        required: ['streamName'],
                        members: {
                          streamName: {}
                        }
                      }
                    },
                    union: true
                  }
                }
              }
            },
            union: true
          },
          S1n: {
            type: 'structure',
            required: ['arn', 'ingestionArn', 'processingConfiguration', 'destinationConfiguration'],
            members: {
              arn: {},
              ingestionArn: {},
              processingConfiguration: {
                shape: 'S1a'
              },
              destinationConfiguration: {
                shape: 'S1e'
              },
              status: {},
              statusReason: {},
              createdAt: {
                shape: 'So'
              },
              updatedAt: {
                shape: 'So'
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=1b0256fe9a034490243d272c43c8897b33b8a4e4.js.map