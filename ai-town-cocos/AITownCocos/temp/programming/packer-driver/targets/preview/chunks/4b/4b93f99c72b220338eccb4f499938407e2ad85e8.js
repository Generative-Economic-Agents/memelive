System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2020-06-08',
          endpointPrefix: 'inspector2',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          protocols: ['rest-json'],
          serviceAbbreviation: 'Inspector2',
          serviceFullName: 'Inspector2',
          serviceId: 'Inspector2',
          signatureVersion: 'v4',
          signingName: 'inspector2',
          uid: 'inspector2-2020-06-08'
        },
        operations: {
          AssociateMember: {
            http: {
              requestUri: '/members/associate',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['accountId'],
              members: {
                accountId: {}
              }
            },
            output: {
              type: 'structure',
              required: ['accountId'],
              members: {
                accountId: {}
              }
            }
          },
          BatchGetAccountStatus: {
            http: {
              requestUri: '/status/batch/get',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                accountIds: {
                  shape: 'S5'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['accounts'],
              members: {
                accounts: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['accountId', 'resourceState', 'state'],
                    members: {
                      accountId: {},
                      resourceState: {
                        type: 'structure',
                        required: ['ec2', 'ecr'],
                        members: {
                          ec2: {
                            shape: 'Sa'
                          },
                          ecr: {
                            shape: 'Sa'
                          },
                          lambda: {
                            shape: 'Sa'
                          },
                          lambdaCode: {
                            shape: 'Sa'
                          }
                        }
                      },
                      state: {
                        shape: 'Sa'
                      }
                    }
                  }
                },
                failedAccounts: {
                  shape: 'Se'
                }
              }
            }
          },
          BatchGetCodeSnippet: {
            http: {
              requestUri: '/codesnippet/batchget',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['findingArns'],
              members: {
                findingArns: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                codeSnippetResults: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      codeSnippet: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          required: ['content', 'lineNumber'],
                          members: {
                            content: {},
                            lineNumber: {
                              type: 'integer'
                            }
                          }
                        }
                      },
                      endLine: {
                        type: 'integer'
                      },
                      findingArn: {},
                      startLine: {
                        type: 'integer'
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
                  }
                },
                errors: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['errorCode', 'errorMessage', 'findingArn'],
                    members: {
                      errorCode: {},
                      errorMessage: {},
                      findingArn: {}
                    }
                  }
                }
              }
            }
          },
          BatchGetFindingDetails: {
            http: {
              requestUri: '/findings/details/batch/get',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['findingArns'],
              members: {
                findingArns: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                errors: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['errorCode', 'errorMessage', 'findingArn'],
                    members: {
                      errorCode: {},
                      errorMessage: {},
                      findingArn: {}
                    }
                  }
                },
                findingDetails: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      cisaData: {
                        shape: 'S16'
                      },
                      cwes: {
                        shape: 'S1a'
                      },
                      epssScore: {
                        type: 'double'
                      },
                      evidences: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            evidenceDetail: {},
                            evidenceRule: {},
                            severity: {}
                          }
                        }
                      },
                      exploitObserved: {
                        shape: 'S1i'
                      },
                      findingArn: {},
                      referenceUrls: {
                        shape: 'S1l'
                      },
                      riskScore: {
                        type: 'integer'
                      },
                      tools: {
                        type: 'list',
                        member: {}
                      },
                      ttps: {
                        shape: 'S1q'
                      }
                    }
                  }
                }
              }
            }
          },
          BatchGetFreeTrialInfo: {
            http: {
              requestUri: '/freetrialinfo/batchget',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['accountIds'],
              members: {
                accountIds: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              required: ['accounts', 'failedAccounts'],
              members: {
                accounts: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['accountId', 'freeTrialInfo'],
                    members: {
                      accountId: {},
                      freeTrialInfo: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          required: ['end', 'start', 'status', 'type'],
                          members: {
                            end: {
                              type: 'timestamp'
                            },
                            start: {
                              type: 'timestamp'
                            },
                            status: {},
                            type: {}
                          }
                        }
                      }
                    }
                  }
                },
                failedAccounts: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['accountId', 'code', 'message'],
                    members: {
                      accountId: {},
                      code: {},
                      message: {}
                    }
                  }
                }
              }
            }
          },
          BatchGetMemberEc2DeepInspectionStatus: {
            http: {
              requestUri: '/ec2deepinspectionstatus/member/batch/get',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                accountIds: {
                  shape: 'S5'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                accountIds: {
                  shape: 'S29'
                },
                failedAccountIds: {
                  shape: 'S2c'
                }
              }
            }
          },
          BatchUpdateMemberEc2DeepInspectionStatus: {
            http: {
              requestUri: '/ec2deepinspectionstatus/member/batch/update',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['accountIds'],
              members: {
                accountIds: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['accountId', 'activateDeepInspection'],
                    members: {
                      accountId: {},
                      activateDeepInspection: {
                        type: 'boolean'
                      }
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                accountIds: {
                  shape: 'S29'
                },
                failedAccountIds: {
                  shape: 'S2c'
                }
              }
            }
          },
          CancelFindingsReport: {
            http: {
              requestUri: '/reporting/cancel',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['reportId'],
              members: {
                reportId: {}
              }
            },
            output: {
              type: 'structure',
              required: ['reportId'],
              members: {
                reportId: {}
              }
            }
          },
          CancelSbomExport: {
            http: {
              requestUri: '/sbomexport/cancel',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['reportId'],
              members: {
                reportId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                reportId: {}
              }
            },
            idempotent: true
          },
          CreateCisScanConfiguration: {
            http: {
              requestUri: '/cis/scan-configuration/create',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['scanName', 'schedule', 'securityLevel', 'targets'],
              members: {
                scanName: {},
                schedule: {
                  shape: 'S2q'
                },
                securityLevel: {},
                tags: {
                  shape: 'S31'
                },
                targets: {
                  type: 'structure',
                  required: ['accountIds', 'targetResourceTags'],
                  members: {
                    accountIds: {
                      shape: 'S35'
                    },
                    targetResourceTags: {
                      shape: 'S37'
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                scanConfigurationArn: {}
              }
            }
          },
          CreateFilter: {
            http: {
              requestUri: '/filters/create',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['action', 'filterCriteria', 'name'],
              members: {
                action: {},
                description: {},
                filterCriteria: {
                  shape: 'S3e'
                },
                name: {},
                reason: {},
                tags: {
                  shape: 'S3x'
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
          CreateFindingsReport: {
            http: {
              requestUri: '/reporting/create',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['reportFormat', 's3Destination'],
              members: {
                filterCriteria: {
                  shape: 'S3e'
                },
                reportFormat: {},
                s3Destination: {
                  shape: 'S42'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                reportId: {}
              }
            }
          },
          CreateSbomExport: {
            http: {
              requestUri: '/sbomexport/create',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['reportFormat', 's3Destination'],
              members: {
                reportFormat: {},
                resourceFilterCriteria: {
                  shape: 'S46'
                },
                s3Destination: {
                  shape: 'S42'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                reportId: {}
              }
            },
            idempotent: true
          },
          DeleteCisScanConfiguration: {
            http: {
              requestUri: '/cis/scan-configuration/delete',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['scanConfigurationArn'],
              members: {
                scanConfigurationArn: {}
              }
            },
            output: {
              type: 'structure',
              required: ['scanConfigurationArn'],
              members: {
                scanConfigurationArn: {}
              }
            }
          },
          DeleteFilter: {
            http: {
              requestUri: '/filters/delete',
              responseCode: 200
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
              required: ['arn'],
              members: {
                arn: {}
              }
            }
          },
          DescribeOrganizationConfiguration: {
            http: {
              requestUri: '/organizationconfiguration/describe',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {
                autoEnable: {
                  shape: 'S4l'
                },
                maxAccountLimitReached: {
                  type: 'boolean'
                }
              }
            }
          },
          Disable: {
            http: {
              requestUri: '/disable',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                accountIds: {
                  shape: 'S5'
                },
                resourceTypes: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              required: ['accounts'],
              members: {
                accounts: {
                  shape: 'S4q'
                },
                failedAccounts: {
                  shape: 'Se'
                }
              }
            }
          },
          DisableDelegatedAdminAccount: {
            http: {
              requestUri: '/delegatedadminaccounts/disable',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['delegatedAdminAccountId'],
              members: {
                delegatedAdminAccountId: {}
              }
            },
            output: {
              type: 'structure',
              required: ['delegatedAdminAccountId'],
              members: {
                delegatedAdminAccountId: {}
              }
            }
          },
          DisassociateMember: {
            http: {
              requestUri: '/members/disassociate',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['accountId'],
              members: {
                accountId: {}
              }
            },
            output: {
              type: 'structure',
              required: ['accountId'],
              members: {
                accountId: {}
              }
            }
          },
          Enable: {
            http: {
              requestUri: '/enable',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['resourceTypes'],
              members: {
                accountIds: {
                  shape: 'S5'
                },
                clientToken: {
                  idempotencyToken: true
                },
                resourceTypes: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              required: ['accounts'],
              members: {
                accounts: {
                  shape: 'S4q'
                },
                failedAccounts: {
                  shape: 'Se'
                }
              }
            }
          },
          EnableDelegatedAdminAccount: {
            http: {
              requestUri: '/delegatedadminaccounts/enable',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['delegatedAdminAccountId'],
              members: {
                clientToken: {
                  idempotencyToken: true
                },
                delegatedAdminAccountId: {}
              }
            },
            output: {
              type: 'structure',
              required: ['delegatedAdminAccountId'],
              members: {
                delegatedAdminAccountId: {}
              }
            }
          },
          GetCisScanReport: {
            http: {
              requestUri: '/cis/scan/report/get',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['scanArn'],
              members: {
                reportFormat: {},
                scanArn: {},
                targetAccounts: {
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                status: {},
                url: {}
              }
            }
          },
          GetCisScanResultDetails: {
            http: {
              requestUri: '/cis/scan-result/details/get',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['accountId', 'scanArn', 'targetResourceId'],
              members: {
                accountId: {},
                filterCriteria: {
                  type: 'structure',
                  members: {
                    checkIdFilters: {
                      shape: 'S5a'
                    },
                    findingArnFilters: {
                      type: 'list',
                      member: {
                        shape: 'S5b'
                      }
                    },
                    findingStatusFilters: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        required: ['comparison', 'value'],
                        members: {
                          comparison: {},
                          value: {}
                        }
                      }
                    },
                    securityLevelFilters: {
                      shape: 'S5i'
                    },
                    titleFilters: {
                      shape: 'S5l'
                    }
                  }
                },
                maxResults: {
                  type: 'integer'
                },
                nextToken: {},
                scanArn: {},
                sortBy: {},
                sortOrder: {},
                targetResourceId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                nextToken: {},
                scanResultDetails: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['scanArn'],
                    members: {
                      accountId: {},
                      checkDescription: {},
                      checkId: {},
                      findingArn: {},
                      level: {},
                      platform: {},
                      remediation: {},
                      scanArn: {},
                      status: {},
                      statusReason: {},
                      targetResourceId: {},
                      title: {}
                    }
                  }
                }
              }
            }
          },
          GetConfiguration: {
            http: {
              requestUri: '/configuration/get',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {
                ec2Configuration: {
                  type: 'structure',
                  members: {
                    scanModeState: {
                      type: 'structure',
                      members: {
                        scanMode: {},
                        scanModeStatus: {}
                      }
                    }
                  }
                },
                ecrConfiguration: {
                  type: 'structure',
                  members: {
                    rescanDurationState: {
                      type: 'structure',
                      members: {
                        pullDateRescanDuration: {},
                        rescanDuration: {},
                        status: {},
                        updatedAt: {
                          type: 'timestamp'
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          GetDelegatedAdminAccount: {
            http: {
              requestUri: '/delegatedadminaccounts/get',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {
                delegatedAdmin: {
                  type: 'structure',
                  members: {
                    accountId: {},
                    relationshipStatus: {}
                  }
                }
              }
            }
          },
          GetEc2DeepInspectionConfiguration: {
            http: {
              requestUri: '/ec2deepinspectionconfiguration/get',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {
                errorMessage: {},
                orgPackagePaths: {
                  shape: 'S6d'
                },
                packagePaths: {
                  shape: 'S6d'
                },
                status: {}
              }
            }
          },
          GetEncryptionKey: {
            http: {
              method: 'GET',
              requestUri: '/encryptionkey/get',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['resourceType', 'scanType'],
              members: {
                resourceType: {
                  location: 'querystring',
                  locationName: 'resourceType'
                },
                scanType: {
                  location: 'querystring',
                  locationName: 'scanType'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['kmsKeyId'],
              members: {
                kmsKeyId: {}
              }
            }
          },
          GetFindingsReportStatus: {
            http: {
              requestUri: '/reporting/status/get',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                reportId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                destination: {
                  shape: 'S42'
                },
                errorCode: {},
                errorMessage: {},
                filterCriteria: {
                  shape: 'S3e'
                },
                reportId: {},
                status: {}
              }
            }
          },
          GetMember: {
            http: {
              requestUri: '/members/get',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['accountId'],
              members: {
                accountId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                member: {
                  shape: 'S6r'
                }
              }
            }
          },
          GetSbomExport: {
            http: {
              requestUri: '/sbomexport/get',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['reportId'],
              members: {
                reportId: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                errorCode: {},
                errorMessage: {},
                filterCriteria: {
                  shape: 'S46'
                },
                format: {},
                reportId: {},
                s3Destination: {
                  shape: 'S42'
                },
                status: {}
              }
            },
            idempotent: true
          },
          ListAccountPermissions: {
            http: {
              requestUri: '/accountpermissions/list',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                maxResults: {
                  type: 'integer'
                },
                nextToken: {},
                service: {}
              }
            },
            output: {
              type: 'structure',
              required: ['permissions'],
              members: {
                nextToken: {},
                permissions: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['operation', 'service'],
                    members: {
                      operation: {},
                      service: {}
                    }
                  }
                }
              }
            }
          },
          ListCisScanConfigurations: {
            http: {
              requestUri: '/cis/scan-configuration/list',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                filterCriteria: {
                  type: 'structure',
                  members: {
                    scanConfigurationArnFilters: {
                      shape: 'S73'
                    },
                    scanNameFilters: {
                      shape: 'S74'
                    },
                    targetResourceTagFilters: {
                      shape: 'S75'
                    }
                  }
                },
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
              members: {
                nextToken: {},
                scanConfigurations: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['scanConfigurationArn'],
                    members: {
                      ownerId: {},
                      scanConfigurationArn: {},
                      scanName: {},
                      schedule: {
                        shape: 'S2q'
                      },
                      securityLevel: {},
                      tags: {
                        shape: 'S31'
                      },
                      targets: {
                        shape: 'S7e'
                      }
                    }
                  }
                }
              }
            }
          },
          ListCisScanResultsAggregatedByChecks: {
            http: {
              requestUri: '/cis/scan-result/check/list',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['scanArn'],
              members: {
                filterCriteria: {
                  type: 'structure',
                  members: {
                    accountIdFilters: {
                      type: 'list',
                      member: {
                        shape: 'S5b'
                      }
                    },
                    checkIdFilters: {
                      shape: 'S5a'
                    },
                    failedResourcesFilters: {
                      shape: 'S7j'
                    },
                    platformFilters: {
                      shape: 'S7l'
                    },
                    securityLevelFilters: {
                      shape: 'S5i'
                    },
                    titleFilters: {
                      shape: 'S5l'
                    }
                  }
                },
                maxResults: {
                  type: 'integer'
                },
                nextToken: {},
                scanArn: {},
                sortBy: {},
                sortOrder: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                checkAggregations: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['scanArn'],
                    members: {
                      accountId: {},
                      checkDescription: {},
                      checkId: {},
                      level: {},
                      platform: {},
                      scanArn: {},
                      statusCounts: {
                        shape: 'S7r'
                      },
                      title: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListCisScanResultsAggregatedByTargetResource: {
            http: {
              requestUri: '/cis/scan-result/resource/list',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['scanArn'],
              members: {
                filterCriteria: {
                  type: 'structure',
                  members: {
                    accountIdFilters: {
                      shape: 'S7u'
                    },
                    checkIdFilters: {
                      shape: 'S5a'
                    },
                    failedChecksFilters: {
                      shape: 'S7j'
                    },
                    platformFilters: {
                      shape: 'S7l'
                    },
                    statusFilters: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        required: ['comparison', 'value'],
                        members: {
                          comparison: {},
                          value: {}
                        }
                      }
                    },
                    targetResourceIdFilters: {
                      shape: 'S7z'
                    },
                    targetResourceTagFilters: {
                      shape: 'S75'
                    },
                    targetStatusFilters: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        required: ['comparison', 'value'],
                        members: {
                          comparison: {},
                          value: {}
                        }
                      }
                    },
                    targetStatusReasonFilters: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        required: ['comparison', 'value'],
                        members: {
                          comparison: {},
                          value: {}
                        }
                      }
                    }
                  }
                },
                maxResults: {
                  type: 'integer'
                },
                nextToken: {},
                scanArn: {},
                sortBy: {},
                sortOrder: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                nextToken: {},
                targetResourceAggregations: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['scanArn'],
                    members: {
                      accountId: {},
                      platform: {},
                      scanArn: {},
                      statusCounts: {
                        shape: 'S7r'
                      },
                      targetResourceId: {},
                      targetResourceTags: {
                        shape: 'S37'
                      },
                      targetStatus: {},
                      targetStatusReason: {}
                    }
                  }
                }
              }
            }
          },
          ListCisScans: {
            http: {
              requestUri: '/cis/scan/list',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                detailLevel: {},
                filterCriteria: {
                  type: 'structure',
                  members: {
                    failedChecksFilters: {
                      shape: 'S7j'
                    },
                    scanArnFilters: {
                      type: 'list',
                      member: {
                        shape: 'S5b'
                      }
                    },
                    scanAtFilters: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          earliestScanStartTime: {
                            type: 'timestamp'
                          },
                          latestScanStartTime: {
                            type: 'timestamp'
                          }
                        }
                      }
                    },
                    scanConfigurationArnFilters: {
                      shape: 'S73'
                    },
                    scanNameFilters: {
                      shape: 'S74'
                    },
                    scanStatusFilters: {
                      type: 'list',
                      member: {
                        type: 'structure',
                        required: ['comparison', 'value'],
                        members: {
                          comparison: {},
                          value: {}
                        }
                      }
                    },
                    scheduledByFilters: {
                      type: 'list',
                      member: {
                        shape: 'S5b'
                      }
                    },
                    targetAccountIdFilters: {
                      shape: 'S7u'
                    },
                    targetResourceIdFilters: {
                      shape: 'S7z'
                    },
                    targetResourceTagFilters: {
                      shape: 'S75'
                    }
                  }
                },
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
              members: {
                nextToken: {},
                scans: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['scanArn', 'scanConfigurationArn'],
                    members: {
                      failedChecks: {
                        type: 'integer'
                      },
                      scanArn: {},
                      scanConfigurationArn: {},
                      scanDate: {
                        type: 'timestamp'
                      },
                      scanName: {},
                      scheduledBy: {},
                      securityLevel: {},
                      status: {},
                      targets: {
                        shape: 'S7e'
                      },
                      totalChecks: {
                        type: 'integer'
                      }
                    }
                  }
                }
              }
            }
          },
          ListCoverage: {
            http: {
              requestUri: '/coverage/list',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                filterCriteria: {
                  shape: 'S8s'
                },
                maxResults: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                coveredResources: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['accountId', 'resourceId', 'resourceType', 'scanType'],
                    members: {
                      accountId: {},
                      lastScannedAt: {
                        type: 'timestamp'
                      },
                      resourceId: {},
                      resourceMetadata: {
                        type: 'structure',
                        members: {
                          ec2: {
                            type: 'structure',
                            members: {
                              amiId: {},
                              platform: {},
                              tags: {
                                shape: 'S3x'
                              }
                            }
                          },
                          ecrImage: {
                            type: 'structure',
                            members: {
                              imagePulledAt: {
                                type: 'timestamp'
                              },
                              tags: {
                                type: 'list',
                                member: {}
                              }
                            }
                          },
                          ecrRepository: {
                            type: 'structure',
                            members: {
                              name: {},
                              scanFrequency: {}
                            }
                          },
                          lambdaFunction: {
                            type: 'structure',
                            members: {
                              functionName: {},
                              functionTags: {
                                shape: 'S3x'
                              },
                              layers: {
                                type: 'list',
                                member: {}
                              },
                              runtime: {}
                            }
                          }
                        }
                      },
                      resourceType: {},
                      scanMode: {},
                      scanStatus: {
                        type: 'structure',
                        required: ['reason', 'statusCode'],
                        members: {
                          reason: {},
                          statusCode: {}
                        }
                      },
                      scanType: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListCoverageStatistics: {
            http: {
              requestUri: '/coverage/statistics/list',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                filterCriteria: {
                  shape: 'S8s'
                },
                groupBy: {},
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              required: ['totalCounts'],
              members: {
                countsByGroup: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      count: {
                        type: 'long'
                      },
                      groupKey: {}
                    }
                  }
                },
                nextToken: {},
                totalCounts: {
                  type: 'long'
                }
              }
            }
          },
          ListDelegatedAdminAccounts: {
            http: {
              requestUri: '/delegatedadminaccounts/list',
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
              members: {
                delegatedAdminAccounts: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      accountId: {},
                      status: {}
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListFilters: {
            http: {
              requestUri: '/filters/list',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                action: {},
                arns: {
                  type: 'list',
                  member: {}
                },
                maxResults: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              required: ['filters'],
              members: {
                filters: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['action', 'arn', 'createdAt', 'criteria', 'name', 'ownerId', 'updatedAt'],
                    members: {
                      action: {},
                      arn: {},
                      createdAt: {
                        type: 'timestamp'
                      },
                      criteria: {
                        shape: 'S3e'
                      },
                      description: {},
                      name: {},
                      ownerId: {},
                      reason: {},
                      tags: {
                        shape: 'S3x'
                      },
                      updatedAt: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListFindingAggregations: {
            http: {
              requestUri: '/findings/aggregation/list',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['aggregationType'],
              members: {
                accountIds: {
                  shape: 'S3f'
                },
                aggregationRequest: {
                  type: 'structure',
                  members: {
                    accountAggregation: {
                      type: 'structure',
                      members: {
                        findingType: {},
                        resourceType: {},
                        sortBy: {},
                        sortOrder: {}
                      }
                    },
                    amiAggregation: {
                      type: 'structure',
                      members: {
                        amis: {
                          shape: 'S3f'
                        },
                        sortBy: {},
                        sortOrder: {}
                      }
                    },
                    awsEcrContainerAggregation: {
                      type: 'structure',
                      members: {
                        architectures: {
                          shape: 'S3f'
                        },
                        imageShas: {
                          shape: 'S3f'
                        },
                        imageTags: {
                          shape: 'S3f'
                        },
                        repositories: {
                          shape: 'S3f'
                        },
                        resourceIds: {
                          shape: 'S3f'
                        },
                        sortBy: {},
                        sortOrder: {}
                      }
                    },
                    ec2InstanceAggregation: {
                      type: 'structure',
                      members: {
                        amis: {
                          shape: 'S3f'
                        },
                        instanceIds: {
                          shape: 'S3f'
                        },
                        instanceTags: {
                          shape: 'S3q'
                        },
                        operatingSystems: {
                          shape: 'S3f'
                        },
                        sortBy: {},
                        sortOrder: {}
                      }
                    },
                    findingTypeAggregation: {
                      type: 'structure',
                      members: {
                        findingType: {},
                        resourceType: {},
                        sortBy: {},
                        sortOrder: {}
                      }
                    },
                    imageLayerAggregation: {
                      type: 'structure',
                      members: {
                        layerHashes: {
                          shape: 'S3f'
                        },
                        repositories: {
                          shape: 'S3f'
                        },
                        resourceIds: {
                          shape: 'S3f'
                        },
                        sortBy: {},
                        sortOrder: {}
                      }
                    },
                    lambdaFunctionAggregation: {
                      type: 'structure',
                      members: {
                        functionNames: {
                          shape: 'S3f'
                        },
                        functionTags: {
                          shape: 'S3q'
                        },
                        resourceIds: {
                          shape: 'S3f'
                        },
                        runtimes: {
                          shape: 'S3f'
                        },
                        sortBy: {},
                        sortOrder: {}
                      }
                    },
                    lambdaLayerAggregation: {
                      type: 'structure',
                      members: {
                        functionNames: {
                          shape: 'S3f'
                        },
                        layerArns: {
                          shape: 'S3f'
                        },
                        resourceIds: {
                          shape: 'S3f'
                        },
                        sortBy: {},
                        sortOrder: {}
                      }
                    },
                    packageAggregation: {
                      type: 'structure',
                      members: {
                        packageNames: {
                          shape: 'S3f'
                        },
                        sortBy: {},
                        sortOrder: {}
                      }
                    },
                    repositoryAggregation: {
                      type: 'structure',
                      members: {
                        repositories: {
                          shape: 'S3f'
                        },
                        sortBy: {},
                        sortOrder: {}
                      }
                    },
                    titleAggregation: {
                      type: 'structure',
                      members: {
                        findingType: {},
                        resourceType: {},
                        sortBy: {},
                        sortOrder: {},
                        titles: {
                          shape: 'S3f'
                        },
                        vulnerabilityIds: {
                          shape: 'S3f'
                        }
                      }
                    }
                  },
                  union: true
                },
                aggregationType: {},
                maxResults: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              required: ['aggregationType'],
              members: {
                aggregationType: {},
                nextToken: {},
                responses: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      accountAggregation: {
                        type: 'structure',
                        members: {
                          accountId: {},
                          severityCounts: {
                            shape: 'Sb3'
                          }
                        }
                      },
                      amiAggregation: {
                        type: 'structure',
                        required: ['ami'],
                        members: {
                          accountId: {},
                          affectedInstances: {
                            type: 'long'
                          },
                          ami: {},
                          severityCounts: {
                            shape: 'Sb3'
                          }
                        }
                      },
                      awsEcrContainerAggregation: {
                        type: 'structure',
                        required: ['resourceId'],
                        members: {
                          accountId: {},
                          architecture: {},
                          imageSha: {},
                          imageTags: {
                            type: 'list',
                            member: {}
                          },
                          repository: {},
                          resourceId: {},
                          severityCounts: {
                            shape: 'Sb3'
                          }
                        }
                      },
                      ec2InstanceAggregation: {
                        type: 'structure',
                        required: ['instanceId'],
                        members: {
                          accountId: {},
                          ami: {},
                          instanceId: {},
                          instanceTags: {
                            shape: 'S3x'
                          },
                          networkFindings: {
                            type: 'long'
                          },
                          operatingSystem: {},
                          severityCounts: {
                            shape: 'Sb3'
                          }
                        }
                      },
                      findingTypeAggregation: {
                        type: 'structure',
                        members: {
                          accountId: {},
                          severityCounts: {
                            shape: 'Sb3'
                          }
                        }
                      },
                      imageLayerAggregation: {
                        type: 'structure',
                        required: ['accountId', 'layerHash', 'repository', 'resourceId'],
                        members: {
                          accountId: {},
                          layerHash: {},
                          repository: {},
                          resourceId: {},
                          severityCounts: {
                            shape: 'Sb3'
                          }
                        }
                      },
                      lambdaFunctionAggregation: {
                        type: 'structure',
                        required: ['resourceId'],
                        members: {
                          accountId: {},
                          functionName: {},
                          lambdaTags: {
                            shape: 'S3x'
                          },
                          lastModifiedAt: {
                            type: 'timestamp'
                          },
                          resourceId: {},
                          runtime: {},
                          severityCounts: {
                            shape: 'Sb3'
                          }
                        }
                      },
                      lambdaLayerAggregation: {
                        type: 'structure',
                        required: ['accountId', 'functionName', 'layerArn', 'resourceId'],
                        members: {
                          accountId: {},
                          functionName: {},
                          layerArn: {},
                          resourceId: {},
                          severityCounts: {
                            shape: 'Sb3'
                          }
                        }
                      },
                      packageAggregation: {
                        type: 'structure',
                        required: ['packageName'],
                        members: {
                          accountId: {},
                          packageName: {},
                          severityCounts: {
                            shape: 'Sb3'
                          }
                        }
                      },
                      repositoryAggregation: {
                        type: 'structure',
                        required: ['repository'],
                        members: {
                          accountId: {},
                          affectedImages: {
                            type: 'long'
                          },
                          repository: {},
                          severityCounts: {
                            shape: 'Sb3'
                          }
                        }
                      },
                      titleAggregation: {
                        type: 'structure',
                        required: ['title'],
                        members: {
                          accountId: {},
                          severityCounts: {
                            shape: 'Sb3'
                          },
                          title: {},
                          vulnerabilityId: {}
                        }
                      }
                    },
                    union: true
                  }
                }
              }
            }
          },
          ListFindings: {
            http: {
              requestUri: '/findings/list',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                filterCriteria: {
                  shape: 'S3e'
                },
                maxResults: {
                  type: 'integer'
                },
                nextToken: {},
                sortCriteria: {
                  type: 'structure',
                  required: ['field', 'sortOrder'],
                  members: {
                    field: {},
                    sortOrder: {}
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                findings: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['awsAccountId', 'description', 'findingArn', 'firstObservedAt', 'lastObservedAt', 'remediation', 'resources', 'severity', 'status', 'type'],
                    members: {
                      awsAccountId: {},
                      codeVulnerabilityDetails: {
                        type: 'structure',
                        required: ['cwes', 'detectorId', 'detectorName', 'filePath'],
                        members: {
                          cwes: {
                            type: 'list',
                            member: {}
                          },
                          detectorId: {},
                          detectorName: {},
                          detectorTags: {
                            type: 'list',
                            member: {}
                          },
                          filePath: {
                            type: 'structure',
                            required: ['endLine', 'fileName', 'filePath', 'startLine'],
                            members: {
                              endLine: {
                                type: 'integer'
                              },
                              fileName: {},
                              filePath: {},
                              startLine: {
                                type: 'integer'
                              }
                            }
                          },
                          referenceUrls: {
                            type: 'list',
                            member: {}
                          },
                          ruleId: {},
                          sourceLambdaLayerArn: {}
                        }
                      },
                      description: {},
                      epss: {
                        type: 'structure',
                        members: {
                          score: {
                            type: 'double'
                          }
                        }
                      },
                      exploitAvailable: {},
                      exploitabilityDetails: {
                        type: 'structure',
                        members: {
                          lastKnownExploitAt: {
                            type: 'timestamp'
                          }
                        }
                      },
                      findingArn: {},
                      firstObservedAt: {
                        type: 'timestamp'
                      },
                      fixAvailable: {},
                      inspectorScore: {
                        type: 'double'
                      },
                      inspectorScoreDetails: {
                        type: 'structure',
                        members: {
                          adjustedCvss: {
                            type: 'structure',
                            required: ['score', 'scoreSource', 'scoringVector', 'version'],
                            members: {
                              adjustments: {
                                type: 'list',
                                member: {
                                  type: 'structure',
                                  required: ['metric', 'reason'],
                                  members: {
                                    metric: {},
                                    reason: {}
                                  }
                                }
                              },
                              cvssSource: {},
                              score: {
                                type: 'double'
                              },
                              scoreSource: {},
                              scoringVector: {},
                              version: {}
                            }
                          }
                        }
                      },
                      lastObservedAt: {
                        type: 'timestamp'
                      },
                      networkReachabilityDetails: {
                        type: 'structure',
                        required: ['networkPath', 'openPortRange', 'protocol'],
                        members: {
                          networkPath: {
                            type: 'structure',
                            members: {
                              steps: {
                                type: 'list',
                                member: {
                                  type: 'structure',
                                  required: ['componentId', 'componentType'],
                                  members: {
                                    componentId: {},
                                    componentType: {}
                                  }
                                }
                              }
                            }
                          },
                          openPortRange: {
                            type: 'structure',
                            required: ['begin', 'end'],
                            members: {
                              begin: {
                                type: 'integer'
                              },
                              end: {
                                type: 'integer'
                              }
                            }
                          },
                          protocol: {}
                        }
                      },
                      packageVulnerabilityDetails: {
                        type: 'structure',
                        required: ['source', 'vulnerabilityId'],
                        members: {
                          cvss: {
                            type: 'list',
                            member: {
                              type: 'structure',
                              required: ['baseScore', 'scoringVector', 'source', 'version'],
                              members: {
                                baseScore: {
                                  type: 'double'
                                },
                                scoringVector: {},
                                source: {},
                                version: {}
                              }
                            }
                          },
                          referenceUrls: {
                            type: 'list',
                            member: {}
                          },
                          relatedVulnerabilities: {
                            type: 'list',
                            member: {}
                          },
                          source: {},
                          sourceUrl: {},
                          vendorCreatedAt: {
                            type: 'timestamp'
                          },
                          vendorSeverity: {},
                          vendorUpdatedAt: {
                            type: 'timestamp'
                          },
                          vulnerabilityId: {},
                          vulnerablePackages: {
                            type: 'list',
                            member: {
                              type: 'structure',
                              required: ['name', 'version'],
                              members: {
                                arch: {},
                                epoch: {
                                  type: 'integer'
                                },
                                filePath: {},
                                fixedInVersion: {},
                                name: {},
                                packageManager: {},
                                release: {},
                                remediation: {},
                                sourceLambdaLayerArn: {},
                                sourceLayerHash: {},
                                version: {}
                              }
                            }
                          }
                        }
                      },
                      remediation: {
                        type: 'structure',
                        members: {
                          recommendation: {
                            type: 'structure',
                            members: {
                              Url: {},
                              text: {}
                            }
                          }
                        }
                      },
                      resources: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          required: ['id', 'type'],
                          members: {
                            details: {
                              type: 'structure',
                              members: {
                                awsEc2Instance: {
                                  type: 'structure',
                                  members: {
                                    iamInstanceProfileArn: {},
                                    imageId: {},
                                    ipV4Addresses: {
                                      type: 'list',
                                      member: {}
                                    },
                                    ipV6Addresses: {
                                      type: 'list',
                                      member: {}
                                    },
                                    keyName: {},
                                    launchedAt: {
                                      type: 'timestamp'
                                    },
                                    platform: {},
                                    subnetId: {},
                                    type: {},
                                    vpcId: {}
                                  }
                                },
                                awsEcrContainerImage: {
                                  type: 'structure',
                                  required: ['imageHash', 'registry', 'repositoryName'],
                                  members: {
                                    architecture: {},
                                    author: {},
                                    imageHash: {},
                                    imageTags: {
                                      type: 'list',
                                      member: {}
                                    },
                                    platform: {},
                                    pushedAt: {
                                      type: 'timestamp'
                                    },
                                    registry: {},
                                    repositoryName: {}
                                  }
                                },
                                awsLambdaFunction: {
                                  type: 'structure',
                                  required: ['codeSha256', 'executionRoleArn', 'functionName', 'runtime', 'version'],
                                  members: {
                                    architectures: {
                                      type: 'list',
                                      member: {}
                                    },
                                    codeSha256: {},
                                    executionRoleArn: {},
                                    functionName: {},
                                    lastModifiedAt: {
                                      type: 'timestamp'
                                    },
                                    layers: {
                                      type: 'list',
                                      member: {}
                                    },
                                    packageType: {},
                                    runtime: {},
                                    version: {},
                                    vpcConfig: {
                                      type: 'structure',
                                      members: {
                                        securityGroupIds: {
                                          type: 'list',
                                          member: {}
                                        },
                                        subnetIds: {
                                          type: 'list',
                                          member: {}
                                        },
                                        vpcId: {}
                                      }
                                    }
                                  }
                                }
                              }
                            },
                            id: {},
                            partition: {},
                            region: {},
                            tags: {
                              shape: 'S3x'
                            },
                            type: {}
                          }
                        }
                      },
                      severity: {},
                      status: {},
                      title: {},
                      type: {},
                      updatedAt: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                nextToken: {}
              }
            }
          },
          ListMembers: {
            http: {
              requestUri: '/members/list',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                maxResults: {
                  type: 'integer'
                },
                nextToken: {},
                onlyAssociated: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                members: {
                  type: 'list',
                  member: {
                    shape: 'S6r'
                  }
                },
                nextToken: {}
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
                  shape: 'S3x'
                }
              }
            }
          },
          ListUsageTotals: {
            http: {
              requestUri: '/usage/list',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                accountIds: {
                  type: 'list',
                  member: {}
                },
                maxResults: {
                  type: 'integer'
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                nextToken: {},
                totals: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      accountId: {},
                      usage: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            currency: {},
                            estimatedMonthlyCost: {
                              type: 'double'
                            },
                            total: {
                              type: 'double'
                            },
                            type: {}
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          ResetEncryptionKey: {
            http: {
              method: 'PUT',
              requestUri: '/encryptionkey/reset',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['resourceType', 'scanType'],
              members: {
                resourceType: {},
                scanType: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          SearchVulnerabilities: {
            http: {
              requestUri: '/vulnerabilities/search',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['filterCriteria'],
              members: {
                filterCriteria: {
                  type: 'structure',
                  required: ['vulnerabilityIds'],
                  members: {
                    vulnerabilityIds: {
                      type: 'list',
                      member: {}
                    }
                  }
                },
                nextToken: {}
              }
            },
            output: {
              type: 'structure',
              required: ['vulnerabilities'],
              members: {
                nextToken: {},
                vulnerabilities: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['id'],
                    members: {
                      atigData: {
                        type: 'structure',
                        members: {
                          firstSeen: {
                            type: 'timestamp'
                          },
                          lastSeen: {
                            type: 'timestamp'
                          },
                          targets: {
                            type: 'list',
                            member: {}
                          },
                          ttps: {
                            shape: 'S1q'
                          }
                        }
                      },
                      cisaData: {
                        shape: 'S16'
                      },
                      cvss2: {
                        type: 'structure',
                        members: {
                          baseScore: {
                            type: 'double'
                          },
                          scoringVector: {}
                        }
                      },
                      cvss3: {
                        type: 'structure',
                        members: {
                          baseScore: {
                            type: 'double'
                          },
                          scoringVector: {}
                        }
                      },
                      cwes: {
                        shape: 'S1a'
                      },
                      description: {},
                      detectionPlatforms: {
                        type: 'list',
                        member: {}
                      },
                      epss: {
                        type: 'structure',
                        members: {
                          score: {
                            type: 'double'
                          }
                        }
                      },
                      exploitObserved: {
                        shape: 'S1i'
                      },
                      id: {},
                      referenceUrls: {
                        shape: 'S1l'
                      },
                      relatedVulnerabilities: {
                        type: 'list',
                        member: {}
                      },
                      source: {},
                      sourceUrl: {},
                      vendorCreatedAt: {
                        type: 'timestamp'
                      },
                      vendorSeverity: {},
                      vendorUpdatedAt: {
                        type: 'timestamp'
                      }
                    }
                  }
                }
              }
            }
          },
          SendCisSessionHealth: {
            http: {
              method: 'PUT',
              requestUri: '/cissession/health/send',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['scanJobId', 'sessionToken'],
              members: {
                scanJobId: {},
                sessionToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          SendCisSessionTelemetry: {
            http: {
              method: 'PUT',
              requestUri: '/cissession/telemetry/send',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['messages', 'scanJobId', 'sessionToken'],
              members: {
                messages: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['cisRuleDetails', 'ruleId', 'status'],
                    members: {
                      cisRuleDetails: {
                        type: 'blob'
                      },
                      ruleId: {},
                      status: {}
                    }
                  }
                },
                scanJobId: {},
                sessionToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          StartCisSession: {
            http: {
              method: 'PUT',
              requestUri: '/cissession/start',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['message', 'scanJobId'],
              members: {
                message: {
                  type: 'structure',
                  required: ['sessionToken'],
                  members: {
                    sessionToken: {}
                  }
                },
                scanJobId: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          StopCisSession: {
            http: {
              method: 'PUT',
              requestUri: '/cissession/stop',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['message', 'scanJobId', 'sessionToken'],
              members: {
                message: {
                  type: 'structure',
                  required: ['progress', 'status'],
                  members: {
                    benchmarkProfile: {},
                    benchmarkVersion: {},
                    computePlatform: {
                      type: 'structure',
                      members: {
                        product: {},
                        vendor: {},
                        version: {}
                      }
                    },
                    progress: {
                      type: 'structure',
                      members: {
                        errorChecks: {
                          type: 'integer'
                        },
                        failedChecks: {
                          type: 'integer'
                        },
                        informationalChecks: {
                          type: 'integer'
                        },
                        notApplicableChecks: {
                          type: 'integer'
                        },
                        notEvaluatedChecks: {
                          type: 'integer'
                        },
                        successfulChecks: {
                          type: 'integer'
                        },
                        totalChecks: {
                          type: 'integer'
                        },
                        unknownChecks: {
                          type: 'integer'
                        }
                      }
                    },
                    reason: {},
                    status: {}
                  }
                },
                scanJobId: {},
                sessionToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          TagResource: {
            http: {
              requestUri: '/tags/{resourceArn}',
              responseCode: 200
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
                  shape: 'S3x'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          UntagResource: {
            http: {
              method: 'DELETE',
              requestUri: '/tags/{resourceArn}',
              responseCode: 200
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
            }
          },
          UpdateCisScanConfiguration: {
            http: {
              requestUri: '/cis/scan-configuration/update',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['scanConfigurationArn'],
              members: {
                scanConfigurationArn: {},
                scanName: {},
                schedule: {
                  shape: 'S2q'
                },
                securityLevel: {},
                targets: {
                  type: 'structure',
                  members: {
                    accountIds: {
                      shape: 'S35'
                    },
                    targetResourceTags: {
                      shape: 'S37'
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              required: ['scanConfigurationArn'],
              members: {
                scanConfigurationArn: {}
              }
            }
          },
          UpdateConfiguration: {
            http: {
              requestUri: '/configuration/update',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                ec2Configuration: {
                  type: 'structure',
                  required: ['scanMode'],
                  members: {
                    scanMode: {}
                  }
                },
                ecrConfiguration: {
                  type: 'structure',
                  required: ['rescanDuration'],
                  members: {
                    pullDateRescanDuration: {},
                    rescanDuration: {}
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateEc2DeepInspectionConfiguration: {
            http: {
              requestUri: '/ec2deepinspectionconfiguration/update',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                activateDeepInspection: {
                  type: 'boolean'
                },
                packagePaths: {
                  shape: 'S6d'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                errorMessage: {},
                orgPackagePaths: {
                  shape: 'S6d'
                },
                packagePaths: {
                  shape: 'S6d'
                },
                status: {}
              }
            }
          },
          UpdateEncryptionKey: {
            http: {
              method: 'PUT',
              requestUri: '/encryptionkey/update',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['kmsKeyId', 'resourceType', 'scanType'],
              members: {
                kmsKeyId: {},
                resourceType: {},
                scanType: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          UpdateFilter: {
            http: {
              requestUri: '/filters/update',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['filterArn'],
              members: {
                action: {},
                description: {},
                filterArn: {},
                filterCriteria: {
                  shape: 'S3e'
                },
                name: {},
                reason: {}
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
          UpdateOrgEc2DeepInspectionConfiguration: {
            http: {
              requestUri: '/ec2deepinspectionconfiguration/org/update',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['orgPackagePaths'],
              members: {
                orgPackagePaths: {
                  shape: 'S6d'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateOrganizationConfiguration: {
            http: {
              requestUri: '/organizationconfiguration/update',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['autoEnable'],
              members: {
                autoEnable: {
                  shape: 'S4l'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['autoEnable'],
              members: {
                autoEnable: {
                  shape: 'S4l'
                }
              }
            }
          }
        },
        shapes: {
          S5: {
            type: 'list',
            member: {}
          },
          Sa: {
            type: 'structure',
            required: ['errorCode', 'errorMessage', 'status'],
            members: {
              errorCode: {},
              errorMessage: {},
              status: {}
            }
          },
          Se: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['accountId', 'errorCode', 'errorMessage'],
              members: {
                accountId: {},
                errorCode: {},
                errorMessage: {},
                resourceStatus: {
                  shape: 'Sg'
                },
                status: {}
              }
            }
          },
          Sg: {
            type: 'structure',
            required: ['ec2', 'ecr'],
            members: {
              ec2: {},
              ecr: {},
              lambda: {},
              lambdaCode: {}
            }
          },
          S16: {
            type: 'structure',
            members: {
              action: {},
              dateAdded: {
                type: 'timestamp'
              },
              dateDue: {
                type: 'timestamp'
              }
            }
          },
          S1a: {
            type: 'list',
            member: {}
          },
          S1i: {
            type: 'structure',
            members: {
              firstSeen: {
                type: 'timestamp'
              },
              lastSeen: {
                type: 'timestamp'
              }
            }
          },
          S1l: {
            type: 'list',
            member: {}
          },
          S1q: {
            type: 'list',
            member: {}
          },
          S29: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['accountId'],
              members: {
                accountId: {},
                errorMessage: {},
                status: {}
              }
            }
          },
          S2c: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['accountId'],
              members: {
                accountId: {},
                ec2ScanStatus: {},
                errorMessage: {}
              }
            }
          },
          S2q: {
            type: 'structure',
            members: {
              daily: {
                type: 'structure',
                required: ['startTime'],
                members: {
                  startTime: {
                    shape: 'S2s'
                  }
                }
              },
              monthly: {
                type: 'structure',
                required: ['day', 'startTime'],
                members: {
                  day: {},
                  startTime: {
                    shape: 'S2s'
                  }
                }
              },
              oneTime: {
                type: 'structure',
                members: {}
              },
              weekly: {
                type: 'structure',
                required: ['days', 'startTime'],
                members: {
                  days: {
                    type: 'list',
                    member: {}
                  },
                  startTime: {
                    shape: 'S2s'
                  }
                }
              }
            },
            union: true
          },
          S2s: {
            type: 'structure',
            required: ['timeOfDay', 'timezone'],
            members: {
              timeOfDay: {},
              timezone: {}
            }
          },
          S31: {
            type: 'map',
            key: {},
            value: {}
          },
          S35: {
            type: 'list',
            member: {}
          },
          S37: {
            type: 'map',
            key: {},
            value: {
              type: 'list',
              member: {}
            }
          },
          S3e: {
            type: 'structure',
            members: {
              awsAccountId: {
                shape: 'S3f'
              },
              codeVulnerabilityDetectorName: {
                shape: 'S3f'
              },
              codeVulnerabilityDetectorTags: {
                shape: 'S3f'
              },
              codeVulnerabilityFilePath: {
                shape: 'S3f'
              },
              componentId: {
                shape: 'S3f'
              },
              componentType: {
                shape: 'S3f'
              },
              ec2InstanceImageId: {
                shape: 'S3f'
              },
              ec2InstanceSubnetId: {
                shape: 'S3f'
              },
              ec2InstanceVpcId: {
                shape: 'S3f'
              },
              ecrImageArchitecture: {
                shape: 'S3f'
              },
              ecrImageHash: {
                shape: 'S3f'
              },
              ecrImagePushedAt: {
                shape: 'S3j'
              },
              ecrImageRegistry: {
                shape: 'S3f'
              },
              ecrImageRepositoryName: {
                shape: 'S3f'
              },
              ecrImageTags: {
                shape: 'S3f'
              },
              epssScore: {
                shape: 'S3l'
              },
              exploitAvailable: {
                shape: 'S3f'
              },
              findingArn: {
                shape: 'S3f'
              },
              findingStatus: {
                shape: 'S3f'
              },
              findingType: {
                shape: 'S3f'
              },
              firstObservedAt: {
                shape: 'S3j'
              },
              fixAvailable: {
                shape: 'S3f'
              },
              inspectorScore: {
                shape: 'S3l'
              },
              lambdaFunctionExecutionRoleArn: {
                shape: 'S3f'
              },
              lambdaFunctionLastModifiedAt: {
                shape: 'S3j'
              },
              lambdaFunctionLayers: {
                shape: 'S3f'
              },
              lambdaFunctionName: {
                shape: 'S3f'
              },
              lambdaFunctionRuntime: {
                shape: 'S3f'
              },
              lastObservedAt: {
                shape: 'S3j'
              },
              networkProtocol: {
                shape: 'S3f'
              },
              portRange: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    beginInclusive: {
                      type: 'integer'
                    },
                    endInclusive: {
                      type: 'integer'
                    }
                  }
                }
              },
              relatedVulnerabilities: {
                shape: 'S3f'
              },
              resourceId: {
                shape: 'S3f'
              },
              resourceTags: {
                shape: 'S3q'
              },
              resourceType: {
                shape: 'S3f'
              },
              severity: {
                shape: 'S3f'
              },
              title: {
                shape: 'S3f'
              },
              updatedAt: {
                shape: 'S3j'
              },
              vendorSeverity: {
                shape: 'S3f'
              },
              vulnerabilityId: {
                shape: 'S3f'
              },
              vulnerabilitySource: {
                shape: 'S3f'
              },
              vulnerablePackages: {
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    architecture: {
                      shape: 'S3g'
                    },
                    epoch: {
                      shape: 'S3m'
                    },
                    name: {
                      shape: 'S3g'
                    },
                    release: {
                      shape: 'S3g'
                    },
                    sourceLambdaLayerArn: {
                      shape: 'S3g'
                    },
                    sourceLayerHash: {
                      shape: 'S3g'
                    },
                    version: {
                      shape: 'S3g'
                    }
                  }
                }
              }
            }
          },
          S3f: {
            type: 'list',
            member: {
              shape: 'S3g'
            }
          },
          S3g: {
            type: 'structure',
            required: ['comparison', 'value'],
            members: {
              comparison: {},
              value: {}
            }
          },
          S3j: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                endInclusive: {
                  type: 'timestamp'
                },
                startInclusive: {
                  type: 'timestamp'
                }
              }
            }
          },
          S3l: {
            type: 'list',
            member: {
              shape: 'S3m'
            }
          },
          S3m: {
            type: 'structure',
            members: {
              lowerInclusive: {
                type: 'double'
              },
              upperInclusive: {
                type: 'double'
              }
            }
          },
          S3q: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['comparison', 'key'],
              members: {
                comparison: {},
                key: {},
                value: {}
              }
            }
          },
          S3x: {
            type: 'map',
            key: {},
            value: {}
          },
          S42: {
            type: 'structure',
            required: ['bucketName', 'kmsKeyArn'],
            members: {
              bucketName: {},
              keyPrefix: {},
              kmsKeyArn: {}
            }
          },
          S46: {
            type: 'structure',
            members: {
              accountId: {
                shape: 'S47'
              },
              ec2InstanceTags: {
                shape: 'S4b'
              },
              ecrImageTags: {
                shape: 'S47'
              },
              ecrRepositoryName: {
                shape: 'S47'
              },
              lambdaFunctionName: {
                shape: 'S47'
              },
              lambdaFunctionTags: {
                shape: 'S4b'
              },
              resourceId: {
                shape: 'S47'
              },
              resourceType: {
                shape: 'S47'
              }
            }
          },
          S47: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['comparison', 'value'],
              members: {
                comparison: {},
                value: {}
              }
            }
          },
          S4b: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['comparison', 'key'],
              members: {
                comparison: {},
                key: {},
                value: {}
              }
            }
          },
          S4l: {
            type: 'structure',
            required: ['ec2', 'ecr'],
            members: {
              ec2: {
                type: 'boolean'
              },
              ecr: {
                type: 'boolean'
              },
              lambda: {
                type: 'boolean'
              },
              lambdaCode: {
                type: 'boolean'
              }
            }
          },
          S4q: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['accountId', 'resourceStatus', 'status'],
              members: {
                accountId: {},
                resourceStatus: {
                  shape: 'Sg'
                },
                status: {}
              }
            }
          },
          S5a: {
            type: 'list',
            member: {
              shape: 'S5b'
            }
          },
          S5b: {
            type: 'structure',
            required: ['comparison', 'value'],
            members: {
              comparison: {},
              value: {}
            }
          },
          S5i: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['comparison', 'value'],
              members: {
                comparison: {},
                value: {}
              }
            }
          },
          S5l: {
            type: 'list',
            member: {
              shape: 'S5b'
            }
          },
          S6d: {
            type: 'list',
            member: {}
          },
          S6r: {
            type: 'structure',
            members: {
              accountId: {},
              delegatedAdminAccountId: {},
              relationshipStatus: {},
              updatedAt: {
                type: 'timestamp'
              }
            }
          },
          S73: {
            type: 'list',
            member: {
              shape: 'S5b'
            }
          },
          S74: {
            type: 'list',
            member: {
              shape: 'S5b'
            }
          },
          S75: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['comparison', 'key', 'value'],
              members: {
                comparison: {},
                key: {},
                value: {}
              }
            }
          },
          S7e: {
            type: 'structure',
            members: {
              accountIds: {
                type: 'list',
                member: {}
              },
              targetResourceTags: {
                shape: 'S37'
              }
            }
          },
          S7j: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                lowerInclusive: {
                  type: 'integer'
                },
                upperInclusive: {
                  type: 'integer'
                }
              }
            }
          },
          S7l: {
            type: 'list',
            member: {
              shape: 'S5b'
            }
          },
          S7r: {
            type: 'structure',
            members: {
              failed: {
                type: 'integer'
              },
              passed: {
                type: 'integer'
              },
              skipped: {
                type: 'integer'
              }
            }
          },
          S7u: {
            type: 'list',
            member: {
              shape: 'S5b'
            }
          },
          S7z: {
            type: 'list',
            member: {
              shape: 'S5b'
            }
          },
          S8s: {
            type: 'structure',
            members: {
              accountId: {
                shape: 'S8t'
              },
              ec2InstanceTags: {
                shape: 'S8x'
              },
              ecrImageTags: {
                shape: 'S8t'
              },
              ecrRepositoryName: {
                shape: 'S8t'
              },
              imagePulledAt: {
                shape: 'S90'
              },
              lambdaFunctionName: {
                shape: 'S8t'
              },
              lambdaFunctionRuntime: {
                shape: 'S8t'
              },
              lambdaFunctionTags: {
                shape: 'S8x'
              },
              lastScannedAt: {
                shape: 'S90'
              },
              resourceId: {
                shape: 'S8t'
              },
              resourceType: {
                shape: 'S8t'
              },
              scanMode: {
                shape: 'S8t'
              },
              scanStatusCode: {
                shape: 'S8t'
              },
              scanStatusReason: {
                shape: 'S8t'
              },
              scanType: {
                shape: 'S8t'
              }
            }
          },
          S8t: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['comparison', 'value'],
              members: {
                comparison: {},
                value: {}
              }
            }
          },
          S8x: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['comparison', 'key'],
              members: {
                comparison: {},
                key: {},
                value: {}
              }
            }
          },
          S90: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                endInclusive: {
                  type: 'timestamp'
                },
                startInclusive: {
                  type: 'timestamp'
                }
              }
            }
          },
          Sb3: {
            type: 'structure',
            members: {
              all: {
                type: 'long'
              },
              critical: {
                type: 'long'
              },
              high: {
                type: 'long'
              },
              medium: {
                type: 'long'
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=4b93f99c72b220338eccb4f499938407e2ad85e8.js.map