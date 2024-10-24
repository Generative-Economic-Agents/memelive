System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2021-01-30',
          endpointPrefix: 'connect-campaigns',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          protocols: ['rest-json'],
          serviceFullName: 'AmazonConnectCampaignService',
          serviceId: 'ConnectCampaigns',
          signatureVersion: 'v4',
          signingName: 'connect-campaigns',
          uid: 'connectcampaigns-2021-01-30'
        },
        operations: {
          CreateCampaign: {
            http: {
              method: 'PUT',
              requestUri: '/campaigns',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['name', 'connectInstanceId', 'dialerConfig', 'outboundCallConfig'],
              members: {
                name: {},
                connectInstanceId: {},
                dialerConfig: {
                  shape: 'S4'
                },
                outboundCallConfig: {
                  shape: 'Sa'
                },
                tags: {
                  shape: 'Sg'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                id: {},
                arn: {},
                tags: {
                  shape: 'Sg'
                }
              }
            },
            idempotent: true
          },
          DeleteCampaign: {
            http: {
              method: 'DELETE',
              requestUri: '/campaigns/{id}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['id'],
              members: {
                id: {
                  location: 'uri',
                  locationName: 'id'
                }
              }
            },
            idempotent: true
          },
          DeleteConnectInstanceConfig: {
            http: {
              method: 'DELETE',
              requestUri: '/connect-instance/{connectInstanceId}/config',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['connectInstanceId'],
              members: {
                connectInstanceId: {
                  location: 'uri',
                  locationName: 'connectInstanceId'
                }
              }
            },
            idempotent: true
          },
          DeleteInstanceOnboardingJob: {
            http: {
              method: 'DELETE',
              requestUri: '/connect-instance/{connectInstanceId}/onboarding',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['connectInstanceId'],
              members: {
                connectInstanceId: {
                  location: 'uri',
                  locationName: 'connectInstanceId'
                }
              }
            },
            idempotent: true
          },
          DescribeCampaign: {
            http: {
              method: 'GET',
              requestUri: '/campaigns/{id}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['id'],
              members: {
                id: {
                  location: 'uri',
                  locationName: 'id'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                campaign: {
                  type: 'structure',
                  required: ['id', 'arn', 'name', 'connectInstanceId', 'dialerConfig', 'outboundCallConfig'],
                  members: {
                    id: {},
                    arn: {},
                    name: {},
                    connectInstanceId: {},
                    dialerConfig: {
                      shape: 'S4'
                    },
                    outboundCallConfig: {
                      shape: 'Sa'
                    },
                    tags: {
                      shape: 'Sg'
                    }
                  }
                }
              }
            }
          },
          GetCampaignState: {
            http: {
              method: 'GET',
              requestUri: '/campaigns/{id}/state',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['id'],
              members: {
                id: {
                  location: 'uri',
                  locationName: 'id'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                state: {}
              }
            }
          },
          GetCampaignStateBatch: {
            http: {
              requestUri: '/campaigns-state',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['campaignIds'],
              members: {
                campaignIds: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                successfulRequests: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      campaignId: {},
                      state: {}
                    }
                  }
                },
                failedRequests: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      campaignId: {},
                      failureCode: {}
                    }
                  }
                }
              }
            }
          },
          GetConnectInstanceConfig: {
            http: {
              method: 'GET',
              requestUri: '/connect-instance/{connectInstanceId}/config',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['connectInstanceId'],
              members: {
                connectInstanceId: {
                  location: 'uri',
                  locationName: 'connectInstanceId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                connectInstanceConfig: {
                  type: 'structure',
                  required: ['connectInstanceId', 'serviceLinkedRoleArn', 'encryptionConfig'],
                  members: {
                    connectInstanceId: {},
                    serviceLinkedRoleArn: {},
                    encryptionConfig: {
                      shape: 'S17'
                    }
                  }
                }
              }
            }
          },
          GetInstanceOnboardingJobStatus: {
            http: {
              method: 'GET',
              requestUri: '/connect-instance/{connectInstanceId}/onboarding',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['connectInstanceId'],
              members: {
                connectInstanceId: {
                  location: 'uri',
                  locationName: 'connectInstanceId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                connectInstanceOnboardingJobStatus: {
                  shape: 'S1d'
                }
              }
            }
          },
          ListCampaigns: {
            http: {
              requestUri: '/campaigns-summary',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                maxResults: {
                  type: 'integer'
                },
                nextToken: {},
                filters: {
                  type: 'structure',
                  members: {
                    instanceIdFilter: {
                      type: 'structure',
                      required: ['value', 'operator'],
                      members: {
                        value: {},
                        operator: {}
                      }
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                nextToken: {},
                campaignSummaryList: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['id', 'arn', 'name', 'connectInstanceId'],
                    members: {
                      id: {},
                      arn: {},
                      name: {},
                      connectInstanceId: {}
                    }
                  }
                }
              }
            }
          },
          ListTagsForResource: {
            http: {
              method: 'GET',
              requestUri: '/tags/{arn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['arn'],
              members: {
                arn: {
                  location: 'uri',
                  locationName: 'arn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                tags: {
                  shape: 'Sg'
                }
              }
            },
            idempotent: true
          },
          PauseCampaign: {
            http: {
              requestUri: '/campaigns/{id}/pause',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['id'],
              members: {
                id: {
                  location: 'uri',
                  locationName: 'id'
                }
              }
            }
          },
          PutDialRequestBatch: {
            http: {
              method: 'PUT',
              requestUri: '/campaigns/{id}/dial-requests',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['id', 'dialRequests'],
              members: {
                id: {
                  location: 'uri',
                  locationName: 'id'
                },
                dialRequests: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['clientToken', 'phoneNumber', 'expirationTime', 'attributes'],
                    members: {
                      clientToken: {},
                      phoneNumber: {
                        type: 'string',
                        sensitive: true
                      },
                      expirationTime: {
                        type: 'timestamp',
                        timestampFormat: 'iso8601'
                      },
                      attributes: {
                        type: 'map',
                        key: {},
                        value: {},
                        sensitive: true
                      }
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                successfulRequests: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      clientToken: {},
                      id: {}
                    }
                  }
                },
                failedRequests: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      clientToken: {},
                      id: {},
                      failureCode: {}
                    }
                  }
                }
              }
            },
            idempotent: true
          },
          ResumeCampaign: {
            http: {
              requestUri: '/campaigns/{id}/resume',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['id'],
              members: {
                id: {
                  location: 'uri',
                  locationName: 'id'
                }
              }
            }
          },
          StartCampaign: {
            http: {
              requestUri: '/campaigns/{id}/start',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['id'],
              members: {
                id: {
                  location: 'uri',
                  locationName: 'id'
                }
              }
            }
          },
          StartInstanceOnboardingJob: {
            http: {
              method: 'PUT',
              requestUri: '/connect-instance/{connectInstanceId}/onboarding',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['connectInstanceId', 'encryptionConfig'],
              members: {
                connectInstanceId: {
                  location: 'uri',
                  locationName: 'connectInstanceId'
                },
                encryptionConfig: {
                  shape: 'S17'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                connectInstanceOnboardingJobStatus: {
                  shape: 'S1d'
                }
              }
            },
            idempotent: true
          },
          StopCampaign: {
            http: {
              requestUri: '/campaigns/{id}/stop',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['id'],
              members: {
                id: {
                  location: 'uri',
                  locationName: 'id'
                }
              }
            }
          },
          TagResource: {
            http: {
              requestUri: '/tags/{arn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['arn', 'tags'],
              members: {
                arn: {
                  location: 'uri',
                  locationName: 'arn'
                },
                tags: {
                  shape: 'Sg'
                }
              }
            },
            idempotent: true
          },
          UntagResource: {
            http: {
              method: 'DELETE',
              requestUri: '/tags/{arn}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['arn', 'tagKeys'],
              members: {
                arn: {
                  location: 'uri',
                  locationName: 'arn'
                },
                tagKeys: {
                  location: 'querystring',
                  locationName: 'tagKeys',
                  type: 'list',
                  member: {}
                }
              }
            },
            idempotent: true
          },
          UpdateCampaignDialerConfig: {
            http: {
              requestUri: '/campaigns/{id}/dialer-config',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['id', 'dialerConfig'],
              members: {
                id: {
                  location: 'uri',
                  locationName: 'id'
                },
                dialerConfig: {
                  shape: 'S4'
                }
              }
            },
            idempotent: true
          },
          UpdateCampaignName: {
            http: {
              requestUri: '/campaigns/{id}/name',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['id', 'name'],
              members: {
                id: {
                  location: 'uri',
                  locationName: 'id'
                },
                name: {}
              }
            },
            idempotent: true
          },
          UpdateCampaignOutboundCallConfig: {
            http: {
              requestUri: '/campaigns/{id}/outbound-call-config',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['id'],
              members: {
                id: {
                  location: 'uri',
                  locationName: 'id'
                },
                connectContactFlowId: {},
                connectSourcePhoneNumber: {},
                answerMachineDetectionConfig: {
                  shape: 'Se'
                }
              }
            },
            idempotent: true
          }
        },
        shapes: {
          S4: {
            type: 'structure',
            members: {
              progressiveDialerConfig: {
                type: 'structure',
                required: ['bandwidthAllocation'],
                members: {
                  bandwidthAllocation: {
                    type: 'double'
                  },
                  dialingCapacity: {
                    type: 'double'
                  }
                }
              },
              predictiveDialerConfig: {
                type: 'structure',
                required: ['bandwidthAllocation'],
                members: {
                  bandwidthAllocation: {
                    type: 'double'
                  },
                  dialingCapacity: {
                    type: 'double'
                  }
                }
              },
              agentlessDialerConfig: {
                type: 'structure',
                members: {
                  dialingCapacity: {
                    type: 'double'
                  }
                }
              }
            },
            union: true
          },
          Sa: {
            type: 'structure',
            required: ['connectContactFlowId'],
            members: {
              connectContactFlowId: {},
              connectSourcePhoneNumber: {},
              connectQueueId: {},
              answerMachineDetectionConfig: {
                shape: 'Se'
              }
            }
          },
          Se: {
            type: 'structure',
            required: ['enableAnswerMachineDetection'],
            members: {
              enableAnswerMachineDetection: {
                type: 'boolean'
              },
              awaitAnswerMachinePrompt: {
                type: 'boolean'
              }
            }
          },
          Sg: {
            type: 'map',
            key: {},
            value: {}
          },
          S17: {
            type: 'structure',
            required: ['enabled'],
            members: {
              enabled: {
                type: 'boolean'
              },
              encryptionType: {},
              keyArn: {}
            }
          },
          S1d: {
            type: 'structure',
            required: ['connectInstanceId', 'status'],
            members: {
              connectInstanceId: {},
              status: {},
              failureCode: {}
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=c2713d50ef50edcec6553e4943827347f01c0970.js.map