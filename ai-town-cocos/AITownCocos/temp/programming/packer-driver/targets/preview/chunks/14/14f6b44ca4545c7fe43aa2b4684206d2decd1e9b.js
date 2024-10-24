System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2012-11-05',
          awsQueryCompatible: {},
          endpointPrefix: 'sqs',
          jsonVersion: '1.0',
          protocol: 'json',
          protocols: ['json'],
          serviceAbbreviation: 'Amazon SQS',
          serviceFullName: 'Amazon Simple Queue Service',
          serviceId: 'SQS',
          signatureVersion: 'v4',
          targetPrefix: 'AmazonSQS',
          uid: 'sqs-2012-11-05'
        },
        operations: {
          AddPermission: {
            input: {
              type: 'structure',
              required: ['QueueUrl', 'Label', 'AWSAccountIds', 'Actions'],
              members: {
                QueueUrl: {},
                Label: {},
                AWSAccountIds: {
                  type: 'list',
                  member: {},
                  flattened: true
                },
                Actions: {
                  type: 'list',
                  member: {},
                  flattened: true
                }
              }
            }
          },
          CancelMessageMoveTask: {
            input: {
              type: 'structure',
              required: ['TaskHandle'],
              members: {
                TaskHandle: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ApproximateNumberOfMessagesMoved: {
                  type: 'long'
                }
              }
            }
          },
          ChangeMessageVisibility: {
            input: {
              type: 'structure',
              required: ['QueueUrl', 'ReceiptHandle', 'VisibilityTimeout'],
              members: {
                QueueUrl: {},
                ReceiptHandle: {},
                VisibilityTimeout: {
                  type: 'integer'
                }
              }
            }
          },
          ChangeMessageVisibilityBatch: {
            input: {
              type: 'structure',
              required: ['QueueUrl', 'Entries'],
              members: {
                QueueUrl: {},
                Entries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Id', 'ReceiptHandle'],
                    members: {
                      Id: {},
                      ReceiptHandle: {},
                      VisibilityTimeout: {
                        type: 'integer'
                      }
                    }
                  },
                  flattened: true
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Successful', 'Failed'],
              members: {
                Successful: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Id'],
                    members: {
                      Id: {}
                    }
                  },
                  flattened: true
                },
                Failed: {
                  shape: 'Sg'
                }
              }
            }
          },
          CreateQueue: {
            input: {
              type: 'structure',
              required: ['QueueName'],
              members: {
                QueueName: {},
                Attributes: {
                  shape: 'Sk'
                },
                tags: {
                  shape: 'Sm'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                QueueUrl: {}
              }
            }
          },
          DeleteMessage: {
            input: {
              type: 'structure',
              required: ['QueueUrl', 'ReceiptHandle'],
              members: {
                QueueUrl: {},
                ReceiptHandle: {}
              }
            }
          },
          DeleteMessageBatch: {
            input: {
              type: 'structure',
              required: ['QueueUrl', 'Entries'],
              members: {
                QueueUrl: {},
                Entries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Id', 'ReceiptHandle'],
                    members: {
                      Id: {},
                      ReceiptHandle: {}
                    }
                  },
                  flattened: true
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Successful', 'Failed'],
              members: {
                Successful: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Id'],
                    members: {
                      Id: {}
                    }
                  },
                  flattened: true
                },
                Failed: {
                  shape: 'Sg'
                }
              }
            }
          },
          DeleteQueue: {
            input: {
              type: 'structure',
              required: ['QueueUrl'],
              members: {
                QueueUrl: {}
              }
            }
          },
          GetQueueAttributes: {
            input: {
              type: 'structure',
              required: ['QueueUrl'],
              members: {
                QueueUrl: {},
                AttributeNames: {
                  shape: 'Sz'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Attributes: {
                  shape: 'Sk'
                }
              }
            }
          },
          GetQueueUrl: {
            input: {
              type: 'structure',
              required: ['QueueName'],
              members: {
                QueueName: {},
                QueueOwnerAWSAccountId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                QueueUrl: {}
              }
            }
          },
          ListDeadLetterSourceQueues: {
            input: {
              type: 'structure',
              required: ['QueueUrl'],
              members: {
                QueueUrl: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['queueUrls'],
              members: {
                queueUrls: {
                  shape: 'S17'
                },
                NextToken: {}
              }
            }
          },
          ListMessageMoveTasks: {
            input: {
              type: 'structure',
              required: ['SourceArn'],
              members: {
                SourceArn: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Results: {
                  flattened: true,
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      TaskHandle: {},
                      Status: {},
                      SourceArn: {},
                      DestinationArn: {},
                      MaxNumberOfMessagesPerSecond: {
                        type: 'integer'
                      },
                      ApproximateNumberOfMessagesMoved: {
                        type: 'long'
                      },
                      ApproximateNumberOfMessagesToMove: {
                        type: 'long'
                      },
                      FailureReason: {},
                      StartedTimestamp: {
                        type: 'long'
                      }
                    }
                  }
                }
              }
            }
          },
          ListQueueTags: {
            input: {
              type: 'structure',
              required: ['QueueUrl'],
              members: {
                QueueUrl: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Tags: {
                  shape: 'Sm'
                }
              }
            }
          },
          ListQueues: {
            input: {
              type: 'structure',
              members: {
                QueueNamePrefix: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                QueueUrls: {
                  shape: 'S17'
                },
                NextToken: {}
              }
            }
          },
          PurgeQueue: {
            input: {
              type: 'structure',
              required: ['QueueUrl'],
              members: {
                QueueUrl: {}
              }
            }
          },
          ReceiveMessage: {
            input: {
              type: 'structure',
              required: ['QueueUrl'],
              members: {
                QueueUrl: {},
                AttributeNames: {
                  shape: 'Sz',
                  deprecated: true,
                  deprecatedMessage: 'AttributeNames has been replaced by MessageSystemAttributeNames'
                },
                MessageSystemAttributeNames: {
                  type: 'list',
                  member: {},
                  flattened: true
                },
                MessageAttributeNames: {
                  type: 'list',
                  member: {},
                  flattened: true
                },
                MaxNumberOfMessages: {
                  type: 'integer'
                },
                VisibilityTimeout: {
                  type: 'integer'
                },
                WaitTimeSeconds: {
                  type: 'integer'
                },
                ReceiveRequestAttemptId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Messages: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      MessageId: {},
                      ReceiptHandle: {},
                      MD5OfBody: {},
                      Body: {},
                      Attributes: {
                        type: 'map',
                        key: {},
                        value: {},
                        flattened: true
                      },
                      MD5OfMessageAttributes: {},
                      MessageAttributes: {
                        shape: 'S1r'
                      }
                    }
                  },
                  flattened: true
                }
              }
            }
          },
          RemovePermission: {
            input: {
              type: 'structure',
              required: ['QueueUrl', 'Label'],
              members: {
                QueueUrl: {},
                Label: {}
              }
            }
          },
          SendMessage: {
            input: {
              type: 'structure',
              required: ['QueueUrl', 'MessageBody'],
              members: {
                QueueUrl: {},
                MessageBody: {},
                DelaySeconds: {
                  type: 'integer'
                },
                MessageAttributes: {
                  shape: 'S1r'
                },
                MessageSystemAttributes: {
                  shape: 'S1y'
                },
                MessageDeduplicationId: {},
                MessageGroupId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                MD5OfMessageBody: {},
                MD5OfMessageAttributes: {},
                MD5OfMessageSystemAttributes: {},
                MessageId: {},
                SequenceNumber: {}
              }
            }
          },
          SendMessageBatch: {
            input: {
              type: 'structure',
              required: ['QueueUrl', 'Entries'],
              members: {
                QueueUrl: {},
                Entries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Id', 'MessageBody'],
                    members: {
                      Id: {},
                      MessageBody: {},
                      DelaySeconds: {
                        type: 'integer'
                      },
                      MessageAttributes: {
                        shape: 'S1r'
                      },
                      MessageSystemAttributes: {
                        shape: 'S1y'
                      },
                      MessageDeduplicationId: {},
                      MessageGroupId: {}
                    }
                  },
                  flattened: true
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Successful', 'Failed'],
              members: {
                Successful: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Id', 'MessageId', 'MD5OfMessageBody'],
                    members: {
                      Id: {},
                      MessageId: {},
                      MD5OfMessageBody: {},
                      MD5OfMessageAttributes: {},
                      MD5OfMessageSystemAttributes: {},
                      SequenceNumber: {}
                    }
                  },
                  flattened: true
                },
                Failed: {
                  shape: 'Sg'
                }
              }
            }
          },
          SetQueueAttributes: {
            input: {
              type: 'structure',
              required: ['QueueUrl', 'Attributes'],
              members: {
                QueueUrl: {},
                Attributes: {
                  shape: 'Sk'
                }
              }
            }
          },
          StartMessageMoveTask: {
            input: {
              type: 'structure',
              required: ['SourceArn'],
              members: {
                SourceArn: {},
                DestinationArn: {},
                MaxNumberOfMessagesPerSecond: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                TaskHandle: {}
              }
            }
          },
          TagQueue: {
            input: {
              type: 'structure',
              required: ['QueueUrl', 'Tags'],
              members: {
                QueueUrl: {},
                Tags: {
                  shape: 'Sm'
                }
              }
            }
          },
          UntagQueue: {
            input: {
              type: 'structure',
              required: ['QueueUrl', 'TagKeys'],
              members: {
                QueueUrl: {},
                TagKeys: {
                  type: 'list',
                  member: {},
                  flattened: true
                }
              }
            }
          }
        },
        shapes: {
          Sg: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Id', 'SenderFault', 'Code'],
              members: {
                Id: {},
                SenderFault: {
                  type: 'boolean'
                },
                Code: {},
                Message: {}
              }
            },
            flattened: true
          },
          Sk: {
            type: 'map',
            key: {},
            value: {},
            flattened: true
          },
          Sm: {
            type: 'map',
            key: {},
            value: {},
            flattened: true
          },
          Sz: {
            type: 'list',
            member: {},
            flattened: true
          },
          S17: {
            type: 'list',
            member: {},
            flattened: true
          },
          S1r: {
            type: 'map',
            key: {},
            value: {
              type: 'structure',
              required: ['DataType'],
              members: {
                StringValue: {},
                BinaryValue: {
                  type: 'blob'
                },
                StringListValues: {
                  shape: 'S1u',
                  flattened: true
                },
                BinaryListValues: {
                  shape: 'S1v',
                  flattened: true
                },
                DataType: {}
              }
            },
            flattened: true
          },
          S1u: {
            type: 'list',
            member: {}
          },
          S1v: {
            type: 'list',
            member: {
              type: 'blob'
            }
          },
          S1y: {
            type: 'map',
            key: {},
            value: {
              type: 'structure',
              required: ['DataType'],
              members: {
                StringValue: {},
                BinaryValue: {
                  type: 'blob'
                },
                StringListValues: {
                  shape: 'S1u',
                  flattened: true
                },
                BinaryListValues: {
                  shape: 'S1v',
                  flattened: true
                },
                DataType: {}
              }
            },
            flattened: true
          }
        }
      });
    }
  };
});
//# sourceMappingURL=14f6b44ca4545c7fe43aa2b4684206d2decd1e9b.js.map