System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2010-03-31',
          endpointPrefix: 'sns',
          protocol: 'query',
          protocols: ['query'],
          serviceAbbreviation: 'Amazon SNS',
          serviceFullName: 'Amazon Simple Notification Service',
          serviceId: 'SNS',
          signatureVersion: 'v4',
          uid: 'sns-2010-03-31',
          xmlNamespace: 'http://sns.amazonaws.com/doc/2010-03-31/',
          auth: ['aws.auth#sigv4']
        },
        operations: {
          AddPermission: {
            input: {
              type: 'structure',
              required: ['TopicArn', 'Label', 'AWSAccountId', 'ActionName'],
              members: {
                TopicArn: {},
                Label: {},
                AWSAccountId: {
                  type: 'list',
                  member: {}
                },
                ActionName: {
                  type: 'list',
                  member: {}
                }
              }
            }
          },
          CheckIfPhoneNumberIsOptedOut: {
            input: {
              type: 'structure',
              required: ['phoneNumber'],
              members: {
                phoneNumber: {
                  shape: 'S9'
                }
              }
            },
            output: {
              resultWrapper: 'CheckIfPhoneNumberIsOptedOutResult',
              type: 'structure',
              members: {
                isOptedOut: {
                  type: 'boolean'
                }
              }
            }
          },
          ConfirmSubscription: {
            input: {
              type: 'structure',
              required: ['TopicArn', 'Token'],
              members: {
                TopicArn: {},
                Token: {},
                AuthenticateOnUnsubscribe: {}
              }
            },
            output: {
              resultWrapper: 'ConfirmSubscriptionResult',
              type: 'structure',
              members: {
                SubscriptionArn: {}
              }
            }
          },
          CreatePlatformApplication: {
            input: {
              type: 'structure',
              required: ['Name', 'Platform', 'Attributes'],
              members: {
                Name: {},
                Platform: {},
                Attributes: {
                  shape: 'Sj'
                }
              }
            },
            output: {
              resultWrapper: 'CreatePlatformApplicationResult',
              type: 'structure',
              members: {
                PlatformApplicationArn: {}
              }
            }
          },
          CreatePlatformEndpoint: {
            input: {
              type: 'structure',
              required: ['PlatformApplicationArn', 'Token'],
              members: {
                PlatformApplicationArn: {},
                Token: {},
                CustomUserData: {},
                Attributes: {
                  shape: 'Sj'
                }
              }
            },
            output: {
              resultWrapper: 'CreatePlatformEndpointResult',
              type: 'structure',
              members: {
                EndpointArn: {}
              }
            }
          },
          CreateSMSSandboxPhoneNumber: {
            input: {
              type: 'structure',
              required: ['PhoneNumber'],
              members: {
                PhoneNumber: {
                  shape: 'So'
                },
                LanguageCode: {}
              }
            },
            output: {
              resultWrapper: 'CreateSMSSandboxPhoneNumberResult',
              type: 'structure',
              members: {}
            }
          },
          CreateTopic: {
            input: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {},
                Attributes: {
                  shape: 'St'
                },
                Tags: {
                  shape: 'Sw'
                },
                DataProtectionPolicy: {}
              }
            },
            output: {
              resultWrapper: 'CreateTopicResult',
              type: 'structure',
              members: {
                TopicArn: {}
              }
            }
          },
          DeleteEndpoint: {
            input: {
              type: 'structure',
              required: ['EndpointArn'],
              members: {
                EndpointArn: {}
              }
            }
          },
          DeletePlatformApplication: {
            input: {
              type: 'structure',
              required: ['PlatformApplicationArn'],
              members: {
                PlatformApplicationArn: {}
              }
            }
          },
          DeleteSMSSandboxPhoneNumber: {
            input: {
              type: 'structure',
              required: ['PhoneNumber'],
              members: {
                PhoneNumber: {
                  shape: 'So'
                }
              }
            },
            output: {
              resultWrapper: 'DeleteSMSSandboxPhoneNumberResult',
              type: 'structure',
              members: {}
            }
          },
          DeleteTopic: {
            input: {
              type: 'structure',
              required: ['TopicArn'],
              members: {
                TopicArn: {}
              }
            }
          },
          GetDataProtectionPolicy: {
            input: {
              type: 'structure',
              required: ['ResourceArn'],
              members: {
                ResourceArn: {}
              }
            },
            output: {
              resultWrapper: 'GetDataProtectionPolicyResult',
              type: 'structure',
              members: {
                DataProtectionPolicy: {}
              }
            }
          },
          GetEndpointAttributes: {
            input: {
              type: 'structure',
              required: ['EndpointArn'],
              members: {
                EndpointArn: {}
              }
            },
            output: {
              resultWrapper: 'GetEndpointAttributesResult',
              type: 'structure',
              members: {
                Attributes: {
                  shape: 'Sj'
                }
              }
            }
          },
          GetPlatformApplicationAttributes: {
            input: {
              type: 'structure',
              required: ['PlatformApplicationArn'],
              members: {
                PlatformApplicationArn: {}
              }
            },
            output: {
              resultWrapper: 'GetPlatformApplicationAttributesResult',
              type: 'structure',
              members: {
                Attributes: {
                  shape: 'Sj'
                }
              }
            }
          },
          GetSMSAttributes: {
            input: {
              type: 'structure',
              members: {
                attributes: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              resultWrapper: 'GetSMSAttributesResult',
              type: 'structure',
              members: {
                attributes: {
                  shape: 'Sj'
                }
              }
            }
          },
          GetSMSSandboxAccountStatus: {
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              resultWrapper: 'GetSMSSandboxAccountStatusResult',
              type: 'structure',
              required: ['IsInSandbox'],
              members: {
                IsInSandbox: {
                  type: 'boolean'
                }
              }
            }
          },
          GetSubscriptionAttributes: {
            input: {
              type: 'structure',
              required: ['SubscriptionArn'],
              members: {
                SubscriptionArn: {}
              }
            },
            output: {
              resultWrapper: 'GetSubscriptionAttributesResult',
              type: 'structure',
              members: {
                Attributes: {
                  shape: 'S1j'
                }
              }
            }
          },
          GetTopicAttributes: {
            input: {
              type: 'structure',
              required: ['TopicArn'],
              members: {
                TopicArn: {}
              }
            },
            output: {
              resultWrapper: 'GetTopicAttributesResult',
              type: 'structure',
              members: {
                Attributes: {
                  shape: 'St'
                }
              }
            }
          },
          ListEndpointsByPlatformApplication: {
            input: {
              type: 'structure',
              required: ['PlatformApplicationArn'],
              members: {
                PlatformApplicationArn: {},
                NextToken: {}
              }
            },
            output: {
              resultWrapper: 'ListEndpointsByPlatformApplicationResult',
              type: 'structure',
              members: {
                Endpoints: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      EndpointArn: {},
                      Attributes: {
                        shape: 'Sj'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListOriginationNumbers: {
            input: {
              type: 'structure',
              members: {
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              resultWrapper: 'ListOriginationNumbersResult',
              type: 'structure',
              members: {
                NextToken: {},
                PhoneNumbers: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      CreatedAt: {
                        type: 'timestamp'
                      },
                      PhoneNumber: {
                        shape: 'S9'
                      },
                      Status: {},
                      Iso2CountryCode: {},
                      RouteType: {},
                      NumberCapabilities: {
                        type: 'list',
                        member: {}
                      }
                    }
                  }
                }
              }
            }
          },
          ListPhoneNumbersOptedOut: {
            input: {
              type: 'structure',
              members: {
                nextToken: {}
              }
            },
            output: {
              resultWrapper: 'ListPhoneNumbersOptedOutResult',
              type: 'structure',
              members: {
                phoneNumbers: {
                  type: 'list',
                  member: {
                    shape: 'S9'
                  }
                },
                nextToken: {}
              }
            }
          },
          ListPlatformApplications: {
            input: {
              type: 'structure',
              members: {
                NextToken: {}
              }
            },
            output: {
              resultWrapper: 'ListPlatformApplicationsResult',
              type: 'structure',
              members: {
                PlatformApplications: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      PlatformApplicationArn: {},
                      Attributes: {
                        shape: 'Sj'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListSMSSandboxPhoneNumbers: {
            input: {
              type: 'structure',
              members: {
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              resultWrapper: 'ListSMSSandboxPhoneNumbersResult',
              type: 'structure',
              required: ['PhoneNumbers'],
              members: {
                PhoneNumbers: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      PhoneNumber: {
                        shape: 'So'
                      },
                      Status: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListSubscriptions: {
            input: {
              type: 'structure',
              members: {
                NextToken: {}
              }
            },
            output: {
              resultWrapper: 'ListSubscriptionsResult',
              type: 'structure',
              members: {
                Subscriptions: {
                  shape: 'S2h'
                },
                NextToken: {}
              }
            }
          },
          ListSubscriptionsByTopic: {
            input: {
              type: 'structure',
              required: ['TopicArn'],
              members: {
                TopicArn: {},
                NextToken: {}
              }
            },
            output: {
              resultWrapper: 'ListSubscriptionsByTopicResult',
              type: 'structure',
              members: {
                Subscriptions: {
                  shape: 'S2h'
                },
                NextToken: {}
              }
            }
          },
          ListTagsForResource: {
            input: {
              type: 'structure',
              required: ['ResourceArn'],
              members: {
                ResourceArn: {}
              }
            },
            output: {
              resultWrapper: 'ListTagsForResourceResult',
              type: 'structure',
              members: {
                Tags: {
                  shape: 'Sw'
                }
              }
            }
          },
          ListTopics: {
            input: {
              type: 'structure',
              members: {
                NextToken: {}
              }
            },
            output: {
              resultWrapper: 'ListTopicsResult',
              type: 'structure',
              members: {
                Topics: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      TopicArn: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          OptInPhoneNumber: {
            input: {
              type: 'structure',
              required: ['phoneNumber'],
              members: {
                phoneNumber: {
                  shape: 'S9'
                }
              }
            },
            output: {
              resultWrapper: 'OptInPhoneNumberResult',
              type: 'structure',
              members: {}
            }
          },
          Publish: {
            input: {
              type: 'structure',
              required: ['Message'],
              members: {
                TopicArn: {},
                TargetArn: {},
                PhoneNumber: {
                  shape: 'S9'
                },
                Message: {},
                Subject: {},
                MessageStructure: {},
                MessageAttributes: {
                  shape: 'S31'
                },
                MessageDeduplicationId: {},
                MessageGroupId: {}
              }
            },
            output: {
              resultWrapper: 'PublishResult',
              type: 'structure',
              members: {
                MessageId: {},
                SequenceNumber: {}
              }
            }
          },
          PublishBatch: {
            input: {
              type: 'structure',
              required: ['TopicArn', 'PublishBatchRequestEntries'],
              members: {
                TopicArn: {},
                PublishBatchRequestEntries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Id', 'Message'],
                    members: {
                      Id: {},
                      Message: {},
                      Subject: {},
                      MessageStructure: {},
                      MessageAttributes: {
                        shape: 'S31'
                      },
                      MessageDeduplicationId: {},
                      MessageGroupId: {}
                    }
                  }
                }
              }
            },
            output: {
              resultWrapper: 'PublishBatchResult',
              type: 'structure',
              members: {
                Successful: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Id: {},
                      MessageId: {},
                      SequenceNumber: {}
                    }
                  }
                },
                Failed: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Id', 'Code', 'SenderFault'],
                    members: {
                      Id: {},
                      Code: {},
                      Message: {},
                      SenderFault: {
                        type: 'boolean'
                      }
                    }
                  }
                }
              }
            }
          },
          PutDataProtectionPolicy: {
            input: {
              type: 'structure',
              required: ['ResourceArn', 'DataProtectionPolicy'],
              members: {
                ResourceArn: {},
                DataProtectionPolicy: {}
              }
            }
          },
          RemovePermission: {
            input: {
              type: 'structure',
              required: ['TopicArn', 'Label'],
              members: {
                TopicArn: {},
                Label: {}
              }
            }
          },
          SetEndpointAttributes: {
            input: {
              type: 'structure',
              required: ['EndpointArn', 'Attributes'],
              members: {
                EndpointArn: {},
                Attributes: {
                  shape: 'Sj'
                }
              }
            }
          },
          SetPlatformApplicationAttributes: {
            input: {
              type: 'structure',
              required: ['PlatformApplicationArn', 'Attributes'],
              members: {
                PlatformApplicationArn: {},
                Attributes: {
                  shape: 'Sj'
                }
              }
            }
          },
          SetSMSAttributes: {
            input: {
              type: 'structure',
              required: ['attributes'],
              members: {
                attributes: {
                  shape: 'Sj'
                }
              }
            },
            output: {
              resultWrapper: 'SetSMSAttributesResult',
              type: 'structure',
              members: {}
            }
          },
          SetSubscriptionAttributes: {
            input: {
              type: 'structure',
              required: ['SubscriptionArn', 'AttributeName'],
              members: {
                SubscriptionArn: {},
                AttributeName: {},
                AttributeValue: {}
              }
            }
          },
          SetTopicAttributes: {
            input: {
              type: 'structure',
              required: ['TopicArn', 'AttributeName'],
              members: {
                TopicArn: {},
                AttributeName: {},
                AttributeValue: {}
              }
            }
          },
          Subscribe: {
            input: {
              type: 'structure',
              required: ['TopicArn', 'Protocol'],
              members: {
                TopicArn: {},
                Protocol: {},
                Endpoint: {},
                Attributes: {
                  shape: 'S1j'
                },
                ReturnSubscriptionArn: {
                  type: 'boolean'
                }
              }
            },
            output: {
              resultWrapper: 'SubscribeResult',
              type: 'structure',
              members: {
                SubscriptionArn: {}
              }
            }
          },
          TagResource: {
            input: {
              type: 'structure',
              required: ['ResourceArn', 'Tags'],
              members: {
                ResourceArn: {},
                Tags: {
                  shape: 'Sw'
                }
              }
            },
            output: {
              resultWrapper: 'TagResourceResult',
              type: 'structure',
              members: {}
            }
          },
          Unsubscribe: {
            input: {
              type: 'structure',
              required: ['SubscriptionArn'],
              members: {
                SubscriptionArn: {}
              }
            }
          },
          UntagResource: {
            input: {
              type: 'structure',
              required: ['ResourceArn', 'TagKeys'],
              members: {
                ResourceArn: {},
                TagKeys: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              resultWrapper: 'UntagResourceResult',
              type: 'structure',
              members: {}
            }
          },
          VerifySMSSandboxPhoneNumber: {
            input: {
              type: 'structure',
              required: ['PhoneNumber', 'OneTimePassword'],
              members: {
                PhoneNumber: {
                  shape: 'So'
                },
                OneTimePassword: {}
              }
            },
            output: {
              resultWrapper: 'VerifySMSSandboxPhoneNumberResult',
              type: 'structure',
              members: {}
            }
          }
        },
        shapes: {
          S9: {
            type: 'string',
            sensitive: true
          },
          Sj: {
            type: 'map',
            key: {},
            value: {}
          },
          So: {
            type: 'string',
            sensitive: true
          },
          St: {
            type: 'map',
            key: {},
            value: {}
          },
          Sw: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Key', 'Value'],
              members: {
                Key: {},
                Value: {}
              }
            }
          },
          S1j: {
            type: 'map',
            key: {},
            value: {}
          },
          S2h: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                SubscriptionArn: {},
                Owner: {},
                Protocol: {},
                Endpoint: {},
                TopicArn: {}
              }
            }
          },
          S31: {
            type: 'map',
            key: {
              locationName: 'Name'
            },
            value: {
              locationName: 'Value',
              type: 'structure',
              required: ['DataType'],
              members: {
                DataType: {},
                StringValue: {},
                BinaryValue: {
                  type: 'blob'
                }
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=5c98e5548e1aacd53dd782fa1cbad375fcef2c9b.js.map