System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2017-01-17',
          endpointPrefix: 'mturk-requester',
          jsonVersion: '1.1',
          protocol: 'json',
          serviceAbbreviation: 'Amazon MTurk',
          serviceFullName: 'Amazon Mechanical Turk',
          serviceId: 'MTurk',
          signatureVersion: 'v4',
          targetPrefix: 'MTurkRequesterServiceV20170117',
          uid: 'mturk-requester-2017-01-17'
        },
        operations: {
          AcceptQualificationRequest: {
            input: {
              type: 'structure',
              required: ['QualificationRequestId'],
              members: {
                QualificationRequestId: {},
                IntegerValue: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          ApproveAssignment: {
            input: {
              type: 'structure',
              required: ['AssignmentId'],
              members: {
                AssignmentId: {},
                RequesterFeedback: {},
                OverrideRejection: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          AssociateQualificationWithWorker: {
            input: {
              type: 'structure',
              required: ['QualificationTypeId', 'WorkerId'],
              members: {
                QualificationTypeId: {},
                WorkerId: {},
                IntegerValue: {
                  type: 'integer'
                },
                SendNotification: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          CreateAdditionalAssignmentsForHIT: {
            input: {
              type: 'structure',
              required: ['HITId', 'NumberOfAdditionalAssignments'],
              members: {
                HITId: {},
                NumberOfAdditionalAssignments: {
                  type: 'integer'
                },
                UniqueRequestToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          CreateHIT: {
            input: {
              type: 'structure',
              required: ['LifetimeInSeconds', 'AssignmentDurationInSeconds', 'Reward', 'Title', 'Description'],
              members: {
                MaxAssignments: {
                  type: 'integer'
                },
                AutoApprovalDelayInSeconds: {
                  type: 'long'
                },
                LifetimeInSeconds: {
                  type: 'long'
                },
                AssignmentDurationInSeconds: {
                  type: 'long'
                },
                Reward: {},
                Title: {},
                Keywords: {},
                Description: {},
                Question: {},
                RequesterAnnotation: {},
                QualificationRequirements: {
                  shape: 'Si'
                },
                UniqueRequestToken: {},
                AssignmentReviewPolicy: {
                  shape: 'Sq'
                },
                HITReviewPolicy: {
                  shape: 'Sq'
                },
                HITLayoutId: {},
                HITLayoutParameters: {
                  shape: 'Sw'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                HIT: {
                  shape: 'Sz'
                }
              }
            }
          },
          CreateHITType: {
            input: {
              type: 'structure',
              required: ['AssignmentDurationInSeconds', 'Reward', 'Title', 'Description'],
              members: {
                AutoApprovalDelayInSeconds: {
                  type: 'long'
                },
                AssignmentDurationInSeconds: {
                  type: 'long'
                },
                Reward: {},
                Title: {},
                Keywords: {},
                Description: {},
                QualificationRequirements: {
                  shape: 'Si'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                HITTypeId: {}
              }
            },
            idempotent: true
          },
          CreateHITWithHITType: {
            input: {
              type: 'structure',
              required: ['HITTypeId', 'LifetimeInSeconds'],
              members: {
                HITTypeId: {},
                MaxAssignments: {
                  type: 'integer'
                },
                LifetimeInSeconds: {
                  type: 'long'
                },
                Question: {},
                RequesterAnnotation: {},
                UniqueRequestToken: {},
                AssignmentReviewPolicy: {
                  shape: 'Sq'
                },
                HITReviewPolicy: {
                  shape: 'Sq'
                },
                HITLayoutId: {},
                HITLayoutParameters: {
                  shape: 'Sw'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                HIT: {
                  shape: 'Sz'
                }
              }
            }
          },
          CreateQualificationType: {
            input: {
              type: 'structure',
              required: ['Name', 'Description', 'QualificationTypeStatus'],
              members: {
                Name: {},
                Keywords: {},
                Description: {},
                QualificationTypeStatus: {},
                RetryDelayInSeconds: {
                  type: 'long'
                },
                Test: {},
                AnswerKey: {},
                TestDurationInSeconds: {
                  type: 'long'
                },
                AutoGranted: {
                  type: 'boolean'
                },
                AutoGrantedValue: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                QualificationType: {
                  shape: 'S1a'
                }
              }
            }
          },
          CreateWorkerBlock: {
            input: {
              type: 'structure',
              required: ['WorkerId', 'Reason'],
              members: {
                WorkerId: {},
                Reason: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteHIT: {
            input: {
              type: 'structure',
              required: ['HITId'],
              members: {
                HITId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeleteQualificationType: {
            input: {
              type: 'structure',
              required: ['QualificationTypeId'],
              members: {
                QualificationTypeId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeleteWorkerBlock: {
            input: {
              type: 'structure',
              required: ['WorkerId'],
              members: {
                WorkerId: {},
                Reason: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DisassociateQualificationFromWorker: {
            input: {
              type: 'structure',
              required: ['WorkerId', 'QualificationTypeId'],
              members: {
                WorkerId: {},
                QualificationTypeId: {},
                Reason: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          GetAccountBalance: {
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {
                AvailableBalance: {},
                OnHoldBalance: {}
              }
            },
            idempotent: true
          },
          GetAssignment: {
            input: {
              type: 'structure',
              required: ['AssignmentId'],
              members: {
                AssignmentId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Assignment: {
                  shape: 'S1p'
                },
                HIT: {
                  shape: 'Sz'
                }
              }
            },
            idempotent: true
          },
          GetFileUploadURL: {
            input: {
              type: 'structure',
              required: ['AssignmentId', 'QuestionIdentifier'],
              members: {
                AssignmentId: {},
                QuestionIdentifier: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                FileUploadURL: {}
              }
            },
            idempotent: true
          },
          GetHIT: {
            input: {
              type: 'structure',
              required: ['HITId'],
              members: {
                HITId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                HIT: {
                  shape: 'Sz'
                }
              }
            },
            idempotent: true
          },
          GetQualificationScore: {
            input: {
              type: 'structure',
              required: ['QualificationTypeId', 'WorkerId'],
              members: {
                QualificationTypeId: {},
                WorkerId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Qualification: {
                  shape: 'S1x'
                }
              }
            },
            idempotent: true
          },
          GetQualificationType: {
            input: {
              type: 'structure',
              required: ['QualificationTypeId'],
              members: {
                QualificationTypeId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                QualificationType: {
                  shape: 'S1a'
                }
              }
            },
            idempotent: true
          },
          ListAssignmentsForHIT: {
            input: {
              type: 'structure',
              required: ['HITId'],
              members: {
                HITId: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                },
                AssignmentStatuses: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NextToken: {},
                NumResults: {
                  type: 'integer'
                },
                Assignments: {
                  type: 'list',
                  member: {
                    shape: 'S1p'
                  }
                }
              }
            },
            idempotent: true
          },
          ListBonusPayments: {
            input: {
              type: 'structure',
              members: {
                HITId: {},
                AssignmentId: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NumResults: {
                  type: 'integer'
                },
                NextToken: {},
                BonusPayments: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      WorkerId: {},
                      BonusAmount: {},
                      AssignmentId: {},
                      Reason: {},
                      GrantTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                }
              }
            },
            idempotent: true
          },
          ListHITs: {
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
              type: 'structure',
              members: {
                NextToken: {},
                NumResults: {
                  type: 'integer'
                },
                HITs: {
                  shape: 'S2d'
                }
              }
            },
            idempotent: true
          },
          ListHITsForQualificationType: {
            input: {
              type: 'structure',
              required: ['QualificationTypeId'],
              members: {
                QualificationTypeId: {},
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
                NumResults: {
                  type: 'integer'
                },
                HITs: {
                  shape: 'S2d'
                }
              }
            },
            idempotent: true
          },
          ListQualificationRequests: {
            input: {
              type: 'structure',
              members: {
                QualificationTypeId: {},
                NextToken: {},
                MaxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NumResults: {
                  type: 'integer'
                },
                NextToken: {},
                QualificationRequests: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      QualificationRequestId: {},
                      QualificationTypeId: {},
                      WorkerId: {},
                      Test: {},
                      Answer: {},
                      SubmitTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                }
              }
            },
            idempotent: true
          },
          ListQualificationTypes: {
            input: {
              type: 'structure',
              required: ['MustBeRequestable'],
              members: {
                Query: {},
                MustBeRequestable: {
                  type: 'boolean'
                },
                MustBeOwnedByCaller: {
                  type: 'boolean'
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
                NumResults: {
                  type: 'integer'
                },
                NextToken: {},
                QualificationTypes: {
                  type: 'list',
                  member: {
                    shape: 'S1a'
                  }
                }
              }
            },
            idempotent: true
          },
          ListReviewPolicyResultsForHIT: {
            input: {
              type: 'structure',
              required: ['HITId'],
              members: {
                HITId: {},
                PolicyLevels: {
                  type: 'list',
                  member: {}
                },
                RetrieveActions: {
                  type: 'boolean'
                },
                RetrieveResults: {
                  type: 'boolean'
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
                HITId: {},
                AssignmentReviewPolicy: {
                  shape: 'Sq'
                },
                HITReviewPolicy: {
                  shape: 'Sq'
                },
                AssignmentReviewReport: {
                  shape: 'S2r'
                },
                HITReviewReport: {
                  shape: 'S2r'
                },
                NextToken: {}
              }
            },
            idempotent: true
          },
          ListReviewableHITs: {
            input: {
              type: 'structure',
              members: {
                HITTypeId: {},
                Status: {},
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
                NumResults: {
                  type: 'integer'
                },
                HITs: {
                  shape: 'S2d'
                }
              }
            },
            idempotent: true
          },
          ListWorkerBlocks: {
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
              type: 'structure',
              members: {
                NextToken: {},
                NumResults: {
                  type: 'integer'
                },
                WorkerBlocks: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      WorkerId: {},
                      Reason: {}
                    }
                  }
                }
              }
            },
            idempotent: true
          },
          ListWorkersWithQualificationType: {
            input: {
              type: 'structure',
              required: ['QualificationTypeId'],
              members: {
                QualificationTypeId: {},
                Status: {},
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
                NumResults: {
                  type: 'integer'
                },
                Qualifications: {
                  type: 'list',
                  member: {
                    shape: 'S1x'
                  }
                }
              }
            },
            idempotent: true
          },
          NotifyWorkers: {
            input: {
              type: 'structure',
              required: ['Subject', 'MessageText', 'WorkerIds'],
              members: {
                Subject: {},
                MessageText: {},
                WorkerIds: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                NotifyWorkersFailureStatuses: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      NotifyWorkersFailureCode: {},
                      NotifyWorkersFailureMessage: {},
                      WorkerId: {}
                    }
                  }
                }
              }
            }
          },
          RejectAssignment: {
            input: {
              type: 'structure',
              required: ['AssignmentId', 'RequesterFeedback'],
              members: {
                AssignmentId: {},
                RequesterFeedback: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          RejectQualificationRequest: {
            input: {
              type: 'structure',
              required: ['QualificationRequestId'],
              members: {
                QualificationRequestId: {},
                Reason: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          SendBonus: {
            input: {
              type: 'structure',
              required: ['WorkerId', 'BonusAmount', 'AssignmentId', 'Reason'],
              members: {
                WorkerId: {},
                BonusAmount: {},
                AssignmentId: {},
                Reason: {},
                UniqueRequestToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          SendTestEventNotification: {
            input: {
              type: 'structure',
              required: ['Notification', 'TestEventType'],
              members: {
                Notification: {
                  shape: 'S3k'
                },
                TestEventType: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateExpirationForHIT: {
            input: {
              type: 'structure',
              required: ['HITId', 'ExpireAt'],
              members: {
                HITId: {},
                ExpireAt: {
                  type: 'timestamp'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          UpdateHITReviewStatus: {
            input: {
              type: 'structure',
              required: ['HITId'],
              members: {
                HITId: {},
                Revert: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          UpdateHITTypeOfHIT: {
            input: {
              type: 'structure',
              required: ['HITId', 'HITTypeId'],
              members: {
                HITId: {},
                HITTypeId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          UpdateNotificationSettings: {
            input: {
              type: 'structure',
              required: ['HITTypeId'],
              members: {
                HITTypeId: {},
                Notification: {
                  shape: 'S3k'
                },
                Active: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          UpdateQualificationType: {
            input: {
              type: 'structure',
              required: ['QualificationTypeId'],
              members: {
                QualificationTypeId: {},
                Description: {},
                QualificationTypeStatus: {},
                Test: {},
                AnswerKey: {},
                TestDurationInSeconds: {
                  type: 'long'
                },
                RetryDelayInSeconds: {
                  type: 'long'
                },
                AutoGranted: {
                  type: 'boolean'
                },
                AutoGrantedValue: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                QualificationType: {
                  shape: 'S1a'
                }
              }
            }
          }
        },
        shapes: {
          Si: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['QualificationTypeId', 'Comparator'],
              members: {
                QualificationTypeId: {},
                Comparator: {},
                IntegerValues: {
                  type: 'list',
                  member: {
                    type: 'integer'
                  }
                },
                LocaleValues: {
                  type: 'list',
                  member: {
                    shape: 'Sn'
                  }
                },
                RequiredToPreview: {
                  deprecated: true,
                  type: 'boolean'
                },
                ActionsGuarded: {}
              }
            }
          },
          Sn: {
            type: 'structure',
            required: ['Country'],
            members: {
              Country: {},
              Subdivision: {}
            }
          },
          Sq: {
            type: 'structure',
            required: ['PolicyName'],
            members: {
              PolicyName: {},
              Parameters: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    Key: {},
                    Values: {
                      shape: 'St'
                    },
                    MapEntries: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          Key: {},
                          Values: {
                            shape: 'St'
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          St: {
            type: 'list',
            member: {}
          },
          Sw: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Name', 'Value'],
              members: {
                Name: {},
                Value: {}
              }
            }
          },
          Sz: {
            type: 'structure',
            members: {
              HITId: {},
              HITTypeId: {},
              HITGroupId: {},
              HITLayoutId: {},
              CreationTime: {
                type: 'timestamp'
              },
              Title: {},
              Description: {},
              Question: {},
              Keywords: {},
              HITStatus: {},
              MaxAssignments: {
                type: 'integer'
              },
              Reward: {},
              AutoApprovalDelayInSeconds: {
                type: 'long'
              },
              Expiration: {
                type: 'timestamp'
              },
              AssignmentDurationInSeconds: {
                type: 'long'
              },
              RequesterAnnotation: {},
              QualificationRequirements: {
                shape: 'Si'
              },
              HITReviewStatus: {},
              NumberOfAssignmentsPending: {
                type: 'integer'
              },
              NumberOfAssignmentsAvailable: {
                type: 'integer'
              },
              NumberOfAssignmentsCompleted: {
                type: 'integer'
              }
            }
          },
          S1a: {
            type: 'structure',
            members: {
              QualificationTypeId: {},
              CreationTime: {
                type: 'timestamp'
              },
              Name: {},
              Description: {},
              Keywords: {},
              QualificationTypeStatus: {},
              Test: {},
              TestDurationInSeconds: {
                type: 'long'
              },
              AnswerKey: {},
              RetryDelayInSeconds: {
                type: 'long'
              },
              IsRequestable: {
                type: 'boolean'
              },
              AutoGranted: {
                type: 'boolean'
              },
              AutoGrantedValue: {
                type: 'integer'
              }
            }
          },
          S1p: {
            type: 'structure',
            members: {
              AssignmentId: {},
              WorkerId: {},
              HITId: {},
              AssignmentStatus: {},
              AutoApprovalTime: {
                type: 'timestamp'
              },
              AcceptTime: {
                type: 'timestamp'
              },
              SubmitTime: {
                type: 'timestamp'
              },
              ApprovalTime: {
                type: 'timestamp'
              },
              RejectionTime: {
                type: 'timestamp'
              },
              Deadline: {
                type: 'timestamp'
              },
              Answer: {},
              RequesterFeedback: {}
            }
          },
          S1x: {
            type: 'structure',
            members: {
              QualificationTypeId: {},
              WorkerId: {},
              GrantTime: {
                type: 'timestamp'
              },
              IntegerValue: {
                type: 'integer'
              },
              LocaleValue: {
                shape: 'Sn'
              },
              Status: {}
            }
          },
          S2d: {
            type: 'list',
            member: {
              shape: 'Sz'
            }
          },
          S2r: {
            type: 'structure',
            members: {
              ReviewResults: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    ActionId: {},
                    SubjectId: {},
                    SubjectType: {},
                    QuestionId: {},
                    Key: {},
                    Value: {}
                  }
                }
              },
              ReviewActions: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    ActionId: {},
                    ActionName: {},
                    TargetId: {},
                    TargetType: {},
                    Status: {},
                    CompleteTime: {
                      type: 'timestamp'
                    },
                    Result: {},
                    ErrorCode: {}
                  }
                }
              }
            }
          },
          S3k: {
            type: 'structure',
            required: ['Destination', 'Transport', 'Version', 'EventTypes'],
            members: {
              Destination: {},
              Transport: {},
              Version: {},
              EventTypes: {
                type: 'list',
                member: {}
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=0da412ac68c180359342ced7b399b5a002f19208.js.map