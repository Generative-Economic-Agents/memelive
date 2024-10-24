System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2017-11-28',
          endpointPrefix: 'guardduty',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceFullName: 'Amazon GuardDuty',
          serviceId: 'GuardDuty',
          signatureVersion: 'v4',
          signingName: 'guardduty',
          uid: 'guardduty-2017-11-28'
        },
        operations: {
          AcceptAdministratorInvitation: {
            http: {
              requestUri: '/detector/{detectorId}/administrator',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['DetectorId', 'AdministratorId', 'InvitationId'],
              members: {
                DetectorId: {
                  location: 'uri',
                  locationName: 'detectorId'
                },
                AdministratorId: {
                  locationName: 'administratorId'
                },
                InvitationId: {
                  locationName: 'invitationId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          AcceptInvitation: {
            http: {
              requestUri: '/detector/{detectorId}/master',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['DetectorId', 'MasterId', 'InvitationId'],
              members: {
                DetectorId: {
                  location: 'uri',
                  locationName: 'detectorId'
                },
                MasterId: {
                  locationName: 'masterId'
                },
                InvitationId: {
                  locationName: 'invitationId'
                }
              },
              deprecated: true,
              deprecatedMessage: 'This input is deprecated, use AcceptAdministratorInvitationRequest instead'
            },
            output: {
              type: 'structure',
              members: {},
              deprecated: true,
              deprecatedMessage: 'This output is deprecated, use AcceptAdministratorInvitationResponse instead'
            },
            deprecated: true,
            deprecatedMessage: 'This operation is deprecated, use AcceptAdministratorInvitation instead'
          },
          ArchiveFindings: {
            http: {
              requestUri: '/detector/{detectorId}/findings/archive',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['DetectorId', 'FindingIds'],
              members: {
                DetectorId: {
                  location: 'uri',
                  locationName: 'detectorId'
                },
                FindingIds: {
                  shape: 'S8',
                  locationName: 'findingIds'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          CreateDetector: {
            http: {
              requestUri: '/detector',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['Enable'],
              members: {
                Enable: {
                  locationName: 'enable',
                  type: 'boolean'
                },
                ClientToken: {
                  idempotencyToken: true,
                  locationName: 'clientToken'
                },
                FindingPublishingFrequency: {
                  locationName: 'findingPublishingFrequency'
                },
                DataSources: {
                  shape: 'Sf',
                  deprecated: true,
                  deprecatedMessage: 'This parameter is deprecated, use Features instead',
                  locationName: 'dataSources'
                },
                Tags: {
                  shape: 'Sl',
                  locationName: 'tags'
                },
                Features: {
                  shape: 'So',
                  locationName: 'features'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                DetectorId: {
                  locationName: 'detectorId'
                },
                UnprocessedDataSources: {
                  locationName: 'unprocessedDataSources',
                  type: 'structure',
                  members: {
                    MalwareProtection: {
                      shape: 'Sx',
                      locationName: 'malwareProtection'
                    }
                  }
                }
              }
            }
          },
          CreateFilter: {
            http: {
              requestUri: '/detector/{detectorId}/filter',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['DetectorId', 'Name', 'FindingCriteria'],
              members: {
                DetectorId: {
                  location: 'uri',
                  locationName: 'detectorId'
                },
                Name: {
                  locationName: 'name'
                },
                Description: {
                  locationName: 'description'
                },
                Action: {
                  locationName: 'action'
                },
                Rank: {
                  locationName: 'rank',
                  type: 'integer'
                },
                FindingCriteria: {
                  shape: 'S16',
                  locationName: 'findingCriteria'
                },
                ClientToken: {
                  idempotencyToken: true,
                  locationName: 'clientToken'
                },
                Tags: {
                  shape: 'Sl',
                  locationName: 'tags'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {
                  locationName: 'name'
                }
              }
            }
          },
          CreateIPSet: {
            http: {
              requestUri: '/detector/{detectorId}/ipset',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['DetectorId', 'Name', 'Format', 'Location', 'Activate'],
              members: {
                DetectorId: {
                  location: 'uri',
                  locationName: 'detectorId'
                },
                Name: {
                  locationName: 'name'
                },
                Format: {
                  locationName: 'format'
                },
                Location: {
                  locationName: 'location'
                },
                Activate: {
                  locationName: 'activate',
                  type: 'boolean'
                },
                ClientToken: {
                  idempotencyToken: true,
                  locationName: 'clientToken'
                },
                Tags: {
                  shape: 'Sl',
                  locationName: 'tags'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['IpSetId'],
              members: {
                IpSetId: {
                  locationName: 'ipSetId'
                }
              }
            }
          },
          CreateMembers: {
            http: {
              requestUri: '/detector/{detectorId}/member',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['DetectorId', 'AccountDetails'],
              members: {
                DetectorId: {
                  location: 'uri',
                  locationName: 'detectorId'
                },
                AccountDetails: {
                  locationName: 'accountDetails',
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['AccountId', 'Email'],
                    members: {
                      AccountId: {
                        locationName: 'accountId'
                      },
                      Email: {
                        shape: 'S1p',
                        locationName: 'email'
                      }
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              required: ['UnprocessedAccounts'],
              members: {
                UnprocessedAccounts: {
                  shape: 'S1r',
                  locationName: 'unprocessedAccounts'
                }
              }
            }
          },
          CreatePublishingDestination: {
            http: {
              requestUri: '/detector/{detectorId}/publishingDestination',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['DetectorId', 'DestinationType', 'DestinationProperties'],
              members: {
                DetectorId: {
                  location: 'uri',
                  locationName: 'detectorId'
                },
                DestinationType: {
                  locationName: 'destinationType'
                },
                DestinationProperties: {
                  shape: 'S1v',
                  locationName: 'destinationProperties'
                },
                ClientToken: {
                  idempotencyToken: true,
                  locationName: 'clientToken'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['DestinationId'],
              members: {
                DestinationId: {
                  locationName: 'destinationId'
                }
              }
            }
          },
          CreateSampleFindings: {
            http: {
              requestUri: '/detector/{detectorId}/findings/create',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['DetectorId'],
              members: {
                DetectorId: {
                  location: 'uri',
                  locationName: 'detectorId'
                },
                FindingTypes: {
                  locationName: 'findingTypes',
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
          CreateThreatIntelSet: {
            http: {
              requestUri: '/detector/{detectorId}/threatintelset',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['DetectorId', 'Name', 'Format', 'Location', 'Activate'],
              members: {
                DetectorId: {
                  location: 'uri',
                  locationName: 'detectorId'
                },
                Name: {
                  locationName: 'name'
                },
                Format: {
                  locationName: 'format'
                },
                Location: {
                  locationName: 'location'
                },
                Activate: {
                  locationName: 'activate',
                  type: 'boolean'
                },
                ClientToken: {
                  idempotencyToken: true,
                  locationName: 'clientToken'
                },
                Tags: {
                  shape: 'Sl',
                  locationName: 'tags'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['ThreatIntelSetId'],
              members: {
                ThreatIntelSetId: {
                  locationName: 'threatIntelSetId'
                }
              }
            }
          },
          DeclineInvitations: {
            http: {
              requestUri: '/invitation/decline',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['AccountIds'],
              members: {
                AccountIds: {
                  shape: 'S25',
                  locationName: 'accountIds'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['UnprocessedAccounts'],
              members: {
                UnprocessedAccounts: {
                  shape: 'S1r',
                  locationName: 'unprocessedAccounts'
                }
              }
            }
          },
          DeleteDetector: {
            http: {
              method: 'DELETE',
              requestUri: '/detector/{detectorId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['DetectorId'],
              members: {
                DetectorId: {
                  location: 'uri',
                  locationName: 'detectorId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteFilter: {
            http: {
              method: 'DELETE',
              requestUri: '/detector/{detectorId}/filter/{filterName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['DetectorId', 'FilterName'],
              members: {
                DetectorId: {
                  location: 'uri',
                  locationName: 'detectorId'
                },
                FilterName: {
                  location: 'uri',
                  locationName: 'filterName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteIPSet: {
            http: {
              method: 'DELETE',
              requestUri: '/detector/{detectorId}/ipset/{ipSetId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['DetectorId', 'IpSetId'],
              members: {
                DetectorId: {
                  location: 'uri',
                  locationName: 'detectorId'
                },
                IpSetId: {
                  location: 'uri',
                  locationName: 'ipSetId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteInvitations: {
            http: {
              requestUri: '/invitation/delete',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['AccountIds'],
              members: {
                AccountIds: {
                  shape: 'S25',
                  locationName: 'accountIds'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['UnprocessedAccounts'],
              members: {
                UnprocessedAccounts: {
                  shape: 'S1r',
                  locationName: 'unprocessedAccounts'
                }
              }
            }
          },
          DeleteMembers: {
            http: {
              requestUri: '/detector/{detectorId}/member/delete',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['DetectorId', 'AccountIds'],
              members: {
                DetectorId: {
                  location: 'uri',
                  locationName: 'detectorId'
                },
                AccountIds: {
                  shape: 'S25',
                  locationName: 'accountIds'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['UnprocessedAccounts'],
              members: {
                UnprocessedAccounts: {
                  shape: 'S1r',
                  locationName: 'unprocessedAccounts'
                }
              }
            }
          },
          DeletePublishingDestination: {
            http: {
              method: 'DELETE',
              requestUri: '/detector/{detectorId}/publishingDestination/{destinationId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['DetectorId', 'DestinationId'],
              members: {
                DetectorId: {
                  location: 'uri',
                  locationName: 'detectorId'
                },
                DestinationId: {
                  location: 'uri',
                  locationName: 'destinationId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteThreatIntelSet: {
            http: {
              method: 'DELETE',
              requestUri: '/detector/{detectorId}/threatintelset/{threatIntelSetId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['DetectorId', 'ThreatIntelSetId'],
              members: {
                DetectorId: {
                  location: 'uri',
                  locationName: 'detectorId'
                },
                ThreatIntelSetId: {
                  location: 'uri',
                  locationName: 'threatIntelSetId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DescribeMalwareScans: {
            http: {
              requestUri: '/detector/{detectorId}/malware-scans',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['DetectorId'],
              members: {
                DetectorId: {
                  location: 'uri',
                  locationName: 'detectorId'
                },
                NextToken: {
                  locationName: 'nextToken'
                },
                MaxResults: {
                  locationName: 'maxResults',
                  type: 'integer'
                },
                FilterCriteria: {
                  locationName: 'filterCriteria',
                  type: 'structure',
                  members: {
                    FilterCriterion: {
                      locationName: 'filterCriterion',
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          CriterionKey: {
                            locationName: 'criterionKey'
                          },
                          FilterCondition: {
                            locationName: 'filterCondition',
                            type: 'structure',
                            members: {
                              EqualsValue: {
                                locationName: 'equalsValue'
                              },
                              GreaterThan: {
                                locationName: 'greaterThan',
                                type: 'long'
                              },
                              LessThan: {
                                locationName: 'lessThan',
                                type: 'long'
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                SortCriteria: {
                  shape: 'S2u',
                  locationName: 'sortCriteria'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Scans'],
              members: {
                Scans: {
                  locationName: 'scans',
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      DetectorId: {
                        locationName: 'detectorId'
                      },
                      AdminDetectorId: {
                        locationName: 'adminDetectorId'
                      },
                      ScanId: {
                        locationName: 'scanId'
                      },
                      ScanStatus: {
                        locationName: 'scanStatus'
                      },
                      FailureReason: {
                        locationName: 'failureReason'
                      },
                      ScanStartTime: {
                        locationName: 'scanStartTime',
                        type: 'timestamp'
                      },
                      ScanEndTime: {
                        locationName: 'scanEndTime',
                        type: 'timestamp'
                      },
                      TriggerDetails: {
                        locationName: 'triggerDetails',
                        type: 'structure',
                        members: {
                          GuardDutyFindingId: {
                            locationName: 'guardDutyFindingId'
                          },
                          Description: {
                            locationName: 'description'
                          }
                        }
                      },
                      ResourceDetails: {
                        locationName: 'resourceDetails',
                        type: 'structure',
                        members: {
                          InstanceArn: {
                            locationName: 'instanceArn'
                          }
                        }
                      },
                      ScanResultDetails: {
                        locationName: 'scanResultDetails',
                        type: 'structure',
                        members: {
                          ScanResult: {
                            locationName: 'scanResult'
                          }
                        }
                      },
                      AccountId: {
                        locationName: 'accountId'
                      },
                      TotalBytes: {
                        locationName: 'totalBytes',
                        type: 'long'
                      },
                      FileCount: {
                        locationName: 'fileCount',
                        type: 'long'
                      },
                      AttachedVolumes: {
                        shape: 'S37',
                        locationName: 'attachedVolumes'
                      },
                      ScanType: {
                        locationName: 'scanType'
                      }
                    }
                  }
                },
                NextToken: {
                  locationName: 'nextToken'
                }
              }
            }
          },
          DescribeOrganizationConfiguration: {
            http: {
              method: 'GET',
              requestUri: '/detector/{detectorId}/admin',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['DetectorId'],
              members: {
                DetectorId: {
                  location: 'uri',
                  locationName: 'detectorId'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['MemberAccountLimitReached'],
              members: {
                AutoEnable: {
                  deprecated: true,
                  deprecatedMessage: 'This field is deprecated, use AutoEnableOrganizationMembers instead',
                  locationName: 'autoEnable',
                  type: 'boolean'
                },
                MemberAccountLimitReached: {
                  locationName: 'memberAccountLimitReached',
                  type: 'boolean'
                },
                DataSources: {
                  deprecated: true,
                  deprecatedMessage: 'This parameter is deprecated, use Features instead',
                  locationName: 'dataSources',
                  type: 'structure',
                  required: ['S3Logs'],
                  members: {
                    S3Logs: {
                      locationName: 's3Logs',
                      type: 'structure',
                      required: ['AutoEnable'],
                      members: {
                        AutoEnable: {
                          locationName: 'autoEnable',
                          type: 'boolean'
                        }
                      }
                    },
                    Kubernetes: {
                      locationName: 'kubernetes',
                      type: 'structure',
                      required: ['AuditLogs'],
                      members: {
                        AuditLogs: {
                          locationName: 'auditLogs',
                          type: 'structure',
                          required: ['AutoEnable'],
                          members: {
                            AutoEnable: {
                              locationName: 'autoEnable',
                              type: 'boolean'
                            }
                          }
                        }
                      }
                    },
                    MalwareProtection: {
                      locationName: 'malwareProtection',
                      type: 'structure',
                      members: {
                        ScanEc2InstanceWithFindings: {
                          locationName: 'scanEc2InstanceWithFindings',
                          type: 'structure',
                          members: {
                            EbsVolumes: {
                              locationName: 'ebsVolumes',
                              type: 'structure',
                              members: {
                                AutoEnable: {
                                  locationName: 'autoEnable',
                                  type: 'boolean'
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                Features: {
                  locationName: 'features',
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Name: {
                        locationName: 'name'
                      },
                      AutoEnable: {
                        locationName: 'autoEnable'
                      },
                      AdditionalConfiguration: {
                        locationName: 'additionalConfiguration',
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            Name: {
                              locationName: 'name'
                            },
                            AutoEnable: {
                              locationName: 'autoEnable'
                            }
                          }
                        }
                      }
                    }
                  }
                },
                NextToken: {
                  locationName: 'nextToken'
                },
                AutoEnableOrganizationMembers: {
                  locationName: 'autoEnableOrganizationMembers'
                }
              }
            }
          },
          DescribePublishingDestination: {
            http: {
              method: 'GET',
              requestUri: '/detector/{detectorId}/publishingDestination/{destinationId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['DetectorId', 'DestinationId'],
              members: {
                DetectorId: {
                  location: 'uri',
                  locationName: 'detectorId'
                },
                DestinationId: {
                  location: 'uri',
                  locationName: 'destinationId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['DestinationId', 'DestinationType', 'Status', 'PublishingFailureStartTimestamp', 'DestinationProperties'],
              members: {
                DestinationId: {
                  locationName: 'destinationId'
                },
                DestinationType: {
                  locationName: 'destinationType'
                },
                Status: {
                  locationName: 'status'
                },
                PublishingFailureStartTimestamp: {
                  locationName: 'publishingFailureStartTimestamp',
                  type: 'long'
                },
                DestinationProperties: {
                  shape: 'S1v',
                  locationName: 'destinationProperties'
                }
              }
            }
          },
          DisableOrganizationAdminAccount: {
            http: {
              requestUri: '/admin/disable',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['AdminAccountId'],
              members: {
                AdminAccountId: {
                  locationName: 'adminAccountId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DisassociateFromAdministratorAccount: {
            http: {
              requestUri: '/detector/{detectorId}/administrator/disassociate',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['DetectorId'],
              members: {
                DetectorId: {
                  location: 'uri',
                  locationName: 'detectorId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DisassociateFromMasterAccount: {
            http: {
              requestUri: '/detector/{detectorId}/master/disassociate',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['DetectorId'],
              members: {
                DetectorId: {
                  location: 'uri',
                  locationName: 'detectorId'
                }
              },
              deprecated: true,
              deprecatedMessage: 'This input is deprecated, use DisassociateFromAdministratorAccountRequest instead'
            },
            output: {
              type: 'structure',
              members: {},
              deprecated: true,
              deprecatedMessage: 'This output is deprecated, use DisassociateFromAdministratorAccountResponse instead'
            },
            deprecated: true,
            deprecatedMessage: 'This operation is deprecated, use DisassociateFromAdministratorAccount instead'
          },
          DisassociateMembers: {
            http: {
              requestUri: '/detector/{detectorId}/member/disassociate',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['DetectorId', 'AccountIds'],
              members: {
                DetectorId: {
                  location: 'uri',
                  locationName: 'detectorId'
                },
                AccountIds: {
                  shape: 'S25',
                  locationName: 'accountIds'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['UnprocessedAccounts'],
              members: {
                UnprocessedAccounts: {
                  shape: 'S1r',
                  locationName: 'unprocessedAccounts'
                }
              }
            }
          },
          EnableOrganizationAdminAccount: {
            http: {
              requestUri: '/admin/enable',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['AdminAccountId'],
              members: {
                AdminAccountId: {
                  locationName: 'adminAccountId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          GetAdministratorAccount: {
            http: {
              method: 'GET',
              requestUri: '/detector/{detectorId}/administrator',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['DetectorId'],
              members: {
                DetectorId: {
                  location: 'uri',
                  locationName: 'detectorId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Administrator'],
              members: {
                Administrator: {
                  locationName: 'administrator',
                  type: 'structure',
                  members: {
                    AccountId: {
                      locationName: 'accountId'
                    },
                    InvitationId: {
                      locationName: 'invitationId'
                    },
                    RelationshipStatus: {
                      locationName: 'relationshipStatus'
                    },
                    InvitedAt: {
                      locationName: 'invitedAt'
                    }
                  }
                }
              }
            }
          },
          GetCoverageStatistics: {
            http: {
              requestUri: '/detector/{detectorId}/coverage/statistics',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['DetectorId', 'StatisticsType'],
              members: {
                DetectorId: {
                  location: 'uri',
                  locationName: 'detectorId'
                },
                FilterCriteria: {
                  shape: 'S49',
                  locationName: 'filterCriteria'
                },
                StatisticsType: {
                  locationName: 'statisticsType',
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                CoverageStatistics: {
                  locationName: 'coverageStatistics',
                  type: 'structure',
                  members: {
                    CountByResourceType: {
                      locationName: 'countByResourceType',
                      type: 'map',
                      key: {},
                      value: {
                        type: 'long'
                      }
                    },
                    CountByCoverageStatus: {
                      locationName: 'countByCoverageStatus',
                      type: 'map',
                      key: {},
                      value: {
                        type: 'long'
                      }
                    }
                  }
                }
              }
            }
          },
          GetDetector: {
            http: {
              method: 'GET',
              requestUri: '/detector/{detectorId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['DetectorId'],
              members: {
                DetectorId: {
                  location: 'uri',
                  locationName: 'detectorId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['ServiceRole', 'Status'],
              members: {
                CreatedAt: {
                  locationName: 'createdAt'
                },
                FindingPublishingFrequency: {
                  locationName: 'findingPublishingFrequency'
                },
                ServiceRole: {
                  locationName: 'serviceRole'
                },
                Status: {
                  locationName: 'status'
                },
                UpdatedAt: {
                  locationName: 'updatedAt'
                },
                DataSources: {
                  shape: 'S4p',
                  deprecated: true,
                  deprecatedMessage: 'This parameter is deprecated, use Features instead',
                  locationName: 'dataSources'
                },
                Tags: {
                  shape: 'Sl',
                  locationName: 'tags'
                },
                Features: {
                  locationName: 'features',
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Name: {
                        locationName: 'name'
                      },
                      Status: {
                        locationName: 'status'
                      },
                      UpdatedAt: {
                        locationName: 'updatedAt',
                        type: 'timestamp'
                      },
                      AdditionalConfiguration: {
                        locationName: 'additionalConfiguration',
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            Name: {
                              locationName: 'name'
                            },
                            Status: {
                              locationName: 'status'
                            },
                            UpdatedAt: {
                              locationName: 'updatedAt',
                              type: 'timestamp'
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
          GetFilter: {
            http: {
              method: 'GET',
              requestUri: '/detector/{detectorId}/filter/{filterName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['DetectorId', 'FilterName'],
              members: {
                DetectorId: {
                  location: 'uri',
                  locationName: 'detectorId'
                },
                FilterName: {
                  location: 'uri',
                  locationName: 'filterName'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Name', 'Action', 'FindingCriteria'],
              members: {
                Name: {
                  locationName: 'name'
                },
                Description: {
                  locationName: 'description'
                },
                Action: {
                  locationName: 'action'
                },
                Rank: {
                  locationName: 'rank',
                  type: 'integer'
                },
                FindingCriteria: {
                  shape: 'S16',
                  locationName: 'findingCriteria'
                },
                Tags: {
                  shape: 'Sl',
                  locationName: 'tags'
                }
              }
            }
          },
          GetFindings: {
            http: {
              requestUri: '/detector/{detectorId}/findings/get',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['DetectorId', 'FindingIds'],
              members: {
                DetectorId: {
                  location: 'uri',
                  locationName: 'detectorId'
                },
                FindingIds: {
                  shape: 'S8',
                  locationName: 'findingIds'
                },
                SortCriteria: {
                  shape: 'S2u',
                  locationName: 'sortCriteria'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Findings'],
              members: {
                Findings: {
                  locationName: 'findings',
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['AccountId', 'Arn', 'CreatedAt', 'Id', 'Region', 'Resource', 'SchemaVersion', 'Severity', 'Type', 'UpdatedAt'],
                    members: {
                      AccountId: {
                        locationName: 'accountId'
                      },
                      Arn: {
                        locationName: 'arn'
                      },
                      Confidence: {
                        locationName: 'confidence',
                        type: 'double'
                      },
                      CreatedAt: {
                        locationName: 'createdAt'
                      },
                      Description: {
                        locationName: 'description'
                      },
                      Id: {
                        locationName: 'id'
                      },
                      Partition: {
                        locationName: 'partition'
                      },
                      Region: {
                        locationName: 'region'
                      },
                      Resource: {
                        locationName: 'resource',
                        type: 'structure',
                        members: {
                          AccessKeyDetails: {
                            locationName: 'accessKeyDetails',
                            type: 'structure',
                            members: {
                              AccessKeyId: {
                                locationName: 'accessKeyId'
                              },
                              PrincipalId: {
                                locationName: 'principalId'
                              },
                              UserName: {
                                locationName: 'userName'
                              },
                              UserType: {
                                locationName: 'userType'
                              }
                            }
                          },
                          S3BucketDetails: {
                            locationName: 's3BucketDetails',
                            type: 'list',
                            member: {
                              type: 'structure',
                              members: {
                                Arn: {
                                  locationName: 'arn'
                                },
                                Name: {
                                  locationName: 'name'
                                },
                                Type: {
                                  locationName: 'type'
                                },
                                CreatedAt: {
                                  locationName: 'createdAt',
                                  type: 'timestamp'
                                },
                                Owner: {
                                  locationName: 'owner',
                                  type: 'structure',
                                  members: {
                                    Id: {
                                      locationName: 'id'
                                    }
                                  }
                                },
                                Tags: {
                                  shape: 'S5d',
                                  locationName: 'tags'
                                },
                                DefaultServerSideEncryption: {
                                  locationName: 'defaultServerSideEncryption',
                                  type: 'structure',
                                  members: {
                                    EncryptionType: {
                                      locationName: 'encryptionType'
                                    },
                                    KmsMasterKeyArn: {
                                      locationName: 'kmsMasterKeyArn'
                                    }
                                  }
                                },
                                PublicAccess: {
                                  locationName: 'publicAccess',
                                  type: 'structure',
                                  members: {
                                    PermissionConfiguration: {
                                      locationName: 'permissionConfiguration',
                                      type: 'structure',
                                      members: {
                                        BucketLevelPermissions: {
                                          locationName: 'bucketLevelPermissions',
                                          type: 'structure',
                                          members: {
                                            AccessControlList: {
                                              locationName: 'accessControlList',
                                              type: 'structure',
                                              members: {
                                                AllowsPublicReadAccess: {
                                                  locationName: 'allowsPublicReadAccess',
                                                  type: 'boolean'
                                                },
                                                AllowsPublicWriteAccess: {
                                                  locationName: 'allowsPublicWriteAccess',
                                                  type: 'boolean'
                                                }
                                              }
                                            },
                                            BucketPolicy: {
                                              locationName: 'bucketPolicy',
                                              type: 'structure',
                                              members: {
                                                AllowsPublicReadAccess: {
                                                  locationName: 'allowsPublicReadAccess',
                                                  type: 'boolean'
                                                },
                                                AllowsPublicWriteAccess: {
                                                  locationName: 'allowsPublicWriteAccess',
                                                  type: 'boolean'
                                                }
                                              }
                                            },
                                            BlockPublicAccess: {
                                              shape: 'S5l',
                                              locationName: 'blockPublicAccess'
                                            }
                                          }
                                        },
                                        AccountLevelPermissions: {
                                          locationName: 'accountLevelPermissions',
                                          type: 'structure',
                                          members: {
                                            BlockPublicAccess: {
                                              shape: 'S5l',
                                              locationName: 'blockPublicAccess'
                                            }
                                          }
                                        }
                                      }
                                    },
                                    EffectivePermission: {
                                      locationName: 'effectivePermission'
                                    }
                                  }
                                }
                              }
                            }
                          },
                          InstanceDetails: {
                            locationName: 'instanceDetails',
                            type: 'structure',
                            members: {
                              AvailabilityZone: {
                                locationName: 'availabilityZone'
                              },
                              IamInstanceProfile: {
                                locationName: 'iamInstanceProfile',
                                type: 'structure',
                                members: {
                                  Arn: {
                                    locationName: 'arn'
                                  },
                                  Id: {
                                    locationName: 'id'
                                  }
                                }
                              },
                              ImageDescription: {
                                locationName: 'imageDescription'
                              },
                              ImageId: {
                                locationName: 'imageId'
                              },
                              InstanceId: {
                                locationName: 'instanceId'
                              },
                              InstanceState: {
                                locationName: 'instanceState'
                              },
                              InstanceType: {
                                locationName: 'instanceType'
                              },
                              OutpostArn: {
                                locationName: 'outpostArn'
                              },
                              LaunchTime: {
                                locationName: 'launchTime'
                              },
                              NetworkInterfaces: {
                                locationName: 'networkInterfaces',
                                type: 'list',
                                member: {
                                  type: 'structure',
                                  members: {
                                    Ipv6Addresses: {
                                      locationName: 'ipv6Addresses',
                                      type: 'list',
                                      member: {}
                                    },
                                    NetworkInterfaceId: {
                                      locationName: 'networkInterfaceId'
                                    },
                                    PrivateDnsName: {
                                      locationName: 'privateDnsName'
                                    },
                                    PrivateIpAddress: {
                                      shape: 'S5s',
                                      locationName: 'privateIpAddress'
                                    },
                                    PrivateIpAddresses: {
                                      locationName: 'privateIpAddresses',
                                      type: 'list',
                                      member: {
                                        type: 'structure',
                                        members: {
                                          PrivateDnsName: {
                                            locationName: 'privateDnsName'
                                          },
                                          PrivateIpAddress: {
                                            shape: 'S5s',
                                            locationName: 'privateIpAddress'
                                          }
                                        }
                                      }
                                    },
                                    PublicDnsName: {
                                      locationName: 'publicDnsName'
                                    },
                                    PublicIp: {
                                      locationName: 'publicIp'
                                    },
                                    SecurityGroups: {
                                      shape: 'S5v',
                                      locationName: 'securityGroups'
                                    },
                                    SubnetId: {
                                      locationName: 'subnetId'
                                    },
                                    VpcId: {
                                      locationName: 'vpcId'
                                    }
                                  }
                                }
                              },
                              Platform: {
                                locationName: 'platform'
                              },
                              ProductCodes: {
                                locationName: 'productCodes',
                                type: 'list',
                                member: {
                                  type: 'structure',
                                  members: {
                                    Code: {
                                      locationName: 'productCodeId'
                                    },
                                    ProductType: {
                                      locationName: 'productCodeType'
                                    }
                                  }
                                }
                              },
                              Tags: {
                                shape: 'S5d',
                                locationName: 'tags'
                              }
                            }
                          },
                          EksClusterDetails: {
                            locationName: 'eksClusterDetails',
                            type: 'structure',
                            members: {
                              Name: {
                                locationName: 'name'
                              },
                              Arn: {
                                locationName: 'arn'
                              },
                              VpcId: {
                                locationName: 'vpcId'
                              },
                              Status: {
                                locationName: 'status'
                              },
                              Tags: {
                                shape: 'S5d',
                                locationName: 'tags'
                              },
                              CreatedAt: {
                                locationName: 'createdAt',
                                type: 'timestamp'
                              }
                            }
                          },
                          KubernetesDetails: {
                            locationName: 'kubernetesDetails',
                            type: 'structure',
                            members: {
                              KubernetesUserDetails: {
                                locationName: 'kubernetesUserDetails',
                                type: 'structure',
                                members: {
                                  Username: {
                                    locationName: 'username'
                                  },
                                  Uid: {
                                    locationName: 'uid'
                                  },
                                  Groups: {
                                    shape: 'S62',
                                    locationName: 'groups'
                                  },
                                  SessionName: {
                                    locationName: 'sessionName',
                                    type: 'list',
                                    member: {}
                                  },
                                  ImpersonatedUser: {
                                    locationName: 'impersonatedUser',
                                    type: 'structure',
                                    members: {
                                      Username: {
                                        locationName: 'username'
                                      },
                                      Groups: {
                                        shape: 'S62',
                                        locationName: 'groups'
                                      }
                                    }
                                  }
                                }
                              },
                              KubernetesWorkloadDetails: {
                                locationName: 'kubernetesWorkloadDetails',
                                type: 'structure',
                                members: {
                                  Name: {
                                    locationName: 'name'
                                  },
                                  Type: {
                                    locationName: 'type'
                                  },
                                  Uid: {
                                    locationName: 'uid'
                                  },
                                  Namespace: {
                                    locationName: 'namespace'
                                  },
                                  HostNetwork: {
                                    locationName: 'hostNetwork',
                                    type: 'boolean'
                                  },
                                  Containers: {
                                    shape: 'S66',
                                    locationName: 'containers'
                                  },
                                  Volumes: {
                                    shape: 'S6b',
                                    locationName: 'volumes'
                                  },
                                  ServiceAccountName: {
                                    locationName: 'serviceAccountName'
                                  },
                                  HostIPC: {
                                    locationName: 'hostIPC',
                                    type: 'boolean'
                                  },
                                  HostPID: {
                                    locationName: 'hostPID',
                                    type: 'boolean'
                                  }
                                }
                              }
                            }
                          },
                          ResourceType: {
                            locationName: 'resourceType'
                          },
                          EbsVolumeDetails: {
                            locationName: 'ebsVolumeDetails',
                            type: 'structure',
                            members: {
                              ScannedVolumeDetails: {
                                shape: 'S37',
                                locationName: 'scannedVolumeDetails'
                              },
                              SkippedVolumeDetails: {
                                shape: 'S37',
                                locationName: 'skippedVolumeDetails'
                              }
                            }
                          },
                          EcsClusterDetails: {
                            locationName: 'ecsClusterDetails',
                            type: 'structure',
                            members: {
                              Name: {
                                locationName: 'name'
                              },
                              Arn: {
                                locationName: 'arn'
                              },
                              Status: {
                                locationName: 'status'
                              },
                              ActiveServicesCount: {
                                locationName: 'activeServicesCount',
                                type: 'integer'
                              },
                              RegisteredContainerInstancesCount: {
                                locationName: 'registeredContainerInstancesCount',
                                type: 'integer'
                              },
                              RunningTasksCount: {
                                locationName: 'runningTasksCount',
                                type: 'integer'
                              },
                              Tags: {
                                shape: 'S5d',
                                locationName: 'tags'
                              },
                              TaskDetails: {
                                locationName: 'taskDetails',
                                type: 'structure',
                                members: {
                                  Arn: {
                                    locationName: 'arn'
                                  },
                                  DefinitionArn: {
                                    locationName: 'definitionArn'
                                  },
                                  Version: {
                                    locationName: 'version'
                                  },
                                  TaskCreatedAt: {
                                    locationName: 'createdAt',
                                    type: 'timestamp'
                                  },
                                  StartedAt: {
                                    locationName: 'startedAt',
                                    type: 'timestamp'
                                  },
                                  StartedBy: {
                                    locationName: 'startedBy'
                                  },
                                  Tags: {
                                    shape: 'S5d',
                                    locationName: 'tags'
                                  },
                                  Volumes: {
                                    shape: 'S6b',
                                    locationName: 'volumes'
                                  },
                                  Containers: {
                                    shape: 'S66',
                                    locationName: 'containers'
                                  },
                                  Group: {
                                    locationName: 'group'
                                  }
                                }
                              }
                            }
                          },
                          ContainerDetails: {
                            shape: 'S67',
                            locationName: 'containerDetails'
                          },
                          RdsDbInstanceDetails: {
                            locationName: 'rdsDbInstanceDetails',
                            type: 'structure',
                            members: {
                              DbInstanceIdentifier: {
                                locationName: 'dbInstanceIdentifier'
                              },
                              Engine: {
                                locationName: 'engine'
                              },
                              EngineVersion: {
                                locationName: 'engineVersion'
                              },
                              DbClusterIdentifier: {
                                locationName: 'dbClusterIdentifier'
                              },
                              DbInstanceArn: {
                                locationName: 'dbInstanceArn'
                              },
                              Tags: {
                                shape: 'S5d',
                                locationName: 'tags'
                              }
                            }
                          },
                          RdsDbUserDetails: {
                            locationName: 'rdsDbUserDetails',
                            type: 'structure',
                            members: {
                              User: {
                                locationName: 'user'
                              },
                              Application: {
                                locationName: 'application'
                              },
                              Database: {
                                locationName: 'database'
                              },
                              Ssl: {
                                locationName: 'ssl'
                              },
                              AuthMethod: {
                                locationName: 'authMethod'
                              }
                            }
                          },
                          LambdaDetails: {
                            locationName: 'lambdaDetails',
                            type: 'structure',
                            members: {
                              FunctionArn: {
                                locationName: 'functionArn'
                              },
                              FunctionName: {
                                locationName: 'functionName'
                              },
                              Description: {
                                locationName: 'description'
                              },
                              LastModifiedAt: {
                                locationName: 'lastModifiedAt',
                                type: 'timestamp'
                              },
                              RevisionId: {
                                locationName: 'revisionId'
                              },
                              FunctionVersion: {
                                locationName: 'functionVersion'
                              },
                              Role: {
                                locationName: 'role'
                              },
                              VpcConfig: {
                                locationName: 'vpcConfig',
                                type: 'structure',
                                members: {
                                  SubnetIds: {
                                    locationName: 'subnetIds',
                                    type: 'list',
                                    member: {}
                                  },
                                  VpcId: {
                                    locationName: 'vpcId'
                                  },
                                  SecurityGroups: {
                                    shape: 'S5v',
                                    locationName: 'securityGroups'
                                  }
                                }
                              },
                              Tags: {
                                shape: 'S5d',
                                locationName: 'tags'
                              }
                            }
                          }
                        }
                      },
                      SchemaVersion: {
                        locationName: 'schemaVersion'
                      },
                      Service: {
                        locationName: 'service',
                        type: 'structure',
                        members: {
                          Action: {
                            locationName: 'action',
                            type: 'structure',
                            members: {
                              ActionType: {
                                locationName: 'actionType'
                              },
                              AwsApiCallAction: {
                                locationName: 'awsApiCallAction',
                                type: 'structure',
                                members: {
                                  Api: {
                                    locationName: 'api'
                                  },
                                  CallerType: {
                                    locationName: 'callerType'
                                  },
                                  DomainDetails: {
                                    locationName: 'domainDetails',
                                    type: 'structure',
                                    members: {
                                      Domain: {
                                        locationName: 'domain'
                                      }
                                    }
                                  },
                                  ErrorCode: {
                                    locationName: 'errorCode'
                                  },
                                  UserAgent: {
                                    locationName: 'userAgent'
                                  },
                                  RemoteIpDetails: {
                                    shape: 'S6q',
                                    locationName: 'remoteIpDetails'
                                  },
                                  ServiceName: {
                                    locationName: 'serviceName'
                                  },
                                  RemoteAccountDetails: {
                                    locationName: 'remoteAccountDetails',
                                    type: 'structure',
                                    members: {
                                      AccountId: {
                                        locationName: 'accountId'
                                      },
                                      Affiliated: {
                                        locationName: 'affiliated',
                                        type: 'boolean'
                                      }
                                    }
                                  },
                                  AffectedResources: {
                                    locationName: 'affectedResources',
                                    type: 'map',
                                    key: {},
                                    value: {}
                                  }
                                }
                              },
                              DnsRequestAction: {
                                locationName: 'dnsRequestAction',
                                type: 'structure',
                                members: {
                                  Domain: {
                                    locationName: 'domain'
                                  },
                                  Protocol: {
                                    locationName: 'protocol'
                                  },
                                  Blocked: {
                                    locationName: 'blocked',
                                    type: 'boolean'
                                  },
                                  DomainWithSuffix: {
                                    locationName: 'domainWithSuffix'
                                  }
                                }
                              },
                              NetworkConnectionAction: {
                                locationName: 'networkConnectionAction',
                                type: 'structure',
                                members: {
                                  Blocked: {
                                    locationName: 'blocked',
                                    type: 'boolean'
                                  },
                                  ConnectionDirection: {
                                    locationName: 'connectionDirection'
                                  },
                                  LocalPortDetails: {
                                    shape: 'S6z',
                                    locationName: 'localPortDetails'
                                  },
                                  Protocol: {
                                    locationName: 'protocol'
                                  },
                                  LocalIpDetails: {
                                    shape: 'S70',
                                    locationName: 'localIpDetails'
                                  },
                                  RemoteIpDetails: {
                                    shape: 'S6q',
                                    locationName: 'remoteIpDetails'
                                  },
                                  RemotePortDetails: {
                                    locationName: 'remotePortDetails',
                                    type: 'structure',
                                    members: {
                                      Port: {
                                        locationName: 'port',
                                        type: 'integer'
                                      },
                                      PortName: {
                                        locationName: 'portName'
                                      }
                                    }
                                  }
                                }
                              },
                              PortProbeAction: {
                                locationName: 'portProbeAction',
                                type: 'structure',
                                members: {
                                  Blocked: {
                                    locationName: 'blocked',
                                    type: 'boolean'
                                  },
                                  PortProbeDetails: {
                                    locationName: 'portProbeDetails',
                                    type: 'list',
                                    member: {
                                      type: 'structure',
                                      members: {
                                        LocalPortDetails: {
                                          shape: 'S6z',
                                          locationName: 'localPortDetails'
                                        },
                                        LocalIpDetails: {
                                          shape: 'S70',
                                          locationName: 'localIpDetails'
                                        },
                                        RemoteIpDetails: {
                                          shape: 'S6q',
                                          locationName: 'remoteIpDetails'
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              KubernetesApiCallAction: {
                                locationName: 'kubernetesApiCallAction',
                                type: 'structure',
                                members: {
                                  RequestUri: {
                                    locationName: 'requestUri'
                                  },
                                  Verb: {
                                    locationName: 'verb'
                                  },
                                  SourceIps: {
                                    locationName: 'sourceIps',
                                    type: 'list',
                                    member: {}
                                  },
                                  UserAgent: {
                                    locationName: 'userAgent'
                                  },
                                  RemoteIpDetails: {
                                    shape: 'S6q',
                                    locationName: 'remoteIpDetails'
                                  },
                                  StatusCode: {
                                    locationName: 'statusCode',
                                    type: 'integer'
                                  },
                                  Parameters: {
                                    locationName: 'parameters'
                                  },
                                  Resource: {
                                    locationName: 'resource'
                                  },
                                  Subresource: {
                                    locationName: 'subresource'
                                  },
                                  Namespace: {
                                    locationName: 'namespace'
                                  },
                                  ResourceName: {
                                    locationName: 'resourceName'
                                  }
                                }
                              },
                              RdsLoginAttemptAction: {
                                locationName: 'rdsLoginAttemptAction',
                                type: 'structure',
                                members: {
                                  RemoteIpDetails: {
                                    shape: 'S6q',
                                    locationName: 'remoteIpDetails'
                                  },
                                  LoginAttributes: {
                                    type: 'list',
                                    member: {
                                      type: 'structure',
                                      members: {
                                        User: {
                                          locationName: 'user'
                                        },
                                        Application: {
                                          locationName: 'application'
                                        },
                                        FailedLoginAttempts: {
                                          locationName: 'failedLoginAttempts',
                                          type: 'integer'
                                        },
                                        SuccessfulLoginAttempts: {
                                          locationName: 'successfulLoginAttempts',
                                          type: 'integer'
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              KubernetesPermissionCheckedDetails: {
                                locationName: 'kubernetesPermissionCheckedDetails',
                                type: 'structure',
                                members: {
                                  Verb: {
                                    locationName: 'verb'
                                  },
                                  Resource: {
                                    locationName: 'resource'
                                  },
                                  Namespace: {
                                    locationName: 'namespace'
                                  },
                                  Allowed: {
                                    locationName: 'allowed',
                                    type: 'boolean'
                                  }
                                }
                              },
                              KubernetesRoleBindingDetails: {
                                locationName: 'kubernetesRoleBindingDetails',
                                type: 'structure',
                                members: {
                                  Kind: {
                                    locationName: 'kind'
                                  },
                                  Name: {
                                    locationName: 'name'
                                  },
                                  Uid: {
                                    locationName: 'uid'
                                  },
                                  RoleRefName: {
                                    locationName: 'roleRefName'
                                  },
                                  RoleRefKind: {
                                    locationName: 'roleRefKind'
                                  }
                                }
                              },
                              KubernetesRoleDetails: {
                                locationName: 'kubernetesRoleDetails',
                                type: 'structure',
                                members: {
                                  Kind: {
                                    locationName: 'kind'
                                  },
                                  Name: {
                                    locationName: 'name'
                                  },
                                  Uid: {
                                    locationName: 'uid'
                                  }
                                }
                              }
                            }
                          },
                          Evidence: {
                            locationName: 'evidence',
                            type: 'structure',
                            members: {
                              ThreatIntelligenceDetails: {
                                locationName: 'threatIntelligenceDetails',
                                type: 'list',
                                member: {
                                  type: 'structure',
                                  members: {
                                    ThreatListName: {
                                      locationName: 'threatListName'
                                    },
                                    ThreatNames: {
                                      locationName: 'threatNames',
                                      type: 'list',
                                      member: {}
                                    },
                                    ThreatFileSha256: {
                                      locationName: 'threatFileSha256'
                                    }
                                  }
                                }
                              }
                            }
                          },
                          Archived: {
                            locationName: 'archived',
                            type: 'boolean'
                          },
                          Count: {
                            locationName: 'count',
                            type: 'integer'
                          },
                          DetectorId: {
                            locationName: 'detectorId'
                          },
                          EventFirstSeen: {
                            locationName: 'eventFirstSeen'
                          },
                          EventLastSeen: {
                            locationName: 'eventLastSeen'
                          },
                          ResourceRole: {
                            locationName: 'resourceRole'
                          },
                          ServiceName: {
                            locationName: 'serviceName'
                          },
                          UserFeedback: {
                            locationName: 'userFeedback'
                          },
                          AdditionalInfo: {
                            locationName: 'additionalInfo',
                            type: 'structure',
                            members: {
                              Value: {
                                locationName: 'value'
                              },
                              Type: {
                                locationName: 'type'
                              }
                            }
                          },
                          FeatureName: {
                            locationName: 'featureName'
                          },
                          EbsVolumeScanDetails: {
                            locationName: 'ebsVolumeScanDetails',
                            type: 'structure',
                            members: {
                              ScanId: {
                                locationName: 'scanId'
                              },
                              ScanStartedAt: {
                                locationName: 'scanStartedAt',
                                type: 'timestamp'
                              },
                              ScanCompletedAt: {
                                locationName: 'scanCompletedAt',
                                type: 'timestamp'
                              },
                              TriggerFindingId: {
                                locationName: 'triggerFindingId'
                              },
                              Sources: {
                                locationName: 'sources',
                                type: 'list',
                                member: {}
                              },
                              ScanDetections: {
                                locationName: 'scanDetections',
                                type: 'structure',
                                members: {
                                  ScannedItemCount: {
                                    locationName: 'scannedItemCount',
                                    type: 'structure',
                                    members: {
                                      TotalGb: {
                                        locationName: 'totalGb',
                                        type: 'integer'
                                      },
                                      Files: {
                                        locationName: 'files',
                                        type: 'integer'
                                      },
                                      Volumes: {
                                        locationName: 'volumes',
                                        type: 'integer'
                                      }
                                    }
                                  },
                                  ThreatsDetectedItemCount: {
                                    locationName: 'threatsDetectedItemCount',
                                    type: 'structure',
                                    members: {
                                      Files: {
                                        locationName: 'files',
                                        type: 'integer'
                                      }
                                    }
                                  },
                                  HighestSeverityThreatDetails: {
                                    locationName: 'highestSeverityThreatDetails',
                                    type: 'structure',
                                    members: {
                                      Severity: {
                                        locationName: 'severity'
                                      },
                                      ThreatName: {
                                        locationName: 'threatName'
                                      },
                                      Count: {
                                        locationName: 'count',
                                        type: 'integer'
                                      }
                                    }
                                  },
                                  ThreatDetectedByName: {
                                    locationName: 'threatDetectedByName',
                                    type: 'structure',
                                    members: {
                                      ItemCount: {
                                        locationName: 'itemCount',
                                        type: 'integer'
                                      },
                                      UniqueThreatNameCount: {
                                        locationName: 'uniqueThreatNameCount',
                                        type: 'integer'
                                      },
                                      Shortened: {
                                        locationName: 'shortened',
                                        type: 'boolean'
                                      },
                                      ThreatNames: {
                                        locationName: 'threatNames',
                                        type: 'list',
                                        member: {
                                          type: 'structure',
                                          members: {
                                            Name: {
                                              locationName: 'name'
                                            },
                                            Severity: {
                                              locationName: 'severity'
                                            },
                                            ItemCount: {
                                              locationName: 'itemCount',
                                              type: 'integer'
                                            },
                                            FilePaths: {
                                              locationName: 'filePaths',
                                              type: 'list',
                                              member: {
                                                type: 'structure',
                                                members: {
                                                  FilePath: {
                                                    locationName: 'filePath'
                                                  },
                                                  VolumeArn: {
                                                    locationName: 'volumeArn'
                                                  },
                                                  Hash: {
                                                    locationName: 'hash'
                                                  },
                                                  FileName: {
                                                    locationName: 'fileName'
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
                              ScanType: {
                                locationName: 'scanType'
                              }
                            }
                          },
                          RuntimeDetails: {
                            locationName: 'runtimeDetails',
                            type: 'structure',
                            members: {
                              Process: {
                                shape: 'S7u',
                                locationName: 'process'
                              },
                              Context: {
                                locationName: 'context',
                                type: 'structure',
                                members: {
                                  ModifyingProcess: {
                                    shape: 'S7u',
                                    locationName: 'modifyingProcess'
                                  },
                                  ModifiedAt: {
                                    locationName: 'modifiedAt',
                                    type: 'timestamp'
                                  },
                                  ScriptPath: {
                                    locationName: 'scriptPath'
                                  },
                                  LibraryPath: {
                                    locationName: 'libraryPath'
                                  },
                                  LdPreloadValue: {
                                    locationName: 'ldPreloadValue'
                                  },
                                  SocketPath: {
                                    locationName: 'socketPath'
                                  },
                                  RuncBinaryPath: {
                                    locationName: 'runcBinaryPath'
                                  },
                                  ReleaseAgentPath: {
                                    locationName: 'releaseAgentPath'
                                  },
                                  MountSource: {
                                    locationName: 'mountSource'
                                  },
                                  MountTarget: {
                                    locationName: 'mountTarget'
                                  },
                                  FileSystemType: {
                                    locationName: 'fileSystemType'
                                  },
                                  Flags: {
                                    locationName: 'flags',
                                    type: 'list',
                                    member: {}
                                  },
                                  ModuleName: {
                                    locationName: 'moduleName'
                                  },
                                  ModuleFilePath: {
                                    locationName: 'moduleFilePath'
                                  },
                                  ModuleSha256: {
                                    locationName: 'moduleSha256'
                                  },
                                  ShellHistoryFilePath: {
                                    locationName: 'shellHistoryFilePath'
                                  },
                                  TargetProcess: {
                                    shape: 'S7u',
                                    locationName: 'targetProcess'
                                  },
                                  AddressFamily: {
                                    locationName: 'addressFamily'
                                  },
                                  IanaProtocolNumber: {
                                    locationName: 'ianaProtocolNumber',
                                    type: 'integer'
                                  },
                                  MemoryRegions: {
                                    locationName: 'memoryRegions',
                                    type: 'list',
                                    member: {}
                                  },
                                  ToolName: {
                                    locationName: 'toolName'
                                  },
                                  ToolCategory: {
                                    locationName: 'toolCategory'
                                  },
                                  ServiceName: {
                                    locationName: 'serviceName'
                                  },
                                  CommandLineExample: {
                                    locationName: 'commandLineExample'
                                  },
                                  ThreatFilePath: {
                                    locationName: 'threatFilePath'
                                  }
                                }
                              }
                            }
                          },
                          Detection: {
                            locationName: 'detection',
                            type: 'structure',
                            members: {
                              Anomaly: {
                                locationName: 'anomaly',
                                type: 'structure',
                                members: {
                                  Profiles: {
                                    locationName: 'profiles',
                                    type: 'map',
                                    key: {},
                                    value: {
                                      type: 'map',
                                      key: {},
                                      value: {
                                        type: 'list',
                                        member: {
                                          shape: 'S85'
                                        }
                                      }
                                    }
                                  },
                                  Unusual: {
                                    locationName: 'unusual',
                                    type: 'structure',
                                    members: {
                                      Behavior: {
                                        locationName: 'behavior',
                                        type: 'map',
                                        key: {},
                                        value: {
                                          type: 'map',
                                          key: {},
                                          value: {
                                            shape: 'S85'
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
                      Severity: {
                        locationName: 'severity',
                        type: 'double'
                      },
                      Title: {
                        locationName: 'title'
                      },
                      Type: {
                        locationName: 'type'
                      },
                      UpdatedAt: {
                        locationName: 'updatedAt'
                      }
                    }
                  }
                }
              }
            }
          },
          GetFindingsStatistics: {
            http: {
              requestUri: '/detector/{detectorId}/findings/statistics',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['DetectorId', 'FindingStatisticTypes'],
              members: {
                DetectorId: {
                  location: 'uri',
                  locationName: 'detectorId'
                },
                FindingStatisticTypes: {
                  locationName: 'findingStatisticTypes',
                  type: 'list',
                  member: {}
                },
                FindingCriteria: {
                  shape: 'S16',
                  locationName: 'findingCriteria'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['FindingStatistics'],
              members: {
                FindingStatistics: {
                  locationName: 'findingStatistics',
                  type: 'structure',
                  members: {
                    CountBySeverity: {
                      locationName: 'countBySeverity',
                      type: 'map',
                      key: {},
                      value: {
                        type: 'integer'
                      }
                    }
                  }
                }
              }
            }
          },
          GetIPSet: {
            http: {
              method: 'GET',
              requestUri: '/detector/{detectorId}/ipset/{ipSetId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['DetectorId', 'IpSetId'],
              members: {
                DetectorId: {
                  location: 'uri',
                  locationName: 'detectorId'
                },
                IpSetId: {
                  location: 'uri',
                  locationName: 'ipSetId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Name', 'Format', 'Location', 'Status'],
              members: {
                Name: {
                  locationName: 'name'
                },
                Format: {
                  locationName: 'format'
                },
                Location: {
                  locationName: 'location'
                },
                Status: {
                  locationName: 'status'
                },
                Tags: {
                  shape: 'Sl',
                  locationName: 'tags'
                }
              }
            }
          },
          GetInvitationsCount: {
            http: {
              method: 'GET',
              requestUri: '/invitation/count',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {
                InvitationsCount: {
                  locationName: 'invitationsCount',
                  type: 'integer'
                }
              }
            }
          },
          GetMalwareScanSettings: {
            http: {
              method: 'GET',
              requestUri: '/detector/{detectorId}/malware-scan-settings',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['DetectorId'],
              members: {
                DetectorId: {
                  location: 'uri',
                  locationName: 'detectorId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ScanResourceCriteria: {
                  shape: 'S8q',
                  locationName: 'scanResourceCriteria'
                },
                EbsSnapshotPreservation: {
                  locationName: 'ebsSnapshotPreservation'
                }
              }
            }
          },
          GetMasterAccount: {
            http: {
              method: 'GET',
              requestUri: '/detector/{detectorId}/master',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['DetectorId'],
              members: {
                DetectorId: {
                  location: 'uri',
                  locationName: 'detectorId'
                }
              },
              deprecated: true,
              deprecatedMessage: 'This input is deprecated, use GetAdministratorAccountRequest instead'
            },
            output: {
              type: 'structure',
              required: ['Master'],
              members: {
                Master: {
                  locationName: 'master',
                  type: 'structure',
                  members: {
                    AccountId: {
                      locationName: 'accountId'
                    },
                    InvitationId: {
                      locationName: 'invitationId'
                    },
                    RelationshipStatus: {
                      locationName: 'relationshipStatus'
                    },
                    InvitedAt: {
                      locationName: 'invitedAt'
                    }
                  }
                }
              },
              deprecated: true,
              deprecatedMessage: 'This output is deprecated, use GetAdministratorAccountResponse instead'
            },
            deprecated: true,
            deprecatedMessage: 'This operation is deprecated, use GetAdministratorAccount instead'
          },
          GetMemberDetectors: {
            http: {
              requestUri: '/detector/{detectorId}/member/detector/get',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['DetectorId', 'AccountIds'],
              members: {
                DetectorId: {
                  location: 'uri',
                  locationName: 'detectorId'
                },
                AccountIds: {
                  shape: 'S25',
                  locationName: 'accountIds'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['MemberDataSourceConfigurations', 'UnprocessedAccounts'],
              members: {
                MemberDataSourceConfigurations: {
                  locationName: 'members',
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['AccountId'],
                    members: {
                      AccountId: {
                        locationName: 'accountId'
                      },
                      DataSources: {
                        shape: 'S4p',
                        deprecated: true,
                        deprecatedMessage: 'This parameter is deprecated, use Features instead',
                        locationName: 'dataSources'
                      },
                      Features: {
                        locationName: 'features',
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            Name: {
                              locationName: 'name'
                            },
                            Status: {
                              locationName: 'status'
                            },
                            UpdatedAt: {
                              locationName: 'updatedAt',
                              type: 'timestamp'
                            },
                            AdditionalConfiguration: {
                              locationName: 'additionalConfiguration',
                              type: 'list',
                              member: {
                                type: 'structure',
                                members: {
                                  Name: {
                                    locationName: 'name'
                                  },
                                  Status: {
                                    locationName: 'status'
                                  },
                                  UpdatedAt: {
                                    locationName: 'updatedAt',
                                    type: 'timestamp'
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
                UnprocessedAccounts: {
                  shape: 'S1r',
                  locationName: 'unprocessedAccounts'
                }
              }
            }
          },
          GetMembers: {
            http: {
              requestUri: '/detector/{detectorId}/member/get',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['DetectorId', 'AccountIds'],
              members: {
                DetectorId: {
                  location: 'uri',
                  locationName: 'detectorId'
                },
                AccountIds: {
                  shape: 'S25',
                  locationName: 'accountIds'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Members', 'UnprocessedAccounts'],
              members: {
                Members: {
                  shape: 'S9a',
                  locationName: 'members'
                },
                UnprocessedAccounts: {
                  shape: 'S1r',
                  locationName: 'unprocessedAccounts'
                }
              }
            }
          },
          GetOrganizationStatistics: {
            http: {
              method: 'GET',
              requestUri: '/organization/statistics',
              responseCode: 200
            },
            output: {
              type: 'structure',
              members: {
                OrganizationDetails: {
                  locationName: 'organizationDetails',
                  type: 'structure',
                  members: {
                    UpdatedAt: {
                      locationName: 'updatedAt',
                      type: 'timestamp'
                    },
                    OrganizationStatistics: {
                      locationName: 'organizationStatistics',
                      type: 'structure',
                      members: {
                        TotalAccountsCount: {
                          locationName: 'totalAccountsCount',
                          type: 'integer'
                        },
                        MemberAccountsCount: {
                          locationName: 'memberAccountsCount',
                          type: 'integer'
                        },
                        ActiveAccountsCount: {
                          locationName: 'activeAccountsCount',
                          type: 'integer'
                        },
                        EnabledAccountsCount: {
                          locationName: 'enabledAccountsCount',
                          type: 'integer'
                        },
                        CountByFeature: {
                          locationName: 'countByFeature',
                          type: 'list',
                          member: {
                            type: 'structure',
                            members: {
                              Name: {
                                locationName: 'name'
                              },
                              EnabledAccountsCount: {
                                locationName: 'enabledAccountsCount',
                                type: 'integer'
                              },
                              AdditionalConfiguration: {
                                locationName: 'additionalConfiguration',
                                type: 'list',
                                member: {
                                  type: 'structure',
                                  members: {
                                    Name: {
                                      locationName: 'name'
                                    },
                                    EnabledAccountsCount: {
                                      locationName: 'enabledAccountsCount',
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
                }
              }
            }
          },
          GetRemainingFreeTrialDays: {
            http: {
              requestUri: '/detector/{detectorId}/freeTrial/daysRemaining',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['DetectorId'],
              members: {
                DetectorId: {
                  location: 'uri',
                  locationName: 'detectorId'
                },
                AccountIds: {
                  shape: 'S25',
                  locationName: 'accountIds'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Accounts: {
                  locationName: 'accounts',
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      AccountId: {
                        locationName: 'accountId'
                      },
                      DataSources: {
                        deprecated: true,
                        deprecatedMessage: 'This parameter is deprecated, use Features instead',
                        locationName: 'dataSources',
                        type: 'structure',
                        members: {
                          CloudTrail: {
                            shape: 'S9o',
                            locationName: 'cloudTrail'
                          },
                          DnsLogs: {
                            shape: 'S9o',
                            locationName: 'dnsLogs'
                          },
                          FlowLogs: {
                            shape: 'S9o',
                            locationName: 'flowLogs'
                          },
                          S3Logs: {
                            shape: 'S9o',
                            locationName: 's3Logs'
                          },
                          Kubernetes: {
                            locationName: 'kubernetes',
                            type: 'structure',
                            members: {
                              AuditLogs: {
                                shape: 'S9o',
                                locationName: 'auditLogs'
                              }
                            }
                          },
                          MalwareProtection: {
                            locationName: 'malwareProtection',
                            type: 'structure',
                            members: {
                              ScanEc2InstanceWithFindings: {
                                shape: 'S9o',
                                locationName: 'scanEc2InstanceWithFindings'
                              }
                            }
                          }
                        }
                      },
                      Features: {
                        locationName: 'features',
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            Name: {
                              locationName: 'name'
                            },
                            FreeTrialDaysRemaining: {
                              locationName: 'freeTrialDaysRemaining',
                              type: 'integer'
                            }
                          }
                        }
                      }
                    }
                  }
                },
                UnprocessedAccounts: {
                  shape: 'S1r',
                  locationName: 'unprocessedAccounts'
                }
              }
            }
          },
          GetThreatIntelSet: {
            http: {
              method: 'GET',
              requestUri: '/detector/{detectorId}/threatintelset/{threatIntelSetId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['DetectorId', 'ThreatIntelSetId'],
              members: {
                DetectorId: {
                  location: 'uri',
                  locationName: 'detectorId'
                },
                ThreatIntelSetId: {
                  location: 'uri',
                  locationName: 'threatIntelSetId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Name', 'Format', 'Location', 'Status'],
              members: {
                Name: {
                  locationName: 'name'
                },
                Format: {
                  locationName: 'format'
                },
                Location: {
                  locationName: 'location'
                },
                Status: {
                  locationName: 'status'
                },
                Tags: {
                  shape: 'Sl',
                  locationName: 'tags'
                }
              }
            }
          },
          GetUsageStatistics: {
            http: {
              requestUri: '/detector/{detectorId}/usage/statistics',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['DetectorId', 'UsageStatisticType', 'UsageCriteria'],
              members: {
                DetectorId: {
                  location: 'uri',
                  locationName: 'detectorId'
                },
                UsageStatisticType: {
                  locationName: 'usageStatisticsType'
                },
                UsageCriteria: {
                  locationName: 'usageCriteria',
                  type: 'structure',
                  members: {
                    AccountIds: {
                      shape: 'S25',
                      locationName: 'accountIds'
                    },
                    DataSources: {
                      deprecated: true,
                      deprecatedMessage: 'This parameter is deprecated, use Features instead',
                      locationName: 'dataSources',
                      type: 'list',
                      member: {}
                    },
                    Resources: {
                      locationName: 'resources',
                      type: 'list',
                      member: {}
                    },
                    Features: {
                      locationName: 'features',
                      type: 'list',
                      member: {}
                    }
                  }
                },
                Unit: {
                  locationName: 'unit'
                },
                MaxResults: {
                  locationName: 'maxResults',
                  type: 'integer'
                },
                NextToken: {
                  locationName: 'nextToken'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                UsageStatistics: {
                  locationName: 'usageStatistics',
                  type: 'structure',
                  members: {
                    SumByAccount: {
                      locationName: 'sumByAccount',
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          AccountId: {
                            locationName: 'accountId'
                          },
                          Total: {
                            shape: 'Sa9',
                            locationName: 'total'
                          }
                        }
                      }
                    },
                    TopAccountsByFeature: {
                      locationName: 'topAccountsByFeature',
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          Feature: {
                            locationName: 'feature'
                          },
                          Accounts: {
                            locationName: 'accounts',
                            type: 'list',
                            member: {
                              type: 'structure',
                              members: {
                                AccountId: {
                                  locationName: 'accountId'
                                },
                                Total: {
                                  shape: 'Sa9',
                                  locationName: 'total'
                                }
                              }
                            }
                          }
                        }
                      }
                    },
                    SumByDataSource: {
                      locationName: 'sumByDataSource',
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          DataSource: {
                            locationName: 'dataSource'
                          },
                          Total: {
                            shape: 'Sa9',
                            locationName: 'total'
                          }
                        }
                      }
                    },
                    SumByResource: {
                      shape: 'Sag',
                      locationName: 'sumByResource'
                    },
                    TopResources: {
                      shape: 'Sag',
                      locationName: 'topResources'
                    },
                    SumByFeature: {
                      locationName: 'sumByFeature',
                      type: 'list',
                      member: {
                        type: 'structure',
                        members: {
                          Feature: {
                            locationName: 'feature'
                          },
                          Total: {
                            shape: 'Sa9',
                            locationName: 'total'
                          }
                        }
                      }
                    }
                  }
                },
                NextToken: {
                  locationName: 'nextToken'
                }
              }
            }
          },
          InviteMembers: {
            http: {
              requestUri: '/detector/{detectorId}/member/invite',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['DetectorId', 'AccountIds'],
              members: {
                DetectorId: {
                  location: 'uri',
                  locationName: 'detectorId'
                },
                AccountIds: {
                  shape: 'S25',
                  locationName: 'accountIds'
                },
                DisableEmailNotification: {
                  locationName: 'disableEmailNotification',
                  type: 'boolean'
                },
                Message: {
                  locationName: 'message'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['UnprocessedAccounts'],
              members: {
                UnprocessedAccounts: {
                  shape: 'S1r',
                  locationName: 'unprocessedAccounts'
                }
              }
            }
          },
          ListCoverage: {
            http: {
              requestUri: '/detector/{detectorId}/coverage',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['DetectorId'],
              members: {
                DetectorId: {
                  location: 'uri',
                  locationName: 'detectorId'
                },
                NextToken: {
                  locationName: 'nextToken'
                },
                MaxResults: {
                  locationName: 'maxResults',
                  type: 'integer'
                },
                FilterCriteria: {
                  shape: 'S49',
                  locationName: 'filterCriteria'
                },
                SortCriteria: {
                  locationName: 'sortCriteria',
                  type: 'structure',
                  members: {
                    AttributeName: {
                      locationName: 'attributeName'
                    },
                    OrderBy: {
                      locationName: 'orderBy'
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Resources'],
              members: {
                Resources: {
                  locationName: 'resources',
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ResourceId: {
                        locationName: 'resourceId'
                      },
                      DetectorId: {
                        locationName: 'detectorId'
                      },
                      AccountId: {
                        locationName: 'accountId'
                      },
                      ResourceDetails: {
                        locationName: 'resourceDetails',
                        type: 'structure',
                        members: {
                          EksClusterDetails: {
                            locationName: 'eksClusterDetails',
                            type: 'structure',
                            members: {
                              ClusterName: {
                                locationName: 'clusterName'
                              },
                              CoveredNodes: {
                                locationName: 'coveredNodes',
                                type: 'long'
                              },
                              CompatibleNodes: {
                                locationName: 'compatibleNodes',
                                type: 'long'
                              },
                              AddonDetails: {
                                locationName: 'addonDetails',
                                type: 'structure',
                                members: {
                                  AddonVersion: {
                                    locationName: 'addonVersion'
                                  },
                                  AddonStatus: {
                                    locationName: 'addonStatus'
                                  }
                                }
                              },
                              ManagementType: {
                                locationName: 'managementType'
                              }
                            }
                          },
                          ResourceType: {
                            locationName: 'resourceType'
                          },
                          EcsClusterDetails: {
                            locationName: 'ecsClusterDetails',
                            type: 'structure',
                            members: {
                              ClusterName: {
                                locationName: 'clusterName'
                              },
                              FargateDetails: {
                                locationName: 'fargateDetails',
                                type: 'structure',
                                members: {
                                  Issues: {
                                    locationName: 'issues',
                                    type: 'list',
                                    member: {}
                                  },
                                  ManagementType: {
                                    locationName: 'managementType'
                                  }
                                }
                              },
                              ContainerInstanceDetails: {
                                locationName: 'containerInstanceDetails',
                                type: 'structure',
                                members: {
                                  CoveredContainerInstances: {
                                    locationName: 'coveredContainerInstances',
                                    type: 'long'
                                  },
                                  CompatibleContainerInstances: {
                                    locationName: 'compatibleContainerInstances',
                                    type: 'long'
                                  }
                                }
                              }
                            }
                          },
                          Ec2InstanceDetails: {
                            locationName: 'ec2InstanceDetails',
                            type: 'structure',
                            members: {
                              InstanceId: {
                                locationName: 'instanceId'
                              },
                              InstanceType: {
                                locationName: 'instanceType'
                              },
                              ClusterArn: {
                                locationName: 'clusterArn'
                              },
                              AgentDetails: {
                                locationName: 'agentDetails',
                                type: 'structure',
                                members: {
                                  Version: {
                                    locationName: 'version'
                                  }
                                }
                              },
                              ManagementType: {
                                locationName: 'managementType'
                              }
                            }
                          }
                        }
                      },
                      CoverageStatus: {
                        locationName: 'coverageStatus'
                      },
                      Issue: {
                        locationName: 'issue'
                      },
                      UpdatedAt: {
                        locationName: 'updatedAt',
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {
                  locationName: 'nextToken'
                }
              }
            }
          },
          ListDetectors: {
            http: {
              method: 'GET',
              requestUri: '/detector',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['DetectorIds'],
              members: {
                DetectorIds: {
                  locationName: 'detectorIds',
                  type: 'list',
                  member: {}
                },
                NextToken: {
                  locationName: 'nextToken'
                }
              }
            }
          },
          ListFilters: {
            http: {
              method: 'GET',
              requestUri: '/detector/{detectorId}/filter',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['DetectorId'],
              members: {
                DetectorId: {
                  location: 'uri',
                  locationName: 'detectorId'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['FilterNames'],
              members: {
                FilterNames: {
                  locationName: 'filterNames',
                  type: 'list',
                  member: {}
                },
                NextToken: {
                  locationName: 'nextToken'
                }
              }
            }
          },
          ListFindings: {
            http: {
              requestUri: '/detector/{detectorId}/findings',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['DetectorId'],
              members: {
                DetectorId: {
                  location: 'uri',
                  locationName: 'detectorId'
                },
                FindingCriteria: {
                  shape: 'S16',
                  locationName: 'findingCriteria'
                },
                SortCriteria: {
                  shape: 'S2u',
                  locationName: 'sortCriteria'
                },
                MaxResults: {
                  locationName: 'maxResults',
                  type: 'integer'
                },
                NextToken: {
                  locationName: 'nextToken'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['FindingIds'],
              members: {
                FindingIds: {
                  shape: 'S8',
                  locationName: 'findingIds'
                },
                NextToken: {
                  locationName: 'nextToken'
                }
              }
            }
          },
          ListIPSets: {
            http: {
              method: 'GET',
              requestUri: '/detector/{detectorId}/ipset',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['DetectorId'],
              members: {
                DetectorId: {
                  location: 'uri',
                  locationName: 'detectorId'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['IpSetIds'],
              members: {
                IpSetIds: {
                  locationName: 'ipSetIds',
                  type: 'list',
                  member: {}
                },
                NextToken: {
                  locationName: 'nextToken'
                }
              }
            }
          },
          ListInvitations: {
            http: {
              method: 'GET',
              requestUri: '/invitation',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Invitations: {
                  locationName: 'invitations',
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      AccountId: {
                        locationName: 'accountId'
                      },
                      InvitationId: {
                        locationName: 'invitationId'
                      },
                      RelationshipStatus: {
                        locationName: 'relationshipStatus'
                      },
                      InvitedAt: {
                        locationName: 'invitedAt'
                      }
                    }
                  }
                },
                NextToken: {
                  locationName: 'nextToken'
                }
              }
            }
          },
          ListMembers: {
            http: {
              method: 'GET',
              requestUri: '/detector/{detectorId}/member',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['DetectorId'],
              members: {
                DetectorId: {
                  location: 'uri',
                  locationName: 'detectorId'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                },
                OnlyAssociated: {
                  location: 'querystring',
                  locationName: 'onlyAssociated'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Members: {
                  shape: 'S9a',
                  locationName: 'members'
                },
                NextToken: {
                  locationName: 'nextToken'
                }
              }
            }
          },
          ListOrganizationAdminAccounts: {
            http: {
              method: 'GET',
              requestUri: '/admin',
              responseCode: 200
            },
            input: {
              type: 'structure',
              members: {
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                AdminAccounts: {
                  locationName: 'adminAccounts',
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      AdminAccountId: {
                        locationName: 'adminAccountId'
                      },
                      AdminStatus: {
                        locationName: 'adminStatus'
                      }
                    }
                  }
                },
                NextToken: {
                  locationName: 'nextToken'
                }
              }
            }
          },
          ListPublishingDestinations: {
            http: {
              method: 'GET',
              requestUri: '/detector/{detectorId}/publishingDestination',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['DetectorId'],
              members: {
                DetectorId: {
                  location: 'uri',
                  locationName: 'detectorId'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Destinations'],
              members: {
                Destinations: {
                  locationName: 'destinations',
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['DestinationId', 'DestinationType', 'Status'],
                    members: {
                      DestinationId: {
                        locationName: 'destinationId'
                      },
                      DestinationType: {
                        locationName: 'destinationType'
                      },
                      Status: {
                        locationName: 'status'
                      }
                    }
                  }
                },
                NextToken: {
                  locationName: 'nextToken'
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
              required: ['ResourceArn'],
              members: {
                ResourceArn: {
                  location: 'uri',
                  locationName: 'resourceArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Tags: {
                  shape: 'Sl',
                  locationName: 'tags'
                }
              }
            }
          },
          ListThreatIntelSets: {
            http: {
              method: 'GET',
              requestUri: '/detector/{detectorId}/threatintelset',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['DetectorId'],
              members: {
                DetectorId: {
                  location: 'uri',
                  locationName: 'detectorId'
                },
                MaxResults: {
                  location: 'querystring',
                  locationName: 'maxResults',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'nextToken'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['ThreatIntelSetIds'],
              members: {
                ThreatIntelSetIds: {
                  locationName: 'threatIntelSetIds',
                  type: 'list',
                  member: {}
                },
                NextToken: {
                  locationName: 'nextToken'
                }
              }
            }
          },
          StartMalwareScan: {
            http: {
              requestUri: '/malware-scan/start',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['ResourceArn'],
              members: {
                ResourceArn: {
                  locationName: 'resourceArn'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ScanId: {
                  locationName: 'scanId'
                }
              }
            }
          },
          StartMonitoringMembers: {
            http: {
              requestUri: '/detector/{detectorId}/member/start',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['DetectorId', 'AccountIds'],
              members: {
                DetectorId: {
                  location: 'uri',
                  locationName: 'detectorId'
                },
                AccountIds: {
                  shape: 'S25',
                  locationName: 'accountIds'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['UnprocessedAccounts'],
              members: {
                UnprocessedAccounts: {
                  shape: 'S1r',
                  locationName: 'unprocessedAccounts'
                }
              }
            }
          },
          StopMonitoringMembers: {
            http: {
              requestUri: '/detector/{detectorId}/member/stop',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['DetectorId', 'AccountIds'],
              members: {
                DetectorId: {
                  location: 'uri',
                  locationName: 'detectorId'
                },
                AccountIds: {
                  shape: 'S25',
                  locationName: 'accountIds'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['UnprocessedAccounts'],
              members: {
                UnprocessedAccounts: {
                  shape: 'S1r',
                  locationName: 'unprocessedAccounts'
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
              required: ['ResourceArn', 'Tags'],
              members: {
                ResourceArn: {
                  location: 'uri',
                  locationName: 'resourceArn'
                },
                Tags: {
                  shape: 'Sl',
                  locationName: 'tags'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UnarchiveFindings: {
            http: {
              requestUri: '/detector/{detectorId}/findings/unarchive',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['DetectorId', 'FindingIds'],
              members: {
                DetectorId: {
                  location: 'uri',
                  locationName: 'detectorId'
                },
                FindingIds: {
                  shape: 'S8',
                  locationName: 'findingIds'
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
              required: ['ResourceArn', 'TagKeys'],
              members: {
                ResourceArn: {
                  location: 'uri',
                  locationName: 'resourceArn'
                },
                TagKeys: {
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
          UpdateDetector: {
            http: {
              requestUri: '/detector/{detectorId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['DetectorId'],
              members: {
                DetectorId: {
                  location: 'uri',
                  locationName: 'detectorId'
                },
                Enable: {
                  locationName: 'enable',
                  type: 'boolean'
                },
                FindingPublishingFrequency: {
                  locationName: 'findingPublishingFrequency'
                },
                DataSources: {
                  shape: 'Sf',
                  deprecated: true,
                  deprecatedMessage: 'This parameter is deprecated, use Features instead',
                  locationName: 'dataSources'
                },
                Features: {
                  shape: 'So',
                  locationName: 'features'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateFilter: {
            http: {
              requestUri: '/detector/{detectorId}/filter/{filterName}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['DetectorId', 'FilterName'],
              members: {
                DetectorId: {
                  location: 'uri',
                  locationName: 'detectorId'
                },
                FilterName: {
                  location: 'uri',
                  locationName: 'filterName'
                },
                Description: {
                  locationName: 'description'
                },
                Action: {
                  locationName: 'action'
                },
                Rank: {
                  locationName: 'rank',
                  type: 'integer'
                },
                FindingCriteria: {
                  shape: 'S16',
                  locationName: 'findingCriteria'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Name'],
              members: {
                Name: {
                  locationName: 'name'
                }
              }
            }
          },
          UpdateFindingsFeedback: {
            http: {
              requestUri: '/detector/{detectorId}/findings/feedback',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['DetectorId', 'FindingIds', 'Feedback'],
              members: {
                DetectorId: {
                  location: 'uri',
                  locationName: 'detectorId'
                },
                FindingIds: {
                  shape: 'S8',
                  locationName: 'findingIds'
                },
                Feedback: {
                  locationName: 'feedback'
                },
                Comments: {
                  locationName: 'comments'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateIPSet: {
            http: {
              requestUri: '/detector/{detectorId}/ipset/{ipSetId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['DetectorId', 'IpSetId'],
              members: {
                DetectorId: {
                  location: 'uri',
                  locationName: 'detectorId'
                },
                IpSetId: {
                  location: 'uri',
                  locationName: 'ipSetId'
                },
                Name: {
                  locationName: 'name'
                },
                Location: {
                  locationName: 'location'
                },
                Activate: {
                  locationName: 'activate',
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateMalwareScanSettings: {
            http: {
              requestUri: '/detector/{detectorId}/malware-scan-settings',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['DetectorId'],
              members: {
                DetectorId: {
                  location: 'uri',
                  locationName: 'detectorId'
                },
                ScanResourceCriteria: {
                  shape: 'S8q',
                  locationName: 'scanResourceCriteria'
                },
                EbsSnapshotPreservation: {
                  locationName: 'ebsSnapshotPreservation'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateMemberDetectors: {
            http: {
              requestUri: '/detector/{detectorId}/member/detector/update',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['DetectorId', 'AccountIds'],
              members: {
                DetectorId: {
                  location: 'uri',
                  locationName: 'detectorId'
                },
                AccountIds: {
                  shape: 'S25',
                  locationName: 'accountIds'
                },
                DataSources: {
                  shape: 'Sf',
                  deprecated: true,
                  deprecatedMessage: 'This parameter is deprecated, use Features instead',
                  locationName: 'dataSources'
                },
                Features: {
                  locationName: 'features',
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Name: {
                        locationName: 'name'
                      },
                      Status: {
                        locationName: 'status'
                      },
                      AdditionalConfiguration: {
                        locationName: 'additionalConfiguration',
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            Name: {
                              locationName: 'name'
                            },
                            Status: {
                              locationName: 'status'
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
              required: ['UnprocessedAccounts'],
              members: {
                UnprocessedAccounts: {
                  shape: 'S1r',
                  locationName: 'unprocessedAccounts'
                }
              }
            }
          },
          UpdateOrganizationConfiguration: {
            http: {
              requestUri: '/detector/{detectorId}/admin',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['DetectorId'],
              members: {
                DetectorId: {
                  location: 'uri',
                  locationName: 'detectorId'
                },
                AutoEnable: {
                  deprecated: true,
                  deprecatedMessage: 'This field is deprecated, use AutoEnableOrganizationMembers instead',
                  locationName: 'autoEnable',
                  type: 'boolean'
                },
                DataSources: {
                  deprecated: true,
                  deprecatedMessage: 'This parameter is deprecated, use Features instead',
                  locationName: 'dataSources',
                  type: 'structure',
                  members: {
                    S3Logs: {
                      locationName: 's3Logs',
                      type: 'structure',
                      required: ['AutoEnable'],
                      members: {
                        AutoEnable: {
                          locationName: 'autoEnable',
                          type: 'boolean'
                        }
                      }
                    },
                    Kubernetes: {
                      locationName: 'kubernetes',
                      type: 'structure',
                      required: ['AuditLogs'],
                      members: {
                        AuditLogs: {
                          locationName: 'auditLogs',
                          type: 'structure',
                          required: ['AutoEnable'],
                          members: {
                            AutoEnable: {
                              locationName: 'autoEnable',
                              type: 'boolean'
                            }
                          }
                        }
                      }
                    },
                    MalwareProtection: {
                      locationName: 'malwareProtection',
                      type: 'structure',
                      members: {
                        ScanEc2InstanceWithFindings: {
                          locationName: 'scanEc2InstanceWithFindings',
                          type: 'structure',
                          members: {
                            EbsVolumes: {
                              locationName: 'ebsVolumes',
                              type: 'structure',
                              members: {
                                AutoEnable: {
                                  locationName: 'autoEnable',
                                  type: 'boolean'
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                Features: {
                  locationName: 'features',
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Name: {
                        locationName: 'name'
                      },
                      AutoEnable: {
                        locationName: 'autoEnable'
                      },
                      AdditionalConfiguration: {
                        locationName: 'additionalConfiguration',
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            Name: {
                              locationName: 'name'
                            },
                            AutoEnable: {
                              locationName: 'autoEnable'
                            }
                          }
                        }
                      }
                    }
                  }
                },
                AutoEnableOrganizationMembers: {
                  locationName: 'autoEnableOrganizationMembers'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdatePublishingDestination: {
            http: {
              requestUri: '/detector/{detectorId}/publishingDestination/{destinationId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['DetectorId', 'DestinationId'],
              members: {
                DetectorId: {
                  location: 'uri',
                  locationName: 'detectorId'
                },
                DestinationId: {
                  location: 'uri',
                  locationName: 'destinationId'
                },
                DestinationProperties: {
                  shape: 'S1v',
                  locationName: 'destinationProperties'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateThreatIntelSet: {
            http: {
              requestUri: '/detector/{detectorId}/threatintelset/{threatIntelSetId}',
              responseCode: 200
            },
            input: {
              type: 'structure',
              required: ['DetectorId', 'ThreatIntelSetId'],
              members: {
                DetectorId: {
                  location: 'uri',
                  locationName: 'detectorId'
                },
                ThreatIntelSetId: {
                  location: 'uri',
                  locationName: 'threatIntelSetId'
                },
                Name: {
                  locationName: 'name'
                },
                Location: {
                  locationName: 'location'
                },
                Activate: {
                  locationName: 'activate',
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          }
        },
        shapes: {
          S8: {
            type: 'list',
            member: {}
          },
          Sf: {
            type: 'structure',
            members: {
              S3Logs: {
                locationName: 's3Logs',
                type: 'structure',
                required: ['Enable'],
                members: {
                  Enable: {
                    locationName: 'enable',
                    type: 'boolean'
                  }
                }
              },
              Kubernetes: {
                locationName: 'kubernetes',
                type: 'structure',
                required: ['AuditLogs'],
                members: {
                  AuditLogs: {
                    locationName: 'auditLogs',
                    type: 'structure',
                    required: ['Enable'],
                    members: {
                      Enable: {
                        locationName: 'enable',
                        type: 'boolean'
                      }
                    }
                  }
                }
              },
              MalwareProtection: {
                locationName: 'malwareProtection',
                type: 'structure',
                members: {
                  ScanEc2InstanceWithFindings: {
                    locationName: 'scanEc2InstanceWithFindings',
                    type: 'structure',
                    members: {
                      EbsVolumes: {
                        locationName: 'ebsVolumes',
                        type: 'boolean'
                      }
                    }
                  }
                }
              }
            }
          },
          Sl: {
            type: 'map',
            key: {},
            value: {}
          },
          So: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Name: {
                  locationName: 'name'
                },
                Status: {
                  locationName: 'status'
                },
                AdditionalConfiguration: {
                  locationName: 'additionalConfiguration',
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Name: {
                        locationName: 'name'
                      },
                      Status: {
                        locationName: 'status'
                      }
                    }
                  }
                }
              }
            }
          },
          Sx: {
            type: 'structure',
            members: {
              ScanEc2InstanceWithFindings: {
                locationName: 'scanEc2InstanceWithFindings',
                type: 'structure',
                members: {
                  EbsVolumes: {
                    locationName: 'ebsVolumes',
                    type: 'structure',
                    members: {
                      Status: {
                        locationName: 'status'
                      },
                      Reason: {
                        locationName: 'reason'
                      }
                    }
                  }
                }
              },
              ServiceRole: {
                locationName: 'serviceRole'
              }
            }
          },
          S16: {
            type: 'structure',
            members: {
              Criterion: {
                locationName: 'criterion',
                type: 'map',
                key: {},
                value: {
                  type: 'structure',
                  members: {
                    Eq: {
                      deprecated: true,
                      locationName: 'eq',
                      type: 'list',
                      member: {}
                    },
                    Neq: {
                      deprecated: true,
                      locationName: 'neq',
                      type: 'list',
                      member: {}
                    },
                    Gt: {
                      deprecated: true,
                      locationName: 'gt',
                      type: 'integer'
                    },
                    Gte: {
                      deprecated: true,
                      locationName: 'gte',
                      type: 'integer'
                    },
                    Lt: {
                      deprecated: true,
                      locationName: 'lt',
                      type: 'integer'
                    },
                    Lte: {
                      deprecated: true,
                      locationName: 'lte',
                      type: 'integer'
                    },
                    Equals: {
                      shape: 'S1c',
                      locationName: 'equals'
                    },
                    NotEquals: {
                      shape: 'S1d',
                      locationName: 'notEquals'
                    },
                    GreaterThan: {
                      locationName: 'greaterThan',
                      type: 'long'
                    },
                    GreaterThanOrEqual: {
                      locationName: 'greaterThanOrEqual',
                      type: 'long'
                    },
                    LessThan: {
                      locationName: 'lessThan',
                      type: 'long'
                    },
                    LessThanOrEqual: {
                      locationName: 'lessThanOrEqual',
                      type: 'long'
                    }
                  }
                }
              }
            }
          },
          S1c: {
            type: 'list',
            member: {}
          },
          S1d: {
            type: 'list',
            member: {}
          },
          S1p: {
            type: 'string',
            sensitive: true
          },
          S1r: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['AccountId', 'Result'],
              members: {
                AccountId: {
                  locationName: 'accountId'
                },
                Result: {
                  locationName: 'result'
                }
              }
            }
          },
          S1v: {
            type: 'structure',
            members: {
              DestinationArn: {
                locationName: 'destinationArn'
              },
              KmsKeyArn: {
                locationName: 'kmsKeyArn'
              }
            }
          },
          S25: {
            type: 'list',
            member: {}
          },
          S2u: {
            type: 'structure',
            members: {
              AttributeName: {
                locationName: 'attributeName'
              },
              OrderBy: {
                locationName: 'orderBy'
              }
            }
          },
          S37: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                VolumeArn: {
                  locationName: 'volumeArn'
                },
                VolumeType: {
                  locationName: 'volumeType'
                },
                DeviceName: {
                  locationName: 'deviceName'
                },
                VolumeSizeInGB: {
                  locationName: 'volumeSizeInGB',
                  type: 'integer'
                },
                EncryptionType: {
                  locationName: 'encryptionType'
                },
                SnapshotArn: {
                  locationName: 'snapshotArn'
                },
                KmsKeyArn: {
                  locationName: 'kmsKeyArn'
                }
              }
            }
          },
          S49: {
            type: 'structure',
            members: {
              FilterCriterion: {
                locationName: 'filterCriterion',
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    CriterionKey: {
                      locationName: 'criterionKey'
                    },
                    FilterCondition: {
                      locationName: 'filterCondition',
                      type: 'structure',
                      members: {
                        Equals: {
                          shape: 'S1c',
                          locationName: 'equals'
                        },
                        NotEquals: {
                          shape: 'S1d',
                          locationName: 'notEquals'
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          S4p: {
            type: 'structure',
            required: ['CloudTrail', 'DNSLogs', 'FlowLogs', 'S3Logs'],
            members: {
              CloudTrail: {
                locationName: 'cloudTrail',
                type: 'structure',
                required: ['Status'],
                members: {
                  Status: {
                    locationName: 'status'
                  }
                }
              },
              DNSLogs: {
                locationName: 'dnsLogs',
                type: 'structure',
                required: ['Status'],
                members: {
                  Status: {
                    locationName: 'status'
                  }
                }
              },
              FlowLogs: {
                locationName: 'flowLogs',
                type: 'structure',
                required: ['Status'],
                members: {
                  Status: {
                    locationName: 'status'
                  }
                }
              },
              S3Logs: {
                locationName: 's3Logs',
                type: 'structure',
                required: ['Status'],
                members: {
                  Status: {
                    locationName: 'status'
                  }
                }
              },
              Kubernetes: {
                locationName: 'kubernetes',
                type: 'structure',
                required: ['AuditLogs'],
                members: {
                  AuditLogs: {
                    locationName: 'auditLogs',
                    type: 'structure',
                    required: ['Status'],
                    members: {
                      Status: {
                        locationName: 'status'
                      }
                    }
                  }
                }
              },
              MalwareProtection: {
                shape: 'Sx',
                locationName: 'malwareProtection'
              }
            }
          },
          S5d: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Key: {
                  locationName: 'key'
                },
                Value: {
                  locationName: 'value'
                }
              }
            }
          },
          S5l: {
            type: 'structure',
            members: {
              IgnorePublicAcls: {
                locationName: 'ignorePublicAcls',
                type: 'boolean'
              },
              RestrictPublicBuckets: {
                locationName: 'restrictPublicBuckets',
                type: 'boolean'
              },
              BlockPublicAcls: {
                locationName: 'blockPublicAcls',
                type: 'boolean'
              },
              BlockPublicPolicy: {
                locationName: 'blockPublicPolicy',
                type: 'boolean'
              }
            }
          },
          S5s: {
            type: 'string',
            sensitive: true
          },
          S5v: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                GroupId: {
                  locationName: 'groupId'
                },
                GroupName: {
                  locationName: 'groupName'
                }
              }
            }
          },
          S62: {
            type: 'list',
            member: {}
          },
          S66: {
            type: 'list',
            member: {
              shape: 'S67'
            }
          },
          S67: {
            type: 'structure',
            members: {
              ContainerRuntime: {
                locationName: 'containerRuntime'
              },
              Id: {
                locationName: 'id'
              },
              Name: {
                locationName: 'name'
              },
              Image: {
                locationName: 'image'
              },
              ImagePrefix: {
                locationName: 'imagePrefix'
              },
              VolumeMounts: {
                locationName: 'volumeMounts',
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    Name: {
                      locationName: 'name'
                    },
                    MountPath: {
                      locationName: 'mountPath'
                    }
                  }
                }
              },
              SecurityContext: {
                locationName: 'securityContext',
                type: 'structure',
                members: {
                  Privileged: {
                    locationName: 'privileged',
                    type: 'boolean'
                  },
                  AllowPrivilegeEscalation: {
                    locationName: 'allowPrivilegeEscalation',
                    type: 'boolean'
                  }
                }
              }
            }
          },
          S6b: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Name: {
                  locationName: 'name'
                },
                HostPath: {
                  locationName: 'hostPath',
                  type: 'structure',
                  members: {
                    Path: {
                      locationName: 'path'
                    }
                  }
                }
              }
            }
          },
          S6q: {
            type: 'structure',
            members: {
              City: {
                locationName: 'city',
                type: 'structure',
                members: {
                  CityName: {
                    locationName: 'cityName'
                  }
                }
              },
              Country: {
                locationName: 'country',
                type: 'structure',
                members: {
                  CountryCode: {
                    locationName: 'countryCode'
                  },
                  CountryName: {
                    locationName: 'countryName'
                  }
                }
              },
              GeoLocation: {
                locationName: 'geoLocation',
                type: 'structure',
                members: {
                  Lat: {
                    locationName: 'lat',
                    type: 'double'
                  },
                  Lon: {
                    locationName: 'lon',
                    type: 'double'
                  }
                }
              },
              IpAddressV4: {
                shape: 'S5s',
                locationName: 'ipAddressV4'
              },
              IpAddressV6: {
                shape: 'S5s',
                locationName: 'ipAddressV6'
              },
              Organization: {
                locationName: 'organization',
                type: 'structure',
                members: {
                  Asn: {
                    locationName: 'asn'
                  },
                  AsnOrg: {
                    locationName: 'asnOrg'
                  },
                  Isp: {
                    locationName: 'isp'
                  },
                  Org: {
                    locationName: 'org'
                  }
                }
              }
            }
          },
          S6z: {
            type: 'structure',
            members: {
              Port: {
                locationName: 'port',
                type: 'integer'
              },
              PortName: {
                locationName: 'portName'
              }
            }
          },
          S70: {
            type: 'structure',
            members: {
              IpAddressV4: {
                shape: 'S5s',
                locationName: 'ipAddressV4'
              },
              IpAddressV6: {
                shape: 'S5s',
                locationName: 'ipAddressV6'
              }
            }
          },
          S7u: {
            type: 'structure',
            members: {
              Name: {
                locationName: 'name'
              },
              ExecutablePath: {
                locationName: 'executablePath'
              },
              ExecutableSha256: {
                locationName: 'executableSha256'
              },
              NamespacePid: {
                locationName: 'namespacePid',
                type: 'integer'
              },
              Pwd: {
                locationName: 'pwd'
              },
              Pid: {
                locationName: 'pid',
                type: 'integer'
              },
              StartTime: {
                locationName: 'startTime',
                type: 'timestamp'
              },
              Uuid: {
                locationName: 'uuid'
              },
              ParentUuid: {
                locationName: 'parentUuid'
              },
              User: {
                locationName: 'user'
              },
              UserId: {
                locationName: 'userId',
                type: 'integer'
              },
              Euid: {
                locationName: 'euid',
                type: 'integer'
              },
              Lineage: {
                locationName: 'lineage',
                type: 'list',
                member: {
                  type: 'structure',
                  members: {
                    StartTime: {
                      locationName: 'startTime',
                      type: 'timestamp'
                    },
                    NamespacePid: {
                      locationName: 'namespacePid',
                      type: 'integer'
                    },
                    UserId: {
                      locationName: 'userId',
                      type: 'integer'
                    },
                    Name: {
                      locationName: 'name'
                    },
                    Pid: {
                      locationName: 'pid',
                      type: 'integer'
                    },
                    Uuid: {
                      locationName: 'uuid'
                    },
                    ExecutablePath: {
                      locationName: 'executablePath'
                    },
                    Euid: {
                      locationName: 'euid',
                      type: 'integer'
                    },
                    ParentUuid: {
                      locationName: 'parentUuid'
                    }
                  }
                }
              }
            }
          },
          S85: {
            type: 'structure',
            members: {
              ProfileType: {
                locationName: 'profileType'
              },
              ProfileSubtype: {
                locationName: 'profileSubtype'
              },
              Observations: {
                locationName: 'observations',
                type: 'structure',
                members: {
                  Text: {
                    locationName: 'text',
                    type: 'list',
                    member: {}
                  }
                }
              }
            }
          },
          S8q: {
            type: 'structure',
            members: {
              Include: {
                shape: 'S8r',
                locationName: 'include'
              },
              Exclude: {
                shape: 'S8r',
                locationName: 'exclude'
              }
            }
          },
          S8r: {
            type: 'map',
            key: {},
            value: {
              type: 'structure',
              required: ['MapEquals'],
              members: {
                MapEquals: {
                  locationName: 'mapEquals',
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Key'],
                    members: {
                      Key: {
                        locationName: 'key'
                      },
                      Value: {
                        locationName: 'value'
                      }
                    }
                  }
                }
              }
            }
          },
          S9a: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['AccountId', 'MasterId', 'Email', 'RelationshipStatus', 'UpdatedAt'],
              members: {
                AccountId: {
                  locationName: 'accountId'
                },
                DetectorId: {
                  locationName: 'detectorId'
                },
                MasterId: {
                  locationName: 'masterId'
                },
                Email: {
                  shape: 'S1p',
                  locationName: 'email'
                },
                RelationshipStatus: {
                  locationName: 'relationshipStatus'
                },
                InvitedAt: {
                  locationName: 'invitedAt'
                },
                UpdatedAt: {
                  locationName: 'updatedAt'
                },
                AdministratorId: {
                  locationName: 'administratorId'
                }
              }
            }
          },
          S9o: {
            type: 'structure',
            members: {
              FreeTrialDaysRemaining: {
                locationName: 'freeTrialDaysRemaining',
                type: 'integer'
              }
            }
          },
          Sa9: {
            type: 'structure',
            members: {
              Amount: {
                locationName: 'amount'
              },
              Unit: {
                locationName: 'unit'
              }
            }
          },
          Sag: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Resource: {
                  locationName: 'resource'
                },
                Total: {
                  shape: 'Sa9',
                  locationName: 'total'
                }
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=34549727e521283004aef1761d50a23bb84787ec.js.map