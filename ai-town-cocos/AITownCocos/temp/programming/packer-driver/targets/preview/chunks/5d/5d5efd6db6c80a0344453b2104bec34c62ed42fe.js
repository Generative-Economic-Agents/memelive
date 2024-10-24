System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2018-05-10',
          endpointPrefix: 'codeguru-security',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          protocols: ['rest-json'],
          serviceFullName: 'Amazon CodeGuru Security',
          serviceId: 'CodeGuru Security',
          signatureVersion: 'v4',
          signingName: 'codeguru-security',
          uid: 'codeguru-security-2018-05-10'
        },
        operations: {
          BatchGetFindings: {
            http: {
              requestUri: '/batchGetFindings',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['findingIdentifiers'],
              members: {
                findingIdentifiers: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['findingId', 'scanName'],
                    members: {
                      findingId: {},
                      scanName: {}
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              required: ['failedFindings', 'findings'],
              members: {
                failedFindings: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['errorCode', 'findingId', 'message', 'scanName'],
                    members: {
                      errorCode: {},
                      findingId: {},
                      message: {},
                      scanName: {}
                    }
                  }
                },
                findings: {
                  shape: 'Sa'
                }
              }
            }
          },
          CreateScan: {
            http: {
              requestUri: '/scans',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['resourceId', 'scanName'],
              members: {
                analysisType: {},
                clientToken: {
                  idempotencyToken: true
                },
                resourceId: {
                  shape: 'Sv'
                },
                scanName: {},
                scanType: {},
                tags: {
                  shape: 'Sy'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['resourceId', 'runId', 'scanName', 'scanState'],
              members: {
                resourceId: {
                  shape: 'Sv'
                },
                runId: {},
                scanName: {},
                scanNameArn: {},
                scanState: {}
              }
            }
          },
          CreateUploadUrl: {
            http: {
              requestUri: '/uploadUrl',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['scanName'],
              members: {
                scanName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['codeArtifactId', 'requestHeaders', 's3Url'],
              members: {
                codeArtifactId: {},
                requestHeaders: {
                  type: 'map',
                  key: {},
                  value: {},
                  sensitive: true
                },
                s3Url: {
                  type: 'string',
                  sensitive: true
                }
              }
            }
          },
          GetAccountConfiguration: {
            http: {
              method: 'GET',
              requestUri: '/accountConfiguration/get',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              required: ['encryptionConfig'],
              members: {
                encryptionConfig: {
                  shape: 'S1c'
                }
              }
            }
          },
          GetFindings: {
            http: {
              method: 'GET',
              requestUri: '/findings/{scanName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['scanName'],
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
                scanName: {
                  location: 'uri',
                  locationName: 'scanName'
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
                findings: {
                  shape: 'Sa'
                },
                nextToken: {}
              }
            }
          },
          GetMetricsSummary: {
            http: {
              method: 'GET',
              requestUri: '/metrics/summary',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['date'],
              members: {
                date: {
                  location: 'querystring',
                  locationName: 'date',
                  type: 'timestamp'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                metricsSummary: {
                  type: 'structure',
                  members: {
                    categoriesWithMostFindings: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          categoryName: {},
                          findingNumber: {
                            type: 'integer'
                          }
                        }
                      }
                    },
                    date: {
                      type: 'timestamp'
                    },
                    openFindings: {
                      shape: 'S1n'
                    },
                    scansWithMostOpenCriticalFindings: {
                      type: 'list',
                      member: {
                        shape: 'S1q'
                      }
                    },
                    scansWithMostOpenFindings: {
                      type: 'list',
                      member: {
                        shape: 'S1q'
                      }
                    }
                  }
                }
              }
            }
          },
          GetScan: {
            http: {
              method: 'GET',
              requestUri: '/scans/{scanName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['scanName'],
              members: {
                runId: {
                  location: 'querystring',
                  locationName: 'runId'
                },
                scanName: {
                  location: 'uri',
                  locationName: 'scanName'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['analysisType', 'createdAt', 'runId', 'scanName', 'scanState'],
              members: {
                analysisType: {},
                createdAt: {
                  type: 'timestamp'
                },
                errorMessage: {},
                numberOfRevisions: {
                  type: 'long'
                },
                runId: {},
                scanName: {},
                scanNameArn: {},
                scanState: {},
                updatedAt: {
                  type: 'timestamp'
                }
              }
            }
          },
          ListFindingsMetrics: {
            http: {
              method: 'GET',
              requestUri: '/metrics/findings',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['endDate', 'startDate'],
              members: {
                endDate: {
                  location: 'querystring',
                  locationName: 'endDate',
                  type: 'timestamp'
                },
                maxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                nextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                startDate: {
                  location: 'querystring',
                  locationName: 'startDate',
                  type: 'timestamp'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                findingsMetrics: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      closedFindings: {
                        shape: 'S1n'
                      },
                      date: {
                        type: 'timestamp'
                      },
                      meanTimeToClose: {
                        shape: 'S1n'
                      },
                      newFindings: {
                        shape: 'S1n'
                      },
                      openFindings: {
                        shape: 'S1n'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListScans: {
            http: {
              method: 'GET',
              requestUri: '/scans',
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
              members: {
                nextToken: {},
                summaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['createdAt', 'runId', 'scanName', 'scanState'],
                    members: {
                      createdAt: {
                        type: 'timestamp'
                      },
                      runId: {},
                      scanName: {},
                      scanNameArn: {},
                      scanState: {},
                      updatedAt: {
                        type: 'timestamp'
                      }
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
              members: {
                tags: {
                  shape: 'Sy'
                }
              }
            }
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
                  shape: 'Sy'
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
          UpdateAccountConfiguration: {
            http: {
              method: 'PUT',
              requestUri: '/updateAccountConfiguration',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['encryptionConfig'],
              members: {
                encryptionConfig: {
                  shape: 'S1c'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['encryptionConfig'],
              members: {
                encryptionConfig: {
                  shape: 'S1c'
                }
              }
            }
          }
        },
        shapes: {
          Sa: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                createdAt: {
                  type: 'timestamp'
                },
                description: {},
                detectorId: {},
                detectorName: {},
                detectorTags: {
                  type: 'list',
                  member: {}
                },
                generatorId: {},
                id: {},
                remediation: {
                  type: 'structure',
                  members: {
                    recommendation: {
                      type: 'structure',
                      members: {
                        text: {},
                        url: {}
                      }
                    },
                    suggestedFixes: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          code: {},
                          description: {}
                        }
                      }
                    }
                  }
                },
                resource: {
                  type: 'structure',
                  members: {
                    id: {},
                    subResourceId: {}
                  }
                },
                ruleId: {},
                severity: {},
                status: {},
                title: {},
                type: {},
                updatedAt: {
                  type: 'timestamp'
                },
                vulnerability: {
                  type: 'structure',
                  members: {
                    filePath: {
                      type: 'structure',
                      members: {
                        codeSnippet: {
                          type: 'list',
                          member: {
                            type: 'structure',
                            members: {
                              content: {},
                              number: {
                                type: 'integer'
                              }
                            }
                          }
                        },
                        endLine: {
                          type: 'integer'
                        },
                        name: {},
                        path: {},
                        startLine: {
                          type: 'integer'
                        }
                      }
                    },
                    id: {},
                    itemCount: {
                      deprecated: true,
                      deprecatedMessage: 'This shape is not used.',
                      type: 'integer'
                    },
                    referenceUrls: {
                      type: 'list',
                      member: {}
                    },
                    relatedVulnerabilities: {
                      type: 'list',
                      member: {}
                    }
                  }
                }
              }
            }
          },
          Sv: {
            type: 'structure',
            members: {
              codeArtifactId: {}
            },
            union: true
          },
          Sy: {
            type: 'map',
            key: {},
            value: {}
          },
          S1c: {
            type: 'structure',
            members: {
              kmsKeyArn: {}
            }
          },
          S1n: {
            type: 'structure',
            members: {
              critical: {
                type: 'double'
              },
              high: {
                type: 'double'
              },
              info: {
                type: 'double'
              },
              low: {
                type: 'double'
              },
              medium: {
                type: 'double'
              }
            }
          },
          S1q: {
            type: 'structure',
            members: {
              findingNumber: {
                type: 'integer'
              },
              scanName: {}
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=5d5efd6db6c80a0344453b2104bec34c62ed42fe.js.map