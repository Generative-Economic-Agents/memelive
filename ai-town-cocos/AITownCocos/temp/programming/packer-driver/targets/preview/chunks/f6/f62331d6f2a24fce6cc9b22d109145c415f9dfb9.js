System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2021-04-20',
          endpointPrefix: 'identity-chime',
          protocol: 'rest-json',
          serviceFullName: 'Amazon Chime SDK Identity',
          serviceId: 'Chime SDK Identity',
          signatureVersion: 'v4',
          signingName: 'chime',
          uid: 'chime-sdk-identity-2021-04-20'
        },
        operations: {
          CreateAppInstance: {
            http: {
              requestUri: '/app-instances',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['Name', 'ClientRequestToken'],
              members: {
                Name: {
                  shape: 'S2'
                },
                Metadata: {
                  shape: 'S3'
                },
                ClientRequestToken: {
                  idempotencyToken: true
                },
                Tags: {
                  shape: 'S5'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AppInstanceArn: {}
              }
            }
          },
          CreateAppInstanceAdmin: {
            http: {
              requestUri: '/app-instances/{appInstanceArn}/admins',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['AppInstanceAdminArn', 'AppInstanceArn'],
              members: {
                AppInstanceAdminArn: {},
                AppInstanceArn: {
                  location: 'uri',
                  locationName: 'appInstanceArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AppInstanceAdmin: {
                  shape: 'Sd'
                },
                AppInstanceArn: {}
              }
            }
          },
          CreateAppInstanceBot: {
            http: {
              requestUri: '/app-instance-bots',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['AppInstanceArn', 'ClientRequestToken', 'Configuration'],
              members: {
                AppInstanceArn: {},
                Name: {
                  shape: 'Se'
                },
                Metadata: {
                  shape: 'S3'
                },
                ClientRequestToken: {
                  idempotencyToken: true
                },
                Tags: {
                  shape: 'S5'
                },
                Configuration: {
                  shape: 'Sg'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AppInstanceBotArn: {}
              }
            }
          },
          CreateAppInstanceUser: {
            http: {
              requestUri: '/app-instance-users',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['AppInstanceArn', 'AppInstanceUserId', 'Name', 'ClientRequestToken'],
              members: {
                AppInstanceArn: {},
                AppInstanceUserId: {
                  type: 'string',
                  sensitive: true
                },
                Name: {
                  shape: 'Ss'
                },
                Metadata: {
                  shape: 'S3'
                },
                ClientRequestToken: {
                  idempotencyToken: true
                },
                Tags: {
                  shape: 'S5'
                },
                ExpirationSettings: {
                  shape: 'St'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AppInstanceUserArn: {}
              }
            }
          },
          DeleteAppInstance: {
            http: {
              method: 'DELETE',
              requestUri: '/app-instances/{appInstanceArn}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['AppInstanceArn'],
              members: {
                AppInstanceArn: {
                  location: 'uri',
                  locationName: 'appInstanceArn'
                }
              }
            }
          },
          DeleteAppInstanceAdmin: {
            http: {
              method: 'DELETE',
              requestUri: '/app-instances/{appInstanceArn}/admins/{appInstanceAdminArn}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['AppInstanceAdminArn', 'AppInstanceArn'],
              members: {
                AppInstanceAdminArn: {
                  location: 'uri',
                  locationName: 'appInstanceAdminArn'
                },
                AppInstanceArn: {
                  location: 'uri',
                  locationName: 'appInstanceArn'
                }
              }
            }
          },
          DeleteAppInstanceBot: {
            http: {
              method: 'DELETE',
              requestUri: '/app-instance-bots/{appInstanceBotArn}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['AppInstanceBotArn'],
              members: {
                AppInstanceBotArn: {
                  location: 'uri',
                  locationName: 'appInstanceBotArn'
                }
              }
            }
          },
          DeleteAppInstanceUser: {
            http: {
              method: 'DELETE',
              requestUri: '/app-instance-users/{appInstanceUserArn}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['AppInstanceUserArn'],
              members: {
                AppInstanceUserArn: {
                  location: 'uri',
                  locationName: 'appInstanceUserArn'
                }
              }
            }
          },
          DeregisterAppInstanceUserEndpoint: {
            http: {
              method: 'DELETE',
              requestUri: '/app-instance-users/{appInstanceUserArn}/endpoints/{endpointId}',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['AppInstanceUserArn', 'EndpointId'],
              members: {
                AppInstanceUserArn: {
                  location: 'uri',
                  locationName: 'appInstanceUserArn'
                },
                EndpointId: {
                  location: 'uri',
                  locationName: 'endpointId'
                }
              }
            }
          },
          DescribeAppInstance: {
            http: {
              method: 'GET',
              requestUri: '/app-instances/{appInstanceArn}'
            },
            input: {
              type: 'structure',
              required: ['AppInstanceArn'],
              members: {
                AppInstanceArn: {
                  location: 'uri',
                  locationName: 'appInstanceArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AppInstance: {
                  type: 'structure',
                  members: {
                    AppInstanceArn: {},
                    Name: {
                      shape: 'S2'
                    },
                    CreatedTimestamp: {
                      type: 'timestamp'
                    },
                    LastUpdatedTimestamp: {
                      type: 'timestamp'
                    },
                    Metadata: {
                      shape: 'S3'
                    }
                  }
                }
              }
            }
          },
          DescribeAppInstanceAdmin: {
            http: {
              method: 'GET',
              requestUri: '/app-instances/{appInstanceArn}/admins/{appInstanceAdminArn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['AppInstanceAdminArn', 'AppInstanceArn'],
              members: {
                AppInstanceAdminArn: {
                  location: 'uri',
                  locationName: 'appInstanceAdminArn'
                },
                AppInstanceArn: {
                  location: 'uri',
                  locationName: 'appInstanceArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AppInstanceAdmin: {
                  type: 'structure',
                  members: {
                    Admin: {
                      shape: 'Sd'
                    },
                    AppInstanceArn: {},
                    CreatedTimestamp: {
                      type: 'timestamp'
                    }
                  }
                }
              }
            }
          },
          DescribeAppInstanceBot: {
            http: {
              method: 'GET',
              requestUri: '/app-instance-bots/{appInstanceBotArn}'
            },
            input: {
              type: 'structure',
              required: ['AppInstanceBotArn'],
              members: {
                AppInstanceBotArn: {
                  location: 'uri',
                  locationName: 'appInstanceBotArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AppInstanceBot: {
                  type: 'structure',
                  members: {
                    AppInstanceBotArn: {},
                    Name: {
                      shape: 'Se'
                    },
                    Configuration: {
                      shape: 'Sg'
                    },
                    CreatedTimestamp: {
                      type: 'timestamp'
                    },
                    LastUpdatedTimestamp: {
                      type: 'timestamp'
                    },
                    Metadata: {
                      shape: 'S3'
                    }
                  }
                }
              }
            }
          },
          DescribeAppInstanceUser: {
            http: {
              method: 'GET',
              requestUri: '/app-instance-users/{appInstanceUserArn}'
            },
            input: {
              type: 'structure',
              required: ['AppInstanceUserArn'],
              members: {
                AppInstanceUserArn: {
                  location: 'uri',
                  locationName: 'appInstanceUserArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AppInstanceUser: {
                  type: 'structure',
                  members: {
                    AppInstanceUserArn: {},
                    Name: {
                      shape: 'Ss'
                    },
                    Metadata: {
                      shape: 'S3'
                    },
                    CreatedTimestamp: {
                      type: 'timestamp'
                    },
                    LastUpdatedTimestamp: {
                      type: 'timestamp'
                    },
                    ExpirationSettings: {
                      shape: 'St'
                    }
                  }
                }
              }
            }
          },
          DescribeAppInstanceUserEndpoint: {
            http: {
              method: 'GET',
              requestUri: '/app-instance-users/{appInstanceUserArn}/endpoints/{endpointId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['AppInstanceUserArn', 'EndpointId'],
              members: {
                AppInstanceUserArn: {
                  location: 'uri',
                  locationName: 'appInstanceUserArn'
                },
                EndpointId: {
                  location: 'uri',
                  locationName: 'endpointId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AppInstanceUserEndpoint: {
                  type: 'structure',
                  members: {
                    AppInstanceUserArn: {},
                    EndpointId: {},
                    Name: {
                      shape: 'S1k'
                    },
                    Type: {},
                    ResourceArn: {},
                    EndpointAttributes: {
                      shape: 'S1m'
                    },
                    CreatedTimestamp: {
                      type: 'timestamp'
                    },
                    LastUpdatedTimestamp: {
                      type: 'timestamp'
                    },
                    AllowMessages: {},
                    EndpointState: {
                      shape: 'S1p'
                    }
                  }
                }
              }
            }
          },
          GetAppInstanceRetentionSettings: {
            http: {
              method: 'GET',
              requestUri: '/app-instances/{appInstanceArn}/retention-settings',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['AppInstanceArn'],
              members: {
                AppInstanceArn: {
                  location: 'uri',
                  locationName: 'appInstanceArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AppInstanceRetentionSettings: {
                  shape: 'S1u'
                },
                InitiateDeletionTimestamp: {
                  type: 'timestamp'
                }
              }
            }
          },
          ListAppInstanceAdmins: {
            http: {
              method: 'GET',
              requestUri: '/app-instances/{appInstanceArn}/admins',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['AppInstanceArn'],
              members: {
                AppInstanceArn: {
                  location: 'uri',
                  locationName: 'appInstanceArn'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'max-results',
                  type: 'integer'
                },
                NextToken: {
                  shape: 'S1z',
                  location: 'querystring',
                  locationName: 'next-token'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AppInstanceArn: {},
                AppInstanceAdmins: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Admin: {
                        shape: 'Sd'
                      }
                    }
                  }
                },
                NextToken: {
                  shape: 'S1z'
                }
              }
            }
          },
          ListAppInstanceBots: {
            http: {
              method: 'GET',
              requestUri: '/app-instance-bots'
            },
            input: {
              type: 'structure',
              required: ['AppInstanceArn'],
              members: {
                AppInstanceArn: {
                  location: 'querystring',
                  locationName: 'app-instance-arn'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'max-results',
                  type: 'integer'
                },
                NextToken: {
                  shape: 'S1z',
                  location: 'querystring',
                  locationName: 'next-token'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AppInstanceArn: {},
                AppInstanceBots: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      AppInstanceBotArn: {},
                      Name: {
                        shape: 'Se'
                      },
                      Metadata: {
                        shape: 'S3'
                      }
                    }
                  }
                },
                NextToken: {
                  shape: 'S1z'
                }
              }
            }
          },
          ListAppInstanceUserEndpoints: {
            http: {
              method: 'GET',
              requestUri: '/app-instance-users/{appInstanceUserArn}/endpoints',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['AppInstanceUserArn'],
              members: {
                AppInstanceUserArn: {
                  shape: 'S28',
                  location: 'uri',
                  locationName: 'appInstanceUserArn'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'max-results',
                  type: 'integer'
                },
                NextToken: {
                  shape: 'S1z',
                  location: 'querystring',
                  locationName: 'next-token'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AppInstanceUserEndpoints: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      AppInstanceUserArn: {},
                      EndpointId: {},
                      Name: {
                        shape: 'S1k'
                      },
                      Type: {},
                      AllowMessages: {},
                      EndpointState: {
                        shape: 'S1p'
                      }
                    }
                  }
                },
                NextToken: {
                  shape: 'S1z'
                }
              }
            }
          },
          ListAppInstanceUsers: {
            http: {
              method: 'GET',
              requestUri: '/app-instance-users'
            },
            input: {
              type: 'structure',
              required: ['AppInstanceArn'],
              members: {
                AppInstanceArn: {
                  location: 'querystring',
                  locationName: 'app-instance-arn'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'max-results',
                  type: 'integer'
                },
                NextToken: {
                  shape: 'S1z',
                  location: 'querystring',
                  locationName: 'next-token'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AppInstanceArn: {},
                AppInstanceUsers: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      AppInstanceUserArn: {},
                      Name: {
                        shape: 'Ss'
                      },
                      Metadata: {
                        shape: 'S3'
                      }
                    }
                  }
                },
                NextToken: {
                  shape: 'S1z'
                }
              }
            }
          },
          ListAppInstances: {
            http: {
              method: 'GET',
              requestUri: '/app-instances'
            },
            input: {
              type: 'structure',
              members: {
                MaxResults: {
                  location: 'querystring',
                  locationName: 'max-results',
                  type: 'integer'
                },
                NextToken: {
                  shape: 'S1z',
                  location: 'querystring',
                  locationName: 'next-token'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AppInstances: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      AppInstanceArn: {},
                      Name: {
                        shape: 'S2'
                      },
                      Metadata: {
                        shape: 'S3'
                      }
                    }
                  }
                },
                NextToken: {
                  shape: 'S1z'
                }
              }
            }
          },
          ListTagsForResource: {
            http: {
              method: 'GET',
              requestUri: '/tags',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ResourceARN'],
              members: {
                ResourceARN: {
                  location: 'querystring',
                  locationName: 'arn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Tags: {
                  shape: 'S5'
                }
              }
            }
          },
          PutAppInstanceRetentionSettings: {
            http: {
              method: 'PUT',
              requestUri: '/app-instances/{appInstanceArn}/retention-settings',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['AppInstanceArn', 'AppInstanceRetentionSettings'],
              members: {
                AppInstanceArn: {
                  location: 'uri',
                  locationName: 'appInstanceArn'
                },
                AppInstanceRetentionSettings: {
                  shape: 'S1u'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AppInstanceRetentionSettings: {
                  shape: 'S1u'
                },
                InitiateDeletionTimestamp: {
                  type: 'timestamp'
                }
              }
            }
          },
          PutAppInstanceUserExpirationSettings: {
            http: {
              method: 'PUT',
              requestUri: '/app-instance-users/{appInstanceUserArn}/expiration-settings',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['AppInstanceUserArn'],
              members: {
                AppInstanceUserArn: {
                  location: 'uri',
                  locationName: 'appInstanceUserArn'
                },
                ExpirationSettings: {
                  shape: 'St'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AppInstanceUserArn: {},
                ExpirationSettings: {
                  shape: 'St'
                }
              }
            }
          },
          RegisterAppInstanceUserEndpoint: {
            http: {
              requestUri: '/app-instance-users/{appInstanceUserArn}/endpoints',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['AppInstanceUserArn', 'Type', 'ResourceArn', 'EndpointAttributes', 'ClientRequestToken'],
              members: {
                AppInstanceUserArn: {
                  shape: 'S28',
                  location: 'uri',
                  locationName: 'appInstanceUserArn'
                },
                Name: {
                  shape: 'S1k'
                },
                Type: {},
                ResourceArn: {},
                EndpointAttributes: {
                  shape: 'S1m'
                },
                ClientRequestToken: {
                  idempotencyToken: true
                },
                AllowMessages: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                AppInstanceUserArn: {},
                EndpointId: {}
              }
            }
          },
          TagResource: {
            http: {
              requestUri: '/tags?operation=tag-resource',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['ResourceARN', 'Tags'],
              members: {
                ResourceARN: {},
                Tags: {
                  shape: 'S5'
                }
              }
            }
          },
          UntagResource: {
            http: {
              requestUri: '/tags?operation=untag-resource',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['ResourceARN', 'TagKeys'],
              members: {
                ResourceARN: {},
                TagKeys: {
                  type: 'list',
                  member: {
                    shape: 'S7'
                  }
                }
              }
            }
          },
          UpdateAppInstance: {
            http: {
              method: 'PUT',
              requestUri: '/app-instances/{appInstanceArn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['AppInstanceArn', 'Name', 'Metadata'],
              members: {
                AppInstanceArn: {
                  location: 'uri',
                  locationName: 'appInstanceArn'
                },
                Name: {
                  shape: 'S2'
                },
                Metadata: {
                  shape: 'S3'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AppInstanceArn: {}
              }
            }
          },
          UpdateAppInstanceBot: {
            http: {
              method: 'PUT',
              requestUri: '/app-instance-bots/{appInstanceBotArn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['AppInstanceBotArn', 'Name', 'Metadata'],
              members: {
                AppInstanceBotArn: {
                  location: 'uri',
                  locationName: 'appInstanceBotArn'
                },
                Name: {
                  shape: 'Se'
                },
                Metadata: {
                  shape: 'S3'
                },
                Configuration: {
                  shape: 'Sg'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AppInstanceBotArn: {}
              }
            }
          },
          UpdateAppInstanceUser: {
            http: {
              method: 'PUT',
              requestUri: '/app-instance-users/{appInstanceUserArn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['AppInstanceUserArn', 'Name', 'Metadata'],
              members: {
                AppInstanceUserArn: {
                  location: 'uri',
                  locationName: 'appInstanceUserArn'
                },
                Name: {
                  shape: 'Ss'
                },
                Metadata: {
                  shape: 'S3'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AppInstanceUserArn: {}
              }
            }
          },
          UpdateAppInstanceUserEndpoint: {
            http: {
              method: 'PUT',
              requestUri: '/app-instance-users/{appInstanceUserArn}/endpoints/{endpointId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['AppInstanceUserArn', 'EndpointId'],
              members: {
                AppInstanceUserArn: {
                  location: 'uri',
                  locationName: 'appInstanceUserArn'
                },
                EndpointId: {
                  location: 'uri',
                  locationName: 'endpointId'
                },
                Name: {
                  shape: 'S1k'
                },
                AllowMessages: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                AppInstanceUserArn: {},
                EndpointId: {}
              }
            }
          }
        },
        shapes: {
          S2: {
            type: 'string',
            sensitive: true
          },
          S3: {
            type: 'string',
            sensitive: true
          },
          S5: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Key', 'Value'],
              members: {
                Key: {
                  shape: 'S7'
                },
                Value: {
                  type: 'string',
                  sensitive: true
                }
              }
            }
          },
          S7: {
            type: 'string',
            sensitive: true
          },
          Sd: {
            type: 'structure',
            members: {
              Arn: {},
              Name: {
                shape: 'Se'
              }
            }
          },
          Se: {
            type: 'string',
            sensitive: true
          },
          Sg: {
            type: 'structure',
            required: ['Lex'],
            members: {
              Lex: {
                type: 'structure',
                required: ['LexBotAliasArn', 'LocaleId'],
                members: {
                  RespondsTo: {},
                  InvokedBy: {
                    type: 'structure',
                    required: ['StandardMessages', 'TargetedMessages'],
                    members: {
                      StandardMessages: {},
                      TargetedMessages: {}
                    }
                  },
                  LexBotAliasArn: {},
                  LocaleId: {},
                  WelcomeIntent: {}
                }
              }
            }
          },
          Ss: {
            type: 'string',
            sensitive: true
          },
          St: {
            type: 'structure',
            required: ['ExpirationDays', 'ExpirationCriterion'],
            members: {
              ExpirationDays: {
                type: 'integer'
              },
              ExpirationCriterion: {}
            }
          },
          S1k: {
            type: 'string',
            sensitive: true
          },
          S1m: {
            type: 'structure',
            required: ['DeviceToken'],
            members: {
              DeviceToken: {
                shape: 'S1n'
              },
              VoipDeviceToken: {
                shape: 'S1n'
              }
            }
          },
          S1n: {
            type: 'string',
            sensitive: true
          },
          S1p: {
            type: 'structure',
            required: ['Status'],
            members: {
              Status: {},
              StatusReason: {}
            }
          },
          S1u: {
            type: 'structure',
            members: {
              ChannelRetentionSettings: {
                type: 'structure',
                members: {
                  RetentionDays: {
                    type: 'integer'
                  }
                }
              }
            }
          },
          S1z: {
            type: 'string',
            sensitive: true
          },
          S28: {
            type: 'string',
            sensitive: true
          }
        }
      });
    }
  };
});
//# sourceMappingURL=f62331d6f2a24fce6cc9b22d109145c415f9dfb9.js.map