System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2022-10-30',
          endpointPrefix: 'arc-zonal-shift',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceFullName: 'AWS ARC - Zonal Shift',
          serviceId: 'ARC Zonal Shift',
          signatureVersion: 'v4',
          signingName: 'arc-zonal-shift',
          uid: 'arc-zonal-shift-2022-10-30'
        },
        operations: {
          CancelZonalShift: {
            http: {
              method: 'DELETE',
              requestUri: '/zonalshifts/{zonalShiftId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['zonalShiftId'],
              members: {
                zonalShiftId: {
                  location: 'uri',
                  locationName: 'zonalShiftId'
                }
              }
            },
            output: {
              shape: 'S3'
            }
          },
          CreatePracticeRunConfiguration: {
            http: {
              requestUri: '/configuration',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['outcomeAlarms', 'resourceIdentifier'],
              members: {
                blockedDates: {
                  shape: 'Sb'
                },
                blockedWindows: {
                  shape: 'Sd'
                },
                blockingAlarms: {
                  shape: 'Sf'
                },
                outcomeAlarms: {
                  shape: 'Sf'
                },
                resourceIdentifier: {}
              }
            },
            output: {
              type: 'structure',
              required: ['arn', 'name', 'practiceRunConfiguration', 'zonalAutoshiftStatus'],
              members: {
                arn: {},
                name: {},
                practiceRunConfiguration: {
                  shape: 'Sl'
                },
                zonalAutoshiftStatus: {}
              }
            }
          },
          DeletePracticeRunConfiguration: {
            http: {
              method: 'DELETE',
              requestUri: '/configuration/{resourceIdentifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['resourceIdentifier'],
              members: {
                resourceIdentifier: {
                  location: 'uri',
                  locationName: 'resourceIdentifier'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['arn', 'name', 'zonalAutoshiftStatus'],
              members: {
                arn: {},
                name: {},
                zonalAutoshiftStatus: {}
              }
            },
            idempotent: true
          },
          GetManagedResource: {
            http: {
              method: 'GET',
              requestUri: '/managedresources/{resourceIdentifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['resourceIdentifier'],
              members: {
                resourceIdentifier: {
                  location: 'uri',
                  locationName: 'resourceIdentifier'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['appliedWeights', 'zonalShifts'],
              members: {
                appliedWeights: {
                  shape: 'Sr'
                },
                arn: {},
                autoshifts: {
                  shape: 'St'
                },
                name: {},
                practiceRunConfiguration: {
                  shape: 'Sl'
                },
                zonalAutoshiftStatus: {},
                zonalShifts: {
                  shape: 'Sw'
                }
              }
            }
          },
          ListAutoshifts: {
            http: {
              method: 'GET',
              requestUri: '/autoshifts',
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
                },
                status: {
                  location: 'querystring',
                  locationName: 'status'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                items: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['awayFrom', 'endTime', 'startTime', 'status'],
                    members: {
                      awayFrom: {},
                      endTime: {
                        type: 'timestamp'
                      },
                      startTime: {
                        type: 'timestamp'
                      },
                      status: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListManagedResources: {
            http: {
              method: 'GET',
              requestUri: '/managedresources',
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
              required: ['items'],
              members: {
                items: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['availabilityZones'],
                    members: {
                      appliedWeights: {
                        shape: 'Sr'
                      },
                      arn: {},
                      autoshifts: {
                        shape: 'St'
                      },
                      availabilityZones: {
                        type: 'list',
                        member: {}
                      },
                      name: {},
                      practiceRunStatus: {},
                      zonalAutoshiftStatus: {},
                      zonalShifts: {
                        shape: 'Sw'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListZonalShifts: {
            http: {
              method: 'GET',
              requestUri: '/zonalshifts',
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
                },
                resourceIdentifier: {
                  location: 'querystring',
                  locationName: 'resourceIdentifier'
                },
                status: {
                  location: 'querystring',
                  locationName: 'status'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                items: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['awayFrom', 'comment', 'expiryTime', 'resourceIdentifier', 'startTime', 'status', 'zonalShiftId'],
                    members: {
                      awayFrom: {},
                      comment: {},
                      expiryTime: {
                        type: 'timestamp'
                      },
                      practiceRunOutcome: {},
                      resourceIdentifier: {},
                      startTime: {
                        type: 'timestamp'
                      },
                      status: {},
                      zonalShiftId: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          StartZonalShift: {
            http: {
              requestUri: '/zonalshifts',
              responseCode: 201
            },
            input: {
              type: 'structure',
              required: ['awayFrom', 'comment', 'expiresIn', 'resourceIdentifier'],
              members: {
                awayFrom: {},
                comment: {},
                expiresIn: {},
                resourceIdentifier: {}
              }
            },
            output: {
              shape: 'S3'
            }
          },
          UpdatePracticeRunConfiguration: {
            http: {
              method: 'PATCH',
              requestUri: '/configuration/{resourceIdentifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['resourceIdentifier'],
              members: {
                blockedDates: {
                  shape: 'Sb'
                },
                blockedWindows: {
                  shape: 'Sd'
                },
                blockingAlarms: {
                  shape: 'Sf'
                },
                outcomeAlarms: {
                  shape: 'Sf'
                },
                resourceIdentifier: {
                  location: 'uri',
                  locationName: 'resourceIdentifier'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['arn', 'name', 'practiceRunConfiguration', 'zonalAutoshiftStatus'],
              members: {
                arn: {},
                name: {},
                practiceRunConfiguration: {
                  shape: 'Sl'
                },
                zonalAutoshiftStatus: {}
              }
            }
          },
          UpdateZonalAutoshiftConfiguration: {
            http: {
              method: 'PUT',
              requestUri: '/managedresources/{resourceIdentifier}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['resourceIdentifier', 'zonalAutoshiftStatus'],
              members: {
                resourceIdentifier: {
                  location: 'uri',
                  locationName: 'resourceIdentifier'
                },
                zonalAutoshiftStatus: {}
              }
            },
            output: {
              type: 'structure',
              required: ['resourceIdentifier', 'zonalAutoshiftStatus'],
              members: {
                resourceIdentifier: {},
                zonalAutoshiftStatus: {}
              }
            },
            idempotent: true
          },
          UpdateZonalShift: {
            http: {
              method: 'PATCH',
              requestUri: '/zonalshifts/{zonalShiftId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['zonalShiftId'],
              members: {
                comment: {},
                expiresIn: {},
                zonalShiftId: {
                  location: 'uri',
                  locationName: 'zonalShiftId'
                }
              }
            },
            output: {
              shape: 'S3'
            }
          }
        },
        shapes: {
          S3: {
            type: 'structure',
            required: ['awayFrom', 'comment', 'expiryTime', 'resourceIdentifier', 'startTime', 'status', 'zonalShiftId'],
            members: {
              awayFrom: {},
              comment: {},
              expiryTime: {
                type: 'timestamp'
              },
              resourceIdentifier: {},
              startTime: {
                type: 'timestamp'
              },
              status: {},
              zonalShiftId: {}
            }
          },
          Sb: {
            type: 'list',
            member: {}
          },
          Sd: {
            type: 'list',
            member: {}
          },
          Sf: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['alarmIdentifier', 'type'],
              members: {
                alarmIdentifier: {},
                type: {}
              }
            }
          },
          Sl: {
            type: 'structure',
            required: ['outcomeAlarms'],
            members: {
              blockedDates: {
                shape: 'Sb'
              },
              blockedWindows: {
                shape: 'Sd'
              },
              blockingAlarms: {
                shape: 'Sf'
              },
              outcomeAlarms: {
                shape: 'Sf'
              }
            }
          },
          Sr: {
            type: 'map',
            key: {},
            value: {
              type: 'float'
            }
          },
          St: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['appliedStatus', 'awayFrom', 'startTime'],
              members: {
                appliedStatus: {},
                awayFrom: {},
                startTime: {
                  type: 'timestamp'
                }
              }
            }
          },
          Sw: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['appliedStatus', 'awayFrom', 'comment', 'expiryTime', 'resourceIdentifier', 'startTime', 'zonalShiftId'],
              members: {
                appliedStatus: {},
                awayFrom: {},
                comment: {},
                expiryTime: {
                  type: 'timestamp'
                },
                practiceRunOutcome: {},
                resourceIdentifier: {},
                startTime: {
                  type: 'timestamp'
                },
                zonalShiftId: {}
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=98223b47f1e8af514224fdf1619c63e7890cc9f5.js.map