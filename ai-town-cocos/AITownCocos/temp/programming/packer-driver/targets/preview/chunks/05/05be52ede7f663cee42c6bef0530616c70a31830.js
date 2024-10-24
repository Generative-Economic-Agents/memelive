System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2018-10-23',
          endpointPrefix: 'data.iotevents',
          protocol: 'rest-json',
          serviceFullName: 'AWS IoT Events Data',
          serviceId: 'IoT Events Data',
          signatureVersion: 'v4',
          signingName: 'ioteventsdata',
          uid: 'iotevents-data-2018-10-23'
        },
        operations: {
          BatchAcknowledgeAlarm: {
            http: {
              requestUri: '/alarms/acknowledge',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['acknowledgeActionRequests'],
              members: {
                acknowledgeActionRequests: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['requestId', 'alarmModelName'],
                    members: {
                      requestId: {},
                      alarmModelName: {},
                      keyValue: {},
                      note: {}
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                errorEntries: {
                  shape: 'S9'
                }
              }
            }
          },
          BatchDeleteDetector: {
            http: {
              requestUri: '/detectors/delete',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['detectors'],
              members: {
                detectors: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['messageId', 'detectorModelName'],
                    members: {
                      messageId: {},
                      detectorModelName: {},
                      keyValue: {}
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                batchDeleteDetectorErrorEntries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      messageId: {},
                      errorCode: {},
                      errorMessage: {}
                    }
                  }
                }
              }
            }
          },
          BatchDisableAlarm: {
            http: {
              requestUri: '/alarms/disable',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['disableActionRequests'],
              members: {
                disableActionRequests: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['requestId', 'alarmModelName'],
                    members: {
                      requestId: {},
                      alarmModelName: {},
                      keyValue: {},
                      note: {}
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                errorEntries: {
                  shape: 'S9'
                }
              }
            }
          },
          BatchEnableAlarm: {
            http: {
              requestUri: '/alarms/enable',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['enableActionRequests'],
              members: {
                enableActionRequests: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['requestId', 'alarmModelName'],
                    members: {
                      requestId: {},
                      alarmModelName: {},
                      keyValue: {},
                      note: {}
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                errorEntries: {
                  shape: 'S9'
                }
              }
            }
          },
          BatchPutMessage: {
            http: {
              requestUri: '/inputs/messages',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['messages'],
              members: {
                messages: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['messageId', 'inputName', 'payload'],
                    members: {
                      messageId: {},
                      inputName: {},
                      payload: {
                        type: 'blob'
                      },
                      timestamp: {
                        type: 'structure',
                        members: {
                          timeInMillis: {
                            type: 'long'
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                BatchPutMessageErrorEntries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      messageId: {},
                      errorCode: {},
                      errorMessage: {}
                    }
                  }
                }
              }
            }
          },
          BatchResetAlarm: {
            http: {
              requestUri: '/alarms/reset',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['resetActionRequests'],
              members: {
                resetActionRequests: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['requestId', 'alarmModelName'],
                    members: {
                      requestId: {},
                      alarmModelName: {},
                      keyValue: {},
                      note: {}
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                errorEntries: {
                  shape: 'S9'
                }
              }
            }
          },
          BatchSnoozeAlarm: {
            http: {
              requestUri: '/alarms/snooze',
              responseCode: 202
            },
            input: {
              type: 'structure',
              required: ['snoozeActionRequests'],
              members: {
                snoozeActionRequests: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['requestId', 'alarmModelName', 'snoozeDuration'],
                    members: {
                      requestId: {},
                      alarmModelName: {},
                      keyValue: {},
                      note: {},
                      snoozeDuration: {
                        type: 'integer'
                      }
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                errorEntries: {
                  shape: 'S9'
                }
              }
            }
          },
          BatchUpdateDetector: {
            http: {
              requestUri: '/detectors',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['detectors'],
              members: {
                detectors: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['messageId', 'detectorModelName', 'state'],
                    members: {
                      messageId: {},
                      detectorModelName: {},
                      keyValue: {},
                      state: {
                        type: 'structure',
                        required: ['stateName', 'variables', 'timers'],
                        members: {
                          stateName: {},
                          variables: {
                            type: 'list',
                            member: {
                              type: 'structure',
                              required: ['name', 'value'],
                              members: {
                                name: {},
                                value: {}
                              }
                            }
                          },
                          timers: {
                            type: 'list',
                            member: {
                              type: 'structure',
                              required: ['name', 'seconds'],
                              members: {
                                name: {},
                                seconds: {
                                  type: 'integer'
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                batchUpdateDetectorErrorEntries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      messageId: {},
                      errorCode: {},
                      errorMessage: {}
                    }
                  }
                }
              }
            }
          },
          DescribeAlarm: {
            http: {
              method: 'GET',
              requestUri: '/alarms/{alarmModelName}/keyValues/'
            },
            input: {
              type: 'structure',
              required: ['alarmModelName'],
              members: {
                alarmModelName: {
                  location: 'uri',
                  locationName: 'alarmModelName'
                },
                keyValue: {
                  location: 'querystring',
                  locationName: 'keyValue'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                alarm: {
                  type: 'structure',
                  members: {
                    alarmModelName: {},
                    alarmModelVersion: {},
                    keyValue: {},
                    alarmState: {
                      type: 'structure',
                      members: {
                        stateName: {},
                        ruleEvaluation: {
                          type: 'structure',
                          members: {
                            simpleRuleEvaluation: {
                              type: 'structure',
                              members: {
                                inputPropertyValue: {},
                                operator: {},
                                thresholdValue: {}
                              }
                            }
                          }
                        },
                        customerAction: {
                          type: 'structure',
                          members: {
                            actionName: {},
                            snoozeActionConfiguration: {
                              type: 'structure',
                              members: {
                                snoozeDuration: {
                                  type: 'integer'
                                },
                                note: {}
                              }
                            },
                            enableActionConfiguration: {
                              type: 'structure',
                              members: {
                                note: {}
                              }
                            },
                            disableActionConfiguration: {
                              type: 'structure',
                              members: {
                                note: {}
                              }
                            },
                            acknowledgeActionConfiguration: {
                              type: 'structure',
                              members: {
                                note: {}
                              }
                            },
                            resetActionConfiguration: {
                              type: 'structure',
                              members: {
                                note: {}
                              }
                            }
                          }
                        },
                        systemEvent: {
                          type: 'structure',
                          members: {
                            eventType: {},
                            stateChangeConfiguration: {
                              type: 'structure',
                              members: {
                                triggerType: {}
                              }
                            }
                          }
                        }
                      }
                    },
                    severity: {
                      type: 'integer'
                    },
                    creationTime: {
                      type: 'timestamp'
                    },
                    lastUpdateTime: {
                      type: 'timestamp'
                    }
                  }
                }
              }
            }
          },
          DescribeDetector: {
            http: {
              method: 'GET',
              requestUri: '/detectors/{detectorModelName}/keyValues/'
            },
            input: {
              type: 'structure',
              required: ['detectorModelName'],
              members: {
                detectorModelName: {
                  location: 'uri',
                  locationName: 'detectorModelName'
                },
                keyValue: {
                  location: 'querystring',
                  locationName: 'keyValue'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                detector: {
                  type: 'structure',
                  members: {
                    detectorModelName: {},
                    keyValue: {},
                    detectorModelVersion: {},
                    state: {
                      type: 'structure',
                      required: ['stateName', 'variables', 'timers'],
                      members: {
                        stateName: {},
                        variables: {
                          type: 'list',
                          member: {
                            type: 'structure',
                            required: ['name', 'value'],
                            members: {
                              name: {},
                              value: {}
                            }
                          }
                        },
                        timers: {
                          type: 'list',
                          member: {
                            type: 'structure',
                            required: ['name', 'timestamp'],
                            members: {
                              name: {},
                              timestamp: {
                                type: 'timestamp'
                              }
                            }
                          }
                        }
                      }
                    },
                    creationTime: {
                      type: 'timestamp'
                    },
                    lastUpdateTime: {
                      type: 'timestamp'
                    }
                  }
                }
              }
            }
          },
          ListAlarms: {
            http: {
              method: 'GET',
              requestUri: '/alarms/{alarmModelName}'
            },
            input: {
              type: 'structure',
              required: ['alarmModelName'],
              members: {
                alarmModelName: {
                  location: 'uri',
                  locationName: 'alarmModelName'
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
              members: {
                alarmSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      alarmModelName: {},
                      alarmModelVersion: {},
                      keyValue: {},
                      stateName: {},
                      creationTime: {
                        type: 'timestamp'
                      },
                      lastUpdateTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListDetectors: {
            http: {
              method: 'GET',
              requestUri: '/detectors/{detectorModelName}'
            },
            input: {
              type: 'structure',
              required: ['detectorModelName'],
              members: {
                detectorModelName: {
                  location: 'uri',
                  locationName: 'detectorModelName'
                },
                stateName: {
                  location: 'querystring',
                  locationName: 'stateName'
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
              members: {
                detectorSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      detectorModelName: {},
                      keyValue: {},
                      detectorModelVersion: {},
                      state: {
                        type: 'structure',
                        members: {
                          stateName: {}
                        }
                      },
                      creationTime: {
                        type: 'timestamp'
                      },
                      lastUpdateTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          }
        },
        shapes: {
          S9: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                requestId: {},
                errorCode: {},
                errorMessage: {}
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=05be52ede7f663cee42c6bef0530616c70a31830.js.map