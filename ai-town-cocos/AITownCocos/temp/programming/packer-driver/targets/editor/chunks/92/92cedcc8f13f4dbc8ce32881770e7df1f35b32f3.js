System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: '2.0',
        metadata: {
          apiVersion: '2018-07-26',
          endpointPrefix: 'email',
          jsonVersion: '1.1',
          protocol: 'rest-json',
          serviceAbbreviation: 'Pinpoint Email',
          serviceFullName: 'Amazon Pinpoint Email Service',
          serviceId: 'Pinpoint Email',
          signatureVersion: 'v4',
          signingName: 'ses',
          uid: 'pinpoint-email-2018-07-26'
        },
        operations: {
          CreateConfigurationSet: {
            http: {
              requestUri: '/v1/email/configuration-sets'
            },
            input: {
              type: 'structure',
              required: ['ConfigurationSetName'],
              members: {
                ConfigurationSetName: {},
                TrackingOptions: {
                  shape: 'S3'
                },
                DeliveryOptions: {
                  shape: 'S5'
                },
                ReputationOptions: {
                  shape: 'S8'
                },
                SendingOptions: {
                  shape: 'Sb'
                },
                Tags: {
                  shape: 'Sc'
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
              requestUri: '/v1/email/configuration-sets/{ConfigurationSetName}/event-destinations'
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
                  shape: 'Sj'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          CreateDedicatedIpPool: {
            http: {
              requestUri: '/v1/email/dedicated-ip-pools'
            },
            input: {
              type: 'structure',
              required: ['PoolName'],
              members: {
                PoolName: {},
                Tags: {
                  shape: 'Sc'
                }
              }
            },
            output: {
              type: 'structure',
              members: {}
            }
          },
          CreateDeliverabilityTestReport: {
            http: {
              requestUri: '/v1/email/deliverability-dashboard/test'
            },
            input: {
              type: 'structure',
              required: ['FromEmailAddress', 'Content'],
              members: {
                ReportName: {},
                FromEmailAddress: {},
                Content: {
                  shape: 'S12'
                },
                Tags: {
                  shape: 'Sc'
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
              requestUri: '/v1/email/identities'
            },
            input: {
              type: 'structure',
              required: ['EmailIdentity'],
              members: {
                EmailIdentity: {},
                Tags: {
                  shape: 'Sc'
                }
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
                  shape: 'S1k'
                }
              }
            }
          },
          DeleteConfigurationSet: {
            http: {
              method: 'DELETE',
              requestUri: '/v1/email/configuration-sets/{ConfigurationSetName}'
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
              requestUri: '/v1/email/configuration-sets/{ConfigurationSetName}/event-destinations/{EventDestinationName}'
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
          DeleteDedicatedIpPool: {
            http: {
              method: 'DELETE',
              requestUri: '/v1/email/dedicated-ip-pools/{PoolName}'
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
              requestUri: '/v1/email/identities/{EmailIdentity}'
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
          GetAccount: {
            http: {
              method: 'GET',
              requestUri: '/v1/email/account'
            },
            input: {
              type: 'structure',
              members: {}
            },
            output: {
              type: 'structure',
              members: {
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
                DedicatedIpAutoWarmupEnabled: {
                  type: 'boolean'
                },
                EnforcementStatus: {},
                ProductionAccessEnabled: {
                  type: 'boolean'
                }
              }
            }
          },
          GetBlacklistReports: {
            http: {
              method: 'GET',
              requestUri: '/v1/email/deliverability-dashboard/blacklist-report'
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
              requestUri: '/v1/email/configuration-sets/{ConfigurationSetName}'
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
                  shape: 'S3'
                },
                DeliveryOptions: {
                  shape: 'S5'
                },
                ReputationOptions: {
                  shape: 'S8'
                },
                SendingOptions: {
                  shape: 'Sb'
                },
                Tags: {
                  shape: 'Sc'
                }
              }
            }
          },
          GetConfigurationSetEventDestinations: {
            http: {
              method: 'GET',
              requestUri: '/v1/email/configuration-sets/{ConfigurationSetName}/event-destinations'
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
                        shape: 'Sk'
                      },
                      KinesisFirehoseDestination: {
                        shape: 'Sm'
                      },
                      CloudWatchDestination: {
                        shape: 'So'
                      },
                      SnsDestination: {
                        shape: 'Su'
                      },
                      PinpointDestination: {
                        shape: 'Sv'
                      }
                    }
                  }
                }
              }
            }
          },
          GetDedicatedIp: {
            http: {
              method: 'GET',
              requestUri: '/v1/email/dedicated-ips/{IP}'
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
                  shape: 'S2m'
                }
              }
            }
          },
          GetDedicatedIps: {
            http: {
              method: 'GET',
              requestUri: '/v1/email/dedicated-ips'
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
                    shape: 'S2m'
                  }
                },
                NextToken: {}
              }
            }
          },
          GetDeliverabilityDashboardOptions: {
            http: {
              method: 'GET',
              requestUri: '/v1/email/deliverability-dashboard'
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
                  shape: 'S2x'
                },
                PendingExpirationSubscribedDomains: {
                  shape: 'S2x'
                }
              }
            }
          },
          GetDeliverabilityTestReport: {
            http: {
              method: 'GET',
              requestUri: '/v1/email/deliverability-dashboard/test-reports/{ReportId}'
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
                  shape: 'S35'
                },
                OverallPlacement: {
                  shape: 'S37'
                },
                IspPlacements: {
                  type: 'list',
                  member: {
                    type: 'structure',
                    members: {
                      IspName: {},
                      PlacementStatistics: {
                        shape: 'S37'
                      }
                    }
                  }
                },
                Message: {},
                Tags: {
                  shape: 'Sc'
                }
              }
            }
          },
          GetDomainDeliverabilityCampaign: {
            http: {
              method: 'GET',
              requestUri: '/v1/email/deliverability-dashboard/campaigns/{CampaignId}'
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
                  shape: 'S3f'
                }
              }
            }
          },
          GetDomainStatisticsReport: {
            http: {
              method: 'GET',
              requestUri: '/v1/email/deliverability-dashboard/statistics-report/{Domain}'
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
                      shape: 'S3p'
                    },
                    ReadRatePercent: {
                      type: 'double'
                    },
                    DomainIspPlacements: {
                      shape: 'S3q'
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
                        shape: 'S3p'
                      },
                      DomainIspPlacements: {
                        shape: 'S3q'
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
              requestUri: '/v1/email/identities/{EmailIdentity}'
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
                  shape: 'S1k'
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
                Tags: {
                  shape: 'Sc'
                }
              }
            }
          },
          ListConfigurationSets: {
            http: {
              method: 'GET',
              requestUri: '/v1/email/configuration-sets'
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
          ListDedicatedIpPools: {
            http: {
              method: 'GET',
              requestUri: '/v1/email/dedicated-ip-pools'
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
              requestUri: '/v1/email/deliverability-dashboard/test-reports'
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
                    shape: 'S35'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListDomainDeliverabilityCampaigns: {
            http: {
              method: 'GET',
              requestUri: '/v1/email/deliverability-dashboard/domains/{SubscribedDomain}/campaigns'
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
                    shape: 'S3f'
                  }
                },
                NextToken: {}
              }
            }
          },
          ListEmailIdentities: {
            http: {
              method: 'GET',
              requestUri: '/v1/email/identities'
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
              requestUri: '/v1/email/tags'
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
                  shape: 'Sc'
                }
              }
            }
          },
          PutAccountDedicatedIpWarmupAttributes: {
            http: {
              method: 'PUT',
              requestUri: '/v1/email/account/dedicated-ips/warmup'
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
          PutAccountSendingAttributes: {
            http: {
              method: 'PUT',
              requestUri: '/v1/email/account/sending'
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
          PutConfigurationSetDeliveryOptions: {
            http: {
              method: 'PUT',
              requestUri: '/v1/email/configuration-sets/{ConfigurationSetName}/delivery-options'
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
              requestUri: '/v1/email/configuration-sets/{ConfigurationSetName}/reputation-options'
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
              requestUri: '/v1/email/configuration-sets/{ConfigurationSetName}/sending'
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
          PutConfigurationSetTrackingOptions: {
            http: {
              method: 'PUT',
              requestUri: '/v1/email/configuration-sets/{ConfigurationSetName}/tracking-options'
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
          PutDedicatedIpInPool: {
            http: {
              method: 'PUT',
              requestUri: '/v1/email/dedicated-ips/{IP}/pool'
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
          PutDedicatedIpWarmupAttributes: {
            http: {
              method: 'PUT',
              requestUri: '/v1/email/dedicated-ips/{IP}/warmup'
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
              requestUri: '/v1/email/deliverability-dashboard'
            },
            input: {
              type: 'structure',
              required: ['DashboardEnabled'],
              members: {
                DashboardEnabled: {
                  type: 'boolean'
                },
                SubscribedDomains: {
                  shape: 'S2x'
                }
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
              requestUri: '/v1/email/identities/{EmailIdentity}/dkim'
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
          PutEmailIdentityFeedbackAttributes: {
            http: {
              method: 'PUT',
              requestUri: '/v1/email/identities/{EmailIdentity}/feedback'
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
              requestUri: '/v1/email/identities/{EmailIdentity}/mail-from'
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
          SendEmail: {
            http: {
              requestUri: '/v1/email/outbound-emails'
            },
            input: {
              type: 'structure',
              required: ['Destination', 'Content'],
              members: {
                FromEmailAddress: {},
                Destination: {
                  type: 'structure',
                  members: {
                    ToAddresses: {
                      shape: 'S59'
                    },
                    CcAddresses: {
                      shape: 'S59'
                    },
                    BccAddresses: {
                      shape: 'S59'
                    }
                  }
                },
                ReplyToAddresses: {
                  shape: 'S59'
                },
                FeedbackForwardingEmailAddress: {},
                Content: {
                  shape: 'S12'
                },
                EmailTags: {
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
          TagResource: {
            http: {
              requestUri: '/v1/email/tags'
            },
            input: {
              type: 'structure',
              required: ['ResourceArn', 'Tags'],
              members: {
                ResourceArn: {},
                Tags: {
                  shape: 'Sc'
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
              requestUri: '/v1/email/tags'
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
              requestUri: '/v1/email/configuration-sets/{ConfigurationSetName}/event-destinations/{EventDestinationName}'
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
                  shape: 'Sj'
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
          S3: {
            type: 'structure',
            required: ['CustomRedirectDomain'],
            members: {
              CustomRedirectDomain: {}
            }
          },
          S5: {
            type: 'structure',
            members: {
              TlsPolicy: {},
              SendingPoolName: {}
            }
          },
          S8: {
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
          Sb: {
            type: 'structure',
            members: {
              SendingEnabled: {
                type: 'boolean'
              }
            }
          },
          Sc: {
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
          Sj: {
            type: 'structure',
            members: {
              Enabled: {
                type: 'boolean'
              },
              MatchingEventTypes: {
                shape: 'Sk'
              },
              KinesisFirehoseDestination: {
                shape: 'Sm'
              },
              CloudWatchDestination: {
                shape: 'So'
              },
              SnsDestination: {
                shape: 'Su'
              },
              PinpointDestination: {
                shape: 'Sv'
              }
            }
          },
          Sk: {
            type: 'list',
            member: {}
          },
          Sm: {
            type: 'structure',
            required: ['IamRoleArn', 'DeliveryStreamArn'],
            members: {
              IamRoleArn: {},
              DeliveryStreamArn: {}
            }
          },
          So: {
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
          Su: {
            type: 'structure',
            required: ['TopicArn'],
            members: {
              TopicArn: {}
            }
          },
          Sv: {
            type: 'structure',
            members: {
              ApplicationArn: {}
            }
          },
          S12: {
            type: 'structure',
            members: {
              Simple: {
                type: 'structure',
                required: ['Subject', 'Body'],
                members: {
                  Subject: {
                    shape: 'S14'
                  },
                  Body: {
                    type: 'structure',
                    members: {
                      Text: {
                        shape: 'S14'
                      },
                      Html: {
                        shape: 'S14'
                      }
                    }
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
                type: 'structure',
                members: {
                  TemplateArn: {},
                  TemplateData: {}
                }
              }
            }
          },
          S14: {
            type: 'structure',
            required: ['Data'],
            members: {
              Data: {},
              Charset: {}
            }
          },
          S1k: {
            type: 'structure',
            members: {
              SigningEnabled: {
                type: 'boolean'
              },
              Status: {},
              Tokens: {
                type: 'list',
                member: {}
              }
            }
          },
          S2m: {
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
          S2x: {
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
          S35: {
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
          S37: {
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
          S3f: {
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
          S3p: {
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
          S3q: {
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
          S59: {
            type: 'list',
            member: {}
          }
        }
      });
    }
  };
});
//# sourceMappingURL=92cedcc8f13f4dbc8ce32881770e7df1f35b32f3.js.map