System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2018-05-10',
          endpointPrefix: 'ssm-incidents',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceAbbreviation: 'SSM Incidents',
          serviceFullName: 'AWS Systems Manager Incident Manager',
          serviceId: 'SSM Incidents',
          signatureVersion: 'v4',
          signingName: 'ssm-incidents',
          uid: 'ssm-incidents-2018-05-10'
        },
        operations: {
          BatchGetIncidentFindings: {
            http: {
              requestUri: '/batchGetIncidentFindings',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['findingIds', 'incidentRecordArn'],
              members: {
                findingIds: {
                  type: 'list',
                  member: {}
                },
                incidentRecordArn: {}
              }
            },
            output: {
              type: 'structure',
              required: ['errors', 'findings'],
              members: {
                errors: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['code', 'findingId', 'message'],
                    members: {
                      code: {},
                      findingId: {},
                      message: {}
                    }
                  }
                },
                findings: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['creationTime', 'id', 'lastModifiedTime'],
                    members: {
                      creationTime: {
                        type: 'timestamp'
                      },
                      details: {
                        type: 'structure',
                        members: {
                          cloudFormationStackUpdate: {
                            type: 'structure',
                            required: ['stackArn', 'startTime'],
                            members: {
                              endTime: {
                                type: 'timestamp'
                              },
                              stackArn: {},
                              startTime: {
                                type: 'timestamp'
                              }
                            }
                          },
                          codeDeployDeployment: {
                            type: 'structure',
                            required: ['deploymentGroupArn', 'deploymentId', 'startTime'],
                            members: {
                              deploymentGroupArn: {},
                              deploymentId: {},
                              endTime: {
                                type: 'timestamp'
                              },
                              startTime: {
                                type: 'timestamp'
                              }
                            }
                          }
                        },
                        union: true
                      },
                      id: {},
                      lastModifiedTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                }
              }
            }
          },
          CreateReplicationSet: {
            http: {
              requestUri: '/createReplicationSet',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['regions'],
              members: {
                clientToken: {
                  idempotencyToken: true
                },
                regions: {
                  type: 'map',
                  key: {},
                  value: {
                    type: 'structure',
                    members: {
                      sseKmsKeyId: {}
                    }
                  }
                },
                tags: {
                  shape: 'Sm'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['arn'],
              members: {
                arn: {}
              }
            }
          },
          CreateResponsePlan: {
            http: {
              requestUri: '/createResponsePlan',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['incidentTemplate', 'name'],
              members: {
                actions: {
                  shape: 'Sr'
                },
                chatChannel: {
                  shape: 'S16'
                },
                clientToken: {
                  idempotencyToken: true
                },
                displayName: {},
                engagements: {
                  shape: 'S1b'
                },
                incidentTemplate: {
                  shape: 'S1d'
                },
                integrations: {
                  shape: 'S1k'
                },
                name: {},
                tags: {
                  shape: 'Sm'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['arn'],
              members: {
                arn: {}
              }
            },
            idempotent: true
          },
          CreateTimelineEvent: {
            http: {
              requestUri: '/createTimelineEvent',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['eventData', 'eventTime', 'eventType', 'incidentRecordArn'],
              members: {
                clientToken: {
                  idempotencyToken: true
                },
                eventData: {},
                eventReferences: {
                  shape: 'S1v'
                },
                eventTime: {
                  type: 'timestamp'
                },
                eventType: {},
                incidentRecordArn: {}
              }
            },
            output: {
              type: 'structure',
              required: ['eventId', 'incidentRecordArn'],
              members: {
                eventId: {},
                incidentRecordArn: {}
              }
            },
            idempotent: true
          },
          DeleteIncidentRecord: {
            http: {
              requestUri: '/deleteIncidentRecord',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['arn'],
              members: {
                arn: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeleteReplicationSet: {
            http: {
              requestUri: '/deleteReplicationSet',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['arn'],
              members: {
                arn: {
                  location: 'querystring',
                  locationName: 'arn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteResourcePolicy: {
            http: {
              requestUri: '/deleteResourcePolicy',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['policyId', 'resourceArn'],
              members: {
                policyId: {},
                resourceArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteResponsePlan: {
            http: {
              requestUri: '/deleteResponsePlan',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['arn'],
              members: {
                arn: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          DeleteTimelineEvent: {
            http: {
              requestUri: '/deleteTimelineEvent',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['eventId', 'incidentRecordArn'],
              members: {
                eventId: {},
                incidentRecordArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          GetIncidentRecord: {
            http: {
              method: 'GET',
              requestUri: '/getIncidentRecord',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['arn'],
              members: {
                arn: {
                  location: 'querystring',
                  locationName: 'arn'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['incidentRecord'],
              members: {
                incidentRecord: {
                  type: 'structure',
                  required: ['arn', 'creationTime', 'dedupeString', 'impact', 'incidentRecordSource', 'lastModifiedBy', 'lastModifiedTime', 'status', 'title'],
                  members: {
                    arn: {},
                    automationExecutions: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          ssmExecutionArn: {}
                        },
                        union: true
                      }
                    },
                    chatChannel: {
                      shape: 'S16'
                    },
                    creationTime: {
                      type: 'timestamp'
                    },
                    dedupeString: {},
                    impact: {
                      type: 'integer'
                    },
                    incidentRecordSource: {
                      shape: 'S2h'
                    },
                    lastModifiedBy: {},
                    lastModifiedTime: {
                      type: 'timestamp'
                    },
                    notificationTargets: {
                      shape: 'S1g'
                    },
                    resolvedTime: {
                      type: 'timestamp'
                    },
                    status: {},
                    summary: {},
                    title: {}
                  }
                }
              }
            }
          },
          GetReplicationSet: {
            http: {
              method: 'GET',
              requestUri: '/getReplicationSet',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['arn'],
              members: {
                arn: {
                  location: 'querystring',
                  locationName: 'arn'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['replicationSet'],
              members: {
                replicationSet: {
                  type: 'structure',
                  required: ['createdBy', 'createdTime', 'deletionProtected', 'lastModifiedBy', 'lastModifiedTime', 'regionMap', 'status'],
                  members: {
                    arn: {},
                    createdBy: {},
                    createdTime: {
                      type: 'timestamp'
                    },
                    deletionProtected: {
                      type: 'boolean'
                    },
                    lastModifiedBy: {},
                    lastModifiedTime: {
                      type: 'timestamp'
                    },
                    regionMap: {
                      type: 'map',
                      key: {},
                      value: {
                        type: 'structure',
                        required: ['status', 'statusUpdateDateTime'],
                        members: {
                          sseKmsKeyId: {},
                          status: {},
                          statusMessage: {},
                          statusUpdateDateTime: {
                            type: 'timestamp'
                          }
                        }
                      }
                    },
                    status: {}
                  }
                }
              }
            }
          },
          GetResourcePolicies: {
            http: {
              requestUri: '/getResourcePolicies',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['resourceArn'],
              members: {
                maxResults: {
                  type: 'integer'
                },
                nextToken: {},
                resourceArn: {
                  location: 'querystring',
                  locationName: 'resourceArn'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['resourcePolicies'],
              members: {
                nextToken: {},
                resourcePolicies: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['policyDocument', 'policyId', 'ramResourceShareRegion'],
                    members: {
                      policyDocument: {},
                      policyId: {},
                      ramResourceShareRegion: {}
                    }
                  }
                }
              }
            }
          },
          GetResponsePlan: {
            http: {
              method: 'GET',
              requestUri: '/getResponsePlan',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['arn'],
              members: {
                arn: {
                  location: 'querystring',
                  locationName: 'arn'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['arn', 'incidentTemplate', 'name'],
              members: {
                actions: {
                  shape: 'Sr'
                },
                arn: {},
                chatChannel: {
                  shape: 'S16'
                },
                displayName: {},
                engagements: {
                  shape: 'S1b'
                },
                incidentTemplate: {
                  shape: 'S1d'
                },
                integrations: {
                  shape: 'S1k'
                },
                name: {}
              }
            }
          },
          GetTimelineEvent: {
            http: {
              method: 'GET',
              requestUri: '/getTimelineEvent',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['eventId', 'incidentRecordArn'],
              members: {
                eventId: {
                  location: 'querystring',
                  locationName: 'eventId'
                },
                incidentRecordArn: {
                  location: 'querystring',
                  locationName: 'incidentRecordArn'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['event'],
              members: {
                event: {
                  type: 'structure',
                  required: ['eventData', 'eventId', 'eventTime', 'eventType', 'eventUpdatedTime', 'incidentRecordArn'],
                  members: {
                    eventData: {},
                    eventId: {},
                    eventReferences: {
                      shape: 'S1v'
                    },
                    eventTime: {
                      type: 'timestamp'
                    },
                    eventType: {},
                    eventUpdatedTime: {
                      type: 'timestamp'
                    },
                    incidentRecordArn: {}
                  }
                }
              }
            }
          },
          ListIncidentFindings: {
            http: {
              requestUri: '/listIncidentFindings',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['incidentRecordArn'],
              members: {
                incidentRecordArn: {},
                maxResults: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              required: ['findings'],
              members: {
                findings: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['id', 'lastModifiedTime'],
                    members: {
                      id: {},
                      lastModifiedTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListIncidentRecords: {
            http: {
              requestUri: '/listIncidentRecords',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                filters: {
                  shape: 'S3b'
                },
                maxResults: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              required: ['incidentRecordSummaries'],
              members: {
                incidentRecordSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['arn', 'creationTime', 'impact', 'incidentRecordSource', 'status', 'title'],
                    members: {
                      arn: {},
                      creationTime: {
                        type: 'timestamp'
                      },
                      impact: {
                        type: 'integer'
                      },
                      incidentRecordSource: {
                        shape: 'S2h'
                      },
                      resolvedTime: {
                        type: 'timestamp'
                      },
                      status: {},
                      title: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListRelatedItems: {
            http: {
              requestUri: '/listRelatedItems',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['incidentRecordArn'],
              members: {
                incidentRecordArn: {},
                maxResults: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              required: ['relatedItems'],
              members: {
                nextToken: {},
                relatedItems: {
                  shape: 'S3p'
                }
              }
            }
          },
          ListReplicationSets: {
            http: {
              requestUri: '/listReplicationSets',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                maxResults: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              required: ['replicationSetArns'],
              members: {
                nextToken: {},
                replicationSetArns: {
                  type: 'list',
                  member: {}
                }
              }
            }
          },
          ListResponsePlans: {
            http: {
              requestUri: '/listResponsePlans',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                maxResults: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              required: ['responsePlanSummaries'],
              members: {
                nextToken: {},
                responsePlanSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['arn', 'name'],
                    members: {
                      arn: {},
                      displayName: {},
                      name: {}
                    }
                  }
                }
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
                  shape: 'Sm'
                }
              }
            }
          },
          ListTimelineEvents: {
            http: {
              requestUri: '/listTimelineEvents',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['incidentRecordArn'],
              members: {
                filters: {
                  shape: 'S3b'
                },
                incidentRecordArn: {},
                maxResults: {
                  type: 'integer'
                },
                nextToken: {},
                sortBy: {},
                sortOrder: {}
              }
            },
            output: {
              type: 'structure',
              required: ['eventSummaries'],
              members: {
                eventSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['eventId', 'eventTime', 'eventType', 'eventUpdatedTime', 'incidentRecordArn'],
                    members: {
                      eventId: {},
                      eventReferences: {
                        shape: 'S1v'
                      },
                      eventTime: {
                        type: 'timestamp'
                      },
                      eventType: {},
                      eventUpdatedTime: {
                        type: 'timestamp'
                      },
                      incidentRecordArn: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          PutResourcePolicy: {
            http: {
              requestUri: '/putResourcePolicy',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['policy', 'resourceArn'],
              members: {
                policy: {},
                resourceArn: {}
              }
            },
            output: {
              type: 'structure',
              required: ['policyId'],
              members: {
                policyId: {}
              }
            }
          },
          StartIncident: {
            http: {
              requestUri: '/startIncident',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['responsePlanArn'],
              members: {
                clientToken: {
                  idempotencyToken: true
                },
                impact: {
                  type: 'integer'
                },
                relatedItems: {
                  shape: 'S3p'
                },
                responsePlanArn: {},
                title: {},
                triggerDetails: {
                  type: 'structure',
                  required: ['source', 'timestamp'],
                  members: {
                    rawData: {},
                    source: {},
                    timestamp: {
                      type: 'timestamp'
                    },
                    triggerArn: {}
                  }
                }
              }
            },
            output: {
              type: 'structure',
              required: ['incidentRecordArn'],
              members: {
                incidentRecordArn: {}
              }
            },
            idempotent: true
          },
          TagResource: {
            http: {
              requestUri: '/tags/{resourceArn}',
              responseCode: 204
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
                  shape: 'Sm'
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
              responseCode: 204
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
          UpdateDeletionProtection: {
            http: {
              requestUri: '/updateDeletionProtection',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['arn', 'deletionProtected'],
              members: {
                arn: {},
                clientToken: {
                  idempotencyToken: true
                },
                deletionProtected: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateIncidentRecord: {
            http: {
              requestUri: '/updateIncidentRecord',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['arn'],
              members: {
                arn: {},
                chatChannel: {
                  shape: 'S16'
                },
                clientToken: {
                  idempotencyToken: true
                },
                impact: {
                  type: 'integer'
                },
                notificationTargets: {
                  shape: 'S1g'
                },
                status: {},
                summary: {},
                title: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          UpdateRelatedItems: {
            http: {
              requestUri: '/updateRelatedItems',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['incidentRecordArn', 'relatedItemsUpdate'],
              members: {
                clientToken: {
                  idempotencyToken: true
                },
                incidentRecordArn: {},
                relatedItemsUpdate: {
                  type: 'structure',
                  members: {
                    itemToAdd: {
                      shape: 'S3q'
                    },
                    itemToRemove: {
                      shape: 'S3r'
                    }
                  },
                  union: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          UpdateReplicationSet: {
            http: {
              requestUri: '/updateReplicationSet',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['actions', 'arn'],
              members: {
                actions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      addRegionAction: {
                        type: 'structure',
                        required: ['regionName'],
                        members: {
                          regionName: {},
                          sseKmsKeyId: {}
                        }
                      },
                      deleteRegionAction: {
                        type: 'structure',
                        required: ['regionName'],
                        members: {
                          regionName: {}
                        }
                      }
                    },
                    union: true
                  }
                },
                arn: {},
                clientToken: {
                  idempotencyToken: true
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateResponsePlan: {
            http: {
              requestUri: '/updateResponsePlan',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['arn'],
              members: {
                actions: {
                  shape: 'Sr'
                },
                arn: {},
                chatChannel: {
                  shape: 'S16'
                },
                clientToken: {
                  idempotencyToken: true
                },
                displayName: {},
                engagements: {
                  shape: 'S1b'
                },
                incidentTemplateDedupeString: {},
                incidentTemplateImpact: {
                  type: 'integer'
                },
                incidentTemplateNotificationTargets: {
                  shape: 'S1g'
                },
                incidentTemplateSummary: {},
                incidentTemplateTags: {
                  type: 'map',
                  key: {},
                  value: {}
                },
                incidentTemplateTitle: {},
                integrations: {
                  shape: 'S1k'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          UpdateTimelineEvent: {
            http: {
              requestUri: '/updateTimelineEvent',
              responseCode: 204
            },
            input: {
              type: 'structure',
              required: ['eventId', 'incidentRecordArn'],
              members: {
                clientToken: {
                  idempotencyToken: true
                },
                eventData: {},
                eventId: {},
                eventReferences: {
                  shape: 'S1v'
                },
                eventTime: {
                  type: 'timestamp'
                },
                eventType: {},
                incidentRecordArn: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          }
        },
        shapes: {
          Sm: {
            type: 'map',
            key: {},
            value: {}
          },
          Sr: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                ssmAutomation: {
                  type: 'structure',
                  required: ['documentName', 'roleArn'],
                  members: {
                    documentName: {},
                    documentVersion: {},
                    dynamicParameters: {
                      type: 'map',
                      key: {},
                      value: {
                        type: 'structure',
                        members: {
                          variable: {}
                        },
                        union: true
                      }
                    },
                    parameters: {
                      type: 'map',
                      key: {},
                      value: {
                        type: 'list',
                        member: {}
                      }
                    },
                    roleArn: {},
                    targetAccount: {}
                  }
                }
              },
              union: true
            }
          },
          S16: {
            type: 'structure',
            members: {
              chatbotSns: {
                type: 'list',
                member: {}
              },
              empty: {
                type: 'structure',
                members: {}
              }
            },
            union: true
          },
          S1b: {
            type: 'list',
            member: {}
          },
          S1d: {
            type: 'structure',
            required: ['impact', 'title'],
            members: {
              dedupeString: {},
              impact: {
                type: 'integer'
              },
              incidentTags: {
                shape: 'Sm'
              },
              notificationTargets: {
                shape: 'S1g'
              },
              summary: {},
              title: {}
            }
          },
          S1g: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                snsTopicArn: {}
              },
              union: true
            }
          },
          S1k: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                pagerDutyConfiguration: {
                  type: 'structure',
                  required: ['name', 'pagerDutyIncidentConfiguration', 'secretId'],
                  members: {
                    name: {},
                    pagerDutyIncidentConfiguration: {
                      type: 'structure',
                      required: ['serviceId'],
                      members: {
                        serviceId: {}
                      }
                    },
                    secretId: {}
                  }
                }
              },
              union: true
            }
          },
          S1v: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                relatedItemId: {},
                resource: {}
              },
              union: true
            }
          },
          S2h: {
            type: 'structure',
            required: ['createdBy', 'source'],
            members: {
              createdBy: {},
              invokedBy: {},
              resourceArn: {},
              source: {}
            }
          },
          S3b: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['condition', 'key'],
              members: {
                condition: {
                  type: 'structure',
                  members: {
                    after: {
                      type: 'timestamp'
                    },
                    before: {
                      type: 'timestamp'
                    },
                    equals: {
                      type: 'structure',
                      members: {
                        integerValues: {
                          type: 'list',
                          member: {
                            type: 'integer'
                          }
                        },
                        stringValues: {
                          type: 'list',
                          member: {}
                        }
                      },
                      union: true
                    }
                  },
                  union: true
                },
                key: {}
              }
            }
          },
          S3p: {
            type: 'list',
            member: {
              shape: 'S3q'
            }
          },
          S3q: {
            type: 'structure',
            required: ['identifier'],
            members: {
              generatedId: {},
              identifier: {
                shape: 'S3r'
              },
              title: {}
            }
          },
          S3r: {
            type: 'structure',
            required: ['type', 'value'],
            members: {
              type: {},
              value: {
                type: 'structure',
                members: {
                  arn: {},
                  metricDefinition: {},
                  pagerDutyIncidentDetail: {
                    type: 'structure',
                    required: ['id'],
                    members: {
                      autoResolve: {
                        type: 'boolean'
                      },
                      id: {},
                      secretId: {}
                    }
                  },
                  url: {}
                },
                union: true
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=f8f0793869971a570f781d5295182e7db9e91fd9.js.map