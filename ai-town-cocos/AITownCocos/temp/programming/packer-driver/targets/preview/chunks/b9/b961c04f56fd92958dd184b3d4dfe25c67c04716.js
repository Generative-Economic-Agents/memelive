System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2019-09-27',
          endpointPrefix: 'email',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          protocols: ['rest-json'],
          serviceAbbreviation: 'Amazon SES V2',
          serviceFullName: 'Amazon Simple Email Service',
          serviceId: 'SESv2',
          signatureVersion: 'v4',
          signingName: 'ses',
          uid: 'sesv2-2019-09-27'
        },
        operations: {
          BatchGetMetricData: {
            http: {
              requestUri: '/v2/email/metrics/batch'
            },
            input: {
              type: 'structure',
              required: ['Queries'],
              members: {
                Queries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Id', 'Namespace', 'Metric', 'StartDate', 'EndDate'],
                    members: {
                      Id: {},
                      Namespace: {},
                      Metric: {},
                      Dimensions: {
                        type: 'map',
                        key: {},
                        value: {}
                      },
                      StartDate: {
                        type: 'timestamp'
                      },
                      EndDate: {
                        type: 'timestamp'
                      }
                    }
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Results: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Id: {},
                      Timestamps: {
                        type: 'list',
                        member: {
                          type: 'timestamp'
                        }
                      },
                      Values: {
                        type: 'list',
                        member: {
                          type: 'long'
                        }
                      }
                    }
                  }
                },
                Errors: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Id: {},
                      Code: {},
                      Message: {}
                    }
                  }
                }
              }
            }
          },
          CancelExportJob: {
            http: {
              method: 'PUT',
              requestUri: '/v2/email/export-jobs/{JobId}/cancel'
            },
            input: {
              type: 'structure',
              required: ['JobId'],
              members: {
                JobId: {
                  location: 'uri',
                  locationName: 'JobId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          CreateConfigurationSet: {
            http: {
              requestUri: '/v2/email/configuration-sets'
            },
            input: {
              type: 'structure',
              required: ['ConfigurationSetName'],
              members: {
                ConfigurationSetName: {},
                TrackingOptions: {
                  shape: 'Sq'
                },
                DeliveryOptions: {
                  shape: 'Ss'
                },
                ReputationOptions: {
                  shape: 'Sv'
                },
                SendingOptions: {
                  shape: 'Sy'
                },
                Tags: {
                  shape: 'Sz'
                },
                SuppressionOptions: {
                  shape: 'S13'
                },
                VdmOptions: {
                  shape: 'S16'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          CreateConfigurationSetEventDestination: {
            http: {
              requestUri: '/v2/email/configuration-sets/{ConfigurationSetName}/event-destinations'
            },
            input: {
              type: 'structure',
              required: ['ConfigurationSetName', 'EventDestinationName', 'EventDestination'],
              members: {
                ConfigurationSetName: {
                  location: 'uri',
                  locationName: 'ConfigurationSetName'
                },
                EventDestinationName: {},
                EventDestination: {
                  shape: 'S1d'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          CreateContact: {
            http: {
              requestUri: '/v2/email/contact-lists/{ContactListName}/contacts'
            },
            input: {
              type: 'structure',
              required: ['ContactListName', 'EmailAddress'],
              members: {
                ContactListName: {
                  location: 'uri',
                  locationName: 'ContactListName'
                },
                EmailAddress: {},
                TopicPreferences: {
                  shape: 'S1u'
                },
                UnsubscribeAll: {
                  type: 'boolean'
                },
                AttributesData: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          CreateContactList: {
            http: {
              requestUri: '/v2/email/contact-lists'
            },
            input: {
              type: 'structure',
              required: ['ContactListName'],
              members: {
                ContactListName: {},
                Topics: {
                  shape: 'S22'
                },
                Description: {},
                Tags: {
                  shape: 'Sz'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          CreateCustomVerificationEmailTemplate: {
            http: {
              requestUri: '/v2/email/custom-verification-email-templates'
            },
            input: {
              type: 'structure',
              required: ['TemplateName', 'FromEmailAddress', 'TemplateSubject', 'TemplateContent', 'SuccessRedirectionURL', 'FailureRedirectionURL'],
              members: {
                TemplateName: {},
                FromEmailAddress: {},
                TemplateSubject: {},
                TemplateContent: {},
                SuccessRedirectionURL: {},
                FailureRedirectionURL: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          CreateDedicatedIpPool: {
            http: {
              requestUri: '/v2/email/dedicated-ip-pools'
            },
            input: {
              type: 'structure',
              required: ['PoolName'],
              members: {
                PoolName: {},
                Tags: {
                  shape: 'Sz'
                },
                ScalingMode: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          CreateDeliverabilityTestReport: {
            http: {
              requestUri: '/v2/email/deliverability-dashboard/test'
            },
            input: {
              type: 'structure',
              required: ['FromEmailAddress', 'Content'],
              members: {
                ReportName: {},
                FromEmailAddress: {},
                Content: {
                  shape: 'S2j'
                },
                Tags: {
                  shape: 'Sz'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['ReportId', 'DeliverabilityTestStatus'],
              members: {
                ReportId: {},
                DeliverabilityTestStatus: {}
              }
            }
          },
          CreateEmailIdentity: {
            http: {
              requestUri: '/v2/email/identities'
            },
            input: {
              type: 'structure',
              required: ['EmailIdentity'],
              members: {
                EmailIdentity: {},
                Tags: {
                  shape: 'Sz'
                },
                DkimSigningAttributes: {
                  shape: 'S32'
                },
                ConfigurationSetName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                IdentityType: {},
                VerifiedForSendingStatus: {
                  type: 'boolean'
                },
                DkimAttributes: {
                  shape: 'S38'
                }
              }
            }
          },
          CreateEmailIdentityPolicy: {
            http: {
              requestUri: '/v2/email/identities/{EmailIdentity}/policies/{PolicyName}'
            },
            input: {
              type: 'structure',
              required: ['EmailIdentity', 'PolicyName', 'Policy'],
              members: {
                EmailIdentity: {
                  location: 'uri',
                  locationName: 'EmailIdentity'
                },
                PolicyName: {
                  location: 'uri',
                  locationName: 'PolicyName'
                },
                Policy: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          CreateEmailTemplate: {
            http: {
              requestUri: '/v2/email/templates'
            },
            input: {
              type: 'structure',
              required: ['TemplateName', 'TemplateContent'],
              members: {
                TemplateName: {},
                TemplateContent: {
                  shape: 'S3i'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          CreateExportJob: {
            http: {
              requestUri: '/v2/email/export-jobs'
            },
            input: {
              type: 'structure',
              required: ['ExportDataSource', 'ExportDestination'],
              members: {
                ExportDataSource: {
                  shape: 'S3n'
                },
                ExportDestination: {
                  shape: 'S47'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                JobId: {}
              }
            }
          },
          CreateImportJob: {
            http: {
              requestUri: '/v2/email/import-jobs'
            },
            input: {
              type: 'structure',
              required: ['ImportDestination', 'ImportDataSource'],
              members: {
                ImportDestination: {
                  shape: 'S4c'
                },
                ImportDataSource: {
                  shape: 'S4h'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                JobId: {}
              }
            }
          },
          DeleteConfigurationSet: {
            http: {
              method: 'DELETE',
              requestUri: '/v2/email/configuration-sets/{ConfigurationSetName}'
            },
            input: {
              type: 'structure',
              required: ['ConfigurationSetName'],
              members: {
                ConfigurationSetName: {
                  location: 'uri',
                  locationName: 'ConfigurationSetName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteConfigurationSetEventDestination: {
            http: {
              method: 'DELETE',
              requestUri: '/v2/email/configuration-sets/{ConfigurationSetName}/event-destinations/{EventDestinationName}'
            },
            input: {
              type: 'structure',
              required: ['ConfigurationSetName', 'EventDestinationName'],
              members: {
                ConfigurationSetName: {
                  location: 'uri',
                  locationName: 'ConfigurationSetName'
                },
                EventDestinationName: {
                  location: 'uri',
                  locationName: 'EventDestinationName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteContact: {
            http: {
              method: 'DELETE',
              requestUri: '/v2/email/contact-lists/{ContactListName}/contacts/{EmailAddress}'
            },
            input: {
              type: 'structure',
              required: ['ContactListName', 'EmailAddress'],
              members: {
                ContactListName: {
                  location: 'uri',
                  locationName: 'ContactListName'
                },
                EmailAddress: {
                  location: 'uri',
                  locationName: 'EmailAddress'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteContactList: {
            http: {
              method: 'DELETE',
              requestUri: '/v2/email/contact-lists/{ContactListName}'
            },
            input: {
              type: 'structure',
              required: ['ContactListName'],
              members: {
                ContactListName: {
                  location: 'uri',
                  locationName: 'ContactListName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteCustomVerificationEmailTemplate: {
            http: {
              method: 'DELETE',
              requestUri: '/v2/email/custom-verification-email-templates/{TemplateName}'
            },
            input: {
              type: 'structure',
              required: ['TemplateName'],
              members: {
                TemplateName: {
                  location: 'uri',
                  locationName: 'TemplateName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteDedicatedIpPool: {
            http: {
              method: 'DELETE',
              requestUri: '/v2/email/dedicated-ip-pools/{PoolName}'
            },
            input: {
              type: 'structure',
              required: ['PoolName'],
              members: {
                PoolName: {
                  location: 'uri',
                  locationName: 'PoolName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteEmailIdentity: {
            http: {
              method: 'DELETE',
              requestUri: '/v2/email/identities/{EmailIdentity}'
            },
            input: {
              type: 'structure',
              required: ['EmailIdentity'],
              members: {
                EmailIdentity: {
                  location: 'uri',
                  locationName: 'EmailIdentity'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteEmailIdentityPolicy: {
            http: {
              method: 'DELETE',
              requestUri: '/v2/email/identities/{EmailIdentity}/policies/{PolicyName}'
            },
            input: {
              type: 'structure',
              required: ['EmailIdentity', 'PolicyName'],
              members: {
                EmailIdentity: {
                  location: 'uri',
                  locationName: 'EmailIdentity'
                },
                PolicyName: {
                  location: 'uri',
                  locationName: 'PolicyName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteEmailTemplate: {
            http: {
              method: 'DELETE',
              requestUri: '/v2/email/templates/{TemplateName}'
            },
            input: {
              type: 'structure',
              required: ['TemplateName'],
              members: {
                TemplateName: {
                  location: 'uri',
                  locationName: 'TemplateName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          DeleteSuppressedDestination: {
            http: {
              method: 'DELETE',
              requestUri: '/v2/email/suppression/addresses/{EmailAddress}'
            },
            input: {
              type: 'structure',
              required: ['EmailAddress'],
              members: {
                EmailAddress: {
                  location: 'uri',
                  locationName: 'EmailAddress'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          GetAccount: {
            http: {
              method: 'GET',
              requestUri: '/v2/email/account'
            },
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {
                DedicatedIpAutoWarmupEnabled: {
                  type: 'boolean'
                },
                EnforcementStatus: {},
                ProductionAccessEnabled: {
                  type: 'boolean'
                },
                SendQuota: {
                  type: 'structure',
                  members: {
                    Max24HourSend: {
                      type: 'double'
                    },
                    MaxSendRate: {
                      type: 'double'
                    },
                    SentLast24Hours: {
                      type: 'double'
                    }
                  }
                },
                SendingEnabled: {
                  type: 'boolean'
                },
                SuppressionAttributes: {
                  type: 'structure',
                  members: {
                    SuppressedReasons: {
                      shape: 'S14'
                    }
                  }
                },
                Details: {
                  type: 'structure',
                  members: {
                    MailType: {},
                    WebsiteURL: {
                      shape: 'S5d'
                    },
                    ContactLanguage: {},
                    UseCaseDescription: {
                      shape: 'S5f'
                    },
                    AdditionalContactEmailAddresses: {
                      shape: 'S5g'
                    },
                    ReviewDetails: {
                      type: 'structure',
                      members: {
                        Status: {},
                        CaseId: {}
                      }
                    }
                  }
                },
                VdmAttributes: {
                  shape: 'S5l'
                }
              }
            }
          },
          GetBlacklistReports: {
            http: {
              method: 'GET',
              requestUri: '/v2/email/deliverability-dashboard/blacklist-report'
            },
            input: {
              type: 'structure',
              required: ['BlacklistItemNames'],
              members: {
                BlacklistItemNames: {
                  location: 'querystring',
                  locationName: 'BlacklistItemNames',
                  type: 'list',
                  member: {}
                }
              }
            },
            output: {
              type: 'structure',
              required: ['BlacklistReport'],
              members: {
                BlacklistReport: {
                  type: 'map',
                  key: {},
                  value: {
                    type: 'list',
                    member: {
                      type: 'structure',
                      members: {
                        RblName: {},
                        ListingTime: {
                          type: 'timestamp'
                        },
                        Description: {}
                      }
                    }
                  }
                }
              }
            }
          },
          GetConfigurationSet: {
            http: {
              method: 'GET',
              requestUri: '/v2/email/configuration-sets/{ConfigurationSetName}'
            },
            input: {
              type: 'structure',
              required: ['ConfigurationSetName'],
              members: {
                ConfigurationSetName: {
                  location: 'uri',
                  locationName: 'ConfigurationSetName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ConfigurationSetName: {},
                TrackingOptions: {
                  shape: 'Sq'
                },
                DeliveryOptions: {
                  shape: 'Ss'
                },
                ReputationOptions: {
                  shape: 'Sv'
                },
                SendingOptions: {
                  shape: 'Sy'
                },
                Tags: {
                  shape: 'Sz'
                },
                SuppressionOptions: {
                  shape: 'S13'
                },
                VdmOptions: {
                  shape: 'S16'
                }
              }
            }
          },
          GetConfigurationSetEventDestinations: {
            http: {
              method: 'GET',
              requestUri: '/v2/email/configuration-sets/{ConfigurationSetName}/event-destinations'
            },
            input: {
              type: 'structure',
              required: ['ConfigurationSetName'],
              members: {
                ConfigurationSetName: {
                  location: 'uri',
                  locationName: 'ConfigurationSetName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                EventDestinations: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Name', 'MatchingEventTypes'],
                    members: {
                      Name: {},
                      Enabled: {
                        type: 'boolean'
                      },
                      MatchingEventTypes: {
                        shape: 'S1e'
                      },
                      KinesisFirehoseDestination: {
                        shape: 'S1g'
                      },
                      CloudWatchDestination: {
                        shape: 'S1i'
                      },
                      SnsDestination: {
                        shape: 'S1o'
                      },
                      PinpointDestination: {
                        shape: 'S1p'
                      }
                    }
                  }
                }
              }
            }
          },
          GetContact: {
            http: {
              method: 'GET',
              requestUri: '/v2/email/contact-lists/{ContactListName}/contacts/{EmailAddress}'
            },
            input: {
              type: 'structure',
              required: ['ContactListName', 'EmailAddress'],
              members: {
                ContactListName: {
                  location: 'uri',
                  locationName: 'ContactListName'
                },
                EmailAddress: {
                  location: 'uri',
                  locationName: 'EmailAddress'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ContactListName: {},
                EmailAddress: {},
                TopicPreferences: {
                  shape: 'S1u'
                },
                TopicDefaultPreferences: {
                  shape: 'S1u'
                },
                UnsubscribeAll: {
                  type: 'boolean'
                },
                AttributesData: {},
                CreatedTimestamp: {
                  type: 'timestamp'
                },
                LastUpdatedTimestamp: {
                  type: 'timestamp'
                }
              }
            }
          },
          GetContactList: {
            http: {
              method: 'GET',
              requestUri: '/v2/email/contact-lists/{ContactListName}'
            },
            input: {
              type: 'structure',
              required: ['ContactListName'],
              members: {
                ContactListName: {
                  location: 'uri',
                  locationName: 'ContactListName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ContactListName: {},
                Topics: {
                  shape: 'S22'
                },
                Description: {},
                CreatedTimestamp: {
                  type: 'timestamp'
                },
                LastUpdatedTimestamp: {
                  type: 'timestamp'
                },
                Tags: {
                  shape: 'Sz'
                }
              }
            }
          },
          GetCustomVerificationEmailTemplate: {
            http: {
              method: 'GET',
              requestUri: '/v2/email/custom-verification-email-templates/{TemplateName}'
            },
            input: {
              type: 'structure',
              required: ['TemplateName'],
              members: {
                TemplateName: {
                  location: 'uri',
                  locationName: 'TemplateName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                TemplateName: {},
                FromEmailAddress: {},
                TemplateSubject: {},
                TemplateContent: {},
                SuccessRedirectionURL: {},
                FailureRedirectionURL: {}
              }
            }
          },
          GetDedicatedIp: {
            http: {
              method: 'GET',
              requestUri: '/v2/email/dedicated-ips/{IP}'
            },
            input: {
              type: 'structure',
              required: ['Ip'],
              members: {
                Ip: {
                  location: 'uri',
                  locationName: 'IP'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                DedicatedIp: {
                  shape: 'S6c'
                }
              }
            }
          },
          GetDedicatedIpPool: {
            http: {
              method: 'GET',
              requestUri: '/v2/email/dedicated-ip-pools/{PoolName}'
            },
            input: {
              type: 'structure',
              required: ['PoolName'],
              members: {
                PoolName: {
                  location: 'uri',
                  locationName: 'PoolName'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                DedicatedIpPool: {
                  type: 'structure',
                  required: ['PoolName', 'ScalingMode'],
                  members: {
                    PoolName: {},
                    ScalingMode: {}
                  }
                }
              }
            }
          },
          GetDedicatedIps: {
            http: {
              method: 'GET',
              requestUri: '/v2/email/dedicated-ips'
            },
            input: {
              type: 'structure',
              members: {
                PoolName: {
                  location: 'querystring',
                  locationName: 'PoolName'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'NextToken'
                },
                PageSize: {
                  location: 'querystring',
                  locationName: 'PageSize',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                DedicatedIps: {
                  type: 'list',
                  member: {
                    shape: 'S6c'
                  }
                },
                NextToken: {}
              }
            }
          },
          GetDeliverabilityDashboardOptions: {
            http: {
              method: 'GET',
              requestUri: '/v2/email/deliverability-dashboard'
            },
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              required: ['DashboardEnabled'],
              members: {
                DashboardEnabled: {
                  type: 'boolean'
                },
                SubscriptionExpiryDate: {
                  type: 'timestamp'
                },
                AccountStatus: {},
                ActiveSubscribedDomains: {
                  shape: 'S6q'
                },
                PendingExpirationSubscribedDomains: {
                  shape: 'S6q'
                }
              }
            }
          },
          GetDeliverabilityTestReport: {
            http: {
              method: 'GET',
              requestUri: '/v2/email/deliverability-dashboard/test-reports/{ReportId}'
            },
            input: {
              type: 'structure',
              required: ['ReportId'],
              members: {
                ReportId: {
                  location: 'uri',
                  locationName: 'ReportId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['DeliverabilityTestReport', 'OverallPlacement', 'IspPlacements'],
              members: {
                DeliverabilityTestReport: {
                  shape: 'S6y'
                },
                OverallPlacement: {
                  shape: 'S70'
                },
                IspPlacements: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      IspName: {},
                      PlacementStatistics: {
                        shape: 'S70'
                      }
                    }
                  }
                },
                Message: {},
                Tags: {
                  shape: 'Sz'
                }
              }
            }
          },
          GetDomainDeliverabilityCampaign: {
            http: {
              method: 'GET',
              requestUri: '/v2/email/deliverability-dashboard/campaigns/{CampaignId}'
            },
            input: {
              type: 'structure',
              required: ['CampaignId'],
              members: {
                CampaignId: {
                  location: 'uri',
                  locationName: 'CampaignId'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['DomainDeliverabilityCampaign'],
              members: {
                DomainDeliverabilityCampaign: {
                  shape: 'S78'
                }
              }
            }
          },
          GetDomainStatisticsReport: {
            http: {
              method: 'GET',
              requestUri: '/v2/email/deliverability-dashboard/statistics-report/{Domain}'
            },
            input: {
              type: 'structure',
              required: ['Domain', 'StartDate', 'EndDate'],
              members: {
                Domain: {
                  location: 'uri',
                  locationName: 'Domain'
                },
                StartDate: {
                  location: 'querystring',
                  locationName: 'StartDate',
                  type: 'timestamp'
                },
                EndDate: {
                  location: 'querystring',
                  locationName: 'EndDate',
                  type: 'timestamp'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['OverallVolume', 'DailyVolumes'],
              members: {
                OverallVolume: {
                  type: 'structure',
                  members: {
                    VolumeStatistics: {
                      shape: 'S7i'
                    },
                    ReadRatePercent: {
                      type: 'double'
                    },
                    DomainIspPlacements: {
                      shape: 'S7j'
                    }
                  }
                },
                DailyVolumes: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      StartDate: {
                        type: 'timestamp'
                      },
                      VolumeStatistics: {
                        shape: 'S7i'
                      },
                      DomainIspPlacements: {
                        shape: 'S7j'
                      }
                    }
                  }
                }
              }
            }
          },
          GetEmailIdentity: {
            http: {
              method: 'GET',
              requestUri: '/v2/email/identities/{EmailIdentity}'
            },
            input: {
              type: 'structure',
              required: ['EmailIdentity'],
              members: {
                EmailIdentity: {
                  location: 'uri',
                  locationName: 'EmailIdentity'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                IdentityType: {},
                FeedbackForwardingStatus: {
                  type: 'boolean'
                },
                VerifiedForSendingStatus: {
                  type: 'boolean'
                },
                DkimAttributes: {
                  shape: 'S38'
                },
                MailFromAttributes: {
                  type: 'structure',
                  required: ['MailFromDomain', 'MailFromDomainStatus', 'BehaviorOnMxFailure'],
                  members: {
                    MailFromDomain: {},
                    MailFromDomainStatus: {},
                    BehaviorOnMxFailure: {}
                  }
                },
                Policies: {
                  shape: 'S7t'
                },
                Tags: {
                  shape: 'Sz'
                },
                ConfigurationSetName: {},
                VerificationStatus: {},
                VerificationInfo: {
                  type: 'structure',
                  members: {
                    LastCheckedTimestamp: {
                      type: 'timestamp'
                    },
                    LastSuccessTimestamp: {
                      type: 'timestamp'
                    },
                    ErrorType: {},
                    SOARecord: {
                      type: 'structure',
                      members: {
                        PrimaryNameServer: {},
                        AdminEmail: {},
                        SerialNumber: {
                          type: 'long'
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          GetEmailIdentityPolicies: {
            http: {
              method: 'GET',
              requestUri: '/v2/email/identities/{EmailIdentity}/policies'
            },
            input: {
              type: 'structure',
              required: ['EmailIdentity'],
              members: {
                EmailIdentity: {
                  location: 'uri',
                  locationName: 'EmailIdentity'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Policies: {
                  shape: 'S7t'
                }
              }
            }
          },
          GetEmailTemplate: {
            http: {
              method: 'GET',
              requestUri: '/v2/email/templates/{TemplateName}'
            },
            input: {
              type: 'structure',
              required: ['TemplateName'],
              members: {
                TemplateName: {
                  location: 'uri',
                  locationName: 'TemplateName'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['TemplateName', 'TemplateContent'],
              members: {
                TemplateName: {},
                TemplateContent: {
                  shape: 'S3i'
                }
              }
            }
          },
          GetExportJob: {
            http: {
              method: 'GET',
              requestUri: '/v2/email/export-jobs/{JobId}'
            },
            input: {
              type: 'structure',
              required: ['JobId'],
              members: {
                JobId: {
                  location: 'uri',
                  locationName: 'JobId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                JobId: {},
                ExportSourceType: {},
                JobStatus: {},
                ExportDestination: {
                  shape: 'S47'
                },
                ExportDataSource: {
                  shape: 'S3n'
                },
                CreatedTimestamp: {
                  type: 'timestamp'
                },
                CompletedTimestamp: {
                  type: 'timestamp'
                },
                FailureInfo: {
                  shape: 'S89'
                },
                Statistics: {
                  type: 'structure',
                  members: {
                    ProcessedRecordsCount: {
                      type: 'integer'
                    },
                    ExportedRecordsCount: {
                      type: 'integer'
                    }
                  }
                }
              }
            }
          },
          GetImportJob: {
            http: {
              method: 'GET',
              requestUri: '/v2/email/import-jobs/{JobId}'
            },
            input: {
              type: 'structure',
              required: ['JobId'],
              members: {
                JobId: {
                  location: 'uri',
                  locationName: 'JobId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                JobId: {},
                ImportDestination: {
                  shape: 'S4c'
                },
                ImportDataSource: {
                  shape: 'S4h'
                },
                FailureInfo: {
                  shape: 'S89'
                },
                JobStatus: {},
                CreatedTimestamp: {
                  type: 'timestamp'
                },
                CompletedTimestamp: {
                  type: 'timestamp'
                },
                ProcessedRecordsCount: {
                  type: 'integer'
                },
                FailedRecordsCount: {
                  type: 'integer'
                }
              }
            }
          },
          GetMessageInsights: {
            http: {
              method: 'GET',
              requestUri: '/v2/email/insights/{MessageId}/'
            },
            input: {
              type: 'structure',
              required: ['MessageId'],
              members: {
                MessageId: {
                  location: 'uri',
                  locationName: 'MessageId'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                MessageId: {},
                FromEmailAddress: {
                  shape: 'S3x'
                },
                Subject: {
                  shape: 'S3z'
                },
                EmailTags: {
                  shape: 'S8l'
                },
                Insights: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Destination: {
                        shape: 'S3x'
                      },
                      Isp: {},
                      Events: {
                        type: 'list',
                        member: {
                          type: 'structure',
                          members: {
                            Timestamp: {
                              type: 'timestamp'
                            },
                            Type: {},
                            Details: {
                              type: 'structure',
                              members: {
                                Bounce: {
                                  type: 'structure',
                                  members: {
                                    BounceType: {},
                                    BounceSubType: {},
                                    DiagnosticCode: {}
                                  }
                                },
                                Complaint: {
                                  type: 'structure',
                                  members: {
                                    ComplaintSubType: {},
                                    ComplaintFeedbackType: {}
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
          GetSuppressedDestination: {
            http: {
              method: 'GET',
              requestUri: '/v2/email/suppression/addresses/{EmailAddress}'
            },
            input: {
              type: 'structure',
              required: ['EmailAddress'],
              members: {
                EmailAddress: {
                  location: 'uri',
                  locationName: 'EmailAddress'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['SuppressedDestination'],
              members: {
                SuppressedDestination: {
                  type: 'structure',
                  required: ['EmailAddress', 'Reason', 'LastUpdateTime'],
                  members: {
                    EmailAddress: {},
                    Reason: {},
                    LastUpdateTime: {
                      type: 'timestamp'
                    },
                    Attributes: {
                      type: 'structure',
                      members: {
                        MessageId: {},
                        FeedbackId: {}
                      }
                    }
                  }
                }
              }
            }
          },
          ListConfigurationSets: {
            http: {
              method: 'GET',
              requestUri: '/v2/email/configuration-sets'
            },
            input: {
              type: 'structure',
              members: {
                NextToken: {
                  location: 'querystring',
                  locationName: 'NextToken'
                },
                PageSize: {
                  location: 'querystring',
                  locationName: 'PageSize',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ConfigurationSets: {
                  type: 'list',
                  member: {}
                },
                NextToken: {}
              }
            }
          },
          ListContactLists: {
            http: {
              method: 'GET',
              requestUri: '/v2/email/contact-lists'
            },
            input: {
              type: 'structure',
              members: {
                PageSize: {
                  location: 'querystring',
                  locationName: 'PageSize',
                  type: 'integer'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'NextToken'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ContactLists: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ContactListName: {},
                      LastUpdatedTimestamp: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListContacts: {
            http: {
              requestUri: '/v2/email/contact-lists/{ContactListName}/contacts/list'
            },
            input: {
              type: 'structure',
              required: ['ContactListName'],
              members: {
                ContactListName: {
                  location: 'uri',
                  locationName: 'ContactListName'
                },
                Filter: {
                  type: 'structure',
                  members: {
                    FilteredStatus: {},
                    TopicFilter: {
                      type: 'structure',
                      members: {
                        TopicName: {},
                        UseDefaultIfPreferenceUnavailable: {
                          type: 'boolean'
                        }
                      }
                    }
                  }
                },
                PageSize: {
                  type: 'integer'
                },
                NextToken: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                Contacts: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      EmailAddress: {},
                      TopicPreferences: {
                        shape: 'S1u'
                      },
                      TopicDefaultPreferences: {
                        shape: 'S1u'
                      },
                      UnsubscribeAll: {
                        type: 'boolean'
                      },
                      LastUpdatedTimestamp: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListCustomVerificationEmailTemplates: {
            http: {
              method: 'GET',
              requestUri: '/v2/email/custom-verification-email-templates'
            },
            input: {
              type: 'structure',
              members: {
                NextToken: {
                  location: 'querystring',
                  locationName: 'NextToken'
                },
                PageSize: {
                  location: 'querystring',
                  locationName: 'PageSize',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                CustomVerificationEmailTemplates: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      TemplateName: {},
                      FromEmailAddress: {},
                      TemplateSubject: {},
                      SuccessRedirectionURL: {},
                      FailureRedirectionURL: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListDedicatedIpPools: {
            http: {
              method: 'GET',
              requestUri: '/v2/email/dedicated-ip-pools'
            },
            input: {
              type: 'structure',
              members: {
                NextToken: {
                  location: 'querystring',
                  locationName: 'NextToken'
                },
                PageSize: {
                  location: 'querystring',
                  locationName: 'PageSize',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                DedicatedIpPools: {
                  type: 'list',
                  member: {}
                },
                NextToken: {}
              }
            }
          },
          ListDeliverabilityTestReports: {
            http: {
              method: 'GET',
              requestUri: '/v2/email/deliverability-dashboard/test-reports'
            },
            input: {
              type: 'structure',
              members: {
                NextToken: {
                  location: 'querystring',
                  locationName: 'NextToken'
                },
                PageSize: {
                  location: 'querystring',
                  locationName: 'PageSize',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['DeliverabilityTestReports'],
              members: {
                DeliverabilityTestReports: {
                  type: 'list',
                  member: {
                    shape: 'S6y'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListDomainDeliverabilityCampaigns: {
            http: {
              method: 'GET',
              requestUri: '/v2/email/deliverability-dashboard/domains/{SubscribedDomain}/campaigns'
            },
            input: {
              type: 'structure',
              required: ['StartDate', 'EndDate', 'SubscribedDomain'],
              members: {
                StartDate: {
                  location: 'querystring',
                  locationName: 'StartDate',
                  type: 'timestamp'
                },
                EndDate: {
                  location: 'querystring',
                  locationName: 'EndDate',
                  type: 'timestamp'
                },
                SubscribedDomain: {
                  location: 'uri',
                  locationName: 'SubscribedDomain'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'NextToken'
                },
                PageSize: {
                  location: 'querystring',
                  locationName: 'PageSize',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['DomainDeliverabilityCampaigns'],
              members: {
                DomainDeliverabilityCampaigns: {
                  type: 'list',
                  member: {
                    shape: 'S78'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListEmailIdentities: {
            http: {
              method: 'GET',
              requestUri: '/v2/email/identities'
            },
            input: {
              type: 'structure',
              members: {
                NextToken: {
                  location: 'querystring',
                  locationName: 'NextToken'
                },
                PageSize: {
                  location: 'querystring',
                  locationName: 'PageSize',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                EmailIdentities: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      IdentityType: {},
                      IdentityName: {},
                      SendingEnabled: {
                        type: 'boolean'
                      },
                      VerificationStatus: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListEmailTemplates: {
            http: {
              method: 'GET',
              requestUri: '/v2/email/templates'
            },
            input: {
              type: 'structure',
              members: {
                NextToken: {
                  location: 'querystring',
                  locationName: 'NextToken'
                },
                PageSize: {
                  location: 'querystring',
                  locationName: 'PageSize',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                TemplatesMetadata: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      TemplateName: {},
                      CreatedTimestamp: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListExportJobs: {
            http: {
              requestUri: '/v2/email/list-export-jobs'
            },
            input: {
              type: 'structure',
              members: {
                NextToken: {},
                PageSize: {
                  type: 'integer'
                },
                ExportSourceType: {},
                JobStatus: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                ExportJobs: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      JobId: {},
                      ExportSourceType: {},
                      JobStatus: {},
                      CreatedTimestamp: {
                        type: 'timestamp'
                      },
                      CompletedTimestamp: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListImportJobs: {
            http: {
              requestUri: '/v2/email/import-jobs/list'
            },
            input: {
              type: 'structure',
              members: {
                ImportDestinationType: {},
                NextToken: {},
                PageSize: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                ImportJobs: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      JobId: {},
                      ImportDestination: {
                        shape: 'S4c'
                      },
                      JobStatus: {},
                      CreatedTimestamp: {
                        type: 'timestamp'
                      },
                      ProcessedRecordsCount: {
                        type: 'integer'
                      },
                      FailedRecordsCount: {
                        type: 'integer'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListRecommendations: {
            http: {
              requestUri: '/v2/email/vdm/recommendations'
            },
            input: {
              type: 'structure',
              members: {
                Filter: {
                  type: 'map',
                  key: {},
                  value: {}
                },
                NextToken: {},
                PageSize: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                Recommendations: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      ResourceArn: {},
                      Type: {},
                      Description: {},
                      Status: {},
                      CreatedTimestamp: {
                        type: 'timestamp'
                      },
                      LastUpdatedTimestamp: {
                        type: 'timestamp'
                      },
                      Impact: {}
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListSuppressedDestinations: {
            http: {
              method: 'GET',
              requestUri: '/v2/email/suppression/addresses'
            },
            input: {
              type: 'structure',
              members: {
                Reasons: {
                  shape: 'S14',
                  location: 'querystring',
                  locationName: 'Reason'
                },
                StartDate: {
                  location: 'querystring',
                  locationName: 'StartDate',
                  type: 'timestamp'
                },
                EndDate: {
                  location: 'querystring',
                  locationName: 'EndDate',
                  type: 'timestamp'
                },
                NextToken: {
                  location: 'querystring',
                  locationName: 'NextToken'
                },
                PageSize: {
                  location: 'querystring',
                  locationName: 'PageSize',
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                SuppressedDestinationSummaries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['EmailAddress', 'Reason', 'LastUpdateTime'],
                    members: {
                      EmailAddress: {},
                      Reason: {},
                      LastUpdateTime: {
                        type: 'timestamp'
                      }
                    }
                  }
                },
                NextToken: {}
              }
            }
          },
          ListTagsForResource: {
            http: {
              method: 'GET',
              requestUri: '/v2/email/tags'
            },
            input: {
              type: 'structure',
              required: ['ResourceArn'],
              members: {
                ResourceArn: {
                  location: 'querystring',
                  locationName: 'ResourceArn'
                }
              }
            },
            output: {
              type: 'structure',
              required: ['Tags'],
              members: {
                Tags: {
                  shape: 'Sz'
                }
              }
            }
          },
          PutAccountDedicatedIpWarmupAttributes: {
            http: {
              method: 'PUT',
              requestUri: '/v2/email/account/dedicated-ips/warmup'
            },
            input: {
              type: 'structure',
              members: {
                AutoWarmupEnabled: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          PutAccountDetails: {
            http: {
              requestUri: '/v2/email/account/details'
            },
            input: {
              type: 'structure',
              required: ['MailType', 'WebsiteURL', 'UseCaseDescription'],
              members: {
                MailType: {},
                WebsiteURL: {
                  shape: 'S5d'
                },
                ContactLanguage: {},
                UseCaseDescription: {
                  shape: 'S5f'
                },
                AdditionalContactEmailAddresses: {
                  shape: 'S5g'
                },
                ProductionAccessEnabled: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          PutAccountSendingAttributes: {
            http: {
              method: 'PUT',
              requestUri: '/v2/email/account/sending'
            },
            input: {
              type: 'structure',
              members: {
                SendingEnabled: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          PutAccountSuppressionAttributes: {
            http: {
              method: 'PUT',
              requestUri: '/v2/email/account/suppression'
            },
            input: {
              type: 'structure',
              members: {
                SuppressedReasons: {
                  shape: 'S14'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          PutAccountVdmAttributes: {
            http: {
              method: 'PUT',
              requestUri: '/v2/email/account/vdm'
            },
            input: {
              type: 'structure',
              required: ['VdmAttributes'],
              members: {
                VdmAttributes: {
                  shape: 'S5l'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          PutConfigurationSetDeliveryOptions: {
            http: {
              method: 'PUT',
              requestUri: '/v2/email/configuration-sets/{ConfigurationSetName}/delivery-options'
            },
            input: {
              type: 'structure',
              required: ['ConfigurationSetName'],
              members: {
                ConfigurationSetName: {
                  location: 'uri',
                  locationName: 'ConfigurationSetName'
                },
                TlsPolicy: {},
                SendingPoolName: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          PutConfigurationSetReputationOptions: {
            http: {
              method: 'PUT',
              requestUri: '/v2/email/configuration-sets/{ConfigurationSetName}/reputation-options'
            },
            input: {
              type: 'structure',
              required: ['ConfigurationSetName'],
              members: {
                ConfigurationSetName: {
                  location: 'uri',
                  locationName: 'ConfigurationSetName'
                },
                ReputationMetricsEnabled: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          PutConfigurationSetSendingOptions: {
            http: {
              method: 'PUT',
              requestUri: '/v2/email/configuration-sets/{ConfigurationSetName}/sending'
            },
            input: {
              type: 'structure',
              required: ['ConfigurationSetName'],
              members: {
                ConfigurationSetName: {
                  location: 'uri',
                  locationName: 'ConfigurationSetName'
                },
                SendingEnabled: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          PutConfigurationSetSuppressionOptions: {
            http: {
              method: 'PUT',
              requestUri: '/v2/email/configuration-sets/{ConfigurationSetName}/suppression-options'
            },
            input: {
              type: 'structure',
              required: ['ConfigurationSetName'],
              members: {
                ConfigurationSetName: {
                  location: 'uri',
                  locationName: 'ConfigurationSetName'
                },
                SuppressedReasons: {
                  shape: 'S14'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          PutConfigurationSetTrackingOptions: {
            http: {
              method: 'PUT',
              requestUri: '/v2/email/configuration-sets/{ConfigurationSetName}/tracking-options'
            },
            input: {
              type: 'structure',
              required: ['ConfigurationSetName'],
              members: {
                ConfigurationSetName: {
                  location: 'uri',
                  locationName: 'ConfigurationSetName'
                },
                CustomRedirectDomain: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          PutConfigurationSetVdmOptions: {
            http: {
              method: 'PUT',
              requestUri: '/v2/email/configuration-sets/{ConfigurationSetName}/vdm-options'
            },
            input: {
              type: 'structure',
              required: ['ConfigurationSetName'],
              members: {
                ConfigurationSetName: {
                  location: 'uri',
                  locationName: 'ConfigurationSetName'
                },
                VdmOptions: {
                  shape: 'S16'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          PutDedicatedIpInPool: {
            http: {
              method: 'PUT',
              requestUri: '/v2/email/dedicated-ips/{IP}/pool'
            },
            input: {
              type: 'structure',
              required: ['Ip', 'DestinationPoolName'],
              members: {
                Ip: {
                  location: 'uri',
                  locationName: 'IP'
                },
                DestinationPoolName: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          PutDedicatedIpPoolScalingAttributes: {
            http: {
              method: 'PUT',
              requestUri: '/v2/email/dedicated-ip-pools/{PoolName}/scaling'
            },
            input: {
              type: 'structure',
              required: ['PoolName', 'ScalingMode'],
              members: {
                PoolName: {
                  location: 'uri',
                  locationName: 'PoolName'
                },
                ScalingMode: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            },
            idempotent: true
          },
          PutDedicatedIpWarmupAttributes: {
            http: {
              method: 'PUT',
              requestUri: '/v2/email/dedicated-ips/{IP}/warmup'
            },
            input: {
              type: 'structure',
              required: ['Ip', 'WarmupPercentage'],
              members: {
                Ip: {
                  location: 'uri',
                  locationName: 'IP'
                },
                WarmupPercentage: {
                  type: 'integer'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          PutDeliverabilityDashboardOption: {
            http: {
              method: 'PUT',
              requestUri: '/v2/email/deliverability-dashboard'
            },
            input: {
              type: 'structure',
              required: ['DashboardEnabled'],
              members: {
                DashboardEnabled: {
                  type: 'boolean'
                },
                SubscribedDomains: {
                  shape: 'S6q'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          PutEmailIdentityConfigurationSetAttributes: {
            http: {
              method: 'PUT',
              requestUri: '/v2/email/identities/{EmailIdentity}/configuration-set'
            },
            input: {
              type: 'structure',
              required: ['EmailIdentity'],
              members: {
                EmailIdentity: {
                  location: 'uri',
                  locationName: 'EmailIdentity'
                },
                ConfigurationSetName: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          PutEmailIdentityDkimAttributes: {
            http: {
              method: 'PUT',
              requestUri: '/v2/email/identities/{EmailIdentity}/dkim'
            },
            input: {
              type: 'structure',
              required: ['EmailIdentity'],
              members: {
                EmailIdentity: {
                  location: 'uri',
                  locationName: 'EmailIdentity'
                },
                SigningEnabled: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          PutEmailIdentityDkimSigningAttributes: {
            http: {
              method: 'PUT',
              requestUri: '/v1/email/identities/{EmailIdentity}/dkim/signing'
            },
            input: {
              type: 'structure',
              required: ['EmailIdentity', 'SigningAttributesOrigin'],
              members: {
                EmailIdentity: {
                  location: 'uri',
                  locationName: 'EmailIdentity'
                },
                SigningAttributesOrigin: {},
                SigningAttributes: {
                  shape: 'S32'
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                DkimStatus: {},
                DkimTokens: {
                  shape: 'S3a'
                }
              }
            }
          },
          PutEmailIdentityFeedbackAttributes: {
            http: {
              method: 'PUT',
              requestUri: '/v2/email/identities/{EmailIdentity}/feedback'
            },
            input: {
              type: 'structure',
              required: ['EmailIdentity'],
              members: {
                EmailIdentity: {
                  location: 'uri',
                  locationName: 'EmailIdentity'
                },
                EmailForwardingEnabled: {
                  type: 'boolean'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          PutEmailIdentityMailFromAttributes: {
            http: {
              method: 'PUT',
              requestUri: '/v2/email/identities/{EmailIdentity}/mail-from'
            },
            input: {
              type: 'structure',
              required: ['EmailIdentity'],
              members: {
                EmailIdentity: {
                  location: 'uri',
                  locationName: 'EmailIdentity'
                },
                MailFromDomain: {},
                BehaviorOnMxFailure: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          PutSuppressedDestination: {
            http: {
              method: 'PUT',
              requestUri: '/v2/email/suppression/addresses'
            },
            input: {
              type: 'structure',
              required: ['EmailAddress', 'Reason'],
              members: {
                EmailAddress: {},
                Reason: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          SendBulkEmail: {
            http: {
              requestUri: '/v2/email/outbound-bulk-emails'
            },
            input: {
              type: 'structure',
              required: ['DefaultContent', 'BulkEmailEntries'],
              members: {
                FromEmailAddress: {},
                FromEmailAddressIdentityArn: {},
                ReplyToAddresses: {
                  shape: 'Sc4'
                },
                FeedbackForwardingEmailAddress: {},
                FeedbackForwardingEmailAddressIdentityArn: {},
                DefaultEmailTags: {
                  shape: 'S8l'
                },
                DefaultContent: {
                  type: 'structure',
                  members: {
                    Template: {
                      shape: 'S2v'
                    }
                  }
                },
                BulkEmailEntries: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    required: ['Destination'],
                    members: {
                      Destination: {
                        shape: 'Sc8'
                      },
                      ReplacementTags: {
                        shape: 'S8l'
                      },
                      ReplacementEmailContent: {
                        type: 'structure',
                        members: {
                          ReplacementTemplate: {
                            type: 'structure',
                            members: {
                              ReplacementTemplateData: {}
                            }
                          }
                        }
                      },
                      ReplacementHeaders: {
                        shape: 'S2p'
                      }
                    }
                  }
                },
                ConfigurationSetName: {}
              }
            },
            output: {
              type: 'structure',
              required: ['BulkEmailEntryResults'],
              members: {
                BulkEmailEntryResults: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      Status: {},
                      Error: {},
                      MessageId: {}
                    }
                  }
                }
              }
            }
          },
          SendCustomVerificationEmail: {
            http: {
              requestUri: '/v2/email/outbound-custom-verification-emails'
            },
            input: {
              type: 'structure',
              required: ['EmailAddress', 'TemplateName'],
              members: {
                EmailAddress: {},
                TemplateName: {},
                ConfigurationSetName: {}
              }
            },
            output: {
              type: 'structure',
              members: {
                MessageId: {}
              }
            }
          },
          SendEmail: {
            http: {
              requestUri: '/v2/email/outbound-emails'
            },
            input: {
              type: 'structure',
              required: ['Content'],
              members: {
                FromEmailAddress: {},
                FromEmailAddressIdentityArn: {},
                Destination: {
                  shape: 'Sc8'
                },
                ReplyToAddresses: {
                  shape: 'Sc4'
                },
                FeedbackForwardingEmailAddress: {},
                FeedbackForwardingEmailAddressIdentityArn: {},
                Content: {
                  shape: 'S2j'
                },
                EmailTags: {
                  shape: 'S8l'
                },
                ConfigurationSetName: {},
                ListManagementOptions: {
                  type: 'structure',
                  required: ['ContactListName'],
                  members: {
                    ContactListName: {},
                    TopicName: {}
                  }
                }
              }
            },
            output: {
              type: 'structure',
              members: {
                MessageId: {}
              }
            }
          },
          TagResource: {
            http: {
              requestUri: '/v2/email/tags'
            },
            input: {
              type: 'structure',
              required: ['ResourceArn', 'Tags'],
              members: {
                ResourceArn: {},
                Tags: {
                  shape: 'Sz'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          TestRenderEmailTemplate: {
            http: {
              requestUri: '/v2/email/templates/{TemplateName}/render'
            },
            input: {
              type: 'structure',
              required: ['TemplateName', 'TemplateData'],
              members: {
                TemplateName: {
                  location: 'uri',
                  locationName: 'TemplateName'
                },
                TemplateData: {}
              }
            },
            output: {
              type: 'structure',
              required: ['RenderedTemplate'],
              members: {
                RenderedTemplate: {}
              }
            }
          },
          UntagResource: {
            http: {
              method: 'DELETE',
              requestUri: '/v2/email/tags'
            },
            input: {
              type: 'structure',
              required: ['ResourceArn', 'TagKeys'],
              members: {
                ResourceArn: {
                  location: 'querystring',
                  locationName: 'ResourceArn'
                },
                TagKeys: {
                  location: 'querystring',
                  locationName: 'TagKeys',
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
          UpdateConfigurationSetEventDestination: {
            http: {
              method: 'PUT',
              requestUri: '/v2/email/configuration-sets/{ConfigurationSetName}/event-destinations/{EventDestinationName}'
            },
            input: {
              type: 'structure',
              required: ['ConfigurationSetName', 'EventDestinationName', 'EventDestination'],
              members: {
                ConfigurationSetName: {
                  location: 'uri',
                  locationName: 'ConfigurationSetName'
                },
                EventDestinationName: {
                  location: 'uri',
                  locationName: 'EventDestinationName'
                },
                EventDestination: {
                  shape: 'S1d'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateContact: {
            http: {
              method: 'PUT',
              requestUri: '/v2/email/contact-lists/{ContactListName}/contacts/{EmailAddress}'
            },
            input: {
              type: 'structure',
              required: ['ContactListName', 'EmailAddress'],
              members: {
                ContactListName: {
                  location: 'uri',
                  locationName: 'ContactListName'
                },
                EmailAddress: {
                  location: 'uri',
                  locationName: 'EmailAddress'
                },
                TopicPreferences: {
                  shape: 'S1u'
                },
                UnsubscribeAll: {
                  type: 'boolean'
                },
                AttributesData: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateContactList: {
            http: {
              method: 'PUT',
              requestUri: '/v2/email/contact-lists/{ContactListName}'
            },
            input: {
              type: 'structure',
              required: ['ContactListName'],
              members: {
                ContactListName: {
                  location: 'uri',
                  locationName: 'ContactListName'
                },
                Topics: {
                  shape: 'S22'
                },
                Description: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateCustomVerificationEmailTemplate: {
            http: {
              method: 'PUT',
              requestUri: '/v2/email/custom-verification-email-templates/{TemplateName}'
            },
            input: {
              type: 'structure',
              required: ['TemplateName', 'FromEmailAddress', 'TemplateSubject', 'TemplateContent', 'SuccessRedirectionURL', 'FailureRedirectionURL'],
              members: {
                TemplateName: {
                  location: 'uri',
                  locationName: 'TemplateName'
                },
                FromEmailAddress: {},
                TemplateSubject: {},
                TemplateContent: {},
                SuccessRedirectionURL: {},
                FailureRedirectionURL: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateEmailIdentityPolicy: {
            http: {
              method: 'PUT',
              requestUri: '/v2/email/identities/{EmailIdentity}/policies/{PolicyName}'
            },
            input: {
              type: 'structure',
              required: ['EmailIdentity', 'PolicyName', 'Policy'],
              members: {
                EmailIdentity: {
                  location: 'uri',
                  locationName: 'EmailIdentity'
                },
                PolicyName: {
                  location: 'uri',
                  locationName: 'PolicyName'
                },
                Policy: {}
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          UpdateEmailTemplate: {
            http: {
              method: 'PUT',
              requestUri: '/v2/email/templates/{TemplateName}'
            },
            input: {
              type: 'structure',
              required: ['TemplateName', 'TemplateContent'],
              members: {
                TemplateName: {
                  location: 'uri',
                  locationName: 'TemplateName'
                },
                TemplateContent: {
                  shape: 'S3i'
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
          Sq: {
            type: 'structure',
            required: ['CustomRedirectDomain'],
            members: {
              CustomRedirectDomain: {}
            }
          },
          Ss: {
            type: 'structure',
            members: {
              TlsPolicy: {},
              SendingPoolName: {}
            }
          },
          Sv: {
            type: 'structure',
            members: {
              ReputationMetricsEnabled: {
                type: 'boolean'
              },
              LastFreshStart: {
                type: 'timestamp'
              }
            }
          },
          Sy: {
            type: 'structure',
            members: {
              SendingEnabled: {
                type: 'boolean'
              }
            }
          },
          Sz: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Key', 'Value'],
              members: {
                Key: {},
                Value: {}
              }
            }
          },
          S13: {
            type: 'structure',
            members: {
              SuppressedReasons: {
                shape: 'S14'
              }
            }
          },
          S14: {
            type: 'list',
            member: {}
          },
          S16: {
            type: 'structure',
            members: {
              DashboardOptions: {
                type: 'structure',
                members: {
                  EngagementMetrics: {}
                }
              },
              GuardianOptions: {
                type: 'structure',
                members: {
                  OptimizedSharedDelivery: {}
                }
              }
            }
          },
          S1d: {
            type: 'structure',
            members: {
              Enabled: {
                type: 'boolean'
              },
              MatchingEventTypes: {
                shape: 'S1e'
              },
              KinesisFirehoseDestination: {
                shape: 'S1g'
              },
              CloudWatchDestination: {
                shape: 'S1i'
              },
              SnsDestination: {
                shape: 'S1o'
              },
              PinpointDestination: {
                shape: 'S1p'
              }
            }
          },
          S1e: {
            type: 'list',
            member: {}
          },
          S1g: {
            type: 'structure',
            required: ['IamRoleArn', 'DeliveryStreamArn'],
            members: {
              IamRoleArn: {},
              DeliveryStreamArn: {}
            }
          },
          S1i: {
            type: 'structure',
            required: ['DimensionConfigurations'],
            members: {
              DimensionConfigurations: {
                type: 'list',
                member: {
                  type: 'structure',
                  required: ['DimensionName', 'DimensionValueSource', 'DefaultDimensionValue'],
                  members: {
                    DimensionName: {},
                    DimensionValueSource: {},
                    DefaultDimensionValue: {}
                  }
                }
              }
            }
          },
          S1o: {
            type: 'structure',
            required: ['TopicArn'],
            members: {
              TopicArn: {}
            }
          },
          S1p: {
            type: 'structure',
            members: {
              ApplicationArn: {}
            }
          },
          S1u: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['TopicName', 'SubscriptionStatus'],
              members: {
                TopicName: {},
                SubscriptionStatus: {}
              }
            }
          },
          S22: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['TopicName', 'DisplayName', 'DefaultSubscriptionStatus'],
              members: {
                TopicName: {},
                DisplayName: {},
                Description: {},
                DefaultSubscriptionStatus: {}
              }
            }
          },
          S2j: {
            type: 'structure',
            members: {
              Simple: {
                type: 'structure',
                required: ['Subject', 'Body'],
                members: {
                  Subject: {
                    shape: 'S2l'
                  },
                  Body: {
                    type: 'structure',
                    members: {
                      Text: {
                        shape: 'S2l'
                      },
                      Html: {
                        shape: 'S2l'
                      }
                    }
                  },
                  Headers: {
                    shape: 'S2p'
                  }
                }
              },
              Raw: {
                type: 'structure',
                required: ['Data'],
                members: {
                  Data: {
                    type: 'blob'
                  }
                }
              },
              Template: {
                shape: 'S2v'
              }
            }
          },
          S2l: {
            type: 'structure',
            required: ['Data'],
            members: {
              Data: {},
              Charset: {}
            }
          },
          S2p: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Name', 'Value'],
              members: {
                Name: {},
                Value: {}
              }
            }
          },
          S2v: {
            type: 'structure',
            members: {
              TemplateName: {},
              TemplateArn: {},
              TemplateData: {},
              Headers: {
                shape: 'S2p'
              }
            }
          },
          S32: {
            type: 'structure',
            members: {
              DomainSigningSelector: {},
              DomainSigningPrivateKey: {
                type: 'string',
                sensitive: true
              },
              NextSigningKeyLength: {}
            }
          },
          S38: {
            type: 'structure',
            members: {
              SigningEnabled: {
                type: 'boolean'
              },
              Status: {},
              Tokens: {
                shape: 'S3a'
              },
              SigningAttributesOrigin: {},
              NextSigningKeyLength: {},
              CurrentSigningKeyLength: {},
              LastKeyGenerationTimestamp: {
                type: 'timestamp'
              }
            }
          },
          S3a: {
            type: 'list',
            member: {}
          },
          S3i: {
            type: 'structure',
            members: {
              Subject: {},
              Text: {},
              Html: {}
            }
          },
          S3n: {
            type: 'structure',
            members: {
              MetricsDataSource: {
                type: 'structure',
                required: ['Dimensions', 'Namespace', 'Metrics', 'StartDate', 'EndDate'],
                members: {
                  Dimensions: {
                    type: 'map',
                    key: {},
                    value: {
                      type: 'list',
                      member: {}
                    }
                  },
                  Namespace: {},
                  Metrics: {
                    type: 'list',
                    member: {
                      type: 'structure',
                      members: {
                        Name: {},
                        Aggregation: {}
                      }
                    }
                  },
                  StartDate: {
                    type: 'timestamp'
                  },
                  EndDate: {
                    type: 'timestamp'
                  }
                }
              },
              MessageInsightsDataSource: {
                type: 'structure',
                required: ['StartDate', 'EndDate'],
                members: {
                  StartDate: {
                    type: 'timestamp'
                  },
                  EndDate: {
                    type: 'timestamp'
                  },
                  Include: {
                    shape: 'S3v'
                  },
                  Exclude: {
                    shape: 'S3v'
                  },
                  MaxResults: {
                    type: 'integer'
                  }
                }
              }
            }
          },
          S3v: {
            type: 'structure',
            members: {
              FromEmailAddress: {
                shape: 'S3w'
              },
              Destination: {
                shape: 'S3w'
              },
              Subject: {
                type: 'list',
                member: {
                  shape: 'S3z'
                }
              },
              Isp: {
                type: 'list',
                member: {}
              },
              LastDeliveryEvent: {
                type: 'list',
                member: {}
              },
              LastEngagementEvent: {
                type: 'list',
                member: {}
              }
            }
          },
          S3w: {
            type: 'list',
            member: {
              shape: 'S3x'
            }
          },
          S3x: {
            type: 'string',
            sensitive: true
          },
          S3z: {
            type: 'string',
            sensitive: true
          },
          S47: {
            type: 'structure',
            required: ['DataFormat'],
            members: {
              DataFormat: {},
              S3Url: {}
            }
          },
          S4c: {
            type: 'structure',
            members: {
              SuppressionListDestination: {
                type: 'structure',
                required: ['SuppressionListImportAction'],
                members: {
                  SuppressionListImportAction: {}
                }
              },
              ContactListDestination: {
                type: 'structure',
                required: ['ContactListName', 'ContactListImportAction'],
                members: {
                  ContactListName: {},
                  ContactListImportAction: {}
                }
              }
            }
          },
          S4h: {
            type: 'structure',
            required: ['S3Url', 'DataFormat'],
            members: {
              S3Url: {},
              DataFormat: {}
            }
          },
          S5d: {
            type: 'string',
            sensitive: true
          },
          S5f: {
            type: 'string',
            sensitive: true
          },
          S5g: {
            type: 'list',
            member: {
              type: 'string',
              sensitive: true
            },
            sensitive: true
          },
          S5l: {
            type: 'structure',
            required: ['VdmEnabled'],
            members: {
              VdmEnabled: {},
              DashboardAttributes: {
                type: 'structure',
                members: {
                  EngagementMetrics: {}
                }
              },
              GuardianAttributes: {
                type: 'structure',
                members: {
                  OptimizedSharedDelivery: {}
                }
              }
            }
          },
          S6c: {
            type: 'structure',
            required: ['Ip', 'WarmupStatus', 'WarmupPercentage'],
            members: {
              Ip: {},
              WarmupStatus: {},
              WarmupPercentage: {
                type: 'integer'
              },
              PoolName: {}
            }
          },
          S6q: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                Domain: {},
                SubscriptionStartDate: {
                  type: 'timestamp'
                },
                InboxPlacementTrackingOption: {
                  type: 'structure',
                  members: {
                    Global: {
                      type: 'boolean'
                    },
                    TrackedIsps: {
                      type: 'list',
                      member: {}
                    }
                  }
                }
              }
            }
          },
          S6y: {
            type: 'structure',
            members: {
              ReportId: {},
              ReportName: {},
              Subject: {},
              FromEmailAddress: {},
              CreateDate: {
                type: 'timestamp'
              },
              DeliverabilityTestStatus: {}
            }
          },
          S70: {
            type: 'structure',
            members: {
              InboxPercentage: {
                type: 'double'
              },
              SpamPercentage: {
                type: 'double'
              },
              MissingPercentage: {
                type: 'double'
              },
              SpfPercentage: {
                type: 'double'
              },
              DkimPercentage: {
                type: 'double'
              }
            }
          },
          S78: {
            type: 'structure',
            members: {
              CampaignId: {},
              ImageUrl: {},
              Subject: {},
              FromAddress: {},
              SendingIps: {
                type: 'list',
                member: {}
              },
              FirstSeenDateTime: {
                type: 'timestamp'
              },
              LastSeenDateTime: {
                type: 'timestamp'
              },
              InboxCount: {
                type: 'long'
              },
              SpamCount: {
                type: 'long'
              },
              ReadRate: {
                type: 'double'
              },
              DeleteRate: {
                type: 'double'
              },
              ReadDeleteRate: {
                type: 'double'
              },
              ProjectedVolume: {
                type: 'long'
              },
              Esps: {
                type: 'list',
                member: {}
              }
            }
          },
          S7i: {
            type: 'structure',
            members: {
              InboxRawCount: {
                type: 'long'
              },
              SpamRawCount: {
                type: 'long'
              },
              ProjectedInbox: {
                type: 'long'
              },
              ProjectedSpam: {
                type: 'long'
              }
            }
          },
          S7j: {
            type: 'list',
            member: {
              type: 'structure',
              members: {
                IspName: {},
                InboxRawCount: {
                  type: 'long'
                },
                SpamRawCount: {
                  type: 'long'
                },
                InboxPercentage: {
                  type: 'double'
                },
                SpamPercentage: {
                  type: 'double'
                }
              }
            }
          },
          S7t: {
            type: 'map',
            key: {},
            value: {}
          },
          S89: {
            type: 'structure',
            members: {
              FailedRecordsS3Url: {},
              ErrorMessage: {}
            }
          },
          S8l: {
            type: 'list',
            member: {
              type: 'structure',
              required: ['Name', 'Value'],
              members: {
                Name: {},
                Value: {}
              }
            }
          },
          Sc4: {
            type: 'list',
            member: {}
          },
          Sc8: {
            type: 'structure',
            members: {
              ToAddresses: {
                shape: 'Sc4'
              },
              CcAddresses: {
                shape: 'Sc4'
              },
              BccAddresses: {
                shape: 'Sc4'
              }
            }
          }
        }
      });
    }
  };
});
//# sourceMappingURL=b961c04f56fd92958dd184b3d4dfe25c67c04716.js.map