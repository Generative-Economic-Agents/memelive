System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2021-05-03',
          endpointPrefix: 'ssm-contacts',
          jsonVersion: '1.1',
          protocol: 'json',
          serviceAbbreviation: 'SSM Contacts',
          serviceFullName: 'AWS Systems Manager Incident Manager Contacts',
          serviceId: 'SSM Contacts',
          signatureVersion: 'v4',
          signingName: 'ssm-contacts',
          targetPrefix: 'SSMContacts',
          uid: 'ssm-contacts-2021-05-03'
        },
        operations: {
          AcceptPage: {
            input: {
              type: 'structure',
              required: ['PageId', 'AcceptType', 'AcceptCode'],
              members: {
                PageId: {},
                ContactChannelId: {},
                AcceptType: {},
                Note: {},
                AcceptCode: {},
                AcceptCodeValidation: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          ActivateContactChannel: {
            input: {
              type: 'structure',
              required: ['ContactChannelId', 'ActivationCode'],
              members: {
                ContactChannelId: {},
                ActivationCode: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          CreateContact: {
            input: {
              type: 'structure',
              required: ['Alias', 'Type', 'Plan'],
              members: {
                Alias: {},
                DisplayName: {},
                Type: {},
                Plan: {
                  shape: 'Sf'
                },
                Tags: {
                  shape: 'Sq'
                },
                IdempotencyToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              required: ['ContactArn'],
              members: {
                ContactArn: {}
              }
            }
          },
          CreateContactChannel: {
            input: {
              type: 'structure',
              required: ['ContactId', 'Name', 'Type', 'DeliveryAddress'],
              members: {
                ContactId: {},
                Name: {},
                Type: {},
                DeliveryAddress: {
                  shape: 'Sz'
                },
                DeferActivation: {
                  type: 'boolean'
                },
                IdempotencyToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              required: ['ContactChannelArn'],
              members: {
                ContactChannelArn: {}
              }
            }
          },
          CreateRotation: {
            input: {
              type: 'structure',
              required: ['Name', 'ContactIds', 'TimeZoneId', 'Recurrence'],
              members: {
                Name: {},
                ContactIds: {
                  shape: 'S15'
                },
                StartTime: {
                  type: 'timestamp'
                },
                TimeZoneId: {},
                Recurrence: {
                  shape: 'S18'
                },
                Tags: {
                  shape: 'Sq'
                },
                IdempotencyToken: {}
              }
            },
            output: {
              type: 'structure',
              required: ['RotationArn'],
              members: {
                RotationArn: {}
              }
            }
          },
          CreateRotationOverride: {
            input: {
              type: 'structure',
              required: ['RotationId', 'NewContactIds', 'StartTime', 'EndTime'],
              members: {
                RotationId: {},
                NewContactIds: {
                  type: 'list',
                  member: {}
                },
                StartTime: {
                  type: 'timestamp'
                },
                EndTime: {
                  type: 'timestamp'
                },
                IdempotencyToken: {}
              }
            },
            output: {
              type: 'structure',
              required: ['RotationOverrideId'],
              members: {
                RotationOverrideId: {}
              }
            }
          },
          DeactivateContactChannel: {
            input: {
              type: 'structure',
              required: ['ContactChannelId'],
              members: {
                ContactChannelId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteContact: {
            input: {
              type: 'structure',
              required: ['ContactId'],
              members: {
                ContactId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteContactChannel: {
            input: {
              type: 'structure',
              required: ['ContactChannelId'],
              members: {
                ContactChannelId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteRotation: {
            input: {
              type: 'structure',
              required: ['RotationId'],
              members: {
                RotationId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteRotationOverride: {
            input: {
              type: 'structure',
              required: ['RotationId', 'RotationOverrideId'],
              members: {
                RotationId: {},
                RotationOverrideId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DescribeEngagement: {
            input: {
              type: 'structure',
              required: ['EngagementId'],
              members: {
                EngagementId: {}
              }
            },
            output: {
              type: 'structure',
              required: ['ContactArn', 'EngagementArn', 'Sender', 'Subject', 'Content'],
              members: {
                ContactArn: {},
                EngagementArn: {},
                Sender: {},
                Subject: {},
                Content: {},
                PublicSubject: {},
                PublicContent: {},
                IncidentId: {},
                StartTime: {
                  type: 'timestamp'
                },
                StopTime: {
                  type: 'timestamp'
                }
              }
            }
          },
          DescribePage: {
            input: {
              type: 'structure',
              required: ['PageId'],
              members: {
                PageId: {}
              }
            },
            output: {
              type: 'structure',
              required: ['PageArn', 'EngagementArn', 'ContactArn', 'Sender', 'Subject', 'Content'],
              members: {
                PageArn: {},
                EngagementArn: {},
                ContactArn: {},
                Sender: {},
                Subject: {},
                Content: {},
                PublicSubject: {},
                PublicContent: {},
                IncidentId: {},
                SentTime: {
                  type: 'timestamp'
                },
                ReadTime: {
                  type: 'timestamp'
                },
                DeliveryTime: {
                  type: 'timestamp'
                }
              }
            }
          },
          GetContact: {
            input: {
              type: 'structure',
              required: ['ContactId'],
              members: {
                ContactId: {}
              }
            },
            output: {
              type: 'structure',
              required: ['ContactArn', 'Alias', 'Type', 'Plan'],
              members: {
                ContactArn: {},
                Alias: {},
                DisplayName: {},
                Type: {},
                Plan: {
                  shape: 'Sf'
                }
              }
            }
          },
          GetContactChannel: {
            input: {
              type: 'structure',
              required: ['ContactChannelId'],
              members: {
                ContactChannelId: {}
              }
            },
            output: {
              type: 'structure',
              required: ['ContactArn', 'ContactChannelArn', 'Name', 'Type', 'DeliveryAddress'],
              members: {
                ContactArn: {},
                ContactChannelArn: {},
                Name: {},
                Type: {},
                DeliveryAddress: {
                  shape: 'Sz'
                },
                ActivationStatus: {}
              }
            }
          },
          GetContactPolicy: {
            input: {
              type: 'structure',
              required: ['ContactArn'],
              members: {
                ContactArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ContactArn: {},
                Policy: {}
              }
            }
          },
          GetRotation: {
            input: {
              type: 'structure',
              required: ['RotationId'],
              members: {
                RotationId: {}
              }
            },
            output: {
              type: 'structure',
              required: ['RotationArn', 'Name', 'ContactIds', 'StartTime', 'TimeZoneId', 'Recurrence'],
              members: {
                RotationArn: {},
                Name: {},
                ContactIds: {
                  shape: 'S15'
                },
                StartTime: {
                  type: 'timestamp'
                },
                TimeZoneId: {},
                Recurrence: {
                  shape: 'S18'
                }
              }
            }
          },
          GetRotationOverride: {
            input: {
              type: 'structure',
              required: ['RotationId', 'RotationOverrideId'],
              members: {
                RotationId: {},
                RotationOverrideId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                RotationOverrideId: {},
                RotationArn: {},
                NewContactIds: {
                  shape: 'Sp'
                },
                StartTime: {
                  type: 'timestamp'
                },
                EndTime: {
                  type: 'timestamp'
                },
                CreateTime: {
                  type: 'timestamp'
                }
              }
            }
          },
          ListContactChannels: {
            input: {
              type: 'structure',
              required: ['ContactId'],
              members: {
                ContactId: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['ContactChannels'],
              members: {
                NextToken: {},
                ContactChannels: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['ContactChannelArn', 'ContactArn', 'Name', 'DeliveryAddress', 'ActivationStatus'],
                    members: {
                      ContactChannelArn: {},
                      ContactArn: {},
                      Name: {},
                      Type: {},
                      DeliveryAddress: {
                        shape: 'Sz'
                      },
                      ActivationStatus: {}
                    }
                  }
                }
              }
            }
          },
          ListContacts: {
            input: {
              type: 'structure',
              members: {
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                AliasPrefix: {},
                Type: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                Contacts: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['ContactArn', 'Alias', 'Type'],
                    members: {
                      ContactArn: {},
                      Alias: {},
                      DisplayName: {},
                      Type: {}
                    }
                  }
                }
              }
            }
          },
          ListEngagements: {
            input: {
              type: 'structure',
              members: {
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                IncidentId: {},
                TimeRangeValue: {
                  type: 'structure',
                  members: {
                    StartTime: {
                      type: 'timestamp'
                    },
                    EndTime: {
                      type: 'timestamp'
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Engagements'],
              members: {
                NextToken: {},
                Engagements: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['EngagementArn', 'ContactArn', 'Sender'],
                    members: {
                      EngagementArn: {},
                      ContactArn: {},
                      Sender: {},
                      IncidentId: {},
                      StartTime: {
                        type: 'timestamp'
                      },
                      StopTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                }
              }
            }
          },
          ListPageReceipts: {
            input: {
              type: 'structure',
              required: ['PageId'],
              members: {
                PageId: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                Receipts: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['ReceiptType', 'ReceiptTime'],
                    members: {
                      ContactChannelArn: {},
                      ReceiptType: {},
                      ReceiptInfo: {},
                      ReceiptTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                }
              }
            }
          },
          ListPageResolutions: {
            input: {
              type: 'structure',
              required: ['PageId'],
              members: {
                NextToken: {},
                PageId: {}
              }
            },
            output: {
              type: 'structure',
              required: ['PageResolutions'],
              members: {
                NextToken: {},
                PageResolutions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['ContactArn', 'Type'],
                    members: {
                      ContactArn: {},
                      Type: {},
                      StageIndex: {
                        type: 'integer'
                      }
                    }
                  }
                }
              }
            }
          },
          ListPagesByContact: {
            input: {
              type: 'structure',
              required: ['ContactId'],
              members: {
                ContactId: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Pages'],
              members: {
                NextToken: {},
                Pages: {
                  shape: 'S3g'
                }
              }
            }
          },
          ListPagesByEngagement: {
            input: {
              type: 'structure',
              required: ['EngagementId'],
              members: {
                EngagementId: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Pages'],
              members: {
                NextToken: {},
                Pages: {
                  shape: 'S3g'
                }
              }
            }
          },
          ListPreviewRotationShifts: {
            input: {
              type: 'structure',
              required: ['EndTime', 'Members', 'TimeZoneId', 'Recurrence'],
              members: {
                RotationStartTime: {
                  type: 'timestamp'
                },
                StartTime: {
                  type: 'timestamp'
                },
                EndTime: {
                  type: 'timestamp'
                },
                Members: {
                  type: 'list',
                  member: {}
                },
                TimeZoneId: {},
                Recurrence: {
                  shape: 'S18'
                },
                Overrides: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      NewMembers: {
                        type: 'list',
                        member: {}
                      },
                      StartTime: {
                        type: 'timestamp'
                      },
                      EndTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                RotationShifts: {
                  shape: 'S3r'
                },
                NextToken: {}
              }
            }
          },
          ListRotationOverrides: {
            input: {
              type: 'structure',
              required: ['RotationId', 'StartTime', 'EndTime'],
              members: {
                RotationId: {},
                StartTime: {
                  type: 'timestamp'
                },
                EndTime: {
                  type: 'timestamp'
                },
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                RotationOverrides: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['RotationOverrideId', 'NewContactIds', 'StartTime', 'EndTime', 'CreateTime'],
                    members: {
                      RotationOverrideId: {},
                      NewContactIds: {
                        shape: 'Sp'
                      },
                      StartTime: {
                        type: 'timestamp'
                      },
                      EndTime: {
                        type: 'timestamp'
                      },
                      CreateTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListRotationShifts: {
            input: {
              type: 'structure',
              required: ['RotationId', 'EndTime'],
              members: {
                RotationId: {},
                StartTime: {
                  type: 'timestamp'
                },
                EndTime: {
                  type: 'timestamp'
                },
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                RotationShifts: {
                  shape: 'S3r'
                },
                NextToken: {}
              }
            }
          },
          ListRotations: {
            input: {
              type: 'structure',
              members: {
                RotationNamePrefix: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Rotations'],
              members: {
                NextToken: {},
                Rotations: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['RotationArn', 'Name'],
                    members: {
                      RotationArn: {},
                      Name: {},
                      ContactIds: {
                        shape: 'Sp'
                      },
                      StartTime: {
                        type: 'timestamp'
                      },
                      TimeZoneId: {},
                      Recurrence: {
                        shape: 'S18'
                      }
                    }
                  }
                }
              }
            }
          },
          ListTagsForResource: {
            input: {
              type: 'structure',
              required: ['ResourceARN'],
              members: {
                ResourceARN: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Tags: {
                  shape: 'Sq'
                }
              }
            }
          },
          PutContactPolicy: {
            input: {
              type: 'structure',
              required: ['ContactArn', 'Policy'],
              members: {
                ContactArn: {},
                Policy: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          SendActivationCode: {
            input: {
              type: 'structure',
              required: ['ContactChannelId'],
              members: {
                ContactChannelId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          StartEngagement: {
            input: {
              type: 'structure',
              required: ['ContactId', 'Sender', 'Subject', 'Content'],
              members: {
                ContactId: {},
                Sender: {},
                Subject: {},
                Content: {},
                PublicSubject: {},
                PublicContent: {},
                IncidentId: {},
                IdempotencyToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              required: ['EngagementArn'],
              members: {
                EngagementArn: {}
              }
            }
          },
          StopEngagement: {
            input: {
              type: 'structure',
              required: ['EngagementId'],
              members: {
                EngagementId: {},
                Reason: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          TagResource: {
            input: {
              type: 'structure',
              required: ['ResourceARN', 'Tags'],
              members: {
                ResourceARN: {},
                Tags: {
                  shape: 'Sq'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UntagResource: {
            input: {
              type: 'structure',
              required: ['ResourceARN', 'TagKeys'],
              members: {
                ResourceARN: {},
                TagKeys: {
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
          UpdateContact: {
            input: {
              type: 'structure',
              required: ['ContactId'],
              members: {
                ContactId: {},
                DisplayName: {},
                Plan: {
                  shape: 'Sf'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateContactChannel: {
            input: {
              type: 'structure',
              required: ['ContactChannelId'],
              members: {
                ContactChannelId: {},
                Name: {},
                DeliveryAddress: {
                  shape: 'Sz'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateRotation: {
            input: {
              type: 'structure',
              required: ['RotationId', 'Recurrence'],
              members: {
                RotationId: {},
                ContactIds: {
                  shape: 'S15'
                },
                StartTime: {
                  type: 'timestamp'
                },
                TimeZoneId: {},
                Recurrence: {
                  shape: 'S18'
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
          Sf: {
            type: 'structure',
            members: {
              Stages: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['DurationInMinutes', 'Targets'],
                  members: {
                    DurationInMinutes: {
                      type: 'integer'
                    },
                    Targets: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          ChannelTargetInfo: {
                            type: 'structure',
                            required: ['ContactChannelId'],
                            members: {
                              ContactChannelId: {},
                              RetryIntervalInMinutes: {
                                type: 'integer'
                              }
                            }
                          },
                          ContactTargetInfo: {
                            type: 'structure',
                            required: ['IsEssential'],
                            members: {
                              ContactId: {},
                              IsEssential: {
                                type: 'boolean'
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              RotationIds: {
                shape: 'Sp'
              }
            }
          },
          Sp: {
            type: 'list',
            member: {}
          },
          Sq: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Key: {},
                Value: {}
              }
            }
          },
          Sz: {
            type: 'structure',
            members: {
              SimpleAddress: {}
            }
          },
          S15: {
            type: 'list',
            member: {}
          },
          S18: {
            type: 'structure',
            required: ['NumberOfOnCalls', 'RecurrenceMultiplier'],
            members: {
              MonthlySettings: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['DayOfMonth', 'HandOffTime'],
                  members: {
                    DayOfMonth: {
                      type: 'integer'
                    },
                    HandOffTime: {
                      shape: 'S1c'
                    }
                  }
                }
              },
              WeeklySettings: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['DayOfWeek', 'HandOffTime'],
                  members: {
                    DayOfWeek: {},
                    HandOffTime: {
                      shape: 'S1c'
                    }
                  }
                }
              },
              DailySettings: {
                type: 'list',
                member: {
                  shape: 'S1c'
                }
              },
              NumberOfOnCalls: {
                type: 'integer'
              },
              ShiftCoverages: {
                type: 'map',
                key: {},
                value: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Start: {
                        shape: 'S1c'
                      },
                      End: {
                        shape: 'S1c'
                      }
                    }
                  }
                }
              },
              RecurrenceMultiplier: {
                type: 'integer'
              }
            }
          },
          S1c: {
            type: 'structure',
            required: ['HourOfDay', 'MinuteOfHour'],
            members: {
              HourOfDay: {
                type: 'integer'
              },
              MinuteOfHour: {
                type: 'integer'
              }
            }
          },
          S3g: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['PageArn', 'EngagementArn', 'ContactArn', 'Sender'],
              members: {
                PageArn: {},
                EngagementArn: {},
                ContactArn: {},
                Sender: {},
                IncidentId: {},
                SentTime: {
                  type: 'timestamp'
                },
                DeliveryTime: {
                  type: 'timestamp'
                },
                ReadTime: {
                  type: 'timestamp'
                }
              }
            }
          },
          S3r: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['StartTime', 'EndTime'],
              members: {
                ContactIds: {
                  shape: 'Sp'
                },
                StartTime: {
                  type: 'timestamp'
                },
                EndTime: {
                  type: 'timestamp'
                },
                Type: {},
                ShiftDetails: {
                  type: 'structure',
                  required: ['OverriddenContactIds'],
                  members: {
                    OverriddenContactIds: {
                      shape: 'Sp'
                    }
                  }
                }
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=485ae9de459f0e8cc7cf35c3131cb2ac5ca18baa.js.map