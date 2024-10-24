System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2016-08-04',
          endpointPrefix: 'health',
          jsonVersion: '1.1',
          protocol: 'json',
          serviceAbbreviation: 'AWSHealth',
          serviceFullName: 'AWS Health APIs and Notifications',
          serviceId: 'Health',
          signatureVersion: 'v4',
          targetPrefix: 'AWSHealth_20160804',
          uid: 'health-2016-08-04'
        },
        operations: {
          DescribeAffectedAccountsForOrganization: {
            input: {
              type: 'structure',
              required: ['eventArn'],
              members: {
                eventArn: {},
                nextToken: {},
                maxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                affectedAccounts: {
                  type: 'list',
                  member: {}
                },
                eventScopeCode: {},
                nextToken: {}
              }
            },
            idempotent: true
          },
          DescribeAffectedEntities: {
            input: {
              type: 'structure',
              required: ['filter'],
              members: {
                filter: {
                  type: 'structure',
                  required: ['eventArns'],
                  members: {
                    eventArns: {
                      shape: 'Sb'
                    },
                    entityArns: {
                      shape: 'Sc'
                    },
                    entityValues: {
                      shape: 'Se'
                    },
                    lastUpdatedTimes: {
                      shape: 'Sg'
                    },
                    tags: {
                      shape: 'Sj'
                    },
                    statusCodes: {
                      shape: 'Sn'
                    }
                  }
                },
                locale: {},
                nextToken: {},
                maxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                entities: {
                  shape: 'Sr'
                },
                nextToken: {}
              }
            },
            idempotent: true
          },
          DescribeAffectedEntitiesForOrganization: {
            input: {
              type: 'structure',
              members: {
                organizationEntityFilters: {
                  deprecated: true,
                  deprecatedMessage: 'This property is deprecated, use organizationEntityAccountFilters instead.',
                  type: 'list',
                  member: {
                    shape: 'Sw'
                  }
                },
                locale: {},
                nextToken: {},
                maxResults: {
                  type: 'integer'
                },
                organizationEntityAccountFilters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['eventArn'],
                    members: {
                      eventArn: {},
                      awsAccountId: {},
                      statusCodes: {
                        shape: 'Sn'
                      }
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                entities: {
                  shape: 'Sr'
                },
                failedSet: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      awsAccountId: {},
                      eventArn: {},
                      errorName: {},
                      errorMessage: {}
                    }
                  }
                },
                nextToken: {}
              }
            },
            idempotent: true
          },
          DescribeEntityAggregates: {
            input: {
              type: 'structure',
              members: {
                eventArns: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                entityAggregates: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      eventArn: {},
                      count: {
                        type: 'integer'
                      },
                      statuses: {
                        shape: 'S1a'
                      }
                    }
                  }
                }
              }
            },
            idempotent: true
          },
          DescribeEntityAggregatesForOrganization: {
            input: {
              type: 'structure',
              required: ['eventArns'],
              members: {
                eventArns: {
                  type: 'list',
                  member: {}
                },
                awsAccountIds: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                organizationEntityAggregates: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      eventArn: {},
                      count: {
                        type: 'integer'
                      },
                      statuses: {
                        shape: 'S1a'
                      },
                      accounts: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            accountId: {},
                            count: {
                              type: 'integer'
                            },
                            statuses: {
                              shape: 'S1a'
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            idempotent: true
          },
          DescribeEventAggregates: {
            input: {
              type: 'structure',
              required: ['aggregateField'],
              members: {
                filter: {
                  shape: 'S1k'
                },
                aggregateField: {},
                maxResults: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                eventAggregates: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      aggregateValue: {},
                      count: {
                        type: 'integer'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            },
            idempotent: true
          },
          DescribeEventDetails: {
            input: {
              type: 'structure',
              required: ['eventArns'],
              members: {
                eventArns: {
                  shape: 'Sb'
                },
                locale: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                successfulSet: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      event: {
                        shape: 'S26'
                      },
                      eventDescription: {
                        shape: 'S28'
                      },
                      eventMetadata: {
                        shape: 'S2a'
                      }
                    }
                  }
                },
                failedSet: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      eventArn: {},
                      errorName: {},
                      errorMessage: {}
                    }
                  }
                }
              }
            },
            idempotent: true
          },
          DescribeEventDetailsForOrganization: {
            input: {
              type: 'structure',
              required: ['organizationEventDetailFilters'],
              members: {
                organizationEventDetailFilters: {
                  type: 'list',
                  member: {
                    shape: 'Sw'
                  }
                },
                locale: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                successfulSet: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      awsAccountId: {},
                      event: {
                        shape: 'S26'
                      },
                      eventDescription: {
                        shape: 'S28'
                      },
                      eventMetadata: {
                        shape: 'S2a'
                      }
                    }
                  }
                },
                failedSet: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      awsAccountId: {},
                      eventArn: {},
                      errorName: {},
                      errorMessage: {}
                    }
                  }
                }
              }
            },
            idempotent: true
          },
          DescribeEventTypes: {
            input: {
              type: 'structure',
              members: {
                filter: {
                  type: 'structure',
                  members: {
                    eventTypeCodes: {
                      type: 'list',
                      member: {}
                    },
                    services: {
                      shape: 'S1n'
                    },
                    eventTypeCategories: {
                      type: 'list',
                      member: {}
                    }
                  }
                },
                locale: {},
                nextToken: {},
                maxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                eventTypes: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      service: {},
                      code: {},
                      category: {}
                    }
                  }
                },
                nextToken: {}
              }
            },
            idempotent: true
          },
          DescribeEvents: {
            input: {
              type: 'structure',
              members: {
                filter: {
                  shape: 'S1k'
                },
                nextToken: {},
                maxResults: {
                  type: 'integer'
                },
                locale: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                events: {
                  type: 'list',
                  member: {
                    shape: 'S26'
                  }
                },
                nextToken: {}
              }
            },
            idempotent: true
          },
          DescribeEventsForOrganization: {
            input: {
              type: 'structure',
              members: {
                filter: {
                  type: 'structure',
                  members: {
                    eventTypeCodes: {
                      shape: 'S1l'
                    },
                    awsAccountIds: {
                      type: 'list',
                      member: {}
                    },
                    services: {
                      shape: 'S1n'
                    },
                    regions: {
                      shape: 'S1p'
                    },
                    startTime: {
                      shape: 'Sh'
                    },
                    endTime: {
                      shape: 'Sh'
                    },
                    lastUpdatedTime: {
                      shape: 'Sh'
                    },
                    entityArns: {
                      shape: 'Sc'
                    },
                    entityValues: {
                      shape: 'Se'
                    },
                    eventTypeCategories: {
                      shape: 'S1t'
                    },
                    eventStatusCodes: {
                      shape: 'S1v'
                    }
                  }
                },
                nextToken: {},
                maxResults: {
                  type: 'integer'
                },
                locale: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                events: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      arn: {},
                      service: {},
                      eventTypeCode: {},
                      eventTypeCategory: {},
                      eventScopeCode: {},
                      region: {},
                      startTime: {
                        type: 'timestamp'
                      },
                      endTime: {
                        type: 'timestamp'
                      },
                      lastUpdatedTime: {
                        type: 'timestamp'
                      },
                      statusCode: {}
                    }
                  }
                },
                nextToken: {}
              }
            },
            idempotent: true
          },
          DescribeHealthServiceStatusForOrganization: {
            output: {
              type: 'structure',
              members: {
                healthServiceAccessStatusForOrganization: {}
              }
            },
            idempotent: true
          },
          DisableHealthServiceAccessForOrganization: {
            idempotent: true
          },
          EnableHealthServiceAccessForOrganization: {
            idempotent: true
          }
        },
        shapes: {
          Sb: {
            type: 'list',
            member: {}
          },
          Sc: {
            type: 'list',
            member: {}
          },
          Se: {
            type: 'list',
            member: {}
          },
          Sg: {
            type: 'list',
            member: {
              shape: 'Sh'
            }
          },
          Sh: {
            type: 'structure',
            members: {
              from: {
                type: 'timestamp'
              },
              to: {
                type: 'timestamp'
              }
            }
          },
          Sj: {
            type: 'list',
            member: {
              shape: 'Sk'
            }
          },
          Sk: {
            type: 'map',
            key: {},
            value: {}
          },
          Sn: {
            type: 'list',
            member: {}
          },
          Sr: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                entityArn: {},
                eventArn: {},
                entityValue: {},
                entityUrl: {},
                awsAccountId: {},
                lastUpdatedTime: {
                  type: 'timestamp'
                },
                statusCode: {},
                tags: {
                  shape: 'Sk'
                }
              }
            }
          },
          Sw: {
            type: 'structure',
            required: ['eventArn'],
            members: {
              eventArn: {},
              awsAccountId: {}
            }
          },
          S1a: {
            type: 'map',
            key: {},
            value: {
              type: 'integer'
            }
          },
          S1k: {
            type: 'structure',
            members: {
              eventArns: {
                shape: 'Sb'
              },
              eventTypeCodes: {
                shape: 'S1l'
              },
              services: {
                shape: 'S1n'
              },
              regions: {
                shape: 'S1p'
              },
              availabilityZones: {
                type: 'list',
                member: {}
              },
              startTimes: {
                shape: 'Sg'
              },
              endTimes: {
                shape: 'Sg'
              },
              lastUpdatedTimes: {
                shape: 'Sg'
              },
              entityArns: {
                shape: 'Sc'
              },
              entityValues: {
                shape: 'Se'
              },
              eventTypeCategories: {
                shape: 'S1t'
              },
              tags: {
                shape: 'Sj'
              },
              eventStatusCodes: {
                shape: 'S1v'
              }
            }
          },
          S1l: {
            type: 'list',
            member: {}
          },
          S1n: {
            type: 'list',
            member: {}
          },
          S1p: {
            type: 'list',
            member: {}
          },
          S1t: {
            type: 'list',
            member: {}
          },
          S1v: {
            type: 'list',
            member: {}
          },
          S26: {
            type: 'structure',
            members: {
              arn: {},
              service: {},
              eventTypeCode: {},
              eventTypeCategory: {},
              region: {},
              availabilityZone: {},
              startTime: {
                type: 'timestamp'
              },
              endTime: {
                type: 'timestamp'
              },
              lastUpdatedTime: {
                type: 'timestamp'
              },
              statusCode: {},
              eventScopeCode: {}
            }
          },
          S28: {
            type: 'structure',
            members: {
              latestDescription: {}
            }
          },
          S2a: {
            type: 'map',
            key: {},
            value: {}
          }
        }
      });
    }
  };
});
//# sourceMappingURL=99d34e4967339a59fc921da0d704ff4313e2aa52.js.map