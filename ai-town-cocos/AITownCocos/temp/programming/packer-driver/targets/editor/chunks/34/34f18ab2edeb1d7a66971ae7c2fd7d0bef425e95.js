System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2013-04-15',
          endpointPrefix: 'support',
          jsonVersion: '1.1',
          protocol: 'json',
          protocols: ['json'],
          serviceFullName: 'AWS Support',
          serviceId: 'Support',
          signatureVersion: 'v4',
          targetPrefix: 'AWSSupport_20130415',
          uid: 'support-2013-04-15'
        },
        operations: {
          AddAttachmentsToSet: {
            input: {
              type: 'structure',
              required: ['attachments'],
              members: {
                attachmentSetId: {},
                attachments: {
                  type: 'list',
                  member: {
                    shape: 'S4'
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                attachmentSetId: {},
                expiryTime: {}
              }
            }
          },
          AddCommunicationToCase: {
            input: {
              type: 'structure',
              required: ['communicationBody'],
              members: {
                caseId: {},
                communicationBody: {},
                ccEmailAddresses: {
                  shape: 'Sc'
                },
                attachmentSetId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                result: {
                  type: 'boolean'
                }
              }
            }
          },
          CreateCase: {
            input: {
              type: 'structure',
              required: ['subject', 'communicationBody'],
              members: {
                subject: {},
                serviceCode: {},
                severityCode: {},
                categoryCode: {},
                communicationBody: {},
                ccEmailAddresses: {
                  shape: 'Sc'
                },
                language: {},
                issueType: {},
                attachmentSetId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                caseId: {}
              }
            }
          },
          DescribeAttachment: {
            input: {
              type: 'structure',
              required: ['attachmentId'],
              members: {
                attachmentId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                attachment: {
                  shape: 'S4'
                }
              }
            }
          },
          DescribeCases: {
            input: {
              type: 'structure',
              members: {
                caseIdList: {
                  type: 'list',
                  member: {}
                },
                displayId: {},
                afterTime: {},
                beforeTime: {},
                includeResolvedCases: {
                  type: 'boolean'
                },
                nextToken: {},
                maxResults: {
                  type: 'integer'
                },
                language: {},
                includeCommunications: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                cases: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      caseId: {},
                      displayId: {},
                      subject: {},
                      status: {},
                      serviceCode: {},
                      categoryCode: {},
                      severityCode: {},
                      submittedBy: {},
                      timeCreated: {},
                      recentCommunications: {
                        type: 'structure',
                        members: {
                          communications: {
                            shape: 'S17'
                          },
                          nextToken: {}
                        }
                      },
                      ccEmailAddresses: {
                        shape: 'Sc'
                      },
                      language: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          DescribeCommunications: {
            input: {
              type: 'structure',
              required: ['caseId'],
              members: {
                caseId: {},
                beforeTime: {},
                afterTime: {},
                nextToken: {},
                maxResults: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                communications: {
                  shape: 'S17'
                },
                nextToken: {}
              }
            }
          },
          DescribeCreateCaseOptions: {
            input: {
              type: 'structure',
              required: ['issueType', 'serviceCode', 'language', 'categoryCode'],
              members: {
                issueType: {},
                serviceCode: {},
                language: {},
                categoryCode: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                languageAvailability: {},
                communicationTypes: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      type: {},
                      supportedHours: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            startTime: {},
                            endTime: {}
                          }
                        }
                      },
                      datesWithoutSupport: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            startDateTime: {},
                            endDateTime: {}
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          DescribeServices: {
            input: {
              type: 'structure',
              members: {
                serviceCodeList: {
                  type: 'list',
                  member: {}
                },
                language: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                services: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      code: {},
                      name: {},
                      categories: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            code: {},
                            name: {}
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          DescribeSeverityLevels: {
            input: {
              type: 'structure',
              members: {
                language: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                severityLevels: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      code: {},
                      name: {}
                    }
                  }
                }
              }
            }
          },
          DescribeSupportedLanguages: {
            input: {
              type: 'structure',
              required: ['issueType', 'serviceCode', 'categoryCode'],
              members: {
                issueType: {},
                serviceCode: {},
                categoryCode: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                supportedLanguages: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      code: {},
                      language: {},
                      display: {}
                    }
                  }
                }
              }
            }
          },
          DescribeTrustedAdvisorCheckRefreshStatuses: {
            input: {
              type: 'structure',
              required: ['checkIds'],
              members: {
                checkIds: {
                  shape: 'S2g'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['statuses'],
              members: {
                statuses: {
                  type: 'list',
                  member: {
                    shape: 'S2k'
                  }
                }
              }
            }
          },
          DescribeTrustedAdvisorCheckResult: {
            input: {
              type: 'structure',
              required: ['checkId'],
              members: {
                checkId: {},
                language: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                result: {
                  type: 'structure',
                  required: ['checkId', 'timestamp', 'status', 'resourcesSummary', 'categorySpecificSummary', 'flaggedResources'],
                  members: {
                    checkId: {},
                    timestamp: {},
                    status: {},
                    resourcesSummary: {
                      shape: 'S2p'
                    },
                    categorySpecificSummary: {
                      shape: 'S2q'
                    },
                    flaggedResources: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        required: ['status', 'resourceId', 'metadata'],
                        members: {
                          status: {},
                          region: {},
                          resourceId: {},
                          isSuppressed: {
                            type: 'boolean'
                          },
                          metadata: {
                            shape: 'S2g'
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          DescribeTrustedAdvisorCheckSummaries: {
            input: {
              type: 'structure',
              required: ['checkIds'],
              members: {
                checkIds: {
                  shape: 'S2g'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['summaries'],
              members: {
                summaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['checkId', 'timestamp', 'status', 'resourcesSummary', 'categorySpecificSummary'],
                    members: {
                      checkId: {},
                      timestamp: {},
                      status: {},
                      hasFlaggedResources: {
                        type: 'boolean'
                      },
                      resourcesSummary: {
                        shape: 'S2p'
                      },
                      categorySpecificSummary: {
                        shape: 'S2q'
                      }
                    }
                  }
                }
              }
            }
          },
          DescribeTrustedAdvisorChecks: {
            input: {
              type: 'structure',
              required: ['language'],
              members: {
                language: {}
              }
            },
            output: {
              type: 'structure',
              required: ['checks'],
              members: {
                checks: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['id', 'name', 'description', 'category', 'metadata'],
                    members: {
                      id: {},
                      name: {},
                      description: {},
                      category: {},
                      metadata: {
                        shape: 'S2g'
                      }
                    }
                  }
                }
              }
            }
          },
          RefreshTrustedAdvisorCheck: {
            input: {
              type: 'structure',
              required: ['checkId'],
              members: {
                checkId: {}
              }
            },
            output: {
              type: 'structure',
              required: ['status'],
              members: {
                status: {
                  shape: 'S2k'
                }
              }
            }
          },
          ResolveCase: {
            input: {
              type: 'structure',
              members: {
                caseId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                initialCaseStatus: {},
                finalCaseStatus: {}
              }
            }
          }
        },
        shapes: {
          S4: {
            type: 'structure',
            members: {
              fileName: {},
              data: {
                type: 'blob'
              }
            }
          },
          Sc: {
            type: 'list',
            member: {}
          },
          S17: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                caseId: {},
                body: {},
                submittedBy: {},
                timeCreated: {},
                attachmentSet: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      attachmentId: {},
                      fileName: {}
                    }
                  }
                }
              }
            }
          },
          S2g: {
            type: 'list',
            member: {}
          },
          S2k: {
            type: 'structure',
            required: ['checkId', 'status', 'millisUntilNextRefreshable'],
            members: {
              checkId: {},
              status: {},
              millisUntilNextRefreshable: {
                type: 'long'
              }
            }
          },
          S2p: {
            type: 'structure',
            required: ['resourcesProcessed', 'resourcesFlagged', 'resourcesIgnored', 'resourcesSuppressed'],
            members: {
              resourcesProcessed: {
                type: 'long'
              },
              resourcesFlagged: {
                type: 'long'
              },
              resourcesIgnored: {
                type: 'long'
              },
              resourcesSuppressed: {
                type: 'long'
              }
            }
          },
          S2q: {
            type: 'structure',
            members: {
              costOptimizing: {
                type: 'structure',
                required: ['estimatedMonthlySavings', 'estimatedPercentMonthlySavings'],
                members: {
                  estimatedMonthlySavings: {
                    type: 'double'
                  },
                  estimatedPercentMonthlySavings: {
                    type: 'double'
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
//# sourceMappingURL=34f18ab2edeb1d7a66971ae7c2fd7d0bef425e95.js.map