System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2019-07-11',
          endpointPrefix: 'session.qldb',
          jsonVersion: '1.0',
          protocol: 'json',
          serviceAbbreviation: 'QLDB Session',
          serviceFullName: 'Amazon QLDB Session',
          serviceId: 'QLDB Session',
          signatureVersion: 'v4',
          signingName: 'qldb',
          targetPrefix: 'QLDBSession',
          uid: 'qldb-session-2019-07-11'
        },
        operations: {
          SendCommand: {
            input: {
              type: 'structure',
              members: {
                SessionToken: {},
                StartSession: {
                  type: 'structure',
                  required: ['LedgerName'],
                  members: {
                    LedgerName: {}
                  }
                },
                StartTransaction: {
                  type: 'structure',
                  members: {}
                },
                EndSession: {
                  type: 'structure',
                  members: {}
                },
                CommitTransaction: {
                  type: 'structure',
                  required: ['TransactionId', 'CommitDigest'],
                  members: {
                    TransactionId: {},
                    CommitDigest: {
                      type: 'blob'
                    }
                  }
                },
                AbortTransaction: {
                  type: 'structure',
                  members: {}
                },
                ExecuteStatement: {
                  type: 'structure',
                  required: ['TransactionId', 'Statement'],
                  members: {
                    TransactionId: {},
                    Statement: {},
                    Parameters: {
                      type: 'list',
                      member: {
                        shape: 'Se'
                      }
                    }
                  }
                },
                FetchPage: {
                  type: 'structure',
                  required: ['TransactionId', 'NextPageToken'],
                  members: {
                    TransactionId: {},
                    NextPageToken: {}
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                StartSession: {
                  type: 'structure',
                  members: {
                    SessionToken: {},
                    TimingInformation: {
                      shape: 'Sl'
                    }
                  }
                },
                StartTransaction: {
                  type: 'structure',
                  members: {
                    TransactionId: {},
                    TimingInformation: {
                      shape: 'Sl'
                    }
                  }
                },
                EndSession: {
                  type: 'structure',
                  members: {
                    TimingInformation: {
                      shape: 'Sl'
                    }
                  }
                },
                CommitTransaction: {
                  type: 'structure',
                  members: {
                    TransactionId: {},
                    CommitDigest: {
                      type: 'blob'
                    },
                    TimingInformation: {
                      shape: 'Sl'
                    },
                    ConsumedIOs: {
                      shape: 'Sq'
                    }
                  }
                },
                AbortTransaction: {
                  type: 'structure',
                  members: {
                    TimingInformation: {
                      shape: 'Sl'
                    }
                  }
                },
                ExecuteStatement: {
                  type: 'structure',
                  members: {
                    FirstPage: {
                      shape: 'Sv'
                    },
                    TimingInformation: {
                      shape: 'Sl'
                    },
                    ConsumedIOs: {
                      shape: 'Sq'
                    }
                  }
                },
                FetchPage: {
                  type: 'structure',
                  members: {
                    Page: {
                      shape: 'Sv'
                    },
                    TimingInformation: {
                      shape: 'Sl'
                    },
                    ConsumedIOs: {
                      shape: 'Sq'
                    }
                  }
                }
              }
            }
          }
        },
        shapes: {
          Se: {
            type: 'structure',
            members: {
              IonBinary: {
                type: 'blob'
              },
              IonText: {}
            }
          },
          Sl: {
            type: 'structure',
            members: {
              ProcessingTimeMilliseconds: {
                type: 'long'
              }
            }
          },
          Sq: {
            type: 'structure',
            members: {
              ReadIOs: {
                type: 'long'
              },
              WriteIOs: {
                type: 'long'
              }
            }
          },
          Sv: {
            type: 'structure',
            members: {
              Values: {
                type: 'list',
                member: {
                  shape: 'Se'
                }
              },
              NextPageToken: {}
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=488dae8a76ceb456c66203de70d7391bbf7145de.js.map