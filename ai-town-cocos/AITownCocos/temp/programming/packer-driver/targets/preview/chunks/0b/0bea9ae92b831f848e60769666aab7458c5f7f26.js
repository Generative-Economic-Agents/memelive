System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2018-05-10',
          endpointPrefix: 'securitylake',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceFullName: 'Amazon Security Lake',
          serviceId: 'SecurityLake',
          signatureVersion: 'v4',
          signingName: 'securitylake',
          uid: 'securitylake-2018-05-10'
        },
        operations: {
          CreateAwsLogSource: {
            http: {
              requestUri: '/v1/datalake/logsources/aws',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['sources'],
              members: {
                sources: {
                  shape: 'S2'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                failed: {
                  shape: 'S4'
                }
              }
            }
          },
          CreateCustomLogSource: {
            http: {
              requestUri: '/v1/datalake/logsources/custom',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['configuration', 'sourceName'],
              members: {
                configuration: {
                  type: 'structure',
                  required: ['crawlerConfiguration', 'providerIdentity'],
                  members: {
                    crawlerConfiguration: {
                      type: 'structure',
                      required: ['roleArn'],
                      members: {
                        roleArn: {}
                      }
                    },
                    providerIdentity: {
                      shape: 'Sf'
                    }
                  }
                },
                eventClasses: {
                  shape: 'Si'
                },
                sourceName: {},
                sourceVersion: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                source: {
                  shape: 'Sn'
                }
              }
            },
            idempotent: true
          },
          CreateDataLake: {
            http: {
              requestUri: '/v1/datalake',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['configurations', 'metaStoreManagerRoleArn'],
              members: {
                configurations: {
                  shape: 'St'
                },
                metaStoreManagerRoleArn: {},
                tags: {
                  shape: 'S15'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                dataLakes: {
                  shape: 'S1a'
                }
              }
            }
          },
          CreateDataLakeExceptionSubscription: {
            http: {
              requestUri: '/v1/datalake/exceptions/subscription',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['notificationEndpoint', 'subscriptionProtocol'],
              members: {
                exceptionTimeToLive: {
                  type: 'long'
                },
                notificationEndpoint: {},
                subscriptionProtocol: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          CreateDataLakeOrganizationConfiguration: {
            http: {
              requestUri: '/v1/datalake/organization/configuration',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                autoEnableNewAccount: {
                  shape: 'S1m'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          CreateSubscriber: {
            http: {
              requestUri: '/v1/subscribers',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['sources', 'subscriberIdentity', 'subscriberName'],
              members: {
                accessTypes: {
                  shape: 'S1s'
                },
                sources: {
                  shape: 'S1u'
                },
                subscriberDescription: {},
                subscriberIdentity: {
                  shape: 'Sf'
                },
                subscriberName: {},
                tags: {
                  shape: 'S15'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                subscriber: {
                  shape: 'S1z'
                }
              }
            }
          },
          CreateSubscriberNotification: {
            http: {
              requestUri: '/v1/subscribers/{subscriberId}/notification',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['configuration', 'subscriberId'],
              members: {
                configuration: {
                  shape: 'S26'
                },
                subscriberId: {
                  location: 'uri',
                  locationName: 'subscriberId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                subscriberEndpoint: {}
              }
            }
          },
          DeleteAwsLogSource: {
            http: {
              requestUri: '/v1/datalake/logsources/aws/delete',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['sources'],
              members: {
                sources: {
                  shape: 'S2'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                failed: {
                  shape: 'S4'
                }
              }
            }
          },
          DeleteCustomLogSource: {
            http: {
              method: 'DELETE',
              requestUri: '/v1/datalake/logsources/custom/{sourceName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['sourceName'],
              members: {
                sourceName: {
                  location: 'uri',
                  locationName: 'sourceName'
                },
                sourceVersion: {
                  location: 'querystring',
                  locationName: 'sourceVersion'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeleteDataLake: {
            http: {
              requestUri: '/v1/datalake/delete',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['regions'],
              members: {
                regions: {
                  shape: 'S6'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeleteDataLakeExceptionSubscription: {
            http: {
              method: 'DELETE',
              requestUri: '/v1/datalake/exceptions/subscription',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeleteDataLakeOrganizationConfiguration: {
            http: {
              requestUri: '/v1/datalake/organization/configuration/delete',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                autoEnableNewAccount: {
                  shape: 'S1m'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteSubscriber: {
            http: {
              method: 'DELETE',
              requestUri: '/v1/subscribers/{subscriberId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['subscriberId'],
              members: {
                subscriberId: {
                  location: 'uri',
                  locationName: 'subscriberId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeleteSubscriberNotification: {
            http: {
              method: 'DELETE',
              requestUri: '/v1/subscribers/{subscriberId}/notification',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['subscriberId'],
              members: {
                subscriberId: {
                  location: 'uri',
                  locationName: 'subscriberId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeregisterDataLakeDelegatedAdministrator: {
            http: {
              method: 'DELETE',
              requestUri: '/v1/datalake/delegate',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          GetDataLakeExceptionSubscription: {
            http: {
              method: 'GET',
              requestUri: '/v1/datalake/exceptions/subscription',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {
                exceptionTimeToLive: {
                  type: 'long'
                },
                notificationEndpoint: {},
                subscriptionProtocol: {}
              }
            }
          },
          GetDataLakeOrganizationConfiguration: {
            http: {
              method: 'GET',
              requestUri: '/v1/datalake/organization/configuration',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {
                autoEnableNewAccount: {
                  shape: 'S1m'
                }
              }
            }
          },
          GetDataLakeSources: {
            http: {
              requestUri: '/v1/datalake/sources',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                accounts: {
                  shape: 'S4'
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
                dataLakeArn: {},
                dataLakeSources: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      account: {},
                      eventClasses: {
                        shape: 'Si'
                      },
                      sourceName: {},
                      sourceStatuses: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            resource: {},
                            status: {}
                          }
                        }
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          GetSubscriber: {
            http: {
              method: 'GET',
              requestUri: '/v1/subscribers/{subscriberId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['subscriberId'],
              members: {
                subscriberId: {
                  location: 'uri',
                  locationName: 'subscriberId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                subscriber: {
                  shape: 'S1z'
                }
              }
            }
          },
          ListDataLakeExceptions: {
            http: {
              requestUri: '/v1/datalake/exceptions',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                maxResults: {
                  type: 'integer'
                },
                nextToken: {},
                regions: {
                  shape: 'S6'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                exceptions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      exception: {},
                      region: {},
                      remediation: {},
                      timestamp: {
                        shape: 'S20'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListDataLakes: {
            http: {
              method: 'GET',
              requestUri: '/v1/datalakes',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                regions: {
                  shape: 'S6',
                  location: 'querystring',
                  locationName: 'regions'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                dataLakes: {
                  shape: 'S1a'
                }
              }
            }
          },
          ListLogSources: {
            http: {
              requestUri: '/v1/datalake/logsources/list',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                accounts: {
                  shape: 'S4'
                },
                maxResults: {
                  type: 'integer'
                },
                nextToken: {},
                regions: {
                  shape: 'S6'
                },
                sources: {
                  shape: 'S1u'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                nextToken: {},
                sources: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      account: {},
                      region: {},
                      sources: {
                        shape: 'S1u'
                      }
                    }
                  }
                }
              }
            }
          },
          ListSubscribers: {
            http: {
              method: 'GET',
              requestUri: '/v1/subscribers',
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
              members: {
                nextToken: {},
                subscribers: {
                  type: 'list',
                  member: {
                    shape: 'S1z'
                  }
                }
              }
            }
          },
          ListTagsForResource: {
            http: {
              method: 'GET',
              requestUri: '/v1/tags/{resourceArn}',
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
                  shape: 'S15'
                }
              }
            }
          },
          RegisterDataLakeDelegatedAdministrator: {
            http: {
              requestUri: '/v1/datalake/delegate',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['accountId'],
              members: {
                accountId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          TagResource: {
            http: {
              requestUri: '/v1/tags/{resourceArn}',
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
                  shape: 'S15'
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
              requestUri: '/v1/tags/{resourceArn}',
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
          UpdateDataLake: {
            http: {
              method: 'PUT',
              requestUri: '/v1/datalake',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['configurations'],
              members: {
                configurations: {
                  shape: 'St'
                },
                metaStoreManagerRoleArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                dataLakes: {
                  shape: 'S1a'
                }
              }
            },
            idempotent: true
          },
          UpdateDataLakeExceptionSubscription: {
            http: {
              method: 'PUT',
              requestUri: '/v1/datalake/exceptions/subscription',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['notificationEndpoint', 'subscriptionProtocol'],
              members: {
                exceptionTimeToLive: {
                  type: 'long'
                },
                notificationEndpoint: {},
                subscriptionProtocol: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          UpdateSubscriber: {
            http: {
              method: 'PUT',
              requestUri: '/v1/subscribers/{subscriberId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['subscriberId'],
              members: {
                sources: {
                  shape: 'S1u'
                },
                subscriberDescription: {},
                subscriberId: {
                  location: 'uri',
                  locationName: 'subscriberId'
                },
                subscriberIdentity: {
                  shape: 'Sf'
                },
                subscriberName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                subscriber: {
                  shape: 'S1z'
                }
              }
            },
            idempotent: true
          },
          UpdateSubscriberNotification: {
            http: {
              method: 'PUT',
              requestUri: '/v1/subscribers/{subscriberId}/notification',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['configuration', 'subscriberId'],
              members: {
                configuration: {
                  shape: 'S26'
                },
                subscriberId: {
                  location: 'uri',
                  locationName: 'subscriberId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                subscriberEndpoint: {}
              }
            },
            idempotent: true
          }
        },
        shapes: {
          S2: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['regions', 'sourceName'],
              members: {
                accounts: {
                  shape: 'S4'
                },
                regions: {
                  shape: 'S6'
                },
                sourceName: {},
                sourceVersion: {}
              }
            }
          },
          S4: {
            type: 'list',
            member: {}
          },
          S6: {
            type: 'list',
            member: {}
          },
          Sf: {
            type: 'structure',
            required: ['externalId', 'principal'],
            members: {
              externalId: {},
              principal: {}
            }
          },
          Si: {
            type: 'list',
            member: {}
          },
          Sn: {
            type: 'structure',
            members: {
              attributes: {
                type: 'structure',
                members: {
                  crawlerArn: {},
                  databaseArn: {},
                  tableArn: {}
                }
              },
              provider: {
                type: 'structure',
                members: {
                  location: {},
                  roleArn: {}
                }
              },
              sourceName: {},
              sourceVersion: {}
            }
          },
          St: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['region'],
              members: {
                encryptionConfiguration: {
                  shape: 'Sv'
                },
                lifecycleConfiguration: {
                  shape: 'Sx'
                },
                region: {},
                replicationConfiguration: {
                  shape: 'S14'
                }
              }
            }
          },
          Sv: {
            type: 'structure',
            members: {
              kmsKeyId: {}
            }
          },
          Sx: {
            type: 'structure',
            members: {
              expiration: {
                type: 'structure',
                members: {
                  days: {
                    type: 'integer'
                  }
                }
              },
              transitions: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    days: {
                      type: 'integer'
                    },
                    storageClass: {}
                  }
                }
              }
            }
          },
          S14: {
            type: 'structure',
            members: {
              regions: {
                shape: 'S6'
              },
              roleArn: {}
            }
          },
          S15: {
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
          S1a: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['dataLakeArn', 'region'],
              members: {
                createStatus: {},
                dataLakeArn: {},
                encryptionConfiguration: {
                  shape: 'Sv'
                },
                lifecycleConfiguration: {
                  shape: 'Sx'
                },
                region: {},
                replicationConfiguration: {
                  shape: 'S14'
                },
                s3BucketArn: {},
                updateStatus: {
                  type: 'structure',
                  members: {
                    exception: {
                      type: 'structure',
                      members: {
                        code: {},
                        reason: {}
                      }
                    },
                    requestId: {},
                    status: {}
                  }
                }
              }
            }
          },
          S1m: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['region', 'sources'],
              members: {
                region: {},
                sources: {
                  type: 'list',
                  member: {
                    shape: 'S1p'
                  }
                }
              }
            }
          },
          S1p: {
            type: 'structure',
            members: {
              sourceName: {},
              sourceVersion: {}
            }
          },
          S1s: {
            type: 'list',
            member: {}
          },
          S1u: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                awsLogSource: {
                  shape: 'S1p'
                },
                customLogSource: {
                  shape: 'Sn'
                }
              },
              union: true
            }
          },
          S1z: {
            type: 'structure',
            required: ['sources', 'subscriberArn', 'subscriberId', 'subscriberIdentity', 'subscriberName'],
            members: {
              accessTypes: {
                shape: 'S1s'
              },
              createdAt: {
                shape: 'S20'
              },
              resourceShareArn: {},
              resourceShareName: {},
              roleArn: {},
              s3BucketArn: {},
              sources: {
                shape: 'S1u'
              },
              subscriberArn: {},
              subscriberDescription: {},
              subscriberEndpoint: {},
              subscriberId: {},
              subscriberIdentity: {
                shape: 'Sf'
              },
              subscriberName: {},
              subscriberStatus: {},
              updatedAt: {
                shape: 'S20'
              }
            }
          },
          S20: {
            type: 'timestamp',
            timestampFormat: 'iso8601'
          },
          S26: {
            type: 'structure',
            members: {
              httpsNotificationConfiguration: {
                type: 'structure',
                required: ['endpoint', 'targetRoleArn'],
                members: {
                  authorizationApiKeyName: {},
                  authorizationApiKeyValue: {},
                  endpoint: {},
                  httpMethod: {},
                  targetRoleArn: {}
                }
              },
              sqsNotificationConfiguration: {
                type: 'structure',
                members: {}
              }
            },
            union: true
          }
        }
      });
    }
  };
});
//# sourceMappingURL=0bea9ae92b831f848e60769666aab7458c5f7f26.js.map